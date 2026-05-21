// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L11 — Matter: Solid, Liquid, Gas
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-PS1-1
// REWRITE v2 (May 2026): Grade 1 accessible, SOLID / LIQUID / GAS 3-bucket
// identification game — perfect textbook fit, the lesson is built around these
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Time to zoom out even further! Today we ask the BIG question — what is EVERYTHING made of? The answer is MATTER! Matter is the STUFF that makes up the universe! Rocks, water, air, you, me, the stars — all matter! And it comes in three main forms — SOLID, LIQUID, and GAS! Let's dive in!`,
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
            `Look around right now, {name}! Everything you see is made of MATTER!`,
            `Your chair! The floor! Your hands! The air in the room (yes, even air!)! The water in a glass! Your dog! A rock outside! The Earth! The moon! The stars! ALL of it is matter! MATTER is anything that takes up SPACE and has WEIGHT! If you can touch it, smell it, see it, or it pushes against your hand — it's matter! The whole universe is made of matter and energy!`,
          ],
          image: `/explorer-assets/science/l11-s1-everything-matter.webp`,
          imageCaption: `Everything around you is MATTER!`,
          vocab: [
            { word: `matter`,         definition: `Anything that has weight and takes up space.`,
              audioPrompt: `Matter is anything that has weight and takes up space. If you can hold it, push it, or feel it — it's matter. Rocks. Water. Even invisible air. The whole physical universe is matter. One of the BIG ideas in science!` },
            { word: `takes up space`, definition: `Has size.`,
              audioPrompt: `Takes up space means has size — even tiny size. A pencil takes up space. An ant takes up space. Even invisible things like air take up space — that's why you can fill a balloon with it!` },
            { word: `weight`,         definition: `How heavy something is.`,
              audioPrompt: `Weight is how heavy something is. Matter has weight — even if just a tiny bit. A feather has tiny weight. A car has lots of weight. Air has weight too — but it's spread out so we don't feel it!` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `State 1: SOLID`,
          paragraphs: [
            `The first state of matter is SOLID! Solids HOLD THEIR SHAPE!`,
            `A rock stays rock-shaped! A pencil stays pencil-shaped! A book doesn't melt into a puddle when you set it down! Solids are FIRM! You can hold them! You can pick them up! They don't flow! Solids also have a definite SIZE — they don't change size by themselves! Examples — rocks, wood, metal, ice, plastic, your teeth, your bones, this device you're reading on! Most things you can pick up are solids!`,
          ],
          image: `/explorer-assets/science/l11-s2-solid.webp`,
          imageCaption: `Solids hold their shape!`,
          vocab: [
            { word: `solid`, definition: `Matter that holds its shape and doesn't flow.`,
              audioPrompt: `A solid is matter that holds its shape and doesn't flow. If you put a solid on a table, it stays in that shape. Rocks, wood, metal, glass, plastic, ice — all solids. Firm. Easy to pick up and hold!` },
            { word: `shape`, definition: `The form something has.`,
              audioPrompt: `Shape is the form something has. Round, square, long, irregular. Solids keep their shape. A rock doesn't suddenly turn into a different shape on its own. That's a key feature of solids!` },
            { word: `firm`,  definition: `Hard and steady.`,
              audioPrompt: `Firm means hard and steady. Solids are firm. You can push on a rock without it changing shape. You can stand on the floor without sinking through. Even soft solids hold their basic shape!` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `State 2: LIQUID`,
          paragraphs: [
            `The second state is LIQUID! Liquids FLOW!`,
            `Pour water from a cup! It moves! It splashes! It takes the SHAPE of whatever container holds it! Round bowl? Round water! Tall glass? Tall water! Liquids can be POURED! They can SPLASH! They flow downhill! Liquids have definite SIZE (you have the same amount of water whether it's in a bowl or a glass) but they DON'T have a definite shape! Examples — water, milk, juice, soup, oil, blood, oceans, rivers, lava!`,
          ],
          image: `/explorer-assets/science/l11-s3-liquid.webp`,
          imageCaption: `Liquids flow! Take the shape of containers!`,
          vocab: [
            { word: `liquid`,    definition: `Matter that flows and takes the shape of its container.`,
              audioPrompt: `A liquid is matter that flows and takes the shape of its container. Water, milk, juice, oil — all liquids. They can be poured. They splash. They take the shape of whatever holds them!` },
            { word: `flow`,      definition: `To move smoothly.`,
              audioPrompt: `To flow is to move smoothly. Liquids flow. You can see water flow in a river. Pour milk and it flows. Flowing is what makes liquids different from solids. Solids don't flow. Liquids do!` },
            { word: `container`, definition: `Something that holds matter.`,
              audioPrompt: `A container is something that holds matter. Bowls, cups, bottles. Liquids take the shape of whatever container holds them. Pour water into a square box — water becomes square. Pour into a round cup — round!` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `State 3: GAS`,
          paragraphs: [
            `The third state is GAS! Gases SPREAD OUT to fill all the space they can!`,
            `Air is the most common gas! It's all around you! It fills every part of every room — even spaces you can't see! Gases USUALLY can't be seen! You can't see air! You can't see most gases! But they're real — and they're matter! Gases have NO definite shape AND no definite size! They spread out as much as they can! Other examples — STEAM, HELIUM in balloons, CARBON DIOXIDE that comes out when you breathe!`,
          ],
          image: `/explorer-assets/science/l11-s4-gas.webp`,
          imageCaption: `Gases spread out to fill space! Usually invisible!`,
          vocab: [
            { word: `gas`,        definition: `Matter that spreads out to fill all available space.`,
              audioPrompt: `A gas is matter that spreads out to fill all available space. Air is a gas. So is steam, helium, and many others. Gases are usually invisible. They expand to fill wherever they are!` },
            { word: `invisible`,  definition: `Cannot be seen.`,
              audioPrompt: `Invisible means cannot be seen. Most gases are invisible. You can't see the air around you, but it's everywhere. Just because they're invisible doesn't mean they're not real. They're matter!` },
            { word: `spread out`, definition: `To expand and fill more space.`,
              audioPrompt: `Spread out means to expand and fill more space. Gases spread out. Spray perfume and soon you smell it everywhere — that's the gas spreading. Open a soda — fizz is gas escaping. Gases love to spread!` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Matter Can CHANGE Form`,
          paragraphs: [
            `Here's the SUPER cool part — matter can CHANGE between states! The same stuff can be solid, liquid, OR gas — depending on TEMPERATURE!`,
            `Water is the best example! Below 32 degrees Fahrenheit — water is SOLID (ice)! Between 32 and 212 — water is LIQUID! Above 212 — water becomes GAS (steam)! Same water! Different temperatures! Different states! This works for almost everything! Even METAL melts into liquid if you heat it hot enough! Even GASES can become liquid if you cool them down enough! Matter is flexible!`,
          ],
          image: `/explorer-assets/science/l11-s5-changes.webp`,
          imageCaption: `Matter changes states with temperature!`,
          vocab: [
            { word: `change states`, definition: `Matter switching between solid, liquid, and gas.`,
              audioPrompt: `Change states means matter switching between solid, liquid, and gas. Water can be all three. Ice melts into water. Water boils into steam. Steam cools back into water. Temperature is what changes it!` },
            { word: `melt`,          definition: `Solid turning into liquid by getting warmer.`,
              audioPrompt: `Melt means when solid turns into liquid by getting warmer. Ice melts into water when it warms up. Butter melts in a hot pan. Even metal melts at very high temperatures. Solid becoming liquid!` },
            { word: `boil`,          definition: `Liquid turning into gas by getting hot.`,
              audioPrompt: `Boil means when liquid turns into gas by getting hot. Water boils into steam at 212 degrees Fahrenheit. Bubbles in the water are gas forming. Above boiling water, you see steam — water as gas!` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Matter Is Everywhere`,
          paragraphs: [
            `Once you know about matter, you see it EVERYWHERE!`,
            `The PLANET Earth has all three states — SOLID ground, LIQUID oceans, GAS atmosphere! Your body has all three — SOLID bones, LIQUID blood, GAS in your lungs! Your home has all three — SOLID walls, LIQUID water in pipes, GAS air to breathe! Even space has matter — though some parts of space have very little! Understanding matter helps you understand everything in the physical world!`,
          ],
          image: `/explorer-assets/science/l11-s6-everywhere.webp`,
          imageCaption: `Matter is everywhere! Earth, body, home — all 3 states!`,
          vocab: [
            { word: `everywhere`,      definition: `In all places.`,
              audioPrompt: `Everywhere means in all places. Matter is everywhere. In your room, your home, the outdoors, the sky, the ocean. The whole universe is matter and energy. Once you know matter, you notice it everywhere!` },
            { word: `building blocks`, definition: `The basic parts something is made of.`,
              audioPrompt: `Building blocks are the basic parts something is made of. Matter is the building blocks of the physical universe. Like LEGO bricks for the whole world. Scientists study matter to build new things from it!` },
            { word: `physical world`,  definition: `Everything you can touch, see, or sense.`,
              audioPrompt: `The physical world is everything you can touch, see, or sense. Matter makes up the physical world. When you study matter, you're studying how the physical world WORKS at the most basic level!` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things. Drag each one — is it SOLID (holds shape!), LIQUID (flows!), or GAS (spreads out!)?`,
          buckets: [
            { id: `solid`,  label: `🪨 SOLID`,  color: `#92400E` },
            { id: `liquid`, label: `💧 LIQUID`, color: `#0EA5E9` },
            { id: `gas`,    label: `💨 GAS`,    color: `#E5E7EB` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `A wooden chair that stays the same shape on the floor`,
              matchPhrase: `Yes! SOLID! Chairs hold their shape. They don't flow or spread. Firm and steady!`,
              correctMatch: `solid` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `Orange juice being poured from a pitcher into a cup`,
              matchPhrase: `Right! LIQUID! Juice flows. Takes the shape of the cup. Pourable. Splashable!`,
              correctMatch: `liquid` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `Steam rising from a hot cup of cocoa and spreading into the air`,
              matchPhrase: `Yes! GAS! Steam is water as gas. Spreads out into the room. Usually invisible!`,
              correctMatch: `gas` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `An ice cube sitting on the kitchen counter`,
              matchPhrase: `Right! SOLID! Ice is frozen water — a solid. Holds its shape. (Until it melts to liquid!)`,
              correctMatch: `solid` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is MATTER?`,
              options: [`A type of food`, `Anything that has WEIGHT and takes up SPACE`, `Only things you can see`, `A board game`],
              correctIndex: 1,
              explanation: `Matter is anything that has weight and takes up space. Rocks, water, air, you — all matter!` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `How many STATES of matter are there?`,
              options: [`One`, `THREE — solid, liquid, and gas`, `A hundred`, `Two`],
              correctIndex: 1,
              explanation: `Three! Solid (holds shape), liquid (flows), gas (spreads out). The three main states!` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which of these is a LIQUID?`,
              options: [`A rock`, `Water`, `Air`, `A pencil`],
              correctIndex: 1,
              explanation: `Water! Liquids flow and take the shape of their container. Rocks and pencils are solid. Air is gas!` },
            { id: `l11-q4`, format: `true-false`,
              question: `Gases like AIR are matter — even though you can't see them, they still have weight and take up space.`,
              correctAnswer: true,
              explanation: `True! Air is definitely matter. It has tiny weight and takes up space. Invisible doesn't mean nothing!` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `What controls whether matter is solid, liquid, or gas? ___.`,
              options: [`temperature`, `taste`, `color`, `loudness`],
              correctIndex: 0,
              explanation: `Temperature! Cold = solid. Warm = liquid. Hot = gas. Temperature controls the state!` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `When ICE melts and becomes WATER, what's happening?`,
              options: [`Nothing important`, `SOLID is changing into LIQUID because of warmer temperature`, `Magic`, `The ice is disappearing`],
              correctIndex: 1,
              explanation: `Solid changing into liquid! Same water, different state. Heat melts ice!` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! People work with matter EVERY DAY in amazing ways! CHEFS turn solid butter into liquid by melting it, then mix flour (solid) and water (liquid) to make dough (solid)! FACTORIES heat solid metal until it's liquid, pour it into shapes, and cool it back into solid cars and tools! SCIENTISTS create new materials by combining matter cleverly! Even your body is constantly changing matter — solid food becomes liquid in your stomach!`,
          familyAdventure: `Be MATTER SCIENTISTS together! Find ONE example of each state in your kitchen: 1) A SOLID — a piece of fruit, a cup, an ice cube. 2) A LIQUID — water, milk, juice. 3) A GAS — the air, or steam from boiling water! Then try CHANGING states! Melt an ice cube! Boil water and watch the steam! Notice how all three states show up in everyday cooking!`,
          creativePrompt: `Draw THREE BOXES on paper! Label them SOLID, LIQUID, and GAS! In each box, draw at least THREE examples of that state! For a 3-sentence floor: write one sentence describing each of the three states. For a 5-sentence stretch: write a story about a piece of water that changes from ice → liquid → steam → liquid → ice over a day!`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know about MATTER — the stuff EVERYTHING in the universe is made of! SOLIDS hold their shape! LIQUIDS flow and take container shapes! GASES spread out and fill space! And matter can CHANGE states with temperature! You're seeing the world in a whole new way now! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L11] Loaded: "Matter" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
