// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L01 — Thinking Like a Scientist
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS Science and Engineering Practices —
//            Asking Questions, Planning Investigations,
//            Analyzing Data, Constructing Explanations
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what scientific thinking is, from observation to
//        question to hypothesis, designing experiments, why this matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-01`,
      title: `Thinking Like a Scientist`,
      duration: 18,
      xpReward: 75,
      badge: `science-thinker`,
      badgeName: `Science Thinker`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. I'm your guide for Science, and I'm an otter for a reason. Otters are some of the most playful, curious, hands-on animals on Earth. We bang rocks against shells to crack them open. We use sticks as tools. We test things, fail, try again, and figure things out. That's exactly what scientists do too. Today we cover the BASIC SKILL behind every scientific discovery in human history. How to OBSERVE the world, ASK good questions, and TEST your ideas. By the end, you'll know how to actually think like a scientist. Let's go.`,
          headline: `Thinking Like a Scientist`,
          subtitle: `The basic skill behind every scientific discovery in history`,
          visual: `/ue-assets/science/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Science Starts With Observation`,
          paragraphs: [
            `Most people think science starts with experiments. Actually, science starts with OBSERVATION. An observation is something you notice using your senses or your tools. A scientist might observe that ice melts faster in some places than others, that a certain plant grows toward light, or that some people seem to recover faster from colds. Each of these is just NOTICING something. No conclusions yet. Just paying attention.`,
            `Good scientists are amazing observers. They notice things other people miss. They pay attention to small details that seem boring but might matter. They take careful notes. Charles Darwin spent FIVE YEARS observing birds, plants, and animals around the world before he ever wrote his theory of evolution. Marie Curie noticed that certain rocks gave off mysterious energy, which led to her discovery of radioactivity. Real science always starts with someone observing something carefully enough to ask "what's going on here?"`,
          ],
          image: `/ue-assets/science/l01-s1-observation.webp`,
          imageCaption: `Good scientists notice what others miss. Observation is the first scientific tool.`,
          vocab: [
            { word: `observation`,
              definition: `Something you notice using your senses or tools. Observation is the starting point of all real science, before any guesses or experiments.`,
              audioPrompt: `An observation is something you notice using your senses or your tools, {name}. Sight, sound, smell, touch, taste. Or instruments like microscopes, thermometers, and rulers. Observations are facts you can describe. The water is boiling. The plant is bending toward the window. The thermometer reads 72 degrees. Good scientists are amazing observers. They notice things other people miss, take careful notes, and pay attention to small details. Every scientific discovery in history started with someone observing something carefully.` },
            { word: `inference`,
              definition: `A conclusion you draw from your observations. An observation is what you notice. An inference is what you conclude from it. Good scientists keep these two clearly separate.`,
              audioPrompt: `An inference is a conclusion you draw from your observations, {name}. It's the step between noticing something and explaining it. You observe that leaves turn yellow in autumn. You infer that the tree is responding to shorter days or colder temperatures. Inferences are different from observations. An observation is what you see. An inference is what you conclude from it. Good scientists are careful to separate them. When you observe that the plant bends toward the window, you observe the bend. You infer that light is pulling it.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `From Observation to Question to Hypothesis`,
          paragraphs: [
            `Once you've observed something interesting, the next step is asking a QUESTION. "Why does that plant grow toward the window?" "Why does ice melt faster on dark surfaces than white ones?" "Why do some kids get sick less often than others?" Good scientific questions are SPECIFIC enough that you could actually try to answer them, and OPEN enough that you don't already know the answer.`,
            `Then comes the HYPOTHESIS. A hypothesis is a possible answer to your question that you can TEST. NOT a wild guess. NOT a hope. A specific, testable idea. "The plant grows toward the window because plants need light to make food." "Ice melts faster on dark surfaces because dark colors absorb more heat." A hypothesis is your best current guess at how something works, before you've checked. Good scientists are willing to be wrong about their hypotheses. In fact, they DESIGN experiments to test whether they're wrong, not just whether they're right.`,
          ],
          image: `/ue-assets/science/l01-s2-hypothesis.webp`,
          imageCaption: `Observation → question → hypothesis. Then you test it.`,
          vocab: [
            { word: `hypothesis`,
              definition: `A possible answer to a scientific question that you can test through experiments. Not a wild guess. A specific, testable idea about how something works.`,
              audioPrompt: `A hypothesis is a possible answer to a scientific question that you can test, {name}. Not a wild guess. Not just hope. A specific, testable idea. "Dark surfaces absorb more heat than light surfaces, so ice melts faster on them." That's a hypothesis. You can test it by putting ice cubes on different colored surfaces and measuring which melts fastest. Good scientists design experiments to check whether their hypotheses are wrong, not just whether they're right. Being willing to be wrong is one of science's most important habits.` },
            { word: `variable`,
              definition: `The one thing you change on purpose in an experiment. Good experiments change only one variable at a time so you can tell what's actually causing the result.`,
              audioPrompt: `A variable is the one thing you change on purpose in an experiment, {name}. If you're testing whether dark surfaces melt ice faster, the variable is the surface color. You change that. Everything else stays the same. Testing one variable at a time is crucial. If you change two things at once, you won't know which one caused the result. Good scientists are disciplined about this. Change one thing. Measure the result. That discipline is what makes experiments trustworthy and repeatable.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Testing Ideas With Experiments`,
          paragraphs: [
            `An EXPERIMENT is a test you design to check whether your hypothesis is right. Good experiments have a few key features. They TEST ONE THING at a time. If you're testing whether dark surfaces melt ice faster, you keep everything else the same (size of ice, room temperature, time of day) and only change the surface color. The thing you change on purpose is called the VARIABLE. Everything you keep the same is called a CONTROL.`,
            `After running the experiment, you collect EVIDENCE, which is the data you measure. How long did each ice cube take to melt? Was there a clear difference between the dark and light surfaces? You write everything down honestly, even if it doesn't match what you expected. If the evidence supports your hypothesis, you've learned something. If it doesn't, you've ALSO learned something. Many of science's biggest discoveries came from experiments that went the WRONG way for the original hypothesis. Penicillin, the first antibiotic, was discovered because Alexander Fleming noticed mold killing bacteria in a forgotten Petri dish. He wasn't trying to find antibiotics. He just paid attention when something unexpected happened.`,
          ],
          image: `/ue-assets/science/l01-s3-experiment.webp`,
          imageCaption: `Test one thing. Keep everything else the same. Record evidence honestly.`,
          vocab: [
            { word: `experiment`,
              definition: `A test designed to check whether a hypothesis is correct. Good experiments change one variable at a time while keeping other conditions the same, and record evidence honestly.`,
              audioPrompt: `An experiment is a test designed to check whether a hypothesis is correct, {name}. Good experiments change one thing at a time, called the variable. Everything else is kept the same, which we call the controls. After running the experiment, scientists collect evidence (data they measure) and write everything down honestly. If the evidence supports the hypothesis, they've learned something. If it doesn't, they've also learned something. Many famous discoveries came from experiments that surprised the scientists running them.` },
            { word: `control`,
              definition: `Everything you keep the same in an experiment so the only thing changing is your variable. Controls let you trust that any result you see is actually caused by what you changed.`,
              audioPrompt: `A control is everything you keep the same in an experiment so that the only thing changing is your variable, {name}. If you're testing whether dark surfaces melt ice faster, you control the room temperature, the size of the ice cubes, and the time of day. You keep all of those the same so they can't affect your results. Without controls, you can't trust your results. Too many things changed. Controls are what make experiments actually tell you something useful.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Matters Beyond Science Class`,
          paragraphs: [
            `Scientific thinking isn't just for scientists. It's a skill that helps anyone make better decisions. Doctors use it to figure out what's making patients sick. Cooks use it when trying new recipes ("does adding more salt actually make this better, or do I just think it does?"). Detectives use it when solving crimes (observe evidence, form a hypothesis, test it). Even your video game strategies use scientific thinking when you try something, see if it works, and adjust based on what you learned.`,
            `The OPPOSITE of scientific thinking is just believing whatever feels right without checking. Humans are amazing pattern-finders, but we sometimes see patterns that aren't really there. We jump to conclusions. We hold onto ideas even when evidence says we're wrong. Scientific thinking is the habit of pausing, checking, and being willing to update. The more you practice it, the better you'll get. By the end of this subject, you'll have built that habit so well you'll use it without even thinking about it. Trust me, otter scientist's promise.`,
          ],
          image: `/ue-assets/science/l01-s4-everyday.webp`,
          imageCaption: `Scientific thinking helps with cooking, detective work, games, life choices.`,
          vocab: [
            { word: `evidence`,
              definition: `Information you gather from observations or experiments that helps answer a scientific question. Evidence is what makes scientific claims trustworthy.`,
              audioPrompt: `Evidence is information you gather from observations or experiments, {name}. Data you can measure or describe carefully. The ice cube on the dark surface melted in 4 minutes, while the one on the white surface took 7 minutes. That's evidence. Good scientists collect evidence honestly, even when it doesn't match what they expected. Evidence is what makes scientific claims trustworthy. Without evidence, a claim is just an opinion. With evidence, you can build real knowledge that other people can check too.` },
            { word: `scientific method`,
              definition: `The organized process scientists use to investigate questions: observe, ask, hypothesize, experiment, collect evidence, conclude. The foundation of almost every scientific discovery humans have made.`,
              audioPrompt: `The scientific method is the organized process scientists use to investigate questions, {name}. Observe something interesting. Ask a specific question. Form a hypothesis. Design an experiment to test it. Collect evidence. Analyze the results. Draw a conclusion. Report it so others can check. The scientific method isn't a rigid checklist. Real science is messier and more creative than that. But it's a useful framework that keeps scientists honest, organized, and connected to what evidence actually shows. It's the foundation of almost every scientific discovery humans have made.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes from real or imagined scientists. For each one, identify the SCIENTIFIC SKILL happening: OBSERVATION (noticing something carefully), HYPOTHESIS (forming a testable idea), or EXPERIMENT (testing the idea systematically)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `observation`, label: `Observation`, color: `#60A5FA`, description: `Carefully noticing something using senses or tools. The starting point of science.` },
            { id: `hypothesis`,  label: `Hypothesis`,  color: `#A78BFA`, description: `Forming a specific, testable idea that might explain what you observed.` },
            { id: `experiment`,  label: `Experiment`,  color: `#34D399`, description: `Designing a careful test, changing one variable, keeping others the same.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `A scientist watches an ant colony for three hours.` },
                { text: `She takes notes every five minutes about what the ants are doing.` },
                { text: `She notices that ants leaving the nest seem to follow specific paths.` },
              ],
              correctAnswer: `observation`,
              realWorldExample: `Real ant scientists often spend hundreds of hours observing colonies.`,
              explanation: `Watching carefully. Taking notes. Noticing patterns. Pure observation. Not testing anything yet, not guessing why, just paying attention. This is the foundation of science, and it's harder than it looks.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `After watching the ants for hours, the scientist thinks:` },
                { text: `"Maybe the ants follow each other's chemical trails to find food."` },
                { text: `She writes this idea down as something she could check with an experiment.` },
              ],
              correctAnswer: `hypothesis`,
              realWorldExample: `Ant pheromone trails were actually discovered this way.`,
              explanation: `A specific, testable idea about how something works. Pure hypothesis. The scientist isn't guessing wildly. She's proposing a possible explanation she could check. Good hypotheses come from good observation.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `The scientist sets up a test.` },
                { text: `She wipes the ants' usual path with rubbing alcohol to remove any chemical trail, while leaving another path nearby untouched.` },
                { text: `She times how long it takes ants to find food using each path and writes everything down.` },
              ],
              correctAnswer: `experiment`,
              realWorldExample: `This is how ant communication research is actually done.`,
              explanation: `Changing one thing (chemical trail or not) while keeping everything else the same. Measuring results. Recording evidence honestly. Pure experiment. The change is the variable. The path that wasn't touched is the control. This is the heart of experimental science.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `A different person watches two friends argue about whether crystals improve health.` },
                { text: `One friend says she felt better after holding a crystal.` },
                { text: `The other friend says crystals can't possibly do anything physical.` },
              ],
              correctAnswer: `observation`,
              realWorldExample: `Many real situations involve people making claims without testing them.`,
              explanation: `Tricky because there's a CLAIM being argued about (which might LOOK like a hypothesis). But neither friend is doing science. They're just stating opinions. The PERSON WATCHING is making an observation: noticing that two people disagree without evidence. To turn this into real science, someone would have to design a careful test (a blind experiment where people don't know if they have a real crystal or a fake one, and see if there's actually any difference). The lesson: opinions and claims are NOT the same as hypotheses. Hypotheses are specific and testable. Strong feelings about something aren't enough to make it science.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `Where does science USUALLY start?`,
              options: [
                `With an experiment`,
                `With an observation (noticing something carefully)`,
                `With a famous scientist's idea`,
                `In a textbook`,
              ],
              correctIndex: 1,
              explanation: `Science starts with observation. Someone notices something interesting and pays close enough attention to ask why. Experiments come later. Good observation is the foundation.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is a HYPOTHESIS?`,
              options: [
                `A proven fact`,
                `A specific, testable idea that might explain something you observed`,
                `A wild guess with no evidence`,
                `The same as a theory`,
              ],
              correctIndex: 1,
              explanation: `A hypothesis is a specific, testable explanation. Not a wild guess, and not a proven fact. It's your best current idea, ready to be checked through experiment.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What's the difference between a VARIABLE and a CONTROL in an experiment?`,
              options: [
                `They're the same thing`,
                `The VARIABLE is the one thing you change on purpose. The CONTROLS are everything you keep the same.`,
                `Variables are people, controls are things`,
                `Controls are what scientists wear`,
              ],
              correctIndex: 1,
              explanation: `In a good experiment, you change ONE thing (the variable) while keeping everything else the same (the controls). This lets you tell whether the change you made is actually what's causing any difference you see.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `What is EVIDENCE in science?`,
              options: [
                `What scientists believe`,
                `Information you gather from observations or experiments, that you can measure or describe carefully`,
                `A famous quote`,
                `An opinion`,
              ],
              correctIndex: 1,
              explanation: `Evidence is data you can measure or describe. It's what makes scientific claims trustworthy. Without evidence, a claim is just an opinion. With evidence, other people can check your work.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: Good scientists design experiments to check whether they're WRONG, not just whether they're right.`,
              correctAnswer: true,
              explanation: `True. Being willing to be wrong is one of science's most important habits. Real scientists try to find evidence that would PROVE their hypothesis wrong. If they can't find any, the hypothesis is more trustworthy. Just looking for evidence that confirms what you already believe is bad science.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why did ALEXANDER FLEMING discover penicillin?`,
              options: [
                `He was trying to invent antibiotics`,
                `He paid attention when something unexpected happened in his lab (mold killing bacteria), instead of just throwing it away`,
                `He read about it in a book`,
                `He guessed`,
              ],
              correctIndex: 1,
              explanation: `Fleming wasn't trying to discover antibiotics. He noticed something unexpected (mold killing bacteria in a forgotten Petri dish) and paid attention. Many of science's biggest discoveries came from someone paying attention when something surprising happened.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `Where does SCIENTIFIC THINKING help OUTSIDE of science class?`,
              options: [
                `It doesn't`,
                `In medicine, cooking, detective work, video game strategy, and almost any time you need to make a decision based on real information`,
                `Only in laboratories`,
                `Only for adults`,
              ],
              correctIndex: 1,
              explanation: `Scientific thinking helps everywhere. Doctors use it. Cooks use it. Detectives use it. Anyone who wants to make decisions based on real information instead of just feelings benefits from thinking like a scientist.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's the OPPOSITE of scientific thinking?`,
              options: [
                `Math`,
                `Believing whatever feels right without checking, jumping to conclusions, holding onto ideas even when evidence says you're wrong`,
                `Reading books`,
                `Asking questions`,
              ],
              correctIndex: 1,
              explanation: `Humans are amazing pattern-finders, but we sometimes see patterns that aren't really there. We jump to conclusions. We hold onto ideas even when evidence says we're wrong. Scientific thinking is the habit of pausing, checking, and updating based on real evidence.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's something you've observed lately that made you wonder "why?" or "how?" — even something small?` },
            { id: `r2`, text: `Have you ever held onto a belief, then realized you were wrong? How did finding out feel? What helped you change your mind?` },
            { id: `r3`, text: `Pick an everyday question (why does popcorn pop? why does my dog do that?). Form a hypothesis about it. How could you test it?` },
            { id: `r4`, text: `Why do you think humans sometimes BELIEVE things without checking? What might make us better at checking?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Scientific thinking is one of the most powerful tools any human can develop. It's not just for laboratories. Doctors testing whether a treatment works. Engineers designing safer cars. Cooks tweaking recipes. Detectives solving cases. Even your video game strategies improve when you observe what's happening, form a hypothesis, and test it. The MOST IMPORTANT habit isn't memorizing facts about cells or atoms. It's the habit of pausing, checking, and being willing to update what you believe when evidence says so. That habit will serve you for the rest of your life. Promise.`,
          familyAdventure: `Family Mini-Experiment Night. As a family, pick ONE thing you're all curious about. Does music help homework focus better than silence? Does cold water really hydrate faster than room temperature water? Does a houseplant grow faster facing a window? Form a hypothesis together. Design a simple test. Run it. Talk about the results. You're doing what every great scientist in history has done, just at home.`,
          creativePrompt: {
            intro: `Imagine you're a scientist who just made a strange observation in your own home. Write a journal entry about it.`,
            floor: `Write at least 5 sentences. Describe what you observed, the question it raises, and what hypothesis you're forming.`,
            stretch: `Write 8 to 10 sentences. Cover your observation, the question, your hypothesis, the experiment you'd design to test it, and what you'd consider the experiment a success at telling you.`,
            open: `Write as much as you want. Build a full scientific journal entry. Include the unexpected observation, multiple possible hypotheses, the experiment you'd run to choose between them, and reflection on what you might be wrong about.`,
            frames: [
              `Today I observed something strange: ___.`,
              `My question is: ___.`,
              `My hypothesis is: ___.`,
              `To test this, I would ___.`,
              `If I'm wrong about my hypothesis, that would tell me ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what observation, hypothesis, and experiment mean, understand what evidence is, and see why scientific thinking helps far beyond science class. Next lesson: the most important tools any scientist ever uses. Your own FIVE SENSES, and how to train them into superpowers. See you there. — Cosmo.`,
          badge: `science-thinker`,
          badgeName: `Science Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
