// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS UE  |  L15 — Sugar, Caffeine & Energy
// Age band : upper_explorers (9–10)   Guide: terra (wolf)
// Domain   : real blood-sugar science, caffeine effects on kids, energy
//            drink research. Honest, age-appropriate, NEVER fear-based or
//            moralistic. Builds on L03 (food as info) and L09 (hunger/full).
// CALIBRATED: UE spec v1.1
// GAME FORMAT: investigation (real fuel / quick boost / energy trap).
//            Trick case = "natural energy drink" marketed as healthy but
//            packed with caffeine + sugar.
// SCOPE: real energy comes from whole-food fuel; sugar and caffeine give
//        quick boosts then crashes; energy drinks are not safe for kids;
//        steady energy from real practices
// VOICE: Terra = honest, calm, never moralistic, treats kid as smart enough
//        to handle real information
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const LIFEWELLNESS_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `lw`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-9-10-15`,
      title: `Sugar, Caffeine & Energy`,
      duration: 18,
      xpReward: 75,
      badge: `energy-wise`,
      badgeName: `Energy Wise`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Terra here. Today we talk honestly about three things kids hear a lot about: SUGAR, CAFFEINE, and ENERGY. You're going to hear conflicting messages your whole life. "Sugar is poison!" "Caffeine helps you focus!" "Energy drinks are dangerous!" "Just have a coffee, you'll feel better!" Today, we cut through that confusion with real science. What sugar actually does. What caffeine actually does to a kid's body specifically. Why energy drinks are different from coffee. And the truth about where REAL steady energy comes from. No fear, no panic, just honest information. Take a settled breath, and let's begin.`,
          headline: `Sugar, Caffeine & Energy`,
          subtitle: `Honest science about what gives real energy. What gives false energy`,
          visual: `/ue-assets/lw/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Sugar Actually Does`,
          paragraphs: [
            `Sugar isn't evil, but it does specific things to your body that are worth understanding. When you eat something sugary (candy, soda, sugary cereal, dessert), your blood sugar rises FAST. Your body responds by releasing INSULIN, a hormone that helps move that sugar into your cells for energy. So far so good. But here's where it gets tricky: with a big sugar hit, your body often releases TOO MUCH insulin, and your blood sugar then drops BELOW where it started. That's the SUGAR CRASH, the tired, cranky, hungry-again feeling kids and adults notice 30-90 minutes after a sugary food. Researchers studying kids found that sugary breakfasts (sugary cereal, donuts, pastries) often lead to worse focus and bigger mood swings throughout the morning.`,
            `Sugar in WHOLE FOODS is different. The natural sugar in an apple comes WITH fiber, water, and nutrients that slow how fast it enters your blood. You get steady energy, not a spike and crash. The natural sugar in milk comes with protein and fat that do the same. So "sugar" isn't one thing, sugar in fruit is gentle and useful; sugar concentrated in candy, soda, and sweets is fast and crash-prone. Most kids eat WAY MORE concentrated sugar than human bodies are designed for. The American Heart Association suggests kids your age have no more than about 25 grams of added sugar per day, but the average is more than DOUBLE that, often from drinks alone. Knowing this helps you choose with awareness, not avoid sugar (it's fine sometimes), but be conscious of how often.`,
          ],
          image: `/ue-assets/lw/l15-s1-sugar.webp`,
          imageCaption: `Sugar in fruit, gentle. Sugar in candy/soda, fast spike and crash. Same word, different effects.`,
          vocab: [
            { word: `sugar crash`,
              definition: `The tired, cranky, hungry-again feeling 30-90 minutes after a sugary food. Caused by your body releasing too much insulin in response to a sugar spike, which drops blood sugar BELOW where it started. Causes mood swings, focus drops, real fatigue.`,
              audioPrompt: `A sugar crash is the tired, cranky, hungry-again feeling 30 to 90 minutes after a sugary food, {name}. Here's the science. When you eat something sugary, your blood sugar rises fast. Your body releases insulin to move the sugar into your cells. With a big sugar hit, your body often releases too much insulin, and your blood sugar then drops below where it started. That's the crash. Mood swings, focus drops, real fatigue. Researchers found that sugary breakfasts often lead to worse focus and bigger mood swings each morning.` },
            { word: `blood sugar`,
              definition: `The level of glucose in your blood at any given moment. Rises when you eat, drops as your body uses the energy. Steady blood sugar is the foundation of steady mood, focus, and energy. Whole foods keep it stable for hours. Concentrated sugar spikes it fast then crashes it.`,
              audioPrompt: `Blood sugar is the level of glucose in your blood, {name}. It rises when you eat and drops as your body uses the energy. Steady blood sugar, neither too high nor too low, is the foundation of steady mood, focus, and energy. Whole foods with protein, fiber, and fat keep blood sugar stable for hours. Concentrated sugar, candy, soda, and sweets, spikes it fast then causes a crash. Steady blood sugar is one of the most useful things you can build with your food choices.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Caffeine Actually Does to Kids`,
          paragraphs: [
            `Caffeine is a STIMULANT, a drug that activates your nervous system. It's the most widely used drug in the world. For adults, moderate caffeine (a cup or two of coffee or tea per day) is usually fine and can be useful. For KIDS, caffeine works differently. Kids' bodies are smaller and still developing. The same amount of caffeine that gives an adult mild alertness can give a kid a racing heart, anxiety, trouble focusing, headaches, and trouble sleeping that night. The American Academy of Pediatrics recommends kids ages 9-10 have LITTLE TO NO caffeine. That's based on real research, not fear.`,
            `Caffeine works by blocking a sleep chemical called ADENOSINE in your brain. Adenosine builds up during the day and helps you feel tired so you can sleep. Caffeine blocks the receptors temporarily. The catch: when the caffeine wears off, all that built-up adenosine hits at once, and you get a bigger CRASH than you would have had without it. So caffeine doesn't actually GIVE you energy, it borrows energy from later. Plus, caffeine stays in your body for 6-8 hours. A coffee at 3pm can mess up your 10pm sleep, even if you feel fine. For kids, this matters even more, since you need MORE sleep than adults, and caffeine disrupts that growth-essential sleep. The wise approach for kids: little or none, especially in the afternoon and evening.`,
          ],
          image: `/ue-assets/lw/l15-s2-caffeine.webp`,
          imageCaption: `Caffeine borrows energy from later. Kids are more sensitive. AAP recommends little to none for ages 9-10.`,
          vocab: [
            { word: `caffeine`,
              definition: `A stimulant drug that blocks adenosine (your sleep chemical) in your brain. Stays in your body 6-8 hours. Doesn't actually give energy, borrows from later. American Academy of Pediatrics recommends kids 9-10 have LITTLE TO NO caffeine because of effects on heart, anxiety, sleep, focus.`,
              audioPrompt: `Caffeine is a stimulant drug that activates your nervous system, {name}. It works by blocking adenosine, a sleep chemical in your brain. Adenosine builds up during the day, helping you feel tired enough to sleep. Caffeine blocks it temporarily. When caffeine wears off, all that built-up adenosine hits at once, causing a bigger crash. Caffeine doesn't give energy, it borrows from later. The American Academy of Pediatrics recommends kids ages 9-10 have little to no caffeine, because kids' bodies respond more strongly than adults'.` },
            { word: `adenosine`,
              definition: `The chemical in your brain that builds up throughout the day, creating sleep pressure by evening. Your body's natural tiredness signal. Caffeine works by blocking adenosine receptors temporarily — when caffeine wears off, all the blocked adenosine floods in at once, creating a bigger crash than you'd have had without it.`,
              audioPrompt: `Adenosine is the chemical in your brain that builds up throughout the day, making you feel sleepy by evening, {name}. It's your body's natural sleep pressure signal. When you sleep, adenosine clears. When you're awake, it accumulates. Caffeine works by blocking adenosine receptors temporarily, so you don't feel the tiredness that's building. But when caffeine wears off, all the blocked adenosine floods in at once, creating a bigger crash than you'd have had without it. This is why caffeine doesn't add energy, it borrows from later and charges interest.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Energy Drinks Are Different (And Not Safe for Kids)`,
          paragraphs: [
            `One important category to know about: ENERGY DRINKS. These are NOT the same as coffee or soda, even though they're sold next to them. Energy drinks (and similar "boost" drinks) are designed to deliver VERY HIGH doses of caffeine plus other stimulant ingredients (taurine, guarana, ginseng) all at once. A single energy drink can have 4-5 times the caffeine of a regular soda. Many also have a LOT of sugar on top of that. Researchers studying energy drinks have found real, measurable risks for kids: dangerous heart rhythms, severe anxiety, sleep disruption, headaches, stomach problems, and in rare cases, hospitalizations and even deaths from caffeine overdose. This is why most major pediatric medical groups recommend that kids and teens NOT consume energy drinks at all.`,
            `Even more concerning, some energy drinks are marketed in ways that look like sports drinks or "natural energy" products, with packaging that suggests they're healthy. They're not. The amount of caffeine and stimulants in them is dangerous for growing bodies. Researchers found that some kids drinking energy drinks went to emergency rooms with heart problems they shouldn't have had at their age. This isn't fear-mongering, it's real medical data. If anyone offers you an energy drink, or one shows up at a party or sports event, you don't have to have it. Water, milk, regular fruit juice, or even regular soda is way safer for a kid's body. Sometimes the wise thing is just to politely say "no thanks." Trusted adults will back you up on this.`,
          ],
          image: `/ue-assets/lw/l15-s3-energy-drinks.webp`,
          imageCaption: `Energy drinks are not the same as soda. 4-5x the caffeine, plus stimulants. Real risks. AAP says no for kids and teens.`,
          vocab: [
            { word: `energy drinks`,
              definition: `Beverages designed to deliver very high doses of caffeine plus other stimulants. NOT the same as soda or coffee, often 4-5 times the caffeine. Major pediatric medical groups recommend kids and teens NOT consume them due to real risks: dangerous heart rhythms, anxiety, sleep disruption, and rare but serious overdoses.`,
              audioPrompt: `Energy drinks are beverages designed to deliver very high doses of caffeine plus other stimulant ingredients, {name}. Taurine, guarana, ginseng. A single energy drink can have 4 to 5 times the caffeine of a regular soda. Researchers studying energy drinks found real measurable risks for kids: dangerous heart rhythms, severe anxiety, sleep disruption, headaches, stomach problems, and in rare cases hospitalizations and even deaths from caffeine overdose. This is why most major pediatric medical groups recommend that kids and teens not consume energy drinks at all.` },
            { word: `stimulants`,
              definition: `Substances that activate your nervous system, increasing heart rate, alertness, and energy output. Caffeine is the most common. Energy drinks combine multiple stimulants (caffeine from several sources, taurine, guarana, ginseng), multiplying the effect. For kids' developing bodies, high-stimulant drinks create real risks regardless of whether they're labeled "natural."`,
              audioPrompt: `Stimulants are substances that activate your nervous system, increasing heart rate, alertness, and energy output, {name}. Caffeine is the most common stimulant. Energy drinks often contain multiple stimulants together, caffeine from several sources, plus taurine, guarana, and ginseng. Combining stimulants multiplies the effect on your heart and nervous system. For a kid's developing body, this creates real risks: racing heart, anxiety, disrupted sleep, and in rare cases serious heart problems. The label saying plant-based doesn't make a high-stimulant drink safe for kids.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Real Energy Actually Comes From`,
          paragraphs: [
            `Here's the truth most kids and adults miss: real, steady energy doesn't come from caffeine, sugar, or anything you eat for a "boost." Real energy comes from the REGULAR WELLNESS PRACTICES you've been learning in this whole subject. SLEEP (L02) is the biggest energy practice, getting 9-11 hours regularly gives you energy NO supplement can match. WHOLE-FOOD MEALS (L03) with protein, fiber, healthy fats, and complex carbs (not the sugary stuff) give your body steady fuel for hours. HYDRATION (L05), even mild dehydration causes fatigue. MOVEMENT (L04), counter-intuitively, regular movement gives you MORE energy, not less. NERVOUS SYSTEM REGULATION (L06, L07), being stuck in stress mode is exhausting; recovering well restores energy. SUNLIGHT (L13), morning sunlight sets your daily energy cycle.`,
            `When you do these practices well, you have STEADY natural energy throughout the day. No spikes, no crashes, no need for boosts. When you skimp on these practices and try to fix it with sugar and caffeine, you get the rollercoaster, fake energy followed by bigger crashes. Most adults figure this out eventually, often after years of caffeine and sugar dependence. You don't have to wait. Build the steady energy foundation now. Terra's first teaching about energy: real energy is built, not bought. Sleep well. Eat real food. Hydrate. Move. Recover from stress. Get outside. Do these and you'll have more steady energy than any energy drink could ever fake. Plus, you'll know that the energy is YOURS, not borrowed from a chemical that has to be paid back later.`,
          ],
          image: `/ue-assets/lw/l15-s4-real-energy.webp`,
          imageCaption: `Real energy comes from sleep, real food, water, movement, recovery, sunlight. Built, not bought.`,
          vocab: [
            { word: `real energy`,
              definition: `The steady energy that comes from regular wellness practices: enough sleep, whole-food meals, hydration, movement, stress recovery, sunlight. Doesn't crash. No "boost" or sugar or caffeine needed. Built over weeks of consistent practice, not bought in cans or cups.`,
              audioPrompt: `Real energy is the steady energy that comes from regular wellness practices, {name}. Enough sleep, whole-food meals with protein and fiber and healthy fats, hydration, regular movement, recovery from stress, morning sunlight. Doesn't crash. No boost or sugar or caffeine needed. When you do these practices well, you have steady natural energy throughout the day. No spikes, no crashes. Real energy is built, not bought. Most adults figure this out eventually after years of caffeine and sugar dependence. You don't have to wait. Build the foundation now.` },
            { word: `energy foundation`,
              definition: `The set of daily wellness practices that produce steady, reliable energy without crashes or chemical dependence: enough sleep, whole-food meals, hydration, regular movement, stress recovery, morning sunlight. Built over time. The kid who builds it early has a significant lifelong advantage over those relying on caffeine and sugar.`,
              audioPrompt: `Your energy foundation is the set of daily wellness practices that produce steady, reliable energy without crashes or chemical dependence, {name}. Sleep enough, eat whole-food meals, stay hydrated, move regularly, recover from stress, get morning sunlight. Together these practices build the kind of energy that lasts all day, needs no boosting, and doesn't crash. Most adults who rely on caffeine and sugar for energy haven't built this foundation. The kid who builds it early has a significant lifelong advantage: real, self-generated energy that belongs entirely to them.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four things kids might reach for when they want energy. Classify each: REAL FUEL (whole foods giving steady energy), QUICK BOOST (sugar/caffeine for a short rise then crash, fine in moderation as a treat), or ENERGY TRAP (energy drinks and similar, real risks for kids, designed-deceptive)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `fuel`,  label: `Real Fuel`,    color: `#34D399`, description: `Whole foods with protein, fiber, healthy fats. Steady energy for hours. No crash. Real fuel for a growing body.` },
            { id: `boost`, label: `Quick Boost`,   color: `#FBBF24`, description: `Sugar or moderate caffeine — short rise then crash. Fine occasionally as treats, not as daily energy strategy.` },
            { id: `trap`,  label: `Energy Trap`,   color: `#F87171`, description: `Energy drinks, high-caffeine drinks, candy meals. Real risks for kids. Pediatricians say no.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Choice #1`,
              clues: [
                { text: `A kid is hungry mid-morning before a hard math test.` },
                { text: `They eat: apple slices with peanut butter and a glass of milk.` },
                { text: `An hour into the test, they still feel focused, steady, and clear.` },
              ],
              correctAnswer: `fuel`,
              realWorldExample: `Apple, peanut butter, milk. Protein, fiber, fat, complex carbs. Steady focus.`,
              explanation: `Pure real fuel. The combination is perfect: complex carbs from apple, healthy fat and protein from peanut butter, more protein from milk. Together they give steady blood sugar, lasting energy, and clear focus, exactly what a body and brain need for a hard task. This is the kind of fuel that helps kids actually perform well on tests, sports, and demanding moments.`,
            },
            {
              id: `case-2`,
              caseTitle: `Choice #2`,
              clues: [
                { text: `A kid is at a birthday party and has 2 cupcakes and a soda.` },
                { text: `They feel energized and excited for about 30 minutes.` },
                { text: `An hour later they crash, feel cranky and tired, and don't fully recover for a few hours.` },
              ],
              correctAnswer: `boost`,
              realWorldExample: `Birthday treats give a quick rise and classic crash. Fine occasionally, not daily.`,
              explanation: `Pure quick boost. Birthday party treats are fine sometimes, joy and connection matter (L03 all foods can fit!). But notice what happens biologically: fast energy spike, big crash, hours of fatigue. This is what concentrated sugar does. The kid isn't bad for having it, AND knowing what's happening lets them be aware of why they feel cranky later. Treats are fine occasionally. Just know the pattern.`,
            },
            {
              id: `case-3`,
              caseTitle: `Choice #3`,
              clues: [
                { text: `A kid sees an older friend at a party drinking an energy drink and offering one.` },
                { text: `It has 200+ mg of caffeine, plus other stimulants and lots of sugar.` },
                { text: `The packaging makes it look cool and natural.` },
              ],
              correctAnswer: `trap`,
              realWorldExample: `Energy drinks have 4-5x the caffeine of soda. Real risks. Kids should not have them.`,
              explanation: `Pure energy trap. Energy drinks have 4-5 times the caffeine of regular soda PLUS other stimulants. Major pediatric medical groups say kids and teens should NOT consume them. Real risks include dangerous heart rhythms, severe anxiety, sleep disruption, and in rare cases hospitalizations. The cool packaging doesn't change what's inside. Wise move: politely say "no thanks." Adults will back you up on this.`,
            },
            {
              id: `case-4`,
              caseTitle: `Choice #4: The Tricky One`,
              clues: [
                { text: `A kid sees a "natural energy water" with packaging showing fruits and "plant-based energy."` },
                { text: `The ingredients list: water, sugar, "natural caffeine from green tea extract" (180mg), guarana, ginseng.` },
                { text: `It looks healthy, the kid thinks it's a smart choice for a hike.` },
              ],
              correctAnswer: `trap`,
              realWorldExample: `"Natural" and "plant-based" labels don't change the caffeine and stimulant content.`,
              explanation: `Tricky, {name}! It LOOKS healthy. Pictures of fruits, "natural," "plant-based." So you might call this real fuel or quick boost. But look at the ingredient list: 180mg caffeine (way over kid-safe levels), guarana and ginseng (more stimulants), sugar. Pure energy trap in disguise (the "natural" version). Lesson: just because something is labeled "natural" or "plant-based" doesn't make it safe for a kid's body. Caffeine from "natural" sources affects a kid's heart and nervous system the SAME as caffeine from any other source. Major pediatric groups say kids should avoid all high-caffeine drinks, no matter how they're marketed. Real fuel for a hike: water, fruit, a sandwich, real food, real water. Skip the "natural" energy drinks. Most adults wish they'd known this earlier.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's gently see what stayed with you, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is a SUGAR CRASH?`,
              options: [
                `Just a myth`,
                `The tired, cranky, hungry-again feeling 30-90 minutes after sugary food. Your body released TOO MUCH insulin, dropping blood sugar BELOW where it started`,
                `When sugar breaks`,
                `Only happens to adults`,
              ],
              correctIndex: 1,
              explanation: `A sugar crash is the tired, cranky, hungry-again feeling 30-90 minutes after sugary food. Your body releases too much insulin in response to a sugar spike, dropping blood sugar BELOW where it started. Causes mood swings, focus drops, real fatigue. Why sugary breakfasts often lead to worse mornings.` },

            { id: `l15-q2`, format: `true-false`,
              question: `True or false: Sugar in an apple and sugar in candy work the same way in your body.`,
              correctAnswer: false,
              explanation: `False. Sugar in WHOLE FOODS (fruit, milk) comes with fiber, water, protein, fat that SLOW absorption, giving steady energy. Sugar concentrated in candy, soda, sweets enters fast and crashes hard. Same word, very different effects in your body. "Sugar" isn't one thing.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What does CAFFEINE actually do?`,
              options: [
                `Gives you real energy`,
                `BLOCKS adenosine (your sleep chemical). Temporarily masks tiredness, doesn't add real energy. Borrows energy from later, causes bigger crash when it wears off`,
                `Nothing`,
                `Makes you healthier`,
              ],
              correctIndex: 1,
              explanation: `Caffeine is a stimulant that BLOCKS adenosine (your brain's sleep chemical). It temporarily masks tiredness but doesn't add real energy. When caffeine wears off, all that built-up adenosine hits at once and you get a bigger crash. Caffeine borrows energy from later, doesn't give energy.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What does the American Academy of Pediatrics recommend about CAFFEINE for kids ages 9-10?`,
              options: [
                `Have a few coffees daily`,
                `LITTLE TO NO caffeine. Based on real research. Kids' bodies respond more strongly than adults, causing racing heart, anxiety, sleep problems`,
                `Unlimited is fine`,
                `Only if tired`,
              ],
              correctIndex: 1,
              explanation: `The American Academy of Pediatrics recommends kids ages 9-10 have LITTLE TO NO caffeine. Based on real research, not fear. Kids' bodies respond differently than adults. The same caffeine that gives an adult mild alertness can give a kid racing heart, anxiety, trouble focusing, headaches, and sleep problems.` },

            { id: `l15-q5`, format: `multiple-choice`,
              question: `How are ENERGY DRINKS different from regular soda or coffee?`,
              options: [
                `They're the same`,
                `4-5 TIMES the caffeine of soda, plus other stimulants (taurine, guarana, ginseng). Major pediatric groups say kids and teens should NOT consume them`,
                `Less caffeine`,
                `Just sweeter`,
              ],
              correctIndex: 1,
              explanation: `Energy drinks have 4-5 times the caffeine of regular soda plus other stimulants (taurine, guarana, ginseng). NOT the same as soda or coffee. Major pediatric medical groups recommend kids and teens NOT consume them due to real risks: dangerous heart rhythms, anxiety, sleep disruption, and rare but serious overdoses.` },

            { id: `l15-q6`, format: `true-false`,
              question: `True or false: A drink labeled "natural energy" with "plant-based caffeine" is safe for kids because it's natural.`,
              correctAnswer: false,
              explanation: `False. Caffeine from "natural" sources (green tea extract, guarana) affects a kid's heart and nervous system EXACTLY the same as caffeine from any source. "Natural" and "plant-based" labels don't change what's inside. Major pediatric groups say kids should avoid all high-caffeine drinks, no matter how marketed.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `Where does REAL steady energy come from?`,
              options: [
                `Energy drinks`,
                `The regular wellness practices. SLEEP, whole-food MEALS, HYDRATION, MOVEMENT, NERVOUS-SYSTEM RECOVERY, SUNLIGHT. Built, not bought`,
                `Sugar`,
                `Coffee for kids`,
              ],
              correctIndex: 1,
              explanation: `Real, steady energy comes from regular wellness practices: enough sleep (L02), whole-food meals (L03), hydration (L05), movement (L04), nervous-system recovery (L06, L07), and morning sunlight (L13). Built over weeks of consistent practice, not bought in cans. No crashes, no need for boosts.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `What's Terra's first teaching about energy?`,
              options: [
                `Drink energy drinks`,
                `Real energy is BUILT, not bought. Sleep well, eat real food, hydrate, move, recover from stress, get outside. The energy is YOURS, not borrowed from a chemical that has to be paid back later`,
                `Sugar is the answer`,
                `Caffeine fixes everything`,
              ],
              correctIndex: 1,
              explanation: `Real energy is built, not bought. Sleep well. Eat real food. Hydrate. Move. Recover from stress. Get outside. Do these and you'll have more steady energy than any energy drink could fake. The energy is YOURS, not borrowed from a chemical that has to be paid back later with crashes.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Take an honest breath, {name}. Pick ONE question and answer it honestly, just for you. I'll remember what you share.`,
          prompts: [
            { id: `r1`, text: `Honestly, how often do you have concentrated sugar (candy, soda, dessert, sugary cereal)? Notice without judgment.` },
            { id: `r2`, text: `Have you ever had caffeine or energy drinks? How did your body respond? Did you notice racing heart, jitters, sleep issues afterward?` },
            { id: `r3`, text: `Of the real-energy practices (sleep, whole food, hydration, movement, recovery, sunlight), which are STRONGEST in your life? Which is weakest?` },
            { id: `r4`, text: `If an older kid or friend offered you an energy drink, what would you say? How could you politely decline?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `The research on sugar, caffeine, and energy drinks for kids is some of the clearest in pediatric medicine. Major medical organizations (American Academy of Pediatrics, American Heart Association) have detailed guidelines: low added sugar, little-to-no caffeine, and no energy drinks for kids and teens. These guidelines aren't fear-mongering, they're based on real measurable effects on kids' developing hearts, brains, and sleep. Terra's note: the wellness industry sells a lot of "energy" products to kids and adults. Most of them are designed to create dependence (you crash, you need another, repeat). The real energy you want isn't sold in stores. It's built through the daily practices you've been learning. Sleep, real food, water, movement, recovery, outside time. These are free. They work. The kid who builds real-energy habits early avoids decades of relying on stimulants and crashes. Most adults wish they'd built this foundation when they were your age. You can. Start now.`,
          familyAdventure: `Family Drink Check. As a family, do a friendly inventory: look at the drinks in your house. What's mostly water? What's mostly sugar? What has caffeine? Without judgment, just notice. Then talk about whether everyone wants to make any small shifts (more water, fewer sugary drinks, no energy drinks for the kids). Adults model it too. You're building a household awareness of what fuels real energy. Many families find that small changes (less soda, more water, no energy drinks) dramatically improve everyone's sleep, mood, and energy over weeks.`,
          creativePrompt: {
            intro: `Write honestly about sugar, caffeine, and energy in your life — what you notice, and the kind of energy you want to build.`,
            floor: `Write at least 5 sentences. Describe your current patterns and one shift you want to try.`,
            stretch: `Write 8 to 10 sentences. Build a fuller piece about real-energy practices vs. quick-boost reliance.`,
            open: `Write as much as you want. Write a full honest piece about energy in your life. Reflect on your current patterns with sugar (treats, sodas, desserts) and caffeine (if any). Notice without shame how those affect your mood, focus, sleep. Describe what you've learned about how real energy is built through wellness practices, not bought in drinks. Identify which real-energy practices are strongest in your life and which need attention. End with 1-2 specific commitments for building steadier energy this month. Make it honest, kind, and forward-looking.`,
            frames: [
              `My current patterns with sugar and caffeine are ___.`,
              `How those affect my body, mood, and sleep is ___.`,
              `Real-energy practices I'm strong in are ___.`,
              `Real-energy practices I want to grow are ___.`,
              `My specific commitments this month are ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Honest, smart work, {name}. You now understand the real science of sugar, caffeine, and energy. Sugar crashes, caffeine borrows energy from later, energy drinks have 4-5x the caffeine of soda and have real risks for kids. AND the truth about where REAL energy comes from, the regular wellness practices you've been learning. Build it, don't buy it. Next, we explore the wisdom of honoring your body when you're SICK, the role of rest, when to seek help. WHEN YOU'RE SICK. Carry your noble pack-heart, and I'll see you there. — Terra.`,
          badge: `energy-wise`,
          badgeName: `Energy Wise`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = LIFEWELLNESS_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-LW-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
