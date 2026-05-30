// ─────────────────────────────────────────────────────────────────────────────
// Annotate.jsx — Voyager interaction format 5 (Spec v1.1)
// Tap a sentence → assign a label → write reasoning → expert comparison
//
// Screen schema:
//   { type: 'annotate', source, sourceCitation, passage, labels[], annotationPrompts[], expertAnnotation }
//   passage:             string OR string[] (array of pre-split sentences)
//   labels[]:            string OR {id, label, color} object
//   annotationPrompts[]: { sentenceIdx|targetSentenceIndex, prompt }
//   expertAnnotation:    string or array of { sentenceIdx, label, note }
//
// Mobile UX: tap a sentence to select it → label palette appears → tap label to assign.
// "Tap to change" lets them re-annotate any sentence.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useMemo } from 'react';

// Split passage into sentences (only used when passage is a plain string).
function splitSentences(text) {
  if (!text) return [];
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z"'])/)
    .map(s => s.trim())
    .filter(Boolean);
}

// Normalize labels to { text, color } regardless of whether they're strings or objects.
// Fallback color palette when labels don't specify their own color.
const LABEL_COLORS = [
  '#60A5FA', '#34D399', '#FBBF24', '#F87171',
  '#A78BFA', '#F472B6', '#38BDF8', '#FB923C',
];
function normalizeLabels(rawLabels) {
  return (rawLabels || []).map((l, i) => {
    if (typeof l === 'string') return { text: l, color: LABEL_COLORS[i % LABEL_COLORS.length] };
    return { text: l.label || l.text || String(l), color: l.color || LABEL_COLORS[i % LABEL_COLORS.length] };
  });
}

// Normalize annotationPrompts: accept sentenceIdx or targetSentenceIndex.
function normalizeAnnotationPrompts(rawPrompts) {
  return (rawPrompts || []).map(p => ({
    ...p,
    sentenceIdx: p.sentenceIdx ?? p.targetSentenceIndex ?? 0,
  }));
}

export default function Annotate({ screen, accent, childName, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const labels            = useMemo(() => normalizeLabels(screen.labels), [screen.labels]);
  const annotationPrompts = useMemo(() => normalizeAnnotationPrompts(screen.annotationPrompts), [screen.annotationPrompts]);
  const expertAnnotation  = screen.expertAnnotation  || '';

  // passage: accept string or pre-split string[]
  const sentences = useMemo(() => {
    if (Array.isArray(screen.passage)) return screen.passage.filter(Boolean);
    return splitSentences(screen.passage || '');
  }, [screen.passage]);

  // ── State ──────────────────────────────────────────────────────────────────
  const [selectedSentenceIdx, setSelectedSentenceIdx] = useState(null);
  const [annotations,         setAnnotations]          = useState({});    // sentenceIdx → label string
  const [reasoningMap,        setReasoningMap]         = useState({});    // sentenceIdx → reasoning string
  const [phase,               setPhase]                = useState('annotate'); // 'annotate' | 'reasoning' | 'reveal'

  const annotatedCount = Object.keys(annotations).length;
  const allAnnotated   = annotatedCount >= Math.min(sentences.length, 3); // require at least 3 (or all if fewer)

  // Sentences needing reasoning (from annotationPrompts that have been annotated)
  const pendingReasoning = annotationPrompts.filter(ap =>
    annotations[ap.sentenceIdx] !== undefined && !reasoningMap[ap.sentenceIdx]
  );

  function assignLabel(labelText) {
    if (selectedSentenceIdx === null) return;
    setAnnotations(prev => ({ ...prev, [selectedSentenceIdx]: labelText }));
    setSelectedSentenceIdx(null);
  }

  function colorForLabel(labelText) {
    const found = labels.find(l => l.text === labelText);
    return found?.color || accent;
  }

  // ── Phase: reveal ──────────────────────────────────────────────────────────
  if (phase === 'reveal') {
    const expertLines = Array.isArray(expertAnnotation)
      ? expertAnnotation
      : (expertAnnotation ? [{ note: expertAnnotation }] : []);

    return (
      <div style={shell}>
        <p style={badgeStyle}>Expert annotation</p>

        {/* Their annotations */}
        <div>
          <p style={sectionLabelStyle}>Your annotations</p>
          {sentences.map((sent, idx) => {
            const label = annotations[idx];
            if (!label) return null;
            return (
              <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                <span style={{ background: colorForLabel(label) + '22', border: `1px solid ${colorForLabel(label)}55`, borderRadius: 6, padding: '2px 8px', color: colorForLabel(label), fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap', marginTop: 2 }}>{label}</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>"{sent}"</p>
              </div>
            );
          })}
        </div>

        {/* Expert annotations */}
        <div style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.25)', borderRadius: 14, padding: '14px 16px' }}>
          <p style={sectionLabelStyle}>Expert read</p>
          {expertLines.map((line, i) => {
            if (typeof line === 'string') {
              return line.split('\n').filter(Boolean).map((para, j) => (
                <p key={`${i}-${j}`} style={{ color: '#e2d9f3', fontSize: '0.92rem', lineHeight: 1.7, margin: j === 0 ? 0 : '10px 0 0' }}>{r(para)}</p>
              ));
            }
            const { sentenceIdx, label: expLabel, note } = line;
            const sent = sentences[sentenceIdx];
            return (
              <div key={i} style={{ marginBottom: i < expertLines.length - 1 ? 10 : 0 }}>
                {sent && (
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontStyle: 'italic', margin: '0 0 3px' }}>"{sent}"</p>
                )}
                {expLabel && (
                  <span style={{ background: colorForLabel(expLabel) + '22', border: `1px solid ${colorForLabel(expLabel)}55`, borderRadius: 6, padding: '2px 8px', color: colorForLabel(expLabel), fontSize: '0.72rem', fontWeight: 700, display: 'inline-block', marginBottom: 4 }}>{expLabel}</span>
                )}
                {note && <p style={{ color: '#e2d9f3', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{r(note)}</p>}
              </div>
            );
          })}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
          There's rarely one right answer. The goal is building the habit of reading closely and naming what you see.
        </p>

        <button style={continueBtn(true, accent)} onClick={onComplete}>Continue →</button>
      </div>
    );
  }

  // ── Phase: reasoning ───────────────────────────────────────────────────────
  if (phase === 'reasoning') {
    const currentPrompt = annotationPrompts.find(ap => !reasoningMap[ap.sentenceIdx]);
    if (!currentPrompt) {
      // All reasoning done — go to reveal
      setPhase('reveal');
      return null;
    }
    const sent = sentences[currentPrompt.sentenceIdx];
    const assignedLabel = annotations[currentPrompt.sentenceIdx];
    return (
      <div style={shell}>
        <p style={sectionLabelStyle}>Reasoning check</p>
        <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>{r(currentPrompt.prompt || 'Why did you annotate this that way?')}</p>

        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 14, padding: '14px 16px' }}>
          {assignedLabel && (
            <span style={{ background: colorForLabel(assignedLabel) + '22', border: `1px solid ${colorForLabel(assignedLabel)}55`, borderRadius: 6, padding: '2px 8px', color: colorForLabel(assignedLabel), fontSize: '0.72rem', fontWeight: 700, display: 'inline-block', marginBottom: 6 }}>{assignedLabel}</span>
          )}
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>"{sent}"</p>
        </div>

        <textarea
          value={reasoningMap[currentPrompt.sentenceIdx] || ''}
          onChange={e => setReasoningMap(prev => ({ ...prev, [currentPrompt.sentenceIdx]: e.target.value }))}
          placeholder="Write 1–2 sentences explaining your reasoning…"
          rows={3}
          style={textArea(reasoningMap[currentPrompt.sentenceIdx] || '', accent)}
        />

        <button
          style={continueBtn(!!(reasoningMap[currentPrompt.sentenceIdx]?.trim()), accent)}
          onClick={() => {
            if (!reasoningMap[currentPrompt.sentenceIdx]?.trim()) return;
            // Check if any more reasoning prompts remain
            const remaining = annotationPrompts.filter(ap =>
              !reasoningMap[ap.sentenceIdx] && ap.sentenceIdx !== currentPrompt.sentenceIdx
            );
            if (remaining.length > 0) {
              // Force re-render to show next prompt
              setReasoningMap(prev => ({ ...prev }));
            } else {
              setPhase('reveal');
            }
          }}
        >
          {annotationPrompts.filter(ap => !reasoningMap[ap.sentenceIdx] && ap.sentenceIdx !== currentPrompt.sentenceIdx).length > 0
            ? 'Next reasoning prompt →'
            : 'See expert comparison →'}
        </button>
      </div>
    );
  }

  // ── Phase: annotate (main) ─────────────────────────────────────────────────
  return (
    <div style={shell}>
      {/* Source attribution */}
      {screen.sourceCitation && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontStyle: 'italic', margin: 0 }}>
          {screen.sourceCitation}
        </p>
      )}

      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
        Tap a sentence to annotate it. Annotate at least {Math.min(sentences.length, 3)} sentence{Math.min(sentences.length, 3) !== 1 ? 's' : ''}.
      </p>

      {/* Label palette (visible when a sentence is selected) */}
      {selectedSentenceIdx !== null && (
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(8px)',
          borderRadius: 14, border: `1.5px solid ${accent}44`,
          padding: '12px 14px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Label this sentence
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {labels.map((label, li) => (
              <button
                key={li}
                onClick={() => assignLabel(label.text)}
                style={{
                  padding: '6px 14px', borderRadius: 20,
                  border:      `1.5px solid ${label.color}88`,
                  background:  `${label.color}20`,
                  color:       label.color,
                  fontWeight:  700, fontSize: '0.85rem', cursor: 'pointer',
                  transition: 'all 0.12s',
                }}
              >
                {label.text}
              </button>
            ))}
            <button
              onClick={() => setSelectedSentenceIdx(null)}
              style={{
                padding: '6px 14px', borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'transparent', color: 'rgba(255,255,255,0.4)',
                fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}

      {/* Passage */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sentences.map((sent, idx) => {
          const label    = annotations[idx];
          const color    = label ? colorForLabel(label) : null;
          const isActive = selectedSentenceIdx === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedSentenceIdx(prev => prev === idx ? null : idx)}
              style={{
                borderRadius:  12,
                padding:       '12px 14px',
                cursor:        'pointer',
                border:        `1.5px solid ${isActive ? accent + '88' : label ? color + '44' : 'rgba(255,255,255,0.1)'}`,
                background:    isActive ? `${accent}14` : label ? `${color}10` : 'rgba(255,255,255,0.04)',
                transition:    'all 0.18s ease',
                position:      'relative',
              }}
            >
              {label && (
                <span style={{
                  position: 'absolute', top: -10, left: 12,
                  background: color + '22', border: `1px solid ${color}55`,
                  borderRadius: 6, padding: '2px 8px',
                  color, fontSize: '0.68rem', fontWeight: 700,
                }}>
                  {label} — tap to change
                </span>
              )}
              <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.65, margin: 0, paddingTop: label ? 6 : 0 }}>
                {sent}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress + continue */}
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', textAlign: 'center', margin: 0 }}>
        {annotatedCount} sentence{annotatedCount !== 1 ? 's' : ''} annotated
        {!allAnnotated && ` — annotate ${Math.min(sentences.length, 3) - annotatedCount} more to continue`}
      </p>

      <button
        style={continueBtn(allAnnotated, accent)}
        onClick={() => {
          if (!allAnnotated) return;
          if (annotationPrompts.length > 0) setPhase('reasoning');
          else setPhase('reveal');
        }}
      >
        {allAnnotated
          ? (annotationPrompts.length > 0 ? 'Explain your thinking →' : 'See expert comparison →')
          : `Annotate ${Math.min(sentences.length, 3) - annotatedCount} more to continue`}
      </button>
    </div>
  );
}

// ── Shared style helpers ───────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const badgeStyle = {
  alignSelf: 'flex-start',
  background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.4)',
  borderRadius: 8, padding: '4px 12px', color: '#A78BFA',
  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
};
const sectionLabelStyle = {
  color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700,
  letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px',
};
const continueBtn = (enabled, accent) => ({
  padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
  border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
  background:  enabled ? accent : 'rgba(255,255,255,0.08)',
  color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
  boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
  transition:  'all 0.2s', alignSelf: 'stretch',
});
const textArea = (value, accent) => ({
  width: '100%', padding: '14px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: `1.5px solid ${value ? accent + '66' : 'rgba(255,255,255,0.12)'}`,
  borderRadius: 12, color: '#fff', fontSize: '0.96rem', lineHeight: 1.6,
  resize: 'vertical', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s', boxSizing: 'border-box',
});
