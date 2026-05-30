const CREATIVEARTS_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `ca`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-9-10-06`,
      title: `The Music in Everything`,
      duration: 18,
      xpReward: 75,
      badge: `music-hearer`,
      badgeName: `Music Hearer`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome, sound-feeling {name}. Today we step out of visual art and into MUSIC. But not the way most people think about music. Most people think music is "songs you listen to." Music is way bigger than that. Music is in your heartbeat. In the rhythm of your footsteps. In how your favorite person says your name. In the rain on the roof. In the way someone's laugh rises and falls. Music is HOW SOUND BEHAVES OVER TIME, and once you start hearing it, you can never un-hear it. Today, you build the Music-Hearer's Ear. Most people walk through life half-deaf to the music around them. We won't.`,
          headline: `The Music in Everything`,
          subtitle: `Music isn't only songs. It's how sound behaves over time, everywhere.`,
          visual: `/ue-assets/ca/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Rhythm Is the Foundation`,
          paragraphs: [
            `RHYTHM is the foundation of all music. Rhythm is when sound HAPPENS IN TIME with some kind of pattern. Your heartbeat is a rhythm (steady, repeating). Footsteps are a rhythm (left-right, left-right). Waves are a rhythm. Breathing is a rhythm. A clock ticking is a rhythm. Once you start listening for rhythm, you find it EVERYWHERE in daily life. Every song you've ever loved has a rhythm. Even talking has rhythm, your voice rises and falls and pauses in patterns. Researchers studying music have found rhythm is one of the most universal things across human cultures. Every culture that has ever existed has had rhythm music. It's wired into us.`,
            `Here's a simple practice. Right now, find the rhythm of YOUR BREATH. In, out, in, out. That's a rhythm, slower and softer than most music, but real. Now find the rhythm of any clock ticking nearby. That's a different rhythm. Faster, steadier. Now imagine the rhythm of someone walking briskly. Different again. Each rhythm has a FEEL. Slow rhythms feel calm or sad. Fast rhythms feel energetic or anxious. Steady rhythms feel grounded. Uneven rhythms feel unstable or surprising. As an artist, knowing rhythm gives you one of the most powerful tools in all of music, and also in poetry, dance, speech, and even visual art (yes, visual art has rhythm too, repeated shapes form visual rhythm).`,
          ],
          image: `/ue-assets/ca/l06-s1-rhythm.webp`,
          imageCaption: `Rhythm is everywhere. Heartbeat, footsteps, waves, breath. Once you hear it, you hear it everywhere.`,
          vocab: [
            { word: `rhythm everywhere`,
              definition: `Rhythm is sound (or movement) happening in time with some kind of pattern. Heartbeat, footsteps, waves, breathing, clock ticks, all rhythms. Every culture in history has rhythm music; it's wired into humans. Slow rhythms feel calm. Fast rhythms feel energetic. Steady rhythms feel grounded. Uneven rhythms feel unstable.`,
              audioPrompt: `Rhythm is everywhere once you start listening, {name}. Rhythm is when sound happens in time with some kind of pattern. Your heartbeat is a rhythm. Footsteps are a rhythm, left-right, left-right. Waves are a rhythm. Breathing is a rhythm. A clock ticking is a rhythm. Once you listen for rhythm, you find it everywhere in daily life. Every song you've loved has a rhythm. Even talking has rhythm, your voice rises and falls in patterns. Every culture has had rhythm music. It's wired into us.` },
            { word: `the rhythm in speech`,
              definition: `Human speech has rhythm built in — the rise and fall of emphasis, the pauses between thoughts, the pulse of syllables. Different languages have different rhythms. Poetry exploits speech rhythm deliberately. Skilled speakers, preachers, poets, and storytellers all use rhythm to hold attention and create emotion. Listening for rhythm in speech builds musical hearing fast.`,
              audioPrompt: `The rhythm in speech is one of the most accessible places to train your ear, {name}. Human speech has rhythm built in. The rise and fall of emphasis. The pauses between thoughts. The pulse of syllables. Different languages have different rhythms. Spanish feels different from Mandarin. French feels different from English. Poetry exploits speech rhythm deliberately. Skilled speakers, preachers, poets, and storytellers all use rhythm to hold attention and create emotion. Listening for rhythm in how people talk builds musical hearing fast.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Melody Is the Shape of Pitch`,
          paragraphs: [
            `MELODY is the second great pillar of music. Melody is the shape PITCH makes over time. Pitch is how HIGH or LOW a sound is. When you sing "twinkle twinkle little star," your voice moves up and down through different pitches. The shape it makes is the melody. Melody is what you HUM when a song gets stuck in your head. It's the part most people remember from a song. Researchers studying music memory have found that melodies are some of the most powerful memory triggers in the human brain. A melody can pull up a feeling from decades ago.`,
            `Here's the magic. Melodies have SHAPES that carry emotion. RISING melodies (going up in pitch) feel hopeful, climbing, sometimes triumphant. FALLING melodies feel resigned, sad, sometimes peaceful. Melodies that JUMP between high and low feel surprising, playful, sometimes anxious. Melodies that STAY in a narrow range feel calm, controlled, sometimes meditative. The same words sung to a rising melody vs. a falling melody feel completely different emotionally. Composers know this. Filmmakers use this in their scores. As a music-hearer, you start to NOTICE the shape of melodies you hear, and once you do, you can also start MAKING melodies that say what you mean.`,
          ],
          image: `/ue-assets/ca/l06-s2-melody.webp`,
          imageCaption: `Melody is the shape of pitch over time. Rising, falling, jumping, staying. Each shape carries emotion.`,
          vocab: [
            { word: `melody shapes`,
              definition: `Melody is the shape PITCH (how high or low) makes over time. RISING melodies feel hopeful or triumphant. FALLING melodies feel sad or peaceful. JUMPING melodies feel surprising or playful. NARROW-RANGE melodies feel calm or meditative. Same words to different melody shapes = different emotional meaning. Composers know this. You can too.`,
              audioPrompt: `Melody is the shape that pitch makes over time, {name}. Pitch is how high or low a sound is. When you sing twinkle twinkle little star, your voice moves up and down through pitches. The shape it makes is the melody. Melodies have shapes that carry emotion. Rising melodies feel hopeful, climbing, triumphant. Falling melodies feel resigned or sad or peaceful. Melodies that jump between high and low feel surprising or playful. Same words to different melodies feel completely different emotionally.` },
            { word: `music and memory`,
              definition: `Melodies are among the most powerful memory triggers in the human brain. A single melody can pull up feelings from decades ago. Researchers found that melodies activate both emotional and memory regions simultaneously. This is why songs from childhood feel instantly transporting, and why learning set to music improves retention.`,
              audioPrompt: `Music and memory are deeply connected, {name}. Researchers studying music found that melodies activate both emotional and memory regions of the brain simultaneously. A single melody can pull up feelings from decades ago. This is why hearing a song from childhood can transport you instantly. It's also why songs that carry content stick in memory. Learning set to music helps retention. The kid who builds strong musical memory through active listening has a powerful advantage in remembering things that matter to them.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Dynamics, Texture, and the Music in Speech`,
          paragraphs: [
            `Two more concepts that transform how you hear sound. DYNAMICS are how LOUD or SOFT sounds are, and how they change. A whisper followed by a shout has dynamics. A song that builds slowly louder has dynamics. Dynamics carry HUGE emotional weight. The same melody played loud feels triumphant; played soft feels intimate; played starting soft and growing loud feels dramatic. Researchers studying film music have found dynamics are one of the most reliable triggers of emotional response in audiences. The kid who learns to hear dynamics starts noticing why movies and songs make them FEEL things.`,
            `TEXTURE is how sounds LAYER on each other. One person singing alone is a thin texture. A choir of fifty people is a thick texture. A guitar plus a singer is a different texture than ten instruments together. Cultures around the world have developed their own texture traditions, the layered drumming of West African music, the call-and-response of gospel, the dense instrument textures of Latin American salsa, the spare textures of much East Asian classical music. Each texture creates a different emotional world. Finally, notice that SPEECH HAS MUSIC TOO. The rhythm of how someone talks. The melody of their voice rising and falling. The dynamics from whisper to laugh. Speech is a kind of music. Listening musically to speech makes you both a better musician AND a better listener to people.`,
          ],
          image: `/ue-assets/ca/l06-s3-dynamics.webp`,
          imageCaption: `Dynamics (loud/soft) carry emotion. Texture (sound layering) creates worlds. Speech is music too.`,
          vocab: [
            { word: `dynamics, texture, speech as music`,
              definition: `DYNAMICS = how loud or soft sounds are and how they change (whisper to shout, soft to triumphant). Huge emotional weight. TEXTURE = how sounds layer (one voice = thin; choir = thick; cultures have unique texture traditions). SPEECH HAS MUSIC TOO, rhythm, melody, dynamics of how people talk. Listening musically to speech makes you a better musician AND listener.`,
              audioPrompt: `Dynamics, texture, and speech as music, {name}. Dynamics are how loud or soft sounds are and how they change. A whisper followed by a shout has dynamics. The same melody played loud feels triumphant; played soft feels intimate. Texture is how sounds layer on each other. One person singing alone is thin. A choir of fifty is thick. Speech has music too. The rhythm of how someone talks. The melody of their voice rising and falling. Listening musically to speech makes you both a better musician and better listener.` },
            { word: `cultural sound traditions`,
              definition: `Different cultures have developed dramatically different musical textures — the layered polyrhythms of West African drumming, the call-and-response of gospel, the dense textures of Latin American salsa, the spare single-instrument meditations of East Asian classical music, the communal singing of many Indigenous traditions. Studying multiple texture traditions expands what you can hear and make.`,
              audioPrompt: `Cultural sound traditions have created dramatically different musical textures, {name}. West African music often layers multiple rhythms at once, polyrhythm. Gospel uses call-and-response between a leader and group. Latin American salsa stacks dense instrument layers. East Asian classical music often uses spare, single-instrument textures. Many Indigenous traditions center communal singing as community identity. Each texture creates a different emotional world. The music-hearer who studies multiple texture traditions expands what they can hear. And what they can make.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Carry the Music-Hearer's Ear Into Your Making`,
          paragraphs: [
            `Here's how the Music-Hearer's Ear feeds your own making, in ANY art form. If you're a musician, you obviously use this constantly. But also, if you're a WRITER, the rhythm and melody of your sentences matter, great prose has musical flow. If you're a POET, rhythm and melody ARE the form. If you're a DANCER, you're MOVING TO music's rhythm and melody. If you're a VISUAL ARTIST, you can give a painting visual rhythm (repeated shapes) and visual melody (the line your eye travels through the work). If you're an ACTOR, your speech rhythms and dynamics shape every character. The musical principles work across all the arts.`,
            `The practice that builds this is simple. LISTEN MUSICALLY to sounds around you. The rhythm of rain. The melody of your mom's laugh. The dynamics of your sibling getting excited. The texture of a crowded room. Pause sometimes to actually hear what's happening in sound. Then, when you make something (any art form), pay attention to its music, where's the rhythm? Where's the melody? Where do dynamics shift? What's the texture? You'll find that even your visual art and writing have musical qualities once you start listening for them. Muse-truth, music is one of the deepest organizing patterns of human experience. Once you can hear it, you can use it in everything you make. Even the kid who never plays an instrument can become a music-hearer who carries musical thinking into everything.`,
          ],
          image: `/ue-assets/ca/l06-s4-carry.webp`,
          imageCaption: `Music isn't only for musicians. Rhythm, melody, dynamics, texture shape writing, dance, painting, speech.`,
          vocab: [
            { word: `musical thinking across art`,
              definition: `Musical principles work in every art form. Writers care about rhythm and melody of sentences. Poets live by rhythm and melody. Dancers move to music's elements. Visual artists create visual rhythm (repeated shapes) and visual melody (the line your eye travels). Actors shape characters through speech rhythms. Music is an organizing pattern of human experience.`,
              audioPrompt: `Musical thinking across art is how the Music-Hearer's Ear feeds your making, {name}. If you're a writer, the rhythm and melody of your sentences matter. If you're a poet, rhythm and melody are the form. If you're a visual artist, you can give a painting visual rhythm with repeated shapes, and visual melody with the line your eye travels. Even the kid who never plays an instrument can become a music-hearer who carries musical thinking into everything they make.` },
            { word: `listening musically`,
              definition: `The practice of actively attending to the musical qualities of sounds around you — not just songs, but everyday sounds. The rhythm of rain. The melody of a voice rising and falling. The dynamics of conversation shifting from whisper to laughter. The texture of a crowd. Listening musically develops the ear and the creative mind simultaneously, across all art forms.`,
              audioPrompt: `Listening musically is the practice of actively attending to the musical qualities of sounds around you, {name}. Not just songs. Everyday sounds. The rhythm of rain on a roof. The melody of someone's voice rising and falling. The dynamics of a conversation that shifts from whisper to laughter. The texture of a crowded room. The more you listen musically, the more the musical structure of the world reveals itself. This develops the ear and the creative mind simultaneously. It feeds every art form you make.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of hearing music everywhere in order, {name}. From FIRST RHYTHM to ONGOING CARRY. Use the arrows to arrange them.`,
          items: [
            { id: `step-rhythm`,    label: `FIND THE RHYTHM. Listen for the pulse, the pattern in time. Heartbeat, footsteps, ticking, song beats, the rhythm of speech. Rhythm is the foundation under all music`,                   position: 1 },
            { id: `step-melody`,    label: `NOTICE THE MELODY. The shape of pitch over time. Rising feels hopeful, falling feels sad, jumping feels playful, staying-narrow feels calm. Melodies are what you HUM`,                position: 2 },
            { id: `step-dynamics`,  label: `FEEL THE DYNAMICS. How loud or soft, and how they change. Whisper to shout, soft to triumphant. Dynamics are one of the most reliable triggers of emotional response`,                position: 3 },
            { id: `step-texture`,   label: `HEAR THE TEXTURE. How sounds LAYER. One voice (thin), a choir (thick). Cultural traditions of texture (West African drumming, salsa, East Asian spare). Each creates a different feel`, position: 4 },
            { id: `step-carry`,     label: `CARRY IT INTO MAKING. Writing, dance, visual art, speech all have musical qualities. Rhythm, melody, dynamics, texture in everything you make. The music-hearer's ear shapes all your art`, position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of hearing music everywhere: find the rhythm, notice the melody, feel the dynamics, hear the texture, carry it into your making. The world is now musically alive for you. Most people walk through life half-deaf to all this. You won't.`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l06-q1`, format: `true-false`,
              question: `True or false: Music is only "songs you listen to."`,
              correctAnswer: false,
              explanation: `False. Music is HOW SOUND BEHAVES OVER TIME. It's in your heartbeat, footsteps, the rhythm of rain, the melody of someone's voice rising and falling, the dynamics of laughter, the texture of a crowded room. Music is everywhere once you start listening for it. Songs are one form of music, not the only one.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is RHYTHM?`,
              options: [
                `Just drums`,
                `Sound (or movement) happening in TIME with a PATTERN. Heartbeat, footsteps, waves, ticking, even speech. The foundation under ALL music. Every culture in history has rhythm music`,
                `Random sound`,
                `Just for musicians`,
              ],
              correctIndex: 1,
              explanation: `Rhythm is when sound happens in time with some kind of pattern. Heartbeat is a rhythm. Footsteps are a rhythm. Waves, breathing, ticking, even the rise and fall of speech, all rhythms. Rhythm is the foundation of all music. Every culture in history has had rhythm music. It's wired into humans.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is MELODY?`,
              options: [
                `Just singing`,
                `The SHAPE that PITCH (high/low) makes over time. What you HUM when a song is stuck in your head. Melody shapes carry emotion`,
                `Random sound`,
                `Loudness`,
              ],
              correctIndex: 1,
              explanation: `Melody is the shape pitch (how high or low a sound is) makes over time. When you sing "twinkle twinkle," your voice moves up and down through pitches. The shape it makes is the melody. Melody is what you hum when a song gets stuck. Melodies are powerful memory triggers; a melody can pull up feelings from decades ago.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `How do MELODY SHAPES carry emotion?`,
              options: [
                `They don't`,
                `RISING = hopeful/triumphant. FALLING = sad/peaceful. JUMPING = surprising/playful. NARROW-RANGE = calm/meditative. Same words to different melodies feel completely different`,
                `Just random`,
                `Always same feeling`,
              ],
              correctIndex: 1,
              explanation: `Melody shapes carry emotion. RISING melodies (going up in pitch) feel hopeful, climbing, triumphant. FALLING melodies feel resigned, sad, peaceful. JUMPING melodies feel surprising, playful, anxious. NARROW-RANGE melodies feel calm, controlled, meditative. Same words sung to different melody shapes feel completely different emotionally.` },

            { id: `l06-q5`, format: `multiple-choice`,
              question: `What are DYNAMICS in music?`,
              options: [
                `Speed`,
                `How LOUD or SOFT sounds are and how they CHANGE. Whisper to shout, soft to triumphant. One of the most reliable triggers of emotional response in music and film`,
                `Just volume`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Dynamics are how loud or soft sounds are, and how they change. A whisper followed by a shout has dynamics. A song that builds slowly louder has dynamics. The same melody played loud feels triumphant; played soft feels intimate. Research shows dynamics are one of the most reliable triggers of emotional response in music and film.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What is TEXTURE in music?`,
              options: [
                `How rough sounds feel`,
                `How sounds LAYER on each other. One voice (thin texture), a choir (thick texture). Cultures have different texture traditions (West African drumming, salsa, East Asian spare)`,
                `Just one sound`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Texture is how sounds layer on each other. One person singing alone is a thin texture. A choir of fifty is a thick texture. Cultures around the world have developed unique texture traditions, the layered drumming of West African music, the call-and-response of gospel, the dense textures of Latin American salsa, the spare textures of much East Asian classical music. Each texture creates a different emotional world.` },

            { id: `l06-q7`, format: `true-false`,
              question: `True or false: SPEECH has music in it.`,
              correctAnswer: true,
              explanation: `True. Speech has rhythm (how someone talks in time), melody (the way the voice rises and falls), dynamics (from whisper to laugh), and even texture (one voice vs. a crowded room). Listening musically to speech makes you both a better musician AND a better listener to people. Speech is a kind of music.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `Do you need to play an instrument to use MUSICAL THINKING in art?`,
              options: [
                `Yes, only musicians`,
                `No. Musical principles (rhythm, melody, dynamics, texture) work in WRITING, POETRY, DANCE, VISUAL ART, SPEECH. Even kids who never play an instrument can carry musical thinking into everything`,
                `Random`,
                `Only for songs`,
              ],
              correctIndex: 1,
              explanation: `No. Musical principles work in every art form. Writers care about rhythm and melody of sentences. Poets live by rhythm and melody. Dancers move to music's elements. Visual artists create visual rhythm (repeated shapes) and visual melody (the line your eye travels). Actors shape characters through speech rhythms. Even kids who never play an instrument can carry musical thinking into everything they make.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Take a listening breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Stop and listen for 30 seconds RIGHT NOW. What rhythms can you hear (clock, breath, distant sounds)? What melodies?` },
            { id: `r2`, text: `Think of someone whose voice you love (a friend, a parent, a teacher). Describe its MUSIC — its rhythm, melody, dynamics. What makes it distinct?` },
            { id: `r3`, text: `What's a favorite song? Try to describe its melody SHAPE (rising? falling? jumping? narrow?) and what feeling that shape creates.` },
            { id: `r4`, text: `What art form do you make most (drawing, writing, dance, music, none yet)? How could you bring MUSICAL THINKING into it — rhythm, melody, dynamics, texture?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Research on music and the brain is one of the most exciting fields in modern neuroscience. Studies have found that music activates more parts of the brain simultaneously than almost any other activity. Rhythm processing involves motor regions (your body literally wants to move). Melody processing involves emotional and memory regions (which is why melodies can trigger feelings from years ago). Music has been shown to support learning, mood, social bonding, and even physical healing. The musical principles you've learned today (rhythm, melody, dynamics, texture) are recognized across every musical tradition humans have developed. They're universal. Muse-note: you live in a world filled with sound, but most of it goes unheard. People wear earbuds while walking through the world's actual soundscape. The Music-Hearer's Ear is a way of being more alive to sound everywhere, not just to songs. The kid who builds this ear becomes the artist whose work has MUSIC in it (whatever form their art takes), and also becomes the human who notices the rhythm in their grandmother's voice, the melody of their best friend's laugh, the dynamics of a rainstorm. Listening musically is a way of loving the world.`,
          familyAdventure: `Family Music Listen. As a family, pick ONE song everyone loves and listen to it together this week with NEW ears. What's the rhythm doing? What's the melody shape? Where are the loud and soft parts (dynamics)? What instruments are layering together (texture)? Adults model curious listening. You're not analyzing the song to death, just noticing what's actually happening in it musically. Many families find this becomes a new way to share music together. The song you've all heard 100 times sounds different when you're listening for these things. Building musical listening together is one of the most underrated family traditions.`,
          creativePrompt: {
            intro: `Write about the music in your life — the rhythms and melodies you hear around you.`,
            floor: `Write at least 5 sentences. Name rhythms and melodies in your daily life.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on your developing Music-Hearer's Ear.`,
            open: `Write as much as you want. Describe the RHYTHMS in your daily life (your morning routine, your home's sounds, your family's voices, the way your school day pulses). Describe MELODIES you hear (a favorite person's voice, songs that won't leave you, the rise and fall of language around you). Reflect on what art form you make most (or want to make) and how you could carry MUSICAL THINKING into it. Identify one specific musical-listening practice you'll start (paying attention to rhythm in speech, finding the melody in everyday sounds, noticing dynamics in conversation, anything). End with a promise to your future-music-hearing-self about the listening you want to build. Make it specific and alive.`,
            frames: [
              `Rhythms in my daily life: ___.`,
              `Melodies I hear: ___.`,
              `The art form I make most: ___.`,
              `How I'll carry musical thinking into it: ___.`,
              `One specific musical-listening practice: ___.`,
              `A promise to my future music-hearing-self: ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Beautifully heard, {name}. You're now a Music Hearer. Rhythm in everything. Melody as the shape of pitch over time. Dynamics carry emotion. Texture creates worlds. Speech has music too. Musical principles work in every art form, not just songs. Most people walk through life half-deaf. You won't. Next, we go deep into your own voice. Singing & The Voice You Have. Fluttering on. Muse 🦋.`,
          badge: `music-hearer`,
          badgeName: `Music Hearer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default CREATIVEARTS_UE_L06;
