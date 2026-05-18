// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L11 — Needs vs. Wants
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Eco.1.K-2 / D2.Eco.2.K-2 (basic economics)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L11 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-11`,
      title:     `Needs vs. Wants`,
      duration:  12,
      xpReward:  50,
      badge:     `needs-wants-explorer`,
      badgeName: `Needs and Wants Explorer`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. We're starting a new block — ECONOMICS. That's the study of how people use money, work, and make choices about what they have. Today we begin with one of the MOST important ideas in economics — telling the difference between NEEDS and WANTS. Knowing the difference makes you smarter with everything you have. Let's go.`,
          headline: `Needs vs. Wants`,
          subtitle: `Knowing the difference between what you MUST have and what's nice to have`,
          visual: `/explorer-assets/social-studies/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Different Things`,
          paragraphs: [
            `Stop and think about everything you have. Your home. Your clothes. Your food. Your toys. Your phone (or your family's). Your bike. Your books.`,
            `Some of these are NEEDS — things you MUST have to live and be healthy. Others are WANTS — things that are NICE to have, but you could live without. Telling the difference is one of the most important skills humans can learn. Adults who can tell the difference make smart money choices. They spend on what matters most. Kids who can tell the difference grow up to make smart choices too. Today, we'll learn to tell them apart.`,
          ],
          image: `/explorer-assets/social-studies/l11-s1-need-want.webp`,
          imageCaption: `Needs = must-haves to live. Wants = nice-to-haves. Knowing the difference makes you smart with what you have.`,
          vocab: [
            { word: `need`,           definition: `Something you MUST HAVE to live and be healthy. Food, water, shelter — NEEDS.`,
              audioPrompt: `A need, {name}, is something you must have to live and be healthy. Food. Water. Shelter. Clothes. Safety. Love. Without these, people can't live well — or sometimes can't live at all. Needs aren't optional. Every person on Earth has the same basic needs. They're what we have to take care of first, before anything else.` },
            { word: `want`,           definition: `Something NICE to have but not NECESSARY. Toys, games, treats — WANTS.`,
              audioPrompt: `A want, {name}, is something nice to have but not necessary. Toys. Games. Gadgets. Treats. New clothes when you already have enough. Wants make life more fun. But you can live without them. Different people want different things. Wants change a lot over time. Today's want might be forgotten tomorrow.` },
            { word: `difference`,     definition: `What makes things NOT THE SAME. Knowing the DIFFERENCE between needs and wants is smart.`,
              audioPrompt: `The difference, {name}, is what makes things not the same. Knowing the difference between needs and wants is smart. It's a skill. Some kids and adults confuse them. They say 'I NEED that toy' when they really WANT it. That's an easy mistake. But learning to tell them apart helps you make smart choices.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Need 1: FOOD and WATER`,
          paragraphs: [
            `Let's start with the most basic NEEDS — FOOD and WATER.`,
            `Without food, your body can't get the energy it needs to live. Without water, you'd only survive a few days. EVERY person on Earth needs food and water to live. Food doesn't have to be FANCY. Simple healthy food does the job — vegetables, fruit, grains, beans, eggs, meat (if you eat it). The same with water — clean drinking water keeps your body working. These are needs you MUST have every day. People who don't have enough food and water are HUNGRY and SICK. That's why so many people around the world work to make sure everyone has these basic needs. Food and water = life.`,
          ],
          image: `/explorer-assets/social-studies/l11-s2-food-water.webp`,
          imageCaption: `Need 1: FOOD + WATER. Every human needs them every day. Without them, people can't survive.`,
          vocab: [
            { word: `food`,           definition: `What you EAT for energy. FOOD is a basic NEED for every person.`,
              audioPrompt: `Food, {name}, is what you eat for energy. Food is a basic need for every person. Your body uses food to grow, move, think, and stay healthy. Different foods give different things — fruits and vegetables give vitamins, beans and meat give protein, grains and bread give energy. Every body needs food every single day. Without it, we can't function.` },
            { word: `water`,          definition: `What you DRINK to stay alive. WATER is essential — you can only live a few days without it.`,
              audioPrompt: `Water, {name}, is what you drink to stay alive. Water is essential. You can only live a few days without it. Your body is mostly water — over 60 percent! You lose water all day through breathing, sweating, and going to the bathroom. You have to replace it by drinking. Clean drinking water is one of the most important things in life. Sadly, many people in the world don't have clean water. That's a big problem to solve.` },
            { word: `basic`,          definition: `MOST IMPORTANT and ESSENTIAL. Food and water are BASIC needs.`,
              audioPrompt: `Basic, {name}, means most important and essential. Food and water are basic needs. So basic that without them, nothing else works. You can't enjoy a toy if you're starving. You can't play if you're dying of thirst. Basic needs come first. Once basic needs are met, then we can think about wants and other things.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Need 2: SHELTER and SAFETY`,
          paragraphs: [
            `The next big NEEDS — SHELTER and SAFETY.`,
            `SHELTER means a HOME — a place to sleep, stay warm or cool, and be protected from weather. It could be a small apartment, a big house, a tent, or a simple hut. The form doesn't matter — what matters is having a place to belong. CLOTHES are part of shelter too — they protect your body from heat, cold, and weather. SAFETY means being protected from harm. People NEED to feel safe — physically safe from being hurt, and emotionally safe from being scared. Without shelter and safety, life is hard. Helping everyone have safe homes is one of the goals of healthy communities.`,
          ],
          image: `/explorer-assets/social-studies/l11-s3-shelter-safety.webp`,
          imageCaption: `Need 2: SHELTER + SAFETY. A safe home, warm clothes, protection from harm. Essential for survival.`,
          vocab: [
            { word: `shelter`,        definition: `A place to LIVE that protects you from WEATHER and HARM. Houses, apartments — SHELTER.`,
              audioPrompt: `Shelter, {name}, is a place to live that protects you from weather and harm. Houses, apartments, tents — all shelter. Shelter keeps you dry when it rains. Warm when it's cold. Cool when it's hot. Safe from danger. Every person needs shelter. The form doesn't matter much — what matters is having a safe, warm place to call home.` },
            { word: `clothes`,        definition: `What you WEAR to protect your body. CLOTHES are part of shelter.`,
              audioPrompt: `Clothes, {name}, are what you wear to protect your body. Clothes are part of shelter — like portable shelter for your body. They keep you warm in winter and cool in summer. They protect your skin from sun and weather. Every person needs basic clothes. Some places have plenty of clothing options. Other places don't. Everyone deserves enough clothing to be comfortable and safe.` },
            { word: `safety`,         definition: `Being PROTECTED from harm. SAFETY is a basic NEED — physical and emotional.`,
              audioPrompt: `Safety, {name}, is being protected from harm. Safety is a basic need — physical and emotional. Physical safety means not being hurt. Emotional safety means feeling secure, not scared. Both matter. Kids need to feel safe at home, at school, and in their community. Adults work hard to keep kids safe. Safety is one of the most important things any community can give its people.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Need 3: LOVE and BELONGING`,
          paragraphs: [
            `One MORE need — and it's one many people forget — LOVE and BELONGING.`,
            `Humans NEED love. We need to feel CARED for by family or friends. We need to feel like we BELONG somewhere — that people know us, love us, and want us around. Without love, even with food and shelter, life feels EMPTY. Sad. Lonely. Kids especially need love to grow well. Hugs. Kind words. Being listened to. Being celebrated for who you are. Adults need love too — friendships, family, community. Love isn't just a nice extra. It's a TRUE need. Communities that take care of each other's love needs are healthier and happier.`,
          ],
          image: `/explorer-assets/social-studies/l11-s4-love-belonging.webp`,
          imageCaption: `Need 3: LOVE + BELONGING. Family, friends, being cared for. Kids especially need love to grow well.`,
          vocab: [
            { word: `love`,           definition: `Deep CARE for someone. LOVE is a real need — not just a nice extra.`,
              audioPrompt: `Love, {name}, is deep care for someone. Love is a real need — not just a nice extra. Kids especially need love to grow well. Hugs. Kind words. Knowing your family thinks you matter. Adults need love too — through friendships, family, community. Love isn't optional. Communities that give love stay healthier than ones that don't.` },
            { word: `belonging`,      definition: `Feeling like you're PART of something. BELONGING is a basic human need.`,
              audioPrompt: `Belonging, {name}, is feeling like you're part of something. Part of a family. Part of a school. Part of a group of friends. Part of a community. Belonging is a basic human need. Humans aren't meant to be alone all the time. We're social creatures. We feel best when we belong somewhere. Everyone deserves a place where they truly belong.` },
            { word: `cared for`,      definition: `Having SOMEONE who LOOKS OUT for you. Being CARED FOR is a need.`,
              audioPrompt: `Cared for, {name}, means having someone who looks out for you. Being cared for is a need. Babies absolutely need it to survive. Kids still need it. Adults need it too in different ways. We need people who notice us, who help us when we struggle, who celebrate us when we succeed. Being cared for is part of what makes life worth living.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `WANTS: Nice but Not Necessary`,
          paragraphs: [
            `Now let's talk about WANTS. The things that are FUN but not necessary.`,
            `Wants are things like — NEW TOYS when you already have plenty. EXTRA SNACKS like candy or cookies. NEW VIDEO GAMES. FANCY CLOTHES (when basic ones work). GADGETS like fancy phones or toys with lots of features. CANDY. EXTRA STUFF. There's nothing WRONG with wants! Wants make life fun. Birthdays, treats, special toys are great. But it's important to remember — you could LIVE WITHOUT them. Some kids and adults confuse needs and wants. They say 'I NEED that game.' But actually they WANT it. Knowing the difference helps you make smart choices about money, time, and what truly matters.`,
          ],
          image: `/explorer-assets/social-studies/l11-s5-wants.webp`,
          imageCaption: `Wants: toys, games, gadgets, treats. Nice and fun! But you could live without them.`,
          vocab: [
            { word: `nice`,           definition: `Pleasant but not REQUIRED. Wants are NICE — they make life fun.`,
              audioPrompt: `Nice, {name}, means pleasant but not required. Wants are nice. They make life fun. A new toy, a special treat, a cool gadget — all nice. Nothing wrong with wanting them! Wants add joy. Birthdays and holidays are full of wants. The trouble starts only when people CONFUSE wants with needs — saying they NEED something they really just WANT.` },
            { word: `necessary`,      definition: `MUST HAVE. Needs are NECESSARY. Wants are NOT necessary.`,
              audioPrompt: `Necessary, {name}, means must have. Needs are necessary. Wants are not necessary. You need food. You don't need fifty different snacks — those extras are wants. You need clothes. You don't need a brand new outfit every week — those extras are wants. The line between need and want isn't always clear. But asking 'Is this necessary?' helps.` },
            { word: `confuse`,        definition: `MIX UP two things. People can CONFUSE needs and wants.`,
              audioPrompt: `To confuse, {name}, is to mix up two things. People can confuse needs and wants. They say 'I NEED that' when they actually just WANT it. Adults do it. Kids do it. It's an easy mistake — especially with cool things we really like. The good news? You can practice telling them apart. Asking 'would I survive without this?' helps. If yes — it's a want, not a need.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Making SMART Choices`,
          paragraphs: [
            `Here's WHY this matters — when you know NEEDS vs. WANTS, you make SMARTER CHOICES.`,
            `Imagine you have $20. You could spend it on candy and a toy (WANTS). Or you could save half for something more important later, and use the other half for a small treat (BALANCE). Or imagine you only have ONE hour to do something. Do you spend it watching TV (a want) or doing your homework (a need)? Adults make decisions like this every day with their money and time. Should I buy fancy coffee — or save the money for rent? Should I work or play? Knowing needs vs. wants is the FIRST STEP in being smart with your money, time, and choices. When needs are taken care of, wants are okay. When needs aren't met, wants can wait.`,
          ],
          image: `/explorer-assets/social-studies/l11-s6-smart-choices.webp`,
          imageCaption: `Smart choices = needs first, wants second. Balance both. Adults make these choices every day.`,
          vocab: [
            { word: `choice`,         definition: `Picking BETWEEN two or more things. You make CHOICES every day.`,
              audioPrompt: `A choice, {name}, is picking between two or more things. You make choices every day. Choosing what to eat. Choosing what to wear. Choosing what to do with your time. Choosing how to spend any money you have. Each choice affects your life. Smart choices make life better. Choices about needs vs. wants are some of the most important.` },
            { word: `smart`,          definition: `Making GOOD decisions. SMART choices put needs first, then wants.`,
              audioPrompt: `Smart, {name}, means making good decisions. Smart choices put needs first, then wants. If you only have a little money, smart choices take care of needs first. Food, shelter, basic things. Then if there's extra, smart choices include a few wants too. Smart isn't just about being clever — it's about understanding what matters most.` },
            { word: `balance`,        definition: `Having SOME of each thing. BALANCE between needs and wants is important.`,
              audioPrompt: `Balance, {name}, means having some of each thing. Balance between needs and wants is important. Life isn't only about needs — that would be no fun. Life isn't only about wants — that would lead to problems. Balance is the middle path. Take care of needs first. Enjoy some wants too. Save for the future. That's smart, healthy balance.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `NEEDS are things you MUST have to live — food, water, shelter, safety, love.`,
              matchPhrase: `Yes! Needs are essential. Food. Water. Shelter. Safety. Love and belonging. Without these, people can't live well. Needs come first.`,
              correctMatch: `fact` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `WANTS are nice extras — toys, games, treats. Fun, but you can live without them.`,
              matchPhrase: `True! Wants are pleasant but not required. They make life fun. Nothing wrong with wants — just important to know they're different from needs.`,
              correctMatch: `fact` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `New TOYS and VIDEO GAMES are NEEDS — just like food and water.`,
              matchPhrase: `Not at all! Toys and games are WANTS. They're fun, but not required for survival. Food and water are needs. There's a real difference.`,
              correctMatch: `myth` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `Humans can live PERFECTLY FINE without food, water, shelter, or love.`,
              matchPhrase: `Definitely not! Humans need food, water, shelter, safety, and love to survive and thrive. Without these basic needs, people get sick, hungry, scared, or sad. Needs are non-negotiable.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is a NEED?`,
              options: [`A type of toy`, `Something you MUST have to live and be healthy — food, water, shelter, safety, love`, `Anything you want`, `Only things adults have`],
              correctIndex: 1,
              explanation: `A need is something you must have to live and be healthy. Food, water, shelter, safety, love. Without needs being met, people can't live well. Needs come first.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What is a WANT?`,
              options: [`Same as a need`, `Something NICE to have but you can live WITHOUT — toys, games, treats`, `Only food`, `Only things kids have`],
              correctIndex: 1,
              explanation: `A want is something nice to have but you can live without. Toys, video games, candy, fancy clothes. Wants make life fun but aren't required. They're the extras.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which of these is a NEED?`,
              options: [`Brand new video game`, `Clean WATER to drink`, `Newest sneakers`, `A big box of candy`],
              correctIndex: 1,
              explanation: `Clean water! It's essential. You can only live a few days without it. The others are all wants — nice to have but not necessary.` },
            { id: `l11-q4`, format: `true-false`,
              question: `LOVE and BELONGING are real NEEDS — not just nice extras.`,
              correctAnswer: true,
              explanation: `True! Love and belonging are real human needs. Without them, even with food and shelter, life feels empty. Kids especially need love to grow well. So do adults. Love is non-negotiable.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `Knowing the ___ between needs and wants helps you make smart choices.`,
              options: [`difference`, `recipe`, `drawing`, `music`],
              correctIndex: 0,
              explanation: `Difference! Knowing the difference between needs and wants is one of the most important skills. It helps you spend money smartly, use time well, and figure out what truly matters.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `What's a SMART approach to needs and wants?`,
              options: [`Only buy wants`, `Take care of NEEDS first, then enjoy some WANTS too — balance`, `Ignore needs`, `Only have wants`],
              correctIndex: 1,
              explanation: `Needs first, wants second — with balance. Smart people make sure basic needs are taken care of, then enjoy some wants too. Life isn't only about needs (no fun) and isn't only about wants (not sustainable). Balance.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something important, {name}. Many adults SAVE money — putting some aside instead of spending it all. Why? Because they understand needs vs. wants. They take care of needs first (food, rent, bills, school). Then if there's money left over, they might save some for emergencies or future needs. Then enjoy a few wants too. This is called BUDGETING. People who learn to budget early often have happier, less stressful lives. You can start practicing now — even with little amounts of money. Knowing what's a need and what's a want is the foundation of every smart money decision.`,
          familyAdventure: `As a family, make a NEEDS vs. WANTS list. On one side, write down 5 things your family NEEDS (food, water, your home, electricity, basic clothes). On the other side, write 5 things that are WANTS (specific toys, treats, entertainment, decorations, special clothes). Talk about how your family takes care of needs first. Then how you enjoy some wants too. Notice — balance is the goal.`,
          creativePrompt: `Draw a backpack going on a survival adventure. Inside the backpack, draw 5 things you'd NEED to bring (water bottle, food, warm jacket, blanket, etc.). Outside the backpack, draw 5 things you'd WANT to bring but don't really need (favorite toy, candy, video game, fancy shoes, etc.). See the difference — needs go IN the survival bag. Wants stay home.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now know the difference between NEEDS and WANTS. NEEDS are things you MUST have — food, water, shelter, safety, love. WANTS are nice EXTRAS — toys, games, treats. They're not the same. Smart choices take care of NEEDS first, then enjoy SOME wants too. That's BALANCE. This is the foundation of every smart money choice for the rest of your life. — Atlas 🐻`,
          badge:     `needs-wants-explorer`,
          badgeName: `Needs and Wants Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L11] Loaded: "Needs vs. Wants" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
