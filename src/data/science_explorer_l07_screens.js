// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L07 — Earth: Our Home Planet
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-ESS2-2 / 5-ESS2-1 (Earth's systems and materials)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L07 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-07`,
      title:     `Earth: Our Home Planet`,
      duration:  12,
      xpReward:  50,
      badge:     `earth-explorer`,
      badgeName: `Earth Explorer`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! We've explored plants, animals, and your body. Now we ZOOM OUT — way out. To the planet we all live on: EARTH. Earth is our HOME. The only place we know of with living things. It's a giant ball spinning through space with land, water, air, and EVERYTHING ALIVE — all working together. Today, we look at Earth the way astronauts do. Let's go!`,
          headline: `Earth: Our Home Planet`,
          subtitle: `The amazing planet we all share — and what makes it special`,
          visual: `/explorer-assets/science/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Blue Marble in Space`,
          paragraphs: [
            `If you could fly really far up into space and look back, you'd see Earth — a BIG BLUE BALL.`,
            `It's covered in blue water, brown and green land, and white swirling clouds. Astronauts who've seen it from space call it "the blue marble." Earth is a PLANET. A huge round ball traveling through space around our star (the SUN). Earth is the only planet in our whole solar system that has LIFE. As far as we know, it might be the only place with life in the whole universe. That makes Earth pretty special.`,
          ],
          image: `/explorer-assets/science/l07-s1-earth-from-space.webp`,
          imageCaption: `Earth from space — a blue marble. The only place we know with living things. Our home.`,
          vocab: [
            { word: `Earth`,          definition: `The planet we live on. EARTH is a big blue ball traveling around the sun.`,
              audioPrompt: `Earth, {name}, is the planet we live on. It's a big blue ball traveling around the sun. Earth has land, water, air, and millions of kinds of living things — including us. It's the only place we know of with life. From space, Earth looks like a blue marble — peaceful, beautiful, and alone in the dark of space.` },
            { word: `planet`,         definition: `A big round ball traveling around a star. Earth is a PLANET.`,
              audioPrompt: `A planet, {name}, is a big round ball traveling around a star. Earth is a planet. So is Mars, Jupiter, Saturn, Venus, and the others in our solar system. Planets are huge — much bigger than they look. But planets are tiny compared to stars. The sun, our star, is way bigger than Earth.` },
            { word: `space`,          definition: `The huge empty area beyond Earth's air. Stars and planets float in SPACE.`,
              audioPrompt: `Space, {name}, is the huge empty area beyond Earth's air. Stars, planets, moons, and galaxies all float in space. There's no air in space — that's why astronauts wear special suits. Space is mostly empty, but it's full of amazing things to discover. Earth floats in space too — even though it doesn't feel like floating.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `LAND: Where We Walk`,
          paragraphs: [
            `Earth has LAND — the solid ground we walk on, build on, and grow things on.`,
            `Land comes in many forms. MOUNTAINS — tall rocky peaks. VALLEYS — low places between mountains. FORESTS — full of trees. DESERTS — dry, sandy, and warm. PLAINS — wide, flat grasslands. ISLANDS — pieces of land with water all around them. CONTINENTS — the seven HUGE pieces of land (North America, South America, Africa, Europe, Asia, Australia, Antarctica). Most living things live ON land. So do we.`,
          ],
          image: `/explorer-assets/science/l07-s2-land.webp`,
          imageCaption: `Land: mountains, valleys, forests, deserts, plains, islands, continents. Where most living things live.`,
          vocab: [
            { word: `land`,           definition: `The solid ground on Earth. We walk and build on LAND.`,
              audioPrompt: `Land, {name}, is the solid ground on Earth. It's where we walk, build, plant gardens, and live. Land is made of soil, rock, and sand. Different parts of Earth's land look different — some flat, some hilly, some sandy, some rocky. About a third of Earth is land. The rest is water.` },
            { word: `mountain`,       definition: `A very tall hill made of rock. MOUNTAINS reach high into the sky.`,
              audioPrompt: `A mountain, {name}, is a very tall hill made of rock. Mountains can be small or HUGE. The tallest mountain on Earth — Mount Everest — is so tall its top reaches into the clouds. Mountains form over millions of years as the Earth's surface pushes up. Some mountains are still growing taller, very slowly.` },
            { word: `continent`,      definition: `One of seven HUGE pieces of land on Earth. There are 7 CONTINENTS.`,
              audioPrompt: `A continent, {name}, is one of seven huge pieces of land on Earth. There are seven: North America (where the United States is), South America, Africa, Europe, Asia, Australia, and Antarctica. Together, the continents are where all of Earth's land lives. Each continent has its own animals, plants, and cultures.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WATER: The Blue Stuff`,
          paragraphs: [
            `MORE than HALF of Earth is covered in WATER.`,
            `Big OCEANS make up most of it — five huge oceans covering the planet. Smaller LAKES sit on land. RIVERS flow from mountains to oceans. STREAMS are smaller rivers. GLACIERS are massive bodies of FROZEN water on mountains and at the poles. Even snow and ice are water. Water is what makes Earth look blue from space. And every single living thing on Earth needs water to survive.`,
          ],
          image: `/explorer-assets/science/l07-s3-water.webp`,
          imageCaption: `Water covers MORE than half of Earth. Oceans, lakes, rivers, glaciers. Why we look blue from space.`,
          vocab: [
            { word: `ocean`,          definition: `A huge body of salty water. Earth has FIVE OCEANS.`,
              audioPrompt: `An ocean, {name}, is a huge body of salty water. Earth has five oceans — the Pacific (the biggest), the Atlantic, the Indian, the Arctic, and the Southern. The Pacific Ocean is bigger than ALL the land on Earth combined. Oceans are home to whales, fish, dolphins, sharks, and countless other living things.` },
            { word: `river`,          definition: `Flowing water that travels from mountains toward oceans.`,
              audioPrompt: `A river, {name}, is flowing water that travels from mountains toward oceans. Rivers carry rainwater and melted snow downhill. They give water to animals, plants, and people along the way. Big rivers like the Amazon and the Nile are home to many animals and plants. Some rivers are tiny — small enough to step over. All are important.` },
            { word: `glacier`,        definition: `A huge body of FROZEN water. GLACIERS are on mountains and at the poles.`,
              audioPrompt: `A glacier, {name}, is a huge body of frozen water — basically a giant slow-moving river of ice. Glaciers are on tall mountains and at the North and South Poles. Some glaciers are MILES long. They're slowly melting as Earth warms up — which is a big change scientists are studying.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `AIR: The Stuff We Breathe`,
          paragraphs: [
            `Earth is wrapped in a layer of AIR called the ATMOSPHERE. You can't see it, but it's there.`,
            `Air is full of GASES — invisible stuff. The most important one is OXYGEN, which we breathe. Air also has nitrogen, carbon dioxide, and water vapor. The atmosphere does AMAZING jobs. It keeps Earth WARM enough for life. It blocks dangerous rays from the sun. It makes weather — wind, rain, clouds, snow. Without our atmosphere, Earth would be a cold, dead rock. The air keeps us alive in ways most people never think about.`,
          ],
          image: `/explorer-assets/science/l07-s4-air.webp`,
          imageCaption: `Air = atmosphere. Wrapped around Earth. Keeps us warm, blocks sun rays, makes weather. Invisible hero.`,
          vocab: [
            { word: `air`,            definition: `The invisible gases all around us. We breathe AIR every moment.`,
              audioPrompt: `Air, {name}, is the invisible gases all around us. We breathe it every moment. Air is mostly nitrogen and oxygen, plus other gases. You can't see air, but you can feel it. Wave your hand — you feel air pushing against it. Wind is just moving air. Even though air is invisible, it's everywhere — and we need it to live.` },
            { word: `atmosphere`,     definition: `The layer of air wrapped around Earth. The ATMOSPHERE keeps us alive.`,
              audioPrompt: `The atmosphere, {name}, is the layer of air wrapped around Earth. It goes up about 60 miles high before disappearing into space. The atmosphere does important jobs — keeps Earth warm, gives us oxygen, blocks dangerous sun rays, makes weather. Without it, Earth would be like the moon — a dead rock with no life.` },
            { word: `gases`,          definition: `Stuff that floats around invisibly. Air is made of GASES like oxygen.`,
              audioPrompt: `Gases, {name}, are stuff that floats around invisibly. You usually can't see, feel, or smell them. Air is made of many gases mixed together. Oxygen — we breathe. Nitrogen — most of the air. Carbon dioxide — plants use it. Water vapor — eventually becomes rain. All invisible. All important.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `A LIVING Planet`,
          paragraphs: [
            `Here's what makes Earth so special — it's ALIVE. Bursting with life everywhere you look.`,
            `Living things cover almost every inch. Animals in forests, fish in oceans, bugs in soil, plants on every continent, even bacteria in places nothing else can live. Earth is the ONLY planet we know of that has ANY living things. Scientists have looked at Mars, Venus, the moons of Jupiter — no sign of life so far. We're the LUCKY ones. Earth got the right mix — water, air, warmth, sun — and life happened. We share this living planet with millions of other living things.`,
          ],
          image: `/explorer-assets/science/l07-s5-living-planet.webp`,
          imageCaption: `Earth is ALIVE. Millions of living things. The only planet we know with ANY life. We share it.`,
          vocab: [
            { word: `living planet`,  definition: `A planet full of living things. Earth is the only LIVING PLANET we know.`,
              audioPrompt: `A living planet, {name}, is a planet full of living things. Earth is the only living planet we know in the whole universe. Scientists are still searching — they've looked at Mars, Venus, the moons of Jupiter. So far, no life found anywhere else. We're the lucky ones. Living on the one place with life makes Earth incredibly special.` },
            { word: `the only`,       definition: `The single one. Earth is THE ONLY planet we know with life.`,
              audioPrompt: `The only, {name}, means the single one. Earth is the only planet we know with life. There are billions of planets out there in space. Maybe some have life too. Scientists are still searching. But for now — Earth is the only one. That makes our home incredibly precious. The one place in the universe where life exists.` },
            { word: `share`,          definition: `Use together. We SHARE Earth with millions of other living things.`,
              audioPrompt: `To share, {name}, means to use together. We share Earth with millions of other living things. Plants. Animals. Fungi. Bacteria. None of us own Earth — we all live here together. That's why caring for nature matters. We're sharing this planet. Treating other living things with respect — and protecting their habitats — keeps Earth healthy for everyone.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Caring for Our Home`,
          paragraphs: [
            `Since Earth is our ONLY HOME — and the only one with life — we should TAKE CARE of it.`,
            `Small choices add up. Don't waste WATER (turn off the tap when brushing your teeth). Don't waste FOOD. Recycle when you can — paper, cans, plastic. Plant trees if you can. Pick up litter you see. Use less plastic. Walk or bike instead of driving when possible. Care for animals and bugs (even small ones). Spend time in nature so you love it. Every living thing on Earth depends on Earth staying healthy. Including you. Including the next generation. We're all in this together.`,
          ],
          image: `/explorer-assets/science/l07-s6-protect-earth.webp`,
          imageCaption: `Our only home — let's take care of it. Small choices add up. We're all in this together.`,
          vocab: [
            { word: `take care`,      definition: `To look after with kindness. We must TAKE CARE of Earth.`,
              audioPrompt: `To take care, {name}, means to look after with kindness. We must take care of Earth. It's our only home — and the only place we know with life. Small daily choices add up. Don't waste. Recycle. Pick up litter. Care for animals. Spend time outside. Caring for Earth is caring for yourself, your family, and all living things.` },
            { word: `recycle`,        definition: `Use something again. RECYCLING reduces waste and saves materials.`,
              audioPrompt: `To recycle, {name}, means to use something again. Instead of throwing things in the trash, we send them to be turned into new things. Paper becomes new paper. Plastic becomes new plastic. Cans become new cans. Recycling reduces waste, saves energy, and protects Earth. Almost every house has recycling bins now.` },
            { word: `nature`,         definition: `The natural world — plants, animals, mountains, oceans. NATURE is all around us.`,
              audioPrompt: `Nature, {name}, is the natural world — plants, animals, mountains, oceans, forests, beaches, all of it. Nature is all around us, even in cities (parks, trees, birds, bugs). Spending time in nature is one of the best things you can do — for your body, mind, and love of Earth. People who love nature take better care of it.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `MORE than half of Earth's surface is covered with WATER.`,
              matchPhrase: `Yes! Oceans, lakes, rivers, glaciers — water covers about 70% of Earth's surface. That's why Earth looks blue from space. Water is everywhere.`,
              correctMatch: `fact` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `Earth is wrapped in a layer of AIR called the atmosphere — invisible but everywhere.`,
              matchPhrase: `True! The atmosphere wraps around Earth like an invisible blanket. It gives us oxygen, blocks dangerous sun rays, keeps Earth warm, and makes weather. Without it, no life.`,
              correctMatch: `fact` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `Earth is FLAT — like a pancake floating in space.`,
              matchPhrase: `Not at all! Earth is ROUND — a big ball. Astronauts have seen it from space and taken pictures. It's been proven for hundreds of years. Earth is a round planet.`,
              correctMatch: `myth` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `Earth NEVER CHANGES — it's been exactly the same for billions of years.`,
              matchPhrase: `Definitely not! Earth is always changing. Mountains form. Continents drift very slowly. Weather changes. Oceans rise and fall. Earth has been changing for billions of years and still is.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is EARTH?`,
              options: [`A flat pancake`, `A planet — a big round ball that travels around the sun`, `A star`, `A spaceship`],
              correctIndex: 1,
              explanation: `Earth is a planet — a big round ball traveling around the sun. From space it looks like a blue marble because of all the water. It's the only planet we know of with life.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `How many CONTINENTS does Earth have?`,
              options: [`Three`, `Seven — North America, South America, Africa, Europe, Asia, Australia, Antarctica`, `Two`, `One hundred`],
              correctIndex: 1,
              explanation: `Seven! North America, South America, Africa, Europe, Asia, Australia, Antarctica. The huge pieces of land where most living things live.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `Roughly how much of Earth's surface is WATER?`,
              options: [`A little bit`, `More than HALF — about 70%`, `None`, `Just the lakes`],
              correctIndex: 1,
              explanation: `About 70%! More than half of Earth is water. Five oceans, plus lakes, rivers, glaciers. That's why Earth looks BLUE from space.` },
            { id: `l07-q4`, format: `true-false`,
              question: `The ATMOSPHERE is the layer of air wrapped around Earth — it keeps us alive.`,
              correctAnswer: true,
              explanation: `True! The atmosphere gives us oxygen to breathe, blocks dangerous sun rays, keeps Earth warm, and makes weather. Without it, Earth would be a dead rock.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `Earth is the only planet we know that has any ___.`,
              options: [`life`, `noise`, `mountains`, `homework`],
              correctIndex: 0,
              explanation: `Life! Earth is the only planet we know of with ANY living things. Scientists have looked at other planets — no life found yet. That makes Earth incredibly special.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `Why should we TAKE CARE of Earth?`,
              options: [`We shouldn't`, `It's our only home — and the only place with life we know of`, `Just because`, `Adults said so`],
              correctIndex: 1,
              explanation: `Earth is our only home. The only place in the universe we know of with life. Small choices — recycling, saving water, picking up litter — add up. We're sharing this planet.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. ASTRONAUTS who've been to space and looked back at Earth often describe the same feeling — they call it the OVERVIEW EFFECT. From space, you can't see borders between countries. You can't see fights, or money, or fences. You just see one beautiful blue planet — fragile, alone, precious. Many astronauts come back from space caring MORE about Earth than they ever did before. Caring for our home isn't just for scientists. It's for all of us. We're all on this blue marble together.`,
          familyAdventure: `Take an EARTH WALK together. Go outside (a backyard, park, or just down your street). As a family, point out: 1) one piece of LAND (a hill, garden, sidewalk), 2) one body or source of WATER (puddle, sprinkler, stream, pond), 3) one sign of AIR (wind in trees, clouds, breeze on skin), 4) one LIVING THING (plant, bird, bug, person). Earth's four big parts — right around you, always.`,
          creativePrompt: `Draw EARTH on paper. Make it a big circle. Inside, add: some BLUE for oceans, GREEN/BROWN for land, WHITE for clouds. Then around the outside, draw your house. Label each part of Earth (land, water, air, living things). Show how YOU are part of Earth, not separate from it. Hang it up.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know about EARTH — our home planet. You know it has LAND (mountains, valleys, continents), WATER (oceans, lakes, rivers), AIR (the atmosphere keeps us alive), and LIFE (the only planet with any!). You know caring for Earth is caring for ourselves. Next time you go outside, look around with new eyes. You're standing on the most amazing planet we know. See you next lesson!`,
          badge: `earth-explorer`,
          badgeName: `Earth Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L07] Loaded: "Earth: Our Home Planet" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
