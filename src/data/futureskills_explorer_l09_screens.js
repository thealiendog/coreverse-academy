// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 9
// "Creative Thinking: The Six Thinking Hats"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-09',
      title:     `Creative Thinking: The Six Thinking Hats`,
      duration:  12,
      xpReward:  50,
      badge:     'creative-thinker',
      badgeName: `Creative Thinker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Most people think there's one right way to think about a problem. But what if you could put on different thinking hats and deliberately look at the same problem from six completely different angles? This technique — developed by psychologist Edward de Bono — is used by corporations, governments, and research teams around the world. It works. And you can use it starting today.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Why We Need Different Kinds of Thinking`,
          paragraphs: [
            `Most people default to one type of thinking — usually either analytical (looking for problems) or optimistic (seeing the bright side). Both are valuable, but both are incomplete. The best solutions come from combining multiple types of thinking deliberately. Edward de Bono developed the Six Thinking Hats as a structured way to do this — to ensure no important perspective gets missed when solving a problem.`,
            `When a group of people tries to solve a problem together, thinking often collides rather than combining. One person is worried about risks while another is excited about possibilities. One person wants more facts while another has already jumped to a solution. The result is confusion, conflict, and decisions shaped by whoever argues loudest — not by whoever has the best thinking. The Six Hats technique fixes this by synchronizing everyone's thinking so the whole group is focused on the same angle at the same time.`,
            `Creative thinking isn't just for artists or inventors — it's a skill that makes you better at solving any kind of problem. Engineers, scientists, doctors, teachers, business leaders, and athletes all use creative thinking when they face challenges that don't have obvious answers. The ability to look at a problem from multiple angles, generate new ideas, and combine perspectives in unexpected ways is one of the most valuable skills a person can develop.`,
          ],
          image:        '/explorer-assets/future-skills/l09-magazine-why-different-thinking.png',
          imageCaption: `Why we need different kinds of thinking — the best decisions combine multiple perspectives, each examining a different angle of the problem`,
          vocab: [
            { word: `perspective`,      definition: `A particular point of view or way of looking at a situation — different perspectives reveal different aspects of the same problem, which is why combining them leads to better decisions.`,       audioPrompt: `Perspective — a particular point of view or way of looking at a situation. Different perspectives reveal different aspects of the same problem, which is why combining them leads to better decisions.` },
            { word: `lateral thinking`, definition: `A term coined by Edward de Bono for solving problems through indirect, creative approaches — looking at a challenge from unexpected angles rather than following the most obvious path.`,        audioPrompt: `Lateral thinking — a term coined by Edward de Bono for solving problems through indirect, creative approaches. Looking at a challenge from unexpected angles rather than following the most obvious path.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Six Hats`,
          paragraphs: [
            `Edward de Bono's six hats each represent a different mode of thinking. White Hat: facts and information only — what do we know? What do we need to find out? Red Hat: emotions and gut feelings — how does this feel? What's your instinct? Black Hat: caution and risks — what could go wrong? What are the weaknesses? Yellow Hat: optimism and benefits — what's good about this? What's the best possible outcome? Green Hat: creativity and new ideas — what else could we try? Are there completely different approaches? Blue Hat: process and organization — how are we thinking? Are we on track?`,
            `The power of the system is that each hat isolates one type of thinking. When wearing the Black Hat, even the most optimistic person must think about risks. When wearing the Green Hat, even a cautious person must generate creative ideas. This prevents one personality from dominating — the person who always worries can't derail a Yellow Hat session, and the person who's always enthusiastic can't skip the Black Hat reality check. Every type of thinking gets its full moment of attention.`,
            `The six hats also change how disagreements work. Instead of debating whether an idea is good or bad, the group wears different hats in sequence — first gathering facts (White), then exploring risks (Black), then exploring benefits (Yellow), then generating alternatives (Green). Disagreements become productive because they're no longer about who's right; they're about making sure every angle gets examined. De Bono found that meetings using the six hats method were dramatically shorter and produced better decisions.`,
          ],
          image:        '/explorer-assets/future-skills/l09-magazine-six-hats.png',
          imageCaption: `The six thinking hats — White (facts), Red (feelings), Black (risks), Yellow (benefits), Green (creativity), Blue (process)`,
          vocab: [
            { word: `White Hat`, definition: `The thinking mode focused on facts and information only — what do we know, what don't we know, and what do we need to find out? White Hat thinking separates verified facts from opinions and assumptions.`, audioPrompt: `White Hat — the thinking mode focused on facts and information only. What do we know, what don't we know, and what do we need to find out? White Hat thinking separates verified facts from opinions and assumptions.` },
            { word: `Black Hat`, definition: `The thinking mode focused on caution and risks — what could go wrong, what are the weaknesses, and what dangers should we watch for? Black Hat thinking protects against problems before they happen.`,   audioPrompt: `Black Hat — the thinking mode focused on caution and risks. What could go wrong, what are the weaknesses, and what dangers should we watch for? Black Hat thinking protects against problems before they happen.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How It Works in Practice`,
          paragraphs: [
            `In a Six Hats session, everyone in the group wears the same hat at the same time — hence the phrase "parallel thinking." When wearing the Black Hat, everyone focuses only on risks — even the most optimistic people must think about what could go wrong. This prevents one negative person from shooting everything down while everyone else is excited. It separates thinking types so each gets proper attention and doesn't get drowned out by other thinking modes.`,
            `Teams that use this method follow a sequence that fits the decision they're making. For evaluating a new idea: White Hat first (what do we know?), then Yellow Hat (what's promising?), then Black Hat (what are the risks?), then Green Hat (how can we address those risks creatively?), then Red Hat (how does the team feel?), then Blue Hat (what's our next step?). The sequence can be adapted — but having a deliberate sequence ensures no perspective gets accidentally skipped.`,
            `The six hats method is used in business strategy sessions, medical decision-making, school curriculum design, and political planning. It's particularly powerful for decisions that involve both factual analysis and values — where different types of thinking tend to collide. A team deciding whether to launch a new product, a school deciding on a new program, a family deciding on a big move — all of these benefit from structured parallel thinking rather than free-form debate.`,
          ],
          image:        '/explorer-assets/future-skills/l09-magazine-how-it-works.png',
          imageCaption: `How it works in practice — everyone wears the same hat at the same time, so all thinking is synchronized and every angle gets full attention`,
          vocab: [
            { word: `parallel thinking`, definition: `A technique where everyone in a group focuses on the same type of thinking at the same time — the foundation of the Six Hats method. It prevents conflicting thinking styles from clashing and ensures every perspective gets attention.`, audioPrompt: `Parallel thinking — a technique where everyone in a group focuses on the same type of thinking at the same time. The foundation of the Six Hats method. It prevents conflicting thinking styles from clashing and ensures every perspective gets attention.` },
            { word: `Yellow Hat`,        definition: `The thinking mode focused on optimism and benefits — what's positive about this idea, what's the best possible outcome, and what value could it create? Yellow Hat thinking looks for reasons why something could work.`,                     audioPrompt: `Yellow Hat — the thinking mode focused on optimism and benefits. What's positive about this idea, what's the best possible outcome, and what value could it create? Yellow Hat thinking looks for reasons why something could work.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Creativity as a Skill`,
          paragraphs: [
            `Creativity isn't something you either have or don't have — it's a skill you can deliberately practice and improve. Research shows that people who practice creative thinking techniques produce more ideas, find more unexpected solutions, and are better at solving problems that have no obvious answers. Like any skill, creative thinking gets stronger with use. The more you practice looking at problems from different angles, the more naturally it comes.`,
            `There are many techniques for building creative thinking beyond the six hats. Brainstorming — generating as many ideas as possible without judging any of them — trains your brain to keep producing rather than stopping at the first good idea. SCAMPER (Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse) gives you a checklist for finding new angles on an existing idea. Random word association forces your brain to make unexpected connections. All of these techniques work by disrupting habitual thinking patterns.`,
            `The most important principle in creative thinking is separating generation from evaluation. When you're generating ideas, judgment kills creativity — a voice that says "that's a bad idea" stops the flow before the good ideas appear. The best approach is to generate freely and without judgment first, then evaluate afterward. This is why brainstorming has a rule: no criticism during the generation phase. Every idea gets recorded, including the wild ones — because sometimes the wildest idea contains the seed of the best solution.`,
          ],
          image:        '/explorer-assets/future-skills/l09-magazine-creativity-skill.png',
          imageCaption: `Creativity as a skill — not something you're born with, but something you build through deliberate practice and technique`,
          vocab: [
            { word: `brainstorming`, definition: `A creativity technique where you generate as many ideas as possible without judging any of them — quantity over quality at first, so the best ideas aren't blocked by premature criticism.`,         audioPrompt: `Brainstorming — a creativity technique where you generate as many ideas as possible without judging any of them. Quantity over quality at first, so the best ideas aren't blocked by premature criticism.` },
            { word: `Green Hat`,    definition: `The thinking mode focused on creativity and new ideas — what else could we try, are there completely different approaches, and what haven't we considered? Green Hat thinking generates alternatives and possibilities.`, audioPrompt: `Green Hat — the thinking mode focused on creativity and new ideas. What else could we try, are there completely different approaches, and what haven't we considered? Green Hat thinking generates alternatives and possibilities.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each thinking statement, then match it to the hat it belongs to!`,
          guideText:     `Remember: White Hat = facts only. Black Hat = risks and caution. Yellow Hat = optimism and benefits. Green Hat = creativity and new ideas. Can you match each statement to the hat it represents?`,
          columnHeaders: [`The Thinking Statement`, `Which Hat?`],
          items: [
            { image: 'l09-game-white.png',  label: `Listing every fact we know about the problem before anyone suggests a single solution.`,                                                                correctMatch: 'white',  objectPosition: 'center 50%', matchPhrase: `White Hat! White Hat thinking is about facts and information only — no opinions, no guesses, no feelings. Before the group decides anything, White Hat thinking asks: what do we actually know? What's verified? What's still unknown? Starting with White Hat thinking grounds the whole session in reality and prevents the group from making decisions based on assumptions rather than facts.` },
            { image: 'l09-game-black.png',  label: `If we test it without checking for safety problems first, someone might get hurt.`,                                                                    correctMatch: 'black',  objectPosition: 'center 50%', matchPhrase: `Black Hat! Black Hat thinking looks for risks, weaknesses, and caution signals — what could go wrong, what might fail, what dangers haven't been considered. This is one of the most valuable hats because it catches problems before they happen. The key is that Black Hat thinking is logical and specific — it's not pessimism, it's risk assessment. Every team needs a moment of focused Black Hat thinking before acting on any significant decision.` },
            { image: 'l09-game-yellow.png', label: `This plan could save the team hours every week and help everyone feel much less stressed.`,                                                              correctMatch: 'yellow', objectPosition: 'center 50%', matchPhrase: `Yellow Hat! Yellow Hat thinking looks for the positive — what's good about this idea, what benefits could it bring, what's the best possible outcome if it works? Yellow Hat thinking isn't about ignoring problems; it's about making sure the real value of an idea gets examined just as carefully as the risks. A team that only wears Black Hat misses opportunities. Yellow Hat thinking ensures the group sees the upside clearly.` },
            { image: 'l09-game-green.png',  label: `What if we completely flipped the schedule and tried the opposite of what we've always done?`,                                                         correctMatch: 'green',  objectPosition: 'center 50%', matchPhrase: `Green Hat! Green Hat thinking is about creativity and new possibilities — what alternatives haven't been considered, what would happen if we tried something completely different, what new approaches could solve this? Green Hat time is when wild ideas are welcome. During Green Hat thinking, no idea is too unusual to say out loud. Some of the best solutions start as ideas that seemed too strange to take seriously — until someone followed them further.` },
            { image: 'l09-game-white2.png', label: `Checking how many people are affected by the problem and what resources are actually available to solve it.`,                                           correctMatch: 'white',  objectPosition: 'center 50%', matchPhrase: `White Hat again! Gathering information — counting how many people are involved, what resources exist, what the timeline looks like — is always White Hat thinking. White Hat focuses on verifiable facts: numbers, data, confirmed reports, and identified gaps in knowledge. When the group needs to know what they're working with before deciding anything, it's time for the White Hat.` },
          ],
          buckets: [
            { id: 'white',  label: `⬜ White Hat (Facts)`,      color: '#94A3B8' },
            { id: 'black',  label: `🖤 Black Hat (Risks)`,      color: '#6B7280' },
            { id: 'yellow', label: `💛 Yellow Hat (Benefits)`,  color: '#F59E0B' },
            { id: 'green',  label: `💚 Green Hat (Creativity)`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about creative thinking and the Six Hats. Answer all 6 questions to earn your Creative Thinker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the purpose of the Six Thinking Hats technique?`,
              options:      [`To make meetings more fun`, `To deliberately look at a problem from six different perspectives for more complete thinking`, `To give everyone a role in a group project`, `To decide which person is the best thinker`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does the Black Hat represent?`,
              options:      [`Sadness and negativity`, `Facts and information`, `Caution and risks — what could go wrong`, `Creative and new ideas`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Is creativity something you're born with, or a skill you can develop?`,
              options:      [`Something you're born with — you either have it or you don't`, `A skill you can develop through deliberate practice`, `It depends entirely on your IQ`, `Only artists and musicians can be truly creative`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `The Six Thinking Hats technique works by having everyone in a group focus on the same type of thinking at the same time — so each perspective gets full, undivided attention.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The hat that represents creativity and new ideas — 'what else could we try?' — is the ___ hat.`,
              options:      [`Green`, `Blue`, `Yellow`, `Red`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does the White Hat represent in the Six Thinking Hats technique?`,
              options:      [`Emotions and gut feelings`, `Caution and risks`, `Facts and information only`, `Creative new ideas`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "Six Thinking Hats examples" — there are great case studies showing how teams used the technique for real decisions. Look for an example where the Black Hat or Green Hat thinking changed the outcome. The technique looks simple but the results are often surprising.`,
          familyAdventure: `Use the Six Thinking Hats for a real family decision — planning an outing, deciding on a new routine, or solving a household challenge. Have everyone wear the same hat at the same time. Go through at least four hats together. Does it lead to better ideas or a more complete picture than your usual discussions? Notice which hat felt most natural — and which was hardest.`,
          creativePrompt:  `Pick a problem you've been stuck on — at school, with a hobby, or with a friendship. Work through all six hats on your own: White (what are the facts?), Red (how do I feel about it?), Black (what could go wrong with each solution?), Yellow (what's the best outcome I can imagine?), Green (what ideas haven't I tried yet?), Blue (what's my plan?). Write a few sentences for each hat. Does a solution emerge that you hadn't seen before?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'creative-thinker',
          badgeName: `Creative Thinker`,
          message:   `Brilliant work, {name}! You now know that creative thinking is a deliberate skill — and the Six Hats technique lets you look at any problem from six angles no single perspective could cover alone. Facts, feelings, risks, benefits, creativity, and process — all in sequence, all together. The most powerful thinkers switch hats on purpose. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L09] Loaded: "Creative Thinking: The Six Thinking Hats" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l09-magazine-why-different-thinking.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-magazine-six-hats.png',               { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-magazine-how-it-works.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l09-magazine-creativity-skill.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L09] why-different-thinking: ${r1.ok}, six-hats: ${r2.ok}, how-it-works: ${r3.ok}, creativity-skill: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L09] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l09_screens;
