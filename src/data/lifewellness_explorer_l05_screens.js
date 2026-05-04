// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L05 — Sleep: The Superpower You're Missing
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L05 = {
  ageBand:   'explorers',
  subjectId: 'wellness',
  guide:     'terra',

  lessons: [
    {
      id:        'lw-6-8-05',
      title:     `Sleep: The Superpower You're Missing`,
      duration:  12,
      xpReward:  50,
      badge:     'sleep-champion',
      badgeName: 'Sleep Champion',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l05-welcome',
          type:     'welcome',
          guideText: `Here's a question for you, {name}: when was the last time you woke up feeling genuinely good? Energetic, clear-headed, ready for the day? If that doesn't happen very often, you're not alone — but you are missing something important. Sleep is not just rest. It's when your brain consolidates everything it learned that day. It's when your body repairs itself. It's when growth hormone is released. The science of what happens while you sleep is remarkable — and once you understand it, you might start treating those hours very differently. Let's take a look at what's really going on.`,
          headline: `Sleep: The Superpower You're Missing`,
          subtitle: `Sleep is when your body and brain do their most important work — and protecting it is one of the best things you can do for yourself`,
          visual:   '/explorer-assets/wellness/l05-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l05-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `What happens while you sleep`,
            body: `Sleep isn't passive rest — it's your body and brain's most **active repair period**. While you sleep, your brain flushes out toxic waste products through a system called the **glymphatic system** — waste that builds up during the day and needs clearing out each night. **Growth hormone** is released — this is when children literally grow. Your immune system produces cytokines that fight infection. **Emotional experiences are processed** so they don't overwhelm you the next day. And new memories move from short-term to long-term storage — everything you learned gets filed away properly. Every system in your body uses sleep to repair, restore, and prepare for tomorrow.`,
            image:   '/explorer-assets/wellness/l05-magazine-1.png',
            caption: `While you sleep, your brain cleans, grows, heals, and files away everything you learned`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l05-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Sleep cycles and why they matter`,
            body: `Sleep comes in **cycles of about 90 minutes** each, containing different stages. **Light sleep** transitions you between waking and deeper sleep. **Deep sleep** (slow-wave sleep) is when physical restoration happens — muscle repair, bone growth, and immune function. **REM sleep** (Rapid Eye Movement) is when dreams occur and emotional and memory processing happen. You need multiple complete cycles per night. Cutting sleep short cuts off the **later cycles**, which are disproportionately REM-heavy. That means you lose more emotional processing and memory consolidation than you might expect — even from what feels like a small reduction in sleep time.`,
            image:   '/explorer-assets/wellness/l05-magazine-2.png',
            caption: `Light sleep, deep sleep, REM sleep — each cycle does different work, and you need them all`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l05-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `How much sleep kids need`,
            body: `Sleep needs vary by age. Kids aged **6–12 need 9–12 hours per night**. Teenagers need 8–10 hours. Most adults need 7–9 hours. Many kids are running on less sleep than they need — every single day. The effects of chronic sleep deprivation look remarkably like ADHD symptoms: difficulty concentrating, impulsivity, emotional dysregulation, and poor decision-making. Some kids who've struggled with attention or behaviour have improved dramatically simply by getting adequate sleep. Sleep isn't a luxury or a reward — it's a biological need that your brain and body genuinely require to function at their best.`,
            image:   '/explorer-assets/wellness/l05-magazine-3.png',
            caption: `Kids aged 6–12 need 9–12 hours — sleep is a biological need, not a luxury`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l05-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Sleep hygiene — setting up for success`,
            body: `**Sleep hygiene** means the habits that help you sleep well. The key ones: a **consistent bedtime and wake time every day** — including weekends, because your body clock doesn't take days off. **No screens for at least an hour before bed** — blue light from screens suppresses melatonin, the hormone that signals your brain it's time to sleep. A **cool, dark room** — your core temperature needs to drop slightly to initiate sleep. A **wind-down routine** — the same sequence of activities each night signals your brain to prepare for sleep. And **physical activity during the day** (but not right before bed) supports deeper sleep. These aren't complicated changes — but done consistently, they make an enormous difference to how well you sleep and how you feel the next day.`,
            image:   '/explorer-assets/wellness/l05-magazine-4.png',
            caption: `Consistent bedtime, no screens, cool dark room, wind-down routine — small habits, big difference`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l05-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'helps', label: `😴 Helps You Sleep Well`,  color: '#34D399' },
              { id: 'hurts', label: `😬 Makes Sleep Harder`,    color: '#F87171' },
            ],
            items: [
              {
                id:            'l05-g1',
                image:         'l05-game-1.png',
                label:         `Putting your tablet away an hour before bedtime and reading a book instead.`,
                correctBucket: 'helps',
                matchPhrase:   `Removing screen blue light an hour before bed lets your melatonin rise naturally — your brain gets the signal that sleep is coming.`,
              },
              {
                id:            'l05-g2',
                image:         'l05-game-2.png',
                label:         `Keeping your bedroom cool, quiet, and dark when you go to bed.`,
                correctBucket: 'helps',
                matchPhrase:   `A cool, dark room helps your body temperature drop slightly — which is one of the signals your body needs to move into sleep.`,
              },
              {
                id:            'l05-g3',
                image:         'l05-game-3.png',
                label:         `Watching exciting videos right up until the moment you turn your light off.`,
                correctBucket: 'hurts',
                matchPhrase:   `Screen blue light right before bed suppresses melatonin — and exciting content keeps your brain alert just when it needs to wind down.`,
              },
              {
                id:            'l05-g4',
                image:         'l05-game-4.png',
                label:         `Eating a big sugary snack right before bedtime.`,
                correctBucket: 'hurts',
                matchPhrase:   `A sugar spike right before bed can disrupt your blood sugar during the night, interrupting the deep sleep stages your body needs most.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l05-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l05-q1',
              format:       'mc',
              question:     `What does your brain do during sleep that doesn't happen while you're awake?`,
              options:      [
                `It creates entirely new brain cells from scratch`,
                `It flushes out toxic waste products through the glymphatic system`,
                `It increases in size by around 20%`,
                `It stops all activity to conserve energy`,
              ],
              correctIndex: 1,
              explanation:  `The glymphatic system is essentially your brain's waste-clearance system — it runs most effectively during sleep, flushing out the toxic byproducts that build up during the day. This is one of the reasons sleep deprivation has such rapid effects on how well your brain functions.`,
            },

            // Q2 — MC (replaced stat-recall)
            {
              id:           'l05-q2',
              format:       'mc',
              question:     `What happens to your memory and learning when you cut your sleep short?`,
              options:      [
                `Nothing — your brain catches up on memory storage during the next day`,
                `You lose some memory but fully recover it the following night`,
                `The later sleep cycles that handle memory consolidation get cut off, so less of what you learned gets stored long-term`,
                `Your brain speeds up during the day to make up for the lost processing time`,
              ],
              correctIndex: 2,
              explanation:  `The later cycles of sleep are disproportionately rich in REM — the stage where memory consolidation and emotional processing happen. Cutting sleep short cuts these cycles off first, which is why even moderate sleep reduction can significantly affect how well you remember and learn.`,
            },

            // Q3 — MC (source)
            {
              id:           'l05-q3',
              format:       'mc',
              question:     `Why should you avoid screens for an hour before bed?`,
              options:      [
                `Screens keep your brain too entertained to feel tired`,
                `Blue light from screens suppresses melatonin, the hormone that signals your brain it's time to sleep`,
                `Screens emit radiation that keeps you physically alert`,
                `Watching screens makes your eyes too tired to close properly`,
              ],
              correctIndex: 1,
              explanation:  `Melatonin is the hormone your brain produces to signal that it's time to sleep — and blue light from screens directly suppresses its production. Removing screens an hour before bed lets melatonin rise naturally, making it easier to fall asleep and stay asleep.`,
            },

            // Q4 — TF (fresh)
            {
              id:           'l05-q4',
              format:       'tf',
              question:     `Having a consistent bedtime — going to sleep and waking up at the same time each day — helps your body know when to feel sleepy.`,
              correctAnswer: true,
              explanation:  `True. Your body runs on a circadian rhythm — an internal clock that regulates when you feel sleepy and when you feel alert. Consistent sleep and wake times keep this clock well-calibrated. Irregular schedules confuse it, making it harder to fall asleep and harder to wake up feeling rested.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l05-q5',
              format:       'fill-blank',
              question:     `During deep sleep, your body releases growth hormone and repairs itself — this is when your body does its most important ___.`,
              options:      ['restoration', 'exercise', 'dreaming', 'waking'],
              correctIndex: 0,
              explanation:  `Deep sleep (slow-wave sleep) is your body's prime restoration period — muscles repair, bones strengthen, growth hormone is released, and your immune system reinforces itself. It's not rest in the passive sense; it's active maintenance.`,
            },

            // Q6 — MC (fresh — distinct from Q3 on blue light)
            {
              id:           'l05-q6',
              format:       'mc',
              question:     `What is the main purpose of a wind-down routine before bed?`,
              options:      [
                `To give you something to do when you are not tired yet`,
                `To send a consistent signal to your brain that sleep is coming, so it begins preparing`,
                `To make sure you have finished all your tasks before sleeping`,
                `To reduce the total amount of deep sleep your body needs each night`,
              ],
              correctIndex: 1,
              explanation:  `Your brain learns from patterns. The same sequence of activities each night — however simple — becomes a signal that sleep is approaching. Over time, your brain starts preparing for sleep as soon as the routine begins, making it much easier to fall asleep quickly and deeply.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l05-realworld',
          type: 'real-world',
          content: {
            scenario:    `Sleep Experiment`,
            description: `Try going to bed 15 minutes earlier than usual tonight, and keep your screens in another room. Notice in the morning whether anything feels different.`,
            familyAdventure: `Design a family sleep challenge for one week — consistent bedtime, no screens one hour before bed, and a wind-down routine. Track how everyone feels each morning. Which habits felt hardest? Which do you want to keep?`,
            realWorldConnection: `Sleep researchers call it the most underrated health tool there is — it affects everything from how well you learn to how strong your immune system stays. Every world-class athlete and performer treats sleep as part of their training.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l05-celebration',
          type: 'celebration',
          content: {
            message: `Wonderful, {name}! You now know that sleep is when your body and brain do their most important work — growing, repairing, and storing everything you've learned. Protecting your sleep is one of the most caring things you can do for yourself. Terra is so proud to walk this path with you.`,
          },
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L05.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L05] Loaded: "Sleep: The Superpower You're Missing" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l05-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l05-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L05] One or more magazine assets missing'));
}
