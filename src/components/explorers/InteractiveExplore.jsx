// InteractiveExplore — tap-to-select + tap-to-place matching game
// Left column: item images. Right column: bucket text labels.
// Correct: green lock + encouragement. Wrong: red shake + retry phrase.
// Tracks attempts per pair for dashboard analytics.
import { useState, useEffect, useRef } from 'react';
import { sfx } from '../games/sounds';

const ENCOURAGEMENT = ["Yes!", "That's it!", "You got it!", "Beautiful match!"];
const RETRY         = ["Hmm, try again.", "Not quite — try another.", "Almost — keep going."];
const COMPLETION    = "Amazing, {name}! You matched them all!";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function InteractiveExplore({
  screen, guideAvatar, speaking, accent, childName,
  onSpeak, onPrewarm, onComplete, onInteractiveComplete,
  karaokeWords, karaokeIdx, subjectId,
}) {
  const imgBase = `/explorer-assets/${subjectId}/`;
  const { items = [], buckets = [], guideText = '', columnHeaders = ['Items', 'Categories'] } = screen;
  // Substitute {name} throughout — childName comes from commonProps
  const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');
  const instruction = r(guideText) || 'Tap an item, then tap the bucket where it belongs.';

  // Shuffle once on mount.
  // Normalize: if an item has no id (older IW/Cosmos data files), derive one from
  // item.image so every item gets a unique tracking key for lockedPairs/selectedKey.
  const [shuffledItems]   = useState(() => shuffle(
    items.map((item, idx) => item.id ? item : { ...item, id: item.image ?? String(idx) })
  ));
  const [shuffledBuckets] = useState(() => shuffle([...buckets]));

  const [selectedKey,   setSelectedKey]   = useState(null);   // id of selected item
  const [speakingItemId, setSpeakingItemId] = useState(null); // id of item whose label is currently playing
  const [lockedPairs,   setLockedPairs]   = useState(new Set()); // Set of item ids matched
  const [shakeItem,     setShakeItem]     = useState(null);   // id to shake (item col)
  const [shakeBucket,   setShakeBucket]   = useState(null);   // bucket.id to shake (bucket col)
  const [gameComplete,  setGameComplete]  = useState(false);

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

  // Auto-narration sequence tracking
  const labelNarrationCancelled = useRef(false);
  const labelNarrationTimer     = useRef(null);

  useEffect(() => { return () => { mountedRef.current = false; clearTimeout(labelNarrationTimer.current); }; }, []);

  // Prefetch all Sage phrases + speak intro on mount
  useEffect(() => {
    console.log(`[INTERACTIVE] Loaded items: ${items.map(it => it.label).join(', ')}`);
    console.log(`[INTERACTIVE] Item cards using aspect-ratio: 1/1, min-height: 180px (mobile) / 220px (iPad)`);
    console.log(`[INTERACTIVE] Buckets text-size 1.5rem (mobile) / 1.875rem (iPad), min-height 80px (mobile) / 100px (iPad), border 3px`);
    console.log(`[INTERACTIVE] All 4 bucket buttons rendering with uniform width and height (flex:1 in column)`);
    console.log(`[INTERACTIVE] Instruction text size 1.25rem (mobile) / 1.5rem (iPad), Sage avatar 56px (mobile) / 72px (iPad)`);
    // Pre-substitute {name} so prewarm keys match exactly what speak() will request later,
    // eliminating the cache miss that forced a fresh fetch at completion time.
    const guideTextR = r(guideText);
    const phrases = [guideTextR, ...ENCOURAGEMENT, ...RETRY, r(COMPLETION)].filter(Boolean);
    console.log(`[INTERACTIVE] Mount — prefetching ${phrases.length} Sage phrases`);
    phrases.forEach(p => onPrewarm?.(p));
    // After guideText finishes, narrate each item label in sequence with 400ms gaps.
    // Highlights each card while its label plays. Cancelled if user taps any card.
    const narrateLabelAtIndex = (idx) => {
      if (!mountedRef.current || labelNarrationCancelled.current) { setSpeakingItemId(null); return; }
      if (idx >= shuffledItems.length) { setSpeakingItemId(null); return; }
      labelNarrationTimer.current = setTimeout(() => {
        if (!mountedRef.current || labelNarrationCancelled.current) { setSpeakingItemId(null); return; }
        const item = shuffledItems[idx];
        console.log(`[INTERACTIVE] Auto-narrating label ${idx + 1}/${shuffledItems.length}: "${item.label}"`);
        setSpeakingItemId(item.id);
        onSpeak?.(item.label, () => narrateLabelAtIndex(idx + 1));
      }, 400);
    };

    if (guideTextR) {
      console.log(`[INTERACTIVE] Instruction spoken: "${guideTextR}"`);
      onSpeak?.(guideTextR, () => narrateLabelAtIndex(0));
    } else {
      narrateLabelAtIndex(0);
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
    if (consumeLP(item.id)) return;
    if (lockedPairs.has(item.id)) return;
    if (selectedKey === item.id) { setSelectedKey(null); return; }
    labelNarrationCancelled.current = true; // user is interacting — stop auto-narration
    setSelectedKey(item.id);
    setSpeakingItemId(item.id);
    sfx.chime();
    console.log(`[INTERACTIVE] Item selected: "${item.label}" (id: ${item.id})`);
    onSpeak?.(item.label, () => { if (mountedRef.current) setSpeakingItemId(null); });
  };

  // ── Bucket tap (right column) ───────────────────────────────────────────────
  const handleBucketTap = (bucket) => {
    if (consumeLP(bucket.id)) return;
    if (!selectedKey) return;
    labelNarrationCancelled.current = true; // user is interacting — stop auto-narration

    // Find the selected item by its unique id
    const selectedItem = shuffledItems.find(it => it.id === selectedKey);
    if (!selectedItem || lockedPairs.has(selectedItem.id)) return;

    const isCorrect = selectedItem.correctMatch === bucket.id;
    const itemId    = selectedItem.id;
    totalAttempts.current++;
    byPair.current[itemId] = (byPair.current[itemId] || 0) + 1;

    console.log(`[INTERACTIVE] Match attempt: item "${itemId}" → bucket "${bucket.id}". Correct: "${selectedItem.correctMatch}". Result: ${isCorrect ? 'correct' : 'wrong'}. Attempts: ${totalAttempts.current}`);

    if (isCorrect) {
      if (byPair.current[itemId] === 1) firstTryCount.current++;
      pairsOrder.current.push(itemId);
      const newCount = pairsOrder.current.length;

      setLockedPairs(prev => new Set([...prev, itemId]));
      setSelectedKey(null);
      setSpeakingItemId(null);
      sfx.sparkle();

      const matchedItem = selectedItem;
      let phrase;
      if (matchedItem?.matchPhrase) {
        phrase = r(matchedItem.matchPhrase);
      } else {
        phrase = ENCOURAGEMENT[encourageIdx.current % ENCOURAGEMENT.length];
        encourageIdx.current++;
      }

      if (newCount === items.length) {
        // All pairs matched — chain: encouragement → completion → advance
        const completionText = COMPLETION.replace(/\{name\}/g, childName || 'friend');
        onSpeak?.(phrase, () => {
          if (!mountedRef.current) return;
          onSpeak?.(completionText, () => {
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
      setShakeItem(itemId);
      setShakeBucket(bucket.id);
      setSelectedKey(null);
      setSpeakingItemId(null);
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
        @keyframes game-speak-glow {
          0%,100% { box-shadow: 0 0 0 3px rgba(255,255,255,0.32), 0 0 16px 2px rgba(255,255,255,0.10); }
          50%      { box-shadow: 0 0 0 6px rgba(255,255,255,0.16), 0 0 28px 6px rgba(255,255,255,0.06); }
        }
        .g-shake    { animation: game-shake 0.44s ease !important; }
        .g-lock     { animation: game-lock  0.36s ease; }
        .g-speaking { transform: scale(1.04) !important; animation: game-speak-glow 1.2s ease-in-out infinite !important; }
        /* Item cards: square aspect-ratio so Midjourney illustrations are legible.
           Min-height ensures a floor on narrow viewports where aspect-ratio
           alone would compute a height shorter than the illustration needs. */
        .game-item {
          aspect-ratio: 1 / 1;
          min-height: 180px;
        }
        /* Bucket buttons — flex:1 forces all 4 to identical height regardless of label length */
        .game-bucket       { flex: 1; width: 100%; min-height: 80px; padding: 16px 12px; text-align: center; }
        .game-bucket-label { font-size: 1.5rem; font-weight: 800; text-align: center; }
        /* Column headers */
        .game-col-header   { font-size: 0.875rem; letter-spacing: 0.08em; }
        /* Sage instruction bar — most important text on screen, tell kid how to play */
        .game-instruction     { font-size: 1.25rem; line-height: 1.4; }
        .game-sage-avatar     { width: 56px; height: 56px; }
        .game-sage-ring       { inset: -5px; }
        @media (min-width: 768px) {
          .game-item            { min-height: 220px; }
          .game-bucket          { min-height: 100px; padding: 20px 12px; }
          .game-bucket-label    { font-size: 1.875rem; text-align: center; }
          .game-col-header      { font-size: 1rem; }
          .game-instruction     { font-size: 1.5rem; }
          .game-sage-avatar     { width: 72px; height: 72px; }
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
            className="game-sage-avatar"
            style={{
              borderRadius: '50%', objectFit: 'cover',
              border: `2px solid ${speaking ? accent : 'rgba(255,255,255,0.15)'}`,
              transition: 'border-color 0.2s',
            }}
          />
          {speaking && (
            <div className="game-sage-ring" style={{
              position: 'absolute', borderRadius: '50%',
              border: `2px solid ${accent}`, opacity: 0.5,
              animation: 'ex-ring 1.4s ease-in-out infinite',
            }} />
          )}
        </div>
        <span className="game-instruction" style={{ color: '#fff', fontWeight: 600 }}>
          {instruction}
        </span>
      </div>

      {/* Column headers */}
      <div style={{ display: 'flex', padding: '8px 10px 4px', gap: 10, flexShrink: 0 }}>
        <div className="game-col-header" style={{ flex: 1, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>
          {columnHeaders[0]}
        </div>
        <div className="game-col-header" style={{ flex: 1, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>
          {columnHeaders[1]}
        </div>
      </div>

      {/* Game grid — two columns */}
      <div style={{ flex: 1, overflow: 'auto', padding: '4px 10px 16px', display: 'flex', gap: 10, WebkitOverflowScrolling: 'touch' }}>

        {/* Left column — images */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {shuffledItems.map(item => {
            const locked   = lockedPairs.has(item.id);
            const selected = selectedKey === item.id;
            const shaking  = shakeItem === item.id;
            const speaking = speakingItemId === item.id && !locked;
            return (
              <button
                key={item.id}
                className={`game-item${shaking ? ' g-shake' : ''}${locked ? ' g-lock' : ''}${speaking ? ' g-speaking' : ''}`}
                onTouchStart={() => startLP(item.id, item.label)}
                onTouchEnd={()   => cancelLP(item.id)}
                onTouchMove={()  => cancelLP(item.id)}
                onClick={() => handleItemTap(item)}
                style={{
                  border:         locked  ? '2.5px solid #10B981'
                                : speaking ? `3px solid ${accent}`
                                : selected ? `2.5px solid ${accent}`
                                :             '2.5px solid rgba(255,255,255,0.14)',
                  borderRadius:   14,
                  background:     locked ? 'rgba(16,185,129,0.1)' : (speaking || selected) ? `${accent}18` : 'rgba(255,255,255,0.05)',
                  boxShadow:      speaking ? undefined /* CSS animation handles shadow */ : selected ? `0 0 0 3px ${accent}44` : 'none',
                  cursor:         locked ? 'default' : 'pointer',
                  overflow:       'hidden',
                  padding:        0,
                  position:       'relative',
                  touchAction:    'manipulation',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  transform:      speaking ? undefined /* CSS class handles scale */ : selected ? 'scale(1.035)' : 'scale(1)',
                  transition:     'transform 0.18s ease, border-color 0.18s, box-shadow 0.18s',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <img
                  src={`${imgBase}${item.image}`}
                  alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: item.objectPosition || 'center center', display: 'block', opacity: locked ? 0.3 : 1, transition: 'opacity 0.2s' }}
                  onError={e => {
                    console.log(`[INTERACTIVE] Missing image: ${item.image} — using placeholder`);
                    // Replace src with inline SVG placeholder showing the label
                    e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="110"><rect width="200" height="110" fill="#1e293b"/><text x="100" y="62" font-family="sans-serif" font-size="18" font-weight="bold" fill="rgba(255,255,255,0.55)" text-anchor="middle">${item.label}</text></svg>`
                    )}`;
                    e.currentTarget.onerror = null; // prevent infinite loop
                  }}
                />
                {/* Label overlay — always visible on unlocked cards */}
                {!locked && (
                  <div style={{
                    position:   'absolute',
                    bottom:     0,
                    left:       0,
                    right:      0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)',
                    padding:    '22px 8px 8px',
                    textAlign:  'center',
                    pointerEvents: 'none',
                  }}>
                    <span style={{
                      display:    'block',
                      color:      '#fff',
                      fontWeight: 800,
                      fontSize:   'clamp(0.78rem, 2.4vw, 1rem)',
                      lineHeight: 1.2,
                      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.label}
                    </span>
                  </div>
                )}
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
            // Bucket is "done" when every item that maps to it has been matched
            const bucketItems = items.filter(it => it.correctMatch === bucket.id);
            const locked   = bucketItems.length > 0 && bucketItems.every(it => lockedPairs.has(it.id));
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
                  border:         `3px solid ${locked ? '#10B981' : isTarget ? `${bucket.color}99` : `${bucket.color}44`}`,
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
                  <span className="game-bucket-label" style={{ color: bucket.color, letterSpacing: '-0.01em' }}>
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
