// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L08 — Forces: Newton's Laws of Motion
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-PS2 — forces and motion; Newton's laws
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify scenarios by Newton's law)
// SCOPE: 4 concepts — what a force is, Newton's 1st/2nd/3rd laws,
//        the same laws govern the whole cosmos
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-08`,
      title: `Forces: Newton's Laws of Motion`,
      duration: 18,
      xpReward: 75,
      badge: `force-explorer`,
      badgeName: `Force Explorer`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we explore the rules that govern how EVERYTHING moves, from a ball you throw to the planets orbiting the Sun. Over 300 years ago, Isaac Newton discovered three simple laws that describe all motion, and astonishingly, the SAME three laws apply to a falling apple AND a spinning galaxy. That's one of the most beautiful things about the universe: it follows consistent rules everywhere. By the end of today, you'll understand Newton's three laws and see them at work all around you. Let's begin.`,
          headline: `Forces: Newton's Laws of Motion`,
          subtitle: `The three rules that govern all motion, from apples to galaxies`,
          visual: `/ue-assets/cosmos/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What a Force Is`,
          paragraphs: [
            `A FORCE is simply a PUSH or a PULL. That's it. When you push a door open, you apply a force. When gravity pulls you toward the ground, that's a force. When you kick a ball, catch it, or stretch a rubber band, forces are at work. Forces are what cause objects to start moving, stop moving, speed up, slow down, or change direction. Without forces, nothing in the universe would ever change its motion.`,
            `Forces are happening around you constantly, often several at once. Right now, gravity is pulling you down, while the floor or chair pushes up on you with an equal force, which is why you're not falling. When you walk, your foot pushes back on the ground, and the ground pushes you forward. Understanding forces is understanding WHY things move the way they do. And over 300 years ago, Isaac Newton worked out the precise rules that all forces and motion follow. These rules are so reliable that engineers still use them today to build bridges, design cars, and launch rockets into space.`,
          ],
          image: `/ue-assets/cosmos/l08-s1-force.webp`,
          imageCaption: `A force is a push or a pull. Forces start, stop, and change all motion.`,
          vocab: [
            { word: `force`,
              definition: `A push or a pull on an object. Forces cause objects to start moving, stop, speed up, slow down, or change direction. Gravity, friction, and a kick are all forces.`,
              audioPrompt: `A force is simply a push or a pull, {name}. When you push a door open, you apply a force. When gravity pulls you toward the ground, that's a force too. When you kick a ball or stretch a rubber band, forces are at work. Forces cause objects to start moving, stop moving, speed up, slow down, or change direction. Without forces, nothing would ever change its motion. Right now gravity pulls you down while the chair pushes up. Understanding forces is understanding why things move.` },
            { word: `gravity`,
              definition: `The force of attraction between any two objects that have mass. Gravity keeps you on the ground, the Moon in orbit, and the planets circling the Sun. It acts at a distance without anything touching.`,
              audioPrompt: `Gravity is the force of attraction between any two objects that have mass, {name}. The more mass an object has, the stronger its gravity. Earth's gravity keeps you on the ground and pulls everything downward. The Moon's gravity creates ocean tides. The Sun's gravity keeps all the planets in orbit. What Newton realized was that the same gravity pulling an apple to the ground also holds the Moon in orbit. One force, acting everywhere in the universe.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Newton's First Law: Inertia`,
          paragraphs: [
            `Newton's FIRST LAW says: an object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, UNLESS a force acts on it. This tendency to keep doing what it's already doing is called INERTIA. A book on a table stays put until something pushes it. A rolling ball keeps rolling until friction (a force) slows it down. In space, where there's almost no friction, a moving object can keep going forever.`,
            `You feel inertia all the time. When a car suddenly brakes, your body keeps moving forward (that's why seatbelts matter). When a car speeds up, you feel pushed back into the seat, because your body "wants" to stay at its slower speed. The heavier an object is, the more inertia it has, and the harder it is to start or stop. It's easy to stop a rolling tennis ball, but very hard to stop a rolling truck, because the truck has much more inertia. Newton's first law explains why things resist changes to their motion. Objects are, in a sense, "lazy." They keep doing what they're doing until a force changes it.`,
          ],
          image: `/ue-assets/cosmos/l08-s2-first-law.webp`,
          imageCaption: `Inertia: objects keep doing what they're doing until a force changes it.`,
          vocab: [
            { word: `inertia`,
              definition: `The tendency of an object to keep doing what it's already doing: staying at rest, or staying in motion. The more mass an object has, the more inertia, and the harder it is to start or stop.`,
              audioPrompt: `Inertia is the tendency of an object to keep doing what it's already doing, {name}. Objects at rest stay at rest; objects in motion stay in motion, unless a force acts. A book stays put until pushed. A ball keeps rolling until friction stops it. You feel inertia when a car brakes and your body keeps moving forward. The more mass an object has, the more inertia, and the harder it is to stop. A rolling truck is much harder to stop than a tennis ball for exactly this reason.` },
            { word: `mass`,
              definition: `The amount of matter in an object. The more mass an object has, the more inertia it has — and the more force is needed to start, stop, or change its motion. Mass is measured in kilograms.`,
              audioPrompt: `Mass is the amount of matter in an object, {name}. The more mass an object has, the more inertia it has, and the more force it takes to change its motion. A loaded truck has much more mass than a tennis ball, which is why it's so much harder to stop. Mass is different from weight. Weight is the pull of gravity on your mass. Your mass stays the same wherever you are, but your weight would be less on the Moon, where gravity is weaker.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Newton's Second Law: Force, Mass, and Acceleration`,
          paragraphs: [
            `Newton's SECOND LAW connects force, mass, and how quickly something speeds up (acceleration). It says: the more FORCE you apply to an object, the more it ACCELERATES (speeds up). And the more MASS an object has, the LESS it accelerates for the same force. In short: bigger push, faster change in motion; heavier object, harder to change. Scientists write it as a simple formula: Force = mass times acceleration.`,
            `You experience this constantly. Push an empty shopping cart, and it zooms forward easily. Push a cart full of heavy groceries with the same effort, and it moves much more slowly, because it has more mass. To make a heavy object accelerate as fast as a light one, you need to apply much more force. This is why a small car can speed up faster than a heavy truck with a similar engine, and why it takes a powerful rocket engine to accelerate a massive spacecraft. Newton's second law lets engineers calculate EXACTLY how much force is needed to move any object a certain way. It turns motion into precise, predictable math.`,
          ],
          image: `/ue-assets/cosmos/l08-s3-second-law.webp`,
          imageCaption: `More force means more acceleration. More mass means harder to move. F = m × a.`,
          vocab: [
            { word: `acceleration`,
              definition: `A change in an object's speed or direction. Speeding up, slowing down, and turning are all acceleration. Newton's second law says force causes acceleration, and more mass means less acceleration for the same force.`,
              audioPrompt: `Acceleration is a change in an object's speed or direction, {name}. Speeding up, slowing down, and turning are all forms of acceleration. Newton's second law connects force, mass, and acceleration: the more force you apply, the more an object accelerates; the more mass it has, the less it accelerates. Push an empty cart and it zooms. Push a full, heavy cart with the same effort and it barely moves. Scientists write this as force equals mass times acceleration. It turns motion into precise, predictable math.` },
            { word: `friction`,
              definition: `A force that resists the motion of surfaces sliding against each other. Friction slows moving objects and generates heat. Without friction, rolling balls would never stop and walking would be impossible.`,
              audioPrompt: `Friction is a force that resists the motion of surfaces sliding against each other, {name}. When you slide a book across a table, friction slows it down. Friction turns kinetic energy into heat. Rub your hands together and you'll feel it warm up. Without friction, nothing would stop moving once started, and walking would be impossible because your feet couldn't grip the ground. Friction is why we can brake cars, grip tools, and keep shoes from slipping. It's essential to everyday life.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Newton's Third Law, and Laws That Rule the Cosmos`,
          paragraphs: [
            `Newton's THIRD LAW is famous: for every action, there is an equal and opposite reaction. This means forces always come in PAIRS. When you push on something, it pushes back on you with equal force in the opposite direction. When you jump, you push down on the Earth, and the Earth pushes you up. When you swim, you push water backward, and the water pushes you forward. Rockets work this way too: they push hot gas out the back, and the gas pushes the rocket forward. There's no such thing as a one-sided force.`,
            `Here's what makes Newton's laws truly profound. These same three simple rules apply EVERYWHERE in the universe. The force that makes an apple fall from a tree is the SAME force (gravity) that keeps the Moon orbiting Earth and the planets orbiting the Sun. Newton realized this, and it was revolutionary: the heavens and the Earth follow the same laws. A galaxy spinning billions of light-years away obeys the same rules as a ball you toss in your backyard. Nova's teaching: the universe is not chaotic. It runs on consistent, discoverable laws, the same ones, everywhere. That deep order is part of what makes science possible, and part of what makes the cosmos so beautiful.`,
          ],
          image: `/ue-assets/cosmos/l08-s4-third-law.webp`,
          imageCaption: `Every action has an equal, opposite reaction. The same laws rule apples and galaxies.`,
          vocab: [
            { word: `Newton's laws`,
              definition: `Three rules discovered by Isaac Newton that describe all motion: (1) inertia, objects keep doing what they're doing; (2) force = mass × acceleration; (3) every action has an equal and opposite reaction. They apply everywhere in the universe.`,
              audioPrompt: `Newton's laws are three rules discovered by Isaac Newton that describe all motion, {name}. The first law is inertia: objects keep doing what they're doing unless a force acts on them. The second law says force equals mass times acceleration: bigger push, faster change; heavier object, harder to move. The third law says every action has an equal and opposite reaction: forces come in pairs. These same three laws apply everywhere in the universe, from a falling apple to an orbiting planet. The universe runs on consistent, discoverable rules.` },
            { word: `Isaac Newton`,
              definition: `The English scientist (1643–1727) who discovered the three laws of motion and the law of universal gravitation. His work unified the physics of Earth and the heavens under one set of rules.`,
              audioPrompt: `Isaac Newton was an English scientist who lived from 1643 to 1727, {name}. He discovered the three laws of motion and realized that the same gravity that pulls objects to the ground also keeps the Moon orbiting Earth. His work unified the physics of Earth and the heavens under one set of rules, which was revolutionary. Engineers still use his laws every day to design cars, bridges, rockets, and more. Newton is widely considered one of the most influential scientists in history.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four everyday situations. For each one, identify which of Newton's laws best explains it: FIRST LAW (inertia: objects keep doing what they're doing), SECOND LAW (force, mass, acceleration), or THIRD LAW (equal and opposite reaction)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `first`,   label: `First Law (Inertia)`,        color: `#60A5FA`, description: `Objects keep doing what they're doing unless a force acts on them.` },
            { id: `second`,  label: `Second Law (F = m × a)`,     color: `#FBBF24`, description: `More force means more acceleration; more mass means harder to move.` },
            { id: `third`,   label: `Third Law (Action-Reaction)`, color: `#34D399`, description: `Every action has an equal and opposite reaction. Forces come in pairs.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Situation #1`,
              clues: [
                { text: `A car suddenly slams on its brakes.` },
                { text: `The passengers' bodies lurch forward, even though the car is stopping.` },
                { text: `Their bodies "want" to keep moving at the original speed.` },
              ],
              correctAnswer: `first`,
              realWorldExample: `This is exactly why seatbelts are essential.`,
              explanation: `The passengers' bodies keep moving forward because of inertia: they want to keep doing what they were doing (moving). Pure first law. This is precisely why seatbelts exist, to apply the force that stops your body along with the car.`,
            },
            {
              id: `case-2`,
              caseTitle: `Situation #2`,
              clues: [
                { text: `You push an empty cart and it zooms forward easily.` },
                { text: `You push a heavily loaded cart with the same effort, and it barely moves.` },
                { text: `The difference is the amount of mass being pushed.` },
              ],
              correctAnswer: `second`,
              realWorldExample: `Anyone who's pushed a full shopping cart knows this.`,
              explanation: `Same force, different mass, different acceleration. The heavy cart has more mass, so it accelerates less. Pure second law (force = mass × acceleration). More mass means you need more force to get the same speed-up.`,
            },
            {
              id: `case-3`,
              caseTitle: `Situation #3`,
              clues: [
                { text: `A swimmer pushes the water backward with their arms.` },
                { text: `The swimmer moves forward through the water.` },
                { text: `The push on the water and the push on the swimmer are equal and opposite.` },
              ],
              correctAnswer: `third`,
              realWorldExample: `Swimming, walking, and rockets all use this law.`,
              explanation: `Push water back, and the water pushes you forward with equal force. Pure third law (action-reaction). Forces come in pairs. The same principle lets rockets fly: push gas out the back, and the gas pushes the rocket forward.`,
            },
            {
              id: `case-4`,
              caseTitle: `Situation #4 — The Tricky One`,
              clues: [
                { text: `An apple falls from a tree and hits the ground.` },
                { text: `At the same time, the Moon stays in orbit around the Earth, never falling away into space.` },
                { text: `Newton realized the SAME force explains both.` },
              ],
              correctAnswer: `first`,
              realWorldExample: `Newton's great insight linked the apple and the Moon.`,
              explanation: `Tricky because this is really about Newton's biggest IDEA, not a single law. But which law fits best? The Moon stays in orbit because of inertia (it "wants" to fly off in a straight line) combined with gravity constantly pulling it toward Earth. The inertia part, the Moon's tendency to keep moving in a straight line, is the FIRST LAW in action. Lesson: Newton's genius was realizing the apple and the Moon obey the SAME laws. The Moon is essentially "falling" toward Earth forever, but its forward inertia keeps it circling instead of crashing. The heavens and the Earth follow one set of rules. That unity is the heart of this whole lesson.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is a FORCE?`,
              options: [
                `A type of energy`,
                `A push or a pull on an object`,
                `A kind of speed`,
                `A measurement of weight only`,
              ],
              correctIndex: 1,
              explanation: `A force is simply a push or a pull. Forces cause objects to start moving, stop, speed up, slow down, or change direction. Gravity pulling you down and your hand pushing a door are both forces. Without forces, nothing would change its motion.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is INERTIA (Newton's first law)?`,
              options: [
                `The speed of an object`,
                `An object's tendency to keep doing what it's doing — staying at rest or in motion — unless a force acts on it`,
                `The weight of an object`,
                `A type of force`,
              ],
              correctIndex: 1,
              explanation: `Inertia is the tendency to keep doing what you're already doing. Objects at rest stay at rest; objects in motion keep moving, unless a force acts. The more mass, the more inertia. It's why a truck is harder to stop than a tennis ball.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What does Newton's SECOND LAW connect?`,
              options: [
                `Time and space`,
                `Force, mass, and acceleration: more force means more acceleration; more mass means harder to move`,
                `Only weight and color`,
                `Heat and light`,
              ],
              correctIndex: 1,
              explanation: `Newton's second law connects force, mass, and acceleration (force = mass × acceleration). Push harder, and an object speeds up more. Give it more mass, and the same push moves it less. It turns motion into precise, predictable math.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What does Newton's THIRD LAW say?`,
              options: [
                `Heavy things fall faster`,
                `For every action, there is an equal and opposite reaction — forces come in pairs`,
                `Objects slow down on their own`,
                `Nothing can move`,
              ],
              correctIndex: 1,
              explanation: `Newton's third law: every action has an equal and opposite reaction. Forces come in pairs. Push on something and it pushes back equally. When you swim, you push water back and it pushes you forward. Rockets push gas out and the gas pushes them up.` },

            { id: `l08-q5`, format: `true-false`,
              question: `True or false: The same force (gravity) that makes an apple fall also keeps the Moon orbiting the Earth.`,
              correctAnswer: true,
              explanation: `True. This was Newton's revolutionary insight. The same gravity that pulls an apple down keeps the Moon orbiting Earth and the planets orbiting the Sun. The heavens and the Earth follow the same laws. A galaxy obeys the same rules as a tossed ball.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `Why is it harder to stop a moving truck than a moving tennis ball?`,
              options: [
                `Trucks are faster`,
                `The truck has much more mass, so it has more inertia and resists changing its motion more`,
                `Tennis balls have no inertia`,
                `Trucks have special brakes`,
              ],
              correctIndex: 1,
              explanation: `The truck has far more mass, so it has more inertia (more tendency to keep doing what it's doing). The more mass an object has, the harder it is to start or stop. This is Newton's first and second laws working together.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `How does a ROCKET use Newton's third law to fly?`,
              options: [
                `It pushes against the air`,
                `It pushes hot gas out the back, and the gas pushes the rocket forward (equal and opposite)`,
                `It pulls itself up`,
                `It uses inertia only`,
              ],
              correctIndex: 1,
              explanation: `A rocket pushes hot gas out the back at high speed. By the third law, the gas pushes the rocket forward with equal force. This is why rockets can work even in the vacuum of space, where there's no air to push against. Action and reaction.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `What's the profound truth about Newton's laws?`,
              options: [
                `They only work on Earth`,
                `The same simple laws apply everywhere in the universe — apples, planets, and galaxies all obey them`,
                `They're different on each planet`,
                `Only scientists can use them`,
              ],
              correctIndex: 1,
              explanation: `Newton's three laws apply everywhere in the universe. The same rules govern a falling apple, an orbiting Moon, and a spinning galaxy. The universe isn't chaotic; it runs on consistent, discoverable laws. That deep order is what makes science possible.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Newton realized the same force rules an apple AND the Moon. Why do you think it was such a big deal to discover that the heavens and Earth follow the same laws?` },
            { id: `r2`, text: `Inertia means things resist changing their motion. Can you think of a non-physics example where people or habits also "resist change" and keep doing what they're doing?` },
            { id: `r3`, text: `Every action has an equal and opposite reaction. Where have you personally felt a force "push back" on you (swimming, jumping, pushing something heavy)?` },
            { id: `r4`, text: `The universe follows consistent laws everywhere. Does it comfort you or amaze you that the same rules work across the entire cosmos? Why?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Newton's laws are not ancient history. They're used every single day by engineers, pilots, athletes, and astronauts. Every car, bridge, airplane, and rocket is designed using these laws. Athletes use them (often without realizing) to jump higher, throw farther, and move faster. Video game designers use them to make movement feel realistic. Space agencies use them to navigate spacecraft across the solar system with incredible precision. Nova's note: a few simple rules, discovered over 300 years ago, still shape the modern world. That's the lasting power of understanding the deep patterns of the universe.`,
          familyAdventure: `Family Physics Experiments. As a family, try simple force experiments. (1) Inertia: put a card on a cup with a coin on top, flick the card fast, and watch the coin drop into the cup (it stayed put due to inertia). (2) Action-reaction: blow up a balloon and let it go, watch it zoom as air pushes out one way and the balloon flies the other. (3) Mass and force: roll a tennis ball and a heavier ball with the same push and compare. Talk about which law each shows.`,
          creativePrompt: {
            intro: `Imagine you're a sports coach explaining how Newton's laws help athletes perform better. Write your coaching talk.`,
            floor: `Write at least 5 sentences. Explain at least two of Newton's laws and how they apply to a sport you know.`,
            stretch: `Write 8 to 10 sentences. Explain all three of Newton's laws with sports examples (like running, jumping, swimming, or throwing).`,
            open: `Write as much as you want. Write a full coaching talk. Explain each of Newton's three laws clearly, then show how each one applies to real sports moves: how inertia affects a runner stopping, how force and mass affect acceleration off the starting line, and how action-reaction helps a swimmer or jumper. Make the physics genuinely useful for an athlete.`,
            frames: [
              `Listen up, team. Physics can make you a better athlete.`,
              `Newton's first law, inertia, matters when you ___.`,
              `The second law tells us that to move faster, ___.`,
              `The third law is why, when you push off the ground, ___.`,
              `So if you understand these laws, you can ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Powerful work, {name}. You can now explain what a force is, all three of Newton's laws of motion, and the profound truth that the same laws govern apples and galaxies alike. Next lesson: we explore what makes everything happen, the thing that powers all motion, life, and change in the universe. ENERGY. See you there. — Nova.`,
          badge: `force-explorer`,
          badgeName: `Force Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
