// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L08 — The Water Cycle
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-ESS2-3 / 5-ESS2-1 (water on Earth moves in cycles)
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
          guideText: `Hey {name}, Cosmo here! Last lesson, we saw water is EVERYWHERE on Earth. But here's the wild part — water doesn't just sit still. It MOVES. From oceans up to clouds. Down as rain. Back to rivers. Up again. Over and over. Scientists call this the WATER CYCLE. The same water drop might travel for thousands of years. Let's follow a drop today!`,
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
            `Earth has a LOT of water — in oceans, lakes, rivers, and ice. But here's the secret — that water NEVER STAYS STILL.`,
            `It's always MOVING. From oceans, water rises up into the sky. Up there it forms clouds. Clouds drop the water back down as rain or snow. The water lands in rivers, lakes, oceans — and starts all over again. This NEVER-ENDING JOURNEY is called the WATER CYCLE. It's been running for BILLIONS of years. The water you drank today has traveled around Earth for a very long time.`,
          ],
          image: `/explorer-assets/science/l08-s1-water-moves.webp`,
          imageCaption: `Water is always moving. Oceans → sky → rain → rivers → oceans. Never stops. The water cycle.`,
          vocab: [
            { word: `water cycle`,    definition: `The endless journey of water — from oceans to clouds to rain to rivers and back.`,
              audioPrompt: `The water cycle, {name}, is the endless journey of water on Earth. From oceans, water goes up to clouds. From clouds, it falls as rain or snow. From rain, it flows into rivers, lakes, and back to oceans. Then up again. Over and over. The water cycle has been running for billions of years. Water on Earth never stops moving.` },
            { word: `journey`,        definition: `A trip. Water takes a JOURNEY around Earth, over and over.`,
              audioPrompt: `A journey, {name}, is a trip. Water on Earth takes a journey — up into the sky, across the world in clouds, down as rain, through rivers, back to oceans, and up again. A single water drop might journey for thousands or millions of years. The journey never ends. That's why it's called a cycle — it goes in a circle.` },
            { word: `never-ending`,   definition: `Goes on forever. The water cycle is NEVER-ENDING.`,
              audioPrompt: `Never-ending, {name}, means goes on forever. The water cycle is never-ending. It's been moving water around Earth for billions of years. It won't stop. As long as we have a sun (which heats water and starts the cycle), water will keep cycling. Some things end. The water cycle doesn't.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: EVAPORATION`,
          paragraphs: [
            `The water cycle starts when the SUN heats up water on Earth.`,
            `Think of a puddle on a hot day. The water doesn't disappear — it turns into INVISIBLE VAPOR and floats UP into the air. This is called EVAPORATION. It happens on lakes, oceans, rivers — anywhere water meets sunlight. The warmer the water, the faster it evaporates. Even sweat on your skin evaporates — it's why you feel cooler when you're hot and sweaty. Evaporation is step ONE in the water cycle.`,
          ],
          image: `/explorer-assets/science/l08-s2-evaporation.webp`,
          imageCaption: `Step 1: Evaporation. Sun heats water → water turns into invisible vapor → floats up into sky.`,
          vocab: [
            { word: `evaporation`,    definition: `When water turns into invisible vapor and rises into the air.`,
              audioPrompt: `Evaporation, {name}, is when water turns into invisible vapor and rises into the air. Sunlight is what makes this happen. The sun heats water — in oceans, lakes, puddles, even on your skin — and bit by bit, the water changes into a gas you can't see. The gas floats up into the sky. Evaporation is the start of the water cycle.` },
            { word: `vapor`,          definition: `Water turned into invisible gas. Steam from a hot pot is VAPOR.`,
              audioPrompt: `Vapor, {name}, is water turned into invisible gas. Steam from a hot pot is vapor — you can see it briefly before it spreads out and disappears. Most water vapor is completely invisible. The air around you right now has water vapor in it. Some places have lots (humid). Some have less (dry). All air has some.` },
            { word: `sun`,            definition: `The huge star that heats Earth and starts the water cycle.`,
              audioPrompt: `The sun, {name}, is the huge star that heats Earth and starts the water cycle. Without the sun, water wouldn't evaporate. Without evaporation, no clouds. Without clouds, no rain. Without rain, no rivers and no life. The sun powers everything. It's the engine driving the whole water cycle.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: CONDENSATION`,
          paragraphs: [
            `Water vapor goes UP into the sky. Up there, the air is COLDER.`,
            `When the vapor cools down, it changes BACK into tiny water droplets. This is called CONDENSATION. Millions of these tiny droplets gather together in the sky — and we see them as CLOUDS. That's what clouds are made of — billions of tiny water droplets! You've seen this happen up close. The cold mirror in the bathroom after a shower? Water vapor condensing. The wet glass holding cold water? Vapor condensing. Cool air makes vapor turn back into water.`,
          ],
          image: `/explorer-assets/science/l08-s3-condensation.webp`,
          imageCaption: `Step 2: Condensation. Cold air → vapor becomes tiny droplets → droplets gather → CLOUDS.`,
          vocab: [
            { word: `condensation`,   definition: `When invisible vapor cools and turns back into liquid water.`,
              audioPrompt: `Condensation, {name}, is when invisible vapor cools and turns back into liquid water. It's the opposite of evaporation. Up in the sky, the air gets colder as you go higher. When water vapor reaches cold air, it turns back into tiny water droplets. Those droplets gather to form clouds. Condensation is step two in the water cycle.` },
            { word: `clouds`,         definition: `Big collections of tiny water droplets floating in the sky.`,
              audioPrompt: `Clouds, {name}, are big collections of tiny water droplets floating in the sky. Each cloud has BILLIONS of these tiny droplets all together. Clouds look fluffy and solid, but they're really just water — and a bit of dust. When clouds get heavy with too much water, they release it. Then we get rain.` },
            { word: `cold`,           definition: `Low temperature. COLD air makes water vapor turn back into droplets.`,
              audioPrompt: `Cold, {name}, means low temperature. Cold air makes water vapor turn back into droplets. Higher up in the sky, the air gets colder. That's why clouds form way up there. Same thing happens in your house. Cold glass + warm wet air = water droplets on the outside of the glass. Cold causes condensation.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PRECIPITATION`,
          paragraphs: [
            `Clouds keep gathering water. They get HEAVIER and HEAVIER.`,
            `When they can't hold any more, the water falls back down to Earth. This is called PRECIPITATION. It can fall in different forms. RAIN — liquid water drops. SNOW — frozen water crystals (when it's cold). SLEET — partly frozen rain. HAIL — chunks of ice (in big storms). All of these are precipitation. They all carry water from the sky back to Earth's surface. Precipitation is step three in the water cycle.`,
          ],
          image: `/explorer-assets/science/l08-s4-precipitation.webp`,
          imageCaption: `Step 3: Precipitation. Heavy clouds release water. As rain, snow, sleet, or hail. Back to Earth.`,
          vocab: [
            { word: `precipitation`,  definition: `Water falling from clouds. Rain, snow, sleet, hail are all PRECIPITATION.`,
              audioPrompt: `Precipitation, {name}, is water falling from clouds. Rain is precipitation. So is snow, sleet, and hail. All of them are water that's leaving the clouds and falling back to Earth. The word 'precipitation' is just a fancy term for 'stuff falling from the sky' — but in the water cycle, that 'stuff' is always water in some form.` },
            { word: `rain`,           definition: `Liquid water falling from clouds. RAIN is the most common form of precipitation.`,
              audioPrompt: `Rain, {name}, is liquid water falling from clouds. It's the most common form of precipitation. Some places get TONS of rain — like rainforests. Some get very little — like deserts. Rain refills lakes and rivers. It waters plants. It keeps living things alive. Rain might feel inconvenient sometimes, but it's essential.` },
            { word: `snow`,           definition: `Frozen water crystals falling from clouds. SNOW happens when it's cold enough.`,
              audioPrompt: `Snow, {name}, is frozen water crystals falling from clouds. When the air is cold enough, water in clouds freezes into snowflakes before falling. Each snowflake is unique — no two are exactly alike. Snow piles up on the ground and can stay for months in cold places. Eventually, it melts back into water and continues the water cycle.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: COLLECTION`,
          paragraphs: [
            `Rain and snow land on Earth. But where does it GO?`,
            `Some lands in OCEANS and LAKES — getting added back to the big bodies of water. Some lands on MOUNTAINS and flows down as streams and RIVERS. Some soaks into the SOIL — feeding plants. Some becomes GROUNDWATER deep underground. Some animals drink it. Some is in your own water glass right now. ALL of it eventually ends up back in oceans or lakes — ready to evaporate AGAIN. The cycle starts over. Round and round, never stopping.`,
          ],
          image: `/explorer-assets/science/l08-s5-collection.webp`,
          imageCaption: `Step 4: Collection. Water lands → oceans, lakes, rivers, soil. Then back to evaporation. Cycle repeats.`,
          vocab: [
            { word: `collection`,     definition: `When water gathers back into big bodies of water. The final step before the cycle restarts.`,
              audioPrompt: `Collection, {name}, is when water gathers back into big bodies of water. It's the final step of the water cycle. After rain falls, it gathers in oceans, lakes, rivers, and underground. Eventually, sunlight heats it up, and the cycle starts again with evaporation. Collection is what completes the loop.` },
            { word: `groundwater`,    definition: `Water that soaks into the ground and travels underground.`,
              audioPrompt: `Groundwater, {name}, is water that soaks into the ground and travels underground. Lots of water is hidden underground in special rock layers. People dig wells to reach it. It's an important source of fresh water. Groundwater eventually finds its way back to rivers and oceans, joining the water cycle again.` },
            { word: `cycle restarts`, definition: `When the water cycle begins again — the collected water gets evaporated.`,
              audioPrompt: `Cycle restarts, {name}, means the water cycle begins again. Once water collects in oceans and lakes, the sun heats it again. It evaporates. The cycle starts over. This restart has been happening for billions of years. Every single drop of water has been through this cycle many many times.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Same Water, Forever`,
          paragraphs: [
            `Here's something MIND-BLOWING. Earth doesn't make NEW water.`,
            `The water on Earth today is the SAME water that's been here for billions of years. The drop of rain falling outside today might have been a tear from a dinosaur. Or steam from a volcano millions of years ago. Or part of an ocean wave that crashed during the Stone Age. Water gets recycled FOREVER. It just keeps moving through the water cycle. That makes water precious. We share it with EVERY living thing that's ever lived on Earth.`,
          ],
          image: `/explorer-assets/science/l08-s6-same-water.webp`,
          imageCaption: `Same water. Forever. Recycled for billions of years. Your raindrop today may have been a dinosaur's tear.`,
          vocab: [
            { word: `same water`,     definition: `Earth doesn't make new water. We use the SAME WATER that's been here for billions of years.`,
              audioPrompt: `Same water, {name}, means Earth doesn't make new water. The water on Earth today is the same water that's been here for billions of years. It just keeps recycling through the water cycle. Pretty wild, right? Every glass of water you drink has been around since dinosaurs. Maybe even before them.` },
            { word: `recycle`,        definition: `To use again. Earth RECYCLES water through the water cycle.`,
              audioPrompt: `To recycle, {name}, is to use again. Earth recycles water through the water cycle. Same water, over and over, for billions of years. We don't get new water — we just keep moving the same water around. That makes saving water important. There's only so much. Wasting it doesn't make sense when it's all the water we'll ever have.` },
            { word: `precious`,       definition: `Very valuable. Water is PRECIOUS because we can never make more.`,
              audioPrompt: `Precious, {name}, means very valuable. Water is precious. Earth can't make more — we just keep recycling what we have. Every drop matters. Don't waste it. Don't pollute it. Use it carefully. Water is what makes life possible on Earth. Treating it with respect means treating life with respect.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `Water on Earth is ALWAYS moving — the water cycle never stops.`,
              matchPhrase: `Yes! The water cycle has been running for billions of years and never stops. Evaporation, condensation, precipitation, collection — over and over, day and night.`,
              correctMatch: `fact` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `The same water has been on Earth for BILLIONS of years — recycled through the water cycle.`,
              matchPhrase: `True! Earth doesn't make new water. The same water keeps cycling. Your raindrop today might have been an ocean wave in the time of dinosaurs. Pretty wild.`,
              correctMatch: `fact` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `RAIN just MAGICALLY APPEARS from nowhere — no clouds or oceans needed.`,
              matchPhrase: `Not at all! Rain comes from clouds. Clouds come from condensed water vapor. Vapor comes from evaporated oceans and lakes. The water cycle is a process — not magic.`,
              correctMatch: `myth` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `Earth makes BRAND NEW water from nothing every single day.`,
              matchPhrase: `Definitely not! Earth doesn't make new water. The water cycle just keeps recycling the same water. That's why protecting and saving water matters — there's only so much.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is the WATER CYCLE?`,
              options: [`The journey water takes — from oceans to clouds to rain to rivers and back`, `A type of bicycle`, `A new song`, `What plants drink`],
              correctIndex: 0,
              explanation: `The water cycle is water's endless journey — evaporation, condensation, precipitation, collection — over and over. It's been running for billions of years.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is EVAPORATION?`,
              options: [`Water freezing`, `Water turning into invisible vapor and rising into the air`, `Snow falling`, `Rivers flowing`],
              correctIndex: 1,
              explanation: `Evaporation = water turning into invisible vapor and rising into the air. The sun heats water and it changes form. Step 1 of the water cycle.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `What are CLOUDS made of?`,
              options: [`Cotton balls`, `Tiny water droplets — billions of them — gathered in the sky`, `Smoke`, `Air`],
              correctIndex: 1,
              explanation: `Clouds are billions of tiny water droplets gathered in the sky. They form when water vapor condenses in cold air. That's why clouds can drop rain — they're full of water!` },
            { id: `l08-q4`, format: `true-false`,
              question: `RAIN, SNOW, SLEET, and HAIL are all forms of PRECIPITATION — water falling from clouds.`,
              correctAnswer: true,
              explanation: `True! All four are precipitation — water leaving clouds in different forms. Rain is liquid. Snow is frozen crystals. Sleet is partly frozen. Hail is chunks of ice.` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `The water on Earth today is the SAME water that's been here for ___ of years.`,
              options: [`billions`, `minutes`, `weeks`, `months`],
              correctIndex: 0,
              explanation: `Billions! Earth doesn't make new water. The same water has been recycling through the water cycle for billions of years. Your raindrop today is ancient.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What POWERS the entire water cycle?`,
              options: [`Electricity`, `The SUN — it heats water and starts evaporation`, `Wind`, `Magic`],
              correctIndex: 1,
              explanation: `The sun! It heats water and starts evaporation. Without the sun, no evaporation. Without evaporation, no clouds, no rain, no water cycle. The sun is the engine.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The water cycle isn't just nature — it's how people get DRINKING WATER. Rain falls into reservoirs (big collection lakes). Water travels through pipes to homes. After people use it, the water gets cleaned and returned to rivers — where it eventually evaporates and cycles again. Even more amazing — astronauts on the International Space Station have machines that EVAPORATE and CONDENSE their pee back into clean drinking water. They drink recycled urine! The water cycle works the same way in space as on Earth.`,
          familyAdventure: `Make a MINI WATER CYCLE together. Take a clear plastic ziplock bag. Draw a sun, cloud, and ocean on it with a marker. Pour about a cup of water in. Seal it tight. Tape it to a sunny window. Watch over a few hours. You'll see water EVAPORATE up to the top, CONDENSE into droplets on the inside, and PRECIPITATE back down. The whole water cycle in a bag.`,
          creativePrompt: `Draw the WATER CYCLE on paper. Make: a sun (top), an ocean (bottom), water rising up as ARROWS (evaporation), clouds forming (condensation), and rain falling back down (precipitation). Label each step. Show the whole cycle as a CIRCLE — water never stops moving.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know the WATER CYCLE — Earth's endless loop. EVAPORATION (water rises). CONDENSATION (clouds form). PRECIPITATION (rain falls). COLLECTION (water gathers). And then it all starts over. You know the sun POWERS the whole cycle. You know water is RECYCLED forever — the same water for billions of years. Next time it rains, think about where that drop has BEEN. See you next lesson!`,
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
  const mags  = SCIENCE_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L08] Loaded: "The Water Cycle" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
