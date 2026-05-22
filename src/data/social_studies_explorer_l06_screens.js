// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L06 — Maps and Globes
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Geo.1.K-2 / D2.Geo.2.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L06 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-06`,
      title: `Maps and Globes`,
      duration: 12,
      xpReward: 50,
      badge: `maps-globes-explorer`,
      badgeName: `Maps and Globes Explorer`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we start geography. That means we learn about places. The Earth is huge. So we use maps and globes to see it. Let's explore.`,
          headline: `Maps and Globes`,
          subtitle: `The tools that help us see our Earth`,
          visual: `/explorer-assets/social-studies/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Picturing the World`,
          paragraphs: [
            `Earth is huge. Way too big to see all at once. So how do we see it?`,
            `Humans figured out a trick. We draw it. Pictures of Earth help us see places we cannot visit. These pictures are called maps and globes. They show us where things are.`,
          ],
          image: `/explorer-assets/social-studies/l06-s1-picturing-world.webp`,
          imageCaption: `Maps and globes are pictures of Earth.`,
          vocab: [
            { word: `geography`, definition: `The study of places on Earth.`,
              audioPrompt: `Geography is the study of places, {name}. Where things are on Earth. Cities, rivers, mountains, countries. People who study geography make maps. They help us know the world.` },
            { word: `picture`, definition: `A drawing that shows something.`,
              audioPrompt: `A picture is a drawing that shows something, {name}. Maps and globes are pictures of Earth. They help us see places that are far away. We could not see them without pictures.` },
            { word: `tool`, definition: `Something that helps you do a job.`,
              audioPrompt: `A tool is something that helps you do a job, {name}. Maps and globes are tools for knowing the world. Like a pencil is a tool for writing. Tools help us do more.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Is a Map?`,
          paragraphs: [
            `A map is a flat picture of a place. It looks like what a bird would see flying high above.`,
            `Maps can show small places, like your neighborhood. Or big places, like the whole world. You can fold a map. You can take it with you. That makes maps very handy.`,
          ],
          image: `/explorer-assets/social-studies/l06-s2-map.webp`,
          imageCaption: `A map is a flat picture of a place from above.`,
          vocab: [
            { word: `map`, definition: `A flat picture of a place from above.`,
              audioPrompt: `A map is a flat picture of a place, {name}. From above, like a bird sees. Maps show streets, parks, rivers, mountains. They help you find your way. Maps have been used for thousands of years.` },
            { word: `flat`, definition: `Not curved. Smooth and even.`,
              audioPrompt: `Flat means not curved, {name}. Maps are flat. You can put them on a table. You can fold them. You can hang them on a wall. That is what makes maps so easy to use.` },
            { word: `first`, definition: `The starting step. We use "first" to begin.`,
              audioPrompt: `First means the starting step, {name}. When you read a map, first find the key. Then look at the map. First and next help us put steps in order.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Is a Globe?`,
          paragraphs: [
            `A globe is different. It is a round model of Earth. It looks like a small Earth-shaped ball.`,
            `Earth really is round. So a globe shows the true shape better than a flat map. The downside? Globes are big. You cannot fold them. We use both. Globes for the true shape. Maps for taking with you.`,
          ],
          image: `/explorer-assets/social-studies/l06-s3-globe.webp`,
          imageCaption: `A globe is a round model of Earth. Like a small Earth.`,
          vocab: [
            { word: `globe`, definition: `A round model of Earth.`,
              audioPrompt: `A globe is a round model of Earth, {name}. Earth-shaped, like a ball. You can spin it. You can look at it from any side. Globes show the true shape of Earth.` },
            { word: `round`, definition: `Shaped like a ball.`,
              audioPrompt: `Round means shaped like a ball, {name}. Earth is round. So globes are too. Flat maps stretch the shapes a bit. Globes show the real sizes more correctly.` },
            { word: `model`, definition: `A small copy of something big.`,
              audioPrompt: `A model is a small copy of something big, {name}. A globe is a model of Earth. Small enough to hold. Showing the real shape. Models help us understand things that are too big to see.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Symbols and Keys`,
          paragraphs: [
            `Maps use symbols. A symbol is a small picture that stands for something real. A blue line might mean a river. A green area might mean a forest. A small house might mean a city.`,
            `To know what each symbol means, look at the key. The key is usually in a corner. It tells you what each symbol stands for. Always read the key first.`,
          ],
          image: `/explorer-assets/social-studies/l06-s4-symbols.webp`,
          imageCaption: `Maps use symbols. The key explains what each symbol means.`,
          vocab: [
            { word: `symbol`, definition: `A small picture that stands for something real.`,
              audioPrompt: `A symbol is a small picture, {name}. It stands for something real. A blue line for a river. A green area for a park. Symbols save space on a map.` },
            { word: `key`, definition: `The list on a map that explains the symbols.`,
              audioPrompt: `The key is the list on a map, {name}. It explains the symbols. House means city. Blue line means river. Brown bump means mountain. Read the key first.` },
            { word: `stand for`, definition: `To mean. A symbol stands for a real thing.`,
              audioPrompt: `Stand for means to represent, {name}. A symbol stands for something real. A star can stand for a capital city. A heart can stand for love. Symbols help us communicate fast.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Four Directions`,
          paragraphs: [
            `Maps help you find your way. They have four main directions. North, south, east, and west.`,
            `North is usually up on a map. South is down. East is right. West is left. Some maps have a compass rose. That is a pretty drawing that shows the directions.`,
          ],
          image: `/explorer-assets/social-studies/l06-s5-directions.webp`,
          imageCaption: `Four directions: north, south, east, west. Compass rose shows them.`,
          vocab: [
            { word: `direction`, definition: `Which way to go.`,
              audioPrompt: `A direction is which way to go, {name}. The four main directions are north, south, east, and west. They are the same all over the world. They help us find our way.` },
            { word: `compass rose`, definition: `A drawing on a map that shows directions.`,
              audioPrompt: `A compass rose is a drawing on a map, {name}. It shows the four directions. North, south, east, west. It looks like a flower. Pretty and useful.` },
            { word: `find your way`, definition: `To know where to go.`,
              audioPrompt: `Find your way means know where to go, {name}. Maps and directions help you find your way. Without them, you might get lost. With them, you can go anywhere.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Many Kinds of Maps`,
          paragraphs: [
            `Maps come in many kinds. Each one has a job.`,
            `A road map shows streets for driving. A world map shows all countries. A subway map shows trains for getting around a city. Pick the right map for what you need to do.`,
          ],
          image: `/explorer-assets/social-studies/l06-s6-many-kinds-maps.webp`,
          imageCaption: `Many kinds of maps. Each one has its own job.`,
          vocab: [
            { word: `road map`, definition: `A map that shows streets and highways.`,
              audioPrompt: `A road map shows streets and highways, {name}. People use them to drive. They show where roads cross. They show how to get from one place to another by car.` },
            { word: `world map`, definition: `A map that shows the whole Earth.`,
              audioPrompt: `A world map shows the whole Earth, {name}. All the countries. All the oceans. All the continents. World maps help us see the big picture of our planet.` },
            { word: `kind`, definition: `A type of something.`,
              audioPrompt: `A kind is a type of something, {name}. There are many kinds of maps. Each kind is for a different job. Pick the kind that fits what you need to do.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each one, {name}. Is it a map or a globe?`,
          buckets: [
            { id: `map`,   label: `Map`,   color: `#60A5FA` },
            { id: `globe`, label: `Globe`, color: `#34D399` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `A flat picture you can fold up`,
              matchPhrase: `Yes! That is a map. Maps are flat, so you can fold them.`, correctMatch: `map` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `A round ball that shows the whole Earth`,
              matchPhrase: `Right! That is a globe. Globes are round like Earth.`, correctMatch: `globe` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Shows streets in your town`,
              matchPhrase: `Yes! A road map shows streets. Maps are great for finding addresses.`, correctMatch: `map` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `You can spin to see all sides of Earth`,
              matchPhrase: `Right! Globes spin. You can see any side. They show Earth's real shape.`, correctMatch: `globe` },
            { id: `l06-g5`, image: `l06-game-5.webp`, label: `You can hang it on a wall`,
              matchPhrase: `Yes! Maps hang on walls. Many classrooms have wall maps.`, correctMatch: `map` },
            { id: `l06-g6`, image: `l06-game-6.webp`, label: `Sits on a stand and spins`,
              matchPhrase: `Right! Globes sit on a stand. They spin so you can see every part.`, correctMatch: `globe` },
            { id: `l06-g7`, image: `l06-game-7.webp`, label: `You can take it in your backpack`,
              matchPhrase: `Yes! Maps fold up small. Globes are too big to carry around.`, correctMatch: `map` },
            { id: `l06-g8`, image: `l06-game-8.webp`, label: `Shows the true round shape of Earth`,
              matchPhrase: `Right! Globes show the real shape. Maps stretch shapes a bit when they go flat.`, correctMatch: `globe` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is a map?`,
              options: [`A type of food`, `A flat picture of a place from above`, `A type of toy`, `A book`],
              correctIndex: 1,
              explanation: `A map is a flat picture of a place. Drawn like a bird looking down. Maps help you find your way.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is a globe?`,
              options: [`Flat like a map`, `A round model of Earth`, `Smaller than a map`, `Same as a map`],
              correctIndex: 1,
              explanation: `A globe is round. It shows the true shape of Earth. You can spin it to see every side.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What does the KEY on a map do?`,
              options: [`Opens doors`, `Explains what each symbol means`, `Plays music`, `Nothing important`],
              correctIndex: 1,
              explanation: `The key explains the symbols on a map. House means city. Blue line means river. Read it first.` },
            { id: `l06-q4`, format: `true-false`,
              question: `The four main directions are north, south, east, and west.`,
              correctAnswer: true,
              explanation: `True! North is up. South is down. East is right. West is left.` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Many maps have a ___ rose that shows the four directions.`,
              options: [`compass`, `flower`, `cookie`, `clock`],
              correctIndex: 0,
              explanation: `Compass rose! It looks like a flower. It points to north, south, east, and west.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Which would you use to find streets in your town?`,
              options: [`World map`, `Road map`, `Weather map`, `Treasure map`],
              correctIndex: 1,
              explanation: `Road map! Different maps for different jobs. Road maps show streets.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `The oldest maps are over 4,000 years old. People drew them on clay. Today we have GPS maps that update in real time on phones. Map-making keeps changing. But the big idea is the same. Help people know where things are.`,
          familyAdventure: `Make a map together. Pick a small space like your house, your yard, or a park. Draw a map of it. Add a key for your symbols. Add a compass rose. Notice how a map helps you see the space in a new way.`,
          creativePrompt: {
            intro: `Draw a treasure map for a family member. Pick a small treasure and hide it. Then draw a map showing how to find it.`,
            floor: `Write 3 sentences about your map. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add the steps to find the treasure.`,
            frames: [
              `My map shows ___.`,
              `First, go ___.`,
              `Then, look for ___.`,
              `The X marks where ___.`,
              `The treasure is ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You learned about maps and globes. A map is a flat picture. A globe is a round model of Earth. Maps use symbols. The key explains them. The four directions are north, south, east, and west. You can find your way anywhere now. Atlas the Bear.`,
          badge: `maps-globes-explorer`,
          badgeName: `Maps and Globes Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L06] Loaded: "Maps and Globes" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
