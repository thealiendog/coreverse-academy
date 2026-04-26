export const historyworldLittleStars = [
  {
    id: 'hw-3-5-01',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 1,
    title: 'Long Ago and Today',
    duration: '3-5 min',
    badge: 'Time Traveler',
    nextLesson: 'hw-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! I am Lyra! I never forget anything — and today I will tell you about LONG AGO!' },
      { type: 'story', image: '/game-assets/history/long-ago-scene.png', guideText: 'A long time ago, before phones and cars, people rode horses! Houses were lit with candles. The world looked very different then. Time keeps moving and everything changes!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is from LONG AGO?', guideText: 'Tap the picture from long ago!',
        items: [
          { image: '/game-assets/history/long-ago-scene.png', label: 'Long ago', correct: true },
          { image: '/game-assets/history/today-scene.png', label: 'Today' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/today-scene.png', guideText: 'And TODAY we have cars, computers, and bright electric lights! The world is always changing!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is TODAY?', guideText: 'Tap the picture from today!',
        items: [
          { image: '/game-assets/history/today-scene.png', label: 'Today', correct: true },
          { image: '/game-assets/history/long-ago-scene.png', label: 'Long ago' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/time-passing.png', guideText: 'History is the story of everything that happened before now. Knowing history helps us understand TODAY!' },
      { type: 'yes-no', scenario: 'Does the world change as time passes?', correctAnswer: true, image: '/game-assets/history/time-passing.png' },
      { type: 'family', guideText: 'Tonight, ask a grown-up about something from when THEY were little. Did they have phones? What was different? Listen to their story!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Time Traveler', guideText: 'You traveled through time, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-02',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 2,
    title: "My Family's History",
    duration: '3-5 min',
    badge: 'Family Historian',
    nextLesson: 'hw-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we explore YOUR family history!' },
      { type: 'story', image: '/game-assets/history/family-tree.png', guideText: 'Your family has a STORY that started a long time ago! Your grandparents had children — those are your parents! And your parents had YOU! That is your family history!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a FAMILY TREE?', guideText: 'Tap the family tree!',
        items: [
          { image: '/game-assets/history/family-tree.png', label: 'Family tree', correct: true },
          { image: '/game-assets/history/community-park.png', label: 'A park' },
          { image: '/game-assets/history/world-map.png', label: 'A map' },
          { image: '/game-assets/history/today-scene.png', label: 'A city' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/grandparents-figures.png', guideText: 'GRANDPARENTS are your parents\' parents! They have lots of stories from when YOUR parents were little kids!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which are GRANDPARENTS?', guideText: 'Tap the grandparents!',
        items: [
          { image: '/game-assets/history/grandparents-figures.png', label: 'Grandparents', correct: true },
          { image: '/game-assets/history/teacher-helper.png', label: 'Teacher' },
          { image: '/game-assets/history/firefighter-helper.png', label: 'Firefighter' },
          { image: '/game-assets/history/doctor-helper.png', label: 'Doctor' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/family-photo-album.png', guideText: 'Photo albums hold pictures of your family from a long time ago. Look at them with your grandparents!' },
      { type: 'yes-no', scenario: 'Do your grandparents have stories from when your parents were little?', correctAnswer: true, image: '/game-assets/history/grandparents-figures.png' },
      { type: 'family', guideText: 'Tonight, look at family photos with someone you love. Ask who is in the picture and what they were doing. That is family history!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Family Historian', guideText: 'You know your family history, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-03',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 3,
    title: 'Where We Live: Our Community',
    duration: '3-5 min',
    badge: 'Community Member',
    nextLesson: 'hw-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we learn about our COMMUNITY!' },
      { type: 'story', image: '/game-assets/history/community-neighborhood.png', guideText: 'A community is the place where YOU live with your neighbors! Your community has houses, schools, parks, and stores. The people in your community help each other!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a HOUSE?', guideText: 'Tap the house!',
        items: [
          { image: '/game-assets/history/house-home.png', label: 'House', correct: true },
          { image: '/game-assets/history/world-map.png', label: 'A map' },
          { image: '/game-assets/history/american-flag.png', label: 'A flag' },
          { image: '/game-assets/history/earth-globe.png', label: 'Earth' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/community-park.png', guideText: 'A PARK is a special place in our community where everyone can play, swing, and run on the grass!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a PARK?', guideText: 'Tap the park!',
        items: [
          { image: '/game-assets/history/community-park.png', label: 'Park', correct: true },
          { image: '/game-assets/history/house-home.png', label: 'A house' },
          { image: '/game-assets/history/family-photo-album.png', label: 'A book' },
          { image: '/game-assets/history/long-ago-scene.png', label: 'Old time' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/community-neighborhood.png', guideText: 'A community is more than just houses — it is the PEOPLE who live there together!' },
      { type: 'yes-no', scenario: 'Is your community where you live with your neighbors?', correctAnswer: true, image: '/game-assets/history/community-neighborhood.png' },
      { type: 'family', guideText: 'Tonight, take a walk around your community with your family. What do you see? Houses? A park? A store? Your community is special!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Community Member', guideText: 'You know your community, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-04',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 4,
    title: 'Helpers in Our Community',
    duration: '3-5 min',
    badge: 'Helper Spotter',
    nextLesson: 'hw-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we meet COMMUNITY HELPERS!' },
      { type: 'story', image: '/game-assets/history/firefighter-helper.png', guideText: 'In every community, there are special people who HELP us! Firefighters keep us safe. Doctors keep us healthy. Teachers teach us. Mail carriers bring us letters. They are our helpers!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one puts out FIRES?', guideText: 'Tap the firefighter!',
        items: [
          { image: '/game-assets/history/firefighter-helper.png', label: 'Firefighter', correct: true },
          { image: '/game-assets/history/teacher-helper.png', label: 'Teacher' },
          { image: '/game-assets/history/doctor-helper.png', label: 'Doctor' },
          { image: '/game-assets/history/mail-carrier-helper.png', label: 'Mail carrier' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/doctor-helper.png', guideText: 'A DOCTOR helps us when we are sick or hurt. They check our heart with a special tool!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Who helps when you are SICK?', guideText: 'Tap the doctor!',
        items: [
          { image: '/game-assets/history/doctor-helper.png', label: 'Doctor', correct: true },
          { image: '/game-assets/history/firefighter-helper.png', label: 'Firefighter' },
          { image: '/game-assets/history/teacher-helper.png', label: 'Teacher' },
          { image: '/game-assets/history/mail-carrier-helper.png', label: 'Mail carrier' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/teacher-helper.png', guideText: 'A TEACHER helps you learn new things every day! Teachers are super important!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Who brings us LETTERS?', guideText: 'Tap the mail carrier!',
        items: [
          { image: '/game-assets/history/mail-carrier-helper.png', label: 'Mail carrier', correct: true },
          { image: '/game-assets/history/doctor-helper.png', label: 'Doctor' },
          { image: '/game-assets/history/teacher-helper.png', label: 'Teacher' },
          { image: '/game-assets/history/firefighter-helper.png', label: 'Firefighter' }
        ]
      },
      { type: 'family', guideText: 'Tonight, talk with your family about who YOUR community helpers are. Have you met a firefighter, doctor, teacher, or mail carrier? Say thank you to a helper!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Helper Spotter', guideText: 'You know your helpers, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-05',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 5,
    title: 'American Symbols',
    duration: '3-5 min',
    badge: 'Symbol Knower',
    nextLesson: 'hw-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we learn about AMERICAN SYMBOLS!' },
      { type: 'story', image: '/game-assets/history/american-flag.png', guideText: 'America has special SYMBOLS that everyone knows! The American flag has stripes and stars. The bald eagle is a strong free bird. The Liberty Bell rings for freedom. These symbols tell our story!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is the American FLAG?', guideText: 'Tap the flag!',
        items: [
          { image: '/game-assets/history/american-flag.png', label: 'American flag', correct: true },
          { image: '/game-assets/history/bald-eagle.png', label: 'Eagle' },
          { image: '/game-assets/history/liberty-bell.png', label: 'Bell' },
          { image: '/game-assets/history/world-map.png', label: 'Map' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/bald-eagle.png', guideText: 'The BALD EAGLE is the national bird of America! It is strong, brave, and FREE!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is the BALD EAGLE?', guideText: 'Tap the eagle!',
        items: [
          { image: '/game-assets/history/bald-eagle.png', label: 'Bald eagle', correct: true },
          { image: '/game-assets/history/peace-dove.png', label: 'Dove' },
          { image: '/game-assets/history/american-flag.png', label: 'Flag' },
          { image: '/game-assets/history/liberty-bell.png', label: 'Bell' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/liberty-bell.png', guideText: 'The LIBERTY BELL has a famous crack but it still rings out for FREEDOM!' },
      { type: 'yes-no', scenario: 'Is the bald eagle a symbol of America?', correctAnswer: true, image: '/game-assets/history/bald-eagle.png' },
      { type: 'family', guideText: 'Tonight, look around for the American flag with your family. You might see one on a building, a porch, or a school. Wave hello to it!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Symbol Knower', guideText: 'You know American symbols, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-06',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 6,
    title: 'Martin Luther King Jr.',
    duration: '3-5 min',
    badge: 'Fairness Friend',
    nextLesson: 'hw-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we learn about a HERO — Martin Luther King Jr.!' },
      { type: 'story', image: '/game-assets/history/mlk-portrait.png', guideText: 'A long time ago, some people were treated UNFAIRLY because of the color of their skin. Martin Luther King Jr. believed everyone should be treated the SAME — kindly and fairly. He spoke up for fairness, and the world started to change!' },
      { type: 'teach', image: '/game-assets/history/kids-holding-hands-different.png', guideText: 'When kids of every color hold hands and play together, that is what FAIRNESS looks like!' },
      { type: 'yes-no', scenario: 'Should everyone be treated kindly, no matter how they look?', correctAnswer: true, image: '/game-assets/history/kids-holding-hands-different.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows FAIRNESS?', guideText: 'Tap the picture of fairness!',
        items: [
          { image: '/game-assets/history/kids-holding-hands-different.png', label: 'Kids holding hands together', correct: true },
          { image: '/game-assets/history/long-ago-scene.png', label: 'Long ago scene' },
          { image: '/game-assets/history/world-map.png', label: 'A map' },
          { image: '/game-assets/history/community-park.png', label: 'A park' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/peace-dove.png', guideText: 'Martin Luther King Jr. dreamed of PEACE. The white dove is a symbol of peace and hope!' },
      { type: 'yes-no', scenario: 'Did Martin Luther King Jr. believe everyone should be treated the same?', correctAnswer: true, image: '/game-assets/history/mlk-portrait.png' },
      { type: 'family', guideText: 'Tonight, talk with your family about FAIRNESS. Is everyone in your family treated kindly? How can you show kindness to people who look different from you?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Fairness Friend', guideText: 'You stand for fairness, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-07',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 7,
    title: 'Countries Around the World',
    duration: '3-5 min',
    badge: 'World Friend',
    nextLesson: 'hw-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we explore the WHOLE WORLD!' },
      { type: 'story', image: '/game-assets/history/world-map.png', guideText: 'The world is HUGE and full of many different places called COUNTRIES! Each country has its own flag, language, and special foods. There are almost 200 countries in the world!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is a WORLD MAP?', guideText: 'Tap the world map!',
        items: [
          { image: '/game-assets/history/world-map.png', label: 'World map', correct: true },
          { image: '/game-assets/history/family-tree.png', label: 'Family tree' },
          { image: '/game-assets/history/today-scene.png', label: 'A city' },
          { image: '/game-assets/history/community-park.png', label: 'A park' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/flags-of-world.png', guideText: 'Every country has a special FLAG with different colors and patterns! Some have stars, some have stripes, some have animals!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows many FLAGS?', guideText: 'Tap the flags!',
        items: [
          { image: '/game-assets/history/flags-of-world.png', label: 'Many flags', correct: true },
          { image: '/game-assets/history/american-flag.png', label: 'One flag' },
          { image: '/game-assets/history/world-map.png', label: 'A map' },
          { image: '/game-assets/history/peace-dove.png', label: 'A dove' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/kids-different-cultures.png', guideText: 'Kids from every country are KIDS — just like you! We all play and laugh and love our families!' },
      { type: 'yes-no', scenario: 'Are there many different countries in the world?', correctAnswer: true, image: '/game-assets/history/world-map.png' },
      { type: 'family', guideText: 'Tonight, find a globe or world map with your family. Point to where you live! Then point to a country far away. The world is so big!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'World Friend', guideText: 'You know the world, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-08',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 8,
    title: 'Earth From Space',
    duration: '3-5 min',
    badge: 'Earth Lover',
    nextLesson: 'hw-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we see EARTH from SPACE!' },
      { type: 'story', image: '/game-assets/history/earth-globe.png', guideText: 'Imagine you are flying high up — past the clouds, past the airplanes, all the way into SPACE! From up there, our home looks like a big blue ball with white clouds. That is EARTH — our planet!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which is EARTH?', guideText: 'Tap our planet!',
        items: [
          { image: '/game-assets/history/earth-globe.png', label: 'Earth', correct: true },
          { image: '/game-assets/history/american-flag.png', label: 'A flag' },
          { image: '/game-assets/history/peace-dove.png', label: 'A dove' },
          { image: '/game-assets/history/long-ago-scene.png', label: 'Old scene' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/solar-system-tiny.png', guideText: 'Earth is just ONE of EIGHT planets that go around the sun! All together that is called the SOLAR SYSTEM!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows the SOLAR SYSTEM?', guideText: 'Tap the planets and sun!',
        items: [
          { image: '/game-assets/history/solar-system-tiny.png', label: 'Solar system', correct: true },
          { image: '/game-assets/history/earth-globe.png', label: 'Just Earth' },
          { image: '/game-assets/history/world-map.png', label: 'World map' },
          { image: '/game-assets/history/today-scene.png', label: 'A city' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/earth-globe.png', guideText: 'The blue parts are OCEANS. The green and brown parts are LAND. Earth is full of life!' },
      { type: 'yes-no', scenario: 'Is Earth a planet that we all live on together?', correctAnswer: true, image: '/game-assets/history/earth-globe.png' },
      { type: 'family', guideText: 'Tonight, go outside with your family and look up at the sky. Earth is the floor under your feet! All those stars are very far away in space!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Earth Lover', guideText: 'You love our planet, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-09',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 9,
    title: 'Different Homes Around the World',
    duration: '3-5 min',
    badge: 'Home Explorer',
    nextLesson: 'hw-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we visit DIFFERENT HOMES around the world!' },
      { type: 'story', image: '/game-assets/history/home-igloo.png', guideText: 'People live in MANY different kinds of homes! Some are made of ice in cold lands. Some are tall buildings in big cities. Some sit on tall poles over the water! Every home is a place where someone is loved!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which home is made of ICE?', guideText: 'Tap the igloo!',
        items: [
          { image: '/game-assets/history/home-igloo.png', label: 'Igloo', correct: true },
          { image: '/game-assets/history/home-tipi.png', label: 'Tipi' },
          { image: '/game-assets/history/home-stilt-house.png', label: 'Stilt house' },
          { image: '/game-assets/history/home-apartment-building.png', label: 'Apartment' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/home-tipi.png', guideText: 'A TIPI is a tall pointy home made from wooden poles and animal hide. Native Americans built tipis long ago!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which home stands on TALL POLES over water?', guideText: 'Tap the stilt house!',
        items: [
          { image: '/game-assets/history/home-stilt-house.png', label: 'Stilt house', correct: true },
          { image: '/game-assets/history/home-igloo.png', label: 'Igloo' },
          { image: '/game-assets/history/home-tipi.png', label: 'Tipi' },
          { image: '/game-assets/history/house-home.png', label: 'A house' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/home-apartment-building.png', guideText: 'In big CITIES, people live in tall apartment buildings with many homes stacked on top of each other!' },
      { type: 'yes-no', scenario: 'Do people around the world live in many different kinds of homes?', correctAnswer: true, image: '/game-assets/history/home-igloo.png' },
      { type: 'family', guideText: 'Tonight, talk with your family about your home. Is it a house? An apartment? Something else? Every home is special because the people inside love each other!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Home Explorer', guideText: 'You explored homes around the world, {name}!' }
    ]
  },
  {
    id: 'hw-3-5-10',
    subject: 'History & World',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Lyra',
    guideAnimal: 'Elephant',
    lessonNumber: 10,
    title: 'Food From Around the World',
    duration: '3-5 min',
    badge: 'World Food Tasting',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hello, {name}! Today we taste FOOD from around the world!' },
      { type: 'story', image: '/game-assets/history/food-tacos.png', guideText: 'Every country has its own special FOODS! In Mexico people eat tacos. In Japan they eat sushi. In Italy they eat pasta. In India they eat curry with rice. Food brings people together!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which food is from MEXICO?', guideText: 'Tap the tacos!',
        items: [
          { image: '/game-assets/history/food-tacos.png', label: 'Tacos', correct: true },
          { image: '/game-assets/history/food-sushi.png', label: 'Sushi' },
          { image: '/game-assets/history/food-pasta.png', label: 'Pasta' },
          { image: '/game-assets/history/food-curry-rice.png', label: 'Curry' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/food-sushi.png', guideText: 'SUSHI comes from JAPAN! It is small bites of rice with fish or vegetables — sometimes you eat it with chopsticks!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which food is from ITALY?', guideText: 'Tap the pasta!',
        items: [
          { image: '/game-assets/history/food-pasta.png', label: 'Pasta', correct: true },
          { image: '/game-assets/history/food-tacos.png', label: 'Tacos' },
          { image: '/game-assets/history/food-sushi.png', label: 'Sushi' },
          { image: '/game-assets/history/food-curry-rice.png', label: 'Curry' }
        ]
      },
      { type: 'teach', image: '/game-assets/history/food-curry-rice.png', guideText: 'CURRY with rice comes from INDIA! It has lots of warm spices that smell amazing!' },
      { type: 'yes-no', scenario: 'Does every country have its own special foods?', correctAnswer: true, image: '/game-assets/history/food-tacos.png' },
      { type: 'family', guideText: 'Tonight, ask your family — what is YOUR family favorite food? Where does it come from? Maybe try a NEW food from a different country soon!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'World Food Tasting', guideText: 'You tasted the world, {name}! Great work, you finished History & World!' }
    ]
  }
];
