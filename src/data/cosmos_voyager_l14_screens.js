// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L14 — The Fate of the Universe
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Future Cosmology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (heat death vs Big Rip vs cyclic universe)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l14-v1";

const COSMOS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-14`,
      title: `The Fate of the Universe`,
      duration: 35,
      xpReward: 75,
      badge: `cosmic-futurist`,
      badgeName: `Cosmic Futurist`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, we've spent the last few lessons looking at where the universe came from and what fills it. Today we look forward. Far forward. The universe is 13.8 billion years old. It has trillions to googol-power years of future ahead of it, depending on which fate awaits. Three serious cosmological positions compete for what actually happens at the end. The first says the universe expands and cools forever into heat death. The second says dark energy eventually rips everything apart, including atoms. The third says the universe will collapse, or cycle through repeated Big Bangs and crunches, never truly ending. Real physicists actively defend each of these. By the end you'll build your own argument about cosmic destiny.`,
          headline: `The Fate of the Universe`,
          subtitle: `Three serious cosmological positions on what happens at the end.`,
          visual: `/voyager-assets/cosmos/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Future Of The Universe Is Predictable`,
          paragraphs: [
            `Predicting the future of the universe sounds impossible. After all, predicting next week's weather is genuinely hard. How can we possibly predict trillions of years? But cosmic futures are actually more predictable than weather, because the universe at large scales follows simpler rules than the chaotic dynamics that produce weather. The fate of the universe depends primarily on a small number of cosmic parameters: the expansion rate, the matter content, the dark matter content, the dark energy content, the spatial geometry. We've measured these to good precision.`,
            `Given our current best measurements, the universe is expanding, and the expansion is accelerating (per Lesson 7). Dark energy makes up about 68% of the universe's energy content. Dark matter makes up about 27%. Ordinary matter makes up about 5%. Space is very close to flat (curvature is consistent with zero within measurement precision). These facts strongly constrain what can happen in the cosmic future.`,
            `Different fates require different assumptions about what the dark energy actually IS. If dark energy is a cosmological constant (constant energy density of space, the simplest model), the future is one thing. If dark energy is "phantom" (energy density increasing over time, mathematically possible but not currently established), the future is something else entirely. If dark energy is dynamical in some other way, yet another future emerges. The lack of certainty about dark energy translates directly into uncertainty about cosmic fate.`,
            `Other possibilities exist that don't fit cleanly into these categories. False vacuum decay (the universe's quantum state shifting catastrophically), big crunch (gravity reversing the expansion, possible if dark energy weakens), conformal cyclic cosmology (Roger Penrose's framework with cosmic rebirth). Each requires specific physics that isn't currently established but isn't ruled out either.`,
          ],
          image: `/voyager-assets/cosmos/l14-s1-prediction.webp`,
          imageCaption: `Cosmic future depends on a small number of parameters. We've measured them, but uncertainty about dark energy is huge.`,
          vocab: [
            {
              word: `cosmological parameters`,
              definition: `The small set of numbers that govern the universe's large-scale behavior: expansion rate (Hubble constant), matter density, dark matter density, dark energy density, spatial curvature. Measured by CMB observations, supernovae, galaxy surveys. The values determine the universe's future.`,
              audioPrompt: `Cosmological parameters are the small set of numbers that govern the universe's large-scale behavior, {name}. The Hubble constant tells us the current expansion rate. The matter density tells us how much ordinary matter the universe contains. The dark matter density and dark energy density tell us about the mysterious components that make up 95% of cosmic energy. The spatial curvature tells us whether the universe is flat, closed, or open. These parameters have been measured to good precision by observations of the cosmic microwave background, supernovae, galaxy surveys, and other techniques. The values determine the universe's large-scale future. The biggest uncertainty is about what dark energy actually IS, which strongly affects the prediction.`,
            },
            {
              word: `dark energy`,
              definition: `Mysterious form of energy making up about 68% of the universe's total energy content. Currently causing the expansion of the universe to accelerate. Its nature — whether it is a cosmological constant, phantom energy, or something else — directly determines the universe's ultimate fate.`,
              audioPrompt: `Dark energy is the mysterious form of energy making up about 68% of the universe's total energy content, {name}. It is currently causing the expansion of the universe to accelerate, as established by observations covered in the lesson on dark energy. Its nature is the central uncertainty in predicting the universe's fate. If dark energy is a cosmological constant — a constant energy density of space — the future is heat death. If dark energy is 'phantom,' with an energy density that increases over time, the future is the Big Rip. If dark energy is dynamical in some other way, yet another future may emerge. Dark matter makes up about 27% of the universe's energy content and ordinary matter only about 5%. The lack of certainty about dark energy's nature translates directly into uncertainty about what happens at the end.`,
            },
            {
              word: `false vacuum decay`,
              definition: `Theoretical scenario in which the universe's quantum state shifts catastrophically from a metastable 'false vacuum' to a lower-energy 'true vacuum.' Would propagate at the speed of light and alter the laws of physics in its wake. One of the exotic fate possibilities not fitting neatly into heat death, Big Rip, or cyclic models.`,
              audioPrompt: `False vacuum decay is a theoretical scenario in which the universe's quantum state shifts catastrophically from a metastable false vacuum to a lower-energy true vacuum, {name}. The shift would propagate outward at the speed of light, altering the fundamental constants and laws of physics in its wake. Any region it reached would be transformed — structures as we know them would not survive. False vacuum decay is one of the exotic cosmic fate possibilities that does not fit cleanly into the main categories of heat death, Big Rip, or cyclic models. It requires specific physics — namely that the universe is currently in a false vacuum state — that is not currently established but is not ruled out either. It is mentioned alongside Big Crunch and Conformal Cyclic Cosmology as a serious but unconfirmed possibility for how the universe's story might end.`,
            }
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Path 1: Heat Death / The Big Freeze`,
          paragraphs: [
            `If dark energy is a cosmological constant (as the simplest model and current best measurements suggest), the universe expands forever at an ever-increasing rate. The future is heat death, sometimes called the "Big Freeze." This is currently considered the most likely fate of the universe by most working cosmologists.`,
            `What does heat death actually look like? The expansion accelerates. Galaxies that aren't gravitationally bound to ours recede beyond our cosmological horizon and become permanently inaccessible. Within billions of years, all stars eventually exhaust their nuclear fuel. New star formation eventually ceases as available hydrogen and helium get used up. Existing stars die: low-mass stars become white dwarfs, then black dwarfs (cold and dark). Massive stars die in supernovae and leave neutron stars or black holes.`,
            `Over enormous timescales, even black holes evaporate via Hawking radiation (Lesson 6). A solar-mass black hole takes ~10⁶⁷ years to evaporate. A supermassive black hole takes ~10¹⁰⁰ years. As the universe continues to expand and cool, eventually no significant gradients of energy remain. The universe approaches a state of maximum entropy: cold, sparse, with the remaining matter and energy spread thinly across cosmic vastness.`,
            `The heat death view treats the universe as approaching equilibrium with no further structure. No new stars. No new life. No information processing. Just sparse matter drifting through cold space at temperatures approaching absolute zero. This isn't dramatic destruction. It's slow cooling and dimming over timescales beyond imagination. The current age of the universe (~10¹⁰ years) is a tiny fraction of the timescales heat death involves.`,
          ],
          image: `/voyager-assets/cosmos/l14-s2-heatdeath.webp`,
          imageCaption: `Heat death: slow expansion and cooling over ~10¹⁰⁰⁰ years. Maximum entropy. The current mainstream prediction.`,
          vocab: [
            {
              word: `heat death`,
              definition: `Cosmological prediction that if dark energy is a cosmological constant, the universe expands and cools forever, eventually reaching maximum entropy with sparse cold matter spread across vast space. Currently considered the most likely fate by most cosmologists.`,
              audioPrompt: `Heat death, also called the Big Freeze, is the cosmological prediction that the universe expands and cools forever, {name}. Eventually reaching maximum entropy with sparse cold matter spread across vast space. The prediction follows from the assumption that dark energy is a cosmological constant, which is the simplest model and the one most consistent with current observations. Over enormous timescales—10 to the 100th power years or more—stars die, black holes evaporate, and matter spreads so thinly that no significant gradients of energy remain. The temperature approaches absolute zero. The universe approaches equilibrium with no further structure or activity. The current age of the universe is a tiny fraction of these timescales. Heat death is currently considered the most likely cosmic fate by most working cosmologists.`,
            },
            {
              word: `Hawking radiation`,
              definition: `Faint radiation emitted by black holes through quantum effects near the event horizon, first calculated by Stephen Hawking in 1974. Carries energy away from the black hole, causing it to slowly evaporate. A solar-mass black hole takes roughly 10⁶⁷ years to evaporate via this process.`,
              audioPrompt: `Hawking radiation is the faint radiation emitted by black holes through quantum effects near the event horizon, {name}. First calculated by Stephen Hawking in 1974. It carries energy away from the black hole, causing it to slowly evaporate over enormous timescales. A solar-mass black hole takes roughly 10 to the 67th power years to evaporate. A supermassive black hole takes roughly 10 to the 100th power years. In the context of heat death, Hawking radiation is the final mechanism by which even the last black holes in the universe will eventually vanish. After that, no significant gradients of energy remain. The universe approaches maximum entropy — cold, sparse, with the remaining matter and energy spread thinly across cosmic vastness. The current age of the universe is a tiny fraction of the timescales Hawking radiation operates on.`,
            },
            {
              word: `maximum entropy`,
              definition: `State of a system in which energy is distributed as evenly as possible and no further useful work can be extracted. The end state of the heat death scenario. A universe at maximum entropy has no temperature gradients, no new star formation, and no information processing.`,
              audioPrompt: `Maximum entropy is the state of a system in which energy is distributed as evenly as possible and no further useful work can be extracted, {name}. In the heat death scenario, the universe approaches maximum entropy over timescales of roughly 10 to the 100th power years or more. Stars die, black holes evaporate via Hawking radiation, and matter spreads thinly across cosmic vastness. Eventually no significant gradients of energy remain. The temperature approaches absolute zero. There is no new star formation, no information processing, no structure emerging. The universe is not destroyed dramatically — it simply cools and dims until nothing more happens. The heat death view treats this maximum entropy state as the universe's final condition, with no recovery or rebirth. This is why heat death is sometimes called the Big Freeze.`,
            }
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Path 2: The Big Rip`,
          paragraphs: [
            `A second possibility emerges if dark energy isn't a cosmological constant but is instead "phantom energy" with an equation-of-state parameter w less than -1. Under this assumption, dark energy density actually INCREASES over time rather than staying constant. The cosmic expansion accelerates faster and faster until eventually all structures are torn apart.`,
            `This scenario was first analyzed in detail by physicist Robert R. Caldwell and collaborators in 2003. It's called the "Big Rip." Under the Big Rip, the universe's eventual fate is dramatically different from heat death. Galaxies get torn apart from each other as expansion overwhelms gravity between them. Solar systems get ripped apart as expansion exceeds gravitational binding. Eventually planets, then atoms, then the smallest particles themselves get ripped apart as the expansion approaches infinite speed at a finite future time.`,
            `If the Big Rip is correct, the universe doesn't slowly cool and approach equilibrium. It violently tears itself apart in a finite time. Depending on specific phantom energy models, the Big Rip might come anywhere from tens of billions to many trillions of years from now. The currently most consistent Big Rip scenarios predict timescales of 20-100+ billion years.`,
            `Is phantom energy real? The current evidence doesn't strongly favor or rule it out. Measurements of dark energy's equation-of-state parameter w are consistent with w = -1 (cosmological constant) but allow a range slightly less than -1 (phantom). Better measurements over the coming decade may distinguish these possibilities. Until then, the Big Rip remains a serious live possibility, not ruled out by data. Some cosmologists consider it the second most likely fate after heat death.`,
          ],
          image: `/voyager-assets/cosmos/l14-s3-bigrip.webp`,
          imageCaption: `Big Rip: if dark energy is "phantom" (w<-1), everything tears apart from galaxies down to atoms.`,
          vocab: [
            {
              word: `Big Rip`,
              definition: `Cosmological scenario proposed by Robert R. Caldwell et al. (2003). If dark energy is "phantom" (equation-of-state parameter w less than -1, increasing density over time), cosmic expansion accelerates without limit and tears apart galaxies, then planets, then atoms in finite time. Serious possibility not ruled out by current data.`,
              audioPrompt: `The Big Rip is a cosmological scenario proposed by physicist Robert Caldwell and collaborators in 2003, {name}. If dark energy is "phantom energy" with an equation-of-state parameter w less than -1, then dark energy density actually increases over time rather than staying constant. The cosmic expansion accelerates faster and faster until everything is torn apart in a finite future time. Galaxies get torn apart from each other. Then solar systems. Then planets. Then atoms. Then the smallest particles. The universe violently destroys itself rather than slowly cooling. Whether dark energy is phantom or just a cosmological constant is not currently settled by observation. Better measurements over the coming decade may distinguish these possibilities. The Big Rip is a serious live possibility, not ruled out by current data.`,
            },
            {
              word: `phantom energy`,
              definition: `Hypothetical form of dark energy with an equation-of-state parameter w less than -1, meaning its density increases over time rather than staying constant. If real, it would cause cosmic expansion to accelerate without limit, ultimately leading to the Big Rip scenario.`,
              audioPrompt: `Phantom energy is a hypothetical form of dark energy with an equation-of-state parameter w less than -1, {name}. Unlike a cosmological constant, phantom energy's density actually increases over time rather than staying constant. If dark energy turns out to be phantom, the cosmic expansion accelerates faster and faster without limit. The implications are dramatic. Galaxies get torn apart from each other as expansion overwhelms gravity between them. Then solar systems. Then planets. Then atoms. Then the smallest particles. This is the Big Rip scenario, first analyzed by Robert Caldwell and collaborators in 2003. Current measurements of dark energy's equation-of-state parameter w are consistent with phantom values — they do not strongly rule out phantom energy. Better measurements over the coming decade may distinguish phantom energy from a standard cosmological constant.`,
            },
            {
              word: `Robert R. Caldwell`,
              definition: `Physicist who first analyzed the Big Rip scenario in detail in a 2003 paper with collaborators. Showed that if dark energy is phantom (equation-of-state parameter w less than -1), cosmic expansion accelerates without limit and tears apart all structures in a finite future time.`,
              audioPrompt: `Robert Caldwell is the physicist who first analyzed the Big Rip scenario in detail, {name}. His 2003 paper with collaborators showed that if dark energy is phantom energy — with an equation-of-state parameter w less than -1 — then dark energy density increases over time and cosmic expansion accelerates without limit. The universe would eventually tear itself apart in a finite future time. Galaxies would separate, then solar systems, then planets, then atoms. The Big Rip is dramatically different from heat death: rather than slow cooling and dimming over vast timescales, the universe violently destroys itself at a finite future moment. Depending on the specific phantom energy model, the Big Rip might come anywhere from tens of billions to many trillions of years from now. Most consistent current scenarios predict 20 to 100 or more billion years.`,
            }
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Path 3: Cyclic Universe And Big Crunch`,
          paragraphs: [
            `The third major family of fates involves the universe not ending at all in any final sense. The universe either collapses back into a "Big Crunch" (gravity reversing expansion), or it cycles through repeated phases of expansion and contraction, or it transitions through some kind of cosmic rebirth.`,
            `The traditional Big Crunch scenario assumed dark energy is weakening over time, eventually allowing gravity to overcome expansion. The universe slows, stops, then begins contracting. Eventually all matter collapses back together into a hot dense state, possibly initiating a new Big Bang. This was a serious possibility until 1998 when dark energy was discovered to be accelerating, not slowing, expansion. The simple Big Crunch is now considered unlikely given current data, but more sophisticated cyclic models remain serious possibilities.`,
            `Paul Steinhardt and Neil Turok proposed a "cyclic universe" model in their 2007 book "Endless Universe." In their framework, the universe undergoes repeated cycles of expansion, contraction, and rebirth. Each cycle resets the universe to a new low-entropy state without requiring a singular Big Bang. The model uses ideas from string theory and brane cosmology to explain how the cycles work. Steinhardt has been a notable critic of standard inflationary cosmology and proposed cyclic models as alternatives.`,
            `Roger Penrose proposed an even more radical framework called "Conformal Cyclic Cosmology" (CCC) in his 2010 book "Cycles of Time." In CCC, the universe's heat death itself transitions into the Big Bang of the next universe. After all matter has evaporated to radiation in the far future, the universe loses any meaningful sense of "scale" (because there's nothing left to measure scale against). At that point, the empty radiation-only universe is mathematically equivalent to the very hot, very dense early universe of the next cosmic cycle. Heat death becomes Big Bang. Penrose has proposed that we might be able to detect signatures of previous cosmic cycles in the cosmic microwave background.`,
            `Cyclic and crunch scenarios are minority positions in current cosmology. The mainstream view favors heat death given current evidence. But the cyclic frameworks are mathematically serious and have working physicist defenders. They also have appeal: they avoid the sense of "final ending" that heat death implies. Whether the universe is finite or eternal may depend partly on physics we don't yet have.`,
          ],
          image: `/voyager-assets/cosmos/l14-s4-cyclic.webp`,
          imageCaption: `Cyclic models: universe rebirths in cycles. Penrose's CCC: heat death IS the next Big Bang. Steinhardt-Turok: brane-based cycling.`,
          vocab: [
            {
              word: `Conformal Cyclic Cosmology`,
              definition: `Framework proposed by Roger Penrose in 2010 in which the universe undergoes endless cycles. The heat death of one cosmic eon mathematically transitions to the Big Bang of the next. Penrose has proposed we might detect signatures of previous cycles in the cosmic microwave background.`,
              audioPrompt: `Conformal Cyclic Cosmology, or CCC, is a framework proposed by Roger Penrose in 2010, {name}. Penrose is a mathematical physicist who won the 2020 Nobel Prize for work on black holes. His CCC framework proposes that the universe undergoes endless cycles. In each cycle, the universe begins with a Big Bang, expands and cools, eventually reaches heat death, and then mathematically transitions into the Big Bang of the next cosmic cycle. The transition works because after all matter has evaporated to radiation in heat death, the universe has no scale (nothing left to measure scale against). The empty radiation-only universe is mathematically equivalent to the very hot, very dense early universe of the next cycle. Penrose has proposed we might detect signatures of previous cycles in the cosmic microwave background. The framework is a minority position but has serious academic backing.`,
            },
            {
              word: `Paul Steinhardt`,
              definition: `Major theoretical cosmologist who proposed a brane-based cyclic universe model with Neil Turok in their 2007 book 'Endless Universe.' The model proposes repeated cycles of expansion and contraction using ideas from string theory. Steinhardt has also been a notable critic of standard inflationary cosmology.`,
              audioPrompt: `Paul Steinhardt is a major theoretical cosmologist who proposed a brane-based cyclic universe model with Neil Turok, {name}. Their 2007 book 'Endless Universe' describes a framework in which the universe undergoes repeated cycles of expansion, contraction, and rebirth. Each cycle resets the universe to a new low-entropy state without requiring a singular Big Bang. The model uses ideas from string theory and brane cosmology to explain how the cycles work. Steinhardt has also been a notable critic of standard inflationary cosmology, proposing cyclic models as alternatives to inflation. The cyclic model is a serious minority position in cosmology, backed by a major theoretical physicist with a substantial publication record. Whether it is correct depends on physics that is not yet established.`,
            },
            {
              word: `Big Crunch`,
              definition: `Scenario in which gravity reverses the expansion of the universe, causing all matter to collapse back into a hot dense state — the reverse of the Big Bang. Considered unlikely given the 1998 discovery of accelerating expansion, but a precursor to more sophisticated cyclic cosmological models.`,
              audioPrompt: `The Big Crunch is a scenario in which gravity reverses the expansion of the universe, causing all matter to collapse back into a hot dense state, {name}. It is, in a sense, the reverse of the Big Bang. The traditional Big Crunch scenario assumed dark energy was weakening over time, eventually allowing gravity to overcome expansion. The universe would slow, stop, and then begin contracting until everything collapsed together. This was a serious possibility until 1998, when dark energy was discovered to be accelerating expansion rather than slowing it. The simple Big Crunch is now considered unlikely given current data. More sophisticated cyclic models like Steinhardt and Turok's brane-based framework and Roger Penrose's Conformal Cyclic Cosmology remain serious possibilities. The Big Crunch as a simple reversal is disfavored; cyclic variants are still active.`,
            }
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that current evidence favors heat death but doesn't rule out the alternatives. The simplest interpretation of our measurements points to dark energy being a cosmological constant and the universe expanding forever. If that's correct, heat death is what awaits. Most working cosmologists treat this as the default expectation.`,
            `However, "default expectation" doesn't mean settled. Dark energy's equation-of-state parameter w could be slightly less than -1 (Big Rip territory) without contradicting current data. Alternative cosmological frameworks like Penrose's CCC and Steinhardt-Turok cyclic models propose different physics that would produce different fates. The next decade of observations from the Vera Rubin Observatory, the Euclid space telescope, the Roman Space Telescope, and ongoing measurements will tighten constraints significantly.`,
            `The implications are striking and different for each fate. Heat death means the universe gradually dims to nothing over timescales beyond imagination. Big Rip means the universe violently destroys itself in a finite future time. Cyclic models mean the universe never truly ends; cosmic history is endless cycles. Different fates produce different relationships to questions about meaning, ending, and what's at stake in the cosmic story.`,
            `One framing: at 12, you're not making this decision as a working cosmologist. You're learning to engage with a genuinely open scientific question where the evidence partially constrains but doesn't fully determine the answer. Build a coherent case for the fate that seems most plausible to you given the evidence. Acknowledge what would change your mind. This is how mature scientific reasoning works on genuinely contested questions.`,
          ],
          image: `/voyager-assets/cosmos/l14-s5-before.webp`,
          imageCaption: `Three fates, three different cosmic futures. Current evidence favors heat death but doesn't rule out the others.`,
          vocab: [
            {
              word: `parameter w`,
              definition: `Number that characterizes dark energy's behavior. w = -1 means cosmological constant (constant density, leads to heat death). w less than -1 means phantom energy (increasing density, leads to Big Rip). Current measurements are consistent with w near -1 but don't rule out either possibility.`,
              audioPrompt: `The dark energy equation-of-state parameter, called w, is a number that characterizes dark energy's behavior, {name}. If w equals -1, dark energy is a cosmological constant with constant energy density of space. This leads to heat death. If w is less than -1, dark energy is "phantom energy" with increasing density over time. This leads to the Big Rip. If w is greater than -1 but less than 0, dark energy is some kind of dynamical field with decreasing density over time. Current measurements of w are consistent with w near -1, but the uncertainty allows for either cosmological constant or mild phantom behavior. Better measurements over the next decade may distinguish these possibilities. The value of w is one of the most important numbers in cosmology because it largely determines the universe's fate.`,
            },
            {
              word: `Vera Rubin Observatory`,
              definition: `Upcoming large telescope designed to conduct surveys of the sky at unprecedented depth and scale. Expected to tighten constraints on dark energy's equation-of-state parameter w significantly over the next decade, helping to narrow down whether heat death or other cosmic fates are more likely.`,
              audioPrompt: `The Vera Rubin Observatory is an upcoming large telescope designed to conduct wide-field surveys of the sky at unprecedented depth and scale, {name}. Along with the Euclid space telescope and the Roman Space Telescope, it is expected to tighten constraints on dark energy's equation-of-state parameter w significantly over the next decade. The value of w largely determines the universe's fate — whether it leads to heat death, Big Rip, or something else. Better measurements of w may distinguish between a cosmological constant and phantom energy, narrowing down which cosmic fate is most consistent with observation. The fate question may become better constrained even if not fully settled. The coming decade of observational cosmology is one of the most consequential for understanding what happens at the end of the universe.`,
            },
            {
              word: `low-entropy state`,
              definition: `A highly ordered, structured state with large gradients of energy available for work. The early universe after the Big Bang was in an extremely low-entropy state. Cyclic cosmological models like Steinhardt-Turok propose that each new cosmic cycle begins with such a state, avoiding the problem of a one-time singular beginning.`,
              audioPrompt: `A low-entropy state is a highly ordered, structured state with large gradients of energy available to do work, {name}. The early universe after the Big Bang was in an extremely low-entropy state — hot, dense, and with enormous energy gradients that allowed stars, galaxies, and ultimately life to form. In the cyclic universe model proposed by Paul Steinhardt and Neil Turok, each new cosmic cycle resets the universe to a new low-entropy state. This is one of the model's key features: it avoids the question of how a singular Big Bang began by proposing that the universe has always been cycling. Each cycle begins ordered and expands into the disordered conditions of heat death before the next cycle begins. Whether nature actually works this way depends on physics not yet established.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l14-argument-builder`,
          type: `argument-builder`,
          headline: `What Is The Fate Of The Universe?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real working cosmologists actively defend each of these.`,
          positions: [
            {
              id: `heat-death`,
              label: `Heat death / Big Freeze: continued expansion forever`,
              summary: `If dark energy is a cosmological constant (consistent with simplest model and current best measurements), the universe expands forever at increasing rate. Stars die, black holes evaporate (~10¹⁰⁰ years), matter spreads thin, temperature approaches absolute zero, universe approaches maximum entropy. Currently considered most likely fate by most working cosmologists. No dramatic destruction, just slow cooling and dimming over timescales beyond imagination.`,
            },
            {
              id: `big-rip`,
              label: `Big Rip: phantom dark energy tears everything apart`,
              summary: `If dark energy is "phantom" (equation-of-state parameter w less than -1), its density increases over time and expansion accelerates without limit. Eventually galaxies, then solar systems, then planets, then atoms get torn apart at a finite future time. Proposed by Caldwell et al. (2003). Current measurements of w are consistent with phantom values; not ruled out by data. Timescale: 20-100+ billion years depending on exact phantom parameters. Universe destroys itself violently rather than slowly cooling.`,
            },
            {
              id: `cyclic`,
              label: `Cyclic universe: cosmic rebirth or eternal recurrence`,
              summary: `Universe cycles through repeated expansion and contraction, OR heat death transitions to next Big Bang. Two serious frameworks: Steinhardt and Turok's brane-based cyclic model (2007), and Roger Penrose's Conformal Cyclic Cosmology (2010). Penrose argues we might detect signatures of previous cycles in the cosmic microwave background. Minority positions in current cosmology but mathematically serious with working physicist defenders. Implications: universe never truly ends, cosmic history is endless cycles.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Current measurements of dark energy's equation-of-state parameter w are consistent with w = -1 (cosmological constant), which directly implies heat death. This is the simplest model and the one most consistent with current data.`,
              source: `Multiple measurements of dark energy properties; Planck data; supernova surveys`,
            },
            {
              id: `e2`,
              text: `Standard cosmological model based on existing observations predicts the universe will continue expanding indefinitely, with stars dying within ~10¹⁴ years and black holes evaporating over ~10¹⁰⁰ years. The mainstream prediction is heat death.`,
              source: `Standard textbook cosmology; multiple peer-reviewed forecasts`,
            },
            {
              id: `e3`,
              text: `Caldwell et al. 2003 paper showed that phantom dark energy (w less than -1) produces a Big Rip in finite time. Current measurements of w don't rule out phantom values. The Big Rip is a serious live possibility, not just speculation.`,
              source: `Caldwell, Kamionkowski, Weinberg 2003 PRL paper`,
            },
            {
              id: `e4`,
              text: `Paul Steinhardt and Neil Turok's "Endless Universe" (2007) proposes brane-based cyclic cosmology in which the universe undergoes repeated cycles. Steinhardt is a major theoretical cosmologist who has been critical of standard inflationary cosmology.`,
              source: `Steinhardt & Turok 2007 book; multiple peer-reviewed papers`,
            },
            {
              id: `e5`,
              text: `Roger Penrose's "Cycles of Time" (2010) proposed Conformal Cyclic Cosmology, in which heat death mathematically transitions to the next Big Bang. Penrose is a Nobel laureate mathematical physicist. He has proposed observational signatures of previous cycles in the CMB.`,
              source: `Penrose 2010 book; subsequent peer-reviewed papers`,
            },
            {
              id: `e6`,
              text: `The simple Big Crunch scenario (gravity reversing expansion, universe collapsing back into hot dense state) was a serious possibility until the 1998 discovery of accelerating expansion. Now considered unlikely given current data, but more sophisticated cyclic models remain serious.`,
              source: `Standard cosmological history; 1998 Type Ia supernova discoveries`,
            },
            {
              id: `e7`,
              text: `Upcoming observations from Vera Rubin Observatory, Euclid space telescope, Roman Space Telescope, and ongoing dark energy surveys will tighten constraints on w significantly over the next decade. The fate question may become better constrained, even if not fully settled.`,
              source: `LSST, Euclid, Roman Space Telescope mission descriptions`,
            },
            {
              id: `e8`,
              text: `Whatever the fate, the timescales are vastly beyond anything humans could directly observe. The current age of the universe (~10¹⁰ years) is essentially zero compared to the timescales of heat death (~10¹⁰⁰ years) or full cyclic phases (potentially eternal). Our predictions are about the cosmic far future, not anything humans can witness.`,
              source: `Standard cosmological forecasts`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume the broad framework of contemporary cosmology is roughly correct and will continue to be roughly correct. But cosmology has been wrong before, sometimes radically. The pre-Hubble static universe seemed obvious. The pre-Big Bang steady state model was defensible. Pre-1998, no one suspected dark energy. Why think we now have the framework right enough to predict outcomes 10¹⁰⁰ years from now? Maybe the entire question is malformed because the right physics will look different in ways we can't anticipate. Why be confident in any position when our predictions are extending so far beyond what we can verify?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your position handle the possibility that the entire cosmological framework might be wrong in ways we don't anticipate? Are far-future predictions different in kind from present-day measurements?`,
          },
          reflectionPrompt: `Looking at the positions you didn't choose, which would be hardest to be wrong about? Which would change your relationship to existence most?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What primarily determines the universe's fate?`,
              options: [
                `Astrology`,
                `A small set of cosmological parameters (expansion rate, matter density, dark matter, dark energy, spatial curvature); current measurements determine the most likely fates; biggest uncertainty is the dark energy equation-of-state parameter w`,
                `Random chance`,
                `Religious destiny`,
              ],
              correctIndex: 1,
              explanation: `Cosmic future is more predictable than weather because the universe at large scales follows simpler rules. The parameters have been measured to good precision; the remaining uncertainty centers on dark energy.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is heat death (Big Freeze)?`,
              options: [
                `Universe burning up`,
                `Cosmological prediction that if dark energy is a cosmological constant, universe expands and cools forever; stars die, black holes evaporate over ~10¹⁰⁰ years, matter spreads thin, universe approaches maximum entropy; currently considered most likely fate by most cosmologists`,
                `Sun explosion`,
                `Earth overheating`,
              ],
              correctIndex: 1,
              explanation: `Heat death isn't dramatic destruction. It's slow cooling and dimming over timescales beyond imagination. The current age of the universe is a tiny fraction of heat death timescales.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the Big Rip?`,
              options: [
                `A type of supernova`,
                `Cosmological scenario proposed by Caldwell et al. (2003): if dark energy is "phantom" (w less than -1), expansion accelerates without limit and tears apart galaxies, then solar systems, then planets, then atoms in finite time; not ruled out by current data`,
                `Standard ending`,
                `Volcanic event`,
              ],
              correctIndex: 1,
              explanation: `The Big Rip would happen in 20-100+ billion years depending on exact phantom parameters. Current measurements of w are consistent with phantom values. A serious live possibility.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is Conformal Cyclic Cosmology (CCC)?`,
              options: [
                `Spiritual practice`,
                `Framework proposed by Roger Penrose in 2010: universe undergoes endless cycles; heat death of one cosmic eon mathematically transitions to Big Bang of the next; Penrose has proposed detectable signatures of previous cycles in CMB; minority but serious position`,
                `Comic book theory`,
                `Old idea`,
              ],
              correctIndex: 1,
              explanation: `Penrose is a Nobel laureate mathematical physicist. His CCC framework is a minority position but has serious academic backing. The proposed CMB signatures of previous cycles are an active research area.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the dark energy equation-of-state parameter w?`,
              options: [
                `Random letter`,
                `Number characterizing dark energy's behavior; w = -1 means cosmological constant (leads to heat death); w less than -1 means phantom energy (leads to Big Rip); current measurements consistent with w near -1 but don't rule out phantom; one of most important cosmological numbers`,
                `A type of letter`,
                `Galaxy width`,
              ],
              correctIndex: 1,
              explanation: `Better measurements of w over the next decade may distinguish the heat death and Big Rip scenarios. The value of w largely determines the universe's fate.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is the simple Big Crunch scenario now considered unlikely?`,
              options: [
                `Because it's old`,
                `The 1998 discovery that cosmic expansion is accelerating (not slowing) suggests gravity won't reverse the expansion; simple Big Crunch is now disfavored, but more sophisticated cyclic models remain serious`,
                `Because gravity is fake`,
                `Because no one likes it`,
              ],
              correctIndex: 1,
              explanation: `The 1998 dark energy discovery transformed cosmological forecasting. Before it, slowing expansion (and possible eventual reversal) was a serious option. Now, accelerating expansion rules out simple Big Crunch but allows more sophisticated cyclic models.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did Steinhardt and Turok propose in "Endless Universe" (2007)?`,
              options: [
                `New age of stars`,
                `Brane-based cyclic cosmology in which the universe undergoes repeated cycles of expansion, contraction, and rebirth; uses ideas from string theory; serious alternative to standard cosmology by major theoretical cosmologists`,
                `Big Bang denial`,
                `Religious cosmology`,
              ],
              correctIndex: 1,
              explanation: `Steinhardt has been a notable critic of standard inflationary cosmology and proposed cyclic models as alternatives. The model uses ideas from string theory and brane cosmology. A serious minority position.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are predictions about the universe's fate considered reasonably reliable despite being about events ~10¹⁰⁰ years away?`,
              options: [
                `Because scientists are confident`,
                `The universe at large scales follows simpler rules than the chaotic dynamics that produce weather; the fate depends on a small number of cosmological parameters; we've measured these to good precision; the remaining uncertainty is largely about dark energy`,
                `Random luck`,
                `Cosmic intuition`,
              ],
              correctIndex: 1,
              explanation: `Far-future predictions in cosmology are more reliable than near-term weather predictions because of simpler underlying physics. The biggest remaining uncertainty is dark energy's behavior over cosmic timescales.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All three fates (heat death, Big Rip, cyclic) are still consistent with current evidence.`,
              correctAnswer: true,
              explanation: `True. Current evidence favors heat death (assuming dark energy is a cosmological constant) but doesn't rule out the alternatives. Dark energy could be phantom (Big Rip) or dynamical in ways that allow cyclic frameworks. Better measurements over the coming decade may narrow the possibilities.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "We know exactly how the universe will end—heat death is the established answer." Based on this lesson, what should you notice?`,
              options: [
                `"Yes, definitely settled"`,
                `"Heat death is the current mainstream prediction based on the simplest interpretation of our measurements (dark energy as cosmological constant). But three serious fates remain consistent with current evidence: heat death, Big Rip (if dark energy is phantom), and cyclic frameworks like Penrose's CCC or Steinhardt-Turok. Real working cosmologists defend each. The fate question may become better constrained over the next decade as we measure dark energy properties more precisely. 'Established answer' overstates what we currently know."`,
                `"The universe is eternal"`,
                `"All science is wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic futures literacy. Heat death is the default, but the question isn't settled. Multiple serious frameworks remain consistent with current evidence. The honest framing acknowledges uncertainty while respecting evidence.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a picture of how the universe ends? Has it shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which fate did you find most emotionally resonant? Most disturbing? Are those the same or different?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who knows three serious cosmic fates, what does that change about how you hold your finite life within an enormous timescale you can't witness?` },
            { id: `reflect-application`, category: `Application`, prompt: `Does your sense of the universe's fate affect how you think about meaning, legacy, or what to do with the time you have? Should it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could there be cosmic fates not covered in this lesson? What might they look like? What kinds of physics would they require?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they thought about what happens at the end of the universe? Most adults find this question fascinating once they engage with it.` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Cosmic-future literacy connects you to the deepest temporal horizon humans can think about. Two paths.`,
          familyActivity: {
            title: `The Cosmic Future Family Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned about cosmic fates. Ask each adult: have they ever thought about what happens at the end of the universe? What do they imagine? Walk through the three possibilities: slow cooling forever, violent tearing apart, eternal cycles. The conversation often goes places no family dinner usually goes: questions about meaning, legacy, mortality on cosmic timescales. Most adults find these questions fascinating once they're given permission to engage with them. There's no goal of conclusion; the point is everyone now has language for cosmic futures.`,
          },
          projectOption: {
            title: `Write Your Cosmic Future Document, 4 weeks (optional)`,
            duration: `4 weeks, ~30-45 minutes per session`,
            description: `Spend 4 weeks reflecting on cosmic futures and writing your own analysis. Week 1: research the three fates more deeply (read Steven Weinberg or Sean Carroll on heat death; read Caldwell on Big Rip; read Penrose on CCC). Week 2: identify the strongest argument for each fate. Week 3: identify the strongest argument against each fate. Week 4: write 2,000 words synthesizing your current best understanding of which fate is most likely and how confident you are. Include: what would change your mind, what observations are most important for resolving the question, how the fate question relates to questions of meaning and mortality. Real applied cosmology at a depth few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Sustained cosmic-futures thinking at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone who has thought carefully about cosmic futures, how does that change your relationship to time, meaning, and what to do with the years you have?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three serious cosmic fates and can articulate the case for each.`,
            `A person who can hold cosmic timescales without collapsing them into despair or denial.`,
            `Someone willing to engage with the deepest temporal questions instead of avoiding them.`,
          ],
          saveKey: `identity_responses_cs_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteenth Cosmos lesson done. You can now articulate three serious cosmic fates (heat death, Big Rip, cyclic), understand how cosmological parameters constrain the universe's future, recognize the dark energy equation-of-state parameter w as one of the most important numbers in cosmology, know the major frameworks (Caldwell, Penrose's CCC, Steinhardt-Turok), and engage with cosmic futures without false confidence. Most adults have never thought about cosmic fates beyond a vague sense of "heat death eventually." Next time we go into one of the deepest mysteries in fundamental physics: information. What happens to information that falls into a black hole? Does it get destroyed? The information paradox and its proposed resolutions. Matching game format. See you among the stars. — Nova`,
          badge: `cosmic-futurist`,
          badgeName: `Cosmic Futurist`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious cosmic fates (heat death, Big Rip, cyclic)`,
            `Understands how cosmological parameters (especially dark energy's w) constrain the future`,
            `Knows major frameworks: Caldwell et al. for Big Rip, Steinhardt-Turok for cyclic, Penrose CCC`,
            `Recognizes the relationship between cosmic fates and timescales beyond human witness`,
            `Can engage with cosmic-future questions without false confidence or despair`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Information & Physics`,
            hook: `What happens to information that falls into a black hole? The black hole information paradox and its proposed resolutions. Matching game on paradox → resolution.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L14 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
