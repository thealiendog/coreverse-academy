// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 13
// "Robots and Feelings: Can Machines Think?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-13',
      title:     `Robots and Feelings: Can Machines Think?`,
      duration:  12,
      xpReward:  50,
      badge:     'mind-explorer',
      badgeName: `Mind Explorer`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a question that's brand new in human history — CAN ROBOTS THINK? Computers, AI, and robots get smarter every year. Some can talk back. Some can answer questions. But do they really THINK? Do they FEEL? Today we explore this wild new question.`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What's a Robot?`,
          paragraphs: [
            `A ROBOT is a machine that does things by itself. Some robots clean floors. Some build cars. Some help doctors.`,
            `Robots have brains made of computer chips. They follow instructions we program into them. Robots are useful — but are they alive?`,
          ],
          image:        '/explorer-assets/frontier/l13-s1-robot.png',
          imageCaption: `Robots — machines that do things on their own`,
          vocab: [
            { word: 'robot',    definition: `A machine that does things by itself — often with computer brains.`,              audioPrompt: `Robot — a machine that does things by itself, often with computer brains.` },
            { word: 'machine',  definition: `A built thing that does work — like a car, washing machine, or computer.`,        audioPrompt: `Machine — a built thing that does work, like a car, washing machine, or computer.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Artificial Intelligence`,
          paragraphs: [
            `AI — Artificial Intelligence — is when computers act SMART. They can chat with you. They can recognize pictures. They can write stories.`,
            `Some AI is really impressive! But here's the puzzle — is the AI actually THINKING, or just following super-fancy instructions?`,
          ],
          image:        '/explorer-assets/frontier/l13-s2-ai.png',
          imageCaption: `AI — computers acting smart`,
          vocab: [
            { word: 'AI', definition: `Artificial Intelligence — when computers act smart like people.`,                       audioPrompt: `AI — Artificial Intelligence, when computers act smart like people.` },
            { word: 'smart', definition: `Good at figuring things out and learning.`,                                          audioPrompt: `Smart — good at figuring things out and learning.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Thinking vs Pretending`,
          paragraphs: [
            `There's a HUGE difference between THINKING and PRETENDING TO THINK. A calculator gives the right answer to math — but it doesn't UNDERSTAND math.`,
            `When AI talks to you, is it really UNDERSTANDING? Or just very good at pretending? Philosophers and scientists argue about this.`,
          ],
          image:        '/explorer-assets/frontier/l13-s3-thinking.png',
          imageCaption: `Real thinking vs really good pretending — different things?`,
          vocab: [
            { word: 'understand', definition: `To really GET something — know what it means deep down.`,                       audioPrompt: `Understand — to really get something, know what it means deep down.` },
            { word: 'pretend',    definition: `To act like something is true when it's not — for fun or by mistake.`,           audioPrompt: `Pretend — to act like something is true when it's not, for fun or by mistake.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Can They Feel?`,
          paragraphs: [
            `Even bigger question — can robots FEEL? Can an AI feel happy, sad, or excited?`,
            `Most scientists say: no — not yet. Robots don't have bodies that ache when sad. They don't have hearts that race when scared. They process information — but they don't experience it.`,
          ],
          image:        '/explorer-assets/frontier/l13-s4-feel.png',
          imageCaption: `Can robots really feel? Most say no — not yet`,
          vocab: [
            { word: 'feel',       definition: `To have an inside experience — like happy, sad, scared, or excited.`,           audioPrompt: `Feel — to have an inside experience, like happy, sad, scared, or excited.` },
            { word: 'experience', definition: `Going through something and noticing how it feels inside.`,                     audioPrompt: `Experience — going through something and noticing how it feels inside.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Using AI Wisely`,
          paragraphs: [
            `AI can do AMAZING things. Help write stories. Translate languages. Find patterns in giant amounts of information. It's a helpful tool!`,
            `But it's still a TOOL. Like a really smart hammer — useful, but not your friend. People are who you trust with your heart. Use AI to help with tasks, not to replace real human connection.`,
          ],
          image:        '/explorer-assets/frontier/l13-s5-tool.png',
          imageCaption: `AI is a helpful tool — not a replacement for people`,
          vocab: [
            { word: 'tool',      definition: `Something you use to do a job — like a hammer, a pencil, or a computer.`,         audioPrompt: `Tool — something you use to do a job, like a hammer, a pencil, or a computer.` },
            { word: 'connection', definition: `A real bond between two people who care about each other.`,                     audioPrompt: `Connection — a real bond between two people who care about each other.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Big Questions Ahead`,
          paragraphs: [
            `One day, AI might get even more advanced. Will it ever really think? Really feel? Be alive? Nobody knows yet.`,
            `Kids your age will be the ones to figure this out. As AI gets bigger, we'll need wise, kind humans deciding how to use it — humans like YOU.`,
          ],
          image:        '/explorer-assets/frontier/l13-s6-ahead.png',
          imageCaption: `The future of AI is in your generation's hands`,
          vocab: [
            { word: 'advanced',  definition: `Very developed — way beyond simple.`,                                            audioPrompt: `Advanced — very developed, way beyond simple.` },
            { word: 'decide',    definition: `To choose between options — to make a choice.`,                                  audioPrompt: `Decide — to choose between options, to make a choice.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some things robots can do well. Other things only humans (and animals!) can really do. Sort them!`,
          guideText:     `Time to think about robots vs humans, {name}! Tap each thing, then decide — can a robot do this, or is it human-only?`,
          columnHeaders: [`The Action`, `Who Can Do This?`],
          items: [
            { image: 'l13-game-math.png',   label: `Solve a super hard math problem in 1 second.`,                            correctMatch: 'robot', objectPosition: 'center 50%', matchPhrase: `Robot! Computers are amazing at math — way faster than humans.` },
            { image: 'l13-game-hug.png',    label: `Give a real hug that makes someone feel loved.`,                          correctMatch: 'human', objectPosition: 'center 50%', matchPhrase: `Human! Real love and warmth come from people, not machines.` },
            { image: 'l13-game-translate.png', label: `Translate words between 100 languages instantly.`,                     correctMatch: 'robot', objectPosition: 'center 50%', matchPhrase: `Robot! AI can do this incredibly fast — useful tool!` },
            { image: 'l13-game-sad.png',    label: `Feel really sad when your pet is sick.`,                                  correctMatch: 'human', objectPosition: 'center 50%', matchPhrase: `Human! Real feelings come from real hearts. Robots don't feel sad — yet, anyway.` },
          ],
          buckets: [
            { id: 'robot', label: `🤖 Robot Can Do This`, color: '#60A5FA' },
            { id: 'human', label: `💛 Human-Only`,         color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Mind Explorer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is a robot?`,
              options: [`A type of animal`, `A machine that does things by itself`, `A small kid`, `A type of tree`],
              correctIndex: 1 },
            { format: 'true-false', question: `Most scientists agree robots don't really feel emotions — yet.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `What does "AI" stand for?`,
              options: [`Always Interested`, `Artificial Intelligence`, `Animal Insides`, `Apple Ice`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `AI is a helpful ___ — but not a replacement for real humans.`,
              options: [`tool`, `friend`, `food`, `pet`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What's the difference between a robot and a human?`,
              options: [`Nothing`, `Robots process info, humans really experience things`, `Robots are taller`, `Humans don't think`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Who will decide how AI is used in the future?`,
              options: [`Only old people`, `Only robots`, `Humans — including kids like YOU growing up`, `Nobody`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! Now let's bring this question into your real life. AI is becoming part of every kid's world.`,
          familyAdventure: `At dinner, ask your family: "What's something cool a robot or AI could do — and what's something that only a real PERSON should do?" Make two lists. See where you all agree and disagree.`,
          creativePrompt:  `Design YOUR perfect helper robot. Draw it. Give it a name. What does it help with? Cleaning? Reminding you of birthdays? Helping someone who can't see well? Make it kind and helpful.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'mind-explorer',
          badgeName: `Mind Explorer`,
          message:   `Brilliant, {name}! You learned about robots, AI, and the BIG question of what really thinks and feels. You learned that AI is a tool — useful, but not a replacement for real humans. You're a Mind Explorer now. Kids like you will help shape how this all goes. Orion is so proud.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l13_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L13] Loaded: "Robots and Feelings" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l13-s1-robot.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l13-s2-ai.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l13-s3-thinking.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l13-s4-feel.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l13-s5-tool.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l13-s6-ahead.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L13] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L13] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l13_screens;
