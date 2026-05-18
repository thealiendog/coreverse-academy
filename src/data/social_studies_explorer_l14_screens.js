// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L14 — Work and Jobs: What People Do for a Living
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Eco.6.K-2 / D2.Eco.10.K-2 (work and personal economics)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L14 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-14`,
      title:     `Work and Jobs: What People Do for a Living`,
      duration:  12,
      xpReward:  50,
      badge:     `work-jobs-explorer`,
      badgeName: `Work and Jobs Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Last lesson, you learned money comes from WORK. Today we explore work itself. The many different JOBS people do. The skills jobs need. Why every job matters. And — exciting — what YOU might do someday. The world is full of meaningful work. Let's explore.`,
          headline: `Work and Jobs: What People Do for a Living`,
          subtitle: `The many kinds of jobs people do — and what you might do someday`,
          visual: `/explorer-assets/social-studies/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Many DIFFERENT Jobs`,
          paragraphs: [
            `Adults around the world do MANY different kinds of jobs. Take a moment to think — what do the adults around you DO?`,
            `Maybe your PARENTS work as teachers, doctors, designers, drivers, sellers, builders, scientists, artists, farmers, programmers, chefs, nurses, accountants, mechanics, writers, or hundreds of other things. There are THOUSANDS of different jobs in the world. Some are old (farming, teaching). Some are new (video game designer, app developer). Some are common (store worker). Some are rare (astronaut). Each job is someone's way of CONTRIBUTING to the community and EARNING money to live. The variety of jobs is amazing.`,
          ],
          image: `/explorer-assets/social-studies/l14-s1-many-jobs.webp`,
          imageCaption: `Thousands of jobs in the world. Teachers, doctors, builders, farmers, scientists, artists, programmers, and more.`,
          vocab: [
            { word: `job`,            definition: `WORK that someone DOES to EARN money. JOBS are how adults contribute and live.`,
              audioPrompt: `A job, {name}, is work that someone does to earn money. Jobs are how adults contribute to communities and earn money to live. There are thousands of different jobs. Teachers, doctors, builders, programmers, chefs, scientists. Each one contributes something different. Each one is needed. Together, all these jobs make communities work.` },
            { word: `variety`,        definition: `Many DIFFERENT kinds. There's a huge VARIETY of jobs in the world.`,
              audioPrompt: `Variety, {name}, means many different kinds. There's a huge variety of jobs in the world. Some are old (farming). Some are new (designing apps). Some involve people. Some involve machines. Some involve nature. Some involve numbers. The variety means almost anyone can find a job that fits their interests and skills.` },
            { word: `contribute`,     definition: `To ADD something USEFUL. Every job CONTRIBUTES to the community.`,
              audioPrompt: `To contribute, {name}, is to add something useful. Every job contributes to the community. Teachers contribute by teaching kids. Doctors contribute by healing. Farmers contribute by growing food. Trash collectors contribute by keeping things clean. Every job adds something the community needs. Together, all jobs make life work.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Jobs HELP the Community`,
          paragraphs: [
            `Every job exists because the community NEEDS that work done. Each one helps in its own way.`,
            `DOCTORS keep us healthy. TEACHERS help us learn. FARMERS feed us. BUILDERS create our homes and schools. POLICE OFFICERS protect us. FIREFIGHTERS save us in emergencies. STORE WORKERS make sure we have things to buy. DELIVERY DRIVERS bring food and packages. PROGRAMMERS make the apps and websites we use. MUSICIANS and ARTISTS give us beauty and joy. SCIENTISTS discover new things. PARENTS taking care of children at home — also doing important work. We all depend on each other. The whole community is connected through the work people do.`,
          ],
          image: `/explorer-assets/social-studies/l14-s2-jobs-help.webp`,
          imageCaption: `Each job helps community: doctors heal, teachers teach, farmers feed, builders build, police protect. All connected.`,
          vocab: [
            { word: `need`,           definition: `Something the community must HAVE. Communities NEED many different kinds of workers.`,
              audioPrompt: `A need, {name}, is something the community must have. Communities need many different kinds of workers. Healthy people need doctors. Hungry people need farmers. Kids need teachers. Cities need builders. Each job exists because there's a need for that work. Different communities might have different needs based on their size and what they do.` },
            { word: `depend on`,      definition: `To RELY ON someone else. We DEPEND ON people doing many different jobs.`,
              audioPrompt: `To depend on, {name}, is to rely on someone else. We depend on people doing many different jobs. We depend on farmers for food. On doctors for health. On teachers for learning. On firefighters for safety. We don't make everything ourselves — we depend on others. They depend on us too. We're all connected.` },
            { word: `important`,      definition: `Having BIG value. EVERY job is IMPORTANT — even ones people might overlook.`,
              audioPrompt: `Important, {name}, means having big value. Every job is important — even ones people might overlook. Think of trash collectors. People sometimes forget they exist. But imagine a city without them! Trash everywhere. Disease. Smell. Each job is important. Some jobs get more attention than others — but all of them matter.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Jobs Need SKILLS`,
          paragraphs: [
            `Jobs aren't just things you wake up and decide to do. Each one needs SKILLS — abilities you have to LEARN.`,
            `A DOCTOR needs to learn HOW the human body works. Years of school. A PILOT needs to learn how to fly planes — lots of training. A CHEF needs to learn how to cook many recipes. A PLUMBER needs to learn how pipes work. A PROGRAMMER needs to learn computer languages. A TEACHER needs to learn how to teach (both subject and how to work with kids). Skills come from school, training, practice, and experience. The MORE skilled you are at something, the better you can do that job. Often the more you can earn too. Skill takes TIME to develop. Everyone has to start somewhere.`,
          ],
          image: `/explorer-assets/social-studies/l14-s3-skills-training.webp`,
          imageCaption: `Jobs need SKILLS. Doctors study for years. Pilots train. Chefs practice cooking. Skills take time.`,
          vocab: [
            { word: `skill`,          definition: `Something you can DO WELL. Different JOBS need different SKILLS.`,
              audioPrompt: `A skill, {name}, is something you can do well. Different jobs need different skills. A doctor's skill is medical knowledge. A baker's skill is cooking with flour. A musician's skill is making music. A teacher's skill is helping kids learn. Skills aren't built in — they're learned over time. Anyone can build skills with practice and learning.` },
            { word: `training`,       definition: `Learning HOW to do something. People get TRAINING to do their jobs.`,
              audioPrompt: `Training, {name}, is learning how to do something. People get training to do their jobs. Doctors train for many years. Plumbers train through apprenticeships. Teachers train in colleges. Programmers train in classes and by practicing. Training takes time and effort. But it builds the skills needed to do good work.` },
            { word: `practice`,       definition: `DOING something MANY times to get better. PRACTICE is how skills grow.`,
              audioPrompt: `Practice, {name}, is doing something many times to get better. Practice is how skills grow. The more a chef practices cooking, the better they get. The more a doctor sees patients, the better they understand medicine. The more anyone practices anything, the more skilled they become. Practice plus patience equals progress.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Different Kinds of WORK`,
          paragraphs: [
            `Jobs come in MANY different forms. Some categories of work include:`,
            `INDOOR vs OUTDOOR — A teacher works inside (classroom). A farmer works outside (fields). HANDS vs MINDS — A builder uses hands (construction). A scientist uses mostly minds (research). WITH PEOPLE vs ALONE — A nurse works with people (patients). A writer often works alone (writing). HELPING vs MAKING — A doctor helps. A factory worker makes. CREATIVE vs PRACTICAL — A musician is creative. A plumber is practical. ALL these kinds of work are valuable. Some people like quiet, alone work. Others like busy, social work. Some like physical work outdoors. Others like thinking work indoors. There's a job style for every kind of person.`,
          ],
          image: `/explorer-assets/social-studies/l14-s4-different-kinds.webp`,
          imageCaption: `Many kinds of work: indoor/outdoor, hands/minds, with people/alone, helping/making. Each has its own style.`,
          vocab: [
            { word: `category`,       definition: `A GROUP of similar things. Jobs come in many CATEGORIES — indoor, outdoor, creative, practical.`,
              audioPrompt: `A category, {name}, is a group of similar things. Jobs come in many categories. Indoor work. Outdoor work. Creative work. Practical work. Work with people. Work alone. Categorizing jobs helps us understand what they have in common. It also helps people figure out what kind of work would suit them best.` },
            { word: `creative`,       definition: `Using IMAGINATION to make new things. CREATIVE jobs include artist, writer, designer.`,
              audioPrompt: `Creative, {name}, means using imagination to make new things. Creative jobs include artist, writer, designer, musician, architect, chef (yes — creating recipes), game designer, filmmaker. Creative work uses imagination and ideas. It often produces things others can enjoy or use. Creative work is one of the most exciting kinds of work for many people.` },
            { word: `practical`,      definition: `USEFUL and FOCUSED on getting things DONE. PRACTICAL jobs include plumber, electrician, mechanic.`,
              audioPrompt: `Practical, {name}, means useful and focused on getting things done. Practical jobs include plumber, electrician, mechanic, builder, farmer. Practical work fixes problems and makes things work. Without practical workers, modern life would fall apart. Houses wouldn't have water. Cars wouldn't run. Buildings wouldn't get built. Practical work is essential.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `EVERY Job MATTERS`,
          paragraphs: [
            `Here's an important truth — EVERY JOB MATTERS. Some jobs get more glamor or attention than others. But ALL jobs are needed.`,
            `Sometimes people think doctors and lawyers are MORE IMPORTANT than janitors and trash collectors. But think — would a hospital work without janitors keeping it CLEAN? Would a city work without trash collectors keeping it HEALTHY? Every job is part of the community's WORK. Different jobs pay different amounts (that's complicated and not always fair). But VALUE isn't just about money. Each worker — whatever their job — is contributing their time and skill to the community. We should RESPECT all kinds of work. The world only runs because EVERYONE does their part. Trash collector or president — both essential.`,
          ],
          image: `/explorer-assets/social-studies/l14-s5-every-job-matters.webp`,
          imageCaption: `Every job matters. Trash collector + surgeon both essential. Different pay, same value as contribution.`,
          vocab: [
            { word: `value`,          definition: `WORTH or IMPORTANCE. Every job has VALUE — not just the famous ones.`,
              audioPrompt: `Value, {name}, is worth or importance. Every job has value — not just the famous ones. Famous jobs like actor or doctor get attention. But cleaning, building, farming, delivering — all crucial too. Without each kind of work, the community wouldn't function. Value isn't always about money or fame. It's about what something contributes.` },
            { word: `respect`,        definition: `Showing you VALUE someone. We should RESPECT all workers — every job.`,
              audioPrompt: `Respect, {name}, means showing you value someone. We should respect all workers — every job. The doctor saving lives, the janitor cleaning bathrooms, the farmer growing food, the cashier ringing up groceries. All are working hard. All deserve respect. Treating workers with respect — saying thank you, being patient, recognizing their effort — is part of being a good person.` },
            { word: `essential`,      definition: `Absolutely NEEDED. Many jobs are ESSENTIAL — without them, things stop working.`,
              audioPrompt: `Essential, {name}, means absolutely needed. Many jobs are essential — without them, things stop working. The pandemic showed this. When some workers had to stay home, society realized how essential they were. Grocery workers. Truck drivers. Trash collectors. Nurses. Without them, daily life broke down. Many jobs we used to overlook turned out to be essential.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Will YOU Do?`,
          paragraphs: [
            `Now for the EXCITING question — what will YOU do someday?`,
            `You don't have to decide now. People discover their work over time. But it's okay to start thinking. What do you LIKE doing? What are you GOOD at? What problems do you want to SOLVE? Some kids dream of being doctors. Others want to be artists. Some want to work with animals. Others with computers. Some want to write books. Others to build houses. There's no "right" job for everyone. The best work for YOU will probably combine — your interests + your skills + something that helps others + something that pays enough to live well. You'll discover it as you grow. And it might change over time. That's okay too. You have many years ahead — and so many possibilities.`,
          ],
          image: `/explorer-assets/social-studies/l14-s6-your-future.webp`,
          imageCaption: `Your future is open! What will YOU do? Combine: interests + skills + helping others + earning enough to live well.`,
          vocab: [
            { word: `interest`,       definition: `Something you LIKE to do or learn about. Your INTERESTS help guide your future work.`,
              audioPrompt: `An interest, {name}, is something you like to do or learn about. Your interests help guide your future work. Do you love drawing? Maybe an artist or designer. Love animals? Maybe a vet or zookeeper. Love how things work? Maybe an engineer or scientist. Following your interests often leads to fulfilling work. What you find interesting now is a hint about what work might suit you.` },
            { word: `discover`,       definition: `To FIND OUT. People DISCOVER their work over time — not all at once.`,
              audioPrompt: `To discover, {name}, is to find out. People discover their work over time — not all at once. You might love drawing as a kid but discover you also love science later. Or be a teacher first, then become a writer. Your work can change as you grow. That's okay. Most adults didn't always know what they wanted to do. They discovered through trying things, learning, and growing.` },
            { word: `possibilities`,  definition: `Many DIFFERENT OPTIONS. Your future has MANY POSSIBILITIES — you can choose.`,
              audioPrompt: `Possibilities, {name}, are many different options. Your future has many possibilities — you can choose. You're not stuck with one path. Some people have one job their whole life. Others have many over time. Both are okay. Most kids today will have several different jobs in their lives. The world is changing fast. Possibilities are growing. Your future is wide open.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `EVERY job in a community MATTERS — from trash collectors to surgeons, all are essential.`,
              matchPhrase: `Yes! Every job matters. Each worker contributes. Hospitals need both surgeons AND janitors. Cities need both presidents AND trash collectors. All work has value.`,
              correctMatch: `fact` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `JOBS need SKILLS — people LEARN through school, training, and practice.`,
              matchPhrase: `True! Different jobs need different skills. Skills come from training and practice. The more skilled, often the better you can do your job. Skills take time to build.`,
              correctMatch: `fact` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `Only a few jobs really matter — most jobs are WORTHLESS and don't add anything.`,
              matchPhrase: `Not at all! Every job adds something the community needs. Some get more attention than others. But all are essential. Without each kind of worker, life wouldn't function.`,
              correctMatch: `myth` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `Jobs need ZERO skills — anyone can do any job without any training or practice.`,
              matchPhrase: `Definitely not! Every job needs some skill. Doctors train for years. Plumbers learn through apprenticeships. Even "simple" jobs take time to learn well. Skills take time.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is a JOB?`,
              options: [`A type of food`, `WORK that someone does to EARN money and contribute`, `Only for kids`, `A type of game`],
              correctIndex: 1,
              explanation: `A job is work that someone does to earn money. Jobs are how adults contribute to communities and earn money to live. There are thousands of different jobs in the world.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `Why do communities NEED many different jobs?`,
              options: [`They don't`, `Different work is needed — doctors heal, farmers feed, teachers teach, etc.`, `Only one job is needed`, `Just by luck`],
              correctIndex: 1,
              explanation: `Communities need many different jobs because different work is needed. Doctors heal. Farmers feed. Teachers teach. Builders build. Each job exists because there's a need for that work.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What do jobs NEED?`,
              options: [`Just luck`, `SKILLS — learned through school, training, and practice`, `Only money`, `Only good clothes`],
              correctIndex: 1,
              explanation: `Jobs need skills. Different jobs need different skills. Skills come from school, training, and practice. The more skilled you are, often the better you can do that job.` },
            { id: `l14-q4`, format: `true-false`,
              question: `EVERY JOB MATTERS — from trash collectors to surgeons, all are essential to the community.`,
              correctAnswer: true,
              explanation: `True! Every job matters. Some get more glamor than others. But every one contributes. Hospitals need janitors. Cities need trash collectors. All work has value.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `People DISCOVER their work over time — they might combine their ___ with their skills to find good work.`,
              options: [`interests`, `phones`, `pencils`, `hats`],
              correctIndex: 0,
              explanation: `Interests! Combining your interests with your skills often leads to fulfilling work. What you love doing now is a hint about what work might suit you later.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's the BEST way to think about your future work?`,
              options: [`Don't think about it`, `Combine your INTERESTS + SKILLS + helping others + earning enough`, `Pick something you hate`, `Wait for someone to tell you`],
              correctIndex: 1,
              explanation: `Combine interests, skills, helping others, and earning enough. That's how people find work they truly love. You don't have to decide now — discover over time.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something exciting, {name}. Many jobs that EXIST TODAY didn't exist when your parents or grandparents were kids. SOFTWARE ENGINEER. APP DEVELOPER. SOCIAL MEDIA MANAGER. DRONE PILOT. PODCAST PRODUCER. ESPORTS PLAYER. SOLAR PANEL INSTALLER. New jobs appear all the time. Some old jobs disappear. By the time you're a working adult, there will be JOBS THAT DON'T EXIST YET. You might do one of those jobs. Or you might invent one yourself. The future of work is being created right now. The most important skill might be the ability to KEEP LEARNING — because the world keeps changing.`,
          familyAdventure: `Together, INTERVIEW family members about their work. Pick one or two adults in your family. Ask: 1) What is your job? 2) How did you choose it? 3) What's a typical day like? 4) What skills did you have to learn? 5) What do you like about it? Then talk about what you learned. Notice — each person's job has its own story. Their work is part of who they are.`,
          creativePrompt: `Imagine 3 DIFFERENT JOBS you might LOVE someday. Draw a picture of yourself doing each one. They can be totally different! Maybe a SCIENTIST in a lab. Maybe an ARTIST drawing comics. Maybe a CHEF in a restaurant. Maybe a VET helping animals. There are no wrong answers. Have fun. You're imagining your possible futures. The world has room for many YOUs.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now understand WORK and JOBS. There are THOUSANDS of different jobs. Each one CONTRIBUTES to the community. Each one needs SKILLS — learned through training and practice. EVERY job matters — from trash collectors to surgeons, all are essential. Someday YOU'LL do work too — combining your interests, skills, and what helps others. The world has so many possibilities. — Atlas 🐻`,
          badge:     `work-jobs-explorer`,
          badgeName: `Work and Jobs Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L14] Loaded: "Work and Jobs" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
