// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L11 — Physics: Newton's Laws and Forces in Two Dimensions
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS2 (Motion and Stability: Forces and Interactions)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l11-v1";

const SCIENCE_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-11`,
      title: `Physics: Newton's Laws and Forces in Two Dimensions`,
      duration: 35,
      xpReward: 75,
      badge: `force-master`,
      badgeName: `Force Master`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you learned to describe motion with the precision of mathematics, distance, displacement, speed, velocity, acceleration. But we deliberately set aside the deepest question of all: what actually causes motion to change? Why does a ball roll to a stop? Why does a rocket climb? Why does the Moon circle the Earth instead of flying off into space? The answer is forces, and the man who first wrote down their laws was Isaac Newton, whose three simple laws of motion are among the greatest achievements in the history of human thought. With just three rules, Newton explained the motion of everything from a thrown stone to the planets themselves, unifying the heavens and the Earth under a single set of laws. We'll learn all three. The first law, inertia: objects keep doing what they're doing, at rest or moving steadily, unless a force acts on them. The second, the famous F equals m a: force equals mass times acceleration, the precise recipe for how forces change motion. And the third: for every action there is an equal and opposite reaction, the law that makes rockets fly and lets you walk. We'll also learn that forces have direction, they're vectors, so they add up in two dimensions, and that the net force (the total of all forces combined) is what truly determines how something moves. By the end, you'll understand the rules that govern every push, pull, fall, and orbit in the universe. Onward.`,
          headline: `Physics: Newton's Laws and Forces in Two Dimensions`,
          subtitle: `The three simple laws that govern every push, pull, fall, and orbit in the universe. A Case Study.`,
          visual: `/voyager-assets/science/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is A Force?`,
          paragraphs: [
            `Last lesson described motion. This lesson explains what causes motion to change. The answer is force: a push or a pull, anything that can change an object's motion. Gravity pulling you down, a hand pushing a door, friction slowing a sliding book, the tension in a rope, these are all forces, measured in units called newtons, after Isaac Newton himself.`,
            `Here's the key idea kinematics set up: motion changes (an object accelerates) only when a force acts. No net force, no change in motion. And like velocity, force has direction, it's a vector. A push to the right and a push to the left of equal strength cancel out. So what matters is the net force: the total of all forces on an object, added up with their directions.`,
            `This is why forces in the real world must be handled in two dimensions. Gravity pulls down while a ramp pushes sideways; thrust drives a rocket up while gravity pulls it down. To find how something actually moves, you add all the forces as vectors, combining their sizes and directions, to get the single net force. That net force, and nothing else, determines the acceleration.`,
          ],
          image: `/voyager-assets/science/l11-s1-force.webp`,
          imageCaption: `Last lesson DESCRIBED motion; this one explains what CHANGES it. The answer is FORCE: a push or a pull, anything that can change an object's motion. Gravity pulling down, a hand pushing a door, friction slowing a book, tension in a rope, all forces, measured in NEWTONS, after Isaac Newton. The key idea: motion changes (an object accelerates) only when a force acts. No net force, no change. And like velocity, force has DIRECTION, it's a VECTOR. Equal pushes left and right cancel. What matters is the NET FORCE: all forces added with their directions. This is why real forces need TWO DIMENSIONS, gravity pulls down while a ramp pushes sideways. Add all forces as vectors to get the single net force, and that net force, nothing else, sets the acceleration.`,
          vocab: [
            { word: `force`,
              definition: `A push or a pull, anything that can change an object's motion. Measured in newtons. A force has both a size and a direction.`,
              audioPrompt: `A force, {name}, is simply a push or a pull, anything that can change how an object moves. Gravity, friction, a shove, a tug on a rope, all forces. They're measured in units called newtons, and each one has both a size and a direction.` },
            { word: `newton (unit)`,
              definition: `The standard unit of force, named after Isaac Newton. One newton is the force needed to accelerate one kilogram by one meter per second squared.`,
              audioPrompt: `A newton, {name}, is the standard unit we measure force in, named after Isaac Newton himself. It's exactly the amount of force needed to speed up one kilogram by one meter per second, every second. Roughly the weight of a small apple in your hand.` },
            { word: `net force`,
              definition: `The total of all forces acting on an object, added as vectors (with direction). Only the net force determines how the object accelerates.`,
              audioPrompt: `The net force, {name}, is what you get when you add up every force on an object, including their directions. If forces cancel, the net force is zero and motion doesn't change. Only this net force, the grand total, decides how something actually accelerates.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The First Law: Inertia`,
          paragraphs: [
            `Newton's first law overturned two thousand years of belief. People had assumed that motion needs a constant push to continue, stop pushing a cart and it stops, so motion must require force. Newton saw deeper: objects naturally keep doing what they're doing. A moving object keeps moving in a straight line at constant speed, and a still object stays still, unless a force acts.`,
            `This resistance to any change in motion is called inertia, and it's why the first law is the law of inertia. The cart stops not because motion needs force, but because friction (a force) acts against it. Remove friction, on ice, or in the vacuum of space, and a moving object glides on forever. A spacecraft, once moving, needs no engine to keep going.`,
            `Inertia depends on mass: the more mass an object has, the more it resists changes in motion. A bowling ball is far harder to start, stop, or turn than a tennis ball. This is why you lurch forward when a car brakes suddenly, your body's inertia keeps it moving until a force (the seatbelt) stops it. The first law reveals the universe's true default: steady motion, not rest.`,
          ],
          image: `/voyager-assets/science/l11-s2-inertia.webp`,
          imageCaption: `Newton's FIRST LAW overturned two thousand years of belief. People assumed motion needs a constant push to continue, stop pushing a cart and it stops. Newton saw deeper: objects naturally KEEP DOING what they're doing. A moving object keeps moving straight at constant speed, a still object stays still, unless a force acts. This resistance to change is INERTIA, so the first law is the law of inertia. The cart stops not because motion needs force, but because FRICTION acts against it. Remove friction, on ice or in space, and motion glides on forever. Inertia depends on MASS: more mass resists change more, a bowling ball is harder to start, stop, or turn than a tennis ball. It's why you lurch forward when a car brakes. The universe's true default is STEADY MOTION, not rest.`,
          vocab: [
            { word: `Newton's first law`,
              definition: `An object stays at rest, or keeps moving in a straight line at constant speed, unless acted on by a net force. Also called the law of inertia.`,
              audioPrompt: `Newton's first law, {name}, says an object keeps doing what it's doing, staying still or moving steadily in a straight line, unless a force acts on it. Motion doesn't fade away on its own; something has to stop it.` },
            { word: `inertia`,
              definition: `The natural tendency of an object to resist changes in its motion. The more mass an object has, the more inertia it has.`,
              audioPrompt: `Inertia, {name}, is an object's natural resistance to any change in its motion, its reluctance to start, stop, or turn. The more mass something has, the more inertia, which is why a heavy bowling ball is so much harder to get moving than a light ball.` },
            { word: `mass`,
              definition: `The amount of matter in an object, which measures its inertia, its resistance to acceleration. Mass is different from weight (the force of gravity on it).`,
              audioPrompt: `Mass, {name}, is the amount of matter in an object, and it measures inertia, how hard the object is to accelerate. Don't confuse it with weight: mass stays the same everywhere, while weight is just the pull of gravity on that mass.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Second Law: F = ma`,
          paragraphs: [
            `If the first law tells us motion changes only when a force acts, the second law tells us exactly how much. It's captured in the most famous equation in physics: F equals m a. Force equals mass times acceleration. It's a precise recipe: the net force on an object equals its mass multiplied by the acceleration that force produces.`,
            `Read it carefully and it reveals two truths. First, a bigger force produces a bigger acceleration, push harder, speed up faster. Second, more mass means less acceleration for the same force, the same push barely budges a truck but flings a skateboard. Mass and force pull in opposite directions: force speeds things up, mass resists. Their ratio sets the acceleration.`,
            `This single equation lets us calculate motion with stunning precision. Know the net force and the mass, and you know the exact acceleration, and from there, using last lesson's kinematics, exactly how the object will move. Engineers use F equals m a to design everything from bridges to rockets. It is the quantitative heart of Newtonian physics, turning forces into predictable motion.`,
          ],
          image: `/voyager-assets/science/l11-s3-fma.webp`,
          imageCaption: `The first law says motion changes only when a force acts; the SECOND LAW says exactly how much, in physics' most famous equation: F equals m a. FORCE equals MASS times ACCELERATION. The net force on an object equals its mass multiplied by the acceleration it produces. Two truths fall out. First, a bigger force makes a bigger acceleration, push harder, speed up faster. Second, more mass means LESS acceleration for the same force, one push barely moves a truck but flings a skateboard. Force speeds things up; mass resists; their ratio sets acceleration. Know the net force and the mass, and you know the exact acceleration, and thus, with kinematics, exactly how it moves. Engineers use F equals m a for everything, bridges, rockets, cars. It is the quantitative heart of Newton's physics.`,
          vocab: [
            { word: `Newton's second law`,
              definition: `The net force on an object equals its mass times its acceleration (F = ma). It quantifies exactly how forces change motion.`,
              audioPrompt: `Newton's second law, {name}, is the famous F equals m a: the net force on an object equals its mass times its acceleration. It's the exact recipe connecting force to motion, telling you precisely how much an object speeds up when you push it.` },
            { word: `F = ma`,
              definition: `The equation of the second law. A larger force gives more acceleration; a larger mass gives less acceleration for the same force.`,
              audioPrompt: `F equals m a, {name}, packs the whole second law into one line. A bigger force means more acceleration, and a bigger mass means less acceleration for that same force. Force speeds things up, mass fights back, and their balance sets how fast motion changes.` },
            { word: `weight vs. mass`,
              definition: `Mass is the amount of matter (constant everywhere); weight is the force of gravity on that mass (weight = mass times gravity), and changes with location.`,
              audioPrompt: `Weight and mass differ, {name}. Mass is how much matter you're made of, the same on Earth or the Moon. Weight is the force of gravity pulling on that mass, so you weigh less on the Moon even though your mass hasn't changed at all.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Third Law: Action And Reaction`,
          paragraphs: [
            `Newton's third law is the most surprising: for every action, there is an equal and opposite reaction. Whenever one object pushes on a second, the second pushes back just as hard, in the exact opposite direction. Forces always come in pairs. There is no such thing as a lone push; every push is also a push back.`,
            `This explains things that otherwise seem magical. A rocket flies because it pushes hot gas downward, and the gas pushes the rocket upward with equal force, no air needed, which is why rockets work in empty space. You walk because your foot pushes backward on the ground, and the ground pushes you forward. A swimmer pushes water back; the water pushes the swimmer ahead.`,
            `A common puzzle: if the forces are always equal and opposite, why don't they just cancel? Because the two forces act on different objects. The rocket pushes the gas (the gas accelerates away) and the gas pushes the rocket (the rocket accelerates forward), two separate objects, two separate motions. Once you see action-reaction pairs everywhere, you understand how anything propels itself at all.`,
          ],
          image: `/voyager-assets/science/l11-s4-action-reaction.webp`,
          imageCaption: `Newton's THIRD LAW is the most surprising: for every action, an EQUAL and OPPOSITE reaction. Whenever one object pushes a second, the second pushes back just as hard, in the exact opposite direction. Forces always come in PAIRS, there's no lone push; every push is also a push back. This explains the seemingly magical. A ROCKET flies because it pushes hot gas down, and the gas pushes the rocket up with equal force, no air needed, which is why rockets work in space. You WALK because your foot pushes back on the ground and the ground pushes you forward. A swimmer pushes water back; water pushes the swimmer ahead. Why don't the equal forces cancel? Because they act on DIFFERENT objects, the rocket pushes the gas, the gas pushes the rocket, two objects, two motions.`,
          vocab: [
            { word: `Newton's third law`,
              definition: `For every action force, there is an equal and opposite reaction force. Forces always occur in pairs acting on two different objects.`,
              audioPrompt: `Newton's third law, {name}, says every action has an equal and opposite reaction. Whenever you push on something, it pushes back on you just as hard, the other way. Forces always come in pairs, and that's exactly why rockets fly and why you can walk.` },
            { word: `action-reaction pair`,
              definition: `The two forces of the third law: each acts on a different object, so they don't cancel each other out even though they're equal and opposite.`,
              audioPrompt: `An action-reaction pair, {name}, is the two forces in Newton's third law. The trick is that each acts on a different object, the rocket on the gas, the gas on the rocket, so they never cancel, even though they're equal and opposite. Two objects, two motions.` },
            { word: `thrust`,
              definition: `The forward reaction force that propels a rocket or jet, produced by pushing exhaust gas backward. A direct example of Newton's third law.`,
              audioPrompt: `Thrust, {name}, is the forward push that drives a rocket or jet. The engine hurls hot gas out the back, and by Newton's third law the gas pushes the rocket forward with equal force. It needs no air to push against, which is why rockets work in space.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. A force is a push or pull that can change motion, and only the net force, all forces added as vectors, determines how something accelerates. Newton's first law (inertia): objects keep doing what they're doing unless a force acts, with mass measuring their resistance to change. The universe's default is steady motion, not rest.`,
            `The second law, F equals m a, makes it exact: net force equals mass times acceleration, so a bigger force speeds things up more, and a bigger mass resists more. The third law: every action has an equal and opposite reaction, with the paired forces acting on different objects, which is why rockets fly and you can walk. Together, three simple laws govern all motion.`,
            `Now the case-study screen makes you the physicist with five puzzles: why a seatbelt saves you when a car stops fast, why the same push moves a skateboard but not a truck, how a rocket flies in the airless vacuum of space, why a heavy and a light box slide down a ramp together, and why a tablecloth can be yanked from under dishes. Reason with Newton's three laws. Onward.`,
          ],
          image: `/voyager-assets/science/l11-s5-before.webp`,
          imageCaption: `Threads together. A FORCE is a push or pull that can change motion, and only the NET FORCE, all forces added as vectors, sets the acceleration. FIRST LAW (inertia): objects keep doing what they're doing unless a force acts, with mass measuring resistance to change; the default is steady motion. SECOND LAW, F equals m a: net force equals mass times acceleration, so bigger force means more acceleration, bigger mass means less. THIRD LAW: every action has an equal, opposite reaction, the paired forces on different objects, which is why rockets fly and you walk. Three simple laws govern all motion. The case-study screen gives five puzzles: the seatbelt, the skateboard versus truck, the rocket in space, boxes on a ramp, the yanked tablecloth.`,
          vocab: [
            { word: `friction`,
              definition: `A force that resists motion between surfaces in contact. It's why moving objects on Earth eventually slow and stop, not because motion needs force.`,
              audioPrompt: `Friction, {name}, is a force that resists sliding between two surfaces touching each other. It's the real reason a rolling ball slows and stops on Earth, not because motion needs a push, but because friction is constantly working against the motion.` },
            { word: `free-body diagram`,
              definition: `A simple drawing showing all the forces acting on a single object as arrows, used to find the net force and predict the motion.`,
              audioPrompt: `A free-body diagram, {name}, is a simple sketch showing every force on one object as an arrow, gravity down, the floor pushing up, a hand pushing sideways. Physicists draw it to add the forces up and find the net force that determines how the object moves.` },
            { word: `terminal velocity`,
              definition: `The steady top speed a falling object reaches when air resistance grows to exactly balance gravity, giving zero net force and no further acceleration.`,
              audioPrompt: `Terminal velocity, {name}, is the top speed a falling object settles into when air resistance has built up to exactly match gravity. With the forces balanced, the net force is zero, so it stops accelerating and falls at a steady speed, like a skydiver before the parachute.` },
          ],
        },

        {
          id: `l11-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Force`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about forces and motion. For each, reason with Newton's three laws, inertia, F equals m a, and action-reaction, and remember that only the net force changes motion.`,
          cases: [
            {
              id: `c1`,
              title: `Why the seatbelt saves you`,
              type: `First law / inertia`,
              description: `A car traveling 40 mph suddenly slams on its brakes and stops hard. The passenger, not wearing a seatbelt, is thrown forward into the dashboard. The seatbelt would have held them back. Using Newton's laws, explain exactly why an unbelted passenger flies forward when the car stops.`,
              questions: [
                `Why does the passenger keep moving forward when the car stops?`,
                `Which of Newton's laws explains this, and what is the key idea?`,
                `What force does a seatbelt provide, and why is it needed?`,
              ],
              evaluation: `This everyday, life-or-death situation is a perfect illustration of Newton's first law, the law of inertia, and understanding it precisely could literally save a life. The key idea is inertia: an object in motion tends to stay in motion, moving in a straight line at constant speed, unless a force acts on it. Before the brakes are applied, both the car and the passenger are moving forward together at 40 mph. When the driver slams the brakes, a large force (friction between tires and road) acts on the car, decelerating it rapidly. But here's the crucial point: that braking force acts on the car, not directly on the passenger's body. The passenger, by inertia, continues moving forward at 40 mph, because no force has yet acted to slow them down. From the passenger's perspective it feels like they're thrown forward, but really, they simply keep doing what they were doing (moving forward) while the car decelerates beneath and around them. The dashboard then rushes toward the still-moving passenger, and the collision provides the (sudden, violent, dangerous) force that finally stops the body, often causing injury. This is exactly what a seatbelt prevents: it provides a controlled backward force on the passenger's body, decelerating them along with the car, smoothly and over the whole stopping time rather than in one brutal impact. The seatbelt supplies the force that the passenger's inertia would otherwise lack. This is why seatbelts are not optional safety theater, they are direct applications of Newton's first law: a body in motion stays in motion unless a force acts, and the seatbelt is that force. The same principle explains why loose objects in a braking car become dangerous projectiles, why airbags exist, and why you're told to brace. Inertia isn't an abstraction; it's the reason physics insists you buckle up. The passenger doesn't fly forward because of some mysterious force pushing them, they fly forward precisely because no force is acting to stop them, which is the deep, counterintuitive heart of the first law.`,
            },
            {
              id: `c2`,
              title: `The skateboard and the truck`,
              type: `Second law / F = ma`,
              description: `You give a hard push, exactly the same push, first to a skateboard and then to a parked truck. The skateboard shoots forward fast; the truck barely moves at all. The force from your push was identical in both cases. Why did the same force produce such wildly different results?`,
              questions: [
                `If the force was the same, why did the accelerations differ so much?`,
                `Which equation explains this, and how?`,
                `What property of the truck makes it resist your push?`,
              ],
              evaluation: `This puzzle is a direct, intuitive demonstration of Newton's second law, F equals m a, and specifically of the role of mass. You applied the same force to both objects, yet the skateboard accelerated rapidly while the truck barely budged. The second law explains exactly why: force equals mass times acceleration, which we can rearrange to see that acceleration equals force divided by mass. With the force (F) held constant, the acceleration (a) depends entirely on the mass (m): the larger the mass, the smaller the acceleration for that same force. The skateboard has a small mass, so dividing your force by that small mass gives a large acceleration, it shoots forward. The truck has an enormous mass, so dividing the very same force by that huge mass gives a tiny acceleration, it barely moves. The property of the truck that resists your push is its mass, which is the measure of inertia: more mass means more resistance to any change in motion. This is why F equals m a is so powerful, it doesn't just say forces cause acceleration; it tells you exactly how much, accounting for the object's mass. The relationship is precise and quantitative: double the mass and you halve the acceleration; triple the force and you triple the acceleration. Engineers rely on this constantly: to accelerate a massive rocket, you need a colossal force (which is why rocket engines are so powerful); to stop a heavily loaded truck, you need far more braking force and distance than for a small car. This case also connects to the first law: the truck's large inertia (resistance to change) is just another way of describing its large mass. So the same push gives different results not because the force differed, but because the masses differed, and Newton's second law captures that relationship in a single, elegant equation. It's the difference between pushing a shopping cart and pushing a car: the harder something is to accelerate, the more mass it has, exactly as F equals m a predicts.`,
            },
            {
              id: `c3`,
              title: `The rocket in empty space`,
              type: `Third law / action-reaction`,
              description: `A common misconception is that a rocket flies by pushing against the air or the ground beneath it. But rockets work perfectly in the vacuum of outer space, where there is no air at all to push against. So what does a rocket push against to move forward in the emptiness of space?`,
              questions: [
                `If there's no air in space, what does the rocket push against?`,
                `Which of Newton's laws explains how the rocket moves?`,
                `Why don't the action and reaction forces simply cancel out?`,
              ],
              evaluation: `This is one of the most beautiful and frequently misunderstood applications of Newton's third law, and getting it right dispels a misconception that fooled people for a long time, even some early critics doubted rockets could work in space precisely because of this confusion. The misconception is that a rocket needs to push against something external, the air, the ground, to move forward. But Newton's third law reveals the truth: the rocket pushes against its own exhaust. A rocket engine burns fuel and violently expels hot gas out the back at tremendous speed. That's the action: the rocket pushes the gas backward (downward, in the case of a launch). By Newton's third law, for every action there is an equal and opposite reaction, so the gas pushes the rocket forward (upward) with exactly equal force. This forward push is called thrust, and it requires no air, no ground, nothing external at all, just the rocket and its own expelled gas. This is precisely why rockets work in the vacuum of space: they carry their own fuel and oxidizer and don't need any surrounding medium to push against. In fact, rockets work even better in space, with no air resistance to fight. Now the classic puzzle: if the action and reaction forces are equal and opposite, why don't they cancel and leave the rocket motionless? The answer is the crucial subtlety of the third law: the two forces act on different objects. The rocket's force acts on the gas (pushing it backward, so the gas shoots away), and the gas's force acts on the rocket (pushing it forward, so the rocket accelerates). They are not two forces on the same object, they're a pair, one on each of two separate objects, so each object responds to the force acting on it. The gas flies one way; the rocket flies the other. Because the gas has relatively little mass but enormous speed, and the rocket has large mass, the effects look very different, but the forces are equal. This same principle, action-reaction, is why you can walk (your foot pushes the ground back, the ground pushes you forward), why a gun recoils, why a swimmer moves by pushing water backward, and why a balloon zips around the room when you let the air out. Once you understand that forces always come in pairs acting on different objects, the motion of self-propelled things stops being mysterious and becomes a perfect, predictable consequence of Newton's third law.`,
            },
            {
              id: `c4`,
              title: `Heavy and light down the ramp`,
              type: `Gravity and acceleration`,
              description: `Two sealed boxes, one heavy and one light, but the same smooth shape, are released at the same instant from the top of a smooth ramp. A student bets the heavy box will reach the bottom first, since gravity pulls it harder. But they arrive together. Why does the heavier box not win?`,
              questions: [
                `Gravity does pull harder on the heavy box, so why doesn't it win?`,
                `How does the second law explain why they tie?`,
                `How does this connect to Galileo's discovery from last lesson?`,
              ],
              evaluation: `This puzzle elegantly connects Newton's second law to Galileo's discovery from last lesson, and resolving it reveals one of the deepest and most beautiful facts in physics. The student's reasoning seems airtight: gravity does pull harder on the heavy box (its weight is greater), so shouldn't it accelerate faster and win? The resolution lies in seeing both sides of F equals m a at once. Yes, gravity pulls harder on the heavy box, the force is bigger. But the heavy box also has more mass, so it's harder to accelerate, it has more inertia, more resistance to that force. These two effects, more force but also more mass, exactly cancel. Let's see it through the equation: acceleration equals force divided by mass. For a falling or sliding object, the force of gravity is proportional to mass (weight = mass times gravity, so heavier objects feel proportionally more gravitational force). When you divide that force by the mass to find the acceleration, the mass cancels out, leaving the same acceleration for every object, regardless of weight. The heavy box feels more gravitational force, but needs more force to accelerate the same amount; the light box feels less force, but needs less to accelerate the same amount. The result: both boxes accelerate down the ramp at exactly the same rate and arrive together. This is precisely Galileo's discovery from the previous lesson, that all objects fall at the same rate regardless of weight, now explained at a deeper level by Newton's second law. (The only reason this fails in real life is air resistance, which is why a feather falls slower than a hammer in air but not in a vacuum; on a smooth ramp with similar-shaped boxes, air resistance is negligible, so they tie.) This deep fact, that gravitational mass and inertial mass are exactly equal, so gravity gives all objects the same acceleration, so puzzled and fascinated physicists that it eventually led Einstein to his theory of general relativity. The student's intuition (heavier falls faster) is the same intuition that fooled humanity for two thousand years before Galileo, and the same one Newton's laws decisively overturn. Both boxes tie not by coincidence, but because the very mass that makes gravity pull harder also makes the box harder to move, and these balance perfectly, every time.`,
            },
            {
              id: `c5`,
              title: `The tablecloth trick`,
              type: `First law / inertia`,
              description: `A performer yanks a tablecloth out fast from under a full set of dishes, and the dishes barely move, staying on the table. Yet if they pulled the cloth slowly, everything would crash to the floor. Using Newton's laws, explain why the fast yank leaves the dishes in place.`,
              questions: [
                `Why do the dishes stay put when the cloth is yanked fast?`,
                `Which law explains this, and what role does time play?`,
                `Why would pulling slowly knock everything over instead?`,
              ],
              evaluation: `This famous trick is a vivid, almost magical-seeming demonstration of Newton's first law (inertia) combined with the second law's relationship between force, time, and motion, and once you understand it, the magic becomes pure physics. The dishes stay put because of inertia: an object at rest tends to stay at rest unless a sufficient force acts on it. The dishes are sitting still, and they "want" to keep sitting still. When the performer yanks the cloth out very fast, the cloth is in contact with the dishes for only an extremely brief moment. During that tiny instant, the only force the cloth can exert on the dishes is friction. Friction is a real force and it does push the dishes slightly in the direction of the pull, but here's the key: because the contact time is so short, that frictional force acts for only a tiny fraction of a second. A force acting for such a brief time produces only a tiny change in the dishes' motion, just a small nudge, not enough to drag them off the table. By the time the dishes would have started moving appreciably, the cloth is already gone, and the dishes, having barely budged, settle back down, held by their own inertia and by gravity and the table beneath them. The role of time is crucial: the same frictional force acting for a longer time would produce a much larger change in motion (this previews the idea of impulse, force times time, which determines how much an object's motion changes). That's exactly why pulling slowly knocks everything over: a slow pull keeps the cloth in contact with the dishes for a long time, so friction acts on the dishes for that whole duration, steadily dragging them along with the cloth until they slide off the edge and crash. Fast yank: brief friction, tiny effect, dishes stay. Slow pull: prolonged friction, large effect, dishes follow the cloth and fall. So the trick isn't about the cloth being slippery (though smooth cloth helps); it's fundamentally about inertia and the brief contact time. The dishes' resistance to changing their state of rest, their inertia, combined with the vanishingly short time the force acts, leaves them essentially undisturbed. It's Newton's first law performed as entertainment: objects at rest stay at rest unless a force acts long enough to change that, and a lightning-fast yank simply doesn't give friction the time it needs.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, state Newton's three laws and give one real example of each from these cases. Why is it true that only the net force changes an object's motion, and that forces always come in pairs? Which case surprised you most? In 5-6 sentences.`,
          reflectionPrompt: `Newton wrote down three simple rules that turned out to govern everything from a falling apple to the orbits of distant planets, unifying the heavens and the Earth. How does it feel to realize that the same handful of laws guiding the dishes on a table also steer the planets through space?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a force, in physics?`,
              options: [
                `The total distance that a moving object travels.`,
                `A push or a pull that can change an object's motion.`,
                `The fixed top speed that an object can ever reach.`,
                `The amount of matter packed inside an object.`,
              ],
              correctIndex: 1,
              explanation: `A force is a push or pull, anything that can change an object's motion, measured in newtons and having a direction. The distractors describe distance, top speed, or mass instead.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does Newton's first law (the law of inertia) state?`,
              options: [
                `Objects always slow down and stop on their own over time.`,
                `Force always equals an object's mass times its acceleration.`,
                `An object keeps doing what it's doing unless a net force acts on it.`,
                `For every action there is an equal and opposite reaction.`,
              ],
              correctIndex: 2,
              explanation: `The first law says objects stay at rest or keep moving steadily in a straight line unless a net force acts. The distractors state a false "stopping" rule, or give the second and third laws instead.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the equation F = ma tell us?`,
              options: [
                `Net force equals mass times acceleration; more mass means less acceleration.`,
                `Force is completely unrelated to an object's mass or acceleration.`,
                `Heavier objects always fall faster than lighter ones do.`,
                `Forces never come in pairs, but always act entirely alone.`,
              ],
              correctIndex: 0,
              explanation: `F = ma says net force equals mass times acceleration, so for a given force, more mass yields less acceleration. The distractors deny the relationship, repeat the falling myth, or contradict the third law.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `You push a skateboard and a truck with the exact same force. Why does the skateboard accelerate far more?`,
              options: [
                `Because the truck is secretly pushing back even harder than you.`,
                `Because skateboards ignore the laws of physics entirely.`,
                `Because gravity only acts on the lighter skateboard, never the truck.`,
                `Because the truck has much more mass, so the same force gives less acceleration.`,
              ],
              correctIndex: 3,
              explanation: `By F = ma, acceleration equals force divided by mass, so the truck's much larger mass gives it far less acceleration for the same force. The distractors invent a back-push, deny physics, or misstate gravity.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Newton's third law state?`,
              options: [
                `Heavier objects always exert more force than lighter ones.`,
                `For every action force, there is an equal and opposite reaction force.`,
                `Objects at rest can never be made to move by any force.`,
                `Acceleration is always exactly equal to an object's velocity.`,
              ],
              correctIndex: 1,
              explanation: `The third law: every action force is matched by an equal and opposite reaction force, with the pair acting on two different objects. The distractors misstate force, deny that objects can move, or confuse acceleration with velocity.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How does a rocket move forward in the vacuum of space, where there is no air?`,
              options: [
                `It pushes against invisible particles that fill all of empty space.`,
                `It cannot actually move at all once it leaves the atmosphere.`,
                `It pushes exhaust gas backward, and the gas pushes the rocket forward.`,
                `It pulls itself forward using the gravity of distant stars.`,
              ],
              correctIndex: 2,
              explanation: `By the third law, the rocket pushes hot gas backward and the gas pushes the rocket forward with equal force (thrust), needing no air. The distractors invent space particles, deny motion, or misuse distant gravity.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Two boxes of different weights but the same smooth shape are released together down a smooth ramp. What happens?`,
              options: [
                `They reach the bottom at the same time, accelerating at the same rate.`,
                `The heavier box always reaches the bottom much sooner.`,
                `The lighter box wins because it has less to carry.`,
                `Neither box moves at all without a constant push.`,
              ],
              correctIndex: 0,
              explanation: `Gravity pulls harder on the heavy box, but its greater mass resists more, and these cancel, so both accelerate equally and tie, just as Galileo found. The distractors repeat the heavier-faster or lighter-faster myths, or deny motion.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is an unbelted passenger thrown forward when a car brakes suddenly?`,
              options: [
                `A mysterious forward force shoves the passenger into the dashboard.`,
                `The car's engine actively pushes the passenger toward the front.`,
                `Gravity suddenly reverses direction during the hard braking.`,
                `By inertia, the passenger keeps moving forward while the car stops.`,
              ],
              correctIndex: 3,
              explanation: `By the first law (inertia), the passenger keeps moving forward at the original speed while the braking force stops the car, until a force (ideally a seatbelt) stops the body. The distractors invent a forward force, blame the engine, or misstate gravity.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If two forces are exactly equal and opposite, like the action-reaction pair on a rocket and its exhaust, they always cancel out and produce no motion.`,
              correctAnswer: false,
              explanation: `False, and understanding why is the single most important subtlety of Newton's third law, the point that trips up almost everyone when they first encounter it. It is true that the third law's action-reaction forces are always exactly equal in size and opposite in direction. But the crucial detail is that these two forces act on two different objects, not on the same one. Forces only cancel each other out, producing no net force and no change in motion, when they act on the same object. The action-reaction pair never does this: by definition, one force acts on the first object and the other acts on the second. Consider the rocket: the rocket pushes its exhaust gas backward (one force, acting on the gas), and the gas pushes the rocket forward (the other force, acting on the rocket). The force on the gas makes the gas accelerate backward (it shoots out the nozzle). The force on the rocket makes the rocket accelerate forward (it launches). Each object responds to the single force acting on it, and there's nothing to cancel that force, because the equal-and-opposite partner is acting somewhere else entirely, on the other object. This is exactly why self-propulsion is possible at all. If action-reaction pairs canceled, nothing could ever push itself anywhere: rockets couldn't launch, you couldn't walk (your foot pushes the ground back, the ground pushes you forward), swimmers couldn't swim, and guns wouldn't recoil. The reason walking works is that the backward push on the ground and the forward push on you act on different things, the Earth and your body, so you accelerate forward while the (enormous) Earth barely budges. The confusion arises because people picture both forces piled onto one object, where they would indeed cancel. The fix is always to ask: which object does each force act on? When you track that carefully, you see that action-reaction pairs never cancel, and that's precisely what makes motion and propulsion possible throughout the universe. So the statement is false: equal and opposite action-reaction forces act on different objects and therefore do not cancel.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Newton's first law can't be right. Everything I push always stops on its own once I stop pushing, a sliding book, a rolling ball, a pushed cart. So motion clearly does need a constant force to keep going." Using the lesson, what's the best response?`,
              options: [
                `The student is right; Newton's first law is simply mistaken about motion.`,
                `Things stop only because they secretly run out of internal energy.`,
                `Objects stop on Earth not because motion needs force, but because friction (a hidden force) acts against them; remove friction, on ice or in space, and a moving object glides on forever, exactly as the first law predicts, the universe's true default is steady motion, not rest.`,
                `Motion really does need a constant push, and Newton was only describing imaginary frictionless worlds that don't exist.`,
              ],
              correctIndex: 2,
              explanation: `The student has spotted the very illusion Newton saw through. Things stop on Earth because friction (and air resistance) acts against them, not because motion needs force. Remove those forces, on ice, in space, and motion continues forever, confirming the first law. The distractors endorse the misconception, invent "internal energy running out," or dismiss the law as fiction.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-unity`, category: `Heaven and Earth, one law`, prompt: `Newton's three simple rules govern both a falling apple and the orbits of distant planets, uniting the heavens and the Earth. How does it feel to realize the same laws steering dishes on a table also steer the planets through space?` },
            { id: `reflect-inertia`, category: `The default of motion`, prompt: `Newton showed the universe's true default is steady motion, not rest, things stop only because hidden forces act. Where in your life have you mistaken a hidden resistance for "the natural way things are"?` },
            { id: `reflect-pairs`, category: `Every push pushes back`, prompt: `The third law says you can never push the world without it pushing back on you, exactly as hard. Does it change anything for you to know that every action you take meets an equal and opposite response?` },
            { id: `reflect-heritage`, category: `Teaching forces`, prompt: `Caro, you're building science for conscious families. How would you help a child feel Newton's three laws in their own body, using a balloon, a skateboard, or a hard push, so the laws become something they feel rather than memorize?` },
            { id: `reflect-simple`, category: `The power of three rules`, prompt: `It astonished the world that just three laws could explain nearly all motion. What does it stir in you that such vast complexity can rest on so few simple principles?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `For two thousand years people believed motion needs a constant push, because that's what their senses showed. What does it teach you that the truth was the opposite, and where might your own "obvious" sense of how things work deserve a second look?` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Force Detectives`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hunt for Newton's three laws hiding in plain sight all around you. Start with the first law (inertia): place a card on a cup with a coin on top, flick the card sharply sideways, and watch the coin drop straight into the cup (it stayed put by inertia while the card shot away). Try the famous tablecloth-and-dishes version with unbreakable items, fast yank versus slow pull, and feel the difference time makes. Sit in a (parked, safe) car or on a bus and notice how your body lurches when it starts, stops, or turns: that's inertia, your body keeping its motion while the vehicle changes. For the second law (F equals m a), gather objects of very different mass (a tennis ball, a basketball, a heavy book) and push each with the same effort across a smooth floor: the lighter ones accelerate far more, proving more mass means less acceleration for the same force. Race two toy cars, loading one with weight, and watch the heavy one accelerate more slowly down a ramp. For the third law (action-reaction), blow up a balloon and let it go: it zips around because it pushes air out one way and the air pushes it the other. Step off a small floating object (or a skateboard) and feel yourself pushed back as it shoots forward. Sit in a rolling chair and throw a heavy ball, you roll backward (you pushed the ball forward, it pushed you back). Push off a wall on a skateboard. Everywhere, ask the key questions: What's the net force? Which way will it accelerate? Where's the reaction force, and what object does it act on? The goal is to stop seeing pushes, falls, and motions as random events and start seeing them as Newton did, governed everywhere by the same three simple, unbreakable laws.`,
          },
          projectOption: {
            title: `The Newton's Laws Build, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design, build, and analyze a device or demonstration that vividly shows Newton's three laws in action, becoming an engineer who turns physics into something real. Week 1, choose and build: pick a project that demonstrates the laws, a balloon-powered car or rocket (third law, thrust), a marble-and-ramp setup to measure how mass affects acceleration (second law), a simple inertia demonstration rig (first law), or a small trebuchet, mousetrap car, or rubber-band racer. Build it from household materials, focusing on making the physics visible. As you build, identify exactly which law (or laws) your device demonstrates and predict, using Newton's laws, how it should behave: which way will it accelerate, what's providing the force, where's the reaction force? Week 2, test, measure, and explain: run your device repeatedly and gather data, how far the balloon car travels with different amounts of air, how the marble's acceleration changes when you add mass, how the launch angle affects range. Connect every result back to the specific law: use F equals m a to explain why adding mass slowed your car; use the third law to explain why your rocket flies; use inertia to explain why something resisted starting or stopping. Try to make a quantitative prediction and test it. Produce your final piece, a demonstration video with narration, a slide deck, or a lab-report-style writeup, that shows your device, explains the physics with clear reference to Newton's three laws, presents your data, and reflects on what worked and what surprised you. The aim is to experience physics as engineers and inventors do: not as formulas to memorize, but as reliable laws you can harness to make real things move exactly as you predict, which is the foundation of every machine, vehicle, and rocket ever built.`,
            offerToParent: `Parent: opt your child into the Newton's Laws Build project. Designing and building a working device, a balloon car, a ramp experiment, a launcher, then testing it, gathering data, and explaining the results through Newton's three laws directly develops the core NGSS physics skills of analyzing forces and motion and using F equals m a quantitatively. Connecting a real, self-built device to inertia, the force-mass-acceleration relationship, and action-reaction makes abstract laws concrete and deeply memorable, while building engineering design, measurement, data analysis, and scientific reasoning. It's rigorous, hands-on, standards-aligned work that mirrors how real engineers and physicists think.`,
          },
          identityQuestion: `If you become someone who can look at any push, fall, collision, or orbit and see the simple, unbreakable laws governing it, who can predict how forces will move the world and even harness them to build things, what kind of thinker does that make you, a person who sees the hidden machinery of motion that runs everything from a thrown ball to the planets, that someone who experiences force as a vague mystery never can?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees Newton's three laws in every push and fall.`,
            `A thinker who can predict how forces will move the world.`,
            `Someone who understands why rockets fly and why we can walk.`,
          ],
          saveKey: `identity_responses_sci_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleven lessons in, and you now hold three of the most powerful ideas in the history of science: Newton's laws of motion. You learned that a force is a push or pull that can change motion, and that only the net force, all forces added as vectors, determines how something accelerates. You learned the first law, inertia: objects keep doing what they're doing, at rest or in steady motion, unless a force acts, with mass measuring their resistance to change, the universe's true default is steady motion, not rest. You learned the second law, the famous F equals m a: net force equals mass times acceleration, the exact recipe that says a bigger force speeds things up more while a bigger mass resists more. And you learned the third law: every action has an equal and opposite reaction, with the paired forces acting on different objects, which is exactly why rockets fly in empty space and why you can walk across a room. As a physicist, you reasoned through real puzzles: why a seatbelt saves you, why the same push moves a skateboard but not a truck, how a rocket flies in the vacuum of space, why heavy and light boxes tie down a ramp, and the secret of the tablecloth trick. You can now see the simple, unbreakable laws governing every motion in the universe, the same ones that steer the planets. Next, we follow these laws into a profound idea: what stays constant when objects collide, the conservation of momentum. Onward, {name}. — Cosmo`,
          badge: `force-master`,
          badgeName: `Force Master`,
          xpEarned: 75,
          competencies: [
            `Understands force as a push or pull, and that only the net force changes motion`,
            `Knows Newton's first law (inertia) and that mass measures resistance to change`,
            `Applies Newton's second law, F = ma, relating force, mass, and acceleration`,
            `Knows Newton's third law and that action-reaction pairs act on different objects`,
            `Explains how rockets fly in a vacuum using thrust and the third law`,
            `Connects gravity and the second law to Galileo's equal-rate-of-fall discovery`,
            `Uses inertia to explain seatbelts, the tablecloth trick, and everyday motion`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Physics — Momentum and Conservation Laws`,
            hook: `What is preserved when objects collide, and why some quantities can never be created or destroyed. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L11 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
