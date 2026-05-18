// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L12 — Goods and Services
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Eco.3.K-2 / D2.Eco.5.K-2 (producers, consumers, goods, services)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L12 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-12`,
      title:     `Goods and Services`,
      duration:  12,
      xpReward:  50,
      badge:     `goods-services-explorer`,
      badgeName: `Goods and Services Explorer`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Last lesson you learned about NEEDS and WANTS. Today, let's see HOW we GET those things. Almost everything you have or use comes in one of TWO forms — GOODS (things you can touch) or SERVICES (help from people). Both make communities work. Let's explore.`,
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
            `Look around. Almost everything in your life is either a GOOD or a SERVICE.`,
            `A GOOD is something you can TOUCH — a physical thing. An apple, a shirt, a toy, a book, a bike. You can pick it up. You can keep it. You can use it again and again. A SERVICE is HELP from another person — work someone does FOR you. A doctor checking your health. A teacher teaching a lesson. A barber cutting hair. A plumber fixing pipes. A waiter bringing your food. Services don't leave you with a physical thing to keep. They leave you with a problem solved, a need met, or work done. Both goods and services keep our communities running.`,
          ],
          image: `/explorer-assets/social-studies/l12-s1-two-kinds.webp`,
          imageCaption: `Two kinds: GOODS (things you touch) and SERVICES (help from people). Both keep communities running.`,
          vocab: [
            { word: `good`,           definition: `A PHYSICAL THING you can TOUCH. Apples, toys, clothes — all GOODS.`,
              audioPrompt: `A good, {name}, is a physical thing you can touch. Apples, toys, clothes, books, shoes, bicycles — all goods. You can pick them up. You can hold them. You can use them again and again. Goods can be small (a button) or huge (a house). They come in countless varieties. Goods are one of the two things people buy and sell.` },
            { word: `service`,        definition: `HELP from another PERSON. Haircuts, doctor visits, teaching — SERVICES.`,
              audioPrompt: `A service, {name}, is help from another person. Haircuts, doctor visits, teaching, cleaning, repairing, cooking — all services. Someone does work for you. You don't end up with a physical thing — you end up with help, expertise, or a problem solved. Services are one of the two things people pay for.` },
            { word: `physical`,       definition: `Something you can TOUCH. Goods are PHYSICAL things — services are not.`,
              audioPrompt: `Physical, {name}, means something you can touch. Goods are physical things — services are not. You can hold a banana (physical). You can't hold a haircut (not physical — it's help). That's the main difference. Goods are stuff. Services are help. Both have value, but they're different in nature.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `GOODS: Things You Can Touch`,
          paragraphs: [
            `Let's go deeper into GOODS. They come in MANY kinds.`,
            `FOOD is goods — apples, bread, cheese, candy. CLOTHING is goods — shirts, pants, shoes, hats. TOYS are goods — dolls, balls, puzzles, video game consoles. TOOLS are goods — hammers, kitchen knives, computers. BIG things are goods too — bikes, cars, washing machines, houses. Some goods get USED UP quickly (like food and toilet paper). Other goods LAST a long time (like furniture or bikes). Some goods are LUXURY (fancy and special). Others are EVERYDAY (basics like soap and socks). All of them are PHYSICAL — you can hold or touch them.`,
          ],
          image: `/explorer-assets/social-studies/l12-s2-goods.webp`,
          imageCaption: `Goods: food, clothes, toys, tools, bikes, houses. Things you can touch. Some get used up. Some last forever.`,
          vocab: [
            { word: `physical thing`, definition: `Something you can TOUCH and HOLD. Goods are PHYSICAL THINGS.`,
              audioPrompt: `A physical thing, {name}, is something you can touch and hold. Goods are physical things. Bread is a physical thing. So is a t-shirt. So is a bicycle. You can pick them up. Examine them. Use them. They take up space in your home. Goods are about having physical stuff that you need or want.` },
            { word: `used up`,        definition: `When a GOOD gets FINISHED. Food gets USED UP quickly.`,
              audioPrompt: `Used up, {name}, means when a good gets finished. Food gets used up — you eat it and it's gone. Toilet paper, soap, snacks — all get used up. You have to buy them again and again. Some goods get used up quickly. Others, like a bicycle, last for years. Knowing which is which helps families plan what to buy.` },
            { word: `last`,           definition: `When a good STAYS USEFUL for a long time. Bikes and books LAST years.`,
              audioPrompt: `To last, {name}, means when a good stays useful for a long time. Bikes can last years. Books can last decades. Houses can last generations. Lasting goods are different from used-up goods. You don't have to buy them again and again. They're often more expensive to start but cheaper over time. Smart shoppers think about whether something will last.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `SERVICES: Help from People`,
          paragraphs: [
            `Now let's explore SERVICES — help from other people.`,
            `Services solve problems. Examples — A DOCTOR helps when you're sick. A HAIRDRESSER cuts your hair. A TEACHER helps you learn. A BUS DRIVER takes you places. A PLUMBER fixes broken pipes. A FIREFIGHTER puts out fires. A WAITER brings food at a restaurant. A MUSICIAN plays music for an audience. A LANDSCAPER mows lawns. The list is endless. Almost everyone who has a job provides some kind of service to others. Services are people HELPING people using their skills. Without services, communities couldn't work — people couldn't get help with the things they can't do themselves.`,
          ],
          image: `/explorer-assets/social-studies/l12-s3-services.webp`,
          imageCaption: `Services: doctor, teacher, barber, plumber, bus driver. People helping people with their skills.`,
          vocab: [
            { word: `help`,           definition: `Doing something USEFUL for another person. Services are about HELP.`,
              audioPrompt: `To help, {name}, is doing something useful for another person. Services are about help. A doctor helps you get better. A teacher helps you learn. A plumber helps fix what's broken. Help has been part of human communities forever. Even before money existed, people helped each other. Services are organized help, often in exchange for money.` },
            { word: `skill`,          definition: `Something a PERSON can DO WELL. People offer services using their SKILLS.`,
              audioPrompt: `A skill, {name}, is something a person can do well. People offer services using their skills. Doctors have skill in medicine. Carpenters have skill in building. Hairdressers have skill in cutting hair. Skills take time to develop. People train, practice, and learn. When they're skilled, they can help others — and earn a living through that help.` },
            { word: `job`,            definition: `Work that someone does, often for MONEY. Most JOBS are about providing services.`,
              audioPrompt: `A job, {name}, is work that someone does, often for money. Most jobs are about providing services. Some jobs are about making goods. A baker makes bread (a good). A doctor checks your health (a service). When kids grow up, they often work jobs to earn money. They use their skills to help others — and get paid for it. Jobs make the world go around.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Who PRODUCES? Who CONSUMES?`,
          paragraphs: [
            `Two important words — PRODUCER and CONSUMER.`,
            `A PRODUCER is someone who MAKES goods or PROVIDES services. A farmer who grows tomatoes is a producer. A factory worker who builds cars is a producer. A teacher who teaches is a producer (of a service). A CONSUMER is someone who USES goods or services. When you eat the tomato, you're a consumer. When you ride in the car, you're a consumer. When you learn from the teacher, you're a consumer. Here's something cool — most adults are BOTH producers AND consumers. They produce (work at jobs) and consume (buy things they need or want). The whole community is connected through this back-and-forth.`,
          ],
          image: `/explorer-assets/social-studies/l12-s4-producers-consumers.webp`,
          imageCaption: `Producers MAKE/PROVIDE. Consumers USE. Most adults are BOTH — they work and buy. We're all connected.`,
          vocab: [
            { word: `producer`,       definition: `A person who MAKES goods or PROVIDES services. Farmers, factory workers, teachers — PRODUCERS.`,
              audioPrompt: `A producer, {name}, is a person who makes goods or provides services. Farmers produce food. Factory workers produce things like cars and toys. Teachers produce lessons and learning (a service). Producers do work. They use their skills to make something or help someone. Communities couldn't exist without producers.` },
            { word: `consumer`,       definition: `A person who USES goods or services. When you BUY or USE things, you're a CONSUMER.`,
              audioPrompt: `A consumer, {name}, is a person who uses goods or services. When you eat food, you're a consumer. When you wear clothes, you're a consumer. When you get a haircut, you're a consumer. We're all consumers — every single day. Even kids. Even babies. Consumers need producers, and producers need consumers. They depend on each other.` },
            { word: `both`,           definition: `Doing TWO things at once. Most adults are BOTH producers AND consumers.`,
              audioPrompt: `Both, {name}, means doing two things at once. Most adults are both producers and consumers. They work at a job (producing something — goods or services). With the money they earn, they buy things they need (consuming). The cycle repeats — produce, consume, produce, consume. That's the basic way modern economies work.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `EXCHANGE: Trading and Buying`,
          paragraphs: [
            `Producers and consumers meet through EXCHANGE — that's TRADING.`,
            `Long ago, people TRADED directly — a farmer would trade some apples for a blacksmith's tools. This is called BARTER. Today, we mostly use MONEY. The farmer SELLS apples to people for money. With that money, the farmer BUYS the tools. Same idea, just easier. When you go to a store, you EXCHANGE money for goods. When you pay a doctor, you EXCHANGE money for a service. The price tells you how much money to give. Both sides agree to the exchange. Both sides benefit. The consumer gets what they need. The producer gets money for their work. Everyone wins.`,
          ],
          image: `/explorer-assets/social-studies/l12-s5-exchange.webp`,
          imageCaption: `Exchange = trading. Long ago = barter (apples for tools). Today = money. Both sides agree and benefit.`,
          vocab: [
            { word: `exchange`,       definition: `When two people TRADE — one gives something, the other gives something back.`,
              audioPrompt: `Exchange, {name}, is when two people trade. One gives something, the other gives something back. Most exchange today uses money. Customer gives money to seller. Seller gives goods or services to customer. Both sides agree. Both sides benefit. That's how millions of exchanges happen every day in every community.` },
            { word: `money`,          definition: `What we USE to buy goods and services. MONEY makes exchange easier.`,
              audioPrompt: `Money, {name}, is what we use to buy goods and services. Money makes exchange easier. Without money, you'd have to trade things directly. The farmer would need to find someone who wanted apples AND had something the farmer needed. With money, the farmer sells apples for money. Then uses the money to buy whatever's needed. Money simplifies everything.` },
            { word: `barter`,         definition: `TRADING goods or services WITHOUT money. BARTER was used before money was invented.`,
              audioPrompt: `Barter, {name}, is trading goods or services without money. Long ago, before money was invented, people bartered. A farmer might trade eggs for shoes from a shoemaker. A blacksmith might trade tools for a doctor's help. Barter still happens sometimes — like kids trading lunch items at school. But money is much more convenient for big communities.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Everyone Is Connected`,
          paragraphs: [
            `Here's the BIG idea — communities are HUGE WEBS of goods and services flowing back and forth.`,
            `Think about your morning. You ate BREAKFAST (goods made by farmers, prepared by you or family). You wore CLOTHES (goods made by factory workers and designers). You used a TOOTHBRUSH (a good made by another factory). If you went to school, a BUS DRIVER (service) took you. A TEACHER (service) taught you. The school CUSTODIAN (service) cleaned the building. Thousands of people contributed to your morning — without ever meeting you. That's the economy. Everyone produces something. Everyone consumes something. We're all connected through the goods we make and the services we provide. Beautiful, complex, and constantly moving.`,
          ],
          image: `/explorer-assets/social-studies/l12-s6-everyone-both.webp`,
          imageCaption: `Everyone connected. Thousands of producers contributed to your morning. We give and receive. The economy.`,
          vocab: [
            { word: `economy`,        definition: `The WHOLE SYSTEM of goods, services, money, and work in a community.`,
              audioPrompt: `Economy, {name}, is the whole system of goods, services, money, and work in a community. The economy includes everyone producing things, everyone consuming things, and money flowing between them. Big communities have huge economies with many parts. Small communities have smaller, simpler economies. The economy is how communities meet their needs and wants.` },
            { word: `connected`,      definition: `LINKED to other people. We're all CONNECTED through the economy.`,
              audioPrompt: `Connected, {name}, means linked to other people. We're all connected through the economy. The farmer who grew your dinner. The factory worker who made your shirt. The truck driver who delivered your toys. The teacher who taught your parents. Thousands of people you'll never meet contribute to your daily life. You contribute too — when you'll work someday, when you help your family. We're all in this together.` },
            { word: `web`,            definition: `A NETWORK of many connections. The economy is a WEB of producers and consumers.`,
              audioPrompt: `A web, {name}, is a network of many connections. The economy is a web of producers and consumers. Like a giant spider's web with millions of strands. Each strand is a connection — between a worker and a customer, a farmer and a shopper. Some webs are local (your neighborhood). Some are global (food from around the world). All of them work because people give and receive.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `GOODS are PHYSICAL things you can TOUCH — like apples, toys, shoes, books.`,
              matchPhrase: `Yes! Goods are physical things. You can hold them, use them, save them. Apples, shirts, bikes, computers — all goods. Some get used up. Some last for years.`,
              correctMatch: `fact` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `SERVICES are HELP from people — doctors, teachers, barbers, plumbers all provide services.`,
              matchPhrase: `True! Services are help from people. Someone does work for you using their skills. Doctors help when you're sick. Teachers help you learn. You don't get a physical thing — you get help.`,
              correctMatch: `fact` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `Goods and services are EXACTLY THE SAME — no difference between them.`,
              matchPhrase: `Not at all! Goods are physical things you can touch (toys, food). Services are help from people (haircuts, doctor visits). They're very different — but both important.`,
              correctMatch: `myth` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `Only GOODS exist — services like teaching and doctoring are completely FAKE.`,
              matchPhrase: `Definitely not! Services are real and valuable. Teachers teach (real). Doctors heal (real). Both goods and services are important parts of the economy.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a GOOD?`,
              options: [`A type of song`, `A PHYSICAL thing you can TOUCH — apples, toys, books`, `Help from a person`, `Only food`],
              correctIndex: 1,
              explanation: `A good is a physical thing you can touch. Apples, toys, books, clothes, bikes — all goods. You can pick them up. You can keep them. They take up space.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is a SERVICE?`,
              options: [`A type of toy`, `HELP from another PERSON using their skills`, `Only food`, `A physical thing`],
              correctIndex: 1,
              explanation: `A service is help from another person. Doctors, teachers, barbers, plumbers — all provide services. You don't get a physical thing — you get someone's skill and work.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `Who is a PRODUCER?`,
              options: [`Only kids`, `Someone who MAKES goods or PROVIDES services — farmers, factory workers, teachers`, `Only adults`, `Only one person`],
              correctIndex: 1,
              explanation: `A producer makes goods or provides services. Farmers produce food (goods). Teachers produce lessons (services). Producers do work using their skills.` },
            { id: `l12-q4`, format: `true-false`,
              question: `Most adults are BOTH producers AND consumers — they work (produce) AND buy things (consume).`,
              correctAnswer: true,
              explanation: `True! Most adults work at a job (producing goods or services) and use the money they earn to buy what they need (consuming). The economy is a back-and-forth of producing and consuming.` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `Long ago, people traded things directly — that was called ___. Today, we mostly use money.`,
              options: [`barter`, `borrow`, `bake`, `basketball`],
              correctIndex: 0,
              explanation: `Barter! Trading goods or services without money. Like — eggs for shoes. Money made exchange much easier, but barter still happens sometimes.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Which of these is a SERVICE (not a good)?`,
              options: [`An apple`, `A teacher TEACHING a math lesson`, `A pair of shoes`, `A book`],
              correctIndex: 1,
              explanation: `Teacher teaching! That's help from a person using their skill. Apple, shoes, book — those are all goods (physical things you can touch).` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. The SIMPLE pencil — yes, the kind you use at school — is made by THOUSANDS of people around the world working together. Someone CUTS the wood. Someone makes the GRAPHITE (the gray part). Someone makes the YELLOW PAINT. Someone makes the metal BAND. Someone makes the ERASER. Someone DESIGNS it. Someone PRINTS the words on it. Someone SHIPS it to your school. The pencil shows how the economy works — thousands of producers contributing to one simple thing. Every good you use has a similar story. Every service is connected to others. We're all part of the same big web.`,
          familyAdventure: `Together, sort items into GOODS or SERVICES. Look around your home. Pick 10 things. For each — is it a GOOD (something you can touch) or a SERVICE (help from a person)? Examples: dinner = good. Doctor visit = service. Toy car = good. School lessons = service. Clean clothes might be both (the clothes are a good; washing them is a service). Notice how much of life is goods and services.`,
          creativePrompt: `Pretend YOU could provide ONE service to your community when you're older. What would it be? Drawing comics? Cooking food? Teaching music? Building things? Helping animals? Draw yourself doing your future service. Show happy customers benefiting. You'd be a producer — using your skills to help others. What service would feel meaningful to you?`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now know about GOODS and SERVICES. GOODS are PHYSICAL things you can touch — apples, toys, shoes. SERVICES are HELP from people — doctors, teachers, barbers. PRODUCERS make goods or provide services. CONSUMERS use them. Most adults are BOTH. The whole community is connected through this back-and-forth — a beautiful web. Now you understand how the economy really works. — Atlas 🐻`,
          badge:     `goods-services-explorer`,
          badgeName: `Goods and Services Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L12] Loaded: "Goods and Services" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
