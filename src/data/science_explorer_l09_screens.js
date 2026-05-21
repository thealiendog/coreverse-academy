// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L09 — Weather: What's Happening in the Sky
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-ESS2-1
// REWRITE v2 (May 2026): Grade 1 accessible, SUNNY / RAINY / STORMY 3-bucket
// identification game tests sorting weather scenes by type
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! We just learned the water cycle! Now let's zoom out and look at the WHOLE SKY! Sunny one day! Rainy the next! Windy sometimes! Snowy in winter! That's WEATHER — what the air outside is doing RIGHT NOW! Let's find out how it works!`,
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
            `Look outside, {name}! Is it sunny? Cloudy? Rainy? Windy? What you're seeing is WEATHER!`,
            `Weather is what the AIR outside is doing RIGHT NOW! It includes how HOT or COLD it is (temperature)! Whether it's DRY or WET! Whether the sky is CLEAR or CLOUDY! Whether the air is STILL or MOVING (wind)! Whether RAIN, SNOW, or HAIL is falling! Weather changes ALL THE TIME! In one day it might be sunny in the morning and rainy by afternoon!`,
          ],
          image: `/explorer-assets/science/l09-s1-what-is-weather.webp`,
          imageCaption: `Weather is what the sky is doing right now!`,
          vocab: [
            { word: `weather`,     definition: `What the air outside is doing right now.`,
              audioPrompt: `Weather is what the air outside is doing right now. Temperature, clouds, wind, rain or shine. All those things together. Weather changes from hour to hour. Scientists called meteorologists study weather!` },
            { word: `temperature`, definition: `How hot or cold the air is.`,
              audioPrompt: `Temperature is how hot or cold the air is. We measure it with a thermometer. On a hot summer day, temperature is high. On a winter morning with snow, temperature is very low. It affects everything!` },
            { word: `atmosphere`,  definition: `The blanket of air that wraps around Earth.`,
              audioPrompt: `The atmosphere is the blanket of air that wraps around Earth. Made of nitrogen and oxygen — the air we breathe. All weather — storms, sunshine, wind, rain — happens in the lower part of the atmosphere!` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `SUNNY Days`,
          paragraphs: [
            `Sunny days feel great! But sunny weather is about more than just feeling warm!`,
            `Sunny days happen when there are FEW or NO CLOUDS in the sky, so sunlight reaches Earth directly! The SUN is the ENGINE of all weather! It heats Earth's surface unevenly — some places heat up more than others! This uneven heating makes AIR MOVE, which creates wind! Hot air RISES! Cold air moves in to replace it! Without the sun, there would be no weather at all!`,
          ],
          image: `/explorer-assets/science/l09-s2-sunny.webp`,
          imageCaption: `Sunny days = clear skies + direct sunlight!`,
          vocab: [
            { word: `sunny`,     definition: `Weather with few or no clouds.`,
              audioPrompt: `Sunny means few or no clouds in the sky, so sunlight reaches Earth directly. Sunny days feel warm and bright. They heat the ground and air unevenly, starting the process that creates other weather!` },
            { word: `sunlight`,  definition: `Energy from the sun.`,
              audioPrompt: `Sunlight is energy from the sun that heats Earth. Where sunlight hits directly, the land and water warm up. Warm air rises. Cooler air moves in. That's wind. Sunlight starts all of it!` },
            { word: `clear sky`, definition: `A sky with no clouds.`,
              audioPrompt: `A clear sky is a sky with no clouds. When the sky is clear, sunlight reaches Earth directly and temperatures rise. Clear skies usually mean dry weather. Common in deserts and on hot summer days!` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `RAIN and SNOW`,
          paragraphs: [
            `Rain and snow are both types of PRECIPITATION — water falling from clouds!`,
            `Whether it rains or snows depends on TEMPERATURE! If the air is warm (above freezing), water falls as RAIN — liquid drops! If the air is cold (below freezing), water crystals freeze before they land and fall as SNOW! Snow is actually frozen RAIN! Snow can pile up for months in cold places! Both rain and snow are incredibly important — they water crops, fill rivers, and keep all living things alive!`,
          ],
          image: `/explorer-assets/science/l09-s3-rain-snow.webp`,
          imageCaption: `Rain or snow? Depends on temperature!`,
          vocab: [
            { word: `rain`,     definition: `Liquid water falling from clouds.`,
              audioPrompt: `Rain is liquid water falling from clouds. Happens when the air temperature is above freezing. Water droplets in clouds get heavy, combine, and fall as raindrops. Rain waters plants, fills rivers, keeps life going!` },
            { word: `snow`,     definition: `Frozen water crystals falling from clouds.`,
              audioPrompt: `Snow is frozen water crystals falling from clouds. Forms when the air is cold enough — below freezing. Water vapor freezes into ice crystals that join into snowflakes. Each snowflake has a unique shape!` },
            { word: `freezing`, definition: `The temperature at which water turns to ice.`,
              audioPrompt: `Freezing is the temperature at which water turns to ice — zero degrees Celsius, 32 degrees Fahrenheit. Above freezing, water is liquid. Below freezing, water turns solid. Temperature decides the form water takes!` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `WIND`,
          paragraphs: [
            `You can't see wind! But you can FEEL it — and you can see what it does!`,
            `Wind is MOVING AIR! Air moves because the sun heats Earth unevenly! Warm air is lighter and RISES! Cold air is heavier and SINKS! When cold air rushes in to fill the space left by rising warm air, that moving air is WIND! Wind can be a gentle breeze or a powerful storm! Wind carries CLOUDS and MOISTURE across thousands of kilometers! It's how rain gets from the ocean to places far inland! Wind is one of Earth's great MOVERS!`,
          ],
          image: `/explorer-assets/science/l09-s4-wind.webp`,
          imageCaption: `Wind = moving air! Sun heats unevenly → warm air rises → cool rushes in!`,
          vocab: [
            { word: `wind`,         definition: `Moving air.`,
              audioPrompt: `Wind is moving air. Caused by the sun heating Earth unevenly. Some spots get warmer. Warm air rises. Cool air rushes in to take its place. That rushing is wind. Can be barely a whisper or strong enough to knock down trees!` },
            { word: `air pressure`, definition: `The weight of air pushing down on Earth.`,
              audioPrompt: `Air pressure is the weight of air pushing down on Earth. Where air is warm and rising, pressure is low. Where air is cool and sinking, pressure is high. Air moves from HIGH to LOW pressure — that's wind!` },
            { word: `breeze`,       definition: `A gentle, light wind.`,
              audioPrompt: `A breeze is a gentle, light wind. Just enough to feel on your skin or rustle leaves. At the other end of the scale are gales and hurricanes — incredibly strong winds. Weather forecasters measure wind speed to keep us safe!` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `THUNDERSTORMS`,
          paragraphs: [
            `A thunderstorm is one of nature's most powerful weather events!`,
            `Thunderstorms happen when warm, wet air rises quickly into the sky, forming TALL DARK CLOUDS! Inside these clouds, water and ice particles crash into each other, building up ELECTRIC CHARGE! When enough builds up, it releases all at once — ZAP — a LIGHTNING BOLT! Lightning heats the air so fast that the air EXPLODES outward, making the rumbling sound we call THUNDER! Thunder is harmless sound! Lightning needs respect — never shelter under tall trees in a storm!`,
          ],
          image: `/explorer-assets/science/l09-s5-thunderstorms.webp`,
          imageCaption: `Thunderstorms = tall dark clouds + lightning + thunder! Stay safe indoors!`,
          vocab: [
            { word: `thunderstorm`, definition: `A storm with heavy rain, lightning, and thunder.`,
              audioPrompt: `A thunderstorm is a powerful storm with heavy rain, lightning, and thunder. Forms when warm, moist air rises rapidly. Tall dark clouds build up. Inside, ice and water collide and create electricity!` },
            { word: `lightning`,    definition: `A giant electrical spark in the sky.`,
              audioPrompt: `Lightning is a giant electrical spark that occurs in thunderstorm clouds. Ice crystals and water droplets collide and build up static electricity. When the charge gets large enough, it discharges. Stay indoors!` },
            { word: `thunder`,      definition: `The loud booming sound after lightning.`,
              audioPrompt: `Thunder is the loud booming sound after lightning. Lightning heats the air incredibly fast. That rapid heating makes the air explode outward. The sound is thunder. Thunder is harmless — just sound!` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Predicting the Weather`,
          paragraphs: [
            `How do we know tomorrow's weather? By reading nature's clues — and using science!`,
            `Scientists called METEOROLOGISTS study weather! They use tools like THERMOMETERS (temperature), BAROMETERS (air pressure), RAIN GAUGES (rainfall), and SATELLITES in space that photograph clouds from above! They look at PATTERNS — how temperature, air pressure, and clouds are changing — to PREDICT what weather is coming! These predictions help farmers know when to plant, pilots know when to fly, and families know when to bring an umbrella!`,
          ],
          image: `/explorer-assets/science/l09-s6-predicting.webp`,
          imageCaption: `Meteorologists predict weather — science saves lives!`,
          vocab: [
            { word: `meteorologist`, definition: `A scientist who studies and predicts weather.`,
              audioPrompt: `A meteorologist is a scientist who studies and predicts weather. They use instruments to measure temperature, air pressure, humidity, and wind. They look at satellite images. They help keep people safe by warning about storms!` },
            { word: `predict`,       definition: `To say what will happen before it happens.`,
              audioPrompt: `To predict means to say what will happen before it happens. Meteorologists study patterns in temperature, air pressure, and clouds. With modern tools and satellites, forecasts are very accurate, especially for the next few days!` },
            { word: `pattern`,       definition: `Something that repeats in a regular way.`,
              audioPrompt: `A pattern is something that repeats in a regular way. Weather follows patterns. Low air pressure often means rain coming. These patterns repeat enough that scientists can predict. Patterns are at the heart of all science!` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 weather scenes. Drag each one — is it SUNNY (clear skies!), RAINY (water falling!), or STORMY (lightning and wild winds!)?`,
          buckets: [
            { id: `sunny`,  label: `☀️ SUNNY`,  color: `#FBBF24` },
            { id: `rainy`,  label: `🌧️ RAINY`,  color: `#0EA5E9` },
            { id: `stormy`, label: `⛈️ STORMY`, color: `#6366F1` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `Clear blue sky with the sun shining and not a cloud in sight`,
              matchPhrase: `Yes! SUNNY! No clouds, full sunshine. Earth heats up, starting wind and other weather!`,
              correctMatch: `sunny` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Gray clouds dropping a steady shower of raindrops on the grass`,
              matchPhrase: `Right! RAINY! Liquid water falling from clouds. Air is above freezing. Plants love rain!`,
              correctMatch: `rainy` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `Tall dark clouds with lightning flashing and thunder booming`,
              matchPhrase: `Yes! STORMY! Thunderstorm! Tall clouds, lightning, thunder. Stay indoors and safe!`,
              correctMatch: `stormy` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `A puddle in the yard with a few sprinkles still falling lightly`,
              matchPhrase: `Right! RAINY! Light rain. Even gentle rain is rain. Water falling from clouds!`,
              correctMatch: `rainy` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is WEATHER?`,
              options: [`What the air outside is doing right now — temperature, clouds, wind, rain or shine`, `A kind of animal`, `Something that only happens in winter`, `What the ocean does`],
              correctIndex: 0,
              explanation: `Weather is what the air outside is doing right now — temperature, clouds, wind, rain or shine!` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What CAUSES wind?`,
              options: [`Trees blowing`, `The sun heating Earth unevenly — warm air rises and cool air rushes in`, `Clouds moving`, `Rain falling`],
              correctIndex: 1,
              explanation: `Wind is caused by uneven heating. Warm air rises. Cool air rushes in. Moving air is wind!` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is the difference between RAIN and SNOW?`,
              options: [`Rain is louder`, `Snow is heavier`, `Temperature — above freezing = rain, below freezing = snow`, `They are the same thing`],
              correctIndex: 2,
              explanation: `Both are precipitation. The difference is temperature! Above freezing = rain. Below freezing = snow!` },
            { id: `l09-q4`, format: `true-false`,
              question: `THUNDER is the sound made when lightning rapidly heats the air and it expands outward.`,
              correctAnswer: true,
              explanation: `True! Lightning superheats the air. Air expands so fast it creates a shockwave — that's thunder. Just sound!` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Scientists who study and predict weather are called ___.`,
              options: [`meteorologists`, `biologists`, `geologists`, `astronomers`],
              correctIndex: 0,
              explanation: `Meteorologists! They use thermometers, barometers, satellites to predict weather and keep us safe!` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What POWERS all of Earth's weather?`,
              options: [`The moon`, `The SUN — it heats Earth's surface and starts all weather systems`, `Oceans`, `Wind`],
              correctIndex: 1,
              explanation: `The sun! Heats Earth unevenly. Creates wind, clouds, rain. Without sun, no weather!` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Weather forecasting used to be a guess! Now it's a science that saves thousands of lives every year! Before satellites, storms like hurricanes would hit without warning! Today, satellites spot a hurricane forming over the ocean DAYS before it reaches land! Meteorologists track it, predict where it will go, and people evacuate safely! That's science protecting lives! A kid with a thermometer and rain gauge can contribute to real weather science!`,
          familyAdventure: `Make a WEATHER JOURNAL together this week! Each day, go outside and observe: temperature ("hot," "warm," "cool," "cold")! Clouds (clear, a few clouds, cloudy, overcast)! Wind (still, light breeze, breezy, windy)! Precipitation (none, light rain, heavy rain, snow)! After 5 days, look at your journal! Do you see any patterns? Did the clouds come before the rain?`,
          creativePrompt: `Draw a WEATHER CHART with six boxes! Label each box with a different weather type: Sunny, Cloudy, Rainy, Snowy, Windy, Thunderstorm! Inside each box, draw what that weather LOOKS like! For a 3-sentence floor: write a sentence describing 3 of the weather types. For a 5-sentence stretch: write sentences about your favorite weather and one you DON'T like, with reasons!`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You're a weather expert now! You know WEATHER is what the air is doing right now! You know the SUN powers all weather! You know RAIN and SNOW are both precipitation — same water, different temperatures! You know WIND is moving air! And THUNDER is harmless sound while lightning needs respect! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L09] Loaded: "Weather" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
