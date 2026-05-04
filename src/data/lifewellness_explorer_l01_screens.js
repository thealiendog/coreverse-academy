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
          headline: `The three macronutrients`,
          paragraphs: [
            `All food is made of three main nutrients called **macronutrients**. **Carbohydrates** are your body's primary energy source — found in grains, fruits, vegetables, and legumes. **Proteins** are your body's building material — they build and repair muscles, organs, enzymes, and immune cells, and are found in meat, fish, eggs, beans, and nuts. **Fats** are essential for brain function, hormone production, and absorbing certain vitamins — found in avocados, olive oil, nuts, fish, and dairy. Your body needs all three of these every single day. Cutting any one of them out leaves your body missing something it genuinely needs.`,
          ],
          image: `/explorer-assets/wellness/l01-magazine-1.png`,
          imageCaption: `Carbohydrates, proteins, and fats — your body needs all three, every day`,
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Vitamins and minerals`,
          paragraphs: [
            `Beyond macronutrients, your body needs **micronutrients** — vitamins and minerals — in smaller amounts. **Vitamin C** (found in citrus fruits, peppers, and strawberries) supports your immune system and helps wounds heal. **Calcium** (in dairy and leafy greens) builds strong bones and teeth. **Iron** (in red meat, spinach, and lentils) carries oxygen through your blood. **Vitamin D** (from sunlight and fatty fish) is essential for bone health and immune function. Each micronutrient has its own job — and eating a wide variety of colourful foods is the most reliable way to get the full range your body needs. Different colours often signal different nutrients.`,
          ],
          image: `/explorer-assets/wellness/l01-magazine-2.png`,
          imageCaption: `Different colours on your plate often mean different vitamins and minerals for your body`,
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Whole foods and ultra-processed foods`,
          paragraphs: [
            `**Whole foods** — vegetables, fruits, whole grains, proteins — contain the nutrients your body evolved to use. They come with fibre, vitamins, and minerals that work together to fuel and build your body. **Ultra-processed foods** — things like packaged snacks, fast food, and heavily sweetened cereals — are often engineered to hit a very specific balance of salt, sugar, and fat that makes them very easy to keep eating. They're frequently stripped of the fibre and nutrients that whole foods naturally have. That means eating them often doesn't give your body the building blocks it's looking for — so your body keeps searching for more. Neither is "bad" — but understanding what each type actually provides helps you make choices you feel good about.`,
          ],
          image: `/explorer-assets/wellness/l01-magazine-3.png`,
          imageCaption: `Whole foods give your body what it's looking for — ultra-processed foods often don't`,
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Hydration — your body's most essential nutrient`,
          paragraphs: [
            `Water is your body's most essential nutrient — you can survive weeks without food but only days without water. Your body is about **60% water**. Water regulates your temperature, transports nutrients, lubricates your joints, supports kidney function, and is needed for every chemical reaction in your body. Even mild dehydration — just slightly below optimal — can impair concentration, mood, and physical performance. Most kids need around five to seven cups of water per day, and more during activity or hot weather. Thirst is a useful signal, but you don't have to wait until you feel thirsty. Drinking water regularly throughout the day keeps everything running smoothly.`,
          ],
          image: `/explorer-assets/wellness/l01-magazine-4.png`,
          imageCaption: `Water is in every process your body runs — staying hydrated keeps everything working`,
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
    fetch('/explorer-assets/wellness/l01-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/wellness/l01-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-WELLNESS-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-WELLNESS-L01] One or more magazine assets missing'));
}
