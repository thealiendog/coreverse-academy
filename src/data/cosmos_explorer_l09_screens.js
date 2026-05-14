// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 9
// "Simple Machines: Making Work Easier"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-09',
      title:     `Simple Machines: Making Work Easier`,
      duration:  12,
      xpReward:  50,
      badge:     'engineer',
      badgeName: `Engineer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The ancient Egyptians built the pyramids with no motors, no cranes, and no computers. They used simple machines — the same basic tools that are hidden inside almost every modern device you use today. Simple machines are the foundation of all engineering.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Six Simple Machines`,
          paragraphs: [
            `A simple machine changes a force to make work easier. There are six types: the lever, wheel and axle, pulley, inclined plane (ramp), wedge, and screw.`,
            `They have no engine or motor. They use only your strength — but they let you do things that would otherwise be impossible.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s1-six-machines.png',
          imageCaption: `The six simple machines — the engineering toolkit ancient builders used to move the world`,
          vocab: [
            { word: 'simple machine', definition: `A tool that changes a force to make work easier. The six simple machines are the building blocks of all engineering.`, audioPrompt: `Simple machine — a tool that changes a force to make work easier. The six simple machines are the building blocks of all engineering.` },
            { word: 'force',          definition: `A push or pull on an object. Simple machines change the direction or size of a force to make hard work easier.`, audioPrompt: `Force — a push or pull on an object. Simple machines change the direction or size of a force to make hard work easier.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Levers`,
          paragraphs: [
            `A lever is a rigid bar that pivots on a fixed point called a fulcrum. When you push down on one side, the other side goes up.`,
            `A seesaw is a lever. Your forearm is also a lever — your elbow is the fulcrum, and your bicep is the force.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s2-lever.png',
          imageCaption: `A lever — a rigid bar pivoting on a fulcrum, multiplying force`,
          vocab: [
            { word: 'lever',   definition: `A rigid bar that pivots on a fulcrum. Levers multiply force — they let you lift heavy things with less effort.`, audioPrompt: `Lever — a rigid bar that pivots on a fulcrum. Levers multiply force. They let you lift heavy things with less effort.` },
            { word: 'fulcrum', definition: `The fixed pivot point that a lever rotates around. Move the fulcrum closer to the load, and lifting gets even easier.`, audioPrompt: `Fulcrum — the fixed pivot point that a lever rotates around. Move the fulcrum closer to the load, and lifting gets even easier.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Pulleys`,
          paragraphs: [
            `A pulley is a wheel with a groove for a rope. When you pull down on one side, the load on the other side rises.`,
            `Connecting multiple pulleys together — called a block and tackle — multiplies the force dramatically. Cranes, elevators, and sailing ships all use pulley systems.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s3-pulley.png',
          imageCaption: `A pulley — pull down on one side, the load rises on the other`,
          vocab: [
            { word: 'pulley',           definition: `A wheel with a groove for a rope. Pull down on one side and the load on the other side rises.`, audioPrompt: `Pulley — a wheel with a groove for a rope. Pull down on one side and the load on the other side rises.` },
            { word: 'block and tackle', definition: `Multiple pulleys connected together — they multiply force dramatically. Cranes, elevators, and sailing ships use block and tackle systems.`, audioPrompt: `Block and tackle — multiple pulleys connected together. They multiply force dramatically. Cranes, elevators, and sailing ships use block and tackle systems.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Ramps and Wedges`,
          paragraphs: [
            `A ramp — an inclined plane — lets you move a heavy object higher using less force. The trade-off: you travel a longer distance.`,
            `A wedge is two ramps back to back, forming a pointed shape. Axes, knives, and even your front teeth are wedges.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s4-ramp-wedge.png',
          imageCaption: `A ramp lifts you up with less force. A wedge splits things apart.`,
          vocab: [
            { word: 'inclined plane', definition: `A flat surface set at an angle — a ramp. It lets you move heavy things higher using less force, but over a longer distance.`, audioPrompt: `Inclined plane — a flat surface set at an angle, a ramp. It lets you move heavy things higher using less force, but over a longer distance.` },
            { word: 'wedge',          definition: `Two inclined planes back to back, forming a pointed shape. A wedge converts downward force into sideways force — splitting things apart.`, audioPrompt: `Wedge — two inclined planes back to back, forming a pointed shape. A wedge converts downward force into sideways force, splitting things apart.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Screws`,
          paragraphs: [
            `A screw is an inclined plane wrapped in a spiral around a cylinder. When you turn it, the spiral acts like a ramp.`,
            `A gentle twisting motion creates enormous force — strong enough to pull surfaces tightly together. That's why screws hold things together so well.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s5-screw.png',
          imageCaption: `A screw is a ramp wrapped in a spiral — small turn, huge force`,
          vocab: [
            { word: 'screw',  definition: `An inclined plane wrapped in a spiral around a cylinder. A small turn creates enormous force — that's why screws hold things tight.`, audioPrompt: `Screw — an inclined plane wrapped in a spiral around a cylinder. A small turn creates enormous force. That's why screws hold things tight.` },
            { word: 'spiral', definition: `A curve that winds around and around, getting closer to or farther from a center. Screws have spiral threads wrapped around them.`, audioPrompt: `Spiral — a curve that winds around and around, getting closer to or farther from a center. Screws have spiral threads wrapped around them.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `They're Everywhere`,
          paragraphs: [
            `Once you know what to look for, simple machines are everywhere. Scissors are levers. A doorknob is a wheel and axle. A knife is a wedge.`,
            `Every complex machine — engines, robots, spacecraft — is a combination of these same six simple machines. The basics never change.`,
          ],
          image:        '/explorer-assets/cosmos/l09-s6-everywhere.png',
          imageCaption: `Simple machines are hidden inside almost every tool you touch`,
          vocab: [
            { word: 'complex machine',      definition: `A combination of simple machines working together — like engines, robots, and spacecraft. Even the most advanced tech uses the six simple machines.`, audioPrompt: `Complex machine — a combination of simple machines working together, like engines, robots, and spacecraft. Even the most advanced tech uses the six simple machines.` },
            { word: 'mechanical advantage', definition: `How much a simple machine multiplies your force. A high mechanical advantage means you can move heavy loads with less effort.`, audioPrompt: `Mechanical advantage — how much a simple machine multiplies your force. A high mechanical advantage means you can move heavy loads with less effort.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which simple machine it shows!`,
          guideText:     `Simple machines are everywhere — you just have to know what to look for. Each of these everyday objects uses one of the six simple machines. Can you match each one to the right type?`,
          columnHeaders: [`The Object`, `Simple Machine`],
          items: [
            { image: 'l09-game-scissors.png',  label: `Scissors: two blades crossing at a pivot point, cutting with mechanical advantage.`,                                 correctMatch: 'lever',          objectPosition: 'center 50%', matchPhrase: `Lever! Each blade of scissors is a lever, with the pivot screw as the fulcrum. Squeezing the handles at one end applies force that is multiplied at the cutting edge at the other end. Most cutting tools — pliers, bolt cutters, nutcrackers — are levers.` },
            { image: 'l09-game-ramp.png',      label: `A ramp at a building entrance allowing heavy loads to be moved upward with less force.`,                             correctMatch: 'inclined-plane', objectPosition: 'center 50%', matchPhrase: `Inclined plane! A ramp lets you trade force for distance — less effort to move something up, but you travel a longer path. Without ramps, moving anything heavy to a higher level would require far more force. This is how the Egyptians moved pyramid stones.` },
            { image: 'l09-game-axe.png',       label: `An axe blade driving into a log and splitting it apart with a downward strike.`,                                     correctMatch: 'wedge',          objectPosition: 'center 50%', matchPhrase: `Wedge! An axe blade is a wedge — it converts the downward force of a swing into outward force that splits the wood apart. The sharper and thinner the wedge, the less force it takes to drive it in. Knives, chisels, and even your front teeth are all wedges.` },
            { image: 'l09-game-flagpole.png',  label: `A flagpole rope where you pull down to make the flag go up at the top of the pole.`,                                 correctMatch: 'pulley',         objectPosition: 'center 50%', matchPhrase: `Pulley! Pull down on one side and the other side rises — clever, right? Multiple pulleys together can let you lift things many times your own weight. Flagpoles, cranes, elevators, and sailing ships all use pulley systems to move heavy loads.` },
          ],
          buckets: [
            { id: 'lever',          label: `⚖️ Lever`,          color: '#34D399' },
            { id: 'inclined-plane', label: `📐 Inclined Plane`, color: '#60A5FA' },
            { id: 'wedge',          label: `🔪 Wedge`,          color: '#F59E0B' },
            { id: 'pulley',         label: `⚙️ Pulley`,         color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about simple machines. Answer all 6 questions to earn your Engineer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `How many types of simple machines are there?`,
              options:      [`3`, `4`, `6`, `10`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is a fulcrum?`,
              options:      [`The load being lifted`, `The force applied to a lever`, `The fixed pivot point that a lever rotates around`, `A type of pulley`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `How is a screw related to an inclined plane?`,
              options:      [`They are completely different machines`, `A screw is an inclined plane wrapped in a spiral around a cylinder`, `Screws use pulleys to work`, `An inclined plane is a type of screw`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `All complex machines are combinations of the six simple machines.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A seesaw is an example of a ___, one of the six simple machines.`,
              options:      [`lever`, `pulley`, `wedge`, `screw`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does an inclined plane (ramp) allow you to do?`,
              options:      [`Cut materials in half`, `Move a heavy object to a higher level using less force`, `Bounce force in a new direction`, `Spin an object at high speed`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Walk through your home and find one example of each of the six simple machines — how many can you spot?`,
          familyAdventure: `Try a real lever experiment: find a long board (or use a seesaw at a playground). Place a heavy object on one end. Where do you need to put the fulcrum (a brick, a log) to be able to lift the heavy object with just one hand? Move the fulcrum to different positions and notice how it changes your effort.`,
          creativePrompt:  `Walk through your home and find at least one example of each of the six simple machines: lever, wheel and axle, pulley, inclined plane, wedge, and screw. Some might be less obvious — look inside drawers, in the kitchen, in the garage. Draw what you find and label which simple machine each one is.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'engineer',
          badgeName: `Engineer`,
          message:   `Brilliant work, {name}! You now know that the same six simple machines the ancient Egyptians used to build the pyramids are hiding inside almost every tool you touch today — and even inside your own arm. Simple ideas. Extraordinary power. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L09] Loaded: "Simple Machines: Making Work Easier" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l09-s1-six-machines.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-s2-lever.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-s3-pulley.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-s4-ramp-wedge.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-s5-screw.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-s6-everywhere.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L09] six-machines: ${r1.ok}, lever: ${r2.ok}, pulley: ${r3.ok}, ramp-wedge: ${r4.ok}, screw: ${r5.ok}, everywhere: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L09] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l09_screens;
