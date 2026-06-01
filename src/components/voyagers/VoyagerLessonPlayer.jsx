// ============================================================
// VoyagerLessonPlayer — Voyagers (ages 11-12) lesson engine
// Mirrors UpperExplorerLessonPlayer structure with additions:
//   A) perspectives screen — multiple thinker positions, no correct answer
//   B) identity-hook screen — free-text response saved to localStorage
//   C) routes at /voyager/:subjectId/:lessonId
// VOY_DATA keys match URL subjectId exactly (canonical IDs from constants.js).
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import { getAvatar } from '../../lib/constants';
import { getVoiceForGuide, getModelForGuide } from '../../data/guideVoices';
import { unlockAudio, sfx } from '../games/sounds';

import ExplorerWelcomeScreen from '../explorers/ExplorerWelcomeScreen';
import MagazineScreen        from '../explorers/MagazineScreen';
import StoryBeatScreen       from '../explorers/StoryBeatScreen';
import MasteryQuiz           from '../explorers/MasteryQuiz';
import RealWorldConnection   from '../explorers/RealWorldConnection';
import ExplorerCelebration   from '../explorers/ExplorerCelebration';
import ExplorerNavigation    from '../explorers/ExplorerNavigation';
import VocabPopup            from '../explorers/VocabPopup';

// ── Voyager interaction components ────────────────────────────────────────
import ArgumentBuilder    from './ArgumentBuilder';
import CaseStudy          from './CaseStudy';
import SourceEvaluation   from './SourceEvaluation';
import Annotate           from './Annotate';
// ── Voyager game components (Cosmos band onwards) ─────────────────────────
import MatchingGame       from './MatchingGame';
import SequenceGame       from './SequenceGame';
import InvestigationGame  from './InvestigationGame';
import BranchingDecision  from './BranchingDecision';
import { buildSpacedQuiz } from './SpacedRetrievalEngine';

// ── Voyager lesson data ────────────────────────────────────────────────────
import INNERWORLD_VOY_L01 from '../../data/innerworld_voyager_l01_screens';
import INNERWORLD_VOY_L02 from '../../data/innerworld_voyager_l02_screens';
import INNERWORLD_VOY_L03 from '../../data/innerworld_voyager_l03_screens';
import INNERWORLD_VOY_L04 from '../../data/innerworld_voyager_l04_screens';
import INNERWORLD_VOY_L05 from '../../data/innerworld_voyager_l05_screens';
import INNERWORLD_VOY_L06 from '../../data/innerworld_voyager_l06_screens';
import INNERWORLD_VOY_L07 from '../../data/innerworld_voyager_l07_screens';
import INNERWORLD_VOY_L08 from '../../data/innerworld_voyager_l08_screens';
import INNERWORLD_VOY_L09 from '../../data/innerworld_voyager_l09_screens';
import INNERWORLD_VOY_L10 from '../../data/innerworld_voyager_l10_screens';
import INNERWORLD_VOY_L11 from '../../data/innerworld_voyager_l11_screens';
import INNERWORLD_VOY_L15 from '../../data/innerworld_voyager_l15_screens';
import INNERWORLD_VOY_L16 from '../../data/innerworld_voyager_l16_screens';
import INNERWORLD_VOY_L17 from '../../data/innerworld_voyager_l17_screens';
import INNERWORLD_VOY_L18 from '../../data/innerworld_voyager_l18_screens';
import INNERWORLD_VOY_L19 from '../../data/innerworld_voyager_l19_screens';
import INNERWORLD_VOY_L20 from '../../data/innerworld_voyager_l20_screens';
import MONEYBUSINESS_VOY_L01 from '../../data/moneybusiness_voyager_l01_screens';
import MONEYBUSINESS_VOY_L02 from '../../data/moneybusiness_voyager_l02_screens';
import MONEYBUSINESS_VOY_L03 from '../../data/moneybusiness_voyager_l03_screens';
import MONEYBUSINESS_VOY_L04 from '../../data/moneybusiness_voyager_l04_screens';
import MONEYBUSINESS_VOY_L05 from '../../data/moneybusiness_voyager_l05_screens';
import MONEYBUSINESS_VOY_L06 from '../../data/moneybusiness_voyager_l06_screens';
import MONEYBUSINESS_VOY_L07 from '../../data/moneybusiness_voyager_l07_screens';
import MONEYBUSINESS_VOY_L08 from '../../data/moneybusiness_voyager_l08_screens';
import MONEYBUSINESS_VOY_L09 from '../../data/moneybusiness_voyager_l09_screens';
import MONEYBUSINESS_VOY_L10 from '../../data/moneybusiness_voyager_l10_screens';
import MONEYBUSINESS_VOY_L11 from '../../data/moneybusiness_voyager_l11_screens';
import MONEYBUSINESS_VOY_L12 from '../../data/moneybusiness_voyager_l12_screens';
import MONEYBUSINESS_VOY_L13 from '../../data/moneybusiness_voyager_l13_screens';
import MONEYBUSINESS_VOY_L14 from '../../data/moneybusiness_voyager_l14_screens';
import MONEYBUSINESS_VOY_L15 from '../../data/moneybusiness_voyager_l15_screens';
import MONEYBUSINESS_VOY_L16 from '../../data/moneybusiness_voyager_l16_screens';
import MONEYBUSINESS_VOY_L17 from '../../data/moneybusiness_voyager_l17_screens';
import MONEYBUSINESS_VOY_L18 from '../../data/moneybusiness_voyager_l18_screens';
import MONEYBUSINESS_VOY_L19 from '../../data/moneybusiness_voyager_l19_screens';
import MONEYBUSINESS_VOY_L20 from '../../data/moneybusiness_voyager_l20_screens';
import COSMOS_VOY_L01 from '../../data/cosmos_voyager_l01_screens';
import COSMOS_VOY_L02 from '../../data/cosmos_voyager_l02_screens';
import COSMOS_VOY_L03 from '../../data/cosmos_voyager_l03_screens';
import COSMOS_VOY_L04 from '../../data/cosmos_voyager_l04_screens';
import COSMOS_VOY_L05 from '../../data/cosmos_voyager_l05_screens';
import COSMOS_VOY_L06 from '../../data/cosmos_voyager_l06_screens';
import COSMOS_VOY_L07 from '../../data/cosmos_voyager_l07_screens';
import COSMOS_VOY_L08 from '../../data/cosmos_voyager_l08_screens';
import COSMOS_VOY_L09 from '../../data/cosmos_voyager_l09_screens';
import COSMOS_VOY_L10 from '../../data/cosmos_voyager_l10_screens';
import COSMOS_VOY_L11 from '../../data/cosmos_voyager_l11_screens';

// ── Helpers ────────────────────────────────────────────────────────────────
function getScreenText(screen, childName) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  switch (screen.type) {
    case 'welcome':            return r(screen.audioPrompt || screen.guideText || screen.bodyText || screen.heading || '');
    case 'magazine':           return r(screen.audioPrompt || (screen.paragraphs?.join(' ')) || '');
    case 'story-beat':         return r(screen.audioPrompt || screen.paragraph || '');
    case 'reflection':         return r(screen.guideText   || screen.intro || screen.headline || '');
    case 'real-world':         return r(screen.guideText   || screen.guideContext || '');
    case 'perspectives':       return r(screen.audioPrompt || screen.intro || screen.question || screen.headline || '');
    case 'identity-hook':      return r(screen.audioPrompt || screen.headline || screen.prompt || screen.question || '');
    case 'celebration':        return r(screen.guideText   || screen.headline || '');
    case 'argument-builder':   return r(screen.intro       || screen.headline || '');
    case 'case-study':         return r(screen.intro       || screen.headline || '');
    case 'source-evaluation':  return r(screen.intro       || screen.rankingPrompt || screen.topic || '');
    case 'annotate':           return r(screen.intro       || screen.headline || '');
    // ── Game screens (Cosmos band onwards) ──────────────────────────────────
    case 'matching':           return r(screen.intro       || screen.headline || '');
    case 'sequence':           return r(screen.intro       || screen.headline || '');
    case 'investigation':      return r(screen.intro       || screen.headline || '');
    case 'branching-decision': return r(screen.intro       || screen.headline || '');
    default:                   return '';
  }
}

function getGrade(acc) {
  if (acc >= 0.95) return 'A+';
  if (acc >= 0.90) return 'A';
  if (acc >= 0.85) return 'A-';
  if (acc >= 0.80) return 'B+';
  if (acc >= 0.75) return 'B';
  if (acc >= 0.70) return 'B-';
  if (acc >= 0.65) return 'C+';
  if (acc >= 0.60) return 'C';
  return 'D';
}

function KaraokeText({ text, karaokeWords, karaokeIdx, color }) {
  if (!karaokeWords || karaokeWords.length === 0) return <span>{text}</span>;
  return (
    <span>
      {karaokeWords.map((w, i) => (
        <span
          key={i}
          style={{
            color:      i <= karaokeIdx ? color : 'inherit',
            fontWeight: i === karaokeIdx ? 700 : 'inherit',
            transition: 'color 0.1s',
          }}
        >
          {w.text}{' '}
        </span>
      ))}
    </span>
  );
}

// ── Perspectives Screen ────────────────────────────────────────────────────
// Shows a question + 2-3 thinker position cards + reflection prompt.
// No correct answer — learner explores all positions, then continues.
function PerspectivesScreen({ screen, guideAvatar, accent, childName, karaokeWords, karaokeIdx, speaking, onComplete }) {
  const [expanded, setExpanded] = useState(null);
  const [viewed, setViewed]     = useState(new Set());
  const positions = screen.positions || [];

  function handleCardClick(idx) {
    setExpanded(prev => prev === idx ? null : idx);
    setViewed(prev => new Set([...prev, idx]));
  }

  const allViewed = viewed.size >= Math.max(1, positions.length);
  const r = t => (t || '').replace(/\{name\}/g, childName);

  return (
    <div className="voy-reading-shell" style={{ height: '100%', overflowY: 'auto', padding: '20px 18px 28px', display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Guide avatar + question */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        {guideAvatar && (
          <img src={guideAvatar.image} alt={guideAvatar.name} style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, border: `2px solid ${accent}55`, boxShadow: speaking ? `0 0 16px ${accent}88` : 'none', transition: 'box-shadow 0.3s' }} />
        )}
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '14px 16px', flex: 1 }}>
          <p style={{ color: '#e2d9f3', fontSize: '1rem', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
            <KaraokeText text={r(screen.question || '')} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
          </p>
        </div>
      </div>

      {/* Thinker position cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {positions.map((pos, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(idx)}
            style={{
              background:  expanded === idx ? `${accent}16` : 'rgba(255,255,255,0.05)',
              border:      `1.5px solid ${expanded === idx ? accent + '66' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 14,
              padding:     '14px 16px',
              cursor:      'pointer',
              transition:  'all 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: expanded === idx ? 12 : 0 }}>
              <span style={{ color: accent, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.02em' }}>
                {pos.thinker || pos.thinker_name}
                {viewed.has(idx) && <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400, marginLeft: 8, fontSize: '0.75rem' }}>✓</span>}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>{expanded === idx ? '▲' : '▼'}</span>
            </div>
            {expanded === idx && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {(pos.positionLabel) && <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', margin: '0 0 4px', textTransform: 'uppercase' }}>{pos.positionLabel}</p>}
                <p style={{ color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{pos.summary || pos.position_summary || pos.statement}</p>
                {(pos.strongestArgument || pos.strongest_argument) && (
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '10px 12px' }}>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.05em', margin: '0 0 5px', textTransform: 'uppercase' }}>Strongest argument</p>
                    <p style={{ color: '#a8d5ba', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>{pos.strongestArgument || pos.strongest_argument}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reflection prompt */}
      {screen.reflectionPrompt && (
        <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.05em', margin: '0 0 6px', textTransform: 'uppercase' }}>Reflect</p>
          <p style={{ color: '#e2d9f3', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{r(screen.reflectionPrompt)}</p>
        </div>
      )}

      {/* Continue */}
      <button
        onClick={onComplete}
        style={{
          padding:      '14px 28px',
          background:   allViewed ? accent : 'rgba(255,255,255,0.08)',
          color:        allViewed ? '#fff' : 'rgba(255,255,255,0.3)',
          fontWeight:   700,
          fontSize:     '1rem',
          border:       'none',
          borderRadius: 12,
          cursor:       allViewed ? 'pointer' : 'default',
          transition:   'all 0.2s',
          boxShadow:    allViewed ? `0 0 18px ${accent}44` : 'none',
        }}
      >
        {allViewed
          ? 'Continue →'
          : `Open ${positions.length - viewed.size} more position${positions.length - viewed.size !== 1 ? 's' : ''} to continue`
        }
      </button>
    </div>
  );
}

// ── Identity Hook Screen ───────────────────────────────────────────────────
// Free-text response saved to localStorage. Supports both old (question) and
// new (headline + prompt + placeholder + examples + saveKey) field formats.
function IdentityHookScreen({ screen, guideAvatar, accent, childName, speaking, onComplete }) {
  const [value, setValue] = useState('');
  const [saved,  setSaved]  = useState(false);
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const headline    = r(screen.headline || screen.question || '');
  const subPrompt   = r(screen.prompt || '');
  const placeholder = screen.placeholder || 'Write your response here…';
  const examples    = screen.examples || [];
  const saveKey     = screen.saveKey || 'identity_responses';

  function handleSave() {
    if (!value.trim()) return;
    try {
      // Save to lesson-specific key (if provided)
      if (screen.saveKey) {
        const existing = JSON.parse(localStorage.getItem(screen.saveKey) || '[]');
        existing.push({ response: value.trim(), savedAt: new Date().toISOString() });
        localStorage.setItem(screen.saveKey, JSON.stringify(existing));
      }
      // Always also save to global identity_responses array
      const global = JSON.parse(localStorage.getItem('identity_responses') || '[]');
      global.push({
        lessonId:  saveKey,
        question:  headline,
        response:  value.trim(),
        savedAt:   new Date().toISOString(),
      });
      localStorage.setItem('identity_responses', JSON.stringify(global));
    } catch { /* storage unavailable */ }
    setSaved(true);
    setTimeout(onComplete, 700);
  }

  return (
    <div className="voy-reading-shell" style={{ height: '100%', overflowY: 'auto', padding: '28px 18px', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
      {guideAvatar && (
        <img src={guideAvatar.image} alt={guideAvatar.name} style={{ width: 56, height: 56, borderRadius: '50%', border: `2.5px solid ${accent}66`, boxShadow: speaking ? `0 0 20px ${accent}88` : 'none', transition: 'box-shadow 0.3s' }} />
      )}
      {headline && (
        <p style={{ color: '#e2d9f3', fontSize: '1.15rem', lineHeight: 1.55, margin: 0, textAlign: 'center', fontWeight: 700, maxWidth: 440 }}>
          {headline}
        </p>
      )}
      {subPrompt && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, textAlign: 'center', maxWidth: 420 }}>
          {subPrompt}
        </p>
      )}
      {examples.length > 0 && (
        <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => setValue(ex)}
              style={{
                textAlign:    'left',
                padding:      '10px 14px',
                background:   value === ex ? `${accent}22` : 'rgba(255,255,255,0.05)',
                border:       `1.5px solid ${value === ex ? accent + '66' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 10,
                color:        'rgba(255,255,255,0.7)',
                fontSize:     '0.88rem',
                lineHeight:   1.5,
                cursor:       'pointer',
                fontStyle:    'italic',
                transition:   'all 0.15s',
                fontFamily:   'inherit',
              }}
            >
              {ex}
            </button>
          ))}
        </div>
      )}
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        rows={4}
        style={{
          width:        '100%',
          maxWidth:     480,
          padding:      '14px 16px',
          background:   'rgba(255,255,255,0.06)',
          border:       `1.5px solid ${value ? accent + '66' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: 12,
          color:        '#fff',
          fontSize:     '1rem',
          lineHeight:   1.6,
          resize:       'vertical',
          outline:      'none',
          fontFamily:   'inherit',
          transition:   'border-color 0.2s',
          boxSizing:    'border-box',
        }}
      />
      <button
        onClick={handleSave}
        disabled={!value.trim()}
        style={{
          padding:      '14px 36px',
          background:   value.trim() ? accent : 'rgba(255,255,255,0.08)',
          color:        value.trim() ? '#fff' : 'rgba(255,255,255,0.3)',
          fontWeight:   700,
          fontSize:     '1rem',
          border:       'none',
          borderRadius: 12,
          cursor:       value.trim() ? 'pointer' : 'default',
          boxShadow:    value.trim() ? `0 0 18px ${accent}44` : 'none',
          transition:   'all 0.2s',
        }}
      >
        {saved ? 'Saved ✓' : 'Save & Continue →'}
      </button>
    </div>
  );
}

// ── Reflection Screen ──────────────────────────────────────────────────────
// Supports both old (single screen.prompt) and new (screen.prompts[] array) formats.
// Bug fixes: sticky Continue button (never buried), prompt-tap fires Sage audio.
function ReflectionScreen({ screen, guideAvatar, accent, childName, karaokeWords, karaokeIdx, speaking, onSpeak, onComplete }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [value, setValue] = useState('');
  const r = t => (t || '').replace(/\{name\}/g, childName);

  // Multi-prompt format: screen.prompts is an array of { id, category, prompt }
  const multiPrompts = Array.isArray(screen.prompts) && screen.prompts.length > 0 ? screen.prompts : null;

  function handlePromptTap(idx, promptText) {
    const isDeselecting = selectedIdx === idx;
    setSelectedIdx(isDeselecting ? null : idx);
    setValue('');
    // Speak the prompt when selecting (not deselecting)
    if (!isDeselecting && onSpeak) onSpeak(r(promptText));
  }

  return (
    // padding-bottom: 0 — bottom space is owned by the sticky button footer
    <div className="voy-reading-shell" style={{ height: '100%', overflowY: 'auto', padding: '24px 18px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Headline */}
      {screen.headline && (
        <p style={{ color: '#e2d9f3', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{r(screen.headline)}</p>
      )}

      {/* Guide bubble (legacy guideText) */}
      {screen.guideText && (
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          {guideAvatar && (
            <img src={guideAvatar.image} alt={guideAvatar.name} style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, border: `2px solid ${accent}44`, boxShadow: speaking ? `0 0 16px ${accent}88` : 'none', transition: 'box-shadow 0.3s' }} />
          )}
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: '14px 16px', flex: 1 }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
              <KaraokeText text={r(screen.guideText)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
            </p>
          </div>
        </div>
      )}

      {/* Intro text (multi-prompt format) */}
      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{r(screen.intro)}</p>
      )}

      {/* Single prompt (legacy) */}
      {!multiPrompts && screen.prompt && (
        <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
          <p style={{ color: '#e2d9f3', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>{r(screen.prompt)}</p>
        </div>
      )}

      {/* Multi-prompt list — tapping selects AND reads the prompt aloud */}
      {multiPrompts && multiPrompts.map((p, idx) => (
        <div
          key={p.id || idx}
          onClick={() => handlePromptTap(idx, p.prompt)}
          style={{
            background:   selectedIdx === idx ? `${accent}16` : 'rgba(255,255,255,0.04)',
            border:       `1.5px solid ${selectedIdx === idx ? accent + '55' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: 14,
            padding:      '12px 16px',
            cursor:       'pointer',
            transition:   'all 0.18s ease',
          }}
        >
          {p.category && (
            <p style={{ color: accent, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 5px' }}>{p.category}</p>
          )}
          <p style={{ color: selectedIdx === idx ? '#e2d9f3' : 'rgba(255,255,255,0.7)', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>{p.prompt}</p>
        </div>
      ))}

      {/* Textarea — shown when a prompt is selected (multi) or always (legacy) */}
      {(!multiPrompts || selectedIdx !== null) && (
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={screen.placeholder || 'Write your reflection here…'}
          rows={4}
          style={{
            width:        '100%',
            padding:      '14px 16px',
            background:   'rgba(255,255,255,0.06)',
            border:       `1.5px solid ${value ? accent + '66' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: 12,
            color:        '#fff',
            fontSize:     '0.98rem',
            lineHeight:   1.6,
            resize:       'vertical',
            outline:      'none',
            fontFamily:   'inherit',
            boxSizing:    'border-box',
            marginBottom: 8,
          }}
        />
      )}

      {/* Sticky Continue button — always visible at the bottom of the scroll area.
          Gradient fade-in masks the content scrolling beneath it on iOS/desktop.   */}
      <div style={{
        position:   'sticky',
        bottom:     0,
        marginTop:  'auto',
        paddingTop: 20,
        paddingBottom: 20,
        background: `linear-gradient(to bottom, transparent, #0f172a 36%)`,
      }}>
        <button
          onClick={onComplete}
          style={{
            width: '100%', padding: '14px 28px', background: accent, color: '#fff',
            fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12,
            cursor: 'pointer', boxShadow: `0 0 18px ${accent}44`,
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// ── VOY_DATA ───────────────────────────────────────────────────────────────
// Keys are URL subjectId strings (match constants.js ORIGINALS ids exactly).
// subjectId inside each entry is the lesson-ID prefix (iw, cs, mb, etc.).
// Add a new entry for each subject as its lesson files are authored.
const VOY_DATA = {
  'inner-world': {
    ageBand:   'voyagers',
    subjectId: 'iw',
    guide:     'sage',
    lessons: [
      ...INNERWORLD_VOY_L01.lessons,
      ...INNERWORLD_VOY_L02.lessons,
      ...INNERWORLD_VOY_L03.lessons,
      ...INNERWORLD_VOY_L04.lessons,
      ...INNERWORLD_VOY_L05.lessons,
      ...INNERWORLD_VOY_L06.lessons,
      ...INNERWORLD_VOY_L07.lessons,
      ...INNERWORLD_VOY_L08.lessons,
      ...INNERWORLD_VOY_L09.lessons,
      ...INNERWORLD_VOY_L10.lessons,
      ...INNERWORLD_VOY_L11.lessons,
      ...INNERWORLD_VOY_L15.lessons,
      ...INNERWORLD_VOY_L16.lessons,
      ...INNERWORLD_VOY_L17.lessons,
      ...INNERWORLD_VOY_L18.lessons,
      ...INNERWORLD_VOY_L19.lessons,
      ...INNERWORLD_VOY_L20.lessons,
    ],
  },
  'money': {
    ageBand:   'voyagers',
    subjectId: 'mb',
    guide:     'ace',
    lessons: [
      ...MONEYBUSINESS_VOY_L01.lessons,
      ...MONEYBUSINESS_VOY_L02.lessons,
      ...MONEYBUSINESS_VOY_L03.lessons,
      ...MONEYBUSINESS_VOY_L04.lessons,
      ...MONEYBUSINESS_VOY_L05.lessons,
      ...MONEYBUSINESS_VOY_L06.lessons,
      ...MONEYBUSINESS_VOY_L07.lessons,
      ...MONEYBUSINESS_VOY_L08.lessons,
      ...MONEYBUSINESS_VOY_L09.lessons,
      ...MONEYBUSINESS_VOY_L10.lessons,
      ...MONEYBUSINESS_VOY_L11.lessons,
      ...MONEYBUSINESS_VOY_L12.lessons,
      ...MONEYBUSINESS_VOY_L13.lessons,
      ...MONEYBUSINESS_VOY_L14.lessons,
      ...MONEYBUSINESS_VOY_L15.lessons,
      ...MONEYBUSINESS_VOY_L16.lessons,
      ...MONEYBUSINESS_VOY_L17.lessons,
      ...MONEYBUSINESS_VOY_L18.lessons,
      ...MONEYBUSINESS_VOY_L19.lessons,
      ...MONEYBUSINESS_VOY_L20.lessons,
    ],
  },
  'cosmos': {
    ageBand:   'voyagers',
    subjectId: 'cs',
    guide:     'nova',
    lessons: [
      ...COSMOS_VOY_L01.lessons,
      ...COSMOS_VOY_L02.lessons,
      ...COSMOS_VOY_L03.lessons,
      ...COSMOS_VOY_L04.lessons,
      ...COSMOS_VOY_L05.lessons,
      ...COSMOS_VOY_L06.lessons,
      ...COSMOS_VOY_L07.lessons,
      ...COSMOS_VOY_L08.lessons,
      ...COSMOS_VOY_L09.lessons,
      ...COSMOS_VOY_L10.lessons,
      ...COSMOS_VOY_L11.lessons,
    ],
  },
};

// ── Audio session tracking (module-level) ─────────────────────────────────
let _voyAudioSessionUnlocked = false;
function markAudioSessionUnlocked() { if (!_voyAudioSessionUnlocked) _voyAudioSessionUnlocked = true; }

// ─────────────────────────────────────────────────────────────────────────────
export default function VoyagerLessonPlayer() {
  const { subjectId, lessonId } = useParams();
  const navigate  = useNavigate();
  const child     = getCurrentChild();
  const childName = child?.name || 'friend';

  const subjectData = VOY_DATA[subjectId];
  const lesson      = subjectData?.lessons?.find(l => l.id === lessonId) || null;
  const guide       = subjectData?.guide || 'sage';
  const guideAvatar = getAvatar(guide);
  const screens     = lesson?.screens || [];
  const total       = screens.length;

  // ── State ─────────────────────────────────────────────────────────────────
  const [screenIdx,    setScreenIdx]    = useState(0);
  const [speaking,     setSpeaking]     = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [karaokeWords, setKaraokeWords] = useState([]);
  const [karaokeIdx,   setKaraokeIdx]   = useState(-1);
  const [vocabOpen,    setVocabOpen]    = useState(null);
  const [showVocabHint,setShowVocabHint]= useState(false);
  const [countdown,    setCountdown]    = useState(null);
  const [audioPaused,  setAudioPaused]  = useState(false);
  const [audioFallback,setAudioFallback]= useState(false);
  const [welcomeReady, setWelcomeReady] = useState(false);
  const [audioMissing, setAudioMissing] = useState(false);

  // ── Refs ──────────────────────────────────────────────────────────────────
  const persistentAudioRef        = useRef(null);
  const audioListenersCleanupRef  = useRef(null);
  const currentAbortControllerRef = useRef(null);
  const speakGenRef               = useRef(0);
  const blobUrlRef                = useRef(null);
  const karaokeRef                = useRef([]);
  const lastSpokenText            = useRef('');
  const lastSpeakTime             = useRef(0);
  const audioEnabledRef           = useRef(true);
  const countdownIntervalRef      = useRef(null);
  const screenIdxRef              = useRef(0);
  const countdownPausedRef        = useRef(false);
  const startCountdownFnRef       = useRef(null);
  const audioPrewarmRef           = useRef(new Map());
  const isPausedRef               = useRef(false);
  const audioFailTimerRef         = useRef(null);
  const speakStartTimeRef         = useRef(0);
  const welcomePlayedRef          = useRef(false);
  const welcomePlayFnRef          = useRef(null);
  const lessonStartTimeRef        = useRef(Date.now());
  const lessonProgressRef         = useRef({ interactiveDetails: null, questionDetails: [], firstTryAccuracy: 0 });
  audioEnabledRef.current = audioEnabled;
  screenIdxRef.current    = screenIdx;

  const voiceIdRef = useRef(getVoiceForGuide(guide));
  const modelIdRef = useRef(getModelForGuide(guide));
  voiceIdRef.current = getVoiceForGuide(guide);
  modelIdRef.current = getModelForGuide(guide);

  // ── iOS gesture unlock ────────────────────────────────────────────────────
  useEffect(() => {
    let unlocked = false;
    function unlock() {
      if (unlocked) return;
      unlocked = true;
      unlockAudio();
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        persistentAudioRef.current = el;
      }
      const el = persistentAudioRef.current;
      if (el && el.src && el.paused && !el.ended && !isPausedRef.current) el.play().catch(() => {});
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('click',      unlock, true);
    }
    document.addEventListener('touchstart', unlock, { capture: true, passive: true });
    document.addEventListener('click',      unlock, { capture: true, passive: true });
    return () => {
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('click',      unlock, true);
    };
  }, []);

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => {
    currentAbortControllerRef.current?.abort();
    audioListenersCleanupRef.current?.();
    if (persistentAudioRef.current) { persistentAudioRef.current.pause(); persistentAudioRef.current.src = ''; }
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    karaokeRef.current.forEach(id => clearTimeout(id));
    audioPrewarmRef.current.forEach(v => { if (v?.blobUrl) URL.revokeObjectURL(v.blobUrl); });
    audioPrewarmRef.current.clear();
  }, []);

  // ── prewarmAudio ──────────────────────────────────────────────────────────
  const prewarmAudio = useCallback((text) => {
    if (!text || !audioEnabledRef.current) return Promise.resolve(null);
    const existing = audioPrewarmRef.current.get(text);
    if (existing) return existing instanceof Promise ? existing : Promise.resolve(existing);
    const p = (async () => {
      try {
        const res = await fetch('/.netlify/functions/nova-speak', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voiceId: voiceIdRef.current, ...(modelIdRef.current && { modelId: modelIdRef.current }) }),
        });
        if (!res.ok) { audioPrewarmRef.current.delete(text); return null; }
        const alignment = res.headers.get('X-Alignment') ? JSON.parse(res.headers.get('X-Alignment')) : null;
        const blobUrl = URL.createObjectURL(await res.blob());
        const result = { blobUrl, alignment };
        audioPrewarmRef.current.set(text, result);
        return result;
      } catch { audioPrewarmRef.current.delete(text); return null; }
    })();
    audioPrewarmRef.current.set(text, p);
    return p;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Pre-warm welcome audio on mount ──────────────────────────────────────
  useEffect(() => {
    const first = screens[0];
    if (!first || first.type !== 'welcome') { setWelcomeReady(true); return; }
    const text = getScreenText(first, childName);
    if (!text) { setWelcomeReady(true); return; }
    let set = false;
    const t = setTimeout(() => { if (!set) { set = true; setWelcomeReady(true); } }, 5000);
    prewarmAudio(text).then(() => { if (!set) { set = true; clearTimeout(t); setWelcomeReady(true); } })
                      .catch(() => { if (!set) { set = true; clearTimeout(t); setWelcomeReady(true); } });
    const firstContent = screens.find(s => s.type === 'magazine' || s.type === 'story-beat');
    if (firstContent) { const ct = getScreenText(firstContent, childName); if (ct) prewarmAudio(ct); }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── speak() ───────────────────────────────────────────────────────────────
  const speak = useCallback(async (text, onDone, options = {}) => {
    const { noKaraoke = false } = options;
    if (!text) { onDone?.(); return; }
    if (!audioEnabledRef.current) { onDone?.(); return; }
    const now = Date.now();
    if (text === lastSpokenText.current && now - lastSpeakTime.current < 500) { onDone?.(); return; }
    lastSpokenText.current = text;
    lastSpeakTime.current  = now;
    const gen = ++speakGenRef.current;
    currentAbortControllerRef.current?.abort();
    const ctrl = new AbortController();
    currentAbortControllerRef.current = ctrl;
    audioListenersCleanupRef.current?.();
    audioListenersCleanupRef.current = null;
    const prev = persistentAudioRef.current;
    if (prev) { prev.onended = null; prev.onerror = null; prev.ontimeupdate = null; prev.onplay = null; prev.pause(); }
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1); setKaraokeWords([]);
    setSpeaking(false); setLoadingAudio(true); setAudioFallback(false);
    isPausedRef.current = false;
    if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
    audioFailTimerRef.current = setTimeout(() => {
      if (gen !== speakGenRef.current) return;
      setAudioFallback(true); setLoadingAudio(false);
    }, 8000);

    try {
      let blobUrl = null; let alignment = null;
      const cached = audioPrewarmRef.current.get(text);
      if (cached) {
        const resolved = cached instanceof Promise ? await cached : cached;
        if (resolved?.blobUrl) { blobUrl = resolved.blobUrl; alignment = resolved.alignment; }
      }
      if (!blobUrl) {
        const res = await fetch('/.netlify/functions/nova-speak', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voiceId: voiceIdRef.current, ...(modelIdRef.current && { modelId: modelIdRef.current }) }),
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error('TTS error');
        alignment = res.headers.get('X-Alignment') ? JSON.parse(res.headers.get('X-Alignment')) : null;
        const blob = await res.blob();
        blobUrl = URL.createObjectURL(blob);
        if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = blobUrl;
      }
      if (gen !== speakGenRef.current || ctrl.signal.aborted) return;
      if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }

      // Build karaoke word list
      if (!noKaraoke && alignment?.characters) {
        const chars = alignment.characters; const starts = alignment.character_start_times_seconds;
        const words = []; let ws = null; let wc = '';
        for (let i = 0; i < chars.length; i++) {
          if (chars[i] === ' ' || chars[i] === '\n') { if (wc) { words.push({ text: wc, start: ws }); wc = ''; ws = null; } }
          else { if (!wc) ws = starts[i]; wc += chars[i]; }
        }
        if (wc) words.push({ text: wc, start: ws });
        setKaraokeWords(words); setKaraokeIdx(-1);
        words.forEach((w, i) => {
          const tid = setTimeout(() => { if (gen !== speakGenRef.current) return; setKaraokeIdx(i); }, w.start * 1000);
          karaokeRef.current.push(tid);
        });
      }

      let el = persistentAudioRef.current;
      if (!el) {
        el = new Audio(); el.playsInline = true;
        el.setAttribute('webkit-playsinline', 'true'); el.setAttribute('playsinline', 'true');
        persistentAudioRef.current = el;
      }
      el.src = blobUrl; el.load();
      const cleanup = () => { el.onended = null; el.onerror = null; el.ontimeupdate = null; el.onplay = null; };
      audioListenersCleanupRef.current = cleanup;
      el.onplay  = () => { if (gen !== speakGenRef.current) return; setLoadingAudio(false); setSpeaking(true); markAudioSessionUnlocked(); };
      el.onended = () => { cleanup(); if (gen !== speakGenRef.current) return; karaokeRef.current.forEach(id => clearTimeout(id)); karaokeRef.current = []; setSpeaking(false); setLoadingAudio(false); setKaraokeIdx(-1); onDone?.(); };
      el.onerror = () => { cleanup(); if (gen !== speakGenRef.current) return; setSpeaking(false); setLoadingAudio(false); setAudioFallback(true); };
      await el.play();
    } catch (err) {
      if (err?.name === 'AbortError') return;
      if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
      setSpeaking(false); setLoadingAudio(false); onDone?.();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── stopAudio ─────────────────────────────────────────────────────────────
  const stopAudio = useCallback(() => {
    currentAbortControllerRef.current?.abort();
    audioListenersCleanupRef.current?.();
    audioListenersCleanupRef.current = null;
    if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
    const el = persistentAudioRef.current;
    if (el) { el.onended = null; el.onerror = null; el.ontimeupdate = null; el.onplay = null; el.pause(); }
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setSpeaking(false); setLoadingAudio(false); setAudioFallback(false); setKaraokeIdx(-1); setKaraokeWords([]);
  }, []);

  // ── Lesson progress callbacks ─────────────────────────────────────────────
  const onInteractiveComplete = useCallback((details) => { lessonProgressRef.current.interactiveDetails = details; }, []);
  const onQuizComplete = useCallback((questionDetails, firstTryAccuracy) => {
    lessonProgressRef.current.questionDetails  = questionDetails;
    lessonProgressRef.current.firstTryAccuracy = firstTryAccuracy;
  }, []);
  const onLastQuizQuestion = useCallback(() => {
    const nextScreen = screens[screenIdxRef.current + 1];
    if (!nextScreen) return;
    const r = t => (t || '').replace(/\{name\}/g, childName);
    if (nextScreen.type === 'reflection') { const t = r(nextScreen.guideText); if (t) prewarmAudio(t); }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Audio retry / welcome tap ─────────────────────────────────────────────
  const retryAudio = useCallback(() => {
    markAudioSessionUnlocked();
    try { new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA').play().catch(() => {}); } catch { /* no audio */ }
    setAudioFallback(false);
    const el = persistentAudioRef.current;
    if (el && el.src && !el.ended) { el.play().catch(() => {}); return; }
    const screen = screens[screenIdxRef.current];
    if (screen) { const text = getScreenText(screen, childName); if (text) speak(text); }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onWelcomeTap = useCallback(() => {
    if (welcomePlayedRef.current) return;
    welcomePlayedRef.current = true;
    setWelcomeReady(false);
    markAudioSessionUnlocked();
    try { new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA').play().catch(() => {}); } catch { /* no audio */ }
    welcomePlayFnRef.current?.();
  }, []);

  const cancelCountdown = useCallback(() => {
    if (countdownIntervalRef.current) { clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; }
    setCountdown(null);
  }, []);

  // ── Pause countdown when vocab popup opens ────────────────────────────────
  useEffect(() => {
    if (vocabOpen) {
      if (countdownIntervalRef.current) { clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; countdownPausedRef.current = true; setCountdown(null); }
    } else if (countdownPausedRef.current) {
      countdownPausedRef.current = false;
      startCountdownFnRef.current?.();
    }
  }, [vocabOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Speak on screen change ────────────────────────────────────────────────
  useEffect(() => {
    if (!lesson) return;
    const screen = screens[screenIdx];
    if (!screen) return;
    let cancelled = false;
    const timers = [];

    stopAudio();
    setAudioMissing(false);

    function startCountdownForScreen() {
      if (cancelled) return;
      let n = 3;
      setCountdown(n);
      countdownIntervalRef.current = setInterval(() => {
        if (cancelled) { clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; setCountdown(null); return; }
        if (isPausedRef.current) return;
        n--;
        if (n <= 0) {
          clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; setCountdown(null);
          if (screenIdxRef.current < total - 1) setScreenIdx(prev => prev + 1);
          else navigate(`/child/subject/${subjectId}`);
        } else { setCountdown(n); }
      }, 1000);
    }
    startCountdownFnRef.current = startCountdownForScreen;

    if (screen.type === 'magazine' || screen.type === 'story-beat') {
      const fullText = getScreenText(screen, childName);
      const next = screens[screenIdx + 1];
      if (next?.type === 'magazine' || next?.type === 'story-beat') { const nt = getScreenText(next, childName); if (nt) prewarmAudio(nt); }
      speakStartTimeRef.current = Date.now();
      speak(fullText, () => {
        if (cancelled) return;
        const dur = Date.now() - speakStartTimeRef.current;
        if (audioEnabledRef.current && dur < 1000) { setAudioMissing(true); return; }
        const t = setTimeout(() => { if (!cancelled) startCountdownForScreen(); }, 1000);
        timers.push(t);
      });
    } else if (
      screen.type === 'reflection'       ||
      screen.type === 'perspectives'     ||
      screen.type === 'identity-hook'    ||
      screen.type === 'real-world'       ||
      screen.type === 'celebration'      ||
      screen.type === 'argument-builder' ||
      screen.type === 'case-study'       ||
      screen.type === 'source-evaluation'||
      screen.type === 'annotate'         ||
      screen.type === 'matching'         ||
      screen.type === 'sequence'         ||
      screen.type === 'investigation'    ||
      screen.type === 'branching-decision'
    ) {
      const text = getScreenText(screen, childName);
      if (text) speak(text);
    } else if (screen.type === 'welcome') {
      welcomePlayedRef.current = false;
      welcomePlayFnRef.current = null;
      const text = getScreenText(screen, childName);
      if (text) {
        welcomePlayFnRef.current = () => {
          if (cancelled) return;
          speakStartTimeRef.current = Date.now();
          speak(text, () => {
            if (cancelled) return;
            const dur = Date.now() - speakStartTimeRef.current;
            if (audioEnabledRef.current && dur < 1000) { setAudioMissing(true); return; }
            const t = setTimeout(() => { if (!cancelled) startCountdownForScreen(); }, 1000);
            timers.push(t);
          });
        };
      }
    }

    return () => {
      cancelled = true;
      timers.forEach(id => clearTimeout(id));
      if (countdownIntervalRef.current) { clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; }
      setCountdown(null);
    };
  }, [screenIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Navigation ────────────────────────────────────────────────────────────
  function goNext() {
    unlockAudio();
    if (screenIdx < total - 1) {
      if (screens[screenIdx + 1]?.type === 'celebration') sfx.fanfare();
      setScreenIdx(prev => prev + 1);
    } else {
      navigate(`/child/subject/${subjectId}`);
    }
  }
  function goBack() {
    if (screenIdx > 0) setScreenIdx(prev => prev - 1);
    else navigate(-1);
  }
  function toggleAudio() {
    setAudioEnabled(prev => {
      if (prev) {
        currentAbortControllerRef.current?.abort();
        persistentAudioRef.current?.pause();
        setSpeaking(false); setLoadingAudio(false);
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = []; setKaraokeIdx(-1);
      }
      return !prev;
    });
  }
  function replayAudio() {
    if (!screens[screenIdx]) return;
    const text = getScreenText(screens[screenIdx], childName);
    if (text) speak(text);
  }
  function pauseResumeAudio() {
    const el = persistentAudioRef.current;
    if (!el) return;
    if (audioPaused) {
      isPausedRef.current = false; el.play().catch(() => {}); setAudioPaused(false); setSpeaking(true);
    } else if (speaking) {
      isPausedRef.current = true; el.pause();
      if (countdownIntervalRef.current) { clearInterval(countdownIntervalRef.current); countdownIntervalRef.current = null; }
      setCountdown(null); setAudioPaused(true); setSpeaking(false);
    }
  }

  // ── Not found ─────────────────────────────────────────────────────────────
  if (!lesson) {
    return (
      <div style={{ minHeight: '100dvh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>Lesson not found.</p>
        <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', background: '#10B981', color: '#000', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>Go Back</button>
      </div>
    );
  }

  const currentScreen = screens[screenIdx];
  const accent        = guideAvatar?.accent || '#10B981';

  // ── commonProps for shared UE components ─────────────────────────────────
  const commonProps = {
    screen: currentScreen, childName, guideAvatar, speaking, loadingAudio, audioPaused,
    karaokeWords, karaokeIdx, accent,
    onReplay:           replayAudio,
    onPauseResume:      pauseResumeAudio,
    onVocabTap:         (vocab) => { stopAudio(); setVocabOpen(vocab); },
    onComplete:         goNext,
    showVocabHint,
    onDismissVocabHint: () => { setShowVocabHint(false); localStorage.setItem('explorer_vocab_hint_shown', 'true'); },
    onSpeak:            speak,
    onPrewarm:          prewarmAudio,
    onStopAudio:        stopAudio,
    onInteractiveComplete,
    onQuizComplete,
    onLastQuestion:     onLastQuizQuestion,
    welcomeReady,
    onWelcomeTap,
    subjectId,
    headlineWordCount: (currentScreen?.type === 'magazine' || currentScreen?.type === 'story-beat')
      ? (currentScreen.headline || '').split(/\s+/).filter(Boolean).length : 0,
  };

  // ── Screen dispatcher ─────────────────────────────────────────────────────
  function renderScreen(screen) {
    switch (screen.type) {
      case 'welcome':
        return <ExplorerWelcomeScreen {...commonProps} />;
      case 'magazine': {
        const totalSections = screens.filter(s => s.type === 'magazine').length;
        return <MagazineScreen {...commonProps} screen={{ ...currentScreen, totalSections }} />;
      }
      case 'story-beat':
        return <StoryBeatScreen {...commonProps} />;
      case 'matching':
        return (
          <MatchingGame
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'sequence':
        return (
          <SequenceGame
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'investigation':
        return (
          <InvestigationGame
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'branching-decision':
        return (
          <BranchingDecision
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'interactive':
        // Legacy stub — kept in case old content specifies type:'interactive'.
        // New Cosmos content uses top-level types: matching, sequence, investigation, branching-decision.
        return (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, padding: 40 }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', textAlign: 'center' }}>
              Game: <strong style={{ color: accent }}>{screen.format || 'interactive'}</strong>
            </p>
            <button onClick={goNext} style={{ padding: '12px 28px', background: accent, color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Continue →</button>
          </div>
        );
      case 'quiz': {
        // Normalize type → format, map 'inference' → 'multiple-choice'.
        // Then run SpacedRetrievalEngine to substitute 0-2 questions with
        // review questions from earlier lessons in the same subject.
        const normalizedQuestions = (screen.questions || []).map(q => ({
          ...q,
          format: q.format || (q.type === 'inference' ? 'multiple-choice' : q.type),
        }));
        const spacedQuestions = buildSpacedQuiz(normalizedQuestions, lessonId, subjectData);
        const quizScreen = { ...screen, questions: spacedQuestions };
        return <MasteryQuiz {...commonProps} screen={quizScreen} />;
      }
      case 'reflection':
        return (
          <ReflectionScreen
            screen={currentScreen} guideAvatar={guideAvatar} accent={accent}
            childName={childName} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx}
            speaking={speaking} onSpeak={speak} onComplete={goNext}
          />
        );
      case 'real-world': {
        // Normalize Voyager real-world format → what RealWorldConnection expects.
        // guideContext → guideText, familyActivity.description → familyAdventure (string),
        // projectOption → creativePrompt (plain string).
        const rwScreen = {
          ...screen,
          guideText:      screen.guideText || screen.guideContext || '',
          familyAdventure: typeof screen.familyAdventure === 'string'
            ? screen.familyAdventure
            : (screen.familyActivity?.description || ''),
          creativePrompt:  screen.creativePrompt ||
            (screen.projectOption
              ? `${screen.projectOption.title ? screen.projectOption.title + ': ' : ''}${screen.projectOption.description || ''}`
              : undefined),
        };
        return <RealWorldConnection {...commonProps} screen={rwScreen} />;
      }
      case 'perspectives':
        return (
          <PerspectivesScreen
            screen={currentScreen} guideAvatar={guideAvatar} accent={accent}
            childName={childName} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx}
            speaking={speaking} onComplete={goNext}
          />
        );
      case 'argument-builder':
        return (
          <ArgumentBuilder
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'case-study':
        return (
          <CaseStudy
            screen={currentScreen} accent={accent}
            childName={childName} guideAvatar={guideAvatar}
            onComplete={goNext}
          />
        );
      case 'source-evaluation':
        return (
          <SourceEvaluation
            screen={currentScreen} accent={accent}
            childName={childName} onComplete={goNext}
          />
        );
      case 'annotate':
        return (
          <Annotate
            screen={currentScreen} accent={accent}
            childName={childName} onComplete={goNext}
          />
        );
      case 'identity-hook':
        return (
          <IdentityHookScreen
            screen={currentScreen} guideAvatar={guideAvatar} accent={accent}
            childName={childName} speaking={speaking} onComplete={goNext}
          />
        );
      case 'celebration': {
        const prog = lessonProgressRef.current;
        const fta  = prog.firstTryAccuracy || 0;
        const lessonRecord = {
          childId: child?.id || null, lessonId, subjectId, ageBand: 'voyagers',
          startedAt: lessonStartTimeRef.current, firstTryAccuracy: fta, masteryScore: 100,
          letterGrade: getGrade(fta),
          xpEarned:    fta >= 0.8 ? (lesson.xpReward || 75) : Math.round((lesson.xpReward || 75) * 0.6),
          badgeEarned: screen.badge || lesson.badge || '',
          questionDetails: prog.questionDetails || [], interactiveDetails: prog.interactiveDetails || null,
          creativePromptCompleted: false, familyAdventureViewed: false,
        };
        return <ExplorerCelebration {...commonProps} subjectId={subjectId} lessonTitle={lesson.title} lessonRecord={lessonRecord} />;
      }
      default:
        return (
          <div style={{ padding: 40, textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)' }}>Unknown screen type: {screen.type}</p>
          </div>
        );
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="explorer-shell" style={{
      position: 'fixed', inset: 0, background: '#0f172a',
      display: 'flex', flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden', touchAction: 'manipulation',
      WebkitUserSelect: 'none', userSelect: 'none',
    }}>
      <style>{`
        body { overscroll-behavior: none; touch-action: manipulation; }
        button, [role="button"] { -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
        button:active { opacity: 0.82 !important; }
        @keyframes ex-ring { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.14)} }
        @keyframes explorer-enter { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes vocab-pulse { 0%,100%{text-shadow:none} 50%{text-shadow:0 0 10px #60A5FA} }
        .vocab-tutorial-pulse { animation: vocab-pulse 1s ease-in-out infinite; display: inline; }
        .explorer-shell { width: 100%; max-width: 100%; }
        @media (min-width: 768px) { .explorer-shell { font-size: 20px; } .explorer-header { padding: 16px 32px 14px !important; } }

        /* ── Magazine layout ───────────────────────────────────────────── */
        .magazine-outer { height: 100%; display: flex; flex-direction: column; overflow: hidden; }
        .magazine-image-col { position: relative; width: 100%; flex-shrink: 0; max-height: 33vh; background: #080618; overflow: hidden; }
        .magazine-text-col { flex: 1; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; padding: 16px 20px 24px; }
        .mag-para { line-height: 1.75 !important; margin-bottom: 20px !important; }
        .mag-scroll-hint { display: flex; }
        @media (min-height: 700px) { .mag-scroll-hint { display: none !important; } }
        @media (min-width: 768px) {
          .magazine-image-col { max-height: 40vh; }
          .magazine-text-col  { padding: 28px 44px 36px; }
          .mag-headline       { font-size: 2.2rem !important; }
          .mag-para           { font-size: 1.1rem !important; line-height: 1.85 !important; }
          .mag-replay-btn     { width: 56px !important; height: 56px !important; font-size: 1.4rem !important; top: 12px !important; right: 12px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .magazine-text-col { max-width: 720px; margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 1024px) {
          .magazine-outer     { flex-direction: row; }
          .magazine-image-col { width: 44%; max-height: unset; height: 100%; }
          .magazine-text-col  { padding: 32px 52px 36px; max-width: 680px; }
          .mag-headline       { font-size: 2.4rem !important; }
          .mag-para           { font-size: 1.15rem !important; }
        }

        /* ── Real-world layout ────────────────────────────────────────── */
        @media (min-width: 768px) {
          .real-world-scroll { padding: 36px 48px !important; }
          .real-world-card   { padding: 26px 24px !important; }
          .real-world-text   { font-size: 1.2rem !important; }
        }
        @media (min-width: 1024px) {
          .real-world-scroll { max-width: 820px; margin: 0 auto; }
          .real-world-text   { font-size: 1.25rem !important; }
        }

        /* ── Celebration layout ───────────────────────────────────────── */
        @media (min-width: 768px) { .celebration-wrap { max-width: 620px; margin: 0 auto; } }

        /* ── Voyager reading/interaction screens — desktop centering ───── */
        /* Uses padding to clamp content to ~720px on wide viewports.       */
        /* max() keeps at least 20px on small screens, never negative.      */
        @media (min-width: 768px) {
          .voy-reading-shell {
            padding-left:  max(20px, calc(50% - 360px)) !important;
            padding-right: max(20px, calc(50% - 360px)) !important;
          }
        }
      `}</style>

      {/* Lesson header */}
      <div className="explorer-header" style={{ padding: '10px 16px 8px', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {lesson.title}
        </div>
      </div>

      {/* Screen content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div
          key={screenIdx}
          style={{ flex: 1, overflow: 'hidden', animation: 'explorer-enter 0.28s ease both' }}
          onTouchStart={() => { if (countdown !== null) cancelCountdown(); }}
          onClick={() => { if (countdown !== null) cancelCountdown(); }}
        >
          {renderScreen(currentScreen)}
        </div>
      </div>

      {/* Tap-to-continue fallback */}
      {audioMissing && (currentScreen?.type === 'magazine' || currentScreen?.type === 'welcome' || currentScreen?.type === 'story-beat') && (
        <div style={{ flexShrink: 0, padding: '6px 16px 2px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={goNext}
            style={{
              background: `linear-gradient(135deg, ${accent}22, ${accent}44)`,
              border: `1.5px solid ${accent}88`, borderRadius: 24,
              color: accent, fontSize: '0.88rem', fontWeight: 700,
              letterSpacing: '0.03em', padding: '8px 22px', cursor: 'pointer',
              touchAction: 'manipulation', animation: 'ex-ring 2s ease-in-out infinite',
            }}
          >
            Tap to continue →
          </button>
        </div>
      )}

      {/* Navigation bar */}
      <ExplorerNavigation
        screenIdx={screenIdx} total={total} accent={accent}
        audioEnabled={audioEnabled} speaking={speaking}
        onBack={goBack} onNext={goNext} onToggleAudio={toggleAudio}
        isCelebration={currentScreen.type === 'celebration'}
        nextDisabled={currentScreen.type === 'quiz'}
        countdown={countdown}
      />

      {/* Audio fallback overlay */}
      {audioFallback && (
        <div
          aria-label={`Tap to hear ${guideAvatar?.name || 'Guide'}`}
          onClick={retryAudio}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, cursor: 'pointer',
          }}
        >
          <div style={{ background: '#1a0a2e', borderRadius: 20, padding: '32px 36px', textAlign: 'center', border: `2px solid ${accent}44` }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🔊</div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 8px' }}>Tap to hear {guideAvatar?.name || 'your guide'}</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>Tap anywhere to enable audio</p>
          </div>
        </div>
      )}

      {/* Vocab popup */}
      {vocabOpen && (
        <VocabPopup
          vocab={vocabOpen} accent={accent} guideAvatar={guideAvatar}
          childName={childName} onClose={() => setVocabOpen(null)} onSpeak={speak}
        />
      )}
    </div>
  );
}
