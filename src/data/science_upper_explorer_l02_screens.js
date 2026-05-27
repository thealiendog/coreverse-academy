// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L02 — Your Five Senses: Tools for Observing
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 4-LS1-2 — Animals receive different types of information
//            through their senses, process it, and respond
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what senses actually are (data systems),
//        each sense and what it detects, how senses can be tricked,
//        why scientists use tools to extend senses
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-02`,
      title: `Your Five Senses: Tools for Observing`,
      duration: 18,
      xpReward: 75,
      badge: `sense-master`,
      badgeName: `Sense Master`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we covered observation as the starting point of science. Today we look at HOW you actually observe. Your FIVE SENSES are basically data-collection systems built into your body. Eyes detect light. Ears detect vibrations. Nose and tongue detect chemicals. Skin detects pressure and temperature. Each one converts what's happening in the world into signals your brain can use. They're amazing. They're also imperfect. We'll cover both. Let's go.`,
          headline: `Your Five Senses`,
          subtitle: `The data systems that turn the world into something your brain can use`,
          visual: `/ue-assets/science/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Senses Actually Are`,
          paragraphs: [
            `Your SENSES are SPECIALIZED BODY SYSTEMS that detect things happening around you and convert them into signals your brain can understand. Each sense has special RECEPTOR CELLS that respond to one kind of input. Eyes have receptor cells that respond to LIGHT. Ears have cells that respond to VIBRATIONS in the air. Nose has cells that respond to certain CHEMICALS floating in the air. Tongue has cells that respond to chemicals in food. Skin has cells that respond to PRESSURE, TEMPERATURE, and PAIN.`,
            `Once a receptor cell detects something, it sends an ELECTRICAL SIGNAL through your nerves to your brain. Your brain interprets the signal as a sight, a sound, a smell, a taste, or a touch. You experience this so fast it feels instant. But scientifically, what's actually happening is your body collecting data from the world and your brain making sense of it. Every observation a human has ever made started exactly this way.`,
          ],
          image: `/ue-assets/science/l02-s1-senses-overview.webp`,
          imageCaption: `Five sensory systems. Each one a specialized data collector.`,
          vocab: [
            { word: `senses`,
              definition: `Specialized body systems that detect things happening around you and convert them into signals your brain can use. Humans have five main senses, plus a few less famous ones.`,
              audioPrompt: `Your senses are specialized body systems that detect things happening around you, {name}. They convert what's happening into signals your brain can understand. Each sense has receptor cells that respond to one kind of input. Eyes detect light. Ears detect vibrations. Nose and tongue detect chemicals. Skin detects pressure and temperature. Once a receptor detects something, it sends an electrical signal through your nerves to your brain. Your brain interprets that signal as a sight, sound, smell, taste, or touch.` },
            { word: `nervous system`,
              definition: `The network of the brain, spinal cord, and nerve cells that connects your senses to your brain and coordinates your body's responses to the world.`,
              audioPrompt: `Your nervous system is the network that connects your senses to your brain, {name}. It's made up of your brain, spinal cord, and billions of nerve cells called neurons. When a receptor cell detects something, it sends an electrical signal through the nervous system to your brain. Your brain then interprets the signal as a sight, sound, smell, taste, or touch. The nervous system controls not just your senses, but also your movements, thoughts, and automatic functions like breathing and heartbeat.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Each Sense and What It Detects`,
          paragraphs: [
            `SIGHT works through LIGHT. Light bounces off objects and enters your eyes through the pupil. The lens focuses the light onto the RETINA, which has millions of cells called rods and cones. These cells convert light into electrical signals. Your brain interprets the signals as shape, color, distance, and motion. HEARING works through SOUND WAVES, which are vibrations traveling through the air. They enter your ear and cause your eardrum to vibrate. Tiny bones in your middle ear amplify the vibrations and pass them to the COCHLEA, which converts them into electrical signals.`,
            `SMELL and TASTE both detect CHEMICALS. Smell receptors in your nose detect chemicals floating in the air. Taste receptors on your tongue detect chemicals in food. Smell is actually a much more powerful sense than most people realize. Humans can distinguish over a trillion different smells. TOUCH is the most complex sense because your skin has many different kinds of receptors. Some detect pressure. Some detect temperature. Some detect pain. Some detect vibration. That's why touching ice feels completely different from touching velvet, even though they're both just "touching" something.`,
          ],
          image: `/ue-assets/science/l02-s2-each-sense.webp`,
          imageCaption: `Light. Sound waves. Chemicals. Pressure. Different inputs, different receptors.`,
          vocab: [
            { word: `receptor`,
              definition: `A specialized cell that detects one type of input from the environment and converts it into an electrical signal for your brain. Eyes have light receptors, ears have vibration receptors, etc.`,
              audioPrompt: `A receptor is a specialized cell that detects one type of input from the environment, {name}. Light receptors in your eyes respond to light. Vibration receptors in your ears respond to sound waves. Chemical receptors in your nose and tongue respond to molecules in the air or in food. Pressure receptors in your skin respond to touch. Once a receptor detects its specific input, it sends an electrical signal through your nerves to your brain. Receptors are the foundation of how living things sense the world around them.` },
            { word: `sound wave`,
              definition: `A vibration that travels through the air. When something makes a sound, it pushes air molecules together in waves that travel outward until they reach your ears.`,
              audioPrompt: `A sound wave is a vibration that travels through the air, {name}. When something makes a sound, it vibrates and pushes air molecules together in waves. Those waves travel outward in all directions until they reach your ears. Your eardrum vibrates when sound waves hit it. Tiny bones in your middle ear amplify the vibrations and pass them to the cochlea, which converts them into electrical signals your brain interprets as sound. Different frequencies of sound waves produce different pitches, from deep bass to high treble.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Senses Get Tricked`,
          paragraphs: [
            `Your senses are amazing, but they're not perfect. Sometimes they get things wrong. OPTICAL ILLUSIONS are pictures designed to fool your eyes. Two lines that are actually the same length can LOOK different sizes because of arrows or backgrounds. Two circles that are actually the same color can LOOK different shades because of surrounding colors. Your brain isn't just receiving raw data from your eyes. It's INTERPRETING that data, and sometimes it interprets in ways that don't match reality.`,
            `Other senses can be tricked too. A familiar smell can seem like a friend if you've connected it to a happy memory, even if the smell itself is neutral. Foods can taste different if you eat them when you're hungry vs. full. Pain can feel worse if you're scared, even though the physical injury is the same. None of this means your senses are bad. It means they're CONNECTED to your brain in ways that involve interpretation. This is exactly why scientists use TOOLS like thermometers, microscopes, and measurement instruments. Tools help us check what our senses tell us. They give data that doesn't depend on how we're feeling.`,
          ],
          image: `/ue-assets/science/l02-s3-illusions.webp`,
          imageCaption: `Senses can be fooled. That's why scientists use tools.`,
          vocab: [
            { word: `optical illusion`,
              definition: `An image or scene that tricks your visual system into seeing something different from what's actually there. Helps reveal that your brain interprets, rather than just receives, what you see.`,
              audioPrompt: `An optical illusion is an image that tricks your visual system, {name}. Two lines that are actually the same length can look different sizes. Two colors that are identical can look different shades depending on what surrounds them. Optical illusions don't mean your eyes are broken. They reveal something important: your brain doesn't just receive light from your eyes. It interprets it. Sometimes it interprets in ways that don't match reality. Studying optical illusions has taught scientists a lot about how vision actually works.` },
            { word: `perception`,
              definition: `The process your brain uses to interpret what your senses detect. Perception explains why two people can experience the same event differently — brains don't just receive data, they build an experience from it.`,
              audioPrompt: `Perception is the process your brain uses to interpret what your senses detect, {name}. Your eyes don't see. Your brain sees. Your ears don't hear. Your brain hears. Sensory organs collect raw data. Your brain takes that data and builds an experience of the world from it. This interpretation is why optical illusions work. Your brain applies patterns and shortcuts to make sense of sensory data quickly. Most of the time it works well. Occasionally it gets fooled. Understanding perception is a big part of studying how the brain works.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tools That Extend Our Senses`,
          paragraphs: [
            `Because senses are limited and imperfect, scientists rely on TOOLS to extend and check them. MICROSCOPES let us see things too small for our eyes. TELESCOPES let us see things too far away. THERMOMETERS measure temperature precisely, instead of just "warm" or "cold." MICROPHONES record sound accurately. CAMERAS capture exactly what happened, instead of relying on memory. Every major scientific discovery in the last 400 years has involved tools that gave humans better data than our senses alone could provide.`,
            `Modern tools have expanded science enormously. Brain scanners show electrical activity inside living brains. DNA sequencers read genetic code we'd never see with our eyes. Spectrometers detect chemicals in the atmosphere of distant planets. The history of science is partly a history of building better tools. Your eyes can see a small piece of the world. Your tools, combined with careful thinking, can see almost anywhere. That combination of human curiosity AND extended observation is what makes science possible.`,
          ],
          image: `/ue-assets/science/l02-s4-tools.webp`,
          imageCaption: `Microscopes. Telescopes. Thermometers. Tools that extend what we can sense.`,
          vocab: [
            { word: `instrument`,
              definition: `A tool used by scientists to extend, measure, or check what human senses can detect. Examples: microscopes, telescopes, thermometers, scales, and brain scanners.`,
              audioPrompt: `A scientific instrument is a tool that extends, measures, or checks what human senses can detect, {name}. Microscopes let scientists see things smaller than what eyes can see. Telescopes let them see things far away. Thermometers measure temperature in exact numbers, instead of vague feelings like "hot" or "cold." Modern instruments are incredibly precise. Brain scanners can show activity inside a living brain. DNA sequencers can read genetic code. Without instruments, most of modern science would not exist. They are how humans see beyond what our senses alone can detect.` },
            { word: `microscope`,
              definition: `A scientific instrument that uses lenses to magnify objects too small to see with the naked eye. Led to the discovery of cells, bacteria, and microorganisms.`,
              audioPrompt: `A microscope is a scientific instrument that uses lenses to magnify objects too small to see with the naked eye, {name}. The first microscopes were built in the 1600s. Scientists used them to discover cells, bacteria, and microorganisms that no one knew existed. Today microscopes can magnify objects millions of times, revealing the structure of DNA, viruses, and individual molecules. The discovery of the cell, which led to modern biology, would never have happened without the microscope. It is one of the most important scientific instruments ever invented.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four scenes about observing. For each one, identify what's happening: SENSES DOING THEIR JOB (your senses working normally), SENSES BEING TRICKED (the brain interpreting wrong), or TOOL EXTENDING SENSES (using an instrument to see beyond what senses can)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `senses-working`,    label: `Senses Working Normally`, color: `#34D399`, description: `Your senses doing what they were built to do.` },
            { id: `senses-tricked`,    label: `Senses Being Tricked`,    color: `#F87171`, description: `An optical illusion or other way the brain interprets wrong.` },
            { id: `tool-extending`,    label: `Tool Extending Senses`,   color: `#60A5FA`, description: `Using a scientific instrument to see beyond what senses alone can detect.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `You walk into a kitchen and smell freshly baked cookies.` },
                { text: `Your nose detects chemical molecules in the air.` },
                { text: `Your brain interprets the signals as a familiar smell.` },
              ],
              correctAnswer: `senses-working`,
              realWorldExample: `Smelling food is a great example of normal sensing.`,
              explanation: `Chemicals reach your nose. Receptors send signals to brain. Brain identifies smell. Pure senses-working-normally. Smell is one of your most underrated senses.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `A biologist is studying a leaf.` },
                { text: `She places it under a microscope set to 400 times magnification.` },
                { text: `She can now see individual cells with chloroplasts inside, which she couldn't see with her eyes alone.` },
              ],
              correctAnswer: `tool-extending`,
              realWorldExample: `Microscopes opened up cell biology as a field.`,
              explanation: `Eyes can't see individual cells. Microscope makes it possible. Pure tool-extending. Without microscopes, we wouldn't know cells exist. The same is true for telescopes, X-rays, brain scanners, and dozens of other instruments.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `You look at a famous picture where two horizontal lines appear to be different lengths.` },
                { text: `One has arrows pointing outward at the ends. The other has arrows pointing inward.` },
                { text: `When you measure them with a ruler, both lines are exactly the same length.` },
              ],
              correctAnswer: `senses-tricked`,
              realWorldExample: `The Müller-Lyer illusion is one of the most studied in psychology.`,
              explanation: `Your brain interpreted the lines as different sizes because of the arrows. The lines themselves are identical. Pure senses-being-tricked. This kind of illusion helped scientists understand how vision actually works, and why your brain is always interpreting raw data.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One`,
              clues: [
                { text: `You sip a drink that says "vanilla flavor" on the label.` },
                { text: `It tastes vanilla to you.` },
                { text: `A friend in a blindfolded taste test, not knowing what flavor it claims to be, says it tastes like marshmallow.` },
              ],
              correctAnswer: `senses-tricked`,
              realWorldExample: `Expectation strongly affects taste perception, which is why scientists run blind taste tests.`,
              explanation: `Tricky because your taste buds were "working normally" in one sense. But your brain interpreted the taste based on the LABEL saying vanilla, not just the chemicals you tasted. Your friend, without the label, perceived something different. This is why food scientists do BLIND tests. Expectation strongly affects perception. Senses get tricked by what your brain expects, not just what your tongue actually detects.`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What are SENSES?`,
              options: [
                `Feelings`,
                `Specialized body systems that detect things happening around you and convert them into signals your brain can use`,
                `Imagination`,
                `Memories`,
              ],
              correctIndex: 1,
              explanation: `Senses are body systems that turn the outside world into signals your brain understands. Each sense detects one kind of input (light, vibration, chemicals, pressure) using special cells called receptors.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `What do EYES actually detect?`,
              options: [
                `Color names`,
                `Light that bounces off objects, which is then converted into signals by cells in your retina`,
                `Heat`,
                `Vibrations`,
              ],
              correctIndex: 1,
              explanation: `Eyes detect light. Light enters through the pupil, is focused by the lens, and hits cells in the retina called rods and cones. These convert light into electrical signals your brain interprets as shape, color, and motion.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What do SMELL and TASTE both detect?`,
              options: [
                `Heat`,
                `Chemicals — smell detects chemicals in the air, taste detects chemicals in food`,
                `Light`,
                `Sound`,
              ],
              correctIndex: 1,
              explanation: `Both smell and taste are chemical senses. Smell receptors in your nose detect chemicals floating in the air. Taste receptors on your tongue detect chemicals in food. The two senses also work together. That's why food tastes bland when you have a stuffy nose.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `What is a RECEPTOR?`,
              options: [
                `A type of nerve`,
                `A specialized cell that detects one type of input from the environment and converts it into an electrical signal`,
                `A muscle`,
                `A type of brain`,
              ],
              correctIndex: 1,
              explanation: `Receptors are specialized cells in each sensory organ. Eyes have light receptors. Ears have vibration receptors. Skin has pressure, temperature, and pain receptors. Each receptor responds to its specific kind of input and sends signals to the brain.` },

            { id: `l02-q5`, format: `true-false`,
              question: `True or false: Your senses are perfectly accurate and never get things wrong.`,
              correctAnswer: false,
              explanation: `False. Senses are amazing but not perfect. Optical illusions trick your eyes. Expectation affects taste. Pain feels worse when you're scared. Your brain interprets sensory data, and sometimes the interpretation doesn't match reality. That's exactly why scientists use tools to check what their senses tell them.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `Why do scientists use INSTRUMENTS like microscopes and thermometers?`,
              options: [
                `Because senses don't exist`,
                `Because senses are limited and imperfect — instruments extend what we can detect and give precise measurements`,
                `Because senses cost too much`,
                `For fun`,
              ],
              correctIndex: 1,
              explanation: `Instruments let scientists see beyond what human senses can detect. They also give precise numbers instead of vague feelings. "It feels warm" is sense-based. "It's 27 degrees Celsius" is instrument-based. Both have value, but only the second can be checked by other people.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `Which would let you see SMALLER things than your eyes alone?`,
              options: [
                `A telescope`,
                `A microscope`,
                `A thermometer`,
                `A radio`,
              ],
              correctIndex: 1,
              explanation: `Microscopes magnify small objects, like cells. Telescopes work the opposite way: they help you see things that are far away. Both extend human vision beyond what eyes alone can do.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `Why does an OPTICAL ILLUSION matter to scientists?`,
              options: [
                `It doesn't`,
                `It shows that the brain INTERPRETS what eyes see, rather than just receiving raw data — which is important for understanding how vision actually works`,
                `Because it's pretty`,
                `Because it teaches math`,
              ],
              correctIndex: 1,
              explanation: `Optical illusions reveal something important about vision. Your brain doesn't just receive light. It interprets light, fills in gaps, and assumes patterns. Sometimes those interpretations don't match reality. Understanding this helped scientists figure out how the visual system actually works.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Of your five senses, which one do you think you rely on most? Which one do you think you take for granted?` },
            { id: `r2`, text: `Have you ever been tricked by a sense (mistook one smell for another, saw something that wasn't there)? What happened?` },
            { id: `r3`, text: `If you could have a SIXTH sense — something humans don't usually have — what would you choose, and why?` },
            { id: `r4`, text: `Why do you think tools like microscopes and telescopes have changed science so dramatically?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Your senses run constantly without you even noticing. Right now, your skin is detecting temperature, your ears are picking up background sounds, your nose is processing smells in the air. Most of this never reaches your conscious attention because your brain filters out what isn't important. Becoming a better observer means learning to pay attention to things your brain usually ignores. This is one of the most useful skills in science, art, detective work, and life in general. The better you can really notice what's around you, the better you can understand it.`,
          familyAdventure: `Family Sense-Sharpening. Pick a small object together (a piece of fruit, a stone, a leaf). For two minutes, have each family member describe it using one sense only. What do you see? What do you smell? What does it feel like? Try not to repeat each other. Notice how much information one familiar object actually contains. Most people miss most of it because we observe casually instead of carefully.`,
          creativePrompt: {
            intro: `Imagine being a detective at a crime scene (no actual crime, just an unsolved puzzle). Write your observations using all five senses.`,
            floor: `Write at least 5 sentences. Include something you see, something you hear, something you smell, something you can touch, and something you might taste (if there's food involved).`,
            stretch: `Write 8 to 10 sentences. Cover all five senses, then propose ONE hypothesis about what happened, based on your observations.`,
            open: `Write as much as you want. Build a full detective scene that mixes vivid sensory details with scientific reasoning. Use sense data to form multiple hypotheses, then choose your best guess.`,
            frames: [
              `As I enter the scene, I see ___.`,
              `I hear ___.`,
              `There's a faint smell of ___.`,
              `When I touch ___, it feels ___.`,
              `Based on these clues, my best guess is ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what senses really are, how each one works, why they sometimes get tricked, and how scientific tools extend them. Next lesson: one of biology's biggest questions. What's the difference between LIVING and NON-LIVING things? It sounds easy, but the answer is more interesting than you'd think. See you there. — Cosmo.`,
          badge: `sense-master`,
          badgeName: `Sense Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
