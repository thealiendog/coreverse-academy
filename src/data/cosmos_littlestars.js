export const cosmosLittleStars = [
  {
    id: "cos-3-5-01",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 1,
    title: "The Sun: Our Star",
    duration: "5 min",
    badge: "Sun Friend",
    nextLesson: "cos-3-5-02",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! I am Nova. Today we learn about the SUN!' },
      { type: 'story', image: '/game-assets/cosmos/sun-glowing.png', guideText: 'The Sun is a giant ball of light and heat very far away in space. It gives us warmth and helps everything grow. Without the Sun, we would have no light, no plants, no us!' },
      { type: 'teach', image: '/game-assets/cosmos/sun-glowing.png', guideText: 'The Sun is actually a STAR — the closest star to our Earth!' },
      { type: 'tap-right', readOptions: false, hideLabels: true, instruction: 'Tap the SUN!', guideText: 'Find the bright sun!',
        items: [
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun', correct: true },
          { image: '/game-assets/cosmos/moon-full.png', label: 'Moon' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' },
          { image: '/game-assets/cosmos/earth-from-space.png', label: 'Earth' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/day-sky.png', guideText: 'The Sun makes the daytime sky bright and warm. Plants need sunlight to grow!' },
      { type: 'yes-no', scenario: 'Does the Sun give us light and heat?', correctAnswer: true, image: '/game-assets/cosmos/sun-glowing.png' },
      { type: 'family', guideText: 'Tomorrow, go outside together. Feel the warmth of the Sun on your face. Notice how it lights up everything around you!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sun Friend', guideText: 'You met our star, {name}!' }
    ]
  },
  {
    id: "cos-3-5-02",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 2,
    title: "The Moon Changes Shape",
    duration: "5 min",
    badge: "Moon Watcher",
    nextLesson: "cos-3-5-03",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we watch the MOON!' },
      { type: 'story', image: '/game-assets/cosmos/moon-phases.png', guideText: 'The Moon is our nighttime friend. It changes shape over the month — sometimes it is a thin crescent, sometimes a half, and sometimes a big round circle. But the Moon never really changes — we just see different parts of it!' },
      { type: 'teach', image: '/game-assets/cosmos/moon-full.png', guideText: 'When we see the whole circle, that is called a FULL moon!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is the FULL moon?', guideText: 'Tap the round, full moon!',
        items: [
          { image: '/game-assets/cosmos/moon-full.png', label: 'Full moon', correct: true },
          { image: '/game-assets/cosmos/moon-phases.png', label: 'All phases' },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/moon-phases.png', guideText: 'The Moon takes about a month to go through all its shapes — from new, to crescent, to half, to full!' },
      { type: 'yes-no', scenario: 'Does the moon look different on different nights?', correctAnswer: true, image: '/game-assets/cosmos/moon-phases.png' },
      { type: 'family', guideText: 'Tonight, look up at the moon together. Is it a sliver? A half? A full circle? Watch it for a week and see how it changes!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Moon Watcher', guideText: 'You see the moon shapes, {name}!' }
    ]
  },
  {
    id: "cos-3-5-03",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 3,
    title: "Stars Light Up the Night",
    duration: "5 min",
    badge: "Star Counter",
    nextLesson: "cos-3-5-04",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Tonight we count the STARS!' },
      { type: 'story', image: '/game-assets/cosmos/stars-night.png', guideText: 'Stars are huge balls of fire very, very far away in space. There are MILLIONS of them in the sky! Each one is its own sun, just like ours, but very tiny because they are so far away.' },
      { type: 'teach', image: '/game-assets/cosmos/stars-night.png', guideText: 'Stars come out at night when the Sun is on the other side of Earth!' },
      { type: 'yes-no', scenario: 'Can we see stars in the daytime?', correctAnswer: false, image: '/game-assets/cosmos/day-sky.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'When can we see STARS?', guideText: 'Tap when the stars come out!',
        items: [
          { image: '/game-assets/cosmos/night-sky.png', label: 'Night', correct: true },
          { image: '/game-assets/cosmos/day-sky.png', label: 'Day' },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sunny' },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Cloudy' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/stars-night.png', guideText: 'Long ago, sailors looked at stars to find their way. Stars are like a map in the sky!' },
      { type: 'family', guideText: 'On the next clear night, go outside together. Find ONE bright star and make a wish. Then count how many stars you can see in your part of the sky!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Star Counter', guideText: 'You see the stars, {name}!' }
    ]
  },
  {
    id: "cos-3-5-04",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 4,
    title: "Day and Night: Why Does It Get Dark?",
    duration: "5 min",
    badge: "Day Night Knower",
    nextLesson: "cos-3-5-05",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about DAY and NIGHT!' },
      { type: 'story', image: '/game-assets/cosmos/day-night-cycle.png', guideText: 'Earth is a giant ball spinning through space. When our part of Earth faces the Sun, it is daytime. When our part of Earth faces away, it is nighttime. The Sun does not really go anywhere — we are the ones spinning!' },
      { type: 'teach', image: '/game-assets/cosmos/day-sky.png', guideText: 'In the daytime, the Sun is high in the sky. We can see everything around us!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is DAYTIME?', guideText: 'Tap the bright daytime sky!',
        items: [
          { image: '/game-assets/cosmos/day-sky.png', label: 'Daytime', correct: true },
          { image: '/game-assets/cosmos/night-sky.png', label: 'Nighttime' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' },
          { image: '/game-assets/cosmos/moon-full.png', label: 'Moon' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/night-sky.png', guideText: 'At night, our side of Earth is turned away from the Sun. Then we see the Moon and stars!' },
      { type: 'sort-buckets',
        instruction: 'Sort by day and night!',
        guideText: 'Drag each picture to day or night!',
        buckets: [
          { label: 'Day', image: '/game-assets/cosmos/day-sky.png' },
          { label: 'Night', image: '/game-assets/cosmos/night-sky.png' }
        ],
        items: [
          { image: '/game-assets/cosmos/sun-glowing.png', bucket: 0 },
          { image: '/game-assets/cosmos/moon-full.png', bucket: 1 },
          { image: '/game-assets/cosmos/day-sky.png', bucket: 0 },
          { image: '/game-assets/cosmos/stars-night.png', bucket: 1 }
        ]
      },
      { type: 'family', guideText: 'At sunrise or sunset together, watch the sky change colors. The Earth is turning! See if you can spot the moment when day becomes night!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Day Night Knower', guideText: 'You understand day and night, {name}!' }
    ]
  },
  {
    id: "cos-3-5-05",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 5,
    title: "The Four Seasons",
    duration: "5 min",
    badge: "Season Friend",
    nextLesson: "cos-3-5-06",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn the FOUR SEASONS!' },
      { type: 'story', image: '/game-assets/cosmos/four-seasons.png', guideText: 'Every year, Earth goes around the Sun one big time. As we travel, the weather changes. We have FOUR seasons: spring is when things grow, summer is hot and bright, fall is when leaves change colors, and winter is cold with snow!' },
      { type: 'teach', image: '/game-assets/cosmos/four-seasons.png', guideText: 'Spring, summer, fall, winter — every season is special!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which shows all FOUR seasons together?', guideText: 'Tap the picture that shows all four seasons!',
        items: [
          { image: '/game-assets/cosmos/four-seasons.png', label: 'All four seasons', correct: true },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Just the sun' },
          { image: '/game-assets/cosmos/rain-falling.png', label: 'Just rain' },
          { image: '/game-assets/cosmos/night-sky.png', label: 'Just nighttime' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/seed-to-plant.png', guideText: 'In spring, flowers bloom and animals have babies! Earth is waking up after winter.' },
      { type: 'yes-no', scenario: 'Are there four seasons in a year?', correctAnswer: true, image: '/game-assets/cosmos/four-seasons.png' },
      { type: 'family', guideText: 'Tonight, talk together about your favorite season. What do you love about it? Which one is happening RIGHT NOW outside your window?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Season Friend', guideText: 'You know the four seasons, {name}!' }
    ]
  },
  {
    id: "cos-3-5-06",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 6,
    title: "Clouds and Weather",
    duration: "5 min",
    badge: "Cloud Spotter",
    nextLesson: "cos-3-5-07",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we look at CLOUDS!' },
      { type: 'story', image: '/game-assets/cosmos/clouds-fluffy.png', guideText: 'Clouds are made of tiny tiny drops of water floating high in the sky. They look fluffy and soft like cotton, but they are actually made of water! Some clouds are puffy and white, others are gray and full of rain.' },
      { type: 'teach', image: '/game-assets/cosmos/clouds-fluffy.png', guideText: 'When clouds get very heavy with water, they let the drops fall — that is rain!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is CLOUDS?', guideText: 'Tap the fluffy clouds!',
        items: [
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Clouds', correct: true },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' },
          { image: '/game-assets/cosmos/moon-full.png', label: 'Moon' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/weather-types.png', guideText: 'Different days have different weather — sunny, cloudy, rainy, snowy. The weather changes every day!' },
      { type: 'yes-no', scenario: 'Are clouds made of water?', correctAnswer: true, image: '/game-assets/cosmos/clouds-fluffy.png' },
      { type: 'family', guideText: 'Tomorrow, lie on the grass together and look up at the clouds. Find shapes! Is that one a bunny? A dragon? Use your imagination!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Cloud Spotter', guideText: 'You spot the clouds, {name}!' }
    ]
  },
  {
    id: "cos-3-5-07",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 7,
    title: "Rain Comes From the Sky",
    duration: "5 min",
    badge: "Rain Friend",
    nextLesson: "cos-3-5-08",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about RAIN!' },
      { type: 'story', image: '/game-assets/cosmos/rain-falling.png', guideText: 'Rain happens when clouds get full of water. The water gets so heavy that it falls down to Earth as raindrops. Rain is very important — it gives water to plants, animals, rivers, and lakes. Without rain, nothing could grow!' },
      { type: 'teach', image: '/game-assets/cosmos/rain-falling.png', guideText: 'Rain helps everything alive on Earth! Plants drink it through their roots.' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Where does RAIN come from?', guideText: 'Tap where rain comes from!',
        items: [
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Clouds', correct: true },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' },
          { image: '/game-assets/cosmos/earth-from-space.png', label: 'Ground' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/seed-to-plant.png', guideText: 'When it rains, plants drink the water and grow taller and stronger!' },
      { type: 'yes-no', scenario: 'Do plants need rain to grow?', correctAnswer: true, image: '/game-assets/cosmos/seed-to-plant.png' },
      { type: 'family', guideText: 'Next time it rains, listen together to the sound of the raindrops. Put a cup outside and see how much water falls. Splash in a puddle!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Rain Friend', guideText: 'You know how rain works, {name}!' }
    ]
  },
  {
    id: "cos-3-5-08",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 8,
    title: "Animals Sleep in Winter",
    duration: "5 min",
    badge: "Hibernation Helper",
    nextLesson: "cos-3-5-09",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about animals in WINTER!' },
      { type: 'story', image: '/game-assets/cosmos/hibernating-bear.png', guideText: 'When winter comes and it gets very cold, some animals do something amazing — they sleep for the WHOLE winter! Bears curl up in cozy caves, frogs dig into the mud, and bats hide in trees. This special long sleep is called hibernation!' },
      { type: 'teach', image: '/game-assets/cosmos/hibernating-bear.png', guideText: 'Bears eat lots and lots of food in fall to get fat — then they sleep all winter!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which animal HIBERNATES?', guideText: 'Tap the bear sleeping in winter!',
        items: [
          { image: '/game-assets/cosmos/hibernating-bear.png', label: 'Sleeping bear', correct: true },
          { image: '/game-assets/cosmos/animals-babies.png', label: 'Baby animals' },
          { image: '/game-assets/cosmos/dinosaurs.png', label: 'Dinosaurs' },
          { image: '/game-assets/cosmos/weather-types.png', label: 'Weather' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/four-seasons.png', guideText: 'When spring comes again, the animals wake up and come outside!' },
      { type: 'yes-no', scenario: 'Do bears sleep all winter?', correctAnswer: true, image: '/game-assets/cosmos/hibernating-bear.png' },
      { type: 'family', guideText: 'Tonight before bed, build a cozy fort with pillows and blankets. Pretend you are a bear hibernating! What would you dream about for a whole winter?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Hibernation Helper', guideText: 'You understand hibernation, {name}!' }
    ]
  },
  {
    id: "cos-3-5-09",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 9,
    title: "Seeds Grow Into Plants",
    duration: "5 min",
    badge: "Plant Grower",
    nextLesson: "cos-3-5-10",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we watch a SEED grow!' },
      { type: 'story', image: '/game-assets/cosmos/seed-to-plant.png', guideText: 'A tiny little seed has something magical inside — a whole plant waiting to grow! When you put a seed in the soil and give it water and sunshine, it pushes out a little sprout. The sprout grows leaves, then it grows tall, and one day it might even have a flower!' },
      { type: 'teach', image: '/game-assets/cosmos/seed-to-plant.png', guideText: 'A seed needs three things to grow — water, sunlight, and good soil!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does a seed grow into?', guideText: 'Tap the picture of a seed becoming a plant!',
        items: [
          { image: '/game-assets/cosmos/seed-to-plant.png', label: 'Plant', correct: true },
          { image: '/game-assets/cosmos/rain-falling.png', label: 'Rain' },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Cloud' },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/sun-glowing.png', guideText: 'The Sun gives plants energy to grow. The water helps them drink. The soil holds them strong!' },
      { type: 'yes-no', scenario: 'Do plants need water to grow?', correctAnswer: true, image: '/game-assets/cosmos/rain-falling.png' },
      { type: 'family', guideText: 'Plant a seed together this week — a bean works great. Put it in a cup with soil, water it every day, and watch what happens. Take a photo each day!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Plant Grower', guideText: 'You can grow plants, {name}!' }
    ]
  },
  {
    id: "cos-3-5-10",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 10,
    title: "Water, Water Everywhere",
    duration: "5 min",
    badge: "Water Watcher",
    nextLesson: "cos-3-5-11",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we explore WATER!' },
      { type: 'story', image: '/game-assets/cosmos/water-everywhere.png', guideText: 'Water is one of the most special things on Earth. We have water in oceans, in rivers, in lakes, in puddles, and even in our bodies! Every living thing needs water to stay alive — plants, animals, and us!' },
      { type: 'teach', image: '/game-assets/cosmos/earth-from-space.png', guideText: 'See those big blue parts on Earth? That is all water! Most of our planet is covered in water!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which has WATER everywhere?', guideText: 'Tap the picture with oceans and rivers!',
        items: [
          { image: '/game-assets/cosmos/water-everywhere.png', label: 'Water', correct: true },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' },
          { image: '/game-assets/cosmos/rain-falling.png', label: 'Rain' },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Clouds' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/water-everywhere.png', guideText: 'Water flows from rivers into the ocean, then back up into clouds — over and over forever!' },
      { type: 'yes-no', scenario: 'Do we need water to live?', correctAnswer: true, image: '/game-assets/cosmos/water-everywhere.png' },
      { type: 'family', guideText: 'Together, count how many times you use water in one day — drinking, washing, cooking, watering plants. Water is everywhere in your day!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Water Watcher', guideText: 'You see water everywhere, {name}!' }
    ]
  },
  {
    id: "cos-3-5-11",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 11,
    title: "Hot and Cold: Temperature",
    duration: "5 min",
    badge: "Temperature Tracker",
    nextLesson: "cos-3-5-12",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we feel HOT and COLD!' },
      { type: 'story', image: '/game-assets/cosmos/temperature-hot-cold.png', guideText: 'Some things are hot, like the sun on a summer day or a cup of tea. Some things are cold, like ice cubes or snow. Hot and cold are called TEMPERATURE — and your body can feel the difference!' },
      { type: 'teach', image: '/game-assets/cosmos/sun-glowing.png', guideText: 'The Sun is VERY hot! It is so hot that we feel its warmth even though it is far away in space.' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which is HOT?', guideText: 'Tap the hot one!',
        items: [
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun', correct: true },
          { image: '/game-assets/cosmos/ice-melting.png', label: 'Ice' },
          { image: '/game-assets/cosmos/moon-full.png', label: 'Moon' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Stars' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/ice-melting.png', guideText: 'Ice is very cold. When something cold gets warm, it can change shape!' },
      { type: 'sort-buckets',
        instruction: 'Sort hot things and cold things!',
        guideText: 'Drag each one to hot or cold!',
        buckets: [
          { label: 'Hot', image: '/game-assets/cosmos/sun-glowing.png' },
          { label: 'Cold', image: '/game-assets/cosmos/ice-melting.png' }
        ],
        items: [
          { image: '/game-assets/cosmos/sun-glowing.png', bucket: 0 },
          { image: '/game-assets/cosmos/ice-melting.png', bucket: 1 },
          { image: '/game-assets/cosmos/temperature-hot-cold.png', bucket: 0 }
        ]
      },
      { type: 'family', guideText: 'Together, find one hot thing in your home (carefully!) and one cold thing. Touch each one and notice how different they feel on your fingers!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Temperature Tracker', guideText: 'You feel hot and cold, {name}!' }
    ]
  },
  {
    id: "cos-3-5-12",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 12,
    title: "Heavy and Light: Weight",
    duration: "5 min",
    badge: "Weight Wizard",
    nextLesson: "cos-3-5-13",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we learn about HEAVY and LIGHT!' },
      { type: 'story', image: '/game-assets/cosmos/weight-comparison.png', guideText: 'Some things are heavy, like a big rock or a backpack full of books. Some things are light, like a feather or a balloon. When you pick something up, your arms can feel how heavy or light it is. That is called WEIGHT!' },
      { type: 'teach', image: '/game-assets/cosmos/weight-comparison.png', guideText: 'A scale shows us which thing is heavier — the heavy side goes DOWN, the light side goes UP!' },
      { type: 'yes-no', scenario: 'Is a rock heavier than a feather?', correctAnswer: true, image: '/game-assets/cosmos/weight-comparison.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which thing would feel HEAVY?', guideText: 'Tap the heavy thing!',
        items: [
          { image: '/game-assets/cosmos/weight-comparison.png', label: 'Rock', correct: true },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Cloud' },
          { image: '/game-assets/cosmos/bubbles-floating.png', label: 'Bubbles' },
          { image: '/game-assets/cosmos/air-blowing.png', label: 'Air' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/bubbles-floating.png', guideText: 'Some things are SO light they can float in the air, like bubbles and feathers!' },
      { type: 'family', guideText: 'Together, pick up two things from your house. Which one feels heavier? Which is lighter? Try a book and a sock — see which is which!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Weight Wizard', guideText: 'You know heavy and light, {name}!' }
    ]
  },
  {
    id: "cos-3-5-13",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 13,
    title: "Mixing Colors: Science Magic",
    duration: "5 min",
    badge: "Color Mixer",
    nextLesson: "cos-3-5-14",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we make MAGIC with COLORS!' },
      { type: 'story', image: '/game-assets/cosmos/colors-mixing.png', guideText: 'When you mix two colors together, something magical happens — they become a NEW color! Red and yellow make orange. Blue and yellow make green. Red and blue make purple. Color mixing is like science magic!' },
      { type: 'teach', image: '/game-assets/cosmos/colors-mixing.png', guideText: 'Red, yellow, and blue are special — they make all the other colors!' },
      { type: 'yes-no', scenario: 'Do red and blue make purple?', correctAnswer: true, image: '/game-assets/cosmos/colors-mixing.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What happens when you mix colors?', guideText: 'Tap the colors mixing!',
        items: [
          { image: '/game-assets/cosmos/colors-mixing.png', label: 'Mixing colors', correct: true },
          { image: '/game-assets/cosmos/ice-melting.png', label: 'Melting ice' },
          { image: '/game-assets/cosmos/magnet-attracting.png', label: 'Magnet pulling' },
          { image: '/game-assets/cosmos/bubbles-floating.png', label: 'Blowing bubbles' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/colors-mixing.png', guideText: 'Artists use color mixing to paint beautiful pictures of everything in the world!' },
      { type: 'family', guideText: 'Get out paints or markers together. Mix red and yellow — what do you get? Try blue and yellow! Make as many new colors as you can!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Color Mixer', guideText: 'You mix colors like magic, {name}!' }
    ]
  },
  {
    id: "cos-3-5-14",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 14,
    title: "Bubbles and Air",
    duration: "5 min",
    badge: "Air Explorer",
    nextLesson: "cos-3-5-15",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we discover BUBBLES and AIR!' },
      { type: 'story', image: '/game-assets/cosmos/bubbles-floating.png', guideText: 'Air is all around us — even though we cannot see it, it is everywhere! When you blow into a bubble, you fill it with air. The bubble floats because air is so light. Air is what we breathe to stay alive!' },
      { type: 'teach', image: '/game-assets/cosmos/air-blowing.png', guideText: 'You can FEEL air when the wind blows on your face. Air can be still, or it can move very fast!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What floats with AIR inside?', guideText: 'Tap the bubbles!',
        items: [
          { image: '/game-assets/cosmos/bubbles-floating.png', label: 'Bubbles', correct: true },
          { image: '/game-assets/cosmos/weight-comparison.png', label: 'Heavy rock' },
          { image: '/game-assets/cosmos/water-everywhere.png', label: 'Water' },
          { image: '/game-assets/cosmos/ice-melting.png', label: 'Ice' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/bubbles-floating.png', guideText: 'A bubble is just a thin film of soap holding air inside. When the air gets out, the bubble pops!' },
      { type: 'yes-no', scenario: 'Do we breathe air to live?', correctAnswer: true, image: '/game-assets/cosmos/air-blowing.png' },
      { type: 'family', guideText: 'Make bubbles together! Mix dish soap with water and use a straw to blow bubbles. Watch them float and POP! Where do they go?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Air Explorer', guideText: 'You know about air, {name}!' }
    ]
  },
  {
    id: "cos-3-5-15",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 15,
    title: "Magnets Pull Things",
    duration: "5 min",
    badge: "Magnet Master",
    nextLesson: "cos-3-5-16",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we play with MAGNETS!' },
      { type: 'story', image: '/game-assets/cosmos/magnet-attracting.png', guideText: 'A magnet has an invisible power — it can pull metal things toward itself without even touching them! Watch how paperclips and keys jump right onto the magnet. This invisible pulling power is called magnetism, and it is real science magic!' },
      { type: 'teach', image: '/game-assets/cosmos/magnet-attracting.png', guideText: 'Magnets only pull on certain metals, like iron and steel. They do not pull plastic or wood!' },
      { type: 'yes-no', scenario: 'Can a magnet pull metal toward it?', correctAnswer: true, image: '/game-assets/cosmos/magnet-attracting.png' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What does a MAGNET do?', guideText: 'Tap the magnet pulling things!',
        items: [
          { image: '/game-assets/cosmos/magnet-attracting.png', label: 'Magnet pulling', correct: true },
          { image: '/game-assets/cosmos/bubbles-floating.png', label: 'Bubbles' },
          { image: '/game-assets/cosmos/colors-mixing.png', label: 'Colors' },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Clouds' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/magnet-attracting.png', guideText: 'You can find magnets on your fridge — they hold pictures and notes without falling!' },
      { type: 'family', guideText: 'Find a fridge magnet together. Try to stick it to different things — the fridge, a wooden chair, a plastic toy. Which does it stick to? Which does it not?', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Magnet Master', guideText: 'You understand magnets, {name}!' }
    ]
  },
  {
    id: "cos-3-5-16",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 16,
    title: "Ice Melts Into Water",
    duration: "5 min",
    badge: "Ice Investigator",
    nextLesson: "cos-3-5-17",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we watch ICE turn into WATER!' },
      { type: 'story', image: '/game-assets/cosmos/ice-melting.png', guideText: 'Ice is just water that got SO cold it turned hard. But when ice gets warm again, it MELTS — it slowly turns back into water! You can watch this happen if you leave an ice cube on the table. Ice and water are the same thing in different forms!' },
      { type: 'teach', image: '/game-assets/cosmos/ice-melting.png', guideText: 'Cold makes water turn to ice. Warmth makes ice turn back to water!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What happens when ice gets WARM?', guideText: 'Tap what happens to ice in the sun!',
        items: [
          { image: '/game-assets/cosmos/ice-melting.png', label: 'Melts to water', correct: true },
          { image: '/game-assets/cosmos/temperature-hot-cold.png', label: 'Gets hotter' },
          { image: '/game-assets/cosmos/clouds-fluffy.png', label: 'Becomes clouds' },
          { image: '/game-assets/cosmos/rain-falling.png', label: 'Falls as rain' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/sun-glowing.png', guideText: 'The Sun is very warm — that is why snow and ice melt when the sun shines on them!' },
      { type: 'yes-no', scenario: 'Does ice melt when it gets warm?', correctAnswer: true, image: '/game-assets/cosmos/ice-melting.png' },
      { type: 'family', guideText: 'Put an ice cube in a bowl together. Watch it for a few minutes. What is happening? See it turn into a puddle of water right before your eyes!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Ice Investigator', guideText: 'You watched ice melt, {name}!' }
    ]
  },
  {
    id: "cos-3-5-17",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 17,
    title: "Animals and Their Babies",
    duration: "5 min",
    badge: "Animal Friend",
    nextLesson: "cos-3-5-18",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we meet ANIMAL BABIES!' },
      { type: 'story', image: '/game-assets/cosmos/animals-babies.png', guideText: 'Every animal has babies, just like people do! Dogs have puppies. Cats have kittens. Ducks have ducklings. Cows have calves. Animal mommies take care of their babies — they feed them, keep them warm, and teach them how to live!' },
      { type: 'teach', image: '/game-assets/cosmos/animals-babies.png', guideText: 'Baby animals look like little versions of their parents — but they grow up SO fast!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'What do animal moms do?', guideText: 'Tap moms with their babies!',
        items: [
          { image: '/game-assets/cosmos/animals-babies.png', label: 'Care for babies', correct: true },
          { image: '/game-assets/cosmos/hibernating-bear.png', label: 'Sleep all winter' },
          { image: '/game-assets/cosmos/dinosaurs.png', label: 'Ancient animals' },
          { image: '/game-assets/cosmos/five-senses.png', label: 'Use their senses' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/animals-babies.png', guideText: 'Birds make nests for their baby chicks. Bears keep their cubs warm. Every animal cares for its young!' },
      { type: 'yes-no', scenario: 'Do animal moms take care of their babies?', correctAnswer: true, image: '/game-assets/cosmos/animals-babies.png' },
      { type: 'family', guideText: 'Together, name 5 animal babies — like puppy, kitten, calf. What do you call a baby horse? A baby sheep? Look up any you do not know!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Animal Friend', guideText: 'You know animal babies, {name}!' }
    ]
  },
  {
    id: "cos-3-5-18",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 18,
    title: "Dinosaurs Were Real!",
    duration: "5 min",
    badge: "Dino Discoverer",
    nextLesson: "cos-3-5-19",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we meet DINOSAURS!' },
      { type: 'story', image: '/game-assets/cosmos/dinosaurs.png', guideText: 'A long long LONG time ago — way before people existed — giant creatures called dinosaurs walked on Earth! Some were taller than houses. Some were as small as chickens. Some ate plants, and some ate other animals. They were REAL animals!' },
      { type: 'teach', image: '/game-assets/cosmos/dinosaurs.png', guideText: 'Dinosaurs lived millions of years ago. We know about them because we find their bones in the ground!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which one is a DINOSAUR?', guideText: 'Tap the dinosaur!',
        items: [
          { image: '/game-assets/cosmos/dinosaurs.png', label: 'Dinosaur', correct: true },
          { image: '/game-assets/cosmos/animals-babies.png', label: 'Baby animals' },
          { image: '/game-assets/cosmos/hibernating-bear.png', label: 'Bear' },
          { image: '/game-assets/cosmos/five-senses.png', label: 'Human body' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/dinosaurs.png', guideText: 'Dinosaurs are not alive anymore, but birds today are like little dinosaurs that survived!' },
      { type: 'yes-no', scenario: 'Did dinosaurs really live on Earth?', correctAnswer: true, image: '/game-assets/cosmos/dinosaurs.png' },
      { type: 'family', guideText: 'Together, look at dinosaur pictures or read a dinosaur book. Pick your favorite dinosaur. What did it eat? How big was it? Pretend to be one!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Dino Discoverer', guideText: 'You know dinosaurs were real, {name}!' }
    ]
  },
  {
    id: "cos-3-5-19",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 19,
    title: "The Five Senses",
    duration: "5 min",
    badge: "Sense Sleuth",
    nextLesson: "cos-3-5-20",
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we use our FIVE SENSES!' },
      { type: 'story', image: '/game-assets/cosmos/five-senses.png', guideText: 'Your body has FIVE amazing senses that tell you about the world! You SEE with your eyes. You HEAR with your ears. You SMELL with your nose. You TASTE with your tongue. And you TOUCH with your hands and skin. Every moment, your senses are sending information to your brain!' },
      { type: 'teach', image: '/game-assets/cosmos/five-senses.png', guideText: 'Your eyes see colors, your ears hear sounds, your nose smells food, your tongue tastes flavors, and your hands feel things!' },
      { type: 'yes-no', scenario: 'Do we see with our eyes?', correctAnswer: true, image: '/game-assets/cosmos/five-senses.png' },
      { type: 'teach', image: '/game-assets/cosmos/light-shadow.png', guideText: 'Light helps us see! Without light, our eyes cannot see anything. That is why a dark room feels different!' },
      { type: 'yes-no', scenario: 'Do you have five senses?', correctAnswer: true, image: '/game-assets/cosmos/five-senses.png' },
      { type: 'family', guideText: 'Together, play a sense game. Close your eyes — what can you HEAR? Now smell something — what is it? Touch a soft thing and a hard thing. Use every sense!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Sense Sleuth', guideText: 'You know your five senses, {name}!' }
    ]
  },
  {
    id: "cos-3-5-20",
    subject: "Cosmos & Science",
    ageGroup: "3-5",
    band: "Little Stars",
    guide: "Nova",
    guideAnimal: "Owl",
    lessonNumber: 20,
    title: "Earth is Our Home",
    duration: "5 min",
    badge: "Earth Hero",
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: 'Hi {name}! Today we celebrate our home — EARTH!' },
      { type: 'story', image: '/game-assets/cosmos/earth-from-space.png', guideText: 'Earth is our planet — our HOME. It floats in space, with the Sun warming us, the Moon orbiting around us, and stars all around. Earth has water, air, plants, animals, and YOU. It is the only planet we know with life on it. Earth is precious and we must take care of it!' },
      { type: 'teach', image: '/game-assets/cosmos/earth-from-space.png', guideText: 'Earth gives us everything we need — air to breathe, water to drink, food to eat, and a place to live!' },
      { type: 'tap-right', readOptions: true, hideLabels: true, instruction: 'Which planet is our HOME?', guideText: 'Tap our home, Earth!',
        items: [
          { image: '/game-assets/cosmos/earth-from-space.png', label: 'Earth', correct: true },
          { image: '/game-assets/cosmos/sun-glowing.png', label: 'Sun' },
          { image: '/game-assets/cosmos/moon-full.png', label: 'Moon' },
          { image: '/game-assets/cosmos/stars-night.png', label: 'Star' }
        ]
      },
      { type: 'teach', image: '/game-assets/cosmos/water-everywhere.png', guideText: 'We love Earth by keeping it clean — picking up trash, saving water, and caring for plants and animals!' },
      { type: 'yes-no', scenario: 'Should we take care of Earth?', correctAnswer: true, image: '/game-assets/cosmos/earth-from-space.png' },
      { type: 'family', guideText: 'Together, do ONE kind thing for Earth today — pick up litter, water a plant, or turn off lights you are not using. Earth is our home — let us love it!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Earth Hero', guideText: 'You love our planet, {name}!' }
    ]
  }
];

export default cosmosLittleStars;
