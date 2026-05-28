// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L05 — Evolution: Life Changes Over Time
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS4 — evidence of common ancestry; natural selection
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the development of life on Earth)
// SCOPE: 4 concepts — what evolution is, natural selection, the evidence,
//        common ancestry and the tree of life
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-05`,
      title: `Evolution: Life Changes Over Time`,
      duration: 18,
      xpReward: 75,
      badge: `evolution-explorer`,
      badgeName: `Evolution Explorer`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Last time we explored DNA, the code of life. Today we explore how that code, over billions of years, produced the staggering variety of living things on Earth: from bacteria to butterflies to blue whales to you. The process is called EVOLUTION, and it's one of the most powerful and well-supported ideas in all of science. It explains why living things fit their environments so well, and why all life is connected. By the end of today, you'll understand how evolution actually works. Let's begin.`,
          headline: `Evolution`,
          subtitle: `How life changes and diversifies over billions of years`,
          visual: `/ue-assets/cosmos/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Evolution Is`,
          paragraphs: [
            `EVOLUTION is the process by which living things CHANGE over many generations. Not within a single lifetime, but across hundreds, thousands, or millions of generations. Over vast stretches of time, populations of living things gradually change, and new kinds of organisms arise from earlier ones. This is how the incredible variety of life on Earth came to be, all descended and changed from earlier forms over billions of years.`,
            `It's important to be clear about the timescale. Evolution is usually extremely SLOW, happening over time periods far longer than a human life. You won't watch a fish turn into a frog. Instead, tiny changes accumulate generation after generation, until, over enormous spans of time, the descendants look very different from their distant ancestors. The first life appeared on Earth roughly 3.8 billion years ago. Everything alive today, including you, is descended from those earliest living things, changed and reshaped across an almost unimaginable amount of time.`,
          ],
          image: `/ue-assets/cosmos/l05-s1-what-is.webp`,
          imageCaption: `Evolution: living things change across many generations over vast spans of time.`,
          vocab: [
            { word: `evolution`,
              definition: `The process by which living things change over many generations. Over vast spans of time, populations gradually change and new kinds of organisms arise from earlier ones. How all of Earth's variety of life came to be.`,
              audioPrompt: `Evolution is the process by which living things change over many generations, {name}. Not within a single lifetime, but across hundreds, thousands, or millions of generations. Over vast stretches of time, populations of living things gradually change, and new kinds of organisms arise from earlier ones. Evolution is usually extremely slow, happening over time periods far longer than a human life. The first life appeared roughly 3.8 billion years ago, and everything alive today, including you, descended from those earliest living things.` },
            { word: `adaptation`,
              definition: `A trait that helps a living thing survive and reproduce in its environment, developed through natural selection over many generations. Examples include a cactus's water-storing stem and a chameleon's color-changing ability.`,
              audioPrompt: `An adaptation is a trait that helps a living thing survive and reproduce in its environment, {name}. Adaptations develop through natural selection over many generations. If a trait helps an organism survive better, it produces more offspring and the trait becomes more common. Over time, populations become better fitted to their environment through accumulated adaptations. Examples include a chameleon's ability to change color, a cactus's thick stem for storing water, and a bird's beak shaped perfectly for the food it eats.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Natural Selection: The Engine of Evolution`,
          paragraphs: [
            `How does evolution actually happen? The main mechanism is called NATURAL SELECTION, an idea developed by Charles Darwin in the 1800s. It works like this. First, living things VARY: individuals in any population are slightly different from each other (you can see this even among people, or among dogs in a litter). Second, more offspring are born than can survive, so there's competition to survive and reproduce. Third, individuals with traits that help them survive in their environment are more likely to live and have offspring.`,
            `Here's the key: those helpful traits get passed down to the next generation through DNA. Over many generations, helpful traits become more common, and unhelpful ones fade away. The environment "selects" which traits succeed, which is why it's called natural selection. A classic example: in a population of beetles, if green beetles blend into leaves and avoid being eaten while brown ones get spotted and eaten, more green beetles survive to reproduce. Over generations, the population becomes mostly green. No beetle "tried" to become green. The ones that happened to be green simply survived better. That's natural selection: the environment shaping life over time.`,
          ],
          image: `/ue-assets/cosmos/l05-s2-natural-selection.webp`,
          imageCaption: `Variation, competition, survival of helpful traits, inheritance. That's natural selection.`,
          vocab: [
            { word: `natural selection`,
              definition: `The main mechanism of evolution. Individuals with traits that help them survive in their environment are more likely to live and reproduce, passing those traits on. Over generations, helpful traits become more common.`,
              audioPrompt: `Natural selection is the main mechanism of evolution, {name}. Charles Darwin developed the idea in the 1800s. It works like this. Living things vary, so individuals are slightly different from each other. More offspring are born than can survive, so there's competition. Individuals with traits that help them survive are more likely to live and have offspring. Those helpful traits get passed down through DNA. Over many generations, helpful traits become more common and unhelpful ones fade. The environment selects which traits succeed, which is why it's called natural selection.` },
            { word: `variation`,
              definition: `The differences that exist between individuals in any population. Variation comes from small changes in DNA and shuffling of genes between parents. It's the raw material that natural selection acts on.`,
              audioPrompt: `Variation means that individuals in any population are slightly different from each other, {name}. No two organisms are exactly alike. These differences come from small changes in DNA and from shuffling of genes between parents. Variation is the raw material that natural selection works on. If everyone in a population were identical, there would be nothing for selection to act on. The differences that already exist mean some individuals naturally fit their environment better, and those are more likely to survive and reproduce.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Evidence for Evolution`,
          paragraphs: [
            `Evolution is supported by enormous evidence from many independent fields of science. FOSSILS: the preserved remains of ancient living things, found in layers of rock, show a clear record of how life changed over time. Older rock layers contain simpler life forms; newer layers show increasingly complex and varied life. We can even find fossils showing transitions, like ancient creatures with features between fish and land animals, or between dinosaurs and birds.`,
            `DNA provides even more powerful evidence. Remember from last lesson that all living things share the same genetic code. By comparing the DNA of different species, scientists can measure how closely related they are. Species that are more similar in DNA share a more recent common ancestor. Humans and chimpanzees share about 98-99% of their DNA, showing a close relationship. We also see evidence in anatomy: the bones in a human arm, a whale's flipper, a bat's wing, and a cat's leg are all arranged in the same basic pattern, because they all descended from a common ancestor. Fossils, DNA, and anatomy all tell the same story. That agreement is why evolution is one of the most strongly supported ideas in science.`,
          ],
          image: `/ue-assets/cosmos/l05-s3-evidence.webp`,
          imageCaption: `Fossils, DNA, and anatomy all tell the same story of life's connected history.`,
          vocab: [
            { word: `fossil`,
              definition: `The preserved remains or traces of ancient living things, usually found in rock. Fossils show how life has changed over millions of years, providing key evidence for evolution.`,
              audioPrompt: `A fossil is the preserved remains or traces of an ancient living thing, {name}. Usually found in layers of rock. Fossils are like snapshots of life from the deep past. Older rock layers contain simpler life forms, while newer layers show increasingly complex and varied life. This record shows how life changed over millions of years. Scientists have even found transitional fossils, like ancient creatures with features between fish and land animals, or between dinosaurs and birds. They're key evidence for evolution, showing life's history written in stone.` },
            { word: `transitional fossil`,
              definition: `A fossil showing features of both an older organism and a more evolved one, capturing an organism at an intermediate stage of evolution. Powerful evidence that evolution occurred.`,
              audioPrompt: `A transitional fossil is a fossil that shows features of both an older organism and a more evolved one, {name}. They capture organisms at intermediate stages of evolution. A famous example is Tiktaalik, a fish with fin-like legs showing the transition from water to land. Another is Archaeopteryx, a creature with features of both dinosaurs and birds. Transitional fossils are powerful evidence for evolution because they show the in-between forms the theory predicts should exist.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common Ancestry: The Tree of Life`,
          paragraphs: [
            `One of the most beautiful ideas in all of science is COMMON ANCESTRY: the conclusion that all living things on Earth are RELATED, descended from shared ancestors. Just as you and your cousins share grandparents, all species share ancestors if you go back far enough. Humans and chimps share an ancestor from a few million years ago. Humans and fish share an ancestor from hundreds of millions of years ago. Go back far enough, and humans, oak trees, mushrooms, and bacteria all share a common ancestor: the earliest life on Earth.`,
            `Scientists picture this as the "TREE OF LIFE," with all species as branches growing from a single trunk. You are one tiny twig on an immense, ancient tree that connects you to every other living thing. This isn't just poetic, it's what the evidence shows. Nova's teaching: evolution reveals that life isn't a collection of separate, unrelated things. It's one vast, connected family, billions of years old, all sharing the same code, all descended from the same origins. When you look at any living thing, a bird, a tree, a beetle, you're looking at a distant relative. That connection is real, and it's one of the deepest truths science has uncovered about life.`,
          ],
          image: `/ue-assets/cosmos/l05-s4-tree-of-life.webp`,
          imageCaption: `The tree of life: every living thing is a branch, all connected to one ancient trunk.`,
          vocab: [
            { word: `common ancestor`,
              definition: `An ancestor shared by two or more different species. All living things on Earth trace back to shared common ancestors, which is why all life is related, forming a single "tree of life."`,
              audioPrompt: `A common ancestor is an ancestor shared by two or more different species, {name}. Just as you and your cousins share grandparents, all species share ancestors if you go back far enough. Humans and chimps share an ancestor from a few million years ago. Humans and fish share one from hundreds of millions of years ago. Scientists picture this as the tree of life, with every species as a branch from a single trunk. You're one tiny twig on that ancient, connected tree.` },
            { word: `tree of life`,
              definition: `A scientific picture of how all living things on Earth are related through evolution. Every species is a branch, and all branches connect back to a single trunk: the earliest life on Earth.`,
              audioPrompt: `The tree of life is a scientific picture of how all living things on Earth are related through evolution, {name}. Imagine a tree where every species is a branch or twig, and all branches connect back to a single trunk: the earliest life on Earth. Species that share a more recent common ancestor are closer branches. The tree of life shows that all life is one connected family, billions of years old. Scientists build it by comparing DNA, fossils, and anatomy from different species.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to put life's history in order, {name}. Here are six major stages in the development of life on Earth, scrambled up. Use the arrows to arrange them from EARLIEST (top) to MOST RECENT (bottom). Think about what had to come before what.`,
          items: [
            { id: `step-cells`,   label: `Simple single-celled life appears in the oceans`,            position: 1 },
            { id: `step-photo`,   label: `Photosynthesis begins, slowly filling the air with oxygen`,  position: 2 },
            { id: `step-multi`,   label: `The first multicellular living things develop`,              position: 3 },
            { id: `step-land`,    label: `Plants and animals move from the sea onto land`,             position: 4 },
            { id: `step-dino`,    label: `Dinosaurs rise, dominate, and later go extinct`,             position: 5 },
            { id: `step-mammals`, label: `Mammals spread, and eventually humans appear`,               position: 6 },
          ],
          completionMessage: `Beautifully done, {name}! That's the grand sequence of life on Earth: from the first single cells, through the oxygen revolution, to multicellular life, the move onto land, the age of dinosaurs, and finally mammals and us. Around 3.8 billion years of change, and you're the newest branch on the tree.`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is EVOLUTION?`,
              options: [
                `Animals changing during their own lifetime`,
                `The process by which living things change over many generations, over vast spans of time`,
                `Animals choosing to change`,
                `A sudden transformation`,
              ],
              correctIndex: 1,
              explanation: `Evolution is change across many generations, not within a single lifetime. Over hundreds, thousands, or millions of generations, populations gradually change and new kinds of organisms arise. It's how Earth's variety of life came to be.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is NATURAL SELECTION?`,
              options: [
                `Animals picking their traits`,
                `Individuals with helpful traits survive and reproduce more, passing those traits on, so helpful traits become more common over generations`,
                `The biggest animal always wins`,
                `Random change with no pattern`,
              ],
              correctIndex: 1,
              explanation: `Natural selection is evolution's main mechanism, developed by Darwin. Living things vary, more are born than survive, and those with traits suited to their environment survive and reproduce more. Their helpful traits get passed down, becoming more common over generations.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `In the beetle example, why did the population become mostly green over time?`,
              options: [
                `The beetles decided to turn green`,
                `Green beetles blended in and survived better, so more of them reproduced and passed on green traits`,
                `Brown beetles turned green`,
                `It was random luck`,
              ],
              correctIndex: 1,
              explanation: `No beetle "tried" to become green. Green beetles happened to blend into leaves and avoid being eaten, so more survived to reproduce and pass on green traits. Over generations, green became common. That's natural selection: the environment shaping which traits succeed.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What evidence supports evolution?`,
              options: [
                `Just one scientist's opinion`,
                `Fossils, DNA comparisons, AND anatomy — multiple independent fields that all tell the same story`,
                `Only fossils`,
                `Only DNA`,
              ],
              correctIndex: 1,
              explanation: `Evolution is supported by fossils (the record in the rocks), DNA (how related species are), and anatomy (shared body patterns like the bones in arms, flippers, and wings). Multiple independent fields all agreeing is what makes evolution so strongly supported.` },

            { id: `l05-q5`, format: `true-false`,
              question: `True or false: Humans and chimpanzees share about 98-99% of their DNA, showing a close evolutionary relationship.`,
              correctAnswer: true,
              explanation: `True. Humans and chimps share about 98-99% of their DNA, reflecting a common ancestor from a few million years ago. Comparing DNA lets scientists measure how closely related any two species are. More similar DNA means a more recent shared ancestor.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `What is a FOSSIL, and why does it matter for evolution?`,
              options: [
                `A living animal; it doesn't matter`,
                `The preserved remains of ancient life in rock; fossils show how life changed over millions of years`,
                `A type of rock with no life in it`,
                `A modern bone`,
              ],
              correctIndex: 1,
              explanation: `Fossils are the preserved remains of ancient living things. Older rock layers hold simpler life; newer layers show more complex, varied life. Fossils even capture transitions, like creatures between fish and land animals. They're a key record of life's history.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `What is COMMON ANCESTRY?`,
              options: [
                `All animals are exactly the same`,
                `The conclusion that all living things are related, descended from shared ancestors, forming one "tree of life"`,
                `Only similar animals are related`,
                `Humans came from chimps`,
              ],
              correctIndex: 1,
              explanation: `Common ancestry means all life on Earth is related through shared ancestors. Go back far enough and humans, trees, mushrooms, and bacteria all share a common ancestor. Scientists picture this as the tree of life, with every species a branch from one trunk.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `What does evolution reveal about how living things relate to each other?`,
              options: [
                `They're all separate and unrelated`,
                `All life is one vast, connected family, billions of years old, sharing the same code and origins`,
                `Only animals are related`,
                `Nothing is related`,
              ],
              correctIndex: 1,
              explanation: `Evolution shows that life isn't a collection of separate things. It's one connected family, billions of years old, all sharing the same DNA code and descended from the same origins. Every living thing you see is a distant relative. That connection is real.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Evolution shows that every living thing is your distant relative. Next time you see an animal, a tree, or even a bug, does that change how you see it?` },
            { id: `r2`, text: `Natural selection works without anyone planning it: helpful traits simply survive better. What's surprising to you about how something so complex can happen with no one in charge?` },
            { id: `r3`, text: `Fossils, DNA, and anatomy all independently point to evolution. Why do you think it matters when different kinds of evidence agree?` },
            { id: `r4`, text: `You are the newest twig on a 3.8-billion-year-old tree of life. How does it feel to be part of such an ancient, unbroken story?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Evolution isn't just history. It's happening now and shapes daily life. Bacteria evolve resistance to antibiotics, which is why doctors worry about overusing them. Viruses evolve, which is why flu vaccines are updated each year. Farmers and breeders use the principles of selection to improve crops and animals. Understanding evolution helps us fight disease, grow food, and protect endangered species. Nova's note: evolution also gives us a profound sense of belonging. You're not separate from nature. You're part of an unbroken chain of life stretching back billions of years, connected to every other living thing on Earth.`,
          familyAdventure: `Family Tree of Life Walk. Go outside as a family and find five different living things (a tree, a bird, an insect, grass, maybe a pet or a person). For each one, remember: this is a distant relative of yours. You all share a common ancestor if you go back far enough. Talk about which ones seem more closely related to each other and why. You're seeing the tree of life all around you, in your own neighborhood.`,
          creativePrompt: {
            intro: `Imagine you could tell the story of one trait evolving over many generations (like a giraffe's neck, a bird's wing, or a beetle's color). Write that story.`,
            floor: `Write at least 5 sentences. Describe the trait, why it helped survival, and how it became more common over generations.`,
            stretch: `Write 8 to 10 sentences. Show variation in the population, why the trait helped survival, how it was passed down, and how the population changed over many generations.`,
            open: `Write as much as you want. Tell a full evolutionary story. Start with a population that varies, show the survival challenge in their environment, explain why a certain trait helped some individuals survive and reproduce, how that trait passed down through DNA, and how the whole population gradually changed over many, many generations. Make the slow power of natural selection come alive.`,
            frames: [
              `Long ago, there was a population of ___ that varied: some had ___ and some didn't.`,
              `In their environment, the challenge was ___.`,
              `Individuals with ___ survived better because ___.`,
              `They passed this trait to their offspring through their DNA.`,
              `Over many generations, ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Outstanding work, {name}. You can now explain what evolution is, how natural selection drives it, the evidence from fossils, DNA, and anatomy, and the beautiful idea of common ancestry and the tree of life. You also put 3.8 billion years of life's history in order. Next lesson: we explore the building blocks that make up everything, living and non-living. THE PERIODIC TABLE. See you there. — Nova.`,
          badge: `evolution-explorer`,
          badgeName: `Evolution Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
