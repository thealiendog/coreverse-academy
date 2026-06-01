// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L06 — Black Holes: What We Actually Know
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS PS2, Coreverse Original — General Relativity, Modern Astrophysics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (EHT papers vs Kip Thorne vs viral "portal" content)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l06-v1";

const COSMOS_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-06`,
      title: `Black Holes: What We Actually Know`,
      duration: 35,
      xpReward: 75,
      badge: `event-horizon-investigator`,
      badgeName: `Event Horizon Investigator`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, black holes used to be theoretical. Predicted by Einstein's general relativity in 1916, debated for decades, considered "interesting mathematical solutions" that might not actually exist. That changed. By the 1970s, indirect evidence was overwhelming. In 2015, gravitational wave detectors caught two black holes colliding. In 2019, the Event Horizon Telescope produced the first direct image of one. In 2022, they imaged the supermassive black hole at the center of our own galaxy. Black holes are no longer theoretical. They are photographed objects. Today we look at what we actually know about them, what's still open, and how to tell real black hole science from the viral "black holes are portals to other dimensions" content that fills the internet.`,
          headline: `Black Holes`,
          subtitle: `Predicted in 1916. Photographed in 2019. What we actually know.`,
          visual: `/voyager-assets/cosmos/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Black Hole Actually Is`,
          paragraphs: [
            `A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape. The boundary of this region is called the event horizon. Once anything crosses the event horizon, it is permanently inside. From outside, we can observe the gravitational effects of the black hole and the radiation from matter falling in, but we cannot directly observe what is happening inside.`,
            `The idea emerged from Einstein's general relativity. In 1915, Einstein published the equations describing how mass and energy curve spacetime. Within a year, a German physicist named Karl Schwarzschild found a specific solution to Einstein's equations: an exact description of the spacetime around a non-rotating mass. Schwarzschild's solution showed that if a mass were compressed below a certain radius (now called the Schwarzschild radius), the gravitational curvature would become so extreme that not even light could escape. Schwarzschild died of an illness contracted in World War I within months of publishing this work.`,
            `For decades, physicists considered the Schwarzschild solution a mathematical curiosity. Nobody believed real objects could actually compress that much. The term "black hole" was popularized in 1967 by American physicist John Wheeler. The objects became increasingly difficult to dismiss as the 20th century progressed. Observations of binary systems, X-ray sources, and the motions of stars near galactic centers all pointed to compact massive invisible objects: black holes.`,
          ],
          image: `/voyager-assets/cosmos/l06-s1-schwarzschild.webp`,
          imageCaption: `Schwarzschild 1916: solved Einstein's equations and described what we now call black holes.`,
          vocab: [
            {
              word: `Schwarzschild radius`,
              definition: `The critical radius below which a mass becomes a black hole. For the Sun, the Schwarzschild radius is about 3 km. For Earth, about 9 mm. If you could compress an object below its Schwarzschild radius, it would become a black hole.`,
              audioPrompt: `The Schwarzschild radius is the critical radius below which a mass becomes a black hole, {name}. Named after Karl Schwarzschild, who solved Einstein's general relativity equations in 1916. For the Sun, the Schwarzschild radius is about 3 kilometers. If you could somehow compress the Sun's entire mass into a sphere 3 km across, it would become a black hole. For Earth, the Schwarzschild radius is about 9 millimeters. The mass would have to be crushed into a sphere about the size of a marble. Nothing in nature compresses Earth-like objects this much, which is why neither the Sun nor Earth will ever become black holes. The masses that do become black holes (collapsing cores of massive stars) are heavy enough that gravity wins despite the resistance.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How We Find Them`,
          paragraphs: [
            `For most of the 20th century, black holes were inferred indirectly. Several lines of evidence pointed to their existence. First, X-ray binaries: pairs where a normal star orbits an invisible compact companion that pulls in stellar gas and heats it to X-ray-emitting temperatures. The companion in Cygnus X-1, discovered in 1964, was identified as a likely black hole in the early 1970s. Stephen Hawking and Kip Thorne famously bet on whether Cygnus X-1 was actually a black hole. Hawking eventually conceded the bet to Thorne in 1990.`,
            `Second, the motions of stars near galactic centers. Beginning in the 1990s, two teams led by Andrea Ghez and Reinhard Genzel tracked individual stars orbiting the center of our Milky Way galaxy. The stars moved at velocities consistent with orbiting a compact object roughly 4 million times the mass of the Sun. The object had to be incredibly compact and incredibly dark. Ghez and Genzel won the 2020 Nobel Prize for this work.`,
            `Third, gravitational waves. In 2015, the LIGO collaboration detected the first gravitational waves from a pair of black holes colliding 1.3 billion light-years away. The two black holes, each roughly 30 times the Sun's mass, spiraled together and merged in a fraction of a second, briefly radiating more power as gravitational waves than all the stars in the observable universe combined as light. The discovery (GW150914) won the 2017 Nobel Prize. Hundreds more black hole mergers have been detected since.`,
            `Fourth, direct imaging. In 2019, the Event Horizon Telescope collaboration, a network of radio telescopes spanning Earth, produced the first direct image of a black hole. The supermassive black hole at the center of galaxy M87, 6.5 billion times the mass of the Sun, appeared as a bright ring of glowing gas with a dark shadow in the middle, exactly as predicted. In 2022, the same collaboration imaged the supermassive black hole at the center of our own Milky Way: Sagittarius A*. Black holes are now photographed objects.`,
          ],
          image: `/voyager-assets/cosmos/l06-s2-eht.webp`,
          imageCaption: `EHT 2019: first direct image of a black hole. M87* showed the predicted shadow precisely.`,
          vocab: [
            {
              word: `Event Horizon Telescope`,
              definition: `International collaboration of radio telescopes that combined observations from sites around the world to image black hole event horizons. Produced first direct image of a black hole (M87*) in 2019. Imaged the Milky Way's central black hole (Sagittarius A*) in 2022.`,
              audioPrompt: `The Event Horizon Telescope, called EHT, is an international collaboration of radio telescopes spanning Earth, {name}. By combining observations from sites in Chile, Hawaii, Antarctica, Spain, Mexico, the United States, and elsewhere, they effectively create a telescope the size of Earth itself. This is necessary because directly imaging a black hole requires extraordinary resolution. In April 2019, EHT released the first direct image of a black hole: the supermassive black hole at the center of galaxy M87, 6.5 billion times the Sun's mass. In 2022, they released the image of Sagittarius A*, the supermassive black hole at the center of our own Milky Way. Both images showed the predicted shadow against a bright ring of glowing gas, confirming general relativity at its most extreme.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What's Actually Inside`,
          paragraphs: [
            `Outside a black hole, general relativity describes the spacetime accurately. Stars orbit. Light bends. Time slows down near the event horizon. All of this has been measured and matches Einstein's predictions to the precision available.`,
            `Inside the event horizon, things get harder. General relativity predicts that all matter that falls in must continue falling toward the center, eventually reaching a "singularity" where density becomes infinite and the equations of general relativity break down. The singularity isn't really part of physics; it's a sign that our current theory is incomplete in this regime. A future theory of quantum gravity should describe what actually happens at and near the singularity. We don't have that theory yet.`,
            `One specific thing we do know about black holes is sometimes called the "no-hair theorem." Theoretical work in the 1960s and 1970s showed that classical black holes can be completely described by just three numbers: mass, electric charge, and angular momentum (spin). Everything else about whatever fell in (chemical composition, color, what kind of object it was) is irretrievable from outside. This is one reason black holes are so simple to describe mathematically despite being so extreme.`,
            `In 1974, Stephen Hawking made a startling prediction: black holes are not perfectly black. Through subtle quantum effects near the event horizon, they emit a faint thermal radiation, now called Hawking radiation. The radiation is incredibly weak for stellar-mass black holes, far below anything we could detect. But it implies that, over enormous timescales, black holes slowly evaporate. A solar-mass black hole would take ~10⁶⁷ years to evaporate completely. The universe is only 1.38 × 10¹⁰ years old. Black hole evaporation is real physics but operates on timescales far beyond cosmic history.`,
          ],
          image: `/voyager-assets/cosmos/l06-s3-inside.webp`,
          imageCaption: `Singularity (physics breaks down), no-hair theorem (3 numbers describe everything), Hawking radiation (10⁶⁷ years to evaporate).`,
          vocab: [
            {
              word: `Hawking radiation`,
              definition: `Faint thermal radiation predicted by Stephen Hawking in 1974 to be emitted by black holes through quantum effects near the event horizon. Implies black holes slowly evaporate over enormous timescales. Has not been directly detected, but is theoretically robust.`,
              audioPrompt: `Hawking radiation is faint thermal radiation predicted by Stephen Hawking in 1974 to be emitted by black holes, {name}. Through subtle quantum effects near the event horizon, particles can effectively appear to be emitted from a black hole. The radiation is incredibly weak. For a stellar-mass black hole, Hawking radiation is colder than the cosmic microwave background and far below anything we could detect. But it implies that, over enormous timescales, black holes slowly evaporate. A solar-mass black hole would take about 10 to the 67th power years to evaporate completely. The universe is only 13.8 billion years old. Hawking radiation is real physics but operates on timescales far beyond cosmic history. It has never been directly detected, but theoretical confidence is high.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Black Holes Are Not`,
          paragraphs: [
            `Popular culture has filled the space around black holes with claims that aren't supported by physics. Several are worth correcting.`,
            `Black holes don't "suck things in" from far away. The gravity of a black hole at large distance is exactly the same as the gravity of any other object of the same mass. If you replaced the Sun with a 1-solar-mass black hole, Earth would continue orbiting exactly as it does now. (It would get cold and dark, but the orbit wouldn't change.) Black holes only "trap" things that come close enough to cross the event horizon. They don't reach across the galaxy and pull objects in.`,
            `Black holes don't connect to other universes, in any verified sense. The idea of "wormholes" (theoretical tunnels through spacetime) exists in general relativity as a mathematical solution, but no observation has ever shown one exists. Stable, traversable wormholes likely require "exotic matter" with negative mass-energy, which has never been observed. Movies and viral content that describe black holes as portals to other universes are speculating beyond the evidence. The actual physics is more interesting: we don't know what happens at the singularity, and a future theory of quantum gravity may reveal something genuinely strange there. But "black holes are portals" isn't established science.`,
            `Black holes aren't holes. They're regions of spacetime, more like an extremely dense star than like an empty void. Falling into one wouldn't be "falling into a hole" in the everyday sense. The matter doesn't disappear into another place; it falls toward the singularity along the curved spacetime inside the event horizon.`,
            `Finally, a comment on the "spaghettification" idea that often gets repeated. If you fell into a small black hole, the difference between the gravity at your head and at your feet would stretch you into a long thin shape: spaghettification is a real prediction. For a stellar-mass black hole, this would happen far outside the event horizon, killing you before you crossed in. For supermassive black holes, the tidal forces at the event horizon are gentler. You could in principle fall through the event horizon of a supermassive black hole without being stretched apart. You still couldn't get back out. But you wouldn't necessarily be stretched in the dramatic way popular descriptions suggest.`,
          ],
          image: `/voyager-assets/cosmos/l06-s4-myths.webp`,
          imageCaption: `Common misconceptions vs actual physics. The reality is more interesting.`,
          vocab: [
            {
              word: `wormhole`,
              definition: `Theoretical tunnel through spacetime connecting two distant regions. Exists as a mathematical solution in general relativity. No observation has ever shown one exists. Stable, traversable wormholes likely require "exotic matter" with properties no real matter has been shown to have.`,
              audioPrompt: `A wormhole is a theoretical tunnel through spacetime connecting two distant regions, {name}. The idea exists as a mathematical solution in general relativity. The famous "Einstein-Rosen bridge" is one example, derived by Einstein and Nathan Rosen in 1935. But no observation has ever shown a wormhole exists. Theoretical work suggests that stable, traversable wormholes would require "exotic matter" with negative mass-energy density, which has never been observed in nature. Wormholes are common in science fiction and in viral physics content. They are real mathematical structures in general relativity. They have never been observed as real physical objects. The distinction between "mathematically possible" and "observed to exist" is crucial here.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources discussing black holes. The first is the actual EHT collaboration's 2019 paper announcing the first direct image. The second is a passage from Kip Thorne's accessible book "Black Holes & Time Warps" (Thorne is a Nobel laureate who worked on the science underlying the movie Interstellar). The third is a viral YouTube video titled "Black Holes Are Portals to Parallel Universes" with millions of views.`,
            `As you rank them, watch for the patterns. Does the source describe specific observed phenomena with citations to data? Does it acknowledge what's settled versus what's speculative? Does it have something to sell? Does the author have relevant credentials? Does the framing match what working physicists actually say?`,
            `One framing as you work through this: the real physics of black holes is genuinely strange and fascinating without needing to add fictional portals. Spacetime curves to the point of trapping light. A region of pure geometry hides what's inside from us forever. The math of general relativity makes specific predictions that have been confirmed by gravitational waves and direct imaging. This is real, weird, beautiful science. The viral "portals" version is a thin film over much more interesting actual physics.`,
          ],
          image: `/voyager-assets/cosmos/l06-s5-before.webp`,
          imageCaption: `Real black hole physics is strange enough on its own. No portals required.`,
          vocab: [
            {
              word: `gravitational waves`,
              definition: `Ripples in the fabric of spacetime predicted by Einstein in 1916 and directly detected by LIGO in 2015. Produced by accelerating massive objects (especially merging black holes and neutron stars). Won the 2017 Nobel Prize.`,
              audioPrompt: `Gravitational waves are ripples in the fabric of spacetime, {name}. Predicted by Einstein in 1916 as a consequence of general relativity. They are produced when massive objects accelerate, especially in extreme situations like two black holes spiraling together and merging. The waves stretch and compress space itself as they pass through. They are incredibly faint by the time they reach Earth from typical sources. The LIGO collaboration directly detected gravitational waves for the first time in 2015, from two black holes colliding 1.3 billion light-years away. The discovery, called GW150914, won the 2017 Nobel Prize. Hundreds more detections have followed. Gravitational wave astronomy is now an established field that complements traditional light-based observations.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l06-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Black Holes`,
          intro: `Three sources discuss black holes. Rank them from most credible to least credible based on methodology, evidence, and how well they distinguish established physics from speculation. Then see how a careful analyst would evaluate them.`,
          topic: `What is actually known about black holes, and how do we tell real black hole science from viral physics misinformation?`,
          sources: [
            {
              id: `source-a`,
              name: `Event Horizon Telescope Collaboration (2019) — "First M87 Event Horizon Telescope Results" (Astrophysical Journal Letters)`,
              type: `Peer-reviewed academic research from international collaboration of 200+ researchers; the paper announcing the first direct image of a black hole`,
              claim: `Imaged the supermassive black hole at the center of galaxy M87 using a global network of radio telescopes combined into a virtual Earth-sized instrument. The black hole has a mass of approximately 6.5 billion times the mass of the Sun. The image shows a bright asymmetric ring of glowing gas with a dark shadow in the middle, matching general relativity's predictions for a black hole's event horizon to within experimental precision. Provides detailed methodology, error analysis, and comparison with alternative models. Concludes that no other known astrophysical object can produce the observed image features.`,
              evidence: `Peer-reviewed in Astrophysical Journal Letters, top astrophysics journal. 200+ co-authors from 60+ institutions across 20+ countries. Detailed observation methodology including instrument calibration and data processing. Multiple independent analysis teams reached consistent conclusions. Findings replicated and extended (Sagittarius A* in 2022, polarization measurements, magnetic field structure). The image matches general relativity's predictions precisely. No alternative astrophysical explanation has been proposed that fits the data.`,
            },
            {
              id: `source-b`,
              name: `Kip Thorne, "Black Holes & Time Warps: Einstein's Outrageous Legacy" (1994) — popular science book`,
              type: `Popular science book by Kip Thorne, theoretical physicist at Caltech, 2017 Nobel laureate (for gravitational waves), scientific consultant for the movie Interstellar`,
              claim: `Black holes are real consequences of general relativity. They form from collapsing massive stars or grow by accretion at galactic centers. The chapter explains the Schwarzschild solution, the discovery of evidence through X-ray binaries and stellar dynamics, the no-hair theorem, Hawking radiation, and the singularity. Thorne is careful to distinguish what's well-established (general relativity outside the event horizon, the existence of black holes, the no-hair theorem) from what's speculative (what happens inside, whether wormholes are stable). He acknowledges open questions including the information paradox.`,
              evidence: `Author is a Nobel laureate in physics with peer-reviewed publications in black hole physics. The book has been widely praised by physicists for accuracy. Thorne marks clearly what's settled versus speculative. He doesn't oversell hypothetical features like wormholes or white holes; when he discusses them, he's explicit they're theoretical. The book has limitations of popular science (can't include math, occasional simplifications) but Thorne is careful. His later work on Interstellar (2014) involved detailed peer-reviewed calculations of black hole appearance, which fed back into actual research.`,
            },
            {
              id: `source-c`,
              name: `"Black Holes Are Portals to Parallel Universes" — YouTube video, 8M views`,
              type: `Viral YouTube video with dramatic music, dramatic CGI, and a narrator claiming to reveal "what scientists don't want you to know" about black holes`,
              claim: `"Black holes are not just dead stars—they are PORTALS to parallel universes. When you fall into one, you don't get crushed; you get teleported to another reality. Stephen Hawking secretly believed this. The information that falls in goes to another universe. Wormholes prove this is possible. Astronauts who got too close to black holes have reported strange experiences. Scientists are hiding the truth because it would undermine mainstream physics. Click subscribe and check out my Patreon for the full uncensored version."`,
              evidence: `Claims contradict the actual state of black hole physics. Wormholes exist as mathematical solutions in general relativity but no observation has ever shown one exists; stable traversable wormholes would require "exotic matter" with no known real-world equivalent. Astronauts have never approached black holes; the nearest known black hole is several thousand light-years away. The "scientists are hiding the truth" framing contradicts the open publication of all relevant physics for over a century. No verifiable references to peer-reviewed papers. Heavy production but zero substance. Channel pattern: dramatic claims, vague gestures at "science," monetization through ads and Patreon.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? How did you weigh the differences in evidence between the three?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible for understanding what we directly know about black holes. Peer-reviewed academic research at a top journal. 200+ co-authors from 60+ institutions independently agreed on the methodology and findings. The image matches general relativity's predictions to high precision. Follow-up work has extended and confirmed the results. When you want to know what we've actually observed about black holes, the EHT papers are bedrock. The discovery was such a clear demonstration of black hole physics that the result is now standard textbook material.`,
              `Source B is also credible and uniquely useful for understanding black holes conceptually. Kip Thorne is one of the most respected theoretical physicists alive, a Nobel laureate, and unusually skilled at explaining black hole physics to general audiences. He is scrupulous about marking the boundary between established physics, well-supported predictions, and genuine speculation. When he discusses wormholes or what's inside the event horizon, he is explicit about which parts are mathematical and which are observed. This is the gold standard for popular science writing on black holes. The book is somewhat dated (1994) but remains widely recommended by physicists.`,
              `Source C is recognizable pseudo-physics viral content. The pattern is consistent across this genre. Take real physics terms (wormhole, parallel universe, Hawking) and connect them in ways the actual physics doesn't support. Frame mainstream physics as hiding truth (the "scientists are hiding the truth" pitch is itself a manipulation pattern). Cite no peer-reviewed work. Make claims that flatly contradict the actual state of physics (astronauts approaching black holes is impossible given that the nearest known black hole is several thousand light-years away). Monetize through ads and subscriptions. The video profits whether the claims are true or not, because revenue comes from views and Patreon support, not from the physics being correct.`,
              `The deeper lesson: real black hole physics is more interesting than viral physics content suggests. Spacetime curves to the point of trapping light. A region of pure geometry hides what's inside from us forever. The EHT collaboration produced direct images. LIGO detected the gravitational waves of black hole mergers. Roger Penrose won the 2020 Nobel Prize for proving that black holes must form according to general relativity. The real science is genuinely strange and beautiful. The "portals to parallel universes" version is a thin film over much more fascinating actual physics. Once you can tell them apart, you can engage seriously with real black hole research.`,
            ],
          },
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the event horizon of a black hole?`,
              options: [
                `The center of the black hole`,
                `The boundary of the black hole, beyond which nothing—not even light—can escape; once anything crosses, it's permanently inside; first imaged directly in 2019 by the Event Horizon Telescope`,
                `A type of telescope`,
                `Time near a black hole`,
              ],
              correctIndex: 1,
              explanation: `The event horizon defines the black hole. Inside it, no information can escape to the outside universe. The EHT collaboration imaged this boundary directly for M87 in 2019 and Sagittarius A* in 2022.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Schwarzschild radius?`,
              options: [
                `The size of a galaxy`,
                `The critical radius below which a mass becomes a black hole; for the Sun it's about 3 km, for Earth about 9 mm; named after Karl Schwarzschild, who solved Einstein's equations in 1916`,
                `Distance between stars`,
                `Random measurement`,
              ],
              correctIndex: 1,
              explanation: `Schwarzschild solved Einstein's general relativity equations within a year of their 1915 publication, finding the exact description of spacetime around a non-rotating mass. He died of an illness contracted in World War I shortly after publishing this foundational work.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the Event Horizon Telescope, and what did it accomplish?`,
              options: [
                `A single big telescope`,
                `International collaboration combining radio telescopes worldwide into a virtual Earth-sized instrument; produced the first direct image of a black hole (M87) in 2019; imaged Sagittarius A* in our galaxy in 2022`,
                `A space telescope`,
                `A theoretical concept`,
              ],
              correctIndex: 1,
              explanation: `EHT combines telescopes in Chile, Hawaii, Antarctica, Spain, Mexico, the US, and elsewhere. Both images showed exactly the ring-and-shadow pattern general relativity predicts.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is Hawking radiation?`,
              options: [
                `Heat from a black hole`,
                `Faint thermal radiation predicted by Stephen Hawking in 1974 to be emitted by black holes through quantum effects near the event horizon; implies black holes slowly evaporate over enormous timescales (~10⁶⁷ years for a solar-mass black hole); has not been directly detected`,
                `Radio waves`,
                `Gravitational waves`,
              ],
              correctIndex: 1,
              explanation: `Hawking radiation is far below current detection capabilities for stellar-mass black holes. The timescales for evaporation vastly exceed the current age of the universe. It's real predicted physics that operates on cosmic-far-future timescales.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the "no-hair theorem"?`,
              options: [
                `Black holes have no surface features`,
                `Classical black holes can be completely described by just three numbers: mass, electric charge, and angular momentum; everything else about whatever fell in (chemical composition, etc.) is irretrievable from outside`,
                `A type of hair`,
                `A physics joke only`,
              ],
              correctIndex: 1,
              explanation: `The name is whimsical but the physics is real. The simplicity of black holes (despite being so extreme) is one reason they're mathematically tractable. Three numbers tell you everything about a classical black hole from outside.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why don't black holes "suck things in" from far away?`,
              options: [
                `Because they have no mouth`,
                `Because the gravity of a black hole at large distance is exactly the same as the gravity of any other object of the same mass; if you replaced the Sun with a solar-mass black hole, Earth would continue orbiting unchanged; black holes only trap things that come close enough to cross the event horizon`,
                `Because they're far away`,
                `Because they're invisible`,
              ],
              correctIndex: 1,
              explanation: `One of the most common misconceptions about black holes. Their gravity at large distance is normal. The "extreme" effects only happen very close to the event horizon. This matters for understanding why Earth would survive (although freeze) if the Sun became a black hole tomorrow.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is a wormhole, and what's the actual state of evidence for one?`,
              options: [
                `A type of caterpillar`,
                `Theoretical tunnel through spacetime connecting two distant regions; exists as a mathematical solution in general relativity, but no observation has ever shown one exists; stable traversable wormholes likely require "exotic matter" not known to exist`,
                `A confirmed object`,
                `A type of black hole`,
              ],
              correctIndex: 1,
              explanation: `The distinction between "mathematically possible" and "observed to exist" is crucial. Wormholes are real math. They are not observed objects. Movies that treat them as established physics oversell what we actually know.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What did LIGO accomplish in 2015?`,
              options: [
                `Built a new telescope`,
                `Directly detected gravitational waves for the first time, from two black holes colliding 1.3 billion light-years away (event GW150914); confirmed Einstein's 1916 prediction; won the 2017 Nobel Prize; opened a new field of astronomy`,
                `Found dark matter`,
                `Mapped the Sun`,
              ],
              correctIndex: 1,
              explanation: `Gravitational wave detection was a century-long pursuit. LIGO's first detection in 2015 was one of the most significant physics achievements of the early 21st century. Hundreds more detections have followed.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Direct evidence shows that black holes are portals to parallel universes.`,
              correctAnswer: false,
              explanation: `False. No observation has ever shown black holes connect to other universes. Wormholes exist as mathematical solutions but not as observed objects. The "portals" framing common in viral physics content is speculation, not established science.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says "I saw a video that proved black holes are portals to other universes." Based on this lesson, what's the most useful response?`,
              options: [
                `"Cool, they probably are"`,
                `"That's the kind of video that takes real physics terms and connects them in ways the actual physics doesn't support. Wormholes exist as mathematical solutions in general relativity, but no observation has ever shown one. Stable wormholes would require 'exotic matter' that has never been observed. The real physics of black holes is fascinating without portals: light gets trapped, spacetime curves to extreme degrees, the Event Horizon Telescope has photographed them. Don't trade the real strangeness for a less-interesting fictional version."`,
                `"Black holes don't exist"`,
                `"All YouTube science is wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied physics literacy. Honor the friend's curiosity. Name precisely what's mathematical vs observed. Redirect to the real, more interesting physics. This is mature engagement with a hard topic in a real conversation.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you imagine when you heard "black hole"? Has the picture sharpened?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why is the "portals to parallel universes" framing so appealing even when the physics doesn't support it? What psychological need is it meeting?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can tell real black hole physics from viral pseudo-physics automatically, what does that protect you from over a lifetime of media consumption?` },
            { id: `reflect-application`, category: `Application`, prompt: `Find one viral black hole video or article. Apply the lesson's framework. What's established physics, what's speculation dressed up as established, and what's outright wrong?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's still unknown about black holes? Where do working physicists disagree about the details?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one EHT image online (M87* or Sagittarius A*). Spend two minutes looking at it. That's a photograph of a black hole 6.5 billion times the Sun's mass.` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Black hole literacy protects you from a thriving pseudo-physics ecosystem. Two paths.`,
          familyActivity: {
            title: `The Family Black Hole Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about real black hole physics. Ask each adult: have they ever watched a viral video about black holes that claimed portals, wormholes, or parallel universes? Most will have. Walk through what's actually been observed: Schwarzschild's 1916 solution, decades of indirect evidence, Cygnus X-1, the Ghez and Genzel stars near the galactic center, LIGO 2015, EHT 2019 and 2022. Show them an EHT image on a phone. Most adults have never seen one. The conversation often reveals that family members hold beliefs from movies and viral content that don't match the actual science. Naming the difference is freeing, not deflating.`,
          },
          projectOption: {
            title: `Map The Known Black Holes, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Research five known black holes: M87*, Sagittarius A*, Cygnus X-1, and two others of your choice. For each, find: estimated mass, distance from Earth, how we discovered it, key references. Build a one-page profile for each. After 14 days, write 1,000 words on what you learned. Pay attention to the distinction between black holes confirmed by direct imaging (very few), confirmed by gravitational waves (many), and confirmed by indirect evidence (most). Real applied astrophysics literacy. Most adults can't name more than one black hole. You'll be able to discuss five with real evidence.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real astrophysics research at 12 is unusual.`,
          },
          identityQuestion: `If you become someone who can engage with real black hole science instead of dramatic misinformation, what does that change about how you engage with physics generally?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can tell real black hole physics from "portals to parallel universes" content.`,
            `A person who knows the EHT images show what general relativity predicted to high precision.`,
            `Someone willing to engage with the real strangeness of spacetime instead of fictional add-ons.`,
          ],
          saveKey: `identity_responses_cs_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixth Cosmos lesson done. You can now articulate what black holes actually are, explain the Schwarzschild radius and event horizon, trace the discovery history from indirect evidence through LIGO 2015 and EHT 2019, understand Hawking radiation and the no-hair theorem, and tell real black hole physics from viral pseudo-physics. Most adults have never been taught this systematically. Next time we go into what most of the universe is actually made of, and we don't know. Dark matter and dark energy make up ~95% of cosmic energy content. Three serious positions compete on what they actually are. Argument Builder format. See you among the stars. — Nova`,
          badge: `event-horizon-investigator`,
          badgeName: `Event Horizon Investigator`,
          xpEarned: 75,
          competencies: [
            `Articulates what a black hole actually is (event horizon, Schwarzschild radius, singularity)`,
            `Knows the discovery history: Schwarzschild 1916, Cygnus X-1, LIGO 2015, EHT 2019, Sgr A* 2022`,
            `Understands Hawking radiation, no-hair theorem, and their physical implications`,
            `Distinguishes established black hole physics from speculative claims (wormholes, portals)`,
            `Can apply structural source evaluation to viral black hole content`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Dark Matter & Dark Energy`,
            hook: `95% of the universe is made of something we don't understand. Three competing explanations. The evidence and the open questions.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L06 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
