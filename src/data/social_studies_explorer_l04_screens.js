// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L04 — Rights and Responsibilities
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Civ.7.K-2 / D2.Civ.10.K-2 (rights and responsibilities)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L04 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-04`,
      title:     `Rights and Responsibilities`,
      duration:  12,
      xpReward:  50,
      badge:     `rights-responsibilities-explorer`,
      badgeName: `Rights and Responsibilities Explorer`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Atlas here. Today we look at TWO things every person has — RIGHTS and RESPONSIBILITIES. Rights are things you DESERVE just because you're a person. Responsibilities are things you DO for yourself and others. They go together — like two sides of the same coin. Understanding both is how we build fair, healthy communities. Let's begin.`,
          headline: `Rights and Responsibilities`,
          subtitle: `What you DESERVE — and what you DO for yourself and others`,
          visual: `/explorer-assets/social-studies/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Sides of the Same Coin`,
          paragraphs: [
            `In every community, two big ideas work TOGETHER — RIGHTS and RESPONSIBILITIES.`,
            `Think of them like two sides of the same coin. You can't have one without the other. RIGHTS are things every person DESERVES — things they should be able to have, do, or be. RESPONSIBILITIES are things every person SHOULD DO — actions that help themselves and others. When everyone enjoys their rights AND does their responsibilities, communities work well. When one side is missing, things fall apart. Today we'll explore both — and how they fit together.`,
          ],
          image: `/explorer-assets/social-studies/l04-s1-two-sides.webp`,
          imageCaption: `Rights + responsibilities = two sides of the same coin. Both matter. Both make communities work.`,
          vocab: [
            { word: `rights`,         definition: `Things EVERY PERSON deserves to have. RIGHTS are about what's owed TO you.`,
              audioPrompt: `Rights, {name}, are things every person deserves to have. Being safe. Being treated fairly. Being able to learn. Being free to be yourself. Rights are about what's owed TO you. You don't have to earn them — you have them just because you're a person. Rights protect people from being treated badly.` },
            { word: `responsibilities`, definition: `Things YOU should DO for yourself and others. RESPONSIBILITIES are about what you OWE.`,
              audioPrompt: `Responsibilities, {name}, are things you should do for yourself and others. Being honest. Helping when you can. Treating people kindly. Following rules. Responsibilities are about what you OWE — to your community and to yourself. They're things you DO, not things given to you. They make you a good citizen and a good person.` },
            { word: `coin`,           definition: `Two sides connected. Rights and responsibilities are like a COIN — both sides matter.`,
              audioPrompt: `A coin, {name}, has two sides connected. Rights and responsibilities are like a coin — both sides matter. You can't really have one without the other. If everyone enjoyed rights but did no responsibilities, the community would fall apart. If everyone did responsibilities but had no rights, people would be treated unfairly. Both together — that's healthy.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Are YOUR Rights?`,
          paragraphs: [
            `Every kid — including YOU — has BASIC RIGHTS. These are things you should be able to have, no matter who you are.`,
            `You have the RIGHT to BE SAFE. From being hurt. From being scared. From being treated badly. You have the RIGHT to LEARN. To go to school. To get the education you need. You have the RIGHT to BE TREATED FAIRLY. Same as everyone else, not worse because of how you look or where you're from. You have the RIGHT to be HEARD. Your thoughts and feelings matter. You have the RIGHT to BE YOURSELF. To like what you like. To grow into who you are. These are YOUR rights. Always.`,
          ],
          image: `/explorer-assets/social-studies/l04-s2-rights.webp`,
          imageCaption: `Your rights: be safe, learn, be treated fairly, be heard, be yourself. Yours just for being a person.`,
          vocab: [
            { word: `right to be safe`, definition: `Every kid has the RIGHT to be SAFE — from harm, fear, and being treated badly.`,
              audioPrompt: `Right to be safe, {name}, is one of the most important rights every kid has. From being hurt physically. From being scared. From being treated badly. Adults — parents, teachers, leaders — have a responsibility to keep kids safe. If you don't feel safe somewhere, that's a problem. Telling a trusted adult about anything that makes you feel unsafe is the right thing to do.` },
            { word: `right to learn`, definition: `Every kid has the RIGHT to LEARN — to go to school and grow their mind.`,
              audioPrompt: `Right to learn, {name}, is the right every kid should have. To go to school. To learn to read, write, and think. To explore the world through education. In some places, kids don't have this right — but they should. Learning is how you grow into who you can be. Every kid deserves the chance.` },
            { word: `right to be yourself`, definition: `Every person has the RIGHT to BE WHO THEY ARE — without being shamed or made small.`,
              audioPrompt: `Right to be yourself, {name}, means every person has the right to be who they are. To like what they like. To dress how they dress. To be themselves without being shamed or made to feel small. People come in all kinds — different colors, religions, families, abilities, personalities. Each person deserves to be themselves. That's a fundamental right.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rights Are PROTECTED`,
          paragraphs: [
            `Rights aren't just nice ideas — they're PROTECTED by LAWS and by people.`,
            `In many countries, laws say what rights people have. The US has a CONSTITUTION — a really important document that lists basic rights. There are LAWS that protect kids from being hurt. LAWS that say everyone should be treated fairly. LAWS that give all kids the right to school. ADULTS — parents, teachers, police, judges — have the responsibility to protect kids' rights. If someone tries to take your rights away, you can tell a trusted adult. The community works together to make sure rights are real, not just words.`,
          ],
          image: `/explorer-assets/social-studies/l04-s3-protect-rights.webp`,
          imageCaption: `Rights are PROTECTED by laws AND by caring adults. Trusted adults defend kids' rights.`,
          vocab: [
            { word: `protect`,        definition: `To DEFEND from harm. Laws and adults PROTECT rights.`,
              audioPrompt: `To protect, {name}, is to defend from harm. Laws and adults protect rights. Police protect us from crime. Teachers protect kids in school. Parents protect their families. Judges protect people from being treated unfairly. Many people work to make sure rights are protected — that they're not just nice ideas, but real things in our daily lives.` },
            { word: `constitution`,   definition: `A SPECIAL DOCUMENT listing basic rights. The US CONSTITUTION protects American rights.`,
              audioPrompt: `A constitution, {name}, is a special document listing basic rights and rules. The US Constitution is one of the most famous. It was written more than 200 years ago and still helps protect Americans today. It says what rights people have and what government can and can't do. Many countries have constitutions. They're like the rule book for a whole country.` },
            { word: `trusted adult`,  definition: `An ADULT you can RELY ON. Tell a TRUSTED ADULT if your rights are being hurt.`,
              audioPrompt: `A trusted adult, {name}, is an adult you can rely on. Parents, teachers, grandparents, counselors, doctors. If someone is hurting you, scaring you, or trying to take away your rights, tell a trusted adult. They can help. They have the responsibility to keep you safe. Knowing which adults you trust is important. They're your support team in the world.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Are YOUR Responsibilities?`,
          paragraphs: [
            `Now for the OTHER side — YOUR RESPONSIBILITIES. The things YOU should DO.`,
            `Even kids have responsibilities. You have a RESPONSIBILITY to BE HONEST — telling the truth instead of lying. To BE KIND — treating others nicely. To HELP when you can — at home, at school, with friends. To FOLLOW RULES — at home, school, and in public. To CARE FOR YOURSELF — eat well, sleep enough, take care of your body. To LEARN — putting effort into school and growing your mind. These responsibilities aren't punishments. They're how YOU become a person you can be proud of. They make you a good community member.`,
          ],
          image: `/explorer-assets/social-studies/l04-s4-responsibilities.webp`,
          imageCaption: `Your responsibilities: be honest, kind, helpful, follow rules, care for yourself, learn. How you grow into someone good.`,
          vocab: [
            { word: `honest`,         definition: `Telling the TRUTH. Being HONEST is a key responsibility.`,
              audioPrompt: `Honest, {name}, means telling the truth. Being honest is a key responsibility. It means not lying. It means saying what's true even when it's hard. Honesty builds trust. People trust honest people. They share important things with them. They depend on them. Honest people have stronger friendships and better lives. Honesty is one of the best habits you can build.` },
            { word: `kind`,           definition: `Treating others NICELY. Being KIND is a responsibility we all share.`,
              audioPrompt: `Kind, {name}, means treating others nicely. Being kind is a responsibility we all share. Saying nice words. Including people. Helping when someone needs help. Caring about others' feelings. Kindness makes the world better. It costs nothing. It changes everything. Kid kindness matters as much as adult kindness.` },
            { word: `care for yourself`, definition: `Taking GOOD CARE of YOUR body, mind, and spirit. CARING FOR YOURSELF is a responsibility too.`,
              audioPrompt: `Care for yourself, {name}, means taking good care of your body, mind, and spirit. Caring for yourself is a responsibility too. Eating well. Sleeping enough. Brushing teeth. Washing hands. Taking breaks when tired. Asking for help when sad. Self-care isn't selfish — it's smart. You can't take care of others if you don't take care of yourself first.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Treating OTHERS Well`,
          paragraphs: [
            `One of the BIGGEST responsibilities — TREATING OTHER PEOPLE WELL.`,
            `That means: TREAT others how you'd want to be treated. SHARE when you can. INCLUDE others — don't leave people out. RESPECT differences — people come in many kinds. LISTEN when others speak. HELP when you see someone struggling. APOLOGIZE when you make a mistake. STAND UP when you see someone being bullied — get a trusted adult, or say something kind. Treating others well isn't always easy. But it's the heart of being a good person. When you treat others well, you make the world brighter — even if just for one moment.`,
          ],
          image: `/explorer-assets/social-studies/l04-s5-treating-others.webp`,
          imageCaption: `Treat others well: share, include, respect, listen, help, apologize, stand up for kindness.`,
          vocab: [
            { word: `treat-others-how-you-want`, definition: `The GOLDEN RULE — treat others how you'd want to be treated.`,
              audioPrompt: `Treat others how you want to be treated, {name} — this is called the Golden Rule. Almost every culture and religion has some version of it. The idea is simple: imagine yourself in the other person's shoes. How would you want to be treated? That's how you should treat them. The Golden Rule is one of the most powerful ideas humans have.` },
            { word: `respect differences`, definition: `Accepting that PEOPLE ARE DIFFERENT — and that's okay.`,
              audioPrompt: `Respect differences, {name}, means accepting that people are different and that's okay. People have different skin, different families, different religions, different abilities, different personalities, different ways of doing things. None of those differences make anyone less valuable. Respecting differences is one of the most important things you can do in a community.` },
            { word: `stand up`,       definition: `To SPEAK or ACT for what's right. Standing UP for others is brave.`,
              audioPrompt: `To stand up, {name}, is to speak or act for what's right. Standing up for others is brave. If you see someone being bullied or treated unfairly, you can stand up — by telling a trusted adult, by saying something kind to the person being bullied, or by being a friend. You don't have to be loud or aggressive. Just supportive. Even small acts of standing up matter.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Both Matter, Always`,
          paragraphs: [
            `Here's the BIG idea — RIGHTS and RESPONSIBILITIES WORK TOGETHER.`,
            `If everyone enjoyed their rights but did NO responsibilities, communities would fall apart. People would be safe and free — but no one would help each other, be honest, or care. If everyone did their responsibilities but had NO rights, people would be working hard for unfair situations. Real fairness comes when BOTH work together. Communities are healthiest when EVERYONE has rights AND EVERYONE does their responsibilities. That's what we're aiming for — a world where everyone is safe, free, learning, AND kind, helpful, and honest. Both. Always.`,
          ],
          image: `/explorer-assets/social-studies/l04-s6-both-matter.webp`,
          imageCaption: `Both rights AND responsibilities = healthy community. Everyone enjoys their rights AND does their part.`,
          vocab: [
            { word: `work together`,  definition: `Function as a PAIR. Rights and responsibilities WORK TOGETHER.`,
              audioPrompt: `Work together, {name}, means function as a pair. Rights and responsibilities work together. You can't really have one without the other. If you want to enjoy your right to be heard, you have a responsibility to listen to others too. If you want fair treatment, you have to be fair to others. They're connected. Healthy communities have both flowing back and forth.` },
            { word: `fairness`,       definition: `Treating people EQUALLY. FAIRNESS comes when BOTH rights and responsibilities are real.`,
              audioPrompt: `Fairness, {name}, means treating people equally. Real fairness comes when BOTH rights and responsibilities are real. When everyone has rights AND does their responsibilities, that's when communities feel fair. When one is missing, fairness breaks down. Working together for fairness is one of the biggest human projects.` },
            { word: `healthy community`, definition: `A COMMUNITY where people thrive together. Rights + responsibilities = HEALTHY COMMUNITIES.`,
              audioPrompt: `A healthy community, {name}, is a community where people thrive together. People feel safe. People are kind. People help each other. People grow. Healthy communities have both rights AND responsibilities working together. Everyone gets what they deserve. Everyone gives what they can. That's the goal. That's what we're building, one person at a time.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `EVERY person has BASIC RIGHTS — to be safe, to learn, to be treated fairly, to be themselves.`,
              matchPhrase: `Yes! Every person — no matter who they are or where they're from — has basic rights. To be safe. To learn. To be treated fairly. To be heard. To be themselves. Rights belong to everyone.`,
              correctMatch: `fact` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `RESPONSIBILITY matters — being honest, kind, helpful, and following rules makes you a good person.`,
              matchPhrase: `True! Responsibilities are what YOU do. Being honest. Being kind. Helping. Following rules. Caring for yourself. These actions make you a good community member and a person you can be proud of.`,
              correctMatch: `fact` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Only CERTAIN types of people deserve rights — others don't deserve any.`,
              matchPhrase: `Not at all! Every person deserves basic rights. No matter their age, race, religion, background, or anything else. Rights belong to all humans equally. That's what makes them rights.`,
              correctMatch: `myth` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Nobody has any RESPONSIBILITIES — we can all do whatever we want.`,
              matchPhrase: `Definitely not! Everyone has responsibilities. Even kids. To be honest. To be kind. To follow rules. To treat others well. Responsibilities are what make us good people and good communities.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What are RIGHTS?`,
              options: [`Toys you own`, `Things every person DESERVES to have — like being safe, learning, being treated fairly`, `Only for adults`, `Only on weekends`],
              correctIndex: 1,
              explanation: `Rights are things every person deserves to have. To be safe. To learn. To be treated fairly. To be heard. To be yourself. You don't earn rights — you have them just because you're a person.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `What are RESPONSIBILITIES?`,
              options: [`Things adults yell at you to do`, `Things YOU SHOULD DO — like be honest, kind, follow rules, treat others well`, `Only homework`, `Things only adults do`],
              correctIndex: 1,
              explanation: `Responsibilities are things you should do — for yourself and others. Be honest. Be kind. Help. Follow rules. Treat others well. They make you a good community member and a person you can be proud of.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `Who has BASIC RIGHTS?`,
              options: [`Only kids`, `EVERY PERSON — regardless of age, race, or background`, `Only adults`, `Only some people`],
              correctIndex: 1,
              explanation: `Every person! Rights belong to everyone. No matter their age, where they're from, what they look like. That's what makes them basic rights — they're for everyone equally.` },
            { id: `l04-q4`, format: `true-false`,
              question: `The GOLDEN RULE is: treat others how you'd want to be treated.`,
              correctAnswer: true,
              explanation: `True! The Golden Rule. Almost every culture has a version of it. The idea — imagine yourself in the other person's shoes. How would you want to be treated? That's how you should treat them.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `A ___ is a special document that lists basic rights. The US has one of these.`,
              options: [`constitution`, `cookie`, `umbrella`, `notebook`],
              correctIndex: 0,
              explanation: `Constitution! The US Constitution was written over 200 years ago and lists basic rights for Americans. Many countries have constitutions — special documents that protect people's rights.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `What happens when RIGHTS and RESPONSIBILITIES BOTH work together?`,
              options: [`Communities fall apart`, `Communities are HEALTHY — people are safe, free, AND kind, helpful, honest`, `Nothing changes`, `Only adults benefit`],
              correctIndex: 1,
              explanation: `Healthy communities! When everyone enjoys rights AND does their responsibilities, communities thrive. People are safe AND helpful. Free AND kind. That's the goal.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something powerful, {name}. Throughout history, brave people have FOUGHT to make sure rights are real for everyone. Long ago, some people had rights and others didn't. Kids couldn't go to school in many places. Some adults couldn't vote. Some people were treated badly because of their skin or religion. Over time, brave people stood up. Wrote new laws. Marched. Spoke out. Slowly, rights became more equal. The work isn't done — but each generation gets closer. Maybe you'll be one of the people who keeps making rights more fair. You're already learning about it now.`,
          familyAdventure: `Make a FAMILY RIGHTS and RESPONSIBILITIES list together. On one side of paper, write 5 RIGHTS every family member has (to be safe, to be heard, to be loved, to be themselves, to learn). On the other side, write 5 RESPONSIBILITIES every family member has (be kind, be honest, help out, share, take care of belongings). Talk about how rights and responsibilities work together in your family.`,
          creativePrompt: `Draw a SCALE with two sides. On one side, draw or write your TOP 3 RIGHTS (what you deserve). On the other side, your TOP 3 RESPONSIBILITIES (what you do). Make them BALANCE. Color the picture. Hang it where you can see it. Remember — both sides matter equally. You deserve good things AND you give good things.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Well done, {name}. You now understand RIGHTS and RESPONSIBILITIES. RIGHTS are things every person deserves — being safe, learning, being treated fairly, being yourself. RESPONSIBILITIES are things YOU do — being honest, kind, helpful, following rules. They go TOGETHER. They make communities healthy. You deserve good things — AND you give good things. That's what makes a great community member. — Atlas 🐻`,
          badge: `rights-responsibilities-explorer`,
          badgeName: `Rights and Responsibilities Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L04] Loaded: "Rights and Responsibilities" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
