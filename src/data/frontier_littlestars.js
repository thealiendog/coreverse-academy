export const frontierLittleStars = [
  {
    id: 'fp-3-5-01',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 1,
    title: 'Big Questions: Why Is the Sky Blue?',
    duration: '3-5 min',
    badge: 'Big Thinker',
    nextLesson: 'fp-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Orion! I LOVE big questions. Today we wonder — why is the sky blue?' },
      { type: 'story', image: '/game-assets/frontier/blue-sky-wonder.png', guideText: 'Have you ever looked up and thought — WHY is the sky blue and not green or pink? That is a BIG QUESTION! Big questions help us learn about the whole world!' },
      { type: 'teach', image: '/game-assets/frontier/blue-sky-wonder.png', guideText: 'The sky is blue because sunlight has lots of colors hidden inside it! Blue light bounces around the sky more than the other colors — so we see BLUE everywhere!' },
      { type: 'yes-no', scenario: 'Is the sky blue because of how light from the sun works?', correctAnswer: true, image: '/game-assets/frontier/blue-sky-wonder.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows WONDERING?', guideText: 'Tap the kid wondering!',
        items: [
          { image: '/game-assets/frontier/child-wondering.png', label: 'Wondering kid', correct: true },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Arguing' },
          { image: '/game-assets/frontier/kids-hugging-makeup.png', label: 'Hugging' },
          { image: '/game-assets/frontier/sharing-equally.png', label: 'Sharing' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/question-big-glowing.png', guideText: 'When you ask big questions, your brain GROWS! Wonderers are the people who change the world!' },
      { type: 'yes-no', scenario: 'Is asking big questions a good thing?', correctAnswer: true, image: '/game-assets/frontier/question-big-glowing.png' },
      { type: 'family', guideText: 'Tonight, ask your family ONE big question that you really wonder about. Maybe — why do dogs wag their tails? Why is the moon round? Big questions are so fun!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Big Thinker', guideText: 'You are a big thinker, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-02',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 2,
    title: 'Where Do Babies Come From?',
    duration: '3-5 min',
    badge: 'Love Knower',
    nextLesson: 'fp-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about where BABIES come from!' },
      { type: 'story', image: '/game-assets/frontier/mother-with-baby.png', guideText: 'Every baby starts as a tiny seed of LOVE inside their mama. The baby grows in mama belly for many many months. Then one day the baby is ready and is BORN! Welcome to the world!' },
      { type: 'yes-no', scenario: 'Do babies grow inside their mama before they are born?', correctAnswer: true, image: '/game-assets/frontier/mother-with-baby.png' },
      { type: 'teach', image: '/game-assets/frontier/growing-from-baby.png', guideText: 'After being born, the baby grows and grows! First a tiny baby. Then a toddler. Then a kid like YOU! And you keep growing!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows a baby with their MAMA?', guideText: 'Tap the mama and baby!',
        items: [
          { image: '/game-assets/frontier/mother-with-baby.png', label: 'Mama and baby', correct: true },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Kids arguing' },
          { image: '/game-assets/frontier/holding-hands-crossing.png', label: 'Crossing street' },
          { image: '/game-assets/frontier/blue-sky-wonder.png', label: 'Blue sky' }
        ]
      },
      { type: 'yes-no', scenario: 'Did you used to be a tiny baby once?', correctAnswer: true, image: '/game-assets/frontier/growing-from-baby.png' },
      { type: 'family', guideText: 'Tonight, ask your family to show you a picture of YOU as a baby. What did you look like? How tiny were you? Babies are little miracles!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Love Knower', guideText: 'You came from love, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-03',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 3,
    title: 'What Happens When We Sleep?',
    duration: '3-5 min',
    badge: 'Sleep Explorer',
    nextLesson: 'fp-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we explore what happens when we SLEEP!' },
      { type: 'story', image: '/game-assets/frontier/child-sleeping-peaceful.png', guideText: 'When you close your eyes at night and fall asleep, AMAZING things happen! Your body rests. Your brain saves everything you learned today. And sometimes you DREAM!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows a child SLEEPING?', guideText: 'Tap the sleeping child!',
        items: [
          { image: '/game-assets/frontier/child-sleeping-peaceful.png', label: 'Sleeping', correct: true },
          { image: '/game-assets/frontier/child-wondering.png', label: 'Wondering' },
          { image: '/game-assets/frontier/helping-fallen-friend.png', label: 'Helping' },
          { image: '/game-assets/frontier/kids-talking-it-out.png', label: 'Talking' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/dreaming-bubble.png', guideText: 'When you DREAM, your imagination plays movies in your head. You might fly! You might go to magical places! Dreams are your brain having fun!' },
      { type: 'yes-no', scenario: 'Do we sometimes have dreams when we sleep?', correctAnswer: true, image: '/game-assets/frontier/dreaming-bubble.png' },
      { type: 'teach', image: '/game-assets/frontier/body-resting-glow.png', guideText: 'Your body works HARD all day. At night, sleep helps your body get strong again — like a phone charging up!' },
      { type: 'yes-no', scenario: 'Does sleep help our body and brain feel better?', correctAnswer: true, image: '/game-assets/frontier/body-resting-glow.png' },
      { type: 'family', guideText: 'Tonight at bedtime, ask your family — what do YOU dream about? Share your favorite dream you can remember. Sweet dreams!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sleep Explorer', guideText: 'You explored sleep, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-04',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 4,
    title: 'Why Do We Have Rules?',
    duration: '3-5 min',
    badge: 'Rule Wonderer',
    nextLesson: 'fp-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wonder — why do we have RULES?' },
      { type: 'story', image: '/game-assets/frontier/stop-sign-rule.png', guideText: 'Rules tell us what to do — STOP at red lights, hold a grown-up hand near the road, no hitting. Rules might seem boring but they are SUPER important!' },
      { type: 'teach', image: '/game-assets/frontier/holding-hands-crossing.png', guideText: 'Rules KEEP US SAFE! Holding a grown-up hand when crossing the street stops cars from hurting you. That rule is LOVE in action!' },
      { type: 'yes-no', scenario: 'Are rules made to keep us safe?', correctAnswer: true, image: '/game-assets/frontier/holding-hands-crossing.png' },
      { type: 'teach', image: '/game-assets/frontier/chaos-no-rules.png', guideText: 'Imagine a world with NO rules — toys flying, no taking turns, no kindness! Rules help everyone get along!' },
      { type: 'yes-no', scenario: 'Would the world be confusing if there were NO rules at all?', correctAnswer: true, image: '/game-assets/frontier/chaos-no-rules.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows a rule that keeps us SAFE?', guideText: 'Tap holding a hand to cross!',
        items: [
          { image: '/game-assets/frontier/holding-hands-crossing.png', label: 'Holding hands crossing', correct: true },
          { image: '/game-assets/frontier/chaos-no-rules.png', label: 'Toys flying everywhere' },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Arguing kids' },
          { image: '/game-assets/frontier/unequal-portions.png', label: 'Unequal sharing' }
        ]
      },
      { type: 'family', guideText: 'Tonight, talk with your family about ONE rule at home. Why do you have it? What would happen if you broke it? Rules make sense when we understand WHY!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Rule Wonderer', guideText: 'You understand rules, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-05',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 5,
    title: 'What Is Fair?',
    duration: '3-5 min',
    badge: 'Fairness Friend',
    nextLesson: 'fp-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wonder — what is FAIR?' },
      { type: 'story', image: '/game-assets/frontier/sharing-equally.png', guideText: 'Fair means everyone gets a TURN, or everyone gets the SAME amount. When you share a snack equally with a friend — both of you have the same — that is FAIR!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is FAIR?', guideText: 'Tap the fair sharing!',
        items: [
          { image: '/game-assets/frontier/sharing-equally.png', label: 'Equal sharing', correct: true },
          { image: '/game-assets/frontier/unequal-portions.png', label: 'Big pile small pile' },
          { image: '/game-assets/frontier/chaos-no-rules.png', label: 'Toys flying' },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Tug of war' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/unequal-portions.png', guideText: 'When one person has LOTS and another has just a little — that does not feel fair, does it? The other person feels SAD!' },
      { type: 'yes-no', scenario: 'Is it FAIR when one kid gets way more than another?', correctAnswer: false, image: '/game-assets/frontier/unequal-portions.png' },
      { type: 'teach', image: '/game-assets/frontier/taking-turns-swing.png', guideText: 'Taking turns is FAIR. You swing a little — then your friend swings — then you swing again! Everyone gets a turn!' },
      { type: 'yes-no', scenario: 'Is taking turns a fair way to share?', correctAnswer: true, image: '/game-assets/frontier/taking-turns-swing.png' },
      { type: 'family', guideText: 'Tonight at dinner, talk about fairness. Did everyone get the same? Did everyone get a turn? Notice the times you are being fair and unfair. It is hard sometimes!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Fairness Friend', guideText: 'You stand for fairness, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-06',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 6,
    title: 'Is It Okay to Be Different?',
    duration: '3-5 min',
    badge: 'Different Lover',
    nextLesson: 'fp-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate being DIFFERENT!' },
      { type: 'story', image: '/game-assets/frontier/unique-flowers-garden.png', guideText: 'Look at this garden! Every flower is a different color and shape. ALL of them are beautiful! Imagine if every flower was exactly the same — that would be boring!' },
      { type: 'yes-no', scenario: 'Are different flowers more beautiful when they are mixed together?', correctAnswer: true, image: '/game-assets/frontier/unique-flowers-garden.png' },
      { type: 'teach', image: '/game-assets/frontier/kids-different-styles.png', guideText: 'People are like flowers. We come in many sizes, colors, and shapes. THAT is what makes the world beautiful!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows being DIFFERENT?', guideText: 'Tap the different kids!',
        items: [
          { image: '/game-assets/frontier/kids-different-styles.png', label: 'Different kids', correct: true },
          { image: '/game-assets/frontier/same-row-boring.png', label: 'Identical kids' },
          { image: '/game-assets/frontier/heart-with-rays.png', label: 'A heart' },
          { image: '/game-assets/frontier/blue-sky-wonder.png', label: 'Blue sky' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/same-row-boring.png', guideText: 'If everyone was EXACTLY the same — same hair, same clothes, same everything — life would be a little boring! Differences make us special!' },
      { type: 'yes-no', scenario: 'Is it okay to look or act differently from other people?', correctAnswer: true, image: '/game-assets/frontier/kids-different-styles.png' },
      { type: 'family', guideText: 'Tonight, talk with your family about how each person in your family is DIFFERENT. Different favorite foods? Different hair? Different laughs? Differences make families fun!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Different Lover', guideText: 'You celebrate differences, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-07',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 7,
    title: 'What Makes Someone Good?',
    duration: '3-5 min',
    badge: 'Good Heart',
    nextLesson: 'fp-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wonder — what makes someone GOOD?' },
      { type: 'story', image: '/game-assets/frontier/helping-fallen-friend.png', guideText: 'Good is not about being PERFECT. It is about being KIND. When you help a friend who fell down — that is GOOD! When you say sorry when you hurt someone — that is GOOD!' },
      { type: 'yes-no', scenario: 'Is helping a friend who fell down a GOOD thing?', correctAnswer: true, image: '/game-assets/frontier/helping-fallen-friend.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows being GOOD?', guideText: 'Tap the helping friend!',
        items: [
          { image: '/game-assets/frontier/helping-fallen-friend.png', label: 'Helping friend up', correct: true },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Tug of war' },
          { image: '/game-assets/frontier/unequal-portions.png', label: 'Unfair pile' },
          { image: '/game-assets/frontier/chaos-no-rules.png', label: 'Toys flying' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/heart-with-rays.png', guideText: 'Every good thing comes from your HEART. When you do something kind, your heart shines like a little sun!' },
      { type: 'yes-no', scenario: 'Does being kind make you a good person?', correctAnswer: true, image: '/game-assets/frontier/heart-with-rays.png' },
      { type: 'family', guideText: 'Tonight, share with your family ONE good thing you did today. Even something tiny — like sharing a snack or saying thank you. Goodness counts every time!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Good Heart', guideText: 'You have a good heart, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-08',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 8,
    title: 'Why Do People Fight?',
    duration: '3-5 min',
    badge: 'Peacemaker',
    nextLesson: 'fp-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wonder — why do people FIGHT?' },
      { type: 'story', image: '/game-assets/frontier/kids-arguing-toy.png', guideText: 'Sometimes kids fight when they BOTH want the same toy. Or when one is tired or hungry. Fighting feels icky in our tummies! Everyone fights sometimes — even grown-ups!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows FIGHTING?', guideText: 'Tap the kids fighting over a toy!',
        items: [
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Tug of war over toy', correct: true },
          { image: '/game-assets/frontier/kids-hugging-makeup.png', label: 'Hugging' },
          { image: '/game-assets/frontier/kids-talking-it-out.png', label: 'Talking calmly' },
          { image: '/game-assets/frontier/sharing-equally.png', label: 'Sharing equally' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/kids-talking-it-out.png', guideText: 'The BEST way to stop fighting is to TALK with words instead of hands. Tell each other how you feel! Listen to each other!' },
      { type: 'yes-no', scenario: 'Is it better to TALK about a problem than to fight?', correctAnswer: true, image: '/game-assets/frontier/kids-talking-it-out.png' },
      { type: 'teach', image: '/game-assets/frontier/kids-hugging-makeup.png', guideText: 'After a fight, friends can MAKE UP! A hug, a sorry, and you are back to being friends. Forgiveness is a superpower!' },
      { type: 'yes-no', scenario: 'After fighting with a friend, can you make up and be friends again?', correctAnswer: true, image: '/game-assets/frontier/kids-hugging-makeup.png' },
      { type: 'family', guideText: 'Tonight, if you fight with someone in your family, try the new way — TALK and listen. Then HUG and forgive. You will feel SO much better!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Peacemaker', guideText: 'You are a peacemaker, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-09',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 9,
    title: 'What Is Magic?',
    duration: '3-5 min',
    badge: 'Magic Finder',
    nextLesson: 'fp-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we wonder — what IS magic?' },
      { type: 'story', image: '/game-assets/frontier/magical-sparkle-burst.png', guideText: 'Magic is when something feels SO amazing it gives you tingles and makes you smile! It can be in a story — or it can be REAL all around us!' },
      { type: 'teach', image: '/game-assets/frontier/everyday-magic-rainbow.png', guideText: 'Real magic is EVERYWHERE — a rainbow after rain, a butterfly landing on your hand, the way a tiny seed becomes a giant tree! THAT is real magic!' },
      { type: 'yes-no', scenario: 'Are rainbows and butterflies a kind of real magic?', correctAnswer: true, image: '/game-assets/frontier/everyday-magic-rainbow.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows MAGIC in nature?', guideText: 'Tap the rainbow!',
        items: [
          { image: '/game-assets/frontier/everyday-magic-rainbow.png', label: 'Rainbow with tree', correct: true },
          { image: '/game-assets/frontier/chaos-no-rules.png', label: 'Toys flying' },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Arguing kids' },
          { image: '/game-assets/frontier/unequal-portions.png', label: 'Unfair pile' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/magical-sparkle-burst.png', guideText: 'You are full of magic too! Your laugh, your hug, your love — all of it is real magic in the world!' },
      { type: 'yes-no', scenario: 'Are YOU a little bit magical?', correctAnswer: true, image: '/game-assets/frontier/magical-sparkle-burst.png' },
      { type: 'family', guideText: 'Tonight, find ONE magical thing with your family. A starry sky! A sleeping pet! Bubbles! Magic is everywhere if you LOOK!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Magic Finder', guideText: 'You found magic, {name}!' }
    ]
  },
  {
    id: 'fp-3-5-10',
    subject: 'Frontier & Philosophy',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Orion',
    guideAnimal: 'Phoenix',
    lessonNumber: 10,
    title: 'What Would You Change About the World?',
    duration: '3-5 min',
    badge: 'World Changer',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today is the BIGGEST question — what would you CHANGE about the world?' },
      { type: 'story', image: '/game-assets/frontier/child-imagining-better-world.png', guideText: 'You are smart and kind. If YOU could fix one thing in the whole world — what would it be? More love? More fairness? Cleaner oceans? Every great change starts with someone who DREAMED it first!' },
      { type: 'teach', image: '/game-assets/frontier/heart-with-rays.png', guideText: 'Even tiny kids can change the world. By being kind. By caring for the Earth. By treating everyone fairly. YOU are a world changer!' },
      { type: 'yes-no', scenario: 'Can a kid like YOU help make the world better?', correctAnswer: true, image: '/game-assets/frontier/heart-with-rays.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows changing the world for the BETTER?', guideText: 'Tap the kid imagining a better world!',
        items: [
          { image: '/game-assets/frontier/child-imagining-better-world.png', label: 'Imagining better world', correct: true },
          { image: '/game-assets/frontier/kids-arguing-toy.png', label: 'Kids fighting' },
          { image: '/game-assets/frontier/unequal-portions.png', label: 'Unfair sharing' },
          { image: '/game-assets/frontier/chaos-no-rules.png', label: 'Chaos' }
        ]
      },
      { type: 'teach', image: '/game-assets/frontier/magical-sparkle-burst.png', guideText: 'Wow, {name}! You finished Frontier and Philosophy! You are a thinker, a wonderer, and a world changer. The world needs YOU!' },
      { type: 'yes-no', scenario: 'Are YOU someone who can make the world better?', correctAnswer: true, image: '/game-assets/frontier/child-imagining-better-world.png' },
      { type: 'family', guideText: 'Tonight, share with your family — what is ONE thing YOU would change about the world? Anything! No idea is too big. They will love hearing your dream!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'World Changer', guideText: 'You are a world changer, {name}! Great work, you finished Frontier and Philosophy!' }
    ]
  }
];

export default frontierLittleStars;
