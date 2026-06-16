// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L15 — Archetypes and the Collective Unconscious
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Jungian Psychology, Primary Source Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ANNOTATE (Jung's actual writing on archetypes)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l15-v1";

const INNERWORLD_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-15`,
      title: `Archetypes and the Collective Unconscious`,
      duration: 35,
      xpReward: 75,
      badge: `archetype-reader`,
      badgeName: `Archetype Reader`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, we've met Jung twice already in this band: when we looked at the shadow self in Lesson 3, and when we looked at the ego in Lesson 12. Today we go deeper into Jung's most ambitious claim. He didn't just say you have a personal unconscious full of forgotten memories. He said beneath that lies something shared across all humans: a collective unconscious full of patterns called archetypes. The hero. The wise old one. The trickster. The great mother. These show up in myths, dreams, stories, and inner life across every culture. Whether you accept Jung's framework or not, his claim is one of the most influential ideas in modern psychology. Today you'll read Jung directly, in his own words, and analyze them closely.`,
          headline: `Archetypes and the Collective Unconscious`,
          subtitle: `Jung's most ambitious claim, in his own words.`,
          visual: `/voyager-assets/inner-world/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Jung Was Trying To Explain`,
          paragraphs: [
            `Jung spent decades working with patients and reading the world's mythology, religious texts, and folklore. He noticed something strange. Patients who had never read any of this material kept producing dream images, fantasies, and symbols that closely matched figures and stories from cultures they had no contact with. A patient from rural Switzerland would dream a symbol nearly identical to one in ancient Egyptian texts. A child would describe an imaginary figure that mirrored a Hindu deity she had never heard of.`,
            `Jung argued that this couldn't be coincidence. The patterns were too specific, too widespread, and too consistent across cultures and individuals. His proposed explanation: there's a layer of mind we all share, beyond personal experience, that contains universal patterns of being human. He called this layer the collective unconscious. The patterns within it he called archetypes.`,
            `An archetype isn't a specific image or character. It's more like a template or organizing pattern. The "hero" archetype isn't a particular person; it's the pattern of someone who leaves the familiar, faces a trial, and returns transformed. This pattern shows up in Hindu mythology (the Bhagavad Gita), Greek mythology (Odysseus), Christian narrative (the gospel arc), Norse legend (Sigurd), modern stories (Luke Skywalker, Frodo Baggins, Harry Potter), and in your own dreams when something inside you needs to change. Same pattern, infinite specific expressions.`,
          ],
          image: `/voyager-assets/inner-world/l15-s1-jung.webp`,
          imageCaption: `Jung noticed: patients without exposure kept producing universal patterns.`,
          vocab: [
            {
              word: `collective unconscious`,
              definition: `Jung's term for a layer of mind he proposed is shared across all humans, beneath personal experience, containing universal patterns called archetypes.`,
              audioPrompt: `The collective unconscious is Jung's term for a layer of mind he proposed is shared across all humans, {name}. It lies beneath personal experience. It contains universal patterns called archetypes that show up in dreams, myths, art, and inner experience across cultures. Whether the collective unconscious literally exists as Jung described it, or whether the patterns are explained by shared brain architecture and cultural transmission, is still debated. But the observation that certain patterns recur across very different cultures is real. The question is what to make of it.`,
            },
            {
              word: `personal unconscious`,
              definition: `In Jungian psychology, the layer of the psyche containing forgotten or repressed material from personal experience. Distinguished from the collective unconscious, which is not individually acquired.`,
              audioPrompt: `The personal unconscious, in Jungian psychology, is the layer of the psyche containing forgotten or repressed material from personal experience, {name}. Jung distinguished this from his more ambitious concept of the collective unconscious. The personal unconscious is filled with contents that have at some point been in consciousness but disappeared through forgetting or repression. It is specific to each individual. The collective unconscious, by contrast, was never in consciousness at all and is not individually acquired. It is claimed to be shared across all humans. This distinction is essential for reading Jung accurately.`,
            },
            {
              word: `cross-cultural pattern`,
              definition: `A symbolic, narrative, or psychological pattern that recurs across multiple unconnected cultures. The observation is well-documented; the explanation for why it recurs is what is debated.`,
              audioPrompt: `A cross-cultural pattern is a symbolic, narrative, or psychological pattern that recurs across multiple unconnected cultures, {name}. Jung spent decades reading mythology, religious texts, and folklore. He noticed that patients who had never encountered this material kept producing dream images and symbols nearly identical to figures from cultures they had no contact with. A patient from rural Switzerland would dream a symbol matching one found in ancient Egyptian texts. Jung argued this could not be coincidence. The patterns were too specific, too widespread, and too consistent. His proposed explanation was the collective unconscious.`,
            }
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common Archetypes And What They Express`,
          paragraphs: [
            `Jung and the Jungians who came after him mapped many archetypes. The hero (one who undertakes a trial and returns transformed) appears in nearly every culture's mythology. The shadow (the rejected and hidden parts of the self) we explored in Lesson 3. The wise old one (mentor, teacher, source of guidance) shows up as Yoda, Gandalf, Merlin, and countless real elders. The trickster (chaos-bringer, boundary-breaker, fool with wisdom) appears as Loki, Coyote, Hermes, and many religious clowns.`,
            `The great mother (nurturing, fierce, devouring all at once) appears as Demeter in Greek mythology, the Virgin Mary in Christian tradition, Kali in Hindu thought, and as inner figures that show up in therapy when someone is working through their relationship with care, dependence, and origin. The animus and anima (the inner figures of the opposite gender that everyone carries) appear in dreams and inner experience. The child (innocent potential, vulnerability, possibility) appears at the start of countless mythic journeys and in inner imagery during major life transitions.`,
            `Jungians don't say these archetypes ARE you. They say archetypes activate in you under certain conditions, shaping how you experience yourself and others. When you fall in love, you may be projecting an anima or animus figure. When you idealize a teacher, you may be activating the wise old one archetype. When you reject someone, you may be projecting the shadow. Recognizing when an archetype is active gives you information about what's happening psychologically that the personal level alone doesn't reveal.`,
          ],
          image: `/voyager-assets/inner-world/l15-s2-archetypes.webp`,
          imageCaption: `Universal patterns. Specific expressions in every life and every culture.`,
          vocab: [
            {
              word: `archetype`,
              definition: `In Jungian psychology, a universal organizing pattern that shows up in myths, dreams, art, and inner experience across cultures. Not a specific image but a template that takes many forms.`,
              audioPrompt: `An archetype, in Jungian psychology, is a universal organizing pattern, {name}. Not a specific image or character, but a template. The hero archetype isn't a particular hero. It's the pattern of someone who leaves the familiar, faces a trial, and returns transformed. This pattern shows up in Greek mythology, Hindu epics, Christian narrative, modern movies, and personal dreams. Same template, different specific expressions. Jung claimed these archetypes are part of a shared layer of mind across humans. Whether you accept that specific claim or not, the patterns themselves are real and recurring.`,
            },
            {
              word: `anima and animus`,
              definition: `In Jungian psychology, the inner figures of the opposite gender that everyone carries in the unconscious. Associated with projection in relationships and with inner experience during major life transitions.`,
              audioPrompt: `The anima and animus are inner figures of the opposite gender that Jungians say everyone carries in the unconscious, {name}. They appear in dreams and inner experience. When you fall in love, Jungians propose you may be projecting an anima or animus figure onto the other person. This helps explain why romantic love can feel so charged and why it sometimes involves seeing qualities in the other person that they themselves do not recognize. Recognizing when an anima or animus projection is active can add information about what is happening psychologically that the personal level alone does not reveal.`,
            },
            {
              word: `trickster`,
              definition: `A Jungian archetype characterized by chaos, boundary-breaking, and the delivery of wisdom through disruption. Appears across cultures as figures like Loki, Coyote, and Hermes.`,
              audioPrompt: `The trickster is a Jungian archetype characterized by chaos, boundary-breaking, and the delivery of wisdom through disruption, {name}. It appears across cultures as Loki in Norse mythology, Coyote in Native American traditions, and Hermes in Greek mythology. The trickster does not follow rules. It upends established order and reveals truths that more respectable figures cannot. Jungians say the trickster archetype activates in people and situations where established patterns need to be disrupted. Recognizing the trickster in a situation or in yourself is one way archetypal thinking adds information the personal level alone does not provide.`,
            }
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Modern Evidence: Mixed Picture`,
          paragraphs: [
            `How does Jung's claim hold up under modern scrutiny? The picture is mixed. The basic observation, that certain narrative and symbolic patterns recur across cultures, is well-documented. Joseph Campbell's work on the hero's journey in The Hero with a Thousand Faces traced this pattern across hundreds of myths. Comparative mythologists, folklorists, and anthropologists have confirmed that many archetypal patterns do show up cross-culturally with striking consistency.`,
            `What's more contested is Jung's specific explanation. Does the recurrence require a literal collective unconscious as a separate layer of mind? Or can the patterns be explained by shared brain architecture (humans everywhere develop similar minds with similar developmental challenges), shared developmental experiences (every human goes through being a child, separating from parents, facing mortality), and cultural transmission (stories spread, adapt, recombine)? Modern cognitive science generally favors these more mundane explanations over Jung's literal collective unconscious.`,
            `That said, archetypal psychology remains genuinely useful as a framework even without Jung's specific metaphysics. Therapists trained in Jungian and post-Jungian approaches still use archetypal thinking with clinical success. Story analysts use it to understand why certain narratives land powerfully across audiences. Recognizing an archetype activating in your own life can be psychologically illuminating even if you don't think of it as drawing from a literal shared unconscious. The patterns are real. The mechanism is debated. Both can be true at once.`,
          ],
          image: `/voyager-assets/inner-world/l15-s3-mixed.webp`,
          imageCaption: `Patterns: well-documented. Mechanism: contested. Both true.`,
          vocab: [
            {
              word: `hero's journey`,
              definition: `Joseph Campbell's mapped pattern (departure, trial, return) found in mythology across cultures. Famous example of an archetypal pattern with strong cross-cultural evidence.`,
              audioPrompt: `The hero's journey is a pattern mapped by Joseph Campbell in his 1949 book The Hero with a Thousand Faces, {name}. The pattern: someone leaves the familiar, crosses a threshold into the unknown, faces trials, encounters helpers and obstacles, has a transformative experience, and returns to the original world changed. Campbell traced this pattern through hundreds of myths from cultures around the world. It is one of the strongest cases for genuine cross-cultural pattern recurrence. George Lucas famously based the structure of Star Wars on Campbell's work. The pattern is well-documented; the deeper question of WHY it recurs is what's debated.`,
            },
            {
              word: `cultural transmission`,
              definition: `The spread and adaptation of stories, symbols, and patterns between people and across generations. One of the mainstream cognitive-science alternatives to the literal Jungian collective unconscious for explaining cross-cultural patterns.`,
              audioPrompt: `Cultural transmission is the spread and adaptation of stories, symbols, and patterns between people and across generations, {name}. It is one of the mainstream cognitive science alternatives to the literal Jungian collective unconscious for explaining why patterns recur across cultures. Stories spread across trade routes, migrations, and modern media. They adapt to local contexts while maintaining recognizable underlying structures. Modern cognitive science generally favors cultural transmission combined with shared brain architecture over a literal shared mind layer. The patterns are real. The debate is about the mechanism.`,
            },
            {
              word: `shared brain architecture`,
              definition: `The common neurological and developmental structures humans have by virtue of being the same species. Proposed as an alternative explanation for cross-cultural pattern recurrence without requiring a literal collective unconscious.`,
              audioPrompt: `Shared brain architecture refers to the common neurological and developmental structures humans have by virtue of being the same species, {name}. It is one of the mainstream cognitive science alternatives to the Jungian collective unconscious. Humans everywhere develop similar minds with similar developmental challenges. Every human goes through being a child, separating from parents, forming identity, and facing mortality. These shared challenges produce similar psychological patterns across cultures without requiring a separate shared mind layer. Whether this fully accounts for everything Jung observed remains genuinely debated.`,
            }
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Using Archetypes Without Buying The Whole Framework`,
          paragraphs: [
            `Here is the practical move. You don't have to commit to Jung's full metaphysical framework to use archetypal thinking productively. Whether the collective unconscious literally exists or whether the patterns come from shared brain architecture plus cultural transmission, the patterns themselves are real. You can notice when an archetypal pattern is active in your own life and use that as information.`,
            `When you find yourself idealizing someone (a teacher, a coach, an older mentor), notice the wise old one archetype might be activating. The idealization may be telling you something about what you need rather than something about that person. When you feel intense charm or repulsion toward someone, the shadow may be projecting. When you're at a moment of major life transition (new school, new role, parents going through change), the hero's journey pattern may be active and the disorientation you feel is part of the pattern.`,
            `Archetypal thinking offers what philosophers call a hermeneutic, a way of interpreting experience. Like any hermeneutic, it can be overdone. Not every infatuation is anima projection. Not every difficult parent is a great mother archetype gone wrong. Use the framework when it adds information that the personal level doesn't reveal. Don't force every experience into an archetypal explanation. Like all good thinking tools, archetypal psychology works when you use it carefully and stops working when you turn it into a totalizing answer.`,
          ],
          image: `/voyager-assets/inner-world/l15-s4-usable.webp`,
          imageCaption: `Useful framework, not a totalizing answer.`,
          vocab: [
            {
              word: `hermeneutic`,
              definition: `A method of interpretation. Different hermeneutics emphasize different patterns and explanations. Useful when applied carefully, problematic when forced.`,
              audioPrompt: `A hermeneutic is a method of interpretation, {name}. Different hermeneutics emphasize different patterns and explanations. Archetypal psychology is one hermeneutic. Behavioral psychology is another. Family systems theory is another. Each illuminates certain things and misses others. Good thinkers know which hermeneutic they're using and when it's appropriate. They use multiple hermeneutics to look at the same situation from different angles. The mistake is forcing all experience into a single hermeneutic until it stops adding information and starts distorting reality.`,
            },
            {
              word: `projection (archetypal)`,
              definition: `In Jungian psychology, attributing an inner archetype or quality to another person rather than recognizing it in oneself. Can occur with the shadow, the anima or animus, the wise old one, and other archetypes.`,
              audioPrompt: `Projection, in Jungian psychology, is attributing an inner archetype or quality to another person rather than recognizing it in yourself, {name}. When you idealize a teacher, you may be projecting the wise old one archetype. When you feel intense charm or repulsion toward someone, the shadow may be projecting. When you fall in love, an anima or animus figure may be projecting. Jungians do not say the other person has no real qualities. They say your reaction tells you as much about what is active in you as about the person themselves. Recognizing projection adds a layer of self-understanding the personal level alone does not provide.`,
            },
            {
              word: `totalizing answer`,
              definition: `Using a single framework to explain all experience, forcing every situation into its terms. The point at which any thinking tool stops adding information and starts distorting reality.`,
              audioPrompt: `A totalizing answer is the result of using a single framework to explain everything, {name}. Archetypal psychology is a useful hermeneutic. It can illuminate patterns the personal level alone does not reveal. But it can be overdone. Not every infatuation is anima projection. Not every difficult parent is a great mother archetype gone wrong. When you force every experience into an archetypal explanation, the framework stops adding information and starts distorting reality. This applies to all thinking tools, not only archetypal psychology. They work when used carefully and stop working when turned into a totalizing answer for everything you encounter.`,
            }
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Reading Jung Directly: What To Watch For`,
          paragraphs: [
            `In a moment you will read a real passage from Carl Jung. The passage is short, five sentences from one of his foundational works on archetypes. Reading Jung is its own challenge. He writes in a particular style: scholarly, sometimes mystical, sometimes psychological, often weaving together observations from clinical practice, mythology, and personal interpretation. His sentences are denser than typical scientific writing.`,
            `Your job is to annotate what each sentence is doing. Watch for these specific moves. A clinical observation: a sentence based on what he saw in his patients. A theoretical claim: a sentence proposing an explanation for what he observed. A mythological reference: a sentence connecting his clinical work to ancient material. A boundary statement: a sentence specifying what an archetype is or isn't. A practical implication: a sentence telling the reader what this means for them.`,
            `Reading Jung directly is different from reading a popular summary of his ideas. The popular versions often flatten his thought into simple slogans. The real Jung is more careful, more conditional, and more interesting. As you read, notice the difference between what Jung actually says and what's been said in his name. This is the same skill you developed with Hume in Lesson 2, Brewer in Lesson 7, and Schwartz in Lesson 11. Real primary source reading is a real intellectual practice you can carry with you.`,
          ],
          image: `/voyager-assets/inner-world/l15-s5-watch.webp`,
          imageCaption: `Five sentences of Jung. Five moves to spot.`,
          vocab: [
            {
              word: `theoretical claim`,
              definition: `A statement proposing an explanation for observations. Different from a description of what was observed; a claim about why.`,
              audioPrompt: `A theoretical claim is a statement proposing an explanation for what was observed, {name}. There's a difference between observing that patients with no exposure to mythology produced mythological symbols, and claiming this proves a collective unconscious exists. The first is an observation. The second is a theoretical claim that goes beyond the observation. Both can appear in the same sentence in scholarly writing. Spotting the difference is part of careful reading. Theoretical claims need different evaluation than observations: they need to be assessed against other possible explanations.`,
            },
            {
              word: `scholarly writing`,
              definition: `Academic writing produced for an expert audience. Characterized by precise terminology, qualifications, and denser sentence structure than popular writing. Reading it closely requires more careful attention.`,
              audioPrompt: `Scholarly writing is academic writing produced for an expert audience, {name}. Reading Jung is its own challenge because he writes in a particular style: scholarly, sometimes mystical, sometimes psychological, often weaving together observations from clinical practice, mythology, and personal interpretation. His sentences are denser than typical scientific writing. This is characteristic of scholarly writing generally. It requires more careful attention than popular writing. The density often signals precision and careful qualification. Reading scholarly writing closely is a skill that transfers across every discipline.`,
            },
            {
              word: `negative definition`,
              definition: `Defining a concept by specifying what it is not rather than what it is. A common strategy in philosophical and scholarly writing when introducing a contested or unfamiliar concept.`,
              audioPrompt: `A negative definition defines a concept by specifying what it is not rather than what it is, {name}. Jung defines the collective unconscious this way. He says it can be negatively distinguished from the personal unconscious by the fact that it does not owe its existence to personal experience. He defines it by contrast with something the reader already knows. This is a common strategy in philosophical and scholarly writing when introducing a contested or unfamiliar concept. Understanding negative definitions helps you read scholarly writing more accurately and notice when an author is positioning a new idea against an existing one.`,
            }
          ],
        },

        // ───── ANNOTATE ───────────────────────────────────────────────────────
        {
          id: `l15-annotate`,
          type: `annotate`,
          headline: `Jung, In His Own Words`,
          intro: `A passage from Carl Jung's 1934 essay on archetypes. Read it slowly. Tag what each sentence is doing.`,
          sourceCitation: `Carl Gustav Jung, "The Archetypes and the Collective Unconscious," Collected Works Volume 9, Part 1, 1934`,
          passage: [
            `The collective unconscious is a part of the psyche which can be negatively distinguished from a personal unconscious by the fact that it does not owe its existence to personal experience and is therefore not a personal acquisition.`,
            `Whereas the personal unconscious is made up essentially of contents which have at one time been conscious but which have disappeared from consciousness through having been forgotten or repressed, the contents of the collective unconscious have never been in consciousness, and therefore have never been individually acquired.`,
            `The contents of the collective unconscious are known as archetypes.`,
            `The archetype is essentially an unconscious content that is altered by becoming conscious and by being perceived, and it takes its color from the individual consciousness in which it happens to appear.`,
            `What the word archetype means in the nominal sense is clear enough, then, from its connections with myth, esoteric teaching, and fairytale.`,
          ],
          labels: [
            { id: `definition`, label: `Definition / boundary statement`, color: `#60a5fa` },
            { id: `theoretical-claim`, label: `Theoretical claim`, color: `#a78bfa` },
            { id: `contrast`, label: `Contrast with another concept`, color: `#f97316` },
            { id: `qualification`, label: `Qualification / nuance`, color: `#fbbf24` },
            { id: `evidence-reference`, label: `Reference to evidence / source material`, color: `#4ade80` },
          ],
          annotationPrompts: [
            {
              targetSentenceIndex: 0,
              prompt: `Sentence 1 defines the collective unconscious by saying what it is NOT (it's not personal experience). In 2-3 sentences, why might Jung have chosen to define it negatively? What does that strategy reveal about how he's positioning the concept?`,
            },
            {
              targetSentenceIndex: 3,
              prompt: `Sentence 4 says archetypes change when they become conscious and take their color from the individual. In 2-3 sentences, how does this qualification protect Jung's claim? What kinds of objection does it preemptively answer?`,
            },
          ],
          expertAnnotation: [
            {
              sentenceIdx: 0,
              label: `Definition / boundary statement`,
              note: `Jung defines the collective unconscious by what it is NOT. It is not personal experience. It is not individually acquired. This negative-definition move is common in philosophical writing when defining a contested concept. It immediately distinguishes the collective unconscious from the more familiar Freudian personal unconscious. Notice he uses "negatively distinguished" explicitly.`,
            },
            {
              sentenceIdx: 1,
              label: `Contrast with another concept`,
              note: `Direct contrast between the personal unconscious (forgotten/repressed conscious contents) and the collective unconscious (never been in consciousness). This is the structural heart of his argument: there are two different kinds of unconscious, and they have different origins. The contrast is necessary because his claim depends on distinguishing his concept from Freud's.`,
            },
            {
              sentenceIdx: 2,
              label: `Definition / boundary statement`,
              note: `The simplest sentence in the passage. He's naming the contents of the collective unconscious: archetypes. Notice how short and direct this is compared to the previous sentences. The terminological commitment is made cleanly: contents of the collective unconscious = archetypes.`,
            },
            {
              sentenceIdx: 3,
              label: `Qualification / nuance`,
              note: `This is the most philosophically interesting sentence. Jung qualifies his claim significantly: the archetype changes when it becomes conscious, and takes its color from the individual consciousness. This protects his theory against the objection "but the dream symbols look different in different patients." Yes, he's saying, they would. The underlying archetype is shaped by the particular consciousness it appears in. This is sophisticated theoretical positioning.`,
            },
            {
              sentenceIdx: 4,
              label: `Reference to evidence / source material`,
              note: `Jung closes by pointing to where evidence for archetypes can be found: in myth, esoteric teaching, and fairytale. This is his appeal to comparative mythology as the source of the patterns. He's not asking the reader to take his word; he's pointing to the cultural material where the same patterns can be seen. This is methodologically important: archetypes for Jung are validated by their appearance across cultures, not just in his clinical work.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "collective unconscious" in Jung's terminology?`,
              options: [
                `A group meditation`,
                `A layer of mind Jung proposed is shared across all humans, containing universal patterns called archetypes`,
                `Just another name for the personal unconscious`,
                `A spiritual entity outside the mind`,
              ],
              correctIndex: 1,
              explanation: `The collective unconscious is Jung's proposed shared layer of mind. The patterns within it are archetypes. Whether it literally exists as Jung described, or whether the patterns are explained more mundanely, is debated.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is an archetype, in Jung's framework?`,
              options: [
                `A specific historical person`,
                `A universal organizing pattern (like the hero, the shadow, the wise old one) that shows up across cultures and individuals; not a specific image but a template`,
                `A type of personality`,
                `A myth`,
              ],
              correctIndex: 1,
              explanation: `Archetype is a template, not a specific person. The hero archetype takes many specific forms (Luke Skywalker, Odysseus, Frodo) while keeping the same underlying pattern.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Jung observe in his patients that led him to the collective unconscious idea?`,
              options: [
                `That they all had the same childhood`,
                `That patients with no exposure to certain myths or symbols kept producing dream images and fantasies that matched figures from cultures they'd never encountered`,
                `That all patients had the same diagnosis`,
                `That patients liked the same books`,
              ],
              correctIndex: 1,
              explanation: `This observation was Jung's central data. The patterns showing up in patients without cultural exposure required some explanation. The collective unconscious was his proposed answer.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "hero's journey"?`,
              options: [
                `A military training program`,
                `Joseph Campbell's mapped pattern of departure, trial, and return found in hundreds of myths across cultures; a strong case for genuine cross-cultural pattern recurrence`,
                `A meditation practice`,
                `Jung's first book`,
              ],
              correctIndex: 1,
              explanation: `Campbell's 1949 book The Hero with a Thousand Faces mapped this pattern across cultures. George Lucas famously based Star Wars on it. Strong evidence for archetypal-style pattern recurrence.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the mainstream cognitive-science explanation for cross-cultural pattern recurrence?`,
              options: [
                `That Jung was completely wrong`,
                `That patterns can be explained by shared brain architecture, shared developmental experiences, and cultural transmission — without requiring a literal collective unconscious as a separate layer of mind`,
                `That the patterns aren't really there`,
                `That there's only one culture`,
              ],
              correctIndex: 1,
              explanation: `Modern cognitive science generally favors these mundane explanations. The patterns are real; the mechanism doesn't require Jung's specific metaphysical claim about a shared mind layer.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does Jung's qualification (archetypes take their color from individual consciousness) matter theoretically?`,
              options: [
                `Because it makes the theory weaker`,
                `Because it explains why dream symbols look different in different patients while preserving the underlying claim about shared archetypes; it preempts a major objection`,
                `Because Jung wasn't sure of his ideas`,
                `Because it's not important`,
              ],
              correctIndex: 1,
              explanation: `Sophisticated theoretical positioning. By saying archetypes are altered by becoming conscious, Jung accounts for individual variation without abandoning the universal pattern claim. This is careful theory-building.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is a "hermeneutic"?`,
              options: [
                `A medicine`,
                `A method of interpretation; different hermeneutics emphasize different patterns and explanations`,
                `A type of brain scan`,
                `A school in Germany`,
              ],
              correctIndex: 1,
              explanation: `A hermeneutic is an interpretive framework. Archetypal psychology is one. Behavioral psychology is another. Good thinkers know which one they're using and switch between them when useful.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Can you use archetypal thinking without accepting Jung's full metaphysics?`,
              options: [
                `No, you must accept everything Jung said`,
                `Yes; the patterns are well-documented even if their underlying mechanism is debated, so the framework can be useful for interpretation without committing to Jung's literal collective unconscious`,
                `No, the framework is all or nothing`,
                `Yes, but only by Buddhists`,
              ],
              correctIndex: 1,
              explanation: `This is the practical move. Use archetypal thinking as a hermeneutic that illuminates patterns without requiring you to commit to its specific metaphysical claims. Many therapists do this.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Reading the actual Jung is the same as reading popular summaries of his work.`,
              correctAnswer: false,
              explanation: `False. Jung's actual writing is denser, more careful, more qualified, and often more interesting than popular summaries. The popular versions tend to flatten his thought. Reading the source is a different intellectual experience.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You notice yourself intensely idealizing a new teacher who recently joined your school. Based on this lesson, what's a more interesting question than "is the teacher really that great?"`,
              options: [
                `"How can I become their favorite student?"`,
                `"What archetype might be activating in me right now? Could the wise old one pattern be projecting onto this person? What does my idealization tell me about what I need or am looking for?"`,
                `"Should I tell them they're amazing?"`,
                `"Is this teacher worth following?"`,
              ],
              correctIndex: 1,
              explanation: `Archetypal thinking applied to real life. The idealization is information about you, not just about the teacher. The wise old one archetype activates when you're seeking guidance. Recognizing that doesn't dismiss the teacher's qualities; it adds a layer of self-understanding.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which archetype do you recognize most clearly in your own life right now? Hero on a journey? Shadow? Wise old one as inner voice? Trickster?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Was Jung's writing harder or easier to follow than you expected? What did you have to work harder on compared to the Brewer paper or the Schwartz passage?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you take the hero's journey pattern seriously, what trial are you currently inside? What might "returning transformed" actually look like for you in the next year?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick a story you love (a book, movie, or game). What archetypes show up in it? How does spotting them change your relationship to the story?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the cross-cultural pattern recurrence be explained entirely without Jung's framework? What's the strongest version of the "shared brain architecture + cultural transmission" alternative?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Think of someone you intensely admire OR intensely dislike. Could an archetype be projecting onto them? Try to name which one. Be honest.` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Archetypal thinking is a real intellectual tool you can keep your whole life. Two paths below to start using it.`,
          familyActivity: {
            title: `The Family Archetype Map`,
            duration: `30 minutes`,
            description: `At dinner, share what archetype each family member tends to play in the family system. Examples: the responsible older sibling (caretaker), the parent who works hard (hero), the youngest (eternal child), the one who tells uncomfortable truths (trickster), the mediator (wise old one). Be playful, not accusatory. Notice that everyone plays multiple archetypes depending on the situation. This conversation often reveals patterns that nobody has consciously named. It can be deeply illuminating about how the family actually works.`,
          },
          projectOption: {
            title: `Archetype Journal, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, log one moment where you noticed an archetype activating in your life. Examples: idealizing someone (wise old one projection), being intensely jealous of someone (shadow projection), facing a hard transition (hero's journey activation), being drawn to chaos (trickster pull). Write 2-3 sentences each. After 14 days, write 500 words on the patterns you noticed. You will see archetypes everywhere once you start looking. This is real psychological self-investigation.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Trust their privacy for honesty.`,
          },
          identityQuestion: `If you can see the archetypal patterns running through your life, are you more or less free in choosing how to live them?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can recognize when an archetype is projecting in my reactions to people.`,
            `A person who reads Jung directly instead of taking the pop version.`,
            `Someone who uses archetypal thinking as one tool among several, not the only answer.`,
          ],
          saveKey: `identity_responses_iw_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can describe Jung's claim about the collective unconscious and archetypes, identify common archetypes and recognize them activating in your life and stories, distinguish the well-documented cross-cultural patterns from Jung's specific metaphysical claim about their source, and read Jung's actual writing closely at sentence level. Few people your age have read Jung directly. You have. Next time we shift to a more practical question: how do you build an actual spiritual practice that fits your life? Argument Builder format with three serious approaches. See you there. — Sage`,
          badge: `archetype-reader`,
          badgeName: `Archetype Reader`,
          xpEarned: 75,
          competencies: [
            `Can describe Jung's collective unconscious and archetype concepts`,
            `Recognizes common archetypes and their typical patterns`,
            `Distinguishes well-documented patterns from Jung's specific metaphysical claims`,
            `Has read Jung's actual writing at the sentence level`,
            `Can use archetypal thinking as one hermeneutic among several`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Building a Spiritual Practice — Which Approach is Strongest?`,
            hook: `Three approaches to building a spiritual practice that fits real life. Daily ritual. Embedded mindfulness. Periodic deep retreat. Build your argument.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const annotate = l.screens.find((s) => s.type === `annotate`)?.passage?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L15 ${VERSION}] "${l.title}" — ${mags} magazine, ${annotate}-sentence annotate, ${quiz} quiz, ${reflect} reflection`
  );
}
