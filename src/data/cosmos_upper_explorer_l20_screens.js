// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L20 — The Interconnectedness of All Life  [CAPSTONE]
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS2 (ecosystems/matter cycling); cross-cutting concepts
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify the kinds of cosmic connection)
// CAPSTONE: 100 XP. Nova's farewell. Culminates the whole-subject thread:
//   star stuff / made of atoms forged in stars / energy conserved since the
//   Big Bang / Earth the only known living world / you are the cosmos aware.
// SCOPE: 4 concepts — made of star stuff, the web of life, the cycles that
//        connect everything, you are the universe knowing itself
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-20`,
      title: `The Interconnectedness of All Life`,
      duration: 20,
      xpReward: 100,
      badge: `cosmos-master`,
      badgeName: `Cosmos Master`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Nova here, for our final lesson together in Cosmos. We've journeyed from the largest galaxies to the tiniest quantum particles, from the deep ocean to distant exoplanets, from the Big Bang to the nature of time itself. Today, in this capstone, we bring it ALL together with one of the most beautiful truths science has ever revealed: EVERYTHING is connected. You are connected to the stars, to all living things, and to the entire 13.8-billion-year story of the universe. This isn't poetry. It's science. And it just might change how you see yourself forever. Let's finish strong.`,
          headline: `The Interconnectedness of All Life`,
          subtitle: `The grand finale: how everything in the cosmos connects, including you`,
          visual: `/ue-assets/cosmos/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You Are Made of Star Stuff`,
          paragraphs: [
            `Let's begin with the most astonishing connection of all. Think back to our lessons on the Big Bang and the life of stars. The early universe made only the lightest elements, mostly hydrogen and helium. So where did all the OTHER elements come from, the carbon in your body, the oxygen you breathe, the iron in your blood, the calcium in your bones? The answer is breathtaking: they were forged inside STARS. Stars are element factories. And when massive stars died in titanic explosions, they scattered these elements across space, where they eventually became part of new worlds, including Earth, and new living things, including YOU.`,
            `This means something literally true and utterly profound: the atoms that make up your body were created inside ancient stars that lived and died billions of years ago. You are, quite literally, made of star stuff. The carbon in your cells, the oxygen in your lungs, the calcium in your bones, all of it was cooked inside stars and flung across the galaxy long before Earth existed. When you look up at the night sky, you're looking at the same kind of furnaces that made you. You are not separate from the cosmos, gazing at it from the outside. You are a PART of it, made from its very substance. The universe and you are family, in the most literal way imaginable.`,
          ],
          image: `/ue-assets/cosmos/l20-s1-star-stuff.webp`,
          imageCaption: `The atoms in your body were forged inside ancient stars. You are made of star stuff.`,
          vocab: [
            {
              word: `star stuff`,
              definition: `The idea, literally true, that the atoms making up your body and everything around you were created inside stars long ago. Nearly all elements heavier than hydrogen and helium were forged in stars.`,
              audioPrompt: `Star stuff is the idea, literally true, that the atoms making up your body were created inside stars, {name}. The early universe made only the lightest elements, mostly hydrogen and helium. So where did the carbon in your body, the oxygen you breathe, and the iron in your blood come from? They were forged inside stars. When massive stars died in explosions, they scattered these elements across space, where they became part of new worlds and new living things, including you. You are made of star stuff.`,
            },
            {
              word: `supernova`,
              definition: `A titanic explosion that occurs when a massive star dies. Supernovas blast the heavy elements forged inside the star outward into space, where they eventually become part of new worlds and new living things.`,
              audioPrompt: `A supernova is a titanic explosion that occurs when a massive star dies, {name}. Supernovas are so powerful they can briefly outshine an entire galaxy. But their greatest gift is what they scatter: the heavy elements forged inside the star, like carbon, oxygen, and iron, are blasted outward into space. Over time, this stardust came together to form new solar systems, new planets, and new living things. A supernova that happened long before Earth existed helped create the atoms inside your body right now.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Web of Life`,
          paragraphs: [
            `Now let's connect all living things on Earth. Every organism, from the tiniest bacterium to the tallest tree to the largest whale, is linked in a vast WEB OF LIFE. Living things depend on each other in countless ways. Plants make food and oxygen using sunlight. Animals eat plants (or eat other animals that eat plants) and breathe that oxygen. When living things die, decomposers break them down, returning nutrients to the soil so new plants can grow. Energy and matter flow through this web, connecting every living thing into one giant, interdependent system. Pull one thread, and the whole web feels it.`,
            `Remember from our genetics lesson that all life on Earth shares the same basic code: DNA. This is powerful evidence that every living thing on Earth, every plant, animal, fungus, and microbe, is RELATED, descended from common ancestors over billions of years of evolution. The tree in your yard, the dog at your feet, the bird in the sky, and you, are all distant cousins on the single great family tree of life. We are not just connected by need; we are connected by KINSHIP. All life on Earth is, in a real biological sense, one enormous extended family, sharing one ancient origin and one beautiful planet.`,
          ],
          image: `/ue-assets/cosmos/l20-s2-web.webp`,
          imageCaption: `Every living thing is linked, by need and by kinship. All life shares one family tree.`,
          vocab: [
            {
              word: `web of life`,
              definition: `The vast network of connections linking all living things, through the flow of energy and matter and through shared ancestry. Every organism depends on others, and all life on Earth is related.`,
              audioPrompt: `The web of life is the vast network of connections linking all living things, {name}. Plants make food and oxygen using sunlight. Animals eat plants and breathe that oxygen. When living things die, decomposers return their nutrients to the soil. Energy and matter flow through this web, connecting every organism into one interdependent system. And all life on Earth shares the same DNA code, meaning every living thing is related, descended from common ancestors. The tree, the whale, and you are all distant cousins on one great family tree.`,
            },
            {
              word: `ecosystem`,
              definition: `A community of living things interacting with each other and their non-living environment (soil, water, air, sunlight) as one connected system. Ecosystems range from a pond to a rainforest to the entire Earth. Harm one part, and the rest is affected.`,
              audioPrompt: `An ecosystem is a community of living things interacting with each other and their environment, {name}. Things like soil, water, air, and sunlight are all part of the ecosystem, not just the living creatures. Ecosystems can be as small as a pond or as large as a rainforest. In every ecosystem, energy flows through food chains and matter cycles through decomposers and back to plants. Everything is connected. If you remove a key species, the whole ecosystem is affected. Earth itself is one enormous, interconnected ecosystem that all life shares.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Great Cycles That Connect Everything`,
          paragraphs: [
            `Connection isn't just about living things. The whole planet works through great CYCLES that link everything together. Remember energy from our earlier lesson? Nearly all of Earth's energy comes from the Sun, flows through living things, and connects every creature back to that one star. Matter cycles too. The WATER you drink has been cycling through the planet for billions of years; the very same water molecules have been in ancient oceans, in dinosaurs, in clouds, and now in you. The CARBON in your body cycles between the air, plants, animals, and the earth, over and over. Atoms are used, released, and reused endlessly.`,
            `Here's a wondrous thought: because matter cycles endlessly, the atoms in your body have been part of countless other things before you, and will become part of countless things after. An atom of carbon in you might once have been in a dinosaur, a tree, an ocean wave, or a distant person long ago. Nothing in the universe is truly separate or wasted; it all flows and connects through these grand cycles. Even the energy itself, as we learned, has been conserved since the Big Bang. The same energy that powers your heartbeat right now has been part of the universe for 13.8 billion years. You are not a separate, isolated being. You are a swirling, temporary, beautiful pattern in an endless cosmic flow of matter and energy that connects all of space and all of time.`,
          ],
          image: `/ue-assets/cosmos/l20-s3-cycles.webp`,
          imageCaption: `Water, carbon, energy: endless cycles. Your atoms have been countless things before.`,
          vocab: [
            {
              word: `cycle`,
              definition: `A process that repeats, moving matter or energy through the world again and again, like the water cycle and carbon cycle. These great cycles connect all parts of Earth and all living things over time.`,
              audioPrompt: `A cycle is a process that repeats, moving matter or energy through the world again and again, {name}. Like the water cycle and the carbon cycle. The water you drink has been cycling for billions of years. The same molecules have been in ancient oceans, in clouds, in dinosaurs, and now in you. The carbon in your body cycles between air, plants, animals, and earth. Because matter cycles endlessly, the atoms in your body have been part of countless things before you, and will be again. Nothing is truly separate.`,
            },
            {
              word: `carbon cycle`,
              definition: `The continuous movement of carbon through the air, plants, animals, soil, and oceans. Plants absorb carbon dioxide; animals eat plants; decomposers break things down; carbon returns to the air. The same carbon atoms cycle through living and non-living things endlessly.`,
              audioPrompt: `The carbon cycle is the continuous movement of carbon through the air, plants, animals, soil, and oceans, {name}. Plants absorb carbon dioxide from the air during photosynthesis and turn it into living material. Animals eat plants and take in that carbon. When living things die, decomposers break them down and carbon returns to the soil and air. The same carbon atoms cycle through living and non-living things endlessly. The carbon in your body has been part of countless living things before you, and will be again. Nothing is wasted.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You Are the Universe Knowing Itself`,
          paragraphs: [
            `Let's bring our whole journey home. Across this subject, you've learned that you are made of atoms forged in ancient stars, related to every living thing on Earth, and woven into endless cycles of matter and energy stretching back to the Big Bang. But here's perhaps the most beautiful idea of all. You are made of the same atoms as the stars and planets. Yet you can do something remarkable that a rock or a star cannot: you can THINK, wonder, learn, and ask questions about the universe. In you, the cosmos has become able to look back at itself and understand itself. When you marvel at a galaxy, the universe is, in a very real sense, marveling at itself through you.`,
            `That is an extraordinary thing to be: a small part of the universe that woke up, became aware, and is now learning its own story. Every question you've asked in these lessons is the cosmos getting to know itself a little better. Nova's final teaching, {name}: you are not separate from the universe, and you are never truly alone in it. You are deeply, beautifully connected to the stars, to all life, to all of time, and to the whole 13.8-billion-year story. You are stardust that learned to think, a brief and precious pattern of cosmic wonder. Carry that knowledge with you. Let it fill you with awe, with curiosity, and with care for this living world and every being you share it with. It has been the greatest honor to explore the cosmos with you. Keep looking up. Keep wondering. The universe is yours to discover, and you are a part of everything you see. With all my cosmic love, your guide always, Nova.`,
          ],
          image: `/ue-assets/cosmos/l20-s4-universe-knowing.webp`,
          imageCaption: `You are the universe become aware of itself: stardust that learned to wonder.`,
          vocab: [
            {
              word: `interconnectedness`,
              definition: `The truth that everything in the universe is connected, through shared atoms, the web of life, the great cycles of matter and energy, and the single unfolding story of the cosmos. Nothing is truly separate.`,
              audioPrompt: `Interconnectedness is the truth that everything in the universe is connected, {name}. Through atoms forged in stars, through the web of all life, through the great cycles of matter and energy, and through the single cosmic story stretching 13.8 billion years. You are made of star stuff, related to every living thing, and woven into endless cycles back to the Big Bang. Yet you can think, wonder, and ask questions. In you, the cosmos has become able to understand itself. You are stardust that learned to wonder.`,
            },
            {
              word: `stardust`,
              definition: `The atoms of elements heavier than hydrogen and helium, originally created inside stars. When scientists say "you are stardust," they mean it literally: the atoms in your body were forged inside ancient stars and scattered across space before Earth formed.`,
              audioPrompt: `Stardust is a poetic but literally true name for the atoms in your body, {name}. The early universe made mostly hydrogen and helium. All the heavier elements, carbon, oxygen, iron, calcium, were forged inside stars over billions of years. When massive stars died, they scattered these atoms across space. Over time, this stardust came together to form new solar systems, new planets, and new living things. The atoms in your body were once inside ancient stars that died long before Earth existed. You are, literally, stardust.`,
            },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `One final investigation, {name}, bringing your whole Cosmos journey together. Here are four real examples of connection. Classify each by the KIND of cosmic connection it shows: STAR CONNECTION (made of star stuff / atoms from stars), LIFE CONNECTION (the web and family tree of living things), or CYCLE CONNECTION (matter or energy flowing in great repeating cycles)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `star`,  label: `Star Connection`,  color: `#FBBF24`, description: `Connected through atoms forged inside ancient stars.` },
            { id: `life`,  label: `Life Connection`,  color: `#34D399`, description: `Connected through the web of life and shared ancestry of living things.` },
            { id: `cycle`, label: `Cycle Connection`, color: `#60A5FA`, description: `Connected through matter or energy flowing in great repeating cycles.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Connection #1`,
              clues: [
                { text: `The calcium in your bones and the iron in your blood exist because of something that happened long before Earth formed.` },
                { text: `These elements were created inside massive stars.` },
                { text: `The stars exploded and scattered them across space.` },
              ],
              correctAnswer: `star`,
              realWorldExample: `Every heavy atom in you was forged in a star.`,
              explanation: `Your calcium and iron were forged inside ancient stars. Pure star connection. You are made of star stuff, literally built from atoms created in stars that died billions of years ago.`,
            },
            {
              id: `case-2`,
              caseTitle: `Connection #2`,
              clues: [
                { text: `You, an oak tree, a mushroom, and a jellyfish all use the same basic DNA code.` },
                { text: `This shows you all descended from common ancestors.` },
                { text: `You're all distant cousins on one great family tree.` },
              ],
              correctAnswer: `life`,
              realWorldExample: `Shared DNA links all life on Earth.`,
              explanation: `Shared DNA shows all living things are related, descended from common ancestors. Pure life connection. Every plant, animal, fungus, and microbe is part of one enormous family tree, and so are you.`,
            },
            {
              id: `case-3`,
              caseTitle: `Connection #3`,
              clues: [
                { text: `The water molecules you drank today have existed for billions of years.` },
                { text: `The same water has been in ancient oceans, in clouds, and even in dinosaurs.` },
                { text: `It keeps flowing through the planet, used and reused endlessly.` },
              ],
              correctAnswer: `cycle`,
              realWorldExample: `The water cycle connects all of Earth's history.`,
              explanation: `The water moves endlessly through the planet, used and reused for billions of years. Pure cycle connection. The same atoms cycle through oceans, clouds, creatures, and you, connecting all of Earth across time.`,
            },
            {
              id: `case-4`,
              caseTitle: `Connection #4 — The Tricky One`,
              clues: [
                { text: `The energy powering your heartbeat right now came from food, which came from plants, which captured sunlight from the Sun.` },
                { text: `The Sun is a star, and the energy has been conserved since the Big Bang.` },
                { text: `This connects you to a star AND involves energy flowing through a cycle.` },
              ],
              correctAnswer: `cycle`,
              realWorldExample: `Energy from the Sun flows through all life.`,
              explanation: `Tricky! This one touches MORE than one kind of connection, which is the whole point of this finale. The energy comes from the Sun (a star), so there's a star link. But the heart of this example is energy FLOWING, from Sun to plant to you, as part of the great energy cycle that's been conserved since the Big Bang. So the best single classification is cycle connection: energy moving through the living world. Pure cycle connection (as the best fit). The deeper lesson, {name}: these connections aren't really separate boxes at all. Being made of star stuff, belonging to the web of life, and flowing through cosmic cycles are all part of ONE great truth: everything is connected. You contain all three kinds of connection at once, every second of your life. That is the beautiful heart of Cosmos, and now you carry it with you.`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Last quiz of our journey, {name}. Let's see how it all came together.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Where did the heavier elements in your body (carbon, oxygen, iron, calcium) come from?`,
              options: [
                `They were always on Earth`,
                `They were forged inside ancient stars, then scattered across space when those stars died`,
                `They were made by humans`,
                `They came from the Moon`,
              ],
              correctIndex: 1,
              explanation: `The early universe made mostly hydrogen and helium. The heavier elements (carbon, oxygen, iron, calcium) were forged inside stars and scattered when massive stars exploded. You are literally made of star stuff.` },

            { id: `l20-q2`, format: `true-false`,
              question: `True or false: The atoms in your body were created inside stars that lived and died billions of years ago.`,
              correctAnswer: true,
              explanation: `True, and it's one of the most profound facts in science. The carbon, oxygen, iron, and calcium in your body were all forged inside ancient stars long before Earth existed. When you look at the night sky, you see the same kind of furnaces that made you.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `What does it mean that all life on Earth shares the same DNA code?`,
              options: [
                `Nothing important`,
                `It's evidence that all living things are related, descended from common ancestors — one great family tree`,
                `That all life is identical`,
                `That DNA is fake`,
              ],
              correctIndex: 1,
              explanation: `All life sharing the same basic DNA code is powerful evidence that every plant, animal, fungus, and microbe is related, descended from common ancestors over billions of years. The tree, the dog, the bird, and you are all distant cousins.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `What is the WEB OF LIFE?`,
              options: [
                `A spider's web`,
                `The vast network linking all living things through energy flow, matter, and shared ancestry`,
                `A type of plant`,
                `The internet`,
              ],
              correctIndex: 1,
              explanation: `The web of life is the network connecting all living things: plants make food and oxygen, animals eat and breathe, decomposers recycle nutrients. Energy and matter flow through it, and all life shares ancestry. Pull one thread, and the whole web feels it.` },

            { id: `l20-q5`, format: `multiple-choice`,
              question: `What's amazing about the WATER you drink?`,
              options: [
                `It's brand new`,
                `The same water molecules have cycled through the planet for billions of years — in ancient oceans, clouds, even dinosaurs`,
                `It comes from space`,
                `It never moves`,
              ],
              correctIndex: 1,
              explanation: `The water you drink has cycled through the planet for billions of years. The same molecules have been in ancient oceans, clouds, and even dinosaurs. Matter cycles endlessly, connecting all of Earth across all of time, including you.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `According to Nova, what remarkable thing can YOU do that a rock or star cannot?`,
              options: [
                `Glow`,
                `Think, wonder, learn, and ask questions about the universe — so the cosmos can understand itself through you`,
                `Float`,
                `Last forever`,
              ],
              correctIndex: 1,
              explanation: `You're made of the same atoms as stars, yet you can think, wonder, and ask questions. In you, the cosmos has become able to look back at and understand itself. When you marvel at a galaxy, the universe is marveling at itself through you.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What is INTERCONNECTEDNESS, the big idea of this final lesson?`,
              options: [
                `That everything is separate`,
                `That everything in the universe is connected — through shared atoms, the web of life, the great cycles, and one cosmic story`,
                `That only people matter`,
                `That nothing is connected`,
              ],
              correctIndex: 1,
              explanation: `Interconnectedness is the truth that everything is connected: through atoms forged in stars, the web of all life, the great cycles of matter and energy, and the single 13.8-billion-year story of the cosmos. Nothing is truly separate.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What is Nova's final message to you?`,
              options: [
                `The universe is empty and cold`,
                `You are deeply connected to the stars, all life, and all of time — stardust that learned to think; keep looking up and wondering`,
                `Stop asking questions`,
                `Science has all the answers`,
              ],
              correctIndex: 1,
              explanation: `Nova's farewell: you are not separate from the universe and never truly alone in it. You're connected to the stars, all life, and all of time. You're stardust that learned to wonder. Keep looking up, keep wondering. The universe is yours to discover.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `For your final reflection in Cosmos, {name}, pick ONE question and pour your heart into it. This is the big one.`,
          prompts: [
            { id: `r1`, text: `You are literally made of star stuff: atoms forged in ancient stars. How does it change the way you see yourself, knowing you're a part of the cosmos and not separate from it?` },
            { id: `r2`, text: `All life on Earth is one great family, sharing the same DNA. How does it feel to know you're related to every living thing, from trees to whales?` },
            { id: `r3`, text: `Nova says in you, the universe becomes able to know itself. What's the most wonder-filled question about the cosmos you still want to explore?` },
            { id: `r4`, text: `Looking back on this whole Cosmos journey, from galaxies to atoms to time itself, what idea amazed you the most, and why?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `The truth of interconnectedness isn't just beautiful. It's deeply practical. It's the foundation of ecology and environmental science, which show how harming one part of nature affects everything else, and why caring for our living planet matters so much. It shapes medicine, since your body is itself a connected system within the larger web of life. And on a human level, understanding how connected we all are, to each other, to all living things, and to the cosmos itself, can grow your compassion, your sense of wonder, and your care for the world. Nova's note: the people who treat the Earth and each other with the most wisdom are often those who truly understand how connected everything is. You now carry that understanding. Use it well.`,
          familyAdventure: `Family Web of Connection. As a family, sit together and take turns sharing connections you've learned: "I'm made of star stuff because...", "I'm related to that tree because...", "This water has been around since...". Then go outside if you can, look up at the sky, and talk about how every person there is also made of stardust, also part of the web of life. End by each naming ONE way you want to care for this connected world. You're turning cosmic knowledge into love and action, the perfect finale.`,
          creativePrompt: {
            intro: `This is your final creative piece in Cosmos, {name}. Write a reflection or letter about what it means to you to be "made of star stuff" and connected to all things.`,
            floor: `Write at least 5 sentences. Describe one way you feel connected to the universe and how it makes you feel.`,
            stretch: `Write 8 to 10 sentences. Reflect on being made of star stuff, related to all life, and part of the cosmos, and what that means for how you'll live.`,
            open: `Write as much as you want. Write a full, heartfelt reflection on everything you've learned in Cosmos. Reflect on being made of atoms forged in ancient stars, on being related to every living thing through the web of life, on being woven into the endless cycles of matter and energy, on being a part of the universe that can wonder about itself. Describe how this knowledge makes you feel, what it means for how you want to treat the world and other living things, and the sense of awe and belonging it gives you. Make it your own cosmic declaration. This is your masterpiece.`,
            frames: [
              `When I realize I'm made of star stuff, I feel ___.`,
              `Knowing I'm connected to all life means ___.`,
              `Being a part of the universe that can wonder makes me ___.`,
              `Because everything is connected, I want to ___.`,
              `My place in the cosmos is ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `You did it, {name}. You've completed all of COSMOS, the entire journey from the Big Bang to the interconnectedness of all life. You've explored galaxies, atoms, black holes, DNA, the brain, the ocean, distant worlds, quantum physics, time itself, and your own profound place in the universe. You are now a true Cosmos Master. But more than that, you're stardust that learned to wonder, a part of the universe that woke up and chose to understand itself. Carry your curiosity, your awe, and your care for this connected world wherever you go. It has been the honor of a lifetime to be your guide. Keep looking up, {name}. The cosmos is yours. With all my cosmic love, always, Nova. 🦉✨`,
          badge: `cosmos-master`,
          badgeName: `Cosmos Master`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  const xp = screens.find(s => s.type === 'celebration')?.xpEarned ?? 0;
  console.log(`[LESSON-COSMOS-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts, ${xp} XP`);
}
