// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L19 — Quantum Consciousness: An Introduction
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real quantum physics + observer effect + frontier exploration.
// GAME FORMAT: investigation
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-19`,
      title: `Quantum Consciousness: An Introduction`,
      duration: 20,
      xpReward: 75,
      badge: `quantum-curious`,
      badgeName: `Quantum Curious`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we explore one of the most fascinating and honestly strange areas of all science: QUANTUM PHYSICS, the study of how the tiniest pieces of reality actually behave. What scientists have discovered down there will sound impossible at first, but it's all measured, proven, real. And there's a deeper question that scientists and philosophers are still actively exploring: how does CONSCIOUSNESS (your awareness, your mind) connect to this strange quantum world? Today we'll look at what's settled science, what's still being explored, and how to think critically about it all. Take a slow, curious breath, and let's begin.`,
          headline: `Quantum Consciousness: An Introduction`,
          subtitle: `Real quantum science, the observer effect, and what's still being explored`,
          visual: `/ue-assets/iw/exp-iw-l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Strange World of Quantum Physics`,
          paragraphs: [
            `QUANTUM PHYSICS is the science of how the TINIEST pieces of reality behave, the particles inside atoms, like electrons and photons (particles of light). And here's the wild truth: the quantum world doesn't follow the rules of our everyday experience. Two of its strangest, fully proven findings: SUPERPOSITION (a particle can exist in multiple states or "possibilities" at once until something interacts with it, like being in two places at the same time), and ENTANGLEMENT (two particles can become connected so that measuring one INSTANTLY affects the other, no matter how far apart they are, across a room or across galaxies).`,
            `These aren't science fiction. They're measured every day in laboratories around the world, and they form the foundation of modern technology, lasers, MRI machines, computer chips, GPS, all rely on quantum physics being TRUE. Even Einstein found entanglement so strange he called it "spooky action at a distance," but the science is settled. The quantum world really is this weird. Reality, at its deepest measured level, doesn't behave the way our common sense expects. That alone is one of the most amazing scientific discoveries of the last hundred years, and it raises huge questions about what reality actually IS.`,
          ],
          image: `/ue-assets/iw/exp-iw-l19-s1-quantum.webp`,
          imageCaption: `Quantum physics: superposition and entanglement. Real, measured, foundation of modern tech.`,
          vocab: [
            {
              word: `quantum physics`,
              definition: `The science of how the tiniest pieces of reality (like electrons and photons) behave. The quantum world doesn't follow everyday rules: particles can be in multiple states at once (superposition) and connect across distance (entanglement). Real, measured, settled science.`,
              audioPrompt: `Quantum physics is the science of how the tiniest pieces of reality behave, {name}. Particles inside atoms, like electrons and photons. Two strange, fully proven findings. Superposition: a particle can exist in multiple possibilities at once, like being in two places at the same time. And entanglement: two particles can become so connected that measuring one instantly affects the other, no matter how far apart. These aren't science fiction. They're measured in laboratories every day, and they form the foundation of modern technology like lasers, MRI machines, and computer chips.`,
            },
            {
              word: `superposition`,
              definition: `A real quantum phenomenon where a particle can exist in multiple states or possibilities at the same time until something interacts with or measures it — at which point it collapses into one state. The foundation of quantum computing and one of the most mind-bending discoveries in physics.`,
              audioPrompt: `Superposition is a real quantum phenomenon where a particle can exist in multiple states at the same time, {name}. Not metaphorically, literally. Like being in two places at once. Until something interacts with or measures it, at which point it collapses into just one state. This sounds impossible but has been demonstrated in labs around the world for nearly a hundred years. Superposition is the foundation of quantum computing, which uses this property to process enormous amounts of information simultaneously. It's one of the most mind-bending discoveries.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Observer Effect`,
          paragraphs: [
            `Now here's one of the strangest, most-discussed findings in all of science: the OBSERVER EFFECT. In quantum experiments, scientists have found that the act of OBSERVING or MEASURING a quantum particle actually CHANGES its behavior. When no one is looking, an electron can exist in superposition (multiple possibilities at once). The moment it's observed or measured, it "collapses" into one specific state. This is real. It's been demonstrated in countless experiments, and it's a settled part of quantum mechanics. The famous "double-slit experiment" is the classic example, and physics students study it in every university.`,
            `Here's where it gets genuinely interesting: scientists still don't fully agree on WHY this happens. What does "observation" mean? Does it require a conscious mind, or just any physical interaction? Some physicists think observation is purely mechanical, the measuring instrument bumps the particle. Others have wondered whether CONSCIOUSNESS itself plays some role. This is one of the biggest unresolved questions in physics, and it has fascinated scientists, philosophers, and curious minds for nearly a century. What we know for sure is this: at the deepest measured level of reality, the act of observing seems to interact with what's observed. The line between mind and matter is far less clear than people once thought.`,
          ],
          image: `/ue-assets/iw/exp-iw-l19-s2-observer.webp`,
          imageCaption: `The observer effect: observing a quantum particle changes its behavior. Real, settled, still mysterious.`,
          vocab: [
            {
              word: `observer effect`,
              definition: `In quantum physics, the act of observing or measuring a particle changes its behavior. A real, well-documented finding (the famous double-slit experiment). Why this happens, and whether consciousness plays a role, is still actively explored.`,
              audioPrompt: `The observer effect is one of the strangest findings in all of science, {name}. In quantum experiments, scientists have found that the act of observing or measuring a quantum particle actually changes its behavior. When no one is looking, an electron can exist in superposition, multiple possibilities at once. The moment it's observed, it collapses into one specific state. This is real. It's been demonstrated in countless experiments. The biggest open question: does observation require a conscious mind? Scientists are still exploring.`,
            },
            {
              word: `double-slit experiment`,
              definition: `The most famous experiment in quantum physics. When particles are fired at a barrier with two slits and not observed, they create a wave-like interference pattern. When observed, they behave like particles and the pattern changes. Real, replicated thousands of times, and the clearest demonstration of the observer effect.`,
              audioPrompt: `The double-slit experiment is the most famous experiment in quantum physics, {name}. When tiny particles like electrons are fired at a barrier with two slits, and nobody observes them, they create an interference pattern on the other side, as if they went through both slits at once, like waves. The moment a detector watches which slit they go through, the interference pattern disappears and they behave like normal particles. The act of observing changed the result. This experiment has been replicated thousands of times.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where Mainstream Ends and Frontier Begins`,
          paragraphs: [
            `Now, an important honest moment. Mainstream physics doesn't currently say "your thoughts directly shape reality at the quantum level." That's a leap beyond what's settled, and any time you see someone claim that with certainty, they're going beyond the evidence. BUT, and this is the exciting part, serious scientists are actively exploring deeper questions about how consciousness and physics might connect. Sir ROGER PENROSE (a famous physicist who won the Nobel Prize) and Dr. STUART HAMEROFF have proposed a theory that consciousness might involve quantum processes inside the brain. Physicist HENRY STAPP has written extensively about how observation and mind might be more deeply linked to physical reality than mainstream physics currently accounts for.`,
            `These ideas are at the FRONTIER of science. They're not pseudoscience, and they're not settled either. They're real scientists, doing real research, asking real questions that haven't been resolved yet. The honest answer is: we don't know yet how deep the consciousness-reality connection goes. Some scientists think it's profound; others think the observer effect has nothing to do with conscious minds. Both are taking the science seriously. What's exciting is that this is one of the most active questions in physics, neuroscience, and philosophy right now. You're growing up in an era where one of humanity's biggest questions, "what is the relationship between mind and matter?", is being actively explored with the most powerful tools we've ever had. Stay curious. Stay honest. Real frontier science is more amazing than any oversimplified version.`,
          ],
          image: `/ue-assets/iw/exp-iw-l19-s3-frontier.webp`,
          imageCaption: `Frontier: serious scientists exploring how mind and quantum reality might connect. Not settled.`,
          vocab: [
            {
              word: `frontier science`,
              definition: `Real, serious scientific exploration of questions that aren't fully resolved yet. Frontier science isn't pseudoscience and isn't settled either; it's actively studied by real scientists. The consciousness-quantum connection is one of today's most exciting frontier areas.`,
              audioPrompt: `Frontier science is real, serious scientific exploration of questions that aren't fully resolved yet, {name}. It isn't pseudoscience, and it isn't settled either. It's actively studied by real scientists. The consciousness-quantum connection is one of today's most exciting frontier areas. Physicists like Roger Penrose and Henry Stapp are exploring how consciousness and quantum reality might be deeply connected. Mainstream physics doesn't yet say thoughts directly shape reality at the quantum level. But serious scientists are actively asking how deep the connection goes.`,
            },
            {
              word: `pseudoscience`,
              definition: `Claims that use the appearance or language of science without following actual scientific standards like peer review, replication, and falsifiability. Pseudoscience often sounds scientific but can't be properly tested or doesn't hold up when studied. Different from frontier science, which stays open to being wrong.`,
              audioPrompt: `Pseudoscience is when something uses the appearance of science without actually following scientific standards, {name}. Things like peer review, replication, and falsifiability. It might use scientific-sounding words, mention experiments, or cite authorities. But when you look closely, the claims can't be properly tested, don't hold up when replicated, or are designed to be impossible to disprove. Pseudoscience is different from frontier science. Frontier science asks real, testable questions and stays open to being wrong. Pseudoscience presents itself as certain while avoiding the real tests. Knowing the difference matters.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What This Means for Your Inner World`,
          paragraphs: [
            `So how does any of this connect to the practices you've been learning? Beautifully, and honestly. Even without resolving the deepest quantum-consciousness questions, here's what we DO know. Real, settled science (epigenetics, neuroplasticity, the RAS, heart-brain coherence, placebo research) already shows that mind and body and reality are far more deeply connected than people thought a generation ago. The DIRECTION the science is pointing is consistent with what wisdom traditions have taught for thousands of years: consciousness matters, inner state shapes experience, the line between "inner" and "outer" is fuzzier than we thought.`,
            `Whatever the deepest layer turns out to be (quantum, classical, something we haven't discovered yet), the practices work. Manifestation, meditation, heart coherence, identity work, gratitude, all backed by science we have today. And there may be more to it than science can yet measure. That possibility is exciting, not scary. Sage's gentle teaching: in a world full of bold claims about "quantum manifestation" and "quantum healing," your job is to stay both OPEN and CRITICAL. Open, because reality at its deepest level is genuinely strange, and consciousness genuinely matters, real scientists are studying it. Critical, because lots of people misuse quantum words to sell ideas that have nothing to do with quantum physics. Believe the science we have. Be curious about the frontier. Don't accept claims just because they sound fancy. That's how a clear, honest, science-loving conscious person walks through the world. And that person is the version of you we're growing toward.`,
          ],
          image: `/ue-assets/iw/exp-iw-l19-s4-meaning.webp`,
          imageCaption: `Stay open AND critical. Believe the science, be curious about the frontier, question fancy claims.`,
          vocab: [
            {
              word: `open and critical`,
              definition: `The healthy mindset for cutting-edge ideas, OPEN to real frontier science (because reality is genuinely amazing) AND CRITICAL of claims using fancy words like "quantum" to sell ideas not actually supported by science. Both at once.`,
              audioPrompt: `Open and critical is the healthy mindset for cutting-edge ideas, {name}. Open, because reality at its deepest level is genuinely strange, and consciousness genuinely matters. Real scientists are studying it. Critical, because lots of people misuse quantum words to sell ideas that have nothing to do with quantum physics. Believe the science we have. Be curious about the frontier. Don't accept claims just because they sound fancy. That's how a clear, honest, science-loving mind navigates a world full of quantum claims.`,
            },
            {
              word: `critical thinking`,
              definition: `The skill of evaluating claims by asking for evidence, checking sources, and distinguishing what's settled, what's frontier, and what's word salad. Critical thinking is what keeps open-minded curiosity from becoming gullibility — especially in a world full of impressive-sounding quantum claims.`,
              audioPrompt: `Critical thinking is the skill of evaluating claims by asking for evidence and checking whether they hold up, {name}. It's what keeps open-minded curiosity from becoming gullibility. When you hear a bold claim, especially one using impressive-sounding words, critical thinking asks: what's the actual evidence? Who are the scientists? Has this been replicated? Is the claim going beyond what the evidence supports? With quantum consciousness ideas everywhere online, critical thinking is one of the most valuable skills you can have. Stay curious. Stay honest. Ask better questions.`,
            },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Critical-thinking time, {name}. Here are four claims using quantum language. Classify each: SETTLED QUANTUM SCIENCE (proven, mainstream, demonstrated in labs), FRONTIER EXPLORATION (real scientists exploring real but unresolved questions), or QUANTUM WORD SALAD (using "quantum" to sound fancy for ideas that have nothing to do with quantum physics)?\n\nOne is the trickiest and most important one to spot.`,
          options: [
            { id: `settled`,  label: `Settled Quantum Science`, color: `#34D399`, description: `Proven, demonstrated in labs, taught in every physics course, mainstream science.` },
            { id: `frontier`, label: `Frontier Exploration`,    color: `#A78BFA`, description: `Real scientists exploring real but unresolved questions. Not settled, not pseudoscience.` },
            { id: `salad`,    label: `Quantum Word Salad`,      color: `#F87171`, description: `Using "quantum" to sound fancy for ideas with no actual connection to quantum physics.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Claim #1`,
              clues: [
                { text: `"Electrons can exist in multiple states at the same time until measured (superposition), and the act of measurement changes their behavior."` },
                { text: `This is taught in every physics class. It's been demonstrated in the double-slit experiment for nearly 100 years.` },
                { text: `Modern computer chips, lasers, and MRI machines rely on it being true.` },
              ],
              correctAnswer: `settled`,
              realWorldExample: `Superposition and the observer effect are settled physics.`,
              explanation: `This is rock-solid mainstream quantum mechanics, demonstrated millions of times, foundational to modern technology. Pure settled quantum science. The strangeness is real, but the science is settled.`,
            },
            {
              id: `case-2`,
              caseTitle: `Claim #2`,
              clues: [
                { text: `"Drink this special water and the quantum vibrations will instantly heal whatever's wrong with you."` },
                { text: `The seller can't explain what "quantum vibrations" mean in actual physics terms.` },
                { text: `Quantum physics has nothing to do with water "vibrations" curing illnesses.` },
              ],
              correctAnswer: `salad`,
              realWorldExample: `"Quantum vibrations" in water has no connection to actual quantum physics.`,
              explanation: `This is using the word "quantum" to sound impressive while making claims that have nothing to do with actual quantum physics. Pure quantum word salad. Real quantum science doesn't say anything about water having healing vibrations. Be skeptical anytime "quantum" is used to sell something without a clear explanation of what real quantum mechanism is involved.`,
            },
            {
              id: `case-3`,
              caseTitle: `Claim #3`,
              clues: [
                { text: `"Roger Penrose and Stuart Hameroff have proposed that consciousness might involve quantum processes happening inside brain cells."` },
                { text: `They're real respected scientists (Penrose won a Nobel Prize). They've published papers on the theory.` },
                { text: `But other scientists disagree, and the theory isn't proven or settled.` },
              ],
              correctAnswer: `frontier`,
              realWorldExample: `Penrose-Hameroff is real scientific exploration of an unresolved question.`,
              explanation: `Penrose-Hameroff is a real, serious theory by respected scientists, but it's actively debated and not settled. Pure frontier exploration. It's not pseudoscience (real scientists, real research, real journals), and it's not settled (other scientists disagree). It's exactly what frontier science looks like: real people honestly exploring unresolved questions.`,
            },
            {
              id: `case-4`,
              caseTitle: `Claim #4 — The Trickiest One`,
              clues: [
                { text: `An online influencer says: "Quantum physics PROVES that your thoughts create your reality. Just visualize what you want and the universe will deliver it."` },
                { text: `They reference real quantum terms like "observer effect" and "superposition" to sound scientific.` },
                { text: `But mainstream physics has never proven that thoughts directly create reality at the quantum level.` },
              ],
              correctAnswer: `salad`,
              realWorldExample: `Real quantum terms misused to sound scientific is still word salad.`,
              explanation: `Trickiest of all, {name}! The influencer uses REAL quantum terms (observer effect, superposition), so you might call this frontier exploration. But look closely. They're making a CLAIM ("quantum physics PROVES that thoughts create reality") that goes far beyond what mainstream physics actually says. Real frontier scientists are CAREFUL, they say "may be," "might be," "we're exploring." When someone uses real quantum words to make oversimplified, certain claims, they're misusing the science to sound impressive. Pure quantum word salad in disguise (the sneakier version). Lesson: real terms can still be used dishonestly. The test isn't "did they say quantum words" but "are the claims actually supported by the science?" The honest version: "Real science shows thought and reality are more connected than we used to think, and scientists are exploring how deep this goes." That's accurate. "Quantum physics PROVES thoughts create reality" is not. This is one of the most important critical-thinking skills of your generation: spotting the difference between honest frontier curiosity and quantum-jargon overclaiming. It's everywhere online. Now you can see it.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is QUANTUM PHYSICS?`,
              options: [
                `A type of magic`,
                `The science of how the TINIEST pieces of reality (electrons, photons) behave — it doesn't follow everyday rules`,
                `Just a theory with no evidence`,
                `Pretend science`,
              ],
              correctIndex: 1,
              explanation: `Quantum physics is the real, settled science of how the tiniest pieces of reality behave. The quantum world doesn't follow everyday rules. It's been measured for nearly a hundred years and is the foundation of modern technology: lasers, MRI, computer chips, GPS.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What is SUPERPOSITION?`,
              options: [
                `A wrestling move`,
                `A real quantum finding: a particle can exist in multiple states or possibilities AT ONCE, until something interacts with it`,
                `Only science fiction`,
                `An old idea no longer accepted`,
              ],
              correctIndex: 1,
              explanation: `Superposition is a real, measured quantum phenomenon: a particle can exist in multiple states at once (like being in two places) until something interacts with it. It sounds impossible but is fully demonstrated in physics labs around the world.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `What is ENTANGLEMENT?`,
              options: [
                `Getting your hair tangled`,
                `Two particles becoming connected so that measuring one INSTANTLY affects the other — no matter how far apart`,
                `Imagination only`,
                `Just a metaphor`,
              ],
              correctIndex: 1,
              explanation: `Entanglement is real: two particles can become so connected that measuring one instantly affects the other, even across galaxies. Even Einstein called it "spooky action at a distance," but the science is settled. It's measured constantly in labs.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What is the OBSERVER EFFECT?`,
              options: [
                `Looking at things makes them disappear`,
                `The act of observing or measuring a quantum particle CHANGES its behavior — proven in the famous double-slit experiment`,
                `Only happens in movies`,
                `Nobody understands it at all`,
              ],
              correctIndex: 1,
              explanation: `The observer effect is real: observing or measuring a quantum particle changes its behavior. When unobserved, particles can be in superposition; the moment they're observed, they "collapse" into one state. Demonstrated in the double-slit experiment, taught in every physics course.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: Mainstream physics has PROVEN that your thoughts directly shape reality at the quantum level.`,
              correctAnswer: false,
              explanation: `False. That's a leap beyond what mainstream physics has shown. Serious scientists are exploring how consciousness and quantum reality might connect, but this is FRONTIER science, not settled. Anyone claiming quantum physics "proves" thoughts create reality is going beyond the actual evidence.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `What is FRONTIER SCIENCE?`,
              options: [
                `Pseudoscience`,
                `Real, serious science exploring questions that aren't fully resolved yet (like Penrose-Hameroff on consciousness)`,
                `Make-believe`,
                `Settled facts`,
              ],
              correctIndex: 1,
              explanation: `Frontier science is real, serious scientific exploration of unresolved questions. It's not pseudoscience and it's not settled. Examples: Penrose and Hameroff exploring whether consciousness involves quantum processes. Active research, real scientists, real journals, no consensus yet. That's frontier.` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `What is QUANTUM WORD SALAD?`,
              options: [
                `A type of food`,
                `Using "quantum" to sound fancy for ideas that have nothing to do with actual quantum physics — common in marketing`,
                `Real science`,
                `Just an old saying`,
              ],
              correctIndex: 1,
              explanation: `"Quantum word salad" is when someone uses quantum terms to sound impressive while making claims that aren't actually supported by quantum physics. Very common in product marketing, influencer claims, and pop spirituality. Recognizing it is one of the most important critical-thinking skills of your generation.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `What's the right way to think about cutting-edge ideas like quantum consciousness?`,
              options: [
                `Believe everything that sounds fancy`,
                `Stay both OPEN (real science is amazing and frontier work is real) AND CRITICAL (question claims that go beyond what science actually shows)`,
                `Reject everything`,
                `Don't think about it`,
              ],
              correctIndex: 1,
              explanation: `Open AND critical, both at once. Open, because reality is genuinely strange and consciousness matters. Critical, because lots of people misuse "quantum" to sell ideas not supported by science. Believe what science actually shows, stay curious about frontier work, question claims that overclaim. That's how a clear conscious person walks through a world full of fancy claims.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Take a slow, wondering breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Which is more amazing to you: that particles can be in multiple places at once, or that observing them changes their behavior? Why?` },
            { id: `r2`, text: `Have you ever seen "quantum" used to sell something or sound fancy when it didn't seem to actually mean anything? What did you think?` },
            { id: `r3`, text: `It's possible to be BOTH open and critical at the same time. How does that mindset feel different from "believe everything" or "reject everything"?` },
            { id: `r4`, text: `If scientists eventually showed that consciousness really does connect with reality at a deep level, how might that change your view of yourself?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `The science of quantum physics is one of the great achievements of the last hundred years. It's how we have computers, lasers, MRIs, GPS, and many medicines. And the question of how consciousness connects to physical reality is one of the biggest open questions of our time, being actively explored by serious scientists in physics, neuroscience, and philosophy. You're growing up in an extraordinary era of discovery. Sage's note: the world will keep getting more saturated with "quantum" claims, some real, some honest frontier work, some marketing nonsense. The skill you've practiced today, staying open AND critical, recognizing settled vs frontier vs word salad, is one of the most useful thinking skills you'll have for your whole life. Stay curious about the genuine mystery. Stay clear-eyed about overclaiming. Both, together, is how you find truth in a world full of fascinating possibility and noisy claims.`,
          familyAdventure: `Family Quantum Critical-Thinking Game. As a family, spend 15 minutes online (or in advertisements, or scrolling social media) looking for things using the word "quantum." For each one you find, discuss together: is this settled quantum science, frontier exploration, or quantum word salad? Why? You'll probably find lots of word salad and that's exactly the point. You're building the critical-thinking muscle to navigate a world full of "quantum" marketing. Bonus: if you find something that seems like genuine frontier work, look it up together and see who the scientists are. The skill of distinguishing real science from impressive-sounding claims is one of the most valuable things a family can practice together.`,
          creativePrompt: {
            intro: `Write about what you find most mind-blowing in quantum physics, and how you'd explain "stay open AND critical" to someone younger than you.`,
            floor: `Write at least 5 sentences. Pick one quantum idea that fascinates you, and explain the open-and-critical mindset in your own words.`,
            stretch: `Write 8 to 10 sentences. Explore why quantum physics is amazing, give an example of word salad you've seen, and explain how to think about it all.`,
            open: `Write as much as you want. Write a full piece exploring what you find most mind-blowing about quantum physics (superposition, entanglement, the observer effect), AND how to think critically about claims that use quantum words. Imagine you're explaining this to a younger sibling or friend who's about to see all kinds of "quantum" claims online and in advertising. Help them see why real quantum science is genuinely amazing (and stranger than fiction), how to recognize honest frontier exploration (real scientists, careful language, unresolved questions), and how to spot quantum word salad (impressive words, overclaiming, no real mechanism). Then reflect on why the open-and-critical mindset matters for your whole life. Make it engaging, clear, and true.`,
            frames: [
              `The most mind-blowing thing I learned about quantum physics is ___.`,
              `Real settled quantum science is amazing because ___.`,
              `Frontier science (still being explored) looks like ___, the careful language gives it away.`,
              `Quantum word salad looks like ___, and the giveaway is ___.`,
              `The reason staying open AND critical matters is ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Beautiful, mind-stretching work, {name}. You now understand real quantum physics (superposition, entanglement, the observer effect, all settled science), the frontier question of how consciousness might connect to physical reality (Penrose, Hameroff, Stapp), and how to think critically about quantum claims you'll see everywhere. Stay open AND critical, the most powerful mindset for cutting-edge ideas. Next is our final lesson, the capstone of this whole subject. We'll bring everything together and design your inner world on purpose. DESIGNING YOUR INNER WORLD. I'll see you there for the journey home. — Sage.`,
          badge: `quantum-curious`,
          badgeName: `Quantum Curious`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
