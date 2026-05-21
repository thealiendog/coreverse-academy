// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L06 — The Human Body: Your Amazing Machine
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 4-LS1-1
// REWRITE v2 (May 2026): Grade 1 accessible, SKELETON / MUSCLES / HEART 3-bucket
// identification game tests matching body jobs to the right system
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L06 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-06`,
      title:     `The Human Body: Your Amazing Machine`,
      duration:  12,
      xpReward:  50,
      badge:     `body-explorer`,
      badgeName: `Body Explorer`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}! Cosmo here! You know what's the COOLEST animal on Earth to study? YOU! Your body is an amazing machine — better than any robot ever built! Right now, your heart is pumping, your lungs are breathing, your brain is thinking — all without you having to think about it! Let's peek inside!`,
          headline: `The Human Body: Your Amazing Machine`,
          subtitle: `What's happening inside you, every second of every day`,
          visual: `/explorer-assets/science/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You Are Amazing`,
          paragraphs: [
            `Take a second and think about your body, {name}! Right now!`,
            `Your HEART has beaten thousands of times today already! Your LUNGS have breathed in and out without you noticing! Your BRAIN has processed millions of bits of information! Your STOMACH has digested everything you ate! Your CELLS — TRILLIONS of them — are doing tiny jobs you can't see! Your body is the most complicated machine we know of! Scientists are STILL learning how it works! And it's all YOURS!`,
          ],
          image: `/explorer-assets/science/l06-s1-amazing-body.webp`,
          imageCaption: `Your body — most complicated machine we know!`,
          vocab: [
            { word: `body`,        definition: `The whole physical you — bones, muscles, organs, skin.`,
              audioPrompt: `Your body is the whole physical you — bones, muscles, organs, skin, everything. It's the home your mind lives in. It moves you around, keeps you alive, lets you experience the world. Take care of it!` },
            { word: `cells`,       definition: `Tiny living building blocks.`,
              audioPrompt: `Cells are tiny living building blocks. Your body is made of TRILLIONS of them. Different kinds do different jobs. Some make muscles. Some carry oxygen. Some fight germs. A community working together!` },
            { word: `complicated`, definition: `Made of many parts working together.`,
              audioPrompt: `Complicated means made of many parts working together. Your body is incredibly complicated. So complicated that scientists are STILL discovering new things about it. The amazing part — it usually works smoothly!` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your SKELETON: The Frame`,
          paragraphs: [
            `Your body has a SKELETON — a frame made of BONES!`,
            `You have about 206 bones! They give your body SHAPE! Without bones, you'd be a puddle on the floor! Bones also PROTECT important parts — your skull protects your brain! Your ribs protect your heart and lungs! And bones make BLOOD inside them (yeah, really!). Bones aren't dry sticks — they're alive! They grow as you grow. They heal when they break. Your skeleton is your frame, your armor, and a quiet hero!`,
          ],
          image: `/explorer-assets/science/l06-s2-skeleton.webp`,
          imageCaption: `Skeleton: 206 bones! Gives you shape. Protects organs. Makes blood!`,
          vocab: [
            { word: `skeleton`, definition: `All the bones in your body working together as a frame.`,
              audioPrompt: `Your skeleton is all the bones in your body working together as a frame. Adults have about 206 bones. Babies have MORE — some fuse together as we grow. Your skeleton gives you shape and protects organs!` },
            { word: `bones`,    definition: `Hard parts of your skeleton.`,
              audioPrompt: `Bones are the hard parts of your skeleton. Not dry sticks — they're alive! Bones have blood vessels and cells inside. They grow as you grow. They heal when they break. Some are big. Some are tiny!` },
            { word: `protect`,  definition: `Keep safe.`,
              audioPrompt: `To protect means to keep safe. Bones protect important parts of you. Your skull is a hard bone helmet protecting your brain. Your ribs are like a cage protecting your heart and lungs. Armor!` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your MUSCLES: The Movers`,
          paragraphs: [
            `Bones can't move by themselves! They need MUSCLES!`,
            `Muscles are stretchy tissues that PULL on your bones to make them move! You have about 600 muscles! Some you control — like the ones in your arms when you raise your hand! Others move on their own — like the muscle in your heart, which beats without you thinking! Even SMILING uses muscles (about 12 of them)! When you exercise, your muscles get STRONGER! Muscles need food, water, and rest to work well!`,
          ],
          image: `/explorer-assets/science/l06-s3-muscles.webp`,
          imageCaption: `Muscles: about 600 of them! Pull on bones to make you move!`,
          vocab: [
            { word: `muscle`,   definition: `Stretchy tissue that pulls on bones.`,
              audioPrompt: `A muscle is stretchy tissue that pulls on bones to make your body move. Without muscles, your bones couldn't go anywhere. You have about 600 muscles. Some HUGE. Some TINY. All work together!` },
            { word: `pull`,     definition: `To move something toward you.`,
              audioPrompt: `To pull means to move something toward you. Muscles pull. They don't push. When you bend your arm, your bicep PULLS your forearm closer. Every movement is muscles pulling bones!` },
            { word: `stronger`, definition: `More powerful.`,
              audioPrompt: `Stronger means more powerful. Muscles get stronger when you exercise them. That's why kids who play and run a lot have strong muscles. Exercise makes muscle fibers thicker. Build strength your whole life!` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your HEART and BLOOD: The Delivery System`,
          paragraphs: [
            `Inside your chest is your HEART — a muscle the size of your fist that NEVER STOPS WORKING!`,
            `Your heart pumps BLOOD through tubes called blood vessels! Blood delivers OXYGEN (from your lungs) and FOOD (from your stomach) to every cell in your body! It also picks up waste and carries it away! Your heart beats about 100,000 times every day! By the time you're a grown-up, it'll have beaten BILLIONS of times — without stopping! It's the hardest-working muscle you have!`,
          ],
          image: `/explorer-assets/science/l06-s4-heart-blood.webp`,
          imageCaption: `Heart: pumps blood 100,000 times a day! Delivers oxygen and food everywhere!`,
          vocab: [
            { word: `heart`, definition: `A muscle that pumps blood.`,
              audioPrompt: `Your heart is a muscle that pumps blood. About the size of your fist. It never stops — not when you sleep, not for a moment. Beats about 100,000 times every day. Caring for your heart matters!` },
            { word: `blood`, definition: `Red liquid that carries oxygen and food everywhere.`,
              audioPrompt: `Blood is the red liquid that carries oxygen and food to every cell. Also carries away waste. Travels through tubes called blood vessels. If stretched out, they'd reach twice around Earth! The delivery system!` },
            { word: `pump`,  definition: `To push fluid through tubes.`,
              audioPrompt: `To pump means to push fluid through tubes. Your heart pumps blood. Squeeze, release. Squeeze, release. Every beat is a pump. You can feel your pulse — that's your blood pumping through!` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your LUNGS and BRAIN`,
          paragraphs: [
            `Two more important parts — your LUNGS and your BRAIN!`,
            `LUNGS are two squishy bags in your chest! When you breathe IN, they fill with AIR! They pull OXYGEN out of the air and put it into your blood! When you breathe OUT, they push out used air! You breathe about 20,000 times a day! Your BRAIN is in your head — it's the BOSS of your whole body! It thinks! It remembers! It controls everything! It sends signals through your nerves (like wires) to every part of you!`,
          ],
          image: `/explorer-assets/science/l06-s5-lungs-brain.webp`,
          imageCaption: `Lungs: pull oxygen from air. Brain: the boss. Controls everything!`,
          vocab: [
            { word: `lungs`,  definition: `Two organs in your chest that take oxygen from air.`,
              audioPrompt: `Your lungs are 2 organs in your chest that take oxygen from the air. When you breathe in, they fill with air. They pull oxygen out and put it in your blood. You breathe about 20,000 times a day!` },
            { word: `brain`,  definition: `The boss of your body.`,
              audioPrompt: `Your brain is the boss of your body. In your head, protected by your skull. Thinks. Remembers. Makes decisions. Controls every system. The most amazing computer in the universe — inside you!` },
            { word: `nerves`, definition: `Tiny wires that carry messages from your brain.`,
              audioPrompt: `Nerves are tiny wires that carry messages from your brain to your body. When your brain says "move arm," a nerve carries that signal. Your body's communication system!` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Working Together`,
          paragraphs: [
            `Here's the amazing part — ALL these systems work TOGETHER!`,
            `Right now, while you read this: your BRAIN is reading the words! Your EYES are sending pictures to your brain! Your HEART is pumping blood! Your LUNGS are breathing! Your MUSCLES are holding you up! Your STOMACH is digesting your last meal! Your BONES are protecting everything inside! They never argue. They never get confused. They just work together — every second! Your body is a team. And you're the captain!`,
          ],
          image: `/explorer-assets/science/l06-s6-work-together.webp`,
          imageCaption: `All systems work TOGETHER! Body = team. You = captain!`,
          vocab: [
            { word: `together`, definition: `As a team.`,
              audioPrompt: `Together means as a team. All your body systems work together. The heart sends blood to feed the brain. The brain tells the lungs to breathe. Every part depends on every other part. Beautiful teamwork!` },
            { word: `team`,     definition: `A group working as one.`,
              audioPrompt: `A team is a group working as one. Your body is a team of systems. Skeleton team. Muscle team. Heart team. Each does its own job, but they all work for the same goal — keeping you alive!` },
            { word: `captain`,  definition: `The leader of a team.`,
              audioPrompt: `A captain is the leader of a team. You're the captain of your body. Give it what it needs. Good food. Plenty of water. Enough sleep. Lots of movement. The better you care for it, the better it cares for you!` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 body jobs. Drag each job — which system does it? SKELETON (bones!), MUSCLES (movers!), or HEART (blood pump!)?`,
          buckets: [
            { id: `skeleton`, label: `🦴 SKELETON`, color: `#F3F4F6` },
            { id: `muscles`,  label: `💪 MUSCLES`,  color: `#F59E0B` },
            { id: `heart`,    label: `❤️ HEART`,    color: `#EF4444` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `Pumps blood through your body 100,000 times a day`,
              matchPhrase: `Yes! HEART! Your heart is the blood pump. Beats nonstop. Hardest-working muscle in your body!`,
              correctMatch: `heart` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `Pulls on bones to make your arms and legs move`,
              matchPhrase: `Right! MUSCLES! Muscles pull bones. Bend your arm? Your bicep just pulled. Every move is a pull!`,
              correctMatch: `muscles` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Protects your brain inside a hard helmet of bone`,
              matchPhrase: `Yes! SKELETON! Your skull is part of your skeleton. Hard bone helmet protecting your brain!`,
              correctMatch: `skeleton` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Delivers oxygen and food to every cell through the body`,
              matchPhrase: `Right! HEART! The heart pumps blood. Blood delivers oxygen and food everywhere. Delivery system!`,
              correctMatch: `heart` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What does your SKELETON do?`,
              options: [`Nothing — it just exists`, `Gives your body shape, protects organs, and makes blood`, `Only makes you taller`, `Helps you eat`],
              correctIndex: 1,
              explanation: `Your skeleton has multiple jobs: gives shape, protects organs, makes blood inside the bones!` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `How do MUSCLES make your body move?`,
              options: [`They push bones`, `They PULL on bones to move them`, `They're decorations`, `They don't help`],
              correctIndex: 1,
              explanation: `Muscles PULL. Not push. Every movement is muscles pulling bones!` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What does your HEART do?`,
              options: [`Pumps blood through your body, delivering oxygen and food`, `Stores food`, `Helps you think`, `Nothing important`],
              correctIndex: 0,
              explanation: `Your heart is a muscle that pumps blood. Delivers oxygen and food to every cell!` },
            { id: `l06-q4`, format: `true-false`,
              question: `Your LUNGS pull OXYGEN out of the air and put it into your blood.`,
              correctAnswer: true,
              explanation: `True! When you breathe in, lungs fill with air. They pull oxygen out and into your blood!` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Your ___ is the BOSS of your body — it thinks, remembers, and controls everything.`,
              options: [`brain`, `kneecap`, `elbow`, `pinky`],
              correctIndex: 0,
              explanation: `Brain! It's the boss. Thinks, remembers, controls everything through nerves!` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `What's the BEST way to take care of your amazing body?`,
              options: [`Ignore it`, `Give it good food, water, sleep, movement, and big breaths`, `Eat only candy`, `Stay still all day`],
              correctIndex: 1,
              explanation: `Good food. Water. Sleep. Movement. Breaths. The better you care for your body, the better it works!` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! DOCTORS spend MANY years studying the human body! Different kinds for different parts! Cardiologists study hearts! Pulmonologists study lungs! Neurologists study brains! Orthopedists study bones and muscles! They use special tools — X-rays for bones, MRI machines for brains, stethoscopes for hearts! The human body still has so much more to discover!`,
          familyAdventure: `Do a BODY EXPLORATION together! As a family, try these: 1) Find your PULSE on your wrist — count beats in 15 seconds, multiply by 4! 2) Take a DEEP BREATH — feel your ribs expand! 3) Make a fist — feel the muscles tighten! 4) Pinch your skin and let go — see how fast it bounces back! Your body is full of amazing things to notice!`,
          creativePrompt: `Draw a HUMAN BODY OUTLINE on paper (stick figure works!)! Inside, draw and label: 1) the SKELETON (some bones), 2) the HEART (in chest), 3) the LUNGS (also in chest), 4) the BRAIN (in head)! For a 3-sentence floor: write one sentence each for skeleton, heart, and brain jobs. For a 5-sentence stretch: add lungs and muscles too! Hang it on your wall!`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `WOW, {name}! You now know about YOUR amazing body — your skeleton (frame), muscles (movers), heart and blood (delivery), lungs (oxygen), brain and nerves (control)! All working together as a team! You're the captain! Take care of your body, and it'll take care of you! Cosmo is so splashy-proud! 🦦`,
          badge: `body-explorer`,
          badgeName: `Body Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L06] Loaded: "The Human Body" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
