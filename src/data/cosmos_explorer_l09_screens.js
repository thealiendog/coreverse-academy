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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Simple Machine?`,
          paragraphs: [
            `A simple machine is a device that changes a force to make work easier. There are six types: the lever, the wheel and axle, the pulley, the inclined plane (ramp), the wedge, and the screw. All of them work by either multiplying force — letting you lift heavy things with less effort — or changing the direction of force.`,
            `They have no engine, no battery, and no motor. The only energy comes from you. But by changing the way force is applied, they let you do things that would otherwise be impossible — moving enormous stones, splitting hard wood, lifting heavy loads to great heights.`,
            `Simple machines don't reduce the amount of work you do in a physics sense. They trade force for distance — you push less hard, but over a longer distance. The total energy is the same. But the force required at any one moment becomes manageable.`,
          ],
          image:        '/explorer-assets/cosmos/l09-magazine-simple-machines.png',
          imageCaption: `The six simple machines — lever, wheel and axle, pulley, inclined plane, wedge, and screw`,
          vocab: [
            { word: 'simple machine', definition: `A device that uses a single force to do work — the six simple machines change the size or direction of a force to make tasks that would otherwise be impossible much easier.`, audioPrompt: `Simple machine — a device that uses a single force to do work. The six simple machines change the size or direction of a force to make tasks that would otherwise be impossible much easier.` },
            { word: 'force',          definition: `A push or pull applied to an object — simple machines change the direction or magnitude of force, allowing you to move heavy objects or do work more efficiently.`,          audioPrompt: `Force — a push or pull applied to an object. Simple machines change the direction or magnitude of force, allowing you to move heavy objects or do work more efficiently.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Levers and Pulleys`,
          paragraphs: [
            `A lever is a rigid bar that pivots on a fixed point called a fulcrum. When you push down on one side, the other side goes up. A seesaw is a lever — your weight on one end lifts your friend on the other. By moving the fulcrum closer to the load, you can lift objects much heavier than you could lift directly.`,
            `Ancient builders used levers to move enormous stone blocks — the same principle that lets a small child lift a heavy adult on a seesaw, as long as the fulcrum is positioned correctly. Your forearm is a lever, your elbow is the fulcrum, and your bicep is the force.`,
            `A pulley is a wheel with a groove for a rope. When you pull down on one side, the load on the other side rises. Using multiple pulleys connected together — called a block and tackle — multiplies the force dramatically. Cranes, elevators, and sailing ships all use pulley systems.`,
          ],
          image:        '/explorer-assets/cosmos/l09-magazine-levers-pulleys.png',
          imageCaption: `Levers and pulleys — multiplying force with a fulcrum and with rope over wheels`,
          vocab: [
            { word: 'lever',   definition: `A rigid bar that pivots on a fulcrum — levers can multiply force, allowing you to lift heavy objects with less effort by positioning the fulcrum correctly.`, audioPrompt: `Lever — a rigid bar that pivots on a fulcrum. Levers can multiply force, allowing you to lift heavy objects with less effort by positioning the fulcrum correctly.` },
            { word: 'fulcrum', definition: `The fixed pivot point that a lever rotates around — moving the fulcrum closer to the load increases the mechanical advantage and makes lifting easier.`,         audioPrompt: `Fulcrum — the fixed pivot point that a lever rotates around. Moving the fulcrum closer to the load increases the mechanical advantage and makes lifting easier.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Ramps, Wedges, and Screws`,
          paragraphs: [
            `An inclined plane — a ramp — lets you move a heavy object to a higher level using less force than lifting it straight up. The trade-off: you travel a longer distance. A long gentle ramp requires less force than a short steep one, but you walk further. The ancient Egyptians almost certainly used ramps to raise the massive stones of the pyramids.`,
            `A wedge is two inclined planes placed back to back, forming a pointed shape. When you drive a wedge into something, it converts a downward force into sideways force — splitting things apart. An axe blade is a wedge. A knife is a wedge. Even your front teeth are wedge-shaped to bite into food.`,
            `A screw is an inclined plane wrapped in a spiral around a cylinder. When you turn a screw, the helical thread acts like a ramp — pulling surfaces together with enormous force from just a gentle twisting motion. Screw threads convert rotational force into linear force, which is why screws can hold things together so strongly.`,
          ],
          image:        '/explorer-assets/cosmos/l09-magazine-ramps-wedges-screws.png',
          imageCaption: `Ramps, wedges, and screws — three variations of the inclined plane, each with a different job`,
          vocab: [
            { word: 'inclined plane', definition: `A flat surface set at an angle — a ramp. It allows heavy objects to be moved to a higher level using less force, but over a longer distance.`, audioPrompt: `Inclined plane — a flat surface set at an angle, a ramp. It allows heavy objects to be moved to a higher level using less force, but over a longer distance.` },
            { word: 'wedge',          definition: `Two inclined planes placed back to back — a wedge converts downward force into sideways force, splitting materials apart. Axes, knives, and teeth are all wedges.`, audioPrompt: `Wedge — two inclined planes placed back to back. A wedge converts downward force into sideways force, splitting materials apart. Axes, knives, and teeth are all wedges.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Simple Machines Are Everywhere`,
          paragraphs: [
            `Once you know what to look for, simple machines are everywhere. Scissors are two levers joined at a pivot. A doorknob is a wheel and axle. Stairs are inclined planes. A knife is a wedge. A jar lid is a screw. Venetian blinds use pulleys. Every complex machine is a combination of simple machines working together.`,
            `Your body is full of simple machines too. Your forearm is a lever with your elbow as the fulcrum and your bicep providing the force. Your spine is a kind of lever. Your fingernails are wedges. Even the bones and tendons in your hand use lever principles when you grip something.`,
            `The six simple machines were identified and described thousands of years ago by ancient Greek scientists — and they are still the complete toolkit. Modern engines, robots, and spacecraft are all combinations of these same six fundamental principles. The basics never change.`,
          ],
          image:        '/explorer-assets/cosmos/l09-magazine-machines-everywhere.png',
          imageCaption: `Simple machines everywhere — scissors, stairs, jar lids, and even your own body`,
          vocab: [
            { word: 'mechanical advantage', definition: `The factor by which a simple machine multiplies force — a high mechanical advantage means you can move a very heavy load with relatively little effort.`,      audioPrompt: `Mechanical advantage — the factor by which a simple machine multiplies force. A high mechanical advantage means you can move a very heavy load with relatively little effort.` },
            { word: 'screw',                definition: `An inclined plane wrapped in a spiral around a cylinder — when turned, the helical thread converts rotational force into powerful linear force, holding things tightly.`, audioPrompt: `Screw — an inclined plane wrapped in a spiral around a cylinder. When turned, the helical thread converts rotational force into powerful linear force, holding things tightly.` },
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
    fetch('/explorer-assets/cosmos/l09-magazine-simple-machines.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-magazine-levers-pulleys.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-magazine-ramps-wedges-screws.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l09-magazine-machines-everywhere.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L09] simple-machines: ${r1.ok}, levers-pulleys: ${r2.ok}, ramps-wedges-screws: ${r3.ok}, machines-everywhere: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L09] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l09_screens;
