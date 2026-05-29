// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L02 — Sleep: The Magic Reset
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real sleep science — Matthew Walker (Why We Sleep), Mary
//            Carskadon (kids' sleep research). Sleep stages, why sleep
//            matters, how to fall asleep, sleep hygiene basics.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 steps of winding down well for sleep)
// SCOPE: sleep is foundational, what happens during sleep, the right
//        amount, how to fall asleep, sleep hygiene that actually works
// VOICE: Terra = grounded, nurturing, models good sleep wisdom
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-02`,
      title: `Sleep: The Magic Reset`,
      duration: 18,
      xpReward: 75,
      badge: `sleep-keeper`,
      badgeName: `Sleep Keeper`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore the single most important wellness practice there is: SLEEP. Yes, more important than food, exercise, or anything else. When you sleep well, everything else in your wellness gets easier. When you sleep poorly, everything else gets harder. Most kids don't realize how powerful sleep is, what magic actually happens during those hours, and how to set themselves up for the deep restorative sleep that makes them their best selves. Today, you learn the real science. Take a relaxed breath, and let's begin.`,
          headline: `Sleep: The Magic Reset`,
          subtitle: `The single most powerful wellness practice — what's happening, and how to do it well`,
          visual: `/ue-assets/lw/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Sleep Is Not "Doing Nothing"`,
          paragraphs: [
            `Most kids think sleep is just "off" time, when your body and brain are doing nothing. Researchers have learned the opposite is true. While you sleep, your brain and body are doing some of the most important work of your entire life. Your brain is processing the day's information, deciding what to remember and what to forget. It's literally CLEANING ITSELF, washing out toxic waste through a special system that only activates during sleep. Your growing body is releasing growth hormones, repairing muscle, building bone. Your immune system is strengthening. Your emotions are getting processed. Your body is healing.`,
            `Sleep researcher Matthew WALKER calls sleep "the single most effective thing we can do to reset our brain and body health each day." When you sleep enough, you wake up sharper, calmer, stronger, and healthier than when you went to bed. When you don't sleep enough, the work doesn't get done, and your brain and body slowly accumulate damage. Most kids your age need 9-11 HOURS of sleep, more than most kids actually get. This isn't optional, it's the foundation of every other thing in this whole subject. Skimp on sleep, and your body listening (L01), your emotions, your energy, your eating, your focus, your immune system all suffer. Get enough sleep, and almost everything gets easier.`,
          ],
          image: `/ue-assets/lw/l02-s1-not-nothing.webp`,
          imageCaption: `Sleep is when your brain cleans itself and your body repairs. Active work, not rest.`,
          vocab: [
            { word: `sleep`,
              definition: `The single most important wellness practice. While you sleep, your brain cleans itself, processes the day, decides what to remember; your body releases growth hormones, repairs muscles, strengthens immunity. Kids ages 9-10 need 9-11 hours per night.`,
              audioPrompt: `Sleep is the single most important wellness practice, {name}. While you sleep, your brain processes the day's information, deciding what to remember. It literally cleans itself, washing out toxic waste through a system that only activates during sleep. Your growing body is releasing growth hormones, repairing muscle, building bone. Your immune system strengthens. Your emotions get processed. Researcher Matthew Walker calls sleep the single most effective thing we can do to reset our brain and body health each day. Most kids your age need 9 to 11 hours of sleep.` },
            { word: `melatonin`,
              definition: `The natural hormone your brain releases to help you fall asleep. Triggered by darkness; blocked by bright light, especially blue light from screens. Protecting your melatonin system by dimming lights and avoiding screens before bed is one of the most evidence-backed sleep improvements there is.`,
              audioPrompt: `Melatonin is the natural hormone that makes you sleepy, {name}. Your brain releases it when darkness signals the day is ending. When bright light hits your eyes, especially the blue light from screens, your brain stops making melatonin. This is why screens before bed make falling asleep harder. Your body's melatonin system is a finely tuned natural clock. Dimming lights and avoiding screens in the last hour before bed protects it. Simple, powerful, and completely free. It's one of the most evidence-backed sleep improvements there is.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Actually Happens While You Sleep`,
          paragraphs: [
            `Sleep isn't one thing, it's a series of STAGES that your brain cycles through about every 90 minutes. There are four main stages. STAGE 1 is light sleep, you're just drifting off. STAGE 2 is deeper, but still relatively light. Most of your night is actually stage 2. STAGE 3 is DEEP SLEEP (sometimes called slow-wave sleep), where most of the physical restoration happens, growth hormone release, immune system work, muscle repair. Deep sleep is also when memories of FACTS and SKILLS get cemented in your brain. If you studied for a test the day before, deep sleep is where what you learned gets locked in.`,
            `The fourth stage is REM sleep (which stands for "rapid eye movement"). This is when most DREAMING happens, and when your brain processes EMOTIONS and creative thinking. REM is essential for emotional health. Without enough REM sleep, kids and adults become more anxious, more reactive, and have a harder time handling stress. Throughout the night, your brain cycles through all four stages, getting deeper, then lighter, then deeper again. Each cycle is precious. If you wake up too early or have your sleep interrupted, you miss cycles, and the cleaning, repair, and emotional processing don't get done. Researchers found that even ONE bad night of sleep affects mood, focus, immunity, and decision-making the next day. Now you know why "sleep on it" actually works for hard problems.`,
          ],
          image: `/ue-assets/lw/l02-s2-stages.webp`,
          imageCaption: `Four sleep stages: light, lighter, deep restoration, REM (dreaming + emotion processing).`,
          vocab: [
            { word: `sleep stages`,
              definition: `The four phases your brain cycles through each night, about every 90 minutes. Stages 1-2 are light sleep. Stage 3 is DEEP SLEEP (physical restoration, growth hormone, memory cementing). REM is dream sleep (emotion processing, creativity). All four cycles matter.`,
              audioPrompt: `Sleep stages are the four phases your brain cycles through each night, about every 90 minutes, {name}. Stage 1 is light sleep, you're just drifting off. Stage 2 is deeper, but still relatively light. Stage 3 is deep sleep, sometimes called slow-wave sleep, where most physical restoration happens, growth hormone release, immune system work, muscle repair, and memory cementing. The fourth stage is REM, when most dreaming happens and your brain processes emotions and creative thinking. Without enough REM, kids become more anxious and reactive. Each cycle is precious.` },
            { word: `REM sleep`,
              definition: `Rapid eye movement sleep — the stage when most dreaming happens and your brain processes emotions, creative problems, and social memories. Essential for emotional regulation. Kids without enough REM become more anxious and reactive. REM happens mostly in the later part of the night, so protecting your full sleep duration protects your emotional health.`,
              audioPrompt: `REM sleep stands for rapid eye movement, the stage when most dreaming happens, {name}. During REM, your brain processes emotions, solves creative problems, and consolidates memories. It's nearly as active as when you're awake. Researchers find that kids without enough REM become more anxious, more reactive, and handle stress worse. REM happens mostly in the later part of the night. If you wake up too early, you cut your REM short. Protecting your full sleep duration protects your emotional health.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How to Fall Asleep (And Stay Asleep)`,
          paragraphs: [
            `Falling asleep isn't always easy. Here's the real science of what helps. First, KEEP A CONSISTENT BEDTIME. Your body has an internal clock (the CIRCADIAN RHYTHM) that runs on light and routine. Going to bed at roughly the same time each night, even on weekends, trains your body to fall asleep easily. Random bedtimes confuse your clock and make sleep harder. Second, DIM THE LIGHTS in the hour before bed. Bright light tells your brain "it's daytime," so it stops making MELATONIN (the natural hormone that makes you sleepy). Screens are the biggest offender, their bright blue light is especially disruptive. The hour before bed should be the dimmest, calmest part of your day.`,
            `Third, WIND DOWN with calm activities. Reading, gentle stretching, talking with family, drawing, a warm bath, meditation. Your nervous system needs a SIGNAL that the day is ending. Going from high-stimulation activities straight to bed makes sleep much harder. Fourth, KEEP YOUR ROOM COOL, DARK, and QUIET. Your body sleeps best in slightly cool temperatures (around 65°F/18°C), real darkness, and quiet. Even small amounts of light or noise can fragment sleep. Fifth, AVOID big meals, caffeine, or sugar right before bed. Your body can't fully rest while it's working hard to digest. If you do these five things consistently, you'll fall asleep faster and sleep deeper. Sleep researchers call this SLEEP HYGIENE, and it's the simple skill that transforms how rested you feel.`,
          ],
          image: `/ue-assets/lw/l02-s3-fall-asleep.webp`,
          imageCaption: `Consistent bedtime, dim lights, wind down, cool/dark/quiet room, no late food/caffeine.`,
          vocab: [
            { word: `sleep hygiene`,
              definition: `The set of habits that set you up for deep, restorative sleep. Consistent bedtime, dim lights before bed, wind-down activities, cool/dark/quiet room, no late food or caffeine. Simple, science-backed, transforms how rested you feel.`,
              audioPrompt: `Sleep hygiene is the set of habits that set you up for deep, restorative sleep, {name}. First, keep a consistent bedtime, your body has an internal clock that runs on light and routine. Second, dim the lights in the hour before bed, bright light stops your brain from making melatonin. Third, wind down with calm activities, your nervous system needs a signal the day is ending. Fourth, keep your room cool, dark, and quiet. Fifth, avoid big meals, caffeine right before bed. Simple, science-backed, transforms how rested you feel.` },
            { word: `circadian rhythm`,
              definition: `Your body's internal clock — a roughly 24-hour biological cycle that regulates when you feel awake and sleepy, driven by light and routine. Consistent bedtimes train it; irregular bedtimes and bright screens at night disrupt it. A well-tuned circadian rhythm means your body begins preparing for sleep before you even lie down.`,
              audioPrompt: `The circadian rhythm is your body's internal clock, a roughly 24-hour biological cycle that regulates when you feel awake and sleepy, {name}. It's driven by light. Bright daylight keeps you awake and alert. Darkness signals your body to wind down and release melatonin. The circadian rhythm is why going to bed at consistent times works so well. Your body learns the pattern and begins preparing for sleep before you even lie down. Disrupting it with irregular bedtimes or bright screens at night confuses the clock.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Honoring Sleep as a Wellness Foundation`,
          paragraphs: [
            `One important truth: many kids and adults treat sleep as the thing they sacrifice when they're busy. "I'll stay up later to finish this." "I'll catch up on sleep this weekend." The science shows this approach doesn't work. Sleep DEBT (the sleep you didn't get) doesn't really "catch up." You can recover a little, but most lost sleep stays lost. Skimping on sleep night after night slowly damages your body, brain, mood, immune system, and learning. Researchers studying kids found that even ONE hour less of sleep per night, sustained over weeks, measurably hurts grades, attention, and emotional regulation.`,
            `Honoring sleep isn't being "lazy" or weak, it's being WISE about how your body actually works. The kid who guards their sleep like the precious thing it is becomes the kid who has more energy, better focus, calmer emotions, faster recovery from illness, and a happier life. You don't have to be perfect about it. Some nights life happens, late events, sleepovers, big games, that's normal. But on most days, treat sleep as non-negotiable. Make it a priority, not the thing you cut last. Terra's first teaching about sleep: sleep is the most powerful health practice you have. Most adults wish they'd taken it seriously sooner. You don't have to wait. Start now, treat sleep as sacred, and watch your whole life feel different.`,
          ],
          image: `/ue-assets/lw/l02-s4-honoring.webp`,
          imageCaption: `Sleep debt doesn't really "catch up." Treat sleep as a wellness foundation, not what you cut.`,
          vocab: [
            { word: `sleep debt`,
              definition: `The accumulating lack of sleep when you don't get enough. Doesn't really "catch up" on weekends. Even one hour less per night, sustained for weeks, measurably hurts grades, attention, mood, and immunity. Sleep is the foundation, not the thing to cut.`,
              audioPrompt: `Sleep debt is the accumulating lack of sleep when you don't get enough, {name}. Many kids and adults treat sleep as the thing they sacrifice when busy. I'll stay up later. I'll catch up this weekend. The science shows this doesn't work. Sleep debt doesn't really catch up. You can recover a little, but most lost sleep stays lost. Researchers studying kids found that even one hour less of sleep per night, sustained over weeks, measurably hurts grades, attention, and emotional regulation. Honoring sleep isn't lazy. It's wise.` },
            { word: `sleep as foundation`,
              definition: `The understanding that sleep isn't optional — it's the base that makes everything else possible. Mood, learning, immunity, emotional regulation, and physical health all rest on sleep quality. Treat sleep as sacred, not the last thing you protect. Everything else gets easier when you do.`,
              audioPrompt: `Sleep as foundation is the understanding that sleep isn't optional or the thing you cut when life gets busy, it's the base that makes everything else possible, {name}. Your mood, learning, immunity, emotional regulation, and physical health all rest on sleep quality. Skimping on sleep night after night slowly erodes all of these. Most adults report wishing they had taken sleep seriously sooner. You don't have to make that mistake. Treat sleep as sacred, not the last thing you protect. Everything else gets easier when you do.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put a winding-down-for-sleep routine in order, {name}. Here are five steps of getting your body and brain ready for deep restorative sleep, scrambled. Use the arrows to arrange them from FIRST (earliest in the evening) to LAST (right before lights out). This is a real practice you can use tonight.`,
          items: [
            { id: `step-stop-screens`,  label: `STOP SCREENS at least 30-60 minutes before bed (bright blue light blocks melatonin, the sleep hormone)`,                                  position: 1 },
            { id: `step-dim`,            label: `DIM THE LIGHTS in your home or room (lower light = your brain knows the day is ending)`,                                                  position: 2 },
            { id: `step-wind`,           label: `WIND DOWN with calm activities (reading, stretching, talking quietly with family, drawing, warm bath, meditation)`,                       position: 3 },
            { id: `step-room`,           label: `MAKE YOUR ROOM SLEEP-READY (cool around 65°F/18°C, dark, quiet, comfortable bedding)`,                                                     position: 4 },
            { id: `step-body`,           label: `DO A BODY CHECK-IN (L01!) — relax tense muscles, take a few slow breaths, get comfortable, then let yourself drift off`,                  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of winding down well for sleep: stop screens, dim lights, wind down with calm activities, sleep-ready room, body check-in. Try this tonight. Your brain and body will reward you with deeper, more restorative sleep, and you'll wake up sharper, calmer, and more yourself.`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l02-q1`, format: `true-false`,
              question: `True or false: While you sleep, your brain and body are doing important active work.`,
              correctAnswer: true,
              explanation: `True. Sleep isn't "doing nothing." Your brain processes the day's info, cleans itself of toxic waste, decides what to remember. Your body releases growth hormones, repairs muscles, strengthens immunity. Sleep is some of the most important active work your body does.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `How much sleep do kids ages 9-10 need per night?`,
              options: [
                `4-5 hours`,
                `9-11 HOURS — more than most kids actually get`,
                `6 hours`,
                `It varies wildly`,
              ],
              correctIndex: 1,
              explanation: `Most kids ages 9-10 need 9-11 hours of sleep per night. This is more than most kids actually get. It's not optional, it's the foundation. Skimping on sleep means the body's nightly repair work doesn't get done.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What did Matthew WALKER call sleep?`,
              options: [
                `A waste of time`,
                `"The single most effective thing we can do to reset our brain and body health each day"`,
                `Just rest`,
                `An ancient tradition`,
              ],
              correctIndex: 1,
              explanation: `Sleep researcher Matthew Walker calls sleep "the single most effective thing we can do to reset our brain and body health each day." When you sleep enough, you wake up sharper, calmer, stronger, healthier. When you don't, the work doesn't get done.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `What are the FOUR sleep stages?`,
              options: [
                `Just one stage`,
                `Stages 1-2 (light sleep), Stage 3 (DEEP SLEEP for restoration and memory), and REM (dream sleep for emotion processing)`,
                `Awake, dreaming, gone`,
                `Light, medium, heavy`,
              ],
              correctIndex: 1,
              explanation: `Four stages. Stages 1-2 are light sleep. Stage 3 is DEEP sleep (physical restoration, growth hormone, locking in facts and skills you learned). REM is dream sleep (emotion processing, creativity). Each cycle of all four takes about 90 minutes.` },

            { id: `l02-q5`, format: `multiple-choice`,
              question: `Why are SCREENS so disruptive before bed?`,
              options: [
                `They're not, screens are fine`,
                `Their bright BLUE LIGHT tells your brain "it's daytime" and STOPS your brain from making MELATONIN (the natural sleep hormone)`,
                `They make noise`,
                `Random reason`,
              ],
              correctIndex: 1,
              explanation: `Screens emit bright blue light that tells your brain "it's daytime," which stops melatonin (the natural sleep hormone) from being released. This makes falling asleep harder. The hour before bed should be the dimmest, calmest part of your day.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `What is SLEEP HYGIENE?`,
              options: [
                `Brushing your teeth`,
                `The set of HABITS that set you up for deep sleep: consistent bedtime, dim lights, wind-down, cool/dark/quiet room, no late food or caffeine`,
                `Showering before bed only`,
                `Cleaning your pillow`,
              ],
              correctIndex: 1,
              explanation: `Sleep hygiene is the set of habits that set you up for deep restorative sleep. Consistent bedtime, dim lights before bed, calm wind-down activities, cool/dark/quiet room, no late food or caffeine. Simple, science-backed, transforms how rested you feel.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `What is the CIRCADIAN RHYTHM?`,
              options: [
                `A dance`,
                `Your body's internal CLOCK that runs on light and routine — keeping consistent bedtimes (even on weekends) trains it to fall asleep easily`,
                `A type of music`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `The circadian rhythm is your body's internal clock that runs on light and routine. Going to bed at roughly the same time each night, even weekends, trains your body to fall asleep easily. Random bedtimes confuse the clock and make sleep harder.` },

            { id: `l02-q8`, format: `true-false`,
              question: `True or false: You can fully "catch up" on lost sleep by sleeping in on weekends.`,
              correctAnswer: false,
              explanation: `False. Sleep debt doesn't really catch up. You can recover a little, but most lost sleep stays lost. Even one hour less per night, sustained over weeks, hurts grades, attention, and emotional regulation. Sleep is the foundation, not the thing to cut.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Take a relaxed breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, how much sleep do you usually get? How do you feel after a great night of sleep vs. a poor one?` },
            { id: `r2`, text: `Of the five wind-down steps, which one do you ALREADY do well? Which one would help most if you added it?` },
            { id: `r3`, text: `What's ONE small change to your bedtime routine you could try this week (earlier screen cutoff, dimmer lights, calmer wind-down)?` },
            { id: `r4`, text: `What might be different in your days, mood, focus, energy, if you protected your sleep more?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Sleep research is one of the most studied areas in modern health science. The findings are unanimous: kids and adults who get enough quality sleep have better mood, better immune function, sharper learning, stronger memory, better emotional regulation, better physical health, and longer lives. Sleep researchers have been so consistent about this that they've started calling sleep "the foundation under every other wellness practice." Terra's note: most adults wish they had taken sleep seriously sooner. They lived for years thinking they could push through tiredness, only to learn later that sleep was the missing piece they could have prioritized all along. You don't have to make that mistake. Start now. Treat sleep as the precious, foundational practice it is. Guard your bedtime. Honor your wind-down. Skip the screens in the last hour. Your body and brain will reward you with energy, focus, calm, and joy that no caffeine or hack can replicate. Sleep is free. It's available every single night. It's the most powerful wellness tool you have.`,
          familyAdventure: `Family Wind-Down Practice. As a family, try this for one week: pick a wind-down time (maybe 45 minutes before bed for the kids, longer for adults). During that time, screens go away, lights dim, and everyone shifts into calm activities (reading, drawing, talking, stretching, music, warm tea). Adults model the practice too. Notice how the whole family feels after a week. Most families find that everyone is calmer, falls asleep faster, and feels more rested. You're building a home that honors sleep, one of the kindest things you can do for everyone in the family.`,
          creativePrompt: {
            intro: `Write about your sleep — what works, what doesn't, and one specific commitment to honoring it better.`,
            floor: `Write at least 5 sentences. Describe your current sleep, what's working, what isn't, and one small change you'll try.`,
            stretch: `Write 8 to 10 sentences. Build a fuller reflection with current state, ideal state, and the practices you'll add.`,
            open: `Write as much as you want. Write a full piece about your relationship with sleep. Be honest about your current state, how much sleep you usually get, how you feel after good nights vs. bad nights, what makes it hard to fall asleep sometimes. Reflect on what you've learned: sleep is active work, not "doing nothing," your body and brain are repairing, processing, and growing all night. Describe the kind of sleep practice you want to build, using the five wind-down steps and sleep hygiene principles. Include specific commitments (screens off by X, lights dim by Y, wind-down activity Z). End with reflection on what could shift in your life if you treated sleep as the precious foundation it is. Make it specific, honest, and warm.`,
            frames: [
              `My current sleep is ___.`,
              `After a great night of sleep, I feel ___. After a poor night, I feel ___.`,
              `The wind-down practices I want to add are ___.`,
              `My specific commitments are ___.`,
              `If I treated sleep as foundational, my life could ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Strong work, {name}. You now understand the single most powerful wellness practice: SLEEP. You know what's actually happening (active brain cleaning, body repair, memory cementing, emotion processing), the four stages, sleep hygiene, and the truth that sleep debt doesn't really catch up. Treat sleep as sacred. Watch everything else get easier. Next, we explore something deeply connected to sleep, mood, and energy, the FOOD you fuel your body with. FOOD AS INFORMATION. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `sleep-keeper`,
          badgeName: `Sleep Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
