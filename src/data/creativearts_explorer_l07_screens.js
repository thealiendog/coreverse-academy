// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L07 — Rhythm and Percussion
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L07 = {
  ageBand:   'explorers',
  subjectId: 'creative-arts',
  guide:     'muse',

  lessons: [
    {
      id:        'ca-6-8-07',
      title:     'Rhythm and Percussion',
      duration:  12,
      xpReward:  50,
      badge:     'rhythm-keeper',
      badgeName: 'Rhythm Keeper',

      screens: [

        // ── 1. WELCOME ──────────────────────────────────────────────────────
        {
          id:       'l07-welcome',
          type:     'welcome',
          guideText: `Before I say anything else, {name}, I want you to notice something: you already have rhythm. You've had it since before you were born — your first experience of the world was your mother's heartbeat. Rhythm lives in your body. It's why you tap your foot to music without thinking, why certain beats make you want to move. Today we're going to look at rhythm as a musical concept — the foundation that every other element of music is built on. We'll look at percussion, how rhythm works across different musical traditions, and how to feel it more consciously. You already have this in you. Let's develop it.`,
          headline: 'Rhythm and Percussion',
          subtitle: `Before melody, before harmony, before instruments — there was rhythm. It's the most fundamental element of music, and it lives in everything that moves. Once you understand it, you'll hear it everywhere and feel it in your body`,
          visual:   '/explorer-assets/creative-arts/l07-welcome.png',
        },

        // ── 2. MAGAZINE — §1 ────────────────────────────────────────────────
        {
          id:      'l07-mag-1',
          type:    'magazine',
          section: 1,
          content: {
            heading: `The Elements of Rhythm`,
            body: `Rhythm is made of several interlocking elements working together. The **beat** is the steady underlying pulse — the thing you tap your foot to. The **tempo** is how fast or slow that beat moves (measured in beats per minute, or BPM). **Note values** describe how long sounds last: whole notes, half notes, quarter notes, eighth notes. A **measure** (or bar) groups a set number of beats together — most popular music has 4 beats per measure. **Syncopation** is the deliberate placing of accents on unexpected beats — the "off-beats" — which creates that feeling of tension, surprise, and groove that makes listeners want to move. Jazz, funk, and much of popular music rely heavily on syncopation.`,
            image:   '/explorer-assets/creative-arts/l07-magazine-1.png',
            caption: `Beat, tempo, note values, syncopation — rhythm is an interlocking system, not just a single thing`,
          },
        },

        // ── 3. MAGAZINE — §2 ────────────────────────────────────────────────
        {
          id:      'l07-mag-2',
          type:    'magazine',
          section: 2,
          content: {
            heading: `Reading Rhythmic Notation`,
            body: `**Rhythmic notation** is the written language of rhythm — a system that allows musicians anywhere in the world to read and perform exactly the same rhythm from a page, across centuries and language barriers. A **whole note** (an open oval) lasts 4 beats. A **half note** (open oval with a stem) lasts 2. A **quarter note** (filled oval with stem) lasts 1. An **eighth note** (filled oval with a flag on the stem) lasts half a beat. **Rests** are the silences, with their own symbols for each duration. Notes and rests are grouped in measures between **bar lines** on the **staff**. You don't need to read music to be a great musician — but notation gives you a precise shared language that lets rhythm be written down, remembered, and communicated exactly.`,
            image:   '/explorer-assets/creative-arts/l07-magazine-2.png',
            caption: `Rhythmic notation is a shared written language — it lets rhythm travel across time, place, and language`,
          },
        },

        // ── 4. MAGAZINE — §3 ────────────────────────────────────────────────
        {
          id:      'l07-mag-3',
          type:    'magazine',
          section: 3,
          content: {
            heading: `World Percussion Traditions`,
            body: `Every human culture on earth has developed percussion instruments and traditions — which tells you something important: rhythm is not a cultural invention, it's a human universal. The **West African djembe** creates a vast range of sounds from a single drum — bass, tone, and slap — and is played in elaborate interlocking patterns called **polyrhythm** (multiple rhythms at once). **Indian tabla** players learn complex rhythmic cycles called **talas** that can span 7, 10, 16, or more beats. **Brazilian samba** percussion builds layers of instruments, each with its own pattern, that lock together into a driving whole. **Flamenco** uses complex foot-stamping rhythms called **zapateado** that are simultaneously music and dance. These traditions have evolved over centuries and represent some of humanity's deepest musical intelligence.`,
            image:   '/explorer-assets/creative-arts/l07-magazine-3.png',
            caption: `Every human culture developed percussion — the djembe, tabla, samba, and flamenco all speak the same deep language`,
          },
        },

        // ── 5. MAGAZINE — §4 ────────────────────────────────────────────────
        {
          id:      'l07-mag-4',
          type:    'magazine',
          section: 4,
          content: {
            heading: `Found Percussion and Body Music`,
            body: `You don't need instruments to make percussion music — you just need the understanding that **anything that makes a sound when struck is a percussion instrument**. **Found percussion** uses everyday objects: pots, buckets, pencils, boxes, bottles. The Brazilian street percussion tradition **Batucada** was originally performed on found objects before dedicated drums were available. **Body percussion** — the use of clapping, stomping, chest-patting, finger-snapping, and thigh-slapping to make rhythm — is one of the oldest musical traditions in the world. Musicians like Bobby McFerrin and Harry Connick Jr. have demonstrated that the human body alone can create astonishingly complex and beautiful rhythm. The instrument is less important than the understanding.`,
            image:   '/explorer-assets/creative-arts/l07-magazine-4.png',
            caption: `Any surface that makes a sound when struck is a percussion instrument — rhythm needs no special equipment`,
          },
        },

        // ── 6. INTERACTIVE — Drag-match ─────────────────────────────────────
        {
          id:     'l07-game',
          type:   'interactive',
          format: 'drag-match',
          config: {
            buckets: [
              { id: 'understands', label: `🥁 This shows how rhythm music actually works`, color: '#34D399' },
              { id: 'misunderstands', label: `🤔 A common misunderstanding about rhythm`,   color: '#94A3B8' },
            ],
            items: [
              {
                id:            'l07-g1',
                image:         'l07-game-1.png',
                label:         `Tapping a steady beat with your hand while a more complicated rhythm plays around it.`,
                correctBucket: 'understands',
                matchPhrase:   `That's one of the most important skills in rhythm: keeping the pulse steady while patterns play over it. The beat is the foundation everything else is built on — and being able to hold it steady while the groove does its thing is what gives music its sense of momentum.`,
              },
              {
                id:            'l07-g2',
                image:         'l07-game-2.png',
                label:         `Writing a rhythm pattern in symbols so that a friend in another country could play it exactly the same way.`,
                correctBucket: 'understands',
                matchPhrase:   `That's rhythmic notation doing exactly what it's designed for: giving rhythm a precise written form that travels across distance, language, and time. It's the reason musicians can perform centuries-old music accurately, and why a drummer in one country can read and play the same rhythm as a drummer anywhere else in the world.`,
              },
              {
                id:            'l07-g3',
                image:         'l07-game-3.png',
                label:         `Thinking you need a real drum kit to make proper percussion music.`,
                correctBucket: 'misunderstands',
                matchPhrase:   `Any surface that makes a sound when struck is a percussion instrument. Pots, buckets, tables, and your own body have been used to make complex, beautiful percussion music across cultures for centuries. The understanding of rhythm is the instrument — the object is just how the sound gets made.`,
              },
              {
                id:            'l07-g4',
                image:         'l07-game-4.png',
                label:         `Thinking the drummer made a mistake when the beat lands on an unexpected moment and makes the music suddenly feel exciting.`,
                correctBucket: 'misunderstands',
                matchPhrase:   `That's syncopation — accents placed on off-beats rather than the main pulse. It's deliberate, not a mistake. The tension and surprise it creates is exactly what makes jazz, funk, and so much popular music feel exciting and alive. The "unexpected" placement is the point.`,
              },
            ],
          },
        },

        // ── 7. QUIZ ──────────────────────────────────────────────────────────
        {
          id:       'l07-quiz',
          type:     'quiz',
          questions: [

            // Q1 — MC (source)
            {
              id:           'l07-q1',
              format:       'mc',
              question:     `What is syncopation?`,
              options:      [
                `Playing the beat louder than the rest of the music`,
                `Deliberately placing accents on off-beats rather than the main pulse — creating tension, surprise, and groove`,
                `A mistake made by drummers when they lose the beat`,
                `The technique of playing two rhythms at the exact same speed`,
              ],
              correctIndex: 1,
              explanation:  `Syncopation is one of rhythm's most powerful tools: it deliberately places accents where the listener doesn't expect them — on the weak beats or the spaces between beats rather than on the steady pulse. Far from being a mistake, syncopation is exactly what gives jazz, funk, and much popular music its sense of tension and groove. When a rhythm "leans in" at an unexpected moment, that's syncopation working.`,
            },

            // Q2 — MC (replaced: was number-recall "how many beats in a whole note")
            {
              id:           'l07-q2',
              format:       'mc',
              question:     `What does having a written notation system make possible for rhythm that couldn't happen without it?`,
              options:      [
                `It allows drummers to play faster than they could by ear`,
                `It gives rhythm a precise shared language — so a pattern can be written down, communicated exactly, performed centuries later, and played the same way by musicians anywhere in the world`,
                `It replaces the need to learn rhythm by listening`,
                `It tells performers how loud to play each note`,
              ],
              correctIndex: 1,
              explanation:  `Rhythmic notation is remarkable for what it enables: a drummer in one country can read and perform exactly the same rhythm as a drummer in another country, without ever meeting. Music written centuries ago can be performed accurately today because the notation preserves the rhythm precisely. It doesn't replace listening and feeling — great musicians do both — but it adds a layer of precision and communication that rhythm alone can't achieve.`,
            },

            // Q3 — MC (source)
            {
              id:           'l07-q3',
              format:       'mc',
              question:     `What does the existence of complex percussion traditions in cultures around the world suggest?`,
              options:      [
                `That percussion instruments were traded along ancient trade routes`,
                `That rhythm is a deep human universal — not a cultural invention, but a fundamental aspect of how human beings experience and express music`,
                `That all world music shares the same rhythmic structure`,
                `That drums are easier to build than melodic instruments`,
              ],
              correctIndex: 1,
              explanation:  `Every human culture independently developed percussion — the West African djembe, Indian tabla, Brazilian samba, flamenco zapateado, and countless others. The fact that this happened everywhere, independently, without contact, points to something fundamental: rhythm isn't a cultural invention, it's a human universal. Our brains and bodies respond to and create rhythm naturally — it's as human as language.`,
            },

            // Q4 — TF (fresh)
            {
              id:            'l07-q4',
              format:        'tf',
              question:      `Body percussion — using clapping, stomping, and other body sounds to make rhythm — is a genuine musical tradition practised in cultures around the world, not just a substitute for real instruments.`,
              correctAnswer: true,
              explanation:   `True. Body percussion is one of the oldest musical traditions in existence, practised across cultures worldwide long before dedicated instruments existed. It's not a substitute — it's a primary form of music in its own right. The human body can produce a surprisingly wide range of sounds and dynamics, and the rhythmic intelligence required to perform complex body music is as sophisticated as playing any instrument.`,
            },

            // Q5 — Fill-blank (fresh)
            {
              id:           'l07-q5',
              format:       'fill-blank',
              question:     `Deliberately placing accents on the off-beats — creating tension and groove — is called ___.`,
              options:      ['syncopation', 'tempo', 'notation', 'polyrhythm'],
              correctIndex: 0,
              explanation:  `Syncopation is the rhythmic technique of emphasising beats or parts of beats that aren't normally accented — the "off-beats" between the main pulse. Rather than landing where the listener expects, the rhythm leans into unexpected moments, creating that feeling of tension, surprise, and irresistible groove. It's central to jazz, funk, Latin music, and much of the popular music that makes people instinctively want to move.`,
            },

            // Q6 — MC (fresh)
            {
              id:           'l07-q6',
              format:       'mc',
              question:     `Why is rhythm often described as the most fundamental element of music?`,
              options:      [
                `Because it is the only element that can be heard without instruments`,
                `Because melody and harmony both depend on it — without rhythm, notes are just sounds floating in time with no pulse, momentum, or organisation`,
                `Because every culture uses the same basic rhythms`,
                `Because rhythm is the simplest element and the easiest to learn`,
              ],
              correctIndex: 2,
              explanation:  `Rhythm is the organising principle of music in time — it's what gives music momentum, pulse, and direction. Melody needs rhythm to move forward. Harmony needs rhythm to have timing and shape. Without rhythm, notes are just sounds with no relationship to each other in time. It's also the element most directly connected to the body — heartbeat, breath, walking — which is why it triggers physical responses like foot-tapping and dancing almost automatically.`,
            },

          ],
        },

        // ── 8. REAL-WORLD ────────────────────────────────────────────────────
        {
          id:   'l07-realworld',
          type: 'real-world',
          content: {
            scenario:    `Kitchen Percussion Band`,
            description: `Gather four household objects that make different sounds when struck — spoons, pots, boxes, books, bottles. Assign a role to each: one as the steady beat, one as a higher rhythm on top, one as a bass sound, one as an accent. Start with just the beat, then add each layer one at a time. You've built a percussion ensemble from scratch. Try changing the tempo (slow it down, then speed it up) and notice how the whole feeling changes. If you have two people, try playing two different rhythms at the same time and feel the polyrhythm that results.`,
            familyAdventure: `Listen together to one piece of music with a strong rhythm — choose whatever genre your family loves. Take turns: one person focuses on finding the beat and tapping it, another listens for any moment the rhythm feels like it "leans" or surprises (that's syncopation). Then find a percussion-led piece from a culture you haven't heard before — West African drumming, Indian tabla, Brazilian samba — and compare how the rhythm feels. What's the same? What's different?`,
            realWorldConnection: `Rhythm is used therapeutically as well as musically — rhythmic drumming has been shown to reduce stress and help people synchronise with each other. Surgeons have been found to work more accurately while listening to their preferred music. Athletes use rhythm in training to coordinate movement. And in every culture on earth, communal music-making through rhythm is one of the primary ways humans bond, celebrate, and mark important moments together.`,
          },
        },

        // ── 9. CELEBRATION ───────────────────────────────────────────────────
        {
          id:   'l07-celebration',
          type: 'celebration',
          content: {
            message: `How beautiful, {name}! You now know that rhythm is not something you either have or you don't — it's a language you can learn, read, feel, and play with anything that makes a sound. Every culture on earth found it because it's woven into being human. Muse loves that you now hear the world as percussion.`,
          },
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
    fetch('/explorer-assets/creative-arts/l07-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l07-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L07] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L07] One or more magazine assets missing'));
}
