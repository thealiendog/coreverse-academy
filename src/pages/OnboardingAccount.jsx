import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getOnboardingDraft, clearOnboardingDraft } from '../lib/onboardingStorage';
import { getParentByEmail, saveParent, setCurrentParent, addChildToParent, genId } from '../lib/storage';
import { getSubject, ageToAgeBand } from '../lib/constants';
import { sendWelcomeEmail } from '../lib/email';
import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';

function ageToGrade(age) {
  const n = parseInt(age, 10) || 8;
  if (n <= 4) return 'Pre-K';
  if (n === 5) return 'Kindergarten';
  const g = Math.min(n - 5, 12);
  const suffix = g === 1 ? 'st' : g === 2 ? 'nd' : g === 3 ? 'rd' : 'th';
  return `${g}${suffix} Grade`;
}

export default function OnboardingAccount() {
  const navigate = useNavigate();
  const draft    = getOnboardingDraft();
  const child    = draft.child    || {};
  const subjects = draft.subjects || ['math', 'language-arts'];

  const [form, setForm]     = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function set(field) {
    return e => {
      setForm(f => ({ ...f, [field]: e.target.value }));
      setErrors(err => ({ ...err, [field]: undefined }));
    };
  }

  function validate() {
    const e = {};
    if (!form.name.trim())                             e.name     = 'Your name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (form.password.length < 6)                      e.password = 'At least 6 characters';
    if (form.password !== form.confirm)                e.confirm  = "Passwords don't match";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (getParentByEmail(form.email)) {
      setErrors({ email: 'An account with this email already exists' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Create parent
      const parent = {
        id:        genId(),
        name:      form.name.trim(),
        email:     form.email.trim(),
        password:  form.password,
        state:     child.state || '',
        children:  [],
        tier:      'Homeschool Family',
        createdAt: Date.now(),
      };
      saveParent(parent);
      setCurrentParent(parent);

      // Create child from onboarding draft
      const childAge = parseInt(child.age, 10) || 8;
      const childRecord = {
        id:           genId(),
        name:         child.name  || 'My Child',
        age:          childAge,
        grade:        ageToGrade(child.age),
        ageBand:      ageToAgeBand(childAge).id,
        avatar:       'nova',
        subjects,
        level:        child.level || 'on',
        hoursPerWeek: child.hours || '5-10',
        progress:     {},
        badges:       [],
        createdAt:    Date.now(),
      };
      addChildToParent(parent.id, childRecord);

      // Fire welcome email (non-blocking)
      sendWelcomeEmail({
        parentName:    form.name.trim(),
        parentEmail:   form.email.trim(),
        childName:     childRecord.name,
        childAge:      childRecord.age,
        subjectLabels: subjects.map(id => getSubject(id).label),
        state:         child.state || '',
      });

      clearOnboardingDraft();
      navigate('/parent/dashboard');
    }, 700);
  }

  return (
    <div className="min-h-screen bg-[#080618] flex items-center justify-center px-4 py-12 relative overflow-hidden transition-page">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back */}
        <button
          onClick={() => navigate('/onboarding/curriculum')}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <Logo size="sm" className="justify-center mb-6" />
          <h1 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome to Coreverse Academy
          </h1>
          {child.name ? (
            <p className="text-white/50 text-sm">
              {child.name}'s learning adventure starts now
            </p>
          ) : (
            <p className="text-white/50 text-sm">Create your family account to get started</p>
          )}
        </div>

        {/* Summary pill */}
        {child.name && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
              <span className="text-[#A78BFA] text-sm font-medium">
                {child.name} · Age {child.age} · {subjects.length} subjects
              </span>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8 flex flex-col gap-5"
        >
          <Input
            label="Your Name"
            placeholder="Jane Morrow"
            value={form.name}
            onChange={set('name')}
            error={errors.name}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="jane@family.com"
            value={form.email}
            onChange={set('email')}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Min. 6 characters"
            value={form.password}
            onChange={set('password')}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Repeat password"
            value={form.confirm}
            onChange={set('confirm')}
            error={errors.confirm}
          />

          <Button type="submit" size="lg" className="mt-2 w-full" disabled={loading}>
            {loading ? 'Creating your account…' : 'Create Account & Start Learning'}
          </Button>
        </form>

        <p className="text-center text-white/40 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/parent/login" className="text-[#7C3AED] hover:text-[#8B5CF6] underline underline-offset-2">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
