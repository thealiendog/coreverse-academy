import { useState, useEffect, useRef } from 'react';
import { sfx } from '../sounds';
import KaraokeText from '../KaraokeText';

// ── DragAndMatch ──────────────────────────────────────────────────────────────
//
// Two-column drag-and-drop matching template.
//
// Left column : item cards (images / labels) — draggable
// Right column: target zones (images / labels) — drop destinations
//
// Interaction flow:
//   1. Guide speaks instruction — items locked while disabled=true
//   2. Child drags an item to a target zone
//   3. Drop within 1.5× target radius → snap, chime, green glow
//   4. Drop elsewhere → item bounces back, boing sound (no speech)
//   5. All pairs matched → onComplete() after 700ms
//
// Randomization: item and target orders are independently shuffled on each
// mount/step-change so the same lesson data never shows the same layout twice.
//
// Touch: uses Pointer Events (unified mouse+touch). `touch-action: none` prevents
// scroll hijack. `setPointerCapture` routes move/up events to the container even
// when the pointer leaves the drag origin element.

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function DragAndMatch({
  step,
  onComplete,
  disabled,
  karaokeWords = [],
  karaokeIdx   = -1,
}) {
  const pairs = step.pairs || [];
  const n     = pairs.length;

  // Responsive item size: slightly smaller for 4 pairs to fit portrait screens.
  const IMG_SIZE = n <= 3 ? 96 : 76;

  // Shuffle orders independently on mount / step change.
  const [itemOrder,   setItemOrder]   = useState(() => shuffle(pairs.map((_, i) => i)));
  const [targetOrder, setTargetOrder] = useState(() => shuffle(pairs.map((_, i) => i)));
  const [matched,     setMatched]     = useState(new Set()); // pair IDs matched
  const [bouncing,    setBouncing]    = useState(null);      // pair ID animating back
  const [dragState,   setDragState]   = useState(null);      // { pairId, curX, curY }

  // DOM refs for hit detection and pointer capture.
  const containerRef = useRef(null);
  const targetEls    = useRef({});    // pairId → target DOM element
  const dragRef      = useRef(null);  // { pairId, curX, curY } — mutable, closure-safe

  // ── Reset on step change ───────────────────────────────────────────────────
  useEffect(() => {
    setItemOrder(shuffle(pairs.map((_, i) => i)));
    setTargetOrder(shuffle(pairs.map((_, i) => i)));
    setMatched(new Set());
    setDragState(null);
    setBouncing(null);
    dragRef.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  // ── Hit detection ──────────────────────────────────────────────────────────
  // Returns the pair ID of the target zone the pointer is near, or null.
  // "Near" means within 1.5× the target's half-dimensions (forgiving drop zone).
  function findHitTarget(x, y) {
    for (const pair of pairs) {
      const el = targetEls.current[pair.id];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const hw = rect.width  * 0.75; // 1.5× half-width
      const hh = rect.height * 0.75;
      if (Math.abs(x - cx) <= hw && Math.abs(y - cy) <= hh) {
        console.log(`[DragAndMatch] hit target "${pair.id}" at (${x.toFixed(0)},${y.toFixed(0)})`);
        return pair.id;
      }
    }
    return null;
  }

  // ── Pointer handlers ───────────────────────────────────────────────────────
  // Pointer Events unify mouse and touch. setPointerCapture on the CONTAINER
  // routes all subsequent pointer events to the container even if pointer drifts
  // off the original item — critical for reliable drag on mobile.

  function onPointerDown(e, pairId) {
    if (disabled || matched.has(pairId)) return;
    e.preventDefault();
    console.log(`[DragAndMatch] drag start: "${pairId}" at (${e.clientX.toFixed(0)},${e.clientY.toFixed(0)})`);
    // Capture on the container so move/up reach us even when pointer leaves item.
    containerRef.current?.setPointerCapture(e.pointerId);
    dragRef.current = { pairId, curX: e.clientX, curY: e.clientY };
    setDragState({ pairId, curX: e.clientX, curY: e.clientY });
  }

  function onContainerPointerMove(e) {
    if (!dragRef.current) return;
    dragRef.current.curX = e.clientX;
    dragRef.current.curY = e.clientY;
    setDragState(prev => prev ? { ...prev, curX: e.clientX, curY: e.clientY } : null);
  }

  function onContainerPointerUp(e) {
    if (!dragRef.current) return;
    const { pairId, curX, curY } = dragRef.current;
    dragRef.current = null;
    console.log(`[DragAndMatch] drop: "${pairId}" at (${curX.toFixed(0)},${curY.toFixed(0)})`);

    const hitId = findHitTarget(curX, curY);

    if (hitId === pairId) {
      // ── Correct match ────────────────────────────────────────────────────
      console.log(`[DragAndMatch] CORRECT: "${pairId}"`);
      sfx.chime();
      setDragState(null);
      setMatched(prev => {
        const next = new Set([...prev, pairId]);
        if (next.size === pairs.length) {
          console.log('[DragAndMatch] ALL MATCHED → onComplete');
          setTimeout(() => onComplete?.(), 700);
        }
        return next;
      });
    } else {
      // ── Wrong / missed ───────────────────────────────────────────────────
      console.log(`[DragAndMatch] wrong drop: "${pairId}" (hit: ${hitId ?? 'nothing'})`);
      sfx.boing();
      setBouncing(pairId);
      setDragState(null);
      setTimeout(() => setBouncing(null), 500);
    }
  }

  // Touch handlers — supplement pointer events per spec.
  // Pointer events handle all logic; these add mobile diagnostics and scroll prevention.
  function onTouchStart(e, pairId) {
    if (disabled || matched.has(pairId)) return;
    console.log(`[DragAndMatch] touchstart: "${pairId}"`);
    // touch-action:none (CSS) already prevents scroll; e.preventDefault() here
    // is an extra safeguard for older mobile browsers.
    e.preventDefault();
  }
  function onTouchMove(e) {
    if (!dragRef.current) return;
    e.preventDefault(); // prevent scroll during drag
  }
  function onTouchEnd(e, pairId) {
    console.log(`[DragAndMatch] touchend: "${pairId}"`);
  }

  // ── Ghost: dragging visual (fixed overlay, follows pointer) ───────────────
  const draggingPair = dragState ? pairs.find(p => p.id === dragState.pairId) : null;

  // ── Card and zone sizes ───────────────────────────────────────────────────
  const CARD_W   = IMG_SIZE + 24;  // item/target card width (px)
  const CARD_MIN = IMG_SIZE + 28;  // item/target card min-height (px)

  // ── Helpers ───────────────────────────────────────────────────────────────
  function ItemContent({ pair, isMatch, isDark }) {
    return (
      <>
        {pair.item.image && (
          <img
            src={pair.item.image}
            alt={pair.item.label || ''}
            draggable={false}
            style={{ width: IMG_SIZE, height: IMG_SIZE, objectFit: 'contain', borderRadius: 10 }}
          />
        )}
        {pair.item.label && (
          <span style={{
            color:      isMatch ? '#34D399' : isDark ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.9)',
            fontSize:   '0.78rem',
            fontWeight: 700,
            textAlign:  'center',
          }}>
            {pair.item.label}
          </span>
        )}
      </>
    );
  }

  function TargetContent({ pair, isMatch }) {
    if (isMatch) {
      // Show matched item inside target zone.
      return (
        <>
          {pair.item.image && (
            <img
              src={pair.item.image}
              alt={pair.item.label || ''}
              draggable={false}
              style={{ width: IMG_SIZE, height: IMG_SIZE, objectFit: 'contain', borderRadius: 10 }}
            />
          )}
          {pair.target.label && (
            <span style={{ color: '#34D399', fontSize: '0.78rem', fontWeight: 700, textAlign: 'center' }}>
              {pair.target.label}
            </span>
          )}
        </>
      );
    }
    // Unmatched target zone.
    return (
      <>
        {pair.target.image && (
          <img
            src={pair.target.image}
            alt={pair.target.label || ''}
            draggable={false}
            style={{ width: IMG_SIZE, height: IMG_SIZE, objectFit: 'contain', borderRadius: 10, opacity: 0.75 }}
          />
        )}
        {pair.target.label && (
          <span style={{
            color:      'rgba(255,255,255,0.65)',
            fontSize:   pair.target.image ? '0.78rem' : 'clamp(1rem, 4vw, 1.3rem)',
            fontWeight: 800,
            textAlign:  'center',
            lineHeight: 1.2,
          }}>
            {pair.target.label}
          </span>
        )}
        {/* Hint arrow when empty and label-only */}
        {!pair.target.image && !pair.target.label && (
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '1.5rem' }}>?</span>
        )}
      </>
    );
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={onContainerPointerMove}
      onPointerUp={onContainerPointerUp}
      onPointerCancel={onContainerPointerUp}
      onTouchMove={onTouchMove}
      style={{
        padding:        '12px 12px 28px',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:             16,
        minHeight:      '58vh',
        overflowY:      'auto',
        touchAction:    'none',
        position:       'relative',
      }}
    >
      <style>{`
        @keyframes dam-bounce {
          0%   { transform: translateX(0)   scale(1);    }
          20%  { transform: translateX(-14px) scale(0.94); }
          45%  { transform: translateX(10px)  scale(0.98); }
          65%  { transform: translateX(-5px);              }
          82%  { transform: translateX(3px);               }
          100% { transform: translateX(0)   scale(1);    }
        }
        @keyframes dam-snapIn {
          0%   { transform: scale(0.78); opacity: 0.5; }
          55%  { transform: scale(1.10);               }
          100% { transform: scale(1);   opacity: 1;    }
        }
        @keyframes dam-glow {
          0%,100% { box-shadow: 0 0 18px rgba(52,211,153,0.45); }
          50%     { box-shadow: 0 0 32px rgba(52,211,153,0.80); }
        }
      `}</style>

      {/* ── Instruction ────────────────────────────────────────────────────── */}
      <p style={{
        color:       '#fff',
        fontWeight:  800,
        fontSize:    'clamp(1.05rem, 3.5vw, 1.45rem)',
        textAlign:   'center',
        margin:      0,
        lineHeight:  1.3,
        padding:     '0 8px',
      }}>
        <KaraokeText
          text={step.instruction || 'Match them up!'}
          karaokeWords={karaokeWords}
          karaokeIdx={karaokeIdx}
        />
      </p>

      {/* ── Two-column layout ───────────────────────────────────────────────── */}
      <div style={{
        display:    'flex',
        gap:         16,
        width:      '100%',
        maxWidth:    400,
        alignItems: 'flex-start',
      }}>
        {/* Left column: items */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          {itemOrder.map(pairIdx => {
            const pair       = pairs[pairIdx];
            const isMatch    = matched.has(pair.id);
            const isDragging = dragState?.pairId === pair.id;
            const isBouncing = bouncing === pair.id;

            return (
              <div
                key={pair.id}
                onPointerDown={e => onPointerDown(e, pair.id)}
                onTouchStart={e => onTouchStart(e, pair.id)}
                onTouchEnd={e => onTouchEnd(e, pair.id)}
                style={{
                  position:     'relative',
                  width:         CARD_W,
                  minHeight:     CARD_MIN,
                  borderRadius:  16,
                  border:        isMatch
                    ? '3px solid #34D399'
                    : isDragging
                      ? '3px solid #A78BFA'
                      : '2px solid rgba(255,255,255,0.18)',
                  background:    isMatch
                    ? 'rgba(52,211,153,0.14)'
                    : isDragging
                      ? 'rgba(167,139,250,0.18)'
                      : 'rgba(255,255,255,0.07)',
                  display:      'flex',
                  flexDirection: 'column',
                  alignItems:   'center',
                  justifyContent: 'center',
                  gap:            6,
                  padding:        '8px 8px',
                  cursor:         isMatch ? 'default' : disabled ? 'default' : 'grab',
                  touchAction:   'none',
                  userSelect:    'none',
                  WebkitUserSelect: 'none',
                  opacity:        isDragging ? 0.35 : 1,
                  boxShadow:      isMatch
                    ? 'none'
                    : 'none',
                  transition:     'opacity 0.15s, border-color 0.25s, background 0.25s',
                  animation:      isBouncing
                    ? 'dam-bounce 0.45s ease'
                    : isMatch
                      ? 'dam-glow 2s ease infinite'
                      : 'none',
                }}
              >
                <ItemContent pair={pair} isMatch={isMatch} isDark={false} />

                {/* Checkmark badge when matched */}
                {isMatch && (
                  <div style={{
                    position: 'absolute', top: 5, right: 5,
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#34D399',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 8, height: 5,
                      borderLeft:   '2px solid #fff',
                      borderBottom: '2px solid #fff',
                      transform:    'rotate(-45deg) translate(1px,-1px)',
                    }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ width: 1.5, background: 'rgba(255,255,255,0.12)', borderRadius: 1, alignSelf: 'stretch', minHeight: 100, flexShrink: 0 }} />

        {/* Right column: targets */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          {targetOrder.map(pairIdx => {
            const pair    = pairs[pairIdx];
            const isMatch = matched.has(pair.id);

            return (
              <div
                key={pair.id}
                ref={el => { targetEls.current[pair.id] = el; }}
                style={{
                  width:         CARD_W,
                  minHeight:     CARD_MIN,
                  borderRadius:  16,
                  border:        isMatch
                    ? '3px solid #34D399'
                    : '2.5px dashed rgba(255,255,255,0.28)',
                  background:    isMatch
                    ? 'rgba(52,211,153,0.16)'
                    : 'rgba(255,255,255,0.04)',
                  display:      'flex',
                  flexDirection: 'column',
                  alignItems:   'center',
                  justifyContent: 'center',
                  gap:            6,
                  padding:        '8px 8px',
                  boxShadow:      isMatch ? '0 0 22px rgba(52,211,153,0.5)' : 'none',
                  transition:    'all 0.3s ease',
                  animation:     isMatch ? 'dam-snapIn 0.35s ease' : 'none',
                }}
              >
                <TargetContent pair={pair} isMatch={isMatch} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Drag ghost ─────────────────────────────────────────────────────── */}
      {/* Fixed-position clone of the dragged item; follows the pointer.       */}
      {/* pointer-events:none so it doesn't interfere with hit detection.      */}
      {dragState && draggingPair && (
        <div
          style={{
            position:      'fixed',
            left:           dragState.curX,
            top:            dragState.curY,
            transform:     'translate(-50%, -50%) scale(1.14)',
            zIndex:         9999,
            pointerEvents: 'none',
            width:          CARD_W,
            minHeight:      CARD_MIN,
            borderRadius:   16,
            border:        '3px solid #A78BFA',
            background:    'rgba(88,40,180,0.92)',
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            justifyContent: 'center',
            gap:             6,
            padding:        '8px 8px',
            boxShadow:     '0 8px 36px rgba(124,58,237,0.65), 0 0 0 3px rgba(167,139,250,0.35)',
          }}
        >
          <ItemContent pair={draggingPair} isMatch={false} isDark />
        </div>
      )}
    </div>
  );
}
