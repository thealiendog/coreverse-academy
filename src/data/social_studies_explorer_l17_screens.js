// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L17 — Long Ago vs. Today
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.His.2.K-2 / D2.His.3.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L17 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-17`,
      title: `Long Ago vs. Today`,
      duration: 12,
      xpReward: 50,
      badge: `then-now-explorer`,
      badgeName: `Then and Now Explorer`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Last time you learned what history is. Today we look at how life has changed. What was it like before phones? Before cars? Let's travel back in time.`,
          headline: `Long Ago vs. Today`,
          subtitle: `How life has changed and what stays the same`,
          visual: `/explorer-assets/social-studies/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Imagine No Phones`,
          paragraphs: [
            `Stop and imagine your life without phones. Without TVs. Without cars. Without electricity.`,
            `That was life for most of human history. Phones are about 150 years old. Cars are about 130 years old. Before that, none of these existed. People lived very differently. Life moved slower.`,
          ],
          image: `/explorer-assets/social-studies/l17-s1-then-now.webp`,
          imageCaption: `Long ago: no phones, no cars, no electricity. Life moved slower.`,
          vocab: [
            { word: `change`, definition: `When things become different over time.`,
              audioPrompt: `Change is when things become different over time, {name}. Life has changed a lot. The world your great-grandparents lived in was very different. Change happens. Some fast. Some slow.` },
            { word: `before`, definition: `Earlier in time.`,
              audioPrompt: `Before means earlier in time, {name}. Before phones, people wrote letters. Before cars, people walked or rode horses. Before electricity, people used candles. The word before helps us think about time.` },
            { word: `ago`, definition: `A time in the past.`,
              audioPrompt: `Ago means a time in the past, {name}. Five years ago. A hundred years ago. A thousand years ago. We use ago to talk about how far back something happened.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Homes Through Time`,
          paragraphs: [
            `Homes have changed a lot.`,
            `Long ago, people lived in caves. Then in mud houses. Then in wooden houses with fireplaces. About 100 years ago, electricity came inside homes. Today, homes have heating, refrigerators, and internet. Modern homes would seem like magic to people from long ago.`,
          ],
          image: `/explorer-assets/social-studies/l17-s2-homes.webp`,
          imageCaption: `Homes changed: caves to mud houses to modern homes with electricity.`,
          vocab: [
            { word: `home`, definition: `Where people live.`,
              audioPrompt: `A home is where people live, {name}. Homes have changed a lot. From caves to mud houses to modern houses. Each was the best people could build with what they had at the time.` },
            { word: `electricity`, definition: `The power that runs lights and machines.`,
              audioPrompt: `Electricity is the power that runs lights and machines, {name}. Before electricity, people lit candles at night. Cooked over fires. Washed clothes by hand. Electricity changed almost everything about life at home.` },
            { word: `modern`, definition: `From recent times. The way things are now.`,
              audioPrompt: `Modern means from recent times, {name}. Modern homes have many machines. Modern life has phones and cars. Things people from 1,000 years ago would not believe.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Getting Around`,
          paragraphs: [
            `How did people travel before cars? Most people walked. That was it.`,
            `Then they used horses and donkeys. About 200 years ago, trains were invented. Then cars about 130 years ago. Then airplanes 120 years ago. Today you might fly across the world for a vacation. People long ago rarely went far from home.`,
          ],
          image: `/explorer-assets/social-studies/l17-s3-transportation.webp`,
          imageCaption: `Travel: walking, horses, trains, cars, planes. Faster every time.`,
          vocab: [
            { word: `travel`, definition: `Going from one place to another.`,
              audioPrompt: `To travel means to go from one place to another, {name}. People have always traveled. But how they travel changed. From walking to flying. We can go farther and faster than any humans before us.` },
            { word: `walk`, definition: `To move on your feet.`,
              audioPrompt: `To walk means to move on your feet, {name}. People mostly walked long ago. They could only go as far as their feet would take them in a day. That changed when humans invented cars, trains, and planes.` },
            { word: `farther`, definition: `A longer distance.`,
              audioPrompt: `Farther means a longer distance, {name}. Today we travel farther than ever before. Pilots can fly people halfway around the world in less than a day. The world is more connected than ever.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Talking Across Distance`,
          paragraphs: [
            `Before phones, how did people talk to others far away? Mostly they wrote letters.`,
            `Letters had to travel by foot, horse, or ship. A letter to another country could take weeks or months. Then came the telegraph. Then phones. Then the internet. Now we can text someone across the world in seconds. The change is huge.`,
          ],
          image: `/explorer-assets/social-studies/l17-s4-communication.webp`,
          imageCaption: `Talking far away: letters took weeks. Phones changed everything. Now texts are instant.`,
          vocab: [
            { word: `letter`, definition: `A written message sent through the mail.`,
              audioPrompt: `A letter is a written message sent through mail, {name}. Long ago, letters were the main way to talk to people far away. People wrote them by hand. Sent them in envelopes. Waited months for replies.` },
            { word: `instant`, definition: `Happening right away.`,
              audioPrompt: `Instant means happening right away, {name}. Today, messages are instant. You can text a friend on the other side of Earth. They get it in seconds. Long ago, this would have seemed impossible.` },
            { word: `internet`, definition: `A network that connects computers around the world.`,
              audioPrompt: `The internet is a network that connects computers, {name}. Around the world. It carries text, photos, videos, calls. The internet is only about 40 years old. But it changed everything.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `School and Fun`,
          paragraphs: [
            `School was different too. Long ago, only rich kids went to school. Most kids had to work on farms or in factories.`,
            `Fun was different. No video games. No TV. Kids played hide and seek, marbles, hopscotch. They made up stories. Used their imagination. Different from today. But the joy of playing is the same.`,
          ],
          image: `/explorer-assets/social-studies/l17-s5-school-fun.webp`,
          imageCaption: `School and fun changed. But the joy of playing is the same.`,
          vocab: [
            { word: `school`, definition: `Where kids go to learn.`,
              audioPrompt: `A school is where kids go to learn, {name}. Long ago, only rich kids went. Today, kids in many countries go to free public schools. Education for everyone is a fairly new idea in history.` },
            { word: `fun`, definition: `Things you enjoy doing.`,
              audioPrompt: `Fun is things you enjoy doing, {name}. Kids long ago played hide and seek. Marbles. Hopscotch. They imagined adventures. Today kids have video games too. But the joy of play has always been the same.` },
            { word: `imagination`, definition: `Making up stories in your head.`,
              audioPrompt: `Imagination is making up stories in your head, {name}. Kids long ago used imagination a lot. Sticks became swords. Dolls came from cloth. Imagination is still important today. It helps you create.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Stays the Same`,
          paragraphs: [
            `Lots has changed. But here is what has not. The things that matter most.`,
            `Love. Family. Play. Kindness. Stories. Curiosity. Hope. A kid 5,000 years ago felt joy at a sunset. A kid today does too. Technology changes fast. But what makes us human stays the same.`,
          ],
          image: `/explorer-assets/social-studies/l17-s6-same-things.webp`,
          imageCaption: `What stays the same: love, family, play, kindness, curiosity.`,
          vocab: [
            { word: `same`, definition: `Not changing.`,
              audioPrompt: `Same means not changing, {name}. Some things stay the same through all time. Love. Family. Play. Kindness. Technology changes. But hearts do not. We are the same humans as people thousands of years ago.` },
            { word: `human`, definition: `A person.`,
              audioPrompt: `A human is a person, {name}. What makes us human stays the same. Across all of history. We love. We tell stories. We play. We hope. A kid in ancient Egypt was as fully human as you.` },
            { word: `timeless`, definition: `Lasting through all time.`,
              audioPrompt: `Timeless means lasting through all time, {name}. Some human things are timeless. Hugging a parent. Laughing with friends. Wondering why. These were true 10,000 years ago. They will be true 10,000 years from now.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each thing, {name}. Was it part of life LONG AGO or is it part of life TODAY?`,
          buckets: [
            { id: `long_ago`, label: `Long Ago`, color: `#A78BFA` },
            { id: `today`,    label: `Today`,    color: `#34D399` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `Riding a horse to travel`,
              matchPhrase: `Yes! Long ago, people rode horses. Before cars were invented.`, correctMatch: `long_ago` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `Writing letters that take weeks to arrive`,
              matchPhrase: `Right! Long ago, letters were the main way to talk far away.`, correctMatch: `long_ago` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `Lighting a candle at night`,
              matchPhrase: `Yes! Long ago, before electricity, people lit candles.`, correctMatch: `long_ago` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `Washing clothes by hand in a river`,
              matchPhrase: `Right! Long ago, all clothes were washed by hand. No washing machines.`, correctMatch: `long_ago` },
            { id: `l17-g5`, image: `l17-game-5.webp`, label: `Flying in an airplane`,
              matchPhrase: `Yes! Today we fly in planes. Long ago, no one could.`, correctMatch: `today` },
            { id: `l17-g6`, image: `l17-game-6.webp`, label: `Sending a text message in seconds`,
              matchPhrase: `Right! Today, texts are instant. Long ago, this seemed impossible.`, correctMatch: `today` },
            { id: `l17-g7`, image: `l17-game-7.webp`, label: `Turning on the lights in your room`,
              matchPhrase: `Yes! Today we have electric lights. Long ago, only candles or fires.`, correctMatch: `today` },
            { id: `l17-g8`, image: `l17-game-8.webp`, label: `Using a washing machine`,
              matchPhrase: `Right! Today machines wash clothes for us. Much easier than long ago.`, correctMatch: `today` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What did people do before cars?`,
              options: [`Stayed home`, `Walked or rode horses`, `Took airplanes`, `Used phones`],
              correctIndex: 1,
              explanation: `Walked or rode horses. Cars are only about 130 years old. Most of history, people moved slowly.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What changed life dramatically about 100 years ago?`,
              options: [`Music`, `Electricity in homes`, `Books`, `Vegetables`],
              correctIndex: 1,
              explanation: `Electricity! Before it, people used candles and washed by hand. Electricity changed almost everything.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `Before phones, how did people talk far away?`,
              options: [`Telepathy`, `Letters that took weeks to arrive`, `They did not`, `Yelling`],
              correctIndex: 1,
              explanation: `Letters. Written by hand. Sent by mail. Took weeks or months to arrive. Phones changed everything.` },
            { id: `l17-q4`, format: `true-false`,
              question: `Long ago, only rich kids went to school. Most kids worked.`,
              correctAnswer: true,
              explanation: `True! School for all kids is a fairly new idea. Most of history, most kids worked.` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `Some things stay the same through all of history. Like ___, family, play, and kindness.`,
              options: [`love`, `cars`, `phones`, `electricity`],
              correctIndex: 0,
              explanation: `Love! Technology changes. But love is timeless. Kids thousands of years ago felt love too.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `What's the SAME between you and a kid from 1,000 years ago?`,
              options: [`Phones`, `Love, play, family, curiosity. The things that make us human.`, `Everything`, `Nothing`],
              correctIndex: 1,
              explanation: `The human things. Both feel love. Both have families. Both play. Both wonder. Technology differs. Hearts are the same.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `The world is changing faster than ever. In one generation, smartphones became normal. So did social media and AI. By the time you grow up, life might look very different. Maybe self-driving cars. Maybe new diseases will be cured. You will help build that future.`,
          familyAdventure: `Ask a grandparent or older relative what was different when they were a kid. Did they have TV? Phones? How did they get to school? What games did they play? Listen to their stories. They lived in a different world.`,
          creativePrompt: {
            intro: `Draw three pictures showing how something changed. Pick HOMES, TRANSPORTATION, or FUN. Show long ago, then 100 years ago, then today.`,
            floor: `Write 3 sentences. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what might come next.`,
            frames: [
              `Long ago, people ___.`,
              `One hundred years ago, things ___.`,
              `Today, we ___.`,
              `What changed most is ___.`,
              `What stayed the same is ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You see how life has changed. Homes went from caves to smart houses. Travel went from walking to airplanes. Talking went from letters to instant texts. But the best part. Love, family, play, kindness all stay the same. You are part of this long human story. Atlas the Bear.`,
          badge: `then-now-explorer`,
          badgeName: `Then and Now Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L17] Loaded: "Long Ago vs. Today" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
