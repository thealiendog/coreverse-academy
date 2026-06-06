// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L09 — Chemistry: Reaction Rates and Equilibrium
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS1 (Chemical Reactions; Rates and Equilibrium)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l09-v1";

const SCIENCE_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-09`,
      title: `Chemistry: Reaction Rates and Equilibrium`,
      duration: 35,
      xpReward: 75,
      badge: `balance-finder`,
      badgeName: `Balance Finder`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, why does milk spoil in days but honey lasts for thousands of years? Why does food cook faster at higher heat, and last longer in the fridge? Why does iron rust slowly over months, while gunpowder reacts in an instant? These everyday mysteries all come down to one question: how fast does a reaction go? In the last lesson you learned whether reactions release or absorb energy. Now we ask about speed, and then about something even more subtle and beautiful: balance. We'll discover what controls reaction rates, the factors you can turn up or down like dials: temperature, concentration, surface area, and catalysts. Understanding these explains cooking, refrigeration, medicine, and more. Then we'll meet a profound idea: many reactions don't simply finish and stop. Instead, they reach equilibrium, a state where the forward and reverse reactions happen at the same rate, so the amounts stop changing even though, underneath, both reactions are still happening constantly. It's a dynamic balance, like a busy escalator where people walk up at exactly the rate it carries them down, so the crowd looks still while everyone's moving. We'll even learn how to nudge that balance, a principle that lets chemists and your own body control reactions with astonishing precision. By the end, you'll understand the speed and balance of the chemical world. Onward.`,
          headline: `Chemistry: Reaction Rates and Equilibrium`,
          subtitle: `How fast reactions go, and how they settle into a dynamic balance. A Case Study.`,
          visual: `/voyager-assets/science/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Reactions Have Speeds`,
          paragraphs: [
            `Not all reactions happen at the same pace. Some are nearly instant, an explosion, a flash of flame. Others are agonizingly slow, iron rusting over months, a fossil forming over millennia. The speed of a reaction, how quickly reactants turn into products, is called the reaction rate, and it varies enormously across chemistry.`,
            `Why do reactions have speeds at all? Because for atoms or molecules to react, they must collide, and collide hard enough and in the right way to break their bonds and rearrange. Reactions happen through countless tiny collisions. Anything that makes those collisions more frequent or more energetic speeds the reaction up; anything that makes them rarer or gentler slows it down.`,
            `This "collision" picture is the key to controlling reactions. It means reaction rate isn't fixed, it's something we can change by turning certain dials. Understanding these dials lets us speed up reactions we want (cooking, manufacturing) and slow down ones we don't (food spoiling, metal corroding). Rate is a thing we can control, and that's enormously useful.`,
          ],
          image: `/voyager-assets/science/l09-s1-speeds.webp`,
          imageCaption: `Not all reactions happen at the same pace. Some are nearly instant, an explosion, a flash of flame. Others are agonizingly slow, iron rusting over months, a fossil forming over millennia. The speed at which reactants turn into products is the REACTION RATE, and it varies enormously. Why do reactions have speeds at all? Because for atoms or molecules to react, they must COLLIDE, hard enough and in the right way to break bonds and rearrange. Reactions happen through countless tiny collisions. Anything making collisions more frequent or energetic speeds a reaction up; anything making them rarer or gentler slows it down. This collision picture is the key: rate isn't fixed, it's something we can change by turning DIALS, to speed up cooking or slow down spoiling. Rate is controllable, and that's enormously useful.`,
          vocab: [
            { word: `reaction rate`,
              definition: `How fast a reaction proceeds, how quickly reactants turn into products. It can range from instant to taking thousands of years.`,
              audioPrompt: `Reaction rate, {name}, is how fast a reaction goes, how quickly reactants turn into products. It varies enormously, from an explosion in an instant to iron rusting over months or a fossil forming over ages.` },
            { word: `collision theory`,
              definition: `The idea that reactions happen when particles collide hard enough and in the right way to break bonds. More or harder collisions mean a faster reaction.`,
              audioPrompt: `Collision theory, {name}, is the idea that reactions happen when particles collide hard enough and in the right orientation to break their bonds and react. More frequent or more energetic collisions speed the reaction up.` },
            { word: `effective collision`,
              definition: `A collision energetic enough and aimed well enough to actually cause a reaction. Not every collision works; only effective ones do.`,
              audioPrompt: `An effective collision, {name}, is one energetic enough and aimed the right way to actually cause a reaction. Most collisions just bounce off; only the effective ones break bonds and make new products.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Dials That Control Speed`,
          paragraphs: [
            `Four main factors act like dials to control reaction rate, and each works through the collision picture. The first is temperature. Heating things up makes particles move faster, so they collide more often and more energetically, more collisions clear the activation barrier. This is why food cooks faster on high heat and spoils slower in a cold fridge.`,
            `The second is concentration (how crowded the reactants are). More particles packed into the same space means more frequent collisions, so a higher concentration speeds the reaction up. The third is surface area: a solid reacts faster when broken into smaller pieces, because more of it is exposed for collisions. Powdered sugar burns far faster than a sugar cube.`,
            `The fourth dial is catalysts, which you met last lesson. A catalyst speeds a reaction by lowering its activation energy, so more collisions have enough energy to succeed, without the catalyst being used up. Enzymes in your body are catalysts that make life's reactions run fast enough at gentle body temperature. Four dials: temperature, concentration, surface area, catalysts.`,
          ],
          image: `/voyager-assets/science/l09-s2-dials.webp`,
          imageCaption: `Four main DIALS control reaction rate, each working through collisions. First, TEMPERATURE: heating makes particles move faster, so they collide more often and harder, clearing the activation barrier, which is why food cooks faster on high heat and spoils slower in a cold fridge. Second, CONCENTRATION (how crowded the reactants are): more particles in the same space means more frequent collisions, so higher concentration speeds things up. Third, SURFACE AREA: a solid reacts faster broken into small pieces, more is exposed, which is why powdered sugar burns far faster than a cube. Fourth, CATALYSTS: they lower activation energy so more collisions succeed, without being used up, like the ENZYMES that run life's reactions fast at gentle body temperature.`,
          vocab: [
            { word: `temperature (as a dial)`,
              definition: `Raising temperature speeds reactions by making particles move faster, so they collide more often and more energetically.`,
              audioPrompt: `Temperature, {name}, is a powerful dial on reaction rate: heating makes particles move faster, so they collide more often and harder, speeding the reaction. It's why food cooks fast when hot and keeps longer when cold.` },
            { word: `concentration`,
              definition: `How crowded the reactant particles are. Higher concentration means more frequent collisions, so the reaction goes faster.`,
              audioPrompt: `Concentration, {name}, is how crowded the reactant particles are. The more particles packed into a space, the more often they collide, so a higher concentration makes the reaction go faster.` },
            { word: `surface area`,
              definition: `The amount of a solid exposed for collisions. Breaking a solid into smaller pieces increases surface area and speeds the reaction.`,
              audioPrompt: `Surface area, {name}, is how much of a solid is exposed to react. Break it into smaller pieces and more is exposed, so it reacts faster, which is why powdered sugar can ignite far faster than a solid sugar cube.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Reactions Go Both Ways`,
          paragraphs: [
            `Here's something surprising: many reactions don't simply run to completion and stop. They're reversible, meaning they can go both forward (reactants to products) and backward (products back to reactants) at the same time. As products build up, some of them start turning back into reactants. The reaction runs in both directions at once.`,
            `At first, the forward reaction is fast (lots of reactants) and the reverse is slow (few products). But as reactants get used up and products accumulate, the forward reaction slows and the reverse speeds up. Eventually the two rates become equal. When that happens, the reaction has reached a special state called equilibrium.`,
            `Equilibrium does NOT mean the reaction has stopped. This is the key, subtle point: at equilibrium, both the forward and reverse reactions are still happening, constantly, at full speed, but at exactly the same rate. So they cancel out: products form just as fast as they break down. The amounts of everything stay constant, even though, underneath, everything is still churning.`,
          ],
          image: `/voyager-assets/science/l09-s3-bothways.webp`,
          imageCaption: `Something surprising: many reactions don't run to completion and stop. They're REVERSIBLE, going both forward (reactants to products) and backward (products to reactants) at once. As products build up, some start turning back into reactants. At first the forward reaction is fast (lots of reactants) and the reverse slow (few products). But as reactants get used up and products accumulate, the forward slows and the reverse speeds up, until the two rates become EQUAL. That state is EQUILIBRIUM. Crucially, equilibrium does NOT mean the reaction stopped: both directions are still happening constantly at full speed, but at exactly the same rate, so they cancel out. The amounts stay constant even though everything is still churning underneath.`,
          vocab: [
            { word: `reversible reaction`,
              definition: `A reaction that can run both forward (reactants to products) and backward (products to reactants) at the same time.`,
              audioPrompt: `A reversible reaction, {name}, is one that can run both ways at once: forward, turning reactants into products, and backward, turning products back into reactants. Many reactions are reversible like this.` },
            { word: `equilibrium`,
              definition: `The state where a reversible reaction's forward and reverse rates are equal, so the amounts stop changing, though both reactions still happen.`,
              audioPrompt: `Equilibrium, {name}, is the state where the forward and reverse reactions go at exactly the same rate, so the amounts of everything stay constant. It does not mean the reaction stopped, both directions still churn underneath.` },
            { word: `dynamic balance`,
              definition: `A balance that's maintained by constant motion, not stillness. At equilibrium, things stay steady because two opposing changes cancel out.`,
              audioPrompt: `Dynamic balance, {name}, is balance kept by constant motion, not stillness. At equilibrium, the amounts hold steady not because nothing's happening, but because two opposing reactions are perfectly canceling each other out.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Nudging The Balance`,
          paragraphs: [
            `A picture for equilibrium: imagine a busy escalator carrying people down, while just as many people walk up it at the same speed. The crowd on the escalator looks perfectly still, the number of people stays constant, yet everyone is moving constantly. That's dynamic balance: steady on the surface, churning underneath. Equilibrium is exactly like this.`,
            `Here's the powerful part: we can shift an equilibrium. If you disturb a system at equilibrium, change the concentration, temperature, or pressure, it responds by shifting to partly counteract the change, settling into a new balance. This principle (known as Le Chatelier's principle) lets chemists deliberately push a reaction toward making more product.`,
            `For example, if you remove product as it forms, the equilibrium shifts forward to replace it, making more. Add more reactant, and it shifts forward too. This is how industries maximize yield, and how your own body controls its chemistry: by constantly nudging equilibria, adding or removing substances, your cells keep reactions flowing exactly where they're needed.`,
          ],
          image: `/voyager-assets/science/l09-s4-nudging.webp`,
          imageCaption: `A picture for equilibrium: a busy ESCALATOR carries people down while just as many walk up it at the same speed. The crowd looks perfectly still, the number stays constant, yet everyone's moving. That's DYNAMIC BALANCE: steady on the surface, churning underneath. Equilibrium is exactly like this. The powerful part: we can SHIFT an equilibrium. Disturb a system at equilibrium, change concentration, temperature, or pressure, and it responds by shifting to partly counteract the change, settling into a new balance (LE CHATELIER'S principle). Remove product as it forms and the equilibrium shifts forward to replace it, making more; add reactant and it shifts forward too. It's how industries maximize YIELD and how your BODY controls its chemistry, nudging equilibria to keep reactions flowing where needed.`,
          vocab: [
            { word: `Le Chatelier's principle`,
              definition: `The rule that a system at equilibrium, when disturbed, shifts to partly counteract the change and settle into a new balance.`,
              audioPrompt: `Le Chatelier's principle, {name}, says that if you disturb a system at equilibrium, by changing concentration, temperature, or pressure, it shifts to partly counteract that change and settle into a new balance. It lets us steer reactions.` },
            { word: `shifting equilibrium`,
              definition: `Deliberately changing conditions to push a reversible reaction toward making more product (or reactant), used to maximize yield.`,
              audioPrompt: `Shifting equilibrium, {name}, means deliberately changing conditions, like removing product or adding reactant, to push a reversible reaction toward making more of what you want. Industries use it to maximize their yield.` },
            { word: `homeostasis`,
              definition: `The body's maintenance of stable internal conditions, achieved partly by constantly nudging chemical equilibria to keep reactions balanced.`,
              audioPrompt: `Homeostasis, {name}, is how your body keeps its internal conditions stable and balanced. It works partly by constantly nudging chemical equilibria, adding or removing substances, to keep life's reactions flowing exactly where needed.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Reactions have rates, set by how often and how hard particles collide. Four dials control the rate: temperature (faster collisions), concentration (more crowded), surface area (more exposed), and catalysts (lower the activation barrier). Turn these dials to speed up reactions you want and slow the ones you don't.`,
            `Many reactions are reversible, running both ways. When the two rates become equal, the reaction reaches equilibrium, a dynamic balance where amounts stay constant but both reactions keep churning, like an escalator with people walking up as fast as it descends. By Le Chatelier's principle, disturbing an equilibrium makes it shift to counteract the change.`,
            `Now the case-study screen makes you the chemist, with five puzzles: why food spoils slower in the fridge, why powdered fuels explode but chunks don't, how a chemical can look "finished" while still reacting, how a factory squeezes out more product, and how your body uses these principles to stay alive. For each, reason with collisions, the dials, and dynamic balance. Onward.`,
          ],
          image: `/voyager-assets/science/l09-s5-before.webp`,
          imageCaption: `Threads together. Reactions have RATES, set by how often and how hard particles collide. Four DIALS control rate: TEMPERATURE (faster, harder collisions), CONCENTRATION (more crowded), SURFACE AREA (more exposed), and CATALYSTS (lower the activation barrier). Turn them to speed up reactions you want, slow ones you don't. Many reactions are REVERSIBLE; when forward and reverse rates equalize, they reach EQUILIBRIUM, a dynamic balance where amounts stay constant but both reactions keep churning, like an escalator with people walking up as fast as it carries them down. By LE CHATELIER'S principle, disturbing equilibrium makes it shift to counteract. The case-study screen gives five puzzles: the fridge, powdered fuels, a reaction that looks finished, factory yield, and your own body.`,
          vocab: [
            { word: `inhibitor`,
              definition: `A substance that slows a reaction down, the opposite of a catalyst. Preservatives act as inhibitors to slow food spoilage.`,
              audioPrompt: `An inhibitor, {name}, is a substance that slows a reaction down, the opposite of a catalyst. Food preservatives are inhibitors, slowing the reactions that cause spoilage so food lasts longer.` },
            { word: `yield (revisited)`,
              definition: `The amount of product a reaction makes. With reversible reactions, shifting the equilibrium is a key way to increase yield.`,
              audioPrompt: `Yield, {name}, is the amount of product a reaction makes. For reversible reactions, chemists boost yield by shifting the equilibrium, removing product or adding reactant, to push the reaction toward making more.` },
            { word: `steady state`,
              definition: `A condition that looks unchanging on the surface while processes continue underneath, like equilibrium, where opposing reactions cancel out.`,
              audioPrompt: `A steady state, {name}, is a condition that looks unchanging on the surface while processes keep running underneath. Equilibrium is a perfect example: amounts hold steady because the forward and reverse reactions cancel out.` },
          ],
        },

        {
          id: `l09-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Rates And Balance`,
          intro: `{name}, you're the chemist now. Here are five real puzzles about how fast reactions go and how they balance. For each, reason with collisions, the four rate dials, and the idea of dynamic equilibrium.`,
          cases: [
            {
              id: `c1`,
              title: `Why the fridge keeps food fresh`,
              type: `Temperature and rate`,
              description: `Milk left on the counter spoils in a day, but the same milk in the fridge lasts a week or more, and frozen, it lasts for months. Nothing was added; only the temperature changed. Explain, using reaction rates, why cold preserves food.`,
              questions: [
                `Why does lowering the temperature slow spoilage so dramatically?`,
                `What's happening to the molecules at lower temperatures?`,
                `Why does freezing preserve food even longer than refrigerating?`,
              ],
              evaluation: `This is reaction rate controlled by the temperature dial, and it explains one of the most useful technologies in your kitchen. Food spoilage is caused by chemical reactions, the reactions of decay, and the reactions carried out by bacteria and molds as they grow and consume the food. Like all reactions, these depend on molecular collisions: molecules must collide often enough and energetically enough to react. Temperature is the master dial controlling this. At room temperature, molecules move quickly, colliding frequently and energetically, so the spoilage reactions (and the bacteria's life processes) run fast, and the milk goes bad in a day. When you lower the temperature in the fridge, the molecules move much more slowly. They collide less often and with less energy, so far fewer collisions are effective, and all those spoilage reactions slow down dramatically. The bacteria also slow their growth and chemistry. The reactions don't stop, they just creep along, so the milk lasts a week instead of a day. Freezing preserves food even longer for the same reason taken further: at freezing temperatures, molecular motion slows to a crawl, collisions become very rare, and the spoilage reactions nearly grind to a halt. (Freezing also locks water into ice, making it unavailable for reactions and for bacterial growth, an added effect.) So the whole spectrum, counter, fridge, freezer, is really one principle: lowering temperature slows molecular collisions, which slows the reaction rate of spoilage. It's a perfect everyday demonstration that reaction rate isn't fixed, it's a dial we can turn, and turning the temperature dial down is how humans have preserved food for as long as we've had cold. The same principle, in reverse, is why we cook with heat: raising the temperature speeds the desired reactions up.`,
            },
            {
              id: `c2`,
              title: `The danger of powder`,
              type: `Surface area and rate`,
              description: `A solid chunk of a material (like flour, sugar, or metal) is hard to ignite and burns slowly if at all. But the same material as a fine powder dispersed in air can ignite explosively, dust explosions in grain silos and factories are a real and serious hazard. Why is the powder so much more reactive?`,
              questions: [
                `Why does powdering a material make it react so much faster?`,
                `What's different about the collisions in powder versus a solid chunk?`,
                `Why are dust explosions in silos and factories a real danger?`,
              ],
              evaluation: `This dramatic and dangerous difference comes down to the surface area dial. For a solid to react with the oxygen in air (to burn), the reaction can only happen where the solid's surface meets the air, that's where the collisions between the solid's molecules and oxygen molecules can occur. In a solid chunk, the vast majority of the material is locked inside, buried beneath the surface, unable to contact oxygen. Only the thin outer layer is exposed, so there's relatively little surface for collisions, and the reaction is slow. When you grind that same material into a fine powder, you enormously increase its total surface area: all the matter that was hidden inside the chunk is now exposed on the surfaces of countless tiny particles. Suddenly there's a vast amount of surface in contact with oxygen, so the number of possible collision sites skyrockets, and the reaction can happen everywhere at once. When the powder is also dispersed in air (so oxygen surrounds every particle) and something supplies the activation energy (a spark), the reaction can proceed so fast across so much surface simultaneously that it releases its energy almost instantly, an explosion. This is exactly why dust explosions are a genuine and serious hazard in grain silos, flour mills, sawmills, and factories handling fine powders (even powdered metals or sugar): a cloud of combustible dust plus a single spark can detonate with devastating force, because the enormous surface area lets the entire cloud react at once. The same material as a solid lump would just smolder or sit inert. It's a vivid, high-stakes lesson that surface area is a powerful rate dial: break something into smaller pieces, expose more of it to collisions, and you can transform a slow, safe reaction into a violently fast one.`,
            },
            {
              id: `c3`,
              title: `The reaction that looks finished but isn't`,
              type: `Dynamic equilibrium`,
              description: `A reversible reaction in a sealed container reaches a point where the amounts of reactants and products stop changing, it looks completely finished and still. But a chemist insists the reaction is still happening, just as fast as ever. How can both be true: unchanging, yet still reacting?`,
              questions: [
                `How can the amounts stay constant while the reaction still happens?`,
                `What is actually going on at the molecular level?`,
                `Why is "dynamic equilibrium" a better description than "finished"?`,
              ],
              evaluation: `This apparent contradiction is resolved by the concept of dynamic equilibrium, one of the most subtle and beautiful ideas in chemistry. The reaction looks finished, the amounts of reactants and products have stopped changing, but it has not stopped at all. Here's how both can be true: the reaction is reversible, running both forward (reactants to products) and backward (products to reactants) at the same time. When the reaction first began, the forward direction was fast (plenty of reactants) and the reverse was slow (few products). As products built up and reactants were consumed, the forward reaction slowed and the reverse sped up, until the moment when the two rates became exactly equal. That's equilibrium. At the molecular level, both reactions are still churning away at full speed: reactant molecules are constantly turning into products, and product molecules are constantly turning back into reactants, all the time. But because they're happening at the identical rate, every time a product molecule is formed, another one is breaking down, so the total amounts never change. It's like a busy escalator carrying people down while just as many walk up at the same pace: the crowd looks perfectly still, but everyone is moving constantly. This is why "dynamic equilibrium" is a far better description than "finished." "Finished" implies everything has stopped, which is wrong, the molecular activity is intense and ceaseless. "Dynamic equilibrium" correctly captures that the system is in constant motion (dynamic) yet steady overall (equilibrium), because two opposing processes are perfectly canceling. This distinction matters enormously: because the reaction is still active and balanced, you can shift it, disturb the balance, and it will respond, which is exactly what makes equilibria controllable. A truly finished, stopped reaction couldn't respond to anything. Recognizing that "steady" doesn't mean "static" is a profound shift in understanding, and it applies far beyond chemistry, to ecosystems, economies, and even your own body, all of which maintain steady states through constant, balanced activity.`,
            },
            {
              id: `c4`,
              title: `Squeezing out more product`,
              type: `Shifting equilibrium`,
              description: `A factory runs a reversible reaction to make a valuable product, but at equilibrium, only some of the reactants have converted, limiting the yield. The chemists want more product. Without changing the reaction itself, how can they push it to make more?`,
              questions: [
                `How can chemists get more product from a reaction at equilibrium?`,
                `Why does removing product as it forms increase the yield?`,
                `What principle are they using to do this?`,
              ],
              evaluation: `The chemists can get more product by deliberately shifting the equilibrium, using Le Chatelier's principle, one of the most practically powerful ideas in chemistry. The principle states that if you disturb a system at equilibrium, it responds by shifting to partly counteract the disturbance and settle into a new balance. The chemists exploit this to drive the reaction toward making more product. One classic method is to continuously remove the product as it forms. Here's why that works: at equilibrium, the forward and reverse reactions are balanced. If you remove product, you've disturbed that balance, now there's less product than the equilibrium "wants." The system responds by shifting forward (the forward reaction outpaces the reverse) to replace the missing product, converting more reactants in the process. By continuously removing product, you keep the equilibrium perpetually shifting forward, steadily converting more and more reactant and dramatically increasing the total yield. Another method is to add more reactant: this also disturbs the balance, and the system shifts forward to consume the extra reactant, again making more product. Chemists can also adjust temperature and pressure to favor the product side, depending on the specific reaction. The underlying principle in every case is Le Chatelier's: the equilibrium shifts to oppose whatever change you impose, and clever chemists use this to "trick" the reaction into producing more of what they want. This is enormously important in industry, it's how factories maximize the yield of fertilizers, fuels, pharmaceuticals, and countless other products, squeezing the most product from expensive reactants and making processes economically viable. It transforms equilibrium from a frustrating limit ("only some converts") into a controllable tool. And remarkably, it only works because equilibrium is dynamic, not finished: a truly stopped reaction couldn't respond, but a living, balanced equilibrium can be nudged precisely where you want it.`,
            },
            {
              id: `c5`,
              title: `Your body, a master of balance`,
              type: `Equilibrium in life`,
              description: `Your body keeps countless chemical conditions in careful balance, oxygen and carbon dioxide levels, blood acidity, sugar concentration, all held remarkably steady even as you eat, exercise, and rest. Yet your chemistry is intensely active. How does your body use rates and equilibrium to stay alive?`,
              questions: [
                `How does your body keep conditions steady while staying chemically active?`,
                `How does it use the shifting of equilibria to control its chemistry?`,
                `Why is "dynamic balance," not stillness, the right model for a living body?`,
              ],
              evaluation: `Your body is a magnificent master of dynamic balance, using exactly the principles of rates and equilibrium you've learned, and this case ties the whole lesson to life itself. Your body keeps countless conditions remarkably steady, this is called homeostasis, but crucially, it does so not by being still, but through constant, balanced activity, just like a chemical equilibrium. Consider how it stays steady while intensely active: at any moment, trillions of reactions are running in both directions throughout your body, and many sit at or near equilibrium, with forward and reverse processes balanced so that concentrations (of oxygen, carbon dioxide, sugar, acidity, and much more) hold steady even though molecules are ceaselessly reacting. It's the escalator on a vast scale: everything churning, the overall picture steady. Your body actively uses the shifting of equilibria to control its chemistry, just as a factory does. A perfect example is how your blood carries gases: hemoglobin binds oxygen in a reversible reaction. In your lungs, where oxygen is abundant (high concentration), the equilibrium shifts to bind oxygen; in your active tissues, where oxygen is scarce and being used up, the equilibrium shifts the other way to release oxygen exactly where it's needed. The same kind of shifting, governed by Le Chatelier's principle, manages carbon dioxide transport and helps regulate your blood's acidity: when conditions change (say, during exercise), the relevant equilibria shift to counteract the disturbance and restore balance. Your body also controls reaction rates precisely, using enzymes (biological catalysts) to speed up exactly the reactions it needs, when it needs them, lowering activation energies so life's chemistry runs fast enough at gentle body temperature. This is why "dynamic balance," not stillness, is the only correct model for a living body. A still, "finished" body would be a dead one, life requires constant reaction. What makes you alive and stable at once is that all this furious activity is exquisitely balanced and continuously adjusted: equilibria shifting to meet demands, rates tuned by enzymes, conditions held steady through ceaseless, responsive motion. You are, quite literally, a breathtakingly sophisticated chemical system maintaining dynamic equilibrium, moment to moment, for as long as you live. The chemistry you learned in this lesson is, in the end, the chemistry of being alive.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, what controls how fast a reaction goes, and what does it really mean for a reaction to reach equilibrium? Which case made rates or dynamic balance click most for you, and how does it connect to your everyday life? In 5-6 sentences.`,
          reflectionPrompt: `Your body holds itself steady not by being still, but through trillions of balanced reactions churning every second, a dynamic equilibrium that is your very aliveness. How does it feel to know that "being stable" and "being intensely active" are, in you, the same thing?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `According to collision theory, why do reactions happen at all?`,
              options: [
                `Because particles must collide hard enough and the right way to react.`,
                `Because particles politely take turns transforming one at a time.`,
                `Because reactions need no contact between particles whatsoever.`,
                `Because atoms simply decide to change on their own schedule.`,
              ],
              correctIndex: 0,
              explanation: `Reactions happen when particles collide hard enough, and in the right orientation, to break bonds and rearrange; rate depends on how frequent and energetic those collisions are. The distractors invoke "taking turns," no contact, or atoms deciding.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Which of these is NOT one of the four main dials that control reaction rate?`,
              options: [
                `Temperature of the reacting substances.`,
                `Concentration of the reactants.`,
                `The color of the container holding the reaction.`,
                `Surface area of a solid reactant.`,
              ],
              correctIndex: 2,
              explanation: `The four main rate dials are temperature, concentration, surface area, and catalysts. The color of the container has no effect on reaction rate; the other three options are all genuine dials.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does raising the temperature speed up a reaction?`,
              options: [
                `It changes the color of the reactants to a faster shade.`,
                `Particles move faster, colliding more often and more energetically.`,
                `It permanently destroys the activation energy barrier forever.`,
                `It reduces the number of particles available to react.`,
              ],
              correctIndex: 1,
              explanation: `Higher temperature makes particles move faster, so they collide more frequently and with more energy, more collisions clear the activation barrier, speeding the reaction. The distractors cite color, destroying the barrier, or fewer particles.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why can a fine powder react explosively while a solid chunk of the same material barely reacts?`,
              options: [
                `The powder is made of completely different atoms than the chunk.`,
                `The powder is always much hotter than the solid chunk.`,
                `The powder has far more surface area exposed for collisions.`,
                `The chunk has secretly used up all of its stored energy.`,
              ],
              correctIndex: 2,
              explanation: `Powdering hugely increases surface area, exposing far more material for collisions with oxygen, so the reaction can happen everywhere at once (the basis of dust explosions). The distractors invent different atoms, claim it's hotter, or drained energy.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does it mean for a reversible reaction to reach equilibrium?`,
              options: [
                `The reaction has completely stopped and nothing happens anymore.`,
                `Every last one of the reactants has been entirely converted into products.`,
                `Only the reverse reaction continues, while the forward one quits.`,
                `The forward and reverse reactions occur at the same rate, so amounts stay constant.`,
              ],
              correctIndex: 3,
              explanation: `At equilibrium, the forward and reverse reactions happen at equal rates, so the amounts stay constant, but both reactions are still churning underneath. The distractors say it stopped, fully converted, or only one direction runs.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Which statement best captures "dynamic equilibrium"?`,
              options: [
                `Everything has stopped moving and the reaction is truly over.`,
                `Amounts stay steady because opposing reactions cancel, while both keep happening.`,
                `The amounts swing wildly up and down without any pattern at all over time.`,
                `Only products exist, and reactants have vanished entirely.`,
              ],
              correctIndex: 1,
              explanation: `Dynamic equilibrium means the amounts hold steady because the forward and reverse reactions are perfectly canceling, even though both keep happening constantly, like the escalator with people walking up as fast as it descends. The distractors describe stopping, wild swings, or only products.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `By Le Chatelier's principle, if you remove a product from a reaction at equilibrium, what happens?`,
              options: [
                `The reaction shifts forward to replace the lost product, making more.`,
                `The reaction immediately and permanently shuts down.`,
                `The reaction shifts backward, destroying even more product.`,
                `Nothing changes, because equilibrium can never be disturbed.`,
              ],
              correctIndex: 0,
              explanation: `Removing product disturbs the balance, so the equilibrium shifts forward to replace it, converting more reactant and increasing yield, the basis of how industry maximizes product. The distractors claim shutdown, backward shift, or that equilibrium can't be disturbed.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How does a catalyst (like an enzyme) increase a reaction's rate?`,
              options: [
                `By increasing the total amount of product beyond what's possible.`,
                `By being consumed and permanently destroyed in the reaction.`,
                `By raising the temperature of everything around it.`,
                `By lowering the activation energy, so more collisions succeed.`,
              ],
              correctIndex: 3,
              explanation: `A catalyst lowers the activation energy, so a greater fraction of collisions have enough energy to react, speeding the rate, without being used up. Enzymes do this in your body. The distractors claim it creates extra product, is consumed, or heats the surroundings.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: When a reversible reaction reaches equilibrium, it means the reaction has completely stopped, with no more chemical activity happening at all.`,
              correctAnswer: false,
              explanation: `False, and grasping why is one of the most important and subtle ideas in all of chemistry. The word "equilibrium" can be misleading, because in everyday speech "balance" or "steady" often suggests stillness, nothing moving, nothing happening. But chemical equilibrium is the opposite of stillness; it is intensely, ceaselessly active. Here's what's really going on. Many reactions are reversible, meaning they run in both directions at once: the forward reaction turns reactants into products, and the reverse reaction turns products back into reactants. When a reaction first starts, the forward direction usually dominates because there are lots of reactants and few products. But as products accumulate and reactants get used up, the forward reaction gradually slows while the reverse reaction speeds up. Equilibrium is the moment when these two opposing rates become exactly equal. At that point, the amounts of reactants and products stop changing, the system looks completely static from the outside. But at the molecular level, both reactions are still happening at full speed, constantly: reactant molecules are turning into products just as fast as product molecules are turning back into reactants. Because the two rates are identical, every change in one direction is precisely undone by a change in the other, so the totals never shift. The classic analogy is a crowded escalator carrying people downward while exactly as many people walk up it at the same pace: the number of people on the escalator stays perfectly constant, the scene looks frozen, yet every single person is in constant motion. This is why chemists call it dynamic equilibrium: dynamic because the molecular activity never stops, equilibrium because the opposing changes balance out to a steady overall state. This distinction is not a technicality, it has huge consequences. Because the reaction is still active and balanced (not truly finished), it can respond to disturbances: change the concentration, temperature, or pressure, and the equilibrium shifts to counteract the change (Le Chatelier's principle). This responsiveness is exactly what lets chemists boost yields in industry and what lets your own body precisely control its chemistry to stay alive. A genuinely stopped reaction could do none of this. So equilibrium means perfect balance through constant motion, never the absence of activity.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A company makes a product through a reversible reaction, but at equilibrium only 40% of the reactant converts, frustrating them. They can't change the reaction itself. Using the lesson, what's their best strategy to make more product?`,
              options: [
                `Give up, since equilibrium is a permanent, unchangeable limit.`,
                `Lower the temperature drastically so the reaction stops entirely.`,
                `Wait longer without changing anything, since equilibrium eventually breaks on its own.`,
                `Continuously remove the product as it forms (and/or add more reactant), so by Le Chatelier's principle the equilibrium keeps shifting forward, converting more reactant and raising the yield.`,
              ],
              correctIndex: 3,
              explanation: `Using Le Chatelier's principle, removing product as it forms (or adding reactant) disturbs the balance, so the equilibrium shifts forward to replace the product, continuously converting more reactant and increasing yield, exactly how industry maximizes output. The distractors give up, try to stop the reaction, or wait passively (equilibrium won't break on its own).`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-aliveness`, category: `Steady yet churning`, prompt: `Your body holds itself steady not by being still but through trillions of balanced reactions churning every second, a dynamic equilibrium that is your very aliveness. How does it feel that "being stable" and "being intensely active" are, in you, the same thing?` },
            { id: `reflect-dials`, category: `Turning the dials`, prompt: `You now know the hidden dials, temperature, concentration, surface area, catalysts, behind cooking, refrigeration, and so much more. Does seeing the controls behind everyday things change how you experience your kitchen or your world?` },
            { id: `reflect-balance`, category: `Balance as motion`, prompt: `Chemistry revealed that real balance often isn't stillness but two opposing forces perfectly canceling. Where else in life, relationships, health, nature, is steadiness actually a dynamic balance rather than the absence of change?` },
            { id: `reflect-heritage`, category: `Teaching balance`, prompt: `Caro, you're building science for conscious families. How would you help a child grasp the beautiful, counterintuitive idea that a reaction can look "finished" while furiously churning underneath, using something they can see or feel?` },
            { id: `reflect-nudge`, category: `The gentle nudge`, prompt: `Le Chatelier's principle shows that a small, well-placed disturbance can shift a whole balance toward what you want. Where in life have you seen a small nudge, applied at the right point, shift a much bigger system?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Your aliveness depends on holding countless equilibria in constant, responsive balance, never stopping, never finishing. What does it mean that life is not a fixed state but an ongoing process, a balance that must be actively maintained every single moment?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Rates and balance run your kitchen, your body, and the made world. These help you see and steer them. Two paths.`,
          familyActivity: {
            title: `Turn The Rate Dials`,
            duration: `One afternoon`,
            description: `Make reaction rates and balance visible and hands-on, turning abstract dials into things your family can actually control. Start with temperature: dissolve an effervescent tablet (like Alka-Seltzer) or a spoon of sugar in cold water versus hot water, and time how much faster it reacts or dissolves in the hot, the temperature dial in action. Or compare how fast bread dough rises in a warm spot versus the fridge (yeast reactions speeding up with heat). Next, surface area: dissolve a whole sugar cube versus the same amount of granulated sugar, and watch the granulated (more surface area) dissolve much faster; talk about why powdered materials react so fast, and how this is the principle (and danger) behind dust explosions. Then concentration: react vinegar and baking soda using strong vinegar versus diluted vinegar, and compare the fizzing vigor, more concentrated means more frequent collisions. For catalysts, look up the classic demo where a tiny bit of yeast or potato (which contain a catalyst enzyme) makes hydrogen peroxide rapidly foam up, the catalyst speeds the reaction without being used up, just like the enzymes in your body. Then explore equilibrium and balance with the escalator analogy: act it out, have family members "walk up" a set of stairs while imagining the stairs carrying them down at the same rate, the crowd stays put while everyone moves, that's dynamic equilibrium. Discuss real reversible balances: how a sealed bottle of soda holds dissolved gas in equilibrium until you open it (disturbing the balance, so gas escapes), and how your own body shifts equilibria to carry oxygen where it's needed. Finally, connect it all: walk through the kitchen and body asking, "What rate dial is being turned here? Where's a balance being held or shifted?" The goal is for everyone to see that they're constantly, often unknowingly, controlling reaction rates and equilibria, in cooking, preserving food, and simply being alive.`,
          },
          projectOption: {
            title: `The Rate And Balance Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how rates and equilibrium shape something real, and reveal the chemistry behind it. Week 1, choose a focus and study the rates: pick a real process where speed matters, food preservation (refrigeration, freezing, canning, salting, drying, and the chemistry of how each slows spoilage), cooking (how heat, cutting size, and other factors change reaction rates), corrosion and rust prevention, the setting of concrete or glue, or the action of a medicine in the body. Research and explain which rate dials are at work, temperature, concentration, surface area, catalysts, and how each speeds up or slows down the key reactions, using collision theory. Be specific and accurate: for instance, explain exactly why a fridge, a freezer, salting, and drying each slow food spoilage through the rate principles. Week 2, explore the balance: find a place where reversible reactions and equilibrium matter in your topic (or pick an equilibrium-focused subject like how blood carries oxygen, how soda holds its fizz, or how an industrial process like fertilizer production maximizes yield). Explain what reaches equilibrium, why "dynamic balance" (not stopping) is the right description, and how shifting the equilibrium (Le Chatelier's principle) is used to control the outcome, in industry or in the body. Produce your final piece, an illustrated explainer, a slide deck, a short video, or a "how it really works" guide, that teaches both the rate factors and the equilibrium principles behind your topic, always connecting the molecular picture (collisions, balance) to the real-world result. The aim is to see that controlling rates and balance isn't abstract, it's how we cook, preserve food, manufacture products, and stay alive, and to understand one real case deeply enough to teach it. You'll come away grasping how chemistry becomes controllable and how dynamic balance underlies both technology and life.`,
            offerToParent: `Parent: opt your child into the Rate and Balance Investigation. Researching how temperature, concentration, surface area, and catalysts control real reaction rates (via collision theory), and how reversible reactions reach a dynamic equilibrium that can be shifted (Le Chatelier's principle), directly develops core NGSS chemistry ideas about reaction rates and equilibrium. Connecting these to food preservation, cooking, industry, and the body's own chemistry makes the concepts concrete and genuinely useful, and the subtle idea of dynamic balance (steady yet active) is a profound thinking tool well beyond chemistry. It's rigorous, relevant, standards-aligned work.`,
          },
          identityQuestion: `If you become someone who can see the hidden dials controlling every reaction's speed, and grasp that real balance is often furious activity perfectly canceled, what kind of thinker does that make you, a person who understands how to control change and how steadiness is truly maintained, that someone who sees reactions as simply "happening" or "done," with no sense of the speed and balance beneath, can never quite become?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can see the dials that control how fast reactions go.`,
            `A thinker who understands balance as dynamic, not stillness.`,
            `Someone who knows their own aliveness is a churning equilibrium.`,
          ],
          saveKey: `identity_responses_sci_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Nine down, and you've mastered the speed and balance of the chemical world, and with it, the whole chemistry arc so far. You learned that reactions have rates, set by how often and how energetically particles collide, and that four dials control them: temperature, concentration, surface area, and catalysts. Turn these dials and you can speed up the reactions you want (cooking, manufacturing) and slow the ones you don't (spoiling, rusting). Then you met one of chemistry's most beautiful and subtle ideas: equilibrium. Many reactions are reversible, and when the forward and reverse rates become equal, the amounts stop changing, but the reaction never stops. It's a dynamic balance, like an escalator carrying people down as fast as they walk up, steady on the surface, churning underneath. You learned Le Chatelier's principle: disturb an equilibrium and it shifts to counteract the change, which lets chemists maximize yield and lets your own body precisely control its chemistry. As a chemist, you reasoned through real cases: why the fridge preserves food, why powders explode, how a reaction can look finished while furiously reacting, how factories squeeze out more product, and how your body is a master of dynamic balance, the chemistry of being alive. Next, we leave chemistry and enter physics, beginning with motion itself: kinematics, describing how things move with the precision of mathematics. Onward, {name}. — Cosmo`,
          badge: `balance-finder`,
          badgeName: `Balance Finder`,
          xpEarned: 75,
          competencies: [
            `Understands reaction rate and collision theory: reactions happen through effective collisions`,
            `Knows the four rate dials: temperature, concentration, surface area, and catalysts`,
            `Explains how each factor speeds up or slows down reactions via collisions`,
            `Understands reversible reactions and how they reach equilibrium`,
            `Grasps the subtle idea of dynamic equilibrium: steady amounts, constant activity`,
            `Applies Le Chatelier's principle to shift equilibria and control reactions`,
            `Connects rates and equilibrium to real life: food, industry, and the living body`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Physics — Kinematics: Describing Motion Mathematically`,
            hook: `How to describe any motion with the precision and power of mathematics. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L09 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
