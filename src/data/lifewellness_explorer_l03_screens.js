// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L03 — Sugar and Your Body
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L03 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-03',
      title:     'Sugar and Your Body',
      duration:  12,
      xpReward:  50,
      badge:     'sugar-aware',
      badgeName: 'Sugar Aware',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l03-welcome',
          type:     'welcome',
          headline: 'Sugar and Your Body',
          subtitle: `Sugar isn't the enemy — but understanding what it does in your body gives you real power over your own energy`,
          visual:   '/explorer-assets/wellness/l03-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l03-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `Natural vs added sugar`,
            body: `**Natural sugars** are found in whole foods — the sugar in an apple, a mango, or a glass of milk. These come packaged with fibre, vitamins, water, and other nutrients that slow digestion and buffer the sugar's impact on your blood. **Added sugars** are sugars and syrups put into foods during processing — found in fizzy drinks, sweets, biscuits, and most packaged foods. Your body processes them very differently. Natural sugar in fruit arrives with fibre that slows its absorption; added sugar in a fizzy drink hits your bloodstream much faster. Even if the sugar molecules are chemically similar, what they come packaged with makes an enormous difference to how your body experiences them.`,
            image:   '/explorer-assets/wellness/l03-magazine-1.png',
            caption: `Natural sugar comes packaged with fibre and nutrients — added sugar arrives on its own`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l03-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `The blood sugar rollercoaster`,
            body: `When you eat a large amount of added sugar, your blood glucose **spikes rapidly**. Your pancreas releases insulin to manage the spike. Blood sugar then drops quickly — sometimes below where it started — causing a **crash**. You feel tired, irritable, and hungry again. You crave more sugar. The cycle repeats. This blood sugar rollercoaster affects your energy, mood, and ability to concentrate all day. The antidote is simple: eat **protein, fat, and fibre alongside your carbohydrates**. These slow digestion and keep blood sugar steady — giving you consistent energy and a more stable mood rather than peaks and dips.`,
            image:   '/explorer-assets/wellness/l03-magazine-2.png',
            caption: `Spike, crash, crave more — the rollercoaster that protein and fibre can smooth out`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l03-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `What sugar does to your brain`,
            body: `Sugar activates your brain's **reward system** — the same pathways that make enjoyable things feel good. When you eat something sweet, dopamine is released, which creates a pleasant feeling. Over time, the brain can adjust — needing more sweetness to get the same response. Research also links consistently high added sugar consumption to disrupted sleep, reduced attention, and lower mood. Sugar also feeds certain types of bacteria in your gut — and because your gut and brain are closely connected through what's called the **gut-brain axis**, what happens in your gut can affect how you feel emotionally. This doesn't mean sugar is dangerous; it means understanding how it works gives you useful information.`,
            image:   '/explorer-assets/wellness/l03-magazine-3.png',
            caption: `Sugar activates the brain's reward system — and the gut-brain connection means what you eat affects how you feel`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l03-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Reading labels and making smarter choices`,
            body: `Sugar hides under many names on ingredient labels: sucrose, fructose, corn syrup, maltose, dextrose, evaporated cane juice — and dozens more. There's a recommended daily limit on added sugar — and it's smaller than most people realise. The point isn't to count teaspoons; it's to **notice what you're eating and make small swaps where it's easy**. One practical approach: don't try to eliminate sugar completely — that often backfires. Instead, notice your top two or three sources of added sugar and consider whether there's a lower-sugar option you'd actually enjoy. Small, sustainable changes have far more impact than short-lived strict rules.`,
            image:   '/explorer-assets/wellness/l03-magazine-4.png',
            caption: `Sugar hides under many names — noticing where it comes from is the first step`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l03-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'natural', label: `🍎 Natural Sugar (comes with fibre and nutrients)`, color: '#34D399' },
              { id: 'added',   label: `🏷️ Added Sugar (put in during processing)`,         color: '#F59E0B' },
            ],
            items: [
              {
                id:            'l03-g1',
                image:         'l03-game-1.png',
                label:         `The sweetness in a whole apple.`,
                correctBucket: 'natural',
                matchPhrase:   `The sugar in a whole apple comes packaged with fibre and vitamins that slow its absorption — your body handles it very differently.`,
              },
              {
                id:            'l03-g2',
                image:         'l03-game-2.png',
                label:         `The natural sweetness in a glass of plain milk.`,
                correctBucket: 'natural',
                matchPhrase:   `Milk contains natural lactose sugar alongside protein, fat, and calcium — all working together as a whole food.`,
              },
              {
                id:            'l03-g3',
                image:         'l03-game-3.png',
                label:         `The sugar in a can of fizzy lemonade.`,
                correctBucket: 'added',
                matchPhrase:   `Fizzy drinks contain added sugar that hits the bloodstream fast — without any fibre to slow it down.`,
              },
              {
                id:            'l03-g4',
                image:         'l03-game-4.png',
                label:         `The sweetener in a packet of flavoured fruit snack bars.`,
                correctBucket: 'added',
                matchPhrase:   `Packaged flavoured snacks usually contain added sugar put in during processing — even ones that sound fruity or natural.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l03-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l03-q1',
              format:       'mc',
              question:     `What is the difference between natural and added sugar?`,
              options:      [
                `Natural sugar is healthier because it tastes less sweet`,
                `Natural sugar comes in whole foods with fibre and nutrients that slow absorption; added sugar is put into processed foods during manufacturing`,
                `Added sugar comes from fruit; natural sugar is made in a factory`,
                `They are identical and affect the body exactly the same way`,
              ],
              correctIndex: 1,
              explanation:  `Natural sugar in whole foods comes packaged with fibre, vitamins, and water that slow its absorption. Added sugar arrives on its own — hitting your bloodstream much faster and without any of those buffers.`,
            },

            // Q2 — MC (source)
            {
              id:           'l03-q2',
              format:       'mc',
              question:     `What causes the blood sugar crash after eating sugary foods?`,
              options:      [
                `Your stomach empties too quickly after sweet foods`,
                `Insulin rapidly lowers blood glucose after a spike, causing blood sugar to drop below normal levels`,
                `Sugar is toxic and your body tries to remove it quickly`,
                `Your body stores excess sugar as fat, leaving none for energy`,
              ],
              correctIndex: 1,
              explanation:  `When blood sugar spikes after a sugary food, your pancreas releases insulin to bring it back down. That correction can overshoot — dropping blood sugar below where it started — which is what causes the tired, irritable, craving-more feeling of a crash.`,
            },

            // Q3 — MC (replaced stat-recall)
            {
              id:           'l03-q3',
              format:       'mc',
              question:     `What happens in your body after eating a large amount of added sugar?`,
              options:      [
                `Your body absorbs it slowly and you feel calm and steady all day`,
                `Your blood sugar spikes, then your body works to bring it back down — often leaving you tired and wanting more sugar`,
                `It gets stored directly in your muscles as energy for later`,
                `Your brain immediately converts it to focus and alertness`,
              ],
              correctIndex: 1,
              explanation:  `Added sugar without fibre or protein causes a rapid blood sugar spike. Insulin brings it back down — sometimes overshooting — which causes the familiar crash: tiredness, irritability, and cravings for more sugar. Eating protein and fibre alongside carbohydrates smooths this out.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l03-q4',
              format:       'tf',
              question:     `The sugar in a whole apple is processed by your body differently than the same amount of added sugar in a fizzy drink.`,
              correctAnswer: true,
              explanation:  `True. The apple's sugar arrives with fibre, water, and vitamins that slow its absorption significantly. The same sugar molecules in a fizzy drink hit your bloodstream much faster, causing a steeper spike and a quicker drop.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l03-q5',
              format:       'fill-blank',
              question:     `When you eat sugar alongside protein, fat, and fibre, your blood sugar stays more ___ — giving you steadier energy and mood.`,
              options:      ['stable', 'high', 'low', 'fast'],
              correctIndex: 0,
              explanation:  `Protein, fat, and fibre all slow digestion — which slows how quickly sugar enters your bloodstream. That's what keeps your blood sugar stable, your energy steady, and your mood more even throughout the day.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l03-q6',
              format:       'mc',
              question:     `What is one practical way to reduce added sugar without making eating stressful?`,
              options:      [
                `Stop eating all sweet foods completely`,
                `Read every label and avoid any food that contains any sugar at all`,
                `Notice which foods you eat most often that have added sugar, and try swapping one or two for lower-sugar versions`,
                `Replace all sweet drinks with plain water immediately and permanently`,
              ],
              correctIndex: 2,
              explanation:  `Small, sustainable changes work far better than big, sudden restrictions. Noticing where most of your added sugar comes from — and trying one or two swaps — makes a real difference over time without making eating feel like a battle.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l03-realworld',
          type: 'real-world',
          content: {
            scenario:    `Sugar Detective`,
            description: `Next time you drink something sweet, check the label for "Added Sugars." You don't have to stop drinking it — knowing what's in it just gives you more choice.`,
            familyAdventure: `Check the labels on five foods in your kitchen together and find the "Added Sugars" line. Which surprised you most? Which had none? Pick one easy swap to try together this week — not because sugar is bad, but because it's genuinely interesting to know what's in your food.`,
            realWorldConnection: `Understanding what added sugar does in your body is knowledge that doctors, nutritionists, and athletes all use to help themselves and others feel their best. You're learning something genuinely useful here.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l03-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know what added sugar actually does in your body — and that understanding is what gives you real power over your own energy and mood. Knowing what's in your food is the first step to taking good care of yourself. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L03.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L03] Loaded: "Sugar and Your Body" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l03-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L03] One or more magazine assets missing'));
}
