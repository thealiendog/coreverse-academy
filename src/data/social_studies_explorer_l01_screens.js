// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L01 — What Is a Community?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Civ.1.K-2 / D2.Civ.2.K-2 (civic life and community)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L01 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-01`,
      title:     `What Is a Community?`,
      duration:  12,
      xpReward:  50,
      badge:     `community-explorer`,
      badgeName: `Community Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, I'm Atlas the Bear. I'm steady, I'm calm, and I love seeing the WHOLE big picture of how people live together. Today we begin a new journey — SOCIAL STUDIES. That's the study of PEOPLE. How we live together. How we make rules. How we share the Earth. We'll start with the most important word — COMMUNITY. Let's begin.`,
          headline: `What Is a Community?`,
          subtitle: `The groups of people we live and grow with — and how we belong to many at once`,
          visual: `/explorer-assets/social-studies/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `People Living Together`,
          paragraphs: [
            `Take a moment to think about the PEOPLE in your life. Who do you see every day? Who do you say hi to?`,
            `Your family. Your friends. Your teacher. Your neighbors. The person who works at the store. The mail carrier. The doctor. Each of these people is part of your COMMUNITY. A community is a group of people who live, work, or learn TOGETHER. People in a community share things — places, time, sometimes traditions. Humans have always lived in communities. We're built for it.`,
          ],
          image: `/explorer-assets/social-studies/l01-s1-people-together.webp`,
          imageCaption: `A community = people living, working, or learning together. Family, friends, neighbors, teachers — all community.`,
          vocab: [
            { word: `community`,      definition: `A group of PEOPLE who live, work, or learn TOGETHER. We all belong to communities.`,
              audioPrompt: `A community, {name}, is a group of people who live, work, or learn together. Your family is a community. Your school is a community. Your neighborhood is a community. Communities are where people share life. Where people help each other. Where people belong. Humans have always lived in communities. We need them.` },
            { word: `together`,       definition: `In the same place or time. People in a community spend time TOGETHER.`,
              audioPrompt: `Together, {name}, means in the same place or time. People in a community spend time together. They share meals. They go to the same school. They live on the same street. They help each other with problems. Being together is what turns a group of separate people into a real community.` },
            { word: `belong`,         definition: `To be PART of something. We BELONG to our communities.`,
              audioPrompt: `To belong, {name}, is to be part of something. We belong to our communities. You belong to your family. You belong to your school. You belong to your neighborhood. Belonging feels GOOD. It means people know you, care about you, and you have a place. Everyone needs to belong somewhere.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your FAMILY: The First Community`,
          paragraphs: [
            `The very FIRST community you ever joined was your FAMILY.`,
            `Your family might be parents, brothers and sisters, grandparents, aunts, uncles, cousins. Some families are big. Some are small. Some families look traditional. Some families are made of stepparents, foster parents, adopted family, or chosen family. ALL of these are real families. Families are the smallest community — but often the most important. They take care of you when you're young. They teach you. They love you. Every family is different. And every family matters.`,
          ],
          image: `/explorer-assets/social-studies/l01-s2-family-community.webp`,
          imageCaption: `Family = your first community. Big or small, every kind of family is real and matters.`,
          vocab: [
            { word: `family`,         definition: `The PEOPLE who love and take care of you. Family is your FIRST community.`,
              audioPrompt: `A family, {name}, is the people who love and take care of you. Your family might be parents, brothers, sisters, grandparents, aunts, uncles. Some families have stepparents or adoptive parents or chosen family. Family doesn't have to look the same. What matters is the LOVE and the CARE. Family is your first community.` },
            { word: `take care of`,   definition: `To watch over and help. Families TAKE CARE OF each other.`,
              audioPrompt: `To take care of, {name}, means to watch over and help. Families take care of each other. Adults take care of kids — feeding them, teaching them, keeping them safe. Kids take care of family in their own ways — being kind, helping with chores, loving each other. Taking care of is what families do every day.` },
            { word: `every family different`, definition: `All families look DIFFERENT. Every kind of family is REAL and MATTERS.`,
              audioPrompt: `Every family is different, {name}. All families look different. Big families. Small families. Families with two parents. Families with one. Families with grandparents. Adoptive and foster families. Chosen families. Every kind of family is real and matters. The thing that makes a family is LOVE — not what it looks like.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `SCHOOL and NEIGHBORHOOD`,
          paragraphs: [
            `Beyond family, you have OTHER communities too.`,
            `Your SCHOOL is a community. You learn alongside other kids. You have teachers, classmates, friends. You share the same rooms, the same playground, the same lunch tables. Your NEIGHBORHOOD is also a community — the people who live near you. Neighbors might wave hello. They might watch out for each other's homes. They might celebrate together. School and neighborhood are bigger than family — but still close enough that you might know names and faces. They're communities of choice and place.`,
          ],
          image: `/explorer-assets/social-studies/l01-s3-school-neighborhood.webp`,
          imageCaption: `School + neighborhood = your communities of learning and place. Bigger than family, full of new people.`,
          vocab: [
            { word: `school`,         definition: `A place where kids LEARN. School is a community of teachers and classmates.`,
              audioPrompt: `A school, {name}, is a place where kids learn. But it's also a community. You spend many hours there. You share the place with teachers, friends, helpers. You make friends. You learn together. You celebrate birthdays together. Schools are some of the most important communities in childhood. They shape who you become.` },
            { word: `neighborhood`,   definition: `The AREA around where you live. Your NEIGHBORHOOD is the people living near you.`,
              audioPrompt: `A neighborhood, {name}, is the area around where you live. People who live near you are your neighbors. You might see them walking dogs, mowing lawns, getting mail. A good neighborhood is one where people are friendly and watch out for each other. Some neighborhoods know each other well. Others not as much. Either way, they're a community.` },
            { word: `share`,          definition: `To USE TOGETHER. Communities SHARE places, time, and care.`,
              audioPrompt: `To share, {name}, means to use together. Communities share places — the same school, the same park, the same library. They share time — the same days, the same seasons, the same year. They share care — looking out for each other. Sharing is what makes a community real. Without sharing, there's just a bunch of people in the same place.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CITY, STATE, and COUNTRY`,
          paragraphs: [
            `Your communities get BIGGER and BIGGER. Beyond your neighborhood is your CITY or TOWN.`,
            `A CITY is a much bigger community — thousands or millions of people living together. Then there's your STATE — a HUGE area with many cities (like California, Texas, or New York). Then your COUNTRY — like the United States — with ALL the states together. And finally, you belong to PLANET EARTH — the human community of EVERYONE alive. Each level is bigger than the last. You might never meet most people in your city, state, or country — but you're still part of those communities. They affect your life every day.`,
          ],
          image: `/explorer-assets/social-studies/l01-s4-city-country.webp`,
          imageCaption: `Bigger communities: city → state → country → planet. You belong to all of them — even ones you can't see.`,
          vocab: [
            { word: `city`,           definition: `A BIG community with thousands or millions of people. CITIES have many buildings.`,
              audioPrompt: `A city, {name}, is a big community with thousands or millions of people. Cities have many buildings, streets, parks, schools, shops, and people. New York City. Los Angeles. Chicago. London. Tokyo. All cities. They're communities of people who live close to each other. Cities are exciting and busy — full of people from all backgrounds.` },
            { word: `country`,        definition: `A HUGE community with many cities and states. We live in our COUNTRY.`,
              audioPrompt: `A country, {name}, is a huge community with many cities and states. The United States is a country. So is Mexico, Canada, India, Japan, Brazil. Countries have their own governments, their own languages, their own traditions. Every person on Earth belongs to a country. You're part of one big national community.` },
            { word: `planet`,         definition: `EARTH — the home of EVERYONE. We're all part of the PLANET community.`,
              audioPrompt: `A planet, {name}, in this case means Earth — our home. We're all part of the planet community. Every single person on Earth — billions of people — belongs to it. We share the same air, the same oceans, the same sky. Even though we'll never meet most of them, all humans on Earth are connected. We're all part of one big planet family.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Communities HELP Each Other`,
          paragraphs: [
            `Here's something amazing — people in communities HELP EACH OTHER. We depend on each other every day.`,
            `The DOCTOR helps you when you're sick. The TEACHER helps you learn. The FARMER grows your food. The FIREFIGHTER keeps you safe. The TRASH COLLECTOR keeps the city clean. The BUS DRIVER takes you places. The STORE OWNER sells you what you need. None of us could do all these jobs alone. We DEPEND on each other. That's how communities work. We each do something — and we all benefit. We're stronger TOGETHER than ALONE.`,
          ],
          image: `/explorer-assets/social-studies/l01-s5-helping-each-other.webp`,
          imageCaption: `Communities work because people help each other. Doctors, teachers, farmers, firefighters. We depend on each other.`,
          vocab: [
            { word: `depend on`,      definition: `To NEED something or someone. We DEPEND ON others in our community.`,
              audioPrompt: `To depend on, {name}, is to need something or someone. We depend on others in our community. We depend on farmers for food. Doctors for health. Teachers for learning. Firefighters for safety. We don't make all these things ourselves. We rely on others to do what they do well. In return, we do our part too. That's how communities function.` },
            { word: `help`,           definition: `To make someone's life BETTER. Communities HELP each other every day.`,
              audioPrompt: `To help, {name}, is to make someone's life better. Communities help each other every day. When someone is hurt, doctors help. When kids need to learn, teachers help. When homes catch fire, firefighters help. Communities work because helping is part of what we do. Without help, communities fall apart. With help, they thrive.` },
            { word: `stronger together`, definition: `STRONGER TOGETHER than ALONE. That's why we live in communities.`,
              audioPrompt: `Stronger together, {name}, than alone. That's why we live in communities. No one person can do everything. No one is good at all jobs. But together — with many people doing different things well — we can build amazing things. Cities. Schools. Hospitals. Beautiful gardens. Communities show us that working together is more powerful than working alone.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You Belong to MANY Communities`,
          paragraphs: [
            `Here's the BIG idea, {name}. You don't belong to JUST ONE community. You belong to MANY at once.`,
            `Right now, you're part of your FAMILY (your home community). Your SCHOOL (if you go to one). Your NEIGHBORHOOD. Your TOWN OR CITY. Your STATE. Your COUNTRY. You might also belong to a SPORTS TEAM, a religious group, a friend circle, a club, a class. Each one is a different community. Each one is a part of who you are. We're all members of MANY communities — all the time. That's normal. That's what it means to be human. You belong everywhere — and everywhere belongs to you.`,
          ],
          image: `/explorer-assets/social-studies/l01-s6-belonging.webp`,
          imageCaption: `You belong to MANY communities at once. Family + school + neighborhood + city + country + more. All connected.`,
          vocab: [
            { word: `many at once`,   definition: `Multiple at the SAME TIME. You belong to MANY communities AT ONCE.`,
              audioPrompt: `Many at once, {name}, means multiple at the same time. You belong to many communities at once. Family AND school AND neighborhood AND city AND country — all simultaneously. That's normal. Every person on Earth belongs to multiple communities. They overlap and weave together to make up your whole social life.` },
            { word: `part of who you are`, definition: `Communities SHAPE you. They become PART OF WHO YOU ARE.`,
              audioPrompt: `Part of who you are, {name} — communities shape you. They become part of who you are. Your family teaches you values. Your school shapes how you think. Your friends influence what you like. Your country gives you a language and culture. Everywhere you've belonged has helped make you the person you are.` },
            { word: `human`,          definition: `Being a PERSON means belonging to communities. It's part of being HUMAN.`,
              audioPrompt: `Human, {name} — being a person means belonging to communities. It's part of being human. Humans are social creatures. We need each other. We're built to live, work, and play in groups. Being alone all the time isn't good for humans. We thrive when we have communities that love us, support us, and challenge us.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `People in communities HELP EACH OTHER — we depend on each other to live well.`,
              matchPhrase: `Yes! Doctors help when we're sick. Teachers help us learn. Farmers grow our food. Communities work because we all do our part and help one another. We're stronger together.`,
              correctMatch: `fact` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `You belong to MANY communities at once — family, school, neighborhood, country.`,
              matchPhrase: `True! Everyone belongs to many communities simultaneously. Family, school, friends, town, state, country, world. They all overlap. They all matter. That's normal.`,
              correctMatch: `fact` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Being completely ALONE forever — with NO community at all — is the best way to live.`,
              matchPhrase: `Not at all! Humans are built for community. Being totally alone is hard on people. We need each other for love, help, support, and growth. Communities make life richer.`,
              correctMatch: `myth` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Each person can only belong to ONE community in their whole life — never any others.`,
              matchPhrase: `Definitely not! Everyone belongs to many communities. Family, school, neighborhood, city, country, friend groups, teams. Belonging to many is normal — and what makes life rich.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is a COMMUNITY?`,
              options: [`A type of food`, `A group of PEOPLE who live, work, or learn TOGETHER`, `Only a city`, `A type of building`],
              correctIndex: 1,
              explanation: `A community is a group of people who live, work, or learn together. Family, school, neighborhood, city — all communities. We belong to many of them at once.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is usually your FIRST community?`,
              options: [`School`, `Your FAMILY — the people who love and take care of you`, `The internet`, `A team`],
              correctIndex: 1,
              explanation: `Family is usually your first community. The people who love and care for you when you're little. Families come in all shapes and sizes — and every kind matters.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `Which is the BIGGEST community?`,
              options: [`Family`, `City`, `State`, `Country and planet`],
              correctIndex: 3,
              explanation: `Country and planet are biggest. Family is smallest. They go: family → school → neighborhood → city → state → country → planet. Each one is bigger than the last.` },
            { id: `l01-q4`, format: `true-false`,
              question: `People in communities HELP each other — we depend on doctors, teachers, farmers, and many others.`,
              correctAnswer: true,
              explanation: `True! Communities work because we help each other. Doctors, teachers, farmers, firefighters, store owners — we depend on each other. None of us could do every job alone.` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `You belong to ___ communities at once — family, school, neighborhood, and more.`,
              options: [`many`, `zero`, `only one`, `no`],
              correctIndex: 0,
              explanation: `Many! Everyone belongs to multiple communities at the same time. Family AND school AND neighborhood AND city — all simultaneously. That's normal for humans.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why do humans LIVE in communities instead of all alone?`,
              options: [`Because they have to`, `We're STRONGER together — we help each other and depend on each other`, `We just do`, `Because adults said so`],
              correctIndex: 1,
              explanation: `We're stronger together! Humans are built for community. No one can do every job alone. Together we build amazing things — cities, schools, hospitals. Plus we love and support each other.` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Communities have looked DIFFERENT throughout history. Long ago, communities were SMALL — just families and a few neighbors. People knew everyone they saw. Today, communities can be HUGE — entire cities, countries, even online communities where people from around the world meet through the internet. But the basic idea stays the same — people coming together, sharing, helping each other. From the very first cave families to modern online friends, communities have always been part of being human. That's not changing anytime soon.`,
          familyAdventure: `Together, MAP your COMMUNITIES. On a big piece of paper, draw a small circle in the middle and write FAMILY. Around that, draw bigger circles: SCHOOL, NEIGHBORHOOD, TOWN, STATE, COUNTRY. Inside each circle, write the names of people or places. Then talk about who in each community helps you. Talk about who YOU help. See how communities surround you — like rings.`,
          creativePrompt: `Draw a picture of YOU at the center. Then draw your COMMUNITIES around you. Family. School. Neighborhood. Town. Friends. Connect them all with lines to YOU. Color each one a different color. See how you belong to many places at once. You're part of many beautiful communities.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Welcome to social studies, {name}. You now know about COMMUNITIES — the groups of people we live and grow with. Family is your first. School and neighborhood come next. Then city, state, country, planet. You belong to MANY at once. People in communities HELP each other and DEPEND on each other. We're stronger TOGETHER than alone. You're already part of all this. I can't wait to keep exploring with you. — Atlas 🐻`,
          badge: `community-explorer`,
          badgeName: `Community Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L01] Loaded: "What Is a Community?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
