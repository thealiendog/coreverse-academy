// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L09 — Weather: What's Happening in the Sky
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 3-ESS2-1, 3-ESS2-2 — Weather patterns and predictions;
//            climate and weather variation
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — weather basics (temp, humidity, pressure, wind),
//        why weather happens (Sun heats Earth unevenly), forecasting,
//        weather vs climate
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-09`,
      title: `Weather: What's Happening in the Sky`,
      duration: 18,
      xpReward: 75,
      badge: `weather-watcher`,
      badgeName: `Weather Watcher`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we followed water in its endless cycle. Today we look at what HAPPENS in the sky to create all that weather. Why is it sometimes sunny, sometimes rainy, sometimes calm, sometimes windy? Weather isn't random. It's the result of the SUN heating Earth unevenly. Once you understand that, weather starts to make sense. Let's go.`,
          headline: `Weather`,
          subtitle: `Why the sky keeps changing, and how to read what's happening`,
          visual: `/ue-assets/science/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Weather Actually Is`,
          paragraphs: [
            `WEATHER is what's happening in Earth's ATMOSPHERE in a specific place at a specific time. It's described by several measurable things. TEMPERATURE: how hot or cold the air is. HUMIDITY: how much water vapor is in the air. AIR PRESSURE: how much the atmosphere is pressing down. WIND: which direction air is moving and how fast. PRECIPITATION: whether water is falling from the sky and in what form (rain, snow, etc.).`,
            `Weather can change in MINUTES. A sunny morning can become a thunderstorm by afternoon. A calm night can become a windstorm by sunrise. That's normal. Weather is constantly shifting because the conditions causing it are constantly shifting. Don't confuse weather with climate. CLIMATE is the LONG-TERM PATTERN of weather over decades, like "California has dry summers and wet winters." Weather is what's happening today or this week. Climate is what's typical over many years.`,
          ],
          image: `/ue-assets/science/l09-s1-what-is-weather.webp`,
          imageCaption: `Temperature, humidity, pressure, wind, precipitation. The five main weather variables.`,
          vocab: [
            { word: `weather`,
              definition: `What's happening in Earth's atmosphere at a specific place and time. Includes temperature, humidity, air pressure, wind, and precipitation. Can change in minutes.`,
              audioPrompt: `Weather is what's happening in Earth's atmosphere at a specific place and specific time, {name}. It's described by several measurable things. Temperature is how hot or cold the air is. Humidity is how much water vapor is in the air. Air pressure is how much the atmosphere is pressing down. Wind is which direction air is moving and how fast. Precipitation is whether water is falling from the sky. Weather can change in minutes. A sunny morning can become a stormy afternoon. That's normal.` },
            { word: `humidity`,
              definition: `The amount of water vapor in the air. High humidity feels heavy and sticky. Low humidity feels dry. Meteorologists measure it as a percentage called relative humidity.`,
              audioPrompt: `Humidity is the amount of water vapor in the air, {name}. When humidity is high, the air feels heavy and sticky. When humidity is low, the air feels dry. Humidity affects how comfortable you feel, how fast sweat evaporates from your skin, and whether weather systems produce rain. Warm air can hold more water vapor than cool air. When warm, humid air rises and cools, the water vapor condenses into clouds and eventually falls as precipitation. Meteorologists measure humidity as a percentage called relative humidity.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Weather Happens`,
          paragraphs: [
            `Almost all weather comes from one simple fact. The SUN heats Earth UNEVENLY. Areas near the EQUATOR get more direct sunlight, so they're warmer. Areas near the POLES get less direct sunlight, so they're colder. This temperature difference causes air to MOVE. Warm air rises (because it's less dense). Cold air sinks (because it's more dense). The constant movement of air trying to balance out heat is what creates wind, weather systems, and storms.`,
            `When warm, moist air rises, it COOLS as it goes higher. Cooler air can't hold as much water vapor, so the vapor CONDENSES into tiny droplets, forming CLOUDS. If the droplets grow large enough, they fall as PRECIPITATION (which we covered last lesson). When two large air masses meet (one warm, one cold), the boundary between them is called a FRONT. Fronts often bring storms because the air is rapidly changing temperature. A cold front pushing into warm air can create thunderstorms in hours. Understanding weather is largely about understanding what air masses are doing and where they're meeting.`,
          ],
          image: `/ue-assets/science/l09-s2-why-weather.webp`,
          imageCaption: `Sun heats Earth unevenly. Air moves to balance. Weather happens.`,
          vocab: [
            { word: `atmosphere`,
              definition: `The layer of gases surrounding Earth where all weather happens. Made mostly of nitrogen and oxygen, with small amounts of water vapor and other gases.`,
              audioPrompt: `The atmosphere is the layer of gases surrounding Earth, {name}. All weather happens in the atmosphere, mostly in the lowest layer called the troposphere. The atmosphere is about 78 percent nitrogen and 21 percent oxygen. The rest is small amounts of water vapor, carbon dioxide, and other gases. The amount of water vapor in the air can change a lot. That changing water content is what makes weather possible. Hot, humid air rising into cooler levels of the atmosphere is what powers clouds, rain, and storms.` },
            { word: `air pressure`,
              definition: `The force the atmosphere exerts on everything below it. High pressure means clear weather; low pressure means cloudy or stormy weather. Measured with a barometer.`,
              audioPrompt: `Air pressure is the force that the atmosphere exerts on everything below it, {name}. High air pressure usually means clear, sunny weather because the air is sinking and discouraging clouds from forming. Low air pressure usually means cloudy, stormy weather because air is rising, cooling, and condensing into clouds. Meteorologists track air pressure with a tool called a barometer. When air pressure drops quickly, it often signals that a storm is coming. Air pressure differences between regions are also what creates wind.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Forecasting: Why It's Hard`,
          paragraphs: [
            `Weather FORECASTING is the science of predicting what the weather will do. Meteorologists use HUGE amounts of data from satellites, weather balloons, ground stations, and ocean buoys. They feed all of it into COMPUTER MODELS that simulate the atmosphere. Modern forecasts for the next 1-2 days are pretty accurate. Forecasts for 3-5 days are decent. Forecasts past a week start getting unreliable, because the atmosphere is what scientists call CHAOTIC. Small changes can cause big differences over time.`,
            `This is why weather forecasts sometimes feel wrong. The weather system is so complex that even tiny changes (a slightly warmer pocket of air, a slightly stronger wind) can change outcomes hours or days later. This isn't a failure of forecasters. It's a feature of the system. The fact that we can predict weather AT ALL for a few days is one of science's great achievements. A century ago, we couldn't reliably predict weather even one day in advance. Today's forecasts save lives by giving warning of hurricanes, blizzards, and severe storms.`,
          ],
          image: `/ue-assets/science/l09-s3-forecast.webp`,
          imageCaption: `Satellites, balloons, stations, computer models. Modern forecasting at work.`,
          vocab: [
            { word: `forecast`,
              definition: `A prediction about what the weather will do, based on data from satellites, weather stations, and computer models. Accurate for a few days but harder for longer time periods.`,
              audioPrompt: `A forecast is a prediction about what the weather will do, {name}. Meteorologists use huge amounts of data from satellites, weather balloons, ground stations, and ocean buoys. They feed all of it into computer models that simulate the atmosphere. Modern forecasts for the next one to two days are pretty accurate. Forecasts past a week start getting unreliable because the atmosphere is chaotic. Small changes early on can cause big differences later. Forecasting saves lives by giving warning of hurricanes, blizzards, and other dangerous weather.` },
            { word: `meteorologist`,
              definition: `A scientist who studies Earth's atmosphere and weather. Meteorologists collect data and use computer models to predict weather and issue warnings for dangerous events.`,
              audioPrompt: `A meteorologist is a scientist who studies Earth's atmosphere and weather, {name}. Meteorologists collect data from satellites, weather balloons, ground stations, and ocean buoys. They use powerful computers to run models that simulate the atmosphere and predict how weather will change. Modern meteorologists can predict weather fairly accurately for the next few days. They also issue warnings for dangerous events like hurricanes, tornadoes, blizzards, and severe thunderstorms. Weather warnings save lives by giving people time to prepare or evacuate.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Weather vs Climate`,
          paragraphs: [
            `One of the most important distinctions in science is between WEATHER and CLIMATE. WEATHER is what's happening today, this week, or this storm. It can be unusually cold one day or unusually hot another. That's normal. CLIMATE is the long-term pattern of weather over decades. Joshua Tree, California has a desert climate (very hot summers, mild winters, low rainfall). New York City has a temperate climate (four distinct seasons, moderate rainfall). The climate of a region tells you what weather to EXPECT over time, even though specific days can be wildly different from average.`,
            `This distinction matters because of CLIMATE CHANGE, which you'll have heard about. When scientists discuss climate change, they're talking about long-term shifts in average conditions. A cold snap in winter doesn't disprove climate change, because climate is about long-term averages, not individual cold days. A hot summer doesn't prove climate change by itself either. What scientists track is the DIRECTION of long-term trends across the entire planet over decades. Distinguishing weather from climate is the first step to understanding what scientists actually mean when they talk about climate.`,
          ],
          image: `/ue-assets/science/l09-s4-weather-vs-climate.webp`,
          imageCaption: `Weather: today's storm. Climate: decades of averages. Different scales, different questions.`,
          vocab: [
            { word: `climate`,
              definition: `The long-term pattern of weather in a place over many decades. Climate tells you what kind of weather to expect over time, even though specific days vary.`,
              audioPrompt: `Climate is the long-term pattern of weather in a place over many decades, {name}. Climate tells you what kind of weather to expect over time, even though specific days can be very different. Joshua Tree has a desert climate. New York has a temperate climate. The Arctic has a polar climate. Climate change refers to long-term shifts in these patterns across the whole planet. A single hot day doesn't prove climate change. A single cold day doesn't disprove it. Climate is about averages over decades, not individual days.` },
            { word: `wind`,
              definition: `The movement of air from one place to another, caused by differences in air pressure. Wind carries heat, moisture, and weather systems between regions.`,
              audioPrompt: `Wind is the movement of air from one place to another, {name}. It is caused by differences in air pressure. Air moves from areas of high pressure toward areas of lower pressure, trying to equalize. The Sun heats Earth unevenly, creating these pressure differences. Wind carries heat, moisture, and weather systems from one region to another. Coastal winds can make summers cooler and winters warmer. Extreme wind events like hurricanes, tornadoes, and blizzards can be some of the most destructive forces in nature.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenarios. For each one, decide what's being described: WEATHER (something happening now or in the short term), CLIMATE (long-term patterns over decades), or WEATHER PROCESS (why weather happens — like air mass movement)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `weather`,         label: `Weather`,        color: `#60A5FA`, description: `Specific conditions happening now or in the short term. Temperature, rain, wind today.` },
            { id: `climate`,         label: `Climate`,         color: `#A78BFA`, description: `Long-term patterns over decades. What's typical for a region year after year.` },
            { id: `weather-process`, label: `Weather Process`, color: `#FBBF24`, description: `The mechanism behind weather. Air masses moving, fronts colliding, sun heating unevenly.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scenario #1`,
              clues: [
                { text: `Forecast says it will be 72°F and sunny tomorrow.` },
                { text: `Light wind from the west.` },
                { text: `No rain expected for the next 3 days.` },
              ],
              correctAnswer: `weather`,
              realWorldExample: `A typical weather forecast.`,
              explanation: `Specific conditions for specific days. Pure weather. This is what's happening or about to happen, not long-term averages.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scenario #2`,
              clues: [
                { text: `Joshua Tree National Park sits in a desert region.` },
                { text: `Average rainfall is only about 4 inches per year.` },
                { text: `Summers are extremely hot, winters are mild, and conditions have been like this for thousands of years.` },
              ],
              correctAnswer: `climate`,
              realWorldExample: `Joshua Tree's desert climate is consistent over very long time periods.`,
              explanation: `Long-term, consistent patterns over many years. Pure climate. This tells you what to EXPECT in Joshua Tree, even though specific days might be different. (Cool detail: Joshua Tree is the desert where Caro and Chris are setting up Alien Dog Campground!)`,
            },
            {
              id: `case-3`,
              caseTitle: `Scenario #3`,
              clues: [
                { text: `A large mass of cold air is moving south from Canada.` },
                { text: `It meets a mass of warm, humid air over the central United States.` },
                { text: `The collision causes the warm air to rise rapidly, forming thunderstorms.` },
              ],
              correctAnswer: `weather-process`,
              realWorldExample: `A classic cold-front-meets-warm-front weather event.`,
              explanation: `Mechanism explanation. Why specific weather is happening. Pure weather process. The collision of air masses with different temperatures is one of the most common causes of storms.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scenario #4 — The Tricky One`,
              clues: [
                { text: `Over the past 50 years, average winter temperatures in your region have risen by 2°F.` },
                { text: `Some individual winters were still very cold.` },
                { text: `Spring is now arriving about a week earlier on average than it did in the 1970s.` },
              ],
              correctAnswer: `climate`,
              realWorldExample: `Climate trends look at decades of weather data combined.`,
              explanation: `Tricky because it might LOOK like weather (cold winters, spring timing). But it's actually a CLIMATE pattern. 50 years of trends. Averages. Some specific years still cold, but the long-term direction is clear. This is how climate scientists actually study change: not by pointing to individual hot days, but by tracking patterns over decades. Lesson: scale matters. One cold winter is weather. 50 years of warming winters is climate.`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is WEATHER?`,
              options: [
                `Just the temperature`,
                `What's happening in the atmosphere at a specific place and time — temperature, humidity, wind, pressure, precipitation`,
                `Just rain`,
                `Year-round patterns`,
              ],
              correctIndex: 1,
              explanation: `Weather is the current state of the atmosphere. It includes temperature, humidity, air pressure, wind, and precipitation. Weather changes constantly because the conditions causing it constantly change.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `Why does WEATHER HAPPEN?`,
              options: [
                `It's random`,
                `The Sun heats Earth unevenly, causing air to move, which creates wind, weather systems, and storms`,
                `Because of gravity only`,
                `Because of plants`,
              ],
              correctIndex: 1,
              explanation: `Weather happens because the Sun heats Earth unevenly. Warmer areas have rising air, colder areas have sinking air. The constant movement of air trying to balance is what creates wind and weather systems.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is a FRONT in weather?`,
              options: [
                `The front of a hurricane`,
                `The boundary where two large air masses (one warm, one cold) meet`,
                `Front of a cloud`,
                `The Sun`,
              ],
              correctIndex: 1,
              explanation: `A front is the boundary between two air masses with different temperatures. Cold fronts often bring storms because cold air pushes warm air upward, where it cools and condenses into clouds and rain.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `Why are FORECASTS for 7+ days less reliable?`,
              options: [
                `Forecasters get lazy`,
                `The atmosphere is chaotic — small changes early on can cause big differences later, making long-range predictions unreliable`,
                `Computers are weak`,
                `Nothing changes after a week`,
              ],
              correctIndex: 1,
              explanation: `The atmosphere is what scientists call chaotic. Tiny initial differences can cause big changes over time. This is just how complex systems work. Modern forecasts are still very good for 1-3 days and decent for 4-5 days.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: Weather and climate are the same thing.`,
              correctAnswer: false,
              explanation: `False. Weather is what's happening today or this week. Climate is the LONG-TERM pattern over many decades. A cold winter doesn't change the climate. A hot summer doesn't either. Climate is about averages over time, not individual days.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's CLIMATE?`,
              options: [
                `Today's weather`,
                `The long-term pattern of weather in a place over many decades`,
                `The same as weather`,
                `Only temperature`,
              ],
              correctIndex: 1,
              explanation: `Climate tells you what kind of weather to expect over time. Joshua Tree has a desert climate. New York has a temperate climate. Specific days can vary, but the long-term averages stay consistent for thousands of years.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `What happens when WARM AIR rises into cooler levels of the atmosphere?`,
              options: [
                `Nothing`,
                `It cools, the water vapor condenses into tiny droplets, and clouds form`,
                `It gets hotter`,
                `It disappears`,
              ],
              correctIndex: 1,
              explanation: `As warm air rises, it cools. Cool air can't hold as much water vapor. The vapor condenses into liquid droplets, forming clouds. If those droplets grow large enough, they fall as precipitation.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `How can a person tell if something is WEATHER or CLIMATE?`,
              options: [
                `Just by looking outside`,
                `Weather is happening now or in the short term. Climate is the long-term pattern over decades. One day of unusual heat is weather. 50 years of warming summers is climate.`,
                `They're identical`,
                `Only experts can tell`,
              ],
              correctIndex: 1,
              explanation: `The scale tells you. One cold week is weather. Decades of changing averages is climate. This distinction matters a lot when people talk about climate change. A single hot summer doesn't prove anything by itself. Long-term trends across the planet do.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Describe today's weather where you are. What's the temperature, humidity, wind, sky like? What can you observe just by going outside?` },
            { id: `r2`, text: `Some people say weather forecasters are always wrong. Now that you know how forecasting actually works, what would you say to them?` },
            { id: `r3`, text: `What's the most extreme weather you've ever experienced? What did it feel like? What do you think caused it?` },
            { id: `r4`, text: `What's the difference between someone saying "it's freezing today, so climate change isn't real" and someone saying "average temperatures have risen 2 degrees over 50 years"?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Weather affects almost everything humans do. Farmers depend on rain. Pilots need to know about storms. Coastal communities need warnings of hurricanes. Energy companies plan for hot or cold periods. Even sports games get rescheduled because of weather. Meteorologists are some of the most important scientists in modern society, and the science behind their forecasts comes directly from the principles you learned today: sun heating, air masses, fronts, and pressure systems.`,
          familyAdventure: `Family Weather Journal. For one week, have each family member observe and record the weather each morning. Note the temperature, sky conditions (sunny, cloudy, raining), wind direction, and how it feels. At the end of the week, compare observations. Notice how weather changes day to day. Then check a 7-day forecast for next week and see how well you can predict the actual weather.`,
          creativePrompt: {
            intro: `Imagine being a meteorologist explaining a strange weather day to a TV audience. Write your forecast.`,
            floor: `Write at least 5 sentences. Describe the unusual weather, what's happening in the atmosphere to cause it, and what to expect tomorrow.`,
            stretch: `Write 8 to 10 sentences. Include temperature, humidity, wind, pressure, and at least one piece of weather science (a front colliding, an air mass moving, etc.) that explains the conditions.`,
            open: `Write as much as you want. Build a full TV forecast script. Explain not just what's happening but WHY, using real meteorological concepts. Include safety advice if dangerous weather is involved.`,
            frames: [
              `Good evening, this is your meteorologist with today's forecast.`,
              `Right now, conditions are ___.`,
              `What's happening behind the scenes is ___.`,
              `Looking ahead, ___.`,
              `My advice for tomorrow is ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe what weather actually is, explain why it happens, understand why forecasts are reliable for some time scales and not others, and tell weather apart from climate. Next lesson: a different kind of cycle. Why the SUN rises and sets, and why we have seasons. See you there. — Cosmo.`,
          badge: `weather-watcher`,
          badgeName: `Weather Watcher`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
