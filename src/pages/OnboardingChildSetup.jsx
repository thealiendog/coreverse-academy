import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { US_STATES } from '../lib/constants';
import { updateOnboardingDraft } from '../lib/onboardingStorage';

const LEVELS = [
  { id: 'ahead',   label: 'Ahead of grade level',     desc: 'Learning beyond their age group',       color: '#A78BFA' },
  { id: 'on',      label: 'On grade level',            desc: 'Right where they should be',            color: '#10B981' },
  { id: 'support', label: 'Needs some extra support',  desc: 'Could use more time and encouragement', color: '#60A5FA' },
];

const HOURS = [
  { id: 'lt5',   label: 'Less than 5 hrs',  sub: 'Light & flexible' },
  { id: '5-10',  label: '5 – 10 hrs',       sub: 'Balanced pace'    },
  { id: '10-20', label: '10 – 20 hrs',      sub: 'Dedicated focus'  },
  { id: '20+',   label: '20+ hrs',          sub: 'Full immersion'   },
];

const TOTAL_STEPS = 5;

const SELECT = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white " +
  "focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30 transition-all text-base";

export default function OnboardingChildSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', age: '8', state: '', level: '', hours: '' });
  const [error, setError] = useState('');

  const name = form.name.trim() || 'your child';

  function advance() {
    setError('');
    if (step === 0 && !form.name.trim()) { setError("Please enter your child's name"); return; }
    if (step === 2 && !form.state)       { setError('Please select your state'); return; }
    if (step === 3 && !form.level)       { setError('Please choose an option'); return; }
    if (step === 4 && !form.hours)       { setError('Please choose an option'); return; }

    if (step === TOTAL_STEPS - 1) {
      updateOnboardingDraft({ child: form });
      navigate('/onboarding/curriculum');
    } else {
      setStep(s => s + 1);
    }
  }

  function back() {
    setError('');
    if (step === 0) navigate('/onboarding');
    else setStep(s => s - 1);
  }

  const isLast = step === TOTAL_STEPS - 1;

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden transition-page">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back */}
        <button
          onClick={back}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        {/* Progress bar */}
        <div className="flex gap-1.5 mb-10">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                flex: i === step ? 2 : 1,
                background: i < step ? '#7C3AED' : i === step ? '#7C3AED' : 'rgba(255,255,255,0.12)',
                opacity: i > step ? 0.6 : 1,
              }}
            />
          ))}
        </div>

        {/* ── Step 0: Name ── */}
        {step === 0 && (
          <div>
            <p className="text-[#A78BFA] text-sm font-medium mb-2">Let's get started</p>
            <h2 className="text-3xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              What is your child's name?
            </h2>
            <Input
              placeholder="Luna, Zephyr, Kai..."
              value={form.name}
              onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setError(''); }}
              error={error}
              autoFocus
              onKeyDown={e => e.key === 'Enter' && advance()}
              className="text-xl py-4"
            />
          </div>
        )}

        {/* ── Step 1: Age ── */}
        {step === 1 && (
          <div>
            <p className="text-[#A78BFA] text-sm font-medium mb-2">About {name}</p>
            <h2 className="text-3xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              How old is {name}?
            </h2>
            <select
              value={form.age}
              onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
              className={SELECT}
            >
              {Array.from({ length: 16 }, (_, i) => i + 3).map(a => (
                <option key={a} value={String(a)} className="bg-[#0F0B2E]">
                  {a} years old
                </option>
              ))}
            </select>
          </div>
        )}

        {/* ── Step 2: State ── */}
        {step === 2 && (
          <div>
            <p className="text-[#A78BFA] text-sm font-medium mb-2">Your location</p>
            <h2 className="text-3xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              Which state do you homeschool in?
            </h2>
            <select
              value={form.state}
              onChange={e => { setForm(f => ({ ...f, state: e.target.value })); setError(''); }}
              className={SELECT}
            >
              <option value="" className="bg-[#0F0B2E]">Select a state…</option>
              {US_STATES.map(s => (
                <option key={s} value={s} className="bg-[#0F0B2E]">{s}</option>
              ))}
            </select>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>
        )}

        {/* ── Step 3: Level ── */}
        {step === 3 && (
          <div>
            <p className="text-[#A78BFA] text-sm font-medium mb-2">Academic level</p>
            <h2 className="text-3xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              How is {name} doing academically?
            </h2>
            <div className="flex flex-col gap-3">
              {LEVELS.map(lv => {
                const active = form.level === lv.id;
                return (
                  <button
                    key={lv.id}
                    onClick={() => { setForm(f => ({ ...f, level: lv.id })); setError(''); }}
                    className="text-left rounded-2xl border transition-all duration-200 flex items-center gap-5 overflow-hidden"
                    style={{
                      borderColor: active ? lv.color + '60' : 'rgba(255,255,255,0.08)',
                      background: active ? lv.color + '0D' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {/* Left color bar */}
                    <div
                      className="self-stretch w-1 flex-shrink-0 transition-opacity duration-200"
                      style={{ background: lv.color, opacity: active ? 1 : 0.25 }}
                    />
                    <div className="flex-1 py-4 pr-5">
                      <p className="font-semibold text-white">{lv.label}</p>
                      <p className="text-white/45 text-sm mt-0.5">{lv.desc}</p>
                    </div>
                    {active && (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                        style={{ background: lv.color }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
          </div>
        )}

        {/* ── Step 4: Hours ── */}
        {step === 4 && (
          <div>
            <p className="text-[#A78BFA] text-sm font-medium mb-2">Your commitment</p>
            <h2 className="text-3xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              How many hours a week can you dedicate to {name}?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {HOURS.map(h => {
                const active = form.hours === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => { setForm(f => ({ ...f, hours: h.id })); setError(''); }}
                    className="text-left p-5 rounded-2xl border-2 transition-all duration-200"
                    style={{
                      borderColor: active ? '#7C3AED' : 'rgba(255,255,255,0.1)',
                      background: active ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <p className="font-semibold text-white text-sm">{h.label}</p>
                    <p className="text-white/40 text-xs mt-1">{h.sub}</p>
                  </button>
                );
              })}
            </div>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
          </div>
        )}

        <Button onClick={advance} size="lg" className="w-full mt-8">
          {isLast ? 'See My Curriculum' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}
