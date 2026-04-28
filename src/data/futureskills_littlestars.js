export const futureskillsLittleStars = [
  {
    id: "fs-3-5-01",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 1,
    title: "Computers Help People",
    duration: "5 min",
    badge: "Computer Friend",
    nextLesson: "fs-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Byte. Today we learn about COMPUTERS!' },
      { type: 'story', image: '/game-assets/future-skills/computer-glowing.png', guideText: 'Computers are amazing helper machines! They can do math really fast, store lots of pictures and stories, talk to other computers far away, and help us learn new things. People made computers to help us solve big problems!' },
      { type: 'teach', image: '/game-assets/future-skills/computer-glowing.png', guideText: 'Computers help doctors, teachers, builders, artists — almost everyone uses one!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Tap the COMPUTER!', guideText: 'Find the computer!',
        items: [
          { image: '/game-assets/future-skills/computer-glowing.png', label: 'Computer', correct: true },
          { image: '/game-assets/future-skills/building-blocks.png', label: 'Blocks' },
          { image: '/game-assets/future-skills/lightbulb-idea.png', label: 'Lightbulb' },
          { image: '/game-assets/future-skills/puzzle-pieces.png', label: 'Puzzle' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/tablet-device.png', guideText: 'Computers come in many shapes — laptops, tablets, and phones are all computers!' },
      { type: 'yes-no', scenario: 'Do computers help people?', correctAnswer: true, image: '/game-assets/future-skills/computer-glowing.png' },
      { type: 'family', guideText: 'Together, count how many computers are in your home today. Phones count! Tablets count! TVs that show apps count too. How many did you find?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Computer Friend', guideText: 'You met your computer friend, {name}!' }
    ]
  },
  {
    id: "fs-3-5-02",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 2,
    title: "What Can Technology Do?",
    duration: "5 min",
    badge: "Tech Explorer",
    nextLesson: "fs-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we explore what TECHNOLOGY can do!' },
      { type: 'story', image: '/game-assets/future-skills/app-icons.png', guideText: 'Technology is anything humans build to help us do things faster or easier. Phones let us call friends far away. Cars take us places quickly. Microwaves heat our food in seconds. Apps on tablets help us learn and play. Technology is everywhere!' },
      { type: 'teach', image: '/game-assets/future-skills/tablet-device.png', guideText: 'Apps are like little helpers that live inside your tablet — each one does something different!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What is on a TABLET?', guideText: 'Tap what you find on a tablet!',
        items: [
          { image: '/game-assets/future-skills/app-icons.png', label: 'Apps', correct: true },
          { image: '/game-assets/future-skills/paper-pages.png', label: 'Paper pages' },
          { image: '/game-assets/future-skills/crayons-art.png', label: 'Crayons' },
          { image: '/game-assets/future-skills/cookies-snack.png', label: 'Cookies' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/phone-device.png', guideText: 'Phones can do SO many things — call, take pictures, play music, show maps. Like having a magic helper in your pocket!' },
      { type: 'yes-no', scenario: 'Can a phone take pictures?', correctAnswer: true, image: '/game-assets/future-skills/phone-device.png' },
      { type: 'family', guideText: 'Together, name 3 things technology helps your family do every day — like cooking food, watching shows, or talking to grandma. Technology is everywhere in your day!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Tech Explorer', guideText: 'You explored technology, {name}!' }
    ]
  },
  {
    id: "fs-3-5-03",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 3,
    title: "Taking Turns With Screens",
    duration: "5 min",
    badge: "Screen Smart",
    nextLesson: "fs-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about SCREEN TIME!' },
      { type: 'story', image: '/game-assets/future-skills/screen-time-timer.png', guideText: 'Screens are fun — but our brains and eyes also need other things! Playing outside, reading books, talking with people, and using your hands to build are all important too. Smart kids take turns between screen time and other fun things!' },
      { type: 'teach', image: '/game-assets/future-skills/screen-time-timer.png', guideText: 'A timer helps you know when screen time is done — then it is time for something else fun!' },
      { type: 'yes-no', scenario: 'Should we take breaks from screens?', correctAnswer: true, image: '/game-assets/future-skills/screen-time-timer.png' },
      { type: 'sort-buckets',
        instruction: 'Sort screen time and other fun!',
        guideText: 'Drag each one to the right place!',
        buckets: [
          { label: 'Screen', image: '/game-assets/future-skills/tablet-device.png' },
          { label: 'Other fun', image: '/game-assets/future-skills/building-blocks.png' }
        ],
        items: [
          { image: '/game-assets/future-skills/tablet-device.png', bucket: 0 },
          { image: '/game-assets/future-skills/phone-device.png', bucket: 0 },
          { image: '/game-assets/future-skills/building-blocks.png', bucket: 1 },
          { image: '/game-assets/future-skills/puzzle-pieces.png', bucket: 1 }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/building-blocks.png', guideText: 'Your brain LOVES doing different things — screens, blocks, books, friends. Variety makes you stronger!' },
      { type: 'family', guideText: 'Together, set a screen timer for 15 minutes. When it beeps, do something different together — build, draw, or run around. Your brain will thank you!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Screen Smart', guideText: 'You are screen smart, {name}!' }
    ]
  },
  {
    id: "fs-3-5-04",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 4,
    title: "My Favorite App and Why I Like It",
    duration: "5 min",
    badge: "App Inventor",
    nextLesson: "fs-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we think about APPS we love!' },
      { type: 'story', image: '/game-assets/future-skills/app-icons.png', guideText: 'Apps are little programs that live inside phones and tablets. Some apps help you draw. Some play music. Some teach you words. Some let you talk to grandma. The best apps help you learn or create something new!' },
      { type: 'teach', image: '/game-assets/future-skills/lightbulb-idea.png', guideText: 'Smart kids pick apps that help them grow — not just apps that watch you do nothing!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Where do you find APPS?', guideText: 'Tap where apps live!',
        items: [
          { image: '/game-assets/future-skills/tablet-device.png', label: 'Tablet', correct: true },
          { image: '/game-assets/future-skills/book-physical.png', label: 'Paper book' },
          { image: '/game-assets/future-skills/tv-old.png', label: 'Old TV' },
          { image: '/game-assets/future-skills/radio-old.png', label: 'Old radio' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/creative-spark.png', guideText: 'One day, YOU could invent an app that helps people! Apps start with one good idea.' },
      { type: 'yes-no', scenario: 'Can apps help us learn?', correctAnswer: true, image: '/game-assets/future-skills/app-icons.png' },
      { type: 'family', guideText: 'Together, talk about your favorite app. Why do you like it? What does it help you do? If you could invent any app, what would it do?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'App Inventor', guideText: 'You think like an app inventor, {name}!' }
    ]
  },
  {
    id: "fs-3-5-05",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 5,
    title: "Robots Are Real!",
    duration: "5 min",
    badge: "Robot Friend",
    nextLesson: "fs-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we meet REAL ROBOTS!' },
      { type: 'story', image: '/game-assets/future-skills/friendly-robot.png', guideText: 'Robots are real — they exist outside of stories and movies! Some robots clean floors in our houses. Some robots help build cars in factories. Some robots even explore Mars! People build robots to do hard or dangerous jobs that humans cannot do easily.' },
      { type: 'teach', image: '/game-assets/future-skills/robot-parts.png', guideText: 'Robots have parts like we do — heads, arms, legs — but theirs are made of metal and have computers inside!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is a ROBOT?', guideText: 'Tap the friendly robot!',
        items: [
          { image: '/game-assets/future-skills/friendly-robot.png', label: 'Robot', correct: true },
          { image: '/game-assets/future-skills/computer-glowing.png', label: 'Computer' },
          { image: '/game-assets/future-skills/lightbulb-idea.png', label: 'Lightbulb' },
          { image: '/game-assets/future-skills/building-blocks.png', label: 'Blocks' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/robot-helper.png', guideText: 'The best robots are HELPERS — they make life easier and safer for people!' },
      { type: 'yes-no', scenario: 'Are robots real machines that help people?', correctAnswer: true, image: '/game-assets/future-skills/robot-helper.png' },
      { type: 'family', guideText: 'Together, look around your home for things that work like little robots — a vacuum that moves on its own, a thermostat, a microwave. Tech helpers are everywhere!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Robot Friend', guideText: 'You met real robots, {name}!' }
    ]
  },
  {
    id: "fs-3-5-06",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 6,
    title: "Problem Solving: What Do I Try First?",
    duration: "5 min",
    badge: "Problem Solver",
    nextLesson: "fs-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we become PROBLEM SOLVERS!' },
      { type: 'story', image: '/game-assets/future-skills/puzzle-pieces.png', guideText: 'Every day, you meet little problems — a puzzle is too hard, your shoe is tied weird, your tower keeps falling. Problem solving is the magic skill of figuring out HOW to fix things. Every great inventor, scientist, and builder is a problem solver!' },
      { type: 'teach', image: '/game-assets/future-skills/brain-thinking.png', guideText: 'When you see a problem, the first thing to do is THINK — what is happening? What could I try?' },
      { type: 'yes-no', scenario: 'Should you think before trying to solve a problem?', correctAnswer: true, image: '/game-assets/future-skills/brain-thinking.png' },
      { type: 'teach', image: '/game-assets/future-skills/puzzle-pieces.png', guideText: 'Every puzzle piece fits SOMEWHERE — you just have to find the right spot. Same with problems!' },
      { type: 'yes-no', scenario: 'Should you think before trying to solve a problem?', correctAnswer: true, image: '/game-assets/future-skills/brain-thinking.png' },
      { type: 'family', guideText: 'Together, find one little problem at home — like a puzzle, a stuck zipper, or a too-high shelf. Practice thinking first, then trying. You are a problem solver!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Problem Solver', guideText: 'You solve problems, {name}!' }
    ]
  },
  {
    id: "fs-3-5-07",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 7,
    title: "Asking Good Questions",
    duration: "5 min",
    badge: "Question Master",
    nextLesson: "fs-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we ask GREAT QUESTIONS!' },
      { type: 'story', image: '/game-assets/future-skills/question-mark-glowing.png', guideText: 'Asking questions is a SUPERPOWER. Every great inventor and scientist starts with a question. Why does the sky look blue? How do birds fly? What if I tried it differently? Questions help your brain grow bigger and stronger every single day!' },
      { type: 'teach', image: '/game-assets/future-skills/brain-thinking.png', guideText: 'When you do not know something, ASK. Asking is how smart people learn!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What do you do when you do not know something?', guideText: 'Tap the question mark!',
        items: [
          { image: '/game-assets/future-skills/question-mark-glowing.png', label: 'Ask a question', correct: true },
          { image: '/game-assets/future-skills/child-shrugging.png', label: 'Shrug it off' },
          { image: '/game-assets/future-skills/child-pretending-know.png', label: 'Pretend to know' },
          { image: '/game-assets/future-skills/child-making-up.png', label: 'Make up an answer' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/lightbulb-idea.png', guideText: 'Good questions start with WHO, WHAT, WHERE, WHEN, WHY, or HOW. Try them out!' },
      { type: 'yes-no', scenario: 'Is asking questions a good way to learn?', correctAnswer: true, image: '/game-assets/future-skills/question-mark-glowing.png' },
      { type: 'family', guideText: 'Tonight, take turns asking each other ONE big question — like why is grass green or how do clouds float. You do not need to know the answer to ask a great question!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Question Master', guideText: 'You ask great questions, {name}!' }
    ]
  },
  {
    id: "fs-3-5-08",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 8,
    title: "Trying Again",
    duration: "5 min",
    badge: "Never Give Up",
    nextLesson: "fs-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to TRY AGAIN!' },
      { type: 'story', image: '/game-assets/future-skills/try-again.png', guideText: 'Sometimes things do not work the first time — your tower falls, your puzzle piece does not fit, your drawing does not look right. That is OKAY! Every great inventor failed many times before they succeeded. Trying again is how you learn and grow. Do not give up!' },
      { type: 'teach', image: '/game-assets/future-skills/lightbulb-idea.png', guideText: 'When you try AGAIN, your brain learns something new each time — even if it does not work, you are getting smarter!' },
      { type: 'yes-no', scenario: 'Should you give up if something does not work the first time?', correctAnswer: false, image: '/game-assets/future-skills/try-again.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What do you do when something does not work?', guideText: 'Tap try again!',
        items: [
          { image: '/game-assets/future-skills/try-again.png', label: 'Try again', correct: true },
          { image: '/game-assets/future-skills/child-frustrated-quit.png', label: 'Quit angrily' },
          { image: '/game-assets/future-skills/child-blaming.png', label: 'Blame someone' },
          { image: '/game-assets/future-skills/child-hiding-fail.png', label: 'Hide it' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/brain-thinking.png', guideText: 'Smart people say: I have not figured it out YET. They know they will get it eventually!' },
      { type: 'family', guideText: 'Together, find something hard to do — stacking blocks, balancing on one foot, drawing a circle. Try it three times. See how much better you get with each try!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Never Give Up', guideText: 'You never give up, {name}!' }
    ]
  },
  {
    id: "fs-3-5-09",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 9,
    title: "Working Together",
    duration: "5 min",
    badge: "Team Player",
    nextLesson: "fs-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we work as a TEAM!' },
      { type: 'story', image: '/game-assets/future-skills/kids-working-together.png', guideText: 'Some problems are too BIG for one person to solve alone. That is when we work together! When two people share ideas, the answer comes faster. When three people lift something heavy, it is easier. Teams build the biggest, coolest things in the world!' },
      { type: 'teach', image: '/game-assets/future-skills/kids-working-together.png', guideText: 'Working together means listening to each other, sharing ideas, and helping when someone is stuck!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What does it look like to work as a TEAM?', guideText: 'Tap kids working together!',
        items: [
          { image: '/game-assets/future-skills/kids-working-together.png', label: 'Working together', correct: true },
          { image: '/game-assets/future-skills/kid-alone-working.png', label: 'Alone with everything' },
          { image: '/game-assets/future-skills/kids-arguing-team.png', label: 'Team arguing' },
          { image: '/game-assets/future-skills/kid-bossing.png', label: 'Bossing others' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/robot-helper.png', guideText: 'Even robots and humans can be a team — the robot helps the human, the human helps the robot!' },
      { type: 'yes-no', scenario: 'Is working as a team helpful?', correctAnswer: true, image: '/game-assets/future-skills/kids-working-together.png' },
      { type: 'family', guideText: 'Together, find one task to do as a team tonight — making dinner, cleaning up toys, or building a fort. Notice how working together makes it faster AND more fun!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Team Player', guideText: 'You are a great teammate, {name}!' }
    ]
  },
  {
    id: "fs-3-5-10",
    subject: "Future Skills",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Byte",
    guideAnimal: "Fox",
    lessonNumber: 10,
    title: "Creativity: Making Something New",
    duration: "5 min",
    badge: "Creative Genius",
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we are CREATIVE GENIUSES!' },
      { type: 'story', image: '/game-assets/future-skills/creative-spark.png', guideText: 'Creativity is when you make something that did not exist before. It could be a drawing, a song, a story, a dance, or a brand new game. Every person on Earth has creativity inside them — including YOU. Your imagination is one of the most powerful tools you will ever have!' },
      { type: 'teach', image: '/game-assets/future-skills/lightbulb-idea.png', guideText: 'Creativity starts with one little idea — a spark in your brain. Then you make it real with your hands, voice, or words!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows CREATIVITY?', guideText: 'Tap a kid making something new!',
        items: [
          { image: '/game-assets/future-skills/kids-creating.png', label: 'Creating', correct: true },
          { image: '/game-assets/future-skills/child-watching-tv.png', label: 'Just watching' },
          { image: '/game-assets/future-skills/child-copying.png', label: 'Copying others' },
          { image: '/game-assets/future-skills/child-blank-paper.png', label: 'Blank paper' }
        ]
      },
      { type: 'teach', image: '/game-assets/future-skills/building-blocks.png', guideText: 'You can be creative with blocks, paint, music, or words — anything! There is no wrong way to create!' },
      { type: 'yes-no', scenario: 'Do you have creativity inside you?', correctAnswer: true, image: '/game-assets/future-skills/creative-spark.png' },
      { type: 'family', guideText: 'Tonight, make ONE new thing together — a paper airplane, a silly song, a block tower, a drawing of a make-believe animal. Anything! Creativity loves to play!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Creative Genius', guideText: 'You are a creative genius, {name}!' }
    ]
  }
];

export default futureskillsLittleStars;
