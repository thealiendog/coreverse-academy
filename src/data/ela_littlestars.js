export const elaLittleStars = [
  {
    id: 'ela-3-5-01',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 1,
    title: 'The Alphabet',
    duration: '3-5 min',
    badge: 'Letter Friend',
    nextLesson: 'ela-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Quill! I love LETTERS. Today we meet the alphabet — the special friends that make all our words!' },
      { type: 'story', image: '/game-assets/ela/alphabet-rainbow.png', guideText: 'There are 26 letters in the alphabet. Each letter is special! When we put letters together, we make WORDS! And words tell us EVERYTHING!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which letter is A?', guideText: 'Tap the letter A!',
        items: [
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A', correct: true },
          { image: '/game-assets/ela/letter-B.png', label: 'Letter B' },
          { image: '/game-assets/ela/letter-C.png', label: 'Letter C' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/letter-B.png', guideText: 'This is the letter B! B is the SECOND letter in the alphabet. Beautiful B!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which letter is B?', guideText: 'Tap the letter B!',
        items: [
          { image: '/game-assets/ela/letter-B.png', label: 'Letter B', correct: true },
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A' },
          { image: '/game-assets/ela/letter-C.png', label: 'Letter C' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/letter-C.png', guideText: 'And this is the letter C! C is curvy and cool!' },
      { type: 'yes-no', scenario: 'Are there many letters in the alphabet?', correctAnswer: true, image: '/game-assets/ela/alphabet-rainbow.png' },
      { type: 'family', guideText: 'Tonight, sing the alphabet song with your family! A B C D E F G... You probably already know some of it. Sing as loud as you can!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Letter Friend', guideText: 'You met the alphabet, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-02',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 2,
    title: 'Letter Sounds',
    duration: '3-5 min',
    badge: 'Sound Maker',
    nextLesson: 'ela-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn what letters SOUND like!' },
      { type: 'story', image: '/game-assets/ela/letter-A-apple.png', guideText: 'Every letter has its own SOUND! When you say A, your mouth opens wide — aaah! Apple starts with A — and so does your mouth-sound!' },
      { type: 'teach', image: '/game-assets/ela/letter-A-apple.png', guideText: 'A makes the AAH sound. A — Apple. A — Ant. A — Alligator! Listen for the AAH at the start!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one starts with A like APPLE?', guideText: 'Tap the apple!',
        items: [
          { image: '/game-assets/ela/letter-A-apple.png', label: 'Apple — A', correct: true },
          { image: '/game-assets/ela/letter-B-ball.png', label: 'Ball — B' },
          { image: '/game-assets/ela/letter-C-cat.png', label: 'Cat — C' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/letter-B-ball.png', guideText: 'B makes the BUH sound. B — Ball. B — Bear. B — Bunny! When your lips press together — that is B!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one starts with B like BALL?', guideText: 'Tap the ball!',
        items: [
          { image: '/game-assets/ela/letter-B-ball.png', label: 'Ball — B', correct: true },
          { image: '/game-assets/ela/letter-A-apple.png', label: 'Apple — A' },
          { image: '/game-assets/ela/letter-C-cat.png', label: 'Cat — C' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/letter-C-cat.png', guideText: 'C makes the KUH sound — like Cat. Or sometimes the SSS sound — like Circle. C is tricky!' },
      { type: 'family', guideText: 'Tonight, play I Spy with your family using letter sounds! I spy something starting with B! What can you find that starts with each letter?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sound Maker', guideText: 'You make letter sounds, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-03',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 3,
    title: 'Words Around Us',
    duration: '3-5 min',
    badge: 'Word Watcher',
    nextLesson: 'ela-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn that letters become WORDS!' },
      { type: 'story', image: '/game-assets/ela/word-cat.png', guideText: 'When you put letters TOGETHER, you make a WORD! Look — C, A, T spells CAT! Three letters became a meaningful word. That is the magic of reading!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which spells CAT?', guideText: 'Tap the word CAT!',
        items: [
          { image: '/game-assets/ela/word-cat.png', label: 'Word CAT', correct: true },
          { image: '/game-assets/ela/word-dog.png', label: 'Word DOG' },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/word-dog.png', guideText: 'D, O, G — that spells DOG! Three letters that name our furry friend!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which spells DOG?', guideText: 'Tap the word DOG!',
        items: [
          { image: '/game-assets/ela/word-dog.png', label: 'Word DOG', correct: true },
          { image: '/game-assets/ela/word-cat.png', label: 'Word CAT' },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/word-sun.png', guideText: 'S, U, N spells SUN! That bright shining ball in the sky has only THREE letters!' },
      { type: 'yes-no', scenario: 'Do letters work TOGETHER to make words?', correctAnswer: true, image: '/game-assets/ela/word-cat.png' },
      { type: 'family', guideText: 'Tonight, look around your home for WORDS with your family! On cereal boxes, books, signs. Words are everywhere!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Word Watcher', guideText: 'You see words, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-04',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 4,
    title: 'Rhyming Words',
    duration: '3-5 min',
    badge: 'Rhyme Maker',
    nextLesson: 'ela-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we play with RHYMES — words that sound the same at the end!' },
      { type: 'story', image: '/game-assets/ela/cat-hat-rhyme.png', guideText: 'CAT and HAT sound the same at the end — that is a RHYME! Rhyming makes words sound like a song. Rhymes are everywhere in books and songs!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one rhymes with CAT?', guideText: 'Tap the rhyming pair!',
        items: [
          { image: '/game-assets/ela/cat-hat-rhyme.png', label: 'Cat and Hat', correct: true },
          { image: '/game-assets/ela/storybook-hero.png', label: 'A hero' },
          { image: '/game-assets/ela/word-dog.png', label: 'Word DOG' },
          { image: '/game-assets/ela/letter-B.png', label: 'Letter B' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/bee-tree-rhyme.png', guideText: 'BEE and TREE rhyme! Both end with EEEE sound! Listen — beeeee, treeee!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which rhymes with TREE?', guideText: 'Tap the bee and tree!',
        items: [
          { image: '/game-assets/ela/bee-tree-rhyme.png', label: 'Bee and Tree', correct: true },
          { image: '/game-assets/ela/cat-hat-rhyme.png', label: 'Cat and Hat' },
          { image: '/game-assets/ela/mouse-house-rhyme.png', label: 'Mouse and House' },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/mouse-house-rhyme.png', guideText: 'MOUSE and HOUSE rhyme too! Both end with the OWWSE sound. Mouse — house!' },
      { type: 'yes-no', scenario: 'Do CAT and HAT rhyme?', correctAnswer: true, image: '/game-assets/ela/cat-hat-rhyme.png' },
      { type: 'family', guideText: 'Tonight, make up a rhyme with your family! Pick a word and find words that rhyme — fish and dish, cake and lake, star and far!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Rhyme Maker', guideText: 'You make rhymes, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-05',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 5,
    title: 'My Name',
    duration: '3-5 min',
    badge: 'Name Knower',
    nextLesson: 'ela-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn the most special word — YOUR NAME!' },
      { type: 'story', image: '/game-assets/ela/name-letters-personalized.png', guideText: 'Your NAME is the most important word for you! It is made of letters just like cat and dog. The letters in YOUR name are special — they spell YOU!' },
      { type: 'teach', image: '/game-assets/ela/child-pointing-letters.png', guideText: 'Look at YOUR name when you can. The first letter is special — it starts your name! Big letters at the beginning of names — that is called CAPITAL letter!' },
      { type: 'yes-no', scenario: 'Is your name made of letters?', correctAnswer: true, image: '/game-assets/ela/name-letters-personalized.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows letters that make a NAME?', guideText: 'Tap the letters!',
        items: [
          { image: '/game-assets/ela/name-letters-personalized.png', label: 'Letters', correct: true },
          { image: '/game-assets/ela/cat-hat-rhyme.png', label: 'Cat and Hat' },
          { image: '/game-assets/ela/storybook-friend-animal.png', label: 'Animal' },
          { image: '/game-assets/ela/imagination-burst.png', label: 'Imagination' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/child-pointing-letters.png', guideText: 'Soon you will be able to write your name all by yourself! Practice tracing the letters with your finger!' },
      { type: 'yes-no', scenario: 'Is your name important?', correctAnswer: true, image: '/game-assets/ela/child-pointing-letters.png' },
      { type: 'family', guideText: 'Tonight, ask a grown-up to write YOUR name big on paper. Then trace each letter with your finger! Try to remember every letter in your name!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Name Knower', guideText: 'You know your name, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-06',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 6,
    title: 'Beginning, Middle, End',
    duration: '3-5 min',
    badge: 'Story Listener',
    nextLesson: 'ela-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn that every story has THREE parts!' },
      { type: 'story', image: '/game-assets/ela/story-beginning.png', guideText: 'Every story has a BEGINNING — where it starts. A MIDDLE — where the exciting stuff happens. And an END — where the story finishes. Like your day! You wake up, you play, you sleep!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one shows the BEGINNING of a story?', guideText: 'Tap the start!',
        items: [
          { image: '/game-assets/ela/story-beginning.png', label: 'Beginning', correct: true },
          { image: '/game-assets/ela/story-middle.png', label: 'Middle' },
          { image: '/game-assets/ela/story-ending.png', label: 'End' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/story-middle.png', guideText: 'In the MIDDLE of a story, EXCITING things happen. The character meets friends, has problems, goes on adventures!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows the MIDDLE of a story?', guideText: 'Tap the exciting middle!',
        items: [
          { image: '/game-assets/ela/story-middle.png', label: 'Middle', correct: true },
          { image: '/game-assets/ela/story-beginning.png', label: 'Beginning' },
          { image: '/game-assets/ela/story-ending.png', label: 'End' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/story-ending.png', guideText: 'And at the END, everything wraps up. The character celebrates! The adventure is done!' },
      { type: 'yes-no', scenario: 'Does every story have a beginning, middle, AND end?', correctAnswer: true, image: '/game-assets/ela/story-ending.png' },
      { type: 'family', guideText: 'Tonight, tell your family a tiny story. Pick a beginning, a middle, and an end! It can be about anything — a dog, a cookie, a magic trip!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Story Listener', guideText: 'You know story parts, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-07',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 7,
    title: 'Characters in Stories',
    duration: '3-5 min',
    badge: 'Character Knower',
    nextLesson: 'ela-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we meet the people in stories — CHARACTERS!' },
      { type: 'story', image: '/game-assets/ela/storybook-hero.png', guideText: 'A CHARACTER is anyone in a story — a brave kid, a talking dog, a wise grandma. Every story is about characters! When we read, we get to know them like friends!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a CHARACTER?', guideText: 'Tap the storybook hero!',
        items: [
          { image: '/game-assets/ela/storybook-hero.png', label: 'Hero', correct: true },
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A' },
          { image: '/game-assets/ela/word-cat.png', label: 'Word CAT' },
          { image: '/game-assets/ela/alphabet-rainbow.png', label: 'Alphabet' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/storybook-friend-animal.png', guideText: 'Characters can be ANIMALS too! In Charlotte\'s Web, there is a pig and a spider. In Frog and Toad, there are two frog friends! Animals make great characters!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is an ANIMAL character?', guideText: 'Tap the animal friend!',
        items: [
          { image: '/game-assets/ela/storybook-friend-animal.png', label: 'Animal friend', correct: true },
          { image: '/game-assets/ela/storybook-hero.png', label: 'Hero kid' },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' },
          { image: '/game-assets/ela/imagination-burst.png', label: 'Sparkles' }
        ]
      },
      { type: 'yes-no', scenario: 'Can characters in stories be people OR animals?', correctAnswer: true, image: '/game-assets/ela/storybook-friend-animal.png' },
      { type: 'family', guideText: 'Tonight, pick a favorite story with your family. Who are the CHARACTERS? What are they like? Talk about them!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Character Knower', guideText: 'You know story characters, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-08',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 8,
    title: 'Asking Questions About Books',
    duration: '3-5 min',
    badge: 'Curious Reader',
    nextLesson: 'ela-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to ASK QUESTIONS about what we read!' },
      { type: 'story', image: '/game-assets/ela/child-asking-book.png', guideText: 'Good readers ASK QUESTIONS while they read! Why did that happen? What will happen next? How does the character feel? Asking questions makes reading even MORE fun!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows asking a QUESTION?', guideText: 'Tap the curious child!',
        items: [
          { image: '/game-assets/ela/child-asking-book.png', label: 'Curious reader', correct: true },
          { image: '/game-assets/ela/word-cat.png', label: 'Word CAT' },
          { image: '/game-assets/ela/letter-B.png', label: 'Letter B' },
          { image: '/game-assets/ela/cat-hat-rhyme.png', label: 'Cat and Hat' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/question-mark-glowing-quill.png', guideText: 'A question mark looks like this — a curve with a dot at the bottom. When you ask Why? or How? or What? — those are questions!' },
      { type: 'yes-no', scenario: 'Should we ask questions when we read?', correctAnswer: true, image: '/game-assets/ela/child-asking-book.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a QUESTION MARK?', guideText: 'Tap the question mark!',
        items: [
          { image: '/game-assets/ela/question-mark-glowing-quill.png', label: 'Question mark', correct: true },
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A' },
          { image: '/game-assets/ela/letter-B.png', label: 'Letter B' },
          { image: '/game-assets/ela/word-dog.png', label: 'Word DOG' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/child-asking-book.png', guideText: 'When you read a book and ASK a question, your brain GROWS! Curious readers learn the most!' },
      { type: 'family', guideText: 'Tonight, when you read with your family, ASK A QUESTION about the book! Why did this happen? Who is your favorite? Get curious!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Curious Reader', guideText: 'You ask great questions, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-09',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 9,
    title: 'Drawing What I Hear',
    duration: '3-5 min',
    badge: 'Story Picturer',
    nextLesson: 'ela-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we use IMAGINATION when we listen to stories!' },
      { type: 'story', image: '/game-assets/ela/child-drawing-imagining.png', guideText: 'When someone reads you a story, your IMAGINATION makes pictures in your head! Even before you can read the words, you can SEE the story in your mind. That is amazing!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows IMAGINATION?', guideText: 'Tap the kid imagining!',
        items: [
          { image: '/game-assets/ela/child-drawing-imagining.png', label: 'Drawing imagination', correct: true },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' },
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A' },
          { image: '/game-assets/ela/storybook-friend-animal.png', label: 'Animal' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/imagination-burst.png', guideText: 'Imagination has NO RULES! In your imagination, dragons can fly, kids can fly, soup can fly! Whatever you imagine is real in your mind!' },
      { type: 'yes-no', scenario: 'Can you imagine ANYTHING in your mind?', correctAnswer: true, image: '/game-assets/ela/imagination-burst.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows lots of IMAGINATION?', guideText: 'Tap the magical burst!',
        items: [
          { image: '/game-assets/ela/imagination-burst.png', label: 'Imagination burst', correct: true },
          { image: '/game-assets/ela/word-dog.png', label: 'Word DOG' },
          { image: '/game-assets/ela/letter-C.png', label: 'Letter C' },
          { image: '/game-assets/ela/cat-hat-rhyme.png', label: 'Cat and Hat' }
        ]
      },
      { type: 'family', guideText: 'Tonight, listen to a story or pretend to be in one with your family. Close your eyes and SEE the story in your mind! Then DRAW what you saw!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Story Picturer', guideText: 'You imagine stories, {name}!' }
    ]
  },
  {
    id: 'ela-3-5-10',
    subject: 'ELA',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Quill',
    guideAnimal: 'Porcupine',
    lessonNumber: 10,
    title: 'The Love of Reading',
    duration: '3-5 min',
    badge: 'Reader Forever',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate the BEST gift in the world — READING!' },
      { type: 'story', image: '/game-assets/ela/child-cozy-reading.png', guideText: 'Books are MAGIC! Inside a book, you can travel anywhere — to the moon, to a jungle, to a castle. You can meet animals, heroes, and dragons. All from one little book in your hands!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows READING?', guideText: 'Tap the cozy reader!',
        items: [
          { image: '/game-assets/ela/child-cozy-reading.png', label: 'Cozy reading', correct: true },
          { image: '/game-assets/ela/letter-A.png', label: 'Letter A' },
          { image: '/game-assets/ela/word-sun.png', label: 'Word SUN' },
          { image: '/game-assets/ela/imagination-burst.png', label: 'Sparkles' }
        ]
      },
      { type: 'teach', image: '/game-assets/ela/child-cozy-reading.png', guideText: 'Reading every day grows your BRAIN! Kids who love books learn faster, dream bigger, and have more fun!' },
      { type: 'yes-no', scenario: 'Are books like little adventures you can hold?', correctAnswer: true, image: '/game-assets/ela/child-cozy-reading.png' },
      { type: 'teach', image: '/game-assets/ela/imagination-burst.png', guideText: 'Soon YOU will be able to read all by yourself! Letters become sounds. Sounds become words. Words become STORIES that fill your imagination!' },
      { type: 'yes-no', scenario: 'Are YOU going to be an amazing reader?', correctAnswer: true, image: '/game-assets/ela/imagination-burst.png' },
      { type: 'family', guideText: 'Tonight, snuggle up with someone you love and read a book together! It is the BEST way to end any day. Let the words take you somewhere new!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Reader Forever', guideText: 'You love reading, {name}! Great work, you finished ELA!' }
    ]
  }
];

export default elaLittleStars;
