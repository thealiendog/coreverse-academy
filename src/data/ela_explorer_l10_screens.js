// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L10 — Literary Elements: Plot, Character, Setting, Conflict
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.3 / RL.2-3.5
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L10 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-10`,
      title:     `Literary Elements: Plot, Character, Setting, Conflict`,
      duration:  12,
      xpReward:  50,
      badge:     `elements-explorer`,
      badgeName: `Elements Explorer`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Today's lesson is BIG. Every single story you've ever read is built from FOUR pieces — like building blocks for stories. The pieces are: CHARACTER (who), SETTING (where and when), CONFLICT (the problem), and PLOT (what happens). Once you can spot all four in any story, you understand stories AT THE BUILDING-BLOCK LEVEL. Let me show you.`,
          headline: `Literary Elements: Plot, Character, Setting, Conflict`,
          subtitle: `The four building blocks of every story — and how to spot them all`,
          visual: `/explorer-assets/ela/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Four Building Blocks`,
          paragraphs: [
            `Imagine you're going to build a house. You need certain BASIC parts. Foundation. Walls. Roof. Doors.`,
            `Stories are the same. They need certain basic building blocks to work. Every story — from picture books to giant novels — uses these same four. CHARACTER. SETTING. CONFLICT. PLOT. Knowing these four is like getting the secret blueprint to ALL stories. Once you can see them, every book opens up to you.`,
          ],
          image: `/explorer-assets/ela/l10-s1-building-blocks.webp`,
          imageCaption: `Four building blocks. Character. Setting. Conflict. Plot. The blueprint of every story.`,
          vocab: [
            { word: `literary`,      definition: `Having to do with stories and books. Literary elements are the parts of stories.`,
              audioPrompt: `Literary, {name}, means having to do with stories and books. Literary elements are the parts of stories. The building blocks. Authors use these literary elements to build their books. Readers spot them to understand the books. The word 'literary' is just a fancy way of saying 'about stories.'` },
            { word: `element`,       definition: `One basic part of something bigger. Stories have FOUR main elements.`,
              audioPrompt: `An element, {name}, is one basic part of something bigger. Stories have four main elements: character, setting, conflict, and plot. Each one is essential. Each one does a different job. Together, they make a story. Spot one — you understand a piece. Spot all four — you understand the whole story.` },
            { word: `blueprint`,     definition: `The plan for building something. Literary elements are like a story's BLUEPRINT.`,
              audioPrompt: `A blueprint, {name}, is the plan for building something. Builders use blueprints to make houses. Authors use literary elements like blueprints to make stories. The four elements are like the four sections of every story blueprint. They tell you what's WHERE and WHO and WHEN and WHY.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Element 1: CHARACTER`,
          paragraphs: [
            `CHARACTER is WHO the story is about. The people. The animals. The beings.`,
            `Some characters are MAIN — they show up the most and matter the most. Others are SIDE — they help, hurt, or change the main characters. Some are heroes. Some are villains. Some are just regular folks. Characters have feelings, choices, and personalities. Without characters, there's no story. Characters are the WHO of every tale.`,
          ],
          image: `/explorer-assets/ela/l10-s2-character.webp`,
          imageCaption: `Character — the WHO of the story. The people, animals, beings. Some main, some side. All with feelings.`,
          vocab: [
            { word: `character`,     definition: `A person, animal, or being in a story. Stories need CHARACTERS.`,
              audioPrompt: `A character, {name}, is a person, animal, or being in a story. Characters are the heart of stories. We connect with them. We feel along with them. We learn from them. Some are real (in true stories).` },
            { word: `main character`, definition: `The most important character. The one the story is mostly about.`,
              audioPrompt: `A main character, {name}, is the most important character. The one the story is mostly about. They appear the most. They face the conflict. They grow and change. Harry Potter is the main character of his books.` },
            { word: `side character`, definition: `A supporting character. Helps, hurts, or changes the main character.`,
              audioPrompt: `A side character, {name}, supports the main character. They help. They hurt. They challenge. They befriend. Side characters are like the family and friends in the main character's world. Some are super important. Some appear only briefly. But all of them shape what happens.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Element 2: SETTING`,
          paragraphs: [
            `SETTING is WHERE and WHEN the story takes place. The location AND the time.`,
            `Setting can be a tiny living room or an enormous galaxy. The present day or 1,000 years ago. Real places or made-up worlds. Setting matters because it shapes what's POSSIBLE in the story. A story set in a forest is different from a story set on the moon. Setting is the WORLD the characters live in.`,
          ],
          image: `/explorer-assets/ela/l10-s3-setting.webp`,
          imageCaption: `Setting — WHERE and WHEN. The world of the story. From tiny rooms to giant galaxies. Past, present, future.`,
          vocab: [
            { word: `setting`,       definition: `WHERE and WHEN a story takes place. The location and time.`,
              audioPrompt: `Setting, {name}, is where and when a story takes place. Where = the location. When = the time. A story might be set in a small town in 1980. Or on Mars in the year 3000.` },
            { word: `location`,      definition: `WHERE. The place a story happens. Forest, school, planet — all locations.`,
              audioPrompt: `Location, {name}, is where — the place a story happens. A bedroom. A school. A spaceship. A forest. A planet. Location is half of setting. It tells you what the characters see, hear, smell, and touch every day. Different locations create different stories.` },
            { word: `time`,          definition: `WHEN. Past, present, future. Time is the second half of setting.`,
              audioPrompt: `Time, {name}, is when — the time period of a story. Past, present, or future. The 1500s. The 1990s. Tomorrow. A hundred years from now. Even just morning vs. midnight matters. Time is the second half of setting.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Element 3: CONFLICT`,
          paragraphs: [
            `CONFLICT is the PROBLEM in the story. Something WRONG that needs to be fixed.`,
            `Without conflict, there's nothing to read about. "Maya was happy. She stayed happy. The end." That's not a story. But: "Maya lost her favorite necklace. She had to find it before her grandma's visit." Now we have a STORY. Conflict can be big or small. External (a problem in the world) or internal (a problem inside a character). Without conflict, no story.`,
          ],
          image: `/explorer-assets/ela/l10-s4-conflict.webp`,
          imageCaption: `Conflict — the PROBLEM. Something wrong that needs fixing. Without conflict, there's no story.`,
          vocab: [
            { word: `conflict`,      definition: `A problem in a story. The thing that needs to be solved.`,
              audioPrompt: `Conflict, {name}, is a problem in a story. The thing that needs to be solved. Conflict is the ENGINE of every story. It's what makes characters DO things. Without a problem, characters wouldn't need to act.` },
            { word: `problem`,       definition: `Something wrong that needs fixing. Conflict = PROBLEM in story language.`,
              audioPrompt: `A problem, {name}, is something wrong that needs fixing. In stories, we usually call problems CONFLICTS. Same idea. Different word. A problem creates tension. Tension makes us want to know what happens. We keep reading because we want to see the problem solved. That's the power of conflict.` },
            { word: `engine`,        definition: `What drives something forward. Conflict is the ENGINE of every story.`,
              audioPrompt: `An engine, {name}, is what drives something forward. A car engine drives the car. Story conflict drives the story. Without an engine, a car can't move. Without conflict, a story can't move. That's why authors always create a problem early. The problem is the engine that powers everything else.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Element 4: PLOT`,
          paragraphs: [
            `PLOT is WHAT HAPPENS in the story. The events. The actions. The journey from start to end.`,
            `Plot usually has a SHAPE. A BEGINNING (introduce characters and the conflict), a MIDDLE (the action — characters try to solve the problem), and an END (the problem gets solved, the characters change). Sometimes there's a peak in the middle — the most exciting moment — called the CLIMAX. Plot is the ARC of the story. The path the characters travel.`,
          ],
          image: `/explorer-assets/ela/l10-s5-plot.webp`,
          imageCaption: `Plot — the arc. Beginning, middle, end. The journey from problem to solution. The path the characters travel.`,
          vocab: [
            { word: `plot`,          definition: `What happens in a story. The events from beginning to end.`,
              audioPrompt: `Plot, {name}, is what happens in a story. The events. The actions. The journey from beginning to end. Plot is what makes a story FEEL like a story. Things happen. They lead to other things. They build toward an ending.` },
            { word: `beginning`,     definition: `The start. The beginning introduces characters, setting, and conflict.`,
              audioPrompt: `The beginning, {name}, is the start of a story. The beginning has an important job. It introduces the characters — who's the story about? It shows the setting — where and when? It hints at the conflict — what's the problem? A good beginning hooks you. It makes you want to keep reading.` },
            { word: `end`,           definition: `The finish. The end resolves the conflict and shows how characters changed.`,
              audioPrompt: `The end, {name}, is the finish of a story. By the end, the conflict is usually resolved. The problem is solved (or sometimes left unsolved on purpose). The characters have changed. We've learned something.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Four Together`,
          paragraphs: [
            `Now you know all FOUR. Let's put them together with a tiny story.`,
            `CHARACTER: A girl named Lin. SETTING: A small town today. CONFLICT: Lin lost her grandmother's necklace before grandma's visit. PLOT: Lin searches everywhere. She remembers playing in the garden. She digs. She finds it. Grandma arrives. Lin gives her the necklace. They hug. THAT'S a story. Four elements. Working together. Every story you read is built this same way. Now you have the eyes to see it.`,
          ],
          image: `/explorer-assets/ela/l10-s6-elements-together.webp`,
          imageCaption: `All four elements together = a story. Character + setting + conflict + plot. The blueprint of all stories.`,
          vocab: [
            { word: `together`,      definition: `Working as one. All four elements work TOGETHER to make a story.`,
              audioPrompt: `Together, {name}, means working as one. The four story elements work TOGETHER. None of them alone makes a story. But together — they make magic. Take any one away and the story falls apart. No character? No one to follow.` },
            { word: `story`,         definition: `A tale made of all four elements. STORIES are why we read.`,
              audioPrompt: `A story, {name}, is a tale made of all four elements — character, setting, conflict, and plot. Humans have been telling stories since the beginning of time. Around campfires. In caves. In books. Through movies.` },
            { word: `see`,           definition: `To notice clearly. You can now SEE the four elements in any story.`,
              audioPrompt: `To see, {name}, means to notice clearly. You can now SEE the four elements in any story you read. Character — who is this about? Setting — where and when? Conflict — what's the problem? Plot — what happens?` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `Every story is built from FOUR elements — character, setting, conflict, and plot.`,
              matchPhrase: `Yes! The four building blocks of every story. Character (who), setting (where/when), conflict (problem), plot (what happens). Spot all four to understand any story.`,
              correctMatch: `fact` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `Conflict is the ENGINE that drives every story forward.`,
              matchPhrase: `True! Without a problem to solve, there's no story. Conflict gives characters something to DO — and gives readers something to care about. Conflict drives everything.`,
              correctMatch: `fact` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `Stories don't need any setting — characters just float in empty white space.`,
              matchPhrase: `Definitely not! Every story has a setting — the WHERE and WHEN. Even simple stories show their location and time. Without setting, characters have no world to live in.`,
              correctMatch: `myth` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `A story can be built with just ONE element and skip the other three.`,
              matchPhrase: `No way! Stories need all four elements working together. Take any one away and the story collapses. All four are essential. That's the blueprint.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What are the FOUR literary elements?`,
              options: [`Title, author, pages, cover`, `Character, setting, conflict, plot`, `Beginning, middle, end, the end`, `Red, blue, green, yellow`],
              correctIndex: 1,
              explanation: `The four literary elements are CHARACTER (who), SETTING (where and when), CONFLICT (the problem), and PLOT (what happens). The four building blocks of every story.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `What is a CHARACTER in a story?`,
              options: [`A letter of the alphabet`, `A person, animal, or being in the story`, `The cover of the book`, `A type of pizza`],
              correctIndex: 1,
              explanation: `A character is a person, animal, or being in a story. Characters can be main (the most important) or side (supporting). Stories need characters.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `What does SETTING include?`,
              options: [`Just the location`, `WHERE and WHEN the story takes place`, `Just the time period`, `Only what the characters wear`],
              correctIndex: 1,
              explanation: `Setting is both WHERE (the location) and WHEN (the time). Together, they create the world the characters live in.` },
            { id: `l10-q4`, format: `true-false`,
              question: `CONFLICT is the problem that drives the story forward.`,
              correctAnswer: true,
              explanation: `True! Conflict is the engine of every story. Without a problem to solve, characters wouldn't need to act. Conflict gives stories their tension and direction.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `___ is what happens in the story — the events from beginning to end.`,
              options: [`Plot`, `Pizza`, `Pencil`, `Painting`],
              correctIndex: 0,
              explanation: `Plot! The plot is what happens — the journey of events from beginning to end. It usually has a shape: beginning, middle, end.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `Why do all FOUR elements need to work together?`,
              options: [`They don't need each other`, `Because each one does a different essential job — take one away and the story falls apart`, `Because authors get bored`, `Just because`],
              correctIndex: 1,
              explanation: `Each element does an essential job. Take character away — no one to follow. Take setting away — floating in a void. Take conflict away — nothing to fix. Take plot away — nothing happens. All four together = a story.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The four literary elements aren't just in books. They're in MOVIES. TV shows. Video games. Plays. Even in commercials and jokes that tell tiny stories. Humans have been telling stories with these same four elements for THOUSANDS of years. Ancient cave paintings used them. Greek myths used them. Modern Netflix shows still use them. Some things never go out of style.`,
          familyAdventure: `Pick a favorite story together — book, movie, anything. Take a piece of paper and divide it into FOUR sections. Label them CHARACTER, SETTING, CONFLICT, PLOT. Fill each section in together for that story. Who? Where and when? What's the problem? What happens? See how all four hold up the story.`,
          creativePrompt: `Make your OWN story using all four elements. On a paper, write CHARACTER (pick a person or animal). SETTING (pick a where and when). CONFLICT (pick a problem). PLOT (sketch what happens — beginning, middle, end). It can be very short. Just a paragraph! But include all four elements. Read your story to someone. Watch them experience all four parts at once.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know the FOUR literary elements that make up every story — character, setting, conflict, and plot. You have the blueprint. You have reader X-ray vision. You can see how stories are BUILT. This is one of the most important reading skills you'll ever own. We'll keep using these four for many lessons to come. I'm proud of you. Thank you for journeying with me.`,
          badge: `elements-explorer`,
          badgeName: `Elements Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L10] Loaded: "Literary Elements: Plot, Character, Setting, Conflict" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
