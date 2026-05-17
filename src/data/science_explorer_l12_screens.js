// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L12 — Forces and Motion: Push, Pull, Gravity
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-PS2-1 / 3-PS2-1 (forces and motion)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L12 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-12`,
      title:     `Forces and Motion: Push, Pull, Gravity`,
      duration:  12,
      xpReward:  50,
      badge:     `force-explorer`,
      badgeName: `Force Explorer`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Last lesson, you learned everything is MATTER. Today — let's make matter MOVE. Everything that moves does it because something PUSHED or PULLED it. Even when you walk, you're pushing the ground. Even when a ball falls, something is pulling it down. Today you'll learn about FORCES — pushes and pulls — and the most important one of all, GRAVITY. Let's go!`,
          headline: `Forces and Motion: Push, Pull, Gravity`,
          subtitle: `Why things move — and why they stop`,
          visual: `/explorer-assets/science/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Everything That Moves`,
          paragraphs: [
            `Look around. What's MOVING right now?`,
            `Maybe a kid running. A ball rolling. Wind blowing leaves. A car driving. Your dog wagging its tail. Your own breath going in and out. Even when things look still — like a book on a shelf — things are happening at tiny levels. EVERYTHING that moves does it because of a FORCE. A force is anything that PUSHES or PULLS something. No force = no movement. With force = movement starts, stops, speeds up, slows down, or changes direction.`,
          ],
          image: `/explorer-assets/science/l12-s1-everything-moves.webp`,
          imageCaption: `Everything moves because of a FORCE — a push or a pull. No force = no movement.`,
          vocab: [
            { word: `force`,          definition: `Anything that pushes or pulls. FORCES make things move, stop, or change direction.`,
              audioPrompt: `A force, {name}, is anything that pushes or pulls. Forces make things move, stop, speed up, slow down, or change direction. Every motion in the universe is caused by a force. When you walk, you're pushing the ground. When you throw, you're pushing the ball. When you catch, you're pulling it. Forces are everywhere.` },
            { word: `motion`,         definition: `Movement. When something MOVES, it's in motion.`,
              audioPrompt: `Motion, {name}, is movement. When something moves, it's in motion. A running kid is in motion. A rolling ball is in motion. A still book sitting on a shelf is NOT in motion. Motion needs a force to start. And motion needs another force (like friction) to stop.` },
            { word: `move`,           definition: `To go from one place to another. Forces make things MOVE.`,
              audioPrompt: `To move, {name}, is to go from one place to another. Forces make things move. Without a force, things stay where they are. Push a ball — it moves. Don't push it — it stays. Same with everything else. Forces are the cause. Motion is the result.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PUSHING: Force Away`,
          paragraphs: [
            `A PUSH is a force that moves something AWAY from you.`,
            `Push a ball — it rolls away. Push a chair — it slides away. Push a swing — it swings away from you. Push a door — it opens away from you. When you walk, your feet PUSH the ground. (The ground pushes back, which is why you move forward!) When you sneeze, you push air out of your nose. When you breathe out, same thing. PUSHES are everywhere. They're how we move things AWAY from ourselves.`,
          ],
          image: `/explorer-assets/science/l12-s2-push.webp`,
          imageCaption: `Push = force AWAY from you. Push the ball, the ground, the door. Pushes move things away.`,
          vocab: [
            { word: `push`,           definition: `A force that moves things AWAY from you.`,
              audioPrompt: `A push, {name}, is a force that moves things away from you. When you push a ball, it rolls away. When you push a door, it opens away. When you push the floor with your feet, you move forward (the floor pushes back). Pushes are everywhere in everyday life. Some are gentle. Some are powerful. All move things away.` },
            { word: `away`,           definition: `In a direction FROM you. Pushes make things go AWAY.`,
              audioPrompt: `Away, {name}, is in a direction from you. Pushes make things go away. You stay where you are. The thing you pushed moves to a new place — farther from you. Sometimes far away (push a ball hard). Sometimes just a little (gently push a stack of books straight). Either way — away.` },
            { word: `walk`,           definition: `When you WALK, your feet PUSH the ground to move you forward.`,
              audioPrompt: `When you walk, {name}, your feet push the ground. The ground pushes back. That's how you actually move forward. Your feet aren't pulling you — they're pushing. If the ground were too slippery to push against (like wet ice), you couldn't walk. The push-and-push-back of walking is happening with every step you take.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PULLING: Force Toward`,
          paragraphs: [
            `A PULL is a force that moves something TOWARD you.`,
            `Pull a wagon — it comes toward you. Pull a friend's hand — they come closer. Pull open a drawer — it slides toward you. Magnets PULL each other. Tractors PULL plows. Boats are PULLED by tugboats. When you pick something up, your hand PULLS it up. Pulls are EVERYWHERE — just as common as pushes. They're how we move things TOWARD ourselves.`,
          ],
          image: `/explorer-assets/science/l12-s3-pull.webp`,
          imageCaption: `Pull = force TOWARD you. Pull a wagon, a hand, a drawer. Pulls bring things closer.`,
          vocab: [
            { word: `pull`,           definition: `A force that moves things TOWARD you.`,
              audioPrompt: `A pull, {name}, is a force that moves things toward you. When you pull a wagon, it comes toward you. When you pull a door open, it comes toward you. When you pick something up, your hand pulls it. Pulls are everywhere in everyday life. They're just as common as pushes — and just as important.` },
            { word: `toward`,         definition: `In a direction COMING to you. Pulls bring things TOWARD you.`,
              audioPrompt: `Toward, {name}, is in a direction coming to you. Pulls bring things toward you. You stay where you are. The thing you pulled moves to a new place — closer to you. Sometimes very close (pull a hug). Sometimes just a little (pull a chair an inch). Either way — toward.` },
            { word: `magnet`,         definition: `Something that PULLS certain metals toward it. MAGNETS use pulling force.`,
              audioPrompt: `A magnet, {name}, is something that pulls certain metals toward it. Magnets are made of special materials that create an invisible pulling force. They pull iron, nickel, and a few other metals. Magnets can pull from a distance — without even touching. Magnetic force is a real, invisible pull. Pretty cool.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `GRAVITY: The Big Pull`,
          paragraphs: [
            `Here's the MOST IMPORTANT pull on Earth — GRAVITY.`,
            `Gravity is the invisible force that pulls EVERYTHING down to the ground. Drop an apple — it falls. Drop a feather — it falls. Drop yourself off a chair — gravity pulls you down too! Earth is HUGE — and big things have strong gravity. Earth's gravity is constantly pulling you down (which is why you're sitting on the ground and not floating away). The MOON has gravity too — but weaker, because the moon is smaller. The SUN has HUGE gravity, which keeps Earth orbiting it. Without gravity, everything would float away.`,
          ],
          image: `/explorer-assets/science/l12-s4-gravity.webp`,
          imageCaption: `Gravity: invisible force that pulls everything DOWN. Earth pulls you. Sun pulls Earth. Big things pull hard.`,
          vocab: [
            { word: `gravity`,        definition: `The invisible force that pulls things DOWN — toward big objects like Earth.`,
              audioPrompt: `Gravity, {name}, is the invisible force that pulls things down. Toward the center of big objects like Earth. Right now, gravity is pulling you down. That's why you stay on the ground and don't float away. Gravity is what makes things FALL. It works everywhere — on Earth, on the moon, in space. Big objects have strong gravity. Small objects have weak gravity.` },
            { word: `down`,           definition: `Toward the ground. Gravity pulls EVERYTHING down on Earth.`,
              audioPrompt: `Down, {name}, is toward the ground. Gravity pulls everything down on Earth. Drop a ball — it goes down. Jump up — you come back down. Water flows down. Even raindrops fall down. Without gravity, things wouldn't have a 'down' to go to. Gravity gives Earth its up and down.` },
            { word: `everywhere`,     definition: `In all places. Gravity is EVERYWHERE — it never stops or takes breaks.`,
              audioPrompt: `Everywhere, {name}, means in all places. Gravity is everywhere on Earth. It never stops, never takes a break. It's working right now. It's been working since Earth formed billions of years ago. It will keep working as long as Earth exists. Gravity is one of the most reliable forces in the universe. Always on. Always pulling.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `FRICTION: The Stopper`,
          paragraphs: [
            `Once something is MOVING, what makes it STOP? FRICTION.`,
            `Friction is a force that happens when TWO surfaces RUB against each other. It SLOWS things down. Roll a ball on the floor — eventually it stops because of friction with the ground. Slide on a slide — eventually you stop. Bike along the road — to keep going, you have to keep pushing your pedals (because friction is slowing you). Different surfaces have different friction. ICE = low friction (things slide easily). CARPET = high friction (things stop fast). Friction is good and bad — it stops cars from sliding off roads (good), but it slows down moving things (sometimes bad).`,
          ],
          image: `/explorer-assets/science/l12-s5-friction.webp`,
          imageCaption: `Friction = force when surfaces rub. SLOWS things down. Different surfaces, different friction.`,
          vocab: [
            { word: `friction`,       definition: `A force that happens when surfaces RUB. FRICTION slows moving things down.`,
              audioPrompt: `Friction, {name}, is a force that happens when surfaces rub against each other. Friction slows moving things down. A rolling ball slows because of friction with the ground. A sliding box slows because of friction. Without friction, things would keep moving forever — which sounds fun, but you couldn't stop cars, walk normally, or hold things in your hand.` },
            { word: `surfaces`,       definition: `The outsides of things. FRICTION happens when two surfaces rub.`,
              audioPrompt: `Surfaces, {name}, are the outsides of things. Floor surfaces. Skin surfaces. Ball surfaces. When two surfaces rub against each other, friction happens. Some surfaces have lots of friction (carpet, rough ground). Some have very little (ice, smooth metal). It depends on how rough or smooth the surface is.` },
            { word: `slow down`,      definition: `To go slower. Friction makes moving things SLOW DOWN.`,
              audioPrompt: `Slow down, {name}, means to go slower. Friction makes moving things slow down. That's why you can't keep rolling forever — friction is constantly working against you. Smooth surfaces have less friction, so things slow down slower. Rough surfaces have more friction, so things slow down faster. Friction is the natural brake of the universe.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Forces Are EVERYWHERE`,
          paragraphs: [
            `Now that you know about forces, you'll see them EVERYWHERE.`,
            `Sit on a swing — gravity pulls you down. Someone pushes — you swing up. Friction in the chain slowly stops you. Throw a ball — your arm PUSHES it. Air friction slows it. Gravity pulls it down. It lands. Open a door — you PULL or PUSH. Drive a car — engine PUSHES wheels, gravity PULLS car down, friction slows it. Even when you stand STILL — gravity is pulling you down, and the ground is pushing you up. Forces are happening EVERY second, in EVERY direction. They make the universe work.`,
          ],
          image: `/explorer-assets/science/l12-s6-forces-everywhere.webp`,
          imageCaption: `Forces are everywhere. Every movement involves pushes, pulls, gravity, and friction. The whole world running.`,
          vocab: [
            { word: `everywhere`,     definition: `In all places. Forces are EVERYWHERE — making things move all the time.`,
              audioPrompt: `Everywhere, {name}, means in all places. Forces are everywhere. Right now, gravity is pulling you down. The ground is pushing you up. Air is gently pushing on you in all directions. Friction in your clothes is rubbing against your skin. Forces are constantly happening, all around you. Once you understand forces, you understand how the world works.` },
            { word: `interaction`,    definition: `When things affect each other. Forces are INTERACTIONS between objects.`,
              audioPrompt: `An interaction, {name}, is when things affect each other. Forces are interactions between objects. The ball interacts with your hand when you push it. The wagon interacts with you when you pull it. Earth interacts with everything through gravity. Forces are how objects 'talk' to each other in the physical world.` },
            { word: `make-the-world-work`, definition: `Forces are what makes EVERYTHING happen in the physical universe.`,
              audioPrompt: `Make the world work, {name} — forces are what make everything happen in the physical universe. No forces = no movement = no life. Plants growing — forces. Water flowing — forces. Hearts beating — forces. Stars burning — forces. The whole universe is forces in action. Understanding them is understanding how reality functions.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `FORCES — pushes and pulls — make things move, stop, or change direction.`,
              matchPhrase: `Yes! Every motion in the universe is caused by a force. Pushes move things away. Pulls move things toward. Gravity pulls down. Friction slows things. Forces are causing everything.`,
              correctMatch: `fact` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `GRAVITY always pulls things DOWN — toward the center of Earth.`,
              matchPhrase: `True! Gravity never stops. It pulls things down 24/7 — every second of every day. That's why everything stays on the ground and doesn't float away. Earth's gravity is reliable.`,
              correctMatch: `fact` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `Objects can MOVE all by themselves — without any push, pull, or other force.`,
              matchPhrase: `Not at all! Nothing moves without a force. A ball doesn't suddenly roll on its own. A book doesn't fly off a shelf. There's ALWAYS a push or pull behind any motion.`,
              correctMatch: `myth` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `GRAVITY only works on certain days of the week — sometimes things just float instead of falling.`,
              matchPhrase: `Definitely not! Gravity works ALL the time. Every second. Things on Earth always fall down when dropped. Gravity never takes breaks. It's been working for billions of years and never stops.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a FORCE?`,
              options: [`A type of food`, `Anything that PUSHES or PULLS — makes things move, stop, or change direction`, `Only things in space`, `A book`],
              correctIndex: 1,
              explanation: `A force is anything that pushes or pulls. Forces cause all motion — making things move, stop, speed up, slow down, or change direction.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `When you PUSH a ball, which direction does it move?`,
              options: [`Toward you`, `AWAY from you`, `Up only`, `It doesn't move`],
              correctIndex: 1,
              explanation: `Away from you! Pushes move things away. Pulls move things toward you. Push = away. Pull = toward. Simple rule.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `What is GRAVITY?`,
              options: [`A type of music`, `The invisible force that pulls things DOWN toward the ground`, `What plants do`, `A bird`],
              correctIndex: 1,
              explanation: `Gravity is the invisible force that pulls things down toward the ground. It works on everything. It never stops. That's why you stay on the ground and don't float away.` },
            { id: `l12-q4`, format: `true-false`,
              question: `FRICTION is a force that happens when surfaces rub together — and it SLOWS moving things down.`,
              correctAnswer: true,
              explanation: `True! Friction is the force that slows things down. Rough surfaces have more friction (carpet stops things fast). Smooth surfaces have less (ice lets things slide far).` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `When you walk, your feet ___ the ground — and the ground pushes back to move you forward.`,
              options: [`push`, `eat`, `paint`, `read`],
              correctIndex: 0,
              explanation: `Push! Your feet push the ground. The ground pushes back. That's how you move forward. Without pushing the ground, you couldn't walk.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why does a rolling ball EVENTUALLY stop?`,
              options: [`It gets tired`, `Friction with the ground slows it down`, `Magic`, `It doesn't stop`],
              correctIndex: 1,
              explanation: `Friction! As the ball rolls, friction with the ground slowly takes its energy away. Eventually all the energy is gone and the ball stops. Without friction, the ball would roll forever.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. ENGINEERS work with forces every single day. They design CARS so wheels grip the road (using friction), but engines push them forward (overcoming friction). They build BRIDGES that can hold the gravity of thousands of cars without falling. They design ROCKETS powerful enough to push UP harder than gravity pulls down — so we can leave Earth and go to space. They make ROLLER COASTERS that use gravity to thrill you. Forces aren't just science — they're the basis of every machine humans have ever built.`,
          familyAdventure: `Do FORCE EXPERIMENTS together. Try these: 1) Push a toy car on different surfaces — carpet, wood floor, smooth tile. Which goes farthest? (Smooth = less friction.) 2) Drop different things from a safe height — feather, ball, paper. Which falls fastest? (Air friction matters!) 3) Roll a ball UP a slope. What pulls it back down? (Gravity!) Forces in action.`,
          creativePrompt: `Draw a PICTURE of yourself at a playground. Add arrows showing the FORCES happening: a) GRAVITY pulling you down. b) The SLIDE PUSHING up on your feet. c) Your friend PULLING a wagon. d) A swing being PUSHED. e) FRICTION on the ground. Label each arrow. See how many forces happen in one playground.`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know FORCES — pushes and pulls. You know GRAVITY pulls everything down. You know FRICTION slows things. You know NOTHING moves without a force behind it. The whole physical world makes more sense now. Every car, every ball, every drop of rain — all working because of forces. See you next lesson!`,
          badge: `force-explorer`,
          badgeName: `Force Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L12] Loaded: "Forces and Motion" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
