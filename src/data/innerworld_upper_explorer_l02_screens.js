// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L02 — Neuroplasticity: You Can Change Your Brain
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real neuroscience (neuroplasticity) at a kid level
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order how a new skill becomes wired through practice)
// SCOPE: 4 concepts — what neuroplasticity is, neurons that fire together
//        wire together, practice and habits reshape the brain, growth mindset
// VOICE: Sage = gentle, peaceful, encouraging, unhurried
// NOTE: Brain (L01 amygdala/PFC) → here the brain CHANGES. Links to Cosmos L10.
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-02`,
      title: `Neuroplasticity: You Can Change Your Brain`,
      duration: 18,
      xpReward: 75,
      badge: `brain-shaper`,
      badgeName: `Brain Shaper`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Last time, you learned that your emotions come from your remarkable brain. Today I want to share one of the most hopeful, empowering truths in all of science: your brain is NOT fixed. You can actually change it, shape it, and strengthen it, throughout your entire life. This means you are never "stuck" being who you are today. The way you think, feel, and respond can all grow and improve. This amazing ability has a name: NEUROPLASTICITY. By the end of today, you'll understand how you can shape your own mind. Take a breath, and let's begin.`,
          headline: `Neuroplasticity`,
          subtitle: `The hopeful science: you can shape your own brain`,
          visual: `/ue-assets/iw/exp-iw-l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Brain Is Always Changing`,
          paragraphs: [
            `For a long time, people believed the brain stopped changing after childhood, that you were simply born with a certain brain and stuck with it. We now know this is WRONG. Your brain has a remarkable ability called NEUROPLASTICITY: the power to change, grow, and rewire itself throughout your entire life. The word comes from "neuro" (brain) and "plastic" (able to be shaped). Your brain is a bit like soft clay that's always being gently molded by everything you do, think, and experience.`,
            `This happens through your brain's billions of cells, called NEURONS, and the connections between them. Every time you learn something, practice a skill, or even think a thought, the connections between your neurons physically change. Connections you use a lot grow STRONGER and faster. Connections you rarely use grow weaker and may fade away. In a very real, physical sense, your brain is constantly being reshaped by how you use it. You are, quite literally, building your own brain through what you do and think each day. That's not a metaphor. It's biology.`,
          ],
          image: `/ue-assets/iw/exp-iw-l02-s1-always-changing.webp`,
          imageCaption: `Neuroplasticity: your brain is like clay, reshaped by what you do and think.`,
          vocab: [
            {
              word: `neuroplasticity`,
              definition: `Your brain's ability to change, grow, and rewire itself throughout your whole life. From "neuro" (brain) and "plastic" (shapeable). Learning and practice physically reshape the connections between your brain cells.`,
              audioPrompt: `Neuroplasticity is your brain's ability to change, grow, and rewire itself throughout your entire life, {name}. The word comes from neuro, meaning brain, and plastic, meaning able to be shaped. For a long time, people believed the brain stopped changing after childhood. We now know that's wrong. Your brain is like soft clay, always molded by everything you do, think, and experience. Every time you learn something or practice a skill, the connections between your brain cells physically change. You are building your own brain daily.`,
            },
            {
              word: `synapse`,
              definition: `The tiny gap between two neurons where signals pass from one cell to another. When neurons fire together repeatedly, their synaptic connection grows stronger — this is where neuroplasticity happens at its most basic level.`,
              audioPrompt: `A synapse is the tiny gap between two neurons where signals pass from one cell to another, {name}. Every time you think, learn, or practice something, signals jump across synapses. When two neurons fire together repeatedly, their synaptic connection gets stronger and more efficient. This is where neuroplasticity happens at its most basic level. Every skill you build, every thought you repeat, every habit you form, is shaped by synaptic connections growing stronger through use. Your brain rewires itself synapse by synapse.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Neurons That Fire Together, Wire Together`,
          paragraphs: [
            `Here's how the rewiring actually works, in a simple phrase scientists love: "neurons that fire together, wire together." When two neurons activate at the same time, again and again, the connection between them gets stronger, like a path being worn between them. The more often they fire together, the easier and faster it becomes for the signal to travel that path. This is how learning physically happens in your brain. A new skill that feels hard at first (because the path is faint) becomes easier with practice (because the path grows strong).`,
            `Think of it like a trail through a forest. The first time you walk a new route, it's slow and difficult, pushing through thick brush. But each time you walk it, the path becomes clearer and easier. Walk it enough, and it becomes a smooth, well-worn trail you can travel almost without thinking. Your brain works the same way: repeated practice turns a difficult new skill into an easy, automatic one by strengthening the neural pathway. This is why practice works, and why "I can't do it yet" is so much truer than "I can't do it." The pathway is simply still being built.`,
          ],
          image: `/ue-assets/iw/exp-iw-l02-s2-fire-together.webp`,
          imageCaption: `Neurons that fire together wire together: practice wears a smooth trail in your brain.`,
          vocab: [
            {
              word: `neuron`,
              definition: `A brain cell that carries signals. Your brain has billions of them, connected in a vast network. When neurons fire together repeatedly, their connection grows stronger, which is how learning physically happens.`,
              audioPrompt: `A neuron is a brain cell that carries signals, {name}. Your brain has billions of them, connected in a vast network. Here's how rewiring works: neurons that fire together, wire together. When two neurons activate together again and again, their connection grows stronger. Think of a trail through a forest. The first time you walk a new route, it's slow. But each time you walk it, the path gets clearer and easier. Your brain works the same way. Practice strengthens the neural pathway and turns a hard skill easy.`,
            },
            {
              word: `neural pathway`,
              definition: `A network of connected neurons that works together to carry a signal in your brain. Like a trail in a forest: faint at first, but stronger and smoother with every repetition.`,
              audioPrompt: `A neural pathway is a network of connected neurons that works together to carry a signal in your brain, {name}. Think of it as the trail through the forest. At first, a new pathway is faint and slow. With repetition, it grows stronger and more efficient, until the signal travels smoothly and quickly. This is why skills that once felt impossible start to feel natural. When you practice anything, you're strengthening a neural pathway. The more you use it, the more automatic it becomes.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Practice and Habits Shape Who You Become`,
          paragraphs: [
            `Neuroplasticity isn't only about learning school skills like math or music. It shapes your HABITS, your moods, and even your personality. Whatever you practice, you get better at, because you're strengthening those brain pathways. If you practice worrying, your brain gets better at worrying. If you practice gratitude, your brain gets better at noticing good things. If you practice a calming breath when upset, that calming response grows stronger over time. This is incredibly important: you are training your brain all the time, whether you mean to or not, through what you repeatedly do and think.`,
            `This gives you real power. It means you can deliberately shape your own brain in the directions you want. Want to become calmer? Practice calming. Want to be more confident? Practice the thoughts and actions of confidence. Want to be kinder, braver, or more focused? Practice those things, and your brain will gradually rewire to make them more natural. It takes repetition and patience (pathways don't form overnight), but it absolutely works. The habits you build today are quite literally shaping the brain (and the person) you'll have tomorrow. You're not just living your life; you're designing your own mind.`,
          ],
          image: `/ue-assets/iw/exp-iw-l02-s3-habits.webp`,
          imageCaption: `Whatever you practice, you strengthen. Your habits shape the brain you'll have tomorrow.`,
          vocab: [
            {
              word: `habit`,
              definition: `A behavior or thought pattern repeated so often it becomes automatic. Habits form when brain pathways are strengthened through repetition. You can shape your brain by choosing which habits to practice.`,
              audioPrompt: `A habit is a behavior or thought pattern you repeat so often it becomes automatic, {name}. Habits form through neuroplasticity: when you repeat something, the brain pathway grows stronger until the action feels easy and natural. Whatever you practice, you get better at. If you practice worrying, your brain gets better at worrying. If you practice gratitude, your brain gets better at noticing good things. This gives you real power to deliberately shape your own brain. The habits you build today are shaping the person you'll be tomorrow.`,
            },
            {
              word: `mindset`,
              definition: `The collection of beliefs and attitudes you hold about yourself and the world. Mindsets are habits of thought — and like all habits, they can change through neuroplasticity.`,
              audioPrompt: `A mindset is the collection of beliefs and attitudes you hold about yourself and the world, {name}. Your mindset shapes how you see every situation. If you believe a mistake means you're bad at something, you might give up. If you believe a mistake means you're still learning, you'll try again. Mindsets are habits of thought, and like all habits, they can change through neuroplasticity. If you practice seeing challenges as chances to grow, your brain builds that pathway, and it becomes more natural over time.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Growth Mindset: The Power of "Yet"`,
          paragraphs: [
            `Understanding neuroplasticity leads to one of the most important attitudes you can have: a GROWTH MINDSET. This means believing that your abilities can GROW with effort and practice, because (as you now know) they literally can. The opposite is a "fixed mindset," believing you're simply born good or bad at things and can't change. Science is clear: the growth mindset is closer to the truth, because your brain really does change with practice. The way you THINK about your own abilities actually affects how much you grow.`,
            `One tiny word captures the whole idea: "YET." Instead of "I can't do this," you can say "I can't do this YET." That little word changes everything, because it's TRUE. You can't do it yet, because the brain pathway is still being built. With practice, you will. So when something feels hard, remember: that struggle is the feeling of your brain LITERALLY rewiring itself and growing stronger. Difficulty isn't a sign you can't; it's a sign you're building something new. Sage's gentle teaching: be patient and kind with yourself as you grow. You are not fixed. You are a work in progress, with the remarkable power to shape your own mind, one thought, one practice, one day at a time. That is a beautiful and hopeful truth to carry with you.`,
          ],
          image: `/ue-assets/iw/exp-iw-l02-s4-yet.webp`,
          imageCaption: `The power of "yet": struggle is the feeling of your brain rewiring and growing.`,
          vocab: [
            {
              word: `growth mindset`,
              definition: `The belief that your abilities can grow with effort and practice, because your brain physically changes (neuroplasticity). The opposite is a "fixed mindset." Adding "yet" ("I can't do this yet") captures it.`,
              audioPrompt: `A growth mindset is the belief that your abilities can grow with effort and practice, {name}. Thanks to neuroplasticity, they literally can. The opposite, a fixed mindset, believes you're born good or bad at things and can't change. Science shows the growth mindset is closer to the truth. One tiny word captures it: yet. Instead of saying I can't do this, say I can't do this yet. That word is true because the brain pathway is still forming. When something feels hard, that struggle is your brain rewiring and growing.`,
            },
            {
              word: `fixed mindset`,
              definition: `The belief that your abilities are set and can't change. Science shows this is inaccurate — neuroplasticity proves your brain can always grow with practice. Fixed mindset says "I can't." Growth mindset says "I can't yet."`,
              audioPrompt: `A fixed mindset is the belief that your abilities are set and can't really change, {name}. Someone with a fixed mindset might think they're just not a math person, as if that's locked in. But science shows this is not accurate. Neuroplasticity proves your brain can always change and grow with practice. The difference between a fixed and a growth mindset isn't about talent. It's about how you respond to challenges. Fixed mindset says I can't. Growth mindset says I can't yet. One closes doors. The other opens them.`,
            },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put it in order, {name}. Here are five steps showing how a brand-new skill becomes wired into your brain through neuroplasticity, scrambled up. Use the arrows to arrange them from FIRST (top) to LAST (bottom). Think about how a faint forest trail becomes a smooth path.`,
          items: [
            { id: `step-new`,       label: `You try a new skill for the first time, and it feels hard and slow`,          position: 1 },
            { id: `step-fire`,      label: `Neurons fire together as you practice, beginning to form a connection`,      position: 2 },
            { id: `step-repeat`,    label: `With repeated practice, the connection (the brain pathway) grows stronger`,  position: 3 },
            { id: `step-easier`,    label: `The skill starts to feel easier, because the pathway is now well-worn`,      position: 4 },
            { id: `step-automatic`, label: `Eventually the skill becomes smooth and almost automatic`,                    position: 5 },
          ],
          completionMessage: `Beautiful work, {name}! That's neuroplasticity in action: a hard new skill becomes easy and automatic as practice strengthens the brain pathway, just like a faint forest trail becoming a smooth, well-worn path. Remember this the next time something feels hard. That struggle is your brain rewiring itself. You can't do it YET, but the pathway is forming.`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is NEUROPLASTICITY?`,
              options: [
                `A type of plastic toy`,
                `Your brain's ability to change, grow, and rewire itself throughout your whole life`,
                `A brain that never changes`,
                `A kind of brain surgery`,
              ],
              correctIndex: 1,
              explanation: `Neuroplasticity is your brain's ability to change, grow, and rewire itself throughout your entire life ("neuro" = brain, "plastic" = shapeable). Learning and practice physically reshape the connections between your brain cells. You build your own brain.` },

            { id: `l02-q2`, format: `true-false`,
              question: `True or false: Scientists used to think the brain stopped changing after childhood, but we now know it can change throughout life.`,
              correctAnswer: true,
              explanation: `True. People once believed you were stuck with the brain you were born with. We now know that's wrong: thanks to neuroplasticity, your brain keeps changing, growing, and rewiring throughout your entire life. That's deeply hopeful news.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What does "neurons that fire together, wire together" mean?`,
              options: [
                `Neurons explode`,
                `When neurons activate together repeatedly, their connection grows stronger — this is how learning happens`,
                `Neurons disconnect when used`,
                `Brain cells never connect`,
              ],
              correctIndex: 1,
              explanation: `When two neurons activate at the same time again and again, the connection between them strengthens, like a path being worn between them. The more they fire together, the stronger the pathway. This is how learning physically happens in your brain.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `Why does the forest-trail comparison fit how the brain learns?`,
              options: [
                `Brains are made of trees`,
                `A new route is slow and hard at first, but each time you travel it, the path gets clearer and easier — like a brain pathway with practice`,
                `Trails never change`,
                `It doesn't fit at all`,
              ],
              correctIndex: 1,
              explanation: `Like a forest trail, a new skill is slow and difficult at first (faint path), but repeated practice makes it clearer and easier until it's smooth and almost automatic (well-worn trail). Practice strengthens the neural pathway the same way.` },

            { id: `l02-q5`, format: `multiple-choice`,
              question: `How does neuroplasticity relate to your HABITS?`,
              options: [
                `Habits have nothing to do with the brain`,
                `Whatever you practice, you strengthen — so your repeated actions and thoughts shape your habits and even your moods`,
                `Habits can never change`,
                `Only bad habits use the brain`,
              ],
              correctIndex: 1,
              explanation: `Whatever you repeatedly do or think, you strengthen in your brain. Practice worrying, and your brain gets better at worrying. Practice gratitude, and it gets better at noticing good. You're training your brain all the time, so you can choose your habits wisely.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `What is a GROWTH MINDSET?`,
              options: [
                `Believing you're stuck with your abilities`,
                `Believing your abilities can grow with effort and practice — which is true, because your brain physically changes`,
                `Thinking you're already perfect`,
                `Giving up when things are hard`,
              ],
              correctIndex: 1,
              explanation: `A growth mindset is believing your abilities can grow with effort and practice, which is true thanks to neuroplasticity. The opposite, a "fixed mindset," believes you can't change. Science shows the growth mindset is closer to the truth.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `Why is the word "YET" so powerful?`,
              options: [
                `It's a magic spell`,
                `"I can't do this YET" is true — the brain pathway is still being built, and with practice you will be able to`,
                `It means you'll never learn`,
                `It has no real meaning`,
              ],
              correctIndex: 1,
              explanation: `Adding "yet" ("I can't do this yet") is powerful because it's TRUE. You can't do it yet because the brain pathway is still forming. With practice, you will. That little word turns a dead end into a path forward.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `According to Sage, what does the FEELING of struggle actually mean?`,
              options: [
                `That you should quit`,
                `That your brain is literally rewiring itself and growing stronger — difficulty means you're building something new`,
                `That you're not smart`,
                `That the task is impossible`,
              ],
              correctIndex: 1,
              explanation: `When something feels hard, that struggle is the feeling of your brain literally rewiring and growing stronger. Difficulty isn't a sign you can't, it's a sign you're building a new pathway. Be patient and kind with yourself as you grow.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it just for yourself. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of something you can do easily now that was once hard. Knowing about neuroplasticity, what was happening in your brain as you practiced it?` },
            { id: `r2`, text: `"Whatever you practice, you get better at." Is there a thought or habit you'd like to practice MORE, to strengthen that pathway?` },
            { id: `r3`, text: `Is there something you've said "I can't do" that you could start saying "I can't do YET" about? How does adding "yet" change how it feels?` },
            { id: `r4`, text: `Struggle means your brain is rewiring and growing. Does knowing that change how you feel about things that are hard for you right now?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Neuroplasticity is one of the most empowering ideas you can carry through life, because it applies to absolutely everything you want to grow at: school subjects, sports, music, friendships, confidence, calmness, and kindness. Athletes use it to build skills. Musicians use it to master instruments. People recovering from injuries use it to rebuild abilities. And anyone can use it to grow into the person they want to become. Sage's note: the most successful, peaceful, and resilient people aren't those who never struggle. They're the ones who understand that struggle is growth, and who keep gently practicing what matters to them. You now hold that understanding. It will serve you your whole life.`,
          familyAdventure: `Family Growth Challenge. As a family, each person picks one small new skill to practice a little every day for a week (juggling, a magic trick, a few words of a new language, drawing something specific). Each day, notice together how it feels: hard at first, then gradually easier. At the end of the week, talk about how that improvement was neuroplasticity in action, your brains literally rewiring. Celebrate the struggle as proof of growth. Then talk about a bigger thing each of you wants to grow at over time.`,
          creativePrompt: {
            intro: `Imagine you could write a letter to your future self, one year from now, about something you're going to grow at using the power of neuroplasticity. Write that letter.`,
            floor: `Write at least 5 sentences. Name something you want to grow at, and describe how you'll practice it to rewire your brain.`,
            stretch: `Write 8 to 10 sentences. Describe your goal, how neuroplasticity will help, how you'll handle the hard parts, and who you hope to become.`,
            open: `Write as much as you want. Write a full letter to your future self one year from now. Choose something real you want to grow at (a skill, a habit, a way of thinking or feeling). Explain how you now understand neuroplasticity and the power of practice, how you plan to strengthen that brain pathway through repetition, how you'll stay patient and use the power of "yet" when it gets hard, and who you hope to have become by the time you read the letter. Make it honest, hopeful, and encouraging.`,
            frames: [
              `Dear future me, one year from now: I've decided to grow at ___.`,
              `I now understand that my brain can change because ___.`,
              `My plan to practice and strengthen this pathway is ___.`,
              `When it gets hard, I'll remember that ___.`,
              `By the time you read this, I hope you've become ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now understand one of the most empowering truths there is: your brain is not fixed. Through neuroplasticity, you can shape it. You've learned how neurons wire together with practice, how your habits build your brain, and the quiet power of a growth mindset and the word "yet." You are a work in progress, with real power to grow. Next, we explore the hidden beliefs that can hold us back, and where they come from. LIMITING BELIEFS. Be gentle with yourself, and I'll see you there. — Sage.`,
          badge: `brain-shaper`,
          badgeName: `Brain Shaper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
