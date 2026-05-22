// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L11 — Needs vs. Wants
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Eco.1.K-2 / D2.Eco.2.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L11 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-11`,
      title: `Needs vs. Wants`,
      duration: 12,
      xpReward: 50,
      badge: `needs-wants-explorer`,
      badgeName: `Needs and Wants Explorer`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we start a new block. Economics. That means how people use money and make choices. Our first big idea is needs versus wants. Knowing the difference helps you the rest of your life. Let's go.`,
          headline: `Needs vs. Wants`,
          subtitle: `Knowing what you must have and what's just nice`,
          visual: `/explorer-assets/social-studies/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Different Things`,
          paragraphs: [
            `Look around at what you have. Your home. Your clothes. Your food. Your toys.`,
            `Some of these are needs. You must have them to live. Others are wants. They are nice to have but not needed. Knowing the difference makes you smart with money and choices.`,
          ],
          image: `/explorer-assets/social-studies/l11-s1-need-want.webp`,
          imageCaption: `Needs are must-haves. Wants are nice-to-haves.`,
          vocab: [
            { word: `need`, definition: `Something you must have to live.`,
              audioPrompt: `A need is something you must have, {name}. To live and be healthy. Food. Water. Safe shelter. Love. Without these, people cannot live well. Every person has the same basic needs.` },
            { word: `want`, definition: `Something nice to have but not needed.`,
              audioPrompt: `A want is something nice to have, {name}. But not needed. Toys. Candy. New shoes when yours still work. Wants make life fun. But you can live without them.` },
            { word: `before`, definition: `Coming first in time. Needs come before wants.`,
              audioPrompt: `Before means coming first in time, {name}. Needs come before wants. First take care of needs. Then enjoy some wants. Before helps us put things in the right order.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Need 1: Food and Water`,
          paragraphs: [
            `The first big needs are food and water.`,
            `Without food, your body has no energy. Without water, you cannot live more than a few days. Every person on Earth needs food and water. Every single day. They are the most basic needs.`,
          ],
          image: `/explorer-assets/social-studies/l11-s2-food-water.webp`,
          imageCaption: `Food and water. Two of the biggest needs. Every day, every person.`,
          vocab: [
            { word: `food`, definition: `What you eat to get energy.`,
              audioPrompt: `Food is what you eat for energy, {name}. Food is a basic need. Your body uses it to grow, move, and stay healthy. Different foods give different things. Every body needs food every day.` },
            { word: `water`, definition: `What you drink to stay alive.`,
              audioPrompt: `Water is what you drink, {name}. Water is essential. You can only live a few days without it. Your body is mostly water. Clean drinking water is one of the most important things in life.` },
            { word: `basic`, definition: `Most important. Essential to start with.`,
              audioPrompt: `Basic means most important, {name}. Food and water are basic needs. So basic that without them, nothing else works. Once basic needs are met, then we can think about other things.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Need 2: Shelter and Safety`,
          paragraphs: [
            `The next needs are shelter and safety.`,
            `Shelter means a home. A place to sleep and stay warm or cool. Clothes are part of shelter too. They protect your body. Safety means being protected from harm. Every person needs to feel safe.`,
          ],
          image: `/explorer-assets/social-studies/l11-s3-shelter-safety.webp`,
          imageCaption: `Shelter and safety. A safe home, warm clothes, protection from harm.`,
          vocab: [
            { word: `shelter`, definition: `A place to live that protects you.`,
              audioPrompt: `Shelter is a place to live, {name}. It protects you from weather and harm. Houses, apartments, tents. All shelter. The form does not matter. What matters is having a safe place to call home.` },
            { word: `clothes`, definition: `What you wear to protect your body.`,
              audioPrompt: `Clothes are what you wear, {name}. They protect your body. Warm in winter. Cool in summer. Safe from the sun and weather. Every person needs basic clothes.` },
            { word: `safety`, definition: `Being protected from harm.`,
              audioPrompt: `Safety is being protected from harm, {name}. A basic need. Physical safety means not getting hurt. Emotional safety means not feeling scared. Both matter. Kids especially need to feel safe.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Need 3: Love and Belonging`,
          paragraphs: [
            `One more big need. Love and belonging.`,
            `Humans need love. We need people who care about us. We need to belong somewhere. Without love, even with food and shelter, life feels empty. Kids especially need hugs, kind words, and being heard.`,
          ],
          image: `/explorer-assets/social-studies/l11-s4-love-belonging.webp`,
          imageCaption: `Love and belonging. Real needs, not just nice extras.`,
          vocab: [
            { word: `love`, definition: `Deep care for someone.`,
              audioPrompt: `Love is deep care for someone, {name}. Love is a real need. Not just a nice extra. Kids especially need love to grow. Hugs. Kind words. Knowing your family thinks you matter.` },
            { word: `belonging`, definition: `Feeling like you are part of something.`,
              audioPrompt: `Belonging is feeling part of something, {name}. Part of a family. A school. A group of friends. A community. Humans are not meant to be alone all the time. We need places we belong.` },
            { word: `cared for`, definition: `Having someone who looks out for you.`,
              audioPrompt: `Cared for means having someone who looks out for you, {name}. Babies need it to survive. Kids need it. Adults need it too. Being cared for is part of what makes life worth living.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Wants: Nice but Not Needed`,
          paragraphs: [
            `Now wants. The things that are fun but not needed.`,
            `New toys when you already have some. Candy. New video games. Fancy clothes. Gadgets. Nothing is wrong with wants. They make life fun. But you could live without them. That is what makes them wants.`,
          ],
          image: `/explorer-assets/social-studies/l11-s5-wants.webp`,
          imageCaption: `Wants: toys, candy, gadgets, treats. Fun, but you can live without them.`,
          vocab: [
            { word: `nice`, definition: `Pleasant but not needed.`,
              audioPrompt: `Nice means pleasant but not needed, {name}. Wants are nice. They make life fun. A new toy. A special treat. Nothing is wrong with wanting them. But they are not the same as needs.` },
            { word: `confuse`, definition: `To mix up two different things.`,
              audioPrompt: `To confuse means to mix up two things, {name}. People sometimes confuse wants with needs. They say "I need that game." But they really want it. Asking yourself helps tell them apart.` },
            { word: `extra`, definition: `Something more than you need.`,
              audioPrompt: `Extra means more than you need, {name}. Wants are extras. Nice extras. Birthdays and holidays are full of extras. Extras add joy. Just remember they are not the same as needs.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Making Smart Choices`,
          paragraphs: [
            `Here is why this matters. Knowing needs from wants helps you make smart choices.`,
            `Imagine you have $20. Spend it all on candy? Or save some for later? Smart people take care of needs first. Then enjoy some wants. Balance is the goal. Some saving. Some spending. Some sharing.`,
          ],
          image: `/explorer-assets/social-studies/l11-s6-smart-choices.webp`,
          imageCaption: `Smart choices: needs first, wants second, with balance.`,
          vocab: [
            { word: `choice`, definition: `Picking between two or more things.`,
              audioPrompt: `A choice is picking between two or more things, {name}. You make choices every day. What to eat. What to wear. How to spend money. Each choice matters. Smart choices make life better.` },
            { word: `smart`, definition: `Making good decisions.`,
              audioPrompt: `Smart means making good decisions, {name}. Smart choices put needs first. Then enjoy some wants too. Smart is not about being clever. It is about knowing what really matters.` },
            { word: `balance`, definition: `Having some of each thing.`,
              audioPrompt: `Balance means having some of each, {name}. Balance between needs and wants. Some saving, some spending, some sharing. Life is not all needs and not all wants. Balance is the goal.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each thing, {name}. Is it a need (you must have it) or a want (nice but not needed)?`,
          buckets: [
            { id: `need`, label: `Need`, color: `#34D399` },
            { id: `want`, label: `Want`, color: `#F472B6` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `Clean water to drink`,
              matchPhrase: `Yes! Clean water is a need. Every person needs it every day.`, correctMatch: `need` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `Healthy food`,
              matchPhrase: `Right! Food is a basic need. Your body needs it to live.`, correctMatch: `need` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `A safe place to sleep`,
              matchPhrase: `Yes! Shelter is a need. A safe home protects you.`, correctMatch: `need` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `Love from your family`,
              matchPhrase: `Right! Love is a real need. Kids especially need it to grow well.`, correctMatch: `need` },
            { id: `l11-g5`, image: `l11-game-5.webp`, label: `A new video game`,
              matchPhrase: `Yes! A video game is a want. Fun, but you can live without it.`, correctMatch: `want` },
            { id: `l11-g6`, image: `l11-game-6.webp`, label: `A box of candy`,
              matchPhrase: `Right! Candy is a want. A sweet treat, but not needed.`, correctMatch: `want` },
            { id: `l11-g7`, image: `l11-game-7.webp`, label: `Brand new sneakers when yours still work`,
              matchPhrase: `Yes! New sneakers when you already have some is a want.`, correctMatch: `want` },
            { id: `l11-g8`, image: `l11-game-8.webp`, label: `A toy you saw on TV`,
              matchPhrase: `Right! A toy from a TV ad is a want. Fun, but not needed.`, correctMatch: `want` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is a need?`,
              options: [`A toy`, `Something you must have to live`, `Anything you want`, `Only for adults`],
              correctIndex: 1,
              explanation: `A need is something you must have to live. Food, water, shelter, safety, love. Basic needs come first.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is a want?`,
              options: [`Same as a need`, `Something nice to have but you can live without`, `Only food`, `Only for kids`],
              correctIndex: 1,
              explanation: `A want is nice to have but not needed. Toys, candy, treats. Fun but not required.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which is a need?`,
              options: [`A new toy`, `Clean water`, `Newest shoes`, `A box of candy`],
              correctIndex: 1,
              explanation: `Clean water is a need. You can only live a few days without it. The others are wants.` },
            { id: `l11-q4`, format: `true-false`,
              question: `Love and belonging are real needs, not just nice extras.`,
              correctAnswer: true,
              explanation: `True! Love is a real need. Kids especially need it to grow well. So do adults.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `Smart choices take care of needs ___ wants.`,
              options: [`before`, `after`, `instead of`, `without`],
              correctIndex: 0,
              explanation: `Before! Smart people take care of needs first. Then enjoy some wants.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `What is a smart approach to money?`,
              options: [`Only buy wants`, `Take care of needs, then enjoy some wants with balance`, `Spend it all`, `Save it all`],
              correctIndex: 1,
              explanation: `Needs first. Wants second. With balance. Smart people save some, spend some, and share some.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Many adults save money. They take care of needs first. Then save some for later. Then enjoy a few wants. This is called budgeting. People who learn to budget early often have happier, less stressful lives. You can start now, even with a little money.`,
          familyAdventure: `Make a family needs and wants list together. On one side, write 5 things your family needs. On the other side, write 5 wants. Talk about how your family takes care of needs first. Then enjoys some wants.`,
          creativePrompt: {
            intro: `Draw a backpack for a survival trip. Inside, draw 4 things you would need. Outside, draw 4 things you would want but not really need.`,
            floor: `Write 3 sentences about your backpack. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why each thing is a need or want.`,
            frames: [
              `Inside my backpack, I packed ___.`,
              `I need this because ___.`,
              `Outside, I drew ___.`,
              `This is a want because ___.`,
              `The most important thing is ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You know the difference between needs and wants. Needs are food, water, shelter, safety, and love. Wants are toys, treats, and extras. Both are okay. But take care of needs first. Then enjoy some wants. This is the start of being smart with money. Atlas the Bear.`,
          badge: `needs-wants-explorer`,
          badgeName: `Needs and Wants Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L11] Loaded: "Needs vs. Wants" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
