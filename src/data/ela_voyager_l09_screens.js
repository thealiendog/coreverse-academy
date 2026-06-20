// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L09 — Poetry: Deep Analysis
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature (Poetry), Figurative Language
// Interaction: PERSPECTIVES. Sections <=1100ch (paras ~330ch). 3 vocab/section.
// NOTE: no copyrighted poems reproduced; poets/works referenced by name only.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l09-v1";

const ELA_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-09`,
      title: `Poetry: Deep Analysis`,
      duration: 35,
      xpReward: 75,
      badge: `poetry-analyst`,
      badgeName: `Poetry Analyst`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, advertising is the most pervasive form of rhetoric in your life — and the least examined. This lesson takes advertising seriously as a rhetorical form: what techniques does it use, how does it work on you below the level of conscious thought, and what does media literacy look like when applied to commercial persuasion?`,
          headline: `Poetry: Deep Analysis`,
          subtitle: `The most concentrated language there is, read line by careful line. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Most Concentrated Language`,
          paragraphs: [
            `Poetry is the most concentrated language there is. A novel might need four hundred pages to move you; a poem can do it in fourteen lines, or four, or sometimes a single one. Every word in a real poem is working hard, often doing several jobs at once. That density is what makes poetry special, and what makes it reward slow reading.`,
            `You cannot skim a poem the way you skim a text. The meaning, the music, and the feeling are packed so tightly that a fast read slides right off the surface. To read a poem you slow down, read it aloud or in your head's ear, and read it more than once. The first time you meet a poem, you're only getting acquainted; the real reading starts on the second pass.`,
            `Many people fear poetry. They imagine it's a locked box with one secret "right answer" the teacher already knows, and that they're too dim to find it. That's false. A poem is not a riddle with one solution; it's an experience built from sound, image, and feeling. Your honest response matters, and the goal is not to "solve" the poem but to hear and feel what it's doing.`,
          ],
          image: `/voyager-assets/ela/l09-s1-concentrated.webp`,
          imageCaption: `Poetry is the most CONCENTRATED language there is. A novel might need four hundred pages to move you; a poem can do it in fourteen lines, or four, or one. Every word works hard, often doing several jobs at once, and that density is what makes poetry reward slow reading. You cannot skim a poem the way you skim a text, the meaning, music, and feeling are packed so tightly that a fast read slides off the surface. You slow down, read aloud or in your head's ear, and read it more than once; the real reading starts on the second pass. Many people fear poetry, imagining a locked box with one secret right answer. That's false: a poem is not a riddle but an experience built from sound, image, and feeling, and your honest response matters.`,
          vocab: [
            { word: `poetry`,
              definition: `The most concentrated form of language, where every word works hard, built from sound, image, and feeling rather than plain explanation.`,
              audioPrompt: `Poetry, {name}, is the most concentrated language there is. Every word in a real poem works hard, often doing several jobs at once, which is why a poem can move you deeply in just a handful of carefully chosen lines.` },
            { word: `concentration`,
              definition: `The packing of great meaning, music, and feeling into very few words. Poetry's density is what makes it reward slow reading.`,
              audioPrompt: `Concentration, {name}, is how poetry packs huge meaning, music, and feeling into very few words. That density is exactly why you can't skim a poem; a fast read slides right off its tightly packed surface.` },
            { word: `close reading`,
              definition: `Slow, careful, repeated reading that attends to every word, sound, and image, the method poetry demands more than any other form.`,
              audioPrompt: `Close reading, {name}, is slow, careful, repeated reading that pays attention to every word, sound, and image. Poetry demands it more than any other form, because the first read only gets you acquainted; the real reading starts on the second pass.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Seeing: Imagery And Figurative Language`,
          paragraphs: [
            `One of poetry's great powers is to make you see, hear, taste, and feel. Imagery is language that appeals to the senses, building a picture or sensation in your mind. A poet rarely says "I was sad"; instead they show you a gray sky, a cold empty room, a single fading light, and let the image carry the feeling straight to you.`,
            `Poets reach beyond the literal with figurative language. A metaphor says one thing is another ("the mind is an ocean") to reveal a hidden likeness. A simile does it with "like" or "as." Personification gives human qualities to nonhuman things, a "weeping" sky, a "patient" mountain. These tools let a poet say the unsayable by pointing through one thing at another.`,
            `Symbol is figurative language at its deepest: when an image stands for something much larger, a road for a life choice, a season for a stage of life, the sea for the unknown. Reading imagery and figurative language well is the heart of reading poetry. You ask not just "what does this say?" but "what is this image making me see and feel, and what larger thing might it point toward?"`,
          ],
          image: `/voyager-assets/ela/l09-s2-imagery.webp`,
          imageCaption: `One of poetry's great powers is to make you SEE, hear, taste, and feel. IMAGERY is language that appeals to the senses; a poet rarely says "I was sad," but shows a gray sky, a cold empty room, a single fading light, letting the image carry the feeling. Poets reach beyond the literal with FIGURATIVE LANGUAGE: a METAPHOR says one thing is another ("the mind is an ocean") to reveal a hidden likeness; a SIMILE uses "like" or "as"; PERSONIFICATION gives human qualities to nonhuman things, a weeping sky, a patient mountain. SYMBOL goes deepest, an image standing for something larger, a road for a life choice, the sea for the unknown. Ask not just what a poem says but what its images make you see and feel, and what larger thing they point toward.`,
          vocab: [
            { word: `imagery`,
              definition: `Language that appeals to the senses, building pictures or sensations in the mind so an image can carry feeling directly.`,
              audioPrompt: `Imagery, {name}, is language that appeals to the senses, sight, sound, taste, touch. Instead of saying "I was sad," a poet shows you a gray sky or a cold empty room, and lets that image carry the feeling straight to you.` },
            { word: `metaphor`,
              definition: `A comparison that says one thing is another ("the mind is an ocean") to reveal a hidden likeness, without using "like" or "as."`,
              audioPrompt: `A metaphor, {name}, says one thing actually is another, "the mind is an ocean," to reveal a hidden likeness. It lets a poet say something almost unsayable by pointing through one thing at another, without the words "like" or "as."` },
            { word: `symbol`,
              definition: `An image that stands for something much larger, a road for a life choice, the sea for the unknown. Figurative language at its deepest.`,
              audioPrompt: `A symbol, {name}, is an image that stands for something much larger than itself, a road for a life's choices, a season for a stage of life, the sea for the unknown. It is figurative language at its deepest and most resonant.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Hearing: The Music Of Poetry`,
          paragraphs: [
            `Poetry began as something heard, sung and spoken before it was ever written, and sound is still half its power. How a poem sounds is part of what it means. That's why you should read poems aloud, or at least hear them in your mind's ear. The music isn't decoration; it carries feeling the bare words alone cannot.`,
            `Poets shape sound with specific tools. Rhythm is the beat, the pattern of stressed and unstressed syllables; meter is a regular rhythm. Rhyme chimes sounds at line ends or within lines. Alliteration repeats opening consonant sounds ("wild and windy"); assonance repeats vowel sounds. Each tool can speed a poem up, slow it down, or bind words together in the ear.`,
            `Sound and meaning work together. A harsh, choppy rhythm can feel like anger or struggle; a smooth, flowing one can feel like calm or longing. Soft repeated sounds can soothe; hard ones can jar. When you read a poem, listen: does it rush or linger, chime or clash? The sound is the poet telling you how to feel, underneath the literal words.`,
          ],
          image: `/voyager-assets/ela/l09-s3-music.webp`,
          imageCaption: `Poetry began as something HEARD, sung and spoken before it was written, and sound is still half its power: how a poem sounds is part of what it means. That's why you read poems aloud, or hear them in your mind's ear; the music carries feeling the bare words cannot. Poets shape sound with tools: RHYTHM is the beat, the pattern of stressed and unstressed syllables, and METER is a regular rhythm; RHYME chimes sounds at line ends; ALLITERATION repeats opening consonants ("wild and windy"); ASSONANCE repeats vowel sounds. Sound and meaning work together, a harsh choppy rhythm can feel like anger, a smooth flowing one like calm or longing. When you read, listen: does it rush or linger, chime or clash? The sound tells you how to feel beneath the words.`,
          vocab: [
            { word: `rhythm`,
              definition: `The beat of a poem, its pattern of stressed and unstressed syllables. A regular, patterned rhythm is called meter.`,
              audioPrompt: `Rhythm, {name}, is the beat of a poem, its pattern of stressed and unstressed syllables. A harsh, choppy rhythm can feel like anger or struggle; a smooth, flowing one can feel like calm. A regular rhythm is called meter.` },
            { word: `alliteration`,
              definition: `The repetition of opening consonant sounds in nearby words, like "wild and windy." A tool for binding words in the ear.`,
              audioPrompt: `Alliteration, {name}, is the repetition of opening consonant sounds in nearby words, like "wild and windy." Poets use it to bind words together in the ear and to make a line stick in your memory.` },
            { word: `sound and meaning`,
              definition: `The principle that how a poem sounds carries feeling and meaning, working together with the literal words.`,
              audioPrompt: `Sound and meaning work together, {name}. The music of a poem is not decoration; it carries feeling the bare words alone cannot. When you read, listen for whether the poem rushes or lingers, chimes or clashes, and how that makes you feel.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Shape: Line, Form, And Space`,
          paragraphs: [
            `Poetry has one tool no other writing has: the line. A poet decides exactly where each line breaks, and that choice shapes how you read. A line break can create a pause, a surprise, or an emphasis, holding a word at the edge before the next line turns the meaning. Where a line ends is never an accident; it's part of the poem's design.`,
            `Form is the overall shape and rules a poem follows. A sonnet has fourteen lines and a turn of thought; a haiku is tiny and image-focused; free verse follows no fixed rhyme or meter at all, shaping itself to its own feeling. Form sets up expectations, and poets use it, fulfilling it for satisfaction, or breaking it for shock and meaning.`,
            `Even the white space matters. Where a poem sits on the page, its gaps, its stanza breaks (the "paragraphs" of poetry), the silence around the words, all shape the reading. A poem is a visual object as well as a heard one. When you read, notice the shape: why does it break here, pause there, look the way it looks? The form is part of the meaning.`,
          ],
          image: `/voyager-assets/ela/l09-s4-shape.webp`,
          imageCaption: `Poetry has one tool no other writing has: the LINE. A poet decides exactly where each line breaks, and that choice shapes how you read, a line break can create a pause, a surprise, or emphasis, holding a word at the edge before the next line turns the meaning. Where a line ends is never an accident. FORM is the overall shape and rules a poem follows: a SONNET has fourteen lines and a turn of thought; a HAIKU is tiny and image-focused; FREE VERSE follows no fixed rhyme or meter. Form sets up expectations poets fulfill or break for meaning. Even white space matters, gaps, STANZA breaks (poetry's "paragraphs"), the silence around the words. A poem is a visual object as well as a heard one. Notice the shape: why break here, pause there? The form is part of the meaning.`,
          vocab: [
            { word: `line break`,
              definition: `Where a poet chooses to end a line. It creates pause, surprise, or emphasis, and is never accidental, a tool unique to poetry.`,
              audioPrompt: `A line break, {name}, is where a poet chooses to end a line, a tool no other writing has. It can create a pause, a surprise, or emphasis, holding a word at the edge before the next line turns the meaning. It's never an accident.` },
            { word: `form`,
              definition: `The overall shape and rules a poem follows, such as a sonnet, haiku, or free verse. Form sets expectations poets fulfill or break.`,
              audioPrompt: `Form, {name}, is the overall shape and rules a poem follows. A sonnet has fourteen lines; a haiku is tiny; free verse follows no fixed rules. Form sets up expectations, which a poet can fulfill for satisfaction or break for meaning.` },
            { word: `stanza`,
              definition: `A grouped set of lines in a poem, set off by space, like a paragraph in prose. Stanza breaks shape the reading.`,
              audioPrompt: `A stanza, {name}, is a grouped set of lines in a poem, set off by white space, like a paragraph in prose. The breaks between stanzas, and the silence around the words, are part of how a poem shapes your reading.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. Poetry is the most concentrated language there is, and it rewards slow, repeated reading more than any other form. You read for three things at once. You read for the seeing: imagery and figurative language, metaphor, simile, personification, symbol, that make you feel through pictures and point one thing through another.`,
            `You read for the hearing: rhythm, rhyme, alliteration, the music that carries feeling beneath the literal words. And you read for the shape: the line breaks, the form, the stanzas, the white space, all designed to guide your eye and ear. A deep reading listens to all three, seeing, hearing, shape, working together to make one concentrated experience.`,
            `And remember the freeing truth: a poem is not a locked box with one secret answer. It's an experience, and your honest response, grounded in what's on the page, matters. Now the perspectives screen brings several ways people approach a poem: a reader who trusts feeling, one who hunts technique, one who reads aloud, one who studies its history, and one who insists there's no single right answer. Find your own way to read a poem deeply. Onward.`,
          ],
          image: `/voyager-assets/ela/l09-s5-before.webp`,
          imageCaption: `Threads together. Poetry is the most concentrated language there is, rewarding slow, repeated reading. You read for three things at once. The SEEING: imagery and figurative language, metaphor, simile, personification, symbol, that make you feel through pictures. The HEARING: rhythm, rhyme, alliteration, the music carrying feeling beneath the words. The SHAPE: line breaks, form, stanzas, white space, designed to guide eye and ear. A deep reading listens to all three working together as one experience. And remember: a poem is not a locked box with one secret answer; it's an experience, and your honest response, grounded in the page, matters. The perspectives screen brings several ways to approach a poem, the feeler, the technician, the reader-aloud, the historian, the no-single-answer reader. Find your own way to read deeply.`,
          vocab: [
            { word: `figurative language`,
              definition: `Language that means more than its literal words, through metaphor, simile, personification, and symbol. Central to poetry.`,
              audioPrompt: `Figurative language, {name}, is language that means more than its literal words: metaphor, simile, personification, symbol. It lets a poet say the almost unsayable by pointing through one thing at another, and it's central to poetry.` },
            { word: `tone`,
              definition: `The poem's attitude or feeling, joyful, bitter, tender, ironic, created by word choice, imagery, sound, and form together.`,
              audioPrompt: `Tone, {name}, is a poem's attitude or feeling, joyful, bitter, tender, ironic. It's created by everything working together: the word choice, the imagery, the sound, the shape. Listening for tone is part of reading a poem deeply.` },
            { word: `interpretation`,
              definition: `Your reasoned reading of what a poem means and does, grounded in evidence on the page. A poem can support more than one valid one.`,
              audioPrompt: `Interpretation, {name}, is your reasoned reading of what a poem means and does, grounded in what's actually on the page. A poem isn't a riddle with one answer; it can support more than one valid interpretation, as long as the poem supports it.` },
          ],
        },

        {
          id: `l09-perspectives`,
          type: `perspectives`,
          headline: `Ways To Read A Poem`,
          intro: `{name}, how should you read a poem deeply? Here are five honest approaches, five ways into the same poem. Each catches something real. Do not crown one. Understand what each one sees and misses, and build your own way of reading a poem so it opens up instead of staying a locked box.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The reader who trusts feeling first`,
              era: `A way to read`,
              stance: `Start with your honest gut response. What does the poem make you feel, before you analyze anything?`,
              quote: `"If a poem moves you, that's not the wrong answer, that's where the real reading begins."`,
              argument: `Poems are experiences, not puzzles. Before naming a single technique, I let the poem wash over me and notice what it stirs, a chill, a sadness, a sudden recognition. That honest response is real data about the poem, and it protects me from the fear that there's one secret answer I'm too dim to find. Feeling first, then understand why.`,
              evidence: `The way a great poem can move you before you understand it; how the fear of a "right answer" kills people's love of poetry; the fact that emotion is exactly what poems are built to produce.`,
              strengths_and_limits: `Strength: frees readers from paralysis and honors that poems are made to be felt. Limit: feeling alone can drift into "it means whatever I want," missing the actual craft and evidence on the page that ground a real reading.`,
            },
            {
              id: `p2`,
              voice: `The reader who studies the technique`,
              era: `A way to read`,
              stance: `Look at the machinery. The metaphors, sound, and line breaks are how the poem creates its effect.`,
              quote: `"Tell me where the line breaks and why, and I'll show you the poem's heartbeat."`,
              argument: `A feeling is just the start; the deep reading explains how the poem produces it. I trace the imagery, name the metaphors, listen for the rhythm, notice exactly where each line breaks and why. The craft isn't cold, it's the poet's actual choices, and understanding them turns a vague impression into a precise, defensible reading.`,
              evidence: `How a single line break can change a poem's meaning; the way sound (harsh or smooth) shapes feeling; the precision great poets bring to every word's placement.`,
              strengths_and_limits: `Strength: produces rigorous, evidence-based readings grounded in the poet's real craft. Limit: pushed too far, technique-hunting can dissect a poem into dead parts and lose the living experience that made it worth reading at all.`,
            },
            {
              id: `p3`,
              voice: `The reader who reads aloud`,
              era: `A way to read`,
              stance: `Poetry is sound. You don't fully know a poem until you've heard it in the air.`,
              quote: `"A poem read only with the eyes is a song you've only seen on sheet music."`,
              argument: `Poetry began as spoken and sung, and half its power lives in sound. I read every poem aloud, or in my mind's ear, because the rhythm, the rhyme, the chime and clash of the words carry feeling the silent page hides. The music tells you how to feel underneath the literal meaning, and you can't hear it skimming with your eyes.`,
              evidence: `Poetry's ancient origins as spoken and sung; how reading aloud reveals rhythm and music a silent read misses; the way hearing a poem can unlock a meaning that puzzled you on the page.`,
              strengths_and_limits: `Strength: recovers the sound that is half of poetry's power and often dissolves confusion. Limit: focusing on sound alone can skate over the visual shape, the imagery, and the layered meaning that also need careful attention.`,
            },
            {
              id: `p4`,
              voice: `The reader who studies the context`,
              era: `A way to read`,
              stance: `Knowing the poet, the time, and the world behind a poem unlocks meanings the words alone can't show.`,
              quote: `"A poem is a message from a particular person in a particular world; learn the world."`,
              argument: `Poems don't fall from the sky. Knowing who wrote it, when, and what they lived through can transform what a poem means, an image of a closed door means something different from a poet writing under oppression than from one writing about a quiet morning. Context doesn't replace the poem; it deepens it, revealing layers the bare words can't carry alone.`,
              evidence: `How knowing a poet's life or era reframes their images; the way historical context reveals hidden references; poems that seem simple until you learn what the words meant in their time.`,
              strengths_and_limits: `Strength: opens depths and meanings a context-free reading would entirely miss. Limit: leaning too hard on biography and history can bury the poem itself, reading the poet's life instead of the living words on the page.`,
            },
            {
              id: `p5`,
              voice: `The reader who insists there's no single right answer`,
              era: `A way to read`,
              stance: `A rich poem supports more than one valid reading, as long as the poem supports it.`,
              quote: `"Not 'anything goes,' but not 'one secret answer' either, many true readings, all grounded in the page."`,
              argument: `The fear that there's one hidden right answer is the great poetry-killer. A genuinely rich poem is designed to hold more than one meaning, which is part of its power. But that's not "it means whatever I feel", a valid reading must be grounded in evidence on the page. The freedom is real, and so is the responsibility to point to the words that support you.`,
              evidence: `The way scholars and readers find different valid meanings in the same great poem across centuries; the difference between a reading grounded in the text and a pure guess; the richness that ambiguity gives a poem.`,
              strengths_and_limits: `Strength: frees readers from fear while still demanding evidence, the healthiest stance of all. Limit: the balance is hard to hold, and careless readers can use "no single right answer" as an excuse to skip the actual work of grounding their reading.`,
            },
          ],
          synthesisPrompt: `After all five: what's YOUR method for reading a poem deeply? How will you combine feeling, technique, sound, and context, while remembering a poem isn't a locked box with one answer? Which approach did you most need to hear? In 5-6 sentences.`,
          reflectionPrompt: `Many people fear poetry as a puzzle with one secret answer they're too dim to find. Have you ever felt that fear? Where did it come from, and how does knowing a poem is an experience to be felt, not a riddle to be solved, change how you'd approach one now?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why does the lesson call poetry "the most concentrated language there is"?`,
              options: [
                `Because poems are always printed in very small, concentrated type.`,
                `Because every word works hard, packing great meaning into very few words.`,
                `Because poems must always be exactly fourteen lines long to count.`,
                `Because poetry can only be written by a small, concentrated group of experts.`,
              ],
              correctIndex: 1,
              explanation: `Poetry is "concentrated" because every word works hard, often several jobs at once, packing great meaning, music, and feeling into very few words, which is why it rewards slow reading. The distractors take "concentrated" literally as type size, or invent rules about length and authorship.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson says the fear that a poem is "a locked box with one secret right answer" is what?`,
              options: [
                `Completely true, and only teachers are able to find the hidden answer.`,
                `A useful fear that keeps readers from being lazy with difficult poems.`,
                `False; a poem is an experience to be felt, not a riddle with one solution.`,
                `True for old poems but false for any poem written in modern times.`,
              ],
              correctIndex: 2,
              explanation: `The lesson explicitly frees readers from this fear: a poem is not a riddle with one solution but an experience built from sound, image, and feeling, and your honest response matters. The distractors affirm the false fear, defend it as useful, or limit it to old poems.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "imagery" in poetry?`,
              options: [
                `Language that appeals to the senses, building a picture or sensation in your mind.`,
                `The pictures and photographs printed alongside a poem in a book.`,
                `The rule that every poem must describe something you can physically see.`,
                `The poet's handwriting and the way the letters are shaped on the page.`,
              ],
              correctIndex: 0,
              explanation: `Imagery is language that appeals to the senses, building pictures or sensations so an image can carry feeling directly (a gray sky for sadness instead of "I was sad"). The distractors confuse it with literal illustrations, a false rule, or handwriting.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between a metaphor and a simile?`,
              options: [
                `A metaphor is always true, while a simile is always made up.`,
                `A metaphor is used in poems, while a simile is only used in novels.`,
                `A metaphor is short, while a simile must be at least one full sentence.`,
                `A metaphor says one thing is another; a simile compares using "like" or "as."`,
              ],
              correctIndex: 3,
              explanation: `A metaphor says one thing is another ("the mind is an ocean") to reveal a hidden likeness, while a simile makes the comparison using "like" or "as." The distractors invent false distinctions about truth, genre, and length.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the lesson say you should read poems aloud?`,
              options: [
                `Because reading silently is against the official rules of poetry.`,
                `Because poetry's sound carries feeling the bare words on the page can't.`,
                `Because poems are too long to ever finish reading silently.`,
                `Because hearing a poem lets you skip having to understand it.`,
              ],
              correctIndex: 1,
              explanation: `Poetry began as spoken and sung, and sound is half its power: the rhythm, rhyme, and music carry feeling the silent page hides, which is why you read aloud or in your mind's ear. The distractors invent a rule, misstate poem length, or wrongly claim hearing replaces understanding.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is a "line break," and why does it matter?`,
              options: [
                `A printing error where a line accidentally runs onto the next page.`,
                `The blank line a poet must leave between every stanza by law.`,
                `Where a poet chooses to end a line, creating pause, surprise, or emphasis.`,
                `The moment a reader takes a break from reading a long poem.`,
              ],
              correctIndex: 2,
              explanation: `A line break is where a poet chooses to end a line, a tool unique to poetry that creates pause, surprise, or emphasis and is never accidental. The distractors confuse it with a printing error, a false rule, or a reading break.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "free verse"?`,
              options: [
                `Poetry that follows no fixed rhyme or meter, shaping itself to its own feeling.`,
                `Poetry that is given away for free instead of being sold in books.`,
                `Poetry that must rhyme perfectly at the end of every single line.`,
                `Poetry written only by poets who have not been formally trained.`,
              ],
              correctIndex: 0,
              explanation: `Free verse follows no fixed rhyme or meter, shaping itself to its own feeling rather than a set form like a sonnet or haiku. The distractors take "free" to mean no cost, or invent rules about rhyme and training.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How do sound and meaning work together in a poem?`,
              options: [
                `They don't; the sound of a poem has nothing to do with its meaning.`,
                `The sound of a poem only ever matters in songs, and never in any poems that are meant to be read.`,
                `The sound must always be smooth and pretty, no matter the subject.`,
                `How a poem sounds, harsh or smooth, rushing or lingering, carries feeling beneath the words.`,
              ],
              correctIndex: 3,
              explanation: `Sound and meaning work together: a harsh, choppy rhythm can feel like anger or struggle while a smooth, flowing one feels like calm or longing, so the sound tells you how to feel beneath the literal words. The distractors deny the link, limit it to songs, or impose a false "always pretty" rule.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: To read a poem deeply, you should read it quickly one time, since the meaning of a good poem is always obvious on the first pass.`,
              correctAnswer: false,
              explanation: `False, and this is the opposite of how poetry works. Poetry is the most concentrated language there is: every word is doing real work, often several jobs at once, and the meaning, the music, and the feeling are packed so tightly that a fast read slides right off the surface. You cannot skim a poem the way you skim a text message. Reading a poem deeply means slowing down, reading it aloud or in your mind's ear, and reading it more than once, the first time, you're only getting acquainted with it; the real reading begins on the second pass. There are three layers to attend to, and you usually can't catch them all at speed: the seeing (imagery and figurative language like metaphor, simile, and symbol), the hearing (rhythm, rhyme, alliteration, the music that carries feeling beneath the words), and the shape (the line breaks, the form, the stanzas, the white space, all deliberately designed). A great poem is built to reward exactly this slow, repeated, careful attention. The reward isn't "solving" a riddle, it's hearing and feeling more of what the poem is actually doing each time you return to it.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You read a short poem once, don't "get it," and feel stupid, sure there's a right answer you're missing. Using the whole lesson, what should you actually do?`,
              options: [
                `Give up; if you don't get a poem on the first read, it isn't meant for you.`,
                `Look up the "correct" meaning online and memorize it as the one true answer.`,
                `Slow down and reread, read it aloud to hear its music, notice the imagery and line breaks, trust your honest response, and remember it's an experience to feel, not a locked box with one secret answer you're failing to find.`,
                `Decide the poem is badly written, since any good poem would be instantly clear.`,
              ],
              correctIndex: 2,
              explanation: `This applies the whole lesson at once: poetry is concentrated and demands slow, repeated, aloud reading; you attend to imagery, sound, and shape; you trust your honest response as a real starting point; and you drop the poetry-killing fear of one secret answer. The distractors give up, outsource to a single "correct" answer, or blame the poem, all of which the lesson directly argues against.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-fear`, category: `The poetry fear`, prompt: `Many people fear poetry as a puzzle with one secret answer. Have you felt that? Where did it come from, school, a bad experience? How does knowing a poem is an experience to feel, not a riddle to solve, change how you'd approach one now?` },
            { id: `reflect-image`, category: `Showing a feeling`, prompt: `Poets show feeling through images, a gray sky for sadness, not "I was sad." Pick a strong feeling you've had recently. What single image, a place, an object, a moment, could carry that feeling to someone else without naming it directly?` },
            { id: `reflect-sound`, category: `Listening`, prompt: `Sound carries feeling beneath the words. Think of a line, a lyric, a saying, even a phrase in Spanish, whose sound you love regardless of meaning. What is it about how it sounds, the rhythm, the repeated sounds, that moves you?` },
            { id: `reflect-heritage`, category: `Poetry in your language`, prompt: `Caro, Spanish-language poetry is among the world's richest, Neruda, Mistral, and so many more. Is there a poem, song lyric, or saying in Spanish that matters to you? What does it do in Spanish that might be hard to carry into English?` },
            { id: `reflect-symbol`, category: `Your own symbols`, prompt: `A symbol is an image standing for something larger, a road for a life choice, the sea for the unknown. What image or place from your own life has become a symbol to you, carrying meaning far bigger than the thing itself?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "poetry is just fancy, overcomplicated writing, say what you mean in plain words." State that view as strongly as you can. Where does it have a point, and what can concentrated, image-and-sound-rich language do that plain prose can't?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Poetry opens up when you slow down and listen. These build the habit of deep, unafraid reading. Two paths.`,
          familyActivity: {
            title: `The Slow Poem Night`,
            duration: `One evening`,
            description: `Spend one evening reading a single short poem the slow way, together. Choose one short poem everyone can access (there are wonderful, free, age-appropriate poems online, and Spanish-language poems count beautifully). Now resist the urge to "solve" it. First pass: each person reads it silently, then says, out loud, just one honest gut reaction, what did it make you feel, no analysis allowed yet. Second pass: read it aloud, slowly, taking turns, and listen for the music, does it rush or linger, what sounds repeat? Third pass: hunt together for the tools, what images do you see, is there a metaphor or symbol, where do the lines break and why? Finally, talk about what it might mean, and welcome more than one reading as long as someone can point to words on the page that support it. The whole point is to feel, as a family, that a poem isn't a locked box with one answer, it's an experience that opens wider the slower and more attentively you read it. One small poem, read deeply, beats ten poems skimmed.`,
          },
          projectOption: {
            title: `Keep A Poem-A-Week Journal, ongoing (optional)`,
            duration: `Ongoing, ~20 minutes per week`,
            description: `Become a deep reader and maker of poems. Each week, do two things. First, find one poem you've never read, from any time, place, or language, including Spanish-language poets, and read it the slow way: an honest gut reaction first, then aloud for sound, then a hunt for imagery, figurative language, line breaks, and form. In your journal, write a few sentences on what it made you feel and one specific thing about how it created that effect (a metaphor, a sound, a line break). Second, every other week, write a short poem of your own that deliberately uses one tool you've been studying, build it around a single strong image, or try a metaphor, or shape it with intentional line breaks. Don't aim for "good," aim for true and concentrated, every word working. Over months, your journal becomes both a record of poems that moved you and a body of your own work, and the fear of poetry will be long gone, replaced by the quiet pleasure of reading the most concentrated language there is, slowly, and without fear.`,
            offerToParent: `Parent: opt your child into the poem-a-week journal. Regularly reading poems slowly (feeling, then sound, then technique) and writing short poems using specific tools builds close-reading skill, figurative-language fluency, and creative voice, while permanently dissolving the "poetry is a scary puzzle" fear that stops so many readers. It's low-time, high-value, CCSS-aligned work that compounds beautifully over months and connects naturally to your family's Spanish-language literary heritage.`,
          },
          identityQuestion: `If you become someone who can walk up to any poem, slow down without fear, and actually hear what it's doing, the images, the music, the shape, and trust your own honest, grounded response, what does that let you experience in language, and in life, that someone who skims everything and fears the locked box can never quite reach?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who slows down and actually hears a poem.`,
            `A reader who isn't afraid of poetry anymore.`,
            `Someone who trusts my own honest response to what I read.`,
          ],
          saveKey: `identity_responses_ela_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Nine done, and you've learned to read the most concentrated language there is. You learned that poetry packs huge meaning into very few words, which is why it rewards slow, repeated, aloud reading more than any other form, and why you can't skim it. You learned to read for the seeing, imagery and figurative language, metaphor, simile, personification, and symbol, that make you feel through pictures and point one thing through another. You learned to read for the hearing, rhythm, rhyme, and alliteration, the music that carries feeling beneath the literal words. And you learned to read for the shape, the line breaks, the form, the stanzas, the white space, all deliberately designed. Most of all, you were freed from the great poetry-killing fear: a poem is not a locked box with one secret answer you're too dim to find. It's an experience, and your honest response, grounded in what's on the page, matters. You can now walk up to any poem, slow down, and actually hear what it's doing. Next: we turn from reading to building, research writing, the documented essay, where you'll learn to make a real argument backed by evidence. Onward, {name}. — Quill`,
          badge: `poetry-analyst`,
          badgeName: `Poetry Analyst`,
          xpEarned: 75,
          competencies: [
            `Understands poetry as concentrated language that rewards slow, repeated, aloud reading`,
            `Reads imagery and figurative language: metaphor, simile, personification, and symbol`,
            `Hears the music of poetry: rhythm, meter, rhyme, alliteration, and sound-meaning links`,
            `Reads the shape of a poem: line breaks, form (sonnet, haiku, free verse), stanzas, white space`,
            `Rejects the "one secret answer" myth and trusts an honest, evidence-grounded response`,
            `Recognizes that a rich poem can support more than one valid, text-grounded reading`,
            `Approaches any unfamiliar poem with a deliberate method instead of fear`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Research Writing — The Documented Essay`,
            hook: `Building a real argument backed by solid evidence and honest sources. A Source Investigation.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L09 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
