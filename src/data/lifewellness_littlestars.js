export const lifewellnessLittleStars = [
  {
    id: "lw-3-5-01",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 1,
    title: "My Body Needs Sleep",
    duration: "5 min",
    badge: "Sleep Champion",
    nextLesson: "lw-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Terra. Today we learn why your body needs SLEEP!' },
      { type: 'story', image: '/game-assets/life-wellness/child-sleeping.png', guideText: 'When you sleep, your body does amazing things — it grows taller, it heals, and your brain saves all the cool things you learned during the day. Sleep is like magic medicine. Kids your age need a LOT of sleep — about 11 hours every night. That is how your body builds itself stronger!' },
      { type: 'teach', image: '/game-assets/life-wellness/child-sleeping.png', guideText: 'When you sleep, your brain plays back everything you learned today and saves it forever!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does your body NEED?', guideText: 'Tap the child sleeping!',
        items: [
          { image: '/game-assets/life-wellness/child-sleeping.png', label: 'Sleep', correct: true },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty hands' },
          { image: '/game-assets/life-wellness/tired-child.png', label: 'Stay up late' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/tired-child.png', guideText: 'When you are tired, your body tells you with yawns and heavy eyes. That is a signal — listen to it!' },
      { type: 'yes-no', scenario: 'Does your body need sleep to grow strong?', correctAnswer: true, image: '/game-assets/life-wellness/child-sleeping.png' },
      { type: 'family', guideText: 'Tonight, talk together about bedtime. What time does your body feel ready to sleep? Make a plan to get to bed earlier this week — your body will thank you!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sleep Champion', guideText: 'You honor your sleep, {name}!' }
    ]
  },
  {
    id: "lw-3-5-02",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 2,
    title: "Healthy Foods Give Me Energy",
    duration: "5 min",
    badge: "Energy Eater",
    nextLesson: "lw-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about FOOD that makes us strong!' },
      { type: 'story', image: '/game-assets/life-wellness/healthy-foods.png', guideText: 'The food you eat becomes part of YOU. Apples, broccoli, carrots, and bread give your body real energy and help you grow tall and strong. Junk foods like candy and soda taste sweet but they do not have the building blocks your body needs. Smart kids fill their plates with colorful real food!' },
      { type: 'teach', image: '/game-assets/life-wellness/healthy-foods.png', guideText: 'The more colors on your plate, the more vitamins for your body! Red apples, green broccoli, orange carrots — each color does something different.' },
      { type: 'sort-buckets',
        instruction: 'Sort healthy foods and junk foods!',
        guideText: 'Drag each food to the right bucket!',
        buckets: [
          { label: 'Healthy', image: '/game-assets/life-wellness/healthy-foods.png' },
          { label: 'Junk', image: '/game-assets/life-wellness/unhealthy-foods.png' }
        ],
        items: [
          { image: '/game-assets/life-wellness/healthy-foods.png', bucket: 0 },
          { image: '/game-assets/life-wellness/child-eating.png', bucket: 0 },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', bucket: 1 },
          { image: '/game-assets/life-wellness/water-glass.png', bucket: 0 }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/child-eating.png', guideText: 'Eating real food gives you energy to play, run, and learn all day long!' },
      { type: 'family', guideText: 'Tonight, look at your plate together. Count the colors! Try to add ONE new color tomorrow — like a green leaf or a red berry. Color = power!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Energy Eater', guideText: 'You eat for energy, {name}!' }
    ]
  },
  {
    id: "lw-3-5-03",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 3,
    title: "Moving My Body Feels Good",
    duration: "5 min",
    badge: "Movement Master",
    nextLesson: "lw-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we MOVE our bodies!' },
      { type: 'story', image: '/game-assets/life-wellness/child-running.png', guideText: 'Your body LOVES to move. When you run, jump, dance, or climb, your heart gets stronger, your muscles grow, and your brain releases happy chemicals that make you smile! Moving is medicine for your whole body. Animals know this — that is why you see puppies running and birds flying. Move every day!' },
      { type: 'teach', image: '/game-assets/life-wellness/kids-playing.png', guideText: 'Playing IS exercise — running, jumping, dancing, climbing all make your body stronger!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is MOVING?', guideText: 'Tap the kid running!',
        items: [
          { image: '/game-assets/life-wellness/child-running.png', label: 'Running', correct: true },
          { image: '/game-assets/life-wellness/child-sleeping.png', label: 'Sleeping' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty hands' },
          { image: '/game-assets/life-wellness/water-glass.png', label: 'Water glass' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/child-body-strong.png', guideText: 'When you move every day, your body gets STRONGER. Your muscles grow, your heart pumps better!' },
      { type: 'yes-no', scenario: 'Does moving your body make it stronger?', correctAnswer: true, image: '/game-assets/life-wellness/child-running.png' },
      { type: 'family', guideText: 'Tomorrow, do ONE active thing together for 10 minutes — dance, jump, run around the yard, climb on a playground. Notice how your body feels alive after!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Movement Master', guideText: 'You love moving, {name}!' }
    ]
  },
  {
    id: "lw-3-5-04",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 4,
    title: "Washing My Hands Keeps Me Healthy",
    duration: "5 min",
    badge: "Clean Hands Hero",
    nextLesson: "lw-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wash our HANDS!' },
      { type: 'story', image: '/game-assets/life-wellness/washing-hands.png', guideText: 'Your hands touch SO many things every day — toys, doorknobs, the floor, other kids. Tiny invisible germs can stick to your hands. If you do not wash them, those germs can get inside you and make you sick. Soap and warm water make germs go DOWN the drain. Washing your hands is one of the easiest ways to stay healthy!' },
      { type: 'teach', image: '/game-assets/life-wellness/washing-hands.png', guideText: 'Wash for as long as it takes to sing the ABCs slowly — that is about 20 seconds!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which keeps you HEALTHY?', guideText: 'Tap clean hands!',
        items: [
          { image: '/game-assets/life-wellness/washing-hands.png', label: 'Washing hands', correct: true },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty hands' },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/tired-child.png', label: 'Tired' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/dirty-hands.png', guideText: 'Germs are too tiny to see — but they are there. Soap is their kryptonite!' },
      { type: 'yes-no', scenario: 'Does washing hands keep germs away?', correctAnswer: true, image: '/game-assets/life-wellness/washing-hands.png' },
      { type: 'family', guideText: 'Together, wash your hands tonight before dinner. Sing the ABCs while you scrub. See how clean and bright your hands look at the end!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Clean Hands Hero', guideText: 'You keep germs away, {name}!' }
    ]
  },
  {
    id: "lw-3-5-05",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 5,
    title: "Brushing My Teeth",
    duration: "5 min",
    badge: "Tooth Hero",
    nextLesson: "lw-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we take care of our TEETH!' },
      { type: 'story', image: '/game-assets/life-wellness/brushing-teeth.png', guideText: 'You only get TWO sets of teeth in your whole life — your baby teeth, and then your big strong grown-up teeth. Every time you eat, tiny bits of food and sugar stick to your teeth. If you do not brush, they make holes called cavities! Brushing your teeth twice a day keeps them strong, white, and healthy for your whole life!' },
      { type: 'teach', image: '/game-assets/life-wellness/brushing-teeth.png', guideText: 'Brush twice a day — once in the morning, once before bed. Up and down, side to side!' },
      { type: 'yes-no', scenario: 'Should you brush your teeth twice a day?', correctAnswer: true, image: '/game-assets/life-wellness/brushing-teeth.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What keeps your TEETH healthy?', guideText: 'Tap brushing teeth!',
        items: [
          { image: '/game-assets/life-wellness/brushing-teeth.png', label: 'Brushing', correct: true },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty hands' },
          { image: '/game-assets/life-wellness/tired-child.png', label: 'Tired' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/heart-glowing-green.png', guideText: 'Healthy teeth let you smile big, eat any food, and feel proud of yourself!' },
      { type: 'family', guideText: 'Tonight, brush your teeth together. Make it a song or a dance — anything to make it fun! Brush for two whole minutes. Your teeth will sparkle!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Tooth Hero', guideText: 'You care for your teeth, {name}!' }
    ]
  },
  {
    id: "lw-3-5-06",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 6,
    title: "Drinking Water",
    duration: "5 min",
    badge: "Hydration Hero",
    nextLesson: "lw-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we drink WATER!' },
      { type: 'story', image: '/game-assets/life-wellness/water-glass.png', guideText: 'Did you know your body is mostly WATER? Every part of you — your blood, your brain, even your eyeballs — needs water to work. Without enough water, you feel tired, grumpy, and your head hurts. Drinking plain water is the BEST drink for your body. Better than juice, better than soda, better than anything!' },
      { type: 'teach', image: '/game-assets/life-wellness/water-glass.png', guideText: 'Your body needs water all day long — when you wake up, with meals, after playing!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What is the BEST drink for your body?', guideText: 'Tap the glass of water!',
        items: [
          { image: '/game-assets/life-wellness/water-glass.png', label: 'Water', correct: true },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Soda' },
          { image: '/game-assets/life-wellness/healthy-foods.png', label: 'Foods' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/heart-glowing-green.png', guideText: 'When you are thirsty, that is your body asking for water — listen to it!' },
      { type: 'yes-no', scenario: 'Is water the best drink for your body?', correctAnswer: true, image: '/game-assets/life-wellness/water-glass.png' },
      { type: 'family', guideText: 'Together, count how many glasses of water you each drink today. Aim for 5 glasses if you can. Your body LOVES it. Notice how good you feel!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Hydration Hero', guideText: 'You hydrate well, {name}!' }
    ]
  },
  {
    id: "lw-3-5-07",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 7,
    title: "Rest When You're Tired",
    duration: "5 min",
    badge: "Rest Listener",
    nextLesson: "lw-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to REST!' },
      { type: 'story', image: '/game-assets/life-wellness/cozy-rest.png', guideText: 'Resting is not just about sleeping at night. Sometimes during the day your body says "I need a break." That might mean sitting down quietly, looking at a book, or just lying on the couch for a few minutes. Resting is how your body gets its energy back. Brave kids listen to their bodies and rest BEFORE they get totally worn out!' },
      { type: 'teach', image: '/game-assets/life-wellness/cozy-rest.png', guideText: 'Resting can be quiet play, looking at a book, or just sitting still — your body chooses!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is RESTING?', guideText: 'Tap resting quietly!',
        items: [
          { image: '/game-assets/life-wellness/cozy-rest.png', label: 'Resting', correct: true },
          { image: '/game-assets/life-wellness/child-running.png', label: 'Running' },
          { image: '/game-assets/life-wellness/kids-playing.png', label: 'Playing' },
          { image: '/game-assets/life-wellness/washing-hands.png', label: 'Washing' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/tired-child.png', guideText: 'Tired eyes, slow body, grumpy feelings — those are signals to rest. Listen to them!' },
      { type: 'yes-no', scenario: 'Should you rest when your body feels tired?', correctAnswer: true, image: '/game-assets/life-wellness/cozy-rest.png' },
      { type: 'family', guideText: 'Today, take a 10-minute "quiet rest" together. Lie down, no screens, just listen to soft sounds. Notice how your body feels different after!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Rest Listener', guideText: 'You honor rest, {name}!' }
    ]
  },
  {
    id: "lw-3-5-08",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 8,
    title: "Being Outside in Nature",
    duration: "5 min",
    badge: "Nature Friend",
    nextLesson: "lw-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we go OUTSIDE!' },
      { type: 'story', image: '/game-assets/life-wellness/child-in-nature.png', guideText: 'Nature is medicine. When you go outside — into the sun, the trees, the grass, the breeze — your body and brain get something they need that nothing else can give. The sun gives you vitamin D. Fresh air clears your head. Trees and plants make you feel calm. Even five minutes outside can change how you feel inside!' },
      { type: 'teach', image: '/game-assets/life-wellness/barefoot-grass.png', guideText: 'Walking barefoot on grass connects your body to the earth. It feels amazing!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Where does your body LOVE to be?', guideText: 'Tap a kid in nature!',
        items: [
          { image: '/game-assets/life-wellness/child-in-nature.png', label: 'In nature', correct: true },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty' },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/tired-child.png', label: 'Tired' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/child-in-nature.png', guideText: 'Trees, sun, fresh air, dirt, water — nature has everything your body needs to feel good!' },
      { type: 'yes-no', scenario: 'Does being outside in nature make you feel good?', correctAnswer: true, image: '/game-assets/life-wellness/child-in-nature.png' },
      { type: 'family', guideText: 'Today, go outside together for at least 15 minutes. No phones! Look at trees, listen to birds, feel the wind. How does your body feel after?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Nature Friend', guideText: 'You love nature, {name}!' }
    ]
  },
  {
    id: "lw-3-5-09",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 9,
    title: "My Body is Amazing",
    duration: "5 min",
    badge: "Body Champion",
    nextLesson: "lw-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate your AMAZING body!' },
      { type: 'story', image: '/game-assets/life-wellness/child-body-strong.png', guideText: 'Your body does INCREDIBLE things every second. Your heart beats over 100,000 times a day. Your lungs breathe in and out without you even thinking about it. Your eyes see colors, your ears hear music, your legs carry you everywhere. Your body is a miracle. And it is YOURS — to take care of, to thank, and to be proud of!' },
      { type: 'teach', image: '/game-assets/life-wellness/heart-glowing-green.png', guideText: 'Your heart pumps blood to every part of you, all day, all night, your whole life — without stopping!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows your AMAZING body?', guideText: 'Tap the strong body!',
        items: [
          { image: '/game-assets/life-wellness/child-body-strong.png', label: 'Strong body', correct: true },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty' },
          { image: '/game-assets/life-wellness/tired-child.png', label: 'Tired' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/child-running.png', guideText: 'Every body is different — and every body is amazing in its own way. Yours is perfectly YOU!' },
      { type: 'yes-no', scenario: 'Is your body amazing?', correctAnswer: true, image: '/game-assets/life-wellness/child-body-strong.png' },
      { type: 'family', guideText: 'Tonight, look in the mirror together and say ONE amazing thing about your body. Maybe your strong legs, your warm hugs, your kind eyes. Your body deserves love!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Body Champion', guideText: 'You honor your body, {name}!' }
    ]
  },
  {
    id: "lw-3-5-10",
    subject: "Life & Wellness",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Terra",
    guideAnimal: "Wolf",
    lessonNumber: 10,
    title: "Feelings in My Body",
    duration: "5 min",
    badge: "Body Listener",
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn FEELINGS live in our bodies!' },
      { type: 'story', image: '/game-assets/life-wellness/body-feelings.png', guideText: 'Feelings are not just in your head — they live in your BODY! When you feel happy, your chest feels warm and light. When you feel scared, your tummy gets butterflies. When you feel angry, your hands might tighten and your face gets hot. Your body is always telling you how you feel. The trick is to listen!' },
      { type: 'teach', image: '/game-assets/life-wellness/body-feelings.png', guideText: 'Where in your body do YOU feel happiness? Where do you feel sadness? Each feeling has a home in you!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Where do FEELINGS live?', guideText: 'Tap feelings in the body!',
        items: [
          { image: '/game-assets/life-wellness/body-feelings.png', label: 'In the body', correct: true },
          { image: '/game-assets/life-wellness/unhealthy-foods.png', label: 'Junk food' },
          { image: '/game-assets/life-wellness/dirty-hands.png', label: 'Dirty' },
          { image: '/game-assets/life-wellness/water-glass.png', label: 'Water' }
        ]
      },
      { type: 'teach', image: '/game-assets/life-wellness/heart-glowing-green.png', guideText: 'Your body is wise. When you feel something strong, pause and notice WHERE it lives. Your body knows!' },
      { type: 'yes-no', scenario: 'Do feelings live inside your body?', correctAnswer: true, image: '/game-assets/life-wellness/body-feelings.png' },
      { type: 'family', guideText: 'Tonight, try this together: think of a happy memory. Where do you feel it in your body? Now think of a worried thought. Where is THAT? Your body is a feeling map!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Body Listener', guideText: 'You listen to your body, {name}!' }
    ]
  }
];

export default lifewellnessLittleStars;
