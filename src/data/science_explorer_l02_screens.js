// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L02 — Your Five Senses: Tools for Observing
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-2-LS1-1
// REWRITE v2 (May 2026): Grade 1 accessible, SIGHT / HEARING / TOUCH 3-bucket
// identification game tests matching observations to the right sense
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Last lesson, I told you scientists OBSERVE. But what do they observe WITH? Their FIVE SENSES! Eyes for sight! Ears for sound! Skin for touch! Nose for smell! Tongue for taste! Each one is a different superpower! Let's dive in!`,
          headline: `Your Five Senses: Tools for Observing`,
          subtitle: `The five superpowers that help you understand the world`,
          visual: `/explorer-assets/science/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Five Tools`,
          paragraphs: [
            `Your body has FIVE built-in tools for understanding the world! We call them SENSES!`,
            `SIGHT — using your eyes! HEARING — using your ears! TOUCH — using your skin! SMELL — using your nose! TASTE — using your tongue! Each sense picks up DIFFERENT information! Sight tells you colors and shapes. Sound tells you about movement and music. Touch tells you texture. Smell and taste tell you about chemicals. All five together = a complete picture!`,
          ],
          image: `/explorer-assets/science/l02-s1-tools.webp`,
          imageCaption: `Your five tools! Each sense picks up different information!`,
          vocab: [
            { word: `senses`,      definition: `Your five ways of taking in the world.`,
              audioPrompt: `Your senses are your 5 ways of taking in the world. Built right into your body! Eyes. Ears. Skin. Nose. Tongue. You use them every second. They're how your brain knows what's happening!` },
            { word: `tools`,       definition: `Things that help you do work.`,
              audioPrompt: `Tools are things that help you do work. Hammers. Pencils. Spoons. Your senses are tools too! They help your brain understand the world. With them, you can do anything — including science!` },
            { word: `information`, definition: `Facts your brain takes in.`,
              audioPrompt: `Information is facts your brain takes in. Every sense gathers different information. Eyes gather color information. Ears gather sound information. Your senses are like reporters!` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `SIGHT: Eyes That See`,
          paragraphs: [
            `Your EYES are amazing! They turn LIGHT into pictures inside your brain!`,
            `What can eyes notice? COLORS — red, blue, green, every color! SHAPES — round, square, pointy! SIZES — big, small! MOVEMENT — fast, slow, still! DISTANCE — close, far! Scientists use sight CONSTANTLY! Looking at cells through microscopes. Looking at stars through telescopes. Sight is often the FIRST sense scientists use!`,
          ],
          image: `/explorer-assets/science/l02-s2-sight.webp`,
          imageCaption: `Sight — eyes turn light into pictures!`,
          vocab: [
            { word: `sight`, definition: `Seeing with your eyes.`,
              audioPrompt: `Sight is seeing with your eyes. It's how you see colors, shapes, sizes, movement, and distance. Most people use sight more than any other sense. Scientists use it constantly. Looking. Watching!` },
            { word: `light`, definition: `What lets you see.`,
              audioPrompt: `Light is what lets you see. Your eyes catch light and turn it into pictures. Without light, eyes can't see. That's why dark rooms make it hard to see. Light is the food sight depends on!` },
            { word: `color`, definition: `Different shades you can see.`,
              audioPrompt: `Color is different shades you can see. Red. Blue. Green. Yellow. Purple. The world has SO many colors. Your eyes can see millions! Colors help scientists notice differences!` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `HEARING: Ears That Listen`,
          paragraphs: [
            `Your EARS catch SOUNDS! They're always listening — even when you sleep!`,
            `Sounds tell you SO much! The BUZZING of a bee! The CRASHING of waves! The RUSTLING of leaves! The WHISPER of a friend! Some sounds are LOUD (thunder, drums)! Some are SOFT (a butterfly's wings)! Some are HIGH (whistles, birds)! Some are LOW (rumbles, big dogs)! Scientists listen for animal calls, the sound of cracks in ice, even the hum of stars!`,
          ],
          image: `/explorer-assets/science/l02-s3-sound.webp`,
          imageCaption: `Hearing — ears catch sounds! Loud, soft, high, low!`,
          vocab: [
            { word: `hearing`,       definition: `Picking up sounds with your ears.`,
              audioPrompt: `Hearing is picking up sounds with your ears. Even while you sleep, your ears keep listening. Loud sounds wake you up. Ears are always gathering information about what's happening!` },
            { word: `sound`,         definition: `What you hear with your ears.`,
              audioPrompt: `Sound is what you hear with your ears. Buzzing of bees. Crashing of waves. Sounds are made when something moves and shakes the air. Every sound tells you something!` },
            { word: `loud and soft`, definition: `How big a sound is.`,
              audioPrompt: `Loud and soft is how big a sound is. Thunder is loud. A whisper is soft. A drum is loud. A butterfly's wings are very soft. Scientists notice the difference!` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `TOUCH: Skin That Feels`,
          paragraphs: [
            `Your SKIN is covered with tiny sensors! Every inch can FEEL things!`,
            `Touch tells you TEXTURE — soft, rough, smooth, bumpy! TEMPERATURE — hot, cold, warm, cool! PRESSURE — gentle, firm, hard! SHAPE — round, flat, sharp! Even tiny things — like a hair on your arm — you can feel! Scientists use touch carefully. They might feel a leaf to see if it's waxy. They might feel a rock to see if it's rough. Touch tells you what your eyes can miss!`,
          ],
          image: `/explorer-assets/science/l02-s4-touch.webp`,
          imageCaption: `Touch — skin feels texture, temperature, pressure!`,
          vocab: [
            { word: `touch`,       definition: `Feeling with your skin.`,
              audioPrompt: `Touch is feeling with your skin. Every part of your skin has tiny sensors. Some places are MORE sensitive — your fingertips, your lips. Touch tells your brain what you're touching!` },
            { word: `texture`,     definition: `How something feels.`,
              audioPrompt: `Texture is how something feels. Soft. Rough. Bumpy. Smooth. Silky. Scratchy. Slimy. Each surface has its own texture. Scientists notice textures to learn about materials!` },
            { word: `temperature`, definition: `How hot or cold something is.`,
              audioPrompt: `Temperature is how hot or cold something is. Your skin can tell. Hot stove? You feel it instantly. Cold ice? Same. Your skin gives you a rough idea right away!` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `SMELL & TASTE: Partner Senses`,
          paragraphs: [
            `SMELL and TASTE are PARTNER senses! They work together — both pick up CHEMICALS!`,
            `Your NOSE catches tiny chemicals floating in the air. That's how you smell flowers, food, smoke, the ocean! Your TONGUE catches chemicals in your mouth. That's how you taste sweet, salty, sour, bitter! (Did you know your tongue can ONLY taste 5 things? Sweet, salty, sour, bitter, and umami — savory!) Most of what we call "taste" is actually SMELL working with taste. Cover your nose and food tastes plain!`,
            `IMPORTANT: in science, NEVER taste something unless a grown-up says it's safe! Some things can hurt you. Scientists are very careful with taste!`,
          ],
          image: `/explorer-assets/science/l02-s5-smell-taste.webp`,
          imageCaption: `Smell and taste — partner senses! NEVER taste unless a grown-up says it's safe!`,
          vocab: [
            { word: `smell`,          definition: `Catching chemicals in the air with your nose.`,
              audioPrompt: `Smell is catching tiny chemicals floating in the air. Your nose has special sensors that grab them. Some smells warn you — smoke means fire. Some smells excite you — fresh cookies!` },
            { word: `taste`,          definition: `Catching chemicals in your mouth with your tongue.`,
              audioPrompt: `Taste is catching chemicals in your mouth with your tongue. Your tongue can taste sweet, salty, sour, bitter, and savory. Just 5! Never taste in science unless a grown-up says it's safe!` },
            { word: `partner senses`, definition: `Senses that work together.`,
              audioPrompt: `Partner senses are senses that work together. Smell and taste are partners. Both pick up chemicals. That's why food tastes plain when your nose is stuffy. Cool teamwork!` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Five Working Together`,
          paragraphs: [
            `The MAGIC happens when you use all 5 senses TOGETHER!`,
            `Imagine eating a piece of pizza! SIGHT sees the colors — red sauce, white cheese, brown crust! HEARING hears the crunch when you bite! TOUCH feels it warm and a little greasy! SMELL fills with tomato and herbs! TASTE explodes with salty and savory! Five senses = ONE experience! Scientists try to use ALL FIVE when they observe. The more senses, the more they learn!`,
          ],
          image: `/explorer-assets/science/l02-s6-all-together.webp`,
          imageCaption: `Five senses together = one full experience!`,
          vocab: [
            { word: `together`,   definition: `Working as a team.`,
              audioPrompt: `Together means working as a team. Your senses work together. They never act alone. When you eat a snack, all 5 senses join in. Your brain combines all the information for one full experience!` },
            { word: `experience`, definition: `Living through something.`,
              audioPrompt: `An experience is living through something. Your senses give you experiences. Tasting favorite food. Smelling rain. Hearing waves. Feeling sand. Together they make memories!` },
            { word: `more senses more learning`, definition: `More senses = more information.`,
              audioPrompt: `More senses, more learning! The more senses you use, the more you learn. Scientists try to use them all when they can. Sight alone tells you a little. All 5 together tell you a LOT!` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things to observe. Drag each one — which sense do you USE? SIGHT (eyes!), HEARING (ears!), or TOUCH (skin!)?`,
          buckets: [
            { id: `sight`,   label: `👀 SIGHT`,   color: `#34D399` },
            { id: `hearing`, label: `👂 HEARING`, color: `#FBBF24` },
            { id: `touch`,   label: `🖐️ TOUCH`,   color: `#A78BFA` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `What COLOR is the apple — red, green, or yellow?`,
              matchPhrase: `Yes! SIGHT! Colors come through your eyes. Sight catches color, shape, and size!`,
              correctMatch: `sight` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Is the music LOUD or QUIET?`,
              matchPhrase: `Right! HEARING! Loud or quiet — your ears catch sound. Hearing is your sound sense!`,
              correctMatch: `hearing` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Is the rock SMOOTH or BUMPY?`,
              matchPhrase: `Yes! TOUCH! Smooth or bumpy — that's texture. Your skin feels it. Touch is your texture sense!`,
              correctMatch: `touch` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `Is a bird BIG or SMALL?`,
              matchPhrase: `Right! SIGHT! Big or small — that's size. Your eyes see it. Sight catches sizes too!`,
              correctMatch: `sight` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `How many SENSES do you have?`,
              options: [`Three`, `Five — sight, hearing, touch, smell, taste`, `Ten`, `Just one`],
              correctIndex: 1,
              explanation: `Five! Sight (eyes), hearing (ears), touch (skin), smell (nose), taste (tongue)!` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `What does the sense of SIGHT tell you about?`,
              options: [`Colors, shapes, sizes, movement`, `Just colors`, `Only big things`, `Nothing useful`],
              correctIndex: 0,
              explanation: `Sight tells you SO much — colors, shapes, sizes, movement, distance!` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `Your sense of TOUCH detects:`,
              options: [`Only soft things`, `Texture, temperature, pressure, and shape`, `Only hot things`, `Just one thing`],
              correctIndex: 1,
              explanation: `Touch detects texture, temperature, pressure, and shape. Your skin has sensors all over!` },
            { id: `l02-q4`, format: `true-false`,
              question: `Smell and taste are PARTNER senses — they work together because both pick up chemicals.`,
              correctAnswer: true,
              explanation: `True! Smell catches chemicals in the air. Taste catches them in your mouth. Together they create flavor!` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `Scientists try to use ___ their senses when they observe — the more, the better.`,
              options: [`all`, `none of`, `one of`, `none`],
              correctIndex: 0,
              explanation: `All! Scientists use all their senses when they can. The more senses, the more you learn!` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `In science, when should you TASTE something to identify it?`,
              options: [`Always — taste everything`, `Only when a grown-up says it's safe`, `Only on Tuesdays`, `Never`],
              correctIndex: 1,
              explanation: `Only when a grown-up says it's safe! Some things can hurt you. Safety first, always!` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Different jobs depend on different senses! Musicians use HEARING all day! Chefs use TASTE and SMELL! Surgeons use TOUCH carefully! Painters use SIGHT for color! Perfume makers use SMELL! People who are blind develop super-sharp HEARING and TOUCH. People who are deaf develop super-sharp SIGHT. Your brain adjusts to make the most of what you have!`,
          familyAdventure: `Play "GUESS THE SENSE"! One person closes their eyes. Another person brings an object close (a fruit, a leaf, a toy). The blindfolded person uses TOUCH, SMELL, and HEARING (not sight!) to guess what it is. Take turns! Notice how much you can figure out without using sight at all!`,
          creativePrompt: `Make a SENSES JOURNAL page about ONE thing you love! Maybe your favorite snack, your pet, or a flower! Write what you SEE about it. What you HEAR. What you FEEL when you touch it. What it SMELLS like. If safe, what it TASTES like! For a 3-sentence floor: pick 3 senses and write one sentence each. For a 5-sentence stretch: use all 5 senses, one sentence each!`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You now know your FIVE SENSES — sight, hearing, touch, smell, taste! You know each one gathers different information. You know they work BEST together! And NEVER taste things in science unless a grown-up says it's safe! You're a real observer now! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L02] Loaded: "Your Five Senses" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
