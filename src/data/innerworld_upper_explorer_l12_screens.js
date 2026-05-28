// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L12 — Meditation and Brain Waves
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real neuroscience of meditation: brain-wave states (beta, alpha,
//            theta, delta, gamma), what each does, how meditation shifts you.
//            Grounded; well-established science (EEG research).
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order brain-wave states from most active/awake →
//            deepest sleep). Gamma is "extra" — handled in mag, not in game.
// SCOPE: 4 concepts — what brain waves are, the main states (beta/alpha/
//        theta/delta/gamma), what meditation actually does, how to start
// VOICE: Sage = calm, gently practical. Names Dispenza's continued relevance.
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-12`,
      title: `Meditation and Brain Waves`,
      duration: 18,
      xpReward: 75,
      badge: `wave-explorer`,
      badgeName: `Brain Wave Explorer`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Last lesson, we learned about meditation as a tool for becoming a new version of yourself. Today we look inside the meditating brain itself, with real science. Your brain is electric, billions of cells firing tiny signals all day and night. Those signals form patterns called BRAIN WAVES, and different waves match different states of mind. Some are for focused work, some for calm, some for deep meditation, some for sleep. The amazing thing? Meditation can deliberately shift you between these states. Today you'll meet your brain at every level. Take a slow breath, and let's begin.`,
          headline: `Meditation and Brain Waves`,
          subtitle: `The real neuroscience of the meditating mind`,
          visual: `/ue-assets/iw/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Brain Is Electric`,
          paragraphs: [
            `Right now, your brain is alive with electricity. Billions of brain cells (neurons) are firing tiny electrical signals to each other, every second of every day, even when you're asleep. When many neurons fire together in rhythm, they create patterns scientists call BRAIN WAVES. These waves can be MEASURED with a machine called an EEG (electroencephalogram), which detects the electricity through small sensors placed gently on the head. Researchers like Dr. Joe Dispenza use EEGs to study what happens in the brain during meditation, with real, measurable data.`,
            `Brain waves come in different SPEEDS or FREQUENCIES. Some are fast (when your mind is active and busy), some are slower (when you're calm), and some are very slow (when you're in deep sleep). Each speed matches a different state of mind. Scientists give each speed a Greek-letter name: BETA, ALPHA, THETA, DELTA, and GAMMA. You move between these states constantly throughout your day, often without realizing it. Understanding them is like getting a map of your own mind, and a key to using meditation on purpose.`,
          ],
          image: `/ue-assets/iw/l12-s1-electric.webp`,
          imageCaption: `Your brain is electric. Neurons firing in rhythm create measurable brain waves.`,
          vocab: [
            {
              word: `brain wave`,
              definition: `A pattern of electrical activity created when many neurons in your brain fire together in rhythm. Brain waves can be measured with an EEG machine, and different speeds match different states of mind.`,
              audioPrompt: `A brain wave is a pattern of electrical activity in your brain, {name}. Created when many neurons fire together in rhythm. Right now, billions of neurons fire tiny electrical signals, every second of every day, even when you're asleep. These patterns are measured with a machine called an EEG, which detects electricity through sensors placed on the head. Brain waves come in different speeds. Fast when your mind is busy. Slow when you're calm. Very slow in deep sleep. Each speed matches a different state of mind.`,
            },
            {
              word: `EEG`,
              definition: `Short for electroencephalogram. A machine that measures brain-wave activity by detecting electrical signals through small sensors placed on the head. EEG research is how scientists know what meditation actually does to the brain — the results are measurable and real.`,
              audioPrompt: `An EEG, or electroencephalogram, is a machine that measures your brain's electrical activity, {name}. Small sensors placed gently on the head detect the tiny electrical signals your neurons produce. EEG research is exactly how scientists know what meditation does to the brain. When experienced meditators settle into practice, their brain waves measurably slow on the EEG readout. The effects aren't imaginary. They're literally a different state of brain activity, visible in real data. EEG studies have made the science of meditation undeniably real.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Main Brain Wave States`,
          paragraphs: [
            `Here are the main waves, from FASTEST to SLOWEST. BETA is your everyday awake-and-thinking state. Solving a math problem, talking to a friend, paying attention in class, that's beta. It's useful and important, but in too much beta you can feel anxious, stressed, or scattered. ALPHA is the relaxed, calm-but-awake state. It happens when you close your eyes and breathe slowly, or when you're daydreaming peacefully. Alpha is the doorway to meditation, where the chatter quiets but you're still aware.`,
            `THETA is the deep meditation state, also where vivid imagination and creativity often happen. It's the state right before falling asleep, and the state experienced meditators learn to enter on purpose. Theta is where Dr. Joe Dispenza's "rehearsing the future self" work goes deepest. DELTA is the slowest, the state of deep, dreamless sleep when your body deeply restores itself. Then there's GAMMA, which is actually the FASTEST of all, faster even than beta. Gamma is linked to deep focus, insight, and "aha!" moments, and researchers have measured high gamma waves in advanced meditators during peak states. Each wave has its own gift, and a healthy mind moves smoothly between them.`,
          ],
          image: `/ue-assets/iw/l12-s2-states.webp`,
          imageCaption: `Beta (busy), alpha (relaxed), theta (deep meditation), delta (deep sleep), gamma (insight).`,
          vocab: [
            {
              word: `alpha state`,
              definition: `A relaxed, calm-but-awake brain wave state. It happens when you close your eyes and breathe slowly, or when you're peacefully daydreaming. Alpha is the doorway to meditation, where the mental chatter quiets but you're still aware.`,
              audioPrompt: `The alpha state is a relaxed, calm, awake brain wave state, {name}. It happens when you close your eyes and breathe slowly, or when you're peacefully daydreaming. Alpha is the doorway to meditation, where the chatter quiets but you're still aware. It's slower than beta, your busy thinking state, and faster than theta, which is deep meditation. Most people don't visit alpha enough. We rush in beta all day and crash into sleep. Alpha is the calm in-between, and meditation is the easiest way to find it.`,
            },
            {
              word: `beta state`,
              definition: `Your everyday awake-and-thinking brain wave state. Active when you're solving math, talking, focusing in class, or feeling stressed. Useful and important, but too much beta without rest can feel anxious or scattered. Meditation is the practice of stepping out of beta on purpose.`,
              audioPrompt: `The beta state is your everyday awake-and-thinking brain wave state, {name}. It's active when you're solving a math problem, talking with friends, focusing in class, or feeling stressed. Beta is fast and useful, but too much of it without a break can feel scattered or anxious. Most people spend the majority of their waking hours in beta. The problem isn't beta itself. It's never leaving it. Meditation is the practice of stepping out of beta on purpose, and visiting the calmer, deeper states your brain is also capable of.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Meditation Actually Does`,
          paragraphs: [
            `MEDITATION is a practice of training your attention and gently quieting the busy thinking mind. There are many kinds (focusing on the breath, repeating a phrase, scanning the body, picturing a place), but they all do something similar: they shift your brain from busy BETA into calmer ALPHA, and with practice, into deeper THETA. EEG studies show this clearly. When experienced meditators settle into practice, their brain waves measurably slow. The effects aren't imaginary. They're literally a different state of brain activity, and the body responds with lower stress, calmer heart rate, and changed chemistry.`,
            `This is why meditation feels so different from regular life. In beta, your prefrontal cortex (L01) is working hard, your amygdala can fire easily, your subconscious is running familiar patterns (L04), and the inner critic (L05) is often chattering. In alpha and theta, the chatter quiets, the body relaxes, and the subconscious mind becomes more OPEN to new patterns. That's why this is the ideal state for rehearsing a new self (L11), reframing self-talk, healing, and creating real change. Meditation isn't just "calming down." It's a deliberate shift into a brain state where deep work becomes possible.`,
          ],
          image: `/ue-assets/iw/l12-s3-what-it-does.webp`,
          imageCaption: `Meditation shifts you from busy beta into calmer alpha and deeper theta, measurably.`,
          vocab: [
            {
              word: `theta state`,
              definition: `A deep meditation brain wave state, slower than alpha and faster than deep sleep. It's where vivid imagination, creativity, and Dispenza-style rehearsal of the future self go deepest. The subconscious mind is most open here.`,
              audioPrompt: `The theta state is a deep meditation brain wave state, {name}. Slower than alpha and faster than delta, which is deep sleep. It's where vivid imagination, creativity, and Dispenza-style rehearsal of the future self go deepest. Theta is also the state right before you fall asleep, and the state experienced meditators learn to enter on purpose. In theta, the subconscious mind becomes more open to new patterns. That's why this is the ideal state for deep practice. Real change is easier to make in theta than in busy beta.`,
            },
            {
              word: `delta state`,
              definition: `The slowest regular brain wave state, associated with deep dreamless sleep. During delta, the body deeply restores itself — physical repair, immune function, and memory consolidation all happen here. A healthy brain cycles through delta every night.`,
              audioPrompt: `The delta state is the slowest of the main brain wave states, {name}. It's associated with deep, dreamless sleep. In delta, the body deeply restores itself. Physical repair, immune function, and memory consolidation all happen here. You pass through delta every night during your deepest sleep cycles. Without enough delta sleep, everything from your mood to your health suffers. Delta is the body's essential restoration state. You don't have to meditate to get there. But good sleep is perhaps the most important daily practice for your brain.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Actually Meditate (Gently and Simply)`,
          paragraphs: [
            `Many people think meditation is supposed to be EMPTY MIND, no thoughts, total stillness. That isn't quite right, and trying to force it usually backfires. Real meditation is more like noticing. Your mind WILL wander, that's not a failure, it's normal. The actual practice is: when you notice your mind has drifted, GENTLY bring it back. That gentle return, over and over, is the whole exercise (remember L09 on attention?). Every gentle return strengthens your focus and quiets the chatter a little more. You don't have to be "good at meditation" to benefit. Just doing the practice trains your brain.`,
            `A simple starting practice: sit comfortably. Close your eyes. Breathe slowly. Place your attention on the feeling of breath entering and leaving. When thoughts come (and they will), don't fight them, just gently return to the breath. Start with just 5 minutes a day. With practice, you'll find yourself dropping into alpha (calm, aware) and eventually theta (deep) more easily. To go deeper, add ELEVATED EMOTION (L08, L11): once you're calm, vividly feel gratitude, joy, or love. That's where real Dispenza-style transformation happens, in the deeper waves AND in elevated feeling, together. Sage's gentle teaching: meditation isn't a performance. It's a way of coming home to yourself, again and again, with kindness. Start small, be patient, and the science of your own brain will quietly do the rest.`,
          ],
          image: `/ue-assets/iw/l12-s4-how-to.webp`,
          imageCaption: `Real practice: notice the wander, gently return. 5 minutes a day, gently.`,
          vocab: [
            {
              word: `meditation`,
              definition: `A practice of gently training your attention and quieting the busy thinking mind, which measurably shifts your brain from beta (busy) into alpha (calm) and deeper theta (meditation) states. Real practice is gentle, repeated returning, not forced emptiness.`,
              audioPrompt: `Meditation is a practice of gently training your attention and quieting the busy thinking mind, {name}. EEG studies show it measurably shifts your brain from busy beta into calmer alpha, and with practice into deeper theta. The body responds with lower stress and calmer heart rate. Many people think meditation means an empty mind, but that isn't right. Real meditation is noticing: your mind will wander, and the practice is gently bringing it back. That gentle return, over and over, is the whole exercise.`,
            },
            {
              word: `gamma state`,
              definition: `The fastest brain wave, linked to deep focus, insight, and "aha!" moments. Unlike the awake-to-sleep progression, gamma shows up alongside other states during moments of heightened clarity. Researchers have measured high gamma in advanced meditators during peak states.`,
              audioPrompt: `The gamma state is the fastest brain wave, {name}. Faster even than the busy beta state. Gamma is linked to deep focus, insight, and sudden aha moments. Unlike beta, alpha, theta, and delta, which follow a progression from awake to sleep, gamma shows up alongside other states during moments of heightened clarity and peak experience. Researchers have measured high gamma waves in advanced meditators during their deepest sessions. Gamma is the brain at its most brilliantly connected. It isn't practiced directly, but it tends to emerge as meditation deepens.`,
            },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to map your brain waves, {name}. Here are five main brain-wave states, scrambled up. Use the arrows to arrange them from the MOST ACTIVE/AWAKE (top) to the DEEPEST SLEEP (bottom). Think about what each one feels like.`,
          items: [
            { id: `step-beta`,  label: `BETA: busy, awake, thinking (doing math, talking, focusing in class)`,          position: 1 },
            { id: `step-alpha`, label: `ALPHA: calm-but-awake, eyes closed, slow breathing, doorway to meditation`,      position: 2 },
            { id: `step-theta`, label: `THETA: deep meditation, vivid imagination, just before falling asleep`,         position: 3 },
            { id: `step-light`, label: `Light sleep: drifting, no longer fully aware`,                                  position: 4 },
            { id: `step-delta`, label: `DELTA: deep, dreamless sleep, the slowest state, the body deeply restoring`,    position: 5 },
          ],
          completionMessage: `Beautiful, {name}! That's the map of brain-wave states from most awake to deepest sleep: beta, alpha, theta, light sleep, delta. Meditation gently moves you DOWN this map, from busy beta into calm alpha and (with practice) deep theta — the state where Dispenza's rehearsal work goes deepest. Just one note: gamma waves are actually the FASTEST of all (linked to insight and peak states), but they show up alongside, not in this awake-to-sleep ladder. Your brain is more amazing than people once knew.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a BRAIN WAVE?`,
              options: [
                `Ocean water in your head`,
                `A pattern of electrical activity created when many neurons fire together in rhythm, measurable with an EEG`,
                `Something only animals have`,
                `Imaginary`,
              ],
              correctIndex: 1,
              explanation: `A brain wave is a pattern of electrical activity created when many neurons fire together in rhythm. It's measurable with an EEG machine. Brain waves come in different speeds, and each speed matches a different state of mind.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is the BETA state, and when is it active?`,
              options: [
                `Deep sleep only`,
                `Your everyday awake-and-thinking state: doing math, talking, focusing in class`,
                `Only during meditation`,
                `When you're unconscious`,
              ],
              correctIndex: 1,
              explanation: `Beta is your everyday awake-and-thinking state. Solving math, talking, focusing in class — that's beta. It's useful, but too much beta can feel anxious or scattered. We spend most of our day in beta.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `What is the ALPHA state?`,
              options: [
                `The fastest, most stressed state`,
                `A relaxed, calm-but-awake state — eyes closed, breathing slowly. The doorway to meditation`,
                `Deep dreamless sleep`,
                `Only for grown-ups`,
              ],
              correctIndex: 1,
              explanation: `Alpha is the relaxed, calm-but-awake state. It happens when you close your eyes and breathe slowly. The chatter quiets but you're still aware. Alpha is the doorway to meditation — the calm in-between that most people don't visit often enough.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What is the THETA state, and why does it matter for Dispenza-style practice?`,
              options: [
                `It doesn't matter`,
                `Deep meditation state where vivid imagination, creativity, and rehearsing the future self go deepest — the subconscious is most open`,
                `Just regular sleep`,
                `An angry state`,
              ],
              correctIndex: 1,
              explanation: `Theta is the deep meditation state, slower than alpha. Vivid imagination, creativity, and Dispenza's "rehearsing the future self" work go deepest in theta because the subconscious mind is most open here. Real change is easier to make in theta than in busy beta.` },

            { id: `l12-q5`, format: `multiple-choice`,
              question: `What does MEDITATION actually do to your brain waves?`,
              options: [
                `Nothing measurable`,
                `Measurably shifts you from busy beta into calmer alpha and deeper theta. EEG studies show it clearly`,
                `Makes you instantly fall asleep`,
                `Turns off your brain`,
              ],
              correctIndex: 1,
              explanation: `EEG studies show meditation measurably shifts your brain from busy beta into calmer alpha and deeper theta. The body responds with lower stress, calmer heart rate, and changed chemistry. The effects are literally a different state of brain activity — not imaginary.` },

            { id: `l12-q6`, format: `true-false`,
              question: `True or false: Real meditation means having a completely empty mind with no thoughts at all.`,
              correctAnswer: false,
              explanation: `False. Many people think this, and trying to force it backfires. Real meditation is more like noticing: your mind WILL wander (that's normal), and the practice is gently bringing it back. That gentle return, over and over, is the whole exercise.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `What's a simple way to start meditating?`,
              options: [
                `Sit for two hours immediately`,
                `Sit comfortably, close your eyes, breathe slowly, focus on the breath, and gently return when your mind wanders. Start with just 5 minutes a day`,
                `Try to have zero thoughts forever`,
                `Don't bother`,
              ],
              correctIndex: 1,
              explanation: `Start small: sit comfortably, close your eyes, breathe slowly, place attention on the breath. When thoughts come (they will), gently return to the breath. Just 5 minutes a day. With practice, you'll drop into alpha and theta more easily. To go deeper, add elevated emotion.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What is the GAMMA state, even though it's a bit different from the others?`,
              options: [
                `The slowest, sleepiest state`,
                `The FASTEST brain wave, linked to deep focus, insight, "aha!" moments, and measured in advanced meditators during peak states`,
                `Just a guess`,
                `Same as beta`,
              ],
              correctIndex: 1,
              explanation: `Gamma is actually the fastest brain wave, faster even than beta. It's linked to deep focus, insight, and "aha!" moments. Researchers have measured high gamma in advanced meditators during peak states. It's a bit "extra" — not in the awake-to-sleep ladder, but a beautiful state your brain can reach.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Take a slow, soft breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Most of us spend our day in busy beta. When do you usually feel calmer alpha (eyes closed, slow breath, peaceful)? How could you visit alpha on purpose more often?` },
            { id: `r2`, text: `Meditation isn't about an empty mind, it's about gently returning when you wander. Does that change how meditation feels possible for you?` },
            { id: `r3`, text: `Try a 60-second mini-meditation right now: close your eyes, slow your breath, notice the air going in and out. What did you notice?` },
            { id: `r4`, text: `If you committed to just 5 minutes of meditation a day for two weeks, what version of yourself might you start to feel?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Meditation is now studied in hundreds of universities and hospitals, used in schools, businesses, sports, and medicine, and practiced by many millions of people. Research shows it can lower stress, improve focus, support emotional health, strengthen the immune system, and even change brain structure (yes, neuroplasticity) over time. The science isn't fringe; it's everywhere. Sage's note: in a world that wants you in fast, busy beta all the time, choosing to visit alpha and theta on purpose is a quiet revolutionary act. Five minutes a day is real practice. You don't need to be perfect at it. You only need to keep gently returning. The science of your brain will take it from there.`,
          familyAdventure: `Family 5-Minute Meditation. As a family, sit together for just 5 minutes in quiet meditation, once this week (and maybe more). Use a timer. Eyes closed, slow breathing, attention on the breath. Each person notices when their mind wanders and gently brings it back. After, share what each person noticed (not "I did it perfectly" but "my mind wandered a lot" or "I felt my shoulders drop"). The goal isn't a perfect meditation. It's beginning the practice together, with kindness. Everyone, including grown-ups, is just learning.`,
          creativePrompt: {
            intro: `Write about taking a trip "down" through your own brain waves, from busy beta all the way into deep theta. Make it vivid.`,
            floor: `Write at least 5 sentences. Describe each state as you pass through it, and how it feels.`,
            stretch: `Write 8 to 10 sentences. Take the reader on the full inner journey, showing how each state changes the feel of the mind.`,
            open: `Write as much as you want. Write a full inner journey, starting in busy beta (where your mind is racing with thoughts of the day), slowing into alpha as you close your eyes and breathe (chatter quieting, body relaxing), dropping deeper into theta as your imagination becomes vivid and the subconscious opens, brushing the edge of light sleep, and then gently coming back up. Describe what each state feels like in your body and mind, what becomes possible at each layer, and how the whole journey ends with you returning to ordinary life carrying a little of that calm with you. Make it sensory and real.`,
            frames: [
              `I begin in beta, my mind racing with ___.`,
              `I close my eyes and slow my breath, and alpha arrives like ___.`,
              `Deeper, into theta, the mind becomes ___.`,
              `I brush the edge of sleep, where ___.`,
              `Slowly returning, I open my eyes carrying ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now have a real map of your own brain in different states: beta, alpha, theta, delta, and the special gamma. You understand what meditation actually does (measurable brain-wave shifts, not magic), the right way to practice (gentle returning, not empty mind), and how to start (5 minutes a day, gently). With this, the practices ahead become so much more meaningful. Next, we put it all together with a real daily mindfulness practice you can build into your life. BUILDING A DAILY MINDFULNESS PRACTICE. Practice gently, and I'll see you there. — Sage.`,
          badge: `wave-explorer`,
          badgeName: `Brain Wave Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L12 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
