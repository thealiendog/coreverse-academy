// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L15 — Editing and Revision
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Writing: Revision, Editing, Producing Polished Work
// Interaction: CASE STUDY (cases[] accordion). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l15-v1";

const ELA_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-15`,
      title: `Editing and Revision`,
      duration: 35,
      xpReward: 75,
      badge: `reviser`,
      badgeName: `The Reviser`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a secret that separates real writers from everyone else: good writing is rewriting. The first draft is never the finished piece, it's just you figuring out what you're trying to say. The magic happens afterward, in revision. Most people don't believe this. They write a draft, fix a few typos, and call it done, then wonder why their writing feels flat. They've confused two completely different jobs. Editing is fixing surface errors, spelling, grammar, punctuation, the small stuff. Revision, which literally means "to see again," is the deep work: rethinking your ideas, your structure, your argument, your clarity. Editing polishes the windows; revision can rebuild the house. The two are not the same, and the biggest mistake young writers make is editing a draft that actually needs revising, fussing over commas in a paragraph that should be cut entirely. Today you'll learn to revise like a professional: to read your own work with fresh, ruthless, honest eyes, to cut what doesn't serve the piece, to strengthen what does, and only then, at the very end, to edit it clean. This is the skill that turns a rough draft into something you're proud of. Onward.`,
          headline: `Editing and Revision`,
          subtitle: `The difference between a draft and a finished piece, and how real writers get there. A Case Study.`,
          visual: `/voyager-assets/ela/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Good Writing Is Rewriting`,
          paragraphs: [
            `Here's the secret that separates real writers from everyone else: good writing is rewriting. The first draft is never the finished piece. It's just you figuring out what you're trying to say, getting raw material onto the page. The actual quality, the power, the polish, comes from what you do afterward.`,
            `Most people don't believe this. They write a draft, fix a few typos, and call it done, then wonder why their work feels flat or muddled. They stopped at the very point where the real work begins. Professional writers expect to revise heavily, sometimes through many drafts, because they know the first try is rarely the best.`,
            `Believing "good writing is rewriting" changes everything about how you work. It takes the pressure off the first draft, which is allowed to be messy, that's its job. And it puts your energy where it belongs: into making a rough draft better, again and again, until it becomes something you're genuinely proud of. The page you finish with is rarely the page you started with.`,
          ],
          image: `/voyager-assets/ela/l15-s1-rewriting.webp`,
          imageCaption: `Here's the secret that separates real writers from everyone else: GOOD WRITING IS REWRITING. The first draft is never the finished piece, it's just you figuring out what you're trying to say, getting raw material on the page. The quality, the power, the polish, comes from what you do afterward. Most people don't believe this: they write a draft, fix a few typos, call it done, then wonder why it feels flat. They stopped where the real work begins. Professional writers expect to revise heavily, through many drafts, knowing the first try is rarely the best. Believing this changes everything: it takes pressure off the first draft (which is allowed to be messy, that's its job) and puts your energy into making a rough draft better, again and again, until you're proud of it.`,
          vocab: [
            { word: `first draft`,
              definition: `Your initial attempt, meant to be messy. Its job is to get raw material onto the page, not to be finished or perfect.`,
              audioPrompt: `A first draft, {name}, is your initial attempt, and it's allowed to be messy, that's its job. It exists just to get your raw ideas onto the page. The real quality comes later, in what you do to it afterward.` },
            { word: `rewriting`,
              definition: `The deep work of improving a draft after it's written. The core truth of writing: good writing is rewriting.`,
              audioPrompt: `Rewriting, {name}, is the deep work of improving a draft after it exists. The secret that separates real writers from everyone else is that good writing is rewriting, the first try is rarely the best one.` },
            { word: `process`,
              definition: `Writing as a series of stages, draft, revise, edit, rather than a single attempt. Real writers expect many passes.`,
              audioPrompt: `Process, {name}, means treating writing as a series of stages, draft, then revise, then edit, instead of one single attempt. Real writers expect many passes, which is exactly why their finished work is so strong.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Revision Versus Editing`,
          paragraphs: [
            `The single most important distinction in this lesson: editing and revision are not the same job. Editing is fixing surface errors, spelling, grammar, punctuation, typos. It's the small, final polish. Revision is something far deeper, and the words even tell you: "revision" means "to see again," to look at your whole piece with fresh eyes.`,
            `Revision is rethinking the big things: your ideas, your structure, your argument, your clarity. Is the point actually clear? Is the order right? Does each part earn its place? Should something be cut, moved, expanded, or completely rewritten? Revision can tear out a paragraph, reorder an essay, or change your whole approach. It's surgery, not a touch-up.`,
            `Here's the image: editing polishes the windows; revision can rebuild the house. You'd never polish the windows of a house with a cracked foundation. That's why the biggest mistake young writers make is editing when they should be revising, fussing over commas in a paragraph that the piece would be better off without. First revise the structure and ideas. Then, and only then, edit clean.`,
          ],
          image: `/voyager-assets/ela/l15-s2-vs.webp`,
          imageCaption: `The most important distinction in this lesson: EDITING and REVISION are not the same job. Editing is fixing surface errors, spelling, grammar, punctuation, typos, the small final polish. Revision is far deeper, and the word tells you: REVISION means "to see again," looking at your whole piece with fresh eyes. Revision rethinks the big things: ideas, structure, argument, clarity. Is the point clear? Is the order right? Does each part earn its place? Should something be cut, moved, expanded, rewritten? Revision can tear out a paragraph or reorder an essay, it's surgery, not a touch-up. The image: editing polishes the windows; revision can REBUILD THE HOUSE. The biggest mistake young writers make is editing when they should revise. First revise structure and ideas; then, and only then, edit clean.`,
          vocab: [
            { word: `editing`,
              definition: `Fixing surface errors, spelling, grammar, punctuation, typos. The small, final polish, done last.`,
              audioPrompt: `Editing, {name}, is fixing surface errors: spelling, grammar, punctuation, typos. It's the small, final polish, and crucially, it's done last, after the deeper work of revision is finished.` },
            { word: `revision`,
              definition: `Literally "to see again": the deep work of rethinking ideas, structure, argument, and clarity, not just fixing errors.`,
              audioPrompt: `Revision, {name}, literally means "to see again." It's the deep work of rethinking your ideas, structure, and argument, cutting, moving, rewriting, not just fixing small errors. Revision can rebuild the whole house.` },
            { word: `polish the windows vs rebuild the house`,
              definition: `The image for the difference: editing is a surface polish, while revision can restructure the entire piece.`,
              audioPrompt: `Editing polishes the windows; revision rebuilds the house, {name}. You'd never polish windows on a house with a cracked foundation, which is why you revise the big things first and edit the small things last.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Seeing Your Own Work Freshly`,
          paragraphs: [
            `Revision's hardest part is seeing your own work clearly, because you're too close to it. You know what you meant, so you read what you meant, not what you actually wrote. The reader has only the words on the page. The whole trick of revision is learning to see those words as a stranger would.`,
            `Writers use tricks to gain that distance. Set the draft aside for a day, even an hour, so it feels less familiar. Read it aloud: your ear catches confusion, clunky rhythm, and gaps your eye glides over. Imagine a reader who knows nothing about your topic, would they actually follow this? Each trick helps you escape your own head.`,
            `The most powerful tool of all is honest feedback from another reader, because they truly see only the words. A good reader tells you where they got confused, lost interest, or wanted more, exactly the information you can't get from inside your own head. Seeking out that feedback, and not getting defensive about it, is a writer's superpower.`,
          ],
          image: `/voyager-assets/ela/l15-s3-fresh.webp`,
          imageCaption: `Revision's hardest part is seeing your own work clearly, because you're too close. You know what you MEANT, so you read what you meant, not what you actually wrote, but the reader has only the words on the page. The trick of revision is seeing those words as a stranger would. Writers use tricks for distance: set the draft aside for a day so it feels less familiar; read it ALOUD (your ear catches confusion and gaps your eye glides over); imagine a reader who knows nothing about your topic, would they follow this? The most powerful tool is honest FEEDBACK from another reader, because they truly see only the words. A good reader tells you where they got confused, lost interest, or wanted more, exactly what you can't see from inside your own head. Seeking it without getting defensive is a writer's superpower.`,
          vocab: [
            { word: `distance`,
              definition: `The fresh perspective you need to revise well. Gained by setting work aside, reading aloud, or imagining a stranger reading it.`,
              audioPrompt: `Distance, {name}, is the fresh perspective revision requires. You're too close to your own draft, so you gain distance by setting it aside, reading it aloud, or imagining a stranger reading it cold.` },
            { word: `reading aloud`,
              definition: `A revision tool: hearing your draft helps your ear catch confusion, clunky rhythm, and gaps your eye reads right over.`,
              audioPrompt: `Reading aloud, {name}, is one of revision's best tools. When you hear your own draft, your ear catches confusion, clunky rhythm, and missing pieces that your eye slides right past when reading silently.` },
            { word: `feedback`,
              definition: `Honest reactions from another reader, who sees only your words. A writer's superpower is seeking it without getting defensive.`,
              audioPrompt: `Feedback, {name}, is honest reaction from another reader, and it's powerful because they see only your words, not what you meant. A real writer seeks it out and listens without getting defensive, which is a genuine superpower.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Courage To Cut`,
          paragraphs: [
            `The hardest revision skill is cutting. Writers grow attached to their words, a clever line, a paragraph they sweated over, even when it doesn't serve the piece. The famous advice is to "kill your darlings": be willing to cut even your favorite bits if they don't make the whole work better. The piece, not your ego, comes first.`,
            `Why cut so ruthlessly? Because strong writing is lean. Anything that doesn't advance your purpose, a tangent, a repetition, a paragraph that sounds nice but adds nothing, weakens the whole by burying what matters. Cutting the unnecessary makes the necessary shine brighter. Subtraction is one of the most powerful forms of revision there is.`,
            `Revision is more than cutting, of course: you also strengthen, clarify, reorder, and expand where the piece needs it. But the courage to cut is what most beginners lack, and gaining it is transformative. A finished piece isn't the one where you said everything you could; it's the one where everything left standing earns its place. That's the reviser's discipline.`,
          ],
          image: `/voyager-assets/ela/l15-s4-cut.webp`,
          imageCaption: `The hardest revision skill is CUTTING. Writers grow attached to their words, a clever line, a paragraph they sweated over, even when it doesn't serve the piece. The famous advice: "kill your darlings", be willing to cut even your favorite bits if they don't make the whole work better. The piece, not your ego, comes first. Why cut so ruthlessly? Because strong writing is LEAN. Anything that doesn't advance your purpose, a tangent, a repetition, a nice-sounding paragraph that adds nothing, weakens the whole by burying what matters. Cutting the unnecessary makes the necessary shine. Revision is more than cutting (you also strengthen, clarify, reorder, expand), but the courage to cut is what beginners lack. A finished piece is one where everything left standing earns its place.`,
          vocab: [
            { word: `kill your darlings`,
              definition: `The famous advice to cut even your favorite words or passages if they don't serve the whole piece.`,
              audioPrompt: `Kill your darlings, {name}, is famous writing advice: be willing to cut even your favorite line or paragraph if it doesn't make the whole piece better. The work comes first, ahead of your attachment to any clever bit.` },
            { word: `lean`,
              definition: `Writing with nothing wasted, where everything earns its place. Cutting the unnecessary makes the necessary shine.`,
              audioPrompt: `Lean writing, {name}, has nothing wasted, every word earns its place. Cutting the tangents and the repetition and the nice-but-empty parts makes what actually matters shine brighter, which is why subtraction is so powerful.` },
            { word: `earns its place`,
              definition: `The test for what to keep: every sentence and paragraph must advance the purpose, or it should be cut.`,
              audioPrompt: `Every part of a finished piece should earn its place, {name}, meaning it advances your purpose. A finished piece isn't where you said everything you could, it's where everything left standing genuinely belongs.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
            `Pull it together. Good writing is rewriting: the first draft is just raw material, and the real quality comes from what you do afterward. The key distinction is that editing (fixing surface errors) and revision (seeing again, rethinking ideas and structure) are different jobs. Editing polishes the windows; revision can rebuild the house, so you revise deep first, edit clean last.`,
            `To revise, you need distance from your own work, gained by setting it aside, reading aloud, imagining a stranger, and above all by honest feedback, which you seek without defensiveness. And the hardest, most transformative skill is the courage to cut: kill your darlings, keep writing lean, and let only what earns its place remain.`,
            `Now the case-study screen hands you five real revision situations: a writer who only edits when they should revise, a draft that needs deep restructuring, the power of cutting, using feedback well, and a flat paragraph revised into a strong one. For each, be the reviser: diagnose what the piece truly needs, deep revision or surface editing, and explain how to make it better. Onward.`,
          ],
          image: `/voyager-assets/ela/l15-s5-before.webp`,
          imageCaption: `Threads together. GOOD WRITING IS REWRITING: the first draft is raw material; quality comes from what you do afterward. The key distinction: EDITING (fixing surface errors) and REVISION (seeing again, rethinking ideas and structure) are different jobs. Editing polishes the windows; revision rebuilds the house, so revise deep first, edit clean last. To revise you need DISTANCE, from setting work aside, reading aloud, imagining a stranger, and above all honest FEEDBACK sought without defensiveness. The hardest, most transformative skill is the courage to CUT: kill your darlings, keep writing lean, let only what earns its place remain. The case-study screen hands you five revision situations. Be the reviser: diagnose what the piece truly needs, and explain how to make it better.`,
          vocab: [
            { word: `restructure`,
              definition: `Reordering or rebuilding the arrangement of a piece, a deep revision move, not a surface edit.`,
              audioPrompt: `To restructure, {name}, is to reorder or rebuild how a piece is arranged, moving sections, changing the sequence. It's deep revision work, the kind that can completely transform a draft, not a surface edit.` },
            { word: `clarity`,
              definition: `How easily a reader understands you. A central goal of revision, often the real problem when writing feels muddled.`,
              audioPrompt: `Clarity, {name}, is how easily a reader understands you. It's a central goal of revision, because the writer always knows what they meant, but the reader only has the words, which must be clear on their own.` },
            { word: `polished`,
              definition: `The finished state after deep revision and careful editing, where the piece is both well-built and error-free.`,
              audioPrompt: `Polished, {name}, is the finished state: the piece has been deeply revised so the ideas and structure are strong, and then carefully edited so it's clean and error-free. Both jobs, done in the right order.` },
          ],
        },

        {
          id: `l15-case-study`,
          type: `case-study`,
          headline: `Five Drafts In Need Of Work`,
          intro: `{name}, five real revision situations. For each, be the reviser: diagnose what the piece truly needs, deep revision or surface editing, and explain how a real writer turns a rough draft into a finished piece.`,
          cases: [
            {
              id: `c1`,
              title: `Editing when you should be revising`,
              type: `Revision vs editing`,
              description: `A student spends an hour on their essay's "revision": they fix every typo, correct the commas, and check spelling. They hand it in confident. It comes back with the comment: "Clean writing, but your argument is unclear and the second half repeats the first." Consider what went wrong.`,
              questions: [
                `What did the student actually do, and what did they skip?`,
                `Why didn't an hour of careful work fix the real problems?`,
                `What should "revision" have looked like here?`,
              ],
              evaluation: `The student edited, they fixed surface errors like typos, commas, and spelling, but they never revised. That's why an hour of careful work didn't touch the real problems: editing polishes the windows, but this house had structural issues (an unclear argument, a repetitive second half) that only revision can fix. No amount of comma-correcting makes a muddled argument clear or removes redundant content; those are deep problems of ideas and structure, not surface errors. Real revision here would have meant stepping back to see the whole piece freshly and asking the big questions: Is my main argument actually clear, can a reader state it? Then sharpening it. Why does the second half repeat the first, should one half be cut, or should they be merged and the freed space used to develop the argument further? The student needed to rethink and rebuild before polishing. This is the single most common revision mistake: confusing the two jobs and spending all your energy editing a draft that desperately needs revising. The order matters, revise the structure and ideas first, then edit clean at the very end.`,
            },
            {
              id: `c2`,
              title: `A draft that needs the house rebuilt`,
              type: `Deep revision / structure`,
              description: `A draft tells a personal story, but it starts with three slow paragraphs of background, buries the most dramatic moment in the middle, and ends on a minor detail. Every sentence is grammatically perfect. Consider what this draft needs.`,
              questions: [
                `Is this a job for editing or revision? Why?`,
                `What specific structural changes would strengthen it?`,
                `Why is "grammatically perfect" not the same as "finished"?`,
              ],
              evaluation: `This is squarely a job for revision, not editing: the sentences are already grammatically perfect, so there are no surface errors to fix, but the piece's structure, what goes where, is working against it. The specific structural changes are clear once you see the whole freshly. The three slow background paragraphs probably bury the reader before the story even starts, so they could be drastically cut or woven in later, only as needed. The most dramatic moment, currently hidden in the middle, should likely move to a position of power, perhaps even the opening, to hook the reader, or the climax where it lands hardest. And ending on a minor detail wastes the most memorable position in the whole piece (the end), so it should close on something resonant instead. This shows exactly why "grammatically perfect" is not the same as "finished": a piece can have flawless grammar and still fail, because the deep elements (structure, pacing, emphasis, what to cut) determine whether it actually works. Editing could never fix this draft, no matter how long you spent on it. It needs the reviser's surgery: seeing the whole, then cutting, moving, and rebuilding so the story lands.`,
            },
            {
              id: `c3`,
              title: `The courage to cut`,
              type: `Cutting / lean writing`,
              description: `A writer has a beautiful, clever paragraph they're proud of, full of lovely metaphors. But honestly, it's a tangent: it doesn't advance the essay's argument, and the piece would flow better without it. They really don't want to delete it. Consider what they should do, and why it's hard.`,
              questions: [
                `What is the famous advice that applies here?`,
                `Why does keeping a "nice but irrelevant" paragraph actually hurt the piece?`,
                `Is the cut paragraph truly wasted?`,
              ],
              evaluation: `The famous advice that applies is "kill your darlings": be willing to cut even your favorite, most beautiful writing if it doesn't serve the whole piece. It's hard precisely because the writer is attached, they sweated over those lovely metaphors and are proud of them, so cutting feels like a loss. But keeping a nice-but-irrelevant paragraph actively hurts the piece: strong writing is lean, and a tangent (however beautiful) buries what matters, slows the reader, and weakens the argument's momentum by making them wade through something that doesn't advance the purpose. Cutting the unnecessary makes the necessary shine, so removing the darling paragraph actually strengthens the essay. And here's the comforting truth, the cut paragraph isn't truly wasted: writers save such pieces in a "scraps" file, and a beautiful tangent that doesn't fit this essay may be the seed of a future one. Nothing good is ever really lost. The discipline is recognizing that a finished piece isn't where you crammed in everything you could write, it's where everything that remains earns its place. Putting the work ahead of the ego is the mark of a real reviser.`,
            },
            {
              id: `c4`,
              title: `Using feedback well`,
              type: `Feedback`,
              description: `A writer shares a draft. A reader says: "I got confused around the third paragraph, I couldn't tell what your main point was, and I lost interest near the end." The writer's first instinct is to defend the draft and explain what they meant. Consider the better response.`,
              questions: [
                `Why is the urge to defend and explain a trap?`,
                `What valuable information is this feedback actually giving?`,
                `How should the writer use this to revise?`,
              ],
              evaluation: `The urge to defend and explain is a trap because the writer won't be standing next to every future reader to explain what they meant, the words have to work on their own. The whole value of feedback is that the reader sees only what's on the page, not the writer's intentions, which is exactly the perspective the writer can't access from inside their own head. So this feedback is gold: it pinpoints real problems precisely, the third paragraph is confusing, the main point isn't coming through, and the ending loses the reader. That's not an attack; it's a map of where the draft fails to do its job. The writer should use it to revise: go to the third paragraph and clarify it (probably a deep revision, not a comma fix), make the main point unmistakable since a reader couldn't find it, and rework the ending so it holds interest, maybe by cutting what drags or building to something stronger. The skill, and it's a writer's superpower, is to receive honest feedback without defensiveness, treating "I got confused here" as the most useful gift a reader can give, rather than something to argue away. Defensive writers stay stuck; writers who listen get better.`,
            },
            {
              id: `c5`,
              title: `Flat into strong, by revision`,
              type: `Revision in action`,
              description: `A draft paragraph reads: "The trip was good. We saw a lot of things. The mountains were nice. We had fun and then we came home." It's correct but lifeless. Consider how a reviser, not just an editor, would transform it.`,
              questions: [
                `Why won't editing alone fix this paragraph?`,
                `What revision moves would bring it to life?`,
                `What's the difference between fixing it and rewriting it?`,
              ],
              evaluation: `Editing alone won't fix it because there's nothing to correct, the grammar and spelling are fine. The problem is deeper: the writing is vague and lifeless ("good," "a lot of things," "nice," "fun" tell the reader nothing and show nothing). This needs revision, real rethinking and rewriting, not a surface pass. The revision moves would bring it to life by replacing empty generalities with specific, concrete, sensory detail and a real voice: instead of "the mountains were nice," something like what they actually looked like, what it felt like to stand there, a specific moment that mattered. Instead of "we had fun," show one vivid thing that was fun. The reviser asks: what did I actually experience, and how do I put the reader there? That's the difference between fixing and rewriting: fixing tweaks the existing words (and here there's nothing to fix), while rewriting throws out the flat version and builds a genuinely better one rooted in specifics and feeling. This is revision at its most fundamental, recognizing that "correct but lifeless" is a draft problem, not an error problem, and that the cure is to see the experience again and re-create it with the detail and voice the first draft skipped. The finished paragraph may share almost no words with the original, and that's exactly right.`,
            },
          ],
          synthesisPrompt: `After all five: take a flat or messy paragraph of your own and revise it (not just edit it). What deep changes did you make, cutting, restructuring, adding specifics, clarifying, and how is the revised version genuinely better, not just cleaner? In 5-6 sentences.`,
          reflectionPrompt: `The lesson says receiving honest feedback without getting defensive is a writer's superpower. Why is that so hard? When has someone's honest feedback, on writing or anything else, actually made your work better once you got past the sting?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the lesson mean by "good writing is rewriting"?`,
              options: [
                `That you should copy other writers' work word for word.`,
                `That the first draft is rarely the best, and quality comes from revising afterward.`,
                `That you must write the exact same essay over and over for practice.`,
                `That writing is impossible to do well, so don't bother trying.`,
              ],
              correctIndex: 1,
              explanation: `"Good writing is rewriting" means the first draft is just raw material and the real quality comes from the deep work you do afterward, in revision. The distractors misread it as copying, mindless repetition, or giving up.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the core difference between editing and revision?`,
              options: [
                `Editing is for essays; revision is only for stories and poems.`,
                `Editing takes longer; revision is the quick part.`,
                `Editing fixes surface errors; revision rethinks ideas, structure, and clarity.`,
                `Editing is done by teachers; revision is done by students.`,
              ],
              correctIndex: 2,
              explanation: `Editing fixes surface errors (spelling, grammar, punctuation), while revision is the deep work of rethinking ideas, structure, argument, and clarity, "to see again." The distractors split them falsely by genre, time, or who does them.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `The lesson uses a house image. What does it mean?`,
              options: [
                `Editing polishes the windows; revision can rebuild the house.`,
                `Writing a draft is like buying a house you can never change.`,
                `Revision means decorating, while editing means construction.`,
                `A good essay should literally be shaped like a house.`,
              ],
              correctIndex: 0,
              explanation: `Editing polishes the windows (a surface touch-up), while revision can rebuild the house (deep structural change), which is why you'd never polish windows on a house with a cracked foundation. The distractors reverse or distort the image.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the most common revision mistake young writers make?`,
              options: [
                `Revising so much that they never finish anything at all.`,
                `Asking for too much feedback from too many readers.`,
                `Cutting so ruthlessly that nothing is left on the page.`,
                `Editing surface errors when the draft actually needs deep revision.`,
              ],
              correctIndex: 3,
              explanation: `The biggest mistake is editing when they should be revising, fussing over commas in a paragraph the piece would be better off without, instead of fixing the deeper problems. The distractors describe over-revising, over-seeking feedback, or over-cutting, none of which is the named common error.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is it so hard to see your own writing clearly?`,
              options: [
                `Because your own handwriting is always too messy to read.`,
                `You know what you meant, so you read your intention, not the actual words.`,
                `Because writers have worse eyesight than other people.`,
                `Because your own work is always genuinely perfect already.`,
              ],
              correctIndex: 1,
              explanation: `You're too close to your own work: you know what you meant, so you read what you meant rather than what's actually on the page, while the reader has only the words. The distractors blame handwriting, eyesight, or imagined perfection.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Which of these is a tool for gaining "distance" to revise well?`,
              options: [
                `Reading the draft aloud so your ear catches what your eye glides over.`,
                `Reading the draft as fast as you possibly can, just once.`,
                `Refusing to let anyone else ever read your draft.`,
                `Adding more words so the draft is too long to reread.`,
              ],
              correctIndex: 0,
              explanation: `Reading aloud is a key distance tool: your ear catches confusion, clunky rhythm, and gaps your eye reads right over. The distractors (skimming once, refusing all readers, padding the draft) work against the fresh perspective revision needs.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does "kill your darlings" mean?`,
              options: [
                `Delete every single thing you write because none of it is good.`,
                `Be willing to cut even your favorite words if they don't serve the whole piece.`,
                `Remove all the characters you like from a story.`,
                `Never let yourself enjoy any part of writing.`,
              ],
              correctIndex: 1,
              explanation: `"Kill your darlings" means being willing to cut even your favorite, most beloved bits if they don't make the whole piece better, putting the work ahead of your ego. The distractors exaggerate it into deleting everything, removing liked characters, or banning enjoyment.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `According to the lesson, what's the best way to handle honest feedback like "I got confused here"?`,
              options: [
                `Immediately defend the draft and carefully explain to the reader what you had really meant all along.`,
                `Ignore it, since the reader clearly just didn't understand.`,
                `Receive it without defensiveness and use it to revise, since the reader sees only your words.`,
                `Demand the reader rewrite the confusing part for you.`,
              ],
              correctIndex: 2,
              explanation: `The writer's superpower is receiving honest feedback without defensiveness and using it to revise, because the reader sees only the words (the perspective you can't access yourself), so "I got confused here" is a precise, valuable map. The distractors defend, dismiss, or offload the work.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If a paragraph has no spelling, grammar, or punctuation errors, then it's finished and there's nothing more a writer needs to do to it.`,
              correctAnswer: false,
              explanation: `False, and believing it is the exact trap this lesson exists to break. Being free of surface errors means a paragraph has been successfully edited, but editing is only one of two very different jobs, and it's the smaller, more superficial one. A paragraph can be flawlessly correct, perfect spelling, grammar, and punctuation, and still fail completely as writing. It might be vague and lifeless ("the trip was good, we saw a lot of things, the mountains were nice"), saying nothing concrete and showing nothing. It might be in the wrong place, with the most dramatic moment buried in the middle and the piece opening on slow background. It might be a beautiful tangent that doesn't advance the argument and should be cut entirely. It might repeat what another paragraph already said. None of those are surface errors; they're problems of ideas, structure, specificity, and purpose, and only revision, the deep work of seeing the piece again and rethinking it, can fix them. That's the whole point of "editing polishes the windows; revision can rebuild the house": you'd never call a house finished just because its windows are clean if the foundation is cracked and the rooms are in the wrong order. A correct paragraph is the floor, not the ceiling. Real writers know that once the errors are gone, the most important work, making the writing actually clear, lean, well-structured, and alive, may still lie ahead.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Two students get the same feedback: "Clean writing, but the argument is unclear and the second half repeats the first." Maya re-reads, fixes a few more commas, and resubmits. Leo cuts the repetitive second half, rewrites his thesis to be unmistakable, and reorders his points. Using the lesson, who actually improved their essay, and why?`,
              options: [
                `Maya, because fixing more commas is the safest, most careful approach.`,
                `Neither, because once feedback is given, an essay can't really be improved.`,
                `Leo, because he revised, addressing the deep problems the feedback named (unclear argument, repetition) by cutting, rewriting, and restructuring, while Maya only edited again, polishing surface details that were never the problem, so her real issues remain untouched.`,
                `Maya, because Leo changed too much and should have left his draft mostly alone.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's core distinction. The feedback named deep problems, an unclear argument and a repetitive structure, which are revision issues, not surface errors. Leo revised: he cut the redundant half, sharpened the thesis, and reordered, rebuilding the house. Maya only edited again, polishing commas that were never the problem, so her real issues remain. The distractors praise Maya's surface fixes, deny improvement is possible, or wrongly treat Leo's necessary revision as overdoing it.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-rewriting`, category: `The first draft`, prompt: `"Good writing is rewriting" takes the pressure off the first draft, it's allowed to be messy. Does that idea free you or unsettle you? How might letting a first draft be rough change the way you start anything hard, not just writing?` },
            { id: `reflect-cut`, category: `Killing darlings`, prompt: `The courage to cut, even your favorite bits, is the hardest revision skill. When have you had to let go of something you loved because it wasn't serving the bigger goal, in writing, a project, or life? How did it feel, and was the whole better for it?` },
            { id: `reflect-feedback`, category: `Hearing the hard truth`, prompt: `Receiving honest feedback without defensiveness is a writer's superpower. Why is it so hard not to defend our own work? When has criticism that stung at first turned out to be exactly what you needed?` },
            { id: `reflect-heritage`, category: `Revising the big things`, prompt: `Caro, building Coreverse is one long act of revision, drafting, getting feedback, cutting what doesn't work, rebuilding. Where have you had to "rebuild the house" rather than just polish the windows on something you're creating? What did that deeper revision teach you?` },
            { id: `reflect-distance`, category: `Fresh eyes`, prompt: `Seeing your own work freshly requires distance, stepping away, reading aloud, imagining a stranger. Where else in life do you only see something clearly after stepping back from it? How do you get that fresh perspective when you're too close?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this revising is just procrastination and self-doubt, trust your first instinct and ship it." State that view as strongly as you can. Where does it have a real point, and where does the lesson show revision genuinely matters?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Revision is where rough becomes real, and the skills transfer far beyond writing. Two paths.`,
          familyActivity: {
            title: `The Revision Workshop`,
            duration: `One sitting`,
            description: `Run a real revision workshop as a family and feel the difference between editing and revising. Have each person write a short, quick first draft of something low-stakes, a paragraph about their day, a tiny story, a description of a favorite place, and embrace that it's allowed to be messy (that's a first draft's job). Then trade drafts and become each other's honest readers. Here's the key rule that makes it work: as a reader, you don't fix anything, you just report your experience. Say where you got confused, where you lost interest, where you wanted more, and what the main point seemed to be (so the writer learns whether it came through). The writer's only job is to listen without defending or explaining, that's the superpower. Then everyone revises, but make the distinction explicit: first do real revision (cut what doesn't earn its place, clarify the muddy parts, reorder if needed, add specifics where it's vague), and only at the very end do a quick edit for surface errors. Read the before and after aloud. The goal is for everyone to feel, firsthand, that a draft isn't done when the typos are gone, that honest feedback is a gift not an attack, and that the courage to cut and rebuild is where good writing actually comes from. It's a skill that will serve every essay, application, and important message for life.`,
          },
          projectOption: {
            title: `The Three-Draft Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Experience the full power of revision by taking one piece through three real drafts. Week 1: pick something you genuinely want to be good (a personal essay, a story, an opinion piece, even a piece of writing for something real in your life). Write Draft 1 fast and messy, no pressure, just get it down. Then set it aside for at least a day. Come back, read it aloud, and write Draft 2, but this is pure revision: don't touch tiny errors yet. Instead, see it again with fresh eyes and make the big moves, is the structure right? Cut anything that doesn't earn its place (kill your darlings), clarify the muddy parts, add concrete specifics where it's vague, move things for better emphasis. Week 2: get honest feedback from at least one real reader, ask them specifically where they got confused, lost interest, or wanted more, and listen without defending. Use it to write Draft 3, addressing the deep issues they revealed. Only then, as the final step, edit Draft 3 clean for spelling, grammar, and punctuation. At the end, lay Draft 1 and the final version side by side and write a short note on what changed and why. Seeing how far a piece travels from first draft to finished, you'll never again confuse editing with revision, or believe that a clean first draft is a finished one. This is exactly how real writers work.`,
            offerToParent: `Parent: opt your child into the Three-Draft Project. Taking one piece through distinct draft, revision, feedback, and editing stages, and keeping the deep work (structure, cutting, clarity) separate from surface editing, builds the full writing process the standards demand and that most students never truly learn. Receiving feedback without defensiveness and having the courage to cut are transformative habits that transfer to every kind of work. Comparing the first and final drafts makes the value of revision unforgettable. It's rigorous, CCSS-aligned, and produces both a genuinely polished piece and a writer who understands how good work is actually made.`,
          },
          identityQuestion: `If you become someone who can see your own rough work with honest, fresh eyes, cut what doesn't serve it, rebuild what does, and welcome hard feedback as a gift, what kind of creator does that make you, in anything you build, not just writing, that someone who calls the first messy draft "done" can never quite become?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the first draft is just the beginning.`,
            `A creator brave enough to cut what doesn't serve the work.`,
            `Someone who hears hard feedback as a gift, not an attack.`,
          ],
          saveKey: `identity_responses_ela_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteen done, and you've learned the skill that separates real writers from everyone else. You learned the secret: good writing is rewriting. The first draft is never the finished piece, it's just raw material, and the real quality comes from what you do afterward. You learned the single most important distinction: editing and revision are different jobs. Editing fixes surface errors, the small final polish; revision means "to see again," the deep work of rethinking your ideas, structure, argument, and clarity. Editing polishes the windows; revision can rebuild the house, so you revise deep first and edit clean last. You learned that the hardest part is seeing your own work freshly, since you read what you meant instead of what you wrote, and that distance, setting it aside, reading aloud, and above all honest feedback received without defensiveness, is what lets you see clearly. And you learned the courage to cut: kill your darlings, keep your writing lean, and let only what earns its place remain. This is how a rough draft becomes something you're truly proud of. Next: we begin turning all these skills toward the real world, starting with the college application essay, where you'll write the most important short piece of your life so far. Onward, {name}. — Quill`,
          badge: `reviser`,
          badgeName: `The Reviser`,
          xpEarned: 75,
          competencies: [
            `Understands that good writing is rewriting and the first draft is raw material`,
            `Distinguishes editing (surface errors) from revision (deep rethinking of ideas and structure)`,
            `Revises deep first and edits clean last, avoiding the common mistake of editing when revision is needed`,
            `Gains distance on their own work through setting aside, reading aloud, and imagining a stranger`,
            `Seeks and receives honest feedback without defensiveness, treating it as valuable information`,
            `Has the courage to cut ("kill your darlings") and keep writing lean`,
            `Transforms correct-but-flat drafts through restructuring, clarifying, cutting, and adding specifics`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: College Application Essays`,
            hook: `The most important short piece you'll write so far, and how to make it unmistakably you. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L15 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
