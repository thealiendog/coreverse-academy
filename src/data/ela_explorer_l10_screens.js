// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L10 — Literary Elements: Plot, Character, Setting, Conflict
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.3 / RL.2-3.5
// REWRITE v2 (May 2026): Grade 1 accessible, CHARACTER/SETTING/CONFLICT/PLOT
// 4-bucket identification game directly tests the four literary elements
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
          guideText: `Welcome back, {name}! Today's lesson is BIG. Every story is built from FOUR pieces — like building blocks! CHARACTER (who). SETTING (where and when). CONFLICT (the problem). PLOT (what happens). Spot all four and you understand stories at the BUILDING-BLOCK level. Let's go!`,
          headline: `Literary Elements: Plot, Character, Setting, Conflict`,
          subtitle: `The four building blocks of every story`,
          visual: `/explorer-assets/ela/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Four Building Blocks`,
          paragraphs: [
            `Imagine you're going to build a house. You need certain parts. Foundation. Walls. Roof. Doors!`,
            `Stories are the same! They need certain building blocks to work. Every story — from picture books to giant novels — uses these same FOUR. CHARACTER. SETTING. CONFLICT. PLOT. Knowing these is like getting the SECRET BLUEPRINT to all stories. Every book opens up!`,
          ],
          image: `/explorer-assets/ela/l10-s1-building-blocks.webp`,
          imageCaption: `Four building blocks: character, setting, conflict, plot. The blueprint of every story!`,
          vocab: [
            { word: `literary`,  definition: `Having to do with stories and books.`,
              audioPrompt: `Literary means having to do with stories and books. Literary elements are the parts of stories. Authors use them to build books. Readers spot them to understand books!` },
            { word: `element`,   definition: `One basic part of something bigger.`,
              audioPrompt: `An element is one basic part of something bigger. Stories have four main elements: character, setting, conflict, plot. Each does a different job. Together, they make a story!` },
            { word: `blueprint`, definition: `The plan for building something.`,
              audioPrompt: `A blueprint is the plan for building something. Builders use them for houses. Authors use literary elements like blueprints to make stories. Knowing the blueprint helps you read better!` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Block 1: CHARACTER`,
          paragraphs: [
            `CHARACTER is WHO the story is about! The people. The animals. The beings.`,
            `Some characters are MAIN — they show up the most. Others are SIDE — they help or hurt the main character. Some are heroes. Some are villains. Some are just regular folks! Characters have feelings, choices, and personalities. Without characters, there's no story. Characters are the WHO!`,
          ],
          image: `/explorer-assets/ela/l10-s2-character.webp`,
          imageCaption: `Character — the WHO of the story. People, animals, beings!`,
          vocab: [
            { word: `character`,      definition: `A person, animal, or being in a story.`,
              audioPrompt: `A character is a person, animal, or being in a story. Characters are the heart of stories. We connect with them. We feel along with them!` },
            { word: `main character`, definition: `The most important character.`,
              audioPrompt: `A main character is the most important character. The one the story is mostly about. They appear the most. They face the conflict. Harry Potter is the main character of his books!` },
            { word: `side character`, definition: `A supporting character.`,
              audioPrompt: `A side character supports the main character. They help. They hurt. They befriend. Some are super important. Some appear only briefly. All of them shape what happens!` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Block 2: SETTING`,
          paragraphs: [
            `SETTING is WHERE and WHEN the story takes place! The location AND the time.`,
            `Setting can be a tiny living room or a giant galaxy! The present day or 1,000 years ago. Real places or made-up worlds! Setting shapes what's POSSIBLE in the story. A story set in a forest is very different from one set on the moon. Setting is the WORLD the characters live in!`,
          ],
          image: `/explorer-assets/ela/l10-s3-setting.webp`,
          imageCaption: `Setting — WHERE and WHEN. The world of the story!`,
          vocab: [
            { word: `setting`,  definition: `WHERE and WHEN a story takes place.`,
              audioPrompt: `Setting is where and when a story takes place. Where = the location. When = the time. A story might be in a small town in 1980. Or on Mars in the year 3000!` },
            { word: `location`, definition: `WHERE — the place a story happens.`,
              audioPrompt: `Location is where — the place a story happens. A bedroom. A school. A spaceship. A forest. Location is half of setting!` },
            { word: `time`,     definition: `WHEN — past, present, or future.`,
              audioPrompt: `Time is when — the time period of a story. Past, present, or future. The 1500s. Tomorrow. Even just morning vs. midnight matters. Time is the second half of setting!` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Block 3: CONFLICT`,
          paragraphs: [
            `CONFLICT is the PROBLEM in the story! Something WRONG that needs to be fixed.`,
            `Without conflict, there's no story! "Maya was happy. She stayed happy. The end." That's not a story! But: "Maya lost her favorite necklace before her grandma's visit!" NOW we have a story. Conflict can be big or small. The conflict is the ENGINE that makes characters act!`,
          ],
          image: `/explorer-assets/ela/l10-s4-conflict.webp`,
          imageCaption: `Conflict — the PROBLEM. Without it, there's no story!`,
          vocab: [
            { word: `conflict`, definition: `A problem in a story.`,
              audioPrompt: `Conflict is a problem in a story. The thing that needs to be solved. Conflict is the ENGINE of every story. It makes characters DO things!` },
            { word: `problem`,  definition: `Something wrong that needs fixing.`,
              audioPrompt: `A problem is something wrong that needs fixing. In stories, we call problems CONFLICTS. A problem creates tension. Tension makes us want to know what happens next!` },
            { word: `engine`,   definition: `What drives something forward.`,
              audioPrompt: `An engine is what drives something forward. A car engine drives the car. Story conflict drives the story. Without an engine, nothing moves!` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Block 4: PLOT`,
          paragraphs: [
            `PLOT is WHAT HAPPENS in the story! The events. The actions. The journey from start to end.`,
            `Plot usually has a SHAPE. A BEGINNING (introduce characters and conflict). A MIDDLE (the action). An END (the problem gets solved, the characters change). Plot is the ARC of the story. The path the characters travel from start to finish!`,
          ],
          image: `/explorer-assets/ela/l10-s5-plot.webp`,
          imageCaption: `Plot — what happens. Beginning, middle, end. The arc of the story!`,
          vocab: [
            { word: `plot`,      definition: `What happens in a story.`,
              audioPrompt: `Plot is what happens in a story. The events. The actions. The journey from beginning to end. Plot is what makes a story FEEL like a story!` },
            { word: `beginning`, definition: `The start of a story.`,
              audioPrompt: `The beginning is the start of a story. It introduces the characters, shows the setting, and hints at the conflict. A good beginning hooks you — makes you want to keep reading!` },
            { word: `end`,       definition: `The finish.`,
              audioPrompt: `The end is the finish. By the end, the conflict is usually resolved. The problem is solved. The characters have changed. The story feels complete!` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Four Together`,
          paragraphs: [
            `Now you know all FOUR! Let's put them together with a tiny story.`,
            `CHARACTER: A girl named Lin. SETTING: A small town today. CONFLICT: Lin lost her grandma's necklace before grandma's visit! PLOT: Lin searches everywhere. She remembers playing in the garden. She digs. She finds it! Grandma arrives. They hug. THAT'S a story! Four elements working together!`,
          ],
          image: `/explorer-assets/ela/l10-s6-elements-together.webp`,
          imageCaption: `All four together = a story. Character + setting + conflict + plot!`,
          vocab: [
            { word: `together`, definition: `Working as one.`,
              audioPrompt: `Together means working as one. The four story elements work TOGETHER. None alone makes a story. Take any one away and the story falls apart!` },
            { word: `story`,    definition: `A tale made of all four elements.`,
              audioPrompt: `A story is a tale made of all four elements — character, setting, conflict, plot. Humans have been telling stories since the beginning of time!` },
            { word: `see`,      definition: `To notice clearly.`,
              audioPrompt: `To see means to notice clearly. You can now SEE the four elements in any story. Character — who? Setting — where and when? Conflict — what's the problem? Plot — what happens?` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 pieces of a story. Drag each one into its element — character, setting, conflict, or plot!`,
          buckets: [
            { id: `character`, label: `👤 CHARACTER`, color: `#FBBF24` },
            { id: `setting`,   label: `🌍 SETTING`,   color: `#34D399` },
            { id: `conflict`,  label: `⚠️ CONFLICT`,  color: `#F87171` },
            { id: `plot`,      label: `📖 PLOT`,      color: `#A78BFA` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `A girl named Lin who loves her grandma.`,
              matchPhrase: `Yes! That's CHARACTER — WHO the story is about!`,
              correctMatch: `character` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `A small town on a sunny afternoon.`,
              matchPhrase: `Great! That's SETTING — where AND when the story happens!`,
              correctMatch: `setting` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `Lin lost her grandma's special necklace.`,
              matchPhrase: `Yes! That's CONFLICT — the problem that needs to be solved!`,
              correctMatch: `conflict` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `Lin searches the house, then the garden. She digs and finds the necklace!`,
              matchPhrase: `Perfect! That's PLOT — what HAPPENS in the story!`,
              correctMatch: `plot` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What are the FOUR literary elements?`,
              options: [`Title, author, pages, cover`, `Character, setting, conflict, plot`, `Beginning, middle, end, the end`, `Red, blue, green, yellow`],
              correctIndex: 1,
              explanation: `Character (who), setting (where/when), conflict (the problem), plot (what happens). The four building blocks of every story!` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `What is a CHARACTER?`,
              options: [`A letter`, `A person, animal, or being in the story`, `The cover`, `A type of pizza`],
              correctIndex: 1,
              explanation: `A character is a person, animal, or being in a story. Some main, some side. Stories need characters!` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `What does SETTING include?`,
              options: [`Just the location`, `WHERE and WHEN the story takes place`, `Just the time`, `What characters wear`],
              correctIndex: 1,
              explanation: `Setting is both WHERE (location) and WHEN (time). Together they create the world of the story!` },
            { id: `l10-q4`, format: `true-false`,
              question: `CONFLICT is the problem that drives the story forward.`,
              correctAnswer: true,
              explanation: `True! Conflict is the engine of every story. Without a problem, characters wouldn't need to act!` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `___ is what happens in the story — the events from beginning to end.`,
              options: [`Plot`, `Pizza`, `Pencil`, `Painting`],
              correctIndex: 0,
              explanation: `Plot! The plot is what happens — the journey of events. It has a shape: beginning, middle, end!` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `Why do all FOUR elements need to work together?`,
              options: [`They don't`, `Each does an essential job — take one away and the story falls apart`, `Just because`, `Authors get bored`],
              correctIndex: 1,
              explanation: `Each element does an essential job. Take character away — no one to follow. Take setting away — no world. Take conflict — nothing to fix. Take plot — nothing happens!` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The four literary elements aren't just in books! They're in MOVIES. TV shows. Video games. Plays. Even commercials and jokes! Humans have used these same four elements to tell stories for THOUSANDS of years. Some things never go out of style!`,
          familyAdventure: `Pick a favorite story together — book, movie, anything! Take a paper and divide it into FOUR sections. Label them CHARACTER, SETTING, CONFLICT, PLOT. Fill each section in together. Who? Where and when? What's the problem? What happens? See how all four hold up the story!`,
          creativePrompt: `Make your OWN story using all four elements! Write CHARACTER (pick a person or animal). SETTING (where and when). CONFLICT (what's the problem?). PLOT (what happens — beginning, middle, end?). Just a paragraph! Read it to someone. Watch them experience all four at once!`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know the FOUR literary elements — character, setting, conflict, and plot! You have the blueprint. You have reader X-RAY VISION! You can see how stories are BUILT. This is one of the most important reading skills you'll ever own. Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L10] Loaded: "Literary Elements" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
