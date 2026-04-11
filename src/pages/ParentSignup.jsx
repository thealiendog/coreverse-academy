import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Input from '../components/Input';
import { getParentByEmail, saveParent, setCurrentParent, genId } from '../lib/storage';
import { US_STATES } from '../lib/constants';

export default function ParentSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirm: '', state: '', numChildren: '1',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    if (!form.state) e.state = 'Please select your state';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    if (getParentByEmail(form.email)) {
      setErrors({ email: 'An account with this email already exists' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const parent = {
        id: genId(),
        name: form.name,
        email: form.email,
        password: form.password,
        state: form.state,
        numChildren: parseInt(form.numChildren),
        children: [],
        tier: 'Homeschool Family',
        billing: 'Monthly',
        createdAt: Date.now(),
      };
      saveParent(parent);
      setCurrentParent(parent);
      navigate('/parent/dashboard');
    }, 600);
  }

  return (
    <div className="min-h-screen bg-[#080618] flex items-center justify-center px-4 py-12 transition-page">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/"><Logo size="md" className="justify-center mb-6" /></Link>
          <h1 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Create your family account
          </h1>
          <p className="text-white/40 text-sm">Join thousands of conscious homeschool families</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8 flex flex-col gap-5"
        >
          <Input
            label="Full Name"
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

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white/70">State</label>
            <select
              value={form.state}
              onChange={set('state')}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30 transition-all"
            >
              <option value="" className="bg-[#0F0B2E]">Select your state</option>
              {US_STATES.map(s => (
                <option key={s} value={s} className="bg-[#0F0B2E]">{s}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-400 text-sm">{errors.state}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white/70">Number of Children</label>
            <select
              value={form.numChildren}
              onChange={set('numChildren')}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30 transition-all"
            >
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n} className="bg-[#0F0B2E]">{n} {n === 1 ? 'child' : 'children'}</option>
              ))}
            </select>
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
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
