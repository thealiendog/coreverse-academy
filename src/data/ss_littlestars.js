export const ssLittleStars = [
  {
    id: 'ss-3-5-01',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 1,
    title: 'Me, My Family, and My Community',
    duration: '3-5 min',
    badge: 'Connected Friend',
    nextLesson: 'ss-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Atlas the Bear. I love seeing how people connect — and today we explore how YOU fit in the world!' },
      { type: 'story', image: '/game-assets/socialstudies/child-with-family.png', guideText: 'You are YOU — special and one of a kind. You also belong to a FAMILY who loves you. And your family belongs to a COMMUNITY of neighbors. We are all connected!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows YOU with FAMILY?', guideText: 'Tap the family!',
        items: [
          { image: '/game-assets/socialstudies/child-with-family.png', label: 'Child with family', correct: true },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'Child alone' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/community-circle.png', guideText: 'A COMMUNITY is everyone who lives near each other — neighbors, helpers, friends. Together you take care of each other!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows a COMMUNITY?', guideText: 'Tap the community circle!',
        items: [
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community circle', correct: true },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'Child alone' },
          { image: '/game-assets/socialstudies/child-helping-clean-room.png', label: 'Cleaning' },
          { image: '/game-assets/socialstudies/compass-rose.png', label: 'Compass' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/single-child-alone.png', guideText: 'You are AMAZING all by yourself. AND you are part of family and community. Both are TRUE at the same time!' },
      { type: 'yes-no', scenario: 'Are YOU part of a family AND a community?', correctAnswer: true, image: '/game-assets/socialstudies/child-with-family.png' },
      { type: 'family', guideText: 'Tonight, talk with your family — who is in our family? Who is in our community? Names of people we know! You belong to so many wonderful people!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Connected Friend', guideText: 'You belong, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-02',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 2,
    title: 'Rules at Home and School',
    duration: '3-5 min',
    badge: 'Responsible Helper',
    nextLesson: 'ss-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about RESPONSIBILITIES at home and school!' },
      { type: 'story', image: '/game-assets/socialstudies/child-helping-clean-room.png', guideText: 'A RESPONSIBILITY is something you have to do — like cleaning up your toys or being kind to your sister. Responsibilities help your family and your school work great!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows a RESPONSIBILITY at home?', guideText: 'Tap the helper!',
        items: [
          { image: '/game-assets/socialstudies/child-helping-clean-room.png', label: 'Cleaning room', correct: true },
          { image: '/game-assets/socialstudies/toy-store-wants.png', label: 'Toy store' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kids-raising-hand-class.png', guideText: 'At school, raising your hand to speak is a RULE. It means everyone gets a turn to talk! Without that rule, everyone would talk at once and no one could be heard!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows a SCHOOL RULE?', guideText: 'Tap raising your hand!',
        items: [
          { image: '/game-assets/socialstudies/kids-raising-hand-class.png', label: 'Raising hand', correct: true },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community circle' },
          { image: '/game-assets/socialstudies/fireworks-celebration.png', label: 'Fireworks' },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kids-walking-line.png', guideText: 'Walking in a LINE is another rule! It keeps everyone safe and together. Following rules makes everything work!' },
      { type: 'yes-no', scenario: 'Do rules and responsibilities help everyone get along?', correctAnswer: true, image: '/game-assets/socialstudies/kids-walking-line.png' },
      { type: 'family', guideText: 'Tonight, talk with your family about your responsibilities. What do you do to help? Make your bed? Clear your plate? Put toys away? You are SO helpful!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Responsible Helper', guideText: 'You are responsible, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-03',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 3,
    title: 'Maps: Finding Our Way',
    duration: '3-5 min',
    badge: 'Map Reader',
    nextLesson: 'ss-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how MAPS help us find our way!' },
      { type: 'story', image: '/game-assets/socialstudies/simple-map-treasure.png', guideText: 'A MAP is like a picture of a place from above! Maps show us where things are — your house, the park, the store. Maps help us find our way without getting lost!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which one is a MAP?', guideText: 'Tap the map!',
        items: [
          { image: '/game-assets/socialstudies/simple-map-treasure.png', label: 'Treasure map', correct: true },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'A child' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/compass-rose.png', guideText: 'A COMPASS shows directions! North is UP, South is DOWN, East is RIGHT, West is LEFT! Compasses help us know which way to go!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows DIRECTIONS?', guideText: 'Tap the compass!',
        items: [
          { image: '/game-assets/socialstudies/compass-rose.png', label: 'Compass', correct: true },
          { image: '/game-assets/socialstudies/simple-map-treasure.png', label: 'Map' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kid-with-map.png', guideText: 'When you READ a map, you can go on adventures! Find your house, find the park, find the treasure!' },
      { type: 'yes-no', scenario: 'Do maps help us find our way to places?', correctAnswer: true, image: '/game-assets/socialstudies/simple-map-treasure.png' },
      { type: 'family', guideText: 'Tonight, draw a map with your family! A map of your room, your home, or your backyard. Mark special spots with X. Maps are SO fun!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Map Reader', guideText: 'You read maps, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-04',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 4,
    title: 'Neighborhood, City, Country',
    duration: '3-5 min',
    badge: 'Place Knower',
    nextLesson: 'ss-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about places — neighborhoods, cities, and countries!' },
      { type: 'story', image: '/game-assets/socialstudies/quiet-neighborhood-street.png', guideText: 'You live somewhere — and that place has different SIZES! Your NEIGHBORHOOD is the streets near your home. Your CITY is many neighborhoods together. Your COUNTRY is many many cities together!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows a NEIGHBORHOOD?', guideText: 'Tap the neighborhood!',
        items: [
          { image: '/game-assets/socialstudies/quiet-neighborhood-street.png', label: 'Neighborhood', correct: true },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'Big city' },
          { image: '/game-assets/socialstudies/country-on-globe.png', label: 'Country' },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'A child' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/big-city-skyline.png', guideText: 'A CITY is BIG! Cities have lots of buildings and people. New York, Los Angeles, Chicago — those are big cities!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows a big CITY?', guideText: 'Tap the city skyline!',
        items: [
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City skyline', correct: true },
          { image: '/game-assets/socialstudies/quiet-neighborhood-street.png', label: 'Neighborhood' },
          { image: '/game-assets/socialstudies/country-on-globe.png', label: 'Country' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/country-on-globe.png', guideText: 'A COUNTRY is HUGE — the biggest place. America, Mexico, Japan — those are countries! Each one has its own flag and stories!' },
      { type: 'yes-no', scenario: 'Is your country bigger than your city?', correctAnswer: true, image: '/game-assets/socialstudies/country-on-globe.png' },
      { type: 'family', guideText: 'Tonight, ask your family — what is the name of our city? Our country? Practice saying both names. They are part of YOU!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Place Knower', guideText: 'You know your places, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-05',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 5,
    title: 'Independence Day',
    duration: '3-5 min',
    badge: 'Celebrator',
    nextLesson: 'ss-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate INDEPENDENCE DAY — America birthday!' },
      { type: 'story', image: '/game-assets/socialstudies/birthday-cake-stars.png', guideText: 'Independence Day is on July 4th every year — it is America BIRTHDAY! That is the day America became its own country a long long time ago. We celebrate with parades, fireworks, and being together!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'How do we CELEBRATE Independence Day?', guideText: 'Tap the fireworks!',
        items: [
          { image: '/game-assets/socialstudies/fireworks-celebration.png', label: 'Fireworks', correct: true },
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Voting box' },
          { image: '/game-assets/socialstudies/quiet-neighborhood-street.png', label: 'Neighborhood' },
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kids-with-flags.png', guideText: 'Kids LOVE Independence Day! We wave little flags, watch parades, and feel proud of our country!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What do kids carry on the 4th of July?', guideText: 'Tap the flag-waving kids!',
        items: [
          { image: '/game-assets/socialstudies/kids-with-flags.png', label: 'Kids with flags', correct: true },
          { image: '/game-assets/socialstudies/community-providing-need.png', label: 'Community sharing' },
          { image: '/game-assets/socialstudies/clean-water-tap.png', label: 'Water tap' },
          { image: '/game-assets/socialstudies/two-options-choice.png', label: 'Two paths' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/birthday-cake-stars.png', guideText: 'We even have CAKE for our country birthday! Red white and blue desserts — the colors of the American flag!' },
      { type: 'yes-no', scenario: 'Is Independence Day America birthday?', correctAnswer: true, image: '/game-assets/socialstudies/fireworks-celebration.png' },
      { type: 'family', guideText: 'Tonight, ask your family if you have ever celebrated 4th of July. Did you see fireworks? Wave a flag? Eat watermelon? Tell stories together!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Celebrator', guideText: 'You celebrate, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-06',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 6,
    title: 'Washington and Lincoln',
    duration: '3-5 min',
    badge: 'History Friend',
    nextLesson: 'ss-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we meet two American HEROES from long ago!' },
      { type: 'story', image: '/game-assets/socialstudies/washington-portrait.png', guideText: 'GEORGE WASHINGTON was the FIRST president of America. A long long time ago, he led the people who made America its own country. He is on the dollar bill and the quarter!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is George WASHINGTON?', guideText: 'Tap Washington!',
        items: [
          { image: '/game-assets/socialstudies/washington-portrait.png', label: 'Washington', correct: true },
          { image: '/game-assets/socialstudies/lincoln-portrait.png', label: 'Lincoln' },
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist' },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'A child' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/lincoln-portrait.png', guideText: 'ABRAHAM LINCOLN was a special president too. He wore a tall hat. He kept America together when it was breaking apart, and he ended slavery so all people could be free. He is on the penny and the five-dollar bill!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is Abraham LINCOLN?', guideText: 'Tap Lincoln!',
        items: [
          { image: '/game-assets/socialstudies/lincoln-portrait.png', label: 'Lincoln', correct: true },
          { image: '/game-assets/socialstudies/washington-portrait.png', label: 'Washington' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' }
        ]
      },
      { type: 'yes-no', scenario: 'Was George Washington the FIRST president?', correctAnswer: true, image: '/game-assets/socialstudies/washington-portrait.png' },
      { type: 'family', guideText: 'Tonight, look at money with your family! A penny shows Lincoln. A quarter shows Washington. Two heroes you can hold in your hand!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'History Friend', guideText: 'You met heroes, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-07',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 7,
    title: 'Voting: How We Decide Together',
    duration: '3-5 min',
    badge: 'Voter Friend',
    nextLesson: 'ss-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how grown-ups DECIDE big things together — by VOTING!' },
      { type: 'story', image: '/game-assets/socialstudies/voting-ballot-box.png', guideText: 'When a community needs to decide something — like who will be the leader — everyone gets to VOTE! Voting means each person picks what they want. Then we count all the votes!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a BALLOT BOX?', guideText: 'Tap the ballot box!',
        items: [
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Ballot box', correct: true },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' },
          { image: '/game-assets/socialstudies/clean-water-tap.png', label: 'Water tap' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/two-options-choice.png', guideText: 'Sometimes voting is between TWO choices — like pizza or tacos for dinner! Whichever choice gets more votes WINS!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows a CHOICE?', guideText: 'Tap the two paths!',
        items: [
          { image: '/game-assets/socialstudies/two-options-choice.png', label: 'Two options', correct: true },
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist' },
          { image: '/game-assets/socialstudies/world-celebration.png', label: 'Celebration' },
          { image: '/game-assets/socialstudies/quiet-neighborhood-street.png', label: 'Neighborhood' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kids-voting-classroom.png', guideText: 'Kids vote too! In school, you might vote on what game to play, or what book to read. Everyone gets a fair turn to decide!' },
      { type: 'yes-no', scenario: 'Does voting let everyone help decide together?', correctAnswer: true, image: '/game-assets/socialstudies/kids-voting-classroom.png' },
      { type: 'family', guideText: 'Tonight, vote with your family on something fun! What movie to watch? What snack to share? Each person votes — count it up!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Voter Friend', guideText: 'You vote, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-08',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 8,
    title: 'Goods and Services',
    duration: '3-5 min',
    badge: 'Helper Knower',
    nextLesson: 'ss-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn how communities help each other through GOODS and SERVICES!' },
      { type: 'story', image: '/game-assets/socialstudies/bakery-bread-goods.png', guideText: 'A GOOD is a thing you can hold — like bread from a baker, a toy from a store, or a book from a library. Goods are objects you can touch!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a GOOD you can hold?', guideText: 'Tap the bread!',
        items: [
          { image: '/game-assets/socialstudies/bakery-bread-goods.png', label: 'Bread', correct: true },
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist helping' },
          { image: '/game-assets/socialstudies/community-circle.png', label: 'Community' },
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Ballot box' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/dentist-helping-service.png', guideText: 'A SERVICE is when someone HELPS you — like a dentist cleaning your teeth, a teacher teaching, or a doctor checking your heart. Services are help, not things!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a SERVICE?', guideText: 'Tap the dentist helping!',
        items: [
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist service', correct: true },
          { image: '/game-assets/socialstudies/bakery-bread-goods.png', label: 'Bread good' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' },
          { image: '/game-assets/socialstudies/toy-store-wants.png', label: 'Toy store' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/delivery-truck-goods.png', guideText: 'A delivery truck brings GOODS to people! That is both a good (the package) and a service (the driver helping)!' },
      { type: 'yes-no', scenario: 'Is a TOY a good you can hold?', correctAnswer: true, image: '/game-assets/socialstudies/bakery-bread-goods.png' },
      { type: 'family', guideText: 'Tonight, list goods and services your family uses! Bread from a bakery — good. Doctor visit — service. Find one of each!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Helper Knower', guideText: 'You know goods and services, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-09',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 9,
    title: 'Needs vs. Wants',
    duration: '3-5 min',
    badge: 'Smart Chooser',
    nextLesson: 'ss-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn the BIG difference between NEEDS and WANTS!' },
      { type: 'story', image: '/game-assets/socialstudies/clean-water-tap.png', guideText: 'A NEED is something you cannot live without — like food, water, a home, and love. A WANT is something extra that is nice to have — like toys, candy, or fancy clothes. Both feel good — but needs come FIRST!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a NEED?', guideText: 'Tap clean water!',
        items: [
          { image: '/game-assets/socialstudies/clean-water-tap.png', label: 'Clean water', correct: true },
          { image: '/game-assets/socialstudies/toy-store-wants.png', label: 'Toy store' },
          { image: '/game-assets/socialstudies/birthday-cake-stars.png', label: 'Cake' },
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Ballot box' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/toy-store-wants.png', guideText: 'A toy store is FULL of WANTS! Toys are wonderful, but you do not need them to live. They make life FUN — but food and water keep you ALIVE!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is a WANT?', guideText: 'Tap the toy store!',
        items: [
          { image: '/game-assets/socialstudies/toy-store-wants.png', label: 'Toy store', correct: true },
          { image: '/game-assets/socialstudies/clean-water-tap.png', label: 'Clean water' },
          { image: '/game-assets/socialstudies/community-providing-need.png', label: 'Community sharing food' },
          { image: '/game-assets/socialstudies/dentist-helping-service.png', label: 'Dentist' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/community-providing-need.png', guideText: 'In a good community, EVERYONE gets their NEEDS! We share food, water, and love. No one should be without those!' },
      { type: 'yes-no', scenario: 'Are food and water NEEDS for everyone?', correctAnswer: true, image: '/game-assets/socialstudies/community-providing-need.png' },
      { type: 'family', guideText: 'Tonight, talk with your family — what is a need? A want? Look at things in your home and decide which is which. It is a fun thinking game!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Smart Chooser', guideText: 'You know needs and wants, {name}!' }
    ]
  },
  {
    id: 'ss-3-5-10',
    subject: 'Social Studies',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Atlas',
    guideAnimal: 'Bear',
    lessonNumber: 10,
    title: 'We Are All Different and the Same',
    duration: '3-5 min',
    badge: 'Citizen of the World',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today is the BIG one — we are all different AND the same!' },
      { type: 'story', image: '/game-assets/socialstudies/diverse-friends-circle.png', guideText: 'Look at all these kids! Some have different skin, different hair, different clothes, different homes. They are all DIFFERENT! And yet — they all laugh, they all love, they all dream. They are all the SAME on the INSIDE!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows kids being DIFFERENT and TOGETHER?', guideText: 'Tap the diverse friends!',
        items: [
          { image: '/game-assets/socialstudies/diverse-friends-circle.png', label: 'Diverse friends', correct: true },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'Child alone' },
          { image: '/game-assets/socialstudies/big-city-skyline.png', label: 'City' },
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Ballot box' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/kids-laughing-together.png', guideText: 'Two kids who look really different from each other LAUGHING together. Laughter is a language EVERYONE speaks. Even kids who do not share a single word can be best friends!' },
      { type: 'yes-no', scenario: 'Are all people the SAME on the inside, even if they look DIFFERENT outside?', correctAnswer: true, image: '/game-assets/socialstudies/kids-laughing-together.png' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Which shows the WHOLE WORLD together?', guideText: 'Tap world celebration!',
        items: [
          { image: '/game-assets/socialstudies/world-celebration.png', label: 'World celebration', correct: true },
          { image: '/game-assets/socialstudies/single-child-alone.png', label: 'Child alone' },
          { image: '/game-assets/socialstudies/voting-ballot-box.png', label: 'Ballot box' },
          { image: '/game-assets/socialstudies/clean-water-tap.png', label: 'Water tap' }
        ]
      },
      { type: 'teach', image: '/game-assets/socialstudies/atlas-celebration-burst.png', guideText: 'Wow {name}! You finished SOCIAL STUDIES! You know about your family, your community, your country, and the WHOLE WORLD! You are a citizen — a smart helper for our shared home!' },
      { type: 'yes-no', scenario: 'Are YOU a citizen of the world?', correctAnswer: true, image: '/game-assets/socialstudies/atlas-celebration-burst.png' },
      { type: 'family', guideText: 'Tonight, tell your family — what is ONE way our family is the SAME as other families? What is ONE way we are DIFFERENT? Both are GOOD!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Citizen of the World', guideText: 'You are a citizen of the world, {name}! Great work — you finished Social Studies AND all 14 Little Stars subjects!' }
    ]
  }
];

export default socialstudiesLittleStars;
