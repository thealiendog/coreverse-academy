// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L07 — Rhythm and Percussion
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L07 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-07`,
      title:     `Rhythm and Percussion`,
      duration:  12,
      xpReward:  50,
      badge:     `rhythm-keeper`,
      badgeName: `Rhythm Keeper`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Before I say anything else, {name}, I want you to notice something: you already have rhythm. You've had it since before you were born — your first experience of the world was your mother's heartbeat. Rhythm lives in your body. It's why you tap your foot to music without thinking, why certain beats make you want to move. Today we're going to look at rhythm as a musical concept — the foundation that every other element of music is built on. We'll look at percussion, how rhythm works across different musical traditions, and how to feel it more consciously. You already have this in you. Let's develop it.`,
          headline: `Rhythm and Percussion`,
          subtitle: `Before melody, before harmony, before instruments — there was rhythm. It's the most fundamental element of music, and it lives in everything that moves. Once you understand it, you'll hear it everywhere and feel it in your body`,
          visual: `/explorer-assets/creative-arts/l07-welcome.png`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Rhythm Lives in You`,
          paragraphs: [
            `You've had rhythm since before you were born. Your first experience of the world was your mother's heartbeat.`,
            `It's why you tap your foot to music without thinking. Rhythm lives in your body — you didn't have to be taught it.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s1-rhythm-in-body.png`,
          imageCaption: `Your first sound was a heartbeat. Rhythm isn't something you learn from the outside — it's already in you.`,
          vocab: [
            { word: `rhythm`,    definition: `The pattern of sounds and silences in time. The foundation underneath all music.`,
              audioPrompt: `Rhythm is music's most basic ingredient, {name}. Before melody, before harmony, before instruments — there was rhythm. It's the organization of sound in time. Without it, notes are just sounds floating in the air. With it, music has momentum and life.` },
            { word: `pulse`,     definition: `The steady throb of music — like the heartbeat that started your relationship with rhythm before you were born.`,
              audioPrompt: `Pulse is rhythm at its most basic, {name} — a steady throb you can feel. Your heart pulses. Your breath pulses. Music pulses. You're built to recognize it because your whole body runs on pulses of its own. That's why music with a clear pulse feels so deeply right.` },
            { word: `universal`, definition: `Present everywhere across all cultures and times. Rhythm is a human universal — every culture developed it.`,
              audioPrompt: `Some things in human life are universal, {name} — found in every culture on earth, no matter how isolated. Rhythm is one of them. Every people, every time, every place, humans found rhythm. That tells you something: it isn't a cultural invention. It's part of being human.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Beat, Tempo, Groove`,
          paragraphs: [
            `The BEAT is the steady pulse — what you tap your foot to. The TEMPO is how fast that beat moves.`,
            `GROOVE is what happens when the rhythm locks in so well your body responds before your brain does. Every great rhythm has it.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s2-beat-tempo-groove.png`,
          imageCaption: `Beat is the steady pulse. Tempo is its speed. Groove is the magic that makes your body move before your brain catches up.`,
          vocab: [
            { word: `beat`,   definition: `The steady underlying pulse of music — what your foot taps to. The skeleton everything else hangs on.`,
              audioPrompt: `Close your eyes and listen to any song, {name} — you'll feel a steady pulse underneath everything. That's the beat. Music's heartbeat. Before any melody, harmony, or lyrics arrive, the beat is already there. The invisible structure all rhythm hangs on.` },
            { word: `tempo`,  definition: `How fast or slow the beat moves. Measured in beats per minute (BPM).`,
              audioPrompt: `Tempo is the speed of the heartbeat, {name}. Sixty beats per minute feels like a quiet walk. A hundred and sixty feels like a sprint. The same rhythm at different tempos becomes a completely different emotional experience. Tempo is one of the most powerful tools a musician has.` },
            { word: `groove`, definition: `The feel that makes a rhythm "locked in" and irresistible to move to. The most sought-after quality in rhythm.`,
              audioPrompt: `Groove is hard to define, {name}, but you feel it instantly. It's when a rhythm is so well-balanced that your body responds before your brain does. You can play all the right notes with perfect timing and still not have groove. It's the human element — the most sought-after thing in rhythm.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Syncopation`,
          paragraphs: [
            `Most beats land where you expect: ONE, two, THREE, four.`,
            `Syncopation puts the accent on the OFF-beats — the spaces between. It feels surprising and irresistible. Jazz, funk, and hip-hop run on it.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s3-syncopation-offbeat.png`,
          imageCaption: `Hit the unexpected beat instead of the obvious one. That's syncopation — and it's why some rhythms make you want to move.`,
          vocab: [
            { word: `syncopation`, definition: `Placing accents on unexpected ("off") beats — creating tension, surprise, and the feeling of groove.`,
              audioPrompt: `Syncopation is rhythm's way of being unpredictable, {name}. Instead of landing on the expected beat, an accent falls between the beats — off-balance in a way that creates groove. Jazz, funk, hip-hop depend on it. It's what makes certain rhythms feel irresistible to move to.` },
            { word: `accent`,      definition: `An emphasis placed on a particular beat — making it louder or more forceful. What gives a rhythm its personality.`,
              audioPrompt: `An accent is a moment of emphasis, {name} — a beat hit harder than the ones around it. Without accents, every beat would feel equally weighted and music would become mechanical. Move the accent one beat earlier or later and the entire groove changes.` },
            { word: `off-beat`,    definition: `The space between the main beats. Where syncopation lives — and where so much of the energy in popular music comes from.`,
              audioPrompt: `The off-beats are the spaces between the main pulses, {name} — the "and" between "one and two and three and four." Most styles emphasize the main beats. Syncopated styles emphasize what's between. Reggae, ska, funk — they all live in the off-beats. That's why their grooves feel so distinctive.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Rhythmic Notation`,
          paragraphs: [
            `Rhythm has a written language. Symbols for whole notes, half notes, quarter notes, eighths. Symbols for the rests between them.`,
            `A drummer in Tokyo can read and play the exact same pattern as a drummer in Berlin. Notation makes rhythm portable across time and place.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s4-notation-travels.png`,
          imageCaption: `A precise written language for rhythm. The reason music from 300 years ago can be played accurately today by people who never met its composer.`,
          vocab: [
            { word: `notation`, definition: `The written symbols for music. Lets rhythm and melody be recorded precisely and traveled across time and language.`,
              audioPrompt: `Notation is a time machine for music, {name}. A piece written 300 years ago can be performed today, exactly as written, by musicians who weren't born when it was composed. You don't have to read music to be a great musician — but notation gives you a shared language across centuries.` },
            { word: `rest`,     definition: `A symbol for silence in music. Silence is part of rhythm, not the absence of it.`,
              audioPrompt: `Silence in music is called a rest, {name}, and it matters just as much as the sound. A rest has a duration — a whole rest, a half rest, a quarter rest — written as deliberately as any note. The pause that makes the next note land harder. Rhythm without rests would just be noise.` },
            { word: `bar line`, definition: `The vertical line that separates measures of music. Creates the repeating rhythmic units that give music its structure.`,
              audioPrompt: `Bar lines are the walls that create rhythmic rooms, {name}. They divide the flowing stream of music into equal measures. When you count along to music — one, two, three, four, one, two, three, four — you're feeling the bar lines even if you can't see them.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `World Percussion`,
          paragraphs: [
            `Every culture on earth developed percussion. That's not coincidence — rhythm is a human universal.`,
            `West African djembes use POLYRHYTHM — multiple rhythms at once. Indian tablas play TALAS — cycles of 7, 10, 16+ beats. Brazilian samba layers patterns into a driving whole.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s5-world-percussion.png`,
          imageCaption: `Different cultures, same impulse. The djembe, the tabla, samba drums — all of them are humanity figuring out rhythm.`,
          vocab: [
            { word: `polyrhythm`, definition: `Two or more different rhythms played simultaneously. Central to West African drumming and Brazilian samba.`,
              audioPrompt: `Polyrhythm is what happens when multiple rhythms play at the same time, {name} — and if you focus on just one, it sounds straightforward. But when all the layers lock together, something larger emerges. West African drumming has used polyrhythm for centuries. Much of modern popular music descends from it.` },
            { word: `djembe`,     definition: `A West African hand drum that produces multiple distinct tones (bass, tone, slap) from a single instrument.`,
              audioPrompt: `The djembe is one of the most expressive single instruments Muse has ever encountered, {name}. Played with bare hands. Depending on where you strike it, it produces completely different sounds — a deep bass, a mid-range tone, a sharp slap. West African players work in interlocking patterns that take years to master.` },
            { word: `tala`,       definition: `A rhythmic cycle in Indian classical music, often 7, 10, or 16+ beats, around which musicians improvise.`,
              audioPrompt: `In Indian classical music, {name}, rhythm is architecture. A tala is a rhythmic cycle — seven beats, ten beats, sixteen. The musicians improvise within and around it. When improvisation and tala resolve together at the same point, the whole room feels it. Mathematics and feeling at the same time.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Anything That Makes a Sound`,
          paragraphs: [
            `You don't need a drum kit. Anything that makes a sound when struck is a percussion instrument.`,
            `Pots, buckets, pencils, your own body (claps, stomps, snaps). The rhythm is in the player, not the gear.`,
          ],
          image: `/explorer-assets/creative-arts/l07-s6-anything-makes-sound.png`,
          imageCaption: `The rhythm lives in the person. The equipment is just how the sound gets out.`,
          vocab: [
            { word: `found percussion`, definition: `Rhythm made with everyday objects — pots, buckets, pencils, bottles — rather than dedicated instruments.`,
              audioPrompt: `Rhythm doesn't need a drum kit, {name}. Pots, buckets, pencils on a desk, hands on a table — all of it is found percussion. Brazilian Batucada originated on found objects before dedicated drums were available. The rhythm is in the person, not the equipment.` },
            { word: `body percussion`, definition: `Rhythm made with the human body — clapping, stomping, chest-patting, finger-snapping, thigh-slapping.`,
              audioPrompt: `Your body is a percussion instrument, {name} — it always has been. Clapping, stomping, snapping, patting: people have been making rhythm this way since before any instrument was invented. Groups like Stomp build entire shows from it. You arrived with the instrument already built in.` },
            { word: `timbre`,           definition: `The unique sonic "color" of an instrument or sound. What makes a bucket sound different from a drum, even at the same pitch.`,
              audioPrompt: `Timbre is why a piano and a guitar playing the same note sound completely different, {name}. The color of a sound. Every percussion source has its own timbre — the djembe's warmth, the snare's crack, the rim of a bucket versus its center. Found percussion players choose objects by timbre.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `understands`,
              label: `🥁 This shows how rhythm music actually works`,
              color: `#34D399`,
            },
            {
              id: `misunderstands`,
              label: `🤔 A common misunderstanding about rhythm`,
              color: `#94A3B8`,
            },
          ],
          items: [
            {
              id: `l07-g1`,
              image: `l07-game-1.png`,
              label: `Tapping a steady beat with your hand while a more complicated rhythm plays around it.`,
              matchPhrase: `That's one of the most important skills in rhythm: keeping the pulse steady while patterns play over it. The beat is the foundation everything else is built on — and being able to hold it steady while the groove does its thing is what gives music its sense of momentum.`,
              correctMatch: `understands`,
            },
            {
              id: `l07-g2`,
              image: `l07-game-2.png`,
              label: `Writing a rhythm pattern in symbols so that a friend in another country could play it exactly the same way.`,
              matchPhrase: `That's rhythmic notation doing exactly what it's designed for: giving rhythm a precise written form that travels across distance, language, and time. It's the reason musicians can perform centuries-old music accurately, and why a drummer in one country can read and play the same rhythm as a drummer anywhere else in the world.`,
              correctMatch: `understands`,
            },
            {
              id: `l07-g3`,
              image: `l07-game-3.png`,
              label: `Thinking you need a real drum kit to make proper percussion music.`,
              matchPhrase: `Any surface that makes a sound when struck is a percussion instrument. Pots, buckets, tables, and your own body have been used to make complex, beautiful percussion music across cultures for centuries. The understanding of rhythm is the instrument — the object is just how the sound gets made.`,
              correctMatch: `misunderstands`,
            },
            {
              id: `l07-g4`,
              image: `l07-game-4.png`,
              label: `Thinking the drummer made a mistake when the beat lands on an unexpected moment and makes the music suddenly feel exciting.`,
              matchPhrase: `That's syncopation — accents placed on off-beats rather than the main pulse. It's deliberate, not a mistake. The tension and surprise it creates is exactly what makes jazz, funk, and so much popular music feel exciting and alive. The "unexpected" placement is the point.`,
              correctMatch: `misunderstands`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l07-q1`,
              format: `multiple-choice`,
              question: `What is syncopation?`,
              options: [
                `Playing the beat louder than the rest of the music`,
                `Deliberately placing accents on off-beats rather than the main pulse — creating tension, surprise, and groove`,
                `A mistake made by drummers when they lose the beat`,
                `The technique of playing two rhythms at the exact same speed`,
              ],
              correctIndex: 1,
              explanation: `Syncopation is one of rhythm's most powerful tools: it deliberately places accents where the listener doesn't expect them — on the weak beats or the spaces between beats rather than on the steady pulse. Far from being a mistake, syncopation is exactly what gives jazz, funk, and much popular music its sense of tension and groove. When a rhythm "leans in" at an unexpected moment, that's syncopation working.`,
            },
            {
              id: `l07-q2`,
              format: `multiple-choice`,
              question: `What does having a written notation system make possible for rhythm that couldn't happen without it?`,
              options: [
                `It allows drummers to play faster than they could by ear`,
                `It gives rhythm a precise shared language — so a pattern can be written down, communicated exactly, performed centuries later, and played the same way by musicians anywhere in the world`,
                `It replaces the need to learn rhythm by listening`,
                `It tells performers how loud to play each note`,
              ],
              correctIndex: 1,
              explanation: `Rhythmic notation is remarkable for what it enables: a drummer in one country can read and perform exactly the same rhythm as a drummer in another country, without ever meeting. Music written centuries ago can be performed accurately today because the notation preserves the rhythm precisely. It doesn't replace listening and feeling — great musicians do both — but it adds a layer of precision and communication that rhythm alone can't achieve.`,
            },
            {
              id: `l07-q3`,
              format: `multiple-choice`,
              question: `What does the existence of complex percussion traditions in cultures around the world suggest?`,
              options: [
                `That percussion instruments were traded along ancient trade routes`,
                `That rhythm is a deep human universal — not a cultural invention, but a fundamental aspect of how human beings experience and express music`,
                `That all world music shares the same rhythmic structure`,
                `That drums are easier to build than melodic instruments`,
              ],
              correctIndex: 1,
              explanation: `Every human culture independently developed percussion — the West African djembe, Indian tabla, Brazilian samba, flamenco zapateado, and countless others. The fact that this happened everywhere, independently, without contact, points to something fundamental: rhythm isn't a cultural invention, it's a human universal. Our brains and bodies respond to and create rhythm naturally — it's as human as language.`,
            },
            {
              id: `l07-q4`,
              format: `true-false`,
              question: `Body percussion — using clapping, stomping, and other body sounds to make rhythm — is a genuine musical tradition practised in cultures around the world, not just a substitute for real instruments.`,
              correctAnswer: true,
              explanation: `True. Body percussion is one of the oldest musical traditions in existence, practised across cultures worldwide long before dedicated instruments existed. It's not a substitute — it's a primary form of music in its own right. The human body can produce a surprisingly wide range of sounds and dynamics, and the rhythmic intelligence required to perform complex body music is as sophisticated as playing any instrument.`,
            },
            {
              id: `l07-q5`,
              format: `fill-blank`,
              question: `Deliberately placing accents on the off-beats — creating tension and groove — is called ___.`,
              options: [
                `syncopation`,
                `tempo`,
                `notation`,
                `polyrhythm`,
              ],
              correctIndex: 0,
              explanation: `Syncopation is the rhythmic technique of emphasising beats or parts of beats that aren't normally accented — the "off-beats" between the main pulse. Rather than landing where the listener expects, the rhythm leans into unexpected moments, creating that feeling of tension, surprise, and irresistible groove. It's central to jazz, funk, Latin music, and much of the popular music that makes people instinctively want to move.`,
            },
            {
              id: `l07-q6`,
              format: `multiple-choice`,
              question: `Why is rhythm often described as the most fundamental element of music?`,
              options: [
                `Because it is the only element that can be heard without instruments`,
                `Because melody and harmony both depend on it — without rhythm, notes are just sounds floating in time with no pulse, momentum, or organisation`,
                `Because every culture uses the same basic rhythms`,
                `Because rhythm is the simplest element and the easiest to learn`,
              ],
              correctIndex: 2,
              explanation: `Rhythm is the organising principle of music in time — it's what gives music momentum, pulse, and direction. Melody needs rhythm to move forward. Harmony needs rhythm to have timing and shape. Without rhythm, notes are just sounds with no relationship to each other in time. It's also the element most directly connected to the body — heartbeat, breath, walking — which is why it triggers physical responses like foot-tapping and dancing almost automatically.`,
            },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Rhythm is used therapeutically as well as musically — rhythmic drumming has been shown to reduce stress and help people synchronise with each other. Surgeons have been found to work more accurately while listening to their preferred music. Athletes use rhythm in training to coordinate movement. And in every culture on earth, communal music-making through rhythm is one of the primary ways humans bond, celebrate, and mark important moments together.`,
          familyAdventure: `Listen together to one piece of music with a strong rhythm — choose whatever genre your family loves. Take turns: one person focuses on finding the beat and tapping it, another listens for any moment the rhythm feels like it "leans" or surprises (that's syncopation). Then find a percussion-led piece from a culture you haven't heard before — West African drumming, Indian tabla, Brazilian samba — and compare how the rhythm feels. What's the same? What's different?`,
          creativePrompt: `Gather four household objects that make different sounds when struck — spoons, pots, boxes, books, bottles. Assign a role to each: one as the steady beat, one as a higher rhythm on top, one as a bass sound, one as an accent. Start with just the beat, then add each layer one at a time. You've built a percussion ensemble from scratch. Try changing the tempo (slow it down, then speed it up) and notice how the whole feeling changes. If you have two people, try playing two different rhythms at the same time and feel the polyrhythm that results.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that rhythm is not something you either have or you don't — it's a language you can learn, read, feel, and play with anything that makes a sound. Every culture on earth found it because it's woven into being human. Muse loves that you now hear the world as percussion.`,
          badge: `rhythm-keeper`,
          badgeName: `Rhythm Keeper`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L07.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L07] Loaded: "Rhythm and Percussion" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l07-s1-rhythm-in-body.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-s2-beat-tempo-groove.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-s3-syncopation-offbeat.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-s4-notation-travels.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-s5-world-percussion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-s6-anything-makes-sound.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L07] One or more magazine assets missing'));
}
