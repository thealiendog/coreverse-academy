// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L15 — Energy: The Power Behind Everything
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 4-PS3-1 / 4-PS3-2
// REWRITE v2 (May 2026): Grade 1 accessible, MOTION / LIGHT / HEAT
// 3-bucket identification game tests sorting energy forms in action
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L15 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-15`,
      title:     `Energy: The Power Behind Everything`,
      duration:  12,
      xpReward:  50,
      badge:     `energy-explorer`,
      badgeName: `Energy Explorer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! We've learned about FORCES, LIGHT, and SOUND! Today, the big idea that ties them ALL together — ENERGY! Energy is what makes EVERYTHING happen! Motion is energy! Light is energy! Sound is energy! Heat is energy! The food you eat? Energy! The electricity in your home? Energy! Let's go!`,
          headline: `Energy: The Power Behind Everything`,
          subtitle: `What makes the universe go — and where it all comes from`,
          visual: `/explorer-assets/science/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Energy Makes Things HAPPEN`,
          paragraphs: [
            `Take a second and think, {name} — what things HAPPEN every day?`,
            `Your heart beats! Your body moves! Light shines! Cars drive! Wind blows! Trees grow! Water flows! Fires burn! Computers compute! Music plays! ALL of these happen because of ENERGY! Energy is the POWER behind everything that moves, glows, heats, or changes! No energy = nothing happens! With energy = the universe is ALIVE with action!`,
          ],
          image: `/explorer-assets/science/l15-s1-energy-power.webp`,
          imageCaption: `Energy makes everything HAPPEN!`,
          vocab: [
            { word: `energy`, definition: `The power that makes things happen.`,
              audioPrompt: `Energy is the power that makes things happen. Everything that moves, glows, heats up, or changes needs energy. Your body uses energy to walk. Cars use energy to drive. The sun gives off energy as light!` },
            { word: `power`,  definition: `What makes things happen.`,
              audioPrompt: `Power is what makes things happen. Energy is power. The electricity that powers your lights — that's energy. The strength that powers your muscles — that's energy. Power and energy are closely related ideas!` },
            { word: `happen`, definition: `To take place.`,
              audioPrompt: `To happen is to take place. Without energy, nothing happens. Cars don't drive. Lights don't turn on. Hearts don't beat. Energy makes things happen. The universe is constantly happening because energy is flowing!` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Energy Comes in MANY Forms`,
          paragraphs: [
            `Here's the cool part — energy doesn't look just ONE way! It comes in MANY forms!`,
            `MOTION energy — things moving (running, wind, flowing water)! LIGHT energy — what we see (sunlight, lamps)! HEAT energy — what we feel as warm (fire, sun, hot stoves)! SOUND energy — vibrations we hear (music, voices)! ELECTRIC energy — power in wires (lights, computers, phones)! CHEMICAL energy — stored in food and fuel (waiting to be used)! The universe is full of different energy forms!`,
          ],
          image: `/explorer-assets/science/l15-s2-many-forms.webp`,
          imageCaption: `Energy comes in many FORMS!`,
          vocab: [
            { word: `forms`,           definition: `Different kinds.`,
              audioPrompt: `Forms are different kinds. Energy has many forms. Motion energy. Light energy. Heat energy. Sound energy. Electric energy. Chemical energy. Each form looks and acts different — but they're all still energy!` },
            { word: `motion energy`,   definition: `Energy of moving things.`,
              audioPrompt: `Motion energy is the energy of moving things. A running kid has motion energy. A speeding car has it. Wind has it. Flowing water has it. The faster something moves, the more motion energy it has!` },
            { word: `chemical energy`, definition: `Energy stored inside things — food, gasoline, batteries.`,
              audioPrompt: `Chemical energy is energy stored inside things — like in food, gasoline, and batteries. It's not doing anything yet — it's waiting to be used. When you eat food, your body releases the stored chemical energy!` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Energy CHANGES Form`,
          paragraphs: [
            `Here's the BIG secret — energy doesn't disappear! It CHANGES form!`,
            `Turn on a LIGHTBULB! Electric energy goes IN! Light energy comes OUT (and a bit of heat too)! Eat FOOD! Chemical energy was stored inside! Your body changes it into motion energy (you run and play) and heat energy (you stay warm)! Strike a MATCH! Chemical energy changes into heat and light! Plug in a STEREO! Electric energy changes into sound! Energy NEVER vanishes — it just KEEPS CHANGING from one form to another!`,
          ],
          image: `/explorer-assets/science/l15-s3-changes-form.webp`,
          imageCaption: `Energy CHANGES form, never disappears!`,
          vocab: [
            { word: `change`,          definition: `To become something different.`,
              audioPrompt: `To change is to become something different. Energy changes from one form to another constantly. Electric energy becomes light in a bulb. Food energy becomes motion in your muscles. Sunlight becomes plant food!` },
            { word: `never disappear`, definition: `Energy never goes away — it changes forms.`,
              audioPrompt: `Never disappear — energy never disappears. This is one of the most important rules in physics. Energy can change forms — light becomes heat, motion becomes sound — but it can't be destroyed!` },
            { word: `transform`,       definition: `To change into something different.`,
              audioPrompt: `Transform means to change into something different. Energy transforms constantly. Sunlight transforms into plant food. Food transforms into motion. Motion transforms into heat from friction!` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your BODY Runs on Energy`,
          paragraphs: [
            `Right now, YOUR BODY is using ENERGY! From your food!`,
            `Food has CHEMICAL ENERGY stored inside it! When you EAT, your body breaks the food apart and RELEASES that energy! Your body uses the energy for EVERYTHING — moving your muscles, beating your heart, growing taller, thinking, breathing, keeping you WARM! That's why you feel TIRED if you skip meals! You ran out of energy! Eating regular healthy meals gives your body the energy it needs! Energy literally KEEPS YOU ALIVE!`,
          ],
          image: `/explorer-assets/science/l15-s4-food-energy.webp`,
          imageCaption: `Food = chemical energy! Body releases it for moving, thinking, growing, warmth!`,
          vocab: [
            { word: `food energy`,     definition: `The energy stored in food.`,
              audioPrompt: `Food energy is the energy stored in food. It's chemical energy — locked inside the food until your body releases it. When you eat, your body breaks down the food and gets the energy!` },
            { word: `release`,         definition: `To let out.`,
              audioPrompt: `To release is to let out. Your body releases energy from food when you digest it. The chemical energy was stored inside. Digestion breaks the food apart and releases the energy!` },
            { word: `keeps you alive`, definition: `Energy is essential for life.`,
              audioPrompt: `Keeps you alive — energy is what keeps you alive. Without energy, your body stops working. Your heart can't beat. Your brain can't think. Energy is what powers every single thing your body does!` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The SUN: Where Most Energy Starts`,
          paragraphs: [
            `Here's the biggest fact about energy on Earth — almost ALL of it traces back to ONE place: the SUN!`,
            `The sun gives off HUGE amounts of light and heat energy! Plants catch sunlight and turn it into chemical energy (food)! You eat plants — or eat animals that ate plants — and get that energy! The sun heats the air and water, causing wind and weather! Even gasoline comes from ANCIENT plants that captured sunlight millions of years ago! Without the SUN — no plants, no animals, no us! We're all running on solar power!`,
          ],
          image: `/explorer-assets/science/l15-s5-sun-source.webp`,
          imageCaption: `The SUN is the source of almost all Earth's energy!`,
          vocab: [
            { word: `source`,        definition: `Where something comes from.`,
              audioPrompt: `A source is where something comes from. The sun is Earth's main energy source. Almost all the energy used on Earth originally came from the sun. Trace the energy back, most paths lead to the sun!` },
            { word: `solar`,         definition: `From the sun.`,
              audioPrompt: `Solar means from the sun. Solar energy is sun energy. People can capture solar energy with special panels — they turn sunlight directly into electricity. Plants are nature's solar panels — turning sunlight into food!` },
            { word: `master source`, definition: `The main place energy comes from.`,
              audioPrompt: `Master source means the main place energy comes from. The sun is Earth's master energy source. Without the sun, nothing on Earth would have energy. No plants. No animals. No weather. No life!` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Saving Energy = Saving Earth`,
          paragraphs: [
            `Even though energy never disappears, the ENERGY HUMANS USE doesn't last forever!`,
            `Most of our energy comes from BURNING things — coal, gas, oil! These take MILLIONS of years to form! We're using them way faster than Earth can make new ones! When we waste energy, we waste these precious resources! Plus burning them puts smoke into the air! SAVING energy helps Earth! Turn off lights when you leave a room! Walk or bike instead of driving when you can! Don't leave water running! Small choices add up!`,
          ],
          image: `/explorer-assets/science/l15-s6-energy-saves.webp`,
          imageCaption: `Save energy: turn off lights, walk more, don't waste!`,
          vocab: [
            { word: `save energy`, definition: `To use less energy.`,
              audioPrompt: `To save energy is to use less energy. Small choices add up. Turn off lights you don't need. Walk instead of driving short distances. Wear a sweater instead of cranking up heat. Saving energy means less pollution!` },
            { word: `resources`,   definition: `Useful materials.`,
              audioPrompt: `Resources are useful materials. Energy resources like coal, oil, and gas are what we burn for energy. But they're not unlimited. They took millions of years to form. We're using them way faster than Earth can make new!` },
            { word: `caring`,      definition: `Showing love and respect.`,
              audioPrompt: `Caring means showing love and respect. Caring for energy = caring for Earth. Every time you save energy, you're being kind to the planet. You're helping reduce pollution. Even small choices matter!` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 energy moments. Drag each one — is it MOTION energy (movement!), LIGHT energy (glowing!), or HEAT energy (warmth!)?`,
          buckets: [
            { id: `motion`, label: `🏃 MOTION`, color: `#34D399` },
            { id: `light`,  label: `💡 LIGHT`,  color: `#FBBF24` },
            { id: `heat`,   label: `🔥 HEAT`,   color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `A kid running fast across a soccer field`,
              matchPhrase: `Yes! MOTION energy! Anything moving has motion energy. Faster movement = more motion energy!`,
              correctMatch: `motion` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `A lit lamp glowing brightly in a dark room`,
              matchPhrase: `Right! LIGHT energy! The lamp glows because electric energy changes into light energy!`,
              correctMatch: `light` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `A campfire warming people sitting around it`,
              matchPhrase: `Yes! HEAT energy! Fire releases heat energy. You feel warm because heat energy reaches you!`,
              correctMatch: `heat` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `Wind blowing leaves across a yard`,
              matchPhrase: `Right! MOTION energy! Wind is moving air — and anything moving has motion energy!`,
              correctMatch: `motion` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is ENERGY?`,
              options: [`Magic`, `The POWER that makes things move, change, grow, or happen`, `Just electricity`, `A type of food`],
              correctIndex: 1,
              explanation: `Energy is the power that makes everything happen. Motion, light, sound, heat, life — all need energy!` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `Energy comes in many FORMS. Which is an example?`,
              options: [`Just one form`, `MOTION, LIGHT, SOUND, HEAT, ELECTRIC, CHEMICAL — many forms`, `Only heat`, `Only sound`],
              correctIndex: 1,
              explanation: `Energy has many forms — motion, light, sound, heat, electric, chemical, and more!` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `When you turn on a lightbulb, what happens to ENERGY?`,
              options: [`It disappears`, `Electric energy CHANGES into light energy (and a bit of heat)`, `Nothing happens`, `It freezes`],
              correctIndex: 1,
              explanation: `Energy CHANGES form! Electric goes in, light comes out. Energy transforms, never disappears!` },
            { id: `l15-q4`, format: `true-false`,
              question: `Your BODY uses ENERGY from FOOD to do everything — moving, thinking, breathing.`,
              correctAnswer: true,
              explanation: `True! Food contains chemical energy. Your body releases it to power your muscles, brain, heart, breathing!` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Almost all the energy on Earth originally comes from the ___.`,
              options: [`sun`, `moon`, `ground`, `internet`],
              correctIndex: 0,
              explanation: `The SUN! Plants capture sunlight. Animals eat plants. We eat both. Trace energy back, it leads to the sun!` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why should we SAVE energy?`,
              options: [`To get rich`, `To protect Earth — resources aren't unlimited`, `It's silly to save`, `Energy is bad`],
              correctIndex: 1,
              explanation: `Saving energy protects Earth! Most resources take millions of years to form. Saving = less pollution!` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists are working on AMAZING new ways to make energy! SOLAR PANELS turn sunlight directly into electricity — putting them on roofs lets homes run on sun power! WIND TURBINES use windy days to spin generators and make electricity! HYDROELECTRIC dams use flowing water! GEOTHERMAL power comes from heat inside Earth! Even waves in the ocean can make electricity! These are called RENEWABLE energy — they don't run out! The future might run on clean, renewable energy!`,
          familyAdventure: `Be ENERGY DETECTIVES together! Walk through your house and count all the things using energy: lights, fridge, computers, TVs, phones, washer! For each one, ask: "Is it ON when no one needs it?" If yes, turn it off! Notice what energy gets WASTED! Make a family promise to save energy! Saving energy helps Earth — and saves money too!`,
          creativePrompt: `Draw an ENERGY MAP! In the middle, draw the SUN! From the sun, draw arrows to: PLANTS (catching sunlight), PEOPLE (eating plants and animals), CARS (running on old plants = oil), WEATHER (heated by sun = wind and rain)! For a 3-sentence floor: write a sentence about 3 things the sun powers. For a 5-sentence stretch: write a sentence about how the sun powers plants, people, cars, weather, and one more thing of your choice!`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You now understand ENERGY — the power behind everything! It comes in many FORMS (motion, light, sound, heat, electric, chemical)! It CHANGES form but never disappears! Your BODY runs on energy from FOOD! The SUN gives us most of our energy! And we should SAVE energy to protect Earth! Cosmo is so splashy-proud! 🦦`,
          badge: `energy-explorer`,
          badgeName: `Energy Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L15] Loaded: "Energy" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
