// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L14 — Sound: Vibrations We Can Hear
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 1-PS4-1 / 4-PS4-1
// REWRITE v2 (May 2026): Grade 1 accessible, VIBRATION / PITCH / VOLUME
// 3-bucket identification game tests sorting sound properties
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Last lesson, you learned how we SEE — with light! Today — how we HEAR! With SOUND! Sound is everywhere — music, voices, laughter, wind, rain, dogs barking! But what IS sound? Where does it come from? How does it travel from a thing far away into your ears? Today you'll find out! Let's listen!`,
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
            `Stop and LISTEN, {name}! Right now! What do you hear?`,
            `Maybe the hum of a fridge! Voices from another room! Wind outside! Your own breathing! Traffic! A pet! Birds! Even in "quiet" places, there are sounds! Sound is one of the most COMMON things in our lives! We use it constantly — to talk, listen to music, hear danger coming, communicate with friends! Today we're going to figure out what sound actually IS! And the answer is going to surprise you!`,
          ],
          image: `/explorer-assets/science/l14-s1-sound-everywhere.webp`,
          imageCaption: `Sound is everywhere! We hear sounds constantly!`,
          vocab: [
            { word: `sound`,  definition: `Something we hear with our ears.`,
              audioPrompt: `Sound is something we hear with our ears. Music. Voices. Wind. Laughter. All sounds. Sound is actually VIBRATIONS traveling through air. The vibrations reach our ears, and we hear them!` },
            { word: `listen`, definition: `To pay attention to sounds.`,
              audioPrompt: `To listen is to pay attention to sounds. Your ears always catch sounds, but you only LISTEN when you pay attention. There's a difference between hearing and listening. Hearing is automatic. Listening is on purpose!` },
            { word: `common`, definition: `Very ordinary, happens often.`,
              audioPrompt: `Common means very ordinary, happens often. Sound is very common in daily life. Almost every moment of every day has sounds. We're surrounded by them — and we use them constantly!` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sound = VIBRATIONS`,
          paragraphs: [
            `Here's the big secret — sound is MOVEMENT! Sound is when something VIBRATES!`,
            `Vibrate means moving back and forth FAST! Pluck a guitar string — it vibrates! Bang a drum — the drumhead vibrates! Talk — your vocal cords vibrate! Clap your hands — your hands and the air between them vibrate! When something vibrates, it makes the air around it MOVE! That moving air is what we call SOUND! No vibration = no sound! Every single sound started with SOMETHING moving back and forth!`,
          ],
          image: `/explorer-assets/science/l14-s2-vibrations.webp`,
          imageCaption: `SOUND = vibrations! Things moving back and forth fast!`,
          vocab: [
            { word: `vibrate`,        definition: `To move back and forth fast.`,
              audioPrompt: `To vibrate is to move back and forth fast. Vibrations make sound. Try this — put your fingers on your throat and hum. You'll feel your throat vibrating! That's your vocal cords moving fast!` },
            { word: `vibration`,      definition: `Quick back-and-forth movement.`,
              audioPrompt: `A vibration is quick back-and-forth movement. Sound comes from vibrations. Guitar strings vibrate to make music. Drums vibrate when you hit them. Bees' wings vibrate as they fly — making that buzzing sound!` },
            { word: `back and forth`, definition: `Going one way, then the other, quickly.`,
              audioPrompt: `Back and forth means going one way, then the other, quickly. Vibrating things move back and forth. A guitar string plucks one way, then back, many times per second. So fast you can hardly see it!` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sound TRAVELS Through Air`,
          paragraphs: [
            `When something vibrates, it makes the air around it MOVE in WAVES!`,
            `Imagine throwing a rock in still water — circles ripple OUT! Sound waves ripple out from a vibrating object the same way! The waves travel through the AIR! They spread in ALL directions! When they reach your ears, you HEAR them! Sound waves move FAST — about 750 miles per hour! But not as fast as LIGHT, which is why during a thunderstorm you SEE lightning before you HEAR thunder! Important — sound needs AIR to travel! In SPACE, there's no air! So in space, NO SOUND!`,
          ],
          image: `/explorer-assets/science/l14-s3-sound-travels.webp`,
          imageCaption: `Sound travels through AIR in waves! In space = no sound!`,
          vocab: [
            { word: `sound wave`,    definition: `A pattern of air movement from vibrations.`,
              audioPrompt: `A sound wave is a pattern of air movement created by vibrations. When something vibrates, it pushes air molecules. Like a chain reaction spreading outward — that's a sound wave. When they reach your ears, you hear!` },
            { word: `travel`,        definition: `To move from one place to another.`,
              audioPrompt: `To travel is to move from one place to another. Sound waves travel through air. From the source outward in all directions. Sound travels fast — but not as fast as light. That's why thunder comes after lightning!` },
            { word: `space silence`, definition: `Space has no air, so sound cannot travel.`,
              audioPrompt: `Space silence — space has no air, so sound cannot travel. Astronauts in space can't yell to each other through open space. They use radios. Movies that show explosions making sound in space are fake!` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PITCH: High and Low`,
          paragraphs: [
            `Sounds can be HIGH or LOW! We call this PITCH!`,
            `A bird's chirp = HIGH pitch! A drum's boom = LOW pitch! A whistle = high! A growl = low! Pitch depends on HOW FAST something vibrates! Fast vibrations = high pitch (lots of vibrations per second)! Slow vibrations = low pitch (fewer per second)! Different birds have different pitches! Different musical instruments! Different voices — some people have high voices, some low! The world of sound has high pitch ALL the way to low pitch — and everything in between!`,
          ],
          image: `/explorer-assets/science/l14-s4-pitch.webp`,
          imageCaption: `PITCH = how high or low a sound is!`,
          vocab: [
            { word: `pitch`,      definition: `How high or low a sound is.`,
              audioPrompt: `Pitch is how high or low a sound is. Birds chirp with high pitch. Drums boom with low pitch. Pitch depends on how fast something vibrates. Faster vibrations = higher pitch. Slower = lower!` },
            { word: `high pitch`, definition: `A sound that sounds high — like a whistle.`,
              audioPrompt: `High pitch is a sound that sounds high — like a whistle, a bird's chirp, or a tiny squeak. High pitch comes from FAST vibrations — many per second. Small objects often have high pitch (small bells, flutes)!` },
            { word: `low pitch`,  definition: `A sound that sounds low — like a drum.`,
              audioPrompt: `Low pitch is a sound that sounds low — like a drum, a growl, or a big bell. Low pitch comes from SLOW vibrations — fewer per second. Large objects often have low pitch. Whale songs are super low!` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `VOLUME: Loud and Soft`,
          paragraphs: [
            `Sounds can also be LOUD or SOFT! We call this VOLUME!`,
            `Whispers = soft! Thunder = LOUD! Volume depends on HOW BIG the vibrations are! Big vibrations = LOUD sounds! Tiny vibrations = SOFT sounds! (Pitch was about SPEED! Volume is about SIZE!) Loud sounds can be exciting or scary! Soft sounds can be calming or sneaky! But very loud sounds can HURT your ears! Always protect your ears around loud sounds! Your ears are precious — and you have them for life!`,
          ],
          image: `/explorer-assets/science/l14-s5-volume.webp`,
          imageCaption: `VOLUME = how loud or soft a sound is!`,
          vocab: [
            { word: `volume`, definition: `How loud or soft a sound is.`,
              audioPrompt: `Volume is how loud or soft a sound is. Volume depends on the SIZE of vibrations. Big vibrations make loud sounds. Tiny vibrations make soft sounds. Different from pitch — which depends on SPEED of vibrations!` },
            { word: `loud`,   definition: `Big in volume.`,
              audioPrompt: `Loud means big in volume. Loud sounds have big vibrations — lots of energy pushing air. Thunder is loud. Concerts are loud. Engines are loud. Very loud sounds for long times can hurt your ears. Wear ear protection!` },
            { word: `soft`,   definition: `Small in volume.`,
              audioPrompt: `Soft means small in volume. Soft sounds have tiny vibrations. Whispers are soft. A leaf falling is soft. A clock ticking is soft. Soft sounds can be peaceful or sneaky. Easier on your ears than loud sounds!` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `How EARS Catch Sound`,
          paragraphs: [
            `Sound waves travel through air! They reach your EARS! What happens then?`,
            `Your OUTER EAR (the part you can see) catches sound waves! They go down a tunnel to your EARDRUM — a thin layer of skin that VIBRATES when sound hits it! The vibrating eardrum shakes TINY BONES in your ear! The bones shake LIQUID INSIDE A SPIRAL! Tiny hairs in the liquid send signals to your BRAIN! Your brain figures out what the sound is — a voice? Music? Danger? All in MICROSECONDS! Your ears are amazing! Take care of them!`,
          ],
          image: `/explorer-assets/science/l14-s6-ears-hear.webp`,
          imageCaption: `Ears catch sound: outer ear → eardrum → tiny bones → liquid → brain!`,
          vocab: [
            { word: `ear`,     definition: `Your sense organ for hearing.`,
              audioPrompt: `An ear is your sense organ for hearing. Ears catch sound waves and turn them into signals your brain understands. The outer part of your ear funnels sound inward. Inside is a complicated system of bones and liquid!` },
            { word: `eardrum`, definition: `A thin layer of skin that vibrates from sound.`,
              audioPrompt: `An eardrum is a thin layer of skin in your ear that vibrates when sound hits it. It's the key part of hearing. When sound waves reach it, the eardrum vibrates — just like a drumhead. Eardrums are delicate!` },
            { word: `brain`,   definition: `What turns sound vibrations into meaning.`,
              audioPrompt: `Your brain is what turns sound vibrations into meaning. Your ears catch vibrations. Your brain interprets them. Is it a voice? A song? A bird? The brain figures it out instantly!` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sound facts. Drag each one — is it about VIBRATION (where sound starts!), PITCH (high or low!), or VOLUME (loud or soft!)?`,
          buckets: [
            { id: `vibration`, label: `🔊 VIBRATION`, color: `#34D399` },
            { id: `pitch`,     label: `🎵 PITCH`,     color: `#FBBF24` },
            { id: `volume`,    label: `📢 VOLUME`,    color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `A guitar string moving back and forth fast when you pluck it`,
              matchPhrase: `Yes! VIBRATION! That fast back-and-forth movement makes the sound. No vibration = no sound!`,
              correctMatch: `vibration` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `A tiny bird singing a squeaky chirp from a tree branch`,
              matchPhrase: `Right! PITCH! Bird chirps are HIGH pitch — fast vibrations many times per second!`,
              correctMatch: `pitch` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `Loud thunder booming across the sky during a storm`,
              matchPhrase: `Yes! VOLUME! Thunder is LOUD — big vibrations push lots of air. Cover your ears for loud sounds!`,
              correctMatch: `volume` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `Whispering a secret softly to a friend`,
              matchPhrase: `Right! VOLUME! Whispers are SOFT — tiny vibrations make quiet sounds!`,
              correctMatch: `volume` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is SOUND made by?`,
              options: [`Magic`, `VIBRATIONS — things moving back and forth fast`, `Heat`, `Sunlight`],
              correctIndex: 1,
              explanation: `Vibrations! Every sound starts with something vibrating. Guitar strings, vocal cords, drums — all vibrating!` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `How does sound TRAVEL from one place to another?`,
              options: [`Through wires`, `Through AIR — as sound waves spreading in all directions`, `By teleporting`, `Sound doesn't travel`],
              correctIndex: 1,
              explanation: `Through air! Sound waves spread through air like ripples. They travel until they reach your ears!` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is PITCH?`,
              options: [`How loud a sound is`, `How HIGH or LOW a sound is`, `How sweet a sound is`, `How long a sound lasts`],
              correctIndex: 1,
              explanation: `Pitch is how high or low a sound is. High pitch = fast vibrations. Low pitch = slow vibrations!` },
            { id: `l14-q4`, format: `true-false`,
              question: `In OUTER SPACE, sound CANNOT travel — because there's no air for sound waves to move through.`,
              correctAnswer: true,
              explanation: `True! Space is silent. With no air to carry sound waves, sound can't travel. Astronauts use radios in space!` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `Volume is how ___ a sound is.`,
              options: [`loud or soft`, `red or blue`, `tall or short`, `wet or dry`],
              correctIndex: 0,
              explanation: `Loud or soft! Volume depends on the size of vibrations. Big = loud. Tiny = soft!` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What part of your ear VIBRATES when sound hits it?`,
              options: [`Your hair`, `Your EARDRUM`, `Your nose`, `Your knee`],
              correctIndex: 1,
              explanation: `The eardrum! It's a thin layer of skin inside your ear that vibrates when sound waves hit it!` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Animals use sound in AMAZING ways! DOLPHINS and BATS use ECHOLOCATION — they make sounds and listen for echoes to "see" with sound! Whales sing songs that travel thousands of miles underwater! Elephants make low pitches humans can't hear — communicating across long distances! Owls have ears that can tell exactly where a tiny mouse is, just from its squeak! Many insects, dogs, and bats can hear pitches WAY higher than humans!`,
          familyAdventure: `Be SOUND DETECTIVES together! Try these: 1) Put your hand on your throat and HUM! Feel the vibrations? Those are your vocal cords moving! 2) Bang on a metal pan softly and loudly! Notice the volume change! 3) Pluck a rubber band tight (high pitch) and loose (low pitch)! Hear the pitch change! 4) Have everyone close their eyes for 1 minute and count how many DIFFERENT sounds they can hear! Compare!`,
          creativePrompt: `Draw a PICTURE of yourself listening to your favorite SOUND! Could be music, a friend's voice, your dog barking, rain! Then draw: a) The SOURCE of the sound! b) Sound WAVES traveling through air! c) Your EAR catching them! d) Your BRAIN figuring out what it is! For a 3-sentence floor: write a sentence about your favorite sound and where it comes from. For a 5-sentence stretch: write about your favorite sound, a sound you don't like, a high-pitched sound, a low-pitched sound, and a loud sound!`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know SOUND! Sound is VIBRATIONS — things moving fast! Sound TRAVELS through air in waves! PITCH = high or low (vibration speed)! VOLUME = loud or soft (vibration size)! Your EARS catch sound waves and your brain understands them! Without air, no sound — so space is silent! Your ears are amazing! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L14] Loaded: "Sound" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
