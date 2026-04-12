// ── Avatars ───────────────────────────────────────────────────────────────────
export const AVATARS = [
  { id: 'nova',  name: 'Nova',  animal: 'Owl',       emoji: '🦉', image: '/avatars/nova.png',  color: '#312E81', accent: '#818CF8', specialty: 'Space & Cosmos' },
  { id: 'sage',  name: 'Sage',  animal: 'Deer',      emoji: '🦌', image: '/avatars/sage.png',  color: '#064E3B', accent: '#34D399', specialty: 'Mindfulness & Nature' },
  { id: 'byte',  name: 'Byte',  animal: 'Fox',       emoji: '🦊', image: '/avatars/byte.png',  color: '#1E3A5F', accent: '#60A5FA', specialty: 'Coding & Technology' },
  { id: 'ace',   name: 'Ace',   animal: 'Eagle',     emoji: '🦅', image: '/avatars/ace.png',   color: '#451A03', accent: '#FCD34D', specialty: 'Adventure & Discovery' },
  { id: 'muse',  name: 'Muse',  animal: 'Butterfly', emoji: '🦋', image: '/avatars/muse.png',  color: '#4A044E', accent: '#E879F9', specialty: 'Arts & Creativity' },
  { id: 'valor', name: 'Valor', animal: 'Lion',      emoji: '🦁', image: '/avatars/valor.png', color: '#450A0A', accent: '#FCA5A5', specialty: 'Bravery & Leadership' },
  { id: 'terra', name: 'Terra', animal: 'Wolf',      emoji: '🐺', image: '/avatars/terra.png', color: '#14532D', accent: '#86EFAC', specialty: 'Nature & Environment' },
  { id: 'lyra',  name: 'Lyra',  animal: 'Elephant',  emoji: '🐘', image: '/avatars/lyra.png',  color: '#1C1917', accent: '#FDE68A', specialty: 'History & Stories' },
];

export function getAvatar(id) {
  return AVATARS.find(a => a.id === id) || AVATARS[0];
}

// ── Age Bands ─────────────────────────────────────────────────────────────────
export const AGE_BANDS = [
  { id: 'little-stars',    label: 'Little Stars',    shortLabel: 'Little Star',    ages: '3–5',   level: 1 },
  { id: 'explorers',       label: 'Explorers',       shortLabel: 'Explorer',       ages: '6–8',   level: 2 },
  { id: 'upper-explorers', label: 'Upper Explorers', shortLabel: 'Upper Explorer', ages: '9–10',  level: 3 },
  { id: 'voyagers',        label: 'Voyagers',        shortLabel: 'Voyager',        ages: '11–12', level: 4 },
];

export function ageToAgeBand(age) {
  const n = parseInt(age, 10) || 8;
  if (n <= 5)  return AGE_BANDS[0];
  if (n <= 8)  return AGE_BANDS[1];
  if (n <= 10) return AGE_BANDS[2];
  return AGE_BANDS[3];
}

// ── Subjects ─────────────────────────────────────────────────────────────────
export const SUBJECTS = [
  { id: 'inner-world',   label: 'Inner World & Consciousness', icon: '🌿', color: '#10B981', lessons: ['Breathing & Meditation', 'Self-Love & Confidence', 'Consciousness & Awareness'] },
  { id: 'cosmos',        label: 'Cosmos & Science',            icon: '🔭', color: '#6366F1', lessons: ['Our Solar System', 'Biology & Living Things', 'Earth & Geology'] },
  { id: 'math',          label: 'Mathematics',                 icon: '🔢', color: '#8B5CF6', lessons: ['Patterns & Numbers', 'Multiplication Magic', 'Fractions Are Fun'] },
  { id: 'language-arts', label: 'Language Arts',               icon: '📖', color: '#F59E0B', lessons: ['Reading Comprehension', 'Creative Writing', 'Grammar Basics'] },
  { id: 'history',       label: 'History & World',             icon: '🗺️', color: '#D97706', lessons: ['Ancient Civilizations', 'World Cultures', 'US History'] },
  { id: 'future-skills', label: 'Future Skills',               icon: '🚀', color: '#3B82F6', lessons: ['What Is AI?', 'Coding Basics', 'Building With Technology'] },
  { id: 'money',         label: 'Money & Business',            icon: '💡', color: '#FCD34D', lessons: ['What Is Money?', 'Saving vs Spending', 'Your First Business'] },
  { id: 'creative-arts', label: 'Creative Arts',               icon: '🎨', color: '#E879F9', lessons: ['Drawing & Color', 'Music & Rhythm', 'Film & Photography'] },
  { id: 'wellness',      label: 'Life & Wellness',             icon: '🌱', color: '#86EFAC', lessons: ['Healthy Food & Cooking', 'Movement & Exercise', 'Gardening & Nature'] },
  { id: 'leadership',    label: 'Social & Leadership',         icon: '🤝', color: '#FCA5A5', lessons: ['Communication Skills', 'Team Building', 'Public Speaking'] },
  { id: 'languages',     label: 'Languages (Spanish)',         icon: '🌎', color: '#34D399', lessons: ['Hola! Greetings', 'Colors & Numbers', 'My Family in Spanish'] },
  { id: 'frontier',      label: 'Frontier & Philosophy',       icon: '✨', color: '#A78BFA', lessons: ['Big Questions', 'Quantum World', 'Ancient Wisdom & Lost History'] },
];

export function getSubject(id) {
  return SUBJECTS.find(s => s.id === id) || SUBJECTS[0];
}

// ── US States ─────────────────────────────────────────────────────────────────
export const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

// ── State Compliance Data ─────────────────────────────────────────────────────
export const STATE_COMPLIANCE = {
  California: {
    level: 'Moderate',
    notification: 'File a Private School Affidavit (PSA) annually by October 15.',
    testing: 'No state-mandated testing required.',
    subjects: ['English/Language Arts', 'Math', 'Social Studies', 'Science', 'Fine Arts', 'Health'],
    notes: 'Parents must hold a teaching credential OR file as a private school (most common route). Keep attendance records.',
    color: '#F59E0B',
  },
  Texas: {
    level: 'Low',
    notification: 'No notification required. Homeschool is treated as a private school.',
    testing: 'No state-mandated testing required.',
    subjects: ['Reading', 'Spelling', 'Grammar', 'Math', 'Good Citizenship'],
    notes: 'Texas has some of the most homeschool-friendly laws in the nation. Curriculum must be in visual format.',
    color: '#10B981',
  },
  Florida: {
    level: 'Moderate',
    notification: 'File a Notice of Intent with the district school superintendent within 30 days of starting.',
    testing: 'Annual evaluation required: standardized test, portfolio review, or certified teacher evaluation.',
    subjects: ['Sequentially progressive curriculum in all subjects'],
    notes: 'Must maintain a portfolio of work. Annual evaluation must be submitted to the school district.',
    color: '#F59E0B',
  },
  'New York': {
    level: 'High',
    notification: 'Submit an Annual Notice of Intent by July 1 (or within 14 days of starting).',
    testing: 'Standardized testing in grades 4, 8; annual assessments otherwise.',
    subjects: ['Arithmetic','Reading','Spelling','Writing','English','Geography','US History','Science','Health','Music','Visual Arts','Physical Education'],
    notes: 'Must submit Individualized Home Instruction Plan (IHIP). Quarterly reports and annual assessment required.',
    color: '#EF4444',
  },
  Virginia: {
    level: 'Moderate',
    notification: 'Notify your local school division by August 15 each year.',
    testing: 'Annual assessment required (standardized test or portfolio).',
    subjects: ['Core academic subjects'],
    notes: 'Parent must hold a baccalaureate degree, OR use an approved correspondence course, OR demonstrate ability to provide an adequate education.',
    color: '#F59E0B',
  },
};

// ── Grade Levels ──────────────────────────────────────────────────────────────
export const GRADE_LEVELS = [
  'Pre-K','Kindergarten','1st Grade','2nd Grade','3rd Grade','4th Grade',
  '5th Grade','6th Grade','7th Grade','8th Grade','9th Grade','10th Grade',
  '11th Grade','12th Grade',
];
