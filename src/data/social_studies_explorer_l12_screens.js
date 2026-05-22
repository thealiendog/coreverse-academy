// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L12 — Goods and Services
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Eco.3.K-2 / D2.Eco.5.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L12 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-12`,
      title: `Goods and Services`,
      duration: 12,
      xpReward: 50,
      badge: `goods-services-explorer`,
      badgeName: `Goods and Services Explorer`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Last time we learned needs and wants. Today we look at how we GET those things. Almost everything comes in two forms. Goods (things you touch) and services (help from people). Let's explore.`,
          headline: `Goods and Services`,
          subtitle: `The two kinds of things people give, get, and pay for`,
          visual: `/explorer-assets/social-studies/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Kinds of Things`,
          paragraphs: [
            `Look around. Almost everything in your life is a good or a service.`,
            `A good is something you can touch. An apple. A shirt. A toy. A book. A service is help from another person. A doctor checking you. A teacher teaching. A barber cutting hair. Both keep communities going.`,
          ],
          image: `/explorer-assets/social-studies/l12-s1-two-kinds.webp`,
          imageCaption: `Goods are things you can touch. Services are help from people.`,
          vocab: [
            { word: `good`, definition: `A physical thing you can touch.`,
              audioPrompt: `A good is a physical thing you can touch, {name}. An apple. A shirt. A bike. A book. You can pick it up. Hold it. Use it again and again. Goods are one of the two things people buy.` },
            { word: `service`, definition: `Help from another person using their skills.`,
              audioPrompt: `A service is help from another person, {name}. A doctor visit. A haircut. A teacher teaching. You do not end up with a thing. You end up with help. Services are the other thing people pay for.` },
            { word: `after`, definition: `Coming later in time.`,
              audioPrompt: `After means coming later in time, {name}. After a worker bakes bread, you can buy it. After a teacher teaches, you have learned. After helps us put events in order.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Goods: Things You Touch`,
          paragraphs: [
            `Goods come in many kinds. Food is goods. Apples, bread, cheese. Clothing is goods. Shirts, pants, shoes.`,
            `Toys are goods. Tools are goods. Bikes, cars, and houses are goods. Some goods get used up fast like food. Some last for years like a bike. All goods are physical. You can touch them.`,
          ],
          image: `/explorer-assets/social-studies/l12-s2-goods.webp`,
          imageCaption: `Goods: food, clothes, toys, tools. Things you can touch.`,
          vocab: [
            { word: `physical`, definition: `Something you can touch and hold.`,
              audioPrompt: `Physical means something you can touch, {name}. Goods are physical. You can pick them up. Hold them. Examine them. They take up space in your home. That is what makes goods different from services.` },
            { word: `used up`, definition: `When a good gets finished.`,
              audioPrompt: `Used up means a good gets finished, {name}. Food gets used up. You eat it and it is gone. Toilet paper gets used up. Some goods get used up fast. Others last for years.` },
            { word: `last`, definition: `To stay useful for a long time.`,
              audioPrompt: `To last means to stay useful for a long time, {name}. A bike can last years. A book can last decades. A house can last generations. Some goods last. Some get used up. Smart shoppers know the difference.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Services: Help from People`,
          paragraphs: [
            `Now services. Help from another person.`,
            `A doctor helps when you are sick. A teacher helps you learn. A bus driver takes you places. A plumber fixes pipes. A firefighter helps in fires. A waiter brings you food at a restaurant. Almost everyone with a job gives some kind of service.`,
          ],
          image: `/explorer-assets/social-studies/l12-s3-services.webp`,
          imageCaption: `Services: doctor, teacher, bus driver, plumber. People helping people.`,
          vocab: [
            { word: `help`, definition: `Doing something useful for someone else.`,
              audioPrompt: `Help means doing something useful for someone, {name}. Services are about help. A doctor helps you get better. A teacher helps you learn. Help is one of the oldest things humans do for each other.` },
            { word: `skill`, definition: `Something a person can do well.`,
              audioPrompt: `A skill is something a person can do well, {name}. Doctors have skill in medicine. Teachers have skill in helping kids learn. People use their skills to give services. Skills take time to build.` },
            { word: `job`, definition: `Work that someone does, often for money.`,
              audioPrompt: `A job is work that someone does, {name}. Often for money. Most jobs are about giving services. Some are about making goods. When you grow up, you might have a job too.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Producers and Consumers`,
          paragraphs: [
            `Two more important words. Producer and consumer.`,
            `A producer makes goods or gives services. A farmer who grows food is a producer. A teacher who teaches is a producer. A consumer uses goods or services. When you eat food, you are a consumer. Most adults are both.`,
          ],
          image: `/explorer-assets/social-studies/l12-s4-producers-consumers.webp`,
          imageCaption: `Producers make or give. Consumers use. Most adults do both.`,
          vocab: [
            { word: `producer`, definition: `A person who makes goods or gives services.`,
              audioPrompt: `A producer is a person who makes or gives, {name}. Farmers make food. Bakers make bread. Teachers give lessons. Doctors give care. Producers do work using their skills. Every community needs producers.` },
            { word: `consumer`, definition: `A person who uses goods or services.`,
              audioPrompt: `A consumer is a person who uses, {name}. When you eat food, you are a consumer. When you wear clothes, you are a consumer. We are all consumers every day. Even kids. Even babies.` },
            { word: `both`, definition: `Doing two things at once.`,
              audioPrompt: `Both means doing two things at once, {name}. Most adults are both producers and consumers. They work at a job. Then they buy what they need with the money. The cycle keeps going.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Trading and Buying`,
          paragraphs: [
            `Producers and consumers meet through trading. Long ago, people traded directly. Eggs for shoes. This is called barter.`,
            `Today, we mostly use money. The farmer sells food for money. With that money, the farmer buys other things. Both sides agree. Both sides benefit. The seller gets money. The buyer gets goods or services.`,
          ],
          image: `/explorer-assets/social-studies/l12-s5-exchange.webp`,
          imageCaption: `Trade: today we use money. Buyer gets goods. Seller gets money. Both happy.`,
          vocab: [
            { word: `trade`, definition: `When two people give each other something.`,
              audioPrompt: `To trade means two people give each other something, {name}. Most trade today uses money. Customer gives money. Seller gives goods or services. Both sides agree. Millions of trades happen every day.` },
            { word: `money`, definition: `What we use to buy goods and services.`,
              audioPrompt: `Money is what we use to buy things, {name}. It makes trading easier than barter. The farmer sells eggs for money. Then uses the money to buy other things. Money is one of humanity's best inventions.` },
            { word: `barter`, definition: `Trading without money. Long ago people did this.`,
              audioPrompt: `Barter is trading without money, {name}. Long ago, people bartered. Eggs for shoes. Tools for a doctor's help. Barter still happens sometimes. But money is much easier for big communities.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `We're All Connected`,
          paragraphs: [
            `Here is the big idea, {name}. The whole community is connected through goods and services.`,
            `Think about your morning. The bread you ate was made by a baker. The clothes you wear were made by workers. The bus driver took you to school. The teacher taught you. Thousands of people helped you start your day. That is the economy.`,
          ],
          image: `/explorer-assets/social-studies/l12-s6-everyone-both.webp`,
          imageCaption: `The economy. Producers and consumers connected through goods and services.`,
          vocab: [
            { word: `economy`, definition: `The whole system of goods, services, and money.`,
              audioPrompt: `The economy is the whole system, {name}. Goods, services, money, work. All connected. Every community has an economy. Big or small. It is how communities meet their needs and wants.` },
            { word: `connected`, definition: `Linked to other people.`,
              audioPrompt: `Connected means linked to other people, {name}. Through the economy, we are all connected. To the farmer who grew our food. To the worker who made our clothes. To the driver who delivered our books.` },
            { word: `cycle`, definition: `Something that goes around and around.`,
              audioPrompt: `A cycle goes around and around, {name}. The economy is a cycle. Make. Sell. Buy. Use. Make again. Money moves between people. Goods flow. Services help. The cycle never stops.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each one, {name}. Is it a good or a service?`,
          buckets: [
            { id: `good`,    label: `Good`,    color: `#FBBF24` },
            { id: `service`, label: `Service`, color: `#34D399` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `A loaf of bread`,
              matchPhrase: `Yes! Bread is a good. Physical thing you can touch and eat.`, correctMatch: `good` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `A pair of shoes`,
              matchPhrase: `Right! Shoes are a good. You can hold them and wear them.`, correctMatch: `good` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `A bike`,
              matchPhrase: `Yes! A bike is a good. Physical and lasts for years.`, correctMatch: `good` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `A toy car`,
              matchPhrase: `Right! A toy car is a good. Something you can touch.`, correctMatch: `good` },
            { id: `l12-g5`, image: `l12-game-5.webp`, label: `A doctor checking your throat`,
              matchPhrase: `Yes! That is a service. The doctor uses skill to help you.`, correctMatch: `service` },
            { id: `l12-g6`, image: `l12-game-6.webp`, label: `A teacher teaching math`,
              matchPhrase: `Right! Teaching is a service. The teacher's skill helps you learn.`, correctMatch: `service` },
            { id: `l12-g7`, image: `l12-game-7.webp`, label: `A barber cutting hair`,
              matchPhrase: `Yes! A haircut is a service. You do not get a thing. You get help.`, correctMatch: `service` },
            { id: `l12-g8`, image: `l12-game-8.webp`, label: `A bus driver taking you to school`,
              matchPhrase: `Right! Driving you is a service. The driver helps with their skill.`, correctMatch: `service` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a good?`,
              options: [`A song`, `A physical thing you can touch`, `Help from a person`, `Only food`],
              correctIndex: 1,
              explanation: `A good is a physical thing you can touch. Food, clothes, books, bikes. You can pick them up.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is a service?`,
              options: [`A toy`, `Help from another person using their skills`, `Only food`, `A thing you touch`],
              correctIndex: 1,
              explanation: `A service is help from a person. Doctor, teacher, plumber, barber. You get help, not a thing.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `Who is a producer?`,
              options: [`Only kids`, `A person who makes goods or gives services`, `Only adults`, `Just one person`],
              correctIndex: 1,
              explanation: `A producer makes or gives. Farmers, bakers, teachers, doctors. They use their skills to help.` },
            { id: `l12-q4`, format: `true-false`,
              question: `Most adults are both producers AND consumers. They work and they buy.`,
              correctAnswer: true,
              explanation: `True! Adults work at jobs (producers). Then buy what they need with the money (consumers). The cycle keeps going.` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `Long ago, people traded directly. That was called ___.`,
              options: [`barter`, `borrow`, `bake`, `bath`],
              correctIndex: 0,
              explanation: `Barter! Eggs for shoes. Tools for help. Trading without money. Money made trade easier.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Which is a SERVICE (not a good)?`,
              options: [`An apple`, `A teacher teaching a lesson`, `A pair of shoes`, `A book`],
              correctIndex: 1,
              explanation: `Teacher teaching! That is help from a person. Apple, shoes, book are all goods you can touch.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `A simple pencil is made by thousands of people. Someone cuts the wood. Someone makes the graphite. Someone makes the paint. Someone makes the eraser. Someone designs it. Someone ships it. Every good has a story like that. We are all connected through goods and services.`,
          familyAdventure: `Together, look around your home. Pick 10 things. For each, decide. Is it a good (something to touch) or a service (help from a person)? Examples. Dinner = good. Doctor visit = service. Clean clothes are interesting. The clothes are a good. Washing them is a service.`,
          creativePrompt: {
            intro: `Imagine you grow up and give one service to your community. What would you do? Draw yourself at your future job.`,
            floor: `Write 3 sentences about your future service. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why you would love that job.`,
            frames: [
              `When I grow up, I will ___.`,
              `My service helps people because ___.`,
              `I would use my skills to ___.`,
              `The people I help would feel ___.`,
              `I would love this job because ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know goods and services. Goods are physical things you can touch. Services are help from people. Producers make or give. Consumers use. Most adults are both. The whole community is connected through goods, services, and money. The economy. Atlas the Bear.`,
          badge: `goods-services-explorer`,
          badgeName: `Goods and Services Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L12] Loaded: "Goods and Services" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
