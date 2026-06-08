// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L13 — Physics: Work, Energy, and the Conservation of Energy
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS3 (Energy)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l13-v1";

const SCIENCE_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-13`,
      title: `Physics: Work, Energy, and the Conservation of Energy`,
      duration: 35,
      xpReward: 75,
      badge: `energy-master`,
      badgeName: `Energy Master`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you met conservation through momentum. Now we reach the single most important and universal concept in all of physics: energy. Work, kinetic energy, potential energy, and the conservation of energy tie together everything from a roller coaster to a nuclear reactor. Energy cannot be created or destroyed — only transformed. That fact constrains everything that happens in the universe. This lesson makes that constraint concrete.`,
          headline: `Physics: Work, Energy, and the Conservation of Energy`,
          subtitle: `The single most important idea in physics: what energy is, and why it can never be created or destroyed. A Case Study.`,
          visual: `/voyager-assets/science/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Work: How Energy Moves`,
          paragraphs: [
            `Energy is the most important idea in physics, but to understand it, we start with a related word physicists define precisely: work. In everyday speech, "work" means effort. In physics, it means something exact: work is done when a force moves an object through a distance. Push a box across the floor and you do work on it. Work is force times distance.`,
            `This precise definition has a surprising consequence: if nothing moves, no work is done, no matter how hard you strain. Hold a heavy weight perfectly still and your muscles burn, but in the physicist's sense you do zero work on it, because it doesn't move. Work requires both a force and a movement in the direction of that force. No distance, no work.`,
            `Why does work matter so much? Because work is exactly how energy is transferred from one place or form to another. When you do work on an object, you give it energy; when an object does work, it gives up energy. Work is the bridge, the mechanism by which energy flows. Understanding work is the first step to understanding energy itself, the thread running through everything.`,
          ],
          image: `/voyager-assets/science/l13-s1-work.webp`,
          imageCaption: `Energy is the most important idea in physics, but we start with a related word physicists define exactly: WORK. In everyday speech work means effort; in physics it's precise: work is done when a FORCE moves an object through a DISTANCE. Push a box across the floor and you do work on it. Work is force times distance. A surprising consequence: if nothing MOVES, no work is done, no matter how hard you strain. Hold a heavy weight still and your muscles burn, but you do zero work on it, because it doesn't move. Work needs both a force and movement in that force's direction. Why does work matter? Because work is exactly how ENERGY is TRANSFERRED from one place or form to another. Do work on an object, you give it energy. Work is the bridge by which energy flows.`,
          vocab: [
            { word: `work`,
              definition: `Done when a force moves an object through a distance. Work equals force times distance, and it transfers energy. No movement means no work.`,
              audioPrompt: `Work, {name}, has an exact meaning in physics: it's done when a force moves an object through a distance, and it equals force times distance. The surprise is that if nothing moves, you do no work at all, no matter how hard you push or strain.` },
            { word: `force times distance`,
              definition: `The formula for work. A bigger force, or moving the object farther, means more work done and more energy transferred.`,
              audioPrompt: `Force times distance, {name}, is how we calculate work. Push harder, or push the object a longer distance, and you do more work, transferring more energy to it. Both the strength of the push and how far it moves the object count.` },
            { word: `energy`,
              definition: `The capacity to do work, to make things happen. Energy comes in many forms and runs through everything in the universe.`,
              audioPrompt: `Energy, {name}, is the capacity to do work, to make things happen, to move, heat, light, or change anything at all. It's the single thread running through every motion, every meal, every star, and every machine in the universe.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Kinetic And Potential Energy`,
          paragraphs: [
            `Energy comes in many forms, but mechanical energy has two great families. The first is kinetic energy: the energy of motion. Anything moving has it, a rolling ball, flowing water, a flying arrow. The faster something moves and the more mass it has, the more kinetic energy it carries. A speeding truck has enormous kinetic energy; a drifting feather, very little.`,
            `The second family is potential energy: stored energy, waiting to be released. A ball held high above the ground has gravitational potential energy, lift it higher and you store more, ready to convert to motion the instant you let go. A stretched spring or drawn bow stores elastic potential energy. Potential energy is energy of position or arrangement, energy "saved up" for later.`,
            `The magic is that these two forms constantly transform into each other. Lift a ball and drop it: as it falls, potential energy converts into kinetic energy, faster and faster. A pendulum trades them endlessly: all potential at the top of its swing, all kinetic at the bottom. Watching energy flow between kinetic and potential is watching physics breathe.`,
          ],
          image: `/voyager-assets/science/l13-s2-kinetic-potential.webp`,
          imageCaption: `Mechanical energy has two great families. KINETIC ENERGY is the energy of MOTION: anything moving has it, a rolling ball, flowing water, a flying arrow. The faster and more massive, the more kinetic energy, a speeding truck has enormous amounts, a drifting feather very little. POTENTIAL ENERGY is STORED energy, waiting to be released. A ball held high has gravitational potential energy, lift it higher and you store more, ready to become motion the instant you let go. A stretched spring or drawn bow stores elastic potential energy, energy of position or arrangement, saved for later. The magic: these two constantly TRANSFORM into each other. Drop a lifted ball and potential becomes kinetic, faster and faster. A pendulum trades them endlessly, all potential at the top, all kinetic at the bottom.`,
          vocab: [
            { word: `kinetic energy`,
              definition: `The energy of motion. Anything moving has it, and the more mass and speed an object has, the more kinetic energy it carries.`,
              audioPrompt: `Kinetic energy, {name}, is the energy of motion, the energy anything moving carries. A rolling ball, a flowing river, a speeding car all have it, and the faster and heavier something is, the more kinetic energy it packs.` },
            { word: `potential energy`,
              definition: `Stored energy, waiting to be released, due to an object's position or arrangement, like a ball held high or a stretched spring.`,
              audioPrompt: `Potential energy, {name}, is stored energy, energy waiting to be released because of where something is or how it's arranged. A ball held high, a stretched spring, a drawn bow, all hold potential energy, ready to spring into motion.` },
            { word: `energy transformation`,
              definition: `The conversion of energy from one form into another, such as potential energy becoming kinetic energy as an object falls.`,
              audioPrompt: `Energy transformation, {name}, is energy changing from one form into another. When a lifted ball drops, its stored potential energy transforms into the kinetic energy of motion, faster and faster, the same total energy, just in a different form.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Great Law: Conservation Of Energy`,
          paragraphs: [
            `Now the heart of the lesson, one of the deepest laws in all of science: energy can never be created or destroyed. It can only be transformed from one form into another, or transferred from one object to another. The total amount of energy in a closed system, and in the entire universe, stays exactly constant. This is the law of conservation of energy.`,
            `Watch it in a pendulum. At the top of its swing it's momentarily still, all its energy is potential. As it swings down, potential converts to kinetic until, at the bottom, it moves fastest, all kinetic. Then up the other side, kinetic converts back to potential. The total, kinetic plus potential, never changes. Energy just shifts between forms, perfectly balanced, every moment.`,
            `This law is staggeringly powerful and universal. It governs roller coasters, power plants, your body, and the stars. Every machine is an energy converter: a car turns fuel's chemical energy into motion; a solar panel turns light into electricity; your body turns food into motion and heat. Through every transformation, the books always balance. Energy is never lost.`,
          ],
          image: `/voyager-assets/science/l13-s3-conservation.webp`,
          imageCaption: `The heart of the lesson, one of science's deepest laws: ENERGY can never be CREATED or DESTROYED. It can only be transformed from one form to another, or transferred between objects. The total energy in a closed system, and in the whole universe, stays exactly constant, the law of CONSERVATION OF ENERGY. Watch a PENDULUM: at the top of its swing it's still, all potential energy. Swinging down, potential becomes kinetic, until at the bottom it moves fastest, all kinetic. Up the other side, kinetic becomes potential again. The total never changes, energy just shifts between forms, perfectly balanced. This law is universal: it governs roller coasters, power plants, your body, the stars. Every machine is an energy CONVERTER, and through every transformation, the books always balance.`,
          vocab: [
            { word: `conservation of energy`,
              definition: `Energy can never be created or destroyed, only transformed or transferred. The total energy in a closed system stays exactly constant.`,
              audioPrompt: `Conservation of energy, {name}, is one of the deepest laws in all of science: energy is never created or destroyed, only changed from one form to another. The total amount in the universe has stayed exactly the same since the beginning of time.` },
            { word: `mechanical energy`,
              definition: `The sum of an object's kinetic and potential energy. In an ideal system with no friction, mechanical energy stays constant as the two forms trade off.`,
              audioPrompt: `Mechanical energy, {name}, is just an object's kinetic energy plus its potential energy added together. In an ideal pendulum or roller coaster with no friction, this total stays constant, even as energy shifts back and forth between motion and storage.` },
            { word: `energy converter`,
              definition: `Any device or system that transforms energy from one form to another, like a car (fuel to motion) or a solar panel (light to electricity).`,
              audioPrompt: `An energy converter, {name}, is anything that transforms energy from one form into another. A car converts chemical fuel into motion, a solar panel converts light into electricity, and your own body converts the chemical energy of food into movement and heat.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Power, And The Many Forms Of Energy`,
          paragraphs: [
            `Two more crucial ideas. First, power: the rate at which energy is used or work is done, energy per unit time. Two engines might do the same total work, but the more powerful one does it faster. A powerful motor lifts a load quickly; a weak one lifts the same load slowly. Power is measured in watts, which is why your lightbulbs and appliances are rated that way.`,
            `Second, energy comes in many forms beyond kinetic and potential. There's thermal energy (heat, the motion of particles), chemical energy (stored in bonds, in food and fuel), electrical energy (moving charge), light energy (radiation), sound energy, and nuclear energy (locked in the atom's core). All are energy, and all can transform into one another, every form is interchangeable.`,
            `This unifies the universe under one currency. The Sun's nuclear energy becomes light, which plants turn into chemical energy, which becomes the chemical energy in your food, which your body turns into motion and warmth. Trace any chain of events and you're tracing energy transforming, never created, never destroyed, only changing form.`,
          ],
          image: `/voyager-assets/science/l13-s4-power-forms.webp`,
          imageCaption: `Two more crucial ideas. First, POWER: the RATE at which energy is used or work is done, energy per unit time. Two engines might do the same total work, but the more powerful one does it faster, a strong motor lifts a load quickly, a weak one slowly. Power is measured in WATTS, which is why bulbs and appliances are rated that way. Second, energy comes in many FORMS beyond kinetic and potential: THERMAL (heat), CHEMICAL (bonds, food, fuel), ELECTRICAL (moving charge), LIGHT, SOUND, and NUCLEAR (locked in the atom's core). All are energy, all interchangeable. This unifies the universe under one currency: the Sun's nuclear energy becomes light, plants make chemical energy, your food, your body's motion and warmth. Trace any chain and you trace energy transforming, never lost.`,
          vocab: [
            { word: `power`,
              definition: `The rate at which energy is used or work is done, energy per unit time. Measured in watts. More power means the same work done faster.`,
              audioPrompt: `Power, {name}, is the rate at which energy is used or work gets done, how much energy per second. Two engines can do the same total work, but the more powerful one does it faster. We measure power in watts, like the rating on a lightbulb.` },
            { word: `forms of energy`,
              definition: `The many kinds energy takes: kinetic, potential, thermal, chemical, electrical, light, sound, and nuclear. All can transform into one another.`,
              audioPrompt: `Energy takes many forms, {name}: kinetic and potential, plus thermal heat, chemical energy in food and fuel, electrical energy, light, sound, and nuclear energy in the atom's core. All are truly energy, and every form can transform into any other.` },
            { word: `chemical energy`,
              definition: `Energy stored in the bonds between atoms, released in reactions. The energy in food, fuel, and batteries is chemical energy.`,
              audioPrompt: `Chemical energy, {name}, is energy stored in the bonds between atoms, the kind locked inside food, fuel, and batteries. When those bonds rearrange in a reaction, the energy is released, powering your body, your car, and your phone alike.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Work is force times distance, the way energy is transferred, and no movement means no work. Energy is the capacity to make things happen, with two great mechanical families: kinetic (motion) and potential (stored). They constantly transform into each other, as in a falling ball or a swinging pendulum, while their total stays the same.`,
            `The great law: energy can never be created or destroyed, only transformed or transferred, the total in the universe is constant. Power is the rate energy is used (energy per time, in watts). Energy takes many interchangeable forms, thermal, chemical, electrical, light, nuclear, and every machine is a converter. From the Sun to your food to your motion, it's all one flowing currency.`,
            `Now the case-study screen makes you the physicist with five puzzles: why holding a heavy weight still does zero work, how a coaster's hills must shrink, where a bouncing ball's energy "goes" when it stops, why a pendulum returns almost to its start, and how to trace energy from the Sun to your moving muscles. Reason with work, energy, and conservation. Onward.`,
          ],
          image: `/voyager-assets/science/l13-s5-before.webp`,
          imageCaption: `Threads together. WORK is force times distance, how energy transfers, and no movement means no work. ENERGY is the capacity to make things happen, with two mechanical families: KINETIC (motion) and POTENTIAL (stored), constantly transforming into each other as their total holds steady. The great law: energy is never created or destroyed, only transformed or transferred, the universe's total is constant. POWER is the rate energy is used (per time, in watts). Energy takes many interchangeable FORMS, thermal, chemical, electrical, light, nuclear, and every machine is a converter. The case-study screen gives five puzzles: the held weight doing zero work, the shrinking coaster hills, the bouncing ball that stops, the returning pendulum, and tracing the Sun's energy to your muscles.`,
          vocab: [
            { word: `friction and heat`,
              definition: `Friction converts kinetic energy into thermal energy (heat), which is why moving objects slow and stop. The energy isn't lost, just transformed into heat.`,
              audioPrompt: `Friction and heat, {name}, explain where motion "goes." Friction converts the kinetic energy of a moving object into thermal energy, heat, which is why things slow and stop. The energy isn't destroyed; it's just transformed into warmth and spread out.` },
            { word: `efficiency`,
              definition: `The fraction of input energy a machine converts into useful output, rather than into waste heat. No real machine is perfectly efficient.`,
              audioPrompt: `Efficiency, {name}, is how much of the energy you put into a machine comes out as useful work, rather than escaping as waste heat. No real machine is perfect, some energy always ends up as heat, even though none is ever truly destroyed.` },
            { word: `energy chain`,
              definition: `The traceable sequence of energy transformations linking events, such as nuclear energy in the Sun becoming light, then food, then motion in your body.`,
              audioPrompt: `An energy chain, {name}, is the sequence of transformations you can trace through any process. The Sun's nuclear energy becomes light, plants turn it into food's chemical energy, and your body turns that into motion, one unbroken chain of energy changing form.` },
          ],
        },

        {
          id: `l13-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Energy`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about work, energy, and conservation. For each, reason with work (force times distance), the two families of energy, and the great law: energy is never created or destroyed, only transformed.`,
          cases: [
            {
              id: `c1`,
              title: `The weight that does no work`,
              type: `Work (physics)`,
              description: `A weightlifter holds a heavy barbell perfectly still above their head for a full minute. Their arms tremble, their muscles burn, they are clearly exerting enormous effort. Yet a physicist says they are doing zero work on the barbell. How can that be, when they're working so hard?`,
              questions: [
                `Why does the physicist say no work is done on the barbell?`,
                `What is the physics definition of work, and why does it matter here?`,
                `If no work is done on the barbell, why do the lifter's muscles still tire?`,
              ],
              evaluation: `This puzzle exposes the crucial gap between the everyday meaning of "work" and its precise physics definition, and resolving it sharpens your understanding of what energy transfer really requires. In physics, work has an exact meaning: work is done when a force moves an object through a distance, and work equals force times the distance moved in the direction of the force. The key phrase is "through a distance." The weightlifter is certainly applying a large force (an upward force equal to the barbell's weight, to hold it up against gravity). But the barbell is not moving, it's held perfectly still. Since the distance the barbell moves is zero, the work done on the barbell is force times zero, which is zero. No matter how large the force, if there's no movement in the direction of the force, no work is done, in the physics sense. This is why a physicist correctly says the lifter does zero work on the barbell while holding it still: work requires both force AND movement, and here the movement is absent. Now the natural follow-up: if no work is being done on the barbell, why do the lifter's muscles burn and tire? This is where it gets subtle and interesting. The answer is that work IS being done, but inside the lifter's body, not on the barbell. Muscle fibers don't hold tension passively like a table or a hook would; they maintain force through a constant, rapid cycle of microscopic contractions, fibers repeatedly grabbing, releasing, and re-grabbing at the molecular level. Each of these tiny internal movements does microscopic work and consumes chemical energy (from the food you've eaten, stored as chemical energy in molecules like ATP). So your muscles are continuously converting chemical energy into tiny internal motions and, ultimately, into heat, which is exactly why you tire and grow warm. The barbell gains no energy (it stays at the same height, with the same potential energy, not moving, so no kinetic energy), but your body is busily spending energy to maintain the force. A simple table could hold the same barbell up forever without "tiring" or spending any energy, because it holds the force structurally, without internal motion. Your muscles can't; they pay an energy cost to maintain tension. So the resolution is beautiful: zero work is done on the barbell (no movement, no work), but real work and real energy expenditure happen inside the lifter's body, converting chemical energy to heat. The puzzle teaches you to ask precisely: work done on what? Energy transferred to what? Physics demands that exactness, and once you have it, the apparent paradox dissolves completely.`,
            },
            {
              id: `c2`,
              title: `The shrinking roller coaster hills`,
              type: `Conservation of energy`,
              description: `On a roller coaster, the very first hill is always the tallest, and every hill after it is shorter than the one before. Engineers design them this way on purpose, the coaster could never make it over a later hill that was taller than an earlier one. Using energy, explain why the hills must keep shrinking.`,
              questions: [
                `Where does the coaster get the energy to climb and race along?`,
                `Why can no later hill be taller than the first one?`,
                `What happens to a little energy on each part of the ride?`,
              ],
              evaluation: `This everyday engineering fact is a perfect demonstration of conservation of energy and the constant trading between potential and kinetic energy, with a real-world twist about friction. Here's the core: a roller coaster (after the initial lift) has no engine, it runs entirely on the energy it's given at the start. A motorized chain hauls the coaster up that first, tallest hill, doing work against gravity and storing a large amount of gravitational potential energy in the coaster (the higher you lift it, the more potential energy it gains). From that point on, the coaster is on its own, coasting, with no further energy added. As it plunges down the first hill, that stored potential energy converts into kinetic energy, the coaster speeds up, fastest at the bottom. As it climbs the next hill, kinetic energy converts back into potential energy, it slows down as it rises. This trade between potential and kinetic repeats throughout the ride. Now the key question: why can no later hill be taller than the first? Because of conservation of energy. The total mechanical energy the coaster has is set by that first lift, the potential energy at the top of the first hill. To climb any later hill, the coaster must convert kinetic energy back into potential energy, but it can never have more total energy than it started with (energy can't be created). So it can never reach a height greater than its starting height, because that would require more potential energy than it was ever given. If a later hill were taller than the first, the coaster would run out of energy partway up and roll back, unable to crest it. That's why the first hill must be the tallest. But there's a crucial real-world refinement: the hills don't just need to be equal or shorter, they need to keep shrinking, getting progressively lower. Why? Because of friction (between wheels and track) and air resistance. On every part of the ride, a little of the coaster's mechanical energy is continuously converted into thermal energy (heat) by friction and air drag. This energy isn't destroyed, conservation of energy still holds perfectly, but it's transformed into heat and effectively lost from the coaster's useful mechanical energy. So with each hill, the coaster has a little less mechanical energy than before, meaning it can reach a little less height than before. The hills must keep getting shorter to stay within the coaster's steadily diminishing budget of mechanical energy. This is exactly why engineers design ever-decreasing hills, and why a coaster eventually rolls to a stop at the end (often with a final brake to help): its mechanical energy has been gradually bled off into heat. Conservation of energy explains both why no hill can exceed the first (total energy is fixed by the initial lift) and, with friction included, why each hill must be lower than the last (mechanical energy steadily converts to heat). The energy is never lost, it's just increasingly in the form of warmth in the track, air, and wheels, no longer available to lift the coaster.`,
            },
            {
              id: `c3`,
              title: `Where the bouncing goes`,
              type: `Energy transformation`,
              description: `Drop a rubber ball and it bounces, but each bounce is lower than the last, until it finally stops bouncing and lies still on the floor. If energy can never be destroyed, where did the ball's energy go? It clearly had energy when it was bouncing, and now it seems to have none.`,
              questions: [
                `If energy is conserved, why does the ball stop bouncing?`,
                `Where does the ball's energy actually go?`,
                `Does this violate the law of conservation of energy?`,
              ],
              evaluation: `This is the classic puzzle that seems to challenge conservation of energy, and resolving it reveals one of the most important truths in physics: energy is never destroyed, but it can be transformed into forms that are spread out and no longer useful for bouncing. Let's trace it. When you hold the ball up, it has gravitational potential energy. Drop it, and that potential energy converts to kinetic energy as it falls (speeding up). When it hits the floor and compresses, its kinetic energy briefly becomes elastic potential energy (stored in the deformed, squished rubber), then springs back, pushing the ball up again, converting back to kinetic and then to potential as it rises. In a perfect, ideal world with no energy losses, this would repeat forever, the ball would bounce back to exactly its original height every time, trading potential and kinetic energy endlessly. But in the real world, each bounce is lower, and eventually it stops. So if energy is conserved, where did it go? The answer: with each bounce (and during the ball's flight through the air), some of the mechanical energy is converted into other forms, primarily thermal energy (heat) and a little sound energy. When the ball deforms and snaps back, the rubber isn't perfectly elastic, internal friction within the material generates heat (the ball and floor warm up very slightly with each impact). Air resistance during the fall and rise converts a little kinetic energy into heat in the surrounding air. And the "thud" sound you hear is a tiny bit of energy carried away as sound waves (which themselves eventually become heat as they dissipate). So with every bounce, a portion of the ball's mechanical energy transforms into heat and sound, which spread out into the ball, the floor, and the surrounding air. The mechanical energy (the energy of bouncing) steadily decreases, so each bounce is lower, until all of it has been converted to heat and sound, and the ball lies still. Does this violate conservation of energy? Absolutely not, in fact, it's a beautiful confirmation of it. Not a single bit of energy was destroyed. Every joule of the ball's original potential energy is still in the universe; it has simply been transformed from organized, useful mechanical energy into disorganized thermal energy (heat) spread thinly across the ball, the floor, and the air, plus a little sound. If you could add up all that heat and sound, it would exactly equal the energy the ball started with. The key insight, which becomes profound, is that energy not only is conserved but also tends to spread out and become more disordered (this connects to entropy and the second law of thermodynamics from an earlier lesson). The ball's energy didn't vanish; it dispersed into a form, low-grade heat scattered everywhere, that can't easily be gathered back to make the ball bounce again. This is why "lost" energy in everyday life almost always means "turned into heat and spread out," not "destroyed." The bouncing ball is one of the clearest windows into the deep truth that energy is perfectly conserved, even as it relentlessly changes form and disperses.`,
            },
            {
              id: `c4`,
              title: `The pendulum that knows`,
              type: `Kinetic and potential energy`,
              description: `Pull a pendulum back, hold it right at the tip of your nose, and release it without pushing. It swings far away and comes rushing back, but it stops just short of your nose, never hitting it, every single time. A fearless physicist will stand perfectly still and trust this completely. Why won't the pendulum hit them?`,
              questions: [
                `Why does the pendulum return to almost exactly its starting height?`,
                `How do kinetic and potential energy explain its swing?`,
                `Why does it stop just short, rather than reaching its exact start?`,
              ],
              evaluation: `This famous, nerve-testing demonstration (often done with a heavy bowling ball pendulum) is a stunning, visceral proof of conservation of energy, and understanding it lets you trust the physics with your own face. Here's why the pendulum won't hit you. When you hold the pendulum bob at the tip of your nose and release it from rest (crucially, without pushing it, giving it no extra energy), it has a certain amount of gravitational potential energy, determined entirely by its starting height. As it swings down and away, that potential energy converts into kinetic energy, the bob speeds up, moving fastest at the bottom of its arc (the lowest point), where all its energy is kinetic. Then, as it swings up the far side, that kinetic energy converts back into potential energy, the bob slows down as it rises, until at the top of its far swing it momentarily stops, with all its energy potential again. Then it swings back toward you, repeating the trade in reverse. Now the heart of it: conservation of energy guarantees that the bob can rise back up to a height with the same potential energy it started with, but no higher, because it has no more total energy than it began with (you gave it none beyond its starting height, since you released it without a push). It can convert all its kinetic energy back into potential energy and reach its original height, but it cannot exceed that height, because that would require more energy than it possesses, and energy cannot be created. So when it swings back toward your nose, it can rise to, at most, its starting height, which is exactly where your nose is. It cannot swing higher and hit you. This is why the fearless physicist can stand perfectly still and trust it completely: the law of conservation of energy forbids the pendulum from rising above its release point. Now the subtle, reassuring final detail: why does it stop just short of your nose, rather than reaching the exact starting point? Because of friction and air resistance. As the pendulum swings, a tiny bit of its mechanical energy is continuously converted into heat (by air resistance and friction at the pivot). So with each swing, it has slightly less total energy, and therefore returns to a height slightly lower than before, stopping just short of your nose, and a little shorter with each swing, gradually losing amplitude until it eventually hangs still. This means the demonstration is even safer than perfect physics would suggest: not only can the pendulum never exceed its starting height (conservation of energy), but real-world friction guarantees it actually returns to a bit less than its starting height every time. The one and only way to get hurt is to push the pendulum when releasing it, adding energy, which would let it swing back higher than its start. Released from rest, it is utterly safe, a beautiful, trustworthy demonstration that energy is conserved and that potential and kinetic energy trade off perfectly, with friction only ever bleeding energy away, never adding it. Physicists stake their faces on this law, and the law never fails them.`,
            },
            {
              id: `c5`,
              title: `From the Sun to your stride`,
              type: `Energy chain`,
              description: `A child runs across a sunny field. A physicist claims the energy powering that run came originally from nuclear reactions in the core of the Sun, millions of years' worth of transformations ago. Trace the chain of energy transformations that connects the Sun's core to the child's moving legs.`,
              questions: [
                `What is the original source of the energy, and what form does it take?`,
                `What transformations carry the energy from the Sun to the child's muscles?`,
                `How does conservation of energy apply across this entire chain?`,
              ],
              evaluation: `This puzzle reveals one of the most awe-inspiring truths in all of science: that nearly all the energy powering life on Earth traces back to the Sun, and that you can follow it through an unbroken chain of transformations, with energy conserved at every single step. Let's trace the whole chain from the child's run back to its source. The original source is the Sun, and the original form is nuclear energy. In the Sun's core, under crushing pressure and temperature, hydrogen nuclei fuse into helium (nuclear fusion), releasing enormous amounts of energy, this is nuclear energy, released from the very cores of atoms. That nuclear energy is converted into light energy (electromagnetic radiation), which streams out from the Sun across space. After about eight minutes traveling to Earth (and after working its way out from the Sun's core over a vastly longer time), some of that light energy reaches plants. Through photosynthesis, plants capture the light energy and convert it into chemical energy, storing it in the bonds of sugar and other molecules (this is the chemical energy of food, built from sunlight, water, and carbon dioxide). The child eats food, plants directly, or animals that ate plants, taking in that stored chemical energy. In the child's body, cellular respiration breaks down those food molecules, releasing the chemical energy and using it to power the muscles. The muscles convert the chemical energy into the kinetic energy of motion (the running legs) and, inevitably, into thermal energy (heat, which is why exercise makes you warm). So the full chain is: nuclear energy (Sun's core) becomes light energy (radiation) becomes chemical energy (photosynthesis in plants, stored in food) becomes chemical energy (in the child's body) becomes kinetic energy (running) plus thermal energy (body heat). It's a breathtaking sequence spanning 93 million miles and multiple forms of energy. Now, how does conservation of energy apply across this entire chain? Perfectly and absolutely. At no point is energy created or destroyed, it is only transformed from one form into another. The nuclear energy released in the Sun equals the light energy radiated (plus other forms); the light energy captured by the plant equals the chemical energy stored (plus the heat and light not captured); the chemical energy in the food equals the kinetic energy of running plus the heat produced. At every transformation, some energy "branches off" into less useful forms (especially heat, much of the Sun's light becomes heat, much of the food's chemical energy becomes body heat rather than motion), but nothing is ever lost from the universe's total. If you could perfectly account for every joule at every step, the books would always balance exactly. This is conservation of energy operating across cosmic scales and through living things: the same law that governs a pendulum governs the flow of energy from a star's core, through plants, into your body, and out through your moving muscles. It also reveals a profound unity, the energy in your stride, the energy in your food, the energy in sunlight, and the nuclear energy in the Sun are all the same fundamental thing, energy, simply wearing different forms as it flows through the universe in one vast, conserved, ever-transforming current. (The same logic extends even to fossil fuels, the chemical energy in gasoline is ancient sunlight, captured by plants millions of years ago and stored underground, which is why the physicist mentions "millions of years' worth of transformations.")`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what is energy, what does conservation of energy say, and what really happens to "lost" energy when a ball stops bouncing or a coaster slows? Explain how the Sun ends up powering a child's run. Which case made conservation of energy feel most real? In 5-6 sentences.`,
          reflectionPrompt: `Conservation of energy says every bit of energy in the universe has existed since the beginning of time, only ever changing form. How does it feel to know the energy in your own movement is the same energy that once blazed in the heart of a star?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `In physics, when is work done on an object?`,
              options: [
                `Whenever you feel tired from straining your muscles hard.`,
                `When a force moves the object through a distance.`,
                `Only when an object is held perfectly still in place.`,
                `Whenever an object simply has a high temperature.`,
              ],
              correctIndex: 1,
              explanation: `Work is done when a force moves an object through a distance (work = force times distance); no movement means no work. The distractors confuse work with effort, holding still, or temperature.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is kinetic energy?`,
              options: [
                `The energy stored in an object because of its raised position.`,
                `The total heat contained inside any warm object.`,
                `The chemical energy locked inside food and fuel.`,
                `The energy an object has because of its motion.`,
              ],
              correctIndex: 3,
              explanation: `Kinetic energy is the energy of motion; the more mass and speed, the more of it. The distractors describe potential energy, thermal energy, and chemical energy instead.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the law of conservation of energy state?`,
              options: [
                `Energy can never be created or destroyed, only transformed or transferred.`,
                `Energy is constantly being created by every moving object.`,
                `Energy slowly disappears from the universe over long periods.`,
                `Only kinetic energy is conserved; potential energy can vanish.`,
              ],
              correctIndex: 0,
              explanation: `Energy can never be created or destroyed, only changed in form or moved between objects; the universe's total is constant. The distractors claim energy is created, disappears, or that only one form is conserved.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `At the very bottom of a pendulum's swing, where it moves fastest, its energy is mostly:`,
              options: [
                `All stored as potential energy, with no motion energy.`,
                `Kinetic energy, since it is moving at its fastest there.`,
                `Completely gone, having vanished during the downswing.`,
                `Converted entirely into chemical energy at that point.`,
              ],
              correctIndex: 1,
              explanation: `At the bottom, the pendulum moves fastest, so nearly all its energy is kinetic; at the top it's all potential. The distractors swap the forms, claim energy vanished, or invent a chemical conversion.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `A weightlifter holds a heavy barbell still overhead. How much work is done on the barbell?`,
              options: [
                `An enormous amount, since holding it takes huge effort.`,
                `Exactly half the work of actually lifting it would take.`,
                `Zero work, because the barbell does not move any distance.`,
                `It is impossible to ever calculate the work in this case.`,
              ],
              correctIndex: 2,
              explanation: `Work is force times distance; with no movement, zero work is done on the barbell, even though the lifter's muscles burn energy internally. The distractors confuse effort with work or claim it can't be found.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `A rubber ball bounces lower each time until it stops. Where did its energy go?`,
              options: [
                `It was completely destroyed, breaking conservation of energy.`,
                `It was transformed mostly into heat and a little sound, and spread out.`,
                `It turned into brand-new potential energy stored in the floor.`,
                `It simply disappeared into nothing once the ball stopped.`,
              ],
              correctIndex: 1,
              explanation: `The mechanical energy was transformed into thermal energy (heat) and a little sound, spreading into the ball, floor, and air, never destroyed. The distractors claim destruction, invent stored energy, or say it vanished.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why must each hill on a roller coaster be shorter than the one before it?`,
              options: [
                `Because friction and air resistance bleed off a little energy on each section.`,
                `Because gravity grows stronger the farther the coaster travels along.`,
                `Because the coaster's engine gradually runs low on its fuel.`,
                `Because the coaster gains brand-new energy it must use up quickly.`,
              ],
              correctIndex: 0,
              explanation: `The coaster's mechanical energy is fixed by the first lift, and friction and air resistance convert some to heat on every section, so it can reach less height each time. The distractors invoke changing gravity, a (nonexistent) engine, or created energy.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is power, in physics?`,
              options: [
                `The total amount of energy an object contains at rest.`,
                `The force needed to hold a heavy object perfectly still.`,
                `The rate at which energy is used or work is done, per unit time.`,
                `The maximum height an object can ever be lifted to.`,
              ],
              correctIndex: 2,
              explanation: `Power is the rate at which energy is used or work is done (energy per unit time, measured in watts), so more power means the same work done faster. The distractors confuse power with stored energy, holding force, or height.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: When a moving object slows down and stops because of friction, some of its energy is actually destroyed, since it had energy before and now has none.`,
              correctAnswer: false,
              explanation: `False, and understanding why is the entire heart of the law of conservation of energy, one of the deepest and most rigorously tested principles in all of science. It is true that the object had kinetic energy (the energy of motion) while moving and appears to have none once it stops, which makes it tempting to conclude the energy was destroyed. But energy is never destroyed, it is only transformed from one form into another or transferred from one object to another. When friction slows a moving object, the object's kinetic energy is converted into thermal energy, heat. Friction is the result of countless microscopic interactions between the surfaces in contact (and with the air): as the surfaces rub, they cause the atoms and molecules in both surfaces to jiggle and vibrate more vigorously, and increased molecular motion is exactly what heat is. So the organized, large-scale kinetic energy of the moving object (all its atoms moving together in one direction) gets converted into the disorganized, microscopic kinetic energy of countless atoms vibrating randomly, which we experience as a rise in temperature. This is why your hands warm up when you rub them together, why a sliding object and the surface it slides on both grow slightly warmer, why car brakes get hot (they convert the car's kinetic energy into heat to slow it), and why a drill bit or saw blade heats up. The energy hasn't vanished at all; it has spread out into the object, the surface, and the surrounding air as thermal energy, plus often a little sound (which also eventually becomes heat). If you could measure every bit of that heat and sound, it would add up to exactly the kinetic energy the object lost, not a single joule unaccounted for. The reason it seems like the energy is "gone" is that this thermal energy is dispersed thinly across many atoms and is no longer in a useful, concentrated form that could move the object, but it is unquestionably still there, still part of the universe's perfectly constant total energy. This connects to a profound idea: energy is always conserved, but it tends to spread out and become more disordered (less useful) over time, the realm of entropy and the second law of thermodynamics. "Lost" energy in everyday life almost always means "converted to low-grade heat and dispersed," never "destroyed." So the statement is false: friction transforms kinetic energy into heat (and a little sound); it never destroys it. The total energy before equals the total energy after, exactly, as conservation of energy demands.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "I'm going to build a machine that runs forever with no fuel, a perpetual motion machine. Once I start it, it'll keep itself going and even produce extra energy to power my house, free energy forever." Using the lesson, what's the best response?`,
              options: [
                `Great idea; with a clever enough design, free perpetual energy is achievable.`,
                `It will work, but only if the machine is built large enough to start with.`,
                `It's impossible: conservation of energy means a machine can't create energy from nothing, and friction always converts some mechanical energy into heat, so any real machine steadily loses usable energy and must eventually stop without an outside energy source; you can never get out more energy than you put in.`,
                `It will run forever, since energy is conserved and therefore never runs out.`,
              ],
              correctIndex: 2,
              explanation: `Conservation of energy forbids creating energy from nothing, a machine can't output more than it takes in. Worse, friction always converts some mechanical energy to heat that disperses, so any real machine steadily loses usable energy and stops without an outside source. The distractors endorse the impossible dream or misread conservation as "runs forever."`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-star`, category: `Energy from a star`, prompt: `Conservation of energy says every bit of energy has existed since the beginning of time, only changing form. How does it feel to know the energy in your own movement is the same energy that once blazed in the heart of a star?` },
            { id: `reflect-transform`, category: `Nothing is ever lost`, prompt: `A bouncing ball "loses" its energy, but really it just transforms into heat that spreads out, nothing is destroyed. Does it change anything for you to know that in physics, nothing is ever truly lost, only changed?` },
            { id: `reflect-effort`, category: `Effort versus work`, prompt: `Physics says holding a heavy weight still does zero "work," even as your muscles burn. Where in your own life does great effort sometimes produce no visible movement, and how do you make peace with that?` },
            { id: `reflect-heritage`, category: `Teaching energy`, prompt: `Caro, you're building science for conscious families. How would you help a child feel the conservation of energy as something real, using a pendulum, a ball, or a roller coaster, so they witness energy trading forms with their own eyes?` },
            { id: `reflect-currency`, category: `One universal currency`, prompt: `Energy is a single currency flowing through everything, food, motion, light, stars, all interchangeable. What does it stir in you to see the whole universe unified under one quantity that simply changes its disguise?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Inventors have chased "free energy" perpetual motion machines for centuries, and conservation of energy says they can never work. What does it teach you that the most seductive ideas can be ruled out completely by a single deep law?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Energy Trackers`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hunt for energy transformations hiding in everything around you, and watch conservation of energy in action. Start with the pendulum trade: tie a weight to a string and swing it, noticing how it moves fastest at the bottom (all kinetic energy) and pauses at the top of each swing (all potential energy), trading the two back and forth. Pull it back to a set height, release without pushing, and watch it return to almost, but never quite, the same height (friction bleeds a little to heat each swing). For the brave: hold a heavy pendulum bob to your nose, release without pushing, and trust conservation of energy as it stops just short on its return (never push it!). Explore potential-to-kinetic with a ramp: roll a ball from different heights and see how a higher start (more potential energy) means a faster roll (more kinetic energy) at the bottom. Build a mini roller coaster from foam pipe insulation or cardboard and prove that no hill can be taller than the first. Find friction's heat: rub your hands together fast and feel them warm (kinetic energy becoming thermal energy), or briskly rub a coin on the table. Drop a bouncy ball and count how each bounce is lower, discussing where the energy "went" (heat and sound). Then go on an energy-converter hunt around the house: a toaster (electrical to thermal), a blender (electrical to kinetic), a phone charger, a candle (chemical to light and heat), a wind-up toy (elastic potential to kinetic). For each, name the input and output forms. Finally, trace the great chain: pick something the family did today, ran, biked, cooked, and trace its energy back through food, to plants, to sunlight, to the Sun's nuclear core. The goal is to stop seeing energy as a vague "stuff" and start seeing it as physicists do, a single, conserved currency endlessly changing form, never created, never destroyed, flowing through every event from a heartbeat to a star.`,
          },
          projectOption: {
            title: `The Energy Conversion Build, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design, build, and analyze a device or chain that demonstrates energy transformations and tests conservation of energy, becoming an engineer who tracks energy through every step. Week 1, build and trace: choose a project, a marble run or roller coaster (potential to kinetic, with friction losses you can observe), a rubber-band or mousetrap car (elastic potential to kinetic), a simple pendulum apparatus, a small wind or water wheel (kinetic to rotational, maybe to electrical with a tiny motor as a generator), or a "Rube Goldberg" chain that passes energy through several transformations. As you build, identify every energy transformation in your device and label them: where is potential energy stored, where does it become kinetic, where does friction turn energy into heat? Predict, using conservation of energy, how your device should behave (for instance, that a marble can never roll higher than its starting point). Week 2, measure and analyze: run your device repeatedly and gather data, how the starting height affects the speed or distance, how much height is "lost" to friction on each bounce or hill, how energy diminishes through a chain. Try to account for where the energy goes, including the energy converted to heat and sound. Connect everything to conservation: show that energy is never created (your marble never exceeds its start height) and never destroyed (the "missing" energy became heat). Optionally explore efficiency, what fraction of input energy became useful output versus waste heat. Produce your final piece, a demonstration video with narration, a slide deck, or a lab-report-style writeup, that shows your device, maps every energy transformation, presents your data, and explains how it confirms conservation of energy (energy changes form but the total is preserved). The aim is to experience energy as engineers and scientists do: not as an abstract word, but as a real, trackable, conserved quantity you can follow through every gear, bounce, and transformation of a machine you built with your own hands.`,
            offerToParent: `Parent: opt your child into the Energy Conversion Build project. Designing and building a device, a marble run, a rubber-band car, a water wheel, then tracing every energy transformation, measuring how height affects speed, and accounting for energy "lost" to friction as heat, directly develops the core NGSS energy concepts of conservation of energy, energy transformation, and the conversion of mechanical energy to thermal energy. Confirming with real measurements that energy is never created (nothing exceeds its starting height) nor destroyed (the missing energy became heat) makes the most important idea in physics concrete and unforgettable, while building engineering design, measurement, and data-analysis skills. It's rigorous, hands-on, standards-aligned work.`,
          },
          identityQuestion: `If you become someone who can trace energy through any event, who knows that nothing is ever created or destroyed but only transformed, who can follow the current of energy from a star's core to a beating heart, what kind of thinker does that make you, a person who sees the single, conserved currency flowing beneath all of reality, that someone who sees only disconnected, unrelated happenings never can?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can trace energy through any event without losing track.`,
            `A thinker who knows energy is never created or destroyed, only changed.`,
            `Someone who sees the same energy in their movement and in the stars.`,
          ],
          saveKey: `identity_responses_sci_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteen lessons in, and you now hold the single most important idea in all of physics: energy, and its conservation. You learned that work has an exact meaning, force times distance, and that it's the very mechanism by which energy is transferred, so that holding a weight perfectly still does zero work on it. You met the two great families of mechanical energy: kinetic, the energy of motion, and potential, energy stored by position or arrangement, and you watched them transform endlessly into each other in a falling ball, a pendulum, a roller coaster. And you reached the great law itself: energy can never be created or destroyed, only transformed from one form into another, the total in the universe forever constant. You learned power, the rate energy is used, and traced energy through its many interchangeable forms, thermal, chemical, electrical, light, nuclear, seeing every machine as an energy converter. As a physicist, you reasoned through real puzzles: the weight that does no work, why coaster hills must shrink, where a bouncing ball's energy goes, why a released pendulum can never swing back to hit your nose, and the breathtaking chain that connects the Sun's nuclear core to a child's running legs. You now see the single, conserved currency flowing beneath everything that happens. Next, we follow energy into one of its most useful and world-changing forms: electricity, the flow of charge through circuits that lights our world. Onward, {name}. — Cosmo`,
          badge: `energy-master`,
          badgeName: `Energy Master`,
          xpEarned: 75,
          competencies: [
            `Understands work as force times distance, the mechanism of energy transfer`,
            `Distinguishes kinetic energy (motion) from potential energy (stored)`,
            `Knows the law of conservation of energy: energy is transformed, never created or destroyed`,
            `Traces energy transformations between potential, kinetic, thermal, and other forms`,
            `Understands power as the rate of energy use, measured in watts`,
            `Explains where "lost" energy goes (heat and sound) when objects slow or stop`,
            `Sees every machine as an energy converter and rules out perpetual motion`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Physics — Electricity: Circuits, Voltage, and Current`,
            hook: `How the flow of tiny charges through circuits powers nearly everything in the modern world. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L13 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
