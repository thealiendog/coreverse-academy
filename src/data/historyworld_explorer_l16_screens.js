// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L16 — Countries Around the World
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L16 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-16`,
      title:     `Countries Around the World`,
      duration:  12,
      xpReward:  50,
      badge:     `world-explorer`,
      badgeName: `World Explorer`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to take you on a JOURNEY around our world. There are 195 different countries on Earth! Each one is special. Each one has its own LANGUAGES, FOODS, MUSIC, TRADITIONS, and HISTORY. Some countries are HUGE. Some are tiny. Some have snow. Some have jungles. Let's explore the amazing variety of our planet TOGETHER.`,
          headline: `Countries Around the World`,
          subtitle: `Exploring the 195 amazing countries on our planet — each one special in its own way`,
          visual: `/explorer-assets/history/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `So Many Countries!`,
          paragraphs: [
            `Did you know there are 195 COUNTRIES on Earth?`,
            `Each country is its own special place — with its own name, its own flag, its own people, and its own stories. Some countries are HUGE like Russia or China. Some are tiny — like VATICAN CITY, which is smaller than your local park! The world is FULL of countries.`,
          ],
          image: `/explorer-assets/history/l16-s1-many-countries.webp`,
          imageCaption: `195 countries. From huge Russia to tiny Vatican City. The world is full of places, each one unique.`,
          vocab: [
            { word: `country`,         definition: `A place with its own government, flag, and rules. There are 195 countries on Earth today.`,
              audioPrompt: `A country is a place with its own government, flag, language, and rules, {name}. Countries have BORDERS — lines that separate them from other countries. Inside the borders, the country makes its own decisions. There are 195 countries in the world today. New countries can form sometimes — the youngest country in the world is called SOUTH SUDAN, which became its own country in 2011. Less than 15 years ago.` },
            { word: `Earth`,           definition: `Our home planet. The third planet from the Sun.`,
              audioPrompt: `Earth is our home planet, {name}. It's the only planet we know of with life. Earth is HUGE compared to us — but small compared to the universe. There's so much variety here. Frozen places. Boiling-hot places. Jungles full of life. Deserts of nothing but sand. Cities of millions. Villages of just a few. All of it shares one home. Our beautiful Earth.` },
            { word: `flag`,            definition: `A piece of cloth that represents a country. Each country has its own special flag.`,
              audioPrompt: `A flag is a piece of cloth that represents a country, {name}. Each country has its own flag — different colors, shapes, and symbols. Flags are everywhere! Flying outside buildings. Carried at the Olympics. Sewn on backpacks. When you see a country's flag, you know that country is being represented. Some flags have been the same for hundreds of years. Some are brand new. They're like a country's special signature.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Different Places, Different Lives`,
          paragraphs: [
            `Countries are AMAZINGLY different from each other.`,
            `Some are full of MOUNTAINS, like Switzerland or Nepal. Some are mostly DESERT, like Egypt. Some are JUNGLES with parrots and monkeys, like Brazil. Some are ICY, like Iceland. The land, the weather, the animals — all very different! That's part of what makes the world so AMAZING.`,
          ],
          image: `/explorer-assets/history/l16-s2-different-places.webp`,
          imageCaption: `Mountains. Deserts. Jungles. Ice. Each country sits in a special landscape with its own weather and creatures.`,
          vocab: [
            { word: `landscape`, definition: `What a place looks like — mountains, jungles, deserts, beaches, plains, etc.`,
              audioPrompt: `Landscape means what a place looks like, {name} — the mountains, jungles, deserts, beaches, plains. Different countries have different landscapes. Switzerland has the snowy Alps mountains. Egypt has hot deserts. Brazil has the giant Amazon rainforest. Iceland has volcanoes AND ice. The landscape shapes the country — what people grow, eat, do, and even how they live.` },
            { word: `weather`,   definition: `What the air feels like outside — sunny, rainy, hot, cold. Different countries have very different weather.`,
              audioPrompt: `Weather is what the air feels like outside, {name} — sunny, rainy, hot, cold, snowy, windy. Different countries have wildly different weather. In some countries, it never snows. In others, it snows all year round. Some countries have rainy seasons that last for months. Some countries are in big deserts where it almost never rains. Weather shapes a country's whole way of life.` },
            { word: `amazing`,   definition: `Wonderful and surprising. The world is amazingly different from place to place.`,
              audioPrompt: `Amazing means wonderful and surprising, {name}. Our world is amazing because it's so different from place to place. You could fly from a snowy mountain to a hot desert to a tropical jungle all in one day. Each country has its own kind of amazing. Some countries you might want to visit because of their beaches. Others because of their old buildings. Others because of their unique animals. There's so much amazing to see.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Languages Everywhere`,
          paragraphs: [
            `In different countries, people speak different LANGUAGES.`,
            `In total, there are over 7,000 languages spoken in the world today! Hello is "Bonjour" in France. "Hola" in Spanish-speaking countries. "Ni hao" in China. "Namaste" in India. Many languages have their OWN ALPHABETS, like Chinese, Arabic, or Russian. Languages are like the music of each country.`,
          ],
          image: `/explorer-assets/history/l16-s3-languages.webp`,
          imageCaption: `7,000 languages! Each one is a doorway into a culture, a history, a way of seeing the world.`,
          vocab: [
            { word: `language`, definition: `The way people talk to each other. There are over 7,000 languages in the world.`,
              audioPrompt: `A language is the way people talk to each other, {name}. There are over 7,000 different languages in the world today. Some are spoken by billions of people — like English, Mandarin Chinese, or Spanish. Some are spoken by only a few hundred. Some are ancient. Some are new. Each language has its own beauty. Each language has its own way of expressing things. Some words only exist in one language and can't be translated to others.` },
            { word: `hello`,    definition: `A greeting we use to start a conversation. Every language has its own way of saying hello.`,
              audioPrompt: `Hello is a greeting we use to start a conversation, {name}. In different languages, hello sounds different. Bonjour in French. Hola in Spanish. Konnichiwa in Japanese. Ni hao in Mandarin. Salaam in Arabic. Namaste in Hindi. Aloha in Hawaiian. Some greetings are spoken. Some come with bows. Some come with hugs. Greeting people is one of the most universal human things we do.` },
            { word: `alphabet`, definition: `The set of letters or symbols a language uses for writing. Different languages have different alphabets.`,
              audioPrompt: `An alphabet is the set of letters or symbols a language uses for writing, {name}. English uses 26 letters. Arabic uses 28 different ones. Russian uses the Cyrillic alphabet with 33 letters. Chinese doesn't use letters at all — it uses thousands of CHARACTERS, each one meaning a word or idea. Some kids in different countries learn to read in completely different alphabets. They might not be able to read each other's writing — even though they're learning the same way.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Countries Are Run`,
          paragraphs: [
            `Different countries have different ways of being RUN.`,
            `Many countries are DEMOCRACIES — people vote for their leaders, just like Ancient Greece taught us! Some countries have a KING or QUEEN. Some have a PRESIDENT. Some have a PRIME MINISTER. Each country has its own way of choosing who's in charge and making decisions.`,
          ],
          image: `/explorer-assets/history/l16-s4-governments.webp`,
          imageCaption: `Different countries, different ways of being run. Democracies, kings, presidents, prime ministers. Each one's a system.`,
          vocab: [
            { word: `government`,    definition: `The group of people who run a country and make decisions. Every country has its own government.`,
              audioPrompt: `A government is the group of people who run a country and make decisions, {name}. Every country has one. The government decides about laws, taxes, schools, and many other things that affect everyone. Some governments have a lot of power. Some have less. Some are elected by the people. Some aren't. Understanding how governments work is something you'll learn more about as you grow up.` },
            { word: `democracy`,     definition: `A country where people vote for their leaders. Many countries today are democracies.`,
              audioPrompt: `A democracy is a country where people VOTE for their leaders, {name}. Like we learned with Ancient Greece — democracy means 'the people rule.' Many countries today are democracies, including the United States, France, India, Brazil, and many more. In a democracy, ordinary people get to have a say in who runs their country. That's a wonderful idea. Greece invented it 2,500 years ago. We're still using it.` },
            { word: `leader`,        definition: `The person in charge of running a country. Leaders can be presidents, prime ministers, kings, or queens.`,
              audioPrompt: `A leader is the person in charge of running a country, {name}. Different countries have different kinds of leaders. The United States has a PRESIDENT. The United Kingdom has a PRIME MINISTER. Some countries — like Norway and Japan — have KINGS or QUEENS who do mostly ceremonial things, plus a prime minister who actually runs the country. Each country has its own way. Leaders make big decisions that affect millions of people.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Cultures Around the World`,
          paragraphs: [
            `Every country has its own CULTURE.`,
            `Culture means the FOOD people eat, the MUSIC they listen to, the CLOTHES they wear, the HOLIDAYS they celebrate, the GAMES they play, and the STORIES they tell. Diwali in India. Chinese New Year. Carnival in Brazil. Lots of different ways to be human. All of them BEAUTIFUL.`,
          ],
          image: `/explorer-assets/history/l16-s5-cultures.webp`,
          imageCaption: `Culture! Food, music, clothes, holidays. Every country has its own way of being human. Each one is beautiful.`,
          vocab: [
            { word: `culture`,    definition: `Everything that makes a country's way of life special — food, music, holidays, stories, art, language.`,
              audioPrompt: `Culture is everything that makes a country's way of life special, {name}. The food people eat. The music they listen to. The clothes they wear. The holidays they celebrate. The stories they tell their kids. The games they play. Even the way they greet each other. Every country has a unique culture. And different families within the same country can have different cultures too. Culture is what makes the world so colorful.` },
            { word: `tradition`,  definition: `Something families and countries do over and over, year after year. Traditions connect us to the past.`,
              audioPrompt: `A tradition is something families and countries do over and over, year after year, {name}. Like Thanksgiving dinner. Or Chinese New Year. Or the way your family celebrates birthdays. Traditions connect us to the past. They connect us to our grandparents and their grandparents. Every family has its own traditions. Every country has its own traditions. Following traditions can feel warm and special — like you're part of something bigger than yourself.` },
            { word: `celebrate`,  definition: `To do something special to mark an important day or event.`,
              audioPrompt: `To celebrate is to do something special to mark an important day or event, {name}. Different countries celebrate different things. Independence days. New Years. Religious holidays. Cultural festivals. Carnival in Brazil. Day of the Dead in Mexico. Diwali in India. Eid in many Muslim countries. Christmas. Hanukkah. Each celebration has its own foods, music, and traditions. Learning about different celebrations is one of the best ways to learn about other cultures.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `One Connected World`,
          paragraphs: [
            `Even though there are 195 countries, we all share ONE PLANET.`,
            `Today, the world is more connected than EVER. Kids in different countries can play games together online. Travelers fly between continents in HOURS. Music, movies, and ideas cross borders easily. We're all DIFFERENT — and we're all part of ONE WORLD. Learning about other places makes us bigger, smarter, and kinder.`,
          ],
          image: `/explorer-assets/history/l16-s6-connected-world.webp`,
          imageCaption: `One planet. Many countries. We're more connected than ever — and the more we learn about each other, the better.`,
          vocab: [
            { word: `planet`,    definition: `Earth — the place where ALL countries are. We share one home.`,
              audioPrompt: `Earth is a planet, {name}. ALL 195 countries are on this one planet. Some are far apart. Some are right next to each other. Some are big. Some are tiny. But all of us live on Earth. Sharing one planet means we share weather, water, air, and big problems like climate change. We're all in this together. That's why what happens in one country can affect many others. That's why working together matters.` },
            { word: `connected`, definition: `Linked together. People in different countries are more connected today than ever before.`,
              audioPrompt: `Connected means linked together, {name}. Today, the world is more connected than ever in history. You can video-call someone in another country. You can read books written by authors thousands of miles away. You can watch movies from any country. You can buy things made anywhere. The internet has connected the world. So have airplanes and phones. That's pretty amazing — it means understanding other countries is more important than ever.` },
            { word: `learn`,     definition: `To find out about something new. Learning about other countries makes you bigger inside.`,
              audioPrompt: `Learn means to find out about something new, {name}. Every time you learn about another country, you grow inside. You understand the world a little better. You see that there are many ways to be human. You discover that what feels normal to you might feel strange to someone else — and the other way around. Learning is one of the most beautiful things humans do. Stay curious. Keep learning. The world is full of surprises.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `There are 195 different countries on Earth today.`,
              matchPhrase: `Yes! There are 195 countries — each with its own flag, language, and culture. From huge Russia to tiny Vatican City. The world is FULL of places.`,
              correctMatch: `fact` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `There are over 7,000 different languages spoken in the world.`,
              matchPhrase: `True! Over 7,000 languages! Each one is a doorway into a culture and a way of seeing the world. That's a LOT of ways to say hello.`,
              correctMatch: `fact` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `Everyone in the whole world speaks the exact same language.`,
              matchPhrase: `Not quite! Imagine how much more boring that would be. There are over 7,000 languages, {name}. Each one is special.`,
              correctMatch: `myth` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `Earth is one big country with no borders.`,
              matchPhrase: `Definitely not! Earth has 195 different countries, each with its own borders, flags, and governments. Different doesn't mean less — different makes the world richer.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `About how many countries are there in the world today?`,
              options: [`5`, `50`, `195`, `Over 1,000`],
              correctIndex: 2,
              explanation: `195 countries! Each one with its own flag, language, and culture. Some are huge like Russia. Some are tiny like Vatican City. All of them share our one planet.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `About how many languages are spoken in the world?`,
              options: [`Just one`, `About 10`, `Over 7,000`, `Just a few hundred`],
              correctIndex: 2,
              explanation: `Over 7,000 languages! That's a lot of ways to say hello. Different countries have different official languages. Some have several. Each language is a doorway into a different culture.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `What is CULTURE?`,
              options: [`Only food`, `Everything that makes a country's way of life special — food, music, holidays, stories, art, language`, `Only sports`, `Only houses`],
              correctIndex: 1,
              explanation: `Culture is EVERYTHING that makes a country's way of life special. The food, music, clothes, holidays, games, stories, and languages. Every country has its own culture — and each one is beautiful.` },
            { id: `l16-q4`, format: `true-false`,
              question: `Every country has its own government and its own flag.`,
              correctAnswer: true,
              explanation: `True! Every country has its own government (the people who make decisions) and its own flag (the symbol of the country). Each is unique. Each tells a story about that country.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `A country where people VOTE for their leaders is called a ___.`,
              options: [`democracy`, `bakery`, `playground`, `library`],
              correctIndex: 0,
              explanation: `A democracy! Just like the Ancient Greeks invented. Today, many countries are democracies — including the United States, India, Brazil, France, and many more. People vote for their leaders.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Why is learning about other countries important?`,
              options: [`It's not important`, `Other countries are scary`, `It makes us smarter, bigger, and kinder — and shows us how many ways there are to be human`, `Only kids who travel a lot need to know`],
              correctIndex: 2,
              explanation: `Learning about other countries makes us smarter, bigger inside, and kinder. It helps us understand there are many ways to be human. Other ways of living aren't wrong — just different. And different is beautiful.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Today is the most connected time in human history, {name}. You can video-call someone on the other side of the world. You can watch movies from countries you've never visited. You can learn languages on apps. Travel is faster than ever — you can fly across the entire planet in less than a day. The world is BIG, but it's also SMALL because of all the connections. Every country is one click, one flight, one curious question away.`,
          familyAdventure: `Pick a country you don't know much about. Look it up together! Where is it? What languages do they speak? What's their flag look like? What do they eat? What music do they listen to? What's one cool thing about that country? Maybe even cook a simple recipe from that country together. Make it a "country dinner" night!`,
          creativePrompt: `Design a flag for a brand-new country YOU make up! What's it called? What's the landscape like — mountains? Beaches? Cities? What colors are on the flag? What symbols? What language do they speak? Draw your country's flag and write a few facts about it.`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know that we share one planet with 195 countries, thousands of languages, and incredible cultures. Each country is special. Each one's a doorway into a different way of being human. The more we learn about each other, the better the world gets. I carry these stories with me. Thank you for journeying with me.`,
          badge: `world-explorer`,
          badgeName: `World Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L16] Loaded: "Countries Around the World" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
