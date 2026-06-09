// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L09 — Are We Alone? The Fermi Paradox
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Astrobiology, SETI
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort scenarios into 3 explanation categories)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l09-v1";

const COSMOS_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-09`,
      title: `Are We Alone? The Fermi Paradox`,
      duration: 35,
      xpReward: 75,
      badge: `cosmic-investigator`,
      badgeName: `Cosmic Investigator`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, in 1950, the physicist Enrico Fermi was having lunch at Los Alamos with three colleagues. They were talking about the possibility of alien civilizations. Fermi suddenly asked: "Where is everybody?" His question has haunted scientists ever since. The Milky Way contains hundreds of billions of stars. Many have planets. The galaxy is 13 billion years old. If even a tiny fraction of stars produce intelligent civilizations, the galaxy should be teeming with them by now. Some should have noticed Earth long ago. Some should be sending obvious signals. Some should have colonized the galaxy in technological time. They haven't. Or we can't see them. Or something else is going on. Today we explore the most serious proposed answers, and you sort them by what each one tells us.`,
          headline: `Are We Alone?`,
          subtitle: `Fermi's question still has no answer. The proposed explanations are themselves revealing.`,
          visual: `/voyager-assets/cosmos/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Fermi's Question And Why It's Hard`,
          paragraphs: [
            `Enrico Fermi's 1950 lunch question is now called the Fermi paradox. The setup is simple. The Milky Way contains roughly 100 to 400 billion stars. Decades of observation have shown that planets are common; most stars have at least some. The galaxy is about 13 billion years old. If life evolves on even a small fraction of habitable planets, and if intelligent life evolves on a small fraction of those, the galaxy should contain many civilizations by now. If those civilizations expand at even modest speeds, the galaxy could be filled in a few hundred million years, which is short on cosmic timescales. So where is everybody?`,
            `The problem isn't just "we haven't seen aliens." The problem is the gap between the prediction (galaxy probably crowded with civilizations) and the observation (no clear evidence of any, despite decades of searching). Either the prediction is wrong (intelligent life is much rarer than naive estimates suggest), or the observation is misleading (they're here in some sense we don't recognize), or both, or something else entirely.`,
            `In 1961, the radio astronomer Frank Drake proposed a framework for thinking about this. The Drake equation breaks down the number of communicating civilizations in the galaxy into a product of several factors: rate of star formation, fraction of stars with planets, fraction of habitable planets, fraction where life emerges, fraction where intelligence emerges, fraction that develop communication technology, and the typical lifetime of such civilizations. The Drake equation doesn't give us answers. It organizes our ignorance. Different reasonable values for the factors produce wildly different estimates, from "we're alone in the galaxy" to "millions of civilizations communicating right now."`,
          ],
          image: `/voyager-assets/cosmos/l09-s1-fermi.webp`,
          imageCaption: `Fermi 1950: "Where is everybody?" Drake 1961: framework for organizing our ignorance.`,
          vocab: [
            {
              word: `Drake equation`,
              definition: `Framework proposed by radio astronomer Frank Drake in 1961 for estimating the number of communicating civilizations in the Milky Way. Factors include star formation rate, fraction with planets, habitability, life emergence, intelligence emergence, technology development, and civilization lifetime. Organizes ignorance rather than producing answers.`,
              audioPrompt: `The Drake equation is a framework proposed by Frank Drake in 1961, {name}. Drake was a radio astronomer trying to organize thinking about the search for extraterrestrial intelligence. The equation breaks down the number of communicating civilizations in the Milky Way into a product of several factors: rate of star formation, fraction of stars with planets, fraction of habitable planets, fraction where life emerges, fraction where intelligence emerges, fraction that develop communication, and typical civilization lifetime. The Drake equation doesn't actually give us answers. It organizes our ignorance. Different reasonable values for the factors produce wildly different estimates, from "we're alone in the galaxy" to "millions of civilizations communicating right now." The equation's most useful purpose is showing which factors matter and where we need more data.`,
            },
            {
              word: `Fermi paradox`,
              definition: `The contradiction between the prediction that intelligent civilizations should be common in the Milky Way and the observation that we have no clear evidence of any. Named after physicist Enrico Fermi's 1950 lunch question: 'Where is everybody?' The galaxy is old enough and large enough that civilizations should be detectable if they exist at all frequently.`,
              audioPrompt: `The Fermi paradox is the contradiction between prediction and observation that has haunted scientists since 1950, {name}. Enrico Fermi, the physicist, was having lunch at Los Alamos when he suddenly asked: where is everybody? The Milky Way contains roughly 100 to 400 billion stars. Planets are common. The galaxy is about 13 billion years old. If intelligent civilizations arise even rarely and expand at modest speeds, the galaxy should be filled with them by now. Some should have noticed Earth. Some should be sending signals. None of this seems to be happening, despite decades of searching. The problem is not just that we have not seen aliens. The problem is the gap between what we predict and what we observe. Either the predictions are wrong or the observation is misleading, or something else entirely is going on.`,
            },
            {
              word: `Enrico Fermi`,
              definition: `Italian-American physicist who in 1950 asked 'Where is everybody?' during a lunch discussion about alien civilizations at Los Alamos. His question became the founding formulation of what is now called the Fermi paradox, one of the most enduring puzzles in science about the apparent silence of the cosmos.`,
              audioPrompt: `Enrico Fermi is the physicist whose lunch-table question in 1950 launched one of the most enduring puzzles in science, {name}. Fermi was at Los Alamos with three colleagues, talking about the possibility of alien civilizations. He suddenly asked: where is everybody? The simplicity of the question belied its depth. The Milky Way is old and vast. Intelligent civilizations should arise somewhere, given enough time and stars. If they expand at even modest speeds, the galaxy could be colonized in a few hundred million years, which is short on cosmic timescales. So why do we see no clear sign of any? Fermi's question has no agreed-upon answer after more than 70 years of scientific engagement. The proposed answers, and what each implies about our situation, are themselves deeply revealing.`,
            }
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Family 1: Life Or Intelligence Is Rare`,
          paragraphs: [
            `One family of answers to the Fermi paradox argues that the predicted number of civilizations is wrong because life, intelligent life, or technological civilization is much rarer than naive estimates suggest. The "Rare Earth" hypothesis, formalized by paleontologist Peter Ward and astronomer Donald Brownlee in their 2000 book, argues that microbial life may be common but complex multicellular life requires a long series of unusually fortunate conditions.`,
            `Their list includes: being in a galactic habitable zone (away from gamma-ray bursts and supernova radiation), orbiting the right kind of star (stable, long-lived, but not so dim that habitable planets are tidally locked), having a large moon to stabilize axial tilt, having plate tectonics to recycle nutrients, having a Jupiter-sized planet to deflect comets, surviving a long series of mass extinctions without complete sterilization. Each requirement might be reasonable in isolation. Their conjunction may be extremely rare.`,
            `Even more speculatively, the "hard step" model proposed by Brandon Carter argues that the evolution of intelligence involves several specific transitions that each have low probability per unit time. The origin of life, the origin of eukaryotic cells, the origin of multicellularity, the origin of language, the origin of technology: each may be such a hard step. The total probability of a planet completing all the hard steps in its habitable lifetime might be very small.`,
            `If the "life is rare" or "intelligence is rare" position is correct, the Fermi paradox dissolves. The galaxy isn't filled with civilizations because the prerequisites for civilization just don't occur often. Earth's existence is then unusual and lucky. We may be approximately alone in the galaxy or even in the observable universe.`,
          ],
          image: `/voyager-assets/cosmos/l09-s2-rare.webp`,
          imageCaption: `Family 1: complex life or technological intelligence is extremely rare. Earth got lucky.`,
          vocab: [
            {
              word: `Rare Earth hypothesis`,
              definition: `Argument by Ward and Brownlee (2000) that complex multicellular life on Earth required a long series of unusually fortunate conditions (right galactic location, right star type, large moon, plate tectonics, Jupiter as comet shield, etc.). Microbial life may still be common; complex life may be exceptionally rare.`,
              audioPrompt: `The Rare Earth hypothesis was proposed by paleontologist Peter Ward and astronomer Donald Brownlee in 2000, {name}. The argument: microbial life may be common throughout the universe, but complex multicellular life like animals required a long series of unusually fortunate conditions on Earth. Galactic habitable zone away from radiation hazards. The right kind of star, stable and long-lived. A large moon to stabilize axial tilt. Plate tectonics to recycle nutrients. A Jupiter-sized planet to deflect comets. Surviving multiple mass extinctions without complete sterilization. Each requirement might be reasonable in isolation. Their conjunction may be extremely rare. If Rare Earth is correct, microbes may be everywhere but technological civilizations may be almost nowhere.`,
            },
            {
              word: `hard step model`,
              definition: `Hypothesis proposed by Brandon Carter that the evolution of intelligence involves several specific transitions each with low probability per unit time. The total probability of completing all hard steps within a planet's habitable lifetime may be very small, explaining why intelligent civilizations are rare.`,
              audioPrompt: `The hard step model is a hypothesis proposed by Brandon Carter, {name}. Carter argued that the evolution of intelligence from simple life involves several specific transitions, each of which has a very low probability of occurring within any given time period. The origin of life itself, the origin of eukaryotic cells with a nucleus, the origin of multicellularity, the origin of language, the origin of technology: each may be such a hard step. The total probability of a planet completing all the hard steps within its habitable lifetime, before its star changes or conditions deteriorate, may be very small. If the hard step model is correct, Earth's path from chemistry to civilization was extraordinarily unlikely. The galaxy might contain life at various early stages but almost no technological civilizations because so few make it through all the hard steps in time.`,
            },
            {
              word: `galactic habitable zone`,
              definition: `Region of a galaxy where conditions are favorable for complex life. Too close to the galactic center, and radiation from supernovae and gamma-ray bursts is too intense. Too far out, and there are too few heavy elements for planetary chemistry. Earth is located in a relatively favorable region of the Milky Way.`,
              audioPrompt: `The galactic habitable zone is the region of a galaxy where conditions are favorable for complex life, {name}. Too close to the galactic center, and the environment is too violent. Dense star populations produce frequent supernovae and gamma-ray bursts that would sterilize planets regularly. Too far from the center, and stars contain too few of the heavy elements needed for planetary chemistry and biology. Earth sits in a relatively favorable region of the Milky Way. The Rare Earth hypothesis, proposed by Peter Ward and Donald Brownlee in 2000, includes location in a galactic habitable zone as one of the long list of unusually fortunate conditions that contributed to complex life on Earth. If most regions of most galaxies are either too violent or too element-poor, the number of locations where complex life can arise is substantially reduced.`,
            }
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Family 2: Civilizations Don't Last Long Enough`,
          paragraphs: [
            `A second family of answers argues that civilizations do arise frequently, but they don't last long enough to overlap in time. The most famous version is Robin Hanson's "Great Filter" concept (1998). Hanson argues that somewhere along the path from non-life to galactic civilization, there must be a step that is extraordinarily unlikely. The "Great Filter" is whatever that step is. If the filter is in our past (the origin of life, or the origin of complex cells), we got past it and we may be relatively alone. If the filter is in our future, we have not yet hit it, and the prospects are concerning.`,
            `Specific reasons civilizations might be short-lived. Nuclear weapons (around since 1945; we've come close to using them in major ways multiple times). Engineered pandemics (technical capability growing rapidly). Climate destabilization. Misaligned artificial intelligence. Resource exhaustion before achieving sustainability. Civil conflict escalation. The general pattern: technological civilizations develop capabilities that can destroy them faster than they develop the wisdom to avoid using those capabilities.`,
            `The "Great Silence" version of the paradox argues that the absence of detected civilizations is itself bad news for us. If civilizations frequently arise but rarely persist, then we should expect not to detect any (because they're all extinct on the timescales of stellar evolution). The signal we don't hear may be telling us about our own future. This is sometimes called the "Doomsday argument" applied to civilization-scale survival.`,
            `If the "civilizations don't last" position is correct, the Fermi paradox is explained but the implication is dark. We are not the first civilization. We are one of many that have arisen, and we will probably also end the way most others have ended: by failing to make it past the Great Filter that lies ahead.`,
          ],
          image: `/voyager-assets/cosmos/l09-s3-filter.webp`,
          imageCaption: `Family 2: civilizations arise but don't last. The Great Filter may be ahead of us.`,
          vocab: [
            {
              word: `Great Filter`,
              definition: `Concept proposed by economist Robin Hanson in 1998. Somewhere along the path from non-life to galactic civilization, there must be a step that is extraordinarily unlikely. If the Great Filter is behind us, we may be alone. If it's ahead of us, civilizations don't tend to make it past it.`,
              audioPrompt: `The Great Filter is a concept proposed by economist Robin Hanson in 1998, {name}. Hanson argued that somewhere along the path from non-life to galactic civilization, there must be a step that is extraordinarily unlikely. Otherwise the galaxy would be filled with civilizations and we would see them. The "Great Filter" is whatever that step is. If the filter is behind us in our past, like the origin of life or the origin of complex cells, then we got past it and may be relatively alone. If the filter is ahead of us in our future, then technological civilizations rarely make it past it. Finding microbial life on Mars would actually be bad news under this framework, because it would suggest life is easy and the hard step is later. The concept has shaped serious thinking about civilization survival.`,
            },
            {
              word: `Robin Hanson`,
              definition: `Economist who proposed the Great Filter concept in 1998. Hanson argued that somewhere along the path from non-life to galactic civilization there must be a step that is extraordinarily unlikely. Whether that step is behind us or ahead of us has profound implications for humanity's prospects.`,
              audioPrompt: `Robin Hanson is the economist who proposed the Great Filter concept in 1998, {name}. Hanson's argument was direct. If intelligent civilizations were common, we would see them. We do not. Therefore somewhere along the path from non-life to galactic civilization, there must be a step that is extraordinarily unlikely. He called this the Great Filter. The question of where the filter sits is what makes his framework so consequential. If the filter is behind us, in events like the origin of life or the origin of complex cells, then we got past it and may be relatively alone. If the filter is ahead of us, in the transitions that come next as we develop more powerful technologies, then civilizations rarely make it through and the implication is grim. Hanson's concept has shaped serious thinking about civilization survival and our actual situation.`,
            },
            {
              word: `Great Silence`,
              definition: `The observation that despite decades of searching, we detect no clear signals from other civilizations. The silence itself is argued to be informative: if civilizations frequently arise but rarely persist, the absence of detected signals is expected and may be telling us something about our own future prospects.`,
              audioPrompt: `The Great Silence refers to the observation that despite decades of searching, we detect no clear signals from other civilizations, {name}. It is not merely that we have not heard from aliens. It is that the silence persists even as our instruments and search scope have improved significantly. The silence itself is argued to be informative under the Great Filter framework. If civilizations frequently arise but rarely last long enough to transmit detectable signals across stellar distances, then we should expect not to detect any. The signal we do not hear may be telling us about a pattern: civilizations arise, develop technology, and then end before making themselves visible on cosmic timescales. This interpretation is sometimes called the Doomsday argument applied at the scale of civilizations. The implication, if correct, is that we should take very seriously whatever transitions lie ahead of us.`,
            }
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Family 3: They Exist But We Can't Detect Them`,
          paragraphs: [
            `A third family of answers argues that civilizations do exist, possibly many, but for various reasons we cannot detect them. These are sometimes harder to evaluate because they make the paradox compatible with almost any observation.`,
            `The Dark Forest hypothesis, popularized by the Chinese science fiction writer Liu Cixin, argues that any technologically advanced civilization with any uncertainty about its neighbors' intentions would rationally hide. Detecting a civilization gives them the option to destroy you preemptively. Game-theoretic analysis suggests "everyone hides" might be a stable equilibrium. If true, civilizations exist but actively avoid being seen.`,
            `The Zoo hypothesis argues that we are being observed by older civilizations who choose not to make contact. They might be observing as scientists, refraining from interference to let us develop naturally. Or they might consider us too primitive to engage with. Or they might have philosophical reasons we can't anticipate. These hypotheses cannot be ruled out, but they also can't be tested.`,
            `Several less exotic versions: civilizations transcend to forms we can't recognize (uploaded into computers, expanded into other dimensions, otherwise made themselves invisible). Civilizations communicate using methods we don't yet understand (no use of radio at the wavelengths we monitor). Time intervals between civilizations are so vast that they rarely overlap (a civilization that existed 100 million years ago and lasted 100,000 years would be essentially impossible to detect now). Distance combined with light-speed limits makes detection extremely difficult even when civilizations exist contemporaneously.`,
            `The "we haven't looked hard enough" version is also worth taking seriously. SETI (Search for Extraterrestrial Intelligence) has been running since the early 1960s. The total amount of sky and frequency space searched at adequate sensitivity is still small relative to the full space. The Breakthrough Listen project, funded by Yuri Milner since 2015, is the most ambitious search to date but is still scanning a tiny fraction of the relevant space. A negative result so far is not the same as a definitive answer.`,
          ],
          image: `/voyager-assets/cosmos/l09-s4-hidden.webp`,
          imageCaption: `Family 3: they're there but hidden, transformed, distant in time, or beyond our detection methods.`,
          vocab: [
            {
              word: `SETI`,
              definition: `Scientific effort to detect signs of intelligent civilizations elsewhere in the galaxy through radio astronomy and other techniques. Began in the 1960s. Major current project: Breakthrough Listen, funded by Yuri Milner since 2015. No definitive detection so far.`,
              audioPrompt: `SETI is the Search for Extraterrestrial Intelligence, {name}. A scientific effort to detect signs of intelligent civilizations elsewhere in the galaxy through radio astronomy and other techniques. SETI began in the 1960s with Frank Drake's Project Ozma. It has been conducted continuously since, with steadily improving instruments. The most ambitious current project is Breakthrough Listen, funded by Russian-Israeli investor Yuri Milner since 2015 with $100 million over ten years. Breakthrough Listen uses some of the world's largest radio telescopes to scan large amounts of sky. No definitive detection has been made. The total amount of sky and frequency space searched at adequate sensitivity is still small relative to the full possible space. A negative result so far is not the same as a definitive answer.`,
            },
            {
              word: `Zoo hypothesis`,
              definition: `Proposed explanation for the Fermi paradox suggesting that older civilizations observe us but choose not to make contact, either to let us develop naturally, because they consider us too primitive, or for reasons we cannot anticipate. Cannot be ruled out but also cannot be tested directly.`,
              audioPrompt: `The Zoo hypothesis is a proposed explanation for the Fermi paradox, {name}. It argues that we are being observed by older civilizations who choose not to make contact. They might be observing as scientists, refraining from interference to let us develop naturally. They might consider us too primitive to engage with. Or they might have philosophical reasons we cannot anticipate. The hypothesis cannot be ruled out. But it also cannot be tested. Any observation we make is compatible with the Zoo hypothesis: if they choose not to reveal themselves, we would see exactly what we see now. This makes the Zoo hypothesis scientifically less useful even if it might be true. It is an example of a class of explanations in the third family of Fermi paradox answers: civilizations exist but we cannot detect them, for various reasons.`,
            },
            {
              word: `Breakthrough Listen`,
              definition: `The most ambitious SETI project to date, funded by Yuri Milner since 2015 with $100 million over ten years. Uses some of the world's largest radio telescopes to scan large amounts of sky. No definitive detection has been made. The total space searched at adequate sensitivity is still small relative to the full possible space.`,
              audioPrompt: `Breakthrough Listen is the most ambitious search for extraterrestrial intelligence ever conducted, {name}. It was funded by Russian-Israeli investor Yuri Milner starting in 2015 with $100 million over ten years. Breakthrough Listen uses some of the world's largest radio telescopes to scan large amounts of sky and a wide range of radio frequencies. It is the successor to earlier SETI efforts that began with Frank Drake's Project Ozma in the 1960s. No definitive detection has been made. The total amount of sky and frequency space searched at adequate sensitivity is still small relative to the full possible space. A negative result so far is not the same as a definitive answer that no civilizations exist. The search continues with steadily improving instruments and methods.`,
            }
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Investigate`,
          paragraphs: [
            `In the investigation that follows, you'll sort proposed explanations of the Fermi paradox into the three families: "life or intelligence is rare," "civilizations don't last long enough," and "they exist but we can't detect them." Some of the items have elements of more than one family; you'll have to decide which family they fit best.`,
            `As you sort, notice what each family implies about our situation. The "life is rare" answers tend to be optimistic about humanity's future: we exist, we're past the hard part, we have time to figure things out. The "civilizations don't last" answers tend to be pessimistic: many came before us, most failed, we may be next. The "they exist but hidden" answers don't say much directly about our prospects but raise unsettling questions about why hiding might be optimal.`,
            `One framing as you work. The Fermi paradox is one of the few cosmic questions that bears directly on what we should do as a civilization. If the Great Filter is ahead of us, then humanity's continued survival is more urgent than if it's behind us. If civilizations rarely make it through nuclear weapons or climate destabilization, those problems become higher priority. Cosmic thinking and practical thinking converge here.`,
            `A note on the more speculative end. UFO/UAP claims and "aliens have already visited" content is extensive in popular media. None of it has been confirmed by serious scientific investigation despite decades of investigation. The 2022 NASA UAP study reviewed available evidence and concluded that the available data is insufficient to support extraordinary claims. The Fermi paradox remains genuinely unanswered. Real engagement with it is more interesting than the popular "they're already here" content.`,
          ],
          image: `/voyager-assets/cosmos/l09-s5-before.webp`,
          imageCaption: `Three families of answers. Each implies different futures. Real cosmic thinking applied.`,
          vocab: [
            {
              word: `Dark Forest hypothesis`,
              definition: `Idea (popularized by Liu Cixin's novels) that civilizations rationally hide because revealing themselves invites destruction by paranoid neighbors. Game-theoretic argument that "everyone hides" might be a stable equilibrium in a universe with uncertain intentions and high stakes.`,
              audioPrompt: `The Dark Forest hypothesis was popularized by Chinese science fiction writer Liu Cixin in his novel of the same name, {name}. The argument: in a universe with potentially many civilizations, any uncertainty about your neighbors' intentions combined with the catastrophic downside of being attacked makes hiding rational. Detecting another civilization gives them the option to destroy you preemptively. Game-theoretic analysis suggests "everyone hides" might be a stable equilibrium in such a universe. If true, civilizations may exist but actively avoid being seen. The hypothesis cannot be tested directly but it can't be ruled out either. It's an example of how purely game-theoretic reasoning produces explanations that are coherent without being verifiable.`,
            },
            {
              word: `UAP`,
              definition: `Unidentified Aerial Phenomena — the current official term for what was previously called UFOs. The 2022 NASA UAP study reviewed available evidence and concluded that the data is insufficient to support extraordinary claims. No UAP claim has been confirmed by serious scientific investigation despite decades of investigation.`,
              audioPrompt: `UAP stands for Unidentified Aerial Phenomena, {name}. It is the current official term for what was previously called UFOs, or Unidentified Flying Objects. UAP claims and content suggesting aliens have already visited Earth are extensive in popular media. In 2022, NASA conducted a formal study reviewing available evidence on UAP reports. The study concluded that the available data is insufficient to support extraordinary claims about alien visitation. Despite decades of investigation, no UAP claim has been confirmed by serious scientific process. The Fermi paradox remains genuinely unanswered. Real engagement with why we do not detect civilizations is far more scientifically interesting than the popular content suggesting they are already here and being covered up.`,
            },
            {
              word: `technological civilization`,
              definition: `A civilization that has developed the capacity to transmit signals detectable across interstellar distances or to expand beyond its home planet. Whether technological civilizations survive long enough to be detectable is one of the central uncertainties in the Drake equation and the Fermi paradox.`,
              audioPrompt: `A technological civilization is one that has developed the capacity to transmit signals detectable across interstellar distances, or to expand beyond its home planet, {name}. The Drake equation breaks down the number of communicating civilizations in the galaxy into several factors, and the last of these, the typical lifetime of technological civilizations, is arguably the most important and the most uncertain. Civilizations that develop technology also develop nuclear weapons, engineered pandemic capability, and increasingly powerful AI. The general pattern suggested by the short-lived civilizations family of Fermi paradox answers is that technological capability grows faster than the wisdom to manage it. If most technological civilizations are short-lived, the galaxy could contain many that arose and ended without leaving detectable traces. This is one of the reasons the Fermi paradox connects directly to questions about humanity's own choices.`,
            }
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l09-investigation`,
          type: `investigation`,
          headline: `Sort the Fermi paradox explanations by family`,
          intro: `{name}, you've just learned the three families of answers to Fermi's question. Now sort each specific explanation into the family it best fits. Tap an explanation, then tap the family it belongs to. Some are easier than others. Get them all in the right buckets to complete your investigation.`,
          buckets: [
            {
              id: `rare`,
              label: `Life or intelligence is rare`,
            },
            {
              id: `short`,
              label: `Civilizations don't survive long enough`,
            },
            {
              id: `hidden`,
              label: `They exist but we can't detect them`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `Earth has an unusually large moon, a Jupiter-sized comet shield, plate tectonics, and a stable orbit. Each is reasonably likely; the combination is rare.`,
              correctBucket: `rare`,
            },
            {
              id: `item-2`,
              label: `Civilizations develop nuclear weapons, engineered pandemics, and misaligned AI faster than they develop the wisdom to manage them. Most self-destruct within centuries of becoming technological.`,
              correctBucket: `short`,
            },
            {
              id: `item-3`,
              label: `The Dark Forest: any civilization with uncertainty about its neighbors rationally hides. Game theory makes silence the stable equilibrium.`,
              correctBucket: `hidden`,
            },
            {
              id: `item-4`,
              label: `Civilizations transcend to forms we can't recognize (uploaded into computers, moved to other dimensions, otherwise transformed beyond detection).`,
              correctBucket: `hidden`,
            },
            {
              id: `item-5`,
              label: `The origin of complex multicellular cells was a rare evolutionary event. Microbes are everywhere; multicellular animals are exceptionally rare.`,
              correctBucket: `rare`,
            },
            {
              id: `item-6`,
              label: `The Great Filter is ahead of us. Civilizations rarely make it past the technological transitions that come next; we should expect to fail too.`,
              correctBucket: `short`,
            },
            {
              id: `item-7`,
              label: `Time intervals between civilizations are so vast that they rarely overlap. A civilization that lasted 100,000 years and ended 100 million years ago would be essentially impossible to detect now.`,
              correctBucket: `hidden`,
            },
            {
              id: `item-8`,
              label: `Tool-using intelligence requires a specific sequence of evolutionary pressures (manipulation organs, social complexity, language, abstract reasoning). The path from biology to intelligence is extraordinarily narrow.`,
              correctBucket: `rare`,
            },
            {
              id: `item-9`,
              label: `Civilizations might use forms of communication we don't yet understand. SETI has been listening with radio for ~70 years; we may be missing more advanced signals.`,
              correctBucket: `hidden`,
            },
          ],
          reflectionPrompt: `Which family of answers do you find most compelling? Which is most unsettling? Which would you most want to be true?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the Fermi paradox?`,
              options: [
                `A physics equation`,
                `Enrico Fermi's 1950 lunch question: if the galaxy is so big and old, and intelligent civilizations should be common, why don't we see any? The gap between predicted civilizations and observed absence`,
                `A type of rocket`,
                `A specific civilization`,
              ],
              correctIndex: 1,
              explanation: `The paradox has haunted scientists for over 70 years. The gap between predictions of cosmic abundance and the apparent silence is real. Many serious proposed answers exist; none is settled.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Drake equation?`,
              options: [
                `A famous mathematician's formula`,
                `Frank Drake's 1961 framework for estimating the number of communicating civilizations in the Milky Way, breaking it into factors (star formation, planets, habitability, life emergence, intelligence, technology, civilization lifetime); organizes ignorance rather than producing answers`,
                `A test for cleverness`,
                `An old theory`,
              ],
              correctIndex: 1,
              explanation: `The Drake equation's most useful purpose is showing which factors matter and where we need more data. Different reasonable values produce answers ranging from "we're alone" to "millions of civilizations."`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the Rare Earth hypothesis?`,
              options: [
                `Earth is unimportant`,
                `Ward and Brownlee's 2000 argument that microbial life may be common but complex multicellular life requires a long series of unusually fortunate conditions (right galaxy zone, right star, large moon, plate tectonics, Jupiter as comet shield)`,
                `Earth doesn't exist`,
                `Earth is small`,
              ],
              correctIndex: 1,
              explanation: `Each requirement might be reasonable in isolation. The conjunction may be extremely rare. If correct, microbes everywhere, complex life almost nowhere.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the Great Filter?`,
              options: [
                `A water purifier`,
                `Robin Hanson's 1998 concept: somewhere on the path from non-life to galactic civilization, there must be a step that is extraordinarily unlikely; if the filter is behind us, we may be alone; if ahead, civilizations rarely make it past it`,
                `A type of sieve`,
                `An air filter`,
              ],
              correctIndex: 1,
              explanation: `Where the filter sits matters enormously. Finding microbial life on Mars would actually be concerning under this framework, because it would suggest the filter is later, possibly ahead of us.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the Dark Forest hypothesis?`,
              options: [
                `Trees being scary`,
                `Idea (popularized by Liu Cixin's novels) that civilizations rationally hide because revealing themselves invites destruction by paranoid neighbors; game-theoretic argument that "everyone hides" might be a stable equilibrium`,
                `Space being dark`,
                `Forest fires`,
              ],
              correctIndex: 1,
              explanation: `The hypothesis cannot be tested directly but can't be ruled out. It's an example of how purely game-theoretic reasoning produces explanations that are coherent without being verifiable.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is SETI, and what's its track record?`,
              options: [
                `A spacecraft`,
                `Search for Extraterrestrial Intelligence; scientific effort to detect signs of civilizations through radio astronomy; began in 1960s with Drake's Project Ozma; current biggest project is Breakthrough Listen (Yuri Milner, 2015+); no definitive detection so far`,
                `A type of telescope`,
                `Sci-fi organization`,
              ],
              correctIndex: 1,
              explanation: `The total amount of sky and frequency space searched at adequate sensitivity is still small. A negative result so far is not the same as a definitive answer.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why might the "civilizations don't survive long" family be unsettling?`,
              options: [
                `It's depressing`,
                `It suggests that the Great Filter is ahead of us, not behind us; many civilizations have arisen and ended; the technological transitions we're navigating (nuclear weapons, AI, climate) may be exactly what kills most civilizations`,
                `It's complicated`,
                `It's boring`,
              ],
              correctIndex: 1,
              explanation: `The "civilizations don't last" framework implies humanity is one of many civilizations that have arisen, and we may fail the way most others have. The Fermi paradox connects directly to our actual practical choices.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are "they exist but hidden" hypotheses hard to evaluate?`,
              options: [
                `They're not interesting`,
                `They make the paradox compatible with almost any observation: civilizations could be hiding, transcendent, distant in time, using unknown communication methods; can't be ruled out but also can't be tested directly`,
                `They're too complicated`,
                `They're proven wrong`,
              ],
              correctIndex: 1,
              explanation: `Hypotheses compatible with everything explain nothing. The hidden-civilization framework can't be falsified by observation, which makes it scientifically less useful even if it might be true.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: UFO/UAP claims have been confirmed by serious scientific investigation.`,
              correctAnswer: false,
              explanation: `False. The 2022 NASA UAP study reviewed available evidence and concluded that the available data is insufficient to support extraordinary claims. Despite decades of investigation, no UFO/UAP claim has been confirmed by serious scientific process. The Fermi paradox remains genuinely unanswered.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "We've already been visited by aliens; the government is just covering it up." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, they're here"`,
                `"There's no confirmed evidence of alien visitation despite decades of investigation, including the 2022 NASA UAP study which concluded available data is insufficient for extraordinary claims. The Fermi paradox is far more interesting than 'they're here being hidden': real scientific thinking about why we don't see them connects directly to humanity's own survival prospects (the Great Filter), the rarity of complex life, and game theory between civilizations. The 'cover-up' framing trades real cosmic mystery for a less interesting fictional version."`,
                `"Everyone is lying"`,
                `"Aliens don't exist"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic literacy. The "cover-up" framing is common but unsupported by evidence. The real Fermi paradox is far more interesting and bears directly on questions about humanity's future.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, which Fermi paradox answer (if any) had you already considered? Has the picture clarified?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which family of answers do you most want to be true? Which do you fear is true? Are they the same or different?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who treats the Fermi paradox as a serious question that bears on humanity's choices, what does that change about how you engage with our actual situation?` },
            { id: `reflect-application`, category: `Application`, prompt: `What would change about how humans live if we knew with certainty (a) we're alone in the galaxy or (b) there are millions of other civilizations? Both possibilities are still consistent with current evidence.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The Great Filter argument suggests that finding microbial life elsewhere would be bad news. Is that argument correct? What's the strongest counter to it?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one current SETI or astrobiology project. What are they doing right now? What would constitute a confirmed detection? Most adults don't know.` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The Fermi paradox is one of the few cosmic questions that bears directly on humanity's choices. Two paths.`,
          familyActivity: {
            title: `The "Where Is Everyone?" Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share Fermi's 1950 question and the three families of answers. Ask each adult: had they thought about why we don't detect aliens? Which family of answers seems most plausible to them? Walk through the implications: the Great Filter possibly being ahead of us, what it would mean for our priorities, the gap between popular UFO content and the actual scientific situation. The conversation often reveals that family members have either never considered the question or have considered it shallowly. The real engagement with it is genuinely meaningful.`,
          },
          projectOption: {
            title: `Apply The Drake Equation Yourself, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Use the Drake equation as a thinking tool. Pick reasonable best-case values for each factor; pick reasonable worst-case values; pick middle values. Calculate how many communicating civilizations the Milky Way should contain under each set of values. Write 1,500 words explaining your assumptions and how the answer changes with different factor values. The point isn't to get the "right" number (there isn't one); the point is to engage seriously with where uncertainty lives. Real applied cosmic thinking. Most adults have never done this exercise.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Working through the Drake equation produces genuine intuition about cosmic possibility.`,
          },
          identityQuestion: `If you become someone who treats "are we alone" as a question with practical implications for humanity, what does that change about how you think about our species' future?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious families of answers to the Fermi paradox when most adults can't articulate any.`,
            `A person who knows the Great Filter argument and what it implies for humanity's choices.`,
            `Someone willing to hold "are we alone" as a real question that bears on how we live, not just a sci-fi prompt.`,
          ],
          saveKey: `identity_responses_cs_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Ninth Cosmos lesson done. You can now articulate the Fermi paradox and Drake equation, distinguish three families of proposed answers (rare life, short civilizations, hidden civilizations), recognize the Great Filter argument and its implications for humanity's choices, and tell real Fermi paradox engagement from "the aliens have already been here" content. Most adults don't know any of this. Next time we go into one of the deepest questions in the band: consciousness and its relationship to the cosmos. Three sources on what consciousness actually is. This one matters. See you among the stars. — Nova`,
          badge: `cosmic-investigator`,
          badgeName: `Cosmic Investigator`,
          xpEarned: 75,
          competencies: [
            `Articulates the Fermi paradox and the Drake equation framework`,
            `Distinguishes three families of answers (rare, short, hidden)`,
            `Understands the Great Filter argument and its implications for civilization survival`,
            `Knows SETI's history and current status`,
            `Can engage with the paradox as a question that bears on humanity's practical choices`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Consciousness & Cosmos`,
            hook: `What is consciousness, and how does it relate to the universe? Three sources: empirical research, philosophical idealism, and "consciousness creates reality" pop content. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L09 ${VERSION}] "${l.title}" — ${mags} magazine, investigation game w/ ${investigation?.items?.length ?? 0} items in ${investigation?.buckets?.length ?? 0} buckets, ${quiz} quiz, ${reflect} reflection`
  );
}
