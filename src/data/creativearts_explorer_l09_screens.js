// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L09 — Poetry: Rhyme, Rhythm, and Imagery
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L09 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-09`,
      title:     `Poetry: Rhyme, Rhythm, and Imagery`,
      duration:  12,
      xpReward:  50,
      badge:     `poet`,
      badgeName: `Poet`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Here's something I love about poetry, {name}: it's the art form that does the most with the fewest words. A short poem can make you feel something that a thousand-page novel couldn't quite reach. It works differently from prose — through compression, through sound, through the surprise of an unexpected image. And once you understand the tools poets use — rhyme, rhythm, imagery — language itself becomes something different. Not just information to transfer. A material to shape. Today we're going to look at how poetry works and why it has the effect it does. You might leave wanting to write one of your own.`,
          headline: `Poetry: Rhyme, Rhythm, and Imagery`,
          subtitle: `Poetry is the art form that does the most with the fewest words — it uses sound, image, and surprise to create feelings that ordinary language can't quite reach. Once you understand its tools, language itself becomes a playground`,
          visual: `/explorer-assets/creative-arts/l09-welcome.png`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Imagery: Making Readers See`,
          paragraphs: [
            `**Imagery** is the use of specific, sensory details to create a vivid picture in the reader's mind — not just what something looks like, but how it sounds, smells, tastes, and feels. The difference between "the beach was nice" and "salt stung my lips and cold sand shifted under my feet as the waves hissed back" is the difference between telling and **showing**. Great imagery creates a felt experience — it pulls the reader into the poem's world rather than describing it from the outside. The key to powerful imagery is **specificity**: not "a flower" but "a bent yellow tulip half-buried in snow." The more specific the detail, the more universal the feeling it creates — which is one of the most surprising and beautiful paradoxes in all of writing.`,
          ],
          image: `/explorer-assets/creative-arts/l09-magazine-1.png`,
          imageCaption: `Specific sensory details pull readers into the poem — the more precise the image, the more universal the feeling`,
          vocab: [
            { word: `imagery`, definition: `The use of specific, sensory details in writing — what something looks, sounds, smells, tastes, or feels like — that creates a vivid, felt experience for the reader.`, audioPrompt: `Imagery is showing instead of telling, {name}. "The beach was nice" is telling. "Salt stung my lips and cold sand shifted under my feet" is imagery — you feel it. Specific sensory detail pulls a reader into the poem's world rather than describing it from the outside. The more precise the image, the more the reader's body responds. That's what poetry does that argument can't.` },
            { word: `sensory detail`, definition: `A specific detail that appeals to one of the five senses — sight, sound, smell, taste, or touch — and makes writing feel immediate and real.`, audioPrompt: `Sensory details are the texture of writing, {name} — the specific things that make a reader's body remember a feeling it recognizes. Not "it was cold" but "the window glass stung my forehead." Not "the kitchen smelled good" but "burnt sugar and yeast and something deeper, almost animal." The more senses a poem engages, the more fully a reader inhabits it.` },
            { word: `specificity`, definition: `The quality of naming things precisely — choosing the exact right detail, word, or image — which, in poetry, paradoxically creates the most universal emotional effect.`, audioPrompt: `Here's one of the most beautiful paradoxes in all of writing, {name}: the more specific a detail, the more universal it becomes. Not "a flower" but "a bent yellow tulip half-buried in snow." The first belongs to no one. The second, somehow, belongs to everyone who has ever seen something fragile surviving something hard. Specificity is the key that unlocks the universal. It's what makes a poem feel like it was written about you.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Figurative Language: Beyond the Literal`,
          paragraphs: [
            `**Figurative language** uses comparison, association, and imagination to say something in a way that makes it more vivid, surprising, or emotionally true than literal description can manage. A **simile** compares two things using "like" or "as": *her voice was like broken glass*. A **metaphor** makes the comparison without those words — it says one thing IS another: *her voice was broken glass*. Metaphor is more direct and powerful — it doesn't hedge the comparison, it insists on it. **Personification** gives human qualities to non-human things: *the sea swallowed the light*. **Hyperbole** uses deliberate exaggeration to express intensity: *I've been waiting for a thousand years*. Each of these tools lets language reach for feelings that literal description alone can't quite touch.`,
          ],
          image: `/explorer-assets/creative-arts/l09-magazine-2.png`,
          imageCaption: `Simile, metaphor, personification — figurative language reaches for feelings that literal words can't touch`,
          vocab: [
            { word: `metaphor`, definition: `A figure of speech that says one thing IS another — not using "like" or "as" — insisting on the comparison in a way that makes it feel more direct and emotionally true.`, audioPrompt: `A simile says "her voice was like broken glass," {name}. A metaphor says "her voice was broken glass" — no hedging, no "like." The metaphor insists on the comparison, makes it fully real. That small difference changes everything. The metaphor is more direct, more startling, more true in the felt sense. Poetry uses metaphor constantly because some feelings can only be reached through saying one thing is another.` },
            { word: `simile`, definition: `A comparison between two things using "like" or "as" — which creates a vivid image while keeping a slight distance that metaphor doesn't have.`, audioPrompt: `A simile is a comparison that announces itself, {name}: "like," "as." The moon was like a coin. Her laugh was as warm as bread. Similes are slightly more gentle than metaphors — they offer the comparison but keep a little distance. Poets choose between simile and metaphor the way painters choose a brushstroke: one is softer, one is more direct. Both reach for things that literal language can't quite touch.` },
            { word: `personification`, definition: `Giving human qualities, feelings, or actions to non-human things — animals, objects, weather, nature — to make them feel alive and emotionally present in a poem.`, audioPrompt: `When a poem says "the sea swallowed the light," {name}, the sea is doing something human. That's personification — giving the non-human a human action or feeling. It makes the natural world feel alive and purposeful, like everything is participating in the poem's emotion. The wind groans. The city sleeps. The old house remembers. Personification is how poets make the world feel as full of feeling as we are.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rhyme and Sound`,
          paragraphs: [
            `Poetry is not just meaning — it is also **music**. The sounds of words matter: how they feel in the mouth, how they flow from one to the next, and how they land in the ear. **Rhyme** — matching sounds at the ends of lines — creates expectation and satisfaction, like a chord resolving. But rhyme is only one sound device. **Alliteration** repeats the same starting sound across words (*silver shadows slid across the stone*). **Onomatopoeia** uses words that sound like what they describe (*buzz, crack, whisper, sizzle*). **Rhythm** in poetry — the pattern of stressed and unstressed syllables — gives lines their pulse and momentum. **Free verse** uses no fixed rhyme or rhythm, relying on natural speech patterns and line breaks to create its music. Poetry does not have to rhyme — but it always has to sound right.`,
          ],
          image: `/explorer-assets/creative-arts/l09-magazine-3.png`,
          imageCaption: `Rhyme, alliteration, onomatopoeia — poetry is music made from words, and sound is always part of the meaning`,
          vocab: [
            { word: `alliteration`, definition: `The repetition of the same starting sound across neighboring words — which creates rhythm, momentum, and a musical quality in writing.`, audioPrompt: `Say this slowly, {name}: "silver shadows slid across the stone." That's alliteration — the same starting sound, repeated. It creates momentum, a feeling of the words belonging to each other. Poetry uses alliteration because sound is part of meaning. When the sounds pull together, the images pull together too. It's one of the oldest sound devices in the language, and it still works every time.` },
            { word: `onomatopoeia`, definition: `A word that sounds like what it describes — like buzz, crack, sizzle, or whisper — making the sound part of the meaning.`, audioPrompt: `Buzz. Crack. Sizzle. Hiss. These words carry their meaning in their sound, {name} — they're onomatopoeia. When a poem uses "the bees hummed" instead of "the bees made a sound," the word hum itself does the describing. It's one of the most immediate effects in language: the sound of the word becomes the sound of the thing. You hear what you read.` },
            { word: `free verse`, definition: `Poetry that uses no fixed rhyme scheme or meter — instead relying on natural speech rhythms, line breaks, and sound to create its music.`, audioPrompt: `Free verse doesn't rhyme — and it doesn't have a strict beat — but it's not free from craft, {name}. It uses line breaks, white space, rhythm of speech, repetition, and sound devices deliberately. Many of the greatest poems in the English language are free verse. The freedom in free verse is the freedom to make every single choice — which is actually harder than working within a form. The constraint of having no rules is the hardest constraint of all.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Forms of Poetry`,
          paragraphs: [
            `Poetry comes in many **forms** — some with strict rules, some with none. A **haiku** is a Japanese form with three lines of 5, 7, and 5 syllables, traditionally capturing a moment in nature. A **sonnet** has 14 lines and has been used for centuries to explore love, loss, and the passage of time. A **limerick** has five lines with a specific rhyme scheme and bouncy rhythm — often comic. **Cinquain** has five lines with increasing then decreasing syllable counts. **Free verse** has no prescribed form at all — the poet decides where lines break and how long they are. Each form creates its own possibilities and constraints. Constraints are not limitations — they are **invitations to be creative within a frame**, which often produces more surprising results than unlimited freedom.`,
          ],
          image: `/explorer-assets/creative-arts/l09-magazine-4.png`,
          imageCaption: `Each poetic form — haiku, sonnet, limerick, free verse — offers a different frame for creativity to work within`,
          vocab: [
            { word: `haiku`, definition: `A Japanese poetic form of three lines — 5 syllables, 7 syllables, 5 syllables — traditionally capturing a single moment, image, or observation in nature.`, audioPrompt: `A haiku is seventeen syllables and one moment, {name}. Five, seven, five — and in that small frame, something has to arrive. The best haiku create a kind of click: two images that land together and open a door into feeling. The constraint isn't a limitation. It's a practice in precision. You can't waste a syllable. Every word has to earn its place. That's a useful discipline for any kind of writing.` },
            { word: `sonnet`, definition: `A 14-line poem — traditionally exploring love, time, beauty, or mortality — with a specific rhyme scheme that has been used by poets for centuries.`, audioPrompt: `The sonnet is 14 lines and several hundred years old, {name} — and it's still one of the most used poetic forms because it fits something in the human brain perfectly. The first twelve lines build a situation or argument. The final two lines — the couplet — turn and resolve it. Shakespeare used this to explore love and time and death. Contemporary poets still do. The form is a container that somehow keeps making space for what matters most.` },
            { word: `form`, definition: `The structure of a poem — the rules about line length, rhyme, syllable count, and organization that define a particular type of poetry.`, audioPrompt: `Form is the architecture of a poem, {name}. A sonnet has 14 lines and a specific rhyme scheme. A haiku has three lines and seventeen syllables. Each form creates its own possibilities and its own constraints. And here's what Muse finds endlessly true: constraints don't limit creativity — they focus it. A blank page with no rules is actually harder to fill than a form that tells you the shape in advance. Creativity thrives in frames.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `figurative`,
              label: `🌟 Figurative Language`,
              color: `#A78BFA`,
            },
            {
              id: `sound`,
              label: `🎵 Sound Device`,
              color: `#34D399`,
            },
          ],
          items: [
            {
              id: `l09-g1`,
              image: `l09-game-1.png`,
              label: `Writing that the sea "swallowed" the little boat, as if the ocean were a living creature that could eat things.`,
              matchPhrase: `That's personification — giving a non-human thing (the sea) a human or animal quality (swallowing). It transforms the image from a literal description into something that carries the sea's power and danger. Figurative language reaches for feelings that straight description can't quite achieve on its own.`,
              correctMatch: `figurative`,
            },
            {
              id: `l09-g2`,
              image: `l09-game-2.png`,
              label: `Using words like "sizzled" and "spat" to describe bacon cooking, because those words sound like the noise bacon actually makes.`,
              matchPhrase: `That's onomatopoeia — words that sound like what they describe. "Sizzle" and "spit" don't just tell you bacon is cooking; they make you hear it. Sound devices like these turn reading into a sensory experience, creating the thing in the reader's mind rather than just reporting it.`,
              correctMatch: `sound`,
            },
            {
              id: `l09-g3`,
              image: `l09-game-3.png`,
              label: `Describing someone's laugh as being "like wind chimes in a sudden breeze" — light, bright, and impossible to predict.`,
              matchPhrase: `That's a simile — a comparison using "like" or "as." It doesn't just tell you the laugh was pleasant; it creates a whole sensory picture by connecting two things that share a quality. The comparison makes the description far more vivid and emotionally specific than any literal description could.`,
              correctMatch: `figurative`,
            },
            {
              id: `l09-g4`,
              image: `l09-game-4.png`,
              label: `Writing four words in a row that all start with the same sound — like "silly slimy slithering snakes" — to make the line bouncy and fun.`,
              matchPhrase: `That's alliteration — repeating the same starting sound across several words close together. It gives a line rhythm and energy, making it feel almost musical when read aloud. Alliteration is one of the oldest devices in poetry, used across every language and culture to make lines memorable, playful, or dramatic.`,
              correctMatch: `sound`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l09-q1`,
              format: `multiple-choice`,
              question: `What is imagery in poetry?`,
              options: [
                `The drawings or illustrations that accompany a poem`,
                `The use of specific, sensory details to create a vivid felt experience in the reader's mind`,
                `The metaphors and similes used to compare two things`,
                `The visual shape a poem makes on the page`,
              ],
              correctIndex: 1,
              explanation: `Imagery is the use of specific sensory detail — sight, sound, smell, taste, touch — to create an experience rather than simply describing one. "The beach was nice" tells us a fact. "Salt stung my lips and cold sand shifted under my feet" puts us there. The paradox of great imagery is that the more specific and particular the detail, the more universal the feeling it creates — because precise concrete images bypass the analytical mind and create a direct sensory experience.`,
            },
            {
              id: `l09-q2`,
              format: `multiple-choice`,
              question: `What is the difference between a simile and a metaphor?`,
              options: [
                `A simile uses rhyme; a metaphor does not`,
                `A simile uses "like" or "as" to make a comparison; a metaphor states directly that one thing IS another, without those linking words`,
                `A simile is a longer comparison; a metaphor is a shorter one`,
                `A simile is figurative; a metaphor is literal`,
              ],
              correctIndex: 1,
              explanation: `Both simile and metaphor compare two unlike things, but they do it differently. A simile hedges the comparison with "like" or "as": "her voice was like broken glass." A metaphor insists on it directly: "her voice was broken glass." Metaphor is often more powerful because it doesn't soften the connection — it states it absolutely. Both are tools for creating vivid impressions that literal language can't achieve, but metaphor tends to create a stronger, more immediate effect.`,
            },
            {
              id: `l09-q3`,
              format: `multiple-choice`,
              question: `Does a poem have to rhyme to be poetry?`,
              options: [
                `Yes — without rhyme, it's just prose with line breaks`,
                `No — free verse uses no fixed rhyme or rhythm pattern and is a fully valid poetic form, relied on by countless poets`,
                `Only if it's written for children`,
                `Yes, but only the last line of each stanza needs to rhyme`,
              ],
              correctIndex: 1,
              explanation: `Poetry does not have to rhyme. Free verse — poetry without a fixed rhyme scheme or metre — is one of the most widely used forms in modern poetry. What makes something a poem isn't rhyme: it's the intentional use of language — its sounds, rhythms, images, and line breaks — to create an effect that prose doesn't. Many of the most powerful poems in existence don't rhyme at all. The requirement is that it sounds right and means something — not that the ends of lines match.`,
            },
            {
              id: `l09-q4`,
              format: `true-false`,
              question: `In a metaphor, one thing is said to BE another thing directly — without using "like" or "as" — which makes it feel more insistent and powerful than a simile.`,
              correctAnswer: true,
              explanation: `True. A simile says "her laugh was like music." A metaphor says "her laugh was music." The removal of the linking word collapses the distance between the two things — it doesn't suggest a comparison, it asserts an identity. This directness is what makes metaphor feel more immediate and visceral. The best metaphors don't just compare — they transform the way we see the thing being described.`,
            },
            {
              id: `l09-q5`,
              format: `fill-blank`,
              question: `The use of specific sensory details to make a reader see, hear, smell, taste, or feel something vividly is called ___.`,
              options: [
                `imagery`,
                `rhyme`,
                `metaphor`,
                `alliteration`,
              ],
              correctIndex: 0,
              explanation: `Imagery is the sensory engine of poetry — it transforms abstract feelings into concrete experiences. A poem about loneliness could say "I was alone," but that tells us nothing we can feel. A poem that shows an empty chair, a cooling cup of tea, and the sound of a clock ticking puts us inside the loneliness. The more specific and sensory the detail, the more vivid and universal the image — which is why the most accessible poems are often the most precise.`,
            },
            {
              id: `l09-q6`,
              format: `multiple-choice`,
              question: `Why do poets often describe constraints like fixed forms (haiku, sonnet) as invitations rather than limitations?`,
              options: [
                `Because breaking the rules of a form is the most creative thing a poet can do`,
                `Because without any rules, all poetry would sound the same`,
                `Because working within a constraint forces creative problem-solving — and often produces more surprising, inventive language than unlimited freedom would`,
                `Because forms are easier to teach to beginners than free verse`,
              ],
              correctIndex: 2,
              explanation: `A constraint like the haiku's syllable count or the sonnet's 14 lines forces a poet to find exactly the right word — the one that fits the sound, the rhythm, and the meaning all at once. That pressure to solve a puzzle often generates more unexpected and precise language than an open canvas would. Unlimited freedom can lead to loose, vague writing; constraints sharpen attention and demand creativity within a frame. Many poets report that the most constrained forms produce their most surprising work.`,
            },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Poetry is not confined to literature. Song lyrics are poetry set to music — the tools of imagery, figurative language, and sound devices appear in virtually every song you've ever heard. Advertising slogans use alliteration and rhythm deliberately. Political speeches use metaphor to make abstract ideas feel concrete. Once you know how these tools work, you'll notice them being used everywhere that language is crafted to create an effect rather than simply convey information.`,
          familyAdventure: `Write a family poem together — one line per person, taking turns. Give it a theme: a place you love, a season, an animal. The only rule: no vague words like "nice" or "pretty" — every line must contain a specific image or sound. Read the finished poem aloud together, then try reading it backwards. Talk about which line surprised you most. Display it somewhere in the house.`,
          creativePrompt: `Write three short poems, each using a different tool. (1) Imagery poem: describe one ordinary moment from today — eating breakfast, walking to the door, looking out a window — using only specific sensory details. No "nice" or "good." (2) Sound poem: write 4–6 lines about rain, fire, or wind using as many sound devices as you can — onomatopoeia, alliteration, rhythm. Read it aloud and notice where it sounds musical. (3) Form poem: try a haiku (5 syllables / 7 syllables / 5 syllables) about something you saw outside today. Count on your fingers.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that poetry is not about following rules or sounding clever — it's about using the music and precision of language to make someone feel something they couldn't quite feel before. Every image, every sound, every comparison is a choice. Muse is in awe of what you'll say with these tools.`,
          badge: `poet`,
          badgeName: `Poet`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L09.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L09] Loaded: "Poetry: Rhyme, Rhythm, and Imagery" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l09-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L09] One or more magazine assets missing'));
}
