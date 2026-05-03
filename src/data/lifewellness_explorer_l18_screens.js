// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L18 — Nature and Mental Health
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L18 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-18',
      title:     `Nature and Mental Health`,
      duration:  12,
      xpReward:  50,
      badge:     'nature-connector',
      badgeName: 'Nature Connector',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l18-welcome',
          type:     'welcome',
          headline: `Nature and Mental Health`,
          subtitle: `Research has found that time in nature has powerful effects on mood, focus, and stress — people who spend regular time outdoors consistently feel better`,
          visual:   '/explorer-assets/wellness/l18-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l18-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What nature does to your brain and body`,
            body: `Spending time in natural environments triggers measurable changes in how your brain and body function. **Cortisol** — the primary stress hormone — drops within a short time of being in nature. Studies show that even a walk in a natural setting reduces **rumination** — the mental loop of repetitive negative thinking. Natural environments **activate the parasympathetic nervous system** (your rest-and-restore mode), slowing heart rate and calming the stress response. They also **restore directed attention** — the focused, effortful concentration that becomes depleted by screens and busy environments. Nature gives your attention system a genuine rest. These effects are not small or vague — they're consistent, measurable, and available to anyone who steps outside.`,
            image:   '/explorer-assets/wellness/l18-magazine-1.png',
            caption: `Nature lowers stress hormones, reduces rumination, and restores your brain's capacity to focus`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l18-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Shinrin-yoku: forest bathing`,
            body: `**Shinrin-yoku** — translated as "forest bathing" — is a practice that originated in Japan as a formal approach to wellbeing. It involves spending time in a forest or natural environment and **engaging all five senses**: noticing what you see, hear, smell, feel underfoot, and even taste in the air. There is no goal except **presence**. Research into shinrin-yoku found that it significantly lowers cortisol, reduces heart rate, boosts immune function, and improves mood — and that the benefits last for days after the visit. You don't need a Japanese forest. Any natural setting — a park, a garden, a stretch of coastline — offers access to the same effects when you bring the same quality of presence.`,
            image:   '/explorer-assets/wellness/l18-magazine-2.png',
            caption: `Forest bathing — all five senses, no goal except presence — with measurable wellbeing benefits`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l18-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Beyond mood: other reasons outdoor time matters`,
            body: `Nature's benefits extend well beyond mental health. **Vitamin D** — essential for bone health, immune function, and mood — is primarily produced when skin is exposed to sunlight. Many people are deficient because they spend so much time indoors. **Physical activity** comes naturally in outdoor environments — natural terrain is varied and engaging in ways that indoor exercise often isn't. **Natural light** is crucial for **circadian rhythm** — the internal clock that regulates your sleep-wake cycle. Exposure to natural light, especially in the morning, helps your body know when to be alert and when to sleep. Even short regular periods outdoors contribute meaningfully to all of these — the benefits don't require dramatic amounts of time.`,
            image:   '/explorer-assets/wellness/l18-magazine-3.png',
            caption: `Vitamin D, physical activity, circadian rhythm — outdoor time benefits the whole system`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l18-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Building a nature practice`,
            body: `You don't need to plan long expeditions to access the benefits of nature. The most important ingredient is **regularity and presence** — being there, and actually paying attention. Eat lunch outside when you can. Take a walk through a park or along a beach. Spend time in a garden. Find a view through a window if that's what's available. Notice the sky, the light, the temperature of the air. **Put your phone away** — the benefits of nature come from sensory engagement, not from being physically nearby while your attention is on a screen. Even a few minutes of genuine presence in a natural setting is worth more than a long time outdoors while scrolling. Make it a habit, not an occasion.`,
            image:   '/explorer-assets/wellness/l18-magazine-4.png',
            caption: `Regularity and presence are what matter — phone away, senses engaged`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l18-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'connects',     label: `🌿 Helps You Connect with Nature`,       color: '#34D399' },
              { id: 'disconnects',  label: `📱 Keeps You Disconnected from Nature`,  color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l18-g1',
                image:         'l18-game-1.png',
                label:         `Going to a park or garden and leaving your phone in your bag while you walk and notice your surroundings.`,
                correctBucket: 'connects',
                matchPhrase:   `The benefits of nature come from sensory presence — what you see, hear, smell, and feel. Leaving your phone away gives your brain the space to actually receive what nature is offering.`,
              },
              {
                id:            'l18-g2',
                image:         'l18-game-2.png',
                label:         `Eating lunch outside and taking a few minutes to notice the light, the air, and what's around you.`,
                correctBucket: 'connects',
                matchPhrase:   `Even short, regular moments of genuine presence in a natural setting accumulate into real wellbeing benefits — you don't need a long hike, just real attention.`,
              },
              {
                id:            'l18-g3',
                image:         'l18-game-3.png',
                label:         `Spending time "outdoors" but with eyes on a screen the entire time, not noticing the environment at all.`,
                correctBucket: 'disconnects',
                matchPhrase:   `Being physically outside while mentally scrolling doesn't deliver nature's benefits — those come from sensory engagement and presence, not from proximity to trees while your attention is elsewhere.`,
              },
              {
                id:            'l18-g4',
                image:         'l18-game-4.png',
                label:         `Choosing to stay indoors scrolling when you could take a short walk outside in the fresh air.`,
                correctBucket: 'disconnects',
                matchPhrase:   `Screens offer stimulation, but they don't give your attention system the rest that natural environments do. A short walk outside restores something that more screen time genuinely cannot.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l18-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (replaced — Flag 11)
            {
              id:           'l18-q1',
              format:       'mc',
              question:     `What does spending time in nature do for your nervous system?`,
              options:      [
                `It stimulates the sympathetic nervous system, giving you more energy and focus`,
                `It activates the parasympathetic nervous system — your rest-and-restore mode — reducing stress hormones and calming the stress response`,
                `It temporarily shuts down the nervous system so it can reset`,
                `It increases adrenaline, which helps you feel more alert and alive`,
              ],
              correctIndex: 1,
              explanation:  `Natural environments activate the parasympathetic nervous system — the branch responsible for rest, recovery, and calm. This is the opposite of the fight-or-flight stress response. Stress hormones like cortisol drop, heart rate slows, and your body moves into a genuine recovery state. This is why time in nature feels restorative in a way that other rest — like sitting indoors — often doesn't quite match.`,
            },

            // Q2 — MC (source)
            {
              id:           'l18-q2',
              format:       'mc',
              question:     `What is shinrin-yoku?`,
              options:      [
                `A Japanese breathing exercise designed to lower heart rate`,
                `A Japanese practice of forest bathing — spending time in nature engaging all five senses, with no goal except presence`,
                `A form of outdoor meditation that requires total silence`,
                `A Japanese approach to outdoor exercise that combines walking and mindfulness`,
              ],
              correctIndex: 1,
              explanation:  `Shinrin-yoku translates as "forest bathing" and originated in Japan as a formal wellbeing practice. The approach is simple: spend time in a natural setting and engage all five senses — what you see, hear, smell, feel, and even taste in the air. The only goal is presence. Research has found measurable benefits including lower cortisol, improved immune function, and better mood — with effects that last for days.`,
            },

            // Q3 — MC (source)
            {
              id:           'l18-q3',
              format:       'mc',
              question:     `Why does being in nature while using your phone provide fewer benefits?`,
              options:      [
                `Because phone signals interfere with the natural environment around you`,
                `Because the benefits come from sensory presence and engagement with the natural environment — phones redirect your attention away from that`,
                `Because screens emit light that cancels out the effects of natural light`,
                `Because walking and using a phone at the same time is physically less healthy`,
              ],
              correctIndex: 1,
              explanation:  `Nature's benefits come from genuine sensory engagement — noticing what you see, hear, smell, and feel in your environment. When your attention is on a screen, that sensory engagement is lost, even if your body is physically outside. A few minutes of real presence in nature is worth more than a long time outdoors while scrolling.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l18-q4',
              format:       'tf',
              question:     `The benefits of time in nature come from actually being present — noticing what you see, hear, and smell — not just from being physically outdoors.`,
              correctAnswer: true,
              explanation:  `True. Sensory engagement is the active ingredient. Stress hormones drop, attention restores, and mood lifts when you are genuinely present in a natural environment — paying attention to your surroundings rather than to a screen or to anxious thoughts. Physical proximity to nature while your attention is elsewhere provides far fewer of the measurable benefits that research consistently finds.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l18-q5',
              format:       'fill-blank',
              question:     `Spending regular time in nature helps ___ the stress hormone cortisol, calming your nervous system and improving your mood.`,
              options:      ['lower', 'raise', 'double', 'track'],
              correctIndex: 0,
              explanation:  `Cortisol — your primary stress hormone — drops measurably when you spend time in natural environments. This is one of the most consistently replicated findings in nature and health research. Lower cortisol means a calmer nervous system, reduced feelings of stress, and a body that is better able to rest and recover. It's one of several reasons why regular time in nature is one of the most accessible wellbeing tools available.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l18-q6',
              format:       'mc',
              question:     `Beyond calming your mood, why is regular outdoor time especially important for your overall health?`,
              options:      [
                `Because outdoor air is always cleaner than indoor air`,
                `Because being outdoors automatically makes you more social`,
                `Because natural light helps regulate your sleep-wake cycle, sunlight exposure supports vitamin D production, and natural environments restore focused attention in ways indoor rest doesn't`,
                `Because outdoor exercise burns more energy than indoor exercise`,
              ],
              correctIndex: 2,
              explanation:  `Outdoor time benefits the whole system, not just mood. Natural light — especially morning light — helps regulate your circadian rhythm, which governs your sleep quality. Sunlight triggers vitamin D production in your skin, which supports bone health and immune function. And natural environments restore the kind of focused attention that screens and busy indoor environments deplete. These are distinct, compounding benefits — all accessible through the simple habit of regular time outside.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l18-realworld',
          type: 'real-world',
          content: {
            scenario:    `Nature Presence Practice`,
            description: `This week, find one natural setting — a park, a garden, a stretch of beach, even a tree-lined street — and spend some time there with your phone put away. Notice five things you can see, four you can hear, three you can feel, two you can smell. Notice how you feel when you get back. Do this a few times and see if you notice a difference in your mood or your ability to focus.`,
            familyAdventure: `Plan a family nature day — somewhere with trees, water, or open sky. Leave screens behind as much as possible. Walk together, notice things, eat outside. Afterwards, talk about what each person noticed. Did the day feel different from a day indoors? What did each person find most restoring? Making this a regular family rhythm builds something valuable over time.`,
            realWorldConnection: `Researchers across psychology, neuroscience, and public health have all converged on the same finding: regular contact with natural environments is one of the most powerful and accessible tools for mental health. It's free, it's always available in some form, and its effects are genuine and measurable. Your access to nature is a real health resource.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l18-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that nature isn't just a nice place to visit — it's one of the most powerful tools available for calming your mind, restoring your focus, and lifting your mood. And it's always there, waiting. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L18.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L18] Loaded: "Nature and Mental Health" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l18-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l18-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l18-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l18-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L18] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L18] One or more magazine assets missing'));
}
