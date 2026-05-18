// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L15 — Energy: The Power Behind Everything
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 4-PS3-1 / 4-PS3-2 (energy in motion, sound, light, heat)
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
          guideText: `Hey {name}, Cosmo here! We've learned about FORCES (L12), LIGHT (L13), and SOUND (L14). Today, the big idea that ties them ALL together — ENERGY. Energy is what makes EVERYTHING happen. Motion is energy. Light is energy. Sound is energy. Heat is energy. The food you eat? Energy. The electricity in your home? Energy. Today you'll see how energy connects everything in the universe. Let's go!`,
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
            `Take a second and think — what things HAPPEN every day?`,
            `Your heart beats. Your body moves. Light shines. Cars drive. Wind blows. Trees grow. Water flows. Fires burn. Computers compute. Music plays. ALL of these happen because of ENERGY. Energy is the POWER behind everything that moves, glows, heats, or changes. No energy = nothing happens. With energy = the universe is ALIVE with action. Energy is one of the BIGGEST ideas in science.`,
          ],
          image: `/explorer-assets/science/l15-s1-energy-power.webp`,
          imageCaption: `Energy makes everything HAPPEN. Heart beats, lights glow, wind blows, trees grow. Universe = energy in action.`,
          vocab: [
            { word: `energy`,         definition: `The POWER that makes things happen. Everything needs ENERGY to move, change, or grow.`,
              audioPrompt: `Energy, {name}, is the power that makes things happen. Everything that moves, glows, heats up, or changes needs energy. Your body uses energy to walk and think. Cars use energy to drive. The sun gives off energy as light and heat. Plants store energy from sunlight. Energy is everywhere — and it's what makes the universe do anything at all.` },
            { word: `power`,          definition: `What MAKES things happen. ENERGY is power.`,
              audioPrompt: `Power, {name}, is what makes things happen. Energy is power. The electricity that "powers" your lights — that's energy. The strength that "powers" your muscles — that's energy. Power and energy are closely related ideas. They're about getting things to MOVE, CHANGE, or HAPPEN.` },
            { word: `happen`,         definition: `To take place. Without energy, NOTHING happens.`,
              audioPrompt: `To happen, {name}, is to take place — for something to occur. Without energy, nothing happens. Cars don't drive. Lights don't turn on. Hearts don't beat. Plants don't grow. Energy makes things happen. The universe is constantly happening because energy is constantly flowing — from one place to another, changing form, doing work.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Energy Comes in MANY Forms`,
          paragraphs: [
            `Here's the cool part — energy doesn't look just ONE way. It comes in MANY forms.`,
            `MOTION energy — things moving (running, wind, flowing water). LIGHT energy — what we see (sunlight, lamps). HEAT energy — what we feel as warm (fire, sun, hot stoves). SOUND energy — vibrations we hear (music, voices). ELECTRIC energy — power in wires (lights, computers, phones). CHEMICAL energy — stored in food and fuel (waiting to be used). The universe is full of different energy forms — and they all count as energy.`,
          ],
          image: `/explorer-assets/science/l15-s2-many-forms.webp`,
          imageCaption: `Energy comes in many FORMS: motion, light, heat, sound, electric, chemical. All types of energy.`,
          vocab: [
            { word: `forms`,          definition: `Different kinds. Energy has many FORMS — motion, light, sound, heat, and more.`,
              audioPrompt: `Forms, {name}, are different kinds. Energy has many forms. Motion energy. Light energy. Heat energy. Sound energy. Electric energy. Chemical energy. Each form looks and acts different — but they're all still energy. They're all power. They're all part of the energy family. Same big idea, many faces.` },
            { word: `motion energy`,  definition: `Energy of MOVING things. A running kid has MOTION ENERGY.`,
              audioPrompt: `Motion energy, {name}, is the energy of moving things. A running kid has motion energy. A speeding car has it. Wind has it. Flowing water has it. Anything that's moving has motion energy. The faster something moves, the more motion energy it has.` },
            { word: `chemical energy`, definition: `Energy STORED inside things — like in food, gasoline, batteries.`,
              audioPrompt: `Chemical energy, {name}, is energy stored inside things — like in food, gasoline, and batteries. It's not doing anything yet — it's waiting to be used. When you eat food, your body releases the chemical energy stored inside. When a car burns gasoline, it releases the chemical energy in the fuel. Chemical energy is STORED energy.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Energy CHANGES Form`,
          paragraphs: [
            `Here's the BIG secret — energy doesn't disappear. It CHANGES form.`,
            `Turn on a LIGHTBULB. Electric energy goes IN. Light energy comes OUT (and a bit of heat energy too). Eat FOOD. Chemical energy was stored inside. Your body changes it into motion energy (you walk, run, play) and heat energy (you stay warm). Strike a MATCH. Chemical energy in the matchhead changes into heat and light. Plug in a STEREO. Electric energy changes into sound energy. Energy NEVER vanishes — it just KEEPS CHANGING from one form to another. Forever.`,
          ],
          image: `/explorer-assets/science/l15-s3-changes-form.webp`,
          imageCaption: `Energy CHANGES form, never disappears. Electric → light. Food → motion. Match → heat and light.`,
          vocab: [
            { word: `change`,         definition: `To become something different. Energy CHANGES from one form to another.`,
              audioPrompt: `To change, {name}, is to become something different. Energy changes from one form to another constantly. Electric energy becomes light in a bulb. Chemical energy in food becomes motion in your muscles. Sunlight becomes plant food. Energy is always transforming. It never stays in just one form for long.` },
            { word: `never disappear`, definition: `Energy NEVER goes away. It just CHANGES forms.`,
              audioPrompt: `Never disappear, {name} — energy never disappears. This is one of the most important rules in physics. Energy can change forms — light becomes heat, motion becomes sound — but it can't be destroyed. The same energy that was in the universe billions of years ago is still here today. Just in different forms.` },
            { word: `transform`,      definition: `To CHANGE into something different. Energy can TRANSFORM into many forms.`,
              audioPrompt: `Transform, {name}, means to change into something different. Energy transforms constantly. Sunlight transforms into chemical energy in plants. Chemical energy transforms into motion when animals run. Motion transforms into heat from friction. Energy is always transforming — making the universe a busy, changing place.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your BODY Runs on Energy`,
          paragraphs: [
            `Right now, YOUR BODY is using ENERGY. From your food.`,
            `Food has CHEMICAL ENERGY stored inside it — from when the plants grew using sunlight, or from when the animal ate the plants. When you EAT, your body breaks the food apart and RELEASES that energy. Your body uses the energy for EVERYTHING — moving your muscles, beating your heart, growing taller, thinking, breathing, keeping you WARM. That's why you feel TIRED if you skip meals. You ran out of energy! Eating regular healthy meals gives your body the energy it needs. Energy literally KEEPS YOU ALIVE.`,
          ],
          image: `/explorer-assets/science/l15-s4-food-energy.webp`,
          imageCaption: `Food = chemical energy. Body releases it for moving, thinking, growing, warmth. Eat to fuel up.`,
          vocab: [
            { word: `food energy`,    definition: `The energy STORED in food. Your body uses FOOD ENERGY to do everything.`,
              audioPrompt: `Food energy, {name}, is the energy stored in food. It's chemical energy — locked inside the food until your body releases it. When you eat, your body breaks down the food and gets the energy. That energy powers your muscles, your brain, your heart, everything. Without food, your body runs out of energy and stops working.` },
            { word: `release`,        definition: `To LET OUT. Your body RELEASES energy from food when you digest it.`,
              audioPrompt: `To release, {name}, is to let out. Your body releases energy from food when you digest it. The chemical energy was stored inside. Digestion breaks the food apart and releases the energy. Then your body uses that energy for whatever you need to do. Same with cars — they release energy from gasoline to drive.` },
            { word: `keeps you alive`, definition: `Energy is essential for life. Without energy, your body STOPS working.`,
              audioPrompt: `Keeps you alive, {name} — energy is what keeps you alive. Without energy, your body stops working. Your heart can't beat. Your lungs can't breathe. Your brain can't think. Energy is what powers every single thing your body does. That's why eating regular healthy meals matters. They give you the energy your body needs to keep going.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The SUN: Where Most Energy Starts`,
          paragraphs: [
            `Here's the biggest fact about energy on Earth — almost ALL of it traces back to ONE place: the SUN.`,
            `The sun gives off HUGE amounts of light and heat energy. Plants catch sunlight and turn it into chemical energy (food). You eat plants — or eat animals that ate plants — and get that energy. The sun heats the air and water, causing wind and weather. Even fossil fuels like gasoline come from ANCIENT plants that captured sunlight millions of years ago. Without the SUN — no plants, no animals, no us, no weather. The sun is Earth's master energy source. We're all running on solar power, in one form or another.`,
          ],
          image: `/explorer-assets/science/l15-s5-sun-source.webp`,
          imageCaption: `The SUN is the source of almost all Earth's energy. Plants → food → animals → us. Sun powers everything.`,
          vocab: [
            { word: `source`,         definition: `Where something COMES FROM. The SUN is Earth's main energy SOURCE.`,
              audioPrompt: `A source, {name}, is where something comes from. The sun is Earth's main energy source. Almost all the energy used on Earth originally came from the sun. Plants captured sunlight. Animals ate plants. We eat animals and plants. Even oil and gas come from ancient plants that captured sunlight. Trace the energy back, and most paths lead to the sun.` },
            { word: `solar`,          definition: `From the SUN. SOLAR energy = sun energy.`,
              audioPrompt: `Solar, {name}, means from the sun. Solar energy is sun energy. People can capture solar energy with special panels called solar panels — they turn sunlight directly into electricity. Plants are nature's solar panels — they turn sunlight into food. We're all running on solar power, one way or another. Even your body. Even cars. Trace it back, it's mostly solar.` },
            { word: `master source`,  definition: `The MAIN place energy comes from. The SUN is Earth's master energy source.`,
              audioPrompt: `Master source, {name}, means the main place energy comes from. The sun is Earth's master energy source. Without the sun, nothing on Earth would have energy. No plants would grow. No animals would live. No weather. No life. The sun is HUGE — and incredibly powerful — and constantly giving energy to Earth. We're lucky to be on a planet near a star.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Saving Energy = Saving Earth`,
          paragraphs: [
            `Even though energy never disappears, the ENERGY HUMANS USE for electricity, cars, and heating doesn't last forever.`,
            `Most of our energy comes from BURNING things — coal, gas, oil. These take MILLIONS of years to form. We're using them way faster than Earth can make new ones. When we waste energy, we waste these precious resources. Plus burning them puts smoke and chemicals into the air. SAVING energy helps Earth. Turn off lights when you leave a room. Walk or bike instead of driving when you can. Don't leave water running. Keep doors closed in winter and summer. Small choices add up. Caring for energy = caring for Earth.`,
          ],
          image: `/explorer-assets/science/l15-s6-energy-saves.webp`,
          imageCaption: `Save energy: turn off lights, walk more, don't waste. Small choices add up. Care for energy = care for Earth.`,
          vocab: [
            { word: `save energy`,    definition: `To use LESS energy. SAVING ENERGY protects Earth.`,
              audioPrompt: `To save energy, {name}, is to use less energy. Small choices add up. Turn off lights you don't need. Don't leave the water running. Walk instead of driving short distances. Wear a sweater instead of cranking up heat. Saving energy means less burning of fuel, less pollution, and more resources left for the future.` },
            { word: `resources`,      definition: `Useful materials. Energy RESOURCES like coal and oil aren't unlimited.`,
              audioPrompt: `Resources, {name}, are useful materials. Energy resources like coal, oil, and gas are what we burn for energy. But they're not unlimited. They took millions of years to form. We're using them WAY faster than Earth can make new ones. Eventually, they could run out. That's why saving energy and finding new energy sources (like solar and wind) matters.` },
            { word: `caring`,         definition: `Showing love and respect. CARING for energy = caring for Earth.`,
              audioPrompt: `Caring, {name}, means showing love and respect. Caring for energy = caring for Earth. Every time you save energy, you're being kind to the planet. You're helping reduce pollution. You're making resources last longer. You're protecting the world for future kids. Even small choices matter. Care for energy. It's caring for everything.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `ENERGY makes everything HAPPEN — motion, light, sound, heat, life.`,
              matchPhrase: `Yes! Energy is the power behind everything. Cars driving, hearts beating, lights glowing, plants growing — all need energy. Without energy, nothing happens. Energy = the universe in action.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `Almost ALL energy on Earth originally comes from the SUN.`,
              matchPhrase: `True! The sun powers plants (food), animals (eating plants), us, weather, and even fossil fuels (ancient plants). Trace energy back, it almost always leads to the sun.`,
              correctMatch: `fact` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `Energy just APPEARS from nowhere — no source, no transformation needed.`,
              matchPhrase: `Not at all! Energy can't appear from nothing. It always comes from somewhere — and changes form. Electric energy comes from generators. Plant energy from sunlight. Body energy from food.`,
              correctMatch: `myth` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `We have UNLIMITED energy — go ahead and waste as much as you want!`,
              matchPhrase: `Definitely not! Energy resources like oil and coal aren't unlimited. They take millions of years to form. We need to save energy to protect Earth and keep resources for future generations.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is ENERGY?`,
              options: [`Magic`, `The POWER that makes things move, change, grow, or happen`, `Just electricity`, `A type of food`],
              correctIndex: 1,
              explanation: `Energy is the power that makes everything happen. Motion, light, sound, heat, life — all need energy. Without energy, nothing happens in the universe.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `Energy comes in many FORMS. Which is an example?`,
              options: [`Just one form`, `MOTION, LIGHT, SOUND, HEAT, ELECTRIC, CHEMICAL — many forms`, `Only heat`, `Only sound`],
              correctIndex: 1,
              explanation: `Energy has many forms — motion, light, sound, heat, electric, chemical, and more. They're all energy in different ways.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `When you turn on a lightbulb, what happens to ENERGY?`,
              options: [`It disappears`, `Electric energy CHANGES into light energy (and a bit of heat)`, `Nothing happens`, `It freezes`],
              correctIndex: 1,
              explanation: `Energy CHANGES form! Electric energy goes in, light energy comes out. (Plus some heat — that's why bulbs feel warm.) Energy transforms, never disappears.` },
            { id: `l15-q4`, format: `true-false`,
              question: `Your BODY uses ENERGY from FOOD to do everything — moving, thinking, breathing.`,
              correctAnswer: true,
              explanation: `True! Food contains chemical energy. Your body releases that energy to power your muscles, brain, heart, breathing, and growth. Eat regularly to fuel up.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Almost all the energy on Earth originally comes from the ___.`,
              options: [`sun`, `moon`, `ground`, `internet`],
              correctIndex: 0,
              explanation: `The SUN! Plants capture sunlight as energy. Animals eat plants. We eat both. Even fossil fuels come from ancient plants. Trace energy back, it leads to the sun.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `Why should we SAVE energy?`,
              options: [`To get rich`, `To protect Earth — resources aren't unlimited and using energy creates pollution`, `It's silly to save`, `Energy is bad`],
              correctIndex: 1,
              explanation: `Saving energy protects Earth! Most energy resources (coal, oil) take millions of years to form. We're using them fast. Saving them = less pollution, more resources for the future.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists are working on AMAZING new ways to make energy. SOLAR PANELS turn sunlight directly into electricity — putting them on roofs lets homes run on sun power. WIND TURBINES use windy days to spin generators and make electricity. HYDROELECTRIC dams use flowing water. GEOTHERMAL power comes from heat inside Earth. Even waves in the ocean can make electricity! These are called RENEWABLE energy — they don't run out. The future might run on clean, renewable energy. Inventors are working on it right now.`,
          familyAdventure: `Be ENERGY DETECTIVES together. Walk through your house and count all the things using energy: lights, fridge, computers, TVs, phones, washer. For each one, ask: "Is it ON when no one needs it?" If yes, turn it off. Notice what energy gets WASTED. Make a family promise to save energy. Track your electric bill. Saving energy helps Earth — and saves money too.`,
          creativePrompt: `Draw an ENERGY MAP. In the middle, draw the SUN. From the sun, draw arrows to: PLANTS (catching sunlight). PEOPLE (eating plants and animals). CARS (running on old plants = oil). WEATHER (heated by sun = wind and rain). Show how the sun feeds energy to almost EVERYTHING on Earth.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You now understand ENERGY — the power behind everything. It comes in many FORMS (motion, light, sound, heat, electric, chemical). It CHANGES form but never disappears. Your BODY runs on energy from FOOD. The SUN gives us most of our energy. And we should SAVE energy to protect Earth. The whole physical world makes more sense now. Physical science block COMPLETE! See you next lesson!`,
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
  const mags  = SCIENCE_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L15] Loaded: "Energy" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
