import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

export default function YesOrNo({ step, onComplete, onReady, onWrong, disabled, speak, onUnlock }) {
  const [chosen,  setChosen]  = useState(null); // true=yes, false=no
  const [locked,  setLocked]  = useState(false);

  useEffect(() => {
    setChosen(null);
    setLocked(false);
    // Speak scenario + tap prompt — one call, no duplicates.
    // question/guideText are intentionally excluded: the scenario already
    // contains the full question ("Should you give them a hug?").
    const text = [
      step.scenario,
      'Tap the green check for yes, or the red X for no.',
    ].filter(Boolean).join(' ');
    if (text) speak?.(text, onUnlock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function choose(val) {
    if (locked || disabled) return;
    setChosen(val);
    setLocked(true);
    const correct = (val === step.correctAnswer);
    if (correct) {
      sfx.fanfare();
      onReady?.(); // enable forward arrow immediately
      setTimeout(() => onComplete?.(), 1500); // auto-advance after celebration
    } else {
      sfx.buzz();
      const explanation = step.explanation || `Not quite! The right answer is ${step.correctAnswer ? 'Yes' : 'No'}.`;
      onWrong?.(explanation);
      setTimeout(() => {
        setChosen(null);
        setLocked(false);
      }, 2000);
    }
  }

  const scenario = step.scenario || '';

  return (
    <div style={{ padding: '16px 16px 24px', display:'flex', flexDirection:'column', alignItems:'center', gap:20 }}>
      <style>{`
        @keyframes yn-correct { 0%{transform:scale(1)}30%{transform:scale(1.18)}70%{transform:scale(0.97)}100%{transform:scale(1)} }
        @keyframes yn-wrong   { 0%,100%{transform:translateX(0)}25%{transform:translateX(-10px)}75%{transform:translateX(10px)} }
      `}</style>

      {/* Scenario image */}
      {step.image && (
        <img
          src={step.image}
          alt=""
          style={{ width:'100%', maxWidth:360, maxHeight:200, objectFit:'cover', borderRadius:20 }}
          draggable={false}
        />
      )}

      {/* Scenario text */}
      <div style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1.5px solid rgba(255,255,255,0.15)',
        borderRadius: 20,
        padding: '16px 20px',
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
      }}>
        <p style={{ color:'rgba(255,255,255,0.9)', fontWeight:700, fontSize:'clamp(1.05rem,3vw,1.25rem)', lineHeight:1.55, margin:0 }}>
          {scenario}
        </p>
      </div>

      {/* Question */}
      {step.question && (
        <p style={{ color:'#FCD34D', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
          {step.question}
        </p>
      )}

      {/* Yes / No buttons */}
      <div style={{ display:'flex', gap:20, width:'100%', maxWidth:380 }}>
        {[
          {
            val: true,
            color: '#34D399',
            glow: 'rgba(52,211,153,0.5)',
            icon: (
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points="18,58 44,84 92,26"
                  stroke="#34D399"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            val: false,
            color: '#EF4444',
            glow: 'rgba(239,68,68,0.5)',
            icon: (
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="24" y1="24" x2="86" y2="86" stroke="#EF4444" strokeWidth="12" strokeLinecap="round" />
                <line x1="86" y1="24" x2="24" y2="86" stroke="#EF4444" strokeWidth="12" strokeLinecap="round" />
              </svg>
            ),
          },
        ].map(btn => {
          const isChosen  = chosen === btn.val;
          const isCorrect = isChosen && (btn.val === step.correctAnswer);
          const isWrong   = isChosen && (btn.val !== step.correctAnswer);

          return (
            <button
              key={String(btn.val)}
              onClick={() => choose(btn.val)}
              style={{
                flex: 1,
                height: 160,
                borderRadius: 24,
                border: `3px solid ${isChosen ? btn.color : btn.color + '44'}`,
                background: isChosen ? `${btn.color}22` : `${btn.color}0a`,
                cursor: locked ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                touchAction: 'manipulation',
                transition: 'all 0.25s ease',
                boxShadow: isCorrect ? `0 0 36px ${btn.glow}` : isChosen ? `0 0 18px ${btn.glow}` : 'none',
                animation: isCorrect ? 'yn-correct 0.5s ease' : isWrong ? 'yn-wrong 0.5s ease' : 'none',
                opacity: isChosen ? 1 : 0.7,
              }}
            >
              <div style={{
                opacity: isChosen ? 1 : 0.55,
                transition: 'opacity 0.2s',
                filter: isChosen ? `drop-shadow(0 0 12px ${btn.color}88)` : 'none',
              }}>
                {btn.icon}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
