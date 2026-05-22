// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L02 — Rules and Laws
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Civ.3.K-2 / D2.Civ.5.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L02 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-02`,
      title: `Rules and Laws`,
      duration: 12,
      xpReward: 50,
      badge: `rules-and-laws-explorer`,
      badgeName: `Rules and Laws Explorer`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hi again, {name}. Atlas here. Last time we learned about communities. Today we learn about rules. Every community has rules. They help us stay safe and be fair. Let's go.`,
          headline: `Rules and Laws`,
          subtitle: `The agreements that help us live well together`,
          visual: `/explorer-assets/social-studies/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Rules Are Everywhere`,
          paragraphs: [
            `Think about your day. What rules do you follow? Wash your hands. Say please. Wait your turn. Stop at red lights.`,
            `These are all rules. A rule is an agreement about how to act. Every place has rules. Home, school, the park. Rules help us know what to do.`,
          ],
          image: `/explorer-assets/social-studies/l02-s1-rules-everywhere.webp`,
          imageCaption: `Rules are everywhere. Each place has its own rules.`,
          vocab: [
            { word: `rule`, definition: `An agreement about how to act.`,
              audioPrompt: `A rule is an agreement about how to act, {name}. Wait your turn. Speak kindly. Wash your hands. Rules help us know what to do. Every place has rules.` },
            { word: `agree`, definition: `To say yes to the same idea.`,
              audioPrompt: `To agree means to say yes to the same idea, {name}. Rules are things we all agree on. Like agreeing to share. Or to take turns. Agreeing helps everyone get along.` },
            { word: `act`, definition: `How you behave or what you do.`,
              audioPrompt: `To act means how you behave, {name}. Rules tell us how to act in different places. You act one way at home. Another way at school. Rules guide us.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rules at Home`,
          paragraphs: [
            `The smallest place with rules is your home. Every family has its own rules. Maybe a bedtime. Maybe a chore. Maybe no phones at dinner.`,
            `Family rules are usually made by parents. They help your family live well. Different families have different rules. That is okay.`,
          ],
          image: `/explorer-assets/social-studies/l02-s2-home-rules.webp`,
          imageCaption: `Home rules help your family live well together.`,
          vocab: [
            { word: `home rule`, definition: `A rule made by your family for your house.`,
              audioPrompt: `A home rule is a rule made by your family, {name}. Bedtime. Cleaning up. Being kind. Home rules help your family live well. Every home has its own.` },
            { word: `parent`, definition: `A grown-up who takes care of a child.`,
              audioPrompt: `A parent is a grown-up who takes care of a child, {name}. Parents make the rules at home. They love you. They want you to grow up safe and happy.` },
            { word: `okay`, definition: `Just fine. Not a problem.`,
              audioPrompt: `Okay means just fine, {name}. Different families have different rules. That is okay. Each family picks what works for them. There is no one right way.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rules at School`,
          paragraphs: [
            `Schools have lots of rules too. Raise your hand. Walk in the halls. Listen to the teacher. Be kind to classmates.`,
            `School rules are made because lots of kids share one place. The rules keep everyone safe. They help everyone learn.`,
          ],
          image: `/explorer-assets/social-studies/l02-s3-school-rules.webp`,
          imageCaption: `School rules help lots of kids learn together.`,
          vocab: [
            { word: `school rule`, definition: `A rule made by your school.`,
              audioPrompt: `A school rule is a rule made by your school, {name}. Raise your hand. Walk in the hall. Be kind. School rules help lots of kids share one place safely.` },
            { word: `teacher`, definition: `The grown-up who helps you learn.`,
              audioPrompt: `A teacher is the grown-up who helps you learn, {name}. Teachers and the principal often make the school rules. They want every kid to be safe and learn well.` },
            { word: `safe`, definition: `Not in danger.`,
              audioPrompt: `Safe means not in danger, {name}. Rules keep you safe at school. No running means no falls. Walking calmly means no crashes. Rules protect you.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Is a Law?`,
          paragraphs: [
            `Now for a bigger kind of rule. A law is a special rule. Laws are for a whole city or state or country.`,
            `Laws are made by the government. Some laws say stop at red lights. Some say do not take other people's things. Laws are for everyone. Even grown-ups.`,
          ],
          image: `/explorer-assets/social-studies/l02-s4-laws-government.webp`,
          imageCaption: `A law is a big rule for a whole city, state, or country.`,
          vocab: [
            { word: `law`, definition: `A special rule made for a whole city, state, or country.`,
              audioPrompt: `A law is a special rule, {name}. Laws are for a whole city or state or country. Stop at red lights is a law. Do not steal is a law. Laws are for everyone.` },
            { word: `government`, definition: `The group of leaders for a community.`,
              audioPrompt: `The government is the group of leaders, {name}. They make the laws. Every city has a government. Every state has one. Every country has one too.` },
            { word: `everyone`, definition: `All people. Every single person.`,
              audioPrompt: `Everyone means all people, {name}. Laws are for everyone. Kids and grown-ups. Rich and poor. Laws treat all people the same. That is fair.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Rules Keep Us Safe and Fair`,
          paragraphs: [
            `Why do we have rules and laws? Two big reasons. Safety and fairness.`,
            `Safety means no one gets hurt. Stop signs keep cars from crashing. Fairness means everyone gets a turn. Sharing means no one is left out. Rules help with both.`,
          ],
          image: `/explorer-assets/social-studies/l02-s5-safety-fairness.webp`,
          imageCaption: `Rules and laws keep us safe and fair.`,
          vocab: [
            { word: `safety`, definition: `Being safe from harm.`,
              audioPrompt: `Safety means being safe from harm, {name}. Many rules keep us safe. Stop signs. Crosswalks. Seatbelts. Without these rules, more people would get hurt.` },
            { word: `fair`, definition: `Treating everyone the same way.`,
              audioPrompt: `Fair means treating everyone the same, {name}. Taking turns is fair. Sharing is fair. Letting one kid have everything is not fair. Rules help things stay fair.` },
            { word: `so`, definition: `For this reason. We use "so" to show why.`,
              audioPrompt: `So is a word that shows the reason, {name}. We have stop signs so cars do not crash. We share so everyone gets a turn. So helps us link two ideas.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What If There Were No Rules?`,
          paragraphs: [
            `Imagine a world with no rules at all. Cars would crash. People would take your things. No one could trust anyone.`,
            `That is why every community has rules. They can feel strict sometimes. But they help us live together well. We pick rules so we can be safe.`,
          ],
          image: `/explorer-assets/social-studies/l02-s6-without-rules.webp`,
          imageCaption: `Without rules, life would be unsafe. With rules, communities work.`,
          vocab: [
            { word: `imagine`, definition: `To picture something in your mind.`,
              audioPrompt: `To imagine means to picture in your mind, {name}. Imagine a world with no rules. Cars crashing. People stealing. It would be scary. Rules keep us safe.` },
            { word: `trust`, definition: `To feel safe with someone.`,
              audioPrompt: `Trust means to feel safe with someone, {name}. Rules help us trust each other. We trust drivers to stop at red lights. We trust kids to take turns.` },
            { word: `pick`, definition: `To choose.`,
              audioPrompt: `To pick means to choose, {name}. Communities pick their rules together. We pick rules so everyone can be safe. Picking rules is part of being a community.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each rule into the right place, {name}. Is it a home rule, a school rule, or a law?`,
          buckets: [
            { id: `home`,   label: `Home Rule`,   color: `#F472B6` },
            { id: `school`, label: `School Rule`, color: `#60A5FA` },
            { id: `law`,    label: `Law`,         color: `#FBBF24` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `Bedtime at 8pm`,
              matchPhrase: `Yes! Bedtime is a home rule. Your family picks the time.`, correctMatch: `home` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Help wash the dishes`,
              matchPhrase: `Right! Chores are home rules. They help your family work together.`, correctMatch: `home` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `Brush your teeth before bed`,
              matchPhrase: `Yes! That is a home rule. Parents pick this to keep teeth healthy.`, correctMatch: `home` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `Raise your hand to talk`,
              matchPhrase: `Right! That is a school rule. It helps the class take turns.`, correctMatch: `school` },
            { id: `l02-g5`, image: `l02-game-5.webp`, label: `Walk in the hallway`,
              matchPhrase: `Yes! A school rule. It keeps kids from crashing into each other.`, correctMatch: `school` },
            { id: `l02-g6`, image: `l02-game-6.webp`, label: `Listen when the teacher talks`,
              matchPhrase: `Right! A school rule. It helps everyone learn.`, correctMatch: `school` },
            { id: `l02-g7`, image: `l02-game-7.webp`, label: `Stop at red lights`,
              matchPhrase: `Yes! That is a law. It is for every driver in the country.`, correctMatch: `law` },
            { id: `l02-g8`, image: `l02-game-8.webp`, label: `Wear a seatbelt in the car`,
              matchPhrase: `Right! That is a law. It keeps everyone safe on the road.`, correctMatch: `law` },
            { id: `l02-g9`, image: `l02-game-9.webp`, label: `Do not take other people's things`,
              matchPhrase: `Yes! That is a law. Stealing is against the law everywhere.`, correctMatch: `law` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is a rule?`,
              options: [`A type of food`, `An agreement about how to act`, `Just for kids`, `A car part`],
              correctIndex: 1,
              explanation: `A rule is an agreement about how to act. Home, school, and parks all have rules.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `Who usually makes home rules?`,
              options: [`Police`, `Your family or parents`, `Random people`, `The mayor`],
              correctIndex: 1,
              explanation: `Your family makes home rules. Usually the parents pick them.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What is a law?`,
              options: [`A small home rule`, `A special rule for a whole city, state, or country`, `Only for kids`, `A type of song`],
              correctIndex: 1,
              explanation: `A law is a special rule. Laws are made by the government for a whole city, state, or country.` },
            { id: `l02-q4`, format: `true-false`,
              question: `Rules help keep people safe and fair.`,
              correctAnswer: true,
              explanation: `True! Safety and fairness are the two big reasons we have rules.` },
            { id: `l02-q5`, format: `fill-blank`,
              question: `Without rules, communities would be ___.`,
              options: [`unsafe`, `quiet`, `happy`, `easy`],
              correctIndex: 0,
              explanation: `Unsafe. Without rules, cars would crash and people could not trust each other.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `Do grown-ups have to follow laws too?`,
              options: [`No, only kids do`, `Yes, laws are for everyone`, `Only on weekends`, `Sometimes`],
              correctIndex: 1,
              explanation: `Yes! Laws are for every person. Adults follow them every day.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Different countries have different laws. In some places, cars drive on the left. In others, they drive on the right. Each country picks the rules that work for its people.`,
          familyAdventure: `Make a family rules list. As a family, write down 5 rules everyone agrees with. Hang the list where everyone can see it. Talk about why each rule matters.`,
          creativePrompt: {
            intro: `Imagine you could make one rule for the whole world. What would it be? Draw a picture of people following your rule.`,
            floor: `Write 3 sentences about your rule. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why your rule would help people.`,
            frames: [
              `My rule is ___.`,
              `This rule would help ___.`,
              `People would feel ___ because of this rule.`,
              `My rule is good because ___.`,
              `Without my rule, ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Well done, {name}! You learned about rules and laws. Rules help us at home, school, and parks. Laws are bigger rules for cities, states, and countries. Both keep us safe and fair. See you next time. Atlas the Bear.`,
          badge: `rules-and-laws-explorer`,
          badgeName: `Rules and Laws Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L02] Loaded: "Rules and Laws" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
