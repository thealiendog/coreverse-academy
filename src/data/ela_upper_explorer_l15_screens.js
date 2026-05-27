// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L15 — Grammar: Complex Sentences and Subordinate Clauses
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS L.4.1 / L.5.1 — Demonstrate command of conventions of grammar
//            CCSS L.4.3 / L.5.3 — Use knowledge of language and conventions
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — independent vs subordinate clauses, subordinating conjunctions,
//        comma placement, why sentence variety matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-15`,
      title: `Grammar: Complex Sentences and Subordinate Clauses`,
      duration: 18,
      xpReward: 75,
      badge: `sentence-architect`,
      badgeName: `Sentence Architect`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. A whole essay made of short sentences feels choppy. A whole essay made of long sentences feels exhausting. The best writing mixes both, using a tool called the COMPLEX SENTENCE. Today you'll learn what independent and subordinate clauses are, how to glue them together with subordinating conjunctions, where the commas go, and why varying sentence types makes your writing way better. Let's go.`,
          headline: `Complex Sentences`,
          subtitle: `How to combine ideas into stronger, more varied sentences`,
          visual: `/ue-assets/ela/l15-welcome.webp`,
        },

        // ── SECTION 1 — INDEPENDENT VS SUBORDINATE CLAUSES ────────────────────
        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Kinds of Clauses`,
          paragraphs: [
            `A clause is a group of words with a subject and a verb. There are two main kinds. An INDEPENDENT CLAUSE can stand alone as its own sentence: "I went to the store." Complete thought. Makes sense by itself. A SUBORDINATE CLAUSE (also called a dependent clause) can't stand alone: "because I needed milk." It has a subject and verb, but it leaves you hanging. You need more.`,
            `Both kinds exist for a reason. Independent clauses carry the main idea. Subordinate clauses add EXTRA information: why, when, where, who, even though. Glue them together and you get a COMPLEX SENTENCE: "I went to the store because I needed milk." One independent + one subordinate = complex sentence.`,
          ],
          image: `/ue-assets/ela/l15-s1-clauses.webp`,
          imageCaption: `Independent: stands alone. Subordinate: leaves you hanging.`,
          vocab: [
            { word: `independent clause`,
              definition: `A group of words with a subject and verb that can stand alone as a complete sentence.`,
              audioPrompt: `An independent clause is a complete thought that can stand alone, {name}. Subject. Verb. Makes sense by itself. "I read a book." That's an independent clause. It's also a complete sentence. Every sentence needs at least one independent clause. Without one, you've got a fragment, which is grammar for "incomplete thought.".` },
            { word: `dependent clause`,
              definition: `Another name for a subordinate clause — a group of words with a subject and verb that cannot stand alone. It depends on the main clause to make sense.`,
              audioPrompt: `A dependent clause is the same thing as a subordinate clause, {name}. It has a subject and verb, but it can't stand alone as a sentence. "Because I was tired." "Although it rained." Both have subjects and verbs. Both leave you hanging. They depend on an independent clause to complete the thought. That's why they're called dependent.` },
          ],
        },

        // ── SECTION 2 — SUBORDINATING CONJUNCTIONS ────────────────────────────
        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Subordinating Conjunctions: The Glue`,
          paragraphs: [
            `Subordinate clauses always start with a SUBORDINATING CONJUNCTION. Words like BECAUSE, ALTHOUGH, IF, WHEN, WHILE, SINCE, UNLESS, AFTER, BEFORE, EVEN THOUGH. These words are the glue. They take a sentence that could stand alone ("I needed milk") and turn it into a subordinate clause that depends on something else ("because I needed milk").`,
            `Each subordinating conjunction shows a specific relationship. BECAUSE shows cause. ALTHOUGH shows contrast. WHEN shows time. IF shows condition. Pick the right one and your sentence shows exactly how two ideas connect. Pick the wrong one and your meaning gets fuzzy. Memorize a handful of the most common ones, because they're the difference between flat writing and writing with real precision.`,
          ],
          image: `/ue-assets/ela/l15-s2-conjunctions.webp`,
          imageCaption: `Because, although, when, if, since, while. The glue words.`,
          vocab: [
            { word: `subordinating conjunction`,
              definition: `A word like because, although, when, or if that begins a subordinate clause and shows how it relates to the main clause.`,
              audioPrompt: `A subordinating conjunction is the word that starts a subordinate clause, {name}. Because. Although. When. If. While. Since. Unless. Each one shows a specific relationship between ideas. "Because" shows cause. "Although" shows contrast. "When" shows time. "If" shows condition. Picking the right one is how you make your meaning precise.` },
            { word: `conjunction`,
              definition: `A word that connects words, phrases, or clauses. Subordinating conjunctions (because, although, when) connect a dependent clause to a main clause.`,
              audioPrompt: `A conjunction is a connecting word, {name}. "And," "but," and "or" are coordinating conjunctions that join equal parts. "Because," "although," and "when" are subordinating conjunctions that connect a dependent clause to a main clause. Knowing the difference between them is what separates simple sentences from complex ones.` },
          ],
        },

        // ── SECTION 3 — COMMA PLACEMENT ───────────────────────────────────────
        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where the Comma Goes`,
          paragraphs: [
            `One simple rule covers most complex sentences. If the SUBORDINATE clause comes FIRST, you need a comma between the two clauses. "Because I needed milk, I went to the store." If the INDEPENDENT clause comes first, you usually don't need a comma. "I went to the store because I needed milk." First-position subordinate gets a comma. Second-position subordinate usually doesn't.`,
            `Why? When the subordinate clause comes first, the comma marks the moment the main idea finally arrives. The reader has been waiting through the introductory information, and the comma signals "here comes the point." When the main idea comes first, no comma is needed because the reader already has the main idea before the extra information arrives.`,
          ],
          image: `/ue-assets/ela/l15-s3-comma-placement.webp`,
          imageCaption: `Subordinate clause first = needs comma. Independent clause first = usually doesn't.`,
          vocab: [
            { word: `subordinate clause`,
              definition: `A group of words with a subject and verb that can't stand alone. It depends on an independent clause to make sense.`,
              audioPrompt: `A subordinate clause has a subject and verb but can't stand alone, {name}. "Because I was tired." It leaves you hanging. The sentence needs more. Subordinate clauses always start with a subordinating conjunction like because, although, when, or if. When they come at the start of a sentence, they need a comma. When they come at the end, they usually don't.` },
            { word: `comma`,
              definition: `A punctuation mark (,) used to separate parts of a sentence. In complex sentences, a comma follows a subordinate clause that comes before the main clause.`,
              audioPrompt: `A comma is the punctuation mark that separates parts of a sentence, {name}. In complex sentences, the rule is simple: if the subordinate clause comes first, you need a comma after it. "Because I was tired, I went to bed." The comma signals that the main idea is about to arrive. If the main clause comes first, you usually skip the comma.` },
          ],
        },

        // ── SECTION 4 — WHY SENTENCE VARIETY MATTERS ──────────────────────────
        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Sentence Variety Matters`,
          paragraphs: [
            `Read this: "I went to school. I was tired. I sat down. The teacher started. I tried to focus." Five short sentences. Choppy. Boring. The same rhythm over and over. Now read this: "I went to school, even though I was exhausted, and when the teacher started, I tried hard to focus." One complex sentence, way more interesting. The information is the same. The reading experience is completely different.`,
            `Strong writing varies sentence length and type. Some simple sentences for punch and clarity. Some complex sentences for depth and connection. The mix is what creates RHYTHM. When every sentence is the same length, the writing feels mechanical. When sentences vary, the writing flows. Complex sentences are one of your most powerful tools for variety.`,
          ],
          image: `/ue-assets/ela/l15-s4-variety.webp`,
          imageCaption: `Mix short and long sentences. Rhythm is everything.`,
          vocab: [
            { word: `complex sentence`,
              definition: `A sentence made of one independent clause plus at least one subordinate clause, joined by a subordinating conjunction.`,
              audioPrompt: `A complex sentence has one independent clause plus at least one subordinate clause, {name}. "I read the book because I had a test." Independent clause plus a "because" clause equals complex sentence. Complex sentences add depth and show how ideas connect. Mixed with simple sentences, they're what makes writing flow.` },
            { word: `sentence variety`,
              definition: `The deliberate use of different sentence lengths and types (simple, complex) to create rhythm and keep writing engaging.`,
              audioPrompt: `Sentence variety is mixing short and long sentences on purpose, {name}. When every sentence is the same length, writing feels mechanical. When you mix simple sentences for punch with complex sentences for depth, the writing flows. Complex sentences are one of your most powerful tools for creating that variety. Strong writers think about rhythm, not just grammar.` },
          ],
        },

        // ── INTERACTIVE GAME — Sentence Investigation ─────────────────────────
        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four sentences. For each one, identify whether it's a SIMPLE SENTENCE (one independent clause), a COMPLEX SENTENCE (independent + subordinate), or a FRAGMENT (incomplete, missing something).\n\nOne is sneakier than it looks.`,
          options: [
            { id: `simple`,    label: `Simple Sentence`,   color: `#60A5FA`, description: `One independent clause. Complete thought, no subordinate clause.` },
            { id: `complex`,   label: `Complex Sentence`,  color: `#34D399`, description: `One independent + at least one subordinate clause, joined by a subordinating conjunction.` },
            { id: `fragment`,  label: `Fragment`,          color: `#F87171`, description: `Missing something. Can't stand alone as a complete thought.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Sentence #1`,
              clues: [
                { text: `"The dog barked loudly all night."` },
                { text: `Subject: dog. Verb: barked. Complete thought.` },
                { text: `No subordinating conjunction anywhere.` },
              ],
              correctAnswer: `simple`,
              realWorldExample: `Standard simple sentence.`,
              explanation: `One independent clause. Subject (dog) and verb (barked). Stands alone fine. No subordinate clause attached. Simple sentence.`,
            },
            {
              id: `case-2`,
              caseTitle: `Sentence #2`,
              clues: [
                { text: `"Although the rain had stopped, the streets were still wet."` },
                { text: `"Although the rain had stopped" can't stand alone.` },
                { text: `"The streets were still wet" can stand alone.` },
              ],
              correctAnswer: `complex`,
              realWorldExample: `Classic complex sentence with subordinate clause first.`,
              explanation: `One subordinate clause ("Although the rain had stopped") plus one independent clause ("the streets were still wet"). Joined by the subordinating conjunction "although." Subordinate clause first, so it needs a comma. That's a complex sentence done right.`,
            },
            {
              id: `case-3`,
              caseTitle: `Sentence #3`,
              clues: [
                { text: `"Because I was hungry."` },
                { text: `Has a subject (I) and verb (was), but starts with "because."` },
                { text: `Leaves the reader expecting more.` },
              ],
              correctAnswer: `fragment`,
              realWorldExample: `Classic subordinate-clause-as-sentence fragment.`,
              explanation: `Starts with "because," which makes the whole thing a subordinate clause. It can't stand alone as a sentence because it leaves you hanging: hungry, so what? "Because I was hungry, I made a sandwich" would be complete. By itself, it's a fragment.`,
            },
            {
              id: `case-4`,
              caseTitle: `Sentence #4 — The Tricky One`,
              clues: [
                { text: `"The sun set, and the stars came out."` },
                { text: `Two independent clauses joined by "and."` },
                { text: `Both halves can stand alone as their own sentences.` },
              ],
              correctAnswer: `simple`,
              realWorldExample: `Tricky one: two independent clauses with no subordinate clause = NOT complex.`,
              explanation: `Tricky because it has two clauses joined by a conjunction, which looks complex. But it isn't. Both clauses are INDEPENDENT, joined by "and" (a COORDINATING conjunction, not a subordinating one). When two independent clauses join, it's called a COMPOUND sentence, not a complex one. For this lesson, the closest match is "simple" because there's no subordinate clause. The trick: a sentence with two clauses isn't automatically complex. Complex requires a SUBORDINATE clause. If both parts could stand alone, you've got a compound sentence, not a complex one.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is a SUBORDINATE clause?`,
              options: [
                `A group of words with no subject or verb`,
                `A group of words with a subject and verb that can't stand alone as a sentence`,
                `Another name for an independent clause`,
                `A type of conjunction`,
              ],
              correctIndex: 1,
              explanation: `Subordinate clauses have subjects and verbs but can't stand alone. They start with words like because, although, when, if. They need an independent clause to lean on.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `Which word is a SUBORDINATING CONJUNCTION?`,
              options: [
                `"and"`,
                `"although"`,
                `"or"`,
                `"but"`,
              ],
              correctIndex: 1,
              explanation: `"Although" starts subordinate clauses. "And," "or," and "but" are COORDINATING conjunctions, used to join independent clauses (compound sentences), not to create subordinate clauses.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `Where should the COMMA go in this complex sentence: "I went to bed early because I was tired"?`,
              options: [
                `After "bed"`,
                `Before "because"`,
                `Usually no comma is needed when the subordinate clause comes second`,
                `After "I"`,
              ],
              correctIndex: 2,
              explanation: `When the subordinate clause comes SECOND, no comma is needed. Comma rule: subordinate clause first = needs comma. Independent clause first = usually no comma.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `Which is a COMPLEX SENTENCE?`,
              options: [
                `"I went to school."`,
                `"The dog barked, and the cat ran."`,
                `"Although it was raining, I went outside anyway."`,
                `"Because I was tired."`,
              ],
              correctIndex: 2,
              explanation: `A complex sentence has one independent clause plus one subordinate clause. The first is simple. The second is compound (two independent clauses). The fourth is a fragment. Only the third has the complex structure.` },

            { id: `l15-q5`, format: `true-false`,
              question: `True or false: "Because I was tired." is a complete sentence.`,
              correctAnswer: false,
              explanation: `False. It starts with "because," which makes the whole thing a subordinate clause. It can't stand alone. It's a fragment.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why is SENTENCE VARIETY important?`,
              options: [
                `Long sentences are always better`,
                `Mixing simple and complex sentences creates rhythm and keeps writing engaging`,
                `Short sentences are always better`,
                `Variety doesn't actually matter`,
              ],
              correctIndex: 1,
              explanation: `Same-length sentences over and over make writing feel mechanical. Mixing simple and complex sentences creates rhythm. The reader stays engaged because the writing flows.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `In "When the sun rose, the birds started singing," what's the SUBORDINATING CONJUNCTION?`,
              options: [
                `"the"`,
                `"when"`,
                `"sun"`,
                `"and"`,
              ],
              correctIndex: 1,
              explanation: `"When" is the subordinating conjunction. It starts the subordinate clause "When the sun rose" and shows the time relationship to the main clause.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `"The dog barked, and the cat ran." This sentence is:`,
              options: [
                `A complex sentence`,
                `A compound sentence (two independent clauses joined by a coordinating conjunction), not a complex one`,
                `A fragment`,
                `A subordinate clause`,
              ],
              correctIndex: 1,
              explanation: `Both halves are independent clauses. "And" joins them. That makes it a COMPOUND sentence, not a complex one. Complex requires a subordinate clause. Subtle but important distinction.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Why do you think writers naturally write in short sentences when they're nervous or rushed? What does that do to the rhythm?` },
            { id: `r2`, text: `Pick a subordinating conjunction (because, although, when, if, while). What kind of sentence would you most likely use it in?` },
            { id: `r3`, text: `Re-read something you wrote recently. Are most of your sentences the same length? What could you change?` },
            { id: `r4`, text: `Why might a writer choose "although" over "but"? What does the difference reveal?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Complex sentences aren't just a school thing. Every piece of professional writing uses them. News articles. Legal contracts. Scientific papers. Speeches. The ability to combine ideas smoothly with subordinate clauses is a major part of what separates beginner writing from professional writing. Once you start using complex sentences naturally, your writing automatically sounds more mature and precise.`,
          familyAdventure: `Sentence Detective Dinner. As a family, pick any article, book, or even a YouTube transcript. Take turns finding one complex sentence each. Read it out loud. Identify the subordinate clause and the subordinating conjunction. Try rewriting it as two simple sentences. Compare which version sounds better and why.`,
          creativePrompt: {
            intro: `Take any topic you care about. Write a short paragraph using both simple and complex sentences.`,
            floor: `Write at least 5 sentences. Include at least one complex sentence (independent + subordinate). Underline or label the subordinate clause.`,
            stretch: `Write 8 to 10 sentences using a mix of simple and complex sentences. Use at least three different subordinating conjunctions (because, although, when, if, while, since, etc.).`,
            open: `Write a full paragraph that demonstrates strong sentence variety. Use at least four different subordinating conjunctions. Read it aloud and adjust the rhythm.`,
            frames: [
              `My topic is ___.`,
              `A simple sentence about it: ___.`,
              `A complex sentence starting with "because": ___.`,
              `A complex sentence starting with "although": ___.`,
              `A complex sentence starting with "when": ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot independent and subordinate clauses, use subordinating conjunctions to glue ideas together, place commas correctly, and vary sentence length to give your writing real rhythm. Next lesson: verb tense. How to keep your time references consistent and when to deliberately shift tense for effect. See you there. — Quill.`,
          badge: `sentence-architect`,
          badgeName: `Sentence Architect`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
