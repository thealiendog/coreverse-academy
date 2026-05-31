// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L09 — Non-Duality: Three Traditions, One Strange Claim
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Comparative Contemplative Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: PERSPECTIVES (3 contemplative traditions on non-duality)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l09-v1";

const INNERWORLD_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-09`,
      title: `Non-Duality: Three Traditions, One Strange Claim`,
      duration: 35,
      xpReward: 75,
      badge: `boundary-questioner`,
      badgeName: `Boundary Questioner`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, today we look at one of the strangest and oldest claims in contemplative philosophy. The claim is roughly this: the separation between you and everything else isn't as solid as it seems. The line between self and world, between you and the air, between your awareness and the things you're aware of, is partly something your mind constructs. Different traditions, in different parts of the world, completely independently of each other, arrived at this same observation. They called it different things. Today we look at three: Advaita Vedanta from India, Buddhist non-dualism from across Asia, and Christian mystical contemplation from medieval Europe. Three different cultures, three different vocabularies, one strange shared finding. Your job is to think clearly about whether they were onto something or fooling themselves.`,
          headline: `Non-Duality`,
          subtitle: `Three traditions, one strange convergence.`,
          visual: `/voyager-assets/inner-world/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Does Non-Duality Even Mean?`,
          paragraphs: [
            `"Duality" means two-ness. The basic dualities of human experience are: self and other, inside and outside, observer and observed, mind and world, subject and object. Most people, most of the time, experience these as obvious and solid. There is "me" in here, looking out at a world that is "not me." This feels so basic that it seems impossible to question.`,
            `Non-dualists say: question it anyway. Look carefully at the moment of perception. Where exactly does "you" end and "the world" begin? You see a tree. Where is the seeing happening? In the eyes? In the brain? In the awareness that contains the perception? The contemplative traditions claim that when you look very carefully, the line between seer and seen, knower and known, gets harder to find. The separation that seems obvious starts to blur on close inspection.`,
            `This is not the same as saying nothing exists. It is not saying you and the tree are literally the same physical object. It is saying that the experience of being a separate self looking out at a separate world is partly a construction of how your mind organizes perception. Contemplative traditions across cultures developed practices designed to investigate this construction directly. What they found, and what their texts describe, is the subject of today's lesson.`,
          ],
          image: `/voyager-assets/inner-world/l09-s1-duality.webp`,
          imageCaption: `Self and world: a line that seems obvious, until you look closely.`,
          vocab: [
            {
              word: `duality`,
              definition: `The experienced split between self and not-self, observer and observed, subject and object. The basic two-ness of ordinary human perception.`,
              audioPrompt: `Duality means two-ness, {name}. In contemplative contexts, it refers to the basic experienced split between you and everything else. There's a 'me' having experiences. There's a 'world' the experiences are about. This feels so basic it seems impossible to question. Non-dual traditions question it anyway. They claim that when you look very carefully at the moment of experience, the line between self and world is harder to locate than it seems. This isn't the same as saying there's no difference between you and a tree. It is saying the separation feels more solid than it actually is on close inspection.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Advaita Vedanta: India's Position`,
          paragraphs: [
            `Advaita Vedanta is a school of Hindu philosophy that crystallized around the 8th century CE through the work of the philosopher Adi Shankara, though its roots go back to the Upanishads written roughly 2,500 years ago. The word advaita literally means "not two." Vedanta means "end of the Vedas," the culminating teaching of the ancient Hindu scriptures.`,
            `The Advaita claim is bold. There is ultimately one reality, called Brahman. The individual self (atman) and the underlying reality of everything (Brahman) are not two different things. They are the same. The experience of being a separate individual is, in their view, a kind of cosmic mistake of perception called maya (illusion). The work of contemplative life is to recognize directly that the separate self was always Brahman, that what you call "I" was never actually separate from everything else.`,
            `Advaita practice is mostly inquiry. Adi Shankara's method, called atma vichara or self-inquiry, asks the practitioner to repeatedly investigate the question "Who am I?" Not as a thought exercise, but as a direct looking. When you turn your attention back on what's doing the experiencing, what do you find? Advaita teachers across centuries have claimed: you find awareness without an owner. You find consciousness without a separate consciousness-haver. Ramana Maharshi, a 20th-century Advaita teacher, taught this method to thousands of visitors. The tradition is still very much alive in modern India.`,
          ],
          image: `/voyager-assets/inner-world/l09-s2-advaita.webp`,
          imageCaption: `Advaita Vedanta: the self and the underlying reality are not two.`,
          vocab: [
            {
              word: `Brahman`,
              definition: `In Advaita Vedanta, the ultimate underlying reality of everything. Not a god in the personal sense, more like the deepest layer of what exists.`,
              audioPrompt: `Brahman is the ultimate underlying reality in Advaita Vedanta, {name}. It is not a god in the personal Western sense. It is more like the deepest layer of what is. Advaita teachers say everything you see, hear, think, and feel is ultimately Brahman appearing in different forms. The separate self you experience is also Brahman, temporarily mistaking itself for separate. This idea is strange to Western ears but has been a serious philosophical position in India for over 1,000 years. You don't have to believe it. You should be able to articulate it as a real position serious thinkers have held.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Buddhist Non-Dualism: Asia's Position`,
          paragraphs: [
            `Buddhism developed non-dual teachings independently of Advaita, starting with the Buddha's own teaching in the 5th century BCE and elaborated over the next two millennia across India, Tibet, China, Japan, and Southeast Asia. Buddhism's version is subtly different from Advaita's. Buddhists generally don't claim there is one underlying substance called Brahman that everything is made of. They claim something almost more radical: that nothing has an inherent separate existence at all.`,
            `The central concept is sunyata, often translated as emptiness, though that translation can be misleading. Emptiness here doesn't mean nothingness. It means emptiness of independent existence. Everything is interdependent. The chair you sit on depends on the trees that became wood, the workers who built it, the floor it rests on, your perception of it. Take any one piece out and the chair as you know it doesn't exist in that form. Buddhists extend this to the self: the "I" depends on a body, a brain, memories, language, culture, other people. Remove the dependencies and what's left? Not nothing, but not a separate substantial self either.`,
            `Zen Buddhism developed practices designed to point directly at this. A koan is a puzzle that can't be solved by ordinary logic, designed to break the practitioner's reliance on conceptual thinking. Famous koan: "Show me your original face before your parents were born." The point isn't to come up with a clever answer. The point is to investigate, directly, what "you" actually are. Zen teachers across centuries have claimed that when you look hard enough, the separate self you assumed you were dissolves into the activity of life itself.`,
          ],
          image: `/voyager-assets/inner-world/l09-s3-buddhist.webp`,
          imageCaption: `Buddhist non-dualism: nothing has independent existence; everything depends.`,
          vocab: [
            {
              word: `sunyata`,
              definition: `Sanskrit/Pali term often translated as "emptiness." In Buddhism, the teaching that nothing has independent inherent existence; everything is interdependent.`,
              audioPrompt: `Sunyata is usually translated as emptiness, {name}. The translation can be misleading. Sunyata doesn't mean nothingness. It means emptiness of independent existence. Everything is interdependent. Nothing exists separately, on its own, without reference to other things. The cup needs the clay, the potter, the table. The 'you' needs a body, brain, memories, language, family, culture. Buddhists claim that when you really see this, the assumed solid separate self loosens. Not because you don't exist, but because the way you assumed you existed isn't quite right.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Christian Mystics: Europe's Position`,
          paragraphs: [
            `Most Westerners don't know that Christianity has its own non-dual tradition. From the early Church mothers and fathers through the medieval period, Christian mystics described experiences and developed teachings that look remarkably similar to Advaita and Buddhist non-dualism. These mystics were sometimes celebrated and sometimes persecuted by mainstream Christianity, but their writings survived.`,
            `Meister Eckhart, a German theologian and mystic who lived from about 1260 to 1328, wrote that "the eye through which I see God is the same eye through which God sees me; my eye and God's eye are one eye, one seeing, one knowing, one love." He was put on trial for this kind of language. He died before the verdict. The Catholic Church partially condemned his teachings in 1329. But his writings continued to be read and have influenced Christian contemplatives ever since.`,
            `The Cloud of Unknowing, written by an anonymous English monk in the 14th century, teaches a contemplative practice of letting go of all concepts, including concepts about God, in order to encounter what the author calls "naked being." Saint John of the Cross, in 16th-century Spain, described the contemplative path as a "dark night" in which the separate sense of self dissolves into union with the divine. These texts are not fringe weirdness in Christian history. They are part of the contemplative core of the tradition, even if rarely emphasized in modern Sunday school.`,
          ],
          image: `/voyager-assets/inner-world/l09-s4-mystics.webp`,
          imageCaption: `Christian mystics, often persecuted, often saying the same strange thing.`,
          vocab: [
            {
              word: `mysticism`,
              definition: `In Christian context, the contemplative branch focused on direct experience of God beyond doctrine, often involving practices of union or non-separation.`,
              audioPrompt: `Mysticism in Christianity refers to the contemplative branch focused on direct experience of God beyond doctrine, {name}. Christian mystics like Meister Eckhart, the author of the Cloud of Unknowing, and Saint John of the Cross described practices and experiences that look remarkably like Buddhist and Hindu non-dual teachings, even though these traditions developed largely independently. Mysticism has often been treated with suspicion by mainstream church authorities because it deemphasizes doctrine and institution in favor of direct experience. But it has survived as a serious thread of Christian thought for two thousand years.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What To Make Of The Convergence`,
          paragraphs: [
            `Three completely separate cultures, with no significant contact when their non-dual teachings developed, arrived at remarkably similar claims about the nature of self and experience. This convergence is one of the most interesting facts in the history of human thought. It demands some explanation. There are several possible interpretations, and they are exactly what you will pick between in the perspectives screen.`,
            `One interpretation: they were all describing something real. Different traditions found different vocabularies for the same underlying truth about how the mind and world relate. Their convergence is evidence that they were onto something. Another interpretation: they were all victims of similar psychological patterns. Long meditation produces specific brain states. Those brain states might generate similar experiences and similar reports across cultures. The convergence isn't pointing to anything outside the mind; it's pointing to features of brains under contemplative practice.`,
            `A third interpretation, the most cautious: we don't know. The convergence is striking. The data is real reports from serious practitioners across centuries. But interpreting what those reports mean philosophically is hard. Cautious scholars hold the data while remaining agnostic about its ultimate meaning. Your job today is not to pick the "right" answer. Your job is to hold these three interpretations seriously and decide which one you find most defensible, knowing the other two are also held by serious thinkers.`,
          ],
          image: `/voyager-assets/inner-world/l09-s5-convergence.webp`,
          imageCaption: `The convergence is real. The interpretation is open.`,
          vocab: [
            {
              word: `convergence`,
              definition: `When separate sources or traditions arrive at similar conclusions independently. In philosophy and science, convergence is often treated as suggestive but not conclusive evidence.`,
              audioPrompt: `Convergence is when separate sources arrive at similar conclusions independently, {name}. In science, when multiple labs running different experiments find similar results, convergence is taken seriously as evidence. In contemplative philosophy, the fact that Hindu, Buddhist, and Christian traditions independently developed similar non-dual teachings is a striking convergence. It demands explanation. The convergence itself doesn't prove the teachings are correct, but it makes it harder to dismiss them as one culture's local quirk. Convergence is suggestive evidence that there's something real being described, even if interpretations vary.`,
            },
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l09-perspectives`,
          type: `perspectives`,
          headline: `Three Views On The Non-Dual Convergence`,
          intro: `Three traditions across cultures arrived at similar non-dual teachings. Three modern interpretations of why. Read them carefully. Then weigh in.`,
          positions: [
            {
              id: `they-found-something`,
              label: `They were describing something real`,
              thinker: `Many contemplative scholars, philosophers like William James, modern teachers like Adyashanti and Loch Kelly`,
              statement: `When traditions in India, China, Tibet, Japan, and medieval Europe, with no significant contact during the centuries their teachings developed, arrive at remarkably similar reports about the nature of self and experience, that convergence is evidence they were investigating something real. Different vocabularies, same underlying observation. The contemplative claim that the separation between self and world is partly constructed deserves to be taken as genuine empirical observation across cultures, not dismissed as superstition.`,
            },
            {
              id: `same-brain-states`,
              label: `They were describing similar brain states`,
              thinker: `Contemplative neuroscientists like Richard Davidson and James Austin, philosophers of mind like Daniel Dennett`,
              statement: `Long meditation produces specific changes in brain function. Those changes include reductions in Default Mode Network activity, shifts in self-referential processing, and altered states of awareness. Different cultures running similar practices would produce similar brain states, which would generate similar phenomenological reports. The convergence is real but it's pointing to features of brains under contemplative practice, not to a metaphysical truth about reality. The traditions were investigating their own minds, which work similarly across cultures.`,
            },
            {
              id: `careful-agnostic`,
              label: `Cautious agnosticism`,
              thinker: `Many academic scholars of religion and consciousness like Evan Thompson, Robert Forman`,
              statement: `The convergence is striking and the practitioners' reports are sincere. But interpreting what they mean philosophically is hard. Is the experience pointing to a real feature of reality, or to a real feature of consciousness, or both, or neither? Honest scholarship holds the data carefully without forcing it into a single interpretation. There's a real phenomenon being investigated. The deeper philosophical question of what it means may not be answerable without more research and more honesty about the limits of what we know.`,
            },
          ],
          reflectionPrompt: `Which view sits with you most right now? Why? Could you imagine sitting with a different view a year from now after more reading or experience?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "non-duality" mean?`,
              options: [
                `Believing in one god`,
                `The contemplative claim that the experienced separation between self and world is less solid than it seems on close inspection`,
                `Mathematics with no negative numbers`,
                `A type of meditation`,
              ],
              correctIndex: 1,
              explanation: `Non-duality literally means "not two." It refers to the contemplative observation that the basic split between self and not-self gets harder to locate when investigated carefully. It does NOT mean self and world are physically identical.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is Advaita Vedanta's specific claim?`,
              options: [
                `The world doesn't exist`,
                `The individual self (atman) and the underlying reality of everything (Brahman) are ultimately not two different things; the experience of being separate is a kind of cosmic misperception`,
                `Meditation is the only path to truth`,
                `Hindus are correct and other traditions are wrong`,
              ],
              correctIndex: 1,
              explanation: `Advaita's bold claim: atman = Brahman. The individual self is fundamentally identical to the underlying reality. The separation feels real but is, in their view, a misperception called maya.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is sunyata in Buddhism?`,
              options: [
                `The absence of God`,
                `Nothingness or non-existence`,
                `The teaching that nothing has independent inherent existence; everything is interdependent`,
                `A meditation practice`,
              ],
              correctIndex: 2,
              explanation: `Sunyata is often mistranslated as "emptiness" meaning nothingness. It actually means emptiness of independent existence. Everything depends on other things. This is subtly different from Advaita's claim.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is Meister Eckhart important to Christian non-dualism?`,
              options: [
                `He invented Christianity`,
                `He wrote that the eye through which I see God is the same eye through which God sees me; one eye, one seeing. His non-dual language was controversial enough that he was put on trial`,
                `He was a Buddhist`,
                `He converted to Hinduism`,
              ],
              correctIndex: 1,
              explanation: `Eckhart's language was striking and dangerous in his era. He died before his trial concluded. Parts of his teaching were posthumously condemned. But his writings survived and influenced Christian contemplative thought for centuries.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is the convergence across cultures interesting?`,
              options: [
                `Because all religions are the same`,
                `Because three traditions in different parts of the world, with no significant contact during their development, arrived at remarkably similar claims; this demands explanation`,
                `Because Christians borrowed from Hindus`,
                `Because it's not actually a real convergence`,
              ],
              correctIndex: 1,
              explanation: `The convergence is the central puzzle. Independent traditions arriving at similar reports is striking evidence that something is being investigated, even if interpretations of what it means vary.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the difference between Advaita's view and Buddhist non-dualism?`,
              options: [
                `They're identical`,
                `Advaita typically asserts one underlying substance (Brahman) that everything is, while Buddhism typically denies any underlying inherent existence at all (sunyata)`,
                `Advaita is older`,
                `Buddhism is from India`,
              ],
              correctIndex: 1,
              explanation: `Important distinction. Advaita says there IS one underlying reality. Buddhism is more radical: it denies inherent existence to anything, including any underlying substance. Both arrive at "not-two" but with different metaphysics.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the neuroscience interpretation of the convergence?`,
              options: [
                `That the traditions are correct about reality`,
                `That long meditation produces specific brain states (reduced DMN activity, altered self-processing), and similar practices across cultures would produce similar brain states and reports`,
                `That meditation doesn't work`,
                `That brains aren't real`,
              ],
              correctIndex: 1,
              explanation: `The neuroscience interpretation says the convergence is real but is pointing to features of brains under contemplative practice, not necessarily to metaphysical truth about reality.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Which is the cautious agnostic position?`,
              options: [
                `The convergence proves the traditions are right`,
                `The convergence proves the traditions are wrong`,
                `The convergence is real and significant; the philosophical interpretation of what it means is genuinely open, and serious scholars hold the data without forcing a single interpretation`,
                `The convergence isn't real`,
              ],
              correctIndex: 2,
              explanation: `Cautious agnosticism: take the convergence seriously, take the reports seriously, but don't claim to know more than current evidence supports about what it ultimately means.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Non-duality claims that you and a tree are literally the same physical object.`,
              correctAnswer: false,
              explanation: `False. Non-duality doesn't deny ordinary physical differences. It questions whether the EXPERIENCED separation between self and world is as fundamental as it seems. The physical tree and your physical body are clearly different; the contemplative claim is about the structure of experience, not physical chemistry.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend tells you they read a book that says "all religions teach the same thing." Based on this lesson, how would you respond carefully?`,
              options: [
                `Agree completely`,
                `Disagree completely`,
                `Note that there's a real convergence in non-dual teachings across some traditions, but the traditions also have meaningful differences (Advaita and Buddhism arrive at "not-two" with different metaphysics), and many religious teachings aren't about non-duality at all; the truth is more nuanced than either "all the same" or "completely different"`,
                `Tell them religion is fake`,
              ],
              correctIndex: 2,
              explanation: `Nuanced response: honor what's true about the convergence claim without overstating it. Real differences exist alongside the real convergence. Most religious teaching isn't about non-duality. The "all religions teach the same thing" claim is a sloppy version of something more interesting and complicated.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which of the three traditions made the most sense to you? Which seemed most strange? Why?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you try to find the line between "you" and "everything else" right now, what happens? Where is the boundary exactly?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If the separation between self and world is partly a construction, who would you be without it? Does that feel freeing, scary, both, neither?` },
            { id: `reflect-application`, category: `Application`, prompt: `Most adults take the solid separate self for granted. How will you talk about non-duality with people who would find it weird?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest argument that all three traditions were just wrong? Could the convergence be explained without taking the teachings seriously?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try Ramana Maharshi's self-inquiry right now. Ask "Who am I?" Not as a thought, as a looking. What do you actually find?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Non-duality is an old, serious, cross-cultural inquiry. Whether or not you accept the traditions' interpretations, the practice of investigating the boundary between self and world is real. Two paths below.`,
          familyActivity: {
            title: `The Boundary Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, ask each family member: when you say "I," where exactly are you pointing? Your body? Your thoughts? Your memories? Something behind all of those? Take turns trying to describe what each person is actually pointing at when they use the word "I." Notice how hard this is to do precisely. You don't have to agree on an answer. You're practicing the kind of attention contemplatives across cultures have practiced for thousands of years. This is rare conversation. Treat it seriously.`,
          },
          projectOption: {
            title: `The Self-Inquiry Practice, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `For 14 days, do 10 minutes of self-inquiry daily. Sit quietly. Ask the question "Who am I?" Not as a thought to be answered, but as an invitation to look. Try to find the "I" doing the looking. What's there? Each day write 2-3 sentences about what you noticed. After 14 days, write 500 words on your investigation. This is exactly the practice Ramana Maharshi taught to thousands of visitors. You are not required to reach any specific conclusion. You are required to actually look.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If the line between "you" and everything else is less solid than you assumed, what changes about who you think you are?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can take ancient contemplative claims seriously without becoming a true believer.`,
            `A person who notices the convergence across cultures and stays curious about why.`,
            `Someone willing to investigate where 'I' actually is instead of assuming I already know.`,
          ],
          saveKey: `identity_responses_iw_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious non-dual traditions (Advaita Vedanta, Buddhist non-dualism, Christian mysticism), describe how they differ as well as how they converge, hold multiple interpretations of why three independent cultures arrived at similar reports, and engage with one of the strangest claims in contemplative philosophy without either dismissing it or swallowing it whole. Few adults can do this. Next time we step out of the contemplative and into a more practical question: how should you relate to time? Three philosophical positions on past, present, and future. Argument Builder format. See you there. — Sage`,
          badge: `boundary-questioner`,
          badgeName: `Boundary Questioner`,
          xpEarned: 75,
          competencies: [
            `Can articulate three contemplative traditions of non-duality and their differences`,
            `Understands the philosophical significance of cross-cultural convergence`,
            `Can hold multiple interpretations of contemplative experience`,
            `Has practiced self-inquiry at the most basic level`,
            `Distinguishes empirical contemplative claims from metaphysical interpretations`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Past, Present, Future — Which Time Relationship Matters Most?`,
            hook: `Stoics say focus on the present. Buddhists say even the present is constructed. Existentialists say the future you choose creates who you are. Three positions. Pick one.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L09 ${VERSION}] "${l.title}" — ${mags} magazine, ${persp} perspectives, ${quiz} quiz, ${reflect} reflection`
  );
}
