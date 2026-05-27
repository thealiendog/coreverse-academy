// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L19 — The Climate Crisis in Historical Context
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what climate change is (the science),
//        how humans got here (history), what's being debated (policy),
//        what individuals and societies can do
// VERSION: v1
// CONTESTED TOPIC: The basic science (warming is happening, humans contribute)
//                  is settled. Policy responses are heavily debated. Cover the
//                  science honestly. Present multiple policy perspectives.
//                  No alarmism, no dismissiveness, no political agenda.
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-19`,
      title: `The Climate Crisis in Historical Context`,
      duration: 18,
      xpReward: 75,
      badge: `climate-thinker`,
      badgeName: `Climate Thinker`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today we tackle one of the most discussed and most debated topics of our era. The CLIMATE CRISIS. Reasonable people disagree about parts of this topic, especially what to do about it. So our job today is to be honest about what science has clearly established AND honest about what's still being debated. We'll cover the settled science, the historical reasons it happened, and the very real debates about how to respond. Let's go.`,
          headline: `The Climate Crisis in Historical Context`,
          subtitle: `What science has shown, what humans have done, and what's being debated`,
          visual: `/ue-assets/history/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Science Has Established`,
          paragraphs: [
            `Earth's CLIMATE is the long-term pattern of weather across the planet. Climate has always changed over Earth's history. There have been ice ages and warmer periods. But scientists have established several things about CURRENT climate change with very high confidence. First, the planet has warmed significantly since 1900 (about 1.1 to 1.2 degrees Celsius, or roughly 2 degrees Fahrenheit on average). Second, this warming has been faster than what would happen from natural causes alone. Third, human activities, especially burning FOSSIL FUELS like coal, oil, and gas, are the main driver of this faster warming.`,
            `The mechanism is well understood. Burning fossil fuels releases GREENHOUSE GASES (especially carbon dioxide) into the atmosphere. These gases trap heat that would otherwise escape into space. More greenhouse gases means more trapped heat. This is established physics. The vast majority of scientists who study climate (over 97%) agree on these basic points. Where the scientific debate is more active is on PRECISELY how much warming will happen, how fast, and what the specific effects will be in different places. The basic science is settled. The details are still being refined.`,
          ],
          image: `/ue-assets/history/l19-s1-science.webp`,
          imageCaption: `The science: greenhouse gases trap heat. More gases means more trapped heat.`,
          vocab: [
            { word: `climate change`,
              definition: `Long-term changes in the Earth's average temperatures and weather patterns. Current climate change is mostly caused by humans burning fossil fuels, which releases greenhouse gases.`,
              audioPrompt: `Climate change is long-term changes in the Earth's average temperatures and weather patterns, {name}. Earth's climate has always changed over its history, with ice ages and warmer periods. But current climate change is happening faster than natural causes alone would explain. Scientists who study climate agree, by a wide majority, that the main driver is humans burning fossil fuels like coal, oil, and gas. These release greenhouse gases that trap heat. The basic science of HOW this works is settled.` },
            { word: `atmosphere`,
              definition: `The layer of gases surrounding Earth. The atmosphere contains greenhouse gases that trap heat. Human activities have changed the atmosphere's composition over the last 150 years.`,
              audioPrompt: `The atmosphere is the layer of gases that surrounds Earth, {name}. It keeps our planet warm enough for life. It protects us from harmful radiation from the sun. The atmosphere is also where greenhouse gases like carbon dioxide and methane are found. For most of human history, the composition of the atmosphere changed very slowly. Over the last 150 years, human activities have added significantly more greenhouse gases to the atmosphere. This is what scientists measure when they track climate change.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Did We Get Here?`,
          paragraphs: [
            `Today's climate change is rooted in the INDUSTRIAL REVOLUTION we covered earlier. Once humans figured out how to burn coal at scale to power factories and trains, the world's GREENHOUSE GAS emissions started rising. By the late 1800s, scientists were already noticing that burning fossil fuels might warm the planet. But coal and later oil were so useful (powering factories, cars, planes, electricity, and modern life generally) that emissions kept growing. From 1900 to today, atmospheric carbon dioxide has risen about 50 percent. Most of that came after 1950.`,
            `It's important to recognize that fossil fuels weren't an evil choice. They were the energy that built the modern world. Heating homes, lighting cities, treating sewage, growing food at scale, producing medicines, even making the clothes you're wearing all depended on fossil fuels. The Industrial Revolution didn't just bring problems. It brought enormous progress in human well-being. Most people alive today have benefited from cheap energy in ways their ancestors couldn't have imagined. The challenge is that this same energy source is now causing the climate to change in ways that bring real risks. So humans face a real dilemma: how to keep the benefits of modern life while reducing the harm. Reasonable people disagree about how.`,
          ],
          image: `/ue-assets/history/l19-s2-history.webp`,
          imageCaption: `Fossil fuels built the modern world. Now they're driving climate change.`,
          vocab: [
            { word: `fossil fuels`,
              definition: `Energy sources formed from ancient plants and animals: coal, oil, and natural gas. They powered the Industrial Revolution and most modern life but release greenhouse gases when burned.`,
              audioPrompt: `Fossil fuels are energy sources formed from ancient plants and animals, {name}. Coal, oil, and natural gas. They formed underground over hundreds of millions of years. Once humans figured out how to use them, fossil fuels powered the Industrial Revolution. They still power most of modern life today. They're cheap and store a lot of energy. The challenge is that burning them releases greenhouse gases that trap heat in the atmosphere.` },
            { word: `carbon dioxide`,
              definition: `A greenhouse gas released when fossil fuels are burned. Carbon dioxide is the main human-made greenhouse gas contributing to climate change.`,
              audioPrompt: `Carbon dioxide is a gas released when fossil fuels like coal, oil, and gas are burned, {name}. It's the main human-made greenhouse gas driving current climate change. Carbon dioxide occurs naturally in the atmosphere. Plants absorb it. Animals breathe it out. The problem is that burning fossil fuels has added far more carbon dioxide to the atmosphere than the natural system can absorb. Since the Industrial Revolution, atmospheric carbon dioxide has risen about 50 percent. Scientists track it carefully as the main indicator of human impact on climate.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What's Actually Being Debated`,
          paragraphs: [
            `The basic science of climate change is not really debated among scientists. What IS heavily debated is what to do about it. Different people, with reasonable arguments, support very different responses. Some emphasize FAST GOVERNMENT ACTION: stricter regulations, taxes on carbon emissions, large public investment in alternatives like solar, wind, and nuclear. Others emphasize MARKET AND INNOVATION SOLUTIONS: encouraging companies to develop cheaper clean energy, letting consumers choose, avoiding heavy government rules. Others emphasize ADAPTATION: accepting some warming and investing in protecting communities from its effects (like flood defenses or drought-resistant crops). Most experts say the best response combines all three.`,
            `There's also debate about FAIRNESS. Developed countries like the U.S. and European nations grew rich partly because they burned fossil fuels for over a century. Developing countries like India and many in Africa are still trying to lift their people from poverty, often using fossil fuels. Telling them to stop while wealthier countries did it for a century strikes many as unfair. Working out how to address this is one of the hardest parts of international climate negotiations. There are no easy answers, and people of good faith disagree about the right path forward. That's normal in big political questions, and it's part of why climate is still such a debated topic.`,
          ],
          image: `/ue-assets/history/l19-s3-debate.webp`,
          imageCaption: `Government action, market solutions, adaptation, fairness. Many different views.`,
          vocab: [
            { word: `greenhouse gas`,
              definition: `Gases in the atmosphere that trap heat, especially carbon dioxide and methane. Burning fossil fuels releases more greenhouse gases, which warms the planet.`,
              audioPrompt: `A greenhouse gas is a gas in the atmosphere that traps heat, {name}. The main ones are carbon dioxide and methane. Some greenhouse gases occur naturally and keep Earth warm enough for life. The problem is that human activities have added a lot more greenhouse gases to the atmosphere over the last 150 years. Burning coal, oil, and natural gas releases carbon dioxide. Raising cattle releases methane. These extra gases trap more heat than the natural baseline.` },
            { word: `carbon tax`,
              definition: `A fee charged on fuels based on how much carbon dioxide they produce when burned. Proposed as a way to make fossil fuels more expensive so cleaner alternatives become more attractive.`,
              audioPrompt: `A carbon tax is a fee charged on fuels based on how much carbon dioxide they produce when burned, {name}. The idea is that making fossil fuels more expensive will encourage people and companies to switch to cleaner alternatives. Supporters say it's an efficient way to reduce emissions without banning anything. Critics say it raises costs for ordinary people and hurts the economy. Some countries have tried carbon taxes with mixed results. Whether carbon taxes are a good idea is one of the most actively debated questions in climate policy.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Things Stand`,
          paragraphs: [
            `Real progress is happening on many fronts. SOLAR and WIND power are now cheaper than coal in many places. Electric vehicles are growing rapidly. Many companies are committing to reduce emissions. International agreements like the Paris Agreement (2015) set goals for cutting emissions, though countries are at different points in meeting them. New technologies like better batteries, nuclear fusion research, and carbon capture might change what's possible in the next decade.`,
            `At the same time, global emissions are still rising overall. The amount of warming locked in by current emissions will create real challenges. Sea levels are slowly rising. Some weather patterns are shifting. Some species and ecosystems are already affected. Whether humanity can transition to cleaner energy fast enough to avoid major harm, while still allowing developing countries to grow, is the open question of the next few decades. Your generation will live through whatever answer humanity arrives at. Understanding the science honestly and the debates honestly is part of being able to engage with this challenge thoughtfully as you grow up.`,
          ],
          image: `/ue-assets/history/l19-s4-where-now.webp`,
          imageCaption: `Solar, wind, electric cars are growing fast. Emissions are still rising. The race is real.`,
          vocab: [
            { word: `renewable energy`,
              definition: `Energy sources that don't run out and don't release greenhouse gases. Examples include solar, wind, geothermal, and hydroelectric power. Growing rapidly as alternatives to fossil fuels.`,
              audioPrompt: `Renewable energy comes from sources that don't run out and don't release greenhouse gases, {name}. Solar power from the sun. Wind power from turbines. Hydroelectric power from rivers. Geothermal power from the heat inside the Earth. Renewable energy has grown enormously since 2000. Solar and wind are now cheaper than coal in many parts of the world. They power growing portions of national electricity grids. Renewable energy is one of the most important parts of any plan to reduce climate change.` },
            { word: `electric vehicle`,
              definition: `A vehicle powered by an electric motor and battery rather than a gasoline or diesel engine. Electric vehicles produce no direct emissions and are growing rapidly as alternatives to gas-powered cars.`,
              audioPrompt: `An electric vehicle is a car or truck powered by electricity rather than gasoline or diesel, {name}. Electric vehicles produce no direct emissions while driving. They're one of the most visible examples of the shift toward renewable energy. Electric vehicles have grown from a tiny share of new car sales to a significant portion in just over a decade. Many countries are setting deadlines for ending sales of new gasoline cars. Experts see electric vehicles as essential to reducing transportation emissions, which are a major source of greenhouse gases.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about climate. For each one, decide what kind it is: SETTLED SCIENCE (scientists widely agree, established by evidence), CONTESTED POLICY (a real debate about what to do, with reasonable people on multiple sides), or REAL CHANGE HAPPENING (something measurable that's already underway)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `settled-science`,    label: `Settled Science`,    color: `#34D399`, description: `Something the science has established with high confidence. Not really debated among experts.` },
            { id: `contested-policy`,   label: `Contested Policy`,   color: `#FBBF24`, description: `A debate about what to DO, where reasonable people on multiple sides have arguments.` },
            { id: `real-change`,        label: `Real Change Happening`, color: `#60A5FA`, description: `Something measurable that's actually changing in the world right now.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `Burning fossil fuels releases carbon dioxide (CO2) into the atmosphere.` },
                { text: `Carbon dioxide is a greenhouse gas that traps heat.` },
                { text: `More carbon dioxide in the atmosphere means more trapped heat. This is established physics.` },
              ],
              correctAnswer: `settled-science`,
              realWorldExample: `This basic mechanism has been measured and understood since the 1800s.`,
              explanation: `Established physics. Documented since the 1800s. Not really debated among scientists. Pure settled science. The questions science is still working out are about how MUCH warming will happen and what the specific effects will be, not whether the basic mechanism works.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Some people argue the government should put a tax on carbon emissions to encourage cleaner energy.` },
                { text: `Others argue that government taxes hurt the economy and the better approach is letting innovation create cheaper clean alternatives.` },
                { text: `Both sides have economists and experts who support their position.` },
              ],
              correctAnswer: `contested-policy`,
              realWorldExample: `Carbon taxes are one of the most debated climate policies.`,
              explanation: `Reasonable arguments on multiple sides. Pure contested policy. Whether carbon taxes are a good idea depends on values and predictions about economics, both of which are legitimately debated. This is a perfect example of where science doesn't tell us what to do. We have to decide.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `Global sea levels have risen about 8 to 9 inches (21 to 24 centimeters) since 1880.` },
                { text: `The rate of rise has been accelerating in recent decades.` },
                { text: `Some coastal communities are already adapting with sea walls, raised buildings, and new flood defenses.` },
              ],
              correctAnswer: `real-change`,
              realWorldExample: `Sea level rise is one of the most clearly measured effects of climate change.`,
              explanation: `Measured rise. Accelerating rate. Communities already adapting. Pure real change happening. Sea level rise is one of the most clearly documented climate impacts. It's not a prediction. It's something already underway and being measured.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `Developing countries like India and many African nations are still using fossil fuels to power growth.` },
                { text: `Some argue these countries deserve the same right to grow that wealthy countries had during their own industrialization.` },
                { text: `Others argue all countries need to transition rapidly because climate change affects everyone.` },
              ],
              correctAnswer: `contested-policy`,
              realWorldExample: `The fairness question in climate is one of the hardest in international negotiations.`,
              explanation: `Tricky because the developing countries' use of fossil fuels is a REAL FACT (a measurable thing happening). But the QUESTION here is whether they should change course, and that's heavily debated. Different views on fairness, on development, on responsibility. The lesson: the same situation can be both a fact AND a contested policy question. The fact is countries burn fuels to develop. The debate is what to do about that. Pick the angle that fits the question being asked.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What do scientists who study climate widely AGREE on?`,
              options: [
                `Climate isn't changing`,
                `The planet has warmed since 1900, this is mostly faster than natural causes alone would explain, and humans burning fossil fuels is the main driver`,
                `Climate change is caused only by volcanoes`,
                `Nothing — they all disagree`,
              ],
              correctIndex: 1,
              explanation: `Over 97% of climate scientists agree on these basic points. The planet is warming, it's faster than natural causes, and humans burning fossil fuels is the main driver. The details of exactly how much, how fast, and what effects are still being refined.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What's a GREENHOUSE GAS?`,
              options: [
                `A gas plants make`,
                `A gas that traps heat in the atmosphere, like carbon dioxide and methane`,
                `A type of fertilizer`,
                `A clean fuel`,
              ],
              correctIndex: 1,
              explanation: `Greenhouse gases trap heat in the atmosphere. Some are natural and keep Earth warm enough for life. The problem is that human activities have added a lot more, which traps extra heat and warms the planet beyond its natural baseline.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `Why is climate change connected to the INDUSTRIAL REVOLUTION?`,
              options: [
                `It's not connected`,
                `Because the Industrial Revolution started large-scale burning of fossil fuels, which has been adding greenhouse gases ever since`,
                `Because factories make heat`,
                `By coincidence`,
              ],
              correctIndex: 1,
              explanation: `The Industrial Revolution started about 1760 and steadily ramped up fossil fuel use. From 1900 onward, emissions grew rapidly. Today's climate change is a direct consequence of the same energy revolution that built the modern world.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `Which of these is the SCIENTIFIC consensus part of climate change?`,
              options: [
                `Exactly how warm it will get in 2100`,
                `That greenhouse gases trap heat, and that human burning of fossil fuels has significantly added to greenhouse gases`,
                `Whether to use carbon taxes`,
                `How fast to transition`,
              ],
              correctIndex: 1,
              explanation: `The basic science (greenhouse gases trap heat, humans have added a lot) is settled. The specific projections (exact temperatures, exact timelines), the policy questions (taxes, regulations, market approaches), and the fairness questions are NOT settled in the same way.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: While climate scientists largely agree on the basic science, what humans should DO about climate is heavily debated.`,
              correctAnswer: true,
              explanation: `True. The basic science of climate change is settled. What to do about it (carbon taxes vs market solutions vs adaptation vs which countries should change first) is a legitimate political and economic debate with reasonable people on many sides.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `What is RENEWABLE ENERGY?`,
              options: [
                `Energy from fossil fuels`,
                `Energy sources that don't run out and don't release greenhouse gases, like solar, wind, and hydroelectric`,
                `Nuclear energy only`,
                `Energy from oil`,
              ],
              correctIndex: 1,
              explanation: `Renewable energy includes solar, wind, geothermal, and hydroelectric. These have grown rapidly since 2000. Solar and wind are now cheaper than coal in many places. They're a major part of any plan to reduce climate change.` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `What's a real DILEMMA about climate change?`,
              options: [
                `There's no dilemma`,
                `Fossil fuels have improved billions of lives, so simply banning them creates real costs, especially for poor countries. But continuing them creates real climate risks. Balancing the trade-off is genuinely hard.`,
                `Climate change isn't happening`,
                `Renewable energy doesn't exist`,
              ],
              correctIndex: 1,
              explanation: `This is one of the most honest framings. Fossil fuels built modern prosperity AND are warming the planet. Both are true. Working out how to keep the benefits of modern life while reducing harm is the real challenge. There are no easy answers.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `What's the HONEST approach when learning about contested topics like climate?`,
              options: [
                `Pick one side and ignore the other`,
                `Recognize what's settled science (the basic mechanism, human role), what's contested policy (what to do), and what's actually happening now (real measured changes). Listen to multiple perspectives.`,
                `Conclude nothing matters`,
                `Trust only one source`,
              ],
              correctIndex: 1,
              explanation: `Honest study of contested topics keeps clear about which parts are settled science (the basic mechanism), which are real-world changes already happening (measured), and which are contested policy (debated). Mixing these up is how most arguments go wrong.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Climate is heavily debated. What's something you've heard about climate change that turned out to be more settled than you thought? Or less settled?` },
            { id: `r2`, text: `Imagine you're an adult in 2050. Which path do you hope humans took to address climate change? Why?` },
            { id: `r3`, text: `Fossil fuels gave humanity electricity, cars, medicine, and modern food production. They also drive climate change. How do you think about giving up something useful to prevent harm?` },
            { id: `r4`, text: `What's one small thing your family could do to use less fossil fuel? What's one big thing that would require governments or companies to act?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Climate change is one of the most discussed topics of YOUR generation. By the time you're an adult, the choices being made now will be visible in real ways. Some choices are scientific (better renewable technology, more efficient batteries, cleaner agriculture). Some are political (carbon pricing, regulations, international agreements). Some are personal (how you travel, eat, consume). Understanding both the settled science and the legitimate debates helps you participate in this challenge thoughtfully rather than just emotionally. You're going to hear many strong opinions in your life. The skill of separating settled fact from contested judgment will serve you well.`,
          familyAdventure: `Family Energy Audit. As a family, look at your home's energy use for one week. How many lights stay on when no one's in a room? How long are showers? How often is the AC or heat running? Don't aim for perfection. Just notice. Then pick ONE small change to try together. This isn't about guilt. It's about being thoughtful about how your family uses energy and what trade-offs feel right to you.`,
          creativePrompt: {
            intro: `Imagine you're writing a letter to your future grandchildren about how you and your family thought about climate when you were young.`,
            floor: `Write at least 5 sentences. Cover what you knew about climate change, what your family discussed, and what choices you tried to make.`,
            stretch: `Write 8 to 10 sentences. Cover the settled science you learned, the debates you witnessed, and the personal and community choices your family considered.`,
            open: `Write as much as you want. Build a thoughtful letter that captures both the hopes and the difficulties of your era. Be honest about what was hard to figure out and what felt clear.`,
            frames: [
              `Dear future grandchild, when I was young, climate change was a big topic.`,
              `What scientists clearly agreed on was ___.`,
              `What people debated was ___.`,
              `What my family tried was ___.`,
              `What I hope you can tell me went well is ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now distinguish what science has clearly established about climate change, what's still being debated, and what real changes are already happening. You can hold the settled science honestly AND consider multiple perspectives on what to do about it. Final lesson coming up: a fitting close to our history journey. We'll look at the WORLD IN 2050, considering predictions, possibilities, and your own role in shaping what comes next. See you for the finale, — Lyra.`,
          badge: `climate-thinker`,
          badgeName: `Climate Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
