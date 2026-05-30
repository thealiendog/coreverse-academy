// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD VOYAGER  |  L03 — Carl Jung and the Shadow Self
// Age band : voyagers (11-12)   Guide: sage (Deer)
// Standards: Coreverse Original — Jungian Psychology, Shadow Work
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT-BUILDER (which approach to inner darkness is strongest?)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-iw-l03-v2";

const INNERWORLD_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `inner-world`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-11-12-03`,
      title: `Carl Jung and the Shadow Self`,
      duration: 35,
      xpReward: 75,
      badge: `shadow-walker`,
      badgeName: `Shadow Walker`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a question that might land sideways. Think of someone who really gets under your skin. Not someone who hurt you, just someone whose personality bothers you for reasons you can't quite name. What is it about them that's so annoying? Hold that answer for a second. The Swiss psychologist Carl Jung had a strange claim about exactly this kind of feeling. He said the thing that bothers you most in others is often something hidden in you. That hidden part has a name. Jung called it the shadow.`,
          headline: `Carl Jung and the Shadow Self`,
          subtitle: `The parts of you that you don't want to look at`,
          visual: `/voyager-assets/inner-world/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Psychologist of the Depths`,
          paragraphs: [
            `Carl Jung was a Swiss psychiatrist born in 1875. He started out as a close friend and collaborator of Sigmund Freud, the founder of psychoanalysis. For about six years they worked together, and Freud considered Jung his heir. Then they had a major split. Jung believed Freud focused too narrowly on sexuality and early childhood. Jung wanted to investigate something deeper.`,
            `Jung spent the rest of his life mapping what he called the unconscious, the parts of the mind that operate below awareness. He argued that beneath the personal unconscious (your forgotten memories, repressed feelings) lies something even deeper: the collective unconscious. This is the layer of mind we share across humanity, full of patterns Jung called archetypes (we'll dive into archetypes later in this band).`,
            `Within the personal unconscious, Jung mapped several major structures. The persona is the social mask you wear. The ego is your conscious sense of self. The Self (with a capital S) is the wholeness you're slowly becoming. And the shadow, the focus of today's lesson, is everything you've rejected, denied, or hidden about yourself. Jung's claim is that integrating the shadow is one of the most important psychological tasks of a life. You're starting it now.`,
          ],
          image: `/voyager-assets/inner-world/l03-s1-jung.webp`,
          imageCaption: `Carl Gustav Jung (1875-1961), founder of analytical psychology.`,
          vocab: [
            {
              word: `unconscious`,
              definition: `The parts of the mind operating below conscious awareness. Includes memories you've forgotten, feelings you've suppressed, and patterns running automatically.`,
              audioPrompt: `The unconscious is the part of the mind operating below conscious awareness, {name}. Most of what your brain does is unconscious. You don't decide to recognize a face, to feel afraid in a dark room, or to suddenly remember a song from years ago. These happen on their own. Jung argued the unconscious is much bigger and stranger than Freud had described. It contains forgotten memories, repressed feelings, automatic patterns, and according to Jung, even shared structures we inherit from being human. Most of who you are, in Jung's view, is hidden from you. The shadow lives there.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's In Your Shadow`,
          paragraphs: [
            `The shadow is everything about yourself that you've decided isn't you. When you were little, you got messages, usually without anyone meaning to send them. Anger isn't allowed. Don't be selfish. Don't show off. Don't cry. Don't be weak. Don't be too much. Some of these messages came from parents, some from school, some from culture. You learned which parts of yourself to hide. The hidden parts didn't disappear. They went underground.`,
            `Crucially, the shadow contains not just bad things but also good things you've buried. If you grew up where being assertive was punished, your assertiveness is in your shadow. If you grew up where standing out was risky, your boldness is in your shadow. If you grew up where soft feelings were mocked, your gentleness is in your shadow. The shadow holds your unlived potential.`,
            `Jung's striking claim is that the shadow doesn't stay quiet. It runs you from below. It comes out in moments you wish it hadn't: in sudden anger, in self-sabotage, in the things you can't stop doing even though you know better. It also comes out in projection. Projection is when you see in others the very thing you can't see in yourself.`,
          ],
          image: `/voyager-assets/inner-world/l03-s2-shadow.webp`,
          imageCaption: `The shadow holds rejected parts of yourself, including unlived strengths.`,
          vocab: [
            {
              word: `shadow`,
              definition: `Jung's term for everything you've rejected, denied, or hidden about yourself. Holds both 'bad' traits and unlived strengths.`,
              audioPrompt: `The shadow is Jung's term for everything you've rejected, denied, or hidden about yourself, {name}. It is not the same as evil. It is the part of you that did not fit who you decided to be. If anger felt unsafe in your family, your anger is in your shadow. If softness felt unsafe, softness is there. If wanting things openly felt unsafe, your wanting is there. The shadow is not your enemy. It is the parts of you that went into hiding to keep you safe. Jung's claim is that learning to see and integrate the shadow is one of the most important psychological tasks a person can do.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Mirror in Other People`,
          paragraphs: [
            `Here's where Jung gets practical. Projection is when you can't see something in yourself, so you see it in someone else. The person who triggers a disproportionate reaction in you is often holding up a mirror to your own shadow. You don't recognize the image, so you blame them for what you're seeing.`,
            `Think of the classmate who's always seeking attention. If they bother you intensely, ask yourself honestly: do I want attention too and have I told myself I shouldn't? The brag-y kid in your class might be mirroring your own buried desire to be seen. The kid who openly admits when they're scared might be mirroring fear you've buried because you decided being brave was the only safe way to be. This is uncomfortable. That's part of the point.`,
            `Jung argued that the people who make us most angry, most disgusted, most uncomfortable are usually the ones showing us our shadow. This doesn't mean their behavior is okay (they might genuinely be doing something wrong). But the intensity of our reaction is information about us, not just about them. Notice when your reaction to someone is way bigger than the situation deserves. That gap is shadow.`,
          ],
          image: `/voyager-assets/inner-world/l03-s3-projection.webp`,
          imageCaption: `Projection, seeing in others what you can't see in yourself.`,
          vocab: [
            {
              word: `projection`,
              definition: `Seeing in someone else the rejected parts of yourself. The disproportionate reaction is the clue.`,
              audioPrompt: `Projection is when you see in someone else the parts of yourself you've rejected, {name}. The disproportionate reaction is the clue. If a classmate's behavior makes you twice as angry as the situation warrants, the extra anger is probably about you. Maybe they're showing you something you've buried in yourself. Maybe their boldness mirrors your buried boldness. Maybe their vulnerability mirrors your buried vulnerability. Notice this is not a way to excuse other people's bad behavior. It is a way to use your own reactions as information about yourself.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Shadow Work: How You Actually Do It`,
          paragraphs: [
            `Shadow work is the practice of becoming aware of your shadow and integrating it. Integration doesn't mean acting out everything you've buried. It means seeing it, naming it, and choosing what to do with it consciously instead of having it run you from below.`,
            `Jung described several practical methods. Pay attention to your strongest reactions to other people, especially negative ones. Ask: what is this person showing me about myself? Pay attention to your dreams, particularly recurring ones or ones that feel emotionally loaded. Pay attention to slips, the times when you say or do something that surprises you. Pay attention to what you criticize in others. Make a list of three things you most dislike in people. Then ask honestly: where does each of these show up in me?`,
            `Modern psychologists have built on Jung's work with structured practices: shadow journaling (writing about your reactions and patterns), parts work (talking to different parts of yourself as if they have their own voices), and Internal Family Systems therapy developed by Richard Schwartz in the 1980s. These are real therapeutic tools used by clinical psychologists today. They're not magic. They're slow, sometimes uncomfortable, and they work.`,
          ],
          image: `/voyager-assets/inner-world/l03-s4-shadow-work.webp`,
          imageCaption: `Shadow work, slow, practical, and real.`,
          vocab: [
            {
              word: `integration`,
              definition: `The process of becoming consciously aware of shadow material and choosing how to relate to it, instead of being run by it unconsciously.`,
              audioPrompt: `Integration is the process of becoming consciously aware of shadow material and choosing what to do with it, {name}. The word is important. Integration is not getting rid of the shadow. It is not letting the shadow take over either. It is bringing what was hidden into the light of awareness so you can choose. The angry part of you that you've buried doesn't disappear once you notice it. It just stops running you from below. You can decide how and when to use it. Integration is slow. Real shadow work takes years, not minutes. But it can start now.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Start Shadow Work at Your Age`,
          paragraphs: [
            `Most people start shadow work in their 30s or 40s, after years of being run by their shadow have created real problems. Some never start. They spend their whole lives blaming other people for what was their own buried material the whole time. The shadow doesn't go away just because you ignore it. It gets denser.`,
            `Starting shadow work at 11 or 12 has a real advantage. You're young enough that your patterns aren't deeply hardened yet. The voice that tells you 'don't be too much' is still relatively new. You can hear it more clearly, before it becomes invisible background. You can notice 'oh, I'm hiding my anger because I learned anger wasn't safe' and start to question whether it actually isn't safe now.`,
            `This doesn't mean tearing your personality apart at 12. It means starting the practice of self-honesty early. Noticing your projections. Noticing the parts of yourself you reject in others. Noticing what you'd never admit out loud. Jung wrote that 'one does not become enlightened by imagining figures of light, but by making the darkness conscious.' That is shadow work. It is one of the few practices available to you that will pay off for the rest of your life.`,
          ],
          image: `/voyager-assets/inner-world/l03-s5-young.webp`,
          imageCaption: `Starting young: catch the patterns before they harden.`,
          vocab: [
            {
              word: `self-honesty`,
              definition: `The willingness to see yourself, including the parts you'd prefer not to. The foundation of shadow work.`,
              audioPrompt: `Self-honesty is the willingness to see yourself, including the parts you'd prefer not to see, {name}. It is harder than it sounds. Most people protect their self-image automatically, without realizing they're doing it. We rewrite memories to make ourselves look better. We blame others for what was partly our fault. We tell ourselves stories about why we did what we did. Self-honesty is the practice of catching these moves and choosing accuracy over self-protection. It is uncomfortable. It is also the prerequisite for any real growth. You cannot integrate what you refuse to see.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l03-argument-builder`,
          type: `argument-builder`,
          headline: `Which approach to your inner darkness is strongest?`,
          intro: `Three serious traditions have given thousands of years of attention to this question: what should you do with the parts of yourself you don't like? Pick the position you find most defensible, build your argument from the evidence, then respond to the strongest objection.`,
          positions: [
            {
              id: `jungian-integrate`,
              label: `Integrate the shadow (Jung)`,
              summary: `Become conscious of rejected material and bring it into the light. Choose how to relate to it instead of being run unconsciously.`,
            },
            {
              id: `stoic-virtue`,
              label: `Starve the vice, feed the virtue (Stoics)`,
              summary: `Pay less attention to what's dark in you. Practice virtue relentlessly. Train good habits. The shadow shrinks when ignored.`,
            },
            {
              id: `buddhist-notice`,
              label: `Notice without identifying (Buddhism)`,
              summary: `Dark impulses arise on their own. They are not 'you.' Hold them in awareness without reacting. They will pass. Through repeated practice, they lose their grip.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Jung's clinical work showed that patients who refused to look at their shadow tended to project it onto others, sabotage their own goals, and get blindsided by their own behavior.`,
              source: `Jung's clinical practice, early 1900s`,
            },
            {
              id: `e2`,
              text: `Internal Family Systems therapy, developed by Richard Schwartz in the 1980s, builds directly on Jungian shadow work and is now widely used by clinical psychologists with strong outcomes.`,
              source: `Schwartz, Internal Family Systems Therapy (1995)`,
            },
            {
              id: `e3`,
              text: `Marcus Aurelius wrote his Meditations while running the Roman Empire under massive stress. His practice was relentless focus on virtue, not analysis of his shadow. He produced one of the most enduring documents of personal integrity ever written.`,
              source: `Marcus Aurelius, Meditations, ~170 CE`,
            },
            {
              id: `e4`,
              text: `Buddhist practitioners have used 'notice without identifying' techniques for 2,500 years. Long-term meditators show reduced reactivity in fMRI studies and report feeling less controlled by automatic impulses.`,
              source: `Modern neuroscience studies of meditators (Brewer, Davidson)`,
            },
            {
              id: `e5`,
              text: `Dwelling on the dark in oneself can become an excuse, an aesthetic, or a way to feel deep without doing anything different. Some shadow-work practitioners report years of self-analysis without actually changing.`,
              source: `Critique from positive psychology research (Seligman and others)`,
            },
            {
              id: `e6`,
              text: `Repression studies in modern psychology show that pushing emotions down often causes them to surface stronger later. Pure 'starve the vice' approaches may fail because they assume what's hidden goes away.`,
              source: `Wegner's 'white bear' experiments, 1987`,
            },
            {
              id: `e7`,
              text: `Buddhist 'noticing' practice does not require believing in any specific framework. It is a method available to anyone willing to sit and observe. The approach works even for skeptics.`,
              source: `Mindfulness-Based Stress Reduction research (Kabat-Zinn)`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position, but here's the strongest objection: real change usually happens through action, not analysis. The Jungian who spends years naming their shadow and the Buddhist who spends years noticing impulses can both end up just as stuck as someone who never tried. The Stoics built virtue through daily practice, not introspection. Why isn't the simpler 'just act differently' approach better than your position?"`,
            promptInstruction: `In 3-4 sentences, respond to this objection. What does your position actually do that beats 'just act differently'?`,
          },
          reflectionPrompt: `Looking back at the evidence you didn't pick, what's the strongest piece of evidence AGAINST your position? Could you imagine changing your mind in 2 years?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Who was Carl Jung?`,
              options: [
                `An American novelist who wrote about psychology`,
                `A Swiss psychiatrist who broke from Freud and mapped the unconscious in his own way`,
                `A Buddhist monk who founded modern meditation`,
                `A philosopher who argued the self is an illusion`,
              ],
              correctIndex: 1,
              explanation: `Jung was a Swiss psychiatrist (1875-1961), originally Freud's collaborator. He broke with Freud and developed analytical psychology, mapping the unconscious mind in detail.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `According to Jung, the shadow contains:`,
              options: [
                `Only the bad parts of yourself`,
                `Only your forgotten childhood memories`,
                `Everything you've rejected, denied, or hidden about yourself, including unlived strengths`,
                `The parts of your personality you show to other people`,
              ],
              correctIndex: 2,
              explanation: `Jung's shadow includes everything you've decided isn't you, both 'bad' traits AND positive traits you've buried (assertiveness, boldness, gentleness, etc).`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is projection?`,
              options: [
                `When you imagine your future`,
                `When you predict what someone else will do`,
                `When you see in others the rejected parts of yourself`,
                `When you show a movie on a wall`,
              ],
              correctIndex: 2,
              explanation: `Projection is Jung's term for when something hidden in you gets perceived in someone else. The disproportionate reaction is the clue.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `If a classmate's attention-seeking really bothers you, Jung would ask:`,
              options: [
                `Why are they so annoying?`,
                `Could you be jealous of their attention?`,
                `Do you also want attention but have buried that desire?`,
                `Should you avoid them?`,
              ],
              correctIndex: 2,
              explanation: `Jung's projection insight: intense reactions often reveal buried material in yourself. The question isn't 'what's wrong with them' but 'what is this showing me about me?'`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Integration of the shadow means:`,
              options: [
                `Acting out everything you've buried`,
                `Becoming aware of shadow material and choosing how to relate to it consciously`,
                `Getting rid of all your negative traits`,
                `Becoming exactly like the people who bother you`,
              ],
              correctIndex: 1,
              explanation: `Integration is not acting on shadow material or eliminating it. It's bringing what was hidden into conscious awareness so you can choose instead of being run unconsciously.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What modern therapy approach builds directly on Jung's shadow work?`,
              options: [
                `Cognitive Behavioral Therapy`,
                `Internal Family Systems (developed by Richard Schwartz in the 1980s)`,
                `Behavioral conditioning`,
                `Hypnosis`,
              ],
              correctIndex: 1,
              explanation: `Internal Family Systems (IFS) and parts work approaches build directly on Jungian shadow concepts. Schwartz developed IFS in the 1980s and it's now widely used.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does Jung say starting shadow work in early adolescence is valuable?`,
              options: [
                `Because young people have the most darkness`,
                `Because your patterns aren't fully hardened yet, you can still hear the rules that shaped your shadow`,
                `Because schools require it`,
                `Because shadow work is easier for kids`,
              ],
              correctIndex: 1,
              explanation: `At 11-12, the rules that created your shadow are still relatively recent. You can hear 'don't be too much' as a rule, not as background reality.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Jung wrote: 'One does not become enlightened by imagining figures of light, but by ___'`,
              options: [
                `Meditating every day`,
                `Following a master`,
                `Making the darkness conscious`,
                `Reading the right books`,
              ],
              correctIndex: 2,
              explanation: `Jung's famous line about shadow work: real growth comes not from imagining ideals but from making conscious what was hidden in darkness.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: According to Jung, the things that bother you most in others are completely unrelated to your own inner material.`,
              correctAnswer: false,
              explanation: `False. Jung's projection insight is the opposite: the things that bother you most are often the things you can't see in yourself. The intensity of the reaction is the clue.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine a 16-year-old who has spent years hiding their anger because they were told 'good kids don't get angry.' According to Jung, what's most likely to happen?`,
              options: [
                `Their anger will disappear from being suppressed long enough`,
                `Their anger will leak out as projection, self-sabotage, or sudden outbursts they can't explain`,
                `They'll become the calmest person in their school`,
                `They'll have no reaction to anything anymore`,
              ],
              correctIndex: 1,
              explanation: `Jung's key claim: repressed material doesn't disappear, it goes underground. It runs the person from below through projection, self-sabotage, and disproportionate reactions.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What surprised you most about the idea of the shadow? Did anything click that you hadn't seen before?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `What's hardest to see clearly when you try to look at your own shadow? What gets in the way of self-honesty?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `What part of yourself have you been hiding because you decided it wasn't 'who you are'? What might shift if you stopped hiding it?` },
            { id: `reflect-application`, category: `Application`, prompt: `Think of a person who really bothers you. What might they be mirroring back to you about yourself? (You don't have to share this, just be honest with yourself.)` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's the strongest objection to Jung's shadow theory? Is there a way the Stoic 'starve the vice' approach makes more sense than Jung's 'integrate the shadow'?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Make a quick list of three things you most dislike in other people. Then, honestly, where does each of these show up (even a little) in you?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Shadow work is one of the few practices that pays off for an entire lifetime. Starting at your age is rare and valuable. Below are two paths: a family conversation to anchor this week's lesson, and an optional 2-week practice if you want to investigate your own shadow.`,
          familyActivity: {
            title: `The Trigger Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, each family member shares one type of person who really bothers them. Not someone who hurt you, just a personality type that gets under your skin. (Example: 'people who brag,' 'people who never admit they're wrong,' 'people who play victim.') Then, with curiosity and zero judgment, each person investigates: where does even a small version of that trait show up in me? When? Around who? When was I scared to admit it? This is one of the most direct shadow exercises Jung described. Done as a family, it builds the muscle for self-honesty in a context where no one is alone in the discomfort.`,
          },
          projectOption: {
            title: `Shadow Journal, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Every day for 14 days, do one entry in a shadow journal. Each entry has three parts. (1) Today's strongest reaction: who or what made me angry, jealous, irritated, or uncomfortable? (2) The honest mirror: what might this reaction be showing me about myself? (3) The integration question: if I owned that part of me, what would change? Keep these entries private. They're for you. At the end of 14 days, look for patterns. Are the same shadow themes coming up? What's emerging? Write 500 words reflecting on what you've learned about your own hidden material. This is real psychological work, not pop psychology.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Trust them with the privacy of their journal, this work only works when it's honest, and honesty requires safety.`,
          },
          identityQuestion: `If you stopped hiding the parts of yourself you've been hiding, who could you actually become?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can look honestly at the parts of myself I usually hide.`,
            `A person who uses my reactions to other people as information about me, not just them.`,
            `Someone willing to do real psychological work even when it's uncomfortable.`,
          ],
          saveKey: `identity_responses_iw_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain Jung's mapping of the unconscious, define the shadow and what it contains, recognize projection in your own reactions, and name several real methods of shadow work. You also built and defended a real philosophical argument about how to handle inner darkness. You weighed evidence, picked a position, and addressed an objection. That is how real thinking works. Most adults have never been asked to do this. Next time we go into another piece of Jungian psychology: archetypes and the collective unconscious. The patterns of being human that show up across every culture. See you there. — Sage`,
          badge: `shadow-walker`,
          badgeName: `Shadow Walker`,
          xpEarned: 75,
          competencies: [
            `Can explain Jung's model of the unconscious and how it differs from Freud's`,
            `Can define the shadow and identify what it contains (rejected traits AND unlived strengths)`,
            `Can recognize projection in their own reactions to other people`,
            `Has built a defended philosophical argument from evidence`,
            `Knows multiple traditions' approaches to inner darkness (Jung, Stoics, Buddhism)`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Epigenetics, How Your Thoughts Change Your Genes`,
            hook: `Modern science has found something startling: your environment and even your thoughts can change how your genes express themselves. What does this mean for who you can become?`,
          },
        },
      ],
    },
  ],
};

export default INNERWORLD_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = INNERWORLD_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-IW-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
