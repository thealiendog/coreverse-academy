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
          headline: `The Switch You Can Control`,
          paragraphs: [
            `Your nervous system runs mostly on autopilot — but your breath is different. It's the one part of the system you can **consciously control**. That makes it a uniquely powerful tool: by choosing how you breathe, you send a direct **signal** to your entire nervous system.`,
            `When you breathe slowly and deeply, you activate the calming branch of your nervous system within seconds — not minutes. No equipment needed, no waiting. That signal is always available, any time, anywhere.`,
          ],
          image: `/explorer-assets/wellness/l07-s1-switch-you-control.png`,
          imageCaption: `Your breath is the one part of your nervous system you can consciously control — and the signal reaches your whole body`,
          vocab: [
            { word: `conscious control`, definition: `The ability to deliberately influence something that usually runs automatically — breathing is the only part of your nervous system you can consciously control, making it a uniquely powerful tool.`, audioPrompt: `Most of your nervous system runs on autopilot, {name} — you can't consciously lower your heart rate or speed up digestion. But breath is different. You can choose how you breathe, and because breathing is wired into the rest of your nervous system, controlling it gives you indirect control over all the things you can't directly reach. That's what makes it so remarkable.` },
            { word: `nervous system`, definition: `The body's communication network — a system of nerves and the brain that controls everything from heartbeat to breathing to how you respond to the world around you.`, audioPrompt: `Your nervous system is your body's command center, {name}. It controls your heartbeat, your breathing, your muscles, and your emotions — almost all of it running automatically, without you thinking about it. Breath is the rare exception where you can step in and take the wheel. And stepping in, even for a moment, changes everything.` },
            { word: `signal`, definition: `A message your body sends or receives — like the safety signal your brain gets when you breathe slowly and deeply.`, audioPrompt: `Every breath you take sends a signal, {name}. Fast, shallow breathing tells your nervous system: something's wrong, stay alert. Slow, deep breathing sends the opposite message: we're safe, you can rest. You get to choose which signal to send — and your body listens.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Two Modes`,
          paragraphs: [
            `Your nervous system has two modes. The **sympathetic nervous system** is your alarm mode — fight-or-flight. When it's active, your heart rate rises, your breathing quickens, and your muscles tense. It's designed to protect you from danger.`,
            `The **parasympathetic nervous system** is your calm mode — rest-and-digest. When it's active, your heart slows, muscles relax, and your brain receives the signal: *safe*. Slow, deep breathing is the **switch** between these two modes.`,
          ],
          image: `/explorer-assets/wellness/l07-s2-two-modes.png`,
          imageCaption: `Two modes, one switch — your breath moves you between alarm and calm`,
          vocab: [
            { word: `sympathetic`, definition: `The "fight-or-flight" branch of your nervous system — activated by stress, producing faster breathing, tenser muscles, and a heightened state of alert.`, audioPrompt: `The sympathetic nervous system is your body's alarm mode, {name}. When it activates — from stress, excitement, or perceived danger — your heart speeds up, breathing quickens, muscles tense. It's designed to protect you. The problem is it can't distinguish between genuine danger and a math test. Understanding that helps you use breathing to turn the alarm down when you need to.` },
            { word: `parasympathetic`, definition: `The "rest-and-digest" branch of your nervous system — activated by slow, deep breathing and responsible for calming your heart rate, relaxing muscles, and signaling safety.`, audioPrompt: `The parasympathetic nervous system is your body's calm mode, {name} — the state where your heart slows, muscles soften, and your brain receives the signal that you are safe. The remarkable thing is that you can activate it deliberately, just by how you breathe. Slow, deep breath in. Slow breath out. Your body starts shifting within seconds.` },
            { word: `switch`, definition: `The shift from one mode of the nervous system to another — slow, deep breathing is the switch that moves you from sympathetic (alarm) to parasympathetic (calm).`, audioPrompt: `Think of your nervous system as having a switch, {name} — and breathing is your hand on it. When you breathe fast and shallow, the switch stays in alarm mode. When you breathe slow and deep, you move it toward calm. You don't have to wait for stress to pass on its own. You can actively switch.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Box Breathing`,
          paragraphs: [
            `**Box breathing** is used by Navy SEALs and elite athletes to stay calm under pressure. The pattern: **breathe IN** for 4 counts → **HOLD** for 4 counts → **breathe OUT** for 4 counts → **HOLD** for 4 counts. Repeat 4 times.`,
            `The equal timing creates a steady, calming **rhythm**. The **holds** interrupt the stress response at two points. Four rounds takes about **90 seconds** — remarkably fast for something that requires nothing at all.`,
          ],
          image: `/explorer-assets/wellness/l07-s3-box-breathing.png`,
          imageCaption: `In, hold, out, hold — four equal sides, four rounds, about 90 seconds`,
          vocab: [
            { word: `box breathing`, definition: `A breathing technique with four equal steps — in, hold, out, hold — each for the same count. Used by Navy SEALs and athletes to create calm under pressure.`, audioPrompt: `Box breathing gets its name from the shape, {name} — four equal sides. In for four, hold for four, out for four, hold for four. That symmetry is exactly what makes it calming. Equal timing on all four sides creates a steady, balanced rhythm that your nervous system responds to. Four rounds, about 90 seconds. That's all.` },
            { word: `rhythm`, definition: `A steady, repeating pattern — what box breathing creates in your breath, which signals your nervous system to move toward calm and balance.`, audioPrompt: `Rhythm is what makes box breathing work, {name}. When your breath has a steady, equal pattern — in for four, hold for four, out for four, hold for four — your nervous system responds to that regularity. It's the same principle as why a rocking chair calms a baby. Steady rhythm communicates safety. Your brain listens to it.` },
            { word: `hold`, definition: `The deliberate pause between the inhale and exhale in box breathing — a brief moment that interrupts the stress cycle and gives the nervous system a chance to shift.`, audioPrompt: `The holds are what make box breathing more powerful than just breathing slowly, {name}. That brief pause — holding the breath in, then holding it out — interrupts the stress response cycle at two points instead of just flowing through. It's a tiny, deliberate stillness. And that stillness is where the calming actually happens.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `4-7-8 Breathing`,
          paragraphs: [
            `**4-7-8 breathing** is especially useful when your mind is racing or before sleep. Breathe **IN** through your nose for 4 → **HOLD** for 7 → breathe **OUT** completely through your mouth for 8, making a whoosh sound.`,
            `The extended **exhale** activates the **vagus nerve**, which directly triggers the parasympathetic response. Dr. Andrew Weil calls it "a natural tranquiliser for the nervous system." The more you practise it, the more effective it becomes.`,
          ],
          image: `/explorer-assets/wellness/l07-s4-four-seven-eight.png`,
          imageCaption: `4 in, hold 7, out for 8 — the long exhale activates the vagus nerve and triggers calm`,
          vocab: [
            { word: `4-7-8`, definition: `A breathing technique with a 4-count inhale, 7-count hold, and 8-count exhale — especially effective for a racing mind and before sleep.`, audioPrompt: `4-7-8 breathing is deceptively simple, {name}: breathe in for four, hold for seven, breathe out for eight — with a whoosh sound on the exhale. The numbers aren't arbitrary. The extended exhale activates the vagus nerve, which sends a calming signal through your entire body. Try it when your mind won't quiet down.` },
            { word: `vagus nerve`, definition: `The main nerve of the parasympathetic nervous system — stimulated by a long, slow exhale, which directly triggers the calming response in your body.`, audioPrompt: `The vagus nerve is the main highway of your calm-down system, {name}. It runs from your brainstem through your chest and into your abdomen, and when you stimulate it with a long slow exhale, it sends a signal that travels your entire body: safe, rest, calm. That's the science behind why the extended exhale in 4-7-8 breathing feels so effective so quickly.` },
            { word: `exhale`, definition: `Breathing out — and particularly the long, extended exhale in 4-7-8 breathing that activates the vagus nerve and triggers the parasympathetic calming response.`, audioPrompt: `The exhale is the most powerful part of a calming breath, {name}. When you breathe out slowly and completely, you activate the vagus nerve and send your nervous system into rest mode. That's why 4-7-8 breathing makes the exhale the longest part — eight counts out after four in. The out-breath is doing the most important work.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When to Use These`,
          paragraphs: [
            `Breathing techniques work in more situations than you might expect. Use them **before a test** to calm nerves, **during an argument** to prevent saying something you'll regret, **before sleep** to transition from active to rest mode, and **after exercise** to recover faster.`,
            `Even a few minutes of **intentional** breathing daily can lower your **baseline** anxiety over time — meaning you start each day from a calmer place, not just manage crises when they arrive.`,
          ],
          image: `/explorer-assets/wellness/l07-s5-when-to-use.png`,
          imageCaption: `Before tests, during arguments, before sleep — breath works across all of these situations`,
          vocab: [
            { word: `intentional`, definition: `Done on purpose and with awareness — intentional breathing means choosing to breathe in a particular way, rather than letting it happen automatically.`, audioPrompt: `Intentional breathing means you're in the driver's seat, {name}. Most of the time you breathe without thinking about it — and that's fine. But when stress rises, intentional breathing is the decision to take the wheel and use your breath as a tool. That shift from automatic to deliberate is where the power lies.` },
            { word: `baseline`, definition: `Your body's normal, rested state — what breathing techniques help your nervous system return to after a stress response, and also what regular practice can lower over time.`, audioPrompt: `Your baseline is where your body settles when nothing stressful is happening, {name} — your resting heart rate, your default level of calm. Regular breathing practice can gradually lower that baseline, meaning you're starting each day from a calmer place. And in moments of stress, these techniques help you return to it much faster than you would without them.` },
            { word: `tool`, definition: `Something practical you can use to handle a situation — breathing techniques are tools because they're specific, learnable, and reliably effective when practiced.`, audioPrompt: `A tool is only useful if you know how to use it, {name}. Box breathing and 4-7-8 aren't just ideas — they're specific techniques that work in predictable ways. The best part: they require nothing you don't already have. Your breath is always with you. That makes it one of the most available tools you'll ever own.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Practice Before You Need It`,
          paragraphs: [
            `There's one thing that makes all of this work: **practise when you're calm**. Any skill is harder to use for the first time under pressure. If your brain already knows the pattern, it can run it **automatically** when stress arrives.`,
            `Try box breathing today — just four rounds, 90 seconds. Do it again tomorrow. Do it when nothing is wrong. That's **preparation** — building the tool now so it's there when you need it most.`,
          ],
          image: `/explorer-assets/wellness/l07-s6-practice-before-need.png`,
          imageCaption: `Practice when calm — so the tool is automatic when it matters most`,
          vocab: [
            { word: `practice`, definition: `Repeating a skill when you don't urgently need it — so it becomes available automatically when you do. Breathing techniques must be practiced calmly to work reliably under stress.`, audioPrompt: `Terra believes this is the most important part of this lesson, {name}: practice breathing techniques when you're already calm. That's when they become automatic — when your brain learns the pattern and can run it without effort. Try to use a skill for the first time in a crisis and it's much harder. Practice it daily and it's there when you need it most.` },
            { word: `automatic`, definition: `Happening without conscious effort — what a skill becomes after enough practice, so it's available even when you're under stress and thinking clearly is harder.`, audioPrompt: `When a skill becomes automatic, {name}, it doesn't need your full attention to run. You've practiced it enough that your body knows it. That's what you're building when you do box breathing on a calm Tuesday morning — so that on a stressful Thursday, your body can run it without you having to remember all the steps.` },
            { word: `preparation`, definition: `Practicing or setting something up before you need it — the approach that makes breathing techniques available in moments of stress rather than having to learn them mid-crisis.`, audioPrompt: `Preparation is the difference between a tool and a tool you know how to use, {name}. A fire drill is preparation — you practice leaving the building before there's a fire, so you know what to do when there is one. Breathing practice works the same way. You prepare now so the skill is there when it matters most.` },
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
    fetch('/explorer-assets/wellness/l07-s1-switch-you-control.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-s2-two-modes.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-s3-box-breathing.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-s4-four-seven-eight.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-s5-when-to-use.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l07-s6-practice-before-need.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L07] One or more magazine assets missing'));
}
