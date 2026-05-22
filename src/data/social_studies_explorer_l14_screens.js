// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L14 — Work and Jobs
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Eco.6.K-2 / D2.Eco.10.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L14 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-14`,
      title: `Work and Jobs`,
      duration: 12,
      xpReward: 50,
      badge: `work-jobs-explorer`,
      badgeName: `Work and Jobs Explorer`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Last time we learned money comes from work. Today we look at all the jobs people do. There are so many. Each one helps the community. And someday, you will pick yours. Let's explore.`,
          headline: `Work and Jobs`,
          subtitle: `The many jobs that keep our communities running`,
          visual: `/explorer-assets/social-studies/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Many Different Jobs`,
          paragraphs: [
            `Adults around the world do many different jobs. What do the adults you know do?`,
            `Maybe teachers, doctors, drivers, builders, scientists, chefs, nurses, artists, farmers. There are thousands of jobs. Some are old like farming. Some are new like programming. Each one helps the community in its own way.`,
          ],
          image: `/explorer-assets/social-studies/l14-s1-many-jobs.webp`,
          imageCaption: `Thousands of jobs in the world. Each one helps the community.`,
          vocab: [
            { word: `job`, definition: `Work someone does to earn money.`,
              audioPrompt: `A job is work someone does to earn money, {name}. Jobs are how adults help the community and earn money to live. There are thousands of jobs. Each one matters in its own way.` },
            { word: `variety`, definition: `Many different kinds.`,
              audioPrompt: `Variety means many different kinds, {name}. The world has variety in jobs. Indoor and outdoor. Old and new. Helping people. Making things. The variety means anyone can find work that fits.` },
            { word: `while`, definition: `At the same time as.`,
              audioPrompt: `While means at the same time as, {name}. While a doctor heals, a builder builds. While a teacher teaches, a chef cooks. All over the world, all kinds of work happen at the same time.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Jobs Help the Community`,
          paragraphs: [
            `Every job exists because someone needs that work done.`,
            `Doctors keep us healthy. Teachers help us learn. Farmers grow food. Builders make our homes. Trash collectors keep us clean. Bus drivers take us places. We all depend on each other. The community works because so many people do their part.`,
          ],
          image: `/explorer-assets/social-studies/l14-s2-jobs-help.webp`,
          imageCaption: `Each job helps the community. Healers, teachers, builders, farmers. All connected.`,
          vocab: [
            { word: `need`, definition: `Something the community must have.`,
              audioPrompt: `A need is something the community must have, {name}. Healthy people need doctors. Hungry people need farmers. Each job exists because of a need. Big communities have many needs and many kinds of jobs.` },
            { word: `depend on`, definition: `To rely on someone else.`,
              audioPrompt: `To depend on means to rely on, {name}. We depend on many people. Farmers for food. Teachers for learning. Drivers to take us places. We do not do everything ourselves. We depend on each other.` },
            { word: `important`, definition: `Having big value.`,
              audioPrompt: `Important means having big value, {name}. Every job is important. Even ones people forget about. Trash collectors keep cities clean. Without them, things would be bad. Every kind of work matters.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Jobs Need Skills`,
          paragraphs: [
            `Each job needs skills. You have to learn how to do it well.`,
            `A doctor learns about the body. Many years of school. A pilot learns to fly planes. A chef learns to cook. A teacher learns to teach. Skills take time to build. Practice helps. Anyone can build skills, including kids.`,
          ],
          image: `/explorer-assets/social-studies/l14-s3-skills-training.webp`,
          imageCaption: `Jobs need skills. Doctors study. Pilots train. Chefs practice. Skills take time.`,
          vocab: [
            { word: `skill`, definition: `Something a person can do well.`,
              audioPrompt: `A skill is something a person can do well, {name}. Doctors have skill in healing. Bakers have skill in baking. Skills are not born in. They are learned. Anyone can build skills over time.` },
            { word: `training`, definition: `Learning how to do something.`,
              audioPrompt: `Training is learning how to do something, {name}. Doctors train for many years. Plumbers learn from masters. Teachers train in college. Training takes time but builds the skills needed for a job.` },
            { word: `practice`, definition: `Doing something many times to get better.`,
              audioPrompt: `Practice means doing something many times, {name}. To get better. The more you practice, the better you become. A chef who cooks every day gets great. Practice is how skills grow over time.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Different Kinds of Work`,
          paragraphs: [
            `Jobs come in many kinds. Some are indoors. Some are outdoors.`,
            `Some help people directly. Like doctors and teachers. Others make things. Like bakers and builders. Some are creative. Like artists. Some are practical. Like plumbers. All these kinds of work are valuable. Each fits a different person.`,
          ],
          image: `/explorer-assets/social-studies/l14-s4-different-kinds.webp`,
          imageCaption: `Many kinds of work. Indoor or outdoor. Helping or making. Each one valuable.`,
          vocab: [
            { word: `kind`, definition: `A type of something.`,
              audioPrompt: `A kind is a type of something, {name}. There are many kinds of work. Indoor work. Outdoor work. Helping work. Making work. Knowing the kinds helps you figure out what you might like.` },
            { word: `creative`, definition: `Using imagination to make new things.`,
              audioPrompt: `Creative means using imagination, {name}. To make new things. Creative jobs include artist, writer, designer, musician, chef. Creative work uses ideas. It often makes things others can enjoy.` },
            { word: `practical`, definition: `Useful, focused on getting things done.`,
              audioPrompt: `Practical means useful and focused on getting things done, {name}. Practical jobs include plumber, builder, mechanic. They fix problems. They make things work. Practical workers keep daily life going.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Every Job Matters`,
          paragraphs: [
            `Here is an important truth. Every job matters. Even ones people forget about.`,
            `Some think doctors are more important than janitors. But would a hospital work without janitors keeping it clean? Would a city work without trash collectors? Every worker helps. We should respect all kinds of work.`,
          ],
          image: `/explorer-assets/social-studies/l14-s5-every-job-matters.webp`,
          imageCaption: `Every job matters. Trash collector and doctor both essential.`,
          vocab: [
            { word: `value`, definition: `How much something is worth.`,
              audioPrompt: `Value means how much something is worth, {name}. Every job has value. Not just the famous ones. The cleaner. The farmer. The driver. Without each kind of worker, the community would not function.` },
            { word: `respect`, definition: `Treating people with kindness and care.`,
              audioPrompt: `Respect means treating people with kindness, {name}. We should respect every worker. The doctor saving lives. The cashier ringing up groceries. Saying thank you. Being patient. That is respect.` },
            { word: `essential`, definition: `Absolutely needed.`,
              audioPrompt: `Essential means absolutely needed, {name}. Many jobs are essential. Without them, things stop working. Grocery workers. Truck drivers. Nurses. Many jobs that seem small are actually essential.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Will You Do?`,
          paragraphs: [
            `Now the fun question, {name}. What will YOU do someday?`,
            `You do not have to decide now. People discover their work over time. Think about what you love. What are you good at? What problems do you want to solve? Your future might combine your interests with your skills. The world has room for many you's.`,
          ],
          image: `/explorer-assets/social-studies/l14-s6-your-future.webp`,
          imageCaption: `Your future. Combine what you love with what you are good at.`,
          vocab: [
            { word: `interest`, definition: `Something you like to learn about or do.`,
              audioPrompt: `An interest is something you like to learn about, {name}. Your interests help guide your work. Love animals? Maybe a vet. Love science? Maybe a scientist. Following interests often leads to great work.` },
            { word: `discover`, definition: `To find out something.`,
              audioPrompt: `To discover means to find out something, {name}. People discover their work over time. Not all at once. You might love drawing as a kid. Then discover science later. Your work can grow as you grow.` },
            { word: `future`, definition: `What is coming later in your life.`,
              audioPrompt: `The future is what is coming later, {name}. Your future is wide open. So many possibilities. Most kids today will have several jobs in their lives. Stay curious. Try things. You will find your way.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each job, {name}. Does it mostly HELP people or MAKE things?`,
          buckets: [
            { id: `helps`, label: `Helps People`, color: `#F472B6` },
            { id: `makes`, label: `Makes Things`, color: `#FBBF24` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `A doctor visiting a patient`,
              matchPhrase: `Yes! A doctor helps people. They heal sick patients.`, correctMatch: `helps` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `A teacher in front of a class`,
              matchPhrase: `Right! A teacher helps people. They help kids learn.`, correctMatch: `helps` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `A firefighter putting out a fire`,
              matchPhrase: `Yes! Firefighters help people. They keep us safe.`, correctMatch: `helps` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `A bus driver taking kids to school`,
              matchPhrase: `Right! Bus drivers help people get places.`, correctMatch: `helps` },
            { id: `l14-g5`, image: `l14-game-5.webp`, label: `A baker making fresh bread`,
              matchPhrase: `Yes! A baker makes bread. That is making things.`, correctMatch: `makes` },
            { id: `l14-g6`, image: `l14-game-6.webp`, label: `A farmer planting crops`,
              matchPhrase: `Right! A farmer makes food grow. Making things from the land.`, correctMatch: `makes` },
            { id: `l14-g7`, image: `l14-game-7.webp`, label: `A carpenter building a table`,
              matchPhrase: `Yes! A carpenter makes things from wood. Tables, chairs, houses.`, correctMatch: `makes` },
            { id: `l14-g8`, image: `l14-game-8.webp`, label: `A factory worker assembling toys`,
              matchPhrase: `Right! Factory workers make things. Toys, tools, cars, more.`, correctMatch: `makes` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is a job?`,
              options: [`A type of food`, `Work that someone does to earn money`, `Only for kids`, `A game`],
              correctIndex: 1,
              explanation: `A job is work someone does to earn money. There are thousands of different jobs.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `Why do communities need many different jobs?`,
              options: [`They do not`, `Different work is needed. Doctors heal. Farmers feed. Teachers teach.`, `Only one job is needed`, `Just by luck`],
              correctIndex: 1,
              explanation: `Communities have many needs. Different jobs meet different needs. That is why we need many kinds of workers.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What do jobs need?`,
              options: [`Just luck`, `Skills, learned through training and practice`, `Only money`, `Only good clothes`],
              correctIndex: 1,
              explanation: `Skills. Different jobs need different skills. Skills come from school, training, and practice.` },
            { id: `l14-q4`, format: `true-false`,
              question: `Every job matters. From trash collectors to surgeons.`,
              correctAnswer: true,
              explanation: `True! All jobs matter. The trash collector keeps cities clean. The surgeon saves lives. Both essential.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `People discover their work over time. They combine their ___ with their skills.`,
              options: [`interests`, `phones`, `pencils`, `hats`],
              correctIndex: 0,
              explanation: `Interests! What you love to do helps guide what work you do.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's a smart way to think about your future job?`,
              options: [`Do not think about it`, `Combine your interests with your skills and what helps others`, `Pick something you hate`, `Wait forever`],
              correctIndex: 1,
              explanation: `Combine interests, skills, and helping others. That often leads to work you love and that helps the world.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Many jobs today did not exist when your parents were kids. App developer. Drone pilot. Solar panel installer. New jobs appear all the time. By the time you grow up, there will be jobs that do not exist yet. You might even invent one. The future of work is being made right now.`,
          familyAdventure: `Interview a family member about their work. Ask. What is your job? How did you choose it? What do you like about it? What skills did you have to learn? Listen to their story. Notice how their work is part of who they are.`,
          creativePrompt: {
            intro: `Imagine 3 different jobs you might love someday. Draw yourself doing each one.`,
            floor: `Write 3 sentences about your future jobs. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what skills you would need.`,
            frames: [
              `One job I might love is ___.`,
              `Another job I might pick is ___.`,
              `I would also try ___.`,
              `To do these jobs, I would learn ___.`,
              `My favorite of the three is ___ because ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You know about work and jobs. Thousands of different ones. Each one helps the community. Each one needs skills built over time. Every job matters. Someday you will pick yours. Combine what you love with what you are good at. So many possibilities. Atlas the Bear.`,
          badge: `work-jobs-explorer`,
          badgeName: `Work and Jobs Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L14;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L14] Loaded: "Work and Jobs" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
