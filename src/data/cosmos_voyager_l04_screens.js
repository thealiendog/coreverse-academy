// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L04 — The Big Bang & Cosmic Origins
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Big Bang Cosmology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SEQUENCE GAME (cosmic timeline 13.8B years to now)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l04-v1";

const COSMOS_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-04`,
      title: `The Big Bang & Cosmic Origins`,
      duration: 35,
      xpReward: 75,
      badge: `cosmic-historian`,
      badgeName: `Cosmic Historian`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, the Big Bang is not a theory about where the universe came from — it's a theory about how it evolved from an early hot dense state. The evidence is overwhelming and comes from three independent sources. This lesson covers what we actually know, what remains genuinely open, and how to read cosmology claims accurately.`,
          headline: `The Big Bang & Cosmic Origins`,
          subtitle: `13.8 billion years of cosmic history. The evidence, the events, the sequence.`,
          visual: `/voyager-assets/cosmos/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Hubble's Discovery And Its Implications`,
          paragraphs: [
            `In 1929, Edwin Hubble published an analysis of distances and velocities for a small set of galaxies. He found that more distant galaxies appeared to be moving away faster than closer galaxies, with the velocity proportional to the distance. This relationship is now called Hubble's law. It was a startling discovery. The universe was not static. It was expanding.`,
            `What does it mean for the universe to "expand"? It does not mean galaxies are flying through space, like shrapnel from an explosion. It means space itself is stretching. Imagine drawing dots on a balloon and then inflating the balloon. The dots don't move on the balloon's surface, but they get further apart because the surface itself expands. Similarly, galaxies are not moving through space; space between galaxies is increasing.`,
            `Hubble's discovery had a startling implication. If everything is moving apart now, everything was closer together in the past. Rewind the cosmic clock far enough, and all of the matter and energy in the observable universe would have been concentrated into an extraordinarily hot, dense state. This idea was named the "Big Bang" in 1949 by astronomer Fred Hoyle, who actually opposed the theory. The name stuck.`,
          ],
          image: `/voyager-assets/cosmos/l04-s1-hubble.webp`,
          imageCaption: `Hubble 1929: galaxies recede from us, faster the further they are. The universe is expanding.`,
          vocab: [
            {
              word: `Hubble's law`,
              definition: `The relationship discovered by Edwin Hubble in 1929: more distant galaxies recede from us faster, with velocity proportional to distance. Foundational evidence that the universe is expanding.`,
              audioPrompt: `Hubble's law is the relationship discovered by Edwin Hubble in 1929, {name}. More distant galaxies recede from us faster, with velocity proportional to distance. The relationship is foundational evidence that the universe is expanding. The expansion isn't galaxies flying through space; it's space itself stretching. Galaxies sit roughly still on the expanding fabric of spacetime, and as the fabric stretches, the distances between galaxies increase. Hubble's law has been refined and extended by astronomers over the decades, but the basic discovery has held. The constant of proportionality, called the Hubble constant, is one of the most actively measured numbers in modern cosmology.`,
            },
            {
              word: `cosmic expansion`,
              definition: `The ongoing increase in the distances between galaxies, not because galaxies are flying through space but because space itself is stretching. Discovered by Edwin Hubble in 1929 and foundational to the Big Bang theory.`,
              audioPrompt: `Cosmic expansion is the ongoing increase in distances between galaxies, {name}. It does not mean galaxies are flying through space like shrapnel from an explosion. It means space itself is stretching. Imagine drawing dots on a balloon and then inflating the balloon. The dots do not move on the balloon's surface, but they get further apart because the surface expands. Similarly, galaxies are not moving through space; space between galaxies is increasing. Edwin Hubble showed this in 1929 by observing that more distant galaxies appear to be moving away faster than closer ones. His discovery had a startling implication: if everything is moving apart now, everything was closer together in the past. Rewind far enough, and all matter and energy were concentrated into an extraordinarily hot, dense state. That is the basis of the Big Bang theory.`,
            },
            {
              word: `Fred Hoyle`,
              definition: `Astronomer who coined the term 'Big Bang' in 1949, ironically as a way of mocking the theory he opposed. The name stuck despite his opposition and has become the standard name for the cosmological model.`,
              audioPrompt: `Fred Hoyle was an astronomer who coined the name Big Bang in 1949, {name}. He actually opposed the theory. The name was intended as a somewhat dismissive label for an idea he disagreed with. It stuck anyway, and it is now the standard name for the cosmological model describing the universe's expansion from an extremely hot, dense state. The Big Bang theory itself did not originate with Hoyle; it grew from Edwin Hubble's 1929 discovery that distant galaxies are receding from us, combined with theoretical work showing that Einstein's general relativity equations predicted an expanding or contracting universe. Hubble's observational discovery that everything is moving apart implied that everything was once closer together. Rewind far enough, and you reach the early hot dense state the theory describes.`,
            }
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Cosmic Microwave Background`,
          paragraphs: [
            `The Big Bang theory makes a specific testable prediction. If the universe was once extremely hot and dense, then as it expanded and cooled, the radiation from that hot early state should still be around, now stretched to long wavelengths by the expansion. Physicists Ralph Alpher and Robert Herman predicted this leftover "cosmic microwave background" radiation in 1948.`,
            `In 1965, two radio astronomers at Bell Labs in New Jersey, Arno Penzias and Robert Wilson, were trying to use a sensitive radio antenna for satellite communications. They kept picking up a faint background hiss they couldn't get rid of. They checked everything, including cleaning pigeon droppings out of the antenna. The hiss persisted, and it came from every direction in the sky equally. It turned out they had accidentally discovered the cosmic microwave background, exactly as the Big Bang theory had predicted. They won the 1978 Nobel Prize for the discovery.`,
            `Since then, the cosmic microwave background has been mapped in increasing detail by satellites: COBE in 1989, WMAP in 2001, and Planck in 2009. Each satellite revealed more precise structure in the radiation. The tiny variations in temperature across the sky (one part in 100,000) encode an enormous amount of information about the early universe: its age, its composition, its geometry, the seeds of the galaxies that would later form. The cosmic microwave background is one of the most information-rich observations in all of physics.`,
          ],
          image: `/voyager-assets/cosmos/l04-s2-cmb.webp`,
          imageCaption: `Penzias & Wilson 1965: accidentally discovered cosmic background radiation. Big Bang confirmed.`,
          vocab: [
            {
              word: `cosmic microwave background`,
              definition: `Faint radiation filling the entire sky, leftover from when the early universe became transparent ~380,000 years after the Big Bang. Predicted by Alpher and Herman (1948), discovered by Penzias and Wilson (1965). Foundational evidence for the Big Bang.`,
              audioPrompt: `The cosmic microwave background is faint radiation filling the entire sky, {name}. It is leftover from when the early universe became transparent, about 380,000 years after the Big Bang. Before that, the universe was hot enough that electrons and protons couldn't combine into atoms; photons kept getting scattered. When the universe cooled enough for atoms to form, the photons could travel freely, and they've been traveling ever since, stretched to microwave wavelengths by cosmic expansion. The cosmic microwave background was predicted by Alpher and Herman in 1948 and accidentally discovered by Penzias and Wilson in 1965. It is one of the most foundational pieces of evidence for the Big Bang. Tiny variations in temperature across it encode the early universe's structure.`,
            },
            {
              word: `Penzias and Wilson`,
              definition: `Two radio astronomers at Bell Labs who accidentally discovered the cosmic microwave background in 1965 while troubleshooting background noise in their antenna. They won the 1978 Nobel Prize for the discovery.`,
              audioPrompt: `Penzias and Wilson are the radio astronomers who accidentally discovered the cosmic microwave background in 1965, {name}. Arno Penzias and Robert Wilson were at Bell Labs in New Jersey, trying to use a sensitive radio antenna for satellite communications. They kept picking up a faint background hiss they could not get rid of. They checked everything, including cleaning pigeon droppings out of the antenna. The hiss persisted, and it came from every direction in the sky equally. It turned out they had accidentally discovered the cosmic microwave background, exactly as the Big Bang theory had predicted. Ralph Alpher and Robert Herman had predicted this leftover radiation in 1948. Penzias and Wilson's accidental discovery confirmed the prediction and won them the 1978 Nobel Prize in Physics.`,
            },
            {
              word: `Planck satellite`,
              definition: `European Space Agency satellite launched in 2009 to map the cosmic microwave background with high precision. Its maps encode information about the early universe's age, composition, geometry, and the seeds of galactic structure.`,
              audioPrompt: `The Planck satellite was launched in 2009 to map the cosmic microwave background with extraordinary precision, {name}. It was the third major satellite mission to do so, following COBE in 1989 and WMAP in 2001. Each satellite revealed more precise structure in the radiation. The tiny variations in temperature across the sky, one part in 100,000, encode an enormous amount of information about the early universe. From the Planck maps, scientists can read the universe's age, its composition, its geometry, and the seeds of the galaxies that would later form. The cosmic microwave background was predicted by Alpher and Herman in 1948, accidentally discovered by Penzias and Wilson in 1965, and has been mapped in increasing detail ever since. It is one of the most information-rich observations in all of physics.`,
            }
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The First Few Minutes`,
          paragraphs: [
            `What can we actually say about the very early universe? More than you might think. The Big Bang theory, combined with established physics, lets us reconstruct the first few minutes with surprising confidence. Almost everything we observe in the cosmos today is consistent with what those equations predict.`,
            `The earliest moment we can say anything about with confidence is around 10⁻³⁵ seconds after the Big Bang. At this point, the entire observable universe was smaller than a proton and hotter than 10²⁸ degrees. A brief period called "cosmic inflation" expanded the universe by a factor of at least 10²⁶ in a fraction of a second. After inflation ended, the universe filled with a hot soup of quarks, gluons, electrons, photons, and other elementary particles.`,
            `As the universe cooled, quarks bound together to form protons and neutrons (around 10⁻⁶ seconds after the Big Bang). Then, between 1 second and about 20 minutes, protons and neutrons fused to form the lightest atomic nuclei: hydrogen (~75% by mass), helium (~25%), and tiny traces of lithium. This process is called Big Bang nucleosynthesis. The predicted ratios match the abundances we measure in the oldest stars to remarkable precision.`,
            `For the next 380,000 years, the universe was a hot ionized plasma, opaque to light. Then it cooled enough for electrons to combine with nuclei to form neutral atoms, and photons could travel freely. That moment, called "recombination," is the source of the cosmic microwave background we see today. The radiation has been traveling ever since.`,
          ],
          image: `/voyager-assets/cosmos/l04-s3-minutes.webp`,
          imageCaption: `Inflation, nucleosynthesis, recombination. The first ~380,000 years, in physics-supported detail.`,
          vocab: [
            {
              word: `Big Bang nucleosynthesis`,
              definition: `The fusion of the lightest atomic nuclei (hydrogen, helium, traces of lithium) in the first ~20 minutes of the universe. Predicted abundances match observations in the oldest stars to remarkable precision. Foundational evidence for the Big Bang.`,
              audioPrompt: `Big Bang nucleosynthesis is the fusion of the lightest atomic nuclei in the first 20 minutes of the universe, {name}. Between about 1 second and 20 minutes after the Big Bang, protons and neutrons fused to form mostly hydrogen and helium, with tiny traces of lithium. The relative amounts predicted by the equations are about 75% hydrogen and 25% helium by mass. When astronomers measure the composition of the oldest stars, the abundances match these predictions to remarkable precision. This is one of the strongest pieces of evidence that the Big Bang actually happened. The first elements were forged in the first few minutes of the universe, and we can verify the recipe.`,
            },
            {
              word: `cosmic inflation`,
              definition: `A brief period of exponential expansion in the very early universe, around 10⁻³⁵ seconds after the Big Bang, proposed to explain why the universe is so uniform on large scales and where the seeds of galactic structure came from.`,
              audioPrompt: `Cosmic inflation is a brief period of exponential expansion in the very early universe, {name}. It occurred around 10 to the minus 35 seconds after the Big Bang. At that point, the entire observable universe was smaller than a proton and hotter than 10 to the 28 degrees. Inflation expanded the universe by a factor of at least 10 to the 26 in a fraction of a second. After inflation ended, the universe filled with a hot soup of quarks, gluons, electrons, photons, and other elementary particles. Inflation was proposed to explain several puzzling features of cosmology: why the universe is so uniform on large scales, where the seeds of galactic structure came from, and why space is so close to perfectly flat. The Big Bang combined with established physics lets us reconstruct the first few minutes of cosmic history with surprising confidence.`,
            },
            {
              word: `recombination`,
              definition: `The moment approximately 380,000 years after the Big Bang when the universe cooled enough for electrons to combine with nuclei to form neutral atoms. Before recombination the universe was opaque; after, photons could travel freely, producing the cosmic microwave background.`,
              audioPrompt: `Recombination is the moment approximately 380,000 years after the Big Bang when the universe cooled enough for electrons to combine with nuclei to form neutral atoms, {name}. Before this moment, the universe was a hot ionized plasma, opaque to light. Photons kept getting scattered. When the universe cooled enough for atoms to form, photons could travel freely for the first time. The radiation from that moment has been traveling ever since, stretched to microwave wavelengths by cosmic expansion. That is the cosmic microwave background we observe today. Before recombination, between 1 second and about 20 minutes after the Big Bang, protons and neutrons had already fused to form the lightest atomic nuclei in a process called Big Bang nucleosynthesis. The predicted ratios of hydrogen, helium, and lithium match the abundances we measure in the oldest stars to remarkable precision.`,
            }
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Stars, Galaxies, Planets, Life`,
          paragraphs: [
            `For about 100 million years after recombination, the universe was dark. Hydrogen and helium gas filled space, gravitating slowly into clumps under the seeds of structure left over from the early universe. Eventually, the densest clumps collapsed enough to ignite nuclear fusion in their cores. The first stars formed about 100-200 million years after the Big Bang.`,
            `The first generation of stars were massive and short-lived. They fused hydrogen into helium, helium into carbon, carbon into heavier elements, all the way up to iron. When they died, many exploded as supernovae, scattering heavier elements across space. These elements seeded the next generations of stars. Every atom of carbon in your body, every atom of iron in your blood, every atom of oxygen in the air you breathe was forged inside a star and scattered by an explosion before our solar system existed. We are, very literally, made of star stuff (Carl Sagan's phrase).`,
            `Galaxies began forming around 200-400 million years after the Big Bang. Our own Milky Way is thought to have begun forming around 13 billion years ago, only ~800 million years after the Big Bang. Our solar system formed about 4.6 billion years ago, when a cloud of gas and dust collapsed under gravity. The Sun ignited; the planets formed from the leftover material; Earth condensed at just the right distance to allow liquid water.`,
            `Life on Earth began at least 3.5 billion years ago, almost certainly earlier, in conditions we still don't fully understand. For most of Earth's history, life was microbial. Multicellular life only became abundant about 600 million years ago. Land plants and animals followed. Mammals diversified after the dinosaur extinction 66 million years ago. Modern humans, Homo sapiens, appeared roughly 300,000 years ago. Civilization began about 12,000 years ago. You, reading this lesson, are about 13.8 billion years downstream of the Big Bang.`,
          ],
          image: `/voyager-assets/cosmos/l04-s4-stars.webp`,
          imageCaption: `Stars, galaxies, planets, life. Every atom in your body forged in a previous generation of stars.`,
          vocab: [
            {
              word: `stellar nucleosynthesis`,
              definition: `The fusion of elements heavier than helium inside stars. Carbon, oxygen, iron, and other elements in your body were forged inside stars and scattered into space when those stars died.`,
              audioPrompt: `Stellar nucleosynthesis is the fusion of elements heavier than helium inside stars, {name}. The Big Bang made mostly hydrogen and helium. Everything heavier had to be made inside stars. Stars fuse hydrogen into helium in their cores, then helium into carbon, then carbon into oxygen, nitrogen, neon, magnesium, silicon, sulfur, iron. When massive stars die as supernovae, they scatter these elements across space. The next generation of stars and their planets are built from this enriched material. Every atom of carbon in your body, every atom of iron in your blood, every atom of oxygen in the air you breathe was forged inside a previous star. Carl Sagan's famous phrase: we are made of star stuff. It is literally true.`,
            },
            {
              word: `supernovae`,
              definition: `Enormous stellar explosions that scatter heavy elements forged inside massive stars across space. Every atom of carbon, oxygen, and iron in your body was created inside a star and dispersed by a supernova before our solar system existed.`,
              audioPrompt: `Supernovae are enormous stellar explosions that scatter heavy elements across space, {name}. The first generation of stars were massive and short-lived. They fused hydrogen into helium, helium into carbon, carbon into heavier elements, all the way up to iron. When they died, many exploded as supernovae, scattering those heavier elements across the galaxy. These elements seeded the next generations of stars. Every atom of carbon in your body, every atom of iron in your blood, every atom of oxygen in the air you breathe was forged inside a star and scattered by an explosion before our solar system existed. Carl Sagan's phrase captures it precisely: we are made of star stuff. It is literally true. Galaxies began forming around 200 to 400 million years after the Big Bang, built from material enriched by these early supernovae.`,
            },
            {
              word: `Homo sapiens`,
              definition: `The species name for modern humans, who appeared roughly 300,000 years ago. Civilization began about 12,000 years ago. Modern humans exist 13.8 billion years downstream of the Big Bang, at the very end of the cosmic timeline.`,
              audioPrompt: `Homo sapiens is the species name for modern humans, {name}. We appeared roughly 300,000 years ago. Civilization began about 12,000 years ago. On the cosmic timeline, this is extraordinarily recent. The Big Bang occurred 13.8 billion years ago. The first stars formed 100 to 200 million years after that. Our solar system formed about 4.6 billion years ago. Life on Earth began at least 3.5 billion years ago. Multicellular life became abundant only about 600 million years ago. Mammals diversified after the dinosaur extinction 66 million years ago. And then, after all of that: modern humans, 300,000 years ago. Civilization, 12,000 years ago. You, reading this lesson, are about 13.8 billion years downstream of the Big Bang. The cosmic timeline is enormous. Human history occupies a hair's width at its very end.`,
            }
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What's Settled, What's Open`,
          paragraphs: [
            `The Big Bang as a general framework is one of the most thoroughly supported theories in physics. Hubble's law showing cosmic expansion is observed. The cosmic microwave background is mapped to extraordinary precision. The abundances of light elements match Big Bang nucleosynthesis predictions. The large-scale structure of galaxies matches simulations of structure growth from the early seed fluctuations. Multiple independent lines of evidence converge on the same picture.`,
            `Several specific questions remain open. What caused inflation, and what physics happened before it? Was there a "before" the Big Bang, or is that question meaningless? Cyclic universe models (the universe undergoing repeated Big Bangs) and multiverse models (our Big Bang as one of many) are seriously discussed by physicists, though without empirical resolution. Some questions might be inherently unanswerable from inside the universe; others may eventually yield to better observations.`,
            `The Big Bang theory is also frequently misrepresented in popular discussion. It is sometimes described as "the universe began as a point and exploded." That's not quite right. The Big Bang describes the universe expanding from an extremely hot, dense state, but it doesn't say anything definitive about whether the universe was actually a "point" at t=0. The physics breaks down before we get to that moment. What we can say with high confidence is the evolution from very shortly after the beginning onward. The Big Bang theory is a theory of the universe's evolution from a hot dense state, not a theory of why there's a universe at all.`,
            `In the sequence game that follows, you'll order the major events of cosmic history. Some of the gaps between events are enormous: 380,000 years to recombination, then 100-200 million years to the first stars, then billions more for galaxies, planets, life, humans. The sequencing matters because the order is what physics actually constrains. Get it right and you have the basic timeline of all of cosmic history under your belt.`,
          ],
          image: `/voyager-assets/cosmos/l04-s5-settled.webp`,
          imageCaption: `Big Bang: thoroughly supported framework. Some questions settled, some genuinely open.`,
          vocab: [
            {
              word: `cosmic inflation`,
              definition: `Proposed by Alan Guth in 1980. A brief period of exponential expansion in the very early universe (~10⁻³⁵ seconds after the Big Bang) that expanded the observable universe by a factor of at least 10²⁶ in a fraction of a second. Explains several puzzling features of cosmology.`,
              audioPrompt: `Cosmic inflation was proposed by physicist Alan Guth in 1980, {name}. It is a brief period of exponential expansion in the very early universe, about 10 to the minus 35 seconds after the Big Bang. Inflation expanded the observable universe by a factor of at least 10 to the 26th power in a tiny fraction of a second. Why propose this? Because it explains several puzzling features of cosmology that the basic Big Bang theory alone doesn't explain: why the universe is so uniform on large scales, why space is so close to perfectly flat, and where the seeds of galactic structure came from. Inflation has accumulated significant evidence over the decades but it's still being refined. Specific inflation models compete and observations test between them.`,
            },
            {
              word: `cyclic universe`,
              definition: `A cosmological model proposing that the universe undergoes repeated Big Bangs, cycling through expansions and contractions. Discussed seriously by physicists as one of the open questions beyond the current Big Bang framework, without empirical resolution.`,
              audioPrompt: `The cyclic universe is a cosmological model proposing that our universe undergoes repeated Big Bangs, cycling through expansions and contractions over vast timescales, {name}. It is one of several seriously discussed alternatives to the standard Big Bang framework. Multiverse models, in which our Big Bang is just one of many, are another. Both are discussed by physicists without empirical resolution. Several specific questions about cosmic origins remain genuinely open. What caused inflation, and what physics happened before it? Was there a before the Big Bang, or is that question meaningless? Some questions might be inherently unanswerable from inside the universe. Others may eventually yield to better observations. The Big Bang as a general framework is thoroughly supported. What happened before it, or whether that question makes sense, remains open.`,
            },
            {
              word: `large-scale structure`,
              definition: `The web-like distribution of galaxies across the observable universe. Its patterns match simulations of how early density fluctuations grew under gravity over billions of years, providing independent confirmation of the Big Bang framework.`,
              audioPrompt: `Large-scale structure refers to the web-like distribution of galaxies across the observable universe, {name}. Galaxies are not randomly scattered. They form filaments and clusters around vast empty voids, creating a cosmic web. The patterns of large-scale structure match simulations of how the early density fluctuations encoded in the cosmic microwave background grew under gravity over billions of years. This match is one of multiple independent lines of evidence supporting the Big Bang framework. Hubble's law shows expansion. The cosmic microwave background shows the early universe's temperature structure. Big Bang nucleosynthesis explains the abundances of light elements. Large-scale structure matches simulations. All converge on the same picture. This convergence of independent evidence is one of the strongest signs of a robust scientific theory.`,
            }
          ],
        },

        // ───── SEQUENCE GAME ──────────────────────────────────────────────────
        {
          id: `l04-sequence`,
          type: `sequence`,
          headline: `Order the cosmic timeline: from Big Bang to now`,
          intro: `{name}, you've just walked through 13.8 billion years of cosmic history. Now order the major events yourself. The first event happened at the very beginning. The last event is happening right now, as you read this. Drag each event into the correct chronological position. Get them all in order and you have the basic timeline of all of cosmic history.`,
          items: [
            {
              id: `seq-1`,
              label: `Cosmic inflation: universe expands by factor of 10²⁶ in fraction of a second`,
              position: 1,
            },
            {
              id: `seq-2`,
              label: `Big Bang nucleosynthesis: first 20 minutes; protons and neutrons fuse into hydrogen and helium`,
              position: 2,
            },
            {
              id: `seq-3`,
              label: `Recombination: 380,000 years after Big Bang; first atoms form, cosmic microwave background released`,
              position: 3,
            },
            {
              id: `seq-4`,
              label: `First stars ignite: 100-200 million years after Big Bang; nuclear fusion begins in densest clumps of hydrogen and helium`,
              position: 4,
            },
            {
              id: `seq-5`,
              label: `Milky Way galaxy begins forming: roughly 800 million years after Big Bang`,
              position: 5,
            },
            {
              id: `seq-6`,
              label: `Solar system forms: 4.6 billion years ago; cloud of gas and dust collapses to form Sun and planets`,
              position: 6,
            },
            {
              id: `seq-7`,
              label: `Life begins on Earth: at least 3.5 billion years ago, possibly earlier`,
              position: 7,
            },
            {
              id: `seq-8`,
              label: `Multicellular life becomes abundant: ~600 million years ago`,
              position: 8,
            },
            {
              id: `seq-9`,
              label: `Modern humans (Homo sapiens) appear: ~300,000 years ago`,
              position: 9,
            },
            {
              id: `seq-10`,
              label: `You read this sentence: right now, 13.8 billion years after the Big Bang`,
              position: 10,
            },
          ],
          reflectionPrompt: `Which gap in the timeline surprises you most? The vastness between Big Bang and first stars? The slow climb from microbes to multicellular life? Something else?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is Hubble's law?`,
              options: [
                `Stars move in circles`,
                `The relationship discovered by Edwin Hubble in 1929: more distant galaxies recede from us faster, with velocity proportional to distance; foundational evidence that the universe is expanding`,
                `Galaxies don't move`,
                `Light bends around planets`,
              ],
              correctIndex: 1,
              explanation: `Hubble's law isn't galaxies flying through space; it's space itself stretching. The implication: everything was closer together in the past, leading to the Big Bang theory.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the cosmic microwave background?`,
              options: [
                `Heat from the Sun`,
                `Faint radiation filling the entire sky, leftover from when the early universe became transparent ~380,000 years after the Big Bang; predicted by Alpher and Herman (1948), discovered by Penzias and Wilson (1965)`,
                `Radio interference`,
                `Stars flickering`,
              ],
              correctIndex: 1,
              explanation: `Penzias and Wilson accidentally discovered the CMB while trying to clean their antenna. They won the 1978 Nobel Prize. The CMB has been mapped in increasing detail by COBE, WMAP, and Planck satellites since.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Big Bang nucleosynthesis?`,
              options: [
                `Stars exploding`,
                `The fusion of the lightest atomic nuclei (hydrogen, helium, traces of lithium) in the first ~20 minutes of the universe; predicted abundances match observations in the oldest stars to remarkable precision`,
                `New atoms being made today`,
                `Nuclear weapons physics`,
              ],
              correctIndex: 1,
              explanation: `BBN is one of the strongest pieces of Big Bang evidence. The predicted ratio (~75% hydrogen, ~25% helium by mass, traces of lithium) matches measurements in the oldest stars. The recipe verifies itself.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "recombination" in cosmology?`,
              options: [
                `Atoms breaking apart`,
                `The moment ~380,000 years after the Big Bang when the universe cooled enough for electrons to combine with nuclei to form neutral atoms, allowing photons to travel freely; source of the cosmic microwave background`,
                `Stars merging`,
                `Galaxies colliding`,
              ],
              correctIndex: 1,
              explanation: `Before recombination, the universe was opaque (photons scattered constantly). After recombination, photons could travel freely. The CMB we see today is light released at that moment, traveling ever since.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is cosmic inflation?`,
              options: [
                `Stars getting hotter`,
                `Brief period of exponential expansion in the very early universe (~10⁻³⁵ seconds after Big Bang); expanded the observable universe by factor of at least 10²⁶ in fraction of a second; proposed by Alan Guth in 1980`,
                `Money problems`,
                `Black holes growing`,
              ],
              correctIndex: 1,
              explanation: `Inflation was proposed to explain several puzzling features: why the universe is so uniform on large scales, why space is nearly flat, where galactic structure seeds came from. Significant evidence, but still being refined.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is stellar nucleosynthesis, and why does it matter to you personally?`,
              options: [
                `New types of stars forming`,
                `The fusion of elements heavier than helium inside stars; every atom of carbon, oxygen, iron in your body was forged inside a previous generation of stars and scattered when they died; Carl Sagan's "we are star stuff" is literally true`,
                `Stars dying`,
                `Star colors`,
              ],
              correctIndex: 1,
              explanation: `Big Bang made mostly hydrogen and helium. Everything heavier was made inside stars. You are literally built from atoms that were once inside other stars before our solar system existed.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `When did the first stars form, relative to the Big Bang?`,
              options: [
                `Immediately`,
                `100-200 million years after the Big Bang; for ~100 million years before that, the universe was dark, with hydrogen and helium gas slowly gravitating into clumps; densest clumps collapsed enough to ignite nuclear fusion`,
                `13 billion years after`,
                `Yesterday`,
              ],
              correctIndex: 1,
              explanation: `The "Dark Ages" between recombination and first stars lasted ~100-200 million years. Once star formation began, the universe started becoming the one we know.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is the Big Bang theory considered one of the most thoroughly supported theories in physics?`,
              options: [
                `Because everyone agrees`,
                `Multiple independent lines of evidence converge on the same picture: Hubble's law (cosmic expansion), cosmic microwave background, Big Bang nucleosynthesis abundances, large-scale galactic structure matching simulations`,
                `Because Einstein said so`,
                `Because it's the only theory`,
              ],
              correctIndex: 1,
              explanation: `Convergence of independent evidence is the strongest sign of a robust theory. Different observations using different physics all point to the same picture. That's how science establishes high confidence.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The Big Bang theory says the universe began as a tiny point that exploded.`,
              correctAnswer: false,
              explanation: `False, in important ways. The Big Bang describes the universe expanding from an extremely hot, dense state. It doesn't claim the universe was a "point" at t=0 (the physics breaks down before that moment), and "exploded" misrepresents space expanding outward (no "outside" for it to explode into). The popular description is a simplification of what the theory actually says.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "The Big Bang is just a theory; it could easily be wrong." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, science could be wrong"`,
                `"In science, 'theory' means a framework supported by extensive evidence, not a guess. The Big Bang is supported by Hubble's law (observed expansion), the cosmic microwave background (predicted and discovered), Big Bang nucleosynthesis (light element abundances matching predictions), and large-scale structure (simulations matching observations). Multiple independent lines of evidence converge. Future theories may refine or extend the Big Bang framework, but they'll need to reproduce all this evidence. The framework isn't going away."`,
                `"The Big Bang is fake"`,
                `"It's only a guess"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic literacy. Honor the genuine humility that scientific theories can be refined. But the "just a theory" framing misunderstands what "theory" means in science. Big Bang is among the best-supported scientific theories ever.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think happened "in the Big Bang"? Has your picture changed?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which event in the cosmic timeline was hardest to wrap your mind around? The 10⁻³⁵-second inflation? The 100-million-year dark age? Something else?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who genuinely understands that you're made of atoms forged in stars that died before our solar system existed, what does that change about how you see yourself?` },
            { id: `reflect-application`, category: `Application`, prompt: `Look at one ordinary object in your room. Where did its atoms come from? Trace the lineage back: Earth's crust, the supernova that scattered the elements, the star that forged them, the Big Bang that made the original hydrogen.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What questions about cosmic origins seem genuinely beyond current physics? Could humans ever answer them? Or are some questions inherently unanswerable from inside the universe?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one piece of cosmic microwave background imagery online (Planck satellite maps are free and beautiful). Look at it for two minutes. That's a photo of the universe at 380,000 years old.` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Cosmic origins reshape how you understand existence. Two paths.`,
          familyActivity: {
            title: `The Family Cosmic Origin Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share the cosmic timeline. Ask each adult: do they know roughly when the universe began, when Earth formed, when life appeared? Most adults have heard "13.8 billion years" without internalizing the actual sequence. Walk through the timeline together. End by passing around something physical (a piece of fruit, a glass of water, anything) and ask: where did the atoms in this come from? Trace them back: the food's source, Earth's crust, the supernova that scattered the elements, the previous star that forged them, the Big Bang's hydrogen. This is one of the most awe-producing conversations a family can have.`,
          },
          projectOption: {
            title: `Build A Cosmic Timeline, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Create a physical cosmic timeline. Get a long roll of paper (12+ feet). Mark the Big Bang at one end and "now" at the other. Scale the timeline so 1 foot = 1.15 billion years. Mark the major events: first atoms (380,000 years after BB, less than a millimeter from the start mark), first stars (100-200M years, about 1 inch), Milky Way (800M years, ~9 inches), solar system (4.6B years ago, ~7.6 feet from "now"), life on Earth (3.5B years ago, ~7 feet from now), modern humans (300,000 years ago, less than the width of a hair from "now"). The visual scale produces visceral understanding the lecture can't match. Display it somewhere visible. After 14 days of looking at it, write 1,000 words on what changed in your sense of where you sit in cosmic time.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Building the physical timeline is one of the most awe-producing science activities possible.`,
          },
          identityQuestion: `If you genuinely internalize that you're sitting at the end of 13.8 billion years of cosmic story, how does that change how you spend the relatively tiny number of years you get?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the cosmic timeline well enough to feel where I sit in 13.8 billion years.`,
            `A person made of atoms forged in stars that died before our solar system existed.`,
            `Someone willing to hold the awe of cosmic history without rushing to make it about me.`,
          ],
          saveKey: `identity_responses_cs_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourth Cosmos lesson done. You can now articulate Hubble's law and what it implies about expansion; explain the cosmic microwave background, Big Bang nucleosynthesis, and recombination; trace the cosmic timeline from inflation through stars, galaxies, planets, life, and humans; understand why the Big Bang is one of the most thoroughly supported theories in physics. Most adults don't know any of this in this much detail. You do. Next time we focus in on the stars themselves: how they shine, what happens when they die, and the three very different fates a dying star can meet. Matching game format. See you among the stars. — Nova`,
          badge: `cosmic-historian`,
          badgeName: `Cosmic Historian`,
          xpEarned: 75,
          competencies: [
            `Articulates Hubble's law and what it implies about cosmic expansion`,
            `Knows the cosmic microwave background, its discovery, and what it tells us about the early universe`,
            `Understands Big Bang nucleosynthesis and why it confirms the Big Bang framework`,
            `Can sequence the major events of cosmic history from inflation through human emergence`,
            `Recognizes which Big Bang claims are settled vs which are still debated`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Stars & Stellar Death`,
            hook: `Stars don't all die the same way. White dwarf, neutron star, black hole. Three fates depending on mass. Match the star to its destiny.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sequenceScreen = l.screens.find((s) => s.type === `sequence`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L04 ${VERSION}] "${l.title}" — ${mags} magazine, sequence game w/ ${sequenceScreen?.items?.length ?? 0} items, ${quiz} quiz, ${reflect} reflection`
  );
}
