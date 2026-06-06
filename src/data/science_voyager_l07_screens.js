// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L07 — Chemistry: The Mole, Stoichiometry, and Chemical Math
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS1 (Structure and Properties of Matter; Chemical Reactions)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l07-v1";

const SCIENCE_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-07`,
      title: `Chemistry: The Mole, Stoichiometry, and Chemical Math`,
      duration: 35,
      xpReward: 75,
      badge: `atom-counter`,
      badgeName: `Atom Counter`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you went inside the atom. Today you learn how chemists do something that sounds impossible: count atoms. Atoms are so unimaginably tiny that even a pinch of salt contains more of them than there are stars in the observable universe. You can't count them one by one, ever. Yet chemistry is precise: when hydrogen burns to make water, exactly two hydrogen atoms join each oxygen atom, no more, no less. So how do chemists work with exact numbers of things they can never see or count? The answer is one of the most powerful ideas in all of chemistry: the mole. A mole is simply a counting unit, like a "dozen," but enormous, it's a specific, gigantic number of particles that lets chemists bridge the invisible world of atoms and the visible world of grams they can weigh on a scale. With the mole, a chemist can weigh out an exact number of atoms without ever counting one. And once you can count atoms by weighing, you can do stoichiometry: the chemical math that predicts exactly how much of each substance a reaction needs and produces. This is how we know how much fuel a rocket needs, how much medicine to put in a pill, how much fertilizer feeds a field. It's the recipe math of the universe. Today you'll learn to think like a chemist who counts the uncountable. Onward.`,
          headline: `Chemistry: The Mole, Stoichiometry, and Chemical Math`,
          subtitle: `How chemists count atoms and predict exactly how reactions turn out. A Case Study.`,
          visual: `/voyager-assets/science/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Counting The Uncountable`,
          paragraphs: [
            `Atoms are almost incomprehensibly small. A single drop of water holds more atoms than there are drops of water in all the oceans on Earth. You could never count the atoms in even a speck of dust, not in a billion lifetimes. Yet chemistry depends on knowing how many atoms react. This is the puzzle chemists had to solve.`,
            `The problem is a mismatch between two worlds. There's the invisible world of individual atoms, far too tiny and numerous to count, and the visible world of grams and scales, where we actually work. To do real chemistry, you need a bridge between them: a way to connect the number of atoms to a weight you can measure.`,
            `That bridge is the mole. Just as a "dozen" always means twelve, a mole always means a specific, fixed number of particles, an enormous one. The mole lets chemists count atoms by weighing, turning the uncountable into the measurable. It's the single idea that makes quantitative chemistry possible, and today it's your key tool.`,
          ],
          image: `/voyager-assets/science/l07-s1-counting.webp`,
          imageCaption: `Atoms are almost incomprehensibly SMALL. A single drop of water holds more atoms than there are drops of water in all Earth's oceans. You could never count the atoms in a speck of dust in a billion lifetimes. Yet chemistry depends on knowing how many atoms react, the puzzle chemists had to solve. The problem is a mismatch between two worlds: the invisible world of individual ATOMS, far too tiny and numerous to count, and the visible world of GRAMS and scales where we work. Real chemistry needs a bridge between them, a way to connect the number of atoms to a weight you can measure. That bridge is the MOLE. Just as a dozen always means twelve, a mole always means a specific, fixed, enormous number of particles. It lets chemists count atoms by weighing, turning the uncountable into the measurable.`,
          vocab: [
            { word: `the mole`,
              definition: `A counting unit in chemistry, like a "dozen" but enormous. It represents a fixed number of particles and links atoms to grams you can weigh.`,
              audioPrompt: `The mole, {name}, is a counting unit in chemistry, like a dozen but vastly bigger. It stands for a fixed, enormous number of particles, and it lets chemists count atoms simply by weighing a sample on a scale.` },
            { word: `counting unit`,
              definition: `A word that names a fixed quantity of things, like a "dozen" (12) or a "pair" (2). The mole is chemistry's counting unit for atoms.`,
              audioPrompt: `A counting unit, {name}, is a word for a fixed quantity, like a dozen meaning twelve or a pair meaning two. The mole is chemistry's counting unit, except it counts an enormous number of atoms at once.` },
            { word: `the two worlds`,
              definition: `The invisible world of individual atoms (too small to count) and the visible world of grams we can weigh. The mole bridges them.`,
              audioPrompt: `The two worlds, {name}, are the invisible world of individual atoms, far too small and numerous to count, and the visible world of grams we can weigh. The mole is the bridge that connects them.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What A Mole Actually Is`,
          paragraphs: [
            `A mole is a specific number: about 6.02 times ten to the twenty-third power. Written out, that's roughly 602 followed by twenty-one more zeros, a 6 with twenty-three digits after the decimal shift. This staggering number is called Avogadro's number, and one mole of anything contains exactly that many particles.`,
            `Why such a strange, huge number? Because it's chosen to make the bridge work perfectly. The mole is defined so that one mole of an element weighs, in grams, the same number as that element's atomic mass on the periodic table. Carbon's atomic mass is about 12, so one mole of carbon atoms weighs about 12 grams. Elegant.`,
            `This is the magic. The periodic table already lists each element's atomic mass. So to get one mole, a known number of atoms, of any element, you just weigh out that many grams. One mole of hydrogen is about 1 gram; one mole of oxygen, about 16 grams. Weighing becomes counting. That's the whole trick.`,
          ],
          image: `/voyager-assets/science/l07-s2-whatmole.webp`,
          imageCaption: `A mole is a specific number: about 6.02 times ten to the twenty-third, roughly 602 followed by twenty-one zeros. This staggering figure is AVOGADRO'S NUMBER, and one mole of anything contains exactly that many particles. Why such a huge, strange number? Because it makes the bridge work perfectly. The mole is defined so one mole of an element weighs, in grams, the same number as its ATOMIC MASS on the periodic table. Carbon's atomic mass is about 12, so one mole of carbon weighs about 12 grams. The table already lists each atomic mass, so to get one mole, a known number of atoms, of any element, you just weigh out that many grams: one mole of hydrogen is about 1 gram, one mole of oxygen about 16 grams. WEIGHING becomes COUNTING. That's the whole trick.`,
          vocab: [
            { word: `Avogadro's number`,
              definition: `About 6.02 × 10²³, the number of particles in one mole. It's the fixed count that defines how big a mole is.`,
              audioPrompt: `Avogadro's number, {name}, is about six point oh two times ten to the twenty-third, an enormous figure. It's the number of particles in exactly one mole, the count that makes the mole such a useful bridge.` },
            { word: `atomic mass`,
              definition: `The mass of an element's atoms, listed on the periodic table. One mole of an element weighs that many grams, linking the table to the scale.`,
              audioPrompt: `Atomic mass, {name}, is the mass of an element's atoms, listed right on the periodic table. The clever part: one mole of an element weighs that same number in grams, which is how you turn weighing into counting.` },
            { word: `molar mass`,
              definition: `The mass in grams of one mole of a substance. For an element it equals its atomic mass; for a compound, you add up the atoms' masses.`,
              audioPrompt: `Molar mass, {name}, is the mass in grams of one mole of a substance. For an element it's just its atomic mass in grams; for a compound like water, you add up the masses of all its atoms.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Reactions Are Recipes`,
          paragraphs: [
            `A chemical reaction is like a recipe. A recipe says "2 cups flour + 1 egg makes 12 cookies", exact amounts in fixed ratios. A chemical equation does the same: it tells you exactly how many of each kind of atom or molecule combine, and how much product results. Chemistry follows precise ratios, never random amounts.`,
            `Consider water forming: two hydrogen molecules plus one oxygen molecule make two water molecules. Written as an equation, the numbers in front (called coefficients) give the exact ratio: 2 to 1 to 2. These ratios are fixed by nature. You can scale a recipe up or down, but the proportions never change, double everything, and you still get the same ratio.`,
            `Crucially, these same ratios work whether you're counting molecules or moles. "Two hydrogen to one oxygen" means two molecules to one, and also two moles to one. That's why the mole is so powerful: the coefficients in a balanced equation are mole ratios. They tell you exactly how many moles of each substance the reaction needs and makes.`,
          ],
          image: `/voyager-assets/science/l07-s3-recipes.webp`,
          imageCaption: `A chemical reaction is like a RECIPE. A recipe says two cups flour plus one egg makes twelve cookies, exact amounts in fixed ratios. A chemical EQUATION does the same: it tells you exactly how many of each atom or molecule combine, and how much product results. Chemistry follows precise ratios, never random amounts. For water: two hydrogen molecules plus one oxygen molecule make two water molecules. The numbers in front, COEFFICIENTS, give the exact ratio: 2 to 1 to 2, fixed by nature. Scale a recipe up or down, but the proportions never change. And these same ratios work for molecules OR moles: two-to-one means two molecules to one, and two MOLES to one. That's the mole's power: coefficients in a balanced equation are MOLE RATIOS.`,
          vocab: [
            { word: `chemical equation`,
              definition: `A symbolic recipe for a reaction, showing the substances that react and the products formed, with numbers giving their exact ratios.`,
              audioPrompt: `A chemical equation, {name}, is a recipe for a reaction written in symbols. It shows what reacts and what's produced, with numbers in front giving the exact ratios in which they combine, just like a cooking recipe.` },
            { word: `coefficient`,
              definition: `The number written in front of a substance in a chemical equation. It gives the ratio in which substances react, and doubles as a mole ratio.`,
              audioPrompt: `A coefficient, {name}, is the number written in front of a substance in a chemical equation. It tells you the ratio in which things combine, and because it works for moles too, it's the key to chemical math.` },
            { word: `mole ratio`,
              definition: `The proportion of moles of each substance in a reaction, read directly from the coefficients in the balanced equation.`,
              audioPrompt: `A mole ratio, {name}, is the proportion of moles of each substance in a reaction. You read it straight off the coefficients in the balanced equation, and it lets you calculate exactly how much reacts and forms.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Stoichiometry: The Recipe Math`,
          paragraphs: [
            `Put the pieces together and you get stoichiometry, the chemical math that predicts exactly how much of each substance a reaction needs and produces. It rests on two unbreakable rules. First, atoms are never created or destroyed in a reaction (conservation of matter, you saw it in photosynthesis), they're only rearranged, so every equation must balance.`,
            `Balancing means the same number of each kind of atom appears on both sides. If three oxygen atoms go in, three come out, never two or four. This is why coefficients matter: we adjust them so the atoms balance, honoring conservation of matter. An unbalanced equation describes something impossible, atoms appearing from nowhere or vanishing.`,
            `Second, the mole turns these atom ratios into gram amounts we can measure. The flow is: weigh a substance, convert grams to moles (using molar mass), use the mole ratio to find moles of another substance, then convert back to grams. This chain lets a chemist predict, before mixing anything, exactly how much product a reaction will yield.`,
          ],
          image: `/voyager-assets/science/l07-s4-stoich.webp`,
          imageCaption: `Put the pieces together and you get STOICHIOMETRY, the chemical math predicting exactly how much each reaction needs and produces. Two unbreakable rules. First, atoms are never created or destroyed (CONSERVATION OF MATTER, from photosynthesis), only rearranged, so every equation must BALANCE: the same number of each atom on both sides. If three oxygen atoms go in, three come out, never two or four. That's why coefficients matter, we adjust them so atoms balance. An unbalanced equation describes the impossible. Second, the MOLE turns atom ratios into gram amounts we can measure. The flow: weigh a substance, convert grams to moles (molar mass), use the mole ratio for another substance, convert back to grams. This lets a chemist predict the exact yield before mixing anything.`,
          vocab: [
            { word: `stoichiometry`,
              definition: `The chemical math that uses balanced equations and the mole to calculate exactly how much of each substance a reaction needs and produces.`,
              audioPrompt: `Stoichiometry, {name}, is the chemical math that predicts reactions. Using a balanced equation and the mole, it calculates exactly how much of each substance is needed and how much product forms, before you mix anything.` },
            { word: `balancing equations`,
              definition: `Adjusting coefficients so the same number of each kind of atom appears on both sides, honoring conservation of matter.`,
              audioPrompt: `Balancing equations, {name}, means adjusting the coefficients so the same number of each kind of atom appears on both sides. It honors conservation of matter, since atoms can't be created or destroyed, only rearranged.` },
            { word: `conservation of matter`,
              definition: `The principle that atoms are never created or destroyed in a reaction, only rearranged. It's why chemical equations must balance.`,
              audioPrompt: `Conservation of matter, {name}, is the rule that atoms are never created or destroyed in a reaction, only rearranged. It's the reason every chemical equation has to balance, with equal atoms on both sides.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Atoms are far too tiny and numerous to count, so chemists use the mole, a fixed, enormous number of particles (Avogadro's number, about 6.02 × 10²³). The mole is defined so one mole of an element weighs its atomic mass in grams, which means you can count atoms simply by weighing. Weighing becomes counting.`,
            `Reactions follow precise recipes: balanced equations whose coefficients give exact mole ratios. Because atoms are conserved (never created or destroyed), equations must balance. Stoichiometry combines all this, the balanced equation, mole ratios, and molar mass, to predict exactly how much of each substance a reaction needs and yields, before anything is mixed.`,
            `Now the case-study screen makes you the chemist, with five real problems: why a campfire's ash weighs less than the log (conservation puzzle), how a baker and a chemist both follow ratios, why a rocket needs an exact fuel-to-oxygen mix, how a factory predicts product yield, and how a "limiting ingredient" caps what you can make. For each, reason with moles, ratios, and conservation. Onward.`,
          ],
          image: `/voyager-assets/science/l07-s5-before.webp`,
          imageCaption: `Threads together. Atoms are far too tiny to count, so chemists use the MOLE, a fixed, enormous number of particles (Avogadro's number, about 6.02 × 10²³). The mole is defined so one mole of an element weighs its atomic mass in grams, so you count atoms by weighing. WEIGHING becomes COUNTING. Reactions follow precise recipes: balanced equations whose COEFFICIENTS give exact mole ratios. Because atoms are conserved, equations must BALANCE. STOICHIOMETRY combines the balanced equation, mole ratios, and molar mass to predict exactly what a reaction needs and yields, before mixing. The case-study screen gives five problems: the campfire conservation puzzle, baker-and-chemist ratios, a rocket's fuel mix, predicting factory yield, and the limiting ingredient.`,
          vocab: [
            { word: `limiting reactant`,
              definition: `The ingredient that runs out first in a reaction, capping how much product can form, no matter how much of the others you have.`,
              audioPrompt: `A limiting reactant, {name}, is the ingredient that runs out first in a reaction. Like running out of eggs while baking, it caps how much product you can make, no matter how much of everything else you have.` },
            { word: `yield`,
              definition: `The amount of product a reaction produces. Stoichiometry lets chemists predict the yield before the reaction even happens.`,
              audioPrompt: `Yield, {name}, is the amount of product a reaction produces. The power of stoichiometry is that it lets chemists calculate the yield in advance, predicting exactly how much they'll get before mixing anything.` },
            { word: `quantitative chemistry`,
              definition: `Chemistry done with exact numbers, amounts, masses, and ratios, rather than just describing what reacts. The mole makes it possible.`,
              audioPrompt: `Quantitative chemistry, {name}, is chemistry done with exact numbers: amounts, masses, and ratios, not just describing what reacts. The mole is what makes this precision possible, turning chemistry into a predictive science.` },
          ],
        },

        {
          id: `l07-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Chemical Math`,
          intro: `{name}, you're the chemist now. Here are five real problems about counting atoms and predicting reactions. For each, reason with the mole, mole ratios, and conservation of matter, no heavy calculation needed, just the logic.`,
          cases: [
            {
              id: `c1`,
              title: `Where did the campfire's mass go?`,
              type: `Conservation puzzle`,
              description: `A heavy log burns down to a small pile of light ash. It looks like most of the mass simply disappeared. But chemists insist matter is conserved, atoms are never destroyed. So where did the missing mass actually go?`,
              questions: [
                `If atoms are conserved, where did the log's lost mass go?`,
                `Why does it look like mass vanished, even though it didn't?`,
                `How would you prove the mass wasn't really destroyed?`,
              ],
              evaluation: `This puzzle tests conservation of matter, and the answer is that no mass was destroyed at all, it left as invisible gases. When a log burns, the carbon and hydrogen atoms in the wood combine with oxygen from the air. This produces carbon dioxide and water vapor, both gases that float away into the air, plus heat and light. The small pile of ash is only the leftover minerals that don't burn off as gas. So the mass didn't vanish; it was rearranged into gases you can't see and dispersed into the atmosphere. It looks like mass disappeared simply because the products are invisible gases instead of visible solids, our eyes track the solid log and ash but miss the gases streaming away (and the oxygen from the air that joined in isn't obvious either). To prove the mass wasn't destroyed, you'd capture everything: if you burned the log inside a perfectly sealed container that also held the air, and weighed the whole sealed system before and after, the total mass would be exactly the same. The gases would be trapped and accounted for. This is precisely the kind of experiment that established conservation of matter. It's the same principle you met in photosynthesis (a tree's mass coming from air) run in reverse: atoms are never created or destroyed in a chemical reaction, only rearranged, which is exactly why chemical equations must balance, and why stoichiometry works at all.`,
            },
            {
              id: `c2`,
              title: `The baker and the chemist`,
              type: `Ratios in everyday life`,
              description: `A baker's recipe says 2 cups of flour and 1 egg make 12 cookies. A chemist's equation says 2 hydrogen molecules and 1 oxygen molecule make 2 water molecules. A friend says these have nothing in common. Are they actually following the same kind of logic?`,
              questions: [
                `What do the baking recipe and the chemical equation share?`,
                `If the baker doubles the flour, what must they do with the eggs?`,
                `How does this connect to "mole ratios" in chemistry?`,
              ],
              evaluation: `The baker and the chemist are following exactly the same logic: fixed ratios that must be respected. The baking recipe and the chemical equation both specify precise proportions of ingredients that combine to make a fixed amount of product. The recipe's "2 cups flour to 1 egg" is structurally identical to the equation's "2 hydrogen to 1 oxygen", both are ratios fixed by the process, not random amounts. And both scale the same way: if the baker doubles the flour to 4 cups, they must also double the eggs to 2, keeping the 2-to-1 ratio, or the recipe fails. Likewise, if a chemist uses 4 hydrogen molecules, they need 2 oxygen molecules to keep the 2-to-1 ratio and make 4 water molecules. You can scale up or down freely, but the proportions are locked. This connects directly to mole ratios, the heart of stoichiometry. The coefficients in a balanced chemical equation (the 2, 1, 2 for water) are exactly like the numbers in a recipe: they give the ratio in which substances combine. The beautiful part is that these ratios hold whether you're counting individual molecules or whole moles, "2 hydrogen to 1 oxygen" means 2 molecules to 1, and equally 2 moles to 1. So a chemist reads a balanced equation just like a baker reads a recipe, scaling the ratios up to real, weighable amounts using the mole. Chemistry isn't mysterious here; it's recipe math, with the mole as the measuring cup that lets you work with the invisibly small ingredients.`,
            },
            {
              id: `c3`,
              title: `The rocket's exact fuel mix`,
              type: `Stoichiometry in engineering`,
              description: `A rocket burns hydrogen fuel with oxygen to produce water vapor and enormous thrust. Engineers must load exactly the right ratio of hydrogen to oxygen. If they just dumped in random amounts, the rocket would waste fuel or fail. How do they know the precise amounts to load?`,
              questions: [
                `How do engineers know the exact ratio of hydrogen to oxygen to load?`,
                `What happens if they load too much hydrogen and too little oxygen?`,
                `Why is getting this ratio right a matter of stoichiometry?`,
              ],
              evaluation: `Engineers know the exact ratio from the balanced chemical equation for the reaction, this is stoichiometry doing real, high-stakes work. The reaction of hydrogen and oxygen to make water has a fixed mole ratio: two parts hydrogen to one part oxygen (the same 2-to-1 you've seen). The balanced equation tells engineers that for every two moles of hydrogen, they need exactly one mole of oxygen for a complete, efficient reaction. Using the mole and molar masses, they convert this ratio into actual masses (or volumes) of fuel to load, so they can weigh out precisely the right amounts. If they load too much hydrogen and too little oxygen, the oxygen becomes the limiting reactant: it runs out first, and once it's gone, the leftover hydrogen has nothing to react with. That extra hydrogen is simply dead weight, unburned fuel the rocket carried up for nothing, wasting mass and reducing efficiency (and potentially creating danger). Conversely, too much oxygen wastes oxygen and adds useless weight. Either way, an off-ratio mix means wasted resources and lost performance, in rocketry, where every gram of payload is precious and fuel efficiency is critical, this matters enormously. This is why getting the ratio right is fundamentally a matter of stoichiometry: it's the chemical math that lets engineers calculate, before the rocket ever launches, exactly how much of each reactant to load for the most complete and efficient reaction. It's a vivid reminder that stoichiometry isn't abstract, it determines whether real machines work, from rocket engines to chemical plants to the airbags in a car.`,
            },
            {
              id: `c4`,
              title: `Predicting the factory's output`,
              type: `Industrial chemistry`,
              description: `A fertilizer factory needs to make a target amount of product each day. Before running the reaction, the chemists calculate exactly how much raw material to buy and how much product they'll get, down to precise amounts. How can they predict the output before the reaction even happens?`,
              questions: [
                `How can chemists predict the yield before running the reaction?`,
                `What information do they need to make this prediction?`,
                `Why is this predictive power so valuable to industry?`,
              ],
              evaluation: `Chemists can predict the yield in advance because stoichiometry makes chemistry a quantitative, predictive science, this is its single most powerful real-world payoff. The prediction works through a clear chain of reasoning. First, they need the balanced chemical equation for the reaction, which gives the mole ratios between reactants and products. Second, they need the molar masses of the substances (from the periodic table), which let them convert between grams (what they can weigh and buy) and moles (what the ratios are in). With these, the calculation flows: take the target mass of product, convert it to moles of product, use the mole ratio from the balanced equation to find how many moles of each raw material are required, then convert those moles back to grams (or tons) to know exactly how much to purchase. They can also work forward, from raw materials to predicted product. The information needed, then, is just the balanced equation and the molar masses. This predictive power is enormously valuable to industry because it eliminates guesswork and waste. A factory can buy precisely the right amount of raw materials (no costly excess, no shortfall), predict output to plan sales and shipping, control costs, and design efficient processes, all on paper, before committing real materials and energy. It's the difference between a controlled, profitable operation and expensive trial-and-error. The same math scales from a factory making thousands of tons to a pharmacist ensuring a pill has exactly the right dose of medicine. Stoichiometry is, quite literally, the math that runs the chemical economy, turning the invisible bookkeeping of atoms into reliable, real-world production.`,
            },
            {
              id: `c5`,
              title: `Running out of an ingredient`,
              type: `Limiting reactant`,
              description: `You're making sandwiches, each needs 2 slices of bread and 1 slice of cheese. You have 10 slices of bread but only 3 slices of cheese. You can only make 3 sandwiches, then you're stuck, even with bread left over. How does this everyday situation explain a key idea in chemistry?`,
              questions: [
                `Why can you only make 3 sandwiches, and what's left over?`,
                `Which ingredient "limited" how much you could make?`,
                `How does this map onto a chemical reaction?`,
              ],
              evaluation: `This sandwich problem is a perfect everyday model of the limiting reactant, one of stoichiometry's most practical ideas. You can only make 3 sandwiches because, although you have plenty of bread (10 slices, enough for 5 sandwiches), you only have 3 slices of cheese, and each sandwich requires one. The cheese runs out after 3 sandwiches, and at that point you simply can't make any more, even though 4 slices of bread are left over (10 minus the 6 used). The cheese is what "limited" your production: it's the ingredient that ran out first, and so it set the maximum number of sandwiches, regardless of how much bread you had. The leftover bread is "excess", more than you could use. This maps directly onto a chemical reaction. The reactants are like the ingredients, combined in fixed ratios set by the balanced equation. The limiting reactant is the substance that runs out first; it determines the maximum amount of product that can form, exactly as the cheese capped the sandwiches. Any other reactant present in more than the needed ratio is the "excess reactant", like the leftover bread, it's simply left unreacted when the limiting reactant is used up. This is hugely important in real chemistry: to predict how much product a reaction will actually yield, a chemist must identify the limiting reactant, because that's what caps the output (you saw it in the rocket, where too little oxygen limited the burn). It also guides smart decisions: if one reactant is expensive, you might deliberately supply a cheaper one in excess to make sure all the expensive reactant gets used. So a simple kitchen shortage captures a principle that governs everything from factory yields to the chemistry inside your own cells: a reaction can only proceed as far as its scarcest necessary ingredient allows.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what is the mole and why is it so powerful, and how does stoichiometry let chemists predict reactions before running them? Which case made chemical math feel most real or useful to you? In 5-6 sentences.`,
          reflectionPrompt: `Chemists count things they can never see, by weighing, and predict exactly how reactions will turn out before mixing anything. How does it feel that humans figured out how to do precise math on a world of atoms far too tiny to ever observe one by one?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the mole, in chemistry?`,
              options: [
                `A small burrowing animal that chemists keep as a mascot.`,
                `A counting unit representing a fixed, enormous number of particles.`,
                `A type of chemical reaction that always produces water.`,
                `The smallest possible piece of any chemical element.`,
              ],
              correctIndex: 1,
              explanation: `A mole is a counting unit, like a "dozen" but enormous, representing a fixed number of particles (Avogadro's number). The distractors invoke the animal, a reaction type, or confuse it with an atom.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why is the mole such a useful idea?`,
              options: [
                `It makes atoms grow large enough to see with the eye.`,
                `It lets chemists destroy atoms to simplify reactions.`,
                `It bridges the invisible world of atoms and the visible world of grams we can weigh.`,
                `It actually proves that atoms do not really exist at all in the first place.`,
              ],
              correctIndex: 2,
              explanation: `The mole bridges two worlds: the uncountable atoms and the grams we can measure on a scale, letting chemists count atoms by weighing. The distractors claim it enlarges atoms, destroys them, or disproves them.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `One mole of an element weighs how much, in grams?`,
              options: [
                `Always exactly one gram, for every single element.`,
                `The same number as that element's atomic mass on the periodic table.`,
                `A completely random amount that changes every time.`,
                `Always more than a kilogram, no matter the element.`,
              ],
              correctIndex: 1,
              explanation: `The mole is defined so that one mole of an element weighs, in grams, the same number as its atomic mass (carbon ≈ 12 g). The distractors claim a fixed 1 gram, randomness, or always over a kilogram.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `In a balanced chemical equation, what do the coefficients (the numbers in front) tell you?`,
              options: [
                `The temperature at which the reaction must be run.`,
                `The color each substance will turn during the reaction.`,
                `The exact ratio in which substances react, which doubles as a mole ratio.`,
                `The retail price of buying each separate chemical at the store.`,
              ],
              correctIndex: 2,
              explanation: `Coefficients give the exact ratio in which substances combine, and because they hold for moles too, they're mole ratios, the key to chemical math. The distractors cite temperature, color, or price.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why must every chemical equation be balanced?`,
              options: [
                `Because atoms are never created or destroyed, only rearranged.`,
                `Because chemists prefer equations that look neat and tidy.`,
                `Because reactions only work on perfectly level tables.`,
                `Because unbalanced equations are simply harder to read.`,
              ],
              correctIndex: 0,
              explanation: `Equations must balance because of conservation of matter: atoms can't be created or destroyed, so the same number of each kind must appear on both sides. The distractors cite neatness, level tables, or readability.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `When a log burns down to a little ash, where did most of its mass go?`,
              options: [
                `It was genuinely destroyed and erased from existence.`,
                `It simply turned into pure energy and entirely ceased to be matter.`,
                `It sank invisibly into the ground beneath the fire.`,
                `It left as invisible gases (like carbon dioxide and water vapor) into the air.`,
              ],
              correctIndex: 3,
              explanation: `The mass left as invisible gases, carbon and hydrogen combining with oxygen to form carbon dioxide and water vapor that float away; matter was conserved, not destroyed. The distractors claim destruction, conversion to pure energy, or sinking into the ground.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is stoichiometry?`,
              options: [
                `The study of how stones form inside the Earth over time.`,
                `The chemical math that predicts how much each substance a reaction needs and produces.`,
                `A method for making atoms larger and easier to handle.`,
                `The official naming system used for all of the elements on the table.`,
              ],
              correctIndex: 1,
              explanation: `Stoichiometry is the chemical math that uses balanced equations, mole ratios, and molar mass to calculate exactly how much of each substance a reaction needs and yields. The distractors invoke geology, enlarging atoms, or element naming.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `You need 2 slices of bread and 1 slice of cheese per sandwich. You have 10 bread and 3 cheese. What's the "limiting reactant," and how many sandwiches can you make?`,
              options: [
                `Bread is limiting; you can make exactly ten sandwiches.`,
                `Neither is limiting; you can make unlimited sandwiches.`,
                `Cheese is limiting; you can make three, with bread left over.`,
                `Both run out at once; you can make five sandwiches exactly.`,
              ],
              correctIndex: 2,
              explanation: `Cheese is the limiting reactant: it runs out after 3 sandwiches, capping production even though bread is left over. This mirrors how the scarcest reactant limits a reaction's product. The distractors misidentify the limiter or the count.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because atoms are far too small and numerous to ever count one by one, chemistry can only describe reactions in vague terms and can never predict exact amounts.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals one of the most powerful achievements in all of science. It's true that atoms are unimaginably small and numerous, a single drop of water contains more atoms than there are drops of water in all of Earth's oceans, and no one could ever count them individually. If that were the end of the story, chemistry might indeed be stuck with vague descriptions. But chemists solved this problem brilliantly with the concept of the mole. A mole is simply a counting unit, like a "dozen," but it represents an enormous fixed number of particles (Avogadro's number, about 6.02 × 10²³). The genius is in how it's defined: one mole of any element weighs, in grams, the same number as that element's atomic mass on the periodic table. Carbon's atomic mass is about 12, so one mole of carbon, that staggering number of atoms, weighs just about 12 grams, an amount you can easily measure on a scale. This means chemists can count atoms by weighing them: weighing becomes counting. With the mole as a bridge between the invisible world of atoms and the visible world of grams, chemistry becomes intensely quantitative and predictive. Using balanced chemical equations (whose coefficients give exact mole ratios) together with molar masses, chemists do stoichiometry: they calculate, with precision and before any reaction is run, exactly how much of each reactant is needed and exactly how much product will form. This is how engineers know the precise fuel-to-oxygen ratio for a rocket, how factories predict their daily output and buy exactly the right raw materials, and how a pharmacist ensures a pill contains the correct dose. So far from being limited to vague description, chemistry is one of the most precise, predictive sciences there is, and the mole is the key that unlocked that precision, letting humans do exact math on a world of particles they can never see one by one.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A reaction combines hydrogen and oxygen in a 2-to-1 ratio to make water. A student loads in 4 units of hydrogen and 4 units of oxygen, expecting more water from the extra oxygen. Using the lesson, what actually happens?`,
              options: [
                `The extra oxygen forces the reaction to make far more water than possible.`,
                `Nothing reacts at all, because the amounts aren't perfectly equal.`,
                `Hydrogen is limiting: the 4 hydrogen reacts with only 2 oxygen to make 4 water, leaving 2 oxygen unreacted as excess.`,
                `The leftover oxygen turns itself into extra hydrogen to keep reacting.`,
              ],
              correctIndex: 2,
              explanation: `The fixed 2-to-1 mole ratio governs the reaction. 4 hydrogen needs only 2 oxygen, so hydrogen is the limiting reactant, producing 4 water, and the other 2 oxygen is left over as excess (extra reactant can't force more product than the limiter allows). The distractors imagine extra product, no reaction, or oxygen transmuting.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-uncountable`, category: `Counting the invisible`, prompt: `Chemists count particles they can never see, by weighing, and predict reactions before running them. How does it feel that humans figured out how to do precise math on a world of atoms far too tiny to ever observe one by one?` },
            { id: `reflect-recipe`, category: `The universe's recipes`, prompt: `Reactions follow fixed ratios as strict as any recipe, baked into nature itself. What does it stir in you to know the physical world runs on exact proportions, not rough guesses, all the way down?` },
            { id: `reflect-conservation`, category: `Nothing is lost`, prompt: `When a log burns, no atom is destroyed, it all just rearranges into invisible gases. Where else in life might something that seems "lost" actually have only transformed? Does conservation of matter change how you see endings?` },
            { id: `reflect-heritage`, category: `Teaching the mole`, prompt: `Caro, you're building science for conscious families. The mole intimidates many students. How would you help a child feel that it's just a clever counting trick, a "dozen for atoms", rather than scary math?` },
            { id: `reflect-prediction`, category: `Knowing before doing`, prompt: `Stoichiometry lets chemists know a reaction's outcome before it happens. Where else does understanding the underlying rules let you predict an outcome in advance? Why is that kind of foresight so powerful?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `The mole works because nature follows exact, unchanging ratios and conserves matter perfectly. Why should the universe be so orderly and law-abiding at the atomic level? Does that reliability strike you as obvious, or as something remarkable?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Chemical math runs the material world, your kitchen, medicines, factories, fuels. These help you see it. Two paths.`,
          familyActivity: {
            title: `Kitchen Stoichiometry`,
            duration: `One afternoon`,
            description: `Discover that the chemical math chemists use is the same logic that runs your kitchen, making "the mole" and "stoichiometry" feel intuitive instead of intimidating. Start with a recipe as your "chemical equation": pick something with clear ratios (cookies, pancakes, sandwiches). Write it as a ratio (for example, "2 cups flour : 1 egg : makes 12 cookies") and talk about how it's exactly like a balanced equation's coefficients, fixed proportions that must be respected. Then practice scaling: ask "If we want to make 24 cookies, what do we need?" and have everyone work out that you double every ingredient, keeping the ratios, just as a chemist scales a reaction up using mole ratios. Next, demonstrate the limiting reactant vividly: set out ingredients for sandwiches but deliberately short one item (say, 8 slices of bread but only 2 slices of cheese), and have someone figure out how many sandwiches you can actually make and what's left over. The cheese is the limiting reactant; the leftover bread is "excess", exactly how chemical reactions work. For conservation of matter, do a safe demonstration: weigh ingredients before mixing something (like baking soda and vinegar in a sealed bag) and note the gas produced; discuss how if you could capture every gas, the total mass would be unchanged, atoms just rearrange. Then connect it all to the real world: talk about how a pharmacist uses this exact logic to put the precise dose in a pill, how engineers calculate rocket fuel, and how factories predict their output. The goal is for everyone to realize that "scary" chemistry math is really just recipe logic, ratios, scaling, and not wasting your limiting ingredient, applied to atoms, with the mole as the measuring cup that makes the invisibly small things weighable.`,
          },
          projectOption: {
            title: `The Reaction Detective, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how chemical math powers something real, and show the hidden stoichiometry behind it. Week 1, choose a real reaction that matters and decode it: options include combustion (how an engine or rocket burns fuel), photosynthesis or respiration (the reactions you studied, now with their balanced equations and ratios), the reaction that inflates a car airbag, the neutralizing of an acid (antacids in your stomach), or an industrial process like making fertilizer or producing a metal. Find the balanced chemical equation, and explain what it means: what reacts, what's produced, and the mole ratios the coefficients reveal. Show how conservation of matter holds, the atoms balance on both sides. Week 2, reveal the quantitative story: explain, in clear terms (you can use simple numbers, not heavy calculation), how someone uses stoichiometry in this real case, how engineers get the fuel ratio right, how a factory predicts yield and buys the right materials, how a limiting reactant caps the output, or how a precise dose is calculated. Make the abstract concrete: use everyday analogies (recipes, sandwiches) alongside the real chemistry. Produce your final piece, an illustrated explainer, a slide deck, a short video, or a "how it really works" poster, that teaches both the reaction and the chemical math behind it, always connecting the invisible world of atoms and moles to the visible, measurable result. The aim is to show stoichiometry not as homework but as the practical, powerful math that lets humans control matter, design machines, make medicines, and run the chemical world with precision. You'll come away understanding how chemistry becomes a predictive, quantitative science, and why that's one of humanity's great achievements.`,
            offerToParent: `Parent: opt your child into the Reaction Detective project. Decoding a real reaction's balanced equation, explaining its mole ratios and how conservation of matter holds, and showing how stoichiometry predicts real outcomes (fuel ratios, yields, doses, limiting reactants) directly develops the core NGSS chemistry ideas of conservation of matter and quantitative reasoning about reactions. Connecting the invisible world of atoms and moles to real, measurable results, engines, medicines, factories, makes "scary" chemical math concrete and meaningful. It's rigorous, foundational, standards-aligned work that shows your child how chemistry became a precise, predictive science.`,
          },
          identityQuestion: `If you become someone who can count the uncountable and predict a reaction before it happens, who sees the exact recipe-math running beneath the material world, what kind of thinker does that make you, a person who can reason quantitatively about a world too small to see, that someone who thinks chemistry is just mixing colorful liquids and hoping can never quite become?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can count atoms by weighing and predict reactions.`,
            `A thinker who sees the exact recipe-math behind the material world.`,
            `Someone who knows chemistry is precise, not just mixing things.`,
          ],
          saveKey: `identity_responses_sci_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seven down, and you've learned how chemists do the impossible: count atoms they can never see. You learned that atoms are far too tiny and numerous to count one by one, so chemists invented the mole, a fixed, enormous number of particles (Avogadro's number, about 6.02 × 10²³). The genius is that one mole of an element weighs its atomic mass in grams, so you can count atoms simply by weighing, weighing becomes counting, bridging the invisible world of atoms and the visible world of the scale. You learned that reactions are recipes: balanced chemical equations whose coefficients give exact mole ratios, and that they must balance because atoms are never created or destroyed (conservation of matter). And you learned stoichiometry, the chemical math that combines balanced equations, mole ratios, and molar mass to predict exactly how much a reaction needs and yields, before anything is mixed. As a chemist, you reasoned through real problems: where a campfire's mass really goes, how a baker and a chemist follow the same ratio logic, a rocket's exact fuel mix, predicting a factory's output, and how a limiting ingredient caps what you can make. You can now reason quantitatively about a world too small to see. Next, we follow the energy in reactions: thermodynamics, why some reactions release heat and others absorb it, and what drives change. Onward, {name}. — Cosmo`,
          badge: `atom-counter`,
          badgeName: `Atom Counter`,
          xpEarned: 75,
          competencies: [
            `Understands the mole as a counting unit (Avogadro's number) for atoms and particles`,
            `Knows that one mole of an element weighs its atomic mass in grams, linking atoms to the scale`,
            `Reads chemical equations as recipes whose coefficients give exact mole ratios`,
            `Grasps conservation of matter and why every equation must balance`,
            `Understands stoichiometry as the math that predicts what a reaction needs and yields`,
            `Identifies the limiting reactant and how it caps product formation`,
            `Reasons through real applications: combustion, rocket fuel, industrial yield, and dosing`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Chemistry — Thermodynamics: Energy in Reactions`,
            hook: `Why some reactions release heat and others absorb it, and what drives change. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
