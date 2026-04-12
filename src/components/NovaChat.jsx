import { useState, useEffect, useRef, useCallback } from 'react';
import { askNova } from '../lib/nova';
import NovaSVG from './NovaSVG';

// Text Nova reads aloud when each lesson section loads
function sectionScript(lesson, section, childName) {
  const name = (childName || 'friend').split(' ')[0];
  switch (section) {
    case 0: return lesson?.arrival?.replace(/\{\{name\}\}/g, name) || '';
    case 1: return lesson?.spark || '';
    case 2: return `Here's what we're learning today. ${lesson?.learn?.[0] || ''}`;
    case 3: return lesson?.explore || '';
    case 4: return `Quick check! ${lesson?.quickCheck?.question || ''}`;
    case 5: return ''; // quiz — child needs to focus
    case 6: return `Amazing work, ${name}! You earned the ${lesson?.badge || 'lesson'} badge. I'm so proud of you!`;
    default: return '';
  }
}

function clamp(text, max = 90) {
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
}

export default function NovaChat({ child, lesson, subject, section }) {
  const [speaking, setSpeaking]   = useState(false);
  const [listening, setListening] = useState(false);
  const [thinking, setThinking]   = useState(false);
  const [bubble, setBubble]       = useState('');
  const [canListen, setCanListen] = useState(false);

  const audioRef    = useRef(null);
  const recognRef   = useRef(null);
  const bubbleTimer = useRef(null);
  const learnContent = (lesson?.learn || []).map((p, i) => `${i + 1}. ${p}`).join('\n');

  // Map to NovaSVG state
  const charState = listening ? 'listening' : thinking ? 'thinking' : speaking ? 'speaking' : 'idle';
  // Map section 6 (celebration) to celebrating in SVG
  const svgState  = section === 6 && (speaking || charState === 'idle') ? 'celebrating' : charState;

  useEffect(() => {
    setCanListen(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  function stopAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    setSpeaking(false);
  }

  const speak = useCallback(async (text) => {
    if (!text) return;
    stopAudio();
    clearTimeout(bubbleTimer.current);
    setBubble(clamp(text));

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error('unavailable');
      const { audio } = await res.json();
      const el = new Audio(`data:audio/mpeg;base64,${audio}`);
      audioRef.current = el;
      el.onplay  = () => setSpeaking(true);
      el.onended = () => {
        setSpeaking(false);
        audioRef.current = null;
        bubbleTimer.current = setTimeout(() => setBubble(''), 3500);
      };
      el.onerror = () => {
        setSpeaking(false);
        audioRef.current = null;
        setBubble('');
      };
      await el.play();
    } catch {
      setSpeaking(false);
      setBubble('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const text = sectionScript(lesson, section, child?.name);
    if (!text) return;
    const t = setTimeout(() => speak(text), 700);
    return () => clearTimeout(t);
  }, [section, lesson, child?.name, speak]);

  useEffect(() => {
    return () => {
      clearTimeout(bubbleTimer.current);
      stopAudio();
      recognRef.current?.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startListening() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    stopAudio();
    clearTimeout(bubbleTimer.current);
    setBubble('');

    const recog = new SR();
    recog.lang            = 'en-US';
    recog.interimResults  = false;
    recog.maxAlternatives = 1;
    recognRef.current     = recog;

    recog.onstart  = () => setListening(true);
    recog.onend    = () => setListening(false);
    recog.onerror  = () => setListening(false);

    recog.onresult = async (e) => {
      const question = e.results[0][0].transcript;
      setListening(false);
      setThinking(true);
      setBubble('Hmm, let me think…');

      try {
        const reply = await askNova({
          childName:    child?.name    || 'friend',
          childAge:     child?.age     || 8,
          avatarId:     'nova',
          subjectLabel: subject?.label || '',
          lessonTitle:  lesson?.title  || '',
          learnContent,
          history:      [],
          question,
        });
        setThinking(false);
        speak(reply);
      } catch {
        setThinking(false);
        speak('Hmm, I had a little trouble with that. Try asking me again!');
      }
    };

    recog.start();
  }

  function stopListening() {
    recognRef.current?.stop();
    setListening(false);
  }

  function replaySection() {
    const text = sectionScript(lesson, section, child?.name);
    if (text) speak(text);
  }

  // Ring color matches state
  const ringColor = listening ? '#10B981' : thinking ? '#F59E0B' : '#7C3AED';

  const stateLabel = charState === 'idle'      ? 'Nova'
                   : charState === 'speaking'  ? 'speaking'
                   : charState === 'listening' ? 'listening…'
                   : 'thinking…';

  const stateLabelColor = listening ? '#10B981' : thinking ? '#F59E0B' : speaking ? '#A78BFA' : 'rgba(255,255,255,0.18)';

  return (
    <div
      className="fixed bottom-2 right-2 z-[60] flex flex-col items-center pointer-events-none select-none"
      style={{ gap: 8 }}
    >
      {/* ── Speech bubble ───────────────────────────────── */}
      {bubble && (
        <div
          key={bubble}
          className="relative pointer-events-none"
          style={{ animation: 'nova-bubble-in 0.32s cubic-bezier(0.34,1.56,0.64,1) both' }}
        >
          <div
            className="rounded-2xl px-4 py-2.5 shadow-2xl"
            style={{
              maxWidth:       210,
              background:     'rgba(8,6,28,0.96)',
              border:         `1px solid ${ringColor}45`,
              backdropFilter: 'blur(16px)',
            }}
          >
            <p
              className="text-white/90 font-medium leading-snug"
              style={{
                fontSize:            13,
                display:             '-webkit-box',
                WebkitLineClamp:     2,
                WebkitBoxOrient:     'vertical',
                overflow:            'hidden',
              }}
            >
              {bubble}
            </p>
          </div>
          {/* Bubble tail */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rotate-45"
            style={{
              bottom:       -6,
              width:        12,
              height:       12,
              background:   'rgba(8,6,28,0.96)',
              borderRight:  `1px solid ${ringColor}45`,
              borderBottom: `1px solid ${ringColor}45`,
            }}
          />
        </div>
      )}

      {/* ── Nova avatar — glow ring wraps the SVG owl ─── */}
      <button
        onClick={replaySection}
        aria-label="Nova — tap to hear again"
        className={`pointer-events-auto focus:outline-none rounded-full ${
          speaking ? 'nova-speaking' : listening ? 'nova-listening' : thinking ? 'nova-thinking' : 'nova-idle'
        }`}
        style={{
          width:      300,
          height:     300,
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          willChange: 'box-shadow',
        }}
      >
        <NovaSVG state={svgState} size={300} />
      </button>

      {/* ── State label ─────────────────────────────────── */}
      <p
        className="pointer-events-none text-center tracking-widest uppercase"
        style={{
          fontSize:      9,
          letterSpacing: '0.12em',
          color:         stateLabelColor,
          marginTop:     -4,
          transition:    'color 0.4s ease',
        }}
      >
        {stateLabel}
      </p>

      {/* ── Microphone button ───────────────────────────── */}
      {canListen && (
        <button
          onClick={listening ? stopListening : startListening}
          disabled={thinking}
          aria-label={listening ? 'Stop listening' : 'Ask Nova something'}
          className={`pointer-events-auto rounded-full flex items-center justify-center
            transition-all hover:scale-110 active:scale-95 disabled:opacity-30
            ${listening ? 'nova-mic-active' : ''}`}
          style={{
            width:      52,
            height:     52,
            background: listening ? 'rgba(16,185,129,0.9)' : 'rgba(124,58,237,0.82)',
            boxShadow:  listening ? undefined : '0 4px 20px rgba(124,58,237,0.55)',
            marginTop:  2,
          }}
        >
          {listening ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8"  y1="23" x2="16" y2="23"/>
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
