// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L20 — My Wellness Blueprint
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L20 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-20',
      title:     `My Wellness Blueprint`,
      duration:  12,
      xpReward:  50,
      badge:     'wellness-architect',
      badgeName: 'Wellness Architect',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l20-welcome',
          type:     'welcome',
          guideText: `{name}, you've done something really meaningful over these twenty lessons. You've learned how your body runs, how your mind works, how sleep and movement and stress and relationships all connect. You know more about yourself now than most adults ever take the time to learn. This last lesson is yours to keep — we're putting it all together into something practical, something personal. Your wellness blueprint. Not a rulebook from someone else — a map drawn from your own understanding of what helps you thrive. I'm proud of you. Let's make it real.`,
          headline: `My Wellness Blueprint`,
          subtitle: `You've now learned how your body and mind work — this final lesson is about putting it all together into something you can actually live`,
          visual:   '/explorer-assets/wellness/l20-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l20-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What a wellness blueprint is`,
            body: `A **wellness blueprint** is not a rigid programme or a list of rules — it's a personal map of the **values, practices, and habits** that support how you want to feel and who you want to become. It covers all the areas you've learned about across this journey: **nutrition** (what you eat and how you nourish yourself), **movement** (how you challenge and care for your body), **sleep** (the foundation everything else rests on), **stress management** (how you handle pressure and recover), **relationships** (the connections that shape how you feel about yourself), **mental health** (your emotional wellbeing and inner life), and **nature** (the environment that restores you). Together, these are not separate topics — they're one interconnected system.`,
            image:   '/explorer-assets/wellness/l20-magazine-1.png',
            caption: `Nutrition, movement, sleep, stress management, relationships, mental health, nature — one connected system`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l20-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Everything is connected`,
            body: `One of the most important things to understand about wellness is that **nothing operates in isolation**. Poor sleep raises stress hormones, which affects your food choices, which affects your energy, which makes movement feel harder, which affects your sleep. The same connection runs in reverse: **improving one area creates ripple effects across others**. Better sleep → clearer thinking → better stress management → more energy for movement → more restful sleep. This is why you don't need to fix everything at once. **Start where you have energy** — one area where you can make a small, consistent change. The ripple effects will follow. Wellness is a system, and systems respond to inputs anywhere in the loop.`,
            image:   '/explorer-assets/wellness/l20-magazine-2.png',
            caption: `Improving one area creates ripple effects — start where you have energy and let the system respond`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l20-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Sustainable over extreme`,
            body: `**Sustainable** is the most important word in long-term health. Extreme approaches — rigid rules, perfectionistic standards, dramatic overhauls — tend to create a cycle: intensity, followed by exhaustion or failure, followed by giving up entirely, followed by starting over. What research consistently shows is that **the people who thrive long-term are not the ones who were most intense — they're the ones who were most consistent**. Consistent sleep. Consistent movement. Consistent eating patterns. Consistent stress management. These are not glamorous. But boring, consistent habits compound over time into a genuinely different quality of life. **You don't have to be extreme to be healthy. You just have to keep going.**`,
            image:   '/explorer-assets/wellness/l20-magazine-3.png',
            caption: `Consistency over intensity — boring habits that compound are more powerful than extreme ones`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l20-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Your health is yours to care for`,
            body: `One of the most empowering truths you can learn: **your health is yours to care for**. The adults around you help with a lot of that care now, and as you grow, you'll take on more of it yourself. The habits, knowledge, and self-awareness you build now create a foundation that grows with you. You don't need to have everything figured out — you just need to keep making small, consistent choices that move in the direction of the person you want to become.`,
            image:   '/explorer-assets/wellness/l20-magazine-4.png',
            caption: `Your health is yours to care for — small consistent choices now build the foundation that grows with you`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l20-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'sustainable', label: `🌱 Sustainable Wellness Habit (lasts over time)`, color: '#34D399' },
              { id: 'extreme',     label: `💥 Extreme Approach (hard to maintain)`,          color: '#F87171' },
            ],
            items: [
              {
                id:            'l20-g1',
                image:         'l20-game-1.png',
                label:         `Getting into a regular sleep routine and protecting it most nights.`,
                correctBucket: 'sustainable',
                matchPhrase:   `A consistent sleep routine is one of the highest-impact sustainable habits you can build — it supports every other area of wellness, and it compounds over time into a genuinely different quality of energy and focus.`,
              },
              {
                id:            'l20-g2',
                image:         'l20-game-2.png',
                label:         `Choosing movement you actually enjoy and making it a regular part of your week.`,
                correctBucket: 'sustainable',
                matchPhrase:   `Enjoyment is the most reliable predictor of whether you'll keep doing something. Movement you look forward to is infinitely more sustainable than exercise you dread — and it creates the same health benefits over time.`,
              },
              {
                id:            'l20-g3',
                image:         'l20-game-3.png',
                label:         `Deciding to change everything about how you live all at once, starting tomorrow.`,
                correctBucket: 'extreme',
                matchPhrase:   `Changing everything at once overwhelms the systems that build habits, depletes willpower, and usually ends in giving up on all of it. Starting with one small change — done reliably — builds far more effectively.`,
              },
              {
                id:            'l20-g4',
                image:         'l20-game-4.png',
                label:         `Setting such a rigid rule for yourself that any small slip feels like total failure.`,
                correctBucket: 'extreme',
                matchPhrase:   `Perfectionism is the enemy of consistency. The goal is not a perfect record — it's a direction. Missing once is fine. What matters is getting back to it the next day.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l20-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l20-q1',
              format:       'mc',
              question:     `Why is "sustainable" the most important word in long-term health?`,
              options:      [
                `Because sustainable habits are easier to do and require less commitment`,
                `Because extreme approaches tend to create cycles of intensity and giving up — while consistent habits compound into lasting change over time`,
                `Because sustainable habits can be done without any effort or discipline`,
                `Because health goals should always be gradual rather than ambitious`,
              ],
              correctIndex: 1,
              explanation:  `Extreme approaches — rigid rules, dramatic overhauls — often cycle through intensity, exhaustion, failure, and giving up. Sustainable habits, by contrast, are boring and consistent — and they compound. Over months and years, showing up consistently in every area of wellness adds up to a genuinely different quality of life. The goal is not the most intense approach; it's the one you can actually keep doing.`,
            },

            // Q2 — MC (source)
            {
              id:           'l20-q2',
              format:       'mc',
              question:     `How are different wellness areas connected to each other?`,
              options:      [
                `They aren't — each area of wellness functions independently`,
                `Improving one area creates ripple effects in others — sleep affects stress, stress affects choices, choices affect energy, energy affects sleep`,
                `They only connect when you're already healthy in most areas`,
                `They connect through nutrition, which is the foundation all others depend on`,
              ],
              correctIndex: 1,
              explanation:  `Wellness is a system, and systems respond to inputs anywhere in the loop. Poor sleep raises stress hormones, which affects food choices, energy, and movement — and the same loop runs in reverse. This means you don't need to fix everything at once. Starting with one area creates improvement in others, which creates momentum. Start where you have energy and let the ripple effects follow.`,
            },

            // Q3 — MC (source)
            {
              id:           'l20-q3',
              format:       'mc',
              question:     `What do people who thrive long-term tend to have in common?`,
              options:      [
                `They started with the most dramatic possible changes and committed completely`,
                `They had perfect discipline and never missed a healthy habit`,
                `They built consistent, sustainable practices early and kept showing up even when it was imperfect`,
                `They focused only on the wellness areas that were most natural for them`,
              ],
              correctIndex: 2,
              explanation:  `Research consistently shows that long-term thriving is not about intensity — it's about consistency. The people who maintain their health across decades are not the ones who did the most dramatic things. They're the ones who built reliable, sustainable habits, kept showing up even when it wasn't perfect, and made their health a consistent priority rather than an occasional project.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l20-q4',
              format:       'tf',
              question:     `Improving one wellness area — like sleep or movement — creates ripple effects that improve other areas too, because they're all part of one connected system.`,
              correctAnswer: true,
              explanation:  `True. Wellness areas are interconnected: better sleep improves stress management, which supports clearer thinking and better choices, which makes movement feel more achievable, which improves sleep quality. The loop runs in both directions. This is genuinely good news — you don't need to fix everything at once. A meaningful improvement in one area can set off a positive cascade across the whole system.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l20-q5',
              format:       'fill-blank',
              question:     `A wellness blueprint covers nutrition, movement, sleep, stress management, ___, mental health, and nature — all as one connected system.`,
              options:      ['relationships', 'work', 'studies', 'sports'],
              correctIndex: 0,
              explanation:  `Relationships are a core wellness area — they shape how you feel about yourself every day and are consistently found to be one of the strongest predictors of long-term wellbeing. A complete wellness blueprint includes all seven areas: nutrition, movement, sleep, stress management, relationships, mental health, and nature. None of these operate in isolation; all of them are interconnected.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l20-q6',
              format:       'mc',
              question:     `Why are the most effective wellness habits often described as "not dramatic"?`,
              options:      [
                `Because dramatic habits are too expensive for most people to maintain`,
                `Because health goals should always be modest rather than ambitious`,
                `Because consistency over time matters more than intensity — simple habits done reliably compound into a genuinely different quality of life`,
                `Because dramatic habits are too attention-seeking and distract from the goal`,
              ],
              correctIndex: 2,
              explanation:  `The power of habits comes from compounding — small actions, done reliably over a long time, add up to dramatic outcomes. A consistent sleep schedule, regular movement you enjoy, a reliable stress management practice — none of these sound dramatic. But built over years, they compound into resilience, energy, and health that people who chase dramatic approaches rarely achieve. Consistency is the quiet power behind every lasting result.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l20-realworld',
          type: 'real-world',
          content: {
            scenario:    `Build Your Blueprint`,
            description: `Take twenty minutes to write your own personal wellness blueprint. For each of the seven areas — nutrition, movement, sleep, stress management, relationships, mental health, and nature — write one honest sentence about where you are now and one sentence about one small change you want to make. Then choose one area to start with this week. Just one. Keep it small enough to actually do.`,
            familyAdventure: `Share your wellness blueprints as a family. Each person reads what they wrote — where they are, what they want to improve, and what one small change they're going to try. Support each other without judgement. Check in in two weeks. This kind of shared commitment, done gently and honestly, is one of the most powerful things a family can do for each other's long-term health.`,
            realWorldConnection: `Health professionals, researchers, and people who study long-term wellbeing consistently point to the same truth: the foundation of a healthy life is built in the habits of childhood and adolescence. The knowledge, awareness, and practices you build now do not disappear — they compound. You are, right now, laying the groundwork for the person you will be for decades to come.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l20-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You've now completed the entire Life & Wellness journey — twenty lessons about how your body and mind work, and what they need to truly thrive. The knowledge you've built here is yours to carry for life. Every good night's sleep, every time you move your body, every meal that nourishes you, every time you reach out to someone you care about — it all adds up. Take care of yourself the way you've learned to, and share that care with the people around you. Terra is so proud to have walked every step of this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L20.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L20] Loaded: "My Wellness Blueprint" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l20-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l20-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L20] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L20] One or more magazine assets missing'));
}
