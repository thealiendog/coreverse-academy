// MagazineScreen — Phase 2: image + headline + karaoke paragraphs + vocab + inline hint
// Responsive: single-column on mobile, two-column on iPad landscape (CSS classes from ExplorerLessonPlayer style block)
// DAY 2.11: Scroll hint chevron — bouncing icon at viewport bottom when vocab is below fold.
// visual field: optional structured visual replacing or augmenting the image slot.
//   type 'math-block'  → <pre> with monospace, preserved whitespace
//   type 'diagram'     → one of the 6 UE SVG primitives (same data shapes as the game)
//   type 'illustration'→ <img src> with graceful error handling
import { useState, useEffect, useRef } from 'react';

// ── Magazine visual renderer ──────────────────────────────────────────────────
// Renders the `visual` field on a magazine section. Three types supported:
//   'math-block'  : <pre> monospace block for stacked arithmetic notation
//   'diagram'     : one of the 6 UE SVG primitives (same data shapes as the game)
//   'illustration': <img> with graceful fallback (no broken-image icon)
// Returns null for unrecognized types.
function renderMagVisual(visual, accent) {
  if (!visual) return null;
  const { type, content = '', src = '', caption = '', primitive = '', data = {} } = visual;

  const centeredBox = {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', width: '100%', height: '100%',
    padding: '10px 14px', boxSizing: 'border-box',
  };
  const captionStyle = {
    color: 'rgba(255,255,255,0.5)', fontSize: '0.74rem', fontStyle: 'italic',
    textAlign: 'center', marginTop: 6, lineHeight: 1.4,
  };
  const vizLabel = txt => (
    <div style={{ fontSize: '0.68rem', color: accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
      {txt}
    </div>
  );

  // ── math-block ──────────────────────────────────────────────────────────────
  if (type === 'math-block') {
    return (
      <div style={centeredBox}>
        <pre style={{
          fontFamily: "'JetBrains Mono', 'Menlo', Consolas, 'Courier New', monospace",
          fontSize: '1.05rem',
          lineHeight: 1.75,
          color: 'rgba(255,255,255,0.92)',
          background: 'rgba(255,255,255,0.05)',
          border: `1px solid ${accent}44`,
          borderRadius: 10,
          padding: '14px 20px',
          whiteSpace: 'pre',
          overflowX: 'auto',
          margin: 0,
          maxWidth: '100%',
          boxSizing: 'border-box',
          textAlign: 'left',
        }}>
          {content}
        </pre>
        {caption && <div style={captionStyle}>{caption}</div>}
      </div>
    );
  }

  // ── illustration ────────────────────────────────────────────────────────────
  if (type === 'illustration') {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img
          src={src}
          alt={caption || ''}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        {caption && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '6px 14px', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textAlign: 'center',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.55))',
          }}>
            {caption}
          </div>
        )}
      </div>
    );
  }

  // ── diagram — 6 SVG primitives ──────────────────────────────────────────────
  if (type === 'diagram') {
    const svgWrap = {
      ...centeredBox, gap: 6,
      background: 'rgba(255,255,255,0.03)',
    };

    if (primitive === 'area-model') {
      const { parts = [], totalLabel = '' } = data;
      const totalWidth = parts.reduce((s, p) => s + (p.width || 0), 0) || 1;
      const SVGW = 260;
      const palette = ['#A78BFA', '#34D399', '#60A5FA', '#F59E0B'];
      let xCursor = 0;
      return (
        <div style={svgWrap}>
          {vizLabel('Area Model')}
          <svg width="100%" viewBox={`0 0 ${SVGW} 80`} style={{ maxWidth: 300 }}>
            {parts.map((p, i) => {
              const segW = Math.round((p.width / totalWidth) * SVGW);
              const x = xCursor; xCursor += segW;
              const col = palette[i % palette.length];
              return (
                <g key={i}>
                  <rect x={x} y={2} width={segW - 2} height={60} fill={`${col}33`} stroke={`${col}88`} strokeWidth={1.5} rx={3} />
                  <text x={x + (segW - 2) / 2} y={22} textAnchor="middle" fill="#fff" fontSize={11} fontWeight={700}>{p.topLabel}</text>
                  <text x={x + (segW - 2) / 2} y={40} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={9}>{p.sideLabel}</text>
                  <text x={x + (segW - 2) / 2} y={55} textAnchor="middle" fill={col} fontSize={11} fontWeight={700}>{p.product}</text>
                </g>
              );
            })}
            {totalLabel && <text x={SVGW / 2} y={76} textAnchor="middle" fill={accent} fontSize={10} fontWeight={700}>{totalLabel}</text>}
          </svg>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }

    if (primitive === 'number-line') {
      const { min = 0, max = 10, marked = [], labels: lbls = [] } = data;
      const range = max - min || 1;
      const toX = v => Math.round(((v - min) / range) * 240) + 20;
      return (
        <div style={svgWrap}>
          {vizLabel('Number Line')}
          <svg width="100%" viewBox="0 0 280 56" style={{ maxWidth: 320 }}>
            <line x1={20} y1={30} x2={260} y2={30} stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
            {[min, max].map((v, i) => (
              <g key={i}>
                <line x1={toX(v)} y1={22} x2={toX(v)} y2={38} stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                <text x={toX(v)} y={52} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={9}>{v}</text>
              </g>
            ))}
            {marked.map((v, i) => (
              <g key={i}>
                <circle cx={toX(v)} cy={30} r={5} fill={accent} />
                <text x={toX(v)} y={18} textAnchor="middle" fill={accent} fontSize={9} fontWeight={700}>{v}</text>
              </g>
            ))}
            {lbls.map((lbl, i) => (
              <text key={i} x={toX(lbl.value)} y={52} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize={8}>{lbl.label}</text>
            ))}
          </svg>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }

    if (primitive === 'fraction-bar') {
      const { numerator = 1, denominator = 4, compareNumerator, compareDenominator, label = '' } = data;
      const hasCompare = compareNumerator !== undefined && compareDenominator !== undefined;
      if (hasCompare) {
        const segW1 = 250 / (denominator || 1);
        const segW2 = 250 / (compareDenominator || 1);
        const compColor = '#60A5FA';
        return (
          <div style={svgWrap}>
            {vizLabel('Fraction Comparison')}
            <svg width="100%" viewBox="0 0 270 100" style={{ maxWidth: 300 }}>
              {Array.from({ length: denominator }).map((_, i) => (
                <rect key={`a-${i}`} x={10 + i * segW1} y={4} width={segW1 - 2} height={26}
                  fill={i < numerator ? `${accent}55` : 'rgba(255,255,255,0.06)'} stroke={`${accent}77`} strokeWidth={1} rx={2} />
              ))}
              <text x={135} y={42} textAnchor="middle" fill={accent} fontSize={10} fontWeight="600">{numerator}/{denominator}</text>
              {Array.from({ length: compareDenominator }).map((_, i) => (
                <rect key={`b-${i}`} x={10 + i * segW2} y={50} width={segW2 - 2} height={26}
                  fill={i < compareNumerator ? `${compColor}55` : 'rgba(255,255,255,0.06)'} stroke={`${compColor}77`} strokeWidth={1} rx={2} />
              ))}
              <text x={135} y={90} textAnchor="middle" fill={compColor} fontSize={10} fontWeight="600">{compareNumerator}/{compareDenominator}</text>
            </svg>
            {caption && <div style={captionStyle}>{caption}</div>}
          </div>
        );
      }
      const segW = 250 / (denominator || 1);
      return (
        <div style={svgWrap}>
          {vizLabel('Fraction Bar')}
          <svg width="100%" viewBox="0 0 270 46" style={{ maxWidth: 300 }}>
            {Array.from({ length: denominator }).map((_, i) => (
              <rect key={i} x={10 + i * segW} y={6} width={segW - 2} height={26}
                fill={i < numerator ? `${accent}55` : 'rgba(255,255,255,0.06)'} stroke={`${accent}77`} strokeWidth={1} rx={2} />
            ))}
            <text x={135} y={42} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={10}>{label || `${numerator}/${denominator}`}</text>
          </svg>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }

    if (primitive === 'array') {
      const { rows = 3, cols = 4, highlightRows = 0 } = data;
      const D = 11, G = 5;
      const W = cols * (D + G) + 10, H = rows * (D + G) + 10;
      return (
        <div style={svgWrap}>
          {vizLabel(`Array — ${rows} × ${cols}`)}
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: Math.min(W * 2, 260) }}>
            {Array.from({ length: rows }).map((_, ri) =>
              Array.from({ length: cols }).map((_, ci) => (
                <circle key={`${ri}-${ci}`}
                  cx={5 + ci * (D + G) + D / 2} cy={5 + ri * (D + G) + D / 2} r={D / 2}
                  fill={ri < highlightRows ? accent : `${accent}44`}
                />
              ))
            )}
          </svg>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>{rows} rows × {cols} cols = {rows * cols}</div>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }

    if (primitive === 'place-value-blocks') {
      const { thousands = 0, hundreds = 0, tens = 0, ones = 0 } = data;
      const blocks = [
        { label: 'Thousands', count: thousands, color: '#F59E0B' },
        { label: 'Hundreds',  count: hundreds,  color: '#A78BFA' },
        { label: 'Tens',      count: tens,       color: '#34D399' },
        { label: 'Ones',      count: ones,       color: '#60A5FA' },
      ].filter(b => b.count > 0);
      return (
        <div style={svgWrap}>
          {vizLabel('Place Value')}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            {blocks.map(b => (
              <div key={b.label} style={{ textAlign: 'center' }}>
                <div style={{ color: b.color, fontWeight: 800, fontSize: '1.4rem' }}>{b.count}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', marginTop: 2 }}>{b.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', maxWidth: 48, marginTop: 4 }}>
                  {Array.from({ length: Math.min(b.count, 9) }).map((_, i) => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: 2, background: b.color, opacity: 0.8 }} />
                  ))}
                  {b.count > 9 && <span style={{ fontSize: '0.6rem', color: b.color }}>×{b.count}</span>}
                </div>
              </div>
            ))}
          </div>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }

    if (primitive === 'coordinate-grid') {
      const { xMax = 10, yMax = 10, points = [], lines = [] } = data;
      const PAD_L = 28, PAD_B = 20, PAD_T = 6, PAD_R = 6;
      const VW = 240, VH = 240;
      const plotX0 = PAD_L, plotY0 = PAD_T, plotX1 = VW - PAD_R, plotY1 = VH - PAD_B;
      const plotW = plotX1 - plotX0, plotH = plotY1 - plotY0;
      const toSX = x => plotX0 + (x / (xMax || 1)) * plotW;
      const toSY = y => plotY1 - (y / (yMax || 1)) * plotH;
      const xStep = xMax > 8 ? 2 : 1, yStep = yMax > 8 ? 2 : 1;
      return (
        <div style={svgWrap}>
          {vizLabel('Coordinate Grid')}
          <svg width="100%" viewBox={`0 0 ${VW} ${VH}`} style={{ maxWidth: 260 }}>
            {Array.from({ length: xMax + 1 }, (_, i) => (
              <line key={`vg${i}`} x1={toSX(i)} y1={plotY0} x2={toSX(i)} y2={plotY1}
                stroke={i === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.10)'}
                strokeWidth={i === 0 ? 1.5 : 0.8} />
            ))}
            {Array.from({ length: yMax + 1 }, (_, j) => (
              <line key={`hg${j}`} x1={plotX0} y1={toSY(j)} x2={plotX1} y2={toSY(j)}
                stroke={j === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.10)'}
                strokeWidth={j === 0 ? 1.5 : 0.8} />
            ))}
            {Array.from({ length: xMax + 1 }, (_, i) => i % xStep === 0 && (
              <text key={`xl${i}`} x={toSX(i)} y={plotY1 + 13} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={7}>{i}</text>
            ))}
            {Array.from({ length: yMax + 1 }, (_, j) => j % yStep === 0 && (
              <text key={`yl${j}`} x={plotX0 - 4} y={toSY(j) + 3} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize={7}>{j}</text>
            ))}
            {lines.map((seg, i) => {
              const a = points[seg.from], b = points[seg.to];
              if (!a || !b) return null;
              return <line key={`ln${i}`} x1={toSX(a.x)} y1={toSY(a.y)} x2={toSX(b.x)} y2={toSY(b.y)} stroke={`${accent}99`} strokeWidth={1.5} />;
            })}
            {points.map((pt, i) => (
              <g key={`pt${i}`}>
                <circle cx={toSX(pt.x)} cy={toSY(pt.y)} r={4} fill={accent} />
                {pt.label && <text x={toSX(pt.x) + 7} y={toSY(pt.y) - 5} fill={accent} fontSize={9} fontWeight={700}>{pt.label}</text>}
              </g>
            ))}
          </svg>
          {caption && <div style={captionStyle}>{caption}</div>}
        </div>
      );
    }
  }

  return null;
}

// Render a plain string with per-word karaoke highlighting.
// wordOffset: global word index at which this text starts (headline words come first).
function renderKaraokeSpans(text, karaokeIdx, accent, wordOffset = 0) {
  const chunks = text.split(/(\s+)/);
  let wordCount = wordOffset;
  return chunks.map((chunk, i) => {
    if (!chunk) return null;
    if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const thisIdx  = wordCount++;
    const isActive = thisIdx === karaokeIdx;
    return (
      <span key={i} data-karaoke-active={isActive || undefined} style={{
        color:      isActive ? accent : 'inherit',
        textShadow: isActive ? `0 0 14px ${accent}99` : 'none',
        fontWeight: isActive ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>
        {chunk}
      </span>
    );
  });
}

function renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap, showVocabHint, headlineWordCount = 0) {
  // Build vocabMap that handles multi-word phrases by indexing every component word.
  // "cellular respiration" → both "cellular" and "respiration" point to the full entry.
  // Longer/more specific words win ties (last-write wins in iteration order, so sort
  // single-word entries after multi-word to give multi-word entries priority).
  const vocabMap = new Map();
  const sortedVocab = [...(vocab || [])].sort((a, b) => {
    const wa = a.word.trim().split(/\s+/).length;
    const wb = b.word.trim().split(/\s+/).length;
    return wb - wa; // multi-word first so single-word entries don't clobber them
  });
  for (const v of sortedVocab) {
    const words = v.word.toLowerCase().replace(/[^a-z\s]/g, '').trim().split(/\s+/);
    // Warn about phrases that are too long to anchor reliably
    if (words.length > 3) {
      console.warn(`[vocab] phrase too long to highlight reliably (${words.length} words): "${v.word}"`);
    }
    for (const w of words) {
      if (w && !vocabMap.has(w)) vocabMap.set(w, v);
    }
  }
  let wordCount = headlineWordCount; // offset so paragraph indices follow headline
  let firstVocabPulsed = false; // only the very first vocab word gets the tutorial pulse

  return paragraphs.map((para, pIdx) => {
    // Math blocks: paragraphs containing literal newlines (stacked column notation).
    // Render as <pre> with monospace font so spacing is preserved.
    // Still count "words" so karaokeIdx stays aligned for subsequent paragraphs.
    if (para.includes('\n')) {
      para.split(/(\s+)/).forEach(chunk => {
        if (chunk && !/^\s+$/.test(chunk)) wordCount++;
      });
      return (
        <pre key={pIdx} style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '0.92rem',
          lineHeight: 1.65,
          color: 'rgba(255,255,255,0.9)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 8,
          padding: '10px 14px',
          margin: '6px 0 14px',
          whiteSpace: 'pre',
          overflowX: 'auto',
          boxSizing: 'border-box',
        }}>
          {para}
        </pre>
      );
    }

    const chunks = para.split(/(\s+)/);
    const spans = chunks.map((chunk, cIdx) => {
      if (!chunk) return null;
      if (/^\s+$/.test(chunk)) return <span key={cIdx}>{chunk}</span>;

      const thisIdx  = wordCount++;
      const isActive = thisIdx === karaokeIdx;
      const cleanKey = chunk.toLowerCase().replace(/[^a-z]/g, '');
      const vocabEntry = vocabMap.get(cleanKey);

      // First vocab word gets a pulsing glow during the one-time tutorial
      const isTutorialTarget = vocabEntry && showVocabHint && !firstVocabPulsed;
      if (isTutorialTarget) firstVocabPulsed = true;

      return (
        <span
          key={cIdx}
          data-karaoke-active={isActive || undefined}
          className={isTutorialTarget ? 'vocab-tutorial-pulse' : undefined}
          onClick={vocabEntry ? () => onVocabTap(vocabEntry) : undefined}
          style={{
            color:           isActive ? accent : (vocabEntry ? '#60A5FA' : 'inherit'),
            textShadow:      isActive ? `0 0 14px ${accent}99` : 'none',
            textDecoration:  vocabEntry && !isActive ? 'underline dotted' : 'none',
            textDecorationColor: '#60A5FA',
            cursor:          vocabEntry ? 'pointer' : 'default',
            fontWeight:      isActive ? 700 : (isTutorialTarget ? 700 : 'inherit'),
            transition:      'color 0.08s ease, text-shadow 0.08s ease',
          }}
        >
          {chunk}
        </span>
      );
    });

    return (
      <p key={pIdx} className="mag-para" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 16, fontSize: '1.02rem' }}>
        {spans}
      </p>
    );
  });
}

export default function MagazineScreen({
  screen, guideAvatar, speaking, loadingAudio, audioPaused, karaokeWords, karaokeIdx,
  accent, onReplay, onPauseResume, onVocabTap, showVocabHint, onDismissVocabHint,
  headlineWordCount = 0,
}) {
  const { section, totalSections, headline, paragraphs = [], image, imageCaption, visual, vocab = [] } = screen;
  const [imageError, setImageError] = useState(false);

  // ── Scroll hint state (DAY 2.11) ─────────────────────────────────────────────
  // Component re-mounts per screen (key={screenIdx} in ExplorerLessonPlayer),
  // so false resets automatically on every screen transition.
  const [scrollHintDismissed, setScrollHintDismissed] = useState(false);

  // Ref for the text column — used for karaoke auto-scroll and scroll-hint dismissal.
  // Text column is always the scrollable region (pinned image above, scrollable text below).
  const textColRef = useRef(null);

  useEffect(() => {
    // Log on mount only when hint will be visible (short viewport + vocab exists)
    if (vocab.length > 0 && window.innerHeight < 700) {
      console.log(`[SCROLL-HINT] Showing — vocab buttons below fold on viewport ${window.innerHeight}px`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Karaoke auto-scroll: keep the currently-highlighted word visible in the text region.
  useEffect(() => {
    const container = textColRef.current;
    if (!container || karaokeIdx == null || karaokeIdx < 0) return;
    const activeEl = container.querySelector('[data-karaoke-active]');
    if (!activeEl) return;
    const elRect = activeEl.getBoundingClientRect();
    const cRect  = container.getBoundingClientRect();
    if (elRect.bottom > cRect.bottom - 28 || elRect.top < cRect.top + 28) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [karaokeIdx]);

  const handleScroll = e => {
    if (!scrollHintDismissed && e.currentTarget.scrollTop > 24) {
      console.log('[SCROLL-HINT] User scrolled, hint dismissed');
      setScrollHintDismissed(true);
    }
  };

  // Show hint when vocab exists and not yet dismissed.
  // CSS (.mag-scroll-hint) hides it on viewports ≥ 700px (iPad portrait/landscape).
  const showScrollHint = vocab.length > 0 && !scrollHintDismissed;

  return (
    <div className="magazine-outer">
      <style>{`
        @keyframes mag-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes mag-load-pulse {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.88); }
        }
        /* Only show scroll hint on short viewports (iPhone portrait).
           Hidden on iPad/tablet where vocab usually fits without scrolling. */
        .mag-scroll-hint { display: flex; }
        @media (min-height: 700px) {
          .mag-scroll-hint { display: none !important; }
        }
      `}</style>

      {/* Image/visual column — full-width on mobile, left-side on iPad landscape */}
      {/* Collapsed to minimal height when there is no displayable content */}
      <div
        className="magazine-image-col"
        style={!visual && (!image || imageError) ? { minHeight: 52, height: 52 } : undefined}
      >
        {/* Prefer structured `visual` field over legacy `image` */}
        {visual
          ? renderMagVisual(visual, accent)
          : (image && !imageError) && (
            <img
              src={image}
              alt={headline}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
              onError={() => setImageError(true)}
            />
          )
        }
        {/* Pause / Resume / Replay button */}
        <button
          className="mag-replay-btn"
          onClick={audioPaused || speaking ? onPauseResume : onReplay}
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 38, height: 38, borderRadius: '50%', border: 'none',
            background: (speaking || loadingAudio || audioPaused) ? accent : 'rgba(0,0,0,0.5)',
            color:      (speaking || loadingAudio || audioPaused) ? '#000' : 'rgba(255,255,255,0.8)',
            fontSize: '1rem', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation', transition: 'background 0.2s',
            animation: loadingAudio ? 'mag-load-pulse 0.8s ease-in-out infinite' : 'none',
          }}
        >
          {audioPaused ? '▶' : (speaking || loadingAudio) ? '⏸' : '▶'}
        </button>
        {/* imageCaption is an internal image description — intentionally not rendered */}
      </div>

      {/* Text column — below image on mobile/tablet (scrollable), right-side on iPad landscape */}
      <div ref={textColRef} className="magazine-text-col" onScroll={handleScroll}>
        {/* Section badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: `${accent}22`, border: `1.5px solid ${accent}55`,
          borderRadius: 20, padding: '4px 14px', marginBottom: 14,
          fontSize: '0.75rem', fontWeight: 700, color: accent, letterSpacing: '0.05em',
        }}>
          Section {section} of {totalSections}
        </div>

        {/* Headline — with per-word karaoke at indices 0..headlineWordCount-1 */}
        <h2 className="mag-headline" style={{
          fontSize: '1.45rem', fontWeight: 800, color: '#fff',
          marginBottom: 18, lineHeight: 1.25, letterSpacing: '-0.02em',
          marginTop: 0,
        }}>
          {renderKaraokeSpans(headline || '', karaokeIdx, accent, 0)}
        </h2>

        {/* Paragraphs with karaoke — word indices start at headlineWordCount */}
        <div>
          {renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap, showVocabHint, headlineWordCount)}
        </div>

        {/* Vocab chips */}
        {vocab.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
              Tap to explore
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {vocab.map((v, i) => (
                <button
                  key={i}
                  onClick={() => onVocabTap(v)}
                  style={{
                    padding: '6px 14px', borderRadius: 20,
                    border: '1.5px solid #60A5FA55', background: '#60A5FA11',
                    color: '#60A5FA', fontSize: '0.85rem', fontWeight: 600,
                    cursor: 'pointer', touchAction: 'manipulation',
                  }}
                >
                  {v.word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Vocab hint — inline, below chips */}
        {showVocabHint && vocab.length > 0 && (
          <div
            onClick={onDismissVocabHint}
            style={{
              marginTop: 16, padding: '12px 16px',
              background: `${accent}18`, border: `1.5px solid ${accent}66`,
              borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer', animation: 'hint-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
              touchAction: 'manipulation',
            }}
          >
            <span style={{ fontSize: '1.3rem', animation: 'hint-bounce 1.2s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }}>
              ☝️
            </span>
            <span style={{ color: accent, fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.4 }}>
              Tap any underlined word above to hear what it means!
            </span>
          </div>
        )}

        <div style={{ height: 12 }} />
      </div>

      {/* Scroll hint chevron — fixed at viewport bottom, iPhone-only (CSS hides on ≥700px) */}
      {showScrollHint && (
        <div
          className="mag-scroll-hint"
          style={{
            position:       'fixed',
            bottom:         82,   // 72px nav bar + 10px gap
            left:           '50%',
            transform:      'translateX(-50%)',
            zIndex:         10,
            pointerEvents:  'none', // let touches pass through to scroll
          }}
        >
          <div style={{
            width:          32,
            height:         32,
            borderRadius:   '50%',
            background:     `${accent}22`,
            border:         `1.5px solid ${accent}77`,
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            animation:      'mag-scroll-bounce 1.4s ease-in-out infinite',
            boxShadow:      `0 2px 12px ${accent}33`,
          }}>
            {/* Downward chevron — SVG for crisp rendering at small size */}
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6.5 7L12 1.5" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
