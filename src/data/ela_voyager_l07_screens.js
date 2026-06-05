// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L07 — The Novel: Structure, Theme, and Character
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Reading Literature, Analysis of Narrative
// Interaction: CASE STUDY (cases[] accordion). Paragraphs <=970ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l07-v1";

const ELA_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-07`,
      title: `The Novel: Structure, Theme, and Character`,
      duration: 35,
      xpReward: 75,
      badge: `novel-analyst`,
      badgeName: `Novel Analyst`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, the novel is one of the most powerful inventions in all of human art, a machine made of words that can put you inside another mind for hours, days, a whole imagined life. But a great novel is not magic; it is built, carefully, out of parts that work together. Today you become an engineer of stories, learning to see the machinery. We will focus on three of the most important parts. Structure is how a novel is arranged: where it starts, how it builds tension, how the pieces are ordered to create their effect. Character is the people who live inside it, and especially how the best ones change, growing or breaking across the story. And theme is the deeper meaning, the ideas about life the whole novel is quietly exploring beneath the plot. When you can see structure, character, and theme working together, you stop just being swept along by a story and start understanding how it does what it does to you, which, strangely, makes the magic more powerful, not less. Onward.`,
          headline: `The Novel: Structure, Theme, and Character`,
          subtitle: `How a great novel is actually built. A Case Study.`,
          visual: `/voyager-assets/ela/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Machine Made Of Words`,
          paragraphs: [
            `A novel can feel like pure magic. You open it, and suddenly you are living inside another person's mind, in another time and place, caring about people who do not exist. But that magic is not random. A great novel is built, deliberately, out of working parts, and learning to see those parts turns you from a passenger into an engineer who understands how the machine runs.`,
            `Most people read only for plot, what happens next. Plot matters, but it is just the surface. Beneath it, a skilled novelist makes countless choices: where to begin, whose eyes to see through, how to reveal information, what the whole thing finally means. These choices are the real craft, and they separate a forgettable story from one that changes you.`,
            `This lesson focuses on three of the most important parts beneath the plot. Structure is how the novel is arranged. Character is the people inside, especially how they change. Theme is the deeper meaning the book quietly explores. See these three working together, and you will never read a novel the same way again.`,
          ],
          image: `/voyager-assets/ela/l07-s1-machine.webp`,
          imageCaption: `A novel can feel like pure magic, you open it and suddenly live inside another mind, in another time, caring about people who do not exist. But the magic is not random; a great novel is built deliberately out of working parts, and seeing them turns you from a passenger into an engineer. Most people read only for PLOT, what happens next, but plot is just the surface. Beneath it the novelist makes countless choices: where to begin, whose eyes to see through, how to reveal information, when to speed up or slow down, what it all means. This lesson focuses on three parts beneath the plot: STRUCTURE (how the novel is arranged), CHARACTER (the people, especially how they change), and THEME (the deeper meaning). See them working together and you'll never read a novel the same way.`,
          vocab: [
            { word: `novel`,
              definition: `A long work of narrative fiction, built deliberately from parts like structure, character, and theme working beneath the plot.`,
              audioPrompt: `A novel, {name}, is a long work of narrative fiction, one of the most powerful inventions in all of art. It can put you inside another mind for hours, but it is not magic, it is carefully built from working parts.` },
            { word: `plot`,
              definition: `The sequence of events in a story, what happens. It's the surface; structure, character, and theme work beneath it.`,
              audioPrompt: `Plot, {name}, is the sequence of events, what happens next. It matters, but it is only the surface of a novel. The real craft lives beneath it, in structure, character, and theme, which is where great novels do their deepest work.` },
            { word: `craft`,
              definition: `The deliberate choices a novelist makes, where to begin, whose eyes to use, what it means, that separate a forgettable story from a powerful one.`,
              audioPrompt: `Craft, {name}, is all the deliberate choices a novelist makes beneath the plot: where to begin, whose eyes to see through, what it all means. Craft is what separates a story you forget from one that changes you.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Structure: How It's Arranged`,
          paragraphs: [
            `Structure is how a novel is arranged, the order and shape of its telling, and it controls how a story affects you. The simplest structure is chronological: events in the order they happen. But novelists rarely stop there. They choose where to begin, sometimes mid-action, sometimes at the end looking back, because the starting point shapes everything that follows.`,
            `Novelists use structural tools to control your experience. Flashbacks reveal the past when it matters most. Foreshadowing plants hints that create suspense or dread. Some novels tell the same events from multiple viewpoints, so you assemble the truth slowly. Each choice is deliberate: it decides what you know, when you know it, and how you feel.`,
            `A classic shape underlies many novels: a setup, rising action that builds tension, a climax where everything comes to a head, and a resolution. But great novelists bend and break this shape for effect, withholding the climax, refusing a tidy resolution, scrambling the order. When you notice structure, you see the author's hand, and ask the key question: why arrange it this way, and not another?`,
          ],
          image: `/voyager-assets/ela/l07-s2-structure.webp`,
          imageCaption: `Structure is how a novel is arranged, the order and shape of its telling, and it controls how the story affects you. The simplest structure is chronological, events in the order they happen, but novelists rarely stop there: where they begin (mid-action, or at the end looking back) shapes everything. They use tools, FLASHBACKS reveal the past when it matters most; FORESHADOWING plants hints creating suspense; multiple viewpoints let you assemble the truth; a FRAME STORY nests a tale inside a tale. A classic shape underlies many novels: setup, rising action, climax, resolution. But great novelists bend and break it for effect, withholding the climax, refusing tidy resolution. When you notice structure, you see the author's hand and ask: why arrange it this way, and not another?`,
          vocab: [
            { word: `structure`,
              definition: `How a novel is arranged and ordered, its shape and sequence, which controls what you know and how you feel along the way.`,
              audioPrompt: `Structure, {name}, is how a novel is arranged, the order and shape of its telling. Where it begins, when it reveals things, how it builds, all of this is structure, and it powerfully controls how the story affects you.` },
            { word: `flashback`,
              definition: `A structural tool that interrupts the present to show an earlier event, often revealed at the moment it matters most.`,
              audioPrompt: `A flashback, {name}, interrupts the present moment to show something from the past. Novelists place flashbacks carefully, revealing the past exactly when it will hit you hardest, which is a choice about structure, not accident.` },
            { word: `foreshadowing`,
              definition: `Planting early hints about what's to come, creating suspense, dread, or meaning that pays off later.`,
              audioPrompt: `Foreshadowing, {name}, is when a novelist plants early hints about what is coming. Done well, it creates suspense or quiet dread, and rewards you later when the hinted thing arrives. Spotting it lets you see the author's design.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Character: The People Who Change`,
          paragraphs: [
            `Character is the heart of most great novels, and the deepest skill is reading how people change. The richest characters are "round": complex, contradictory, capable of surprising us, like real human beings. "Flat" characters are simpler, defined by one or two traits. Both have uses, but a novel's emotional power usually rests on its round characters.`,
            `The most important thing to watch is the character arc, the way a character grows, breaks, or transforms. A "dynamic" character is changed by what they go through; a "static" one stays essentially the same. Often the whole point of a novel is a dynamic character's journey, and the plot is really there to test, shape, and reveal who that person truly is.`,
            `Novelists reveal character indirectly, and noticing how is a key skill. We learn who a person is through what they do under pressure, what they say, and what they think in private. Rarely does a good novelist tell you "she was brave"; instead they show her being brave, and let you conclude it. You stop asking only "what happens?" and start asking "who is this becoming, and how is the author showing me?"`,
          ],
          image: `/voyager-assets/ela/l07-s3-character.webp`,
          imageCaption: `Character is the heart of most great novels, and the deepest skill is reading how people change. The richest characters are ROUND: complex, contradictory, capable of surprise, like real humans. FLAT characters are simpler, defined by one or two traits; both have uses, but emotional power usually rests on round characters. Watch the CHARACTER ARC, the way a character grows, breaks, or transforms. A DYNAMIC character is changed by what they go through; a STATIC one stays the same. Often the whole point of a novel is a dynamic character's journey, with the plot there to test and reveal them. Novelists reveal character indirectly, through what a person does under pressure, says, thinks privately, and what others say, rarely telling you "she was brave" but showing it. Ask: who is this person becoming, and how is the author showing me?`,
          vocab: [
            { word: `character arc`,
              definition: `The way a character grows, breaks, or transforms across a story. Often the true heart of a novel.`,
              audioPrompt: `A character arc, {name}, is the way a character changes across a story, growing, breaking, or transforming. Often the whole point of a novel is one character's arc, with the plot there to test and reveal who they truly are.` },
            { word: `round character`,
              definition: `A complex, contradictory character capable of surprising us, like a real person. Most of a novel's emotional power rests on them.`,
              audioPrompt: `A round character, {name}, is complex and contradictory, capable of surprising you, just like a real human being. Round characters carry most of a novel's emotional weight, while flat ones are simpler, built from just a trait or two.` },
            { word: `dynamic character`,
              definition: `A character who is changed by the events of the story, as opposed to a static character who stays essentially the same.`,
              audioPrompt: `A dynamic character, {name}, is one who is changed by what they go through in the story. A static character stays essentially the same. Watching whether and how a character changes is one of the deepest ways to read a novel.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Theme: The Deeper Meaning`,
          paragraphs: [
            `Theme is the deepest layer: the central ideas about life that a novel explores beneath its plot. The plot might be about a boy on a raft floating down a river, but the theme might be freedom, friendship across a cruel social divide, or the difference between a society's rules and a person's conscience. Theme is the answer to "what is this book really about, underneath what happens?"`,
            `A few things make theme tricky and powerful. A great novel rarely states its theme outright; it explores a question rather than preaching an answer. Most rich novels weave several themes together. And theme emerges from everything else, the structure, the arcs, the choices, all illuminating the deeper idea, found not in one sentence but in the pattern of the whole.`,
            `Reading for theme is what makes a novel matter. A story stays mere entertainment until you ask what it says about being human, about love, power, justice, loss, and recognize something true. That recognition is why people return to certain books for a lifetime. Structure and character are how a novel is built; theme is why it was worth building.`,
          ],
          image: `/voyager-assets/ela/l07-s4-theme.webp`,
          imageCaption: `Theme is the deepest layer: the central ideas about life a novel explores beneath its plot. The plot might be a boy on a raft down a river, but the theme might be freedom, friendship across a cruel divide, or the clash between society's rules and a person's conscience. Theme answers "what is this really about, underneath what happens?" It is tricky and powerful: a great novel rarely states its theme outright, exploring a question rather than preaching an answer; most rich novels weave several themes; and theme emerges from everything, structure, character arcs, choices and consequences. You find it in the pattern of the whole, not one sentence. Reading for theme is what makes a novel matter, recognizing something true about being human. Structure and character are how a novel is built; theme is why it was worth building.`,
          vocab: [
            { word: `theme`,
              definition: `The central ideas about life a novel explores beneath its plot, like freedom, justice, or conscience. What the book is "really about."`,
              audioPrompt: `Theme, {name}, is the deeper meaning of a novel, the central ideas about life it explores beneath the plot. The plot is what happens; the theme is what it is really about, underneath, like freedom, love, justice, or conscience.` },
            { word: `explores a question`,
              definition: `The way great novels examine a theme by raising questions and trusting the reader, rather than preaching a simple answer.`,
              audioPrompt: `Great novels explore a question rather than preaching an answer, {name}. Instead of telling you what to think about freedom or justice, they raise the question through story and trust you to think it through yourself.` },
            { word: `motif`,
              definition: `A recurring image, idea, or symbol that runs through a novel and helps build and reveal its themes.`,
              audioPrompt: `A motif, {name}, is a recurring image, idea, or symbol woven through a novel, a river, a color, a repeated phrase. Motifs are one of the ways theme emerges, quietly building meaning across the whole book.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
            `Pull it together. A novel is a machine made of words, built deliberately beneath its plot. Structure is how it is arranged, the order, the starting point, the flashbacks and foreshadowing, all controlling what you know and how you feel. The key structural question is always: why did the author arrange it this way?`,
            `Character is the people inside, especially how they change. Watch for round versus flat, and above all the character arc, dynamic characters transformed by the story, revealed through action and private thought. Theme is the deepest layer, the ideas about life the book explores, rarely stated, often plural, emerging from the pattern of everything. It is why the novel was worth building.`,
            `Now the case-study screen hands you five real elements of craft from famous novels: one on structure, one on character arc, one on how character is revealed, one on theme, and one showing all three together. For each, do what an engineer of stories does: see the part, understand how it works, explain its effect. You learn to read not just what a novel says, but how it was built to say it. Onward.`,
          ],
          image: `/voyager-assets/ela/l07-s5-before.webp`,
          imageCaption: `Threads together. A novel is a machine made of words, built deliberately beneath its plot. STRUCTURE is how it is arranged, the order, starting point, flashbacks, foreshadowing, controlling what you know and feel; always ask why the author arranged it this way. CHARACTER is the people, especially how they change: round versus flat, and above all the character arc, dynamic characters transformed by the story, revealed indirectly through action and private thought. THEME is the deepest layer, the ideas about life the whole book explores, rarely stated, often plural, emerging from the pattern of everything. The case-study screen hands you five real craft elements from famous novels. See the part, understand how it works, explain its effect. Read not just what a novel says, but how it was built to say it.`,
          vocab: [
            { word: `narrative`,
              definition: `A story and the way it is told. Analyzing a novel means studying both the events and the craft of their telling.`,
              audioPrompt: `Narrative, {name}, means both a story and the way it is told. Reading a novel deeply means studying not just the events but the craft of their telling, the structure, character, and theme woven through them.` },
            { word: `point of view`,
              definition: `Whose perspective the story is told through, a major structural choice that shapes everything you learn and feel.`,
              audioPrompt: `Point of view, {name}, is whose eyes you see the story through, a major craft choice. First person, third person, one narrator or many, each decision shapes what you know and how you feel about everything that happens.` },
            { word: `engineer of stories`,
              definition: `A reader who can see a novel's machinery, structure, character, and theme, and understand how each part creates its effect.`,
              audioPrompt: `An engineer of stories, {name}, is a reader who can see the machinery, structure, character, and theme, and understand how each part creates its effect. Becoming one makes the magic of reading more powerful, not less.` },
          ],
        },

        {
          id: `l07-case-study`,
          type: `case-study`,
          headline: `Five Elements Of Craft`,
          intro: `{name}, five real elements of craft drawn from famous novels. For each, be an engineer of stories: see the part, understand how it works, and explain the effect it creates on the reader. You are learning to read not just what a novel says, but how it was built to say it.`,
          cases: [
            {
              id: `c1`,
              title: `Structure: starting in the middle (Homer to modern novels)`,
              type: `Structure / starting point`,
              description: `Many stories, from Homer's epics to modern novels, begin in medias res, "in the middle of things," dropping you into the action before explaining how everyone got there, then filling in the past through flashback. Consider why a novelist would refuse to start at the obvious beginning.`,
              questions: [
                `What effect does starting in the middle of the action have on a reader?`,
                `How does revealing the past later, through flashback, change the experience?`,
                `Why is this a deliberate structural choice, not just a quirk?`,
              ],
              evaluation: `Starting in the middle grabs you immediately: instead of slow setup, you're thrown into tension and have to catch up, which creates urgency and curiosity. Revealing the past later, through flashback, lets the author drop each piece of backstory exactly when it will land hardest, so information arrives charged with meaning rather than as a flat opening lecture. This is a deliberate structural choice, not a quirk: the author has decided what you'll know and when, controlling suspense and emotional impact by reordering time. The obvious chronological beginning might be the least interesting place to start. Seeing this, you ask the engineer's question, why arrange it this way?, and realize the shape of the telling is itself a tool for creating the experience, separate from the events themselves.`,
            },
            {
              id: `c2`,
              title: `Character arc: a dynamic protagonist's transformation`,
              type: `Character / arc`,
              description: `Consider a novel built around a main character who begins naive, fearful, or selfish and, through the trials of the plot, becomes wiser, braver, or more compassionate by the end, a classic dynamic character arc, like Scrooge in "A Christmas Carol" or many coming-of-age protagonists.`,
              questions: [
                `What makes this a dynamic rather than static character?`,
                `How does the plot actually function in relation to the arc?`,
                `Why is the change, not just the events, often the real point of the novel?`,
              ],
              evaluation: `This is a dynamic character because the person at the end is genuinely different from the person at the start, transformed by what they've lived through, where a static character would have stayed essentially the same. In relation to the arc, the plot is really the engine of change: the events exist to test, pressure, and ultimately reshape the character, so the trials aren't just exciting happenings, they're the forge in which the person is remade. That's why the change, not the events, is often the real point: a reader may forget the exact plot but remember that Scrooge became generous, that a frightened child became brave. The deepest novels use plot in service of arc, the story happens so that someone can become someone new, and recognizing this lets you read for who a character is becoming, not just what occurs.`,
            },
            {
              id: `c3`,
              title: `Revealing character indirectly (showing, not telling)`,
              type: `Character / revelation`,
              description: `A skilled novelist rarely writes "she was brave." Instead they show a character doing something brave under pressure, or let another character remark on it, or reveal a private thought, and trust the reader to conclude "she is brave." Consider why showing beats telling.`,
              questions: [
                `Why is showing a trait more powerful than simply stating it?`,
                `What are the different indirect ways an author reveals character?`,
                `What does this ask of the reader that flat statement does not?`,
              ],
              evaluation: `Showing is more powerful than telling because a conclusion you reach yourself feels true and earned, while a flat label ("she was brave") is just an assertion you can doubt or forget. When you watch a character act bravely under real pressure, you believe it in a way no adjective can produce. Authors reveal character indirectly through several channels: what a person does (especially under stress), what they say and how they say it, what they think in private, and what other characters say about them. This asks the reader to participate, to observe, infer, and judge, rather than passively receive a label. That participation is exactly what makes characters feel alive and what makes reading active rather than passive. The engineer's insight: "show, don't tell" isn't a cliché, it's a precise technique for making the reader do the work that creates belief.`,
            },
            {
              id: `c4`,
              title: `Theme explored as a question (not preached)`,
              type: `Theme`,
              description: `Consider a novel like "The Adventures of Huckleberry Finn," where the plot is a boy and an escaped enslaved man traveling a river, but the book explores deep themes, the clash between a society's unjust rules and an individual conscience, without ever stopping to preach a tidy moral.`,
              questions: [
                `What is the difference between the plot and the theme here?`,
                `Why does exploring a question work better than preaching an answer?`,
                `How does theme emerge if it's never stated outright?`,
              ],
              evaluation: `The plot is the surface, what literally happens, a boy and a man traveling a river, while the theme is the deeper idea the book is really about, here the painful clash between a society's unjust rules and an individual's awakening conscience. Exploring a question works better than preaching because a preached moral lets you nod and forget, while a genuine question forces you to think and feel your way to your own conclusion, which actually changes you. The theme emerges without ever being stated outright through the pattern of everything else: the choices the characters face, the consequences, the recurring images and situations, all quietly illuminate the central idea. You assemble the theme from the whole, not from a single quotable sentence. That's why two thoughtful readers can describe a great novel's theme in different words, the book explored the question richly enough that it lives larger than any one statement of it.`,
            },
            {
              id: `c5`,
              title: `All three working together`,
              type: `Structure + character + theme`,
              description: `Consider how, in a truly great novel, structure, character, and theme aren't separate, they reinforce each other. The way the story is arranged shapes how we experience a character's change, and that change is what reveals the theme. Think about how the three layers lock together.`,
              questions: [
                `How can structure serve a character's arc?`,
                `How does a character's change reveal the theme?`,
                `Why does seeing all three together give the deepest reading?`,
              ],
              evaluation: `Structure serves the arc when the author arranges the telling to maximize the impact of a character's change, for example, withholding a piece of the past until a flashback reveals exactly why the character finally transforms, so the structure delivers the arc's turning point with full force. The character's change reveals the theme because what a person becomes, and what it cost them, embodies the book's deeper idea: if a frightened character becomes brave through facing injustice, their arc is the theme of courage and conscience made flesh. Seeing all three together gives the deepest reading because you stop experiencing them as separate, the shape, the people, the meaning, and start seeing one unified machine where every part serves the whole. That's the engineer's mastery: not just naming structure, character, and theme, but feeling how they lock together so that the way it's built, who it's about, and what it means become a single, inseparable act of art.`,
            },
          ],
          synthesisPrompt: `After all five: pick a novel, film, or show you love and analyze it like an engineer. What's one structural choice, one thing about a character's arc, and one theme, and how do they work together to create its effect? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says seeing a story's machinery makes the magic stronger, not weaker. Do you find that true, or does analyzing a story risk spoiling it? When has understanding how something works made you love it more?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `The lesson calls a novel "a machine made of words." What does that mean?`,
              options: [
                `That novels are written by machines rather than by human authors.`,
                `That a great novel is built deliberately from working parts, not created by random magic.`,
                `That novels must follow one fixed mechanical formula or they fail.`,
                `That reading a novel is a cold, mechanical activity with no real feeling.`,
              ],
              correctIndex: 1,
              explanation: `The metaphor means a great novel is built deliberately out of parts (structure, character, theme) that work together, not produced by random magic, so a reader can learn to see the machinery. The distractors take "machine" too literally as machine-written, a rigid formula, or an unfeeling experience.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `The lesson says most people read only for plot. What is plot?`,
              options: [
                `The deeper meaning and ideas about life a novel explores beneath the surface.`,
                `The way a character grows or transforms over the course of the story.`,
                `The sequence of events, what happens next, which is the surface of the novel.`,
                `The order the author chooses to arrange and reveal the story in.`,
              ],
              correctIndex: 2,
              explanation: `Plot is the sequence of events, what happens next, and the lesson calls it the surface, important but not the deepest craft. The distractors define theme, character arc, and structure, the three deeper elements that work beneath the plot.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "structure" in a novel?`,
              options: [
                `The physical binding, cover, and page count of the printed book.`,
                `How the novel is arranged and ordered, controlling what you know and when.`,
                `The deeper ideas about life that the book is really about.`,
                `The list of all the characters who appear in the story.`,
              ],
              correctIndex: 1,
              explanation: `Structure is how a novel is arranged and ordered, its shape and sequence, including where it begins, flashbacks, and foreshadowing, which controls what you know, when you know it, and how you feel. The distractors describe the physical book, theme, or a character list, not structure.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a "character arc"?`,
              options: [
                `A curved line drawn to show where a character travels on a map.`,
                `The number of chapters a particular character appears in.`,
                `A character who is defined by only one or two simple traits.`,
                `The way a character grows, breaks, or transforms across the story.`,
              ],
              correctIndex: 3,
              explanation: `A character arc is the way a character grows, breaks, or transforms across a story, and it's often the true heart of a novel. The distractors confuse it with a literal map line, a chapter count, or the definition of a flat character.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the difference between a "dynamic" and a "static" character?`,
              options: [
                `A dynamic character is changed by the story; a static one stays essentially the same.`,
                `A dynamic character is the hero; a static character is always the villain.`,
                `A dynamic character is exciting; a static one is boring and badly written.`,
                `A dynamic character is real; a static character is completely made up.`,
              ],
              correctIndex: 0,
              explanation: `A dynamic character is changed by what they go through in the story, while a static character stays essentially the same, both can be well-written and serve a purpose. The distractors wrongly equate dynamic with hero, with quality, or with being "real."`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the lesson say "showing" a trait is more powerful than "telling" it?`,
              options: [
                `Because showing uses more words, which always makes writing better.`,
                `A conclusion you reach yourself feels true and earned, not just an assertion to doubt.`,
                `Because telling is against the official rules and gets authors in trouble.`,
                `Because readers cannot understand any trait unless it is shown in a picture.`,
              ],
              correctIndex: 1,
              explanation: `Showing is more powerful because a conclusion the reader reaches themselves (watching a character act bravely) feels true and earned, while a flat label ("she was brave") is just an assertion to doubt or forget. The distractors reduce it to word count, an arbitrary rule, or a need for literal pictures.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "theme" in a novel?`,
              options: [
                `The setting where most of the action takes place.`,
                `A recurring color or object that appears in the story.`,
                `The central ideas about life the novel explores beneath its plot.`,
                `The exciting climax where the main conflict comes to a head.`,
              ],
              correctIndex: 2,
              explanation: `Theme is the deepest layer, the central ideas about life a novel explores beneath the plot, like freedom, justice, or conscience, answering "what is this really about, underneath what happens?" The distractors name setting, a motif, and the climax, which are other elements, not theme.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The lesson says a great novel "explores a question rather than preaching an answer." Why does that work better?`,
              options: [
                `Because preaching is illegal in fiction and editors always remove it.`,
                `Because the authors are simply not clever enough to actually know any of the real answers themselves.`,
                `Because a question is shorter and takes up fewer pages than an answer.`,
                `A preached moral lets you nod and forget; a real question makes you think and changes you.`,
              ],
              correctIndex: 3,
              explanation: `Exploring a question works better because a preached moral lets you nod and move on, while a genuine question forces you to think and feel your way to your own conclusion, which actually changes you. The distractors invent a rule against preaching, insult authors, or reduce it to page count.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: To fully understand a great novel, you only need to follow the plot, what happens, because structure, character, and theme are just extra decoration on top.`,
              correctAnswer: false,
              explanation: `False, and this reverses the lesson's central point. Plot, the sequence of events, what happens next, is real and important, but it's the surface, not the depth. The actual craft of a novel, and the reason a great one can change you, lives beneath the plot in three deeper layers. Structure is how the story is arranged: where it begins, when it reveals the past, how it builds and releases tension, all of which control what you know and how you feel. Character is the people inside, especially the character arc, how a dynamic character grows, breaks, or transforms, which is often the true heart of the book. And theme is the deepest layer, the ideas about life the novel explores beneath everything, the reason it was worth writing at all. These aren't decoration on top of the plot; the plot is actually in service of them. In the deepest novels, events happen so that a character can change, and that change reveals the theme, structure, character, and theme lock together into one machine. Reading only for plot is like watching the surface of water and missing everything moving underneath; it's exactly the passenger's reading the lesson is teaching you to move beyond.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You finish a novel where the hero, a coward at the start, slowly becomes brave, told out of order with key flashbacks, and you sense it's "about" courage and fear. A friend says "it was just a cool adventure plot." Using the lesson, what do you see that they missed?`,
              options: [
                `Nothing; they're right that it was only an exciting sequence of events.`,
                `That the book was poorly made, since real novels are told in order.`,
                `The whole machine: the out-of-order structure shaped how you felt the hero's change, that change is a dynamic character arc, and the arc reveals the theme of courage and fear, all three locking together beneath the "cool plot."`,
                `That plot doesn't matter at all and only the theme is worth noticing.`,
              ],
              correctIndex: 2,
              explanation: `This is the engineer's reading. Beneath the "cool adventure plot" your friend saw, all three deeper layers are working and locking together: the out-of-order structure with flashbacks controlled how and when you felt the hero's transformation; that transformation from coward to brave is a dynamic character arc; and the arc embodies the theme of courage and fear. Seeing the whole machine is exactly what separates the passenger from the engineer. The distractors stay on the surface, wrongly judge non-linear telling as bad, or overcorrect by dismissing plot entirely (plot still matters, it's just in service of the deeper layers).`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-machinery`, category: `Seeing the machine`, prompt: `The lesson claims seeing a story's machinery makes the magic stronger, not weaker. Think of a book, film, or show you love. Does understanding how it was built deepen your love, or take something away? Why?` },
            { id: `reflect-arc`, category: `Your own arc`, prompt: `Characters have arcs, growing, breaking, transforming. If you were a character in a novel about this year of your life, what would your arc be? Are you a dynamic character right now, being changed, or a static one in a steady stretch?` },
            { id: `reflect-showing`, category: `Show, don't tell`, prompt: `Great novels show rather than tell. Think about how you'd want someone to know something true about you, your kindness, courage, or stubbornness. Would you rather be told as a label, or shown through what you actually do? What does that reveal about how we know anyone?` },
            { id: `reflect-heritage`, category: `Your stories' themes`, prompt: `Caro, think of a story important in your family or Colombian culture, a novel, a film, a tale passed down. Look beneath its plot: what theme, what idea about life, is it really exploring? What does that theme say about the world it came from?` },
            { id: `reflect-theme`, category: `Why it mattered`, prompt: `Think of a novel that genuinely affected you. Beneath what happened, what was it really about, what question about being human did it explore? Why did that question matter to you at the time you read it?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "analyzing structure and theme is what kills the love of reading in school, just enjoy the story." State that view as strongly as you can. Where is it right, and where might it be selling readers short?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Once you can see the machine, you see it everywhere, in books, films, and shows. These build the habit. Two paths.`,
          familyActivity: {
            title: `Engineer A Story Together`,
            duration: `One movie or show night`,
            description: `Turn a family movie or show night into a story-engineering session, without spoiling the fun. Watch something together, a film or a strong episode everyone enjoys. Then, afterward (not during, let yourselves be swept along first), take it apart as a team using the three tools. Structure: how was it arranged? Did it start in the middle, use flashbacks, withhold information, surprise you with the order? What effect did that have? Character: who was the dynamic character, and what was their arc, who were they at the start versus the end? How did the story show you who they were, rather than just telling you? Theme: beneath the plot, what was it really about, what idea about life, love, courage, family, justice? Then the big one: how did the three work together? Did the structure heighten the character's change? Did that change reveal the theme? The goal isn't to be cold critics, it's to discover, together, that the stories you love are built with genius, and that seeing the craft makes them even more satisfying.`,
          },
          projectOption: {
            title: `Build Your Own Novel's Blueprint, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Learn the machine by building one. Week 1: design the blueprint for a short novel or story you'd want to write. Decide your three layers on purpose. Theme first: what idea about life do you want to explore, and what question (not answer) will you raise about it? Character: invent a dynamic main character with a clear arc, who are they at the start, and who will the story force them to become? Plan how you'll reveal them by showing, not telling. Structure: decide how to arrange it, where will you begin, will you use flashbacks or foreshadowing, and crucially, how will the arrangement heighten your character's change? Week 2: actually write the opening scene and one key turning-point scene of your story, putting the blueprint into practice, then write a short "author's note" explaining your craft choices: why you began where you did, how the scene shows character, and how it serves your theme. You'll understand novels from the inside, because you'll have engineered one yourself, and you'll never again read a story without sensing the deliberate hand behind it.`,
            offerToParent: `Parent: opt your child into the novel blueprint project. Designing a story by deliberately layering theme, character arc, and structure, then writing scenes that enact those choices, teaches narrative craft far more deeply than analysis alone. The "author's note" explaining their choices builds metacognition about how stories create meaning. It's ambitious, CCSS-aligned creative and analytical writing that turns your child from a consumer of stories into someone who understands how they're made.`,
          },
          identityQuestion: `If you become someone who can see the machinery of any story, the structure, the character arcs, the themes, and feel how they lock together, what does that let you be, as a reader, a thinker, and maybe a storyteller yourself, that someone who only ever asks "what happens next?" can never quite become?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees how a story is built, not just what happens in it.`,
            `A reader who watches who a character is becoming.`,
            `Someone who finds the deeper question a story is really exploring.`,
          ],
          saveKey: `identity_responses_ela_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seven done, and you've become an engineer of stories. You learned that a novel only feels like magic, it's actually built, deliberately, out of working parts beneath its plot. You learned that structure is how it's arranged, the starting point, the flashbacks, the order, all controlling what you know and how you feel, and that the key question is always why the author arranged it that way. You learned that character is the heart, especially the arc, how a dynamic character grows, breaks, or transforms, revealed not by flat statement but by what they do, say, and think. And you learned that theme is the deepest layer, the ideas about life the whole book quietly explores, never preached, emerging from the pattern of everything else. Most of all, you learned that in the greatest novels these three lock together into one machine: the structure heightens the character's change, and that change reveals the theme. You'll never read the same way again, and the magic, strangely, only grows stronger for being understood. Next: we step onto the stage, drama, from Shakespeare to modern plays, where stories are built to be performed. Onward, {name}. — Quill`,
          badge: `novel-analyst`,
          badgeName: `Novel Analyst`,
          xpEarned: 75,
          competencies: [
            `Understands a novel as a deliberately built structure, with craft working beneath the plot`,
            `Analyzes structure: starting point, order, flashback, foreshadowing, and their effects on the reader`,
            `Reads character through the arc, distinguishing round/flat and dynamic/static characters`,
            `Recognizes indirect characterization (showing vs. telling) and why it creates belief`,
            `Identifies theme as the deeper ideas a novel explores, often as a question rather than a preached answer`,
            `Sees how structure, character, and theme lock together into a unified whole`,
            `Reads actively as an "engineer of stories," asking how a novel was built to create its effect`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Drama — Shakespeare and Modern Plays`,
            hook: `Stories built to be performed, from Shakespeare's stage to the modern theater. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
