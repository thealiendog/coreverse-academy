// ─────────────────────────────────────────────────────────────────────────────
// INNER WORLD UE  |  L15 — The Reticular Activating System: You See What
//                          You Look For
// Age band : upper_explorers (9–10)   Guide: sage
// Domain   : real neuroscience — the RAS as the brain's filter.
// GAME FORMAT: investigation
// VERSION: v1  |  UE spec v1.1 compliant
// ─────────────────────────────────────────────────────────────────────────────

const INNERWORLD_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `iw`,
  guide: `sage`,

  lessons: [
    {
      id: `iw-9-10-15`,
      title: `The Reticular Activating System: You See What You Look For`,
      duration: 18,
      xpReward: 75,
      badge: `ras-engineer`,
      badgeName: `RAS Engineer`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Sage here. Today we go deep on something we've been hinting at all subject. A real part of your brain that quietly decides what you NOTICE in the world, out of all the millions of things around you. It's called the RETICULAR ACTIVATING SYSTEM, or RAS for short. And once you understand how it works, you'll see why "you see what you look for" isn't just a saying. It's real neuroscience. Even better, you can DELIBERATELY program your RAS to start noticing what helps you. Take a slow, curious breath, and let's begin.`,
          headline: `The Reticular Activating System`,
          subtitle: `Your brain's filter, and how to deliberately program it`,
          visual: `/ue-assets/iw/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Brain's Filter`,
          paragraphs: [
            `Right now, your brain is being flooded with information. Roughly ELEVEN MILLION pieces of information are hitting your senses every second, sights, sounds, smells, body sensations, all at once. But your conscious mind can only handle about FORTY of those pieces at a time. Everything else gets filtered OUT before you ever notice it. That filtering is done by a real part of your brain called the RETICULAR ACTIVATING SYSTEM (RAS). It's a small bundle of neurons near the base of your brain that decides, moment by moment, what gets through to your awareness and what gets ignored.`,
            `Without your RAS, you'd be totally overwhelmed in seconds. With it, you can actually function. The RAS is one of the most important and least-known parts of your brain, and it shapes your experience of EVERYTHING. The big question is: how does it decide what to let through? It doesn't randomly pick. It uses a smart filter based on what matters to YOU. And here's the wild part: you can change what it considers important. That's what this whole lesson is about. The most powerful filter in your brain is yours to direct.`,
          ],
          image: `/ue-assets/iw/l15-s1-filter.webp`,
          imageCaption: `11 million bits per second hitting your senses. Your RAS decides what reaches you.`,
          vocab: [
            {
              word: `reticular activating system`,
              definition: `A small bundle of neurons near the base of your brain that filters what you NOTICE out of the millions of pieces of information hitting your senses every second. It decides what reaches your awareness based on what matters to you.`,
              audioPrompt: `The reticular activating system, or RAS, is a small bundle of neurons near the base of your brain, {name}. It filters what you notice. Roughly 11 million pieces of information hit your senses every second, but your conscious mind can only handle about 40 at a time. Everything else gets filtered out before you ever notice it. The RAS is the filter. It decides what reaches your awareness and what gets ignored. It uses a smart filter based on what matters to you. You can change what it considers important.`,
            },
            {
              word: `neurons`,
              definition: `The basic building blocks of your brain and nervous system — billions of specialized cells that carry electrical and chemical signals. The RAS is made of neurons that work together to filter incoming information based on what you've signaled matters to you.`,
              audioPrompt: `Neurons are the basic building blocks of your brain and nervous system, {name}. Your brain contains roughly 86 billion of them, each one a specialized cell that carries electrical and chemical signals. Groups of neurons work together in networks to handle different jobs. The RAS is a small network of neurons near the base of your brain. These neurons are constantly receiving signals from your senses and deciding, based on what you've told your brain matters, what information gets passed forward to your conscious awareness.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "New Car" Effect`,
          paragraphs: [
            `Here's the most famous example of the RAS in action, and you've probably experienced it. Imagine your family is thinking about buying a certain kind of car, say a blue minivan. As soon as you start focusing on it, you SUDDENLY see blue minivans everywhere on the road. Every drive, you spot them. It feels like the world has filled with blue minivans overnight! But here's the truth: those minivans were ALWAYS there. You just didn't notice them before. The moment your RAS got the message that "blue minivans matter to us now," it started letting them through your filter. Same world, completely different experience.`,
            `This is how the RAS works. It pays close attention to whatever you've signaled is IMPORTANT, your goals, your interests, your fears, and yes, your beliefs. Then it starts showing you that thing everywhere. Decide you want a certain shoe brand? You start spotting that logo everywhere. Worried about getting sick? You start noticing every cough and sniffle around you. Excited about a new hobby? You start hearing about it constantly. The world didn't change. Your filter did. This is why two people walking the same street can have completely different experiences of it. Their RAS is letting through different things.`,
          ],
          image: `/ue-assets/iw/l15-s2-new-car.webp`,
          imageCaption: `The "new car" effect: focus on something, and your RAS starts spotting it everywhere.`,
          vocab: [
            {
              word: `selective attention`,
              definition: `Your brain's ability to focus on certain things while filtering out almost everything else. The RAS runs your selective attention. Two people in the same place can have very different experiences depending on what their RAS lets through.`,
              audioPrompt: `Selective attention is your brain's ability to focus on certain things while filtering out almost everything else, {name}. The RAS runs your selective attention. Here's the most famous example. Imagine your family is thinking about buying a blue minivan. Suddenly, you see blue minivans everywhere on the road. But those minivans were always there. You just didn't notice them before. The moment your RAS got the message that blue minivans matter to us now, it started letting them through your filter. Same world, completely different experience.`,
            },
            {
              word: `frequency illusion`,
              definition: `When you start noticing something everywhere after it first came to your attention — often called the Baader-Meinhof phenomenon. It's not that the thing multiplied; your RAS started letting it through your filter because you signaled it matters.`,
              audioPrompt: `The frequency illusion is what happens when you start noticing something everywhere after it first caught your attention, {name}. Scientists call it the Baader-Meinhof phenomenon. Imagine your family is thinking about buying a certain car. Suddenly you spot that exact car everywhere on the road. Did the world fill up with that car overnight? No. The car was always there. Your RAS got the signal that this car matters now, and started letting it through your filter. Same world. New filter. That's the frequency illusion.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your Beliefs Program Your RAS`,
          paragraphs: [
            `Now here's where it gets really powerful, and connects to so much of what we've explored. Your BELIEFS about yourself and the world are some of the strongest signals your RAS uses. If you believe "people don't like me" (limiting belief, L03), your RAS will quietly filter the world to show you EVIDENCE that supports it. Someone didn't say hi this morning? You notice. Someone gave a quick look? You notice. Meanwhile, the friend who actually smiled at you, the kid who waved, the teacher who asked how you were doing, all that gets filtered out. Same school day, but your RAS made it look like the limiting belief was true.`,
            `The opposite is just as real. A kid with the empowering belief "I'm growing and improving" will have a RAS that filters for EVIDENCE of growth, the small wins, the moments of getting better, the kind people who help. Same day at school, completely different filter, completely different reality experienced. This is one of the biggest reasons limiting beliefs feel so "true" and empowering beliefs feel so possible. They both program your RAS, and your RAS then SHOWS you a world that matches. This isn't your imagination. It's literal neuroscience. Your beliefs shape your filter, and your filter shapes your experience.`,
          ],
          image: `/ue-assets/iw/l15-s3-beliefs.webp`,
          imageCaption: `Beliefs program your RAS. Your RAS then shows you a world that matches.`,
          vocab: [
            {
              word: `RAS programming`,
              definition: `The signals your beliefs, focus, and emotions send to your RAS, telling it what matters and what to let through. Your beliefs literally program what your brain notices in the world, which then seems to "prove" the belief.`,
              audioPrompt: `RAS programming is the signals your beliefs, focus, and emotions send to your RAS, {name}. Telling it what matters and what to let through. Your beliefs literally program what your brain notices. If you believe people don't like you, your RAS will filter the world to show you evidence that supports it. Meanwhile, the friend who smiled, the kid who waved, all that gets filtered out. Empowering beliefs program your RAS to filter for evidence of growth and kindness instead.`,
            },
            {
              word: `cognitive filter`,
              definition: `The mental lens your beliefs and focus create that shapes what you pay attention to and how you interpret it. Your RAS is the brain mechanism behind your cognitive filter. Change what you believe or focus on, and your cognitive filter shifts.`,
              audioPrompt: `A cognitive filter is the mental lens your beliefs and focus create, {name}. It shapes what you pay attention to and how you interpret what you see. Your RAS is the brain mechanism behind your cognitive filter. Here's why this matters. Two kids can be in the same classroom, same lesson, same day. One's filter is tuned to growth and learning. The other's is tuned to boredom and frustration. Same room, wildly different experiences. Your cognitive filter is running constantly. And you can retrain it.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How to Consciously Re-Program Your RAS`,
          paragraphs: [
            `Now the practical part. Since your RAS responds to what you signal as IMPORTANT, you can deliberately program it. Three real ways. First, GET CLEAR. Decide what you want to start noticing more in your life (opportunities to grow, evidence of kindness, your own progress, signs of safety). Vague signals don't program the RAS, clarity does. Second, FOCUS on it daily. Visualize what you want, journal about it, talk about it. Each focused moment is a vote to your RAS for "this matters, show me this."`,
            `Third, ASK BETTER QUESTIONS. Your RAS works like a search engine: it gives you answers to whatever you keep asking. If you keep asking "why does this always happen to me?" your RAS will dutifully filter for evidence of that. If you start asking "what's working today?" or "where is kindness showing up?" your RAS will start filtering for THOSE answers. The questions you ask, especially the ones you repeat, are some of the strongest RAS programming there is. Sage's gentle teaching: in many ways, you don't experience the world as it IS. You experience the world as your RAS shows it to you. And your RAS shows you what you've trained it to look for. Train it gently, with empowering beliefs, clear focus, and better questions. You will literally start to live in a different-feeling world, with the same outside circumstances. That is real, science-backed power.`,
          ],
          image: `/ue-assets/iw/l15-s4-reprogram.webp`,
          imageCaption: `Re-program your RAS: get clear, focus daily, ask better questions.`,
          vocab: [
            {
              word: `better questions`,
              definition: `The questions you keep asking yourself program your RAS like a search engine. "Why does this always happen to me?" produces one kind of evidence. "What's working today?" produces another. Better questions reshape what you notice.`,
              audioPrompt: `Better questions are one of the most powerful ways to re-program your RAS, {name}. Your RAS works like a search engine. It gives you answers to whatever you keep asking. If you keep asking why does this always happen to me, your RAS will dutifully filter for evidence of that. If you start asking what's working today, or where is kindness showing up, your RAS will start filtering for those answers. The questions you ask, especially the ones you repeat, are some of the strongest RAS programming there is.`,
            },
            {
              word: `visualization`,
              definition: `The practice of creating a vivid mental image of something you want to achieve or experience. Visualization is one of the most powerful ways to signal your RAS what matters, because your brain responds to imagined scenes almost as strongly as real ones.`,
              audioPrompt: `Visualization is the practice of creating a vivid mental image of something you want to achieve or experience, {name}. It's one of the most powerful ways to signal to your RAS what matters. Here's why. Your brain responds to imagined scenes almost as strongly as real ones. When you vividly picture yourself succeeding at something, your RAS gets the message: this is important. Start filtering for it. Athletes, musicians, and scientists all use visualization deliberately. It's not daydreaming. It's RAS programming through your imagination.`,
            },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids and what their RAS is doing. Classify each: FILTERING IN USEFUL (the RAS is showing them helpful things that match a healthy focus or belief), FILTERING IN LIMITING (the RAS is showing them evidence that supports a limiting belief), or CONSCIOUSLY RE-PROGRAMMING (the kid is actively training their RAS through focus, questions, or beliefs)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `useful`,   label: `Filtering In Useful`,        color: `#34D399`, description: `RAS is letting in helpful things that match a healthy focus or belief.` },
            { id: `limiting`, label: `Filtering In Limiting`,      color: `#F87171`, description: `RAS is letting in evidence that supports a limiting belief, making it feel true.` },
            { id: `program`,  label: `Consciously Re-Programming`, color: `#FBBF24`, description: `The kid is actively training their RAS through clear focus, questions, or beliefs.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Kid #1`,
              clues: [
                { text: `A kid decides they want to become a better writer.` },
                { text: `Suddenly they start noticing great sentences in everything they read, posters, books, social media.` },
                { text: `They start spotting good writing techniques everywhere they look.` },
              ],
              correctAnswer: `useful`,
              realWorldExample: `Caring about writing makes the RAS show you writing everywhere.`,
              explanation: `Once the kid decided writing mattered, the RAS started letting in writing-related information their filter previously ignored. Pure useful filtering. Same world, new filter, much more learning happening. This is the RAS working as a helpful ally.`,
            },
            {
              id: `case-2`,
              caseTitle: `Kid #2`,
              clues: [
                { text: `A kid believes "I'm always left out."` },
                { text: `At recess, they only NOTICE the moments they weren't invited to play, and miss the kids waving them over.` },
                { text: `Each day the belief feels more and more "true."` },
              ],
              correctAnswer: `limiting`,
              realWorldExample: `Limiting beliefs program the RAS to find proof of themselves.`,
              explanation: `The belief "I'm always left out" programmed the RAS to filter for evidence of that. The waves and invitations got filtered out, the lonely moments got highlighted. Pure limiting filtering. The world isn't actually shutting them out. Their RAS is just showing them a curated slice that matches the belief.`,
            },
            {
              id: `case-3`,
              caseTitle: `Kid #3`,
              clues: [
                { text: `A kid writes down each morning: "Today I'm noticing growth and kindness."` },
                { text: `They start each day asking themselves "Where is kindness showing up today?"` },
                { text: `Throughout the day, they actively look for small moments of growth and kindness.` },
              ],
              correctAnswer: `program`,
              realWorldExample: `Clear intention + better questions trains the RAS.`,
              explanation: `Clear intention + better questions + daily focus = deliberate RAS programming. Pure conscious re-programming. The kid is training their filter on purpose, and over time will literally start to experience a kinder, more growth-filled world, because that's what their RAS is showing them.`,
            },
            {
              id: `case-4`,
              caseTitle: `Kid #4 — The Tricky One`,
              clues: [
                { text: `A kid worries about getting sick. They focus on illness a lot.` },
                { text: `They start noticing every cough, every sniffle, every news story about germs.` },
                { text: `The whole world starts to feel scary and sick. They feel more anxious than ever.` },
              ],
              correctAnswer: `limiting`,
              realWorldExample: `Fear-based focus also programs the RAS.`,
              explanation: `Tricky! The kid IS focusing on something with intention, so you might call this conscious re-programming. But look closely. They're not programming for an empowering belief or healthy goal. They're feeding the RAS a fear-based focus that's making their world feel scarier and scarier. Pure limiting filtering (the fear version). Lesson: focused attention is powerful, but DIRECTION matters. Focusing on fear programs the RAS to find more fear. Focusing on safety, growth, or kindness programs it to find those. So when you re-program your RAS, choose what you focus on with care. Your RAS will obediently bring you more of whatever you point it at, helpful OR harmful. Aim it gently.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is the RETICULAR ACTIVATING SYSTEM (RAS)?`,
              options: [
                `An imaginary part of the mind`,
                `A small bundle of neurons near the base of your brain that filters what you NOTICE`,
                `Your heart`,
                `Only adults have one`,
              ],
              correctIndex: 1,
              explanation: `The RAS is a small bundle of neurons near the base of your brain. Its job is to filter what reaches your awareness, out of the millions of pieces of information hitting your senses every second. It decides what matters based on what you've signaled is important.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `Roughly how much information is your brain filtering every second?`,
              options: [
                `About 5 pieces total`,
                `About 11 million pieces hit your senses per second, but your conscious mind handles only ~40 at a time`,
                `Nothing, you notice everything`,
                `Only sounds`,
              ],
              correctIndex: 1,
              explanation: `Roughly 11 million pieces of information hit your senses every second, but your conscious mind can only handle about 40 at a time. The RAS does the filtering. Without it, you'd be overwhelmed in seconds.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is the "new car" or "blue minivan" effect?`,
              options: [
                `Cars magically appear`,
                `Once you focus on something, your RAS starts letting it through, so you suddenly see it everywhere (it was always there)`,
                `Only happens with cars`,
                `Imagination only`,
              ],
              correctIndex: 1,
              explanation: `Once you signal to your RAS that something matters (like a blue minivan you might buy), it starts letting that through your filter. You suddenly notice them everywhere. The world didn't change, your filter did. Same world, different experience.` },

            { id: `l15-q4`, format: `true-false`,
              question: `True or false: Two people walking the same street can have completely different experiences because their RAS is letting through different things.`,
              correctAnswer: true,
              explanation: `True. Same street, different filters. One person's RAS lets through evidence of kindness, another's lets through threats. The street itself is the same, but the experience is completely different because each RAS is filtering for what its owner has signaled is important.` },

            { id: `l15-q5`, format: `multiple-choice`,
              question: `How do your BELIEFS connect to the RAS?`,
              options: [
                `They don't`,
                `Your beliefs program your RAS — limiting beliefs filter for evidence supporting them; empowering beliefs do the opposite`,
                `Beliefs only affect feelings, not what you see`,
                `Beliefs are random`,
              ],
              correctIndex: 1,
              explanation: `Your beliefs are one of the strongest signals to your RAS. A limiting belief like "people don't like me" programs the RAS to filter for evidence of that (and miss the friendly waves). Empowering beliefs do the opposite. Your beliefs shape your filter, and your filter shapes your experience.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why do limiting beliefs feel so "TRUE"?`,
              options: [
                `They actually are true`,
                `They program your RAS to filter for evidence supporting them, while filtering out evidence against them — making them feel proven`,
                `It's bad luck`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `Limiting beliefs feel true because they program the RAS to show you a slice of the world that matches them. You see all the "proof," and miss the counter-evidence that got filtered out. Your filter is rigging the experience. This isn't imagination, it's literal neuroscience.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `What's one POWERFUL way to consciously re-program your RAS?`,
              options: [
                `Hope something changes`,
                `Ask BETTER QUESTIONS — your RAS works like a search engine; better questions produce better filtered results`,
                `Sleep more`,
                `Avoid all thinking`,
              ],
              correctIndex: 1,
              explanation: `Your RAS works like a search engine: it gives you answers to whatever you keep asking. "Why does this always happen to me?" produces one filter. "What's working today?" produces a very different one. The questions you ask, especially the ones you repeat, are powerful programming.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What's the big practical truth about the RAS?`,
              options: [
                `You can't influence it`,
                `You don't experience the world as it IS — you experience the world as your RAS shows it; you can train the filter on purpose`,
                `Only adults can change it`,
                `It doesn't really matter`,
              ],
              correctIndex: 1,
              explanation: `In many ways, you experience the world your RAS SHOWS you, not the world as it is. Train your RAS gently with empowering beliefs, clear focus, and better questions, and you will start to live in a different-feeling world, with the same outside circumstances. Real, science-backed power.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Take a slow, curious breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Can you think of a "blue minivan" moment in your own life, a time you started focusing on something and then started seeing it everywhere?` },
            { id: `r2`, text: `What might your RAS be filtering FOR right now based on the beliefs you hold? Notice this gently, with curiosity, not judgment.` },
            { id: `r3`, text: `What's a BETTER question you could start asking yourself each day to re-program your filter? (Like "what's working today?" or "where is kindness showing up?")` },
            { id: `r4`, text: `If you could deliberately program your RAS to notice ONE thing more in your life, what would it be? Why?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Understanding the RAS is one of the most practical insights from neuroscience, because it shows you that your experience of life isn't only "what's happening." It's "what your RAS lets through." That means you have far more power over your daily experience than you might have thought. Athletes use this to focus on success. Entrepreneurs use it to spot opportunities. Therapists use it to help people break out of limiting filters. Anyone can use it to deliberately experience a more kind, growth-filled, opportunity-rich world. Sage's note: the world is endlessly full of beauty, kindness, opportunity, AND difficulty, all at once. Your RAS decides which you primarily experience. Choose your filter gently. Train it on purpose. Same world, totally different life.`,
          familyAdventure: `Family RAS Experiment. As a family, each person picks ONE thing they're going to "tell their RAS" matters this week. It could be a color (notice everything red), a shape, a kind of word, kindness happening around them, or moments of growth. At the end of each day, share what your RAS started bringing you. Notice that the same world delivered different experiences to different people, based on different filters. You're not just learning about the RAS, you're directly experiencing how it shapes reality. It can be playful AND profound at the same time.`,
          creativePrompt: {
            intro: `Write about how your life would feel different if you deliberately re-programmed your RAS to notice something specific (kindness, growth, opportunity, beauty).`,
            floor: `Write at least 5 sentences. Pick ONE thing you'd train your RAS to filter for, and describe how your days would feel different.`,
            stretch: `Write 8 to 10 sentences. Show the contrast between your "default" filter and the new one, with vivid examples.`,
            open: `Write as much as you want. Imagine you're going to deliberately re-program your RAS for the next month to filter for ONE specific thing (kindness, your own growth, opportunities, beauty, evidence of your strengths, signs of safety). Describe how you'd train it (better questions, clear focus, daily reminders), and then take the reader through a vivid day in your life with the new filter on, what you'd notice that you usually miss, what kind of moments would suddenly stand out, how it would change how the world feels. Then compare it to a day with your usual default filter. Make it specific and real.`,
            frames: [
              `The thing I'd deliberately train my RAS to notice is ___.`,
              `I'd train it by ___.`,
              `On a typical morning, with the new filter, I'd start noticing ___.`,
              `Throughout the day, things I usually miss would suddenly stand out, like ___.`,
              `By the end of a month, my whole experience of life would feel ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You now understand one of the most powerful and least-known systems in your brain. The RAS, your filter on reality. You've learned how it works, why limiting beliefs feel so true (they program your filter), and three real ways to consciously re-program it: clarity, daily focus, and better questions. With this awareness, you genuinely can start experiencing a different-feeling world. Next, we explore something beautiful: the science of how your HEART and BRAIN work together, and the practice you can use anytime to calm them both. HEART COHERENCE AND HEARTMATH. Practice gently, and I'll see you there. — Sage.`,
          badge: `ras-engineer`,
          badgeName: `RAS Engineer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default INNERWORLD_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = INNERWORLD_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-INNERWORLD-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
