export const scienceLittleStars = [
  {
    id: 'sci-3-5-01',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 1,
    title: 'Living and Non-Living Things',
    duration: '3-5 min',
    badge: 'Living Spotter',
    nextLesson: 'sci-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Cosmo! I LOVE doing science. Today we figure out what is ALIVE and what is NOT!' },
      { type: 'story', image: '/game-assets/science/puppy-living.png', guideText: 'Some things are ALIVE — they breathe, eat, grow, and move. A puppy is alive! A flower is alive! YOU are alive! Other things are not alive — they do not eat or grow!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is ALIVE?', guideText: 'Tap the living thing!',
        items: [
          { image: '/game-assets/science/puppy-living.png', label: 'Puppy', correct: true },
          { image: '/game-assets/science/rock-nonliving.png', label: 'Rock' },
          { image: '/game-assets/science/chair-nonliving.png', label: 'Chair' },
          { image: '/game-assets/science/solid-ice-cube.png', label: 'Ice cube' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/flower-living.png', guideText: 'A FLOWER is alive too! It grows from a seed, drinks water, and turns toward the sun!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is NOT ALIVE?', guideText: 'Tap the non-living thing!',
        items: [
          { image: '/game-assets/science/rock-nonliving.png', label: 'Rock', correct: true },
          { image: '/game-assets/science/puppy-living.png', label: 'Puppy' },
          { image: '/game-assets/science/flower-living.png', label: 'Flower' },
          { image: '/game-assets/science/animal-eating-food.png', label: 'Animal eating' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/chair-nonliving.png', guideText: 'A CHAIR is not alive. It does not eat or grow. It just sits there waiting for you to use it!' },
      { type: 'yes-no', scenario: 'Are you a living thing?', correctAnswer: true, image: '/game-assets/science/puppy-living.png' },
      { type: 'family', guideText: 'Tonight, walk around your home with your family. Point at things — alive or not? A plant? A book? A pet? Your hand? You are doing real science!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Living Spotter', guideText: 'You spot living things, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-02',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 2,
    title: 'What Plants Need to Grow',
    duration: '3-5 min',
    badge: 'Plant Helper',
    nextLesson: 'sci-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn what PLANTS need to grow strong!' },
      { type: 'story', image: '/game-assets/science/seed-planted-soil.png', guideText: 'Every plant starts as a tiny SEED in the soil! With the right care, that seed grows into a big plant. Plants need three things to grow: SOIL, WATER, and SUN!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does a plant need to DRINK?', guideText: 'Tap watering the plant!',
        items: [
          { image: '/game-assets/science/watering-plant.png', label: 'Water', correct: true },
          { image: '/game-assets/science/flower-living.png', label: 'A flower' },
          { image: '/game-assets/science/plant-with-sun.png', label: 'Sun' },
          { image: '/game-assets/science/material-hard-rock.png', label: 'Hard rock' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/plant-with-sun.png', guideText: 'Plants also need SUN! Sunlight gives plants ENERGY to make their food. Plants reach toward the sun to get more light!' },
      { type: 'yes-no', scenario: 'Do plants need sunlight to grow?', correctAnswer: true, image: '/game-assets/science/plant-with-sun.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a SEED in soil?', guideText: 'Tap the seed!',
        items: [
          { image: '/game-assets/science/seed-planted-soil.png', label: 'Seed in soil', correct: true },
          { image: '/game-assets/science/plant-with-sun.png', label: 'Plant in sun' },
          { image: '/game-assets/science/flower-living.png', label: 'A flower' },
          { image: '/game-assets/science/watering-plant.png', label: 'Watering' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/watering-plant.png', guideText: 'Without water, plants get THIRSTY and droopy. Without sun, plants cannot make food. Plants need both to be happy!' },
      { type: 'family', guideText: 'Tonight, find a plant at home or look outside. Does it have soil? Does it get water? Does it get sun? You are a plant scientist!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Plant Helper', guideText: 'You know what plants need, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-03',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 3,
    title: 'What Animals Need',
    duration: '3-5 min',
    badge: 'Animal Friend',
    nextLesson: 'sci-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn what ANIMALS need to live!' },
      { type: 'story', image: '/game-assets/science/animal-eating-food.png', guideText: 'Animals are alive — so they need things to stay alive too! Animals need FOOD to eat, WATER to drink, and a SHELTER to stay safe and warm. Just like us!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does this animal NEED to eat?', guideText: 'Tap the animal eating food!',
        items: [
          { image: '/game-assets/science/animal-eating-food.png', label: 'Eating food', correct: true },
          { image: '/game-assets/science/animal-drinking-water.png', label: 'Drinking water' },
          { image: '/game-assets/science/animal-shelter-burrow.png', label: 'In a burrow' },
          { image: '/game-assets/science/flower-living.png', label: 'A flower' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/animal-drinking-water.png', guideText: 'Animals need WATER too! They drink from rivers, lakes, ponds, and rain puddles!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows an animal DRINKING?', guideText: 'Tap the drinking animal!',
        items: [
          { image: '/game-assets/science/animal-drinking-water.png', label: 'Drinking water', correct: true },
          { image: '/game-assets/science/animal-eating-food.png', label: 'Eating food' },
          { image: '/game-assets/science/animal-shelter-burrow.png', label: 'In a burrow' },
          { image: '/game-assets/science/puppy-living.png', label: 'A puppy' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/animal-shelter-burrow.png', guideText: 'Animals also need SHELTER — a safe place to sleep! Birds have nests. Mice have burrows. Bears have caves!' },
      { type: 'yes-no', scenario: 'Do animals need food, water, AND shelter to live?', correctAnswer: true, image: '/game-assets/science/animal-shelter-burrow.png' },
      { type: 'family', guideText: 'Tonight, talk with your family about animals you know. Where do they sleep? What do they eat? What do they drink? Animals are amazing!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Animal Friend', guideText: 'You understand animals, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-04',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 4,
    title: 'Habitats: Where Animals Live',
    duration: '3-5 min',
    badge: 'Habitat Explorer',
    nextLesson: 'sci-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we explore HABITATS — where animals live!' },
      { type: 'story', image: '/game-assets/science/habitat-forest.png', guideText: 'A HABITAT is the special place where an animal lives. Some animals live in forests, some in oceans, some in deserts, some in icy lands. Each habitat is just right for the animals there!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which habitat is the FOREST?', guideText: 'Tap the forest!',
        items: [
          { image: '/game-assets/science/habitat-forest.png', label: 'Forest', correct: true },
          { image: '/game-assets/science/habitat-ocean.png', label: 'Ocean' },
          { image: '/game-assets/science/habitat-desert.png', label: 'Desert' },
          { image: '/game-assets/science/habitat-arctic.png', label: 'Arctic' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/habitat-ocean.png', guideText: 'The OCEAN is a big watery habitat! Fish, dolphins, and whales live there. They are made for water!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Where does a polar bear LIVE?', guideText: 'Tap the icy arctic!',
        items: [
          { image: '/game-assets/science/habitat-arctic.png', label: 'Arctic ice', correct: true },
          { image: '/game-assets/science/habitat-desert.png', label: 'Desert' },
          { image: '/game-assets/science/habitat-forest.png', label: 'Forest' },
          { image: '/game-assets/science/habitat-ocean.png', label: 'Ocean' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/habitat-desert.png', guideText: 'The DESERT is hot and sandy! Lizards, snakes, and cactus plants love it there. They are built for the heat!' },
      { type: 'yes-no', scenario: 'Do different animals live in different habitats?', correctAnswer: true, image: '/game-assets/science/habitat-forest.png' },
      { type: 'family', guideText: 'Tonight, ask your family — what is YOUR habitat? Where do you live? A house? An apartment? Your home is YOUR habitat!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Habitat Explorer', guideText: 'You know habitats, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-05',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 5,
    title: 'Materials: Hard, Soft, Smooth, Rough',
    duration: '3-5 min',
    badge: 'Material Tester',
    nextLesson: 'sci-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we feel the world! Some things are SOFT, some are HARD, some are smooth, some are rough!' },
      { type: 'story', image: '/game-assets/science/material-soft-pillow.png', guideText: 'Look around — everything is made of MATERIAL. A pillow is SOFT and squishy. A rock is HARD. A glass is SMOOTH. Tree bark is ROUGH. Materials feel different!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is SOFT?', guideText: 'Tap the soft pillow!',
        items: [
          { image: '/game-assets/science/material-soft-pillow.png', label: 'Soft pillow', correct: true },
          { image: '/game-assets/science/material-hard-rock.png', label: 'Hard rock' },
          { image: '/game-assets/science/material-smooth-glass.png', label: 'Smooth glass' },
          { image: '/game-assets/science/material-rough-bark.png', label: 'Rough bark' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/material-hard-rock.png', guideText: 'A rock is HARD! You cannot squish it. It does not change shape. Hard things are strong!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is HARD?', guideText: 'Tap the hard rock!',
        items: [
          { image: '/game-assets/science/material-hard-rock.png', label: 'Hard rock', correct: true },
          { image: '/game-assets/science/material-soft-pillow.png', label: 'Soft pillow' },
          { image: '/game-assets/science/material-smooth-glass.png', label: 'Smooth glass' },
          { image: '/game-assets/science/material-rough-bark.png', label: 'Rough bark' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/material-smooth-glass.png', guideText: 'Glass is SMOOTH. When you slide your finger on it, it glides! No bumps!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is ROUGH?', guideText: 'Tap the bumpy bark!',
        items: [
          { image: '/game-assets/science/material-rough-bark.png', label: 'Rough bark', correct: true },
          { image: '/game-assets/science/material-smooth-glass.png', label: 'Smooth glass' },
          { image: '/game-assets/science/material-soft-pillow.png', label: 'Soft pillow' },
          { image: '/game-assets/science/material-hard-rock.png', label: 'Hard rock' }
        ]
      },
      { type: 'family', guideText: 'Tonight, do a Touch Test with your family! Find something soft, hard, smooth, and rough at home. Close your eyes and feel each one!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Material Tester', guideText: 'You feel materials, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-06',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 6,
    title: 'Solids, Liquids, Gases',
    duration: '3-5 min',
    badge: 'Matter Master',
    nextLesson: 'sci-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about THREE kinds of stuff — solids, liquids, and gases!' },
      { type: 'story', image: '/game-assets/science/solid-ice-cube.png', guideText: 'Everything in the world is in one of three forms! SOLIDS keep their shape — like an ice cube. LIQUIDS pour and flow — like water. GASES float around invisibly — like steam!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a SOLID?', guideText: 'Tap the solid ice!',
        items: [
          { image: '/game-assets/science/solid-ice-cube.png', label: 'Ice cube', correct: true },
          { image: '/game-assets/science/liquid-water-pouring.png', label: 'Water pouring' },
          { image: '/game-assets/science/gas-steam-rising.png', label: 'Steam' },
          { image: '/game-assets/science/flashlight-shining.png', label: 'Flashlight' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/liquid-water-pouring.png', guideText: 'Water is a LIQUID! Liquids POUR and take the shape of whatever container holds them. Splish splash!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a LIQUID?', guideText: 'Tap the pouring water!',
        items: [
          { image: '/game-assets/science/liquid-water-pouring.png', label: 'Water pouring', correct: true },
          { image: '/game-assets/science/solid-ice-cube.png', label: 'Ice cube' },
          { image: '/game-assets/science/gas-steam-rising.png', label: 'Steam' },
          { image: '/game-assets/science/material-hard-rock.png', label: 'Hard rock' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/gas-steam-rising.png', guideText: 'STEAM is a GAS! Gases float in the air and you can almost see through them. Air is a gas too — it is all around us!' },
      { type: 'yes-no', scenario: 'Is ice a solid that keeps its shape?', correctAnswer: true, image: '/game-assets/science/solid-ice-cube.png' },
      { type: 'family', guideText: 'Tonight, find a solid, a liquid, and a gas at home with your family. A book is solid! Juice is liquid! Bubbles in your tummy are gas!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Matter Master', guideText: 'You know matter, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-07',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 7,
    title: 'Pushing and Pulling: Forces',
    duration: '3-5 min',
    badge: 'Force Mover',
    nextLesson: 'sci-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about FORCES — pushing and pulling things!' },
      { type: 'story', image: '/game-assets/science/pushing-cart.png', guideText: 'When you want to MOVE something, you can PUSH it away from you, or PULL it toward you. Pushing and pulling are called FORCES — they make things move!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is PUSHING?', guideText: 'Tap pushing the cart!',
        items: [
          { image: '/game-assets/science/pushing-cart.png', label: 'Pushing cart', correct: true },
          { image: '/game-assets/science/pulling-wagon.png', label: 'Pulling wagon' },
          { image: '/game-assets/science/magnet-attracting.png', label: 'Magnet' },
          { image: '/game-assets/science/animal-eating-food.png', label: 'Animal eating' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/pulling-wagon.png', guideText: 'PULLING is when you bring something TOWARD you. Pulling a wagon by the handle brings it closer!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is PULLING?', guideText: 'Tap pulling the wagon!',
        items: [
          { image: '/game-assets/science/pulling-wagon.png', label: 'Pulling wagon', correct: true },
          { image: '/game-assets/science/pushing-cart.png', label: 'Pushing cart' },
          { image: '/game-assets/science/magnet-attracting.png', label: 'Magnet' },
          { image: '/game-assets/science/flashlight-shining.png', label: 'Flashlight' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/magnet-attracting.png', guideText: 'A MAGNET is special — it pulls metal things WITHOUT touching them! That is invisible force!' },
      { type: 'yes-no', scenario: 'Do you push something AWAY from you?', correctAnswer: true, image: '/game-assets/science/pushing-cart.png' },
      { type: 'family', guideText: 'Tonight, find things to push and pull at home with your family! A door — push or pull? A drawer — push or pull? You are testing forces!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Force Mover', guideText: 'You move things with force, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-08',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 8,
    title: 'Light and Shadow',
    duration: '3-5 min',
    badge: 'Light Watcher',
    nextLesson: 'sci-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we play with LIGHT and SHADOW!' },
      { type: 'story', image: '/game-assets/science/flashlight-shining.png', guideText: 'LIGHT helps us see! When light shines on something, we can see it. The sun is the biggest light. A flashlight is a small bright light. A lamp lights up your room!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one MAKES light?', guideText: 'Tap the flashlight!',
        items: [
          { image: '/game-assets/science/flashlight-shining.png', label: 'Flashlight', correct: true },
          { image: '/game-assets/science/dark-room-no-light.png', label: 'Dark room' },
          { image: '/game-assets/science/plant-with-sun.png', label: 'Plant in sun' },
          { image: '/game-assets/science/child-with-shadow.png', label: 'Shadow' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/child-with-shadow.png', guideText: 'When light hits you, you make a SHADOW! Your shadow is a dark shape that copies your body. Light cannot go through you, so your shape shows up on the ground!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one shows a SHADOW?', guideText: 'Tap the kid with a shadow!',
        items: [
          { image: '/game-assets/science/child-with-shadow.png', label: 'Kid with shadow', correct: true },
          { image: '/game-assets/science/flashlight-shining.png', label: 'Flashlight' },
          { image: '/game-assets/science/dark-room-no-light.png', label: 'Dark room' },
          { image: '/game-assets/science/material-hard-rock.png', label: 'Rock' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/dark-room-no-light.png', guideText: 'When there is NO light, everything looks DARK. We cannot see our toys, our books, or our pets! That is why we need light!' },
      { type: 'yes-no', scenario: 'Do you make a shadow when light shines on you?', correctAnswer: true, image: '/game-assets/science/child-with-shadow.png' },
      { type: 'family', guideText: 'Tonight, play with shadows! Use a flashlight or stand under a lamp with your family. Make hand shadows on the wall — bunny ears, butterflies, dogs!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Light Watcher', guideText: 'You know light, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-09',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 9,
    title: 'Sound: Loud and Quiet',
    duration: '3-5 min',
    badge: 'Sound Hearer',
    nextLesson: 'sci-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we explore SOUNDS — loud ones and quiet ones!' },
      { type: 'story', image: '/game-assets/science/loud-drum.png', guideText: 'Sound is everywhere! When you bang a drum BOOM, that is a LOUD sound! When a mouse whispers shhh, that is a QUIET sound. Sounds travel through the air to your EARS!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is LOUD?', guideText: 'Tap the loud drum!',
        items: [
          { image: '/game-assets/science/loud-drum.png', label: 'Loud drum', correct: true },
          { image: '/game-assets/science/quiet-whisper.png', label: 'Quiet whisper' },
          { image: '/game-assets/science/ear-listening.png', label: 'Ear' },
          { image: '/game-assets/science/discovery-celebration.png', label: 'Celebration' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/quiet-whisper.png', guideText: 'A WHISPER is a quiet sound. So small you have to listen carefully! Quiet sounds are gentle for our ears.' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is QUIET?', guideText: 'Tap the whispering mouse!',
        items: [
          { image: '/game-assets/science/quiet-whisper.png', label: 'Quiet whisper', correct: true },
          { image: '/game-assets/science/loud-drum.png', label: 'Loud drum' },
          { image: '/game-assets/science/material-soft-pillow.png', label: 'Soft pillow' },
          { image: '/game-assets/science/discovery-celebration.png', label: 'Celebration' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/ear-listening.png', guideText: 'We hear sounds with our EARS! Sound waves enter our ears and our brains tell us what we hear!' },
      { type: 'yes-no', scenario: 'Do we hear sounds with our ears?', correctAnswer: true, image: '/game-assets/science/ear-listening.png' },
      { type: 'family', guideText: 'Tonight, play a Sound Game with your family! Close your eyes — what is the LOUDEST thing you can hear? What is the QUIETEST? Listen carefully!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sound Hearer', guideText: 'You hear sounds, {name}!' }
    ]
  },
  {
    id: 'sci-3-5-10',
    subject: 'Science',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Cosmo',
    guideAnimal: 'Otter',
    lessonNumber: 10,
    title: 'Being a Scientist',
    duration: '3-5 min',
    badge: 'Little Scientist',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today is the BEST day — you become a real SCIENTIST!' },
      { type: 'story', image: '/game-assets/science/scientist-magnifying-glass.png', guideText: 'A scientist is someone who LOOKS carefully, ASKS questions, and TRIES to understand the world! Guess what — kids are AMAZING scientists. You are curious all the time!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one shows a SCIENTIST?', guideText: 'Tap the curious scientist!',
        items: [
          { image: '/game-assets/science/scientist-magnifying-glass.png', label: 'Scientist', correct: true },
          { image: '/game-assets/science/discovery-celebration.png', label: 'Discovery' },
          { image: '/game-assets/science/child-with-shadow.png', label: 'Observing shadow' },
          { image: '/game-assets/science/flower-living.png', label: 'A flower' }
        ]
      },
      { type: 'teach', image: '/game-assets/science/scientist-magnifying-glass.png', guideText: 'Scientists OBSERVE — that means look carefully. They ASK why? They TEST things to find answers. They never stop wondering!' },
      { type: 'yes-no', scenario: 'Are you curious about the world?', correctAnswer: true, image: '/game-assets/science/scientist-magnifying-glass.png' },
      { type: 'teach', image: '/game-assets/science/discovery-celebration.png', guideText: 'When a scientist FIGURES SOMETHING OUT — that is called a discovery! Discoveries change the world. And YOU make little discoveries every day!' },
      { type: 'yes-no', scenario: 'Are YOU a scientist?', correctAnswer: true, image: '/game-assets/science/discovery-celebration.png' },
      { type: 'family', guideText: 'Tonight, be a scientist with your family! Pick ONE question you wonder about. Look closely. Ask why. Try things. Be curious! That is real science!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Little Scientist', guideText: 'You ARE a scientist, {name}! Great work, you finished Science!' }
    ]
  }
];

export default scienceLittleStars;
