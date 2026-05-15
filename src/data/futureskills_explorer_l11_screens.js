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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Two Mindsets',
          paragraphs: [
            'Psychologist Carol Dweck spent decades studying how people respond to challenges. She found two basic mindsets.',
            'Fixed mindset: abilities are set. You either have it or you don\'t. Growth mindset: abilities grow through effort, practice, and learning from mistakes.',
          ],
          image:        '/explorer-assets/future-skills/l11-s1-two-pathways.png',
          imageCaption: 'Same brain. Same challenge. The difference between giving up and breaking through is which mindset you bring.',
          vocab: [
            { word: 'fixed mindset',  definition: 'The belief that abilities are set and can\'t really be changed. Makes failure feel like proof of permanent limitation.', audioPrompt: 'Fixed mindset — the belief that abilities are set and can\'t really be changed. Makes failure feel like proof of permanent limitation.' },
            { word: 'growth mindset', definition: 'The belief that abilities develop through effort, practice, and learning from mistakes. Turns challenges into opportunities.', audioPrompt: 'Growth mindset — the belief that abilities develop through effort, practice, and learning from mistakes. Turns challenges into opportunities.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'The "Not a Tech Person" Trap',
          paragraphs: [
            'Some people say "I\'m not a tech person" — and that sentence closes the door on a whole category of knowledge.',
            'There is no such thing as a "tech person." Technology is a collection of learnable skills. The people who excel just kept going when things got confusing.',
          ],
          image:        '/explorer-assets/future-skills/l11-s2-closed-vs-open-door.png',
          imageCaption: 'The labels you give yourself shape what you\'ll even attempt. "I\'m not a tech person" closes a door that doesn\'t need closing.',
          vocab: [
            { word: 'self-talk',       definition: 'The thoughts you say to yourself about yourself. Self-talk quietly shapes what you\'ll try, persist with, and accomplish.', audioPrompt: 'Self-talk — the thoughts you say to yourself about yourself. Self-talk quietly shapes what you\'ll try, persist with, and accomplish.' },
            { word: 'limiting belief', definition: 'A belief that closes doors before you\'ve actually tried. "I\'m not a tech person" is a classic limiting belief.', audioPrompt: 'Limiting belief — a belief that closes doors before you\'ve actually tried. "I\'m not a tech person" is a classic limiting belief.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'The Word "Yet"',
          paragraphs: [
            'One of the most powerful tools from growth mindset research is a single word: yet.',
            '"I don\'t understand this" describes a permanent state. "I don\'t understand this YET" describes a temporary one that\'s about to change.',
          ],
          image:        '/explorer-assets/future-skills/l11-s3-the-word-yet.png',
          imageCaption: 'Three letters. Y-E-T. The smallest possible change in language with one of the biggest effects on what you actually go on to do.',
          vocab: [
            { word: 'yet',         definition: 'A small word that turns "I can\'t" into "I can\'t — so far." Keeps the door open instead of slamming it shut.', audioPrompt: 'Yet — a small word that turns "I can\'t" into "I can\'t, so far." Keeps the door open instead of slamming it shut.' },
            { word: 'persistence', definition: 'Continuing to try even when something is hard or confusing. One of the strongest predictors of success in learning anything.', audioPrompt: 'Persistence — continuing to try even when something is hard or confusing. One of the strongest predictors of success in learning anything.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'How Tech People Actually Learn',
          paragraphs: [
            'Professional engineers say "I don\'t know how to do this" constantly — then immediately start figuring it out.',
            'Their toolkit: documentation, video tutorials, Stack Overflow, trial and error, asking colleagues. Knowing which tool to use for which problem IS the skill.',
          ],
          image:        '/explorer-assets/future-skills/l11-s4-learning-toolkit.png',
          imageCaption: 'Pros don\'t know more than you. They\'re just better at finding things out fast. That\'s the actual job.',
          vocab: [
            { word: 'documentation',  definition: 'Official written guides explaining how a tool or technology works. The main resource professional developers use.', audioPrompt: 'Documentation — official written guides explaining how a tool or technology works. The main resource professional developers use.' },
            { word: 'trial and error', definition: 'Learning by trying things, seeing what breaks, adjusting, and trying again. One of the most effective learning methods at any level.', audioPrompt: 'Trial and error — learning by trying things, seeing what breaks, adjusting, and trying again. One of the most effective learning methods at any level.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Confusion Is Learning',
          paragraphs: [
            'Every tech professional you admire was once completely confused by something that\'s now second nature to them.',
            'That feeling of struggle is learning happening in real time. Your brain is building new connections. The confusion is temporary. Stay curious.',
          ],
          image:        '/explorer-assets/future-skills/l11-s5-brain-connections.png',
          imageCaption: 'Confusion isn\'t a stop sign. It\'s the sound of your brain building new connections. Hard means you\'re close.',
          vocab: [
            { word: 'productive struggle', definition: 'The difficult, frustrating feeling that comes right before a breakthrough. A sign of progress — not a sign you can\'t do it.', audioPrompt: 'Productive struggle — the difficult, frustrating feeling that comes right before a breakthrough. A sign of progress, not a sign you can\'t do it.' },
            { word: 'neural connections', definition: 'The links your brain builds when learning something new. Confusion is the building happening in real time.', audioPrompt: 'Neural connections — the links your brain builds when learning something new. Confusion is the building happening in real time.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'The Skill That Works Forever',
          paragraphs: [
            'The apps, platforms, and tools that matter most in ten years probably don\'t exist yet.',
            'So the most valuable skill isn\'t any specific tech — it\'s the ability to learn new things quickly and without fear.',
          ],
          image:        '/explorer-assets/future-skills/l11-s6-meta-skill.png',
          imageCaption: 'Tools change every year. The ability to learn the next thing is what stays valuable forever.',
          vocab: [
            { word: 'adaptability', definition: 'The ability to adjust to new situations, tools, and challenges. One of the most valuable skills for a fast-changing future.', audioPrompt: 'Adaptability — the ability to adjust to new situations, tools, and challenges. One of the most valuable skills for a fast-changing future.' },
            { word: 'meta-skill',   definition: 'A skill that helps you learn other skills. Learning how to learn is the ultimate meta-skill.', audioPrompt: 'Meta-skill — a skill that helps you learn other skills. Learning how to learn is the ultimate meta-skill.' },
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
    fetch('/explorer-assets/future-skills/l11-s1-two-pathways.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-s2-closed-vs-open-door.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-s3-the-word-yet.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-s4-learning-toolkit.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-s5-brain-connections.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l11-s6-meta-skill.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L11] two-pathways: ${r1.ok}, closed-vs-open-door: ${r2.ok}, the-word-yet: ${r3.ok}, learning-toolkit: ${r4.ok}, brain-connections: ${r5.ok}, meta-skill: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L11] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l11_screens;
