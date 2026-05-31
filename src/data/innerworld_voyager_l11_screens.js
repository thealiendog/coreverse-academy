// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L11 — Emotional Alchemy: Your "Bad" Feelings As Information
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Emotional Intelligence, Internal Family Systems
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ANNOTATE (excerpt from Richard Schwartz's Internal Family Systems writing)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l11-v1";

const INNERWORLD_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-11`,
      title: `Emotional Alchemy: Your "Bad" Feelings As Information`,
      duration: 35,
      xpReward: 75,
      badge: `emotion-translator`,
      badgeName: `Emotion Translator`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, you've been told your whole life that some emotions are good and some are bad. Happy is good. Sad is bad. Calm is good. Angry is bad. We push the bad ones down or try to talk ourselves out of them. Today we look at a different model. What if your "bad" emotions aren't problems? What if they're messages, each carrying specific information about something that matters to you? This is the central claim of Internal Family Systems, a modern therapy approach developed by Richard Schwartz that has become one of the most respected emotion frameworks in psychology. Today we will read directly from one of his foundational texts. We will analyze it closely. By the end you will think differently about every "bad" emotion you have.`,
          headline: `Emotional Alchemy`,
          subtitle: `What if "bad" emotions are information you need?`,
          visual: `/voyager-assets/inner-world/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Standard Model: Emotions As Problems`,
          paragraphs: [
            `Most kids grow up with what we'll call the standard emotional model. Good emotions (happiness, calm, gratitude, love) are signs that things are going well. Bad emotions (anger, sadness, fear, envy, shame) are signs that something is wrong and needs to be fixed. The job is to maximize the good ones and minimize the bad ones. This model is everywhere: in family conversations, in school, in pop psychology, in social media.`,
            `Under this model, when you feel angry, the message is "calm down." When you feel sad, the message is "cheer up." When you feel jealous, the message is "you shouldn't feel that way." The emotion itself is treated as the problem to solve. People who can stay in the "good" emotions are seen as emotionally healthy. People who frequently visit the "bad" ones are seen as needing help.`,
            `This model produces a specific pattern in people who follow it. They suppress, hide, or talk themselves out of half their emotional life. The suppressed emotions don't disappear. They go underground (which is exactly what Jung described as the shadow, two lessons back). They come out sideways, in bursts, in self-sabotage, in projection onto others. The standard model, taken seriously, makes people emotionally narrower over time. Many adults you know are running this model. Some are doing well. Many are quietly miserable.`,
          ],
          image: `/voyager-assets/inner-world/l11-s1-standard.webp`,
          imageCaption: `The standard model: half your feelings are problems to fix.`,
          vocab: [
            {
              word: `emotional suppression`,
              definition: `The act of pushing down or hiding emotions, especially "negative" ones. Strongly associated in research with worse mental health over time.`,
              audioPrompt: `Emotional suppression is the act of pushing down or hiding emotions, {name}. Especially the emotions you've been taught are "bad." Suppression doesn't make emotions go away. Research consistently shows that suppressed emotions still affect your body, behavior, and stress levels, often more than acknowledged emotions. Long-term suppression is associated with worse physical and mental health. The standard emotional model trains people to suppress. The alternative we're going to explore today says: don't suppress. Listen.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `An Alternative: Emotions As Messengers`,
          paragraphs: [
            `In the 1980s, a family therapist named Richard Schwartz developed a different approach. He noticed that his patients often described experiencing themselves as multiple inner parts. "Part of me wants to go, part of me wants to stay." "There's a part of me that's angry, and another part that's afraid to admit it." Schwartz took this seriously instead of dismissing it as metaphor.`,
            `He developed Internal Family Systems (IFS), now one of the most respected therapy approaches in modern psychology. The core claim: you are not one unified self. You are a system of inner parts, each with its own perspective, feelings, and intentions. Some parts are protective. Some are wounded. Some are protective of wounded parts. Underneath all of them is what Schwartz calls Self, your core awareness, which has natural qualities like curiosity, compassion, and calm.`,
            `Under this model, "bad" emotions aren't problems. They are parts of you trying to communicate. Anger is usually a protector part, alerting you to a boundary being crossed or a value being violated. Sadness is often a part registering a real loss that needs acknowledgment. Fear is a part scanning for threat. Jealousy is a part noticing something you want but haven't admitted wanting. The emotion is the message. Suppressing it just silences the messenger.`,
          ],
          image: `/voyager-assets/inner-world/l11-s2-parts.webp`,
          imageCaption: `Internal Family Systems: you are a system of parts, each with information.`,
          vocab: [
            {
              word: `Internal Family Systems`,
              definition: `A therapy approach developed by Richard Schwartz in the 1980s. Treats the psyche as a system of inner "parts," each with valid intentions, organized around a core "Self" with natural qualities of curiosity and compassion.`,
              audioPrompt: `Internal Family Systems, often called IFS, is a therapy approach developed by Richard Schwartz in the 1980s, {name}. It is one of the most respected and widely used modern psychotherapies. The core idea is that you aren't one unified self. You are a system of inner parts, each with its own perspective and intention. None of them is bad. Some are wounded. Some are protective. Underneath them is what Schwartz calls Self, your core awareness, which has qualities like curiosity, compassion, and calm. IFS has been adopted by therapists worldwide and has strong clinical evidence for treating trauma, anxiety, and depression.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Each "Bad" Emotion Is Telling You`,
          paragraphs: [
            `Let's get specific. Anger, under the IFS model, is almost always a protector. It activates when something you value is being threatened or when a boundary is being crossed. The job of anger isn't to be acted on directly. The job of anger is to bring information to your attention: "Something I care about is at stake here." Without anger, you wouldn't notice. The mature move isn't to suppress anger or to act on it impulsively. The mature move is to ask: what is this anger protecting?`,
            `Sadness usually registers a real loss. A friendship that's not what it was. A version of yourself you've outgrown. A situation that didn't go the way you hoped. The message of sadness is "this mattered." Suppressing it is essentially refusing to acknowledge that something real was lost. Allowing it, fully, is part of how loss integrates instead of festering. People who can be sad about real things process loss faster, not slower, than people who push it down.`,
            `Fear scans for threat. The vast majority of fear is overcalibrated for the actual modern environment (your nervous system was built for predators, not for social anxiety), but it's still pointing at something. Curiosity about fear, rather than judgment of it, often reveals what your nervous system thinks is dangerous. Sometimes it's correctly identifying a real threat. Sometimes it's holding old data from earlier in your life. Either way, the information matters. Jealousy reveals something you want but haven't admitted wanting. Shame reveals where you've internalized a rule you may not actually agree with. Every "bad" emotion has a message worth reading.`,
          ],
          image: `/voyager-assets/inner-world/l11-s3-messages.webp`,
          imageCaption: `Each emotion: a specific kind of information your system is offering.`,
          vocab: [
            {
              word: `protector part`,
              definition: `In IFS, an inner part whose job is to keep you safe by reacting to threats or vulnerabilities. Anger, anxiety, and perfectionism are often protector parts.`,
              audioPrompt: `A protector part, in Internal Family Systems, is an inner part whose job is to keep you safe, {name}. Anger is often a protector. So is anxiety. So is perfectionism. So is the part that pushes people away when you feel vulnerable. Protector parts are not bad. They developed because they served a purpose at some point. The work isn't to fight them. The work is to thank them for their service and ask what they're protecting underneath. Often the answer is a younger wounded part that needs different care. Treating protectors as enemies misses what they're actually doing for you.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Happens When You Actually Listen`,
          paragraphs: [
            `Schwartz developed a specific way of working with parts. Instead of fighting them or suppressing them, you turn toward them with curiosity. You ask: "What are you protecting?" "What are you trying to tell me?" "What do you need?" This sounds strange the first few times. Many therapists who first encountered IFS were skeptical until they tried it with their patients and saw what happened.`,
            `What happens, consistently, is that parts respond. They become less intense once they feel heard. The angry part doesn't need to keep shouting if you genuinely listen to what it's protecting. The anxious part doesn't need to keep scanning if you take seriously what it's worried about. The shamed part doesn't need to keep hiding if you treat it with the compassion it never got. This isn't woo. This is now mainstream therapy, used by thousands of trained therapists.`,
            `The deeper insight: most of your "bad" emotions are caused by parts that have never been listened to, often since childhood. They're not bad emotions. They're parts of you that have been carrying difficult feelings alone, sometimes for years. When you turn toward them with the qualities Schwartz calls Self-energy (curiosity, compassion, calm, courage), they often shift dramatically. Not by being argued with. By being met.`,
          ],
          image: `/voyager-assets/inner-world/l11-s4-listen.webp`,
          imageCaption: `Most "bad" emotions are parts that have never been listened to.`,
          vocab: [
            {
              word: `Self-energy`,
              definition: `In IFS, the quality of awareness that's curious, compassionate, calm, and courageous. The state from which you can effectively engage with your inner parts.`,
              audioPrompt: `Self-energy, in Internal Family Systems, is the quality of awareness that's curious, compassionate, calm, and courageous, {name}. Schwartz claims this isn't a state you have to manufacture. It is your natural core, underneath the activity of all your parts. When you can access it, even partially, you can engage with even your most difficult inner parts effectively. They feel heard. They calm down. This is one of the most striking claims of IFS: you don't have to fight your inner critic or your anxiety. You have to access the part of you that's underneath them and meet them from there.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Read The Text`,
          paragraphs: [
            `In a moment you will read a 5-sentence passage by Richard Schwartz, the founder of Internal Family Systems. The passage is from his book No Bad Parts, published in 2021. Your job is to annotate what each sentence is doing. This is the same skill you practiced with Hume in L02 and with the Brewer paper in L07. Reading a primary therapy text closely is a different exercise than reading either, but the basic moves are the same.`,
            `Watch for these specific moves in Schwartz's writing. A reframe statement: a sentence that's actively flipping a common assumption. A core claim: a sentence stating the central proposition of IFS. A practical implication: a sentence describing what this looks like in actual practice. A challenge to standard thinking: a sentence directly contradicting what most people believe. A compassionate stance: a sentence reflecting the tone of how IFS practitioners engage with parts.`,
            `Schwartz's writing has a particular tone. It's warm. It's specific. It often says directly what other therapy approaches imply. This is part of what made IFS distinctive and what made it land for many readers. As you annotate, notice not just what the sentences claim but how they say it. The tone is part of the message.`,
          ],
          image: `/voyager-assets/inner-world/l11-s5-prep.webp`,
          imageCaption: `Five sentences of real therapy theory. Five moves to spot.`,
          vocab: [
            {
              word: `reframe`,
              definition: `Presenting a familiar situation or concept from a different angle that changes its meaning. A central technique in many therapy approaches including IFS.`,
              audioPrompt: `A reframe is presenting a familiar situation from a different angle that changes its meaning, {name}. When you've been treating anger as a bad thing to suppress, and someone reframes it as a protector part with information, that's a reframe. The facts haven't changed. The meaning has. Reframes are powerful because they don't require new information. They require seeing existing information differently. Good therapists are skilled reframers. Good thinking in any area often involves recognizing when a useful reframe is available.`,
            },
          ],
        },

        // ───── ANNOTATE ───────────────────────────────────────────────────────
        {
          id: `l11-annotate`,
          type: `annotate`,
          headline: `Richard Schwartz, Up Close`,
          intro: `This passage is from the book No Bad Parts, where Richard Schwartz lays out the core claim of Internal Family Systems. Read it slowly. Then tag what each sentence is doing.`,
          sourceCitation: `Richard C. Schwartz, No Bad Parts: Healing Trauma and Restoring Wholeness with the Internal Family Systems Model (2021)`,
          passage: [
            `The core message of IFS is that there are no bad parts of you; all parts are doing their best to protect you in some way, even when their actions seem destructive.`,
            `This stands in sharp contrast to the standard view, which sees difficult emotions and impulses as problems to be eliminated or overcome.`,
            `What changes everything is approaching parts with curiosity rather than judgment, asking each one what it is trying to accomplish and what it needs.`,
            `In my clinical experience, parts almost always respond to genuine listening; they become less extreme as they feel heard.`,
            `The work, then, is not to fight yourself but to befriend the parts of yourself that have been carrying difficult roles, often since childhood.`,
          ],
          labels: [
            { id: `reframe`, label: `Reframe of common assumption`, color: `#4ade80` },
            { id: `core-claim`, label: `Core claim of IFS`, color: `#60a5fa` },
            { id: `practical-implication`, label: `Practical implication / what to do`, color: `#a78bfa` },
            { id: `challenge`, label: `Challenge to standard thinking`, color: `#f97316` },
            { id: `compassionate-stance`, label: `Compassionate stance / tone`, color: `#fbbf24` },
          ],
          annotationPrompts: [
            {
              targetSentenceIndex: 0,
              prompt: `Sentence 1 makes a strong universal claim: "no bad parts of you." In 2-3 sentences, what's the move he's making here? What does claiming "no bad parts" do compared to "most parts are okay"?`,
            },
            {
              targetSentenceIndex: 3,
              prompt: `Sentence 4 says parts "almost always respond to genuine listening." In 2-3 sentences, what's the difference between this claim and a stronger claim like "parts always respond"? Why might Schwartz have chosen the more hedged version?`,
            },
          ],
          expertAnnotation: [
            {
              sentenceIdx: 0,
              label: `Core claim of IFS`,
              note: `This is THE core proposition. "No bad parts" is the radical reframe at the heart of IFS. Notice the structure: he's not just saying "be kind to your parts," he's making a stronger claim that ALL parts have protective intentions. This is the foundational claim everything else builds on.`,
            },
            {
              sentenceIdx: 1,
              label: `Challenge to standard thinking`,
              note: `Directly names what he's arguing against: "the standard view, which sees difficult emotions and impulses as problems to be eliminated." This is the reframe being made explicit. He's positioning IFS in opposition to the dominant approach. Notice the diplomatic but firm tone.`,
            },
            {
              sentenceIdx: 2,
              label: `Practical implication / what to do`,
              note: `Specific practical instruction: "approaching parts with curiosity rather than judgment." This is what you actually do under the IFS model. The "what to do" sentence is critical because reframes without practical application stay abstract.`,
            },
            {
              sentenceIdx: 3,
              label: `Reframe of common assumption`,
              note: `Could also be labeled compassionate stance. The empirical claim ("parts almost always respond to genuine listening") is offered with the hedging word "almost." Notice he's not promising 100%. This is honest. Compare to a wellness influencer who would say "parts ALWAYS respond." The hedging is part of why IFS is respected.`,
            },
            {
              sentenceIdx: 4,
              label: `Compassionate stance / tone`,
              note: `The summary that captures the IFS attitude: "not to fight yourself but to befriend the parts of yourself." This is both the practical instruction AND the tone of IFS work. The word "befriend" is doing a lot of work. It's specific, warm, and clearly contrasted with "fight."`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "standard emotional model" the lesson critiques?`,
              options: [
                `That emotions don't exist`,
                `That good emotions should be maximized and bad emotions minimized or fixed; emotions themselves are treated as problems`,
                `That all emotions are the same`,
                `That emotions are just chemicals`,
              ],
              correctIndex: 1,
              explanation: `The standard model treats half your emotional life as problems to fix. Good = signs things are going well. Bad = signs something is wrong. This produces emotional suppression.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Who developed Internal Family Systems and when?`,
              options: [
                `Sigmund Freud, 1900`,
                `Carl Jung, 1925`,
                `Richard Schwartz, 1980s`,
                `Carl Rogers, 1960s`,
              ],
              correctIndex: 2,
              explanation: `Richard Schwartz developed IFS in the 1980s. It's now one of the most respected therapy approaches in modern psychology, used by thousands of trained therapists worldwide.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the IFS view of "bad" emotions?`,
              options: [
                `They should be eliminated`,
                `They're not bad; they're parts of you trying to communicate, each carrying specific information`,
                `They're caused by chemical imbalances`,
                `They don't really exist`,
              ],
              correctIndex: 1,
              explanation: `The IFS reframe: anger, sadness, fear, jealousy, shame are all messages from parts of you. The job isn't to suppress them or fix them. The job is to listen to what they're saying.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is anger usually doing, in the IFS model?`,
              options: [
                `Being irrational`,
                `Acting as a protector, alerting you to a boundary being crossed or a value being threatened`,
                `Trying to ruin your life`,
                `Lowering your IQ`,
              ],
              correctIndex: 1,
              explanation: `Anger is almost always a protector part. The job isn't to suppress it or act on it impulsively. The job is to ask: what is this anger protecting? What value or boundary is at stake?`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "Self-energy" in IFS?`,
              options: [
                `A physical energy in the body`,
                `The quality of awareness that's curious, compassionate, calm, and courageous; the state from which you can effectively engage with your inner parts`,
                `A type of caffeine`,
                `Anger`,
              ],
              correctIndex: 1,
              explanation: `Self-energy is Schwartz's term for the core awareness underneath your parts. Curiosity, compassion, calm, courage are its natural qualities. You don't have to manufacture it; you access it.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does Schwartz mean by "no bad parts"?`,
              options: [
                `That every emotion is good`,
                `That all your inner parts are doing their best to protect you in some way, even when their actions seem destructive; none of them is fundamentally bad`,
                `That you shouldn't feel guilt`,
                `That nothing is ever wrong`,
              ],
              correctIndex: 1,
              explanation: `This is the foundational IFS claim. Even parts whose actions are destructive (like a part that pushes people away or attacks you internally) are trying to serve some protective function. Understanding the function is the work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is hedging language important in Schwartz's writing ("parts almost always respond")?`,
              options: [
                `Because he's not sure of his work`,
                `Because honest scientific and clinical writing acknowledges that effects aren't 100% guaranteed; this is what distinguishes credible therapy from wellness overpromising`,
                `Because he's afraid of being sued`,
                `Because it sounds more poetic`,
              ],
              correctIndex: 1,
              explanation: `The "almost always" instead of "always" is exactly the hedging that signals credible clinical work. A wellness blog promising guaranteed results is suspect for this reason.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does it mean to "befriend" a part of yourself in IFS?`,
              options: [
                `To agree with everything it says`,
                `To approach it with curiosity, take its protective intention seriously, and listen to what it's actually trying to communicate, instead of fighting or suppressing it`,
                `To pretend it doesn't exist`,
                `To give it whatever it wants`,
              ],
              correctIndex: 1,
              explanation: `Befriending isn't agreeing or surrendering. It's a specific stance of curious, compassionate engagement. The part doesn't have to control your behavior, but it gets to be heard.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: IFS is fringe pop psychology with no clinical research behind it.`,
              correctAnswer: false,
              explanation: `False. IFS is now mainstream clinical psychology, taught in therapy training programs, with growing research support for treating trauma, anxiety, and depression. Used by thousands of trained therapists worldwide.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You feel intense jealousy about a friend's accomplishment. Standard model says "I shouldn't feel this way." IFS model would suggest:`,
              options: [
                `Suppress the jealousy as quickly as possible`,
                `Act on the jealousy and undermine your friend`,
                `Turn toward the jealousy with curiosity and ask: what is this part of me wanting that I haven't admitted wanting? What information is it carrying?`,
                `Tell your friend you're jealous so they feel guilty`,
              ],
              correctIndex: 2,
              explanation: `IFS move applied: jealousy is information. It's a part noticing something you want. Investigating what it's pointing at, with curiosity, is what makes the jealousy informative instead of destructive.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Did anything surprise you about the IFS model? Did the "no bad parts" framing change how you think about your own difficult emotions?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which sentence in the Schwartz passage took the most thought to label? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most adults run the standard emotional model. If you ran the IFS model instead, who would you be? What would you stop fighting in yourself?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one "bad" emotion you felt this week. What part of you might have been speaking? What was it trying to tell you?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the "no bad parts" claim be too generous? Are there parts of people that really are dangerous and shouldn't be befriended? When?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Right now, scan yourself. Can you identify any active inner parts? An anxious part? A protective part? A wounded part? Describe what each is doing.` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Emotional alchemy is one of the most usable frameworks in this whole band. It changes daily life when you actually run it. Two paths below.`,
          familyActivity: {
            title: `The Parts Conversation`,
            duration: `30 minutes`,
            description: `At dinner, each family member shares one "bad" emotion they often experience (anger, sadness, anxiety, jealousy, shame). Then, with the IFS framework, each person asks: what might that part of me be trying to protect or communicate? You don't have to share the deepest answer. Just practice the move of turning toward a difficult emotion with curiosity instead of judgment. This conversation is rare. It builds emotional intelligence as a family.`,
          },
          projectOption: {
            title: `The Parts Journal, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, when you notice a "bad" emotion, do this: pause, turn toward it, ask "what part of me is this, and what is it trying to tell me?" Write 2-3 sentences in your journal. Examples: "Today my anxious part was active about the math test. It seems to be protecting me from looking stupid." After 14 days, write 500 words on what you learned. You will be doing the same work clinical IFS practitioners do. Real psychological investigation.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Trust their privacy on this one; the work only happens if they can be honest.`,
          },
          identityQuestion: `If you stopped treating half your emotions as problems, who would you be free to become?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who treats my anger as information, not a problem.`,
            `A person who can listen to the scared parts of me instead of silencing them.`,
            `Someone who knows my "bad" emotions are messengers I haven't been reading.`,
          ],
          saveKey: `identity_responses_iw_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain the standard emotional model and why it fails, articulate Internal Family Systems and its core "no bad parts" claim, identify what specific "bad" emotions are typically communicating, and analyze a primary therapy text closely. Most adults running the standard model would benefit enormously from what you just learned. Start practicing it now and you will have decades of compound interest on this skill. Next time we look at the ego, the most contested word in pop psychology. What is it actually, what does it do, and is dissolving it really the goal? Perspectives format. See you there. — Sage`,
          badge: `emotion-translator`,
          badgeName: `Emotion Translator`,
          xpEarned: 75,
          competencies: [
            `Can articulate the standard emotional model and its failures`,
            `Can explain Internal Family Systems and the "no bad parts" claim`,
            `Can identify what specific difficult emotions are typically communicating`,
            `Has analyzed a primary therapy text at sentence level`,
            `Knows the difference between emotional suppression and emotional listening`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Ego vs True Self — What People Mean (And Don't Mean)`,
            hook: `Spiritual teachers tell you to "transcend the ego." But what is the ego actually? Three traditions, three answers. Your turn to weigh in.`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const annotate = l.screens.find((s) => s.type === `annotate`)?.passage?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L11 ${VERSION}] "${l.title}" — ${mags} magazine, ${annotate}-sentence annotate, ${quiz} quiz, ${reflect} reflection`
  );
}
