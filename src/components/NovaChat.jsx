import { useState, useRef, useEffect } from 'react';
import { getAvatar } from '../lib/constants';
import { askNova } from '../lib/nova';

export default function NovaChat({ child, lesson, subject }) {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput]     = useState('');
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  const avatar     = getAvatar(child?.avatar);
  const firstName  = (child?.name || 'friend').split(' ')[0];
  const learnContent = (lesson?.learn || []).map((p, i) => `${i + 1}. ${p}`).join('\n');

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function handleSend() {
    if (!input.trim() || loading) return;
    const question = input.trim();
    setInput('');

    const history = messages.slice(-8);
    setMessages(m => [...m, { role: 'user', content: question }]);
    setLoading(true);

    try {
      const reply = await askNova({
        childName:    child?.name || 'friend',
        childAge:     child?.age  || 8,
        avatarId:     child?.avatar || 'nova',
        subjectLabel: subject?.label || '',
        lessonTitle:  lesson?.title  || '',
        learnContent,
        history,
        question,
      });
      setMessages(m => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(m => [...m, {
        role:    'assistant',
        content: `Hmm, I'm having a little trouble thinking right now. Try asking me again in a moment, ${firstName}!`,
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Floating avatar button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={`Ask ${avatar.name}`}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full overflow-hidden transition-all duration-200 hover:scale-110 active:scale-95"
        style={{
          boxShadow: `0 4px 24px ${avatar.accent}70, 0 0 0 3px ${avatar.accent}40`,
        }}
      >
        <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover" />
        {/* Pulse ring when closed */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: avatar.accent }}
          />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[60] w-[360px] max-w-[calc(100vw-3rem)] rounded-3xl flex flex-col overflow-hidden shadow-2xl"
          style={{
            background:  '#0F0B2E',
            border:      `1px solid ${avatar.accent}35`,
            boxShadow:   `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${avatar.accent}20`,
            maxHeight:   'min(520px, calc(100vh - 8rem))',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
              style={{ boxShadow: `0 0 0 2px ${avatar.accent}50` }}
            >
              <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-tight">{avatar.name} the {avatar.animal}</p>
              <p className="text-white/40 text-xs">Ask anything about this lesson</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/25 hover:text-white/60 transition-colors p-1"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                  <img src={avatar.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white/6 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[84%]">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Hey {firstName}! I'm {avatar.name}. What do you want to know about <strong className="text-white">{lesson?.title}</strong>?
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg, i) =>
              msg.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div
                    className="px-3 py-2 rounded-2xl rounded-tr-sm max-w-[84%]"
                    style={{
                      background: `${avatar.accent}18`,
                      border:     `1px solid ${avatar.accent}35`,
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: avatar.accent }}>
                      {msg.content}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                    <img src={avatar.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white/6 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[84%]">
                    <p className="text-white/80 text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              )
            )}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                  <img src={avatar.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white/6 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1 items-center">
                    <span
                      className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: '120ms' }}
                    />
                    <span
                      className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: '240ms' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div className="px-4 py-3 border-t border-white/8 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask ${avatar.name}…`}
              disabled={loading}
              className="flex-1 bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/25 disabled:opacity-50 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              aria-label="Send"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-25 flex-shrink-0"
              style={{ background: avatar.accent }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
