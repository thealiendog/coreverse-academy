// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L20 — Your Story Matters (CAPSTONE)
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2 cross-disciplinary capstone (Civics, Geography, Economics, History)
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L20 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-20`,
      title: `Your Story Matters`,
      duration: 15,
      xpReward: 75,
      badge: `social-studies-master`,
      badgeName: `Social Studies Master`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. This is our last lesson together for Social Studies. Look how far you have come. You learned about citizens, places, money, and history. Today we put it together. And we celebrate YOU. Your story matters. Let's bring it home.`,
          headline: `Your Story Matters`,
          subtitle: `Look how far you've come. And how much more lies ahead.`,
          visual: `/explorer-assets/social-studies/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Look How Far You Have Come`,
          paragraphs: [
            `Twenty lessons ago, you started this journey, {name}. Look at everything you know now.`,
            `You know what a community is. What a citizen does. Why rules matter. What rights are. How governments work. You understand seven continents and five oceans. You can read a map. You know climate shapes life. That is a lot.`,
          ],
          image: `/explorer-assets/social-studies/l20-s1-far-come.webp`,
          imageCaption: `You learned about citizens, communities, geography, climates, and so much more.`,
          vocab: [
            { word: `journey`, definition: `A long trip or learning path.`,
              audioPrompt: `A journey is a long trip or learning path, {name}. Social Studies has been a journey. From your first lesson to here. Each one added something new. You traveled far in your thinking.` },
            { word: `proud`, definition: `Happy with what you have done.`,
              audioPrompt: `Proud means happy with what you have done, {name}. You should be proud. Twenty lessons is a lot. You worked hard. You earned every badge. Being proud of real effort is a great feeling.` },
            { word: `everywhere`, definition: `In every place.`,
              audioPrompt: `Everywhere means in every place, {name}. The knowledge you gained applies everywhere. In every community. Every country. Every conversation. Your social studies brain works everywhere you go.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `You Are a Citizen`,
          paragraphs: [
            `Block 1 was about civics. You learned what being a citizen means.`,
            `You belong to many communities. Your family. Your school. Your country. Earth itself. You have rights and responsibilities. You can vote when you grow up. Right now, you can be a good citizen by being kind, helping others, caring for Earth, and speaking up.`,
          ],
          image: `/explorer-assets/social-studies/l20-s2-citizen.webp`,
          imageCaption: `You are a citizen of many communities. You can make them better.`,
          vocab: [
            { word: `citizen`, definition: `A member of a community.`,
              audioPrompt: `A citizen is a member of a community, {name}. You are a citizen of many communities at once. Family. School. City. Country. Earth. Your citizenship gives you a place to stand and people to belong with.` },
            { word: `belong`, definition: `Being part of something.`,
              audioPrompt: `To belong means to be part of something, {name}. You belong to many places. Your family belongs to you. Your community belongs to you. You belong to Earth. Belonging is at the heart of being a citizen.` },
            { word: `right`, definition: `Something you deserve as a person.`,
              audioPrompt: `A right is something you deserve as a person, {name}. Like the right to learn. The right to be safe. The right to speak. Rights protect you. Adults work to make sure all kids have their rights.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `You Belong to a Place`,
          paragraphs: [
            `Block 2 was geography. The story of places.`,
            `You learned that Earth has seven continents and five oceans. Different landforms shape life. Different climates change everything from food to clothes. You belong to a place. The place where you live shaped some of who you are. And you can take care of it.`,
          ],
          image: `/explorer-assets/social-studies/l20-s3-place.webp`,
          imageCaption: `You belong to a place. The land and climate shape you. You can care for it.`,
          vocab: [
            { word: `place`, definition: `A specific spot on Earth.`,
              audioPrompt: `A place is a specific spot on Earth, {name}. Your home town. Your country. Your continent. Each place has its own character. Its own land, weather, plants, animals, people. You belong to many places at once.` },
            { word: `shape`, definition: `To form. To influence.`,
              audioPrompt: `To shape means to form or influence, {name}. Your place shapes who you are. The food you grew up eating. The language you speak. The weather you know. Place shapes everyone.` },
            { word: `care for`, definition: `To take care of something.`,
              audioPrompt: `To care for means to take care of, {name}. Your place needs your care. The Earth needs all our care. Recycle. Save water. Plant trees. Speak up. Earth gave us life. Caring is how we say thanks.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You Make Choices`,
          paragraphs: [
            `Block 3 was economics. Money, work, and choices.`,
            `You learned needs come before wants. Goods are things you touch. Services are help from people. Money is a tool we agree on. Earned through work. Smart people save, spend, and share. Every choice has a tradeoff. Pause before deciding. These habits build your future.`,
          ],
          image: `/explorer-assets/social-studies/l20-s4-choices.webp`,
          imageCaption: `You make choices every day. Smart ones build the future you want.`,
          vocab: [
            { word: `choose`, definition: `To pick from options.`,
              audioPrompt: `To choose means to pick from options, {name}. You choose every day. Big things and small things. Each choice shapes your day. Smart choosing is a skill you build over time. The earlier you start, the better.` },
            { word: `smart`, definition: `Making good decisions.`,
              audioPrompt: `Smart means making good decisions, {name}. Smart with money. Smart with time. Smart with how you treat people. Smart is not the same as fast or fancy. Smart means thinking before doing.` },
            { word: `future`, definition: `What is coming later in your life.`,
              audioPrompt: `Future means what is coming later, {name}. Your future depends on choices today. The kid who reads becomes the adult who knows. The kid who saves becomes the adult with savings. You are building your future right now.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `You Are History Happening`,
          paragraphs: [
            `Block 4 was history. You learned history is the story of the past.`,
            `Life has changed a lot. From caves to spaceships. But love and kindness stay the same. Heroes like Mandela, Curie, Malala, and MLK changed the world. Most heroes are quiet. The world has thousands of beautiful cultures. And YOU are history. Right now. Every moment.`,
          ],
          image: `/explorer-assets/social-studies/l20-s5-history.webp`,
          imageCaption: `You are history happening. Every moment. Every choice. Becoming the past.`,
          vocab: [
            { word: `history`, definition: `The story of what happened.`,
              audioPrompt: `History is the story of what happened, {name}. Big events and small ones. Famous people and quiet ones. The history book of your life is being written right now. Each day adds a page.` },
            { word: `happening`, definition: `Going on right now.`,
              audioPrompt: `Happening means going on right now, {name}. History is happening every moment. Including this one. The choices you make today become the history of you tomorrow. You are living it.` },
            { word: `inspire`, definition: `To make others want to do good things.`,
              audioPrompt: `To inspire means to make others want to do good things, {name}. Heroes inspire us. Their stories make us want to try harder. To be kinder. To stand up for what is right. You can inspire others too.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Story Matters`,
          paragraphs: [
            `Here is the biggest idea of all, {name}. Your story matters.`,
            `You are a citizen who can make communities better. You belong to a place you can care for. You make choices that build your future. You are history happening, in a moment that will only happen once. The world is better because you are in it. Your story matters everywhere. Always.`,
          ],
          image: `/explorer-assets/social-studies/l20-s6-your-story.webp`,
          imageCaption: `Your story matters. Your kindness matters. Your choices matter. You.`,
          vocab: [
            { word: `matter`, definition: `To be important.`,
              audioPrompt: `To matter means to be important, {name}. You matter. Not just to your family. To Earth. To history. To the future. The world is better because you are in it. Believe it. Live it. Share it.` },
            { word: `story`, definition: `The tale of someone's life.`,
              audioPrompt: `A story is the tale of someone's life, {name}. Your story is yours. Unique. No one else can live it. The chapters are still being written. Make them ones you are proud of.` },
            { word: `always`, definition: `For all time.`,
              audioPrompt: `Always means for all time, {name}. Your story always matters. Yesterday, today, tomorrow. Through every choice. Through every step. Always you. Always mattering. Always part of the bigger story.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Final challenge, {name}. Sort each big idea into the right block. Civics, geography, economics, or history?`,
          buckets: [
            { id: `civics`,    label: `Civics`,    color: `#FBBF24` },
            { id: `geography`, label: `Geography`, color: `#34D399` },
            { id: `economics`, label: `Economics`, color: `#60A5FA` },
            { id: `history`,   label: `History`,   color: `#A78BFA` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `Being a good citizen in your community`,
              matchPhrase: `Yes! That is civics. The study of community and citizenship.`, correctMatch: `civics` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `Following community rules`,
              matchPhrase: `Right! Rules are part of civics. They keep communities working.`, correctMatch: `civics` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Knowing your continent and ocean`,
              matchPhrase: `Yes! That is geography. The study of places on Earth.`, correctMatch: `geography` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `Caring for the Earth`,
              matchPhrase: `Right! Caring for our planet is geography in action.`, correctMatch: `geography` },
            { id: `l20-g5`, image: `l20-game-5.webp`, label: `Making smart choices with money`,
              matchPhrase: `Yes! Smart money choices are economics.`, correctMatch: `economics` },
            { id: `l20-g6`, image: `l20-game-6.webp`, label: `Saving, spending, and sharing`,
              matchPhrase: `Right! The three jars approach is core economics.`, correctMatch: `economics` },
            { id: `l20-g7`, image: `l20-game-7.webp`, label: `Knowing your family's roots`,
              matchPhrase: `Yes! Family roots are history. Your story stretches back generations.`, correctMatch: `history` },
            { id: `l20-g8`, image: `l20-game-8.webp`, label: `Learning from the past`,
              matchPhrase: `Right! Learning from history helps us do better today.`, correctMatch: `history` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Last quiz, {name}. Show what you know across all four blocks.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What is the biggest idea from civics?`,
              options: [`Only adults matter`, `You are a citizen who can make communities better`, `Rules are boring`, `Voting only`],
              correctIndex: 1,
              explanation: `You are a citizen. Of family, school, city, country, Earth. You can make every community better.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is the biggest idea from geography?`,
              options: [`Maps are pretty`, `You belong to a place that shapes you. Take care of Earth.`, `Continents do not matter`, `Just memorize names`],
              correctIndex: 1,
              explanation: `You belong to a place. Land and climate shape you. Earth is our shared home. Care for it.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `What is the biggest idea from economics?`,
              options: [`Money is everything`, `Smart choices about money build your future. Save, spend, share.`, `Buy lots`, `Adults handle it all`],
              correctIndex: 1,
              explanation: `Smart choices today build the future you want. Needs first. Save, spend, share. Pause before deciding.` },
            { id: `l20-q4`, format: `true-false`,
              question: `YOU are history happening, right now, this very moment.`,
              correctAnswer: true,
              explanation: `True! Every moment becomes the past. Your story is being written. You are part of the long human story.` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `Your story ___ matters. Everywhere. Always.`,
              options: [`always`, `never`, `sometimes`, `rarely`],
              correctIndex: 0,
              explanation: `Always! Your story always matters. The world is better because you are in it.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `What's the biggest thing you learned?`,
              options: [`That this stuff is boring`, `That YOU matter. Your choices, your kindness, your story.`, `That it is just facts`, `Nothing`],
              correctIndex: 1,
              explanation: `That YOU matter. That you are part of every community, place, choice, and chapter of history. Live your story well.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Some of the biggest world-changers started as ordinary kids. Malala wrote a blog at 11. Greta Thunberg started a school strike at 15. Marley Dias collected 1,000 books with Black girls as heroes at age 11. None of them waited until they grew up. You do not have to either. Start with one thing you care about.`,
          familyAdventure: `Have a family Social Studies celebration. Pick three of your favorite lessons from these 20. Tell your family what you learned. Then pick ONE thing you want to do as a family this month. Something that uses what you learned. Maybe a community help day. Maybe a culture night. Make it real.`,
          creativePrompt: {
            intro: `Make a TIME CAPSULE for your future self. Draw or write your answers. Open it in 5 years.`,
            floor: `Write 3 sentences about you right now. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what you hope your future self will see.`,
            frames: [
              `Right now, I am ___ years old and I live in ___.`,
              `What I care about most is ___.`,
              `One way I make my community better is ___.`,
              `When I grow up, I hope to ___.`,
              `Future me, remember that ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}. You finished Social Studies. Twenty lessons. Hundreds of new ideas. You know how communities work. How places shape us. How money flows. How history happens. But more than all of that, you learned that YOU matter. Your story matters. Your kindness matters. Every choice you make ripples out into the world. Now go. Be a good citizen. Take care of your place. Make smart choices. Help write history with kindness. I will miss being your guide. But this knowledge is yours forever. The world is lucky to have you in it, {name}. Always. Everywhere. Atlas the Bear.`,
          badge: `social-studies-master`,
          badgeName: `Social Studies Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L20] Loaded: "Your Story Matters" CAPSTONE with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
