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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Space Between`,
          paragraphs: [
            `Viktor Frankl survived terrible hardship and discovered something amazing. Between every stimulus — what happens — and every response — what you do — there's a space.`,
            `That space might be small — sometimes just a fraction of a second. But it's always there. And no one can ever take it away.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s1-the-space.png',
          imageCaption: `Between what happens and what you do, there's always a space`,
          vocab: [
            { word: 'stimulus', definition: `Something that happens to you — like someone saying something mean, or a loud noise, or a kind hug.`, audioPrompt: `Stimulus — something that happens to you, like someone saying something mean, or a loud noise, or a kind hug.` },
            { word: 'response', definition: `What you choose to do after something happens — your action, your words, or even just your thoughts.`, audioPrompt: `Response — what you choose to do after something happens. Your action, your words, or even just your thoughts.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Your Freedom to Choose`,
          paragraphs: [
            `What lives inside that space? Your freedom. The freedom to choose how you respond, no matter what happens to you.`,
            `This means you are never just a puppet of your circumstances. Whatever happens, you ALWAYS have a choice in how you respond.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s2-freedom.png',
          imageCaption: `In that space lives your freedom — and no one can take it from you`,
          vocab: [
            { word: 'freedom',       definition: `The power to choose how you respond — no matter what happens, this can never be taken away.`,                                                       audioPrompt: `Freedom — the power to choose how you respond. No matter what happens, this can never be taken away.` },
            { word: 'circumstances', definition: `The events and situations around you — you can't always control your circumstances, but you can always choose your response.`,                     audioPrompt: `Circumstances — the events and situations around you. You can't always control your circumstances, but you can always choose your response.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `When You React`,
          paragraphs: [
            `A reaction happens FAST — without thinking. Someone says something mean, and before we know it, we've said something mean back.`,
            `Reactions come from the amygdala — the alarm part of your brain. It fires before your thinking brain has time to catch up.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s3-reaction.png',
          imageCaption: `A reaction is fast and automatic — the alarm brain leading the way`,
          vocab: [
            { word: 'amygdala', definition: `The alarm part of your brain. It fires fast when something feels scary or upsetting — even before you think.`, audioPrompt: `Amygdala — the alarm part of your brain. It fires fast when something feels scary or upsetting, even before you think.` },
            { word: 'react', definition: `To act automatically, before your thinking brain has time to catch up.`, audioPrompt: `React — to act automatically, before your thinking brain has time to catch up.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `When You Respond`,
          paragraphs: [
            `A response happens AFTER you use the space. You pause. You breathe. You think — even just for a second.`,
            `Then you choose how to act. Responding doesn't mean ignoring your feelings. The feeling can still be real. The choice is yours.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s4-respond.png',
          imageCaption: `A response uses the space — pause, breathe, choose`,
          vocab: [
            { word: 'respond', definition: `To choose what to do after pausing, breathing, and thinking — using the space between stimulus and action.`, audioPrompt: `Respond — to choose what to do after pausing, breathing, and thinking, using the space between stimulus and action.` },
            { word: 'pause',   definition: `A brief stop before acting — just a breath or a moment — that gives your thinking brain time to catch up.`,  audioPrompt: `Pause — a brief stop before acting, just a breath or a moment, that gives your thinking brain time to catch up.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The STOP Tool`,
          paragraphs: [
            `The STOP technique helps you use the space every time. S = Stop what you're doing. T = Take a breath. O = Observe. P = Proceed with purpose.`,
            `This tiny pause — just a few seconds — gives your thinking brain a chance to catch up with your feeling brain.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s5-stop-tool.png',
          imageCaption: `STOP — Stop, Take a breath, Observe, Proceed with purpose`,
          vocab: [
            { word: 'STOP technique',      definition: `A tool with four steps: Stop, Take a breath, Observe what's happening inside you, Proceed with purpose.`,        audioPrompt: `STOP technique — a tool with four steps. Stop, take a breath, observe what's happening inside you, then proceed with purpose.` },
            { word: 'proceed with purpose', definition: `The P in STOP — moving forward with a clear, chosen intention instead of reacting automatically.`,               audioPrompt: `Proceed with purpose — the P in STOP, moving forward with a clear, chosen intention instead of reacting automatically.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Anyone Can Do This`,
          paragraphs: [
            `Athletes, surgeons, leaders, and parents around the world use this kind of pause to make better decisions.`,
            `It sounds simple, and it is. Try it the next time someone says something that upsets you. The space is always there — waiting for you to use it.`,
          ],
          image:        '/explorer-assets/inner-world/l10-s6-everyone.png',
          imageCaption: `Athletes, surgeons, parents — everyone uses the pause`,
          vocab: [
            { word: 'choice',   definition: `A decision you make — in every situation, you have a choice in how you respond, even if the feeling is automatic.`,   audioPrompt: `Choice — a decision you make. In every situation, you have a choice in how you respond, even if the feeling is automatic.` },
            { word: 'practice', definition: `Doing something again and again so it becomes easier — the more you use the pause, the more natural it feels.`,         audioPrompt: `Practice — doing something again and again so it becomes easier. The more you use the pause, the more natural it feels.` },
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
            { image: 'l10-game-snapback.png',   label: `Said it back`,    correctMatch: 'react',   objectPosition: 'center 50%', matchPhrase: `That's a reaction — fast and amygdala-driven. Next time, try the STOP technique before you respond!` },
            { image: 'l10-game-stomp.png',       label: `Slammed it down`, correctMatch: 'react',   objectPosition: 'center 50%', matchPhrase: `That's a reaction! The feeling was real — but with a pause, you could choose a different way to show it.` },
            { image: 'l10-game-breathpause.png', label: `Breathed first`,  correctMatch: 'respond', objectPosition: 'center 50%', matchPhrase: `That's a response! You used the space — felt the feeling and chose how to express it. That's true power.` },
            { image: 'l10-game-stopwalk.png',    label: `Walked away`,     correctMatch: 'respond', objectPosition: 'center 50%', matchPhrase: `Perfect! Stop, breathe, observe, proceed — you used the STOP technique. Sage is so proud of that choice!` },
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
    fetch('/explorer-assets/inner-world/l10-s1-the-space.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-s2-freedom.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-s3-reaction.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-s4-respond.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-s5-stop-tool.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l10-s6-everyone.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L10] the-space: ${r1.ok}, freedom: ${r2.ok}, reaction: ${r3.ok}, respond: ${r4.ok}, stop-tool: ${r5.ok}, everyone: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L10] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l10_screens;
