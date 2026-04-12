import { useState, useEffect, useRef, useCallback } from 'react';
import { getAvatar } from '../lib/constants';
import { askNova } from '../lib/nova';

// Text Nova reads aloud when each lesson section loads
function sectionScript(lesson, section, childName) {
  const name = (childName || 'friend').split(' ')[0];
  switch (section) {
    case 0: return lesson?.arrival?.replace(/\{\{name\}\}/g, name) || '';
    case 1: return lesson?.spark || '';
    case 2: {
      const first = lesson?.learn?.[0] || '';
      return `Here's what we're learning today. ${first}`;
    }
    case 3: return lesson?.explore || '';
    case 4: return `Quick check! ${lesson?.quickCheck?.question || ''}`;
    case 5: return ''; // quiz — child needs to focus
    case 6: return `Amazing work, ${name}! You earned the ${lesson?.badge || 'lesson'} badge. I'm so proud of you!`;
    default: return '';
  }
}

export default function NovaChat({ child, lesson, subject, section }) {
  const [speaking, setSpeaking]   = useState(false);
  const [listening, setListening] = useState(false);
  const [thinking, setThinking]   = useState(false);
  const [bubble, setBubble]       = useState('');
  const [canListen, setCanListen] = useState(false);

  const avatar      = getAvatar(child?.avatar);
  const audioRef    = useRef(null);
  const recognRef   = useRef(null);
  const bubbleTimer = useRef(null);
  const learnContent = (lesson?.learn || []).map((p, i) => `${i + 1}. ${p}`).join('\n');

  useEffect(() => {
    setCanListen(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  // Stop current audio immediately
  function stopAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    setSpeaking(false);
  }

  // Speak text via ElevenLabs (routed through Netlify function)
  const speak = useCallback(async (text) => {
    if (!text) return;

    stopAudio();
    clearTimeout(bubbleTimer.current);

    // Show bubble right away so child sees what Nova is about to say
    setBubble(text.length > 110 ? text.slice(0, 107) + '…' : text);

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error('speak unavailable');

      const { audio } = await res.json();
      const el = new Audio(`data:audio/mpeg;base64,${audio}`);
      audioRef.current = el;

      el.onplay  = () => setSpeaking(true);
      el.onended = () => {
        setSpeaking(false);
        audioRef.current = null;
        bubbleTimer.current = setTimeout(() => setBubble(''), 3000);
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

  // Auto-read each section when it loads
  useEffect(() => {
    const text = sectionScript(lesson, section, child?.name);
    if (!text) return;
    const delay = setTimeout(() => speak(text), 700);
    return () => clearTimeout(delay);
  }, [section, lesson, child?.name, speak]);

  // Cleanup on unmount
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
          childName:    child?.name   || 'friend',
          childAge:     child?.age    || 8,
          avatarId:     child?.avatar || 'nova',
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

  const ringColor = listening ? '#10B981' : thinking ? '#F59E0B' : avatar.accent;
  const isActive  = speaking || listening || thinking;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2 pointer-events-none">

      {/* Speech bubble */}
      {bubble && (
        <div className="relative pointer-events-auto mb-1 max-w-[220px]">
          <div
            className="bg-[#0F0B2E] rounded-2xl px-4 py-2.5 shadow-2xl"
            style={{ border: `1px solid ${avatar.accent}45` }}
          >
            <p className="text-white/85 text-sm leading-relaxed">{bubble}</p>
          </div>
          {/* Tail pointing toward avatar */}
          <div
            className="absolute right-7 -bottom-[7px] w-3.5 h-3.5 bg-[#0F0B2E] rotate-45"
            style={{
              borderRight:  `1px solid ${avatar.accent}45`,
              borderBottom: `1px solid ${avatar.accent}45`,
            }}
          />
        </div>
      )}

      {/* Avatar + mic */}
      <div className="flex items-end gap-3 pointer-events-auto">

        {/* Microphone button */}
        {canListen && (
          <button
            onClick={listening ? stopListening : startListening}
            disabled={thinking}
            aria-label={listening ? 'Stop listening' : 'Ask Nova a question'}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-30"
            style={{
              background: listening ? '#10B981' : 'rgba(124,58,237,0.18)',
              border:     `2px solid ${listening ? '#10B981' : avatar.accent}55`,
              boxShadow:  listening ? '0 0 20px #10B98155' : `0 0 12px ${avatar.accent}30`,
            }}
          >
            {listening ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8"  y1="23" x2="16" y2="23"/>
              </svg>
            )}
          </button>
        )}

        {/* Nova avatar — tap to replay */}
        <button
          onClick={replaySection}
          aria-label={`${avatar.name} — tap to hear again`}
          className="relative w-20 h-20 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          style={{
            boxShadow: `0 0 0 3px ${ringColor}70, 0 6px 28px ${ringColor}45`,
          }}
        >
          <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover" />
          {isActive && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-25"
              style={{ background: ringColor }}
            />
          )}
        </button>
      </div>

      {!isActive && !bubble && (
        <p className="text-white/18 text-[10px] tracking-wide pointer-events-none">
          tap to replay
        </p>
      )}
    </div>
  );
}
