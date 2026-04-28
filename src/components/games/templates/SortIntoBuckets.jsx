import { useState, useEffect } from 'react';
import { sfx, unlockAudio } from '../sounds';
import WinCelebration from '../WinCelebration';
import KaraokeText from '../KaraokeText';

// ── SortIntoBuckets ───────────────────────────────────────────────────────────
//
// Tap-to-select → tap-bucket-to-sort flow:
//   1. All unsorted items appear in a horizontal row at top.
//   2. Child taps an item to "pick it up" (pop sfx, glows, scales up).
//   3. Child taps a bucket at bottom.
//      Correct  → chime, item disappears from row, bucket counter++
//      Wrong    → boing, item shakes, stays selected (no penalty)
//   4. After last item sorted → fanfare sfx, WinCelebration confetti,
//      bucket glow pulse, optional celebrationText narration, then onComplete.
//
// Props:
//   step.buckets         [{ label, image?, color? }]
//   step.items           [{ image?, emoji?, label?, bucket: <bucket index> }]
//   step.celebrationText optional string spoken by guide on completion
//   onReady              → called immediately when done (enables forward arrow)
//   onComplete           → called by WinCelebration.onDone (~1.5s after done)
//   onNarrate(text)      → triggers guide speech (fire-and-forget)
//   onWin                → pulses guide avatar
//   disabled             → blocks interaction while TTS plays

const BUCKET_COLORS = ['#7C3AED', '#F59E0B', '#34D399', '#60A5FA', '#F472B6'];

export default function SortIntoBuckets({
  step, onReady, onComplete, onNarrate, onWin,
  disabled, karaokeWords = [], karaokeIdx = -1,
}) {
  const rawBuckets = step.buckets || [
    { label: 'A', color: '#34D399' },
    { label: 'B', color: '#60A5FA' },
  ];
  const buckets = rawBuckets.map((b, i) => ({
    ...b,
    color: b.color || BUCKET_COLORS[i % BUCKET_COLORS.length],
  }));

  const totalItems = (step.items || []).length;

  const [unsorted,         setUnsorted]         = useState(() => (step.items || []).map((it, i) => ({ ...it, _id: i })));
  const [activeId,         setActiveId]         = useState(null);
  const [bucketCounts,     setBucketCounts]     = useState(() => Array(buckets.length).fill(0));
  const [flashBucket,      setFlashBucket]      = useState(null);   // { idx, type: 'correct'|'wrong' }
  const [shakeId,          setShakeId]          = useState(null);   // _id of item to shake on wrong
  const [done,             setDone]             = useState(false);
  const [showWin,          setShowWin]          = useState(false);  // mounts WinCelebration
  const [bucketsCelebrate, setBucketsCelebrate] = useState(false); // pulsing glow on completion

  // Reset when step changes.
  useEffect(() => {
    setUnsorted((step.items || []).map((it, i) => ({ ...it, _id: i })));
    setActiveId(null);
    setBucketCounts(Array(buckets.length).fill(0));
    setFlashBucket(null);
    setShakeId(null);
    setDone(false);
    setShowWin(false);
    setBucketsCelebrate(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const activeItem  = unsorted.find(it => it._id === activeId) ?? null;
  const sortedCount = totalItems - unsorted.length;

  // ── Item tap ─────────────────────────────────────────────────────────────
  function handleItemTap(item) {
    if (done || disabled) return;
    sfx.pop(); // pickup feedback
    setActiveId(prev => (prev === item._id ? null : item._id));
  }

  // ── Bucket tap ───────────────────────────────────────────────────────────
  function handleBucketTap(bucketIdx) {
    if (done || disabled || !activeItem) return;

    if (activeItem.bucket === bucketIdx) {
      // ✅ Correct drop
      sfx.chime();
      setFlashBucket({ idx: bucketIdx, type: 'correct' });
      setTimeout(() => setFlashBucket(null), 400);

      setBucketCounts(prev => {
        const next = [...prev]; next[bucketIdx]++; return next;
      });

      const remaining = unsorted.filter(it => it._id !== activeId);
      setUnsorted(remaining);
      // Auto-highlight first remaining item for smoother flow
      setActiveId(remaining.length > 0 ? remaining[0]._id : null);

      if (remaining.length === 0) {
        // ── All sorted — celebrate! ───────────────────────────────────────
        setDone(true);
        unlockAudio(); // re-authorize AudioContext within gesture before fanfare
        sfx.fanfare();
        setShowWin(true);          // mounts WinCelebration; onDone triggers onComplete
        setBucketsCelebrate(true); // bucket glow pulse
        onWin?.();                 // pulse guide avatar
        onReady?.();               // enable forward arrow immediately
        setTimeout(() => setBucketsCelebrate(false), 1800);
        // Speak celebration text after fanfare settles (~0.5s)
        const celebText = step.celebrationText || 'You sorted everything! Amazing job!';
        setTimeout(() => onNarrate?.(celebText), 500);
      }
    } else {
      // ❌ Wrong drop
      sfx.boing();
      setFlashBucket({ idx: bucketIdx, type: 'wrong' });
      setTimeout(() => setFlashBucket(null), 400);
      setShakeId(activeId);
      setTimeout(() => setShakeId(null), 500);
      // Stay on same active item — no penalty
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div style={{
      padding:       '12px 12px 24px',
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:            14,
      minHeight:     '58vh',
      overflowY:     'auto',
    }}>
      {/* WinCelebration confetti — auto-advances via onDone after ~1.5s */}
      {showWin && <WinCelebration onDone={() => { setShowWin(false); onComplete?.(); }} />}

      <style>{`
        @keyframes sib-shake {
          0%,100%{transform:translateX(0) scale(1.18)}
          20%{transform:translateX(-8px) scale(1.18)}
          40%{transform:translateX(8px) scale(1.18)}
          60%{transform:translateX(-5px) scale(1.18)}
          80%{transform:translateX(5px) scale(1.18)}
        }
        @keyframes sib-pop {
          0%{opacity:0;transform:scale(0.7)}
          60%{transform:scale(1.1)}
          100%{opacity:1;transform:scale(1)}
        }
        @keyframes sib-active-pulse {
          0%,100%{box-shadow:0 0 14px rgba(252,211,77,0.5)}
          50%{box-shadow:0 0 28px rgba(252,211,77,0.9)}
        }
        @keyframes sib-bucket-celebrate {
          0%,100%{transform:scale(1)}
          40%{transform:scale(1.07)}
          70%{transform:scale(0.97)}
        }
      `}</style>

      {/* ── Instruction ────────────────────────────────────────────────── */}
      <p style={{
        color:     '#fff',
        fontWeight: 800,
        fontSize:  'clamp(1.05rem,3.5vw,1.35rem)',
        textAlign: 'center',
        margin:     0,
        lineHeight: 1.3,
      }}>
        {done
          ? <span style={{ color: '#34D399' }}>You sorted everything!</span>
          : <KaraokeText
              text={step.instruction || 'Sort each item into the right bucket!'}
              karaokeWords={karaokeWords}
              karaokeIdx={karaokeIdx}
            />
        }
      </p>

      {/* ── Unsorted items row ─────────────────────────────────────────── */}
      {!done && (
        <div style={{
          display:        'flex',
          flexWrap:       'wrap',
          gap:             10,
          justifyContent: 'center',
          width:          '100%',
          maxWidth:        400,
        }}>
          {unsorted.map(item => {
            const isActive  = item._id === activeId;
            const isShaking = item._id === shakeId;
            return (
              <button
                key={item._id}
                onClick={() => handleItemTap(item)}
                style={{
                  width:          72,
                  height:         72,
                  borderRadius:   16,
                  border:         isActive
                    ? '3px solid #FCD34D'
                    : '2px solid rgba(255,255,255,0.18)',
                  background:     isActive
                    ? 'rgba(252,211,77,0.14)'
                    : 'rgba(255,255,255,0.07)',
                  padding:        0,
                  cursor:         disabled ? 'default' : 'pointer',
                  touchAction:    'manipulation',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  transform:      isActive ? 'scale(1.18)' : 'scale(1)',
                  transition:     'transform 0.15s ease, border-color 0.15s, background 0.15s',
                  animation:      isShaking
                    ? 'sib-shake 0.5s ease'
                    : isActive
                      ? 'sib-active-pulse 1.2s ease infinite'
                      : 'sib-pop 0.35s ease both',
                  boxShadow:      isActive ? '0 0 18px rgba(252,211,77,0.5)' : 'none',
                  zIndex:         isActive ? 2 : 1,
                }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label || ''}
                    draggable={false}
                    style={{ width: 52, height: 52, objectFit: 'contain', borderRadius: 8 }}
                  />
                ) : item.emoji ? (
                  <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>{item.emoji}</span>
                ) : (
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#7C3AED' }} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* ── Active item slot ───────────────────────────────────────────── */}
      {!done && (
        <div style={{
          minHeight:      60,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:             8,
        }}>
          {activeItem ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width:          80,
                height:         80,
                borderRadius:   18,
                border:         '2.5px solid #FCD34D',
                background:     'rgba(252,211,77,0.12)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                boxShadow:      '0 0 24px rgba(252,211,77,0.4)',
              }}>
                {activeItem.image ? (
                  <img src={activeItem.image} alt={activeItem.label || ''} draggable={false}
                    style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: 10 }} />
                ) : activeItem.emoji ? (
                  <span style={{ fontSize: '2.8rem', lineHeight: 1 }}>{activeItem.emoji}</span>
                ) : null}
              </div>
              <span style={{ color: '#FCD34D', fontSize: '0.75rem', fontWeight: 700 }}>
                Tap a bucket!
              </span>
            </div>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 600 }}>
              Tap an item above to pick it up
            </span>
          )}
        </div>
      )}

      {/* ── Progress counter ───────────────────────────────────────────── */}
      {!done && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', fontWeight: 700, margin: 0 }}>
          {sortedCount} / {totalItems} sorted
        </p>
      )}

      {/* ── Buckets row ────────────────────────────────────────────────── */}
      <div style={{
        display:        'flex',
        gap:             12,
        width:          '100%',
        maxWidth:        420,
        justifyContent: 'center',
      }}>
        {buckets.map((bucket, bi) => {
          const isCorrectFlash = flashBucket?.idx === bi && flashBucket?.type === 'correct';
          const isWrongFlash   = flashBucket?.idx === bi && flashBucket?.type === 'wrong';
          const canTap         = !done && !!activeItem && !disabled;
          const celebGlow      = bucketsCelebrate ? `0 0 36px ${bucket.color}cc, 0 0 12px ${bucket.color}88` : null;

          return (
            <button
              key={bi}
              onClick={() => handleBucketTap(bi)}
              style={{
                flex:          1,
                minHeight:     100,
                borderRadius:  20,
                border:        `${bucketsCelebrate ? 3 : 2}px solid ${
                  isCorrectFlash   ? '#34D399'
                  : isWrongFlash   ? '#EF4444'
                  : bucketsCelebrate ? bucket.color
                  : activeItem     ? bucket.color
                  : bucket.color + '55'
                }`,
                background:    isCorrectFlash
                  ? 'rgba(52,211,153,0.2)'
                  : isWrongFlash
                    ? 'rgba(239,68,68,0.12)'
                    : bucketsCelebrate
                      ? `${bucket.color}33`
                      : activeItem
                        ? `${bucket.color}22`
                        : `${bucket.color}11`,
                cursor:        canTap ? 'pointer' : 'default',
                touchAction:   'manipulation',
                display:       'flex',
                flexDirection: 'column',
                alignItems:    'center',
                justifyContent:'center',
                gap:            6,
                transition:    'all 0.18s ease',
                boxShadow:     celebGlow || (isCorrectFlash
                  ? `0 0 24px rgba(52,211,153,0.6)`
                  : isWrongFlash
                    ? '0 0 16px rgba(239,68,68,0.5)'
                    : activeItem
                      ? `0 0 14px ${bucket.color}44`
                      : 'none'),
                animation:     bucketsCelebrate ? 'sib-bucket-celebrate 0.6s ease infinite' : 'none',
                transform:     isCorrectFlash && !bucketsCelebrate ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {bucket.image ? (
                <img src={bucket.image} alt={bucket.label || ''} draggable={false}
                  style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 8 }} />
              ) : (
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: bucket.color,
                  boxShadow: `0 0 10px ${bucket.color}88` }} />
              )}
              <span style={{ color: bucket.color, fontWeight: 800, fontSize: '0.9rem' }}>
                {bucket.label}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>
                {bucketCounts[bi]} {bucketCounts[bi] === 1 ? 'item' : 'items'}
              </span>
            </button>
          );
        })}
      </div>

      {done && (
        <p style={{ color: '#FCD34D', fontWeight: 900, fontSize: '1.1rem', margin: 0, textAlign: 'center' }}>
          Amazing! You sorted everything!
        </p>
      )}
    </div>
  );
}
