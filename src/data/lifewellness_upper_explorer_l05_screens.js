// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L05 — Hydration & Breath
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real science of hydration (kid-level), breath as nervous-system
//            regulation (vagus nerve, slow exhale work). The simplest tools
//            that compound enormously across a life.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 daily moves combining hydration + breath into life)
// SCOPE: water as essential body information carrier, breath as nervous
//        system tool, the two simplest wellness practices that affect
//        everything, how to make them daily
// VOICE: Terra = nurturing, practical, calm
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-05`,
      title: `Hydration & Breath`,
      duration: 18,
      xpReward: 75,
      badge: `water-breath-keeper`,
      badgeName: `Water & Breath Keeper`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore two of the simplest, most powerful wellness tools you have, and they're both completely free: WATER and BREATH. Most kids and adults barely think about them. Yet how much water you drink and how you breathe affect your mood, energy, focus, sleep, and even how you feel emotionally, every single day. The kid who learns to honor water and breath as daily wellness anchors builds a foundation everything else rests on. These two things are simple, free, and life-changing. Take a slow drink and a slow breath, and let's begin.`,
          headline: `Hydration & Breath`,
          subtitle: `Two free, simple tools that affect everything. Water and breath`,
          visual: `/ue-assets/lw/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Water: The Quiet Foundation`,
          paragraphs: [
            `Your body is about 60-65% WATER. Your brain is around 75% water. Almost every process happening inside you, digestion, blood flow, brain function, temperature regulation, joint movement, removing waste, requires water to work right. When you're well-hydrated, your body functions smoothly. When you're under-hydrated (which is most people, most days), your body slows down. Researchers have found that even mild dehydration (just 1-2% below ideal water levels) measurably reduces focus, mood, energy, and physical performance in kids and adults. You feel slower, foggier, and more tired without quite knowing why.`,
            `The signs of needing water are often subtle. Dark yellow urine is the easiest tell, you want it to look pale yellow. Headaches, tiredness, fuzzy thinking, dry mouth, and feeling "hungry" when you ate recently (L01's misread signal!) all can mean low water. Most kids need around 6-8 cups of water per day, MORE on hot days or when you've been moving a lot. Plain water is best. Sports drinks and juices have lots of sugar and aren't usually needed. Plain water with maybe lemon, cucumber, or berries is delicious and effective. Watch out for thinking that drinks with caffeine "count" toward your water, caffeine actually pulls some water OUT of your body. Plain water is the gold standard. Drink it throughout the day, not all at once.`,
          ],
          image: `/ue-assets/lw/l05-s1-water.webp`,
          imageCaption: `60-65% of you is water. Even mild dehydration hurts focus, mood, and energy.`,
          vocab: [
            { word: `hydration`,
              definition: `Having enough water in your body for it to work well. Your body is 60-65% water, your brain about 75%. Even mild dehydration (1-2% low) measurably hurts focus, mood, energy. Most kids need 6-8 cups daily, more on hot or active days.`,
              audioPrompt: `Hydration is having enough water in your body for it to work well, {name}. Your body is about 60-65 percent water. Your brain is around 75 percent water. Almost every process happening inside you requires water. Researchers found that even mild dehydration, just 1-2 percent low, measurably reduces focus, mood, energy, and physical performance. You feel slower, foggier, and more tired without quite knowing why. The signs are subtle. Dark yellow urine is the easiest tell, you want pale yellow. Headaches, tiredness, dry mouth, feeling hungry when you ate recently.` },
            { word: `dehydration`,
              definition: `Having too little water in your body for it to work well. Even mild dehydration (1-2% below ideal) measurably hurts focus, mood, energy, and physical performance. Easiest sign: dark yellow urine (pale yellow is the goal). Most kids need 6-8 cups of plain water daily, more on hot or active days.`,
              audioPrompt: `Dehydration is having too little water in your body for it to work well, {name}. Even mild dehydration, just 1-2 percent below ideal levels, measurably hurts focus, mood, energy, and physical performance in kids and adults. You feel slower, foggier, and more tired without quite knowing why. The easiest sign: dark yellow urine. Pale yellow means you're hydrated. Most kids need 6-8 cups of plain water per day, more on hot or active days. Plain water is the gold standard.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Breath: The Nervous System Remote Control`,
          paragraphs: [
            `Now for one of the most underrated tools humans have: BREATH. You breathe about 20,000 times every day, mostly without thinking about it. But here's the magic: your breath is one of the FEW things in your body you can do both AUTOMATICALLY and DELIBERATELY. Your heart, your digestion, your blood pressure, you can't directly control any of those. But your breath, you can. And by controlling your breath, you can DIRECTLY change how your nervous system is working, on purpose, in seconds.`,
            `Here's the science. When you're stressed, scared, or excited, your breathing gets faster and shallower (you're activating your SYMPATHETIC nervous system, fight/flight/freeze). When you're calm, your breathing is slow and deep (you're activating your PARASYMPATHETIC nervous system, rest/repair). Here's the powerful part: this works BOTH ways. You can deliberately slow your breath, and your nervous system will follow your breath into calm. Researchers studying this have found that just a few minutes of slow breathing measurably calms the body, lowers heart rate, reduces stress hormones, and clears the mind. The single most useful breath trick: SLOW DOWN THE EXHALE. When your exhale is longer than your inhale, your body shifts into calm mode quickly. Try it now: breathe in for 4 counts, breathe out slowly for 6-7 counts. Feel anything shift? That's your nervous system listening.`,
          ],
          image: `/ue-assets/lw/l05-s2-breath.webp`,
          imageCaption: `Breath is the remote control for your nervous system. Slow exhale equals a quick shift to calm.`,
          vocab: [
            { word: `slow exhale`,
              definition: `The single most powerful breath move for calming yourself. When your exhale is longer than your inhale (in for 4, out for 6-7), your body shifts into "calm mode" within seconds. Activates the parasympathetic nervous system. Free, available anytime, deeply effective.`,
              audioPrompt: `Slow exhale is the single most powerful breath move for calming yourself, {name}. When your exhale is longer than your inhale, your body shifts into calm mode within seconds. Try it now. Breathe in for 4 counts, breathe out slowly for 6-7 counts. Researchers studying this have found that just a few minutes of slow breathing measurably calms the body, lowers heart rate, reduces stress hormones, and clears the mind. This activates the parasympathetic nervous system, your body's rest-and-repair mode. Free, available anytime, deeply effective.` },
            { word: `parasympathetic nervous system`,
              definition: `Your body's rest-and-repair mode. When activated, heart slows, breathing deepens, muscles relax, digestion works well, energy restores. This is when learning, healing, and clear thinking happen best. The most direct way to activate it on purpose: slow exhale (out longer than in).`,
              audioPrompt: `The parasympathetic nervous system is your body's rest-and-repair mode, {name}. When it's activated, your heart slows, breathing deepens, muscles relax, digestion works well, and energy gets restored. This is the mode where learning, healing, and clear thinking happen best. The single most direct way to activate it on purpose is the slow exhale, making your exhale longer than your inhale. In for 4 counts, out for 6-7 counts. Try it now. Your body can shift into rest mode within seconds.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why These Two Are So Powerful Together`,
          paragraphs: [
            `Water and breath are TWO OF THE FEW THINGS that touch every part of your body every minute. Water flows through every cell, breath enters and leaves every minute of your life. They affect everything. Together, they form a quiet foundation that influences your energy, mood, focus, sleep, immune system, digestion, and stress level all at once. The amazing thing: most people barely think about either, despite how easy they are to optimize. The kid who pays even small attention to both wins a huge wellness edge with very little effort.`,
            `Here's how they connect with everything else you've learned. Good HYDRATION supports clear body wisdom (L01), good SLEEP (L02), good FOOD digestion (L03), and good MOVEMENT (L04). Slow BREATH supports calm body signals (L01), faster falling asleep (L02), and recovery after movement (L04). Every wellness lesson coming up, nervous system regulation, stress, screen time, body image, will be easier when your hydration and breath are tended. They're like keeping the soil fertile so everything else can grow. Most people skip these "boring" basics and wonder why they feel "off." Don't be most people. Drink water. Breathe slowly. These tiny, free, daily practices transform everything else.`,
          ],
          image: `/ue-assets/lw/l05-s3-together.webp`,
          imageCaption: `Water plus breath equals the quiet foundation. They affect every system. Free, simple, transformative.`,
          vocab: [
            { word: `wellness foundation`,
              definition: `The simple practices that affect every body system every day. Water and breath are the quietest and most powerful foundation. Skipping them undermines everything else. Tending them makes every other wellness practice easier and more effective.`,
              audioPrompt: `A wellness foundation is the simple practices that affect every body system every day, {name}. Water and breath are the quietest and most powerful foundation. They form the soil everything else grows in. Skipping them undermines every other practice. Tending them makes everything else easier. Good hydration supports clear body wisdom, good sleep, good digestion, and good movement. Slow breath supports calm signals, faster sleep, and recovery. These tiny, free, daily practices transform everything else. Don't skip them.` },
            { word: `sympathetic nervous system`,
              definition: `Your body's alert mode. When activated, heart speeds up, breathing gets faster and shallower, muscles tense, focus narrows, digestion slows. Healthy and necessary for real challenges. The trouble is when it stays on too long without enough rest and recovery.`,
              audioPrompt: `The sympathetic nervous system is your body's alert mode, {name}. When it's activated, your heart speeds up, breathing gets faster and shallower, muscles tense, focus narrows, and digestion slows. Your body is preparing for action, fight, flight, or freeze. This is healthy and necessary when there's a real challenge. The trouble is when it stays on too long. Modern life, busy schedules, screens, and stress keep many kids in low-level alert mode most of the day, without the rest and repair they need.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Making Hydration and Breath Daily Practices`,
          paragraphs: [
            `Here's how to actually weave hydration and breath into your life, gently and sustainably. For WATER: start your day with a glass of water as soon as you wake up (your body got mildly dehydrated overnight). Keep a water bottle visible throughout the day, the easier water is to grab, the more you'll drink. Have a glass with each meal. Hot days, active days, sick days, drink even more. Notice your urine color, it's the easiest hydration check (pale yellow is the goal). If you forget some days, no shame, just begin again tomorrow.`,
            `For BREATH: build small breath check-ins into your day. Before getting out of bed: 3 slow breaths to start awake and settled. When you notice stress or strong feelings: slow exhale for 6-7 counts a few times. Before a test, a hard conversation, or a big moment: 3-5 slow exhales. Before bed: 5-10 slow breaths to settle your nervous system for sleep. You don't need to "meditate" formally. Just use slow exhales when you notice you need calm. These tiny breath moments add up to powerful nervous-system regulation over time. Terra's first teaching about water and breath: simple isn't the same as unimportant. The simplest practices often matter MOST. Drink water throughout your day. Use slow breath when you need calm. Both are free, available anytime, and quietly transformative. Make them habits early, and your whole adult life will be different because of it.`,
          ],
          image: `/ue-assets/lw/l05-s4-daily.webp`,
          imageCaption: `Morning water, daily sips, meals with water, breath check-ins, slow exhales, settled sleep.`,
          vocab: [
            { word: `breath check-in`,
              definition: `A tiny breath practice woven into your day, slow exhales when you notice stress, before tests or hard moments, before bed. Doesn't require formal meditation. Adds up over time to powerful nervous-system regulation. Free, instant, available anywhere.`,
              audioPrompt: `A breath check-in is a tiny breath practice woven into your day, {name}. Slow exhales when you notice stress. Before tests or hard moments. Before bed. You don't need to meditate formally. Just use slow exhales when you notice you need calm. These tiny moments add up to powerful nervous-system regulation over time. Free, instant, available anywhere. Build them into the natural pauses of your day. Three slow breaths before getting out of bed. A few slow exhales when stressed. Five to ten slow breaths before sleep.` },
            { word: `nervous system regulation`,
              definition: `The skill of flowing between alert mode and rest mode as life calls for each. Alert when there's something real to handle, back to rest when the challenge passes. Built through daily practices: slow exhales, water, movement, sleep, safety cues, time in nature.`,
              audioPrompt: `Nervous system regulation is the skill of flowing between alert mode and rest mode as life calls for each, {name}. Alert when there's something real to handle. Back to rest when the challenge passes. Most people today get stuck in alert mode, feeling wired but tired, irritable, sleeping poorly, hard to focus. Simple daily practices build this skill over time. Slow exhales, water, movement, sleep, safety cues, time in nature. These build the nervous system's ability to flow and recover.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put a daily hydration and breath practice in order, {name}. Here are five moves of combining water and breath into your day, scrambled. Use the arrows to arrange them from MORNING (first thing) to NIGHT (settling for sleep). This is a real practice you can use tomorrow.`,
          items: [
            { id: `step-morning-water`,  label: `MORNING WATER PLUS 3 SLOW BREATHS. Start the day with a glass of water (you got mildly dehydrated overnight) and 3 slow grounding breaths`,                            position: 1 },
            { id: `step-check-ins`,      label: `BREATH CHECK-INS THROUGHOUT THE DAY. Slow exhales when you notice stress, strong feelings, or just need to reset`,                                                 position: 2 },
            { id: `step-water-meals`,    label: `WATER WITH MEALS. A full glass with each meal and snacks. Sip throughout the day from a visible water bottle`,                                                     position: 3 },
            { id: `step-stress`,         label: `SLOW EXHALES UNDER STRESS. Before tests, hard conversations, big moments, 3-5 slow exhales (in for 4, out for 6-7) shifts your nervous system fast`,             position: 4 },
            { id: `step-sleep`,          label: `SETTLED BREATH BEFORE SLEEP. 5-10 slow breaths in bed to signal "the day is done" and let your nervous system drift toward rest`,                                 position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of daily hydration and breath: morning water plus grounding breaths, check-ins throughout the day, water with meals, slow exhales under stress, settled breath before sleep. Tiny, simple, free, transformative. Practice this and your foundation gets quietly stronger every single day.`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What PERCENT of your body is WATER?`,
              options: [
                `About 10 percent`,
                `About 60-65 percent of your body; about 75 percent of your brain`,
                `About 25 percent`,
                `About 95 percent`,
              ],
              correctIndex: 1,
              explanation: `Your body is about 60-65 percent water. Your brain is around 75 percent water. Almost every process inside you (digestion, blood flow, brain function, temperature, joints, waste removal) requires water to work right.` },

            { id: `l05-q2`, format: `true-false`,
              question: `True or false: Even MILD dehydration (1-2 percent low) measurably hurts focus, mood, and energy.`,
              correctAnswer: true,
              explanation: `True. Researchers found that even mild dehydration (just 1-2 percent below ideal water levels) measurably reduces focus, mood, energy, and physical performance. You feel slower, foggier, and tired without quite knowing why. That's why hydration matters more than most people realize.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What's the EASIEST way to tell if you need more water?`,
              options: [
                `Look in the mirror`,
                `URINE COLOR. Dark yellow means you need water, pale yellow is the goal`,
                `Check the scale`,
                `Wait for thirst only`,
              ],
              correctIndex: 1,
              explanation: `Urine color is the easiest tell. Pale yellow is the goal. Dark yellow means you need more water. Other signs (headaches, tiredness, fuzzy thinking, dry mouth, "hunger" right after eating) can also indicate low water.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `Why is BREATH such a powerful tool?`,
              options: [
                `Everyone breathes, so it doesn't matter`,
                `Breath is one of the FEW body functions you can do both AUTOMATICALLY and DELIBERATELY. By changing your breath, you DIRECTLY change your nervous system`,
                `Breathing is boring`,
                `Only matters for singers`,
              ],
              correctIndex: 1,
              explanation: `Breath is one of the few body functions you can do both automatically and deliberately. You can't directly control heart rate, digestion, or blood pressure. But you can control breath, and by controlling breath, you directly change your nervous system. Powerful and free.` },

            { id: `l05-q5`, format: `multiple-choice`,
              question: `What's the SINGLE MOST POWERFUL breath trick for calming yourself?`,
              options: [
                `Hold your breath`,
                `SLOW EXHALE. Make your exhale LONGER than your inhale (in for 4, out for 6-7). Shifts your body into calm mode within seconds`,
                `Breathe as fast as possible`,
                `Mouth-breathing`,
              ],
              correctIndex: 1,
              explanation: `Slow exhale is the single most powerful breath move for calming. When your exhale is LONGER than your inhale (in for 4, out for 6-7), your body shifts into calm mode within seconds. Activates the parasympathetic nervous system. Try it anywhere, anytime. It really works.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `Which nervous system mode does FAST shallow breathing activate?`,
              options: [
                `Parasympathetic (rest/repair)`,
                `SYMPATHETIC. Fight/flight/freeze, the activated mode`,
                `Neither`,
                `Both equally`,
              ],
              correctIndex: 1,
              explanation: `Fast shallow breathing activates the SYMPATHETIC nervous system (fight/flight/freeze). Slow deep breathing activates the PARASYMPATHETIC nervous system (rest/repair). You can deliberately shift between them through your breath, which is the magic.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `Why are water and breath so POWERFUL together?`,
              options: [
                `They're not`,
                `They touch every part of your body every minute. Together they form a QUIET FOUNDATION affecting energy, mood, focus, sleep, immunity, digestion, stress all at once`,
                `Only one matters`,
                `Random coincidence`,
              ],
              correctIndex: 1,
              explanation: `Water and breath are two of the few things that touch every part of your body every minute. Together they form a quiet foundation that influences energy, mood, focus, sleep, immune system, digestion, and stress level all at once. The simplest things, yet they affect everything.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about water and breath?`,
              options: [
                `Both are unimportant`,
                `SIMPLE isn't the same as unimportant. The simplest practices often matter MOST. Drink water throughout your day. Use slow breath when you need calm`,
                `Only matters for adults`,
                `Drink only juice`,
              ],
              correctIndex: 1,
              explanation: `Simple isn't the same as unimportant. The simplest practices often matter most. Drink water throughout your day. Use slow breath when you need calm. Both are free, available anytime, and quietly transformative. Make them habits early.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Take a slow, full breath, {name}, and a small sip of water if you have some. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, how much water do you usually drink each day? What's your urine color most days?` },
            { id: `r2`, text: `When was the last time you used slow exhales to calm yourself? When could you have used them but didn't?` },
            { id: `r3`, text: `Of the five practices (morning water, breath check-ins, water with meals, stress breath, sleep breath), which one would help you MOST this week?` },
            { id: `r4`, text: `Try a slow exhale right now: in for 4 counts, out for 6-7 counts. Notice. What shifts?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Hydration and breath research is robust and consistent. Studies on kids and adults find that better-hydrated people have sharper attention, more stable moods, better physical performance, and fewer headaches. Studies on breathwork find that slow exhale practices (just a few minutes) measurably lower stress hormones, calm heart rate, and shift the nervous system into recovery mode. These aren't ancient mysticism, they're peer-reviewed science. Terra's note: in a world full of complicated wellness products and rules, water and breath are the simplest and most powerful tools you have. Free. Always available. Effective in seconds. The adults who feel best across decades aren't usually the ones with the most expensive supplements, they're the ones who quietly drink water and breathe well, every day. Start now. Make them habits while you're young. The compound returns over decades are massive.`,
          familyAdventure: `Family Water & Breath Practice. As a family, try this for one week. Each person keeps a visible water bottle and refills it throughout the day. Each meal includes a glass of water for everyone. Once a day (maybe at dinner or before bed), the whole family takes 3 slow breaths together (in for 4, out for 6-7). Adults model the practice. Notice how the family feels after a week. Better focus, better moods, calmer evenings often follow. You're building a home where the simplest wellness practices are the most cherished.`,
          creativePrompt: {
            intro: `Write about water and breath in your daily life, what works, what doesn't, and one tiny commitment.`,
            floor: `Write at least 5 sentences. Describe your current water and breath habits and what you'd like to add.`,
            stretch: `Write 8 to 10 sentences. Build a fuller picture of how water and breath could change your daily experience.`,
            open: `Write as much as you want. Write a full piece about water and breath as wellness foundations. Honestly describe your current daily water intake (without judgment), and your current relationship with breath (do you ever use slow exhales when stressed?). Reflect on the truth that two of the simplest tools (water and breath) affect every body system. Describe how you'd like to weave them into your days, with specific moments where each would help. End with one small commitment for each (water and breath) and how you'll remember to actually do them. Make it kind, specific, and practical.`,
            frames: [
              `My current water habits are ___.`,
              `My current relationship with breath is ___.`,
              `When I most need slow breath is ___.`,
              `My small water commitment is ___.`,
              `My small breath commitment is ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now understand two of the simplest, most powerful wellness tools you have. WATER (60-65 percent of you, mild dehydration hurts everything, plain water is the gold standard) and BREATH (the nervous-system remote control, slow exhale shifts you to calm in seconds). Drink water throughout the day. Use slow breath when you need calm. These small daily practices quietly transform everything. Next, we go deeper into the nervous system itself, the body's "alert mode" vs. "rest mode," how to recognize each, and how to calm yourself when needed. YOUR NERVOUS SYSTEM. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `water-breath-keeper`,
          badgeName: `Water & Breath Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
