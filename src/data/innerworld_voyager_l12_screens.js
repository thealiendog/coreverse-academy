// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L12 — Ego vs True Self: What People Mean (And Don't Mean)
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Psychology of Self, Comparative Wisdom Traditions
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: PERSPECTIVES (Jung / Buddhist / Hindu views of "true self")
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l12-v1";

const INNERWORLD_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-12`,
      title: `Ego vs True Self: What People Mean (And Don't Mean)`,
      duration: 35,
      xpReward: 75,
      badge: `ego-decoder`,
      badgeName: `Ego Decoder`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, you have probably heard someone say "that's just your ego talking" or "you need to let go of your ego" or "the true self is underneath the ego." These phrases are everywhere in wellness, self-help, and spiritual culture. They're also wildly inconsistent. The word "ego" means completely different things in Freud, in Jung, in Buddhism, in Advaita Vedanta, and in modern pop spirituality. People use the word without knowing they're confusing four or five different concepts. Today we clear that up. We look at three serious traditions of what "ego" actually means and what's underneath it. By the end you will be the only person in most rooms who can tell which "ego" anyone is talking about.`,
          headline: `Ego vs True Self`,
          subtitle: `One word, several completely different meanings.`,
          visual: `/voyager-assets/inner-world/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Word Is Confusing`,
          paragraphs: [
            `In Latin, "ego" simply means "I." It's the most basic word for the self that says "I think, I feel, I do." When Freud used the word in the early 1900s, he meant something specific: the conscious mediating part of the psyche that balances impulses, conscience, and reality. When Jung used the word, he meant the conscious center of personal identity but distinguished it from a deeper Self he wrote with a capital S. Buddhists use English translations to discuss something called the "self-construct" that's slightly different from both. Advaita Vedanta uses ahamkara, the "I-maker," which is closer to Jung but with different metaphysics.`,
            `Then pop spirituality came along and started using "ego" as a general bad guy. The ego became the part of you that's selfish, defensive, jealous, anxious, or proud. People started saying "let go of your ego" without specifying which version of ego they meant. Spiritual influencers built entire careers around defeating "the ego" without naming what the ego actually is in any specific framework. The word got hollow.`,
            `Today we sort this out. We will look at three serious frameworks for what "ego" means and what's claimed to be underneath it. Jung's psychological framework. Buddhist no-self teaching. Advaita Vedanta's atman-Brahman view. Each has a clear definition of ego and a clear claim about what lies deeper. After today, when you hear anyone use the word, you will know which framework (if any) they're drawing from.`,
          ],
          image: `/voyager-assets/inner-world/l12-s1-confusion.webp`,
          imageCaption: `One word, several frameworks. Clarity beats fashion.`,
          vocab: [
            {
              word: `ego`,
              definition: `From Latin meaning "I." In modern usage refers to the self that experiences itself as a separate individual; the specific meaning depends entirely on which framework is being used.`,
              audioPrompt: `Ego comes from the Latin word for I, {name}. In modern usage it refers to the self that experiences itself as a separate individual. But what's claimed about this ego varies dramatically depending on which framework you're using. Freud meant one thing. Jung meant something different. Buddhists mean something else again. Advaita Vedanta means something different still. Pop spirituality has muddied everything by using the word without specifying. The first step in thinking clearly about ego is asking: which definition are we using?`,
            },
          ,
            {
              word: `pop spirituality`,
              definition: `A loose, popularized blend of spiritual and wellness ideas, often drawing from multiple traditions without distinguishing them. Frequently uses terms like ego without specifying a precise framework.`,
              audioPrompt: `Pop spirituality is a loose, popularized blend of spiritual and wellness ideas, {name}. It arrived and started using ego as a general bad guy: the part of you that is selfish, defensive, jealous, anxious, or proud. People began saying let go of your ego without specifying which version of ego they meant. Spiritual influencers built careers around defeating the ego without naming what the ego actually is in any specific framework. The word got hollow. The lesson clears this up by examining three serious frameworks, each with a clear definition of ego rather than the pop blend.`,
            },
            {
              word: `conscious center`,
              definition: `In Jungian psychology, the ego understood as the part of the psyche that organizes everyday experience, manages social roles, and holds the sense of being a particular person.`,
              audioPrompt: `The conscious center is what Jung meant by the ego, {name}. For Jung, the ego is the conscious center of personality, the part that says I and organizes everyday experience. It manages social roles, conscious memories, and the sense of being a particular person in the world. The ego, in this Jungian sense, is not bad. It is necessary. Without a conscious center you could not function as an individual person. Jung distinguished this from the larger Self with a capital S. The work in Jungian psychology is not to destroy the conscious center but to bring it into right relationship with the larger whole.`,
            }
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Jung's View: The Ego And The Self`,
          paragraphs: [
            `Carl Jung, who we met two lessons back in the Shadow lesson, had a specific and technical use of "ego." For Jung, the ego is the conscious center of personality, the part of you that says "I" and organizes your everyday experience. It manages your social roles, your conscious memories, your sense of being a particular person in the world. The ego is not bad. It is necessary. Without an ego, you could not function as an individual person.`,
            `But Jung distinguished the ego from what he called the Self with a capital S. The Self for Jung is the larger psyche that includes both the conscious ego and everything in the unconscious. It is the totality of who you are, including the parts you can see and the parts you cannot. Jung believed psychological development across a lifetime is what he called individuation: the slow process of the ego coming into right relationship with the Self.`,
            `For Jung, the goal isn't to destroy the ego. The goal is to grow it up. A healthy adult has a strong, flexible ego that can stand in relationship to the larger Self without being overwhelmed by it. People with weak or rigid egos either get swept away by unconscious material (overwhelmed by emotions, dreams, archetypes) or wall themselves off from it (becoming brittle, defensive, narrow). The right ego is neither inflated nor collapsed. It's a confident enough I to engage with everything you are, including what's beyond it.`,
          ],
          image: `/voyager-assets/inner-world/l12-s2-jung.webp`,
          imageCaption: `Jung: a healthy ego in right relationship with the larger Self.`,
          vocab: [
            {
              word: `individuation`,
              definition: `Jung's term for the lifelong psychological process of integrating conscious and unconscious aspects of the personality, bringing the ego into right relationship with the larger Self.`,
              audioPrompt: `Individuation is Jung's term for the lifelong psychological process of becoming who you fully are, {name}. It involves bringing the ego into right relationship with the larger Self, which includes unconscious material like the shadow, archetypes, and parts of personality you don't yet know. Individuation isn't about destroying the ego or becoming someone different. It's about growing into the fullness of who you already are, including the parts you've ignored. Jung thought of this as the central task of adult life. It is slow work, not a flash of enlightenment.`,
            },
          ,
            {
              word: `unconscious material`,
              definition: `In Jungian psychology, the contents of the psyche that are not currently in conscious awareness, including the shadow, archetypes, and aspects of personality not yet known to the ego.`,
              audioPrompt: `Unconscious material, in Jungian psychology, is the content of your psyche that is not in conscious awareness, {name}. This includes the shadow, archetypes, and parts of personality not yet integrated. Jung believed the Self with a capital S includes both the conscious ego and the totality of unconscious material. People with weak or rigid egos either get swept away by unconscious material, overwhelmed by emotions and archetypes, or wall themselves off from it, becoming brittle and narrow. The goal of individuation is for the ego to come into right relationship with this larger territory.`,
            },
            {
              word: `inflated ego`,
              definition: `In Jungian psychology, an ego that has overidentified with itself and become rigid or grandiose. Contrasted with a collapsed ego. Neither state is psychologically healthy.`,
              audioPrompt: `An inflated ego, in Jungian psychology, is an ego that has overidentified with itself and become rigid or grandiose, {name}. Jung said the right ego is neither inflated nor collapsed. An inflated ego walls itself off from the unconscious and becomes brittle, defensive, and narrow. A collapsed ego gets swept away by unconscious material. The goal is a strong, flexible ego that can stand in relationship to the larger Self without being overwhelmed. A healthy ego is confident enough to engage with everything you are, including what lies beyond awareness. Growing the ego up rather than destroying it is individuation.`,
            }
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Buddhism: Ego As Construction`,
          paragraphs: [
            `Buddhism, particularly the older Theravada and Zen traditions, has a different framing. Buddhists generally don't use the Western word "ego" in their original texts. They talk about the self-construct, the assumed solid separate self that's actually built moment by moment from thoughts, sensations, and memories. In Pali, the early Buddhist language, the relevant concept is anatta, which we met in L02: not-self.`,
            `For Buddhists, the problem isn't a thing called ego that needs to be destroyed. The problem is the constant unconscious process of constructing a sense of solid separate self where there really isn't one. This construction creates suffering because it generates endless effort to protect, defend, and improve a self that isn't quite as solid as it seems. Buddhist meditation practice is largely about seeing through this construction directly, in real time, again and again, until the grip of the assumption loosens.`,
            `Under this framework, "letting go of ego" doesn't mean having no personality or no preferences or no functional self. It means seeing clearly how the self gets built moment by moment and not over-investing in any particular version of it. A person who has done this work still has a name, still has preferences, still functions in the world. They just hold their selfhood more lightly. This is what Buddhist teachers across two and a half millennia have claimed is possible and beneficial.`,
          ],
          image: `/voyager-assets/inner-world/l12-s3-buddhist.webp`,
          imageCaption: `Buddhism: the self is constructed moment by moment; see the construction.`,
          vocab: [
            {
              word: `self-construct`,
              definition: `In Buddhist-influenced psychology, the moment-by-moment process by which the mind builds a sense of solid separate self from thoughts, sensations, and memories.`,
              audioPrompt: `The self-construct is the moment-by-moment process by which the mind builds a sense of solid separate self, {name}. Buddhist analysis claims this happens continuously and mostly unconsciously. Thoughts arise, sensations register, memories activate, and the mind weaves them together into the assumption that there's a stable I behind it all. The self-construct isn't bad. It serves functions. But when it's invisible to you, it generates suffering because you spend enormous energy defending a self that isn't quite as substantial as you assume. Seeing the construct happen, in real time, is the Buddhist practice.`,
            },
          ,
            {
              word: `anatta`,
              definition: `A Pali Buddhist term meaning not-self. The teaching that there is no fixed, solid, independent self underlying experience. Foundational to Buddhist analysis of the self-construct.`,
              audioPrompt: `Anatta is a Pali Buddhist term meaning not-self, {name}. Pali is the early Buddhist language. Anatta is the teaching that there is no fixed, solid, independent self underlying experience. It is the foundation of the Buddhist analysis of ego. Buddhists generally do not use the Western word ego. They talk about the self-construct, the assumed solid separate self that is built moment by moment from thoughts, sensations, and memories. The problem is not a thing called ego that must be destroyed. The problem is the constant unconscious process of constructing selfhood more solid than it actually is.`,
            },
            {
              word: `holding selfhood lightly`,
              definition: `The Buddhist-influenced practice of seeing clearly how the self is constructed moment by moment without over-investing in any particular version of it. A person can still function fully while doing this.`,
              audioPrompt: `Holding selfhood lightly is the Buddhist-influenced practice of seeing how the self is constructed without over-investing in any particular version of it, {name}. A person who has done this work still has a name, preferences, and functions in the world. They just hold selfhood more lightly. This is what Buddhist teachers across two and a half millennia have claimed is possible and beneficial. It does not mean having no personality. It means that the constant effort to protect and improve a self that may not be quite as solid as it seems loosens its grip. Less suffering. More flexibility.`,
            }
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Advaita Vedanta: The I-Maker And The True Self`,
          paragraphs: [
            `Advaita Vedanta, which we met in L09, has yet another framing. The relevant term is ahamkara, often translated "the I-maker." It is the mental function that takes the basic experience of awareness and adds the conviction "this awareness belongs to me, a separate individual." For Advaita, ahamkara is what generates the sense of separate selfhood. Without it, awareness would simply be aware, without dividing itself into subject and object.`,
            `What is claimed to be underneath the I-maker is more radical than in Jung or Buddhism. For Advaita, underneath the personal sense of self is atman, the deepest true self, which is ultimately identical with Brahman, the underlying reality of everything. The famous Upanishadic statement "tat tvam asi" (you are that) makes this claim directly. The personal self is real but limited. The true self is unlimited and is not separate from the underlying reality of all that exists.`,
            `For Advaita, the spiritual project is recognition. Through self-inquiry and practice, the ahamkara loosens, and the recognition that the true self is and always was Brahman becomes direct. This is more metaphysically ambitious than Buddhism (which doesn't claim a single underlying reality) and more metaphysically ambitious than Jung (who stayed within psychological language). Whether you find this view compelling or far-fetched is part of what you will weigh in the perspectives screen. The traditions are not interchangeable. They make different claims with different evidence.`,
          ],
          image: `/voyager-assets/inner-world/l12-s4-advaita.webp`,
          imageCaption: `Advaita: the I-maker creates the appearance of separation; what's under is everything.`,
          vocab: [
            {
              word: `ahamkara`,
              definition: `Sanskrit term meaning "the I-maker." In Advaita Vedanta and Hindu philosophy, the mental function that generates the sense of separate individual selfhood.`,
              audioPrompt: `Ahamkara is a Sanskrit term meaning the I-maker, {name}. In Advaita Vedanta and Hindu philosophy, ahamkara is the mental function that takes basic awareness and adds the conviction "this is mine, I am separate." Without ahamkara, awareness would simply be aware, without dividing the field into me and not-me. Advaita teaches that ahamkara, while functional, creates the illusion of separation from the underlying reality. The deeper self, atman, is not separate. Atman, in their view, is identical with Brahman, the underlying reality of everything.`,
            },
          ,
            {
              word: `atman`,
              definition: `In Advaita Vedanta, the deepest true self, distinct from the personal sense of self generated by ahamkara. Claimed to be ultimately identical with Brahman, the underlying reality of everything.`,
              audioPrompt: `Atman is the deepest true self in Advaita Vedanta, {name}. It is distinct from the personal sense of self generated by ahamkara, the I-maker. The personal self is real but limited. Atman is claimed to be unlimited. The Upanishadic statement tat tvam asi, meaning you are that, makes the central Advaita claim directly: atman is ultimately identical with Brahman, the underlying reality of everything. Through self-inquiry and practice the ahamkara loosens and the recognition that the true self was always Brahman is said to become direct experience.`,
            },
            {
              word: `self-inquiry`,
              definition: `In Advaita Vedanta, a meditative practice of directly investigating the source of the sense of I. The primary method by which the ahamkara is said to loosen and recognition of atman becomes possible.`,
              audioPrompt: `Self-inquiry is a meditative practice central to Advaita Vedanta, {name}. It involves directly investigating the source of the sense of I. Rather than looking outward or engaging in complicated ritual, the practitioner turns attention inward: who or what is the one that says I? Through this practice the ahamkara, the I-maker, is said to loosen its grip. The recognition that the true self, atman, is not separate from the underlying reality of everything becomes more direct. This is described as recognition rather than achievement, because atman is said to have always already been what it is.`,
            }
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How To Use This Clarity`,
          paragraphs: [
            `You now have three serious frameworks. Jung says you have an ego (conscious center) and a Self (larger psyche), and the work is growing the ego into right relationship with the Self. Buddhism says there's a constant self-constructing process that needs to be seen, not destroyed, so you can hold selfhood lightly. Advaita says there's an I-maker generating separation from a deeper true self that's ultimately identical with everything.`,
            `Each framework has different evidence. Jung's framework is largely psychological and clinical. It is supported by decades of practitioner experience and has measurable therapeutic effects. Buddhist analysis is supported by 2,500 years of contemplative investigation across cultures and a growing body of modern neuroscience research on meditators. Advaita Vedanta is supported primarily by the testimony of its tradition and the experiences of practitioners, with less mainstream neuroscience research backing the specific metaphysical claims. None of this means any of them is wrong. It means the kind of evidence varies and you should know what evidence you're considering.`,
            `When you hear someone use the word "ego" from now on, ask yourself: which framework are they using? Are they using Jung's careful clinical version, or Buddhism's moment-by-moment construct, or Advaita's metaphysical I-maker, or some loose pop spirituality version that mashes all three together? The pop version often makes claims none of the three serious traditions would make. Knowing the difference is a real intellectual skill. In the perspectives screen, you will weigh in on which framework you find most compelling, knowing they aren't interchangeable.`,
          ],
          image: `/voyager-assets/inner-world/l12-s5-clarity.webp`,
          imageCaption: `Three frameworks, three claims, three kinds of evidence.`,
          vocab: [
            {
              word: `metaphysical claim`,
              definition: `A claim about the fundamental nature of reality, often beyond what can be tested empirically. Different from psychological or scientific claims about how something works.`,
              audioPrompt: `A metaphysical claim is a claim about the fundamental nature of reality, {name}. It is typically beyond what can be directly tested with empirical evidence. When Advaita Vedanta claims that atman is Brahman, that the deepest self is identical with the underlying reality of everything, that is a metaphysical claim. When Jung claims that integrating shadow material improves psychological health, that is a more empirical claim that can be tested clinically. The difference matters because metaphysical claims and empirical claims need different kinds of evaluation. Mixing them is a common source of confusion.`,
            },
          ,
            {
              word: `contemplative investigation`,
              definition: `The sustained, disciplined study of the mind through direct first-person inquiry, as in meditation traditions. Distinguished from empirical scientific investigation, though both are treated as sources of evidence.`,
              audioPrompt: `Contemplative investigation is the sustained, disciplined study of the mind through direct first-person inquiry, {name}. Meditation traditions represent thousands of years of this kind of work. The lesson notes that Buddhist analysis is supported by two thousand five hundred years of contemplative investigation across cultures, alongside growing neuroscience research on meditators. This differs from clinical psychology, which relies on controlled studies and measurable outcomes. Both count as evidence but they are different kinds and need to be evaluated accordingly. Knowing the kind of evidence behind a claim is part of evaluating it.`,
            },
            {
              word: `clinical evidence`,
              definition: `Evidence gathered through therapeutic practice and controlled research with real patients. The kind of evidence that backs the Jungian psychological framework, as distinct from contemplative or metaphysical support.`,
              audioPrompt: `Clinical evidence is evidence gathered through therapeutic practice and controlled research with real patients, {name}. The lesson distinguishes three kinds of evidence across the three frameworks. The Jungian framework is largely psychological and clinical, supported by decades of practitioner experience and measurable therapeutic effects. Buddhist analysis is supported by contemplative investigation and modern neuroscience. Advaita Vedanta is supported primarily by the testimony of its tradition and practitioner experiences. The kind of evidence varies and knowing that is part of evaluating any claim about the nature of the self.`,
            }
          ],
        },

        // ───── PERSPECTIVES ──────────────────────────────────────────────────
        {
          id: `l12-perspectives`,
          type: `perspectives`,
          headline: `Three Views On What's Under The Ego`,
          intro: `Three serious traditions, three definitions of ego, three claims about what lies deeper. Read each carefully. Weigh in.`,
          positions: [
            {
              id: `jungian`,
              label: `Jungian: a larger Self that includes ego and unconscious`,
              thinker: `Carl Jung and the analytical psychology tradition`,
              statement: `The ego is the conscious center of personality and is necessary for functioning. Underneath the ego is what Jung called the Self with a capital S: the totality of psyche including unconscious material. The work isn't to destroy the ego but to bring it into right relationship with the larger Self through individuation, a lifelong psychological process. This is clinically grounded and produces measurable therapeutic benefit.`,
            },
            {
              id: `buddhist`,
              label: `Buddhist: a constructed self-process that needs to be seen`,
              thinker: `Buddhist contemplative traditions across Asia, 2,500 years`,
              statement: `There is no fixed ego underneath, only the constant unconscious process of constructing a sense of separate self from thoughts, sensations, and memories. Suffering comes from over-investing in this construction. The work is to see the construction directly in meditation, again and again, until the grip loosens. You still function as a person; you just hold selfhood more lightly. Supported by 2,500 years of practice and modern neuroscience.`,
            },
            {
              id: `advaita`,
              label: `Advaita: an I-maker covering a true self identical with reality`,
              thinker: `Advaita Vedanta, Adi Shankara, Ramana Maharshi`,
              statement: `The ego is ahamkara, the I-maker that generates the conviction of separate selfhood. Underneath it is atman, the true self, which is ultimately identical with Brahman, the underlying reality of everything. The spiritual project is recognition: directly seeing that the true self was never separate. This is the most metaphysically ambitious claim of the three, supported by the testimony of the tradition and the experiences of its practitioners.`,
            },
          ],
          reflectionPrompt: `Which framework speaks to where you are now? Could you imagine sitting with a different framework in a year? Notice you don't have to pick one to be a clear thinker; you just need to know which one you're using when.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the original Latin meaning of "ego"?`,
              options: [
                `Pride`,
                `"I"`,
                `Soul`,
                `Mind`,
              ],
              correctIndex: 1,
              explanation: `Ego is simply Latin for "I." All the modern technical and pop meanings build from this basic word for the self that says "I think, I feel, I do."`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Jung mean by ego specifically?`,
              options: [
                `The bad parts of personality`,
                `The conscious center of personality that organizes everyday experience and a sense of being a particular person`,
                `The unconscious mind`,
                `The soul`,
              ],
              correctIndex: 1,
              explanation: `Jung's ego is the conscious "I" that organizes experience. It is necessary, not bad. The work for Jung is bringing it into right relationship with the larger Self.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Jung's "Self" with a capital S?`,
              options: [
                `The same as the ego`,
                `The totality of psyche including both conscious ego and unconscious material; the larger whole the ego is part of`,
                `God`,
                `Just self-esteem`,
              ],
              correctIndex: 1,
              explanation: `Jung distinguished ego (conscious I) from Self (the totality including unconscious). Individuation is the lifelong process of right relationship between them.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the Buddhist view of "ego"?`,
              options: [
                `It's a thing that needs to be destroyed`,
                `Buddhists don't use the Western word; they talk about the self-construct, the moment-by-moment process by which the mind builds an assumed solid separate self`,
                `Buddhists deny any self exists`,
                `It's the same as Jung's ego`,
              ],
              correctIndex: 1,
              explanation: `Buddhism's analysis is process-oriented. Not a thing to destroy but a process to see clearly. The Pali term anatta (not-self) reflects this.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does "let go of ego" actually mean in serious Buddhist practice?`,
              options: [
                `Have no personality or preferences`,
                `See the moment-by-moment construction of self clearly, again and again, until the grip of the assumption loosens; still function as a person but hold selfhood more lightly`,
                `Become passive`,
                `Memorize Buddhist texts`,
              ],
              correctIndex: 1,
              explanation: `Mature Buddhist practitioners still have names, preferences, and personalities. The "letting go" is of over-investment in a particular version of self, not of having a functional self.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is ahamkara in Advaita Vedanta?`,
              options: [
                `A meditation technique`,
                `The "I-maker," the mental function that generates the sense of separate individual selfhood`,
                `A bad spirit`,
                `A Hindu god`,
              ],
              correctIndex: 1,
              explanation: `Ahamkara is the I-maker. Without it, awareness would simply be aware. With it, awareness divides itself into "me" and "not-me." Advaita claims this division is functional but ultimately illusory.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does Advaita claim is under the I-maker?`,
              options: [
                `Nothing`,
                `Atman, the true self, which is ultimately identical with Brahman, the underlying reality of everything ("tat tvam asi"/you are that)`,
                `Just other thoughts`,
                `The body`,
              ],
              correctIndex: 1,
              explanation: `This is the most metaphysically ambitious of the three claims. The true self isn't separate; it's identical with the underlying reality of everything. Tat tvam asi.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does pop spirituality use of "ego" cause confusion?`,
              options: [
                `Pop spirituality is illegal`,
                `It mashes together Jungian, Buddhist, Advaita, and Freudian meanings without specifying, so people argue about "the ego" while meaning completely different things`,
                `Pop spirituality is the only correct framework`,
                `Pop spirituality invented ego`,
              ],
              correctIndex: 1,
              explanation: `The confusion isn't that pop spirituality exists. It's that "ego" gets used as a generic bad guy without specifying which serious framework is being drawn from. Knowing the difference is a real intellectual skill.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Jung, Buddhism, and Advaita Vedanta all mean exactly the same thing by "ego."`,
              correctAnswer: false,
              explanation: `False. They have related but importantly different framings. Jung: conscious center of personality. Buddhism: constant self-constructing process. Advaita: I-maker generating illusory separation. The differences matter.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A wellness influencer says "you need to dissolve your ego to find your true self." Based on this lesson, what should you ask?`,
              options: [
                `"Where do I sign up for your course?"`,
                `Dismiss them as fake`,
                `"Which framework are you using? Jung's ego, Buddhism's self-construct, Advaita's ahamkara, or a pop blend? Each is making different claims with different evidence. What specifically do you mean?"`,
                `Agree completely`,
              ],
              correctIndex: 2,
              explanation: `Real intellectual clarity. The question separates serious frameworks from the pop blur that doesn't specify. Real teachers can answer this. People reaching for spiritual-sounding language without depth often can't.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which framework matches how you've been thinking about your "self" before today? Which one might shift things?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Was it easier to engage with Jung, Buddhism, or Advaita? Why? What does that say about how you think?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you live as if Jung is right vs Buddhism is right vs Advaita is right, who do you become? Pick one and describe.` },
            { id: `reflect-application`, category: `Application`, prompt: `Listen for the word "ego" this week. Notice every time someone uses it. Which framework are they actually drawing from?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could all three frameworks be wrong in some important way? What might modern neuroscience or philosophy add that all three traditions missed?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Right now, try to find what each framework points to. Can you find your Jungian ego? Your Buddhist self-construct in process? Your Advaita I-maker? Just notice.` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The word "ego" gets used badly. You now have the framework to spot the difference. Two paths below to bring this lesson into actual life.`,
          familyActivity: {
            title: `The Word Audit`,
            duration: `30 minutes`,
            description: `At dinner tonight, share that you learned three serious frameworks for what "ego" means. Then have each family member describe what they personally mean by "ego" when they use the word. Don't correct anyone. Just notice. You will discover that family members are often using totally different meanings without knowing it. This single conversation will improve communication in your family. Knowing which "ego" anyone means is a quiet but powerful skill.`,
          },
          projectOption: {
            title: `Word Tracking, 2 weeks (optional)`,
            duration: `2 weeks, ~5 minutes per day`,
            description: `Every time you encounter the word "ego" for 14 days (in conversation, in books, in social media, in family talk), write down where you saw it and which framework you think the person was using. After 14 days, write 500 words: what patterns did you notice? Who uses the word carefully? Who uses it sloppily? Does anyone specify their framework? You'll find that almost no one specifies. You will be one of the few who can.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If most people use "ego" without knowing what they mean, what does it look like to be someone who actually knows?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows which "ego" a person means when they use the word.`,
            `A person who can hold three serious frameworks without confusing them.`,
            `Someone who notices when "spiritual" language has gone hollow.`,
          ],
          saveKey: `identity_responses_iw_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish Jung's ego from Buddhism's self-construct from Advaita's ahamkara, recognize when "ego" is being used without a clear framework, identify which kind of claim each tradition is making and what evidence backs it, and choose your own framework consciously. You are now clearer on this word than 99 percent of adults who throw it around. Next time we go straight into one of the most contested topics in this whole band: intention setting and manifestation. Real psychology vs viral magic. Source Evaluation format. See you there. — Sage`,
          badge: `ego-decoder`,
          badgeName: `Ego Decoder`,
          xpEarned: 75,
          competencies: [
            `Can distinguish Jungian ego, Buddhist self-construct, and Advaita ahamkara`,
            `Recognizes when "ego" is being used without a specific framework`,
            `Knows what kind of evidence backs each tradition`,
            `Has practiced applying frameworks to real-world usage of the word`,
            `Distinguishes psychological, contemplative, and metaphysical claims`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Manifestation — Real Psychology vs Viral Magic`,
            hook: `"Manifest your reality" is everywhere. Some of it is real psychology. Some is fantasy thinking. Three sources tell three stories. Your job: rank them honestly.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.positions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L12 ${VERSION}] "${l.title}" — ${mags} magazine, ${persp} perspectives, ${quiz} quiz, ${reflect} reflection`
  );
}
