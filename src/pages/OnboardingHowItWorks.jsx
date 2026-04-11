import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const C = '#7C3AED'; // brand purple for all icons

function SproutIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M22 38V22" stroke={C} strokeWidth="2" strokeLinecap="round"/>
      {/* Left leaf */}
      <path d="M22 28 C22 22 16 18 10 20 C10 26 15 30 22 28Z"
        fill={C} fillOpacity="0.2" stroke={C} strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Right leaf */}
      <path d="M22 23 C22 17 28 13 34 15 C34 21 29 25 22 23Z"
        fill={C} fillOpacity="0.2" stroke={C} strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ButterflyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path d="M22 12 Q22.5 22 22 32" stroke={C} strokeWidth="1.8" strokeLinecap="round"/>
      {/* Upper left wing */}
      <path d="M22 17 C17 12 9 13 9 19 C9 24 16 26 22 22"
        fill={C} fillOpacity="0.18" stroke={C} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Lower left wing */}
      <path d="M22 24 C17 23 10 26 11 31 C12 35 18 33 22 29"
        fill={C} fillOpacity="0.12" stroke={C} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Upper right wing */}
      <path d="M22 17 C27 12 35 13 35 19 C35 24 28 26 22 22"
        fill={C} fillOpacity="0.18" stroke={C} strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Lower right wing */}
      <path d="M22 24 C27 23 34 26 33 31 C32 35 26 33 22 29"
        fill={C} fillOpacity="0.12" stroke={C} strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crescent shape */}
      <path d="M26 8 A14 14 0 1 0 26 34 A10 10 0 1 1 26 8 Z"
        fill={C} fillOpacity="0.18" stroke={C} strokeWidth="1.7" strokeLinejoin="round"/>
      {/* Star dots in upper field */}
      <circle cx="30" cy="12" r="1.5" fill={C} fillOpacity="0.8"/>
      <circle cx="34" cy="19" r="1" fill={C} fillOpacity="0.55"/>
      <circle cx="28" cy="7" r="0.9" fill={C} fillOpacity="0.45"/>
    </svg>
  );
}

const CARDS = [
  {
    Icon: SproutIcon,
    title: 'We build your curriculum',
    body: "Tell us about your child and we create a personalized learning plan that meets your state's requirements.",
    accent: '#10B981',
  },
  {
    Icon: ButterflyIcon,
    title: 'Learn with a spirit guide',
    body: "Your child picks a spirit animal companion that guides them through every lesson with personality and encouragement.",
    accent: '#A78BFA',
  },
  {
    Icon: MoonIcon,
    title: 'Family adventures every day',
    body: "Every lesson comes with an offline activity for you and your child to do together.",
    accent: '#60A5FA',
  },
];

export default function OnboardingHowItWorks() {
  const navigate = useNavigate();
  const [card, setCard] = useState(0);
  const current = CARDS[card];
  const isLast = card === CARDS.length - 1;

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden transition-page">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-700"
          style={{ background: current.accent + '12' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-12 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        {/* Card */}
        <div
          className="rounded-3xl p-10 text-center flex flex-col items-center mb-8 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #0F0B2E 0%, #080618 100%)',
            border: `1px solid ${current.accent}25`,
            minHeight: 340,
          }}
        >
          {/* Icon orb */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mb-7 transition-all duration-300"
            style={{ background: current.accent + '15', boxShadow: `0 0 40px ${current.accent}20` }}
          >
            <current.Icon />
          </div>

          <h2
            className="text-2xl font-semibold text-white mb-4 leading-snug"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {current.title}
          </h2>
          <p className="text-white/55 text-base leading-relaxed max-w-xs">
            {current.body}
          </p>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2.5 mb-8">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCard(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === card ? 24 : 8,
                height: 8,
                background: i === card ? '#7C3AED' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>

        {/* Buttons */}
        {isLast ? (
          <div className="flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full"
              onClick={() => navigate('/onboarding/child')}
            >
              Let's Build Your Curriculum
            </Button>
            <Button variant="ghost" size="md" onClick={() => setCard(c => c - 1)}>
              Back
            </Button>
          </div>
        ) : (
          <div className="flex gap-3">
            {card > 0 && (
              <Button variant="secondary" onClick={() => setCard(c => c - 1)}>
                Back
              </Button>
            )}
            <Button size="lg" className="flex-1" onClick={() => setCard(c => c + 1)}>
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
