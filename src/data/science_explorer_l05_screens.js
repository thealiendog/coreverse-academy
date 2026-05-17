// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L05 — Animals: How They Live and Move
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-LS1-1 / 1-LS1-2
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L05 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-05`,
      title:     `Animals: How They Live and Move`,
      duration:  12,
      xpReward:  50,
      badge:     `animal-explorer`,
      badgeName: `Animal Explorer`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Cosmo here. Last lesson we explored PLANTS. Today, my favorite — ANIMALS! I'm an otter, so I'm an animal too. Animals are everywhere — in oceans, forests, deserts, the sky, even your house. We come in TONS of different kinds. Today you'll learn the big animal groups, what makes us different from plants, and what we all need to live. Let's go!`,
          headline: `Animals: How They Live and Move`,
          subtitle: `From otters to elephants to insects — the amazing animal world`,
          visual: `/explorer-assets/science/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Animal World`,
          paragraphs: [
            `Earth is HOME to so many animals it's almost impossible to count them all.`,
            `Scientists have named over 1.5 MILLION different kinds of animals — and they think there might be MILLIONS more they haven't discovered yet. Animals live EVERYWHERE. The biggest animal on Earth is the blue whale (longer than three school buses!). The smallest are tiny insects you need a magnifying glass to see. From the deepest ocean to the tallest mountain to your backyard — animals are there.`,
          ],
          image: `/explorer-assets/science/l05-s1-animal-world.webp`,
          imageCaption: `Over 1.5 million kinds of animals. From tiny insects to giant whales. Animals live everywhere.`,
          vocab: [
            { word: `animal`,         definition: `A living thing that moves around and eats other living things.`,
              audioPrompt: `An animal, {name}, is a living thing that moves around and eats other living things. Unlike plants, animals can't make their own food. We have to find it. Animals also have senses — eyes, ears, noses — to help us find food and notice danger. There are over 1.5 million kinds of animals on Earth.` },
            { word: `kinds`,          definition: `Different types. There are over 1.5 MILLION KINDS of animals.`,
              audioPrompt: `Kinds, {name}, means different types. There are over 1.5 million kinds of animals on Earth. From tiny mites to giant whales. From birds that fly to fish that swim to bugs that crawl. Each kind has special features that help it survive in its own habitat. The variety is incredible.` },
            { word: `everywhere`,     definition: `In all places. Animals live EVERYWHERE on Earth.`,
              audioPrompt: `Everywhere, {name}, means in all places. Animals live everywhere on Earth — even places that seem impossible. The freezing arctic. The deep dark ocean. Hot deserts. Underground. Inside other animals (yes, really!). Wherever there's food, water, and shelter, animals find a way to live.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Animals vs. Plants`,
          paragraphs: [
            `Both animals and plants are LIVING THINGS. But they're VERY different.`,
            `Plants stay rooted in one spot — animals MOVE. Plants make their OWN food from sunlight — animals must FIND food. Plants have leaves and roots — animals have eyes, mouths, and bodies for moving. Plants live for years just standing there — animals run, swim, fly, crawl, climb. Both are amazing — but they're amazing in completely different ways. Two huge groups of life, with very different lifestyles.`,
          ],
          image: `/explorer-assets/science/l05-s2-animals-vs-plants.webp`,
          imageCaption: `Animals MOVE and FIND food. Plants stay still and MAKE food. Both are living, but very different.`,
          vocab: [
            { word: `move`,           definition: `To go from place to place. Animals MOVE; plants don't.`,
              audioPrompt: `To move, {name}, is to go from place to place. Animals move; plants don't (mostly). Animals walk, run, fly, swim, crawl, hop, climb. Some animals move just a little. Some move enormous distances — like birds that fly thousands of miles every year. Movement is one of the biggest differences between animals and plants.` },
            { word: `find food`,      definition: `To search for and eat food. Animals must FIND FOOD to survive.`,
              audioPrompt: `To find food, {name}, means to search for and eat food. Animals must find food. We can't make it like plants do. Some animals eat plants — like rabbits and deer. Some eat other animals — like lions and sharks. Some eat both — like bears and humans. Finding food is what animals do most of every day.` },
            { word: `lifestyle`,      definition: `How a living thing lives. Animals and plants have very different LIFESTYLES.`,
              audioPrompt: `A lifestyle, {name}, is how a living thing lives. Animals and plants have very different lifestyles. Plants are slow, still, sunlight-fed. Animals are active, moving, food-hunting. Both lifestyles work brilliantly — for different reasons. Neither is better. Just different.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Animal Group 1: MAMMALS`,
          paragraphs: [
            `Scientists sort animals into GROUPS based on their features. First group — MAMMALS.`,
            `Mammals have FUR or HAIR. They breathe AIR. They're WARM-BLOODED (their bodies stay warm inside). Most mammals have BABIES (not eggs). And mother mammals feed their babies MILK. You're a mammal. So am I (otter!). So are dogs, cats, cows, elephants, monkeys, whales, bats, mice, horses, and many more. Even underwater mammals like whales are mammals — they come up for air and feed milk to their babies.`,
          ],
          image: `/explorer-assets/science/l05-s3-mammals.webp`,
          imageCaption: `Mammals: fur or hair, warm-blooded, breathe air, mothers feed babies milk. You're a mammal!`,
          vocab: [
            { word: `mammal`,         definition: `An animal with fur or hair that feeds its babies milk. You're a MAMMAL.`,
              audioPrompt: `A mammal, {name}, is an animal with fur or hair that feeds its babies milk. Cats, dogs, otters, elephants, whales — all mammals. You're a mammal too. We're warm-blooded, we breathe air, and most of us have babies instead of laying eggs. There are about 6,400 kinds of mammals.` },
            { word: `fur or hair`,    definition: `What mammals are covered with. All mammals have FUR OR HAIR.`,
              audioPrompt: `Fur or hair, {name}, is what mammals are covered with. All mammals have some kind of fur or hair. Even whales have a few hairs. Even people — your head hair, eyebrows, eyelashes, all the tiny hairs on your arms. Fur keeps mammals warm. It's one easy way to spot a mammal.` },
            { word: `milk`,           definition: `Special food mother mammals make to feed their babies. Mammals nurse their young with MILK.`,
              audioPrompt: `Milk, {name}, is special food mother mammals make to feed their babies. Baby mammals — including baby otters and baby humans — drink milk from their mothers when they're small. That's actually how mammals get their name. 'Mammal' comes from a word meaning 'breast.' Only mammals feed their young with milk.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Animal Groups 2 & 3: BIRDS and FISH`,
          paragraphs: [
            `Next two groups — BIRDS and FISH.`,
            `BIRDS have FEATHERS, WINGS, and BEAKS. Most fly through the air. They lay EGGS. From tiny hummingbirds to huge eagles. From colorful parrots to penguins (which are birds — they just don't fly). FISH live UNDERWATER. They have SCALES and FINS. They breathe through GILLS, not lungs. From tiny goldfish to giant sharks. From salmon in rivers to angelfish in coral reefs. Birds rule the sky. Fish rule the water.`,
          ],
          image: `/explorer-assets/science/l05-s4-birds-fish.webp`,
          imageCaption: `Birds: feathers, wings, beaks, lay eggs. Fish: live in water, scales, fins, breathe through gills.`,
          vocab: [
            { word: `bird`,           definition: `An animal with feathers, wings, and a beak. Birds lay EGGS.`,
              audioPrompt: `A bird, {name}, is an animal with feathers, wings, and a beak. Birds lay eggs. Most birds fly — but a few don't, like penguins, ostriches, and emus. There are over 10,000 kinds of birds on Earth. They live everywhere from the arctic to the tropics. Birds are one of the most diverse animal groups.` },
            { word: `fish`,           definition: `An animal that lives underwater, with scales, fins, and gills.`,
              audioPrompt: `A fish, {name}, is an animal that lives underwater. Fish have scales covering their bodies, fins to help them swim, and gills to take oxygen from the water. They've lived in oceans, rivers, and lakes for hundreds of millions of years. There are over 33,000 kinds of fish — more than any other group of animals with backbones.` },
            { word: `gills`,          definition: `What fish use to breathe underwater. GILLS pull oxygen from water.`,
              audioPrompt: `Gills, {name}, are what fish use to breathe underwater. Instead of lungs like us, fish have gills on the sides of their heads. Water flows through the gills, and tiny structures pull oxygen out of the water. That's how fish breathe without coming up for air. Mammals like whales have to come up — but fish never do.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `More Groups: REPTILES, AMPHIBIANS, INSECTS`,
          paragraphs: [
            `Three more big groups to meet.`,
            `REPTILES have SCALES and lay eggs on land. They're COLD-BLOODED (their temperature matches their surroundings). Lizards, snakes, turtles, alligators, crocodiles. AMPHIBIANS start life IN water (with gills) and grow up LIVING on land (with lungs). Frogs, toads, salamanders. They have wet, smooth skin. INSECTS have SIX LEGS, hard outer shells, and usually wings. Bees, ants, butterflies, beetles, mosquitoes, ladybugs. Insects are by far the most NUMEROUS animals — there are over a million kinds.`,
          ],
          image: `/explorer-assets/science/l05-s5-reptiles-amphibians-insects.webp`,
          imageCaption: `Reptiles: scales, eggs on land. Amphibians: water-then-land. Insects: six legs, often wings.`,
          vocab: [
            { word: `reptile`,        definition: `Cold-blooded animal with scales. Lizards, snakes, turtles are REPTILES.`,
              audioPrompt: `A reptile, {name}, is a cold-blooded animal with scales. Lizards, snakes, turtles, crocodiles. Reptiles lay eggs on land. Their body temperature matches their surroundings — that's what 'cold-blooded' means. They warm up in the sun and cool down in shade. Many reptiles live in warm places for this reason.` },
            { word: `amphibian`,      definition: `Animal that starts life in water and lives on land as an adult. Frogs are AMPHIBIANS.`,
              audioPrompt: `An amphibian, {name}, is an animal that starts life in water and lives on land as an adult. Frogs are the most famous example. Baby frogs (tadpoles) live in water and breathe through gills. Adult frogs live on land and breathe with lungs. Salamanders and toads are amphibians too. The word 'amphibian' means 'two lives.'` },
            { word: `insect`,         definition: `Animal with SIX LEGS and a hard outer shell. Bees and butterflies are INSECTS.`,
              audioPrompt: `An insect, {name}, is an animal with six legs and a hard outer shell. Bees, ants, butterflies, beetles, dragonflies — all insects. Most insects also have wings. There are MORE kinds of insects than all other animals combined — over a million kinds. They're the most successful group of animals on Earth.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What All Animals Need`,
          paragraphs: [
            `Every kind of animal is different. But ALL animals need certain things to survive.`,
            `FOOD — every animal must eat. WATER — every animal must drink. AIR — every animal needs to breathe (fish breathe water, but they still need oxygen from it). SHELTER — a safe place to rest, sleep, and hide from danger. SPACE — room to move and find food. And most animals need OTHERS OF THEIR KIND — for friendship, family, and reproducing. When all these needs are met, animals THRIVE. When they're missing, animals struggle. That's why protecting animals' homes matters.`,
          ],
          image: `/explorer-assets/science/l05-s6-what-animals-need.webp`,
          imageCaption: `All animals need: food, water, air, shelter, space, and others of their kind. Protect their homes.`,
          vocab: [
            { word: `shelter`,        definition: `A safe place to rest and hide. Every animal needs SHELTER.`,
              audioPrompt: `Shelter, {name}, is a safe place to rest and hide. Every animal needs shelter. Birds have nests. Bears have caves or dens. Fish have rocks and reefs. Bugs have holes and leaves. Even humans need shelter — that's why we have houses. Shelter protects animals from weather, predators, and danger.` },
            { word: `space`,          definition: `Room to live and move. Animals need SPACE to find food and raise babies.`,
              audioPrompt: `Space, {name}, is room to live and move. Animals need space to find food, raise babies, and avoid danger. Some animals need a lot — a tiger needs miles and miles. Some need very little — a tiny insect needs only a small bush. When we build cities and farms, we sometimes take animals' space. That's why protecting wild places matters.` },
            { word: `thrive`,         definition: `To do really well. Animals THRIVE when all their needs are met.`,
              audioPrompt: `To thrive, {name}, means to do really well. Animals thrive when all their needs are met — plenty of food, water, shelter, space, and others of their kind. Thriving animals are healthy, active, and have babies. Struggling animals are weak, sad, and slowly disappear. Knowing what animals need helps us help them thrive.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `Animals must FIND and EAT food because they can't make their own.`,
              matchPhrase: `Yes! Unlike plants, animals can't make food from sunlight. We have to find it. Some eat plants. Some eat other animals. Some eat both. But all animals must find food to survive.`,
              correctMatch: `fact` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `Animals MOVE to find food, escape danger, and find shelter.`,
              matchPhrase: `True! Movement is what makes animals different from plants. Birds fly. Fish swim. Mammals run, walk, or climb. Insects crawl or fly. All animals move in some way to survive.`,
              correctMatch: `fact` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `Animals can make their OWN food from sunlight just like plants do.`,
              matchPhrase: `Not at all! Animals cannot do photosynthesis. Only plants can make food from sunlight. Animals must find and eat food made by plants — or eat other animals that ate plants.`,
              correctMatch: `myth` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `All animals are the SAME — same bodies, same needs, same behaviors.`,
              matchPhrase: `Definitely not! Animals are incredibly different. Mammals, birds, fish, reptiles, amphibians, insects — each group has different features. Even within groups, every kind is unique.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `How are ANIMALS different from PLANTS?`,
              options: [`They're not different`, `Animals move and find food. Plants stay still and make their own food.`, `Animals are smaller`, `Plants don't exist`],
              correctIndex: 1,
              explanation: `Big difference! Animals move around and must find food. Plants stay rooted and make their own food from sunlight. Two very different lifestyles for two kinds of living things.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What makes an animal a MAMMAL?`,
              options: [`It can fly`, `It has fur or hair, and mothers feed babies milk`, `It lives underwater`, `It has scales`],
              correctIndex: 1,
              explanation: `Mammals have fur or hair, breathe air, are warm-blooded, and mothers feed their babies milk. You're a mammal! So are dogs, cats, otters, and whales.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What do FISH use to breathe underwater?`,
              options: [`Lungs like us`, `Gills — which pull oxygen from water`, `They don't breathe`, `Their mouths`],
              correctIndex: 1,
              explanation: `Gills! Fish breathe by passing water over their gills, which pull oxygen out. That's why fish can stay underwater — they don't need to come up for air like whales (mammals) do.` },
            { id: `l05-q4`, format: `true-false`,
              question: `Insects have SIX LEGS and are the most numerous animals on Earth.`,
              correctAnswer: true,
              explanation: `True! All insects have six legs (that's a defining feature). And there are more kinds of insects than ALL other animals combined — over a million kinds. They're the most successful group on Earth.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `All animals need food, water, air, shelter, space, and others of their ___.`,
              options: [`kind`, `color`, `size`, `age`],
              correctIndex: 0,
              explanation: `Kind! Animals need others of their kind for friendship, family, and reproducing. Plus food, water, air, shelter, and space. When all needs are met, they thrive.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Frogs start life in WATER and grow up to live on LAND. What group are they in?`,
              options: [`Mammals`, `Amphibians — they live "two lives"`, `Fish`, `Birds`],
              correctIndex: 1,
              explanation: `Amphibians! Amphibian means "two lives." Baby frogs (tadpoles) live in water with gills. Adult frogs live on land with lungs. Salamanders and toads are amphibians too.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists called ZOOLOGISTS spend their whole lives studying animals. Marine biologists study ocean animals. Ornithologists study birds. Entomologists study insects. There are scientists studying every group. And they're STILL discovering new animals — sometimes hundreds every year. Most new discoveries are tiny creatures in the deep ocean or rainforests. The animal kingdom still has secrets — and curious people get to uncover them. Maybe one of those future scientists is YOU.`,
          familyAdventure: `Become ANIMAL DETECTIVES together. Go for a walk outside (or just look out the window). Count how many animals you can spot — birds, squirrels, bugs, dogs, fish in a pond, anything. For each one, decide what group it belongs to: mammal, bird, fish, reptile, amphibian, or insect. See how many different groups you can spot in one outing.`,
          creativePrompt: `Pick your FAVORITE animal. On paper, draw it. Then write: 1) What GROUP it belongs to (mammal, bird, fish, reptile, amphibian, insect). 2) What it EATS. 3) Where it LIVES. 4) One COOL thing about it that not everyone knows. Show your animal page to someone — teach them about it.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Awesome, {name}! You now know about ANIMALS — the six main groups (mammals, birds, fish, reptiles, amphibians, insects), how they differ from plants, and what they all need to survive. You can spot what group any animal belongs to. The whole animal kingdom is more interesting now that you know how to look at it. See you in the next lesson!`,
          badge: `animal-explorer`,
          badgeName: `Animal Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L05] Loaded: "Animals" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
