// VocabPopup — modal shown when a vocab word is tapped in MagazineScreen
import { useEffect } from 'react';

export default function VocabPopup({ vocab, accent, onClose, speak }) {
  // Auto-play definition when popup opens
  useEffect(() => {
    if (vocab?.audioPrompt && speak) {
      speak(vocab.audioPrompt);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!vocab) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.72)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 24px',
        touchAction: 'manipulation',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:   '#1a1f2e',
          border:       `2px solid ${accent}55`,
          borderRadius: 20,
          padding:      '28px 24px',
          width:        '100%',
          maxWidth:     340,
          position:     'relative',
          boxShadow:    `0 0 40px ${accent}33`,
          animation:    'vocab-pop 0.22s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        <style>{`
          @keyframes vocab-pop {
            from { transform: scale(0.8); opacity: 0; }
            to   { transform: scale(1);   opacity: 1; }
          }
        `}</style>

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 12, right: 14,
            background: 'rgba(255,255,255,0.08)', border: 'none',
            borderRadius: '50%', width: 32, height: 32,
            color: 'rgba(255,255,255,0.5)', fontSize: '1rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >×</button>

        {/* Word */}
        <div style={{
          fontSize:     '2rem',
          fontWeight:   800,
          color:        accent,
          marginBottom: 12,
          letterSpacing: '-0.02em',
        }}>
          {vocab.word}
        </div>

        {/* Definition */}
        <div style={{
          fontSize:   '1rem',
          color:      'rgba(255,255,255,0.82)',
          lineHeight: 1.6,
          marginBottom: 20,
        }}>
          {vocab.definition}
        </div>

        {/* Replay button */}
        {speak && (
          <button
            onClick={() => speak(vocab.audioPrompt)}
            style={{
              display:      'flex',
              alignItems:   'center',
              gap:          8,
              padding:      '10px 18px',
              background:   `${accent}22`,
              border:       `1px solid ${accent}55`,
              borderRadius: 10,
              color:        accent,
              fontSize:     '0.9rem',
              fontWeight:   600,
              cursor:       'pointer',
              touchAction:  'manipulation',
            }}
          >
            🔊 Hear it again
          </button>
        )}
      </div>
    </div>
  );
}
