// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L11 — Poetry: Rhyme, Rhythm, and Figurative Language
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.4 / RL.2-3.5
// REWRITE v2 (May 2026): Grade 1 accessible, RHYME/SIMILE/METAPHOR
// 3-bucket identification game tests the three core poetry tools
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
          guideText: `Welcome back, {name}! Today we step into a different kind of writing — POETRY! Poems use words like MUSIC. They pack big feelings into small spaces. Today you'll meet RHYME, RHYTHM, SIMILE, and METAPHOR — the tools poets use. Let's go!`,
          headline: `Poetry: Rhyme, Rhythm, and Figurative Language`,
          subtitle: `How poems work — and why they make us feel so much`,
          visual: `/explorer-assets/ela/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Poems Are Different`,
          paragraphs: [
            `Poems aren't like other writing! They're SHORTER. They look DIFFERENT on the page — short lines, often in special shapes.`,
            `Poems use SOUNDS in special ways — words that rhyme, beats that thump! Poems use IMAGES — pictures that bloom in your mind. Poems use FEELINGS like paint. A poem can fit on one page and still make you cry, laugh, or wonder! Poetry is WORD-MAGIC!`,
          ],
          image: `/explorer-assets/ela/l11-s1-poetry-magic.webp`,
          imageCaption: `Poetry is word-magic. Sounds, shapes, pictures, feelings!`,
          vocab: [
            { word: `poetry`, definition: `Writing that uses sound, rhythm, and images.`,
              audioPrompt: `Poetry is a special kind of writing. It uses sound and rhythm and images to make readers feel things. Poems are often shorter than stories — but packed with meaning!` },
            { word: `poem`,   definition: `A single piece of poetry.`,
              audioPrompt: `A poem is a single piece of poetry. Some poems are just a few lines. Others fill many pages. Some rhyme. Others don't. Poems come in many shapes and sizes!` },
            { word: `image`,  definition: `A picture made by words.`,
              audioPrompt: `An image is a picture made by words. Poems are full of word images. When a poet writes "the lake was a sheet of silver," you can SEE the lake in your mind!` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Tool 1: RHYME`,
          paragraphs: [
            `One of poetry's most famous tools is RHYME — words that end with the SAME SOUND!`,
            `Cat and HAT rhyme! Star and FAR rhyme! Tree and BEE rhyme! Rhyming words feel like a little MUSICAL CLICK at the end of a line. Many famous poets use rhymes — Dr. Seuss, Shel Silverstein, Jack Prelutsky! Rhyme makes poems MEMORABLE!`,
          ],
          image: `/explorer-assets/ela/l11-s2-rhyme.webp`,
          imageCaption: `Rhyme — words that end alike. Cat/hat. Star/far!`,
          vocab: [
            { word: `rhyme`,     definition: `Words that end with the same sound.`,
              audioPrompt: `A rhyme is when two words end with the same sound. Cat and hat. Star and far. Day and play. Rhyming words have matching endings — they make poems feel like music!` },
            { word: `sound`,     definition: `What you hear with your ears.`,
              audioPrompt: `Sound is what you hear with your ears. Rhyme is all about matching sounds. Two words can be spelled differently — like "bee" and "tree" — but still rhyme!` },
            { word: `memorable`, definition: `Easy to remember.`,
              audioPrompt: `Memorable means easy to remember. Rhymes make poems memorable. Songs work the same way — that's why you can sing songs you haven't heard in years!` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tool 2: RHYTHM`,
          paragraphs: [
            `Poems have RHYTHM — a beat, like music! Some syllables are STRONG. Others are soft.`,
            `Read this out loud: "The CAT sat ON the MAT." Hear the BEAT? CAT-on-MAT! Strong-soft-strong. Poems use rhythm to make words DANCE! Some poems have a steady drumbeat. Others change rhythm to surprise you. Poetry sounds best out loud!`,
          ],
          image: `/explorer-assets/ela/l11-s3-rhythm.webp`,
          imageCaption: `Rhythm — the beat of words. Read aloud to feel it!`,
          vocab: [
            { word: `rhythm`,   definition: `The beat or pattern of strong and soft syllables.`,
              audioPrompt: `Rhythm is the beat or pattern of strong and soft syllables in a poem. Like a drumbeat. Boom-tap-boom-tap. Poets choose words so the syllables BEAT just right!` },
            { word: `beat`,     definition: `A pulse or thump.`,
              audioPrompt: `A beat is a pulse or thump. Your heart has a beat. Music has a beat. Poems have a beat too! The beat is the pattern of strong stresses in the words!` },
            { word: `syllable`, definition: `A small chunk of sound in a word.`,
              audioPrompt: `A syllable is a small chunk of sound in a word. "Cat" has ONE. "Rabbit" has TWO — rab-bit. "Butterfly" has THREE — but-ter-fly. Syllables build rhythm!` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tool 3: SIMILE`,
          paragraphs: [
            `Poets use a tool called SIMILE to make COMPARISONS!`,
            `A simile compares two different things using the words LIKE or AS. "Her eyes were LIKE stars!" "He was AS TALL AS a tree!" "The lake glittered LIKE glass!" Similes make ordinary things suddenly INTERESTING. They help us see in new ways. When you spot "like" or "as" comparing two things — that's a simile!`,
          ],
          image: `/explorer-assets/ela/l11-s4-simile.webp`,
          imageCaption: `Simile — compares two things using LIKE or AS!`,
          vocab: [
            { word: `simile`,     definition: `A comparison using LIKE or AS.`,
              audioPrompt: `A simile is a comparison using LIKE or AS. "She was brave as a lion." "The clouds looked like cotton balls." Similes connect two different things to show something fresh!` },
            { word: `comparison`, definition: `Putting two things next to each other.`,
              audioPrompt: `A comparison is putting two things next to each other to see how they relate. Similes are tiny comparisons that paint pictures!` },
            { word: `like or as`, definition: `The signal words of a simile.`,
              audioPrompt: `Like and as are the signal words of a simile. They're the giveaway! If you see one thing compared to another using "like" or "as," that's a simile!` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Tool 4: METAPHOR`,
          paragraphs: [
            `Now meet METAPHOR — simile's bolder cousin!`,
            `A metaphor compares two things by saying one IS the other — WITHOUT "like" or "as." "Her heart was a stone." (It's not REALLY a stone — but it FELT that way.) "The classroom was a zoo!" (Loud, wild, chaotic!) Metaphors are STRONGER than similes. They don't say "like" — they say "IS!"`,
          ],
          image: `/explorer-assets/ela/l11-s5-metaphor.webp`,
          imageCaption: `Metaphor — one thing IS another. No like or as!`,
          vocab: [
            { word: `metaphor`,   definition: `A comparison without LIKE or AS.`,
              audioPrompt: `A metaphor is a comparison without using "like" or "as." It says one thing IS another. "The moon is a silver coin." "Time is a thief." Metaphors are bold!` },
            { word: `is`,         definition: `The word that makes a metaphor.`,
              audioPrompt: `Is is the word that makes a metaphor. "Her smile is sunshine." "My grandpa was a rock." These words connect the two things being compared!` },
            { word: `not really`, definition: `Metaphors aren't literally true.`,
              audioPrompt: `Not really — metaphors aren't literally true. Her heart wasn't ACTUALLY a stone. The classroom wasn't ACTUALLY a zoo. But metaphors describe how things FEEL!` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Poetry Makes You FEEL`,
          paragraphs: [
            `Here's the BEST thing about poetry — it makes you FEEL!`,
            `Stories tell you a tale. Articles tell you facts. Poems make you FEEL — happy, sad, brave, mysterious, hopeful, lonely! A poem can put a feeling INTO you in just a few lines. That's poetry's superpower! Read poems out loud. Some poems will become FRIENDS you return to your whole life!`,
          ],
          image: `/explorer-assets/ela/l11-s6-poetry-feeling.webp`,
          imageCaption: `Poetry makes you feel. Big feelings packed into small spaces!`,
          vocab: [
            { word: `feel`,     definition: `To experience an emotion.`,
              audioPrompt: `To feel is to experience an emotion. Poetry makes you feel. Joy. Sadness. Wonder. Hope. Sometimes feelings you don't even have words for!` },
            { word: `out loud`, definition: `Speaking so you can hear it.`,
              audioPrompt: `Out loud means speaking so you can hear it. Poetry is BEST read out loud. Silent reading misses the rhythm. Silent reading misses the music!` },
            { word: `friend`,   definition: `Someone close to you.`,
              audioPrompt: `A friend is someone close to you. Some poems become friends. You read them when you're sad. You memorize them. They become PART of you!` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 lines of poetry. Drag each one — is it a RHYME, a SIMILE, or a METAPHOR?`,
          buckets: [
            { id: `rhyme`,    label: `🎵 RHYME (same end sound)`,    color: `#FBBF24` },
            { id: `simile`,   label: `🔗 SIMILE (uses like/as)`,    color: `#34D399` },
            { id: `metaphor`, label: `✨ METAPHOR (one IS another)`, color: `#A78BFA` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `The cat sat on the mat.`,
              matchPhrase: `Yes! That's RHYME — cat and mat end with the same sound!`,
              correctMatch: `rhyme` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `Her eyes were like stars in the night.`,
              matchPhrase: `Great! That's a SIMILE — it uses LIKE to compare eyes to stars!`,
              correctMatch: `simile` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `My brother is a tornado in the morning.`,
              matchPhrase: `Yes! That's a METAPHOR — it says he IS a tornado (no like or as)!`,
              correctMatch: `metaphor` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `She was as quiet as a mouse.`,
              matchPhrase: `Perfect! That's a SIMILE — it uses AS to compare her to a mouse!`,
              correctMatch: `simile` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is RHYME?`,
              options: [`Words that end with the SAME sound`, `Words that look the same`, `Words with the same letters`, `Words that start the same`],
              correctIndex: 0,
              explanation: `Rhyme is when words end with the same sound. Cat and hat. Star and far. The musical click at the end of a line!` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is RHYTHM in poetry?`,
              options: [`The colors of words`, `The beat or pattern of strong and soft syllables`, `Just the length`, `The author's name`],
              correctIndex: 1,
              explanation: `Rhythm is the beat — the pattern of strong and soft syllables. Like a drumbeat in words. Best heard OUT LOUD!` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `"He was as fast AS a cheetah." What kind of figurative language?`,
              options: [`Simile`, `Metaphor`, `Rhyme`, `Rhythm`],
              correctIndex: 0,
              explanation: `Simile! It uses "as" to compare. Similes use LIKE or AS!` },
            { id: `l11-q4`, format: `true-false`,
              question: `Metaphors say one thing IS another, without using "like" or "as."`,
              correctAnswer: true,
              explanation: `True! "Her heart was a stone." "The classroom was a zoo." Metaphors are bolder than similes!` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `Poetry is best read ___ — so you can hear the rhythm and rhyme.`,
              options: [`out loud`, `silently`, `backwards`, `upside down`],
              correctIndex: 0,
              explanation: `Out loud! Poetry comes alive when you read it out loud. You hear the rhythm. You feel the music!` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `Do ALL poems have to rhyme?`,
              options: [`Yes, or they're not poems`, `No — rhyme is one tool, but many great poems don't rhyme`, `Only on Tuesdays`, `Only if they're in books`],
              correctIndex: 1,
              explanation: `No! Many wonderful poems don't rhyme. Rhyme is just one tool. Rhythm, simile, and metaphor are others!` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Poetry is EVERYWHERE — even places you don't expect! Song lyrics are poetry. Many rap verses use rhyme, rhythm, simile, and metaphor! Picture books often have poetry-like rhythm too. Once you learn these tools, you'll spot them in songs and movies your whole life!`,
          familyAdventure: `Find a kid-friendly poetry book — Shel Silverstein, Jack Prelutsky, or any! Read poems together OUT LOUD. Take turns. Notice the rhymes. Clap the rhythm. Find a simile or metaphor in each poem. Pick a favorite and read it twice!`,
          creativePrompt: `Write a TINY poem about something you love — your pet, a food, a season! Use at least ONE tool: rhyme, rhythm, simile, or metaphor. Just 4 lines is plenty! Read it out loud. Share it with someone!`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how poetry WORKS — rhyme, rhythm, simile, and metaphor! You know to read poems out loud. You know not all poems rhyme. You know metaphors aren't literal. Poetry is special WORD-MAGIC! Some poems will become friends for your whole life! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L11] Loaded: "Poetry" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
