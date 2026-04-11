import { useState } from 'react';
import { getCurrentParent } from '../lib/storage';
import { STATE_COMPLIANCE } from '../lib/constants';
import { useNavigate } from 'react-router-dom';

const AVAILABLE = Object.keys(STATE_COMPLIANCE);

export default function StateCompliance() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  if (!parent) { navigate('/parent/login'); return null; }

  const defaultState = AVAILABLE.includes(parent.state) ? parent.state : AVAILABLE[0];
  const [selected, setSelected] = useState(defaultState);
  const data = STATE_COMPLIANCE[selected];

  const levelColors = {
    Low:      { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    Moderate: { bg: 'bg-amber-500/15',   text: 'text-amber-400',   border: 'border-amber-500/30' },
    High:     { bg: 'bg-red-500/15',     text: 'text-red-400',     border: 'border-red-500/30' },
  };
  const lc = levelColors[data.level];

  return (
    <div className="transition-page max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>State Compliance</h1>
        <p className="text-white/40 text-sm mt-1">Homeschool regulations for your state</p>
      </div>

      {/* State selector */}
      <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6 mb-6">
        <p className="text-sm font-medium text-white/60 mb-3">View requirements for:</p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE.map(state => (
            <button
              key={state}
              onClick={() => setSelected(state)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all
                ${selected === state
                  ? 'bg-[#7C3AED] border-[#7C3AED] text-white'
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'}`}
            >
              {state}
            </button>
          ))}
        </div>
        {!AVAILABLE.includes(parent.state) && (
          <p className="text-amber-400/70 text-xs mt-3">
            Detailed requirements for {parent.state} are coming soon. Showing available states below.
          </p>
        )}
      </div>

      {/* Data panel */}
      <div className="space-y-4">
        {/* Header */}
        <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6 flex items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>{selected}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${lc.bg} ${lc.text} ${lc.border}`}>
                {data.level} Regulation
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <InfoCard title="Notification Requirements" icon={BellIcon}>
            <p className="text-white/60 text-sm leading-relaxed">{data.notification}</p>
          </InfoCard>
          <InfoCard title="Testing Requirements" icon={ClipboardIcon}>
            <p className="text-white/60 text-sm leading-relaxed">{data.testing}</p>
          </InfoCard>
        </div>

        <InfoCard title="Required Subjects" icon={BookIcon}>
          <div className="flex flex-wrap gap-2 mt-1">
            {data.subjects.map(sub => (
              <span key={sub} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm">{sub}</span>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Important Notes" icon={InfoIcon}>
          <p className="text-white/60 text-sm leading-relaxed">{data.notes}</p>
        </InfoCard>

        <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/25 rounded-2xl p-5">
          <p className="text-[#A78BFA] text-sm">
            <strong className="text-white">Disclaimer:</strong> This information is for reference only and may not reflect recent changes in law. Always consult your state's Department of Education or a qualified homeschool organization for current requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, icon: Icon, children }) {
  return (
    <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon />
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function BellIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>;
}
function ClipboardIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>;
}
function BookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>;
}
function InfoIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
}
