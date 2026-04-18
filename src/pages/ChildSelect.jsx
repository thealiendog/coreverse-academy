import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentParent, setCurrentChild } from '../lib/storage';
import Button from '../components/Button';

export default function ChildSelect() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  const [selected, setSelected] = useState(null);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const children = parent?.children || [];

  function doShake() {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  }

  function handlePin(digit) {
    const next = pin + digit;
    setPin(next);
    if (next.length === 4) {
      const child = children.find(c => c.id === selected.id);
      if (next === (child.pin || '1234')) {
        setCurrentChild(child);
        setTimeout(() => navigate('/child/dashboard'), 200);
      } else {
        setError('Wrong PIN — try again!');
        doShake();
        setTimeout(() => { setPin(''); setError(''); }, 800);
      }
    }
  }

  function handleBackspace() {
    setPin(p => p.slice(0, -1));
    setError('');
  }

  if (!parent || children.length === 0) {
    return (
      <div className="min-h-screen bg-[#080618] flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-4">🔑</div>
        <h2 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>No profiles yet</h2>
        <p className="text-white/40 mb-6">A parent needs to set up child profiles first.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col items-center justify-center px-4 py-12 transition-page">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-[120px]"/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]"/>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <h1 className="text-4xl font-semibold text-white text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Who's learning today?
        </h1>
        <p className="text-white/40 text-center mb-10">Tap your name to get started</p>

        {/* Child cards */}
        {!selected ? (
          <div className="grid grid-cols-2 gap-4">
            {children.map(child => (
              <button
                key={child.id}
                onClick={() => { setSelected(child); setPin(''); setError(''); }}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl border border-white/10 hover:border-white/25 bg-[#0F0B2E]/80 backdrop-blur transition-all duration-200 hover:scale-105 hover:shadow-2xl group"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(124,58,237,0.18)', border: '2px solid rgba(124,58,237,0.30)' }}
                >
                  <span className="text-4xl font-semibold text-white/90" style={{ fontFamily: 'Georgia, serif' }}>
                    {child.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <p className="text-white font-semibold text-lg leading-tight">{child.name}</p>
              </button>
            ))}
          </div>
        ) : (
          // PIN entry
          <div className="flex flex-col items-center">
            {/* Selected child */}
            <div className="flex flex-col items-center mb-8">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-3"
                style={{ background: 'rgba(124,58,237,0.18)', border: '2px solid rgba(124,58,237,0.35)' }}
              >
                <span className="text-4xl font-semibold text-white/90" style={{ fontFamily: 'Georgia, serif' }}>
                  {selected.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <p className="text-white font-semibold text-xl">{selected.name}</p>
              <p className="text-white/40 text-sm">Enter your 4-digit PIN</p>
            </div>

            {/* PIN dots */}
            <div className={`flex gap-4 mb-6 ${shake ? 'animate-bounce' : ''}`}>
              {[0,1,2,3].map(i => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-200
                    ${i < pin.length ? 'bg-[#7C3AED] border-[#7C3AED] scale-110' : 'border-white/30 bg-transparent'}`}
                />
              ))}
            </div>

            {error && <p className="text-red-400 text-sm mb-4 font-medium">{error}</p>}

            {/* Numpad */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[1,2,3,4,5,6,7,8,9,'',0,'←'].map((d, i) => (
                d === '' ? <div key={i}/> :
                <button
                  key={i}
                  onClick={() => d === '←' ? handleBackspace() : handlePin(String(d))}
                  disabled={pin.length === 4}
                  className={`h-16 rounded-2xl font-semibold text-xl transition-all duration-150
                    ${d === '←'
                      ? 'bg-white/5 text-white/50 hover:bg-white/10'
                      : 'bg-white/8 text-white hover:bg-[#7C3AED]/20 hover:text-[#A78BFA] active:scale-95'}`}
                >
                  {d}
                </button>
              ))}
            </div>

            <button
              onClick={() => { setSelected(null); setPin(''); setError(''); }}
              className="mt-6 text-white/30 hover:text-white/60 text-sm transition-colors"
            >
              Not {selected.name}? Go back
            </button>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <button onClick={() => navigate('/')} className="text-white/20 hover:text-white/40 text-sm transition-colors">
            Parent login
          </button>
        </div>
      </div>
    </div>
  );
}
