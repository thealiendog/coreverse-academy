export const socialleadershipLittleStars = [
  {
    id: "sl-3-5-01",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 1,
    title: "Being a Good Friend",
    duration: "5 min",
    badge: "Good Friend",
    nextLesson: "sl-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Valor. Today we learn about FRIENDSHIP!' },
      { type: 'story', image: '/game-assets/social-leadership/friends-hugging.png', guideText: 'A good friend is someone who is kind to you, plays with you, and cares about how you feel. Good friends share, they listen, they give hugs when you are sad, and they cheer for you when you do something cool. The best part? You can BE a good friend too!' },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'Friendship is built on kindness. Every kind thing you do makes the friendship stronger!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows GOOD FRIENDS?', guideText: 'Tap the friends being kind!',
        items: [
          { image: '/game-assets/social-leadership/friends-hugging.png', label: 'Friends hugging', correct: true },
          { image: '/game-assets/social-leadership/friends-fighting.png', label: 'Fighting' },
          { image: '/game-assets/social-leadership/friends-ignoring.png', label: 'Ignoring' },
          { image: '/game-assets/social-leadership/mean-words.png', label: 'Mean words' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/circle-of-friends.png', guideText: 'You can have many friends — and every friend is special in their own way!' },
      { type: 'yes-no', scenario: 'Are good friends kind to each other?', correctAnswer: true, image: '/game-assets/social-leadership/friends-hugging.png' },
      { type: 'family', guideText: 'Tonight, talk about your friends together. Who is your best friend? What makes them a good friend? Did you do anything kind for a friend today?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Good Friend', guideText: 'You are a great friend, {name}!' }
    ]
  },
  {
    id: "sl-3-5-02",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 2,
    title: "Taking Turns and Sharing",
    duration: "5 min",
    badge: "Sharing Star",
    nextLesson: "sl-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to SHARE and take turns!' },
      { type: 'story', image: '/game-assets/social-leadership/sharing-toy.png', guideText: 'When you share, you let someone else have a turn with something you have. When you take turns, you wait while someone else has their go. Sharing and turn-taking can feel hard at first — but it makes everyone happy, and people want to play with you more!' },
      { type: 'teach', image: '/game-assets/social-leadership/taking-turns.png', guideText: 'Taking turns is fair — first you, then me, then you again!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows TAKING TURNS?', guideText: 'Tap the kids taking turns on the slide!',
        items: [
          { image: '/game-assets/social-leadership/taking-turns.png', label: 'Taking turns', correct: true },
          { image: '/game-assets/social-leadership/pushing-line.png', label: 'Pushing in line' },
          { image: '/game-assets/social-leadership/grabbing-toy.png', label: 'Grabbing toy' },
          { image: '/game-assets/social-leadership/playing-alone-hoard.png', label: 'Hoarding all toys' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/sharing-toy.png', guideText: 'When you share your toys, your friends share back. Sharing makes everyone feel included!' },
      { type: 'yes-no', scenario: 'Does sharing make friends happy?', correctAnswer: true, image: '/game-assets/social-leadership/sharing-toy.png' },
      { type: 'family', guideText: 'Together, practice taking turns at home tonight. Pick one toy or one game. First family member goes, then next, then next. Notice how it feels to wait AND to take your turn!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sharing Star', guideText: 'You share like a star, {name}!' }
    ]
  },
  {
    id: "sl-3-5-03",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 3,
    title: "Using Kind Words",
    duration: "5 min",
    badge: "Kind Speaker",
    nextLesson: "sl-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about KIND WORDS!' },
      { type: 'story', image: '/game-assets/social-leadership/kind-words.png', guideText: 'Words are powerful. Kind words can make someone feel happy, brave, loved, and special. Mean words can make someone feel sad or hurt. The best part is — YOU choose which words to use! Saying things like "I like you," "you are smart," or "you can do it" makes people glow inside!' },
      { type: 'teach', image: '/game-assets/social-leadership/happy-child.png', guideText: 'When someone says kind words to you, your heart feels warm. You can give that gift to others!' },
      { type: 'sort-buckets',
        instruction: 'Sort kind words and mean words!',
        guideText: 'Drag each one to the right bucket!',
        buckets: [
          { label: 'Kind', image: '/game-assets/social-leadership/kind-words.png' },
          { label: 'Mean', image: '/game-assets/social-leadership/mean-words.png' }
        ],
        items: [
          { image: '/game-assets/social-leadership/kind-words.png', bucket: 0 },
          { image: '/game-assets/social-leadership/heart-glowing.png', bucket: 0 },
          { image: '/game-assets/social-leadership/mean-words.png', bucket: 1 },
          { image: '/game-assets/social-leadership/sad-child.png', bucket: 1 }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'Kind words like "thank you," "good job," and "I love you" are simple — but they change everything!' },
      { type: 'family', guideText: 'Tonight, take turns saying ONE kind thing to each family member. Watch their faces light up! Kind words are free — and they feel like magic.', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Kind Speaker', guideText: 'Your words are kind, {name}!' }
    ]
  },
  {
    id: "sl-3-5-04",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 4,
    title: "Listening When Others Talk",
    duration: "5 min",
    badge: "Great Listener",
    nextLesson: "sl-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we become GREAT LISTENERS!' },
      { type: 'story', image: '/game-assets/social-leadership/child-listening.png', guideText: 'Listening is one of the kindest things you can do. When someone is talking, a great listener stops, looks at them, and pays attention with their whole self. Real listening is more than just hearing the sounds — it is caring about what someone is saying. Everyone wants to feel heard!' },
      { type: 'teach', image: '/game-assets/social-leadership/child-listening.png', guideText: 'A good listener stops moving, looks at the person, and waits until they finish before talking back!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is LISTENING well?', guideText: 'Tap the great listener!',
        items: [
          { image: '/game-assets/social-leadership/child-listening.png', label: 'Listening', correct: true },
          { image: '/game-assets/social-leadership/child-distracted.png', label: 'On a screen' },
          { image: '/game-assets/social-leadership/child-talking-over.png', label: 'Talking over' },
          { image: '/game-assets/social-leadership/child-walking-away.png', label: 'Walking away' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'When you listen to someone, you tell them they matter without saying a single word!' },
      { type: 'yes-no', scenario: 'Should you look at someone when they talk to you?', correctAnswer: true, image: '/game-assets/social-leadership/child-listening.png' },
      { type: 'family', guideText: 'Together, play the listening game. One person talks for one minute. Everyone else listens with their whole body — eyes, ears, no talking. Then switch! How does it feel to be heard?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Great Listener', guideText: 'You listen so well, {name}!' }
    ]
  },
  {
    id: "sl-3-5-05",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 5,
    title: "Asking for Help",
    duration: "5 min",
    badge: "Brave Asker",
    nextLesson: "sl-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to ask for HELP!' },
      { type: 'story', image: '/game-assets/social-leadership/asking-for-help.png', guideText: 'Sometimes things feel hard — your zipper is stuck, you cannot reach the cookies, you got hurt, or you got lost. Asking for help is BRAVE. It does not mean you are weak. Even grown-ups ask for help every day! When you ask, the people who love you are HAPPY to help you.' },
      { type: 'teach', image: '/game-assets/social-leadership/asking-for-help.png', guideText: 'You can ask grown-ups you trust — your family, your teachers, helpers in stores. They WANT to help!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'When you need HELP, what do you do?', guideText: 'Tap asking for help!',
        items: [
          { image: '/game-assets/social-leadership/asking-for-help.png', label: 'Ask for help', correct: true },
          { image: '/game-assets/social-leadership/child-stuck-alone.png', label: 'Struggle alone' },
          { image: '/game-assets/social-leadership/child-crying-alone.png', label: 'Cry alone' },
          { image: '/game-assets/social-leadership/child-giving-up.png', label: 'Give up' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'The bravest thing you can say is "I need help." It takes courage — and helping each other is what makes us strong!' },
      { type: 'yes-no', scenario: 'Is it brave to ask for help?', correctAnswer: true, image: '/game-assets/social-leadership/asking-for-help.png' },
      { type: 'family', guideText: 'Tonight, practice asking for help. Ask a family member to help with something — opening a jar, finding a toy, anything. And you help them with something too. Helping is a circle!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Brave Asker', guideText: 'You ask bravely, {name}!' }
    ]
  },
  {
    id: "sl-3-5-06",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 6,
    title: "Saying Please and Thank You",
    duration: "5 min",
    badge: "Polite Pro",
    nextLesson: "sl-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn the MAGIC words!' },
      { type: 'story', image: '/game-assets/social-leadership/please-thank-you.png', guideText: 'There are two magic words that can change someone\'s whole day — PLEASE and THANK YOU. When you ask for something with "please," it shows you respect the other person. When you say "thank you," it shows you noticed their kindness. These small words have big power!' },
      { type: 'teach', image: '/game-assets/social-leadership/please-thank-you.png', guideText: 'Saying please when you ask for something is polite. Saying thank you when someone helps is kind!' },
      { type: 'yes-no', scenario: 'Are please and thank you magic words?', correctAnswer: true, image: '/game-assets/social-leadership/please-thank-you.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows GOOD MANNERS?', guideText: 'Tap please and thank you!',
        items: [
          { image: '/game-assets/social-leadership/please-thank-you.png', label: 'Polite', correct: true },
          { image: '/game-assets/social-leadership/demanding-rude.png', label: 'Demanding' },
          { image: '/game-assets/social-leadership/grabbing-rude.png', label: 'Grabbing' },
          { image: '/game-assets/social-leadership/ignoring-gift.png', label: 'Ignoring gift' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'These tiny words make people smile and feel respected. Use them every day!' },
      { type: 'family', guideText: 'Tomorrow, count how many times you say please and thank you in one day. Try to use them as much as you can. Notice how people respond — kindness comes back!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Polite Pro', guideText: 'You are polite, {name}!' }
    ]
  },
  {
    id: "sl-3-5-07",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 7,
    title: "When Someone Is Sad, I Can Help",
    duration: "5 min",
    badge: "Kind Helper",
    nextLesson: "sl-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn to HELP a sad friend!' },
      { type: 'story', image: '/game-assets/social-leadership/helping-friend-sad.png', guideText: 'Everyone feels sad sometimes — even YOU, even your friends, even grown-ups. When you see someone sad, your heart can help them feel better. You can ask "are you okay?" You can give a hug. You can share your toy. You can sit with them quietly. Being kind to a sad friend is one of the best things you can ever do!' },
      { type: 'teach', image: '/game-assets/social-leadership/helping-friend-sad.png', guideText: 'You do not have to fix the sadness — just being there for someone helps them feel less alone!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'When a friend is SAD, what can you do?', guideText: 'Tap helping a sad friend!',
        items: [
          { image: '/game-assets/social-leadership/helping-friend-sad.png', label: 'Help and comfort', correct: true },
          { image: '/game-assets/social-leadership/laughing-at-sad.png', label: 'Laugh at them' },
          { image: '/game-assets/social-leadership/walking-past-sad.png', label: 'Walk past' },
          { image: '/game-assets/social-leadership/being-mean-sad.png', label: 'Be mean' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'Empathy means feeling what your friend feels. When you care, you help them carry the sadness!' },
      { type: 'yes-no', scenario: 'Should you help a friend who is sad?', correctAnswer: true, image: '/game-assets/social-leadership/helping-friend-sad.png' },
      { type: 'family', guideText: 'Together, talk about a time someone was kind to you when you felt sad. What did they do? How did it make you feel? You can do the same for others.', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Kind Helper', guideText: 'You help with kindness, {name}!' }
    ]
  },
  {
    id: "sl-3-5-08",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 8,
    title: "Leaders Help Others",
    duration: "5 min",
    badge: "Brave Leader",
    nextLesson: "sl-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn what makes a real LEADER!' },
      { type: 'story', image: '/game-assets/social-leadership/leader-helping.png', guideText: 'Real leaders do not just tell people what to do — they HELP. The best leaders are the kindest ones. They lift others up when they fall, they share, they listen, they protect their friends. Anyone can be a leader. Even YOU. Even today!' },
      { type: 'teach', image: '/game-assets/social-leadership/child-leading.png', guideText: 'A great leader is brave AND kind. They use their voice to help others, not to be the boss!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does a real LEADER do?', guideText: 'Tap a leader helping others!',
        items: [
          { image: '/game-assets/social-leadership/leader-helping.png', label: 'Helps others', correct: true },
          { image: '/game-assets/social-leadership/bossy-leader.png', label: 'Bossy and yelling' },
          { image: '/game-assets/social-leadership/leader-takes-all.png', label: 'Takes everything' },
          { image: '/game-assets/social-leadership/leader-ignoring-team.png', label: 'Ignores team' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'You can lead by being kind, brave, and helpful. People will follow your example!' },
      { type: 'yes-no', scenario: 'Do good leaders help other people?', correctAnswer: true, image: '/game-assets/social-leadership/leader-helping.png' },
      { type: 'family', guideText: 'Tonight, talk about a leader you admire — a teacher, parent, hero, anyone. What makes them a good leader? How can YOU lead with kindness tomorrow?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Brave Leader', guideText: 'You lead with heart, {name}!' }
    ]
  },
  {
    id: "sl-3-5-09",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 9,
    title: "Following Rules Keeps Us Safe",
    duration: "5 min",
    badge: "Safety Star",
    nextLesson: "sl-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn why RULES matter!' },
      { type: 'story', image: '/game-assets/social-leadership/safety-rules.png', guideText: 'Rules might feel like they get in the way of fun — but most rules are there to keep us SAFE. Look both ways before crossing the street. Wear a seatbelt. Hold a grown-up\'s hand near big roads. Wait for swings to stop. Rules are like invisible helpers protecting you!' },
      { type: 'teach', image: '/game-assets/social-leadership/safety-rules.png', guideText: 'When you follow safety rules, you stay safe AND your family does not have to worry!' },
      { type: 'yes-no', scenario: 'Do rules help keep us safe?', correctAnswer: true, image: '/game-assets/social-leadership/safety-rules.png' },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'Family rules and school rules help everyone get along. Brave kids follow them — and ask why if they wonder!' },
      { type: 'yes-no', scenario: 'Do rules help keep us safe?', correctAnswer: true, image: '/game-assets/social-leadership/safety-rules.png' },
      { type: 'family', guideText: 'Together, pick ONE family rule and talk about it. Why does it exist? What would happen without it? Rules make sense when you understand them!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Safety Star', guideText: 'You stay safe, {name}!' }
    ]
  },
  {
    id: "sl-3-5-10",
    subject: "Social & Leadership",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Valor",
    guideAnimal: "Lion",
    lessonNumber: 10,
    title: "Working Together",
    duration: "5 min",
    badge: "Team Champion",
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate WORKING TOGETHER!' },
      { type: 'story', image: '/game-assets/social-leadership/team-working.png', guideText: 'When people come together to do something, amazing things happen. One kid alone can build a small tower. Three kids together can build a CASTLE. The world is full of huge things — schools, hospitals, even rockets to space — that no one person could do alone. Together, we are mighty!' },
      { type: 'teach', image: '/game-assets/social-leadership/circle-of-friends.png', guideText: 'When you work with others, listen to their ideas, share your ideas, and lift everyone up — that is what teamwork looks like!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows TEAMWORK?', guideText: 'Tap kids working together!',
        items: [
          { image: '/game-assets/social-leadership/team-working.png', label: 'Working together', correct: true },
          { image: '/game-assets/social-leadership/team-alone-trying.png', label: 'Alone with everything' },
          { image: '/game-assets/social-leadership/team-fighting.png', label: 'Team fighting' },
          { image: '/game-assets/social-leadership/leader-ignoring-team.png', label: 'Ignoring teammates' }
        ]
      },
      { type: 'teach', image: '/game-assets/social-leadership/heart-glowing.png', guideText: 'You have learned so much about being a great friend, listener, leader, and teammate. Use these every day!' },
      { type: 'yes-no', scenario: 'Are you stronger when you work as a team?', correctAnswer: true, image: '/game-assets/social-leadership/team-working.png' },
      { type: 'family', guideText: 'Tonight, do ONE thing as a TEAM. Build a fort, cook dinner, clean a room, or invent a game. Notice how working together makes it more fun AND faster than doing it alone!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Team Champion', guideText: 'You are a team champion, {name}!' }
    ]
  }
];

export default socialleadershipLittleStars;
