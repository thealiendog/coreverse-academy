// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L04 — The Subconscious Mind: Your Hidden Driver
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : psychology at a kid level (conscious vs subconscious processing,
//            automaticity). Grounded, no pseudoscience.
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order how an action moves from conscious → subconscious)
// SCOPE: 4 concepts — conscious vs subconscious mind, what the subconscious
//        does, how it gets "programmed" by repetition, working WITH it
// VOICE: Sage = gentle, wise, reassuring
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-04`,
      title: `The Subconscious Mind: Your Hidden Driver`,
      duration: 18,
      xpReward: 75,
      badge: `mind-explorer`,
      badgeName: `Mind Explorer`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Here's a surprising idea to sit with: most of what your mind does happens WITHOUT you noticing it. Below the thoughts you're aware of, there's a vast, quiet part of your mind working all the time, shaping your habits, reactions, and even your beliefs. It's called the SUBCONSCIOUS MIND, and it's a bit like the hidden driver of much of your life. Understanding it helps you understand why you do what you do, and how to gently guide yourself toward who you want to be. Take a calm breath, and let's explore.`,
          headline: `The Subconscious Mind`,
          subtitle: `The quiet, powerful part of your mind working behind the scenes`,
          visual: `/ue-assets/iw/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Levels of Your Mind`,
          paragraphs: [
            `Your mind works on two main levels. The CONSCIOUS mind is the part you're aware of right now: the thoughts you're thinking, the choices you're actively making, the things you're paying attention to. It's like the captain on the deck of a ship, making deliberate decisions. But the conscious mind can only focus on a few things at a time, and it actually handles a surprisingly small part of everything your mind does.`,
            `Below it is the SUBCONSCIOUS mind, the enormous part working quietly in the background, outside your direct awareness. It runs your habits, your automatic reactions, your deeply-stored memories, and many of your beliefs (including the limiting ones from our last lesson). If the conscious mind is the captain, the subconscious is the vast crew below deck, keeping the whole ship running, much of it automatically. Scientists who study the mind agree that a huge portion of what we do each day is driven by these automatic, subconscious processes, not by conscious choice. You're guided by your hidden driver far more than you might think.`,
          ],
          image: `/ue-assets/iw/l04-s1-two-levels.webp`,
          imageCaption: `Conscious mind: the captain on deck. Subconscious: the vast crew below, running the ship.`,
          vocab: [
            {
              word: `conscious mind`,
              definition: `The part of your mind you're aware of right now: your active thoughts, choices, and focus. Like a ship's captain, it makes deliberate decisions, but can only handle a few things at a time.`,
              audioPrompt: `The conscious mind is the part of your mind you're aware of right now, {name}. The thoughts you're thinking, the choices you're making, the things you're paying attention to. It's like the captain on the deck of a ship, making deliberate decisions. But the conscious mind can only focus on a few things at a time, and it handles a surprisingly small part of everything your mind does. Below it is the subconscious mind, working quietly in the background, running your habits, automatic reactions, and many of your beliefs.`,
            },
            {
              word: `attention`,
              definition: `The spotlight of your conscious mind — what you're actively focused on. Attention is limited, which is why most mental processing happens subconsciously. You can deliberately choose where you direct it.`,
              audioPrompt: `Attention is the spotlight of your conscious mind, {name}. Whatever you direct your attention toward, you're actively aware of and thinking about. But attention has limits. Your conscious mind can focus on only a few things at once, which is why so much of your mental processing happens below conscious awareness in the subconscious. Here's something powerful: you get to choose where you point your spotlight. Deliberately directing your attention toward helpful thoughts, patterns, and goals is one of the most important skills in guiding your inner world.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Your Subconscious Does For You`,
          paragraphs: [
            `Your subconscious mind is incredibly helpful, even essential. Imagine if you had to consciously think about every single thing: how to walk, how to form each letter as you write, how to balance on a bike, how to understand each word as you read. You'd be completely overwhelmed in seconds. The subconscious takes over all these learned skills so they become AUTOMATIC, freeing your conscious mind to focus on new and important things. When you first learned to tie your shoes, it took total concentration. Now your subconscious does it while you think about something else entirely.`,
            `This is actually neuroplasticity in action (remember?). When you practice something enough, the brain pathway becomes so strong that the skill moves from effortful conscious control down into smooth subconscious automaticity. This is wonderful for helpful skills. But here's the catch: the subconscious doesn't judge whether a pattern is GOOD for you. It simply automates whatever gets repeated. So unhelpful habits and limiting beliefs can also become automatic and run on their own, quietly, below your awareness. Your subconscious is a powerful, loyal servant, but it will faithfully automate whatever you feed it, helpful or not.`,
          ],
          image: `/ue-assets/iw/l04-s2-what-it-does.webp`,
          imageCaption: `Your subconscious automates learned skills, freeing your conscious mind. But it doesn't judge.`,
          vocab: [
            {
              word: `subconscious mind`,
              definition: `The vast part of your mind working quietly outside your awareness. It runs your habits, automatic reactions, stored memories, and many beliefs. It automates whatever is repeated, helpful or not.`,
              audioPrompt: `The subconscious mind is the vast part of your mind working quietly outside your awareness, {name}. It runs your habits, automatic reactions, stored memories, and many of your beliefs. It's incredibly helpful. Imagine having to consciously think about how to walk, write each letter, or balance on a bike. You'd be overwhelmed. The subconscious takes over learned skills so they become automatic, freeing your conscious mind for new things. But here's the catch. It doesn't judge whether a pattern is good for you. It simply automates whatever gets repeated.`,
            },
            {
              word: `implicit memory`,
              definition: `Memory stored in the subconscious that shapes your behavior without you consciously recalling it — like riding a bike, or deep-seated emotional reactions from early experiences.`,
              audioPrompt: `Implicit memory is memory stored in the subconscious that shapes your behavior without you consciously recalling it, {name}. You don't think about how to balance on a bike or how to read words. Your subconscious just does it. But implicit memory also stores emotional reactions from early experiences, including limiting beliefs. That's why certain situations trigger automatic feelings or reactions, even when you're not sure why. Understanding implicit memory helps explain why some patterns feel so automatic, and why awareness is the first step to changing them.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How the Subconscious Gets "Programmed"`,
          paragraphs: [
            `How does something get stored in your subconscious? Mainly through REPETITION and through strong EMOTION. Anything you do or think over and over gradually becomes a subconscious pattern, that's how habits form. And anything connected to a powerful feeling can get stored quickly and deeply, which is why emotional experiences (good or hard) can shape us so strongly, sometimes from a single moment. Your subconscious was being "programmed" all through your early childhood, absorbing patterns, beliefs, and reactions from your experiences and surroundings, long before you could consciously choose them.`,
            `This explains so much. It explains why habits are hard to break with willpower alone (they're running automatically from the subconscious). It explains why a limiting belief can feel so stubborn (it's stored deep below conscious awareness). And it explains why simply DECIDING to change, once, with your conscious mind, often isn't enough, because the old subconscious pattern keeps running. But here's the hopeful part: the same things that program the subconscious (repetition and emotion) are the tools you can use to RE-program it. By repeating new thoughts and actions, especially with genuine feeling, you can gradually replace old subconscious patterns with new ones. It takes patience and practice, but it absolutely works, because your brain can change.`,
          ],
          image: `/ue-assets/iw/l04-s3-programmed.webp`,
          imageCaption: `Repetition and emotion program the subconscious. The same tools can re-program it.`,
          vocab: [
            {
              word: `automaticity`,
              definition: `When a skill or behavior becomes automatic, done without conscious thought, after enough practice. Both helpful skills and unhelpful habits can become automatic through repetition.`,
              audioPrompt: `Automaticity is when a skill or behavior becomes automatic, {name}. Done without conscious thought, after enough practice. When you first learned to tie your shoes, it took total concentration. Now your subconscious does it while you think about something else. That's automaticity. How does something get stored in the subconscious? Mainly through repetition and through strong emotion. Anything you do or think over and over gradually becomes a subconscious pattern. The same tools can re-program it, by repeating new thoughts and actions with genuine feeling.`,
            },
            {
              word: `willpower`,
              definition: `Your conscious mind's ability to override an automatic habit or impulse. Real but limited — it tires with use and weakens under stress, which is why building good subconscious habits matters more than relying on willpower alone.`,
              audioPrompt: `Willpower is your conscious mind's ability to override an automatic habit or impulse, {name}. It's a real skill, but it has a serious limitation: it runs out. Willpower is tiring to use and tends to weaken when you're stressed, tired, or overwhelmed. That's why relying on willpower alone to change a habit rarely works long-term. The wiser approach is to re-program the subconscious through repetition, so the new behavior becomes automatic and doesn't need willpower at all. Work with your subconscious, not against it.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Working WITH Your Hidden Driver`,
          paragraphs: [
            `So how do you guide a part of your mind you can't directly control? You don't fight your subconscious; you work WITH it, gently and patiently. First, AWARENESS: simply noticing your automatic patterns (your habits, reactions, and beliefs) brings them into the light of your conscious mind, where you can examine them. You can't change what you can't see. Second, REPETITION: deliberately practicing the new thought, habit, or response you want, over and over, so it gradually becomes the new automatic pattern. Third, EMOTION: connecting your new patterns to genuine positive feeling helps them take root faster and deeper.`,
            `This is the foundation for nearly everything ahead in Inner World: reprogramming negative self-talk, building helpful habits, and practices like meditation and visualization all work partly by gently guiding the subconscious. Sage's gentle teaching: your subconscious mind isn't your enemy, and it isn't out to get you. It's a faithful, powerful helper that simply automates whatever you give it. When you understand this, you stop fighting yourself and start partnering with yourself. You become the captain who patiently and kindly trains the crew. With awareness, repetition, and feeling, you can guide your hidden driver toward the life and the self you truly want. That is real, gentle power.`,
          ],
          image: `/ue-assets/iw/l04-s4-working-with.webp`,
          imageCaption: `Awareness, repetition, emotion: the three keys to gently guiding your subconscious.`,
          vocab: [
            {
              word: `reprogramming`,
              definition: `Gradually replacing old subconscious patterns (habits, reactions, beliefs) with new, more helpful ones, using awareness, repetition, and genuine emotion. It takes patience, but works because the brain can change.`,
              audioPrompt: `Reprogramming means gradually replacing old subconscious patterns with new, more helpful ones, {name}. You don't fight your subconscious. You work with it, gently, using three keys. First, awareness. Simply noticing your automatic patterns brings them into the light where you can examine them. You can't change what you can't see. Second, repetition. Deliberately practicing the new thought or habit until it becomes the new automatic pattern. Third, emotion. Connecting new patterns to genuine positive feeling helps them take root faster. This is the foundation for everything ahead in Inner World.`,
            },
            {
              word: `affirmation`,
              definition: `A short, positive statement repeated deliberately to gradually replace a limiting belief. Affirmations work through repetition and emotion — the same principles that program the subconscious.`,
              audioPrompt: `An affirmation is a short, positive statement you repeat deliberately to gradually replace a limiting belief, {name}. Something like I am capable and growing, or I handle challenges with calm. Affirmations work through the subconscious principle of repetition: the more you repeat a thought with genuine feeling, the stronger that neural pathway grows, until the belief starts to feel natural. They're most powerful when connected to real evidence and genuine emotion, not just words. Used wisely, affirmations are one of the practical tools for reprogramming your inner world.`,
            },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put it in order, {name}. Here are five steps showing how a new action moves from your conscious mind down into your subconscious, becoming automatic. Use the arrows to arrange them from FIRST (top) to LAST (bottom). Think about learning to ride a bike.`,
          items: [
            { id: `step-decide`,  label: `Your conscious mind decides to learn something new (like riding a bike)`,        position: 1 },
            { id: `step-effort`,  label: `At first it takes full concentration and feels hard and clumsy`,                  position: 2 },
            { id: `step-repeat`,  label: `You repeat it many times, and the brain pathway grows stronger`,                  position: 3 },
            { id: `step-easier`,  label: `It starts needing less and less conscious thought`,                               position: 4 },
            { id: `step-auto`,    label: `Finally your subconscious runs it automatically, freeing your conscious mind`,     position: 5 },
          ],
          completionMessage: `Beautiful, {name}! That's how a skill moves from conscious effort down into smooth subconscious automaticity, just like learning to ride a bike. The amazing part: this same process works for thoughts and habits too, not just physical skills. And it means you can deliberately train your subconscious by choosing what you repeat. You're learning to guide your hidden driver.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What is the CONSCIOUS mind?`,
              options: [
                `The part that runs automatically`,
                `The part you're aware of: your active thoughts, choices, and focus — like a ship's captain`,
                `A part only adults have`,
                `The same as the subconscious`,
              ],
              correctIndex: 1,
              explanation: `The conscious mind is the part you're aware of right now: your active thoughts, choices, and focus. It's like the captain on deck, making deliberate decisions, but it can only handle a few things at a time and does a surprisingly small part of your mind's work.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What is the SUBCONSCIOUS mind?`,
              options: [
                `The part you control directly`,
                `The vast part working quietly outside your awareness — running habits, reactions, memories, and beliefs`,
                `A part of your stomach`,
                `Something that doesn't exist`,
              ],
              correctIndex: 1,
              explanation: `The subconscious is the enormous part of your mind working quietly in the background, outside your awareness. It runs your habits, automatic reactions, stored memories, and many beliefs. Like the crew below deck keeping the whole ship running.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `Why is your subconscious mind so HELPFUL?`,
              options: [
                `It does nothing useful`,
                `It automates learned skills (like walking or reading) so your conscious mind is free to focus on new things`,
                `It makes you sleepy`,
                `It only stores bad habits`,
              ],
              correctIndex: 1,
              explanation: `Without the subconscious, you'd have to consciously think about walking, writing each letter, balancing on a bike, every moment. It automates learned skills so they become effortless, freeing your conscious mind for new and important things.` },

            { id: `l04-q4`, format: `true-false`,
              question: `True or false: The subconscious carefully judges whether a habit is good for you before automating it.`,
              correctAnswer: false,
              explanation: `False. The subconscious doesn't judge whether a pattern is good or bad for you. It simply automates whatever gets repeated. That's why both helpful skills AND unhelpful habits or limiting beliefs can become automatic and run on their own.` },

            { id: `l04-q5`, format: `multiple-choice`,
              question: `How does something get "programmed" into the subconscious?`,
              options: [
                `Only by reading about it once`,
                `Mainly through repetition and through strong emotion`,
                `By eating special foods`,
                `It can't be programmed`,
              ],
              correctIndex: 1,
              explanation: `The subconscious is programmed mainly through repetition (anything done over and over becomes a pattern) and through strong emotion (powerful feelings store things quickly and deeply). This is how habits form and how early experiences shape us.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `Why isn't simply DECIDING to change, once, usually enough to break a habit?`,
              options: [
                `Because change is impossible`,
                `Because the old pattern keeps running automatically from the subconscious — willpower alone struggles against it`,
                `Because you're not smart enough`,
                `Because habits aren't real`,
              ],
              correctIndex: 1,
              explanation: `A single conscious decision often isn't enough because the old habit keeps running automatically from the subconscious. That's why willpower alone struggles. To truly change, you re-program the subconscious through repetition and emotion over time.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `What are the THREE keys to working WITH your subconscious?`,
              options: [
                `Fighting, forcing, ignoring`,
                `Awareness (noticing patterns), repetition (practicing the new one), and emotion (genuine feeling)`,
                `Sleeping, eating, resting`,
                `Wishing, hoping, waiting`,
              ],
              correctIndex: 1,
              explanation: `You work WITH your subconscious using three keys: awareness (noticing your automatic patterns), repetition (deliberately practicing the new thought or habit), and emotion (connecting new patterns to genuine positive feeling so they take root deeper).` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `According to Sage, how should you treat your subconscious mind?`,
              options: [
                `As an enemy to fight`,
                `As a faithful, powerful helper to partner with — be the kind captain who patiently trains the crew`,
                `Ignore it completely`,
                `Be afraid of it`,
              ],
              correctIndex: 1,
              explanation: `Your subconscious isn't your enemy. It's a faithful, powerful helper that automates whatever you give it. When you understand this, you stop fighting yourself and start partnering with yourself, like a kind captain patiently training the crew.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Take a slow breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Think of a skill your subconscious now does automatically (like reading or riding a bike). Isn't it amazing that it once took all your concentration?` },
            { id: `r2`, text: `Is there an automatic habit or reaction you have that you'd like to gently notice more? Remember: awareness is the first step, no judgment needed.` },
            { id: `r3`, text: `The subconscious automates whatever you repeat. What's one helpful thought or action you'd like to repeat until it becomes automatic?` },
            { id: `r4`, text: `Sage says to be a kind captain who patiently trains the crew. How does it feel to think of guiding your mind with patience instead of force?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Understanding the subconscious mind is one of the most practical insights in all of psychology, because it explains why change can be hard, and how to do it wisely. It's why athletes practice skills until they're automatic, why musicians drill until their fingers "just know," and why building good habits (rather than relying on willpower) is the secret to lasting change. Once you understand that most of your behavior runs on subconscious autopilot, you stop being frustrated with yourself and start working smarter: with awareness, repetition, and feeling. Sage's note: nearly every powerful practice for growing your inner world (calming techniques, affirmations, visualization, meditation) works partly by gently guiding your subconscious. You now understand the "why" behind all of them.`,
          familyAdventure: `Family Autopilot Hunt. As a family, spend a day noticing all the things your subconscious does automatically: walking, reading signs, brushing teeth, knowing the way home. Make a list together, it'll be surprisingly long! Then talk about ONE small habit each person would like to build (or gently change), and how you'd use repetition to train your subconscious over time. Maybe even start that day. You're learning to be the kind captains of your own minds, together.`,
          creativePrompt: {
            intro: `Imagine your mind as a ship, with your conscious mind as the captain and your subconscious as the crew below deck. Write a story about them learning to work together.`,
            floor: `Write at least 5 sentences. Describe the captain and crew, and show them teaming up to build one new helpful habit.`,
            stretch: `Write 8 to 10 sentences. Show the captain learning that forcing the crew doesn't work, and discovering how to guide them with awareness, repetition, and encouragement.`,
            open: `Write as much as you want. Write a full story of the mind as a ship. Introduce the conscious captain (aware, deliberate, but able to focus on only a little at a time) and the vast subconscious crew below deck (powerful, hardworking, automating everything they're taught, but not judging what's good or bad). Show a moment when the captain wants to change something and learns that shouting orders once doesn't work, then discovers the real way: patient awareness, repetition, and genuine encouragement. Show them becoming a great team that steers the ship toward a wonderful destination. Make it imaginative AND show you understand how the mind really works.`,
            frames: [
              `On the ship of the mind, the captain was named ___, and the crew below deck ___.`,
              `The captain wanted to change ___.`,
              `At first the captain tried to force it, but ___.`,
              `Then the captain discovered the real way: ___.`,
              `Working together with patience, the captain and crew ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now understand the hidden driver of so much of your life: your subconscious mind. You've learned the two levels of your mind, how the subconscious automates skills (and habits, and beliefs), how it gets programmed through repetition and emotion, and the three gentle keys to working with it. This understanding is the foundation for so much ahead. Next, we put it to use as we learn to transform the voice inside your head. REPROGRAMMING NEGATIVE SELF-TALK. Rest well, and I'll see you there. — Sage.`,
          badge: `mind-explorer`,
          badgeName: `Mind Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
