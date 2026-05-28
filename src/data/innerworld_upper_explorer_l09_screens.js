// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L09 — The Power of Focus and Attention
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : attention science / neuroscience at a kid level (RAS preview,
//            attention as a resource, the cost of distraction, deep work)
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order how focused attention shapes outcomes)
// SCOPE: 4 concepts — what attention is, attention as your most precious
//        resource, the high cost of distraction, how to strengthen focus
// VOICE: Sage = grounded, clarifying, builds on L08 directly
// VERSION: v1.1
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-09`,
      title: `The Power of Focus and Attention`,
      duration: 18,
      xpReward: 75,
      badge: `focus-master`,
      badgeName: `Focus Master`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Last time we explored manifestation, and at the end I said the foundation of all of this is your FOCUS. Today we explore that foundation directly. Your attention, where you point your mind, is one of the most powerful forces you have. It shapes your brain, your feelings, your skills, and what you create. And here's the surprising thing: most people use their attention without even realizing how precious it is. Today we change that. Take a calm, focused breath, and let's begin.`,
          headline: `The Power of Focus and Attention`,
          subtitle: `Where you point your mind shapes your whole life`,
          visual: `/ue-assets/iw/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Attention Really Is`,
          paragraphs: [
            `ATTENTION is your mind's ability to choose what to focus on, out of the millions of things happening around you and inside you, right now. Notice this: as you read these words, your eyes are sending information to your brain, but your ears are also picking up sounds, your skin is feeling temperature and texture, your body is feeling itself sitting, and a hundred other inputs are coming in all the time. Yet you can read this sentence because your attention has gathered itself HERE, on these words, while the rest fades into the background. That gathering is attention.`,
            `Your attention is like a SPOTLIGHT in a dark room. Wherever you point it, that part of your world lights up vividly, while everything outside the beam falls into darkness. The thing you focus on becomes your reality in that moment, because it's the thing you're actually experiencing. This is huge: you can't experience everything happening at once, you can only experience what you focus on. So what you choose to focus on, moment by moment, day by day, IS your life. Where attention goes, life goes.`,
          ],
          image: `/ue-assets/iw/l09-s1-spotlight.webp`,
          imageCaption: `Attention is a spotlight. What you focus on lights up; everything else fades.`,
          vocab: [
            {
              word: `attention`,
              definition: `Your mind's ability to choose what to focus on, out of all the inputs reaching you. Like a spotlight: what you point it at lights up and becomes your experience; everything outside the beam fades.`,
              audioPrompt: `Attention is your mind's ability to choose what to focus on, {name}. Your attention is like a spotlight in a dark room. Wherever you point it, that part of your world lights up vividly, while everything outside the beam falls into darkness. The thing you focus on becomes your reality in that moment, because it's the thing you're actually experiencing. You can't experience everything at once. You can only experience what you focus on. So what you choose to focus on, moment by moment, is your life.`,
            },
            {
              word: `selective attention`,
              definition: `The ability to focus on one specific input while filtering out everything else. What lets you follow a single conversation in a noisy room, or read while sounds fade into background. The foundation of all focused work.`,
              audioPrompt: `Selective attention is the ability to focus on one specific input while filtering out everything else, {name}. It's what lets you follow a conversation in a noisy room, or read these words while sounds fade into the background. Your brain is constantly choosing what to highlight and what to ignore, mostly without you realizing it. When you use your focus intentionally, you're taking control of this process: deciding what deserves to be in your spotlight. Selective attention is the foundation of learning, creating, and real concentration.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Attention Is Your Most Precious Resource`,
          paragraphs: [
            `Here's why attention is so powerful: where you focus shapes your BRAIN, your FEELINGS, your SKILLS, and the OPPORTUNITIES you notice. Remember neuroplasticity? Whatever you give your attention to, the connections for that grow stronger. Focus on something hard, and the skill pathway strengthens. Focus on a worry, and the worry pathway strengthens. Focus on gratitude, and the gratitude pathway strengthens. You are quite literally BUILDING your brain through what you repeatedly pay attention to. Attention is the tool that shapes who you become.`,
            `Your attention also activates the RETICULAR ACTIVATING SYSTEM (we'll explore it deeply in L15). The instant something becomes important to you, your RAS begins filtering the world to show you that thing everywhere: opportunities, ideas, resources, even other people who might help. So what you focus on doesn't just shape you on the inside, it changes what you NOTICE on the outside. This is one of the real engines behind manifestation. Because attention is this powerful, it's also incredibly precious. Every moment, you're choosing where to spend it. Spend it wisely.`,
          ],
          image: `/ue-assets/iw/l09-s2-precious.webp`,
          imageCaption: `Attention shapes brain, feelings, skills, and what you notice. Spend it wisely.`,
          vocab: [
            {
              word: `focus`,
              definition: `The active practice of gathering your attention on one thing and holding it there. Focus is how attention does its real work, building skills, deepening understanding, creating results. The opposite of scattered, distracted thinking.`,
              audioPrompt: `Focus is the active practice of gathering your attention on one thing and holding it there, {name}. It's how attention does its real work: building skills, deepening understanding, creating results. Where you focus shapes your brain, your feelings, your skills, and the opportunities you notice. Whatever you give attention to, the connections for that grow stronger. Focus on something hard, and the skill pathway strengthens. Focus on a worry, and the worry pathway strengthens. You're literally building your brain through what you repeatedly pay attention to.`,
            },
            {
              word: `deep work`,
              definition: `The practice of concentrating on a demanding task without distraction — where your best thinking, learning, and creating happens. Coined by productivity researcher Cal Newport. Becoming rare, and increasingly valuable.`,
              audioPrompt: `Deep work is the practice of concentrating on a demanding task without distraction, {name}. It's where your best thinking, learning, and creating happens. Productivity researcher Cal Newport coined this term for the focused state where you produce your best results. Deep work is becoming rare and more valuable in a distracted world. People who can do it have a real advantage. Deep work and flow often overlap: both require gathered attention and no interruptions. Protecting time for deep work is protecting your ability to think and create.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Hidden Cost of Distraction`,
          paragraphs: [
            `Now, the modern world is designed to STEAL your attention. Notifications, ads, short videos, endless feeds, all engineered to grab your spotlight and keep flicking it around. This isn't an accident, it's literally how those products make money. And here's the cost most people don't realize: every time your attention is yanked away, even for a few seconds, it takes real effort and time to gather it back. Scientists call this an ATTENTION RESIDUE: your mind doesn't switch cleanly. A piece of it stays on the old thing while you try to focus on the new one. Constant switching makes you feel scattered, tired, and like you're "busy" without ever doing your best work.`,
            `This matters because a scattered spotlight can't light anything brightly. Skill building, real learning, deep enjoyment of an activity, and the powerful state of FLOW (last lesson's topic, remember?) all require sustained, gathered attention. Many people today have lost the experience of deep, undivided focus, and with it they've lost much of their power to create, to think clearly, and to fully enjoy what they're doing. Becoming aware of how distractible the modern world wants you to be, and choosing to defend your attention, is one of the most important skills of your generation. Your attention is genuinely worth protecting.`,
          ],
          image: `/ue-assets/iw/l09-s3-distraction.webp`,
          imageCaption: `Distraction costs more than you think. Switching scatters your spotlight.`,
          vocab: [
            {
              word: `attention residue`,
              definition: `When you switch tasks, a piece of your mind stays stuck on the old task, even while you try to focus on the new one. Scientists discovered this. It's why constant switching makes you feel scattered and tired.`,
              audioPrompt: `Attention residue is what happens when you switch tasks, {name}. A piece of your mind stays stuck on the old task, even while you try to focus on the new one. Scientists discovered this. The modern world is designed to steal your attention: notifications, short videos, endless feeds, all engineered to grab your spotlight. Every time your attention is yanked away, it takes real effort and time to gather it back. Constant switching makes you feel scattered and tired, without ever doing your best work.`,
            },
            {
              word: `cognitive switching cost`,
              definition: `The mental energy and time lost every time you switch your attention from one task to another. The scientific reason multitasking makes you slower and worse at everything. Studies show even tiny interruptions can cost 20 minutes of productive focus.`,
              audioPrompt: `Cognitive switching cost is the mental energy and time lost every time you switch your attention from one task to another, {name}. It's the scientific reason multitasking makes you worse at everything. Each switch costs your brain real energy: it has to reorient, recall what you were doing, and refocus. This adds up fast. Studies show even tiny interruptions can cost 20 minutes of productive focus. The more you protect yourself from unnecessary switching, the more energy you have for what actually matters.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Strengthen Your Focus`,
          paragraphs: [
            `The wonderful news: focus is a SKILL, and like any skill, it gets stronger with practice (neuroplasticity, again). A few gentle keys to building it. First, choose ONE thing at a time and give it your full spotlight. Multitasking is usually fast switching, and it makes you worse at everything. Second, REMOVE distractions before you start, put devices in another room, close extra tabs, ask for quiet time. You can't out-willpower a constantly buzzing phone, but you can outsmart it by setting up your space well. Third, when your mind wanders (and it will, that's normal), GENTLY bring it back. Each gentle return is like a rep at the gym for your focus muscle.`,
            `Fourth, practice MINDFULNESS and meditation, which we'll explore deeply. These are direct training for attention. Even five minutes a day of quietly focusing on your breath grows your focus muscle measurably. Fifth, get curious about what you're focusing ON. Boredom often means you haven't looked closely enough; almost anything becomes interesting under sustained attention. Sage's gentle teaching: in a world trying to scatter you, choosing where to point your spotlight is a kind of quiet power. Strong focus lets you learn faster, do your best work, enjoy your life more deeply, and create what you intend. Protect your attention. Direct it on purpose. Where you focus, your whole life follows.`,
          ],
          image: `/ue-assets/iw/l09-s4-strengthen.webp`,
          imageCaption: `Focus is a skill: one thing at a time, remove distractions, gently return, practice, get curious.`,
          vocab: [
            {
              word: `single-tasking`,
              definition: `Doing one thing at a time with full attention, rather than trying to do many things at once. Despite what people say, multitasking usually makes everything worse. Single-tasking is how your focus does its best work.`,
              audioPrompt: `Single-tasking means doing one thing at a time with full attention, {name}. Despite what people say, multitasking usually makes everything worse. It's fast switching, with attention residue between each switch. Single-tasking is how focus does its best work. Focus is a skill, and like any skill, it gets stronger with practice. Choose one thing and give it your full spotlight. Remove distractions before you start. When your mind wanders, gently bring it back. Each gentle return is a rep for your focus muscle.`,
            },
            {
              word: `mindful attention`,
              definition: `The gentle practice of noticing where your attention is and returning it, on purpose. The core skill behind both meditation and single-tasking. Even five minutes a day measurably grows your focus muscle over time.`,
              audioPrompt: `Mindful attention is the gentle practice of noticing where your attention is and returning it, on purpose, {name}. It's the core skill behind both meditation and single-tasking. When your mind wanders, gently bring it back. That's your focus muscle training. Each gentle return is a rep. Research shows that even five minutes a day measurably grows your ability to focus. Over time, mindful attention becomes a superpower: you notice when your spotlight has drifted and redirect it, calmly and deliberately.`,
            },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put it in order, {name}. Here are five steps showing how focused attention creates real results in your life, scrambled up. Use the arrows to arrange them from FIRST (top) to LAST (bottom). This is the focus chain.`,
          items: [
            { id: `step-choose`, label: `You CHOOSE what to focus on (a goal, a skill, a value)`,                     position: 1 },
            { id: `step-attend`, label: `Your attention GATHERS on it; everything else fades`,                       position: 2 },
            { id: `step-ras`,    label: `Your RAS starts NOTICING related opportunities and ideas in the world`,     position: 3 },
            { id: `step-wire`,   label: `Your brain WIRES (neuroplasticity) what you keep focusing on`,              position: 4 },
            { id: `step-result`, label: `You take aligned ACTION and create real RESULTS in your life`,              position: 5 },
          ],
          completionMessage: `Beautifully done, {name}! That's the focus chain: you choose what to focus on, your attention gathers, your RAS notices opportunities, your brain wires what you attend to, and you take action and create results. Every step depends on the first one: choosing where to point your spotlight. That choice is one of your real powers.`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is ATTENTION?`,
              options: [
                `Looking at everything at once`,
                `Your mind's ability to choose what to focus on — like a spotlight in a dark room`,
                `Falling asleep`,
                `Only what teachers do`,
              ],
              correctIndex: 1,
              explanation: `Attention is your mind's ability to choose what to focus on out of all the inputs reaching you. Like a spotlight: what you point it at lights up and becomes your experience, while everything outside the beam fades. Where attention goes, life goes.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `Why is attention SO POWERFUL?`,
              options: [
                `It doesn't really matter`,
                `Where you focus shapes your brain (neuroplasticity), your feelings, your skills, and what your RAS notices in the world`,
                `Only when grown-ups use it`,
                `It only changes your mood`,
              ],
              correctIndex: 1,
              explanation: `Attention shapes your brain (neuroplasticity strengthens what you attend to), your feelings, your skills, and the opportunities your RAS spots in the world. You're literally building your brain through what you repeatedly attend to. Attention is the tool that shapes who you become.` },

            { id: `l09-q3`, format: `true-false`,
              question: `True or false: The modern world is deliberately designed to grab and scatter your attention (notifications, feeds, ads).`,
              correctAnswer: true,
              explanation: `True. Notifications, short videos, endless feeds, and ads are engineered to grab your attention, often because that's literally how those products make money. Becoming aware of this and defending your attention is a real skill of your generation.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `What is ATTENTION RESIDUE?`,
              options: [
                `A type of dust`,
                `When you switch tasks, a piece of your mind stays stuck on the old task — making constant switching scatter you`,
                `When you focus deeply`,
                `A great way to multitask`,
              ],
              correctIndex: 1,
              explanation: `Attention residue is when a piece of your mind stays stuck on the old task even after you've switched to a new one. Scientists discovered this. It's why constant switching makes you feel scattered, tired, and "busy" without doing your best work.` },

            { id: `l09-q5`, format: `multiple-choice`,
              question: `Why doesn't MULTITASKING really work?`,
              options: [
                `It works perfectly`,
                `It's usually fast switching with attention residue between each switch — making you worse at everything`,
                `Because it's slow`,
                `Only adults can do it`,
              ],
              correctIndex: 1,
              explanation: `What looks like multitasking is usually fast switching, with attention residue between every switch. It makes you slower AND worse at each thing. Single-tasking (one thing at a time with full attention) is how your focus does its best work.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `When your mind WANDERS during focused work, what should you do?`,
              options: [
                `Get frustrated and quit`,
                `Gently bring it back — each gentle return is like a rep for your focus muscle`,
                `Yell at yourself`,
                `Switch to a new task`,
              ],
              correctIndex: 1,
              explanation: `Wandering is completely normal. The skill is GENTLY bringing your attention back. Each gentle return is like a rep at the gym for your focus muscle. Frustrating yourself just adds more distraction. Be kind and patient, that's the actual training.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `Which is a GOOD way to strengthen your focus?`,
              options: [
                `Keep your phone buzzing nearby`,
                `Choose one thing at a time, remove distractions, gently return when you wander, and practice mindfulness`,
                `Try to do five things at once`,
                `Avoid focus entirely`,
              ],
              correctIndex: 1,
              explanation: `Strengthen focus by: choosing one thing at a time, removing distractions (devices away, tabs closed), gently bringing your attention back when it wanders, and practicing mindfulness/meditation (even 5 minutes a day on your breath grows the muscle).` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `According to Sage, what's the BIG TRUTH about attention?`,
              options: [
                `It barely matters`,
                `Where you point your spotlight, your whole life follows — defending and directing your attention is real, quiet power`,
                `Attention is unlimited`,
                `Distraction is fine`,
              ],
              correctIndex: 1,
              explanation: `Where you point your spotlight, your whole life follows. In a world trying to scatter you, choosing where to focus is real, quiet power. Strong focus helps you learn faster, do your best work, enjoy life deeply, and create what you intend. Protect it. Direct it on purpose.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Take a slow, focused breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Where does your attention tend to go most of the day? Notice it gently, without judgment. Is that where you actually WANT it to go?` },
            { id: `r2`, text: `What's one thing that constantly steals your attention? What would it feel like to set it aside for an hour and fully focus on something that matters?` },
            { id: `r3`, text: `Think of a time you were fully focused on something you loved. How did that feel different from a scattered, distracted day?` },
            { id: `r4`, text: `If your attention truly shapes your life, what's ONE thing you want to start giving more focus to this week?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `The ability to focus deeply is one of the most valuable and rare skills in the modern world. People who can give sustained attention to what matters out-learn, out-create, and out-perform people who can't, in school, work, sports, art, and relationships. It's also how you genuinely enjoy life: the best moments come when you're fully present. Sage's note: the people who do remarkable things are usually not the most "talented," they are the people who learned to focus. Your attention is something the world will try to take from you for the rest of your life. Learning to protect and direct it, on purpose, is one of the great quiet skills of a meaningful life. Practice it gently, and you'll feel the difference quickly.`,
          familyAdventure: `Family Focus Hour. As a family, pick one hour this week, put all phones and devices in another room, and each person spends the full hour on ONE thing that matters to them (a book, a project, an instrument, a craft, a conversation). At the end, share what it felt like, what you noticed, what you got done. Notice how different "focused time" feels from scattered time. If you enjoy it, make it a weekly practice. You're building focus muscles together.`,
          creativePrompt: {
            intro: `Write about the difference between a "scattered" day (attention pulled everywhere) and a "focused" day (attention gathered on what matters). Make it vivid.`,
            floor: `Write at least 5 sentences. Contrast the two kinds of days and how they feel.`,
            stretch: `Write 8 to 10 sentences. Bring both days to life with details and show how focus changes the experience.`,
            open: `Write as much as you want. Write a full piece contrasting two versions of yourself: one whose attention is constantly scattered by distractions (notifications, switching, surface-level activity) and one who chooses to gather their attention on what truly matters (deep work, presence, real connection). Bring both to life: what they each do during a day, what they feel like, what they create, what they notice. End by reflecting on which version you want to be more of, and one small change you'll make to point your spotlight better. Honest and specific.`,
            frames: [
              `On a scattered day, my attention is constantly ___.`,
              `That kind of day feels ___.`,
              `On a focused day, I gather my spotlight on ___.`,
              `That kind of day feels ___.`,
              `The version of me I want to grow is ___, and one change I'll make is ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now understand one of the most powerful (and most stolen) resources in modern life: your attention. You've learned what it is, why it's so powerful, what distraction really costs, and how to strengthen your focus. With this awareness, you can begin to defend and direct your spotlight on purpose. Next, we explore the skill called the most important predictor of a happy, successful life: EMOTIONAL INTELLIGENCE. Practice gently, and I'll see you there. — Sage.`,
          badge: `focus-master`,
          badgeName: `Focus Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L09 v1.1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
