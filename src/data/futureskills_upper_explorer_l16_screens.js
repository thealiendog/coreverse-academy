// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L16 — Working With Different Minds
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : cognitive diversity research, neurodivergence acceptance,
//            team performance research (Scott Page's diversity bonus).
//            Builds on Social Leadership L02-L08 empathy/listening with
//            applied collaboration. Protective for neurodivergent kids
//            and for kids working with neurodivergent peers.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: sequence (5 moves of working well with different minds)
// SCOPE: brains genuinely work differently across humans; cognitive
//        diversity is a real strength; how to find each mind's strengths;
//        how to adapt communication; building teams that include difference
// VOICE: Byte = curious, respectful, treats cognitive variety as fascinating
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-16`,
      title: `Working With Different Minds`,
      duration: 18,
      xpReward: 75,
      badge: `mind-collaborator`,
      badgeName: `Mind Collaborator`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we explore something that surprises most people once they understand it. Human BRAINS work GENUINELY DIFFERENTLY from each other, not just "some are smarter, some are dumber" (which is mostly a myth, L01!), but in real, different WAYS. Some people think in pictures, some in words. Some process fast, some deep. Some need quiet to focus, some thrive in groups. Some see big patterns, some see tiny details. Researchers are finding that this cognitive variety is one of humanity's greatest strengths, and the kids who learn to work WELL with different minds become incredibly capable. Let's go.`,
          headline: `Working With Different Minds`,
          subtitle: `Brains work genuinely differently. Cognitive variety is a strength, not a problem`,
          visual: `/ue-assets/fs/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Different Brains Work Differently (Really)`,
          paragraphs: [
            `Here's a truth most kids don't fully understand. Brains aren't all the same machine doing the same thing at different speeds. Brains are genuinely DIFFERENT in HOW they process the world. Some people think mostly in PICTURES, they see images, scenes, visual relationships easily. Others think mostly in WORDS, with constant inner narration. Some think in PATTERNS, seeing how systems fit together. Some think in FEELINGS first, noticing emotional currents others miss. Researchers studying cognition have documented that these differences are REAL, not just preferences. Same task, different brain styles, different paths to a solution.`,
            `Beyond style differences, there are also conditions sometimes called NEURODIVERGENCE, brains that work in distinct ways that don't match the typical pattern. ADHD brains often have intense focus on interesting things but harder time with boring ones. AUTISTIC brains often notice details and patterns most people miss, AND can find social situations confusing. DYSLEXIC brains often think in big-picture ways but struggle with reading text in standard ways. NONE of these are "broken brains," they're DIFFERENT brains, with real strengths AND real challenges. About 1 in 5 or 1 in 6 kids is neurodivergent. You probably know several without knowing it. They're not less smart; they think differently. That's an important truth, both for understanding others AND, if it applies, understanding yourself.`,
          ],
          image: `/ue-assets/fs/l16-s1-different.webp`,
          imageCaption: `Brains genuinely work differently. Pictures, words, patterns, feelings. Plus neurodivergence (ADHD, autism, dyslexia).`,
          vocab: [
            { word: `cognitive variety`,
              definition: `The real truth that human brains process the world in genuinely different ways, NOT just "smarter" or "dumber." Some think in pictures, words, patterns, or feelings. Plus neurodivergence (ADHD, autism, dyslexia and others) where brains work distinctly. About 1 in 5-6 kids is neurodivergent. Different brains, not broken brains.`,
              audioPrompt: `Cognitive variety is the real truth that human brains process the world in genuinely different ways, {name}. Some people think mostly in pictures. Others think mostly in words, with constant narration. Some think in patterns. Some think in feelings first. These differences are real, not just preferences. Beyond style differences, there's also neurodivergence. ADHD brains often have intense focus on interesting things but harder time with boring ones. Autistic brains often notice details and patterns most miss. Dyslexic brains often think big-picture. None are broken brains, they're different brains.` },
            { word: `neurodivergence`,
              definition: `Brains that work in distinct ways from the typical pattern: ADHD (intense focus on interesting things, harder time with boring), Autistic (notices details and patterns others miss, can find social situations confusing), Dyslexic (big-picture thinking, struggles with standard reading). About 1 in 5-6 kids. Different brains, NOT broken brains.`,
              audioPrompt: `Neurodivergence describes brains that work in distinct ways from the typical pattern, {name}. ADHD brains often have intense focus on interesting things but harder time with boring ones. Autistic brains often notice details and patterns most people miss, and can find social situations confusing. Dyslexic brains often think in big-picture ways but struggle with reading text in standard ways. None of these are broken brains. They're different brains with real strengths AND real challenges. About one in five or six kids is neurodivergent.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Diverse Teams Solve Harder Problems`,
          paragraphs: [
            `Here's a fascinating research finding. Teams that include DIFFERENT KINDS OF MINDS solve hard problems better than teams of similar minds, even when the diverse team members are individually less "expert." Researcher Scott PAGE has spent his career studying this. He calls it the DIVERSITY BONUS. When you have a hard problem, different brain styles bring different approaches, and combining those approaches finds solutions a group of similar brains would miss. The picture-thinker sees the visual relationships. The pattern-thinker sees the system. The detail-noticer catches the bug. The big-picture thinker keeps everyone focused on what matters. Each one alone is incomplete; together they're powerful.`,
            `This means INCLUDING different minds in projects, study groups, and conversations isn't just kind, it's SMART. Real-world examples are everywhere. Many breakthrough scientific discoveries came from teams with diverse cognitive styles. The most innovative companies deliberately build cognitively diverse teams. Many neurodivergent thinkers have made huge contributions, Einstein, Edison, Temple Grandin, many others. The kid who learns to APPRECIATE and WORK WITH different minds becomes way more capable than the kid who only collaborates with people who think exactly like them. The fox-move: when you're stuck on a problem, find someone whose brain works DIFFERENTLY than yours, you'll often see something new.`,
          ],
          image: `/ue-assets/fs/l16-s2-teams.webp`,
          imageCaption: `Diverse teams beat similar teams on hard problems. Different brain styles find different paths. "Diversity bonus."`,
          vocab: [
            { word: `diversity bonus`,
              definition: `Scott Page's research finding that teams with different kinds of minds solve hard problems better than teams of similar minds. Different brain styles find different paths. The picture-thinker, pattern-thinker, detail-noticer, big-picture thinker, each alone is incomplete; together they're powerful. Including different minds is smart, not just kind.`,
              audioPrompt: `The diversity bonus is researcher Scott Page's finding that teams with different kinds of minds solve hard problems better than teams of similar minds, {name}. Even when diverse team members are individually less expert. Different brain styles bring different approaches. Combining those approaches finds solutions a group of similar brains would miss. The picture-thinker sees visual relationships. The pattern-thinker sees the system. The detail-noticer catches the bug. The big-picture thinker keeps everyone focused. Together they're powerful. Including different minds isn't just kind, it's smart.` },
            { word: `cognitive diversity in teams`,
              definition: `Deliberately including people who think differently. Quick processors and deep processors. Pattern-thinkers and detail-noticers. Word-thinkers and picture-thinkers. Neurotypical and neurodivergent. Mixed teams consistently outperform teams of similar minds on hard problems because different brain styles find different paths. Not just kind — it's smart.`,
              audioPrompt: `Cognitive diversity in teams means deliberately including people who think differently, {name}. Not just different backgrounds or experiences, but different brain styles. Quick processors and deep processors. Pattern-thinkers and detail-noticers. Word-thinkers and picture-thinkers. Neurotypical and neurodivergent. Scott Page's research shows these mixed teams consistently outperform teams of similar minds on hard problems. The reason is simple. Different brain styles find different paths. When you combine them, you cover more ground than any single style could alone.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Assume Good Faith and Adapt`,
          paragraphs: [
            `Here's the practical wisdom. When someone's mind works differently from yours, you'll sometimes feel confused or frustrated. They process slower or faster than you. They focus on different things. They communicate in ways that feel unusual. Your first instinct might be to think "they're doing this wrong" or "they're weird." The wiser first move: ASSUME GOOD FAITH. Most of the time, people aren't being difficult, they're processing differently. The friend who needs you to repeat things isn't ignoring you; their brain works a certain way. The classmate who hyperfocuses on one detail isn't obsessed; their brain notices what others miss. The sibling who needs quiet to think isn't being rude; their brain processes that way.`,
            `Then ADAPT YOUR COMMUNICATION. Different minds need slightly different communication styles. If someone processes slowly, give them more time. If someone's detail-focused, slow down and be specific. If someone's big-picture, lead with the main idea. If someone needs visuals, show; if words, explain. This isn't hard, it's noticing what each person seems to need and adjusting. Adapting isn't condescending, it's respectful. The fox-style move: ask, when possible, "how do you like to learn/work/communicate?" People love being asked, and you both work better together.`,
          ],
          image: `/ue-assets/fs/l16-s3-adapt.webp`,
          imageCaption: `Assume good faith. Adapt your communication. Ask how they like to work. Respectful, not condescending.`,
          vocab: [
            { word: `assume good faith + adapt`,
              definition: `When someone processes differently, the wise first move is to ASSUME GOOD FAITH (they're not being difficult; they think differently). Then ADAPT your communication style to what they seem to need (more time, more specific, more visual, etc.). Adapting is respectful, not condescending. Ask "how do you like to work/learn/communicate?"`,
              audioPrompt: `Assume good faith plus adapt is the practical wisdom for working with different minds, {name}. When someone processes differently, you'll sometimes feel confused or frustrated. The wiser first move is to assume good faith. Most people aren't being difficult, they're processing differently. The classmate who hyperfocuses isn't obsessed. Then adapt your communication. If someone processes slowly, give them more time. If detail-focused, slow down and be specific. If big-picture, lead with main idea. Ask, how do you like to learn or work? People love being asked.` },
            { word: `communication style`,
              definition: `The way each person sends and receives information most effectively. Slow processors need more time. Detail-focused brains need specific information. Big-picture brains need the main idea first. Visual thinkers need diagrams or written notes. Adapting your communication to each person's style isn't condescending — it's respectful and practical.`,
              audioPrompt: `Communication style is the way each person sends and receives information most effectively, {name}. Some people process information slowly and need more time before responding. Others process quickly and need to move fast. Some need visual information, diagrams, pictures, written notes. Some want the big picture first, then details. Others need details first to build up to the big picture. Adapting your communication to each person's style isn't condescending. It's respectful. You both get better results when information lands the way the other person's brain receives it best.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Find Each Mind's Strengths`,
          paragraphs: [
            `Here's the deepest move. Every mind has STRENGTHS and CHALLENGES. The wisest collaborators FIND THE STRENGTHS in each person's brain style and put those strengths to work. The kid who hyperfocuses for hours? Great at the deep-work tasks. The kid who notices small details? Great at catching errors others miss. The kid who sees patterns instantly? Great at understanding systems. The kid who notices feelings? Great at understanding what the team really needs. The kid with rapid attention shifts? Great at noticing many things at once. The kid who thinks in pictures? Great at design, layout, visualization. Each "different" trait is a real STRENGTH if put in the right work.`,
            `This applies to YOU too. Notice what your brain does WELL. Are you a quick processor or a deep one? A pattern-spotter or a detail-noticer? A picture-thinker or a word-thinker? An introvert who needs solo time to think well, or an extrovert who thinks better with others? Knowing your own strengths lets you use them, AND knowing your challenges lets you compensate. NONE of these styles is "better." All have real strengths and real challenges. The world needs all kinds of minds. Byte's first teaching: brains genuinely work differently, not just smarter/dumber. Different brain styles bring different strengths. The DIVERSITY BONUS makes teams smarter when they include cognitive variety. Assume good faith with people who think differently. Adapt your communication. Find each mind's strengths. This makes you a better collaborator, friend, family member, and human. The fox who works well with all kinds of minds becomes capable in ways the lone fox isn't.`,
          ],
          image: `/ue-assets/fs/l16-s4-strengths.webp`,
          imageCaption: `Every mind has strengths AND challenges. Find each one's strengths. Know your own too. No mind is "better."`,
          vocab: [
            { word: `find each mind's strengths`,
              definition: `The deepest collaboration move. Every brain style has real strengths AND real challenges. Wise collaborators find the strengths and put them to work. Hyperfocus, detail-noticing, pattern-spotting, picture-thinking, big-picture seeing, feeling-noticing, all are real strengths in the right work. No mind is "better"; the world needs all kinds.`,
              audioPrompt: `Find each mind's strengths is the deepest collaboration move, {name}. Every mind has strengths and challenges. Wise collaborators find the strengths in each brain style and put those strengths to work. The kid who hyperfocuses is great at deep-work tasks. The kid who notices small details is great at catching errors. The pattern-spotter is great at systems. The feeling-noticer understands what the team really needs. The picture-thinker is great at design and layout. Each different trait is a real strength in the right work.` },
            { word: `brain style awareness`,
              definition: `Understanding how YOUR OWN brain works best. Quick or deep processor? Pattern-spotter or detail-noticer? Picture-thinker or word-thinker? Alone or with others? Knowing your strengths lets you use them intentionally. Knowing your challenges lets you build strategies. Not about labeling yourself — about using what you've got effectively.`,
              audioPrompt: `Brain style awareness means understanding how your OWN brain works best, {name}. Are you a quick processor or a deep one? A pattern-spotter or a detail-noticer? A picture-thinker or a word-thinker? Do you focus best alone or with others? Introvert or extrovert? Knowing your brain's strengths lets you use them on purpose. Knowing your challenges lets you build strategies to compensate. This self-knowledge is not about labeling yourself. It's about using what you've got.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Let's put the 5 moves of working with different minds in order, {name}. From FIRST NOTICING to ONGOING COLLABORATION. Use the arrows to arrange them.`,
          items: [
            { id: `step-notice`,    label: `NOTICE that minds work GENUINELY differently. Not just smarter/dumber but in real different ways (pictures vs. words, patterns vs. details, fast vs. deep, neurotypical vs. neurodivergent)`,         position: 1 },
            { id: `step-faith`,     label: `ASSUME GOOD FAITH — when someone processes differently, they're not being difficult; their brain works a certain way; this is the kindest and most accurate first move`,                       position: 2 },
            { id: `step-strengths`, label: `FIND EACH MIND'S STRENGTHS — every brain style has real strengths (hyperfocus, detail-noticing, pattern-spotting, feeling-attunement, big-picture); the right work matched to each strength`,    position: 3 },
            { id: `step-adapt`,     label: `ADAPT YOUR COMMUNICATION. More time for slow processors, specific for detail brains, main idea first for big-picture, visuals when helpful. Ask "how do you like to work?"`,                  position: 4 },
            { id: `step-teams`,     label: `BUILD TEAMS THAT INCLUDE DIFFERENCE — diverse teams solve harder problems better (Page's "diversity bonus"); seek out collaborators whose minds work differently for richer thinking together`,  position: 5 },
          ],
          completionMessage: `Beautifully done, {name}. That's the real practice of working with different minds: notice the differences, assume good faith, find each strength, adapt communication, and build teams that include difference. Most adults haven't figured this out. You're building it now. The world needs more collaborators like you.`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l16-q1`, format: `true-false`,
              question: `True or false: Brains are all the same machine doing the same thing at different speeds.`,
              correctAnswer: false,
              explanation: `False. Brains are GENUINELY DIFFERENT in HOW they process the world, not just "some smarter, some dumber." Some think in pictures, some in words. Some in patterns, some in details. Some fast, some deep. Researchers have documented that these differences are real, not just preferences. Same task, different brain styles, different paths.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `What is NEURODIVERGENCE?`,
              options: [
                `Broken brains`,
                `Brains that work in distinct ways from the typical pattern (ADHD, autism, dyslexia, others). About 1 in 5-6 kids. Real strengths AND real challenges. NOT broken, just different`,
                `Just made up`,
                `Worse brains`,
              ],
              correctIndex: 1,
              explanation: `Neurodivergence refers to brains that work in distinct ways from the typical pattern. ADHD often = intense focus on interesting things, harder time with boring. Autistic = often notices details and patterns most miss, can find social situations confusing. Dyslexic = often big-picture thinking, struggles with standard reading. About 1 in 5-6 kids. Different brains, not broken brains.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `What is Scott Page's DIVERSITY BONUS?`,
              options: [
                `Random benefit`,
                `Teams with DIFFERENT KINDS OF MINDS solve hard problems better than teams of similar minds. Different brain styles bring different paths. Including different minds is SMART, not just kind`,
                `Same minds work best`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `Scott Page's diversity bonus: teams with different kinds of minds solve hard problems better than teams of similar minds, even when the diverse team members are individually less expert. Different brain styles bring different approaches. Combining them finds solutions a group of similar brains would miss. Including different minds is smart, not just kind.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `When someone processes DIFFERENTLY than you, what is the WISE first move?`,
              options: [
                `Assume they're wrong`,
                `ASSUME GOOD FAITH — they're not being difficult, their brain works a certain way; this is the kindest AND most accurate first move`,
                `Get frustrated`,
                `Ignore them`,
              ],
              correctIndex: 1,
              explanation: `When someone processes differently, the wise first move is to ASSUME GOOD FAITH. Most of the time, people aren't being difficult, they're processing differently. The friend who needs you to repeat things isn't ignoring you; their brain works a certain way. The classmate who hyperfocuses isn't obsessed. The sibling who needs quiet isn't being rude.` },

            { id: `l16-q5`, format: `multiple-choice`,
              question: `What does ADAPTING YOUR COMMUNICATION look like?`,
              options: [
                `Same with everyone`,
                `More TIME for slow processors, more SPECIFIC for detail brains, main idea FIRST for big-picture, VISUALS for picture-thinkers. Ask "how do you like to work?"`,
                `Random changes`,
                `Condescending`,
              ],
              correctIndex: 1,
              explanation: `Different minds need slightly different communication. If someone processes slowly, give them more time. If detail-focused, slow down and be specific. If big-picture, lead with the main idea. If picture-thinker, show; if word-thinker, explain. Adapting isn't condescending, it's respectful. Ask "how do you like to learn/work/communicate?" People love being asked.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What is the DEEPEST move in collaboration?`,
              options: [
                `Force everyone to think like you`,
                `FIND EACH MIND'S STRENGTHS — every brain style has real strengths (hyperfocus, detail-noticing, pattern-spotting, big-picture, feeling-attunement); put those strengths to work in the right tasks`,
                `Random assignments`,
                `Avoid different minds`,
              ],
              correctIndex: 1,
              explanation: `The deepest move is finding each mind's strengths. Every brain style has real strengths AND real challenges. Hyperfocus = great at deep work. Detail-noticing = great at catching errors. Pattern-spotting = great at systems. Big-picture = great at strategy. Feeling-noticer = great at understanding what the team needs. Each "different" trait is a strength in the right work.` },

            { id: `l16-q7`, format: `true-false`,
              question: `True or false: No brain style is "better" — the world needs all kinds of minds.`,
              correctAnswer: true,
              explanation: `True. No brain style is better. All have real strengths AND real challenges. The world needs all kinds of minds, picture-thinkers, word-thinkers, pattern-spotters, detail-noticers, fast processors, deep processors, neurotypical, neurodivergent. Each contributes something the others don't. Cognitive variety is humanity's strength.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about working with different minds?`,
              options: [
                `Avoid difference`,
                `Brains genuinely work differently. Diversity bonus makes teams smarter. Assume good faith, adapt communication, find each mind's strengths. The world needs ALL kinds of minds, including yours`,
                `Some minds are better`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Brains genuinely work differently, not just smarter/dumber. Different brain styles bring different strengths. The diversity bonus makes teams smarter when they include cognitive variety. Assume good faith with people who think differently. Adapt your communication. Find each mind's strengths. The fox who works well with all kinds of minds becomes more capable than the lone fox.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it gently, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `What KIND of mind do YOU seem to have? Quick or deep processor? Picture or word thinker? Pattern or detail focused? Notice without judgment.` },
            { id: `r2`, text: `Who do you know whose brain works DIFFERENTLY from yours? What strengths do they have that you don't?` },
            { id: `r3`, text: `Have you ever felt frustrated with someone for thinking "differently"? What might shift if you assumed good faith instead?` },
            { id: `r4`, text: `If you're NEURODIVERGENT (ADHD, autism, dyslexia, or other), what are your strengths? What support helps you most?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Research on cognitive diversity and neurodivergence is one of the most rapidly developing areas in modern science. Scott Page's "The Diversity Bonus" and Temple Grandin's work on autistic strengths have transformed how researchers, schools, and businesses think about minds. The old idea (one kind of brain is "normal," others are deficient) has been completely replaced in serious research by cognitive variety. The new understanding (different brains have different strengths and challenges, all of them valuable) is far more accurate and far more useful. Byte's note: you're growing up in the first generation where neurodivergence is widely talked about as difference, not disorder. This is huge. About 1 in 5-6 of your friends and classmates is neurodivergent in some way. Some of them know it; some don't. They're not less smart, they think differently. If you're neurodivergent yourself, please know, your brain is not broken. It works in a specific way with real strengths AND real challenges. The world needs your mind. The kids who learn early to work with cognitive variety, their own and others', become the most capable collaborators of their generation. Be one of them.`,
          familyAdventure: `Family Mind Map. As a family, talk about how each person's brain seems to work best. Does mom think in pictures or words? Does dad need quiet to focus or thrive in groups? Does the youngest sibling notice tiny details others miss? Is anyone in the family neurodivergent? What helps each person work and communicate best? Adults model honest reflection. Building this understanding in your family helps everyone, both for collaborating well at home AND for understanding that brain differences are normal and valuable. Many families find this conversation transformative.`,
          creativePrompt: {
            intro: `Write about your own mind and the different minds in your life.`,
            floor: `Write at least 5 sentences. Describe how your brain seems to work and one different mind in your life.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece on cognitive variety in your life.`,
            open: `Write as much as you want. Write a full piece on cognitive variety. Reflect on how YOUR OWN brain seems to work, are you quick or deep processor? Picture or word thinker? Pattern or detail focused? Do you focus best alone or with others? Then describe 2-3 different minds in your life (family, friends, classmates). Name SPECIFIC ways their brains work differently from yours and the strengths you see in them. If you're neurodivergent or have neurodivergent family or friends, describe what you've learned about their distinct strengths AND what support helps them. Describe the kind of collaborator you want to be, someone who assumes good faith, adapts communication, finds each mind's strengths. End with a commitment to value cognitive variety, your own and others'. Make it specific and appreciative.`,
            frames: [
              `How my brain seems to work: ___.`,
              `A different mind in my life: ___, with this strength: ___.`,
              `Another different mind: ___, with this strength: ___.`,
              `If I'm neurodivergent or know someone who is: ___.`,
              `The kind of collaborator I want to be: ___.`,
              `My commitment: ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Open, respectful work, {name}! You now understand one of the most important modern skills, working with COGNITIVE VARIETY. Brains genuinely work differently. Different minds bring different strengths. Diversity bonus makes teams smarter. Assume good faith. Adapt communication. Find each mind's strengths. Most adults still don't get this. You do. Next, we explore the ETHICS of technology and how to think through hard questions about tech in your life. THE ETHICS OF TECH. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `mind-collaborator`,
          badgeName: `Mind Collaborator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L16;
