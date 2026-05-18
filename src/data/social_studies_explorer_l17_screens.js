// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L17 — Long Ago vs. Today: How Life Has Changed
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.His.2.K-2 / D2.His.3.K-2 (change and continuity)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L17 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-17`,
      title:     `Long Ago vs. Today: How Life Has Changed`,
      duration:  12,
      xpReward:  50,
      badge:     `then-now-explorer`,
      badgeName: `Then and Now Explorer`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Last lesson you learned what history IS. Today we get specific — how has LIFE CHANGED through time? What did people do BEFORE phones? Before cars? Before electricity? You'll see how different — and how SIMILAR — life was in the past. Let's travel through time.`,
          headline: `Long Ago vs. Today`,
          subtitle: `How everyday life has changed — and what's stayed the same`,
          visual: `/explorer-assets/social-studies/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Imagine NO Phones`,
          paragraphs: [
            `Take a moment. Imagine your life WITHOUT phones. Without TVs. Without cars. Without electricity.`,
            `Hard to picture? That was LIFE for most of human history. Phones are about 150 years old. Cars are about 130 years old. The internet is barely 40 years old. For THOUSANDS of years before that, none of these existed. People lived very differently. They walked or rode horses. They wrote letters that took weeks to arrive. They lit candles at night. They got news days or weeks late. Life moved SLOWER. People worked DIFFERENTLY. Kids played DIFFERENTLY. Yet life was full and meaningful. Today we'll explore how things have changed — and some things that have stayed surprisingly the same.`,
          ],
          image: `/explorer-assets/social-studies/l17-s1-then-now.webp`,
          imageCaption: `Long ago: no phones, no cars, no electricity. Most of human history was that way. Life moved slower.`,
          vocab: [
            { word: `change`,         definition: `When things BECOME DIFFERENT over time. Life has CHANGED hugely.`,
              audioPrompt: `Change, {name}, is when things become different over time. Life has changed hugely. The world your great-grandparents lived in was very different from yours. The world you'll live in as a grown-up will probably be different again. Change happens. Sometimes fast. Sometimes slow. Studying change is one of the most exciting parts of history.` },
            { word: `before`,         definition: `EARLIER in time. BEFORE phones, people communicated by letter.`,
              audioPrompt: `Before, {name}, means earlier in time. Before phones, people communicated by letter. Before cars, people walked or rode horses. Before electricity, people used candles. The word 'before' helps us think about time. We can always imagine what was 'before' the things we have now.` },
            { word: `life`,           definition: `How people LIVED. LIFE long ago was very different from today.`,
              audioPrompt: `Life, {name}, is how people lived. Life long ago was very different from today. Different houses. Different food. Different work. Different fun. Different schools. Different everything. And yet — people loved each other, raised families, had hopes and dreams, just like us. The technology was different, but the heart was the same.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `HOMES Through Time`,
          paragraphs: [
            `Let's start with HOMES. They've changed A LOT.`,
            `LONG AGO (like 30,000+ years ago) — people lived in CAVES or simple shelters made of branches and animal skins. Just enough to stay safe from weather. THOUSANDS OF YEARS AGO — people built homes of MUD, CLAY, or STONE. They lived in small villages. NO TOILETS, NO RUNNING WATER. HUNDREDS OF YEARS AGO — homes had multiple rooms, but still no running water or electricity. Cooking was over a fire. JUST 100 YEARS AGO — electricity started being common in homes. Running water came inside. TODAY — homes have heating, air conditioning, refrigerators, microwaves, internet. Most kids today have what kings and queens 200 years ago could only dream of.`,
          ],
          image: `/explorer-assets/social-studies/l17-s2-homes.webp`,
          imageCaption: `Homes: caves → mud/stone houses → wooden houses → modern homes with electricity, water, internet.`,
          vocab: [
            { word: `home`,           definition: `Where people LIVE. HOMES have changed dramatically — caves to modern houses.`,
              audioPrompt: `A home, {name}, is where people live. Homes have changed dramatically. 30,000 years ago, caves. Thousands of years ago, mud and stone houses. Hundreds of years ago, wooden houses with fireplaces. Today, houses with electricity, plumbing, internet. Each home was the best people could build with what they had.` },
            { word: `electricity`,    definition: `The POWER that runs LIGHTS, computers, refrigerators. ELECTRICITY changed everything.`,
              audioPrompt: `Electricity, {name}, is the power that runs lights, computers, refrigerators, and almost everything else in modern homes. Electricity became common about 100 years ago. Before that, people lit candles at night. Cooked over fires. Hand-washed clothes. Electricity changed everything. It made modern life possible.` },
            { word: `dramatic`,       definition: `Very BIG change. Homes have changed DRAMATICALLY through time.`,
              audioPrompt: `Dramatic, {name}, means very big change. Homes have changed dramatically through time. From caves to skyscrapers. From dirt floors to internet-connected smart homes. The changes are huge. If a person from 5,000 years ago could see your home today, they'd think it was magic.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Getting Around: TRANSPORTATION`,
          paragraphs: [
            `How did people GET PLACES before cars and planes? Most people WALKED. That was it.`,
            `Eventually they used ANIMALS — horses, donkeys, camels — to ride or pull carts. About 200 years ago, TRAINS were invented. Suddenly people could travel hundreds of miles in a day. About 130 years ago, the first CARS appeared. About 120 years ago, the first AIRPLANES flew. Most people in 1900 had never traveled more than 50 miles from where they were born. Today, you might fly across the world for vacation. We can travel faster and farther than ever in human history. Just one generation ago — your grandparents probably had a very different sense of travel than you do.`,
          ],
          image: `/explorer-assets/social-studies/l17-s3-transportation.webp`,
          imageCaption: `Travel: walking → horses → trains → cars → airplanes. We travel farther and faster than ever in history.`,
          vocab: [
            { word: `transportation`, definition: `Ways of GETTING places. TRANSPORTATION has changed from walking to airplanes.`,
              audioPrompt: `Transportation, {name}, is the ways of getting places. Transportation has changed from walking to airplanes. For most of human history, people walked. Then they used animals. Then trains. Then cars. Now planes and even spaceships. Each new transportation technology made the world feel smaller. Today you can travel anywhere in a day or two.` },
            { word: `walk`,           definition: `MOVE on your FEET. People mostly WALKED long ago. Still important today.`,
              audioPrompt: `To walk, {name}, is to move on your feet. People mostly walked long ago. There weren't cars or trains. Most people only went as far as their feet could take them in a day. Walking is still important today, of course. But for daily life, people travel by car, bus, train, or plane instead.` },
            { word: `farther`,        definition: `A LONGER distance. Today we can travel FARTHER than ever before.`,
              audioPrompt: `Farther, {name}, means a longer distance. Today we can travel farther than ever before. A few generations ago, most people stayed near where they were born. Now people travel across countries and oceans. Pilots fly people halfway around the world in less than a day. We're more connected to faraway places than ever in history.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Talking from Far Away: COMMUNICATION`,
          paragraphs: [
            `Before phones, how did people TALK to others far away? Mostly they WROTE LETTERS.`,
            `Letters had to travel by foot, horse, or ship. A letter to another country might take WEEKS or MONTHS. About 180 years ago, the TELEGRAPH was invented — sending signals through wires. Suddenly messages could travel fast across long distances. About 150 years ago, the first PHONES let people TALK across distances. About 30 years ago, the INTERNET let messages fly anywhere in seconds. About 20 years ago, smartphones let you carry the internet in your pocket. We've gone from waiting WEEKS for a letter — to texting someone across the world in less than a SECOND. The biggest change in human communication ever happened in just a few generations.`,
          ],
          image: `/explorer-assets/social-studies/l17-s4-communication.webp`,
          imageCaption: `Communication: letters (weeks) → telegraph (hours) → phones → internet (seconds). HUGE change recently.`,
          vocab: [
            { word: `communication`,  definition: `Sharing INFORMATION with others. COMMUNICATION has changed from letters to instant texts.`,
              audioPrompt: `Communication, {name}, is sharing information with others. Communication has changed from letters that took weeks to instant texts. People used to wait months to hear from family across an ocean. Now you can video chat with them in seconds. This change has connected the world like never before. It also changed how we live every day.` },
            { word: `letter`,         definition: `A WRITTEN message sent through mail. LETTERS used to be the main way to communicate far away.`,
              audioPrompt: `A letter, {name}, is a written message sent through mail. Letters used to be the main way to communicate far away. People wrote them by hand. They put them in envelopes. They sent them through mail. Months later, the other person read them. People still write letters sometimes — there's something special about a handwritten note. But most messages today are instant.` },
            { word: `instant`,        definition: `Happening IMMEDIATELY. Modern communication is INSTANT — across the world in seconds.`,
              audioPrompt: `Instant, {name}, means happening immediately. Modern communication is instant — across the world in seconds. You can text a friend on the other side of the planet, and they get it right away. You can video chat with grandparents thousands of miles away. Instant communication is one of the biggest changes in human history. It happened in just one or two generations.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `SCHOOL and FUN`,
          paragraphs: [
            `SCHOOL was different too. Long ago, only RICH kids went to school. Most kids had to WORK from a young age — on farms, in factories, or helping at home.`,
            `As time went on, more places made school FREE for all kids. About 100 years ago, you might attend a ONE-ROOM SCHOOLHOUSE with ALL ages together. The teacher taught everyone. Today, schools have separate classrooms, different teachers, and lots of subjects. FUN was different too. No video games. No TV. Kids played HIDE AND SEEK, MARBLES, HOPSCOTCH. They played MUSIC together. Made up STORIES. Used IMAGINATION. They had fewer toys but spent more time outside. Some old-time games are still played today. Childhood looks different — but the JOY of playing is the same.`,
          ],
          image: `/explorer-assets/social-studies/l17-s5-school-fun.webp`,
          imageCaption: `School: only rich kids long ago → one-room schoolhouses → modern schools. Fun: outdoor games, imagination → games today.`,
          vocab: [
            { word: `school`,         definition: `Where kids LEARN. SCHOOLS have changed — from one-room schoolhouses to modern buildings.`,
              audioPrompt: `A school, {name}, is where kids learn. Schools have changed. Long ago, only rich kids went. About 100 years ago, one-room schoolhouses had all ages together. Today, schools have separate classrooms, lots of subjects, technology, and teachers trained in different areas. Free public school is fairly new in human history.` },
            { word: `fun`,            definition: `Activities you ENJOY. FUN has changed — but kids have always played.`,
              audioPrompt: `Fun, {name}, is activities you enjoy. Fun has changed. Kids long ago played hide and seek, marbles, hopscotch, and imagination games. They didn't have video games or TVs. Today, kids have many more options for entertainment. But the JOY of playing has always been the same. Kids in every age have laughed, played, and had fun.` },
            { word: `imagination`,    definition: `MAKING UP stories in your head. Kids long ago used IMAGINATION for fun.`,
              audioPrompt: `Imagination, {name}, is making up stories in your head. Kids long ago used imagination a lot. They pretended sticks were swords. Made dolls from cloth. Created whole adventures in their minds. Today, with so many movies and games, imagination is still important. Kids who use their imaginations grow into adults who can create new things. Imagination is one of humans' best tools.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Stays the SAME`,
          paragraphs: [
            `Lots has changed. But here's what HASN'T CHANGED through all of human history — the things that matter MOST to humans.`,
            `LOVE — parents loving children, siblings loving each other, friends caring for friends. FAMILIES — people coming together to support each other. PLAY — kids running, laughing, inventing games. KINDNESS — helping others, sharing, being gentle. STORIES — humans telling stories to teach, entertain, and connect. CURIOSITY — wanting to know how the world works. ART and MUSIC — making beautiful things. HOPES and DREAMS — wanting a better future. Technology changes fast. But what makes us HUMAN stays the same. A kid 5,000 years ago felt joy at a sunset. A kid today does too. Some things never change — and that's beautiful.`,
          ],
          image: `/explorer-assets/social-studies/l17-s6-same-things.webp`,
          imageCaption: `What stays the same: love, family, play, kindness, stories, curiosity. The HEART of being human hasn't changed.`,
          vocab: [
            { word: `same`,           definition: `Not CHANGING. Some things — like love and play — stay the SAME through all time.`,
              audioPrompt: `The same, {name}, means not changing. Some things — like love and play — stay the same through all time. Technology changes. Tools change. Cities change. But humans are still humans. We still love our families. We still play with our friends. We still wonder about the world. We still dream of better futures. That part of being human is timeless.` },
            { word: `human`,          definition: `A PERSON. What makes us HUMAN stays the same — love, curiosity, play, kindness.`,
              audioPrompt: `Human, {name}, is a person. What makes us human stays the same. Across all of history. Across all cultures. We're social. We love. We tell stories. We play. We dream. We hurt. We hope. A kid in ancient Egypt was as fully human as you are today. They had the same emotions. The same wonders. They were just in a different time.` },
            { word: `timeless`,       definition: `Lasting through ALL time. Some HUMAN things are TIMELESS — they never change.`,
              audioPrompt: `Timeless, {name}, means lasting through all time. Some human things are timeless. Hugging a parent. Laughing with friends. Looking up at stars. Wondering 'why?' Singing songs. Loving pets. These things were true 10,000 years ago. They'll be true 10,000 years from now. Some things never change. That's beautiful.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `Life has CHANGED A LOT over time — homes, transportation, communication, schools are all different.`,
              matchPhrase: `Yes! Huge changes. From caves to smart homes. From walking to airplanes. From letters that took weeks to instant texts. From rich-only schools to free public education. Life has transformed.`,
              correctMatch: `fact` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `Some things stay the SAME — love, family, friendship, curiosity, play.`,
              matchPhrase: `True! The things that make us human stay the same. Love, family, play, kindness, stories, curiosity. Technology changes — but the heart of being human is timeless.`,
              correctMatch: `fact` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `NOTHING has changed since ancient times — life today is identical to life 5,000 years ago.`,
              matchPhrase: `Not at all! Lots has changed — homes, transportation, communication, technology, schools, fun. The world today would seem like magic to people from 5,000 years ago.`,
              correctMatch: `myth` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `Everything in the past was completely AWFUL — no joy, love, or happiness back then.`,
              matchPhrase: `Definitely not! People in the past had full lives. They loved their families. They had fun with friends. They told stories. They had hopes and dreams. Different from today — but still meaningful.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What did people do BEFORE cars existed?`,
              options: [`Stayed home forever`, `WALKED or rode HORSES — and got around slowly`, `Took airplanes`, `Used phones`],
              correctIndex: 1,
              explanation: `Before cars, people walked or rode horses (or camels, donkeys depending on where). Cars are only about 130 years old. For most of history, people moved slowly and didn't go far from home.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What changed life DRAMATICALLY about 100 years ago?`,
              options: [`Music`, `ELECTRICITY became common in homes`, `Books were invented`, `Vegetables`],
              correctIndex: 1,
              explanation: `Electricity! Before it was common, people lit candles at night, cooked over fires, washed clothes by hand. Electricity changed everything about home life in just a few generations.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `Before phones, how did people communicate far away?`,
              options: [`Telepathy`, `LETTERS — written by hand, sent through mail, took weeks`, `They didn't`, `Yelling really loud`],
              correctIndex: 1,
              explanation: `Letters! Written by hand, sent through mail, took weeks or months. A letter across an ocean might take 3-6 months. The phone changed this dramatically about 150 years ago.` },
            { id: `l17-q4`, format: `true-false`,
              question: `Long ago, only RICH kids went to school — most kids had to work from a young age.`,
              correctAnswer: true,
              explanation: `True! For most of history, school was only for wealthy kids. Most kids worked on farms, in factories, or helping at home. Free public school for ALL kids is a fairly recent change in history.` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `Some things STAY THE SAME through all of history — like ___, family, friendship, and play.`,
              options: [`love`, `cars`, `phones`, `electricity`],
              correctIndex: 0,
              explanation: `Love! And family, friendship, play, kindness. The HUMAN things stay the same. Technology changes — but love is timeless. Kids 5,000 years ago and kids today both feel love.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `What's the SAME between you and a kid from 1,000 years ago?`,
              options: [`Phones`, `LOVE, family, friends, curiosity, play — the things that make us human`, `Everything`, `Nothing`],
              correctIndex: 1,
              explanation: `The human things! Both of you feel love. Both have families. Both play. Both wonder about the world. Both dream. Technology is different, but the heart of being human is the same.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. The world is changing FASTER than ever before. In one generation — from your parents to you — we've seen smartphones, social media, AI, and electric cars become normal. By the time you're a grown-up, life might look very different from today. Maybe self-driving cars will be everywhere. Maybe people will work mostly from home. Maybe we'll have stations on the moon. Maybe AI will help with everything. Maybe new diseases will be cured. The future is being built right now. You'll be part of the people building it. The same way past generations changed the world for us — your generation will change it for those who come after.`,
          familyAdventure: `Together, ASK GRANDPARENTS or older relatives — what was DIFFERENT when they were kids? Ask: 1) Did you have phones? TV? 2) How did you get to school? 3) What games did you play? 4) What was your house like? Listen to their stories. Notice — they grew up in a different world. Now imagine your own kids will say the same thing about YOU someday. Life keeps changing.`,
          creativePrompt: `Draw THREE pictures showing the same thing across time: 1) HOME 1,000 years ago. 2) HOME 100 years ago. 3) HOME today (yours!). Show what's the same and different. Or do it with another topic — transportation, school, fun. Draw the differences. Then think — what might homes look like in 100 MORE years? Draw that too.`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now see how LIFE HAS CHANGED. HOMES went from caves to smart houses. TRANSPORTATION from walking to airplanes. COMMUNICATION from letters to instant texts. SCHOOL became free for all kids. FUN changed but kids still played. And the BEST part — what makes us HUMAN stays the same. Love, family, curiosity, play — timeless. Past generations changed the world for us. Your generation will change it for those who come next. — Atlas 🐻`,
          badge: `then-now-explorer`,
          badgeName: `Then and Now Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L17] Loaded: "Long Ago vs. Today" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
