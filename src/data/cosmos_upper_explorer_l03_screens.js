// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L03 — The Big Bang: How Did Everything Begin?
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS1 (extension) — origin and history of the universe
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the epochs of the early universe)
// SCOPE: 4 concepts — what the Big Bang was, the timeline of the early
//        universe, the evidence for it, what it means and doesn't mean
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-03`,
      title: `The Big Bang: How Did Everything Begin?`,
      duration: 18,
      xpReward: 75,
      badge: `origin-explorer`,
      badgeName: `Origin Explorer`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we ask the biggest question there is: how did EVERYTHING begin? Where did the universe come from? The leading scientific answer is called the BIG BANG, and it's one of the most remarkable discoveries in human history. About 13.8 billion years ago, the entire universe (all of space, all of matter, all of energy) began from something unimaginably small and hot, then expanded into everything we see today. By the end of this lesson, you'll understand what the Big Bang really was, and what it wasn't. Let's begin.`,
          headline: `The Big Bang`,
          subtitle: `How the entire universe began, 13.8 billion years ago`,
          visual: `/ue-assets/cosmos/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Big Bang Actually Was`,
          paragraphs: [
            `The BIG BANG is the scientific theory of how the universe began. About 13.8 billion years ago, everything that exists (all of space, matter, and energy) was packed into a point smaller than an atom, incredibly hot and dense. Then it began to EXPAND, rapidly. Not exploding OUT into empty space, but space itself stretching and growing larger. As it expanded, it cooled, and over billions of years it formed the particles, atoms, stars, galaxies, and planets we see today.`,
            `One common misunderstanding: the Big Bang was NOT an explosion in space, like a bomb going off somewhere. There was no "somewhere" for it to happen in, because space itself didn't exist yet. Instead, space, time, matter, and energy all began TOGETHER in that moment. The Big Bang happened everywhere at once, because everywhere was the same tiny point. And the universe is STILL expanding today. Galaxies are moving away from each other right now. The name "Big Bang" was actually invented by a scientist who didn't believe the theory and meant it as a joke. The name stuck.`,
          ],
          image: `/ue-assets/cosmos/l03-s1-what-was.webp`,
          imageCaption: `Everything began from a tiny, hot point 13.8 billion years ago, then expanded.`,
          vocab: [
            { word: `Big Bang`,
              definition: `The scientific theory that the universe began about 13.8 billion years ago from an incredibly hot, dense point, then expanded into everything we see today. Not an explosion in space — space itself began and expanded.`,
              audioPrompt: `The Big Bang is the scientific theory of how the universe began, {name}. About 13.8 billion years ago, everything that exists was packed into a point smaller than an atom, incredibly hot and dense. Then it began to expand rapidly. Not exploding out into empty space, but space itself stretching and growing larger. As it expanded and cooled, it formed particles, atoms, stars, galaxies, and planets. The Big Bang wasn't an explosion in existing space — space, time, matter, and energy all began together.` },
            { word: `inflation`,
              definition: `The period of extremely rapid expansion in the first tiny fraction of a second after the Big Bang, during which the universe grew to an enormous size much faster than the speed of light.`,
              audioPrompt: `Inflation is the period of extremely rapid expansion that happened in the first tiny fraction of a second after the Big Bang, {name}. During inflation, the universe expanded much faster than the speed of light. Space itself can expand faster than light, even though nothing within space can travel that fast. Inflation happened so quickly that we can't directly observe it. But the math fits what we observe today, and it helps explain why the universe looks so uniform in every direction.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Timeline of the Early Universe`,
          paragraphs: [
            `The early universe changed incredibly fast. In the FIRST tiny fraction of a second, the universe went through "inflation," expanding faster than light to an enormous size (space can expand faster than light, even though objects within space cannot move that fast). In the first few minutes, the basic particles formed: first quarks, then protons and neutrons, the building blocks of atoms. The universe was still far too hot for complete atoms to exist.`,
            `About 380,000 years after the Big Bang, the universe finally cooled enough for the first ATOMS to form, mostly hydrogen and helium. Before this, the universe was a glowing fog. After it, light could finally travel freely, and the universe became transparent. Then came a long dark period until, around 100 to 200 million years later, gravity pulled hydrogen and helium together until the FIRST STARS ignited. Stars gathered into the first GALAXIES. Inside stars, heavier elements were forged. Much later, about 9 billion years after the Big Bang, our own Sun and Earth formed. And here we are, 13.8 billion years in.`,
          ],
          image: `/ue-assets/cosmos/l03-s2-timeline.webp`,
          imageCaption: `From particles to atoms to stars to galaxies to us. A 13.8-billion-year story.`,
          vocab: [
            { word: `expansion`,
              definition: `The ongoing stretching and growing of space itself, started by the Big Bang. The universe is still expanding today, with galaxies moving away from each other. Space gets larger; galaxies don't move "through" it so much as ride along.`,
              audioPrompt: `Expansion is the ongoing stretching and growing of space itself, {name}. It began with the Big Bang and continues today. Galaxies are moving away from each other right now, not because they're flying through space, but because the space between them is stretching. Imagine dots drawn on a balloon. As you blow it up, the dots move apart because the balloon's surface is stretching. Scientists discovered the universe is expanding by noticing that distant galaxies are moving away from us, and the farther they are, the faster they go.` },
            { word: `Hubble's Law`,
              definition: `The observation that galaxies are moving away from us, and the farther they are, the faster they recede. Discovered by Edwin Hubble in the 1920s, it was the first strong evidence that the universe is expanding.`,
              audioPrompt: `Hubble's Law is the observation that galaxies are moving away from us, and the farther away they are, the faster they recede, {name}. Edwin Hubble discovered this in the 1920s by studying light from distant galaxies. It was the first strong evidence that the universe is expanding. Running that expansion backward in time leads to the Big Bang. Hubble's Law is one of the most important discoveries in astronomy and the foundation of modern cosmology.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How We Know: The Evidence`,
          paragraphs: [
            `The Big Bang isn't just a story. It's a theory supported by powerful EVIDENCE. First, in the 1920s, astronomer Edwin Hubble discovered that distant galaxies are all moving AWAY from us, and the farther away they are, the faster they're moving. This is exactly what you'd expect if the whole universe is expanding from a single beginning. Run the expansion backward in your mind, and everything comes together at one point: the Big Bang.`,
            `The second major piece of evidence is the COSMIC MICROWAVE BACKGROUND. In 1964, scientists accidentally discovered a faint glow of microwave energy coming from every direction in space. This is the leftover heat from the early universe, an "afterglow" of the Big Bang itself, still detectable 13.8 billion years later. Its existence was predicted by Big Bang theory before it was found. Third, the actual amounts of hydrogen and helium in the universe match exactly what Big Bang theory predicts. Three independent lines of evidence, all pointing to the same conclusion. That's how science builds confidence: not one clue, but many that agree.`,
          ],
          image: `/ue-assets/cosmos/l03-s3-evidence.webp`,
          imageCaption: `Expanding galaxies, the cosmic afterglow, and element amounts: three clues that agree.`,
          vocab: [
            { word: `cosmic microwave background`,
              definition: `The faint afterglow of the Big Bang, leftover heat detectable from every direction in space, 13.8 billion years later. One of the strongest pieces of evidence that the Big Bang really happened.`,
              audioPrompt: `The cosmic microwave background is the faint afterglow of the Big Bang, {name}. It's leftover heat from the early universe, detectable as a faint glow of microwave energy coming from every direction in space. Scientists discovered it by accident in 1964. Its existence had been predicted by Big Bang theory beforehand, which made it powerful evidence. Think of it as the universe's baby photo, the oldest light we can detect, still reaching us 13.8 billion years later.` },
            { word: `evidence`,
              definition: `Information that supports or tests a scientific claim. Good science relies on multiple independent sources of evidence that all point the same way. The Big Bang has three independent lines of evidence that agree.`,
              audioPrompt: `Evidence is information that supports or tests a scientific claim, {name}. Good science doesn't rely on just one piece of evidence. It looks for multiple independent sources that all point the same way. The Big Bang is supported by three independent lines: galaxies moving apart, the cosmic microwave background, and the measured amounts of hydrogen and helium. When several different kinds of evidence all agree, scientists can be much more confident in a conclusion. That agreement is the heart of the scientific method.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What the Big Bang Does and Doesn't Tell Us`,
          paragraphs: [
            `The Big Bang theory explains how the universe DEVELOPED from a tiny, hot beginning into what we see now. The evidence for this is very strong. But there are honest limits to what science currently knows. The Big Bang does NOT explain what (if anything) came "before" it, or what caused it, or why there's something rather than nothing. These remain open questions. Some scientists explore ideas about what might have triggered the Big Bang, but we don't have firm answers yet. Good science is honest about the edge of its knowledge.`,
            `It's also worth knowing that the Big Bang is about HOW the universe began to develop, which is a different kind of question from WHY existence exists at all, or questions of meaning and purpose that many people explore through philosophy, spirituality, or personal reflection. Science and those deeper questions aren't enemies. They explore different things. Nova's teaching: the Big Bang is one of humanity's greatest discoveries, AND there's still profound mystery at the very beginning. You can hold both the knowledge and the wonder at the same time. The more we learn, the more interesting the remaining questions become.`,
          ],
          image: `/ue-assets/cosmos/l03-s4-meaning.webp`,
          imageCaption: `Science explains how the universe developed. The deepest "why" stays open to wonder.`,
          vocab: [
            { word: `theory`,
              definition: `In science, a well-tested explanation supported by lots of evidence, not a guess. The Big Bang is a theory in this strong sense: backed by multiple independent lines of evidence that all agree.`,
              audioPrompt: `In science, a theory is a well-tested explanation supported by lots of evidence, {name}. Not a guess. In everyday speech, people sometimes say theory to mean a hunch. But in science, a theory is something much stronger. The Big Bang is a theory in this strong sense. It's backed by multiple independent lines of evidence. Expanding galaxies, the cosmic afterglow, and the measured amounts of hydrogen and helium in the universe all point the same way. When multiple clues agree, that's what makes a strong theory.` },
            { word: `scientific consensus`,
              definition: `When the large majority of scientists who study a topic agree on a conclusion based on the evidence. The Big Bang, evolution, and climate change all have strong scientific consensus.`,
              audioPrompt: `Scientific consensus is when the large majority of scientists who study a topic agree on a conclusion based on the evidence, {name}. The Big Bang has scientific consensus. So does evolution and climate change. Consensus doesn't mean every scientist agrees. It means the evidence is strong enough that the overwhelming majority of experts have reached the same conclusion. When consensus exists, it reflects a lot of accumulated, independently verified evidence. That's very different from a guess or a hunch.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to put the universe in order, {name}. Here are six major events in the history of the universe, scrambled up. Use the arrows to arrange them from FIRST (top) to MOST RECENT (bottom). Think about what had to happen before what.`,
          items: [
            { id: `step-bang`,     label: `The Big Bang: the universe begins, unimaginably hot and dense`,        position: 1 },
            { id: `step-inflate`,  label: `Inflation: space expands faster than light in a fraction of a second`, position: 2 },
            { id: `step-particles`,label: `The first particles form: protons, neutrons, electrons`,            position: 3 },
            { id: `step-atoms`,    label: `The first atoms form: hydrogen and helium; light travels freely`,    position: 4 },
            { id: `step-stars`,    label: `The first stars ignite and gather into the first galaxies`,          position: 5 },
            { id: `step-earth`,    label: `Our Sun and Earth form, about 9 billion years after the Big Bang`,   position: 6 },
          ],
          completionMessage: `Perfect, {name}! That's the story of the universe in order: from the Big Bang, through the first particles and atoms, to the first stars and galaxies, and finally to our own Sun and Earth. 13.8 billion years, start to now. And you're the latest chapter.`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is the BIG BANG?`,
              options: [
                `A huge explosion of a star`,
                `The theory that the universe began ~13.8 billion years ago from a hot, dense point and expanded into everything we see`,
                `The end of the universe`,
                `A collision of two galaxies`,
              ],
              correctIndex: 1,
              explanation: `The Big Bang is the theory of how the whole universe began. Everything was packed into a tiny, hot, dense point about 13.8 billion years ago, then expanded and cooled into the particles, atoms, stars, and galaxies we see today.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What's a common MISUNDERSTANDING about the Big Bang?`,
              options: [
                `That it happened long ago`,
                `That it was an explosion in space — actually, space ITSELF began and expanded; there was no "space" for it to explode into`,
                `That the universe is big`,
                `That galaxies exist`,
              ],
              correctIndex: 1,
              explanation: `The Big Bang wasn't an explosion in existing space. Space, time, matter, and energy all began together. There was no "somewhere" for it to happen in. It happened everywhere at once, because everywhere was the same tiny point.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `Which came FIRST after the Big Bang?`,
              options: [
                `Stars and galaxies`,
                `Basic particles like protons and neutrons, then atoms much later`,
                `Planets`,
                `Humans`,
              ],
              correctIndex: 1,
              explanation: `The order matters. First came basic particles (quarks, then protons and neutrons) in the first minutes. Atoms didn't form until about 380,000 years later. Stars and galaxies came hundreds of millions of years after that. Planets and humans came much, much later.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What is the COSMIC MICROWAVE BACKGROUND?`,
              options: [
                `Radio static from phones`,
                `The faint leftover heat from the early universe — an "afterglow" of the Big Bang detectable in every direction`,
                `Light from the nearest star`,
                `Sound from space`,
              ],
              correctIndex: 1,
              explanation: `The cosmic microwave background is the afterglow of the Big Bang, leftover heat detectable from every direction in space. Discovered by accident in 1964, it was predicted by Big Bang theory beforehand, making it powerful evidence.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: The universe is still expanding today, with galaxies moving away from each other.`,
              correctAnswer: true,
              explanation: `True. Edwin Hubble discovered in the 1920s that distant galaxies are moving away from us, and the farther away, the faster. The universe is still expanding right now. Running that expansion backward in time points to the Big Bang.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `What does it mean that the Big Bang is a "THEORY"?`,
              options: [
                `It's just a guess`,
                `In science, a theory is a well-tested explanation backed by lots of evidence — the Big Bang has multiple independent lines of evidence that agree`,
                `Nobody believes it`,
                `It's been disproven`,
              ],
              correctIndex: 1,
              explanation: `In science, "theory" means a strongly supported explanation, not a hunch. The Big Bang is backed by expanding galaxies, the cosmic microwave background, AND the measured amounts of hydrogen and helium. Multiple independent clues that all agree.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `What does the Big Bang theory NOT explain?`,
              options: [
                `How the universe developed`,
                `What (if anything) came "before" it or what caused it — these remain open questions`,
                `That galaxies exist`,
                `The age of the universe`,
              ],
              correctIndex: 1,
              explanation: `The Big Bang explains how the universe developed from a hot, dense beginning. It does NOT explain what came before, what caused it, or why there's something rather than nothing. Good science is honest about the edge of its knowledge.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `Why do scientists feel CONFIDENT about the Big Bang?`,
              options: [
                `One scientist said so`,
                `Because multiple independent lines of evidence — expansion, the afterglow, element amounts — all point to the same conclusion`,
                `It's a cool story`,
                `They guessed`,
              ],
              correctIndex: 1,
              explanation: `Science builds confidence through multiple agreeing clues, not a single one. Three independent lines of evidence (expanding galaxies, the cosmic microwave background, and the amounts of hydrogen and helium) all support the Big Bang. That agreement is what makes it a strong theory.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `The whole universe, including everything you've ever known, began from a point smaller than an atom. How does that idea sit with you?` },
            { id: `r2`, text: `The Big Bang explains HOW the universe developed, but not WHY there's something rather than nothing. Which question do YOU find more interesting, and why?` },
            { id: `r3`, text: `Scientists trust the Big Bang because three different kinds of evidence all agree. Where else in life do you trust something more when multiple clues point the same way?` },
            { id: `r4`, text: `If you could witness ONE moment in the universe's 13.8-billion-year history, which would you choose to see?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `The Big Bang isn't just abstract cosmology. Understanding it shapes how we see our own existence. Every atom in your body traces its history back to that beginning. The hydrogen in the water you drink formed in the first minutes after the Big Bang. The heavier atoms in your body formed later, inside stars. You are, quite literally, a part of the universe's 13.8-billion-year story, made of its oldest and most recycled material. Nova's note: when you understand where everything came from, you start to feel how deeply connected you are to all of it. You're not separate from the cosmos. You're made of it.`,
          familyAdventure: `Family Cosmic Timeline. As a family, make a timeline of the universe using a long strip of paper or a hallway. If the whole 13.8 billion years were squeezed into one year, the Big Bang would be January 1st, the first life would appear in September, dinosaurs in late December, and all of human history would fit in the last few seconds before midnight on December 31st. Mark these out together. It's a powerful way to feel how recent we are, and how vast the story is.`,
          creativePrompt: {
            intro: `Imagine you could narrate the first moments of the universe like a nature documentary. Write your narration of the Big Bang and what came next.`,
            floor: `Write at least 5 sentences. Describe the beginning, the expansion, and at least two things that formed (particles, atoms, stars).`,
            stretch: `Write 8 to 10 sentences. Take the reader from the Big Bang through inflation, particles, atoms, the first light, and the first stars, in order.`,
            open: `Write as much as you want. Build a full documentary narration. Take the reader on the journey from the Big Bang through every major stage: inflation, particles, atoms, the first light, the dark age, the first stars and galaxies, and finally the formation of our Sun and Earth. Make it vivid and awe-inspiring, like the universe is unfolding before their eyes.`,
            frames: [
              `In the beginning, 13.8 billion years ago, ___.`,
              `In the very first instant, ___.`,
              `As the universe cooled, ___.`,
              `Then, for the first time, ___.`,
              `And eventually, after billions of years, ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explain what the Big Bang was (and wasn't), the timeline of the early universe, the evidence that supports it, and the honest limits of what it explains. You even put the whole history of the universe in order. Next lesson: we zoom from the largest scales to the code that builds every living thing. DNA: THE CODE OF LIFE. See you there. — Nova.`,
          badge: `origin-explorer`,
          badgeName: `Origin Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
