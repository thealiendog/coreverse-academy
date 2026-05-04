// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L03 — Sugar and Your Body
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L03 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-03`,
      title:     `Sugar and Your Body`,
      duration:  12,
      xpReward:  50,
      badge:     `sugar-aware`,
      badgeName: `Sugar Aware`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Here's something worth understanding, {name}: sugar has a complicated reputation. Some people say it's poison. Some say cutting it out entirely is the answer. Neither of those is quite right — and today we're going to look at what the science actually says. Sugar is a natural substance your body knows exactly how to use. The question is: in what amounts, in what forms, and from what sources? Understanding what sugar actually does in your body — the energy spike, the crash, the way it affects your brain — gives you something more useful than rules. It gives you real control over your own energy.`,
          headline: `Sugar and Your Body`,
          subtitle: `Sugar isn't the enemy — but understanding what it does in your body gives you real power over your own energy`,
          visual: `/explorer-assets/wellness/l03-welcome.png`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Natural vs added sugar`,
          paragraphs: [
            `**Natural sugars** are found in whole foods — the sugar in an apple, a mango, or a glass of milk. These come packaged with fibre, vitamins, water, and other nutrients that slow digestion and buffer the sugar's impact on your blood. **Added sugars** are sugars and syrups put into foods during processing — found in fizzy drinks, sweets, biscuits, and most packaged foods. Your body processes them very differently. Natural sugar in fruit arrives with fibre that slows its absorption; added sugar in a fizzy drink hits your bloodstream much faster. Even if the sugar molecules are chemically similar, what they come packaged with makes an enormous difference to how your body experiences them.`,
          ],
          image: `/explorer-assets/wellness/l03-magazine-1.png`,
          imageCaption: `Natural sugar comes packaged with fibre and nutrients — added sugar arrives on its own`,
          vocab: [
            { word: `natural sugar`, definition: `Sugar found in whole foods like fruit and milk — arriving alongside fiber, vitamins, and water that slow how your body absorbs it.`, audioPrompt: `The sugar in an apple and the sugar in a fizzy drink might be similar molecules, {name}, but your body experiences them completely differently. The apple's sugar arrives with fiber, vitamins, and water that slow it down. Context changes everything — and that's what natural sugar means.` },
            { word: `added sugar`, definition: `Sugar and syrups added to food during processing — hitting the bloodstream faster than natural sugar because they arrive without fiber or nutrients to slow absorption.`, audioPrompt: `Added sugar is put into food during manufacturing, {name} — it shows up in fizzy drinks, packaged snacks, sauces, and cereals under dozens of different names. Unlike the sugar in whole fruit, it arrives without anything to slow it down. Understanding that difference gives you genuinely useful knowledge.` },
            { word: `absorption`, definition: `The process of nutrients passing from your digestive system into your bloodstream — slower when food comes with fiber and faster when it doesn't.`, audioPrompt: `Terra has been thinking about this for a long time, {name}: absorption isn't just about what you eat, it's about how fast what you eat enters your blood. Fiber slows absorption. Without fiber, sugar rushes in — which is what causes the spike. Same molecule, very different speed, very different effect on how you feel.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The blood sugar rollercoaster`,
          paragraphs: [
            `When you eat a large amount of added sugar, your blood glucose **spikes rapidly**. Your pancreas releases insulin to manage the spike. Blood sugar then drops quickly — sometimes below where it started — causing a **crash**. You feel tired, irritable, and hungry again. You crave more sugar. The cycle repeats. This blood sugar rollercoaster affects your energy, mood, and ability to concentrate all day. The antidote is simple: eat **protein, fat, and fibre alongside your carbohydrates**. These slow digestion and keep blood sugar steady — giving you consistent energy and a more stable mood rather than peaks and dips.`,
          ],
          image: `/explorer-assets/wellness/l03-magazine-2.png`,
          imageCaption: `Spike, crash, crave more — the rollercoaster that protein and fibre can smooth out`,
          vocab: [
            { word: `blood glucose`, definition: `The level of sugar in your bloodstream at any given moment — which rises after eating sugar and drops when insulin brings it back down.`, audioPrompt: `Blood glucose is your body's immediate energy measure, {name} — it goes up when you eat sugar and your body works to bring it back down. The problem with added sugar is how steeply it rises and how fast it then drops. That drop is what leaves you tired, cranky, and looking for more.` },
            { word: `insulin`, definition: `A hormone your pancreas releases to manage rising blood glucose — bringing it back down after a spike, sometimes overshooting and causing the familiar energy crash.`, audioPrompt: `When blood sugar spikes, {name}, your body sends insulin to bring it back down — think of it as a fast correction response. But that correction can overshoot, dropping your blood sugar below where it started. That's the crash: the tired, irritable, craving-more feeling. Insulin is doing its job — the spike was just too steep.` },
            { word: `crash`, definition: `The drop in energy, mood, and focus that follows a blood sugar spike — when insulin overshoots and glucose falls below optimal levels.`, audioPrompt: `The crash is that familiar afternoon slump, {name} — suddenly tired, a little irritable, wanting something sweet to feel better. Your blood sugar dropped after a spike, and your body is signaling that it needs more fuel. Eating protein and fiber alongside carbohydrates is what smooths the whole thing out.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What sugar does to your brain`,
          paragraphs: [
            `Sugar activates your brain's **reward system** — the same pathways that make enjoyable things feel good. When you eat something sweet, dopamine is released, which creates a pleasant feeling. Over time, the brain can adjust — needing more sweetness to get the same response. Research also links consistently high added sugar consumption to disrupted sleep, reduced attention, and lower mood. Sugar also feeds certain types of bacteria in your gut — and because your gut and brain are closely connected through what's called the **gut-brain axis**, what happens in your gut can affect how you feel emotionally. This doesn't mean sugar is dangerous; it means understanding how it works gives you useful information.`,
          ],
          image: `/explorer-assets/wellness/l03-magazine-3.png`,
          imageCaption: `Sugar activates the brain's reward system — and the gut-brain connection means what you eat affects how you feel`,
          vocab: [
            { word: `reward system`, definition: `A network of brain pathways that releases dopamine in response to pleasurable experiences — including eating sweet foods — making those experiences feel good and motivating repetition.`, audioPrompt: `Your brain's reward system evolved to make beneficial things feel good, {name} — it's the reason you enjoy a good meal or a warm hug. Sweet food triggers that same system. Over time, the brain can adjust, needing more sweetness for the same response. Knowing this is power, not a reason to feel bad.` },
            { word: `dopamine`, definition: `A brain chemical released by the reward system that creates feelings of pleasure and motivation — one reason sweet foods can feel so hard to stop eating.`, audioPrompt: `Dopamine is the brain's "this felt good, do it again" signal, {name}. It's released when you eat something sweet, hear a great song, or accomplish something you're proud of. Foods engineered for maximum palatability are designed to trigger that signal repeatedly — understanding that is genuinely useful for making sense of your own experience.` },
            { word: `gut-brain axis`, definition: `The two-way communication system connecting your gut and your brain — meaning what you eat can affect your mood, and how you feel can affect your digestion.`, audioPrompt: `Most of your body's serotonin — the chemical linked to feeling calm and content — is actually made in your gut, {name}. That's the gut-brain axis at work: a constant conversation between what's happening in your digestive system and how you feel emotionally. What you eat shapes your mood in more ways than most people realize.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reading labels and making smarter choices`,
          paragraphs: [
            `Sugar hides under many names on ingredient labels: sucrose, fructose, corn syrup, maltose, dextrose, evaporated cane juice — and dozens more. There's a recommended daily limit on added sugar — and it's smaller than most people realise. The point isn't to count teaspoons; it's to **notice what you're eating and make small swaps where it's easy**. One practical approach: don't try to eliminate sugar completely — that often backfires. Instead, notice your top two or three sources of added sugar and consider whether there's a lower-sugar option you'd actually enjoy. Small, sustainable changes have far more impact than short-lived strict rules.`,
          ],
          image: `/explorer-assets/wellness/l03-magazine-4.png`,
          imageCaption: `Sugar hides under many names — noticing where it comes from is the first step`,
          vocab: [
            { word: `ingredient`, definition: `Any individual component listed on a food label — reading the ingredients list shows you what a food is actually made of, including all the forms of added sugar it may contain.`, audioPrompt: `Ingredients are listed in order of quantity, {name} — so if sugar appears near the top, there's a lot of it. Sugar hides under many names: sucrose, fructose, maltose, corn syrup, dextrose. Learning to spot them in an ingredient list gives you real information about what you're eating.` },
            { word: `label`, definition: `The nutrition and ingredient information printed on packaged food — a readable record of what a food actually contains, including added sugars.`, audioPrompt: `Terra believes reading a food label is one of the most grown-up things you can do, {name}. It's not about fear or judgment — it's about genuine curiosity. What's actually in this? How much added sugar? What are the first three ingredients? That information belongs to you. Labels are how you access it.` },
            { word: `swap`, definition: `Choosing one food in place of another — a small, sustainable change that reduces added sugar without making eating feel like a struggle.`, audioPrompt: `A swap is the most practical tool in this whole lesson, {name}. Not a rule, not a restriction — just a choice you make when it's easy. Sparkling water instead of a soda. Fruit instead of a packaged snack sometimes. Small swaps done consistently matter far more than dramatic changes that don't last.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `natural`,
              label: `🍎 Natural Sugar (comes with fibre and nutrients)`,
              color: `#34D399`,
            },
            {
              id: `added`,
              label: `🏷️ Added Sugar (put in during processing)`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l03-g1`,
              image: `l03-game-1.png`,
              label: `The sweetness in a whole apple.`,
              matchPhrase: `The sugar in a whole apple comes packaged with fibre and vitamins that slow its absorption — your body handles it very differently.`,
              correctMatch: `natural`,
            },
            {
              id: `l03-g2`,
              image: `l03-game-2.png`,
              label: `The natural sweetness in a glass of plain milk.`,
              matchPhrase: `Milk contains natural lactose sugar alongside protein, fat, and calcium — all working together as a whole food.`,
              correctMatch: `natural`,
            },
            {
              id: `l03-g3`,
              image: `l03-game-3.png`,
              label: `The sugar in a can of fizzy lemonade.`,
              matchPhrase: `Fizzy drinks contain added sugar that hits the bloodstream fast — without any fibre to slow it down.`,
              correctMatch: `added`,
            },
            {
              id: `l03-g4`,
              image: `l03-game-4.png`,
              label: `The sweetener in a packet of flavoured fruit snack bars.`,
              matchPhrase: `Packaged flavoured snacks usually contain added sugar put in during processing — even ones that sound fruity or natural.`,
              correctMatch: `added`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l03-q1`,
              format: `multiple-choice`,
              question: `What is the difference between natural and added sugar?`,
              options: [
                `Natural sugar is healthier because it tastes less sweet`,
                `Natural sugar comes in whole foods with fibre and nutrients that slow absorption; added sugar is put into processed foods during manufacturing`,
                `Added sugar comes from fruit; natural sugar is made in a factory`,
                `They are identical and affect the body exactly the same way`,
              ],
              correctIndex: 1,
              explanation: `Natural sugar in whole foods comes packaged with fibre, vitamins, and water that slow its absorption. Added sugar arrives on its own — hitting your bloodstream much faster and without any of those buffers.`,
            },
            {
              id: `l03-q2`,
              format: `multiple-choice`,
              question: `What causes the blood sugar crash after eating sugary foods?`,
              options: [
                `Your stomach empties too quickly after sweet foods`,
                `Insulin rapidly lowers blood glucose after a spike, causing blood sugar to drop below normal levels`,
                `Sugar is toxic and your body tries to remove it quickly`,
                `Your body stores excess sugar as fat, leaving none for energy`,
              ],
              correctIndex: 1,
              explanation: `When blood sugar spikes after a sugary food, your pancreas releases insulin to bring it back down. That correction can overshoot — dropping blood sugar below where it started — which is what causes the tired, irritable, craving-more feeling of a crash.`,
            },
            {
              id: `l03-q3`,
              format: `multiple-choice`,
              question: `What happens in your body after eating a large amount of added sugar?`,
              options: [
                `Your body absorbs it slowly and you feel calm and steady all day`,
                `Your blood sugar spikes, then your body works to bring it back down — often leaving you tired and wanting more sugar`,
                `It gets stored directly in your muscles as energy for later`,
                `Your brain immediately converts it to focus and alertness`,
              ],
              correctIndex: 1,
              explanation: `Added sugar without fibre or protein causes a rapid blood sugar spike. Insulin brings it back down — sometimes overshooting — which causes the familiar crash: tiredness, irritability, and cravings for more sugar. Eating protein and fibre alongside carbohydrates smooths this out.`,
            },
            {
              id: `l03-q4`,
              format: `true-false`,
              question: `The sugar in a whole apple is processed by your body differently than the same amount of added sugar in a fizzy drink.`,
              correctAnswer: true,
              explanation: `True. The apple's sugar arrives with fibre, water, and vitamins that slow its absorption significantly. The same sugar molecules in a fizzy drink hit your bloodstream much faster, causing a steeper spike and a quicker drop.`,
            },
            {
              id: `l03-q5`,
              format: `fill-blank`,
              question: `When you eat sugar alongside protein, fat, and fibre, your blood sugar stays more ___ — giving you steadier energy and mood.`,
              options: [
                `stable`,
                `high`,
                `low`,
                `fast`,
              ],
              correctIndex: 0,
              explanation: `Protein, fat, and fibre all slow digestion — which slows how quickly sugar enters your bloodstream. That's what keeps your blood sugar stable, your energy steady, and your mood more even throughout the day.`,
            },
            {
              id: `l03-q6`,
              format: `multiple-choice`,
              question: `What is one practical way to reduce added sugar without making eating stressful?`,
              options: [
                `Stop eating all sweet foods completely`,
                `Read every label and avoid any food that contains any sugar at all`,
                `Notice which foods you eat most often that have added sugar, and try swapping one or two for lower-sugar versions`,
                `Replace all sweet drinks with plain water immediately and permanently`,
              ],
              correctIndex: 2,
              explanation: `Small, sustainable changes work far better than big, sudden restrictions. Noticing where most of your added sugar comes from — and trying one or two swaps — makes a real difference over time without making eating feel like a battle.`,
            },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Understanding what added sugar does in your body is knowledge that doctors, nutritionists, and athletes all use to help themselves and others feel their best. You're learning something genuinely useful here.`,
          familyAdventure: `Check the labels on five foods in your kitchen together and find the "Added Sugars" line. Which surprised you most? Which had none? Pick one easy swap to try together this week — not because sugar is bad, but because it's genuinely interesting to know what's in your food.`,
          creativePrompt: `Next time you drink something sweet, check the label for "Added Sugars." You don't have to stop drinking it — knowing what's in it just gives you more choice.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know what added sugar actually does in your body — and that understanding is what gives you real power over your own energy and mood. Knowing what's in your food is the first step to taking good care of yourself. Terra is so proud to walk this path with you.`,
          badge: `sugar-aware`,
          badgeName: `Sugar Aware`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L03.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L03] Loaded: "Sugar and Your Body" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l03-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L03] One or more magazine assets missing'));
}
