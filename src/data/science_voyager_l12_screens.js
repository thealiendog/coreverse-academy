// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L12 — Physics: Momentum and Conservation Laws
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS2 (Motion and Stability: Forces and Interactions)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l12-v1";

const SCIENCE_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-12`,
      title: `Physics: Momentum and Conservation Laws`,
      duration: 35,
      xpReward: 75,
      badge: `momentum-keeper`,
      badgeName: `Momentum Keeper`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, you've learned to describe motion and to explain what changes it with Newton's laws. Now we meet one of physics' most powerful ideas: conservation. Momentum — mass times velocity — is conserved in every collision and explosion in the universe. Understanding why, and how to use that fact, opens up problems that Newton's laws alone can't easily solve. Conservation laws turn out to be among the deepest truths in all of physics.`,
          headline: `Physics: Momentum and Conservation Laws`,
          subtitle: `What stays perfectly constant when objects collide, and why nothing in the universe is ever truly lost. A Case Study.`,
          visual: `/voyager-assets/science/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Momentum?`,
          paragraphs: [
            `You've felt it without naming it. A slow-rolling bowling ball is hard to stop; a fast-pitched baseball stings your hand. Both carry something physicists call momentum: a measure of how much motion an object has, and how hard it is to stop. Momentum equals an object's mass times its velocity, so both how heavy it is and how fast it moves matter.`,
            `This means momentum can be large in two ways: a huge mass moving slowly (a drifting cargo ship) or a small mass moving fast (a speeding bullet) can carry equal momentum. Double the mass or double the velocity, and you double the momentum. And because velocity has direction, momentum is a vector too, a ball moving left has the opposite momentum of an identical ball moving right.`,
            `Momentum captures something Newton's laws hinted at: the harder something is to stop, the more "oomph" of motion it carries. A loaded truck at 20 mph has enormous momentum and needs a huge force, over a long time, to halt. The same truck empty has less. Momentum, mass times velocity, is the precise measure of this quantity of motion, and it obeys a remarkable law.`,
          ],
          image: `/voyager-assets/science/l12-s1-momentum.webp`,
          imageCaption: `You've felt it without naming it. A slow bowling ball is hard to stop; a fast baseball stings your hand. Both carry MOMENTUM: a measure of how much motion an object has, and how hard it is to stop. Momentum equals MASS times VELOCITY, so both how heavy and how fast it is matter. It can be large two ways: a huge mass moving slowly (a drifting ship) or a small mass moving fast (a bullet) can carry equal momentum. Double the mass or the velocity, double the momentum. Since velocity has direction, momentum is a VECTOR, a ball moving left has opposite momentum to one moving right. Momentum captures Newton's hint: the harder something is to stop, the more oomph of motion it carries. A loaded truck at twenty miles per hour has enormous momentum, and it obeys a remarkable law.`,
          vocab: [
            { word: `momentum`,
              definition: `A measure of an object's quantity of motion, equal to its mass times its velocity. The more momentum, the harder it is to stop.`,
              audioPrompt: `Momentum, {name}, is a measure of how much motion an object carries, equal to its mass times its velocity. A heavy thing moving fast has lots of momentum and is very hard to stop, while a light, slow thing has little. It captures the real oomph of motion.` },
            { word: `mass times velocity`,
              definition: `The formula for momentum. Both a large mass and a high velocity increase momentum, so a slow heavy object can match a fast light one.`,
              audioPrompt: `Mass times velocity, {name}, is exactly how we calculate momentum. Because both factors count, a slow but heavy cargo ship and a fast but tiny bullet can carry the very same momentum. Double either the mass or the speed, and the momentum doubles too.` },
            { word: `momentum as a vector`,
              definition: `Momentum has direction as well as size, because velocity does. Two objects moving opposite ways carry momentum that can partly or fully cancel.`,
              audioPrompt: `Momentum is a vector, {name}, meaning it has a direction, not just a size, because velocity does. So a ball moving left carries momentum opposite to an identical ball moving right, and when they meet, those opposite momenta can cancel out partly or completely.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Law Of Conservation`,
          paragraphs: [
            `Here is one of the deepest truths in physics: in any closed system, with no outside forces, the total momentum never changes. Add up the momentum of everything before an event, and it equals the total after. Momentum is conserved: it transfers between objects, but the grand total is never created or destroyed.`,
            `This follows directly from Newton's third law. When two objects interact, they push on each other with equal and opposite forces. So whatever momentum one object gains, the other loses an exactly equal amount in the opposite direction. The gains and losses always cancel, leaving the total untouched. Newton's action-reaction pairs are why momentum is conserved.`,
            `The power of this is enormous. To predict the messy outcome of a collision, you don't need to track every force at every instant. You just set the total momentum before equal to the total after, and solve. This single principle predicts the result of crashes, explosions, and recoils with perfect reliability. Conservation laws are physics' shortcut to truth: some things simply cannot change.`,
          ],
          image: `/voyager-assets/science/l12-s2-conservation.webp`,
          imageCaption: `One of the deepest truths in physics: in any CLOSED SYSTEM, with no outside forces, the TOTAL MOMENTUM never changes. Add up the momentum of everything before an event, and it exactly equals the total after. Momentum is CONSERVED: it transfers between objects, but the grand total is never created or destroyed. This follows from Newton's THIRD LAW: when two objects interact, they push with equal, opposite forces, so whatever momentum one gains, the other loses equally in the opposite direction. The gains and losses cancel, leaving the total untouched. The power is enormous: to predict a messy collision, you needn't track every force, just set total momentum before equal to total after, and solve. This predicts crashes, explosions, and recoils perfectly. Some things simply cannot change.`,
          vocab: [
            { word: `conservation of momentum`,
              definition: `In a closed system with no outside forces, total momentum stays exactly constant. The total before any interaction equals the total after.`,
              audioPrompt: `Conservation of momentum, {name}, means that in a closed system, with nothing pushing in from outside, the total momentum never changes. Whatever the objects had before they collided or pushed apart, they have exactly that same total afterward. It's a rock-solid rule.` },
            { word: `closed system`,
              definition: `A group of objects with no outside forces acting on it. Conservation laws apply exactly within a closed system.`,
              audioPrompt: `A closed system, {name}, is a set of objects that nothing outside is pushing or pulling on, so the only forces are between the objects themselves. Conservation laws, like conservation of momentum, hold exactly within a closed system, which makes them powerful prediction tools.` },
            { word: `conservation law`,
              definition: `A principle stating that a certain quantity (momentum, energy, charge) stays constant over time. Among the deepest truths in all of physics.`,
              audioPrompt: `A conservation law, {name}, says that some quantity, like momentum or energy, can never be created or destroyed, only moved around. The total always stays the same. These laws are among the deepest and most powerful truths physicists have ever discovered about the universe.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Collisions And Recoil`,
          paragraphs: [
            `Conservation of momentum shines brightest in collisions and recoil. Fire a cannon: before firing, the total momentum is zero. After, the cannonball flies forward with some momentum, so the cannon must roll backward with exactly equal momentum the other way, the two cancel, keeping the total at zero. That backward lurch is recoil, conservation in action.`,
            `Collisions come in two flavors. In an elastic collision, objects bounce apart cleanly, like billiard balls. In an inelastic collision, they stick or crumple together, like two cars in a crash. In both, momentum is always conserved. (Energy behaves differently, some is lost to heat and damage in inelastic crashes, but momentum's total survives untouched every time.)`,
            `This lets us predict outcomes precisely. A fast ball striking a still one transfers momentum, the famous Newton's cradle, where one ball swings in and exactly one swings out. A small car hitting a huge truck: the truck's mass means it barely changes speed while the car rebounds. In every case, the books balance: total momentum after equals total momentum before, always.`,
          ],
          image: `/voyager-assets/science/l12-s3-collisions.webp`,
          imageCaption: `Conservation of momentum shines brightest in COLLISIONS and RECOIL. Fire a cannon: before, total momentum is zero (nothing moves). After, the cannonball flies forward with momentum, so the cannon rolls BACKWARD with exactly equal momentum the other way, the two cancel, keeping the total zero. That backward lurch is RECOIL, conservation in action. Collisions come in two flavors: ELASTIC, where objects bounce apart cleanly (billiard balls), and INELASTIC, where they stick or crumple (two cars crashing). In both, momentum is always conserved (though energy can be lost to heat and damage). This predicts outcomes precisely: a fast ball striking a still one transfers momentum (Newton's cradle); a small car hitting a huge truck barely moves the truck while the car rebounds. The books always balance.`,
          vocab: [
            { word: `recoil`,
              definition: `The backward motion an object gains when it propels something forward, like a cannon rolling back as it fires. A direct result of momentum conservation.`,
              audioPrompt: `Recoil, {name}, is the backward kick an object gets when it shoves something forward. A cannon rolls backward as the ball flies out; a gun kicks into your shoulder. The forward and backward momenta are equal and opposite, so the total stays the same, exactly as conservation demands.` },
            { word: `elastic collision`,
              definition: `A collision where objects bounce apart without sticking, like billiard balls. Both momentum and kinetic energy are conserved.`,
              audioPrompt: `An elastic collision, {name}, is one where objects bounce cleanly off each other without sticking together, like billiard balls clacking apart. In these, both momentum and the energy of motion are conserved, so almost nothing is lost as the objects rebound.` },
            { word: `inelastic collision`,
              definition: `A collision where objects stick together or crumple, like a car crash. Momentum is still conserved, but some energy is lost to heat and deformation.`,
              audioPrompt: `An inelastic collision, {name}, is one where objects crumple or stick together, like two cars crashing into a tangled heap. Momentum is still perfectly conserved, but some energy of motion turns into heat and damage, so the objects don't bounce cleanly apart.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Impulse: Force Over Time`,
          paragraphs: [
            `How do you actually change an object's momentum? You apply a force, over a stretch of time. The product, force multiplied by the time it acts, is called impulse, and it equals the change in momentum. This means there are two ways to produce the same change in motion: a large force for a short time, or a small force for a longer time.`,
            `This single idea explains an astonishing range of safety devices. An airbag, a crumple zone, a catcher's glove, a gymnast bending their knees on landing, all do the same thing: they extend the time over which your momentum changes. The change in momentum is fixed (you must stop), but stretching the time means a much smaller, gentler force, which is what saves you from injury.`,
            `It's the difference between landing on concrete and on a trampoline. Both bring you to a stop, the same change in momentum, but the trampoline stretches the stopping time, slashing the force. This is why you bend your knees when you jump down, why packaging is padded, why boxers roll with a punch. Impulse, force times time, bridges Newton's forces and the conservation of momentum.`,
          ],
          image: `/voyager-assets/science/l12-s4-impulse.webp`,
          imageCaption: `How do you CHANGE an object's momentum? Apply a force over a stretch of TIME. Force multiplied by the time it acts is called IMPULSE, and it equals the change in momentum. So there are two ways to make the same change: a large force for a short time, or a small force for a longer time. This explains a huge range of safety devices: AIRBAGS, crumple zones, a catcher's glove, a gymnast bending their knees, all extend the TIME over which your momentum changes. The change is fixed (you must stop), but stretching the time means a much smaller, gentler FORCE, which saves you from injury. It's concrete versus a trampoline: both stop you, the same momentum change, but the trampoline stretches the time, slashing the force. Impulse, force times time, bridges Newton's forces and momentum.`,
          vocab: [
            { word: `impulse`,
              definition: `Force multiplied by the time over which it acts. Impulse equals the change in an object's momentum.`,
              audioPrompt: `Impulse, {name}, is force multiplied by the length of time that force acts, and it equals exactly the change in an object's momentum. It tells you that to change motion, both how hard you push and how long you push for matter, working together.` },
            { word: `force-time tradeoff`,
              definition: `The same change in momentum can come from a big force over a short time or a small force over a long time. Extending the time reduces the force.`,
              audioPrompt: `The force-time tradeoff, {name}, is the heart of impulse: the same change in momentum can be produced by a huge force acting briefly, or a gentle force acting longer. Stretching out the stopping time is exactly how you reduce the force, and how safety devices protect you.` },
            { word: `cushioning`,
              definition: `Extending the stopping time of an impact to reduce the force, the principle behind airbags, crumple zones, padding, and bending your knees on landing.`,
              audioPrompt: `Cushioning, {name}, means stretching out the time of an impact so the force stays small. An airbag, a soft landing mat, padded packaging, bent knees, all work this way. The momentum change is unavoidable, but spreading it over more time makes the force gentle enough to be safe.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Momentum is mass times velocity, a vector measuring an object's quantity of motion, and the harder something is to stop, the more momentum it carries. The great law: in a closed system with no outside forces, total momentum is conserved, the total before any event exactly equals the total after, a direct consequence of Newton's third law.`,
            `Momentum is transferred, never destroyed: a cannon recoils because the ball's forward momentum is balanced by the cannon's backward momentum. Collisions can be elastic (bouncing) or inelastic (sticking), but momentum is conserved in both. And impulse, force times time, is how momentum changes, which is why airbags and bent knees stretch the stopping time to shrink the force.`,
            `Now the case-study screen makes you the physicist with five puzzles: why a cannon kicks backward when fired, what happens when a small car crashes into a massive truck, why an airbag saves your life, how a rocket speeds up by throwing fuel backward in space, and how a skater pushing off reveals conservation. Reason with momentum and impulse. Onward.`,
          ],
          image: `/voyager-assets/science/l12-s5-before.webp`,
          imageCaption: `Threads together. MOMENTUM is mass times velocity, a vector measuring quantity of motion; the harder something is to stop, the more it carries. The great law: in a closed system with no outside forces, total momentum is CONSERVED, the total before equals the total after, a direct result of Newton's third law. Momentum transfers, never vanishes: a cannon RECOILS because the ball's forward momentum balances the cannon's backward momentum. Collisions are ELASTIC (bouncing) or INELASTIC (sticking), but momentum is conserved in both. IMPULSE, force times time, is how momentum changes, which is why airbags and bent knees stretch the time to shrink the force. The case-study screen gives five puzzles: the cannon's kick, the car-versus-truck crash, the airbag, the rocket in space, and the skater pushing off a wall.`,
          vocab: [
            { word: `Newton's cradle`,
              definition: `The desk toy of swinging steel balls. When one ball strikes the row, exactly one swings out the far side, a visible demonstration of momentum conservation.`,
              audioPrompt: `Newton's cradle, {name}, is that desk toy with a row of hanging steel balls. Lift one and let it strike the row, and exactly one ball swings out the other end, no more, no less. It's conservation of momentum (and energy) made visible, balancing perfectly every swing.` },
            { word: `rocket propulsion`,
              definition: `A rocket gains forward momentum by expelling fuel backward, so the total momentum stays conserved, a pure application of the conservation law.`,
              audioPrompt: `Rocket propulsion, {name}, is conservation of momentum in action. The rocket throws hot fuel backward, gaining exactly equal forward momentum to keep the total constant. It works even in empty space, with nothing to push against, because the fuel itself carries the balancing momentum away.` },
            { word: `system before and after`,
              definition: `The core problem-solving move: set the total momentum of all objects before an interaction equal to the total after, then solve for the unknown.`,
              audioPrompt: `Before and after, {name}, is the physicist's master trick. Instead of tracking every messy force during a collision, you just add up the total momentum before the event and set it equal to the total after, then solve. Conservation guarantees those totals match exactly.` },
          ],
        },

        {
          id: `l12-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Momentum`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about momentum, collisions, and conservation. For each, reason with momentum (mass times velocity), the conservation law, and impulse (force times time), and remember the master move: total before equals total after.`,
          cases: [
            {
              id: `c1`,
              title: `Why the cannon kicks back`,
              type: `Conservation / recoil`,
              description: `A cannon sits perfectly still, then fires a heavy cannonball forward at high speed. The instant it fires, the entire massive cannon lurches backward, recoiling hard. Nothing pushed the cannon from behind. Using conservation of momentum, explain exactly why the cannon must roll backward.`,
              questions: [
                `Before firing, what is the total momentum of the cannon and ball?`,
                `After firing, the ball flies forward; what must the cannon do, and why?`,
                `Why is the cannon's backward speed much smaller than the ball's forward speed?`,
              ],
              evaluation: `This classic puzzle is one of the clearest demonstrations of conservation of momentum, and reasoning through it precisely reveals the law's power. Start with the key question: before firing, what is the total momentum of the system (cannon plus cannonball)? Everything is at rest, nothing is moving, so the total momentum is exactly zero. Now, conservation of momentum tells us that in this closed system (with no significant outside horizontal forces), the total momentum must stay zero, before, during, and after the firing. After the cannon fires, the cannonball shoots forward with a large momentum (its mass times its high velocity). But the total must still add up to zero! The only way that can happen is if the cannon itself gains an exactly equal momentum in the opposite direction, backward. The cannonball's forward momentum and the cannon's backward momentum are equal in size and opposite in direction, so they perfectly cancel, keeping the total at zero, exactly as conservation requires. That backward lurch is recoil, and nothing "pushed the cannon from behind", the cannon recoils purely because momentum must be conserved. This is also a direct consequence of Newton's third law: the cannon pushes the ball forward (action), and the ball pushes the cannon backward (reaction) with equal force, which is the same thing as saying their momenta are equal and opposite. Now the final, subtle part: why is the cannon's backward speed so much smaller than the ball's forward speed, even though their momenta are equal? Because momentum is mass times velocity, and the cannon has vastly more mass than the ball. For the momenta to be equal, the much heavier cannon must move much more slowly: a small velocity times a huge mass can equal a large velocity times a tiny mass. So the lightweight ball rockets forward fast, while the massive cannon eases backward slowly, but their momenta match exactly. This same principle explains why a rifle kicks into your shoulder when fired, why a gun recoils, and why the kick of a small handgun is sharper than you'd expect from such a tiny bullet, the bullet's high speed times its small mass gives momentum that the gun must balance. Conservation of momentum doesn't just describe the recoil; it predicts it exactly, turning a startling lurch into an inevitable consequence of one of physics' deepest laws.`,
            },
            {
              id: `c2`,
              title: `The car and the truck`,
              type: `Inelastic collision`,
              description: `A small car traveling fast collides head-on with a huge, heavily loaded truck moving slowly toward it. After the crash, the tangled wreck moves, but the truck's motion barely changes while the car is violently thrown backward and crushed. Using momentum, explain why the massive truck dominates the collision.`,
              questions: [
                `How does the total momentum before the crash relate to after?`,
                `Why does the truck's velocity barely change while the car's changes drastically?`,
                `Is momentum conserved even though the crash destroys both vehicles?`,
              ],
              evaluation: `This sobering, real-world scenario shows conservation of momentum at work even in a violent, destructive event, and it explains a fact with serious safety implications. First, the foundational principle: momentum is conserved in this collision. The total momentum of the system (car plus truck) just before the crash exactly equals the total momentum just after, because the forces of the crash are internal to the system (the car and truck pushing on each other), and by Newton's third law those forces are equal and opposite. So whatever momentum the car loses, the truck gains, and vice versa, the total is preserved. This is true even though the crash is catastrophically destructive, crumpling metal, shattering glass, generating heat and noise. Here's the crucial distinction: momentum is always conserved in a collision, but kinetic energy (the energy of motion) is not, much of it is converted into the heat, sound, and deformation of crumpling metal. This is an inelastic collision (the vehicles crumple and may tangle together rather than bouncing cleanly apart), and inelastic collisions conserve momentum while losing energy of motion. Now, why does the truck's velocity barely change while the car's changes drastically? It comes down to mass, through momentum (mass times velocity). The truck has enormous mass. For the total momentum to be conserved, any change in the truck's momentum must be matched by an equal and opposite change in the car's momentum. But because the truck's mass is so large, even a big change in its momentum corresponds to only a tiny change in its velocity (a large mass needs only a small velocity change to account for a large momentum change). The car, with its small mass, must undergo a huge velocity change to produce the same-sized momentum change, so it gets violently thrown backward, while the truck plows on, barely slowed. This is exactly why occupants of smaller, lighter vehicles face greater danger in collisions with massive ones: the same conserved momentum, redistributed, forces the light vehicle (and its passengers) through a far more violent change in velocity. It also connects to impulse and force: the car experiences a far greater change in velocity in roughly the same brief crash time, meaning a far greater force, and far greater danger. Conservation of momentum, combined with the physics of mass, explains the brutal asymmetry of mismatched collisions: not because the truck "wins" through aggression, but because its sheer mass means momentum conservation dictates it barely changes velocity while the lighter car bears the violent brunt.`,
            },
            {
              id: `c3`,
              title: `Why the airbag saves you`,
              type: `Impulse`,
              description: `In a sudden crash, your body must stop fast, that change in momentum is unavoidable. Hitting a hard dashboard injures you badly, but hitting an inflated airbag does not, even though you stop in both cases. The change in your momentum is the same either way. So how does the airbag protect you?`,
              questions: [
                `If the change in momentum is the same, what is different?`,
                `How does impulse (force times time) explain the airbag's protection?`,
                `What other safety devices use this exact same principle?`,
              ],
              evaluation: `This is one of the most important and life-saving applications of physics, and it rests entirely on the concept of impulse, the relationship between force, time, and change in momentum. The setup correctly identifies the key fact: in a crash, your body must come to a stop, and that change in momentum (from moving fast to stopped) is fixed and unavoidable, the same whether you hit a hard dashboard or a soft airbag. So if the change in momentum is identical, what's different, and why does one injure you while the other doesn't? The answer is impulse: impulse equals force multiplied by the time over which it acts, and impulse equals the change in momentum. Since the change in momentum is fixed, the product of force and time is fixed. This means force and time trade off against each other: if the stopping time is very short, the force must be very large; if the stopping time is longer, the force can be much smaller, to produce the same change in momentum. When you hit a hard dashboard, you stop in a tiny fraction of a second, an extremely short stopping time, so to achieve the required change in momentum, the force on your body must be enormous, large enough to break bones and cause severe injury. When you hit an inflating, yielding airbag, it extends your stopping time, you decelerate over a longer interval as the bag compresses and slows you gradually. Because the same change in momentum is now spread over a longer time, the force on your body is dramatically smaller, gentle enough to leave you unharmed. The airbag doesn't reduce how much your momentum must change; it can't, you still have to stop. Instead, it stretches out the time of the stop, and by the impulse relationship, that slashes the force. This exact principle is everywhere in safety engineering: crumple zones in cars (the front of the car deliberately crushes, extending the stopping time of the whole vehicle), the padded dashboard and seatbelts (which stretch and give), a catcher pulling their glove back as they catch a fast ball, a gymnast or parachutist bending their knees on landing, the padding in helmets, packaging for fragile items, even a high jumper landing on a thick mat instead of the ground. In every case, the goal is identical: extend the time of the impact to reduce the peak force. It's also why you instinctively bend your knees when you jump down from a height, you're lengthening your stopping time to protect your joints. The deep, beautiful insight is that you can't escape the required change in momentum, but you have complete control over the time, and by controlling the time, you control the force. The airbag is impulse physics deployed to save lives.`,
            },
            {
              id: `c4`,
              title: `The rocket revisited`,
              type: `Conservation / propulsion`,
              description: `Last lesson, you learned a rocket flies in empty space because of Newton's third law. Now look at it through momentum. A rocket starts at rest, then steadily throws hot fuel out the back, and gains forward speed, all in the vacuum of space. Using conservation of momentum, explain exactly how the rocket speeds up.`,
              questions: [
                `Before the engine fires, what is the rocket's total momentum?`,
                `As fuel is thrown backward, how does the rocket gain forward momentum?`,
                `Why does conservation of momentum allow a rocket to accelerate in empty space?`,
              ],
              evaluation: `This case revisits the rocket from the previous lesson, now seen through the deeper lens of conservation of momentum, revealing that Newton's third law and momentum conservation are really two views of the same truth. Start at the beginning: before the engine fires, the rocket (with its fuel) sits at rest, so the total momentum of the system is zero. Now, conservation of momentum says that in this closed system, with no outside forces (and space provides none, no air, no ground), the total momentum must remain zero, no matter what the rocket does internally. Here's the elegant part: when the rocket fires its engine, it expels hot exhaust gas backward at high speed. That exhaust gas now carries momentum, pointing backward (its mass times its backward velocity). But the total momentum of the whole system must still be zero! So the rocket itself must gain an exactly equal momentum in the opposite direction, forward. The backward momentum of the expelled gas and the forward momentum of the rocket are equal and opposite, so they cancel, keeping the grand total at zero, precisely as conservation demands. As the rocket continuously throws fuel backward, it continuously gains forward momentum, and so it accelerates, building up speed bit by bit. This is exactly why a rocket can accelerate in the vacuum of empty space, where there is nothing external to push against: it doesn't need anything to push against. It carries its own fuel, and by hurling that fuel backward, it gains forward momentum, with the books always balancing to the original total (zero, in this case). The fuel takes the backward momentum away with it, and the rocket keeps the forward momentum. This is the same phenomenon as the cannon's recoil from the first case, just continuous rather than a single burst: the rocket is essentially "recoiling" continuously as it throws mass backward. And it's the very same truth as Newton's third law from last lesson: the rocket pushes the gas backward (action), the gas pushes the rocket forward (reaction), and "equal and opposite forces" is just another way of saying "equal and opposite changes in momentum." The two laws are deeply connected, conservation of momentum is, in fact, a direct consequence of Newton's third law. Seeing the rocket through momentum reveals why physicists treasure conservation laws: you don't need to know the details of the combustion, the exact forces, or the engine design. You only need to know that total momentum is conserved, and that single principle tells you the rocket must speed up forward by exactly as much momentum as the fuel carries backward. It's a profound, reliable shortcut to truth, and it's how every rocket that has ever reached space actually works.`,
            },
            {
              id: `c5`,
              title: `The skater pushes off`,
              type: `Conservation / equal and opposite`,
              description: `Two ice skaters of different sizes stand still, face to face on frictionless ice. One pushes hard against the other, and they glide apart in opposite directions. The lighter skater zooms away fast; the heavier one drifts slowly. No one pushed them from outside. Using momentum, explain what happens and why their speeds differ.`,
              questions: [
                `Before the push, what is the skaters' total momentum?`,
                `After the push, how do their momenta compare, and why?`,
                `Why does the lighter skater move away faster than the heavier one?`,
              ],
              evaluation: `This elegant scenario, two skaters pushing apart on frictionless ice, is conservation of momentum in one of its purest, most visible forms, and it ties together everything in this lesson. Begin with the foundational question: before the push, what is the total momentum of the two-skater system? Both skaters are standing still, so nothing is moving, and the total momentum is exactly zero. Now, the ice is frictionless and there are no outside horizontal forces, so this is a closed system, and conservation of momentum demands that the total momentum stay zero, before and after the push. When one skater pushes against the other, by Newton's third law they push on each other with equal and opposite forces, so they glide apart in opposite directions. After the push, the lighter skater moves one way with some momentum, and the heavier skater moves the opposite way. For the total to remain zero, their momenta must be equal in size and opposite in direction, so they cancel perfectly. Whatever forward momentum one skater gains, the other gains exactly that much in the opposite direction. This is why they always move apart in opposite directions, and why neither can push off without the other moving too, you cannot create momentum from nothing; you can only split zero into equal and opposite halves. Now the beautiful final point: why does the lighter skater zoom away faster while the heavier one merely drifts? Because momentum is mass times velocity, and their momenta must be equal in size. The lighter skater has less mass, so to carry the same momentum, they must move at a higher velocity. The heavier skater has more mass, so the same momentum gives them only a small velocity. Mass and velocity trade off to keep the momenta equal: small mass means high speed, large mass means low speed, exactly balanced. This is the identical principle behind the cannon's recoil (the light ball flies fast, the heavy cannon eases back slowly) and the rocket (the light fuel shoots out fast, the heavier rocket gains speed more gradually). It also connects to why, when you step off a small boat or a skateboard onto a dock, the boat or skateboard shoots backward, you pushed it, and it pushed you, splitting the momentum equally and oppositely. The skaters demonstrate the law with perfect clarity: starting from zero total momentum, an internal push can only ever produce equal and opposite momenta, and the lighter object always ends up moving faster. Conservation of momentum governs not just collisions, but every push, separation, and recoil in the universe, from skaters on ice to galaxies drifting apart, the total quantity of motion, properly accounting for direction, never changes.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what is momentum, what does conservation of momentum say, and why does it follow from Newton's third law? Explain how the cannon, the rocket, and the skaters are really the same physics. Which case made conservation feel most real? In 5-6 sentences.`,
          reflectionPrompt: `Conservation laws say some quantities in the universe can never be created or destroyed, only moved around, the total stays forever the same. How does it feel to know that beneath all the chaos of collisions and explosions, there are quantities the universe guards perfectly, never losing or gaining a single bit?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is momentum?`,
              options: [
                `The total distance an object covers during its whole trip.`,
                `An object's mass multiplied by its velocity, its quantity of motion.`,
                `The fixed force of gravity acting on any moving object.`,
                `The highest speed an object is physically able to reach.`,
              ],
              correctIndex: 1,
              explanation: `Momentum is mass times velocity, a vector measuring an object's quantity of motion and how hard it is to stop. The distractors describe distance, gravity, or top speed instead.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the law of conservation of momentum state?`,
              options: [
                `Momentum always increases steadily over time in any system.`,
                `Momentum can be created by a strong enough internal push.`,
                `In a closed system with no outside forces, total momentum stays constant.`,
                `Heavier objects always end up with all of the momentum.`,
              ],
              correctIndex: 2,
              explanation: `In a closed system with no outside forces, total momentum is conserved, the total before equals the total after. The distractors claim momentum grows, can be created internally, or all flows to the heavier object.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `A cannon at rest fires a ball forward. Why does the cannon recoil backward?`,
              options: [
                `An outside force shoves the cannon backward as it fires.`,
                `The ball's forward momentum must be balanced by equal backward momentum.`,
                `Cannons are simply built to roll backward whenever they fire.`,
                `The explosion creates brand-new momentum out of nothing.`,
              ],
              correctIndex: 1,
              explanation: `Total momentum starts at zero and must stay zero, so the ball's forward momentum is matched by the cannon's equal backward momentum. The distractors invent an outside force, a design quirk, or created momentum.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `When a fired cannon recoils, why is its backward speed much smaller than the ball's forward speed?`,
              options: [
                `Because the cannon's much larger mass means a smaller velocity for equal momentum.`,
                `Because the cannonball is actually heavier than the entire cannon itself.`,
                `Because momentum is not really conserved at all in firing a cannon.`,
                `Because the cannon loses most of its momentum into the ground.`,
              ],
              correctIndex: 0,
              explanation: `Their momenta are equal, and momentum is mass times velocity, so the far more massive cannon moves at a much smaller velocity. The distractors misstate the masses, deny conservation, or invent lost momentum.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `In a car crash where the vehicles crumple together (an inelastic collision), what happens to momentum and energy?`,
              options: [
                `Both momentum and energy of motion completely vanish in the crash.`,
                `Momentum is conserved, but some energy of motion is lost to heat and damage.`,
                `Energy is conserved, but momentum is completely destroyed.`,
                `Both momentum and energy of motion increase during the crash.`,
              ],
              correctIndex: 1,
              explanation: `Momentum is always conserved in a collision, but in an inelastic crash some kinetic energy is converted to heat, sound, and deformation. The distractors destroy momentum, swap the two, or claim both increase.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is impulse, and what does it equal?`,
              options: [
                `An object's mass alone, equal to its total weight.`,
                `The distance traveled, equal to the object's displacement.`,
                `The top speed reached, equal to the object's velocity.`,
                `Force multiplied by the time it acts, equal to the change in momentum.`,
              ],
              correctIndex: 3,
              explanation: `Impulse is force times the time over which it acts, and it equals the change in an object's momentum. The distractors confuse it with mass, distance, or speed.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How does an airbag protect you in a crash, given that your change in momentum is the same either way?`,
              options: [
                `It extends your stopping time, which greatly reduces the force on your body.`,
                `It reduces how much your momentum has to change during the crash.`,
                `It increases the force on your body to stop you much faster.`,
                `It cancels gravity so that your body simply floats safely in place.`,
              ],
              correctIndex: 0,
              explanation: `The change in momentum is fixed, so by impulse (force times time), stretching the stopping time slashes the force. The distractors claim it reduces the momentum change, increases force, or cancels gravity.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A small car collides head-on with a massive truck. Why does the truck's velocity barely change?`,
              options: [
                `Because momentum is never conserved in a head-on collision.`,
                `Because the truck pushes on the car but the car never pushes back.`,
                `Because the truck's huge mass means a large momentum change is only a tiny velocity change.`,
                `Because the lighter car actually carries far more momentum than the truck.`,
              ],
              correctIndex: 2,
              explanation: `Momentum is conserved, and because momentum is mass times velocity, the truck's enormous mass means even a large momentum change barely alters its velocity, while the light car's velocity changes drastically. The distractors deny conservation, violate the third law, or misstate momentum.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A small bullet flying very fast and a heavy truck rolling very slowly can have the exact same momentum.`,
              correctAnswer: true,
              explanation: `True, and this is one of the most important things to understand about momentum, because it reveals why momentum, not just mass or speed alone, is the right measure of an object's quantity of motion. Momentum is defined as mass times velocity, which means it depends on BOTH how much mass an object has AND how fast it's moving. Crucially, these two factors trade off against each other: a very large momentum can come from a large mass moving slowly, OR from a small mass moving extremely fast, OR any combination in between. So a tiny bullet, despite having very little mass, can have a large momentum if its velocity is high enough, because its enormous speed compensates for its small mass. Meanwhile, a massive truck rolling along slowly can have that same large momentum, because its huge mass compensates for its low speed. If you multiply the bullet's small mass by its very high velocity, and you multiply the truck's huge mass by its very low velocity, you can absolutely get the same number, the same momentum. This is not just a mathematical curiosity; it has real, tangible consequences. It's why a fast-moving bullet, despite being tiny and light, can do tremendous damage, it carries significant momentum and the change in that momentum on impact, over a very short time, produces an enormous force. It's also why a slowly drifting cargo ship or a slowly rolling loaded truck is so dangerous and so hard to stop: even at low speed, its colossal mass gives it enormous momentum, requiring a huge force over a long time to halt. This trade-off is exactly why physicists use momentum (mass times velocity) rather than mass or speed by itself to capture how hard something is to stop and how much "punch" its motion delivers. Two objects that look completely different, a darting insect-sized bullet and a lumbering truck, can be equivalent in this one deep physical quantity. So the statement is true: through the trade-off between mass and velocity, a fast light object and a slow heavy object can carry identical momentum.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "A rocket can't possibly work in outer space. There's no air or ground out there for the exhaust to push against, so there's nothing to push the rocket forward. Rockets must secretly need the atmosphere." Using the lesson, what's the best response?`,
              options: [
                `The student is right; rockets genuinely cannot function in empty space.`,
                `Rockets work in space only because tiny bits of air follow them up from Earth.`,
                `The rocket needs no air or ground: it expels fuel backward, and to keep the system's total momentum constant, the rocket must gain exactly equal momentum forward, accelerating in pure vacuum; the fuel carries the backward momentum away, so conservation of momentum (and Newton's third law) propels it with nothing external to push against.`,
                `Rockets push against their own light beams, which only works far from any planet.`,
              ],
              correctIndex: 2,
              explanation: `The student has the common misconception. A rocket needs nothing external: by conservation of momentum, expelling fuel backward forces the rocket to gain equal forward momentum, keeping the system's total constant. This works perfectly in vacuum, the fuel itself carries the balancing momentum. The distractors endorse the myth, invent trailing air, or invent light-beam propulsion.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-guarded`, category: `What the universe guards`, prompt: `Conservation laws say some quantities can never be created or destroyed, only moved around, the total stays forever the same. How does it feel to know that beneath all the chaos of collisions, there are quantities the universe guards perfectly?` },
            { id: `reflect-time`, category: `Control the time, control the force`, prompt: `Impulse reveals you can't escape a needed change, but you can choose how fast it happens, and that choice changes everything. Where in your life might stretching out a hard change, rather than forcing it all at once, make it gentler?` },
            { id: `reflect-balance`, category: `Equal and opposite`, prompt: `From cannons to skaters to rockets, every push splits into equal and opposite halves, you gain only by giving something up the other way. Does that balance remind you of anything in how your own choices work?` },
            { id: `reflect-heritage`, category: `Teaching conservation`, prompt: `Caro, you're building science for conscious families. How would you help a child feel conservation of momentum as something real, using marbles, a skateboard, or a balloon rocket, so they witness the books balancing with their own eyes?` },
            { id: `reflect-shortcut`, category: `Physics' shortcut to truth`, prompt: `Conservation laws let physicists predict an outcome without tracking every messy force, some things simply cannot change. What does it stir in you that the universe has rules so reliable they become shortcuts to truth?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `It seems impossible that a rocket could move in empty space with nothing to push against, yet conservation of momentum makes it inevitable. Where might something you've dismissed as "obviously impossible" actually follow from a deeper rule you haven't seen yet?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Momentum Investigators`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hands-on exploration of momentum and the conservation laws that secretly govern every collision and push. Start with momentum itself: roll balls of very different mass (a marble, a tennis ball, a heavy ball) at the same speed into a row of light targets and see how the heavier ones knock things further, more momentum. Then roll the same ball at different speeds and feel how much harder the fast one is to stop, momentum is mass times velocity, and both matter. Explore conservation with collisions: line up coins or marbles in a row and flick one into the line (like Newton's cradle), watching how exactly one shoots out the far end as momentum transfers through. Roll two balls of equal mass toward each other at equal speed and watch them rebound, the momenta were equal and opposite, summing to zero. Try recoil directly: sit in a wheeled chair (or on a skateboard) holding a heavy ball, then throw the ball forward, you roll backward, because you gave the ball forward momentum and gained equal backward momentum. Two people on wheeled chairs pushing apart will glide in opposite directions, the lighter person faster, just like the skaters. Blow up a balloon and release it: it flies because it expels air one way and gains momentum the other (a rocket!). For impulse, the most useful idea, drop an egg (over a sink!) onto a hard plate versus onto a thick pillow: the pillow extends the stopping time, reducing the force, and the egg survives. Catch a thrown ball while deliberately pulling your hands back versus holding them stiff, and feel how extending the time softens the impact. Discuss every car's airbags, crumple zones, and seatbelts as impulse devices, and why you bend your knees when you jump down. The goal is to see that beneath every crash, push, and bounce, the total momentum is conserved, perfectly, every time, and that controlling the time of an impact controls the force, the physics that saves lives.`,
          },
          projectOption: {
            title: `The Conservation Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design experiments that test and demonstrate conservation of momentum and the impulse principle, becoming a physicist who proves the laws rather than just reading them. Week 1, test conservation of momentum: set up collisions you can measure, marbles or balls of known mass rolling into each other on a smooth track or floor, or carts if you have them. Measure (or estimate from video) the masses and speeds before and after collisions, and check whether the total momentum (mass times velocity, accounting for direction) is the same before and after, it should be, within measurement error. Try both elastic collisions (balls bouncing apart) and inelastic ones (objects sticking together, for example with a bit of tape or clay), and confirm momentum is conserved in both even though the bouncing differs. Explore recoil: measure how a "cannon" (a spring-loaded launcher, or you throwing a ball while on a skateboard) recoils, and check that the momenta balance. Week 2, investigate impulse and build something: design a test of the force-time tradeoff, drop eggs or other fragile objects with different cushioning (pillows, crumpled paper, bubble wrap, a "crumple zone") and relate the survival of the object to how much the cushioning extended the stopping time. Or build an egg-drop protection device and explain its design entirely through impulse (how it stretches the stopping time to reduce force). Connect everything to the real world: airbags, crumple zones, helmets, packaging, sports. Produce your final piece, a lab-report-style writeup, a slide deck, or a video, that presents your collision data and shows momentum was conserved, explains your impulse experiment and the force-time tradeoff, and reflects on how conservation laws and impulse govern collisions, safety, and rockets alike. The aim is to experience the thrill real physicists feel: not taking conservation on faith, but measuring it, watching the numbers balance, and proving with your own hands that the universe truly does guard these quantities perfectly.`,
            offerToParent: `Parent: opt your child into the Conservation Investigation project. Designing collision experiments, measuring masses and speeds before and after, and checking that total momentum is conserved, then testing the impulse principle with cushioned egg drops, directly develops the core NGSS physics skills of analyzing momentum, applying conservation laws, and relating force, time, and impulse. Proving conservation of momentum with real measurements (rather than accepting it on faith) and connecting impulse to airbags, crumple zones, and safety builds quantitative reasoning, experimental design, data analysis, and a deep grasp of one of physics' most profound principles. It's rigorous, hands-on, standards-aligned work that mirrors authentic scientific practice.`,
          },
          identityQuestion: `If you become someone who can look at any collision, explosion, or push and instantly know that the total momentum is perfectly preserved, who understands why a rocket flies, why an airbag saves a life, and why some quantities in the universe can never be created or destroyed, what kind of thinker does that make you, a person who sees the deep, unbreakable accounting beneath all the chaos of motion, that someone who sees only random crashes and bounces never can?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees momentum conserved in every collision and push.`,
            `A thinker who understands why rockets fly and airbags save lives.`,
            `Someone who knows the universe guards certain quantities perfectly.`,
          ],
          saveKey: `identity_responses_sci_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelve lessons in, and you've reached one of the deepest and most powerful ideas in all of physics: conservation. You learned that momentum is mass times velocity, a vector measuring an object's quantity of motion, so that a slow heavy truck and a fast light bullet can carry the very same momentum. You learned the great law of conservation of momentum: in a closed system with no outside forces, the total momentum never changes, the total before any event exactly equals the total after, and you saw that this follows directly from Newton's third law. You discovered that momentum is transferred, never destroyed, which is why a cannon recoils, why collisions (elastic or inelastic) always balance the books, and why a rocket gains forward speed by throwing fuel backward in the vacuum of space. And you learned impulse, force times time, the bridge that explains why airbags, crumple zones, and bending your knees on landing all save you by stretching the stopping time to shrink the force. As a physicist, you reasoned through real puzzles: the cannon's kick, the car-and-truck crash, the life-saving airbag, the rocket seen through momentum, and the skaters pushing apart on frictionless ice, all the same beautiful physics. You now see the unbreakable accounting beneath all the chaos of motion: some quantities the universe simply will not let change. Next, we follow conservation to its most far-reaching form, the one that powers stars and lights cities: energy, work, and the conservation of energy. Onward, {name}. — Cosmo`,
          badge: `momentum-keeper`,
          badgeName: `Momentum Keeper`,
          xpEarned: 75,
          competencies: [
            `Understands momentum as mass times velocity, a vector measure of motion`,
            `Knows the law of conservation of momentum and that it follows from Newton's third law`,
            `Explains recoil, including why a cannon kicks back and a rocket accelerates`,
            `Distinguishes elastic from inelastic collisions and knows momentum is conserved in both`,
            `Understands impulse as force times time, equal to the change in momentum`,
            `Explains how airbags, crumple zones, and cushioning reduce force by extending time`,
            `Sees conservation laws as among the deepest, most powerful principles in physics`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Physics — Work, Energy, and the Conservation of Energy`,
            hook: `The single most important idea in physics: what energy is, and why it can never be created or destroyed. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
