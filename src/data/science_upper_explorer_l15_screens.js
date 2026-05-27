// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L15 — Energy: The Power Behind Everything
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 4-PS3-1, 4-PS3-2, 5-PS3-1 — Energy types and transfers;
//            energy is transferred from place to place; food provides energy
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what energy is, common types of energy, conservation
//        of energy (can't be created or destroyed), the Sun as Earth's source
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-15`,
      title: `Energy: The Power Behind Everything`,
      duration: 18,
      xpReward: 75,
      badge: `energy-tracker`,
      badgeName: `Energy Tracker`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. We've covered light, sound, forces, motion, and matter. Today we look at the thing connecting all of them. ENERGY. Energy is what lets things happen. Without it, nothing moves. Nothing heats up. No plant grows. No otter swims. By the end of today, you'll understand the big idea behind every machine, every living thing, and every action in the universe. Let's go.`,
          headline: `Energy`,
          subtitle: `What makes the universe go, and where it all comes from`,
          visual: `/ue-assets/science/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Energy Actually Is`,
          paragraphs: [
            `ENERGY is the ability to MAKE THINGS HAPPEN. A ball rolling has energy (it can knock things over). A battery has energy stored inside (it can power a flashlight). Hot water has energy (it can melt ice). Even a stretched rubber band has energy (it can snap back). Energy isn't really a "thing" you can hold. It's more like a property that ENABLES change. Without energy, the universe would be completely still and cold. Nothing would move, glow, vibrate, or live.`,
            `One of the biggest realizations in science was that all the different ways things HAPPEN are actually variations on the same idea. Sound is energy moving as vibration. Light is energy moving as waves. Motion is kinetic energy. Heat is energy in the random movement of molecules. Food contains stored chemical energy. Electricity is energy moving as electric current. All of these are different FORMS of energy. They can be converted into each other in various ways, and that's how machines, biology, and nature all actually work.`,
          ],
          image: `/ue-assets/science/l15-s1-what-is-energy.webp`,
          imageCaption: `Light, sound, motion, heat, food, electricity. All forms of one thing.`,
          vocab: [
            { word: `energy`,
              definition: `The ability to make things happen. Energy can take many forms (light, heat, motion, sound, electrical, chemical, etc.) and changes between forms constantly.`,
              audioPrompt: `Energy is the ability to make things happen, {name}. A ball rolling has energy. A battery stored has energy. Hot water has energy. A stretched rubber band has energy. Energy isn't really a thing you can hold. It's a property that enables change. Without energy, the universe would be still and cold. Nothing would move or glow or vibrate or live. Energy comes in many different forms. Light, sound, motion, heat, food, electricity. They're all energy in different shapes. Energy can change between forms constantly.` },
            { word: `thermal energy`,
              definition: `The energy of random molecular motion. Hot objects have faster-moving molecules; cold objects have slower-moving molecules. Thermal energy flows from hotter to cooler objects.`,
              audioPrompt: `Thermal energy is the energy of random molecular motion, {name}. Every object has molecules constantly moving around. Hot objects have faster-moving molecules. Cold objects have slower-moving molecules. When you add heat to something, like putting a pot on the stove, you're adding thermal energy and speeding up the molecules inside. Thermal energy flows naturally from hotter things to cooler things, which is why hot drinks cool down and cold things warm up over time.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common Types of Energy`,
          paragraphs: [
            `Here are some of the most important kinds of energy. KINETIC ENERGY is energy of motion. Anything moving has it (a thrown ball, a rolling car, your hand waving). POTENTIAL ENERGY is stored energy that could become motion. A ball at the top of a hill has potential energy because gravity could pull it down. A stretched bow has potential energy because the bowstring wants to spring back. THERMAL ENERGY (heat) is the random motion of molecules. Hot things have molecules moving faster. Cold things have molecules moving slower.`,
            `CHEMICAL ENERGY is stored in the bonds between atoms in molecules. Food has chemical energy your body releases by digesting it. Gasoline has chemical energy a car engine releases by burning it. ELECTRICAL ENERGY is the energy of moving electrons, used by every modern device. NUCLEAR ENERGY comes from atoms either splitting or combining (this is how the Sun produces its light). LIGHT ENERGY is what travels from stars and lamps to your eyes. SOUND ENERGY is vibrations through matter. Each of these can be converted into the others through different processes.`,
          ],
          image: `/ue-assets/science/l15-s2-types.webp`,
          imageCaption: `Kinetic, potential, thermal, chemical, electrical, nuclear. All useful, all energy.`,
          vocab: [
            { word: `kinetic energy`,
              definition: `Energy of motion. Any moving object has kinetic energy. Faster movement and more mass mean more kinetic energy.`,
              audioPrompt: `Kinetic energy is the energy of motion, {name}. Any moving object has it. A car driving down the road. A baseball flying through the air. Your hand waving. Water flowing in a river. All of them have kinetic energy. Two things make kinetic energy bigger. Faster motion. And more mass. A heavy truck moving fast has way more kinetic energy than a small toy moving slowly. This is why heavy moving things are dangerous. They have a lot of energy that gets released if they crash into something.` },
            { word: `chemical energy`,
              definition: `Energy stored in the bonds between atoms in molecules. Released through chemical reactions like burning or digesting. Food, gasoline, and batteries all store chemical energy.`,
              audioPrompt: `Chemical energy is energy stored in the bonds between atoms in molecules, {name}. When those bonds break through chemical reactions like burning or digesting, the energy gets released. Food has chemical energy your body releases through digestion. Gasoline has chemical energy a car engine releases through burning. Wood has chemical energy released by fire. Batteries have chemical energy released as electrical energy. Chemical energy is one of the most important forms of energy in everyday life.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Energy Can't Be Created or Destroyed`,
          paragraphs: [
            `One of the most important rules in all of science is the LAW OF CONSERVATION OF ENERGY. It says ENERGY CAN'T BE CREATED OR DESTROYED. It can only CHANGE FROM ONE FORM TO ANOTHER. When you let go of a ball at the top of a hill, the ball's POTENTIAL energy (stored, because of gravity) converts to KINETIC energy as it rolls down. When the ball hits something at the bottom, that energy converts to SOUND (you hear the impact), HEAT (a little warming), and motion of whatever it hit. The total amount of energy is always the same. It just changes forms.`,
            `This is why machines can't run forever. When you drive a car, the chemical energy in the fuel converts to kinetic energy (moving the car) plus heat (which is why engines get hot) plus sound (engine noise). Eventually all the chemical energy in the fuel has been converted, mostly into heat. The energy isn't GONE. It's just spread out as heat in the air. This is also why "perpetual motion machines" don't work. You can't make energy from nothing. Every machine, every living thing, every event in the universe follows this rule.`,
          ],
          image: `/ue-assets/science/l15-s3-conservation.webp`,
          imageCaption: `Energy transforms but never disappears. Just changes form.`,
          vocab: [
            { word: `potential energy`,
              definition: `Stored energy that could become motion. A ball at the top of a hill, a stretched rubber band, or food before being eaten all have potential energy.`,
              audioPrompt: `Potential energy is stored energy that could become motion, {name}. A ball at the top of a hill has potential energy because gravity could pull it down. A stretched rubber band has potential energy because it wants to snap back. The food in your stomach has potential energy (chemical, in this case) that your body will release. Water held behind a dam has potential energy. Any time energy is stored, ready to be released, that's potential energy. The opposite is kinetic energy, which is the energy of actual motion.` },
            { word: `heat`,
              definition: `Thermal energy transferred from one object to another. Heat flows from hot to cold. Different from temperature — heat is the energy transferred, temperature is a measure of how hot something is.`,
              audioPrompt: `Heat is thermal energy that is transferred from one object to another, {name}. When a hot object touches a cold object, heat flows from hot to cold. That's how a warm hand melts ice, and how a hot stove warms a pot of water. Heat can also travel through radiation (sunlight warming your skin) and convection (hot air rising). Heat is different from temperature. Temperature measures how hot something is. Heat is the actual energy being transferred. They're related but not the same.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Sun Powers Almost Everything on Earth`,
          paragraphs: [
            `Almost every form of energy on Earth ULTIMATELY COMES FROM THE SUN. The Sun produces enormous amounts of nuclear energy by fusing hydrogen atoms together. Some of that energy reaches Earth as LIGHT and HEAT. Plants capture sunlight through photosynthesis and convert it to chemical energy (food). When an animal eats a plant, it's getting Sun energy converted into chemical form. When you eat the animal (or the plant directly), the Sun's energy moves into you. Even FOSSIL FUELS like oil and coal come from plants and animals that captured sunlight millions of years ago.`,
            `Sun energy also drives WEATHER. Sun heats the air unevenly, which creates wind, ocean currents, and the water cycle. Even the energy of a hurricane is essentially Sun energy concentrated in moving air. Hydroelectric dams generate electricity from water moving downhill, but the water got UP there because Sun energy evaporated it from oceans, condensed it as rain, and now gravity is bringing it back down. The Sun is, in a real sense, the engine that powers Earth. Without it, our planet would have almost no usable energy. Cosmo's note: that makes the Sun the most important thing in the sky, by a huge margin.`,
          ],
          image: `/ue-assets/science/l15-s4-sun-source.webp`,
          imageCaption: `Plants, animals, weather, fossil fuels. Almost all of Earth's energy starts with the Sun.`,
          vocab: [
            { word: `conservation of energy`,
              definition: `The rule that energy can't be created or destroyed, only changed from one form to another. The total amount of energy in any closed system stays the same.`,
              audioPrompt: `Conservation of energy is one of the most important rules in all of science, {name}. It says energy can't be created or destroyed. Only changed from one form to another. When a ball falls, potential energy becomes kinetic energy. When it hits the ground, kinetic energy becomes sound and heat. The total amount of energy stays the same. It just keeps changing forms. This rule is why perpetual motion machines don't work. You can't make energy from nothing. Every machine, every event in the universe, follows this law.` },
            { word: `photosynthesis`,
              definition: `The process plants use to convert sunlight, water, and carbon dioxide into glucose (chemical energy). Releases oxygen as a byproduct. The foundation of almost all food chains.`,
              audioPrompt: `Photosynthesis is the process plants use to capture sunlight and convert it into chemical energy (food), {name}. Plants take in carbon dioxide from the air, pull up water through their roots, and use energy from sunlight to combine these into glucose. Glucose is sugar that the plant uses to grow and live. Oxygen is released as a byproduct, which is where most of Earth's oxygen comes from. Photosynthesis is the reason almost all life on Earth exists, because it converts Sun energy into usable food.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes. For each one, identify what FORM OF ENERGY is mostly being used or transformed: KINETIC (motion), POTENTIAL (stored, ready to be released), or CHEMICAL (stored in molecules, released through chemical change)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `kinetic`,    label: `Kinetic`,    color: `#FBBF24`, description: `Energy of motion. Moving objects have kinetic energy.` },
            { id: `potential`,  label: `Potential`,  color: `#A78BFA`, description: `Stored energy, often gravitational. A ball at the top of a hill or a stretched spring.` },
            { id: `chemical`,   label: `Chemical`,   color: `#34D399`, description: `Energy stored in molecules. Released through chemical reactions like burning or digesting.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `A skateboarder is at the top of a tall ramp.` },
                { text: `They haven't started moving yet.` },
                { text: `Their position high above the ground means they have a lot of stored energy.` },
              ],
              correctAnswer: `potential`,
              realWorldExample: `Being high above the ground stores gravitational energy.`,
              explanation: `Standing still at the top of a ramp. Stored gravitational energy that will become kinetic as soon as they start moving. Pure potential energy. The higher up they are, the more potential energy they have.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `An otter is swimming fast through cold ocean water.` },
                { text: `It's chasing a fish.` },
                { text: `Its tail and limbs are moving rapidly.` },
              ],
              correctAnswer: `kinetic`,
              realWorldExample: `Anything moving has kinetic energy. Especially otters.`,
              explanation: `Otter is in motion. Pure kinetic energy. The faster the otter moves and the more mass it has, the more kinetic energy it carries.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `A campfire is burning brightly.` },
                { text: `The wood is being consumed and heat and light are being released.` },
                { text: `The wood is converting stored energy in its molecules into something else.` },
              ],
              correctAnswer: `chemical`,
              realWorldExample: `Burning is a chemical reaction releasing stored energy.`,
              explanation: `Wood has chemical energy stored in its molecules. Fire breaks those molecules apart, releasing the energy as heat and light. Pure chemical energy being released. Same idea applies to your body burning food for energy.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `A person eats lunch.` },
                { text: `Several hours later, their body uses the food to power a long bike ride.` },
                { text: `The energy in the food becomes the energy in their muscles.` },
              ],
              correctAnswer: `chemical`,
              realWorldExample: `Food powering exercise is one of the most everyday energy transformations.`,
              explanation: `Tricky because the person is MOVING (kinetic), which makes kinetic seem like the obvious answer. But the QUESTION is about what kind of energy STARTED this process. The energy stored in food is CHEMICAL energy. Digestion converts it to chemical energy your muscles can use, which then becomes kinetic energy as you pedal the bike. The chain is: chemical → chemical → kinetic. The original form is chemical. Lesson: energy chains are common. Identify what type STARTS the chain to identify what type was stored.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is ENERGY?`,
              options: [
                `A thing you can hold`,
                `The ability to make things happen — comes in many forms (motion, heat, light, sound, chemical, etc.)`,
                `Only electricity`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `Energy is the ability to cause change. It comes in many forms: kinetic (motion), potential (stored), thermal (heat), chemical (in molecules), electrical, nuclear, light, sound. All forms can be converted between each other.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is KINETIC ENERGY?`,
              options: [
                `Stored energy`,
                `Energy of motion — anything moving has kinetic energy`,
                `Chemical energy`,
                `Heat`,
              ],
              correctIndex: 1,
              explanation: `Kinetic energy is the energy of motion. A moving car, a thrown ball, your waving hand all have kinetic energy. The more mass and the faster the motion, the more kinetic energy.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is POTENTIAL ENERGY?`,
              options: [
                `Possible energy that doesn't exist`,
                `Stored energy that could become motion — like a ball at the top of a hill, or a stretched rubber band`,
                `Light energy`,
                `Sound energy`,
              ],
              correctIndex: 1,
              explanation: `Potential energy is stored energy ready to be released. A ball held high has gravitational potential energy. A stretched bow has elastic potential energy. Food in your stomach has chemical potential energy.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What does CONSERVATION OF ENERGY mean?`,
              options: [
                `Energy disappears`,
                `Energy can't be created or destroyed — only changed from one form to another. The total amount of energy stays the same.`,
                `Save the energy`,
                `Only one type of energy exists`,
              ],
              correctIndex: 1,
              explanation: `This is one of the most important rules in all of science. Energy transforms but never appears out of nothing or disappears entirely. When a ball falls, potential energy becomes kinetic. When it hits the ground, kinetic becomes sound and heat. The total energy stays the same.` },

            { id: `l15-q5`, format: `true-false`,
              question: `True or false: Almost every form of energy on Earth ultimately came from the Sun.`,
              correctAnswer: true,
              explanation: `True. Plants capture sunlight (photosynthesis). Animals eat plants. People eat plants and animals. Even fossil fuels are ancient plants and animals. Wind, weather, and water cycle are all powered by Sun heating. The Sun is Earth's main energy source.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `When you eat food, what KIND of energy is your body releasing from it?`,
              options: [
                `Light energy`,
                `Chemical energy stored in the food's molecules — released by digestion`,
                `Sound energy`,
                `Kinetic energy only`,
              ],
              correctIndex: 1,
              explanation: `Food contains chemical energy in the bonds between atoms. Digestion breaks those bonds and releases the energy. Your cells use that energy for everything: thinking, moving, growing, healing.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `Why does a car ENGINE get HOT when you drive?`,
              options: [
                `Engines are always hot`,
                `Most of the chemical energy from fuel converts to heat (and only some to motion). The heat is the lost (unused) energy.`,
                `Magic`,
                `Drivers heat them`,
              ],
              correctIndex: 1,
              explanation: `Cars convert chemical energy from fuel into kinetic energy (motion) plus heat. Most of the energy actually becomes heat, not motion. This is why engines need cooling systems. The heat isn't gone, but it's wasted (not used for moving the car).` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `Why do PERPETUAL MOTION MACHINES (machines that run forever without fuel) not actually work?`,
              options: [
                `Bad design`,
                `Because energy can't be created from nothing. Every machine loses some energy as heat or sound, so it eventually stops without new fuel.`,
                `Inventors haven't tried hard enough`,
                `They work, but inventors hide them`,
              ],
              correctIndex: 1,
              explanation: `Perpetual motion machines violate conservation of energy. No machine can run forever without fuel because every machine loses some energy to friction, heat, or sound. Without new energy coming in, even the best machine eventually stops.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick three things you used today (your phone, a light, food). For each, what kind of energy did it use? Where did that energy ultimately come from?` },
            { id: `r2`, text: `Energy can change form but never disappear. What does that suggest about how you use energy in your own life?` },
            { id: `r3`, text: `Almost everything alive on Earth depends on energy from the Sun. How does it feel to know that you, an otter, a forest, and a hurricane are all powered by the same star?` },
            { id: `r4`, text: `If humans figured out how to generate clean, unlimited energy, what would change about the world? What would you want to do with it?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Energy is one of the most important topics in modern science and society. Cars, factories, internet, computers, and homes all consume vast amounts of energy. Most of that energy still comes from fossil fuels, which release greenhouse gases. New technologies (solar panels, wind turbines, better batteries) are changing how humans generate and use energy. Understanding energy is essential to participating in those decisions thoughtfully. Cosmo's bonus: every joule of energy you've ever used was probably created in a star, even if billions of years ago. Stardust runs through you.`,
          familyAdventure: `Family Energy Hunt. As a family, walk through your home and identify FIVE different energy transformations happening right now. A light bulb converts electrical energy into light and heat. A kitchen stove converts electrical or chemical energy into heat. A refrigerator uses electrical energy to remove heat from food. Your phone converts electrical energy into light, sound, and heat. Notice how often heat is one of the outputs. That's energy conservation in action.`,
          creativePrompt: {
            intro: `Imagine you're a journalist writing about energy for kids. Pick ONE type of energy and write a "day in the life" article about it.`,
            floor: `Write at least 5 sentences. Describe the type of energy you chose, where it's stored or how it moves, and what kinds of things it powers.`,
            stretch: `Write 8 to 10 sentences. Cover where this energy starts (its source), what transformations it goes through, and the role it plays in human life or nature.`,
            open: `Write as much as you want. Build a full feature article. Include the science of how this energy works, a real-world story about how humans use it, the connection to the Sun if there is one, and what kids should know about it.`,
            frames: [
              `Today I followed the journey of ___ energy.`,
              `It begins ___.`,
              `It travels through ___.`,
              `In nature or in human life, it does ___.`,
              `One thing kids should know is ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define energy, name several common forms, explain conservation of energy, and trace most Earth energy back to the Sun. Next lesson: a topic that ties together everything we've learned about living things and the energy that runs them. HABITATS and ECOSYSTEMS. See you there. — Cosmo.`,
          badge: `energy-tracker`,
          badgeName: `Energy Tracker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
