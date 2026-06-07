// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L14 — Physics: Electricity — Circuits, Voltage, and Current
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS2 / HS-PS3 (Forces, Energy; Electricity and Magnetism)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l14-v1";

const SCIENCE_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-14`,
      title: `Physics: Electricity — Circuits, Voltage, and Current`,
      duration: 35,
      xpReward: 75,
      badge: `circuit-master`,
      badgeName: `Circuit Master`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, look around you. Almost everything that defines the modern world — the light overhead, the screen in your hand, the refrigerator, the internet — runs on electricity. Today you learn how it actually works: charge, voltage, current, resistance, and circuits. The mathematics is accessible and the applications are everywhere. Understanding electricity is understanding the infrastructure of modern civilization.`,
          headline: `Physics: Electricity — Circuits, Voltage, and Current`,
          subtitle: `How the flow of tiny charges through circuits powers nearly everything in the modern world. A Case Study.`,
          visual: `/voyager-assets/science/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Charge: The Source Of It All`,
          paragraphs: [
            `Electricity begins with a fundamental property of matter: electric charge. From the atom lesson, recall that atoms contain protons (positive charge) and electrons (negative charge). Charge comes in these two kinds, and the basic rule is simple: like charges repel (push apart), and opposite charges attract (pull together). This push and pull is the electric force.`,
            `Most objects are electrically neutral, equal positive and negative charge, so the forces balance. But electrons can move. Rub a balloon on your hair and electrons transfer, leaving the balloon negative and your hair positive, now they attract, and your hair stands up. That's static electricity: built-up charge sitting still, ready to jump as a spark.`,
            `The real power, though, comes not from static charge but from moving charge. In metals, some electrons are loosely held and free to roam. If we can get these free electrons to flow in an organized stream, we create an electric current, and a current can carry energy and do work: light a bulb, spin a motor, run a computer. Harnessing the flow of charge is the whole game of electricity.`,
          ],
          image: `/voyager-assets/science/l14-s1-charge.webp`,
          imageCaption: `Electricity begins with ELECTRIC CHARGE. Atoms hold protons (positive) and electrons (negative), and the rule is simple: LIKE charges REPEL, OPPOSITE charges ATTRACT. This push and pull is the electric force. Most objects are NEUTRAL, equal positive and negative, so forces balance. But electrons can MOVE. Rub a balloon on your hair and electrons transfer, the balloon goes negative, your hair positive, they attract, and your hair stands up. That's STATIC electricity: built-up charge sitting still, ready to jump as a spark. The real power comes from MOVING charge. In metals, some electrons are loosely held and free to roam. Get them flowing in an organized stream and you create an electric CURRENT, which carries energy and does work, lighting bulbs, spinning motors, running computers. Harnessing flowing charge is the whole game.`,
          vocab: [
            { word: `electric charge`,
              definition: `A fundamental property of matter, positive (protons) or negative (electrons). Like charges repel; opposite charges attract.`,
              audioPrompt: `Electric charge, {name}, is a basic property of matter, coming in two kinds: positive, carried by protons, and negative, carried by electrons. The rule is simple but powerful: like charges push apart, and opposite charges pull together.` },
            { word: `electric force`,
              definition: `The push or pull between charged objects. Like charges repel, opposite charges attract, and this force is what drives all of electricity.`,
              audioPrompt: `The electric force, {name}, is the push or pull between charged objects. Opposite charges attract, like charges repel, and this single force, acting on tiny electrons, is what ultimately drives every spark, current, and circuit in the universe.` },
            { word: `static electricity`,
              definition: `Charge that has built up on an object and is sitting still, like the charge that makes hair stand up or produces a small shock or spark.`,
              audioPrompt: `Static electricity, {name}, is electric charge that has built up on something and is just sitting there, not flowing. It's what makes your hair stand up after rubbing a balloon, or gives you a little shock when you touch a doorknob, charge waiting to jump.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Current And Voltage`,
          paragraphs: [
            `To understand flowing electricity, picture water in a pipe, the best analogy in all of physics. Current is the flow of electric charge, how much charge passes a point each second, just as water current is how much water flows past each second. More electrons flowing means more current. Current is measured in amperes, or amps. It's the actual movement of charge.`,
            `But what makes the charge flow in the first place? Voltage. Voltage is the electrical "push" or pressure that drives current, like the water pressure that pushes water through a pipe. A battery or outlet provides voltage, a difference in electrical energy between two points that pushes electrons along. Higher voltage means a stronger push. Voltage is measured in volts. No voltage, no flow.`,
            `Here's the key relationship: voltage is the cause, current is the effect. Voltage pushes; current flows in response. A battery's voltage is like a water tower's height, the higher it is, the harder it pushes. Connect a wire across a battery's terminals, and its voltage drives a current around the loop. Every device needs a voltage source to work.`,
          ],
          image: `/voyager-assets/science/l14-s2-current-voltage.webp`,
          imageCaption: `Picture WATER in a PIPE, the best analogy in physics. CURRENT is the flow of electric charge, how much passes a point each second, just like water current. More electrons flowing means more current, measured in AMPERES (amps). It's the actual movement of charge. But what makes charge flow? VOLTAGE, the electrical PUSH or pressure that drives current, like the water pressure pushing water through a pipe. A battery or outlet provides voltage, a difference in electrical energy that pushes electrons along. Higher voltage, stronger push, measured in VOLTS. No voltage, no flow. The key relationship: voltage is the CAUSE, current the EFFECT. Voltage pushes, current flows in response. A battery's voltage is like a water tower's height, the higher it is, the harder it pushes. Every device needs a voltage source.`,
          vocab: [
            { word: `current`,
              definition: `The flow of electric charge, how much charge passes a point each second. Measured in amperes (amps). It is the actual movement of electrons.`,
              audioPrompt: `Current, {name}, is the flow of electric charge, how many electrons stream past a point each second. Think of water current in a pipe: more water flowing means more current. We measure electric current in amperes, or amps for short.` },
            { word: `voltage`,
              definition: `The electrical "push" or pressure that drives current, supplied by a battery or outlet. Measured in volts. Higher voltage means a stronger push.`,
              audioPrompt: `Voltage, {name}, is the electrical push or pressure that drives current through a circuit, much like water pressure pushes water through a pipe. A battery or wall outlet provides it, and higher voltage means a stronger push. We measure it in volts.` },
            { word: `the water analogy`,
              definition: `A way to picture electricity: voltage is like water pressure, current is like the flow rate, and a wire is like a pipe carrying the flow.`,
              audioPrompt: `The water analogy, {name}, makes electricity easy to picture. Voltage is like water pressure, the push. Current is like the flow rate, how much moves. And a wire is like a pipe carrying it all. It's the clearest way to understand circuits.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Resistance And Ohm's Law`,
          paragraphs: [
            `The third piece is resistance: how much a material opposes the flow of current. A thin wire resists more than a thick one, just as a narrow pipe restricts water more than a wide one. Some materials (copper, metals) have low resistance, electrons flow easily, these are conductors. Others (rubber, glass) have very high resistance and barely conduct, these are insulators.`,
            `Resistance does something useful: it converts electrical energy into heat and light. The glowing filament of an old bulb, the coils of a toaster or heater, all are high-resistance materials that turn electrical energy into heat as current fights its way through. Resistance is measured in ohms. Without resistance, electricity couldn't do many of the jobs we rely on it for.`,
            `These three, voltage, current, and resistance, are tied together by one of physics' most useful equations: Ohm's law. It says voltage equals current times resistance. In plain terms: for a given push, more resistance means less current flows; for a given resistance, more voltage means more current. This lets engineers design every circuit precisely.`,
          ],
          image: `/voyager-assets/science/l14-s3-resistance-ohm.webp`,
          imageCaption: `The third piece is RESISTANCE: how much a material opposes current. A thin wire resists more than a thick one, like a narrow pipe restricting water. Some materials, copper and metals, have LOW resistance, electrons flow easily, these are CONDUCTORS. Others, rubber and glass, have very HIGH resistance and barely conduct, these are INSULATORS. Resistance does something useful: it converts electrical energy into HEAT and LIGHT, the glowing filament of a bulb, the coils of a toaster, all high-resistance materials. Resistance is measured in OHMS. These three, voltage, current, and resistance, are tied by OHM'S LAW: voltage equals current times resistance. More resistance means less current for a given push; more voltage means more current. This simple relationship lets engineers design every circuit precisely.`,
          vocab: [
            { word: `resistance`,
              definition: `How much a material opposes the flow of current, converting electrical energy into heat. Measured in ohms. Thin wires resist more than thick ones.`,
              audioPrompt: `Resistance, {name}, is how much a material fights the flow of current, like a narrow pipe restricting water. As current pushes through resistance, electrical energy turns into heat, which is how a toaster or heater works. We measure resistance in ohms.` },
            { word: `conductor and insulator`,
              definition: `A conductor (like copper) lets current flow easily, with low resistance. An insulator (like rubber or glass) blocks current, with very high resistance.`,
              audioPrompt: `A conductor, {name}, like copper or most metals, lets current flow easily because its resistance is low. An insulator, like rubber, plastic, or glass, blocks current because its resistance is very high. That's why wires are copper inside and rubber outside.` },
            { word: `Ohm's law`,
              definition: `Voltage equals current times resistance. It links the three key quantities, so more resistance means less current for a given voltage.`,
              audioPrompt: `Ohm's law, {name}, is one of the most useful equations in physics: voltage equals current times resistance. It ties the three big quantities together, so for a given push, more resistance means less current flows, and more voltage means more current.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Circuits: Series And Parallel`,
          paragraphs: [
            `For current to flow, it needs a complete, unbroken loop, a circuit. Charge must be able to travel from the battery's negative terminal, through the wire and device, and back to the positive terminal, all the way around. Break the loop anywhere, flip a switch off, cut a wire, and the flow stops instantly, everywhere. A switch is simply a way to open or close the loop.`,
            `Circuits come in two basic arrangements. In a series circuit, components are connected one after another in a single loop, so the same current flows through every part. The catch: if one part breaks, the whole loop opens and everything stops, like old holiday lights where one dead bulb killed the whole string. There's only one path for the charge.`,
            `In a parallel circuit, components are on separate branches, each with its own path back to the battery. Current splits among the branches, so each device gets the full voltage, and if one branch breaks, the others keep working. This is why your home is wired in parallel: every outlet and light gets full voltage, and switching off one lamp doesn't darken the whole house.`,
          ],
          image: `/voyager-assets/science/l14-s4-circuits.webp`,
          imageCaption: `For current to flow, it needs a complete, unbroken loop, a CIRCUIT. Charge must travel from the battery's one terminal, through the wire and device, and back to the other, all the way around. Break the loop anywhere, a switch, a cut wire, and flow stops INSTANTLY, everywhere. A switch just opens or closes the loop. Circuits come in two arrangements. In a SERIES circuit, parts are connected one after another in a single loop, so the same current flows through all, but if one part breaks, everything stops (like old holiday lights). One path only. In a PARALLEL circuit, parts are on separate branches, each with its own path. Current splits, each device gets full voltage, and if one branch breaks, the others keep working. That's why homes are wired in parallel.`,
          vocab: [
            { word: `circuit`,
              definition: `A complete, unbroken loop through which electric current can flow. Break the loop anywhere and the current stops everywhere in it.`,
              audioPrompt: `A circuit, {name}, is a complete, unbroken loop that current can flow around, from a battery, through wires and devices, and back again. The crucial thing is it must be a full loop: break it anywhere, like flipping a switch off, and the flow stops everywhere.` },
            { word: `series circuit`,
              definition: `A circuit where components are connected in a single loop, one after another, so the same current flows through all. If one part breaks, all stop.`,
              audioPrompt: `A series circuit, {name}, connects components one after another in a single loop, so the same current flows through every part. The drawback: if any one part breaks, the whole loop opens and everything stops, like old holiday lights with one dead bulb.` },
            { word: `parallel circuit`,
              definition: `A circuit where components are on separate branches, each with its own path. Each gets full voltage, and if one branch breaks, the others keep working.`,
              audioPrompt: `A parallel circuit, {name}, puts components on separate branches, each with its own path back to the battery. Every device gets the full voltage, and if one branch breaks, the rest keep working, which is exactly why your home is wired this way.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Electricity comes from electric charge, like charges repelling and opposites attracting; moving charge is the real power. Picture water in a pipe: current is the flow of charge (in amps), voltage is the push that drives it (in volts), and resistance is how much a material fights the flow (in ohms), turning electrical energy into heat and light.`,
            `Ohm's law ties them together: voltage equals current times resistance, so more resistance means less current. Current needs a complete circuit, and breaking it anywhere stops the flow. Series circuits share one path (one break stops all); parallel circuits give each device its own branch and full voltage, why homes are wired that way. Above all, electricity carries energy.`,
            `Now the case-study screen makes you the physicist with five puzzles: why a bird perches safely on a high-voltage wire, why old holiday lights all go dark when one bulb dies, why a thin wire glows while thick ones stay cool, why wires are copper inside and rubber outside, and why homes are wired in parallel. Reason with current, voltage, resistance, and circuits.`,
          ],
          image: `/voyager-assets/science/l14-s5-before.webp`,
          imageCaption: `Threads together. Electricity comes from CHARGE, like charges repel, opposites attract, and moving charge is the real power. Picture water in a pipe: CURRENT is the flow of charge (amps), VOLTAGE is the push driving it (volts), RESISTANCE is how much a material fights the flow (ohms), turning electrical energy into heat and light. OHM'S LAW ties them: voltage equals current times resistance. Current needs a complete CIRCUIT, and breaking it anywhere stops the flow. SERIES circuits share one path (one break stops all); PARALLEL circuits give each device its own branch and full voltage, why homes are wired that way. The case-study screen gives five puzzles: the safe bird on a wire, the dead holiday lights, the glowing thin wire, the copper-and-rubber wire, and the parallel home.`,
          vocab: [
            { word: `electrical energy`,
              definition: `Energy carried by moving charge through a circuit, which transforms into light, heat, sound, or motion in the devices it powers.`,
              audioPrompt: `Electrical energy, {name}, is energy carried by moving charge through a circuit, all the way from a power plant to your device. There it transforms into light in a bulb, heat in a toaster, sound in a speaker, or motion in a motor, energy on the move.` },
            { word: `short circuit`,
              definition: `When current finds an unintended low-resistance path, letting a huge current flow. It can overheat wires and cause fires, which fuses and breakers prevent.`,
              audioPrompt: `A short circuit, {name}, happens when current finds an unintended shortcut, a path of very low resistance, so a huge current suddenly flows. That can overheat wires dangerously and even start fires, which is exactly why homes have fuses and circuit breakers.` },
            { word: `grounding`,
              definition: `Providing a safe path for excess or stray current to flow harmlessly into the earth, protecting people and equipment from electric shock.`,
              audioPrompt: `Grounding, {name}, gives stray or excess electric current a safe path to flow harmlessly into the earth, rather than through a person. It's a key safety feature in wiring and appliances, quietly protecting you from dangerous shocks every day.` },
          ],
        },

        {
          id: `l14-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Electricity`,
          intro: `{name}, you're the physicist now. Here are five real puzzles about charge, current, voltage, resistance, and circuits. For each, reason with the water analogy, Ohm's law, and the rules of series and parallel circuits.`,
          cases: [
            {
              id: `c1`,
              title: `The bird on the wire`,
              type: `Voltage and circuits`,
              description: `A small bird perches calmly on a bare, high-voltage power line, thousands of volts coursing through it, and is completely unharmed. Yet that same wire could kill a person instantly. Why is the bird safe on a wire carrying enough voltage to be lethal?`,
              questions: [
                `Why doesn't current flow through the bird?`,
                `What would have to be true for the bird to be electrocuted?`,
                `How does this relate to the need for a complete circuit?`,
              ],
              evaluation: `This puzzle, which surprises almost everyone, beautifully illustrates that voltage alone is not dangerous, what matters is whether current flows through you, which requires a complete circuit and a voltage difference. Here's why the bird is safe. For current to flow through any object (including a bird or a person), two things must be true: there must be a complete path (a circuit) for the current to travel through, and there must be a voltage difference across that object, a difference in electrical "pressure" between two points, to push the current. The bird is sitting with both feet on the same single wire. Both of its feet are at essentially the same voltage, because they're touching the same point in the circuit (the same wire), with only a tiny stretch of wire between them. Since there's almost no voltage difference between the bird's two feet, there's nothing to push current through the bird's body, so virtually no current flows through it. The current in the wire simply continues flowing along its normal, low-resistance path through the copper wire, rather than detouring up through the bird's much-higher-resistance body (which offers a worse path and, crucially, no voltage difference to drive it anyway). The bird is not connected to anything at a different voltage, it isn't touching the ground or another wire, so it never becomes part of a complete circuit. This is the key: the bird is safe not because the voltage is low (it's enormously high) but because the bird isn't bridging a voltage difference and isn't part of a complete circuit. What would have to be true for the bird (or a person) to be electrocuted? The bird would have to create a path for current to flow through its body by touching two points at different voltages. If the bird, while gripping the wire, also touched a grounded pole, a second wire at different voltage, or anything connected to the ground, then suddenly there would be a voltage difference across its body and a complete circuit, current would surge through the bird, and it would be killed instantly. This is exactly what happens to large birds whose wingspan lets them touch two wires at once, and it's why people are in mortal danger near power lines: a person standing on the ground (which is at a very different voltage from the wire) who touches a high-voltage wire completes a circuit, the voltage difference between the wire and the ground drives a large current straight through their body to the earth, with deadly results. This connects directly to the lesson's core idea that current needs a complete circuit: no complete loop, no current flow. The bird sits on a single wire, touching nothing else, so it never closes a loop, and stays perfectly safe despite the thousands of volts all around it. The deep lesson is that electricity harms you only when current flows through you, and that requires both a voltage difference across your body and a complete path, neither of which the perched bird provides. Voltage is potential danger; current through you is actual harm, and the bird, touching only one point of the circuit, gives the current no reason and no route to flow through it at all.`,
            },
            {
              id: `c2`,
              title: `The string that all went dark`,
              type: `Series circuit`,
              description: `An old string of holiday lights stops working entirely, every single bulb is dark. You discover that just one bulb in the middle has burned out, yet somehow that one failure killed the whole string. Modern strings often don't do this. Using circuits, explain why one dead bulb darkened them all.`,
              questions: [
                `How must the bulbs be wired for one failure to kill them all?`,
                `Why does breaking one bulb stop current to every bulb?`,
                `How could the lights be rewired so one failure doesn't darken the rest?`,
              ],
              evaluation: `This common, frustrating experience is a perfect, everyday illustration of how a series circuit works, and why its single shared path is both its defining feature and its great weakness. The bulbs in that old string must be wired in series, connected one after another in a single, continuous loop, so that the same current flows through every bulb in turn, like beads on a single thread. In a series circuit, there is only one path for the current to follow: it must flow through bulb 1, then bulb 2, then bulb 3, and so on, all the way around and back to the source. This is the key to the puzzle. When one bulb burns out, its filament breaks, creating a gap, an open break in the wire. Since there is only one path in a series circuit, and that path now has a gap in it, the circuit is no longer a complete loop. And as the lesson stresses, current can only flow through a complete, unbroken circuit, break the loop anywhere, and the current stops everywhere. So the moment that single bulb's filament breaks, the entire loop is open, no current can flow through any part of it, and every bulb goes dark, even the ones that are perfectly fine. One failure kills them all because they all depend on that single shared path, and a break anywhere in a series circuit breaks it for everyone. (This is the same reason a single open switch can turn off an entire series loop.) How could the lights be rewired so that one failure doesn't darken the rest? By wiring them in parallel instead of in series. In a parallel circuit, each bulb is on its own separate branch, with its own independent path back to the power source. The current splits among the branches, and each bulb gets the full voltage on its own loop. If one bulb burns out and its branch breaks, only that one branch is interrupted, the other branches still form complete loops, so the rest of the bulbs keep glowing. This is exactly why modern holiday lights and, importantly, the wiring in your home are arranged in parallel: it means one failed bulb, one switched-off lamp, or one unplugged appliance doesn't kill everything else. (Clever modern series strings use special bulbs with a "shunt" that closes the gap when a filament breaks, keeping the loop intact, but the fundamental fix is parallel wiring.) The deep lesson is the trade-off between series and parallel: series circuits are simple and use less wire, but share a single fragile path where one break stops all; parallel circuits use more wire but are robust, giving each device its own path and full voltage so failures stay isolated. The dark holiday string is series wiring revealing its Achilles' heel, and the reason your house keeps working when one light bulb dies is parallel wiring doing its job.`,
            },
            {
              id: `c3`,
              title: `The wire that glows`,
              type: `Resistance and heat`,
              description: `Inside a toaster (or an old light bulb), a thin coil or filament glows red- or white-hot and gives off heat and light, while the thick wires leading to it stay cool. They carry the same current. Why does the thin part glow and heat up while the thick wires connecting to it do not?`,
              questions: [
                `Why does the thin filament heat up while the thick wires stay cool?`,
                `How does resistance relate to the heat and light produced?`,
                `What energy transformation is happening in the glowing wire?`,
              ],
              evaluation: `This puzzle gets to the heart of resistance and how it converts electrical energy into heat and light, the principle behind every toaster, heater, incandescent bulb, and electric stove. The key is resistance: how much a material opposes the flow of current. The thin filament or coil is made of a high-resistance material (and being thin increases its resistance further, just as a narrow pipe restricts water flow more than a wide one). The thick connecting wires are made of low-resistance material (typically copper) and are thick, giving them very low resistance. Now, the same current flows through both the thin filament and the thick wires (in a series path, the current must be the same throughout). So why does only the thin part heat up? Because when current flows through a resistance, the resistance converts electrical energy into heat, and the more resistance, the more heat is generated for the same current. As electrons push through the high-resistance filament, they collide constantly with the atoms of the material, transferring energy to them and making those atoms vibrate vigorously, that increased atomic vibration is heat. The filament's high resistance means lots of these energy-transferring collisions, so it heats up dramatically, glowing red-hot, white-hot, or producing the heat that toasts bread. The thick copper wires, with their very low resistance, let electrons pass with few collisions, so they generate very little heat and stay cool. The resistance is deliberately concentrated in the thin filament, so that's where the energy is dissipated. How does resistance relate to the heat and light produced? Directly: heat output rises with resistance (for a given current). Engineers exploit this by making the heating element a high-resistance material, while keeping the supply wires low-resistance so energy is dissipated only where wanted (the toaster coil, the bulb filament) and not wasted, or dangerously, in the wires running through your walls. If the filament gets hot enough, it glows and emits visible light, that's how an old incandescent bulb works: a thin tungsten filament with high resistance is heated by the current until it's white-hot and glows brightly (though most of its energy actually becomes heat, which is why incandescent bulbs are inefficient and were largely replaced by LEDs). What energy transformation is happening? Electrical energy (carried by the moving charge) is being transformed into thermal energy (heat) and, if hot enough, light energy (radiation). This is conservation of energy in action, from the previous lesson: the electrical energy isn't destroyed, it's converted into heat and light. The deep insight is that resistance is not just an obstacle, it's a tool: by concentrating resistance in a specific component, we can deliberately turn electrical energy into useful heat (toasters, heaters, stoves) or light (filament bulbs), exactly where we want it. The thin wire glows precisely because its high resistance makes it the place where electrical energy transforms into heat and light, while the low-resistance thick wires quietly deliver the current without wasting energy along the way.`,
            },
            {
              id: `c4`,
              title: `Copper inside, rubber outside`,
              type: `Conductors and insulators`,
              description: `Look closely at almost any electrical cord: a core of copper wire wrapped in a layer of rubber or plastic. The two materials are chosen on purpose, and swapping them would be useless or deadly. Why is the conducting copper on the inside and the insulating rubber on the outside?`,
              questions: [
                `Why is copper used for the inner wire?`,
                `Why is rubber or plastic used for the outer coating?`,
                `What would happen if the materials were swapped?`,
              ],
              evaluation: `This everyday design, copper core, rubber sheath, is a perfect, practical lesson in the difference between conductors and insulators, and why both are essential to safe, useful electricity. The two materials have opposite electrical properties, and each is placed exactly where its property is needed. Copper is used for the inner wire because it is an excellent conductor, a material with very low resistance, in which electrons flow easily. The whole point of a wire is to carry current from one place to another (from the outlet to your device) with as little loss as possible. A good conductor like copper lets the current flow freely along the wire with minimal resistance, so little energy is wasted as heat in the wire itself and the current reaches the device efficiently. (This is also why the supply wires stay cool, as in the previous case, their low resistance means they don't heat up.) Metals like copper conduct well because they have loosely held outer electrons that are free to move and form a current; copper is chosen specifically because it's an excellent, relatively affordable conductor. Rubber or plastic is used for the outer coating because it is an excellent insulator, a material with extremely high resistance, in which charge cannot easily flow. The insulating sheath does two crucial jobs. First, safety: it prevents the current from flowing out of the wire and into anything (or anyone) that touches the cord. Because the rubber barely conducts, the dangerous current stays trapped inside the copper where it belongs, and when you grip an electrical cord, the insulator stops the current from flowing into your body, protecting you from shock. Second, it prevents short circuits: it keeps the wire from accidentally touching other wires or metal objects and creating unintended paths for the current (which could cause sparks, overheating, or fires). So the copper conducts the current where we want it (through the wire), and the rubber blocks the current from going where we don't want it (into your hand or across to another wire). What would happen if the materials were swapped, rubber inside, copper outside? It would be both useless and deadly. With a rubber (insulating) core, almost no current could flow through the cord at all, the rubber's enormous resistance would block the current, so the device wouldn't work (no current means no power delivered). And with a copper (conducting) coating on the outside, the exposed conductor would carry current on its surface, so anyone touching the cord would complete a circuit and receive a potentially lethal shock, and the bare conductor could easily short against other objects, causing sparks and fires. In short, swapping them would give you a cord that doesn't deliver power and electrocutes whoever touches it, the worst of both worlds. The elegant design, conductor inside to carry the current efficiently, insulator outside to contain it safely, is a direct application of understanding conductors and insulators. It's why every safe electrical cord, cable, and wire in your home follows this exact pattern: the right material in the right place, conductors guiding the current and insulators keeping it contained and people protected. Understanding resistance, conductors, and insulators isn't abstract, it's literally what keeps electricity useful and keeps you alive.`,
            },
            {
              id: `c5`,
              title: `Why your house is parallel`,
              type: `Parallel circuit`,
              description: `Every outlet and light in your home receives the same full voltage, you can run a lamp, a microwave, and a phone charger at once, each working properly, and switching off one doesn't affect the others. This only works because homes are wired in parallel, not series. Explain why parallel wiring is essential for a home.`,
              questions: [
                `Why must each device receive the full voltage to work properly?`,
                `What would go wrong if a house were wired in series instead?`,
                `Why does switching off one device not affect the others in parallel?`,
              ],
              evaluation: `This puzzle ties together everything about series and parallel circuits and reveals why the choice of wiring is one of the most important practical decisions in electrical engineering, one that affects every building you've ever been in. Homes are wired in parallel because parallel circuits give every device its own independent branch and path back to the source, which provides three essential benefits: each device gets the full voltage, devices can be switched on and off independently, and one failure doesn't disable everything else. Let's take each part. Why must each device receive the full voltage to work properly? Because appliances are designed to operate at a specific voltage (in much of the world, household outlets supply a standard voltage, and devices are built for it). A lamp, a microwave, and a charger each need that full standard voltage to function correctly. In a parallel circuit, each branch connects directly across the full voltage source, so every device on its own branch receives the complete voltage, exactly what it's designed for. The current splits among the branches (each device draws the current it needs), but the voltage across each branch is the full supply voltage. This is why you can plug in many different devices and each works properly. What would go wrong if a house were wired in series instead? Several disasters. In a series circuit, all devices share a single loop, so the supply voltage would be divided among all the devices on the loop, each device would get only a fraction of the voltage, not the full amount it needs, so nothing would work properly (lights would be dim, appliances would malfunction or not run at all), and the amount each got would change every time you added or removed a device. Worse, because a series circuit has only one path, if any single device failed or was switched off, or if you unplugged one appliance, the entire circuit would break and everything in the house would shut off at once (exactly like the dead holiday-light string). You couldn't turn off one light without killing all of them; you couldn't unplug the toaster without darkening the whole house. Series wiring for a home would be unusable. Why does switching off one device not affect the others in parallel? Because in a parallel circuit, each device is on its own separate branch with its own complete path back to the source. Turning off (or unplugging, or having a failure in) one branch only breaks that one branch's loop, the other branches remain complete, independent circuits, so current keeps flowing through them and those devices keep working. Each branch is electrically independent. This is precisely why you can switch off a bedroom light while the kitchen stays lit, run the microwave without affecting the Wi-Fi, and unplug a charger without any other device noticing. The deep lesson is the powerful trade-off between the two circuit types applied to real life: parallel wiring uses more wire and is more complex, but it delivers full voltage to every device, allows independent control, and isolates failures, all essential for a functioning building. Series wiring is simpler and uses less wire, but it divides the voltage, makes devices interdependent, and lets a single failure disable everything, fine for some simple applications, but completely unsuitable for a home. So the next time you flip one light switch and the rest of the house stays on, you're witnessing parallel circuits doing exactly the job they're chosen for: keeping every device fully powered, independently controllable, and protected from one another's failures. The architecture of every electrified building rests on this single, crucial understanding of how parallel circuits work.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, explain current, voltage, and resistance using the water analogy, and state Ohm's law. Why does electricity need a complete circuit, and why are homes wired in parallel rather than series? Which case cleared up the most confusion for you? In 5-6 sentences.`,
          reflectionPrompt: `Almost the entire modern world, light, screens, hospitals, the internet, runs on the organized flow of invisible electrons through wires. How does it feel to understand the unseen current humming through every device around you right now?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the basic rule about electric charges?`,
              options: [
                `All charges always attract every other charge nearby.`,
                `Like charges repel, and opposite charges attract.`,
                `Charges have no effect on each other at all.`,
                `Like charges attract, and opposite charges repel.`,
              ],
              correctIndex: 1,
              explanation: `Like charges repel (push apart) and opposite charges attract (pull together); this electric force drives all of electricity. The distractors claim universal attraction, no effect, or reverse the rule.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `In the water analogy, what does electric current correspond to?`,
              options: [
                `The pressure that pushes the water through the pipe.`,
                `The narrowness of the pipe restricting the flow.`,
                `The flow of water, how much passes a point each second.`,
                `The height of the water tower above the ground.`,
              ],
              correctIndex: 2,
              explanation: `Current is the flow of charge (how much passes a point each second), like the flow rate of water. The distractors describe voltage (pressure/height) and resistance (narrowness).`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is voltage?`,
              options: [
                `The electrical push or pressure that drives current through a circuit.`,
                `The actual flow of electrons moving through a wire.`,
                `The opposition a material offers to the flow of current.`,
                `The total heat that a resistor gives off while working.`,
              ],
              correctIndex: 0,
              explanation: `Voltage is the electrical push or pressure (like water pressure) that drives current, measured in volts. The distractors describe current, resistance, and heat output instead.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does Ohm's law state?`,
              options: [
                `Current is always exactly equal to resistance.`,
                `Voltage equals current times resistance.`,
                `Voltage and current have nothing to do with each other.`,
                `Resistance always equals voltage plus current.`,
              ],
              correctIndex: 1,
              explanation: `Ohm's law: voltage equals current times resistance, linking the three quantities so more resistance means less current for a given voltage. The distractors misstate or invent the relationship.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the difference between a conductor and an insulator?`,
              options: [
                `A conductor blocks current; an insulator lets current flow easily.`,
                `Both conductors and insulators block current completely.`,
                `A conductor lets current flow easily; an insulator blocks it.`,
                `There is no real difference between the two materials.`,
              ],
              correctIndex: 2,
              explanation: `A conductor (like copper) has low resistance and lets current flow easily; an insulator (like rubber) has very high resistance and blocks it. The distractors reverse the roles or deny the difference.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does a thin filament in a bulb glow and heat up while the thick wires stay cool?`,
              options: [
                `The thin filament has high resistance, converting electrical energy into heat and light.`,
                `The thick wires carry far more current than the thin filament does.`,
                `The thin filament is made of a special material that creates new energy.`,
                `The thick wires are simply too far away from the power source.`,
              ],
              correctIndex: 0,
              explanation: `The thin filament's high resistance converts electrical energy into heat and light as current pushes through, while the low-resistance thick wires stay cool. The distractors misstate the current, invent created energy, or blame distance.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does an old string of holiday lights all go dark when one bulb burns out?`,
              options: [
                `The bulbs are wired in parallel, so each has its own path.`,
                `The bulbs are wired in series, so one break opens the whole loop.`,
                `Burning out one bulb permanently destroys all the others.`,
                `The power company shuts off the whole house automatically.`,
              ],
              correctIndex: 1,
              explanation: `In a series circuit there's only one path, so one burned-out bulb breaks the single loop and stops current everywhere. The distractors confuse it with parallel wiring, claim destruction, or blame the power company.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is a home wired in parallel rather than in series?`,
              options: [
                `So that the whole house shuts off whenever one device fails.`,
                `So that each device gets only a small fraction of the voltage.`,
                `So that less wire is needed than any other arrangement.`,
                `So each device gets full voltage and works independently of the others.`,
              ],
              correctIndex: 3,
              explanation: `Parallel wiring gives each device its own branch with full voltage and independent operation, so one failure or switch doesn't affect the rest. The distractors describe the failures of series wiring instead.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A bird can perch safely on a single high-voltage power line because what actually harms you is current flowing through your body, which requires both a voltage difference across you and a complete circuit.`,
              correctAnswer: true,
              explanation: `True, and understanding why is one of the most important and counterintuitive ideas in all of electricity, the distinction between voltage being present and current actually flowing through you. It is the current flowing through a body, not merely the presence of high voltage nearby, that causes electrical harm. And for current to flow through any object, two conditions must both be met: there must be a complete path (a circuit) for the current to travel through that object, and there must be a voltage difference across the object, a difference in electrical "pressure" between two points of contact, to push the current along. The bird sits with both feet on the same single wire. Because both feet touch the same wire at nearly the same point, both feet are at essentially the same voltage, there is virtually no voltage difference between them. With no voltage difference across the bird's body, there is nothing to push current through it, so essentially no current flows through the bird, even though the wire itself is at thousands of volts. The current in the wire simply continues along its easy, low-resistance copper path rather than detouring up through the bird's high-resistance body, for which there's no voltage difference to drive it anyway. Crucially, the bird is not touching anything at a different voltage, not the ground, not a second wire, so it never becomes part of a complete circuit; the loop is never closed through the bird. This is exactly why the bird is safe: it isn't bridging a voltage difference and isn't completing a circuit, so no harmful current passes through it. For the bird (or a person) to be electrocuted, it would have to touch two points at different voltages simultaneously, for example, the wire and the ground, or two different wires, which would create a voltage difference across its body and a complete path for current to surge through it. This is precisely why a person standing on the ground is in mortal danger if they touch a high-voltage wire: their body would bridge the huge voltage difference between the wire and the ground, completing a circuit and driving a deadly current through them to the earth. It's also why large birds with wide wingspans can be electrocuted if they touch two wires at once. The deep lesson connects directly to the principle that current requires a complete circuit and a voltage difference: voltage represents potential danger, but actual harm comes only when current flows through you, and that needs both a closed loop and a difference in voltage across your body. The perched bird, touching only one point of the circuit, provides neither, and so remains completely safe amid thousands of volts. So the statement is true.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Electricity is just dangerous, mysterious stuff. There's no way to predict how much current will flow in a circuit, you just have to test it and hope." Using the lesson, what's the best response?`,
              options: [
                `The student is right; current flow is fundamentally unpredictable.`,
                `Current can only ever be discovered by trial and error in real circuits.`,
                `Current is highly predictable: by Ohm's law, voltage equals current times resistance, so if you know the voltage (the push) and the resistance (the opposition), you can calculate exactly how much current will flow, which is precisely how engineers design every circuit on purpose rather than by guessing.`,
                `Electricity follows no laws, so each circuit behaves completely at random.`,
              ],
              correctIndex: 2,
              explanation: `Far from unpredictable, current obeys Ohm's law: voltage equals current times resistance. Knowing the voltage and resistance lets you calculate the current exactly, which is how engineers design circuits deliberately. The distractors endorse the "mysterious, random" misconception that the lesson directly overturns.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-invisible`, category: `The invisible flow`, prompt: `Almost the entire modern world runs on the organized flow of invisible electrons through wires. How does it feel to understand the unseen current humming through every device around you right now?` },
            { id: `reflect-water`, category: `A picture for the unseen`, prompt: `The water-in-a-pipe analogy turns invisible electricity into something you can picture clearly. Where else in your life might finding the right analogy turn something baffling into something obvious?` },
            { id: `reflect-safety`, category: `Voltage versus current`, prompt: `The bird on the wire shows that danger isn't about voltage being present, but about current flowing through you. Does it change anything to realize that the real risk is often not the obvious one?` },
            { id: `reflect-heritage`, category: `Teaching electricity`, prompt: `Caro, you're building science for conscious families. How would you help a child feel how a circuit works, using a battery, a bulb, and a switch, so they truly grasp that current needs a complete loop?` },
            { id: `reflect-control`, category: `Predictable, not mysterious`, prompt: `Electricity seems mysterious, yet Ohm's law makes it perfectly predictable and designable. What does it stir in you that something so powerful can be tamed by one simple equation?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Most people use electricity all day while believing it's unpredictable, dangerous magic. What does it teach you that understanding a few simple rules can replace fear and superstition with genuine, useful knowledge?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Circuit Builders`,
            duration: `One afternoon`,
            description: `Turn an afternoon into hands-on electricity, where invisible current becomes something you can build, control, and understand. (Use only safe, low-voltage batteries, never household outlets.) Start with a simple circuit: with a battery, a small bulb or LED, and wires, connect them into a complete loop and watch the bulb light, then break the loop (disconnect one wire) and see it go dark instantly, proving current needs a complete circuit. Add a switch (even a paper clip and two fasteners) and feel how opening and closing the loop turns the light on and off. Explore voltage by using one battery, then two in a row (series), and see the bulb glow brighter with more "push." Explore the series-versus-parallel difference directly: wire two bulbs in series (one after another in a single loop) and notice they're dimmer and that unscrewing one kills both; then wire two bulbs in parallel (each on its own branch) and see that they're brighter and that removing one leaves the other glowing, exactly how your house works. Investigate conductors and insulators: build a circuit with a gap, then bridge the gap with different objects (a metal spoon, a coin, a rubber band, a plastic ruler, a pencil "lead," a wet versus dry paper towel) and see which complete the circuit (conductors) and which don't (insulators). Feel resistance and heat safely by noticing how a battery can get slightly warm, and discuss how a toaster's coils and a bulb's filament are high-resistance parts that turn electricity into heat and light. Go on a house tour spotting electricity at work: every outlet and switch (parallel wiring), the copper-and-rubber cords (conductor inside, insulator outside), the watt ratings on bulbs and appliances (power), and the circuit breaker box (safety against short circuits). The goal is to transform electricity from mysterious, scary "stuff" into something your family understands and can reason about, current flowing in complete loops, driven by voltage, shaped by resistance, arranged in circuits, exactly as physicists and electricians see it.`,
          },
          projectOption: {
            title: `The Circuit Engineering Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Design, build, and explain working circuits that demonstrate the principles of electricity, becoming an electrical engineer who makes invisible current do useful work. (Use only safe, low-voltage batteries and components, never household current.) Week 1, build and explore: using a battery, bulbs or LEDs, wires, switches, and perhaps a small motor or buzzer, build a series of circuits that demonstrate the key ideas, a simple complete circuit, a switch controlling a light, a series circuit (and show how one break stops all), and a parallel circuit (and show how branches work independently and get full voltage). Document each with a diagram and a clear explanation of how current flows. Explore conductors and insulators by testing which materials complete a circuit. If you can, use a multimeter (or reason it out) to explore how voltage and resistance affect current, connecting to Ohm's law. Week 2, design and build something useful or clever: create a project that applies what you've learned, a quiz board (matching questions to answers completes a circuit and lights a bulb), a simple burglar alarm (breaking a circuit triggers a buzzer), a model house wired in parallel with independently switchable rooms, a steady-hand "wire loop" game, or a homemade flashlight. As you design, make deliberate engineering choices and explain them with the physics: why you wired it in parallel, why you placed the switch where you did, why you used certain materials as conductors or insulators, how resistance shapes the behavior. Produce your final piece, a demonstration video with narration, a slide deck, or a lab-report-style writeup, that shows your circuits and project, includes clear circuit diagrams, and explains how current, voltage, resistance, complete circuits, and series-versus-parallel wiring make it all work. The aim is to experience electricity as engineers do: not as mysterious or random, but as a precise, controllable flow of charge that, once understood, you can shape into lights, alarms, games, and machines, the same understanding that built the entire electrified world.`,
            offerToParent: `Parent: opt your child into the Circuit Engineering Project (using only safe, low-voltage batteries, never household outlets). Building real circuits, a complete loop, a switch, series and parallel arrangements, then designing something useful like a quiz board or alarm, directly develops the core NGSS concepts of electric current, voltage, resistance, Ohm's law, complete circuits, and the crucial difference between series and parallel wiring. Making invisible electricity visible and controllable, testing conductors and insulators, and explaining deliberate design choices with physics builds engineering design, circuit literacy, troubleshooting, and scientific reasoning, while replacing fear of electricity with genuine understanding. It's rigorous, hands-on, standards-aligned work that mirrors how real electrical engineers think.`,
          },
          identityQuestion: `If you become someone who understands the invisible current flowing through every wire and device, who can build a circuit, reason with Ohm's law, and see exactly why a bird is safe or a house stays lit, what kind of thinker does that make you, a person who comprehends the unseen electrical force that powers the entire modern world, that someone who treats electricity as mysterious, frightening magic never can?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands the invisible current in every wire and device.`,
            `A thinker who can build a circuit and predict it with Ohm's law.`,
            `Someone who sees electricity as understandable, not mysterious magic.`,
          ],
          saveKey: `identity_responses_sci_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteen lessons in, and you've demystified the force that powers the entire modern world: electricity. You learned that it all begins with electric charge, like charges repelling, opposites attracting, and that the real power comes from moving charge. Using the beautiful water-in-a-pipe analogy, you came to understand current (the flow of charge, in amps), voltage (the push or pressure that drives it, in volts), and resistance (how much a material fights the flow, in ohms, turning electrical energy into heat and light). You tied them together with Ohm's law, voltage equals current times resistance, one of the most useful relationships in all of physics, which makes electricity predictable rather than mysterious. You learned that current needs a complete circuit, that breaking the loop anywhere stops the flow, and the crucial difference between series circuits (one shared path, where one break stops all) and parallel circuits (independent branches, each with full voltage), which is exactly why your home is wired in parallel. As a physicist, you reasoned through real puzzles: why a bird is safe on a high-voltage wire, why old holiday lights all go dark together, why a thin wire glows while thick ones stay cool, why cords are copper inside and rubber outside, and why homes are wired in parallel. You now understand the invisible current humming through every device around you. Next, we explore another form of energy that travels in a completely different way, not through wires, but as waves: light, sound, and the entire electromagnetic spectrum. Onward, {name}. — Cosmo`,
          badge: `circuit-master`,
          badgeName: `Circuit Master`,
          xpEarned: 75,
          competencies: [
            `Understands electric charge and the rule that like charges repel, opposites attract`,
            `Uses the water analogy to grasp current (flow), voltage (push), and resistance (opposition)`,
            `Applies Ohm's law: voltage equals current times resistance`,
            `Knows that current requires a complete circuit and that breaking it stops the flow`,
            `Distinguishes series circuits (one shared path) from parallel circuits (independent branches)`,
            `Explains conductors, insulators, and how resistance converts electrical energy to heat and light`,
            `Understands electrical safety, including why a bird on a wire is unharmed`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Physics — Waves: Light, Sound, and the Electromagnetic Spectrum`,
            hook: `How energy travels as waves, from the sound in your ears to the light in your eyes and far beyond. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
