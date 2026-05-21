// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L08 — The Water Cycle: Nature's Endless Loop
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-ESS2-3 / 5-ESS2-1
// REWRITE v2 (May 2026): Grade 1 accessible, EVAPORATION / CONDENSATION /
// PRECIPITATION 3-bucket identification game tests sorting by cycle stage
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L08 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-08`,
      title:     `The Water Cycle: Nature's Endless Loop`,
      duration:  12,
      xpReward:  50,
      badge:     `water-cycle-explorer`,
      badgeName: `Water Cycle Explorer`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Last lesson, we saw water is EVERYWHERE on Earth! But here's the wild part — water doesn't just sit still! It MOVES! From oceans up to clouds! Down as rain! Back to rivers! Up again! Over and over! Scientists call this the WATER CYCLE! Let's follow a drop!`,
          headline: `The Water Cycle: Nature's Endless Loop`,
          subtitle: `How water travels in a never-ending circle around our planet`,
          visual: `/explorer-assets/science/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Water Never Stays Still`,
          paragraphs: [
            `Earth has a LOT of water — in oceans, lakes, rivers, and ice! But here's the secret — that water NEVER STAYS STILL!`,
            `It's always MOVING! From oceans, water rises up into the sky! Up there it forms clouds! Clouds drop the water back down as rain or snow! The water lands in rivers, lakes, oceans — and starts all over again! This NEVER-ENDING JOURNEY is called the WATER CYCLE! It's been running for BILLIONS of years! The water you drank today has traveled around Earth for a very long time!`,
          ],
          image: `/explorer-assets/science/l08-s1-water-moves.webp`,
          imageCaption: `Water is always moving! Oceans → sky → rain → rivers → oceans. Never stops!`,
          vocab: [
            { word: `water cycle`,  definition: `The endless journey of water on Earth.`,
              audioPrompt: `The water cycle is the endless journey of water on Earth. From oceans, water goes up to clouds. From clouds, it falls as rain or snow. From rain, it flows into rivers and back to oceans. Over and over!` },
            { word: `journey`,      definition: `A trip.`,
              audioPrompt: `A journey is a trip. Water on Earth takes a journey — up into the sky, across the world in clouds, down as rain, through rivers, back to oceans. A single drop might journey for thousands of years!` },
            { word: `never-ending`, definition: `Goes on forever.`,
              audioPrompt: `Never-ending means goes on forever. The water cycle is never-ending. Running for billions of years. As long as we have a sun (which heats water and starts the cycle), water will keep cycling!` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: EVAPORATION`,
          paragraphs: [
            `The water cycle starts when the SUN heats up water on Earth!`,
            `Think of a puddle on a hot day! The water doesn't disappear — it turns into INVISIBLE VAPOR and floats UP into the air! This is called EVAPORATION! It happens on lakes, oceans, rivers — anywhere water meets sunlight! The warmer the water, the faster it evaporates! Even sweat on your skin evaporates — it's why you feel cooler when you're hot and sweaty! Evaporation is step ONE!`,
          ],
          image: `/explorer-assets/science/l08-s2-evaporation.webp`,
          imageCaption: `Step 1: Evaporation! Sun heats water → invisible vapor → floats up into sky!`,
          vocab: [
            { word: `evaporation`, definition: `When water turns into invisible vapor and rises.`,
              audioPrompt: `Evaporation is when water turns into invisible vapor and rises into the air. Sunlight makes this happen. The sun heats water — in oceans, puddles, even on your skin — and it changes into a gas. The start!` },
            { word: `vapor`,       definition: `Water turned into invisible gas.`,
              audioPrompt: `Vapor is water turned into invisible gas. Steam from a hot pot is vapor — you can see it briefly before it disappears. Most water vapor is completely invisible. The air around you has vapor in it!` },
            { word: `sun`,         definition: `The huge star that heats Earth.`,
              audioPrompt: `The sun is the huge star that heats Earth and starts the water cycle. Without the sun, water wouldn't evaporate. Without evaporation, no clouds. No rain. No rivers. No life. The engine!` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: CONDENSATION`,
          paragraphs: [
            `Water vapor goes UP into the sky! Up there, the air is COLDER!`,
            `When the vapor cools down, it changes BACK into tiny water droplets! This is called CONDENSATION! Millions of these tiny droplets gather together in the sky — and we see them as CLOUDS! That's what clouds are made of — billions of tiny water droplets! You've seen this happen up close! The cold mirror in the bathroom after a shower? Water vapor condensing! The wet glass holding cold water? Vapor condensing! Cool air makes vapor turn back into water!`,
          ],
          image: `/explorer-assets/science/l08-s3-condensation.webp`,
          imageCaption: `Step 2: Condensation! Cold air → vapor becomes droplets → CLOUDS!`,
          vocab: [
            { word: `condensation`, definition: `When invisible vapor cools and turns back into liquid water.`,
              audioPrompt: `Condensation is when invisible vapor cools and turns back into liquid water. The opposite of evaporation. Up in the sky, the air is colder. When water vapor reaches cold air, it turns back into droplets!` },
            { word: `clouds`,       definition: `Big collections of tiny water droplets in the sky.`,
              audioPrompt: `Clouds are big collections of tiny water droplets floating in the sky. Each cloud has BILLIONS of droplets! Clouds look fluffy but they're really just water. When too heavy, they release it as rain!` },
            { word: `cold`,         definition: `Low temperature.`,
              audioPrompt: `Cold means low temperature. Cold air makes water vapor turn back into droplets. Higher up in the sky, air gets colder. Same thing happens in your house. Cold glass plus warm air equals droplets!` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PRECIPITATION`,
          paragraphs: [
            `Clouds keep gathering water! They get HEAVIER and HEAVIER!`,
            `When they can't hold any more, the water falls back down to Earth! This is called PRECIPITATION! It can fall in different forms! RAIN — liquid water drops! SNOW — frozen water crystals (when it's cold)! SLEET — partly frozen rain! HAIL — chunks of ice (in big storms)! All of these are precipitation! They all carry water from the sky back to Earth's surface! Precipitation is step three!`,
          ],
          image: `/explorer-assets/science/l08-s4-precipitation.webp`,
          imageCaption: `Step 3: Precipitation! Heavy clouds release water. Rain, snow, sleet, hail!`,
          vocab: [
            { word: `precipitation`, definition: `Water falling from clouds.`,
              audioPrompt: `Precipitation is water falling from clouds. Rain is precipitation. So is snow, sleet, and hail. All water leaving clouds and falling back to Earth. The word is just a fancy term for stuff falling!` },
            { word: `rain`,          definition: `Liquid water falling from clouds.`,
              audioPrompt: `Rain is liquid water falling from clouds. The most common form of precipitation. Refills lakes and rivers. Waters plants. Keeps living things alive. Might feel inconvenient, but it's essential!` },
            { word: `snow`,          definition: `Frozen water crystals falling from clouds.`,
              audioPrompt: `Snow is frozen water crystals falling from clouds. When the air is cold enough, water in clouds freezes into snowflakes. Each snowflake is unique — no two exactly alike. Magical winter!` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: COLLECTION`,
          paragraphs: [
            `Rain and snow land on Earth! But where does it GO?`,
            `Some lands in OCEANS and LAKES — getting added back to the big bodies of water! Some lands on MOUNTAINS and flows down as streams and RIVERS! Some soaks into the SOIL — feeding plants! Some becomes GROUNDWATER deep underground! Some animals drink it! Some is in your own water glass right now! ALL of it eventually ends up back in oceans or lakes — ready to evaporate AGAIN! The cycle starts over! Round and round!`,
          ],
          image: `/explorer-assets/science/l08-s5-collection.webp`,
          imageCaption: `Step 4: Collection! Water lands → oceans, lakes, rivers, soil. Cycle repeats!`,
          vocab: [
            { word: `collection`,     definition: `When water gathers back into big bodies of water.`,
              audioPrompt: `Collection is when water gathers back into big bodies of water. The final step of the water cycle. After rain falls, it gathers in oceans, lakes, rivers. Eventually evaporates again. Completes the loop!` },
            { word: `groundwater`,    definition: `Water that soaks into the ground.`,
              audioPrompt: `Groundwater is water that soaks into the ground and travels underground. Lots of water is hidden in special rock layers. People dig wells to reach it. An important source of fresh water!` },
            { word: `cycle restarts`, definition: `When the water cycle begins again.`,
              audioPrompt: `Cycle restarts means the water cycle begins again. Once water collects in oceans, the sun heats it again. It evaporates. The cycle starts over. Happening for billions of years!` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Same Water, Forever`,
          paragraphs: [
            `Here's something MIND-BLOWING, {name}! Earth doesn't make NEW water!`,
            `The water on Earth today is the SAME water that's been here for billions of years! The drop of rain falling outside today might have been a tear from a dinosaur! Or steam from a volcano millions of years ago! Or part of an ocean wave that crashed during the Stone Age! Water gets recycled FOREVER! It just keeps moving through the water cycle! That makes water precious! We share it with EVERY living thing that's ever lived on Earth!`,
          ],
          image: `/explorer-assets/science/l08-s6-same-water.webp`,
          imageCaption: `Same water. Forever. Recycled for billions of years!`,
          vocab: [
            { word: `same water`, definition: `Earth doesn't make new water.`,
              audioPrompt: `Same water means Earth doesn't make new water. The water on Earth today is the same water that's been here for billions of years. Just keeps recycling. Every glass you drink has been around since dinosaurs!` },
            { word: `recycle`,    definition: `To use again.`,
              audioPrompt: `To recycle is to use again. Earth recycles water through the water cycle. Same water, over and over, for billions of years. That makes saving water important. There's only so much!` },
            { word: `precious`,   definition: `Very valuable.`,
              audioPrompt: `Precious means very valuable. Water is precious. Earth can't make more — we just keep recycling what we have. Don't waste it. Don't pollute it. Water is what makes life possible!` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 water moments. Drag each one — is it EVAPORATION (going up!), CONDENSATION (clouds forming!), or PRECIPITATION (falling down!)?`,
          buckets: [
            { id: `evaporation`,   label: `☀️ EVAPORATION`,   color: `#FBBF24` },
            { id: `condensation`,  label: `☁️ CONDENSATION`,  color: `#E5E7EB` },
            { id: `precipitation`, label: `🌧️ PRECIPITATION`, color: `#0EA5E9` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `A puddle in the driveway shrinks and disappears on a hot sunny day`,
              matchPhrase: `Yes! EVAPORATION! The sun heated the puddle. Water turned to vapor and rose into the sky!`,
              correctMatch: `evaporation` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Tiny water droplets gather high in the sky to form a big fluffy cloud`,
              matchPhrase: `Right! CONDENSATION! Cold air turned vapor back into droplets. Billions gathered = cloud!`,
              correctMatch: `condensation` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `Big rain drops falling from a stormy gray cloud onto the grass`,
              matchPhrase: `Yes! PRECIPITATION! When clouds get too heavy, water falls. Rain is the most common!`,
              correctMatch: `precipitation` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `Snowflakes drifting down from a winter sky onto rooftops`,
              matchPhrase: `Right! PRECIPITATION! Snow is precipitation too. Frozen water crystals falling from clouds!`,
              correctMatch: `precipitation` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is the WATER CYCLE?`,
              options: [`The journey water takes — from oceans to clouds to rain to rivers and back`, `A type of bicycle`, `A new song`, `What plants drink`],
              correctIndex: 0,
              explanation: `The water cycle is water's endless journey — evaporation, condensation, precipitation, collection — over and over!` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is EVAPORATION?`,
              options: [`Water freezing`, `Water turning into invisible vapor and rising into the air`, `Snow falling`, `Rivers flowing`],
              correctIndex: 1,
              explanation: `Evaporation = water turning into invisible vapor and rising! The sun heats water. Step 1!` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `What are CLOUDS made of?`,
              options: [`Cotton balls`, `Tiny water droplets — billions of them — gathered in the sky`, `Smoke`, `Air`],
              correctIndex: 1,
              explanation: `Clouds are billions of tiny water droplets gathered in the sky! That's why they can drop rain!` },
            { id: `l08-q4`, format: `true-false`,
              question: `RAIN, SNOW, SLEET, and HAIL are all forms of PRECIPITATION — water falling from clouds.`,
              correctAnswer: true,
              explanation: `True! All four are precipitation. Rain is liquid. Snow is frozen crystals. All falling water!` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `The water on Earth today is the SAME water that's been here for ___ of years.`,
              options: [`billions`, `minutes`, `weeks`, `months`],
              correctIndex: 0,
              explanation: `Billions! Earth doesn't make new water. Same water has been recycling for billions of years!` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What POWERS the entire water cycle?`,
              options: [`Electricity`, `The SUN — it heats water and starts evaporation`, `Wind`, `Magic`],
              correctIndex: 1,
              explanation: `The sun! It heats water and starts evaporation. Without it, no cycle. The engine!` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The water cycle isn't just nature — it's how people get DRINKING WATER! Rain falls into reservoirs (big collection lakes)! Water travels through pipes to homes! After use, the water gets cleaned and returned to rivers — where it eventually evaporates and cycles again! Even more amazing — astronauts on the International Space Station have machines that EVAPORATE and CONDENSE their pee back into clean drinking water! They drink recycled urine!`,
          familyAdventure: `Make a MINI WATER CYCLE together! Take a clear plastic ziplock bag! Draw a sun, cloud, and ocean on it with a marker! Pour about a cup of water in! Seal it tight! Tape it to a sunny window! Watch over a few hours! You'll see water EVAPORATE up to the top, CONDENSE into droplets on the inside, and PRECIPITATE back down! The whole water cycle in a bag!`,
          creativePrompt: `Draw the WATER CYCLE on paper! Make: a sun (top), an ocean (bottom), water rising up as ARROWS (evaporation), clouds forming (condensation), and rain falling back down (precipitation)! Label each step! For a 3-sentence floor: write one sentence each for evaporation, condensation, and precipitation. For a 5-sentence stretch: add collection and the sun powering it all! Show the cycle as a CIRCLE!`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know the WATER CYCLE — Earth's endless loop! EVAPORATION (water rises)! CONDENSATION (clouds form)! PRECIPITATION (rain falls)! COLLECTION (water gathers)! And then it all starts over! You know the sun POWERS the whole cycle! You know water is RECYCLED forever — the same water for billions of years! Cosmo is so splashy-proud! 🦦`,
          badge: `water-cycle-explorer`,
          badgeName: `Water Cycle Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L08] Loaded: "The Water Cycle" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
