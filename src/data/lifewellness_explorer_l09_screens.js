// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L09 — Screen Time and Your Brain
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L09 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-09',
      title:     'Screen Time and Your Brain',
      duration:  12,
      xpReward:  50,
      badge:     'screen-conscious',
      badgeName: 'Screen Conscious',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l09-welcome',
          type:     'welcome',
          headline: 'Screen Time and Your Brain',
          subtitle: `Screens aren't the problem — it's how you use them that matters. Understanding that gives you real control`,
          visual:   '/explorer-assets/wellness/l09-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l09-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `How screens affect attention`,
            body: `Screens are designed to deliver **constant novelty** — new content, new notifications, new stimulation — at a pace no real life can match. When you're used to this pace, slower activities (reading, conversation, being in nature) can feel boring by comparison. Your attention span has been calibrated for speed. Research shows that heavy screen users develop shorter attention spans and more difficulty sustaining focus on a single task. This affects how well you learn, how deeply you connect with people, and your ability to engage with the slower, more rewarding parts of life — the ones that aren't optimised for constant novelty.`,
            image:   '/explorer-assets/wellness/l09-magazine-1.png',
            caption: `Screens deliver constant novelty — which can make slower, deeper activities feel harder to enjoy`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l09-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Active vs passive screen time`,
            body: `Not all screen time is equal. **Active screen time** involves creating, learning, communicating, or solving problems: coding, video editing, digital art, learning through an app, video calling family, or playing strategic games. **Passive screen time** is mindless consumption: endless scrolling, autoplay videos, watching others play games without any interaction. Active use develops real skills and provides genuine value. Passive use delivers the sensation of entertainment without the substance — time passes, but nothing is built or learned. **The ratio of active to passive matters more than the total amount of time.**`,
            image:   '/explorer-assets/wellness/l09-magazine-2.png',
            caption: `Active screen time builds something — passive screen time consumes without creating. The ratio is what matters`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l09-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Social media and the developing brain`,
            body: `Social media platforms are particularly impactful on young developing brains. The **like system** activates dopamine reward circuits — every notification creates a small hit of social approval. This can create approval-seeking behaviour and anxiety when posts don't get responses. **Social comparison** — seeing curated highlight reels of other people's lives — consistently decreases wellbeing, because you're comparing your full experience (including the hard parts) to someone else's edited best moments. Research has linked heavy social media use in young people to higher rates of anxiety and loneliness — understanding why these platforms are designed the way they are helps you use them more intentionally.`,
            image:   '/explorer-assets/wellness/l09-magazine-3.png',
            caption: `Likes, notifications, highlight reels — understanding how these work puts you back in control`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l09-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Building healthy screen habits`,
            body: `Practical healthy screen habits: set **specific screen-free times** — meals, one hour before bed, the first hour after waking. Use **app timers** to prevent endless use without deciding to keep going. Keep **phones out of bedrooms at night**. Front-load your day with non-screen activities so screens don't fill time by default. Most importantly: **notice how you feel before, during, and after different types of screen use** — this awareness is what keeps you in control. The goal isn't to eliminate screens. It's to stay conscious about how and why you're using them, rather than defaulting to automatic use without thinking.`,
            image:   '/explorer-assets/wellness/l09-magazine-4.png',
            caption: `Screen-free times, app timers, phones out of bedrooms — small habits that keep you in control`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l09-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'active',  label: `🧠 Active Screen Time (creates, learns, or connects)`, color: '#34D399' },
              { id: 'passive', label: `📺 Passive Screen Time (mindless consumption)`,         color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l09-g1',
                image:         'l09-game-1.png',
                label:         `Following a tutorial to build something new in a game or creative app.`,
                correctBucket: 'active',
                matchPhrase:   `Creating and learning through a screen is building a real skill — your brain is engaged, challenged, and growing.`,
              },
              {
                id:            'l09-g2',
                image:         'l09-game-2.png',
                label:         `Video calling a friend or family member to have a real conversation.`,
                correctBucket: 'active',
                matchPhrase:   `Using a screen to connect meaningfully with someone is exactly what technology is good for — this is active, purposeful use.`,
              },
              {
                id:            'l09-g3',
                image:         'l09-game-3.png',
                label:         `Scrolling endlessly through a social feed without any particular purpose.`,
                correctBucket: 'passive',
                matchPhrase:   `When there's no intention behind the scroll, the platform is in control — not you. Time passes, but nothing is built or gained.`,
              },
              {
                id:            'l09-g4',
                image:         'l09-game-4.png',
                label:         `Watching someone else play a game for two hours without ever playing yourself.`,
                correctBucket: 'passive',
                matchPhrase:   `There's nothing inherently wrong with this occasionally — but if it's the default, your brain is consuming without creating, connecting, or learning.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l09-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l09-q1',
              format:       'mc',
              question:     `What does heavy passive screen use do to your attention span?`,
              options:      [
                `It improves multitasking ability over time`,
                `It calibrates the brain for rapid stimulation, making slower activities feel boring and reducing ability to sustain focus`,
                `It has no effect on attention — only the content matters`,
                `It increases attention for screens but not for other activities`,
              ],
              correctIndex: 1,
              explanation:  `Screens are engineered to deliver novelty at a pace nothing else in real life can match. When your brain adapts to that pace, slower activities — reading, conversation, sitting outside — start to feel under-stimulating by comparison. Attention span shortens not because something is wrong with you, but because the tool has calibrated your brain for speed.`,
            },

            // Q2 — MC (source)
            {
              id:           'l09-q2',
              format:       'mc',
              question:     `What is the difference between active and passive screen time?`,
              options:      [
                `Active is educational; passive is entertainment`,
                `Active involves creating, learning, or solving problems; passive is mindless consumption without purpose`,
                `Active is on a computer; passive is on a phone`,
                `Active requires more focus; passive is fine in small amounts`,
              ],
              correctIndex: 1,
              explanation:  `The distinction isn't about the device or the topic — it's about whether you're building something, learning something, or connecting meaningfully with someone. Active screen time leaves you with a skill, a connection, or knowledge. Passive screen time passes time without creating anything.`,
            },

            // Q3 — MC (source)
            {
              id:           'l09-q3',
              format:       'mc',
              question:     `Why does social media comparison often decrease wellbeing?`,
              options:      [
                `Social media shows everyone looking more attractive than they do in real life`,
                `People post curated highlight reels, making others' lives look perfect compared to your full experience including hard moments`,
                `Following more accounts exposes you to more negative content overall`,
                `Social media algorithms show you posts from people who are more successful than you`,
              ],
              correctIndex: 1,
              explanation:  `What you see on social media is a highlight reel — the best moments, carefully chosen and often edited. You're comparing that to your full life, including the ordinary and difficult parts. This comparison is almost always unfair to yourself, and understanding why it happens is the first step to not letting it affect how you feel about your own life.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l09-q4',
              format:       'tf',
              question:     `Not all screen time is the same — using a screen to create, learn, or connect is very different from mindless scrolling, and your brain responds differently to each.`,
              correctAnswer: true,
              explanation:  `True. The research distinguishes clearly between active and passive screen time. Active use — creating, learning, connecting with purpose — engages the brain in ways that build skills and provide genuine value. Passive use activates reward circuits without building anything. What matters is how you're using screens, not just how long.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l09-q5',
              format:       'fill-blank',
              question:     `Social media platforms are designed to deliver social ___ — likes, comments, notifications — that keep your brain coming back for more.`,
              options:      ['approval', 'pressure', 'anxiety', 'content'],
              correctIndex: 0,
              explanation:  `Every like, comment, and notification delivers a small hit of social approval — activating the same dopamine reward circuits that respond to other forms of social recognition. Platforms are designed this way deliberately, because approval-seeking behaviour drives engagement. Knowing this doesn't make you immune to it, but it helps you see it clearly.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l09-q6',
              format:       'mc',
              question:     `What is the most powerful thing you can do to build a healthier relationship with screens?`,
              options:      [
                `Set a timer for exactly one hour of screen time per day`,
                `Only use screens for school and never for entertainment`,
                `Notice how you feel before, during, and after different types of screen use — awareness is what keeps you in control`,
                `Delete all social media accounts permanently`,
              ],
              correctIndex: 2,
              explanation:  `The most powerful tool isn't a strict rule — it's awareness. When you notice how you feel after 30 minutes of scrolling versus 30 minutes of creating or connecting, you naturally start making different choices. That awareness is what keeps you the one in control of the tool, rather than the tool controlling you.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l09-realworld',
          type: 'real-world',
          content: {
            scenario:    `Screen Quality Audit`,
            description: `For one day, after each screen session notice whether it felt active or passive — no judgement, just notice. Did you feel energised, neutral, or flat afterwards? That noticing is more powerful than any rule.`,
            familyAdventure: `Do a 24-hour screen audit together as a family. Everyone tracks every screen interaction — work and school count too. At the end, share: total time, ratio of active to passive, most valuable screen use, most wasteful. Agree on one habit change to try for a week.`,
            realWorldConnection: `Technology designers, researchers, and educators all distinguish between active and passive screen use. The most effective digital literacy programmes teach awareness of how and why you're using screens — not just how long. You're building exactly that skill.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l09-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that screens aren't the problem — it's how you use them that matters. When you choose active over passive, and stay aware of why you're picking up a screen, you stay in control of the tool instead of the other way around. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L09.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L09] Loaded: "Screen Time and Your Brain" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l09-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l09-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L09] One or more magazine assets missing'));
}
