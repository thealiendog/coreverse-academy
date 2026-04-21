import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import LessonPlayer from '../../pages/LessonPlayer';
import { getAvatar } from '../../lib/constants';

// Screen types
import WelcomeScreen     from './screens/WelcomeScreen';
import StoryScreen       from './screens/StoryScreen';
import TeachScreen       from './screens/TeachScreen';
import FamilyScreen      from './screens/FamilyScreen';
import CelebrationScreen from './screens/CelebrationScreen';

// Game templates
import TapTheRightOne  from './templates/TapTheRightOne';
import CountAndTap     from './templates/CountAndTap';
import SortIntoBuckets from './templates/SortIntoBuckets';
import YesOrNo         from './templates/YesOrNo';
import CauseAndEffect  from './templates/CauseAndEffect';

// Lesson data — level 1 overrides keyed by subjectId
import INNERWORLD_LITTLESTARS from '../../data/innerworld_littlestars_adapter';
import ELA_LITTLESTARS         from '../../data/ela_littlestars_adapter';
import SCI_LITTLESTARS         from '../../data/sci_littlestars_adapter';
import SS_LITTLESTARS          from '../../data/ss_littlestars_adapter';
import COSMOS_LITTLESTARS      from '../../data/cosmos_littlestars_adapter';
import MATH_LITTLESTARS        from '../../data/math_littlestars_adapter';
import MONEYBUSINESS_LITTLESTARS from '../../data/moneybusiness_littlestars_adapter';
import FUTURESKILLS_LITTLESTARS  from '../../data/futureskills_littlestars_adapter';
import SOCIALLEADERSHIP_LITTLESTARS from '../../data/socialleadership_littlestars_adapter';
import LIFEWELLNESS_LITTLESTARS  from '../../data/lifewellness_littlestars_adapter';
import CREATIVEARTS_LITTLESTARS  from '../../data/creativearts_littlestars_adapter';
import HISTORYWORLD_LITTLESTARS  from '../../data/historyworld_littlestars_adapter';
import SPANISH_LITTLESTARS       from '../../data/spanish_littlestars_adapter';
import FRONTIER_LITTLESTARS      from '../../data/frontier_littlestars_adapter';

const LESSON_MAP = {
  'inner-world': INNERWORLD_LITTLESTARS,
  'ela':         ELA_LITTLESTARS,
  'sci':         SCI_LITTLESTARS,
  'ss':          SS_LITTLESTARS,
  'cosmos':      COSMOS_LITTLESTARS,
  'math':        MATH_LITTLESTARS,
  'money':       MONEYBUSINESS_LITTLESTARS,
  'future-skills': FUTURESKILLS_LITTLESTARS,
  'leadership':  SOCIALLEADERSHIP_LITTLESTARS,
  'wellness':    LIFEWELLNESS_LITTLESTARS,
  'creative-arts': CREATIVEARTS_LITTLESTARS,
  'history':     HISTORYWORLD_LITTLESTARS,
  'languages':   SPANISH_LITTLESTARS,
  'frontier':    FRONTIER_LITTLESTARS,
};

// ── Guide speech bubble ───────────────────────────────────────────────────────
function GuideBubble({ text, speaking, guideAvatar }) {
  if (!text) return null;
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: `1.5px solid ${guideAvatar?.accent || '#7C3AED'}44`,
      borderRadius: 16,
      padding: '10px 16px',
      maxWidth: 280,
      fontSize: '0.95rem',
      color: 'rgba(255,255,255,0.9)',
      fontWeight: 600,
      lineHeight: 1.4,
      position: 'relative',
    }}>
      {text}
      {speaking && (
        <span style={{ display:'inline-flex', gap:3, marginLeft:6, verticalAlign:'middle' }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              width:5, height:5, borderRadius:'50%',
              background: guideAvatar?.accent || '#7C3AED',
              display:'inline-block',
              animation: `gb-dot 1s ease-in-out ${i * 0.18}s infinite`,
            }} />
          ))}
        </span>
      )}
      <style>{`@keyframes gb-dot{0%,80%,100%{transform:scale(0.6);opacity:0.4}40%{transform:scale(1);opacity:1}}`}</style>
    </div>
  );
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ current, total, accent }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  return (
    <div style={{ padding: '14px 20px 0', display:'flex', alignItems:'center', gap:10 }}>
      <div style={{
        flex: 1,
        height: 8,
        borderRadius: 100,
        background: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 100,
          background: accent || '#7C3AED',
          boxShadow: `0 0 10px ${accent || '#7C3AED'}88`,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <span style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.8rem', fontWeight:700, flexShrink:0 }}>
        {current + 1}/{total}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function GameLessonPlayer() {
  const { subjectId, lessonIdx } = useParams();

  const child   = getCurrentChild();
  const idx     = parseInt(lessonIdx, 10);
  const lessons = LESSON_MAP[subjectId] || [];
  const lesson  = lessons[idx] || null;

  const guideId     = (lesson?.guide || lesson?.avatar || 'sage').toLowerCase();
  const guideAvatar = getAvatar(guideId);
  const childName   = child?.name || 'friend';

  const gameSequence = lesson?.gameSequence || null;

  const [screenIdx,         setScreenIdx]         = useState(0);
  const [speaking,          setSpeaking]          = useState(false);
  const [bubble,            setBubble]            = useState('');
  const [interactionLocked, setInteractionLocked] = useState(true);

  const audioRef    = useRef(null);
  const bubbleTimer = useRef(null);

  // ── Speak ──────────────────────────────────────────────────────────────────
  const speak = useCallback(async (text, onDone) => {
    if (!text) { onDone?.(); return; }
    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    clearTimeout(bubbleTimer.current);
    const resolved = text.replace(/\{name\}/g, childName);
    setBubble(resolved.slice(0, 100) + (resolved.length > 100 ? '…' : ''));
    setSpeaking(true);

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text: resolved }),
      });
      if (!res.ok) throw new Error('unavailable');
      const { audio } = await res.json();
      const el = new Audio(`data:audio/mpeg;base64,${audio}`);
      audioRef.current = el;
      el.onended = () => {
        setSpeaking(false);
        audioRef.current = null;
        bubbleTimer.current = setTimeout(() => setBubble(''), 3000);
        onDone?.();
      };
      el.onerror = () => { setSpeaking(false); audioRef.current = null; setBubble(''); onDone?.(); };
      await el.play();
    } catch {
      // Fallback to speech synthesis
      setSpeaking(false);
      try {
        const utt = new SpeechSynthesisUtterance(resolved);
        utt.onend = () => {
          bubbleTimer.current = setTimeout(() => setBubble(''), 2500);
          onDone?.();
        };
        window.speechSynthesis?.speak(utt);
      } catch {
        bubbleTimer.current = setTimeout(() => setBubble(''), 3000);
        onDone?.();
      }
    }
  }, [childName]);

  // ── Build full speech text for a step ─────────────────────────────────────
  function buildSpeechText(step) {
    const r = t => (t || '').replace(/\{name\}/g, childName);
    const parts = [];
    if (step.scenario)    parts.push(r(step.scenario));
    if (step.instruction) parts.push(r(step.instruction));
    if (step.guideText)   parts.push(r(step.guideText));
    if (step.type === 'yes-no') parts.push('Tap the green check for yes, or the red X for no!');
    return parts.join(' ');
  }

  // ── Speak when screen changes, lock interaction until done ─────────────────
  useEffect(() => {
    if (!gameSequence) return;
    const step = gameSequence[screenIdx];
    const text = buildSpeechText(step);
    setInteractionLocked(true);
    if (text) {
      speak(text, () => setInteractionLocked(false));
    } else {
      setInteractionLocked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── Cleanup on unmount ─────────────────────────────────────────────────────
  useEffect(() => () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    clearTimeout(bubbleTimer.current);
  }, []);

  // ── No game sequence → fall back to regular LessonPlayer ─────────────────
  if (!lesson || !gameSequence) {
    return <LessonPlayer />;
  }

  const currentStep = gameSequence[screenIdx];
  const total       = gameSequence.length;

  function advance() {
    const next = screenIdx + 1;
    if (next < total) setScreenIdx(next);
    // CelebrationScreen handles its own navigation
  }

  function handleWrong(message) {
    if (message) speak(message);
  }

  function handleNarrate(message) {
    if (message) speak(message);
  }

  // ── Render screen ─────────────────────────────────────────────────────────
  function renderScreen(step) {
    const common = { step, childName, guideAvatar, onComplete: advance, speaking, disabled: interactionLocked };
    switch (step.type) {
      case 'welcome':      return <WelcomeScreen     {...common} />;
      case 'story':        return <StoryScreen       {...common} />;
      case 'teach':        return <TeachScreen       {...common} />;
      case 'family':       return <FamilyScreen      {...common} />;
      case 'celebration':  return <CelebrationScreen {...common} />;
      case 'tap-right':    return <TapTheRightOne  step={step} onComplete={advance} onWrong={handleWrong} disabled={interactionLocked} />;
      case 'count':        return <CountAndTap     step={step} onComplete={advance} disabled={interactionLocked} />;
      case 'sort':         return <SortIntoBuckets step={step} onComplete={advance} disabled={interactionLocked} />;
      case 'yes-no':       return <YesOrNo         step={step} onComplete={advance} onWrong={handleWrong} disabled={interactionLocked} />;
      case 'cause-effect': return <CauseAndEffect  step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} />;
      default:             return (
        <div style={{ textAlign:'center', padding:40 }}>
          <p style={{ color:'rgba(255,255,255,0.5)' }}>Unknown step type: {step.type}</p>
          <button onClick={advance} style={{ color:'white', background:'#7C3AED', border:'none', padding:'12px 24px', borderRadius:12, cursor:'pointer', marginTop:16 }}>
            Next →
          </button>
        </div>
      );
    }
  }

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#080618',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflowX: 'hidden',
    }}>
      {/* Progress bar */}
      <ProgressBar current={screenIdx} total={total} accent={guideAvatar?.accent} />

      {/* Guide panel */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 12,
        padding: '12px 20px',
        minHeight: 90,
      }}>
        {/* Avatar */}
        <div
          onClick={() => { if (currentStep?.guideText) speak(currentStep.guideText); }}
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            cursor: 'pointer',
            border: `3px solid ${guideAvatar?.accent || '#7C3AED'}`,
            boxShadow: speaking
              ? `0 0 0 4px ${guideAvatar?.accent || '#7C3AED'}55, 0 0 28px ${guideAvatar?.accent || '#7C3AED'}66`
              : `0 0 0 2px ${guideAvatar?.accent || '#7C3AED'}33`,
            transition: 'box-shadow 0.3s ease',
            animation: speaking ? 'guide-pulse 1.4s ease-in-out infinite' : 'none',
          }}
        >
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt={guideAvatar?.name}
            style={{ width:'100%', height:'100%', objectFit:'cover' }}
          />
          <style>{`@keyframes guide-pulse{0%,100%{box-shadow:0 0 0 2px ${guideAvatar?.accent || '#7C3AED'}55}50%{box-shadow:0 0 0 6px ${guideAvatar?.accent || '#7C3AED'}33}}`}</style>
        </div>

        {/* Speech bubble */}
        <GuideBubble text={bubble} speaking={speaking} guideAvatar={guideAvatar} />
      </div>

      {/* Main game area */}
      <div style={{ flex: 1, display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <div
          key={screenIdx}
          style={{
            flex: 1,
            animation: 'screen-enter 0.4s ease both',
            overflowY: 'auto',
          }}
        >
          <style>{`@keyframes screen-enter{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}`}</style>
          {renderScreen(currentStep)}
        </div>
      </div>
    </div>
  );
}
