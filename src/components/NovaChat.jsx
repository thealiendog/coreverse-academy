import { useState, useEffect, useRef, useCallback } from 'react';
import { askNova } from '../lib/nova';
import { getAvatar } from '../lib/constants';

// Guide intro — spoken once when lesson first loads (INTRO step)
const GUIDE_INTROS = {
  nova:  (name) => `Hello, ${name}! I'm Nova, and together we're going to explore the universe!`,
  sage:  (name) => `Hello, ${name}! I'm Sage, and I'm so glad you're here.`,
  byte:  (name) => `Hey ${name}! I'm Byte — ready to build something awesome?`,
  ace:   (name) => `Welcome, ${name}! I'm Ace. Let's talk about building your future.`,
  muse:  (name) => `Hi ${name}! I'm Muse — let's create something beautiful together!`,
  valor: (name) => `Hello ${name}! I'm Valor. Leaders show up — and here you are.`,
  terra: (name) => `Hey there, ${name}! I'm Terra. Let's take care of that amazing body of yours.`,
  lyra:  (name) => `Welcome, ${name}! I'm Lyra. Every great story starts with someone willing to listen.`,
  remi:  (name) => `Hi ${name}! I'm Remi. Ready to crack some numbers?`,
  quill: (name) => `Hello, ${name}! I'm Quill. Words have power — let's discover yours.`,
  cosmo: (name) => `Hey ${name}! I'm Cosmo — let's experiment!`,
  atlas: (name) => `Welcome, ${name}! I'm Atlas. The world is bigger than you think.`,
  luna:  (name) => `Hola, ${name}! I'm Luna. Vamos a aprender juntos!`,
  orion: (name) => `Hello, ${name}. I'm Orion. The biggest questions have no final answers — only deeper ones.`,
};

// What the guide speaks when each step becomes active
function stepScript(lesson, stepType, learnBlock, childName) {
  const name = (childName || 'friend').split(' ')[0];
  switch (stepType) {
    case 'hook':        return lesson?.arrival?.replace(/\{\{name\}\}/g, name) || '';
    case 'learn':       return learnBlock || '';
    case 'spark':       return lesson?.spark ? `Here's the big idea: ${lesson.spark}` : '';
    case 'quickcheck':  return `Quick check! ${lesson?.quickCheck?.question || ''}`;
    case 'explore':     return lesson?.explore ? `Here's your mission: ${lesson.explore}` : '';
    case 'badge':       return `Amazing work, ${name}! You earned the ${lesson?.badge || 'lesson'} badge. I'm so proud of you!`;
    default:            return '';
  }
}

function clamp(text, max = 90) {
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
}

export default function NovaChat({ child, lesson, subject, stepType, learnBlock, quizCurrent, guide, tfStatement, tfFeedback, onFeedbackEnd, onSpeakStart, onSpeakEnd }) {
  const [speaking, setSpeaking]         = useState(false);
  const [listening, setListening]       = useState(false);
  const [thinking, setThinking]         = useState(false);
  const [bubble, setBubble]             = useState('');
  const [canListen, setCanListen]       = useState(false);
  const [micPromptKey, setMicPromptKey] = useState(0);
  const [showMicPrompt, setShowMicPrompt] = useState(false);

  const audioRef       = useRef(null);
  const utterRef       = useRef(null);
  const recognRef      = useRef(null);
  const bubbleTimer    = useRef(null);
  const micPromptTimer = useRef(null);
  const introSpoken    = useRef(false); // fires once on mount (intro step)
  // T/F chaining: learn block speech may finish before or after T/F is generated
  const tfStatementRef = useRef(null);  // latest tfStatement value
  const pendingTfRef   = useRef(false); // learn block done, waiting for T/F to arrive
  const learnEndedRef  = useRef(false); // learn block speech has finished
  const learnContent   = (lesson?.learn || []).map((p, i) => `${i + 1}. ${p}`).join('\n');

  const guideId  = (guide || lesson?.guide || lesson?.avatar || 'nova').toLowerCase();
  const guideAv  = getAvatar(guideId);
  const charState = listening ? 'listening' : thinking ? 'thinking' : speaking ? 'speaking' : 'idle';

  useEffect(() => {
    setCanListen(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  function showPromptBriefly() {
    clearTimeout(micPromptTimer.current);
    setShowMicPrompt(true);
    setMicPromptKey(k => k + 1);
    micPromptTimer.current = setTimeout(() => setShowMicPrompt(false), 3600);
  }

  function stopAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    if (utterRef.current) {
      window.speechSynthesis?.cancel();
      utterRef.current = null;
    }
    setSpeaking(false);
    clearTimeout(micPromptTimer.current);
    setShowMicPrompt(false);
  }

  const speak = useCallback(async (text, onComplete) => {
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
      let cachedDur = null;
      el.onloadedmetadata = () => { cachedDur = el.duration; };
      el.onplay  = () => {
        setSpeaking(true);
        // Use loadedmetadata value, fallback to checking el.duration at play time,
        // final fallback: estimate from word count (~150 WPM → 0.40s/word)
        const dur = cachedDur
          || (Number.isFinite(el.duration) && el.duration > 0 ? el.duration : null)
          || text.split(/\s+/).length * 0.40;
        onSpeakStart?.(text, dur);
      };
      el.onended = () => {
        setSpeaking(false);
        audioRef.current = null;
        onSpeakEnd?.();
        bubbleTimer.current = setTimeout(() => setBubble(''), 3500);
        if (window.SpeechRecognition || window.webkitSpeechRecognition) showPromptBriefly();
        onComplete?.();
      };
      el.onerror = () => { setSpeaking(false); audioRef.current = null; setBubble(''); onSpeakEnd?.(); };
      await el.play();
    } catch {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.rate  = 0.88;
        utt.pitch = 1.05;
        utterRef.current = utt;
        utt.onstart = () => {
          setSpeaking(true);
          const dur = text.split(/\s+/).length * 0.40;
          onSpeakStart?.(text, dur);
        };
        utt.onend   = () => {
          setSpeaking(false);
          utterRef.current = null;
          onSpeakEnd?.();
          bubbleTimer.current = setTimeout(() => setBubble(''), 3500);
          if (window.SpeechRecognition || window.webkitSpeechRecognition) showPromptBriefly();
          onComplete?.();
        };
        utt.onerror = () => { setSpeaking(false); utterRef.current = null; onSpeakEnd?.(); };
        window.speechSynthesis.speak(utt);
      } else {
        setSpeaking(false);
        setBubble('');
        onComplete?.();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Speak guide intro once on lesson load (INTRO step)
  useEffect(() => {
    if (introSpoken.current) return;
    introSpoken.current = true;
    const introFn = GUIDE_INTROS[guideId] || GUIDE_INTROS.nova;
    const name = (child?.name || 'friend').split(' ')[0];
    const t = setTimeout(() => speak(introFn(name)), 400);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Speak content when step changes — skip intro (handled above)
  useEffect(() => {
    if (stepType === 'intro') return;

    // Reset T/F chaining state on every step change
    tfStatementRef.current = tfStatement;
    pendingTfRef.current   = false;
    learnEndedRef.current  = false;

    const text = stepScript(lesson, stepType, learnBlock, child?.name);
    if (!text) return;

    if (stepType === 'learn') {
      // After learn block, speak T/F if available; else mark as pending
      const t = setTimeout(() => speak(text, () => {
        learnEndedRef.current = true;
        if (tfStatementRef.current) {
          speak(`Quick check! True or false: ${tfStatementRef.current}`);
        } else {
          pendingTfRef.current = true; // T/F not ready yet — handled in tfStatement effect
        }
      }), 700);
      return () => clearTimeout(t);
    }

    // Chain a follow-up prompt for reflection/response steps
    let chain = null;
    if (stepType === 'spark')   chain = "What do you think about that? Share your ideas in the box below!";
    if (stepType === 'explore') chain = "Write your response in the box below when you're ready.";

    const t = setTimeout(() => speak(text, chain ? () => speak(chain) : undefined), 700);
    return () => clearTimeout(t);
  }, [stepType, learnBlock, lesson, child?.name, speak]);

  // When T/F statement arrives after learn block has already finished
  useEffect(() => {
    tfStatementRef.current = tfStatement;
    if (!tfStatement || stepType !== 'learn') return;
    if (pendingTfRef.current) {
      pendingTfRef.current = false;
      speak(`Quick check! True or false: ${tfStatement}`);
    }
  }, [tfStatement, stepType, speak]);

  // Speak answer feedback and auto-advance via onFeedbackEnd
  useEffect(() => {
    if (!tfFeedback) return;
    speak(tfFeedback, onFeedbackEnd);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tfFeedback]);

  // Read each quiz question aloud as the child reaches it
  useEffect(() => {
    if (stepType !== 'quiz') return;
    const q = lesson?.quiz?.[quizCurrent];
    if (!q) return;
    const prefix = quizCurrent === 0 ? "Let's see what you learned! " : '';
    const text = `${prefix}Question ${quizCurrent + 1}: ${q.question}`;
    const t = setTimeout(() => speak(text), 700);
    return () => clearTimeout(t);
  }, [stepType, quizCurrent, lesson, speak]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(bubbleTimer.current);
      clearTimeout(micPromptTimer.current);
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
    clearTimeout(micPromptTimer.current);
    setShowMicPrompt(false);
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
    if (stepType === 'quiz') {
      const q = lesson?.quiz?.[quizCurrent];
      if (q) speak(`Question ${quizCurrent + 1}: ${q.question}`);
      return;
    }
    const text = stepScript(lesson, stepType, learnBlock, child?.name);
    if (text) speak(text);
  }

  const ringColor = listening ? '#10B981' : thinking ? '#F59E0B' : '#7C3AED';

  const stateLabel = charState === 'idle'      ? guideAv.name
                   : charState === 'speaking'  ? 'speaking'
                   : charState === 'listening' ? 'listening…'
                   : 'thinking…';

  const stateLabelColor = listening ? '#10B981' : thinking ? '#F59E0B' : speaking ? '#A78BFA' : 'rgba(255,255,255,0.18)';

  return (
    <div
      className="fixed bottom-2 right-6 z-[60] flex flex-col items-center pointer-events-none select-none"
      style={{ gap: 8, animation: 'nova-enter-from-right 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.8s both' }}
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
                fontSize:        13,
                display:         '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow:        'hidden',
              }}
            >
              {bubble}
            </p>
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 rotate-45"
            style={{
              bottom: -6, width: 12, height: 12,
              background:   'rgba(8,6,28,0.96)',
              borderRight:  `1px solid ${ringColor}45`,
              borderBottom: `1px solid ${ringColor}45`,
            }}
          />
        </div>
      )}

      {/* ── Guide portrait ───────────────────────────────── */}
      <button
        onClick={replaySection}
        aria-label={`${guideAv.name} — tap to hear again`}
        className={`pointer-events-auto focus:outline-none rounded-full ${
          speaking ? 'nova-speaking' : listening ? 'nova-listening' : thinking ? 'nova-thinking' : 'nova-idle'
        }`}
        style={{
          width: 300, height: 300,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent', willChange: 'box-shadow',
        }}
      >
        <div style={{ width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {/* Glow aura */}
          <div
            style={{
              position: 'absolute', width: 226, height: 226, borderRadius: '50%',
              background: `radial-gradient(circle, ${guideAv.accent}${speaking ? '38' : '16'} 0%, transparent 68%)`,
              filter: `blur(${speaking ? 20 : 10}px)`,
              transition: 'background 0.4s ease, filter 0.4s ease',
              animation: speaking ? 'nova-aura-breathe 0.92s ease-in-out infinite' : 'nova-aura-breathe 3.6s ease-in-out infinite',
              transformOrigin: '50% 50%', pointerEvents: 'none',
            }}
          />
          {/* Bob wrapper (translateY only) */}
          <div className={speaking ? 'nova-char-bob' : ''} style={{ position: 'relative' }}>
            {/* Image circle — scale-breathe when speaking */}
            <div
              className={speaking ? 'guide-portrait-speaking' : ''}
              style={{
                width: 210, height: 210, borderRadius: '50%', overflow: 'hidden',
                boxShadow: speaking
                  ? `0 0 72px ${guideAv.accent}80, 0 0 0 3px ${guideAv.accent}90`
                  : listening
                  ? `0 0 56px #10B98180, 0 0 0 3px #10B98190`
                  : thinking
                  ? `0 0 56px #F59E0B80, 0 0 0 3px #F59E0B90`
                  : `0 0 40px ${guideAv.accent}45, 0 0 0 2px ${guideAv.accent}40`,
                transition: 'box-shadow 0.4s ease',
              }}
            >
              <img src={guideAv.image} alt={guideAv.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </button>

      {/* ── State label ─────────────────────────────────── */}
      <p
        className="pointer-events-none text-center tracking-widest uppercase"
        style={{ fontSize: 9, letterSpacing: '0.12em', color: stateLabelColor, marginTop: -4, transition: 'color 0.4s ease' }}
      >
        {stateLabel}
      </p>

      {/* ── Mic invitation prompt ───────────────────────── */}
      {showMicPrompt && canListen && (
        <p
          key={micPromptKey}
          className="pointer-events-none text-center"
          style={{
            fontSize: 11, color: 'rgba(167,139,250,0.72)', letterSpacing: '0.01em',
            marginTop: -2, marginBottom: -4, maxWidth: 160, lineHeight: 1.4,
            animation: 'nova-mic-prompt 3.5s ease forwards',
          }}
        >
          Curious about something?<br />Tap the mic ✦
        </p>
      )}

      {/* ── Microphone button ───────────────────────────── */}
      {canListen && (
        <button
          onClick={listening ? stopListening : startListening}
          disabled={thinking}
          aria-label={listening ? 'Stop listening' : 'Ask a question'}
          className={`pointer-events-auto rounded-full flex items-center justify-center
            transition-all hover:scale-110 active:scale-95 disabled:opacity-30
            ${listening ? 'nova-mic-active' : ''}`}
          style={{
            width: 52, height: 52,
            background: listening ? 'rgba(16,185,129,0.9)' : 'rgba(124,58,237,0.82)',
            boxShadow:  listening ? undefined : '0 4px 20px rgba(124,58,237,0.55)',
            marginTop: 2,
          }}
        >
          {listening ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="6" width="12" height="12" rx="2"/>
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
