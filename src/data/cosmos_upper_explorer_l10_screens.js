// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L10 — The Brain and Nervous System
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS1 — body systems; information processing
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify actions by nervous system control)
// SCOPE: 4 concepts — what the nervous system is, the brain, how signals
//        travel, neuroplasticity (the brain can change)
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-10`,
      title: `The Brain and Nervous System`,
      duration: 18,
      xpReward: 75,
      badge: `brain-explorer`,
      badgeName: `Brain Explorer`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. We've explored the largest things in the universe and the tiniest. Today we explore what may be the most COMPLEX object in the entire known universe, and it's sitting right inside your head: your BRAIN. With its network of nerves, it controls everything you do, feel, and think. It has more connections than there are stars in our galaxy. And here's the most exciting part: it can grow and change throughout your whole life. By the end of today, you'll understand how your brain and nervous system work. Let's begin.`,
          headline: `The Brain and Nervous System`,
          subtitle: `The most complex object in the known universe, inside your head`,
          visual: `/ue-assets/cosmos/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Nervous System Is`,
          paragraphs: [
            `Your NERVOUS SYSTEM is your body's communication and control network. It has three main parts: the BRAIN (the control center), the SPINAL CORD (the main highway of signals running down your back), and the NERVES (which branch out to every part of your body). Together, they carry messages at incredible speed between your brain and the rest of you, letting you sense the world, move your body, and think. The nervous system is why you can feel a touch, pull your hand from something hot, ride a bike, and read these words.`,
            `The nervous system works through ELECTRICAL signals, a bit like a living electrical network. When you touch something, sensors in your skin send signals zooming up your nerves to your spinal cord and brain. Your brain processes the information and sends signals back, telling your muscles what to do. All of this happens in a tiny fraction of a second, faster than you can consciously notice. Right now, billions of signals are racing through your nervous system, keeping your heart beating, your lungs breathing, and your thoughts flowing, most of it without you even being aware of it.`,
          ],
          image: `/ue-assets/cosmos/l10-s1-system.webp`,
          imageCaption: `Brain, spinal cord, and nerves: your body's lightning-fast communication network.`,
          vocab: [
            { word: `nervous system`,
              definition: `The body's communication and control network, made of the brain, spinal cord, and nerves. It carries electrical signals at high speed, letting you sense, move, and think.`,
              audioPrompt: `Your nervous system is your body's communication and control network, {name}. It has three main parts: the brain (control center), the spinal cord (the signal highway down your back), and the nerves (branching to every part of your body). Together they carry messages at incredible speed, letting you sense the world, move your body, and think. The nervous system works through electrical signals. Right now, billions of signals are racing through it, keeping your heart beating, your lungs breathing, and your thoughts flowing.` },
            { word: `spinal cord`,
              definition: `The thick bundle of nerves running down your back, connecting the brain to the rest of the body. It is the main highway for signals between brain and body, and it handles reflexes without waiting for the brain.`,
              audioPrompt: `The spinal cord is the thick bundle of nerves running down your back, {name}. It's the main highway for signals traveling between your brain and the rest of your body. When you sense something, signals race up the spinal cord to the brain. When your brain decides on an action, signals race back down. The spinal cord also handles reflexes on its own, without waiting for the brain. If you touch something hot, your spinal cord sends the pull-away command before the signal even reaches your brain.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Astonishing Brain`,
          paragraphs: [
            `Your BRAIN is extraordinary. It weighs only about 1.4 kilograms (roughly 3 pounds), yet it's the most complex object scientists have ever studied. It's made of around 86 BILLION special cells called NEURONS, each connected to thousands of others. The total number of connections in your brain is in the TRILLIONS, more connections than there are stars in the entire Milky Way galaxy. This vast network is what lets you think, remember, feel, imagine, and be YOU.`,
            `Different parts of the brain handle different jobs. The large, wrinkled outer layer (the cortex) handles thinking, decision-making, and the senses. Areas near the back process what your eyes see. Areas on the sides handle hearing and language. Deeper parts control emotions, memory, and automatic functions like breathing. Yet all these parts work TOGETHER as one connected whole. When you catch a ball, your brain combines vision, prediction, memory, and muscle control in an instant. Despite all we've learned, the brain remains one of the greatest scientific frontiers. We're still discovering how it creates thought, memory, and the experience of being aware. The universe's most complex object is still revealing its secrets.`,
          ],
          image: `/ue-assets/cosmos/l10-s2-brain.webp`,
          imageCaption: `86 billion neurons, trillions of connections: more than the stars in our galaxy.`,
          vocab: [
            { word: `neuron`,
              definition: `A special cell that carries electrical signals in the nervous system. The brain has around 86 billion neurons, each connected to thousands of others, forming a vast network that lets you think, feel, and remember.`,
              audioPrompt: `A neuron is a special cell that carries electrical signals in the nervous system, {name}. Your brain has around 86 billion neurons, each connected to thousands of others. The total number of connections is in the trillions, more than the stars in our galaxy. Neurons pass signals to each other to create everything you think, feel, remember, and do. When you learn something, neurons form new connections. When you practice a skill, those connections get stronger. This vast network of neurons is what makes you who you are.` },
            { word: `synapse`,
              definition: `The tiny gap between two neurons where signals pass using chemical messengers. Synapses are where learning and memory physically happen — practicing something strengthens the synapses involved in that skill.`,
              audioPrompt: `A synapse is the tiny gap between two neurons where signals pass, {name}. When an electrical signal reaches the end of one neuron, it releases chemical messengers that cross the gap to trigger the next neuron. This electrical-then-chemical relay is how every thought, memory, and feeling travels through your brain. Synapses are where learning physically happens. When you practice something, the synapses involved get stronger and faster. This is the biological basis of skill and memory: repeated practice literally strengthens the connections.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Signals Travel`,
          paragraphs: [
            `Neurons pass signals using a mix of ELECTRICAL and CHEMICAL signaling. Inside a neuron, the signal travels as a tiny electrical pulse. When it reaches the end of the neuron, it crosses a tiny gap to the next neuron using chemical messengers. This electrical-then-chemical relay repeats from neuron to neuron, carrying information across your nervous system at speeds up to about 120 meters per second, faster than a race car.`,
            `Some signals don't even need your brain to decide. These are REFLEXES. If you touch something painfully hot, the signal travels to your spinal cord, which sends back an immediate "pull away!" command, all before the signal even reaches your brain. That's why you jerk your hand away before you consciously feel the pain. This shortcut, called a reflex, protects you by acting faster than conscious thought. Other actions are VOLUNTARY: you decide to wave, walk, or write, and your brain sends the commands. And many actions are AUTOMATIC (autonomic): your heartbeat, digestion, and breathing happen without you thinking about them at all. Your nervous system manages all three kinds at once, constantly.`,
          ],
          image: `/ue-assets/cosmos/l10-s3-signals.webp`,
          imageCaption: `Electrical-then-chemical relay, neuron to neuron, faster than a race car.`,
          vocab: [
            { word: `reflex`,
              definition: `An automatic, very fast response that happens without conscious thought, often to protect you. Like pulling your hand from something hot before you even feel the pain. The spinal cord handles it without waiting for the brain.`,
              audioPrompt: `A reflex is an automatic, very fast response that happens without conscious thought, {name}. If you touch something painfully hot, the signal travels to your spinal cord, which sends an immediate command before it reaches your brain. That's why you jerk your hand away before you consciously feel the pain. Reflexes protect you by acting faster than thought. They're different from voluntary actions, which you decide to do, and from automatic functions like your heartbeat, which run without any thought at all.` },
            { word: `nerve`,
              definition: `A bundle of fibers that carries electrical signals between the brain or spinal cord and the body. Nerves reach every part of your body, letting you sense touch, pain, and temperature, and letting your brain control your muscles.`,
              audioPrompt: `A nerve is a bundle of fibers that carries electrical signals between the brain or spinal cord and the rest of your body, {name}. Nerves branch out everywhere, reaching every muscle, organ, and patch of skin. Sensory nerves carry signals from your body to the brain, letting you feel touch, pain, and temperature. Motor nerves carry signals from the brain back to the muscles, telling them what to do. The speed of nerve signals, up to 120 meters per second, is why your reactions can be almost instant.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Brain Can Change: Neuroplasticity`,
          paragraphs: [
            `Here is one of the most empowering discoveries in all of science: NEUROPLASTICITY. Your brain is not fixed. It can CHANGE, grow, and rewire itself throughout your entire life. Every time you learn something new, practice a skill, or form a memory, the connections between your neurons physically change. Connections you use a lot grow stronger. Connections you don't use fade. In a very real sense, you are constantly shaping your own brain through what you do, think, and practice.`,
            `This is incredibly good news. It means you are NOT stuck with the brain or abilities you have today. Struggling with math, music, reading, or anything else doesn't mean you "can't do it." It means the connections for that skill are still being built, and they grow stronger with practice. This is the science behind the "growth mindset" you may have explored in the Inner World subject. Your effort literally reshapes your brain. Nova's teaching: of all the wonders in the universe, one of the greatest is sitting inside your own head, and you have real power to shape it. Every time you learn, struggle, and keep going, you are upgrading the most complex object in the known universe. That's you.`,
          ],
          image: `/ue-assets/cosmos/l10-s4-neuroplasticity.webp`,
          imageCaption: `Neuroplasticity: your brain rewires itself as you learn. Effort reshapes your mind.`,
          vocab: [
            { word: `neuroplasticity`,
              definition: `The brain's ability to change, grow, and rewire itself throughout life. Learning and practice physically strengthen connections between neurons. It means you can keep growing your abilities at any age.`,
              audioPrompt: `Neuroplasticity is the brain's ability to change, grow, and rewire itself throughout your life, {name}. Every time you learn something new, practice a skill, or form a memory, the connections between neurons physically change. Connections you use a lot grow stronger. Connections you don't use fade. This means you are not stuck with the abilities you have today. Struggling with something doesn't mean you can't do it. It means the connections are still being built. Your effort literally reshapes your brain. That's the science behind a growth mindset.` },
            { word: `growth mindset`,
              definition: `The belief that abilities can grow through effort and practice. Backed by the science of neuroplasticity: your brain literally rewires itself as you learn. Struggling is not failure — it is the brain building new connections.`,
              audioPrompt: `A growth mindset is the belief that abilities can grow through effort and practice, {name}. It's not just an attitude. It's backed by the science of neuroplasticity. When you struggle with something and keep going, your brain is literally forming and strengthening new connections. That struggle is growth happening in real time. Someone with a growth mindset sees difficulty as a sign that their brain is working, not as proof they can't do something. This shift in thinking, supported by brain science, can change how you approach every challenge.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four things your body does. For each one, classify how your nervous system controls it: VOLUNTARY (you consciously choose to do it), REFLEX (automatic, fast, protective), or AUTONOMIC (automatic body function you don't think about)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `voluntary`,  label: `Voluntary`,  color: `#60A5FA`, description: `You consciously decide to do it, like waving or writing.` },
            { id: `reflex`,     label: `Reflex`,     color: `#F87171`, description: `An automatic, fast, protective response, like pulling away from heat.` },
            { id: `autonomic`,  label: `Autonomic`,  color: `#34D399`, description: `An automatic body function you don't think about, like digestion.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Action #1`,
              clues: [
                { text: `You decide to pick up a pencil and write your name.` },
                { text: `You consciously control each movement.` },
                { text: `You could choose to stop at any moment.` },
              ],
              correctAnswer: `voluntary`,
              realWorldExample: `Writing is a classic voluntary action.`,
              explanation: `You consciously decide and control it. Pure voluntary action. Your brain sends deliberate commands to your hand muscles, and you can start or stop whenever you choose.`,
            },
            {
              id: `case-2`,
              caseTitle: `Action #2`,
              clues: [
                { text: `Your hand touches a hot stove.` },
                { text: `You yank it away instantly, before you even feel the pain.` },
                { text: `Your spinal cord handled it without waiting for your brain.` },
              ],
              correctAnswer: `reflex`,
              realWorldExample: `The hot-stove reflex protects you from burns.`,
              explanation: `Instant, automatic, protective, faster than conscious thought. Pure reflex. Your spinal cord sent the "pull away" command before the signal even reached your brain, protecting you from a worse burn.`,
            },
            {
              id: `case-3`,
              caseTitle: `Action #3`,
              clues: [
                { text: `Your stomach digests the breakfast you ate.` },
                { text: `You're not thinking about it at all.` },
                { text: `It happens automatically, even while you sleep.` },
              ],
              correctAnswer: `autonomic`,
              realWorldExample: `Digestion runs automatically, day and night.`,
              explanation: `Automatic, unconscious, happening without any thought. Pure autonomic function. Your nervous system manages digestion, heartbeat, and many other functions in the background, without you ever deciding to.`,
            },
            {
              id: `case-4`,
              caseTitle: `Action #4 — The Tricky One: Breathing`,
              clues: [
                { text: `Most of the time, you breathe automatically, even while asleep, without thinking.` },
                { text: `But right now, you CAN choose to hold your breath or breathe deeply on purpose.` },
                { text: `It seems to be automatic AND controllable.` },
              ],
              correctAnswer: `autonomic`,
              realWorldExample: `Breathing is mostly autonomic but uniquely controllable.`,
              explanation: `Tricky because breathing is BOTH! Most of the time it's autonomic: it happens automatically without thought, even in your sleep, which is why we classify it as autonomic. But breathing is special, because you can ALSO take conscious (voluntary) control of it when you want to, like holding your breath or breathing deeply. This dual nature is exactly why breathing exercises are so powerful for calming the mind: they're a "doorway" between your automatic and conscious nervous systems. Lesson: a few body functions, like breathing and blinking, blur the line between automatic and voluntary. Breathing is mostly autonomic, but you have a special ability to take the wheel when you choose. That's a rare and useful gift.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What are the three main parts of the NERVOUS SYSTEM?`,
              options: [
                `Heart, lungs, stomach`,
                `The brain, the spinal cord, and the nerves`,
                `Bones, muscles, skin`,
                `Eyes, ears, nose`,
              ],
              correctIndex: 1,
              explanation: `The nervous system has the brain (control center), the spinal cord (signal highway down your back), and the nerves (branching to every body part). Together they carry signals at high speed, letting you sense, move, and think.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What is a NEURON?`,
              options: [
                `A type of bone`,
                `A special cell that carries electrical signals; the brain has ~86 billion of them`,
                `A blood cell`,
                `A part of the heart`,
              ],
              correctIndex: 1,
              explanation: `A neuron is a cell that carries electrical signals. The brain has around 86 billion neurons, each connected to thousands of others, forming trillions of connections, more than the stars in our galaxy. This network is what lets you think and feel.` },

            { id: `l10-q3`, format: `true-false`,
              question: `True or false: The human brain has more connections than there are stars in our galaxy.`,
              correctAnswer: true,
              explanation: `True. The brain's roughly 86 billion neurons form trillions of connections, more than the number of stars in the Milky Way. This is part of why the brain is considered the most complex object scientists have ever studied.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `What is a REFLEX?`,
              options: [
                `A slow, careful decision`,
                `An automatic, very fast response (often protective) that the spinal cord handles without waiting for the brain`,
                `A type of memory`,
                `A voluntary movement`,
              ],
              correctIndex: 1,
              explanation: `A reflex is an automatic, fast, protective response. Touch something hot, and your spinal cord sends a "pull away" command before the signal even reaches your brain. That's why you react before you consciously feel the pain.` },

            { id: `l10-q5`, format: `multiple-choice`,
              question: `How fast can signals travel through your nervous system?`,
              options: [
                `Very slowly`,
                `Up to about 120 meters per second — faster than a race car`,
                `Walking speed`,
                `One meter per minute`,
              ],
              correctIndex: 1,
              explanation: `Nerve signals can travel up to about 120 meters per second, faster than a race car. This incredible speed is why your reactions can be nearly instant, and why billions of signals can race through your body every moment.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `What is NEUROPLASTICITY?`,
              options: [
                `A type of brain surgery`,
                `The brain's ability to change, grow, and rewire itself throughout life as you learn and practice`,
                `A brain disease`,
                `The brain being fixed and unchangeable`,
              ],
              correctIndex: 1,
              explanation: `Neuroplasticity is the brain's ability to change and rewire itself throughout life. Learning and practice physically strengthen neuron connections. It means you're never stuck with your current abilities. Your effort literally reshapes your brain.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `What does neuroplasticity mean when you STRUGGLE with something?`,
              options: [
                `You'll never be able to do it`,
                `The connections for that skill are still being built and grow stronger with practice — you can improve`,
                `Your brain is broken`,
                `You should give up`,
              ],
              correctIndex: 1,
              explanation: `Struggling doesn't mean you "can't." It means the neuron connections for that skill are still forming, and they strengthen with practice. This is the science behind a growth mindset. Your effort builds your brain.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `What's the difference between VOLUNTARY and AUTONOMIC actions?`,
              options: [
                `No difference`,
                `Voluntary actions you consciously choose (like waving); autonomic functions happen automatically (like your heartbeat)`,
                `Both are conscious`,
                `Both are automatic`,
              ],
              correctIndex: 1,
              explanation: `Voluntary actions are ones you consciously decide to do, like waving or writing. Autonomic functions happen automatically without thought, like your heartbeat, digestion, and (mostly) breathing. Your nervous system manages both at once, constantly.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Your brain has more connections than there are stars in our galaxy. How does it feel to carry the most complex object in the known universe inside your own head?` },
            { id: `r2`, text: `Neuroplasticity means your effort literally reshapes your brain. Is there a skill you've struggled with that you might see differently now?` },
            { id: `r3`, text: `Breathing is one of the few functions that's both automatic AND something you can control. Why do you think calming exercises often focus on breathing?` },
            { id: `r4`, text: `Right now, billions of signals are racing through you without your awareness. What's it like to realize how much your body does for you automatically?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Understanding your brain is one of the most useful kinds of knowledge you can have, because it's the tool you use for everything else. Knowing about neuroplasticity changes how you approach learning: instead of "I'm just not good at this," you can think "my brain is still building these connections." Athletes, musicians, students, and anyone learning anything benefit from understanding that practice physically rewires the brain. Brain science is also leading to better treatments for injuries and mental health. Nova's note: when you understand that your brain grows through effort, struggle stops being a sign of failure and becomes a sign of growth in progress.`,
          familyAdventure: `Family Brain Challenge. As a family, try learning a brand-new tiny skill together, like juggling, a tongue twister, writing your name with your non-dominant hand, or a simple magic trick. Notice how clumsy everyone is at first, and how it improves with just a few minutes of practice. That improvement IS neuroplasticity in action: your brains are physically rewiring as you practice. Talk about how this applies to bigger things you're each learning.`,
          creativePrompt: {
            intro: `Imagine you could write a letter to your own brain, thanking it and making a promise about how you'll help it grow. Write that letter.`,
            floor: `Write at least 5 sentences. Thank your brain for something it does, and describe one way you'll help it grow through practice.`,
            stretch: `Write 8 to 10 sentences. Thank your brain for several things it does, explain what you've learned about neuroplasticity, and make a real promise about a skill you'll build.`,
            open: `Write as much as you want. Write a full letter to your brain. Thank it for all the amazing things it does (sensing, moving, thinking, remembering, keeping you alive), reflect on what you've learned about neurons and neuroplasticity, and make a genuine promise about how you'll treat it well and help it grow, through learning, practice, rest, and not giving up when things are hard.`,
            frames: [
              `Dear Brain, thank you for ___.`,
              `I never realized that you ___.`,
              `Now that I know you can grow and rewire yourself, I promise to ___.`,
              `When something feels hard, I'll remember that ___.`,
              `Together, we're going to ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Incredible work, {name}. You can now explain what the nervous system is, why the brain is the most complex object in the known universe, how signals travel, and the empowering science of neuroplasticity. Next lesson: we explore your body's amazing built-in defense force that protects you from invaders every single day. THE IMMUNE SYSTEM. See you there. — Nova.`,
          badge: `brain-explorer`,
          badgeName: `Brain Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
