// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L01 — Cellular Respiration and Photosynthesis in Depth
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-LS1 (Matter and Energy in Organisms)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l01-v1";

const SCIENCE_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-01`,
      title: `Cellular Respiration and Photosynthesis in Depth`,
      duration: 35,
      xpReward: 75,
      badge: `energy-cycler`,
      badgeName: `Energy Cycler`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, every breath you take and every bite you eat connects you to a quiet chemistry happening trillions of times right now inside you, and inside nearly every living thing on Earth. Today we go deep into the two greatest energy reactions in biology: photosynthesis, where plants capture sunlight and lock it into sugar, and cellular respiration, where that sugar is broken back down to power life. Here's the breathtaking part: these two are mirror images of each other, two halves of one grand cycle. Photosynthesis takes in carbon dioxide and water and, using light, builds glucose and releases oxygen. Respiration takes that glucose and oxygen and releases energy, carbon dioxide, and water, the exact inputs photosynthesis needs. The waste of one is the fuel of the other. Together they move energy from the Sun through every living thing, and cycle the very atoms of air between plants and animals in an endless loop you are part of with every breath. We'll trace where the energy actually goes, meet the molecule that carries it (ATP), and see why you, a tree, and a mushroom are all running versions of the same ancient chemistry. By the end, you'll understand the engine that powers all life. Onward.`,
          headline: `Cellular Respiration and Photosynthesis in Depth`,
          subtitle: `The two reactions that power nearly all life on Earth. A Case Study.`,
          visual: `/voyager-assets/science/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Engine Of Almost All Life`,
          paragraphs: [
            `Nearly everything alive runs on energy that traces back to the Sun. Plants and other producers capture that sunlight and store it in sugar through photosynthesis. Then living things, plants and animals alike, release that stored energy to power growth, movement, and thought through cellular respiration. These two reactions are the engine of almost all life.`,
            `They are not separate stories but two halves of one cycle, near-perfect mirror images. Photosynthesis takes in carbon dioxide and water and, powered by light, builds glucose and releases oxygen. Respiration runs it in reverse: it takes glucose and oxygen and releases energy, carbon dioxide, and water. The outputs of each are precisely the inputs of the other.`,
            `This mirroring creates an endless loop. The oxygen a plant releases, an animal breathes in; the carbon dioxide an animal exhales, a plant takes up. Energy flows one way, from Sun to sugar to life to heat, while the atoms cycle round and round. You are woven into this loop with every breath you take and every plant-grown bite you eat.`,
          ],
          image: `/voyager-assets/science/l01-s1-engine.webp`,
          imageCaption: `Nearly everything alive runs on energy tracing back to the SUN. Producers capture sunlight and store it in sugar through PHOTOSYNTHESIS; living things release that stored energy through CELLULAR RESPIRATION to power growth, movement, and thought. These two reactions are the engine of almost all life, and they're two halves of one cycle, near-perfect MIRROR IMAGES. Photosynthesis takes in carbon dioxide and water and, using light, builds glucose and releases oxygen. Respiration runs it in reverse: glucose plus oxygen release energy, carbon dioxide, and water. The outputs of each are the inputs of the other. So oxygen a plant releases, an animal breathes; carbon dioxide an animal exhales, a plant takes up. Energy flows one way; the atoms cycle endlessly. You are woven into this loop.`,
          vocab: [
            { word: `photosynthesis`,
              definition: `The process where producers use light energy to turn carbon dioxide and water into glucose, releasing oxygen. It stores the Sun's energy in sugar.`,
              audioPrompt: `Photosynthesis, {name}, is how plants and other producers use light energy to turn carbon dioxide and water into glucose, releasing oxygen. It captures the Sun's energy and locks it into sugar, the fuel for nearly all life.` },
            { word: `cellular respiration`,
              definition: `The process where cells break down glucose using oxygen to release usable energy, plus carbon dioxide and water. It's photosynthesis run in reverse.`,
              audioPrompt: `Cellular respiration, {name}, is how your cells break down glucose using oxygen to release usable energy, giving off carbon dioxide and water. It's essentially photosynthesis run in reverse, releasing the energy that was stored in sugar.` },
            { word: `the carbon-oxygen cycle`,
              definition: `The endless loop where photosynthesis and respiration trade carbon dioxide and oxygen back and forth between plants and animals.`,
              audioPrompt: `The carbon-oxygen cycle, {name}, is the endless loop where photosynthesis and respiration trade gases: plants release the oxygen animals breathe, and animals release the carbon dioxide plants take in. The two processes feed each other forever.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Photosynthesis Up Close`,
          paragraphs: [
            `Photosynthesis happens inside chloroplasts, tiny green factories packed into plant cells. Their green color comes from chlorophyll, a pigment that absorbs light, mostly red and blue, and reflects green, which is why leaves look green to us. Chlorophyll is the antenna that catches the Sun's energy to start the whole process.`,
            `The process runs in two stages. First, the light-dependent reactions capture light energy and use it to split water, releasing oxygen as a by-product (the oxygen you breathe came from split water molecules). This stage also stores energy in short-term carrier molecules to power the next step.`,
            `Second, the light-independent reactions, often called the Calvin cycle, use that captured energy to build glucose from carbon dioxide pulled out of the air. This stage doesn't need light directly; it runs on the energy the first stage banked. The end result: light energy is transformed into chemical energy, locked safely inside a sugar molecule.`,
          ],
          image: `/voyager-assets/science/l01-s2-photo.webp`,
          imageCaption: `Photosynthesis happens inside CHLOROPLASTS, tiny green factories in plant cells. Their green comes from CHLOROPHYLL, a pigment that absorbs red and blue light and reflects green, which is why leaves look green. Chlorophyll is the antenna catching the Sun's energy. The process has two stages. The LIGHT-DEPENDENT reactions capture light and use it to split water, releasing oxygen as a by-product (the oxygen you breathe came from split water) and banking energy in carrier molecules. The LIGHT-INDEPENDENT reactions (the Calvin cycle) then use that banked energy to build glucose from carbon dioxide pulled from the air, no direct light needed. The result: light energy becomes chemical energy, locked safely inside sugar.`,
          vocab: [
            { word: `chloroplast`,
              definition: `The organelle in plant cells where photosynthesis happens. Its green pigment chlorophyll captures light to power the process.`,
              audioPrompt: `A chloroplast, {name}, is the tiny green factory inside plant cells where photosynthesis happens. It's packed with chlorophyll, the pigment that captures sunlight to drive the whole process of building sugar.` },
            { word: `chlorophyll`,
              definition: `The green pigment that absorbs light (mostly red and blue) to power photosynthesis. It reflects green light, which is why leaves look green.`,
              audioPrompt: `Chlorophyll, {name}, is the green pigment that absorbs light, mostly red and blue, to power photosynthesis. It reflects green light back to your eyes, which is exactly why leaves and plants look green to us.` },
            { word: `the Calvin cycle`,
              definition: `The light-independent stage of photosynthesis that builds glucose from carbon dioxide, using the energy captured in the light-dependent reactions.`,
              audioPrompt: `The Calvin cycle, {name}, is the second stage of photosynthesis, where the plant builds glucose from carbon dioxide using energy banked in the first stage. It doesn't need light directly, just the energy already captured.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Respiration And The Energy Molecule`,
          paragraphs: [
            `Now the reverse. Cellular respiration takes the glucose built by photosynthesis (or eaten in food) and breaks it down, using oxygen, to release its stored energy. This happens largely inside mitochondria, often called the powerhouses of the cell, in nearly every cell of nearly every living thing, including yours, right now.`,
            `The released energy isn't used directly. Instead, it's packaged into a molecule called ATP, the cell's universal energy currency. Think of glucose as cash in the bank and ATP as the spendable coins your cells actually use. Every time a cell does work, contracting a muscle, firing a neuron, building a protein, it spends ATP.`,
            `Respiration is remarkably efficient: breaking down one glucose molecule with oxygen yields a large haul of ATP. This is why oxygen matters so much, it allows this high-energy pathway. Without enough oxygen, cells fall back on a far less efficient backup that produces only a little ATP, which is why you can't sprint forever.`,
          ],
          image: `/voyager-assets/science/l01-s3-resp.webp`,
          imageCaption: `Now the reverse. CELLULAR RESPIRATION takes glucose (built by photosynthesis or eaten in food) and breaks it down, using oxygen, to release stored energy. This happens largely inside MITOCHONDRIA, the powerhouses of the cell, in nearly every cell of nearly every living thing, including yours right now. The released energy isn't used directly; it's packaged into ATP, the cell's universal energy currency. Think of glucose as cash in the bank and ATP as spendable coins. Every time a cell contracts a muscle, fires a neuron, or builds a protein, it spends ATP. Respiration is efficient: one glucose with oxygen yields a large haul of ATP. Without enough oxygen, cells use a far less efficient backup, which is why you can't sprint forever.`,
          vocab: [
            { word: `mitochondria`,
              definition: `The organelles where most cellular respiration happens, releasing energy from glucose. Often called the powerhouses of the cell.`,
              audioPrompt: `Mitochondria, {name}, are the organelles where most cellular respiration happens, releasing energy from glucose. They're often called the powerhouses of the cell, and they're working in nearly every one of your cells right now.` },
            { word: `ATP`,
              definition: `Adenosine triphosphate, the cell's universal energy currency. Respiration packages released energy into ATP, which cells spend to do work.`,
              audioPrompt: `ATP, {name}, stands for adenosine triphosphate, and it's the cell's energy currency. Respiration packages the energy from glucose into ATP, the spendable coins your cells use every time they do any work.` },
            { word: `glucose`,
              definition: `The simple sugar that stores chemical energy. Photosynthesis builds it; respiration breaks it down to release energy as ATP.`,
              audioPrompt: `Glucose, {name}, is the simple sugar that stores chemical energy. Photosynthesis builds glucose to capture the Sun's energy, and respiration breaks it back down to release that energy as usable ATP.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Following The Energy And The Atoms`,
          paragraphs: [
            `Two big rules govern this whole system, and keeping them straight is the key to truly understanding it. The first: energy flows, it does not cycle. Energy enters as sunlight, gets stored in glucose, is released and used to do work, and finally leaves as heat. At each step, some is lost as heat, so the flow is one-way, Sun to life to heat, never looping back.`,
            `The second rule: matter cycles, it is not used up. The carbon, hydrogen, and oxygen atoms are not created or destroyed; they're endlessly rearranged. A carbon atom can travel from air to leaf to sugar to your cells to your breath and back to the air, again and again. The same atoms have been recycled through life for billions of years.`,
            `So the grand picture is two intertwined truths: a one-way river of energy from the Sun, and a closed loop of cycling atoms. This is why a forest needs constant sunlight (energy keeps leaving as heat) but doesn't run out of carbon atoms (they cycle). Confusing these two, thinking energy cycles or matter is "used up", is the most common mistake people make here.`,
          ],
          image: `/voyager-assets/science/l01-s4-flow.webp`,
          imageCaption: `Two big rules govern the system. First: ENERGY FLOWS, it does not cycle. Energy enters as sunlight, is stored in glucose, released to do work, and leaves as HEAT. Some is lost as heat at each step, so the flow is one-way, Sun to life to heat, never looping back. Second: MATTER CYCLES, it is not used up. Carbon, hydrogen, and oxygen atoms aren't created or destroyed, just rearranged. A carbon atom travels from air to leaf to sugar to your cells to your breath and back, endlessly. The same atoms have cycled through life for billions of years. The grand picture: a one-way RIVER of energy, and a closed LOOP of atoms. Confusing the two, thinking energy cycles or matter is "used up", is the most common mistake here.`,
          vocab: [
            { word: `energy flows`,
              definition: `Energy moves one way through living systems, from sunlight to glucose to work to heat, and is not recycled. Some is lost as heat at every step.`,
              audioPrompt: `Energy flows, {name}, meaning it moves one way through life: from sunlight, into glucose, released to do work, and finally lost as heat. It never loops back, which is why life needs a constant supply of new energy from the Sun.` },
            { word: `matter cycles`,
              definition: `Atoms are endlessly rearranged and reused, never created or destroyed. The same carbon and oxygen atoms cycle through living things again and again.`,
              audioPrompt: `Matter cycles, {name}, meaning atoms are never created or destroyed, just rearranged and reused. The same carbon and oxygen atoms travel through plants, animals, air, and back, recycling through life for billions of years.` },
            { word: `conservation of matter`,
              definition: `The principle that atoms are never lost in a reaction, only rearranged. It's why the inputs and outputs of these reactions always balance.`,
              audioPrompt: `Conservation of matter, {name}, is the principle that atoms are never lost in a reaction, only rearranged. It's why photosynthesis and respiration balance perfectly: every atom that goes in comes out, just in a different form.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Photosynthesis and respiration are the mirror-image engine of almost all life. Photosynthesis, in chloroplasts using chlorophyll, captures light to build glucose from carbon dioxide and water, releasing oxygen. Respiration, in mitochondria, breaks glucose down with oxygen to release energy as ATP, giving off carbon dioxide and water.`,
            `Together they form a grand cycle: the outputs of each are the inputs of the other, trading oxygen and carbon dioxide between plants and animals forever. And two rules govern it all, energy flows one way (Sun to life to heat) while matter cycles endlessly (the same atoms, reused). Get those two straight and the whole system clicks into place.`,
            `Now the case-study screen puts you in the lab as a scientist, with five real investigations: a plant in the dark, exercising muscles gasping for air, a sealed jar of plants and animals, the source of a tree's mass, and yeast making bread rise. For each, use what you've learned to reason like a biologist, trace the energy, follow the atoms, and explain what's really happening. Onward.`,
          ],
          image: `/voyager-assets/science/l01-s5-before.webp`,
          imageCaption: `Threads together. Photosynthesis and respiration are the mirror-image ENGINE of almost all life. Photosynthesis, in chloroplasts using chlorophyll, captures light to build glucose from carbon dioxide and water, releasing oxygen. Respiration, in mitochondria, breaks glucose down with oxygen to release energy as ATP, giving off carbon dioxide and water. Together they form a grand CYCLE: each one's outputs are the other's inputs, trading oxygen and carbon dioxide forever. Two rules govern it: ENERGY FLOWS one way (Sun to life to heat) while MATTER CYCLES endlessly. The case-study screen puts you in the lab with five real investigations: a plant in the dark, gasping muscles, a sealed jar, a tree's mass, and yeast in bread. Reason like a biologist.`,
          vocab: [
            { word: `producer`,
              definition: `An organism, like a plant, that makes its own food through photosynthesis, capturing energy that then flows to all other living things.`,
              audioPrompt: `A producer, {name}, is an organism like a plant that makes its own food through photosynthesis. Producers capture the Sun's energy first, and that energy then flows through every other living thing in an ecosystem.` },
            { word: `aerobic vs. anaerobic`,
              definition: `Aerobic respiration uses oxygen and yields lots of ATP; anaerobic (without oxygen) is a far less efficient backup that yields little.`,
              audioPrompt: `Aerobic versus anaerobic, {name}: aerobic respiration uses oxygen and produces lots of ATP, while anaerobic respiration runs without oxygen and produces very little. That's why hard exercise, which outpaces your oxygen, can't last long.` },
            { word: `by-product`,
              definition: `A secondary substance produced by a reaction. Oxygen is a by-product of photosynthesis; carbon dioxide and water are by-products of respiration.`,
              audioPrompt: `A by-product, {name}, is a secondary substance a reaction produces. The oxygen you breathe is actually a by-product of photosynthesis, and the carbon dioxide and water you exhale are by-products of respiration.` },
          ],
        },

        {
          id: `l01-case-study`,
          type: `case-study`,
          headline: `Five Investigations In The Lab`,
          intro: `{name}, you're the scientist now. Here are five real investigations into photosynthesis and respiration. For each, reason it through: trace the energy, follow the atoms, and explain what's really happening using what you've learned.`,
          cases: [
            {
              id: `c1`,
              title: `The plant left in the dark`,
              type: `Controlled experiment`,
              description: `You place one healthy plant in bright light and an identical one in complete darkness, both watered equally. After two weeks, the dark plant is yellowed, weak, and dying, while the lit plant thrives. Explain why, in terms of energy.`,
              questions: [
                `Why can't the plant survive without light, even with plenty of water?`,
                `Is the dark plant still doing respiration? How can you tell?`,
                `What does this reveal about the Sun's role for all life?`,
              ],
              evaluation: `The plant in the dark is dying because, without light, it cannot run photosynthesis, so it can't build the glucose it needs for fuel. Water alone isn't enough; photosynthesis specifically requires light energy to power the splitting of water and the building of sugar. Crucially, the dark plant is still doing cellular respiration the whole time, all living cells must respire constantly to make ATP, so it keeps burning through its stored glucose to stay alive. The yellowing and weakening is the visible sign of this: it's consuming its energy reserves (and breaking down chlorophyll) faster than it can replace them, because the income (photosynthesis) has stopped while the spending (respiration) continues. Eventually the reserves run out and it dies. This reveals the Sun's foundational role: light energy is the original input for almost all life. A plant is a producer that captures that energy first, and without it, the whole one-way flow of energy, from Sun to glucose to life, never begins. No light, no new energy, no life.`,
            },
            {
              id: `c2`,
              title: `Muscles gasping for air`,
              type: `Physiology`,
              description: `A sprinter runs all-out. Within seconds they're breathing hard, and soon their leg muscles burn and tire. A marathoner, going slower, can run for hours without that burning. Explain the difference using aerobic and anaerobic respiration.`,
              questions: [
                `Why does the sprinter start breathing hard almost immediately?`,
                `Why do the sprinter's muscles burn and tire so fast?`,
                `Why can the slower marathoner keep going far longer?`,
              ],
              evaluation: `The sprinter breathes hard immediately because their muscles are demanding energy faster than oxygen can be delivered. Aerobic respiration (with oxygen) produces a large haul of ATP per glucose, but it depends on a steady oxygen supply; the heavy breathing is the body desperately trying to deliver more. When demand outruns the oxygen supply, the muscles switch to anaerobic respiration, the backup pathway that works without oxygen. The problem is that anaerobic respiration is far less efficient, yielding only a tiny amount of ATP per glucose, and it produces lactic acid as a by-product, which contributes to that burning, tiring sensation. So the sprinter's muscles fatigue fast because they're running on the weak, short-term backup system. The marathoner, moving slower, keeps their energy demand low enough that oxygen delivery can keep pace, so they stay in efficient aerobic respiration the whole time. That's why they can keep going for hours: the high-yield, oxygen-using pathway is sustainable, while the anaerobic sprint pathway can only last seconds to minutes. It's a vivid demonstration of why oxygen matters so much to respiration's efficiency.`,
            },
            {
              id: `c3`,
              title: `The sealed jar of life`,
              type: `Systems experiment`,
              description: `A small plant and a tiny snail are sealed together in a clear glass jar with water and air, no opening. Placed in a sunny window, both survive for weeks. Sealed in a dark closet, both soon die. Explain how the lit jar keeps both alive.`,
              questions: [
                `In the light, how do the plant and snail help keep each other alive?`,
                `Why does the same sealed jar fail in the dark?`,
                `What's still entering the lit jar, even though it's sealed to air?`,
              ],
              evaluation: `In the light, the plant and snail form a tiny balanced version of the great carbon-oxygen cycle. The plant photosynthesizes, taking in the carbon dioxide the snail exhales and releasing oxygen, which the snail breathes. The snail respires, taking in that oxygen and releasing carbon dioxide, which the plant uses. Their gas outputs are each other's inputs, so the sealed air keeps getting recycled and neither runs out of what it needs. The plant also produces glucose, supporting the food web in the jar. In the dark, this collapses: without light, the plant can't photosynthesize, so it stops producing oxygen and stops removing carbon dioxide, while both organisms keep respiring and using up the oxygen. The oxygen runs out, carbon dioxide builds up, and both die. The key insight is what's still entering the sealed jar even though no air gets in: light energy. The jar is closed to matter (the same atoms just cycle between plant and snail) but open to energy (sunlight streams in and heat radiates out). This is the whole system in miniature: matter cycles in a closed loop, while energy flows through one way, and light is the input that powers it all.`,
            },
            {
              id: `c4`,
              title: `Where does a tree's mass come from?`,
              type: `Classic misconception`,
              description: `A tree seed weighing a fraction of a gram grows into a massive tree weighing thousands of kilograms. Most people guess all that mass came from the soil. But careful experiments show the soil barely loses any weight. So where does the tree's mass actually come from?`,
              questions: [
                `If not mostly from soil, where does the bulk of a tree's mass come from?`,
                `How does photosynthesis explain this surprising answer?`,
                `What does this reveal about the carbon atoms in wood?`,
              ],
              evaluation: `This is one of science's most surprising and beautiful answers: the bulk of a tree's mass comes from the air, not the soil. Specifically, it comes from carbon dioxide pulled out of the atmosphere during photosynthesis. In the Calvin cycle, the carbon atoms from carbon dioxide are assembled into glucose, and that glucose is used to build cellulose and other molecules that form wood, leaves, and roots. So the solid trunk of a giant tree is, in large part, carbon that was floating in the air as an invisible gas. Water (from soil and rain) contributes too, and soil provides small amounts of minerals, but the dry mass is mostly captured atmospheric carbon. This is why the soil barely lightens: the tree isn't "eating" the soil, it's building itself largely out of thin air using the Sun's energy. It reveals the carbon cycle vividly: the carbon atoms locked in wood were recently in the atmosphere, and when wood burns or decays, that carbon returns to the air. Matter cycles, those same carbon atoms move from air to tree and eventually back, and conservation of matter holds throughout: nothing is created, only rearranged from gas into solid living structure.`,
            },
            {
              id: `c5`,
              title: `Yeast and the rising bread`,
              type: `Applied biology`,
              description: `A baker mixes flour, water, sugar, and yeast (a living fungus). Soon the dough puffs up with bubbles and develops a slightly tangy, alcoholic smell, all without any oxygen reaching deep inside the dough. Explain what the yeast is doing.`,
              questions: [
                `What process are the yeast doing, and why this one specifically?`,
                `What gas makes the bread rise, and where does it come from?`,
                `How does this connect to the sprinter's burning muscles?`,
              ],
              evaluation: `The yeast are performing fermentation, a form of anaerobic respiration, because deep in the dough there's little to no oxygen available. Like all living things, yeast need energy (ATP) and get it by breaking down the sugar in the dough. Without oxygen, they can't use efficient aerobic respiration, so they fall back on the anaerobic pathway, which still releases a little ATP but produces distinctive by-products: carbon dioxide gas and alcohol. The carbon dioxide is what makes the bread rise, the gas gets trapped as bubbles in the stretchy dough, puffing it up, and the alcohol (which mostly bakes off) explains the tangy, slightly boozy smell. This connects directly to the sprinter's burning muscles: both are cases of anaerobic respiration kicking in when oxygen is scarce. In the sprinter, the human by-product is lactic acid; in yeast, it's carbon dioxide and alcohol. Same core principle, different organism and different by-products: when oxygen runs short, life switches to the less efficient anaerobic backup to keep making ATP. Bakers and brewers have harnessed this microscopic chemistry for thousands of years without knowing the biology behind it.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, how do photosynthesis and respiration together power life and cycle the atoms of air? Which case surprised you most, and what's the single biggest idea you'd take away about energy and matter in living things? In 5-6 sentences.`,
          reflectionPrompt: `The carbon atoms in your body were recently in the air, in plants, in other living things, and will move on again. How does it feel to realize you're not a fixed object but a pattern that matter flows through, woven into a cycle billions of years old?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How are photosynthesis and cellular respiration related?`,
              options: [
                `They are unrelated processes that never affect each other.`,
                `They are near-mirror images: the outputs of each are the inputs of the other.`,
                `They are identical processes happening in the exact same way.`,
                `Respiration happens only in plants and photosynthesis only in animals.`,
              ],
              correctIndex: 1,
              explanation: `They're near-mirror images: photosynthesis takes in carbon dioxide and water to make glucose and oxygen, while respiration takes glucose and oxygen to release energy, carbon dioxide, and water, each one's outputs are the other's inputs. The distractors call them unrelated, identical, or assign them to the wrong organisms.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Where does photosynthesis take place, and what pigment captures the light?`,
              options: [
                `In the mitochondria, using a pigment called ATP.`,
                `In the nucleus, using a pigment called glucose.`,
                `In the chloroplasts, using a pigment called chlorophyll.`,
                `In the cell wall, using a pigment called oxygen.`,
              ],
              correctIndex: 2,
              explanation: `Photosynthesis happens in chloroplasts, where the green pigment chlorophyll absorbs light to power the process. The distractors confuse the location (mitochondria, nucleus, cell wall) or call non-pigments (ATP, glucose, oxygen) pigments.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is ATP's role in the cell?`,
              options: [
                `It is the cell's universal energy currency, the spendable form of energy.`,
                `It is the pigment that absorbs sunlight in plants.`,
                `It is the carbon-dioxide waste gas that cells produce and breathe out during respiration.`,
                `It is the long-term storage form of food in the body.`,
              ],
              correctIndex: 0,
              explanation: `ATP is the cell's universal energy currency, the spendable "coins" cells use to do work, packaged from the energy released by respiration. The distractors describe chlorophyll, carbon dioxide, and stored fat/glucose instead.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `The lesson says energy and matter behave differently in living systems. Which is correct?`,
              options: [
                `Both energy and matter cycle endlessly in a closed loop.`,
                `Both energy and matter flow one way and are eventually used up.`,
                `Energy cycles in a loop, while matter flows one way and leaves as heat.`,
                `Energy flows one way (and leaves as heat), while matter cycles endlessly.`,
              ],
              correctIndex: 3,
              explanation: `Energy flows one way, from sunlight to glucose to work to heat, never looping back, while matter (atoms) cycles endlessly, rearranged but never used up. The distractors mix these up, which is the most common mistake in this topic.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does the oxygen you breathe ultimately come from plants?`,
              options: [
                `Plants manufacture oxygen atoms out of nothing inside their roots.`,
                `Oxygen is released as a by-product when photosynthesis splits water.`,
                `Plants breathe in oxygen and then exhale even more of it.`,
                `Oxygen is the main food that plants produce for animals to eat.`,
              ],
              correctIndex: 1,
              explanation: `In the light-dependent reactions, photosynthesis splits water molecules, releasing oxygen as a by-product, the oxygen you breathe. The distractors invent oxygen "from nothing," misdescribe plant breathing, or confuse oxygen with food.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `A sprinter's muscles burn and tire within seconds, but a slow marathoner can run for hours. Why?`,
              options: [
                `The sprinter outpaces their oxygen supply and switches to less efficient anaerobic respiration.`,
                `The marathoner has stopped doing respiration entirely to save energy.`,
                `The sprinter's muscles completely run out of every single type of glucose almost instantly.`,
                `The marathoner produces far more lactic acid, which fuels the muscles.`,
              ],
              correctIndex: 0,
              explanation: `The sprinter's demand outruns oxygen delivery, forcing the muscles into anaerobic respiration, which yields little ATP and produces lactic acid (the burn). The marathoner stays in efficient aerobic respiration. The distractors claim respiration stops, glucose vanishes, or lactic acid is fuel.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Where does most of a large tree's mass actually come from?`,
              options: [
                `Almost entirely from minerals pulled up out of the soil.`,
                `Mostly from carbon dioxide captured from the air during photosynthesis.`,
                `Mostly from the water it absorbs, frozen into solid wood.`,
                `From sunlight itself, which turns directly into solid matter.`,
              ],
              correctIndex: 1,
              explanation: `A tree's mass comes mostly from carbon dioxide pulled from the air, whose carbon atoms are built into glucose and then into wood, which is why the soil barely loses weight. The distractors credit soil, frozen water, or sunlight-turned-matter (energy isn't matter).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Yeast make bread rise by producing a gas with little oxygen present. What process is this, and what's the gas?`,
              options: [
                `Photosynthesis, producing oxygen gas.`,
                `Aerobic respiration, producing pure water vapor.`,
                `Anaerobic respiration (fermentation), producing carbon dioxide gas.`,
                `Digestion of the flour, which produces nitrogen gas as its main by-product.`,
              ],
              correctIndex: 2,
              explanation: `With little oxygen, yeast use anaerobic respiration (fermentation), breaking down sugar to make ATP and producing carbon dioxide (which raises the bread) and alcohol. The distractors misname the process or the gas.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because matter cycles through living things, energy must also cycle in the same endless loop, returning to the Sun to be used again.`,
              correctAnswer: false,
              explanation: `False, and untangling this is the single most important conceptual step in understanding how life is powered, because matter and energy behave in fundamentally different ways. Matter does cycle: the carbon, hydrogen, oxygen, and other atoms in living things are never created or destroyed, only rearranged. The same carbon atom can travel from the air into a leaf (as carbon dioxide built into glucose), into an animal that eats the plant, into that animal's breath as carbon dioxide, and back into the air, around and around, for billions of years. That part of the statement is correct. But energy does not cycle, it flows one way, and this is the crucial difference. Energy enters living systems almost entirely as sunlight. Photosynthesis captures some of it and stores it in glucose. Respiration releases that stored energy so cells can do work, build tissues, contract muscles, fire neurons. But at every single step, some energy is lost as heat, and that heat radiates away into the environment and eventually out to space. It does not get recaptured and reused; it does not loop back to the Sun. This is why life needs a constant, never-ending input of fresh energy from the Sun. If the Sun switched off, the atoms on Earth would still be here, but the one-way river of energy would dry up, and life would grind to a halt. So the right mental model is two different shapes at once: matter moves in closed loops (cycles), while energy moves in a one-way line (flows from Sun, through life, out as heat). Confusing the two, imagining energy cycles like matter does, is the most common and most important misconception in this entire topic.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says: "Plants do photosynthesis and animals do respiration, they're opposites, so plants don't respire and animals don't need plants." Using the lesson, what's the best correction?`,
              options: [
                `They're completely right; plants never respire and animals are independent of plants.`,
                `Plants actually do both: they photosynthesize AND respire constantly (all living cells need ATP), and animals depend on plants for both the oxygen and the food energy photosynthesis provides, so the two processes and the two kingdoms are deeply linked, not separate.`,
                `Tell them respiration isn't real and only photosynthesis matters for life.`,
                `Agree that animals make their own food, so plants are unnecessary.`,
              ],
              correctIndex: 1,
              explanation: `The correction applies two key ideas. First, plants do respire, all living cells must run respiration constantly to make ATP (the dark-plant case showed a plant respiring through its reserves), so plants do both processes. Second, animals depend completely on plants, for the oxygen photosynthesis releases and the glucose energy it stores, so the kingdoms are deeply linked. The distractors accept the false claim, deny respiration, or call plants unnecessary.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cycle`, category: `Part of the cycle`, prompt: `The carbon atoms in your body were recently in the air and in other living things, and will move on again. How does it change your sense of yourself to know you're a pattern that matter flows through, not a fixed, separate object?` },
            { id: `reflect-sun`, category: `Eating sunlight`, prompt: `Almost every bit of energy in your body traces back to sunlight captured by a plant. In a real sense, you run on the Sun. Does that change how you think about a meal, a forest, or a sunny day?` },
            { id: `reflect-breath`, category: `The shared air`, prompt: `Every breath you exhale feeds plants, and every breath you take was made by them. You and the plant world are trading the same atoms constantly. What does that interdependence make you feel about the living world around you?` },
            { id: `reflect-heritage`, category: `Teaching the engine`, prompt: `Caro, you're building science lessons for conscious families. How would you help a child feel the wonder of this, that they're powered by sunlight and woven into a cycle billions of years old, rather than just memorizing two equations?` },
            { id: `reflect-wonder`, category: `Invisible chemistry`, prompt: `Right now, trillions of times a second inside you, glucose is being broken down to keep you alive, and you feel none of it. What does it stir in you to know this silent, ceaseless chemistry is the reason you're here to read this?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If energy is always lost as heat at every step and never recycled, life is fundamentally "leaky" and utterly dependent on the Sun's constant input. Sit with that fragility. Why might it matter, for how we treat the one source that keeps the whole system running?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This chemistry is invisible, but you can make it visible and feel it in your own body. Two paths.`,
          familyActivity: {
            title: `See The Invisible Reactions`,
            duration: `One afternoon (plus a few days to watch)`,
            description: `Make photosynthesis and respiration visible with simple, safe demonstrations, then talk through the science together. First, watch a plant "breathe": submerge a few fresh green leaves (or a sprig of an aquatic plant like Elodea) in a clear bowl of water in bright sunlight, and watch tiny bubbles form on the leaves over time. Those bubbles are oxygen, the by-product of photosynthesis, made visible. Move the bowl into the shade and watch the bubbling slow or stop, proof that light powers the reaction. Second, watch respiration in yeast: in a bottle, mix warm water, sugar, and a packet of yeast, then stretch a balloon over the top. Over the next hour the balloon inflates, that's carbon dioxide gas from the yeast doing anaerobic respiration on the sugar, the very same process that makes bread rise. Third, feel respiration in your own body: do a short burst of intense exercise (sprint in place, jumping jacks) and notice how fast you start breathing hard and how your muscles tire, your cells demanding oxygen for respiration and switching to the anaerobic backup. As you watch each one, trace it out loud together: Where's the energy coming from? Where are the atoms going? Which is photosynthesis and which is respiration? The goal is to turn two textbook equations into something your family can see bubbling, feel in their own lungs, and recognize as the quiet engine running inside every living thing around them.`,
          },
          projectOption: {
            title: `The Carbon Atom's Journey, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Trace the epic journey of a single carbon atom through the living world, and tell its story. Week 1, follow the science: pick one carbon atom and map a realistic path it could take through the carbon cycle, using everything you've learned. For example: it starts as carbon dioxide in the air, gets pulled into a leaf during photosynthesis and built into glucose, becomes part of the plant's wood or fruit, is eaten by an animal (maybe you), gets broken down in respiration to release energy, and is exhaled back into the air as carbon dioxide, ready to begin again. Research and accurately describe each transformation: what reaction moves the atom at each step, what molecule it's part of, and where the energy is flowing meanwhile. Include at least one "long pause," such as the atom getting locked in wood, fossil fuel, or ocean for a long time. Week 2, tell the story: turn your scientifically accurate journey into something vivid, a illustrated story map, a short narrated video, a comic, or a first-person "diary of a carbon atom." The art should make the science feel alive while staying true to it: label each step with the real process (photosynthesis, respiration, combustion, decay) and show the difference between matter cycling (the atom keeps going) and energy flowing (sunlight in, heat out). You'll come away understanding the carbon and oxygen cycles deeply, by living inside them, and you'll have created something that could teach the whole beautiful system to someone else.`,
            offerToParent: `Parent: opt your child into the Carbon Atom's Journey project. Tracing a single carbon atom accurately through photosynthesis, consumption, respiration, and decay, while distinguishing matter cycling from energy flowing, develops exactly the cross-cutting NGSS concepts of matter and energy in systems, and corrects the field's most common misconception in the process. Turning rigorous science into a vivid story deepens understanding and builds science-communication skill. It's creative, conceptually demanding, NGSS-aligned work that leaves your child genuinely understanding the engine that powers life, not just memorizing two equations.`,
          },
          identityQuestion: `If you become someone who can trace energy and matter through living systems, who sees the invisible chemistry connecting the air, the plants, and your own breath, what kind of thinker does that make you, someone who understands how the living world actually works as a connected system, that a person who only memorized "plants make oxygen" can never quite become?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can trace energy and atoms through living things.`,
            `A thinker who sees the invisible chemistry connecting all life.`,
            `Someone who knows they run on captured sunlight.`,
          ],
          saveKey: `identity_responses_sci_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. One down, and you've just understood the engine that powers nearly all life on Earth. You learned that photosynthesis and respiration are mirror images, two halves of one grand cycle. Photosynthesis, inside chloroplasts using chlorophyll, captures light to build glucose from carbon dioxide and water, releasing the oxygen you breathe. Respiration, inside mitochondria, breaks that glucose down with oxygen to release energy packaged as ATP, the cell's spendable currency, giving back carbon dioxide and water. You learned the two great rules that confuse almost everyone: energy flows one way, from Sun to life to heat, while matter cycles endlessly, the same atoms reused forever. And as a scientist, you reasoned through real investigations: why a plant dies in the dark, why sprinters' muscles burn, how a sealed jar of life survives, where a tree's mass really comes from (the air!), and how yeast raise bread. You now see the invisible chemistry connecting every breath and every meal to the Sun. Next, we go deeper still, into the molecule of life itself, and how your genes are read and turned into the proteins that build you. Onward, {name}. — Cosmo`,
          badge: `energy-cycler`,
          badgeName: `Energy Cycler`,
          xpEarned: 75,
          competencies: [
            `Understands photosynthesis and respiration as complementary, mirror-image reactions in one cycle`,
            `Knows the locations and key players: chloroplasts/chlorophyll, mitochondria, glucose, and ATP`,
            `Distinguishes the two stages of photosynthesis and the role of splitting water to release oxygen`,
            `Grasps the crucial principle that energy flows one way while matter cycles endlessly`,
            `Explains aerobic vs. anaerobic respiration and why oxygen affects efficiency`,
            `Corrects the common misconception about where a tree's mass comes from (captured air)`,
            `Reasons through real biological investigations, tracing energy and matter through living systems`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Molecular Genetics — Gene Expression and Protein Synthesis`,
            hook: `How the code in your DNA becomes the proteins that build you. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L01 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
