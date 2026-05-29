// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L10 — Focus in a Distracted World
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : attention research — Cal Newport (Deep Work), the attention
//            economy, focused vs. fragmented attention, the cost of
//            distraction, attention as the foundation of capability.
//            Builds on L04 (info diet) + L09 (memory) by examining what
//            attention can DO when protected.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of building real focus)
// SCOPE: attention is the foundation of capability; modern world attacks
//        attention; deep work vs. shallow work; protecting attention as a
//        life skill; recovery for attention
// VOICE: Byte = wise + practical, treats focus like the ultimate fox skill
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-10`,
      title: `Focus in a Distracted World`,
      duration: 18,
      xpReward: 75,
      badge: `focus-keeper`,
      badgeName: `Focus Keeper`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we explore the most under-attack skill of your entire generation: FOCUS. Real, deep, sustained attention on one thing for a meaningful time. You're growing up in a world that is LITERALLY DESIGNED to break your focus, social media, notifications, endless scrolling, multitasking culture. Researchers are finding that average attention spans are getting shorter and kids increasingly struggle to focus deeply. Here's the truth: focus is one of the most powerful skills in life. The kid who can FOCUS deeply for an hour can do work that most adults can't do anymore. Today, you learn the real science and reclaim your attention. Foxes were built for focused hunting. Let's reclaim yours.`,
          headline: `Focus in a Distracted World`,
          subtitle: `Attention is the foundation of everything — and it's under attack`,
          visual: `/ue-assets/fs/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Attention Is the Foundation`,
          paragraphs: [
            `Here's a truth most people miss. EVERYTHING you do well requires ATTENTION. Real learning needs attention (L08, L09). Deep thinking needs attention. Real conversations need attention. Creative work needs attention. Even loving people well requires attention. Your attention is the foundation underneath EVERY skill that matters. Researchers studying high performers have found something striking, the people who do the best work, learn the most, and create the most aren't necessarily the smartest. They're the ones who can FOCUS most deeply for sustained periods. Author Cal NEWPORT calls this DEEP WORK, focused, uninterrupted attention on cognitively demanding tasks. He found that deep work is becoming RARER (harder to find people who can do it) AND MORE VALUABLE (essential for the most important kinds of work).`,
            `Here's the problem. The modern world is actively breaking your ability to focus. Phones designed to grab attention. Apps designed to keep you scrolling. Notifications designed to interrupt you. Multitasking culture telling you to do five things at once. Researchers measuring attention have found that average sustained focus times are getting shorter, and kids growing up with constant phones have measurably shorter attention spans than kids in earlier generations. This isn't your fault, you're growing up in a world designed against focus. AND, you can absolutely build focus back up. Today, you learn how. Foxes can't hunt while distracted. Neither can humans, really.`,
          ],
          image: `/ue-assets/fs/l10-s1-foundation.webp`,
          imageCaption: `Attention is the foundation under every skill that matters. The modern world is breaking it.`,
          vocab: [
            { word: `deep work`,
              definition: `Cal Newport's term for focused, uninterrupted attention on cognitively demanding tasks. The opposite of shallow, distracted, multitasked activity. Research shows deep work is increasingly RARE (most adults can't do it well anymore) AND increasingly VALUABLE (essential for the best learning, creating, problem-solving).`,
              audioPrompt: `Deep work is Cal Newport's term for focused, uninterrupted attention on cognitively demanding tasks, {name}. The opposite of shallow distracted multitasked activity. Researchers studying high performers found the people who do the best work, learn the most, and create the most aren't necessarily the smartest. They're the ones who can focus most deeply for sustained periods. Deep work is becoming rarer because most adults can't do it well anymore, AND more valuable because it's essential for the most important kinds of work.` },
            { word: `attention as foundation`,
              definition: `The idea that EVERYTHING that matters — real learning, deep thinking, real conversations, creative work, even loving people well — requires attention. Researchers found the best performers aren't necessarily the smartest, they're the ones who focus most deeply. Attention is the foundation under every skill that matters. The modern world is designed to break it. Protect it.`,
              audioPrompt: `Attention is the foundation underneath every skill that matters, {name}. Real learning needs attention. Deep thinking needs attention. Real conversations need attention. Creative work needs attention. Even loving people well requires attention. Researchers studying high performers found the people who do the best work aren't necessarily the smartest. They're the ones who can focus most deeply for sustained periods. The modern world is actively designed to break your attention. Knowing that is the first step to protecting it. Build it intentionally. That's what today's lesson is about.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Cost of Constant Distraction`,
          paragraphs: [
            `Here's what's happening biologically when you constantly switch attention. Each time you switch from a focused task to checking your phone, scrolling a feed, or being interrupted, your brain pays a SWITCHING COST. Even if you switch back, it takes 15-25 MINUTES on average to return to deep focus. Researchers studying knowledge workers have found that people who get interrupted every 5 minutes essentially NEVER reach deep focus, all day. They feel busy but get little real work done. The same is true for kids studying with their phone next to them.`,
            `Constant distraction has other costs too. It RAISES STRESS (the brain stays alert for interruptions). It WEAKENS MEMORY (L09!), nothing encodes deeply when you're multitasking. It INCREASES ANXIETY because shallow attention leaves you feeling scattered. It SHRINKS YOUR ATTENTION SPAN over time, the more you train your brain to switch constantly, the harder sustained focus becomes. Even worse, kids who grow up with constant distraction sometimes don't even know what deep focus feels like, they've never experienced an hour of single-pointed attention. The good news: focus is a SKILL you can train back. Like a muscle that's gotten weak, it can grow strong again with practice.`,
          ],
          image: `/ue-assets/fs/l10-s2-cost.webp`,
          imageCaption: `Switching cost. 15-25 minutes to return to focus. Constant distraction wrecks attention, memory, mood.`,
          vocab: [
            { word: `switching cost`,
              definition: `The time your brain takes to return to deep focus after a distraction, 15-25 minutes on average. People interrupted every 5 minutes never reach deep focus all day. Constant switching raises stress, weakens memory, increases anxiety, and shrinks attention span over time. Focus can be retrained.`,
              audioPrompt: `Switching cost is the time your brain takes to return to deep focus after a distraction, {name}. 15 to 25 minutes on average. Each time you switch from a focused task to checking your phone or being interrupted, your brain pays this cost. Researchers found people interrupted every 5 minutes essentially never reach deep focus all day. They feel busy but get little real work done. Constant distraction raises stress, weakens memory, increases anxiety, and shrinks your attention span over time. Focus is a skill you can train back.` },
            { word: `focused attention`,
              definition: `The ability to direct your mind fully to one thing for a sustained period. The opposite of fragmented, scattered attention from constant switching. Research shows focused attention is one of the most valuable and increasingly rare skills in modern life. It's a trainable skill that grows stronger with deliberate practice. The modern world is designed to fragment it.`,
              audioPrompt: `Focused attention is the ability to direct your mind fully to one thing for a sustained period, {name}. It's the opposite of the fragmented, scattered attention that comes from constant switching and distraction. Research shows focused attention is one of the most valuable and increasingly rare skills in modern life. The modern world is designed to fragment your attention, notifications, social media, multitasking culture. But focus is a trainable skill. Like a muscle, it grows stronger with deliberate practice. Protect it, train it, and watch your capability grow.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Deep Work vs. Shallow Work`,
          paragraphs: [
            `Here's the practical distinction. DEEP WORK is focused, single-task, cognitively demanding work that builds new skills or creates real things. Writing an essay carefully. Working through hard math problems. Reading a book deeply. Practicing an instrument. Coding something challenging. Having a real conversation. Doing creative work. Deep work is where REAL CAPABILITY comes from. The kid who does 30 minutes of deep work daily learns and grows far more than the kid who does 3 hours of distracted shallow work.`,
            `SHALLOW WORK is necessary but not skill-building. Quick texts, checking email, scrolling social media, easy errands, routine tasks. Shallow work isn't bad, life requires some of it. The problem is when shallow work CROWDS OUT deep work entirely. Many adults spend their whole working day on shallow tasks and never do real deep work, then wonder why they don't feel capable or accomplished. The wise strategy: BATCH your shallow work into short windows (check messages once or twice a day, not constantly), and PROTECT TIME for deep work (1-3 hours, fully focused, no notifications). Even kids your age benefit from this. Homework done in deep focus is better than homework done over 3 hours with constant distractions.`,
          ],
          image: `/ue-assets/fs/l10-s3-deep-shallow.webp`,
          imageCaption: `Deep work: focused, skill-building, real capability. Shallow work: necessary but doesn't build you.`,
          vocab: [
            { word: `deep vs. shallow work`,
              definition: `DEEP WORK is focused single-task work that builds skills and creates things (writing, hard problems, deep reading, practice, real conversations). SHALLOW WORK is necessary routine stuff (texts, scrolling, easy errands). The wise strategy: BATCH shallow work, PROTECT TIME for deep work. The kid who does both well learns and creates more.`,
              audioPrompt: `Deep versus shallow work is the practical distinction in how to spend your attention, {name}. Deep work is focused, single-task, cognitively demanding work that builds skills or creates real things. Writing an essay carefully, working through hard math, reading a book deeply, practicing an instrument. Shallow work is necessary but not skill-building. Quick texts, checking messages, easy errands. Shallow work isn't bad. The problem is when it crowds out deep work entirely. The wise strategy is batch shallow work into short windows, protect time for deep work.` },
            { word: `batching`,
              definition: `Grouping similar shallow tasks together and doing them in short dedicated windows. Instead of checking messages constantly, you check at set times (like 10am and 4pm only). Batching protects the rest of your day for deep work. Without it, shallow tasks constantly interrupt focus and deep work never happens. Simple strategy: set times for shallow work, protect the rest.`,
              audioPrompt: `Batching means grouping similar shallow tasks together and doing them in short dedicated windows, {name}. Instead of checking messages constantly throughout the day, you check at 10am and 4pm only. Instead of running one errand at a time, you do all errands in one trip. Batching protects the rest of your day for deep work. Without it, shallow tasks constantly interrupt your focus and deep work never happens. The wise strategy is simple: set times for shallow work, protect the rest for what truly matters most.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Building Real Focus (And Recovering It)`,
          paragraphs: [
            `Here's how to actually rebuild your focus. PROTECT YOUR ATTENTION first. Phone in another room (or in a drawer) when you need to focus. Notifications off. Browser tabs closed. Tell people you're focusing. Create a clean physical and digital space. SINGLE-TASK during focus. One thing. No music with lyrics (instrumental is fine). No texting. No "just checking" anything. START SMALL, you might only manage 15-20 minutes of real focus at first. That's normal. Build from there. Researchers found focus is like a muscle, weak at first, builds with practice. After a few weeks, you'll find you can focus for 45-60 minutes; after months, 90 minutes or more.`,
            `BATCH shallow work into specific windows (check messages at 10am and 4pm only, for instance). Don't let shallow tasks steal deep focus time. RECOVER attention regularly. Brain needs rest after deep work, take real breaks (walk, sit outside, stretch, look at sky, not scroll). Boredom is actually GOOD sometimes, your brain consolidates and makes connections during real rest. Get good SLEEP (Life Wellness L02!), well-rested brains focus far better than tired ones. Move your BODY (Life Wellness L04!), exercise improves attention measurably. SPEND TIME OUTSIDE (Life Wellness L13!), nature restores focus. Byte's first teaching: attention is the foundation of every skill that matters. The modern world is breaking it on purpose. You can rebuild yours through deliberate practice. Protect it, single-task, batch shallow work, schedule deep work, recover well. The fox who can focus deeply for hours becomes the human with capabilities most others have lost. That's a real superpower.`,
          ],
          image: `/ue-assets/fs/l10-s4-building.webp`,
          imageCaption: `Protect attention. Single-task. Batch shallow. Schedule deep work. Recover. Sleep, move, outside.`,
          vocab: [
            { word: `attention training`,
              definition: `The practice of rebuilding focus through deliberate effort. Protect attention (phone away, notifications off). Single-task. Start small (15-20 min) and build. Batch shallow work. Recover with real breaks (not scrolling). Sleep, move, get outside. Focus is a trainable skill that grows with practice.`,
              audioPrompt: `Attention training is the practice of rebuilding focus through deliberate effort, {name}. Protect your attention first, phone in another room, notifications off, tell people you're focusing. Single-task during focus. One thing only. Start small. You might only manage 15 to 20 minutes at first. That's normal. Build from there. Focus is like a muscle, weak at first, builds with practice. After weeks, you can focus for 45 to 60 minutes. Batch shallow work into specific windows. Recover with real breaks, not scrolling. Sleep, move, get outside.` },
            { word: `recovery time`,
              definition: `The genuine rest your brain needs after deep work — a walk, sitting outside, stretching, boredom, not scrolling. The brain consolidates learning and makes connections during real downtime. Sleep, exercise, and time outside all measurably restore focus. Recovery isn't laziness. It's what makes deep work sustainable long-term.`,
              audioPrompt: `Recovery time is the real rest your brain needs after deep work, {name}. Not scrolling, not checking messages, not consuming content. Actual rest. A walk, sitting outside, stretching, looking at the sky, boredom. Researchers have found that the brain consolidates learning and makes creative connections during genuine downtime. Sleep is especially powerful for attention recovery. Exercise measurably improves focus. Time outside restores attention in ways screens can't. Recovery isn't laziness. It's the part of the practice that makes deep work long-term sustainable.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the moves of building real focus in order, {name}. Here are five steps, from FIRST PROTECTION to ONGOING PRACTICE. Use the arrows to arrange them.`,
          items: [
            { id: `step-protect`,    label: `PROTECT YOUR ATTENTION — phone in another room, notifications off, tabs closed, tell people you're focusing; you can't focus deeply with distractions firing constantly`,             position: 1 },
            { id: `step-single`,     label: `SINGLE-TASK. One thing at a time during focus. No texting, no "just checking," no music with lyrics. Switching costs 15-25 minutes to return to deep focus`,                            position: 2 },
            { id: `step-batch`,      label: `BATCH SHALLOW WORK. Check messages at set times (like 10am and 4pm), not constantly. Do quick tasks in dedicated windows. Protect the rest`,                                          position: 3 },
            { id: `step-deep`,       label: `SCHEDULE DEEP WORK. Protected time for cognitively demanding tasks (writing, hard problems, deep reading, real practice). Start with 20 minutes, build to 60-90 over weeks`,         position: 4 },
            { id: `step-recover`,    label: `RECOVER YOUR ATTENTION. Real breaks (walk, outside, stretch, look at sky, not scroll), sleep well, move your body, time outside. Brains rebuild focus during real rest`,         position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of building focus: protect attention, single-task, batch shallow work, schedule deep work, recover well. Use these consistently and your focus will rebuild over weeks and months. You'll find capability most modern humans have lost. Foxes are made for sharp focus. Reclaim yours.`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l10-q1`, format: `true-false`,
              question: `True or false: ATTENTION is the foundation underneath every skill that matters.`,
              correctAnswer: true,
              explanation: `True. Real learning, deep thinking, real conversations, creative work, even loving people well, ALL require attention. Researchers studying high performers found the people who do the best work aren't necessarily the smartest, they're the ones who can focus most deeply for sustained periods. Attention is the foundation under every skill that matters.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `What is DEEP WORK (Cal Newport)?`,
              options: [
                `Scrolling lots`,
                `FOCUSED, uninterrupted attention on cognitively demanding tasks — increasingly RARE (most adults can't do it well) AND increasingly VALUABLE (essential for best work)`,
                `Working all day`,
                `Multitasking`,
              ],
              correctIndex: 1,
              explanation: `Deep work is focused, uninterrupted attention on cognitively demanding tasks. Writing, hard problems, deep reading, practice, real conversations, creative work. It's where real capability comes from. Cal Newport found deep work is becoming rarer (most adults can't do it well) AND more valuable (essential for the most important kinds of work).` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `What is the SWITCHING COST?`,
              options: [
                `Money paid`,
                `15-25 MINUTES on average for your brain to return to deep focus after a distraction. People interrupted every 5 minutes never reach deep focus all day`,
                `Nothing`,
                `A type of fee`,
              ],
              correctIndex: 1,
              explanation: `Switching cost is the time your brain takes to return to deep focus after a distraction, 15-25 minutes on average. People interrupted every 5 minutes essentially never reach deep focus, all day. They feel busy but get little real work done. Same for kids studying with their phone next to them.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `What are the costs of CONSTANT DISTRACTION?`,
              options: [
                `No effects`,
                `Raises STRESS, weakens MEMORY, increases ANXIETY, shrinks ATTENTION SPAN over time. Kids who grow up distracted may not even know what deep focus feels like`,
                `Just laziness`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Constant distraction raises stress (brain stays alert for interruptions), weakens memory (L09 - nothing encodes deeply when multitasking), increases anxiety (shallow attention leaves you scattered), shrinks attention span over time, and kids who grow up with constant distraction sometimes don't even know what deep focus feels like.` },

            { id: `l10-q5`, format: `multiple-choice`,
              question: `What is SHALLOW WORK?`,
              options: [
                `Bad work`,
                `Necessary routine stuff that doesn't build skills (quick texts, scrolling, easy errands) — not bad, but problem is when it CROWDS OUT deep work entirely`,
                `Good work`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Shallow work is necessary routine stuff (quick texts, checking messages, scrolling, easy errands, routine tasks). Not bad on its own. The problem is when shallow work crowds out deep work entirely. Many adults spend whole days on shallow tasks and never do real deep work, then wonder why they don't feel capable.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `What does BATCHING shallow work mean?`,
              options: [
                `Doing all work at once`,
                `Check messages and do quick tasks at SET TIMES (like 10am and 4pm), not constantly. Protects the rest of the day for deep work`,
                `Random checking`,
                `Never checking`,
              ],
              correctIndex: 1,
              explanation: `Batching means doing shallow tasks (messages, quick errands, checking things) in dedicated short windows, like 10am and 4pm only, not constantly throughout the day. This protects the rest of your day for deep work. Without batching, shallow work constantly interrupts deep work, and nothing important gets done well.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `How long can a kid expect to focus DEEPLY at FIRST when training?`,
              options: [
                `5 hours`,
                `15-20 minutes is normal at first. Focus is like a muscle, weak at first, builds with practice. After weeks, 45-60 minutes. After months, 90+ minutes`,
                `Forever`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Start small. You might only manage 15-20 minutes of real focus at first. That's normal. Build from there. Focus is like a muscle, weak at first, builds with practice. After a few weeks, you'll find you can focus for 45-60 minutes. After months, 90 minutes or more. Don't expect long focus on day one.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about focus?`,
              options: [
                `Focus doesn't matter`,
                `Attention is the FOUNDATION of every skill. Modern world is breaking it on purpose. You can rebuild yours. Protect, single-task, batch shallow, schedule deep work, recover. The fox who focuses becomes the human with rare capabilities`,
                `Just multitask`,
                `Random advice`,
              ],
              correctIndex: 1,
              explanation: `Attention is the foundation of every skill that matters. The modern world is breaking it on purpose. You can rebuild yours through deliberate practice. Protect it, single-task, batch shallow work, schedule deep work, recover well. The fox who can focus deeply for hours becomes the human with capabilities most others have lost. A real superpower.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Take a focused breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `When's the LAST TIME you focused on ONE thing for 30+ minutes without checking your phone or switching? Be honest. How did it feel?` },
            { id: `r2`, text: `What's your BIGGEST DISTRACTOR right now? Phone? Notifications? TV in background? Family interruptions? Notice without judgment.` },
            { id: `r3`, text: `What would 30 minutes of REAL DEEP WORK each day let you do that you can't do now? A skill? A project? A book?` },
            { id: `r4`, text: `Of the five moves (protect, single-task, batch, schedule deep, recover), which feels most important for YOU to start with?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Attention research has exploded over the last 20 years, and the findings are consistent. Sustained focus is one of the most valuable skills in modern life AND one of the most damaged. Cal Newport's Deep Work, Nicholas Carr's The Shallows, and Johann Hari's Stolen Focus all document the attention crisis affecting kids and adults. Average focus times have shrunk dramatically since 2000 (when smartphones became common). Kids who grow up with smartphones often can't sit still through a movie or read a book deeply, because their brains have been trained to switch constantly. The cost is enormous, weaker learning, more anxiety, less capability, less satisfaction. Byte's note: you're growing up in the most attention-attacked era in human history. The companies whose apps you use make money by capturing your attention. They have huge teams whose entire job is to make their apps harder to put down. This isn't a fair fight. But you have something on your side: KNOWLEDGE that they're doing it, and skills that let you reclaim your focus. The kid who builds deep focus at 9 or 10 has a near-superpower in a world where most adults can't do it. Protect your attention fiercely. It's the foundation under everything you want to do well.`,
          familyAdventure: `Family Deep Work Hour. As a family, commit to ONE hour each week where ALL phones go in a basket and everyone focuses on something real (reading, drawing, building, playing, creating, deep conversation). No screens, no notifications, just real focus together. Adults model it. Many families find this becomes one of their most precious weekly hours, deeper connection AND attention training for everyone. You're building a family that practices focus together, in a world increasingly losing it.`,
          creativePrompt: {
            intro: `Write your personal Focus Plan — what you'll protect, how you'll train, what deep work you want to do.`,
            floor: `Write at least 5 sentences. Name your biggest distractor and one focus practice you'll start.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan.`,
            open: `Write as much as you want. Write your full personal FOCUS PLAN. Honestly describe your current attention habits, how often you switch, how phone-dependent you are, whether you can sit through deep work without checking. Identify your biggest distractor and how you'll reduce it. Describe a specific DEEP WORK PROJECT you want to focus on (a skill, a book, a creative project, mastering a subject). Plan WHEN you'll do deep work (specific time of day, length of session, where, what protected setup). Describe how you'll batch shallow work into short windows. Plan how you'll recover (real breaks, sleep, movement, outside time). End with a commitment to the FOCUSED life you want to live. Make it specific, hopeful, and rebellious against the attention economy.`,
            frames: [
              `My current attention habits are ___.`,
              `My biggest distractor is ___, and I'll reduce it by ___.`,
              `Deep work project I want to focus on: ___.`,
              `When and where I'll do deep work: ___.`,
              `How I'll batch shallow work: ___.`,
              `How I'll recover: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Sharp, focused work, {name}! You now know one of the most important truths of modern life, attention is the FOUNDATION underneath every skill that matters, and the modern world is attacking it on purpose. Five moves to reclaim it: protect attention, single-task, batch shallow work, schedule deep work, recover well. The kid who builds focus at 9 or 10 has rare capability. Next, we explore a skill the world increasingly values, CREATIVITY. Real creative process, not magic. CREATIVITY AS A SKILL. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `focus-keeper`,
          badgeName: `Focus Keeper`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L10;
