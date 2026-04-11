import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import { getCurrentParent } from '../lib/storage';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const parent = getCurrentParent();
    if (parent) navigate('/parent/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#080618] relative overflow-hidden transition-page px-4">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[120px]"/>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]"/>
        {/* Stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Hero mark */}
        <div className="mb-2">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="spl-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="spl-center" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="40%" stopColor="#A78BFA"/>
                <stop offset="100%" stopColor="#7C3AED"/>
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#spl-glow)"/>
            <polygon points="50,8 88,29 88,71 50,92 12,71 12,29" fill="none" stroke="#7C3AED" strokeWidth="1.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.8"/>
            <circle cx="50" cy="30" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="50" cy="70" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="32" cy="40" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="68" cy="40" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="32" cy="60" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="68" cy="60" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="50" cy="50" r="8" fill="url(#spl-center)"/>
          </svg>
        </div>

        <h1
          className="text-5xl md:text-6xl font-semibold mb-4 leading-tight"
          style={{
            fontFamily: 'Georgia, serif',
            background: 'linear-gradient(135deg, #ffffff 60%, #A78BFA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Innerverse<br/>Academy
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-white mb-8 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
          Built for the generation that will change the world.
        </p>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {['Ages 3–18', 'AI-Powered', 'State Compliant'].map((badge, i, arr) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="text-white/50 text-xs font-medium tracking-wide">{badge}</span>
              {i < arr.length - 1 && (
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#7C3AED99' }} />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-sm">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => navigate('/onboarding')}
          >
            Get Started
          </Button>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={() => navigate('/parent/login')}
            >
              Parent Login
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="flex-1"
              onClick={() => navigate('/child/select')}
            >
              I'm a Kid!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
