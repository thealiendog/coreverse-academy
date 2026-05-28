// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L15 — The Ocean: Earth's Last Frontier
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS2, MS-LS2 — Earth's systems; ecosystems
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the ocean zones by depth)
// SCOPE: 4 concepts — the unexplored ocean, the zones by depth, life in
//        the deep, why the ocean matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-15`,
      title: `The Ocean: Earth's Last Frontier`,
      duration: 18,
      xpReward: 75,
      badge: `ocean-explorer`,
      badgeName: `Ocean Explorer`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. We've explored distant galaxies and tiny atoms. But did you know that one of the LEAST explored places in the universe is right here on Earth? The deep OCEAN. We have better maps of the surface of Mars and the Moon than we do of our own ocean floor. Beneath the waves lies a vast, dark, mysterious world full of creatures stranger than anything in science fiction. Today we explore Earth's last great frontier. By the end, you'll understand the hidden world beneath the sea. Let's begin.`,
          headline: `The Ocean: Earth's Last Frontier`,
          subtitle: `The vast, mostly unexplored world beneath the waves`,
          visual: `/ue-assets/cosmos/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Unexplored Ocean`,
          paragraphs: [
            `The ocean covers about 71% of Earth's surface, more than two-thirds of our entire planet. Yet astonishingly, humans have explored only a tiny fraction of it. Scientists estimate that MOST of the ocean floor has never been seen by human eyes or mapped in detail. We've sent people to the Moon and rovers to Mars, but the deep ocean remains one of the greatest mysteries on our own planet. This is why scientists call it "Earth's last frontier."`,
            `Why is the deep ocean so hard to explore? The answer is PRESSURE. As you go deeper underwater, the weight of all the water above pushes down harder and harder. At the deepest points, the pressure is crushing, equal to having dozens of jumbo jets stacked on top of you. It's also pitch black, freezing cold, and extremely remote. Studying it requires special submarines and robots built to survive these extreme conditions. The field of science that studies the ocean is called OCEANOGRAPHY, and oceanographers are still making astonishing new discoveries, including entirely new species, on a regular basis.`,
          ],
          image: `/ue-assets/cosmos/l15-s1-unexplored.webp`,
          imageCaption: `71% of Earth, mostly unexplored. We've mapped Mars better than our own seafloor.`,
          vocab: [
            {
              word: `oceanography`,
              definition: `The scientific study of the ocean, including its water, life, floor, and movements. Oceanographers use special submarines and robots to explore the deep sea, still discovering new species regularly.`,
              audioPrompt: `Oceanography is the scientific study of the ocean, {name}. It includes the ocean's water, its life, its floor, and its movements. The ocean covers about 71 percent of Earth's surface, yet humans have explored only a tiny fraction of it. We have better maps of Mars and the Moon than of our own ocean floor. That's why it's called Earth's last frontier. The deep ocean is hard to explore because of crushing pressure, total darkness, and freezing cold. Oceanographers use special submarines and robots built to survive these extreme conditions.`,
            },
            {
              word: `phytoplankton`,
              definition: `Tiny, plant-like organisms that float in sunlit surface waters and use photosynthesis to make food, releasing oxygen. Scientists estimate phytoplankton produce about half of all the oxygen on Earth. They're also the foundation of most ocean food chains.`,
              audioPrompt: `Phytoplankton are tiny, plant-like organisms that float in the sunlit surface waters of the ocean, {name}. They're so small that millions fit in a drop of water, yet they're incredibly important. Like plants on land, phytoplankton use sunlight and carbon dioxide to make food through photosynthesis, releasing oxygen as a byproduct. Scientists estimate that phytoplankton produce about half of all the oxygen on Earth. They're also the foundation of most ocean food chains: tiny animals eat phytoplankton, larger animals eat those, and so on up to whales.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Zones of the Deep`,
          paragraphs: [
            `As you descend into the ocean, it changes dramatically, layer by layer. Scientists divide it into ZONES based mainly on how much sunlight reaches them. At the top is the SUNLIGHT ZONE, the warm, bright surface layer where sunlight reaches. This is where most ocean life lives, including the tiny plant-like organisms that make much of Earth's oxygen. Below that is the TWILIGHT ZONE, where only dim, faint light penetrates, and the water grows colder and darker.`,
            `Go deeper and you reach the MIDNIGHT ZONE, where NO sunlight reaches at all. It's completely dark, very cold, and home to bizarre creatures. Even deeper lies the ABYSS, near-freezing, under crushing pressure, where very few creatures survive. And at the very bottom, in the deepest ocean TRENCHES, the pressure is almost unimaginable, yet astonishingly, life still exists even there. Each zone is a completely different world, with its own creatures adapted to survive its specific conditions. Descending through them is like visiting several alien planets without ever leaving Earth.`,
          ],
          image: `/ue-assets/cosmos/l15-s2-zones.webp`,
          imageCaption: `Sunlight, twilight, midnight, abyss, trenches: each zone a different world.`,
          vocab: [
            {
              word: `pressure`,
              definition: `The force pushing down from the weight of water above. The deeper you go in the ocean, the greater the pressure. At the deepest points it is crushing, which is why the deep sea is so hard to explore.`,
              audioPrompt: `Pressure is the force pushing down from the weight of water above you, {name}. The deeper you go in the ocean, the more water sits above you, and the greater the pressure becomes. Near the surface, the pressure is gentle. But at the deepest points of the ocean, the pressure is crushing, equal to having dozens of jumbo jets stacked on top of you. This extreme pressure is one of the main reasons the deep ocean is so hard to explore.`,
            },
            {
              word: `ocean zone`,
              definition: `One of the distinct layers of the ocean defined by how much sunlight reaches that depth: the sunlight zone, twilight zone, midnight zone, abyss, and trenches. Each zone is home to creatures specially adapted to its conditions.`,
              audioPrompt: `An ocean zone is one of the distinct layers of the ocean, defined mainly by how much sunlight reaches that depth, {name}. From top to bottom, the zones are: the sunlight zone at the surface, where most life lives; the twilight zone, where light fades; the midnight zone, where total darkness begins; the abyss, with nearly freezing temperatures and crushing pressure; and the trenches, the deepest points of all. Each zone is home to creatures specially adapted to its conditions. Every zone supports life.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Life in the Deep`,
          paragraphs: [
            `The creatures of the deep ocean are some of the strangest living things on Earth. With no sunlight, many deep-sea animals make their OWN light through a process called BIOLUMINESCENCE, glowing in the dark using chemical reactions in their bodies. Some use their glow to attract prey, some to find mates, some to confuse predators. The famous anglerfish dangles a glowing lure to catch food in the pitch black. Imagine a world where most of the light comes from living things, not the Sun.`,
            `Deep-sea creatures have amazing ADAPTATIONS to survive their extreme home. Some have huge eyes to catch the faintest light, while others are blind and rely on other senses. Many are soft and squishy to handle the crushing pressure. Some can survive on very little food in the food-scarce deep. Perhaps most amazingly, scientists discovered entire ecosystems near deep-sea "hydrothermal vents," cracks in the ocean floor that release heat and chemicals. Creatures there don't depend on sunlight at all. They get their energy from the chemicals, an entirely different way of living. This discovery even changed how scientists think about where life might exist elsewhere in the universe.`,
          ],
          image: `/ue-assets/cosmos/l15-s3-life.webp`,
          imageCaption: `Glowing in the dark, surviving crushing pressure: life thrives where it seems impossible.`,
          vocab: [
            {
              word: `bioluminescence`,
              definition: `The ability of living things to produce their own light through chemical reactions in their bodies. Many deep-sea creatures use bioluminescence to attract prey, find mates, or confuse predators in the dark.`,
              audioPrompt: `Bioluminescence is the ability of living things to produce their own light, {name}. They do it through chemical reactions inside their bodies. In the deep ocean, where no sunlight reaches, many creatures make their own light this way. Some use their glow to attract prey, some to find mates, and some to confuse predators. The famous anglerfish dangles a glowing lure to catch food in the pitch black. Imagine a world where most of the light comes from living things, not the Sun.`,
            },
            {
              word: `hydrothermal vent`,
              definition: `A crack in the deep ocean floor that releases hot water and chemicals from inside the Earth. Entire ecosystems thrive around vents, with creatures that get their energy from chemicals rather than sunlight — a discovery that changed how scientists think about where life can exist.`,
              audioPrompt: `A hydrothermal vent is a crack in the deep ocean floor that releases hot water and chemicals from inside the Earth, {name}. They're found miles below the surface, in total darkness with crushing pressure. Scientists were amazed to discover that entire ecosystems thrive around these vents, with creatures that get their energy from the chemicals, not from sunlight at all. This is called chemosynthesis instead of photosynthesis. The discovery of hydrothermal vent ecosystems changed how scientists think about where life can exist, even potentially on other worlds in space.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why the Ocean Matters`,
          paragraphs: [
            `The ocean isn't just a mysterious frontier. It's essential to ALL life on Earth, including yours. The ocean produces a huge share of the oxygen you breathe, made mostly by tiny ocean organisms called phytoplankton. It helps control the climate by absorbing heat and carbon dioxide. It drives weather patterns and the water cycle. It feeds billions of people. And it's home to an enormous share of Earth's BIODIVERSITY, the incredible variety of living things. A healthy ocean is essential for a healthy planet.`,
            `Because the ocean is so important, caring for it matters enormously. Pollution, overfishing, and climate change all threaten ocean health, which in turn affects all of us. The good news is that understanding the ocean is the first step to protecting it, and there's a whole frontier of discovery still waiting. Nova's teaching: it's humbling that one of the greatest unexplored frontiers in the universe is right here on our own planet, beneath the waves we see every day. The same curiosity that makes us reach for the stars can make us dive into the deep, and the same wonder that makes us love the cosmos can make us cherish and protect this living blue planet. Exploration and care go hand in hand.`,
          ],
          image: `/ue-assets/cosmos/l15-s4-matters.webp`,
          imageCaption: `Oxygen, climate, weather, food, biodiversity: a healthy ocean means a healthy planet.`,
          vocab: [
            {
              word: `marine ecosystem`,
              definition: `A community of living things in the ocean (from tiny plankton to giant whales) interacting with each other and their watery environment. The ocean holds an enormous share of Earth's biodiversity.`,
              audioPrompt: `A marine ecosystem is a community of living things in the ocean interacting with each other and their environment, {name}. From tiny plankton to giant whales, ocean life forms connected webs of relationships. The ocean holds an enormous share of Earth's biodiversity, the incredible variety of living things. Marine ecosystems are essential to all life on Earth. Tiny ocean organisms produce much of the oxygen you breathe. The ocean controls climate, drives weather, and feeds billions of people. A healthy ocean means a healthy planet.`,
            },
            {
              word: `biodiversity`,
              definition: `The incredible variety of living things in a place. The ocean holds an enormous share of Earth's biodiversity — from microscopic phytoplankton to giant whales — and diverse ecosystems are more resilient and better able to recover from damage.`,
              audioPrompt: `Biodiversity means the incredible variety of living things in a place, {name}. A highly biodiverse ecosystem has many different species, each playing a different role. The ocean holds an enormous share of Earth's biodiversity, from microscopic phytoplankton to giant whales, from colorful coral reefs to strange deep-sea creatures. Biodiversity matters because ecosystems with many species are more resilient: if one species is lost, others can fill its role. The ocean's biodiversity is under threat from pollution, overfishing, and climate change, which is why protecting it is so important.`,
            },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to descend into the deep, {name}. Here are five ocean zones, scrambled up. Use the arrows to arrange them from the SHALLOWEST (top) to the DEEPEST (bottom). Think about how sunlight fades as you go down.`,
          items: [
            { id: `step-sun`,    label: `The Sunlight Zone: bright surface waters where most ocean life lives`,  position: 1 },
            { id: `step-twi`,    label: `The Twilight Zone: dim, faint light and growing darkness`,             position: 2 },
            { id: `step-mid`,    label: `The Midnight Zone: completely dark, home to glowing creatures`,        position: 3 },
            { id: `step-abyss`,  label: `The Abyss: near-freezing, crushing pressure, very few creatures`,      position: 4 },
            { id: `step-trench`, label: `The Trenches: the deepest parts of the ocean, where life still hides`, position: 5 },
          ],
          completionMessage: `Perfect, {name}! That's the journey from the bright surface down to the deepest trenches: sunlight, twilight, midnight, abyss, and trenches. Each zone is its own alien world, right here on Earth. And amazingly, life exists in every single one, even at the very bottom. Our ocean is a universe of its own.`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `Why is the deep ocean called "Earth's last frontier"?`,
              options: [
                `It's at the edge of the world`,
                `It covers most of Earth, yet humans have explored only a tiny fraction — we've mapped Mars better than our own seafloor`,
                `Nobody lives near the ocean`,
                `It was discovered recently`,
              ],
              correctIndex: 1,
              explanation: `The ocean covers about 71% of Earth, yet most of the ocean floor has never been seen or mapped in detail. We've mapped Mars and the Moon better than our own deep ocean. It's one of the greatest unexplored places, right here on our planet.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `What makes the deep ocean so HARD to explore?`,
              options: [
                `It's too small`,
                `Crushing pressure (from the weight of water above), total darkness, and freezing cold`,
                `There's nothing to see`,
                `It's too bright`,
              ],
              correctIndex: 1,
              explanation: `The main challenge is pressure: the deeper you go, the more water pushes down, becoming crushing at the bottom. It's also pitch black, freezing, and remote. Exploring it requires special submarines and robots built to survive these extreme conditions.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What separates the ocean ZONES, from sunlight zone down to the trenches?`,
              options: [
                `Walls`,
                `Mainly how much sunlight reaches each depth — light fades as you go deeper`,
                `Temperature only`,
                `The kinds of fish only`,
              ],
              correctIndex: 1,
              explanation: `The zones are defined mainly by how much sunlight reaches them. The sunlight zone is bright, the twilight zone is dim, and the midnight zone and below are completely dark. Light fades with depth, and each zone is a different world.` },

            { id: `l15-q4`, format: `true-false`,
              question: `True or false: Life exists even in the deepest ocean trenches, despite crushing pressure and total darkness.`,
              correctAnswer: true,
              explanation: `True. Astonishingly, life exists in every ocean zone, even the deepest trenches with their crushing pressure and total darkness. Deep-sea creatures have amazing adaptations to survive where it seems impossible. Life is remarkably tough and creative.` },

            { id: `l15-q5`, format: `multiple-choice`,
              question: `What is BIOLUMINESCENCE?`,
              options: [
                `A type of fish`,
                `The ability of living things to make their own light through chemical reactions`,
                `Sunlight underwater`,
                `A kind of submarine`,
              ],
              correctIndex: 1,
              explanation: `Bioluminescence is the ability of living things to produce their own light through chemical reactions in their bodies. In the dark deep sea, creatures use their glow to attract prey, find mates, or confuse predators. The anglerfish dangles a glowing lure to hunt.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `What amazing thing did scientists find near deep-sea HYDROTHERMAL VENTS?`,
              options: [
                `Nothing lives there`,
                `Entire ecosystems where creatures get energy from chemicals, not sunlight at all`,
                `Only rocks`,
                `Sunken ships`,
              ],
              correctIndex: 1,
              explanation: `Scientists found entire ecosystems near hydrothermal vents (cracks in the ocean floor releasing heat and chemicals) where creatures get energy from chemicals, not sunlight. This even changed how scientists think about where life might exist elsewhere in the universe.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `Why does the ocean MATTER for all life on Earth?`,
              options: [
                `It doesn't really matter`,
                `It produces much of our oxygen, controls climate, drives weather, feeds billions, and holds huge biodiversity`,
                `Only for fish`,
                `Just for swimming`,
              ],
              correctIndex: 1,
              explanation: `The ocean produces a huge share of our oxygen (via tiny phytoplankton), absorbs heat and carbon dioxide to help control climate, drives weather and the water cycle, feeds billions, and holds enormous biodiversity. A healthy ocean means a healthy planet.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What does Nova say connects exploring the ocean to exploring the cosmos?`,
              options: [
                `Nothing connects them`,
                `The same curiosity that reaches for the stars can dive into the deep, and the same wonder can make us cherish and protect our planet`,
                `They're completely separate`,
                `The ocean is in space`,
              ],
              correctIndex: 1,
              explanation: `Nova teaches that the same curiosity driving us to explore the cosmos can drive us to explore the deep ocean, one of the greatest frontiers right on our own planet. And the same wonder that makes us love the cosmos can make us cherish and protect our living blue world.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `We've mapped Mars better than our own ocean floor. Does it surprise you that one of the least-explored places is right here on Earth?` },
            { id: `r2`, text: `Deep-sea creatures near hydrothermal vents live on chemicals, not sunlight. How does that change your idea of where life can exist, even on other worlds?` },
            { id: `r3`, text: `If you could pilot a submarine to any ocean zone, which would you explore, and what would you hope to find?` },
            { id: `r4`, text: `The ocean gives us oxygen, climate control, and food. What's one way you think people could better care for this frontier we depend on?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Ocean exploration is one of the most exciting frontiers in science, and it's far from finished. Marine biologists, oceanographers, engineers, and explorers are still discovering new species, mapping the seafloor, and learning how the ocean shapes our climate and our lives. New technology, like advanced robots and submarines, is opening up the deep sea like never before. The ocean also holds possible solutions to challenges, from new medicines found in sea creatures to clues about life elsewhere in the universe. Nova's note: you live on a planet that's still largely unexplored. The age of exploration isn't over. In many ways, especially in the deep ocean, it's just beginning.`,
          familyAdventure: `Family Ocean Dive. As a family, take a virtual dive into the ocean. Look up videos of deep-sea creatures (anglerfish, glowing jellyfish, giant tube worms at hydrothermal vents) and the ocean zones. Talk about how each creature is adapted to its zone. Then discuss: if your family could fund ONE ocean expedition, what part of the deep would you explore and why? You're thinking like ocean explorers planning a real mission.`,
          creativePrompt: {
            intro: `Imagine you're an ocean explorer keeping a journal as your submarine descends through all the zones. Write your journal of the dive.`,
            floor: `Write at least 5 sentences. Describe descending through at least three zones and one creature you encounter.`,
            stretch: `Write 8 to 10 sentences. Take the reader down through the zones in order, describing how the light, temperature, pressure, and creatures change.`,
            open: `Write as much as you want. Write a full submarine dive journal. Descend from the bright sunlight zone all the way to the deepest trenches, describing each zone in order: how the light fades, the cold deepens, the pressure builds, and the creatures grow stranger and more wondrous (glowing fish, blind hunters, vent ecosystems). Capture the awe and a little fear of exploring Earth's last frontier. Make it vivid and scientifically grounded.`,
            frames: [
              `Dive log, entry one: we begin our descent in the sunlight zone, where ___.`,
              `As we sink into the twilight zone, ___.`,
              `In the midnight zone, total darkness, until suddenly ___.`,
              `Deeper still, in the abyss, the pressure ___.`,
              `At the very bottom, in the trenches, we discover ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explain why the deep ocean is Earth's last frontier, the zones of the deep, the amazing adaptations of deep-sea life, and why the ocean matters to all life on Earth. You even descended through every zone in order. Next lesson: we leave Earth entirely to search for other worlds orbiting distant stars. EXOPLANETS: WORLDS BEYOND OUR SOLAR SYSTEM. See you there. — Nova.`,
          badge: `ocean-explorer`,
          badgeName: `Ocean Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
