export const spanishLittleStars = [
  {
    id: 'sp-3-5-01',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 1,
    title: '¡Hola! Greetings',
    duration: '3-5 min',
    badge: 'Little Greeter',
    nextLesson: 'sp-3-5-02',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! I am Luna! Today we learn how to say HELLO and GOODBYE in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/friends-greeting.png', guideText: 'In Spanish, when we see a friend we say ¡Hola! That means HELLO! And when we leave we say ¡Adiós! That means GOODBYE!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one means HELLO?', guideText: '¡Hola! Tap the picture that means hello!',
        items: [
          { image: '/game-assets/spanish/wave-hello.png', label: 'Hola', correct: true },
          { image: '/game-assets/spanish/wave-goodbye.png', label: 'Adiós' },
          { image: '/game-assets/spanish/numero-uno.png', label: 'Uno' },
          { image: '/game-assets/spanish/gato-cat.png', label: 'Gato' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/wave-goodbye.png', guideText: 'And when we say goodbye we say ¡Adiós! Try saying it with me — ¡Adiós!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one means GOODBYE?', guideText: '¡Adiós! Tap the picture that means goodbye!',
        items: [
          { image: '/game-assets/spanish/wave-goodbye.png', label: 'Adiós', correct: true },
          { image: '/game-assets/spanish/wave-hello.png', label: 'Hola' },
          { image: '/game-assets/spanish/numero-dos.png', label: 'Dos' },
          { image: '/game-assets/spanish/perro-dog.png', label: 'Perro' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/friends-greeting.png', guideText: '¡Hola y adiós! Two new Spanish words! ¡Muy bien!' },
      { type: 'yes-no', scenario: 'In Spanish, does HOLA mean hello?', correctAnswer: true, image: '/game-assets/spanish/wave-hello.png' },
      { type: 'family', guideText: 'Tonight, greet your family the Spanish way! Say ¡Hola! when you see them and ¡Adiós! at bedtime!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Little Greeter', guideText: '¡Muy bien, {name}! You said HOLA and ADIÓS!' }
    ]
  },
  {
    id: 'sp-3-5-02',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 2,
    title: 'Los Números 1-5',
    duration: '3-5 min',
    badge: 'Number Friend',
    nextLesson: 'sp-3-5-03',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we count in Spanish — uno, dos, tres, cuatro, cinco!' },
      { type: 'story', image: '/game-assets/spanish/numero-uno.png', guideText: 'In Spanish, ONE is uno. TWO is dos. THREE is tres. FOUR is cuatro. And FIVE is cinco! Let us count together!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which number is UNO?', guideText: '¡Uno! Tap the number one!',
        items: [
          { image: '/game-assets/spanish/numero-uno.png', label: 'Uno', correct: true },
          { image: '/game-assets/spanish/numero-dos.png', label: 'Dos' },
          { image: '/game-assets/spanish/numero-tres.png', label: 'Tres' },
          { image: '/game-assets/spanish/numero-cuatro.png', label: 'Cuatro' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/numero-dos.png', guideText: '¡Dos! That means TWO. Like two eyes, or two hands!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which number is TRES?', guideText: '¡Tres! Tap the number three!',
        items: [
          { image: '/game-assets/spanish/numero-tres.png', label: 'Tres', correct: true },
          { image: '/game-assets/spanish/numero-uno.png', label: 'Uno' },
          { image: '/game-assets/spanish/numero-cinco.png', label: 'Cinco' },
          { image: '/game-assets/spanish/numero-cuatro.png', label: 'Cuatro' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/numero-cinco.png', guideText: '¡Cinco! That means FIVE. Hold up five fingers — ¡cinco!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which number is CINCO?', guideText: '¡Cinco! Tap the number five!',
        items: [
          { image: '/game-assets/spanish/numero-cinco.png', label: 'Cinco', correct: true },
          { image: '/game-assets/spanish/numero-dos.png', label: 'Dos' },
          { image: '/game-assets/spanish/numero-cuatro.png', label: 'Cuatro' },
          { image: '/game-assets/spanish/numero-uno.png', label: 'Uno' }
        ]
      },
      { type: 'family', guideText: 'Tonight, count to five in Spanish with your family! Uno, dos, tres, cuatro, cinco! Hold up your fingers as you count!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Number Friend', guideText: '¡Muy bien, {name}! You can count to cinco!' }
    ]
  },
  {
    id: 'sp-3-5-03',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 3,
    title: 'Los Colores',
    duration: '3-5 min',
    badge: 'Color Speaker',
    nextLesson: 'sp-3-5-04',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn COLORS in Spanish!' },
      { type: 'story', image: '/game-assets/creative-arts/colors-rainbow.png', guideText: 'In Spanish, RED is rojo. BLUE is azul. YELLOW is amarillo. And GREEN is verde! Beautiful new words!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which one is ROJO?', guideText: '¡Rojo! Tap the red one!',
        items: [
          { image: '/game-assets/creative-arts/color-red.png', label: 'Rojo', correct: true },
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Azul' },
          { image: '/game-assets/creative-arts/color-yellow.png', label: 'Amarillo' },
          { image: '/game-assets/creative-arts/color-green.png', label: 'Verde' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/color-blue.png', guideText: '¡Azul! That means BLUE — like the sky and the ocean!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which one is AZUL?', guideText: '¡Azul! Tap the blue one!',
        items: [
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Azul', correct: true },
          { image: '/game-assets/creative-arts/color-red.png', label: 'Rojo' },
          { image: '/game-assets/creative-arts/color-yellow.png', label: 'Amarillo' },
          { image: '/game-assets/creative-arts/color-green.png', label: 'Verde' }
        ]
      },
      { type: 'teach', image: '/game-assets/creative-arts/color-yellow.png', guideText: '¡Amarillo! That means YELLOW — like the sun and bananas!' },
      { type: 'tap-right', readOptions: false, hideLabels: false, instruction: 'Which one is VERDE?', guideText: '¡Verde! Tap the green one!',
        items: [
          { image: '/game-assets/creative-arts/color-green.png', label: 'Verde', correct: true },
          { image: '/game-assets/creative-arts/color-yellow.png', label: 'Amarillo' },
          { image: '/game-assets/creative-arts/color-red.png', label: 'Rojo' },
          { image: '/game-assets/creative-arts/color-blue.png', label: 'Azul' }
        ]
      },
      { type: 'family', guideText: 'Tonight, find one thing rojo, one thing azul, one thing amarillo, and one thing verde at home with your family!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Color Speaker', guideText: '¡Muy bien, {name}! You know four colors in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-04',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 4,
    title: 'Mi Familia',
    duration: '3-5 min',
    badge: 'Family Speaker',
    nextLesson: 'sp-3-5-05',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn FAMILY words in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/mama-figure.png', guideText: 'Your family is special! In Spanish, MOM is mamá. DAD is papá. BROTHER is hermano. SISTER is hermana. Let us learn these family words!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is MAMÁ?', guideText: '¡Mamá! Tap mom!',
        items: [
          { image: '/game-assets/spanish/mama-figure.png', label: 'Mamá', correct: true },
          { image: '/game-assets/spanish/papa-figure.png', label: 'Papá' },
          { image: '/game-assets/spanish/hermano-figure.png', label: 'Hermano' },
          { image: '/game-assets/spanish/hermana-figure.png', label: 'Hermana' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/papa-figure.png', guideText: '¡Papá! That means DAD. Two words very close in many languages!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is PAPÁ?', guideText: '¡Papá! Tap dad!',
        items: [
          { image: '/game-assets/spanish/papa-figure.png', label: 'Papá', correct: true },
          { image: '/game-assets/spanish/mama-figure.png', label: 'Mamá' },
          { image: '/game-assets/spanish/hermano-figure.png', label: 'Hermano' },
          { image: '/game-assets/spanish/hermana-figure.png', label: 'Hermana' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/hermana-figure.png', guideText: 'Hermano means BROTHER. Hermana means SISTER. Almost the same word — only one letter different!' },
      { type: 'yes-no', scenario: 'In Spanish, does MAMÁ mean mom?', correctAnswer: true, image: '/game-assets/spanish/mama-figure.png' },
      { type: 'family', guideText: 'Tonight, call your family by their Spanish names! Say ¡Hola, mamá! and ¡Hola, papá! See if they smile!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Family Speaker', guideText: '¡Muy bien, {name}! You know your familia in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-05',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 5,
    title: 'Los Animales',
    duration: '3-5 min',
    badge: 'Animal Friend',
    nextLesson: 'sp-3-5-06',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn ANIMALS in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/perro-dog.png', guideText: 'Animals have new names in Spanish! DOG is perro. CAT is gato. BIRD is pájaro. FISH is pez. Let us meet them!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is PERRO?', guideText: '¡Perro! Tap the dog!',
        items: [
          { image: '/game-assets/spanish/perro-dog.png', label: 'Perro', correct: true },
          { image: '/game-assets/spanish/gato-cat.png', label: 'Gato' },
          { image: '/game-assets/spanish/pajaro-bird.png', label: 'Pájaro' },
          { image: '/game-assets/spanish/pez-fish.png', label: 'Pez' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/gato-cat.png', guideText: '¡Gato! That means CAT. Cats say meow in every language!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is GATO?', guideText: '¡Gato! Tap the cat!',
        items: [
          { image: '/game-assets/spanish/gato-cat.png', label: 'Gato', correct: true },
          { image: '/game-assets/spanish/perro-dog.png', label: 'Perro' },
          { image: '/game-assets/spanish/pajaro-bird.png', label: 'Pájaro' },
          { image: '/game-assets/spanish/pez-fish.png', label: 'Pez' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/pajaro-bird.png', guideText: '¡Pájaro! That means BIRD. Like me — I am a parrot, una clase de pájaro!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is PEZ?', guideText: '¡Pez! Tap the fish!',
        items: [
          { image: '/game-assets/spanish/pez-fish.png', label: 'Pez', correct: true },
          { image: '/game-assets/spanish/perro-dog.png', label: 'Perro' },
          { image: '/game-assets/spanish/gato-cat.png', label: 'Gato' },
          { image: '/game-assets/spanish/pajaro-bird.png', label: 'Pájaro' }
        ]
      },
      { type: 'family', guideText: 'Tonight, ask your family — do you have a perro, gato, pájaro, or pez? Tell them the Spanish name for your pet!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Animal Friend', guideText: '¡Muy bien, {name}! You know four animals in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-06',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 6,
    title: 'La Comida',
    duration: '3-5 min',
    badge: 'Food Speaker',
    nextLesson: 'sp-3-5-07',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn FOOD words in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/manzana-apple.png', guideText: 'Yummy! In Spanish, BREAD is pan. MILK is leche. APPLE is manzana. WATER is agua. Food in Spanish — ¡delicioso!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is PAN?', guideText: '¡Pan! Tap the bread!',
        items: [
          { image: '/game-assets/spanish/pan-bread.png', label: 'Pan', correct: true },
          { image: '/game-assets/spanish/leche-milk.png', label: 'Leche' },
          { image: '/game-assets/spanish/manzana-apple.png', label: 'Manzana' },
          { image: '/game-assets/spanish/agua-water.png', label: 'Agua' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/leche-milk.png', guideText: '¡Leche! That means MILK. Milk helps your body grow strong!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is MANZANA?', guideText: '¡Manzana! Tap the apple!',
        items: [
          { image: '/game-assets/spanish/manzana-apple.png', label: 'Manzana', correct: true },
          { image: '/game-assets/spanish/pan-bread.png', label: 'Pan' },
          { image: '/game-assets/spanish/agua-water.png', label: 'Agua' },
          { image: '/game-assets/spanish/leche-milk.png', label: 'Leche' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/agua-water.png', guideText: '¡Agua! That means WATER. Your body needs water every day!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is AGUA?', guideText: '¡Agua! Tap the water!',
        items: [
          { image: '/game-assets/spanish/agua-water.png', label: 'Agua', correct: true },
          { image: '/game-assets/spanish/leche-milk.png', label: 'Leche' },
          { image: '/game-assets/spanish/pan-bread.png', label: 'Pan' },
          { image: '/game-assets/spanish/manzana-apple.png', label: 'Manzana' }
        ]
      },
      { type: 'family', guideText: 'Tonight at dinner, ask for things in Spanish! ¡Quiero pan, por favor! Or ¡Más agua, por favor!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Food Speaker', guideText: '¡Muy bien, {name}! You know food in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-07',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 7,
    title: 'El Cuerpo',
    duration: '3-5 min',
    badge: 'Body Speaker',
    nextLesson: 'sp-3-5-08',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn BODY parts in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/cabeza-head.png', guideText: 'Your body has new names in Spanish! HEAD is cabeza. EYES are ojos. HANDS are manos. FEET are pies. Touch them as we say each one!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is CABEZA?', guideText: '¡Cabeza! Tap the head!',
        items: [
          { image: '/game-assets/spanish/cabeza-head.png', label: 'Cabeza', correct: true },
          { image: '/game-assets/spanish/ojos-eyes.png', label: 'Ojos' },
          { image: '/game-assets/spanish/manos-hands.png', label: 'Manos' },
          { image: '/game-assets/spanish/pies-feet.png', label: 'Pies' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/ojos-eyes.png', guideText: '¡Ojos! That means EYES — the part you see with! Touch your ojos!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is MANOS?', guideText: '¡Manos! Tap the hands!',
        items: [
          { image: '/game-assets/spanish/manos-hands.png', label: 'Manos', correct: true },
          { image: '/game-assets/spanish/ojos-eyes.png', label: 'Ojos' },
          { image: '/game-assets/spanish/pies-feet.png', label: 'Pies' },
          { image: '/game-assets/spanish/cabeza-head.png', label: 'Cabeza' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/pies-feet.png', guideText: '¡Pies! That means FEET — the part you walk with! Wiggle your pies!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is PIES?', guideText: '¡Pies! Tap the feet!',
        items: [
          { image: '/game-assets/spanish/pies-feet.png', label: 'Pies', correct: true },
          { image: '/game-assets/spanish/manos-hands.png', label: 'Manos' },
          { image: '/game-assets/spanish/ojos-eyes.png', label: 'Ojos' },
          { image: '/game-assets/spanish/cabeza-head.png', label: 'Cabeza' }
        ]
      },
      { type: 'family', guideText: 'Tonight, play Touch Your Body in Spanish with your family! ¡Toca tu cabeza! Touch your head! ¡Toca tus ojos! Touch your eyes!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Body Speaker', guideText: '¡Muy bien, {name}! You know your body in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-08',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 8,
    title: 'El Tiempo',
    duration: '3-5 min',
    badge: 'Weather Speaker',
    nextLesson: 'sp-3-5-09',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn WEATHER words in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/sol-sun.png', guideText: 'Look up at the sky! In Spanish, SUN is sol. RAIN is lluvia. SNOW is nieve. WIND is viento. The weather changes every day!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is SOL?', guideText: '¡Sol! Tap the sun!',
        items: [
          { image: '/game-assets/spanish/sol-sun.png', label: 'Sol', correct: true },
          { image: '/game-assets/spanish/lluvia-rain.png', label: 'Lluvia' },
          { image: '/game-assets/spanish/nieve-snow.png', label: 'Nieve' },
          { image: '/game-assets/spanish/viento-wind.png', label: 'Viento' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/lluvia-rain.png', guideText: '¡Lluvia! That means RAIN. Plants love la lluvia!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is LLUVIA?', guideText: '¡Lluvia! Tap the rain!',
        items: [
          { image: '/game-assets/spanish/lluvia-rain.png', label: 'Lluvia', correct: true },
          { image: '/game-assets/spanish/sol-sun.png', label: 'Sol' },
          { image: '/game-assets/spanish/nieve-snow.png', label: 'Nieve' },
          { image: '/game-assets/spanish/viento-wind.png', label: 'Viento' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/nieve-snow.png', guideText: '¡Nieve! That means SNOW. Cold and white and sparkly!' },
      { type: 'yes-no', scenario: 'In Spanish, does SOL mean sun?', correctAnswer: true, image: '/game-assets/spanish/sol-sun.png' },
      { type: 'family', guideText: 'Tonight, look out the window with your family. What is the weather? Say it in Spanish — ¡hay sol! ¡hay lluvia! ¡hay viento!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Weather Speaker', guideText: '¡Muy bien, {name}! You know the weather in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-09',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 9,
    title: '¿Cómo Estás? Feelings',
    duration: '3-5 min',
    badge: 'Feelings Speaker',
    nextLesson: 'sp-3-5-10',
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we learn FEELINGS in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/feliz-happy.png', guideText: 'When someone asks ¿Cómo estás? — How are you? — you can answer! HAPPY is feliz. SAD is triste. TIRED is cansado. Tell people how you feel!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is FELIZ?', guideText: '¡Feliz! Tap the happy face!',
        items: [
          { image: '/game-assets/spanish/feliz-happy.png', label: 'Feliz', correct: true },
          { image: '/game-assets/spanish/triste-sad.png', label: 'Triste' },
          { image: '/game-assets/spanish/cansado-tired.png', label: 'Cansado' },
          { image: '/game-assets/spanish/wave-hello.png', label: 'Hola' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/triste-sad.png', guideText: '¡Triste! That means SAD. It is okay to feel triste sometimes — every feeling is okay!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which one is TRISTE?', guideText: '¡Triste! Tap the sad face!',
        items: [
          { image: '/game-assets/spanish/triste-sad.png', label: 'Triste', correct: true },
          { image: '/game-assets/spanish/feliz-happy.png', label: 'Feliz' },
          { image: '/game-assets/spanish/cansado-tired.png', label: 'Cansado' },
          { image: '/game-assets/spanish/wave-goodbye.png', label: 'Adiós' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/cansado-tired.png', guideText: '¡Cansado! That means TIRED. When you are sleepy and need to rest, you are cansado!' },
      { type: 'yes-no', scenario: 'In Spanish, does FELIZ mean happy?', correctAnswer: true, image: '/game-assets/spanish/feliz-happy.png' },
      { type: 'family', guideText: 'Tonight, ask your family ¿Cómo estás? Then they can answer ¡feliz! or ¡cansado! or ¡triste! Share your feelings in Spanish!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Feelings Speaker', guideText: '¡Muy bien, {name}! You can share feelings in Spanish!' }
    ]
  },
  {
    id: 'sp-3-5-10',
    subject: 'Spanish',
    ageGroup: '3-5',
    band: 'Little Stars',
    guide: 'Luna',
    guideAnimal: 'Parrot',
    lessonNumber: 10,
    title: '¡Adiós, Amigos! Review',
    duration: '3-5 min',
    badge: 'Spanish Star',
    nextLesson: null,
    gameSequence: [
      { type: 'welcome', guideText: '¡Hola, {name}! Today we celebrate everything we learned in Spanish!' },
      { type: 'story', image: '/game-assets/spanish/spanish-celebration.png', guideText: '¡Wow! You learned so much! Greetings, numbers, colors, family, animals, food, body, weather, and feelings — all in Spanish!' },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which means HELLO?', guideText: '¡Hola! Tap the greeting!',
        items: [
          { image: '/game-assets/spanish/wave-hello.png', label: 'Hola', correct: true },
          { image: '/game-assets/spanish/perro-dog.png', label: 'Perro' },
          { image: '/game-assets/spanish/sol-sun.png', label: 'Sol' },
          { image: '/game-assets/spanish/agua-water.png', label: 'Agua' }
        ]
      },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which means MOM?', guideText: '¡Mamá! Tap mom!',
        items: [
          { image: '/game-assets/spanish/mama-figure.png', label: 'Mamá', correct: true },
          { image: '/game-assets/spanish/gato-cat.png', label: 'Gato' },
          { image: '/game-assets/spanish/lluvia-rain.png', label: 'Lluvia' },
          { image: '/game-assets/spanish/numero-tres.png', label: 'Tres' }
        ]
      },
      { type: 'tap-right', readOptions: true, hideLabels: false, instruction: 'Which means HAPPY?', guideText: '¡Feliz! Tap happy!',
        items: [
          { image: '/game-assets/spanish/feliz-happy.png', label: 'Feliz', correct: true },
          { image: '/game-assets/spanish/manzana-apple.png', label: 'Manzana' },
          { image: '/game-assets/spanish/manos-hands.png', label: 'Manos' },
          { image: '/game-assets/spanish/viento-wind.png', label: 'Viento' }
        ]
      },
      { type: 'teach', image: '/game-assets/spanish/spanish-celebration.png', guideText: '¡Bravo, {name}! You learned over 30 Spanish words! Now you can speak Spanish with your family and friends!' },
      { type: 'yes-no', scenario: 'Are you a Spanish speaker now?', correctAnswer: true, image: '/game-assets/spanish/spanish-celebration.png' },
      { type: 'family', guideText: 'Tonight, teach your family ONE Spanish word you learned! Pick your favorite. Now they can speak Spanish too!', image: '/game-assets/inner-world/family-circle.png' },
      { type: 'celebration', badge: 'Spanish Star', guideText: '¡Adiós, {name}! Eres una estrella de español! You are a Spanish star!' }
    ]
  }
];

export default spanishLittleStars;
