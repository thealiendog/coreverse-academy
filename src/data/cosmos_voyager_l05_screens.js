// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L05 — Stars & Stellar Death
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Stellar Evolution
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: MATCHING GAME (stellar mass → fate)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l05-v1";

const COSMOS_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-05`,
      title: `Stars & Stellar Death`,
      duration: 35,
      xpReward: 75,
      badge: `stellar-mortician`,
      badgeName: `Stellar Mortician`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, every atom heavier than hydrogen in your body was forged in a star that exploded. Stellar evolution — how stars live and die — is one of the most beautiful stories in science. This lesson covers the full arc: from hydrogen gas to main sequence star to white dwarf, neutron star, or black hole, depending on mass.`,
          headline: `Stars & Stellar Death`,
          subtitle: `Mass at birth determines fate. Three very different cosmic deaths.`,
          visual: `/voyager-assets/cosmos/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Star Is Doing While It's Alive`,
          paragraphs: [
            `A star is a gigantic ball of mostly hydrogen and helium gas held together by its own gravity. The pressure at the center of a star is so high, and the temperature so hot (about 15 million degrees Celsius in our Sun's core), that hydrogen nuclei collide and fuse together to form helium. This nuclear fusion releases enormous amounts of energy, which radiates outward and eventually escapes as the light we see.`,
            `What keeps a star from collapsing under its own gravity? The outward pressure from the fusion energy fights against the inward pull of gravity. A stable star is in "hydrostatic equilibrium": gravity pulling inward exactly balanced by radiation pressure pushing outward. This balance can be maintained for millions, billions, or even trillions of years, depending on the star's mass.`,
            `The Sun is currently a typical "main sequence" star, fusing hydrogen into helium in its core. It's been doing this for about 4.6 billion years. It will continue doing this for roughly another 5 billion years. The Sun's eventual fate is already determined by its mass. We can predict what will happen to it with confidence because we've observed stars of every mass at every stage of their lives and used physics to fit the pattern together.`,
          ],
          image: `/voyager-assets/cosmos/l05-s1-fusion.webp`,
          imageCaption: `Stars: gravity pulls inward, fusion energy pushes outward. The balance can last billions of years.`,
          vocab: [
            {
              word: `hydrostatic equilibrium`,
              definition: `The balance between gravity pulling a star's gas inward and radiation pressure from fusion pushing outward. When the balance holds, a star is stable. When it fails (fuel runs out), the star begins to die.`,
              audioPrompt: `Hydrostatic equilibrium is the balance between gravity pulling a star's gas inward and radiation pressure from fusion pushing outward, {name}. When the balance holds, the star is stable. The Sun has maintained this balance for 4.6 billion years and will maintain it for roughly another 5 billion. When the fuel for fusion eventually runs out, radiation pressure drops, gravity wins, and the star begins to collapse. What happens next depends almost entirely on the star's mass. A star like the Sun ends quietly. A star ten times more massive ends in catastrophic explosion. The physics is exactly the same; the mass changes everything.`,
            },
            {
              word: `nuclear fusion`,
              definition: `The process by which hydrogen nuclei collide and fuse to form helium in a star's core, releasing enormous amounts of energy. Nuclear fusion is what makes stars shine and provides the radiation pressure that balances gravity in hydrostatic equilibrium.`,
              audioPrompt: `Nuclear fusion is the process by which hydrogen nuclei collide and fuse together to form helium in a star's core, releasing enormous amounts of energy, {name}. The pressure and temperature at the center of a star are extraordinary. In our Sun's core the temperature is about 15 million degrees Celsius, hot enough that hydrogen nuclei fuse despite their electrical repulsion. The energy released radiates outward and eventually escapes as the light we see. Nuclear fusion is what makes stars shine. It also provides the outward radiation pressure that balances gravity in hydrostatic equilibrium. When the hydrogen fuel runs out, fusion stops, radiation pressure drops, gravity wins, and the star begins to die. How it dies depends almost entirely on its mass. The Sun has been fusing hydrogen for about 4.6 billion years and will continue for roughly another 5 billion.`,
            },
            {
              word: `main sequence`,
              definition: `The stable phase of a star's life during which it fuses hydrogen into helium in its core. Our Sun is currently a main sequence star. Main sequence lifetimes range from millions of years for massive stars to trillions of years for red dwarfs.`,
              audioPrompt: `The main sequence is the stable phase of a star's life during which it fuses hydrogen into helium in its core, {name}. Our Sun is currently a main sequence star. It has been doing this for about 4.6 billion years and will continue for roughly another 5 billion. A stable main sequence star is in hydrostatic equilibrium: gravity pulling inward is exactly balanced by radiation pressure pushing outward. This balance can be maintained for millions, billions, or even trillions of years depending on the star's mass. More massive stars burn through their fuel faster and leave the main sequence sooner. The most massive stars live only a few million years. Red dwarf stars burn so slowly that no red dwarf has finished its life in the entire history of the universe. The Sun's eventual fate is already determined by its mass.`,
            }
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Path 1: Low-Mass Stars (Like Our Sun)`,
          paragraphs: [
            `For stars roughly the mass of our Sun, or up to about 8 solar masses, the path to death follows a specific sequence. After several billion years of fusing hydrogen in the core, the hydrogen runs out. The core contracts and heats up. Helium fusion begins in the core, while hydrogen fusion continues in a shell around it. The star expands enormously, becoming a "red giant." When our Sun reaches this stage in about 5 billion years, it will swell to engulf Mercury, Venus, and possibly Earth.`,
            `Eventually the helium fuel runs out too. A Sun-like star is not massive enough to fuse heavier elements efficiently, so the outer layers are gently expelled into space, forming a beautiful expanding shell of glowing gas called a "planetary nebula." The name is misleading; planetary nebulae have nothing to do with planets. They're just glowing gas clouds that nineteenth-century astronomers thought looked planet-like through their telescopes.`,
            `What's left at the center is the dense, hot remnant of the original core: a "white dwarf." A typical white dwarf packs the mass of the Sun into a volume roughly the size of Earth. A teaspoonful of white dwarf material would weigh about a ton. The white dwarf cools and dims over billions of years. Eventually it will become a "black dwarf"—cold and dark. But no white dwarf in the universe has had time to cool to a black dwarf yet; the universe isn't old enough. Every white dwarf ever formed is still slowly cooling.`,
          ],
          image: `/voyager-assets/cosmos/l05-s2-whitedwarf.webp`,
          imageCaption: `Sun-like stars: red giant → planetary nebula → white dwarf. Eventually black dwarf, but the universe isn't old enough yet.`,
          vocab: [
            {
              word: `white dwarf`,
              definition: `The dense stellar remnant left behind when a low-to-medium mass star (up to ~8 solar masses) sheds its outer layers. Packs the mass of the Sun into the volume of Earth. About 95% of all stars will end as white dwarfs.`,
              audioPrompt: `A white dwarf is the dense stellar remnant left behind when a low-to-medium mass star sheds its outer layers, {name}. A typical white dwarf packs the mass of the Sun into a volume roughly the size of Earth. A teaspoonful of white dwarf material would weigh about a ton. About 95% of all stars will end their lives as white dwarfs, including our Sun. White dwarfs slowly cool and dim over billions of years. Eventually they become "black dwarfs"—cold and dark—but no white dwarf has had time to cool to that stage yet. The universe is too young. Every white dwarf ever formed is still slowly cooling. It's a quiet death, compared to the alternatives.`,
            },
            {
              word: `red giant`,
              definition: `The expanded phase a Sun-like star enters when its core hydrogen is exhausted. The core contracts and heats up, helium fusion begins, and the star swells enormously. When our Sun becomes a red giant in about 5 billion years, it will expand to engulf Mercury, Venus, and possibly Earth.`,
              audioPrompt: `A red giant is the expanded phase a Sun-like star enters when its core hydrogen is exhausted, {name}. The core contracts and heats up. Helium fusion begins in the core, while hydrogen fusion continues in a shell around it. The star expands enormously as a result. When our Sun reaches this stage in about 5 billion years, it will swell to engulf Mercury, Venus, and possibly Earth. Eventually the helium fuel runs out too. A Sun-like star is not massive enough to fuse heavier elements efficiently, so the outer layers are gently expelled into space, forming a planetary nebula. What is left at the center is the dense, hot remnant called a white dwarf. The red giant phase is a necessary step between stable main sequence star and the quiet final state of a white dwarf.`,
            },
            {
              word: `planetary nebula`,
              definition: `A glowing shell of gas expelled by a low-to-medium mass star when it exhausts its helium fuel. The name is misleading: planetary nebulae have nothing to do with planets; they were named by 19th-century astronomers who thought they looked planet-like through telescopes.`,
              audioPrompt: `A planetary nebula is a glowing shell of gas expelled by a low-to-medium mass star when it exhausts its helium fuel, {name}. The name is misleading. Planetary nebulae have nothing to do with planets. They were named by 19th-century astronomers who thought they looked planet-like through their telescopes. In reality, a planetary nebula is the gently expelled outer layers of a dying Sun-like star, expanding into space. After the outer layers are expelled, what remains at the center is a white dwarf: the dense, hot remnant of the original core. A typical white dwarf packs the mass of the Sun into a volume roughly the size of Earth. About 95 percent of all stars in the universe will end their lives by producing a planetary nebula and leaving behind a white dwarf. It is, by cosmic standards, a quiet and beautiful death.`,
            }
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Path 2: Massive Stars (8-25 Solar Masses)`,
          paragraphs: [
            `Stars more massive than about 8 times the Sun's mass live much shorter, more dramatic lives. The more massive a star, the more rapidly it burns through its fuel. A star 20 times the Sun's mass might live only 10 million years, compared to the Sun's expected 10 billion. Massive stars race through their hydrogen, then helium, then heavier elements: carbon, oxygen, neon, magnesium, silicon. Each fusion stage is shorter than the last.`,
            `Eventually a massive star builds up an iron core. Iron is special in stellar physics. Fusing iron doesn't release energy; it requires energy. When the core is mostly iron, fusion can no longer support the star against gravity. The core collapses catastrophically in less than a second. The outer layers fall inward, then violently rebound outward in a "supernova" explosion. A single supernova can briefly outshine an entire galaxy of 100 billion ordinary stars.`,
            `Supernovae are how heavy elements get scattered into space. The carbon, oxygen, and iron in your body were created inside massive stars and dispersed across the galaxy when those stars exploded. The atoms that became Earth came from supernova debris that mixed with hydrogen and helium and eventually collapsed into our solar system. Supernovae are also how some elements heavier than iron form—gold, silver, platinum, uranium are produced in supernovae and in collisions of neutron stars.`,
            `What's left after a typical supernova is a "neutron star": the collapsed core of the original massive star. A neutron star packs roughly twice the mass of the Sun into a sphere only about 20 kilometers across. A teaspoonful of neutron star material would weigh about 1 billion tons. Neutron stars often spin extremely rapidly, sometimes hundreds of times per second. When they emit beams of radiation from their magnetic poles, we observe them as "pulsars."`,
          ],
          image: `/voyager-assets/cosmos/l05-s3-neutron.webp`,
          imageCaption: `Massive stars: iron core → supernova → neutron star (or black hole if mass is high enough).`,
          vocab: [
            {
              word: `supernova`,
              definition: `Catastrophic explosion at the end of a massive star's life. A supernova briefly outshines an entire galaxy. Disperses heavy elements into space. Leaves behind a neutron star or black hole.`,
              audioPrompt: `A supernova is the catastrophic explosion at the end of a massive star's life, {name}. When a star more than 8 times the Sun's mass builds up an iron core, fusion can no longer support it against gravity. The core collapses in less than a second. The outer layers fall inward and then violently rebound outward. The resulting explosion can briefly outshine an entire galaxy of 100 billion ordinary stars. Supernovae are how heavy elements get scattered into space. The carbon and oxygen and iron in your body were forged inside massive stars and dispersed by supernovae. Some elements heavier than iron, like gold and uranium, are produced in supernovae and in collisions of neutron stars. Supernovae are how the universe builds the chemistry we depend on.`,
            },
            {
              word: `iron core`,
              definition: `The core that builds up in a massive star after it has fused all lighter elements. Iron cannot release energy through fusion; it requires energy. When the iron core grows too large, fusion stops supporting the star and the core collapses catastrophically, triggering a supernova.`,
              audioPrompt: `An iron core is what builds up in a massive star after it has fused hydrogen into helium, then helium into carbon, then carbon into heavier elements all the way up to iron, {name}. Iron is special in stellar physics. Fusing iron does not release energy; it requires energy. When the core is mostly iron, fusion can no longer support the star against gravity. The core collapses catastrophically in less than a second. The outer layers fall inward, then violently rebound outward in a supernova explosion. A single supernova can briefly outshine an entire galaxy of 100 billion ordinary stars. Stars more massive than about 8 times the Sun's mass race through their hydrogen, then helium, then heavier elements. Each fusion stage is shorter than the last. The iron core represents the end of the line for energy-releasing fusion.`,
            },
            {
              word: `neutron star`,
              definition: `The collapsed core left behind after a massive star's supernova. Packs roughly twice the mass of the Sun into a sphere about 20 kilometers across. A teaspoonful would weigh about 1 billion tons. Spinning neutron stars emitting radiation beams are called pulsars.`,
              audioPrompt: `A neutron star is the collapsed core left behind after a typical supernova, {name}. It packs roughly twice the mass of the Sun into a sphere only about 20 kilometers across. A teaspoonful of neutron star material would weigh about 1 billion tons. The matter is so dense that protons and electrons have merged into neutrons. Neutron stars often spin extremely rapidly, sometimes hundreds of times per second. When they emit beams of radiation from their magnetic poles, we observe them as pulsars, sweeping past Earth like a lighthouse beam. Neutron stars are the remnants of stars that were between about 8 and 25 times the mass of the Sun. Stars above about 25 solar masses collapse to form stellar-mass black holes instead. The threshold is not perfectly sharp; it depends on the star's metallicity and rotation.`,
            }
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Path 3: Very Massive Stars (25+ Solar Masses)`,
          paragraphs: [
            `For the most massive stars, even neutron stars aren't dense enough to be stable. When a star more than about 25 times the Sun's mass collapses, the gravity is so intense that nothing can stop the collapse. The matter at the core compresses past the density of a neutron star and continues collapsing. The result is a "black hole": a region of spacetime where gravity is so strong that nothing, not even light, can escape.`,
            `Stellar-mass black holes formed from individual supernovae are typically a few to a few dozen times the Sun's mass. They're tiny by cosmic standards. A 10-solar-mass black hole has an "event horizon" (the boundary beyond which nothing escapes) only about 60 kilometers across. But within the event horizon, the matter is crushed into a "singularity" where our current physics breaks down. What happens at the singularity is one of the biggest open questions in physics.`,
            `Black holes were predicted as a solution to Einstein's general relativity equations in 1916. For decades they were considered mathematical curiosities that might not actually exist. The evidence accumulated through the 20th century: X-ray observations of binary systems where a normal star orbits an invisible companion, gravitational effects on stars near galactic centers, and finally direct imaging. In 2019, the Event Horizon Telescope collaboration produced the first image of a supermassive black hole at the center of galaxy M87. In 2022, they imaged the supermassive black hole at the center of our own Milky Way (Sagittarius A*). Black holes are no longer theoretical. They are observed.`,
            `There are also supermassive black holes at the centers of most galaxies, including our own. These are millions to billions of times the mass of the Sun. How they formed is still being worked out. They likely grew from smaller seed black holes, possibly through mergers and accretion of gas and other black holes over billions of years. The relationship between supermassive black holes and the galaxies that contain them is one of the most active areas of modern cosmology.`,
          ],
          image: `/voyager-assets/cosmos/l05-s4-blackhole.webp`,
          imageCaption: `Most massive stars collapse past neutron stars into black holes. EHT 2019 imaged one directly.`,
          vocab: [
            {
              word: `event horizon`,
              definition: `The boundary of a black hole, beyond which nothing—not even light—can escape its gravity. Once anything crosses the event horizon, it's permanently inside. The event horizon of a 10-solar-mass black hole is about 60 km across.`,
              audioPrompt: `The event horizon is the boundary of a black hole, {name}. Beyond it, nothing can escape the black hole's gravity—not even light. Once anything crosses the event horizon, it's permanently inside. The event horizon of a 10-solar-mass black hole is about 60 kilometers across. For supermassive black holes at galactic centers, the event horizon can be billions of kilometers across. The Event Horizon Telescope collaboration imaged this boundary directly for the first time in 2019, for the supermassive black hole at the center of galaxy M87. The image showed a glowing ring of hot gas with a dark shadow in the middle—the silhouette of the event horizon against the bright background. Black holes are no longer theoretical predictions. They are photographed objects.`,
            },
            {
              word: `singularity`,
              definition: `The point inside a black hole's event horizon where matter is crushed to infinite density and current physics breaks down. What happens at the singularity is one of the biggest open questions in physics, requiring a theory that unifies general relativity and quantum mechanics.`,
              audioPrompt: `A singularity is the point inside a black hole where matter is crushed to infinite density and current physics breaks down, {name}. When a star more than about 25 times the Sun's mass collapses, the gravity is so intense that nothing can stop the collapse. The matter at the core compresses past the density of a neutron star and continues collapsing. Inside the event horizon, it is crushed into a singularity. What happens there is one of the biggest open questions in physics. Our current theories of general relativity and quantum mechanics both break down at that point. A complete theory of quantum gravity would be needed to describe what happens. Black holes were predicted as a solution to Einstein's general relativity equations in 1916. For decades they were considered mathematical curiosities. The evidence that they are real accumulated through the 20th century.`,
            },
            {
              word: `Sagittarius A*`,
              definition: `The supermassive black hole at the center of our Milky Way galaxy. First imaged directly in 2022 by the Event Horizon Telescope collaboration, confirming that our own galaxy hosts a supermassive black hole millions of times the mass of the Sun.`,
              audioPrompt: `Sagittarius A* is the supermassive black hole at the center of our own Milky Way galaxy, {name}. It was directly imaged for the first time in 2022 by the Event Horizon Telescope collaboration. Three years earlier, in 2019, the same collaboration had produced the first image of a black hole: the supermassive black hole at the center of galaxy M87. Sagittarius A* completed the picture by showing that our own galaxy hosts a supermassive black hole. Supermassive black holes at the centers of most galaxies are millions to billions of times the mass of the Sun. How they formed is still being worked out. They likely grew from smaller seed black holes through mergers and accretion of gas and other black holes over billions of years. Black holes are no longer theoretical. They are photographed objects.`,
            }
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What Determines The Fate`,
          paragraphs: [
            `The single most important factor determining a star's fate is its mass at birth. Lower mass means longer life and quieter death. Higher mass means shorter life and more dramatic death. The thresholds aren't perfectly sharp, but the general rule is reliable.`,
            `Stars below about 0.08 solar masses never reach the temperature required for hydrogen fusion. They're called "brown dwarfs" and aren't really stars. Stars from about 0.08 to about 0.5 solar masses are red dwarfs. They burn so slowly and efficiently that no red dwarf has finished its life in the entire history of the universe. They will eventually become white dwarfs, but it will take trillions of years.`,
            `Stars from about 0.5 to 8 solar masses (including our Sun) end as white dwarfs after going through the red giant phase. About 95% of all stars in the universe will end this way. Stars from about 8 to 25 solar masses explode as supernovae and leave neutron stars. Stars above about 25 solar masses (the exact threshold depends on metallicity and rotation) collapse to form stellar-mass black holes after supernova.`,
            `In the matching game that follows, you'll connect stars of different masses to their fates. The mass-fate relationship is one of the cleanest examples of physics-determined destiny in all of cosmology. You can't change a star's fate; mass at birth decides it.`,
          ],
          image: `/voyager-assets/cosmos/l05-s5-fate.webp`,
          imageCaption: `Mass at birth determines fate. The thresholds are physics, not philosophy.`,
          vocab: [
            {
              word: `solar mass`,
              definition: `Standard unit in astronomy: 1 solar mass = the mass of the Sun (about 2×10³⁰ kg). Used to compare stars and other objects. Convenient because so much of stellar physics depends on mass.`,
              audioPrompt: `A solar mass is the standard unit astronomers use to compare masses of stars and other large objects, {name}. One solar mass equals the mass of the Sun, about 2 times 10 to the 30th kilograms. Hundreds of thousands of times the mass of Earth. Stars typically range from 0.08 solar masses (the smallest brown dwarfs and red dwarfs) up to about 100 solar masses or occasionally more (the most massive stars known). The fate of a star depends almost entirely on its mass in solar masses. 0.5 to 8 solar masses ends as white dwarf. 8 to 25 solar masses ends as neutron star after supernova. Above 25 solar masses, you get a black hole. Knowing solar masses lets you predict cosmic destiny.`,
            },
            {
              word: `red dwarfs`,
              definition: `Stars with masses from about 0.08 to 0.5 solar masses. They burn so slowly and efficiently that no red dwarf has finished its life in the entire history of the universe. They will eventually become white dwarfs, but it will take trillions of years.`,
              audioPrompt: `Red dwarfs are stars with masses from about 0.08 to 0.5 solar masses, {name}. They burn so slowly and so efficiently that no red dwarf has finished its life in the entire history of the universe. The universe is only 13.8 billion years old. Red dwarfs will live for trillions of years. They will eventually become white dwarfs, but it will take far longer than the current age of the universe. Red dwarfs are the most common type of star. They are a quietly enormous fraction of all stars that exist. The nearest star to our Sun, Proxima Centauri, is a red dwarf. Stars below about 0.08 solar masses never reach the temperature required for hydrogen fusion at all. They are called brown dwarfs and are not really stars. Mass at birth determines everything about a star's life and death.`,
            },
            {
              word: `brown dwarfs`,
              definition: `Objects with masses below about 0.08 solar masses that never reach the temperature required for hydrogen fusion. They are not classified as stars. Below this mass threshold, gravity cannot compress the core enough to ignite nuclear burning.`,
              audioPrompt: `Brown dwarfs are objects with masses below about 0.08 solar masses that never reach the temperature required for hydrogen fusion, {name}. They are not classified as stars. The mass at birth determines a star's fate at every threshold. Stars from about 0.5 to 8 solar masses, including our Sun, end as white dwarfs after going through the red giant phase. About 95 percent of all stars in the universe will end this way. Stars from about 8 to 25 solar masses explode as supernovae and leave neutron stars. Stars above about 25 solar masses collapse to form stellar-mass black holes after supernova. Below about 0.08 solar masses, you do not get a star at all. You get a brown dwarf: an object that glows faintly from residual heat and gravitational contraction but never sustains nuclear fusion. Mass at birth decides cosmic destiny.`,
            }
          ],
        },

        // ───── MATCHING GAME ──────────────────────────────────────────────────
        {
          id: `l05-matching`,
          type: `matching`,
          headline: `Match each star's mass at birth to its final fate`,
          intro: `{name}, mass at birth determines a star's destiny. Match each star description on the left to its eventual fate on the right. Each star follows the physics of stellar evolution to a specific endpoint. Get all five right and you understand stellar life cycles better than most adults.`,
          pairs: [
            {
              id: `pair-1`,
              left: `Proxima Centauri (~0.12 solar masses, red dwarf)`,
              right: `Will eventually become a white dwarf, but burns so slowly that no red dwarf has finished its life in the entire history of the universe; will take trillions of years`,
            },
            {
              id: `pair-2`,
              left: `Our Sun (~1 solar mass)`,
              right: `Will become a red giant in ~5 billion years, expel outer layers as a planetary nebula, and leave behind a white dwarf about the size of Earth with the mass of the Sun`,
            },
            {
              id: `pair-3`,
              left: `Sirius A (~2 solar masses, the brightest star in our night sky)`,
              right: `Will become a red giant, expel outer layers as a planetary nebula, and end as a white dwarf; same fate as the Sun but on a faster timeline (~1 billion years)`,
            },
            {
              id: `pair-4`,
              left: `Betelgeuse (~15-20 solar masses, the red shoulder of Orion)`,
              right: `Will explode as a supernova within the next ~100,000 years, briefly outshining the rest of the Milky Way, and leave behind a neutron star`,
            },
            {
              id: `pair-5`,
              left: `R136a1 (~200 solar masses, the most massive known star)`,
              right: `Will explode in an extremely violent supernova or "pair-instability supernova" and collapse to form a stellar-mass black hole`,
            },
          ],
          reflectionPrompt: `Which star's fate surprised you most? Did you think the Sun would have a more dramatic end than it actually will?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "hydrostatic equilibrium" in a star?`,
              options: [
                `When a star is full of water`,
                `The balance between gravity pulling gas inward and radiation pressure from fusion pushing outward; when the balance holds, the star is stable; when fuel runs out, the balance fails`,
                `When a star is liquid`,
                `When a star spins fast`,
              ],
              correctIndex: 1,
              explanation: `Hydrostatic equilibrium is what keeps a star stable. The Sun has maintained it for 4.6 billion years and will maintain it for another 5 billion. When fusion ends, gravity wins, and the star begins to die.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a white dwarf?`,
              options: [
                `A small star`,
                `The dense stellar remnant left behind when a low-to-medium mass star (up to ~8 solar masses) sheds its outer layers; packs the mass of the Sun into the volume of Earth; about 95% of all stars will end as white dwarfs`,
                `A young star`,
                `A planet`,
              ],
              correctIndex: 1,
              explanation: `A teaspoonful of white dwarf material would weigh about a ton. White dwarfs cool slowly over billions of years. No white dwarf has had time to cool to a "black dwarf" yet; the universe isn't old enough.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a supernova?`,
              options: [
                `A new star`,
                `Catastrophic explosion at the end of a massive star's life (8+ solar masses); briefly outshines an entire galaxy; disperses heavy elements into space; leaves behind a neutron star or black hole`,
                `A super-fast comet`,
                `An asteroid impact`,
              ],
              correctIndex: 1,
              explanation: `Supernovae are how heavy elements scatter across space. The carbon, oxygen, and iron in your body came from previous supernovae. Some heaviest elements (gold, uranium) form in supernovae and neutron star collisions.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's special about iron in stellar physics?`,
              options: [
                `It's magnetic`,
                `Fusing iron doesn't release energy; it requires energy; when a massive star's core becomes mostly iron, fusion can no longer support it against gravity; the core collapses catastrophically`,
                `It's heavy`,
                `It's rare`,
              ],
              correctIndex: 1,
              explanation: `Iron is the "end of the line" for energy-releasing fusion. Stars build up to iron, but can't go further while still being supported by fusion. When the iron core gets too big, gravity wins, and supernova follows.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is a neutron star?`,
              options: [
                `A regular star`,
                `Collapsed core of a massive star after supernova; packs about 2 solar masses into a sphere ~20 km across; teaspoonful would weigh about 1 billion tons; often spins rapidly and emits radiation beams (pulsars)`,
                `Hollow star`,
                `Gas giant`,
              ],
              correctIndex: 1,
              explanation: `Neutron stars are among the densest objects in the universe outside black holes. The matter is so dense that protons and electrons have merged into neutrons. Pulsars are spinning neutron stars whose radiation beams sweep past Earth.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the event horizon of a black hole?`,
              options: [
                `Its rotation`,
                `The boundary beyond which nothing—not even light—can escape; once anything crosses, it's permanently inside; first imaged directly in 2019 by the Event Horizon Telescope for the supermassive black hole in galaxy M87`,
                `Its temperature`,
                `Its location`,
              ],
              correctIndex: 1,
              explanation: `Black holes were theoretical for decades. Now we have direct images of their event horizons. EHT imaged M87's black hole in 2019 and our own Milky Way's Sagittarius A* in 2022.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What primarily determines a star's eventual fate?`,
              options: [
                `Its color`,
                `Its mass at birth: <0.08 solar masses = brown dwarf (no fusion), 0.5-8 = white dwarf, 8-25 = neutron star, >25 = black hole; mass thresholds are physics, not philosophy`,
                `Its location`,
                `Its name`,
              ],
              correctIndex: 1,
              explanation: `The mass-fate relationship is one of the cleanest examples of physics-determined destiny in all of cosmology. Mass at birth decides everything that follows.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are red dwarfs special among stars?`,
              options: [
                `They're red`,
                `They burn so slowly and efficiently that no red dwarf has finished its life in the entire history of the universe; they'll eventually become white dwarfs but it takes trillions of years; majority of stars in the universe are red dwarfs`,
                `They're hot`,
                `They're rare`,
              ],
              correctIndex: 1,
              explanation: `The universe is only 13.8 billion years old. Red dwarfs live for trillions of years. No red dwarf has ever died of old age in cosmic history. They're a quietly enormous fraction of the universe's stars.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The Sun will eventually explode as a supernova.`,
              correctAnswer: false,
              explanation: `False. The Sun is too low in mass to go supernova. It will become a red giant in ~5 billion years, expel its outer layers as a planetary nebula, and leave behind a white dwarf. Quiet death. Only stars above ~8 solar masses can go supernova.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I read that the Sun could explode and destroy Earth at any moment." Based on this lesson, what should you notice?`,
              options: [
                `"Run for cover"`,
                `"The Sun isn't massive enough to explode as a supernova; it's only about 1 solar mass, far below the ~8 solar mass threshold. In about 5 billion years it will become a red giant, expel its outer layers gently as a planetary nebula, and leave behind a white dwarf. Earth will eventually be incinerated when the Sun swells into a red giant, but that's 5 billion years from now, not 'at any moment.' Real stellar physics rules out the scenario."`,
                `"That's terrible"`,
                `"The Sun is dangerous"`,
              ],
              correctIndex: 1,
              explanation: `Real applied stellar literacy. The mass-fate relationship is so reliable in stellar physics that we can rule out supernova for the Sun with high confidence. Your friend was scared by misinformation; you can correct it with actual physics.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know that stars die very differently depending on mass? Has the picture clarified?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which fate (white dwarf, neutron star, black hole) is hardest to wrap your mind around? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who looks at the night sky and sees stars in their actual life stages instead of just dots, what does that change about your experience of being outside at night?` },
            { id: `reflect-application`, category: `Application`, prompt: `Tonight, find one star you can see and try to learn what mass class it's in. Apps like Stellarium make this easy. Which fate awaits it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's still uncertain in stellar physics? Where do astronomers currently disagree about the details of how stars live and die?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Your body contains atoms from previous supernovae. Sit with that for a moment. What does it mean that you're physically continuous with explosions from stars that died long before our solar system existed?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Stellar literacy connects you to the deepest origins of matter. Two paths.`,
          familyActivity: {
            title: `The Star-Gazing And Story-Telling Walk`,
            duration: `45 minutes (clear night required)`,
            description: `On a clear night, go outside as a family. Use a free app like Stellarium or SkyView to identify visible stars. For each major star you can see, look up its mass class and predicted fate. Tell the family: "That star, Betelgeuse, will explode as a supernova within the next 100,000 years. It might be tonight." "That star, Sirius, will end as a white dwarf, the same fate as our Sun." Most adults have never looked at the night sky knowing what they're seeing. After this conversation, your family can. Stars become characters with destinies instead of just decorative dots.`,
          },
          projectOption: {
            title: `Build Your Stellar Atlas, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Pick 10 bright stars visible from your location. For each one, research: name, distance from Earth, mass in solar masses, current life stage, predicted fate, expected time until that fate. Build a simple atlas with a page per star. Share it with the family. After 14 days, write 1,000 words on what you noticed: which stars are most surprising? Which are closest to dying? Which are essentially eternal on human timescales? Real applied astronomy at the level most adults never reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Building a personal stellar atlas is one of the most awe-producing science activities a kid can do.`,
          },
          identityQuestion: `If you start looking at the night sky and seeing stars in their actual life stages, what does that change about your sense of where you sit in the cosmos?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can match any star I see to its eventual fate just from its mass.`,
            `A person who knows my body contains atoms from previous supernovae.`,
            `Someone willing to sit with the awe of stellar deaths instead of looking away.`,
          ],
          saveKey: `identity_responses_cs_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifth Cosmos lesson done. You can now articulate hydrostatic equilibrium, distinguish the three stellar death paths (white dwarf, neutron star, black hole), know the mass thresholds that determine each fate, explain why supernovae matter for the existence of heavy elements, and recognize the role of iron in stellar physics. You can match any star to its destiny by knowing its mass. Most adults can't. Next time we go deeper into the most extreme objects in the universe: black holes. What they are, what we know from the Event Horizon Telescope images, and why some viral claims about them are wrong. Source Evaluation format. See you among the stars. — Nova`,
          badge: `stellar-mortician`,
          badgeName: `Stellar Mortician`,
          xpEarned: 75,
          competencies: [
            `Articulates hydrostatic equilibrium and what keeps stars stable during their lives`,
            `Knows the three stellar death paths (white dwarf, neutron star, black hole) and their mass thresholds`,
            `Understands why iron is special in stellar physics`,
            `Recognizes the role of supernovae in scattering heavy elements`,
            `Can match any star to its predicted fate based on its mass`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Black Holes`,
            hook: `The most extreme objects in the universe. EHT images, Hawking radiation, the information paradox. Three sources on what we actually know.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matchingScreen = l.screens.find((s) => s.type === `matching`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L05 ${VERSION}] "${l.title}" — ${mags} magazine, matching game w/ ${matchingScreen?.pairs?.length ?? 0} pairs, ${quiz} quiz, ${reflect} reflection`
  );
}
