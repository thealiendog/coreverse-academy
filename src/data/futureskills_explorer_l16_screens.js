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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Cyberbullying?`,
          paragraphs: [
            `Cyberbullying is the deliberate, repeated use of technology to harass, threaten, humiliate, or harm someone. The two key words are deliberate and repeated. A single unkind comment is hurtful — but it isn't cyberbullying. A pattern of targeted harm directed at the same person, over and over, is. The intention to hurt and the repetition together are what define it.`,
            `Cyberbullying takes many forms: sending mean or threatening messages, spreading rumors online, sharing embarrassing photos or videos without permission, deliberately excluding someone from online groups, impersonating someone to damage their reputation, and creating fake profiles or accounts to mock someone. It can happen across any platform — messaging apps, gaming platforms, social media, comment sections, or anywhere people interact online.`,
            `What makes cyberbullying different from a bad day online is the targeting. Someone who is cyberbullied isn't just experiencing general rudeness on the internet — they're being specifically, repeatedly singled out. That targeting changes the experience entirely. It creates a sense of being watched, followed, and unsafe in spaces that should feel normal. Understanding this distinction helps you recognize it clearly — whether it's happening to you, someone you know, or someone you witness online.`,
          ],
          image:        '/explorer-assets/future-skills/l16-magazine-what-is-cyberbullying.png',
          imageCaption: `What is cyberbullying — deliberate, repeated digital harm targeting a specific person across any platform`,
          vocab: [
            { word: `cyberbullying`, definition: `The deliberate, repeated use of technology to harass, threaten, humiliate, or harm someone — distinguished from one-time rudeness by its targeting and repetition.`,                audioPrompt: `Cyberbullying — the deliberate, repeated use of technology to harass, threaten, humiliate, or harm someone. Distinguished from one-time rudeness by its targeting and repetition.` },
            { word: `digital harm`,  definition: `Harm caused through digital tools and platforms — including mean messages, rumors, impersonation, and the sharing of embarrassing content without permission.`,                   audioPrompt: `Digital harm — harm caused through digital tools and platforms. Including mean messages, rumors, impersonation, and the sharing of embarrassing content without permission.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Why Cyberbullying Is Especially Hard`,
          paragraphs: [
            `Traditional bullying happens in specific places — a school hallway, a playground — and stops when you leave. Cyberbullying follows you home. It can appear on your phone at dinnertime, in the middle of the night, and during every quiet moment. There is no physical safe space where it can't reach you. This constant exposure is one of the things that makes it particularly exhausting and hard to cope with.`,
            `Cyberbullying can also happen in front of an audience. A mean comment posted publicly can be seen, liked, and shared by many people — amplifying the humiliation far beyond what any in-person incident could reach. Screenshots and posts are permanent: evidence of what happened can persist and be reshared long after the original moment. The person doing the harm can also hide behind anonymity, making it harder to confront or report, and harder for the target to make sense of what's happening and why.`,
            `Research consistently shows that cyberbullying is linked to higher rates of anxiety, sadness, and difficulty focusing than traditional bullying — likely because of this combination of constant access, public audiences, and permanence. None of this means it can't be addressed. It means understanding why it feels different is important — both for the people experiencing it and for the people around them who want to help. Knowing what you're dealing with is the first step to dealing with it effectively.`,
          ],
          image:        '/explorer-assets/future-skills/l16-magazine-why-hard.png',
          imageCaption: `Why cyberbullying is especially hard — it follows you home, can reach large audiences instantly, and the evidence is permanent`,
          vocab: [
            { word: `anonymity`,   definition: `Being able to act without revealing your identity — online anonymity makes it easier to say harmful things without accountability, which is one reason cyberbullying is harder to confront.`, audioPrompt: `Anonymity — being able to act without revealing your identity. Online anonymity makes it easier to say harmful things without accountability, which is one reason cyberbullying is harder to confront.` },
            { word: `permanence`,  definition: `The quality of lasting a long time — digital content is permanent in the sense that screenshots, backups, and archives mean it can survive deletion and resurface later.`,                  audioPrompt: `Permanence — the quality of lasting a long time. Digital content is permanent in the sense that screenshots, backups, and archives mean it can survive deletion and resurface later.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What To Do If It's Happening to You`,
          paragraphs: [
            `If you're being cyberbullied, the first and most important step is: don't respond. Responding often escalates the situation — it signals that the harassment is working, and it can make things worse. Instead, before you block or delete anything, take screenshots to document what's happening. Evidence matters if you need to report it to a platform, a school, or an adult who can help. Document first, then block.`,
            `After documenting, block the person on every platform where they're contacting you. Then report the behavior to the platform — every major social media site, gaming service, and messaging app has a reporting system designed for exactly this purpose. Reports don't always lead to immediate action, but they create a record and may result in the account being removed. You are not responsible for tolerating someone else's cruelty because reporting feels awkward.`,
            `The most important step is telling a trusted adult — a parent, teacher, school counselor, or other adult you feel safe with. Show them the documentation you've saved. Getting help is the strong choice, not the weak one. If the harassment includes threats of physical harm, it should be reported to school authorities or police. You don't have to handle any of this alone, and reaching out to someone who can actually help is exactly the right response.`,
          ],
          image:        '/explorer-assets/future-skills/l16-magazine-what-to-do.png',
          imageCaption: `What to do — document before deleting, block and report on the platform, and tell a trusted adult who can help`,
          vocab: [
            { word: `documentation`, definition: `Saving evidence of what happened — taking screenshots of messages or posts before blocking or deleting them, so there's a record that can be shown to adults or used in reports.`,               audioPrompt: `Documentation — saving evidence of what happened. Taking screenshots of messages or posts before blocking or deleting them, so there's a record that can be shown to adults or used in reports.` },
            { word: `trusted adult`, definition: `A parent, teacher, school counselor, or other adult in your life whom you feel safe telling about something serious — one of the most important resources when facing cyberbullying.`,    audioPrompt: `Trusted adult — a parent, teacher, school counselor, or other adult in your life whom you feel safe telling about something serious. One of the most important resources when facing cyberbullying.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Power of Bystanders`,
          paragraphs: [
            `Bystanders — people who witness bullying — have real power to change what happens next. Research consistently shows that when even one person chooses to speak up, the situation is much more likely to improve. Being an upstander doesn't always mean directly confronting the person doing the bullying. It can mean checking in privately with the person being targeted, refusing to like or share mean content, or letting a trusted adult know what you saw.`,
            `There are many ways to be an upstander, and you can choose what fits your situation. You might leave a kind comment that shifts the tone in a public space. You might send a private message letting the targeted person know they're not alone. You might take screenshots and bring them to a parent or teacher who can take action. What matters is the decision to do something rather than let it continue — and the choice of what to do is yours to make based on what feels right and safe.`,
            `Being an upstander gets easier with practice. Thinking ahead about what you'd say or do in different situations — before you're actually in one — makes it much easier to act when the moment arrives. Bullying tends to continue when it stays invisible. The simple act of telling a trusted adult what you witnessed breaks that silence. You don't have to solve everything alone, and you don't have to be fearless. You just have to care enough to do something.`,
          ],
          image:        '/explorer-assets/future-skills/l16-magazine-upstander.png',
          imageCaption: `The power of bystanders — speaking up, checking in, and refusing to participate can change the outcome for someone being targeted`,
          vocab: [
            { word: `upstander`, definition: `A person who witnesses bullying and chooses to take a positive action — defending the target, checking in with them, refusing to participate, or telling a trusted adult.`,                       audioPrompt: `Upstander — a person who witnesses bullying and chooses to take a positive action. Defending the target, checking in with them, refusing to participate, or telling a trusted adult.` },
            { word: `bystander`, definition: `A person who witnesses something happening but does not get involved — in bullying situations, choosing to move from bystander to upstander can make a real difference for the person targeted.`, audioPrompt: `Bystander — a person who witnesses something happening but does not get involved. In bullying situations, choosing to move from bystander to upstander can make a real difference for the person targeted.` },
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
    fetch('/explorer-assets/future-skills/l16-magazine-what-is-cyberbullying.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-magazine-why-hard.png',              { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-magazine-what-to-do.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l16-magazine-upstander.png',             { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L16] what-is-cyberbullying: ${r1.ok}, why-hard: ${r2.ok}, what-to-do: ${r3.ok}, upstander: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L16] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l16_screens;
