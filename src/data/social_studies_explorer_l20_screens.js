// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L20 — Your Story Matters (CAPSTONE)
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D4.Civ.7.K-2 / D4.Civ.10.K-2 (taking informed action)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L20 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-20`,
      title:     `Your Story Matters`,
      duration:  15,
      xpReward:  75,
      badge:     `social-studies-graduate`,
      badgeName: `Social Studies Graduate`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}. Atlas here. This is our LAST lesson together. Look at how far you've come. You started knowing little about Social Studies. Now you understand COMMUNITIES, RULES, GOVERNMENT, RIGHTS, GEOGRAPHY, ECONOMICS, and HISTORY. Today, we put it all together — around YOU. Because YOUR STORY matters. You're a citizen. You belong somewhere. You make choices. You're part of history happening now. Let's celebrate that.`,
          headline: `Your Story Matters`,
          subtitle: `Bringing it all together — and stepping into your future`,
          visual: `/explorer-assets/social-studies/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Look How Far You've COME`,
          paragraphs: [
            `Take a moment. Look back at what you've LEARNED.`,
            `In CIVICS — you learned about COMMUNITIES, RULES, GOVERNMENT, RIGHTS and RESPONSIBILITIES, and how to be a GOOD CITIZEN. In GEOGRAPHY — you learned about MAPS, CONTINENTS, OCEANS, LANDFORMS, CLIMATE, and how PLACE shapes life. In ECONOMICS — you learned about NEEDS and WANTS, GOODS and SERVICES, MONEY, WORK, and how to make SMART CHOICES. In HISTORY — you learned what history IS, how LIFE HAS CHANGED, and met famous people who CHANGED THE WORLD, plus the beautiful variety of CULTURES. You've come a LONG way. You know more about how the world works than you did 20 lessons ago. You're not just learning facts. You're becoming a thoughtful young citizen.`,
          ],
          image: `/explorer-assets/social-studies/l20-s1-look-how-far.webp`,
          imageCaption: `20 lessons. 4 big blocks. Civics. Geography. Economics. History. Look how much you know now.`,
          vocab: [
            { word: `journey`,        definition: `A LONG trip of growth. You've been on a JOURNEY of learning.`,
              audioPrompt: `A journey, {name}, is a long trip of growth. You've been on a journey of learning. Twenty lessons. Four big blocks. So much to explore. Every step taught you something new. The kid you were before lesson one is different from the kid you are now. That's what learning does — it changes who you are, slowly, beautifully, over time.` },
            { word: `growth`,         definition: `Becoming MORE than you were. Learning leads to GROWTH.`,
              audioPrompt: `Growth, {name}, is becoming more than you were. Learning leads to growth. Not just bigger — also wiser, more capable, more thoughtful. The growth you've done in social studies is real. You can think about big ideas now. Ideas about community, country, money, history. That growth stays with you forever. It's the most valuable thing you have.` },
            { word: `thoughtful`,     definition: `Thinking CAREFULLY about things. THOUGHTFUL young citizens make the world better.`,
              audioPrompt: `Thoughtful, {name}, means thinking carefully about things. Thoughtful young citizens make the world better. After 20 lessons, you're more thoughtful than before. You can think about why rules exist. About fairness. About what your community needs. About what history teaches. Thoughtful kids grow into thoughtful adults — the kind the world needs.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `You Are a CITIZEN`,
          paragraphs: [
            `Remember how we started? You learned a CITIZEN is a member of a community. Now look at all the communities YOU'RE part of.`,
            `Your FAMILY — your first community. Your SCHOOL — where you learn alongside friends. Your NEIGHBORHOOD — the people around your home. Your CITY or TOWN — a bigger community of thousands or millions. Your STATE — even bigger. Your COUNTRY — bigger still. Your PLANET EARTH — the human community of everyone alive. You belong to ALL of these at once. You have RIGHTS in each — to be safe, learn, be treated fairly. You have RESPONSIBILITIES in each — to be kind, follow rules, contribute. Being a citizen isn't something you become someday. You're a citizen NOW. A real one. With real power. Real voice. Real importance.`,
          ],
          image: `/explorer-assets/social-studies/l20-s2-you-are-citizen.webp`,
          imageCaption: `You are a citizen. Family, school, neighborhood, city, country, planet. Rights and responsibilities everywhere.`,
          vocab: [
            { word: `citizen`,        definition: `A MEMBER of a COMMUNITY. You are a CITIZEN of many communities at once.`,
              audioPrompt: `A citizen, {name}, is a member of a community. You are a citizen of many communities at once. Family. School. Neighborhood. City. Country. Earth. Being a citizen isn't something you become at 18 — you've been one your whole life. You belong. You matter. You're already part of the bigger story.` },
            { word: `power`,          definition: `The ABILITY to make a difference. Even kids have real POWER as citizens.`,
              audioPrompt: `Power, {name}, is the ability to make a difference. Even kids have real power as citizens. Power to be kind. Power to help. Power to speak up. Power to learn. Power to care. Power to act. You don't need money or fame to have power. You need to CARE — and then do something. That's real power. You have it now.` },
            { word: `voice`,          definition: `Your IDEAS and FEELINGS shared. Use your VOICE — what you say matters.`,
              audioPrompt: `Your voice, {name}, is your ideas and feelings shared. Use your voice — what you say matters. You don't have to wait to share what you think. Adults listen when kids speak honestly. Friends listen. Family listens. Your voice can encourage someone, point out something unfair, or share an idea. Don't let anyone tell you you're too young to have a voice. You're not. Use it.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `You BELONG to a PLACE`,
          paragraphs: [
            `Look around. The PLACE you live SHAPES you.`,
            `Your continent. Your country. Your city or town. Your neighborhood. The LANDFORMS — maybe mountains, plains, coastline. The CLIMATE — what weather you experience. The CULTURES around you — what foods you eat, languages you hear, traditions you celebrate. All of this is part of WHO YOU ARE. You didn't just appear in your home — you GREW in it. The place shaped you. And here's the cool part — you also SHAPE your place. Your actions affect your family. Your kindness affects your school. Your choices ripple out. You belong to your place — and your place belongs to you. There's a beautiful relationship between people and the lands they live on. You're part of that.`,
          ],
          image: `/explorer-assets/social-studies/l20-s3-you-belong-place.webp`,
          imageCaption: `You belong to your place. Land, climate, culture, community — all shape you. You shape them too.`,
          vocab: [
            { word: `belong`,         definition: `Being PART of something. You BELONG to your place — and it belongs to you.`,
              audioPrompt: `To belong, {name}, is being part of something. You belong to your place — and it belongs to you. It's not just where you live — it's part of who you are. Your hometown shapes you. The climate shaped you. The food you eat. The languages around you. The traditions you've experienced. You're not separate from your place. You're rooted in it.` },
            { word: `shape`,          definition: `To INFLUENCE who you become. The place where you live SHAPES you.`,
              audioPrompt: `To shape, {name}, is to influence who you become. The place where you live shapes you. Kids who grow up by the ocean often love water. Kids who grow up in mountains often love hiking. Kids who grow up in cities are often comfortable with crowds. Place shapes us in many ways. We're not aware of most of them — but they're real.` },
            { word: `ripple`,         definition: `When something SPREADS outward. Your actions RIPPLE out into the world.`,
              audioPrompt: `A ripple, {name}, is when something spreads outward. Like throwing a stone in water — circles spread out. Your actions ripple out into the world. Your kindness affects family, who carry it to friends, who carry it to other places. Your choices affect more than just yourself. Even small actions ripple. That's why what you do matters.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You MAKE Choices`,
          paragraphs: [
            `Every day, YOU make CHOICES. Big and small. They build the future you want.`,
            `Choices about MONEY — what to save, spend, share. Choices about TIME — what to do with your hours. Choices about RELATIONSHIPS — who to be friends with, how to treat people. Choices about LEARNING — what to be curious about, how hard to try. Choices about KINDNESS — when to help, when to speak up. Each choice is small. But CHOICES ADD UP. The kid who chooses kindness becomes the adult who's kind. The kid who chooses to save becomes the adult with savings. The kid who reads becomes the curious adult. Your tomorrow is being built by your today. Choose well. Choose with care. Choose what matters. Your future self will be glad you did.`,
          ],
          image: `/explorer-assets/social-studies/l20-s4-you-make-choices.webp`,
          imageCaption: `You make choices every day. Money. Time. Relationships. Learning. Kindness. They build your future.`,
          vocab: [
            { word: `choice`,         definition: `Picking ONE option from many. CHOICES build your future.`,
              audioPrompt: `A choice, {name}, is picking one option from many. Choices build your future. Some choices are small — what to eat for breakfast. Some are bigger — how to treat a friend who's hurt. All choices matter. The pattern of your choices makes you who you become. That's why thinking before choosing matters.` },
            { word: `add up`,         definition: `Combine into BIG results. Small CHOICES ADD UP over time.`,
              audioPrompt: `To add up, {name}, means combine into big results. Small choices add up over time. A dollar saved each week becomes $52 in a year. A small act of kindness multiplied by 365 days = a lot of joy spread. The kid who reads 10 minutes a day becomes the adult who loves books. Tiny choices, repeated over years, shape who we become.` },
            { word: `future`,         definition: `What's COMING in your LIFE. CHOICES today create your FUTURE.`,
              audioPrompt: `The future, {name}, is what's coming in your life. Choices today create your future. The you of 10 years from now is being made right now. Your habits. Your relationships. Your skills. Your sense of right and wrong. All being built. Picture your future self. They're depending on you to make good choices today. You can give them a beautiful life.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `You Are HISTORY Happening`,
          paragraphs: [
            `Here's something powerful — YOU are part of HISTORY. Right now. Today.`,
            `Every moment you live becomes part of the past. Your story is being written. Your decisions, your friendships, your joys, your struggles — all becoming part of the long human story. You have ANCESTORS going back thousands of generations. Each one lived their life. Each one led to YOU. Someday, you might have DESCENDANTS — kids, grandkids, great-grandkids. They'll inherit the world YOU helped shape. You're a LINK in an unbroken chain. The world you live in was built by everyone who came before. The world your descendants live in is being built by YOU. That's not small — that's HUGE. Every kindness, every choice, every word — it all matters. You're not just learning history. You're MAKING it.`,
          ],
          image: `/explorer-assets/social-studies/l20-s5-you-are-history.webp`,
          imageCaption: `You are HISTORY happening. Ancestors before you. Descendants after. You're a link in the chain.`,
          vocab: [
            { word: `history happening`, definition: `The PAST being LIVED right now. YOU are HISTORY HAPPENING.`,
              audioPrompt: `History happening, {name}, is the past being lived right now. You are history happening. Every second you experience becomes history a second later. Your life IS history. Future historians might study what kids your age did, ate, played, worried about. You're not separate from history — you're inside it, living it, every day.` },
            { word: `ancestors`,      definition: `Family who LIVED BEFORE you. Your ANCESTORS led to who you are today.`,
              audioPrompt: `Ancestors, {name}, are family who lived before you. Your parents, grandparents, great-grandparents, going back through time. Each one was a real person who lived a life. Each one made choices that led — eventually — to you. You're connected to all of them. Their wisdom is part of you, even if you never met them.` },
            { word: `descendants`,    definition: `Family who will live AFTER you. Your DESCENDANTS will inherit the world you shape.`,
              audioPrompt: `Descendants, {name}, are family who will live after you. If you have kids, grandkids, great-grandkids someday — those are descendants. They'll inherit the world you helped build. The choices you make today shape the world they'll live in. That's a big responsibility. It's also a beautiful gift.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your STORY Matters`,
          paragraphs: [
            `Here's the BIG TRUTH, {name}. Your STORY MATTERS. You're not too small. You're not too young. You count. Right now.`,
            `Every person who ever changed anything was once a kid like you. They didn't wait until they were old. They cared. They acted. They mattered. YOU can do the same. Be a good CITIZEN — kind, helpful, thoughtful. CARE for your communities — family, school, town, country, planet. RESPECT all kinds of people, all kinds of cultures, all kinds of lives. Make SMART choices with what you have. LEARN. GROW. Be CURIOUS about the world. SPEAK UP for what's right — even quietly. HELP others when you can. Find what you LOVE doing. The world needs YOU. Not someday — TODAY. You're not just preparing for your future. You're already in it. Your story matters. Make it beautiful.`,
          ],
          image: `/explorer-assets/social-studies/l20-s6-your-story-matters.webp`,
          imageCaption: `YOUR STORY MATTERS. Not someday — today. You count. You can make the world better. Right now.`,
          vocab: [
            { word: `matter`,         definition: `Have IMPORTANCE. You MATTER — your story, your life, your voice.`,
              audioPrompt: `To matter, {name}, means to have importance. You matter. Your story matters. Your life matters. Your voice matters. Don't ever let anyone — including yourself — tell you that you don't count. You do. Even when you feel small. Even when you feel unsure. You matter. The world is better because you're in it.` },
            { word: `today`,          definition: `THIS MOMENT. You don't have to wait — you can make a difference TODAY.`,
              audioPrompt: `Today, {name}, is this moment. You don't have to wait — you can make a difference today. Being kind to a friend. Helping someone struggling. Speaking up when something's unfair. Trying your best. Showing love to your family. Today is full of chances to matter. Don't wait until you're older. Start now.` },
            { word: `beautiful`,      definition: `Full of WORTH and meaning. Make your story BEAUTIFUL.`,
              audioPrompt: `Beautiful, {name}, means full of worth and meaning. Make your story beautiful. Not perfect — beautiful. Full of love, curiosity, kindness, growth. With mistakes you learned from. With moments of joy. With people you've helped. With dreams you've pursued. A beautiful story isn't about being famous — it's about being TRUE to who you are. Make yours beautiful.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember from this whole journey, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `YOU can change things — even as a kid, your actions matter and ripple out into the world.`,
              matchPhrase: `Yes! You can change things now. Your kindness matters. Your voice matters. Your choices ripple out. Don't wait until you're older — start today.`,
              correctMatch: `fact` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `Your story is still being WRITTEN — many pages ahead, and they're yours to shape.`,
              matchPhrase: `True! You're at the beginning. So much future ahead. So many choices to make. So much to learn. So many people to love. Your story is just getting started.`,
              correctMatch: `fact` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Kids must WAIT until they become adults to do anything meaningful.`,
              matchPhrase: `Not at all! Kids change the world every day. Be kind. Help. Speak up. Care. Learn. Try. You're already a citizen with real power. Don't wait — start now.`,
              correctMatch: `myth` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `One kid — one single person — doesn't matter. Nothing they do has any impact.`,
              matchPhrase: `Definitely not! Every person matters. Especially kids. Every action ripples. Every kindness counts. Every choice shapes who you become. YOU matter — always.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember from our journey, {name}.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What does it mean that YOU are a CITIZEN?`,
              options: [`You have to wait until you're 18`, `You're a MEMBER of many communities at once — family, school, country, Earth`, `Only adults are citizens`, `Just a word`],
              correctIndex: 1,
              explanation: `Being a citizen means you're a member of many communities at once. Family, school, neighborhood, city, country, Earth. You're a citizen NOW — not someday. With rights, responsibilities, and real importance.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `How does the PLACE you live AFFECT you?`,
              options: [`It doesn't`, `It SHAPES who you are — through landforms, climate, culture, community`, `Only adults are affected`, `Only on weekends`],
              correctIndex: 1,
              explanation: `Place shapes you. Landforms, climate, culture, community — all influence who you become. You belong to your place, and your place belongs to you. There's a beautiful relationship between you and where you live.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `How do your CHOICES today affect your FUTURE?`,
              options: [`They don't`, `Choices ADD UP — small ones over time create your future self`, `Only adults' choices matter`, `Only big choices count`],
              correctIndex: 1,
              explanation: `Choices add up. Small ones over time build into the person you become. The kid who reads becomes the adult who loves books. The kid who saves becomes the adult with savings. Your future is built today.` },
            { id: `l20-q4`, format: `true-false`,
              question: `YOU are part of HISTORY happening — connected to ancestors before you and descendants who'll come after.`,
              correctAnswer: true,
              explanation: `True! You're a link in an unbroken chain. Your ancestors led to you. If you have descendants someday, you'll lead to them. Your life is history happening — every moment becoming part of the long human story.` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `You don't have to WAIT until you're an adult — you can make a difference ___.`,
              options: [`today`, `never`, `tomorrow only`, `next year`],
              correctIndex: 0,
              explanation: `Today! Don't wait. Be kind today. Help today. Speak up today. Learn today. Care today. Every famous person who changed the world started as a kid who didn't wait. You can do the same.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `Does your STORY matter?`,
              options: [`No, only famous people matter`, `YES — your story counts. Your voice counts. You're not too small or too young.`, `Only sometimes`, `Just to your family`],
              correctIndex: 1,
              explanation: `YES. Your story matters. Your voice matters. You're not too small or too young. You're a real citizen. A real person. Part of history happening. Make your story beautiful.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Here's the TRUTH, {name}. The world has lots of problems. Climate change. Unfairness. Wars. Hunger. Disease. Sometimes it feels too big for any one person to fix. But here's what history shows — every problem ever solved was solved by PEOPLE who decided to do something. Doctors who cured diseases. Leaders who fought unfair laws. Engineers who built better systems. Teachers who shaped young minds. Activists who spoke up. Parents who raised good kids. EACH of them was once a kid like you. They didn't wait. They learned. They tried. They cared. Maybe your future is to be a doctor, scientist, teacher, artist, leader, parent, or something we haven't even named yet. Whatever you become — bring your full heart to it. The world needs people who care. Always has. Always will. That can be YOU.`,
          familyAdventure: `As a family, do a FUTURE STORY exercise together. Each person takes a turn. Say: 1) ONE THING I learned in social studies that I want to remember forever. 2) ONE THING I want to do or be when I'm older. 3) ONE THING I can do TODAY to make my community a little better. Share your answers. Listen to each other. Celebrate this journey. You're all part of an amazing family story being written.`,
          creativePrompt: `Make a "FUTURE ME" page. On paper: 1) Write or draw YOUR NAME at the top. 2) Below, write or draw 5 things you'd love to do in your future (jobs you'd love, places you'd visit, things you'd build or help with, kinds of person you'd be). 3) At the bottom, write the date. Keep this page. Look at it again in a few years. See how much you've grown — and where your story takes you. YOU are writing your own beautiful story.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}. You did it. You finished SOCIAL STUDIES EXPLORER. Twenty lessons. Four blocks. Civics. Geography. Economics. History. Look at what you know now. You understand communities, rules, government, rights, citizenship. You can read maps and know the continents, oceans, landforms, climates. You get money, work, smart choices. You know history is real, full of heroes, and made of many cultures. AND most importantly — you understand YOURSELF as part of all this. A citizen. A community member. A person shaped by place. A maker of choices. A link in the chain of history. Your story matters. Your voice matters. YOU matter. Be kind. Be curious. Be brave. The world needs you. I've loved walking this path with you. Now go write your beautiful story. I'm rooting for you, always. — Atlas 🐻`,
          badge: `social-studies-graduate`,
          badgeName: `Social Studies Graduate`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L20;

// ─── Dev asset check ───────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L20] Loaded: "Your Story Matters" CAPSTONE with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
