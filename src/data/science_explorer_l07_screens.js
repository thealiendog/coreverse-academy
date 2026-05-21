// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L07 — Earth: Our Home Planet
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-ESS2-2 / 5-ESS2-1
// REWRITE v2 (May 2026): Grade 1 accessible, LAND / WATER / AIR 3-bucket
// identification game tests sorting Earth's features into the 3 main parts
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! We've explored plants, animals, and your body! Now we ZOOM OUT — way out! To the planet we all live on: EARTH! Earth is our HOME! The only place we know of with living things! A giant ball spinning through space with land, water, air, and EVERYTHING ALIVE! Let's go!`,
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
            `If you could fly really far up into space and look back, you'd see Earth — a BIG BLUE BALL!`,
            `It's covered in blue water, brown and green land, and white swirling clouds! Astronauts who've seen it from space call it "the blue marble"! Earth is a PLANET — a huge round ball traveling through space around our star (the SUN)! Earth is the only planet in our whole solar system that has LIFE! As far as we know, it might be the only place with life in the whole universe!`,
          ],
          image: `/explorer-assets/science/l07-s1-earth-from-space.webp`,
          imageCaption: `Earth from space — a blue marble! The only place we know with life!`,
          vocab: [
            { word: `Earth`,  definition: `The planet we live on.`,
              audioPrompt: `Earth is the planet we live on. A big blue ball traveling around the sun. Earth has land, water, air, and millions of kinds of living things — including us! From space, Earth looks like a blue marble!` },
            { word: `planet`, definition: `A big round ball traveling around a star.`,
              audioPrompt: `A planet is a big round ball traveling around a star. Earth is a planet. So is Mars, Jupiter, Saturn, Venus. Planets are tiny compared to stars. The sun is way bigger than Earth!` },
            { word: `space`,  definition: `The huge empty area beyond Earth's air.`,
              audioPrompt: `Space is the huge empty area beyond Earth's air. Stars, planets, moons all float in space. There's no air in space — that's why astronauts wear special suits. Earth floats in space too!` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `LAND: Where We Walk`,
          paragraphs: [
            `Earth has LAND — the solid ground we walk on, build on, and grow things on!`,
            `Land comes in many forms! MOUNTAINS — tall rocky peaks! VALLEYS — low places between mountains! FORESTS — full of trees! DESERTS — dry, sandy, warm! PLAINS — wide, flat grasslands! ISLANDS — pieces of land with water all around! CONTINENTS — the SEVEN HUGE pieces of land (North America, South America, Africa, Europe, Asia, Australia, Antarctica)! Most living things live ON land!`,
          ],
          image: `/explorer-assets/science/l07-s2-land.webp`,
          imageCaption: `Land: mountains, valleys, forests, deserts, plains, islands, continents!`,
          vocab: [
            { word: `land`,      definition: `The solid ground on Earth.`,
              audioPrompt: `Land is the solid ground on Earth. Where we walk, build, plant gardens, and live. Made of soil, rock, and sand. Different parts of Earth's land look different. About a third of Earth is land!` },
            { word: `mountain`,  definition: `A very tall hill made of rock.`,
              audioPrompt: `A mountain is a very tall hill made of rock. Mountains can be small or HUGE. The tallest — Mount Everest — reaches into the clouds. Mountains form over millions of years!` },
            { word: `continent`, definition: `One of 7 huge pieces of land on Earth.`,
              audioPrompt: `A continent is one of 7 huge pieces of land on Earth. North America, South America, Africa, Europe, Asia, Australia, Antarctica. Together, they're where all of Earth's land lives!` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WATER: The Blue Stuff`,
          paragraphs: [
            `MORE than HALF of Earth is covered in WATER!`,
            `Big OCEANS make up most of it — five huge oceans covering the planet! Smaller LAKES sit on land! RIVERS flow from mountains to oceans! STREAMS are smaller rivers! GLACIERS are massive bodies of FROZEN water on mountains and at the poles! Even snow and ice are water! Water is what makes Earth look blue from space! And every single living thing on Earth needs water to survive!`,
          ],
          image: `/explorer-assets/science/l07-s3-water.webp`,
          imageCaption: `Water covers MORE than half of Earth! Why we look blue from space!`,
          vocab: [
            { word: `ocean`,   definition: `A huge body of salty water.`,
              audioPrompt: `An ocean is a huge body of salty water. Earth has 5 oceans — the Pacific (biggest!), Atlantic, Indian, Arctic, and Southern. The Pacific is bigger than ALL the land on Earth combined!` },
            { word: `river`,   definition: `Flowing water traveling from mountains to oceans.`,
              audioPrompt: `A river is flowing water that travels from mountains toward oceans. Rivers carry rainwater and melted snow downhill. Give water to animals, plants, and people along the way!` },
            { word: `glacier`, definition: `A huge body of frozen water.`,
              audioPrompt: `A glacier is a huge body of frozen water — basically a giant slow-moving river of ice. Glaciers are on tall mountains and at the North and South Poles. Some are MILES long!` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `AIR: The Stuff We Breathe`,
          paragraphs: [
            `Earth is wrapped in a layer of AIR called the ATMOSPHERE! You can't see it, but it's there!`,
            `Air is full of GASES — invisible stuff! The most important one is OXYGEN, which we breathe! Air also has nitrogen, carbon dioxide, and water vapor! The atmosphere does AMAZING jobs! It keeps Earth WARM enough for life! It blocks dangerous rays from the sun! It makes weather — wind, rain, clouds, snow! Without our atmosphere, Earth would be a cold, dead rock! The air keeps us alive!`,
          ],
          image: `/explorer-assets/science/l07-s4-air.webp`,
          imageCaption: `Air = atmosphere! Keeps us warm, blocks sun rays, makes weather!`,
          vocab: [
            { word: `air`,        definition: `The invisible gases all around us.`,
              audioPrompt: `Air is the invisible gases all around us. We breathe it every moment. Mostly nitrogen and oxygen. You can't see air, but you can feel it. Wave your hand — you feel air pushing back!` },
            { word: `atmosphere`, definition: `The layer of air wrapped around Earth.`,
              audioPrompt: `The atmosphere is the layer of air wrapped around Earth. Goes up about 60 miles high. Keeps Earth warm. Gives us oxygen. Blocks dangerous sun rays. Makes weather. Without it, no life!` },
            { word: `gases`,      definition: `Stuff that floats around invisibly.`,
              audioPrompt: `Gases are stuff that floats around invisibly. You usually can't see, feel, or smell them. Air is made of many gases mixed. Oxygen — we breathe. Nitrogen — most of the air. All invisible!` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `A LIVING Planet`,
          paragraphs: [
            `Here's what makes Earth so special — it's ALIVE! Bursting with life everywhere you look!`,
            `Living things cover almost every inch! Animals in forests, fish in oceans, bugs in soil, plants on every continent, even bacteria in places nothing else can live! Earth is the ONLY planet we know of that has ANY living things! Scientists have looked at Mars, Venus, the moons of Jupiter — no sign of life so far! We're the LUCKY ones! Earth got the right mix — water, air, warmth, sun — and life happened!`,
          ],
          image: `/explorer-assets/science/l07-s5-living-planet.webp`,
          imageCaption: `Earth is ALIVE! Millions of living things! The only planet we know with ANY life!`,
          vocab: [
            { word: `living planet`, definition: `A planet full of living things.`,
              audioPrompt: `A living planet is a planet full of living things. Earth is the only living planet we know in the whole universe. Scientists are still searching — so far, no life found anywhere else. We're the lucky ones!` },
            { word: `the only`,      definition: `The single one.`,
              audioPrompt: `The only means the single one. Earth is the only planet we know with life. Billions of planets out there. Maybe some have life too. But for now — Earth is the only one. That makes our home precious!` },
            { word: `share`,         definition: `Use together.`,
              audioPrompt: `To share means to use together. We share Earth with millions of other living things. Plants. Animals. Fungi. Bacteria. None of us own Earth — we all live here together. Caring for nature matters!` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Caring for Our Home`,
          paragraphs: [
            `Since Earth is our ONLY HOME — and the only one with life — we should TAKE CARE of it!`,
            `Small choices add up! Don't waste WATER (turn off the tap when brushing your teeth)! Don't waste FOOD! Recycle when you can — paper, cans, plastic! Plant trees if you can! Pick up litter you see! Use less plastic! Walk or bike instead of driving when possible! Care for animals and bugs! Spend time in nature so you love it! Every living thing on Earth depends on Earth staying healthy! We're all in this together!`,
          ],
          image: `/explorer-assets/science/l07-s6-protect-earth.webp`,
          imageCaption: `Our only home — let's take care of it! Small choices add up!`,
          vocab: [
            { word: `take care`, definition: `To look after with kindness.`,
              audioPrompt: `To take care means to look after with kindness. We must take care of Earth. It's our only home. Small daily choices add up. Don't waste. Recycle. Pick up litter. Care for animals. Spend time outside!` },
            { word: `recycle`,   definition: `Use something again.`,
              audioPrompt: `To recycle means to use something again. Instead of throwing things in the trash, we send them to be turned into new things. Paper becomes new paper. Plastic becomes new plastic. Saves Earth!` },
            { word: `nature`,    definition: `The natural world.`,
              audioPrompt: `Nature is the natural world — plants, animals, mountains, oceans, forests, all of it. All around us, even in cities. Spending time in nature is one of the best things you can do!` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 features of Earth. Drag each one — is it LAND (solid ground!), WATER (blue stuff!), or AIR (invisible gases!)?`,
          buckets: [
            { id: `land`,  label: `🌎 LAND`,  color: `#65A30D` },
            { id: `water`, label: `💧 WATER`, color: `#0EA5E9` },
            { id: `air`,   label: `☁️ AIR`,   color: `#E5E7EB` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `A tall snowy mountain with rocky cliffs`,
              matchPhrase: `Yes! LAND! Mountains are solid ground made of rock. Earth's land has mountains, valleys, plains!`,
              correctMatch: `land` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `The Pacific Ocean stretching out blue and salty`,
              matchPhrase: `Right! WATER! The Pacific is one of Earth's 5 oceans. Salty water covers more than half of Earth!`,
              correctMatch: `water` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `The invisible oxygen all around you that you breathe`,
              matchPhrase: `Yes! AIR! The atmosphere is invisible but everywhere. Gives us oxygen. Keeps Earth warm!`,
              correctMatch: `air` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `A flowing river running from the mountains to the sea`,
              matchPhrase: `Right! WATER! Rivers are flowing fresh water. Travel from mountains to oceans. Part of Earth's water!`,
              correctMatch: `water` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is EARTH?`,
              options: [`A flat pancake`, `A planet — a big round ball that travels around the sun`, `A star`, `A spaceship`],
              correctIndex: 1,
              explanation: `Earth is a planet — a big round ball traveling around the sun! Blue marble in space!` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `How many CONTINENTS does Earth have?`,
              options: [`Three`, `Seven — North America, South America, Africa, Europe, Asia, Australia, Antarctica`, `Two`, `One hundred`],
              correctIndex: 1,
              explanation: `Seven! The huge pieces of land where most living things live!` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `Roughly how much of Earth's surface is WATER?`,
              options: [`A little bit`, `More than HALF — about 70%`, `None`, `Just the lakes`],
              correctIndex: 1,
              explanation: `About 70%! That's why Earth looks BLUE from space!` },
            { id: `l07-q4`, format: `true-false`,
              question: `The ATMOSPHERE is the layer of air wrapped around Earth — it keeps us alive.`,
              correctAnswer: true,
              explanation: `True! Gives us oxygen, blocks sun rays, keeps Earth warm. Without it, Earth would be a dead rock!` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `Earth is the only planet we know that has any ___.`,
              options: [`life`, `noise`, `mountains`, `homework`],
              correctIndex: 0,
              explanation: `Life! Earth is the only planet we know of with ANY living things. Makes it incredibly special!` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `Why should we TAKE CARE of Earth?`,
              options: [`We shouldn't`, `It's our only home — and the only place with life we know of`, `Just because`, `Adults said so`],
              correctIndex: 1,
              explanation: `Earth is our only home. The only place we know with life. Small choices add up!` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! ASTRONAUTS who've been to space and looked back at Earth often describe the same feeling — they call it the OVERVIEW EFFECT! From space, you can't see borders between countries! You can't see fights, or money, or fences! You just see one beautiful blue planet — fragile, alone, precious! Many astronauts come back caring MORE about Earth! We're all on this blue marble together!`,
          familyAdventure: `Take an EARTH WALK together! Go outside (a backyard, park, or just down your street)! As a family, point out: 1) one piece of LAND (a hill, garden, sidewalk)! 2) one body or source of WATER (puddle, sprinkler, stream)! 3) one sign of AIR (wind in trees, clouds, breeze on skin)! 4) one LIVING THING (plant, bird, bug, person)! Earth's parts — right around you, always!`,
          creativePrompt: `Draw EARTH on paper! Make it a big circle! Inside, add: some BLUE for oceans, GREEN/BROWN for land, WHITE for clouds! Then around the outside, draw your house! Label each part of Earth (land, water, air, living things)! For a 3-sentence floor: write one sentence each for land, water, and air. For a 5-sentence stretch: add 2 more sentences about life and YOU on Earth! Hang it up!`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now know about EARTH — our home planet! You know it has LAND (mountains, continents), WATER (oceans, lakes, rivers), AIR (the atmosphere keeps us alive), and LIFE (the only planet with any!)! You know caring for Earth is caring for ourselves! You're standing on the most amazing planet we know! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L07] Loaded: "Earth: Our Home Planet" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
