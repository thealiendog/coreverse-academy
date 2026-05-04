// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L02 — The Food Plate: Building Balanced Meals
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L02 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-02',
      title:     'The Food Plate: Building Balanced Meals',
      duration:  12,
      xpReward:  50,
      badge:     'plate-builder',
      badgeName: 'Plate Builder',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l02-welcome',
          type:     'welcome',
          guideText: `Welcome back, {name}. Last time we talked about what food actually does inside your body — the chemistry of fuel, repair, and building blocks. Today we're making that practical. Because knowing the science is great, but eventually you have to sit down for a meal. What does a genuinely balanced one look like? How do you make sure your body gets the full range of what it needs — not just once in a while, but most of the time? That's what today is about: a simple, flexible framework for building meals that actually work for you. Ready? Let's build this together.`,
          headline: 'The Food Plate: Building Balanced Meals',
          subtitle: `A simple framework for building meals that give your body everything it needs to feel good`,
          visual:   '/explorer-assets/wellness/l02-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l02-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `The balanced plate`,
            body: `A simple framework for any meal: **fill half your plate with vegetables and fruits** — the more colourful, the better. **Fill one quarter with whole grains or starchy vegetables** — brown rice, whole grain bread, sweet potato, or oats. **Fill one quarter with protein** — chicken, fish, eggs, beans, tofu, or yogurt. Add a small amount of healthy fat — olive oil, avocado, or nuts. Drink water with your meal. This framework works for breakfast, lunch, and dinner — you just adjust the specific foods depending on what you're having. It doesn't have to be exact. The idea is a pattern, not a perfect formula.`,
            image:   '/explorer-assets/wellness/l02-magazine-1.png',
            caption: `Half vegetables and fruit, a quarter whole grains, a quarter protein — a pattern that works for any meal`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l02-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Breakfast — why it matters`,
            body: `Your brain runs on **glucose** — and after eight or more hours of sleep without food, your glucose levels are low. Breakfast replenishes them and gives your brain the fuel it needs to concentrate, learn, and make decisions. Research consistently shows that kids who eat breakfast have better attention spans, better recall, and feel steadier through the morning. A balanced breakfast has **protein** (keeps you full and your energy stable), **whole grain carbohydrates** (quick fuel for your brain), and something nourishing. A breakfast that's mostly sugar gives a quick spike of energy followed by a crash. Eggs and whole grain toast, porridge with fruit, or yogurt with granola give you steady, lasting energy.`,
            image:   '/explorer-assets/wellness/l02-magazine-2.png',
            caption: `Breakfast refuels your brain after the overnight fast — it's the first investment in your day`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l02-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Snacks are part of the picture`,
            body: `Kids' bodies and brains need consistent fuel throughout the day. Snacks aren't cheating — they're part of a balanced eating pattern. The most sustaining snacks combine **protein and fibre**, which work together to keep your blood sugar stable and your energy steady: apple slices with peanut butter, carrots with hummus, cheese with whole grain crackers, yogurt with berries, or a small handful of nuts with a piece of fruit. Snacks that are mostly sugar — a handful of sweets or a sugary juice drink — give a quick energy spike followed by a dip that makes it harder to concentrate. Choosing snacks that keep you steady isn't about restriction — it's just about giving your body what it actually needs to keep going.`,
            image:   '/explorer-assets/wellness/l02-magazine-3.png',
            caption: `Snacks with protein and fibre keep your energy steady — unlike snacks that are mostly sugar`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l02-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Eating without rules`,
            body: `Food is meant to **nourish your body** AND be enjoyed. There are foods you eat most days — vegetables, whole grains, proteins, fruits — that give your body everything it needs to feel its best. And there are foods you enjoy on special occasions — birthday cake, holiday treats, a favourite snack at the cinema. Both belong. A healthy way of eating isn't about perfection or strict rules; it's about a pattern where most of what you eat nourishes you, and everything else can be enjoyed without guilt. The goal isn't to eat perfectly — it's to eat in a way that makes you feel good, most of the time.`,
            image:   '/explorer-assets/wellness/l02-magazine-4.png',
            caption: `Everyday nourishing foods and special occasion treats — both have a place in a healthy way of eating`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match (4 buckets) ─────────────────────────
        {
          id:     'l02-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'veg-fruit',  label: `🥦 Vegetables & Fruit`, color: '#34D399' },
              { id: 'grains',     label: `🌾 Whole Grains`,        color: '#60A5FA' },
              { id: 'protein',    label: `🥚 Protein`,             color: '#F59E0B' },
              { id: 'sometimes',  label: `🎉 Sometimes Foods`,     color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l02-g1',
                image:         'l02-game-1.png',
                label:         `A handful of spinach leaves and some sliced tomato.`,
                correctBucket: 'veg-fruit',
                matchPhrase:   `Vegetables fill the largest section of a balanced plate — full of micronutrients your body needs.`,
              },
              {
                id:            'l02-g2',
                image:         'l02-game-2.png',
                label:         `A portion of brown rice or a slice of whole grain bread.`,
                correctBucket: 'grains',
                matchPhrase:   `Whole grains give your body steady fuel — and the fibre helps keep your blood sugar stable.`,
              },
              {
                id:            'l02-g3',
                image:         'l02-game-3.png',
                label:         `Two boiled eggs or a cupful of beans.`,
                correctBucket: 'protein',
                matchPhrase:   `Protein builds and repairs — it goes in the quarter of your plate dedicated to your body's building material.`,
              },
              {
                id:            'l02-g4',
                image:         'l02-game-4.png',
                label:         `A small piece of cake at a birthday celebration.`,
                correctBucket: 'sometimes',
                matchPhrase:   `Celebration foods are a joyful part of life — they're enjoyed as special-occasion foods, not everyday ones.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l02-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l02-q1',
              format:       'mc',
              question:     `What should fill half of a balanced plate?`,
              options:      [
                `Protein and grains in equal amounts`,
                `Vegetables and fruits`,
                `Carbohydrates for energy`,
                `Whatever you enjoy most`,
              ],
              correctIndex: 1,
              explanation:  `Half the plate for vegetables and fruit — because they're packed with micronutrients, fibre, and water that your body needs in generous amounts. The more colours, the better.`,
            },

            // Q2 — MC (source)
            {
              id:           'l02-q2',
              format:       'mc',
              question:     `Why does a good breakfast matter for learning?`,
              options:      [
                `It gives you energy to run around at recess`,
                `It replenishes brain glucose after hours of sleep, improving concentration and recall through the morning`,
                `It prevents you from getting hungry until dinner`,
                `It helps your body grow taller faster`,
              ],
              correctIndex: 1,
              explanation:  `After a full night of sleep with no food, your brain's glucose levels are low. Breakfast refuels it — which is why kids who eat breakfast consistently show better attention and recall during the morning.`,
            },

            // Q3 — MC (source, option 2 replaced)
            {
              id:           'l02-q3',
              format:       'mc',
              question:     `What makes a snack sustaining rather than causing an energy crash?`,
              options:      [
                `Eating as much as possible to stay full longer`,
                `Combining protein and fibre to keep blood sugar stable`,
                `Choosing snacks with bright colours on the packaging`,
                `Eating sugar for quick energy that lasts all day`,
              ],
              correctIndex: 1,
              explanation:  `Protein and fibre slow digestion and keep blood sugar steady — which means steady energy and focus. Snacks that are mostly sugar spike blood sugar quickly and then let it drop just as fast.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l02-q4',
              format:       'tf',
              question:     `Snacks are a normal and useful part of eating well — they help keep your energy and focus steady throughout the day.`,
              correctAnswer: true,
              explanation:  `True. Kids' bodies and brains need regular fuel — snacking isn't a failure of willpower, it's how your body works. A well-chosen snack mid-morning or mid-afternoon keeps your blood sugar stable and your focus sharp.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l02-q5',
              format:       'fill-blank',
              question:     `A balanced breakfast gives your brain the ___ it needs to concentrate, learn, and make decisions after a night of sleep.`,
              options:      ['fuel', 'rest', 'calcium', 'sugar'],
              correctIndex: 0,
              explanation:  `Your brain runs on glucose — and breakfast is how you replenish it after the overnight fast. A balanced breakfast with protein and whole grains gives your brain steady fuel rather than a quick spike.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l02-q6',
              format:       'mc',
              question:     `What does a healthy relationship with food actually look like?`,
              options:      [
                `Eating only nourishing foods and never having treats`,
                `Eating the same balanced meal at every meal without variation`,
                `Mostly nourishing foods most of the time, with room to enjoy special-occasion foods without guilt`,
                `Tracking every food you eat to make sure nothing unhealthy gets in`,
              ],
              correctIndex: 2,
              explanation:  `A healthy relationship with food is about a pattern — not perfection. Most meals nourishing, with genuine enjoyment of treats when they come around. Both parts belong. Neither cancels the other out.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l02-realworld',
          type: 'real-world',
          content: {
            scenario:    `Balanced Plate Builder`,
            description: `Try adding one new colour to your plate at lunch today — just one. Small changes done consistently make a bigger difference than big changes that don't last.`,
            familyAdventure: `Try building at least one balanced plate meal a day as a family for a week. Take photos and compare at the end — which meals looked most balanced? Did anyone notice a difference in how they felt on those days?`,
            realWorldConnection: `Athletes, doctors, and nutritionists all use the balanced plate as a simple daily framework — not because food has to be complicated, but because the pattern over time is what builds how you feel.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l02-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that a balanced plate gives your body the full range of what it needs to feel good, think clearly, and stay strong through the day. Every good meal is a small act of taking care of yourself. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L02.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L02] Loaded: "The Food Plate: Building Balanced Meals" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l02-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l02-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L02] One or more magazine assets missing'));
}
