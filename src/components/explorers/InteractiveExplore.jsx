// InteractiveExplore — tap-to-select + tap-to-place matching game
// Left column: item images. Right column: bucket text labels.
// Correct: green lock + encouragement. Wrong: red shake + retry phrase.
// Tracks attempts per pair for dashboard analytics.
import { useState, useEffect, useRef } from 'react';
import { sfx } from '../games/sounds';

const ENCOURAGEMENT = ["Yes!", "That's it!", "You got it!", "Beautiful match!"];
const RETRY         = ["Hmm, try again.", "Not quite — try another.", "Almost — keep going."];
const COMPLETION    = "Amazing! You matched them all! You really know your feelings!";

const IMG_BASE = '/explorer-assets/inner-world/';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function InteractiveExplore({
  screen, guideAvatar, speaking, accent,
  onSpeak, onPrewarm, onComplete, onInteractiveComplete,
  karaokeWords, karaokeIdx,
}) {
  const { items = [], buckets = [], guideText = '', instruction = '' } = screen;

  // Shuffle once on mount
  const [shuffledItems]   = useState(() => shuffle([...items]));
  const [shuffledBuckets] = useState(() => shuffle([...buckets]));

  const [selectedKey,  setSelectedKey]  = useState(null);   // bucket.id of selected item
  const [lockedPairs,  setLockedPairs]  = useState(new Set()); // Set of bucket.id matched
  const [shakeItem,    setShakeItem]    = useState(null);   // bucket.id to shake (item col)
  const [shakeBucket,  setShakeBucket]  = useState(null);   // bucket.id to shake (bucket col)
  const [gameComplete, setGameComplete] = useState(false);

  // Tracking refs
  const encourageIdx  = useRef(0);
  const retryIdx      = useRef(0);
  const totalAttempts = useRef(0);
  const firstTryCount = useRef(0);
  const byPair        = useRef({});          // { [bucket.id]: attemptCount }
  const pairsOrder    = useRef([]);          // bucket.id in completion order
  const startTime     = useRef(Date.now());
  const completeFired = useRef(false);
  const mountedRef    = useRef(true);

  // Long-press tracking
  const lpTimers = useRef(new Map());
  const lpFired  = useRef(new Set());

  useEffect(() => { return () => { mountedRef.current = false; }; }, []);

  // Prefetch all Sage phrases + speak intro on mount
  useEffect(() => {
    console.log(`[INTERACTIVE] Loaded items: ${items.map(it => it.label).join(', ')}`);
    const phrases = [guideText, ...ENCOURAGEMENT, ...RETRY, COMPLETION].filter(Boolean);
    console.log(`[INTERACTIVE] Mount — prefetching ${phrases.length} Sage phrases`);
    phrases.forEach(p => onPrewarm?.(p));
    if (guideText) {
      console.log(`[INTERACTIVE] Instruction spoken: "${guideText}"`);
      onSpeak?.(guideText);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Long-press helpers (shared for item + bucket columns) ──────────────────
  const startLP = (key, label) => {
    lpFired.current.delete(key);
    clearTimeout(lpTimers.current.get(key));
    lpTimers.current.set(key, setTimeout(() => {
      lpFired.current.add(key);
      lpTimers.current.delete(key);
      console.log(`[INTERACTIVE] Item tapped to hear: "${label}"`);
      onSpeak?.(label);
    }, 600));
  };
  const cancelLP  = (key) => { clearTimeout(lpTimers.current.get(key)); lpTimers.current.delete(key); };
  const consumeLP = (key) => { const f = lpFired.current.has(key); lpFired.current.delete(key); return f; };

  // ── Item tap (left column) ──────────────────────────────────────────────────
  const handleItemTap = (item) => {
    if (consumeLP(item.correctMatch)) return;
    if (lockedPairs.has(item.correctMatch)) return;
    if (selectedKey === item.correctMatch) { setSelectedKey(null); return; }
    setSelectedKey(item.correctMatch);
    sfx.chime();
    console.log(`[INTERACTIVE] Item selected: "${item.label}" (id: ${item.correctMatch})`);
  };

  // ── Bucket tap (right column) ───────────────────────────────────────────────
  const handleBucketTap = (bucket) => {
    if (consumeLP(bucket.id)) return;
    if (!selectedKey || lockedPairs.has(bucket.id)) return;

    const isCorrect = selectedKey === bucket.id;
    const pairId    = selectedKey;          // use bucket.id as stable pair identifier
    totalAttempts.current++;
    byPair.current[pairId] = (byPair.current[pairId] || 0) + 1;

    console.log(`[INTERACTIVE] Match attempt: ${pairId} → ${bucket.id}. Result: ${isCorrect ? 'correct' : 'wrong'}. Attempts so far: ${totalAttempts.current}`);

    if (isCorrect) {
      if (byPair.current[pairId] === 1) firstTryCount.current++;
      pairsOrder.current.push(pairId);
      const newCount = pairsOrder.current.length;

      setLockedPairs(prev => new Set([...prev, pairId]));
      setSelectedKey(null);
      sfx.sparkle();

      const phrase = ENCOURAGEMENT[encourageIdx.current % ENCOURAGEMENT.length];
      encourageIdx.current++;

      if (newCount === items.length) {
        // All pairs matched — chain: encouragement → completion → advance
        onSpeak?.(phrase, () => {
          if (!mountedRef.current) return;
          onSpeak?.(COMPLETION, () => {
            if (!mountedRef.current || completeFired.current) return;
            completeFired.current = true;
            const details = {
              matchingGameAttempts:  totalAttempts.current,
              firstTryMatches:       firstTryCount.current,
              totalPairs:            items.length,
              completionTimeSeconds: Math.round((Date.now() - startTime.current) / 1000),
              pairsCompletedInOrder: [...pairsOrder.current],
              attemptsByPair:        { ...byPair.current },
            };
            onInteractiveComplete?.(details);
            console.log(`[INTERACTIVE] Game complete. firstTryMatches: ${firstTryCount.current}/${items.length}, time: ${details.completionTimeSeconds}s`);
            setGameComplete(true);
            setTimeout(() => { if (mountedRef.current) onComplete?.(); }, 2000);
          });
        });
      } else {
        onSpeak?.(phrase);
      }
    } else {
      // Wrong — shake both columns, deselect, speak retry
      setShakeItem(pairId);
      setShakeBucket(bucket.id);
      setSelectedKey(null);
      sfx.buzz();
      setTimeout(() => {
        if (!mountedRef.current) return;
        setShakeItem(null);
        setShakeBucket(null);
      }, 450);
      const phrase = RETRY[retryIdx.current % RETRY.length];
      retryIdx.current++;
      onSpeak?.(phrase);
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes game-shake {
          0%,100%{transform:translateX(0)} 20%{transform:translateX(-7px)} 40%{transform:translateX(7px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)}
        }
        @keyframes game-lock {
          0%{transform:scale(0.88);opacity:0.7} 60%{transform:scale(1.07)} 100%{transform:scale(1);opacity:1}
        }
        .g-shake { animation: game-shake 0.44s ease !important; }
        .g-lock  { animation: game-lock  0.36s ease; }
        @media (min-width: 768px) {
          .game-item, .game-bucket { min-height: 88px !important; }
        }
      `}</style>

      {/* Guide intro bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexShrink: 0,
      }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt=""
            style={{
              width: 40, height: 40, borderRadius: '50%', objectFit: 'cover',
              border: `2px solid ${speaking ? accent : 'rgba(255,255,255,0.15)'}`,
              transition: 'border-color 0.2s',
            }}
          />
          {speaking && (
            <div style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              border: `2px solid ${accent}`, opacity: 0.5,
              animation: 'ex-ring 1.4s ease-in-out infinite',
            }} />
          )}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.4 }}>
          {instruction || 'Tap a scene, then tap the feeling it shows.'}
        </span>
      </div>

      {/* Column headers */}
      <div style={{ display: 'flex', padding: '8px 10px 4px', gap: 10, flexShrink: 0 }}>
        <div style={{ flex: 1, fontSize: '0.70rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>
          Scenes
        </div>
        <div style={{ flex: 1, fontSize: '0.70rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>
          Feelings
        </div>
      </div>

      {/* Game grid — two columns */}
      <div style={{ flex: 1, overflow: 'auto', padding: '4px 10px 16px', display: 'flex', gap: 10, WebkitOverflowScrolling: 'touch' }}>

        {/* Left column — images */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {shuffledItems.map(item => {
            const locked   = lockedPairs.has(item.correctMatch);
            const selected = selectedKey === item.correctMatch;
            const shaking  = shakeItem === item.correctMatch;
            return (
              <button
                key={item.correctMatch}
                className={`game-item${shaking ? ' g-shake' : ''}${locked ? ' g-lock' : ''}`}
                onTouchStart={() => startLP(item.correctMatch, item.label)}
                onTouchEnd={()   => cancelLP(item.correctMatch)}
                onTouchMove={()  => cancelLP(item.correctMatch)}
                onClick={() => handleItemTap(item)}
                style={{
                  minHeight:      60,
                  border:         `2.5px solid ${locked ? '#10B981' : selected ? accent : 'rgba(255,255,255,0.14)'}`,
                  borderRadius:   14,
                  background:     locked ? 'rgba(16,185,129,0.1)' : selected ? `${accent}18` : 'rgba(255,255,255,0.05)',
                  boxShadow:      selected ? `0 0 0 3px ${accent}44` : 'none',
                  cursor:         locked ? 'default' : 'pointer',
                  overflow:       'hidden',
                  padding:        0,
                  position:       'relative',
                  touchAction:    'manipulation',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  transform:      selected ? 'scale(1.035)' : 'scale(1)',
                  transition:     'transform 0.12s ease, border-color 0.12s, box-shadow 0.12s',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <img
                  src={`${IMG_BASE}${item.image}`}
                  alt={item.label}
                  style={{ width: '100%', objectFit: 'cover', objectPosition: item.objectPosition || 'center center', minHeight: 60, maxHeight: 110, display: 'block', opacity: locked ? 0.3 : 1, transition: 'opacity 0.2s' }}
                  onError={e => {
                    console.log(`[INTERACTIVE] Missing image: ${item.image} — using placeholder`);
                    // Replace src with inline SVG placeholder showing the label
                    e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="110"><rect width="200" height="110" fill="#1e293b"/><text x="100" y="62" font-family="sans-serif" font-size="18" font-weight="bold" fill="rgba(255,255,255,0.55)" text-anchor="middle">${item.label}</text></svg>`
                    )}`;
                    e.currentTarget.onerror = null; // prevent infinite loop
                  }}
                />
                {locked && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <span style={{ fontSize: '1.8rem' }}>✅</span>
                    <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>{item.label}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right column — feeling labels (buckets) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {shuffledBuckets.map(bucket => {
            const locked   = lockedPairs.has(bucket.id);
            const shaking  = shakeBucket === bucket.id;
            const isTarget = selectedKey !== null && !locked; // highlight when item is selected
            return (
              <button
                key={bucket.id}
                className={`game-bucket${shaking ? ' g-shake' : ''}${locked ? ' g-lock' : ''}`}
                onTouchStart={() => startLP(bucket.id, bucket.label)}
                onTouchEnd={()   => cancelLP(bucket.id)}
                onTouchMove={()  => cancelLP(bucket.id)}
                onClick={() => handleBucketTap(bucket)}
                style={{
                  minHeight:      60,
                  border:         `2.5px solid ${locked ? '#10B981' : isTarget ? `${bucket.color}99` : `${bucket.color}44`}`,
                  borderRadius:   14,
                  background:     locked ? 'rgba(16,185,129,0.1)' : isTarget ? `${bucket.color}1A` : `${bucket.color}0D`,
                  cursor:         locked ? 'default' : 'pointer',
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  justifyContent: 'center',
                  gap:            4,
                  touchAction:    'manipulation',
                  transition:     'border-color 0.14s, background 0.14s',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {locked ? (
                  <>
                    <span style={{ fontSize: '1.5rem' }}>✅</span>
                    <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>Matched!</span>
                  </>
                ) : (
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: bucket.color, letterSpacing: '-0.01em' }}>
                    {bucket.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Game complete overlay */}
      {gameComplete && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
        }}>
          <div style={{ fontSize: '4rem' }}>🎉</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>All Matched!</div>
          <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}>Moving on...</div>
        </div>
      )}
    </div>
  );
}
