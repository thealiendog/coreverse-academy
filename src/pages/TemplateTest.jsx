import { useState, useCallback } from 'react';
import DragAndMatch from '../components/games/templates/DragAndMatch';

// ── TemplateTest ──────────────────────────────────────────────────────────────
// Dev-only test page for the DragAndMatch template.
// Route: /template-test
//
// Uses colored shape placeholders (no images needed) so drag-and-drop mechanics
// can be verified before real Midjourney assets are ready.
// Touch this page only; Inner World and other lesson data are untouched.

const TEST_STEP = {
  instruction: 'Match each shape to the same shape!',
  guideText:   'Drag each shape to the matching one!',
  pairs: [
    {
      id:     'p1',
      item:   { shape: 'circle',   color: '#F87171' }, // red
      target: { shape: 'circle',   color: '#F87171' },
    },
    {
      id:     'p2',
      item:   { shape: 'square',   color: '#60A5FA' }, // blue
      target: { shape: 'square',   color: '#60A5FA' },
    },
    {
      id:     'p3',
      item:   { shape: 'triangle', color: '#34D399' }, // green
      target: { shape: 'triangle', color: '#34D399' },
    },
  ],
};

export default function TemplateTest() {
  const [key,    setKey]    = useState(0);   // bump to remount DragAndMatch
  const [status, setStatus] = useState('');  // completion message

  const handleComplete = useCallback(() => {
    setStatus('All matched! ✓');
  }, []);

  function reset() {
    setKey(k => k + 1);
    setStatus('');
  }

  return (
    <div style={{
      minHeight:  '100dvh',
      background: '#080618',
      display:    'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color:      '#fff',
    }}>
      {/* Header */}
      <div style={{
        padding:        '16px 20px 12px',
        borderBottom:   '1px solid rgba(255,255,255,0.1)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        flexShrink:     0,
      }}>
        <div>
          <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Dev · Template Test
          </p>
          <h1 style={{ margin: '2px 0 0', fontSize: '1.1rem', fontWeight: 800, color: '#A78BFA' }}>
            DragAndMatch
          </h1>
        </div>
        <button
          onClick={reset}
          style={{
            padding:      '8px 16px',
            background:   'rgba(124,58,237,0.25)',
            border:       '1.5px solid rgba(124,58,237,0.6)',
            borderRadius:  10,
            color:        '#A78BFA',
            fontSize:     '0.85rem',
            fontWeight:   700,
            cursor:       'pointer',
            touchAction:  'manipulation',
          }}
        >
          Reset
        </button>
      </div>

      {/* Completion status */}
      {status && (
        <div style={{
          margin:     '12px 20px 0',
          padding:    '10px 16px',
          background: 'rgba(52,211,153,0.15)',
          border:     '1.5px solid #34D399',
          borderRadius: 12,
          textAlign:  'center',
          color:      '#34D399',
          fontWeight: 800,
          fontSize:   '1.1rem',
          flexShrink: 0,
        }}>
          {status}
        </div>
      )}

      {/* Template under test */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <DragAndMatch
          key={key}
          step={TEST_STEP}
          onComplete={handleComplete}
          disabled={false}
          karaokeWords={[]}
          karaokeIdx={-1}
        />
      </div>

      {/* Footer notes */}
      <div style={{
        padding:   '12px 20px 20px',
        flexShrink: 0,
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <p style={{ margin: 0, fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>
          Drag a shape from the left column to its matching shape on the right.
          Wrong drops bounce back. All matched → completion callback fires.
          Check console for <code style={{ color: 'rgba(255,255,255,0.4)' }}>[DragAndMatch]</code> logs.
        </p>
      </div>
    </div>
  );
}
