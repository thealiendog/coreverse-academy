// ─────────────────────────────────────────────────────────────────────────────
// Life & Wellness  |  L01 — Nutrition: What Food Does in Your Body
// Age band : explorers (6–8)   Guide: terra
// ─────────────────────────────────────────────────────────────────────────────

const LW_L01 = {
  ageBand:   `explorers`,
  subjectId: `wellness`,
  guide:     `terra`,

  lessons: [
    {
      id:        `lw-6-8-01`,
      title:     `Nutrition: What Food Does in Your Body`,
      duration:  12,
      xpReward:  50,
      badge:     `nutrition-explorer`,
      badgeName: `Nutrition Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello, {name} — I'm Terra, and this is the beginning of something important. Here's a thought I want you to sit with: every single thing you eat becomes part of you. Your muscles. Your brain. The energy that gets you through a hard day. Today we're going to look at what food actually does inside your body — the real science of fuel and building blocks, and how your body knows what to do with what you give it. You might never look at your plate the same way again. I hope you don't. Let's begin.`,
          headline: `Nutrition: What Food Does in Your Body`,
          subtitle: `Everything you eat becomes part of you — your muscles, your brain, your energy, your bones`,
          visual: `/explorer-assets/wellness/l01-welcome.png`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Food Becomes You`,
          paragraphs: [
            `Every single thing you eat becomes part of you.`,
            `Your muscles, your brain, the energy that gets you through a hard day, the bones holding you up — built and rebuilt from what you eat, day after day.`,
          ],
          image: `/explorer-assets/wellness/l01-s1-food-becomes-you.png`,
          imageCaption: `Food isn't just fuel passing through. It literally becomes you — your bones, your brain, your blood, your skin.`,
          vocab: [
            { word: `nourishment`,     definition: `What food gives your body — energy to use, building blocks to grow, and everything in between.`,
              audioPrompt: `Nourishment is what your body is asking for every time you feel hungry, {name}. Not just calories — actual building materials, fuel for thinking, and the dozens of small things your body needs to work well. Terra wants you to think of food as something your body is welcoming in to do real work.` },
            { word: `fuel`,            definition: `The energy that powers everything you do — running, thinking, sleeping, growing.`,
              audioPrompt: `Fuel is what keeps you going, {name} — and your body needs steady fuel to feel steady. The food you eat becomes the energy you use to think, move, and even rest. When the fuel is good and consistent, everything else gets easier. Your body notices the difference.` },
            { word: `building blocks`, definition: `The materials your body uses to make and repair itself — muscles, bones, blood, skin, all built from what you eat.`,
              audioPrompt: `Right now, {name}, your body is rebuilding itself — cell by cell — from the food you've eaten over the past few days. New muscle tissue. New skin. New blood. Food isn't just energy. It's the actual material you're made from. Terra finds that pretty wondrous.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Three Macronutrients`,
          paragraphs: [
            `All food is made of three main nutrients called MACRONUTRIENTS.`,
            `CARBOHYDRATES (energy: grains, fruit, vegetables). PROTEINS (building material: eggs, fish, beans, meat). FATS (brain and hormones: avocado, olive oil, nuts). Your body needs all three.`,
          ],
          image: `/explorer-assets/wellness/l01-s2-three-macros.png`,
          imageCaption: `Three macronutrients, three jobs. Your body needs all of them — taking any one away leaves something missing.`,
          vocab: [
            { word: `macronutrient`, definition: `One of the three main nutrients your body needs in large amounts every day — carbohydrates, proteins, and fats.`,
              audioPrompt: `Have you ever noticed, {name}, that certain foods leave you energized for hours while others fade fast? The secret is macronutrients — your body's three main fuels and building blocks. Carbohydrates, proteins, fats: not optional extras, but the foundation of everything your body does.` },
            { word: `protein`,       definition: `The macronutrient that builds and repairs your muscles, organs, enzymes, and immune cells.`,
              audioPrompt: `Terra loves this word, {name}. Every muscle you use, every immune cell fighting infection, every enzyme running a reaction inside you — made from protein. It's your body's building material, and it's doing its quiet work right now, in every part of you.` },
            { word: `carbohydrate`,  definition: `Your body's primary energy source — found in grains, fruits, vegetables, and legumes.`,
              audioPrompt: `Here's something Terra wants you to know, {name}: carbohydrates are your brain and body's first choice for fuel. Whole grains, fruit, vegetables — not just food, but the energy that powers everything from your thinking to your movement. Your body reaches for them first, every time.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Vitamins and Minerals`,
          paragraphs: [
            `Your body also needs micronutrients — vitamins and minerals — in smaller amounts.`,
            `Each has a job. Iron carries oxygen through your blood. Calcium builds bones. Vitamin C supports immune health. Different colored foods carry different ones — that's why variety matters.`,
          ],
          image: `/explorer-assets/wellness/l01-s3-colorful-variety.png`,
          imageCaption: `Different colors on your plate often mean different vitamins and minerals. The variety on your plate becomes the variety in your body.`,
          vocab: [
            { word: `micronutrient`, definition: `Vitamins and minerals your body needs in smaller amounts — but each with its own essential job.`,
              audioPrompt: `Most kids don't realize, {name}, that the tiny amounts of vitamins and minerals in food are doing enormous work. Iron carries oxygen through your blood. Vitamin D builds your bones. Small quantities, huge consequences — that's what a micronutrient is.` },
            { word: `vitamin`,       definition: `A micronutrient your body uses for specific functions — like immunity, bone health, and skin repair.`,
              audioPrompt: `Imagine slicing into an orange, {name} — that Vitamin C is doing something real for your immune system. Each vitamin has a precise job, and different vitamins live in different foods. That's exactly why eating a variety of colorful things matters so much.` },
            { word: `mineral`,       definition: `A naturally occurring micronutrient like calcium, iron, or zinc — used to build bones, carry oxygen, and run many systems.`,
              audioPrompt: `Terra has been thinking about this for a long time, {name}: minerals are physical materials your body is partly built from. Calcium in your bones. Iron in your blood. Zinc in your immune system. They come from the earth through food, and your body knows exactly how to put them to work.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Whole Foods vs Ultra-Processed`,
          paragraphs: [
            `Whole foods — vegetables, fruits, whole grains, proteins — come with everything working together.`,
            `Ultra-processed foods are engineered for a precise balance of salt, sugar, and fat that's easy to keep eating. Knowing the difference puts you in control.`,
          ],
          image: `/explorer-assets/wellness/l01-s4-whole-vs-ultra.png`,
          imageCaption: `Whole foods come with fiber and nutrients all working together. Ultra-processed foods are often engineered to be hard to stop eating. Knowing this puts you in charge.`,
          vocab: [
            { word: `whole food`,      definition: `Minimally processed food, close to its natural form — like vegetables, fruits, whole grains, and legumes.`,
              audioPrompt: `Have you ever compared how you feel after an apple versus a packaged snack, {name}? A whole food comes with everything your body recognizes — fiber, vitamins, natural compounds working together. Nothing stripped away, nothing added. Your body knows exactly what to do with it.` },
            { word: `fiber`,           definition: `A part of plant foods that supports digestion, feeds healthy gut bacteria, and helps keep your energy steady.`,
              audioPrompt: `Fiber doesn't get absorbed like other nutrients, {name} — instead it travels through your digestive system doing quiet, important work: slowing digestion, feeding beneficial gut bacteria, steadying your energy. Terra thinks this is one of the most underappreciated things in all of nutrition.` },
            { word: `ultra-processed`, definition: `Foods significantly altered from their natural form, often engineered to be highly palatable and missing fiber and nutrients.`,
              audioPrompt: `Here's something genuinely useful, {name}: ultra-processed foods are often designed in labs to hit a precise combination of salt, sugar, and fat that makes them hard to stop eating. That's not a coincidence — it's intentional design. Knowing that puts you back in control.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Water Is Foundation`,
          paragraphs: [
            `Your body is about 60% water.`,
            `Water regulates temperature, transports nutrients, lubricates joints, and is needed for every chemical reaction in your body. Drink regularly through the day — don't wait for thirst.`,
          ],
          image: `/explorer-assets/wellness/l01-s5-water-foundation.png`,
          imageCaption: `Water is in every process your body runs. Sip throughout the day — the steady habit matters more than the big gulps.`,
          vocab: [
            { word: `hydration`, definition: `Having enough water in your body for everything to work — affecting energy, focus, mood, and how you feel overall.`,
              audioPrompt: `Terra loves how simple this is, {name}: your body is sixty percent water, and every single process it runs — from digesting food to thinking clearly to regulating temperature — requires water to work. Hydration isn't one thing your body does. It's the condition under which everything else happens.` },
            { word: `regulate`,  definition: `To keep something in a healthy range — what water helps your body do for temperature, fluid balance, and many systems.`,
              audioPrompt: `Regulate means keeping something where it needs to be, {name}. Your body has to stay within a narrow temperature range, a careful internal chemistry — and water is how it manages almost all of it. Every process keeping you well is a form of regulation your body is quietly doing right now.` },
            { word: `thirst`,    definition: `A signal that you needed water already. Drink steadily through the day — don't wait for the signal.`,
              audioPrompt: `Thirst shows up late, {name}. By the time you actually feel thirsty, your body has been wanting water for a while. A headache, low energy, trouble focusing — those can all be early signs that came before thirst did. Sipping steadily through the day works much better than chugging when you finally notice.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Everyday Foods, Sometimes Foods`,
          paragraphs: [
            `Most days, eat foods that nourish — whole foods, water, variety, balance.`,
            `SOMETIMES foods — birthday cake, cinema snacks — are part of a healthy life too. No food is "bad." It's the everyday pattern that builds your body.`,
          ],
          image: `/explorer-assets/wellness/l01-s6-everyday-and-sometimes.png`,
          imageCaption: `Everyday foods build you. Sometimes foods are part of a full life. Both belong. The overall pattern is what shapes you over time.`,
          vocab: [
            { word: `everyday`,  definition: `Foods that nourish you most days. The regular pattern of your eating — what your body actually gets built from.`,
              audioPrompt: `Everyday foods are the ones that show up in your normal week, {name} — the breakfasts, the lunches, the dinners. Those are what your body is mostly being built from. Terra wants you to know: this is where the real care happens. Not in any single meal, but in the steady, regular pattern over time.` },
            { word: `sometimes`, definition: `Foods enjoyed for celebrations and treats. A normal, healthy part of life — just not the everyday pattern.`,
              audioPrompt: `Sometimes foods are the cake at a birthday, the popcorn at the cinema, the special treat after a long week, {name}. Terra wants you to understand: these belong in a healthy life. They're not bad. They're not something to feel guilty about. They're just sometimes — not everyday — and that's exactly the right way to think about them.` },
            { word: `balance`,   definition: `An overall pattern that includes both everyday nourishment and sometimes treats. What healthy eating actually looks like.`,
              audioPrompt: `Balance is the whole picture, {name} — not any single meal, but the pattern over weeks and months. Whole foods most days. Treats sometimes. Water steadily. Variety. Nothing strict, nothing forbidden. Just a steady, generous, kind approach to feeding the body you're growing into. That's balance. And it lasts.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `everyday`,
              label: `🌱 Everyday Nourishing Foods`,
              color: `#34D399`,
            },
            {
              id: `sometimes`,
              label: `🎉 Sometimes Foods`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l01-g1`,
              image: `l01-game-1.png`,
              label: `A bowl of porridge with banana and a glass of water for breakfast.`,
              matchPhrase: `Whole grains, natural fruit, and water — this gives your body a full range of nutrients to start the day.`,
              correctMatch: `everyday`,
            },
            {
              id: `l01-g2`,
              image: `l01-game-2.png`,
              label: `A plate with rice, vegetables, and some eggs or beans.`,
              matchPhrase: `Carbohydrates, protein, and plenty of micronutrients — this is a meal your body knows exactly what to do with.`,
              correctMatch: `everyday`,
            },
            {
              id: `l01-g3`,
              image: `l01-game-3.png`,
              label: `A bag of crisps as a treat at the cinema.`,
              matchPhrase: `Treats like these are a normal part of life — enjoyed sometimes, as part of an overall balanced way of eating.`,
              correctMatch: `sometimes`,
            },
            {
              id: `l01-g4`,
              image: `l01-game-4.png`,
              label: `A slice of birthday cake at a party.`,
              matchPhrase: `Celebrations call for celebration food — and that's completely fine as part of a balanced relationship with eating.`,
              correctMatch: `sometimes`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l01-q1`,
              format: `multiple-choice`,
              question: `What are the three macronutrients?`,
              options: [
                `Vitamins, minerals, and water`,
                `Carbohydrates, proteins, and fats`,
                `Sugar, salt, and fat`,
                `Fibre, calcium, and iron`,
              ],
              correctIndex: 1,
              explanation: `Carbohydrates give you energy, proteins build and repair your body, and fats support your brain, hormones, and vitamin absorption. Your body needs all three every day — they each do a different job.`,
            },
            {
              id: `l01-q2`,
              format: `multiple-choice`,
              question: `What is the primary function of protein in the body?`,
              options: [
                `Providing quick energy for activity`,
                `Building and repairing muscles, organs, enzymes, and immune cells`,
                `Regulating body temperature`,
                `Absorbing vitamins from food`,
              ],
              correctIndex: 1,
              explanation: `Protein is your body's building material. Every muscle you use, every immune cell fighting an infection, and every enzyme running a chemical reaction in your body is made from protein.`,
            },
            {
              id: `l01-q3`,
              format: `multiple-choice`,
              question: `Why are ultra-processed foods often hard to stop eating?`,
              options: [
                `They contain chemicals that are banned in most other foods`,
                `They're engineered to hit a perfect balance of salt, sugar, and fat that makes you want to keep eating`,
                `They are digested more slowly, so you feel full for longer`,
                `They contain more nutrients than whole foods`,
              ],
              correctIndex: 1,
              explanation: `Ultra-processed foods are carefully designed to taste as appealing as possible — hitting a specific combination of salt, sugar, and fat that makes it very easy to keep going. That's worth knowing, not to feel guilty, but to understand what's happening.`,
            },
            {
              id: `l01-q4`,
              format: `true-false`,
              question: `Your body needs all three macronutrients — carbohydrates, proteins, and fats — every single day to work well.`,
              correctAnswer: true,
              explanation: `True. Each macronutrient does a different job: carbohydrates fuel you, proteins build and repair you, and fats support your brain and help absorb certain vitamins. Cutting any one out leaves your body short of something it genuinely needs.`,
            },
            {
              id: `l01-q5`,
              format: `fill-blank`,
              question: `The nutrients your body needs in large amounts — carbohydrates, proteins, and fats — are called ___.`,
              options: [
                `macronutrients`,
                `micronutrients`,
                `vitamins`,
                `minerals`,
              ],
              correctIndex: 0,
              explanation: `Macronutrients are the big three — the main building blocks and fuel sources your body needs in large amounts every day. Micronutrients (vitamins and minerals) are needed in smaller amounts but are just as important.`,
            },
            {
              id: `l01-q6`,
              format: `multiple-choice`,
              question: `Why does eating a wide variety of colourful fruits and vegetables help your body?`,
              options: [
                `Because bright colours make food taste better`,
                `Because colour in food comes from dyes that the body uses for energy`,
                `Because different colours come from different vitamins and minerals that your body needs`,
                `Because colourful foods contain more calories for more energy`,
              ],
              correctIndex: 2,
              explanation: `The colours in fruits and vegetables come from natural compounds called phytonutrients — and different colours signal different vitamins and minerals. Eating a variety of colours is a simple way to make sure your body gets a wide range of what it needs.`,
            },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Every athlete, every growing child, and every person who wants to feel their best is working with the same question: what does my body need today? Nutrition is how you answer it.`,
          familyAdventure: `Cook a whole meal from scratch together using only whole, unprocessed ingredients. While eating, go around and name one thing each food on the plate does for your body. Notice together how the meal feels.`,
          creativePrompt: `Pay attention to how different foods make you feel today — not just how they taste, but your energy and focus an hour later. That noticing is the beginning of understanding your own body.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that every food you eat is doing a job in your body — building your muscles, fuelling your brain, or keeping your blood healthy. The care you give your body through food is real, and it matters. Terra is so proud to walk this path with you.`,
          badge: `nutrition-explorer`,
          badgeName: `Nutrition Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default LW_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = LW_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = LW_L01.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = LW_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-WELLNESS-L01] Loaded: "Nutrition: What Food Does in Your Body" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/wellness/l01-s1-food-becomes-you.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-s2-three-macros.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-s3-colorful-variety.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-s4-whole-vs-ultra.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-s5-water-foundation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-s6-everyday-and-sometimes.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L01] One or more magazine assets missing'));
}
