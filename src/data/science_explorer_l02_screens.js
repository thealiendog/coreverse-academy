// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L02 — Your Five Senses: Tools for Observing
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-2-LS1-1 (use observations to describe patterns)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L02 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-02`,
      title:     `Your Five Senses: Tools for Observing`,
      duration:  12,
      xpReward:  50,
      badge:     `senses-explorer`,
      badgeName: `Senses Explorer`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! It's Cosmo. Last lesson, I told you scientists OBSERVE. But what do they observe WITH? Their FIVE SENSES! Eyes for sight. Ears for sound. Skin for touch. Nose for smell. Tongue for taste. Each one is like a different superpower for learning about the world. Today we'll explore each one. Let's dive in!`,
          headline: `Your Five Senses: Tools for Observing`,
          subtitle: `The five superpowers that help you understand everything around you`,
          visual: `/explorer-assets/science/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Five Tools`,
          paragraphs: [
            `Your body has FIVE built-in tools for understanding the world. We call them SENSES.`,
            `SIGHT — using your eyes. HEARING — using your ears. TOUCH — using your skin. SMELL — using your nose. TASTE — using your tongue. Each sense picks up DIFFERENT information. Sight tells you colors and shapes. Sound tells you about movement and music. Touch tells you texture and temperature. Smell and taste tell you about chemicals. All five together = a complete picture.`,
          ],
          image: `/explorer-assets/science/l02-s1-tools.webp`,
          imageCaption: `Your five tools. Each sense picks up different information. Together = a complete picture.`,
          vocab: [
            { word: `senses`,         definition: `Your five ways of taking in the world — sight, hearing, touch, smell, taste.`,
              audioPrompt: `Your senses, {name}, are your five ways of taking in the world. Built right into your body. Eyes for sight. Ears for hearing. Skin for touch. Nose for smell. Tongue for taste. You use them every second of every day — even right now. They're how your brain knows what's happening outside.` },
            { word: `tools`,          definition: `Things that help you do work. Your senses are TOOLS for understanding the world.`,
              audioPrompt: `Tools, {name}, are things that help you do work. Hammers. Pencils. Spoons. Your senses are tools too. They help your brain understand the world. Without them, you'd know NOTHING about what's around you. With them, you can do anything — including science.` },
            { word: `information`,    definition: `Facts your brain takes in. Senses gather INFORMATION about the world.`,
              audioPrompt: `Information, {name}, is facts your brain takes in. Every sense gathers different information. Eyes gather color information. Ears gather sound information. Skin gathers texture information. Your senses are like reporters — they bring news to your brain from the world outside.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `SIGHT: Eyes That See`,
          paragraphs: [
            `Your EYES are amazing. They turn LIGHT into pictures inside your brain.`,
            `What can eyes notice? COLORS — red, blue, green, every color. SHAPES — round, square, pointy. SIZES — big, small, huge, tiny. MOVEMENT — fast, slow, still. DISTANCE — close, far. Scientists use sight CONSTANTLY. Looking at cells through microscopes. Looking at stars through telescopes. Looking at animals in the wild. Sight is often the FIRST sense scientists use.`,
          ],
          image: `/explorer-assets/science/l02-s2-sight.webp`,
          imageCaption: `Sight — eyes turn light into pictures. Colors, shapes, sizes, movement, distance.`,
          vocab: [
            { word: `sight`,          definition: `Seeing with your eyes. Sight tells you colors, shapes, sizes, and more.`,
              audioPrompt: `Sight, {name}, is seeing with your eyes. It's how you see colors, shapes, sizes, movement, and distance. Most people use sight more than any other sense. Scientists use it constantly. Looking. Watching. Observing. Sight is usually the first sense to gather information.` },
            { word: `light`,          definition: `What lets you see. Eyes turn LIGHT into pictures in your brain.`,
              audioPrompt: `Light, {name}, is what lets you see. Your eyes catch light and turn it into pictures your brain can understand. Without light, eyes can't see. That's why dark rooms make it hard. Light is the food sight depends on.` },
            { word: `color`,          definition: `Different shades you can see. Red, blue, green — eyes notice COLORS.`,
              audioPrompt: `Color, {name}, is different shades you can see. Red. Blue. Green. Yellow. Purple. Brown. Pink. Black. White. The world has SO many colors. Your eyes can see millions. Colors help scientists notice differences. A green leaf vs a yellow one. A blue sky vs a gray one. Colors are clues.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `HEARING: Ears That Listen`,
          paragraphs: [
            `Your EARS catch SOUNDS. They're always listening — even when you sleep.`,
            `Sounds tell you SO much. The BUZZING of a bee. The CRASHING of waves. The RUSTLING of leaves. The WHISPER of a friend. Some sounds are LOUD (thunder, drums). Some are SOFT (a butterfly's wings, your own breathing). Some are HIGH (whistles, birds). Some are LOW (rumbles, big dogs). Scientists listen for animal calls, the sound of cracks in ice, even the hum of stars.`,
          ],
          image: `/explorer-assets/science/l02-s3-sound.webp`,
          imageCaption: `Hearing — ears catch sounds. Loud, soft, high, low. Sound tells you what's happening.`,
          vocab: [
            { word: `hearing`,        definition: `Picking up sounds with your ears. Ears are always LISTENING.`,
              audioPrompt: `Hearing, {name}, is picking up sounds with your ears. Even while you sleep, your ears keep listening. Loud sounds wake you up. That's why ears never really 'turn off.' They're always gathering information about what's happening around you.` },
            { word: `sound`,          definition: `What you hear with your ears. Buzzing, crashing, whispering — all SOUNDS.`,
              audioPrompt: `Sound, {name}, is what you hear with your ears. Buzzing of bees. Crashing of waves. Whispering of leaves. Sounds are made when something moves and shakes the air. Every sound tells you something. About what's there. About what's happening. About what's coming.` },
            { word: `loud and soft`,  definition: `How big a sound is. Loud = big. Soft = small.`,
              audioPrompt: `Loud and soft, {name}, is how big a sound is. Thunder is loud. A whisper is soft. A drum is loud. A butterfly's wings are very soft. Scientists notice the difference. Loud sounds usually mean something BIG is happening. Soft sounds mean something small or far away.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `TOUCH: Skin That Feels`,
          paragraphs: [
            `Your SKIN is covered with tiny sensors. Every inch can FEEL things.`,
            `Touch tells you TEXTURE — soft, rough, smooth, bumpy. TEMPERATURE — hot, cold, warm, cool. PRESSURE — gentle, firm, hard. SHAPE — round, flat, sharp. Even tiny things — like a hair on your arm — you can feel. Scientists use touch carefully. They might feel a leaf to see if it's waxy. They might feel a rock to see if it's rough or smooth. Touch tells you what your eyes can miss.`,
          ],
          image: `/explorer-assets/science/l02-s4-touch.webp`,
          imageCaption: `Touch — skin feels texture, temperature, pressure, shape. Tells you what eyes can miss.`,
          vocab: [
            { word: `touch`,          definition: `Feeling with your skin. Touch tells you texture, temperature, pressure.`,
              audioPrompt: `Touch, {name}, is feeling with your skin. Every part of your skin has tiny sensors. Some places are MORE sensitive — your fingertips, your lips, your face. Some are less — your back, your elbows. Touch tells your brain what you're touching without even looking. Pretty amazing.` },
            { word: `texture`,        definition: `How something FEELS. Soft, rough, bumpy, smooth — all textures.`,
              audioPrompt: `Texture, {name}, is how something feels. Soft. Rough. Bumpy. Smooth. Silky. Scratchy. Slimy. Sticky. Each surface in the world has its own texture. Scientists notice textures to learn about materials. A leaf can be waxy. A rock can be jagged. Touch detects them all.` },
            { word: `temperature`,    definition: `How hot or cold something is. Touch detects TEMPERATURE.`,
              audioPrompt: `Temperature, {name}, is how hot or cold something is. Your skin can tell. Hot stove? You feel it instantly. Cold ice? Same. Warm bath? Your skin checks before you climb in. Scientists measure temperature in degrees, but your skin gives you a rough idea right away.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `SMELL & TASTE: Partner Senses`,
          paragraphs: [
            `SMELL and TASTE are PARTNER senses. They work together — both pick up CHEMICALS.`,
            `Your NOSE catches tiny chemicals floating in the air. That's how you smell flowers, food, smoke, the ocean. Your TONGUE catches chemicals in your mouth. That's how you taste sweet, salty, sour, bitter. (Did you know your tongue can ONLY taste five things? Sweet, salty, sour, bitter, and umami — savory!) But here's a secret — most of what we call "taste" is actually SMELL working with taste. Cover your nose and food tastes plain!`,
            `IMPORTANT: in science, NEVER taste something unless a grown-up says it's safe. Some things can hurt you. Scientists use smell — but they are very careful with taste.`,
          ],
          image: `/explorer-assets/science/l02-s5-smell-taste.webp`,
          imageCaption: `Smell and taste — partner senses. Both pick up chemicals. NEVER taste unless a grown-up says it's safe.`,
          vocab: [
            { word: `smell`,          definition: `Catching chemicals in the air with your nose. Flowers, food, smoke — all smells.`,
              audioPrompt: `Smell, {name}, is catching tiny chemicals floating in the air. Your nose has special sensors that grab them and tell your brain what's there. Some smells warn you — smoke means fire. Some smells excite you — fresh cookies. Some smells calm you — your home. Smell is a powerful sense for memory too.` },
            { word: `taste`,          definition: `Catching chemicals in your mouth with your tongue. Sweet, salty, sour, bitter.`,
              audioPrompt: `Taste, {name}, is catching chemicals in your mouth with your tongue. Your tongue can taste sweet, salty, sour, bitter, and savory. That's it — just five! But combined with smell, it feels like millions of flavors. Important: never taste things in science unless a grown-up says it's safe. Some things hurt you.` },
            { word: `partner senses`, definition: `Senses that work together. Smell and taste are PARTNER senses.`,
              audioPrompt: `Partner senses, {name}, are senses that work together. Smell and taste are partners. Both pick up chemicals. Both work together to give you flavor. That's why food tastes plain when your nose is stuffy. Most of what you call 'taste' is actually 'smell' helping out. Cool teamwork.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Five Working Together`,
          paragraphs: [
            `The MAGIC happens when you use all five senses TOGETHER.`,
            `Imagine eating a piece of pizza. SIGHT sees the colors — red sauce, white cheese, brown crust. HEARING hears the crunch when you bite it. TOUCH feels it warm and a little greasy. SMELL fills with tomato and herbs. TASTE explodes with salty and savory. Five senses = ONE experience. That's how your brain understands the world. Scientists try to use ALL FIVE when they observe. The more senses, the more they learn.`,
          ],
          image: `/explorer-assets/science/l02-s6-all-together.webp`,
          imageCaption: `Five senses together = one full experience. Scientists use them all. The more, the more they learn.`,
          vocab: [
            { word: `together`,       definition: `Working as a team. Your senses work TOGETHER to understand the world.`,
              audioPrompt: `Together, {name}, means working as a team. Your senses work together. They never act alone. When you eat a snack, all five senses join in. Your brain takes ALL the information and combines it. That's how you get one full experience — not five separate ones.` },
            { word: `experience`,     definition: `Living through something. Senses give you EXPERIENCES of the world.`,
              audioPrompt: `Experience, {name}, is living through something. Your senses give you experiences. Tasting your favorite food. Smelling rain. Hearing waves. Feeling sand. Seeing fireworks. Each experience uses multiple senses. Together they make memories. Senses are how the world gets INTO you.` },
            { word: `more senses more learning`, definition: `The more SENSES you use to observe, the more you LEARN.`,
              audioPrompt: `More senses, more learning, {name}. The more senses you use when observing, the more you learn. Scientists try to use them all when they can. Sight alone tells you a little. All five together tell you a LOT. That's a rule worth remembering. Whenever you observe — use more senses.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `Each sense gathers DIFFERENT information — sight sees colors, hearing catches sounds, etc.`,
              matchPhrase: `Yes! Each sense is its own superpower. Sight gathers colors and shapes. Hearing gathers sounds. Touch gathers textures. Smell and taste gather chemicals.`,
              correctMatch: `fact` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Using ALL five senses together gives you a more complete picture than just one.`,
              matchPhrase: `True! Five senses together = one full experience. Scientists try to use them all. The more senses, the more information, the more you learn.`,
              correctMatch: `fact` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Scientists should only use SIGHT — the other four senses don't help.`,
              matchPhrase: `Not at all! All five senses give different information. Hearing detects what eyes can't see (like an animal hiding). Touch reveals textures. Each sense matters.`,
              correctMatch: `myth` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `In science, it's totally fine to TASTE anything you find — rocks, dirt, mystery liquids.`,
              matchPhrase: `Definitely not! Never taste anything in science unless a grown-up says it's safe. Some things can hurt you. Scientists are very careful with taste.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `How many SENSES do you have?`,
              options: [`Three`, `Five — sight, hearing, touch, smell, taste`, `Ten`, `Just one`],
              correctIndex: 1,
              explanation: `Five! Sight (eyes), hearing (ears), touch (skin), smell (nose), and taste (tongue). Each gathers different information about the world.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `What does the sense of SIGHT tell you about?`,
              options: [`Colors, shapes, sizes, movement`, `Just colors`, `Only big things`, `Nothing useful`],
              correctIndex: 0,
              explanation: `Sight tells you SO much — colors, shapes, sizes, movement, distance. Eyes turn light into pictures inside your brain.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `Your sense of TOUCH detects:`,
              options: [`Only soft things`, `Texture, temperature, pressure, and shape`, `Only hot things`, `Only one thing at a time`],
              correctIndex: 1,
              explanation: `Touch detects texture (soft/rough), temperature (hot/cold), pressure (gentle/firm), and shape. Your skin has sensors all over.` },
            { id: `l02-q4`, format: `true-false`,
              question: `Smell and taste are PARTNER senses — they work together because both pick up chemicals.`,
              correctAnswer: true,
              explanation: `True! Smell catches chemicals in the air. Taste catches them in your mouth. Together they create what we call flavor. That's why food tastes plain when your nose is stuffy!` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `Scientists try to use ___ their senses when they observe — the more, the better.`,
              options: [`all`, `none of`, `one of`, `none`],
              correctIndex: 0,
              explanation: `All! Scientists use all their senses when they can. The more senses you use, the more information you gather, the more you learn.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `In science, when should you TASTE something to identify it?`,
              options: [`Always — taste everything`, `Only when a grown-up says it's safe`, `Only on Tuesdays`, `Never, never, never`],
              correctIndex: 1,
              explanation: `Only when a grown-up says it's safe! Some things can hurt you. Scientists are very careful with taste. Safety first, always.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Different jobs depend on different senses. Musicians use HEARING all day. Chefs use TASTE and SMELL. Surgeons use TOUCH carefully. Painters use SIGHT for color. Perfume makers use SMELL. People who are blind develop super-sharp HEARING and TOUCH. People who are deaf develop super-sharp SIGHT. Senses are amazing — and your brain adjusts to make the most of what you have.`,
          familyAdventure: `Play "GUESS THE SENSE." One person closes their eyes. Another person brings an object close (a fruit, a leaf, a toy). The blindfolded person uses TOUCH, SMELL, and HEARING (not sight, not taste) to guess what it is. Take turns. Notice how much you can figure out without using sight at all. Your other senses are powerful.`,
          creativePrompt: `Make a SENSES JOURNAL page about ONE thing you love. Maybe your favorite snack, your pet, or a flower in the yard. Write what you SEE about it. What you HEAR about it. What you FEEL when you touch it. What it SMELLS like. If safe, what it TASTES like. Five senses, one page. See how much you can capture.`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You now know your FIVE SENSES — sight, hearing, touch, smell, taste. You know each one gathers different information. You know they work BEST together. You know never to taste things in science unless a grown-up says it's safe. You're a real observer now. The whole world is waiting for you to notice it. See you in the next lesson!`,
          badge: `senses-explorer`,
          badgeName: `Senses Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L02] Loaded: "Your Five Senses" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
