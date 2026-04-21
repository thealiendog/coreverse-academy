/**
 * LsVisuals — animated visual illustrations for Little Stars (ages 3-5)
 * Each component shows after a guide reads a sentence pair.
 * Parent passes onTap() which it uses to count taps (3+ → advance).
 * Pure CSS/SVG/emoji — no external assets.
 */

import { useState, useCallback } from 'react';

// ── Web Audio utilities ───────────────────────────────────────────────────────
function tone(freq, dur, type = 'sine', vol = 0.18) {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(); osc.stop(ctx.currentTime + dur + 0.05);
  } catch { /* no audio context */ }
}

const sfx = {
  clink:  () => { tone(2200, 0.10, 'triangle', 0.14); setTimeout(() => tone(1800, 0.08, 'triangle', 0.08), 45); },
  count:  (n) => tone([262, 294, 330, 349, 392, 440, 494, 523][(n - 1) % 8], 0.22),
  pop:    () => tone(620, 0.07, 'square', 0.14),
  chime:  () => { tone(880, 0.18); setTimeout(() => tone(1100, 0.15, 'sine', 0.10), 115); },
  whoosh: () => {
    try {
      const ctx  = new (window.AudioContext || window.webkitAudioContext)();
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(720, ctx.currentTime + 0.38);
      gain.gain.setValueAtTime(0.16, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.38);
      osc.start(); osc.stop(ctx.currentTime + 0.42);
    } catch {}
  },
  animal: (i) => {
    const freqs = [220, 330, 440, 165]; // dog-ish, cat-ish, bird-ish, frog-ish
    tone(freqs[i % 4], 0.22, i % 2 === 0 ? 'sawtooth' : 'sine', 0.14);
  },
};

// ── Keyword detection ─────────────────────────────────────────────────────────
const KEYWORD_MAP = [
  ['CoinAnimation',   ['money','coin','coins','dollar','penny','nickel','dime','quarter','cents','price','buy','spend','save','wallet','piggy bank','earn']],
  ['CountingObjects', ['count','counting','number','numbers','how many','one','two','three','four','five','six','seven','eight','nine','ten','add','adding','subtract','total','sum','math','plus','equal']],
  ['EmojiFaces',      ['happy','sad','angry','scared','feelings','emotions','emotion','feel','feeling','joy','fear','worry','excited','surprised','frustrated','upset','nervous','calm','mad','afraid']],
  ['GrowingPlant',    ['grow','plant','seed','garden','tree','flower','soil','root','leaf','leaves','nature','sprout','water the','sunlight','photosynthesis']],
  ['WeatherScene',    ['weather','cloud','clouds','rain','rainbow','season','seasons','hot','cold','wind','snow','storm','temperature','forecast','sunny','rainy','thunderstorm']],
  ['AnimalParade',    ['animal','animals','dog','cat','bird','fish','bear','lion','elephant','rabbit','duck','frog','horse','cow','pig','sheep','tiger','monkey','penguin','owl','wildlife','pet','farm']],
  ['ColorPicker',     ['color','colors','red','blue','yellow','green','purple','orange','pink','white','black','rainbow','bright','colorful','paint','crayon','hue','shade']],
  ['ShapeMatcher',    ['shape','shapes','circle','square','triangle','rectangle','oval','diamond','heart','round','sides','corners','edges','geometry','polygon']],
  ['BodyParts',       ['body','hands','hand','feet','foot','head','eyes','eye','ears','ear','nose','mouth','arms','arm','legs','leg','skin','bones','fingers','toes','heart','lungs','muscles']],
  ['FoodItems',       ['food','eat','fruit','apple','banana','vegetable','vegetables','healthy','meal','breakfast','lunch','dinner','snack','hungry','nutrition','vitamin','carrot','orange','grape','strawberry','broccoli']],
  ['MusicNotes',      ['music','song','sing','rhythm','dance','beat','sound','instrument','piano','drum','guitar','note','melody','tune','play music','lyrics']],
  ['StarField',       ['star','stars','space','night sky','moon','planet','galaxy','universe','telescope','astronaut','rocket','comet','solar system','constellation']],
];

export function detectVisual(text) {
  if (!text) return 'SparkleField';
  const lower = text.toLowerCase();
  for (const [name, keywords] of KEYWORD_MAP) {
    if (keywords.some(k => lower.includes(k))) return name;
  }
  return 'SparkleField';
}

export const VISUAL_INSTRUCTIONS = {
  CoinAnimation:   'Tap the coins! 💰',
  CountingObjects: 'Count with me! ⭐',
  EmojiFaces:      'Tap a feeling! 😊',
  GrowingPlant:    'Help it grow! 🌱',
  WeatherScene:    'Change the weather! ☀️',
  AnimalParade:    'Say hi to the animals! 🐾',
  ColorPicker:     'Tap your favorite color! 🎨',
  ShapeMatcher:    'Find the shapes! 🔷',
  BodyParts:       'Point to each part! 🙌',
  FoodItems:       'Eat the healthy foods! 🍎',
  MusicNotes:      'Make some music! 🎵',
  StarField:       'Light up the stars! ⭐',
  SparkleField:    'Tap for magic! ✨',
};

// ── Shared container ──────────────────────────────────────────────────────────
function VisualBox({ children, bg = 'rgba(255,255,255,0.04)', border = 'rgba(255,255,255,0.10)' }) {
  return (
    <div style={{
      width: '100%', minHeight: 190,
      borderRadius: 20,
      background: bg,
      border: `1.5px solid ${border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', position: 'relative', padding: '16px 12px',
    }}>
      {children}
    </div>
  );
}

// ── 1. CoinAnimation ──────────────────────────────────────────────────────────
function CoinAnimation({ onTap }) {
  const [bouncing, setBouncing] = useState([false, false, false]);
  const coins = ['🪙', '💰', '💵'];

  function tap(i) {
    sfx.clink();
    onTap();
    setBouncing(b => b.map((v, j) => (j === i ? true : v)));
    setTimeout(() => setBouncing(b => b.map((v, j) => (j === i ? false : v))), 480);
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(245,158,11,0.10), rgba(253,211,77,0.06))" border="rgba(245,158,11,0.35)">
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {coins.map((c, i) => (
          <button
            key={i}
            onClick={() => tap(i)}
            style={{
              width: 86, height: 86, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, #F59E0B 0%, #FDE68A 45%, #D97706 100%)',
              boxShadow: bouncing[i]
                ? '0 12px 36px rgba(245,158,11,0.75), 0 0 0 4px rgba(253,211,77,0.35)'
                : '0 4px 18px rgba(245,158,11,0.40)',
              fontSize: '2.6rem', lineHeight: 1,
              transform: bouncing[i] ? 'translateY(-22px) scale(1.25) rotate(15deg)' : 'translateY(0) scale(1)',
              transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease',
              animation: `ls-coin-wobble ${2 + i * 0.4}s ease-in-out ${i * 0.35}s infinite`,
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 2. CountingObjects ────────────────────────────────────────────────────────
function CountingObjects({ onTap }) {
  const [lit, setLit] = useState(0); // how many are highlighted
  const items = ['🍎', '🍎', '🍎', '🍎', '🍎'];

  function tap() {
    sfx.count(lit + 1);
    onTap();
    setLit(n => Math.min(n + 1, items.length));
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(16,185,129,0.10), rgba(110,231,183,0.05))" border="rgba(16,185,129,0.30)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {items.map((item, i) => (
            <button
              key={i}
              onClick={tap}
              style={{
                width: 64, height: 64, borderRadius: 16, border: 'none', cursor: 'pointer',
                fontSize: '2.2rem', lineHeight: 1,
                background: i < lit ? 'rgba(16,185,129,0.22)' : 'rgba(255,255,255,0.06)',
                boxShadow: i < lit ? '0 0 18px rgba(16,185,129,0.45)' : 'none',
                transform: i < lit ? 'scale(1.18)' : 'scale(0.92)',
                transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                border: i < lit ? '2px solid rgba(16,185,129,0.60)' : '2px solid rgba(255,255,255,0.08)',
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div style={{
          fontSize: '2rem', fontWeight: 700, color: lit > 0 ? '#6EE7B7' : 'rgba(255,255,255,0.25)',
          transition: 'color 0.2s ease', minHeight: 40,
        }}>
          {lit > 0 ? `${lit}!` : 'Tap to count →'}
        </div>
      </div>
    </VisualBox>
  );
}

// ── 3. EmojiFaces ─────────────────────────────────────────────────────────────
function EmojiFaces({ onTap }) {
  const [active, setActive] = useState(null);
  const faces = [
    { e: '😊', label: 'Happy!',    color: '#FCD34D' },
    { e: '😢', label: 'Sad',       color: '#60A5FA' },
    { e: '😠', label: 'Angry!',    color: '#F87171' },
    { e: '😮', label: 'Surprised!',color: '#C4B5FD' },
  ];

  function tap(i) {
    sfx.chime();
    onTap();
    setActive(i);
    setTimeout(() => setActive(null), 900);
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(124,58,237,0.10), rgba(167,139,250,0.05))" border="rgba(124,58,237,0.28)">
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        {faces.map((f, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <button
              onClick={() => tap(i)}
              style={{
                width: 78, height: 78, borderRadius: '50%', border: 'none', cursor: 'pointer',
                fontSize: '3rem', lineHeight: 1,
                background: active === i ? `${f.color}30` : 'rgba(255,255,255,0.06)',
                boxShadow: active === i ? `0 0 28px ${f.color}60` : 'none',
                transform: active === i ? 'scale(1.28)' : 'scale(1)',
                transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {f.e}
            </button>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700,
              color: active === i ? f.color : 'rgba(255,255,255,0.30)',
              transition: 'color 0.2s ease',
            }}>
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 4. GrowingPlant ───────────────────────────────────────────────────────────
function GrowingPlant({ onTap }) {
  const [stage, setStage] = useState(0); // 0=seed, 1=sprout, 2=plant, 3=bloom
  const stages = [
    { e: '🌱', label: 'A tiny seed…', size: 48 },
    { e: '🌿', label: 'A little sprout!', size: 64 },
    { e: '🌳', label: 'Growing tall!', size: 80 },
    { e: '🌸', label: 'In full bloom!', size: 88 },
  ];

  function tap() {
    sfx.whoosh();
    onTap();
    setStage(s => Math.min(s + 1, stages.length - 1));
  }

  const current = stages[stage];

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))" border="rgba(16,185,129,0.32)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <button
          onClick={tap}
          style={{
            width: 120, height: 120, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: 'rgba(16,185,129,0.12)',
            boxShadow: '0 0 32px rgba(16,185,129,0.30)',
            fontSize: current.size, lineHeight: 1,
            transition: 'font-size 0.4s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {current.e}
        </button>
        <p style={{ color: '#6EE7B7', fontWeight: 700, fontSize: '0.95rem' }}>{current.label}</p>
        {stage < stages.length - 1 && (
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>Tap to grow! →</p>
        )}
      </div>
    </VisualBox>
  );
}

// ── 5. WeatherScene ───────────────────────────────────────────────────────────
function WeatherScene({ onTap }) {
  const [weather, setWeather] = useState(0); // 0=sunny, 1=cloudy, 2=rainy
  const scenes = [
    { sky: '#FCD34D', icon: '☀️', label: 'Sunny!',  drops: [] },
    { sky: '#93C5FD', icon: '⛅', label: 'Cloudy!', drops: [] },
    { sky: '#6B7280', icon: '🌧️', label: 'Rainy!',  drops: ['💧','💧','💧','💧','💧'] },
  ];

  function tap() {
    sfx.pop();
    onTap();
    setWeather(w => (w + 1) % scenes.length);
  }

  const current = scenes[weather];

  return (
    <VisualBox bg={`${current.sky}18`} border={`${current.sky}50`}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <button
          onClick={tap}
          style={{
            width: 110, height: 110, borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: `${current.sky}25`,
            boxShadow: `0 0 40px ${current.sky}55`,
            fontSize: '4rem', lineHeight: 1,
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {current.icon}
        </button>
        {current.drops.length > 0 && (
          <div style={{ display: 'flex', gap: 8 }}>
            {current.drops.map((d, i) => (
              <span key={i} style={{
                fontSize: '1.2rem',
                animation: `ls-rain-fall 0.8s ease-in ${i * 0.12}s infinite`,
              }}>
                {d}
              </span>
            ))}
          </div>
        )}
        <p style={{ color: 'rgba(255,255,255,0.70)', fontWeight: 700, fontSize: '1rem' }}>
          {current.label}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>Tap to change →</p>
      </div>
    </VisualBox>
  );
}

// ── 6. AnimalParade ───────────────────────────────────────────────────────────
function AnimalParade({ onTap }) {
  const [active, setActive] = useState(null);
  const animals = [
    { e: '🐶', name: 'Dog!' },
    { e: '🐱', name: 'Cat!' },
    { e: '🐸', name: 'Frog!' },
    { e: '🐦', name: 'Bird!' },
  ];

  function tap(i) {
    sfx.animal(i);
    onTap();
    setActive(i);
    setTimeout(() => setActive(null), 700);
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(251,191,36,0.10), rgba(217,119,6,0.05))" border="rgba(251,191,36,0.28)">
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', justifyContent: 'center' }}>
        {animals.map((a, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <button
              onClick={() => tap(i)}
              style={{
                width: 76, height: 76, borderRadius: 18, border: 'none', cursor: 'pointer',
                fontSize: '2.8rem', lineHeight: 1,
                background: active === i ? 'rgba(251,191,36,0.22)' : 'rgba(255,255,255,0.06)',
                boxShadow: active === i ? '0 0 24px rgba(251,191,36,0.50)' : 'none',
                transform: active === i ? 'scale(1.25) translateY(-10px)' : 'scale(1)',
                transition: 'all 0.24s cubic-bezier(0.16,1,0.3,1)',
                animation: active !== i ? `ls-walk-right ${1.5 + i * 0.2}s ease-in-out ${i * 0.22}s infinite` : 'none',
              }}
            >
              {a.e}
            </button>
            <span style={{
              fontSize: '0.72rem', fontWeight: 700,
              color: active === i ? '#FCD34D' : 'rgba(255,255,255,0.28)',
              transition: 'color 0.2s ease',
            }}>
              {a.name}
            </span>
          </div>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 7. ColorPicker ────────────────────────────────────────────────────────────
function ColorPicker({ onTap }) {
  const [splashing, setSplashing] = useState(null);
  const colors = [
    { hex: '#EF4444', name: 'Red' },
    { hex: '#3B82F6', name: 'Blue' },
    { hex: '#EAB308', name: 'Yellow' },
    { hex: '#22C55E', name: 'Green' },
    { hex: '#A855F7', name: 'Purple' },
    { hex: '#F97316', name: 'Orange' },
  ];

  function tap(i) {
    sfx.chime();
    onTap();
    setSplashing(i);
    setTimeout(() => setSplashing(null), 500);
  }

  return (
    <VisualBox>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 280 }}>
        {colors.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <button
              onClick={() => tap(i)}
              style={{
                width: 66, height: 66, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: c.hex,
                boxShadow: splashing === i
                  ? `0 0 0 8px ${c.hex}40, 0 0 32px ${c.hex}70`
                  : `0 4px 14px ${c.hex}50`,
                transform: splashing === i ? 'scale(1.35)' : 'scale(1)',
                transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                animation: splashing === i ? 'ls-color-splash 0.5s ease-out' : 'none',
              }}
            />
            <span style={{ fontSize: '0.68rem', color: splashing === i ? c.hex : 'rgba(255,255,255,0.28)', fontWeight: 600, transition: 'color 0.2s' }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 8. ShapeMatcher ───────────────────────────────────────────────────────────
function ShapeMatcher({ onTap }) {
  const [tapped, setTapped] = useState([false, false, false, false]);
  const shapes = [
    { svg: <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4"/>, name: 'Circle',   color: '#60A5FA' },
    { svg: <rect x="6"  y="6"  width="52" height="52" fill="none" stroke="currentColor" strokeWidth="4"/>, name: 'Square',   color: '#F472B6' },
    { svg: <polygon points="32,5 59,57 5,57" fill="none" stroke="currentColor" strokeWidth="4"/>, name: 'Triangle', color: '#34D399' },
    { svg: <rect x="8"  y="18" width="48" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="4"/>, name: 'Rectangle', color: '#FCD34D' },
  ];

  function tap(i) {
    sfx.pop();
    onTap();
    setTapped(t => t.map((v, j) => (j === i ? true : v)));
  }

  return (
    <VisualBox>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        {shapes.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <button
              onClick={() => tap(i)}
              style={{
                width: 72, height: 72, borderRadius: 16, border: 'none', cursor: 'pointer',
                background: tapped[i] ? `${s.color}22` : 'rgba(255,255,255,0.05)',
                boxShadow: tapped[i] ? `0 0 24px ${s.color}50` : 'none',
                color: tapped[i] ? s.color : 'rgba(255,255,255,0.35)',
                transform: tapped[i] ? 'scale(1.18)' : 'scale(1)',
                transition: 'all 0.24s cubic-bezier(0.16,1,0.3,1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="64" height="64" viewBox="0 0 64 64">{s.svg}</svg>
            </button>
            <span style={{ fontSize: '0.70rem', fontWeight: 600, color: tapped[i] ? s.color : 'rgba(255,255,255,0.28)', transition: 'color 0.2s' }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 9. BodyParts ─────────────────────────────────────────────────────────────
function BodyParts({ onTap }) {
  const [active, setActive] = useState(null);
  const parts = [
    { e: '👁️',  name: 'Eyes!',  color: '#60A5FA' },
    { e: '👃',  name: 'Nose!',  color: '#FCD34D' },
    { e: '👂',  name: 'Ears!',  color: '#F87171' },
    { e: '🙌',  name: 'Hands!', color: '#34D399' },
    { e: '🦵',  name: 'Legs!',  color: '#C4B5FD' },
  ];

  function tap(i) {
    sfx.chime();
    onTap();
    setActive(i);
    setTimeout(() => setActive(null), 700);
  }

  return (
    <VisualBox>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {parts.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <button
              onClick={() => tap(i)}
              style={{
                width: 68, height: 68, borderRadius: '50%', border: 'none', cursor: 'pointer',
                fontSize: '2.4rem', lineHeight: 1,
                background: active === i ? `${p.color}25` : 'rgba(255,255,255,0.06)',
                boxShadow: active === i ? `0 0 22px ${p.color}55` : 'none',
                transform: active === i ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {p.e}
            </button>
            <span style={{ fontSize: '0.70rem', fontWeight: 600, color: active === i ? p.color : 'rgba(255,255,255,0.28)', transition: 'color 0.2s' }}>
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 10. FoodItems ─────────────────────────────────────────────────────────────
function FoodItems({ onTap }) {
  const [eaten, setEaten] = useState([false, false, false, false, false]);
  const foods = ['🍎', '🍌', '🥦', '🍊', '🍇'];

  function eat(i) {
    if (eaten[i]) return;
    sfx.pop();
    onTap();
    setEaten(e => e.map((v, j) => (j === i ? true : v)));
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(16,185,129,0.08), rgba(5,150,105,0.04))" border="rgba(16,185,129,0.25)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {foods.map((f, i) => (
            <button
              key={i}
              onClick={() => eat(i)}
              style={{
                width: 66, height: 66, borderRadius: 16, border: 'none', cursor: eaten[i] ? 'default' : 'pointer',
                fontSize: '2.4rem', lineHeight: 1,
                background: 'rgba(255,255,255,0.06)',
                transform: eaten[i] ? 'scale(0)' : 'scale(1)',
                opacity: eaten[i] ? 0 : 1,
                animation: eaten[i] ? 'ls-food-eat 0.55s ease-out forwards' : 'none',
                transition: eaten[i] ? 'none' : 'transform 0.15s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <p style={{ fontSize: '0.85rem', color: '#6EE7B7', fontWeight: 600 }}>
          {eaten.filter(Boolean).length === foods.length ? '🎉 Yum! All done!' : `${eaten.filter(Boolean).length} eaten!`}
        </p>
      </div>
    </VisualBox>
  );
}

// ── 11. MusicNotes ────────────────────────────────────────────────────────────
function MusicNotes({ onTap }) {
  const [playing, setPlaying] = useState([false, false, false, false]);
  const notes = ['🎵', '🎶', '🎵', '🎶'];
  const freqs  = [262, 330, 392, 523];
  const offsets = [0, -18, 8, -12]; // vertical offsets for variety

  function tap(i) {
    tone(freqs[i], 0.35);
    onTap();
    setPlaying(p => p.map((v, j) => (j === i ? true : v)));
    setTimeout(() => setPlaying(p => p.map((v, j) => (j === i ? false : v))), 500);
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(124,58,237,0.12), rgba(139,92,246,0.06))" border="rgba(124,58,237,0.30)">
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', paddingTop: 16 }}>
        {notes.map((n, i) => (
          <button
            key={i}
            onClick={() => tap(i)}
            style={{
              width: 72, height: 72, borderRadius: '50%', border: 'none', cursor: 'pointer',
              fontSize: '2.6rem', lineHeight: 1,
              background: playing[i] ? 'rgba(124,58,237,0.28)' : 'rgba(255,255,255,0.06)',
              boxShadow: playing[i] ? '0 0 28px rgba(124,58,237,0.65)' : 'none',
              transform: `translateY(${offsets[i]}px) ${playing[i] ? 'scale(1.3)' : 'scale(1)'}`,
              transition: 'transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s ease',
              animation: playing[i] ? 'none' : `ls-note-bounce ${1.4 + i * 0.25}s ease-in-out ${i * 0.18}s infinite`,
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </VisualBox>
  );
}

// ── 12. StarField ─────────────────────────────────────────────────────────────
function StarField({ onTap }) {
  const [lit, setLit] = useState(Array(9).fill(false));
  const positions = [
    [15, 20], [50, 10], [82, 22],
    [28, 52], [58, 48], [78, 58],
    [10, 76], [45, 80], [80, 74],
  ];

  function tap(i) {
    sfx.chime();
    onTap();
    setLit(l => l.map((v, j) => (j === i ? true : v)));
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(30,27,75,0.60), rgba(15,11,46,0.80))" border="rgba(124,58,237,0.28)">
      <div style={{ position: 'relative', width: '100%', height: 170 }}>
        {positions.map(([x, y], i) => (
          <button
            key={i}
            onClick={() => tap(i)}
            style={{
              position: 'absolute',
              left: `${x}%`, top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: 48, height: 48, borderRadius: '50%',
              border: 'none', cursor: 'pointer',
              fontSize: lit[i] ? '2.2rem' : '1.4rem',
              background: 'transparent',
              filter: lit[i] ? 'drop-shadow(0 0 8px #FCD34D)' : 'none',
              transition: 'font-size 0.25s cubic-bezier(0.16,1,0.3,1), filter 0.25s ease',
              animation: lit[i] ? 'none' : `ls-twinkle ${1.8 + (i % 3) * 0.4}s ease-in-out ${i * 0.2}s infinite`,
            }}
          >
            {lit[i] ? '⭐' : '✦'}
          </button>
        ))}
      </div>
    </VisualBox>
  );
}

// ── Default: SparkleField ─────────────────────────────────────────────────────
function SparkleField({ onTap }) {
  const [sparks, setSparks] = useState([]);

  function handleTap(e) {
    sfx.pop();
    onTap();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    const id = Date.now();
    setSparks(s => [...s.slice(-8), { id, x, y }]);
    setTimeout(() => setSparks(s => s.filter(sp => sp.id !== id)), 900);
  }

  return (
    <VisualBox bg="linear-gradient(145deg, rgba(124,58,237,0.10), rgba(76,29,149,0.06))" border="rgba(124,58,237,0.25)">
      <button
        onClick={handleTap}
        style={{
          position: 'absolute', inset: 0, background: 'transparent', border: 'none',
          cursor: 'pointer', width: '100%', height: '100%', borderRadius: 20,
        }}
      />
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        pointerEvents: 'none', zIndex: 2,
      }}>
        <span style={{ fontSize: '3.5rem' }}>✨</span>
        <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '0.85rem', fontWeight: 600 }}>Tap anywhere for magic!</p>
      </div>
      {sparks.map(sp => (
        <span
          key={sp.id}
          style={{
            position: 'absolute',
            left: `${sp.x}%`, top: `${sp.y}%`,
            fontSize: '1.8rem', pointerEvents: 'none', zIndex: 10,
            animation: 'ls-sparkle-pop 0.85s ease-out forwards',
            transform: 'translate(-50%, -50%)',
          }}
        >
          ✨
        </span>
      ))}
    </VisualBox>
  );
}

// ── Component registry ────────────────────────────────────────────────────────
const VISUALS = {
  CoinAnimation, CountingObjects, EmojiFaces,
  GrowingPlant,  WeatherScene,    AnimalParade,
  ColorPicker,   ShapeMatcher,    BodyParts,
  FoodItems,     MusicNotes,      StarField,
  SparkleField,
};

// ── Public frame component ────────────────────────────────────────────────────
export function LsVisualFrame({ name, onTap, tapCount }) {
  const Component = VISUALS[name] || VISUALS.SparkleField;
  const maxTaps = 3;
  const pct = Math.min((tapCount / maxTaps) * 100, 100);

  return (
    <div style={{ width: '100%' }}>
      <Component onTap={onTap} tapCount={tapCount} />
      {/* Tap progress dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
        {Array.from({ length: maxTaps }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 10, height: 10, borderRadius: '50%',
              background: i < tapCount ? '#A78BFA' : 'rgba(255,255,255,0.15)',
              boxShadow: i < tapCount ? '0 0 8px rgba(167,139,250,0.70)' : 'none',
              transition: 'background 0.2s ease, box-shadow 0.2s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
