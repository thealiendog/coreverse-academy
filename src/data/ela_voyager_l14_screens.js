// ─────────────────────────────────────────────────────────────────────────────
// ELA VOYAGER  |  L14 — Grammar: Syntax for Effect
// Age band : voyagers (11-12)   Guide: quill (Porcupine)
// Standards: CCSS — Language: Conventions, Syntax for Effect
// Interaction: CASE STUDY (cases[] accordion). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ela-l14-v1";

const ELA_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-11-12-14`,
      title: `Grammar: Syntax for Effect`,
      duration: 35,
      xpReward: 75,
      badge: `syntax-smith`,
      badgeName: `Syntax Smith`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, most people think of grammar as a list of rules to obey so a teacher doesn't mark you down, a kind of writing police. Today we flip that idea completely. Grammar, used well, is not a cage; it's a toolkit. The placement of a comma, the choice between an active and a passive sentence, the decision to start with a fragment for punch, all of these are tools a skilled writer uses on purpose to create meaning, emphasis, and feeling. The same true fact can be written ten ways, and each arrangement of words lands differently in the reader's mind. That's what we mean by syntax for effect: arranging your sentence not just correctly, but powerfully. Yes, you still need to know the conventions, because a sentence riddled with errors loses a reader's trust and muddles your meaning. But the real mastery comes after you know the rules: learning to bend and break them deliberately, for a reason. A writer who controls syntax controls how the reader experiences every single sentence. Today you stop being a rule-follower and become a craftsperson who shapes meaning at the level of the sentence itself. Onward.`,
          headline: `Grammar: Syntax for Effect`,
          subtitle: `Grammar not as rules to obey, but as a toolkit for shaping meaning. A Case Study.`,
          visual: `/voyager-assets/ela/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Grammar Is A Toolkit, Not A Cage`,
          paragraphs: [
            `Most people think of grammar as rules to obey so they don't get marked down, writing police waiting to catch mistakes. Today we flip that. Used well, grammar isn't a cage; it's a toolkit. The way you arrange a sentence is a set of deliberate choices that shape meaning, emphasis, and feeling in the reader's mind.`,
            `Here's the core idea: the same true fact can be written ten different ways, and each arrangement lands differently. "The dog bit the man" and "The man was bitten by the dog" state the same event, but they emphasize different things and feel different. Syntax, how words are ordered into sentences, is itself a choice with consequences.`,
            `That's what "syntax for effect" means: arranging a sentence not just correctly, but powerfully, on purpose. You still need to know the conventions, because errors lose a reader's trust and muddle meaning. But the real mastery comes after the rules, learning to use, bend, and even break them deliberately, for a reason you can name.`,
          ],
          image: `/voyager-assets/ela/l14-s1-toolkit.webp`,
          imageCaption: `Most people think of grammar as rules to obey so they don't get marked down, writing police catching mistakes. Today we flip that: used well, grammar isn't a cage, it's a TOOLKIT. The way you arrange a sentence is a set of deliberate choices that shape meaning, emphasis, and feeling. The core idea: the same true fact can be written ten ways, each landing differently. "The dog bit the man" and "The man was bitten by the dog" state the same event but emphasize different things. SYNTAX, how words are ordered into sentences, is itself a choice with consequences. "Syntax for effect" means arranging a sentence not just correctly but powerfully, on purpose. You still need the conventions, but real mastery comes after the rules: using, bending, even breaking them deliberately, for a reason.`,
          vocab: [
            { word: `syntax`,
              definition: `How words are arranged into sentences. Beyond grammar rules, syntax is a tool for shaping meaning and emphasis.`,
              audioPrompt: `Syntax, {name}, is how words are arranged into sentences. It's far more than following rules, it's a tool: the order you choose shapes what your reader notices and how the sentence feels to them.` },
            { word: `convention`,
              definition: `A standard rule of grammar and usage. You need conventions because errors muddle meaning and lose a reader's trust.`,
              audioPrompt: `A convention, {name}, is a standard rule of grammar and usage. You still need to know conventions, because a sentence full of errors muddles your meaning and loses your reader's trust before you can even bend a rule on purpose.` },
            { word: `syntax for effect`,
              definition: `Arranging a sentence not just correctly but powerfully, choosing structure on purpose to create meaning and feeling.`,
              audioPrompt: `Syntax for effect, {name}, means arranging a sentence not just correctly but powerfully, on purpose. The same fact can be written ten ways, and a skilled writer chooses the arrangement that lands exactly how they want.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Active And Passive: Who Acts?`,
          paragraphs: [
            `One of the most useful tools is the choice between active and passive voice. In active voice, the subject does the action: "The committee made a mistake." In passive voice, the action happens to the subject, and the doer can even vanish: "A mistake was made." Same fact, very different feel and emphasis.`,
            `Active voice is usually clearer, more direct, and more energetic, it names who did what. That's why strong writing leans on it. But passive voice is a tool too, not just an error. Use it when the doer is unknown or unimportant ("the bridge was built in 1920"), or when you want to emphasize the receiver of the action over the actor.`,
            `Here's the sharp part: passive voice can also hide responsibility, and skilled readers notice. "Mistakes were made" quietly erases who made them. Politicians and companies love that move. So the active-passive choice isn't just about clarity; it can be about honesty. Controlling it lets you write powerfully and spot when someone else is dodging.`,
          ],
          image: `/voyager-assets/ela/l14-s2-voice.webp`,
          imageCaption: `One of the most useful tools is ACTIVE vs PASSIVE voice. In active voice the subject does the action: "The committee made a mistake." In passive, the action happens to the subject and the doer can vanish: "A mistake was made." Same fact, different feel. Active voice is usually clearer, more direct, more energetic, it names who did what, which is why strong writing leans on it. But passive is a tool, not just an error: use it when the doer is unknown or unimportant ("the bridge was built in 1920"), or to emphasize the receiver. The sharp part: passive can HIDE responsibility. "Mistakes were made" quietly erases who made them, a move politicians love. So the choice isn't just clarity, it's honesty, and controlling it lets you spot dodging too.`,
          vocab: [
            { word: `active voice`,
              definition: `A sentence where the subject does the action ("The dog bit the man"). Usually clearer, more direct, and more energetic.`,
              audioPrompt: `Active voice, {name}, is when the subject does the action, like "the committee made a mistake." It's usually clearer, more direct, and more energetic, because it names exactly who did what, which is why strong writing leans on it.` },
            { word: `passive voice`,
              definition: `A sentence where the action happens to the subject and the doer can disappear ("A mistake was made"). A tool, not just an error.`,
              audioPrompt: `Passive voice, {name}, is when the action happens to the subject and the doer can even disappear, like "a mistake was made." It's a real tool, useful when the doer doesn't matter, but it can also hide who's responsible.` },
            { word: `hiding responsibility`,
              definition: `Using passive voice to erase who did something, as in "mistakes were made." Skilled readers notice this dodge.`,
              audioPrompt: `Hiding responsibility, {name}, is a sneaky use of passive voice, like "mistakes were made," which quietly erases who actually made them. Politicians and companies love it, and a sharp reader always notices the dodge.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sentence Structure: Building For Effect`,
          paragraphs: [
            `Sentences come in structures you can choose for effect. A simple sentence is one complete thought: clean and punchy. A compound sentence joins two equal thoughts with "and" or "but." A complex sentence hangs a lesser idea off a main one with words like "because" or "although," letting you show how ideas rank in importance.`,
            `Why does this matter? Because structure controls emphasis. In a complex sentence, the main clause gets the weight and the dependent clause supports it. "Although she was tired, she finished" emphasizes finishing. "Although she finished, she was tired" emphasizes the tiredness. Same facts, opposite emphasis, just from how you build the sentence.`,
            `You can also place your most important idea where it lands hardest, often at the very end of a sentence, the position readers remember most. And you can vary structure for rhythm: a run of complex sentences, then a short simple one for impact. Choosing structure on purpose is how you guide what the reader feels and remembers.`,
          ],
          image: `/voyager-assets/ela/l14-s3-structure.webp`,
          imageCaption: `Sentences come in STRUCTURES you choose for effect. A SIMPLE sentence is one complete thought, clean and punchy. A COMPOUND sentence joins two equal thoughts with "and" or "but." A COMPLEX sentence hangs a lesser idea off a main one with "because" or "although," showing how ideas rank. Structure controls emphasis: in a complex sentence the main clause gets the weight. "Although she was tired, she finished" emphasizes finishing; "Although she finished, she was tired" emphasizes tiredness, same facts, opposite emphasis. You can place your key idea where it lands hardest, often at the END, the spot readers remember most, and vary structure for rhythm: complex sentences, then a short simple one for impact. Choosing structure on purpose guides what the reader feels and remembers.`,
          vocab: [
            { word: `complex sentence`,
              definition: `A sentence with a main clause plus a dependent one (using "because," "although"), letting you rank ideas by importance.`,
              audioPrompt: `A complex sentence, {name}, joins a main idea with a lesser one using words like "because" or "although." It lets you show which idea matters most, because the main clause carries the weight and the other one supports it.` },
            { word: `emphasis`,
              definition: `The weight a sentence gives to one idea over others. Sentence structure and word placement control where emphasis falls.`,
              audioPrompt: `Emphasis, {name}, is the weight a sentence gives one idea over the others. How you build the sentence decides where the emphasis lands, which is why the same two facts can stress completely different things.` },
            { word: `end position`,
              definition: `The end of a sentence, the spot readers remember most. Skilled writers place key ideas there for impact.`,
              audioPrompt: `The end position, {name}, is the close of a sentence, and it's the spot readers remember best. Skilled writers put their most important idea there on purpose, because it lands hardest and lingers longest in the mind.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Breaking Rules On Purpose`,
          paragraphs: [
            `Once you know the rules, you can break them deliberately for effect, and that's very different from breaking them by accident. A sentence fragment, technically incomplete, can hit hard when used on purpose. Like this. The deliberate fragment creates punch and emphasis. The key word is deliberate: a writer who knows the rule is choosing to bend it.`,
            `Other tools live in this space. A very short sentence after long ones lands like a hammer. Starting a sentence with "And" or "But," which strict rules forbid, can create a conversational, driving rhythm. Repeating a structure on purpose ("We will fight here. We will fight there.") builds power. None of these are errors when chosen with intent.`,
            `But here's the catch, and it matters: you can only break a rule effectively once you've mastered it. A fragment from a writer who clearly knows grammar reads as bold style; the same fragment from someone making constant errors just reads as a mistake. Learn the conventions first. Then you earn the right to break them, and your reader trusts that you meant to.`,
          ],
          image: `/voyager-assets/ela/l14-s4-breaking.webp`,
          imageCaption: `Once you know the rules, you can BREAK them deliberately for effect, very different from breaking them by accident. A FRAGMENT, technically incomplete, can hit hard when used on purpose. Like this. The key word is deliberate: a writer who knows the rule is choosing to bend it. Other tools: a very short sentence after long ones lands like a hammer; starting with "And" or "But" creates a driving, conversational rhythm; repeating a structure on purpose builds power. None are errors when chosen with intent. But the catch: you can only break a rule effectively once you've MASTERED it. A fragment from a writer who clearly knows grammar reads as bold style; the same fragment amid constant errors just reads as a mistake. Learn the conventions first, then you earn the right to break them.`,
          vocab: [
            { word: `sentence fragment`,
              definition: `An incomplete sentence. An error by accident, but a punchy tool for emphasis when used deliberately by a skilled writer.`,
              audioPrompt: `A sentence fragment, {name}, is technically incomplete, missing part of a full sentence. By accident it's an error, but used on purpose by a writer who knows the rules, it lands with real punch and emphasis.` },
            { word: `deliberate`,
              definition: `Done on purpose, with intent. Breaking a grammar rule deliberately is style; breaking it by accident is just an error.`,
              audioPrompt: `Deliberate, {name}, means done on purpose, with intent. The whole difference between bold style and a mistake is whether you broke the rule deliberately, knowing it, or simply got it wrong without realizing.` },
            { word: `mastery first`,
              definition: `The principle that you must know a rule well before you can break it effectively, so readers trust you meant to.`,
              audioPrompt: `Mastery first, {name}, is the principle that you must truly know a rule before you can break it for effect. A fragment from a clear expert reads as style; the same from someone making constant errors just reads as sloppy.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Study`,
          paragraphs: [
            `Pull it together. Grammar isn't a cage but a toolkit, and syntax, how you arrange words into sentences, is a choice with consequences. The same fact, written ten ways, lands ten ways. Conventions still matter (errors lose trust), but the mastery is using structure on purpose, "syntax for effect."`,
            `The big tools: active versus passive voice, where active is direct and names the doer while passive can hide responsibility; sentence structure, where complex sentences rank ideas and end position lands hardest; and the deliberate breaking of rules, fragments, short punches, repetition, which reads as style only once you've mastered the rules you're bending.`,
            `Now the case-study screen hands you five real sentence situations: an active-passive choice that changes meaning, structure controlling emphasis, a passive voice hiding responsibility, a deliberate fragment versus an accidental one, and a writer revising a flat sentence into a powerful one. For each, be the syntax smith: see the choice, name its effect, and explain how to shape meaning on purpose. Onward.`,
          ],
          image: `/voyager-assets/ela/l14-s5-before.webp`,
          imageCaption: `Threads together. Grammar isn't a cage but a TOOLKIT, and syntax, how you arrange words, is a choice with consequences: the same fact, written ten ways, lands ten ways. Conventions matter (errors lose trust), but mastery is using structure on purpose. The big tools: ACTIVE vs PASSIVE voice (active names the doer; passive can hide responsibility); sentence STRUCTURE (complex sentences rank ideas, end position lands hardest); and BREAKING rules deliberately (fragments, short punches, repetition), which reads as style only once you've mastered the rules. The case-study screen hands you five sentence situations. Be the syntax smith: see the choice, name its effect, explain how to shape meaning on purpose.`,
          vocab: [
            { word: `parallelism`,
              definition: `Repeating a grammatical structure for rhythm and power, as in "of the people, by the people, for the people."`,
              audioPrompt: `Parallelism, {name}, is repeating the same grammatical structure on purpose, like "of the people, by the people, for the people." That deliberate repetition builds rhythm and power, one of syntax's strongest effects.` },
            { word: `clarity`,
              definition: `Writing that is easy to understand. Good syntax serves clarity first, then reaches for effect once meaning is clear.`,
              audioPrompt: `Clarity, {name}, is writing that's easy to understand, and it comes first. Fancy syntax is worthless if the reader can't follow you, so a skilled writer secures clarity, then reaches for effect on top of it.` },
            { word: `intentionality`,
              definition: `Making every syntax choice on purpose, for a reason you could name. The mark of a writer who controls their sentences.`,
              audioPrompt: `Intentionality, {name}, is making every choice on purpose, for a reason you could explain. The difference between a craftsperson and a guesser is that the craftsperson can tell you exactly why each sentence is built the way it is.` },
          ],
        },

        {
          id: `l14-case-study`,
          type: `case-study`,
          headline: `Five Sentences On The Workbench`,
          intro: `{name}, five real sentence situations. For each, be the syntax smith: see the grammatical choice, name its effect on the reader, and explain how a writer shapes meaning on purpose at the level of the sentence itself.`,
          cases: [
            {
              id: `c1`,
              title: `Active or passive: which lands?`,
              type: `Active/passive voice`,
              description: `A sports writer can describe a game two ways. Active: "Rodriguez scored the winning goal in the final minute." Passive: "The winning goal was scored by Rodriguez in the final minute." Same fact. Consider which serves the writer's purpose and why.`,
              questions: [
                `How does each version differ in feel and emphasis?`,
                `Which is usually stronger for sports writing, and why?`,
                `When might the passive version actually be the right choice?`,
              ],
              evaluation: `The active version ("Rodriguez scored") is direct, energetic, and puts the hero front and center, the doer leads, the action drives, and the sentence has momentum that matches the excitement of a last-minute goal. The passive version ("the winning goal was scored by Rodriguez") is wordier and slower; the action arrives before the actor, draining some of the punch. For sports writing, which thrives on energy and clear agents, active is almost always stronger: it names who did what and moves. But passive isn't wrong, it's a tool with its own jobs. The passive version would actually be the right choice if the writer wanted to emphasize the goal itself rather than the scorer ("The winning goal, scored in the final minute, sealed an impossible comeback"), or if the scorer were unknown or unimportant. The syntax smith's lesson: active and passive aren't right and wrong, they're choices that shift emphasis. Know the default (active, for energy and clarity), and reach for passive on purpose when the receiver of the action matters more than the doer.`,
            },
            {
              id: `c2`,
              title: `Structure changes the emphasis`,
              type: `Sentence structure`,
              description: `A student writes about a runner. Version A: "Although she trained for months, she lost the race." Version B: "Although she lost the race, she trained for months." The two facts are identical. Consider how just rearranging the clauses changes what the sentence is really saying.`,
              questions: [
                `What does each version emphasize, and why?`,
                `Why does the main clause carry more weight than the dependent one?`,
                `How could a writer use this to steer the reader's takeaway?`,
              ],
              evaluation: `Version A emphasizes the loss: the dependent clause ("Although she trained for months") sets up a contrast, and the main clause, "she lost the race," lands as the point, leaving the reader with disappointment. Version B flips it: now "she lost the race" is demoted to the setup, and "she trained for months" becomes the main clause and the takeaway, leaving the reader with her dedication and effort. The main clause carries more weight because, grammatically, it's the independent, complete thought the sentence is built around; the dependent clause is subordinate, literally lesser, supporting rather than starring. So a writer steers the reader's takeaway just by choosing which true fact to make the main clause. Want a story of heartbreak? Make the loss the main clause. Want a story of admirable effort despite the result? Make the training the main clause. This is syntax for effect at its purest: the facts never change, but the meaning, and the feeling the reader walks away with, is shaped entirely by structure. A syntax smith decides the takeaway first, then builds the sentence to deliver it.`,
            },
            {
              id: `c3`,
              title: `Passive voice hiding the actor`,
              type: `Passive / responsibility`,
              description: `After a company's product harms customers, its official statement reads: "Mistakes were made, and the situation is regretted." Every word is grammatically correct. Consider what this careful syntax is quietly doing, and what a sharp reader should notice.`,
              questions: [
                `What is the passive voice accomplishing here?`,
                `What information has quietly disappeared from these sentences?`,
                `How would active voice change the honesty of the statement?`,
              ],
              evaluation: `The passive voice here is doing real, strategic work: "mistakes were made" and "the situation is regretted" sound like accountability while actually dodging it. What's quietly disappeared is the actor, the who. Active voice forces a subject ("We made mistakes," "We regret what we did to customers"), but passive lets the company erase itself from its own admission, so no one is named as responsible and no one is named as actually feeling regret. It's correct grammar deployed to avoid honesty. A sharp reader notices the missing agent and asks the question the syntax is built to suppress: made by whom? regretted by whom? Rewriting in active voice changes everything: "We made serious mistakes that harmed our customers, and we are deeply sorry" names the doer, accepts responsibility, and can't hide. That's exactly why companies and politicians reach for the passive in moments like this, and exactly why understanding syntax is a tool of self-defense as much as self-expression. The syntax smith reads grammar for what it reveals and what it conceals, and won't be fooled by a sentence engineered to make responsibility vanish.`,
            },
            {
              id: `c4`,
              title: `The fragment: bold style or error?`,
              type: `Breaking rules`,
              description: `Two writers use fragments. Writer A's piece is polished and correct throughout, then: "She opened the letter. Read it twice. Silence." Writer B's piece is full of run-ons, comma splices, and confusion, with random fragments scattered throughout. Consider why the same kind of fragment reads so differently.`,
              questions: [
                `Why does Writer A's fragment read as powerful style?`,
                `Why do Writer B's fragments read as mistakes?`,
                `What does this reveal about the rule "master it before you break it"?`,
              ],
              evaluation: `Writer A's fragment ("Read it twice. Silence.") reads as powerful style because everything around it is polished and correct, so the reader trusts the writer knows the rules and is breaking one on purpose, the fragment's clipped incompleteness creates emphasis and a held breath, exactly the tense mood the moment wants. Writer B's identical-looking fragments read as mistakes because they sit amid run-ons, comma splices, and confusion; with no evidence the writer controls grammar, the reader reads every fragment as another error, not a choice. This reveals the heart of "master it before you break it": a rule-break only works when the reader can tell it was intentional, and the only way they can tell is the surrounding command of the conventions. Mastery is what earns the writer the trust that says "they meant to do that." So the path is clear and not optional: learn the rules thoroughly first, write cleanly enough that your control is obvious, and then your deliberate fragments, your short punches, your sentences that start with "But," all read as bold, controlled style. Break the rules before you've earned that trust, and you just look like you don't know them. Skill is the license to bend.`,
            },
            {
              id: `c5`,
              title: `Revising flat into powerful`,
              type: `Syntax in revision`,
              description: `A student's draft reads: "It was a very scary night and there was a storm and the power went out and we were all afraid and we waited for morning." It's grammatically fine but flat. Consider how a syntax smith would revise it using everything in this lesson.`,
              questions: [
                `What's making this sentence flat despite being correct?`,
                `Which syntax tools would you use to revise it?`,
                `How does revising for syntax differ from fixing errors?`,
              ],
              evaluation: `What makes it flat, despite being grammatically fine, is monotonous syntax: it's one long string of equal clauses joined by "and... and... and," so everything gets the same weight, there's no rhythm, no emphasis, and no control over what the reader feels. A syntax smith would revise using the lesson's tools. Vary the sentence structure and length, breaking the run into a mix: maybe a longer setup, then a short punchy sentence or a deliberate fragment for impact. Use end position to land the key idea where it hits hardest. Maybe something like: "The storm came at midnight. The power died. In the dark, we waited for a morning that felt like it would never come." Notice the short sentences creating tension, the varied rhythm, the strong final image placed at the end. Crucially, this is different from fixing errors: the original had no errors at all. Revising for syntax isn't about correctness, it's about effect, reshaping correct sentences so they create the mood, emphasis, and rhythm you want. That's the leap from rule-follower to craftsperson: once the grammar is clean, the real work, choosing how each sentence lands, begins.`,
            },
          ],
          synthesisPrompt: `After all five: take a flat, correct sentence of your own (or "We went to the store and it was crowded and we left") and revise it using syntax tools, vary structure, use end position, maybe a deliberate fragment. Show your before and after, and name what each change does. In 5-6 sentences.`,
          reflectionPrompt: `The lesson says you must master a rule before you can break it for effect. Do you find that true in other areas, music, sport, art, where you have to learn the fundamentals before you can improvise or bend them? What's the relationship between discipline and creativity?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the main idea about grammar in this lesson?`,
              options: [
                `Grammar is a set of rules whose only purpose is to catch mistakes.`,
                `Grammar doesn't matter at all once you can write a full sentence.`,
                `Grammar, used well, is a toolkit for shaping meaning, not just a cage of rules.`,
                `Grammar is only important for poets and professional novelists.`,
              ],
              correctIndex: 2,
              explanation: `The lesson flips the usual view: used well, grammar is a toolkit for shaping meaning, emphasis, and feeling, not just rules to obey. The distractors reduce grammar to error-catching, dismiss it entirely, or restrict it to artists.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does "syntax for effect" mean?`,
              options: [
                `Arranging a sentence not just correctly, but powerfully, on purpose.`,
                `Adding special effects and images to make writing look exciting.`,
                `Using the longest possible sentences to sound impressive.`,
                `Following every grammar rule perfectly with no exceptions ever.`,
              ],
              correctIndex: 0,
              explanation: `Syntax for effect means arranging a sentence not just correctly but powerfully and on purpose, since the same fact written ten ways lands ten ways. The distractors confuse it with visual effects, long sentences, or rigid rule-following.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between active and passive voice?`,
              options: [
                `Active voice is for speaking; passive voice is only for writing.`,
                `In active voice the subject does the action; in passive the action happens to the subject.`,
                `Active voice always uses much longer words, while passive voice only ever uses shorter ones.`,
                `Active voice is always correct; passive voice is always an error.`,
              ],
              correctIndex: 1,
              explanation: `In active voice the subject does the action ("the committee made a mistake"); in passive, the action happens to the subject and the doer can even disappear ("a mistake was made"). The distractors invent splits by medium, word length, or wrongly call passive an error.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How can passive voice be used to "hide responsibility"?`,
              options: [
                `By making a sentence so long no one can finish reading it.`,
                `By using words that are too difficult for the reader to understand.`,
                `By adding so many facts that the main point gets buried.`,
                `By erasing the doer, as in "mistakes were made," so no one is named as responsible.`,
              ],
              correctIndex: 3,
              explanation: `Passive voice can erase the actor, "mistakes were made" quietly drops who made them, a move politicians and companies use to dodge responsibility, and sharp readers notice. The distractors describe length, difficulty, or clutter, not the missing-agent dodge.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `In a complex sentence, which clause carries the most weight?`,
              options: [
                `The main (independent) clause carries the weight; the dependent clause supports it.`,
                `The dependent clause always matters most because it comes first.`,
                `Both of the clauses always carry exactly the same equal weight, no matter how the sentence is built.`,
                `Whichever clause is longer automatically carries the most weight.`,
              ],
              correctIndex: 0,
              explanation: `The main (independent) clause carries the weight and the dependent clause supports it, which is why "Although she was tired, she finished" emphasizes finishing. The distractors misassign weight by position, claim false equality, or tie it to length.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does the lesson say the end of a sentence is special?`,
              options: [
                `Because the end of a sentence is where you put the period.`,
                `Because readers reliably skip right over the entire middle portion of every single sentence.`,
                `It's the position readers remember most, so writers place key ideas there for impact.`,
                `Because grammar rules require the most important word to go last.`,
              ],
              correctIndex: 2,
              explanation: `The end position is the spot readers remember most, so skilled writers place key ideas there for impact. The distractors reduce it to punctuation, invent a skipping habit, or wrongly claim it's a grammar requirement.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `According to the lesson, when does breaking a grammar rule (like using a fragment) read as bold style rather than a mistake?`,
              options: [
                `Whenever the writer feels like ignoring the rules that day.`,
                `When the writer clearly knows the rules, so the reader trusts it was deliberate.`,
                `Only when a teacher gives written permission first.`,
                `Never, because breaking absolutely any grammar rule will always read as a careless error to the reader.`,
              ],
              correctIndex: 1,
              explanation: `A rule-break reads as style when the surrounding writing shows the writer has mastered the conventions, so the reader trusts the break was deliberate, "master it before you break it." The distractors treat it as a whim, a permission slip, or claim breaks are always errors.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How is "revising for syntax" different from "fixing errors"?`,
              options: [
                `They are honestly just exactly the same single thing, simply given two different names for no real reason.`,
                `Revising for syntax just means making sentences as short as possible.`,
                `Fixing errors is for essays; revising syntax is only for poems.`,
                `Fixing errors corrects mistakes; revising syntax reshapes already-correct sentences for better effect.`,
              ],
              correctIndex: 3,
              explanation: `Fixing errors corrects what's wrong; revising for syntax reshapes sentences that are already correct to create better rhythm, emphasis, and mood, the leap from rule-follower to craftsperson. The distractors equate the two, reduce it to shortening, or split it by genre.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: As long as a sentence is grammatically correct, the writer has done all that matters; how the sentence is arranged makes no real difference to the reader.`,
              correctAnswer: false,
              explanation: `False, and this misses the entire point of the lesson. Grammatical correctness is necessary, errors muddle meaning and lose a reader's trust, but it's only the floor, not the ceiling. Two sentences can both be perfectly correct and yet land in completely different ways, because how a sentence is arranged shapes meaning, emphasis, and feeling. Consider just a few of the tools: active versus passive voice changes who the reader sees as responsible ("We made a mistake" versus "mistakes were made", both correct, wildly different in honesty and energy). Rearranging the clauses of a complex sentence flips the emphasis entirely ("Although she trained for months, she lost" leaves you with the loss; "Although she lost, she trained for months" leaves you with her dedication, same facts, opposite takeaway). Placing a key idea at the end of a sentence makes it hit harder, because the end is the position readers remember most. Varying sentence length and structure, or dropping in a deliberate fragment after long sentences, creates rhythm and impact that a flat string of equal clauses can never achieve. The classic flat example, "it was scary and there was a storm and the power went out and we waited", is grammatically fine and emotionally dead. A syntax smith knows correctness is just where the real work begins: once the grammar is clean, you still get to decide how every sentence lands, and that decision makes an enormous difference to the reader.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A government report says: "Errors occurred in the handling of funds, and oversight was found to be lacking." It's flawless grammar. A classmate says "well, it's correct, so it's good writing." Using the lesson, what should you point out?`,
              options: [
                `Nothing; flawless grammar is the only thing that makes writing good.`,
                `That the report would be better if every sentence were simply much longer.`,
                `That correctness isn't the whole story: this is passive voice engineered to hide responsibility, "errors occurred" and "oversight was found lacking" carefully erase WHO made the errors and WHO failed to oversee, so the flawless grammar is actually doing the dishonest work of making the responsible people vanish, which a sharp reader should catch and an active-voice rewrite would expose.`,
                `That the report is bad simply because government writing is always boring.`,
              ],
              correctIndex: 2,
              explanation: `This applies the lesson's sharpest insight: correctness isn't the whole story. The report uses flawless passive voice ("errors occurred," "oversight was found to be lacking") to erase the actors, hiding who made the errors and who failed to oversee. The grammar is doing dishonest work, making responsibility vanish, exactly the dodge the lesson teaches you to catch; an active-voice rewrite would force names and expose it. The distractors equate correctness with quality, suggest length, or dismiss it as merely boring.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-tool`, category: `Rules as tools`, prompt: `This lesson reframes grammar from a cage into a toolkit. Has anything else in your life flipped that way, something you saw as restrictive rules until you realized they were actually tools? What changed when you saw it differently?` },
            { id: `reflect-passive`, category: `Spotting the dodge`, prompt: `Passive voice can hide who's responsible ("mistakes were made"). Where have you noticed this in the real world, in an apology, a news story, a statement from a company or leader? What were they trying not to say?` },
            { id: `reflect-discipline`, category: `Master then break`, prompt: `You can only break a rule well once you've mastered it. Think of a skill you have, music, sport, art, cooking. How did learning the fundamentals first eventually give you the freedom to improvise or bend them? Why does discipline come before creativity?` },
            { id: `reflect-heritage`, category: `Two languages, two syntaxes`, prompt: `Caro, Spanish and English arrange sentences differently, word order, emphasis, rhythm. What can you do or feel in one language's syntax that's harder in the other? How does moving between them shape the way you express yourself?` },
            { id: `reflect-emphasis`, category: `What you make matter`, prompt: `Structure decides what a sentence emphasizes, the same facts can stress totally different things. Think about a story from your own life. Depending on which part you put in the "main clause," does it become a story of struggle, or triumph, or something else? What do you choose to emphasize?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone argues "all this 'syntax for effect' is overthinking, just write clearly and stop fussing over where the comma goes." State that view as strongly as you can. Where does it have a real point, and where does the lesson show that arrangement genuinely matters?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Once you see syntax as a set of choices, you can shape every sentence on purpose, and catch others doing it too. Two paths.`,
          familyActivity: {
            title: `The Ten Ways Challenge`,
            duration: `One sitting`,
            description: `Prove to yourselves that arrangement changes everything. As a family, pick one simple true fact, something plain like "the cat knocked over the vase" or "we missed the bus." Then challenge everyone to write or say that same fact as many different ways as you can, at least five or six, each with a different feel: a dramatic version with short punchy sentences, a version in passive voice that hides who's responsible ("the vase was knocked over", by whom?), a version that buries it in a long flowing sentence, a version with a deliberate fragment for impact, a version that puts the most important word at the very end. Read each aloud and talk about how it lands differently, even though the fact never changes. For a second round, become "passive-voice detectives": over the next few days, hunt together for real examples of passive voice hiding responsibility, in the news, in ads, in apologies ("mistakes were made," "your call is important to us"), and rewrite them in honest active voice to expose who's actually doing what. The goal is to feel, as a family, the core truth of this lesson: that grammar isn't a boring rulebook but a set of powerful choices, and that whoever controls the syntax controls how the reader feels, and can spot when someone else is using it to dodge.`,
          },
          projectOption: {
            title: `The Syntax Surgeon, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a surgeon of sentences. Week 1, diagnose and operate on your own writing: take a piece you've already written (an old essay, a story, anything). Don't fix errors, hunt for flat, correct sentences that could land harder. For each one you find, perform "surgery": rewrite it using the lesson's tools, switch a weak passive to active (or vice versa, on purpose), rearrange a complex sentence to change the emphasis, move the key idea to the end position, break a run of long sentences with a short punch or a deliberate fragment. Keep a before-and-after log, and for each, write one line naming what the change does. Week 2, study the masters: find three sentences from writing you admire (books, speeches, songs, great essays) that hit you hard, and reverse-engineer them, what syntax tool is at work? A deliberate fragment? Parallel repetition? A killer word saved for the end? Then write three original sentences of your own that deliberately use those same techniques. Finish with a short reflection on what you now notice about sentences that you didn't before. You'll come away able to control how every sentence you write lands, and to read other people's sentences, including the ones designed to manipulate or dodge, with a surgeon's clear eye.`,
            offerToParent: `Parent: opt your child into the Syntax Surgeon project. Deliberately revising correct-but-flat sentences for effect, controlling active/passive voice, structure, emphasis, and rhythm, develops exactly the "syntax for effect" goals in the language standards, far beyond mere error-correction. Reverse-engineering admired writers' sentences builds a powerful analytic ear, and learning to spot passive voice that hides responsibility is genuine media literacy and self-defense. It's rigorous, CCSS-aligned work that makes your child a more powerful writer and a sharper, harder-to-fool reader.`,
          },
          identityQuestion: `If you become someone who can shape every sentence on purpose, control emphasis, rhythm, and honesty at the level of the words themselves, and catch when someone else's grammar is quietly dodging the truth, what kind of writer and reader does that make you, in a world full of sentences engineered to persuade and conceal, that someone who thinks grammar is just rules to obey can never quite become?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who shapes every sentence on purpose, not just correctly.`,
            `A reader who spots passive voice hiding the truth.`,
            `Someone who knows the rules well enough to break them with intent.`,
          ],
          saveKey: `identity_responses_ela_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteen done, and you've become a syntax smith. You learned to flip the whole idea of grammar: it isn't a cage of rules waiting to catch you, it's a toolkit for shaping meaning, because the same fact written ten ways lands ten ways. You learned the power tools. Active versus passive voice, where active is direct and names the doer, while passive can quietly hide responsibility, a dodge you can now spot in any apology or news story. Sentence structure, where the main clause carries the weight and the end position lands hardest, so just rearranging clauses can flip a sentence's whole meaning. And the deliberate breaking of rules, fragments, short punches, parallel repetition, which reads as bold style only once you've mastered the conventions you're bending, because mastery is what earns the reader's trust that you meant it. Most of all, you learned that revising for syntax isn't fixing errors; it's the craftsperson's work that begins once the grammar is already clean, reshaping correct sentences to create exactly the rhythm and emphasis you want. Next: we put all your writing skills together for the work of polishing, editing and revision, the difference between a draft and a finished piece. Onward, {name}. — Quill`,
          badge: `syntax-smith`,
          badgeName: `Syntax Smith`,
          xpEarned: 75,
          competencies: [
            `Reframes grammar as a toolkit for shaping meaning, not merely rules to obey`,
            `Controls active and passive voice for clarity, emphasis, and honesty`,
            `Recognizes passive voice used to hide responsibility, in others' writing and their own`,
            `Uses sentence structure (main vs. dependent clause, end position) to control emphasis`,
            `Breaks rules deliberately (fragments, parallelism, short punches) for effect after mastering them`,
            `Distinguishes revising for syntax (effect) from fixing errors (correctness)`,
            `Reads sentences critically for what their construction reveals and conceals`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Editing and Revision`,
            hook: `The difference between a draft and a finished piece, and how real writers get there. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default ELA_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = ELA_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz}`);
}
