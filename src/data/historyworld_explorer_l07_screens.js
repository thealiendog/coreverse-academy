// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L07 — The Renaissance: A Rebirth of Ideas
// Age band : explorers (6–8)   Guide: lyra
// Slots between L06 (Middle Ages) and L08 (Age of Exploration)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L07 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-07`,
      title:     `The Renaissance: A Rebirth of Ideas`,
      duration:  12,
      xpReward:  50,
      badge:     `renaissance-thinker`,
      badgeName: `Renaissance Thinker`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. We left Europe in the MIDDLE AGES — knights, castles, a slower time. Today we explore what came NEXT — the RENAISSANCE. It means "REBIRTH" in French. Around 600 years ago, Europe woke up. Suddenly, people made AMAZING art, asked BIG questions, invented things, and got CURIOUS about the whole world. The Renaissance changed everything — and led directly to the Age of Exploration. Let's dive in.`,
          headline: `The Renaissance: A Rebirth of Ideas`,
          subtitle: `When Europe woke up — and the curiosity boom that changed the world`,
          visual: `/explorer-assets/history/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A LIGHT After the MIDDLE AGES`,
          paragraphs: [
            `Imagine Europe in the late Middle Ages — about 700 years ago. People worked the land, lived simply, and most couldn't read. New ideas were rare. Then something STARTED TO CHANGE.`,
            `Around the 1300s, in cities of ITALY, something AWAKENED. Scholars rediscovered old books from Ancient GREECE and ROME that had been forgotten for centuries. These books were full of ideas — about art, science, philosophy, government. People got EXCITED. "If the ancients knew so much, what else can we learn?" they thought. This excitement spread. Artists made better paintings. Builders made more beautiful buildings. Thinkers asked bigger questions. Discoveries happened faster. People called this the RENAISSANCE — French for "REBIRTH." Europe was reborn into a curious, creative, ambitious age. It would last about 300 years (1300s to 1600s) and change everything.`,
          ],
          image: `/explorer-assets/history/l07-s1-light-after-dark.webp`,
          imageCaption: `From medieval times to Renaissance dawn — Europe wakes up into a curious, creative new age.`,
          vocab: [
            { word: `Renaissance`,    definition: `A period of REBIRTH in ideas and ART in Europe. The RENAISSANCE lasted from the 1300s to the 1600s.`,
              audioPrompt: `Renaissance, {name}, is a period of rebirth in ideas and art in Europe. The Renaissance lasted from the thirteen hundreds to the sixteen hundreds. The word is French for rebirth. Europe woke up. New art. New science. New questions. New inventions. A creative explosion that lasted 300 years.` },
            { word: `rebirth`,        definition: `Coming BACK to LIFE. The Renaissance was a REBIRTH of curiosity and learning in Europe.`,
              audioPrompt: `Rebirth, {name}, means coming back to life. The Renaissance was a rebirth of curiosity and learning in Europe. Not literal rebirth — but a feeling that ancient ideas had returned and exciting NEW ones were possible too. Like a forest that's been quiet for years suddenly bursting into spring. That's rebirth.` },
            { word: `Italy`,          definition: `The COUNTRY where the Renaissance began. ITALY was full of trade, money, and ancient Roman ruins to study.`,
              audioPrompt: `Italy, {name}, is the country where the Renaissance began. Italy was full of trade, money, and ancient Roman ruins to study. Italian cities like Florence, Venice, and Rome had wealthy merchant families who paid for art and learning. They had ancient Roman buildings everywhere — reminders of the past. It was the perfect place for a rebirth of ideas.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `FLORENCE: Heart of the Renaissance`,
          paragraphs: [
            `The Renaissance had a HEART — and it was in the Italian city of FLORENCE. If you visit Florence today, you can still see what was built then.`,
            `Florence was a busy trading city on the Arno river. Its wealthy merchants — especially the famous MEDICI family — had so much money they spent some of it on ART and LEARNING. They paid artists, sculptors, and architects to make beautiful things. They sponsored thinkers to write books. They funded grand churches and palaces. This was called PATRONAGE — wealthy people supporting creative people. Without patrons, many famous works wouldn't exist. The Medici family paid Michelangelo to sculpt David. They funded Leonardo da Vinci. They built the GREAT DOME of the Florence Cathedral — at the time, the largest dome in the world. Walking through Florence felt like walking through a giant outdoor museum. Other Italian cities — Rome, Venice, Milan — followed Florence's lead. The Renaissance spread from city to city, and then north into the rest of Europe.`,
          ],
          image: `/explorer-assets/history/l07-s2-florence-italy.webp`,
          imageCaption: `Florence: heart of the Renaissance. Cathedral dome, red rooftops, the Medici family bankrolled the rebirth.`,
          vocab: [
            { word: `Florence`,       definition: `The Italian CITY where the Renaissance began. FLORENCE was full of art, money, and creative people.`,
              audioPrompt: `Florence, {name}, is the Italian city where the Renaissance began. Florence was full of art, money, and creative people. The Medici family ruled it. Leonardo, Michelangelo, and many other geniuses worked there. Today, Florence is still one of the most beautiful cities in the world — full of Renaissance art you can visit and see.` },
            { word: `Medici`,         definition: `A wealthy FAMILY of bankers and rulers in Florence. The MEDICI paid for much of the Renaissance.`,
              audioPrompt: `The Medici, {name}, were a wealthy family of bankers and rulers in Florence. The Medici paid for much of the Renaissance. They earned vast money through banking — invented modern banking, really — then spent it on art and learning. Without the Medici, we wouldn't have many of the most famous Renaissance works. Money plus good taste plus generosity equals incredible legacy.` },
            { word: `patron`,         definition: `Someone who PAYS for artists or thinkers to make their work. PATRONS made Renaissance art possible.`,
              audioPrompt: `A patron, {name}, is someone who pays for artists or thinkers to make their work. Patrons made Renaissance art possible. An artist needs paint, brushes, food, a place to live. Without a patron paying for these, the artist couldn't focus on making art. Today, museums and governments often play this role. In the Renaissance, wealthy families like the Medici were the great patrons.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `LEONARDO da Vinci: The Universal Genius`,
          paragraphs: [
            `If you only learned about ONE Renaissance person, make it LEONARDO DA VINCI. Born in 1452 near Florence, Leonardo was the most CURIOUS human who has ever lived.`,
            `Leonardo was an ARTIST. He painted the MONA LISA — the most famous painting in the world. He painted THE LAST SUPPER — another world treasure. But that's just the start. Leonardo was also a SCIENTIST. He studied human bodies by dissecting them — drawing the muscles, bones, and organs with incredible detail. He was an INVENTOR. He sketched designs for flying machines, helicopters, tanks, parachutes, and submarines — hundreds of years before anyone built them. He was an ENGINEER. He designed bridges, canals, and weapons. He studied animals, plants, water, light. He kept thousands of pages of NOTEBOOKS, writing backwards (mirror-style) to keep his thoughts private. Leonardo painted with his right hand AND wrote backwards with his left. He embodied the Renaissance ideal — be curious about EVERYTHING and try to MASTER it all. We still don't have anyone quite like him today.`,
          ],
          image: `/explorer-assets/history/l07-s3-leonardo.webp`,
          imageCaption: `Leonardo da Vinci: artist, scientist, inventor, engineer — the most curious human who ever lived.`,
          vocab: [
            { word: `Leonardo`,       definition: `The most FAMOUS Renaissance genius. LEONARDO DA VINCI was an artist, scientist, and inventor all in one.`,
              audioPrompt: `Leonardo da Vinci, {name}, was the most famous Renaissance genius. Leonardo was an artist, scientist, and inventor all in one. Born in 1452 in Italy. He painted the Mona Lisa. He sketched flying machines 400 years before airplanes existed. He studied everything. The Renaissance ideal — curious about all of life — that was Leonardo.` },
            { word: `Mona Lisa`,      definition: `The world's MOST FAMOUS PAINTING. The MONA LISA is a small portrait painted by Leonardo, smiling mysteriously.`,
              audioPrompt: `The Mona Lisa, {name}, is the world's most famous painting. It's a small portrait — only about thirty by twenty inches. The woman has a mysterious smile that seems to follow you around the room. People have stared at it for 500 years and still wonder what she's thinking. You can see it at the Louvre museum in Paris.` },
            { word: `curious`,        definition: `Wanting to LEARN and EXPLORE. The Renaissance ideal was to be deeply CURIOUS about everything.`,
              audioPrompt: `Curious, {name}, means wanting to learn and explore. The Renaissance ideal was to be deeply curious about everything. Leonardo asked questions about birds, water, light, the human body, weapons, music, anatomy, math — anything that crossed his mind. Curiosity is what makes great minds. It's also what makes a great life.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `MICHELANGELO and Renaissance ART`,
          paragraphs: [
            `MICHELANGELO BUONARROTI was another Renaissance giant. He was a SCULPTOR, a PAINTER, an ARCHITECT, and a POET. He believed art was a CALLING from God.`,
            `Michelangelo's most famous sculpture is DAVID — a 17-foot marble statue of the biblical hero. Carved from a single huge block of marble. The detail is INCREDIBLE — muscles, veins, expression. Many call it the most perfect statue ever made. His other masterpiece is the SISTINE CHAPEL CEILING in Rome. Michelangelo painted it on his back, lying on scaffolding HIGH up. It took him 4 YEARS. The ceiling shows scenes from the Bible — including the famous image of God reaching out to touch Adam's finger. People come from all over the world just to see it. Renaissance artists changed HOW art was made. They invented PERSPECTIVE — making flat paintings look 3D and deep. They studied human bodies to paint people accurately. They painted everyday humans, not just kings and saints. Art became more REALISTIC, more BEAUTIFUL, and more HUMAN. The Renaissance gave us the modern idea of what GREAT ART can be.`,
          ],
          image: `/explorer-assets/history/l07-s4-michelangelo-sistine.webp`,
          imageCaption: `Michelangelo painting the Sistine Chapel. 4 years on his back. Some of the world's most awe-inspiring art.`,
          vocab: [
            { word: `Michelangelo`,   definition: `A famous Renaissance SCULPTOR and PAINTER. MICHELANGELO carved David and painted the Sistine Chapel.`,
              audioPrompt: `Michelangelo, {name}, was a famous Renaissance sculptor and painter. Michelangelo carved David — the 17-foot marble statue — and painted the Sistine Chapel ceiling in Rome. He worked for years on his masterpieces. He was passionate, intense, and believed art was sacred. Like Leonardo, he could do many things. Renaissance geniuses didn't specialize — they tried it all.` },
            { word: `Sistine Chapel`, definition: `A famous CHAPEL in Rome with a painted CEILING. The SISTINE CHAPEL ceiling is Michelangelo's most famous painting.`,
              audioPrompt: `The Sistine Chapel, {name}, is a famous chapel in Rome with a painted ceiling. The Sistine Chapel ceiling is Michelangelo's most famous painting. It took 4 years. He had to paint while lying on scaffolding high above the ground. Today, you can visit it in Vatican City — millions of people do every year. Looking up at it, people are often speechless.` },
            { word: `perspective`,    definition: `A TECHNIQUE that makes flat art look DEEP and 3D. PERSPECTIVE was a Renaissance breakthrough.`,
              audioPrompt: `Perspective, {name}, is a technique that makes flat art look deep and three-D. Perspective was a Renaissance breakthrough. Before, paintings looked flat — all the people the same size. Renaissance artists figured out how to draw things smaller when farther away, like real life. This made paintings feel like windows into real scenes. Massive improvement in art.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The PRINTING PRESS Changes Everything`,
          paragraphs: [
            `Around 1450, a German named JOHANNES GUTENBERG invented something WORLD-CHANGING — the PRINTING PRESS for movable type.`,
            `Before Gutenberg, books were COPIED BY HAND. A monk would spend MONTHS or YEARS writing one book. Books were RARE, EXPENSIVE, and only the rich could afford them. Most people couldn't read because there was nothing to read. Gutenberg's printing press changed all that. Workers set INDIVIDUAL LETTERS made of metal into a tray, inked them, and pressed them on paper. Suddenly, you could make HUNDREDS of copies of a book in the time it used to take to copy ONE by hand. Books got CHEAP. Books spread EVERYWHERE. People learned to read. Ideas spread across Europe FAST. New science, new philosophy, new religious arguments — all spread by printed books. The first book Gutenberg printed was the Bible — but soon, people were printing everything: science books, novels, poetry, instructions, maps. The printing press TURBOCHARGED the Renaissance. Without it, the rebirth would have been slower and smaller. Knowledge spreading freely changed humanity forever.`,
          ],
          image: `/explorer-assets/history/l07-s5-printing-press.webp`,
          imageCaption: `Gutenberg's printing press, ~1450. Made books cheap and fast. Ideas spread like wildfire across Europe.`,
          vocab: [
            { word: `printing press`, definition: `A machine that prints books FAST using movable METAL LETTERS. The PRINTING PRESS made books cheap and common.`,
              audioPrompt: `The printing press, {name}, is a machine that prints books fast using movable metal letters. The printing press made books cheap and common. Before this, copying a book took months. After this, hundreds of copies could be made quickly. Knowledge spread like never before. The printing press is one of the most important inventions in human history.` },
            { word: `Gutenberg`,      definition: `The GERMAN inventor who built the first European printing press. GUTENBERG'S press changed history around 1450.`,
              audioPrompt: `Gutenberg, {name}, was the German inventor who built the first European printing press around 1450. (China had invented printing earlier — Gutenberg built on that.) His name is now a synonym for printing. The Gutenberg Bible — his first major work — still exists. A few copies survived 500+ years and are some of the most valuable books in the world.` },
            { word: `spread`,         definition: `To MOVE OUT WIDELY to many places. The Renaissance SPREAD across Europe thanks to printed books.`,
              audioPrompt: `To spread, {name}, is to move out widely to many places. The Renaissance spread across Europe thanks to printed books. Italian ideas reached France, Germany, England, Spain. Scientific discoveries traveled fast. New art techniques traveled fast. New religious ideas traveled fast. Once printing arrived, ideas could spread at a speed humanity had never seen before.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Curiosity Leads to EXPLORATION`,
          paragraphs: [
            `{name} — here's the big connection. The Renaissance didn't just give us art. It gave us a NEW WAY OF THINKING that led directly to the AGE OF EXPLORATION (which we'll learn about next lesson!).`,
            `Renaissance thinkers were CURIOUS. They wanted to KNOW THINGS. They wanted to MAP THE WORLD. They wanted to TEST IDEAS, not just believe them. Scientists like COPERNICUS dared to suggest the Earth orbits the Sun — not the other way around. Mapmakers made better and better maps. Shipbuilders designed faster, stronger ships. Astronomers studied the stars. Mathematicians improved navigation. With all these tools — and Renaissance CURIOSITY — sailors started asking, "What's BEYOND THE HORIZON?" "What if we sailed WEST? What if we sailed SOUTH?" "What lands are out there we don't know yet?" That curiosity launched the GREAT VOYAGES — Columbus, Magellan, and others — that we'll meet in the next lesson. The Renaissance was the MATCH. Exploration was the FIRE. Ideas changed the world — and then the world got literally bigger.`,
          ],
          image: `/explorer-assets/history/l07-s6-curiosity-explore.webp`,
          imageCaption: `Renaissance curiosity → maps, ships, stars → led to the Age of Exploration. Ideas to action.`,
          vocab: [
            { word: `Copernicus`,     definition: `A Renaissance ASTRONOMER who said EARTH ORBITS the SUN. COPERNICUS changed how humans saw the universe.`,
              audioPrompt: `Copernicus, {name}, was a Renaissance astronomer who said Earth orbits the Sun. Copernicus changed how humans saw the universe. Before him, most people believed Earth was the center of everything. Copernicus showed math that proved Earth and other planets actually orbit around the Sun. Many people refused to believe it for years. But it was true. Renaissance science was brave.` },
            { word: `horizon`,        definition: `The DISTANT LINE where sky meets earth. Renaissance sailors wondered what lay BEYOND THE HORIZON.`,
              audioPrompt: `The horizon, {name}, is the distant line where sky meets earth or sea. Renaissance sailors wondered what lay beyond the horizon. What was farther out? What lands? What people? The same curiosity that made art and science boom also drove sailors to push past the known horizon and discover what was out there. The next lesson takes us on those voyages.` },
            { word: `ideas to action`, definition: `THINKING leads to DOING. Renaissance IDEAS led to actions — exploration, science, change.`,
              audioPrompt: `Ideas to action, {name}, is when thinking leads to doing. Renaissance ideas led to actions — exploration, science, change. New thoughts inspired new behaviors. New questions inspired new journeys. New tools inspired new discoveries. Ideas aren't just words. When people believe in them, they reshape the world. That's the power of the Renaissance.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `The Renaissance was a REBIRTH of ideas — people rediscovered ancient Greek and Roman wisdom and created new things.`,
              matchPhrase: `Yes! Renaissance means "rebirth" in French. Ancient ideas came back to life. New art, science, and inventions exploded. Europe woke up after centuries of slower progress.`,
              correctMatch: `fact` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `Gutenberg's PRINTING PRESS spread ideas across Europe faster than ever before — making books cheap and common.`,
              matchPhrase: `True! Before the printing press, books were copied by hand — rare and expensive. After, books were cheap and everywhere. Ideas traveled at a speed humanity had never seen.`,
              correctMatch: `fact` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `The Renaissance was ONLY about painting — it had nothing to do with science, books, or exploration.`,
              matchPhrase: `Not at all! The Renaissance was about art AND science AND books AND inventions AND exploration. All connected. Leonardo did all of these. The whole world of ideas came alive.`,
              correctMatch: `myth` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `New ideas have NO power — they never change how people live or what they do.`,
              matchPhrase: `Definitely not! Renaissance ideas literally launched the Age of Exploration. New thoughts led to new actions. Ideas are some of the most powerful things in the world.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What was the RENAISSANCE?`,
              options: [`A war`, `A REBIRTH of ideas, art, and learning in Europe (1300s-1600s) — started in ITALY`, `A type of food`, `A king`],
              correctIndex: 1,
              explanation: `The Renaissance was a rebirth of ideas and art. Started in Italy in the 1300s. Lasted about 300 years. Spread to all of Europe. Changed art, science, books, and thinking forever.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `Who was LEONARDO da Vinci?`,
              options: [`A king`, `A Renaissance genius — ARTIST (Mona Lisa), SCIENTIST, INVENTOR all in one`, `A pope`, `A soldier`],
              correctIndex: 1,
              explanation: `Leonardo was the ultimate Renaissance genius. Painter of the Mona Lisa. Scientist who studied anatomy. Inventor who sketched flying machines centuries early. Curious about everything.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `Who painted the SISTINE CHAPEL CEILING?`,
              options: [`Leonardo`, `MICHELANGELO — Renaissance sculptor and painter`, `Gutenberg`, `Copernicus`],
              correctIndex: 1,
              explanation: `Michelangelo! He spent 4 years painting the Sistine Chapel ceiling on scaffolding high above the floor. He also sculpted David. Two of the most famous works of art ever.` },
            { id: `l07-q4`, format: `true-false`,
              question: `Gutenberg's PRINTING PRESS (~1450) made books CHEAP and made ideas spread across Europe much faster than before.`,
              correctAnswer: true,
              explanation: `True! Before the press, books were copied by hand — slow and expensive. After the press, books were cheap and everywhere. Reading spread. Ideas spread. The Renaissance accelerated.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `Renaissance astronomer ___ daringly said EARTH ORBITS the SUN — changing how humans saw the universe.`,
              options: [`Copernicus`, `Caesar`, `Confucius`, `Aristotle`],
              correctIndex: 0,
              explanation: `Copernicus! He used math to prove Earth orbits the Sun. Before him, most believed Earth was the center. His brave idea reshaped astronomy and how humans understood their place.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `How did the Renaissance lead to the AGE OF EXPLORATION?`,
              options: [`It didn't`, `Renaissance CURIOSITY + better maps + better ships + better math = sailors wanting to explore beyond the horizon`, `By accident`, `Magic`],
              correctIndex: 1,
              explanation: `Renaissance curiosity led to exploration! New ideas, better maps, better ships, better navigation tools — all inspired sailors like Columbus and Magellan to push past the known world. Ideas to action.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's a beautiful truth, {name}. The Renaissance shows us that BIG IDEAS can change the world. Not just one painting. Not just one book. A WAY OF THINKING — being curious, asking questions, mastering many things, testing what you believe — that's what created the Renaissance. And that same way of thinking still drives ALL human progress today. Scientists, inventors, artists, explorers — they're all Renaissance descendants. Whenever you ASK A QUESTION about how something works, when you wonder WHAT IF, when you try something NEW — you're being a little bit Renaissance. The greatest gift of that era wasn't a painting or a book. It was the BELIEF that humans can ALWAYS LEARN MORE and MAKE MORE. That belief still drives the world.`,
          familyAdventure: {
            title: `Renaissance Thinker Challenge`,
            scenario: `Together, do a "RENAISSANCE THINKER" challenge. Each family member picks ONE topic they're curious about — anything. Then spend 10-15 minutes EACH researching one cool fact about it. (Books, internet, asking each other.) Then share what you learned.`,
            talkingPoint: `The goal: be CURIOUS like a Renaissance thinker. Get excited about ideas. Ask questions. Look things up. Share what you find. That's the spirit of the Renaissance — alive in your home tonight.`,
          },
          creativePrompt: {
            title: `Leonardo Notebook Page`,
            description: `Try a "LEONARDO NOTEBOOK" page. Leonardo da Vinci kept thousands of pages of notebooks — drawings, ideas, questions, inventions, all mixed together. Make your OWN notebook page. Pick ONE thing you're curious about (a bug, the sky, a machine, a person). Draw it. Around the drawing, write or sketch questions you have about it. Add an invention idea. Add a fact you learned. Mix words, drawings, and arrows freely — like Leonardo. The goal: be a curious explorer of ideas.`,
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You've met the RENAISSANCE — Europe's REBIRTH of ideas. Around 600 years ago, starting in FLORENCE, ITALY, Europe woke up. Ancient Greek and Roman wisdom was rediscovered. LEONARDO and MICHELANGELO made world-changing art. GUTENBERG'S printing press spread knowledge everywhere. COPERNICUS dared to say Earth orbits the Sun. And the same CURIOSITY that drove the Renaissance led DIRECTLY to the AGE OF EXPLORATION — which we'll meet in the next lesson! Ideas change the world. Be curious. Be a Renaissance thinker. — Lyra 🐘`,
          badge: `renaissance-thinker`,
          badgeName: `Renaissance Thinker`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L07;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L07] Loaded: "The Renaissance" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
