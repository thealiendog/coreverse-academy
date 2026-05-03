// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L06 — Stress: What It Is and How It Feels
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L06 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-06',
      title:     `Stress: What It Is and How It Feels`,
      duration:  12,
      xpReward:  50,
      badge:     'stress-aware',
      badgeName: 'Stress Aware',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l06-welcome',
          type:     'welcome',
          headline: `Stress: What It Is and How It Feels`,
          subtitle: `Understanding what's actually happening in your body when you're stressed is the first step to managing it instead of being managed by it`,
          visual:   '/explorer-assets/wellness/l06-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l06-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What is stress?`,
            body: `Stress is your body's response to any demand or threat — real or perceived. When your brain detects a stressor, it triggers a chain reaction that releases stress hormones including **adrenaline** and **cortisol**. Your heart rate increases, breathing quickens, muscles tense, digestion slows, and your brain shifts into threat-detection mode. This response is called **fight-or-flight**, and it evolved to help you survive physical danger. The catch: your body activates the same response for a maths test as for a lion. The biology is identical — only the situation is different.`,
            image:   '/explorer-assets/wellness/l06-magazine-1.png',
            caption: `Your body's stress response evolved for survival — and it activates for a test just as it would for a lion`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l06-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Good stress vs bad stress`,
            body: `Not all stress is harmful. **Acute stress** — short-term stress before a performance, competition, or challenge — actually sharpens focus, boosts memory, and improves performance. This is called **eustress**, and it helps you rise to a challenge. The key difference is **recovery** — after acute stress, your body returns to baseline. **Chronic stress** — ongoing stress without recovery — is where the damage happens. Chronic stress suppresses the immune system, disrupts sleep, impairs memory and learning, and changes brain structure over time. The same system that protects you can hurt you if it never gets to rest.`,
            image:   '/explorer-assets/wellness/l06-magazine-2.png',
            caption: `Short-term stress sharpens you — chronic stress without recovery is what wears you down`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l06-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `Common stressors for kids your age`,
            body: `Common stressors for kids your age include: **school pressure** (grades, tests, homework), **social stress** (friendships, belonging, feeling left out), **family stress** (conflict, changes at home), **performance pressure** (sports, music, competitions), **world events** (news about difficult things happening), and **transitions** (new school, moving, changes in family). Naming your stressors is the first step — you can't manage what you haven't identified. Many kids carry stress they've never put into words. Just saying "this is stressing me out" out loud can make it feel smaller and more manageable.`,
            image:   '/explorer-assets/wellness/l06-magazine-3.png',
            caption: `Naming what stresses you is the first step — you can't manage what you haven't identified`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l06-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Signs of stress in your body and mind`,
            body: `Stress shows up differently in different people. **Physical signs:** headaches, stomachaches, muscle tension, fatigue, racing heart, appetite changes, or getting sick more often. **Emotional signs:** irritability, anxiety, feeling overwhelmed, low mood, feeling disconnected from people you care about. **Behavioural signs:** avoiding things, trouble concentrating, changes in sleep, withdrawing from friends. Learning to recognise your own personal stress signals — which often appear early, before stress becomes overwhelming — is one of the most useful skills you can build. Your body is always communicating with you.`,
            image:   '/explorer-assets/wellness/l06-magazine-4.png',
            caption: `Stress shows up in your body, your emotions, and your behaviour — learning your own signals is a real skill`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l06-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'short-term', label: `⚡ Short-Term Stress — Passes After the Challenge`, color: '#34D399' },
              { id: 'ongoing',    label: `😰 Ongoing Stress — Stays Without a Break`,         color: '#F87171' },
            ],
            items: [
              {
                id:            'l06-g1',
                image:         'l06-game-1.png',
                label:         `Feeling nervous before a class presentation, then feeling relieved once it's done.`,
                correctBucket: 'short-term',
                matchPhrase:   `Short-term stress like this sharpens your focus and then fades — your body returned to normal, which is exactly what it's supposed to do.`,
              },
              {
                id:            'l06-g2',
                image:         'l06-game-2.png',
                label:         `Getting a little jittery before a big game because you really want to play well.`,
                correctBucket: 'short-term',
                matchPhrase:   `That jittery feeling before something you care about is eustress — it's your body helping you perform. It passes when the challenge is over.`,
              },
              {
                id:            'l06-g3',
                image:         'l06-game-3.png',
                label:         `Feeling worried about the same thing every single day for weeks without any relief.`,
                correctBucket: 'ongoing',
                matchPhrase:   `When stress has nowhere to go and nothing changes, it starts to wear on your body — this is the kind that builds up and needs support.`,
              },
              {
                id:            'l06-g4',
                image:         'l06-game-4.png',
                label:         `Never quite being able to relax because something stressful always seems to be hanging over you.`,
                correctBucket: 'ongoing',
                matchPhrase:   `Ongoing stress without recovery time is what the research shows is harmful — your body never gets the chance to reset.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l06-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l06-q1',
              format:       'mc',
              question:     `What is the fight-or-flight response?`,
              options:      [
                `Choosing between fighting or running from a physical attacker`,
                `Your body's automatic stress response — heart rate increases, breathing quickens, and you prepare to face or flee a threat`,
                `A strategy for handling conflict with others`,
                `The adrenaline release that only happens in real physical danger`,
              ],
              correctIndex: 1,
              explanation:  `Fight-or-flight is your body's automatic response to any perceived threat — and it activates for social and mental stressors just as it would for physical danger. Your heart speeds up, breathing quickens, and your brain shifts into threat-detection mode. Knowing this is happening helps you work with it rather than being swept along by it.`,
            },

            // Q2 — MC (source)
            {
              id:           'l06-q2',
              format:       'mc',
              question:     `What is the key difference between eustress and chronic stress?`,
              options:      [
                `Eustress is mental stress; chronic stress is physical stress`,
                `Eustress is stress in children; chronic stress only affects adults`,
                `Eustress is short-term stress that sharpens performance; chronic stress is ongoing without recovery and harms health over time`,
                `They are the same thing — all stress is harmful`,
              ],
              correctIndex: 2,
              explanation:  `The difference isn't in the feeling — it's in the recovery. Eustress is short-term and followed by a return to baseline. Chronic stress keeps the system activated without a break. It's the recovery that determines whether stress builds you up or wears you down.`,
            },

            // Q3 — MC (source)
            {
              id:           'l06-q3',
              format:       'mc',
              question:     `Why is it useful to learn your personal stress signals?`,
              options:      [
                `So you can avoid any situation that causes stress`,
                `So doctors can diagnose what type of stress you have`,
                `Because recognising your early warning signs lets you manage stress before it becomes overwhelming`,
                `So you can explain your stress to others more clearly`,
              ],
              correctIndex: 2,
              explanation:  `Your body gives you signals early — before stress becomes overwhelming. Learning to recognise those signals (a tight chest, a knot in your stomach, a shorter fuse) means you can do something about it while you still have room to respond rather than just react.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l06-q4',
              format:       'tf',
              question:     `Stress in small amounts — like before a performance or test — can actually help you focus and do better.`,
              correctAnswer: true,
              explanation:  `True. Short-term stress before a challenge is called eustress — and it genuinely helps. It sharpens focus, boosts memory, and improves physical performance. The key is that it passes after the challenge is over. A little nerves before something important isn't a problem — it's your body getting ready.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l06-q5',
              format:       'fill-blank',
              question:     `When your brain detects a stressor, it releases stress hormones including adrenaline and ___ that prepare your body to respond.`,
              options:      ['cortisol', 'insulin', 'serotonin', 'dopamine'],
              correctIndex: 0,
              explanation:  `Cortisol is your body's primary stress hormone — released alongside adrenaline when a threat is detected. It raises blood sugar for quick energy, sharpens focus, and suppresses non-essential functions like digestion. Over time, chronically elevated cortisol is one of the main ways ongoing stress damages health.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l06-q6',
              format:       'mc',
              question:     `What is the most useful first step when you realise you're feeling stressed?`,
              options:      [
                `Distract yourself immediately so the stress doesn't build`,
                `Wait and hope the feeling passes on its own`,
                `Name what's stressing you — identifying it is the first step to managing it`,
                `Tell an adult straight away so they can fix the problem`,
              ],
              correctIndex: 2,
              explanation:  `Naming the stressor — saying "I'm stressed about this specific thing" — is genuinely the first step. You can't manage what you haven't identified. Many kids carry stress as a vague uncomfortable feeling without ever putting it into words. The moment you name it, it becomes something you can actually work with.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l06-realworld',
          type: 'real-world',
          content: {
            scenario:    `My Stress Map`,
            description: `Pick one thing that's stressing you right now. Notice where you feel it in your body — tight chest? knot in your stomach? tense shoulders? Just naming it and noticing where you feel it is a meaningful first step.`,
            familyAdventure: `Have a family stress check-in — a judgment-free conversation where everyone shares one thing they're currently stressed about. Practice active listening: no fixing, no minimising, just understanding. After everyone shares, talk about what helps each person feel better when stressed. Can the family do anything to help each other?`,
            realWorldConnection: `Stress researchers have found that simply naming your stressors — putting them into words — reduces their emotional intensity. The act of labelling what you're feeling activates the prefrontal cortex and calms the threat response. Language is a real stress management tool.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l06-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that stress is a normal part of being human — and that understanding what's happening in your body when you feel it is the first step to managing it instead of being managed by it. Even just naming "this is stress" gives you real power over it. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L06.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L06] Loaded: "Stress: What It Is and How It Feels" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l06-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l06-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l06-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l06-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L06] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L06] One or more magazine assets missing'));
}
