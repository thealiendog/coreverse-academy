// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS UE  |  L11 — Creativity as a Skill
// Age band : upper_explorers (9–10)   Guide: byte (fox)
// Domain   : creativity research — Mihaly Csikszentmihalyi, the creative
//            process (preparation, incubation, illumination, verification),
//            divergent/convergent thinking, combining ideas across fields,
//            constraints as creative fuel. Demystifies creativity for kids
//            who don't think they're "creative."
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real creative practices / creativity myths /
//            creativity blockers). Trick case = "waiting for inspiration"
//            which looks like respect for creativity but actually blocks it.
// SCOPE: creativity is a SKILL anyone can develop, real creative process
//        has 4 stages, ideas come from combining and crossing fields,
//        constraints fuel creativity, prolific output beats waiting for
//        perfect
// VOICE: Byte = playful, sees creativity as one of the foxiest skills,
//        loves combining ideas
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const FUTURESKILLS_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `fs`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-9-10-11`,
      title: `Creativity as a Skill`,
      duration: 18,
      xpReward: 75,
      badge: `creative-thinker`,
      badgeName: `Creative Thinker`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey, {name}! Byte here. Today we tackle something most people get COMPLETELY wrong: CREATIVITY. Most kids and adults think creativity is something some people HAVE and others DON'T. They think it's magic, or talent, or genius that strikes randomly. None of that is true. Researchers studying creativity have found that creativity is a SKILL, like sharp thinking (L01) or learning (L08), that anyone can develop with the right practices. Today, you learn what creativity actually is, where it really comes from, and how to grow yours. The fox who learns this gets one of life's most powerful skills. Let's go.`,
          headline: `Creativity as a Skill`,
          subtitle: `Real creativity isn't magic — it's a skill with real techniques anyone can learn`,
          visual: `/ue-assets/fs/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Creativity Is a Skill, Not Magic`,
          paragraphs: [
            `Here's the biggest myth about creativity. People think it's a fixed talent. "I'm not creative" is one of the most common false beliefs there is. Researchers studying actually-creative people (artists, scientists, inventors, writers, entrepreneurs) have found something fascinating. They aren't born with magical creativity genes. They use specific PRACTICES, ones anyone can learn, that generate creative output reliably. Researcher Mihaly CSIKSZENTMIHALYI studied hundreds of creative people across decades and found they shared TRAINED HABITS, not just inborn talent. Some were considered very smart, some weren't. What they shared was the PROCESS.`,
            `So what is creativity actually? At its core, creativity is COMBINING IDEAS in new ways. Almost every "new" idea is actually a combination of existing ones, brought together in a fresh way. The wheel + the suitcase = rolling luggage. Phones + cameras = smartphones. Books + audio = audiobooks. Movies + interactivity = video games. Almost everyone who makes something new is COMBINING things that already existed. This is great news. You don't have to wait for magic. You just have to learn things, expose yourself to lots of different fields, and START combining. Creativity becomes a skill the moment you stop waiting for it to happen TO you and start doing the practices that make it happen.`,
          ],
          image: `/ue-assets/fs/l11-s1-skill.webp`,
          imageCaption: `Creativity is a skill. Combine ideas in new ways. Almost every new thing is a combination of old ones.`,
          vocab: [
            { word: `creativity as combination`,
              definition: `The core truth about creativity. Almost every new idea is a COMBINATION of existing ideas brought together in a fresh way. Wheel + suitcase = rolling luggage. Phone + camera = smartphone. Researchers found this is how human creativity actually works, not magic, but smart combination. Anyone can learn to do this.`,
              audioPrompt: `Creativity as combination is the core truth about creativity, {name}. Almost every new idea is a combination of existing ideas brought together in a fresh way. The wheel plus the suitcase equals rolling luggage. Phones plus cameras equals smartphones. Almost everyone who makes something new is combining things that already existed. Researcher Mihaly Csikszentmihalyi studied hundreds of creative people and found they shared trained habits, not just inborn talent. You don't have to wait for magic. You learn things, expose yourself to lots of fields, and start combining.` },
            { word: `creative mindset`,
              definition: `The belief that creativity is a learnable SKILL, not a fixed talent you either have or don't. Research showed creative people share trained habits, not magic genes. Anyone who learns the real practices of creativity — combination, the 4-stage process, making a lot — can grow it. The belief that you're "not creative" is itself the biggest barrier.`,
              audioPrompt: `Creative mindset is the belief that creativity is a learnable skill, not a fixed talent you either have or don't, {name}. Research showed creative people share trained habits. The belief that you're not creative is itself the biggest barrier. Anyone who learns the real practices of creativity can grow it. Exposure to ideas, combination across fields, using the 4-stage process, making a lot without waiting for perfect. The moment you stop treating creativity as something that happens TO you and start doing the practices, it grows.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Real Creative Process (4 Stages)`,
          paragraphs: [
            `Researchers have found that creative work follows a real PROCESS, not random inspiration. There are roughly four stages. STAGE 1: PREPARATION. You feed your mind with lots of information, ideas, and experiences related to the problem or area you're working on. Read widely, watch, learn, ask questions, gather. Creativity needs MATERIAL to work with. The kid who only consumes one type of content has fewer combinations available; the kid who reads widely across fields has many more. STAGE 2: INCUBATION. This is the secret one most people skip. After you've fed your mind, you LET IT REST. Take a walk. Sleep. Do something else. Your brain works on the problem in the background, making connections you can't make by trying harder. Researchers call this the INCUBATION PERIOD, and it's when many creative breakthroughs actually happen.`,
            `STAGE 3: ILLUMINATION. The "aha moment" when the idea comes through. Often in the shower, on a walk, right before sleep, or while doing something unrelated. This isn't random magic, it's the result of preparation + incubation. The brain delivers the combination. STAGE 4: VERIFICATION. You take the idea and TEST it. Build it. Try it. Get feedback. Iterate. Most creative ideas don't work the first time. You refine through cycles of testing. Many people skip preparation (don't feed their minds enough), skip incubation (don't let ideas rest), then complain that "no ideas come." The kid who learns this 4-stage process can generate creative work reliably, not magically.`,
          ],
          image: `/ue-assets/fs/l11-s2-process.webp`,
          imageCaption: `4 stages. PREPARATION, INCUBATION, ILLUMINATION, VERIFICATION. Real process, not magic.`,
          vocab: [
            { word: `creative process`,
              definition: `The four real stages of creative work. PREPARATION (feed your mind widely). INCUBATION (let ideas rest in the background, walk, sleep, do something else). ILLUMINATION (the "aha" moment delivers a combination). VERIFICATION (test, iterate, refine). Most people skip preparation and incubation, then wonder why no ideas come.`,
              audioPrompt: `The creative process has four real stages, {name}. Stage 1, preparation. You feed your mind with lots of information, ideas, and experiences related to your area. Read widely, watch, learn, gather. Creativity needs material. Stage 2, incubation. After feeding your mind, you let it rest. Walk, sleep, do something else. Your brain works in the background making connections. Stage 3, illumination. The aha moment when the idea comes through. Stage 4, verification. Test it, build it, iterate. Many people skip preparation and incubation, then complain no ideas come.` },
            { word: `incubation`,
              definition: `Stage 2 of the creative process. After preparing your mind with material and ideas, you STEP AWAY and let your brain work in the background. Walk, sleep, do something unrelated. Research shows the brain makes connections during rest that it can't make by trying harder. This is why creative breakthroughs often happen in the shower, on a walk, or right before sleep.`,
              audioPrompt: `Incubation is stage 2 of the creative process, {name}. After feeding your mind with lots of material and ideas, you step away and let your brain work in the background. Walk, sleep, do something unrelated. Your brain keeps making connections you can't force by trying harder. Researchers studying creative people found this is when many breakthroughs actually happen. In the shower, on a walk, right before sleep. Most people skip incubation and keep forcing the problem. That's why they get stuck. Step away. Let your brain work.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Constraints Fuel Creativity (Counter-Intuitive)`,
          paragraphs: [
            `Here's something most people get completely wrong. They think creativity needs ENDLESS POSSIBILITIES. "I'll be creative if I have no limits!" Researchers have found the OPPOSITE. CONSTRAINTS, the limits, deadlines, rules, and shapes you have to work within, actually FUEL creativity, not block it. A kid given unlimited time and tools to "be creative" often produces little. A kid given 30 minutes and 5 specific materials produces something surprising. Why? Because constraints FORCE your brain to combine differently. They eliminate the easy obvious paths and push you to find non-obvious ones.`,
            `Examples are everywhere. Haiku poetry (5-7-5 syllables) is more creative than free-form writing for many people because the constraint forces precision. Limited art supplies often produces better art than unlimited ones. The 24-hour film festival (you have to make a film in 24 hours) produces incredibly creative work because the constraint focuses energy. Constraints in business, science, and design have produced some of history's most creative breakthroughs. The fox-style move: don't WAIT for endless possibilities. EMBRACE constraints. Ask yourself, "What can I make in 20 minutes with what I have right now?" The constraint becomes your friend. It forces creativity that endless options would actually block.`,
          ],
          image: `/ue-assets/fs/l11-s3-constraints.webp`,
          imageCaption: `Constraints fuel creativity. Limits force your brain to find non-obvious paths. Embrace them.`,
          vocab: [
            { word: `constraints as fuel`,
              definition: `Counter-intuitive truth that LIMITS, DEADLINES, and RULES actually fuel creativity rather than blocking it. Constraints force the brain to combine differently, eliminating easy paths and pushing toward non-obvious ones. Haiku, 24-hour film festivals, limited supplies, all produce more creative work than unlimited options.`,
              audioPrompt: `Constraints as fuel is the counter-intuitive truth that limits and rules actually fuel creativity rather than blocking it, {name}. People think creativity needs endless possibilities. Researchers found the opposite. A kid given unlimited time and tools often produces little. A kid given 30 minutes and 5 specific materials produces something surprising. Constraints force your brain to combine differently. They eliminate the easy obvious paths and push you to find non-obvious ones. Haiku poetry is more creative than free-form writing for many people because the constraint forces precision.` },
            { word: `cross-field combining`,
              definition: `Finding ideas, solutions, and inspiration by BORROWING from different fields and combining them. Most creative breakthroughs came from combining knowledge across domains. Wheel + suitcase = rolling luggage. Fish schools + drones = swarm flight. The more fields you know about, the more raw material you have to combine. Wide reading is a creativity superpower.`,
              audioPrompt: `Cross-field combining means finding inspiration by borrowing ideas from different fields, {name}. Most creative breakthroughs came from combining knowledge across domains. The wheel plus the suitcase became rolling luggage. Schools of fish inspired how drones fly in swarms. Understanding how the brain stores memory inspired how computers organize data. The more fields you know about, the more raw material you have to combine. Wide reading is a creativity superpower because it loads your mind with material from many domains. Then combination can happen.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Prolific Output Beats Waiting for Perfect`,
          paragraphs: [
            `Here's the deepest practical truth. Research on creative people across history has found something striking. The most creative people are PROLIFIC, they MAKE A LOT. Picasso made 50,000 works of art. Edison filed over 1,000 patents. Mozart wrote 600+ pieces. Their genius wasn't making ONE perfect thing. It was making A LOT. Some great, many mediocre, some bad. They didn't know which would be the masterpiece, so they kept producing. Researchers call this the EQUAL-ODDS RULE, your hit rate (percent of great work) stays roughly the same, so the more you make, the more great work you produce.`,
            `This means: STOP WAITING FOR PERFECT. Start making. Write the rough draft. Build the messy prototype. Make the first version that's clearly not great. Then make the next one. And the next. Researchers studying creative blocks found that PERFECTIONISM (refusing to make anything until it's great) is the single biggest creativity killer. The way around it is the opposite, get COMFORTABLE WITH MAKING BAD STUFF on the way to good stuff. Every creative person you've heard of made a lot of unimpressive work before they made great work. Byte's first teaching: creativity is a skill. Real creativity comes from combining ideas, working through the 4-stage process (prep, incubate, illuminate, verify), embracing constraints, and making A LOT instead of waiting for perfect. The fox-creator doesn't wait for magic. The fox-creator does the practices that make creativity show up. Almost no one teaches kids this. You're getting it now.`,
          ],
          image: `/ue-assets/fs/l11-s4-prolific.webp`,
          imageCaption: `Most creative people make A LOT. Some great, many not. Stop waiting for perfect. Start making.`,
          vocab: [
            { word: `equal-odds rule`,
              definition: `Research finding that creative people's hit rate (percent of great work) stays roughly the same, so the more you MAKE, the more GREAT WORK you produce. Picasso 50,000 works. Edison 1,000+ patents. Mozart 600+ pieces. Stop waiting for perfect. Make a lot. Perfectionism is the biggest creativity killer.`,
              audioPrompt: `The equal-odds rule is the research finding that creative people's hit rate stays roughly the same, {name}. So the more you make, the more great work you produce. Picasso made 50,000 works of art. Edison filed over 1,000 patents. Mozart wrote 600+ pieces. Their genius wasn't making one perfect thing. It was making a lot. Some great, many mediocre, some bad. They kept producing because they didn't know which would be the masterpiece. Stop waiting for perfect. Get comfortable with making bad stuff on the way to good stuff.` },
            { word: `perfectionism as creativity killer`,
              definition: `The tendency to refuse to make anything until it's great — the single biggest creativity killer, according to research. Perfectionism prevents the VOLUME of output needed to produce great work (the equal-odds rule). The antidote: get comfortable making bad stuff on the way to good stuff. Every creative person made mediocre work before making great work.`,
              audioPrompt: `Perfectionism as creativity killer is the single biggest thing that blocks creative output, {name}. Refusing to make anything until it's great kills more creativity than anything. The equal-odds rule says your hit rate stays roughly the same, so the more you make, the more great work you produce. But perfectionism prevents you from making the volume needed. Every creative person made a lot of unimpressive work before they made great work. The antidote is getting comfortable with bad stuff on the way to good. Start making. Today.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four kids approaching creativity. Classify each: REAL CREATIVE PRACTICE (research-backed, actually grows creativity), CREATIVITY MYTH (sounds nice but doesn't work), or CREATIVITY BLOCKER (actively kills creative output)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `practice`, label: `Real Creative Practice`, color: `#34D399`, description: `Research-backed practice that actually grows creativity. Combining ideas, prep + incubate, constraints, making a lot.` },
            { id: `myth`,     label: `Creativity Myth`,         color: `#FBBF24`, description: `Sounds nice and people say it, but research shows it doesn't actually work or grow creativity.` },
            { id: `blocker`,  label: `Creativity Blocker`,       color: `#F87171`, description: `Actively KILLS creative output. Perfectionism, comparison, fear of bad work, never starting.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Approach #1`,
              clues: [
                { text: `A kid reads widely across many topics, science, art, history, sports, music.` },
                { text: `When working on a project, they DELIBERATELY look for ideas to borrow from other fields.` },
                { text: `When stuck, they take a walk instead of forcing it. Ideas often come during the walk.` },
              ],
              correctAnswer: `practice`,
              realWorldExample: `Wide reading, cross-field combining, using incubation. Real creative practice.`,
              explanation: `Pure real creative practice. The kid is doing exactly what researchers found makes creative people creative. Wide preparation (reading across fields gives lots of material to combine), cross-field combination (where most real innovation comes from), and using incubation (walking away when stuck lets the brain work in the background). This is how creative output actually gets generated. Most people skip all three steps.`,
            },
            {
              id: `case-2`,
              caseTitle: `Approach #2`,
              clues: [
                { text: `A kid wants to make art but says "I'll wait until I'm really inspired."` },
                { text: `They wait. And wait. They don't make anything for weeks.` },
                { text: `When inspiration finally hits, it's a small idea they don't even develop.` },
              ],
              correctAnswer: `blocker`,
              realWorldExample: `Waiting for inspiration with no preparation or output. Pure creativity blocker.`,
              explanation: `Pure creativity blocker. "Waiting for inspiration" sounds romantic but it's actually one of the biggest myths AND blockers. Real creative people don't wait for inspiration, they SHOW UP every day and do the work, and inspiration shows up DURING the work, not before it. Waiting kills more creativity than anything else. The wise alternative, make something today, even if it's small or bad.`,
            },
            {
              id: `case-3`,
              caseTitle: `Approach #3`,
              clues: [
                { text: `A kid sees an amazing piece of art by someone older and famous.` },
                { text: `They think "I could never make something that good, why even try?"` },
                { text: `They abandon their own creative project.` },
              ],
              correctAnswer: `blocker`,
              realWorldExample: `Comparison, giving up because not as good as others. Creativity-killing trap.`,
              explanation: `Pure creativity blocker. COMPARISON is one of the deadliest creativity killers. The kid forgot that the famous artist made HUNDREDS of mediocre works before producing great ones. EVERY creative person started where they were and got better through making a lot. Comparing your beginning to someone else's middle or end is a guaranteed creativity killer. The fix: keep making YOUR stuff. Let your own hundred works produce your great ones over time.`,
            },
            {
              id: `case-4`,
              caseTitle: `Approach #4: The Tricky One`,
              clues: [
                { text: `A kid says "I really respect creativity, I'll wait until I have a TRULY ORIGINAL idea before I make anything."` },
                { text: `They think this is being a careful, respectful creator.` },
                { text: `Months go by. They never produce anything.` },
              ],
              correctAnswer: `myth`,
              realWorldExample: `Waiting for "truly original" sounds respectful but is a creativity myth. Every idea is a combination.`,
              explanation: `Tricky, {name}! It LOOKS like the kid is being thoughtful and respectful, waiting until they have a "truly original" idea. So you might call this a real creative practice. But pause. Two myths are at work here. Myth one, "truly original" ideas are rare and you have to wait for them. The truth is that ALL creative ideas are combinations of existing things. You don't need pure originality, you need fresh combinations. Myth two, careful waiting is creative. The truth is careful waiting produces NOTHING. Pure creativity myth in disguise (the "respectful waiting" version). Lesson: stop waiting for the perfect original idea. Start COMBINING what you know in fresh ways. The "originality" comes from the combination, not from waiting. This myth also blocks creativity (so could partly be a blocker too), but at its core it's a deep misunderstanding of what creativity actually is.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l11-q1`, format: `true-false`,
              question: `True or false: Creativity is a fixed talent — some people HAVE it and others DON'T.`,
              correctAnswer: false,
              explanation: `False. Creativity is a SKILL, not a fixed talent. Researchers studying creative people across history have found they use specific practices, ones anyone can learn, that generate creative output reliably. They aren't born with magic creativity genes; they have TRAINED habits. Anyone can develop creativity with the right practices.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `At its core, what IS creativity?`,
              options: [
                `Pure magic`,
                `COMBINING IDEAS in new ways. Almost every "new" idea is a fresh combination of existing ones (wheel + suitcase, phone + camera)`,
                `Being born talented`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `At its core, creativity is combining ideas in new ways. Almost every "new" idea is a combination of existing ones brought together freshly. Wheel + suitcase = rolling luggage. Phone + camera = smartphone. Books + audio = audiobooks. Researchers found this is how human creativity actually works.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What are the FOUR STAGES of the creative process?`,
              options: [
                `Wait, hope, give up`,
                `(1) PREPARATION (feed your mind), (2) INCUBATION (let ideas rest), (3) ILLUMINATION (aha moment), (4) VERIFICATION (test and iterate)`,
                `Just one stage`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Four stages: PREPARATION (feed your mind widely with material), INCUBATION (let ideas rest, walk, sleep, do something else, brain works in background), ILLUMINATION (aha moment delivers the combination), VERIFICATION (test it, build it, iterate, refine). Most people skip preparation and incubation, then complain no ideas come.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `Why is INCUBATION so important?`,
              options: [
                `It's not`,
                `Your BRAIN works on problems in the BACKGROUND during rest (walk, sleep, doing something else). Many creative breakthroughs happen during this period`,
                `Wastes time`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Incubation is when your brain works on problems in the background while you do something else. Walk, sleep, do other activities. Your brain makes connections you can't make by trying harder. Researchers call this the INCUBATION PERIOD, and it's when many creative breakthroughs actually happen. Most people skip this stage.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Creativity needs ENDLESS POSSIBILITIES — no limits, no rules.`,
              correctAnswer: false,
              explanation: `False. Research shows the OPPOSITE. Constraints (limits, deadlines, rules) actually fuel creativity rather than blocking it. A kid given unlimited time and tools often produces little. A kid given 30 minutes and 5 materials produces something surprising. Constraints force the brain to combine differently, finding non-obvious paths.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What is the EQUAL-ODDS RULE?`,
              options: [
                `Fairness`,
                `Creative people's hit rate (percent of great work) stays roughly the same, so the more you MAKE, the more GREAT WORK you produce — Picasso 50K works, Edison 1K patents, Mozart 600 pieces`,
                `Random luck`,
                `Talent matters most`,
              ],
              correctIndex: 1,
              explanation: `The equal-odds rule: creative people's hit rate stays roughly the same. So the more you MAKE, the more great work you produce. Picasso made 50,000 works of art. Edison filed 1,000+ patents. Mozart wrote 600+ pieces. Some great, many mediocre, some bad. They kept producing.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `What is the BIGGEST creativity KILLER?`,
              options: [
                `Practice`,
                `PERFECTIONISM (refusing to make anything until it's great) — kills more creativity than anything else; comparison and waiting for inspiration are close seconds`,
                `Making lots`,
                `Sleep`,
              ],
              correctIndex: 1,
              explanation: `Perfectionism is the single biggest creativity killer. Refusing to make anything until it's great kills creativity more than anything. The way around: get comfortable with MAKING BAD STUFF on the way to good stuff. Every creative person made a lot of unimpressive work before they made great work. Comparison and waiting for inspiration are close seconds.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `What's Byte's first teaching about creativity?`,
              options: [
                `Wait for magic`,
                `Creativity is a SKILL. Real creativity comes from COMBINING ideas, working through the 4-stage process, embracing CONSTRAINTS, and MAKING A LOT instead of waiting for perfect`,
                `You're either creative or not`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Creativity is a skill. Real creativity comes from combining ideas, working through the 4-stage process (prep, incubate, illuminate, verify), embracing constraints, and making A LOT instead of waiting for perfect. The fox-creator doesn't wait for magic. The fox-creator does the practices that make creativity show up.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Take a curious breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Have you ever told yourself "I'm not creative"? Where might that belief have come from? Is it actually true?` },
            { id: `r2`, text: `What different fields/topics are you interested in? How could you COMBINE them into something new (sports + art, science + music, history + games)?` },
            { id: `r3`, text: `What's ONE thing you've been "waiting for inspiration" to start? Could you just start a rough version today?` },
            { id: `r4`, text: `What constraint could you give yourself to FORCE creativity (20 minutes, 5 specific materials, a specific theme)? Try it this week.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Creativity research is one of the most exciting areas of modern psychology. Decades of work studying actually-creative people (artists, scientists, inventors, entrepreneurs, writers) have produced consistent findings. Creativity isn't magic, talent, or random luck. It's a SET OF PRACTICES that can be learned. Mihaly Csikszentmihalyi, Teresa Amabile, Keith Sawyer, and others have documented this clearly. The myths (waiting for inspiration, only "creative people" can be creative, originality requires pure originality) keep failing kids and adults. The truths (combination, process, constraints, prolific output) keep working. Byte's note: you're growing up in a world that will increasingly REWARD creativity. As AI gets better at routine tasks, creative work (combining ideas in fresh ways, solving novel problems, making things) will become more valuable, not less. The kid who learns to be creative on purpose, not magically, has a powerful skill for life. Read widely. Combine across fields. Use the 4-stage process. Embrace constraints. Make a LOT. Stop waiting for perfect. Foxes were always curious combiners. You can be one of the best.`,
          familyAdventure: `Family Creativity Challenge. As a family, pick ONE constraint together this week (everyone makes something in 30 minutes / using 5 specific materials / on a specific theme like "the color blue" or "what flies"). Each family member makes something within those constraints. The "something" can be art, writing, building, music, anything. Adults model it too. Share what you made, no judging, just curiosity. Building a family habit of creating under constraints, regularly, normalizes creativity as practice rather than mystery. Many families find this becomes a favorite shared ritual.`,
          creativePrompt: {
            intro: `Write your personal Creativity Plan — what you'll make, how you'll combine ideas, the constraint you'll embrace.`,
            floor: `Write at least 5 sentences. Name what you want to create and one practice you'll start.`,
            stretch: `Write 8 to 10 sentences. Build a fuller plan with combinations and constraints.`,
            open: `Write as much as you want. Write your full CREATIVITY PLAN. Reflect honestly on whether you've thought of yourself as "creative" or "not creative" and whether that belief still holds after this lesson. Pick something specific you want to CREATE (a story, art piece, song, video, project, invention, anything). Describe what you'll PREPARE for it (reading, learning, gathering material). Describe how you'll let it INCUBATE (walks, sleep, doing other things while your brain works). Identify CONSTRAINTS you'll embrace (time limit, material limit, theme, format). Commit to MAKING A LOT instead of waiting for perfect, including being willing to make bad versions on the way to good ones. End with one specific commitment to begin this week. Make it specific, hopeful, and brave.`,
            frames: [
              `What I want to create is ___.`,
              `How I'll prepare (feed my mind): ___.`,
              `How I'll let it incubate: ___.`,
              `Constraints I'll embrace: ___.`,
              `My commitment to making a lot, not waiting for perfect: ___.`,
              `Specifically this week, I'll ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Bold, creative work, {name}! You now know one of the most empowering truths in life, creativity is a SKILL anyone can develop. Real creativity comes from combining ideas, working the 4-stage process (prep, incubate, illuminate, verify), embracing constraints, and making A LOT instead of waiting for perfect. Stop saying "I'm not creative." You ARE creative, when you do the practices. Next, we apply your sharpening mind to one of the most useful skills in life, solving hard PROBLEMS systematically. PROBLEM-SOLVING. Sharpen your ears, and I'll see you there. — Byte 🦊.`,
          badge: `creative-thinker`,
          badgeName: `Creative Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default FUTURESKILLS_UE_L11;
