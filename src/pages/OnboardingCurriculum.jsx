import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOnboardingDraft, updateOnboardingDraft } from '../lib/onboardingStorage';
import { SUBJECTS, getSubject } from '../lib/constants';
import Button from '../components/Button';

// State → required subject IDs (simplified from actual standards)
const CORE_BY_STATE = {
  California:   ['ela', 'math', 'ss', 'sci', 'creative-arts', 'wellness'],
  Texas:        ['ela', 'math', 'ss', 'leadership'],
  Florida:      ['ela', 'math', 'ss', 'sci', 'wellness'],
  'New York':   ['ela', 'math', 'ss', 'sci', 'wellness', 'creative-arts'],
  Virginia:     ['ela', 'math', 'ss', 'sci'],
  Washington:   ['ela', 'math', 'ss', 'sci', 'wellness'],
  Colorado:     ['ela', 'math', 'ss', 'sci', 'wellness'],
  Oregon:       ['ela', 'math', 'ss', 'sci', 'wellness'],
  Pennsylvania: ['ela', 'math', 'ss', 'sci', 'wellness', 'creative-arts'],
  Illinois:     ['ela', 'math', 'ss', 'sci', 'wellness'],
  Georgia:      ['ela', 'math', 'ss', 'sci', 'wellness'],
};
const DEFAULT_CORE = ['ela', 'math', 'ss', 'sci', 'wellness'];
const ALL_IDS = SUBJECTS.map(s => s.id);

// Labels for state subjects (plain English for the UI)
const SUBJECT_STATE_LABELS = {
  'ela':          'English Language Arts',
  'math':         'Mathematics',
  'ss':           'Social Studies',
  'sci':          'Science',
  'wellness':     'Health & Physical Education',
  'creative-arts':'Fine Arts',
  'leadership':   'Citizenship & Social Skills',
};

export default function OnboardingCurriculum() {
  const navigate = useNavigate();
  const draft   = getOnboardingDraft();
  const child   = draft.child || {};
  const name    = child.name  || 'Your child';
  const state   = child.state || '';
  const age     = child.age   || '—';

  const coreIds     = CORE_BY_STATE[state] || DEFAULT_CORE;
  const originalIds = ALL_IDS.filter(id => !coreIds.includes(id));

  const [selected, setSelected] = useState(new Set());

  function toggle(id) {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleConfirm() {
    const subjects = [...coreIds, ...Array.from(selected)];
    updateOnboardingDraft({ subjects });
    navigate('/onboarding/account');
  }

  return (
    <div className="min-h-screen bg-[#080618] relative overflow-y-auto transition-page">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#7C3AED]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-4 py-12">
        {/* Back */}
        <button
          onClick={() => navigate('/onboarding/child')}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="text-[#A78BFA] text-sm font-medium mb-2">Curriculum ready</p>
          <h1 className="text-3xl font-semibold text-white mb-2 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
            Here's {name}'s personalized curriculum
          </h1>
          <p className="text-white/40 text-sm">
            {state
              ? `Based on ${state} homeschool requirements`
              : 'Based on standard core requirements'
            }{' '}
            · Age {age}
          </p>
        </div>

        {/* Core subjects — state required */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-xs font-semibold tracking-widest text-white/30 uppercase">
              {state ? `${state} Required` : 'Core Subjects'}
            </p>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          <div className="flex flex-col gap-2">
            {coreIds.map(id => {
              const s = getSubject(id);
              const displayLabel = SUBJECT_STATE_LABELS[id] || s.label;
              return (
                <div
                  key={id}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#0F0B2E] border border-white/5"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500/15 flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{displayLabel}</p>
                    <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Coreverse Originals — optional */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs font-semibold tracking-widest text-[#A78BFA]/70 uppercase">
              Coreverse Originals
            </p>
            <div className="flex-1 h-px bg-[#7C3AED]/20" />
          </div>
          <p className="text-white/40 text-sm mb-4">
            Add these to make {name}'s education extraordinary
          </p>

          <div className="flex flex-col gap-2">
            {originalIds.map(id => {
              const s   = getSubject(id);
              const on  = selected.has(id);
              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-200 text-left"
                  style={{
                    borderColor: on ? 'rgba(124,58,237,0.55)' : 'rgba(255,255,255,0.07)',
                    background:  on ? 'rgba(124,58,237,0.1)'  : 'rgba(255,255,255,0.02)',
                  }}
                >
                  {/* Toggle circle */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all duration-200"
                    style={{
                      borderColor: on ? '#7C3AED' : 'rgba(255,255,255,0.2)',
                      background:  on ? '#7C3AED' : 'transparent',
                    }}
                  >
                    {on && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium transition-colors ${on ? 'text-white' : 'text-white/55'}`}>
                      {s.label}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-opacity"
                    style={{ background: s.color, opacity: on ? 1 : 0.4 }}
                  />
                </button>
              );
            })}
          </div>

          {selected.size > 0 && (
            <p className="text-[#A78BFA] text-xs mt-3 text-center">
              {selected.size} original{selected.size > 1 ? 's' : ''} added
            </p>
          )}
        </div>

        <Button onClick={handleConfirm} size="lg" className="w-full">
          This looks great!
        </Button>

        <p className="text-center text-white/25 text-xs mt-4">
          You can always add or remove subjects later
        </p>
      </div>
    </div>
  );
}
