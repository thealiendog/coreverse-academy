// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L02 — Rules and Laws: Why We Have Them
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Civ.3.K-2 / D2.Civ.5.K-2 (rules and laws)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L02 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-02`,
      title:     `Rules and Laws: Why We Have Them`,
      duration:  12,
      xpReward:  50,
      badge:     `rules-and-laws-explorer`,
      badgeName: `Rules and Laws Explorer`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Atlas here. Last lesson we talked about COMMUNITIES — groups of people living together. Today we look at something every community needs — RULES and LAWS. Without them, communities can't work well. With them, people stay safe, get treated fairly, and live together peacefully. Let's explore.`,
          headline: `Rules and Laws: Why We Have Them`,
          subtitle: `The agreements that help people live together well`,
          visual: `/explorer-assets/social-studies/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Rules Are Everywhere`,
          paragraphs: [
            `Stop and think — what RULES do you follow every day?`,
            `Wash your hands before eating. Don't run in the hallway. Wait your turn. Stop at red lights. Don't take other people's stuff. Listen when someone is speaking. Use kind words. These are all RULES. A rule is an AGREEMENT about how to behave in a place or situation. Every place you go has rules. Home has rules. School has rules. The park has rules. Even YOU have personal rules — things you've decided to do or not do. Rules help people know what to expect.`,
          ],
          image: `/explorer-assets/social-studies/l02-s1-rules-everywhere.webp`,
          imageCaption: `Rules are everywhere. Home, school, parks, streets. Each place has its own rules to keep things working well.`,
          vocab: [
            { word: `rule`,           definition: `An AGREEMENT about how to behave. Rules help everyone know what to do.`,
              audioPrompt: `A rule, {name}, is an agreement about how to behave. Rules help everyone know what to do. Wait your turn. Speak kindly. Pick up after yourself. Some rules are small — like saying please and thank you. Some are bigger — like wearing seatbelts. All of them help people get along. Every place has rules — and they exist for reasons.` },
            { word: `agreement`,      definition: `When people DECIDE TOGETHER. Rules are AGREEMENTS that everyone follows.`,
              audioPrompt: `An agreement, {name}, is when people decide together. Rules are agreements that everyone follows. When a family agrees on bedtime, that's a rule. When a school agrees that kids raise hands, that's a rule. Agreements make life smoother. Everyone knows what to expect. Everyone follows the same path together.` },
            { word: `behave`,         definition: `To ACT in a certain way. Rules tell us how to BEHAVE.`,
              audioPrompt: `To behave, {name}, is to act in a certain way. Rules tell us how to behave — in different places and situations. The way you behave at school is probably different from how you behave at the playground. The way you behave at a library is different from how you behave at a birthday party. Rules guide our behavior so we can do well wherever we are.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rules at HOME`,
          paragraphs: [
            `The smallest place with rules is your HOME.`,
            `Every family has its own rules. Maybe — bedtime at a certain hour. Help clean up. Be kind to brothers and sisters. No phones at the dinner table. Tell the truth. Take turns choosing what's for dessert. Family rules are made by grown-ups (usually parents) to help the family live well together. Different families have different rules. That's okay. Each family decides what works for them. Family rules are usually softer than other kinds — they're meant to teach AND help everyone get along.`,
          ],
          image: `/explorer-assets/social-studies/l02-s2-home-rules.webp`,
          imageCaption: `Home rules: bedtime, kindness, cleaning up, telling the truth. Made by grown-ups to help families live well together.`,
          vocab: [
            { word: `home rule`,      definition: `A rule made by your FAMILY. HOME RULES help your family live well together.`,
              audioPrompt: `A home rule, {name}, is a rule made by your family. Home rules help your family live well together. Bedtime. Helping out. Being kind. Different families have different home rules — and that's okay. What matters is that the rules help everyone in your family feel safe and loved. Home is where rules first start.` },
            { word: `family`,         definition: `The people you LIVE with and LOVE. FAMILY rules help everyone get along.`,
              audioPrompt: `Family, {name}, are the people you live with and love. Family rules help everyone get along. Grown-ups usually make these rules. They teach you how to act, how to treat others, how to take care of your space. Family rules are usually loving — they want to help you grow up well.` },
            { word: `decide`,         definition: `To CHOOSE. Each family DECIDES which rules work for them.`,
              audioPrompt: `To decide, {name}, is to choose. Each family decides which rules work for them. Some families have strict bedtimes. Others have flexible ones. Some families always eat together. Others sometimes don't. There's no one right way. Families decide based on what works for them. That's normal and healthy.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rules at SCHOOL`,
          paragraphs: [
            `Schools also have lots of rules. They help LOTS of kids learn together in the same place.`,
            `Common school rules — Raise your hand to speak. Take turns. Walk in the hallways, don't run. Keep your hands to yourself. Listen when the teacher is talking. Try your best. Be kind to classmates. Don't bring things that aren't for school. School rules exist because LOTS of kids share the same space. Without rules, it would be chaos. With them, every kid gets a chance to learn safely. The teachers and principal usually make school rules.`,
          ],
          image: `/explorer-assets/social-studies/l02-s3-school-rules.webp`,
          imageCaption: `School rules: raise hands, take turns, walk in hallways, be kind. Help many kids learn together safely.`,
          vocab: [
            { word: `school rule`,    definition: `A rule made by your SCHOOL. SCHOOL RULES help many kids learn together safely.`,
              audioPrompt: `A school rule, {name}, is a rule made by your school. School rules help many kids learn together safely. Teachers and principals usually make these rules. They help everyone share the space well. They protect kids from getting hurt. They make sure everyone has a chance to learn. School rules look strict sometimes but they exist for good reasons.` },
            { word: `share space`,    definition: `When MANY PEOPLE use one place. SCHOOLS share space — that's why they need rules.`,
              audioPrompt: `To share space, {name}, is when many people use one place. Schools share space — that's why they need rules. Hundreds of kids in one building. Many classes happening at once. Without rules, it would be too chaotic to learn. With rules, everyone gets their turn, everyone has space, everyone learns.` },
            { word: `chaos`,          definition: `Wild DISORDER. Without rules, places can become CHAOS.`,
              audioPrompt: `Chaos, {name}, is wild disorder. Without rules, places can become chaos. Imagine if everyone at school yelled at the same time, ran everywhere, took whatever they wanted. Nobody could learn. Nobody could be safe. Rules prevent chaos. They keep everyone organized and able to do what they came to do.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `LAWS: Rules for the Whole Country`,
          paragraphs: [
            `Now for something BIGGER — LAWS.`,
            `A LAW is a special kind of rule. Laws apply to LOTS of people — sometimes the whole CITY, STATE, or COUNTRY. They're made by the GOVERNMENT (groups of leaders who make decisions for everyone). Examples — Stop at red lights. Don't steal. Pay taxes when you grow up. Go to school. Drive on the right side of the road. Don't hurt other people. Laws are STRONGER than home or school rules. Breaking laws has bigger consequences — like fines or even going to jail. Laws apply to EVERYONE — including grown-ups.`,
          ],
          image: `/explorer-assets/social-studies/l02-s4-laws-government.webp`,
          imageCaption: `LAWS = rules for the whole city, state, or country. Made by government. Apply to EVERYONE, even adults.`,
          vocab: [
            { word: `law`,            definition: `A SPECIAL RULE made by the GOVERNMENT for a whole city, state, or country.`,
              audioPrompt: `A law, {name}, is a special rule made by the government for a whole city, state, or country. Laws apply to LOTS of people. They're stronger than home or school rules. Breaking laws can lead to big consequences — fines, jail, or other punishments. Laws are how big communities like countries stay organized and safe.` },
            { word: `government`,     definition: `The GROUP of leaders who make decisions for a community. GOVERNMENTS make laws.`,
              audioPrompt: `Government, {name}, is the group of leaders who make decisions for a community. Governments make laws. Different levels — your city has a government. Your state has one. Your country has one. Each level makes laws for its area. Government leaders are usually chosen by the people, depending on the country. We'll learn more about this later.` },
            { word: `consequence`,    definition: `What HAPPENS as a result of an action. Breaking laws has CONSEQUENCES.`,
              audioPrompt: `A consequence, {name}, is what happens as a result of an action. Breaking laws has consequences. Speeding might mean a fine. Hurting someone might mean court. Stealing might mean returning the items. Consequences exist to teach people and protect the community. Laws without consequences wouldn't really be laws — they'd just be suggestions.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Rules Keep Us SAFE and FAIR`,
          paragraphs: [
            `Why do we have rules and laws? Two big reasons — SAFETY and FAIRNESS.`,
            `SAFETY — rules keep people from getting hurt. Stop at red lights — so cars don't crash. No running in hallways — so kids don't fall. Don't touch hot stoves — so you don't burn. Many rules exist to keep you SAFE. FAIRNESS — rules make sure everyone is treated equally. Taking turns means everyone gets a chance. Sharing means no one is left out. Not stealing means people get to keep what they earned. Together, safety and fairness make life better for EVERYONE. Without them, only the strongest or loudest would win. That wouldn't be a community.`,
          ],
          image: `/explorer-assets/social-studies/l02-s5-safety-fairness.webp`,
          imageCaption: `Rules + laws = safety + fairness. They keep us safe from harm AND make sure everyone is treated equally.`,
          vocab: [
            { word: `safety`,         definition: `Being SAFE from harm. Many rules protect SAFETY.`,
              audioPrompt: `Safety, {name}, is being safe from harm. Many rules protect safety. Stop signs. Crosswalks. Don't run with scissors. Wear seatbelts. These rules exist because someone could get hurt without them. Communities care about keeping everyone safe — especially kids. Safety rules might feel boring sometimes, but they save lives.` },
            { word: `fairness`,       definition: `Being TREATED EQUALLY. Rules help make sure everyone is treated FAIRLY.`,
              audioPrompt: `Fairness, {name}, is being treated equally. Rules help make sure everyone is treated fairly. Taking turns means no one gets all the goodies. Sharing means everyone gets some. Not stealing means people keep what they earned. Without fairness rules, the strongest or loudest people would just take what they wanted. That's not a community — that's chaos.` },
            { word: `equally`,        definition: `The SAME WAY. Communities try to treat people EQUALLY through rules.`,
              audioPrompt: `Equally, {name}, means the same way. Communities try to treat people equally through rules. Equal turns. Equal portions. Equal protection. Equal opportunity. Equal treatment under the law. Equality is a big idea in social studies. It's something many people work hard to make real in their communities.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What if There Were NO Rules?`,
          paragraphs: [
            `Imagine a world with NO rules and NO laws at all.`,
            `Cars wouldn't stop at red lights — people would crash all the time. Anyone could take your things. Stronger people could push around weaker ones. There'd be no school day — everyone would just do whatever they wanted whenever. Nobody could trust anyone. Life would be SCARY and CHAOTIC. That's why every community — from the smallest family to the biggest country — has rules. They might feel strict sometimes. But without them, things would be much worse. Rules and laws help us LIVE TOGETHER WELL. They're proof that humans can choose to be FAIR with each other.`,
          ],
          image: `/explorer-assets/social-studies/l02-s6-without-rules.webp`,
          imageCaption: `Without rules: chaos, danger, unfairness. With rules: communities work. We choose to be fair with each other.`,
          vocab: [
            { word: `without rules`,  definition: `When there are NO rules. WITHOUT RULES, communities become chaotic and unsafe.`,
              audioPrompt: `Without rules, {name}, means when there are no rules. Without rules, communities become chaotic and unsafe. People can't trust each other. The strongest take whatever they want. Nothing is predictable. That's why every community has rules — even the smallest family. Rules aren't bad. They're what makes living together possible.` },
            { word: `live together`,  definition: `To SHARE LIFE in community. Rules help people LIVE TOGETHER well.`,
              audioPrompt: `To live together, {name}, is to share life in community. Rules help people live together well. Without rules, living together would be too hard. Conflicts would happen all the time. With rules, people know what to expect. They can trust each other. They can plan their days. They can focus on the good things instead of always worrying.` },
            { word: `choose`,         definition: `To DECIDE. Communities CHOOSE to follow rules so everyone can thrive.`,
              audioPrompt: `To choose, {name}, is to decide. Communities choose to follow rules so everyone can thrive. Rules aren't usually forced on people in the cruel sense — they're agreed upon. Most people CHOOSE to follow rules because they understand the rules help everyone (themselves included). Choosing fairness is one of the most beautiful things about being human.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `Rules KEEP US SAFE — stop signs, crosswalks, no running in halls.`,
              matchPhrase: `Yes! Many rules exist to keep people safe. Stop signs prevent car crashes. Crosswalks help us cross streets safely. Running rules prevent falls. Safety is one of the main reasons we have rules.`,
              correctMatch: `fact` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `DIFFERENT PLACES have DIFFERENT RULES — home, school, parks, libraries all have their own.`,
              matchPhrase: `True! Each place has rules that fit its purpose. Library rules are about being quiet. Park rules are about being safe. Home rules are about family. School rules are about learning together. Each makes sense for that place.`,
              correctMatch: `fact` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Rules are made for absolutely NO REASON — just to be annoying.`,
              matchPhrase: `Not at all! Rules always have reasons. They keep people safe. They make sure everyone is treated fairly. They help communities work well. The reason might not always be obvious — but every real rule exists for a purpose.`,
              correctMatch: `myth` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `Only KIDS have to follow rules — adults can skip them all.`,
              matchPhrase: `Definitely not! Adults follow many rules and laws too. They drive within speed limits. They pay taxes. They wait their turn in line. They follow workplace rules. Laws especially apply to everyone — including grown-ups.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is a RULE?`,
              options: [`A type of food`, `An AGREEMENT about how to behave that everyone follows`, `Only what kids do`, `A type of building`],
              correctIndex: 1,
              explanation: `A rule is an agreement about how to behave. It helps everyone know what to do. Home rules, school rules, park rules — all kinds of rules guide our behavior.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `Who usually makes HOME RULES?`,
              options: [`Strangers`, `Your FAMILY — usually parents or guardians`, `Police`, `Random kids`],
              correctIndex: 1,
              explanation: `Family! Home rules are made by your family — usually parents or guardians. Different families have different rules. Each family decides what works for them.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What is a LAW?`,
              options: [`A made-up thing`, `A SPECIAL RULE made by GOVERNMENT for a whole city, state, or country`, `A small home rule`, `Only for kids`],
              correctIndex: 1,
              explanation: `A law is a special rule made by the government for a whole city, state, or country. Laws apply to lots of people — including adults. Breaking laws has bigger consequences than breaking small rules.` },
            { id: `l02-q4`, format: `true-false`,
              question: `Rules and laws keep people SAFE AND FAIR — two of the main reasons we have them.`,
              correctAnswer: true,
              explanation: `True! Safety (preventing harm) and fairness (treating everyone equally) are the two biggest reasons rules and laws exist. Without them, communities would be chaotic and unfair.` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `Without rules, communities would be ___ — confusing and unsafe.`,
              options: [`chaotic`, `colorful`, `beautiful`, `quiet`],
              correctIndex: 0,
              explanation: `Chaotic! Without rules, everything would be wild and disorganized. People wouldn't know what to expect. The strongest would take what they wanted. Rules prevent chaos and let communities work.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `Do ADULTS have to follow rules and laws too?`,
              options: [`No, only kids do`, `YES — adults follow rules and laws every day, just like kids`, `Only on weekends`, `Sometimes`],
              correctIndex: 1,
              explanation: `Yes! Adults follow many rules and laws — driving rules, workplace rules, paying taxes, waiting in line. Rules apply to everyone in a community, no matter their age.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Different countries have DIFFERENT laws — because different communities have decided different things matter most. In some countries, people drive on the LEFT side of the road. In others, the right. Some countries have laws that protect rainforests. Others have laws about what businesses can sell. Same idea — making fair rules for a big community — but the specific laws change. As you grow up, you might travel to other countries and notice these differences. That's normal. People are figuring out the best way to live together everywhere.`,
          familyAdventure: `Make a FAMILY RULES list together. As a family, write down 5-10 rules everyone in your house agrees with. Pick rules that help everyone get along — like "speak kindly," "share toys," "clean up after yourself." Hang the list somewhere visible. Talk about WHY each rule matters. Notice — even small home rules are about safety, fairness, and living well together.`,
          creativePrompt: `Imagine you could make ONE rule for the WHOLE WORLD. Just one rule everyone would follow. What would it be? Draw a picture of people following your rule. Write your rule at the bottom. Then write WHY this rule matters. (Examples: "Everyone is kind to animals." "Nobody is hungry." "Everyone gets to learn.") Big rules start as small ideas.`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Well done, {name}. You now understand RULES and LAWS. RULES are agreements about how to behave — at home, school, parks, and more. LAWS are bigger rules made by GOVERNMENT for whole cities, states, or countries. Both keep us SAFE and treat people FAIRLY. Without them, communities would be chaotic. With them, we can live together well. You're learning how the world works. — Atlas 🐻`,
          badge: `rules-and-laws-explorer`,
          badgeName: `Rules and Laws Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L02] Loaded: "Rules and Laws" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
