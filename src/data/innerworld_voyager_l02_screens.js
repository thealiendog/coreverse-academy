// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L02 — The Philosophy of Self
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Philosophy of Mind, Personal Identity
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ANNOTATE (Hume's 1739 introspection passage)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l02-v2";

const INNERWORLD_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-02`,
      title: `The Philosophy of Self`,
      duration: 35,
      xpReward: 75,
      badge: `self-investigator`,
      badgeName: `Self Investigator`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, hold this question for a second before you answer. When you say 'I', what exactly are you pointing at? Your body? Your thoughts? Your memories? Your personality? Some core that has been you since you were a baby? Try to actually find the thing you mean by 'I' and you might notice something strange. The harder you look, the harder it gets to grab. Today we walk into one of the oldest questions in philosophy. Is the self real, or is it something your brain constructs?`,
          headline: `The Philosophy of Self`,
          subtitle: `Is the 'you' having this experience real?`,
          visual: `/voyager-assets/inner-world/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Cogito, Ergo Sum`,
          paragraphs: [
            `In 1637, French philosopher René Descartes was trying to figure out what he could be absolutely certain of. He started doubting everything. Could his senses be lying? Yes, dreams feel real. Could his memories be false? Possibly. Could math itself be wrong? Maybe some evil demon was deceiving him. But then he hit something he could not doubt away.`,
            `'I think, therefore I am.' (In Latin: cogito, ergo sum.) Even if everything else was an illusion, the very act of doubting proved there was a doubter. There was a thinker doing the thinking. That thinker, Descartes argued, was the self. The mind. The 'I.' Solid. Foundational. The starting point of all knowledge.`,
            `For three hundred years, this was the dominant Western view of the self. The mind is real, separate from the body, and the seat of who you are. Your body changes, your thoughts come and go, but the I that has them is steady. It is the captain of the ship. It is you. Most people today, without ever reading Descartes, still operate as if this is true. But starting in the 1700s, philosophers began questioning it. And the questions got serious.`,
          ],
          image: `/voyager-assets/inner-world/l02-s1-descartes.webp`,
          imageCaption: `Descartes (1596-1650) made the thinking self the foundation of certainty.`,
          vocab: [
            {
              word: `cogito ergo sum`,
              definition: `Latin for 'I think, therefore I am.' Descartes' argument that the act of thinking proves the existence of a self doing the thinking.`,
              audioPrompt: `Cogito ergo sum is Latin for 'I think, therefore I am,' {name}. It is Descartes' attempt to find the one thing he could not doubt. He noticed that even doubting required a doubter. Even being deceived required someone to be deceived. So the existence of a thinking self seemed undeniable. This idea is so deep in Western culture that most people assume it without ever questioning it. You feel like a steady 'I' watching your life happen. But notice that Descartes was making an argument, not reporting an observation. He inferred a self from the act of thinking. What if the inference is wrong?`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Hume's Bundle`,
          paragraphs: [
            `In 1739, Scottish philosopher David Hume tried to do what Descartes claimed was easy: introspect and find the self. Look inside yourself, he said, and try to actually locate the thing you call 'I.' Hume reported what he found, and it was shocking.`,
            `He could find sensations: warmth, sounds, the pressure of his chair. He could find emotions: curiosity, boredom, hunger. He could find thoughts arising one after another. But he could not find any underlying self that all these things belonged to. He could only find the sensations, the thoughts, the feelings themselves. The 'I' that supposedly had them was missing.`,
            `Hume proposed that the self is not a thing but a bundle. A bundle of perceptions, memories, emotions, and thoughts that are rapidly succeeding each other. The feeling of being a continuous 'I' is a kind of illusion that arises when these things flow together smoothly. There is no captain of the ship, Hume argued. There is just the stream of experience itself, and we call that stream a self.`,
          ],
          image: `/voyager-assets/inner-world/l02-s2-hume.webp`,
          imageCaption: `Hume looked inside and found a bundle, not a self.`,
          vocab: [
            {
              word: `bundle theory`,
              definition: `Hume's view that the self is not a unified thing but a collection of perceptions, thoughts, and feelings flowing together.`,
              audioPrompt: `Bundle theory is Hume's view that the self is not one unified thing, {name}. It is a collection of perceptions, thoughts, and feelings flowing together so smoothly that we mistake them for a single 'I.' Try Hume's experiment right now. Close your eyes for a moment. Try to find the self that is supposedly having your experiences. Can you locate it directly? Most people, when they actually try, find what Hume found. Thoughts. Sensations. Feelings. But no separate observer of those things. The observer seems to be made of the same stuff as the things observed. That is bundle theory.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Anatta: The Eastern Discovery`,
          paragraphs: [
            `Twenty-three hundred years before Hume, the Buddha reached a similar conclusion through a different method. He didn't argue his way to it. He sat down, paid extremely close attention to his own experience for years, and reported what he found. The Buddhist term is anatta, usually translated as 'no-self' or 'non-self.'`,
            `Buddhist teaching identifies what they call the five aggregates that make up what we call a person: form (the body), feelings, perceptions, mental formations (thoughts, intentions), and consciousness. The claim is that if you investigate carefully, you cannot find a separate self behind these five. The self is made of these five and only these five. When you stop seeing them as belonging to a 'me' and just see them as what they are, something shifts.`,
            `This is not a depressing claim. Buddhist teachers across 2,300 years have argued the opposite. The belief in a fixed, separate self is what causes most suffering. When you cling to 'I,' you have something to defend, something to protect, something to lose. When you investigate and find the I is more flexible than you thought, the grip loosens. The teaching is not that you don't exist. It is that what you call 'you' is more like a river than a stone.`,
          ],
          image: `/voyager-assets/inner-world/l02-s3-anatta.webp`,
          imageCaption: `Anatta, the Buddhist investigation of self, 2,300 years old.`,
          vocab: [
            {
              word: `anatta`,
              definition: `Pali word usually translated 'no-self' or 'non-self.' The Buddhist insight that no fixed, separate self can be found through direct investigation.`,
              audioPrompt: `Anatta is a Pali word usually translated as 'no-self' or 'non-self,' {name}. It comes from the Buddha's investigation of his own experience over many years of meditation. Anatta does not claim you do not exist. It claims that what you call 'you' is not the fixed, separate thing you assume it is. It is more like a river. The water is real, the flow is real, but you cannot point at one specific water-thing and call it the river. You are real, but the I you imagine doing the experiencing is more like a process than an object. Notice how strange this idea feels at first.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What the Brain Scanners Show`,
          paragraphs: [
            `In the 2000s, neuroscientists started looking for the self in the brain. They scanned people's brains while they did tasks that should involve a 'self': remembering personal memories, imagining themselves in the future, distinguishing their own thoughts from others. They expected to find one specific brain region that was the seat of self. They did not.`,
            `What they found instead was a network. The Default Mode Network (DMN), discovered by neuroscientist Marcus Raichle in 2001, is a set of brain regions that activate when you are not focused on a task. It activates when your mind wanders, when you imagine your future, when you reflect on your past, when you think about yourself. The DMN is what generates the constant inner narrative of being you. And here is the strange part. It can quiet down.`,
            `Studies of experienced meditators (including work by Judson Brewer at Yale) show the DMN can be reduced through practice. People who report years of meditation experience show measurably less DMN activity. They also report a different relationship to the self. Not absence (they still know their name, they can still find their car). But the sense of being a fixed, defended I quiets down. The brain science is starting to catch up with what philosophers and contemplatives have been saying for centuries.`,
          ],
          image: `/voyager-assets/inner-world/l02-s4-neuroscience.webp`,
          imageCaption: `The Default Mode Network, where the brain builds the feeling of self.`,
          vocab: [
            {
              word: `Default Mode Network`,
              definition: `A brain network active when you are not focused on a task. Generates the inner narrative of self. Identified by Marcus Raichle in 2001.`,
              audioPrompt: `The Default Mode Network is a network of brain regions active when you are not focused on a task, {name}. It is what fires when your mind wanders, when you remember your childhood, when you imagine your future, when you think about yourself. Neuroscientists call it the Default Mode because it is what your brain defaults to in the absence of demands. Here is what is interesting. Meditation can quiet the Default Mode Network. The feeling of being a separate, defended self seems to be partly something the brain does, and it can be done less. What might change if your DMN was a little quieter than it is right now?`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why This Matters For Who You're Becoming`,
          paragraphs: [
            `You are at the exact age when the self starts feeling like a big deal. Puberty is reshaping your body. Friends and identity are becoming central. You're starting to ask questions like 'Who am I really?' and 'Who am I going to be?' These questions are about to consume a lot of your life. Whether you take them seriously or not is partly up to you.`,
            `Here is the practical use of philosophy of self. If you believe in a fixed self, every challenge to it feels like an attack. If someone disagrees with you, you defend. If you fail at something, you take it as evidence about who you are. If you change, you feel like you've betrayed your 'real self.' The fixed-self view is fragile. It cracks under pressure.`,
            `If you take the more flexible view (Hume, Buddhism, modern neuroscience), you have more room. You can be different in different contexts. You can change without panic. You can hold criticism without falling apart. You can grow. The self becomes something you participate in shaping rather than something you have to protect. That doesn't mean you become a different person every day. It means you stop needing the I to be more solid than it actually is.`,
          ],
          image: `/voyager-assets/inner-world/l02-s5-becoming.webp`,
          imageCaption: `A flexible self has more room to grow.`,
          vocab: [
            {
              word: `identity flexibility`,
              definition: `The capacity to hold your sense of self loosely enough to grow, learn from criticism, and change without feeling threatened.`,
              audioPrompt: `Identity flexibility is the capacity to hold your sense of self loosely enough to grow, {name}. People with high identity flexibility can take in criticism without falling apart. They can change their mind without feeling like they betrayed themselves. They can be different in different contexts (more playful with friends, more focused at school) without feeling fragmented. The opposite is identity rigidity, where every challenge feels like an existential threat. Research is starting to show identity flexibility is associated with better mental health and learning outcomes. It is also a skill you can practice. What would shift if you took your self less seriously, not as a joke, but as a possibility?`,
            },
          ],
        },

        {
          id: `l02-annotate`,
          type: `annotate`,
          headline: `Hume's Words, Up Close`,
          intro: `This is one of the most famous passages in Western philosophy. Hume wrote it in 1739, almost 300 years ago. Read it slowly. Then tag what each part is doing. There is more than one defensible reading. Be honest about what you actually see.`,
          sourceCitation: `David Hume, A Treatise of Human Nature (1739), Book I, Part IV, Section VI`,
          passage: [
            `For my part, when I enter most intimately into what I call myself, I always stumble on some particular perception or other, of heat or cold, light or shade, love or hatred, pain or pleasure.`,
            `I never can catch myself at any time without a perception, and never can observe anything but the perception.`,
            `When my perceptions are removed for any time, as by sound sleep, so long am I insensible of myself, and may truly be said not to exist.`,
            `And were all my perceptions removed by death, I should be entirely annihilated.`,
            `I may venture to affirm of the rest of mankind, that they are nothing but a bundle or collection of different perceptions, which succeed each other with an inconceivable rapidity, and are in a perpetual flux and movement.`,
          ],
          labels: [
            { id: `evidence-from-experience`, label: `Evidence from direct experience`, color: `#4ade80` },
            { id: `philosophical-method`, label: `His philosophical method (introspection)`, color: `#60a5fa` },
            { id: `strong-claim`, label: `Strong universal claim`, color: `#f97316` },
            { id: `assumption`, label: `Hidden assumption`, color: `#a78bfa` },
            { id: `conclusion`, label: `Conclusion / theory statement`, color: `#fbbf24` },
          ],
          annotationPrompts: [
            {
              targetSentenceIndex: 1,
              prompt: `You probably labeled sentence 2 ("I never can catch myself...") as either Strong Universal Claim or Evidence. In 2-3 sentences, defend your choice. What's the difference, and which is it really?`,
            },
            {
              targetSentenceIndex: 4,
              prompt: `Sentence 5 says ALL of mankind is "nothing but a bundle." That's a huge leap from his personal introspection. What's the move he's making here, and is it justified?`,
            },
          ],
          expertAnnotation: [
            {
              sentenceIdx: 0,
              label: `Evidence from direct experience`,
              note: `Hume is reporting what he actually finds when he tries to introspect. This is the empiricist move: ground claims in what experience actually shows.`,
            },
            {
              sentenceIdx: 1,
              label: `Strong universal claim`,
              note: `"I never can" and "never can observe anything but" are universal claims based on his own introspection. He's saying the result is consistent across every attempt. Whether that justifies a universal claim is debatable.`,
            },
            {
              sentenceIdx: 2,
              label: `Philosophical method (introspection)`,
              note: `He's pushing his method to a striking conclusion. When perceptions stop (deep sleep), so does the self. This shows his commitment to the introspective method: if you can't find it, it isn't there.`,
            },
            {
              sentenceIdx: 3,
              label: `Conclusion / theory statement`,
              note: `Drawing out the logical consequence. If the self is just perceptions, no perceptions means no self. This is what bundle theory commits him to.`,
            },
            {
              sentenceIdx: 4,
              label: `Strong universal claim`,
              note: `The big move. He generalizes from his own introspection to "all of mankind." Whether this generalization is justified is exactly the kind of question philosophers debate.`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What did Descartes mean by 'I think, therefore I am'?`,
              options: [
                `Thinking makes you smarter than other beings`,
                `The act of thinking proves there is a thinker; the self cannot be doubted away`,
                `You should think more carefully before making decisions`,
                `The mind is the same as the body`,
              ],
              correctIndex: 1,
              explanation: `Descartes was looking for something he could not doubt. He realized that even doubting required a doubter. The very act of thinking proved a thinking self existed.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `When Hume looked inside himself to find the self, what did he report finding?`,
              options: [
                `A unified, eternal soul`,
                `A clear central self with thoughts orbiting around it`,
                `Sensations, thoughts, and feelings, but no separate self behind them`,
                `Nothing at all, pure emptiness`,
              ],
              correctIndex: 2,
              explanation: `Hume's report: he found experiences (sensations, thoughts, feelings) but could not find any separate self that owned them. This led to bundle theory.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Bundle theory and Buddhist anatta agree on a major point. What is it?`,
              options: [
                `The self is a fixed, eternal thing`,
                `No fixed, separate self can be found through direct investigation`,
                `The self is created entirely by language`,
                `Only experienced meditators can find the true self`,
              ],
              correctIndex: 1,
              explanation: `Both Hume (Western philosophy) and Buddhism (Eastern contemplative tradition) arrived at similar conclusions through different methods: investigation does not find a separate self.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the Default Mode Network (DMN)?`,
              options: [
                `A specific brain region that contains the self`,
                `The brain's setting when sleeping`,
                `A brain network that activates when you are not focused on a task and generates the inner narrative of self`,
                `A meditation technique`,
              ],
              correctIndex: 2,
              explanation: `The DMN was identified by Marcus Raichle in 2001. It activates during mind-wandering, self-reflection, and imagining the future, and generates the constant inner narrative of being you.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What do studies of experienced meditators show about the DMN?`,
              options: [
                `It grows larger and more active`,
                `It can be reduced or quieted through practice`,
                `It disappears completely`,
                `It only exists in non-meditators`,
              ],
              correctIndex: 1,
              explanation: `Studies by Judson Brewer and others show experienced meditators have measurably reduced DMN activity. They still function normally, but the constant inner self-narrative quiets down.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Anatta does NOT mean:`,
              options: [
                `That you don't exist at all`,
                `That the self is more like a process than a fixed thing`,
                `That investigation does not find a separate, unchanging self`,
                `That clinging to a fixed self causes suffering`,
              ],
              correctIndex: 0,
              explanation: `Anatta is often translated 'no-self' but does NOT mean nonexistence. It means the self is not the fixed, separate thing we assume. You exist, but the way you imagine the I is more rigid than reality.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why might identity flexibility be useful at age 11-12 specifically?`,
              options: [
                `Because puberty makes you a different person each year`,
                `Because you can hold criticism, growth, and change without feeling like you're betraying yourself`,
                `Because schools require you to be flexible`,
                `Because flexibility makes you popular`,
              ],
              correctIndex: 1,
              explanation: `Identity becomes a central preoccupation at this age. A flexible self can integrate change, criticism, and growth. A rigid self defends every challenge as an attack.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `In Hume's 1739 passage, when he says "I may venture to affirm of the rest of mankind, that they are nothing but a bundle...", what move is he making?`,
              options: [
                `Reporting a scientific experiment he ran on others`,
                `Generalizing from his own introspection to all humans`,
                `Quoting another philosopher`,
                `Making a religious claim`,
              ],
              correctIndex: 1,
              explanation: `Hume generalizes from his personal introspective experience to a universal claim about all of mankind. Whether the generalization is justified is exactly the kind of question philosophers debate.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Modern neuroscience has identified one specific brain region that is the seat of the self.`,
              correctAnswer: false,
              explanation: `False. Neuroscience has not found a 'self region.' It has found a network (the DMN) that generates the feeling of self, but the self is not localized in one place. This is consistent with bundle theory and anatta.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `If someone deeply believes in a fixed self and someone deeply believes in bundle theory, who would likely have an easier time admitting they were wrong about something important?`,
              options: [
                `The fixed-self believer, because they have a stable identity to fall back on`,
                `The bundle theorist, because changing a belief doesn't threaten an underlying I`,
                `It would be exactly the same for both`,
                `Neither, they'd both refuse to admit being wrong`,
              ],
              correctIndex: 1,
              explanation: `For the fixed-self believer, being wrong threatens the I. For the bundle theorist, being wrong is just one thought in the bundle changing, no foundational self is under attack. The bundle view makes intellectual honesty easier.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which view of the self surprised you most? Did anything shift in how you think about who you are?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you try to find your own self right now, what happens? What's confusing? What would you need to investigate longer?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Which version of yourself do you usually defend most fiercely? What might soften if you took the bundle view seriously?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think about a recent time you got criticized or failed at something. How would each view (fixed self vs bundle self) handle that situation?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest argument against bundle theory or anatta? Is there something Descartes might have been right about that the others miss?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Try Hume's experiment right now. Look inside for the self that's reading these words. What do you actually find? Be honest.` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The philosophy of self isn't something you read about once and put down. It's something you live differently when you take it seriously. Two paths below: a family conversation to anchor this week's lesson, and an optional 2-week practice if you want to go further.`,
          familyActivity: {
            title: `The Three Selves Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, each family member describes themselves three ways. First, the 'one-word' self: pick one word that captures who you are right now. Second, the 'changing' self: describe one way you're different than you were three years ago. Third, the 'becoming' self: describe one thing you want to be true about yourself in three years. Then everyone discusses: are these three selves the same person? Do you feel more like a steady I across time, or more like a bundle that's been continuously rearranging? Listen carefully to how each family member talks about themselves. You'll notice some defend the steady self and some lean toward the bundle, and you'll see how that shapes how they live.`,
          },
          projectOption: {
            title: `The Self Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Every day for 14 days, do a 5-minute investigation. Sit somewhere quiet. Try to locate the self, the I that's having your experiences. Don't believe it's there because Descartes said so. Don't believe it's not because Hume said so. Just look, honestly, and see what you actually find. After each investigation, write 2-3 sentences in a journal: what did you find today? Did it match yesterday? At the end of 14 days, write a 500-word essay on what your investigation revealed. This is the same investigation contemplatives have done for thousands of years. You're doing real philosophy, not reading about it.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If the self is more flexible than you assumed, who could you become that you've been afraid to?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who doesn't have to defend who I am because I'm not as fixed as I thought.`,
            `A person who can change my mind without feeling like I betrayed myself.`,
            `Someone investigating who I am instead of just assuming I already know.`,
          ],
          saveKey: `identity_responses_iw_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain three serious views of the self (Descartes' substance self, Hume's bundle, Buddhist anatta), describe what the Default Mode Network is and how meditation affects it, and articulate why identity flexibility matters for your actual life. You also read Hume's actual words from 1739 and analyzed them closely. That is real philosophy. Most adults have never done this work. You're starting young. Next time we go deeper into a related question Carl Jung spent his whole life on: the shadow self, the parts of you that you don't want to look at, and what they have to teach you. See you there. — Sage`,
          badge: `self-investigator`,
          badgeName: `Self Investigator`,
          xpEarned: 75,
          competencies: [
            `Can explain Descartes' substance self and the cogito argument`,
            `Can describe Hume's bundle theory and the introspective evidence for it`,
            `Can articulate Buddhist anatta and how it differs from nonexistence`,
            `Can describe the Default Mode Network and what meditation does to it`,
            `Has analyzed a primary philosophical text from 1739`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Carl Jung and the Shadow Self`,
            hook: `Carl Jung argued that the parts of yourself you reject become the parts that secretly run you. What's hiding in your shadow?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const annotate = l.screens.find((s) => s.type === `annotate`)?.passage?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, ${annotate}-sentence annotate, ${quiz} quiz, ${reflect} reflection`
  );
}
