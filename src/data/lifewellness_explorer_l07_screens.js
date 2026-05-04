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
          vocab: [
            { word: `parasympathetic`, definition: `The "rest-and-digest" branch of your nervous system — activated by slow, deep breathing and responsible for calming your heart rate, relaxing muscles, and signaling safety.`, audioPrompt: `The parasympathetic nervous system is your body's calm mode, {name} — the state where your heart slows, muscles soften, and your brain receives the signal that you are safe. The remarkable thing is that you can activate it deliberately, just by how you breathe. Slow, deep breath in. Slow breath out. Your body starts shifting within seconds.` },
            { word: `sympathetic`, definition: `The "fight-or-flight" branch of your nervous system — activated by stress, producing faster breathing, tenser muscles, and a heightened state of alert.`, audioPrompt: `The sympathetic nervous system is your body's alarm mode, {name}. When it activates — from stress, excitement, or perceived danger — your heart speeds up, breathing quickens, muscles tense. It's designed to protect you. The problem is it can't distinguish between genuine danger and a math test. Understanding that helps you use breathing to turn the alarm down when you need to.` },
            { word: `conscious control`, definition: `The ability to deliberately influence something that usually runs automatically — breathing is the only part of your nervous system you can consciously control, making it a uniquely powerful tool.`, audioPrompt: `Most of your nervous system runs on autopilot, {name} — you can't consciously lower your heart rate or speed up digestion. But breath is different. You can choose how you breathe, and because breathing is wired into the rest of your nervous system, controlling it gives you indirect control over all the things you can't directly reach. That's what makes it so remarkable.` },
          ],
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
          vocab: [
            { word: `rhythm`, definition: `A steady, repeating pattern — what box breathing creates in your breath, which signals your nervous system to move toward calm and balance.`, audioPrompt: `Rhythm is what makes box breathing work, {name}. When your breath has a steady, equal pattern — in for four, hold for four, out for four, hold for four — your nervous system responds to that regularity. It's the same principle as why a rocking chair calms a baby. Steady rhythm communicates safety. Your brain listens to it.` },
            { word: `hold`, definition: `The deliberate pause between the inhale and exhale in box breathing — a brief moment that interrupts the stress cycle and gives the nervous system a chance to shift.`, audioPrompt: `The holds are what make box breathing more powerful than just breathing slowly, {name}. That brief pause — holding the breath in, then holding it out — interrupts the stress response cycle at two points instead of just flowing through. It's a tiny, deliberate stillness. And that stillness is where the calming actually happens.` },
            { word: `technique`, definition: `A specific, practiced method — like box breathing or 4-7-8 breathing — that uses the body's own systems to create a desired state, in this case calm.`, audioPrompt: `A technique is a method you practice until it works automatically when you need it, {name}. Box breathing and 4-7-8 aren't just ideas — they're tools that get more effective the more you use them. The best time to practice a calming technique is when you're already calm, so it's there and familiar the moment you actually need it.` },
          ],
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
          vocab: [
            { word: `vagus nerve`, definition: `The main nerve of the parasympathetic nervous system — stimulated by a long, slow exhale, which directly triggers the calming response in your body.`, audioPrompt: `The vagus nerve is the main highway of your calm-down system, {name}. It runs from your brainstem through your chest and into your abdomen, and when you stimulate it with a long slow exhale, it sends a signal that travels your entire body: safe, rest, calm. That's the science behind why the extended exhale in 4-7-8 breathing feels so effective so quickly.` },
            { word: `exhale`, definition: `Breathing out — and particularly the long, extended exhale in 4-7-8 breathing that activates the vagus nerve and triggers the parasympathetic calming response.`, audioPrompt: `The exhale is the most powerful part of a calming breath, {name}. When you breathe out slowly and completely, you activate the vagus nerve and send your nervous system into rest mode. That's why 4-7-8 breathing makes the exhale the longest part — eight counts out after four in. The out-breath is doing the most important work.` },
            { word: `tranquilizer`, definition: `Something that calms the nervous system — 4-7-8 breathing is described as a natural one because it produces measurable physiological calm without any external substance.`, audioPrompt: `A natural tranquilizer is exactly what 4-7-8 breathing has been called, {name} — and that's not exaggeration. When you breathe in for four, hold for seven, and exhale slowly for eight, your nervous system measurably shifts. Heart rate drops, muscles release, the stress response quiets. Available to you any time, any place, at no cost. That's a remarkable tool.` },
          ],
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
          vocab: [
            { word: `intentional`, definition: `Done on purpose and with awareness — intentional breathing means choosing to breathe in a particular way, rather than letting it happen automatically.`, audioPrompt: `Intentional breathing means you're in the driver's seat, {name}. Most of the time you breathe without thinking about it — and that's fine. But when stress rises, intentional breathing is the decision to take the wheel and use your breath as a tool. That shift from automatic to deliberate is where the power lies.` },
            { word: `baseline`, definition: `Your body's normal, rested state — what breathing techniques help your nervous system return to after a stress response, and also what regular practice can lower over time.`, audioPrompt: `Your baseline is where your body settles when nothing stressful is happening, {name} — your resting heart rate, your default level of calm. Regular breathing practice can gradually lower that baseline, meaning you're starting each day from a calmer place. And in moments of stress, these techniques help you return to it much faster than you would without them.` },
            { word: `practice`, definition: `Repeating a skill when you don't urgently need it — so it becomes available automatically when you do. Breathing techniques must be practiced calmly to work reliably under stress.`, audioPrompt: `Terra believes this is the most important part of this lesson, {name}: practice breathing techniques when you're already calm. That's when they become automatic — when your brain learns the pattern and can run it without effort. Try to use a new skill for the first time in a crisis and it's much harder. Practice it daily and it's there when you need it most.` },
          ],
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
