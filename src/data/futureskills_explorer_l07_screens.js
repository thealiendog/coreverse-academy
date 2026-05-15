// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 7
// "What Is Artificial Intelligence?"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-07',
      title:     `What Is Artificial Intelligence?`,
      duration:  12,
      xpReward:  50,
      badge:     'ai-explorer',
      badgeName: `AI Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `A computer program beat the world's best chess player in 1997. Programs can now pass medical licensing exams, hold conversations, analyze X-rays, and generate artwork — all without being told the rules. Artificial intelligence isn't science fiction anymore. It's here, it's everywhere, and understanding what it actually is gives you a huge advantage.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What Is AI?',
          paragraphs: [
            'Artificial intelligence is when computers do tasks that normally need human intelligence — recognizing faces, understanding speech, translating languages, making decisions.',
            'AI isn\'t one thing. It\'s a collection of techniques. Face unlock works very differently from a chatbot or a self-driving car.',
          ],
          image:        '/explorer-assets/future-skills/l07-s1-ai-brain.png',
          imageCaption: 'AI is computers doing things that used to require a human mind. It\'s many different techniques under one name.',
          vocab: [
            { word: 'artificial intelligence', definition: 'Computers performing tasks that normally need human intelligence — recognizing images, understanding language, making decisions.', audioPrompt: 'Artificial intelligence — computers performing tasks that normally need human intelligence: recognizing images, understanding language, making decisions.' },
            { word: 'intelligence',            definition: 'The ability to learn, understand, solve problems, and adapt to new situations.', audioPrompt: 'Intelligence — the ability to learn, understand, solve problems, and adapt to new situations.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Rules vs Patterns',
          paragraphs: [
            'Traditional programs follow rules a person wrote: "IF this, THEN that." Predictable. Limited.',
            'AI is different. It learns patterns from huge amounts of data and makes decisions in situations it was never directly programmed for.',
          ],
          image:        '/explorer-assets/future-skills/l07-s2-rules-vs-patterns.png',
          imageCaption: 'Traditional code follows fixed rules. AI learns patterns. That\'s the shift that changed everything.',
          vocab: [
            { word: 'rule-based program', definition: 'A program that follows specific rules written by a programmer. Predictable but limited to what was explicitly programmed.', audioPrompt: 'Rule-based program — a program that follows specific rules written by a programmer. Predictable but limited to what was explicitly programmed.' },
            { word: 'pattern',            definition: 'A regular feature found in data. AI finds patterns and uses them to make predictions about new situations.', audioPrompt: 'Pattern — a regular feature found in data. AI finds patterns and uses them to make predictions about new situations.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'How AI Learns',
          paragraphs: [
            'To teach an AI to recognize cats, you show it millions of photos labeled "cat" or "not cat."',
            'It finds patterns — pointy ears, whiskers, certain shapes — and uses them on new photos. This is called machine learning.',
          ],
          image:        '/explorer-assets/future-skills/l07-s3-machine-learning.png',
          imageCaption: 'AI learns the way we learned to recognize cats as kids — millions of examples, patterns absorbed over time',
          vocab: [
            { word: 'machine learning', definition: 'AI that learns from data rather than following fixed rules. The technique behind almost every modern AI system.', audioPrompt: 'Machine learning — AI that learns from data rather than following fixed rules. The technique behind almost every modern AI system.' },
            { word: 'training data',    definition: 'The labeled examples used to teach an AI. Quality and variety of training data directly determines how well the AI performs.', audioPrompt: 'Training data — the labeled examples used to teach an AI. Quality and variety of training data directly determines how well the AI performs.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'AI Is Already Everywhere',
          paragraphs: [
            'Voice assistants. Recommendation systems. Spam filters. Face unlock. Navigation apps. Autocorrect. Fraud detection. Medical scan analysis.',
            'You interact with AI dozens of times every day — mostly without realizing it. AI is no longer the future. It\'s the present.',
          ],
          image:        '/explorer-assets/future-skills/l07-s4-ai-everywhere.png',
          imageCaption: 'AI runs your spam filter, your phone\'s face unlock, your search results, your nav app. It\'s already woven in.',
          vocab: [
            { word: 'recommendation system', definition: 'AI that predicts what you\'ll like next based on patterns in your past behavior and the behavior of others like you.', audioPrompt: 'Recommendation system — AI that predicts what you\'ll like next based on patterns in your past behavior and the behavior of others like you.' },
            { word: 'voice assistant',       definition: 'AI you can talk to that responds with spoken or written answers. Siri, Alexa, and Google Assistant are voice assistants.', audioPrompt: 'Voice assistant — AI you can talk to that responds with spoken or written answers. Siri, Alexa, and Google Assistant are voice assistants.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'What AI Can\'t Do',
          paragraphs: [
            'AI is powerful — but it doesn\'t actually understand anything. It matches patterns without comprehension.',
            'It can be confidently wrong. It reflects biases in its training data. It has no common sense, emotional intelligence, or moral judgment.',
          ],
          image:        '/explorer-assets/future-skills/l07-s5-ai-limits.png',
          imageCaption: 'AI sounds smart and sometimes IS smart. But it can also be confidently, completely wrong. Always check.',
          vocab: [
            { word: 'bias',          definition: 'Unfair or skewed results caused by problems in the training data. AI can amplify human biases it learned from.', audioPrompt: 'Bias — unfair or skewed results caused by problems in the training data. AI can amplify human biases it learned from.' },
            { word: 'comprehension', definition: 'Truly understanding meaning. Something AI doesn\'t actually do — it generates outputs that look like understanding without having any.', audioPrompt: 'Comprehension — truly understanding meaning. Something AI doesn\'t actually do; it generates outputs that look like understanding without having any.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'The Human Edge',
          paragraphs: [
            'The most valuable skills in an AI-powered world are the ones AI does worst.',
            'Critical thinking. Real creativity. Empathy. Moral judgment. Human connection. AI helps with everything else. These remain uniquely yours.',
          ],
          image:        '/explorer-assets/future-skills/l07-s6-human-edge.png',
          imageCaption: 'AI will keep getting better at tasks. But empathy, judgment, and genuine creativity stay uniquely yours.',
          vocab: [
            { word: 'critical thinking', definition: 'Carefully evaluating information instead of just accepting it. The most valuable skill in an age of AI-generated content.', audioPrompt: 'Critical thinking — carefully evaluating information instead of just accepting it. The most valuable skill in an age of AI-generated content.' },
            { word: 'empathy',           definition: 'Understanding and sharing how someone else feels. Uniquely human — AI can mimic empathy but never actually feel it.', audioPrompt: 'Empathy — understanding and sharing how someone else feels. Uniquely human; AI can mimic empathy but never actually feel it.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then decide: is it something AI Can Do or something that Needs Human Understanding?`,
          guideText:     `AI is remarkable at finding patterns in huge amounts of data — but there are things it genuinely can't do, like truly understanding meaning, making moral judgments, or feeling emotions. Can you tell the difference between what AI can do and what still needs a human?`,
          columnHeaders: [`The Task`, `AI Can Do This or Needs Human?`],
          items: [
            { image: 'l07-game-face-recognition.png', label: `Looking at millions of labeled photos and learning to spot the patterns that distinguish one face — or one animal — from another.`,                    correctMatch: 'ai',    objectPosition: 'center 50%', matchPhrase: `AI Can Do This! Pattern recognition is exactly what machine learning does best. An AI shown millions of labeled images finds the statistical patterns that distinguish cats from dogs — or one face from another — and applies those patterns to new images it's never seen before. The AI doesn't see the way you do; it calculates whether an image matches the patterns of its training. That's why AI can outperform humans at spotting consistent visual patterns — and why it still can't understand what it's actually looking at.` },
            { image: 'l07-game-joke.png',             label: `Understanding why something is funny and feeling the warmth of laughing together with another person.`,                                                correctMatch: 'human', objectPosition: 'center 50%', matchPhrase: `Needs Human Understanding! Humor requires genuine comprehension — understanding cultural context, social dynamics, surprise, wordplay, and the gap between what's expected and what actually happens. AI can recognize patterns in what humans have labeled as funny and generate plausible joke structures. But it doesn't experience anything as funny. It doesn't feel the warmth of shared laughter. It generates outputs that match the statistical patterns of humor without any actual understanding of why something is funny. True comprehension is still uniquely human.` },
            { image: 'l07-game-translation.png',      label: `Translating a sentence from one language to another by finding patterns across billions of real text examples.`,                                     correctMatch: 'ai',    objectPosition: 'center 50%', matchPhrase: `AI Can Do This! Language translation is a pattern-matching task that AI handles extraordinarily well. Trained on billions of paired sentences in hundreds of language combinations, AI translation systems learn the statistical relationships between words, phrases, and sentence structures across languages. They don't understand meaning the way a bilingual human does — but they find patterns precise enough to produce accurate, natural-sounding translations at enormous speed and scale.` },
            { image: 'l07-game-moral.png',            label: `Deciding what the right thing to do is when there is no clear rule — using values, judgment, and care for the people involved.`,                    correctMatch: 'human', objectPosition: 'center 50%', matchPhrase: `Needs Human Understanding! Moral judgment requires genuine understanding of values, consequences, context, and the perspectives of real people who will be affected. AI can retrieve information about ethical frameworks and identify patterns in how humans have made moral decisions — but it has no values, no stake in outcomes, and no lived experience. It generates plausible outputs that match the patterns of ethical reasoning without any actual moral understanding. The most important decisions still require human judgment.` },
          ],
          buckets: [
            { id: 'ai',    label: `🤖 AI Can Do This`,           color: '#60A5FA' },
            { id: 'human', label: `🧠 Needs Human Understanding`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about artificial intelligence. Answer all 6 questions to earn your AI Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is artificial intelligence?`,
              options:      [`Robots that look like humans`, `When computers perform tasks that normally require human intelligence`, `Any computer program`, `A supercomputer that knows everything`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How does machine learning work?`,
              options:      [`A programmer writes rules for every possible situation`, `AI finds patterns in large amounts of labeled data and uses those patterns to make predictions`, `Computers memorize everything they're told`, `AI thinks like a human brain`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Name one thing AI cannot do well.`,
              options:      [`Recognize images`, `Process large amounts of data quickly`, `True understanding, common sense, genuine creativity, or emotional intelligence`, `Recommend content based on past behavior`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `AI learns by finding patterns in large amounts of labeled data, rather than following rules written by a programmer.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `AI that learns from data rather than following fixed rules is called ___ learning.`,
              options:      [`machine`, `digital`, `automated`, `binary`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is a real limitation of AI?`,
              options:      [`It cannot process large amounts of data`, `It can be confidently wrong and reflects biases in its training data`, `It works too slowly for practical use`, `It requires humans to check every calculation`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for a comparison of what AI can and can't do well — there are great articles and research papers on human vs. AI performance across different skills. The gap between what AI genuinely does well and what it still can't do is more interesting than most headlines suggest.`,
          familyAdventure: `Ask a voice assistant or AI tool five questions together — some simple facts, some tricky riddles, some that require common sense or a sense of humor. Notice: when does it do well? When does it fail? When does it sound confident but give a wrong or strange answer? Discuss as a family: what does this pattern tell you about how AI actually works?`,
          creativePrompt:  `Draw two columns on a page: "AI Can Do This" and "Needs Human Understanding." Fill each side with as many examples as you can think of from your own daily life — not from the lesson. Then compare with a family member. Did you agree on every item? Which ones were hard to decide? The hard ones are the most interesting.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'ai-explorer',
          badgeName: `AI Explorer`,
          message:   `Brilliant work, {name}! You now know that AI learns by finding patterns in data — not by thinking like a human. It's powerful at specific tasks and genuinely limited in others. Understanding both sides is how builders and creators use these tools wisely. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L07] Loaded: "What Is Artificial Intelligence?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l07-s1-ai-brain.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-s2-rules-vs-patterns.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-s3-machine-learning.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-s4-ai-everywhere.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-s5-ai-limits.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-s6-human-edge.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L07] ai-brain: ${r1.ok}, rules-vs-patterns: ${r2.ok}, machine-learning: ${r3.ok}, ai-everywhere: ${r4.ok}, ai-limits: ${r5.ok}, human-edge: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L07] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l07_screens;
