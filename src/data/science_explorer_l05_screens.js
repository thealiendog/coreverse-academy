// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L05 — Animals: How They Live and Move
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-LS1-1 / 1-LS1-2
// REWRITE v2 (May 2026): Grade 1 accessible, MAMMAL / BIRD / FISH 3-bucket
// identification game tests classifying animals into the three classic groups
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Last lesson we explored PLANTS. Today, my favorite — ANIMALS! I'm an otter, so I'm an animal too! Animals are everywhere — in oceans, forests, deserts, the sky, even your house! Today you'll learn the big animal groups and what we all need to live! Let's go!`,
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
            `Earth is HOME to so many animals it's almost impossible to count them all!`,
            `Scientists have named over 1.5 MILLION different kinds of animals — and they think there might be MILLIONS more they haven't discovered yet! Animals live EVERYWHERE! The biggest animal on Earth is the blue whale (longer than 3 school buses!). The smallest are tiny insects you need a magnifying glass to see! From the deepest ocean to your backyard — animals are there!`,
          ],
          image: `/explorer-assets/science/l05-s1-animal-world.webp`,
          imageCaption: `Over 1.5 million kinds of animals!`,
          vocab: [
            { word: `animal`,     definition: `A living thing that moves around and eats other living things.`,
              audioPrompt: `An animal is a living thing that moves around and eats other living things. Unlike plants, animals can't make their own food. We have to find it! Animals also have senses to help us find food and notice danger!` },
            { word: `kinds`,      definition: `Different types.`,
              audioPrompt: `Kinds means different types. There are over 1.5 million kinds of animals on Earth. From tiny mites to giant whales. From birds that fly to fish that swim. Each kind has special features!` },
            { word: `everywhere`, definition: `In all places.`,
              audioPrompt: `Everywhere means in all places. Animals live everywhere on Earth — even places that seem impossible. The freezing arctic. The deep ocean. Hot deserts. Wherever there's food, water, and shelter!` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Animals vs. Plants`,
          paragraphs: [
            `Both animals and plants are LIVING THINGS! But they're VERY different!`,
            `Plants stay rooted in one spot — animals MOVE! Plants make their OWN food from sunlight — animals must FIND food! Plants have leaves and roots — animals have eyes, mouths, and bodies for moving! Plants live for years just standing there — animals run, swim, fly, crawl, climb! Two huge groups of life, with very different lifestyles!`,
          ],
          image: `/explorer-assets/science/l05-s2-animals-vs-plants.webp`,
          imageCaption: `Animals MOVE and FIND food. Plants stay still and MAKE food!`,
          vocab: [
            { word: `move`,      definition: `To go from place to place.`,
              audioPrompt: `To move is to go from place to place. Animals move. Plants don't (mostly). Animals walk, run, fly, swim, crawl, hop, climb. Some animals move just a little. Some move enormous distances!` },
            { word: `find food`, definition: `To search for and eat food.`,
              audioPrompt: `To find food means to search for and eat food. Animals must find food. We can't make it like plants do. Some animals eat plants. Some eat other animals. Some eat both!` },
            { word: `lifestyle`, definition: `How a living thing lives.`,
              audioPrompt: `A lifestyle is how a living thing lives. Animals and plants have very different lifestyles. Plants are slow, still, sunlight-fed. Animals are active, moving, food-hunting. Both work brilliantly!` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Animal Group 1: MAMMALS`,
          paragraphs: [
            `Scientists sort animals into GROUPS based on their features! First group — MAMMALS!`,
            `Mammals have FUR or HAIR! They breathe AIR! They're WARM-BLOODED (their bodies stay warm inside)! Most mammals have BABIES (not eggs)! And mother mammals feed their babies MILK! You're a mammal! So am I (otter!). So are dogs, cats, cows, elephants, monkeys, whales, bats, mice, horses! Even whales are mammals — they come up for air and feed milk to their babies!`,
          ],
          image: `/explorer-assets/science/l05-s3-mammals.webp`,
          imageCaption: `Mammals: fur or hair, warm-blooded, mothers feed babies milk!`,
          vocab: [
            { word: `mammal`,      definition: `An animal with fur or hair that feeds its babies milk.`,
              audioPrompt: `A mammal is an animal with fur or hair that feeds its babies milk. Cats, dogs, otters, elephants, whales — all mammals. You're a mammal too! We're warm-blooded and breathe air!` },
            { word: `fur or hair`, definition: `What mammals are covered with.`,
              audioPrompt: `Fur or hair is what mammals are covered with. All mammals have some kind of fur or hair. Even whales have a few hairs. Even people — your head hair, eyebrows, eyelashes! Easy way to spot a mammal!` },
            { word: `milk`,        definition: `Special food mother mammals make.`,
              audioPrompt: `Milk is special food mother mammals make to feed their babies. Baby mammals — including baby otters and baby humans — drink milk from their mothers when they're small. Only mammals do this!` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Animal Groups 2 & 3: BIRDS and FISH`,
          paragraphs: [
            `Next two groups — BIRDS and FISH!`,
            `BIRDS have FEATHERS, WINGS, and BEAKS! Most fly through the air! They lay EGGS! From tiny hummingbirds to huge eagles! From colorful parrots to penguins (which are birds — they just don't fly)! FISH live UNDERWATER! They have SCALES and FINS! They breathe through GILLS, not lungs! From tiny goldfish to giant sharks! Birds rule the sky. Fish rule the water!`,
          ],
          image: `/explorer-assets/science/l05-s4-birds-fish.webp`,
          imageCaption: `Birds: feathers, wings, beaks, lay eggs! Fish: live in water, scales, fins, gills!`,
          vocab: [
            { word: `bird`,  definition: `An animal with feathers, wings, and a beak.`,
              audioPrompt: `A bird is an animal with feathers, wings, and a beak. Birds lay eggs. Most birds fly — but a few don't, like penguins, ostriches, and emus. Over 10,000 kinds of birds on Earth!` },
            { word: `fish`,  definition: `An animal that lives underwater with scales, fins, and gills.`,
              audioPrompt: `A fish is an animal that lives underwater. Fish have scales covering their bodies, fins to help them swim, and gills to take oxygen from the water. Over 33,000 kinds of fish!` },
            { word: `gills`, definition: `What fish use to breathe underwater.`,
              audioPrompt: `Gills are what fish use to breathe underwater. Instead of lungs like us, fish have gills on the sides of their heads. Water flows through. Tiny structures pull oxygen out. That's how fish breathe!` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `More Groups: REPTILES, AMPHIBIANS, INSECTS`,
          paragraphs: [
            `Three more big groups to meet!`,
            `REPTILES have SCALES and lay eggs on land! They're COLD-BLOODED (their temperature matches their surroundings)! Lizards, snakes, turtles, alligators, crocodiles! AMPHIBIANS start life IN water (with gills) and grow up LIVING on land (with lungs)! Frogs, toads, salamanders! They have wet, smooth skin! INSECTS have SIX LEGS, hard outer shells, and usually wings! Bees, ants, butterflies, beetles! Insects are by far the most NUMEROUS animals — over a million kinds!`,
          ],
          image: `/explorer-assets/science/l05-s5-reptiles-amphibians-insects.webp`,
          imageCaption: `Reptiles: scales, eggs on land. Amphibians: water-then-land. Insects: 6 legs!`,
          vocab: [
            { word: `reptile`,   definition: `Cold-blooded animal with scales.`,
              audioPrompt: `A reptile is a cold-blooded animal with scales. Lizards, snakes, turtles, crocodiles. Reptiles lay eggs on land. Their body temperature matches their surroundings — that's what cold-blooded means!` },
            { word: `amphibian`, definition: `Animal that starts life in water and lives on land as an adult.`,
              audioPrompt: `An amphibian starts life in water and lives on land as an adult. Frogs are the most famous! Baby frogs (tadpoles) live in water with gills. Adult frogs live on land with lungs. Amphibian means "two lives"!` },
            { word: `insect`,    definition: `Animal with 6 legs and a hard outer shell.`,
              audioPrompt: `An insect is an animal with 6 legs and a hard outer shell. Bees, ants, butterflies, beetles, dragonflies — all insects! Most have wings too. Over a million kinds — more than all other animals combined!` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What All Animals Need`,
          paragraphs: [
            `Every kind of animal is different! But ALL animals need certain things to survive!`,
            `FOOD — every animal must eat! WATER — every animal must drink! AIR — every animal needs to breathe (fish breathe water, but they still need oxygen from it)! SHELTER — a safe place to rest, sleep, and hide from danger! SPACE — room to move and find food! And most animals need OTHERS OF THEIR KIND — for friendship, family, and reproducing! When all these needs are met, animals THRIVE!`,
          ],
          image: `/explorer-assets/science/l05-s6-what-animals-need.webp`,
          imageCaption: `All animals need: food, water, air, shelter, space, others of their kind!`,
          vocab: [
            { word: `shelter`, definition: `A safe place to rest and hide.`,
              audioPrompt: `Shelter is a safe place to rest and hide. Every animal needs shelter. Birds have nests. Bears have caves. Fish have rocks and reefs. Even humans need shelter — that's why we have houses!` },
            { word: `space`,   definition: `Room to live and move.`,
              audioPrompt: `Space is room to live and move. Animals need space to find food, raise babies, and avoid danger. Some animals need a lot — a tiger needs miles. Some need very little. Protecting wild places matters!` },
            { word: `thrive`,  definition: `To do really well.`,
              audioPrompt: `To thrive means to do really well. Animals thrive when all their needs are met. Plenty of food, water, shelter, space. Thriving animals are healthy, active, and have babies. Knowing what they need helps us help them!` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 animals. Drag each one — is it a MAMMAL (fur, milk!), a BIRD (feathers, wings!), or a FISH (scales, gills!)?`,
          buckets: [
            { id: `mammal`, label: `🐾 MAMMAL`, color: `#92400E` },
            { id: `bird`,   label: `🦅 BIRD`,   color: `#FBBF24` },
            { id: `fish`,   label: `🐟 FISH`,   color: `#0EA5E9` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `An otter that has fur and feeds its babies milk`,
              matchPhrase: `Yes! MAMMAL! Otters have fur and feed milk to their babies. Just like Cosmo! Mammals all the way!`,
              correctMatch: `mammal` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `An eagle with feathers and wings that lays eggs in a nest`,
              matchPhrase: `Right! BIRD! Feathers, wings, beaks, lay eggs. Eagles are birds. They rule the sky!`,
              correctMatch: `bird` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `A salmon that swims with fins and breathes through gills`,
              matchPhrase: `Yes! FISH! Fins, scales, gills, lives underwater. Salmon are fish through and through!`,
              correctMatch: `fish` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `A dog with fur that drank milk from its mom as a puppy`,
              matchPhrase: `Right! MAMMAL! Fur and milk-feeding. Dogs are mammals. So are you! Same group!`,
              correctMatch: `mammal` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `How are ANIMALS different from PLANTS?`,
              options: [`They're not different`, `Animals move and find food. Plants stay still and make their own food.`, `Animals are smaller`, `Plants don't exist`],
              correctIndex: 1,
              explanation: `Big difference! Animals move and find food. Plants stay rooted and make food from sunlight!` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What makes an animal a MAMMAL?`,
              options: [`It can fly`, `It has fur or hair, and mothers feed babies milk`, `It lives underwater`, `It has scales`],
              correctIndex: 1,
              explanation: `Mammals have fur or hair, breathe air, are warm-blooded, and mothers feed babies milk!` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What do FISH use to breathe underwater?`,
              options: [`Lungs like us`, `Gills — which pull oxygen from water`, `They don't breathe`, `Their mouths`],
              correctIndex: 1,
              explanation: `Gills! Fish breathe by passing water over their gills, which pull oxygen out!` },
            { id: `l05-q4`, format: `true-false`,
              question: `Insects have SIX LEGS and are the most numerous animals on Earth.`,
              correctAnswer: true,
              explanation: `True! All insects have 6 legs. Over a million kinds — more than ALL other animals combined!` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `All animals need food, water, air, shelter, space, and others of their ___.`,
              options: [`kind`, `color`, `size`, `age`],
              correctIndex: 0,
              explanation: `Kind! Animals need others of their kind for friendship, family, and reproducing!` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Frogs start life in WATER and grow up to live on LAND. What group are they in?`,
              options: [`Mammals`, `Amphibians — they live "two lives"`, `Fish`, `Birds`],
              correctIndex: 1,
              explanation: `Amphibians! Amphibian means "two lives." Tadpoles in water with gills. Adult frogs on land with lungs!` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists called ZOOLOGISTS spend their whole lives studying animals! Marine biologists study ocean animals. Ornithologists study birds. Entomologists study insects! And they're STILL discovering new animals — sometimes hundreds every year! Most new discoveries are tiny creatures in the deep ocean or rainforests! Maybe one of those future scientists is YOU!`,
          familyAdventure: `Become ANIMAL DETECTIVES together! Go for a walk outside (or just look out the window)! Count how many animals you can spot — birds, squirrels, bugs, dogs, fish in a pond! For each one, decide what group it belongs to: mammal, bird, fish, reptile, amphibian, or insect! See how many different groups you can spot!`,
          creativePrompt: `Pick your FAVORITE animal! On paper, draw it! Then write: 1) What GROUP it belongs to. 2) What it EATS. 3) Where it LIVES. 4) One COOL thing about it! For a 3-sentence floor: write one sentence each for group, food, and home. For a 5-sentence stretch: add 2 more sentences with cool facts! Show your animal page to someone!`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Awesome, {name}! You now know about ANIMALS — the 6 main groups (mammals, birds, fish, reptiles, amphibians, insects)! You can spot what group any animal belongs to! How they differ from plants! What they all need to survive! The whole animal kingdom is more interesting now! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L05] Loaded: "Animals" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
