// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L15 — Malala Yousafzai and Modern Rights Heroes
// Age band : explorers (6–8)   Guide: lyra
// Slots between L14 (Mandela) and L16 (Countries)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L15 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-15`,
      title:     `Malala Yousafzai and Modern Rights Heroes`,
      duration:  12,
      xpReward:  50,
      badge:     `modern-hero-explorer`,
      badgeName: `Modern Hero Explorer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hello {name}! Lyra here — so excited for this lesson. We've studied ancient empires, revolutions, wars, and rights movements. All those stories end in the PAST. Today's story is DIFFERENT. Today we meet people who are changing the world RIGHT NOW — including one extraordinary young woman named MALALA YOUSAFZAI. She was just a girl who loved school. When powerful people tried to take education away, she refused to be silent. And the world listened. Let's go.`,
          headline: `Malala Yousafzai and Modern Rights Heroes`,
          subtitle: `One brave voice can light up the whole world`,
          visual: `/explorer-assets/history/l15-s1-malala-early-life.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Girl Who Loved SCHOOL`,
          paragraphs: [
            `MALALA YOUSAFZAI grew up in the beautiful SWAT VALLEY in Pakistan. From the very beginning, she loved school more than almost anything. Her father ran a school and taught her that education was the greatest gift in the world.`,
            `But when Malala was about ten years old, a group called the TALIBAN took control of her region. They had strict, cruel rules — and one of the cruelest was this: GIRLS WERE NOT ALLOWED TO GO TO SCHOOL. Malala refused to accept it. She believed every child — every girl — deserved to learn. Her name means "grief-stricken" in Pashto. But she would turn that name into a symbol of COURAGE.`,
          ],
          image: `/explorer-assets/history/l15-s1-malala-early-life.webp`,
          imageCaption: `Malala Yousafzai grew up in the Swat Valley, Pakistan. She loved school. The Taliban banned girls from going.`,
          vocab: [
            { word: `Malala Yousafzai`, definition: `A BRAVE PAKISTANI GIRL who fought for girls' right to education. MALALA became the world's most famous education rights activist.`,
              audioPrompt: `Malala Yousafzai, {name}, was a brave Pakistani girl who fought for girls' right to education. Malala became the world's most famous education rights activist. She grew up in the Swat Valley, Pakistan, loving school above everything. When the Taliban banned girls from going, she refused to stay silent. Her story changed the world.` },
            { word: `Taliban`,          definition: `A STRICT MILITANT GROUP that took control of parts of Pakistan and Afghanistan. The TALIBAN banned girls from school.`,
              audioPrompt: `The Taliban, {name}, is a strict militant group that took control of parts of Pakistan and Afghanistan. The Taliban banned girls from school. They believed girls should not be educated. Malala and millions of other girls were denied the right to learn. Malala refused to accept this silently. She spoke up.` },
            { word: `education`,        definition: `LEARNING — going to school, reading, studying. EDUCATION is a human right that many people had to fight for.`,
              audioPrompt: `Education, {name}, means learning — going to school, reading, studying. Education is a human right that many people had to fight for. You have access to education right now. For hundreds of millions of children around the world, education is denied or limited. Malala dedicated her life to changing that.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Writing in SECRET`,
          paragraphs: [
            `When Malala was just ELEVEN YEARS OLD, she began writing a secret diary for the BBC — a famous news organisation. She used the pen name "GUL MAKAI" to stay safe. In her diary, she described what life was like under Taliban rule: the fear, the silence, the schools going dark.`,
            `People all over the world read her words and were shocked. Here was a young girl, risking everything, telling the TRUTH so others would know. Her identity was eventually revealed. Instead of stopping, Malala spoke even LOUDER. She gave interviews, she gave speeches, and she kept saying the same thing: EVERY CHILD DESERVES AN EDUCATION. Gul Makai means "cornflower" — a small but resilient flower that keeps blooming even in tough conditions. Just like Malala.`,
          ],
          image: `/explorer-assets/history/l15-s2-secret-blog.webp`,
          imageCaption: `Malala wrote a secret BBC diary aged 11 as "Gul Makai." Her words reached the world. Then she spoke under her own name.`,
          vocab: [
            { word: `BBC diary`,        definition: `The SECRET BLOG Malala wrote aged 11 for the BBC. The BBC DIARY reached the world and showed the reality of Taliban rule.`,
              audioPrompt: `The BBC diary, {name}, was the secret blog Malala wrote aged eleven for the British Broadcasting Corporation. The BBC diary reached the world and showed the reality of Taliban rule. She used a pen name to stay safe. People everywhere read her words. They were shocked. A brave little girl was telling the truth while everyone else was silent.` },
            { word: `Gul Makai`,        definition: `Malala's SECRET PEN NAME meaning "cornflower." GUL MAKAI kept her safe while her diary changed minds around the world.`,
              audioPrompt: `Gul Makai, {name}, was Malala's secret pen name meaning cornflower. Gul Makai kept her safe while her diary changed minds around the world. Cornflowers are small but stubborn — they keep blooming in difficult conditions. A perfect name for a girl who refused to stop speaking. Later, Malala spoke openly under her real name.` },
            { word: `speak up`,         definition: `To USE YOUR VOICE when it feels safer to stay quiet. SPEAKING UP is one of the bravest things anyone can do.`,
              audioPrompt: `Speak up, {name}, means to use your voice when it feels safer to stay quiet. Speaking up is one of the bravest things anyone can do. Malala knew there was danger. She spoke anyway. She wrote anyway. She gave interviews anyway. Every time she could have chosen silence, she chose words instead. That courage changed history.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Courage After the DARKEST DAY`,
          paragraphs: [
            `On October 9th, 2012, something terrible happened. Malala was FIFTEEN YEARS OLD and riding the school bus home when armed Taliban members stopped the bus and shot her. She was critically injured.`,
            `The world held its breath. But Malala SURVIVED. She received treatment in Pakistan, then in the United Kingdom, and slowly — remarkably — she recovered. And when she woke up, her first thought was not revenge. It was this: I WILL KEEP SPEAKING. She said: "They thought that bullets would silence us. But they failed. Weakness, fear, and hopelessness died. Strength, power, and courage was born." A 15-year-old showed the world what REAL courage looks like.`,
          ],
          image: `/explorer-assets/history/l15-s3-survived-attack.webp`,
          imageCaption: `Oct 9, 2012: Malala (age 15) was shot by the Taliban. She survived. She kept speaking. She became stronger.`,
          vocab: [
            { word: `survived`,         definition: `To LIVE THROUGH something terrible and KEEP GOING. Malala SURVIVED and became even stronger.`,
              audioPrompt: `Survived, {name}, means to live through something terrible and keep going. Malala survived and became even stronger. Being shot was supposed to silence her forever. Instead, it made her voice reach further than ever. Thousands of letters arrived from children worldwide. The attack did not work. Courage won.` },
            { word: `kept speaking`,    definition: `To CONTINUE using your voice EVEN after being hurt. Malala KEPT SPEAKING even after the darkest day.`,
              audioPrompt: `Kept speaking, {name}, means to continue using your voice even after being hurt. Malala kept speaking even after the darkest day. She could have hidden. She could have been silent. She chose not to. She said: they thought bullets would silence us. But they failed. That's extraordinary courage. Words are more powerful than weapons.` },
            { word: `fifteen`,          definition: `Malala's AGE when she was shot and survived. FIFTEEN — just a teenager — who refused to stop fighting for education.`,
              audioPrompt: `Fifteen, {name}, was Malala's age when she was shot and survived. Fifteen — just a teenager — who refused to stop fighting for education. Fifteen is also the age many of you will be in a few years. That's not very old. And yet Malala's courage at fifteen changed the world. Age is never a reason to wait before doing good.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The YOUNGEST Nobel Laureate`,
          paragraphs: [
            `In 2014, something extraordinary happened: Malala Yousafzai was awarded the NOBEL PEACE PRIZE. She was just SEVENTEEN YEARS OLD — the youngest person in history to ever receive this honour.`,
            `The Nobel Peace Prize is one of the highest awards in the world. It is given to people who do great work to create peace, protect rights, and help humanity. Malala shared the prize with KAILASH SATYARTHI from India, who fought to end child labour. At the ceremony, Malala gave a powerful speech: "ONE CHILD, ONE TEACHER, ONE BOOK, ONE PEN CAN CHANGE THE WORLD." She used her prize money to build schools and fund education through the MALALA FUND, which she still leads today.`,
          ],
          image: `/explorer-assets/history/l15-s4-nobel-prize.webp`,
          imageCaption: `Nobel Peace Prize, 2014. Malala (age 17) — youngest ever recipient. "One child, one teacher, one book, one pen can change the world."`,
          vocab: [
            { word: `Nobel Peace Prize`, definition: `The WORLD'S highest honour for peace and human rights. Malala won the NOBEL PEACE PRIZE at just 17 years old.`,
              audioPrompt: `The Nobel Peace Prize, {name}, is the world's highest honour for peace and human rights. Malala won the Nobel Peace Prize at just seventeen years old. Nobody younger has ever won it. It's given by Norway every year to someone who has done the most for peace. Past winners include Martin Luther King Jr., Nelson Mandela, and now Malala. Extraordinary company.` },
            { word: `Malala Fund`,       definition: `Malala's ORGANISATION fighting for girls' education worldwide. The MALALA FUND has helped millions of girls go to school.`,
              audioPrompt: `The Malala Fund, {name}, is Malala's organisation fighting for girls' education worldwide. The Malala Fund has helped millions of girls go to school. Malala used her Nobel Prize money to start it. Today the fund works in countries all over the world, making sure girls can access education. She's still running it as a young adult today.` },
            { word: `one pen`,          definition: `From Malala's Nobel speech: "One child, one teacher, ONE BOOK, ONE PEN can change the world." ONE PEN — words have enormous power.`,
              audioPrompt: `One pen, {name}, comes from Malala's famous Nobel speech: "One child, one teacher, one book, one pen can change the world." One pen — words have enormous power. A single pen can write a diary read by millions. It can write a law. It can write a speech that changes history. Malala proved it. Words are weapons for good.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Young HEROES Changing the World Today`,
          paragraphs: [
            `Malala is not alone. Around the world, young people are standing up for what they believe is right — and making a REAL difference.`,
            `GRETA THUNBERG from Sweden started school strikes for climate change at age FIFTEEN. Her movement spread to millions of young people in over 160 countries. AUTUMN PELTIER from the Anishinaabe Nation in Canada became a water protector at age EIGHT, fighting to keep rivers and lakes clean. AMANDA GORMAN became the youngest inaugural poet in US history at age TWENTY-TWO, using her words to inspire unity and hope. KAILASH SATYARTHI spent decades rescuing children from forced labour and helping them return to school — sharing Malala's Nobel Prize in 2014. Every one of them started by caring about something — and then DOING something about it.`,
          ],
          image: `/explorer-assets/history/l15-s5-modern-heroes.webp`,
          imageCaption: `Greta Thunberg (climate), Autumn Peltier (water), Amanda Gorman (words), Kailash Satyarthi (child labour). Young heroes everywhere.`,
          vocab: [
            { word: `Greta Thunberg`,   definition: `A SWEDISH CLIMATE ACTIVIST who started school strikes aged 15. GRETA THUNBERG inspired millions worldwide.`,
              audioPrompt: `Greta Thunberg, {name}, is a Swedish climate activist who started school strikes aged fifteen. Greta Thunberg inspired millions worldwide. She sat outside the Swedish Parliament alone with a sign. Then others joined. Then millions. Then world leaders noticed. One teenager with a sign. A global climate movement. Extraordinary.` },
            { word: `Autumn Peltier`,   definition: `An ANISHINAABE WATER ACTIVIST who became a protector aged 8. AUTUMN PELTIER fights for clean water as a human right.`,
              audioPrompt: `Autumn Peltier, {name}, is an Anishinaabe water activist who became a protector aged eight. Autumn Peltier fights for clean water as a human right. She speaks at the United Nations. She advocates for Indigenous communities where water is not clean. Eight years old. United Nations. The world listened.` },
            { word: `changemakers`,     definition: `People who take ACTION to create positive change. CHANGEMAKERS like Malala and Greta show that anyone can make a difference.`,
              audioPrompt: `Changemakers, {name}, are people who take action to create positive change. Changemakers like Malala and Greta show that anyone can make a difference. They didn't wait. They didn't ask permission to care. They just started. Some started as children. The world is different because of them. You could be one too.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `YOUR Voice Matters`,
          paragraphs: [
            `Malala, Greta, Autumn, Amanda — they all started as ordinary people who cared deeply about something unfair. They didn't wait for someone else to fix it. They used the tools they had: words, signs, speeches, stories.`,
            `{name} — now it's YOUR TURN. You don't have to win a Nobel Prize to make a difference. You can stand up for a friend being left out. You can speak kindly when others don't. You can learn about issues that matter and carry that knowledge forward. The rights people enjoy today exist because brave people in every era REFUSED TO STAY SILENT. The torch gets passed from generation to generation. Malala received it from Rosa Parks and Nelson Mandela. Now it's in YOUR HANDS. What will you do with it?`,
          ],
          image: `/explorer-assets/history/l15-s6-your-turn.webp`,
          imageCaption: `Every generation receives the torch. Malala passed it forward. Now it's yours. What will you do?`,
          vocab: [
            { word: `your turn`,        definition: `NOW IT'S YOUR MOMENT to stand up and make a difference. YOUR TURN — the next chapter belongs to you.`,
              audioPrompt: `Your turn, {name}, means now it's your moment to stand up and make a difference. Your turn — the next chapter belongs to you. Every era needs new heroes. Malala's era produced extraordinary ones. Now history moves forward, and a new generation — your generation — will face new challenges and choose how to respond. What will you do with your voice?` },
            { word: `torch`,            definition: `A SYMBOL of passing courage and action from one generation to the next. The TORCH of rights must be kept burning.`,
              audioPrompt: `The torch, {name}, is a symbol of passing courage and action from one generation to the next. The torch of rights must be kept burning. Each generation receives it from the last. Rosa Parks and Dr. King carried it. Nelson Mandela carried it. Malala carried it. Now it comes to you and your generation. Will you keep it bright?` },
            { word: `one brave thing`,  definition: `A SINGLE ACT OF COURAGE that sparks something bigger. One brave thing — like Malala writing one diary — can CHANGE EVERYTHING.`,
              audioPrompt: `One brave thing, {name}, is a single act of courage that sparks something bigger. One brave thing — like Malala writing one diary — can change everything. Rosa Parks did one brave thing: she didn't give up her seat. Ruby Bridges did one brave thing: she walked to school. You can do one brave thing too. Include the kid left out. Speak up when it's easier to be quiet. One brave thing.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `WORDS AND STORIES — like Malala's diary, speeches, and books — can be powerful tools to change the world and win rights for people.`,
              matchPhrase: `Absolutely true! Malala's BBC diary reached millions. Her Nobel speech changed minds. Words are weapons for good. Rosa Parks, MLK, Mandela — all used words to change history. A pen is powerful.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `YOUNG PEOPLE — even children and teenagers — can be powerful changemakers who shift the entire world's direction.`,
              matchPhrase: `Completely true! Malala (age 11 writing, age 15 shot, age 17 Nobel Prize), Greta Thunberg (age 15 striking), Autumn Peltier (age 8 advocating), Ruby Bridges (age 6 integrating). Age is never a barrier to courage.`,
              correctMatch: `fact` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `One single person can NEVER make a difference — it takes millions of people all acting at the same time to change anything.`,
              matchPhrase: `Not at all! Malala started alone. Greta started alone with a sign. Rosa Parks refused alone on a bus. One person doing one brave thing starts movements. ONE person sparked the Montgomery boycott. ONE girl's diary changed minds worldwide.`,
              correctMatch: `myth` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `All rights work is FINISHED — every right is already secured for everyone everywhere and no one needs to fight for fairness anymore.`,
              matchPhrase: `Definitely not! Malala's Malala Fund still works today. Millions of girls still can't go to school. Water rights, climate rights, child labour — all still urgent. Rights must be defended every generation. The work continues.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What pen name did Malala use when writing her secret BBC diary?`,
              options: [`Zia Bibi`, `Gul Makai`, `Noor Jahan`, `Pari Khan`],
              correctIndex: 1,
              explanation: `Gul Makai — meaning "cornflower." Malala used this pen name at age 11 to stay safe while writing about life under Taliban rule. A small, resilient flower. A perfect name for her courage.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `How old was Malala when she won the Nobel Peace Prize?`,
              options: [`Twelve`, `Fifteen`, `Seventeen`, `Twenty-one`],
              correctIndex: 2,
              explanation: `Seventeen! Malala was 17 when she received the Nobel Peace Prize in 2014 — the youngest person in history to ever receive it. Nobody younger has won since.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What did Greta Thunberg do to raise awareness about climate change?`,
              options: [`Wrote a book`, `Built a solar farm`, `Led school strikes`, `Sailed around the world`],
              correctIndex: 2,
              explanation: `School strikes! Greta started striking from school every Friday outside the Swedish Parliament. Her movement spread to millions of young people in over 160 countries. One teenager with a sign.` },
            { id: `l15-q4`, format: `true-false`,
              question: `Malala used her Nobel Prize money to start the Malala Fund, which still works today to help girls access education around the world.`,
              correctAnswer: true,
              explanation: `True! Malala used her prize money to build schools and fund education through the Malala Fund. She still leads it as a young adult today.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Malala's famous Nobel speech says: "One child, one teacher, one book, one ___ can change the world."`,
              options: [`pen`, `law`, `vote`, `army`],
              correctIndex: 0,
              explanation: `One pen! Words are weapons for good. Malala's diary changed minds. Her speech changed laws. One pen can reach the whole world.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What does today's lesson teach us about changing the world?`,
              options: [
                `Only famous adults with prizes can make a difference`,
                `Ordinary young people using their voice can spark real change`,
                `You must wait until you're old enough to do anything`,
                `Only governments can fix unfair things`,
              ],
              correctIndex: 1,
              explanation: `Ordinary young people using their voice can spark real change! Malala started at 11. Greta at 15. Autumn at 8. Ruby Bridges at 6. Every one of them was ordinary — and they changed the world.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `{name} — here's something extraordinary to sit with. RIGHT NOW, there are young people your age who are changing things around them. Greta Thunberg didn't wait to grow up. Autumn Peltier started at 8. Malala wrote her first BBC entry at 11. The people in today's lesson didn't wait for someone else to fix things — they used the tools they had. YOU have those same tools. You have a voice. You have curiosity. You have words. The Malala Fund says: 130 MILLION GIRLS are still out of school worldwide. The climate is still changing. Water rights are still being fought for. Rights are never finished — they must be DEFENDED every generation. Your generation will face new challenges we can't predict yet. But the methods are the same ones Malala and Greta and Autumn and Amanda used: SPEAK. LEARN. ACT. START WHERE YOU ARE. One brave thing. That's all it takes to begin.`,
          familyAdventure: {
            title: `Find Your Cause`,
            scenario: `Together, talk about something unfair you've noticed in the world — something you wish were different. It can be big (climate, education, water) or local (a friend treated unfairly, a place that feels unsafe). Pick one thing and talk: what would it look like if it were fixed? Who is already working on it? What could YOU do, even one small thing?`,
            talkingPoint: `Malala said "one pen can change the world." What would be YOUR one brave thing? Share it out loud with each other.`,
          },
          creativePrompt: {
            title: `Your Rights Hero Poster`,
            description: `Create a POSTER about a rights hero — Malala, Greta, Autumn, Amanda, or someone you know personally who stands up for what's right. Include: their name, what they stand for, and one quote (real or imaginary) that captures their message. Make it bright, brave, and full of energy.`,
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Incredible work, {name}! You've explored the world of MODERN RIGHTS HEROES. MALALA YOUSAFZAI — who loved school, wrote a secret diary at 11, survived the darkest day at 15, and won the Nobel Peace Prize at 17. GRETA THUNBERG — who sparked a global climate movement with a single sign. AUTUMN PELTIER — who advocated for water rights at age 8. AMANDA GORMAN — who used words to inspire millions. The lesson? ORDINARY PEOPLE + COURAGE + VOICE = real change. Rights are never finished. The torch is now in your hands. Next lesson — we explore the amazing world's COUNTRIES AND CULTURES. — Lyra 🐘`,
          badge: `modern-hero-explorer`,
          badgeName: `Modern Hero Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L15;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L15] Loaded: "Malala Yousafzai and Modern Rights Heroes" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
