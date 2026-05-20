// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L11 — Poetry: Rhyme, Rhythm, and Figurative Language
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.4 / RL.2-3.5
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L11 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-11`,
      title:     `Poetry: Rhyme, Rhythm, and Figurative Language`,
      duration:  12,
      xpReward:  50,
      badge:     `poetry-explorer`,
      badgeName: `Poetry Explorer`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Today we step into a different kind of writing — POETRY. Poems use words like music. They pack BIG feelings into SHORT spaces. They make pictures in your mind. They surprise you. They make you feel things prose sometimes can't. Today, you'll meet rhyme, rhythm, simile, and metaphor — the tools poets use. Let's begin.`,
          headline: `Poetry: Rhyme, Rhythm, and Figurative Language`,
          subtitle: `How poems work — and why they make us feel so much in so few words`,
          visual: `/explorer-assets/ela/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Poems Are Different`,
          paragraphs: [
            `Poems aren't like other writing. They're SHORTER. They look DIFFERENT on the page — short lines, often in a special shape.`,
            `Poems use SOUNDS in a special way — words that rhyme, beats that thump. Poems use IMAGES — pictures that bloom in your mind. Poems use FEELINGS like paint. A poem can fit on one page and still make you cry or laugh or wonder. Poetry is word-magic. Let's learn its tools.`,
          ],
          image: `/explorer-assets/ela/l11-s1-poetry-magic.webp`,
          imageCaption: `Poetry is word-magic. Sounds, shapes, pictures, feelings. Big things in small spaces.`,
          vocab: [
            { word: `poetry`,         definition: `A special kind of writing that uses sound, rhythm, and images.`,
              audioPrompt: `Poetry, {name}, is a special kind of writing. It uses sound and rhythm and images to make readers feel and see and think. Poems are often shorter than stories.` },
            { word: `poem`,           definition: `A single piece of poetry. Poems can be very short or pages long.`,
              audioPrompt: `A poem, {name}, is a single piece of poetry. Some poems are just a few lines long. Others fill many pages. Some poems rhyme. Others don't. Some are funny. Others are sad. Poems come in many shapes and sizes — but they all use words in special, careful ways.` },
            { word: `image`,          definition: `A picture made by words. Poems are full of word IMAGES.`,
              audioPrompt: `An image, {name}, is a picture made by words. Poems are full of word images. When a poet writes 'the lake was a sheet of silver,' you can SEE the lake in your mind. That's an image.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `RHYME: Words That Sound Alike`,
          paragraphs: [
            `One of poetry's most famous tools is RHYME — words that end with the SAME SOUND.`,
            `Cat and HAT rhyme. Star and FAR rhyme. Tree and BEE rhyme. Rhyming words feel like a little MUSICAL CLICK at the end of a line. Many famous poets use rhymes — Dr. Seuss, Shel Silverstein, Jack Prelutsky. Rhyme makes poems MEMORABLE. You can recite them by heart because the sounds connect.`,
          ],
          image: `/explorer-assets/ela/l11-s2-rhyme.webp`,
          imageCaption: `Rhyme — words that end alike. Cat/hat. Star/far. The musical click at the end of a line.`,
          vocab: [
            { word: `rhyme`,          definition: `Words that end with the same sound. Cat and hat RHYME.`,
              audioPrompt: `A rhyme, {name}, is when two words end with the same sound. Cat and hat. Bat and sat. Star and far. Day and play. Rhyming words have matching endings. Poets use rhyme to make their poems feel like music.` },
            { word: `sound`,          definition: `What you hear with your ears. Rhyme is all about matching SOUNDS.`,
              audioPrompt: `Sound, {name}, is what you hear with your ears. Rhyme is all about matching sounds. Two words can be spelled differently — like 'bee' and 'tree' — but still rhyme because they SOUND alike at the end.` },
            { word: `memorable`,      definition: `Easy to remember. Rhymes make poems MEMORABLE.`,
              audioPrompt: `Memorable, {name}, means easy to remember. Rhymes make poems memorable. Songs work the same way — that's why you can sing songs you haven't heard in years. The rhyme and music help your brain hold onto them.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `RHYTHM: The Beat of Words`,
          paragraphs: [
            `Poems have RHYTHM — a beat, like music. Some syllables are STRONG. Others are soft.`,
            `Read this out loud: "The CAT sat ON the MAT." Hear the BEAT? CAT-on-MAT. Strong-soft-strong. Poems use rhythm to make words DANCE. Some poems have a steady drumbeat. Others change rhythm to surprise you. Rhythm is invisible until you read aloud — then you feel it in your bones. Poetry sounds best out loud.`,
          ],
          image: `/explorer-assets/ela/l11-s3-rhythm.webp`,
          imageCaption: `Rhythm — the beat of words. Strong syllables, soft syllables. Words that dance. Read aloud to feel it.`,
          vocab: [
            { word: `rhythm`,         definition: `The beat or pattern of strong and soft syllables in a poem.`,
              audioPrompt: `Rhythm, {name}, is the beat or pattern of strong and soft syllables in a poem. Like a drumbeat. Boom-tap-boom-tap. Poets choose their words carefully so the syllables BEAT in a way that feels good.` },
            { word: `beat`,           definition: `A pulse or thump. Rhythm is made of beats.`,
              audioPrompt: `A beat, {name}, is a pulse or thump. Your heart has a beat. Music has a beat. Poems have a beat too. The beat is the pattern of strong stresses in the words. BUMP-tap-BUMP-tap.` },
            { word: `syllable`,       definition: `A small chunk of sound in a word. Cat has ONE syllable. Rabbit has TWO.`,
              audioPrompt: `A syllable, {name}, is a small chunk of sound in a word. 'Cat' has ONE syllable. 'Rabbit' has TWO — rab-bit. 'Butterfly' has THREE — but-ter-fly. Syllables are the building blocks of rhythm.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `SIMILE: Like or As`,
          paragraphs: [
            `Poets use a tool called SIMILE to make COMPARISONS.`,
            `A simile compares two different things using the words LIKE or AS. "Her eyes were LIKE stars." "He was as TALL AS a tree." "The lake glittered like glass." Similes make ordinary things suddenly INTERESTING. They help us see in new ways. When you spot a "like" or "as" comparing two different things, you've found a simile. They're little surprise-pictures.`,
          ],
          image: `/explorer-assets/ela/l11-s4-simile.webp`,
          imageCaption: `Simile — compares two different things using LIKE or AS. "Her eyes were like stars."`,
          vocab: [
            { word: `simile`,         definition: `A comparison using LIKE or AS. "Brave AS a lion" is a simile.`,
              audioPrompt: `A simile, {name}, is a comparison using LIKE or AS. 'She was brave as a lion. ' 'The clouds looked like cotton balls. ' 'His feet thundered like an elephant's. ' Similes connect two different things to show something fresh.` },
            { word: `comparison`,     definition: `Putting two things next to each other to see how they relate.`,
              audioPrompt: `A comparison, {name}, is putting two things next to each other to see how they relate. We learned about compare and contrast already. Similes are tiny comparisons.` },
            { word: `like or as`,     definition: `The signal words of a simile. If a comparison uses LIKE or AS, it's a simile.`,
              audioPrompt: `'Like' and 'as,' {name}, are the signal words of a simile. They're the giveaway. If you see one thing being compared to another using 'like' or 'as,' that's a simile. 'Quiet as a mouse. ' 'Sweet like honey. ' 'Tough as nails.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `METAPHOR: Without Like or As`,
          paragraphs: [
            `Now meet METAPHOR — simile's bolder cousin.`,
            `A metaphor compares two things by saying one IS the other — WITHOUT using "like" or "as." "Her heart was a stone." (It's not REALLY a stone — but emotionally, it felt that way.) "The classroom was a zoo." (Loud, wild, chaotic.) Metaphors are stronger than similes. They don't say "like" — they say "is." Used carefully, they pack huge meaning into tiny words.`,
          ],
          image: `/explorer-assets/ela/l11-s5-metaphor.webp`,
          imageCaption: `Metaphor — one thing IS another. No like or as. "Her heart was a stone." Bold and direct.`,
          vocab: [
            { word: `metaphor`,       definition: `A comparison without LIKE or AS. "The moon IS a silver coin."`,
              audioPrompt: `A metaphor, {name}, is a comparison without using 'like' or 'as. ' It says one thing IS another. 'The moon is a silver coin. ' 'My brother is a tornado in the morning. ' 'Time is a thief. ' Metaphors are bold.` },
            { word: `is`,             definition: `The word that makes a metaphor. "Her smile IS sunshine."`,
              audioPrompt: `Is, {name}, is the word that makes a metaphor. Or 'are' or 'was' or 'were. ' These words connect the two things being compared. 'Her smile is sunshine. ' 'My grandpa was a rock. ' 'Those kids are angels.` },
            { word: `not really`,     definition: `Metaphors aren't LITERALLY true — they're a way of describing feelings.`,
              audioPrompt: `Not really, {name} — metaphors aren't literally true. Her heart wasn't ACTUALLY a stone. The classroom wasn't ACTUALLY a zoo. But metaphors describe how things FEEL — and that feeling is more important than the literal facts. Smart readers don't take metaphors literally. They read them as feeling-pictures.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Poetry Makes You Feel`,
          paragraphs: [
            `Here's the BEST thing about poetry — it makes you FEEL.`,
            `Stories tell you a tale. Articles tell you facts. Poems make you FEEL — happy, sad, in love, brave, mysterious, hopeful, lonely. A poem can put a feeling INTO you in just a few lines. That's poetry's superpower. Read poems out loud. Notice the feelings they wake up in you. Some poems will become FRIENDS you return to your whole life.`,
          ],
          image: `/explorer-assets/ela/l11-s6-poetry-feeling.webp`,
          imageCaption: `Poetry makes you feel. Happy, sad, hopeful, brave. Big feelings packed into small spaces.`,
          vocab: [
            { word: `feel`,           definition: `To experience an emotion. Poetry makes you FEEL things deeply.`,
              audioPrompt: `To feel, {name}, is to experience an emotion. Poetry makes you feel. Joy. Sadness. Wonder. Hope. Sometimes feelings you don't even have words for.` },
            { word: `out loud`,       definition: `Speaking so others can hear. Poetry is best read OUT LOUD.`,
              audioPrompt: `Out loud, {name}, means speaking so others can hear — or just loud enough to hear yourself. Poetry is best read out loud. Reading silently misses the rhythm. Reading silently misses the rhyme. Reading silently misses the music.` },
            { word: `friend`,         definition: `Someone close to you. Some poems become FRIENDS you keep your whole life.`,
              audioPrompt: `A friend, {name}, is someone close to you. Some poems become friends. You read them when you're sad. You read them when you're happy. You memorize them. You share them. They become PART of you.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `Rhyming words end with the SAME SOUND — like cat and hat, star and far.`,
              matchPhrase: `Yes! Rhyming words have matching end sounds. They give poems that musical click. Rhyme makes poems memorable.`,
              correctMatch: `fact` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `Similes use the words LIKE or AS to compare two things.`,
              matchPhrase: `True! "Brave like a lion." "Quiet as a mouse." Similes connect two different things using like or as. They make ordinary things suddenly interesting.`,
              correctMatch: `fact` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `All poems MUST rhyme — if they don't rhyme, they're not poetry.`,
              matchPhrase: `Not true! Many wonderful poems don't rhyme at all. Rhyme is one tool. But there are others — rhythm, imagery, simile, metaphor. Poems can use some, all, or none.`,
              correctMatch: `myth` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `When a poet writes "her heart was a stone," she literally means a rock is in her chest.`,
              matchPhrase: `Definitely not! That's a METAPHOR — describing how her heart FELT, not what it actually was. Metaphors describe feelings, not literal facts.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is RHYME?`,
              options: [`When words end with the SAME sound`, `When words look the same`, `When words have the same number of letters`, `When words start with the same letter`],
              correctIndex: 0,
              explanation: `Rhyme is when words end with the same sound. Cat and hat. Star and far. The musical click at the end of a line.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is RHYTHM in poetry?`,
              options: [`The colors of the words`, `The beat or pattern of strong and soft syllables`, `Just the length of the poem`, `The author's name`],
              correctIndex: 1,
              explanation: `Rhythm is the beat or pattern of strong and soft syllables. Like a drumbeat in words. Best heard when you read poems OUT LOUD.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `"He was as fast AS a cheetah." What kind of figurative language is this?`,
              options: [`Simile`, `Metaphor`, `Rhyme`, `Rhythm`],
              correctIndex: 0,
              explanation: `Simile! It uses "as" to compare two things. "Fast AS a cheetah." Similes use LIKE or AS.` },
            { id: `l11-q4`, format: `true-false`,
              question: `Metaphors say one thing IS another, without using "like" or "as."`,
              correctAnswer: true,
              explanation: `True! "Her heart was a stone." "The classroom was a zoo." Metaphors are bolder than similes. They say one thing IS another — no like or as.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `Poetry is best read ___ — so you can hear the rhythm and rhyme.`,
              options: [`out loud`, `silently`, `backwards`, `upside down`],
              correctIndex: 0,
              explanation: `Out loud! Poetry comes alive when you read it out loud. You hear the rhythm. You hear the rhyme. You feel the music. Reading silently misses half the magic.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `Do ALL poems have to rhyme?`,
              options: [`Yes, or they're not poems`, `No — rhyme is one tool, but many great poems don't rhyme at all`, `Only on Tuesdays`, `Only if they're in books`],
              correctIndex: 1,
              explanation: `No! Many wonderful poems don't rhyme. Rhyme is one tool. So are rhythm, imagery, simile, metaphor. Poets can use some, all, or none of these tools.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Poetry is EVERYWHERE — even places you don't expect. Song lyrics are poetry. Many rap verses use rhyme, rhythm, simile, and metaphor — they're full of poetic tools. Picture book texts often have poetry-like rhythm. Even some advertising uses poetic language. The poetry skills you're building help you notice patterns in songs, movies, and music your whole life. Poetry is one of humanity's oldest art forms — and it still surrounds us every day.`,
          familyAdventure: `Find a kid-friendly poetry book — Shel Silverstein, Jack Prelutsky, Langston Hughes, or any anthology. Read poems together OUT LOUD. Take turns. Notice the rhymes. Clap the rhythm. Find a simile or metaphor in each poem. Pick a favorite and read it twice. Notice how it feels different the second time.`,
          creativePrompt: `Write a TINY poem about something you love — your pet, a food, a season, a person. Use at least ONE of these tools: rhyme (two words that end the same), rhythm (clap-able beat), simile (using like or as), or metaphor (saying one thing IS another). Just 4 lines is plenty. Read it out loud. Share it with someone.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how poetry WORKS — rhyme, rhythm, simile, and metaphor. You know to read poems out loud. You know that not all poems rhyme. You know metaphors aren't literal. Poetry is a special kind of word-magic. Some poems will become friends you return to your whole life. I'm proud of you. Thank you for journeying with me.`,
          badge: `poetry-explorer`,
          badgeName: `Poetry Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L11] Loaded: "Poetry: Rhyme, Rhythm, and Figurative Language" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
