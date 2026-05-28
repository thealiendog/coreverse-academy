// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L14 — Sound: Vibrations We Can Hear
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 4-PS4-1, 4-PS3-2 — Waves transfer energy; vibrations
//            of matter cause sound
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what sound is (vibrations), how it travels, pitch
//        and volume, how ears decode sound
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-14`,
      title: `Sound: Vibrations We Can Hear`,
      duration: 18,
      xpReward: 75,
      badge: `sound-investigator`,
      badgeName: `Sound Investigator`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we covered light, which travels through empty space at incredible speed. Today we cover SOUND, which is completely different. Sound is vibrations moving through matter. It can't travel through empty space at all. In space, no one can hear you scream, literally. By the end of today, you'll know what sound actually IS, how your ears decode it, and why a tiny bee and a roaring lion are doing the same thing physically. Let's go.`,
          headline: `Sound`,
          subtitle: `What sound really is, and how we hear it`,
          visual: `/ue-assets/science/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Sound Actually Is`,
          paragraphs: [
            `SOUND is VIBRATIONS traveling through matter. When you clap your hands, the impact vibrates the air around your hands. Those vibrations travel outward in all directions like ripples on a pond, except in 3D. When the vibrations reach your ear, your eardrum vibrates with them. Your brain interprets those vibrations as the sound of a clap. Every sound you've ever heard is some object vibrating, sending those vibrations through air (or another material) to your ears.`,
            `Because sound is vibrations traveling through matter, sound needs MATTER to travel. It can't move through empty space. In the vacuum of space, there's no air to vibrate. If you were on the Moon (no atmosphere) and your friend was 10 meters away, you couldn't hear them shouting. Sound can also travel through liquids and solids, not just air. Whales communicate over miles through ocean water. If you put your ear to a long pipe and someone taps the other end, the vibrations travel through the metal much faster than through air.`,
          ],
          image: `/ue-assets/science/l14-s1-vibrations.webp`,
          imageCaption: `Vibrations. Through matter. Reaching your ear. That's sound.`,
          vocab: [
            { word: `sound`,
              definition: `Vibrations that travel through matter (air, water, or solids). Sound can't travel through empty space because there's no matter to vibrate.`,
              audioPrompt: `Sound is vibrations traveling through matter, {name}. When something moves quickly, like vocal cords or a guitar string, it pushes the air around it back and forth. Those pushes travel outward as waves of vibrating air. When they reach your ear, your eardrum vibrates too. Your brain interprets that as sound. Because sound is vibrations through matter, sound can't travel through empty space. There's no air to vibrate. In space, you couldn't hear an explosion 100 feet away.` },
            { word: `vibration`,
              definition: `A rapid back-and-forth movement. Vibrations are what create sound. Every sound in the world is caused by something vibrating.`,
              audioPrompt: `A vibration is a rapid back-and-forth movement, {name}. When something vibrates, it moves quickly from side to side or back and forth repeatedly. Vibrations are what create sound. When you pluck a guitar string, it vibrates back and forth hundreds of times per second. Those vibrations push the air around them, creating sound waves. When you speak, your vocal cords vibrate. When a speaker plays music, its surface vibrates. Every sound in the world is caused by something vibrating.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pitch and Volume`,
          paragraphs: [
            `Sounds differ in two main ways. PITCH is how high or low a sound is. PITCH depends on the FREQUENCY of the vibrations (how many wave cycles happen per second). Fast vibrations make HIGH-PITCHED sounds (like a whistle or a bee). Slow vibrations make LOW-PITCHED sounds (like a tuba or a lion's roar). When a guitar player tightens a string, the string vibrates faster, making a higher note. When they loosen it, it vibrates slower, making a lower note.`,
            `VOLUME is how LOUD or QUIET a sound is. Volume depends on the STRENGTH (or AMPLITUDE) of the vibrations. Stronger vibrations push more air, making louder sounds. Gentler vibrations make quieter sounds. A whisper is gentle pushing of air. A shout is forceful pushing. Volume is measured in DECIBELS (dB). A whisper is about 30 dB. Normal conversation is around 60 dB. Loud rock concerts can be over 110 dB. Sounds above 85 dB can damage hearing if you listen for long periods. This is why concerts and construction zones often require ear protection.`,
          ],
          image: `/ue-assets/science/l14-s2-pitch-volume.webp`,
          imageCaption: `Frequency = pitch. Amplitude = volume. Two separate properties of every sound.`,
          vocab: [
            { word: `pitch`,
              definition: `How high or low a sound is, determined by how fast something is vibrating. Fast vibrations = high pitch. Slow vibrations = low pitch.`,
              audioPrompt: `Pitch is how high or low a sound is, {name}. It depends on how fast something is vibrating. A bee's wings beat very fast, making a high-pitched buzz. A lion's vocal cords vibrate slowly, making a low-pitched roar. When a guitar player tightens a string, the string vibrates faster and the note gets higher. When they loosen it, the note gets lower. Different musical instruments produce different pitches in different ways. A piano has 88 different strings or hammers, each producing a different pitch.` },
            { word: `volume`,
              definition: `How loud or quiet a sound is, determined by the strength of the vibrations. Measured in decibels. Sounds above 85 decibels can damage hearing over time.`,
              audioPrompt: `Volume is how loud or quiet a sound is, {name}. It depends on the strength of the vibrations. Stronger vibrations push more air, making louder sounds. Gentler vibrations make quieter sounds. A whisper is gentle pushing of air. A shout is forceful pushing. Volume is measured in decibels. A quiet library is about 30 decibels. Normal conversation is around 60 decibels. A loud concert can be over 110 decibels. Sounds above 85 decibels can damage the tiny hair cells in your cochlea if you listen to them for long periods.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Your Ears Decode Sound`,
          paragraphs: [
            `Your EAR is one of the most precise organs in your body. Sound vibrations enter through your OUTER EAR and travel down the EAR CANAL until they hit your EARDRUM, a thin membrane that vibrates with the sound. Behind the eardrum are three tiny bones (the smallest bones in your body) that AMPLIFY the vibrations. The bones pass the vibrations to the COCHLEA, a snail-shaped structure filled with fluid and thousands of tiny hair-like cells.`,
            `Different hair cells respond to different pitches. High-pitched sounds vibrate hairs near the entrance of the cochlea. Low-pitched sounds vibrate hairs deeper inside. When a hair cell vibrates, it sends an electrical signal through your auditory nerve to your brain. Your brain combines these signals to recreate the original sound. All of this happens in milliseconds. You hear sounds essentially as they happen. Damage to those hair cells (often from loud noise over time) causes permanent hearing loss, because hair cells don't regrow. Protecting your hearing now matters for your whole life.`,
          ],
          image: `/ue-assets/science/l14-s3-ear.webp`,
          imageCaption: `Outer ear → eardrum → tiny bones → cochlea → brain. Sound becomes hearing.`,
          vocab: [
            { word: `frequency`,
              definition: `How many vibration cycles happen per second. Measured in Hertz (Hz). Frequency determines pitch — higher frequency makes higher-pitched sound.`,
              audioPrompt: `Frequency is how many vibration cycles happen per second, {name}. It's measured in units called Hertz. Higher frequency makes higher-pitched sound. Lower frequency makes lower-pitched sound. Humans can hear frequencies between about 20 Hertz (very low, like deep rumbles) and 20,000 Hertz (very high, like a mosquito's whine). Dogs can hear much higher frequencies than humans. Bats and dolphins use ultrasound (above the range of human hearing) to find food and navigate. The mosquito whining in your ear is producing several hundred wing beats per second.` },
            { word: `eardrum`,
              definition: `A thin membrane at the end of your ear canal that vibrates when sound reaches it. The eardrum passes those vibrations to three tiny bones, which pass them to the cochlea.`,
              audioPrompt: `The eardrum is a thin membrane at the end of your ear canal that vibrates when sound reaches it, {name}. Sound waves travel through the air and down your ear canal until they hit the eardrum. The eardrum vibrates in exactly the same pattern as the incoming sound. Behind the eardrum are three tiny bones that amplify those vibrations and pass them to the cochlea. Your eardrum is like a miniature drum that copies whatever sound is in the air.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sound in Different Animals and Humans`,
          paragraphs: [
            `Different animals hear in DIFFERENT FREQUENCY RANGES. Humans can hear from about 20 to 20,000 Hertz. Dogs can hear up to about 45,000 Hertz, which is why dog whistles work (we can't hear them; dogs can). Bats use ULTRASOUND (over 20,000 Hz) to navigate and find insects in total darkness. They send out clicks and listen for the echoes — this is called ECHOLOCATION. Dolphins do the same thing in water. Elephants communicate using INFRASOUND (below 20 Hz), which can travel for miles through the ground.`,
            `Humans use sound for an incredible range of things. SPEECH lets us communicate complex ideas. MUSIC has been part of every known human culture. WARNING SOUNDS like alarms protect us from danger. We also use sound for science. SONAR works like an echolocation for ships, helping them map the ocean floor. ULTRASOUND IMAGING lets doctors see inside bodies without surgery. Engineers test bridges by measuring sound vibrations. Geologists detect earthquakes through sound waves in the Earth. Sound is one of the most useful tools humans have, and we're still finding new applications.`,
          ],
          image: `/ue-assets/science/l14-s4-animals.webp`,
          imageCaption: `Bats, dolphins, dogs, elephants. Each species hears a different slice of sound.`,
          vocab: [
            { word: `echolocation`,
              definition: `When an animal sends out sounds and listens for echoes to find food, navigate, or sense the environment. Used by bats, dolphins, and some whales.`,
              audioPrompt: `Echolocation is when an animal sends out sounds and listens for the echoes, {name}. It's how bats find insects in total darkness. The bat sends out high-pitched clicks. The clicks bounce off bugs and come back. By listening to the echoes, the bat figures out where the bug is and even how it's moving. Dolphins do the same thing underwater. Some whales use echolocation too. Humans have copied this idea with technology called sonar, which is used by ships to map the ocean floor and find fish.` },
            { word: `sonar`,
              definition: `A technology that uses sound to detect objects underwater. Works like echolocation — sends out sound pulses and measures returning echoes to calculate distance.`,
              audioPrompt: `Sonar is a technology that uses sound to detect objects underwater, {name}. It works like echolocation. A device sends out a pulse of sound. The sound travels through the water, bounces off an object or the seafloor, and comes back as an echo. By measuring how long the echo takes to return, sonar can calculate the distance to the object. Ships use sonar to map the ocean floor and avoid underwater obstacles. Submarines use sonar to navigate. Scientists use it to locate fish and study underwater geography.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four sound situations. For each one, decide which is more important: PITCH (frequency, how high or low the sound is), VOLUME (amplitude, how loud or quiet), or MATERIAL (what the sound is traveling through)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `pitch`,      label: `Pitch`,      color: `#A78BFA`, description: `How high or low. Caused by how fast the source is vibrating.` },
            { id: `volume`,     label: `Volume`,     color: `#FBBF24`, description: `How loud or quiet. Caused by how strong the vibration is.` },
            { id: `material`,   label: `Material`,   color: `#60A5FA`, description: `What the sound is traveling through (air, water, solid, or nothing).` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `A flute player blows softly into the instrument.` },
                { text: `Then they blow harder, much harder, into the same flute.` },
                { text: `The note sounds the same kind, but takes up the whole room now.` },
              ],
              correctAnswer: `volume`,
              realWorldExample: `Playing the same note loudly vs. quietly is a volume change.`,
              explanation: `Same pitch (same note). What changed is how strongly the air is vibrating. Pure volume.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `A bee buzzes past at high speed.` },
                { text: `The buzz is a HIGH whine.` },
                { text: `Compare this to a low growl from a tiger, which is much deeper.` },
              ],
              correctAnswer: `pitch`,
              realWorldExample: `A bee's whine vs. a tiger's growl is a clear pitch difference.`,
              explanation: `One sound is high, the other is low. That's pitch. Bee wings beat very fast (high frequency). Tiger vocal cords vibrate more slowly (low frequency). Pure pitch difference.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `An astronaut on the Moon claps her hands.` },
                { text: `Her partner standing 10 meters away can see her clap but hears nothing.` },
                { text: `The Moon has no atmosphere.` },
              ],
              correctAnswer: `material`,
              realWorldExample: `The Moon's lack of atmosphere makes sound impossible.`,
              explanation: `The clap should produce sound vibrations, but there's no air to carry them. With no matter between the two astronauts, no sound can travel. Pure material (or in this case, lack of material). This is why "in space, no one can hear you scream" is literally true.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `Two friends each press their ear to opposite ends of a long metal pipe.` },
                { text: `One taps the metal lightly. The other hears it instantly and clearly.` },
                { text: `When they try the same tap with just air between them, the sound is much fainter.` },
              ],
              correctAnswer: `material`,
              realWorldExample: `Sound travels through solids much faster and clearer than through air.`,
              explanation: `Tricky because volume might SEEM to be the answer (the sound is louder through the pipe). But the actual cause is the MATERIAL. Sound travels through solid metal faster and more efficiently than through air. The same tap produces the same vibration strength. What differs is what the sound travels through. Lesson: the medium matters as much as the source. Dolphins, whales, and even astronauts (using radios) all depend on this.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What IS sound?`,
              options: [
                `Light you can hear`,
                `Vibrations traveling through matter (air, water, or solids)`,
                `A type of light`,
                `Just music`,
              ],
              correctIndex: 1,
              explanation: `Sound is vibrations moving through matter. Some object vibrates, the vibrations spread out through air or another material, and when they reach your ear, you hear the sound.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `Why can't sound travel through SPACE?`,
              options: [
                `Sound is too weak`,
                `Sound needs matter to vibrate. Space is nearly empty, so there's no matter for sound to travel through.`,
                `Sound only works on Earth`,
                `Space blocks sound`,
              ],
              correctIndex: 1,
              explanation: `Sound is vibrations of matter. Without matter (air, water, or solid), there's nothing to vibrate. In the vacuum of space, sound can't travel at all. Astronauts use radios because radio waves DO travel through space, but their voices alone don't.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What determines the PITCH of a sound?`,
              options: [
                `How loud it is`,
                `How fast something is vibrating (the frequency). Fast vibrations = high pitch. Slow vibrations = low pitch.`,
                `Air pressure`,
                `The color of the object`,
              ],
              correctIndex: 1,
              explanation: `Pitch comes from frequency. A bee's wings beat hundreds of times per second (high frequency, high pitch). A tiger's growl is slow vibrations (low frequency, low pitch). Pitch and volume are separate things.` },

            { id: `l14-q4`, format: `multiple-choice`,
              question: `What determines the VOLUME of a sound?`,
              options: [
                `How high or low it is`,
                `How strong the vibrations are. Stronger vibrations push more air, making louder sounds.`,
                `The color`,
                `Pure luck`,
              ],
              correctIndex: 1,
              explanation: `Volume depends on the strength (amplitude) of the vibrations. A whisper is gentle pushing of air. A shout is forceful pushing. Loud sounds physically push air harder, which is also why loud sounds can hurt your ears.` },

            { id: `l14-q5`, format: `true-false`,
              question: `True or false: Sound travels FASTER through solids than through air.`,
              correctAnswer: true,
              explanation: `True. Sound travels through solids and water much faster than through air. That's because the molecules in solids and liquids are closer together, so vibrations pass between them more efficiently. Whales communicate over miles through ocean water because of this.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `How do your EARS detect sound?`,
              options: [
                `Magic`,
                `Sound vibrations travel into your ear canal, vibrate your eardrum, get amplified by tiny bones, and trigger hair cells in your cochlea, which send signals to your brain`,
                `Through magnetism`,
                `Through light`,
              ],
              correctIndex: 1,
              explanation: `Your ear is an incredibly precise system. The eardrum vibrates with incoming sound. Three tiny bones amplify the vibrations. Hair cells in the cochlea detect different pitches. The brain combines everything into the sound you hear, all in milliseconds.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `What is ECHOLOCATION?`,
              options: [
                `When an echo comes back`,
                `When an animal sends out sounds and listens for echoes to navigate or find food — used by bats, dolphins, and some whales`,
                `A new sport`,
                `A type of song`,
              ],
              correctIndex: 1,
              explanation: `Bats use echolocation to find insects in total darkness. They send out clicks, listen for the echoes, and figure out where things are based on the returning sound. Dolphins and some whales do the same in water. Humans have copied this idea with sonar technology.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `Why do LOUD sounds (above about 85 decibels) potentially damage hearing?`,
              options: [
                `They don't really`,
                `They damage the tiny hair cells in your cochlea, which don't regrow, so hearing loss from loud noise can be permanent`,
                `They confuse the brain`,
                `They cause headaches only`,
              ],
              correctIndex: 1,
              explanation: `The hair cells in your cochlea detect sound. Very loud noises can damage them, and unlike many cells in your body, hair cells don't regrow. This is why concerts, construction sites, and other loud places often require ear protection. Hearing loss tends to be permanent.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pause and listen for 30 seconds. What do you hear? How many separate sounds can you identify? Where are they coming from?` },
            { id: `r2`, text: `If you could hear sounds that humans can't (like ultrasound or infrasound), which would you choose, and why?` },
            { id: `r3`, text: `Music is sound organized in patterns. Pick a song you love. What makes it work as music? What kind of sounds are in it?` },
            { id: `r4`, text: `Hair cells don't regrow. What does that mean for habits like listening to music at maximum volume through headphones? What would you tell a friend?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Sound shapes much of human life. Speech and music are central to almost every culture. Modern sound technology has changed everything from medicine (ultrasound imaging) to entertainment (recorded music) to safety (sirens and alarms). Sound also brings real risks. Construction workers, musicians, and even regular kids who play music too loud through headphones can lose hearing over time. Cosmo's tip: keep volumes reasonable. Hair cells are precious. The sounds of life are amazing, but only if you can still hear them at 80.`,
          familyAdventure: `Family String-Phone Build. Take two paper cups. Poke a small hole in the bottom of each. Thread a long string between them and tie a knot inside each cup so the string is held tight. Hold the cups so the string is pulled taut between you and a family member. Talk into one cup; the other person can hear you through the string. This works because sound vibrations travel through the taut string much like they travel through any solid. The string-phone is a working sound transmission device.`,
          creativePrompt: {
            intro: `Imagine waking up one morning and the world suddenly has different rules for sound. Pick one change: sound travels through everything (including space), or sound can't travel through air. Write about your day.`,
            floor: `Write at least 5 sentences. Pick which rule changed. Describe one weird thing that happens in your morning routine.`,
            stretch: `Write 8 to 10 sentences. Cover at least three situations: home, traveling outside, and trying to talk with someone. Show how the rule change affects each.`,
            open: `Write as much as you want. Build a full day's diary in the new sound world. Show effects on family, neighbors, transportation, music, communication. Include thoughts about whether you'd want this change to be permanent.`,
            frames: [
              `This morning, sound suddenly works differently. ___ now ___.`,
              `When I tried to ___, what actually happened was ___.`,
              `Outside, the strangest thing was ___.`,
              `The hardest part was ___.`,
              `If I had to live like this forever, ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what sound actually is, why it can't travel through space, what pitch and volume mean, how ears decode sound, and how echolocation works. Next lesson: the universal force behind sound, light, motion, AND life itself. ENERGY. See you there. — Cosmo.`,
          badge: `sound-investigator`,
          badgeName: `Sound Investigator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
