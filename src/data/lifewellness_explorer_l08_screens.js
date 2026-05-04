// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L08 — Hydration: Your Body is Mostly Water
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L08 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-08',
      title:     'Hydration: Your Body is Mostly Water',
      duration:  12,
      xpReward:  50,
      badge:     'hydration-hero',
      badgeName: 'Hydration Hero',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l07-welcome',
          type:     'welcome',
          guideText: `Here's something that surprises most people, {name}: your body is roughly sixty percent water. Your brain is closer to seventy-five. And water isn't just sitting there passively — it's involved in every single process your body runs. Digestion. Temperature regulation. Getting nutrients to your cells. Flushing out waste. Even your mood and your ability to concentrate. When you're even slightly dehydrated, you feel it — even if you don't recognise that's what it is. Today we're going to look at what hydration actually does and why something this simple can make such a measurable difference to how you feel every day.`,
          headline: 'Hydration: Your Body is Mostly Water',
          subtitle: `Water is involved in every single process your body runs — and staying well hydrated is one of the simplest things you can do to feel your best`,
          visual:   '/explorer-assets/wellness/l08-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l08-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What water does in your body`,
            body: `About **60% of your body is water**. Your brain is approximately 75% water. Your blood is around 83% water. Water is involved in everything: it **transports nutrients and oxygen** to your cells, **removes waste products** through urine and sweat, **regulates body temperature** through sweating and respiration, **lubricates your joints** so they move smoothly, **supports kidney function**, aids digestion, and acts as a shock absorber for your brain and spinal cord. Every enzyme reaction in your body requires water. Without adequate water, your body starts prioritising essential functions — and cognitive focus and mood are among the first to be affected.`,
            image:   '/explorer-assets/wellness/l08-magazine-1.png',
            caption: `Every system in your body depends on water — transport, temperature, joints, brain, kidneys, and more`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l08-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Signs of dehydration`,
            body: `You don't need to feel obviously thirsty to be dehydrated — **thirst is actually a late-stage dehydration signal**. Early signs include: fatigue and low energy, headache, difficulty concentrating, irritability and mood changes, dry mouth, and darker yellow urine. A simple daily check: look at the colour of your urine. **Pale lemonade colour = well hydrated.** **Dark yellow or amber = drink more water.** **Colourless = you may actually be over-hydrated.** Mild dehydration — just slightly below optimal — can impair concentration, mood, and physical performance. Most kids are mildly dehydrated most of the time without realising it.`,
            image:   '/explorer-assets/wellness/l08-magazine-2.png',
            caption: `Thirst is a late signal — pale lemonade urine is a more reliable daily hydration check`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l08-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How much water you need`,
            body: `Kids aged 6–8 need approximately **5–7 cups of water per day**, and more during exercise, hot weather, or illness. Actual needs vary by body size, activity level, and what you eat — many fruits and vegetables are 80–90% water and contribute significantly to hydration. A practical daily strategy: **drink a glass of water when you wake up**, before each meal, and before exercise. Don't wait until you feel thirsty. The "8 glasses a day" rule is a rough guide — using your urine colour as a daily check is more reliable than counting cups.`,
            image:   '/explorer-assets/wellness/l08-magazine-3.png',
            caption: `5–7 cups a day is a good guide — your urine colour is your most reliable daily indicator`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l08-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Water vs other drinks`,
            body: `Water is almost always the best hydration choice — **no added sugar, nothing your body doesn't need**. It's what your body was designed to run on. **Sports drinks** are designed for athletes exercising intensely for 60 or more minutes — for regular activity and daily life, they add sugar your body doesn't need. **Juice** contains vitamins but also significant sugar and lacks the fibre of whole fruit. **Soda** is mildly dehydrating through caffeine and adds sugar with no nutritional benefit. **Milk** is nutritious and hydrating. **Herbal teas** are a fine choice. The simplest rule: when you're thirsty, reach for water first.`,
            image:   '/explorer-assets/wellness/l08-magazine-4.png',
            caption: `Water first — no added sugar, nothing extra. Other drinks have their place, but water is what your body runs on`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l08-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'hydrated',  label: `💧 Helps You Stay Well Hydrated`,          color: '#34D399' },
              { id: 'not-best',  label: `🥤 Not the Best for Everyday Hydration`,   color: '#F59E0B' },
            ],
            items: [
              {
                id:            'l08-g1',
                image:         'l08-game-1.png',
                label:         `Starting your morning with a glass of water before anything else.`,
                correctBucket: 'hydrated',
                matchPhrase:   `Your body has been without water all night — this simple habit gives it exactly what it needs first thing and sets a good foundation for the day.`,
              },
              {
                id:            'l08-g2',
                image:         'l08-game-2.png',
                label:         `Drinking water with every meal throughout the day.`,
                correctBucket: 'hydrated',
                matchPhrase:   `Pairing water with meals is one of the simplest strategies to stay consistently hydrated without needing to think too hard about it.`,
              },
              {
                id:            'l08-g3',
                image:         'l08-game-3.png',
                label:         `Reaching for a sugary fizzy drink every time you feel thirsty.`,
                correctBucket: 'not-best',
                matchPhrase:   `Sugary drinks can slow hydration and add sugar your body doesn't need — water is almost always a better answer to thirst.`,
              },
              {
                id:            'l08-g4',
                image:         'l08-game-4.png',
                label:         `Going most of the morning without anything to drink and having juice at lunch.`,
                correctBucket: 'not-best',
                matchPhrase:   `Waiting hours before drinking anything means your body and brain are running slightly dry — small regular drinks of water through the morning keeps everything running smoothly.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l08-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (replaced stat-recall)
            {
              id:           'l08-q1',
              format:       'mc',
              question:     `What makes water so essential that every system in your body depends on it?`,
              options:      [
                `It is the heaviest substance in the body and keeps organs in place`,
                `It is only needed for digestion and kidney function`,
                `It transports nutrients, removes waste, regulates temperature, lubricates joints, and supports every chemical reaction your body runs`,
                `It contains minerals that provide energy for physical activity`,
              ],
              correctIndex: 2,
              explanation:  `Water isn't just one of many nutrients — it's the medium in which almost everything in your body happens. Nutrients travel in it, waste leaves through it, temperature is regulated by it, joints move because of it, and every enzyme reaction requires it. There is no system in your body that doesn't depend on water.`,
            },

            // Q2 — MC (source)
            {
              id:           'l08-q2',
              format:       'mc',
              question:     `What is a reliable daily indicator of your hydration level?`,
              options:      [
                `Whether you feel thirsty — thirst always means dehydration`,
                `The colour of your urine — pale lemonade yellow means well hydrated; dark yellow means drink more water`,
                `How often you sweat during the day`,
                `The amount of water you've drunk regardless of urine colour`,
              ],
              correctIndex: 1,
              explanation:  `The colour of your urine is one of the most reliable daily hydration checks. Pale lemonade yellow = well hydrated. Dark yellow or amber = drink more water soon. Colourless = possibly slightly over-hydrated. Thirst, by contrast, is a late-stage signal — it often means you're already mildly dehydrated.`,
            },

            // Q3 — MC (source)
            {
              id:           'l08-q3',
              format:       'mc',
              question:     `When are sports drinks actually appropriate?`,
              options:      [
                `Any time you're physically active`,
                `For athletes exercising intensely for 60 or more minutes — not for regular daily hydration`,
                `Only during competitions, not practices`,
                `Whenever you're sweating, regardless of duration`,
              ],
              correctIndex: 1,
              explanation:  `Sports drinks were designed to replace electrolytes and provide fast fuel during prolonged intense exercise — 60+ minutes of hard physical activity. For regular movement, daily activity, and everyday hydration, they add sugar your body doesn't need. Water is almost always the better choice for daily life.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l08-q4',
              format:       'tf',
              question:     `Thirst is useful — but by the time you feel it, you may already be mildly dehydrated. Drinking water regularly through the day is smarter than waiting.`,
              correctAnswer: true,
              explanation:  `True. Thirst is your body's late-stage dehydration signal — by the time you notice it, you're often already slightly below optimal hydration. Building in regular small drinks throughout the day (on waking, before meals, before activity) keeps you consistently hydrated rather than recovering from dips.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l08-q5',
              format:       'fill-blank',
              question:     `A reliable daily hydration check is to look at the ___ of your urine — pale yellow means you're well hydrated.`,
              options:      ['colour', 'smell', 'temperature', 'amount'],
              correctIndex: 0,
              explanation:  `The colour of your urine is a simple, no-equipment hydration check you can do every day. Pale lemonade yellow is the target. Darker means you need more water; colourless means you may have had too much. It's one of those useful pieces of self-knowledge that takes seconds and tells you something real.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l08-q6',
              format:       'mc',
              question:     `What makes water the best everyday drink choice for your body?`,
              options:      [
                `It contains vitamins and minerals that other drinks don't have`,
                `It tastes better than other drinks when you're properly hydrated`,
                `It has no added sugar or additives, and your body uses it for every process it runs`,
                `It is the only drink that absorbs quickly enough to count as hydration`,
              ],
              correctIndex: 2,
              explanation:  `Water is what your body was designed to run on — no added sugar, no additives, nothing extra for your body to process or filter out. Every system in your body uses it, and it delivers exactly what hydration needs to deliver without anything else added. Other drinks can have their place, but water is the foundation.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l08-realworld',
          type: 'real-world',
          content: {
            scenario:    `Hydration Check`,
            description: `Try the urine colour check tomorrow morning as your first daily hydration indicator. Notice whether it's pale lemonade, darker, or somewhere in between — and adjust from there.`,
            familyAdventure: `As a family, replace sweetened drinks with water and herbal tea for one week. Put a large jug of water on the table at every meal. Add lemon, cucumber, or mint if plain water feels boring. At the end of the week: did anyone's energy or focus change? Would you keep any of it?`,
            realWorldConnection: `Elite athletes, surgeons, and astronauts all monitor hydration carefully — because even mild dehydration measurably impairs performance. The urine colour check is used in professional sports environments. You're using the same tool.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l08-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that every system in your body runs on water — and that staying well hydrated is one of the simplest, most powerful things you can do to feel clear-headed, energised, and at your best every day. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L08.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L08] Loaded: "Hydration: Your Body is Mostly Water" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l08-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l08-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L08] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L08] One or more magazine assets missing'));
}
