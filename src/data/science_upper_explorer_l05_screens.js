// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L05 — Animals: How They Live and Move
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-LS1-1, 4-LS1-1 — Animals get and use energy and matter
//            from food; animal structures support survival
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what makes animals different from plants,
//        classification (vertebrates/invertebrates, major groups),
//        adaptations and survival strategies, why animal diversity matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-05`,
      title: `Animals: How They Live and Move`,
      duration: 18,
      xpReward: 75,
      badge: `animal-expert`,
      badgeName: `Animal Expert`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we covered plants, the world's solar-powered food makers. Today we cover the OTHER huge kingdom of life: ANIMALS. Animals can't make their own food, so we have to find it. To find food, most of us move. To move, we evolved muscles, nervous systems, brains. From microscopic insects to blue whales the size of buses, the animal kingdom is one of the most amazing collections of living things in the universe. And yes, we otters are part of it. Let's go.`,
          headline: `Animals`,
          subtitle: `How they survive, move, and make Earth one of the most amazing places in the universe`,
          visual: `/ue-assets/science/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes Animals Different`,
          paragraphs: [
            `ANIMALS are multi-cellular living things that share a few important features. (1) They CAN'T make their own food. Animals have to eat plants, fungi, or other animals to get energy. (2) Their cells DON'T have cell walls (plant cells do). This makes animal bodies more flexible and capable of movement. (3) Most animals can MOVE at some point in their lives. Even animals that look stuck in place, like corals or barnacles, have larvae that swim before settling down. (4) Animals usually have specialized cells for things like sensing, digesting food, and moving.`,
            `Because animals can't photosynthesize, they evolved different strategies for getting energy. Some are HERBIVORES (plant eaters, like cows and deer). Some are CARNIVORES (meat eaters, like lions and otters). Some are OMNIVORES (eat both, like humans and bears). Some are DECOMPOSERS (eat dead things, like vultures). Each of these strategies has evolved special body parts, behaviors, and digestive systems. The animal kingdom shows enormous creativity in how to solve the basic problem: "I need energy. How do I get it?"`,
          ],
          image: `/ue-assets/science/l05-s1-animals-overview.webp`,
          imageCaption: `Can't make food. Need to find it. Built for movement.`,
          vocab: [
            { word: `animal`,
              definition: `A multi-cellular living thing that can't make its own food and usually has the ability to move. Members of the Animal Kingdom, which includes everything from ants to elephants.`,
              audioPrompt: `An animal is a multi-cellular living thing, {name}. Animals can't make their own food the way plants can, so they have to eat plants, fungi, or other animals for energy. Most animals can move at some point in their lives. Animal cells don't have cell walls, which makes animal bodies more flexible and capable of movement. There are about 1.5 million known animal species on Earth, from microscopic mites to giant blue whales. They include insects, fish, birds, reptiles, mammals, and many other groups.` },
            { word: `herbivore`,
              definition: `An animal that eats only plants. Herbivores have digestive systems designed to break down plant material. Examples: cows, deer, rabbits, elephants.`,
              audioPrompt: `A herbivore is an animal that eats only plants, {name}. Cows, deer, rabbits, and elephants are herbivores. They have digestive systems designed to break down tough plant material like cellulose. Many herbivores have flat teeth for grinding plants, long digestive tracts for processing plant fiber, and specialized gut bacteria that help digest it. Herbivores are crucial to food chains because they transfer energy from plants to other animals. When a carnivore eats a herbivore, the energy that started in plants moves up the food chain.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Vertebrates and Invertebrates`,
          paragraphs: [
            `One of the most important divisions in the animal kingdom is between VERTEBRATES (animals with a backbone) and INVERTEBRATES (animals without a backbone). VERTEBRATES are split into five major CLASSES. MAMMALS have fur or hair, feed their young milk, and are usually warm-blooded (otters, humans, bats, whales). BIRDS have feathers, lay eggs, and are warm-blooded (eagles, penguins, parrots). REPTILES have scales and lay eggs (snakes, lizards, alligators). AMPHIBIANS spend part of their lives in water and part on land (frogs, salamanders). FISH live in water and breathe with gills (sharks, salmon, goldfish).`,
            `INVERTEBRATES vastly outnumber vertebrates. They include INSECTS (ants, beetles, bees, butterflies), ARACHNIDS (spiders, scorpions), CRUSTACEANS (crabs, lobsters, shrimp), MOLLUSKS (snails, octopuses, clams), WORMS, and many other groups. About 97 percent of all known animal species are invertebrates. Insects alone account for over a million known species, with more being discovered constantly. When humans think of animals, we usually picture vertebrates because we ARE vertebrates. But invertebrates have been winning the species-counting contest for hundreds of millions of years.`,
          ],
          image: `/ue-assets/science/l05-s2-classification.webp`,
          imageCaption: `Backbone or no backbone. Then mammals, birds, fish, reptiles, amphibians, and many more.`,
          vocab: [
            { word: `vertebrate`,
              definition: `An animal that has a backbone. Vertebrates include mammals, birds, reptiles, amphibians, and fish. Humans are vertebrates.`,
              audioPrompt: `A vertebrate is an animal that has a backbone, {name}. Vertebrates include mammals like otters, dogs, and humans. Birds like eagles and parrots. Reptiles like snakes and lizards. Amphibians like frogs and salamanders. Fish like salmon and sharks. The backbone (also called the spinal column or vertebral column) protects the spinal cord, which carries nerve signals between the brain and body. Vertebrates make up only about 3 percent of all known animal species, but they include the largest and most familiar animals.` },
            { word: `invertebrate`,
              definition: `An animal without a backbone. About 97% of all known animal species are invertebrates, including insects, spiders, crabs, snails, octopuses, and worms.`,
              audioPrompt: `An invertebrate is an animal without a backbone, {name}. About 97 percent of all known animal species are invertebrates. They include insects, spiders, crabs, snails, octopuses, worms, and many more. Invertebrates come in an incredible variety of body plans. Some have exoskeletons instead of bones, like beetles and crabs. Some have soft bodies with no hard parts, like jellyfish. Some have shells, like clams and snails. Invertebrates have been on Earth far longer than vertebrates. They are far more diverse, numerous, and widespread than most people realize.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Adaptations: Built for Survival`,
          paragraphs: [
            `An ADAPTATION is a body part, behavior, or characteristic that helps an animal survive and reproduce in its environment. Animals are full of amazing adaptations. Otters have THICK FUR that keeps us warm in cold water. Camels have HUMPS that store fat for long desert journeys (not water, which is a common myth). Octopuses have CAMOUFLAGE that lets them change color to match their surroundings. Cheetahs have LONG LEGS and special muscles that let them run 70 miles per hour. Each adaptation evolved over many generations because it helped animals survive long enough to reproduce.`,
            `Adaptations also include BEHAVIORS, not just physical features. Birds MIGRATE thousands of miles to find food in different seasons. Bears HIBERNATE through winter when food is scarce. Wolves HUNT IN PACKS to take down prey too large for any one wolf. Ants WORK TOGETHER in colonies of millions, each ant doing one job. Behavioral adaptations are often just as important as physical ones. Animals that work together, communicate, or change their habits with the seasons have survived in environments where animals with only physical adaptations might struggle.`,
          ],
          image: `/ue-assets/science/l05-s3-adaptations.webp`,
          imageCaption: `Otter fur. Camel humps. Octopus camouflage. Adaptations everywhere.`,
          vocab: [
            { word: `adaptation`,
              definition: `A body part, behavior, or characteristic that helps an animal survive and reproduce in its environment. Evolved over many generations.`,
              audioPrompt: `An adaptation is a body part, behavior, or characteristic that helps an animal survive and reproduce, {name}. Otters have thick fur that keeps us warm in cold water. Camels have humps that store fat for long desert journeys. Octopuses have camouflage that lets them change color. Cheetahs have long legs for fast running. Adaptations also include behaviors. Birds migrate. Bears hibernate. Wolves hunt in packs. Each adaptation evolved over many generations because it helped animals survive in their specific environment.` },
            { word: `camouflage`,
              definition: `An adaptation that helps animals blend into their surroundings to hide from predators or sneak up on prey. Examples: stick insects, flounders, octopuses.`,
              audioPrompt: `Camouflage is an adaptation that helps animals blend into their surroundings, {name}. Animals use camouflage to hide from predators or sneak up on prey. A stick insect looks exactly like a stick. A flounder lies flat on the seafloor and matches the sand and pebbles around it. An octopus can change both color and texture in less than a second. Camouflage is one of the most widespread adaptations in the animal kingdom. It shows how natural selection favors any trait that helps an animal survive long enough to reproduce.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Animal Diversity Matters`,
          paragraphs: [
            `Earth has about 1.5 MILLION known animal species, with scientists estimating millions more haven't been discovered yet. This DIVERSITY isn't just a fun fact. Each species plays a role in its ECOSYSTEM (which we'll cover later). Bees pollinate plants we depend on for food. Predators keep prey populations in check. Decomposers like vultures and beetles clean up dead animals before they spread disease. Without enough animal diversity, ecosystems become unstable. Lose too many key species and the whole system can collapse.`,
            `Today, animal diversity faces real threats. Habitat loss, climate change, pollution, and overhunting have caused many species to become ENDANGERED or even EXTINCT. Scientists call this the "sixth mass extinction" because the rate of species loss is much higher than normal. The good news: conservation works when humans act. Otters in California's coastal waters bounced back from near-extinction. The bald eagle was on the brink in the 1960s and is now thriving. Many countries protect endangered animals through laws and reserves. Caring about animal diversity isn't just nice. It's part of how Earth's life-support systems stay healthy for everyone, including humans.`,
          ],
          image: `/ue-assets/science/l05-s4-diversity.webp`,
          imageCaption: `Diversity isn't decoration. It's how ecosystems stay healthy.`,
          vocab: [
            { word: `species`,
              definition: `A specific kind of living thing. Members of the same species look similar and can reproduce with each other. Otters, humans, and oak trees are each different species.`,
              audioPrompt: `A species is a specific kind of living thing, {name}. Members of the same species look similar and can reproduce with each other. Otters are one species. Humans are another. Oak trees are another. There are about 1.5 million known animal species on Earth, with scientists estimating millions more haven't been discovered yet. Each species has its own role in its ecosystem. When biologists talk about animal diversity, they usually mean the number of different species in a place.` },
            { word: `ecosystem`,
              definition: `A community of living things interacting with each other and their non-living environment. Includes producers, consumers, and decomposers all connected through food chains.`,
              audioPrompt: `An ecosystem is a community of living things interacting with each other and their non-living environment, {name}. A forest is an ecosystem. A coral reef. A pond. Every ecosystem includes producers (plants), consumers (animals), and decomposers (fungi and bacteria). All these organisms are connected through food chains and other relationships. If one species disappears or grows too large, it affects every other species. Healthy ecosystems are stable, resilient, and full of diverse species. Damaged ecosystems struggle to support the life that depends on them.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four animals. For each one, decide which CLASS it belongs to: MAMMAL (fur, milk, warm-blooded), BIRD/REPTILE/AMPHIBIAN/FISH (other vertebrate classes), or INVERTEBRATE (no backbone)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `mammal`,            label: `Mammal`,                color: `#F87171`, description: `Has fur or hair. Feeds young milk. Usually warm-blooded. Has a backbone.` },
            { id: `other-vertebrate`,  label: `Other Vertebrate`,      color: `#FBBF24`, description: `Bird, reptile, amphibian, or fish. Has a backbone but isn't a mammal.` },
            { id: `invertebrate`,      label: `Invertebrate`,          color: `#60A5FA`, description: `No backbone. Includes insects, spiders, mollusks, worms, and many more.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Animal #1: A sea otter`,
              clues: [
                { text: `Has thick fur to keep warm in cold ocean water.` },
                { text: `Gives birth to live pups and feeds them milk.` },
                { text: `Is warm-blooded and breathes air using lungs.` },
              ],
              correctAnswer: `mammal`,
              realWorldExample: `Sea otters are marine mammals found along Pacific coasts.`,
              explanation: `Fur. Milk. Warm-blooded. Lungs. Pure mammal. Sea otters are one of Cosmo's favorite groups, and a great example of a mammal that's adapted to life in water.`,
            },
            {
              id: `case-2`,
              caseTitle: `Animal #2: A green tree python`,
              clues: [
                { text: `Has bright green scales and curls around tree branches.` },
                { text: `Cold-blooded — it can't generate its own body heat.` },
                { text: `Lays eggs and breathes air through lungs.` },
              ],
              correctAnswer: `other-vertebrate`,
              realWorldExample: `Green tree pythons are striking snakes found in New Guinea and Australia.`,
              explanation: `Scales. Cold-blooded. Lays eggs. Has a backbone. This is a reptile, one of the four other vertebrate classes (besides mammals). Snakes are vertebrates even though they don't have legs, because they have a backbone running the length of their bodies.`,
            },
            {
              id: `case-3`,
              caseTitle: `Animal #3: A honeybee`,
              clues: [
                { text: `Has six legs, two pairs of wings, and a hard outer shell (exoskeleton).` },
                { text: `No internal backbone or spine.` },
                { text: `Lives in a colony with thousands of other bees.` },
              ],
              correctAnswer: `invertebrate`,
              realWorldExample: `Honeybees are some of the most important pollinators on Earth.`,
              explanation: `Six legs. Wings. Exoskeleton instead of backbone. Pure invertebrate. Bees are insects, which are by far the largest group of invertebrates. Over a million insect species have been identified, and there are probably many more yet to discover.`,
            },
            {
              id: `case-4`,
              caseTitle: `Animal #4 — The Tricky One: A whale shark`,
              clues: [
                { text: `The world's largest fish, growing up to 40 feet long.` },
                { text: `Has the word "whale" in its name but breathes through gills, not lungs.` },
                { text: `Lives in tropical oceans and eats plankton through its huge mouth.` },
              ],
              correctAnswer: `other-vertebrate`,
              realWorldExample: `Whale sharks are the largest fish species in the ocean.`,
              explanation: `Tricky because of the NAME. "Whale shark" sounds like it might be a whale (mammal). But it's a SHARK, which is a kind of fish. Sharks have gills, not lungs. They have a backbone (which makes them vertebrates) but they're not mammals. So whale sharks belong in the OTHER VERTEBRATE category, specifically as fish. Lesson: names can be misleading. "Whale shark" isn't a whale. "Sea horse" isn't a horse. The careful test is biology, not the name humans gave the animal.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `How are ANIMALS different from plants?`,
              options: [
                `Animals are larger`,
                `Animals can't make their own food (so they have to eat), their cells don't have cell walls, and most can move`,
                `Animals are smarter`,
                `Animals only live on land`,
              ],
              correctIndex: 1,
              explanation: `Animals can't make their own food, so they have to find it by eating plants, fungi, or other animals. They have cells without cell walls (more flexible). Most can move. These features evolved because animals are food-finders, not food-makers.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What's a VERTEBRATE?`,
              options: [
                `Any insect`,
                `An animal with a backbone — includes mammals, birds, reptiles, amphibians, and fish`,
                `An animal that flies`,
                `An animal without bones`,
              ],
              correctIndex: 1,
              explanation: `Vertebrates have backbones (also called spinal columns). They include mammals, birds, reptiles, amphibians, and fish. Vertebrates are only about 3% of all animal species, but they include the largest and most familiar animals.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What's an INVERTEBRATE?`,
              options: [
                `Only insects`,
                `An animal without a backbone — includes insects, spiders, mollusks, worms, and many more groups. About 97% of all animal species.`,
                `A type of mammal`,
                `An animal that lives underground`,
              ],
              correctIndex: 1,
              explanation: `Invertebrates are animals without backbones. They vastly outnumber vertebrates. About 97% of all known animal species are invertebrates. Insects alone account for over a million known species.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What's an ADAPTATION?`,
              options: [
                `A type of food`,
                `A body part, behavior, or characteristic that helps an animal survive and reproduce in its environment`,
                `A medical procedure`,
                `A genetic disease`,
              ],
              correctIndex: 1,
              explanation: `Adaptations help animals survive. Examples include thick fur, camouflage, long legs for running, or behaviors like migration or hibernation. Adaptations evolved over many generations because they helped animals survive and have offspring.` },

            { id: `l05-q5`, format: `true-false`,
              question: `True or false: Most known animal species are invertebrates.`,
              correctAnswer: true,
              explanation: `True. About 97% of all known animal species are invertebrates. Insects alone outnumber all other animals combined. Vertebrates (the group we belong to) are actually a small minority of animal life.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `What's a CARNIVORE?`,
              options: [
                `An animal that eats only plants`,
                `An animal that eats meat (other animals)`,
                `An animal that eats nothing`,
                `A type of dinosaur`,
              ],
              correctIndex: 1,
              explanation: `Carnivores eat meat. Lions, eagles, sharks, and otters are carnivores. The opposite is herbivores (plant eaters). Omnivores (like humans and bears) eat both.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `What's a SPECIES?`,
              options: [
                `Any group of animals`,
                `A specific kind of living thing whose members look similar and can reproduce with each other`,
                `Just an old word for "animal"`,
                `A type of habitat`,
              ],
              correctIndex: 1,
              explanation: `A species is a specific kind of organism. Members of the same species look similar and can reproduce with each other. About 1.5 million animal species have been identified, with many more probably still to discover.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `Why does ANIMAL DIVERSITY matter to ecosystems?`,
              options: [
                `It doesn't really matter`,
                `Each species plays a role: pollinators help plants, predators control prey, decomposers clean up — losing key species can disrupt the whole system`,
                `Only some animals matter`,
                `Only big animals are important`,
              ],
              correctIndex: 1,
              explanation: `Each species plays a role in keeping its ecosystem working. Bees pollinate. Predators keep prey numbers in check. Decomposers recycle nutrients. Lose too many species, and the system becomes unstable or collapses. This is why caring about animal diversity matters even for species you'll never see.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick an animal you find amazing (any animal — could be a pet, a wild animal, or even Cosmo). What's ONE adaptation it has that helps it survive?` },
            { id: `r2`, text: `If you could spend a day as any animal, which would you pick and why? What would your day look like?` },
            { id: `r3`, text: `Most animal species are invertebrates. Why do you think humans usually picture mammals or birds when we think "animal"?` },
            { id: `r4`, text: `Some species are endangered. Pick ONE animal in danger and brainstorm one way humans could help.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Animal diversity is one of Earth's most precious resources. Animals pollinate crops, recycle nutrients, control pests, and create the ecosystems that humans depend on. Modern conservation efforts have brought many species back from near-extinction. Sea otters were nearly wiped out by fur hunters in the 1800s. Today, protected populations are slowly recovering along California's coast (very close to where many of our Coreverse families live). When humans choose to protect animals, it can really work. The choices your generation makes about habitat, pollution, and climate will decide which species are around for the next generation.`,
          familyAdventure: `Family Backyard Safari. Spend 20 minutes outside (backyard, park, sidewalk, anywhere with plants). Look carefully for animals. Count every single one you see, including insects. Most people will find more invertebrates than they'd expect. Notice tiny ants, spiders, bees, beetles. Now you understand why scientists say most of Earth's animal diversity is invertebrate. The animal kingdom is right under your nose, mostly with six legs.`,
          creativePrompt: {
            intro: `Imagine you're a wildlife biologist studying a new animal you just discovered. Write a research note about it.`,
            floor: `Write at least 5 sentences. Describe the animal's body, where you found it, what it eats, and one adaptation that helps it survive.`,
            stretch: `Write 8 to 10 sentences. Cover the animal's classification (vertebrate or invertebrate, which group), its diet, at least two adaptations, and its role in its ecosystem.`,
            open: `Write as much as you want. Build a full wildlife report. Include physical description, classification with reasoning, diet, adaptations, habitat, behavior, and how it interacts with other species.`,
            frames: [
              `I have discovered a new animal species, which I will call ___.`,
              `It belongs to the ___ group because ___.`,
              `It eats ___ and has an adaptation called ___ that helps it ___.`,
              `Its habitat is ___.`,
              `In its ecosystem, it plays the role of ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what makes animals different from plants, name the difference between vertebrates and invertebrates, describe adaptations, and understand why animal diversity matters. Next lesson: we zoom in on ONE specific animal you happen to know intimately. YOU. The human body and how it works. See you there. — Cosmo.`,
          badge: `animal-expert`,
          badgeName: `Animal Expert`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
