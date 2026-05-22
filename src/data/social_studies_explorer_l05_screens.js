// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L05 — Being a Good Citizen
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Civ.6.K-2 / D2.Civ.10.K-2 / D4.Civ.7.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L05 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-05`,
      title: `Being a Good Citizen`,
      duration: 12,
      xpReward: 50,
      badge: `good-citizen-explorer`,
      badgeName: `Good Citizen Explorer`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. You know about communities, rules, government, and rights. Today we put it together. How do you be a good citizen? And here is the best part. You can start right now. Let's go.`,
          headline: `Being a Good Citizen`,
          subtitle: `What you can do today to make your community better`,
          visual: `/explorer-assets/social-studies/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a Citizen?`,
          paragraphs: [
            `A citizen is a member of a community. You are a citizen, {name}. Of your family. Your school. Your city. Your country. Earth.`,
            `Being a citizen means you belong. A good citizen makes the community better. They help. They follow rules. They care. Anyone can be a good citizen. Even kids.`,
          ],
          image: `/explorer-assets/social-studies/l05-s1-citizen.webp`,
          imageCaption: `A citizen is a member of a community. You are a citizen right now.`,
          vocab: [
            { word: `citizen`, definition: `A member of a community.`,
              audioPrompt: `A citizen is a member of a community, {name}. You are a citizen of many communities at once. Family, school, city, country. Kids are citizens too. You have a real place in the world.` },
            { word: `good citizen`, definition: `Someone who makes their community better.`,
              audioPrompt: `A good citizen makes their community better, {name}. They help. They follow rules. They care for others. Good citizens come in all ages. You can be one right now.` },
            { word: `belong`, definition: `To be part of something.`,
              audioPrompt: `To belong means to be part of something, {name}. You belong to your communities. They are partly yours. You are partly theirs. Belonging gives you a place to stand.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Be Kind to Others`,
          paragraphs: [
            `The first way to be a good citizen is easy. Be kind. Smile at someone lonely. Use kind words. Help a friend who is stuck.`,
            `Kindness costs nothing. But it can make someone's whole day better. When you choose kindness, you make the world a little brighter.`,
          ],
          image: `/explorer-assets/social-studies/l05-s2-kindness.webp`,
          imageCaption: `Be kind. Smile. Help. Share. Listen. The easiest way to be a good citizen.`,
          vocab: [
            { word: `kind`, definition: `Treating others with care.`,
              audioPrompt: `Kind means treating others with care, {name}. A kind word. A helping hand. Listening when someone is sad. Being kind is the easiest way to be a good citizen.` },
            { word: `notice`, definition: `To pay attention to others.`,
              audioPrompt: `To notice means to pay attention, {name}. Notice if a kid sits alone. Notice if someone needs help. Noticing is the first step to kindness. Then you can do something.` },
            { word: `when`, definition: `At the time. "When" tells us about time.`,
              audioPrompt: `When is a word about time, {name}. When you smile, others feel happy. When you help, someone feels seen. When you are kind, the world gets better. When links two things in time.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Help Your Community`,
          paragraphs: [
            `Beyond being kind to people you know, you can help your whole community.`,
            `Pick up trash at the park. Help an older neighbor. Donate a toy you do not play with anymore. Volunteer with your family. These take a little time but help a lot.`,
          ],
          image: `/explorer-assets/social-studies/l05-s3-help-community.webp`,
          imageCaption: `Help your community. Small acts make a big difference.`,
          vocab: [
            { word: `volunteer`, definition: `To choose to help without being paid.`,
              audioPrompt: `To volunteer means to choose to help, {name}. Without being paid. Animal shelters need help. Food pantries need help. Parks need help. Kids can volunteer with their family.` },
            { word: `donate`, definition: `To give something to help others.`,
              audioPrompt: `To donate means to give to help others, {name}. Donate toys you do not use. Donate clothes that are too small. Your gifts go to people who need them.` },
            { word: `add up`, definition: `When small things become big over time.`,
              audioPrompt: `Add up means small things become big, {name}. One kind act is small. But many kind acts add up. If everyone helps a little, the whole community changes.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Care for the Earth`,
          paragraphs: [
            `Earth is our home. Good citizens care for it. You can help even as a kid.`,
            `Recycle paper, cans, and bottles. Turn off the lights when you leave a room. Take short showers. Walk or bike when you can. Respect plants and animals. Earth needs all of us.`,
          ],
          image: `/explorer-assets/social-studies/l05-s4-care-environment.webp`,
          imageCaption: `Care for Earth. Recycle. Save water. Save energy. Respect nature.`,
          vocab: [
            { word: `recycle`, definition: `To use something again as a new product.`,
              audioPrompt: `To recycle means to use something again, {name}. Used paper becomes new paper. Used cans become new cans. Recycling saves Earth. It is one of the easiest ways to help.` },
            { word: `save`, definition: `To not waste.`,
              audioPrompt: `To save means to not waste, {name}. Save water by turning off the tap. Save energy by turning off lights. Small habits add up to big help for Earth.` },
            { word: `respect`, definition: `To treat something with care.`,
              audioPrompt: `To respect means to treat with care, {name}. Respect plants. Respect animals. Respect parks. Earth gives us everything. Respecting it is how we say thank you.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Speak Up for What's Right`,
          paragraphs: [
            `Sometimes being a good citizen means speaking up. If you see someone being bullied, tell a trusted adult. If something is unfair, say something.`,
            `You do not have to be loud. Even quiet words help. When you speak up, you protect someone. Your voice matters, even as a kid.`,
          ],
          image: `/explorer-assets/social-studies/l05-s5-speak-up.webp`,
          imageCaption: `Speak up when you see bullying or unfairness. Your voice matters.`,
          vocab: [
            { word: `speak up`, definition: `To use your voice for what is right.`,
              audioPrompt: `Speak up means to use your voice, {name}. If you see something wrong, say something. Tell a trusted adult. Speaking up takes courage. But it can really help someone.` },
            { word: `bully`, definition: `Someone who is mean to others on purpose.`,
              audioPrompt: `A bully is someone who is mean on purpose, {name}. If you see a kid being bullied, tell a trusted adult. Sit with the kid who is alone. Small actions can stop bullying.` },
            { word: `unfair`, definition: `When someone is treated worse for no good reason.`,
              audioPrompt: `Unfair means treated worse for no good reason, {name}. Like leaving someone out because of how they look. If you see something unfair, speak up. You can help change it.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Small Acts. Big Difference.`,
          paragraphs: [
            `Here is the big idea, {name}. You do not have to be big to make a big difference.`,
            `One kind word can change a day. One piece of trash picked up helps a park. One time speaking up can save someone. You are already a good citizen. Just keep going.`,
          ],
          image: `/explorer-assets/social-studies/l05-s6-small-big-difference.webp`,
          imageCaption: `Small acts add up to big change. You matter.`,
          vocab: [
            { word: `difference`, definition: `A change that you can see.`,
              audioPrompt: `A difference is a change you can see, {name}. You make a difference every day. With kindness. With helping. With caring. You do not need to be big to make a big difference.` },
            { word: `start small`, definition: `To begin with easy actions.`,
              audioPrompt: `Start small means begin with easy actions, {name}. Pick one thing today. A kind word. Picking up one piece of trash. One small act. Then another. Small things grow.` },
            { word: `matter`, definition: `To be important.`,
              audioPrompt: `Matter means to be important, {name}. You matter. Your actions matter. Your voice matters. The world is better because you are in it. Keep being you.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each good-citizen action into the right bucket, {name}.`,
          buckets: [
            { id: `kind`,      label: `Be Kind`,         color: `#F472B6` },
            { id: `help`,      label: `Help Community`,  color: `#60A5FA` },
            { id: `earth`,     label: `Care for Earth`,  color: `#34D399` },
            { id: `speak`,     label: `Speak Up`,        color: `#FBBF24` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `Smile at someone lonely`,
              matchPhrase: `Yes! That is being kind. A smile can change someone's whole day.`, correctMatch: `kind` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `Use kind words with your sister`,
              matchPhrase: `Right! Kind words are one of the easiest ways to be a good citizen.`, correctMatch: `kind` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `Pick up trash at the park`,
              matchPhrase: `Yes! That helps your whole community. Cleaner parks for everyone.`, correctMatch: `help` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `Help an older neighbor carry groceries`,
              matchPhrase: `Right! Helping neighbors makes the community stronger.`, correctMatch: `help` },
            { id: `l05-g5`, image: `l05-game-5.webp`, label: `Recycle paper and cans`,
              matchPhrase: `Yes! Recycling helps care for Earth. Small habit, big help.`, correctMatch: `earth` },
            { id: `l05-g6`, image: `l05-game-6.webp`, label: `Turn off lights when you leave a room`,
              matchPhrase: `Right! Saving energy is caring for Earth. Every bit counts.`, correctMatch: `earth` },
            { id: `l05-g7`, image: `l05-game-7.webp`, label: `Tell a teacher if you see bullying`,
              matchPhrase: `Yes! Speaking up takes courage. It can save someone.`, correctMatch: `speak` },
            { id: `l05-g8`, image: `l05-game-8.webp`, label: `Share an idea to make school better`,
              matchPhrase: `Right! Sharing your ideas is using your voice. Adults listen when kids speak up.`, correctMatch: `speak` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is a citizen?`,
              options: [`A fruit`, `A member of a community`, `Only adults`, `A leader`],
              correctIndex: 1,
              explanation: `A citizen is a member of a community. You are a citizen of your family, school, city, and country.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is the easiest way to be a good citizen?`,
              options: [`Be rich`, `Be kind to others`, `Be the loudest`, `Wait until you grow up`],
              correctIndex: 1,
              explanation: `Be kind! Kindness costs nothing and can make someone's whole day better.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `Which is a way to care for the Earth?`,
              options: [`Waste water`, `Recycle and save energy`, `Leave lights on`, `Throw trash on the ground`],
              correctIndex: 1,
              explanation: `Recycle. Save energy. Walk or bike. Respect nature. All small ways to help Earth.` },
            { id: `l05-q4`, format: `true-false`,
              question: `Kids can speak up when they see something unfair.`,
              correctAnswer: true,
              explanation: `True! Kids can tell a trusted adult. Even quiet words help. Your voice matters.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `Small acts of kindness ___ to make a big change.`,
              options: [`add up`, `disappear`, `hide`, `wait`],
              correctIndex: 0,
              explanation: `Add up! One kind act is small. Many add up to a big change.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `When can you start being a good citizen?`,
              options: [`When you are an adult`, `Right now, today`, `On your birthday`, `When you have a job`],
              correctIndex: 1,
              explanation: `Right now! You are already a citizen. You can make a difference today.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Many big changes start with a kid who decides to act. Malala spoke up for school at age 11. Ruby Bridges was just 6. You do not need to be famous. Most heroes are quiet people who help every day. You can be one too.`,
          familyAdventure: `Pick one good-citizen action your family can do together this week. Maybe pick up trash at a park. Maybe donate toys. Maybe make cookies for a neighbor. Do it together. Talk about how it felt.`,
          creativePrompt: {
            intro: `Draw yourself as a super citizen. Show 3 things you do to help your community.`,
            floor: `Write 3 sentences about your super citizen self. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why you do these things.`,
            frames: [
              `As a super citizen, I ___.`,
              `I help my community by ___.`,
              `I care for Earth by ___.`,
              `When I see something unfair, I ___.`,
              `Being a good citizen makes me feel ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You learned how to be a good citizen. Be kind. Help your community. Care for Earth. Speak up for what's right. Small acts add up to big change. You can start today. Civics block done. Geography next. Atlas the Bear.`,
          badge: `good-citizen-explorer`,
          badgeName: `Good Citizen Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L05] Loaded: "Being a Good Citizen" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
