// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 16
// "Cyberbullying and How to Handle It"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-16',
      title:     `Cyberbullying and How to Handle It`,
      duration:  12,
      xpReward:  50,
      badge:     'upstander',
      badgeName: `Upstander`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Cyberbullying affects millions of young people around the world. Unlike traditional bullying, it follows you home, can happen at any hour, and can reach a large audience in seconds. But here's what's equally true: it can be stopped, it can be reported, and one person choosing to speak up can change everything. Understanding what cyberbullying is — and what to do about it — is one of the most important skills of digital life.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What Cyberbullying Is',
          paragraphs: [
            'Cyberbullying is when someone uses technology to harass, threaten, or humiliate another person — on purpose, over and over.',
            'One unkind comment is hurtful, but it\'s not cyberbullying. A pattern of targeted harm at the same person, again and again, IS.',
          ],
          image:        '/explorer-assets/future-skills/l16-s1-targeted-arrows.png',
          imageCaption: 'Two words define cyberbullying: deliberate AND repeated. Not every mean comment counts. A pattern aimed at one person does.',
          vocab: [
            { word: 'cyberbullying', definition: 'Using technology to harass, threaten, or humiliate someone on purpose, repeatedly. Not a single rude comment — a pattern.', audioPrompt: 'Cyberbullying — using technology to harass, threaten, or humiliate someone on purpose, repeatedly. Not a single rude comment, a pattern.' },
            { word: 'targeted',      definition: 'Aimed specifically at one person, again and again. Targeting is what turns rudeness into bullying.', audioPrompt: 'Targeted — aimed specifically at one person, again and again. Targeting is what turns rudeness into bullying.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Why It Hurts More',
          paragraphs: [
            'Regular bullying stops when you leave the playground. Cyberbullying follows you home, into your bedroom, at midnight.',
            'It can have an audience of hundreds. Screenshots make it permanent. The person doing it can hide behind anonymity. That combination is harder to handle.',
          ],
          image:        '/explorer-assets/future-skills/l16-s2-follows-home.png',
          imageCaption: 'No safe space. Big audience. Permanent record. Hidden identity. That\'s what makes online harm hit differently.',
          vocab: [
            { word: 'anonymity',  definition: 'When someone hides their identity online. Makes it easier for them to be cruel without facing consequences.', audioPrompt: 'Anonymity — when someone hides their identity online. Makes it easier for them to be cruel without facing consequences.' },
            { word: 'permanence', definition: 'Digital content lasts. Screenshots, backups, and shares mean cyberbullying evidence doesn\'t just disappear.', audioPrompt: 'Permanence — digital content lasts. Screenshots, backups, and shares mean cyberbullying evidence doesn\'t just disappear.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Don\'t Respond, Document',
          paragraphs: [
            'If it\'s happening to you: don\'t reply. Responding usually escalates it.',
            'Before blocking or deleting anything, take screenshots. You need evidence to show a trusted adult or platform later. Document first, then act.',
          ],
          image:        '/explorer-assets/future-skills/l16-s3-screenshot-evidence.png',
          imageCaption: 'Step one is NOT replying. Step two is screenshots — evidence first, before anything gets deleted.',
          vocab: [
            { word: 'document', definition: 'Save evidence of what\'s happening. Screenshots of messages or posts before they\'re deleted or you block someone.', audioPrompt: 'Document — save evidence of what\'s happening. Screenshots of messages or posts before they\'re deleted or you block someone.' },
            { word: 'escalate', definition: 'Make something worse or bigger. Responding to harassment usually escalates the situation, even if it feels like standing up for yourself.', audioPrompt: 'Escalate — make something worse or bigger. Responding to harassment usually escalates the situation, even if it feels like standing up for yourself.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Block, Report, Tell',
          paragraphs: [
            'Block the person on every platform. Report them to the platform — every major app has a reporting tool.',
            'Then tell a trusted adult: parent, teacher, school counselor. Show them the screenshots. Asking for help is the strong choice, not the weak one.',
          ],
          image:        '/explorer-assets/future-skills/l16-s4-block-report-tell.png',
          imageCaption: 'Three actions, in order: Block. Report. Tell a trusted adult. You don\'t have to handle this alone — and you shouldn\'t try.',
          vocab: [
            { word: 'block',         definition: 'Use a platform\'s tool to stop someone from contacting you or seeing your content. Available on every major app.', audioPrompt: 'Block — use a platform\'s tool to stop someone from contacting you or seeing your content. Available on every major app.' },
            { word: 'trusted adult', definition: 'A grown-up you can rely on — parents, teachers, school counselors. They have tools and authority you don\'t.', audioPrompt: 'Trusted adult — a grown-up you can rely on: parents, teachers, school counselors. They have tools and authority you don\'t.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Bystanders vs Upstanders',
          paragraphs: [
            'A bystander sees bullying and does nothing. An upstander sees it and does something — anything — to help.',
            'Research shows that when even ONE person speaks up, the situation almost always improves. One voice matters more than people realize.',
          ],
          image:        '/explorer-assets/future-skills/l16-s5-bystander-upstander.png',
          imageCaption: 'Watching = bystander. Acting = upstander. One person speaking up can shift the whole situation.',
          vocab: [
            { word: 'bystander', definition: 'Someone who sees something happen but doesn\'t get involved. Staying silent is a choice — it just often doesn\'t feel like one.', audioPrompt: 'Bystander — someone who sees something happen but doesn\'t get involved. Staying silent is a choice; it just often doesn\'t feel like one.' },
            { word: 'upstander', definition: 'Someone who sees harm happen and takes action — any action — to help. Doesn\'t require courage to confront. Just a choice to do something.', audioPrompt: 'Upstander — someone who sees harm happen and takes action, any action, to help. Doesn\'t require courage to confront. Just a choice to do something.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Small Acts That Help',
          paragraphs: [
            'You don\'t have to confront the bully. Smaller acts work too.',
            'Send a private "are you okay?" message. Refuse to like or share mean content. Tell a trusted adult what you saw. Any of these counts.',
          ],
          image:        '/explorer-assets/future-skills/l16-s6-small-acts.png',
          imageCaption: 'Being an upstander doesn\'t mean being a hero. Small, quiet acts of help count — and they add up.',
          vocab: [
            { word: 'check-in', definition: 'A private message asking if someone is okay. Small, easy, and one of the most powerful things an upstander can do.', audioPrompt: 'Check-in — a private message asking if someone is okay. Small, easy, and one of the most powerful things an upstander can do.' },
            { word: 'empathy',  definition: 'Understanding and caring about how someone else feels. The foundation of every upstander action.', audioPrompt: 'Empathy — understanding and caring about how someone else feels. The foundation of every upstander action.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each action, then decide: is it an Upstander response or a Bystander response?`,
          guideText:     `An upstander sees something wrong and chooses to do something — even something small. A bystander sees it and does nothing. Both are choices. Which actions below show an upstander?`,
          columnHeaders: [`The Action`, `Upstander or Bystander?`],
          items: [
            { image: 'l16-game-private-message.png', label: `Seeing a mean post about a classmate and sending them a private message to check in and let them know you care.`,                    correctMatch: 'upstander', objectPosition: 'center 50%', matchPhrase: `Upstander! A private message to the person being targeted — even just "I saw what happened, I think it was unfair, are you okay?" — is a genuine act of support. It doesn't require confronting anyone or posting publicly. It simply lets the targeted person know they're not invisible and not alone. Research shows that knowing someone cares significantly reduces the harm caused by bullying. Small actions like this matter more than they look.` },
            { image: 'l16-game-scroll-past.png',     label: `Seeing a mean post about a classmate and scrolling past without doing or saying anything.`,                                          correctMatch: 'bystander', objectPosition: 'center 50%', matchPhrase: `Bystander. Scrolling past without doing anything is the default — and it's also a choice. It doesn't make you responsible for what happened, but it means a chance to help was passed over. The good news is that every time you see something similar in the future, you have a new choice available. You can check in with the person privately, refuse to like or share the content, or tell a trusted adult. Upstander habits develop over time, one small decision at a time.` },
            { image: 'l16-game-tell-adult.png',      label: `Telling a trusted adult when you see someone being harassed online, even if it feels a bit awkward.`,                                correctMatch: 'upstander', objectPosition: 'center 50%', matchPhrase: `Upstander! Telling a trusted adult — a parent, teacher, or school counselor — is one of the most effective things a bystander can do. Adults have tools and authority that students don't, including the ability to contact the school, reach out to parents, or report to platforms. It might feel awkward, but bringing evidence of what you saw to an adult who can act on it is a genuine act of courage and care. You don't have to fix everything yourself — you just have to make sure the right person knows.` },
            { image: 'l16-game-join-in.png',          label: `Liking other people's mean comments about someone so you fit in with the group.`,                                                   correctMatch: 'bystander', objectPosition: 'center 50%', matchPhrase: `Bystander — and a step toward making things worse. Liking mean content amplifies it. Every like tells the algorithm to show it to more people, and tells the person doing the bullying that their behavior has an audience. It also signals to the targeted person that more people are joining in. Not liking or sharing mean content is itself a quiet act of not participating — and one of the easiest ways to avoid contributing to harm online.` },
          ],
          buckets: [
            { id: 'upstander', label: `🌟 Upstander`, color: '#34D399' },
            { id: 'bystander', label: `😶 Bystander`, color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about cyberbullying and how to handle it. Answer all 6 questions to earn your Upstander badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What makes cyberbullying different from traditional bullying?`,
              options:      [`Cyberbullying is less serious than traditional bullying`, `It follows you home, can reach unlimited people instantly, and the evidence is permanent`, `Cyberbullying is easier to stop because it's online`, `Traditional bullying has worse effects on mental health`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What should you do first if you're being cyberbullied?`,
              options:      [`Post publicly about what's happening to get sympathy`, `Don't respond, document with screenshots, then block and report`, `Delete all your social media accounts`, `Respond firmly to show you won't be pushed around`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the role of an "upstander" when they see cyberbullying happening?`,
              options:      [`Watch what happens without getting involved`, `Like the posts to stay in the loop`, `Speak up to defend the target or report what they saw to a trusted adult`, `Share the content to let more people know`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Bystanders who choose to speak up when they see bullying can help stop it — one brave voice really does make a difference.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Someone who sees bullying and chooses to speak up and help rather than do nothing is called an ___.`,
              options:      [`upstander`, `bystander`, `reporter`, `moderator`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is cyberbullying harder to escape than traditional bullying?`,
              options:      [`It only happens at school during school hours`, `It follows you home, can happen at any hour, and can reach large numbers of people instantly`, `It always involves anonymous strangers`, `It only affects older teenagers`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for "how to be an upstander online" — there are great guides with specific scripts and scenarios you can practice. Knowing what you'd say before you're in the moment makes it much easier to act when it counts.`,
          familyAdventure: `Have an open family conversation about online experiences. Has anyone ever seen something online that felt cruel? Has anyone been on the receiving end of something hurtful? What did you do, or wish you had done? Share honestly and without judgment, and agree together on what your family will do if anyone is ever bullied or witnesses bullying.`,
          creativePrompt:  `Write three "upstander scripts" — one for each of these situations: (1) A classmate has a mean comment posted under their photo. (2) Someone is spreading a rumor about a friend in a group chat. (3) A gaming friend is being deliberately excluded and mocked. For each one, write exactly what you'd say — to the target privately, to the group publicly, or to an adult. Practice them out loud. It helps more than you'd expect.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'upstander',
          badgeName: `Upstander`,
          message:   `Brilliant work, {name}! You now know what cyberbullying is, what to do if it's happening to you, and how speaking up — in any way that feels right — can genuinely help someone who's being targeted. The digital world needs more upstanders. You're now one of them. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l16_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L16] Loaded: "Cyberbullying and How to Handle It" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l16-s1-targeted-arrows.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-s2-follows-home.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-s3-screenshot-evidence.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-s4-block-report-tell.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-s5-bystander-upstander.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-s6-small-acts.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L16] targeted-arrows: ${r1.ok}, follows-home: ${r2.ok}, screenshot-evidence: ${r3.ok}, block-report-tell: ${r4.ok}, bystander-upstander: ${r5.ok}, small-acts: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L16] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l16_screens;
