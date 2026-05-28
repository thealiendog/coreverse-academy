// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L06 — The Observer: Watching Your Thoughts
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : mindfulness / metacognition at a kid level (the observing self,
//            "thoughts are not facts," defusion). Grounded, secular framing.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the observer move when a thought arises)
// SCOPE: 4 concepts — you are not your thoughts, the observer/witness,
//        thoughts are like clouds/passing events, the power it gives you
// VOICE: Sage = calm, spacious, gently profound
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-06`,
      title: `The Observer: Watching Your Thoughts`,
      duration: 18,
      xpReward: 75,
      badge: `the-observer`,
      badgeName: `The Observer`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today's lesson is quiet but quite profound, so let's slow down together. Here is the big idea: you are not your thoughts. You are the one who NOTICES your thoughts. There's a calm, watching part of you, sometimes called the Observer, that can step back and simply witness your thinking, like watching clouds drift across the sky. Learning to find this peaceful inner observer is one of the most freeing skills there is. Take a slow, gentle breath with me, and let's explore.`,
          headline: `The Observer`,
          subtitle: `The calm, watching part of you that notices your thoughts`,
          visual: `/ue-assets/iw/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You Are Not Your Thoughts`,
          paragraphs: [
            `Here's a question worth sitting with: if you can NOTICE a thought, then who is doing the noticing? Think about it. Right now, you can watch a thought appear in your mind, like "I wonder what's for dinner." But there's a YOU that noticed that thought happening. This means you are not the same thing as your thoughts. You are the one who experiences and observes them. This calm, aware part of you is sometimes called the OBSERVER, or the witnessing self.`,
            `This might sound like a small idea, but it's genuinely powerful. Most of the time, people are completely "fused" with their thoughts, they believe every thought is true and important simply because they thought it. When an angry thought comes, they become angry. When a worried thought comes, they're swept into worry. But the moment you realize "I am the one NOTICING this thought," something shifts. You create a little space between yourself and the thought. And in that space lives your freedom. You don't have to believe, obey, or get swept away by every thought that passes through your mind. You can simply watch it, the way you'd watch a cloud.`,
          ],
          image: `/ue-assets/iw/l06-s1-not-your-thoughts.webp`,
          imageCaption: `If you can notice a thought, you are not the thought. You are the Observer.`,
          vocab: [
            {
              word: `the Observer`,
              definition: `The calm, aware part of you that notices your thoughts and feelings without being swept away by them. Also called the witnessing self. Realizing you are the Observer creates freedom and space.`,
              audioPrompt: `The Observer is the calm, aware part of you that notices your thoughts, {name}. Here's a question: if you can notice a thought, who is doing the noticing? Right now, you can watch a thought appear in your mind. But there's a you that noticed it. This means you are not the same thing as your thoughts. You are the one who observes them. The moment you realize this, something shifts. You create a little space between yourself and the thought. And in that space lives your freedom.`,
            },
            {
              word: `metacognition`,
              definition: `Thinking about your own thinking. The ability to step back and observe your own mental processes. When you use the Observer to watch a thought arise and drift by, that's metacognition in action.`,
              audioPrompt: `Metacognition means thinking about your own thinking, {name}. It's the ability to step back and observe your own mental processes, noticing what you're thinking and how you're thinking it. When you use the Observer to watch a thought arise and drift by, that's metacognition in action. It's a skill that grows with practice. Research shows that people who develop strong metacognition are better at managing emotions, making decisions, and learning from mistakes. The Observer is your main tool for building this powerful skill.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Thoughts Are Like Clouds`,
          paragraphs: [
            `Here's a gentle way to picture it. Imagine the sky. Clouds drift across it, all kinds: fluffy white ones, dark stormy ones, thin wispy ones. The clouds come and go, change shape, and pass by. But the SKY itself stays. The sky is vast, calm, and unchanged by whatever clouds float through it. The clouds are like your thoughts and feelings, always passing through. And the sky is like the Observer, the calm awareness in which all your thoughts appear and disappear. You are far more like the sky than the clouds.`,
            `This picture helps with hard moments. When a stormy thought rolls in ("I'm going to fail," "everyone's mad at me"), you can remember: this is a cloud passing through my sky. It feels big right now, but like all clouds, it will move on. I don't have to grab it, fight it, or believe it. I can let it drift by while I rest as the calm sky watching. This doesn't mean ignoring or pushing away your thoughts, that often makes them stronger. It means letting them come and go naturally, without clinging to them, while you stay steady as the watching awareness behind them.`,
          ],
          image: `/ue-assets/iw/l06-s2-clouds.webp`,
          imageCaption: `Thoughts are clouds passing through. You are the vast, calm sky that stays.`,
          vocab: [
            {
              word: `witnessing`,
              definition: `Calmly watching your thoughts and feelings come and go without grabbing onto them or being swept away. Like watching clouds drift across the sky while you rest as the steady sky itself.`,
              audioPrompt: `Witnessing means calmly watching your thoughts come and go without being swept away, {name}. Here's a gentle picture: imagine the sky. Clouds drift across it, all kinds, fluffy and stormy. They come and go and change shape. But the sky itself stays, vast and calm. The clouds are like your thoughts, always passing through. The sky is like the Observer. When a stormy thought rolls in, you can remember: this is a cloud passing through my sky, and like all clouds, it will move on.`,
            },
            {
              word: `impermanence`,
              definition: `The quality of all thoughts and feelings being temporary — they come and go and never stay forever, like clouds moving through the sky. Remembering impermanence helps you hold hard moments more lightly.`,
              audioPrompt: `Impermanence means that all thoughts and feelings are temporary — they come and go and never stay forever, {name}. Just like clouds always eventually pass through the sky. A stormy thought feels permanent when you're caught in it, but nothing in the mind stays unchanged. This is a deeply freeing idea: no matter how hard a feeling is right now, it will shift and move on. The sky is always still there, waiting. Remembering impermanence helps you hold hard moments more lightly.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Observer Move: Notice, Step Back, Let Pass`,
          paragraphs: [
            `So how do you actually DO this? There's a simple practice you can use anytime, especially when a difficult thought or feeling arises. First, NOTICE the thought ("Ah, there's a worried thought"). Just spotting it is the key first step. Second, STEP BACK by labeling it as a thought, not a fact. Instead of "I'm going to fail" (which your mind treats as truth), try "I'm having the thought that I might fail." Feel the difference? That tiny shift in words creates real space. The thought becomes something you're HAVING, not something you ARE.`,
            `Third, LET IT PASS. You don't have to do anything with the thought, argue with it, obey it, or push it away. Just let it drift by like a cloud while you rest as the calm Observer. Then, you can CHOOSE your response from that calm, clear place, instead of reacting automatically. This connects to everything you've learned: the Observer is your prefrontal cortex creating space from your amygdala's alarm; it lets you catch limiting beliefs and harsh self-talk before they sweep you away. The Observer is the calm watchtower from which you can see your whole inner world clearly, and choose wisely.`,
          ],
          image: `/ue-assets/iw/l06-s3-observer-move.webp`,
          imageCaption: `Notice it, step back ("I'm having the thought that..."), let it pass, then choose.`,
          vocab: [
            {
              word: `defusion`,
              definition: `Creating space from a thought by seeing it as just a thought, not a fact. Saying "I'm having the thought that I might fail" instead of "I will fail." This small shift gives you freedom to choose your response.`,
              audioPrompt: `Defusion means creating space from a thought by seeing it as just a thought, not a fact, {name}. Here's the practice. First, notice the thought: ah, there's a worried thought. Second, step back by labeling it. Instead of I'm going to fail, try: I'm having the thought that I might fail. Feel the difference? That tiny shift creates real space. The thought becomes something you're having, not something you are. Third, let it pass like a cloud, while you rest as the calm Observer. Then choose your response.`,
            },
            {
              word: `cognitive fusion`,
              definition: `Being so merged with your thoughts that you believe them as absolute truth — the opposite of defusion. When fused, an angry thought makes you instantly angry. The Observer helps you move from fusion toward freedom.`,
              audioPrompt: `Cognitive fusion means being so merged with your thoughts that you believe them as absolute truth, {name}. When you're fused, an angry thought makes you feel instantly angry. A worried thought feels like certain danger. The thought and you are stuck together. Defusion is the opposite: creating space and seeing the thought as just a thought. The Observer helps you move from fusion toward freedom. Instead of being the storm, you become the sky watching the storm. Even a small shift out of fusion can change how you feel.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Freedom of the Observer`,
          paragraphs: [
            `Why does this matter so much? Because finding your Observer gives you a kind of inner freedom that nothing outside you can take away. When you can step back and watch your thoughts instead of being swept away by them, difficult emotions lose much of their grip. You stop being tossed around by every passing thought and feeling. You become more steady, more calm, and more able to choose how you respond. This is the foundation of mindfulness and meditation, which we'll explore soon, and it's a skill that grows stronger with practice (yes, neuroplasticity again).`,
            `Here's something beautiful to notice: the Observer in you is always calm, always steady, always there, underneath every storm. Even in your most upset moments, that quiet watching awareness is present, like the sky behind the darkest clouds. You can return to it anytime, simply by remembering to notice. Sage's gentle teaching: you are not your fleeting thoughts, your passing moods, or your temporary feelings. You are the calm, spacious awareness in which all of these come and go. When life feels stormy, you can always find your way back to that steady inner sky. It is the most peaceful place you will ever know, and it has been within you all along. Just breathe, and notice. There you are.`,
          ],
          image: `/ue-assets/iw/l06-s4-freedom.webp`,
          imageCaption: `The Observer is always calm, always there, like the sky behind every storm.`,
          vocab: [
            {
              word: `mindfulness`,
              definition: `The practice of paying gentle, non-judging attention to the present moment, including noticing your thoughts and feelings as they come and go. The Observer is the heart of mindfulness.`,
              audioPrompt: `Mindfulness is the practice of paying gentle, non-judging attention to the present moment, {name}. Finding your Observer is the heart of mindfulness. When you step back and watch your thoughts instead of being swept away, difficult emotions lose much of their grip. Here's something beautiful: the Observer in you is always calm, always there, underneath every storm, like the sky behind the darkest clouds. You can return to it anytime, simply by remembering to notice. It is always just one gentle breath away.`,
            },
            {
              word: `present-moment awareness`,
              definition: `Paying close attention to what's happening right now, rather than being lost in thoughts about the past or future. The Observer makes present-moment awareness possible by stepping back from thought and simply noticing what is here.`,
              audioPrompt: `Present-moment awareness means paying close attention to what's happening right now, {name}. Not lost in thoughts about the past or worries about the future, just gently noticing this breath, this moment, this feeling. The Observer makes present-moment awareness possible: step back from your thoughts and notice what is here. Most stress lives in thoughts about other times. When you return to the present moment, you return to solid ground. Mindfulness is the practice of coming back, again and again, to now.`,
            },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the practice in order, {name}. Here are five steps of "the Observer move," for when a difficult thought arises, scrambled up. Use the arrows to arrange them from FIRST (top) to LAST (bottom). Picture a worried thought drifting in like a cloud.`,
          items: [
            { id: `step-arise`,  label: `A difficult thought arises, like "I'm going to mess this up"`,                 position: 1 },
            { id: `step-notice`, label: `You NOTICE it: "Ah, there's a worried thought"`,                              position: 2 },
            { id: `step-label`,  label: `You STEP BACK and label it: "I'm having the thought that I might mess up"`,   position: 3 },
            { id: `step-pass`,   label: `You LET IT PASS like a cloud, resting as the calm Observer`,                  position: 4 },
            { id: `step-choose`, label: `From that calm, clear place, you CHOOSE how to respond`,                      position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the Observer move: notice the thought, step back and label it as just a thought, let it pass like a cloud, then choose your response from a calm, clear place. With practice, this becomes one of the most freeing skills you'll ever have. You are not the storm. You are the calm sky watching it pass.`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is the big idea of "the Observer"?`,
              options: [
                `You are exactly the same as your thoughts`,
                `You are not your thoughts — you are the calm, aware part of you that NOTICES your thoughts`,
                `You should never think`,
                `Thoughts don't exist`,
              ],
              correctIndex: 1,
              explanation: `The big idea: if you can notice a thought, you are not the thought, you're the one observing it. This calm, aware part of you is the Observer (or witnessing self). Realizing this creates freedom and space between you and your thoughts.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What does it mean to be "fused" with your thoughts?`,
              options: [
                `To melt them`,
                `To believe every thought is true and important just because you thought it — getting swept away by them`,
                `To forget your thoughts`,
                `To write them down`,
              ],
              correctIndex: 1,
              explanation: `Being "fused" with thoughts means believing every thought is true and important simply because you thought it, so an angry thought makes you angry, a worried thought sweeps you into worry. The Observer creates space so you're no longer swept away.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `In the sky comparison, what are your THOUGHTS like, and what is the OBSERVER like?`,
              options: [
                `Thoughts are the sky; the Observer is the ground`,
                `Thoughts are like clouds passing through; the Observer is like the calm sky that stays`,
                `Both are clouds`,
                `Both are the sun`,
              ],
              correctIndex: 1,
              explanation: `Thoughts and feelings are like clouds, always passing through, changing, coming and going. The Observer is like the vast, calm sky that stays, unchanged by whatever clouds drift by. You are far more like the sky than the clouds.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What's the powerful word-shift in "stepping back" from a thought?`,
              options: [
                `Saying it louder`,
                `From "I'm going to fail" to "I'm HAVING THE THOUGHT that I might fail" — making it a thought you have, not who you are`,
                `Repeating it forever`,
                `Yelling at it`,
              ],
              correctIndex: 1,
              explanation: `The shift is from "I'm going to fail" (which your mind treats as truth) to "I'm having the thought that I might fail." This tiny change in words creates real space. The thought becomes something you're HAVING, not something you ARE.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Using the Observer means pushing away or ignoring your thoughts.`,
              correctAnswer: false,
              explanation: `False. It's NOT about pushing away or ignoring thoughts, which often makes them stronger. It's about letting them come and go naturally, like clouds, without clinging to them, while you stay steady as the calm watching awareness behind them.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What are the steps of "the Observer move"?`,
              options: [
                `Panic, react, regret`,
                `Notice the thought, step back and label it as a thought, let it pass, then choose your response`,
                `Believe it, obey it, repeat it`,
                `Ignore everything`,
              ],
              correctIndex: 1,
              explanation: `The Observer move: NOTICE the thought ("there's a worried thought"), STEP BACK by labeling it ("I'm having the thought that..."), LET IT PASS like a cloud, then CHOOSE your response from a calm, clear place instead of reacting automatically.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `How does the Observer connect to what you learned earlier about the brain?`,
              options: [
                `It doesn't connect at all`,
                `It's your prefrontal cortex creating space from the amygdala's alarm, helping you catch limiting beliefs and harsh self-talk`,
                `It turns off your brain`,
                `It only uses the amygdala`,
              ],
              correctIndex: 1,
              explanation: `The Observer is like your prefrontal cortex creating calm space from your amygdala's alarm. From that watchtower, you can spot limiting beliefs and harsh self-talk before they sweep you away, and choose wisely. It ties the whole subject together.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `According to Sage, what's beautiful about the Observer within you?`,
              options: [
                `It disappears when you're upset`,
                `It's always calm and always there, underneath every storm — like the sky behind the darkest clouds; you can return to it anytime`,
                `Only some people have it`,
                `It makes you feel nothing`,
              ],
              correctIndex: 1,
              explanation: `The Observer is always calm, steady, and present, even in your most upset moments, like the sky behind the darkest clouds. You can return to it anytime simply by remembering to notice. It's the most peaceful place, within you all along.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Take a slow, spacious breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Try it right now: notice a thought passing through your mind, and silently say "I'm having a thought." How does it feel to watch a thought instead of being it?` },
            { id: `r2`, text: `Think of a recent stormy thought or feeling. If you'd seen it as a cloud passing through your calm sky, might the moment have felt different?` },
            { id: `r3`, text: `The Observer is always calm and always there, even underneath your hardest moments. What's it like to imagine that steady, peaceful place inside you?` },
            { id: `r4`, text: `"You are the sky, not the clouds." What does that idea mean to you, and when might it help you most?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `The skill of the Observer is at the heart of mindfulness, which is now used all over the world, in schools, hospitals, sports, and by millions of people, because it genuinely helps with stress, focus, and emotional steadiness. Learning to watch your thoughts instead of being controlled by them helps in test anxiety, conflicts with friends, big emotions, and tough decisions. It's a skill many adults spend years learning, and you're discovering it now. Sage's note: in a busy, noisy world, the ability to step back and find your calm inner Observer is like having a peaceful refuge you can carry everywhere. The more you practice noticing, the stronger and more available that calm becomes. It is always just one gentle breath away.`,
          familyAdventure: `Family Cloud-Watching (Two Ways). As a family, first go outside or to a window and actually watch real clouds drift by for a few quiet minutes. Then talk about how thoughts are like those clouds, always passing, while you are the steady sky watching. Practice together: when someone has a big thought or feeling this week, they can gently say "that's a cloud passing through." Notice how naming it as a passing cloud creates a little calm space. You're learning to be the steady sky, together.`,
          creativePrompt: {
            intro: `Imagine your mind as a vast sky, with thoughts as different kinds of clouds drifting through. Write about a day in your "inner sky."`,
            floor: `Write at least 5 sentences. Describe a few thought-clouds drifting through, and how you (the calm sky) watch them pass.`,
            stretch: `Write 8 to 10 sentences. Show different thought-clouds (a worry-storm, a happy-fluffy cloud, an angry dark one), and how the Observer-sky stays calm as they pass.`,
            open: `Write as much as you want. Write a full story or poem set in the sky of your mind. Describe yourself as the vast, calm sky, and your thoughts and feelings as all kinds of clouds drifting through: light fluffy happy ones, dark stormy worried ones, fast angry ones, soft sad gray ones. Show how, at first, you might get swept up chasing a cloud, then how you remember you are the steady sky, and you simply watch the clouds come and go without clinging to them. End with the peace of resting as the calm, spacious sky that's always there. Make it beautiful and show real understanding of the Observer.`,
            frames: [
              `In the sky of my mind, the first cloud to drift in was ___.`,
              `For a moment, I got swept up chasing it, until I remembered ___.`,
              `A dark, stormy thought-cloud rolled in, and I ___.`,
              `Resting as the calm sky, I watched it ___.`,
              `In the end, I felt ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Beautiful, peaceful work, {name}. You've discovered one of the most freeing truths there is: you are not your thoughts. You are the calm Observer who watches them. You've learned the sky-and-clouds picture, the gentle Observer move (notice, step back, let pass, choose), and the steady peace that's always within you. This is the heart of mindfulness, and a refuge you can carry everywhere. Next, we explore those wonderful moments when you're so absorbed you lose track of time. FLOW STATES. Rest in your calm sky, and I'll see you there. — Sage.`,
          badge: `the-observer`,
          badgeName: `The Observer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L06 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
