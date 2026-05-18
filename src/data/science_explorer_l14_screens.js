// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L14 — Sound: Vibrations We Can Hear
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-PS4-1 / 4-PS4-1 (sound from vibrations)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L14 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-14`,
      title:     `Sound: Vibrations We Can Hear`,
      duration:  12,
      xpReward:  50,
      badge:     `sound-explorer`,
      badgeName: `Sound Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Last lesson, you learned how we SEE — with light. Today — how we HEAR. With SOUND. Sound is everywhere — music, voices, laughter, wind, rain, dogs barking. But what IS sound? Where does it come from? How does it travel from a thing far away into your ears? Today you'll find out. Let's listen!`,
          headline: `Sound: Vibrations We Can Hear`,
          subtitle: `What sound really is — and how we hear it`,
          visual: `/explorer-assets/science/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Sound Is Everywhere`,
          paragraphs: [
            `Stop and LISTEN. Right now. What do you hear?`,
            `Maybe the hum of a fridge. Voices from another room. Wind outside. Your own breathing. Traffic. A pet. Birds. Even in "quiet" places, there are sounds. Sound is one of the most COMMON things in our lives. We use it constantly — to talk, listen to music, hear danger coming, communicate with our families and friends. Today we're going to figure out what sound actually IS. And the answer is going to surprise you.`,
          ],
          image: `/explorer-assets/science/l14-s1-sound-everywhere.webp`,
          imageCaption: `Sound is everywhere. Voices, music, wind, traffic, pets. We hear sounds constantly. What ARE they?`,
          vocab: [
            { word: `sound`,          definition: `Something we hear with our ears. SOUNDS are made by vibrations.`,
              audioPrompt: `Sound, {name}, is something we hear with our ears. Music. Voices. Wind. Laughter. All sounds. But what IS sound? Sound is actually VIBRATIONS traveling through air. The vibrations reach our ears, and we hear them. Sound is all around us — even when we don't notice it.` },
            { word: `listen`,         definition: `To pay attention to sounds. LISTEN with your ears and brain.`,
              audioPrompt: `To listen, {name}, is to pay attention to sounds. Your ears always catch sounds, but you only LISTEN when you pay attention. There's a difference between hearing and listening. Hearing is automatic. Listening is on purpose. Scientists are great listeners — they pay close attention to what they hear.` },
            { word: `common`,         definition: `Very ordinary, happens often. SOUND is very COMMON in daily life.`,
              audioPrompt: `Common, {name}, means very ordinary, happens often. Sound is very common in daily life. Almost every moment of every day has sounds. We're surrounded by them — and we use them constantly. Talking to people. Listening to music. Hearing warnings. Sound is so common that we forget to notice it. But it's always there.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sound = VIBRATIONS`,
          paragraphs: [
            `Here's the big secret — sound is MOVEMENT. Sound is when something VIBRATES.`,
            `Vibrate means moving back and forth FAST. Pluck a guitar string — it vibrates. Bang a drum — the drumhead vibrates. Talk — your vocal cords vibrate. Clap your hands — your hands and the air between them vibrate. When something vibrates, it makes the air around it MOVE. That moving air is what we call SOUND. No vibration = no sound. Every single sound you've ever heard started with SOMETHING moving back and forth.`,
          ],
          image: `/explorer-assets/science/l14-s2-vibrations.webp`,
          imageCaption: `SOUND = vibrations. Things moving back and forth fast. Guitar strings, drumheads, vocal cords — all vibrating.`,
          vocab: [
            { word: `vibrate`,        definition: `To move back and forth FAST. Vibrations MAKE sound.`,
              audioPrompt: `To vibrate, {name}, is to move back and forth fast. Vibrations make sound. Try this — put your fingers on your throat and hum. You'll feel your throat vibrating! That's your vocal cords moving fast — making the sound of your humming. Every sound starts with something vibrating.` },
            { word: `vibration`,      definition: `Quick back-and-forth movement. Sound comes from VIBRATIONS.`,
              audioPrompt: `A vibration, {name}, is quick back-and-forth movement. Sound comes from vibrations. Guitar strings vibrate to make music. Drums vibrate when you hit them. Bees' wings vibrate as they fly — making that buzzing sound. The world is FULL of vibrations. Most of them, we hear as sounds.` },
            { word: `back and forth`, definition: `Going one way, then the other, quickly. Vibrating things move BACK AND FORTH.`,
              audioPrompt: `Back and forth, {name}, means going one way, then the other, quickly. Vibrating things move back and forth. A guitar string plucks one way, then back, then forward, then back — many times per second. So fast you can hardly see it. That fast movement is what creates sound waves in the air.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sound TRAVELS Through Air`,
          paragraphs: [
            `When something vibrates, it makes the air around it MOVE in WAVES.`,
            `Imagine throwing a rock in still water — circles ripple OUT. Sound waves ripple out from a vibrating object the same way. The waves travel through the AIR. They spread in ALL directions. When they reach your ears, you HEAR them. Sound waves move FAST — about 750 miles per hour. But not as fast as LIGHT, which is why during a thunderstorm you SEE lightning before you HEAR thunder. Light got there first. Important — sound needs AIR (or water) to travel. In SPACE, there's no air. So in space, NO SOUND. You wouldn't hear anything.`,
          ],
          image: `/explorer-assets/science/l14-s3-sound-travels.webp`,
          imageCaption: `Sound travels through AIR in waves. Spreads in all directions. Needs air to travel. In space = no sound.`,
          vocab: [
            { word: `sound wave`,     definition: `A pattern of air movement created by vibrations. SOUND WAVES travel through air.`,
              audioPrompt: `A sound wave, {name}, is a pattern of air movement created by vibrations. When something vibrates, it pushes air molecules. They bump into other molecules. Those bump into more. Like a chain reaction spreading outward — that's a sound wave. The waves spread in all directions, like ripples in water. When they reach your ears, you hear them.` },
            { word: `travel`,         definition: `To move from one place to another. Sound waves TRAVEL through air.`,
              audioPrompt: `To travel, {name}, is to move from one place to another. Sound waves travel through air. From the source (the vibrating thing) outward in all directions. Until they hit your ears. Or until they fade away. Sound travels fast — but not as fast as light. That's why thunder comes after lightning in storms.` },
            { word: `space silence`,  definition: `Space has NO air, so sound CANNOT travel. SPACE IS SILENT.`,
              audioPrompt: `Space silence, {name} — space has no air, so sound cannot travel. Astronauts in space can't yell to each other through open space. They use radios. Movies that show explosions making sound in space are fake — there'd be total silence. Sound needs something to travel through. Air on Earth. Water for fish. Space has neither. Total silence.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PITCH: High and Low`,
          paragraphs: [
            `Sounds can be HIGH or LOW. We call this PITCH.`,
            `A bird's chirp = HIGH pitch. A drum's boom = LOW pitch. A whistle = high. A growl = low. Pitch depends on HOW FAST something vibrates. Fast vibrations = high pitch (lots of vibrations per second). Slow vibrations = low pitch (fewer per second). Different birds have different pitches. Different musical instruments. Different voices — some people have high voices, some low. Singers can change pitch with their vocal cords — that's how they sing different notes. The world of sound has high pitch ALL the way to low pitch — and everything in between.`,
          ],
          image: `/explorer-assets/science/l14-s4-pitch.webp`,
          imageCaption: `PITCH = how high or low a sound is. Fast vibrations = high pitch. Slow vibrations = low pitch.`,
          vocab: [
            { word: `pitch`,          definition: `How HIGH or LOW a sound is. Birds chirp HIGH. Drums boom LOW.`,
              audioPrompt: `Pitch, {name}, is how high or low a sound is. Birds chirp with high pitch. Drums boom with low pitch. Singers change pitch when they sing different notes. Pitch depends on how fast something vibrates. Faster vibrations = higher pitch. Slower vibrations = lower pitch. Pitch is one of the main ways sounds differ.` },
            { word: `high pitch`,     definition: `A sound that sounds high — like a whistle or bird chirp.`,
              audioPrompt: `High pitch, {name}, is a sound that sounds high — like a whistle, a bird's chirp, or a tiny squeak. High pitch comes from FAST vibrations — many per second. Small objects often have high pitch (small bells, small flutes). High pitches feel light, sharp, or even cheerful. Some birds make incredibly high pitches you can barely hear.` },
            { word: `low pitch`,      definition: `A sound that sounds low — like a drum or growl.`,
              audioPrompt: `Low pitch, {name}, is a sound that sounds low — like a drum, a growl, or a big bell. Low pitch comes from SLOW vibrations — fewer per second. Large objects often have low pitch (big drums, big bells). Low pitches feel deep, heavy, or even spooky. Whale songs have some of the lowest pitches in nature.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `VOLUME: Loud and Soft`,
          paragraphs: [
            `Sounds can also be LOUD or SOFT. We call this VOLUME.`,
            `Whispers = soft. Thunder = LOUD. Volume depends on HOW BIG the vibrations are. Big vibrations = LOUD sounds. Tiny vibrations = SOFT sounds. (Pitch was about SPEED. Volume is about SIZE.) Loud sounds can be exciting or scary. Soft sounds can be calming or sneaky. But very loud sounds can HURT your ears. Concerts, fireworks, loud machines — these can damage hearing if you're around them too long. Always protect your ears around loud sounds. Your ears are precious — and you have them for life.`,
          ],
          image: `/explorer-assets/science/l14-s5-volume.webp`,
          imageCaption: `VOLUME = how loud or soft a sound is. BIG vibrations = LOUD. Tiny vibrations = soft. Protect your ears from loud noise.`,
          vocab: [
            { word: `volume`,         definition: `How LOUD or SOFT a sound is. Volume depends on the SIZE of vibrations.`,
              audioPrompt: `Volume, {name}, is how loud or soft a sound is. Volume depends on the size of vibrations. Big vibrations make loud sounds. Tiny vibrations make soft sounds. Different from pitch — which depends on speed of vibrations. Same drum can play LOUD (hit hard, big vibrations) or SOFT (hit gently, small vibrations) at the same pitch.` },
            { word: `loud`,           definition: `Big in volume. LOUD sounds have BIG vibrations.`,
              audioPrompt: `Loud, {name}, means big in volume. Loud sounds have big vibrations — lots of energy pushing air. Thunder is loud. Concerts are loud. Engines are loud. Some loud sounds are exciting. Some are dangerous. Very loud sounds for long times can hurt your ears. Always wear ear protection at concerts or with loud machines.` },
            { word: `soft`,           definition: `Small in volume. SOFT sounds have tiny vibrations.`,
              audioPrompt: `Soft, {name}, means small in volume. Soft sounds have tiny vibrations. Whispers are soft. A leaf falling is soft. A clock ticking is soft. Soft sounds can be peaceful or sneaky. They're easier on your ears than loud sounds. Soft sounds are why quiet places feel restful — there's not much vibration happening.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How EARS Catch Sound`,
          paragraphs: [
            `Sound waves travel through air. They reach your EARS. What happens then?`,
            `Your OUTER EAR (the part you can see) catches sound waves. They go down a tunnel to your EARDRUM — a thin layer of skin that VIBRATES when sound hits it. The vibrating eardrum shakes TINY BONES in your ear. The bones shake LIQUID INSIDE A SPIRAL. Tiny hairs in the liquid send signals to your BRAIN. Your brain figures out what the sound is — is it a voice? Music? Danger? All in MICROSECONDS. Your ears are amazing. Take care of them. Don't yell into them. Keep loud noises away.`,
          ],
          image: `/explorer-assets/science/l14-s6-ears-hear.webp`,
          imageCaption: `Ears catch sound: outer ear → eardrum vibrates → tiny bones → liquid → brain. Microsecond miracle.`,
          vocab: [
            { word: `ear`,            definition: `Your sense organ for hearing. EARS catch sound waves.`,
              audioPrompt: `An ear, {name}, is your sense organ for hearing. Ears catch sound waves and turn them into signals your brain understands. The outer part of your ear (the part you can see) is shaped to funnel sound inward. Inside is a complicated system of eardrums, bones, liquid, and tiny hairs — all working together to let you hear.` },
            { word: `eardrum`,        definition: `A thin layer of skin in your ear that VIBRATES when sound hits it.`,
              audioPrompt: `An eardrum, {name}, is a thin layer of skin in your ear that vibrates when sound hits it. It's the key part of hearing. When sound waves reach it, the eardrum vibrates back and forth — just like a drumhead. Those vibrations get sent deeper into your ear, eventually reaching your brain. Eardrums are delicate. Don't put things in your ears!` },
            { word: `brain`,          definition: `What turns sound vibrations into MEANING. Your BRAIN understands what you hear.`,
              audioPrompt: `Your brain, {name}, is what turns sound vibrations into meaning. Your ears catch vibrations. Your brain interprets them. Is it a voice you recognize? A song? A bird? A warning? The brain figures it out instantly. The brain is the part that actually "hears" — your ears are just the receivers. Pretty cool teamwork.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `Sound comes from VIBRATIONS — things moving back and forth fast.`,
              matchPhrase: `Yes! Every sound starts with something vibrating. Guitar strings vibrate. Drums vibrate. Your vocal cords vibrate when you talk. No vibration = no sound.`,
              correctMatch: `fact` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `Sound waves travel through AIR — that's how they reach our ears.`,
              matchPhrase: `True! Sound waves move through air (or water). They spread in all directions like ripples. Without air, sound can't travel. That's why space is silent.`,
              correctMatch: `fact` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `You can hear EXPLOSIONS in OUTER SPACE — sound travels through the vacuum.`,
              matchPhrase: `Not at all! Space has NO AIR. Without air, sound can't travel. Astronauts in space hear nothing through space. Movies that show explosions making sound in space are wrong.`,
              correctMatch: `myth` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `You can MAKE SOUND without anything vibrating — just by thinking really hard.`,
              matchPhrase: `Definitely not! Sound REQUIRES vibration. Always. Every single sound — even your thoughts becoming words — involves your vocal cords vibrating. No vibration = no sound. That's a rule.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is SOUND made by?`,
              options: [`Magic`, `VIBRATIONS — things moving back and forth fast`, `Heat`, `Sunlight`],
              correctIndex: 1,
              explanation: `Vibrations! Every sound starts with something vibrating. Guitar strings, vocal cords, drums, bee wings — all vibrating to make sounds.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `How does sound TRAVEL from one place to another?`,
              options: [`Through wires`, `Through AIR — as sound waves spreading in all directions`, `By teleporting`, `Sound doesn't travel`],
              correctIndex: 1,
              explanation: `Through air! Sound waves spread through air (or water) like ripples. They travel in all directions until they reach your ears.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is PITCH?`,
              options: [`How loud a sound is`, `How HIGH or LOW a sound is`, `How sweet a sound is`, `How long a sound lasts`],
              correctIndex: 1,
              explanation: `Pitch is how high or low a sound is. High pitch = fast vibrations (like a whistle). Low pitch = slow vibrations (like a drum).` },
            { id: `l14-q4`, format: `true-false`,
              question: `In OUTER SPACE, sound CANNOT travel — because there's no air for sound waves to move through.`,
              correctAnswer: true,
              explanation: `True! Space is silent. With no air (or water) to carry sound waves, sound can't travel. Astronauts use radios to talk in space because direct sound doesn't work.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `Volume is how ___ or ___ a sound is.`,
              options: [`loud or soft`, `red or blue`, `tall or short`, `wet or dry`],
              correctIndex: 0,
              explanation: `Loud or soft! Volume depends on the size of vibrations. Big vibrations = loud. Tiny vibrations = soft. Different from pitch (high/low).` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What part of your ear VIBRATES when sound hits it?`,
              options: [`Your hair`, `Your EARDRUM`, `Your nose`, `Your knee`],
              correctIndex: 1,
              explanation: `The eardrum! It's a thin layer of skin inside your ear that vibrates when sound waves hit it. Those vibrations travel deeper into your ear and eventually reach your brain.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Animals use sound in AMAZING ways. DOLPHINS and BATS use ECHOLOCATION — they make sounds and listen for echoes to "see" with sound. Whales sing songs that travel thousands of miles underwater. Elephants make low pitches humans can't hear — communicating with other elephants across long distances. Owls have ears that can tell exactly where a tiny mouse is, just from its squeak. Many insects, dogs, and bats can hear pitches WAY higher than humans. The world is FULL of sounds we don't even hear.`,
          familyAdventure: `Be SOUND DETECTIVES together. Try these: 1) Put your hand on your throat and HUM. Feel the vibrations? Those are your vocal cords moving. 2) Bang on a metal pan softly and loudly. Notice the volume change. 3) Pluck a rubber band tight (high pitch) and loose (low pitch). Hear the pitch change! 4) Have everyone close their eyes for 1 minute and count how many DIFFERENT sounds they can hear. Compare.`,
          creativePrompt: `Draw a PICTURE of yourself listening to your favorite SOUND. Could be music, a friend's voice, your dog barking, rain. Then draw: a) The SOURCE of the sound. b) Sound WAVES traveling through air. c) Your EAR catching them. d) Your BRAIN figuring out what it is. Label each part. That's how hearing works!`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know SOUND. Sound is VIBRATIONS — things moving fast. Sound TRAVELS through air in waves. PITCH = high or low (vibration speed). VOLUME = loud or soft (vibration size). Your EARS catch sound waves and your brain understands them. Without air, no sound — so space is silent. Your ears are amazing. Take care of them. See you next lesson!`,
          badge: `sound-explorer`,
          badgeName: `Sound Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L14] Loaded: "Sound" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
