import { useState, useEffect, useRef } from 'react';
import { sfx } from '../sounds';
import KaraokeText from '../KaraokeText';
import WinCelebration from '../WinCelebration';

// ── CountArray ────────────────────────────────────────────────────────────────
//
// Displays 1-10 identical objects in a structured grid and lets the child
// tap-to-count them one by one, with spoken number feedback via onNarrate.
//
// Grid layout (chosen so 5 objects form a ✚ cross — a naturally memorable
// pattern for young learners):
//   1      → [1]
//   2      → [2]
//   3      → [3]
//   4      → [2,2]
//   5      → [1,3,1]  ← plus/cross shape
//   6      → [3,3]
//   7      → [4,3]
//   8      → [4,4]
//   9      → [5,4]
//   10     → [5,5]
//
// Modes:
//   interactive:true  — child taps each object; guide speaks each number;
//                       all tapped → big number reveal → WinCelebration → onComplete()
//   interactive:false — objects displayed statically; after speech finishes
//                       (disabled → false) auto-advances after 2 s delay
//
// Object content (in priority order): step.image → step.emoji → colored dot
// step.celebrationNumber — the numeral shown large on completion (defaults to count)

const NUMBER_WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function getRows(n) {
  if (n <= 3) return [n];
  if (n === 4) return [2, 2];
  if (n === 5) return [1, 3, 1]; // ✚ plus/cross — memorable pattern for 5
  if (n === 6) return [3, 3];
  if (n === 7) return [4, 3];
  if (n === 8) return [4, 4];
  if (n === 9) return [5, 4];
  return [5, 5]; // 10
}

function getImgSize(n) {
  if (n <= 3) return 100;
  if (n <= 6) return 80;
  return 64;
}

export default function CountArray({
  step,
  onComplete,
  onNarrate,
  disabled,
  karaokeWords = [],
  karaokeIdx   = -1,
}) {
  const count           = Math.min(10, Math.max(1, step.count || 1));
  const interactive     = step.interactive !== false; // defaults true
  const celebrationNum  = step.celebrationNumber ?? count;
  const imgSize         = getImgSize(count);
  const rows            = getRows(count);

  const [tapped,      setTapped]      = useState(new Set()); // indices tapped
  const [bouncing,    setBouncing]    = useState(null);       // idx doing bounce anim
  const [showBigNum,  setShowBigNum]  = useState(false);      // big number reveal
  const [showWin,     setShowWin]     = useState(false);

  // Ref so the display-mode effect doesn't capture stale disabled
  const disabledRef = useRef(disabled);
  useEffect(() => { disabledRef.current = disabled; }, [disabled]);

  // Reset when step changes
  useEffect(() => {
    setTapped(new Set());
    setBouncing(null);
    setShowBigNum(false);
    setShowWin(false);
  }, [step]);

  // Display mode: once speech finishes (disabled → false), auto-advance after 2 s
  useEffect(() => {
    if (interactive || disabled) return;
    const t = setTimeout(() => onComplete?.(), 2000);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, interactive]);

  // ── Tap handler ──────────────────────────────────────────────────────────
  function handleTap(idx) {
    if (disabled || !interactive || tapped.has(idx)) return;

    const next = new Set([...tapped, idx]);
    const n    = next.size;
    setTapped(next);

    // Bounce animation on tapped object
    setBouncing(idx);
    setTimeout(() => setBouncing(null), 420);

    // Ascending count tone + TTS number word
    sfx.count(n - 1);
    const word = NUMBER_WORDS[n - 1] ?? String(n);
    onNarrate?.(word + '!');

    // All objects tapped → big number reveal → WinCelebration
    if (n === count) {
      sfx.fanfare();
      setShowBigNum(true);
      setTimeout(() => {
        setShowBigNum(false);
        setShowWin(true);
      }, 1100);
    }
  }

  // ── Build flat index list per row ────────────────────────────────────────
  let cursor = 0;
  const rowData = rows.map(len => {
    const indices = Array.from({ length: len }, () => cursor++);
    return indices;
  });

  const allDone      = tapped.size === count;
  const CARD_PADDING = 10;
  const CARD_SIZE    = imgSize + CARD_PADDING * 2;

  return (
    <div style={{
      padding:       '12px 12px 28px',
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:            16,
      minHeight:     '58vh',
      overflowY:     'auto',
    }}>
      <style>{`
        @keyframes ca-appear {
          0%   { opacity: 0; transform: scale(0.35); }
          60%  { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ca-tap {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.32); }
          65%  { transform: scale(0.93); }
          100% { transform: scale(1); }
        }
        @keyframes ca-pulse {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.06); }
        }
        @keyframes ca-count-pop {
          0%   { opacity: 0; transform: scale(0.4) translateY(8px); }
          55%  { transform: scale(1.18) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ca-big-num {
          0%   { opacity: 0; transform: scale(0.2); }
          45%  { transform: scale(1.25); }
          70%  { transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ca-big-num-glow {
          0%,100% { text-shadow: 0 0 30px rgba(52,211,153,0.6), 0 0 60px rgba(52,211,153,0.3); }
          50%     { text-shadow: 0 0 50px rgba(52,211,153,0.9), 0 0 90px rgba(52,211,153,0.5); }
        }
      `}</style>

      {/* ── WinCelebration overlay ─────────────────────────────────────────── */}
      {showWin && (
        <WinCelebration onDone={() => { setShowWin(false); onComplete?.(); }} />
      )}

      {/* ── Instruction ────────────────────────────────────────────────────── */}
      <p style={{
        color:      '#fff',
        fontWeight:  800,
        fontSize:   'clamp(1.05rem, 3.5vw, 1.45rem)',
        textAlign:  'center',
        margin:      0,
        lineHeight:  1.3,
        padding:    '0 8px',
      }}>
        {allDone ? (
          <span style={{ color: '#34D399' }}>
            You counted {count}!
          </span>
        ) : (
          <KaraokeText
            text={step.instruction || `Count the objects!`}
            karaokeWords={karaokeWords}
            karaokeIdx={karaokeIdx}
          />
        )}
      </p>

      {/* ── Running count / big number reveal ────────────────────────────── */}
      {interactive && (
        <div style={{
          minHeight:  showBigNum ? 120 : 64,
          display:   'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'min-height 0.2s',
        }}>
          {showBigNum ? (
            /* Big celebration number */
            <div style={{
              fontSize:   'clamp(5rem, 22vw, 8rem)',
              fontWeight:  900,
              color:       '#34D399',
              lineHeight:  1,
              animation:  'ca-big-num 0.5s cubic-bezier(0.34,1.56,0.64,1) both, ca-big-num-glow 0.8s ease 0.5s infinite alternate',
            }}>
              {celebrationNum}
            </div>
          ) : tapped.size > 0 ? (
            /* Running count — remount each tap to re-trigger pop */
            <div
              key={tapped.size}
              style={{
                fontSize:   'clamp(2.8rem, 10vw, 3.8rem)',
                fontWeight:  900,
                color:       '#FCD34D',
                lineHeight:  1,
                animation:  'ca-count-pop 0.35s ease both',
                textShadow: '0 0 18px rgba(252,211,77,0.6)',
              }}
            >
              {tapped.size}
            </div>
          ) : null}
        </div>
      )}

      {/* ── Object grid ───────────────────────────────────────────────────── */}
      <div style={{
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:            10,
      }}>
        {rowData.map((indices, rowI) => (
          <div
            key={rowI}
            style={{ display: 'flex', gap: 10, justifyContent: 'center' }}
          >
            {indices.map(idx => {
              const isTapped   = tapped.has(idx);
              const isBouncing = bouncing === idx;

              // Stagger appear delay, then lock into final state with 'both'
              const appearAnim = `ca-appear 0.4s ease ${idx * 90}ms both`;
              const tapAnim    = 'ca-tap 0.42s ease';
              const pulseAnim  = 'ca-pulse 2s ease infinite';

              return (
                <button
                  key={idx}
                  onClick={() => handleTap(idx)}
                  style={{
                    width:        CARD_SIZE,
                    height:       CARD_SIZE,
                    borderRadius: 16,
                    border:       isTapped
                      ? '3px solid #34D399'
                      : '2px solid rgba(255,255,255,0.18)',
                    background:   isTapped
                      ? 'rgba(52,211,153,0.16)'
                      : 'rgba(255,255,255,0.07)',
                    padding:      0,
                    cursor:       interactive && !isTapped ? 'pointer' : 'default',
                    touchAction:  'manipulation',
                    display:     'flex',
                    alignItems:  'center',
                    justifyContent: 'center',
                    position:    'relative',
                    overflow:    'hidden',
                    boxShadow:   isTapped ? '0 0 18px rgba(52,211,153,0.45)' : 'none',
                    transition:  'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                    animation:   isBouncing
                      ? tapAnim
                      : allDone && isTapped
                        ? pulseAnim
                        : appearAnim,
                  }}
                >
                  {/* Object: image → emoji → colored dot */}
                  {step.image ? (
                    <img
                      src={step.image}
                      alt=""
                      draggable={false}
                      style={{
                        width:      imgSize,
                        height:     imgSize,
                        objectFit: 'contain',
                        display:   'block',
                        filter:    isTapped
                          ? 'drop-shadow(0 0 6px rgba(52,211,153,0.7))'
                          : 'none',
                      }}
                    />
                  ) : step.emoji ? (
                    <span style={{
                      fontSize:   imgSize * 0.72,
                      lineHeight: 1,
                      filter:     isTapped
                        ? 'drop-shadow(0 0 6px rgba(52,211,153,0.8))'
                        : 'none',
                    }}>
                      {step.emoji}
                    </span>
                  ) : (
                    // Fallback placeholder
                    <div style={{
                      width:        imgSize * 0.7,
                      height:       imgSize * 0.7,
                      borderRadius: '50%',
                      background:   isTapped ? '#34D399' : '#7C3AED',
                    }} />
                  )}

                  {/* Checkmark badge when tapped */}
                  {isTapped && (
                    <div style={{
                      position: 'absolute', bottom: 4, right: 4,
                      width: 16, height: 16, borderRadius: '50%',
                      background: '#34D399',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{
                        width: 7, height: 4,
                        borderLeft:   '2px solid #fff',
                        borderBottom: '2px solid #fff',
                        transform:    'rotate(-45deg) translate(1px,-1px)',
                      }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* ── Prompt below grid in interactive mode ─────────────────────────── */}
      {interactive && !allDone && tapped.size === 0 && (
        <p style={{
          color:     'rgba(255,255,255,0.45)',
          fontSize:  '0.85rem',
          fontWeight: 600,
          margin:    0,
          textAlign: 'center',
        }}>
          Tap each one to count!
        </p>
      )}
    </div>
  );
}
