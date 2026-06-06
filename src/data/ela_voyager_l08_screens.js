// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L08 — Drama: Shakespeare and Modern Plays
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature (Drama), Performance & Text
// Interaction: PERSPECTIVES. Sections <=1100ch (paras ~330ch). 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l08-v1";

const ELA_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-08`,
      title: `Drama: Shakespeare and Modern Plays`,
      duration: 35,
      xpReward: 75,
      badge: `drama-reader`,
      badgeName: `Drama Reader`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, today we step onto the stage. Drama is unlike the novel or the poem in one huge way: a play is not finished on the page. It is a blueprint, written to be performed, to be spoken aloud by living actors in front of a breathing audience. A novel happens in your head; a play happens in a room full of people, in real time, never exactly the same way twice. To read drama well, you must learn to do something special: hear the lines, imagine the stage, and see the silent action between the words. We will start with William Shakespeare, who wrote four hundred years ago and yet still fills theaters across the whole planet, and ask why his plays refuse to die. Then we will look at modern drama, which often strips away the grand poetry to put ordinary people and raw, real life under the stage lights. Along the way you will learn the tools of the form, dialogue, soliloquy, stage directions, dramatic irony, and the strange, wonderful fact that a play only fully exists when it is performed. Onward.`,
          headline: `Drama: Shakespeare and Modern Plays`,
          subtitle: `Stories built to be performed, from Shakespeare's stage to the modern theater. Multiple Perspectives.`,
          visual: `/voyager-assets/ela/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Play Is A Blueprint`,
          paragraphs: [
            `Drama is different from every other kind of literature in one huge way: a play is not finished on the page. A novel is complete when you read it. A play is a blueprint, written to be performed, spoken aloud by living actors before a breathing audience. The words on the page are only half the art; the other half happens in the room.`,
            `This changes how you read it. A novel happens silently in your head. A play happens in real time, in a space full of people, and never exactly the same way twice. The same lines can be whispered or screamed, played for laughs or for heartbreak. To read drama well, you must hear the lines in your mind and imagine the living performance they were built to become.`,
            `So a reader of drama learns a special skill: lift the words off the flat page and stage them in your imagination. Picture the actors, hear their voices, see where they stand and move, feel the silences. The text is a set of instructions for an experience. Reading a play as if it were a novel misses the point, you must read it as a plan for something alive.`,
          ],
          image: `/voyager-assets/ela/l08-s1-blueprint.webp`,
          imageCaption: `Drama differs from every other literature in one huge way: a play is not finished on the page. A novel is complete when you read it; a PLAY is a blueprint, written to be performed, spoken aloud by living actors before a breathing audience. The words are only half the art; the other half happens in the room. A novel happens silently in your head, but a play happens in real time, never exactly the same way twice, the same lines whispered or screamed, played for laughs or heartbreak. So a reader of drama learns a special skill: lift the words off the flat page and stage them in imagination, picturing the actors, hearing their voices, feeling the silences. The text is a set of instructions for an experience, a plan for something alive.`,
          vocab: [
            { word: `drama`,
              definition: `Literature written to be performed by actors before an audience, a blueprint for a live experience, not a finished work on the page.`,
              audioPrompt: `Drama, {name}, is literature written to be performed, not just read. A play is a blueprint, made to be spoken aloud by living actors before an audience. The words on the page are only half of it; the rest happens in the room.` },
            { word: `performance`,
              definition: `The living act of staging a play, where actors bring the text to life. It is never exactly the same twice.`,
              audioPrompt: `Performance, {name}, is the living act of staging a play, where actors bring the words to life in real time. It is never exactly the same twice, the same lines can be whispered or screamed, played for laughs or for heartbreak.` },
            { word: `staging`,
              definition: `Imagining or arranging how a play looks and moves in performance, where actors stand, how they speak, what the audience sees.`,
              audioPrompt: `Staging, {name}, means imagining or arranging how a play actually looks and moves: where the actors stand, how they speak, what the audience sees. A skilled reader stages the play in their imagination as they read.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Tools Of The Stage`,
          paragraphs: [
            `Plays are built from special tools. Dialogue, the words characters speak to one another, carries almost everything: plot, character, conflict, theme. With no narrator to explain things, what people say, and how they say it, must do the work. Learning to read dialogue closely is the heart of reading drama.`,
            `A soliloquy is a powerful tool: a character alone on stage, speaking their inner thoughts aloud so the audience hears what no other character can. Shakespeare's "To be, or not to be" is a soliloquy. It lets us inside a mind directly. An aside is a quick version, a line spoken to the audience, unheard by the others on stage.`,
            `Stage directions are the playwright's notes about action, setting, and movement, often the silent storytelling between the lines. And dramatic irony, when the audience knows something a character does not, creates suspense and meaning unique to theater. These tools, dialogue, soliloquy, stage directions, dramatic irony, are how a play does what a novel does, but built for the living stage.`,
          ],
          image: `/voyager-assets/ela/l08-s2-tools.webp`,
          imageCaption: `Plays are built from special tools. DIALOGUE, the words characters speak to each other, carries almost everything, plot, character, conflict, theme, because there is no narrator to explain; what people say and how they say it must do the work. A SOLILOQUY is a character alone on stage speaking their inner thoughts aloud, so the audience hears what no other character can ("To be, or not to be"); an ASIDE is a quick line to the audience, unheard by the others. STAGE DIRECTIONS are the playwright's notes about action and movement, the silent storytelling between lines. DRAMATIC IRONY, when the audience knows what a character does not, creates suspense unique to theater. These tools are how a play does what a novel does, built for the living stage.`,
          vocab: [
            { word: `dialogue`,
              definition: `The words characters speak to one another. In drama, with no narrator, dialogue carries plot, character, conflict, and theme.`,
              audioPrompt: `Dialogue, {name}, is the words characters speak to each other, and in a play it carries almost everything. With no narrator to explain, what people say, and how they say it, must do all the work of telling the story.` },
            { word: `soliloquy`,
              definition: `A speech by a character alone on stage, voicing their inner thoughts aloud so the audience hears what no other character can.`,
              audioPrompt: `A soliloquy, {name}, is a speech by a character alone on stage, voicing their private thoughts aloud. It lets the audience inside a mind directly. Shakespeare's famous "To be, or not to be" is a soliloquy.` },
            { word: `dramatic irony`,
              definition: `When the audience knows something a character does not, creating suspense, dread, or meaning unique to the theater.`,
              audioPrompt: `Dramatic irony, {name}, is when the audience knows something a character does not. It creates powerful suspense and dread, because we watch a character act on knowledge we know is incomplete, helpless to warn them.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Shakespeare Won't Die`,
          paragraphs: [
            `William Shakespeare wrote over four hundred years ago, yet his plays still fill theaters across the entire planet. That refusal to die is worth understanding. He wrote comedies, tragedies, and histories, and gave us characters, Hamlet, Macbeth, Juliet, so alive they feel like real people we know, wrestling with questions we still wrestle with.`,
            `Part of his power is the language. Shakespeare wrote much of his work in verse, in vivid metaphor and rhythm, and he coined or popularized hundreds of words and phrases we still use daily without knowing it. The language can look hard at first, but spoken aloud, as it was meant to be, it carries enormous emotional force and music.`,
            `But the deepest reason he endures is theme. His plays explore what does not change: ambition and guilt in "Macbeth," indecision and grief in "Hamlet," love and feuding families in "Romeo and Juliet." Four centuries later, we still feel jealousy, doubt, love, and the hunger for power. Shakespeare won't die because he wrote about being human, and we are still human.`,
          ],
          image: `/voyager-assets/ela/l08-s3-shakespeare.webp`,
          imageCaption: `WILLIAM SHAKESPEARE wrote over four hundred years ago, yet his plays still fill theaters across the planet. He wrote comedies, tragedies, and histories, giving us characters so alive, Hamlet, Macbeth, Juliet, they feel like real people wrestling with questions we still face. Part of his power is the LANGUAGE: much of his work is in verse, vivid metaphor and rhythm, and he coined hundreds of words and phrases we use daily. It looks hard at first, but spoken aloud, as meant, it carries enormous force and music. The deepest reason he endures is THEME: ambition and guilt in Macbeth, indecision and grief in Hamlet, love and feuding in Romeo and Juliet. Four centuries later we still feel jealousy, doubt, love, and the hunger for power. He wrote about being human, and we are still human.`,
          vocab: [
            { word: `tragedy`,
              definition: `A serious drama, often ending in downfall or death, exploring suffering and human flaws. "Hamlet" and "Macbeth" are tragedies.`,
              audioPrompt: `A tragedy, {name}, is a serious play, often ending in downfall or death, that explores suffering and human flaws. Shakespeare's Hamlet and Macbeth are tragedies, where a great character is brought down, often by a flaw within.` },
            { word: `verse`,
              definition: `Language written in rhythmic, often metered lines, like poetry. Shakespeare wrote much of his drama in verse.`,
              audioPrompt: `Verse, {name}, is language written in rhythmic lines, like poetry. Shakespeare wrote much of his drama in verse, full of metaphor and music, which is why his lines carry such force when they are spoken aloud.` },
            { word: `enduring`,
              definition: `Lasting across time. Shakespeare's plays endure because their themes about being human never go out of date.`,
              audioPrompt: `Something enduring, {name}, lasts across time. Shakespeare's plays endure, still filling theaters four centuries later, because they explore what never changes in us: love, ambition, guilt, doubt, and the hunger for power.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Modern Drama: The Ordinary Made Powerful`,
          paragraphs: [
            `Centuries after Shakespeare, drama changed. Modern playwrights often stripped away the grand verse and kings to put ordinary people, a struggling salesman, a poor family, neighbors in a small town, under the stage lights. They asked: is the everyday life of a common person worthy of serious drama? Their answer was a powerful yes.`,
            `Arthur Miller's "Death of a Salesman" made the quiet tragedy of an ordinary working man feel as large as any king's downfall. Modern drama often uses realistic speech, the way people actually talk, rather than soaring verse. The aim is to hold a mirror up to real life and find the deep meaning hidden inside ordinary struggles.`,
            `Modern playwrights also experiment boldly with the form itself, breaking the "fourth wall" to address the audience, bending time, using bare or symbolic sets. The lesson of modern drama is that theater can be many things: it can crown a king or honor a salesman, speak in poetry or plain talk. The stage adapts, but its power, to make us feel another's life, endures.`,
          ],
          image: `/voyager-assets/ela/l08-s4-modern.webp`,
          imageCaption: `Centuries after Shakespeare, drama changed. Modern playwrights often stripped away grand verse and kings to put ORDINARY people, a struggling salesman, a poor family, small-town neighbors, under the lights, asking: is the everyday life of a common person worthy of serious drama? Their answer was a powerful yes. Arthur Miller's "Death of a Salesman" made an ordinary working man's quiet tragedy feel as large as any king's downfall. Modern drama often uses realistic speech, the way people actually talk, holding a mirror to real life to find meaning in ordinary struggles. Playwrights also experiment, breaking the "fourth wall," bending time, using bare sets. The stage can crown a king or honor a salesman, speak in poetry or plain talk; its power to make us feel another's life endures.`,
          vocab: [
            { word: `modern drama`,
              definition: `Theater from roughly the last century that often portrays ordinary people in realistic speech, finding deep meaning in everyday life.`,
              audioPrompt: `Modern drama, {name}, is theater of roughly the last century that often puts ordinary people under the stage lights, in realistic speech rather than grand verse, finding deep meaning hidden inside everyday struggles.` },
            { word: `fourth wall`,
              definition: `The imaginary wall between actors and audience. "Breaking" it means a character speaks directly to the audience.`,
              audioPrompt: `The fourth wall, {name}, is the imaginary wall between the actors and the audience. To break it means a character turns and speaks directly to you, the audience, a bold move modern playwrights sometimes use.` },
            { word: `realism`,
              definition: `A style aiming to portray life as it really is, using everyday speech and ordinary situations rather than heightened verse.`,
              audioPrompt: `Realism, {name}, is a style that aims to show life as it truly is, using the way people actually talk and ordinary situations. Modern drama often uses realism to hold a mirror up to everyday life.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. Drama is a blueprint built to be performed, never quite finished on the page. Reading it well means staging it in your imagination, hearing the dialogue, picturing the action, feeling the silences. Its special tools, dialogue, soliloquy, aside, stage directions, dramatic irony, do the work a novel's narrator would do, but built for the living stage.`,
            `Shakespeare endures four centuries on because his language carries force when spoken and his themes are about what never changes in us. Modern drama proves the stage can also honor ordinary lives in plain speech, and bend its own form boldly. Across both, the power of theater is the same: to make a roomful of strangers feel, together, another human being's life.`,
            `Now the perspectives screen brings several ways people think about drama: a reader who studies the text, an actor who performs it, a director who stages it, a champion of Shakespeare, and a champion of modern realism. Each sees the form from a different seat in the theater. Your job is not to crown one, but to find your own way into the art that only fully exists when performed. Onward.`,
          ],
          image: `/voyager-assets/ela/l08-s5-before.webp`,
          imageCaption: `Threads together. Drama is a blueprint built to be performed, never quite finished on the page; reading it well means staging it in imagination, hearing the dialogue, picturing the action, feeling the silences. Its tools, dialogue, soliloquy, aside, stage directions, dramatic irony, do a narrator's work, built for the living stage. Shakespeare endures because his language carries force aloud and his themes never change; modern drama proves the stage can honor ordinary lives in plain speech and bend its own form. Across both, theater's power is the same: to make a roomful of strangers feel another's life. The perspectives screen brings several seats in the theater, the reader, actor, director, a Shakespeare champion, a modern-realism champion. Find your own way into an art that only fully exists when performed.`,
          vocab: [
            { word: `conflict`,
              definition: `The struggle at the heart of a drama, between characters, ideas, or within a person, that drives the action forward.`,
              audioPrompt: `Conflict, {name}, is the struggle at the heart of a drama, between characters, between ideas, or within a single person. Conflict drives a play forward; without it, there is no real drama, only people talking.` },
            { word: `interpretation`,
              definition: `The particular way a director or actor chooses to perform a play. The same text supports many valid interpretations.`,
              audioPrompt: `Interpretation, {name}, is the way a director or actor chooses to perform a play. Because a play is a blueprint, the same text can support many valid interpretations, which is why no two productions are ever quite the same.` },
            { word: `the stage`,
              definition: `The physical space of performance, and a symbol for theater itself, an art that lives only in front of an audience.`,
              audioPrompt: `The stage, {name}, is the physical space where a play is performed, and a symbol for theater itself. Drama is the one literary art that lives fully only on the stage, in front of a breathing audience.` },
          ],
        },

        {
          id: `l08-perspectives`,
          type: `perspectives`,
          headline: `Seats In The Theater`,
          intro: `{name}, a play lives differently depending on where you sit. Here are five people who each know drama from a different seat. Each is right about something. Do not crown one. Understand why a play means something different to each of them, and find your own way into the art that only fully exists when performed.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The close reader of the text`,
              era: `A way into drama`,
              stance: `Everything is in the words. Read the play carefully and you'll find all its meaning on the page.`,
              quote: `"The text is the score; learn to read it and you hear the whole symphony."`,
              argument: `A great play's language is precise and rich. Studying the dialogue, the soliloquies, the patterns of imagery and the structure, I can uncover meanings a single performance might miss or flatten. The play exists most fully and permanently as a written work of art, available to anyone who learns to read it closely.`,
              evidence: `The density of Shakespeare's verse rewarding close study; the way scholars find layers in a text across centuries; the fact that the script is what survives and unites every production.`,
              strengths_and_limits: `Strength: takes the playwright's craft seriously and finds depth a casual viewer misses. Limit: risks treating a play like a novel and forgetting it was built to be performed, where the body, voice, and live audience create meaning the page can't hold.`,
            },
            {
              id: `p2`,
              voice: `The actor`,
              era: `A way into drama`,
              stance: `A play isn't real until a living body speaks it. The meaning is made in performance, not on the page.`,
              quote: `"The lines are dead ink until I breathe them into a person."`,
              argument: `I take those words and make a living human being out of them, with a voice, a body, a beating heart, in real time. The same line can break your heart or make you laugh depending on how I play it. The text is just instructions; the art happens when I stand on stage and become someone, and the audience believes it.`,
              evidence: `How wildly different two actors make the same role; how a great performance reveals meaning no silent reading found; the electricity of live theater that no script alone produces.`,
              strengths_and_limits: `Strength: honors the truth that drama is built for living performance, not silent reading. Limit: a brilliant actor can also override or distort what the playwright wrote, and not every reader can see a great performance, so the text still matters.`,
            },
            {
              id: `p3`,
              voice: `The director`,
              era: `A way into drama`,
              stance: `One text, endless productions. My job is to choose an interpretation and make the whole thing live as one vision.`,
              quote: `"The same play set in ancient Rome or a modern city becomes two different plays."`,
              argument: `A play is a blueprint, and I decide how to build it: the setting, the tone, what to emphasize, how every part fits together. I can set Shakespeare in the present day and make four-hundred-year-old lines feel urgent now. The text supports many valid interpretations, and choosing one, boldly and coherently, is itself an act of art.`,
              evidence: `The radically different stagings of the same Shakespeare play; how setting and emphasis change a play's meaning; the way a strong directorial vision can make an old work feel newly alive.`,
              strengths_and_limits: `Strength: shows that a play is alive and re-interpretable, never frozen, and that staging choices carry real meaning. Limit: a director's vision can overwhelm the play, bending it to a concept until the playwright's own work gets lost.`,
            },
            {
              id: `p4`,
              voice: `The champion of Shakespeare`,
              era: `A way into drama`,
              stance: `The old plays endure because nothing has surpassed them in language and depth of human truth.`,
              quote: `"He wrote about being human, and we are still human."`,
              argument: `Four hundred years on, Shakespeare still fills theaters worldwide, and that is not an accident. His language is unmatched in richness and music, and his themes, ambition, jealousy, love, doubt, the hunger for power, are exactly what we still wrestle with. The grandeur and poetry reach heights modern plain speech rarely touches.`,
              evidence: `Shakespeare's global, centuries-long endurance; the hundreds of words and phrases he gave the language; characters like Hamlet and Macbeth that still feel utterly alive.`,
              strengths_and_limits: `Strength: rightly honors a body of work of staggering, lasting power and richness. Limit: treating the old verse plays as the only summit can blind us to what modern drama does that Shakespeare could not, honor ordinary lives in the language they actually speak.`,
            },
            {
              id: `p5`,
              voice: `The champion of modern realism`,
              era: `A way into drama`,
              stance: `The everyday life of an ordinary person is worthy of serious drama, told in the way real people actually speak.`,
              quote: `"A salesman's quiet downfall can weigh as much as any king's."`,
              argument: `Not everyone is a prince speaking in verse. Modern drama dared to put a struggling salesman, a poor family, ordinary neighbors at the center and treat their lives with full seriousness, in plain, real speech. That's not a step down from Shakespeare; it's theater holding a mirror up to the audience's own lives and finding them worthy of art.`,
              evidence: `Arthur Miller's "Death of a Salesman" making an ordinary man's tragedy feel immense; the power of realistic speech to feel true; modern drama's bold experiments with form and the fourth wall.`,
              strengths_and_limits: `Strength: democratizes the stage, insisting ordinary lives deserve serious art in their own voice. Limit: in chasing realism, modern drama can lose the heightened beauty and music that verse achieves, so something is traded as well as gained.`,
            },
          ],
          synthesisPrompt: `After all five: how do YOU want to meet a play, as a reader, in performance, or both? Where do you land on Shakespeare's grand verse versus modern drama's ordinary realism, and why? Which seat in the theater spoke most to you? In 5-6 sentences.`,
          reflectionPrompt: `A play only fully exists when performed, in a room full of strangers feeling together. When have you been in an audience, a play, a concert, a film in a packed theater, and felt something with a crowd you couldn't have felt alone? What does live, shared experience add?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What makes drama different from a novel, according to the lesson?`,
              options: [
                `Drama is always shorter and uses much simpler words than a novel does.`,
                `A play is a blueprint written to be performed, not finished on the page.`,
                `Drama can only be about kings, while novels can be about anyone.`,
                `A novel must rhyme, but a play is always written in plain prose.`,
              ],
              correctIndex: 1,
              explanation: `Drama is a blueprint built to be performed by living actors before an audience, so unlike a novel (complete when read), a play isn't finished on the page, the other half happens in the room. The distractors invent rules about length, subject matter, and rhyme that aren't the real difference.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does dialogue carry so much weight in a play?`,
              options: [
                `Because plays are not allowed to have any action or movement at all.`,
                `Because the audiences sitting in a theater cannot actually hear anything at all except the very loudest lines.`,
                `Because dialogue is always written in rhyme to sound more beautiful.`,
                `Because there's no narrator, so what characters say must carry plot, character, and theme.`,
              ],
              correctIndex: 3,
              explanation: `With no narrator to explain things, dialogue, what characters say and how they say it, must carry plot, character, conflict, and theme, which is why reading it closely is the heart of reading drama. The distractors invent false rules about action, hearing, and rhyme.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a soliloquy?`,
              options: [
                `A speech by a character alone on stage, voicing inner thoughts aloud for the audience.`,
                `A long stage direction describing the set and the lighting in detail.`,
                `A conversation between exactly three characters at the front of the stage.`,
                `The moment when the curtain falls and the play comes to an end.`,
              ],
              correctIndex: 0,
              explanation: `A soliloquy is a character alone on stage speaking their inner thoughts aloud, so the audience hears what no other character can, like Hamlet's "To be, or not to be." The distractors describe a stage direction, a group conversation, and the end of a play, none of which is a soliloquy.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "dramatic irony"?`,
              options: [
                `When a character makes a joke that the audience finds very funny.`,
                `When the audience knows something that a character on stage does not.`,
                `When a play has an unexpectedly sad ending instead of a happy one.`,
                `When two actors accidentally say their lines at the very same time.`,
              ],
              correctIndex: 1,
              explanation: `Dramatic irony is when the audience knows something a character does not, creating suspense, dread, or meaning unique to the theater as we watch a character act on incomplete knowledge. The distractors confuse it with comedy, a sad ending, or an onstage mistake.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `The lesson says the deepest reason Shakespeare endures is what?`,
              options: [
                `His plays are the only ones that were ever written down and saved.`,
                `Modern theaters are legally required to perform his work every year.`,
                `His themes are about being human, and we are still human.`,
                `His plays are very short and easy for actors to memorize quickly.`,
              ],
              correctIndex: 2,
              explanation: `The deepest reason Shakespeare endures is theme: he wrote about ambition, jealousy, love, doubt, and the hunger for power, what never changes in us, so four centuries later we still feel it. The distractors invent false claims about preservation, legal requirements, and play length.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did modern drama, like Arthur Miller's "Death of a Salesman," dare to do?`,
              options: [
                `Treat the everyday life of an ordinary person as worthy of serious drama.`,
                `Bring back ancient Greek gods as the main characters of every play.`,
                `Forbid actors from ever speaking, telling all stories through dance.`,
                `Write only comedies, because serious subjects had become old-fashioned.`,
              ],
              correctIndex: 0,
              explanation: `Modern drama put ordinary people, a struggling salesman, a poor family, under the stage lights and treated their lives with full seriousness, making an ordinary man's tragedy feel as large as any king's. The distractors invent unrelated claims about Greek gods, dance-only theater, and comedy.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does it mean to "break the fourth wall"?`,
              options: [
                `To physically knock down one of the four walls of the theater building.`,
                `To perform a play outdoors instead of inside an enclosed theater.`,
                `When a character speaks directly to the audience, crossing the imaginary barrier.`,
                `To end a play exactly four scenes before the audience expects it to.`,
              ],
              correctIndex: 2,
              explanation: `The "fourth wall" is the imaginary wall between actors and audience; breaking it means a character turns and speaks directly to the audience, a bold move modern playwrights sometimes use. The distractors take the phrase literally or invent unrelated meanings.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why can the same play become "two different plays" in performance?`,
              options: [
                `Because the script changes its own words each time it is opened.`,
                `Because a play is a blueprint, and directors and actors interpret it in many valid ways.`,
                `Because audiences are not allowed to watch the same play more than once.`,
                `Because every theater is required by law to rewrite the ending.`,
              ],
              correctIndex: 1,
              explanation: `A play is a blueprint that supports many valid interpretations: directors choose setting, tone, and emphasis, and actors bring lines to life differently, so the same text can become strikingly different productions. The distractors invent magical or legal claims that don't explain interpretation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The best way to experience a play is to read it silently like a novel, because a play is completely finished on the page.`,
              correctAnswer: false,
              explanation: `False, and this misses the single most important fact about drama. A novel is complete when you read it silently, but a play is fundamentally different: it is a blueprint, written to be performed, spoken aloud by living actors in front of a breathing audience. The words on the page are only half the art; the other half happens in the room, in real time, and never exactly the same way twice. The same line can be whispered or screamed, played for laughs or for heartbreak, depending on how it's performed. This doesn't mean reading a play is wrong, close reading reveals real depth in the language, the soliloquies, the patterns of imagery. But to read drama well, you can't read it as if it were a novel; you have to stage it in your imagination, hearing the dialogue, picturing where the actors stand and move, feeling the silences between the lines. The text is a set of instructions for a living experience. A play only fully exists when it is performed, which is exactly why the same script can become two strikingly different plays in two different productions, and why live theater carries an electricity no silent reading alone can produce.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your class reads a Shakespeare scene silently and everyone finds it boring and confusing. A friend concludes "Shakespeare is just bad and outdated." Using the lesson, what's the wiser take?`,
              options: [
                `Agree completely; if a scene is confusing on a silent read, the play has no value.`,
                `Insist Shakespeare is perfect and that anyone confused by him simply isn't smart enough.`,
                `The problem may be the method, not the play: drama is built to be performed, not read silently, and Shakespeare's verse especially comes alive spoken aloud, so hearing or staging the scene, and giving the language a chance, would likely reveal the power a silent read flattened.`,
                `Switch to only modern plays forever, since older drama can never speak to people today.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's core insight: a play is a blueprint for performance, and Shakespeare's verse in particular carries its force when spoken aloud, so a flat, confusing silent read often reflects the method, not the play. Hearing or staging it would likely reveal what the page hid. The distractors give up on the play, insult the confused reader, or overcorrect by dismissing all older drama.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-live`, category: `The live experience`, prompt: `A play only fully exists when performed, felt together by a roomful of people. When have you felt something powerful as part of a live audience that you couldn't have felt watching alone on a screen? What does shared, live experience add?` },
            { id: `reflect-staging`, category: `Reading the blueprint`, prompt: `Reading drama means staging it in your imagination. Pick a scene from any story, real or invented, and describe how you'd "stage" it: where would people stand, how would they speak, what would the silence between lines feel like?` },
            { id: `reflect-ordinary`, category: `Whose life is worthy`, prompt: `Modern drama insisted an ordinary person's life is worthy of serious art. Whose ordinary life, in your family or community, deserves to be told seriously, and what would an audience learn from watching it?` },
            { id: `reflect-heritage`, category: `Your culture's stage`, prompt: `Caro, theater and performance live in every culture. What forms of storytelling-as-performance, a play, a dance, a festival, a told story, matter in Colombian or Latin American tradition? What do they do that a book on a shelf cannot?` },
            { id: `reflect-irony`, category: `Knowing what they don't`, prompt: `Dramatic irony, knowing something a character doesn't, is unique and powerful. When in real life have you watched someone act on information you knew was incomplete, and felt that helpless mix of knowing and being unable to change it?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "reading plays in school is pointless, just watch the movie version." State that view as strongly as you can. Where does it have a real point about drama being meant to be seen, and where does it sell the text short?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Drama only lives when it's spoken and seen. These get the words off the page and into the air. Two paths.`,
          familyActivity: {
            title: `Stage A Scene Together`,
            duration: `One evening`,
            description: `Bring a play to life in your living room. Pick a short, punchy scene, a famous Shakespeare exchange (there are kid-friendly versions and summaries online) or a scene from any play or even a favorite film. First, read it silently and notice how flat and sometimes confusing it feels on the page. Then perform it. Assign roles, stand up, and actually say the lines aloud, with movement, volume, and feeling. Try a scene twice, two different ways: once played for comedy, once for heartbreak, or once set in the past and once in the present day, like a director would. Notice how the very same words become two different scenes depending on how you stage them. If there's dramatic irony (the audience knowing something a character doesn't), lean into the suspense. The goal is to feel, in your own body and voice, the central truth of this lesson: a play is dead ink until living people breathe it into the air. You'll never read drama the same flat way again, you'll hear it.`,
          },
          projectOption: {
            title: `Write And Stage Your Own Short Play, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a playwright. Week 1: write a short scene (two to four pages) using the real tools of drama. Build it almost entirely from dialogue, since you have no narrator, and let what characters say and how they say it carry the story. Include at least one soliloquy (a character alone, voicing inner thoughts aloud), clear stage directions for action and movement, and, if you can, a moment of dramatic irony where the audience knows something a character doesn't. Choose your style on purpose: heightened and poetic like Shakespeare, or realistic everyday speech like modern drama, and write a short note explaining why that style fits your story. Week 2: stage it. Recruit family or friends as actors, direct a simple performance, and afterward reflect on what changed between the page and the performance, what the living version revealed that the script alone didn't. You'll understand drama from the inside out, as a writer, a director, and an audience all at once, and you'll have created a small piece of living theater of your own.`,
            offerToParent: `Parent: opt your child into the playwriting project. Writing a scene built from dialogue, soliloquy, stage directions, and dramatic irony, then actually staging it, teaches dramatic form far more deeply than reading alone, and develops voice, characterization, and an understanding of how performance creates meaning. The reflection on what changes between page and stage builds real insight into the art. It's ambitious, CCSS-aligned creative work that ends in a living performance your child made.`,
          },
          identityQuestion: `If you become someone who can lift a play off the flat page and bring it alive, hearing the voices, staging the action, feeling the silences, and who knows that an ordinary life can be as worthy of the stage as any king's, what does that let you understand about people, and about being human, that someone who only ever reads silently can never quite reach?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who hears a play instead of just reading it.`,
            `A person who can stage a scene in my imagination.`,
            `Someone who sees that any life can be worthy of the stage.`,
          ],
          saveKey: `identity_responses_ela_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eight done, and you've stepped onto the stage. You learned that drama is unlike any other literature: a play isn't finished on the page, it's a blueprint built to be performed, and the words are only half the art, the other half happens in a room full of living people. You learned to read a play the right way, by staging it in your imagination: hearing the dialogue, listening to the soliloquies, picturing the action in the stage directions, feeling the suspense of dramatic irony. You learned why Shakespeare refuses to die after four hundred years, his language carries force when spoken, and his themes are about what never changes in us. And you learned that modern drama opened the stage to ordinary lives in plain, real speech, proving a salesman's quiet downfall can weigh as much as any king's. Most of all, you saw that theater's power, in every age and style, is the same: to make a roomful of strangers feel, together, another human being's life. Next: we slow down and go deep into the most concentrated language of all, poetry, and learn to read it line by careful line. Onward, {name}. — Quill`,
          badge: `drama-reader`,
          badgeName: `Drama Reader`,
          xpEarned: 75,
          competencies: [
            `Understands drama as a blueprint built for performance, not a finished page-bound text`,
            `Reads a play by "staging" it: hearing dialogue, picturing action, feeling silences`,
            `Identifies the tools of drama: dialogue, soliloquy, aside, stage directions, dramatic irony`,
            `Explains why Shakespeare endures, through language spoken aloud and timeless human themes`,
            `Recognizes modern drama's turn to ordinary lives and realistic speech (e.g. Miller)`,
            `Grasps that one text supports many valid interpretations in performance`,
            `Sees theater's enduring power: making an audience feel another's life, together and live`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Poetry — Deep Analysis`,
            hook: `The most concentrated language there is, read line by careful line. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
