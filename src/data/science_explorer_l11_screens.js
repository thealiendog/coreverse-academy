// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L11 — Matter: Solid, Liquid, Gas
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-PS1-1 (matter exists in different forms)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L11 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-11`,
      title:     `Matter: Solid, Liquid, Gas`,
      duration:  12,
      xpReward:  50,
      badge:     `matter-explorer`,
      badgeName: `Matter Explorer`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Time to zoom out even further. Today we ask the BIG question — what is EVERYTHING made of? The answer is MATTER. Matter is the STUFF that makes up the universe. Rocks, water, air, you, me, the stars — all matter. And it comes in three main forms — SOLID, LIQUID, and GAS. Today you'll learn what makes each one different. Let's dive in!`,
          headline: `Matter: Solid, Liquid, Gas`,
          subtitle: `Everything in the universe is made of matter — and it comes in three forms`,
          visual: `/explorer-assets/science/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Everything Is Matter`,
          paragraphs: [
            `Look around right now. Everything you see is made of MATTER.`,
            `Your chair. The floor. Your hands. The air in the room (yes, even air!). The water in a glass. Your dog. A rock outside. The Earth. The moon. The stars. ALL of it is matter. MATTER is anything that takes up SPACE and has WEIGHT. If you can touch it, smell it, see it, or it pushes against your hand — it's matter. The whole universe is made of matter and energy. Today we focus on matter.`,
          ],
          image: `/explorer-assets/science/l11-s1-everything-matter.webp`,
          imageCaption: `Everything around you is MATTER. Chairs, floors, water, air, you. Anything that has weight and takes space.`,
          vocab: [
            { word: `matter`,         definition: `Anything that has WEIGHT and takes up SPACE. Everything physical is MATTER.`,
              audioPrompt: `Matter, {name}, is anything that has weight and takes up space. If you can hold it, push it, or feel it — it's matter. Rocks are matter. Water is matter. Even invisible air is matter. The whole physical universe is matter. Scientists study matter to understand how everything works. It's one of the BIG ideas in science.` },
            { word: `takes up space`, definition: `Has SIZE. Even small things take up space. Matter TAKES UP SPACE.`,
              audioPrompt: `Takes up space, {name}, means has size — even tiny size. A pencil takes up space. An ant takes up space. A drop of water takes up space. Even invisible things like air take up space — that's why you can fill a balloon with it. Everything that's matter takes up SOME space.` },
            { word: `weight`,         definition: `How heavy something is. Matter has WEIGHT, even if just a little.`,
              audioPrompt: `Weight, {name}, is how heavy something is. Matter has weight — even if just a tiny bit. A feather has tiny weight. A car has lots of weight. Air has weight too — but it's spread out so we don't feel it. Astronauts in space feel WEIGHTLESS, but they still have mass. On Earth, matter has weight from gravity pulling on it.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `State 1: SOLID`,
          paragraphs: [
            `The first state of matter is SOLID. Solids HOLD THEIR SHAPE.`,
            `A rock stays rock-shaped. A pencil stays pencil-shaped. A book doesn't melt into a puddle when you set it down. Solids are FIRM. You can hold them. You can pick them up. They don't flow. Solids also have a definite SIZE — they don't change size by themselves. Examples — rocks, wood, metal, ice, plastic, your teeth, your bones, this device you're reading on. Most things you can pick up are solids.`,
          ],
          image: `/explorer-assets/science/l11-s2-solid.webp`,
          imageCaption: `Solids hold their shape. Don't flow. Have definite size. Rocks, wood, metal, ice — all solids.`,
          vocab: [
            { word: `solid`,          definition: `Matter that holds its shape and doesn't flow. SOLIDS keep their form.`,
              audioPrompt: `A solid, {name}, is matter that holds its shape and doesn't flow. If you put a solid on a table, it stays there in that shape. Rocks, wood, metal, glass, plastic, ice — all solids. Solids are usually what we think of FIRST when we think of "stuff." They're firm. They have definite size and shape. Easy to pick up and hold.` },
            { word: `shape`,          definition: `The form something has. SOLIDS keep their shape.`,
              audioPrompt: `Shape, {name}, is the form something has. Round, square, long, irregular — those are shapes. Solids keep their shape. A rock doesn't suddenly turn into a different shape on its own. Same with wood, metal, glass. Their shape stays — unless you BREAK them or melt them. That's a key feature of solids.` },
            { word: `firm`,           definition: `Hard and steady. Solids are FIRM — they don't squish or flow easily.`,
              audioPrompt: `Firm, {name}, means hard and steady. Solids are firm. You can push on a rock without it changing shape. You can stand on the floor without sinking through. Some solids are SOFTER than others — like sponges. But even soft solids hold their basic shape. They don't flow like water or float away like air.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `State 2: LIQUID`,
          paragraphs: [
            `The second state is LIQUID. Liquids FLOW.`,
            `Pour water from a cup. It moves. It splashes. It takes the SHAPE of whatever container holds it. Round bowl? Round water. Tall glass? Tall water. Liquids can be POURED. They can SPLASH. They flow downhill. Liquids have definite SIZE (you have the same amount of water whether it's in a bowl or a glass) but they DON'T have a definite shape. Examples — water, milk, juice, soup, oil, blood, oceans, rivers, lava (yes — molten rock is liquid!).`,
          ],
          image: `/explorer-assets/science/l11-s3-liquid.webp`,
          imageCaption: `Liquids flow. Take the shape of containers. Same size, different shape. Water, milk, juice, oil — all liquid.`,
          vocab: [
            { word: `liquid`,         definition: `Matter that flows and takes the shape of its container. LIQUIDS have definite size but not shape.`,
              audioPrompt: `A liquid, {name}, is matter that flows and takes the shape of its container. Water, milk, juice, oil — all liquids. They can be poured. They splash. They run downhill. They take the shape of whatever holds them. But they keep their SIZE — one cup of water is one cup, whether it's in a bowl or a glass.` },
            { word: `flow`,           definition: `To move smoothly. LIQUIDS FLOW — they move easily.`,
              audioPrompt: `To flow, {name}, is to move smoothly. Liquids flow. You can see water flow in a river. Pour milk and it flows into the glass. Flowing is what makes liquids different from solids. Solids don't flow. Liquids do — that's their special power.` },
            { word: `container`,      definition: `Something that holds matter. LIQUIDS take the shape of their CONTAINER.`,
              audioPrompt: `A container, {name}, is something that holds matter. Bowls, cups, bottles, tanks — all containers. Liquids take the shape of whatever container holds them. Pour water into a square box, and the water becomes square. Pour the same water into a round cup, and it becomes round. The container shapes the liquid.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `State 3: GAS`,
          paragraphs: [
            `The third state is GAS. Gases SPREAD OUT to fill all the space they can.`,
            `Air is the most common gas. It's all around you. It fills every part of every room — even spaces you can't see. Gases USUALLY can't be seen. You can't see air. You can't see most gases. But they're real — and they're matter. Gases have NO definite shape AND no definite size. They spread out as much as they can. Other examples — STEAM from a hot kettle (water as gas), HELIUM in balloons, CARBON DIOXIDE that comes out when you breathe, NATURAL GAS used for cooking stoves.`,
          ],
          image: `/explorer-assets/science/l11-s4-gas.webp`,
          imageCaption: `Gases spread out to fill space. No definite shape OR size. Usually invisible. Air, steam, helium — all gas.`,
          vocab: [
            { word: `gas`,            definition: `Matter that spreads out to fill all available space. Air is a GAS.`,
              audioPrompt: `A gas, {name}, is matter that spreads out to fill all available space. Air is a gas. So is steam, helium, and many others. Gases are usually invisible. They have no definite shape or size — they just expand to fill wherever they are. If you let helium out of a balloon, it spreads out into the room. That's what gases do.` },
            { word: `invisible`,      definition: `Cannot be seen. Most gases are INVISIBLE.`,
              audioPrompt: `Invisible, {name}, means cannot be seen. Most gases are invisible. You can't see the air around you, but it's everywhere. You can't see the carbon dioxide you breathe out. You can't see most gases. But just because they're invisible doesn't mean they're not real. They're matter — they have weight and take up space.` },
            { word: `spread out`,     definition: `To expand and fill more space. Gases SPREAD OUT in all directions.`,
              audioPrompt: `Spread out, {name}, means to expand and fill more space. Gases spread out. If you spray perfume, you can soon smell it everywhere in the room — that's the perfume gas spreading. If you open a soda bottle, you hear a fizz — that's gas spreading out of the bottle into the air. Gases love to spread.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Matter Can CHANGE Form`,
          paragraphs: [
            `Here's the SUPER cool part — matter can CHANGE between states. The same stuff can be solid, liquid, OR gas — depending on TEMPERATURE.`,
            `Water is the best example. Below 32 degrees Fahrenheit — water is SOLID (ice). Between 32 and 212 — water is LIQUID. Above 212 — water becomes GAS (steam). Same water. Different temperatures. Different states. This works for almost everything. Even METAL melts into liquid if you heat it hot enough (that's how we make cars and tools). Even GASES can become liquid if you cool them down enough. Matter is flexible. Temperature is the key.`,
          ],
          image: `/explorer-assets/science/l11-s5-changes.webp`,
          imageCaption: `Matter changes states with temperature. Same stuff — solid → liquid → gas → liquid → solid → cycle.`,
          vocab: [
            { word: `change states`,  definition: `Matter switching between solid, liquid, and gas. TEMPERATURE causes state changes.`,
              audioPrompt: `Change states, {name}, means matter switching between solid, liquid, and gas. Water can be all three. Ice (solid) melts into water (liquid). Water boils into steam (gas). Steam cools back into water. Water freezes back into ice. The cycle goes both ways. Temperature is what changes matter from one state to another.` },
            { word: `melt`,           definition: `When SOLID turns into LIQUID by getting warmer. Ice MELTS into water.`,
              audioPrompt: `Melt, {name}, means when solid turns into liquid by getting warmer. Ice melts into water when it warms up above freezing. Butter melts when you put it in a hot pan. Even metal melts — at very high temperatures — into liquid metal. Melting is solid becoming liquid. It happens when something gets warmer.` },
            { word: `boil`,           definition: `When LIQUID turns into GAS by getting hot. Water BOILS into steam.`,
              audioPrompt: `Boil, {name}, means when liquid turns into gas by getting hot. Water boils into steam at 212 degrees Fahrenheit. You see bubbles in the water — those are pockets of gas forming. Above the boiling water, you see steam — that's the water as gas. Boiling is liquid becoming gas. Happens when something gets really hot.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Matter Is Everywhere`,
          paragraphs: [
            `Once you know about matter, you see it EVERYWHERE.`,
            `The PLANET Earth has all three states — SOLID ground, LIQUID oceans, GAS atmosphere. Your body has all three — SOLID bones, LIQUID blood, GAS in your lungs. Your home has all three — SOLID walls, LIQUID water in pipes, GAS air to breathe. Even space has matter — though some parts of space have very little. Understanding matter helps you understand everything in the physical world. You're seeing the universe in a new way now.`,
          ],
          image: `/explorer-assets/science/l11-s6-everywhere.webp`,
          imageCaption: `Matter is everywhere. Earth has all 3 states. Your body has all 3. Your home does too. The universe = matter.`,
          vocab: [
            { word: `everywhere`,     definition: `In all places. Matter is EVERYWHERE around us.`,
              audioPrompt: `Everywhere, {name}, means in all places. Matter is everywhere. In your room, your home, the outdoors, the sky, the ocean, the ground, your body, your food, even in outer space. The whole universe is mostly matter and energy. Once you know matter, you start noticing it everywhere. It's no longer just 'stuff' — it's the building blocks of reality.` },
            { word: `building blocks`, definition: `The basic parts something is made of. Matter is the BUILDING BLOCKS of the physical universe.`,
              audioPrompt: `Building blocks, {name}, are the basic parts something is made of. Matter is the building blocks of the physical universe. Like LEGO bricks for the whole world. Every solid, liquid, and gas is made of matter. Scientists study matter to figure out how it works — and how to build new things from it.` },
            { word: `physical world`, definition: `Everything you can touch, see, or sense. Matter makes up the PHYSICAL WORLD.`,
              audioPrompt: `The physical world, {name}, is everything you can touch, see, or sense. It's the world of objects, places, and things. Matter makes up the physical world. (Thoughts and feelings aren't matter — they're something different.) When you study matter, you're studying how the physical world WORKS at the most basic level.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `Matter has THREE main states — SOLID, LIQUID, and GAS.`,
              matchPhrase: `Yes! Solid (holds shape), liquid (flows and takes container shape), gas (spreads out and fills space). All matter is in one of these three states.`,
              correctMatch: `fact` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `WATER can be ALL THREE states — ice (solid), water (liquid), and steam (gas) — depending on temperature.`,
              matchPhrase: `True! Same water, different temperatures, different states. Below 32°F = ice. Between 32-212°F = liquid water. Above 212°F = steam. Temperature controls it.`,
              correctMatch: `fact` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `AIR is NOTHING — it isn't matter and doesn't take up space.`,
              matchPhrase: `Not at all! Air is definitely matter. It has weight (small but real). It takes up space (that's why balloons inflate). You just can't SEE it. Invisible doesn't mean nothing.`,
              correctMatch: `myth` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `SOLIDS can NEVER become liquids or gases — once a solid, always a solid.`,
              matchPhrase: `Definitely not! Solids can change states. Heat ice = liquid water. Heat metal hot enough = liquid metal. Cool a gas enough = liquid or solid. Matter changes with temperature.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is MATTER?`,
              options: [`A type of food`, `Anything that has WEIGHT and takes up SPACE`, `Only things you can see`, `A board game`],
              correctIndex: 1,
              explanation: `Matter is anything that has weight and takes up space. Rocks, water, air, you — all matter. The whole physical universe is made of matter.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `How many STATES of matter are there?`,
              options: [`One`, `THREE — solid, liquid, and gas`, `A hundred`, `Two`],
              correctIndex: 1,
              explanation: `Three! Solid (holds shape), liquid (flows), gas (spreads out). These are the three main states. (Scientists have also discovered some unusual states, but solid/liquid/gas are the main ones.)` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which of these is a LIQUID?`,
              options: [`A rock`, `Water`, `Air`, `A pencil`],
              correctIndex: 1,
              explanation: `Water! Liquids flow and take the shape of their container. Rocks are solid (hold shape). Air is gas (spreads out). Pencils are solid (hold shape).` },
            { id: `l11-q4`, format: `true-false`,
              question: `Gases like AIR are matter — even though you can't see them, they still have weight and take up space.`,
              correctAnswer: true,
              explanation: `True! Air is definitely matter. It has tiny weight and takes up space (balloons inflate, sails catch wind). Invisible doesn't mean it isn't matter.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `What controls whether matter is solid, liquid, or gas? ___.`,
              options: [`temperature`, `taste`, `color`, `loudness`],
              correctIndex: 0,
              explanation: `Temperature! Cold = solid. Warm = liquid. Hot = gas. Water at 30°F is ice. At 70°F it's liquid water. At 250°F it's steam. Temperature controls the state.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `When ICE melts and becomes WATER, what's happening?`,
              options: [`Nothing important`, `SOLID is changing into LIQUID because of warmer temperature`, `Magic`, `The ice is disappearing`],
              correctIndex: 1,
              explanation: `Solid is changing into liquid! The same water just changed states from solid to liquid. Heat melts ice. Same matter, different state.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. People work with matter EVERY DAY in amazing ways. CHEFS turn solid butter into liquid by melting it, then mix flour (solid) and water (liquid) to make dough (solid). FACTORIES heat solid metal until it's liquid, pour it into shapes, and cool it back into solid cars and tools. SCIENTISTS create new materials by combining matter in clever ways. Even your body is constantly changing matter — solid food becomes liquid in your stomach, gas (oxygen) becomes part of your blood. Matter is being changed all around you — every minute of every day.`,
          familyAdventure: `Be MATTER SCIENTISTS together. Find ONE example of each state in your kitchen: 1) A SOLID — a piece of fruit, a cup, an ice cube. 2) A LIQUID — water, milk, juice. 3) A GAS — the air, or steam from boiling water. Then try CHANGING states. Melt an ice cube. Boil water and watch the steam. Notice how all three states show up in everyday cooking.`,
          creativePrompt: `Draw THREE BOXES on paper. Label them SOLID, LIQUID, and GAS. In each box, draw at least THREE examples of that state. Show how they're different. (Solids: rocks, books, pencils. Liquids: water, juice, ocean. Gases: air, steam, balloon gas.) Notice — matter is EVERYWHERE around you.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know about MATTER — the stuff EVERYTHING in the universe is made of. SOLIDS hold their shape. LIQUIDS flow and take container shapes. GASES spread out and fill space. And matter can CHANGE states with temperature. You're seeing the world in a whole new way now. Every solid, liquid, and gas around you is matter — and you understand it. See you next lesson!`,
          badge: `matter-explorer`,
          badgeName: `Matter Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L11] Loaded: "Matter: Solid, Liquid, Gas" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
