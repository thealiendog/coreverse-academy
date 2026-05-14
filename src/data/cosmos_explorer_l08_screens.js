// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 8
// "Sound: Vibrations We Can Hear"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-08',
      title:     `Sound: Vibrations We Can Hear`,
      duration:  12,
      xpReward:  50,
      badge:     'sound-scientist',
      badgeName: `Sound Scientist`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `When a guitar string vibrates, it pushes the air around it. Those air vibrations travel to your ear, your eardrum vibrates, and somehow your brain turns all of that into the experience of music. Sound is one of the most beautiful and strange things in the universe.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Sound?`,
          paragraphs: [
            `Sound is a wave of vibrations moving through a medium — usually air, but also water, wood, or metal.`,
            `When something vibrates, it pushes the air molecules around it back and forth. That push spreads outward as a wave of sound.`,
          ],
          image:        '/explorer-assets/cosmos/l08-s1-sound-waves.png',
          imageCaption: `Sound — waves of vibration travelling through air, water, or solid materials`,
          vocab: [
            { word: 'sound',  definition: `A wave of vibrations moving through a medium like air, water, or metal. Sound is how your ears hear the world.`, audioPrompt: `Sound — a wave of vibrations moving through a medium like air, water, or metal. Sound is how your ears hear the world.` },
            { word: 'medium', definition: `The material that sound travels through — air, water, wood, or metal all work as a medium for sound.`, audioPrompt: `Medium — the material that sound travels through. Air, water, wood, or metal all work as a medium for sound.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Everything That Vibrates`,
          paragraphs: [
            `Everything you've ever heard was caused by something vibrating.`,
            `A voice is vibrating vocal cords. Thunder is vibrating air. A drumbeat is a vibrating drum skin. Sound is the universe communicating through vibration.`,
          ],
          image:        '/explorer-assets/cosmos/l08-s2-everything-vibrates.png',
          imageCaption: `Every sound starts with something vibrating — vocal cords, drum skins, guitar strings`,
          vocab: [
            { word: 'vibration',   definition: `A rapid back-and-forth movement. Vibration is the source of every sound — voices, drums, instruments, thunder all vibrate.`, audioPrompt: `Vibration — a rapid back-and-forth movement. Vibration is the source of every sound. Voices, drums, instruments, thunder all vibrate.` },
            { word: 'vocal cords', definition: `Tiny flaps of tissue in your throat. When air passes through them, they vibrate — that's how your voice works.`, audioPrompt: `Vocal cords — tiny flaps of tissue in your throat. When air passes through them, they vibrate. That's how your voice works.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Sound Needs Air`,
          paragraphs: [
            `Sound needs a medium to travel through — it cannot travel through empty space. This is why space is completely silent.`,
            `There are no air molecules in space for vibrations to push. No matter how enormous an explosion happens out there, no one can hear it.`,
          ],
          image:        '/explorer-assets/cosmos/l08-s3-silent-space.png',
          imageCaption: `Space is completely silent — no air molecules means no sound can travel`,
          vocab: [
            { word: 'vacuum',   definition: `A space completely empty of matter — like outer space. Sound cannot travel through a vacuum because there's nothing to vibrate.`, audioPrompt: `Vacuum — a space completely empty of matter, like outer space. Sound cannot travel through a vacuum because there's nothing to vibrate.` },
            { word: 'molecule', definition: `Tiny particles of matter that air is made of. Sound waves work by pushing molecules — no molecules means no sound.`, audioPrompt: `Molecule — tiny particles of matter that air is made of. Sound waves work by pushing molecules. No molecules means no sound.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Faster Through Water`,
          paragraphs: [
            `Sound travels about 767 miles per hour through air — far slower than light. That's why you see lightning before you hear thunder.`,
            `But sound is even faster through water and solids. Whales use this — low-frequency calls travel so well through ocean water that whales hear each other thousands of miles away.`,
          ],
          image:        '/explorer-assets/cosmos/l08-s4-whale-song.png',
          imageCaption: `Whales sing across thousands of miles — sound travels four times faster underwater than through air`,
          vocab: [
            { word: 'speed of sound', definition: `About 767 miles per hour through air — much slower than light. That's why you see lightning before you hear thunder.`, audioPrompt: `Speed of sound — about 767 miles per hour through air, much slower than light. That's why you see lightning before you hear thunder.` },
            { word: 'low-frequency',  definition: `Slow vibrations that create deep sounds. Low-frequency sound travels far through water — whales use it to communicate across oceans.`, audioPrompt: `Low-frequency — slow vibrations that create deep sounds. Low-frequency sound travels far through water. Whales use it to communicate across oceans.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Volume and Pitch`,
          paragraphs: [
            `Sound has two key properties. Volume is how loud or quiet — bigger vibrations create louder sounds. Volume is measured in decibels (dB).`,
            `Pitch is how high or low. Fast vibrations make high-pitched sounds (a whistle). Slow vibrations make low-pitched sounds (a tuba).`,
          ],
          image:        '/explorer-assets/cosmos/l08-s5-volume-pitch.png',
          imageCaption: `Volume = how loud. Pitch = how high or low. Two different properties of every sound.`,
          vocab: [
            { word: 'decibel', definition: `The unit used to measure how loud a sound is. A whisper is 30 decibels, a lawnmower 90, a jet engine 140.`, audioPrompt: `Decibel — the unit used to measure how loud a sound is. A whisper is 30 decibels, a lawnmower 90, a jet engine 140.` },
            { word: 'pitch',   definition: `How high or low a sound is. Pitch depends on how fast the vibrations happen — fast = high, slow = low.`, audioPrompt: `Pitch — how high or low a sound is. Pitch depends on how fast the vibrations happen. Fast equals high, slow equals low.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Echoes and Echolocation`,
          paragraphs: [
            `When sound waves hit a hard surface, they bounce back — that's an echo. Shouting in a canyon gives clear echoes because the walls reflect the sound.`,
            `Bats and dolphins use echoes to "see." They send out sound pulses and listen for them bouncing back, building a picture of their surroundings.`,
          ],
          image:        '/explorer-assets/cosmos/l08-s6-echolocation.png',
          imageCaption: `Bats and dolphins "see" using echoes — sending pulses and listening for them to bounce back`,
          vocab: [
            { word: 'echo',         definition: `A sound that bounces back off a hard surface. Shouting in a canyon or empty room creates echoes.`, audioPrompt: `Echo — a sound that bounces back off a hard surface. Shouting in a canyon or empty room creates echoes.` },
            { word: 'echolocation', definition: `Using echoes to "see." Bats and dolphins send out sound pulses and use the echoes that bounce back to find their way.`, audioPrompt: `Echolocation — using echoes to see. Bats and dolphins send out sound pulses and use the echoes that bounce back to find their way.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it makes a high pitch or a low pitch!`,
          guideText:     `Remember: pitch depends on frequency — how fast vibrations happen. Fast vibrations make high-pitched sounds. Slow vibrations make low-pitched sounds. Can you sort these four instruments into the right pitch?`,
          columnHeaders: [`The Sound`, `High or Low?`],
          items: [
            { image: 'l08-game-whistle.png',    label: `A whistle producing fast vibrations and a sharp, piercing sound.`,                           correctMatch: 'high', objectPosition: 'center 50%', matchPhrase: `High pitch! A whistle forces air through a tiny opening very fast, creating rapid vibrations and a sharp, piercing sound. The faster the vibrations, the higher the pitch — and a whistle vibrates very, very fast.` },
            { image: 'l08-game-bass-drum.png',  label: `A bass drum producing slow, heavy vibrations and a deep booming sound.`,                     correctMatch: 'low',  objectPosition: 'center 50%', matchPhrase: `Low pitch! A bass drum's large skin vibrates slowly and powerfully, creating deep, low-frequency sound waves you can feel as well as hear. The slower the vibration, the lower the pitch — and a bass drum vibrates much more slowly than a whistle.` },
            { image: 'l08-game-violin.png',     label: `A violin string vibrating very quickly, making a thin, bright sound.`,                       correctMatch: 'high', objectPosition: 'center 50%', matchPhrase: `High pitch! Violin strings are thin and taut — they vibrate very quickly, producing high-frequency sound waves and a bright, singing tone. The thinner and tighter the string, the faster it vibrates, and the higher the pitch.` },
            { image: 'l08-game-tuba.png',       label: `A tuba pushing slow air vibrations through a long coiled tube, producing a deep rich sound.`, correctMatch: 'low',  objectPosition: 'center 50%', matchPhrase: `Low pitch! A tuba is one of the lowest-pitched instruments in the orchestra. Air vibrates slowly through its enormous coiled tube, producing deep, powerful sound waves with a very low frequency — the rumbling foundation of the brass section.` },
          ],
          buckets: [
            { id: 'high', label: `🎵 High Pitch`, color: '#818CF8' },
            { id: 'low',  label: `🥁 Low Pitch`,  color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about sound. Answer all 6 questions to earn your Sound Scientist badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is sound?`,
              options:      [`A type of light wave`, `Waves of vibration traveling through a medium like air or water`, `Electrical signals in the air`, `Pressure from the atmosphere`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why is space completely silent?`,
              options:      [`Sound travels too slowly to reach us from space`, `Sound needs a medium to travel through, and space is empty`, `The stars absorb all the sound`, `Space is too cold for sound to form`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What determines the pitch of a sound?`,
              options:      [`How loud the sound is`, `How far the sound travels`, `The frequency — how fast the vibrations are`, `The temperature of the air`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Sound travels faster through solids than through air.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The loudness of a sound is measured in units called ___.`,
              options:      [`decibels`, `hertz`, `watts`, `volts`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is an echo?`,
              options:      [`Sound speeding up as it travels`, `Sound vibrations dying out in open air`, `Sound waves bouncing back off a hard surface`, `A very loud sound`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try the string telephone at home — and next time there's a storm, count the seconds to the thunder!`,
          familyAdventure: `On a stormy night (safely from indoors), count the seconds between a lightning flash and the thunder. Divide by 5 to get the distance in miles. Lightning 3 seconds before thunder means the storm is about 0.6 miles away. Track it over several bolts — is the storm getting closer or farther?`,
          creativePrompt:  `Make a classic string telephone with two paper cups and a long piece of string. Poke a small hole in the bottom of each cup, thread the string through, and tie a knot to hold it. Stretch the string tight between you and a friend. Speak into one cup while they hold the other to their ear. The string vibrates and carries your voice!`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'sound-scientist',
          badgeName: `Sound Scientist`,
          message:   `Brilliant work, {name}! You now know that every sound you've ever heard was a wave of vibrations travelling through the air to reach your ears — and that space, with no air to carry sound, is completely silent. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l08_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L08] Loaded: "Sound: Vibrations We Can Hear" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l08-s1-sound-waves.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-s2-everything-vibrates.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-s3-silent-space.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-s4-whale-song.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-s5-volume-pitch.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-s6-echolocation.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L08] sound-waves: ${r1.ok}, everything-vibrates: ${r2.ok}, silent-space: ${r3.ok}, whale-song: ${r4.ok}, volume-pitch: ${r5.ok}, echolocation: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L08] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l08_screens;
