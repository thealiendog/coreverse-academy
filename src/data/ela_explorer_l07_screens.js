// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L07 — Cause and Effect in Reading
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RI.2-3.3 / RI.2-3.8
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
          guideText: `Welcome back, {name}. Today's lesson is about WHY things happen. In every story, every article, every piece of news — one thing CAUSES another. The cause comes first. The effect comes after. Like dominos falling — push one, the next goes down. Cause-and-effect is everywhere in reading and in life. Today, you'll learn to spot it. Let's go.`,
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
            `Imagine a line of DOMINOS standing up. You push the first one. It falls.`,
            `It hits the second one. THAT falls. The second hits the third. The third falls. Each falling domino is an EFFECT of the one before it — and a CAUSE of the one after it. Stories and articles often work the same way. One event leads to another. One choice leads to a result. One cause makes an effect. Understanding the chain is reading deeply.`,
          ],
          image: `/explorer-assets/ela/l07-s1-domino.webp`,
          imageCaption: `Cause and effect is like dominos falling. One thing makes the next thing happen.`,
          vocab: [
            { word: `cause`,        definition: `The thing that makes something happen. Causes come BEFORE effects.`,
              audioPrompt: `A cause, {name}, is the thing that makes something happen. Causes come BEFORE effects. The cause is the first domino. It pushes the next one. Without a cause, nothing happens. Behind every effect in the world, there's a cause. Finding causes is one of the best ways to understand WHY things happen.` },
            { word: `effect`,       definition: `What happens BECAUSE of a cause. Effects come AFTER causes.`,
              audioPrompt: `An effect, {name}, is what happens because of a cause. Effects come AFTER causes. The first domino falls (cause). The second falls (effect). When we see an effect, we can trace back to find its cause. Authors leave trails of causes and effects for readers to follow. Smart readers follow the trail.` },
            { word: `domino`,       definition: `A flat piece that falls and knocks down the next one. Cause-and-effect is like dominos.`,
              audioPrompt: `A domino, {name}, is a flat piece that's good for standing in lines. When you push the first one, it knocks down the next, which knocks down the next, and so on. The 'domino effect' is a phrase people use when one event sets off a chain of other events. Cause-and-effect is literally domino thinking. One thing makes another thing happen.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Cause: Why Did It Happen?`,
          paragraphs: [
            `When something happens in a text, ask: WHY?`,
            `The picnic was canceled. Why? "BECAUSE it rained." Rain = the cause. Maya was happy at school. Why? "BECAUSE her best friend moved back." Friend moving back = the cause. The cause is the REASON. Finding the cause means tracing back to the reason something happened. It's detective work for readers.`,
          ],
          image: `/explorer-assets/ela/l07-s2-cause.webp`,
          imageCaption: `Cause = the WHY. Why did this happen? Trace back to find the reason. Detective work.`,
          vocab: [
            { word: `why`,          definition: `The question that finds the cause. WHY did this happen?`,
              audioPrompt: `Why, {name}, is the question that finds the cause. Whenever something happens in a story or article, asking 'why?' leads you to the cause. Why did the character do that? Why did this event happen? Why did things change? Curious readers ask 'why' a lot. Every why is a chance to understand more deeply.` },
            { word: `reason`,       definition: `Why something happened. The cause is the reason.`,
              audioPrompt: `A reason, {name}, is why something happened. The cause is the reason. 'I ate dinner BECAUSE I was hungry.' Hungry was the reason. Hungry was the cause. Authors fill texts with reasons. Once you start looking for them, you'll see them everywhere. Reasons help you understand the world.` },
            { word: `trace back`,   definition: `To follow back to find the start. You trace back to find the cause.`,
              audioPrompt: `To trace back, {name}, means to follow back to find the start. To find the cause of something, you trace back from the effect. Sometimes the cause is right there in the next sentence. Sometimes it's farther back in the text. Tracing back is a skill. It helps you find roots and reasons.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Effect: What Happened?`,
          paragraphs: [
            `The EFFECT is the RESULT — what happened BECAUSE of the cause.`,
            `Rain → picnic canceled (effect). Friend moved back → Maya happy (effect). Studied hard → great test grade (effect). Effects can be big or small, good or bad. They're the part you can SEE. Once you spot an effect, you can ask 'why' to find its cause. Effect-to-cause is one direction. Cause-to-effect is the other. Both work.`,
          ],
          image: `/explorer-assets/ela/l07-s3-effect.webp`,
          imageCaption: `Effect = the RESULT. What happened? Effects are visible. Causes are what made them happen.`,
          vocab: [
            { word: `result`,       definition: `What happened in the end. Effects are results.`,
              audioPrompt: `A result, {name}, is what happened in the end. Effects are results. The result of pushing the first domino is — all the dominoes fall. The result of studying is — better grades. The result of being kind is — friends who care about you. Texts are full of results. They're the visible part. Causes are the hidden part behind them.` },
            { word: `because`,      definition: `A signal word that connects effect to cause. "I'm happy BECAUSE..."`,
              audioPrompt: `Because, {name}, is a signal word that connects effect to cause. 'I'm happy BECAUSE my friend is here.' Happy = effect. Friend being here = cause. 'Because' is one of the friendliest cause-effect words. When you see it, you know — a cause is about to be revealed. Watch for 'because' everywhere.` },
            { word: `visible`,      definition: `Easy to see. Effects are VISIBLE — they're the part you notice first.`,
              audioPrompt: `Visible, {name}, means easy to see. Effects are visible — they're the part you notice first. The picnic IS canceled. That's the effect. Easy to see. The rain (cause) might be hidden. The cause might be invisible. To find it, you have to ask 'why?' Visible effects lead you to hidden causes.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Chains of Causes and Effects`,
          paragraphs: [
            `Real life — and good writing — has CHAINS of causes and effects.`,
            `The boy slept late (cause) so he missed the bus (effect/new cause). He missed the bus (cause) so he was late to school (effect/new cause). He was late to school (cause) so he missed the morning announcement (effect). One cause leads to one effect, which becomes the cause of the next effect. The chain grows. Stories often work this way. So does history.`,
          ],
          image: `/explorer-assets/ela/l07-s4-chain.webp`,
          imageCaption: `Chains of cause and effect. One effect becomes the cause of the next. Stories and history grow this way.`,
          vocab: [
            { word: `chain`,        definition: `A connected series of events. Cause-and-effect often forms chains.`,
              audioPrompt: `A chain, {name}, is a connected series of events. Cause-and-effect often forms chains. One effect becomes the cause of the next. The chain can be short — two or three events. Or it can be long — a whole story of one thing leading to another to another. Skilled readers follow the chain. Each link in the chain is a cause-effect pair.` },
            { word: `lead to`,      definition: `When one thing causes another. Causes LEAD TO effects.`,
              audioPrompt: `'Lead to,' {name}, means when one thing causes another. 'Studying hard LEADS TO good grades.' Studying = cause. Good grades = effect. 'Lead to' is one of many cause-effect signal phrases. Others include 'results in,' 'brings about,' and 'causes.' All do similar work — they connect a cause to its effect.` },
            { word: `grows`,        definition: `Gets bigger or longer. Chains of cause-and-effect can GROW long.`,
              audioPrompt: `To grow, {name}, means to get bigger or longer. Chains of cause-and-effect can grow long. In a short text, the chain might have two links. In a whole book, it might have hundreds. History is a giant chain. Each event causes the next. Each decision leads to consequences. Tracing chains is how we understand stories — and the past.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words for Cause and Effect`,
          paragraphs: [
            `Here are the SIGNAL WORDS that flag cause-and-effect.`,
            `Showing cause: BECAUSE, SINCE, DUE TO, AS A RESULT OF. Showing effect: SO, THEREFORE, AS A RESULT, CONSEQUENTLY, THIS LED TO. When you see these words in a text, your brain should say "cause-and-effect alert!" The author is showing you WHY something happened or WHAT HAPPENED because of something. Train your eyes to spot them.`,
          ],
          image: `/explorer-assets/ela/l07-s5-signal-words.webp`,
          imageCaption: `Signal words. Cause: because, since, due to. Effect: so, therefore, as a result.`,
          vocab: [
            { word: `since`,        definition: `A signal word that flags a cause. "SINCE it was raining..."`,
              audioPrompt: `'Since,' {name}, is a signal word that flags a cause. 'SINCE it was raining, we stayed inside.' Since = the reason that follows. It works like 'because.' Many cause-effect sentences use 'since' to mean 'because.' Spotting 'since' as a cause word is a smart reader's habit.` },
            { word: `therefore`,    definition: `A fancy signal word for effect. "It was raining; THEREFORE, we stayed inside."`,
              audioPrompt: `'Therefore,' {name}, is a fancy signal word for effect. 'It was raining. Therefore, we stayed inside.' Therefore = so, as a result, this is what happened. Older or more formal writing often uses 'therefore.' It's a sign the author is being careful and clear about cause-and-effect.` },
            { word: `consequently`, definition: `Another fancy word for effect. Means "as a result."`,
              audioPrompt: `Consequently, {name}, is another fancy word for effect. It means 'as a result.' Big word — but useful. 'She studied for the test. Consequently, she did well.' Consequently signals what happened BECAUSE of the cause. Don't be scared of big signal words. They do the same job as small ones.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Things Happen`,
          paragraphs: [
            `Cause-and-effect thinking is how humans understand the world.`,
            `Why does the sun rise? Why do leaves fall? Why was that character angry? Why did the team lose? Asking 'why' — and finding the cause — is how scientists, doctors, historians, and detectives work. It's how YOU work, every day. The better you get at finding causes and effects, the better you understand EVERYTHING. Reading practices this skill. Use it everywhere.`,
          ],
          image: `/explorer-assets/ela/l07-s6-why-things-happen.webp`,
          imageCaption: `Cause-and-effect thinking = how humans understand the world. Why? Why? Why? Find the cause.`,
          vocab: [
            { word: `understand`,   definition: `To really get what something means. Cause-and-effect helps you UNDERSTAND.`,
              audioPrompt: `To understand, {name}, is to really get what something means. Cause-and-effect helps you understand. When you know WHY something happened, you understand it deeply. Just knowing WHAT happened is shallow. Knowing WHY makes you wise. Curious people are always asking 'why.' Curious people end up understanding the most.` },
            { word: `scientist`,    definition: `A person who studies how the world works. Scientists are masters of cause-and-effect.`,
              audioPrompt: `A scientist, {name}, is a person who studies how the world works. Scientists are MASTERS of cause-and-effect. Why does ice melt? Why do plants grow toward light? Why do diseases spread? Scientists trace causes and effects to figure out how the world works. You can think like a scientist too. Just ask why.` },
            { word: `everything`,   definition: `All things. Cause-and-effect helps you understand EVERYTHING.`,
              audioPrompt: `Everything, {name}, means all things. Cause-and-effect helps you understand everything. Every story has cause-and-effect. Every history event has causes and effects. Every science experiment is about causes and effects. Every choice you make causes effects. This is one of the most powerful thinking tools you'll ever own. Use it everywhere.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `Causes happen FIRST, then effects happen after.`,
              matchPhrase: `Yes! Cause comes first. Effect comes after. Like dominos falling — one knocks the next. Order matters in cause-and-effect.`,
              correctMatch: `fact` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `One cause can have MANY different effects.`,
              matchPhrase: `True! A single cause — like a storm — can have many effects: flooded streets, school closures, downed trees, cooler weather. One cause, many effects.`,
              correctMatch: `fact` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `Effects happen BEFORE their causes.`,
              matchPhrase: `No way! Causes ALWAYS come first. Effects ALWAYS come after. Time only goes one direction. The cause has to happen first to make the effect happen.`,
              correctMatch: `myth` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `Things just happen for no reason at all.`,
              matchPhrase: `Not really! Almost everything has a CAUSE — a reason it happened. Sometimes the cause is hidden. But it's almost always there. Smart readers and thinkers ask "why?"`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is a CAUSE?`,
              options: [`What happens at the end of a story`, `The thing that makes something else happen`, `A type of cookie`, `The name of a book`],
              correctIndex: 1,
              explanation: `A cause is the thing that makes something else happen. Causes come first. They're the WHY behind effects.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is an EFFECT?`,
              options: [`What happens BECAUSE of a cause`, `The first word in a book`, `The last sentence of a paragraph`, `The author's name`],
              correctIndex: 0,
              explanation: `An effect is what happens because of a cause. Effects come after causes. The cause is the reason. The effect is the result.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `"It rained, so the picnic was canceled." What's the CAUSE?`,
              options: [`The picnic`, `It rained`, `The cancellation`, `The food`],
              correctIndex: 1,
              explanation: `"It rained" is the cause. The picnic being canceled is the effect. The cause (rain) made the effect (cancellation) happen.` },
            { id: `l07-q4`, format: `true-false`,
              question: `Signal words like "because," "since," and "so" help you spot cause-and-effect in a text.`,
              correctAnswer: true,
              explanation: `True! Cause signal words include because, since, due to. Effect signal words include so, therefore, as a result. They're your clues.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `When one cause leads to an effect that becomes a new cause, you have a ___ of cause and effect.`,
              options: [`chain`, `chair`, `cookie`, `cloud`],
              correctIndex: 0,
              explanation: `Chain! Cause-and-effect often forms chains. One effect becomes the cause of the next. Stories and history grow this way.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `What's the magic question for finding a CAUSE?`,
              options: [`Where?`, `Who?`, `Why?`, `When?`],
              correctIndex: 2,
              explanation: `WHY? Asking "why did this happen?" leads you back to the cause. It's the curious reader's favorite question. The more you ask why, the more you understand.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists are HUGE cause-and-effect thinkers. When they do experiments, they're literally asking: what causes what? Change one thing — does another thing change? That's the heart of science. Detectives do the same thing in crimes. Doctors do it with health. Historians do it with the past. Cause-and-effect thinking is the backbone of all real understanding. You're learning the same skill those experts use.`,
          familyAdventure: `Play the CAUSE-EFFECT GAME at dinner. One person names an effect — "the lights are on." Other family members try to name the cause — "because someone flipped the switch!" Then someone else names a new effect. Take turns. Make it silly. ("The dog is wet!" "Because it rained on him!") Notice how cause-and-effect is everywhere in your own life.`,
          creativePrompt: `Draw a CAUSE-EFFECT CHAIN. Pick a tiny starting event — like dropping a marble on the floor. Then draw what happens next. And next. And next. Each picture leads to the next. See how long you can make your chain. Five steps? Ten? Twenty? Cause-effect chains can grow as long as you want.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to spot CAUSE and EFFECT in any text. You know causes come first. You know effects come after. You know the signal words. You know how to find chains. This thinking — asking WHY — is what scientists, detectives, doctors, and historians do. Now you do too. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L07] Loaded: "Cause and Effect in Reading" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
