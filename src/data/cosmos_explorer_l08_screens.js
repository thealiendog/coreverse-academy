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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Sound?`,
          paragraphs: [
            `Sound is a wave of vibrations moving through a medium — usually air, but also water, wood, metal, or almost any material. When something vibrates — a guitar string, a speaker, your vocal cords — it pushes the air molecules around it back and forth.`,
            `That push creates a chain reaction: one layer of air bumps into the next, passing the energy along as a wave of compressed and stretched air travelling outward in all directions from the source. When those waves reach your ear, they make your eardrum vibrate — and your brain turns that vibration into the experience of sound.`,
            `Everything you've ever heard was caused by something vibrating. A voice is vibrating vocal cords. Thunder is vibrating air. A drumbeat is a vibrating drum skin. Sound is the universe communicating through vibration.`,
          ],
          image:        '/explorer-assets/cosmos/l08-magazine-what-is-sound.png',
          imageCaption: `Sound — waves of vibration travelling through air, water, and solids to reach your ears`,
          vocab: [
            { word: 'sound wave',  definition: `A wave of vibrations moving through a medium — sound waves are created when something vibrates and pushes air molecules back and forth, spreading energy outward.`, audioPrompt: `Sound wave — a wave of vibrations moving through a medium. Sound waves are created when something vibrates and pushes air molecules back and forth, spreading energy outward.` },
            { word: 'vibration',   definition: `A rapid back-and-forth movement — vibration is the source of all sound. When objects vibrate, they create sound waves that travel through the surrounding medium.`,   audioPrompt: `Vibration — a rapid back-and-forth movement. Vibration is the source of all sound. When objects vibrate, they create sound waves that travel through the surrounding medium.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Sound Travels`,
          paragraphs: [
            `Sound needs a medium to travel through — it cannot travel through empty space. This is why space is completely silent. There are no air molecules for vibrations to push, so sound simply cannot exist there. No matter how enormous an explosion happens in space, no one can hear it.`,
            `Sound travels at about 767 miles per hour through air — far slower than light at 186,000 miles per second. That's why you see lightning before you hear thunder. The light arrives almost instantly. The sound takes seconds to reach you.`,
            `Sound actually travels faster through liquids than through air, and fastest through solids. In water, sound travels about four times faster than in air. This is how whales communicate — low-frequency sound travels so efficiently through ocean water that whales can hear each other across thousands of miles.`,
          ],
          image:        '/explorer-assets/cosmos/l08-magazine-how-sound-travels.png',
          imageCaption: `Sound travelling through air, water, and solids — faster in denser materials, silent in space`,
          vocab: [
            { word: 'medium',  definition: `The material through which sound travels — sound needs a medium like air, water, or a solid to move through. It cannot travel through the vacuum of empty space.`,                   audioPrompt: `Medium — the material through which sound travels. Sound needs a medium like air, water, or a solid to move through. It cannot travel through the vacuum of empty space.` },
            { word: 'vacuum',  definition: `A space completely empty of matter — sound cannot travel through a vacuum because there are no molecules to carry the vibrations. This is why space is completely silent.`, audioPrompt: `Vacuum — a space completely empty of matter. Sound cannot travel through a vacuum because there are no molecules to carry the vibrations. This is why space is completely silent.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Volume and Pitch`,
          paragraphs: [
            `Sound has two key properties: volume and pitch. Volume is how loud or quiet a sound is, and it depends on the energy of the vibration — bigger vibrations create louder sounds. Volume is measured in decibels (dB).`,
            `A whisper is about 30 decibels. A normal conversation is about 60. A lawnmower is about 90. A jet engine is about 140 decibels — loud enough to damage your hearing instantly with prolonged exposure. Every 10 decibels is roughly a doubling of perceived loudness.`,
            `Pitch is how high or low a sound is, and it depends on frequency — how fast the vibrations happen. Fast vibrations create a high pitch (like a whistle or a violin). Slow vibrations create a low pitch (like a bass drum or a tuba). Your ear is extraordinarily sensitive to the difference.`,
          ],
          image:        '/explorer-assets/cosmos/l08-magazine-volume-pitch.png',
          imageCaption: `Volume and pitch — how loud and how high a sound is, measured in decibels and frequency`,
          vocab: [
            { word: 'decibel',   definition: `The unit used to measure the volume (loudness) of a sound — a whisper is about 30 decibels, a lawnmower 90, and a jet engine 140 decibels.`,                              audioPrompt: `Decibel — the unit used to measure the volume of a sound. A whisper is about 30 decibels, a lawnmower 90, and a jet engine 140 decibels.` },
            { word: 'frequency', definition: `How fast vibrations happen — high-frequency vibrations create high-pitched sounds like a whistle, and low-frequency vibrations create deep sounds like a bass drum.`, audioPrompt: `Frequency — how fast vibrations happen. High-frequency vibrations create high-pitched sounds like a whistle, and low-frequency vibrations create deep sounds like a bass drum.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Echoes and How We Use Them`,
          paragraphs: [
            `When sound waves hit a hard surface, they bounce back — that's an echo. The harder and smoother the surface, the cleaner the echo. Shouting in a canyon or an empty room produces echoes because the sound bounces off the walls and returns to your ears moments later.`,
            `Engineers design concert halls very carefully to control how sound reflects. They use curved walls, padded surfaces, and carefully calculated angles so that music sounds rich and clear from every seat — no dead zones, no unwanted echoes.`,
            `Bats and dolphins take this even further with echolocation. They send out pulses of high-frequency sound and listen for the echoes bouncing back. From those echoes, they can build a precise picture of their surroundings — locating prey, navigating in darkness, and communicating. Sonar in submarines uses exactly the same principle.`,
          ],
          image:        '/explorer-assets/cosmos/l08-magazine-echoes.png',
          imageCaption: `Echoes and echolocation — sound bouncing off surfaces, used by bats, dolphins, and submarines`,
          vocab: [
            { word: 'echo',          definition: `A reflected sound — when sound waves hit a hard surface, they bounce back and you hear the same sound again moments later.`,                                                               audioPrompt: `Echo — a reflected sound. When sound waves hit a hard surface, they bounce back and you hear the same sound again moments later.` },
            { word: 'echolocation',  definition: `A natural sonar system used by bats and dolphins — they send out sound pulses and use the returning echoes to "see" their surroundings and locate prey in complete darkness.`, audioPrompt: `Echolocation — a natural sonar system used by bats and dolphins. They send out sound pulses and use the returning echoes to see their surroundings and locate prey in complete darkness.` },
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
    fetch('/explorer-assets/cosmos/l08-magazine-what-is-sound.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-magazine-how-sound-travels.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-magazine-volume-pitch.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l08-magazine-echoes.png',              { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L08] what-is-sound: ${r1.ok}, how-sound-travels: ${r2.ok}, volume-pitch: ${r3.ok}, echoes: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L08] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l08_screens;
