// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L18 — Environmental Geography
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Geo.5.3-5 / D2.Geo.10.3-5 / D2.Geo.11.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (climate impacts — what's happening here?)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-18`,
      title: `Environmental Geography`,
      duration: 23,
      xpReward: 75,
      badge: `environmental-thinker`,
      badgeName: `Environmental Thinker`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we look at the relationship between humans and the planet we live on. We've changed Earth more in the past 200 years than in the previous 200,000. The air, the oceans, the forests, the climate — all are different than they were when your great-grandparents were born. By the end of this lesson, you'll understand the major environmental changes happening right now, why they're happening, and what people are doing about them.`,
          headline: `Environmental Geography`,
          subtitle: `How humans are reshaping the planet — and what to do about it`,
          visual: `/ue-assets/social-studies/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Humans Reshaping the Planet`,
          paragraphs: [
            `For most of history, Earth shaped humans far more than humans shaped Earth. Climate, geography, and natural resources decided where we could live, what we could grow, and how we built our societies. That balance flipped in the past 200 years. Humans now shape the planet on a massive scale.`,
            `We've cleared about a third of Earth's forests for farming and cities. We've filled the atmosphere with carbon dioxide from burning coal, oil, and natural gas. We've removed huge amounts of fish from the oceans. We've spread plastic into every corner of the world, including places no human has ever been. We've changed the chemistry of the air, the soil, and the seas.`,
            `Most of this happened in the past century. The scale and speed of human impact is so unusual that some scientists call this geological period the Anthropocene — meaning "the human age." The point isn't that human activity is all bad. It's that it's now huge enough to be a defining force on planetary systems. Understanding that is the starting point for thinking clearly about the future.`,
          ],
          image: `/ue-assets/social-studies/l18-s1-anthropocene.webp`,
          imageCaption: `From shaped by Earth to shaping Earth. One species. 200 years.`,
          vocab: [
            { word: `Anthropocene`,
              definition: `The current geological time period, defined by humans being the dominant force shaping Earth.`,
              audioPrompt: `The Anthropocene is the name some scientists use for the current geological time period, {name} — defined by humans being the dominant force shaping Earth's systems. Within just 200 years, humans have changed the climate, transformed land use, depleted oceans, and pushed thousands of species toward extinction. Whether or not the Anthropocene becomes an official scientific term, the underlying point is real — humans now shape the planet at scales previously reserved for ice ages and asteroid impacts. Knowing this changes how you think about what's possible.` },
            { word: `fossil fuels`,
              definition: `Coal, oil, and natural gas — fuels formed over millions of years from the remains of ancient living things.`,
              audioPrompt: `Fossil fuels are coal, oil, and natural gas — formed over millions of years from the remains of ancient living things, {name}. When we burn them for energy, we release the carbon stored inside as carbon dioxide into the atmosphere. Humans have built most of modern civilization on fossil fuels — electricity, transportation, manufacturing, heating. The problem is the carbon emissions. Switching to renewable energy is the main strategy for reducing those emissions. Nearly every aspect of climate change connects back to how much fossil fuel we burn.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Climate Change`,
          paragraphs: [
            `The biggest single environmental challenge of our time is climate change. Earth's average temperature has risen by about 1.2 degrees Celsius — about 2.2 degrees Fahrenheit — since the Industrial Revolution began. That might sound small, but on a planetary scale it's enormous.`,
            `The cause is well understood. When humans burn coal, oil, and natural gas — for electricity, transportation, factories, and heating — we release carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat from the sun. The more we add, the more heat gets trapped. The basic physics has been known for over a century. The data confirming it is overwhelming.`,
            `The effects are already visible. Glaciers are melting. Sea levels are rising. Heat waves are getting hotter. Storms are getting stronger. Wildfires are getting larger. Some regions are getting too dry for farming. Others are getting too wet. The changes are uneven — they hit some places harder than others — and they're accelerating, not slowing down. This isn't a future problem. It's a present problem that's still getting worse.`,
          ],
          image: `/ue-assets/social-studies/l18-s2-climate-change.webp`,
          imageCaption: `Up 1.2°C since the industrial era began. Effects already widespread.`,
          vocab: [
            { word: `climate change`,
              definition: `Long-term changes in Earth's average temperatures and weather patterns, especially the warming caused by human burning of fossil fuels.`,
              audioPrompt: `Climate change is long-term changes in Earth's average temperatures and weather patterns, {name}. The current major shift is being driven mainly by humans burning fossil fuels — coal, oil, and natural gas — which release greenhouse gases that trap heat in the atmosphere. Earth has warmed about 1.2 degrees Celsius since the Industrial Revolution. This is causing rising sea levels, stronger storms, longer heat waves, bigger wildfires, and many other effects. The science behind this is settled — what's still debated is what to do about it and how fast.` },
            { word: `greenhouse gas`,
              definition: `A gas in Earth's atmosphere that traps heat from the sun — like carbon dioxide and methane.`,
              audioPrompt: `A greenhouse gas is a gas in Earth's atmosphere that traps heat from the sun, {name}. Carbon dioxide is the most well-known one. Methane and water vapor are others. These gases occur naturally and keep Earth warm enough to support life — without them, the planet would be too cold for humans. The problem is that humans have added huge amounts of extra greenhouse gases by burning fossil fuels. This extra trapping is why Earth is warming. Reducing greenhouse gas emissions is the main strategy for fighting climate change.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Other Major Environmental Issues`,
          paragraphs: [
            `Climate change is the biggest, but it's not the only environmental challenge. Many others are happening at the same time, sometimes connected to climate change and sometimes separate.`,
            `Biodiversity loss: Species are going extinct at a rate far higher than the natural background rate. Habitat destruction, pollution, hunting, and climate change all contribute. Some scientists call this the sixth mass extinction in Earth's history — the first one caused by a single species. Pollution: Air pollution from factories and cars makes cities unhealthy. Plastic pollution has filled the oceans. Chemical pollution affects soil and water. Deforestation: Tropical rainforests, especially in the Amazon, the Congo, and Indonesia, are being cut down for cattle ranching, palm oil, and timber. Forests both store carbon and house species — losing them affects both climate and biodiversity at once.`,
            `Resource depletion is another concern. Some critical materials — fresh water in some regions, certain minerals, certain fish populations — are being used faster than they regenerate. Together, these challenges form one big interconnected issue: humans living in a way that the planet can support long-term.`,
          ],
          image: `/ue-assets/social-studies/l18-s3-other-issues.webp`,
          imageCaption: `Biodiversity loss. Pollution. Deforestation. Resource depletion. All connected.`,
          vocab: [
            { word: `biodiversity`,
              definition: `The variety of plant and animal species in an environment.`,
              audioPrompt: `Biodiversity is the variety of plant and animal species in an environment, {name}. Healthy ecosystems usually have high biodiversity — many different species playing different roles. Rainforests are some of the most biodiverse places on Earth. Today, biodiversity is dropping fast. Habitat destruction, hunting, pollution, invasive species, and climate change are all driving species extinct. Losing biodiversity matters because ecosystems with fewer species are less resilient. They're more likely to collapse under stress. Protecting biodiversity is one of the major environmental priorities of our time.` },
            { word: `deforestation`,
              definition: `The large-scale clearing of forests for farming, ranching, or development.`,
              audioPrompt: `Deforestation is the large-scale clearing of forests for farming, ranching, or development, {name}. Tropical rainforests — especially the Amazon, the Congo Basin, and forests in Southeast Asia — are the most critical ones being lost. Deforestation affects both climate and biodiversity at once. Forests store enormous amounts of carbon, so clearing them releases carbon into the atmosphere. They also house the majority of Earth's land species. Protecting and restoring forests is one of the most cost-effective tools for fighting climate change and preventing species extinction.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What People Are Doing About It`,
          paragraphs: [
            `The good news is that people are working on these problems. Renewable energy — solar, wind, hydro — is growing fast. The cost of solar panels has dropped about 90 percent in the past 15 years. Many countries are committing to reduce greenhouse gas emissions. Electric cars are replacing gas-powered ones in growing numbers.`,
            `Governments are making policy changes. The Paris Agreement in twenty-fifteen brought nearly every country together with commitments to limit warming. Many countries have set targets to reach "net zero" emissions — meaning they'd add no more greenhouse gases to the atmosphere than they remove — by mid-century. Companies, cities, and individuals are also taking action — installing solar panels, reducing meat consumption, planting trees, protecting habitats.`,
            `The hard truth is that current efforts aren't yet enough. The world is still warming. Emissions are still rising globally, even as some countries reduce theirs. Whether the world meets its climate goals depends on what happens in the next decade or two. Your generation — the kids your age right now — will be the ones making most of those decisions when you grow up. Understanding what's happening is the first step in being prepared.`,
          ],
          image: `/ue-assets/social-studies/l18-s4-solutions.webp`,
          imageCaption: `Solar. Wind. Electric vehicles. Policy. Real progress — and a long way to go.`,
          vocab: [
            { word: `renewable energy`,
              definition: `Energy from sources that naturally replenish — like sunlight, wind, and water — and don't release greenhouse gases.`,
              audioPrompt: `Renewable energy comes from sources that naturally replenish, {name} — like sunlight, wind, flowing water, and Earth's internal heat. Unlike fossil fuels, renewables don't release greenhouse gases when used. They also don't run out. Solar and wind power have grown massively in the past 20 years as costs dropped. Today, renewables produce about 30 percent of the world's electricity. Replacing fossil fuels with renewables is one of the main strategies for reducing climate change. The transition is happening, but slowly — and how fast it happens matters enormously.` },
            { word: `net zero`,
              definition: `A target where a country or company adds no more greenhouse gases to the atmosphere than it removes.`,
              audioPrompt: `Net zero is a target where a country or company adds no more greenhouse gases to the atmosphere than it removes, {name}. It doesn't mean zero emissions — it means balancing out what you produce by removing an equivalent amount, such as planting forests or using carbon-capture technology. Many countries have set net zero targets for mid-century. Whether they hit them depends on major policy and technology changes. Net zero is the goal — the question is whether the world gets there.` },
          ],
        },

        // ── INVESTIGATION GAME — What's Happening Here? ───────────────────────
        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Environmental Detective time, {name}. I'll give you four real-world cases. For each, read the clues and figure out what major environmental issue is being described. Then I'll tell you where it's actually happening.`,
          options: [
            { id: `climate`,        label: `Climate Change`,    color: `#F87171`, description: `Warming caused by greenhouse gas emissions.` },
            { id: `biodiversity`,   label: `Biodiversity Loss`, color: `#34D399`, description: `Species going extinct or threatened.` },
            { id: `deforestation`,  label: `Deforestation`,     color: `#FBBF24`, description: `Forests being cleared for other uses.` },
            { id: `pollution`,      label: `Pollution`,         color: `#A78BFA`, description: `Harmful materials entering air, water, or soil.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Mystery #1`,
              clues: [
                { text: `In the past 30 years, this region has lost about 17 percent of its tree cover.` },
                { text: `Most of the cleared land is now used for cattle ranching, soy farming, or palm oil plantations.` },
                { text: `Many species that lived only in this region are now endangered. Indigenous communities are also being displaced.` },
              ],
              correctAnswer: `deforestation`,
              realWorldExample: `This describes the Amazon rainforest, especially in Brazil. The Amazon is the world's largest rainforest, and its destruction is a major global concern.`,
              explanation: `Deforestation. The Amazon has lost large amounts of forest cover over recent decades, mostly to cattle ranching, soy farming, and other agricultural uses. The consequences are huge — for biodiversity, for indigenous communities, and for the climate, since the Amazon stores enormous amounts of carbon. Slowing Amazon deforestation is one of the biggest single climate priorities in the world.`,
            },
            {
              id: `case-2`,
              caseTitle: `Mystery #2`,
              clues: [
                { text: `In this ocean region, what used to be vibrant coral reefs with hundreds of species are now bleached white and largely dead.` },
                { text: `The cause is connected to warming ocean temperatures combined with ocean acidification.` },
                { text: `Scientists estimate that without major changes, most of the world's coral reefs could be gone by twenty fifty.` },
              ],
              correctAnswer: `climate`,
              realWorldExample: `Coral bleaching is happening worldwide, but the Great Barrier Reef in Australia is the most famous example. It has lost about half its coral cover since nineteen ninety-five.`,
              explanation: `Climate change. Warming ocean temperatures stress coral, causing it to expel the algae that give it color and food. If the stress lasts too long, the coral dies. Ocean acidification — caused by oceans absorbing extra CO2 from the atmosphere — makes recovery harder. Coral reefs are some of the most biodiverse ecosystems on Earth, and their loss would be catastrophic for ocean life and for hundreds of millions of people who depend on them.`,
            },
            {
              id: `case-3`,
              caseTitle: `Mystery #3`,
              clues: [
                { text: `In many cities across this region, the air quality is so bad that schools and outdoor activities are sometimes cancelled.` },
                { text: `Industrial emissions, vehicle exhaust, and burning crop residues all contribute to the problem.` },
                { text: `Estimates suggest poor air quality contributes to over a million premature deaths in this region each year.` },
              ],
              correctAnswer: `pollution`,
              realWorldExample: `This describes parts of India, China, and other countries with rapidly growing economies. Cities like Delhi and Beijing have struggled with severe air pollution for decades.`,
              explanation: `Pollution. Air pollution from factories, vehicles, and other sources causes massive health problems worldwide. Some countries — China being a notable example — have made major progress in cleaning up their air through stricter regulations and shifting to cleaner energy. India is currently facing some of the worst air pollution in the world. This is one of the most solvable environmental problems, but it requires sustained political will.`,
            },
            {
              id: `case-4`,
              caseTitle: `Mystery #4`,
              clues: [
                { text: `In the early nineteen hundreds, this animal numbered about 100,000 worldwide. By nineteen seventy, only about 1,000 remained.` },
                { text: `The causes were habitat loss, hunting, and trade in its body parts.` },
                { text: `Through major conservation efforts, the population has now recovered to about 4,000 in the wild — but they're still endangered, and their range has shrunk by 95 percent compared to a century ago.` },
              ],
              correctAnswer: `biodiversity`,
              realWorldExample: `This is the wild tiger. The world tiger population has slowly recovered through major efforts, but tigers remain endangered and have lost most of their historic range.`,
              explanation: `Biodiversity loss. Tigers are one of the most studied examples of biodiversity loss and partial recovery. Hunting and habitat destruction nearly wiped them out. Conservation efforts have partially reversed the decline. Many other species are in similar situations. Saving species takes long-term commitment from governments, organizations, and communities living near them.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What's the Anthropocene?`,
              options: [
                `A new species`,
                `The current geological period, defined by humans being the dominant force shaping Earth`,
                `A type of rock`,
                `A region in Africa`,
              ],
              correctIndex: 1,
              explanation: `The Anthropocene is the name some scientists use for the current geological time. The basic idea: humans are now shaping the planet at scales previously reserved for ice ages and asteroid impacts.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's the main cause of current climate change?`,
              options: [
                `Natural cycles`,
                `Humans burning fossil fuels and releasing greenhouse gases that trap heat`,
                `Solar flares`,
                `Volcanoes`,
              ],
              correctIndex: 1,
              explanation: `Burning fossil fuels — coal, oil, natural gas — releases greenhouse gases like carbon dioxide. These trap heat in the atmosphere. The science is settled — this is the main driver of current warming.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What's biodiversity?`,
              options: [
                `The number of people in a country`,
                `The variety of plant and animal species in an environment`,
                `A type of pollution`,
                `A weather pattern`,
              ],
              correctIndex: 1,
              explanation: `Biodiversity is the variety of life — plants, animals, microbes — in an environment. Healthy ecosystems usually have high biodiversity. Today, biodiversity is dropping fast worldwide.` },
            { id: `l18-q4`, format: `multiple-choice`,
              question: `What's renewable energy?`,
              options: [
                `Energy from coal`,
                `Energy from sources that naturally replenish — like sun, wind, and water — and don't release greenhouse gases`,
                `Energy that costs nothing`,
                `Energy you have to renew every year`,
              ],
              correctIndex: 1,
              explanation: `Renewables come from naturally replenishing sources like sunlight, wind, and flowing water. They don't release greenhouse gases when used. Solar and wind have grown massively in the past 20 years.` },
            { id: `l18-q5`, format: `true-false`,
              question: `True or false: The cost of solar panels has dropped dramatically — about 90 percent — in the past 15 years.`,
              correctAnswer: true,
              explanation: `True. Solar costs have plummeted, making solar power cost-competitive with fossil fuels in many regions. This is one of the biggest reasons renewable energy is growing so fast worldwide.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `Which of these is NOT a major environmental challenge today?`,
              options: [
                `Climate change`,
                `Biodiversity loss`,
                `Deforestation`,
                `Too many varieties of cereal in the grocery store`,
              ],
              correctIndex: 3,
              explanation: `Cereal variety isn't an environmental challenge. The other three — climate change, biodiversity loss, deforestation — are all major issues happening right now.` },
            { id: `l18-q7`, format: `multiple-choice`,
              question: `What's the Paris Agreement?`,
              options: [
                `A peace treaty from World War One`,
                `A twenty fifteen agreement among nearly every country to limit climate change through national commitments`,
                `A trade deal between France and the US`,
                `A movie`,
              ],
              correctIndex: 1,
              explanation: `The Paris Agreement was signed in twenty fifteen. Nearly every country agreed to set targets for reducing greenhouse gas emissions to limit global warming. It's the most important international climate agreement ever made.` },
            { id: `l18-q8`, format: `multiple-choice`,
              question: `Why does what happens in the next decade matter so much for climate?`,
              options: [
                `It doesn't really matter`,
                `Whether the world meets climate goals depends largely on decisions made in this period — emissions can't be unmade once released`,
                `Climate change reverses on its own`,
                `Only individuals can fix it`,
              ],
              correctIndex: 1,
              explanation: `Greenhouse gases stay in the atmosphere for a long time once released. The longer the world waits to dramatically reduce emissions, the harder it becomes to limit warming. This decade is when decisions either lock in serious warming or make a better path possible.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Which environmental issue covered today feels most important to you, and why?` },
            { id: `r2`, text: `What's something you've noticed about the environment in your own area that might be connected to these issues?` },
            { id: `r3`, text: `Which detective case stuck with you most, and why?` },
            { id: `r4`, text: `What's one thing you'd want adults to do differently about environmental issues?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Right now, somewhere in the world, scientists are measuring CO2 levels. Engineers are installing wind turbines. Activists are pushing for policy changes. Indigenous communities are defending their forests. Companies are deciding whether to invest in clean energy or stick with fossil fuels. These decisions are shaping what the world looks like in twenty fifty, and twenty eighty, and beyond. Your generation will live with the results more than anyone else. Knowing what's happening — both the problems and the responses — is part of being ready for the world you'll inherit.`,
          familyAdventure: `Together, do an environmental footprint check. Try to count: how many disposable items did your family use this week? How much trash got thrown out? How much food got wasted? Don't be judgmental about it — just notice. Then pick ONE thing you could change for next week. Track it. See what happens.`,
          creativePrompt: {
            intro: `Imagine you've grown up and are deciding how to spend your life. You want to work on environmental issues. Describe what you might do and why.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Be specific — what role, what cause, what change you'd hope to make.`,
            open: `Write as much as you want. Imagine your career and life.`,
            frames: [
              `The environmental issue I care most about is ___.`,
              `The career or role I'd want is ___.`,
              `Specifically what I'd do is ___.`,
              `The kind of change I'd hope to make is ___.`,
              `Why this matters to me personally is ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now describe how humans have reshaped Earth, define climate change and explain its main cause, name other major environmental issues, and recognize what people are doing about them. Two more lessons left in your social studies UE journey. Next, we look at something practical — how to actually read the news and tell what's reliable from what isn't. — Atlas.`,
          badge: `environmental-thinker`,
          badgeName: `Environmental Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L18;
