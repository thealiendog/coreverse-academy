// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L04 — Rights and Responsibilities
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Civ.7.K-2 / D2.Civ.10.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L04 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-04`,
      title: `Rights and Responsibilities`,
      duration: 12,
      xpReward: 50,
      badge: `rights-responsibilities-explorer`,
      badgeName: `Rights and Responsibilities Explorer`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we learn two big words that work together. Rights and responsibilities. Rights are what you should get. Responsibilities are what you should do. Both matter. Let's go.`,
          headline: `Rights and Responsibilities`,
          subtitle: `What you should get and what you should do`,
          visual: `/explorer-assets/social-studies/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Sides of the Same Coin`,
          paragraphs: [
            `Two big words today. Rights and responsibilities. They are like two sides of a coin. You cannot have one without the other.`,
            `A right is something every person should get. A responsibility is something every person should do. Together they help communities work well.`,
          ],
          image: `/explorer-assets/social-studies/l04-s1-two-sides.webp`,
          imageCaption: `Rights and responsibilities work together like two sides of a coin.`,
          vocab: [
            { word: `right`, definition: `Something every person should get.`,
              audioPrompt: `A right is something every person should get, {name}. Being safe. Being treated fairly. Going to school. Rights belong to all people. You do not have to earn them.` },
            { word: `responsibility`, definition: `Something you should do for yourself or others.`,
              audioPrompt: `A responsibility is something you should do, {name}. Like being honest. Or being kind. Or helping at home. Responsibilities make you a good person.` },
            { word: `but`, definition: `A word that shows a difference.`,
              audioPrompt: `But is a word that shows a difference, {name}. Rights are what you get. But responsibilities are what you do. They are different. But they work together.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your Rights`,
          paragraphs: [
            `Every kid has rights. Even you, {name}. You have the right to be safe. The right to go to school. The right to be treated fairly.`,
            `You have the right to be heard. Your feelings matter. You have the right to be yourself. To like what you like. Rights belong to you.`,
          ],
          image: `/explorer-assets/social-studies/l04-s2-rights.webp`,
          imageCaption: `Your rights: be safe, learn, be treated fairly, be yourself.`,
          vocab: [
            { word: `be safe`, definition: `Not being hurt or scared.`,
              audioPrompt: `Be safe means not being hurt or scared, {name}. Every kid has the right to be safe. At home. At school. Outside. If you do not feel safe, tell a trusted adult.` },
            { word: `learn`, definition: `To grow your knowledge.`,
              audioPrompt: `To learn means to grow your knowledge, {name}. Every kid has the right to learn. Going to school is a right. Reading is a right. Asking questions is a right.` },
            { word: `be yourself`, definition: `To be who you really are.`,
              audioPrompt: `Be yourself means be who you really are, {name}. Every person has the right to be themselves. To like what they like. To dress how they dress. To be different.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rights Are Protected`,
          paragraphs: [
            `Rights are not just nice ideas. They are protected by laws and by people.`,
            `If someone hurts you, tell a trusted adult. Parents, teachers, doctors. They will help. Police protect rights too. Adults are supposed to keep kids safe.`,
          ],
          image: `/explorer-assets/social-studies/l04-s3-protect-rights.webp`,
          imageCaption: `Laws and trusted adults protect your rights.`,
          vocab: [
            { word: `protect`, definition: `To keep something safe.`,
              audioPrompt: `To protect means to keep safe, {name}. Laws protect rights. Adults protect kids. Police protect people. Many people work to make sure your rights are real.` },
            { word: `trusted adult`, definition: `A grown-up you feel safe with.`,
              audioPrompt: `A trusted adult is a grown-up you feel safe with, {name}. Parents. Teachers. Grandparents. Doctors. If something feels wrong, tell a trusted adult. They will help.` },
            { word: `tell`, definition: `To say what happened.`,
              audioPrompt: `To tell means to say what happened, {name}. If someone hurts you or scares you, tell a trusted adult. Telling is brave. It is the right thing to do.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Responsibilities`,
          paragraphs: [
            `Now the other side of the coin. Your responsibilities. Things you should do.`,
            `Be honest. Tell the truth. Be kind to others. Help at home. Follow rules. Care for yourself. Try your best at school. These make you a good person.`,
          ],
          image: `/explorer-assets/social-studies/l04-s4-responsibilities.webp`,
          imageCaption: `Your responsibilities: be honest, kind, helpful. Follow rules. Care for yourself.`,
          vocab: [
            { word: `honest`, definition: `Telling the truth.`,
              audioPrompt: `Honest means telling the truth, {name}. Being honest is a big responsibility. People trust honest people. Even when the truth is hard, telling it is the right thing.` },
            { word: `kind`, definition: `Treating others nicely.`,
              audioPrompt: `Kind means treating others nicely, {name}. Being kind is a responsibility for everyone. A kind word. A helping hand. Caring about others. Kindness costs nothing.` },
            { word: `help`, definition: `To do something for someone else.`,
              audioPrompt: `To help means to do something for someone, {name}. Help at home. Help your friends. Help your community. Helping others is one of the best things you can do.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Treating Others Well`,
          paragraphs: [
            `One big responsibility is treating people well. Use the golden rule. Treat others how you want to be treated.`,
            `Share when you can. Include kids who feel left out. Listen when others talk. Say sorry when you make a mistake. Stand up for kids being bullied. Tell an adult.`,
          ],
          image: `/explorer-assets/social-studies/l04-s5-treating-others.webp`,
          imageCaption: `Treat others how you want to be treated. The golden rule.`,
          vocab: [
            { word: `golden rule`, definition: `Treat others how you want to be treated.`,
              audioPrompt: `The golden rule says treat others how you want to be treated, {name}. If you want kindness, give kindness. If you want fairness, be fair. It is one of the best rules ever.` },
            { word: `include`, definition: `To let someone join in.`,
              audioPrompt: `To include means to let someone join in, {name}. Include kids who feel left out. Ask them to play. Sit with them at lunch. Being included feels good. Everyone deserves it.` },
            { word: `sorry`, definition: `What you say when you made a mistake.`,
              audioPrompt: `Sorry is what you say when you made a mistake, {name}. Saying sorry is brave. It means you noticed. It means you care. It helps fix what went wrong.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Both Matter Together`,
          paragraphs: [
            `Here is the big idea. Rights and responsibilities work together. You cannot have a healthy community with just one.`,
            `If everyone gets rights but no one does responsibilities, things fall apart. If everyone does responsibilities but no one has rights, that is not fair. Both matter. Always.`,
          ],
          image: `/explorer-assets/social-studies/l04-s6-both-matter.webp`,
          imageCaption: `Both rights and responsibilities make a healthy community.`,
          vocab: [
            { word: `together`, definition: `Working as a pair.`,
              audioPrompt: `Together means working as a pair, {name}. Rights and responsibilities work together. You cannot have one without the other. Both make a community healthy and fair.` },
            { word: `healthy`, definition: `Working well. A healthy community is one where people thrive.`,
              audioPrompt: `Healthy means working well, {name}. A healthy community has both rights and responsibilities. People are safe. People are kind. People help each other. That is healthy.` },
            { word: `matter`, definition: `To be important.`,
              audioPrompt: `Matter means to be important, {name}. Rights matter. Responsibilities matter. You matter. Every person matters. Treating each other well makes the world better.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each one, {name}. Is it a right (something you should get) or a responsibility (something you should do)?`,
          buckets: [
            { id: `right`,          label: `Right`,          color: `#F472B6` },
            { id: `responsibility`, label: `Responsibility`, color: `#34D399` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `Being safe at home`,
              matchPhrase: `Yes! Being safe is a right. Every kid should get it.`, correctMatch: `right` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `Going to school`,
              matchPhrase: `Right! Going to school is a right for every kid.`, correctMatch: `right` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Being treated fairly`,
              matchPhrase: `Yes! Fair treatment is a right. Everyone deserves it.`, correctMatch: `right` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Being yourself`,
              matchPhrase: `Right! Being you is a right. You can like what you like.`, correctMatch: `right` },
            { id: `l04-g5`, image: `l04-game-5.webp`, label: `Telling the truth`,
              matchPhrase: `Yes! Being honest is a responsibility. It is what you should do.`, correctMatch: `responsibility` },
            { id: `l04-g6`, image: `l04-game-6.webp`, label: `Being kind to others`,
              matchPhrase: `Right! Kindness is a responsibility for everyone.`, correctMatch: `responsibility` },
            { id: `l04-g7`, image: `l04-game-7.webp`, label: `Helping at home`,
              matchPhrase: `Yes! Helping is a responsibility. It is something you do.`, correctMatch: `responsibility` },
            { id: `l04-g8`, image: `l04-game-8.webp`, label: `Following the rules`,
              matchPhrase: `Right! Following rules is a responsibility. It keeps everyone safe.`, correctMatch: `responsibility` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What is a right?`,
              options: [`A type of toy`, `Something every person should get`, `Only for adults`, `A kind of game`],
              correctIndex: 1,
              explanation: `A right is something every person should get. Like being safe and going to school.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `What is a responsibility?`,
              options: [`A type of food`, `Something you should do for yourself or others`, `Only for kids`, `A homework book`],
              correctIndex: 1,
              explanation: `A responsibility is something you should do. Like being honest, kind, and helpful.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `Who has basic rights?`,
              options: [`Only kids`, `Every person`, `Only adults`, `Only some people`],
              correctIndex: 1,
              explanation: `Every person! Rights belong to all people. No matter how old or where they are from.` },
            { id: `l04-q4`, format: `true-false`,
              question: `The golden rule is: treat others how you want to be treated.`,
              correctAnswer: true,
              explanation: `True! The golden rule. If you want kindness, give kindness. If you want fairness, be fair.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `If something is wrong, tell a ___ adult.`,
              options: [`trusted`, `tall`, `loud`, `funny`],
              correctIndex: 0,
              explanation: `Trusted! Trusted adults help protect your rights. Parents, teachers, doctors.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `What happens when rights and responsibilities work together?`,
              options: [`Things fall apart`, `Communities are healthy`, `Nothing changes`, `Only kids benefit`],
              correctIndex: 1,
              explanation: `Healthy communities! When everyone has rights AND does responsibilities, things work well for everyone.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Long ago, many people did not have basic rights. Brave people fought to change that. They wrote new laws. They marched. They spoke up. Each generation makes rights more fair. The work is not done. Maybe you will help too.`,
          familyAdventure: `Make a family list together. On one side, write 5 RIGHTS every family member has (to be safe, to be heard, to be loved, to be themselves, to learn). On the other side, write 5 RESPONSIBILITIES (be kind, be honest, help out, share, take care of stuff). Hang it where you can see it.`,
          creativePrompt: {
            intro: `Draw a balance scale with two sides. On one side, draw your 3 favorite rights. On the other, draw 3 of your responsibilities. Make them balance.`,
            floor: `Write 3 sentences. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why both sides matter to you.`,
            frames: [
              `One right I have is ___.`,
              `One responsibility I have is ___.`,
              `Both matter because ___.`,
              `I help others by ___.`,
              `Adults protect my right to ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You learned about rights and responsibilities. Rights are what every person should get. Responsibilities are what you should do. Both work together. Both matter. You deserve good things. You also give good things. That is how good communities work. Atlas the Bear.`,
          badge: `rights-responsibilities-explorer`,
          badgeName: `Rights and Responsibilities Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L04] Loaded: "Rights and Responsibilities" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
