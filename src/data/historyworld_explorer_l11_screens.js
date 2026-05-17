// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L11 — World War I: When the World Learned War Is Terrible
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L11 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-11`,
      title:     `World War I: When the World Learned War Is Terrible`,
      duration:  12,
      xpReward:  50,
      badge:     `wwi-explorer`,
      badgeName: `WWI Explorer`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to tell you about a sad but important time in history. About 100 years ago, many of the world's countries got into a HUGE fight with each other. It was called the GREAT WAR or WORLD WAR ONE. It taught the whole world that fighting like this is terrible — and that we should try to find better ways.`,
          headline: `World War I: When the World Learned War Is Terrible`,
          subtitle: `A big war that taught the world to try harder for peace`,
          visual: `/explorer-assets/history/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When Countries Argue`,
          paragraphs: [
            `Sometimes countries don't get along.`,
            `Just like friends or family can disagree, countries can too. Most of the time, they talk it out. But about 100 years ago, many countries in Europe got SO angry that they couldn't talk it out. They started fighting. That's what we call a WAR.`,
          ],
          image: `/explorer-assets/history/l11-s1-countries-argue.webp`,
          imageCaption: `Countries can disagree, just like people. Sometimes they talk it out. Sometimes — sadly — they fight instead.`,
          vocab: [
            { word: `country`,  definition: `A big place with a government, like France or Brazil. There are 195 countries in the world.`,
              audioPrompt: `A country is a big place with its own government, language, and laws, {name}. Like France, Brazil, Egypt, Japan, or the United States. There are 195 countries in the world today. Each one has its own people, its own culture, its own history. When countries get along, the world is more peaceful. When they don't, problems can grow.` },
            { word: `disagree`, definition: `To not agree with someone. Disagreement is normal — but how we handle it matters.`,
              audioPrompt: `To disagree is to not agree with someone, {name}. People disagree all the time. Friends disagree about games. Families disagree about what to have for dinner. Countries disagree about borders or trade or how to treat each other. Disagreement is NORMAL. What matters is how we handle it. The best way is to TALK it out, listen to each other, and find a way forward together.` },
            { word: `war`,      definition: `When countries fight each other instead of talking it out.`,
              audioPrompt: `War is when countries fight each other instead of talking it out, {name}. It's the worst way to settle a disagreement. People get hurt. Countries get damaged. Families get broken apart. Throughout history, there have been many wars — and the world has slowly been learning that war is terrible. Some wars are remembered as warnings. World War One is one of those.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Great War`,
          paragraphs: [
            `This war was BIGGER than any war before it.`,
            `That's why people called it the GREAT WAR. Soldiers from MANY countries — England, France, Germany, Russia, the United States — fought each other. Cities and farms were damaged. Many families lost loved ones. It went on for FOUR LONG YEARS.`,
          ],
          image: `/explorer-assets/history/l11-s2-great-war.webp`,
          imageCaption: `The Great War. Bigger than any war before it. Countries from all over fought each other for four long years.`,
          vocab: [
            { word: `soldier`,    definition: `A person who joins their country's army and trains to fight.`,
              audioPrompt: `A soldier is a person who joins their country's army, {name}. Soldiers train hard. They learn to be brave, to follow orders, to take care of each other. In WWI, MILLIONS of soldiers fought for their countries. Many were young — barely older than teenagers. Some came home. Some did not. We remember all of them.` },
            { word: `countries`,  definition: `More than one country. In WWI, MANY countries were fighting.`,
              audioPrompt: `Countries means more than one country, {name}. WWI involved more countries than any previous war. France, England, Russia, Germany, Austria, the United States, and many more — over thirty countries took part. That's why it's called a WORLD war. The whole world was caught up in it.` },
            { word: `four years`, definition: `The amount of time WWI lasted. That's a LONG time for any war.`,
              audioPrompt: `Four years is a LONG time, {name}. WWI started in 1914 and ended in 1918. Imagine a war that lasts as long as you've been in school! Many people who were children when it started had grown up by the time it ended. Some children waited four years to see their fathers come home. Some never did.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `New Inventions in War`,
          paragraphs: [
            `WWI was different because of new INVENTIONS.`,
            `People had just invented AIRPLANES — pilots flew them in battles. They had RADIOS to send messages far away. New machines could move soldiers and supplies. New weapons could hurt many people at once. The new inventions made war much harder.`,
          ],
          image: `/explorer-assets/history/l11-s3-new-inventions.webp`,
          imageCaption: `Airplanes. Radios. New machines. WWI was the first time these inventions were used in a big war.`,
          vocab: [
            { word: `invention`, definition: `Something brand new that someone made for the first time.`,
              audioPrompt: `An invention is something brand new that someone made for the first time, {name}. WWI happened during a time of LOTS of new inventions. Airplanes had just been invented in 1903 — only eleven years before the war started. Radios were brand new. New machines, new weapons, new everything. War had changed because the world had changed.` },
            { word: `airplane`,  definition: `A flying machine. Airplanes were brand new when WWI started.`,
              audioPrompt: `An airplane is a flying machine with wings, {name}. The Wright Brothers invented the first airplane that worked in 1903. By WWI in 1914, airplanes were still really new. Pilots flew them in battles — sometimes shooting at each other with handheld guns. The first airplane pilots were brave — some flew without seatbelts! Today, airplanes are everywhere. Back then, they were brand new.` },
            { word: `radio`,     definition: `A machine that sends and receives sound through the air, without wires.`,
              audioPrompt: `A radio is a machine that sends and receives sound through the air, {name} — without any wires connecting people. Radios were invented just before WWI. They let soldiers send messages to people far away. Now they could coordinate from across whole countries. That changed war a lot. Today we still use radios — and the same technology powers your TV, your phone, your Wi-Fi.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `People at Home`,
          paragraphs: [
            `When countries are at war, EVERYONE is affected.`,
            `Kids missed their fathers who'd gone to fight. Families had less food. People worked hard to support each other. Letters between soldiers and home were precious — sometimes the only way to stay close. War is hard for everyone.`,
          ],
          image: `/explorer-assets/history/l11-s4-families.webp`,
          imageCaption: `War isn't only hard on soldiers. It's hard on families, kids, and everyone left at home. Letters became precious.`,
          vocab: [
            { word: `family`, definition: `People who love each other. WWI was very hard on families everywhere.`,
              audioPrompt: `Family is the people who love each other, {name}. WWI was very hard on families. Fathers and big brothers went off to be soldiers. Mothers had to do everything by themselves. Kids missed their dads. Some families had to leave their homes because of damage. Some lost loved ones forever. Wars don't only hurt soldiers — they hurt everyone who loves them.` },
            { word: `letter`, definition: `A message written on paper and sent in the mail. Letters from soldiers were treasured.`,
              audioPrompt: `A letter is a message written on paper and sent through the mail, {name}. During WWI, letters were precious. Soldiers wrote home to their families. Families wrote to soldiers. The letters might take WEEKS to arrive. Sometimes families saved them forever. Some of those letters still exist today, more than 100 years later. They tell us what people thought, hoped, and feared.` },
            { word: `effort`, definition: `Hard work. Everyone made big efforts to support each other during WWI.`,
              audioPrompt: `Effort is hard work, {name}. During WWI, EVERYONE made big efforts. Soldiers fought. Mothers worked in factories that had been run by men. Kids helped with food gardens. People gave up things they loved — like sugar or chocolate — so soldiers could have more. The whole country worked together. War is terrible, but the human EFFORT to take care of each other through it can be beautiful.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When the War Ended`,
          paragraphs: [
            `After four long years, the war finally ENDED in 1918.`,
            `On the 11th day of November, at the 11th hour, all the fighting stopped. People around the world CRIED with joy. They were exhausted. They wanted to go home. They HOPED, with all their hearts, that the world would never have such a war again.`,
          ],
          image: `/explorer-assets/history/l11-s5-war-ends.webp`,
          imageCaption: `November 11, 1918 — the 11th hour. The war finally ended. People cried with joy. The world hoped never to do this again.`,
          vocab: [
            { word: `ended`,       definition: `When something stops. The war ended in 1918.`,
              audioPrompt: `Ended means something stopped, {name}. The war ended in 1918. After four long, terrible years, soldiers laid down their weapons. The guns went quiet. People in cities all over the world heard the news and ran into the streets to celebrate. Strangers hugged. Church bells rang. The war had ended. It was the most joyful day of many people's lives.` },
            { word: `November 11`, definition: `The day WWI ended. Many countries now celebrate this as Veterans Day or Remembrance Day.`,
              audioPrompt: `November 11, 1918 — that's the date the war ended, {name}. The 11th hour of the 11th day of the 11th month. Now, every year on November 11, many countries remember the people who served in WWI and in other wars too. In the United States, it's called VETERANS DAY. In Canada and the United Kingdom, it's called REMEMBRANCE DAY. People stop and think for two minutes of silence. They wear red poppy flowers. They remember.` },
            { word: `hope`,        definition: `To want something good very much. The world hoped for peace after WWI.`,
              audioPrompt: `Hope is wanting something good very much, {name}. After WWI ended, people HOPED with all their hearts that the world would never have such a war again. They called it 'the war to end all wars.' Sadly, that wasn't true — there would be another world war later. But hope is still important. Even when we're scared. Even when things are hard. Hope keeps us going. Hope is what makes things change.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Hope for Peace`,
          paragraphs: [
            `After such a terrible war, people wanted to make sure it NEVER happened again.`,
            `They created groups to help countries talk instead of fight. Today, countries still meet to discuss problems peacefully — like at the UNITED NATIONS. We're STILL working to make peace better than war. WWI taught us why this work matters.`,
          ],
          image: `/explorer-assets/history/l11-s6-hope-for-peace.webp`,
          imageCaption: `From WWI, the world learned: peace matters. We must work for it. We must talk instead of fighting. The work continues.`,
          vocab: [
            { word: `peace`,          definition: `When there is no fighting, and people get along. Peace is what we all want.`,
              audioPrompt: `Peace is when there is no fighting, {name}. When friends, families, and countries treat each other kindly. Peace is what most people want. Sometimes peace is hard to keep — especially when people disagree. But it's worth working for. WWI taught the world that the cost of war is too high. Peace is precious.` },
            { word: `United Nations`, definition: `A group where countries from around the world meet to solve problems together. Created after a later world war.`,
              audioPrompt: `The United Nations — or UN — is a special group where countries from all over the world come together, {name}. They meet to talk about problems. They work to help countries get along. They were started AFTER a later world war, to try to keep the world more peaceful. Today, 193 countries are members. That's almost every country in the world.` },
            { word: `learn`,          definition: `To understand something new. The world learned from WWI that war is terrible.`,
              audioPrompt: `To learn is to understand something new, {name}. The world LEARNED a lot from WWI. We learned that big wars hurt everyone — not just soldiers. We learned that talking is better than fighting. We learned that countries can work together. Sometimes our hardest experiences teach us the most important lessons. WWI was a hard lesson — but the world has been trying to remember it ever since.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about World War I, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `World War I ended on November 11, 1918.`,
              matchPhrase: `True! WWI ended on November 11, 1918, at the 11th hour. Many countries still remember this date with Remembrance Day or Veterans Day.`,
              correctMatch: `fact` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `Airplanes and radios were new inventions used during World War I.`,
              matchPhrase: `Yes! Airplanes were brand new when WWI started. So were radios. New inventions changed how the war was fought.`,
              correctMatch: `fact` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `World War I lasted only one day.`,
              matchPhrase: `Definitely not! WWI lasted FOUR long years. That's a long, hard time. Most wars take a long time to end.`,
              correctMatch: `myth` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `Soldiers in WWI used cell phones to call home.`,
              matchPhrase: `Ha! Cell phones weren't invented for another EIGHTY years, {name}. Soldiers in WWI wrote LETTERS home. Some letters took weeks to arrive.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `How long did World War I last?`,
              options: [`One day`, `One week`, `One month`, `About four years`],
              correctIndex: 3,
              explanation: `Four long years! WWI started in 1914 and ended in 1918. Some kids who were born at the start of the war could walk and talk by the time it ended. That's a really long time for a war.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `When did World War I end?`,
              options: [`1492`, `November 11, 1918`, `2001`, `1776`],
              correctIndex: 1,
              explanation: `WWI ended on November 11, 1918 — at the 11th hour of the 11th day of the 11th month. That's why November 11 is still such an important date in many countries — they remember the people who served.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `What was a NEW invention used during World War I?`,
              options: [`Smartphones`, `Airplanes`, `Cars`, `Wheels`],
              correctIndex: 1,
              explanation: `Airplanes! They had been invented only 11 years before WWI started — by the Wright Brothers in 1903. WWI was the first big war where airplanes were used. Pilots were some of the bravest people in the war.` },
            { id: `l11-q4`, format: `true-false`,
              question: `After World War I, the world tried hard to find better ways than fighting.`,
              correctAnswer: true,
              explanation: `True! WWI was so terrible that the world wanted to make sure it never happened again. People started groups to help countries talk instead of fight. The UNITED NATIONS — where countries meet today — came from this idea.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `The United Nations is a group where countries meet to discuss problems ___.`,
              options: [`peacefully`, `secretly`, `quickly`, `loudly`],
              correctIndex: 0,
              explanation: `Peacefully! That's the whole point. Instead of fighting wars, countries can meet at the UN to talk things out, listen to each other, and find solutions together. 193 countries are members today.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `What did the world learn from World War I?`,
              options: [`That war is fun and easy`, `That war is terrible and we should try harder for peace`, `That countries should never talk to each other`, `Nothing important`],
              correctIndex: 1,
              explanation: `The world learned that war is TERRIBLE — and the cost is too high. Millions of families lost loved ones. The world hoped never to do this again. That's why people work so hard for peace today.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Today, many countries still remember WWI, {name}. November 11th is called Veterans Day in the United States and Remembrance Day in countries like Canada and the United Kingdom. Some people wear red poppy flowers on their clothes. The UNITED NATIONS — created after a later world war to keep the peace — still works today, with countries from all over the world meeting to solve problems together. The lessons from WWI are still teaching us.`,
          familyAdventure: `Find out what your country does on November 11th. Is there a Veterans Day or Remembrance Day? Are there special ceremonies? You might watch part of one on TV. Then talk together about: how do you keep peace in your own family when there are disagreements? Are there any "United Nations"-style ways your family solves problems?`,
          creativePrompt: `Draw a picture of PEACE. What does peace LOOK like to you? Maybe it's a sunny day. Maybe it's people of all different kinds holding hands. Maybe it's a dove or a flower. Add words around your picture: "kindness," "love," "understanding," "helping each other." These are the things peace is made of.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about World War I — the big war that taught the world that peace is precious. The brave soldiers, the hope when it ended, and the work that still continues today. I carry these stories with me. Thank you for journeying with me.`,
          badge: `wwi-explorer`,
          badgeName: `WWI Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L11] Loaded: "World War I: When the World Learned War Is Terrible" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
