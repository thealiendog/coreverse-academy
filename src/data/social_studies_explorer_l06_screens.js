// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L06 — Maps and Globes: Picturing Our World
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Geo.1.K-2 / D2.Geo.2.K-2 (geographic tools)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L06 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-06`,
      title:     `Maps and Globes: Picturing Our World`,
      duration:  12,
      xpReward:  50,
      badge:     `maps-globes-explorer`,
      badgeName: `Maps and Globes Explorer`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Atlas here. We're starting a new block today — GEOGRAPHY. That's the study of PLACES. The Earth. Where things are. How places connect. We start with the tools that help us see places we can't visit directly — MAPS and GLOBES. They're how humans have pictured the world for thousands of years. Let's explore.`,
          headline: `Maps and Globes: Picturing Our World`,
          subtitle: `The tools that help us see Earth — and find our way around it`,
          visual: `/explorer-assets/social-studies/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Picturing the World`,
          paragraphs: [
            `Earth is HUGE. Way too big to see all at once. So how do we picture it?`,
            `Humans figured out a trick — we DRAW IT. We make pictures of Earth we can hold in our hands. These pictures are called MAPS and GLOBES. They help us understand WHERE things are. WHERE we live. WHERE other countries are. WHERE oceans are. WHERE we want to go. Without maps and globes, we'd be lost — literally. With them, we can plan trips, study far-away places, and feel connected to the whole world. They're some of the most useful tools humans ever invented.`,
          ],
          image: `/explorer-assets/social-studies/l06-s1-picturing-world.webp`,
          imageCaption: `Maps and globes = pictures of Earth. Way too big to see all at once. So we make drawings of it.`,
          vocab: [
            { word: `geography`,      definition: `The STUDY of PLACES — where things are on Earth.`,
              audioPrompt: `Geography, {name}, is the study of places. Where things are on Earth. Cities, mountains, rivers, countries, oceans. Geography helps us understand the world we live on. People who study geography — called geographers — make maps, explore different places, and figure out how people connect with the land they live on. Geography is one of the oldest sciences.` },
            { word: `picture`,        definition: `A DRAWING that shows something. Maps and globes are PICTURES of Earth.`,
              audioPrompt: `A picture, {name}, is a drawing that shows something. Maps and globes are pictures of Earth. Since Earth is too big to see all at once, we make pictures we can look at. Drawings help us understand what we can't see directly. Without these pictures, we'd have no good way to think about the whole planet.` },
            { word: `tool`,           definition: `Something that HELPS you do something. Maps and globes are TOOLS for knowing the world.`,
              audioPrompt: `A tool, {name}, is something that helps you do something. Hammers are tools. Pencils are tools. Maps and globes are tools too — they help you know the world. Humans have always made tools to help them. From the first spears to today's smartphones, tools are how humans expand what we can do. Geographic tools help us know places.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's a MAP?`,
          paragraphs: [
            `A MAP is a FLAT PICTURE of a place — like a drawing you'd see if a bird looked DOWN at the land.`,
            `Maps can show LOTS of different sizes. A WORLD MAP shows the whole Earth. A COUNTRY MAP shows just one country (like the US). A STATE MAP shows just one state. A CITY MAP shows just one city. A NEIGHBORHOOD MAP shows just a few streets. Each map shows a different ZOOM level — like looking at something close up or far away. Maps are usually drawn on paper or screens. They're easy to fold up and take with you. That's their big advantage over globes.`,
          ],
          image: `/explorer-assets/social-studies/l06-s2-map.webp`,
          imageCaption: `A MAP = flat picture of a place. World, country, state, city, neighborhood maps. Bird's eye view of land.`,
          vocab: [
            { word: `map`,            definition: `A FLAT PICTURE of a place, drawn like a bird looking DOWN.`,
              audioPrompt: `A map, {name}, is a flat picture of a place. It's drawn like a bird looking down at the land. Maps show what's where — roads, mountains, cities, rivers, parks, anything important. Maps can be small (your neighborhood) or huge (the whole world). They've been used for thousands of years. They help people find their way and understand where things are.` },
            { word: `flat`,           definition: `Not curved or rounded — laying smooth. Maps are FLAT pictures.`,
              audioPrompt: `Flat, {name}, means not curved or rounded — laying smooth. Maps are flat pictures. That's because they're drawn on paper or screens. You can fold them up. You can hang them on walls. You can carry them in your pocket. Flat maps are convenient. But because Earth is round, flat maps stretch the shapes a bit — that's why globes are useful too.` },
            { word: `zoom level`,     definition: `How CLOSE OR FAR a map shows. World maps are FAR. Neighborhood maps are CLOSE.`,
              audioPrompt: `Zoom level, {name}, is how close or far a map shows. World maps are far — they show all of Earth from way up. Neighborhood maps are close — they show just a few streets. Maps come in many zoom levels. Choosing the right zoom helps you find what you need. You wouldn't use a world map to find one street. You wouldn't use a street map to plan a flight to Japan.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What's a GLOBE?`,
          paragraphs: [
            `A GLOBE is a ROUND model of Earth. Like a small Earth-shaped ball.`,
            `Globes are SPECIAL because Earth is actually ROUND. A globe shows the right SHAPE of Earth — round, like a ball. Maps stretch the shapes a little because they have to FLATTEN the round Earth onto a flat page. Globes don't have that problem. So globes show countries' true sizes more accurately than maps. The downside? Globes are big and hard to carry around. You can't fold them up. That's why we use BOTH — globes for the right shape, maps for portability.`,
          ],
          image: `/explorer-assets/social-studies/l06-s3-globe.webp`,
          imageCaption: `A GLOBE = round model of Earth. Shows true shape. Big and round like Earth itself.`,
          vocab: [
            { word: `globe`,          definition: `A ROUND MODEL of Earth. Shows Earth's TRUE shape.`,
              audioPrompt: `A globe, {name}, is a round model of Earth. Like a small Earth-shaped ball. Globes show Earth's true shape — round. They show countries and continents in their actual proportions. Globes have been used for hundreds of years. They're found in schools, libraries, and homes. They're great for seeing the whole Earth from any angle.` },
            { word: `round`,          definition: `Shaped like a BALL. Earth is ROUND — so globes are too.`,
              audioPrompt: `Round, {name}, means shaped like a ball. Earth is round — so globes are too. From space, Earth looks like a big blue ball. That's its real shape. Maps have to flatten this round shape onto paper, which stretches things a bit. Globes don't have to do that, so they show Earth more accurately.` },
            { word: `accurate`,       definition: `Showing the RIGHT SIZE and SHAPE. Globes are more ACCURATE than maps.`,
              audioPrompt: `Accurate, {name}, means showing the right size and shape. Globes are more accurate than maps because they don't flatten Earth. On flat maps, Greenland sometimes looks BIGGER than Africa — but actually Africa is way bigger! Globes show the truth. Maps trade some accuracy for portability. Both have their uses.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Map SYMBOLS and KEYS`,
          paragraphs: [
            `Maps use SYMBOLS — small pictures that stand for real things.`,
            `A SMALL HOUSE might mean a city. A BLUE LINE might mean a river. A GREEN AREA might mean a park or forest. A BROWN BUMP might mean a mountain. A STAR might mean a capital city. To know what each symbol means, maps have a KEY (also called a LEGEND). The key is usually in a corner of the map. It explains what each symbol stands for. Like a secret code! Read the key first, then look at the map. Maps are SO MUCH easier to understand once you read the key.`,
          ],
          image: `/explorer-assets/social-studies/l06-s4-symbols.webp`,
          imageCaption: `Maps use SYMBOLS for things — houses = cities, blue lines = rivers, green = parks. KEY explains what each means.`,
          vocab: [
            { word: `symbol`,         definition: `A SMALL PICTURE that stands for something REAL. Maps use SYMBOLS for cities, rivers, etc.`,
              audioPrompt: `A symbol, {name}, is a small picture that stands for something real. Maps use symbols. A star might be a capital. A small house might be a city. A blue line is a river. Symbols save space on maps — you don't need to draw every house. Symbols communicate quickly. Looking at the symbols lets you understand a map at a glance.` },
            { word: `key`,            definition: `The LIST on a map that EXPLAINS what each symbol means. Also called a LEGEND.`,
              audioPrompt: `A key, {name}, is the list on a map that explains what each symbol means. Also called a legend. You'll find the key usually in a corner of the map. It says — small house = city, blue wavy line = river, brown bump = mountain. Read the key first. Then the rest of the map makes sense. Without the key, the symbols are just pictures.` },
            { word: `legend`,         definition: `Another word for KEY. The LEGEND tells you what symbols mean.`,
              audioPrompt: `A legend, {name}, is another word for key. The legend tells you what symbols mean on a map. They're the same thing — just different words. Some maps say 'key.' Some say 'legend.' Both mean the same thing — the list explaining the symbols. Look for either word on the map you're reading.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `DIRECTIONS: Finding Your Way`,
          paragraphs: [
            `Maps also have DIRECTIONS — to help you know which way is which.`,
            `There are FOUR MAIN DIRECTIONS — NORTH, SOUTH, EAST, and WEST. North is usually UP on a map. South is DOWN. East is RIGHT. West is LEFT. Some maps have a COMPASS ROSE — a special pretty drawing showing which way each direction is. The four directions help you navigate. "Go north for two blocks." "The library is east of the park." "We're driving south to visit grandma." Knowing the four directions is one of the most useful skills in geography. People have used them for thousands of years.`,
          ],
          image: `/explorer-assets/social-studies/l06-s5-directions.webp`,
          imageCaption: `Four directions: N (up), S (down), E (right), W (left). Compass rose shows them. Most useful map tool.`,
          vocab: [
            { word: `direction`,      definition: `WHICH WAY to go. The four DIRECTIONS are north, south, east, west.`,
              audioPrompt: `A direction, {name}, is which way to go. The four main directions are north, south, east, and west. These directions are the same all over the world. North is north no matter where you stand. People have used these directions for thousands of years to find their way — across oceans, through forests, across deserts. They're how we navigate.` },
            { word: `compass rose`,   definition: `A SPECIAL DRAWING on maps showing the four directions.`,
              audioPrompt: `A compass rose, {name}, is a special drawing on maps showing the four directions. It usually has arrows pointing to N, S, E, W. Some have more detail with diagonal directions too (like NE, NW, SE, SW). The compass rose is named after a flower — when you draw all the directions out, it looks a bit like a flower's petals. Pretty AND useful.` },
            { word: `navigate`,       definition: `To FIND YOUR WAY. The four directions help you NAVIGATE.`,
              audioPrompt: `To navigate, {name}, is to find your way. The four directions help you navigate. Without them, you wouldn't know which way to go. With them, you can travel across the world. Sailors used directions for ocean voyages. Hikers use them on trails. Pilots use them in the sky. Even today, GPS uses these directions. They're essential for going anywhere new.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Many KINDS of Maps`,
          paragraphs: [
            `Maps come in MANY different kinds — each for a different purpose.`,
            `POLITICAL MAPS show countries and their borders. PHYSICAL MAPS show mountains, rivers, and land features. ROAD MAPS show streets and highways for driving. WEATHER MAPS show what weather is happening where. SUBWAY MAPS show train lines for cities. TREASURE MAPS — well, those are for fun (mostly!). EVEN your favorite video game might have a MAP. The right map depends on what you're doing. Going for a hike? Use a trail map. Driving? Use a road map. Learning about countries? Use a political map. Each map has a job.`,
          ],
          image: `/explorer-assets/social-studies/l06-s6-many-kinds-maps.webp`,
          imageCaption: `Many kinds: political, physical, road, weather, subway, treasure, game maps. Each for a different job.`,
          vocab: [
            { word: `political map`,  definition: `A map showing COUNTRIES and their BORDERS. POLITICAL MAPS show how Earth is divided.`,
              audioPrompt: `A political map, {name}, shows countries and their borders. The lines on a political map show where one country ends and another begins. Different colors usually show different countries. Political maps help us understand how humans have divided up the Earth. They're useful for learning about countries, governments, and where people live.` },
            { word: `physical map`,   definition: `A map showing the LAND ITSELF — mountains, rivers, deserts, oceans.`,
              audioPrompt: `A physical map, {name}, shows the land itself — mountains, rivers, deserts, oceans. Not borders or countries — the actual features of Earth. Different colors show different elevations. Browns and dark greens often show mountains. Lighter greens show plains. Blue is water. Physical maps help you see what the land really looks like.` },
            { word: `purpose`,        definition: `The REASON for something. Each kind of map has its own PURPOSE.`,
              audioPrompt: `A purpose, {name}, is the reason for something. Each kind of map has its own purpose. Road maps help you drive. Weather maps help you plan for storms. Subway maps help you ride the train. Knowing a map's purpose helps you choose the right one for what you're doing. The most useful map is the one that matches your need.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `GLOBES are ROUND because Earth is round — they show Earth's true shape.`,
              matchPhrase: `Yes! Globes are round models of Earth. They show Earth's true shape and accurate sizes of countries. Flat maps stretch shapes a bit because they flatten the round Earth.`,
              correctMatch: `fact` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `Maps use SYMBOLS — small pictures that stand for real things. A KEY explains what each symbol means.`,
              matchPhrase: `True! Maps use symbols for cities, rivers, mountains, parks. The KEY (also called LEGEND) explains what each symbol means. Always read the key first.`,
              correctMatch: `fact` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Because maps are FLAT, the actual Earth must be flat too!`,
              matchPhrase: `Not at all! Earth is definitely ROUND — astronauts have seen it. Maps are flat for convenience (you can fold them up). But they have to flatten the round Earth — which is why shapes get stretched.`,
              correctMatch: `myth` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Maps and globes are USELESS — they don't help anyone do anything.`,
              matchPhrase: `Definitely not! Maps and globes are HUGELY useful. They help us travel, learn about the world, find places, plan trips, study geography. Hard to imagine life without them.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is a MAP?`,
              options: [`A type of food`, `A FLAT picture of a place — drawn like a bird looking down`, `A type of toy`, `A book`],
              correctIndex: 1,
              explanation: `A map is a flat picture of a place. Drawn like a bird looking down. Maps can show small areas (your neighborhood) or huge areas (the world). They help us know where things are.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `How is a GLOBE different from a MAP?`,
              options: [`Globes are flat`, `Globes are ROUND models of Earth — they show Earth's true shape`, `Globes are smaller`, `They're the same`],
              correctIndex: 1,
              explanation: `Globes are round. Maps are flat. Globes show Earth's true shape and proportions more accurately. Flat maps stretch things a bit. Both are useful — globes for accuracy, maps for portability.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What does a map's KEY (or LEGEND) do?`,
              options: [`Opens a door`, `Explains what each SYMBOL on the map means`, `Plays music`, `Nothing important`],
              correctIndex: 1,
              explanation: `The key (or legend) explains what each symbol means. House = city. Blue line = river. Brown bump = mountain. Always read the key first — then the map makes sense.` },
            { id: `l06-q4`, format: `true-false`,
              question: `The FOUR main DIRECTIONS are NORTH, SOUTH, EAST, and WEST.`,
              correctAnswer: true,
              explanation: `True! The four main directions are north, south, east, west. North is usually up on a map. South is down. East is right. West is left. These directions are the same everywhere on Earth.` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Many maps have a ___ — a special drawing showing the four directions.`,
              options: [`compass rose`, `pizza wheel`, `rainbow`, `clock`],
              correctIndex: 0,
              explanation: `Compass rose! It's a special drawing showing N, S, E, W (and sometimes more directions). Named after a flower because of its shape. Helps you find your way.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Which kind of map would you use to find STREETS in a city?`,
              options: [`World map`, `ROAD map (or city map)`, `Weather map`, `Treasure map`],
              correctIndex: 1,
              explanation: `Road map or city map! Different maps have different purposes. Road maps show streets. World maps show the whole Earth. Weather maps show weather. Match the map to what you need.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The OLDEST maps we know about were made over 4,000 years ago! Ancient people drew maps on clay tablets and animal skins. Sailors used star maps to navigate oceans. Explorers like Magellan and Columbus used maps to discover new lands. Today, we have AMAZING maps — like SATELLITE maps that show real photos of Earth from space, and GPS maps that update in real time on your phone. Map-making is still happening — scientists are mapping the deep ocean, other planets like Mars, and even tiny things like the inside of your brain. Map-making never ends.`,
          familyAdventure: `Make a MAP TOGETHER. Pick a small space — your house, your yard, or a favorite park. Draw a map showing the important features. Include a KEY explaining your symbols. Add a COMPASS ROSE if you can figure out where north is. Notice how making a map helps you SEE the space in a new way. You're thinking like a real cartographer (map-maker).`,
          creativePrompt: `Draw a TREASURE MAP for someone in your family. Pick a small treasure (a toy, a snack, a note). Hide it somewhere. Then draw a map showing how to find it. Include: arrows, X marking the spot, symbols for landmarks (your bed, the couch, the kitchen). Add a key explaining your symbols. Give the map to your family member. Watch them follow it. That's geography in action.`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now understand MAPS and GLOBES. MAPS are FLAT pictures of places. GLOBES are ROUND models of Earth. Maps use SYMBOLS, and a KEY (or LEGEND) explains them. The four DIRECTIONS are N, S, E, W — and a COMPASS ROSE helps you find them. Many kinds of maps exist — each for a different purpose. You're ready to explore the world. — Atlas 🐻`,
          badge: `maps-globes-explorer`,
          badgeName: `Maps and Globes Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L06] Loaded: "Maps and Globes" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
