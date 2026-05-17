// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L06 — The Human Body: Your Amazing Machine
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 4-LS1-1 (structures and functions for survival)
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
          guideText: `Hey {name}! Cosmo here. You know what's the COOLEST animal on Earth to study? YOU. Your body is an amazing machine — better than any robot ever built. Right now, while you're sitting here, your heart is pumping, your lungs are breathing, your brain is thinking, your stomach is digesting — all without you having to think about it. Today we'll peek inside and see how it all works. Ready? Let's go!`,
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
            `Take a second and think about your body. Right now.`,
            `Your HEART has beaten thousands of times today already. Your LUNGS have breathed in and out without you noticing. Your BRAIN has processed millions of bits of information. Your STOMACH has digested everything you ate. Your CELLS — trillions of them — are doing tiny jobs you can't see. Your body is the most complicated machine we know of. Scientists are STILL learning how it works. And it's all YOURS.`,
          ],
          image: `/explorer-assets/science/l06-s1-amazing-body.webp`,
          imageCaption: `Your body — most complicated machine we know. Trillions of cells. Thousands of jobs. All for you.`,
          vocab: [
            { word: `body`,           definition: `The whole physical you — bones, muscles, organs, skin, everything.`,
              audioPrompt: `Your body, {name}, is the whole physical you — bones, muscles, organs, skin, everything. It's the home your mind lives in. It moves you around, keeps you alive, lets you experience the world. Your body is yours and yours alone. Taking care of it is one of the most important things you can do.` },
            { word: `cells`,          definition: `Tiny living building blocks. Your body has TRILLIONS of cells.`,
              audioPrompt: `Cells, {name}, are tiny living building blocks. Your body is made of TRILLIONS of them — way too many to count. Each cell is alive in its own way. Different kinds do different jobs. Some make muscles. Some carry oxygen. Some fight germs. Some store memories. You're a huge community of cells working together.` },
            { word: `complicated`,    definition: `Made of many parts working together. Your body is COMPLICATED — but works smoothly.`,
              audioPrompt: `Complicated, {name}, means made of many parts working together. Your body is incredibly complicated. So complicated that scientists are STILL discovering new things about it. The amazing part — even though it's complicated, it usually works smoothly. Your body takes care of most things without you having to think.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Your SKELETON: The Frame`,
          paragraphs: [
            `Your body has a SKELETON — a frame made of BONES.`,
            `You have about 206 bones. They give your body SHAPE. Without bones, you'd be a puddle on the floor. Bones also PROTECT important parts — your skull protects your brain, your ribs protect your heart and lungs. And bones make BLOOD inside them (yeah, really!). Bones aren't dry sticks — they're alive. They grow as you grow. They heal when they break. Your skeleton is your frame, your armor, and a quiet hero of your body.`,
          ],
          image: `/explorer-assets/science/l06-s2-skeleton.webp`,
          imageCaption: `Skeleton: 206 bones. Gives you shape. Protects organs. Makes blood. Heals when broken. Alive.`,
          vocab: [
            { word: `skeleton`,       definition: `All the bones in your body working together as a frame.`,
              audioPrompt: `Your skeleton, {name}, is all the bones in your body working together as a frame. Adults have about 206 bones. Babies actually have MORE — but some fuse together as we grow. Your skeleton gives you shape, protects your organs, and even makes blood. It's one of the most important systems in your body.` },
            { word: `bones`,          definition: `Hard parts of your skeleton. BONES are alive and can heal.`,
              audioPrompt: `Bones, {name}, are the hard parts of your skeleton. They're not dry sticks — they're alive! Bones have blood vessels and cells inside them. They grow as you grow. They heal when they break (slowly, with help from a doctor). Some bones are big like your femur (thigh bone). Some are tiny like the bones in your ear.` },
            { word: `protect`,        definition: `Keep safe. Bones PROTECT important parts of you.`,
              audioPrompt: `To protect, {name}, means to keep safe. Bones protect important parts of you. Your skull is a hard bone helmet protecting your brain. Your ribs are like a cage protecting your heart and lungs. Your spine protects the nerves of your back. Bones aren't just frames — they're armor too.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Your MUSCLES: The Movers`,
          paragraphs: [
            `Bones can't move by themselves. They need MUSCLES.`,
            `Muscles are stretchy tissues that PULL on your bones to make them move. You have about 600 muscles. Some you control — like the ones in your arms when you raise your hand. Others move on their own — like the muscle in your heart, which beats without you thinking. Even SMILING uses muscles (about 12 of them). When you exercise, your muscles get stronger. Muscles need food, water, and rest to work well.`,
          ],
          image: `/explorer-assets/science/l06-s3-muscles.webp`,
          imageCaption: `Muscles: about 600 of them. Pull on bones to make you move. Some you control. Some work on their own.`,
          vocab: [
            { word: `muscle`,         definition: `Stretchy tissue that pulls on bones to make your body MOVE.`,
              audioPrompt: `A muscle, {name}, is stretchy tissue that pulls on bones to make your body move. Without muscles, your bones couldn't go anywhere. You have about 600 muscles. Some are HUGE — like the ones in your legs. Some are TINY — like the ones controlling your eye movements. All of them work together to let you move.` },
            { word: `pull`,           definition: `To move something toward you. Muscles PULL bones to make you move.`,
              audioPrompt: `To pull, {name}, means to move something toward you. Muscles pull. They don't push. When you bend your arm, your bicep muscle PULLS your forearm closer. When you straighten it, your tricep muscle PULLS it the other way. Every movement is muscles pulling bones. Pretty amazing when you think about it.` },
            { word: `stronger`,       definition: `More powerful. Muscles get STRONGER when you exercise.`,
              audioPrompt: `Stronger, {name}, means more powerful. Muscles get stronger when you exercise them. That's why kids who play and run a lot have strong muscles. That's why athletes train. Exercise makes muscle fibers thicker. The good news? You can build muscle strength your whole life — at any age.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your HEART and BLOOD: The Delivery System`,
          paragraphs: [
            `Inside your chest is your HEART — a muscle the size of your fist that NEVER STOPS WORKING.`,
            `Your heart pumps BLOOD through tubes called blood vessels. Blood delivers OXYGEN (from your lungs) and FOOD (from your stomach) to every cell in your body. It also picks up waste cells make and carries it away. Your heart beats about 100,000 times every day. By the time you're a grown-up, it'll have beaten BILLIONS of times — without stopping. It's the hardest-working muscle you have.`,
          ],
          image: `/explorer-assets/science/l06-s4-heart-blood.webp`,
          imageCaption: `Heart: size of your fist. Pumps blood 100,000 times a day. Blood delivers oxygen and food everywhere.`,
          vocab: [
            { word: `heart`,          definition: `A muscle that pumps blood. The HEART never stops working.`,
              audioPrompt: `Your heart, {name}, is a muscle that pumps blood. It's about the size of your fist. It never stops working — not when you sleep, not when you rest, not for a single moment. Your heart beats about 100,000 times every day. That's a lot of work. Caring for your heart matters — eating well, moving your body, getting good sleep.` },
            { word: `blood`,          definition: `Red liquid that carries oxygen and food to every cell in your body.`,
              audioPrompt: `Blood, {name}, is the red liquid that carries oxygen and food to every cell in your body. It also carries away waste. Your blood travels through tubes called blood vessels. If you stretched out all your blood vessels in a line, they'd reach more than twice around the Earth! Blood is the delivery system that keeps you alive.` },
            { word: `pump`,           definition: `To push fluid through tubes. The heart PUMPS blood through your body.`,
              audioPrompt: `To pump, {name}, means to push fluid through tubes. Your heart pumps blood through your blood vessels. Squeeze, release. Squeeze, release. Every beat is a pump. You can feel your pulse — that's your blood pumping through. Put two fingers on your wrist or neck. You'll feel it.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your LUNGS and BRAIN`,
          paragraphs: [
            `Two more important parts — your LUNGS and your BRAIN.`,
            `LUNGS are two squishy bags in your chest. When you breathe IN, they fill with AIR. They pull OXYGEN out of the air and put it into your blood. When you breathe OUT, they push out used air (carbon dioxide). You breathe about 20,000 times a day. Your BRAIN is in your head — it's the BOSS of your whole body. It thinks. It remembers. It controls everything. It sends signals through your nerves (like wires) to every part of you. Your brain is the most amazing computer in the universe — and it's INSIDE YOU.`,
          ],
          image: `/explorer-assets/science/l06-s5-lungs-brain.webp`,
          imageCaption: `Lungs: pull oxygen from air, send it to blood. Brain: the boss. Controls everything through nerves.`,
          vocab: [
            { word: `lungs`,          definition: `Two organs in your chest that take oxygen from air. You breathe with your LUNGS.`,
              audioPrompt: `Your lungs, {name}, are two organs in your chest that take oxygen from the air. When you breathe in, they fill with air. They pull oxygen out and put it in your blood. When you breathe out, they push out used air. You breathe about 20,000 times a day without thinking. Your lungs work day and night.` },
            { word: `brain`,          definition: `The boss of your body. The BRAIN thinks, remembers, and controls everything.`,
              audioPrompt: `Your brain, {name}, is the boss of your body. It's in your head, protected by your skull. The brain thinks, remembers, makes decisions, controls every other system. It sends signals through your nerves to every part of you. Your brain is the most amazing computer in the universe — and you carry it around with you.` },
            { word: `nerves`,         definition: `Tiny wires that carry messages from your brain to your body.`,
              audioPrompt: `Nerves, {name}, are tiny wires that carry messages from your brain to your body — and back. When your brain says 'move arm,' a nerve carries that signal to your arm muscles. When your fingers touch something hot, nerves zoom that signal back to your brain so it can say 'PULL AWAY.' Nerves are your body's communication system.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `All Working Together`,
          paragraphs: [
            `Here's the amazing part — ALL these systems work TOGETHER.`,
            `Right now, while you read this: your BRAIN is reading the words. Your EYES are sending pictures to your brain. Your HEART is pumping blood through your body. Your LUNGS are breathing. Your MUSCLES are holding you up. Your STOMACH is digesting your last meal. Your BONES are protecting everything inside. They never argue. They never get confused. They just work together — every second of every day. Your body is a team. And you're the captain.`,
          ],
          image: `/explorer-assets/science/l06-s6-work-together.webp`,
          imageCaption: `All systems work TOGETHER. Brain reads. Heart pumps. Lungs breathe. Body = team. You = captain.`,
          vocab: [
            { word: `together`,       definition: `As a team. All your body systems work TOGETHER.`,
              audioPrompt: `Together, {name}, means as a team. All your body systems work together. The heart sends blood to feed the brain. The brain tells the lungs to breathe. The lungs put oxygen in the blood. The blood feeds the muscles. The muscles move the bones. Every part depends on every other part. Beautiful teamwork.` },
            { word: `team`,           definition: `A group working as one. Your body is a TEAM of systems.`,
              audioPrompt: `A team, {name}, is a group working as one. Your body is a team of systems. Skeleton team. Muscle team. Heart and blood team. Lung team. Brain and nerve team. Stomach team. Each does its own job, but they all work for the same goal — keeping you alive and healthy. That's teamwork at its best.` },
            { word: `captain`,        definition: `The leader of a team. YOU'RE the captain of your body — take care of it.`,
              audioPrompt: `A captain, {name}, is the leader of a team. You're the captain of your body. You can't tell your heart to beat differently — but you can give your body what it needs. Good food. Plenty of water. Enough sleep. Lots of movement. Big breaths. Time outside. The better you care for your body, the better it cares for you. You're in charge.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `Your body has different SYSTEMS — skeleton, muscles, heart, lungs, brain — that each have their own job.`,
              matchPhrase: `Yes! Your body has many systems, each with its own job. Skeleton holds you up. Muscles move you. Heart pumps blood. Lungs breathe. Brain controls everything. All working together.`,
              correctMatch: `fact` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `Your HEART never stops — it beats about 100,000 times every day.`,
              matchPhrase: `True! Your heart pumps about 100,000 times daily — and never stops, even when you sleep. By the time you're an adult, it'll have beaten billions of times. Hardest-working muscle in your body.`,
              correctMatch: `fact` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `You can grow back any bone or any tooth, anytime, without any limits.`,
              matchPhrase: `Not at all! Your adult teeth don't grow back — you only get one set. Bones can heal if broken (slowly), but you can't grow extra bones. Take care of what you have.`,
              correctMatch: `myth` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Your body only needs ONE system to work — the others aren't really necessary.`,
              matchPhrase: `Definitely not! Every system depends on every other. Without lungs, no oxygen. Without heart, no delivery. Without brain, no signals. They all matter. They all work together as a team.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What does your SKELETON do?`,
              options: [`Nothing — it just exists`, `Gives your body shape, protects organs, and makes blood`, `Only makes you taller`, `Helps you eat`],
              correctIndex: 1,
              explanation: `Your skeleton has multiple jobs: gives your body shape, protects important organs (skull protects brain, ribs protect heart and lungs), and even makes blood inside the bones.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `How do MUSCLES make your body move?`,
              options: [`They push bones`, `They PULL on bones to move them`, `They're decorations`, `They don't help with movement`],
              correctIndex: 1,
              explanation: `Muscles PULL. Not push. When you bend your arm, your bicep pulls your forearm closer. When you straighten it, the other muscle pulls it the other way. Every movement is muscles pulling bones.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What does your HEART do?`,
              options: [`Pumps blood through your body, delivering oxygen and food to every cell`, `Stores food`, `Helps you think`, `Nothing important`],
              correctIndex: 0,
              explanation: `Your heart is a muscle that pumps blood. Blood delivers oxygen (from lungs) and food (from stomach) to every cell, and carries away waste. The heart works nonstop.` },
            { id: `l06-q4`, format: `true-false`,
              question: `Your LUNGS pull OXYGEN out of the air and put it into your blood.`,
              correctAnswer: true,
              explanation: `True! When you breathe in, lungs fill with air. They pull oxygen out and into your blood. Blood then delivers it to every cell. When you breathe out, lungs push out used air (carbon dioxide).` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Your ___ is the BOSS of your body — it thinks, remembers, and controls everything.`,
              options: [`brain`, `kneecap`, `elbow`, `pinky`],
              correctIndex: 0,
              explanation: `Brain! It's the boss. It thinks, remembers, makes decisions, and sends signals through nerves to control every other part of you. The most amazing computer in the universe — inside your head.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `What's the BEST way to take care of your amazing body?`,
              options: [`Ignore it completely`, `Give it good food, water, sleep, movement, and big breaths`, `Eat only candy`, `Stay still all day`],
              correctIndex: 1,
              explanation: `Good food. Plenty of water. Enough sleep. Lots of movement. Big breaths. Time outside. The better you care for your body, the better it works for you. You're the captain.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. DOCTORS spend MANY years studying the human body. There are different kinds for different parts. Cardiologists study hearts. Pulmonologists study lungs. Neurologists study brains and nerves. Orthopedists study bones and muscles. Pediatricians study kids' bodies as they grow. They use special tools — X-rays for bones, MRI machines for brains, stethoscopes for hearts. All to keep human bodies healthy. The human body is one of the most studied things in science — and still has so much more to discover.`,
          familyAdventure: `Do a BODY EXPLORATION together. As a family, try these: 1) Find your PULSE on your wrist — count beats in 15 seconds, multiply by 4. That's your beats per minute. 2) Take a DEEP BREATH — feel your ribs expand as your lungs fill. 3) Make a fist — feel the muscles tighten. Compare to your relaxed hand. 4) Pinch your skin and let go — see how fast it bounces back. Your body is full of amazing things to notice.`,
          creativePrompt: `Draw a HUMAN BODY OUTLINE on a piece of paper (just a stick figure or outline). Inside, draw and label: 1) the SKELETON (some bones), 2) the HEART (in chest), 3) the LUNGS (also in chest), 4) the BRAIN (in head). Add arrows showing what each part does. Hang it on your wall — you made a body map.`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `WOW, {name}! You now know about YOUR amazing body — your skeleton (frame), muscles (movers), heart and blood (delivery), lungs (oxygen), brain and nerves (control), and how they all work together as a team. You're the captain. Take care of your body, and it'll take care of you. The human body is the most incredible machine we know — and it's all yours. See you next lesson!`,
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
  const mags  = SCIENCE_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L06] Loaded: "The Human Body" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
