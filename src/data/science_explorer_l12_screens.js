// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L12 — Forces and Motion: Push, Pull, Gravity
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-PS2-1 / 3-PS2-1
// REWRITE v2 (May 2026): Grade 1 accessible, PUSH / PULL / GRAVITY 3-bucket
// identification game tests sorting actions by which force is at work
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Last lesson, you learned everything is MATTER! Today — let's make matter MOVE! Everything that moves does it because something PUSHED or PULLED it! Even when you walk, you're pushing the ground! Today you'll learn about FORCES — pushes and pulls — and the most important one, GRAVITY! Let's go!`,
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
            `Look around, {name}! What's MOVING right now?`,
            `Maybe a kid running! A ball rolling! Wind blowing leaves! A car driving! Your dog wagging its tail! Your own breath going in and out! Even when things look still — like a book on a shelf — things are happening at tiny levels! EVERYTHING that moves does it because of a FORCE! A force is anything that PUSHES or PULLS something! No force = no movement!`,
          ],
          image: `/explorer-assets/science/l12-s1-everything-moves.webp`,
          imageCaption: `Everything moves because of a FORCE — a push or a pull!`,
          vocab: [
            { word: `force`,  definition: `Anything that pushes or pulls.`,
              audioPrompt: `A force is anything that pushes or pulls. Forces make things move, stop, speed up, slow down, or change direction. Every motion in the universe is caused by a force. Forces are everywhere!` },
            { word: `motion`, definition: `Movement.`,
              audioPrompt: `Motion is movement. When something moves, it's in motion. A running kid is in motion. A rolling ball is in motion. Motion needs a force to start. And motion needs another force (like friction) to stop!` },
            { word: `move`,   definition: `To go from one place to another.`,
              audioPrompt: `To move is to go from one place to another. Forces make things move. Without a force, things stay where they are. Push a ball — it moves. Forces are the cause. Motion is the result!` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PUSHING: Force Away`,
          paragraphs: [
            `A PUSH is a force that moves something AWAY from you!`,
            `Push a ball — it rolls away! Push a chair — it slides away! Push a swing — it swings away from you! Push a door — it opens away from you! When you walk, your feet PUSH the ground! (The ground pushes back, which is why you move forward!) When you sneeze, you push air out of your nose! PUSHES are everywhere! They're how we move things AWAY from ourselves!`,
          ],
          image: `/explorer-assets/science/l12-s2-push.webp`,
          imageCaption: `Push = force AWAY from you!`,
          vocab: [
            { word: `push`, definition: `A force that moves things away from you.`,
              audioPrompt: `A push is a force that moves things away from you. Push a ball, it rolls away. Push a door, it opens away. Pushes are everywhere. Some are gentle. Some are powerful. All move things away!` },
            { word: `away`, definition: `In a direction from you.`,
              audioPrompt: `Away is in a direction from you. Pushes make things go away. You stay where you are. The thing you pushed moves to a new place — farther from you. Push hard, it goes far. Push gently, it goes a little!` },
            { word: `walk`, definition: `When walking, your feet PUSH the ground.`,
              audioPrompt: `When you walk, your feet push the ground. The ground pushes back. That's how you move forward. Your feet aren't pulling you — they're pushing. If the ground were too slippery to push, you couldn't walk!` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PULLING: Force Toward`,
          paragraphs: [
            `A PULL is a force that moves something TOWARD you!`,
            `Pull a wagon — it comes toward you! Pull a friend's hand — they come closer! Pull open a drawer — it slides toward you! Magnets PULL each other! Tractors PULL plows! Boats are PULLED by tugboats! When you pick something up, your hand PULLS it up! Pulls are EVERYWHERE — just as common as pushes! They're how we move things TOWARD ourselves!`,
          ],
          image: `/explorer-assets/science/l12-s3-pull.webp`,
          imageCaption: `Pull = force TOWARD you!`,
          vocab: [
            { word: `pull`,   definition: `A force that moves things toward you.`,
              audioPrompt: `A pull is a force that moves things toward you. Pull a wagon, it comes toward you. Pull a door open, it comes toward you. Pulls are everywhere. Just as common as pushes — and just as important!` },
            { word: `toward`, definition: `In a direction coming to you.`,
              audioPrompt: `Toward is in a direction coming to you. Pulls bring things toward you. You stay where you are. The thing you pulled moves to a new place — closer to you. Either way — toward!` },
            { word: `magnet`, definition: `Something that pulls certain metals toward it.`,
              audioPrompt: `A magnet is something that pulls certain metals toward it. Magnets are made of special materials that create an invisible pulling force. They pull iron and a few other metals. Magnets can pull from a distance!` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `GRAVITY: The Big Pull`,
          paragraphs: [
            `Here's the MOST IMPORTANT pull on Earth — GRAVITY!`,
            `Gravity is the invisible force that pulls EVERYTHING down to the ground! Drop an apple — it falls! Drop a feather — it falls! Drop yourself off a chair — gravity pulls you down too! Earth is HUGE — and big things have strong gravity! Earth's gravity is constantly pulling you down (which is why you're sitting on the ground and not floating away)! The MOON has gravity too — but weaker! The SUN has HUGE gravity, which keeps Earth orbiting it!`,
          ],
          image: `/explorer-assets/science/l12-s4-gravity.webp`,
          imageCaption: `Gravity: invisible force that pulls everything DOWN!`,
          vocab: [
            { word: `gravity`,    definition: `The invisible force that pulls things down.`,
              audioPrompt: `Gravity is the invisible force that pulls things down. Toward the center of big objects like Earth. Right now, gravity is pulling you down. That's why you stay on the ground. Always pulling!` },
            { word: `down`,       definition: `Toward the ground.`,
              audioPrompt: `Down is toward the ground. Gravity pulls everything down on Earth. Drop a ball — it goes down. Jump up — you come back down. Water flows down. Even raindrops fall down. Gravity gives Earth its up and down!` },
            { word: `everywhere`, definition: `In all places.`,
              audioPrompt: `Everywhere means in all places. Gravity is everywhere on Earth. It never stops, never takes a break. Working right now. Working for billions of years. One of the most reliable forces in the universe!` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `FRICTION: The Stopper`,
          paragraphs: [
            `Once something is MOVING, what makes it STOP? FRICTION!`,
            `Friction is a force that happens when TWO surfaces RUB against each other! It SLOWS things down! Roll a ball on the floor — eventually it stops because of friction with the ground! Slide on a slide — eventually you stop! Bike along the road — to keep going, you have to keep pushing your pedals! Different surfaces have different friction! ICE = low friction (things slide easily)! CARPET = high friction (things stop fast)! Friction is good AND bad — stops cars from sliding off roads (good!)!`,
          ],
          image: `/explorer-assets/science/l12-s5-friction.webp`,
          imageCaption: `Friction = force when surfaces rub. SLOWS things down!`,
          vocab: [
            { word: `friction`,  definition: `A force that happens when surfaces rub.`,
              audioPrompt: `Friction is a force that happens when surfaces rub against each other. Friction slows moving things down. Without friction, things would keep moving forever — which sounds fun, but you couldn't stop cars!` },
            { word: `surfaces`,  definition: `The outsides of things.`,
              audioPrompt: `Surfaces are the outsides of things. Floor surfaces. Skin surfaces. Ball surfaces. When two surfaces rub against each other, friction happens. Some surfaces have lots. Some have very little!` },
            { word: `slow down`, definition: `To go slower.`,
              audioPrompt: `Slow down means to go slower. Friction makes moving things slow down. Smooth surfaces have less friction. Rough surfaces have more. Friction is the natural brake of the universe!` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Forces Are EVERYWHERE`,
          paragraphs: [
            `Now that you know about forces, you'll see them EVERYWHERE!`,
            `Sit on a swing — gravity pulls you down! Someone pushes — you swing up! Friction in the chain slowly stops you! Throw a ball — your arm PUSHES it! Air friction slows it! Gravity pulls it down! It lands! Open a door — you PULL or PUSH! Drive a car — engine PUSHES wheels, gravity PULLS car down, friction slows it! Even when you stand STILL — gravity is pulling you down, and the ground is pushing you up! Forces are happening EVERY second!`,
          ],
          image: `/explorer-assets/science/l12-s6-forces-everywhere.webp`,
          imageCaption: `Forces are everywhere! Every movement involves them!`,
          vocab: [
            { word: `everywhere`,         definition: `In all places.`,
              audioPrompt: `Everywhere means in all places. Forces are everywhere. Right now, gravity is pulling you down. The ground is pushing you up. Friction in your clothes is rubbing your skin. Forces constantly happening!` },
            { word: `interaction`,        definition: `When things affect each other.`,
              audioPrompt: `An interaction is when things affect each other. Forces are interactions between objects. The ball interacts with your hand when you push it. Forces are how objects talk to each other in the physical world!` },
            { word: `make-the-world-work`, definition: `Forces make everything happen.`,
              audioPrompt: `Make the world work — forces are what make everything happen in the physical universe. No forces = no movement. Plants growing — forces. Hearts beating — forces. Stars burning — forces. All forces!` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 actions. Drag each one — is it a PUSH (move away!), a PULL (move toward!), or GRAVITY (pull down!)?`,
          buckets: [
            { id: `push`,    label: `👉 PUSH`,    color: `#34D399` },
            { id: `pull`,    label: `👈 PULL`,    color: `#FBBF24` },
            { id: `gravity`, label: `⬇️ GRAVITY`, color: `#6366F1` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `Kicking a soccer ball so it shoots away across the field`,
              matchPhrase: `Yes! PUSH! Your foot pushed the ball away from you. Pushes move things AWAY!`,
              correctMatch: `push` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `An apple falling from a tree branch and landing on the ground`,
              matchPhrase: `Right! GRAVITY! Gravity pulls everything down. The apple fell because of gravity!`,
              correctMatch: `gravity` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `Pulling a wagon by its handle so it rolls toward you`,
              matchPhrase: `Yes! PULL! Your arm pulled the wagon toward you. Pulls move things TOWARD you!`,
              correctMatch: `pull` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `Pushing open a heavy door so it swings away from you`,
              matchPhrase: `Right! PUSH! Your hand pushed the door away. The door moved AWAY from you!`,
              correctMatch: `push` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is a FORCE?`,
              options: [`A type of food`, `Anything that PUSHES or PULLS — makes things move, stop, or change direction`, `Only things in space`, `A book`],
              correctIndex: 1,
              explanation: `A force is anything that pushes or pulls. Forces cause all motion!` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `When you PUSH a ball, which direction does it move?`,
              options: [`Toward you`, `AWAY from you`, `Up only`, `It doesn't move`],
              correctIndex: 1,
              explanation: `Away from you! Pushes move things away. Pulls move things toward you!` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `What is GRAVITY?`,
              options: [`A type of music`, `The invisible force that pulls things DOWN toward the ground`, `What plants do`, `A bird`],
              correctIndex: 1,
              explanation: `Gravity is the invisible force that pulls things down toward the ground. Never stops!` },
            { id: `l12-q4`, format: `true-false`,
              question: `FRICTION is a force that happens when surfaces rub together — and it SLOWS moving things down.`,
              correctAnswer: true,
              explanation: `True! Friction is the force that slows things down. Rough surfaces have more friction. Smooth has less!` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `When you walk, your feet ___ the ground — and the ground pushes back to move you forward.`,
              options: [`push`, `eat`, `paint`, `read`],
              correctIndex: 0,
              explanation: `Push! Your feet push the ground. The ground pushes back. That's how you move forward!` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why does a rolling ball EVENTUALLY stop?`,
              options: [`It gets tired`, `Friction with the ground slows it down`, `Magic`, `It doesn't stop`],
              correctIndex: 1,
              explanation: `Friction! As the ball rolls, friction takes its energy away. Eventually it stops!` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! ENGINEERS work with forces every single day! They design CARS so wheels grip the road (using friction), but engines push them forward (overcoming friction)! They build BRIDGES that can hold the gravity of thousands of cars without falling! They design ROCKETS powerful enough to push UP harder than gravity pulls down — so we can leave Earth and go to space! Forces aren't just science — they're the basis of every machine humans have ever built!`,
          familyAdventure: `Do FORCE EXPERIMENTS together! Try these: 1) Push a toy car on different surfaces — carpet, wood floor, smooth tile! Which goes farthest? (Smooth = less friction!) 2) Drop different things from a safe height — feather, ball, paper! Which falls fastest? (Air friction matters!) 3) Roll a ball UP a slope! What pulls it back down? (Gravity!) Forces in action!`,
          creativePrompt: `Draw a PICTURE of yourself at a playground! Add arrows showing the FORCES happening: GRAVITY pulling you down, the SLIDE PUSHING up on your feet, your friend PULLING a wagon, a swing being PUSHED, FRICTION on the ground! For a 3-sentence floor: write 3 sentences about which forces you see in your playground picture. For a 5-sentence stretch: write a sentence about each of the 4 forces (push, pull, gravity, friction) plus one about which is your favorite!`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know FORCES — pushes and pulls! You know GRAVITY pulls everything down! You know FRICTION slows things! You know NOTHING moves without a force behind it! The whole physical world makes more sense now! Every car, every ball, every drop of rain — all working because of forces! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L12] Loaded: "Forces and Motion" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
