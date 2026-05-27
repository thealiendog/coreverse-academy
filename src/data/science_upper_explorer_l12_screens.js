// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L12 — Forces and Motion: Push, Pull, Gravity
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 3-PS2-1, 3-PS2-2 — Effects of balanced and unbalanced
//            forces; pattern of motion can be used to predict future motion
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what forces are, gravity in particular, friction
//        and other forces, Newton's three big ideas
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-12`,
      title: `Forces and Motion: Push, Pull, Gravity`,
      duration: 18,
      xpReward: 75,
      badge: `force-detective`,
      badgeName: `Force Detective`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Why does a ball fall when you drop it? Why does a car eventually stop if you take your foot off the gas? Why do otters slide effortlessly through water but you can't? All of these are answered by FORCES. A force is just a push or a pull. Forces make things move, change direction, or stop. Once you understand forces, the whole physical world becomes more predictable. Let's go.`,
          headline: `Forces and Motion`,
          subtitle: `Why things move — and why they stop`,
          visual: `/ue-assets/science/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Forces Actually Are`,
          paragraphs: [
            `A FORCE is a PUSH or a PULL on something. That's the whole definition. Forces are everywhere. When you push a door open, you're applying a force. When you pull a chair toward you, you're applying a force. When the wind pushes leaves around, that's a force. When magnets attract or repel each other, those are forces. Almost everything that moves or changes direction does so because of forces.`,
            `Forces have two important parts. STRENGTH (how strong the push or pull is) and DIRECTION (which way it's pointing). When forces on an object are BALANCED (equal in opposite directions), the object doesn't change motion. A book on a table is held there by gravity pulling down and the table pushing up. The forces are balanced, so the book sits still. When forces are UNBALANCED, the object's motion CHANGES. If you push the book and the table doesn't push back enough, the book slides. Unbalanced forces are what cause acceleration (speeding up, slowing down, or changing direction).`,
          ],
          image: `/ue-assets/science/l12-s1-forces.webp`,
          imageCaption: `Push or pull. Strength and direction. The whole story of forces.`,
          vocab: [
            { word: `force`,
              definition: `A push or pull on an object. Forces have strength and direction. They make objects move, change direction, or stop.`,
              audioPrompt: `A force is a push or pull on an object, {name}. Pushing a door is a force. Pulling a chair is a force. Wind blowing leaves is a force. Magnets attracting each other is a force. Almost everything in the universe that moves or changes direction is being affected by some force. Forces have strength (how hard they push or pull) and direction (which way they point). When forces are balanced, an object doesn't change motion. When they're unbalanced, the object speeds up, slows down, or changes direction.` },
            { word: `acceleration`,
              definition: `A change in motion — speeding up, slowing down, or changing direction. Acceleration happens when an unbalanced force acts on an object.`,
              audioPrompt: `Acceleration is a change in motion, {name}. An object accelerates when it speeds up, slows down, or changes direction. Any of those counts as acceleration. Acceleration happens when an unbalanced force acts on an object. The stronger the force, the greater the acceleration. The more massive the object, the harder it is to accelerate. This relationship between force, mass, and acceleration is Newton's second law of motion. Pushing a light shopping cart and a heavy one with the same force, the light one accelerates faster.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Gravity: The Big Pull`,
          paragraphs: [
            `GRAVITY is one of the most familiar and important forces. Every object with mass pulls on every other object with mass. The Sun pulls on Earth (which is why we orbit it). Earth pulls on the Moon (which is why the Moon orbits us). Earth pulls on YOU constantly. That's why you don't float off the floor and why dropped objects fall. The strength of gravity depends on two things: how MUCH MASS the objects have, and how CLOSE they are to each other.`,
            `Earth's gravity pulls everything toward the planet's center. Drop a ball, it falls down. Step off a cliff, you fall down. Even the air around you is being pulled toward Earth (which is why air pressure is heaviest at sea level). The Moon has only about 1/6 of Earth's gravity, which is why astronauts on the Moon could jump so high. Jupiter has much more gravity than Earth, so if you stood on its (hypothetical) surface, you'd weigh nearly 2.5 times more. Gravity affects EVERY object with mass throughout the entire universe. The same force that drops your dropped fork to the floor also keeps galaxies together.`,
          ],
          image: `/ue-assets/science/l12-s2-gravity.webp`,
          imageCaption: `Mass pulls on mass. Drops fall. Planets orbit. Galaxies stay together.`,
          vocab: [
            { word: `gravity`,
              definition: `A force that pulls objects with mass toward each other. Earth's gravity pulls everything toward the planet's center. Stronger for larger masses and closer distances.`,
              audioPrompt: `Gravity is a force that pulls objects with mass toward each other, {name}. Every object with mass attracts every other object with mass. The strength depends on two things: how much mass each object has, and how close they are. Earth's gravity pulls everything toward the planet's center. That's why dropped objects fall down. The Sun's gravity holds Earth in orbit. Earth's gravity holds the Moon in orbit. Gravity affects every object in the universe, from a tiny dropped pencil to entire galaxies.` },
            { word: `mass`,
              definition: `The amount of matter in an object, measured in kilograms. Mass is different from weight — your mass stays the same everywhere, but your weight changes with gravity.`,
              audioPrompt: `Mass is the amount of matter in an object, {name}. It is measured in kilograms. Mass is different from weight. Weight is the force gravity exerts on an object. Your mass stays the same wherever you are. But your weight changes depending on where you are. On the Moon, with its lower gravity, you would weigh much less, even though your mass is exactly the same. On Jupiter, with its stronger gravity, you would weigh much more.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Friction and Other Forces`,
          paragraphs: [
            `FRICTION is the force that opposes motion when two surfaces rub against each other. When you slide a book across a table, friction between the book and the table slows the book down until it stops. Friction is why your shoes grip the ground. Friction is why brakes stop a car. Friction creates heat, which is why rubbing your hands together warms them up. Without friction, you couldn't walk, couldn't drive, couldn't write with a pencil. Friction makes everyday life possible.`,
            `Other common forces include MAGNETISM (which we covered briefly), ELECTRIC FORCES (which hold atoms together and make lightning possible), and TENSION (the pulling force in a rope or string when stretched). Each force has its own rules but they all share the same basic idea: a push or pull that affects motion. Engineers and physicists spend their careers learning how to use forces well, from designing bridges (where forces have to be balanced) to launching rockets (where forces have to overcome gravity).`,
          ],
          image: `/ue-assets/science/l12-s3-friction.webp`,
          imageCaption: `Friction, magnetism, electric force, tension. Different forces, same basic idea.`,
          vocab: [
            { word: `friction`,
              definition: `A force that opposes motion when two surfaces rub against each other. Friction slows moving things down, lets you grip surfaces, and creates heat.`,
              audioPrompt: `Friction is a force that opposes motion when two surfaces rub against each other, {name}. When you slide a book across a table, friction slows it down until it stops. When you walk, friction between your shoes and the ground lets you push off without slipping. When you rub your hands together, friction creates heat. Brakes use friction to stop cars. Without friction, you couldn't walk, write with a pencil, or hold anything. Friction is one of the most important forces in everyday life.` },
            { word: `tension`,
              definition: `The pulling force that acts through a stretched rope, cable, or string. Rock climbing ropes, bridge cables, and bowstrings all work through tension.`,
              audioPrompt: `Tension is the pulling force that acts through a stretched rope, cable, or string, {name}. When you pull on both ends of a rope, tension acts along the rope. A rock climber's safety rope has tension keeping them from falling. Bridge cables are under enormous tension, holding up the bridge deck. Tension is always a pulling force, never a pushing one. When a rope breaks, the tension exceeded what the rope could handle. Tension is one of several important forces alongside gravity, friction, and other pushes and pulls.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Newton's Three Big Ideas`,
          paragraphs: [
            `In the 1600s, ISAAC NEWTON (we met him in the History UE Scientific Revolution lesson) figured out three rules that describe how forces and motion work everywhere in the universe. (1) Objects keep doing what they're doing UNLESS a force changes them. A still object stays still. A moving object keeps moving in a straight line at the same speed, unless something pushes or pulls it. This is called INERTIA. That's why you slide forward when a car brakes — your body wants to keep moving until something (like a seatbelt) stops you.`,
            `(2) When you apply a force to an object, its motion changes based on how strong the force is and how massive the object is. A small push barely moves a heavy box. A strong push moves a light box quickly. This is the basic relationship between force, mass, and acceleration. (3) When you push on something, it pushes BACK on you with equal force. Walk and your feet push backward on the ground; the ground pushes forward on you, which is what makes you move. Otters swim because we push water backward; water pushes us forward. This third law explains how rockets work, how birds fly, and how almost everything that moves actually moves.`,
          ],
          image: `/ue-assets/science/l12-s4-newton.webp`,
          imageCaption: `Three rules of motion. They describe everything from cars to rockets.`,
          vocab: [
            { word: `inertia`,
              definition: `The tendency of an object to keep doing what it's doing — staying still if at rest, or moving in a straight line at the same speed if in motion — unless a force acts on it.`,
              audioPrompt: `Inertia is the tendency of an object to keep doing what it's doing, {name}. A still object stays still. A moving object keeps moving in a straight line at the same speed. Unless a force changes it. This is Newton's first big idea about motion. You experience inertia all the time. When a car brakes suddenly, your body slides forward because your body wants to keep moving. The car stopped, but you didn't, until your seatbelt applied a force. That's inertia in action.` },
            { word: `Newton`,
              definition: `Isaac Newton, the 1600s scientist who discovered three laws of motion and figured out how gravity works. His laws describe how forces and motion work throughout the universe.`,
              audioPrompt: `Isaac Newton was a scientist who lived in the 1600s and figured out three laws that describe how forces and motion work everywhere in the universe, {name}. His first law: objects keep doing what they're doing unless a force changes them. His second law: force equals mass times acceleration. His third law: every action has an equal and opposite reaction. Newton also figured out how gravity works. He remains one of the most important scientists in history. His laws still describe most everyday motion accurately.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes about forces and motion. For each one, identify the FORCE most responsible: GRAVITY (pull toward Earth or another massive object), FRICTION (force opposing motion when surfaces rub), or APPLIED PUSH/PULL (a person or object directly pushing or pulling)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `gravity`,    label: `Gravity`,        color: `#A78BFA`, description: `The pull from a large mass like Earth, the Moon, or the Sun.` },
            { id: `friction`,   label: `Friction`,        color: `#F87171`, description: `The force opposing motion when two surfaces rub against each other.` },
            { id: `applied`,    label: `Applied Push/Pull`, color: `#34D399`, description: `Someone or something directly pushing or pulling.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `A bowling ball rolls down a lane and slowly slows down.` },
                { text: `Nobody is touching it during this time.` },
                { text: `It's traveling on the wooden floor of the lane.` },
              ],
              correctAnswer: `friction`,
              realWorldExample: `Bowling balls slowing on lanes is a classic friction example.`,
              explanation: `The ball is slowing without anything pushing it backward. The cause is FRICTION between the ball and the lane (also a tiny bit of air resistance). Pure friction. Without friction, the ball would roll forever in a straight line.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `An apple drops from a tree branch.` },
                { text: `It accelerates as it falls.` },
                { text: `It hits the ground a second later.` },
              ],
              correctAnswer: `gravity`,
              realWorldExample: `The classic Newton-and-the-apple story.`,
              explanation: `Apple accelerating downward. Pure gravity. Earth's mass pulls every object toward its center. The same force keeps you on the floor and keeps the Moon in orbit.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `A kid kicks a soccer ball.` },
                { text: `The ball flies forward across the field.` },
                { text: `The kid's foot was in direct contact with the ball when it started moving.` },
              ],
              correctAnswer: `applied`,
              realWorldExample: `Kicking a soccer ball is a classic applied force.`,
              explanation: `The ball wasn't moving until the kid kicked it. Pure applied force. Once the ball is in the air, gravity will pull it down and friction with the air will slow it slightly, but the INITIAL motion came from a direct push.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `A person jumps off a skateboard while it's moving.` },
                { text: `The skateboard slows down after they jump off.` },
                { text: `The person doesn't touch the skateboard once they're off.` },
              ],
              correctAnswer: `friction`,
              realWorldExample: `Coasting skateboards slowing on their own happens because of friction.`,
              explanation: `Tricky because the moving skateboard came from the person's push (applied force). But the QUESTION is about why it SLOWED DOWN after the person left it. That's friction between the wheels and ground, plus air resistance. Pure friction. Lesson: an object's motion can have multiple stages with different forces dominating. The initial push got it moving. Friction slows it down. Each stage has its own dominant force.`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a FORCE?`,
              options: [
                `Something invisible`,
                `A push or pull on an object, with strength and direction`,
                `Something only adults have`,
                `A type of energy`,
              ],
              correctIndex: 1,
              explanation: `A force is just a push or pull. It has strength and direction. Forces are everywhere. They make objects start moving, stop moving, change speed, or change direction.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is GRAVITY?`,
              options: [
                `Just on Earth`,
                `A force that pulls objects with mass toward each other — everywhere in the universe, from dropped apples to galaxies`,
                `Air pressure`,
                `Friction`,
              ],
              correctIndex: 1,
              explanation: `Gravity is the force between any two objects with mass. Stronger for larger masses and closer distances. The same force pulls dropped objects to the ground AND keeps planets in orbit around stars.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `Why would astronauts on the MOON be able to jump SO MUCH higher than on Earth?`,
              options: [
                `Different air`,
                `The Moon has only about 1/6 of Earth's gravity, so the same push gets you higher`,
                `They train differently`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `The Moon has less mass than Earth, so its gravity is weaker. Less gravity pulling down means the same jump goes much higher. On Jupiter, you'd weigh nearly 2.5 times more because its gravity is stronger.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What is FRICTION?`,
              options: [
                `Wind`,
                `A force that opposes motion when two surfaces rub against each other`,
                `Gravity in reverse`,
                `Heat`,
              ],
              correctIndex: 1,
              explanation: `Friction is the force that slows things down when they rub against each other. It's why rolling balls eventually stop. It's also why you can walk without slipping. Friction is essential for everyday life.` },

            { id: `l12-q5`, format: `true-false`,
              question: `True or false: If forces on an object are BALANCED, the object stays still or keeps moving the same way.`,
              correctAnswer: true,
              explanation: `True. Balanced forces mean the object's motion doesn't change. A book on a table has gravity pulling it down and the table pushing it up. The forces balance, so the book sits still. When forces are unbalanced, motion changes.` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `What does INERTIA mean?`,
              options: [
                `The same thing as gravity`,
                `The tendency of an object to keep doing what it's doing unless a force changes it`,
                `Falling fast`,
                `Pushing hard`,
              ],
              correctIndex: 1,
              explanation: `Inertia is the tendency to keep moving (or keep still). A still object wants to stay still. A moving object wants to keep moving. You need a force to change motion. This is Newton's first big idea about motion.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `According to Newton's third law, what happens when you push on something?`,
              options: [
                `Nothing`,
                `It pushes back on you with equal force — this is how walking, swimming, and rocket launches all work`,
                `It disappears`,
                `It floats`,
              ],
              correctIndex: 1,
              explanation: `When you push on something, it pushes back with equal force. Walk: your feet push backward, ground pushes you forward. Swim: you push water back, water pushes you forward. Rockets: hot gas pushes down, rocket pushes up. This third law explains a huge amount of motion.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `Why do BRAKES stop a moving car?`,
              options: [
                `Magic`,
                `Brake pads create friction with the wheels, which converts the car's motion into heat and slows it down`,
                `Gravity`,
                `The car just decides to stop`,
              ],
              correctIndex: 1,
              explanation: `Brakes work by pressing brake pads against spinning wheel parts. The friction slows the wheels. Without friction, brakes wouldn't work. The energy from the car's motion gets converted into heat. That's why heavily-used brakes get hot.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick a sport or activity you like. Identify three places where forces matter in it. Which forces are involved?` },
            { id: `r2`, text: `Imagine there was NO friction anywhere. What would change about your daily life?` },
            { id: `r3`, text: `Newton's first law says you keep doing what you're doing unless something pushes or pulls you. Is this also true about your life choices and habits, not just physics?` },
            { id: `r4`, text: `Cosmo swims fast through water by pushing water backward (which pushes him forward). What does that suggest about the way YOU swim or walk?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Forces govern everything that moves in the universe. Engineers design bridges, cars, planes, and rockets all using force calculations. Athletes train to use forces well (a tennis player aims a racket to apply force in a specific direction). Doctors think about forces on bones and joints. Even everyday choices (sliding a chair, opening a door, throwing a ball) use the same physics. The deeper you understand forces, the better you can predict and use them in real situations.`,
          familyAdventure: `Family Friction Experiment. Find three different surfaces in your house: smooth (a hard floor), medium (a rug), rough (sandpaper if you have any, or a doormat). Push a small toy across each one with the same starting push. Compare how far it travels. Notice that the rougher the surface, the more friction, and the shorter the distance. This is a direct test of how friction works.`,
          creativePrompt: {
            intro: `Imagine being a designer of a Mars rover. The rover has to drive across rocky Martian terrain. Write notes about which forces you need to think about.`,
            floor: `Write at least 5 sentences. Cover gravity (different on Mars), friction (between wheels and ground), and at least one applied force the rover will need.`,
            stretch: `Write 8 to 10 sentences. Include gravity (Mars has about 38% of Earth's), wheel friction for traction, applied force from motors, and how forces balance when the rover is climbing or stopping.`,
            open: `Write as much as you want. Build a full engineering proposal. Discuss every relevant force, how the rover will overcome obstacles, what dangers come from misunderstanding forces (sliding, tipping), and how the engineering of the rover handles each.`,
            frames: [
              `For a Mars rover, I need to think about several forces.`,
              `Mars's gravity is ___, so ___.`,
              `Friction between the wheels and Martian ground is important because ___.`,
              `The motors need to apply force in order to ___.`,
              `If forces aren't balanced, the rover might ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define what a force is, explain gravity, friction, and other key forces, and understand Newton's three big ideas about motion. Next lesson: another energy story. LIGHT, how we see, and what light actually is. See you there. — Cosmo.`,
          badge: `force-detective`,
          badgeName: `Force Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
