import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimalIcon from '../components/AnimalIcon';

// 14 guides — 8 have Midjourney images, 6 keep emoji placeholder until images are ready
const GUIDES = [
  {
    id: 'sage',  name: 'Sage',  animal: 'Deer',      subjectId: 'inner-world',
    image: '/avatars/sage.png',  color: '#10B981',
    specialty: 'Inner World & Consciousness',
    lore: 'Calm and ancient, Sage moves through forests of thought. She helps children hear the voice within — the one that knows what\'s true even before the mind catches up. In her lessons, slowing down is a superpower.',
  },
  {
    id: 'nova',  name: 'Nova',  animal: 'Owl',       subjectId: 'cosmos',
    image: '/avatars/nova.png',  color: '#6366F1',
    specialty: 'Cosmos & Science',
    lore: 'Nova watches from high branches and sees patterns no one else notices. She turns the vastness of the universe — billions of stars, black holes, deep time — into something personal and wondrous for every child.',
  },
  {
    id: 'lyra',  name: 'Lyra',  animal: 'Elephant',  subjectId: 'history',
    image: '/avatars/lyra.png',  color: '#D97706',
    specialty: 'History & World',
    lore: 'Lyra never forgets. She carries the memory of civilizations, cultures, and turning points, and helps children understand how the past lives in the present — and why knowing history changes how you see today.',
  },
  {
    id: 'byte',  name: 'Byte',  animal: 'Fox',       subjectId: 'future-skills',
    image: '/avatars/byte.png',  color: '#3B82F6',
    specialty: 'Future Skills',
    lore: 'Quick, curious, and always three steps ahead. Byte loves problems that haven\'t been solved yet — AI, coding, systems thinking. She teaches children to think like the innovators who build what comes next.',
  },
  {
    id: 'ace',   name: 'Ace',   animal: 'Eagle',     subjectId: 'money',
    image: '/avatars/ace.png',   color: '#FCD34D',
    specialty: 'Money & Business',
    lore: 'Ace soars above the whole financial landscape and sees it clearly. He teaches children that money is a tool — and that the smartest people learn how it really works long before they need it.',
  },
  {
    id: 'muse',  name: 'Muse',  animal: 'Butterfly', subjectId: 'creative-arts',
    image: '/avatars/muse.png',  color: '#E879F9',
    specialty: 'Creative Arts',
    lore: 'Muse transforms. She shows children that creativity isn\'t a talent you\'re born with — it\'s a practice you build, one brushstroke, note, and story at a time. Everyone is an artist here.',
  },
  {
    id: 'terra', name: 'Terra', animal: 'Wolf',      subjectId: 'wellness',
    image: '/avatars/terra.png', color: '#86EFAC',
    specialty: 'Life & Wellness',
    lore: 'Terra runs with the pack and knows how body and mind work together. She teaches children to move, rest, eat, and connect in ways that make them feel fully alive — not just healthy, but whole.',
  },
  {
    id: 'valor', name: 'Valor', animal: 'Lion',      subjectId: 'leadership',
    image: '/avatars/valor.png', color: '#FCA5A5',
    specialty: 'Social & Leadership',
    lore: 'Valor leads not through force, but through integrity. He shows children what it means to speak up, stand tall, listen deeply, and bring others with you — the kind of leadership that actually changes things.',
  },
  {
    id: 'luna',  name: 'Luna',  animal: 'Parrot',    subjectId: 'languages',
    image: '/avatars/luna.png',  color: '#34D399',
    specialty: 'Languages (Spanish)',
    lore: 'Luna has crossed every ocean and speaks every tongue. She makes language feel like play — because that\'s exactly how it should feel. With Luna, ¡hola! is just the beginning of a whole new world.',
  },
  {
    id: 'orion', name: 'Orion', animal: 'Phoenix',   subjectId: 'frontier',
    image: '/avatars/orion.png', color: '#A78BFA',
    specialty: 'Frontier & Philosophy',
    lore: 'Orion rises. He takes children to the edges of what humans have wondered about — quantum strangeness, philosophical puzzles, ancient mysteries. He makes the unknown feel like an invitation, not a wall.',
  },
  {
    id: 'remi',  name: 'Remi',  animal: 'Raccoon',   subjectId: 'math',
    image: '/avatars/remi.png',  color: '#8B5CF6',
    specialty: 'Mathematics',
    lore: 'Remi is endlessly curious and endlessly resourceful. She finds the pattern in everything and helps children see that math isn\'t about numbers — it\'s about thinking clearly, and that\'s a skill for everything.',
  },
  {
    id: 'quill', name: 'Quill', animal: 'Porcupine', subjectId: 'ela',
    image: '/avatars/quill.png', color: '#F59E0B',
    specialty: 'English Language Arts',
    lore: 'Every spine is a story. Quill helps children find their voice, sharpen their thinking, and discover the power that comes from being able to say exactly — precisely — what you mean.',
  },
  {
    id: 'cosmo', name: 'Cosmo', animal: 'Otter',     subjectId: 'sci',
    image: '/avatars/cosmo.png', color: '#06B6D4',
    specialty: 'Science',
    lore: 'Cosmo asks "why?" before anything else. He turns every observation into an experiment and shows children that science isn\'t a subject — it\'s a way of paying attention to the world around you.',
  },
  {
    id: 'atlas', name: 'Atlas', animal: 'Bear',      subjectId: 'ss',
    image: '/avatars/atlas.png', color: '#84CC16',
    specialty: 'Social Studies',
    lore: 'Atlas has walked every land and studied every people. He helps children see the world not as a set of facts to memorize, but as a living tapestry they\'re already part of and helping to weave.',
  },
];

export default function MeetTheGuides() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="transition-page">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>
          Meet the Guides
        </h1>
        <p className="text-white/40 text-sm mt-1.5 max-w-lg">
          Every subject has its own spirit guide — a companion who shapes the voice, curiosity, and energy of every lesson. Children meet each guide naturally as they explore.
        </p>
      </div>

      {/* Guide grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {GUIDES.map(guide => (
          <GuideCard key={guide.id} guide={guide} onClick={() => setSelected(guide)} />
        ))}
      </div>

      {/* Detail modal */}
      {selected && (
        <GuideModal
          guide={selected}
          onClose={() => setSelected(null)}
          onNavigate={subjectId => navigate(`/child/subject/${subjectId}`)}
        />
      )}
    </div>
  );
}

function GuideCard({ guide, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-2xl border border-white/6 bg-[#0F0B2E]/60 hover:border-white/15 hover:bg-[#0F0B2E] transition-all duration-200 overflow-hidden hover:scale-[1.02] focus:outline-none"
      style={{ boxShadow: `0 4px 24px ${guide.color}10` }}
    >
      {/* Avatar area */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${guide.color}18 0%, ${guide.color}08 100%)` }}
      >
        {/* Subtle glow blob */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at 50% 60%, ${guide.color}40 0%, transparent 65%)` }}
        />

        {guide.image ? (
          <img
            src={guide.image}
            alt={guide.name}
            className="relative z-10 w-20 h-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ boxShadow: `0 0 0 2px ${guide.color}40, 0 8px 24px ${guide.color}30` }}
          />
        ) : (
          <div
            className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: guide.color + '18', border: `2px solid ${guide.color}35` }}
          >
            {guide.emoji}
          </div>
        )}

        {/* AnimalIcon watermark bottom-right */}
        <div className="absolute bottom-3 right-3 opacity-20 group-hover:opacity-35 transition-opacity duration-200">
          <AnimalIcon subjectId={guide.subjectId} color={guide.color} size={18} />
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <div className="flex items-baseline gap-1.5 mb-0.5">
          <p className="font-semibold text-white text-sm" style={{ fontFamily: 'Georgia, serif' }}>
            {guide.name}
          </p>
          <p className="text-white/30 text-xs">the {guide.animal}</p>
        </div>
        <p className="text-[11px] leading-snug" style={{ color: guide.color + 'cc' }}>
          {guide.specialty}
        </p>
      </div>
    </button>
  );
}

function GuideModal({ guide, onClose, onNavigate }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-x-4 bottom-4 top-auto sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-md z-50 rounded-3xl overflow-hidden"
        style={{ background: '#0D0927', border: `1px solid ${guide.color}25`, boxShadow: `0 24px 80px ${guide.color}20, 0 0 0 1px ${guide.color}15` }}
      >
        {/* Hero area */}
        <div
          className="relative flex flex-col items-center pt-10 pb-7 px-6"
          style={{ background: `linear-gradient(180deg, ${guide.color}18 0%, transparent 100%)` }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/8 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Avatar */}
          {guide.image ? (
            <img
              src={guide.image}
              alt={guide.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
              style={{ boxShadow: `0 0 0 3px ${guide.color}40, 0 12px 40px ${guide.color}35` }}
            />
          ) : (
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-6xl mb-4"
              style={{ background: guide.color + '18', border: `2px solid ${guide.color}35`, boxShadow: `0 12px 40px ${guide.color}25` }}
            >
              {guide.emoji}
            </div>
          )}

          <h2 className="text-2xl font-semibold text-white mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>
            {guide.name}
          </h2>
          <p className="text-sm" style={{ color: guide.color }}>
            {guide.animal} · {guide.specialty}
          </p>
        </div>

        {/* Lore */}
        <div className="px-6 pb-6">
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {guide.lore}
          </p>

          <button
            onClick={() => { onClose(); onNavigate(guide.subjectId); }}
            className="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${guide.color}ee, ${guide.color}99)`,
              color: '#fff',
              boxShadow: `0 4px 24px ${guide.color}40`,
            }}
          >
            Start Learning with {guide.name}
          </button>
        </div>
      </div>
    </>
  );
}
