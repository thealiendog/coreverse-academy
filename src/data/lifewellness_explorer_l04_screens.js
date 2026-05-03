// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L04 — Exercise: Why Moving Matters
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L04 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-04',
      title:     'Exercise: Why Moving Matters',
      duration:  12,
      xpReward:  50,
      badge:     'movement-champion',
      badgeName: 'Movement Champion',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l04-welcome',
          type:     'welcome',
          headline: 'Exercise: Why Moving Matters',
          subtitle: `Your body was built to move — and every time you do, your brain and mood come along for the ride`,
          visual:   '/explorer-assets/wellness/l04-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l04-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What movement does for your body`,
            body: `Regular movement does remarkable things for your body. It **strengthens your heart and improves circulation** — your heart is a muscle, and like all muscles, it gets stronger with use. It **builds and maintains muscle** throughout your body. It **strengthens your bones** — especially important in childhood when bones are still developing and being laid down for life. It improves **flexibility and balance**. It gives you **more sustained energy throughout the day** — counterintuitively, using energy to move actually creates more of it. It **improves sleep quality dramatically**. And it **boosts your immune system** — people who move regularly get sick less often and recover faster.`,
            image:   '/explorer-assets/wellness/l04-magazine-1.png',
            caption: `Movement strengthens your heart, your bones, your immunity — and gives you more energy, not less`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l04-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `What movement does for your brain`,
            body: `Exercise is one of the most powerful brain-enhancing activities humans can do. When you exercise, your brain releases **BDNF** — Brain-Derived Neurotrophic Factor — sometimes called "Miracle-Gro for the brain." BDNF promotes the growth of new brain cells and strengthens the connections between existing ones. Research shows that aerobic exercise before studying significantly improves memory, attention, and learning. Schools that added daily physical activity saw test scores improve — without adding a single extra minute of instruction. Your brain genuinely works better after you've moved your body. This is one of the most consistent findings in all of neuroscience.`,
            image:   '/explorer-assets/wellness/l04-magazine-2.png',
            caption: `BDNF from exercise grows new brain cells and strengthens connections — your brain learns better when you move`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l04-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Exercise and mental health`,
            body: `Exercise is one of the most effective mood-lifters available — and it works fast. When you move your body, your brain releases **endorphins** (natural mood elevators), **serotonin** (which supports feelings of wellbeing and stability), and **dopamine** (which drives motivation and a sense of pleasure). It also reduces **cortisol** — the stress hormone. Research shows that regular exercise has effects comparable to medication for mild to moderate depression — with no negative side effects. Many doctors now recommend exercise as a first step when people are feeling low, anxious, or overwhelmed. Moving your body is one of the most direct things you can do to shift how you feel.`,
            image:   '/explorer-assets/wellness/l04-magazine-3.png',
            caption: `Endorphins, serotonin, dopamine, less cortisol — movement changes your brain chemistry within minutes`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l04-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Finding movement you love`,
            body: `The best movement is the kind you'll actually do consistently. Team sports, dance, martial arts, swimming, hiking, cycling, yoga, gymnastics, skateboarding, rock climbing — all of it counts. Moving your body most days, in whatever way fits your life, is what matters. It doesn't need to happen all at once. Multiple shorter bursts through the day work just as well as one longer session. The key is to **find movement you genuinely enjoy** — not something you dread or do only because you feel you should. Enjoyment drives consistency. Consistency is what builds the real benefits over time. What do you love to do that also gets you moving?`,
            image:   '/explorer-assets/wellness/l04-magazine-4.png',
            caption: `The best exercise is the one you'll actually do — enjoyment is what turns movement into a lifelong habit`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l04-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'energised', label: `🌟 Leaves you feeling energised and alive`, color: '#34D399' },
              { id: 'flat',      label: `😴 Leaves you feeling flat and restless`,    color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l04-g1',
                image:         'l04-game-1.png',
                label:         `Jumping on a trampoline or dancing to your favourite songs after school.`,
                correctBucket: 'energised',
                matchPhrase:   `Movement like this releases mood-lifting chemicals in your brain — you almost always feel better after than before.`,
              },
              {
                id:            'l04-g2',
                image:         'l04-game-2.png',
                label:         `Going for a bike ride or a walk outside with someone you enjoy.`,
                correctBucket: 'energised',
                matchPhrase:   `Movement outdoors with someone you like combines physical and social benefits — a powerful combination for mood and energy.`,
              },
              {
                id:            'l04-g3',
                image:         'l04-game-3.png',
                label:         `Spending three hours lying on the sofa scrolling through videos without getting up.`,
                correctBucket: 'flat',
                matchPhrase:   `Long periods of stillness often leave your body and mind feeling more sluggish, not more rested — movement is what actually recharges you.`,
              },
              {
                id:            'l04-g4',
                image:         'l04-game-4.png',
                label:         `Skipping recess to stay inside on a screen instead of getting some movement.`,
                correctBucket: 'flat',
                matchPhrase:   `Recess is when your brain gets to reset — missing it often means less focus and lower mood for the rest of the afternoon.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l04-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l04-q1',
              format:       'mc',
              question:     `What is BDNF and why does it matter?`,
              options:      [
                `A hormone that controls energy storage during exercise`,
                `Brain-Derived Neurotrophic Factor — a protein released during exercise that promotes new brain cell growth and stronger connections`,
                `A supplement athletes take to improve performance`,
                `A type of energy that muscles use during intense activity`,
              ],
              correctIndex: 1,
              explanation:  `BDNF is released when you exercise and acts like fertiliser for your brain — promoting new brain cell growth and strengthening the connections between existing ones. It's one of the main reasons exercise makes learning easier and memory stronger.`,
            },

            // Q2 — MC (replaced stat-recall + guardrail H)
            {
              id:           'l04-q2',
              format:       'mc',
              question:     `What does regular physical movement do for your mood?`,
              options:      [
                `It only improves mood in people who are already physically fit`,
                `It can leave you feeling worse if you're not used to it`,
                `Moving your body releases chemicals in your brain that lift your mood and reduce stress — often within minutes`,
                `It only improves mood when done in competitive sports with other people`,
              ],
              correctIndex: 2,
              explanation:  `Exercise releases endorphins, serotonin, and dopamine — chemicals that lift mood, create feelings of wellbeing, and reduce the stress hormone cortisol. The effect is often noticeable within minutes, not weeks.`,
            },

            // Q3 — MC (source)
            {
              id:           'l04-q3',
              format:       'mc',
              question:     `Why is finding movement you enjoy so important?`,
              options:      [
                `Because enjoyment makes exercise count as a different type of activity`,
                `Because fun exercise burns more energy`,
                `Because enjoyment drives consistency, and consistency is what builds the real benefits over time`,
                `Because disliking exercise releases stress hormones that undo the benefits`,
              ],
              correctIndex: 2,
              explanation:  `You can do any form of movement perfectly — but if you dread it, you won't keep doing it. Enjoyment is what turns movement from a chore into a habit. And habits are what actually produce lasting benefits.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l04-q4',
              format:       'tf',
              question:     `Physical movement helps your brain grow and learn — not just your body.`,
              correctAnswer: true,
              explanation:  `True. BDNF released during exercise literally promotes the growth of new brain cells and strengthens neural connections. Schools that added daily movement saw academic results improve — without any extra study time.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l04-q5',
              format:       'fill-blank',
              question:     `BDNF — released during exercise — is sometimes called "Miracle-Gro for the ___" because it helps the brain grow new connections.`,
              options:      ['brain', 'muscles', 'bones', 'heart'],
              correctIndex: 0,
              explanation:  `Brain-Derived Neurotrophic Factor earned its "Miracle-Gro for the brain" nickname because of its powerful effect on brain cell growth and the strengthening of neural connections — particularly in the areas linked to memory and learning.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l04-q6',
              format:       'mc',
              question:     `What makes a particular type of movement the best personal choice for you?`,
              options:      [
                `That it uses the most energy in the shortest amount of time`,
                `That a doctor or teacher recommended it as the most beneficial option`,
                `That it is the same activity your friends are doing`,
                `That you genuinely enjoy it — because enjoyment is what turns movement into a lasting habit`,
              ],
              correctIndex: 3,
              explanation:  `The most effective movement is the kind you'll actually keep doing. Enjoyment is the foundation of consistency — and consistency is what produces lasting benefits for your brain, mood, and body over time.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l04-realworld',
          type: 'real-world',
          content: {
            scenario:    `Movement Experiment`,
            description: `This week, notice how you feel on days when you move your body versus days when you mostly stay still. Your body will tell you what it needs.`,
            familyAdventure: `Create a family movement week — every day, everyone does something active together, however small. Track it and notice at the end: which activities did everyone enjoy most? Make one a regular family habit.`,
            realWorldConnection: `Movement is one of the most studied health tools in the world — researchers consistently find it helps brains, moods, immune systems, and sleep in ways that no single medicine can match.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l04-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that moving your body isn't just about getting fit — it's how you grow your brain, lift your mood, and charge up your energy. Find the movement that makes you feel alive, and give yourself that gift as often as you can. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L04.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L04] Loaded: "Exercise: Why Moving Matters" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l04-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l04-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L04] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L04] One or more magazine assets missing'));
}
