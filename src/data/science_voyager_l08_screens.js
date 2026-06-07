// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L08 — Chemistry: Thermodynamics — Energy in Reactions
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS1, HS-PS3 (Chemical Reactions, Energy)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l08-v1";

const SCIENCE_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-08`,
      title: `Chemistry: Thermodynamics — Energy in Reactions`,
      duration: 35,
      xpReward: 75,
      badge: `energy-tracker`,
      badgeName: `Energy Tracker`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, why does a fire feel hot? Why does an instant cold pack turn icy when you snap it? Why do some chemical reactions release energy while others absorb it? These are thermodynamic questions — questions about energy flow in chemical systems. The answers connect to everything from how your body extracts energy from food to why some industrial processes are economically viable and others aren't.`,
          headline: `Chemistry: Thermodynamics — Energy in Reactions`,
          subtitle: `Why some reactions release heat and others absorb it, and what drives change. A Case Study.`,
          visual: `/voyager-assets/science/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Every Reaction Is An Energy Story`,
          paragraphs: [
            `Chemistry isn't only about which atoms combine, it's also about energy. Every chemical reaction involves a change in energy, and tracking that energy explains why reactions feel hot or cold, why some happen easily and others don't, and ultimately why change happens at all. This study of energy and its flow is called thermodynamics.`,
            `Reactions come in two energy flavors. Some release energy to their surroundings, we feel this as heat or see it as light. A fire, an explosion, and your own body warming you are all reactions releasing energy. These are called exothermic ("exo" meaning out): energy flows out of the reaction into the world.`,
            `Other reactions absorb energy from their surroundings, which makes them feel cold, they pull heat out of their environment. An instant cold pack that turns icy when snapped is doing exactly this. These are called endothermic ("endo" meaning in): energy flows into the reaction from the world. Every reaction is one or the other.`,
          ],
          image: `/voyager-assets/science/l08-s1-story.webp`,
          imageCaption: `Chemistry isn't only about which atoms combine, it's about ENERGY. Every reaction involves an energy change, and tracking it explains why reactions feel hot or cold, why some happen easily, and why change happens at all. This study is THERMODYNAMICS. Reactions come in two flavors. Some RELEASE energy to their surroundings, felt as heat or seen as light: a fire, an explosion, your own body warming you. These are EXOTHERMIC (exo means out), energy flows out into the world. Others ABSORB energy from their surroundings, making them feel cold as they pull heat in, like an instant cold pack turning icy when snapped. These are ENDOTHERMIC (endo means in), energy flows into the reaction from the world. Every reaction is one or the other.`,
          vocab: [
            { word: `thermodynamics`,
              definition: `The study of energy and how it flows and transforms. In chemistry, it explains the energy changes that drive reactions.`,
              audioPrompt: `Thermodynamics, {name}, is the study of energy, how it flows, transforms, and spreads out. In chemistry, it explains the energy changes behind every reaction, and ultimately why change happens at all.` },
            { word: `exothermic`,
              definition: `Describes a reaction that releases energy to its surroundings, felt as heat or seen as light. "Exo" means energy flows out.`,
              audioPrompt: `Exothermic, {name}, describes a reaction that releases energy to its surroundings, which we feel as heat or see as light. The "exo" means out: energy flows out of the reaction into the world, like a fire.` },
            { word: `endothermic`,
              definition: `Describes a reaction that absorbs energy from its surroundings, making it feel cold. "Endo" means energy flows in.`,
              audioPrompt: `Endothermic, {name}, describes a reaction that absorbs energy from its surroundings, which makes it feel cold. The "endo" means in: energy flows into the reaction from the world, like an instant cold pack.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Energy Lives In Chemical Bonds`,
          paragraphs: [
            `Where does this energy come from and go? It's stored in chemical bonds, the connections between atoms you learned about. Bonds are like tiny springs holding energy. Two facts govern everything: breaking bonds requires energy (you must put energy in to pull atoms apart), and forming bonds releases energy (atoms snapping together give energy back).`,
            `So every reaction is a two-step energy accounting. First, old bonds in the reactants break (costing energy). Then new bonds form in the products (releasing energy). Whether the reaction is exothermic or endothermic comes down to the balance: does forming the new bonds release more energy than breaking the old ones cost, or less?`,
            `If forming the new bonds releases more energy than breaking the old ones used, there's energy left over, released to the surroundings: exothermic. If forming the new bonds releases less than breaking cost, the reaction must pull in extra energy from the surroundings to proceed: endothermic. The energy isn't created or destroyed, just shifted between bonds and surroundings.`,
          ],
          image: `/voyager-assets/science/l08-s2-bonds.webp`,
          imageCaption: `Where does the energy come from and go? It's stored in CHEMICAL BONDS, the connections between atoms. Bonds are like tiny springs holding energy. Two facts govern everything: BREAKING bonds requires energy (you put energy in to pull atoms apart), and FORMING bonds releases energy (atoms snapping together give energy back). So every reaction is two-step energy accounting: old bonds in the reactants break (costing energy), then new bonds form in the products (releasing energy). Exothermic or endothermic comes down to the BALANCE. If forming new bonds releases MORE than breaking the old cost, energy is left over and released, EXOTHERMIC. If it releases LESS, the reaction must pull energy in from the surroundings, ENDOTHERMIC. Energy isn't created or destroyed, just shifted.`,
          vocab: [
            { word: `chemical bond energy`,
              definition: `The energy stored in the bonds between atoms. Breaking bonds requires energy; forming bonds releases it.`,
              audioPrompt: `Chemical bond energy, {name}, is the energy stored in the connections between atoms. The key rule: breaking a bond requires putting energy in, while forming a bond releases energy back out.` },
            { word: `breaking vs. forming bonds`,
              definition: `Breaking bonds always costs energy; forming bonds always releases it. The balance between the two decides if a reaction is exothermic or endothermic.`,
              audioPrompt: `Breaking versus forming bonds, {name}: breaking a bond always costs energy, while forming a bond always releases it. The balance between these two decides whether a reaction gives off heat or absorbs it.` },
            { word: `conservation of energy`,
              definition: `Energy is never created or destroyed, only transferred or transformed. In reactions, it shifts between chemical bonds and the surroundings.`,
              audioPrompt: `Conservation of energy, {name}, means energy is never created or destroyed, only moved or transformed. In a reaction, energy simply shifts between the chemical bonds and the surroundings, the books always balance.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Hill Before The Reaction`,
          paragraphs: [
            `Here's a puzzle: a log can sit in oxygen-rich air for years without bursting into flame, even though burning releases huge energy. If the reaction releases energy, why doesn't it just happen? The answer is that almost every reaction has an energy barrier to get started, called the activation energy.`,
            `Think of a boulder resting in a small dip near the top of a hill. It would release energy by rolling down the far side, but first it must be pushed up and over the lip of the dip. That initial push is the activation energy: the energy needed to break the first bonds and get the reaction going, even for a reaction that will release energy overall.`,
            `This explains so much. A match must be struck (friction gives the activation energy) before the wood burns. Gasoline needs a spark. Once started, an exothermic reaction often releases enough energy to keep itself going. And catalysts, like the enzymes in your body, work by lowering the activation energy, making reactions happen faster or at lower temperatures.`,
          ],
          image: `/voyager-assets/science/l08-s3-hill.webp`,
          imageCaption: `A puzzle: a log sits in oxygen-rich air for years without burning, though burning releases huge energy. If it releases energy, why doesn't it just happen? Almost every reaction has an energy barrier to start, the ACTIVATION ENERGY. Picture a boulder in a small dip near a hill's top: it would release energy rolling down the far side, but first it must be pushed up over the lip. That push is the activation energy, the energy to break the first bonds and get going, even for a reaction that releases energy overall. So a match must be STRUCK (friction supplies activation energy) before wood burns; gasoline needs a spark. Once started, an exothermic reaction often releases enough to keep itself going. And CATALYSTS, like the enzymes in your body, lower the activation energy, speeding reactions up.`,
          vocab: [
            { word: `activation energy`,
              definition: `The initial energy needed to start a reaction by breaking the first bonds, even for reactions that release energy overall. It's the barrier to getting going.`,
              audioPrompt: `Activation energy, {name}, is the initial push a reaction needs to get started, the energy to break the first bonds. Even a reaction that releases energy overall needs this barrier crossed first, which is why a match must be struck.` },
            { word: `catalyst`,
              definition: `A substance that speeds up a reaction by lowering its activation energy, without being used up itself. Enzymes are biological catalysts.`,
              audioPrompt: `A catalyst, {name}, is a substance that speeds up a reaction by lowering its activation energy, the barrier to starting, without being used up itself. The enzymes in your body are biological catalysts doing exactly this.` },
            { word: `enzyme`,
              definition: `A protein that acts as a biological catalyst, lowering activation energy so the reactions of life can happen fast enough at body temperature.`,
              audioPrompt: `An enzyme, {name}, is a protein that works as a biological catalyst. It lowers the activation energy of a reaction so the chemistry of life can run fast enough at your body's gentle temperature, without needing a flame.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Entropy: The Universe's Direction`,
          paragraphs: [
            `Energy alone doesn't fully explain why change happens. There's a second, profound idea: entropy, a measure of disorder or how spread-out energy and matter are. The famous second law of thermodynamics says that in the universe as a whole, entropy always increases: things naturally tend toward more disorder and more spreading-out.`,
            `You see entropy everywhere. Heat always flows from hot to cold, never the reverse on its own. A drop of dye spreads through water but never gathers back into a drop. A sandcastle crumbles; it never assembles itself from scattered sand. Order requires effort to create and maintain; disorder happens for free. That's the arrow of time.`,
            `Both energy and entropy decide which way a reaction naturally goes. Reactions tend to proceed when they release energy AND increase disorder. This is why your body must constantly eat, you're a pocket of incredible order, and maintaining that order against entropy's pull requires a ceaseless input of energy. Stop fueling the order, and entropy wins. It always, eventually, wins.`,
          ],
          image: `/voyager-assets/science/l08-s4-entropy.webp`,
          imageCaption: `Energy alone doesn't fully explain why change happens. A second profound idea: ENTROPY, a measure of disorder, of how spread-out energy and matter are. The famous SECOND LAW of thermodynamics says that in the universe as a whole, entropy always INCREASES: things naturally tend toward more disorder and spreading-out. You see it everywhere: heat flows hot to cold, never the reverse on its own; a drop of dye spreads through water but never re-gathers; a sandcastle crumbles but never assembles itself. Order takes effort; disorder happens for free, that's the arrow of time. Both energy and entropy decide which way reactions go: they tend to proceed when they release energy AND increase disorder. It's why your body must constantly EAT, you're a pocket of order, and maintaining it against entropy requires ceaseless energy.`,
          vocab: [
            { word: `entropy`,
              definition: `A measure of disorder, of how spread-out energy and matter are. The universe's total entropy always tends to increase.`,
              audioPrompt: `Entropy, {name}, is a measure of disorder, of how spread-out energy and matter are. The deep law of thermodynamics is that the total entropy of the universe always tends to increase, things drift toward disorder.` },
            { word: `second law of thermodynamics`,
              definition: `The principle that the total entropy (disorder) of the universe always increases over time. It gives time its forward direction.`,
              audioPrompt: `The second law of thermodynamics, {name}, says the total entropy, the disorder, of the universe always increases over time. It's why heat flows from hot to cold and why broken things never fix themselves for free.` },
            { word: `the arrow of time`,
              definition: `The one-way direction of time, explained by entropy always increasing. It's why the past and future feel so different.`,
              audioPrompt: `The arrow of time, {name}, is the one-way direction time flows, and entropy explains it. Because disorder always increases, a movie of crumbling or spreading looks normal forward but absurd in reverse. That's time's arrow.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Every reaction is an energy story. Exothermic reactions release energy (feeling hot); endothermic ones absorb it (feeling cold). The energy lives in chemical bonds: breaking bonds costs energy, forming bonds releases it, and the balance decides which way the heat flows, with energy always conserved, never created or destroyed.`,
            `Almost every reaction needs activation energy, an initial push to break the first bonds, which is why a log needs a spark; catalysts and enzymes work by lowering that barrier. And beyond energy, entropy, the universe's relentless drift toward disorder, helps decide which way change naturally flows, and is why maintaining order (like a living body) demands constant energy.`,
            `Now the case-study screen makes you the thermodynamicist, with five puzzles: why a fire is hot and self-sustaining, why a cold pack turns icy, why a log won't burn without a spark, why your body must eat constantly, and why a messy room never tidies itself. For each, reason with energy, bonds, activation energy, and entropy. Onward.`,
          ],
          image: `/voyager-assets/science/l08-s5-before.webp`,
          imageCaption: `Threads together. Every reaction is an ENERGY story. EXOTHERMIC reactions release energy (feeling hot); ENDOTHERMIC ones absorb it (feeling cold). Energy lives in CHEMICAL BONDS: breaking costs energy, forming releases it, and the balance decides the heat flow, energy always conserved. Almost every reaction needs ACTIVATION ENERGY, an initial push, which is why a log needs a spark; CATALYSTS and enzymes lower that barrier. And beyond energy, ENTROPY, the universe's drift toward disorder, helps decide which way change flows, and is why maintaining order demands constant energy. The case-study screen makes you the thermodynamicist with five puzzles: a hot self-sustaining fire, an icy cold pack, the log that needs a spark, why your body must eat, and why a messy room never tidies itself.`,
          vocab: [
            { word: `system and surroundings`,
              definition: `The system is the reaction itself; the surroundings are everything around it. Energy flows between them, defining exothermic and endothermic.`,
              audioPrompt: `System and surroundings, {name}: the system is the reaction itself, and the surroundings are everything around it. Energy flowing out from system to surroundings is exothermic; flowing in is endothermic.` },
            { word: `heat`,
              definition: `Energy transferred because of a temperature difference. It always flows from hotter to cooler on its own, an example of entropy at work.`,
              audioPrompt: `Heat, {name}, is energy transferred because of a temperature difference. On its own it always flows from hotter to cooler, never the reverse, which is actually entropy, the drift toward spread-out energy, in action.` },
            { word: `order requires energy`,
              definition: `Because entropy naturally increases, creating and maintaining order (like a living body) always requires a continuous input of energy.`,
              audioPrompt: `Order requires energy, {name}: because entropy naturally increases, building and maintaining order always costs a continuous input of energy. It's why you must eat constantly to stay alive, you're holding back disorder.` },
          ],
        },

        {
          id: `l08-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Energy And Change`,
          intro: `{name}, you're the thermodynamicist now. Here are five real puzzles about energy and why things change. For each, reason with bonds, activation energy, exothermic versus endothermic, and entropy.`,
          cases: [
            {
              id: `c1`,
              title: `Why a fire is hot, and keeps burning`,
              type: `Exothermic reaction`,
              description: `Strike a match to a log and it bursts into flame, giving off intense heat and light. Once lit, it keeps burning on its own until the wood is gone. Explain, in energy terms, why fire is hot and why it sustains itself once started.`,
              questions: [
                `In bond terms, why does burning release so much energy?`,
                `Why does the fire feel hot, where does the energy go?`,
                `Why does the fire keep going once it's lit?`,
              ],
              evaluation: `Fire is the classic exothermic reaction, and the bond accounting explains it. When wood burns, its carbon and hydrogen combine with oxygen from the air. In the process, the old bonds in the wood and oxygen break (costing energy), and new bonds form in the products, carbon dioxide and water (releasing energy). The key is the balance: forming those new bonds releases far more energy than breaking the old ones cost. That leftover energy is released to the surroundings as heat and light, which is exactly why a fire is hot and bright, and why it's exothermic (energy flowing out of the reaction into the world). Where does the energy go? Into the surrounding air, objects, and your skin, as heat (and out as light), raising their temperature. Now the self-sustaining part: a log doesn't burn on its own because the reaction first needs activation energy, the initial push to break those first bonds. Striking the match supplies it (friction makes heat). Here's the elegant part: because burning is so strongly exothermic, the heat it releases is more than enough to supply the activation energy for the neighboring unburned wood, igniting it in turn. So once started, the fire's own released energy keeps pushing the reaction over its activation barrier in fresh fuel, a self-sustaining chain that continues until the wood (or oxygen) runs out. This is why you only need one match: you provide the initial activation energy once, and the exothermic reaction then powers its own continuation. Fire beautifully unites both big ideas, the energy released by forming bonds, and the activation barrier that must first be crossed.`,
            },
            {
              id: `c2`,
              title: `The cold pack that turns icy`,
              type: `Endothermic reaction`,
              description: `A first-aid instant cold pack is at room temperature until you snap it, mixing the chemicals inside. Within seconds it turns icy cold, useful for an injury. No freezer, no ice, yet it gets cold. Where does the cold "come from"?`,
              questions: [
                `Is the cold pack releasing or absorbing energy? How do you know?`,
                `Where does the "cold" actually come from?`,
                `How is this the opposite of the fire?`,
              ],
              evaluation: `The cold pack is a perfect example of an endothermic reaction, and it reveals a subtle truth: "cold" isn't a thing that's created, it's energy being removed. When you snap the pack, the chemicals mix and react. For this particular reaction, breaking the old bonds costs more energy than forming the new bonds releases, so the reaction has an energy deficit, it needs extra energy to proceed. It gets that energy by absorbing it from its surroundings, namely the pack itself, your hand, and the injured area. This is endothermic: energy flows into the reaction from the world. So the "cold" doesn't come from nowhere; the reaction is pulling heat energy out of its surroundings to feed itself, and when heat leaves your skin and the pack, the temperature drops, you feel cold. There's no cold being made; there's warmth being drawn away. This is the exact opposite of the fire. The fire is exothermic: forming bonds releases more energy than breaking them costs, so surplus energy flows out as heat and it feels hot. The cold pack is endothermic: forming bonds releases less than breaking costs, so the reaction draws energy in, and the surroundings feel cold. Both obey conservation of energy, the energy isn't created or destroyed in either case, just transferred. In the fire, chemical bond energy is released to the surroundings; in the cold pack, energy is pulled from the surroundings into the chemical bonds. The pair makes the whole idea click: every reaction either releases or absorbs energy, depending purely on the bond-energy balance, and we feel that as hot or cold.`,
            },
            {
              id: `c3`,
              title: `The log that won't burn by itself`,
              type: `Activation energy`,
              description: `A dry log can sit surrounded by oxygen-rich air for years and never catch fire on its own, even though burning would release enormous energy. Yet one small match sets it ablaze. Why doesn't the energy-releasing reaction just happen spontaneously?`,
              questions: [
                `If burning releases energy, why doesn't the log just ignite on its own?`,
                `What does the match actually provide?`,
                `Why does one small match unleash so much larger an effect?`,
              ],
              evaluation: `This puzzle gets at activation energy, the crucial idea that a reaction releasing energy overall still needs an initial energy investment to begin. The log doesn't ignite on its own because, even though burning is strongly exothermic (it would release far more energy than it consumes), the reaction first has to break the initial bonds in the wood and oxygen molecules to get started, and that requires an upfront input of energy: the activation energy. Picture the boulder in a dip near a hilltop, it would release energy rolling down the far side, but it can't until something pushes it up over the lip first. At normal temperatures, the molecules in the log simply don't have enough energy to clear that barrier, so the log sits stable and unreacted for years, despite all the oxygen around it. The match provides exactly that missing activation energy: the friction of striking it creates heat, and touching it to the wood delivers enough energy locally to break those first bonds and start the reaction in a small spot. Why does one small match unleash such a vastly larger effect? Because the burning reaction is so exothermic that, once a small region ignites, the energy it releases supplies more than enough activation energy to ignite the neighboring wood, which ignites the next, and so on, a self-sustaining chain reaction. The match only has to pay the "startup cost" once, in one small place; after that, the reaction funds its own spread with the energy it releases. This is why activation energy is such a powerful concept: it explains the apparent paradox of stable materials (gasoline, wood, even the sugars in your body) that store lots of releasable energy yet sit safely until something supplies that first push. It's also why catalysts and enzymes matter so much, by lowering the activation energy, they let reactions proceed that otherwise would be stuck waiting.`,
            },
            {
              id: `c4`,
              title: `Why you must eat to stay alive`,
              type: `Energy and living order`,
              description: `Unlike a rock, a living body is extraordinarily ordered and complex, and it must eat constantly to stay that way. Stop eating, and the body weakens and eventually breaks down. Why does simply staying alive and organized require a ceaseless input of energy?`,
              questions: [
                `Why does maintaining a living body require constant energy?`,
                `How does entropy explain why order isn't "free"?`,
                `What happens, in thermodynamic terms, when the energy input stops?`,
              ],
              evaluation: `This case connects thermodynamics directly to life, and the key is entropy, the universe's relentless tendency toward disorder. A living body is an extraordinary pocket of order and complexity: trillions of cells, intricate molecules, precise structures, all far from the random, spread-out state that entropy favors. The second law of thermodynamics says the total entropy of the universe always increases, meaning order naturally tends to break down into disorder, and crucially, creating and maintaining order requires a continuous input of energy. It is never "free." A living body is constantly fighting entropy's pull: molecules want to break down, structures want to fall apart, concentrations want to spread out and equalize. To hold itself together, the body must continuously do work, repairing, rebuilding, pumping, organizing, and all that work requires energy. That energy comes from food: through cellular respiration (which you studied), the body breaks down glucose to release energy stored in its bonds (an exothermic process), capturing it as ATP to power the maintenance of order. So eating isn't optional; it's the constant fuel that lets a body sustain its improbable, low-entropy organization against the universe's pressure toward disorder. When the energy input stops, the body can no longer do this maintenance work. Without fuel, it can't repair and rebuild, so entropy takes over: structures break down, order dissolves, and the system drifts toward the disordered, spread-out equilibrium, which, for a living thing, means weakening and ultimately death and decay. Importantly, this doesn't violate the second law: a living body creates local order, but only by consuming energy and releasing even more disorder (heat, waste) into its surroundings, so the universe's total entropy still increases. Life is essentially a beautiful, temporary, energy-powered stand against entropy, and that's exactly why you must eat, breathe, and fuel yourself every single day.`,
            },
            {
              id: `c5`,
              title: `Why a room never tidies itself`,
              type: `Entropy and the arrow of time`,
              description: `A tidy room naturally becomes messy over time, with no effort at all. But a messy room never spontaneously becomes tidy, you must do work to clean it. The same is true of a shattered glass, which never reassembles. Why does disorder happen for free while order takes effort?`,
              questions: [
                `Why does a room get messy on its own but never tidy itself?`,
                `What does this reveal about entropy and the direction of time?`,
                `How can you ever create order, given this law?`,
              ],
              evaluation: `This everyday observation captures one of the deepest truths in all of physics: the second law of thermodynamics and the arrow of time. A room gets messy on its own but never tidies itself because of entropy, the universe's tendency toward disorder, and the fact that there are vastly more disordered arrangements than ordered ones. Think about it: there's only a handful of ways for a room to be "tidy" (everything in its precise place), but a near-infinite number of ways for it to be "messy" (objects scattered anywhere). So as things get bumped and used randomly over time, they overwhelmingly drift toward one of the countless messy states, simply because messy states are so much more probable. Disorder happens "for free" because it's the natural, statistically favored direction; order is rare and requires deliberately forcing things into one of those few special arrangements. This reveals the arrow of time: the second law says total entropy always increases, which gives time its one-way direction. A video of a glass shattering or a room getting messy looks perfectly normal played forward, but absurd played backward, precisely because we never see entropy spontaneously decrease. The increase of disorder is, in a deep sense, what distinguishes past from future. So how can you ever create order, tidy the room, build a sandcastle, grow a body? You can, but never "for free": you must put in energy and do work, and in doing so you always generate even more disorder elsewhere (you burn calories, release heat, create waste). So you can decrease entropy locally (a tidy room, a living cell, a built house), but only at the cost of increasing the total entropy of the universe by more than you decreased it locally. The books always balance in entropy's favor. This is why maintaining any order, a clean room, a living body, a functioning machine, takes constant effort and energy: you're locally pushing back against a universal tide that always, eventually, flows toward disorder. It's the same principle behind why you must eat, why stars eventually burn out, and why the entire universe has a direction in time.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what makes a reaction exothermic or endothermic, and what role do bonds, activation energy, and entropy play in why change happens? Which case connected energy to your everyday life most powerfully? In 5-6 sentences.`,
          reflectionPrompt: `You are a fragile pocket of order in a universe relentlessly tending toward disorder, held together only by the constant energy you take in. How does it feel to know that being alive is a continuous, beautiful act of pushing back against entropy itself?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is an exothermic reaction?`,
              options: [
                `One that absorbs energy from its surroundings, feeling cold.`,
                `One that releases energy to its surroundings, felt as heat or light.`,
                `One that neither releases nor absorbs any energy at all.`,
                `One that can only happen inside living cells.`,
              ],
              correctIndex: 1,
              explanation: `An exothermic reaction releases energy to its surroundings (heat or light), "exo" means out, like a fire. The distractors describe endothermic, no energy change, or restrict it to cells.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does an instant cold pack feel cold when you snap and mix it?`,
              options: [
                `It manufactures brand-new "cold particles" inside the pack.`,
                `It is releasing energy rapidly to its surroundings.`,
                `It contains tiny pieces of ice that were hidden inside.`,
                `The endothermic reaction absorbs heat energy from its surroundings.`,
              ],
              correctIndex: 3,
              explanation: `The cold pack runs an endothermic reaction that absorbs heat from its surroundings (your hand, the pack), so the temperature drops, "cold" is heat being removed. The distractors invent cold particles, describe exothermic, or hidden ice.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the two basic rules about energy and chemical bonds?`,
              options: [
                `Breaking bonds requires energy; forming bonds releases energy.`,
                `Breaking bonds releases energy; forming bonds requires energy.`,
                `Both breaking and forming bonds always release energy.`,
                `Bonds have nothing to do with energy in a reaction.`,
              ],
              correctIndex: 0,
              explanation: `Breaking bonds requires (costs) energy; forming bonds releases energy. The balance between the two decides if a reaction is exothermic or endothermic. The distractors reverse the rule, claim both release, or deny the link.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `A reaction is exothermic when...`,
              options: [
                `breaking the old bonds releases more than forming the new bonds costs.`,
                `forming the new bonds releases more energy than breaking the old bonds costs.`,
                `no bonds are broken or formed at any point.`,
                `the reaction happens only at very low temperatures.`,
              ],
              correctIndex: 1,
              explanation: `Exothermic means forming the new bonds releases more energy than breaking the old ones cost, so surplus energy flows out as heat. The distractors reverse the logic, deny bond changes, or cite temperature.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is activation energy?`,
              options: [
                `The total energy a reaction releases when it finishes.`,
                `The energy stored permanently in the final products.`,
                `The initial energy needed to start a reaction by breaking the first bonds.`,
                `The leftover energy that somehow makes a reaction run backwards.`,
              ],
              correctIndex: 2,
              explanation: `Activation energy is the initial push needed to start a reaction (breaking the first bonds), even for reactions that release energy overall, which is why a log needs a match. The distractors describe released energy, product energy, or reversal.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How does a catalyst (such as an enzyme in your body) speed up a reaction?`,
              options: [
                `By raising the temperature of the entire room.`,
                `By adding more reactant molecules to the mixture.`,
                `By being permanently used up to force the reaction forward.`,
                `By lowering the activation energy needed to start the reaction.`,
              ],
              correctIndex: 3,
              explanation: `A catalyst lowers the activation energy, the barrier to starting, so the reaction proceeds faster or at lower temperature, without being used up. Enzymes do this in your body. The distractors cite heating the room, adding reactant, or being consumed.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does entropy measure, and what does the second law of thermodynamics say about it?`,
              options: [
                `Disorder; the universe's total entropy always tends to increase.`,
                `Temperature; the universe's entropy always stays exactly constant.`,
                `Mass; the universe's entropy always decreases over time.`,
                `Speed; entropy has nothing to do with order or disorder.`,
              ],
              correctIndex: 0,
              explanation: `Entropy measures disorder (how spread-out energy and matter are), and the second law says the total entropy of the universe always tends to increase. The distractors misdefine entropy or reverse the law.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does a living body need a constant input of energy (food) just to stay alive?`,
              options: [
                `Because living bodies are simple things and need almost no energy at all.`,
                `Because maintaining its high order against entropy's pull requires continuous energy.`,
                `Because food adds new atoms that the body had completely lost.`,
                `Because living things are exempt from the laws of thermodynamics.`,
              ],
              correctIndex: 1,
              explanation: `A body is a pocket of improbable order, and entropy constantly pushes it toward disorder, so maintaining that order requires a ceaseless input of energy from food. The distractors claim bodies need little energy, misframe food as lost atoms, or exempt life.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A reaction that releases energy overall (like burning wood) should therefore start instantly and on its own, with no help needed, since it ends up giving off energy.`,
              correctAnswer: false,
              explanation: `False, and understanding why resolves one of chemistry's most useful apparent paradoxes. It's true that burning wood is strongly exothermic, it releases far more energy than it consumes, which is why fire is so hot. You might reasonably think that any reaction which ends up releasing energy should just happen spontaneously and immediately. But almost every reaction, even a strongly exothermic one, must first overcome an energy barrier called the activation energy before it can begin. The reason is in the bonds: to start the reaction, the initial bonds in the reactants (here, the wood and the oxygen) must be broken, and breaking bonds always requires an input of energy. Only after those first bonds break can the new, lower-energy bonds form and release the reaction's overall energy. A helpful picture is a boulder resting in a small dip near the top of a hill: it would release a lot of energy by rolling down the far side, but it can't do so until something first pushes it up and over the lip of the dip. That initial push is the activation energy. This is exactly why a dry log can sit in oxygen-rich air for years without igniting, at ordinary temperatures, its molecules simply don't have enough energy to clear the activation barrier, so the reaction stays stuck, even though it would release enormous energy if it got going. Striking a match supplies that missing activation energy in one small spot. And because burning is so exothermic, once a small region ignites, the energy it releases provides more than enough activation energy to ignite the neighboring wood, creating a self-sustaining chain. So the match only pays the startup cost once. This concept explains why so many energy-rich materials, wood, gasoline, even the sugars in your own cells, can sit perfectly stable until something provides that first push, and it's why catalysts and enzymes, which lower the activation energy, are so important to chemistry and to life. Releasing energy overall and starting on its own are two completely different things.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A student says: "Living things grow more ordered and complex over time, so life must violate the second law of thermodynamics, which says disorder always increases." Using the lesson, what's the best response?`,
              options: [
                `The student is right; life genuinely breaks the laws of physics.`,
                `Living things actually become more disordered over time, never more complex.`,
                `Life creates local order only by consuming energy and releasing even more disorder (heat, waste) to its surroundings, so the universe's total entropy still increases, no law is broken.`,
                `The second law doesn't apply to anything on Earth, only to outer space.`,
              ],
              correctIndex: 2,
              explanation: `Life doesn't violate the second law: an organism creates local order, but only by consuming energy (food) and releasing even more disorder, heat and waste, into its surroundings. So the universe's total entropy still increases; order is local and paid for. The distractors claim a real violation, deny that life is ordered, or exempt Earth.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-pushback`, category: `A stand against entropy`, prompt: `You're a fragile pocket of order in a universe tending toward disorder, held together only by the energy you take in. How does it feel to know that being alive is a continuous, beautiful act of pushing back against entropy itself?` },
            { id: `reflect-everything`, category: `One set of laws`, prompt: `The same energy laws govern a candle flame, your living cells, and the fate of the entire universe. What does it stir in you that something as personal as needing breakfast obeys the same rules as the stars?` },
            { id: `reflect-arrow`, category: `The direction of time`, prompt: `Entropy gives time its arrow, why the past and future feel so different, why broken things don't unbreak. Does understanding that time's direction comes from disorder increasing change how you think about time at all?` },
            { id: `reflect-heritage`, category: `Teaching energy`, prompt: `Caro, you're building science for conscious families. How would you help a child feel the wonder that fire, ice packs, and their own warm body are all energy stories, and that staying alive is fueling order against disorder?` },
            { id: `reflect-effort`, category: `Order takes effort`, prompt: `Disorder happens for free; order, a clean room, a skill, a relationship, takes constant energy to build and maintain. Where in your own life do you feel this thermodynamic truth, that anything worth keeping requires ongoing effort?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `The universe relentlessly tends toward disorder, yet here you are, exquisitely ordered, thinking about it. How do you hold both truths at once, the inevitability of entropy and the astonishing, temporary triumph of life and mind against it?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Energy and entropy are running in everything around you, your stove, your body, your messy room. These help you feel them. Two paths.`,
          familyActivity: {
            title: `Feel The Energy Flow`,
            duration: `One afternoon`,
            description: `Make the invisible flow of energy something your family can feel and see, turning thermodynamics from abstract law into lived experience. Start with safe exothermic and endothermic demonstrations. For exothermic (releasing heat), dissolve a little laundry detergent or calcium chloride (a safe drying agent) in water and feel the container warm up, or simply notice the warmth of a hand-warmer packet; talk about how energy is flowing OUT of the reaction into your hand. For endothermic (absorbing heat), dissolve baking soda in vinegar, or Epsom salts in water, and feel the mixture turn cooler as the reaction pulls heat IN from the surroundings (an instant cold pack is the dramatic version). For each, ask: is energy flowing out (hot) or in (cold)? Next, explore activation energy: discuss why a candle or match needs to be lit (you supply the initial push) but then keeps burning on its own (the exothermic reaction funds its own continuation), and why food in your pantry doesn't spontaneously combust even though it stores energy. Then make entropy vivid and fun: drop food coloring into still water and watch it spread out on its own (never re-gathering), this is entropy in action. Talk about how a room, a desk, or a backpack gets messy with no effort but only gets tidy with work, and challenge everyone: "Can you find anything that becomes MORE ordered without someone spending energy?" (They'll discover order always has a cost.) Finally, connect it to the body: discuss how staying alive, warm, and organized requires constantly eating, because you're holding back disorder, and how your body's enzymes are catalysts lowering activation energy so life's reactions can run at body temperature. The goal is for everyone to start feeling the two great drivers, energy flow and entropy, operating everywhere, from the stove to the messy room to their own warm, hungry, beautifully ordered bodies.`,
          },
          projectOption: {
            title: `The Energy Story, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Trace the complete energy story behind something real, and reveal the thermodynamics hidden inside it. Week 1, choose your subject and map its energy: pick something energy-rich and relatable, a campfire or candle, a car or rocket engine, an instant hot or cold pack, a battery, your own body powered by food, or even a star. Research and explain its energy story using the lesson's concepts: Is the key reaction exothermic or endothermic, and how do you know? Where is the energy stored (in which bonds), and where does it go? Is there an activation energy barrier, and what supplies the initial push? Are catalysts or enzymes involved in lowering it? Make the bond-energy accounting clear: breaking costs, forming releases, and the balance determines the heat flow. Week 2, connect it to the big laws: explain how your subject illustrates conservation of energy (energy transferred, never created or destroyed) and, where relevant, entropy and the second law (for instance, how an engine can never be perfectly efficient because some energy always disperses as waste heat, or how your body fights entropy by constantly consuming fuel). Draw out the deep connection, the same laws governing your subject also govern stars and living cells. Produce your final piece, an illustrated "energy story" explainer, a slide deck, a short video, or an annotated diagram, that teaches both the specific case and the universal principles it reveals, always tracing energy from where it starts to where it ends up. The aim is to see thermodynamics not as dry equations but as the universal accounting of energy and disorder that runs everything, and to understand one real example deeply enough to teach it. You'll come away grasping why energy and entropy are among the most powerful and far-reaching ideas in all of science.`,
            offerToParent: `Parent: opt your child into the Energy Story project. Tracing a real subject's energy, identifying exothermic versus endothermic reactions, locating energy in bonds, explaining activation energy and catalysts, and connecting it to conservation of energy and entropy, directly develops the core NGSS ideas about energy in chemical reactions and the conservation and dispersal of energy. Seeing that the same laws govern a campfire, a car engine, a living body, and a star makes thermodynamics concrete, profound, and memorable. It's rigorous, far-reaching, standards-aligned work that gives your child some of the most powerful explanatory ideas in all of science.`,
          },
          identityQuestion: `If you become someone who can trace energy through any change, who sees that fire, life, and the whole universe run on the same laws of energy and entropy, what kind of thinker does that make you, a person who understands the deep accounting beneath all change, that someone who sees heat and cold as just sensations, with no idea of the energy flowing beneath, can never quite become?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can trace energy through any change or reaction.`,
            `A thinker who sees that life is a stand against entropy.`,
            `Someone who knows the same energy laws govern fire, cells, and stars.`,
          ],
          saveKey: `identity_responses_sci_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eight down, and you've grasped some of the deepest ideas in all of science. You learned that every chemical reaction is an energy story: exothermic reactions release energy to their surroundings (feeling hot, like fire), while endothermic ones absorb it (feeling cold, like an instant cold pack). You learned where that energy lives, in chemical bonds, with breaking bonds costing energy and forming bonds releasing it, so the balance between the two decides which way the heat flows, all while energy is perfectly conserved. You learned about activation energy, the initial push almost every reaction needs to begin, which is why a log needs a match, and how catalysts and enzymes work by lowering that barrier. And you met entropy and the second law of thermodynamics: the universe's relentless drift toward disorder, which gives time its arrow and is why creating and maintaining order, like a living body, demands a constant input of energy. As a thermodynamicist, you reasoned through real puzzles: why fire is hot and self-sustaining, why a cold pack turns icy, why a log won't burn without a spark, why you must eat to stay alive, and why a messy room never tidies itself. You now see the universal accounting of energy beneath all change. Next, we explore how fast reactions go and how they can settle into balance: reaction rates and equilibrium. Onward, {name}. — Cosmo`,
          badge: `energy-tracker`,
          badgeName: `Energy Tracker`,
          xpEarned: 75,
          competencies: [
            `Distinguishes exothermic (releases energy) from endothermic (absorbs energy) reactions`,
            `Understands that energy is stored in bonds: breaking costs energy, forming releases it`,
            `Explains how the bond-energy balance determines whether a reaction is exothermic or endothermic`,
            `Grasps activation energy as the barrier to starting a reaction, and how catalysts lower it`,
            `Understands entropy and the second law: the universe tends toward increasing disorder`,
            `Connects energy and entropy to why living things require constant energy input`,
            `Reasons through real cases linking energy flow and entropy to everyday life`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Chemistry — Reaction Rates and Equilibrium`,
            hook: `How fast reactions go, and how they settle into a dynamic balance. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L08 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
