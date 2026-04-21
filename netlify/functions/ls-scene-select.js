import Anthropic from '@anthropic-ai/sdk';

const SCENE_NAMES = [
  'GrowingTree', 'SpinningCoins', 'RainbowPaint', 'EmotionFaces',
  'CountingStars', 'WaterCycle', 'AnimalSounds', 'FoodPlate',
  'DayNight', 'ShapeBuilder', 'MusicBox', 'BodyOutline',
  'BubblePop', 'SeedToFlower', 'BalanceScale', 'PiggyBank',
  'Heartbeat', 'LetterTrace', 'MagnetPull', 'TimerHourglass',
];

const SCENE_DESCRIPTIONS = {
  GrowingTree:    'A plant growing through stages — seed, sprout, sapling, full tree. Good for: nature, plants, growth, environment, seasons.',
  SpinningCoins:  'Gold coins floating in space to collect. Good for: money, saving, counting, economics, math.',
  RainbowPaint:   'Colorful blobs to splash and paint. Good for: colors, art, creativity, mixing.',
  EmotionFaces:   'Four SVG faces showing happy, sad, angry, surprised. Good for: emotions, feelings, mental health, social skills.',
  CountingStars:  'A dark sky where tapping places stars. Good for: stars, space, astronomy, counting, night.',
  WaterCycle:     'Sun, evaporation, cloud, rain in sequence. Good for: water, weather, science, rain, clouds.',
  AnimalSounds:   'Bird, dog, cat, fish — each makes a sound. Good for: animals, pets, nature, ocean, farm.',
  FoodPlate:      'Food items to drag onto a plate. Good for: food, nutrition, eating, health, cooking.',
  DayNight:       'Time-of-day transitions: morning, afternoon, sunset, night. Good for: time, schedule, sun, moon, routines.',
  ShapeBuilder:   'Place circles, squares, triangles on a canvas. Good for: shapes, geometry, math, building, design.',
  MusicBox:       'Xylophone bars to tap and make notes. Good for: music, instruments, sound, creativity.',
  BodyOutline:    'SVG body with tap-the-part game. Good for: body, anatomy, health, exercise, science.',
  BubblePop:      'Colorful bubbles floating up to pop. Good for: general fun, default, bubbles, water, celebration.',
  SeedToFlower:   'Seed grows with water and sun into a flower. Good for: plants, growth, gardening, nature, spring.',
  BalanceScale:   'Scale that tilts with weights on each side. Good for: balance, math, comparison, fairness, science.',
  PiggyBank:      'Coins fall from top, tap to catch in piggy bank. Good for: saving, money, goals, math, economics.',
  Heartbeat:      'Heart beating at variable BPM. Good for: health, heart, body, exercise, biology.',
  LetterTrace:    'Trace letters A, B, S by tapping dots. Good for: letters, reading, writing, alphabet, literacy.',
  MagnetPull:     'Two magnets attract/repel with field lines. Good for: magnets, science, physics, attraction, forces.',
  TimerHourglass: 'Sand falling in an hourglass, tap to flip. Good for: time, patience, waiting, routines, counting.',
};

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  let text = '';
  try {
    const body = await req.json();
    text = body?.text || '';
  } catch {
    return new Response(JSON.stringify({ scene: 'BubblePop' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  if (!text.trim()) {
    return new Response(JSON.stringify({ scene: 'BubblePop' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const descriptions = SCENE_NAMES
      .map(n => `- ${n}: ${SCENE_DESCRIPTIONS[n]}`)
      .join('\n');

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 60,
      messages: [
        {
          role: 'user',
          content: `You are picking an interactive scene for a children's lesson (ages 3-5).

Lesson text: "${text}"

Available scenes:
${descriptions}

Reply with ONLY the exact scene name that best matches the lesson content. No explanation. Just the name.`,
        },
      ],
    });

    const raw = response.content?.[0]?.text?.trim() || '';
    const scene = SCENE_NAMES.find(n => n === raw) || 'BubblePop';

    return new Response(JSON.stringify({ scene }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    console.error('ls-scene-select error:', err);
    return new Response(JSON.stringify({ scene: 'BubblePop' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
};

export const config = { path: '/api/ls-scene-select' };
