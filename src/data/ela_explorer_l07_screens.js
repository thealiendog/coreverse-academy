// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L07 — Cause and Effect in Reading
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.3 / RI.2-3.8
// REWRITE v2 (May 2026): Grade 1 accessible, CAUSE/EFFECT identification
// game (binary skill — directly tests CCSS RI.2-3.3), signal words taught
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L07 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-07`,
      title:     `Cause and Effect in Reading`,
      duration:  12,
      xpReward:  50,
      badge:     `cause-explorer`,
      badgeName: `Cause Explorer`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today's lesson is about WHY things happen. One thing CAUSES another. The cause comes first. The effect comes after. Like dominos falling — push one, the next goes down! Let's go!`,
          headline: `Cause and Effect in Reading`,
          subtitle: `Understanding WHY things happen — and what happens NEXT`,
          visual: `/explorer-assets/ela/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Like Dominos Falling`,
          paragraphs: [
            `Imagine a line of DOMINOS standing up. You push the first one. It falls!`,
            `It hits the second. THAT falls. The second hits the third. The third falls! Each falling domino is an EFFECT of the one before — AND a CAUSE of the one after. Stories and articles work the same way. One event leads to another. One cause makes an effect!`,
          ],
          image: `/explorer-assets/ela/l07-s1-domino.webp`,
          imageCaption: `Cause and effect is like dominos falling!`,
          vocab: [
            { word: `cause`,  definition: `The thing that makes something happen. Causes come BEFORE effects.`,
              audioPrompt: `A cause is the thing that makes something happen. Causes come BEFORE effects. The cause is the first domino. It pushes the next one!` },
            { word: `effect`, definition: `What happens BECAUSE of a cause. Effects come AFTER causes.`,
              audioPrompt: `An effect is what happens because of a cause. Effects come AFTER causes. The first domino falls (cause). The second falls (effect)!` },
            { word: `domino`, definition: `A flat piece that falls and knocks down the next one.`,
              audioPrompt: `A domino is a flat piece that's good for standing in lines. When you push the first one, it knocks down the next. Cause and effect is just like dominos!` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Cause: Why Did It Happen?`,
          paragraphs: [
            `When something happens in a text, ask: WHY?`,
            `The picnic was canceled. Why? "BECAUSE it rained." Rain = the cause! Maya was happy at school. Why? "BECAUSE her best friend moved back!" Friend = the cause. The cause is the REASON. Finding it means tracing back to why something happened. Detective work!`,
          ],
          image: `/explorer-assets/ela/l07-s2-cause.webp`,
          imageCaption: `Cause = the WHY. Trace back to find the reason!`,
          vocab: [
            { word: `why`,        definition: `The question that finds the cause.`,
              audioPrompt: `Why is the question that finds the cause. Whenever something happens, asking "why?" leads you to the cause. Why did the character do that? Why did this event happen?` },
            { word: `reason`,     definition: `Why something happened.`,
              audioPrompt: `A reason is why something happened. The cause IS the reason. "I ate dinner because I was hungry." Hungry was the reason. Hungry was the cause!` },
            { word: `trace back`, definition: `To follow back to find the start.`,
              audioPrompt: `To trace back means to follow back to find the start. To find the cause, you trace back from the effect. Sometimes the cause is right in the next sentence!` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Effect: What Happened?`,
          paragraphs: [
            `The EFFECT is the RESULT — what happened BECAUSE of the cause!`,
            `Rain → picnic canceled (effect). Friend moved back → Maya happy (effect). Studied hard → great test grade (effect)! Effects can be big or small, good or bad. They're the part you can SEE. Once you spot an effect, ask 'why' to find its cause!`,
          ],
          image: `/explorer-assets/ela/l07-s3-effect.webp`,
          imageCaption: `Effect = the RESULT. Effects are what you see!`,
          vocab: [
            { word: `result`,  definition: `What happened in the end.`,
              audioPrompt: `A result is what happened in the end. Effects are results. The result of pushing the first domino is — all the dominoes fall! The result of studying is — better grades!` },
            { word: `because`, definition: `A signal word that connects effect to cause.`,
              audioPrompt: `Because is a signal word that connects effect to cause. "I'm happy BECAUSE my friend is here." Happy = effect. Friend = cause. Watch for because!` },
            { word: `visible`, definition: `Easy to see.`,
              audioPrompt: `Visible means easy to see. Effects are visible — the part you notice first. The picnic IS canceled. That's the effect. The cause (rain) might be hidden!` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Chains of Cause and Effect`,
          paragraphs: [
            `Real life — and good writing — has CHAINS of causes and effects!`,
            `The boy slept late (cause) so he missed the bus (effect/new cause). He missed the bus (cause) so he was late to school (effect)! One cause leads to one effect, which becomes the cause of the next. The chain grows. Stories work this way. So does history!`,
          ],
          image: `/explorer-assets/ela/l07-s4-chain.webp`,
          imageCaption: `Chains — one effect becomes the cause of the next!`,
          vocab: [
            { word: `chain`,   definition: `A connected series of events.`,
              audioPrompt: `A chain is a connected series of events. Cause and effect often forms chains. One effect becomes the cause of the next. Chains can be short or very long!` },
            { word: `lead to`, definition: `When one thing causes another.`,
              audioPrompt: `Lead to means when one thing causes another. "Studying hard LEADS TO good grades." Studying = cause. Good grades = effect. Lead-to connects causes to effects!` },
            { word: `grows`,   definition: `Gets bigger or longer.`,
              audioPrompt: `Grows means gets bigger or longer. Chains of cause-and-effect can grow long. In a short text, two links. In a whole book, hundreds. History is a giant chain!` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words to Watch For`,
          paragraphs: [
            `Here are the SIGNAL WORDS that flag cause-and-effect!`,
            `Showing CAUSE: BECAUSE, SINCE, DUE TO. Showing EFFECT: SO, THEREFORE, AS A RESULT! When you see these words, your brain should say "cause-and-effect alert!" The author is showing you WHY something happened or WHAT happened because of it!`,
          ],
          image: `/explorer-assets/ela/l07-s5-signal-words.webp`,
          imageCaption: `Signal words. Cause: because, since. Effect: so, therefore, as a result!`,
          vocab: [
            { word: `since`,        definition: `A signal word that flags a cause.`,
              audioPrompt: `Since is a signal word that flags a cause. "SINCE it was raining, we stayed inside." Since = the reason that follows. It works just like because!` },
            { word: `therefore`,    definition: `A signal word for effect. Means "as a result."`,
              audioPrompt: `Therefore is a signal word for effect. "It was raining. Therefore, we stayed inside." Therefore = so, as a result. It tells you the effect is coming!` },
            { word: `as a result`,  definition: `A signal phrase meaning "because of that."`,
              audioPrompt: `As a result is a signal phrase that means because of that. "She studied hard. As a result, she did well!" Signals what HAPPENED because of the cause!` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Things Happen`,
          paragraphs: [
            `Cause and effect thinking is how humans understand the world!`,
            `Why does the sun rise? Why do leaves fall? Why was that character angry? Why did the team lose? Asking 'why' — and finding the cause — is how scientists, doctors, historians, and detectives work. The better you get at finding causes and effects, the better you understand EVERYTHING!`,
          ],
          image: `/explorer-assets/ela/l07-s6-why-things-happen.webp`,
          imageCaption: `Cause-and-effect thinking = how humans understand the world!`,
          vocab: [
            { word: `understand`, definition: `To really get what something means.`,
              audioPrompt: `To understand is to really get what something means. Cause-and-effect helps you understand. When you know WHY something happened, you understand it deeply!` },
            { word: `scientist`,  definition: `A person who studies how the world works.`,
              audioPrompt: `A scientist is a person who studies how the world works. Scientists are MASTERS of cause-and-effect. Why does ice melt? Why do plants grow toward light?` },
            { word: `everything`, definition: `All things.`,
              audioPrompt: `Everything means all things. Cause-and-effect helps you understand everything. Every story has it. Every history event. Every choice you make!` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 statements. For each one, drag it into CAUSE or EFFECT!`,
          buckets: [
            { id: `cause`,  label: `🎯 CAUSE (the reason)`,  color: `#FBBF24` },
            { id: `effect`, label: `✅ EFFECT (what happened)`, color: `#34D399` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `It rained all morning.`,
              matchPhrase: `Yes! That's the CAUSE — the rain is the reason something else happened!`,
              correctMatch: `cause` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `The picnic was canceled.`,
              matchPhrase: `Great! That's the EFFECT — what happened BECAUSE of the rain!`,
              correctMatch: `effect` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `Lily forgot her homework on the bus.`,
              matchPhrase: `Yes! That's the CAUSE — the reason something else happened!`,
              correctMatch: `cause` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `As a result, Lily had to redo her homework that night.`,
              matchPhrase: `Perfect! That's the EFFECT — and the signal phrase "as a result" gave it away!`,
              correctMatch: `effect` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is a CAUSE?`,
              options: [`What happens at the end`, `The thing that makes something else happen`, `A type of cookie`, `The name of a book`],
              correctIndex: 1,
              explanation: `A cause is the thing that makes something else happen. Causes come first — they're the WHY behind effects!` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is an EFFECT?`,
              options: [`What happens BECAUSE of a cause`, `The first word`, `The last sentence`, `The author's name`],
              correctIndex: 0,
              explanation: `An effect is what happens because of a cause. Effects come after causes!` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `"It rained, so the picnic was canceled." What's the CAUSE?`,
              options: [`The picnic`, `It rained`, `The cancellation`, `The food`],
              correctIndex: 1,
              explanation: `"It rained" is the cause. The picnic being canceled is the effect — the rain caused the cancellation!` },
            { id: `l07-q4`, format: `true-false`,
              question: `Signal words like "because," "since," and "so" help spot cause-and-effect.`,
              correctAnswer: true,
              explanation: `True! Cause signal words: because, since, due to. Effect signal words: so, therefore, as a result!` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `When one cause leads to an effect that becomes a new cause, you have a ___ of cause and effect.`,
              options: [`chain`, `chair`, `cookie`, `cloud`],
              correctIndex: 0,
              explanation: `Chain! Cause-and-effect often forms chains. One effect becomes the cause of the next!` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `What's the MAGIC QUESTION for finding a cause?`,
              options: [`Where?`, `Who?`, `Why?`, `When?`],
              correctIndex: 2,
              explanation: `WHY? Asking "why did this happen?" leads you back to the cause!` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists are HUGE cause-and-effect thinkers! When they do experiments, they ask: what causes what? Detectives do it with crimes. Doctors do it with health. Historians do it with the past. You're learning the same skill experts use!`,
          familyAdventure: `Play the CAUSE-EFFECT GAME at dinner! One person names an effect — "the lights are on." Family members try to name the cause — "because someone flipped the switch!" Take turns. Make it silly!`,
          creativePrompt: `Draw a CAUSE-EFFECT CHAIN! Start with a tiny event — like dropping a marble. Then draw what happens next. And next. Each picture leads to the next. How long can your chain grow? Five? Ten? Twenty?`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to spot CAUSE and EFFECT! Causes come first. Effects come after. You know the signal words. You know about chains. This thinking is what scientists, detectives, and doctors do. Quill is so proud!`,
          badge: `cause-explorer`,
          badgeName: `Cause Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L07] Loaded: "Cause and Effect" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
