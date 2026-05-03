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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is AI?`,
          paragraphs: [
            `Artificial intelligence is the ability of a computer to perform tasks that normally require human intelligence: understanding language, recognizing faces, making decisions, translating between languages, and learning from experience. AI isn't one thing — it's a collection of techniques. The AI in your phone's face recognition works very differently from the AI that suggests what to watch next or guides a self-driving car.`,
            `Traditional programs are rigid — a programmer writes rules for every possible situation, and the program follows them exactly. AI is different: instead of following fixed rules, AI systems learn from experience. They find patterns in large amounts of data and use those patterns to make decisions in situations they haven't explicitly been programmed for. This shift — from rule-following to pattern-learning — changed everything about what computers can do.`,
            `The idea of artificial intelligence has been around since the 1950s, when scientists first asked whether machines could think. Early researchers predicted human-level AI was just around the corner. They were wrong about the timeline — AI turned out to be far harder than expected. But over the following decades, as computers got faster and the amount of available data exploded, AI made remarkable progress. Today it can do things that seemed like science fiction just twenty years ago.`,
          ],
          image:        '/explorer-assets/future-skills/l07-magazine-what-is-ai.png',
          imageCaption: `What is AI — computers performing tasks that normally require human intelligence, from recognizing faces to understanding language`,
          vocab: [
            { word: `artificial intelligence`, definition: `When computers perform tasks that normally require human intelligence — such as recognizing images, understanding language, or making decisions based on patterns in data.`,                                audioPrompt: `Artificial intelligence — when computers perform tasks that normally require human intelligence. This includes recognizing images, understanding language, and making decisions based on patterns in data.` },
            { word: `machine learning`,        definition: `A type of artificial intelligence where a program learns patterns from large amounts of data rather than following fixed rules written by a programmer.`,                                                          audioPrompt: `Machine learning — a type of artificial intelligence where a program learns patterns from large amounts of data rather than following fixed rules written by a programmer.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How AI Learns`,
          paragraphs: [
            `Traditional programs follow rules humans write. AI programs learn patterns from data. To teach an AI to recognize cats, you show it millions of photos labeled 'cat' or 'not cat.' The AI finds patterns — pointy ears, whiskers, certain shapes — and uses those patterns to identify cats in new photos it's never seen before. This approach is called machine learning, and it's behind most modern AI.`,
            `The most powerful form of machine learning today is called deep learning. It uses networks of mathematical nodes loosely inspired by how neurons connect in the human brain. These networks — called neural networks — can find extremely complex patterns across enormous datasets. The same architecture that learns to recognize faces also learns to translate languages, generate images, and understand speech. Deep learning is what made the AI revolution of the last decade possible.`,
            `The quality of an AI depends almost entirely on the quality of its training data. An AI trained on biased data learns biased patterns. An AI trained on limited data makes confident mistakes outside that range. An AI trained on incorrect labels learns wrong conclusions. This means every AI system reflects the choices made by the people who built and trained it — not neutral, objective truth. Who builds AI, and what data they use, matters enormously.`,
          ],
          image:        '/explorer-assets/future-skills/l07-magazine-how-ai-learns.png',
          imageCaption: `How AI learns — feeding millions of labeled examples so the system finds patterns, rather than following rules a programmer wrote`,
          vocab: [
            { word: `neural network`,  definition: `A type of AI system loosely inspired by the brain — built from layers of mathematical nodes that find complex patterns in data. Neural networks are the foundation of most modern AI.`,                                  audioPrompt: `Neural network — a type of AI system loosely inspired by the brain, built from layers of mathematical nodes that find complex patterns in data. Neural networks are the foundation of most modern AI.` },
            { word: `training data`,   definition: `The large collection of labeled examples used to teach an AI system — the quality and diversity of training data determines how well the AI performs and what biases it carries.`,                                     audioPrompt: `Training data — the large collection of labeled examples used to teach an AI system. The quality and diversity of training data determines how well the AI performs and what biases it carries.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `AI All Around You`,
          paragraphs: [
            `AI is already woven into daily life: voice assistants that answer spoken questions, recommendation systems that suggest what to watch or listen to next, spam filters that protect your email inbox, face recognition that unlocks your phone, and navigation apps that predict traffic in real time and reroute you around delays. You interact with AI dozens of times every day — most of the time without noticing.`,
            `AI is also behind the search results you see, the autocorrect that fixes your typing, fraud detection systems that flag unusual activity on bank accounts, and medical tools that help doctors analyze scans for signs of disease. In factories, AI-powered systems build products with precision no human hand can match. In agriculture, AI analyzes satellite images to help farmers predict crop yields and spot problems early.`,
            `The pace of progress has been remarkable. Just a few years ago, AI couldn't reliably hold a conversation, generate realistic images, or pass professional exams. Today it can do all of those things. This improvement isn't magic — it's the result of dramatically faster computers, vastly larger datasets, and refinements in training techniques. The AI tools available today are more powerful than the research systems of major universities just a decade ago.`,
          ],
          image:        '/explorer-assets/future-skills/l07-magazine-ai-around-you.png',
          imageCaption: `AI all around you — voice assistants, recommendation systems, spam filters, face unlock, navigation, fraud detection, and more`,
          vocab: [
            { word: `recommendation system`, definition: `An AI tool that predicts what a user might want to see, hear, or buy next, based on patterns in their past behavior and the behavior of similar users.`,                                                audioPrompt: `Recommendation system — an AI tool that predicts what a user might want to see, hear, or buy next, based on patterns in their past behavior and the behavior of similar users.` },
            { word: `automation`,            definition: `Using machines or software to perform tasks that previously required human effort — AI has expanded automation from physical tasks to tasks that require pattern recognition and decision-making.`,   audioPrompt: `Automation — using machines or software to perform tasks that previously required human effort. AI has expanded automation from physical tasks to tasks that require pattern recognition and decision-making.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `What AI Can and Can't Do`,
          paragraphs: [
            `AI is incredibly powerful at pattern recognition, processing huge amounts of data, and doing specific narrow tasks. An AI trained to detect disease in medical images can spot patterns that experienced doctors miss. An AI playing a strategy game can consider millions of possibilities per second and find moves no human would discover. At its best, AI is a precision instrument for doing one specific thing extraordinarily well.`,
            `But AI has real limitations. It doesn't truly understand anything — it matches patterns without comprehension. It can be confidently wrong, stating false information with the same calm certainty it uses for true information. It reflects the biases in its training data. It struggles with genuinely new situations it wasn't trained on. And it has no common sense, emotional intelligence, moral judgment, or genuine creativity — it generates plausible outputs from patterns, not understanding.`,
            `This means the most valuable skills in an AI-powered world aren't the ones AI does best — they're the ones AI does worst. Critical thinking to evaluate AI outputs. Judgment to decide when to trust and when to question. Creativity that goes beyond recombining existing patterns. Empathy and ethical reasoning. Human connection. The people who thrive alongside AI will be those who understand what it can do — and understand what only humans can.`,
          ],
          image:        '/explorer-assets/future-skills/l07-magazine-ai-limits.png',
          imageCaption: `What AI can and can't do — powerful at pattern recognition, but without true understanding, common sense, or emotional intelligence`,
          vocab: [
            { word: `bias`,     definition: `A pattern of unfair or inaccurate results caused by flawed or unrepresentative training data — AI systems can amplify human biases that were baked into the data they learned from.`,                                             audioPrompt: `Bias — a pattern of unfair or inaccurate results caused by flawed or unrepresentative training data. AI systems can amplify human biases that were baked into the data they learned from.` },
            { word: `narrow AI`, definition: `AI designed to do one specific task very well — like recognizing faces or translating text — as opposed to general intelligence, which can reason flexibly across any domain.`,                                              audioPrompt: `Narrow AI — AI designed to do one specific task very well, like recognizing faces or translating text, as opposed to general intelligence, which can reason flexibly across any domain.` },
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
    fetch('/explorer-assets/future-skills/l07-magazine-what-is-ai.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-magazine-how-ai-learns.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-magazine-ai-around-you.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l07-magazine-ai-limits.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L07] what-is-ai: ${r1.ok}, how-ai-learns: ${r2.ok}, ai-around-you: ${r3.ok}, ai-limits: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L07] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l07_screens;
