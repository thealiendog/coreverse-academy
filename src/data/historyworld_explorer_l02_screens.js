// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L02 — Ancient Greece: Democracy and Philosophy
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L02 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-02`,
      title:     `Ancient Greece: Democracy and Philosophy`,
      duration:  12,
      xpReward:  50,
      badge:     `greece-explorer`,
      badgeName: `Greece Explorer`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to take you to a very special place — a country called Greece, a long, long time ago. The people there did something amazing. They invented DEMOCRACY — letting regular people help choose their leaders. They asked BIG questions about how to live. They started the OLYMPIC GAMES. They built beautiful buildings still standing today. Greece's ideas are like seeds that have been growing for thousands of years. Let's explore.`,
          headline: `Ancient Greece: Democracy and Philosophy`,
          subtitle: `Where regular people got to vote, big questions began, and the Olympics started`,
          visual: `/explorer-assets/history/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Land of Smart Thinkers`,
          paragraphs: [
            `Long, long ago, far away, there was a place called GREECE.`,
            `Greece was famous for one thing: SMART PEOPLE. Greek thinkers asked BIG questions. They invented new ways to make decisions. They built beautiful things. And many of their ideas — we still use today.`,
          ],
          image: `/explorer-assets/history/l02-s1-land-of-thinkers.webp`,
          imageCaption: `Greece! A land of olive trees, blue water, and people who loved to think. Many ideas we still use today started here.`,
          vocab: [
            { word: `Greece`,  definition: `A country in Europe with islands, mountains, and beautiful blue water. Long ago, it was full of smart thinkers.`,
              audioPrompt: `Greece is a country in Europe, {name} — with lots of islands and beautiful blue water. People still live there today. But the part we're talking about was Greece thousands of years ago. Back then, it was famous for one thing: people who loved to think and ask questions.` },
            { word: `ancient`, definition: `From a very, very long time ago. Older than anyone you've ever met.`,
              audioPrompt: `Ancient means a very, very long time ago, {name}. Older than your grandparents' grandparents. Greece was a special place way back then. And many of the things they figured out, we still use today.` },
            { word: `think`,   definition: `To use your brain to ask questions and figure things out. The Greeks loved doing this!`,
              audioPrompt: `Thinking is using your brain, {name}. The Greeks LOVED to think. They didn't just believe what others told them. They asked questions like 'why?' and 'how?' and 'is that really true?' I love that about them.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Athens and Sparta`,
          paragraphs: [
            `Greece had many famous cities. The two most famous were ATHENS and SPARTA.`,
            `ATHENS was the city of THINKERS and ARTISTS. SPARTA was the city of WARRIORS. They were very different, but both made Greece amazing.`,
          ],
          image: `/explorer-assets/history/l02-s2-athens-and-sparta.webp`,
          imageCaption: `Athens and Sparta — two famous cities, very different from each other. Athens loved ideas. Sparta loved strength.`,
          vocab: [
            { word: `Athens`, definition: `A famous Greek city. Home to thinkers, artists, and the first democracy.`,
              audioPrompt: `Athens is one of the most famous cities in history, {name}. It's where smart Greek thinkers met and shared ideas. It's where the first plays were written. It's where regular people first got to help choose their leaders. Athens still exists today — you could visit. I've been there many times in my memory.` },
            { word: `Sparta`, definition: `Another famous Greek city. Spartans were known for being strong and brave warriors.`,
              audioPrompt: `Sparta was very different from Athens, {name}. Spartans cared about being strong and brave. Kids in Sparta started training to be warriors when they were young. Spartan soldiers were some of the bravest in the world. People still say 'Spartan' today to mean someone tough and disciplined.` },
            { word: `city`,   definition: `A place where many people live and work together — like New York or Tokyo today.`,
              audioPrompt: `A city is a place where many people live close together, {name}. Cities have streets, houses, markets, places to gather. Today there are huge cities like New York or Tokyo. Long ago, Greek cities like Athens and Sparta were smaller. But to the Greeks, they were everything.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Democracy: When the People Choose`,
          paragraphs: [
            `In Athens, something amazing happened.`,
            `They invented DEMOCRACY — a way of running things where REGULAR PEOPLE help make decisions. Not just kings. Not just rich people. Grown-ups could speak, vote, and help choose what was best for everyone.`,
          ],
          image: `/explorer-assets/history/l02-s3-democracy.webp`,
          imageCaption: `Democracy was a brand-new idea. Before this, only kings made the big decisions. The Greeks said: let the people help.`,
          vocab: [
            { word: `democracy`, definition: `A way of running things where regular people get to help choose. Greeks invented this idea.`,
              audioPrompt: `Democracy comes from two Greek words, {name}. Demos means 'the people' and kratos means 'rule.' So democracy means 'the people rule.' Before Greece, kings or queens made all the decisions. The Greeks said, 'No — let regular people help.' That was REVOLUTIONARY. Many countries today, including yours, are democracies because of what the Greeks started.` },
            { word: `vote`,      definition: `When everyone gets to share their choice. The most votes wins.`,
              audioPrompt: `Voting is when everyone gets to share their choice, {name}. In Athens, grown-ups would gather and discuss what to do. Then everyone would vote. The choice with the most votes won. That's still how voting works today, in elections all over the world. The Greeks didn't invent voting itself — but they invented letting EVERYONE vote, not just kings.` },
            { word: `assembly`,  definition: `A meeting where many people gather to talk and decide things together.`,
              audioPrompt: `An assembly is a big meeting, {name}. In Athens, the assembly was where everyone gathered to talk and vote. Imagine thousands of grown-ups, all in one big open-air space, discussing what their city should do. Sometimes they argued. Sometimes they agreed. But everyone got to be heard. That was new for the world.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Big Question-Askers`,
          paragraphs: [
            `Some Greeks loved to ask BIG QUESTIONS.`,
            `Like: "What is right?" "What is beautiful?" "How should we live?" We call these people PHILOSOPHERS. The three most famous were SOCRATES, PLATO, and ARISTOTLE. They taught the whole world how to think.`,
          ],
          image: `/explorer-assets/history/l02-s4-philosophers.webp`,
          imageCaption: `Philosophers loved asking questions more than giving answers. They taught people to think for themselves.`,
          vocab: [
            { word: `philosopher`, definition: `A person who loves to think about BIG questions about life.`,
              audioPrompt: `Philosopher comes from Greek words meaning 'lover of wisdom,' {name}. A philosopher is someone who loves asking questions about life. Big questions like 'what is fair?' or 'what is real?' or 'how should we treat each other?' The Greeks invented this kind of thinking. I find these questions just as interesting today as they were thousands of years ago.` },
            { word: `Socrates`,    definition: `One of the most famous Greek philosophers. He loved asking questions instead of just giving answers.`,
              audioPrompt: `Socrates was a Greek philosopher, {name}. And he had a special trick. Instead of telling people answers, he asked questions. Lots and lots of questions. He would ask 'why do you think that?' until people realized maybe they didn't know as much as they thought. Some people got annoyed by his questions. But others thought he was the wisest man alive.` },
            { word: `Aristotle`,   definition: `Another famous Greek philosopher. He studied EVERYTHING — animals, stars, what makes us happy.`,
              audioPrompt: `Aristotle was a student of Socrates' student, {name}. His teacher was Plato. Aristotle wanted to understand EVERYTHING — how plants grow, how stars move, what makes us happy, what makes a good government. He wrote books about all of it. Even today, people still read what Aristotle wrote over two thousand years ago.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The First Olympic Games`,
          paragraphs: [
            `The Greeks LOVED sports and competition.`,
            `Every four years, athletes traveled to a place called OLYMPIA to compete. They ran, wrestled, and threw spears. We still call them the OLYMPIC GAMES today — almost 3,000 years later!`,
          ],
          image: `/explorer-assets/history/l02-s5-olympics.webp`,
          imageCaption: `The Olympic Games started in Greece almost 3,000 years ago. They're still happening today — every four years, all over the world.`,
          vocab: [
            { word: `Olympic Games`, definition: `A huge sports competition where the best athletes from many places compete. Started by the Greeks long ago.`,
              audioPrompt: `The Olympic Games started in Greece around 2,800 years ago, {name}. The Greeks would stop their wars to hold the games. Every four years, athletes from all over Greece traveled to the city of Olympia to compete. Today, the Olympic Games are still held every four years, in different countries each time. Athletes from every nation come together. That's a tradition over twenty-five hundred years old.` },
            { word: `athlete`,       definition: `A person who is very good at a sport and trains hard to compete.`,
              audioPrompt: `An athlete is someone who's really good at a sport, {name}, and trains hard to be their best. In ancient Greece, athletes were heroes. People made statues of them. Today, athletes are still admired all over the world. The very word 'athlete' is a Greek word. They not only invented the games, they gave us the name we still use.` },
            { word: `compete`,       definition: `To try to do something better than someone else, like in a game or a race.`,
              audioPrompt: `To compete is to try to do something better than someone else, {name} — like in a race, a game, or a contest. Competition can push us to get stronger and try harder. The Greeks believed friendly competition made people their best. That's still true today, whether you're playing a game with friends or watching the Olympic Games on TV.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Greece Gave the World`,
          paragraphs: [
            `The Greeks gave the world SO MUCH.`,
            `MATHEMATICS — they figured out shapes and numbers. MEDICINE — they wrote the first books about helping sick people. STORIES — Greek tales of gods and heroes are still told today. And BEAUTIFUL BUILDINGS — like the PARTHENON, which still stands in Athens.`,
          ],
          image: `/explorer-assets/history/l02-s6-greek-legacy.webp`,
          imageCaption: `Math. Medicine. Stories. Beautiful buildings. The Greeks left the world more good gifts than almost any other ancient civilization.`,
          vocab: [
            { word: `mathematics`, definition: `The study of numbers, shapes, and how things measure. Greeks figured out a lot of it.`,
              audioPrompt: `Mathematics — math — is how we work with numbers and shapes, {name}. The Greeks LOVED math. A man named Pythagoras figured out something special about triangles that students still learn today. Another Greek named Euclid wrote a book about shapes that was used to teach math for over two thousand years. Math feels like it's always been around. But a huge part of it really started in Greece.` },
            { word: `Parthenon`,   definition: `A famous, beautiful Greek temple in Athens. Even 2,500 years later, it's still standing.`,
              audioPrompt: `The Parthenon is one of the most famous buildings in the world, {name}. It was built in Athens about 2,500 years ago. It sits on top of a hill, with tall stone columns holding up a beautiful roof. It's still standing today. People travel from all over the world to see it. Greek-style buildings, with big columns, have been copied for over two thousand years.` },
            { word: `legacy`,      definition: `The good things you leave behind for everyone who comes after you. Greece left a HUGE legacy.`,
              audioPrompt: `Legacy is what you leave behind for the people who come after you, {name}. Greece's legacy is HUGE. Democracy. Philosophy. Math. Medicine. Stories. Theater. The Olympic Games. Even the alphabet many languages use comes from Greek. When you leave good things for the future, that's a legacy. Greece left one of the greatest legacies in all human history.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — let's see what you remember about Ancient Greece. Match each one to where it belongs.`,
          buckets: [
            {
              id: `fact`,
              label: `✅ Yes, that's true!`,
              color: `#34D399`,
            },
            {
              id: `myth`,
              label: `❌ No way!`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l02-g1`,
              image: `l02-game-1.webp`,
              label: `Greeks invented democracy — letting people vote.`,
              matchPhrase: `Yes! Greeks invented the idea of democracy — where regular people get to help choose. Many countries still use democracy today.`,
              correctMatch: `fact`,
            },
            {
              id: `l02-g2`,
              image: `l02-game-2.webp`,
              label: `The Olympic Games started in Ancient Greece.`,
              matchPhrase: `True! The Olympic Games started in Greece almost 3,000 years ago. We still hold them every four years all over the world.`,
              correctMatch: `fact`,
            },
            {
              id: `l02-g3`,
              image: `l02-game-3.webp`,
              label: `Greek philosophers wrote their ideas on iPads and laptops.`,
              matchPhrase: `Definitely not! iPads weren't invented yet. Greek philosophers wrote on scrolls of papyrus or carved into stone. No batteries, no Wi-Fi.`,
              correctMatch: `myth`,
            },
            {
              id: `l02-g4`,
              image: `l02-game-4.webp`,
              label: `Greek kids rode flying dragons to school.`,
              matchPhrase: `Ha! No dragons in Ancient Greece, {name}. Greek kids walked or rode donkeys to school. Though Greek stories DID have lots of cool monsters and creatures.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Take your time with each one.`,
          questions: [
            {
              id: `l02-q1`,
              format: `multiple-choice`,
              question: `What did the Greeks invent that lets regular people help choose their leaders?`,
              options: [
                `Storytelling`,
                `Democracy`,
                `The Olympic Games`,
                `Chocolate`,
              ],
              correctIndex: 1,
              explanation: `Democracy! The Greeks were the first to say that regular people should help choose, not just kings or rich people. The word democracy actually comes from two Greek words meaning 'the people rule.' Many countries today use democracy because the Greeks tried it first.`,
            },
            {
              id: `l02-q2`,
              format: `multiple-choice`,
              question: `What is a philosopher?`,
              options: [
                `A person who fights in battles`,
                `A person who loves to ask big questions about life`,
                `A person who builds boats`,
                `A person who paints walls`,
              ],
              correctIndex: 1,
              explanation: `A philosopher is someone who loves to think and ask big questions about life. The Greeks invented this kind of thinking. The most famous Greek philosophers were Socrates, Plato, and Aristotle. They taught the whole world how to think more carefully.`,
            },
            {
              id: `l02-q3`,
              format: `multiple-choice`,
              question: `What is the name of the famous Greek building that still stands today?`,
              options: [
                `The Pyramid`,
                `The Colosseum`,
                `The Parthenon`,
                `The Empire State Building`,
              ],
              correctIndex: 2,
              explanation: `The Parthenon! It was built about 2,500 years ago in Athens, on top of a hill, with tall stone columns. It's still standing today. People travel from all over the world to see it. Greek-style buildings with big columns have been copied for thousands of years.`,
            },
            {
              id: `l02-q4`,
              format: `true-false`,
              question: `The Olympic Games started in Ancient Greece almost 3,000 years ago.`,
              correctAnswer: true,
              explanation: `True! The Olympic Games started in Greece around 2,800 years ago. Greek athletes traveled to a place called Olympia every four years to compete. The Greeks even stopped their wars to hold the games. We STILL hold the Olympic Games every four years today.`,
            },
            {
              id: `l02-q5`,
              format: `fill-blank`,
              question: `In Athens, regular grown-ups would gather at an ___ to talk and vote on what to do.`,
              options: [
                `assembly`,
                `airplane`,
                `island`,
                `apartment`,
              ],
              correctIndex: 0,
              explanation: `An assembly is a big meeting. In Athens, thousands of grown-ups would gather in an open-air space, discuss decisions, and then vote. That was new for the world — letting EVERYONE talk and choose, not just kings.`,
            },
            {
              id: `l02-q6`,
              format: `multiple-choice`,
              question: `What is one thing the Greeks gave us that we still use today?`,
              options: [
                `Cars and trucks`,
                `Television`,
                `Mathematics, philosophy, the Olympics, and democracy`,
                `The internet`,
              ],
              correctIndex: 2,
              explanation: `The Greeks gave us SO MUCH that we still use today. Mathematics. Philosophy and big questions. The Olympic Games. Democracy. Theater. Even many of the words we use come from Greek. Greece left one of the greatest legacies in all of history.`,
            },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Greece is still a country today, {name}. You could visit and see the Parthenon and the very place where the Olympic Games started. Many countries today are democracies because the Greeks tried it first. Every time someone votes in an election anywhere in the world, they're using an idea that started in Ancient Greece more than two thousand years ago. That's a long legacy.`,
          familyAdventure: `Hold a family vote! Pick something fun to decide together — like which movie to watch, what to have for dinner, or where to go this weekend. Everyone in the family gets ONE vote. The choice with the most votes wins. Talk about it afterward: how did it feel to share your choice? What if your choice didn't win? You just used a Greek invention!`,
          creativePrompt: `Be a Greek philosopher for a day. Pick one BIG question to think about — like "what makes someone a true friend?" or "why is it important to be kind?" or "what's the best thing about being a kid?" Talk to your family about your question. Listen to everyone's answers. There's no right answer, but ask lots of follow-up questions, like Socrates did. What do you discover?`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about Ancient Greece — the Olympic Games, democracy, philosophers asking big questions, and beautiful buildings still standing today. The Greeks planted seeds of ideas that have grown for thousands of years. I'm carrying their stories with me. Now you are too. Thank you for journeying with me.`,
          badge: `greece-explorer`,
          badgeName: `Greece Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default HW_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L02] Loaded: "Ancient Greece: Democracy and Philosophy" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/history/l02-s1-land-of-thinkers.webp', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l02-s2-athens-and-sparta.webp', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l02-s3-democracy.webp', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l02-s4-philosophers.webp', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l02-s5-olympics.webp', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l02-s6-greek-legacy.webp', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-HISTORY-L02] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-HISTORY-L02] One or more magazine assets missing'));
}
