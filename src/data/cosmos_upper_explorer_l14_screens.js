// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L14 — Renewable Energy and the Future
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS3 — natural resources; energy and human impact
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify energy sources)
// SCOPE: 4 concepts — renewable vs nonrenewable, types of renewables,
//        why renewables matter, the future and challenges
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-14`,
      title: `Renewable Energy and the Future`,
      duration: 18,
      xpReward: 75,
      badge: `energy-future-explorer`,
      badgeName: `Energy Future Explorer`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Last time we learned how burning fossil fuels drives climate change. Today, the hopeful follow-up: the clean energy sources that could power the future WITHOUT those greenhouse gases. RENEWABLE ENERGY comes from sources that nature keeps refilling, like the Sun, the wind, and flowing water. These technologies are growing faster than almost anyone predicted, and they may be one of the most important solutions of your lifetime. By the end of today, you'll understand how we power our world, and how we could power it better. Let's begin.`,
          headline: `Renewable Energy and the Future`,
          subtitle: `The clean energy sources that could power tomorrow`,
          visual: `/ue-assets/cosmos/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Renewable vs Nonrenewable Energy`,
          paragraphs: [
            `Energy sources come in two basic types. NONRENEWABLE energy comes from sources that exist in LIMITED amounts and will eventually run out. The main ones are fossil fuels: coal, oil, and natural gas. They took millions of years to form underground, and once we burn them, they're gone for human timescales. They also release greenhouse gases when burned. RENEWABLE energy comes from sources that nature naturally REFILLS, so they won't run out: sunlight, wind, flowing water, and heat from inside the Earth. The Sun will keep shining and the wind will keep blowing for billions of years.`,
            `This difference matters enormously. Nonrenewable fuels are like a piggy bank you can only take FROM: every bit you use is gone forever, and the supply shrinks. Renewable sources are like an allowance that refills: you can keep using them without running out. Plus, most renewable sources don't release greenhouse gases while making electricity, which (as we learned last lesson) is exactly what we need to slow climate change. Understanding this difference is the foundation of thinking clearly about energy and the future.`,
          ],
          image: `/ue-assets/cosmos/l14-s1-types.webp`,
          imageCaption: `Nonrenewable: limited, runs out. Renewable: naturally refilled, won't run out.`,
          vocab: [
            {
              word: `renewable energy`,
              definition: `Energy from sources that nature naturally refills, so they won't run out: sunlight, wind, flowing water, and Earth's heat. Most renewable sources release no greenhouse gases while making electricity.`,
              audioPrompt: `Renewable energy comes from sources that nature naturally refills, so they won't run out, {name}. The main ones are sunlight, wind, flowing water, and heat from inside the Earth. The Sun will keep shining and the wind will keep blowing for billions of years. This is different from nonrenewable energy, like fossil fuels, which exist in limited amounts and will eventually run out. Renewable sources are like an allowance that refills: you can keep using them without running out. Plus, most renewables release no greenhouse gases while making electricity.`,
            },
            {
              word: `wind energy`,
              definition: `Renewable energy captured from moving air using large turbines. Wind is free, produces no greenhouse gases while generating electricity, and works best in areas with consistent strong winds. It's one of the fastest-growing clean energy sources in the world.`,
              audioPrompt: `Wind energy uses moving air to spin large turbines and generate electricity, {name}. Wind turbines work like giant pinwheels: as the wind blows, the blades spin, driving a generator that makes electricity. Wind power works best in areas with consistent, strong winds, like coastlines, open plains, or offshore in the ocean. It produces no greenhouse gases while making electricity, and like sunlight, wind is free to use. Wind is one of the fastest-growing clean energy sources in the world, with new turbines being built at record rates.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Types of Renewable Energy`,
          paragraphs: [
            `There are several main kinds of renewable energy, each using a different natural source. SOLAR energy captures sunlight, usually with solar panels, and turns it into electricity. Remember from our energy lesson that nearly all energy traces back to the Sun anyway, so solar goes right to the source. WIND energy uses the moving air to spin large turbines, like giant pinwheels, which generate electricity. HYDROPOWER uses flowing or falling water (often at dams) to spin turbines. These are the three biggest renewable sources today.`,
            `There are others too. GEOTHERMAL energy taps the natural heat inside the Earth, using it to warm buildings or make electricity. Some places use the energy of ocean tides and waves. Each renewable source works best in certain places: solar shines in sunny regions, wind farms go where it's windy, hydropower needs rivers, and geothermal works near underground heat. Often, the best plan is a MIX of different renewable sources, chosen to fit each location. The technology keeps improving, getting cheaper and more efficient every year, which is making renewable energy more practical and widespread than ever before.`,
          ],
          image: `/ue-assets/cosmos/l14-s2-types-of.webp`,
          imageCaption: `Solar, wind, hydro, geothermal: each taps a different source nature keeps refilling.`,
          vocab: [
            {
              word: `nonrenewable energy`,
              definition: `Energy from sources that exist in limited amounts and will eventually run out, mainly fossil fuels (coal, oil, natural gas). Burning them also releases greenhouse gases.`,
              audioPrompt: `Nonrenewable energy comes from sources that exist in limited amounts and will eventually run out, {name}. The main ones are fossil fuels: coal, oil, and natural gas. They took millions of years to form underground, and once we burn them, they're gone for human timescales. They also release greenhouse gases when burned. Nonrenewable fuels are like a piggy bank you can only take from: every bit you use is gone forever, and the supply shrinks.`,
            },
            {
              word: `hydropower`,
              definition: `Renewable energy generated from flowing or falling water, usually at dams. One of the oldest and most established renewable sources — it produces no greenhouse gases while running, though large dams can affect local ecosystems.`,
              audioPrompt: `Hydropower uses the energy of flowing or falling water to generate electricity, {name}. The most common form uses dams built across rivers. Water behind the dam flows through turbines, spinning them to make electricity. Hydropower is one of the oldest and most established forms of renewable energy. It produces no greenhouse gases while running and can generate large amounts of reliable electricity. The main challenge is that you need a suitable river, and large dams can affect local ecosystems. Hydropower provides a significant share of the world's clean electricity.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Renewables Matter`,
          paragraphs: [
            `Renewable energy offers several big advantages. First, it WON'T RUN OUT, so it's a long-term solution, unlike fossil fuels that will eventually be used up. Second, most renewables produce little or no GREENHOUSE GASES while generating electricity, which helps slow climate change. Third, once built, sources like solar and wind have very low running costs, because sunlight and wind are FREE. Fourth, renewable energy can be produced in many places, which means countries can make their own energy instead of depending on others.`,
            `Renewables also create new jobs, in building, installing, and maintaining all this clean technology. Here's some genuinely exciting news: renewable energy has been growing incredibly fast. The cost of solar panels has dropped dramatically over the past decade, making solar one of the cheapest ways to make electricity in many places. Wind power is booming. Around the world, more and more electricity comes from renewable sources every year. This is one of the most hopeful trends in the whole climate story. The technology that can power a cleaner future isn't science fiction. It's here now, and it's growing.`,
          ],
          image: `/ue-assets/cosmos/l14-s3-why.webp`,
          imageCaption: `Won't run out, low emissions, free fuel, made anywhere, growing fast and cheap.`,
          vocab: [
            {
              word: `solar energy`,
              definition: `Renewable energy captured from sunlight, usually using solar panels that turn light into electricity. One of the fastest-growing and increasingly cheapest energy sources in the world.`,
              audioPrompt: `Solar energy is renewable energy captured from sunlight, {name}. It's usually collected with solar panels that turn light directly into electricity. Remember that nearly all energy on Earth traces back to the Sun anyway, so solar goes right to the source. Solar is one of the fastest-growing energy sources in the world. The cost of solar panels has dropped dramatically, making solar one of the cheapest ways to make electricity in many places. It produces no greenhouse gases while running.`,
            },
            {
              word: `geothermal energy`,
              definition: `Renewable energy that taps the natural heat inside the Earth. This heat can warm buildings directly or drive steam turbines that generate electricity. Geothermal is constant and reliable, unlike solar or wind.`,
              audioPrompt: `Geothermal energy taps the natural heat inside the Earth, {name}. Deep underground, the Earth is extremely hot, heated by the slow decay of radioactive elements and leftover heat from when the planet formed. In some places, this heat comes close to the surface, like near volcanoes or hot springs. We can pipe that heat up to warm buildings, or use it to drive steam turbines that make electricity. Geothermal is reliable and constant, unlike solar or wind, which depend on the weather. It works best near geologically active areas.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Future: Challenges and Promise`,
          paragraphs: [
            `Switching to renewable energy isn't automatic. There are real CHALLENGES that scientists and engineers are working hard to solve. The Sun doesn't shine at night, and the wind doesn't always blow, so we need good ways to STORE energy (like better batteries) for when the source isn't available. We need to upgrade power grids to handle energy from many scattered sources. And building all this new technology takes time, money, and materials. These are real problems, but they're the kind of problems human ingenuity is very good at solving.`,
            `And solve them we are. Battery technology is improving rapidly. Engineers are designing smarter electrical grids. Investment in clean energy is at record highs around the world. The transition is happening, and it's speeding up. Nova's teaching: this is what hope looks like in action, not just wishing things were better, but actually building the solutions. Your generation will grow up during one of the biggest energy transformations in human history, from the fossil fuels of the past to the clean energy of the future. And many of the scientists, engineers, inventors, and leaders who finish this transformation are kids your age right now. Maybe even you. Understanding how energy works, like you've done in these lessons, is exactly where that journey begins.`,
          ],
          image: `/ue-assets/cosmos/l14-s4-future.webp`,
          imageCaption: `Storage, smarter grids, big investment: real challenges, and human ingenuity solving them.`,
          vocab: [
            {
              word: `sustainability`,
              definition: `Using resources in a way that meets today's needs without using them up or harming the future. Renewable energy is a key part of a sustainable future, because it won't run out.`,
              audioPrompt: `Sustainability means using resources in a way that meets today's needs without using them up or harming the future, {name}. Something is sustainable if it can keep going for a long time without running out or causing lasting damage. Renewable energy is a key part of a sustainable future, because sources like sunlight and wind won't run out, and they don't release greenhouse gases while making electricity. Fossil fuels are not sustainable, because they're limited and they harm the climate.`,
            },
            {
              word: `battery storage`,
              definition: `Technology that saves electricity produced by solar panels or wind turbines for use when the sun isn't shining or the wind isn't blowing. Improving battery storage is one of the key challenges in making clean energy reliable around the clock.`,
              audioPrompt: `Battery storage is one of the biggest challenges for renewable energy, {name}. The Sun doesn't shine at night and the wind doesn't always blow, so we need ways to save the electricity they make for when it's needed. Better batteries allow solar and wind farms to store excess electricity during the day and release it at night or on calm days. Battery technology has been improving rapidly, with costs falling just like solar panels did. Better storage is a key part of making clean energy reliable around the clock.`,
            },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four energy sources. Using the clues, classify each one: RENEWABLE (nature refills it, won't run out), NONRENEWABLE (limited supply, will run out), or IT'S COMPLICATED (has an important catch that makes it tricky to label)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `renewable`,    label: `Renewable`,        color: `#34D399`, description: `Nature naturally refills it, so it won't run out. Usually low or no emissions.` },
            { id: `nonrenewable`, label: `Nonrenewable`,     color: `#F87171`, description: `Limited supply that will eventually run out. Often releases greenhouse gases.` },
            { id: `complicated`,  label: `It's Complicated`, color: `#FBBF24`, description: `Has an important catch that makes it tricky to put in a simple box.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Source #1: Solar power`,
              clues: [
                { text: `It captures sunlight using panels.` },
                { text: `The Sun will keep shining for billions of years.` },
                { text: `It produces no greenhouse gases while making electricity.` },
              ],
              correctAnswer: `renewable`,
              realWorldExample: `Solar is one of the fastest-growing renewable sources.`,
              explanation: `The Sun keeps refilling this source, so it won't run out, and it makes no greenhouse gases. Pure renewable. Solar is also one of the cheapest and fastest-growing energy sources in the world today.`,
            },
            {
              id: `case-2`,
              caseTitle: `Source #2: Coal`,
              clues: [
                { text: `It formed underground over millions of years.` },
                { text: `Once it's burned, it's gone, and the supply shrinks.` },
                { text: `Burning it releases lots of carbon dioxide.` },
              ],
              correctAnswer: `nonrenewable`,
              realWorldExample: `Coal is a classic nonrenewable fossil fuel.`,
              explanation: `Limited supply, runs out, releases greenhouse gases. Pure nonrenewable. Coal is a fossil fuel that took millions of years to form, and burning it is a major source of the carbon dioxide driving climate change.`,
            },
            {
              id: `case-3`,
              caseTitle: `Source #3: Wind power`,
              clues: [
                { text: `It uses moving air to spin large turbines.` },
                { text: `The wind keeps blowing as long as the Sun heats the Earth unevenly.` },
                { text: `It produces no greenhouse gases while making electricity.` },
              ],
              correctAnswer: `renewable`,
              realWorldExample: `Wind power is booming worldwide.`,
              explanation: `Wind naturally keeps blowing and makes no greenhouse gases. Pure renewable. Wind power is one of the fastest-growing clean energy sources, with giant turbines generating more electricity every year.`,
            },
            {
              id: `case-4`,
              caseTitle: `Source #4 — The Tricky One: Nuclear power`,
              clues: [
                { text: `It makes huge amounts of electricity with almost NO greenhouse gases.` },
                { text: `But it runs on uranium, a metal that exists in limited amounts and will eventually run low.` },
                { text: `So it's clean for the climate, but its fuel is not unlimited.` },
              ],
              correctAnswer: `complicated`,
              realWorldExample: `Nuclear power sparks real debate among experts.`,
              explanation: `Tricky! You might guess "renewable" because it's clean (almost no greenhouse gases). Or "nonrenewable" because its fuel is limited. The honest answer is IT'S COMPLICATED. Nuclear power is low-carbon (great for the climate) but NOT renewable (uranium fuel is limited, and there's radioactive waste to manage carefully). Pure "it's complicated." Lesson: "renewable" and "clean" are NOT the same thing! Something can be clean for the climate but not renewable, or renewable but not perfectly clean (like burning wood). Real energy choices involve weighing several factors at once. This is why energy experts debate the best mix. The world isn't always divided into simple boxes, and learning to handle that nuance is part of thinking like a scientist.`,
            },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is RENEWABLE energy?`,
              options: [
                `Energy that's expensive`,
                `Energy from sources nature naturally refills, so they won't run out (sunlight, wind, water, Earth's heat)`,
                `Energy from coal and oil`,
                `Energy that only works at night`,
              ],
              correctIndex: 1,
              explanation: `Renewable energy comes from sources nature refills: sunlight, wind, flowing water, and Earth's heat. They won't run out, and most release no greenhouse gases while making electricity. It's like an allowance that refills, versus a piggy bank you only take from.` },

            { id: `l14-q2`, format: `multiple-choice`,
              question: `What's the key difference between RENEWABLE and NONRENEWABLE energy?`,
              options: [
                `Color`,
                `Renewable sources naturally refill and won't run out; nonrenewable sources are limited and will eventually run out`,
                `Renewable is always more expensive`,
                `There's no difference`,
              ],
              correctIndex: 1,
              explanation: `Renewable sources (sun, wind, water) naturally refill and won't run out. Nonrenewable sources (coal, oil, gas) are limited and run out, plus they release greenhouse gases when burned. This difference is the foundation of thinking about energy and the future.` },

            { id: `l14-q3`, format: `multiple-choice`,
              question: `What are the THREE biggest renewable energy sources today?`,
              options: [
                `Coal, oil, gas`,
                `Solar (sunlight), wind, and hydropower (flowing water)`,
                `Batteries, magnets, springs`,
                `Wood, paper, plastic`,
              ],
              correctIndex: 1,
              explanation: `The three biggest renewables today are solar (capturing sunlight), wind (spinning turbines with moving air), and hydropower (using flowing or falling water). Geothermal (Earth's heat) and ocean energy are others. Each works best in certain locations.` },

            { id: `l14-q4`, format: `true-false`,
              question: `True or false: The cost of solar panels has dropped dramatically, making solar one of the cheapest ways to make electricity in many places.`,
              correctAnswer: true,
              explanation: `True. Solar panel costs have fallen dramatically over the past decade. Solar is now one of the cheapest ways to make electricity in many places, and one of the fastest-growing energy sources. This is one of the most hopeful trends in the climate story.` },

            { id: `l14-q5`, format: `multiple-choice`,
              question: `Why does renewable energy MATTER for the climate?`,
              options: [
                `It doesn't`,
                `Most renewables produce little or no greenhouse gases while making electricity, which helps slow climate change`,
                `It uses more fossil fuels`,
                `It only works in summer`,
              ],
              correctIndex: 1,
              explanation: `Renewables matter because most produce little or no greenhouse gases while generating electricity. Since burning fossil fuels is the main driver of climate change (last lesson), switching to clean renewable energy is a key part of the solution.` },

            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's a real CHALLENGE for renewable energy that engineers are solving?`,
              options: [
                `There's no challenge`,
                `The Sun doesn't shine at night and wind isn't constant, so we need better ways to STORE energy (like batteries)`,
                `Renewables are illegal`,
                `Nobody wants them`,
              ],
              correctIndex: 1,
              explanation: `A real challenge is that the Sun doesn't shine at night and the wind isn't always blowing, so we need good ways to store energy (better batteries) and upgrade power grids. These are real problems, but ones human ingenuity is good at solving, and progress is fast.` },

            { id: `l14-q7`, format: `multiple-choice`,
              question: `Is NUCLEAR power renewable, nonrenewable, or complicated?`,
              options: [
                `Simply renewable`,
                `Complicated — it's low-carbon (clean for the climate) but NOT renewable (uranium fuel is limited)`,
                `Simply nonrenewable and dirty`,
                `The same as solar`,
              ],
              correctIndex: 1,
              explanation: `Nuclear is complicated: it produces almost no greenhouse gases (clean for the climate) but runs on limited uranium fuel (not renewable) and creates waste to manage. It shows that "renewable" and "clean" aren't the same thing. Real energy choices involve weighing several factors.` },

            { id: `l14-q8`, format: `multiple-choice`,
              question: `What is SUSTAINABILITY?`,
              options: [
                `Using resources as fast as possible`,
                `Using resources to meet today's needs without using them up or harming the future`,
                `Never using any energy`,
                `Only using fossil fuels`,
              ],
              correctIndex: 1,
              explanation: `Sustainability means using resources in a way that meets today's needs without using them up or harming the future. Renewable energy is key to a sustainable future because it won't run out and doesn't release greenhouse gases. Fossil fuels are not sustainable.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `The nuclear example showed that "renewable" and "clean" aren't the same thing. Why do you think it's useful to resist putting everything in simple boxes?` },
            { id: `r2`, text: `Of the renewable sources (solar, wind, hydro, geothermal), which one interests you most? Why?` },
            { id: `r3`, text: `Nova says your generation will live through one of the biggest energy transformations in history. How does it feel to be part of that?` },
            { id: `r4`, text: `Hope "in action" means building solutions, not just wishing. What's one energy or science problem you'd be excited to help solve someday?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Energy is one of the biggest and most important industries in the world, and the shift to renewables is creating huge opportunities. Careers in clean energy, from engineering to design to installation to research, are among the fastest-growing fields. Understanding energy also helps you as a citizen: you can evaluate claims about energy policy, understand the trade-offs of different choices, and make informed decisions. And it helps you at home, understanding your own energy use. Nova's note: the world your generation builds will run on the energy choices made in the coming decades. Understanding how it all works, like you do now, means you can help shape those choices wisely.`,
          familyAdventure: `Family Renewable Energy Spotting. As a family, go on a hunt (in your area or online) for renewable energy in action: solar panels on roofs, wind turbines, hydroelectric dams. Look up where YOUR electricity comes from (many power companies share this). Talk about which renewable sources would work best where you live, given your local sunshine, wind, and water. Imagine designing the ideal clean energy mix for your town. You're thinking like an energy engineer.`,
          creativePrompt: {
            intro: `Imagine you're designing the perfect clean-energy town of the future. Describe how it would be powered.`,
            floor: `Write at least 5 sentences. Describe at least two renewable energy sources your town would use and why.`,
            stretch: `Write 8 to 10 sentences. Design your town's energy mix (solar, wind, hydro, etc.), explain why you chose each, and how you'd handle storing energy for when the sun isn't shining.`,
            open: `Write as much as you want. Design a complete clean-energy town of the future. Describe which renewable sources you'd use and why (based on your imagined location), how you'd store energy for nighttime and calm days, how the buildings and transport would work, the challenges you'd have to solve, and how it would feel to live in a town powered entirely by clean, sustainable energy. Be creative AND realistic about the science.`,
            frames: [
              `My clean-energy town would be powered mainly by ___.`,
              `I chose these sources because ___.`,
              `To store energy for nighttime, we would ___.`,
              `The biggest challenge to solve would be ___.`,
              `Living in my town would feel ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explain the difference between renewable and nonrenewable energy, the main types of renewables, why they matter for the climate, and the real challenges and promise of the energy future. You also learned that "clean" and "renewable" aren't the same thing. Next lesson: we dive into Earth's last great frontier, a world right here on our own planet that's barely been explored. THE OCEAN. See you there. — Nova.`,
          badge: `energy-future-explorer`,
          badgeName: `Energy Future Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L14.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L14 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
