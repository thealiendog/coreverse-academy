// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 9
// "Should We Always Follow Rules? When Rules Are Wrong"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-09',
      title:     `Should We Always Follow Rules? When Rules Are Wrong`,
      duration:  12,
      xpReward:  50,
      badge:     'rule-thinker',
      badgeName: `Rule Thinker`,
      screens: [
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a TRICKY question — should we ALWAYS follow rules? Rules keep us safe. But what if a rule is unfair? What if someone in charge tells you to do something wrong? Today we learn how to think carefully about rules. Ready to be a Rule Thinker?`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Why Do We Have Rules?`,
          paragraphs: [
            `RULES exist for good reasons. Rules keep us SAFE — like "look both ways before crossing the street." Rules keep us FAIR — like "take turns."`,
            `Without rules, the world would be chaos. Cars would crash. People would fight. Rules let us live together peacefully.`,
          ],
          image:        '/explorer-assets/frontier/l09-s1-rules.png',
          imageCaption: `Rules — they keep us safe and fair`,
          vocab: [
            { word: 'rule',  definition: `An instruction that tells us what to do or not do, often to keep us safe or fair.`,  audioPrompt: `Rule — an instruction that tells us what to do or not do, often to keep us safe or fair.` },
            { word: 'safe',  definition: `Free from harm — protected from things that could hurt you.`,                       audioPrompt: `Safe — free from harm, protected from things that could hurt you.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Good Rules`,
          paragraphs: [
            `Most rules are GOOD. "No hitting." "Wash your hands." "Wear a seatbelt." These rules protect everyone — including YOU.`,
            `Good rules have a reason behind them. If you ask "Why?" — there's a good answer. That's how you know it's a fair rule.`,
          ],
          image:        '/explorer-assets/frontier/l09-s2-good-rules.png',
          imageCaption: `Good rules have good reasons`,
          vocab: [
            { word: 'reason',  definition: `The "why" behind something — what makes it make sense.`,                          audioPrompt: `Reason — the why behind something, what makes it make sense.` },
            { word: 'protect', definition: `To keep someone or something safe from harm.`,                                    audioPrompt: `Protect — to keep someone or something safe from harm.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Unfair Rules`,
          paragraphs: [
            `But sometimes rules are UNFAIR. Long ago, some places had rules that said certain people couldn't vote, or couldn't sit in some seats — just because of their skin color.`,
            `Those rules were WRONG. They hurt people. Following them wouldn't be right — even if someone in charge said so.`,
          ],
          image:        '/explorer-assets/frontier/l09-s3-unfair.png',
          imageCaption: `Unfair rules — they hurt instead of help`,
          vocab: [
            { word: 'unfair', definition: `When something isn't right — when it hurts people or excludes them.`,              audioPrompt: `Unfair — when something isn't right, when it hurts people or excludes them.` },
            { word: 'wrong',  definition: `Not right — something that hurts or causes harm.`,                                  audioPrompt: `Wrong — not right, something that hurts or causes harm.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Brave People Who Broke Rules`,
          paragraphs: [
            `History is full of brave people who broke UNFAIR rules. Rosa Parks refused to give up her seat on a bus when an unfair rule said she had to.`,
            `Martin Luther King Jr. led peaceful protests. Malala kept going to school even when a rule said girls couldn't. They changed the world — by NOT following bad rules.`,
          ],
          image:        '/explorer-assets/frontier/l09-s4-brave-people.png',
          imageCaption: `Brave people who changed the world by standing up`,
          vocab: [
            { word: 'brave', definition: `Doing the right thing even when it's hard or scary.`,                                audioPrompt: `Brave — doing the right thing even when it's hard or scary.` },
            { word: 'change', definition: `When something becomes different than it was before.`,                              audioPrompt: `Change — when something becomes different than it was before.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `How Do You Know?`,
          paragraphs: [
            `So how do you know if a rule is good or unfair? Ask yourself: "Who does this rule HELP? Who does it HURT?"`,
            `Good rules help most people without hurting anyone. Bad rules hurt some people just because of who they are. That's how you tell them apart.`,
          ],
          image:        '/explorer-assets/frontier/l09-s5-who-helps.png',
          imageCaption: `Ask who a rule helps and who it hurts`,
          vocab: [
            { word: 'help', definition: `To make someone's life easier, safer, or better.`,                                    audioPrompt: `Help — to make someone's life easier, safer, or better.` },
            { word: 'hurt', definition: `To cause pain or harm — physically or in feelings.`,                                  audioPrompt: `Hurt — to cause pain or harm, physically or in feelings.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Be a Rule Thinker`,
          paragraphs: [
            `Most of the time — follow the rules. They keep us safe. They make life fair. But ALWAYS think about WHY a rule exists.`,
            `If a rule hurts someone, speak up. Tell a trusted grown-up. That's how unfair rules get changed. That's how the world grows kinder.`,
          ],
          image:        '/explorer-assets/frontier/l09-s6-think.png',
          imageCaption: `Think carefully about rules — that's how the world changes`,
          vocab: [
            { word: 'think',     definition: `To use your mind to figure something out carefully.`,                            audioPrompt: `Think — to use your mind to figure something out carefully.` },
            { word: 'speak up',  definition: `To say what you think out loud, especially when something is wrong.`,           audioPrompt: `Speak up — to say what you think out loud, especially when something is wrong.` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some rules are good. Others are unfair. Tap each rule and sort it!`,
          guideText:     `Time to think like a philosopher, {name}! Tap a rule, then decide — is it a good rule or an unfair one?`,
          columnHeaders: [`The Rule`, `Good or Unfair?`],
          items: [
            { image: 'l09-game-seatbelt.png', label: `"Wear a seatbelt in the car."`,                                       correctMatch: 'good',   objectPosition: 'center 50%', matchPhrase: `Good rule! It keeps everyone safe. There's a clear reason and it helps everyone.` },
            { image: 'l09-game-skin.png',     label: `"People with brown skin can't sit here."`,                             correctMatch: 'unfair', objectPosition: 'center 50%', matchPhrase: `Unfair rule! This rule hurts people just for who they are. Brave people fought to change rules like this.` },
            { image: 'l09-game-share.png',    label: `"Take turns on the swing at recess."`,                                 correctMatch: 'good',   objectPosition: 'center 50%', matchPhrase: `Good rule! It's fair — everyone gets a chance to play.` },
            { image: 'l09-game-girls.png',    label: `"Only boys can go to school — girls have to stay home."`,              correctMatch: 'unfair', objectPosition: 'center 50%', matchPhrase: `Unfair rule! Malala stood up against rules like this. Every kid deserves to learn.` },
          ],
          buckets: [
            { id: 'good',   label: `✓ Good Rule`,    color: '#34D399' },
            { id: 'unfair', label: `⛔ Unfair Rule`,  color: '#F87171' },
          ],
        },
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Rule Thinker badge!`,
          questions: [
            { format: 'multiple-choice', question: `Why do we have rules?`,
              options: [`To make life boring`, `To keep us safe and fair`, `To make people sad`, `Rules don't matter`],
              correctIndex: 1 },
            { format: 'true-false', question: `Sometimes rules are unfair and need to be changed.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Who refused to give up her seat on the bus to protest unfair rules?`,
              options: [`Rosa Parks`, `Malala`, `Aristotle`, `Socrates`],
              correctIndex: 0 },
            { format: 'fill-blank', question: `Good rules ___ people without hurting anyone.`,
              options: [`help`, `hurt`, `confuse`, `scare`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `How do you know if a rule is fair?`,
              options: [`Ask who it helps and who it hurts`, `Just follow it always`, `Yell about it`, `Ignore it`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What should you do if a rule seems really unfair?`,
              options: [`Nothing`, `Be quiet forever`, `Tell a trusted grown-up`, `Hide`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `Wonderful work, {name}! Now let's bring this thinking into your real life. Being a Rule Thinker is one of the most important things you can do.`,
          familyAdventure: `At dinner, ask your family: "What's a rule we have in our house — and what's the REASON for it?" Talk about whether each rule is good. You might even find one to update together!`,
          creativePrompt:  `Make a "Good Rules for Earth" list. Write or draw 5 rules you wish ALL people followed. Make sure each rule helps people and doesn't hurt anyone. Decorate your list and put it where you can see it.`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'rule-thinker',
          badgeName: `Rule Thinker`,
          message:   `Brilliant, {name}! You learned that most rules are GOOD — they keep us safe. But you also learned that some rules need to CHANGE when they hurt people. You're a Rule Thinker now. The world gets better when more kids learn to think carefully. Orion is proud of you.`,
        },
      ],
    },
  ],
};

(() => {
  const l    = frontier_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L09] Loaded: "Should We Always Follow Rules?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l09-s1-rules.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l09-s2-good-rules.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l09-s3-unfair.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l09-s4-brave-people.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l09-s5-who-helps.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l09-s6-think.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L09] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L09] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l09_screens;
