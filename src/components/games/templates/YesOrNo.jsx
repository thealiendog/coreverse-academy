import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

export default function YesOrNo({ step, onComplete, onWrong }) {
  const [chosen,  setChosen]  = useState(null); // true=yes, false=no
  const [locked,  setLocked]  = useState(false);

  useEffect(() => {
    setChosen(null);
    setLocked(false);
  }, [step]);

  function choose(val) {
    if (locked) return;
    setChosen(val);
    setLocked(true);
    const correct = (val === step.correctAnswer);
    if (correct) {
      sfx.fanfare();
      setTimeout(onComplete, 1800);
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
          { val: true,  label: 'Yes', emoji: '👍', color: '#34D399', glow: 'rgba(52,211,153,0.5)' },
          { val: false, label: 'No',  emoji: '👎', color: '#EF4444', glow: 'rgba(239,68,68,0.5)'  },
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
                height: 130,
                borderRadius: 24,
                border: `3px solid ${isChosen ? btn.color : btn.color + '44'}`,
                background: isChosen ? `${btn.color}22` : `${btn.color}0a`,
                cursor: locked ? 'default' : 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'all 0.25s ease',
                boxShadow: isCorrect ? `0 0 28px ${btn.glow}` : 'none',
                animation: isCorrect ? 'yn-correct 0.5s ease' : isWrong ? 'yn-wrong 0.5s ease' : 'none',
              }}
            >
              <span style={{ fontSize:'3.5rem', lineHeight:1 }}>{btn.emoji}</span>
              <span style={{ color: isChosen ? btn.color : 'rgba(255,255,255,0.7)', fontWeight:900, fontSize:'1.3rem' }}>
                {btn.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
