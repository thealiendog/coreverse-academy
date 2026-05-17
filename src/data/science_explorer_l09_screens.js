// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L09 — Weather: What's Happening in the Sky
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-ESS2-1 (weather patterns observed, recorded, and predicted)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L09 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-09`,
      title:     `Weather: What's Happening in the Sky`,
      duration:  12,
      xpReward:  50,
      badge:     `weather-explorer`,
      badgeName: `Weather Explorer`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! We just learned the water cycle — how water moves from oceans to clouds to rain. Now let's zoom out and look at the WHOLE SKY. Sunny one day, rainy the next. Windy sometimes. Snowy in winter. That's WEATHER — what the air outside is doing RIGHT NOW. Scientists study weather to keep people safe. Let's find out how!`,
          headline: `Weather: What's Happening in the Sky`,
          subtitle: `Sunny, rainy, windy, snowy — why the sky keeps changing`,
          visual: `/explorer-assets/science/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Weather?`,
          paragraphs: [
            `Look outside. Is it sunny? Cloudy? Rainy? Windy? What you're seeing is WEATHER.`,
            `Weather is what the AIR outside is doing RIGHT NOW. It includes how HOT or COLD it is (temperature). Whether it's DRY or WET (humidity). Whether the sky is CLEAR or CLOUDY. Whether the air is STILL or MOVING (wind). Whether RAIN, SNOW, or HAIL is falling. Weather changes ALL THE TIME. In one day it might be sunny in the morning and rainy by afternoon. That's what makes weather so interesting to study.`,
          ],
          image: `/explorer-assets/science/l09-s1-what-is-weather.webp`,
          imageCaption: `Weather is what the sky is doing right now — sun, clouds, rain, wind, temperature. All of it together.`,
          vocab: [
            { word: `weather`,      definition: `What the air outside is doing right now — temperature, clouds, wind, and rain or shine.`,
              audioPrompt: `Weather, {name}, is what the air outside is doing right now. Temperature — how hot or cold. Clouds — thick or thin. Wind — still or breezy. Precipitation — rain or snow or nothing. All of those things together make up the weather. Weather changes from hour to hour, day to day. Scientists called meteorologists study weather so we know what's coming.` },
            { word: `temperature`,  definition: `How hot or cold the air is. We measure temperature with a thermometer.`,
              audioPrompt: `Temperature, {name}, is how hot or cold the air is. We measure it with a thermometer. On a hot summer day, temperature is high. On a winter morning with snow, temperature is very low. Temperature affects everything — what clothes you wear, whether rain falls as liquid or freezes into snow, and how plants and animals behave.` },
            { word: `atmosphere`,   definition: `The blanket of air that wraps around Earth. All weather happens in the atmosphere.`,
              audioPrompt: `The atmosphere, {name}, is the blanket of air that wraps around Earth. It's made mostly of nitrogen and oxygen — the air we breathe. The atmosphere protects Earth from the sun's strongest rays and keeps the planet warm. All weather — storms, sunshine, wind, rain — happens in the lower part of the atmosphere.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `SUNNY Days`,
          paragraphs: [
            `Sunny days feel great. But sunny weather is about more than just feeling warm.`,
            `Sunny days happen when there are FEW or NO CLOUDS in the sky, so sunlight reaches Earth directly. The SUN is the ENGINE of all weather. It heats Earth's surface unevenly — some places heat up more than others. This uneven heating makes AIR MOVE, which creates wind. Hot air RISES. Cold air moves in to replace it. All of this motion is what stirs up weather. Without the sun, there would be no weather at all — just frozen, still air. Sunny days are the START of everything.`,
          ],
          image: `/explorer-assets/science/l09-s2-sunny.webp`,
          imageCaption: `Sunny days = clear skies + direct sunlight. The sun heats Earth unevenly — that creates all other weather.`,
          vocab: [
            { word: `sunny`,        definition: `Weather with few or no clouds — sunlight reaches Earth directly.`,
              audioPrompt: `Sunny, {name}, means few or no clouds in the sky, so sunlight reaches Earth directly. Sunny days feel warm and bright. But sunny weather does more than feel nice — it heats the ground and air unevenly, starting the process that creates wind, clouds, and rain. Sunny is the launching pad for all other weather.` },
            { word: `sunlight`,     definition: `Energy from the sun. SUNLIGHT heats Earth and powers all weather.`,
              audioPrompt: `Sunlight, {name}, is energy from the sun that heats Earth. Where sunlight hits directly, the land and water warm up. That warm air rises. Cooler air moves in. Air moving is wind. Wind carries moisture. Moisture forms clouds. Clouds drop rain. All of that starts with sunlight. The sun really does power everything.` },
            { word: `clear sky`,    definition: `A sky with no clouds. A CLEAR SKY means lots of sunlight reaching Earth.`,
              audioPrompt: `A clear sky, {name}, is a sky with no clouds. When the sky is clear, sunlight reaches Earth directly and temperatures rise. Clear skies usually mean dry weather — not much moisture in the air. They're common in deserts and on hot summer days. Clouds need water vapor to form, and clear skies mean that vapor isn't there yet.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `RAIN and SNOW`,
          paragraphs: [
            `Rain and snow are both types of PRECIPITATION — water falling from clouds.`,
            `Whether it rains or snows depends on TEMPERATURE. If the air is warm (above freezing), water falls as RAIN — liquid drops. If the air is cold (below freezing), water crystals freeze before they land and fall as SNOW. Snow is actually frozen RAIN. Snow can pile up for months in cold places. When it melts in spring, it fills rivers and provides fresh water. Both rain and snow are incredibly important — they water crops, fill rivers, and keep all living things alive.`,
          ],
          image: `/explorer-assets/science/l09-s3-rain-snow.webp`,
          imageCaption: `Rain or snow? Depends on temperature. Above freezing → rain. Below freezing → snow. Both feed life on Earth.`,
          vocab: [
            { word: `rain`,         definition: `Liquid water falling from clouds. Rain happens when the air is above freezing.`,
              audioPrompt: `Rain, {name}, is liquid water falling from clouds. It happens when the air temperature is above freezing — 0 degrees Celsius or 32 degrees Fahrenheit. Water droplets in clouds get heavy, combine together, and fall as raindrops. Rain waters plants, fills rivers, and is essential for life. Most places need regular rain to survive.` },
            { word: `snow`,         definition: `Frozen water crystals falling from clouds. Snow forms when air is below freezing.`,
              audioPrompt: `Snow, {name}, is frozen water crystals falling from clouds. It forms when the air is cold enough — below freezing. Water vapor freezes into tiny ice crystals that join together into snowflakes. Each snowflake has a unique shape. Snow piles up on the ground, sometimes meters deep. When spring comes, it melts into water that rivers and lakes need.` },
            { word: `freezing`,     definition: `The temperature at which water turns to ice — 0°C or 32°F.`,
              audioPrompt: `Freezing, {name}, is the temperature at which water turns to ice — zero degrees Celsius, or 32 degrees Fahrenheit. Above freezing, water is liquid. Below freezing, water turns solid — ice or snow. This is why the same clouds might drop rain in a warm area and snow in a cold area on the same day. Temperature decides the form water takes when it falls.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `WIND`,
          paragraphs: [
            `You can't see wind. But you can FEEL it — and you can see what it does.`,
            `Wind is MOVING AIR. Air moves because the sun heats Earth unevenly. Warm air is lighter and RISES. Cold air is heavier and SINKS. When cold air rushes in to fill the space left by rising warm air, that moving air is WIND. Wind can be a gentle breeze or a powerful storm. Wind carries CLOUDS and MOISTURE across thousands of kilometers. It's how rain gets from the ocean to places far inland. Wind also helps plants spread seeds and pollinates flowers. Wind is one of Earth's great MOVERS.`,
          ],
          image: `/explorer-assets/science/l09-s4-wind.webp`,
          imageCaption: `Wind = moving air. Sun heats unevenly → warm air rises → cool air rushes in → that rushing air is WIND.`,
          vocab: [
            { word: `wind`,         definition: `Moving air. Wind is caused by the sun heating Earth unevenly.`,
              audioPrompt: `Wind, {name}, is moving air. It's caused by the sun heating Earth unevenly. Some spots get warmer than others. Warm air is lighter and rises. Cool air rushes in to take its place. That rushing is wind. Wind can be barely a whisper or strong enough to knock down trees. It carries moisture, moves weather systems, and shapes landscapes over time.` },
            { word: `air pressure`, definition: `The weight of air pushing down on Earth. Differences in air pressure cause wind.`,
              audioPrompt: `Air pressure, {name}, is the weight of air pushing down on Earth. Where air is warm and rising, pressure is low. Where air is cool and sinking, pressure is high. Air moves from HIGH pressure to LOW pressure — and that moving air is wind. Weather forecasters watch air pressure carefully because changes in pressure often signal incoming storms or clear skies.` },
            { word: `breeze`,       definition: `A gentle, light wind. A BREEZE is pleasant. A gale is a powerful, strong wind.`,
              audioPrompt: `A breeze, {name}, is a gentle, light wind. It's just enough to feel on your skin, rustle leaves, or fly a kite. At the other end of the scale are gales and hurricanes — incredibly strong winds that can cause serious damage. Weather forecasters measure wind speed to help people stay safe when strong winds are coming.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `THUNDERSTORMS`,
          paragraphs: [
            `A thunderstorm is one of nature's most powerful weather events.`,
            `Thunderstorms happen when warm, wet air rises quickly into the sky, forming TALL DARK CLOUDS called cumulonimbus clouds. Inside these clouds, water and ice particles crash into each other, building up ELECTRIC CHARGE. When enough charge builds up, it releases all at once — ZAP — a LIGHTNING BOLT. Lightning heats the air so fast that the air EXPLODES outward, making the rumbling sound we call THUNDER. Thunder is harmless sound. Lightning needs respect — never shelter under tall trees in a storm. Thunderstorms bring heavy rain, sometimes hail, and lots of lightning.`,
          ],
          image: `/explorer-assets/science/l09-s5-thunderstorms.webp`,
          imageCaption: `Thunderstorms = tall dark clouds + lightning + thunder. Lightning is electricity. Thunder is just sound. Stay safe indoors.`,
          vocab: [
            { word: `thunderstorm`, definition: `A storm with heavy rain, lightning, and thunder. Caused by powerful rising warm air.`,
              audioPrompt: `A thunderstorm, {name}, is a powerful storm with heavy rain, lightning, and thunder. It forms when warm, moist air rises rapidly into the sky. Tall dark clouds build up. Inside, ice and water particles collide and create electricity. When enough builds up, it discharges as lightning. The explosion of heated air from lightning creates thunder. Thunderstorms can be dramatic but usually pass quickly.` },
            { word: `lightning`,    definition: `A giant electrical spark in the sky. LIGHTNING happens inside thunderstorm clouds.`,
              audioPrompt: `Lightning, {name}, is a giant electrical spark that occurs in thunderstorm clouds. Inside a storm cloud, ice crystals and water droplets collide and build up static electricity. When the charge gets large enough, it discharges in a giant flash. Lightning can jump inside a cloud, between clouds, or between a cloud and the ground. It's beautiful but powerful — stay indoors during lightning storms.` },
            { word: `thunder`,      definition: `The loud booming sound after lightning. Thunder is harmless — just the sound of air expanding.`,
              audioPrompt: `Thunder, {name}, is the loud booming sound after lightning. Lightning heats the air around it incredibly fast — up to 30,000 degrees Celsius! That rapid heating makes the air expand in an explosion. That explosion is thunder. Thunder is completely harmless — it's just sound. The lightning is what needs to be respected. If you count seconds between lightning and thunder, each 3 seconds = about 1 kilometer away.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Predicting the Weather`,
          paragraphs: [
            `How do we know tomorrow's weather? By reading nature's clues — and using science.`,
            `Scientists called METEOROLOGISTS study weather. They use tools like THERMOMETERS (measure temperature), BAROMETERS (measure air pressure), RAIN GAUGES (measure how much rain fell), and SATELLITES in space that photograph clouds from above. They also use WEATHER STATIONS around the world that share data. By looking at patterns — how temperature, air pressure, and clouds are changing — meteorologists can PREDICT what weather is coming. These predictions help farmers know when to plant, pilots know when it's safe to fly, and families know when to bring an umbrella.`,
          ],
          image: `/explorer-assets/science/l09-s6-predicting.webp`,
          imageCaption: `Meteorologists predict weather by reading thermometers, barometers, satellites, and patterns — science saves lives.`,
          vocab: [
            { word: `meteorologist`, definition: `A scientist who studies and predicts weather.`,
              audioPrompt: `A meteorologist, {name}, is a scientist who studies and predicts weather. They use instruments to measure temperature, air pressure, humidity, and wind. They look at satellite images showing clouds from space. They analyze patterns and make predictions. Meteorologists help keep people safe by warning about dangerous storms in advance. Their work saves lives every day.` },
            { word: `predict`,       definition: `To say what will happen before it happens. Meteorologists PREDICT tomorrow's weather.`,
              audioPrompt: `To predict, {name}, means to say what will happen before it happens. Meteorologists study patterns in temperature, air pressure, and clouds to predict weather. They can't be perfect — weather is complicated. But with modern tools and satellites, forecasts are very accurate, especially for the next few days. Prediction is one of science's most powerful skills.` },
            { word: `pattern`,       definition: `Something that repeats in a regular way. Weather follows PATTERNS that scientists can study.`,
              audioPrompt: `A pattern, {name}, is something that repeats in a regular way. Weather follows patterns. Cold air from the north + warm air from the south = storms. Low air pressure = often means rain coming. These patterns repeat enough that scientists can use them to predict what comes next. Recognizing patterns is at the heart of all science — including weather science.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `The SUN powers all weather on Earth — it heats air and starts the whole system.`,
              matchPhrase: `Yes! The sun heats Earth's surface unevenly, making warm air rise and cold air rush in. That moving air is wind. Wind carries moisture. Moisture forms clouds. Clouds drop rain. The sun starts it all.`,
              correctMatch: `fact` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Weather CHANGES every day — it's never exactly the same two days in a row.`,
              matchPhrase: `True! Weather is always changing. Temperature rises and falls. Clouds come and go. Wind shifts direction. Rain falls and clears. No two days have identical weather. That's what makes it interesting to observe!`,
              correctMatch: `fact` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `Weather NEVER CHANGES — the same place has the exact same weather every single day.`,
              matchPhrase: `Not even close! Weather changes constantly — sometimes hour by hour. Even the driest desert gets rain sometimes. Weather is driven by moving air and changing temperatures, so it's always shifting.`,
              correctMatch: `myth` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `THUNDER can HURT you — the booming sound of a thunderstorm is dangerous.`,
              matchPhrase: `Nope! Thunder is just sound — the air exploding outward when lightning superheats it. Sound can't hurt you. It's LIGHTNING that needs respect, not thunder. Thunder is just loud, not harmful.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is WEATHER?`,
              options: [`What the air outside is doing right now — temperature, clouds, wind, rain or shine`, `A kind of animal`, `Something that only happens in winter`, `What the ocean does`],
              correctIndex: 0,
              explanation: `Weather is what the air outside is doing right now — temperature, clouds, wind, and whether it's raining or sunny. It changes all the time. Scientists called meteorologists study and predict it.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What CAUSES wind?`,
              options: [`Trees blowing`, `The sun heating Earth unevenly — warm air rises and cool air rushes in`, `Clouds moving`, `Rain falling`],
              correctIndex: 1,
              explanation: `Wind is caused by uneven heating. The sun heats some parts of Earth more than others. Warm air rises. Cool air moves in to fill the space. That moving air is wind. The sun powers it all.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is the difference between RAIN and SNOW?`,
              options: [`Rain is louder`, `Snow is heavier`, `Temperature — above freezing = rain, below freezing = snow`, `They are the same thing`],
              correctIndex: 2,
              explanation: `Both rain and snow are precipitation — water falling from clouds. The difference is temperature. Above freezing, water falls as liquid rain. Below freezing, it freezes into snow before landing.` },
            { id: `l09-q4`, format: `true-false`,
              question: `THUNDER is the sound made when lightning rapidly heats the air and it expands outward.`,
              correctAnswer: true,
              explanation: `True! Lightning superheats the air around it to extreme temperatures. The air expands so fast it creates a shockwave — that booming sound is thunder. Thunder is harmless sound. Lightning is what requires caution.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Scientists who study and predict weather are called ___.`,
              options: [`meteorologists`, `biologists`, `geologists`, `astronomers`],
              correctIndex: 0,
              explanation: `Meteorologists! They study weather using thermometers, barometers, satellites, and weather stations. Their predictions help farmers, pilots, and everyone stay safe when dangerous weather is coming.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What POWERS all of Earth's weather?`,
              options: [`The moon`, `The SUN — it heats Earth's surface and starts all weather systems`, `Oceans`, `Wind`],
              correctIndex: 1,
              explanation: `The sun! It heats Earth unevenly, creating rising warm air, rushing cold air (wind), evaporating water (clouds), and eventually rain. Without the sun, there would be no weather. The sun is the engine of it all.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Weather forecasting used to be a guess. Now it's a science that saves thousands of lives every year. Before satellites, storms like hurricanes would hit without warning. People had no time to prepare. Today, satellites can spot a hurricane forming over the ocean DAYS before it reaches land. Meteorologists track it, predict where it will go, and people evacuate safely. That's science protecting lives. You can join in — many weather services use data from citizen scientists who log weather conditions at home. A kid with a thermometer and rain gauge can contribute to real weather science.`,
          familyAdventure: `Make a WEATHER JOURNAL together this week. Each day, go outside and observe: temperature (use a thermometer if you have one, or just note "hot," "warm," "cool," "cold"), clouds (clear, a few clouds, cloudy, overcast), wind (still, light breeze, breezy, windy), precipitation (none, light rain, heavy rain, snow). After 5 days, look at your journal. Do you see any patterns? Did the clouds come before the rain?`,
          creativePrompt: `Draw a WEATHER CHART with six boxes. Label each box with a different weather type: Sunny, Cloudy, Rainy, Snowy, Windy, Thunderstorm. Inside each box, draw what that weather LOOKS like — sun, clouds, raindrops, snowflakes, wind swirls, lightning bolt. Then, if you want, check off which ones you've experienced this week.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You're a weather expert now. You know WEATHER is what the air is doing right now — temperature, clouds, wind, and rain or shine. You know the SUN powers all weather by heating Earth unevenly. You know RAIN and SNOW are both precipitation — same water, different temperatures. You know WIND is just moving air — cold rushing in where warm rises. And you know THUNDER is harmless sound while lightning needs respect. Next time the sky changes, you'll know exactly what's happening up there. See you next lesson!`,
          badge: `weather-explorer`,
          badgeName: `Weather Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L09] Loaded: "Weather" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
