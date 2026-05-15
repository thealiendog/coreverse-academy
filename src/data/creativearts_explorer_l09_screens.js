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
          headline: `Doing More With Less`,
          paragraphs: [
            `Poetry does more with fewer words than any other art form.`,
            `A short poem can make you feel something a thousand-page novel couldn't quite reach. Through compression, sound, and surprise.`,
          ],
          image: `/explorer-assets/creative-arts/l09-s1-doing-more-with-less.png`,
          imageCaption: `Fewer words. Bigger feelings. That's poetry's superpower — and the trick is understanding how every word earns its place.`,
          vocab: [
            { word: `compression`, definition: `Saying a lot with a little. Poetry's defining technique — every word doing the work of many.`,
              audioPrompt: `Compression is poetry's secret weapon, {name}. Where prose uses paragraphs, poetry uses a phrase. Where prose explains, poetry implies. Each word in a great poem is doing the work of ten. That's why poems can land harder than novels — there's nothing in the way of the feeling.` },
            { word: `poem`,        definition: `A deliberate arrangement of words using sound, image, and rhythm to create an experience.`,
              audioPrompt: `A poem isn't just writing with line breaks, {name}. It's a deliberate arrangement of words shaped by sound, image, and rhythm — designed to make you feel something. The line breaks are choices. The word order is a choice. The silences between sounds are a choice. Every element of a poem is intentional.` },
            { word: `effect`,      definition: `The feeling or experience a piece of writing creates in a reader. What every poetic choice serves.`,
              audioPrompt: `Effect is what poets work toward, {name} — the feeling the reader actually has when the words land. Every choice in a poem is in service of effect. Not "is this clever?" but "does this land?" When the effect works, the reader doesn't notice the technique. They just feel it.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Imagery`,
          paragraphs: [
            `Compare these. "The beach was nice." vs "Salt stung my lips and cold sand shifted under my feet."`,
            `That's imagery — specific sensory details that show instead of tell. The more specific the detail, the more universal the feeling.`,
          ],
          image: `/explorer-assets/creative-arts/l09-s2-sensory-imagery.png`,
          imageCaption: `The trick of imagery: get specific. Real beats abstract every time — your body remembers a detail your brain would forget.`,
          vocab: [
            { word: `imagery`,        definition: `Specific sensory details that create a vivid felt experience — making readers see, hear, smell, taste, or touch what's described.`,
              audioPrompt: `Imagery is showing instead of telling, {name}. "The beach was nice" tells you. "Salt stung my lips and cold sand shifted under my feet" makes you feel it. The more senses a poem engages, the more fully the reader inhabits it. That's what poetry does that argument can't.` },
            { word: `sensory detail`, definition: `A specific detail that appeals to one of the five senses. The texture of writing that makes it feel real.`,
              audioPrompt: `Sensory details are the texture of writing, {name}. Not "it was cold" but "the window glass stung my forehead." Not "the kitchen smelled good" but "burnt sugar and yeast and something almost animal." The body recognizes sensory detail in a way it never recognizes abstraction.` },
            { word: `specificity`,    definition: `Naming things precisely. The paradox of writing: the more specific the detail, the more universal the feeling it creates.`,
              audioPrompt: `Here's one of writing's most beautiful paradoxes, {name}: specific beats abstract every time. Not "a flower" but "a bent yellow tulip half-buried in snow." The first belongs to no one. The second somehow belongs to everyone who has ever seen something fragile surviving something hard. Specificity unlocks the universal.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Simile, Metaphor, Personification`,
          paragraphs: [
            `Figurative language reaches for feelings that literal description can't quite touch.`,
            `SIMILE compares with "like" or "as" ("her voice was like broken glass"). METAPHOR insists one thing IS another ("her voice was broken glass"). PERSONIFICATION gives human qualities to non-human things ("the sea swallowed the boat").`,
          ],
          image: `/explorer-assets/creative-arts/l09-s3-figurative-language.png`,
          imageCaption: `Comparing. Insisting. Giving the non-human a soul. These are the three doors out of the literal.`,
          vocab: [
            { word: `simile`,          definition: `A comparison using "like" or "as." Creates a vivid image while keeping a slight distance.`,
              audioPrompt: `A simile is a comparison that announces itself, {name} — "like," "as." The moon was like a coin. Her laugh was as warm as bread. Similes are slightly gentler than metaphors — they offer the comparison but keep a little distance. Both reach for things literal language can't quite touch.` },
            { word: `metaphor`,        definition: `A comparison that says one thing IS another — no "like" or "as." More direct and more powerful than simile.`,
              audioPrompt: `A simile says "her voice was like broken glass," {name}. A metaphor says "her voice was broken glass" — no hedging. The metaphor insists on the comparison, makes it fully real. That small difference changes everything. Some feelings can only be reached through saying one thing IS another.` },
            { word: `personification`, definition: `Giving human qualities to non-human things. Makes the natural world feel alive and emotionally present.`,
              audioPrompt: `When a poem says "the sea swallowed the light," {name}, the sea is doing something human. That's personification. The wind groans. The city sleeps. The old house remembers. Personification is how poets make the world feel as full of feeling as we are.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Music of Words`,
          paragraphs: [
            `Poetry isn't just meaning. It's music — how words feel in the mouth and land in the ear.`,
            `RHYME matches sounds at line ends. ALLITERATION repeats starting sounds ("silver shadows"). ONOMATOPOEIA uses words that sound like what they describe ("buzz," "sizzle").`,
          ],
          image: `/explorer-assets/creative-arts/l09-s4-music-of-words.png`,
          imageCaption: `The sound of a poem isn't decoration. It's part of the meaning. Read aloud and you'll feel it instantly.`,
          vocab: [
            { word: `alliteration`, definition: `The repetition of starting sounds across nearby words. Creates momentum and a musical feel.`,
              audioPrompt: `Say this slowly, {name}: "silver shadows slid across the stone." That's alliteration — the same starting sound, repeated. It creates momentum, a feeling of the words belonging to each other. Sound is part of meaning. When the sounds pull together, the images pull together too.` },
            { word: `onomatopoeia`, definition: `A word that sounds like what it describes — buzz, sizzle, crack, whisper. Makes sound part of the meaning.`,
              audioPrompt: `Buzz. Crack. Sizzle. Hiss. These words carry their meaning in their sound, {name} — they're onomatopoeia. When a poem uses "the bees hummed," the word hum itself does the describing. The sound of the word becomes the sound of the thing. You hear what you read.` },
            { word: `rhyme`,        definition: `Matching sounds, usually at the ends of lines. Creates expectation and satisfaction, like a chord resolving.`,
              audioPrompt: `Rhyme creates expectation, {name} — and when the second sound arrives, satisfaction. Like a chord resolving. Rhyme isn't required in poetry, but when used well, it gives a poem a kind of inevitability. The reader feels each line settle into place. It's one of the oldest pleasures in language.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Forms`,
          paragraphs: [
            `A HAIKU is 17 syllables in three lines (5-7-5). A SONNET is 14 lines with a specific rhyme scheme. FREE VERSE has no fixed pattern at all.`,
            `Constraints don't kill creativity — they focus it. A frame often produces more surprising work than unlimited freedom.`,
          ],
          image: `/explorer-assets/creative-arts/l09-s5-poetry-forms.png`,
          imageCaption: `A tiny haiku. A structured sonnet. A free verse poem with no fixed shape. Different frames. Same goal — make someone feel something.`,
          vocab: [
            { word: `haiku`,  definition: `A Japanese three-line poem with 5-7-5 syllables, traditionally capturing a moment in nature.`,
              audioPrompt: `A haiku is seventeen syllables and one moment, {name}. Five, seven, five — and in that small frame something has to arrive. You can't waste a syllable. Every word has to earn its place. That discipline of precision is useful for any kind of writing.` },
            { word: `sonnet`, definition: `A 14-line poem with a specific rhyme scheme. Used for centuries to explore love, time, and loss.`,
              audioPrompt: `The sonnet is 14 lines and several hundred years old, {name} — still one of the most used poetic forms. The first twelve lines build a situation. The final two — the couplet — turn and resolve it. The form is a container that keeps making space for what matters most.` },
            { word: `form`,   definition: `The structural rules of a particular kind of poem. Line length, rhyme, syllable count, organization.`,
              audioPrompt: `Form is the architecture of a poem, {name}. Each form has its own rules and its own gifts. And here's what Muse finds endlessly true: constraints don't limit creativity — they focus it. A blank page with no rules is actually harder to fill. Creativity thrives in frames.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Language as Playground`,
          paragraphs: [
            `Poetry doesn't have to rhyme. It doesn't have to follow a form. It just has to sound right and mean something.`,
            `Once you see how it works, language stops being just information to transfer. It becomes a material to shape.`,
          ],
          image: `/explorer-assets/creative-arts/l09-s6-language-playground.png`,
          imageCaption: `Words aren't just for explaining. They're for shaping, sounding, surprising. Poetry is the playground where language remembers it can be that.`,
          vocab: [
            { word: `free verse`, definition: `Poetry without a fixed rhyme scheme or meter. Still crafted — just using different tools.`,
              audioPrompt: `Free verse doesn't rhyme — and it doesn't have a strict beat — but it's not free from craft, {name}. It uses line breaks, white space, rhythm of speech, repetition, sound. The freedom in free verse is the freedom to make every single choice — which is actually harder than working within a form.` },
            { word: `voice`,      definition: `The unique way a particular poet writes. Already forming inside you — even now.`,
              audioPrompt: `Voice is your poet signature, {name} — the particular way you put words together that no one else does. The details you notice. The rhythm of your sentences. The kinds of comparisons you reach for. The more poems you write, the more clearly your voice speaks.` },
            { word: `craft`,      definition: `The deliberate use of skill in making something. What turns words into poetry.`,
              audioPrompt: `Craft is what separates words from poetry, {name}. It's the deliberate use of every tool — imagery, sound, form, line break — in service of effect. Talent helps, but craft is built. Every choice you make on purpose is craft growing. Every poem you write is more craft you carry.` },
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
    fetch('/explorer-assets/creative-arts/l09-s1-doing-more-with-less.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-s2-sensory-imagery.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-s3-figurative-language.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-s4-music-of-words.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-s5-poetry-forms.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l09-s6-language-playground.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L09] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L09] One or more magazine assets missing'));
}
