// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L08 — The Water Cycle: Nature's Endless Loop
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-ESS2-1, 5-ESS2-2 — Earth's water cycle and movement
//            of water through the planet's systems
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — three states of water, the cycle steps,
//        watersheds and groundwater, why water access matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-08`,
      title: `The Water Cycle: Nature's Endless Loop`,
      duration: 18,
      xpReward: 75,
      badge: `water-scientist`,
      badgeName: `Water Scientist`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Otters love water. We literally live in it. Today we follow water on its endless journey around Earth. The water in your glass might have been in a thunderstorm last week, in a glacier 10,000 years ago, or breathed out by a dinosaur. Water on Earth is recycled constantly. The same water keeps moving in patterns we call the WATER CYCLE. By the end of today you'll understand the whole loop. Let's go.`,
          headline: `The Water Cycle`,
          subtitle: `How water travels in a never-ending circle around our planet`,
          visual: `/ue-assets/science/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Water in Three States`,
          paragraphs: [
            `Water is one of the only substances on Earth that exists naturally in ALL THREE STATES of matter at once. SOLID water is ICE. LIQUID water is what fills oceans, rivers, lakes, your bathtub, and your body. GAS form of water is called WATER VAPOR, which floats in the air invisibly. Right now, your room contains water vapor mixed into the air, even if it doesn't feel humid. Your breath contains water vapor (which is why your breath fogs up on a cold day, condensing into liquid).`,
            `What makes water special is that it changes between these states EASILY at temperatures common on Earth. Ice melts to water at 0°C (32°F). Water boils to vapor at 100°C (212°F). Both happen around the temperatures Earth normally experiences. Most other substances on Earth stay in one state. Iron is solid. Air is gas. Water just keeps moving between states. That movement is what makes the water cycle possible. If Earth were too hot or too cold, water would be stuck in one form, and the cycle wouldn't exist.`,
          ],
          image: `/ue-assets/science/l08-s1-three-states.webp`,
          imageCaption: `Ice, liquid water, water vapor. All three exist on Earth at the same time.`,
          vocab: [
            { word: `water cycle`,
              definition: `The constant movement of water around Earth as it changes between solid, liquid, and gas. Includes evaporation, condensation, precipitation, and collection.`,
              audioPrompt: `The water cycle is the constant movement of water around Earth, {name}. The same water keeps cycling between oceans, sky, land, and back again. It changes between three states. Solid water is ice. Liquid water is what fills oceans, rivers, and lakes. Gas form of water is called water vapor, which floats invisibly in air. The cycle includes evaporation, condensation, precipitation, and collection. It runs on energy from the Sun and gravity. Almost no new water is added to Earth. The same water keeps moving.` },
            { word: `transpiration`,
              definition: `The process by which plants release water vapor through their leaves. Accounts for about 10% of water vapor in the atmosphere. Important for regional rainfall patterns.`,
              audioPrompt: `Transpiration is the process by which plants release water vapor through their leaves, {name}. It's similar to evaporation, but it happens from living plants rather than water surfaces. As plants take up water through their roots, they use some of it for photosynthesis. The rest moves up through the stem and exits through tiny pores called stomata in the leaves. About 10 percent of water vapor in the atmosphere comes from transpiration. Forests are especially important for transpiration.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Steps of the Cycle`,
          paragraphs: [
            `STEP 1: EVAPORATION. The Sun heats water in oceans, lakes, and rivers. Some water molecules get enough energy to escape into the air as INVISIBLE WATER VAPOR. About 90% of water vapor in the atmosphere comes from oceans. The other 10% comes from plants (called TRANSPIRATION). When plants release water vapor through their leaves, it's like they're doing tiny acts of evaporation across the world's forests.`,
            `STEP 2: CONDENSATION. As water vapor rises into colder parts of the atmosphere, it cools down. Cool water vapor turns back into tiny LIQUID DROPLETS. Millions of these tiny droplets cluster together to form CLOUDS. STEP 3: PRECIPITATION. When the droplets get heavy enough, gravity pulls them back down to Earth as rain, snow, sleet, or hail. STEP 4: COLLECTION. The water collects in oceans, rivers, lakes, glaciers, and underground. Then the cycle starts again. Earth has been doing this for billions of years. Same water. Same cycle. Forever.`,
          ],
          image: `/ue-assets/science/l08-s2-cycle-steps.webp`,
          imageCaption: `Evaporation → condensation → precipitation → collection. Repeat forever.`,
          vocab: [
            { word: `evaporation`,
              definition: `The process where liquid water turns into water vapor (gas) as it warms up. Mainly happens at the surface of oceans, lakes, and rivers when the Sun heats them.`,
              audioPrompt: `Evaporation is when liquid water turns into water vapor, {name}. It happens at the surface of oceans, lakes, rivers, and even puddles. The Sun heats the water. Some water molecules at the surface gain enough energy to escape into the air as invisible water vapor. About 90 percent of water vapor in the atmosphere comes from ocean evaporation. The other 10 percent comes from plants releasing water through their leaves, which is called transpiration. Evaporation is the first step of the water cycle. Without it, the cycle wouldn't start.` },
            { word: `condensation`,
              definition: `The process where water vapor (gas) turns back into liquid droplets as it cools. How clouds form. Also what happens on a cold glass left out in warm air.`,
              audioPrompt: `Condensation is the process where water vapor (gas) turns back into liquid droplets as it cools down, {name}. When warm, moist air rises into the cooler upper atmosphere, it cools below a certain point called the dew point. Water vapor then condenses onto tiny particles like dust or sea salt in the air, forming the microscopic droplets that make up clouds. Condensation also happens in everyday life. A cold glass of water gets wet on the outside because water vapor in the warm air condenses on the cold glass surface.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Watersheds and Groundwater`,
          paragraphs: [
            `When rain falls on land, it doesn't just sit there. It flows DOWNHILL toward the lowest place it can reach. All the rain that falls in a particular area drains into the same river system, eventually reaching the same ocean. That whole drainage area is called a WATERSHED. The Mississippi River watershed, for example, drains rain from over a third of the entire United States. Your house is in some watershed too. The rain that falls on your roof will end up in some river or ocean, eventually.`,
            `Some water sinks into the ground instead of flowing along the surface. Water in the soil and rocks below the surface is called GROUNDWATER. It fills underground spaces in rocks and sand, forming AQUIFERS that can hold huge amounts of water. People dig WELLS to reach groundwater for drinking, farming, and industry. About 30% of the world's freshwater is groundwater. The rest is mostly locked in ice (glaciers and polar caps). Only about 1% of Earth's freshwater is in lakes, rivers, and accessible places. Most of the water you see is actually a small fraction of total freshwater.`,
          ],
          image: `/ue-assets/science/l08-s3-watersheds.webp`,
          imageCaption: `Rain flows to rivers, rivers to oceans. Some sinks below as groundwater.`,
          vocab: [
            { word: `precipitation`,
              definition: `Water falling from clouds to Earth's surface. Includes rain, snow, sleet, and hail. The third step of the water cycle.`,
              audioPrompt: `Precipitation is water falling from clouds to Earth's surface, {name}. Rain. Snow. Sleet. Hail. All forms of precipitation. It happens when water droplets in clouds get heavy enough that gravity pulls them down. The type of precipitation depends on temperature. If the air is above freezing, you get rain. If it's below freezing all the way down, you get snow. Sleet and hail form in special conditions. Precipitation is how the water cycle delivers water from the sky back to land and oceans, completing the loop.` },
            { word: `watershed`,
              definition: `An area of land where all the rain that falls drains into the same river system. Every house, farm, and city is inside a watershed that eventually reaches the ocean.`,
              audioPrompt: `A watershed is an area of land where all the rain that falls drains into the same river system, {name}. Think of it like a bathtub — everything tilts toward a central drain. The Mississippi River watershed drains rain from more than a third of the entire United States. Your home is inside some watershed. Rain that falls on your roof will eventually reach a creek, then a river, then the ocean. Protecting watersheds from pollution and overuse keeps the rivers and streams inside them healthy.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Water Access Matters`,
          paragraphs: [
            `About 97% of Earth's water is in the OCEANS, which is SALT water. Animals and plants on land need FRESH water, which is the remaining 3%. And as we just covered, only about 1% of that is easily accessible. The amount of accessible freshwater on Earth is much smaller than most people realize. Where freshwater is plentiful, civilizations thrive. Where it's scarce, life is harder. Major rivers like the Nile, the Ganges, and the Mississippi have always been important because people, animals, and crops need them.`,
            `Today, more than 2 BILLION people lack reliable access to safe drinking water. Pollution makes some water dangerous to drink. Climate change is shifting rainfall patterns in many regions. Drought, including in parts of California where many Coreverse families live, has become more common. Engineers, scientists, and governments are working to improve water access, build better filtration systems, protect watersheds, and use water more efficiently. Understanding the water cycle is the first step toward making smart choices about one of Earth's most precious resources.`,
          ],
          image: `/ue-assets/science/l08-s4-water-access.webp`,
          imageCaption: `97% salt, 3% fresh. Only 1% easily accessible. Water access is a global challenge.`,
          vocab: [
            { word: `groundwater`,
              definition: `Water that has soaked into the ground and is stored in soil and rock layers below the surface. About 30% of Earth's freshwater. People reach it through wells.`,
              audioPrompt: `Groundwater is water that has soaked into the ground, {name}. It's stored in soil and rock layers below the surface. About 30 percent of Earth's freshwater is groundwater. The places underground where water collects are called aquifers. They can hold huge amounts of water. People dig wells to reach groundwater for drinking, farming, and industry. Many cities get their water supply partly from groundwater. Protecting groundwater from pollution is important because once pollutants get in, it can take decades or centuries to clean out.` },
            { word: `aquifer`,
              definition: `An underground layer of rock or sediment that stores large amounts of groundwater. People dig wells into aquifers to reach water for drinking, farming, and industry.`,
              audioPrompt: `An aquifer is an underground layer of rock or sediment that holds large amounts of groundwater, {name}. When rain soaks into the ground, some of it collects in aquifers. People dig wells into aquifers to reach the water below. Many cities and farms depend on aquifers for their water supply. Some aquifers have been built up over thousands of years and refill slowly. If people use water from an aquifer faster than rain can refill it, the aquifer shrinks.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four water-related events. For each one, identify the STEP of the water cycle happening: EVAPORATION (liquid → gas), CONDENSATION (gas → liquid droplets), or PRECIPITATION (water falling from clouds)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `evaporation`,    label: `Evaporation`,    color: `#FBBF24`, description: `Liquid water turning into water vapor (gas). Happens when water is heated.` },
            { id: `condensation`,   label: `Condensation`,   color: `#60A5FA`, description: `Water vapor turning back into liquid droplets when it cools.` },
            { id: `precipitation`,  label: `Precipitation`,  color: `#A78BFA`, description: `Water falling from clouds: rain, snow, sleet, or hail.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Event #1`,
              clues: [
                { text: `On a hot summer day, a puddle in the driveway slowly shrinks.` },
                { text: `By evening, the puddle is gone.` },
                { text: `The water doesn't drain away — it just disappears as the day warms up.` },
              ],
              correctAnswer: `evaporation`,
              realWorldExample: `Puddle drying is one of the most everyday examples of evaporation.`,
              explanation: `Liquid water turning into invisible water vapor as the Sun heats it. Pure evaporation. The water didn't go away. It went into the air as vapor.`,
            },
            {
              id: `case-2`,
              caseTitle: `Event #2`,
              clues: [
                { text: `You take a cold glass of water out of the refrigerator on a warm day.` },
                { text: `Within minutes, the outside of the glass is covered with tiny water droplets.` },
                { text: `You didn't pour any water on the glass. The droplets came from the air.` },
              ],
              correctAnswer: `condensation`,
              realWorldExample: `The "sweating glass" is one of the clearest examples of condensation in daily life.`,
              explanation: `Water vapor in the warm air touched the cold glass surface, cooled down, and turned into liquid droplets. Pure condensation. This is the same thing that happens in clouds, just at a much smaller scale.`,
            },
            {
              id: `case-3`,
              caseTitle: `Event #3`,
              clues: [
                { text: `Late one afternoon, dark clouds gather over a city.` },
                { text: `Within an hour, water starts falling from the sky.` },
                { text: `Some of it is liquid (rain), but a little bit is solid (small hail).` },
              ],
              correctAnswer: `precipitation`,
              realWorldExample: `A typical summer rainstorm with brief hail.`,
              explanation: `Water falling from clouds in liquid AND solid forms. Pure precipitation. Whenever water comes down from the sky in any form, that's precipitation, whether it's rain, snow, sleet, hail, or anything else.`,
            },
            {
              id: `case-4`,
              caseTitle: `Event #4 — The Tricky One`,
              clues: [
                { text: `On a cool morning, dew forms on the grass.` },
                { text: `By noon, the dew is gone.` },
                { text: `Both events involve water on the grass.` },
              ],
              correctAnswer: `condensation`,
              realWorldExample: `Dew is a great example of nighttime condensation.`,
              explanation: `Tricky because TWO events happened. The dew FORMING is condensation (water vapor in the cooling night air condenses onto cool grass). The dew DISAPPEARING is evaporation (morning sun heats the dew back into vapor). The question asked about ONE step, so we focus on what created the dew: condensation. Lesson: real natural events often combine multiple water cycle steps. Reading carefully about what specifically happened matters.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `In what THREE STATES does water naturally exist on Earth?`,
              options: [
                `Just liquid`,
                `Solid (ice), liquid (water), and gas (water vapor)`,
                `Hot, warm, and cold`,
                `Blue, white, and clear`,
              ],
              correctIndex: 1,
              explanation: `Water exists naturally as ice (solid), liquid water, and water vapor (gas) at the temperatures common on Earth. This is unusual — most substances only exist in one state under normal conditions.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is EVAPORATION?`,
              options: [
                `When water freezes`,
                `When liquid water turns into water vapor (gas) as it warms up`,
                `When water falls from clouds`,
                `When water flows downhill`,
              ],
              correctIndex: 1,
              explanation: `Evaporation is when liquid water turns into water vapor. It happens at the surface of oceans, lakes, and rivers when the Sun warms them. About 90% of water vapor in the atmosphere comes from ocean evaporation.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is CONDENSATION?`,
              options: [
                `When water freezes`,
                `When water vapor (gas) turns back into liquid droplets as it cools`,
                `When water flows downhill`,
                `When water evaporates`,
              ],
              correctIndex: 1,
              explanation: `Condensation is when water vapor turns back into liquid. It happens when warm, moist air cools. Clouds form this way. So does the moisture on a cold glass. So does dew on grass in the morning.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What is PRECIPITATION?`,
              options: [
                `Hot water`,
                `Water falling from clouds — rain, snow, sleet, or hail`,
                `Ice melting`,
                `Water in oceans`,
              ],
              correctIndex: 1,
              explanation: `Precipitation is water falling from the sky in any form. Rain, snow, sleet, and hail are all precipitation. It happens when droplets in clouds get heavy enough that gravity pulls them down.` },

            { id: `l08-q5`, format: `true-false`,
              question: `True or false: The same water on Earth has been cycling for billions of years — almost no new water is added.`,
              correctAnswer: true,
              explanation: `True. The same water that's on Earth now has been here for billions of years. The water you drink might once have been part of an ancient ocean, a dinosaur's body, a glacier, or many other things. Water just keeps moving through the cycle.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `What's a WATERSHED?`,
              options: [
                `A building that stores water`,
                `An area of land where all the rain that falls drains into the same river system`,
                `A type of cloud`,
                `A water filter`,
              ],
              correctIndex: 1,
              explanation: `A watershed is all the land that drains into the same river system. The Mississippi River watershed, for example, drains rain from over a third of the United States. Your home is in some watershed too — the rain that falls on it goes somewhere.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What is GROUNDWATER?`,
              options: [
                `Water in rivers`,
                `Water that has soaked into the ground and is stored in soil and rock below the surface`,
                `Just rainwater`,
                `Salt water`,
              ],
              correctIndex: 1,
              explanation: `Groundwater is water below the surface, stored in soil and rock layers. About 30% of Earth's freshwater is groundwater. People reach it through wells. Many cities get part of their water supply from underground aquifers.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `Roughly what fraction of Earth's water is FRESH (not salty)?`,
              options: [
                `Almost all of it`,
                `About 3%, and only about 1% of all water is easily accessible freshwater (in lakes, rivers, etc.)`,
                `Half of it`,
                `None of it`,
              ],
              correctIndex: 1,
              explanation: `About 97% of Earth's water is in the salty oceans. Only 3% is freshwater, and most of that is locked in ice or deep underground. Only about 1% is easily accessible in lakes, rivers, and shallow groundwater. Freshwater is much more limited than most people realize.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick a glass of water. Imagine where it might have been in the past. An ancient ocean? A glacier? A storm cloud? Pick one journey and describe it.` },
            { id: `r2`, text: `How much water do you think your family uses in a day? What for? Try to estimate, then think about how it could be less.` },
            { id: `r3`, text: `Over 2 billion people lack reliable access to safe drinking water. What's something humans could invent or build that would help?` },
            { id: `r4`, text: `What's the wildest thing about the water cycle? What surprised you most?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Water is one of Earth's most precious resources. Droughts in California, the American Southwest, and many other parts of the world are becoming more serious. Water access affects food prices, public health, agriculture, and politics. Engineers design desalination plants to turn ocean water into drinking water. Farmers develop drought-resistant crops. Communities protect their watersheds from pollution. Even small choices about how you use water (turning off the tap, taking shorter showers) add up across families and communities.`,
          familyAdventure: `Family Water Tracker. For one day, have each family member keep track of every time you use water. Drinking, washing, flushing, cooking, watering plants. Don't aim for perfection. Just notice. At the end of the day, compare lists. Most people use much more water than they realize. Pick ONE thing your family could try doing differently. This is exactly the kind of awareness real water scientists encourage in communities.`,
          creativePrompt: {
            intro: `Imagine you're a single water droplet on a journey around Earth's water cycle. Write a journal entry about your adventure.`,
            floor: `Write at least 5 sentences. Describe where you start, what state you're in (liquid, ice, vapor), and one place you travel to.`,
            stretch: `Write 8 to 10 sentences. Cover at least three different states or stages of your journey: evaporation, condensation, precipitation, collection.`,
            open: `Write as much as you want. Build a full journey log. Travel through the whole water cycle, change states, visit different places (ocean, cloud, river, glacier, plant, animal). End back where you started, ready to start the cycle again.`,
            frames: [
              `I am a water droplet. Today my journey started in ___.`,
              `Then I ___, and became ___.`,
              `Next, I traveled to ___.`,
              `I changed again, becoming ___.`,
              `Now I am ready to ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now name the three states of water, describe each step of the water cycle, explain watersheds and groundwater, and understand why fresh water matters. Next lesson: we look UP. What's actually happening when you say "the weather is bad" or "what a beautiful day." See you there. — Cosmo.`,
          badge: `water-scientist`,
          badgeName: `Water Scientist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
