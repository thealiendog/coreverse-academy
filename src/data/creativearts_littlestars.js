export const creativeartsLittleStars = [
  {
    id: 'ca-3-5-01',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 1,
    title: 'Colors Are Everywhere',
    duration: '3-5 min',
    badge: 'Color Explorer',
    nextLesson: 'ca-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Muse! Today we explore COLORS!' },
      { type: 'story', image: '/game-assets/creative-arts/colors-rainbow.png', guideText: 'Look! I see colors EVERYWHERE! Red like a strawberry, blue like the sky, yellow like the sun, green like grass! Colors make the world beautiful!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is RED?', guideText: 'Tap the red one!',
        items: [
          { image: '/game-assets/creative-arts/color-red.png', label: 'Red', correct: true },
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Blue' },
          { image: '/game-assets/creative-arts/color-yellow.png', label: 'Yellow' },
          { image: '/game-assets/creative-arts/color-green.png', label: 'Green' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/color-yellow.png', guideText: 'Yellow is bright like the sun! It makes me feel happy and warm!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is YELLOW?', guideText: 'Tap the yellow one!',
        items: [
          { image: '/game-assets/creative-arts/color-yellow.png', label: 'Yellow', correct: true },
          { image: '/game-assets/creative-arts/color-red.png', label: 'Red' },
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Blue' },
          { image: '/game-assets/creative-arts/color-green.png', label: 'Green' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/colors-rainbow.png', guideText: 'When all the colors come together, they make a RAINBOW! That is my favorite!' },
      { type: 'yes-no', scenario: 'Are colors everywhere we look?', correctAnswer: true, image: '/game-assets/creative-arts/colors-rainbow.png' },
      { type: 'family', guideText: 'Tonight, go on a Color Hunt with your family. Find one thing red, one thing blue, one thing yellow, and one thing green!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Color Explorer', guideText: 'You are a color explorer, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-02',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 2,
    title: 'Drawing My Family',
    duration: '3-5 min',
    badge: 'Family Artist',
    nextLesson: 'ca-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we DRAW our family!' },
      { type: 'story', image: '/game-assets/creative-arts/family-drawing.png', guideText: 'Drawing is one of the most special things you can do! When you draw your family, you show how much you LOVE them. Your drawing is one of a kind in the whole world!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What do we use to DRAW?', guideText: 'Tap what we use to draw!',
        items: [
          { image: '/game-assets/creative-arts/crayons-rainbow.png', label: 'Crayons', correct: true },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Playdough' },
          { image: '/game-assets/creative-arts/scissors-paper.png', label: 'Scissors' },
          { image: '/game-assets/creative-arts/block-tower.png', label: 'Blocks' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/blank-paper.png', guideText: 'Every drawing starts with a blank paper. The paper is waiting for your magic!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a drawing of a FAMILY?', guideText: 'Tap the family drawing!',
        items: [
          { image: '/game-assets/creative-arts/family-stick-figures.png', label: 'Stick figure family', correct: true },
          { image: '/game-assets/creative-arts/colors-rainbow.png', label: 'Just a rainbow' },
          { image: '/game-assets/creative-arts/playdough-snake.png', label: 'A snake' },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Blank paper' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/family-drawing.png', guideText: 'Stick figures are PERFECT! A circle for the head, lines for arms and legs. Now you can draw anyone!' },
      { type: 'yes-no', scenario: 'Is your family drawing special, even if it is simple?', correctAnswer: true, image: '/game-assets/creative-arts/family-drawing.png' },
      { type: 'family', guideText: 'Tonight, draw a picture of your family with crayons! Stick figures are great. Then show your family — they will love it!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Family Artist', guideText: 'You are a family artist, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-03',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 3,
    title: 'Making Music with My Body',
    duration: '3-5 min',
    badge: 'Body Musician',
    nextLesson: 'ca-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we make MUSIC with our bodies!' },
      { type: 'story', image: '/game-assets/creative-arts/clapping-hands.png', guideText: 'Did you know your body is a MUSIC INSTRUMENT? You can clap, stomp, sing, and drum on your knees — all without ANY tools! Music lives inside YOU!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is CLAPPING?', guideText: 'Tap the clapping hands!',
        items: [
          { image: '/game-assets/creative-arts/clapping-hands.png', label: 'Hands clapping', correct: true },
          { image: '/game-assets/creative-arts/stomping-feet.png', label: 'Feet stomping' },
          { image: '/game-assets/creative-arts/singing-mouth.png', label: 'Mouth singing' },
          { image: '/game-assets/creative-arts/drumming-lap.png', label: 'Hands drumming' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/stomping-feet.png', guideText: 'You can STOMP your feet to make a big BOOM sound!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is STOMPING?', guideText: 'Tap the stomping feet!',
        items: [
          { image: '/game-assets/creative-arts/stomping-feet.png', label: 'Feet stomping', correct: true },
          { image: '/game-assets/creative-arts/clapping-hands.png', label: 'Hands clapping' },
          { image: '/game-assets/creative-arts/singing-mouth.png', label: 'Mouth singing' },
          { image: '/game-assets/creative-arts/drumming-lap.png', label: 'Hands drumming' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/singing-mouth.png', guideText: 'And you can SING with your mouth! Music notes flow out like magic!' },
      { type: 'yes-no', scenario: 'Can your body make music with no instruments?', correctAnswer: true, image: '/game-assets/creative-arts/drumming-lap.png' },
      { type: 'family', guideText: 'Tonight, make a body music band with your family! Everyone picks one — clap, stomp, sing, or drum on knees. Make a song together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Body Musician', guideText: 'You are a body musician, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-04',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 4,
    title: 'Dance: Moving to the Beat',
    duration: '3-5 min',
    badge: 'Joyful Dancer',
    nextLesson: 'ca-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we DANCE!' },
      { type: 'story', image: '/game-assets/creative-arts/dancing-spinning.png', guideText: 'When music plays, your body wants to MOVE! That is dancing! There is no wrong way to dance — every person dances differently and that is what makes it beautiful!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is SPINNING?', guideText: 'Tap the spinning dancer!',
        items: [
          { image: '/game-assets/creative-arts/dancing-spinning.png', label: 'Spinning', correct: true },
          { image: '/game-assets/creative-arts/dancing-jumping.png', label: 'Jumping' },
          { image: '/game-assets/creative-arts/dancing-swaying.png', label: 'Swaying' },
          { image: '/game-assets/creative-arts/clapping-hands.png', label: 'Clapping' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/dancing-jumping.png', guideText: 'You can JUMP up high when the music gets loud! Your feet leave the ground!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is JUMPING?', guideText: 'Tap the jumping dancer!',
        items: [
          { image: '/game-assets/creative-arts/dancing-jumping.png', label: 'Jumping', correct: true },
          { image: '/game-assets/creative-arts/dancing-spinning.png', label: 'Spinning' },
          { image: '/game-assets/creative-arts/dancing-swaying.png', label: 'Swaying' },
          { image: '/game-assets/creative-arts/stomping-feet.png', label: 'Stomping' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/dancing-swaying.png', guideText: 'When the music is slow and soft, you SWAY gently like a leaf in the wind!' },
      { type: 'yes-no', scenario: 'Are there many different ways to dance?', correctAnswer: true, image: '/game-assets/creative-arts/music-notes-floating.png' },
      { type: 'family', guideText: 'Tonight, put on your favorite song and have a family dance party! Spin, jump, sway — whatever the music tells your body to do!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Joyful Dancer', guideText: 'You are a joyful dancer, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-05',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 5,
    title: 'Clay and Playdough Sculpting',
    duration: '3-5 min',
    badge: 'Sculptor',
    nextLesson: 'ca-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we make things with PLAYDOUGH!' },
      { type: 'story', image: '/game-assets/creative-arts/playdough-mixed-colors.png', guideText: 'Playdough is like SQUISHY MAGIC! You can squish it, roll it, flatten it, and make ANYTHING you imagine! Your hands are the artist!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a SNAKE shape?', guideText: 'Tap the long thin snake!',
        items: [
          { image: '/game-assets/creative-arts/playdough-snake.png', label: 'Snake shape', correct: true },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Ball shape' },
          { image: '/game-assets/creative-arts/playdough-flat.png', label: 'Flat pancake' },
          { image: '/game-assets/creative-arts/playdough-mixed-colors.png', label: 'Mixed colors' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/playdough-ball.png', guideText: 'Roll the playdough between your hands and you make a BALL! Round and smooth!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a BALL shape?', guideText: 'Tap the round ball!',
        items: [
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Ball shape', correct: true },
          { image: '/game-assets/creative-arts/playdough-snake.png', label: 'Snake shape' },
          { image: '/game-assets/creative-arts/playdough-flat.png', label: 'Flat pancake' },
          { image: '/game-assets/creative-arts/colors-rainbow.png', label: 'Rainbow' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/playdough-flat.png', guideText: 'Press it flat and you have a PANCAKE! Like a little dish!' },
      { type: 'yes-no', scenario: 'Can you mix different colors of playdough together?', correctAnswer: true, image: '/game-assets/creative-arts/playdough-mixed-colors.png' },
      { type: 'family', guideText: 'Tonight, use playdough or even mashed potatoes to make a snake, a ball, and a pancake. Let your hands do the magic!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sculptor', guideText: 'You are a sculptor, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-06',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 6,
    title: 'Collage: Cutting and Pasting',
    duration: '3-5 min',
    badge: 'Collage Maker',
    nextLesson: 'ca-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we make a COLLAGE!' },
      { type: 'story', image: '/game-assets/creative-arts/collage-finished.png', guideText: 'A collage is when you cut out pieces of paper and stick them together to make a brand-new picture! It is like a paper puzzle YOU design!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What do we use to CUT paper?', guideText: 'Tap the scissors!',
        items: [
          { image: '/game-assets/creative-arts/scissors-paper.png', label: 'Scissors', correct: true },
          { image: '/game-assets/creative-arts/glue-stick.png', label: 'Glue stick' },
          { image: '/game-assets/creative-arts/crayons-rainbow.png', label: 'Crayons' },
          { image: '/game-assets/creative-arts/paint-jars.png', label: 'Paint' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/glue-stick.png', guideText: 'After cutting, we use GLUE to stick the pieces down. The glue holds them in place forever!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What do we use to STICK paper?', guideText: 'Tap the glue stick!',
        items: [
          { image: '/game-assets/creative-arts/glue-stick.png', label: 'Glue stick', correct: true },
          { image: '/game-assets/creative-arts/scissors-paper.png', label: 'Scissors' },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Playdough' },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Paper' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/collage-finished.png', guideText: 'When you put it all together, you have a COLLAGE! It is yours forever — no two are the same!' },
      { type: 'yes-no', scenario: 'When you cut and paste paper shapes, are you making a collage?', correctAnswer: true, image: '/game-assets/creative-arts/collage-finished.png' },
      { type: 'family', guideText: 'Tonight, make a collage with your family! Cut up old magazines or colored paper and glue the shapes onto a new piece of paper. Make something beautiful!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Collage Maker', guideText: 'You are a collage maker, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-07',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 7,
    title: 'Storytelling with Pictures',
    duration: '3-5 min',
    badge: 'Story Artist',
    nextLesson: 'ca-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we tell STORIES with pictures!' },
      { type: 'story', image: '/game-assets/creative-arts/picture-book-open.png', guideText: 'Did you know every picture tells a STORY? When you draw a sun and a tree and a friend, your picture is saying something! You are a storyteller!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one tells a STORY?', guideText: 'Tap the picture with a story!',
        items: [
          { image: '/game-assets/creative-arts/story-picture-1.png', label: 'A scene with characters', correct: true },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Empty paper' },
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Just blue' },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'A ball' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/story-sequence.png', guideText: 'A story has a BEGINNING, a MIDDLE, and an END. Three pictures can make one whole story!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is a STORY in three pictures?', guideText: 'Tap the three connected pictures!',
        items: [
          { image: '/game-assets/creative-arts/story-sequence.png', label: 'Three story pictures', correct: true },
          { image: '/game-assets/creative-arts/colors-rainbow.png', label: 'Just colors' },
          { image: '/game-assets/creative-arts/family-drawing.png', label: 'A family drawing' },
          { image: '/game-assets/creative-arts/picture-book-open.png', label: 'A book' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/picture-book-open.png', guideText: 'In a book, every page is part of the story! Each picture moves the story forward!' },
      { type: 'yes-no', scenario: 'Can a picture tell a story without any words?', correctAnswer: true, image: '/game-assets/creative-arts/story-picture-1.png' },
      { type: 'family', guideText: 'Tonight, draw a three-picture story with your family! Beginning, middle, end. It can be about anything — a dog, a trip, a magical adventure!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Story Artist', guideText: 'You are a story artist, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-08',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 8,
    title: 'Finger Painting',
    duration: '3-5 min',
    badge: 'Finger Painter',
    nextLesson: 'ca-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we FINGER PAINT!' },
      { type: 'story', image: '/game-assets/creative-arts/finger-paint-hand.png', guideText: 'When you paint with your FINGERS, your hand becomes the brush! You can swirl, smear, dot, and dance the paint across the paper!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one shows FINGER PAINT on a hand?', guideText: 'Tap the colorful hand!',
        items: [
          { image: '/game-assets/creative-arts/finger-paint-hand.png', label: 'Hand with paint', correct: true },
          { image: '/game-assets/creative-arts/clapping-hands.png', label: 'Clean clapping hands' },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Playdough' },
          { image: '/game-assets/creative-arts/glue-stick.png', label: 'Glue' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/paint-jars.png', guideText: 'Each color lives in its own little jar. Dip your finger in and start painting!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a FINGER PAINTING?', guideText: 'Tap the finger painting!',
        items: [
          { image: '/game-assets/creative-arts/finger-paint-art.png', label: 'Finger painting', correct: true },
          { image: '/game-assets/creative-arts/family-drawing.png', label: 'Crayon drawing' },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Blank paper' },
          { image: '/game-assets/creative-arts/block-tower.png', label: 'Block tower' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/handprint-art.png', guideText: 'You can press your whole hand down to make a HANDPRINT! Your hand is your special signature!' },
      { type: 'yes-no', scenario: 'Is finger painting messy AND fun?', correctAnswer: true, image: '/game-assets/creative-arts/finger-paint-art.png' },
      { type: 'family', guideText: 'Tonight, finger paint with your family! Use real paint or pudding or yogurt as paint. Make handprints on paper!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Finger Painter', guideText: 'You are a finger painter, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-09',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 9,
    title: 'Building with Blocks',
    duration: '3-5 min',
    badge: 'Master Builder',
    nextLesson: 'ca-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we BUILD with blocks!' },
      { type: 'story', image: '/game-assets/creative-arts/blocks-scattered.png', guideText: 'Blocks are little squares and rectangles that stack on top of each other! With just a few blocks, you can build a tall tower, a cozy house, or a strong bridge!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a TOWER?', guideText: 'Tap the tall tower!',
        items: [
          { image: '/game-assets/creative-arts/block-tower.png', label: 'Block tower', correct: true },
          { image: '/game-assets/creative-arts/block-house.png', label: 'Block house' },
          { image: '/game-assets/creative-arts/block-bridge.png', label: 'Block bridge' },
          { image: '/game-assets/creative-arts/blocks-scattered.png', label: 'Scattered blocks' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/block-house.png', guideText: 'You can build a HOUSE with walls, a roof, and a door — just like the one you live in!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a HOUSE?', guideText: 'Tap the block house!',
        items: [
          { image: '/game-assets/creative-arts/block-house.png', label: 'Block house', correct: true },
          { image: '/game-assets/creative-arts/block-tower.png', label: 'Tower' },
          { image: '/game-assets/creative-arts/block-bridge.png', label: 'Bridge' },
          { image: '/game-assets/creative-arts/playdough-flat.png', label: 'Pancake' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/block-bridge.png', guideText: 'A BRIDGE has two strong sides with a flat top! Cars and trains can go across!' },
      { type: 'yes-no', scenario: 'Can you build many different things with the same blocks?', correctAnswer: true, image: '/game-assets/creative-arts/blocks-scattered.png' },
      { type: 'family', guideText: 'Tonight, build something with your family! Use real blocks, books, or pillows. Build a tower, a house, or a bridge!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Master Builder', guideText: 'You are a master builder, {name}!' }
    ]
  },
  {
    id: 'ca-3-5-10',
    subject: 'Creative Arts',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Muse',
    guideAnimal: 'Butterfly',
    lessonNumber: 10,
    title: 'My Favorite Song',
    duration: '3-5 min',
    badge: 'Music Lover',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate our FAVORITE SONGS!' },
      { type: 'story', image: '/game-assets/creative-arts/happy-singing-kid.png', guideText: 'Everyone has a favorite SONG! It is the song that makes your heart feel like dancing! When you hear it, you can not help but smile and move!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is SINGING?', guideText: 'Tap the singing kid!',
        items: [
          { image: '/game-assets/creative-arts/happy-singing-kid.png', label: 'Singing happily', correct: true },
          { image: '/game-assets/creative-arts/dancing-jumping.png', label: 'Just jumping' },
          { image: '/game-assets/creative-arts/clapping-hands.png', label: 'Just clapping' },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Blank paper' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/microphone-magic.png', guideText: 'When you sing into a MICROPHONE, your voice gets BIG so everyone can hear it!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'What helps your voice get LOUD?', guideText: 'Tap the microphone!',
        items: [
          { image: '/game-assets/creative-arts/microphone-magic.png', label: 'Microphone', correct: true },
          { image: '/game-assets/creative-arts/glue-stick.png', label: 'Glue stick' },
          { image: '/game-assets/creative-arts/blank-paper.png', label: 'Paper' },
          { image: '/game-assets/creative-arts/playdough-ball.png', label: 'Playdough ball' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/music-celebration.png', guideText: 'Music is everywhere! Songs make us happy, sad, excited, and brave. Music is MAGIC!' },
      { type: 'yes-no', scenario: 'Does your favorite song make you happy?', correctAnswer: true, image: '/game-assets/creative-arts/happy-singing-kid.png' },
      { type: 'family', guideText: 'Tonight, share your favorite song with your family! Sing it together. Or play it loud and have a dance party. Music brings everyone together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Music Lover', guideText: 'You are a music lover, {name}! Great work, you finished Creative Arts!' }
    ]
  }
];

export default creativeartsLittleStars;
