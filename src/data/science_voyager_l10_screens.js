// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L10 — Physics: Kinematics — Describing Motion Mathematically
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS2 (Motion and Stability: Forces and Interactions)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l10-v1";

const SCIENCE_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-10`,
      title: `Physics: Kinematics — Describing Motion Mathematically`,
      duration: 35,
      xpReward: 75,
      badge: `motion-mapper`,
      badgeName: `Motion Mapper`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, welcome to physics — the most fundamental science, the study of matter, motion, energy, and the forces that govern them all. We start with kinematics: how to describe motion precisely, without yet asking why it happens. Position, velocity, acceleration, vectors: these are the mathematical tools that let you predict exactly where a moving object will be at any moment. Kinematics is the grammar of physics.`,
          headline: `Physics: Kinematics — Describing Motion Mathematically`,
          subtitle: `How to describe any motion with the precision and power of mathematics. A Case Study.`,
          visual: `/voyager-assets/science/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Science Of Motion`,
          paragraphs: [
            `Welcome to physics, the study of matter, energy, and the fundamental laws of the universe. It's the deepest science: everything else, chemistry, biology, the stars, ultimately runs on physics. And it begins with the most basic phenomenon of all: motion. Things move, and physics asks how we can describe that motion exactly.`,
            `Describing motion precisely sounds easy but was a profound breakthrough. For most of history, people described motion only vaguely, "fast," "slow," "far." The revolution came when thinkers like Galileo and Newton learned to describe motion mathematically, with exact quantities. This branch of physics is called kinematics: the precise description of motion.`,
            `Kinematics describes how things move without yet asking why, that question (forces) comes next lesson. First we need the right language. Everyday words like "fast" are too vague for science. Physics defines motion with precise quantities: position, displacement, speed, velocity, and acceleration, each with an exact meaning. Master these, and you can describe any motion exactly.`,
          ],
          image: `/voyager-assets/science/l10-s1-motion.webp`,
          imageCaption: `Welcome to PHYSICS, the study of matter, energy, and the fundamental laws of the universe, the deepest science, since chemistry, biology, and the stars all run on it. It begins with the most basic phenomenon: MOTION. Things move, and physics asks how to describe that motion exactly. This sounds easy but was a profound breakthrough. For most of history, people described motion only vaguely, fast, slow, far. The revolution came when GALILEO and NEWTON learned to describe motion MATHEMATICALLY, with exact quantities. This branch is KINEMATICS: the precise description of motion, without yet asking why (forces come next). Everyday words are too vague; physics uses precise quantities, POSITION, DISPLACEMENT, SPEED, VELOCITY, ACCELERATION, each with an exact meaning.`,
          vocab: [
            { word: `physics`,
              definition: `The fundamental science of matter, energy, motion, and the basic laws governing the universe. All other sciences rest on it.`,
              audioPrompt: `Physics, {name}, is the most fundamental science, the study of matter, energy, motion, and the basic laws that govern the whole universe. Everything else, chemistry, biology, the stars, ultimately rests on physics.` },
            { word: `kinematics`,
              definition: `The branch of physics that describes how things move, position, velocity, acceleration, without yet asking what causes the motion.`,
              audioPrompt: `Kinematics, {name}, is the part of physics that describes how things move, precisely and mathematically, using position, velocity, and acceleration. It describes motion without yet asking what causes it, that's forces, coming next.` },
            { word: `position`,
              definition: `Where an object is located, measured from a chosen reference point. It's the starting quantity for describing any motion.`,
              audioPrompt: `Position, {name}, is simply where an object is, measured from some chosen reference point or starting line. It's the most basic quantity in describing motion: to track movement, you first need to say where something is.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Speed Versus Velocity`,
          paragraphs: [
            `Start with how far something moves. Distance is the total length of the path traveled. Displacement is different: it's the straight-line distance and direction from start to finish. Walk all the way around a track and back to the start, your distance is the full lap, but your displacement is zero, you ended where you began.`,
            `Now, how fast? Speed is how much distance you cover per unit of time (like miles per hour), just a number. Velocity is speed with a direction: "60 miles per hour north." This difference matters enormously in physics. Two cars can have the same speed but different velocities if they're heading different directions.`,
            `Quantities that include direction (like velocity and displacement) are called vectors; quantities that are just a number (like speed and distance) are called scalars. This isn't fussiness, direction is physically crucial. As we'll see, an object can travel at constant speed yet have changing velocity, simply by changing direction, and that has real consequences.`,
          ],
          image: `/voyager-assets/science/l10-s2-velocity.webp`,
          imageCaption: `How far does something move? DISTANCE is the total length of the path traveled. DISPLACEMENT is different: the straight-line distance AND direction from start to finish. Walk all the way around a track back to the start, and your distance is a full lap, but your displacement is zero, you ended where you began. How fast? SPEED is distance covered per unit time (like miles per hour), just a number. VELOCITY is speed with a DIRECTION: sixty miles per hour north. Two cars can share a speed but have different velocities if headed different ways. Quantities with direction (velocity, displacement) are VECTORS; quantities that are just a number (speed, distance) are SCALARS. Direction is physically crucial: an object can move at constant speed yet have changing velocity.`,
          vocab: [
            { word: `displacement`,
              definition: `The straight-line distance and direction from start to finish, a vector. Different from distance, the total path length traveled.`,
              audioPrompt: `Displacement, {name}, is the straight-line distance and direction from where you started to where you ended. It differs from distance, the total path you walked: go around a track and back, and your displacement is zero.` },
            { word: `velocity`,
              definition: `Speed together with a direction, like "60 mph north." A vector. Speed alone is just the number, with no direction.`,
              audioPrompt: `Velocity, {name}, is speed together with a direction, like sixty miles per hour heading north. Speed alone is just the number; velocity adds the direction, and in physics that direction matters enormously.` },
            { word: `vector vs. scalar`,
              definition: `A vector has both size and direction (velocity, displacement); a scalar has only size (speed, distance). The distinction is crucial in physics.`,
              audioPrompt: `A vector, {name}, has both a size and a direction, like velocity or displacement. A scalar has only size, just a number, like speed or distance. Telling them apart matters, because in physics, direction has real consequences.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Acceleration: Change In Motion`,
          paragraphs: [
            `Velocity tells you how motion is happening right now. Acceleration tells you how velocity is changing. Acceleration is the rate at which velocity changes, speeding up, slowing down, or changing direction. Press the gas and you accelerate; hit the brakes and you accelerate too (a negative acceleration, slowing down).`,
            `Here's the surprising part that trips many people up: because velocity includes direction, changing direction is acceleration, even at constant speed. A car rounding a curve at a steady 30 mph is accelerating, because its direction (and so its velocity) is constantly changing. Acceleration isn't just "going faster"; it's any change in velocity.`,
            `This precise idea unlocks enormous power. If you know an object's starting position, its velocity, and its acceleration, you can predict exactly where it will be at any future moment, using simple equations of motion. This is how we calculate where a thrown ball lands, how long a car takes to stop, or the path of a spacecraft. Motion becomes predictable.`,
          ],
          image: `/voyager-assets/science/l10-s3-acceleration.webp`,
          imageCaption: `Velocity tells you how motion is happening now; ACCELERATION tells you how velocity is CHANGING, speeding up, slowing down, or changing direction. Press the gas and you accelerate; hit the brakes and you accelerate too (a negative acceleration, slowing). The surprising part that trips people up: because velocity includes direction, CHANGING DIRECTION is acceleration, even at constant speed. A car rounding a curve at a steady thirty miles per hour IS accelerating, its direction, and so its velocity, constantly changes. Acceleration isn't just going faster; it's ANY change in velocity. This unlocks power: knowing starting position, velocity, and acceleration, you can predict exactly where an object will be at any moment, where a ball lands, how long a car takes to stop. Motion becomes PREDICTABLE.`,
          vocab: [
            { word: `acceleration`,
              definition: `The rate at which velocity changes, speeding up, slowing down, or changing direction. Any change in velocity is acceleration.`,
              audioPrompt: `Acceleration, {name}, is the rate at which velocity changes. That means speeding up, slowing down, or even just changing direction. Any change in velocity at all counts as acceleration, not only going faster.` },
            { word: `deceleration`,
              definition: `Slowing down, which is a negative acceleration. Hitting the brakes accelerates a car in the sense that its velocity is changing.`,
              audioPrompt: `Deceleration, {name}, is just slowing down, which physicists call a negative acceleration. When you hit the brakes, your velocity is still changing, so technically you're accelerating, just in the opposite direction.` },
            { word: `equations of motion`,
              definition: `Simple formulas linking position, velocity, acceleration, and time, used to predict exactly where a moving object will be and when.`,
              audioPrompt: `Equations of motion, {name}, are simple formulas connecting position, velocity, acceleration, and time. With them, if you know how something starts and how it's accelerating, you can predict exactly where it'll be at any future moment.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Galileo's Astonishing Discovery`,
          paragraphs: [
            `One of the most famous and counterintuitive truths in physics concerns falling objects. Common sense says heavier things fall faster, a cannonball should beat a pebble. For two thousand years, people believed this. Then Galileo argued, and experiments confirmed, something astonishing: all objects fall at the same rate, regardless of their weight.`,
            `Drop a hammer and a feather together and the hammer wins, but only because air resistance slows the feather. Remove the air, and they fall identically, hitting the ground at the same instant. Astronauts famously demonstrated this on the Moon, where there's no air: a hammer and feather, dropped together, landed together. Weight doesn't affect the rate of fall.`,
            `Falling objects undergo constant acceleration due to gravity, the same for everything: near Earth's surface, gravity speeds any falling object up by about 9.8 meters per second, every second. This single, universal acceleration means we can predict falls precisely. Galileo's insight, that motion follows simple universal rules, launched modern physics itself.`,
          ],
          image: `/voyager-assets/science/l10-s4-galileo.webp`,
          imageCaption: `One of physics' most famous, counterintuitive truths concerns FALLING. Common sense says heavier things fall faster, a cannonball should beat a pebble, and for two thousand years people believed it. Then GALILEO argued, and experiments confirmed, something astonishing: all objects fall at the SAME rate, regardless of weight. Drop a hammer and a feather and the hammer wins, but only because AIR RESISTANCE slows the feather. Remove the air and they fall identically, hitting at the same instant, as astronauts famously showed on the airless Moon. Falling objects undergo constant ACCELERATION due to gravity, the same for everything: near Earth, gravity speeds any falling object by about 9.8 meters per second, every second. Galileo's insight, that motion follows simple universal rules, launched modern physics.`,
          vocab: [
            { word: `acceleration due to gravity`,
              definition: `The constant rate (about 9.8 m/s² near Earth) at which gravity speeds up any falling object, the same for all objects regardless of weight.`,
              audioPrompt: `Acceleration due to gravity, {name}, is the constant rate at which gravity speeds up a falling object, about 9.8 meters per second faster every second near Earth. Remarkably, it's the same for every object, whatever its weight.` },
            { word: `air resistance`,
              definition: `The force of air pushing against a moving object, which slows lighter or wider objects more. It's why a feather falls slower than a hammer in air.`,
              audioPrompt: `Air resistance, {name}, is the force of air pushing back against a moving object. It slows light, wide things like feathers far more than dense ones, which is the only reason a feather falls slower than a hammer in air.` },
            { word: `free fall`,
              definition: `Motion under gravity alone, with no air resistance. In free fall, all objects accelerate identically regardless of their weight.`,
              audioPrompt: `Free fall, {name}, is motion under gravity alone, with no air resistance to interfere. In true free fall, like on the airless Moon, every object falls at exactly the same rate, no matter how heavy or light it is.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Kinematics is the precise, mathematical description of motion. We distinguish distance (total path) from displacement (straight-line, with direction), and speed (just a number) from velocity (speed with direction). Quantities with direction are vectors; those without are scalars, and that distinction has real physical consequences.`,
            `Acceleration is any change in velocity, speeding up, slowing down, or changing direction, so a car rounding a curve at constant speed is still accelerating. With starting position, velocity, and acceleration, the equations of motion let us predict exactly where something will be. And Galileo's discovery: all objects fall at the same rate (about 9.8 m/s² near Earth), with weight irrelevant once air resistance is removed.`,
            `Now the case-study screen makes you the physicist with five puzzles: why a runner who laps the track has zero displacement, why a car turning at steady speed is accelerating, the hammer-and-feather drop on the Moon, predicting where a thrown ball lands, and reading a motion graph. Reason with the language of kinematics. Onward.`,
          ],
          image: `/voyager-assets/science/l10-s5-before.webp`,
          imageCaption: `Threads together. KINEMATICS is the precise, mathematical description of motion. We distinguish DISTANCE (total path) from DISPLACEMENT (straight-line, with direction), and SPEED (just a number) from VELOCITY (speed with direction). Quantities with direction are VECTORS; those without are SCALARS, and the distinction has real consequences. ACCELERATION is any change in velocity, speeding up, slowing, or turning, so a car rounding a curve at constant speed is still accelerating. With starting position, velocity, and acceleration, the EQUATIONS OF MOTION predict exactly where something will be. And GALILEO's discovery: all objects fall at the same rate (about 9.8 m/s² near Earth), weight irrelevant once air is removed. The case-study screen gives five puzzles.`,
          vocab: [
            { word: `projectile motion`,
              definition: `The curved path of an object thrown or launched, shaped by its forward motion combined with gravity's downward acceleration.`,
              audioPrompt: `Projectile motion, {name}, is the curved path of anything thrown or launched, like a ball or an arrow. It comes from combining the object's steady forward motion with gravity's constant downward pull, producing that graceful arc.` },
            { word: `motion graph`,
              definition: `A graph plotting position or velocity against time. Its shape and slope reveal an object's speed, direction, and acceleration at a glance.`,
              audioPrompt: `A motion graph, {name}, plots position or velocity against time. Reading its shape and steepness tells you how fast something is moving, which way, and whether it's accelerating, motion captured visually in a single picture.` },
            { word: `predicting motion`,
              definition: `Using known starting conditions and the equations of motion to calculate exactly where a moving object will be at any future time.`,
              audioPrompt: `Predicting motion, {name}, means using what you know now, position, velocity, acceleration, with the equations of motion to calculate exactly where something will be later. It's how we land spacecraft and aim everything precisely.` },
          ],
        },

        {
          id: `l10-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Motion`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about describing motion. For each, reason with the precise language of kinematics, distance versus displacement, speed versus velocity, and acceleration.`,
          cases: [
            {
              id: `c1`,
              title: `The runner who went nowhere`,
              type: `Distance vs. displacement`,
              description: `A runner completes exactly one full lap around a 400-meter track, ending precisely where she started. She's exhausted and clearly traveled a long way. Yet a physicist says her displacement is zero. How can she have traveled 400 meters but have zero displacement?`,
              questions: [
                `What's the difference between her distance and her displacement?`,
                `Why is her displacement zero despite all that running?`,
                `When would distance and displacement be equal?`,
              ],
              evaluation: `This puzzle cleanly separates two ideas people usually lump together: distance and displacement. The runner's distance, the total length of the path she actually traveled, is 400 meters: she ran the full lap, and her legs and lungs certainly felt every meter. But displacement is a completely different quantity: it's the straight-line distance and direction from her starting point to her ending point, a vector. Since she ended exactly where she began, her straight-line distance from start to finish is zero, so her displacement is zero, no matter how far she ran along the way. The key insight is that displacement only cares about where you start and where you end, not the path between. You could run a marathon in a giant loop back to your front door, and your displacement would be zero, even though your distance was 26 miles. Distance is a scalar (just an amount, always adding up as you move), while displacement is a vector (it has direction and can cancel out, moving back toward your start "undoes" displacement). When would distance and displacement be equal? Only when you travel in a perfectly straight line without ever reversing direction, then the total path length equals the straight-line start-to-finish distance. The moment your path curves or doubles back, distance exceeds the magnitude of displacement. This isn't a word game; it matters physically. If you want to know how much effort the runner expended, you care about distance. If you want to know her net change in position (say, for calculating her velocity over the lap, which would average to zero!), you care about displacement. Physics needs both precise quantities, and confusing them leads to real errors. It's the first lesson in why everyday language ("she ran far") is too vague for science, which demands you specify exactly which quantity you mean.`,
            },
            {
              id: `c2`,
              title: `Turning is accelerating`,
              type: `Velocity and acceleration`,
              description: `A car drives around a circular track, holding its speedometer at a perfectly steady 30 miles per hour the whole way, never speeding up or slowing down. A physicist insists the car is accelerating the entire time. But the speed never changes, so how can it be accelerating?`,
              questions: [
                `If the speed is constant, how can the car be accelerating?`,
                `What is changing about the car's motion as it turns?`,
                `Why does the definition of acceleration include direction?`,
              ],
              evaluation: `This is one of the most important and counterintuitive ideas in kinematics, and it hinges on the precise distinction between speed and velocity. The resolution is this: acceleration is defined as any change in velocity, not any change in speed, and velocity includes direction. The car's speed (just the number, 30 mph) is indeed constant. But its velocity (speed together with direction) is constantly changing, because as the car goes around the circular track, its direction is continuously changing, at one moment it's heading north, then northeast, then east, and so on, all the way around. Since velocity is a vector that includes direction, a constantly changing direction means a constantly changing velocity, even though the speed stays fixed. And since acceleration is the rate of change of velocity, the car is accelerating the entire time it's turning. What's changing about the car's motion is its direction of travel, and that counts, physically and mathematically, as acceleration. This is exactly why physics insists that acceleration's definition includes direction: it's not fussiness, it reflects real physics. Changing direction requires a real force (you feel it as you're pushed toward the outside of a turning car, that sideways push is the car accelerating you toward the center of the circle). An object moving in a circle at constant speed is always accelerating toward the center, this is called centripetal acceleration, and it's why satellites orbiting Earth at steady speed are constantly accelerating, why the Moon is "falling" around the Earth, and why you need to grip the wheel to turn. If acceleration only meant "speeding up," none of this would make sense. So the deep lesson is that "acceleration" in physics means something more precise and more powerful than the everyday word: it's any change in velocity whatsoever, including a pure change of direction. Recognizing this transforms how you see all motion, every turn, every orbit, every curve is acceleration in action.`,
            },
            {
              id: `c3`,
              title: `The hammer and the feather`,
              type: `Galileo and free fall`,
              description: `On Earth, drop a hammer and a feather and the hammer hits the ground first, everyone has seen it. But when an astronaut dropped a hammer and a feather together on the Moon, they landed at exactly the same instant. Why do they fall differently on Earth but identically on the Moon?`,
              questions: [
                `Why does the hammer beat the feather on Earth?`,
                `Why do they land together on the Moon?`,
                `What does this reveal about how gravity affects falling objects?`,
              ],
              evaluation: `This famous demonstration confirms one of the most astonishing truths in physics, Galileo's insight that all objects fall at the same rate regardless of weight, and reveals why our everyday experience misleads us. On Earth, the hammer beats the feather not because gravity pulls the heavier hammer faster, but because of air resistance. As objects fall through air, the air pushes back against them. A feather, being light and having a large surface area, is dramatically slowed by air resistance relative to its tiny weight, so it drifts down slowly. The hammer, being dense and compact, is barely affected by air resistance relative to its weight, so it falls fast. The difference we see is entirely due to the air, not to gravity treating them differently. On the Moon, there is no atmosphere, no air at all, so there's no air resistance. With that complicating factor removed, we see what gravity actually does: it accelerates both the hammer and the feather at exactly the same rate, so they fall identically and land at the same instant. The astronaut's demonstration (David Scott on Apollo 15) was a dramatic confirmation of Galileo's claim. What this reveals is profound: gravity gives every object the same acceleration, regardless of its mass. Near a planet's surface, that acceleration is a single constant value (about 9.8 m/s² on Earth, less on the smaller Moon), and it's the same for a boulder and a pebble, a hammer and a feather. This seems to defy common sense, surely heavier things should fall faster?, which is exactly why it took a genius like Galileo to see past the misleading everyday evidence (where air resistance is always muddying the picture) to the underlying truth. He reasoned and experimented his way to it, and it became a cornerstone of physics. The deeper reason (which Newton and later Einstein illuminated) is that although gravity pulls harder on more massive objects, more massive objects are also harder to accelerate (they have more inertia), and these two effects exactly cancel, leaving the same acceleration for all. So the next time you see a feather drift down, remember: in the absence of air, it would plummet exactly as fast as a stone, a beautiful, hidden simplicity beneath the messy surface of the world.`,
            },
            {
              id: `c4`,
              title: `Where will the ball land?`,
              type: `Predicting motion`,
              description: `A physicist watches someone throw a ball and, before it lands, calmly predicts exactly where and when it will hit the ground, and is right. There's no magic, no guessing. How can knowing an object's starting conditions let you predict its entire future path?`,
              questions: [
                `What information does the physicist need to predict the ball's motion?`,
                `How is it possible to predict the future path so precisely?`,
                `Why is this predictive power so important in science and technology?`,
              ],
              evaluation: `The physicist's prediction isn't magic, it's the profound power of kinematics, and it reveals why describing motion mathematically was such a monumental breakthrough. To predict the ball's motion, the physicist needs to know its starting conditions: its initial position (where it's thrown from), its initial velocity (how fast and in what direction it's launched), and the acceleration acting on it (here, gravity, the constant downward 9.8 m/s² we just discussed). With just these, the equations of motion, simple mathematical formulas linking position, velocity, acceleration, and time, allow the physicist to calculate the ball's exact position at any future moment, and therefore precisely where and when it will land. How is this possible? Because motion, once you describe it with the right precise quantities, follows exact, reliable rules rather than whim. The ball's path is actually a combination of two simple motions: a steady horizontal motion (the forward velocity it was given, unchanging if we ignore air resistance) and a vertical motion governed by gravity's constant acceleration (slowing its rise, then speeding its fall). Combine these mathematically and you get the graceful curved arc of projectile motion, and you can pinpoint every detail of it in advance. This is the heart of why kinematics matters: it makes the future of a moving object predictable. And that predictive power is one of the most important and useful achievements in all of science and technology. It's how engineers calculate whether a bridge can handle a load, how long a car needs to stop (crucial for safety), and the trajectory of a basketball, a bullet, or a thrown javelin. On the grandest scale, it's how we navigate spacecraft across the solar system, predicting years in advance exactly where a planet will be so a probe can arrive at the right spot, and how we knew precisely when and where a rover would touch down on Mars. The ability to predict motion from starting conditions transformed humanity from describing the world to controlling and navigating it. When Galileo and Newton turned motion into mathematics, they didn't just satisfy curiosity, they handed us the power to foresee and shape the physical future, a power we use every single day.`,
            },
            {
              id: `c5`,
              title: `Reading the story in a graph`,
              type: `Motion graphs`,
              description: `A physicist is handed a graph showing an object's position over time. Without seeing the object at all, she describes its entire journey: when it moved fast, when it slowed, when it stopped, when it reversed. How can a simple line on a graph contain the whole story of a motion?`,
              questions: [
                `How can a position-versus-time graph reveal speed and direction?`,
                `What would a flat (horizontal) part of the line mean?`,
                `Why are graphs such a powerful tool for understanding motion?`,
              ],
              evaluation: `This case reveals how graphs turn motion into a visual story you can read at a glance, one of the most powerful tools in physics. A position-versus-time graph plots where the object is (position) on the vertical axis against time on the horizontal axis. The secret to reading it is the steepness, or slope, of the line, because the slope tells you how fast the position is changing per unit of time, which is exactly the definition of velocity. So: a steep line means position is changing rapidly, the object is moving fast. A gently sloped line means it's moving slowly. The direction of the slope reveals direction of travel: a line sloping upward means position is increasing (moving forward, say), while a line sloping downward means position is decreasing (moving backward, reversing direction). A flat, horizontal part of the line is especially telling: if position isn't changing at all as time passes, the object is standing still, stopped, even though time keeps moving. By reading these features in sequence, the physicist reconstructs the entire journey: steep upward (moving forward fast), then gentler (slowing while still moving forward), then flat (stopped for a while), then sloping downward (reversed direction, heading back), and so on, the whole story, without ever seeing the object. She can even spot acceleration: if the line is curved rather than straight, the slope (velocity) is itself changing, which means the object is accelerating. Why are graphs so powerful for understanding motion? Because they compress a huge amount of information into a single, readable picture: at one glance you can see the entire history of a motion, instantly compare different moments, spot patterns (steady motion, acceleration, stops, reversals), and even predict what comes next. Numbers in a table are precise but hard to grasp as a whole; a graph reveals the shape and story of the motion intuitively. This is why scientists across every field rely on graphs, they let the human eye perceive relationships and trends that would be invisible in raw data. Learning to read a motion graph is learning to see motion as physicists do: not as a vague blur of movement, but as a precise, structured story, captured in the geometry of a line, where every slope, curve, and flat stretch has an exact physical meaning.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, why does physics need precise quantities like displacement and velocity instead of vague words, and what did Galileo discover about falling objects? Which case changed how you see everyday motion most? In 5-6 sentences.`,
          reflectionPrompt: `Galileo looked past two thousand years of "obvious" common sense to find a hidden, simple truth: everything falls the same. How does it feel to know that the deepest truths sometimes hide beneath what seems obvious, waiting for someone willing to look more carefully?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is kinematics?`,
              options: [
                `The study of what forces actually cause physical objects to move.`,
                `The branch of physics that describes how things move, without yet asking why.`,
                `The study of energy stored inside chemical bonds.`,
                `The naming system used for all the chemical elements.`,
              ],
              correctIndex: 1,
              explanation: `Kinematics is the branch of physics that describes motion precisely (position, velocity, acceleration) without yet asking what causes it, that's forces, the next topic. The distractors describe dynamics/forces, chemical energy, or element naming.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `A runner completes one full lap and ends where she started. What are her distance and displacement?`,
              options: [
                `Both her distance and her displacement are zero.`,
                `Her distance is zero, but her displacement is one lap.`,
                `Her distance is one lap, but her displacement is zero.`,
                `Both her distance and her displacement equal one lap.`,
              ],
              correctIndex: 2,
              explanation: `Distance is the total path (one full lap), but displacement is the straight-line distance from start to finish, which is zero since she ended where she began. The distractors mix up which quantity is which.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the key difference between speed and velocity?`,
              options: [
                `Velocity includes a direction; speed is just a number.`,
                `Speed includes a direction; velocity is just a number.`,
                `They are exactly the same thing with two different names.`,
                `Speed applies to cars and velocity applies only to people.`,
              ],
              correctIndex: 0,
              explanation: `Velocity is speed plus a direction (a vector), while speed is just the number (a scalar). The distractors reverse it, call them identical, or invent an object-based rule.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Which of these is the best definition of acceleration?`,
              options: [
                `Only the act of speeding up faster, and never anything else.`,
                `The total distance an object travels over its trip.`,
                `Any change in velocity: speeding up, slowing down, or changing direction.`,
                `The single fixed top speed an object can possibly reach.`,
              ],
              correctIndex: 2,
              explanation: `Acceleration is the rate of change of velocity, any change, including speeding up, slowing down, OR changing direction. The distractors limit it to speeding up, confuse it with distance, or with top speed.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `A car drives around a circular track at a steady 30 mph. Is it accelerating?`,
              options: [
                `No, because its speed never changes at any point.`,
                `Yes, because its direction (and thus velocity) is constantly changing.`,
                `No, because acceleration only happens in a straight line.`,
                `Only if it speeds past exactly 60 mph at some point.`,
              ],
              correctIndex: 1,
              explanation: `Yes, it's accelerating: velocity includes direction, and the car's direction constantly changes around the curve, so its velocity changes even though speed is constant. The distractors deny it, restrict acceleration to straight lines, or invent a speed threshold.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `On the airless Moon, an astronaut drops a hammer and a feather together. What happens?`,
              options: [
                `The hammer lands first, just as it does on Earth.`,
                `The feather lands first because it is much lighter.`,
                `Neither one falls at all, since there is no air to pull them.`,
                `They land at exactly the same instant, since both fall at the same rate.`,
              ],
              correctIndex: 3,
              explanation: `With no air resistance, gravity accelerates both objects identically, so they land at the same instant, confirming Galileo's discovery that all objects fall at the same rate regardless of weight. The distractors invoke Earth-like results, weight, or no falling.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does a hammer beat a feather to the ground on Earth, but not on the Moon?`,
              options: [
                `On Earth, air resistance slows the light feather; the Moon has no air.`,
                `Earth's gravity is somehow smarter and prefers heavier objects.`,
                `The feather is secretly much heavier than it looks on Earth.`,
                `The Moon's gravity pulls feathers and hammers in opposite directions.`,
              ],
              correctIndex: 0,
              explanation: `On Earth, air resistance dramatically slows the light, wide feather relative to its weight; the airless Moon removes that factor, revealing that gravity accelerates both identically. The distractors anthropomorphize gravity, misstate the feather's weight, or invent opposite pulls.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `To predict exactly where a thrown ball will land, what does a physicist need to know?`,
              options: [
                `Only the painted color and the brand of the ball being thrown.`,
                `Nothing at all; the final landing spot is purely random luck.`,
                `The starting position, the initial velocity, and the acceleration (gravity).`,
                `Just the weight of the ball, and nothing else whatsoever.`,
              ],
              correctIndex: 2,
              explanation: `With the starting position, initial velocity, and the acceleration (gravity), the equations of motion let a physicist calculate the ball's exact future path and landing point. The distractors cite color, randomness, or weight alone.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: An object can never be accelerating if its speed stays exactly the same the whole time.`,
              correctAnswer: false,
              explanation: `False, and understanding why is one of the most important conceptual leaps in all of physics, because it forces you to use the word "acceleration" with the precision physics demands rather than its loose everyday meaning. In everyday speech, "accelerating" usually just means "speeding up." But in physics, acceleration is defined as the rate of change of velocity, and the crucial point is that velocity is not the same as speed. Velocity is a vector: it includes both how fast something is moving (its speed) AND the direction it's moving in. Speed is only the number, with no direction. This means velocity can change in two distinct ways: the speed can change (speeding up or slowing down), OR the direction can change, even if the speed stays exactly the same. Either kind of change is a change in velocity, and therefore counts as acceleration. So an object moving at a perfectly constant speed can absolutely be accelerating, as long as its direction is changing. The classic example is a car driving around a circular track while holding its speedometer steady at, say, 30 mph: its speed never changes, but its direction is changing continuously as it rounds the curve, so its velocity is constantly changing, which means it is constantly accelerating. The same is true of a satellite orbiting Earth at constant speed, the Moon circling our planet, or a ball whirled on a string: all are accelerating every moment, because their direction of motion keeps changing. This kind of acceleration, caused purely by change in direction, points toward the center of the circle and is called centripetal acceleration, and it's very real: you feel it as the sideways push when a car turns sharply, and it requires a genuine force to produce. This is exactly why physicists are so careful to define acceleration in terms of velocity (which includes direction) rather than speed. If acceleration only meant "speeding up," we couldn't explain orbits, turns, or circular motion at all. So the statement is false: constant speed does not mean no acceleration. Any change in the direction of motion is acceleration, even when the speed holds perfectly steady.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student argues: "Heavier objects must fall faster, because gravity pulls harder on them, just look, a rock beats a leaf every time." Using the lesson, what's the best response?`,
              options: [
                `The student is completely correct; heavier objects always fall faster.`,
                `Gravity actually pulls equally hard on every object, regardless of its mass.`,
                `Gravity does pull harder on heavier objects, but heavier objects are also harder to accelerate, and these effects cancel, so all objects fall at the same rate; the rock beats the leaf only because air resistance slows the light, wide leaf, remove the air and they fall identically.`,
                `The rock and leaf fall at different rates because gravity dislikes light objects.`,
              ],
              correctIndex: 2,
              explanation: `The best response explains the real physics: gravity does pull harder on more massive objects, but they're also harder to accelerate (more inertia), and the effects cancel, giving all objects the same acceleration. The rock beats the leaf only due to air resistance; in a vacuum they fall identically (the Moon demonstration). The distractors agree falsely, misstate gravity, or anthropomorphize it.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-hidden`, category: `Truth beneath the obvious`, prompt: `Galileo looked past two thousand years of "obvious" common sense to find that everything falls the same. How does it feel to know the deepest truths sometimes hide beneath what seems obvious, waiting for someone willing to look more carefully?` },
            { id: `reflect-precision`, category: `The power of precision`, prompt: `Physics replaced vague words like "fast" with exact quantities, and suddenly motion became predictable. Where else in your life might replacing vague impressions with precise descriptions reveal something you couldn't see before?` },
            { id: `reflect-predict`, category: `Foreseeing the future`, prompt: `From an object's starting conditions, physics can predict its entire future path. What does it stir in you that the physical future, at least for moving objects, is genuinely knowable in advance?` },
            { id: `reflect-heritage`, category: `Teaching motion`, prompt: `Caro, you're building science for conscious families. How would you help a child feel the wonder in Galileo's discovery, and grasp the surprising idea that turning a corner is accelerating, using something they can run, throw, or spin?` },
            { id: `reflect-language`, category: `The universe's language`, prompt: `The laws of motion are written in the language of mathematics, and learning that language lets you read the universe. Does seeing math as a language for reality, rather than just schoolwork, change how you feel about it?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Our senses told us heavier things fall faster, and for millennia we believed our senses. What does Galileo's story teach about trusting intuition versus careful evidence, and where might your own "obvious" beliefs deserve a second look?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Motion is everywhere you look, and now you have the precise language to describe it. These help you see it. Two paths.`,
          familyActivity: {
            title: `Become Motion Scientists`,
            duration: `One afternoon`,
            description: `Turn an ordinary afternoon into a physics lab and discover that motion follows precise, measurable rules. Start with distance versus displacement: have someone walk a winding path around the yard or room to a destination, measuring the total distance walked (the path) versus the straight-line displacement (start to finish), they'll see the path is longer than the displacement, and if they return to start, displacement is zero though distance isn't. Next, explore speed and velocity: time family members covering a set distance (say, 20 meters) to calculate speed, then discuss how adding a direction ("2 meters per second, toward the tree") turns speed into velocity. Make acceleration vivid: have someone start from rest and speed up, then talk about how a car turning a corner at steady speed is STILL accelerating because its direction changes, walk a circle at constant pace and feel how you must lean and push to keep turning (that's the force causing acceleration). Then do the famous Galileo experiment safely: drop two objects of very different weights but similar shape (a full water bottle and an empty one, or two balls of different mass) from the same height at the same time, they'll land together, surprising everyone. Then drop a flat sheet of paper versus a crumpled one (same paper, same weight!): the crumpled one falls faster, proving the difference is air resistance, not weight. Crumple the feather-like sheet and watch weight stop mattering. For graphing, have someone walk while another calls out their position every second, then plot it: a steep line means fast, flat means stopped, and you've made a motion graph. Finally, predict motion: throw a ball and try to call where it'll land before it does, discussing how its arc combines steady forward motion with gravity's pull. The goal is for everyone to stop seeing motion as a vague blur and start seeing it as physicists do, precise, measurable, predictable, and full of surprises that defy "common sense."`,
          },
          projectOption: {
            title: `The Motion Analysis, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Capture and analyze a real motion with the precision of a physicist, revealing the kinematics hidden inside it. Week 1, choose and measure a motion: pick something you can record and study, a ball rolling down a ramp, someone running or biking a measured course, a toy car, a falling object, a swing, or a thrown ball (many phones have slow-motion video, which is perfect for this). Record it, then extract the data: measure position at regular time intervals (using the video frames or timed marks). From this, calculate the key kinematic quantities: distance versus displacement, speed and velocity (including direction), and acceleration (is the object speeding up, slowing down, or moving steadily?). Be precise and use the correct vocabulary. Week 2, graph and interpret: create motion graphs (position versus time, and if you can, velocity versus time), and learn to read the story in them, where the object moved fast, slowed, stopped, or reversed, and where it accelerated (curved lines). If you studied a falling or thrown object, explore Galileo's discovery: compare objects of different weights, or analyze the role of air resistance, and connect to the constant acceleration of gravity. Then, the payoff: use your data and the idea of predictable motion to make and test a prediction, for example, predict where a ball will land or how long something takes to travel a distance, then check it. Produce your final piece, an illustrated analysis, a slide deck, a video with annotated motion graphs, or a lab-report-style writeup, that teaches both your specific motion and the principles of kinematics it demonstrates, always connecting the real movement to the precise quantities and graphs that describe it. The aim is to experience physics as it's actually done: turning real-world motion into precise measurements, graphs, and predictions, and discovering that motion truly does follow exact, knowable rules. You'll come away understanding kinematics not as formulas to memorize but as a powerful lens for seeing and predicting the moving world.`,
            offerToParent: `Parent: opt your child into the Motion Analysis project. Recording a real motion, measuring position over time, calculating distance, displacement, speed, velocity, and acceleration, graphing the motion, and making a tested prediction directly develops the core NGSS physics skills of describing motion mathematically and interpreting motion graphs. Using slow-motion video to analyze a falling or thrown object, and exploring Galileo's discovery and air resistance, makes abstract kinematics concrete and genuinely exciting. It builds quantitative reasoning, data analysis, and graph literacy, foundational skills for all of physics and science. It's rigorous, hands-on, standards-aligned work.`,
          },
          identityQuestion: `If you become someone who can describe any motion with the precision of mathematics, who can look past misleading "common sense" to find the simple rules underneath and even predict where a moving object will be, what kind of thinker does that make you, a person who sees the exact, knowable order beneath the moving world, that someone who experiences motion as just a vague blur of "fast" and "slow" can never quite become?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can describe any motion with mathematical precision.`,
            `A thinker who looks past "common sense" to find the real rule.`,
            `Someone who can predict where a moving object will be.`,
          ],
          saveKey: `identity_responses_sci_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Ten down, halfway through, and you've stepped into physics, the most fundamental science of all, beginning with motion itself. You learned kinematics: the precise, mathematical description of how things move. You learned to distinguish distance (the total path) from displacement (straight-line, with direction), and speed (just a number) from velocity (speed with direction), and why quantities with direction, vectors, have real physical consequences. You learned that acceleration is any change in velocity, speeding up, slowing down, OR changing direction, which is why a car rounding a curve at constant speed is still accelerating. You discovered that with starting conditions and the equations of motion, the future path of a moving object becomes precisely predictable. And you met Galileo's astonishing, counterintuitive discovery: that all objects fall at the same rate regardless of weight, with the hammer beating the feather only because of air resistance, identically on the airless Moon. As a physicist, you reasoned through real puzzles: the runner with zero displacement, why turning is accelerating, the hammer and feather, predicting where a ball lands, and reading the story in a motion graph. You can now describe the moving world with mathematical precision. Next, we ask the deeper question kinematics set aside: what CAUSES motion to change? That's forces, and Newton's laws. Onward, {name}. — Cosmo`,
          badge: `motion-mapper`,
          badgeName: `Motion Mapper`,
          xpEarned: 75,
          competencies: [
            `Understands kinematics as the precise, mathematical description of motion`,
            `Distinguishes distance from displacement, and speed from velocity (scalars vs. vectors)`,
            `Grasps acceleration as any change in velocity, including a change in direction`,
            `Understands that motion can be predicted from starting conditions and the equations of motion`,
            `Knows Galileo's discovery that all objects fall at the same rate regardless of weight`,
            `Explains the role of air resistance and the meaning of free fall`,
            `Reads motion graphs to determine speed, direction, and acceleration`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Physics — Newton's Laws and Forces in Two Dimensions`,
            hook: `What actually causes motion to change: the laws of force that govern everything. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
