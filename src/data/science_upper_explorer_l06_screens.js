// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L06 — The Human Body: Your Amazing Machine
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 4-LS1-1, 4-LS1-2 — Internal structures support survival;
//            animals receive information through senses and respond
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — body systems work together, key organ systems,
//        how the body stays balanced (homeostasis), keeping your body healthy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-06`,
      title: `The Human Body: Your Amazing Machine`,
      duration: 18,
      xpReward: 75,
      badge: `body-scientist`,
      badgeName: `Body Scientist`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we covered animals broadly. Today we zoom in on one specific animal you happen to live inside of: YOU. Your body has TRILLIONS of cells working together right now to keep you alive. Your heart's beating. Your lungs are breathing. Your brain is reading these words. Your stomach is digesting your last meal. All of this is happening without you thinking about it. We'll cover how. Let's go.`,
          headline: `The Human Body`,
          subtitle: `What's happening inside you, every second of every day`,
          visual: `/ue-assets/science/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Body Is a Team of Systems`,
          paragraphs: [
            `Your body is made of about 37 TRILLION cells. That's the number 37 followed by 12 zeros. Those cells are organized into TISSUES (groups of similar cells), then into ORGANS (like your heart, lungs, or brain), then into SYSTEMS (groups of organs working together). Each organ system has a specific job, and they all coordinate to keep you alive. No single organ does everything. The body works because the systems TALK TO EACH OTHER constantly.`,
            `When you run, for example, your MUSCULAR SYSTEM moves your legs. Your SKELETAL SYSTEM gives those muscles something to pull on. Your RESPIRATORY SYSTEM breathes in more oxygen. Your CIRCULATORY SYSTEM pumps oxygen-rich blood faster to deliver it to working muscles. Your NERVOUS SYSTEM coordinates everything. Your DIGESTIVE SYSTEM provides fuel from earlier meals. Even a simple action like running uses almost every system in your body at once. You don't have to think about it. The systems just do their jobs.`,
          ],
          image: `/ue-assets/science/l06-s1-systems.webp`,
          imageCaption: `37 trillion cells. Organized into tissues, organs, systems. All coordinating.`,
          vocab: [
            { word: `organ system`,
              definition: `A group of organs that work together to do a specific job in the body. Examples: digestive system (eating and processing food), circulatory system (moving blood), nervous system (sending signals).`,
              audioPrompt: `An organ system is a group of organs that work together, {name}. Each system has a specific job. Your digestive system breaks down food and absorbs nutrients. Your circulatory system moves blood around your body. Your respiratory system handles breathing. Your nervous system sends signals between your brain and the rest of you. Each system contains multiple organs. Your circulatory system, for example, includes your heart, blood vessels, and blood itself. The systems work together constantly. No system runs alone.` },
            { word: `neuron`,
              definition: `A nerve cell that carries electrical signals through the nervous system. The brain contains about 100 billion neurons. They send signals at speeds up to 270 miles per hour.`,
              audioPrompt: `A neuron is a nerve cell that carries electrical signals through your nervous system, {name}. Your brain contains about 100 billion neurons firing constantly. Neurons can transmit signals at speeds up to 270 miles per hour. When you touch something hot, neurons carry the signal from your hand to your brain in milliseconds. Different types of neurons handle sensing, moving, and thinking. Neurons connect with each other at junctions called synapses. Your entire experience of the world comes from neurons sending and receiving signals.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Big Systems and What They Do`,
          paragraphs: [
            `Your CIRCULATORY SYSTEM is your delivery network. Your HEART pumps about 100,000 times every day, pushing blood through about 60,000 miles of blood vessels. Blood carries oxygen from your lungs and nutrients from your food to every cell. It also picks up waste so other systems can get rid of it. Your RESPIRATORY SYSTEM, including your LUNGS, brings oxygen in and pushes carbon dioxide out, about 20,000 times a day. Your DIGESTIVE SYSTEM (mouth, stomach, intestines) breaks food into pieces small enough for your blood to carry to cells.`,
            `Your NERVOUS SYSTEM is your control center. Your BRAIN processes 100 billion neurons firing constantly, controlling everything from your thoughts to your breathing. Nerves carry signals at up to 270 miles per hour. Your SKELETAL SYSTEM (206 bones in an adult) gives your body structure and protects organs. Your MUSCULAR SYSTEM (over 600 muscles) lets you move. Your IMMUNE SYSTEM defends you against invaders. Your ENDOCRINE SYSTEM uses chemical messengers called hormones. There are more systems too. Every one matters. Every one runs every second of your life.`,
          ],
          image: `/ue-assets/science/l06-s2-major-systems.webp`,
          imageCaption: `Circulatory, respiratory, digestive, nervous, skeletal, muscular. The major teams.`,
          vocab: [
            { word: `organ`,
              definition: `A body part with a specific job, made of multiple tissues working together. Examples: heart, brain, lungs, stomach, liver, kidneys.`,
              audioPrompt: `An organ is a body part with a specific job, {name}. It's made of multiple tissues working together. Your heart is an organ. So are your brain, lungs, stomach, liver, and kidneys. Each organ has a unique job. Your heart pumps blood. Your stomach breaks down food. Your liver filters toxins from your blood. Most organs belong to one of the major organ systems, like your heart in the circulatory system. Some organs work in multiple systems at once.` },
            { word: `heart`,
              definition: `A fist-sized muscle that pumps blood through your entire body. Beats about 100,000 times per day, pushing oxygen and nutrients to every cell.`,
              audioPrompt: `Your heart is one of the most important organs in your body, {name}. It is a muscle about the size of your fist. It beats about 100,000 times every day, pumping blood through about 60,000 miles of blood vessels. With each beat, it pushes oxygen-rich blood from your lungs to every part of your body, and brings waste-carrying blood back to be refreshed. Your heart beats even while you sleep, never stopping your entire life. Exercise strengthens the heart muscle and makes it pump more efficiently.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Homeostasis: Your Body's Balancing Act`,
          paragraphs: [
            `Your body maintains a careful BALANCE to keep you alive. This balance is called HOMEOSTASIS, which means "staying the same." Your body temperature normally stays around 37 degrees Celsius (98.6 Fahrenheit). Your blood sugar stays in a narrow range. Your hydration stays in balance. Your pH (how acidic or basic your blood is) stays almost exactly the same. If any of these get too far off, you get sick or even die.`,
            `Your body has constant systems that monitor and adjust these levels. When you get too hot, your body sweats to cool down. When you get too cold, you shiver to warm up. When your blood sugar drops, you feel hungry. When you're dehydrated, you feel thirsty. These signals aren't just feelings. They're your body's way of telling you "I need help maintaining balance." Listening to them helps. Ignoring them tends to make problems worse. Most of what doctors do, in some way, is helping the body get back to homeostasis when something has knocked it off balance.`,
          ],
          image: `/ue-assets/science/l06-s3-homeostasis.webp`,
          imageCaption: `Constant balance. Temperature. Blood sugar. Hydration. pH. All managed.`,
          vocab: [
            { word: `homeostasis`,
              definition: `The process your body uses to maintain stable internal conditions like temperature, hydration, and blood sugar. Means "staying the same" in Greek.`,
              audioPrompt: `Homeostasis is the process your body uses to maintain stable internal conditions, {name}. Body temperature, hydration, blood sugar, and many other things stay in a narrow range. If they get too far off, you get sick or worse. Your body constantly monitors and adjusts. Sweating cools you down. Shivering warms you up. Feeling hungry signals low blood sugar. Feeling thirsty signals dehydration. Most of what doctors do, in some way, is helping the body get back to homeostasis when something has knocked it off balance.` },
            { word: `immune system`,
              definition: `The body's defense system against infections and disease. Includes white blood cells and antibodies that identify and attack bacteria, viruses, and other harmful invaders.`,
              audioPrompt: `Your immune system is your body's defense against infections and disease, {name}. It includes white blood cells, antibodies, and a network of organs and tissues. When bacteria, viruses, or other harmful things enter your body, your immune system identifies them and attacks. It can also remember past invaders. When you get a vaccine, you're training your immune system to recognize a pathogen before you're exposed to the real thing. Fever is often your immune system working, raising body temperature to slow bacterial growth.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Keeping Your Amazing Machine Healthy`,
          paragraphs: [
            `Your body works incredibly hard to take care of itself, but the choices you make matter. SLEEP is when your body does most of its repair work. Cells rebuild. Memories get organized. The immune system runs maintenance. Most kids your age need 9-11 hours of sleep. WATER keeps every system working, because most of your body is water. EXERCISE strengthens muscles, bones, heart, and even brain. NUTRITION provides the raw materials your body uses to build and repair itself.`,
            `Your body is also REMARKABLY GOOD at healing itself. Small cuts close up in days. Broken bones knit back together over weeks. Even after illness, most systems return to normal. But the body also has limits. Damaging it through poor food choices, lack of sleep, or risky behaviors makes the body's job harder. Listening to your body, paying attention when it tells you something is wrong, is one of the best lifelong habits anyone can build. Your body has your back. Have its back too.`,
          ],
          image: `/ue-assets/science/l06-s4-healthy.webp`,
          imageCaption: `Sleep. Water. Movement. Nutrition. The body works best when you support it.`,
          vocab: [
            { word: `tissue`,
              definition: `A group of similar cells that work together. Examples: muscle tissue, nerve tissue, bone tissue. Multiple tissues make up an organ.`,
              audioPrompt: `A tissue is a group of similar cells that work together, {name}. Muscle tissue is made of muscle cells specialized for contracting. Nerve tissue is made of cells specialized for carrying signals. Bone tissue is hard cells that build your skeleton. Multiple tissues combine to form organs. Your heart, for example, is mostly muscle tissue (the muscle that pumps blood), but it also includes nerve tissue (which controls when it beats) and connective tissue (which holds it all together). Tissues are the middle level of organization between cells and organs.` },
            { word: `bone`,
              definition: `A hard, living structure that makes up the skeleton. Bones protect organs, store minerals, and produce blood cells in the marrow inside. Adults have 206 bones.`,
              audioPrompt: `Bones are the hard, living structures that make up your skeleton, {name}. Your body has 206 bones when you're an adult. Bones do more than just hold you up. They protect vital organs (your skull protects your brain, your rib cage protects your heart and lungs). Bones also store minerals and produce blood cells in the soft tissue inside called bone marrow. Bones are living tissue, not dead material. They repair themselves when broken and grow stronger with exercise. As you age, keeping your bones strong matters more and more.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four things happening in a human body. For each one, identify which SYSTEM is most responsible: CIRCULATORY (heart and blood), DIGESTIVE (food and nutrients), or NERVOUS (signals and control)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `circulatory`,    label: `Circulatory`,    color: `#F87171`, description: `Heart, blood vessels, blood. Moves oxygen and nutrients around the body.` },
            { id: `digestive`,      label: `Digestive`,      color: `#34D399`, description: `Mouth, stomach, intestines. Breaks down food and absorbs nutrients.` },
            { id: `nervous`,        label: `Nervous`,        color: `#60A5FA`, description: `Brain, spinal cord, nerves. Sends signals and controls almost everything.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `Someone eats an apple.` },
                { text: `Their teeth break the apple into smaller pieces.` },
                { text: `In the stomach, special acid breaks down the apple further. The intestines absorb the nutrients.` },
              ],
              correctAnswer: `digestive`,
              realWorldExample: `This is what happens every time you eat something.`,
              explanation: `Mouth, stomach, intestines. Food being broken down into nutrients. Pure digestive system. The whole process from chewing to absorbing takes about 24-72 hours, depending on what you ate.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `Someone touches a hot stove by accident.` },
                { text: `Within milliseconds, signals fly from their hand to their spinal cord to their brain.` },
                { text: `Their hand pulls back automatically before they even consciously think about it.` },
              ],
              correctAnswer: `nervous`,
              realWorldExample: `Reflexes are pure nervous-system function.`,
              explanation: `Signals traveling fast between hand, spinal cord, brain. Reflex response. Pure nervous system. The hand-pulls-back reflex is so fast it doesn't even need to reach your conscious brain. Your spinal cord can trigger it on its own.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `Someone goes for a run.` },
                { text: `Their heart starts beating faster, pumping blood at higher speed.` },
                { text: `Oxygen-rich blood reaches their leg muscles, giving them energy to keep going.` },
              ],
              correctAnswer: `circulatory`,
              realWorldExample: `Exercise puts the circulatory system to work.`,
              explanation: `Heart pumping faster. Blood moving oxygen to muscles. Pure circulatory system. Of course, the nervous system told the heart to speed up, and the digestive system provided the original nutrients. But the SCENE itself is the circulatory system doing its job under load.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `Someone feels HUNGRY about 3 hours after lunch.` },
                { text: `Their blood sugar has dropped slightly.` },
                { text: `Signals from their stomach and body trigger sensations of hunger, and they think about getting a snack.` },
              ],
              correctAnswer: `nervous`,
              realWorldExample: `Hunger is more complex than just a stomach feeling.`,
              explanation: `Tricky because hunger FEELS like a stomach thing. And yes, the stomach (digestive system) is involved. But hunger as a SENSATION is actually a nervous-system experience. Your brain monitors blood sugar and other signals from around the body, then generates the feeling of hunger. The feeling is your brain telling you "you need more fuel." Most "feelings" in your body are actually nervous-system products, even when they seem to come from somewhere else.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `Roughly how many cells does the human body contain?`,
              options: [
                `About a million`,
                `About 37 trillion`,
                `About a thousand`,
                `About a hundred`,
              ],
              correctIndex: 1,
              explanation: `Your body has about 37 trillion cells. Each one is doing a specific job right now. The whole team works together to keep you alive.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is an ORGAN SYSTEM?`,
              options: [
                `A single organ`,
                `A group of organs working together for a specific job (like the digestive system or circulatory system)`,
                `A type of music`,
                `Just bones`,
              ],
              correctIndex: 1,
              explanation: `An organ system is several organs cooperating for a specific job. Your circulatory system includes your heart, blood vessels, and blood. Your digestive system includes your mouth, stomach, and intestines. Each system has a different job, and all of them work together.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What does the CIRCULATORY SYSTEM do?`,
              options: [
                `It breathes`,
                `It moves blood through the body to deliver oxygen and nutrients to every cell`,
                `It controls thinking`,
                `It digests food`,
              ],
              correctIndex: 1,
              explanation: `The circulatory system, centered around your heart, moves blood through about 60,000 miles of blood vessels. Blood carries oxygen from your lungs and nutrients from your food to every cell that needs them, and picks up waste on the way back.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What is HOMEOSTASIS?`,
              options: [
                `A type of disease`,
                `The process your body uses to maintain stable internal conditions like temperature, hydration, and blood sugar`,
                `Sleep`,
                `A type of exercise`,
              ],
              correctIndex: 1,
              explanation: `Homeostasis means "staying the same." Your body works constantly to keep temperature, blood sugar, hydration, and many other levels in a stable range. When something gets out of balance, you feel sick or tired until it's restored.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Your body has roughly 60,000 miles of blood vessels.`,
              correctAnswer: true,
              explanation: `True. If you laid all your blood vessels end to end, they'd stretch about 60,000 miles, which is more than twice around the Earth. Most of these are tiny capillaries that deliver blood to individual cells.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `When you SHIVER on a cold day, what's happening?`,
              options: [
                `Your body is malfunctioning`,
                `Your body is shivering on purpose to generate heat and maintain homeostasis (stable body temperature)`,
                `You're nervous`,
                `Your nervous system is broken`,
              ],
              correctIndex: 1,
              explanation: `Shivering is involuntary muscle contraction designed to generate heat. Your body is fighting to keep your core temperature at 37°C. Sweating works the same way but in the opposite direction. Both are homeostasis in action.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What's the difference between a CELL, a TISSUE, and an ORGAN?`,
              options: [
                `They're the same thing`,
                `A cell is the smallest unit of life. A tissue is a group of similar cells. An organ is multiple tissues working together for a specific job.`,
                `Cells are bigger than organs`,
                `Tissues are non-living`,
              ],
              correctIndex: 1,
              explanation: `Cells combine to form tissues. Tissues combine to form organs. Organs combine to form organ systems. This is the levels of organization in living bodies, from smallest (cell) to largest (whole organism).` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What helps your BODY work at its best?`,
              options: [
                `Just luck`,
                `Enough sleep, plenty of water, regular exercise, and good nutrition. Your body works hard, and supporting it matters.`,
                `Only eating one food`,
                `Avoiding all movement`,
              ],
              correctIndex: 1,
              explanation: `Sleep, water, movement, and good food are the four pillars. Most kids your age need 9-11 hours of sleep. Your body uses these to repair, build, and run smoothly. Listening to your body is one of the best lifelong habits.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pause for 30 seconds. Notice what your body is doing without you thinking about it. Breathing, heart beating, sitting upright. What's most amazing about that?` },
            { id: `r2`, text: `Pick ONE organ system. Imagine it suddenly stopped working for a day. What would your life look like?` },
            { id: `r3`, text: `Most kids your age need 9-11 hours of sleep. How much do you usually get? What do you notice on days you get less?` },
            { id: `r4`, text: `Your body has been healing itself since you were born. Pick a time you got hurt or sick. What do you remember about how your body recovered?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Knowing how your body works is one of the most useful things any human can learn. Doctors spend years studying it. But even kids can build basic awareness. Recognizing when your body needs water, sleep, food, or movement helps you take care of it. Understanding that hunger and thirst are real signals (not problems to ignore) helps you respond well. The body is one of the most amazing machines in the universe, and you live inside one. Use this knowledge for life.`,
          familyAdventure: `Family Body System Sketch. As a family, pick ONE organ system (circulatory, digestive, nervous, etc.). Draw it together on a big piece of paper, labeling the major organs. Then talk about what each organ does. Don't worry about being scientifically perfect. The goal is building a mental picture of what's actually inside you. You won't know everything, but you'll know more than most adults do, just by trying.`,
          creativePrompt: {
            intro: `Imagine being a tiny scientist who has shrunk down and entered a human body to explore. Write a journal entry about what you see.`,
            floor: `Write at least 5 sentences. Describe one organ you encountered and what it was doing.`,
            stretch: `Write 8 to 10 sentences. Cover multiple organ systems you visited, what each one was doing, and how they were coordinating with each other.`,
            open: `Write as much as you want. Build a full exploration journal. Travel through major organ systems, describe what you see in scientific detail, and note how the body's systems coordinate to keep the human alive.`,
            frames: [
              `Today I shrank down to the size of a cell and entered the human body.`,
              `The first organ I visited was the ___.`,
              `It was doing ___.`,
              `Then I traveled to the ___.`,
              `What surprised me most was ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain how organ systems work together, name the major systems and their jobs, define homeostasis, and understand why supporting your body matters. Next lesson: we zoom out from your body to the planet your body lives on. EARTH. Our home and one of the most interesting places in the known universe. See you there. — Cosmo.`,
          badge: `body-scientist`,
          badgeName: `Body Scientist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
