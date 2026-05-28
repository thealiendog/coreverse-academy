// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L13 — Climate Change: The Science
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-ESS3 — human impacts on Earth systems; climate
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the causal chain of climate change)
// SCOPE: 4 concepts — climate vs weather, the greenhouse effect, the
//        evidence and human role, hope and action
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-13`,
      title: `Climate Change: The Science`,
      duration: 18,
      xpReward: 75,
      badge: `climate-explorer`,
      badgeName: `Climate Science Explorer`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we explore one of the most important scientific topics of your generation: CLIMATE CHANGE. This is a subject people sometimes argue about, so let's do what good scientists do: look calmly at the actual evidence and understand the actual science. I won't tell you to feel scared. I'll help you UNDERSTAND, because understanding is what leads to good solutions. And there's real reason for hope. By the end of today, you'll understand the real science of how Earth's climate works and why it's changing. Let's begin.`,
          headline: `Climate Change: The Science`,
          subtitle: `Understanding how Earth's climate works, and why it's changing`,
          visual: `/ue-assets/cosmos/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Climate Is Not the Same as Weather`,
          paragraphs: [
            `First, an important difference that many people mix up. WEATHER is what's happening in the sky right now, or over a few days: today's rain, this week's heat wave, tomorrow's snow. CLIMATE is the AVERAGE pattern of weather in a place over a long time, usually 30 years or more. Weather changes hour to hour. Climate changes slowly, over decades. A cold day doesn't mean the climate is cooling, just as one hot day doesn't prove anything by itself. Climate is about the big, long-term picture.`,
            `CLIMATE CHANGE means a long-term shift in Earth's overall climate patterns. Right now, scientists who study Earth have found that the planet's average temperature is slowly RISING. This is sometimes called global warming. It might not sound like much (the average has risen a bit over the last century), but even a small rise in the global average causes big effects, because it's an average across the ENTIRE planet, all the time. To understand WHY this is happening, we need to understand something called the greenhouse effect.`,
          ],
          image: `/ue-assets/cosmos/l13-s1-climate.webp`,
          imageCaption: `Weather is today. Climate is the long-term average. The climate is slowly warming.`,
          vocab: [
            {
              word: `climate change`,
              definition: `A long-term shift in Earth's overall climate patterns, including the current slow rise in the planet's average temperature (global warming). Different from day-to-day weather.`,
              audioPrompt: `Climate change means a long-term shift in Earth's overall climate patterns, {name}. First, an important difference. Weather is what's happening in the sky right now, or over a few days. Climate is the average pattern of weather over a long time, usually 30 years or more. Weather changes hour to hour. Climate changes slowly, over decades. Right now, scientists have found that Earth's average temperature is slowly rising, sometimes called global warming. Even a small rise in the global average has big effects.`,
            },
            {
              word: `global warming`,
              definition: `The slow rise in Earth's average temperature, caused by extra greenhouse gases trapping more heat. Scientists measure this rise using thermometers, satellite data, and ancient air bubbles trapped in ice.`,
              audioPrompt: `Global warming refers to the slow rise in Earth's average temperature, {name}. Scientists have measured this rise directly using thermometers around the world, going back over a century. They've also studied ancient air bubbles trapped in ice to compare today's temperature to thousands of years ago. The rise might sound small, but it's an average across the entire planet, all the time. Even a small rise in the global average causes big effects, like melting glaciers, rising seas, and more extreme weather patterns.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Greenhouse Effect`,
          paragraphs: [
            `Here's the key science. Earth is wrapped in a thin layer of air called the atmosphere. Certain gases in the air, called GREENHOUSE GASES (the most important is carbon dioxide, or CO2), act a bit like a cozy blanket. They let sunlight in to warm the Earth, but they trap some of the heat from escaping back into space. This is called the GREENHOUSE EFFECT, and here's a surprise: it's NATURAL and NECESSARY. Without any greenhouse effect at all, Earth would be a frozen ball of ice, far too cold for life. The natural greenhouse effect keeps our planet comfortably warm.`,
            `So the greenhouse effect itself is a good thing. The issue is about the AMOUNT. When there are MORE greenhouse gases in the air, MORE heat gets trapped, and the planet warms up more. Think of it like adding extra blankets on a bed: a little keeps you cozy, but too many make you overheat. Over the last 150 years or so, the amount of carbon dioxide in the atmosphere has risen significantly. More greenhouse gases mean a stronger greenhouse effect, which means a warmer planet. The science of how greenhouse gases trap heat has been understood and tested for over 100 years. So the next question is: where are all these extra greenhouse gases coming from?`,
          ],
          image: `/ue-assets/cosmos/l13-s2-greenhouse.webp`,
          imageCaption: `Greenhouse gases trap heat like a blanket. Natural and necessary, but too much overheats.`,
          vocab: [
            {
              word: `greenhouse effect`,
              definition: `The natural process where gases in Earth's atmosphere trap some of the Sun's heat, keeping the planet warm enough for life. Adding extra greenhouse gases traps more heat, warming the planet further.`,
              audioPrompt: `The greenhouse effect is the natural process where gases in Earth's atmosphere trap some of the Sun's heat, {name}. Certain gases, called greenhouse gases, act like a cozy blanket. They let sunlight in to warm the Earth, but trap some heat from escaping back to space. Here's a surprise: this is natural and necessary. Without any greenhouse effect, Earth would be a frozen ball of ice, too cold for life. The issue is the amount. More greenhouse gases trap more heat, warming the planet more.`,
            },
            {
              word: `carbon dioxide`,
              definition: `A greenhouse gas (CO2) produced when living things breathe or when fuels burn. It's the most important greenhouse gas driving recent climate change. Plants use it during photosynthesis, but burning fossil fuels has raised CO2 levels far above their natural range.`,
              audioPrompt: `Carbon dioxide is a greenhouse gas produced when living things breathe or when fuels burn, {name}. It's the most important greenhouse gas driving recent climate change. Plants use carbon dioxide during photosynthesis, which helps keep levels balanced. But over the last 150 years, humans burning fossil fuels have released huge amounts of carbon dioxide that had been stored underground for millions of years. This has raised CO2 levels in the atmosphere significantly, strengthening the greenhouse effect and causing Earth's average temperature to rise.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Evidence and the Human Role`,
          paragraphs: [
            `Scientists have gathered strong EVIDENCE about what's happening. They measure the amount of carbon dioxide in the air directly, and it has risen sharply, especially over the last century. They can even study air bubbles trapped in ancient ice (ice cores) to know what the atmosphere was like thousands of years ago, and today's CO2 levels are higher than at any point in that record. They measure temperatures around the world, track melting glaciers and ice sheets, and monitor rising sea levels. Many independent lines of evidence point the same way.`,
            `Where do the extra greenhouse gases come from? The main source is humans burning FOSSIL FUELS: coal, oil, and natural gas, which we use for electricity, transportation, and industry. When these fuels burn, they release carbon dioxide that had been stored underground for millions of years. The world's leading scientific organizations agree, based on the evidence, that this human activity is the main cause of the recent warming. This is the scientific consensus, meaning the overwhelming majority of climate scientists, looking at the same evidence, reach the same conclusion. Like any science, details continue to be studied, but the core picture is well established: the planet is warming, and human greenhouse gas emissions are the primary driver.`,
          ],
          image: `/ue-assets/cosmos/l13-s3-evidence.webp`,
          imageCaption: `Rising CO2, warming temperatures, melting ice: many clues, one conclusion.`,
          vocab: [
            {
              word: `fossil fuels`,
              definition: `Coal, oil, and natural gas, formed from ancient living things over millions of years. Burning them for energy releases carbon dioxide, the main greenhouse gas driving recent climate change.`,
              audioPrompt: `Fossil fuels are coal, oil, and natural gas, {name}. They formed from ancient living things over millions of years, buried deep underground. We burn them for electricity, transportation, and industry. The problem is that when these fuels burn, they release carbon dioxide that had been stored underground for millions of years. This adds extra greenhouse gases to the air. The world's leading scientific organizations agree, based on strong evidence, that burning fossil fuels is the main cause of recent warming.`,
            },
            {
              word: `ice core`,
              definition: `A cylinder of ancient ice drilled from glaciers or polar ice sheets. Trapped air bubbles contain actual ancient atmosphere — scientists study them to learn Earth's past temperature and greenhouse gas levels, going back hundreds of thousands of years.`,
              audioPrompt: `An ice core is a cylinder of ancient ice drilled from glaciers or polar ice sheets, {name}. As snow falls year after year, it compresses into ice, trapping tiny air bubbles. Those air bubbles contain actual ancient atmosphere, from thousands or even hundreds of thousands of years ago. Scientists study the ice to learn what Earth's temperatures and greenhouse gas levels were like long before any thermometers existed. Ice cores are one of our most powerful tools for understanding Earth's climate history.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reasons for Hope and Action`,
          paragraphs: [
            `Now, here's something important: understanding climate change should NOT make you feel hopeless or terrified. Fear doesn't solve problems; understanding and action do. And there is genuinely a lot of good news. Humans are clever and capable. Clean energy like solar and wind is growing fast and getting cheaper every year. Electric cars are becoming common. Countries, companies, and communities around the world are working on solutions. Many problems that once seemed impossible have been solved when people decided to work together.`,
            `You are part of this story too. The choices your generation makes will shape the future, and you have more power than you might think. Learning the real science (like you're doing right now) is the first step, because good solutions come from good understanding. Caring for our planet connects to the same wonder we've explored all along: Earth is, as far as we know, the only living world in the entire universe. From everything we've learned about the vastness and rarity of life-bearing planets, our world is extraordinarily precious. Nova's teaching: the same awe that makes you marvel at the cosmos can make you want to care for this one small, beautiful, living planet we all share. Understanding leads to caring, and caring leads to action. That's where real hope comes from.`,
          ],
          image: `/ue-assets/cosmos/l13-s4-hope.webp`,
          imageCaption: `Clean energy is growing. Solutions are real. Your generation has genuine power.`,
          vocab: [
            {
              word: `scientific consensus`,
              definition: `When the overwhelming majority of scientists studying a topic, looking at the same evidence, reach the same conclusion. There is a scientific consensus that the planet is warming and human activity is the main cause.`,
              audioPrompt: `Scientific consensus is when the overwhelming majority of scientists studying a topic, looking at the same evidence, reach the same conclusion, {name}. It's not just one scientist's opinion. It's what happens when thousands of experts, examining the same data from many angles, agree on the core findings. There is a strong scientific consensus that Earth's climate is warming and that human activity, mainly burning fossil fuels, is the main cause. The core findings are well established, supported by many independent lines of evidence.`,
            },
            {
              word: `clean energy`,
              definition: `Energy sources that produce little or no greenhouse gases or pollution: solar, wind, and hydropower. Clean energy is growing fast and getting cheaper every year, making it one of the most important real solutions to climate change.`,
              audioPrompt: `Clean energy refers to energy sources that produce little or no greenhouse gases or other pollution, {name}. Solar, wind, and hydropower are all clean energy sources. They can power our homes, cities, and industries without releasing the carbon dioxide that's driving climate change. Clean energy is growing faster than almost anyone predicted. Solar panels and wind turbines are being built at record rates around the world. This is one of the most hopeful trends in the climate story: the solutions already exist, they work, and they're getting cheaper every year.`,
            },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to put the science in order, {name}. Here are five steps in the chain of how climate change happens, scrambled up. Use the arrows to arrange them from FIRST CAUSE (top) to FINAL EFFECT (bottom). Think about what leads to what.`,
          items: [
            { id: `step-burn`,    label: `People burn fossil fuels (coal, oil, gas) for energy`,           position: 1 },
            { id: `step-release`, label: `This releases extra carbon dioxide and other greenhouse gases`,  position: 2 },
            { id: `step-trap`,    label: `The extra greenhouse gases trap more of the Sun's heat`,         position: 3 },
            { id: `step-warm`,    label: `Earth's average temperature slowly rises`,                       position: 4 },
            { id: `step-effects`, label: `Ice melts, seas rise, and weather becomes more extreme`,         position: 5 },
          ],
          completionMessage: `Exactly right, {name}! That's the chain of climate change: burning fossil fuels releases greenhouse gases, which trap extra heat, which warms the planet, which causes effects like melting ice and rising seas. The good news is that understanding this chain shows us where solutions fit: change the first step (cleaner energy), and you change the whole chain.`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What's the difference between WEATHER and CLIMATE?`,
              options: [
                `They're the same thing`,
                `Weather is what's happening now or over a few days; climate is the long-term average pattern (usually 30+ years)`,
                `Climate is daily; weather is yearly`,
                `Weather only happens in winter`,
              ],
              correctIndex: 1,
              explanation: `Weather is short-term (today's rain, this week's heat). Climate is the long-term average pattern over decades. A cold day doesn't disprove warming, and a hot day doesn't prove it. Climate is about the big, long-term picture.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is the GREENHOUSE EFFECT?`,
              options: [
                `A way to grow plants`,
                `Gases in the atmosphere trapping some of the Sun's heat — natural and necessary, but stronger with more greenhouse gases`,
                `A type of pollution only`,
                `Sunlight bouncing off mirrors`,
              ],
              correctIndex: 1,
              explanation: `The greenhouse effect is gases trapping some of the Sun's heat, like a blanket. It's natural and necessary. Without it, Earth would be frozen. The issue is the amount: more greenhouse gases trap more heat and warm the planet more.` },

            { id: `l13-q3`, format: `true-false`,
              question: `True or false: The greenhouse effect is entirely bad and we'd be better off without any of it.`,
              correctAnswer: false,
              explanation: `False. The natural greenhouse effect is necessary. Without any greenhouse effect, Earth would be a frozen ball of ice, too cold for life. The problem isn't the greenhouse effect itself, it's the EXTRA greenhouse gases adding too much, like piling on too many blankets.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `What is the MAIN source of the extra greenhouse gases causing recent warming?`,
              options: [
                `Volcanoes`,
                `Humans burning fossil fuels (coal, oil, natural gas) for energy`,
                `Animals breathing`,
                `The Sun getting hotter`,
              ],
              correctIndex: 1,
              explanation: `The main source is humans burning fossil fuels (coal, oil, gas) for electricity, transport, and industry. This releases carbon dioxide stored underground for millions of years. The scientific consensus is that this is the primary driver of recent warming.` },

            { id: `l13-q5`, format: `multiple-choice`,
              question: `What EVIDENCE do scientists use to study climate change?`,
              options: [
                `Just guessing`,
                `Direct CO2 measurements, ancient air in ice cores, global temperatures, melting glaciers, rising seas — many independent lines`,
                `Only one thermometer`,
                `Weather forecasts`,
              ],
              correctIndex: 1,
              explanation: `Scientists use many independent lines of evidence: direct CO2 measurements, ancient air trapped in ice cores, global temperature records, melting glaciers, and rising sea levels. When many independent clues point the same way, confidence grows.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is a SCIENTIFIC CONSENSUS?`,
              options: [
                `One scientist's opinion`,
                `When the overwhelming majority of scientists, looking at the same evidence, reach the same conclusion`,
                `A vote by the public`,
                `A guess everyone agrees on`,
              ],
              correctIndex: 1,
              explanation: `A scientific consensus is when the overwhelming majority of scientists studying a topic, examining the same evidence, reach the same conclusion. There's a strong consensus that the planet is warming and human activity is the main cause.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `According to Nova, how should understanding climate change make you feel?`,
              options: [
                `Hopeless and terrified`,
                `Informed and motivated — fear doesn't solve problems, but understanding and action do, and there's real reason for hope`,
                `Like it's not your problem`,
                `Bored`,
              ],
              correctIndex: 1,
              explanation: `Understanding shouldn't make you hopeless. Fear doesn't solve problems; understanding and action do. Clean energy is growing fast, solutions are real, and your generation has genuine power. Good solutions come from good understanding, which is what you're building.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `Why does caring for Earth connect to everything else in Cosmos?`,
              options: [
                `It doesn't connect`,
                `Earth is, as far as we know, the only living world in the entire universe — which makes it extraordinarily precious`,
                `Because Earth is the biggest planet`,
                `Because other planets are boring`,
              ],
              correctIndex: 1,
              explanation: `From all we've learned about the vastness of space and the rarity of life, Earth is, as far as we know, the only living world in the universe. That makes our planet extraordinarily precious. The same awe that makes us marvel at the cosmos can make us want to care for our one living home.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Nova says understanding leads to caring, and caring leads to action. Now that you understand the science better, how do you feel about it?` },
            { id: `r2`, text: `Earth may be the only living world in the entire universe. Does thinking about that change how precious our planet feels to you?` },
            { id: `r3`, text: `The greenhouse effect is natural and necessary, but too much warms the planet. What surprised you most about how it actually works?` },
            { id: `r4`, text: `Your generation will shape the future. What's one small thing you'd be willing to do, or learn more about, to help care for the planet?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Understanding climate science is one of the most valuable things you can learn, because it affects your future and helps you think clearly about a topic people often argue about emotionally. When you understand the actual evidence and mechanisms, you can evaluate claims for yourself, spot exaggerations in either direction, and contribute to real solutions rather than just worry. Scientists, engineers, inventors, and leaders are working on cleaner energy, better technology, and smarter ways to live. Nova's note: the people who will solve the biggest challenges are the ones who understand them deeply and refuse to give up hope. Understanding the science, like you did today, is exactly how that starts.`,
          familyAdventure: `Family Energy Audit. As a family, spend a day noticing where your energy comes from and how you use it. Where does your electricity come from? How do you travel? Pick ONE small change to try for a week (walking instead of a short drive, turning off unused lights, or learning together about a clean energy source). Talk about how small changes by many people add up, and how Earth is the one living home we all share. Focus on curiosity and care, not guilt.`,
          creativePrompt: {
            intro: `Imagine you're a scientist in the year 2060, looking back. Write about how your generation helped solve the climate challenge.`,
            floor: `Write at least 5 sentences. Describe one or two solutions your generation developed and how the world changed for the better.`,
            stretch: `Write 8 to 10 sentences. Describe the challenge, several solutions (clean energy, new technology, working together), and how understanding the science helped.`,
            open: `Write as much as you want. Write a hopeful but realistic letter from the future. Describe the climate challenge your generation faced, the real solutions you developed (clean energy, innovation, cooperation, smart choices), the obstacles you overcame, and how it felt to be part of solving one of the biggest challenges in history. Show that understanding the science was the foundation for the solutions.`,
            frames: [
              `Looking back from 2060, I'm proud that my generation ___.`,
              `The biggest challenge we faced was ___.`,
              `Some of the solutions we developed were ___.`,
              `It wasn't easy, because ___.`,
              `What made it all possible was that we first ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}. You can now explain the difference between weather and climate, how the greenhouse effect works, the evidence and human role in climate change, and why there's real reason for hope and action. You even put the whole chain in order. Next lesson: we explore the clean energy that's powering the future. RENEWABLE ENERGY AND THE FUTURE. See you there. — Nova.`,
          badge: `climate-explorer`,
          badgeName: `Climate Science Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
