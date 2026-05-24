// MathLessonPlayer — dedicated player for Math v2 manipulative-first lessons.
// Handles: welcome, explore, guided-tasks, concept-name, applied-problems,
//          quick-check, real-world, celebration screen types.
// Guide: Remi (raccoon) — voice 'ShhDvxS4N0arXxn6PD5o'
// Audio: ElevenLabs via /.netlify/functions/nova-speak (same as UE player)
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import { MATH_L01_V2 } from '../../data/math_upper_explorer_l01_v2_screens';
import BaseTenBlocksWorkspace from './BaseTenBlocksWorkspace';

// ── Design tokens ─────────────────────────────────────────────────────────────
const REMI_IMG   = '/avatars/remi.png';
const ACCENT     = '#C4B5FD';
const ACCENT_DIM = 'rgba(196,181,253,0.18)';
const BG         = '#080618';
const FONT       = "'Inter', system-ui, -apple-system, sans-serif";
const VOICE_ID   = 'ShhDvxS4N0arXxn6PD5o'; // Remi

// ── Lesson registry — maps lessonId → lesson data ────────────────────────────
const LESSON_REGISTRY = {
  'math-9-10-01': MATH_L01_V2,
};

// ── Shared UI atoms ───────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.06)', zIndex: 10 }}>
      <div style={{ height: '100%', width: `${pct}%`, background: ACCENT, transition: 'width 0.5s ease' }} />
    </div>
  );
}

function RemiAvatar({ size = 64, speaking = false }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <img
        src={REMI_IMG}
        alt="Remi"
        style={{
          width: size, height: size, borderRadius: '50%', objectFit: 'cover',
          border: `2px solid ${speaking ? ACCENT : 'rgba(196,181,253,0.25)'}`,
          transition: 'border-color 0.3s',
          boxShadow: speaking ? `0 0 12px ${ACCENT}55` : 'none',
        }}
      />
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled = false, color = ACCENT }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%', padding: '16px', borderRadius: 16, border: 'none',
        background: disabled ? 'rgba(255,255,255,0.08)' : color,
        color: disabled ? 'rgba(255,255,255,0.3)' : '#000',
        fontWeight: 800, fontSize: '1rem', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s, color 0.2s', touchAction: 'manipulation',
        fontFamily: FONT,
      }}
    >
      {children}
    </button>
  );
}

function SpeakerBtn({ onClick, speaking, loading }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 36, height: 36, borderRadius: '50%', border: 'none', flexShrink: 0,
        background: (speaking || loading) ? ACCENT_DIM : 'rgba(255,255,255,0.07)',
        color: (speaking || loading) ? ACCENT : 'rgba(255,255,255,0.45)',
        fontSize: '1rem', cursor: 'pointer', touchAction: 'manipulation',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
      }}
      aria-label="Replay audio"
    >
      {loading ? '⏳' : speaking ? '🔊' : '🔈'}
    </button>
  );
}

function FeedbackBanner({ type, message }) {
  if (!type) return null;
  const isCorrect = type === 'correct';
  return (
    <div style={{
      margin: '8px 0',
      padding: '12px 16px',
      borderRadius: 12,
      background: isCorrect ? 'rgba(52,211,153,0.15)' : 'rgba(239,68,68,0.12)',
      border: `1.5px solid ${isCorrect ? 'rgba(52,211,153,0.4)' : 'rgba(239,68,68,0.35)'}`,
      color: isCorrect ? '#34D399' : '#FCA5A5',
      fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.45,
      animation: 'feedbackIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
    }}>
      {isCorrect ? '✓ ' : '✗ '}{message}
    </div>
  );
}

// ── Audio hook ────────────────────────────────────────────────────────────────
// Returns { speak, stopAudio, speaking, loadingAudio }
// speak(text, onDone?) — fetches audio and plays it
// stopAudio()          — cancels current playback
function useAudio(childName) {
  const [speaking,     setSpeaking]     = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  const audioRef    = useRef(null);
  const blobUrlRef  = useRef(null);
  const speakGenRef = useRef(0);
  const abortRef    = useRef(null);

  const stopAudio = useCallback(() => {
    speakGenRef.current++;
    abortRef.current?.abort();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    setSpeaking(false);
    setLoadingAudio(false);
  }, []);

  const speak = useCallback(async (rawText, onDone) => {
    if (!rawText) { onDone?.(); return; }
    const text = rawText.replace(/\{name\}/g, childName || 'there');

    speakGenRef.current++;
    const gen = speakGenRef.current;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }

    setSpeaking(true);
    setLoadingAudio(true);

    let done = false;
    const finish = () => {
      if (done) return; done = true;
      setSpeaking(false);
      setLoadingAudio(false);
      onDone?.();
    };
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const deadman = setTimeout(finish, Math.max(30000, wordCount * 750));

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text, voiceId: VOICE_ID }),
        signal:  ctrl.signal,
      });

      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
      if (!res.ok) throw new Error('tts-unavailable');

      const blob = await res.blob();
      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }

      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
      const blobUrl = URL.createObjectURL(blob);
      blobUrlRef.current = blobUrl;

      if (!audioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        audioRef.current = el;
      }
      const el = audioRef.current;
      el.src = blobUrl;
      setLoadingAudio(false);
      el.onended = () => { clearTimeout(deadman); finish(); };
      el.onerror = () => { clearTimeout(deadman); finish(); };
      await el.play().catch(() => { clearTimeout(deadman); finish(); });
    } catch (e) {
      clearTimeout(deadman);
      if (e.name !== 'AbortError') finish();
    }
  }, [childName]);

  // Cleanup on unmount
  useEffect(() => () => {
    speakGenRef.current++;
    abortRef.current?.abort();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
  }, []);

  return { speak, stopAudio, speaking, loadingAudio };
}

// ══════════════════════════════════════════════════════════════════════════════
// Screen sub-components
// Each receives: screen, speak, stopAudio, speaking, loadingAudio, onAdvance, childName
// ══════════════════════════════════════════════════════════════════════════════

// ── 1. WelcomeScreen ──────────────────────────────────────────────────────────
function WelcomeScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', textAlign: 'center', gap: 24 }}>
      <RemiAvatar size={88} speaking={speaking} />
      <div>
        <h1 style={{ fontSize: 'clamp(1.8rem,7vw,2.6rem)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          {screen.headline}
        </h1>
        <p style={{ fontSize: '1rem', color: ACCENT, fontWeight: 600, marginTop: 10, marginBottom: 0 }}>
          {screen.subtitle}
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', fontStyle: 'italic', maxWidth: 300 }}>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
        <span>Remi is your guide for math</span>
      </div>
      <div style={{ width: '100%', maxWidth: 340, marginTop: 16 }}>
        <PrimaryBtn onClick={onAdvance}>Let's go →</PrimaryBtn>
      </div>
    </div>
  );
}

// ── 2. BlockIntroScreen ───────────────────────────────────────────────────────
// Introduces the three block types before free explore.
// Highlights each block in turn as Remi speaks about it.
function BlockIntroScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  const [highlighted, setHighlighted] = useState(null); // 'unit' | 'rod' | 'flat' | null

  useEffect(() => {
    speak(screen.audioPrompt);
    const timings = screen.highlightTimings || { unit: 4400, rod: 9800, flat: 17200, none: 24000 };
    const t1 = setTimeout(() => setHighlighted('unit'), timings.unit);
    const t2 = setTimeout(() => setHighlighted('rod'),  timings.rod);
    const t3 = setTimeout(() => setHighlighted('flat'), timings.flat);
    const t4 = setTimeout(() => setHighlighted(null),   timings.none);
    return () => { stopAudio(); [t1,t2,t3,t4].forEach(clearTimeout); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const blocks = [
    { type: 'unit', label: 'Unit',  value: '1',   fill: '#60A5FA', stroke: '#2563EB', icon: '🔵' },
    { type: 'rod',  label: 'Rod',   value: '10',  fill: '#34D399', stroke: '#10B981', icon: '🟩' },
    { type: 'flat', label: 'Flat',  value: '100', fill: '#FBBF24', stroke: '#D97706', icon: '🟨' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 20px', gap: 20 }}>
      <style>{`
        @keyframes blockGlow {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <RemiAvatar size={44} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Meet your blocks</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Each one represents a different value</div>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      {/* Three block cards */}
      <div style={{ display: 'flex', gap: 10, flex: 1, alignItems: 'stretch' }}>
        {blocks.map(({ type, label, value, fill, stroke }) => {
          const isLit = highlighted === type;
          return (
            <div
              key={type}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 10, padding: '18px 8px', borderRadius: 18,
                background: isLit ? `${fill}1a` : 'rgba(255,255,255,0.04)',
                border: `2px solid ${isLit ? fill : 'rgba(255,255,255,0.09)'}`,
                boxShadow: isLit ? `0 0 24px ${fill}55` : 'none',
                transition: 'all 0.35s ease',
                animation: isLit ? 'blockGlow 0.9s ease-in-out infinite' : undefined,
              }}
            >
              {/* Mini block visual */}
              {type === 'unit' && (
                <svg width={40} height={40}>
                  <rect x={1} y={1} width={38} height={38} fill={fill} stroke={stroke} strokeWidth={2} rx={6} />
                </svg>
              )}
              {type === 'rod' && (
                <svg width={22} height={80}>
                  <rect x={1} y={1} width={20} height={78} fill={fill} stroke={stroke} strokeWidth={2} rx={4} />
                  {[1,2,3,4,5,6,7].map(i => (
                    <line key={i} x1={2} y1={i*10} x2={20} y2={i*10} stroke={stroke} strokeWidth={1} />
                  ))}
                </svg>
              )}
              {type === 'flat' && (
                <svg width={68} height={68}>
                  <rect x={1} y={1} width={66} height={66} fill={fill} stroke={stroke} strokeWidth={2} rx={5} />
                  {[1,2,3].map(i => (
                    <line key={`h${i}`} x1={2} y1={i*16.5} x2={66} y2={i*16.5} stroke={stroke} strokeWidth={0.8} />
                  ))}
                  {[1,2,3].map(i => (
                    <line key={`v${i}`} x1={i*16.5} y1={2} x2={i*16.5} y2={66} stroke={stroke} strokeWidth={0.8} />
                  ))}
                </svg>
              )}

              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: isLit ? fill : '#fff', transition: 'color 0.3s' }}>
                {label}
              </div>
              <div style={{
                fontWeight: 900, fontSize: '1.4rem', color: fill,
                background: `${fill}18`, borderRadius: 8, padding: '3px 12px',
              }}>
                {value}
              </div>
              {isLit && (
                <div style={{ fontSize: '0.72rem', color: fill, fontWeight: 600, textAlign: 'center', lineHeight: 1.4, opacity: 0.85 }}>
                  {type === 'unit' && 'means ONE'}
                  {type === 'rod'  && '= 10 units'}
                  {type === 'flat' && '= 100 units'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <PrimaryBtn onClick={onAdvance}>Got it, let's build →</PrimaryBtn>
    </div>
  );
}

// ── 3. ExploreScreen ──────────────────────────────────────────────────────────
function ExploreScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  const [elapsed,    setElapsed]    = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const minSec = screen.minDurationSec || 60;

  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(t => {
        const next = t + 1;
        if (next >= minSec) setCanContinue(true);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [minSec]);

  const remaining = Math.max(0, minSec - elapsed);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '14px 16px 8px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <RemiAvatar size={36} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: ACCENT }}>Free Explore</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            {canContinue ? 'Ready when you are!' : 'Try each block — unit, rod, flat!'}
          </div>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      {/* Workspace takes 70% */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <BaseTenBlocksWorkspace />
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 16px 20px', flexShrink: 0 }}>
        <PrimaryBtn onClick={onAdvance} disabled={!canContinue}>
          {canContinue ? 'Continue →' : `Explore for ${remaining}s…`}
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── 3. GuidedTasksScreen ──────────────────────────────────────────────────────
function GuidedTasksScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  const [taskIdx,      setTaskIdx]      = useState(0);
  const [wsState,      setWsState]      = useState({ total: 0 });
  const [feedback,     setFeedback]     = useState(null); // null | 'correct' | 'wrong'
  const [feedbackMsg,  setFeedbackMsg]  = useState('');
  const [wrongCount,   setWrongCount]   = useState(0);
  const [showDemo,     setShowDemo]     = useState(false);

  const tasks = screen.tasks || [];
  const task  = tasks[taskIdx];

  // Speak task audio on mount and on task change
  useEffect(() => {
    if (!task) return;
    const t = setTimeout(() => speak(task.audioPrompt), 300);
    return () => { clearTimeout(t); stopAudio(); };
  }, [taskIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleCheck() {
    if (!task) return;
    if (wsState.total === task.target) {
      // Correct!
      setFeedback('correct');
      setFeedbackMsg('Perfect! That is exactly right.');
      speak("Perfect! That's exactly right.");
      setTimeout(() => {
        setFeedback(null);
        setFeedbackMsg('');
        setWrongCount(0);
        setShowDemo(false);
        if (taskIdx < tasks.length - 1) {
          setTaskIdx(i => i + 1);
          setWsState({ total: 0 });
        } else {
          stopAudio();
          onAdvance();
        }
      }, 2200);
    } else {
      // Wrong
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setFeedback('wrong');
      const hint = task.wrongHint || `We want ${task.target}. Your number is ${wsState.total}. Try again.`;
      setFeedbackMsg(hint);
      speak(hint);
      if (newWrong >= 2) setShowDemo(true);
      setTimeout(() => setFeedback(null), 3500);
    }
  }

  if (!task) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <RemiAvatar size={36} speaking={speaking} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Task {taskIdx + 1} of {tasks.length}
            </div>
          </div>
          <SpeakerBtn onClick={() => speak(task.audioPrompt)} speaking={speaking} loading={loadingAudio} />
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 6 }}>
          {tasks.map((_, i) => (
            <div key={i} style={{
              height: 4, flex: 1, borderRadius: 2,
              background: i < taskIdx ? ACCENT : i === taskIdx ? `${ACCENT}88` : 'rgba(255,255,255,0.1)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {/* Task prompt */}
        <div style={{
          marginTop: 14,
          fontSize: 'clamp(1.1rem,4.5vw,1.4rem)', fontWeight: 800, color: '#fff',
          lineHeight: 1.25, letterSpacing: '-0.02em',
        }}>
          {task.prompt}
        </div>

        {/* Feedback banner */}
        <div style={{ marginTop: 8 }}>
          <FeedbackBanner type={feedback} message={feedbackMsg} />
        </div>

        {/* "Show me how" button after 2 wrong attempts */}
        {showDemo && !feedback && (
          <button
            onClick={() => {
              setShowDemo(false);
              const msg = `Here's how: ${task.wrongHint}`;
              speak(msg);
            }}
            style={{
              marginTop: 6, padding: '8px 16px', borderRadius: 10, border: `1.5px solid ${ACCENT}44`,
              background: ACCENT_DIM, color: ACCENT, fontSize: '0.83rem', fontWeight: 600,
              cursor: 'pointer', touchAction: 'manipulation', width: '100%',
            }}
          >
            Show me how →
          </button>
        )}
      </div>

      {/* Workspace — key changes on each task to force remount (clear blocks) */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <BaseTenBlocksWorkspace
          key={`task-${taskIdx}`}
          onChange={setWsState}
        />
      </div>

      {/* Footer */}
      <div style={{ padding: '8px 16px 16px', flexShrink: 0 }}>
        <PrimaryBtn onClick={handleCheck} disabled={feedback === 'correct' || wsState.total === 0}>
          Check My Answer
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── 4. ConceptNameScreen ──────────────────────────────────────────────────────
function ConceptNameScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 24px', justifyContent: 'center', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <RemiAvatar size={72} speaking={speaking} />
        <h2 style={{ fontSize: 'clamp(1.4rem,5.5vw,2rem)', fontWeight: 900, color: '#fff', margin: 0, textAlign: 'center', letterSpacing: '-0.02em' }}>
          {screen.headline}
        </h2>
        <div style={{
          background: 'rgba(255,255,255,0.04)', border: `1.5px solid ${ACCENT}33`,
          borderRadius: 16, padding: '20px 22px',
          color: 'rgba(255,255,255,0.82)', fontSize: '1rem', lineHeight: 1.7,
          textAlign: 'center',
        }}>
          {screen.body}
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>
      <PrimaryBtn onClick={onAdvance}>Got it →</PrimaryBtn>
    </div>
  );
}

// ── 5. AppliedProblemsScreen ──────────────────────────────────────────────────
function AppliedProblemsScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  const [probIdx,     setProbIdx]     = useState(0);
  const [wsState,     setWsState]     = useState({ total: 0, blocks: [] });
  const [feedback,    setFeedback]    = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [tensInput,   setTensInput]   = useState('');
  const [onesInput,   setOnesInput]   = useState('');
  const [tapFeedback,    setTapFeedback]    = useState(null); // for tap-identify
  const [highlightBlanks, setHighlightBlanks] = useState(false); // Case A: blanks need attention

  const problems = screen.problems || [];
  const prob = problems[probIdx];

  useEffect(() => {
    if (!prob) return;
    setFeedback(null);
    setFeedbackMsg('');
    setTapFeedback(null);
    setHighlightBlanks(false);
    setTensInput('');
    setOnesInput('');
    const t = setTimeout(() => speak(prob.audioPrompt), 300);
    return () => { clearTimeout(t); stopAudio(); };
  }, [probIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  function advance() {
    setFeedback(null);
    setFeedbackMsg('');
    if (probIdx < problems.length - 1) {
      setProbIdx(i => i + 1);
      setWsState({ total: 0, blocks: [] });
    } else {
      stopAudio();
      onAdvance();
    }
  }

  function handleTapIdentify(block) {
    if (!prob) return;
    if (block.type === prob.correctBlockType) {
      setTapFeedback('correct');
      setFeedback('correct');
      setFeedbackMsg(prob.correctFeedback || 'Correct!');
      speak(prob.correctFeedback || 'Correct!');
      setTimeout(advance, 2500);
    } else {
      setTapFeedback('wrong');
      setFeedback('wrong');
      setFeedbackMsg(prob.wrongFeedback || 'Not quite. Try a different block.');
      speak(prob.wrongFeedback || 'Not quite. Try a different block.');
      setTimeout(() => { setFeedback(null); setTapFeedback(null); }, 2500);
    }
  }

  function handleBuildCheck() {
    if (!prob) return;
    if (wsState.total === prob.target) {
      setFeedback('correct');
      const msg = prob.correctFeedback || 'Correct!';
      setFeedbackMsg(msg);
      speak(msg);
      setTimeout(advance, 2800);
    } else {
      setFeedback('wrong');
      setFeedbackMsg(prob.wrongHint || `We want ${prob.target}. Keep trying.`);
      speak(prob.wrongHint || `We want ${prob.target}. Keep trying.`);
      setTimeout(() => setFeedback(null), 3200);
    }
  }

  function handleBuildWriteCheck() {
    if (!prob) return;
    const tensOk  = tensInput.trim() === String(prob.correctTens);
    const onesOk  = onesInput.trim() === String(prob.correctOnes);
    const buildOk = wsState.total === prob.target;
    const blanksOk = tensOk && onesOk;

    if (buildOk && blanksOk) {
      // Case D: both correct
      const msg = `You got it! ${prob.target} equals ${prob.correctTens} tens plus ${prob.correctOnes} ones.`;
      setFeedback('correct');
      setFeedbackMsg(`You got it! ${prob.target} = ${prob.correctTens} tens + ${prob.correctOnes} ones.`);
      speak(msg);
      setTimeout(advance, 2600);
    } else if (buildOk && !blanksOk) {
      // Case A: blocks right, blanks wrong/empty — highlight inputs
      const msg = "Your blocks look perfect! Now fill in the blanks below — how many rods did you use? How many units?";
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
      setHighlightBlanks(true);
      setTimeout(() => { setFeedback(null); setHighlightBlanks(false); }, 4500);
    } else if (!buildOk && blanksOk) {
      // Case B: blanks right, blocks wrong
      const msg = `Your blanks are right! But check your blocks — you built ${wsState.total}. We want ${prob.target}.`;
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
      setTimeout(() => setFeedback(null), 3800);
    } else {
      // Case C: both wrong
      const msg = `Let's check both. We're building ${prob.target} — that's ${prob.correctTens} tens (rods) and ${prob.correctOnes} ones (units). Try again.`;
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
      setTimeout(() => setFeedback(null), 4000);
    }
  }

  if (!prob) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 6px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <RemiAvatar size={32} speaking={speaking} />
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Problem {probIdx + 1} of {problems.length}
            </span>
          </div>
          <SpeakerBtn onClick={() => speak(prob.audioPrompt)} speaking={speaking} loading={loadingAudio} />
        </div>

        {prob.displayNumber && (
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: ACCENT, letterSpacing: '-0.03em', marginBottom: 4 }}>
            {prob.displayNumber}
          </div>
        )}

        <div style={{ fontSize: 'clamp(0.9rem,3.8vw,1.15rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 8 }}>
          {prob.prompt}
        </div>

        <FeedbackBanner type={feedback} message={feedbackMsg} />
      </div>

      {/* Workspace */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <BaseTenBlocksWorkspace
          key={`prob-${probIdx}`}
          initialState={prob.preload || null}
          readOnly={prob.subtype === 'tap-identify'}
          compact={prob.subtype === 'tap-identify'}
          onBlockTap={prob.subtype === 'tap-identify' ? handleTapIdentify : undefined}
          onChange={setWsState}
        />
      </div>

      {/* Build-write blanks */}
      {prob.subtype === 'build-write' && (
        <div style={{ padding: '8px 16px', flexShrink: 0 }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>{prob.target} =</span>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={tensInput}
              onChange={e => setTensInput(e.target.value)}
              placeholder="?"
              style={{
                width: 48, height: 38, textAlign: 'center', borderRadius: 8,
                border: `2px solid ${highlightBlanks ? '#FBBF24' : `${ACCENT}44`}`,
                background: highlightBlanks ? 'rgba(251,191,36,0.12)' : ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: FONT,
                boxShadow: highlightBlanks ? '0 0 10px rgba(251,191,36,0.4)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
            <span>tens +</span>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={onesInput}
              onChange={e => setOnesInput(e.target.value)}
              placeholder="?"
              style={{
                width: 48, height: 38, textAlign: 'center', borderRadius: 8,
                border: `2px solid ${highlightBlanks ? '#FBBF24' : `${ACCENT}44`}`,
                background: highlightBlanks ? 'rgba(251,191,36,0.12)' : ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: FONT,
                boxShadow: highlightBlanks ? '0 0 10px rgba(251,191,36,0.4)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
            <span>ones</span>
          </div>
        </div>
      )}

      {/* Footer button — only for build/build-write; tap-identify auto-advances */}
      {(prob.subtype === 'build' || prob.subtype === 'build-write') && (
        <div style={{ padding: '8px 16px 16px', flexShrink: 0 }}>
          <PrimaryBtn
            onClick={prob.subtype === 'build-write' ? handleBuildWriteCheck : handleBuildCheck}
            disabled={feedback === 'correct' || wsState.total === 0}
          >
            Check My Answer
          </PrimaryBtn>
        </div>
      )}
    </div>
  );
}

// ── 6. QuickCheckScreen ───────────────────────────────────────────────────────
function QuickCheckScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  const [qIdx,        setQIdx]       = useState(0);
  const [selected,    setSelected]   = useState(null);
  const [fillAnswer,  setFillAnswer] = useState('');
  const [feedback,    setFeedback]   = useState(null);
  const [score,       setScore]      = useState(0);

  const questions = screen.questions || [];
  const q = questions[qIdx];

  useEffect(() => {
    setSelected(null);
    setFillAnswer('');
    setFeedback(null);
  }, [qIdx]);

  function checkAndAdvance(answer) {
    if (!q) return;
    const correct = answer.trim() === q.correct;
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) { setScore(s => s + 1); speak("Correct!"); }
    else { speak(`Not quite. The answer is ${q.correct}.`); }

    setTimeout(() => {
      if (qIdx < questions.length - 1) {
        setQIdx(i => i + 1);
        setFeedback(null);
      } else {
        stopAudio();
        onAdvance();
      }
    }, 1800);
  }

  function handleOptionTap(opt) {
    if (feedback) return;
    setSelected(opt);
    checkAndAdvance(opt);
  }

  function handleFillSubmit() {
    if (feedback) return;
    checkAndAdvance(fillAnswer);
  }

  if (!q) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <RemiAvatar size={32} speaking={speaking} />
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Q{qIdx + 1} of {questions.length}
          </span>
          <div style={{ flex: 1 }} />
          <SpeakerBtn onClick={() => speak(q.prompt)} speaking={speaking} loading={loadingAudio} />
        </div>
        {/* Dots */}
        <div style={{ display: 'flex', gap: 5 }}>
          {questions.map((_, i) => (
            <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i < qIdx ? '#34D399' : i === qIdx ? `${ACCENT}88` : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
          ))}
        </div>
      </div>

      {/* Workspace (read-only) for q1 */}
      {q.subtype === 'workspace-read' && (
        <div style={{ height: 200, flexShrink: 0, margin: '0 12px' }}>
          <BaseTenBlocksWorkspace
            key={`q-${qIdx}`}
            initialState={q.preload}
            readOnly
            compact
          />
        </div>
      )}

      {/* Question prompt */}
      <div style={{ padding: '10px 16px 12px', flexShrink: 0 }}>
        <div style={{ fontSize: 'clamp(1rem,4vw,1.25rem)', fontWeight: 800, color: '#fff', lineHeight: 1.35 }}>
          {q.prompt}
        </div>
        <div style={{ marginTop: 8 }}>
          <FeedbackBanner type={feedback} message={feedback === 'correct' ? 'Correct!' : `The answer is ${q.correct}.`} />
        </div>
      </div>

      {/* Answer area */}
      <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: q.subtype === 'fill-in' ? 'flex-start' : 'flex-start' }}>
        {(q.subtype === 'text-choice' || q.subtype === 'workspace-read') && (q.options || []).map(opt => {
          const isSelected = selected === opt;
          const isCorrectOpt = opt === q.correct;
          let bg = 'rgba(255,255,255,0.05)';
          let border = 'rgba(255,255,255,0.1)';
          let color = '#fff';
          if (feedback && isSelected && isCorrectOpt)  { bg = 'rgba(52,211,153,0.18)'; border = '#34D399'; color = '#34D399'; }
          if (feedback && isSelected && !isCorrectOpt) { bg = 'rgba(239,68,68,0.14)'; border = '#EF4444'; color = '#FCA5A5'; }
          if (feedback && !isSelected && isCorrectOpt) { bg = 'rgba(52,211,153,0.08)'; border = '#34D39955'; }

          return (
            <button
              key={opt}
              onClick={() => handleOptionTap(opt)}
              disabled={!!feedback}
              style={{
                width: '100%', padding: '14px 18px', borderRadius: 13,
                border: `1.5px solid ${border}`, background: bg, color,
                fontWeight: 700, fontSize: '0.95rem', cursor: feedback ? 'default' : 'pointer',
                textAlign: 'left', transition: 'background 0.15s, border-color 0.15s',
                touchAction: 'manipulation', fontFamily: FONT,
              }}
            >
              {opt}
            </button>
          );
        })}

        {q.subtype === 'fill-in' && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={fillAnswer}
              onChange={e => setFillAnswer(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !feedback && handleFillSubmit()}
              placeholder="Your answer"
              autoFocus
              style={{
                flex: 1, height: 52, padding: '0 16px', borderRadius: 13,
                border: `1.5px solid ${ACCENT}44`, background: ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1.1rem', fontFamily: FONT,
              }}
            />
            <PrimaryBtn onClick={handleFillSubmit} disabled={!!feedback || !fillAnswer}>
              →
            </PrimaryBtn>
          </div>
        )}
      </div>
    </div>
  );
}

// ── 7. RealWorldScreen ────────────────────────────────────────────────────────
function RealWorldScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '28px 24px', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <RemiAvatar size={52} speaking={speaking} />
        <div>
          <div style={{ fontSize: 'clamp(1.2rem,5vw,1.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
            {screen.headline}
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
        {screen.body}
      </p>

      <div style={{
        background: `${ACCENT}12`, border: `1.5px solid ${ACCENT}33`,
        borderRadius: 16, padding: '18px 20px',
      }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
          Family Adventure 🏠
        </div>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, margin: 0 }}>
          {screen.familyAdventure}
        </p>
      </div>

      <div style={{ flex: 1 }} />
      <PrimaryBtn onClick={onAdvance}>I'm done →</PrimaryBtn>
    </div>
  );
}

// ── 8. CelebrationScreen ──────────────────────────────────────────────────────
function CelebrationScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 24px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 20 }}>
      {/* Badge */}
      <div style={{
        width: 120, height: 120, borderRadius: '50%',
        background: `linear-gradient(135deg, ${ACCENT}, #818CF8)`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 0 40px ${ACCENT}44`,
        animation: 'badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1)',
      }}>
        <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>🎯</div>
      </div>

      <div>
        <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
          {screen.badge}
        </div>
        <div style={{ fontSize: '0.85rem', color: ACCENT, fontWeight: 700, marginTop: 4 }}>
          Badge Earned
        </div>
      </div>

      {/* XP pill */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(250,204,21,0.12)', border: '1.5px solid rgba(250,204,21,0.3)',
        borderRadius: 20, padding: '8px 20px',
      }}>
        <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>⚡</span>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FCD34D' }}>+{screen.xp} XP</span>
      </div>

      <RemiAvatar size={56} speaking={speaking} />

      <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />

      <div style={{ width: '100%', maxWidth: 340 }}>
        <PrimaryBtn onClick={onAdvance}>Back to lessons</PrimaryBtn>
      </div>

      <style>{`
        @keyframes badgePop {
          0%   { transform: scale(0.2) rotate(-15deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes feedbackIn {
          0%   { transform: scale(0.9) translateY(4px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// Main Player
// ══════════════════════════════════════════════════════════════════════════════
export default function MathLessonPlayer() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const child     = getCurrentChild();
  const childName = child?.name || 'there';

  const lesson = LESSON_REGISTRY[lessonId];

  const [screenIdx, setScreenIdx] = useState(0);
  const { speak, stopAudio, speaking, loadingAudio } = useAudio(childName);

  if (!lesson) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: FONT }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔍</div>
          <p>Lesson not found: {lessonId}</p>
          <button onClick={() => navigate(-1)} style={{ marginTop: 16, padding: '10px 24px', borderRadius: 10, border: 'none', background: ACCENT, color: '#000', fontWeight: 700, cursor: 'pointer' }}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  const screens = lesson.screens;
  const screen  = screens[screenIdx];

  function advance() {
    if (screenIdx < screens.length - 1) {
      setScreenIdx(i => i + 1);
    } else {
      // Award XP and return to subject view
      // Using the same completion pattern as existing players
      if (child) {
        try {
          const saved = JSON.parse(localStorage.getItem('coreverse_progress') || '{}');
          const key   = `math__3`; // level 3 = Upper Explorer
          saved[key]  = Math.max((saved[key] || 0), 1);
          localStorage.setItem('coreverse_progress', JSON.stringify(saved));
        } catch { /* ok */ }
      }
      navigate('/child/subject/math');
    }
  }

  const sharedProps = { screen, speak, stopAudio, speaking, loadingAudio, onAdvance: advance, childName };

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: BG, color: '#fff',
      fontFamily: FONT,
      display: 'flex', flexDirection: 'column',
    }}>
      <style>{`
        @keyframes feedbackIn {
          0%   { transform: scale(0.9) translateY(4px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>

      {/* Progress bar */}
      <ProgressBar current={screenIdx} total={screens.length} />

      {/* Current screen */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', marginTop: 3 }}>
        {screen.type === 'welcome'           && <WelcomeScreen          {...sharedProps} />}
        {screen.type === 'block-intro'       && <BlockIntroScreen       {...sharedProps} />}
        {screen.type === 'explore'           && <ExploreScreen          {...sharedProps} />}
        {screen.type === 'guided-tasks'      && <GuidedTasksScreen      {...sharedProps} />}
        {screen.type === 'concept-name'      && <ConceptNameScreen      {...sharedProps} />}
        {screen.type === 'applied-problems'  && <AppliedProblemsScreen  {...sharedProps} />}
        {screen.type === 'quick-check'       && <QuickCheckScreen       {...sharedProps} />}
        {screen.type === 'real-world'        && <RealWorldScreen        {...sharedProps} />}
        {screen.type === 'celebration'       && <CelebrationScreen      {...sharedProps} />}
      </div>
    </div>
  );
}
