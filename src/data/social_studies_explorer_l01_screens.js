// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L01 — What Is a Community?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Civ.1.K-2 / D2.Civ.2.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
//   - no em-dashes, short sentences (5-9 words), 30-40 word audio
//   - drag-identify (4 buckets), two-tier creative w/ frames
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L01 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-01`,
      title: `What Is a Community?`,
      duration: 12,
      xpReward: 50,
      badge: `community-explorer`,
      badgeName: `Community Explorer`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. I'm Atlas the Bear. Today we start social studies. That means we learn about people. How we live. How we help. Our first big word is community. Let's go.`,
          headline: `What Is a Community?`,
          subtitle: `The people you live, learn, and play with`,
          visual: `/explorer-assets/social-studies/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `People Who Live Together`,
          paragraphs: [
            `Think about your day, {name}. Who do you see? Your family. Your teacher. Your neighbors. The store worker.`,
            `All of these people are in your community. A community is a group of people who live, work, or play together. They share places. They help each other.`,
          ],
          image: `/explorer-assets/social-studies/l01-s1-people-together.webp`,
          imageCaption: `A community is a group of people who live and play together.`,
          vocab: [
            { word: `community`, definition: `A group of people who live, work, or play together.`,
              audioPrompt: `A community is a group of people, {name}. They live, work, or play together. Your family is a community. So is your school. Communities help us belong.` },
            { word: `together`, definition: `In the same place at the same time.`,
              audioPrompt: `Together means in the same place at the same time, {name}. People in a community spend time together. They share meals. They share games. They help each other.` },
            { word: `belong`, definition: `To be part of a group.`,
              audioPrompt: `To belong means to be part of a group, {name}. You belong in your family. You belong in your school. Belonging feels good. It means people care about you.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Family Is Your First Community`,
          paragraphs: [
            `Your first community is your family. Family can look many ways. Some are big. Some are small.`,
            `Family might be a mom or a dad or both. It might be a grandparent. It might be a brother or sister. Some kids have stepparents. Some have adopted family. Every kind of family is real.`,
          ],
          image: `/explorer-assets/social-studies/l01-s2-family-community.webp`,
          imageCaption: `Family is your first community. All kinds of families are real.`,
          vocab: [
            { word: `family`, definition: `The people who love you and take care of you.`,
              audioPrompt: `Family is the people who love you, {name}. They take care of you. Family can be parents, siblings, or grandparents. Every family is different. Every family is real.` },
            { word: `take care`, definition: `To help and watch over someone.`,
              audioPrompt: `Take care means to help and watch over someone, {name}. Family takes care of you. They give you food. They keep you safe. They love you every day.` },
            { word: `different`, definition: `Not the same.`,
              audioPrompt: `Different means not the same, {name}. Every family is different. Big or small. Two parents or one. All kinds of families are real and good.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `School and Neighborhood`,
          paragraphs: [
            `You have more communities too. Your school is a community. You learn with other kids. You have a teacher.`,
            `Your neighborhood is a community. It is the people who live near you. Neighbors might wave hello. They might help each other.`,
          ],
          image: `/explorer-assets/social-studies/l01-s3-school-neighborhood.webp`,
          imageCaption: `School and neighborhood are also communities.`,
          vocab: [
            { word: `school`, definition: `A place where kids go to learn together.`,
              audioPrompt: `A school is a place where kids learn, {name}. You have teachers. You have friends. You share rooms and books. School is one of your biggest communities.` },
            { word: `neighborhood`, definition: `The area around where you live.`,
              audioPrompt: `A neighborhood is the area where you live, {name}. It has your neighbors in it. They live near you. You might say hi to them on the street.` },
            { word: `share`, definition: `To use something together with others.`,
              audioPrompt: `To share means to use something together, {name}. Schools share rooms. Neighborhoods share streets. Sharing is what makes a community work.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `City, State, and Country`,
          paragraphs: [
            `Communities get bigger and bigger. Your city or town is a big community. Lots of people live there.`,
            `Your state is even bigger. A state has many cities in it. Then your country is biggest. A country has many states. You live in many communities at the same time.`,
          ],
          image: `/explorer-assets/social-studies/l01-s4-city-country.webp`,
          imageCaption: `Communities get bigger: city, state, country, Earth.`,
          vocab: [
            { word: `city`, definition: `A big community with lots of people and buildings.`,
              audioPrompt: `A city is a big community, {name}. It has lots of people. Lots of buildings. Lots of streets. New York and Los Angeles are big cities.` },
            { word: `country`, definition: `A huge community with many cities and states.`,
              audioPrompt: `A country is a huge community, {name}. It has many cities. Many states. The United States is a country. Mexico and Japan are countries too.` },
            { word: `also`, definition: `In addition. We say "also" to add more.`,
              audioPrompt: `Also is a word we use to add more, {name}. You live in a city. You also live in a state. You also live in a country. Also helps us list things.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Communities Help Each Other`,
          paragraphs: [
            `People in a community help each other every day. The doctor helps when you are sick. The teacher helps you learn. The farmer grows your food.`,
            `Nobody does it all alone. We need each other. That is why we live in communities. We are stronger together.`,
          ],
          image: `/explorer-assets/social-studies/l01-s5-helping-each-other.webp`,
          imageCaption: `In a community, people help each other.`,
          vocab: [
            { word: `help`, definition: `To make something easier for someone.`,
              audioPrompt: `To help means to make something easier, {name}. The doctor helps when you are sick. The teacher helps you learn. Helping is what makes communities work.` },
            { word: `need`, definition: `To depend on something or someone.`,
              audioPrompt: `To need means to depend on someone, {name}. We need farmers for food. We need doctors when we are sick. We need each other to live well.` },
            { word: `stronger`, definition: `More powerful. We are stronger together.`,
              audioPrompt: `Stronger means more powerful, {name}. We are stronger together than alone. One person cannot do everything. Together, a community can do amazing things.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Belong to Many`,
          paragraphs: [
            `Here is the big idea, {name}. You belong to many communities at the same time. Family. School. Neighborhood. City. State. Country.`,
            `You might also be on a team. Or in a class. Or in a club. All of these are communities. You belong everywhere you go.`,
          ],
          image: `/explorer-assets/social-studies/l01-s6-belonging.webp`,
          imageCaption: `You belong to many communities at once.`,
          vocab: [
            { word: `many`, definition: `More than one.`,
              audioPrompt: `Many means more than one, {name}. You belong to many communities at the same time. Family, school, city, country. You belong everywhere.` },
            { word: `part of`, definition: `Belonging to a group.`,
              audioPrompt: `Part of means belonging to a group, {name}. You are part of your family. Part of your school. Part of your country. You are part of many communities.` },
            { word: `human`, definition: `A person.`,
              audioPrompt: `A human is a person, {name}. All humans live in communities. We need each other. We help each other. Being in communities is part of being human.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Let's sort some people into the right communities, {name}. Drag each one into the bucket where they belong.`,
          buckets: [
            { id: `family`,       label: `Family`,       color: `#F472B6` },
            { id: `school`,       label: `School`,       color: `#60A5FA` },
            { id: `neighborhood`, label: `Neighborhood`, color: `#34D399` },
            { id: `city`,         label: `City`,         color: `#FBBF24` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Your mom and dad`,
              matchPhrase: `Yes! Parents are part of your family. Family is your first community.`, correctMatch: `family` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Your baby sister`,
              matchPhrase: `Right! Siblings are family too. Family is the people who love you.`, correctMatch: `family` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Your teacher`,
              matchPhrase: `Yes! Your teacher is part of your school community.`, correctMatch: `school` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Kids in your class`,
              matchPhrase: `Right! Classmates are part of school. You learn together.`, correctMatch: `school` },
            { id: `l01-g5`, image: `l01-game-5.webp`, label: `The mail carrier`,
              matchPhrase: `Yes! The mail carrier works in your neighborhood. They bring mail to homes.`, correctMatch: `neighborhood` },
            { id: `l01-g6`, image: `l01-game-6.webp`, label: `The neighbor next door`,
              matchPhrase: `Right! Neighbors live near you. They are part of your neighborhood.`, correctMatch: `neighborhood` },
            { id: `l01-g7`, image: `l01-game-7.webp`, label: `The mayor`,
              matchPhrase: `Yes! The mayor leads your whole city. The city is a big community.`, correctMatch: `city` },
            { id: `l01-g8`, image: `l01-game-8.webp`, label: `The bus driver`,
              matchPhrase: `Right! Bus drivers work in your city. They help people get around.`, correctMatch: `city` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is a community?`,
              options: [`A type of food`, `A group of people who live, work, or play together`, `Just one person`, `A kind of car`],
              correctIndex: 1,
              explanation: `A community is a group of people. They live, work, or play together. Family, school, and city are all communities.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is your first community?`,
              options: [`Your school`, `Your family`, `Your country`, `The store`],
              correctIndex: 1,
              explanation: `Your family is your first community. They love you and take care of you from the day you are born.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `Which is the biggest community?`,
              options: [`Your family`, `Your school`, `Your country`, `Your neighborhood`],
              correctIndex: 2,
              explanation: `Your country is biggest. It has many cities, many states, and many people inside it.` },
            { id: `l01-q4`, format: `true-false`,
              question: `In a community, people help each other.`,
              correctAnswer: true,
              explanation: `True! Doctors, teachers, farmers, and friends all help each other. That is how communities work.` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `You belong to ___ communities at the same time.`,
              options: [`many`, `zero`, `only one`, `no`],
              correctIndex: 0,
              explanation: `Many! You are in your family AND your school AND your city AND your country, all at once.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why do we live in communities?`,
              options: [`Adults say so`, `We are stronger together`, `For no reason`, `We have to`],
              correctIndex: 1,
              explanation: `We are stronger together. No one person can do everything. In a community, we help each other and share.` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Long ago, communities were small. People knew everyone. Today, communities can be big. Some are online. But the idea is the same. People come together to help and share.`,
          familyAdventure: `Make a map of your communities together. Put a small circle in the middle and write FAMILY. Around it, draw bigger circles for SCHOOL, NEIGHBORHOOD, CITY. Write names of people in each circle. Talk about who helps you and who you help.`,
          creativePrompt: {
            intro: `Draw yourself in the middle of a page. Then draw your communities around you. Connect each one to you with a line.`,
            floor: `Write 3 sentences about your communities. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what makes each community special to you.`,
            frames: [
              `I belong to ___.`,
              `My family is ___.`,
              `I feel happy when ___.`,
              `My favorite community is ___ because ___.`,
              `I help my community by ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You learned about communities. A community is a group of people who live, work, or play together. Your first one is family. You belong to many. See you next lesson. Atlas the Bear.`,
          badge: `community-explorer`,
          badgeName: `Community Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L01] Loaded: "What Is a Community?" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
