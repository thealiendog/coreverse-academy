export const moneybusinessLittleStars = [
  {
    id: "mb-3-5-01",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 1,
    title: "What Is Money?",
    duration: "5 min",
    badge: "Money Spotter",
    nextLesson: "mb-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Ace. Today we learn about MONEY!' },
      { type: 'story', image: '/game-assets/money/coins-pile.png', guideText: 'Money is something special. People use it to get food, toys, and things they love. There are coins that jingle, and paper bills called dollars!' },
      { type: 'teach', image: '/game-assets/money/coins-pile.png', guideText: 'Coins are made of metal. They are round and shiny!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Tap the MONEY!', guideText: 'Find the money — it is shiny and round!',
        items: [
          { image: '/game-assets/money/coins-pile.png', label: 'Coins', correct: true },
          { image: '/game-assets/money/clean-toy.png', label: 'Toy' },
          { image: '/game-assets/money/food-table.png', label: 'Food' },
          { image: '/game-assets/money/broken-toy.png', label: 'Old toy' }
        ]
      },
      { type: 'teach', image: '/game-assets/money/dollar-bill.png', guideText: 'Paper money is called a DOLLAR. It is green and folds up small!' },
      { type: 'yes-no', scenario: 'Can we use money to buy things we need?', correctAnswer: true, image: '/game-assets/money/money-mixed.png' },
      { type: 'family', guideText: 'Tonight, find a coin and a dollar bill at home together. Look at the pictures on each one. Touch them and feel the difference!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Money Spotter', guideText: 'You know what money is, {name}!' }
    ]
  },
  {
    id: "mb-3-5-02",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 2,
    title: "We Trade Money for Things",
    duration: "5 min",
    badge: "Trade Master",
    nextLesson: "mb-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about TRADING money!' },
      { type: 'story', image: '/game-assets/money/trade-scene.png', guideText: 'When we want something, we give money to get it. We give a coin, and we get an apple. That is called a TRADE!' },
      { type: 'teach', image: '/game-assets/money/trade-scene.png', guideText: 'Money for things. Things for money. That is how trading works!' },
      { type: 'yes-no', scenario: 'If I give one coin, can I get an apple?', correctAnswer: true, image: '/game-assets/money/trade-scene.png' },
      { type: 'tap-right', readOptions: false, instruction: 'Which one do we use to TRADE?', guideText: 'Tap the thing we use to trade!',
        items: [
          { image: '/game-assets/money/coins-pile.png', label: 'Coins', correct: true },
          { image: '/game-assets/money/clean-toy.png', label: 'Toy' },
          { image: '/game-assets/money/broken-toy.png', label: 'Old bear' },
          { image: '/game-assets/money/food-table.png', label: 'Food' }
        ]
      },
      { type: 'teach', image: '/game-assets/money/coins-pile.png', guideText: 'Without money, trading is hard. Money makes it easy to share what we have!' },
      { type: 'family', guideText: 'Tonight, pretend to play store at home. One person is the shopkeeper, the other is the buyer. Use real coins or pretend ones to trade for snacks!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Trade Master', guideText: 'You understand trading, {name}!' }
    ]
  },
  {
    id: "mb-3-5-03",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 3,
    title: "Needs vs Wants",
    duration: "5 min",
    badge: "Smart Chooser",
    nextLesson: "mb-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn NEEDS and WANTS!' },
      { type: 'story', image: '/game-assets/money/needs-trio.png', guideText: 'Some things we NEED — like food, water, and a home. We cannot live without them! Other things we just WANT — like toys and candy. They are fun, but we can live without them.' },
      { type: 'teach', image: '/game-assets/money/needs-trio.png', guideText: 'Food, water, a place to sleep — these are NEEDS. Our bodies need them every day!' },
      { type: 'yes-no', scenario: 'Is food a NEED that we cannot live without?', correctAnswer: true, image: '/game-assets/money/needs-trio.png' },
      { type: 'teach', image: '/game-assets/money/wants-trio.png', guideText: 'Toys, candy, balloons — these are WANTS. They make us happy, but we do not need them to live!' },
      { type: 'sort-buckets',
        instruction: 'Sort needs and wants!',
        guideText: 'Drag each one — is it a need or a want?',
        buckets: [
          { label: 'Needs', image: '/game-assets/money/needs-trio.png' },
          { label: 'Wants', image: '/game-assets/money/wants-trio.png' }
        ],
        items: [
          { image: '/game-assets/money/food-table.png', bucket: 0 },
          { image: '/game-assets/money/clean-toy.png', bucket: 1 },
          { image: '/game-assets/money/needs-trio.png', bucket: 0 },
          { image: '/game-assets/money/wants-trio.png', bucket: 1 }
        ]
      },
      { type: 'family', guideText: 'Tonight at dinner, talk about needs and wants. Name one thing you NEED and one thing you WANT. Are they different?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Smart Chooser', guideText: 'You know needs and wants, {name}!' }
    ]
  },
  {
    id: "mb-3-5-04",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 4,
    title: "Saving in a Piggy Bank",
    duration: "5 min",
    badge: "Super Saver",
    nextLesson: "mb-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to SAVE money!' },
      { type: 'story', image: '/game-assets/money/piggy-bank-empty.png', guideText: 'A piggy bank is a special place to keep coins. When my piggy bank is empty, I can fill it up little by little. Every coin counts!' },
      { type: 'teach', image: '/game-assets/money/piggy-bank-empty.png', guideText: 'An empty piggy bank waits for our coins. We drop them in one at a time!' },
      { type: 'yes-no', scenario: 'Does saving money mean keeping it for later?', correctAnswer: true, image: '/game-assets/money/piggy-bank-empty.png' },
      { type: 'teach', image: '/game-assets/money/piggy-bank-full.png', guideText: 'When we save many coins, our piggy bank gets FULL! Now we have lots of money saved up!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which piggy bank has SAVED a lot?', guideText: 'Tap the full one!',
        items: [
          { image: '/game-assets/money/piggy-bank-full.png', label: 'Full piggy bank', correct: true },
          { image: '/game-assets/money/piggy-bank-empty.png', label: 'Empty piggy bank' },
          { image: '/game-assets/money/dollar-bill.png', label: 'Dollar bill' },
          { image: '/game-assets/money/coins-pile.png', label: 'Pile of coins' }
        ]
      },
      { type: 'family', guideText: 'Tonight, find a jar or piggy bank at home. Put one coin inside together. Try to add a coin every day for a whole week!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Super Saver', guideText: 'You are a super saver, {name}!' }
    ]
  },
  {
    id: "mb-3-5-05",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 5,
    title: "Giving to Others Feels Good",
    duration: "5 min",
    badge: "Generous Heart",
    nextLesson: "mb-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how GIVING feels!' },
      { type: 'story', image: '/game-assets/money/giving-receiving.png', guideText: 'Sometimes I have a coin and a friend has none. When I give my coin to my friend, we both feel good! Giving is like magic — it makes our hearts bigger.' },
      { type: 'teach', image: '/game-assets/money/giving-receiving.png', guideText: 'Giving means sharing what we have with someone who needs it!' },
      { type: 'yes-no', scenario: 'Does giving to others make us feel good?', correctAnswer: true, image: '/game-assets/money/giving-receiving.png' },
      { type: 'yes-no', scenario: 'When you share a coin with a friend, is that giving?', correctAnswer: true, image: '/game-assets/money/giving-receiving.png' },
      { type: 'teach', image: '/game-assets/money/money-celebration.png', guideText: 'When we give, both people are happier. Money is even better when we share it!' },
      { type: 'family', guideText: 'Tonight, find a coin together and put it in a place where you can give it away — to a charity jar, a friend, or a piggy bank for someone else!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Generous Heart', guideText: 'You have a generous heart, {name}!' }
    ]
  },
  {
    id: "mb-3-5-06",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 6,
    title: "Working to Earn",
    duration: "5 min",
    badge: "Hard Worker",
    nextLesson: "mb-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how to EARN money!' },
      { type: 'story', image: '/game-assets/money/working-tasks.png', guideText: 'Money does not grow on trees. People EARN money by doing work. Building, growing food, helping others — every job earns money!' },
      { type: 'teach', image: '/game-assets/money/working-tasks.png', guideText: 'When we work, we make something or help someone. That is how we earn!' },
      { type: 'yes-no', scenario: 'Do people work to earn money?', correctAnswer: true, image: '/game-assets/money/working-tasks.png' },
      { type: 'yes-no', scenario: 'Is cleaning up a kind of work?', correctAnswer: true, image: '/game-assets/money/working-tasks.png' },
      { type: 'teach', image: '/game-assets/money/coins-pile.png', guideText: 'After working, we earn coins. We can save them, spend them, or share them!' },
      { type: 'family', guideText: 'Tonight, talk together about jobs. What does each grown-up in your family do for work? What might YOU do when you grow up?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Hard Worker', guideText: 'You understand work, {name}!' }
    ]
  },
  {
    id: "mb-3-5-07",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 7,
    title: "The Store: How Shopping Works",
    duration: "5 min",
    badge: "Shopping Star",
    nextLesson: "mb-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we go SHOPPING at the store!' },
      { type: 'story', image: '/game-assets/money/store-scene.png', guideText: 'A store has lots of things to buy. We pick what we want, put it in our cart, and pay at the end. Then we take our things home!' },
      { type: 'teach', image: '/game-assets/money/shopping-cart.png', guideText: 'A shopping cart helps us carry everything we want to buy!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Where do we go to BUY food?', guideText: 'Tap the right place!',
        items: [
          { image: '/game-assets/money/store-scene.png', label: 'Store', correct: true },
          { image: '/game-assets/money/piggy-bank-empty.png', label: 'Piggy bank' },
          { image: '/game-assets/money/clean-toy.png', label: 'Toy' },
          { image: '/game-assets/money/working-tasks.png', label: 'Work' }
        ]
      },
      { type: 'teach', image: '/game-assets/money/coins-pile.png', guideText: 'At the end, we pay with coins or dollars. The store keeps the money, and we keep the food!' },
      { type: 'yes-no', scenario: 'Do we pay money before we take things home from the store?', correctAnswer: true, image: '/game-assets/money/shopping-cart.png' },
      { type: 'family', guideText: 'Next time you go to the store together, point out the cart, the shelves, and the cash register. Watch how the money is paid at the end!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Shopping Star', guideText: 'You know how shopping works, {name}!' }
    ]
  },
  {
    id: "mb-3-5-08",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 8,
    title: "Food Costs Money",
    duration: "5 min",
    badge: "Food Knower",
    nextLesson: "mb-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how FOOD costs money!' },
      { type: 'story', image: '/game-assets/money/food-table.png', guideText: 'Every meal we eat — every apple, every piece of bread — was bought with money. Food does not just appear on our plates. Someone worked hard to grow it, and someone paid for it!' },
      { type: 'teach', image: '/game-assets/money/food-table.png', guideText: 'Food is precious. It takes work to grow it and money to buy it!' },
      { type: 'yes-no', scenario: 'Does food cost money?', correctAnswer: true, image: '/game-assets/money/food-table.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which costs MORE — a meal or candy?', guideText: 'Tap the one that costs more!',
        items: [
          { image: '/game-assets/money/food-table.png', label: 'Full meal', correct: true },
          { image: '/game-assets/money/wants-trio.png', label: 'Candy' },
          { image: '/game-assets/money/clean-toy.png', label: 'Toy' },
          { image: '/game-assets/money/coin-penny.png', label: 'One penny' }
        ]
      },
      { type: 'teach', image: '/game-assets/money/needs-trio.png', guideText: 'Because food is so important, we should never waste it. Eating it shows we are thankful!' },
      { type: 'family', guideText: 'Tonight at dinner, take a moment to thank the food. Talk about where it came from — a farm, a store, a kitchen. Food is a gift!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Food Knower', guideText: 'You know food is precious, {name}!' }
    ]
  },
  {
    id: "mb-3-5-09",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 9,
    title: "Taking Care of Our Things",
    duration: "5 min",
    badge: "Careful Keeper",
    nextLesson: "mb-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to TAKE CARE of our things!' },
      { type: 'story', image: '/game-assets/money/clean-toy.png', guideText: 'When we take good care of our toys and clothes, they last a long time! When we are careless, they break and we cannot use them anymore. Caring saves money!' },
      { type: 'teach', image: '/game-assets/money/clean-toy.png', guideText: 'A toy that is loved and cared for stays bright and beautiful for years!' },
      { type: 'yes-no', scenario: 'Is a clean, undamaged toy a toy that was taken care of?', correctAnswer: true, image: '/game-assets/money/clean-toy.png' },
      { type: 'teach', image: '/game-assets/money/broken-toy.png', guideText: 'A toy that was not cared for breaks. Then we have to buy a new one — that costs money!' },
      { type: 'yes-no', scenario: 'Does taking care of our things save money?', correctAnswer: true, image: '/game-assets/money/clean-toy.png' },
      { type: 'family', guideText: 'Tonight, pick one favorite toy together. Make a special spot where it will live. Promise to put it back there every time you finish playing!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Careful Keeper', guideText: 'You take great care of your things, {name}!' }
    ]
  },
  {
    id: "mb-3-5-10",
    subject: "Money & Business",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Ace",
    guideAnimal: "Eagle",
    lessonNumber: 10,
    title: "Helping at Home is Work Too",
    duration: "5 min",
    badge: "Family Helper",
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn that HELPING at home is real work!' },
      { type: 'story', image: '/game-assets/money/family-helping.png', guideText: 'When we help at home — putting toys away, setting the table, carrying groceries — that is REAL WORK. It helps the whole family. Helping makes us strong, kind, and proud!' },
      { type: 'teach', image: '/game-assets/money/helping-home.png', guideText: 'Picking up toys, making the bed, helping in the kitchen — every little job counts!' },
      { type: 'tap-right', readOptions: false, instruction: 'Which one is HELPING at home?', guideText: 'Tap the picture that shows helping!',
        items: [
          { image: '/game-assets/money/helping-home.png', label: 'Cleaning up', correct: true },
          { image: '/game-assets/money/child-making-mess.png', label: 'Making a mess' },
          { image: '/game-assets/money/child-watching-parents-work.png', label: 'Just watching parents' },
          { image: '/game-assets/money/child-leaving-toys-out.png', label: 'Leaving toys out' }
        ]
      },
      { type: 'teach', image: '/game-assets/money/family-helping.png', guideText: 'When everyone helps, the home runs smoothly. We work together as a TEAM!' },
      { type: 'yes-no', scenario: 'Is helping at home a way to be part of the family team?', correctAnswer: true, image: '/game-assets/money/family-helping.png' },
      { type: 'family', guideText: 'Tonight, pick one helping job together. Maybe carrying plates to the sink or putting shoes by the door. Make it YOUR special job for the whole week!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Family Helper', guideText: 'You are a family helper, {name}! I am so proud!' }
    ]
  }
];

export default moneybusinessLittleStars;
