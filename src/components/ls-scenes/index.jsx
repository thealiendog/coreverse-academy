import GrowingTree      from './GrowingTree';
import SpinningCoins    from './SpinningCoins';
import RainbowPaint     from './RainbowPaint';
import EmotionFaces     from './EmotionFaces';
import CountingStars    from './CountingStars';
import WaterCycle       from './WaterCycle';
import AnimalSounds     from './AnimalSounds';
import FoodPlate        from './FoodPlate';
import DayNight         from './DayNight';
import ShapeBuilder     from './ShapeBuilder';
import MusicBox         from './MusicBox';
import BodyOutline      from './BodyOutline';
import BubblePop        from './BubblePop';
import SeedToFlower     from './SeedToFlower';
import BalanceScale     from './BalanceScale';
import PiggyBank        from './PiggyBank';
import Heartbeat        from './Heartbeat';
import LetterTrace      from './LetterTrace';
import MagnetPull       from './MagnetPull';
import TimerHourglass   from './TimerHourglass';

export const SCENES = {
  GrowingTree,
  SpinningCoins,
  RainbowPaint,
  EmotionFaces,
  CountingStars,
  WaterCycle,
  AnimalSounds,
  FoodPlate,
  DayNight,
  ShapeBuilder,
  MusicBox,
  BodyOutline,
  BubblePop,
  SeedToFlower,
  BalanceScale,
  PiggyBank,
  Heartbeat,
  LetterTrace,
  MagnetPull,
  TimerHourglass,
};

export const SCENE_NAMES = Object.keys(SCENES);

export const SCENE_INSTRUCTIONS = {
  GrowingTree:    'Tap the plant to help it grow!',
  SpinningCoins:  'Tap the coins to collect them!',
  RainbowPaint:   'Tap the colors to paint!',
  EmotionFaces:   'Tap a face to see the feeling!',
  CountingStars:  'Tap the sky to make stars appear!',
  WaterCycle:     'Tap to see how water moves!',
  AnimalSounds:   'Tap an animal to hear it!',
  FoodPlate:      'Tap the food to put it on the plate!',
  DayNight:       'Tap to change the time of day!',
  ShapeBuilder:   'Pick a shape and tap to place it!',
  MusicBox:       'Tap the bars to make music!',
  BodyOutline:    'Tap the right body part!',
  BubblePop:      'Tap the bubbles to pop them!',
  SeedToFlower:   'Help the seed grow into a flower!',
  BalanceScale:   'Add blocks to balance the scale!',
  PiggyBank:      'Tap the falling coins to save them!',
  Heartbeat:      'Tap the heart to make it beat faster!',
  LetterTrace:    'Tap the dots in order to trace the letter!',
  MagnetPull:     'Flip the magnet and see what happens!',
  TimerHourglass: 'Tap the hourglass to flip it!',
};

/**
 * LsSceneFrame — wraps a scene with tap-progress dots (3 taps → advance).
 * Props:
 *   name      — scene key (falls back to BubblePop)
 *   onTap     — called on each tap inside the scene
 *   tapCount  — current tap count (0-3), controlled by parent
 */
export function LsSceneFrame({ name, onTap, tapCount = 0 }) {
  const Component = SCENES[name] || SCENES.BubblePop;
  const displayName = SCENES[name] ? name : 'BubblePop';

  return (
    <div style={{ width: '100%' }}>
      {/* Scene canvas */}
      <div style={{ width: '100%', borderRadius: 20, overflow: 'hidden' }}>
        <Component onTap={onTap} />
      </div>

      {/* 3-dot tap progress */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 12 }}>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            style={{
              width: i < tapCount ? 14 : 10,
              height: i < tapCount ? 14 : 10,
              borderRadius: '50%',
              background: i < tapCount
                ? 'linear-gradient(135deg,#FCD34D,#F59E0B)'
                : 'rgba(255,255,255,0.18)',
              boxShadow: i < tapCount ? '0 0 8px rgba(252,211,77,0.7)' : 'none',
              transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          />
        ))}
      </div>

      {/* Instruction hint */}
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', margin: '6px 0 0', fontWeight: 500 }}>
        {SCENE_INSTRUCTIONS[displayName]}
      </p>
    </div>
  );
}
