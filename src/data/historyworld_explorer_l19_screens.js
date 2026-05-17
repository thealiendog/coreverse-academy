// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L19 — Current Events: What's Happening in the World
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L19 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-19`,
      title:     `Current Events: What's Happening in the World`,
      duration:  12,
      xpReward:  50,
      badge:     `current-events-explorer`,
      badgeName: `Current Events Explorer`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, we've talked a lot about history. But TODAY, RIGHT NOW, history is STILL HAPPENING. Every day, things happen all over the world. New inventions! Discoveries! Big decisions! Helpers helping! These are called CURRENT EVENTS. Today, I want to teach you how to be CURIOUS about the world — and how to learn what's happening with the help of trusted grown-ups. Let's go!`,
          headline: `Current Events: What's Happening in the World`,
          subtitle: `How to be curious about the world today — with help from trusted grownups`,
          visual: `/explorer-assets/history/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `History Is Still Happening`,
          paragraphs: [
            `Every single day, something new happens in the world.`,
            `Scientists DISCOVER new things. Inventors CREATE new tools. Helpers HELP people. Leaders make BIG decisions. Athletes win games. Artists make beautiful things. Some news is exciting. Some is sad. Some is silly. All of it is happening RIGHT NOW. You're living through history every day.`,
          ],
          image: `/explorer-assets/history/l19-s1-news-today.webp`,
          imageCaption: `Every day, the world changes. Discoveries, inventions, kindness, decisions. History is being made right now — by people like us.`,
          vocab: [
            { word: `news`,         definition: `Stories about what's happening in the world right now. Adults read or watch the news to know what's going on.`,
              audioPrompt: `News means stories about what's happening in the world right now, {name}. Adults read newspapers. They watch TV news. They listen to news on the radio. They get news on their phones. The news tells us what's happening today — in our town, our country, and the whole world. Some news is exciting. Some is hard. All of it is the world telling its story right now.` },
            { word: `current`,      definition: `Happening RIGHT NOW. Current events are things happening today, this week, or this month.`,
              audioPrompt: `Current means happening right now, {name}. Current events are things happening today, this week, or this month. It's different from history. History is what happened in the past. CURRENT events are what's happening RIGHT NOW. They'll become history one day. But right now, they're fresh. They're new. The world is changing every moment.` },
            { word: `happening`,    definition: `Going on right now. Things are happening in the world every single moment.`,
              audioPrompt: `Happening means going on right now, {name}. Things are happening all over the world every single moment. As you listen to this lesson — somewhere a baby is being born. A scientist is making a discovery. A kid is starting school. A neighbor is helping someone. A leader is making a decision. The world is always happening. Always moving. Always changing. That's the wonder of being alive.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Curious Questions to Ask`,
          paragraphs: [
            `When you hear something is happening, get CURIOUS!`,
            `Ask yourself: WHO is involved? WHERE is this happening? WHY is it important? WHEN did it happen? HOW does it affect people? These are called the 5 W's and an H. They help you understand the news better. Curiosity is your superpower for understanding the world.`,
          ],
          image: `/explorer-assets/history/l19-s2-who-where.webp`,
          imageCaption: `Curious questions! Who, where, why, when, how. These help you understand what's happening and care more deeply.`,
          vocab: [
            { word: `curious`,      definition: `Wanting to learn more. Being curious means asking questions and exploring ideas.`,
              audioPrompt: `Curious means wanting to learn more, {name}. When you're curious, you ASK questions. You explore. You don't just accept the first answer — you dig deeper. Curiosity is one of the best human powers. It's how we learn. It's how we grow. It's how the world makes progress. Curious people change the world. Stay curious, {name}.` },
            { word: `question`,     definition: `Something you ask to learn more. Good questions help us understand the world.`,
              audioPrompt: `A question is something you ask to learn more, {name}. Good questions help us understand the world. WHO? WHAT? WHERE? WHEN? WHY? HOW? These six little words are powerful. They take you from not knowing something to understanding it. The best learners — kids and grownups — ASK lots of questions. They aren't embarrassed not to know. They're curious. They ask. Then they know.` },
            { word: `important`,    definition: `Mattering a lot. Some news is important because it affects many people.`,
              audioPrompt: `Important means mattering a lot, {name}. Some news is important because it affects many people. Other news isn't as important — like which movie wins an award. Both can be interesting. But knowing which news is IMPORTANT helps you focus on what really matters. When you read or hear news, ask: WHY is this important? Who does this affect? That helps you understand its weight.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Look for the GOOD News`,
          paragraphs: [
            `News sometimes makes us sad. But there's SO MUCH GOOD news too!`,
            `Scientists CURING diseases. Engineers building TECHNOLOGY to help people. Neighbors helping NEIGHBORS. Kids inventing AMAZING things. Animals being SAVED. Schools opening. Trees being planted. Look for the helpers. Look for the SMILES. Good news is everywhere if you LOOK FOR IT.`,
          ],
          image: `/explorer-assets/history/l19-s3-good-news.webp`,
          imageCaption: `Good news is everywhere! Helpers helping. Inventors creating. Kindness multiplying. Look for the helpers, always.`,
          vocab: [
            { word: `good news`,     definition: `Stories about helpful, kind, or amazing things happening. Lots of good news happens every day.`,
              audioPrompt: `Good news is stories about helpful, kind, or amazing things happening, {name}. Every day, lots of GOOD news happens — but sometimes we have to LOOK for it. There are kids inventing new things. Doctors curing diseases. People rescuing animals. Communities helping each other. Some news websites and shows focus only on GOOD news. They want to remind us that the world is full of helpers and beauty.` },
            { word: `helpers`,       definition: `People who help others. There are helpers everywhere, in every kind of news.`,
              audioPrompt: `Helpers are people who help others, {name}. A famous TV host named Mr. Rogers said this beautiful thing: 'When you see something scary in the news, look for the HELPERS. There are always helpers.' He was right. In every disaster, there are people running TO HELP. Firefighters. Doctors. Volunteers. Kind neighbors. Look for the helpers. They're always there. They're the best part of any news.` },
            { word: `discovery`,     definition: `Finding something new. Scientists make exciting discoveries all the time.`,
              audioPrompt: `A discovery is finding something new, {name}. Scientists are constantly making AMAZING discoveries. New planets. New medicines. New animals. New understandings of how the world works. Just in your lifetime, scientists have discovered tons of new things. And in the future — there's so much more to discover. Maybe by you! Discovery is one of the most exciting kinds of news.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Smart Listening`,
          paragraphs: [
            `Being a SMART LISTENER means thinking about what you hear.`,
            `Sometimes news has BIG WORDS. Sometimes it's confusing. Sometimes people see the same thing differently. So ASK QUESTIONS. Talk to a grown-up. Look up things you don't understand. Smart listeners don't just believe everything they hear. They THINK. They ASK. They UNDERSTAND.`,
          ],
          image: `/explorer-assets/history/l19-s4-asking-questions.webp`,
          imageCaption: `Smart listening = thinking about what you hear. Asking questions. Checking with grownups. Understanding before believing.`,
          vocab: [
            { word: `listen`,        definition: `To pay careful attention to what someone says or what's happening. Smart listeners pay close attention.`,
              audioPrompt: `To listen is to pay careful attention, {name}. Smart listeners listen carefully. They don't just hear the words — they HEAR them. They notice what's being said. They notice what ISN'T being said. They notice tone of voice. They listen with their whole brain. Listening is a skill. The more you practice, the better you get. Smart listeners learn more and understand more.` },
            { word: `think`,         definition: `To use your brain to understand things. Smart listeners think about what they hear before believing.`,
              audioPrompt: `To think is to use your brain to understand things, {name}. Smart listeners don't just take everything they hear as 100 percent true. They THINK about it. Does this make sense? Have I heard a different version of this? What questions do I have? Thinking is what separates smart listeners from people who believe whatever they hear. Always THINK. Always ask questions.` },
            { word: `understand`,    definition: `To really know what something means. Smart listening helps you understand the world.`,
              audioPrompt: `To understand is to really know what something means, {name}. Not just know about it — but UNDERSTAND it. To understand the news, you have to listen, think, ask questions, and learn the background. Sometimes news is about complicated things. It takes time to understand them. That's okay. Adults are still learning too. Keep asking questions. Keep listening. Understanding grows over time.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Talk With Trusted Grownups`,
          paragraphs: [
            `When you hear something in the news that's confusing, scary, or interesting — TALK to a trusted grown-up.`,
            `Your parents. Your teachers. Your grandparents. Family members. Grown-ups know more about the world. They can help explain things. They can answer your questions. They can help you understand. They can comfort you if the news is hard. Always TALK about what you see and hear.`,
          ],
          image: `/explorer-assets/history/l19-s5-trusted-grownups.webp`,
          imageCaption: `Talk to trusted grownups. They've lived longer, seen more. They can help you make sense of the world.`,
          vocab: [
            { word: `trusted`,       definition: `Someone you can rely on. Trusted grownups help you understand the world.`,
              audioPrompt: `Trusted means someone you can rely on, {name}. Trusted grownups are the adults in your life who you know LOVE you and want what's best for you. Your parents. Your grandparents. Your teachers. They've been around longer. They know more. They can help you understand things you don't yet understand. When the news is confusing or scary or interesting, talk to them about it.` },
            { word: `talk`,          definition: `To share words with another person. Talking with trusted grownups helps you understand the world.`,
              audioPrompt: `To talk is to share words with another person, {name}. Talking is one of the most important things humans do. When you talk about the news with trusted grownups, magic happens. You ask questions. They help you understand. They tell you what they know. They share their wisdom. They make complicated things feel less scary. Always talk about what you hear. Always ask questions.` },
            { word: `understand`,    definition: `Trusted grownups help you understand things you can't yet figure out alone.`,
              audioPrompt: `To understand is to really know what something means, {name}. Grownups have lived longer. They've seen more. They can help you understand things you can't yet figure out alone. That's part of why we have grownups in our lives. They're like guides. They've walked the path before you. They can show you the way through confusing news, hard events, and big ideas.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Can Help Too`,
          paragraphs: [
            `Knowing what's happening isn't enough. You can also HELP.`,
            `If you hear about people who need help, you can DONATE. Volunteer. Write a card. Share information. You can plant trees. Pick up litter. Be kind. Speak up for what's right. Kids YOUR AGE have changed the world — like Greta Thunberg fighting for climate, or kids who built solar lights for their villages. You're not too young to care. You're not too young to act.`,
          ],
          image: `/explorer-assets/history/l19-s6-take-action.webp`,
          imageCaption: `You're not too young to help. Plant a tree. Help a neighbor. Speak up for what's right. Every small act matters.`,
          vocab: [
            { word: `help`,          definition: `Doing something to make a situation better. Every person, even kids, can help.`,
              audioPrompt: `Help means doing something to make a situation better, {name}. Every person, even kids, can help. You don't have to wait until you're a grown-up. You can help RIGHT NOW. Help your siblings. Help your neighbors. Help your classmates. Help the environment by picking up trash. Help animals by being gentle with them. Help kids your age who are having a hard time. Help is everywhere — you just have to choose to give it.` },
            { word: `volunteer`,     definition: `To help without being paid. Many people volunteer at schools, charities, and in their neighborhoods.`,
              audioPrompt: `To volunteer is to help without being paid, {name}. Many people volunteer at schools, soup kitchens, animal shelters, and in their neighborhoods. They give their time freely. They do it because they care. Some kids volunteer to help younger kids with reading. Some help clean parks. Some help old people. Volunteering is one of the most beautiful things you can do. It teaches you that you matter.` },
            { word: `action`,        definition: `Doing something instead of just thinking about it. Kids YOUR age have changed the world with their actions.`,
              audioPrompt: `Action means doing something instead of just thinking about it, {name}. Kids YOUR age have changed the world with their actions. Greta Thunberg, when she was 15, started speaking up about climate change — and millions of kids around the world joined her. Malala Yousafzai, when she was 11, started writing about girls' rights to school. Action is powerful. Don't wait until you're grown to take action. You can take action right now.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `Talking to trusted grownups helps you understand what's happening in the news.`,
              matchPhrase: `Yes! Trusted grownups have lived longer and know more. They can help you understand confusing things, answer your questions, and comfort you when news is hard.`,
              correctMatch: `fact` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `There's lots of GOOD news happening every day too — discoveries, helpers, inventions.`,
              matchPhrase: `True! Every day brings amazing good news. Scientists curing diseases, kids inventing things, neighbors helping neighbors. Look for the good news — it's always there.`,
              correctMatch: `fact` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `Only bad things happen in the world.`,
              matchPhrase: `Definitely not! TONS of good things happen every day, {name}. Helpers helping. Inventions being made. Kindness everywhere. We just have to look for them. The world is full of good news.`,
              correctMatch: `myth` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `You can use a magic crystal ball to predict tomorrow's news.`,
              matchPhrase: `Ha! That would be cool, but crystal balls aren't real, {name}. News is what's happening right now. Tomorrow's news is still being created. Stay curious!`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What are CURRENT EVENTS?`,
              options: [`Old stories from long ago`, `Things that are happening right NOW`, `Made-up stories`, `Fairy tales`],
              correctIndex: 1,
              explanation: `Current events are things that are happening RIGHT NOW — today, this week, or this month. They'll become history one day. But right now, they're new and fresh.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What are good QUESTIONS to ask about the news?`,
              options: [`Only "what color is it"`, `Who, where, when, why, how`, `Just shrug and walk away`, `Only "is it scary"`],
              correctIndex: 1,
              explanation: `Who, where, when, why, and how! These questions help you understand the news better. Being curious and asking good questions is how you become a smart, thoughtful person about the world.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `When the news seems confusing, what's a good thing to do?`,
              options: [`Believe everything without thinking`, `Talk with a trusted grownup who can help you understand`, `Cry alone`, `Forget about it forever`],
              correctIndex: 1,
              explanation: `Talk with a trusted grownup! Your parents, teachers, grandparents — they've lived longer and know more. They can help you understand confusing news, answer questions, and comfort you when news is hard.` },
            { id: `l19-q4`, format: `true-false`,
              question: `Lots of GOOD news happens in the world every day — you just have to look for it.`,
              correctAnswer: true,
              explanation: `True! Every day, scientists discover things. Inventors create things. Neighbors help each other. Kindness happens. Good news is everywhere — we just have to look for it. Always look for the helpers.` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `Kids YOUR age can help the world by taking ___.`,
              options: [`action`, `naps`, `pictures`, `pencils`],
              correctIndex: 0,
              explanation: `Action! Kids your age have changed the world by taking action. Like Greta Thunberg and Malala Yousafzai. You don't have to wait until you're a grown-up. You can help right now.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What's the BEST way to learn about the world today?`,
              options: [`Believe whatever you hear first`, `Stay curious, ask questions, look for good news, and talk with trusted grownups`, `Just stop paying attention`, `Only watch cartoons`],
              correctIndex: 1,
              explanation: `Stay curious, ask questions, look for good news, and talk with trusted grownups! That's how you become a smart, thoughtful person about the world. The world needs people like you who care.` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Today, news comes from MANY places, {name}. Newspapers, TV, radio, phones, websites. Some places, like NPR's "Story Pirates" or "Wow in the World" podcasts, are made just for kids. Time for Kids and National Geographic Kids magazines share kid-friendly news. Some news shows like CBS Sunday Morning still focus on positive stories. The trick is finding GOOD sources. And always — always — talking with the trusted grownups in your life.`,
          familyAdventure: `Start a FAMILY NEWS TRADITION! Once a week — maybe at dinner — each family member shares ONE piece of news they heard about. Could be something cool, kind, sad, or interesting. Talk about it. Ask questions. Listen to each other. Make it a regular thing. Watch how much you all learn together over time.`,
          creativePrompt: `Be a REPORTER for the day! Write your own newspaper or news report about what's happening in YOUR house, school, or neighborhood. What's the headline? Who's involved? Why is it important? What's the GOOD news? Draw pictures. Use exciting words. Share it with your family!`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to be a curious explorer of the world today. Ask questions. Look for good news. Talk with trusted grownups. Take action. You're part of history happening right now. Your curiosity and care matter. I carry these stories with me. Thank you for journeying with me.`,
          badge: `current-events-explorer`,
          badgeName: `Current Events Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L19] Loaded: "Current Events: What's Happening in the World" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
