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
          headline: `Sugar Isn't the Enemy`,
          paragraphs: [
            `Sugar has a complicated reputation. Some say it's poison. Some say cut it out entirely.`,
            `Neither is quite right. Sugar is a natural substance your body knows how to use. The question is: how much, in what form, from where?`,
          ],
          image: `/explorer-assets/wellness/l03-s1-sugar-not-enemy.png`,
          imageCaption: `Sugar isn't poison. It isn't unlimited either. Understanding how it works gives you more power than any rule could.`,
          vocab: [
            { word: `balance`,    definition: `A measured approach to sugar. Not fear, not unlimited — just understanding how it fits into the overall pattern.`,
              audioPrompt: `Balance with sugar isn't a strict rule, {name} — it's a steady, kind relationship with one ingredient among many. Terra wants you to know: extreme positions on food rarely serve people well. Treating sugar as either evil or harmless both miss the truth. Balance is the more grown-up answer.` },
            { word: `context`,    definition: `Where sugar comes from and what it arrives with. Matters as much as how much sugar there is.`,
              audioPrompt: `Context changes everything when it comes to sugar, {name}. The same molecule in a whole apple and in a fizzy drink behaves completely differently in your body. That's not about the chemistry of the sugar itself — it's about what surrounds it. Fiber, water, vitamins, or none of those. Context is the difference.` },
            { word: `moderation`, definition: `The middle path between fear and excess. The approach that actually works for long-term wellbeing.`,
              audioPrompt: `Moderation isn't an exciting word, {name} — but it's where most good answers live. Not "never have sugar" and not "have sugar with everything." Just a thoughtful, steady relationship with it. That kind of moderation, sustained over years, makes a far bigger difference than any dramatic restriction could.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Natural vs Added`,
          paragraphs: [
            `There's a big difference between the sugar in an apple and the sugar in a soda.`,
            `NATURAL sugar comes with fiber, vitamins, and water that slow it down. ADDED sugar is put in during processing — and hits your bloodstream fast.`,
          ],
          image: `/explorer-assets/wellness/l03-s2-natural-vs-added.png`,
          imageCaption: `Natural sugar comes packaged with fiber and nutrients. Added sugar arrives alone — and fast.`,
          vocab: [
            { word: `natural sugar`, definition: `Sugar found in whole foods like fruit and milk. Arrives with fiber, vitamins, and water that slow its absorption.`,
              audioPrompt: `The sugar in an apple and the sugar in a fizzy drink might be similar molecules, {name}, but your body experiences them completely differently. The apple's sugar arrives with fiber, vitamins, and water that slow it down. Context changes everything — and that's what natural sugar means.` },
            { word: `added sugar`,   definition: `Sugar and syrups put into food during processing. Hits the bloodstream fast because nothing slows its absorption.`,
              audioPrompt: `Added sugar is put into food during manufacturing, {name} — it shows up in fizzy drinks, packaged snacks, sauces, and cereals under dozens of different names. Unlike the sugar in whole fruit, it arrives without anything to slow it down. Understanding that difference gives you genuinely useful knowledge.` },
            { word: `absorption`,    definition: `How fast nutrients pass from your digestive system into your bloodstream. Slower with fiber. Faster without.`,
              audioPrompt: `Terra has been thinking about this for a long time, {name}: absorption isn't just about what you eat — it's about how fast what you eat enters your blood. Fiber slows absorption. Without fiber, sugar rushes in — which is what causes the spike. Same molecule, very different speed, very different effect on how you feel.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Spike and the Crash`,
          paragraphs: [
            `Big spike of added sugar? Blood glucose shoots up.`,
            `Your pancreas releases INSULIN to bring it back down — sometimes overshooting. Blood sugar crashes BELOW where it started. You feel tired, irritable, craving more sugar. The cycle repeats.`,
          ],
          image: `/explorer-assets/wellness/l03-s3-spike-and-crash.png`,
          imageCaption: `Up fast, down faster. That swing is what leaves you tired, irritable, and reaching for more sugar an hour later.`,
          vocab: [
            { word: `blood glucose`, definition: `The level of sugar in your bloodstream at any given moment. Rises after eating sugar, drops when insulin brings it back down.`,
              audioPrompt: `Blood glucose is your body's immediate energy measure, {name} — it goes up when you eat sugar and your body works to bring it back down. The problem with added sugar is how steeply it rises and how fast it then drops. That drop is what leaves you tired, cranky, and looking for more.` },
            { word: `insulin`,       definition: `A hormone your pancreas releases to manage rising blood glucose. Sometimes overshoots, causing the familiar energy crash.`,
              audioPrompt: `When blood sugar spikes, {name}, your body sends insulin to bring it back down — think of it as a fast correction response. But that correction can overshoot, dropping your blood sugar below where it started. That's the crash: the tired, irritable, craving-more feeling. Insulin is doing its job — the spike was just too steep.` },
            { word: `crash`,         definition: `The drop in energy, mood, and focus that follows a blood sugar spike. The "I need a snack RIGHT NOW" feeling.`,
              audioPrompt: `The crash is that familiar afternoon slump, {name} — suddenly tired, a little irritable, wanting something sweet to feel better. Your blood sugar dropped after a spike, and your body is signaling that it needs more fuel. Eating protein and fiber alongside carbohydrates is what smooths the whole thing out.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Smoothing It Out`,
          paragraphs: [
            `The fix is simple: don't eat sugar alone.`,
            `PROTEIN, FAT, and FIBER alongside carbs slow digestion. Blood sugar stays steady. Energy stays stable. Apple with peanut butter beats a candy bar — every single time.`,
          ],
          image: `/explorer-assets/wellness/l03-s4-smoothing-it-out.png`,
          imageCaption: `Pair sugar with protein, fat, and fiber and the rollercoaster turns into a gentle hill. Same enjoyment. Much steadier energy.`,
          vocab: [
            { word: `stable`,  definition: `Steady and consistent. What blood sugar does when sugar comes packaged with protein and fiber.`,
              audioPrompt: `Stable blood sugar feels completely different from the rollercoaster, {name}. Steady energy. Even mood. Hours of focus without that mid-afternoon collapse. It's not magic — it's just what happens when you give your body the right combination. Protein, fat, fiber, alongside the carbs. That pairing is the whole trick.` },
            { word: `pairing`, definition: `Eating sugar alongside other foods that slow its absorption. The most practical way to smooth out blood sugar.`,
              audioPrompt: `Pairing is one of the easiest tools you'll learn this whole subject, {name}. Don't eat sugar alone — pair it with protein or fat or fiber. Apple WITH peanut butter. Cookie AFTER a balanced meal. Sweet snack ALONGSIDE some cheese or nuts. The pairing changes the experience completely without taking anything away.` },
            { word: `steady`,  definition: `Even and reliable. The energy state you want most of the time — calm, focused, available.`,
              audioPrompt: `Steady is one of Terra's favorite words for energy, {name}. Not peaked, not crashed — just available, calm, ready for whatever you're doing. The peaks feel great in the moment, but the crashes that follow undo them. Steady is what lets you actually show up well, hour after hour. And the food choices that build it are simpler than people think.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Sugar and Your Brain`,
          paragraphs: [
            `Sugar lights up your brain's reward system.`,
            `It releases DOPAMINE — the "this felt good, do it again" signal. Over time, the brain can need more sweetness for the same response. Knowing this is power, not a reason to feel bad.`,
          ],
          image: `/explorer-assets/wellness/l03-s5-sugar-and-brain.png`,
          imageCaption: `Sugar lights up the same brain pathways that make any pleasure feel good. Understanding that is power, not shame.`,
          vocab: [
            { word: `reward system`,  definition: `Brain pathways that release dopamine in response to pleasure. Including the pleasure of sweet food.`,
              audioPrompt: `Your brain's reward system evolved to make beneficial things feel good, {name} — it's the reason you enjoy a good meal or a warm hug. Sweet food triggers that same system. Over time, the brain can adjust, needing more sweetness for the same response. Knowing this is power, not a reason to feel bad.` },
            { word: `dopamine`,       definition: `A brain chemical released in response to pleasure. Says "this felt good — do it again."`,
              audioPrompt: `Dopamine is the brain's "this felt good, do it again" signal, {name}. It's released when you eat something sweet, hear a great song, or accomplish something you're proud of. Foods engineered for maximum palatability are designed to trigger that signal repeatedly — understanding that is genuinely useful for making sense of your own experience.` },
            { word: `gut-brain axis`, definition: `The two-way connection between your gut and your brain. What you eat affects how you feel — and the other way around.`,
              audioPrompt: `Most of your body's serotonin — the chemical linked to feeling calm and content — is actually made in your gut, {name}. That's the gut-brain axis at work: a constant conversation between what's happening in your digestive system and how you feel emotionally. What you eat shapes your mood in more ways than most people realize.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Notice, Don't Restrict`,
          paragraphs: [
            `Trying to eliminate sugar completely usually backfires.`,
            `Better approach: NOTICE your top sugar sources. Read labels (sugar hides under many names). Swap one or two for something you'd actually enjoy. Small steady changes beat strict rules.`,
          ],
          image: `/explorer-assets/wellness/l03-s6-notice-dont-restrict.png`,
          imageCaption: `Awareness beats restriction. Strict rules rarely last. Small steady noticing — repeated over months — actually does.`,
          vocab: [
            { word: `ingredient`, definition: `Any component listed on a food label. Sugar hides under many names: sucrose, fructose, corn syrup, maltose, dextrose, and more.`,
              audioPrompt: `Ingredients are listed in order of quantity, {name} — so if sugar appears near the top, there's a lot of it. Sugar hides under many names: sucrose, fructose, maltose, corn syrup, dextrose. Learning to spot them in an ingredient list gives you real information about what you're eating.` },
            { word: `swap`,       definition: `Choosing one food in place of another. A small, sustainable change that beats strict rules over time.`,
              audioPrompt: `A swap is the most practical tool in this whole lesson, {name}. Not a rule, not a restriction — just a choice you make when it's easy. Sparkling water instead of a soda. Fruit instead of a packaged snack sometimes. Small swaps done consistently matter far more than dramatic changes that don't last.` },
            { word: `awareness`,  definition: `Paying attention to what you eat — without judgment, just curiosity. The starting point for any real change.`,
              audioPrompt: `Awareness is gentler and more powerful than restriction, {name}. Just noticing what you actually eat — not changing anything yet, not judging it — is already a kind of progress. Most people who try to white-knuckle their way to better eating burn out fast. People who lead with curious awareness keep building, year after year.` },
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
    fetch('/explorer-assets/wellness/l03-s1-sugar-not-enemy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-s2-natural-vs-added.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-s3-spike-and-crash.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-s4-smoothing-it-out.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-s5-sugar-and-brain.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l03-s6-notice-dont-restrict.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L03] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L03] One or more magazine assets missing'));
}
