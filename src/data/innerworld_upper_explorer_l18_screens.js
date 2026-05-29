// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L18 — The Connection Between Thoughts, Feelings, and
//                          Reality
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : synthesis lesson — inner state shaping outer experience.
// GAME FORMAT: investigation
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-18`,
      title: `The Connection Between Thoughts, Feelings, and Reality`,
      duration: 20,
      xpReward: 75,
      badge: `inner-outer`,
      badgeName: `Inner-Outer Connection`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we tie together one of the biggest themes of this whole subject. The deep, real connection between what's happening INSIDE you (your thoughts, feelings, beliefs) and what you experience OUTSIDE you in your life. We've explored many pieces of this: the RAS, manifestation, Dispenza's work, heart coherence. Today we see the whole picture. The science is amazing on its own, and there's an even deeper layer of truth that humans have known about for thousands of years and science is still uncovering. Take a slow, settled breath, and let's begin.`,
          headline: `Thoughts, Feelings, and Reality`,
          subtitle: `How your inner state shapes what you experience outside`,
          visual: `/ue-assets/iw/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Inner State Shapes Outer Experience`,
          paragraphs: [
            `Here is the big idea you've been building toward all subject: your INNER STATE (the thoughts you hold, the feelings you generate, the beliefs you carry) profoundly shapes the OUTER REALITY you experience. This isn't a wish or a poetic idea. It's real science, supported by everything we've learned. The world doesn't change for everyone the same way based on thoughts. But the world YOU experience, the moments you notice, the opportunities that find you, the people you draw close, the way your body feels day to day, all of that is shaped, in real measurable ways, by what's happening inside you.`,
            `Two people can walk through the same school day, the same neighborhood, the same family dinner, and have completely different experiences of it. That difference doesn't come from outside, it comes from inside. From their thoughts, beliefs, feelings, and the inner state they're carrying. This is one of the most empowering truths in this whole subject, because it means you have far more power over your experience of life than people once thought. Today we'll look at THREE real levels at which your inner state shapes outer reality, plus a fourth deeper layer that science is still actively exploring. The picture is genuinely amazing.`,
          ],
          image: `/ue-assets/iw/l18-s1-inner-outer.webp`,
          imageCaption: `Inner state shapes outer experience. Same world, completely different lives, because of inner state.`,
          vocab: [
            {
              word: `inner state`,
              definition: `The combination of thoughts, feelings, beliefs, and energy you're carrying at any moment. Your inner state powerfully shapes the outer reality you experience, what you notice, how you act, and what you draw to you.`,
              audioPrompt: `Your inner state is the combination of thoughts, feelings, beliefs, and energy you're carrying at any moment, {name}. It profoundly shapes the outer reality you experience. The moments you notice, the opportunities that find you, the way your body feels day to day, all of that is shaped, in real measurable ways, by what's happening inside you. Two people can walk through the same day and have completely different experiences of it. The difference doesn't come from outside. It comes from inner state.`,
            },
            {
              word: `outer reality`,
              definition: `The world you experience outside yourself — what you notice, the opportunities that find you, how others respond to you, the texture of your daily life. Research shows that outer reality is profoundly shaped by inner state at multiple measurable levels.`,
              audioPrompt: `Outer reality is the world you experience outside yourself, {name}. What you notice, the opportunities that find you, how others respond to you, the texture of your daily life. Here's what's remarkable. Most people assume outer reality is fixed, the same for everyone who walks through it. But research shows it's shaped by inner state. What you believe, feel, and carry inside filters, influences, and draws your outer experience. Same world, profoundly different realities. Two people. Two inner states. Two completely different lives lived inside the same circumstances.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Level 1: What You NOTICE`,
          paragraphs: [
            `The first level of the connection is the most well-established science: your inner state shapes WHAT YOU NOTICE. This is the RAS at work (L15). Your thoughts, beliefs, and emotions tell the RAS what matters, and the RAS filters the world to show you that. A kid who believes "people are kind" walks into school and notices the friendly waves, the helpful gestures, the smiles. A kid who believes "people are mean" walks into the same school and notices the eye-rolls, the cliques, the cold moments. Same school. Two completely different days. The inner state programmed the filter.`,
            `This level alone is hugely powerful. Most people don't realize how much of their daily experience is being curated by their own filter. Once you do, you can start re-programming it (better questions, empowering beliefs, clear focus). And the more you notice positive evidence, the more your beliefs about the world become positive, which programs even MORE positive filtering. A beautiful loop. The opposite is also true: a limiting belief programs a limiting filter, which gathers more "proof" of the limiting belief, deepening the loop. The level of what you NOTICE is the entry point. It's real, it's measurable, and it's yours to direct.`,
          ],
          image: `/ue-assets/iw/l18-s2-notice.webp`,
          imageCaption: `Level 1: Inner state shapes what you NOTICE through the RAS. Same world, curated filter.`,
          vocab: [
            {
              word: `noticing layer`,
              definition: `The first level at which your inner state shapes outer reality, your beliefs and emotions program your RAS to filter for matching evidence, so you literally NOTICE a curated slice of the world that supports your inner state.`,
              audioPrompt: `The noticing layer is the first level at which your inner state shapes outer reality, {name}. Your beliefs and emotions program your RAS to filter for matching evidence. So you literally notice a curated slice of the world that supports your inner state. A kid who believes people are kind walks into school and notices the friendly waves, the smiles. A kid carrying fear notices eye-rolls and cold moments. Same school. Two completely different days. The inner state programmed the filter.`,
            },
            {
              word: `confirmation bias`,
              definition: `The tendency to notice, remember, and seek information that confirms what you already believe — and to filter out information that contradicts it. The RAS runs your confirmation bias. A limiting belief creates a filter that keeps gathering proof of itself.`,
              audioPrompt: `Confirmation bias is the tendency to notice, remember, and seek information that confirms what you already believe, {name}. And to filter out information that contradicts it. The RAS runs your confirmation bias. Here's why it matters. If you believe you're not good at something, your confirmation bias filter gathers proof. If you believe people are unkind, it finds the cold moments and misses the warm ones. Confirmation bias keeps beliefs feeling true whether they are or not. The good news is that you can retrain the filter.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Level 2: How You ACT`,
          paragraphs: [
            `The second level: your inner state shapes HOW YOU ACT. Your thoughts and feelings drive your behavior, often without you even realizing it (remember the subconscious from L04). A kid who feels confident before a tryout actually MOVES differently, makes more eye contact, takes more risks, tries again after a mistake. A kid who feels defeated before the same tryout moves smaller, hesitates, avoids attention, gives up faster. The inner state is shaping the actions, and the actions are shaping the outcome.`,
            `Identity (L17) is part of this too. The "kind of person you believe you are" influences hundreds of small daily actions that, over time, create very different lives. A kid who believes "I'm a reader" picks up books more often, and slowly becomes a stronger reader, which makes the identity even truer. A kid who believes "I'm bad at math" avoids math, doesn't practice, falls behind, which seems to prove the belief. The inner state created the actions that created the outcome. This level is huge, because so much of life is shaped by hundreds of small daily choices that flow naturally from how we see ourselves. Change the inner state, and the actions slowly change. Change the actions, and reality slowly changes with them.`,
          ],
          image: `/ue-assets/iw/l18-s3-act.webp`,
          imageCaption: `Level 2: Inner state shapes how you ACT — hundreds of small daily choices flowing from inner state.`,
          vocab: [
            {
              word: `behavior layer`,
              definition: `The second level at which inner state shapes outer reality, your thoughts and feelings drive your actions (often subconsciously), and those actions create real outcomes in the world. Identity shapes action; action shapes outcome.`,
              audioPrompt: `The behavior layer is the second level at which inner state shapes outer reality, {name}. Your thoughts and feelings drive your actions, often without you realizing it. A kid who feels confident before a tryout moves differently, makes more eye contact, takes more risks, tries again after a mistake. A kid who feels defeated moves smaller, hesitates, gives up faster. The inner state shapes the actions, and the actions shape the outcome. Your inner state creates your daily choices, and your choices create your life.`,
            },
            {
              word: `self-fulfilling prophecy`,
              definition: `When a belief about how something will go causes you to act in ways that make that belief come true. A kid who believes "I'm going to fail" acts in ways that increase the chance of failing — the belief fulfills itself through behavior driven by inner state.`,
              audioPrompt: `A self-fulfilling prophecy is when a belief about how something will go causes you to act in ways that make it come true, {name}. A kid who believes I'm going to fail this tryout acts small, hesitates, avoids risk, and is more likely to perform badly. A kid who believes I'm ready stands tall, makes eye contact, and tries harder. Both are partly fulfilling their own prediction through their actions. The inner state created the behavior that created the outcome. That's a self-fulfilling prophecy at work.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Level 3 (and Beyond): What You DRAW`,
          paragraphs: [
            `The third level goes deeper, and connects to the most exciting research being done today. Your inner state seems to affect what you DRAW TOWARD you, what people sense from you, what opportunities seem to find you, what kinds of moments unfold around you. Some of this has clear scientific explanations: the energy you carry shows in your posture, your face, your voice, your warmth. People are tuned to sense it without realizing. A kid in heart coherence (L16) literally sends out a different electromagnetic signal than a kid in stress, and other people's nervous systems pick up on that. Researchers at HeartMath have measured this. People who carry calm and elevated emotion tend to have warmer, more positive interactions, because others can SENSE that state.`,
            `And then there's the deeper layer that scientists like Dr. Joe Dispenza (L11) and many others are actively studying. Their research suggests that thoughts and feelings, especially when held with strong elevated emotion, may influence reality in ways we're still learning to measure. Wisdom traditions across the world have taught for thousands of years that mind, energy, and reality are deeply connected. Modern science, in epigenetics (L11, L14), heart coherence (L16), placebo research (L08), and quantum-level experiments (L19, coming next!) is increasingly showing they were onto something real. Sage's gentle teaching: you don't have to BELIEVE every claim about how deep this goes to use the science we have. Start with what's clearly proven: thoughts and feelings shape what you notice, how you act, and what you draw to you. That alone, used kindly, can transform your life. And stay curious about the deeper layer. Science is still uncovering it. You're living in an extraordinary moment of understanding.`,
          ],
          image: `/ue-assets/iw/l18-s4-draw.webp`,
          imageCaption: `Level 3+: Inner state affects what you draw, energy, electromagnetic field, deeper layers still studied.`,
          vocab: [
            {
              word: `drawing layer`,
              definition: `The third (and deeper) level at which inner state shapes outer reality, your energy, posture, electromagnetic field, and inner state affect what others sense from you and what kinds of moments unfold around you. Has both clear science and a deeper layer still being studied.`,
              audioPrompt: `The drawing layer is the third level at which inner state shapes outer reality, {name}. Your inner state affects what you draw toward you. What people sense, what opportunities find you, what kinds of moments unfold around you. Some of this has clear science. The energy you carry shows in your posture, face, voice, warmth. A kid in heart coherence sends out a different electromagnetic signal than a kid in stress, and others sense it. Scientists are actively studying how deeply this goes.`,
            },
            {
              word: `elevated emotion`,
              definition: `An intense, positive feeling (gratitude, love, joy, awe) held with full mind and body engagement. Research by Dr. Joe Dispenza and HeartMath shows that elevated emotion amplifies the effect of thoughts on inner state, the body's electromagnetic field, and possibly on outer reality.`,
              audioPrompt: `Elevated emotion is an intense, positive feeling held with full mind and body engagement, {name}. Gratitude, love, joy, awe. Research by Dr. Joe Dispenza and HeartMath shows that elevated emotion amplifies the effect of your thoughts. A thought held with flat emotion sends a weak signal. The same thought held with genuine gratitude or joy sends a much stronger one. This is why heart coherence practices combine calm breath with elevated feeling, and why Dispenza's work emphasizes feeling the future now, not just thinking it.`,
            },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four moments where inner state is shaping outer reality. Classify each: NOTICING LAYER (RAS filtering what they perceive), BEHAVIOR LAYER (inner state driving how they act and what they choose), or DRAWING LAYER (energy, presence, and what they attract from others)?\n\nOne weaves all three together.`,
          options: [
            { id: `notice`, label: `Noticing Layer`, color: `#FBBF24`, description: `RAS filtering — inner state shaping WHAT they perceive.` },
            { id: `behave`, label: `Behavior Layer`, color: `#60A5FA`, description: `Inner state driving how they ACT and the small choices they make.` },
            { id: `draw`,   label: `Drawing Layer`,  color: `#A78BFA`, description: `Energy, presence, electromagnetic field, what they DRAW from others.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Moment #1`,
              clues: [
                { text: `A kid believes "the world is full of opportunities to learn."` },
                { text: `Walking through their day, they notice interesting things everywhere, books, conversations, problems to solve.` },
                { text: `Their friend, walking the same hallway, doesn't notice any of it.` },
              ],
              correctAnswer: `notice`,
              realWorldExample: `Same hallway, two filters, two completely different days.`,
              explanation: `The kid's belief programmed the RAS to filter for learning opportunities, so they literally notice what their friend (with a different inner state) misses. Pure noticing layer. The world is the same, but the experience is curated by inner state.`,
            },
            {
              id: `case-2`,
              caseTitle: `Moment #2`,
              clues: [
                { text: `A kid feels confident before a presentation. They stand tall, speak clearly, make eye contact, and recover quickly from a small slip.` },
                { text: `Another kid, same presentation prep, feels anxious. They hunch, mumble, avoid eye contact, freeze at the small slip.` },
                { text: `The inner state directly shaped how each one ACTED.` },
              ],
              correctAnswer: `behave`,
              realWorldExample: `Inner state directly drives the small actions that shape outcome.`,
              explanation: `The inner state (confidence vs anxiety) is directly driving how each kid ACTS in the moment, posture, voice, eye contact, recovery. Pure behavior layer. The outcome of the presentation is being shaped, in real time, by inner state translating into action.`,
            },
            {
              id: `case-3`,
              caseTitle: `Moment #3`,
              clues: [
                { text: `A kid walks into a room genuinely calm and in heart coherence (they just did the Quick Coherence Technique).` },
                { text: `Without trying, others gravitate toward them. People start sharing kind moments, smiles, even other anxious kids feel a bit calmer.` },
                { text: `Their energy and electromagnetic field is literally measurable, and people sense it.` },
              ],
              correctAnswer: `draw`,
              realWorldExample: `Coherent inner state literally affects the field around you.`,
              explanation: `The kid's inner state (heart coherence) is sending out a measurable electromagnetic signal that other nervous systems pick up. Others gravitate toward them, kindness shows up, even other anxious kids settle a bit. Pure drawing layer. HeartMath research has actually documented this kind of effect.`,
            },
            {
              id: `case-4`,
              caseTitle: `Moment #4 — The Tricky One`,
              clues: [
                { text: `A kid genuinely loves their friends, believes friendship matters, and feels gratitude for the people in their life.` },
                { text: `They start noticing more kindness around them (filter), behave warmly and reach out more (action), and friends seem to gravitate toward them and want to spend time with them (drawing).` },
                { text: `It's hard to tell which layer is "doing the work."` },
              ],
              correctAnswer: `draw`,
              realWorldExample: `In real life, all three layers usually weave together.`,
              explanation: `Tricky! All three layers are active here, the kid notices more kindness (noticing layer), acts warmer and reaches out more (behavior layer), AND their warm energy draws people in (drawing layer). You could argue for any of the three. But the case is showing the FULL weaving, where inner state is shaping experience at all three levels at once. We marked it as drawing layer because the most visible effect is what others gravitate toward, but the deepest lesson is this: in real life, the layers don't work in isolation. They weave together. A genuinely warm inner state shapes notice + action + draw all at once, which is why authentic inner work transforms life so completely. You can't separate the layers in practice. Inner state shapes outer reality at every level it touches. That's the whole picture.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is the big idea about INNER STATE and OUTER REALITY?`,
              options: [
                `They have nothing to do with each other`,
                `Your inner state (thoughts, feelings, beliefs) profoundly shapes the outer reality you experience, in real measurable ways`,
                `Only the outside matters`,
                `Only adults experience this`,
              ],
              correctIndex: 1,
              explanation: `Your inner state profoundly shapes the outer reality you experience. The world doesn't change for everyone the same way, but the world YOU experience (what you notice, opportunities, how others respond) is shaped in real, measurable ways by what's happening inside you.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `What is LEVEL 1 (the NOTICING layer)?`,
              options: [
                `Magic`,
                `Your beliefs and emotions program your RAS to filter for matching evidence, same world, curated slice`,
                `The world physically changes`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `Level 1 is the noticing layer (the RAS at work). Your beliefs and emotions tell the RAS what matters, and it filters the world to show you that. A kid who believes people are kind notices kindness everywhere; a kid who believes people are mean notices coldness. Same world, curated filter.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is LEVEL 2 (the BEHAVIOR layer)?`,
              options: [
                `Only big choices count`,
                `Your inner state drives HOW you act, often subconsciously, and those actions create real outcomes`,
                `Behavior is random`,
                `Inner state can't affect behavior`,
              ],
              correctIndex: 1,
              explanation: `Level 2 is the behavior layer. Your thoughts and feelings drive how you act, often subconsciously, posture, eye contact, risk-taking, choices. A confident kid acts differently than an anxious kid in the same situation, and those small actions shape real outcomes.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What is LEVEL 3 (the DRAWING layer)?`,
              options: [
                `It doesn't exist`,
                `Your inner state affects what you DRAW from others through energy, posture, electromagnetic field. HeartMath has measured this`,
                `Random people just appear`,
                `Only thoughts matter, not energy`,
              ],
              correctIndex: 1,
              explanation: `Level 3 is the drawing layer. Your inner state (energy, posture, voice, electromagnetic field) affects what others sense from you. A kid in heart coherence sends a measurable signal others' nervous systems pick up. Calm, elevated emotion draws warmer interactions. Real, measured science from HeartMath.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Two kids can walk through the same day and have completely different experiences of it, because of inner state.`,
              correctAnswer: true,
              explanation: `True. Same school, same hallway, same family dinner, but completely different experiences. The difference doesn't come from outside, it comes from inside. Inner state filters what each kid notices, drives different actions, and even draws different responses from others.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `What kinds of inner state are scientists like Dr. Joe Dispenza studying as having even deeper effects?`,
              options: [
                `Only thoughts matter`,
                `Thoughts COMBINED with strong elevated emotion (gratitude, love, joy) — the deepest layer of how inner state may shape reality`,
                `Only sad emotions count`,
                `No emotions matter`,
              ],
              correctIndex: 1,
              explanation: `Dispenza and others are studying how thoughts combined with strong elevated emotion (gratitude, love, joy) may influence reality at deeper levels still being explored. Wisdom traditions have taught this for thousands of years; modern science is increasingly showing they were onto something.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `In real life, do the three levels work SEPARATELY or together?`,
              options: [
                `Always separately, one at a time`,
                `Together — they weave together. A warm inner state shapes notice + action + drawing all at once`,
                `Only one can work at a time`,
                `They cancel each other out`,
              ],
              correctIndex: 1,
              explanation: `In real life, the layers weave together. A genuinely warm inner state shapes what you notice + how you act + what you draw, all at once. That's why authentic inner work transforms life so completely. You can't separate them in practice.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `According to Sage, what's the right relationship with the deeper layers science is still studying?`,
              options: [
                `You must believe every claim`,
                `You don't have to believe every claim. Use what's clearly proven, and stay curious about the deeper layers science is still uncovering`,
                `Ignore science entirely`,
                `Only accept fringe ideas`,
              ],
              correctIndex: 1,
              explanation: `You don't have to believe every claim about how deep this goes. Start with what's clearly proven (filter, behavior, energy effects) and use it kindly. Stay curious about deeper layers science is still uncovering. We live in an extraordinary moment of understanding, and the picture is still expanding.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Take a slow, integrating breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a recent day. How did your inner state shape what you NOTICED that day? What did you miss because of what you were carrying inside?` },
            { id: `r2`, text: `Can you remember a moment when your inner state directly changed HOW you acted, and that changed how the moment turned out?` },
            { id: `r3`, text: `Think of someone whose energy you really enjoy being around. What inner state do you think they're carrying? What do they DRAW from you?` },
            { id: `r4`, text: `If you could carry ONE quality more deeply as your inner state this week (gratitude, calm, curiosity, kindness), what would shift in your outer life?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `The connection between inner state and outer reality is one of the most studied and most exciting areas in modern science. Psychology, neuroscience, epigenetics, heart science, and even physics are all exploring how mind, body, and reality connect. Top performers in every field (athletes, artists, scientists, leaders) understand this intuitively, even when they haven't read the research. They cultivate their inner state because they know it shapes everything. Sage's note: you don't have to wait until you're an adult, or have everything figured out, to start using this. You have it now. Begin where you are: cultivate gentle, kind, gratitude-rich inner states, and watch your outer life slowly, naturally shift to reflect it. The science supports it. Wisdom traditions confirm it. And you can feel it working as you practice.`,
          familyAdventure: `Family Inner-State Experiment. As a family, pick ONE inner state to deliberately cultivate together for a week (gratitude works wonderfully). Each day, share one thing you're genuinely grateful for, with real feeling. Notice three things over the week: 1) What do you start NOTICING more in your days? 2) How does your BEHAVIOR shift, do you act warmer, kinder, calmer? 3) What changes in how OTHERS respond to you? You're not just talking about the three layers, you're experiencing them together. End the week by sharing what you each noticed at each layer.`,
          creativePrompt: {
            intro: `Write about a single day in your life lived from one specific inner state (gratitude, curiosity, kindness, calm). Show how it shaped what you noticed, how you acted, and what you drew from others.`,
            floor: `Write at least 5 sentences. Pick an inner state and show one example of each layer (notice + act + draw).`,
            stretch: `Write 8 to 10 sentences. Walk through a full day in this inner state, showing all three layers weaving together.`,
            open: `Write as much as you want. Choose ONE specific, beautiful inner state (deep gratitude, genuine kindness, calm confidence, warm curiosity) and write a full day in your life lived from that state. Show in vivid detail how it shapes what you NOTICE (the filter through which you see your school, your home, your interactions), how it shapes how you ACT (the small daily choices and behaviors that flow naturally from it), and how it shapes what you DRAW from others (the warmth and connection that finds you, the way others respond). Show how the three layers weave together inseparably, until the whole day feels different from a day lived from a colder inner state. End by reflecting on how much more your life shifts when inner state shifts. Make it specific, real, and felt.`,
            frames: [
              `The inner state I chose for this day is ___.`,
              `On the noticing layer, throughout the day I started spotting ___.`,
              `On the behavior layer, I found myself acting ___ instead of ___.`,
              `On the drawing layer, others started ___.`,
              `By evening, the whole day felt ___, because my inner state ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now have the full picture of one of the most important truths in this whole subject: your inner state powerfully shapes your outer reality, on three real levels (what you NOTICE, how you ACT, what you DRAW), plus deeper layers science is still uncovering. You hold this map of your own life now. Use it kindly. The next lesson goes to the deepest layer yet, into the fascinating frontier of how consciousness and reality may connect at the quantum level. QUANTUM CONSCIOUSNESS: AN INTRODUCTION. Bring your curiosity, and I'll see you there. — Sage.`,
          badge: `inner-outer`,
          badgeName: `Inner-Outer Connection`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
