// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 11
// "Growth Mindset in Learning New Technology"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-11',
      title:     `Growth Mindset in Learning New Technology`,
      duration:  12,
      xpReward:  50,
      badge:     'growth-mindset',
      badgeName: `Growth Mindset`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `New technology comes out constantly. The apps, platforms, and tools that matter most in ten years probably don't exist yet. So how do you prepare for a future you can't predict? You build the one skill that works for every technology: the ability to learn new things quickly and without fear. That starts with understanding how your own mindset works.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Fixed vs Growth Mindset`,
          paragraphs: [
            `Psychologist Carol Dweck spent decades studying how people respond to challenges and failure. She identified two fundamentally different mindsets. A fixed mindset believes that abilities are set — you either have talent for something or you don't, and effort won't change that. A growth mindset believes that abilities develop through effort, practice, and learning from mistakes. The difference isn't just philosophical — it shows up in behavior, persistence, and ultimately in what people achieve.`,
            `People with a fixed mindset avoid challenges because failure feels like proof of permanent limitation. They give up when things get hard, see effort as evidence that they're not naturally talented, and feel threatened when others succeed. People with a growth mindset do the opposite: they embrace challenges as opportunities to grow, persist through difficulty because they expect it to lead somewhere, and see effort as the path to mastery rather than a sign of weakness.`,
            `In technology specifically, the fixed mindset shows up as "I'm just not a tech person" — a sentence that closes the door on an entire category of knowledge. But there is no such thing as a "tech person" in the way that phrase implies. Technology is a collection of learnable skills, and the people who excel at it aren't necessarily the most naturally talented — they're the ones who kept going when things were confusing. Carol Dweck's research shows that mindset is one of the strongest predictors of learning success — and unlike raw ability, it's something you can deliberately change.`,
          ],
          image:        '/explorer-assets/future-skills/l11-magazine-fixed-vs-growth.png',
          imageCaption: `Fixed vs growth mindset — the belief that abilities develop through effort is one of the strongest predictors of learning success`,
          vocab: [
            { word: `fixed mindset`,  definition: `The belief that abilities are set at birth and can't really be changed — leading people to avoid challenges because failure feels like proof of permanent limitation.`,               audioPrompt: `Fixed mindset — the belief that abilities are set at birth and can't really be changed. This leads people to avoid challenges because failure feels like proof of permanent limitation.` },
            { word: `growth mindset`, definition: `The belief that abilities develop through effort, practice, and learning from mistakes — making challenges feel like opportunities rather than threats.`,                            audioPrompt: `Growth mindset — the belief that abilities develop through effort, practice, and learning from mistakes. This makes challenges feel like opportunities rather than threats.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Word "Yet"`,
          paragraphs: [
            `One of the simplest, most powerful tools from growth mindset research is a single word: yet. When you notice yourself thinking "I don't understand this," "I can't figure out how to code," or "I'm terrible at this," adding "yet" to the end transforms the meaning entirely. "I don't understand this yet" is a completely different statement from "I don't understand this." One describes a permanent state. The other describes a temporary one that's about to change.`,
            `Research shows that students who were explicitly taught to add "yet" to their self-talk showed measurable improvements in persistence and achievement. The word works because it shifts your brain from a closed state to an open one. It signals that this is an unfinished process, not a verdict. It keeps you in motion rather than stopping you in place. Such a small change, such a significant effect on what people actually go on to accomplish.`,
            `You can apply this immediately. The next time you try a new piece of technology and feel frustrated, pay close attention to the exact words running through your mind. If any of them are fixed — "I can't," "I'm not," "I'll never" — add "yet." It won't make the confusion disappear, but it changes your relationship to the confusion. Instead of feeling stuck, you feel in progress. And that shift is the beginning of learning.`,
          ],
          image:        '/explorer-assets/future-skills/l11-magazine-yet.png',
          imageCaption: `The word "yet" — one of the smallest changes in language with one of the biggest effects on persistence and learning`,
          vocab: [
            { word: `yet`,        definition: `A word that transforms a fixed statement into an open one — "I can't do this yet" keeps the door open for learning, while "I can't do this" closes it.`,                                         audioPrompt: `Yet — a word that transforms a fixed statement into an open one. "I can't do this yet" keeps the door open for learning, while "I can't do this" closes it.` },
            { word: `persistence`, definition: `Continuing to try even when something is difficult or frustrating — one of the most reliable predictors of success in learning any new skill, including technology.`,                           audioPrompt: `Persistence — continuing to try even when something is difficult or frustrating. One of the most reliable predictors of success in learning any new skill, including technology.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How Tech People Actually Learn`,
          paragraphs: [
            `If you could watch a professional software engineer work for a day, you'd be surprised by how often they say "I don't know how to do this" — and then immediately start figuring it out. Professional tech workers don't know everything. What they're genuinely expert at is learning new things quickly. They've developed habits and resources that let them go from complete beginner to functional in any new tool or language far faster than most people.`,
            `The toolkit they use: documentation (official written guides that explain exactly how a technology works), video tutorials online, Stack Overflow (a website where developers post technical questions and get detailed answers from others around the world), trial and error (trying things, seeing what breaks, adjusting), and simply asking colleagues. These aren't shortcuts — they are professional tools. Knowing which resource to use for which type of problem is itself a learnable skill that improves with experience.`,
            `The most important realization is this: the ability to figure things out using available resources is the actual skill. Knowing a specific language or tool is secondary — those change constantly. Engineers who built careers on specific technologies from twenty years ago have had to reinvent their skills multiple times. The ones who thrived weren't the ones who knew the most at any single moment — they were the ones who could learn the next thing, and the thing after that, indefinitely.`,
          ],
          image:        '/explorer-assets/future-skills/l11-magazine-how-tech-learn.png',
          imageCaption: `How tech people actually learn — documentation, tutorials, trial and error, and asking questions are the professional toolkit`,
          vocab: [
            { word: `documentation`, definition: `Official written guides and reference materials that explain how a technology or tool works — the primary resource professional developers use when learning something new.`,               audioPrompt: `Documentation — official written guides and reference materials that explain how a technology or tool works. The primary resource professional developers use when learning something new.` },
            { word: `trial and error`, definition: `Learning by trying things, observing what happens, adjusting, and trying again — one of the most effective methods for learning new technology at any level.`,                              audioPrompt: `Trial and error — learning by trying things, observing what happens, adjusting, and trying again. One of the most effective methods for learning new technology at any level.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Embracing Technology Confusion`,
          paragraphs: [
            `Every technology professional you admire was once completely confused by something that is now second nature to them. Confusion is not a sign that you're in the wrong place — it's a sign that you're in exactly the right place. When you encounter something new and confusing, your brain is doing the hard work of building new neural connections. That feeling of struggle is learning happening in real time. It is temporary. Every moment of confusion is a step closer to understanding.`,
            `The worst response to technology confusion is giving up during the learning phase — the period when things are hard but about to click. Most people who give up do so just before they would have broken through. The growth mindset response is to stay curious: try something, observe what happens, adjust, try again. When you don't know what to try next, look it up. When you can't find the answer, ask someone. The question "What can I try next?" is more powerful than any specific technical knowledge.`,
            `There's a particularly discouraging kind of confusion in technology: when you follow instructions exactly and it still doesn't work. Every developer knows this feeling. It usually means a tiny detail — a single misplaced character, a version mismatch, a missing step — is causing the problem. Learning to sit with that frustration and systematically work through it is one of the most valuable skills you can build. Not just in technology — in everything worth doing that requires sustained effort to master.`,
          ],
          image:        '/explorer-assets/future-skills/l11-magazine-embrace-confusion.png',
          imageCaption: `Embracing confusion — the feeling of struggle is learning happening in real time, not evidence that you don't belong`,
          vocab: [
            { word: `resilience`,         definition: `The ability to keep going after setbacks, confusion, or failure — in technology learning, resilience means staying curious through the difficult phase that always comes before understanding.`, audioPrompt: `Resilience — the ability to keep going after setbacks, confusion, or failure. In technology learning, resilience means staying curious through the difficult phase that always comes before understanding.` },
            { word: `productive struggle`, definition: `The feeling of difficulty and confusion that comes just before a breakthrough in learning — a sign that your brain is building new connections, not that you lack ability.`,                audioPrompt: `Productive struggle — the feeling of difficulty and confusion that comes just before a breakthrough in learning. A sign that your brain is building new connections, not that you lack ability.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each thought or reaction, then decide: is it a Growth Mindset or a Fixed Mindset response?`,
          guideText:     `Growth mindset sees challenges as chances to grow and effort as the path to mastery. Fixed mindset believes abilities are set — and gives up when things get hard. Can you tell which is which from the thoughts below?`,
          columnHeaders: [`The Thought or Reaction`, `Growth Mindset or Fixed?`],
          items: [
            { image: 'l11-game-growth-attempt.png', label: `Trying a new coding platform and thinking: I haven't figured this out yet, but I will if I keep going.`,                        correctMatch: 'growth', objectPosition: 'center 50%', matchPhrase: `Growth Mindset! "I haven't figured this out yet" is a perfect example of growth mindset language in action. The word "yet" keeps the door open. Believing that effort leads to mastery rather than reflecting a lack of talent is the core shift Carol Dweck's research identified. Every professional coder, designer, and engineer has sat exactly where you are — confused, trying, not sure it'll work — and kept going anyway. That's the whole skill.` },
            { image: 'l11-game-fixed-quit.png',     label: `Closing a new app immediately because it looks confusing and deciding it's just not for you.`,                                  correctMatch: 'fixed',  objectPosition: 'center 50%', matchPhrase: `Fixed Mindset! Deciding something "isn't for you" after a few seconds of confusion is a classic fixed mindset move. It feels like self-knowledge but it's actually self-limitation. No app, language, or tool looks intuitive before you've spent time with it. The feeling of confusion at first use is normal — it's not information about your capability, it's information about your current stage. The growth mindset response: stay a little longer and try one more thing.` },
            { image: 'l11-game-fixed-label.png',    label: `Hitting one tricky step and saying: I guess my brain just doesn't work this way.`,                                             correctMatch: 'fixed',  objectPosition: 'center 50%', matchPhrase: `Fixed Mindset! "My brain doesn't work this way" is a fixed mindset label — it takes a temporary struggle and turns it into a permanent identity. Brains don't have a fixed "technology mode" that either works or doesn't. They build new connections through effort and repetition. The growth mindset version of this thought is: "I haven't built this pattern yet — but I can." The struggle isn't a ceiling; it's the process.` },
            { image: 'l11-game-growth-mistake.png', label: `Making a mistake while coding and thinking: now I know one more thing that doesn't work — I'm getting closer.`,               correctMatch: 'growth', objectPosition: 'center 50%', matchPhrase: `Growth Mindset! Treating a mistake as information rather than failure is at the heart of the growth mindset. "Now I know one more thing that doesn't work" is exactly how professional developers think. Thomas Edison reportedly described his thousands of failed attempts at the light bulb not as failures but as discoveries of things that didn't work. Every mistake narrows the field. The growth mindset turns setbacks into stepping stones.` },
          ],
          buckets: [
            { id: 'growth', label: `🌱 Growth Mindset`, color: '#34D399' },
            { id: 'fixed',  label: `🔒 Fixed Mindset`,  color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about growth mindset and learning new technology. Answer all 6 questions to earn your Growth Mindset badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the main difference between a fixed and growth mindset?`,
              options:      [`Fixed mindset works harder; growth mindset is more relaxed`, `Fixed mindset believes abilities are set; growth mindset believes they develop through effort`, `Growth mindset avoids technology; fixed mindset embraces it`, `They are the same — just different words for the same thing`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How does adding the word "yet" to a statement change it?`,
              options:      [`It makes the statement more polite`, `It shifts from a closed door (I can't) to an open one (I can't, but I will)`, `It makes you sound less confident`, `It has no real effect — it's just a word`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the most important tech skill for the future?`,
              options:      [`Knowing how to code in one specific language`, `Having the latest devices`, `The ability to learn new things quickly and without fear`, `Being good at math`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Carol Dweck's research showed that believing your abilities can grow through effort — a growth mindset — leads to greater persistence and achievement.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The word you can add to any "I can't..." statement to shift it from a closed door to an open one is ___.`,
              options:      [`yet`, `still`, `never`, `not`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What do professional tech workers do when they encounter something new they don't know?`,
              options:      [`Avoid it until someone explains it to them`, `Use available resources like documentation, tutorials, and asking questions`, `Wait for the technology to become simpler`, `Memorize a new technology's entire manual first`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for Carol Dweck's TED Talk on the power of believing you can improve — it's one of the most-watched education talks ever recorded. The research behind the growth mindset is surprisingly simple and completely convincing.`,
          familyAdventure: `Have a family technology challenge night. Everyone picks something on their phone, computer, or a device they've never figured out — a feature they've ignored, an app they've avoided, a setting they don't understand. Spend 30 minutes figuring it out without asking anyone for help. Share what you learned. Celebrate confusion as part of the process, not something to be embarrassed about.`,
          creativePrompt:  `Write down three things about technology you've told yourself you "can't" do. Add the word "yet" to each one. Then pick one and spend 15 minutes making progress on it — using documentation, video tutorials, or just trying things and seeing what happens. Write down what you discovered in those 15 minutes. What changed?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'growth-mindset',
          badgeName: `Growth Mindset`,
          message:   `Brilliant work, {name}! You now know that the ability to learn new things — not any specific skill you already have — is what makes someone truly ready for the future. Every time you feel confused by something new, that's not a warning sign. It's your brain building. Add "yet" and keep going. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l11_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L11] Loaded: "Growth Mindset in Learning New Technology" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l11-magazine-fixed-vs-growth.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-magazine-yet.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-magazine-how-tech-learn.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-magazine-embrace-confusion.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L11] fixed-vs-growth: ${r1.ok}, yet: ${r2.ok}, how-tech-learn: ${r3.ok}, embrace-confusion: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L11] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l11_screens;
