// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L20 — History Heroes: People Who Changed Everything
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L20 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-20`,
      title:     `History Heroes: People Who Changed Everything`,
      duration:  12,
      xpReward:  75,
      badge:     `history-hero`,
      badgeName: `History Hero`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, we've reached our LAST lesson together in History & World. We've traveled from Ancient Egypt to the Moon and back. We've met pharaohs, philosophers, peacemakers, and pioneers. Today, let's celebrate the HEROES — the people who changed the world. Some you've heard of. Some you haven't. And the most exciting part? The next hero is YOU. Let's go!`,
          headline: `History Heroes: People Who Changed Everything`,
          subtitle: `Celebrating the people who changed the world — and the hero growing inside YOU`,
          visual: `/explorer-assets/history/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Heroes Through Time`,
          paragraphs: [
            `Throughout history, BRAVE people have changed the world.`,
            `Some you've met in our lessons. ROSA PARKS sat down so others could stand up. NELSON MANDELA chose forgiveness over revenge. DR. KING dreamed of a fair world. NEIL ARMSTRONG walked on the Moon. ELEANOR ROOSEVELT wrote rights for ALL humans. They came from different times, different places, different stories — but they all SHARE one thing: they made the world BETTER.`,
          ],
          image: `/explorer-assets/history/l20-s1-many-heroes.webp`,
          imageCaption: `From Rosa Parks to Mandela to Armstrong to Roosevelt. Different times. Different stories. One thing in common: they made the world better.`,
          vocab: [
            { word: `hero`,           definition: `A person who does brave, kind, or important things to make the world better.`,
              audioPrompt: `A hero is a person who does brave, kind, or important things to make the world better, {name}. Heroes aren't just superheroes from movies. They're real people who lived real lives. They made real choices to do hard, good things. Some heroes are famous. Some are quiet helpers no one remembers. Both kinds matter. Both kinds are real heroes.` },
            { word: `brave`,          definition: `Doing what's right even when it's scary. Most heroes were brave even when they were afraid.`,
              audioPrompt: `Brave means doing what's right even when it's scary, {name}. Most heroes weren't fearless. They were afraid. But they did what was right anyway. That's REAL bravery. Rosa Parks was scared when she said no. Malala was scared when she stood up for girls. Mandela was scared when he walked into prison knowing he'd be there for years. Being scared doesn't disqualify you from being brave — it's the OPPOSITE. Bravery means you do it scared.` },
            { word: `change`,         definition: `When things become different. Heroes changed the world for the better.`,
              audioPrompt: `To change means to make things different, {name}. Heroes CHANGE things. They look at the world and say, 'This isn't right. I want to make it better.' Then they DO something. Their choices change history. Sometimes a small change — like one person sitting on a bus. Sometimes a big change — like ending an unfair system. Heroes change the world. Every. Single. Day.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Young Heroes: Malala`,
          paragraphs: [
            `Here's something amazing — many heroes were YOUNG when they started.`,
            `Take MALALA YOUSAFZAI. She grew up in Pakistan. When she was 11 — your age — some bad men said girls couldn't go to school anymore. Malala said NO. She started writing about it. She kept going to school. She kept speaking up. At 17, she won the NOBEL PEACE PRIZE — the youngest person EVER to win it. She kept fighting for girls' education around the world.`,
          ],
          image: `/explorer-assets/history/l20-s2-malala.webp`,
          imageCaption: `Malala. Started speaking up at 11. Won the Nobel Peace Prize at 17. Still fighting for girls' education everywhere.`,
          vocab: [
            { word: `Malala`,         definition: `A young hero from Pakistan who fought for girls' education. The youngest person ever to win the Nobel Peace Prize.`,
              audioPrompt: `Malala Yousafzai is one of the most inspiring young heroes ever, {name}. She grew up in Pakistan. When she was 11 — your age — bad men called the Taliban took over her area and said girls couldn't go to school anymore. Malala said NO. She wrote about her life and spoke up for girls everywhere. Today, she runs the Malala Fund, helping millions of girls go to school. She proves you're never too young to be a hero.` },
            { word: `education`,      definition: `Learning new things. Going to school. Malala fought for ALL girls to have an education.`,
              audioPrompt: `Education means learning new things, {name}. Going to school. Reading. Doing math. Discovering science. Studying history. Education is one of the most important things in life. It opens doors. It teaches you to think. It helps you become who you're meant to be. Malala believed EVERY girl in the world deserves education. She still does. She works for it every day.` },
            { word: `prize`,          definition: `A reward for doing something amazing. Malala won the Nobel Peace Prize at 17.`,
              audioPrompt: `A prize is a reward for doing something amazing, {name}. The Nobel Peace Prize is one of the most important prizes in the world. It's given to people who work for peace and human rights. Past winners include Dr. King, Mandela, and Eleanor Roosevelt. At 17, Malala became the YOUNGEST person ever to win it. She used the prize money to help build schools for girls. She proved that young people can do BIG things.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Young Heroes: Ruby Bridges`,
          paragraphs: [
            `Here's another young hero. In 1960, a girl named RUBY BRIDGES was SIX YEARS OLD.`,
            `Just two years older than you used to be. Her school in Louisiana had been all-white. Then the court said Black kids could attend. Ruby was the FIRST. She walked into school with US Marshals protecting her. People shouted mean things at her. She walked in with her head held high. She kept going every day. She helped change America.`,
          ],
          image: `/explorer-assets/history/l20-s3-ruby-bridges.webp`,
          imageCaption: `Ruby Bridges. Six years old. Walked into a previously all-white school with quiet courage. Changed America by going to school.`,
          vocab: [
            { word: `Ruby Bridges`,   definition: `A six-year-old girl who was the first Black student at her all-white school in Louisiana. Her courage helped change America.`,
              audioPrompt: `Ruby Bridges was six years old when she became a hero, {name}. In 1960, in Louisiana, schools were SEPARATED by skin color — white kids in one school, Black kids in another. The courts said it had to change. Ruby was the first Black student to go to William Frantz Elementary. Every day, US Marshals had to walk her in. People shouted mean things. But Ruby kept going. She grew up to be an honored American hero.` },
            { word: `school`,         definition: `A place where kids learn. Ruby's courage helped open schools to all kids.`,
              audioPrompt: `School is a place where kids learn, {name}. Ruby's bravery helped open schools to ALL kids, no matter their skin color. Today, kids of every background can go to the SAME schools. Sit together. Learn together. Be friends. That's because of Ruby and other brave kids who came before. Imagine being six years old and changing your whole country. Ruby did it.` },
            { word: `bravery`,        definition: `Doing what's right even when it's scary. Ruby's bravery at age 6 was extraordinary.`,
              audioPrompt: `Bravery means doing what's right even when it's scary, {name}. Imagine being SIX YEARS OLD and walking past angry crowds every day to go to school. That takes incredible bravery. Ruby was scared. Her parents were scared. But they knew what she was doing was important. Sometimes the bravest people are the youngest. Bravery isn't about being big. It's about doing the right thing — at any age.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Unsung Heroes`,
          paragraphs: [
            `Some heroes are FAMOUS. But MOST heroes are QUIET helpers.`,
            `Think about the people in your life. Your TEACHERS spending their days helping kids learn. Your DOCTORS healing sick people. The FIREFIGHTERS rushing toward fires. The PARENTS staying up at night caring for kids. The NEIGHBORS shoveling sidewalks for the elderly. They don't get medals. They don't get the news. But they're heroes too. Every. Single. Day.`,
          ],
          image: `/explorer-assets/history/l20-s4-unsung-heroes.webp`,
          imageCaption: `Most heroes don't get medals. Teachers, firefighters, doctors, parents — quiet helpers making the world better every day.`,
          vocab: [
            { word: `unsung`,         definition: `Not famous. Not in the news. Just quietly doing good. Unsung heroes are everywhere.`,
              audioPrompt: `Unsung means not famous, {name}. Not in the news. Not in books. Just quietly doing good. Unsung heroes are EVERYWHERE. The lunch lady who learns every kid's name. The crossing guard who keeps kids safe every morning. The mail carrier who waves to everyone on their route. The kid who shares their snack with someone who forgot one. They're heroes too. The world is full of unsung heroes. Look around — they're in your life right now.` },
            { word: `teacher`,        definition: `A person who helps kids learn. Teachers are everyday heroes.`,
              audioPrompt: `A teacher is a person who helps kids learn, {name}. Teachers are some of the most important heroes in the world. They spend their days teaching, encouraging, listening, comforting, and inspiring. Most teachers don't make a lot of money. They don't become famous. But they shape generation after generation of kids. Most heroes you'll hear about probably had a teacher who believed in them. Teachers are heroes. Always.` },
            { word: `helper`,         definition: `Someone who helps others. Helpers are the quiet heroes of every community.`,
              audioPrompt: `A helper is someone who helps others, {name}. Mr. Rogers said: 'Look for the helpers.' He was right. In every community, there are helpers. People who notice. People who care. People who show up. Helpers are the quiet heroes that make life work. They're often invisible until you need them. Then you see them. They're everywhere. Be one. The world always needs more.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What Makes a Hero`,
          paragraphs: [
            `So what makes someone a HERO? It's not capes or muscles.`,
            `It's COURAGE — doing what's right even when it's scary. It's KINDNESS — being good to others, especially when it's hard. It's PERSISTENCE — not giving up. It's LOVE — caring about others. Anyone can have these things. ANYONE. Rich or poor. Old or young. From any country. Heroes aren't born special. They CHOOSE to be heroes — one good choice at a time.`,
          ],
          image: `/explorer-assets/history/l20-s5-what-makes-hero.webp`,
          imageCaption: `Courage. Kindness. Persistence. Love. The four ingredients of a hero. Anyone can grow them. ANYONE.`,
          vocab: [
            { word: `courage`,        definition: `Being brave when something is hard. The first ingredient of a hero.`,
              audioPrompt: `Courage is being brave when something is hard, {name}. It's the first ingredient of a hero. Courage doesn't mean you're not scared. It means you do the right thing even though you ARE scared. Every hero you've learned about had courage. You can have courage too. Every time you stand up for someone. Every time you tell the truth even when it's hard. Every time you try something new even though it might not work. That's courage. You already have it.` },
            { word: `persistence`,    definition: `Not giving up. Sticking with something hard. Heroes don't give up easily.`,
              audioPrompt: `Persistence means not giving up, {name}. Sticking with something hard. Trying again when something doesn't work. Most heroes faced HARD times. Mandela was in prison for 27 years and never gave up his dream. Malala was attacked but kept speaking up. Edison failed thousands of times before inventing the light bulb. Heroes don't give up. That's persistence. It's the difference between a dream and a reality.` },
            { word: `choose`,         definition: `To decide. Heroes CHOOSE to do good things — every day, with every choice.`,
              audioPrompt: `To choose is to decide, {name}. Heroes aren't born special. They CHOOSE to be heroes — one good choice at a time. The choice to speak up. The choice to help. The choice to forgive. The choice to keep going. The choice to be kind. Every day you make hundreds of choices. Some are small. Some are big. Each one is a chance to be a hero. Choose well, {name}. The world is shaped by people's choices.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Are Next`,
          paragraphs: [
            `Here's the most important thing I want to tell you, {name}: YOU could be the next hero.`,
            `History isn't finished. The world still needs courage. Still needs kindness. Still needs people who say "this isn't right" and work to fix it. Maybe YOU will help cure a disease. Or invent a new way to grow food. Or write a story that changes how people think. Or be a quiet, everyday helper. The world needs all kinds of heroes. And YOU — you're EXACTLY what the world needs.`,
          ],
          image: `/explorer-assets/history/l20-s6-you-are-next.webp`,
          imageCaption: `You. Yes, you. The next hero. History is still being written — and you have a part in it. The world is waiting.`,
          vocab: [
            { word: `you`,            definition: `That's right — YOU. You can be a hero too. The world needs you.`,
              audioPrompt: `YOU, {name}. Yes, you. You can be a hero too. Don't think you have to wait until you're a grown-up. Heroes can be any age. Ruby was 6. Malala was 11. Greta was 15. You can start being a hero right now. By being kind. By standing up for friends. By telling the truth. By trying hard at school. By caring about the world. You are already on your way to being a hero. Keep going.` },
            { word: `next`,           definition: `Coming after. After all the heroes of history, YOU are next. The next chapter is yours.`,
              audioPrompt: `Next means coming after, {name}. After all the heroes of history — Egypt's pharaohs, Greece's philosophers, Mandela's forgiveness, Malala's books, Armstrong's footprint on the Moon — YOU are next. The next chapter of history is being written right now. By you. By your friends. By your generation. What kind of chapter will you write? You get to decide.` },
            { word: `future`,         definition: `What comes next. The future hasn't happened yet — and YOU get to help create it.`,
              audioPrompt: `The future is what comes next, {name}. It hasn't happened yet. It's like a blank page waiting to be written. You get to help write it. With every choice you make. With every kindness you give. With every brave thing you try. The future is YOUR story. It's YOUR responsibility. And it's YOUR opportunity. The future is waiting for you. Make it beautiful.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Last game of our History journey, {name}! Let's see what makes a hero.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `Malala won the Nobel Peace Prize when she was 17 years old.`,
              matchPhrase: `Yes! Malala became the YOUNGEST person ever to win the Nobel Peace Prize. She started speaking up for girls' education at 11. Young people can be huge heroes.`,
              correctMatch: `fact` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `Teachers, firefighters, doctors, and parents are everyday heroes.`,
              matchPhrase: `True! Most heroes don't get medals. They're the quiet helpers all around us — teaching kids, healing sick people, rushing toward fires, raising families. Look around — they're in your life.`,
              correctMatch: `fact` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Real heroes must wear capes and tights to qualify.`,
              matchPhrase: `Ha! Capes are fun in movies, {name}. But real heroes wear regular clothes. They look just like anyone else. What makes a hero is on the INSIDE — courage, kindness, persistence, love.`,
              correctMatch: `myth` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `Heroes from history are just sleeping on clouds now, not doing anything.`,
              matchPhrase: `Not at all! Heroes from history made things happen with their lives. Now their work continues through US. Every person they inspired is part of their legacy. That's how heroes stay alive forever.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Last quiz of our journey, {name}!`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What makes someone a HERO?`,
              options: [`Having a cape and superpowers`, `Courage, kindness, persistence, and love`, `Being on TV`, `Being the strongest`],
              correctIndex: 1,
              explanation: `Courage, kindness, persistence, and love. These are the four ingredients of a hero. Anyone can have them. ANYONE — rich or poor, old or young, from any country.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `Who is Malala Yousafzai?`,
              options: [`A movie star`, `A young hero who fought for girls' education and won the Nobel Peace Prize at 17`, `An astronaut`, `A baker`],
              correctIndex: 1,
              explanation: `Malala is a young hero from Pakistan who started speaking up for girls' education when she was 11 years old. At 17, she became the YOUNGEST person ever to win the Nobel Peace Prize.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `Who was Ruby Bridges?`,
              options: [`A famous singer`, `A 6-year-old girl who was the first Black student at her all-white school in 1960`, `A famous scientist`, `An astronaut`],
              correctIndex: 1,
              explanation: `Ruby Bridges was just 6 years old when she became the first Black student at her all-white school in Louisiana. She walked through angry crowds with US Marshals every day. Her courage helped change America.` },
            { id: `l20-q4`, format: `true-false`,
              question: `Most heroes are quiet, everyday helpers — like teachers, doctors, firefighters, and parents.`,
              correctAnswer: true,
              explanation: `True! Most heroes don't get medals or news. They're the quiet helpers all around us — teaching kids, healing sick people, raising families, helping neighbors. They're the heroes of everyday life.` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `History is still happening — and YOU could be the next ___.`,
              options: [`hero`, `sandwich`, `pencil`, `dinosaur`],
              correctIndex: 0,
              explanation: `Hero! History isn't finished. The world still needs heroes — and YOU could be next. By being brave, kind, persistent, and loving. Don't wait. Start today. The world needs you.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `Are you too YOUNG to be a hero?`,
              options: [`Yes, you have to wait until you're 100`, `No way! Ruby was 6, Malala was 11. Young people change the world all the time`, `Only if you're tall`, `Only on weekends`],
              correctIndex: 1,
              explanation: `No way! Ruby was 6. Malala was 11. Greta was 15. Young people change the world all the time. You don't have to wait until you're a grown-up. Start being a hero RIGHT NOW.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Today, young heroes are EVERYWHERE, {name}. Greta Thunberg leading climate marches. Bana al-Abed writing about her childhood during war. Marley Dias collecting 1,000 books about Black girls. Mari Copeny advocating for clean water in Flint. Genesis Butler speaking up for animals. They're 10, 11, 12, 13, 14 — and they're changing the world. The next generation of heroes is already growing up. Their voices matter. YOUR voice matters.`,
          familyAdventure: `Talk together about HEROES. Each family member shares: who is YOUR hero? It can be someone famous from history, someone alive today, or someone in your family. Why are they your hero? What do you admire about them? Then ask: what's one small heroic thing you could do this week? Try it together.`,
          creativePrompt: `Draw or write about a hero — but the hero is YOU. What would your hero name be? What's your superpower (a real one, like KINDNESS or PATIENCE or BRAVERY — not flying)? What's one thing you want to do to help the world? Draw yourself in action. Hang it up somewhere where you'll see it every day. Remind yourself: you ARE the next hero.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `WONDERFUL, {name}! You did it! You completed all 20 lessons in History & World. We started in Ancient Egypt with pyramids and pharaohs. We ended with YOU as the next hero of history. You've met queens and kings, philosophers and inventors, brave people and peacemakers, astronauts and dreamers. They all shared one thing — they made the world better. Now it's your turn. Be curious. Be brave. Be kind. Be persistent. Be loving. The world needs you. I'm proud of you. I carry your story with me. Thank you for journeying with me, {name}.`,
          badge: `history-hero`,
          badgeName: `History Hero`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default HW_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L20] Loaded: "History Heroes: People Who Changed Everything" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
