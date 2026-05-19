// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L17 — Maps and Geography: Understanding Our World
// Age band : explorers (6–8)   Guide: lyra
// Slots between L16 (Countries) and L19 (Current Events)
// L18 (Global Challenges) coming next slots between L17 and L19
// ─────────────────────────────────────────────────────────────────────────────

const HW_L17 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-17`,
      title:     `Maps and Geography: Understanding Our World`,
      duration:  12,
      xpReward:  50,
      badge:     `map-reader`,
      badgeName: `Map Reader`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. We've met countries, civilizations, and heroes. Today we learn the TOOLS to find them on the map. We'll explore the 7 CONTINENTS, the 5 OCEANS, how to READ MAPS, and how GEOGRAPHY shapes history. Have you ever wondered why ancient Egypt grew along the Nile? Why Greece had so many city-states? Why oceans both connect AND separate countries? Geography is the answer. Let's go.`,
          headline: `Maps and Geography`,
          subtitle: `The tools that show where everything is — and why it matters`,
          visual: `/explorer-assets/history/l17-s1-our-planet.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Our PLANET, Our HOME`,
          paragraphs: [
            `{name} — let's start BIG. The whole planet you live on is called EARTH. It's a giant sphere (like a ball) spinning in space.`,
            `Earth is mostly WATER — about 71% of its surface. The rest is LAND. From space, Earth looks BLUE because of all that water. That's why we sometimes call it "the BLUE PLANET." There are TWO halves of Earth, divided by an imaginary line called the EQUATOR — the NORTHERN HEMISPHERE (north of the equator) and the SOUTHERN HEMISPHERE (south of the equator). At the very top of Earth is the NORTH POLE (super cold!). At the bottom, the SOUTH POLE (also super cold!). The land on Earth is divided into 7 huge pieces called CONTINENTS. The water is divided into 5 vast areas called OCEANS. Maps and globes show us where everything is. A GLOBE is a small ball-shaped model of Earth — most accurate. A MAP is flat — easier to carry, but harder to be perfect (Earth is curved!). Both are useful.`,
          ],
          image: `/explorer-assets/history/l17-s1-our-planet.webp`,
          imageCaption: `Earth from space: blue planet. 71% water. 7 continents, 5 oceans. North and South Poles. Equator divides hemispheres.`,
          vocab: [
            { word: `Earth`,      definition: `Our PLANET — the third one from the SUN. EARTH is the only known planet with life.`,
              audioPrompt: `Earth, {name}, is our planet — the third one from the sun. Earth is the only known planet with life. About 4.5 billion years old. Mostly water on the surface. Lots of life — plants, animals, humans, oceans full of creatures. Our home. We've only got one Earth. We should take care of it.` },
            { word: `equator`,    definition: `An IMAGINARY LINE around Earth's MIDDLE. The EQUATOR divides Earth into northern and southern halves.`,
              audioPrompt: `The equator, {name}, is an imaginary line around Earth's middle. The equator divides Earth into northern and southern halves. Countries near the equator are usually hot — direct sun all year. Countries far from it are colder. The equator runs through countries like Ecuador (named after it!), Brazil, Kenya, and Indonesia.` },
            { word: `hemisphere`, definition: `One HALF of EARTH. The NORTHERN HEMISPHERE is north of the equator, the SOUTHERN is south.`,
              audioPrompt: `A hemisphere, {name}, is one half of Earth. The northern hemisphere is north of the equator, the southern is south. Most people live in the northern hemisphere — because most land is there. Seasons are flipped — summer in the north is winter in the south! When American kids are off school in July, Australian kids are in their winter break.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The 7 CONTINENTS`,
          paragraphs: [
            `Earth's land is divided into 7 huge pieces called CONTINENTS. Each is a different place with different lands, animals, and people. Let's meet them.`,
            `1. AFRICA — the SECOND-LARGEST continent. Home to the SAHARA Desert, the Nile River, and INCREDIBLE wildlife (lions, elephants, zebras). Where humans first evolved! 54 countries. 2. ASIA — the LARGEST continent and HOME to most humans (about 60% of all people). Includes Russia, China, India, Japan, and much more. The Himalayas (tallest mountains) are here. 3. NORTH AMERICA — home to the US, Canada, Mexico, and Central American countries. Mississippi River. Rocky Mountains. Where you might live! 4. SOUTH AMERICA — Amazon Rainforest, Andes Mountains, countries like Brazil, Argentina, Colombia, Peru. 5. ANTARCTICA — the SOUTHERNMOST continent, almost entirely ice. Very few people live here — only scientists in research stations. Penguins live here! 6. EUROPE — full of countries like France, Italy, Spain, Germany, the UK. Where the Renaissance happened. The Mediterranean Sea is here. 7. AUSTRALIA (sometimes called Oceania) — the smallest continent. Home to kangaroos, koalas, and the Great Barrier Reef. 7 continents. Each totally different. Each amazing.`,
          ],
          image: `/explorer-assets/history/l17-s2-seven-continents.webp`,
          imageCaption: `The 7 continents: Africa, Asia, North America, South America, Antarctica, Europe, Australia. Each huge. Each different.`,
          vocab: [
            { word: `continent`,   definition: `A HUGE piece of LAND on Earth. There are 7 CONTINENTS — each with its own countries, cultures, and wildlife.`,
              audioPrompt: `A continent, {name}, is a huge piece of land on Earth. There are seven continents — each with its own countries, cultures, and wildlife. Africa, Asia, North America, South America, Antarctica, Europe, and Australia. Memorizing them is one of the first big geography skills. Each is a whole world inside itself.` },
            { word: `Asia`,        definition: `The LARGEST continent. ASIA has about 60% of all the people on Earth.`,
              audioPrompt: `Asia, {name}, is the largest continent. Asia has about sixty percent of all the people on Earth. China and India alone have about 1.4 billion people each. Asia includes the Himalayas (tallest mountains), the Gobi Desert, ancient civilizations (China, India), and many cultures and languages. Asia is massive.` },
            { word: `Antarctica`,  definition: `The SOUTHERNMOST continent — almost entirely ICE. ANTARCTICA is home to penguins and scientists only.`,
              audioPrompt: `Antarctica, {name}, is the southernmost continent — almost entirely ice. Antarctica is home to penguins and scientists only. The coldest place on Earth. No countries — just research stations from many countries. Studying Antarctica helps scientists understand climate change. The ice is melting. That matters for the whole planet.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The 5 OCEANS`,
          paragraphs: [
            `Earth's water is divided into 5 huge OCEANS. They cover 71% of the planet. Together, the oceans support more life than all the land combined.`,
            `1. PACIFIC OCEAN — the LARGEST and DEEPEST. Bigger than all of Earth's land combined! Between the Americas and Asia. The deepest spot — the Mariana Trench — is 7 miles deep. 2. ATLANTIC OCEAN — the SECOND-LARGEST. Between the Americas and Europe/Africa. Where lots of trade ships cross. 3. INDIAN OCEAN — the THIRD-LARGEST. South of Asia, east of Africa, west of Australia. Many monsoon rainstorms cross it. 4. ARCTIC OCEAN — the SMALLEST and most FROZEN. Around the North Pole. Polar bears live here (on the ice). The ice is melting from climate change. 5. SOUTHERN OCEAN — around Antarctica. The coldest ocean. Home to penguins and giant whales. Oceans CONNECT all the continents. Oceans REGULATE Earth's weather and climate. Oceans hold AMAZING life — from tiny plankton to giant whales, from coral reefs to deep-sea creatures. Oceans matter. They make Earth livable.`,
          ],
          image: `/explorer-assets/history/l17-s3-five-oceans.webp`,
          imageCaption: `5 oceans: Pacific (biggest), Atlantic, Indian, Arctic (smallest), Southern. Cover 71% of Earth. Full of life.`,
          vocab: [
            { word: `Pacific Ocean`,    definition: `The LARGEST ocean — bigger than all land COMBINED. The PACIFIC is between the Americas and Asia.`,
              audioPrompt: `The Pacific Ocean, {name}, is the largest ocean — bigger than all land combined. The Pacific is between the Americas and Asia. Named "Pacific" (meaning "peaceful") by an early Spanish explorer who had a calm crossing. The Pacific isn't always peaceful — typhoons and storms happen — but the name stuck. Home to Hawaii, Japan, the Philippines, and thousands of islands.` },
            { word: `ocean`,            definition: `A VAST SALT-WATER body covering Earth's surface. There are 5 OCEANS holding most of Earth's water.`,
              audioPrompt: `An ocean, {name}, is a vast salt-water body covering Earth's surface. There are five oceans holding most of Earth's water. Oceans are critical — they regulate climate, support millions of species, and connect continents. Without oceans, Earth would be very different. Mostly desert. Probably no humans. Oceans are precious. We need to take care of them.` },
            { word: `regulate climate`, definition: `KEEP weather PATTERNS BALANCED. Oceans REGULATE CLIMATE — they store heat, move water, make rain.`,
              audioPrompt: `To regulate climate, {name}, is to keep weather patterns balanced. Oceans regulate climate — they store heat, move water, make rain. Ocean currents move warm water from the equator toward the poles, and cold water back. Without this circulation, the world would be much hotter near the equator and much colder near the poles. Oceans are Earth's air conditioning system.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `READING a MAP`,
          paragraphs: [
            `Now let's get PRACTICAL. How do you actually READ a map?`,
            `Every good map has a few KEY parts: 1. COMPASS ROSE — a star or arrow showing directions: NORTH (N) usually points up, SOUTH (S) down, EAST (E) right, WEST (W) left. Remember: "Never Eat Soggy Waffles" — N, E, S, W in clockwise order. 2. LEGEND (or KEY) — a small box showing what the SYMBOLS on the map mean. A blue line = river. A green area = forest. A black dot = town. The legend explains all the codes. 3. SCALE — a tiny bar showing distance. Maybe "1 inch = 100 miles." So if two cities are 2 inches apart on the map, they're really 200 miles apart in real life. 4. TITLE — what the map is showing. Could be "World Map," "Map of Africa," "Roads of Tokyo," or "Weather Today." Different MAP TYPES show different things. POLITICAL MAPS show countries and borders. PHYSICAL MAPS show mountains, rivers, deserts. CLIMATE MAPS show temperatures and rainfall. ROAD MAPS show streets and highways. WEATHER MAPS show forecasts. Each map type is a different LENS for seeing the world. Learning to read all of them is a powerful skill.`,
          ],
          image: `/explorer-assets/history/l17-s4-reading-maps.webp`,
          imageCaption: `Map essentials: compass rose (N-E-S-W), legend (symbols), scale (distance), title (what it shows). The reading tools.`,
          vocab: [
            { word: `compass rose`, definition: `A SYMBOL on a MAP showing DIRECTIONS — north, south, east, west. The COMPASS ROSE tells you which way is which.`,
              audioPrompt: `A compass rose, {name}, is a symbol on a map showing directions — north, south, east, west. The compass rose tells you which way is which. Usually has N pointing up. Sometimes a beautiful star design — that's where the "rose" name comes from. Every map should have one. Without it, you can't tell which direction is which on the map.` },
            { word: `legend`,       definition: `The "KEY" that EXPLAINS what map SYMBOLS mean. The LEGEND tells you blue lines are rivers, dots are cities, etc.`,
              audioPrompt: `A legend, {name}, is the "key" that explains what map symbols mean. The legend tells you blue lines are rivers, dots are cities, etc. Without the legend, you'd be guessing what every color and symbol means. Always look at the legend first when reading a new map. It's the decoder. It makes everything else make sense.` },
            { word: `scale`,        definition: `A BAR showing real-life DISTANCE on a map. The SCALE turns map inches into real miles.`,
              audioPrompt: `Scale, {name}, is a bar showing real-life distance on a map. The scale turns map inches into real miles. If the scale says one inch equals one hundred miles, then two cities that look one inch apart on the map are really 100 miles apart in real life. Scale lets you measure distance using a map. Essential for planning travel or understanding maps.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `GEOGRAPHY Shapes HISTORY`,
          paragraphs: [
            `{name} — here's the BIG IDEA. WHERE places are has shaped HOW history happened. Geography isn't just decoration — it's an actor in every story.`,
            `RIVERS made civilizations possible. Ancient Egypt grew along the NILE. China grew along the YELLOW RIVER. Mesopotamia grew between two rivers (Tigris and Euphrates). India grew along the INDUS and GANGES. Without rivers, no early cities. Rivers give water, food, and transport. MOUNTAINS divide cultures. The Alps separated Italy from Northern Europe. The Himalayas separated India from China. Mountains are hard to cross — cultures on each side developed differently. DESERTS isolate. The Sahara made it hard to travel between North Africa and the rest. The Gobi separated parts of Asia. OCEANS connect AND separate. The Atlantic separated Europe from the Americas for thousands of years. Then ships crossed it — and worlds collided (Age of Exploration). The SILK ROAD crossed mountains and deserts to connect East and West. CLIMATE shaped clothes, food, houses, religions, and economies. Hot countries grow different crops than cold ones. People build differently for monsoons vs. blizzards. Every civilization is partly shaped by the GEOGRAPHY around it. To understand history, you have to understand the land.`,
          ],
          image: `/explorer-assets/history/l17-s5-geography-shapes-history.webp`,
          imageCaption: `Geography shapes history: rivers grow civilizations, mountains divide cultures, oceans connect AND separate, climate shapes everything.`,
          vocab: [
            { word: `rivers feed civilizations`, definition: `WATER and FOOD make CITIES possible. RIVERS FED CIVILIZATIONS — Egypt by the Nile, China by the Yellow River.`,
              audioPrompt: `Rivers feed civilizations, {name}, means water and food make cities possible. Rivers fed civilizations — Egypt by the Nile, China by the Yellow River, Mesopotamia between the Tigris and Euphrates, India by the Indus and Ganges. Without rivers, no early cities. Rivers give water, food, good farming soil, and transport. The ancient world clung to rivers.` },
            { word: `mountains divide`, definition: `Hard to CROSS over. MOUNTAINS DIVIDE cultures — people on each side develop differently.`,
              audioPrompt: `Mountains divide, {name}, means hard to cross over. Mountains divide cultures — people on each side develop differently. The Himalayas kept India and China mostly separate for thousands of years. The Alps kept Italy somewhat separate from Northern Europe. Mountains create natural borders. They slow contact. They preserve unique cultures on each side.` },
            { word: `oceans connect`,  definition: `Once ships are GOOD, oceans become HIGHWAYS. OCEANS CONNECT — they carry trade, people, and ideas worldwide.`,
              audioPrompt: `Oceans connect, {name}, means once ships are good, oceans become highways. Oceans connect — they can carry trade, people, and ideas worldwide. For most of history, oceans separated continents. Then the Age of Exploration (better ships, better navigation) made oceans into roads. The world got smaller. Cultures collided. History sped up. Same ocean — different effect depending on technology.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `MAPS in YOUR Life`,
          paragraphs: [
            `{name} — maps aren't just for old explorers. You USE MAPS EVERY DAY without even thinking about it.`,
            `Your phone? It has GPS — Global Positioning System. Satellites in space pinpoint where you are within feet. Maps app shows you how to get places. A descendant of the magnetic compass from China — now millions of times more powerful. Your car? Same thing. GPS in cars helps people find their way. WEATHER FORECASTS on TV or your phone use maps to show where storms are coming, where it's sunny, where it's snowing. AIRLINES use maps to plan flights. SHIPS use maps to plan routes across oceans. SCIENTISTS use maps to track animals, diseases, climate change. DELIVERY DRIVERS use maps. EMERGENCY SERVICES use maps. EVERY video game with a world has a map. Even pirate stories need treasure maps! Maps are how humans organize and understand the world. The skill of reading maps will serve you forever. Whether you become a pilot, doctor, scientist, traveler, business person, teacher, gamer, or just someone who loves to know where things are — maps are part of your tools. You now know how to read them.`,
          ],
          image: `/explorer-assets/history/l17-s6-maps-everywhere.webp`,
          imageCaption: `Maps everywhere today: GPS, weather, airline routes, video games, delivery. The skill of map reading is forever.`,
          vocab: [
            { word: `GPS`,              definition: `Global POSITIONING SYSTEM — uses SATELLITES to find where you are. GPS is in phones, cars, watches.`,
              audioPrompt: `GPS, {name}, is Global Positioning System — uses satellites to find where you are. GPS is in phones, cars, watches, and many devices. About 30 satellites circle Earth. Your phone connects to several at once and figures out your location. Accurate to a few feet. Used for navigation, fitness tracking, finding lost phones, and so much more. A modern miracle.` },
            { word: `forever skill`,    definition: `A SKILL you'll USE all your LIFE. Map reading is a FOREVER SKILL.`,
              audioPrompt: `A forever skill, {name}, is a skill you'll use all your life. Map reading is a forever skill. No matter what job you do or where you live, knowing how to read maps helps. Travel. Navigation. Understanding news. Planning trips. Understanding history. Forever skills are worth investing in. They never become useless.` },
            { word: `understanding the world`, definition: `KNOWING where things ARE and WHY. Geography is about UNDERSTANDING THE WORLD — its shape and meaning.`,
              audioPrompt: `Understanding the world, {name}, is knowing where things are and why. Geography is about understanding the world — its shape and meaning. The shape (continents, oceans, rivers, mountains). The meaning (why people live where they live, why countries are where they are, why some places are rich and others struggle). Geography is one of the most useful subjects in school.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `MAPS are useful TOOLS — they show us where things are, help us navigate, and organize information about the world.`,
              matchPhrase: `Yes! Maps are essential tools. GPS, road maps, weather maps, world maps — all help us understand where things are and how to get places. Forever skill.`,
              correctMatch: `fact` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `GEOGRAPHY SHAPES history — rivers fed civilizations, mountains divided cultures, oceans connected (and separated) continents.`,
              matchPhrase: `True! Egypt grew along the Nile. The Himalayas kept India and China apart. Oceans separated the Americas from Europe until ships could cross them. Land shapes history.`,
              correctMatch: `fact` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `Earth has only ONE TINY OCEAN — no other oceans or continents to know about.`,
              matchPhrase: `Not at all! Earth has 5 OCEANS (Pacific, Atlantic, Indian, Arctic, Southern) and 7 CONTINENTS (Africa, Asia, North America, South America, Antarctica, Europe, Australia).`,
              correctMatch: `myth` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `Geography has ZERO connection to history — where things are doesn't matter to civilizations.`,
              matchPhrase: `Definitely not! Geography is one of the BIGGEST factors in history. Where rivers flow, where mountains rise, where oceans connect — all shape who lives where and how.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `How many CONTINENTS does Earth have?`,
              options: [`3`, `7 — Africa, Asia, North America, South America, Antarctica, Europe, Australia`, `12`, `100`],
              correctIndex: 1,
              explanation: `7 continents! Africa (2nd biggest), Asia (biggest, most people), North America, South America, Antarctica (frozen), Europe, Australia (smallest). Memorize them — geography essential.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `How many OCEANS does Earth have?`,
              options: [`Just one`, `5 — Pacific (biggest), Atlantic, Indian, Arctic, Southern`, `20`, `Don't know`],
              correctIndex: 1,
              explanation: `5 oceans! Pacific is the biggest (bigger than all land combined!). Then Atlantic, Indian, Arctic (smallest, near North Pole), Southern (around Antarctica).` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `What does a COMPASS ROSE on a map show?`,
              options: [`The weather`, `DIRECTIONS — North (N), South (S), East (E), West (W). "Never Eat Soggy Waffles."`, `Plants`, `Animals`],
              correctIndex: 1,
              explanation: `The compass rose shows directions. N (north) usually points up. Then E, S, W in clockwise order. Every map should have one — without it, you can't tell which way is which.` },
            { id: `l17-q4`, format: `true-false`,
              question: `RIVERS made early CIVILIZATIONS possible — Egypt grew along the Nile, China along the Yellow River, India along the Indus and Ganges.`,
              correctAnswer: true,
              explanation: `True! Rivers gave water, food, transport, fertile farming soil. Without rivers, no early cities. The Nile, Yellow River, Tigris-Euphrates, Indus-Ganges — all cradles of civilization.` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `An imaginary line around Earth's middle is called the ___ — it divides Earth into northern and southern hemispheres.`,
              options: [`equator`, `wall`, `line`, `path`],
              correctIndex: 0,
              explanation: `Equator! Imaginary line at Earth's middle. North of it = northern hemisphere. South of it = southern hemisphere. Countries near the equator are usually hot. Far from it, colder.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `Why are MAPS still important TODAY?`,
              options: [`They're not`, `GPS, weather, airlines, video games, deliveries, navigation — maps are everywhere. Forever skill.`, `Only for old people`, `Just for explorers`],
              correctIndex: 1,
              explanation: `Maps are everywhere today! GPS on your phone, weather forecasts, airline routes, video games, delivery apps. Map reading is a forever skill — useful in any career, any travel, any life.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something you can use TODAY, {name}. Pull out your family's phone or a map sometime soon. Look at where YOU live. Notice: what CONTINENT are you on? What COUNTRY? What STATE or PROVINCE? What CITY? Look at the rivers, mountains, oceans NEAR you. How did THEY shape your area's history? Once you start NOTICING maps, you'll see them everywhere — and you'll understand more about the world. Geography isn't just "where things are." It's "WHY things are the way they are." That's deep stuff.`,
          familyAdventure: {
            title: `Map Your World`,
            scenario: `Together, do a "MAP YOUR WORLD" exercise. Get a map of your area — city, state, or country — paper or on a phone both work. Locate: where you live, where each family member was born, the closest big city, the closest body of water, the closest mountains, and where close relatives live. Then trace the route between two of these places. How would you get from A to B? Use the scale to figure out real distance.`,
            talkingPoint: `Talk about how geography shaped your area's history. Where does your drinking water come from? Why is your city where it is — near a river, on a coast, in a valley? Geography explains so much about where home is.`,
          },
          creativePrompt: {
            title: `Map of Your Room`,
            description: `Make a "Map of Your Room" — draw a top-down view (as if you're looking from above). Include walls, doors, windows, furniture. Add a COMPASS ROSE showing which way is north. Add a LEGEND with symbols you used (square = bed, rectangle = desk, etc.). Add a SCALE bar (e.g., "1 inch = 1 foot"). Add a TITLE: "Map of [Your Name]'s Room." Be the cartographer of your own space.`,
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You've explored MAPS AND GEOGRAPHY. Earth has 7 CONTINENTS (Africa, Asia, N. America, S. America, Antarctica, Europe, Australia) and 5 OCEANS (Pacific is biggest!). You can read a map — COMPASS ROSE shows directions, LEGEND explains symbols, SCALE shows distance. GEOGRAPHY SHAPES history — rivers grew civilizations, mountains divided them, oceans connected and separated them. Maps are EVERYWHERE today — GPS, weather, airlines, video games. A FOREVER SKILL. Next time — GLOBAL CHALLENGES — the problems the world is solving TOGETHER. — Lyra 🐘`,
          badge: `map-reader`,
          badgeName: `Map Reader`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L17;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L17] Loaded: "Maps and Geography" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
