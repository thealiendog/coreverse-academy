// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L13 — Style and Voice
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing: Style, Voice, Word Choice, Syntax
// Interaction: CASE STUDY (cases[] accordion). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l13-v1";

const ELA_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-13`,
      title: `Style and Voice`,
      duration: 35,
      xpReward: 75,
      badge: `voice-finder`,
      badgeName: `Voice Finder`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, you've learned to build arguments and weave sources. Now we turn to something subtler and, in a way, more personal: how your writing sounds. Two writers can make the exact same point and sound completely different, one stiff and forgettable, one alive and unmistakably theirs. That difference is style and voice. Style is the sum of your choices: the words you pick, the length and rhythm of your sentences, the tone you strike. Voice is what emerges from those choices, the personality on the page, the sense that a real human with a particular way of seeing is talking to you. Here's the key idea most people get wrong: voice is not something you're born with or stuck without. It's built, deliberately, from choices you learn to control. And great style isn't about big fancy words, it's about the right words, in the right rhythm, for the right reader and purpose. A scientist, a poet, and a comedian all have powerful styles, completely different ones, each perfectly suited to their work. Today you'll learn to hear style, control it, and begin to find the voice that's unmistakably yours. Onward.`,
          headline: `Style and Voice`,
          subtitle: `The art of writing that sounds unmistakably, powerfully like you. A Case Study.`,
          visual: `/voyager-assets/ela/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Same Point, Different Sound`,
          paragraphs: [
            `Two writers can make the exact same point and sound completely different. One comes out stiff, gray, forgettable. The other feels alive, with a personality you can almost hear. The information is identical; the experience of reading is worlds apart. That difference, how writing sounds, is what we call style and voice, and it's no accident.`,
            `Style is the sum of a writer's choices: which words they pick, how long and how rhythmic their sentences are, the tone they strike. Voice is what those choices add up to, the personality on the page, the sense that a particular human with a particular way of seeing is speaking to you. Style is the how; voice is the who that emerges from it.`,
            `The biggest myth is that voice is something you either have or don't, a gift you're born with. Not true. Voice is built, deliberately, from choices you can learn to hear and control. Every distinctive writer you admire made thousands of small decisions to sound that way. The good news: you can learn those decisions, and find a voice that's unmistakably yours.`,
          ],
          image: `/voyager-assets/ela/l13-s1-sound.webp`,
          imageCaption: `Two writers can make the exact same point and sound completely different, one stiff, gray, forgettable, the other alive with a personality you can almost hear. The information is identical; the experience is worlds apart. That difference, how writing SOUNDS, is STYLE and VOICE, and it's no accident. STYLE is the sum of a writer's choices: which words they pick, how long and rhythmic their sentences are, the tone they strike. VOICE is what those choices add up to, the personality on the page, a particular human speaking to you. Style is the how; voice is the who. The biggest myth is that voice is a gift you're born with, not true: voice is built, deliberately, from choices you can learn to hear and control. You can find a voice that's unmistakably yours.`,
          vocab: [
            { word: `style`,
              definition: `The sum of a writer's choices, word choice, sentence length and rhythm, tone, that shapes how their writing sounds.`,
              audioPrompt: `Style, {name}, is the sum of a writer's choices: the words they pick, how long and rhythmic their sentences are, the tone they strike. Style is the "how" of writing, the choices that shape the way it sounds.` },
            { word: `voice`,
              definition: `The personality that emerges from a writer's style, the sense that a particular human is speaking to you on the page.`,
              audioPrompt: `Voice, {name}, is the personality that emerges from your style, the sense that a particular human with a particular way of seeing is speaking to you. Style is the how; voice is the who that comes through.` },
            { word: `built`,
              definition: `The key truth about voice: it isn't an inborn gift but something deliberately built from choices you can learn to control.`,
              audioPrompt: `Voice is built, not born, {name}. It isn't a gift you either have or don't, it's made from thousands of small choices you can learn to hear and control. That means anyone can develop a real voice, including you.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Word Choice: Diction`,
          paragraphs: [
            `The first ingredient of style is diction, your word choice. Every word carries not just a meaning but a feeling and a register. "Inexpensive," "cheap," and "affordable" all point at low cost, but each sounds different: one neutral, one slightly negative, one positive. Choosing among them is a style decision that shapes how your reader feels.`,
            `Words also carry connotation, the emotional cloud around a word beyond its dictionary definition. "Slim" and "scrawny" both mean thin, but one flatters and one insults. Skilled writers feel these shades and choose on purpose. The same fact, described with different connotations, can make a reader admire or recoil, all without a single word being untrue.`,
            `And register, how formal or casual your words are, must fit your reader and purpose. Big, fancy words don't make writing better; the right words do. A legal contract and a text to a friend call for completely different diction, and using the wrong register, stuffy where you should be warm, or sloppy where you should be precise, wrecks the effect no matter how smart the content.`,
          ],
          image: `/voyager-assets/ela/l13-s2-diction.webp`,
          imageCaption: `The first ingredient of style is DICTION, your word choice. Every word carries not just meaning but a feeling and a register: "inexpensive," "cheap," and "affordable" all point at low cost but sound different, neutral, slightly negative, positive. Words carry CONNOTATION, the emotional cloud beyond the dictionary definition: "slim" and "scrawny" both mean thin, but one flatters and one insults. The same fact, described with different connotations, can make a reader admire or recoil, without a word being untrue. REGISTER, how formal or casual, must fit your reader and purpose. Big fancy words don't make writing better; the RIGHT words do. A legal contract and a text to a friend call for completely different diction, and the wrong register wrecks the effect.`,
          vocab: [
            { word: `diction`,
              definition: `A writer's word choice. Each word carries a feeling and a level of formality, not just a meaning.`,
              audioPrompt: `Diction, {name}, is simply your word choice, and it's the first ingredient of style. Every word carries a feeling and a level of formality, not just a meaning, so the words you pick shape how your writing lands.` },
            { word: `connotation`,
              definition: `The emotional cloud around a word beyond its literal meaning. "Slim" and "scrawny" mean the same but feel opposite.`,
              audioPrompt: `Connotation, {name}, is the emotional cloud around a word, beyond its dictionary meaning. Slim and scrawny both mean thin, but one flatters and one insults, that difference is connotation, and skilled writers choose it on purpose.` },
            { word: `register`,
              definition: `How formal or casual your language is. Good register fits the reader and purpose; the wrong one wrecks the effect.`,
              audioPrompt: `Register, {name}, is how formal or casual your words are. A legal contract and a text to a friend need totally different registers, and using the wrong one, too stuffy or too sloppy, ruins the effect no matter how smart the content.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sentences: Syntax And Rhythm`,
          paragraphs: [
            `If diction is your words, syntax is how you arrange them into sentences, and it controls the rhythm of your prose. Short sentences are punchy. They land. They create urgency, emphasis, impact. Long, flowing sentences, by contrast, can carry the reader gently through a connected chain of ideas, building and unfolding, gathering momentum as they go.`,
            `The secret is variety. A page of all-short sentences feels choppy and breathless; a page of all-long ones exhausts and loses the reader. Great writers mix them on purpose, using rhythm like music. A string of longer sentences, then a short one. Like that. The short sentence after long ones hits hard precisely because of the contrast.`,
            `Sentence structure is a tool, not just a grammar rule. Where you place your most important word, how you open and close a sentence, when you break a pattern, all shape meaning and feeling. Reading your own work aloud is the best test: your ear catches clunky rhythm, monotony, and run-ons that your eye slides right past. Style lives in the sound.`,
          ],
          image: `/voyager-assets/ela/l13-s3-syntax.webp`,
          imageCaption: `If diction is your words, SYNTAX is how you arrange them into sentences, controlling the RHYTHM of your prose. Short sentences are punchy. They land. They create urgency and impact. Long, flowing sentences carry the reader gently through a chain of ideas, building and unfolding, gathering momentum. The secret is VARIETY: all-short feels choppy and breathless, all-long exhausts and loses the reader. Great writers mix them on purpose, using rhythm like music, a string of longer sentences, then a short one. Like that. The short sentence hits hard precisely because of the contrast. Sentence structure is a tool, not just a grammar rule, where you place your key word shapes meaning. Read your work ALOUD: your ear catches clunky rhythm your eye slides past.`,
          vocab: [
            { word: `syntax`,
              definition: `How a writer arranges words into sentences. Syntax controls the rhythm, pace, and emphasis of prose.`,
              audioPrompt: `Syntax, {name}, is how you arrange your words into sentences, and it controls the rhythm of your writing. Short sentences feel punchy; long ones flow. How you build sentences shapes how your prose feels to read.` },
            { word: `sentence variety`,
              definition: `Deliberately mixing short and long sentences so prose has rhythm, rather than feeling choppy or exhausting.`,
              audioPrompt: `Sentence variety, {name}, means mixing short and long sentences on purpose. All short feels choppy; all long exhausts the reader. Great writers vary them like music, and a short sentence after long ones hits hard.` },
            { word: `read aloud`,
              definition: `The best test of style: your ear catches clunky rhythm, monotony, and run-ons that your eye reads right over.`,
              audioPrompt: `Reading your work aloud, {name}, is the best test of style. Your ear catches clunky rhythm, monotony, and run-on sentences that your eye slides right past. Style lives in the sound, so listen to it.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tone, And Many Styles For Many Purposes`,
          paragraphs: [
            `Tone is the attitude your writing takes toward its subject and reader, serious, playful, urgent, warm, ironic. Tone emerges from diction and syntax working together, and it must fit your purpose. A heartfelt eulogy and a snappy ad need opposite tones; getting tone wrong, joking at a solemn moment, is jarring no matter how skilled the words.`,
            `This points to a crucial truth: there is no single "good style." A scientist writing a paper, a poet writing a verse, and a comedian writing a bit all have powerful styles, completely different ones, each perfectly suited to its purpose and audience. Style isn't about sounding fancy or "literary." It's about fitting the right choices to the right job.`,
            `So a skilled writer isn't locked into one sound; they can shift style for the situation while still keeping a recognizable voice underneath. You write differently in a college essay than a text to a friend, but a developed voice carries something of you into both. Mastering style means controlling your choices on purpose; finding your voice means those choices become unmistakably yours.`,
          ],
          image: `/voyager-assets/ela/l13-s4-tone.webp`,
          imageCaption: `TONE is the attitude your writing takes toward its subject and reader, serious, playful, urgent, warm, ironic. Tone emerges from diction and syntax working together and must fit your purpose: a heartfelt eulogy and a snappy ad need opposite tones, and joking at a solemn moment is jarring. This points to a crucial truth: there is no single "good style." A scientist, a poet, and a comedian all have powerful styles, completely different ones, each suited to its purpose and audience. Style isn't about sounding fancy or "literary," it's fitting the right choices to the right job. A skilled writer shifts style for the situation while keeping a recognizable voice underneath. Mastering style means controlling your choices; finding your voice means those choices become unmistakably yours.`,
          vocab: [
            { word: `tone`,
              definition: `The attitude your writing takes toward its subject and reader, serious, playful, warm, ironic. It must fit your purpose.`,
              audioPrompt: `Tone, {name}, is the attitude your writing takes toward its subject and reader: serious, playful, warm, urgent, ironic. It comes from diction and syntax together, and it has to fit your purpose, or it jars the reader.` },
            { word: `purpose and audience`,
              definition: `Who you're writing for and why. There's no single "good style", the right style fits the specific purpose and reader.`,
              audioPrompt: `Purpose and audience, {name}, are who you're writing for and why, and they decide what good style is. There's no single best style: a scientist, poet, and comedian each have a powerful one, suited to their own job.` },
            { word: `code-switching`,
              definition: `Shifting style to fit different situations while keeping a recognizable voice underneath, a mark of a skilled writer.`,
              audioPrompt: `Code-switching in writing, {name}, means shifting your style to fit the situation, a college essay versus a text to a friend, while still keeping a recognizable voice underneath. Skilled writers control their sound on purpose.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
            `Pull it together. Style is the sum of your choices, and voice is the personality that emerges from them. The key truth: voice is built, not born, made from decisions you can learn to control. Style rests on diction (word choice, with its connotation and register), syntax (sentence structure and rhythm, mastered by varying length and reading aloud), and tone (the attitude, which must fit your purpose).`,
            `And there's no single "good style." A scientist, a poet, and a comedian all wield powerful, completely different styles, each fit to its purpose and audience. Style isn't about fancy words but the right words for the right job, and a skilled writer can shift style for the situation while keeping a recognizable voice underneath.`,
            `Now the case-study screen hands you five real style situations: the same point written two ways, a diction choice that changes everything, sentence rhythm at work, a tone-purpose mismatch, and a writer finding their own voice. For each, be the voice finder: hear the choices, name their effect, and explain how to control style on purpose. Onward.`,
          ],
          image: `/voyager-assets/ela/l13-s5-before.webp`,
          imageCaption: `Threads together. STYLE is the sum of your choices; VOICE is the personality that emerges from them. The key truth: voice is built, not born, made from decisions you can control. Style rests on DICTION (word choice, with connotation and register), SYNTAX (sentence structure and rhythm, mastered by varying length and reading aloud), and TONE (the attitude, which must fit your purpose). There's no single "good style", a scientist, poet, and comedian all wield powerful, different styles fit to their job. Style isn't fancy words but the right words for the right job, and a skilled writer shifts style while keeping a recognizable voice. The case-study screen hands you five style situations. Be the voice finder: hear the choices, name their effect, control style on purpose.`,
          vocab: [
            { word: `revision for style`,
              definition: `Rewriting not to fix errors but to improve sound, sharpening diction, varying syntax, and tuning tone.`,
              audioPrompt: `Revising for style, {name}, isn't fixing spelling or grammar, it's rewriting to improve how the work sounds: sharpening word choices, varying sentence rhythm, and tuning the tone until it does what you want.` },
            { word: `precision`,
              definition: `Choosing the exact right word and structure rather than the biggest or fanciest. The heart of strong style.`,
              audioPrompt: `Precision, {name}, is choosing the exact right word and structure, not the biggest or fanciest. Strong style isn't about sounding impressive; it's about the precise choice that does exactly the job you need.` },
            { word: `authenticity`,
              definition: `Writing that sounds genuinely like you. A developed voice carries something true of the writer into the work.`,
              audioPrompt: `Authenticity, {name}, is writing that sounds genuinely like you. A developed voice carries something true of the writer onto the page, so even across different situations, the reader senses a real, particular person.` },
          ],
        },

        {
          id: `l13-case-study`,
          type: `case-study`,
          headline: `Five Studies In Style`,
          intro: `{name}, five real style situations. For each, be the voice finder: hear the choices, name their effect, and explain how a writer controls style on purpose to fit their reader and goal.`,
          cases: [
            {
              id: `c1`,
              title: `Same point, two styles`,
              type: `Style overview`,
              description: `Two students describe the same rainstorm. Student A: "Precipitation occurred in significant quantities during the afternoon hours, resulting in elevated moisture levels." Student B: "The sky cracked open at three o'clock and didn't stop. By dinner, the street was a river." Same event. Consider what each style does.`,
              questions: [
                `How would you describe each writer's style and voice?`,
                `Which choices, words, sentences, create the difference?`,
                `Is one simply "better," or does it depend on purpose?`,
              ],
              evaluation: `Student A's style is stiff, abstract, and impersonal, heavy formal diction ("precipitation occurred," "elevated moisture levels"), no rhythm, no human behind it; the voice is bureaucratic and forgettable. Student B's style is vivid and alive, concrete words ("cracked open," "a river"), strong rhythm with a punchy short sentence ("and didn't stop"), and a clear human perspective; the voice has personality you can almost hear. The difference comes from diction (concrete and sensory versus abstract and Latinate) and syntax (varied, rhythmic sentences versus one flat clause). But is B simply "better"? It depends on purpose. For a story, a personal essay, or anything meant to move a reader, B wins easily. For a technical weather report measuring rainfall, A's precision and neutrality might actually fit better. That's the deep lesson: there's no single good style, only style that fits the job. Here, for human writing, B's deliberate choices create a voice; A's create gray. The skill is hearing why, and choosing on purpose.`,
            },
            {
              id: `c2`,
              title: `One word changes everything`,
              type: `Diction / connotation`,
              description: `A writer describes a politician's supporters. They could write the crowd was "passionate," "enthusiastic," "fervent," "rabid," or "fanatical." Every word roughly means "very into it," but each lands completely differently. Consider the power hidden in a single word choice.`,
              questions: [
                `How do these word choices change the reader's view, despite similar meanings?`,
                `What's the difference between denotation and connotation here?`,
                `Why is this a matter of style AND honesty?`,
              ],
              evaluation: `These words change the reader's view dramatically even though their denotation (literal meaning) is similar, all signal strong feeling, because their connotation (emotional cloud) ranges from warm to alarming. "Passionate" and "enthusiastic" flatter the crowd as positively engaged; "fervent" is intense but fairly neutral; "rabid" and "fanatical" cast them as dangerous, irrational, even animal-like. So a writer can shape how readers feel about the exact same crowd without stating a single false fact, just by choosing where on that connotation scale to land. This is style at its most powerful: diction doing persuasive work beneath the reader's notice. And it's why style is also a matter of honesty. A responsible writer chooses connotation that fairly matches reality; a manipulative one picks loaded words to sneak a judgment past the reader as if it were neutral description. The voice finder's skill is double: to wield connotation deliberately in your own writing, and to notice when someone else's word choice is quietly doing an argument's work for them.`,
            },
            {
              id: `c3`,
              title: `Rhythm doing the work`,
              type: `Syntax / rhythm`,
              description: `A writer wants a moment to feel tense and final. Version 1: "He opened the door slowly and then he saw that the room was completely empty and all of the furniture was gone." Version 2: "He opened the door. The room was empty. Everything was gone." Same facts. Consider the effect of the sentence structure.`,
              questions: [
                `Why does Version 2 feel more powerful and tense?`,
                `What is the rhythm doing that the words alone aren't?`,
                `When might the longer, flowing Version 1 actually be the right choice?`,
              ],
              evaluation: `Version 2 feels more powerful because its short, clipped sentences create a staccato rhythm, each one landing like a separate blow, that mirrors the character's dawning shock and makes the emptiness feel stark and final. Version 1's single long sentence, strung together with "and... and," lets the tension leak away; the rhythm flows past the horror instead of stopping on it. So the rhythm is doing emotional work the words alone aren't: the pauses between Version 2's sentences are silences the reader feels, and the bluntness enacts the character's experience rather than just reporting it. This is syntax as a tool, not a rule. But Version 1 isn't always wrong, the long, flowing style could be exactly right elsewhere: to convey a dreamy, unbroken stream of thought, a breathless rush of excitement, or a calm, connected explanation. The skill isn't "short is better"; it's matching rhythm to the feeling you want. A great writer hears the difference, often by reading aloud, and chooses the structure that makes the reader feel what the moment demands.`,
            },
            {
              id: `c4`,
              title: `When tone misfits purpose`,
              type: `Tone / purpose`,
              description: `A student writes a thank-you note to a grandmother for a thoughtful gift, but uses the breezy, joke-filled style of a text to friends: "omg granny the sweater is sooo random but I guess I'll rock it lol thx." The words are friendly enough. Consider what's gone wrong.`,
              questions: [
                `What's the mismatch between tone and purpose here?`,
                `Why does the wrong register undercut even a kind message?`,
                `What tone would fit, and would it require a totally different person's voice?`,
              ],
              evaluation: `The mismatch is between a casual, jokey tone and a purpose, sincere gratitude to a grandmother, that calls for warmth and respect. The diction ("omg," "random," "lol," "thx") and breezy register belong to a text among friends, not a thank-you to an elder who put thought into a gift. Even though the message isn't unkind, the wrong register undercuts it: "sooo random" can read as faintly mocking the gift, and the throwaway "thx" makes the gratitude feel unfelt, so the tone accidentally signals the opposite of what the writer means. The fitting tone would be warm, specific, and sincere, something like thanking her genuinely, mentioning what the gift means, and saying it with care. Crucially, that doesn't require becoming a different person or losing the writer's voice; it requires code-switching, shifting style to fit the audience and purpose while still sounding like themselves. A skilled writer keeps a recognizable voice but tunes diction, register, and tone to the situation. Here, matching tone to purpose is what lets the real affection actually land.`,
            },
            {
              id: `c5`,
              title: `Finding your own voice`,
              type: `Voice / authenticity`,
              description: `A young writer admires a favorite author and tries to copy them exactly, but it comes out stilted and fake. A teacher tells them to write the way they actually talk and think, about something they truly care about, and suddenly the writing comes alive. Consider what just happened.`,
              questions: [
                `Why did imitating the admired author fall flat?`,
                `What does "write the way you talk and think" unlock?`,
                `How do you build a real voice, learning from others without becoming a copy?`,
              ],
              evaluation: `Imitating the admired author fell flat because a borrowed voice is a costume, not a self; copying someone else's diction and rhythm without their reasons produces something stilted, because the choices aren't connected to how this writer actually sees and thinks. "Write the way you talk and think" unlocked authenticity: it gave the writer permission to make choices rooted in their own real perspective and rhythms of speech, so the personality on the page finally matched a real person. That's voice, built, not born, from genuine choices. But the answer isn't to ignore other writers, it's to learn from them the right way. You study admired authors to steal techniques, a way of varying sentences, a knack for a vivid word, a kind of tone, and then absorb those tools into your own perspective rather than wearing the whole author like a mask. Over time, the borrowed techniques get filtered through your own way of seeing until the result sounds like nobody but you. That's how a real voice is built: learning widely, practicing the choices, reading your work aloud, and staying rooted in something true to yourself.`,
            },
          ],
          synthesisPrompt: `After all five: how would you describe the voice you want to write in, and what choices, diction, sentence rhythm, tone, would build it? Whose style do you admire, and what could you learn from them without becoming a copy? In 5-6 sentences.`,
          reflectionPrompt: `Voice is built, not born, and it sounds most alive when it's authentically yours. When does your writing (or speaking) feel most like the real you? What makes it go flat and impersonal, and what brings it back to life?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the difference between style and voice?`,
              options: [
                `Style is for fiction and voice is only for nonfiction writing.`,
                `Style is the sum of a writer's choices; voice is the personality that emerges from them.`,
                `Style simply means always using big words, while voice just means using smaller words instead.`,
                `Style is what you write about; voice is how long your essay is.`,
              ],
              correctIndex: 1,
              explanation: `Style is the sum of a writer's choices (diction, syntax, tone) and voice is the personality that emerges from those choices, the sense of a particular human speaking. Style is the how; voice is the who. The distractors invent false splits by genre, word size, or topic.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson calls one common belief about voice a "myth." Which one?`,
              options: [
                `That voice is something you're born with and either have or don't.`,
                `That voice is built from choices a writer can learn to control.`,
                `That different writers can have very different voices.`,
                `That reading aloud helps you hear your own style.`,
              ],
              correctIndex: 0,
              explanation: `The myth is that voice is an inborn gift you either have or don't; in truth, voice is built deliberately from choices you can learn to hear and control. The distractors all state things the lesson affirms as true.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "connotation"?`,
              options: [
                `The exact dictionary definition of a word.`,
                `The number of syllables a word contains.`,
                `The emotional cloud around a word, beyond its literal meaning.`,
                `The rule that long words are always more impressive.`,
              ],
              correctIndex: 2,
              explanation: `Connotation is the emotional cloud around a word beyond its literal meaning, why "slim" and "scrawny" mean the same thing but feel opposite. The distractors describe denotation, syllable count, and a false rule about long words.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `According to the lesson, what makes diction strong?`,
              options: [
                `Always choosing the biggest, fanciest word available.`,
                `Choosing the right word, with the right connotation and register, for the job.`,
                `Carefully avoiding any single word that carries even the slightest emotional connotation at all.`,
                `Using the same neutral words in every kind of writing.`,
              ],
              correctIndex: 1,
              explanation: `Strong diction means choosing the right word, with fitting connotation and register, for your reader and purpose, not the biggest or fanciest. The distractors chase fancy words, deny connotation, or ignore that register must shift with purpose.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "syntax," and what does it control?`,
              options: [
                `Your word choice; it controls how formal the writing is.`,
                `Your spelling; it controls how many errors you make.`,
                `The topic of your writing; it controls what you argue.`,
                `How you arrange words into sentences; it controls rhythm and pace.`,
              ],
              correctIndex: 3,
              explanation: `Syntax is how you arrange words into sentences, and it controls the rhythm and pace of prose, short sentences punch, long ones flow. The distractors confuse syntax with diction, spelling, or topic.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the lesson say sentence variety matters?`,
              options: [
                `Because all-short feels choppy and all-long exhausts; mixing them creates rhythm.`,
                `Because every sentence in good writing must be exactly the same length.`,
                `Because long sentences are always better than short ones.`,
                `Because variety lets you avoid ever having to read your work aloud.`,
              ],
              correctIndex: 0,
              explanation: `Variety matters because a page of all-short sentences feels choppy and breathless while all-long ones exhaust the reader; great writers mix them like music, so a short sentence after long ones hits hard. The distractors demand uniformity, crown long sentences, or dismiss reading aloud.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "tone," and what must it fit?`,
              options: [
                `The volume at which writing should be read; it must fit the room.`,
                `The attitude the writing takes toward subject and reader; it must fit the purpose.`,
                `The font and color of the text; it must fit the page design.`,
                `The number of sources used; it must fit the assignment length.`,
              ],
              correctIndex: 1,
              explanation: `Tone is the attitude your writing takes toward its subject and reader (serious, playful, warm, ironic), emerging from diction and syntax, and it must fit your purpose, a eulogy and an ad need opposite tones. The distractors confuse tone with volume, formatting, or source count.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says there's no single "good style." What does that mean?`,
              options: [
                `That style doesn't matter, so any writing is as good as any other.`,
                `That only published poets and novelists are ever truly allowed to have a real style of their own.`,
                `That a scientist, poet, and comedian each have powerful, different styles fit to their purpose.`,
                `That good style always means sounding as formal and fancy as possible.`,
              ],
              correctIndex: 2,
              explanation: `There's no single good style because a scientist, a poet, and a comedian all have powerful, completely different styles, each perfectly suited to its purpose and audience; style is fitting the right choices to the right job. The distractors dismiss style, restrict it to artists, or equate it with fanciness.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The best way to write with strong style is to use the longest, most impressive, most formal words you can, since fancy vocabulary is what makes writing sound smart.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most common and damaging myths about good writing. Reaching for the longest, fanciest, most formal words usually makes writing worse, not better: it produces the stiff, gray, bureaucratic prose the lesson warns against ("precipitation occurred in significant quantities" instead of "the sky cracked open"). Strong style isn't about sounding impressive; it's about precision, choosing the exact right word, with the right connotation and register, for your specific reader and purpose. Often the right word is short, concrete, and plain. A vivid "river" beats an "elevated moisture level"; a punchy short sentence can hit harder than a sprawling formal one. And crucially, the "best" diction depends entirely on the job: a legal contract, a love letter, a science paper, and a text to a friend all call for completely different word choices, and using stuffy, fancy language where warmth or clarity is needed wrecks the effect no matter how smart the vocabulary looks. There is no single good style, only style that fits the purpose and audience. Real skill is controlling your choices on purpose, varying sentence rhythm, tuning tone, picking the precise word, and developing a voice that's authentically yours. Fancy words are a tool like any other, powerful when they fit, ruinous when they don't.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student loves a famous author and copies their exact style, but the writing comes out stilted and fake. Then they write about something they truly care about, in their own natural rhythms, and it suddenly comes alive. Using the lesson, what's the best explanation, and what should they do next?`,
              options: [
                `The author's style is bad; they should never read that author again.`,
                `They have no talent for writing and should give up on developing a voice.`,
                `Voice is built, not born, and is most alive when authentic: copying a borrowed voice is a costume disconnected from how they actually see, while writing from their own perspective unlocks real voice, so they should keep learning techniques from admired authors but filter those tools through their own genuine perspective until the writing sounds like nobody but them.`,
                `They should pick a different famous author and copy that one exactly instead.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's truth that voice is built, not born, and most alive when authentic. A copied voice is a costume, disconnected from how the writer actually sees and thinks, so it falls flat; writing from genuine perspective unlocks real voice. The way forward isn't to abandon other writers but to steal their techniques and absorb them into one's own perspective until the result sounds uniquely like the writer. The distractors blame the author, give up, or just swap which author to copy.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-authentic`, category: `Sounding like you`, prompt: `Voice is most alive when it's authentically yours. When does your writing or speaking feel most like the real you, and when does it go flat and impersonal? What's different about those two states?` },
            { id: `reflect-diction`, category: `The power of one word`, prompt: `A single word's connotation can change everything ("slim" vs "scrawny," "passionate" vs "rabid"). When have you felt the power of word choice, someone describing the same thing in a way that made you feel completely differently about it? Were they being fair?` },
            { id: `reflect-rhythm`, category: `The music of sentences`, prompt: `Sentence rhythm carries feeling. Think of a line, from a song, book, or speech, whose sound stuck with you. What was it about the rhythm, not just the meaning, that landed? How might you use rhythm in your own writing?` },
            { id: `reflect-heritage`, category: `Your voice, your roots`, prompt: `Caro, your voice carries your Colombian roots, your two languages, your way of seeing the world. How does writing or speaking in Spanish feel different from English? What part of your authentic voice do you most want to bring into everything you create?` },
            { id: `reflect-codeswitch`, category: `Shifting for the room`, prompt: `Skilled writers shift style for the situation while staying themselves. How do you change how you talk or write between a text to a friend, a message to a teacher or boss, and a heartfelt note? What stays the same, the "you" underneath, across all of them?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this talk of 'voice' is self-indulgent, just write clearly and correctly and stop worrying about sounding like yourself." State that view as strongly as you can. Where does it have a real point, and where does the lesson show voice actually matters?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Style is something you can hear, control, and make your own. These tune your ear and build your voice. Two paths.`,
          familyActivity: {
            title: `The Style Makeover`,
            duration: `One sitting`,
            description: `Play with style as a family and hear how much it changes everything. Pick one boring, plain sentence, something flat like "The dog ran across the yard" or "We had dinner." Then, together, rewrite it in wildly different styles, and read each version aloud (style lives in the sound). Try: a dramatic, suspenseful version with short, punchy sentences; a flowery, over-the-top poetic version; a stiff, official "government report" version; a breezy text-to-a-friend version with slang; a scared version; a joyful version. Same event every time, totally different sound. Then talk about what changed: which words (diction) and which sentence rhythms (syntax) created each feeling? Which version had the strongest "voice", a personality you could hear? For a second round, try the reverse: find a short piece of real writing, an ad, a news headline, a line from a book, and as a family name its style choices and what tone they create. The goal is to train everyone's ear to hear style as a set of deliberate, changeable choices, not magic, so that writing (and reading) becomes something you can consciously control. It's genuinely fun, and it makes the whole family better readers and writers at once.`,
          },
          projectOption: {
            title: `The Voice Lab, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Build your own voice in a deliberate lab. Week 1, study and steal: pick two or three writers whose style you admire (authors, songwriters, even great YouTubers or essayists). For each, become a style detective, name their diction (what kinds of words?), their syntax (short and punchy, or long and flowing?), and their tone, then write a short paragraph deliberately imitating each one, just to feel the techniques from the inside. Notice what you can borrow: a way of varying sentences, a knack for a vivid word, a kind of humor or warmth. Week 2, find your own: choose a subject you genuinely care about and write a short piece (a personal essay, a story opening, an opinion piece) using everything you've learned, but now filtered through your own perspective and natural rhythms. Make deliberate choices: vary your sentence lengths for rhythm, pick precise words with the right connotation, set a tone that fits your purpose. Then read it aloud and revise for sound, not just correctness. Finish with a short note on your own voice: what choices make your writing sound like you, and which borrowed techniques you've made your own? You'll come away understanding that voice isn't a mystery you're born with or without, it's a craft you can build, and you'll have begun building yours.`,
            offerToParent: `Parent: opt your child into the Voice Lab project. Deliberately analyzing admired writers' diction, syntax, and tone, then practicing those techniques and filtering them through their own perspective, is exactly how real writers develop voice, and it directly builds the standards' goals around style, word choice, and sentence structure. Reading aloud and revising for sound trains an ear that improves all their writing. The closing reflection turns intuition into conscious craft. It's creative, rigorous, CCSS-aligned work that leaves your child with a stronger, more authentic writing voice and the confidence that voice is built, not innate.`,
          },
          identityQuestion: `If you become someone who can hear style as deliberate choices, control diction, rhythm, and tone on purpose, and write in a voice that's unmistakably and authentically yours, what kind of communicator does that make you, in a world full of gray, forgettable, copied prose, that someone who thinks "voice" is just luck can never quite become?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can hear style and control it on purpose.`,
            `A writer building a voice that sounds unmistakably like me.`,
            `Someone who learns from others without becoming a copy.`,
          ],
          saveKey: `identity_responses_ela_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteen done, and you've started finding your voice. You learned that two writers can make the same point and sound completely different, and that this difference, how writing sounds, is style and voice. Style is the sum of your choices; voice is the personality that emerges from them. Most importantly, you learned the myth-busting truth: voice is built, not born, made from thousands of small choices you can learn to control. You learned the ingredients, diction (word choice, with its powerful connotation and register), syntax (sentence structure and rhythm, mastered by varying length and reading aloud), and tone (the attitude, which must fit your purpose). You learned there's no single good style, that a scientist, a poet, and a comedian each wield a powerful, different one, and that style is about the right words for the right job, not the fanciest. And you learned that a real voice is built by learning techniques from writers you admire and filtering them through your own genuine perspective, until the writing sounds like nobody but you. Next: we go under the hood of the sentence itself, grammar and syntax used not just correctly, but for deliberate effect. Onward, {name}. — Quill`,
          badge: `voice-finder`,
          badgeName: `Voice Finder`,
          xpEarned: 75,
          competencies: [
            `Distinguishes style (the choices) from voice (the personality that emerges)`,
            `Understands that voice is built deliberately, not an inborn gift`,
            `Controls diction, including connotation and register, for effect and honesty`,
            `Uses syntax and sentence variety to create rhythm, pace, and emphasis`,
            `Matches tone to purpose and audience, recognizing there is no single "good style"`,
            `Shifts style across situations while maintaining a recognizable, authentic voice`,
            `Builds a personal voice by learning techniques from admired writers and filtering them through genuine perspective`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Grammar — Syntax for Effect`,
            hook: `Going under the hood of the sentence, grammar used not just correctly, but as a tool. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L13 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
