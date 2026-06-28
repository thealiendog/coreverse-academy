// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L13 — Building a Daily Mindfulness Practice
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : practical mindfulness habit-building, kid-level. Real research-
//            backed practices: meditation, mindful moments, gratitude, body
//            scan, breath. Builds directly on L02 neuroplasticity + L04
//            subconscious + L12 brain waves.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order a real daily mindfulness routine)
// SCOPE: 4 concepts — why daily practice matters, the 5 building blocks of
//        a mindfulness practice, designing your own routine, staying with
//        it (consistency, missed days, real-life kid version)
// VOICE: Sage = warm, practical, gentle, never preachy. Lots of "small is
//        enough" and "be kind when you miss days" energy.
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-13`,
      title: `Building a Daily Mindfulness Practice`,
      duration: 18,
      xpReward: 75,
      badge: `practice-builder`,
      badgeName: `Practice Builder`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. We've explored so much together: how your brain works, how to handle big feelings, the Observer, manifestation, Dispenza's work, brain waves. Today we turn all of that into something you can actually DO every day. A real, simple, daily mindfulness practice. Not a long, intense thing only monks do, a gentle, doable routine that fits a kid's life and quietly transforms it over time. Today you'll learn how to build YOUR practice. Take a slow breath, and let's begin.`,
          headline: `Building a Daily Mindfulness Practice`,
          subtitle: `A simple, real, kid-sized routine that quietly transforms everything`,
          visual: `/ue-assets/iw/exp-iw-l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Daily Practice Matters`,
          paragraphs: [
            `Here's a simple truth: nothing in your inner world changes much from doing something once. Meditating once, reframing one thought, breathing slowly one time, those are good moments, but they don't transform you. What truly grows new pathways in your brain (neuroplasticity, L02) and reprograms your subconscious (L04) is DAILY repetition over time. Just like brushing your teeth keeps them healthy through daily care, not one big effort, your inner world grows through small, gentle, daily attention.`,
            `Here's the encouraging part: it doesn't take much. Research shows that even 5 to 10 minutes a day of real mindfulness practice, done consistently, measurably changes the brain and body over weeks. The kids and adults with the most peaceful, focused, kind inner lives aren't the ones who meditate for hours once a year. They're the ones who do something small every single day. Small + consistent beats big + occasional, every single time. So our goal today isn't a huge ambitious plan. It's a real, gentle, doable practice you can actually keep.`,
          ],
          image: `/ue-assets/iw/exp-iw-l13-s1-why-daily.webp`,
          imageCaption: `Small + consistent beats big + occasional. Daily care is how the inner world grows.`,
          vocab: [
            {
              word: `daily practice`,
              definition: `A small mindfulness routine you do every day, even just 5-10 minutes, that quietly transforms your brain and inner world over time through consistency. Small and consistent beats big and occasional.`,
              audioPrompt: `A daily practice is a small mindfulness routine you do every day, {name}. Even 5 to 10 minutes is enough. Nothing changes much from doing something once. What truly grows new brain pathways and reprograms your subconscious is daily repetition. Just like brushing your teeth keeps them healthy through daily care, your inner world grows through small, gentle, daily attention. Research shows that 5 to 10 minutes a day, done consistently, measurably changes the brain and body over weeks. Small and consistent beats big and occasional.`,
            },
            {
              word: `mindfulness`,
              definition: `The practice of paying gentle, non-judgmental attention to what's happening right now — your breath, your feelings, your body, your thoughts. The quality of awareness that underlies every building block of a daily practice.`,
              audioPrompt: `Mindfulness is the practice of paying gentle, non-judging attention to what's happening right now, {name}. Your breath. Your feelings. What your body is doing. What your mind is doing. Without trying to fix or judge any of it. Mindfulness isn't a complicated technique. It's a quality of attention you can bring to almost anything: eating, walking, breathing, listening, feeling. Every building block of your daily practice is just mindfulness applied in a different form. It's the quiet art of noticing, kindly, moment by moment.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Five Building Blocks of a Practice`,
          paragraphs: [
            `A great mindfulness practice doesn't have to be complicated. There are five simple building blocks you can mix and match to design your own routine. First, MORNING INTENTION: a quiet moment at the start of the day to set how you want to BE today (calm, curious, kind). Just 30 seconds of focus is enough. Second, MEDITATION: 5 to 10 minutes of sitting quietly, breathing slowly, gently returning when your mind wanders (L12). Add elevated emotion (L08, L11) once you're calm. Third, MINDFUL MOMENTS during the day: brief pauses to take a slow breath and notice how you feel before tests, after lunch, between activities. Even 60 seconds counts.`,
            `Fourth, GRATITUDE: pausing once a day to truly feel grateful for a few things, big or small. Research shows daily gratitude actually changes the brain over time, strengthening pathways for positivity and resilience. Fifth, EVENING REFLECTION: a few minutes before bed to notice the day, what you felt, what you handled well, what you'd do differently. Maybe one thing you're proud of. These five blocks, used in any combination, create a real practice. Some kids do all five briefly. Others do just two or three. The point isn't doing every block, it's gently doing SOMETHING every day. You design what fits your life.`,
          ],
          image: `/ue-assets/iw/exp-iw-l13-s2-building-blocks.webp`,
          imageCaption: `Five building blocks: intention, meditation, mindful moments, gratitude, evening reflection.`,
          vocab: [
            {
              word: `gratitude practice`,
              definition: `Pausing once a day to truly notice and feel grateful for a few things, big or small. Research shows daily gratitude measurably changes the brain over time, strengthening pathways for positivity and resilience.`,
              audioPrompt: `A gratitude practice is pausing once a day to truly notice and feel grateful for a few things, {name}. Big or small. Research shows daily gratitude changes the brain over time, strengthening pathways for positivity and resilience. The key is feel, not just listing things but really pausing to feel the warmth of being thankful. Even three things, deeply felt, makes a difference. Gratitude is one of the simplest, most science-backed mindfulness practices there is. It pairs beautifully with elevated emotion, the feeling that makes Dispenza's work go deep.`,
            },
            {
              word: `morning intention`,
              definition: `A quiet moment at the start of the day to set how you want to BE today — calm, curious, kind, patient. Just 30 seconds of focused intention. Different from a plan: it's about how you want to show up, not what you want to get done.`,
              audioPrompt: `A morning intention is a quiet moment at the start of the day to set how you want to be, {name}. Not what you want to do, but how you want to show up. Calm. Curious. Kind. Patient. It takes just 30 seconds, but it gently shapes how you meet everything that follows. An intention isn't a plan or a to-do list. It's a quality of mind you're choosing to carry into your day. Morning intention is the simplest building block of all, and often the most quietly powerful.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Designing Your Own Routine`,
          paragraphs: [
            `Now let's get practical. There's no ONE right way to do a daily practice. The best routine is one that fits YOUR life and that you can actually keep. Here's a simple template that works for many kids. MORNING (3 minutes): take a few slow breaths, set an intention for the day ("today I'll be calm and curious"), feel a brief moment of gratitude for one thing. THAT'S IT for the morning. Don't make it bigger. AFTER SCHOOL (5-10 minutes): a real sit-down meditation. Eyes closed, breath, gently return when you wander. Add elevated emotion if you want to go deeper (L11). EVENING (3 minutes): reflect on the day. Notice one thing you handled well, one feeling you had, and one thing you're grateful for. End by setting an intention for tomorrow.`,
            `That whole routine totals about 15 minutes a day, and you'll feel the difference in just a few weeks. You can also use MINDFUL MOMENTS scattered through the day (60 seconds of slow breath at random moments), which actually takes no extra time at all. Real life kid version: when you're new, start TINY. Even 3 minutes a day is enough. As it becomes natural, you can grow it. The hardest part isn't doing the practice, it's REMEMBERING to start. So link your practice to something you already do every day. After brushing your teeth in the morning. Right when you come home from school. Right before getting into bed. Tying a new habit to an old one is one of the most science-backed ways to make it stick.`,
          ],
          image: `/ue-assets/iw/exp-iw-l13-s3-design.webp`,
          imageCaption: `Design a real routine: morning, after school, evening. Link it to what you already do.`,
          vocab: [
            {
              word: `habit stacking`,
              definition: `Linking a new habit (like meditation) to something you already do every day (like brushing teeth or coming home from school). One of the most science-backed ways to make a new habit stick.`,
              audioPrompt: `Habit stacking means linking a new habit to something you already do every day, {name}. The hardest part of a new practice isn't doing it, it's remembering to start. So tie meditation to brushing your teeth, or coming home from school, or right before bed. The old habit reminds you to do the new one. This is one of the most science-backed ways to make a habit stick. Kids who keep their practice don't rely on willpower. They simply linked it to something already in their day.`,
            },
            {
              word: `mindful moment`,
              definition: `A brief, intentional pause during the day — even just 60 seconds — to take a slow breath and notice how you're feeling. No extra time needed. A few mindful moments a day add up to something quietly powerful over time.`,
              audioPrompt: `A mindful moment is a brief, intentional pause during your day, {name}. Just 60 seconds. You take a slow breath, notice how you're feeling, and return to the present. You don't need extra time for this, just a short pause between things you're already doing. Before a test. After lunch. Between classes. On the walk home. Each one is a tiny reset that lowers stress and brings your attention back to right now. A few mindful moments a day add up to something quietly powerful over time.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Staying With It (Real Life Edition)`,
          paragraphs: [
            `Now the most honest part. You WILL miss days. Everyone does. Some days you'll forget, some you'll be too busy, some you simply won't feel like it. Here's the most important rule of daily practice: when you miss a day, DON'T beat yourself up. Don't decide "I failed" or "I'm not the kind of person who can do this." Don't quit. Just gently start again the next day. Missing one day means nothing. QUITTING because you missed a day is what actually breaks the practice. Be kind. Begin again. That's the whole skill.`,
            `Some days your practice will feel deep and beautiful. Other days it'll feel boring or like nothing's happening. Both are normal. The benefits build quietly underneath whether you "feel them" each session or not. Trust the process and the science (neuroplasticity is happening either way). Also, your practice will GROW with you. What you do at age 10 will look different at 14, 18, 30. Start where you are, with what fits today, and let it evolve naturally. Sage's gentle teaching: a real daily practice is one of the greatest gifts you can give yourself, not because it's hard or impressive, but because it's KIND. You're giving yourself a few minutes a day to come home to yourself. With consistency and patience, those few minutes slowly transform everything. Start small. Be kind when you miss. Just keep beginning again.`,
          ],
          image: `/ue-assets/iw/exp-iw-l13-s4-staying.webp`,
          imageCaption: `Be kind when you miss. Quitting breaks practice, not missing one day. Just begin again.`,
          vocab: [
            {
              word: `consistency`,
              definition: `Doing something regularly over time, especially through small, repeated actions. In mindfulness practice, consistency matters far more than intensity. Missing a day isn't a failure, only quitting after missing is.`,
              audioPrompt: `Consistency means doing something regularly over time, {name}. Especially through small repeated actions. In mindfulness practice, consistency matters far more than intensity. Here's the most important rule of daily practice. When you miss a day, don't beat yourself up. Don't decide you failed. Don't quit. Just gently start again the next day. Missing one day means nothing. Quitting because you missed a day is what actually breaks the practice. Be kind. Begin again. That's the whole skill. The benefits build quietly underneath, whether you feel them each session or not.`,
            },
            {
              word: `evening reflection`,
              definition: `A few quiet minutes before bed to notice the day — what you felt, what you handled well, what you'd do differently, one thing you're grateful for. The fifth building block of a daily practice. Closes the day with awareness and sets a calm intention for tomorrow.`,
              audioPrompt: `Evening reflection is a few quiet minutes before bed to notice your day, {name}. What you felt. What you handled well. One thing you're grateful for. Maybe one thing you'd do differently. It closes the day with awareness instead of just falling into sleep with a busy mind. Even three slow minutes of genuine reflection helps your brain process the day, builds self-awareness, and gently sets the tone for tomorrow. It's the quietest building block of all, and one of the most deeply restoring.`,
            },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to put a real daily practice in order, {name}. Here are five elements of a simple, doable kid mindfulness routine, scrambled across a day. Use the arrows to arrange them from EARLIEST in the day (top) to LATEST (bottom).`,
          items: [
            { id: `step-morning`,     label: `MORNING: take a slow breath and set an intention for the day (calm, curious, kind)`,        position: 1 },
            { id: `step-moments`,     label: `MINDFUL MOMENTS at school: 60-second breath pauses before tests or between classes`,        position: 2 },
            { id: `step-afterschool`, label: `AFTER SCHOOL: a real 5-10 minute meditation, gently returning when you wander`,             position: 3 },
            { id: `step-gratitude`,   label: `BEFORE DINNER: pause and truly feel grateful for a few things from your day`,              position: 4 },
            { id: `step-evening`,     label: `EVENING: reflect on the day, notice one thing you handled well, set tomorrow's intention`,   position: 5 },
          ],
          completionMessage: `Beautifully done, {name}! That's a real, kid-sized daily mindfulness routine, woven gently through your day. Morning intention, mindful moments, after-school meditation, gratitude before dinner, evening reflection. That's about 15 minutes total spread across the whole day, and it can quietly transform your inner world in a few weeks. Remember: start tiny, be kind when you miss, and just keep beginning again.`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What grows new pathways in your brain and reprograms your subconscious over time?`,
              options: [
                `Doing something intense once`,
                `Small, gentle DAILY repetition over time — consistency, not intensity`,
                `Hoping really hard`,
                `Nothing changes the brain`,
              ],
              correctIndex: 1,
              explanation: `Daily repetition is what truly grows new brain pathways (neuroplasticity) and reprograms your subconscious. Like brushing your teeth: it's daily care, not one big effort, that matters. Small + consistent beats big + occasional every time.` },

            { id: `l13-q2`, format: `true-false`,
              question: `True or false: Even 5 to 10 minutes of daily mindfulness practice can measurably change the brain over weeks.`,
              correctAnswer: true,
              explanation: `True. Research shows that even 5 to 10 minutes a day of real mindfulness practice, done consistently, measurably changes the brain and body over weeks. You don't need a big ambitious plan, just a small, doable one you can actually keep.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `What are the FIVE building blocks of a mindfulness practice?`,
              options: [
                `Running, jumping, yelling, climbing, sleeping`,
                `Morning intention, meditation, mindful moments, gratitude, and evening reflection`,
                `Only one block exists`,
                `Just sitting still all day`,
              ],
              correctIndex: 1,
              explanation: `The five building blocks: morning intention (set how you want to be), meditation (sit and breathe), mindful moments (brief breath pauses through the day), gratitude (feel grateful for a few things), and evening reflection (notice the day before bed).` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `Why does GRATITUDE work as a real practice?`,
              options: [
                `It doesn't really work`,
                `Research shows daily gratitude measurably changes the brain, strengthening pathways for positivity and resilience`,
                `Only adults can do it`,
                `It's just polite`,
              ],
              correctIndex: 1,
              explanation: `Daily gratitude is one of the most science-backed mindfulness practices. Research shows it measurably changes the brain over time, strengthening pathways for positivity and resilience. The key is truly FEELING it, not just listing things mechanically.` },

            { id: `l13-q5`, format: `multiple-choice`,
              question: `What is HABIT STACKING, and why does it work?`,
              options: [
                `Putting books in a stack`,
                `Linking a new habit to one you already do (like meditating right after brushing teeth) — the old habit reminds you to do the new one`,
                `Doing many habits at once`,
                `Forgetting your habits`,
              ],
              correctIndex: 1,
              explanation: `Habit stacking means linking a new habit to one you already do every day. The old habit reminds you to do the new one, so you don't have to rely on memory or willpower. It's one of the most science-backed ways to make a new practice stick.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `According to Sage, what's the most important rule when you MISS a day of practice?`,
              options: [
                `Quit forever`,
                `Don't beat yourself up — just gently start again the next day. Missing a day means nothing; only quitting breaks the practice`,
                `Punish yourself`,
                `Pretend it didn't happen`,
              ],
              correctIndex: 1,
              explanation: `When you miss a day (and you will), don't beat yourself up or decide you "failed." Just gently start again the next day. Missing one day means nothing. QUITTING because you missed is what actually breaks the practice. Be kind. Begin again. That's the whole skill.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What's the right way to START a new practice if you're new?`,
              options: [
                `Try a 2-hour meditation on day one`,
                `Start TINY — even 3 minutes a day is enough. Grow it slowly as it becomes natural`,
                `Wait until you feel motivated`,
                `Skip practice entirely`,
              ],
              correctIndex: 1,
              explanation: `When you're new, start tiny. Even 3 minutes a day is enough. As it becomes natural, you can grow it. Trying too much too soon usually leads to giving up. Small and doable is what actually sticks. Patience and consistency beat ambition.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `Should every day's practice feel deep and powerful?`,
              options: [
                `Yes, or else you're doing it wrong`,
                `No — some days will feel deep, others boring. The benefits build quietly whether you "feel them" or not. Trust the process`,
                `Yes, every single time`,
                `Only on Sundays`,
              ],
              correctIndex: 1,
              explanation: `Some days your practice will feel deep and beautiful. Other days boring or like nothing's happening. Both are normal. The benefits (neuroplasticity, calmer nervous system, new patterns) build quietly underneath whether you feel them each session or not. Trust the science.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Take a slow, warm breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Of the five building blocks (morning intention, meditation, mindful moments, gratitude, evening reflection), which one calls to you most? Why?` },
            { id: `r2`, text: `What's one thing you already do every day that you could "stack" a new mindfulness habit onto (like after brushing teeth, or after dinner)?` },
            { id: `r3`, text: `If you committed to just 5 minutes a day for two weeks, what tiny, doable practice would you start with? Be honest about what fits your real life.` },
            { id: `r4`, text: `How does it feel to know that missing a day doesn't break the practice, only quitting does? Does that make starting feel easier?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Daily mindfulness practice is now backed by thousands of studies showing real benefits: lower stress, better focus, improved emotional health, stronger immune system, better sleep, and over time, even changes in brain structure. People who practice daily report feeling calmer, more grounded, and more present in their lives. The most peaceful and effective humans in the world (across many cultures and centuries) have always practiced something daily. You're stepping into a long, beautiful tradition. Sage's note: a daily practice isn't selfish or extra. It's how you become the calm, kind, focused, present version of yourself, gently, day by day. Five minutes is enough to begin. The kindness with which you treat your practice (and yourself when you miss) is itself part of the practice. Start where you are. Begin tomorrow.`,
          familyAdventure: `Family Practice Design. As a family, sit together and each person designs their own mini practice. Pick 1 to 3 building blocks (intention, meditation, mindful moments, gratitude, reflection). Choose specific TIMES of day, and link each one to something you already do (habit stacking). Write it down. Then commit to ONE week of trying it. At the end of the week, share how it went, what worked, what didn't, what you'd adjust. The point isn't perfection. It's beginning the practice together, with kindness, as a family.`,
          creativePrompt: {
            intro: `Design YOUR own real daily mindfulness practice in writing. Use the five building blocks and habit stacking to make it actually doable.`,
            floor: `Write at least 5 sentences. List which building blocks you'll use, when in your day, and what you'll stack them onto.`,
            stretch: `Write 8 to 10 sentences. Build out a full realistic daily routine and show how it fits your real life.`,
            open: `Write as much as you want. Design your full daily mindfulness practice. Walk through your real day from morning to night and place specific mindfulness moments into it. For each, explain what you'll do, how long, and what already happening daily thing you'll stack it onto (habit stacking). Be HONEST about what fits your real schedule. Include what you'll do when you miss a day (because you will). End with what you hope to feel after two weeks of practicing this. Make it kind, small, and actually doable. This isn't an ambitious plan, it's a real commitment to yourself.`,
            frames: [
              `In the morning, right after ___, I'll ___.`,
              `During the school day, when ___, I'll pause for ___.`,
              `After school, I'll do my real meditation, which looks like ___.`,
              `Before bed, I'll ___, and remember ___.`,
              `When I miss a day, I'll remind myself ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now have everything you need to build a real, daily mindfulness practice that fits YOUR life. The five building blocks, the science of consistency, the kindness of starting tiny, the wisdom of habit stacking, and the most important rule of all: be kind when you miss, and just begin again. This practice, more than almost anything in this subject, is what truly transforms your inner world over time. Next, we explore something hard and important: how challenging experiences affect us, and the science of bouncing back stronger. TRAUMA AND RESILIENCE. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `practice-builder`,
          badgeName: `Practice Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L13 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
