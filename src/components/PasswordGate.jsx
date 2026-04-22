import { useState } from 'react';

const SESSION_KEY = 'coreverse-access-granted';

export default function PasswordGate({ children }) {
  const [granted,  setGranted]  = useState(() => !!sessionStorage.getItem(SESSION_KEY));
  const [value,    setValue]    = useState('');
  const [error,    setError]    = useState(false);
  const [shake,    setShake]    = useState(false);

  if (granted) return children;

  function handleSubmit(e) {
    e.preventDefault();
    const correct = import.meta.env.VITE_ACCESS_PASSWORD;
    if (value === correct) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setGranted(true);
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#080618',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <style>{`
        @keyframes pg-shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-10px); }
          40%      { transform: translateX(10px); }
          60%      { transform: translateX(-7px); }
          80%      { transform: translateX(7px); }
        }
      `}</style>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        width: '100%',
        maxWidth: 360,
        animation: shake ? 'pg-shake 0.5s ease' : 'none',
      }}>
        {/* Logo */}
        <img
          src="/favicon.svg"
          alt="Coreverse Academy"
          style={{ width: 72, height: 72, opacity: 0.95 }}
          draggable={false}
        />

        {/* Heading */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.95rem',
            margin: 0,
            letterSpacing: '0.04em',
          }}>
            Private beta — enter password to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            autoComplete="current-password"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '14px 16px',
              borderRadius: 12,
              border: `1.5px solid ${error ? '#EF4444' : 'rgba(255,255,255,0.12)'}`,
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s ease',
            }}
          />

          {error && (
            <p style={{
              color: '#FCA5A5',
              fontSize: '0.875rem',
              margin: 0,
              textAlign: 'center',
            }}>
              Try again
            </p>
          )}

          <button
            type="submit"
            disabled={!value}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: 12,
              border: 'none',
              background: value ? '#7C3AED' : 'rgba(124,58,237,0.3)',
              color: value ? '#fff' : 'rgba(255,255,255,0.4)',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: value ? 'pointer' : 'default',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
