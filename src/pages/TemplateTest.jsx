import { useState, useCallback } from 'react';
import DragAndMatch from '../components/games/templates/DragAndMatch';
import CountArray   from '../components/games/templates/CountArray';

// ── TemplateTest ──────────────────────────────────────────────────────────────
// Dev-only test page. Route: /template-test
// Tabs: DragAndMatch | CountArray
// No auth, no TTS (onNarrate is a no-op so number speech is silent in dev).

const DRAG_STEP = {
  instruction: 'Match each shape to the same shape!',
  guideText:   'Drag each shape to the matching one!',
  pairs: [
    { id: 'p1', item: { shape: 'circle',   color: '#F87171' }, target: { shape: 'circle',   color: '#F87171' } },
    { id: 'p2', item: { shape: 'square',   color: '#60A5FA' }, target: { shape: 'square',   color: '#60A5FA' } },
    { id: 'p3', item: { shape: 'triangle', color: '#34D399' }, target: { shape: 'triangle', color: '#34D399' } },
  ],
};

const COUNT_STEP = {
  count:       5,
  emoji:       '⭐',
  instruction: 'Count the stars!',
  guideText:   "Let's count them together!",
  interactive: true,
};

const TAB_STYLE = (active) => ({
  padding:      '8px 18px',
  background:   active ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.05)',
  border:       active ? '1.5px solid rgba(124,58,237,0.8)' : '1.5px solid rgba(255,255,255,0.12)',
  borderRadius:  10,
  color:         active ? '#A78BFA' : 'rgba(255,255,255,0.45)',
  fontSize:     '0.82rem',
  fontWeight:   700,
  cursor:       'pointer',
  touchAction:  'manipulation',
  transition:   'all 0.2s',
});

export default function TemplateTest() {
  const [tab,    setTab]    = useState('drag');  // 'drag' | 'count'
  const [key,    setKey]    = useState(0);
  const [status, setStatus] = useState('');

  const handleComplete = useCallback(() => {
    setStatus(tab === 'drag' ? 'All matched! ✓' : 'All counted! ✓');
  }, [tab]);

  function reset() {
    setKey(k => k + 1);
    setStatus('');
  }

  function switchTab(t) {
    setTab(t);
    setKey(k => k + 1);
    setStatus('');
  }

  const templateName  = tab === 'drag' ? 'DragAndMatch' : 'CountArray';
  const footerNote    = tab === 'drag'
    ? 'Drag each shape to its matching shape. Wrong drops bounce. All matched → done.'
    : 'Tap each star to count. Tapping all 5 triggers the win celebration.';

  return (
    <div style={{
      minHeight:     '100dvh',
      background:    '#080618',
      display:       'flex',
      flexDirection: 'column',
      fontFamily:    'system-ui, -apple-system, sans-serif',
      color:         '#fff',
    }}>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={{
        padding:        '14px 16px 10px',
        borderBottom:   '1px solid rgba(255,255,255,0.1)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        gap:             12,
        flexShrink:     0,
      }}>
        {/* Tab buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={TAB_STYLE(tab === 'drag')}  onClick={() => switchTab('drag')}>
            DragAndMatch
          </button>
          <button style={TAB_STYLE(tab === 'count')} onClick={() => switchTab('count')}>
            CountArray
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          style={{
            padding:     '8px 14px',
            background:  'rgba(124,58,237,0.2)',
            border:      '1.5px solid rgba(124,58,237,0.5)',
            borderRadius: 10,
            color:       '#A78BFA',
            fontSize:    '0.82rem',
            fontWeight:  700,
            cursor:      'pointer',
            touchAction: 'manipulation',
            flexShrink:  0,
          }}
        >
          Reset
        </button>
      </div>

      {/* Template name */}
      <div style={{ padding: '8px 16px 0', flexShrink: 0 }}>
        <p style={{ margin: 0, fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Dev · Template Test · {templateName}
        </p>
      </div>

      {/* ── Status banner ───────────────────────────────────────────────────── */}
      {status && (
        <div style={{
          margin:      '10px 16px 0',
          padding:     '10px 16px',
          background:  'rgba(52,211,153,0.15)',
          border:      '1.5px solid #34D399',
          borderRadius: 12,
          textAlign:   'center',
          color:       '#34D399',
          fontWeight:  800,
          fontSize:    '1.05rem',
          flexShrink:  0,
        }}>
          {status}
        </div>
      )}

      {/* ── Template ────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {tab === 'drag' ? (
          <DragAndMatch
            key={key}
            step={DRAG_STEP}
            onComplete={handleComplete}
            disabled={false}
            karaokeWords={[]}
            karaokeIdx={-1}
          />
        ) : (
          <CountArray
            key={key}
            step={COUNT_STEP}
            onComplete={handleComplete}
            onNarrate={() => {}} // TTS is a no-op in dev; sfx.count() still plays
            disabled={false}
            karaokeWords={[]}
            karaokeIdx={-1}
          />
        )}
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <div style={{
        padding:   '10px 16px 18px',
        flexShrink: 0,
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.6 }}>
          {footerNote}{' '}
          Check console for <code style={{ color: 'rgba(255,255,255,0.35)' }}>[DragAndMatch]</code> logs.
        </p>
      </div>
    </div>
  );
}
