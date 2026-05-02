// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 10
// "I Choose My Response"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l10_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-10',
      title:     `I Choose My Response`,
      duration:  14,
      xpReward:  50,
      badge:     'choice-maker',
      badgeName: `Choice Maker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! Today you're going to learn one of the most important ideas in all of human psychology — and once you understand it, your whole life can change. Between what happens to you and what you do about it, there is always a space. In that space is your power. Ready to find it?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `The Space Between What Happens and What You Do`,
          paragraphs: [
            `A philosopher named Viktor Frankl survived terrible hardship and made an extraordinary discovery: between every stimulus — what happens to you — and every response — what you do about it — there is a space.`,
            `In that space is your freedom to choose. It might be tiny — just a fraction of a second — but it's always there. And no one can ever take it away from you.`,
            `This idea changes everything. It means you are never just a puppet of your circumstances. No matter what happens, you always have a choice in how you respond.`,
          ],
          image:        '/explorer-assets/inner-world/l10-stimulus-space.png',
          imageCaption: `Stimulus → Space → Response — the space is where your power lives`,
          vocab: [
            { word: 'stimulus', definition: `Something that happens to you or around you that triggers a feeling or a reaction — like a comment, an event, or a situation.`,              audioPrompt: `Stimulus — something that happens to you or around you that triggers a feeling or a reaction, like a comment, an event, or a situation.` },
            { word: 'response', definition: `What you choose to do after a stimulus — a response uses the space between what happened and what you do next.`,                            audioPrompt: `Response — what you choose to do after a stimulus. A response uses the space between what happened and what you do next.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Reaction vs. Response`,
          paragraphs: [
            `When we react, we act automatically — without thinking. Someone says something mean, and before we know it, we've said something mean back. A reaction is fast and usually driven by the amygdala, which fires before the thinking brain has time to weigh in.`,
            `When we respond, we use that space. We pause, we breathe, we think — even for just a second — and we choose how to act.`,
            `Responding doesn't mean ignoring your feelings. You can feel angry and still choose how to express that anger in a way you'll be proud of later. The feeling is real — the choice is yours.`,
          ],
          image:        '/explorer-assets/inner-world/l10-react-vs-respond.png',
          imageCaption: `Reaction is automatic — response uses the space to choose`,
          vocab: [
            { word: 'reaction', definition: `An automatic, fast response driven by the emotional brain — it happens before the thinking brain has time to weigh in.`,                   audioPrompt: `Reaction — an automatic, fast response driven by the emotional brain, happening before the thinking brain has time to weigh in.` },
            { word: 'amygdala', definition: `The brain's alarm system that fires quickly when you feel threatened or frustrated — it drives reactions before you've had a chance to think.`, audioPrompt: `Amygdala — the brain's alarm system that fires quickly when you feel threatened or frustrated, driving reactions before you've had a chance to think.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `The STOP Technique`,
          paragraphs: [
            `The STOP technique gives you a tool to use the space every time. S = Stop what you're doing. T = Take a breath. O = Observe what's happening inside you. P = Proceed with purpose.`,
            `This tiny pause — just a few seconds — is enough to give your thinking brain a chance to catch up with your emotional brain. That's when you can choose wisely.`,
            `It sounds simple, and it is. But it works. Athletes, surgeons, parents, and leaders around the world use this kind of pause to make better decisions. You can start practising it today.`,
          ],
          image:        '/explorer-assets/inner-world/l10-stop-technique.png',
          imageCaption: `Stop · Take a breath · Observe · Proceed — four steps to your power`,
          vocab: [
            { word: 'STOP technique',      definition: `A four-step pause — Stop, Take a breath, Observe, Proceed — that gives your thinking brain time to catch up before you act.`,  audioPrompt: `STOP technique — a four-step pause: Stop, Take a breath, Observe, Proceed. It gives your thinking brain time to catch up before you act.` },
            { word: 'proceed with purpose', definition: `The final step of STOP — moving forward with a clear, chosen intention, rather than just reacting automatically.`,                audioPrompt: `Proceed with purpose — the final step of STOP, moving forward with a clear, chosen intention rather than just reacting automatically.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap a scenario card, then tap whether it shows a reaction or a response!`,
          guideText:     `Each card shows how a child handled a tricky moment. Did they react automatically — or did they use the space and respond? Tap the card, then sort it. You know the difference now!`,
          columnHeaders: [`What Happened`, `React or Respond?`],
          items: [
            { image: 'l10-game-snapback.png',   label: `Someone was mean — I said something mean right back.`,                     correctMatch: 'react',   objectPosition: 'center 50%', matchPhrase: `That's a reaction — fast and amygdala-driven. Next time, try the STOP technique before you respond!` },
            { image: 'l10-game-stomp.png',       label: `I lost the game and slammed the board down.`,                               correctMatch: 'react',   objectPosition: 'center 50%', matchPhrase: `That's a reaction! The feeling was real — but with a pause, you could choose a different way to show it.` },
            { image: 'l10-game-breathpause.png', label: `I felt angry, took a breath, and said how I felt calmly.`,                  correctMatch: 'respond', objectPosition: 'center 50%', matchPhrase: `That's a response! You used the space — felt the feeling and chose how to express it. That's true power.` },
            { image: 'l10-game-stopwalk.png',    label: `I wanted to shout, so I stopped, breathed, and walked away to cool down.`, correctMatch: 'respond', objectPosition: 'center 50%', matchPhrase: `Perfect! Stop, breathe, observe, proceed — you used the STOP technique. Sage is so proud of that choice!` },
          ],
          buckets: [
            { id: 'react',   label: `⚡ Reaction`, color: '#EF4444' },
            { id: 'respond', label: `🧠 Response`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about choosing your response. Answer all 6 questions to earn your Choice Maker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the "space" Viktor Frankl wrote about?`,
              options:      [`Outer space and the universe`, `The gap between what happens to you and how you choose to respond`, `A quiet room for thinking`, `The time between waking up and getting out of bed`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the difference between reacting and responding?`,
              options:      [`They are the same`, `Reacting is automatic; responding involves a pause and a choice`, `Responding is always faster`, `Reacting is always wrong`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `You can feel angry and still choose how to express that feeling thoughtfully.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `Which part of the brain drives automatic reactions?`,
              options:      [`The prefrontal cortex`, `The cerebellum`, `The amygdala`, `The hippocampus`],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     `In the STOP technique, the "O" stands for ___ what's happening inside you.`,
              options:      [`Observe`, `Open`, `Organise`, `Overcome`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Who first wrote about the space between stimulus and response?`,
              options:      [`Dr. Carol Dweck`, `Viktor Frankl`, `Dr. Andrew Weil`, `Albert Einstein`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Outstanding, {name}! You now hold one of the most powerful ideas a human being can own — the knowledge that you always have a choice in how you respond. This is true freedom. Try this with your family tonight!`,
          familyAdventure: `Think of a recent moment someone in the family reacted quickly and wished they hadn't. Discuss: what could the response have been instead? Practise the STOP technique together — one person shares a trigger, everyone else tries the four steps out loud.`,
          creativePrompt:  `Think of a situation that often triggers a quick reaction from you — a sibling taking your things, a friend making a joke at your expense. Now play it out in your mind, but use the STOP technique. Breathe, observe, and choose your response. What would you do differently?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'choice-maker',
          badgeName: `Choice Maker`,
          message:   `Outstanding, {name}! You now hold one of the most powerful ideas a human being can own — the knowledge that you always have a choice in how you respond. This is true freedom. Sage believes you'll use it wisely!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l10_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L10] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l10-stimulus-space.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-react-vs-respond.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-stop-technique.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L10] stimulus-space: ${r1.ok}, react-vs-respond: ${r2.ok}, stop-technique: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L10] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l10_screens;
