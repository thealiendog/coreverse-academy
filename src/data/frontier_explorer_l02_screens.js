// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 2
// "The Golden Rule: One Idea Everyone Agrees On"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-02',
      title:     `The Golden Rule: One Idea Everyone Agrees On`,
      duration:  12,
      xpReward:  50,
      badge:     'golden-heart',
      badgeName: `Golden Heart`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! Out of all the BILLIONS of people who have ever lived — on every continent, in every time period — almost EVERY culture has agreed on one big rule. Just ONE. Today we discover what it is, why it's called GOLDEN, and how it can change the way you treat every person you meet. Ready to find your Golden Heart?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The One Big Rule`,
          paragraphs: [
            `The Golden Rule says: "Treat others the way you want to be treated." That's it. That's the rule.`,
            `It sounds simple — but it's huge. Want kindness? Be kind. Want honesty? Be honest. Want to be included? Include others.`,
          ],
          image:        '/explorer-assets/frontier/l02-s1-golden-rule.png',
          imageCaption: `The Golden Rule — treat others the way you want to be treated`,
          vocab: [
            { word: 'Golden Rule', definition: `The rule that says treat others the way you want to be treated.`,                audioPrompt: `Golden Rule — the rule that says treat others the way you want to be treated.` },
            { word: 'kindness',    definition: `Treating others with care, gentleness, and warmth.`,                              audioPrompt: `Kindness — treating others with care, gentleness, and warmth.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Why Is It Called GOLDEN?`,
          paragraphs: [
            `It's called GOLDEN because gold is precious — rare, valuable, and beautiful. This rule is the same: rare, valuable, and beautiful when you see it in action.`,
            `Imagine the world if everyone followed the Golden Rule for ONE day. No mean words. No leaving anyone out. No taking what isn't yours. The world would shine like gold.`,
          ],
          image:        '/explorer-assets/frontier/l02-s2-precious.png',
          imageCaption: `Golden — because it's precious, like gold`,
          vocab: [
            { word: 'precious', definition: `Very, very valuable — something worth protecting and caring about.`,                audioPrompt: `Precious — very valuable, something worth protecting and caring about.` },
            { word: 'rare',     definition: `Not common — something special you don't see every day.`,                            audioPrompt: `Rare — not common, something special you don't see every day.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Everyone, Everywhere`,
          paragraphs: [
            `Here's what's wild — the Golden Rule shows up in nearly EVERY culture and religion in the world. Christianity, Judaism, Islam, Buddhism, Hinduism — they all have a version of it.`,
            `Ancient Egyptians wrote it down 4,000 years ago. Confucius taught it in ancient China. Native American tribes lived by it. People who never met agreed on this one thing.`,
          ],
          image:        '/explorer-assets/frontier/l02-s3-cultures.png',
          imageCaption: `Almost every culture on Earth has a version of the Golden Rule`,
          vocab: [
            { word: 'culture',  definition: `The way a group of people live — their food, songs, language, and beliefs.`,        audioPrompt: `Culture — the way a group of people live, their food, songs, language, and beliefs.` },
            { word: 'religion', definition: `A set of beliefs about big questions like "why are we here?" and "how should we live?"`, audioPrompt: `Religion — a set of beliefs about big questions like why are we here and how should we live.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Magic Trick: Imagine`,
          paragraphs: [
            `The Golden Rule works because of one simple trick — it asks you to IMAGINE. Imagine being the other person. Imagine how they'd feel.`,
            `Before you do something, ask: "Would I want someone to do this to ME?" If yes, do it. If no, don't. That tiny question changes everything.`,
          ],
          image:        '/explorer-assets/frontier/l02-s4-imagine.png',
          imageCaption: `Imagine being the other person — that's the magic trick`,
          vocab: [
            { word: 'imagine', definition: `To picture something in your mind that isn't right in front of you.`,                audioPrompt: `Imagine — to picture something in your mind that isn't right in front of you.` },
            { word: 'empathy', definition: `Feeling what someone else feels — putting yourself in their shoes.`,                  audioPrompt: `Empathy — feeling what someone else feels, putting yourself in their shoes.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Hard Part`,
          paragraphs: [
            `Here's the truth — the Golden Rule is SIMPLE to say but HARD to do. Especially when you're upset, hungry, or someone was mean to you first.`,
            `That's why it takes practice. Every time you remember to use it, you're getting stronger. Even adults are still practicing this rule their whole lives.`,
          ],
          image:        '/explorer-assets/frontier/l02-s5-practice.png',
          imageCaption: `Simple to say, hard to do — that's why we practice`,
          vocab: [
            { word: 'practice', definition: `Doing something over and over to get better at it.`,                                audioPrompt: `Practice — doing something over and over to get better at it.` },
            { word: 'choice',   definition: `When you decide between two or more things you could do.`,                          audioPrompt: `Choice — when you decide between two or more things you could do.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Why It Matters`,
          paragraphs: [
            `When you follow the Golden Rule, two amazing things happen. First, the people around you feel safer and happier. Second, YOU feel better too. Kindness gives back.`,
            `That's the secret philosophers across the world figured out. Being kind isn't just good for others — it's good for YOU.`,
          ],
          image:        '/explorer-assets/frontier/l02-s6-kindness-circle.png',
          imageCaption: `Kindness gives back — to others AND to you`,
          vocab: [
            { word: 'safer',     definition: `Feeling more protected, calm, and at ease around people.`,                          audioPrompt: `Safer — feeling more protected, calm, and at ease around people.` },
            { word: 'give back', definition: `When something good returns to you because of something good you did.`,             audioPrompt: `Give back — when something good returns to you because of something good you did.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some actions follow the Golden Rule. Others break it. Tap each one and sort it!`,
          guideText:     `Time to spot the Golden Rule in real life, {name}! Tap an action, then tap whether it follows the rule or breaks it.`,
          columnHeaders: [`The Action`, `Follow or Break?`],
          items: [
            { image: 'l02-game-share.png',    label: `Sharing your toy with a friend who's lonely.`,                  correctMatch: 'follow', objectPosition: 'center 50%', matchPhrase: `Follows the rule! You'd want someone to share with you — so you share with them.` },
            { image: 'l02-game-mean.png',     label: `Calling someone a mean name to be funny.`,                       correctMatch: 'break',  objectPosition: 'center 50%', matchPhrase: `Breaks the rule! You wouldn't want a mean name — so you don't give one to others.` },
            { image: 'l02-game-help.png',     label: `Helping a kid who fell down at recess.`,                         correctMatch: 'follow', objectPosition: 'center 50%', matchPhrase: `Follows the rule! Classic Golden Rule kindness — you'd want help if you fell.` },
            { image: 'l02-game-exclude.png',  label: `Leaving someone out of the game on purpose.`,                    correctMatch: 'break',  objectPosition: 'center 50%', matchPhrase: `Breaks the rule! Being left out hurts — and you wouldn't want it done to you.` },
          ],
          buckets: [
            { id: 'follow', label: `✨ Follows the Rule`, color: '#FBBF24' },
            { id: 'break',  label: `⛔ Breaks the Rule`,  color: '#9CA3AF' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Golden Heart badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does the Golden Rule say?`,
              options: [`Always win`, `Treat others the way you want to be treated`, `Be the loudest`, `Never ask questions`],
              correctIndex: 1 },
            { format: 'true-false', question: `Almost every culture in the world has its own version of the Golden Rule.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Why is it called the "Golden" Rule?`,
              options: [`It's made of gold`, `It's precious and valuable`, `It's the color yellow`, `It's heavy`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `The Golden Rule asks you to ___ being the other person.`,
              options: [`imagine`, `fight`, `forget`, `avoid`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What's the special trick of the Golden Rule?`,
              options: [`Yelling louder`, `Putting yourself in someone else's shoes`, `Winning every argument`, `Staying silent`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What happens when you follow the Golden Rule?`,
              options: [`Nothing changes`, `People around you AND you feel better`, `You always get what you want`, `You become richer`],
              correctIndex: 1 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Beautiful work, {name}! Now let's bring the Golden Rule into your real life — because it only matters if you USE it. Try this today!`,
          familyAdventure: `Pick ONE person in your family today. Do something for them that you'd love someone to do for YOU. A hug? Help with chores? A drawing? Watch their face when you do it — the Golden Rule is real and you can feel it.`,
          creativePrompt:  `Draw two pictures side by side. On the left, draw something kind you could do for a friend. On the right, draw how their face would look when you do it. That smile? That's the Golden Rule working.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'golden-heart',
          badgeName: `Golden Heart`,
          message:   `Brilliant, {name}! You learned the one rule that humans across the whole WORLD agree on. That's pretty amazing. Carry your Golden Heart with you everywhere. Every kind choice you make makes the world a tiny bit brighter. Orion is so proud of you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = frontier_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L02] Loaded: "The Golden Rule" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l02-s1-golden-rule.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l02-s2-precious.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l02-s3-cultures.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l02-s4-imagine.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l02-s5-practice.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l02-s6-kindness-circle.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L02] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L02] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l02_screens;
