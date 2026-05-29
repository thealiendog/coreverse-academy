// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L03 — Food as Information
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : intuitive eating principles (Tribole/Resch), food as energy
//            information not morality. NEVER restrictive, NEVER "bad foods,"
//            NEVER weight talk. Real food vs ultra-processed framing.
//            Protective approach for kids' relationship with food.
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (food messages: real-food signals / sometimes-
//            food signals / "trick" signals from ultra-processed foods).
//            Trick case = a food that LOOKS healthy but is actually mostly
//            ultra-processed (e.g., "fruit snacks" or sugary granola bar).
// SCOPE: food gives your body information, real food vs ultra-processed,
//        why food matters for energy/mood/focus, all foods can fit
// VOICE: Terra = nurturing, anti-shame, joyful about food, never moralizing
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-03`,
      title: `Food as Information`,
      duration: 18,
      xpReward: 75,
      badge: `food-explorer`,
      badgeName: `Food Explorer`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we explore something you do multiple times a day, every day, of your whole life: EATING. But we're going to think about food in a new way. Not as "good" or "bad," not as something to feel guilty about, not as something to fear. We're going to think about food as INFORMATION. Every meal sends signals to your body about what to do with energy, mood, focus, and growth. Some foods send great signals. Some send confusing ones. Learning to understand what food is telling your body is one of the most powerful wellness skills you can build. Take a hungry or full breath, whichever you're in, and let's begin.`,
          headline: `Food as Information`,
          subtitle: `Not "good" or "bad." Just messages your body uses for energy, mood, and focus`,
          visual: `/ue-assets/lw/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Food Isn't "Good" or "Bad." It's Information`,
          paragraphs: [
            `Here's something important from the start: FOOD ISN'T MORAL. There aren't "good foods" you should always eat and "bad foods" you should always avoid. Food isn't a test of whether you're a good or bad person. People who think about food in those moral terms tend to feel guilty, anxious, or obsessed about eating, which makes their relationship with food worse, not better. Researchers studying eating have learned that kids and adults who treat food as information instead of judgment have HEALTHIER relationships with eating, more stable moods, and better long-term health.`,
            `Here's the better way to think about it: every food gives your body INFORMATION. It says, "here's some energy, here's how fast or slow that energy will release, here are the building blocks for tissues, here are vitamins and minerals, here's how to feel for a while." Different foods send different information. Whole foods like fruits, vegetables, beans, whole grains, fish, eggs, nuts, and meats tend to send CLEAR helpful information. Ultra-processed foods (chips, candy, sugary drinks, packaged sweets) tend to send LOUD CONFUSING signals, big sugar spikes, then crashes. Both can fit in a life, but they're not equally informative. The skill isn't avoiding "bad" foods, it's learning to RECOGNIZE what each food is telling your body, and choosing what mostly helps you feel and function well.`,
          ],
          image: `/ue-assets/lw/l03-s1-not-moral.webp`,
          imageCaption: `Food isn't moral. It's information. Different foods send different messages to your body.`,
          vocab: [
            { word: `food as information`,
              definition: `The mature way to think about food, not as "good" or "bad," but as messages telling your body what to do with energy, mood, focus, and growth. Some foods send clear helpful signals. Others send confusing ones. The skill is recognizing the difference, not avoiding foods morally.`,
              audioPrompt: `Food as information is the mature way to think about eating, {name}. Not as good or bad, but as messages telling your body what to do. Every food sends signals. Here's some energy. Here's how fast that energy will release. Whole foods like fruits, vegetables, beans, eggs, and meats tend to send clear helpful information. Ultra-processed foods tend to send loud confusing signals. Both can fit, but they're not equally informative. The skill is recognizing what each food is telling your body.` },
            { word: `food signals`,
              definition: `The messages different foods send to your body about what to do with energy and mood. Real foods send clear, steady signals — lasting energy, stable mood, natural fullness. Ultra-processed foods send loud confusing signals — big sugar spikes followed by crashes. Noticing what signal a food sends is one of the most practical wellness skills there is.`,
              audioPrompt: `Food signals are the messages that different foods send to your body about what to do, {name}. Real foods send clear, steady signals, energy that lasts for hours, steady mood, satisfied fullness that comes naturally. Ultra-processed foods send loud confusing signals, big sugar spikes followed by crashes, false hunger that starts again quickly. Learning to notice what signal a food sends before and after you eat it is one of the most practical wellness skills there is. Your body becomes your laboratory.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Food vs. Ultra-Processed Food`,
          paragraphs: [
            `Here's a distinction worth knowing. REAL FOOD is food that's recognizable as something that grew, swam, walked, or came from a plant or animal in a basic form. An apple is real food. So are eggs, chicken, rice, beans, broccoli, salmon, milk, oats, nuts, fruit, and bread made from simple ingredients. Real foods have ingredients you'd find in a kitchen, not a chemistry lab. They release energy steadily, give your body building blocks for growth, contain vitamins and fiber, and tend to leave you feeling satisfied without big crashes.`,
            `ULTRA-PROCESSED foods are very different. They're made in factories with lots of ingredients you wouldn't have at home (food dyes, emulsifiers, "natural flavoring," preservatives, high-fructose corn syrup), engineered to be hyper-tasty, often super sweet or super salty, and DESIGNED to make you want more even when you're full. Researchers found that ultra-processed foods can override your body's natural fullness signals (L01!), making it hard to stop eating. They cause big blood sugar spikes followed by crashes that leave you tired, cranky, and hungry again soon. Examples: chips, candy, sugary cereals, packaged cookies, soda, "fruit snacks," most fast food. These foods CAN BE PART OF LIFE, you don't have to be perfect or fear them. But knowing what they actually do helps you choose them with awareness instead of being tricked by their packaging.`,
          ],
          image: `/ue-assets/lw/l03-s2-real-vs-ultra.webp`,
          imageCaption: `Real food: recognizable, ingredient-list-readable. Ultra-processed: factory-engineered for hyper-taste.`,
          vocab: [
            { word: `ultra-processed food`,
              definition: `Food made in factories with many ingredients you wouldn't have at home, engineered to be hyper-tasty, often very sweet or salty, designed to make you want more even when full. Examples: chips, candy, soda, packaged sweets. Can fit in a life, but knowing what it does helps you choose with awareness.`,
              audioPrompt: `Ultra-processed food is food made in factories with many ingredients you wouldn't have at home, {name}. Engineered to be hyper-tasty, often super sweet or salty, designed to make you want more even when full. Examples: chips, candy, sugary cereals, packaged cookies, soda, fruit snacks, most fast food. Researchers found that ultra-processed foods can override your body's natural fullness signals. They cause big blood sugar spikes, then crashes. They can be part of life, but knowing what they actually do helps you choose with awareness.` },
            { word: `ingredient list`,
              definition: `The most honest information on any food package. Marketing words like "natural" or "healthy" are sales language. The ingredient list is the truth — listed from most to least by weight. If the first ingredients are sugar, corn syrup, or refined oils, the food is ultra-processed regardless of its packaging.`,
              audioPrompt: `The ingredient list is the most honest information on any food package, {name}. Marketing words on the front like natural, made with real fruit, or healthy are sales language, not honesty. But the ingredient list, usually in small print on the back, never lies. Ingredients are listed in order from most to least by weight. If the first few ingredients are sugar, corn syrup, or refined oils, the food is ultra-processed, no matter how healthy the packaging makes it look. Read the list. It's the truth.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Food Matters So Much for Mood, Focus, and Energy`,
          paragraphs: [
            `Food isn't just fuel, it's the literal raw material your body uses to BUILD itself. Every cell in your growing body comes from food. Your brain especially needs a steady supply of high-quality information from food to work well. The link between food and how you FEEL is incredibly real and direct. Researchers studying kids found that when kids eat foods that send clear steady signals (real foods with protein, fiber, healthy fats), their MOOD is more stable, their FOCUS is sharper, and their ENERGY lasts longer. When they eat mostly ultra-processed foods, mood swings increase, attention drops, and energy crashes happen more.`,
            `This isn't about being perfect. Even the healthiest eaters have pizza, ice cream, and birthday cake sometimes, that's normal and joyful. But noticing how different foods make you FEEL is one of the most valuable wellness skills there is. After breakfast, do you feel energized for hours, or hungry again in 45 minutes? After a sugary snack, do you crash and feel cranky? After a meal with protein and vegetables, do you feel steady and clear? Your body is the laboratory. Pay attention. You'll learn more about what works FOR YOU specifically than any nutrition rule can teach. Your body's wisdom (L01!) will guide you. Trust it.`,
          ],
          image: `/ue-assets/lw/l03-s3-mood-focus.webp`,
          imageCaption: `Food shapes mood, focus, and energy. Notice how YOUR body responds. That's the real data.`,
          vocab: [
            { word: `food-mood connection`,
              definition: `The real, well-researched link between what you eat and how you feel. Real foods (protein, fiber, healthy fats) tend to give stable mood, sharp focus, lasting energy. Ultra-processed foods often cause mood swings, attention drops, energy crashes. Your body is your laboratory.`,
              audioPrompt: `The food-mood connection is the real, well-researched link between what you eat and how you feel, {name}. Researchers studying kids found that when kids eat foods that send clear steady signals, real foods with protein, fiber, healthy fats, their mood is more stable, their focus is sharper, and their energy lasts longer. When they eat mostly ultra-processed foods, mood swings increase, attention drops, and energy crashes happen more. Notice how YOUR body responds to different foods. That's the real data, more useful than any rule.` },
            { word: `blood sugar`,
              definition: `The level of glucose in your bloodstream at any given moment. Real foods with protein, fiber, and fat slow the rise, giving steady energy for hours. Ultra-processed foods with lots of sugar cause a fast spike, then a crash. Keeping blood sugar steady through real-food eating stabilizes mood, focus, and energy.`,
              audioPrompt: `Blood sugar is the level of glucose in your bloodstream at any given moment, {name}. When you eat, your body converts food into glucose and your blood sugar rises. Real foods with protein, fiber, and fat slow this rise, giving you steady energy for hours. Ultra-processed foods with lots of sugar cause a fast spike, then a crash, leaving you tired, cranky, and hungry again quickly. Keeping blood sugar steady through real-food eating is one of the most practical ways to stabilize mood, focus, and energy.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `All Foods Can Fit. The Both-And Truth`,
          paragraphs: [
            `Here's an important truth that protects you from food anxiety. ALL FOODS CAN FIT into a healthy life. You don't have to avoid pizza, ice cream, candy, or anything else forever to be healthy. People who try to be "perfect" with food often end up MORE obsessed with food, not less. They also miss the joy and connection that comes from sharing meals, birthday cake with friends, celebration foods with family, the thrill of an ice cream cone on a hot day. Food is one of life's joys. Treating it as just fuel or just rules misses the whole point.`,
            `The mature stance is BOTH-AND. Most of the time, eat real foods that send your body clear helpful information. AND, enjoy treats and special foods without guilt or shame. That's the formula researchers consistently find works best for long-term health, happiness, and a healthy relationship with food. The 80/20 idea works for many people: about 80% real foods, 20% whatever you love. Some days are more one, some more the other. That's normal. The goal isn't perfection, it's awareness and joy. Terra's first teaching about food: your body is wise. Feed it mostly real food. Enjoy treats without guilt. Notice how foods make you feel. Trust your body's signals. Eat with joy and connection. That's the wellness path, kind, sustainable, and free of the food rules that drive so many people crazy.`,
          ],
          image: `/ue-assets/lw/l03-s4-all-fits.webp`,
          imageCaption: `Both-and. Mostly real food, AND treats without guilt. Awareness and joy, not perfection.`,
          vocab: [
            { word: `all foods fit`,
              definition: `The protective truth that you don't need to avoid any food forever to be healthy. The mature stance is BOTH-AND, mostly real foods for daily eating, AND treats without guilt or shame. Joy and connection through food matter as much as nutrients.`,
              audioPrompt: `All foods fit is the protective truth that you don't need to avoid any food forever to be healthy, {name}. People who try to be perfect with food often end up MORE obsessed with food. They also miss the joy and connection from sharing meals, birthday cake with friends, celebration foods with family. The mature stance is both-and. Most of the time, eat real foods that send clear helpful information. AND, enjoy treats and special foods without guilt or shame. The goal isn't perfection. It's awareness and joy.` },
            { word: `intuitive eating`,
              definition: `The research-backed approach to food that focuses on listening to your body's hunger and fullness signals, eating with joy and awareness, and letting go of rigid food rules. Shown to improve long-term health and relationship with food better than most diets. Core idea: trust your body's signals. Food is information and joy, not a moral test.`,
              audioPrompt: `Intuitive eating is the research-backed approach to food that focuses on listening to your body's hunger and fullness signals, eating with joy and awareness, and letting go of rigid food rules, {name}. Developed by dietitians Evelyn Tribole and Elyse Resch, intuitive eating has been shown to improve people's long-term health, body image, and relationship with food better than most diets do. The core idea: trust your body's signals about what and how much to eat. Food is information and joy. Not a moral test.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four common kid foods or snacks. Classify each one: REAL FOOD SIGNALS (mostly whole, recognizable ingredients, clear helpful info to your body), SOMETIMES FOOD (ultra-processed but fine in moderation as part of life), or TRICKY FAKE-HEALTHY (looks healthy but is mostly ultra-processed)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `real`,    label: `Real Food Signals`,    color: `#34D399`, description: `Mostly whole, recognizable ingredients. Sends clear helpful info to your body. Daily food.` },
            { id: `some`,    label: `Sometimes Food`,        color: `#FBBF24`, description: `Ultra-processed, but fine as a treat or part of life. Joyful, not daily fuel.` },
            { id: `tricky`,  label: `Tricky Fake-Healthy`,    color: `#F87171`, description: `Looks healthy from the packaging but is actually mostly ultra-processed. The sneakiest category.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Food #1`,
              clues: [
                { text: `A breakfast of two scrambled eggs, a slice of whole-grain toast with butter, and an apple.` },
                { text: `Each ingredient is recognizable as something that grew, swam, or came from an animal.` },
                { text: `The kid feels satisfied and energized for hours afterward.` },
              ],
              correctAnswer: `real`,
              realWorldExample: `Whole ingredients plus protein plus fiber plus lasting energy equals real food signals.`,
              explanation: `Pure real food signals. Eggs, whole-grain toast, butter, and apple are all recognizable foods with simple ingredients. The combination has protein (eggs), fiber (apple, whole grain), and healthy fat (butter), which together send clear steady energy signals to the body. The lasting satisfaction is the proof. This is exactly the kind of food information that supports stable mood, focus, and energy.`,
            },
            {
              id: `case-2`,
              caseTitle: `Food #2`,
              clues: [
                { text: `A slice of birthday cake at a party with friends.` },
                { text: `Ultra-processed, full of sugar, definitely not daily food.` },
                { text: `But it's a celebration with people the kid loves, and they enjoy it without guilt.` },
              ],
              correctAnswer: `some`,
              realWorldExample: `Birthday cake fits in a healthy life. Joy and connection matter.`,
              explanation: `Pure sometimes food. The cake is ultra-processed and not daily fuel. AND, it's part of a celebration with people the kid loves. The mature wellness stance is BOTH-AND, real food most of the time AND treats with joy and connection. No guilt, no shame, no dramatic effort to skip it. Just a slice of cake at a party, with awareness it's a treat. That's healthy. Avoiding it would actually cause more harm (food anxiety) than eating it.`,
            },
            {
              id: `case-3`,
              caseTitle: `Food #3`,
              clues: [
                { text: `A "fruit snack" pouch labeled "made with real fruit!" and "no artificial colors."` },
                { text: `The ingredients list: sugar, corn syrup, fruit juice concentrate, food dyes, gelatin, citric acid, "natural flavors."` },
                { text: `It tastes like fruit but it's basically candy with a tiny bit of juice added.` },
              ],
              correctAnswer: `tricky`,
              realWorldExample: `Looks healthy from packaging, but the ingredient list reveals it's mostly ultra-processed.`,
              explanation: `Pure tricky fake-healthy. The packaging (a cute pouch, "real fruit," "no artificial colors") makes it LOOK like a healthy snack. But the ingredient list shows it's mostly sugar, corn syrup, and food dye, basically candy. This is one of the most common food tricks in stores. The packaging is designed to make ultra-processed foods seem healthy to parents and kids. Lesson: read the ingredient list, not just the front of the box. The list never lies.`,
            },
            {
              id: `case-4`,
              caseTitle: `Food #4: The Tricky One`,
              clues: [
                { text: `A "healthy" granola bar with a picture of nuts and oats on the wrapper.` },
                { text: `Ingredients list: sugar, corn syrup, oats, soy protein isolate, vegetable oil, "natural flavor," food dyes.` },
                { text: `It tastes great. The kid thinks they're choosing a smart snack.` },
              ],
              correctAnswer: `tricky`,
              realWorldExample: `"Granola bar" packaging often hides mostly-sugar ultra-processed food.`,
              explanation: `Tricky, {name}! You might call this real food because granola bars LOOK healthy and are sold next to actual nuts and oats. But look at the ingredient list: sugar and corn syrup are first, meaning they're the biggest ingredients. This is basically a candy bar dressed up to look healthy. Pure tricky fake-healthy in disguise. Lesson: marketing words like "natural," "made with real X," "healthy," and "no artificial Y" don't mean a food is actually real or whole. They're sales words. The only honest information is on the ingredient list. If the first few ingredients are sugar, corn syrup, or oils, the food is ultra-processed no matter how it's marketed. Read the list. It's the truth.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l03-q1`, format: `true-false`,
              question: `True or false: There are "good foods" and "bad foods," and a healthy person never eats the bad ones.`,
              correctAnswer: false,
              explanation: `False. Food isn't moral. People who think about food in those moral terms tend to feel guiltier, more anxious, or obsessed about eating. The mature stance is BOTH-AND, mostly real foods, AND treats without guilt. No food is forbidden in a healthy life.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What's the better way to think about FOOD?`,
              options: [
                `As good or bad`,
                `As INFORMATION. Every food sends messages to your body about energy, mood, focus, and growth`,
                `As just fuel`,
                `As something to fear`,
              ],
              correctIndex: 1,
              explanation: `Food is INFORMATION. Every food sends signals to your body about what to do with energy, mood, focus, and growth. Some foods send clear helpful messages. Others send confusing ones. The skill is recognizing what each food tells your body, not avoiding "bad" foods morally.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is REAL FOOD?`,
              options: [
                `Only expensive food`,
                `Food that's recognizable as something that grew, swam, walked, or came from a plant or animal in a basic form (apples, eggs, chicken, beans, rice, vegetables, milk)`,
                `Only raw food`,
                `Only food without packaging`,
              ],
              correctIndex: 1,
              explanation: `Real food is recognizable as something that grew, swam, walked, or came from a plant or animal in a basic form. Apples, eggs, chicken, rice, beans, broccoli, salmon, milk, oats, nuts. Ingredients you'd find in a kitchen, not a chemistry lab. Releases energy steadily, gives building blocks for growth.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What's tricky about ULTRA-PROCESSED foods?`,
              options: [
                `Nothing, they're fine all the time`,
                `They're ENGINEERED to be hyper-tasty and OVERRIDE your natural fullness signals. Designed to make you want more even when full`,
                `They taste bad`,
                `They're rare`,
              ],
              correctIndex: 1,
              explanation: `Ultra-processed foods are engineered in factories to be hyper-tasty (super sweet or salty), and designed to override your body's natural fullness signals (L01!). They cause big blood sugar spikes followed by crashes. They CAN fit in life, but knowing what they do helps you choose with awareness.` },

            { id: `l03-q5`, format: `multiple-choice`,
              question: `What does FOOD do to your MOOD, FOCUS, and ENERGY?`,
              options: [
                `Nothing`,
                `Real foods (protein, fiber, healthy fats) tend to give STABLE mood, SHARP focus, LASTING energy. Ultra-processed foods often cause mood swings, attention drops, energy crashes`,
                `Only matters for adults`,
                `Random effects`,
              ],
              correctIndex: 1,
              explanation: `Real foods (protein, fiber, healthy fats) tend to give stable mood, sharp focus, and lasting energy. Ultra-processed foods often cause mood swings, attention drops, and energy crashes. The food-mood connection is real and well-researched. Notice how YOUR body responds, that's the real data.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `How do you tell if a food is REALLY whole or just MARKETED as healthy?`,
              options: [
                `Trust the packaging`,
                `Read the INGREDIENT LIST. Marketing words like "natural" or "healthy" are sales words. The list is the truth`,
                `Look at the price`,
                `Trust the brand name`,
              ],
              correctIndex: 1,
              explanation: `Marketing words like "natural," "made with real fruit," "healthy," "no artificial X" are SALES words, not honesty. The only true information is on the ingredient list. If the first few ingredients are sugar, corn syrup, or oils, the food is ultra-processed no matter how it's marketed. Read the list. It never lies.` },

            { id: `l03-q7`, format: `true-false`,
              question: `True or false: A slice of birthday cake at a friend's party doesn't fit in a healthy life.`,
              correctAnswer: false,
              explanation: `False. ALL FOODS can fit in a healthy life. The mature stance is BOTH-AND, mostly real food daily AND treats with joy and connection at celebrations. People who try to be "perfect" with food often end up more obsessed with food, not less, and miss the connection that food brings.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about food?`,
              options: [
                `Be perfect about every meal`,
                `Feed your body mostly REAL food, enjoy treats WITHOUT guilt, notice how foods make you feel, trust your body's signals, eat with JOY and CONNECTION`,
                `Avoid all sugar forever`,
                `Food doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Feed your body mostly real food. Enjoy treats without guilt. Notice how foods make you feel. Trust your body's signals. Eat with joy and connection. That's the wellness path, kind, sustainable, and free of the food rules that drive so many people crazy.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Take a thoughtful breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Without judgment, notice how you currently FEEL after different foods. Which foods leave you feeling steady and energized? Which leave you cranky or crashed?` },
            { id: `r2`, text: `Have you ever thought about food as "good" or "bad," and felt guilty after eating something? What might shift if you saw food as just information instead?` },
            { id: `r3`, text: `Pick one fake-healthy food in your house. Read the ingredient list together. What do you notice?` },
            { id: `r4`, text: `What's one real-food meal or snack you LOVE? When could you enjoy it more often this week?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Modern nutrition research has shifted away from rigid "diet" thinking and toward "information" thinking. The intuitive eating research (Evelyn Tribole, Elyse Resch) and food psychology research (Brian Wansink, others) consistently find: kids and adults with HEALTHY relationships with food, treating it as information and joy rather than morality, have better long-term health outcomes than kids and adults with rigid "diet rules." Restrictive thinking creates anxiety and often backfires into eating disorders or food obsessions. Awareness without shame creates real wellness. Terra's note: you're going to eat thousands of meals across your lifetime. Building a HEALTHY relationship with food, curious, kind, joyful, awareness without anxiety, is one of the most important wellness gifts you can give yourself. Read ingredient lists. Notice how foods make you feel. Eat mostly real food. Enjoy treats with full joy. Trust your body. That's the foundation. The kid who lives this way grows into an adult with a calm, healthy, sustainable relationship with food, and that protects them their whole life.`,
          familyAdventure: `Family Ingredient List Reading. As a family, take 3-5 packaged foods from your kitchen and read the ingredient lists together. Don't shame anyone for what you find, just notice. Which foods are mostly real? Which are mostly ultra-processed? Which were marketed as "healthy" but actually weren't? This isn't about throwing things out. It's about building awareness as a family, so everyone gets sharper at seeing through food marketing. Once a week, try cooking one real-food meal together from scratch. Your home becomes a place where food awareness grows kindly, together.`,
          creativePrompt: {
            intro: `Write about your relationship with food — what works, what doesn't, and the kind of food-eater you want to grow into.`,
            floor: `Write at least 5 sentences. Describe foods that make you feel great and foods that don't, without judgment.`,
            stretch: `Write 8 to 10 sentences. Reflect on what you've learned about food as information and the both-and stance.`,
            open: `Write as much as you want. Write a full piece about your relationship with food. Reflect on the foods you love that give your body clear helpful information (the ones that leave you energized, focused, satisfied). Reflect on the treats you enjoy without guilt. Notice which fake-healthy foods might have tricked you in the past. Describe the kind of eater you want to grow into, curious about how foods make you feel, free of guilt and shame, joyful about real food AND about celebration foods, attentive to your body's signals. End with one small commitment, maybe reading more ingredient lists, eating more real food this week, or letting yourself enjoy a treat without guilt. Make it specific, kind, and joyful.`,
            frames: [
              `Foods that make me feel my best are ___.`,
              `Foods that leave me crashed or cranky are ___.`,
              `A fake-healthy food that might have tricked me is ___.`,
              `The kind of eater I want to become is ___.`,
              `My one small commitment is ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}. You now understand the most mature stance on food: it's INFORMATION, not morality. You know real food vs. ultra-processed, how to read ingredient lists, the food-mood connection, and the both-and truth that all foods can fit. Feed your body mostly real food. Enjoy treats without guilt. Notice how foods make you feel. That's the path. Next, we explore movement, not as punishment or exercise to "earn" food, but as one of life's great joys. THE POWER OF MOVEMENT. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `food-explorer`,
          badgeName: `Food Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
