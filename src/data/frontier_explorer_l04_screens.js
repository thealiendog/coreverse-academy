// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 4
// "Fairness and Justice: What Does Fair Really Mean?"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-04',
      title:     `Fairness and Justice: What Does Fair Really Mean?`,
      duration:  12,
      xpReward:  50,
      badge:     'fairness-finder',
      badgeName: `Fairness Finder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! Quick question — have you ever yelled "That's NOT FAIR!"? Of course you have. Every kid has. But here's the wild part — even big grown-ups can't always agree on what FAIR really means. Today we figure it out together. Time to become a Fairness Finder!`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Feeling of "Not Fair"`,
          paragraphs: [
            `FAIRNESS is something you FEEL before you can explain it. When your sister gets a bigger slice of cake — you feel it. When someone cuts in line — you feel it.`,
            `That feeling is real, and it's important. It's your inner sense of how things SHOULD be. Even animals feel it — scientists showed monkeys get mad when their friend gets a better treat!`,
          ],
          image:        '/explorer-assets/frontier/l04-s1-not-fair.png',
          imageCaption: `Fairness — a feeling almost every kid knows`,
          vocab: [
            { word: 'fair',    definition: `When things are done in a way that's equal or right for everyone.`,                  audioPrompt: `Fair — when things are done in a way that's equal or right for everyone.` },
            { word: 'unfair',  definition: `When something isn't equal or right — when someone gets less than they should.`,    audioPrompt: `Unfair — when something isn't equal or right, when someone gets less than they should.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Equal Fair`,
          paragraphs: [
            `One kind of fair is EQUAL — everyone gets the SAME amount. Like everyone gets one cookie. Everyone takes one turn.`,
            `Equal fair feels safe and simple. Nobody gets more. Nobody gets less. It's a great starting place.`,
          ],
          image:        '/explorer-assets/frontier/l04-s2-equal.png',
          imageCaption: `Equal fair — everyone gets the same`,
          vocab: [
            { word: 'equal', definition: `When everyone gets the same amount.`,                                                  audioPrompt: `Equal — when everyone gets the same amount.` },
            { word: 'share', definition: `To divide something so other people can have some too.`,                                audioPrompt: `Share — to divide something so other people can have some too.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Earned Fair`,
          paragraphs: [
            `Another kind of fair is EARNED — you get more if you DO more. The kid who practices hardest wins the medal. The teammate who scored more goals gets the MVP.`,
            `Earned fair rewards effort. It says: "You worked harder, so you get more." That's a kind of fair too.`,
          ],
          image:        '/explorer-assets/frontier/l04-s3-earned.png',
          imageCaption: `Earned fair — you get more if you work for it`,
          vocab: [
            { word: 'earned', definition: `Getting something because you worked for it or did the right thing.`,                  audioPrompt: `Earned — getting something because you worked for it or did the right thing.` },
            { word: 'effort', definition: `The hard work you put into something.`,                                                audioPrompt: `Effort — the hard work you put into something.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Need-Based Fair`,
          paragraphs: [
            `A third kind of fair is NEED-BASED — people get what they really NEED, not just what's equal.`,
            `Imagine three kids — one needs glasses to see, one doesn't. Giving them BOTH glasses isn't fair. Giving glasses to the one who needs them — that's need-based fair.`,
          ],
          image:        '/explorer-assets/frontier/l04-s4-needs.png',
          imageCaption: `Need-based fair — people get what they really need`,
          vocab: [
            { word: 'need',  definition: `Something you really require — not just want.`,                                         audioPrompt: `Need — something you really require, not just want.` },
            { word: 'help',  definition: `To do something for someone so their life gets a little easier.`,                       audioPrompt: `Help — to do something for someone so their life gets a little easier.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `So Why Do People Argue?`,
          paragraphs: [
            `Here's the secret — adults argue about fairness because they're using DIFFERENT KINDS of fair.`,
            `One person thinks EQUAL fair. Another thinks EARNED fair. Another thinks NEED-BASED fair. They're all kinds of fair! That's why fairness is a Big Question.`,
          ],
          image:        '/explorer-assets/frontier/l04-s5-arguing.png',
          imageCaption: `Different kinds of fair — that's why people disagree`,
          vocab: [
            { word: 'agree',    definition: `When two or more people think the same way about something.`,                       audioPrompt: `Agree — when two or more people think the same way about something.` },
            { word: 'disagree', definition: `When people have different ideas about something.`,                                  audioPrompt: `Disagree — when people have different ideas about something.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `What's Justice?`,
          paragraphs: [
            `JUSTICE is the BIG version of fairness — fairness for EVERYONE in the world, not just your family.`,
            `People like Martin Luther King Jr., Nelson Mandela, and Malala fought for justice — to make sure ALL people are treated fairly. They changed the world with this idea.`,
          ],
          image:        '/explorer-assets/frontier/l04-s6-justice.png',
          imageCaption: `Justice — fairness for everyone, everywhere`,
          vocab: [
            { word: 'justice',     definition: `Fairness for everyone — making sure all people are treated rightly.`,             audioPrompt: `Justice — fairness for everyone, making sure all people are treated rightly.` },
            { word: 'change-maker', definition: `Someone brave who works to make the world more fair.`,                            audioPrompt: `Change-maker — someone brave who works to make the world more fair.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Each situation uses a different kind of FAIR. Tap each one and match it!`,
          guideText:     `Let's spot which KIND of fair is being used, {name}! Tap a situation, then tap the kind of fair it shows.`,
          columnHeaders: [`The Situation`, `Which Kind of Fair?`],
          items: [
            { image: 'l04-game-cookies.png', label: `Everyone in the class gets one cookie at the party.`,                  correctMatch: 'equal',  objectPosition: 'center 50%', matchPhrase: `Equal fair! Same amount for everyone — that's the equal kind of fair.` },
            { image: 'l04-game-medal.png',   label: `The runner who trained the hardest wins the gold medal.`,              correctMatch: 'earned', objectPosition: 'center 50%', matchPhrase: `Earned fair! She earned it through effort — that's the earned kind of fair.` },
            { image: 'l04-game-glasses.png', label: `The kid who can't see the board clearly gets glasses.`,                correctMatch: 'need',   objectPosition: 'center 50%', matchPhrase: `Need-based fair! She NEEDS them more than others — that's the need-based kind of fair.` },
            { image: 'l04-game-turns.png',   label: `Each kid at recess gets the same turn on the swing.`,                  correctMatch: 'equal',  objectPosition: 'center 50%', matchPhrase: `Equal fair! Same turn for everyone — equal fairness in action.` },
          ],
          buckets: [
            { id: 'equal',  label: `⚖️ Equal Fair`,  color: '#34D399' },
            { id: 'earned', label: `🏆 Earned Fair`, color: '#FBBF24' },
            { id: 'need',   label: `🆘 Need Fair`,   color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Fairness Finder badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "fair" mean?`,
              options: [`Always winning`, `When things are equal or right for everyone`, `Getting whatever you want`, `Being the loudest`],
              correctIndex: 1 },
            { format: 'true-false', question: `There can be more than one kind of fairness.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which is an example of EARNED fair?`,
              options: [`Everyone gets one cookie`, `The kid who studied hardest gets the top grade`, `Random luck`, `No rules at all`],
              correctIndex: 1 },
            { format: 'fill-blank', question: `Justice means fairness for ___.`,
              options: [`everyone`, `only kids`, `only adults`, `no one`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who fought for justice in history?`,
              options: [`Nobody`, `Only kings`, `Brave people like Martin Luther King Jr. and Malala`, `Only philosophers`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `What is NEED-BASED fair?`,
              options: [`Everyone gets the same`, `The strongest wins everything`, `People get what they really need`, `Nobody gets anything`],
              correctIndex: 2 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Brilliant, {name}! Now let's bring fairness into your real life. The world needs more fairness — and YOU can help.`,
          familyAdventure: `Tonight, ask your family: "When was a time something didn't feel fair to you?" Listen to each story. No fixing, no arguing — just listening. You'll learn what fair means to each person.`,
          creativePrompt:  `Draw a "Fair World" picture. Show 3 kids sharing something — like a snack, a toy, or a turn. Make it so EVERYONE in the picture looks happy. That's what fairness looks like in action.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'fairness-finder',
          badgeName: `Fairness Finder`,
          message:   `Wonderful, {name}! You learned that fairness is not just ONE thing — it's MANY things. And you learned about justice — making the world fair for EVERYONE. That feeling of "not fair" you sometimes get? It's powerful. Listen to it. The world is better because of people who care about fairness. Orion is so proud of you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = frontier_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L04] Loaded: "Fairness and Justice" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l04-s1-not-fair.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l04-s2-equal.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l04-s3-earned.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l04-s4-needs.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l04-s5-arguing.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l04-s6-justice.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L04] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L04] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l04_screens;
