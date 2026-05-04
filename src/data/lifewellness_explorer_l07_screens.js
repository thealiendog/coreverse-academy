// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L07 — Breathing for Calm
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L07 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-07`,
      title:     `Breathing for Calm`,
      duration:  12,
      xpReward:  50,
      badge:     `breath-master`,
      badgeName: `Breath Master`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Before we start, {name}, I want you to try something: take one slow, deep breath — in through your nose, out through your mouth. Notice anything? That slight shift in your body — the small softening, the brief pause in whatever was running through your mind — that's not imagination. That's your nervous system responding to a deliberate signal. Today we're going to look at breathing: why it has such a powerful effect on how you feel, what the science behind it actually is, and how to use it as a real tool in your everyday life. You already have everything you need for this one.`,
          headline: `Breathing for Calm`,
          subtitle: `You have a superpower built into your body — free, always available, and able to change how you feel within seconds`,
          visual: `/explorer-assets/wellness/l07-welcome.png`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How breathing controls your nervous system`,
          paragraphs: [
            `Your nervous system has two modes. The **sympathetic nervous system** (fight-or-flight) activates during stress — heart rate up, breathing fast and shallow, muscles tense. The **parasympathetic nervous system** (rest-and-digest) activates during safety — heart rate down, breathing slow and deep, muscles relaxed. Your breath is the only part of this system you can **consciously control**. When you breathe slowly and deeply, you directly activate the parasympathetic system and signal to your brain: we are safe. The state changes within seconds — not minutes.`,
          ],
          image: `/explorer-assets/wellness/l07-magazine-1.png`,
          imageCaption: `Your breath is the only part of your nervous system you can consciously control — and it works within seconds`,
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Box breathing`,
          paragraphs: [
            `**Box breathing** (used by Navy SEALs to stay calm in high-stress situations): **Breathe IN** for 4 counts → **HOLD** for 4 counts → **Breathe OUT** for 4 counts → **HOLD** for 4 counts. Repeat 4 times. The equal timing creates a steady, calming rhythm. The holds create a momentary pause that interrupts the stress response cycle. This technique is used by elite athletes, surgeons, and people managing anxiety. It takes about **90 seconds** to feel the effect — which is remarkably fast for something that requires no equipment and costs nothing.`,
          ],
          image: `/explorer-assets/wellness/l07-magazine-2.png`,
          imageCaption: `In, hold, out, hold — all for the same count. Four rounds takes about 90 seconds`,
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `4-7-8 breathing`,
          paragraphs: [
            `**4-7-8 breathing** was developed by Dr. Andrew Weil and is especially helpful **when your mind is racing or before sleep**. Breathe **IN** through your nose for 4 counts → **HOLD** your breath for 7 counts → Breathe **OUT** through your mouth completely for 8 counts (make a whoosh sound). The extended exhale activates the **vagus nerve**, which directly triggers the parasympathetic response. Dr. Weil calls it "a natural tranquiliser for the nervous system." The more you practise it, the more effective it becomes — so the best time to start is now.`,
          ],
          image: `/explorer-assets/wellness/l07-magazine-3.png`,
          imageCaption: `4 in, hold 7, out for 8 — the extended exhale activates the vagus nerve and triggers calm`,
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When to use breathing techniques`,
          paragraphs: [
            `Use intentional breathing: **before a test or performance** (to calm nerves and sharpen focus), **during an argument** (to prevent saying something you'll regret), **when you feel stress or anxiety building** (to interrupt it before it peaks), **before sleep** (to transition from active to rest mode), **after physical activity** (to recover faster), and as a **daily practice** — even a few minutes of intentional breathing daily can reduce baseline anxiety over time. One important note: the technique only works well if you **practise it when you're calm first** — so it's available to you automatically when you actually need it.`,
          ],
          image: `/explorer-assets/wellness/l07-magazine-4.png`,
          imageCaption: `Before tests, during arguments, before sleep — breathing works in all of these situations, if you've practised`,
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `calm`,
              label: `🌿 Helps Your Body Find Calm`,
              color: `#34D399`,
            },
            {
              id: `on-edge`,
              label: `⚡ Keeps Your Body on Edge`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l07-g1`,
              image: `l07-game-1.png`,
              label: `Taking three slow, deep breaths when you notice your heart starting to race.`,
              matchPhrase: `Slow breathing directly activates your parasympathetic nervous system — your body starts to receive the signal that you are safe.`,
              correctMatch: `calm`,
            },
            {
              id: `l07-g2`,
              image: `l07-game-2.png`,
              label: `Sitting quietly and doing box breathing for 90 seconds before a big test.`,
              matchPhrase: `Box breathing interrupts the stress response cycle and brings your nervous system back to a steady, focused state — exactly what you need before something important.`,
              correctMatch: `calm`,
            },
            {
              id: `l07-g3`,
              image: `l07-game-3.png`,
              label: `Playing an intense fast-paced game on your phone right when you're trying to settle for sleep.`,
              matchPhrase: `Fast stimulation activates your sympathetic system — the opposite of what your brain and body need to transition into rest.`,
              correctMatch: `on-edge`,
            },
            {
              id: `l07-g4`,
              image: `l07-game-4.png`,
              label: `Jumping straight back into an argument instead of taking a breath to pause first.`,
              matchPhrase: `Skipping the pause keeps your nervous system in reactive mode — breathing first gives your brain a moment to shift from reaction to response.`,
              correctMatch: `on-edge`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l07-q1`,
              format: `multiple-choice`,
              question: `How does intentional breathing calm your nervous system?`,
              options: [
                `It increases oxygen to the brain, which reduces stress chemicals`,
                `Slow, deep breathing directly activates the parasympathetic nervous system, signalling to your brain that you are safe`,
                `It distracts your mind from the stressful thought`,
                `It releases endorphins that counteract cortisol`,
              ],
              correctIndex: 1,
              explanation: `Slow deep breathing directly activates the parasympathetic nervous system — the rest-and-digest system that calms your heart rate, relaxes your muscles, and signals to your brain that you are safe. This isn't a metaphor — it's a measurable physiological change that happens within seconds.`,
            },
            {
              id: `l07-q2`,
              format: `multiple-choice`,
              question: `In box breathing, what are the four equal counts for?`,
              options: [
                `Four different breathing techniques done in sequence`,
                `Breathe in, hold, breathe out, hold — all for the same count to create a calming rhythm`,
                `Four breaths taken without pausing between them`,
                `One breath cycle repeated four times quickly`,
              ],
              correctIndex: 1,
              explanation: `Box breathing uses four equal counts — breathe in, hold, breathe out, hold — to create a steady, symmetrical rhythm. The holds are especially important: they create a momentary pause that interrupts the stress response cycle. Equal timing is what gives it the calming, balancing effect.`,
            },
            {
              id: `l07-q3`,
              format: `multiple-choice`,
              question: `Why should you practise breathing techniques when you're calm, not just when stressed?`,
              options: [
                `Because breathing exercises only work when you're already calm`,
                `Because practising when stressed makes the anxiety worse`,
                `So the technique is available and automatic when you actually need it — skills must be practised before crisis`,
                `Because stressed breathing is physically different and can't be changed`,
              ],
              correctIndex: 2,
              explanation: `Any skill is harder to use for the first time under pressure. If you practise box breathing when you're calm, your brain and body learn the pattern — so when stress hits, the technique is available and familiar. Trying to learn a new skill in the middle of a crisis is much harder than reaching for something you've already practised.`,
            },
            {
              id: `l07-q4`,
              format: `true-false`,
              question: `Your breath is the only part of your nervous system you can consciously control — making it a tool you can use anywhere, any time.`,
              correctAnswer: true,
              explanation: `True. You can't consciously control your heart rate, digestion, or immune response — but you can control your breathing. And because breathing is directly connected to the rest of your autonomic nervous system, controlling your breath is a way of influencing all of those other systems too.`,
            },
            {
              id: `l07-q5`,
              format: `fill-blank`,
              question: `In box breathing, you breathe in, hold, breathe out, and hold — each step for the ___ number of counts.`,
              options: [
                `same`,
                `different`,
                `longest`,
                `shortest`,
              ],
              correctIndex: 0,
              explanation: `Box breathing uses the same count for each step — the equal timing is what creates the steady, calming rhythm. Most people use 4 counts for each step, but the specific number matters less than the consistency. Equal timing is the key.`,
            },
            {
              id: `l07-q6`,
              format: `multiple-choice`,
              question: `What makes the extended exhale in 4-7-8 breathing especially effective?`,
              options: [
                `It removes more carbon dioxide than a normal breath`,
                `It gives your lungs more time to absorb oxygen`,
                `It activates the vagus nerve, which directly triggers the parasympathetic calming response`,
                `The longer exhale signals to others nearby that you are relaxed`,
              ],
              correctIndex: 2,
              explanation: `The extended exhale in 4-7-8 breathing activates the vagus nerve — the main nerve of the parasympathetic nervous system. Stimulating the vagus nerve directly triggers the calming response: heart rate slows, muscles relax, and your brain receives the safety signal. The long exhale is doing real, measurable physiological work.`,
            },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Box breathing is used by Navy SEALs, surgeons, athletes, and first responders — people whose jobs require staying calm under extreme pressure. The same tool available to them is available to you, right now, with no equipment required.`,
          familyAdventure: `Do a family breathing session together before bed tonight. Sit comfortably and guide each other through 4 rounds of box breathing, then try 4-7-8. Do this for three nights in a row. Notice the collective calm that comes over a room when everyone is breathing together intentionally.`,
          creativePrompt: `Try box breathing right now before you put this down — four rounds, about 90 seconds. Notice how you feel before and after. Then try it once tomorrow morning before school.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that your breath is one of the most powerful tools your body already has — free, always with you, and able to change how you feel within seconds. Any time stress rises, you have something to do with it. Terra is so proud to walk this path with you.`,
          badge: `breath-master`,
          badgeName: `Breath Master`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L07.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L07] Loaded: "Breathing for Calm" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l07-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L07] One or more magazine assets missing'));
}
