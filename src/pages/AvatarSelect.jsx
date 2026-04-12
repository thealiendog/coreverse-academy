import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentChild, getCurrentParent, updateChildAvatar } from '../lib/storage';
import { AVATARS } from '../lib/constants';

export default function AvatarSelect() {
  const navigate      = useNavigate();
  const [params]      = useSearchParams();
  const returnTo      = params.get('back') || '/child/dashboard';
  const child         = getCurrentChild();
  const parent        = getCurrentParent();

  const [selected, setSelected] = useState(child?.avatar || 'nova');
  const [saving,   setSaving]   = useState(false);

  if (!child) { navigate('/child/select'); return null; }

  const currentAv = AVATARS.find(a => a.id === selected) || AVATARS[0];

  function handleSave() {
    if (saving) return;
    setSaving(true);
    if (parent) {
      updateChildAvatar(parent.id, child.id, selected);
    }
    // Small delay so the user sees the confirmation state
    setTimeout(() => navigate(returnTo), 500);
  }

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col transition-page relative overflow-hidden">
      {/* Ambient glow behind content */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 30%, ${currentAv.accent}1a 0%, transparent 65%)`,
          }}
        />
      </div>

      {/* ── Top bar ─────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-6 pb-2 max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/35 hover:text-white/70 text-sm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      </div>

      {/* ── Header ──────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 pt-4 pb-8 max-w-lg mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: currentAv.accent }}>
          Spirit Guide
        </p>
        <h1 className="text-3xl font-semibold text-white mb-2 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
          Choose Your Guide
        </h1>
        <p className="text-white/40 text-sm leading-relaxed">
          Your guide walks with you through every lesson, every discovery, every challenge.
        </p>
      </div>

      {/* ── Avatar grid ─────────────────────────────── */}
      <div className="relative z-10 flex-1 px-4 pb-4 max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {AVATARS.map(av => {
            const isSelected = selected === av.id;
            return (
              <button
                key={av.id}
                onClick={() => setSelected(av.id)}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none"
                style={{
                  borderColor:  isSelected ? av.accent : 'rgba(255,255,255,0.07)',
                  background:   isSelected
                    ? `linear-gradient(145deg, ${av.accent}18 0%, ${av.color}30 100%)`
                    : 'rgba(255,255,255,0.025)',
                  boxShadow:    isSelected
                    ? `0 0 28px ${av.accent}30, 0 0 0 1px ${av.accent}40`
                    : 'none',
                  transform:    isSelected ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                {/* Avatar image */}
                <div
                  className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300"
                  style={{
                    boxShadow: isSelected
                      ? `0 0 24px ${av.accent}50, 0 0 0 2px ${av.accent}60`
                      : `0 0 0 1.5px ${av.accent}25`,
                  }}
                >
                  <img src={av.image} alt={av.name} className="w-full h-full object-cover" />
                </div>

                {/* Name + animal */}
                <div className="text-center">
                  <p
                    className="font-semibold text-sm leading-tight transition-colors duration-200"
                    style={{ color: isSelected ? av.accent : 'rgba(255,255,255,0.85)' }}
                  >
                    {av.name}
                  </p>
                  <p className="text-white/35 text-[11px] mt-0.5">{av.animal}</p>
                </div>

                {/* Specialty */}
                <p
                  className="text-[10px] text-center leading-tight px-1 transition-colors duration-200"
                  style={{ color: isSelected ? av.accent + 'cc' : 'rgba(255,255,255,0.25)' }}
                >
                  {av.specialty}
                </p>

                {/* Selection indicator */}
                {isSelected && (
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: av.accent }}
                  >
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Save button ─────────────────────────────── */}
      <div className="relative z-10 px-5 pb-10 pt-4 max-w-lg mx-auto w-full">
        {/* Preview of chosen guide */}
        <div className="flex items-center gap-3 mb-5 px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: `0 0 0 2px ${currentAv.accent}45` }}
          >
            <img src={currentAv.image} alt={currentAv.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold">{currentAv.name} the {currentAv.animal}</p>
            <p className="text-xs truncate" style={{ color: currentAv.accent + 'aa' }}>{currentAv.specialty}</p>
          </div>
          {selected === child.avatar && (
            <span className="text-xs text-white/30 flex-shrink-0">Current</span>
          )}
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] disabled:opacity-60"
          style={{
            background: saving
              ? currentAv.accent + '88'
              : `linear-gradient(135deg, ${currentAv.accent}ee, ${currentAv.accent}99)`,
            boxShadow: `0 4px 40px ${currentAv.accent}40`,
          }}
        >
          {saving ? 'Saving…' : `Choose ${currentAv.name} as my guide`}
        </button>
      </div>
    </div>
  );
}
