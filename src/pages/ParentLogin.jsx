import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Input from '../components/Input';
import { getParentByEmail, setCurrentParent } from '../lib/storage';

export default function ParentLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function set(field) {
    return e => setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const parent = getParentByEmail(form.email);
    if (!parent || parent.password !== form.password) {
      setError('Incorrect email or password. Please try again.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setCurrentParent(parent);
      navigate('/parent/dashboard');
    }, 400);
  }

  return (
    <div className="min-h-screen bg-[#080618] flex items-center justify-center px-4 transition-page">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/"><Logo size="md" className="justify-center mb-6" /></Link>
          <h1 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome back
          </h1>
          <p className="text-white/40 text-sm">Sign in to your parent account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8 flex flex-col gap-5"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}
          <Input
            label="Email Address"
            type="email"
            placeholder="jane@family.com"
            value={form.email}
            onChange={set('email')}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Your password"
            value={form.password}
            onChange={set('password')}
            required
          />
          <Button type="submit" size="lg" className="mt-2 w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-white/40 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/parent/signup" className="text-[#7C3AED] hover:text-[#8B5CF6] underline underline-offset-2">
            Create one free
          </Link>
        </p>
        <p className="text-center mt-3">
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
