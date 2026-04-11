import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentParent, addChildToParent, genId } from '../lib/storage';
import { AVATARS, SUBJECTS, GRADE_LEVELS } from '../lib/constants';
import Button from '../components/Button';
import Input from '../components/Input';

const AVATAR_VIBES = {
  nova:  'Curious & wise',
  sage:  'Calm & peaceful',
  byte:  'Clever & playful',
  ace:   'Bold & visionary',
  muse:  'Creative & free',
  valor: 'Brave & warm',
  terra: 'Grounded & loyal',
  lyra:  'Wise & storytelling',
};

export default function AddChild() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  if (!parent) { navigate('/parent/login'); return null; }

  const [step, setStep] = useState(1); // 1=info, 2=avatar, 3=subjects
  const [form, setForm] = useState({
    name: '', age: '8', grade: 'Kindergarten', avatar: '', subjects: [], pin: '1234',
  });
  const [errors, setErrors] = useState({});

  function toggleSubject(id) {
    setForm(f => ({
      ...f,
      subjects: f.subjects.includes(id)
        ? f.subjects.filter(s => s !== id)
        : [...f.subjects, id],
    }));
  }

  function validateStep1() {
    const e = {};
    if (!form.name.trim()) e.name = 'Child name is required';
    if (!form.age || +form.age < 3 || +form.age > 12) e.age = 'Age must be between 3 and 12';
    return e;
  }

  function next() {
    if (step === 1) {
      const e = validateStep1();
      if (Object.keys(e).length) { setErrors(e); return; }
      setErrors({});
    }
    if (step === 2 && !form.avatar) { setErrors({ avatar: 'Please choose an avatar' }); return; }
    setErrors({});
    setStep(s => s + 1);
  }

  function handleSubmit() {
    if (form.subjects.length === 0) { setErrors({ subjects: 'Select at least one subject' }); return; }
    const child = {
      id: genId(),
      name: form.name,
      age: +form.age,
      grade: form.grade,
      avatar: form.avatar,
      subjects: form.subjects,
      pin: form.pin || '1234',
      progress: {},
      createdAt: Date.now(),
    };
    addChildToParent(parent.id, child);
    navigate('/parent/dashboard');
  }

  const steps = ['Info', 'Avatar', 'Subjects'];

  return (
    <div className="transition-page max-w-2xl mx-auto">
      <button onClick={() => navigate('/parent/dashboard')} className="text-white/40 hover:text-white text-sm mb-6 flex items-center gap-2 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Dashboard
      </button>

      <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
        Add a Child
      </h1>
      <p className="text-white/40 text-sm mb-8">Set up a learning profile for your little one</p>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all
              ${step > i + 1 ? 'bg-[#7C3AED] text-white' : step === i + 1 ? 'bg-[#7C3AED] text-white ring-4 ring-[#7C3AED]/20' : 'bg-white/5 text-white/30'}`}>
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-sm ${step === i + 1 ? 'text-white' : 'text-white/30'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-px w-8 ${step > i + 1 ? 'bg-[#7C3AED]' : 'bg-white/10'}`}/>}
          </div>
        ))}
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8 flex flex-col gap-5">
          <Input label="Child's Name" placeholder="Luna" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} error={errors.name}/>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-white/70">Age</label>
              <select value={form.age} onChange={e=>setForm(f=>({...f,age:e.target.value}))} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] transition-all">
                {Array.from({length:10},(_,i)=>i+3).map(a=>(
                  <option key={a} value={a} className="bg-[#0F0B2E]">{a} years old</option>
                ))}
              </select>
              {errors.age && <p className="text-red-400 text-sm">{errors.age}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-white/70">Grade Level</label>
              <select value={form.grade} onChange={e=>setForm(f=>({...f,grade:e.target.value}))} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] transition-all">
                {GRADE_LEVELS.map(g=>(
                  <option key={g} value={g} className="bg-[#0F0B2E]">{g}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white/70">4-Digit PIN <span className="text-white/30 font-normal">(default: 1234)</span></label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              placeholder="1234"
              value={form.pin}
              onChange={e=>{if(/^\d{0,4}$/.test(e.target.value))setForm(f=>({...f,pin:e.target.value}))}}
              className="w-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7C3AED] transition-all tracking-widest text-center text-lg"
            />
          </div>
          <Button size="lg" onClick={next} className="mt-2">Continue</Button>
        </div>
      )}

      {/* Step 2: Avatar */}
      {step === 2 && (
        <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2" style={{fontFamily:'Georgia,serif'}}>Choose a spirit guide</h2>
          <p className="text-white/40 text-sm mb-6">Your child's personal AI companion for every subject and lesson — one guide, all subjects</p>
          {errors.avatar && <p className="text-red-400 text-sm mb-4">{errors.avatar}</p>}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {AVATARS.map(av => (
              <button
                key={av.id}
                onClick={() => setForm(f=>({...f,avatar:av.id}))}
                className={`rounded-2xl p-4 flex flex-col items-center gap-2 border-2 transition-all duration-200 cursor-pointer
                  ${form.avatar === av.id
                    ? 'border-[#7C3AED] bg-[#7C3AED]/15 scale-105'
                    : 'border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5'}`}
              >
                <img
                  src={av.image}
                  alt={av.name}
                  className="w-20 h-20 rounded-full object-cover"
                  style={{ boxShadow: `0 0 0 2px ${av.color}60` }}
                />
                <div className="text-center">
                  <p className="font-semibold text-white text-sm">{av.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{AVATAR_VIBES[av.id]}</p>
                </div>
                {form.avatar === av.id && (
                  <div className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={()=>setStep(1)}>Back</Button>
            <Button onClick={next} className="flex-1">Continue</Button>
          </div>
        </div>
      )}

      {/* Step 3: Subjects */}
      {step === 3 && (
        <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-white mb-2" style={{fontFamily:'Georgia,serif'}}>Pick their subjects</h2>
          <p className="text-white/40 text-sm mb-6">Select all that {form.name || 'your child'} will explore</p>
          {errors.subjects && <p className="text-red-400 text-sm mb-4">{errors.subjects}</p>}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {SUBJECTS.map(s => {
              const selected = form.subjects.includes(s.id);
              return (
                <label
                  key={s.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all
                    ${selected ? 'border-[#7C3AED]/60 bg-[#7C3AED]/10' : 'border-white/8 hover:border-white/20 bg-white/3'}`}
                >
                  <input type="checkbox" className="sr-only" checked={selected} onChange={()=>toggleSubject(s.id)}/>
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all ${selected ? 'bg-[#7C3AED] border-[#7C3AED]' : 'border-white/20'}`}>
                    {selected && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{s.label}</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full flex-shrink-0" style={{background: s.color}}/>
                </label>
              );
            })}
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={()=>setStep(2)}>Back</Button>
            <Button onClick={handleSubmit} className="flex-1">
              Save Profile ({form.subjects.length} subjects)
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
