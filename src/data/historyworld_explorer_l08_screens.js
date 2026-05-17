// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L08 — The Age of Exploration
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L08 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-08`,
      title:     `The Age of Exploration`,
      duration:  12,
      xpReward:  50,
      badge:     `exploration-explorer`,
      badgeName: `Exploration Explorer`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to take you to an exciting time called the AGE OF EXPLORATION. Brave sailors set out across the ocean — sometimes not knowing what they would find! They discovered new lands, new foods, and new ways to travel. The world got SMALLER as people met each other from far apart for the first time. Get ready for a big adventure.`,
          headline: `The Age of Exploration`,
          subtitle: `When brave sailors crossed the ocean and discovered new lands, new foods, and new ideas`,
          visual: `/explorer-assets/history/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Big Adventures Begin`,
          paragraphs: [
            `About 500 years ago, sailors did something incredible.`,
            `They sailed BIG ships across HUGE oceans — sometimes not knowing what was on the other side. They wanted to find new lands. New trade routes. New foods and spices. New adventures. This time is called the AGE OF EXPLORATION.`,
          ],
          image: `/explorer-assets/history/l08-s1-adventures.webp`,
          imageCaption: `Brave sailors. Big ships. Bigger oceans. The Age of Exploration was about humans going where they'd never been.`,
          vocab: [
            { word: `exploration`, definition: `Going to new places to discover what's there. The Age of Exploration was when many new lands were found.`,
              audioPrompt: `Exploration is going to new places to discover what's there, {name}. The Age of Exploration was about 500 years ago, when sailors from Europe set out across HUGE oceans to find new lands. They didn't know what they'd find. They didn't know if they'd make it home. But they were CURIOUS — and they went anyway. That's exploration.` },
            { word: `sailor`,      definition: `A person who works on a ship and travels by sea.`,
              audioPrompt: `A sailor is a person who works on a ship, {name}. Sailors had hard jobs — climbing tall masts to set the sails, fighting storms, sometimes going weeks without seeing land. They had to be strong, brave, and good at working together. Sailing across an ocean took MONTHS. The food got moldy. The water got stinky. But sailors kept going.` },
            { word: `ocean`,       definition: `A really, really big body of salt water. There are five oceans on Earth.`,
              audioPrompt: `An ocean is a really, really big body of salt water, {name}. There are five oceans on Earth — the Pacific, Atlantic, Indian, Arctic, and Southern. The Pacific is the biggest. Even today, oceans are mysterious places. We've explored maybe 20% of them. There's still SO MUCH to find under the sea.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Brave Sailors`,
          paragraphs: [
            `Some of the most famous explorers came from SPAIN, PORTUGAL, and ENGLAND.`,
            `CHRISTOPHER COLUMBUS sailed west in 1492 and reached the AMERICAS. FERDINAND MAGELLAN's ship sailed ALL the way around the world. VASCO DA GAMA sailed around Africa to India. These were DANGEROUS trips.`,
          ],
          image: `/explorer-assets/history/l08-s2-explorers.webp`,
          imageCaption: `Columbus. Magellan. Vasco da Gama. They went where no European had gone before. Many ships never came back.`,
          vocab: [
            { word: `Christopher Columbus`, definition: `A famous sailor from Italy who sailed west and reached the Americas in 1492.`,
              audioPrompt: `Christopher Columbus was a sailor from Italy, {name}. In 1492, he sailed west from Spain across the Atlantic Ocean. He was actually trying to reach ASIA. He got LOST. But when his ships landed, they had reached a place Europeans didn't know about — the AMERICAS. Of course, people already LIVED there. So Columbus didn't really 'discover' the Americas. But his trip changed history.` },
            { word: `Magellan`,             definition: `A famous sailor whose ship was the first to sail all the way around the world.`,
              audioPrompt: `Ferdinand Magellan was a famous sailor from Portugal, {name}. In 1519, he started a trip to do something nobody had ever done — sail ALL THE WAY around the world. The journey took three years. Magellan himself didn't make it home. But ONE of his ships, with the few sailors left, finally returned to Spain. They had proved Earth was round AND traveled the whole way around it.` },
            { word: `explorer`,             definition: `A person who travels to new places to discover what's there.`,
              audioPrompt: `An explorer is a person who travels to new places to discover what's there, {name}. Explorers have to be BRAVE. Curious. Strong. Patient. They have to leave home — sometimes forever. Many famous explorers had trips so hard, half their crews didn't survive. Exploration is exciting. But it's also really, really difficult.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sailing Across the Ocean`,
          paragraphs: [
            `How did sailors cross such big oceans?`,
            `They built strong ships called CARAVELS — good for long trips. They used the COMPASS (invented in China) to find their way. They studied the STARS to know where they were. And they were BRAVE — going where they'd never been before.`,
          ],
          image: `/explorer-assets/history/l08-s3-sailing.webp`,
          imageCaption: `Caravel ships. The compass. The stars overhead. Bravery. That's how you crossed an ocean with no GPS.`,
          vocab: [
            { word: `caravel`, definition: `A type of small but strong sailing ship used during the Age of Exploration.`,
              audioPrompt: `A caravel is a special kind of sailing ship, {name}. The Portuguese designed them about six hundred years ago. They were SMALLER than other ships of the time, but they had clever triangle-shaped sails. The sails let them sail INTO the wind — not just with it. That meant caravels could go places other ships couldn't. They became the explorer's favorite ship.` },
            { word: `map`,     definition: `A drawing that shows where places are. Maps got much better during the Age of Exploration.`,
              audioPrompt: `A map is a drawing that shows where places are, {name}. Before the Age of Exploration, most maps only showed parts of the world. Whole continents were missing. As sailors sailed to new places, they drew new maps. By the end of the Age of Exploration, maps showed the WHOLE Earth. Today we have maps of everything — even the moon and Mars.` },
            { word: `brave`,   definition: `Doing something hard or scary because it matters. Explorers had to be brave.`,
              audioPrompt: `Brave means doing something hard or scary because it matters, {name}. Sailing across an unknown ocean was scary. The ships were small. Storms were dangerous. Food and water sometimes ran out. Sailors might not see land for MONTHS. But they were brave. They wanted to know what was out there. Bravery doesn't mean not being scared — it means going anyway.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Great Food Swap`,
          paragraphs: [
            `When sailors traveled between continents, they brought back SO MUCH.`,
            `From the AMERICAS came: tomatoes, potatoes, chocolate, corn, chili peppers, peanuts, and pineapple. From EUROPE and ASIA came: wheat, horses, oranges, and apples. We call this the COLUMBIAN EXCHANGE. The whole world's food changed forever!`,
          ],
          image: `/explorer-assets/history/l08-s4-food-exchange.webp`,
          imageCaption: `Tomatoes for pizza. Potatoes for fries. Chocolate for everything. So many foods we love came from the Americas to the rest of the world.`,
          vocab: [
            { word: `Columbian Exchange`, definition: `The trading of foods, plants, and animals between the Americas and the rest of the world.`,
              audioPrompt: `The Columbian Exchange is what we call the great food swap, {name}. After Columbus's voyage in 1492, sailors carried plants, animals, and foods between the Americas and Europe, Asia, and Africa. It changed what people ate EVERYWHERE. Imagine Italian food without tomatoes. Or French fries without potatoes. None of it would exist without the Columbian Exchange.` },
            { word: `tomato`,             definition: `A delicious red fruit (we usually call it a vegetable). Tomatoes came from the Americas.`,
              audioPrompt: `Tomatoes came from the Americas, {name}. Italians didn't have tomatoes until after 1492 — so no pizza, no spaghetti sauce, no pasta marinara. Mexicans didn't have salsa with European cilantro. Greeks didn't have Greek salad. Tomatoes are now used in cuisines all over the world — and it's all thanks to a single trip across the ocean.` },
            { word: `chocolate`,          definition: `A sweet, brown food made from cacao beans. Chocolate came from the Americas!`,
              audioPrompt: `Chocolate came from the Americas, {name}. The Maya and Aztec drank it as a bitter spicy drink — not sweet like today. When Spanish explorers brought cacao back to Europe, they added sugar. Suddenly chocolate became a sweet treat. Now chocolate is one of the world's most popular foods. Every chocolate bar you've ever eaten — that started with the Americas.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When Worlds Meet`,
          paragraphs: [
            `When sailors arrived in new lands, AMAZING things happened — but also HARD things.`,
            `People who had never met before suddenly did. They shared foods and ideas. But the people who already lived there had their lives changed in big ways — sometimes good, sometimes hurtful. It's important to remember ALL of the story.`,
          ],
          image: `/explorer-assets/history/l08-s5-worlds-meet.webp`,
          imageCaption: `When worlds meet, there's wonder. And there's also pain. Both parts are real. Both parts matter.`,
          vocab: [
            { word: `meet`,     definition: `To come together for the first time. The Age of Exploration was when many people first met.`,
              audioPrompt: `To meet is to come together for the first time, {name}. The Age of Exploration was the first time people from many places on Earth met each other. People in the Americas had never met people from Europe before. People in Europe had never met people in some parts of Africa or Asia. Suddenly the world got SMALLER. People shared food, ideas, and stories.` },
            { word: `change`,   definition: `To become different. Lots of things changed in the world during the Age of Exploration.`,
              audioPrompt: `To change is to become different, {name}. The Age of Exploration changed a LOT of things. People started eating new foods. New languages spread to new places. New animals appeared in lands that had never seen them. But change can be hard, too — especially for people who didn't ask for it. Some of the changes hurt people who already lived in those lands. We have to remember both the good and the hard parts.` },
            { word: `remember`, definition: `To keep something in your mind so you don't forget. We must remember all parts of history.`,
              audioPrompt: `To remember is to keep something in your mind so you don't forget, {name}. History isn't just one story. Every event has many sides. The Age of Exploration brought wonderful things — tomatoes, new maps, world connection. But it also brought hard things for many people. We have to remember all of it. The good things AND the hard things. Only then do we really understand what happened.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Exploration Changed`,
          paragraphs: [
            `The Age of Exploration changed the WHOLE WORLD.`,
            `People from different continents finally met. Foods we now eat — POTATOES, TOMATOES, CHOCOLATE — became part of meals everywhere. Maps showed the whole Earth for the first time. People still explore today — even sending robots to MARS!`,
          ],
          image: `/explorer-assets/history/l08-s6-exploration-legacy.webp`,
          imageCaption: `World maps. Foods everywhere. Continents connected. And we never stopped exploring. Now we send robots to Mars.`,
          vocab: [
            { word: `continent`, definition: `A really big piece of land — like Africa, Europe, Asia, North America, South America, Australia, or Antarctica.`,
              audioPrompt: `A continent is a really big piece of land, {name}. There are seven continents on Earth: North America, South America, Europe, Africa, Asia, Australia, and Antarctica. Before the Age of Exploration, people on different continents didn't know much about each other. After, they did. The whole Earth became connected in a way it never had been before.` },
            { word: `connected`, definition: `When things are linked together. Exploration connected continents that had been far apart.`,
              audioPrompt: `Connected means linked together, {name}. Before the Age of Exploration, continents felt very FAR apart. Africa, the Americas, Asia, Europe — they barely knew each other. After exploration, they were connected by ships. Today, the world is even more connected — by airplanes, phones, and the internet. The connecting started with brave sailors crossing oceans.` },
            { word: `Mars`,      definition: `A planet in our solar system. We're STILL exploring — sending robots to study Mars right now.`,
              audioPrompt: `Mars is a planet in our solar system, {name} — the fourth one from the sun. It's reddish, smaller than Earth, and SUPER cold. We can't go there yet ourselves — it's too far. But we send ROBOTS! Right now, robot rovers are driving around on Mars, taking pictures, studying rocks. We're still explorers. We're just exploring SPACE now instead of oceans.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about the Age of Exploration, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `Christopher Columbus reached the Americas in 1492 by sailing west.`,
              matchPhrase: `Yes! Columbus sailed west from Spain in 1492. He was actually trying to reach Asia. But his ships landed in a place Europeans didn't know about — the Americas. Of course, people already LIVED there.`,
              correctMatch: `fact` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Tomatoes, potatoes, and chocolate originally came from the Americas.`,
              matchPhrase: `True! All three came from the Americas. Before the Age of Exploration, Europeans had NEVER tasted them. Now they're in foods all over the world.`,
              correctMatch: `fact` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `Explorers used modern speedboats to cross the ocean.`,
              matchPhrase: `Definitely not! Speedboats weren't invented for hundreds of years. Explorers used wooden sailing ships called caravels. The trips took MONTHS.`,
              correctMatch: `myth` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `Christopher Columbus flew across the ocean in an airplane.`,
              matchPhrase: `Ha! Airplanes weren't invented for another FOUR HUNDRED years after Columbus, {name}. He sailed in wooden ships — slow, dangerous, but the only way at the time.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What did Christopher Columbus reach in 1492?`,
              options: [`The Moon`, `The Americas`, `China`, `The South Pole`],
              correctIndex: 1,
              explanation: `Columbus reached the Americas in 1492 — sailing west across the Atlantic Ocean. He was actually trying to get to Asia! But people already lived in the Americas — they didn't need to be "discovered."` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What did sailors use to find their way across oceans?`,
              options: [`A compass and the stars`, `Cell phones`, `TV maps`, `Their dreams`],
              correctIndex: 0,
              explanation: `Sailors used a COMPASS (invented in China) and the STARS overhead to find their way. No GPS, no phones, no satellites. Just careful watching and clever tools.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is the Columbian Exchange?`,
              options: [`A type of dance`, `The trading of foods between the Americas and other continents`, `A famous painting`, `A medieval castle`],
              correctIndex: 1,
              explanation: `The Columbian Exchange was the great food swap after 1492. Foods like tomatoes, potatoes, and chocolate traveled from the Americas to Europe and Asia. Wheat, horses, and apples traveled the other way. The whole world's food changed.` },
            { id: `l08-q4`, format: `true-false`,
              question: `Tomatoes, potatoes, and chocolate originally came from the Americas.`,
              correctAnswer: true,
              explanation: `True! All three came from the Americas. Before the Age of Exploration, Italians didn't have tomatoes for pizza. The Irish didn't have potatoes. Europeans had never tasted chocolate. Hard to imagine, right?` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `Sailors used special ships called ___ to cross the ocean.`,
              options: [`caravels`, `airplanes`, `submarines`, `rockets`],
              correctIndex: 0,
              explanation: `Caravels! These were small but strong sailing ships, designed in Portugal. Their special triangle sails let them sail into the wind — making them the explorer's favorite ship.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What did the Age of Exploration change?`,
              options: [`People from different continents met, foods spread around the world, and maps became better`, `Nothing changed`, `Only the weather`, `Only what kids ate`],
              correctIndex: 0,
              explanation: `The Age of Exploration changed the WHOLE world! Continents became connected for the first time. Foods traveled everywhere. Maps showed the whole Earth. And the world started becoming the connected place it is today.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `We're STILL exploring today, {name} — but in different ways! Sailors don't have to discover new lands because we've mapped them all. Now we explore SPACE. We send robots to MARS to drive around and study rocks. We send telescopes far into space to look at faraway galaxies. We dive deep into the OCEAN to find creatures nobody has ever seen. The Age of Exploration never really ended — it just keeps going.`,
          familyAdventure: `Have an EXPLORATION DINNER! Make a meal using foods from the Columbian Exchange. From the Americas: potatoes, tomatoes, corn, chocolate. From Europe and Asia: wheat (bread, pasta), apples, oranges. While you eat, talk about which foods came from where. What would your meal look like if NONE of the Columbian Exchange happened?`,
          creativePrompt: `Be an EXPLORER! Look at a globe or map. Pick a place you've never been. Imagine you sail there. Draw a picture of your SHIP, what you'd PACK, and what you might find when you arrive. What would you bring back to share with people at home?`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about the Age of Exploration — brave sailors, big ships, the meeting of worlds, and the foods that traveled from the Americas to everywhere. Exploration changed the whole planet. I carry these stories with me. Thank you for journeying with me.`,
          badge: `exploration-explorer`,
          badgeName: `Exploration Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L08] Loaded: "The Age of Exploration" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
