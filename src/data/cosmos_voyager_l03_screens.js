// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L03 — Quantum Weirdness: Real Physics vs Pseudoscience
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS PS4, Coreverse Original — Quantum Mechanics + Media Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (peer-reviewed physics vs viral "quantum" vs popular science)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l03-v1";

const COSMOS_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-03`,
      title: `Quantum Weirdness: Real Physics vs Pseudoscience`,
      duration: 35,
      xpReward: 75,
      badge: `quantum-skeptic`,
      badgeName: `Quantum Skeptic`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, the word "quantum" has been doing a lot of work in the last few decades. It shows up in real physics papers about subatomic particles. It also shows up in TikTok videos about manifesting your dream life, on bottles of "quantum healing water," and in self-help books claiming science proves you create your own reality. Some of these uses are accurate. Most are not. Quantum mechanics is one of the most successful theories in physics, but it's also one of the most abused in pseudoscience. Today we look at what quantum mechanics actually says, then evaluate three sources that all claim to be about "quantum" topics. By the end you'll be able to tell real quantum physics from quantum-flavored nonsense.`,
          headline: `Quantum Weirdness`,
          subtitle: `Real quantum physics. Real abuse of the word. Learn to tell them apart.`,
          visual: `/voyager-assets/cosmos/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Quantum Mechanics Actually Is`,
          paragraphs: [
            `Quantum mechanics is the branch of physics that describes how matter and energy behave at very small scales: atoms, subatomic particles, photons of light. It was developed in the early 20th century by physicists including Max Planck (1900), Albert Einstein (1905, for photons), Niels Bohr (1913), Werner Heisenberg (1925), Erwin Schrödinger (1926), and many others. By the late 1920s, the basic framework was in place.`,
            `Quantum mechanics is one of the most experimentally confirmed theories in all of science. Its predictions have been verified to extraordinary precision. The magnetic moment of the electron, calculated using quantum electrodynamics, agrees with experiment to more than ten decimal places. This is roughly equivalent to measuring the distance from New York to Los Angeles and getting the answer right to within the width of a human hair. No other physical theory has been tested this precisely.`,
            `Quantum mechanics is also responsible for essentially all modern technology that handles information or light. Lasers, LEDs, transistors, computer chips, MRI machines, solar panels, atomic clocks, fiber optic communication, and GPS all rely on quantum-mechanical effects. If quantum mechanics were wrong, none of these would work. Every time you use your phone, you are testing quantum mechanics. It passes.`,
          ],
          image: `/voyager-assets/cosmos/l03-s1-quantum.webp`,
          imageCaption: `Quantum mechanics: among the most confirmed theories ever. Predictions match to ten decimal places.`,
          vocab: [
            {
              word: `quantum mechanics`,
              definition: `The branch of physics describing matter and energy at the smallest scales (atoms, subatomic particles, photons). Developed in the early 20th century. One of the most experimentally confirmed theories ever. Underlies essentially all modern electronics.`,
              audioPrompt: `Quantum mechanics is the branch of physics describing matter and energy at the smallest scales, {name}. Atoms, subatomic particles, photons of light. It was developed by physicists like Max Planck, Albert Einstein, Niels Bohr, Werner Heisenberg, and Erwin Schrödinger in the early 20th century. Quantum mechanics is one of the most experimentally confirmed theories in all of science. Its predictions for the magnetic moment of the electron agree with experiment to more than ten decimal places. It underlies essentially all modern electronics: lasers, LEDs, transistors, computer chips, MRI machines, solar panels, GPS, fiber optics. Every time you use your phone, you are testing quantum mechanics. It passes.`,
            },
            {
              word: `quantum electrodynamics`,
              definition: `The quantum-mechanical theory of how light and matter interact. Its predictions for the magnetic moment of the electron agree with experiment to more than ten decimal places, making it one of the most precisely tested theories in all of science.`,
              audioPrompt: `Quantum electrodynamics is the quantum-mechanical theory of how light and matter interact, {name}. Its predictions have been verified to extraordinary precision. The magnetic moment of the electron, calculated using quantum electrodynamics, agrees with experiment to more than ten decimal places. This is roughly equivalent to measuring the distance from New York to Los Angeles and getting the answer right to within the width of a human hair. No other physical theory has been tested this precisely. Quantum electrodynamics is part of the larger framework of quantum mechanics, which was developed in the early 20th century by physicists including Max Planck, Albert Einstein, Niels Bohr, Werner Heisenberg, and Erwin Schrödinger. Every time you use your phone, you are indirectly testing these theories.`,
            },
            {
              word: `transistors`,
              definition: `Semiconductor devices that control electrical signals, forming the basis of computer chips and essentially all modern digital electronics. They function by exploiting quantum-mechanical effects at the atomic scale.`,
              audioPrompt: `Transistors are semiconductor devices that control electrical signals and form the basis of essentially all modern digital electronics, {name}. Computer chips contain billions of them. They work by exploiting quantum-mechanical effects at the atomic scale. Quantum mechanics is responsible for essentially all modern technology that handles information or light. Lasers, LEDs, transistors, computer chips, MRI machines, solar panels, atomic clocks, fiber optic communication, and GPS all rely on quantum-mechanical effects. If quantum mechanics were wrong, none of these would work. Every time you use your phone, you are testing quantum mechanics. The theory passes every test. Quantum mechanics is not an abstract idea. It is the invisible physics running inside every piece of technology you interact with daily.`,
            }
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What's Genuinely Weird About It`,
          paragraphs: [
            `Quantum mechanics is genuinely strange. Several of its features have no parallel in everyday experience. Particles can be in "superposition" of multiple states until measured: an electron can be in two places at once, in some real sense, until you look. Particles can be "entangled" so that measuring one instantly determines the state of the other, even if they're far apart. Outcomes of measurements are fundamentally probabilistic, not deterministic. These aren't just appearances. They are real features of how nature behaves at small scales, confirmed by thousands of experiments.`,
            `The most famous quantum experiment is the double-slit experiment. Fire single particles (electrons, photons, even larger molecules) at a barrier with two slits in it. The particles produce an interference pattern on a detector behind the barrier, as if each particle went through both slits and interfered with itself. But if you measure which slit each particle went through, the interference pattern vanishes. The particles "decide" to behave like classical particles or quantum waves depending on whether you're watching. This experiment has been performed thousands of times. The strangeness is real.`,
            `Physicists actively disagree about what this strangeness MEANS. There are multiple "interpretations" of quantum mechanics: the Copenhagen interpretation, many-worlds, pilot wave theory, QBism, and others. They all agree on the math and the experimental predictions, which is why they're all considered serious. They disagree on what the math is describing about reality. This interpretive disagreement has lasted nearly a century without resolution.`,
          ],
          image: `/voyager-assets/cosmos/l03-s2-weird.webp`,
          imageCaption: `Superposition. Entanglement. The double-slit. Real, repeatedly confirmed strangeness.`,
          vocab: [
            {
              word: `double-slit experiment`,
              definition: `Foundational quantum experiment: particles fired one at a time through a barrier with two slits produce interference patterns as if each went through both slits, but only when you don't measure which slit. The "weirdness" of quantum mechanics in concrete form.`,
              audioPrompt: `The double-slit experiment is foundational to quantum mechanics, {name}. Fire single particles—electrons, photons, even larger molecules—at a barrier with two slits in it. On a detector behind the barrier, the particles produce an interference pattern. It looks as if each particle went through both slits and interfered with itself. But if you measure which slit each particle actually went through, the interference pattern vanishes and the particles behave classically. This experiment has been performed thousands of times. The strangeness is real. Physicists still actively disagree about what it means for reality. The math agrees. The interpretations disagree.`,
            },
            {
              word: `quantum entanglement`,
              definition: `A quantum phenomenon in which two particles become correlated so that measuring one instantly determines the state of the other, even across large distances. Confirmed by thousands of experiments, including Bell test experiments across hundreds of kilometers.`,
              audioPrompt: `Quantum entanglement is a phenomenon in which two particles become correlated so that measuring one instantly determines the state of the other, even if they are far apart, {name}. This is one of the genuinely strange features of quantum mechanics that has no parallel in everyday experience. It is not faster-than-light communication; the result of the measurement is still random, and no usable information travels between the particles. Entanglement is real and confirmed by thousands of experiments, including Bell test experiments across hundreds of kilometers and even from satellites. Physicists actively disagree about what entanglement means for the nature of reality. Multiple interpretations of quantum mechanics, including Copenhagen, many-worlds, and pilot wave theory, all agree on the experimental predictions while disagreeing on what the math is describing.`,
            },
            {
              word: `superposition`,
              definition: `The quantum property of existing in multiple states simultaneously until measured. An electron can be in two places at once in a real sense until you look. Superposition is real, confirmed by thousands of experiments including the double-slit experiment.`,
              audioPrompt: `Superposition is the quantum property of existing in multiple states simultaneously until measured, {name}. A particle can be in two places at once, in some real sense, until you look. This is not an appearance or a limitation of our knowledge. It is a real feature of how nature behaves at small scales, confirmed by thousands of experiments. The most famous demonstration is the double-slit experiment. Fire single particles at a barrier with two slits. They produce an interference pattern as if each particle went through both slits at once. But if you measure which slit, the interference vanishes and the particles behave classically. Superposition is one of the features of quantum mechanics that make it genuinely strange. Physicists agree on the experimental facts. They still actively disagree about what superposition means for the nature of reality.`,
            }
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where The Word "Quantum" Gets Stolen`,
          paragraphs: [
            `Because quantum mechanics is strange and successful, the word "quantum" has been adopted by people selling things that have nothing to do with actual quantum physics. The pattern is consistent: a real quantum phenomenon gets borrowed, stripped of its mathematical content, and applied to human-scale claims it doesn't actually support.`,
            `Common examples. "Quantum healing": the claim that quantum mechanics allows you to heal yourself by directing intention at your cells. Reality: quantum effects don't operate at the scale of cells or thoughts in the way these claims require. The Nobel Prize-winning physicist Murray Gell-Mann called this kind of misuse "quantum flapdoodle." "Quantum manifestation": the claim that you can shape reality by thinking the right thoughts because of "quantum" principles. Reality: no quantum effect has ever been demonstrated to do anything like this. "Quantum energy products" sold online (water, jewelry, supplements): pure marketing. The products contain no special quantum properties.`,
            `The What the Bleep Do We Know? film franchise (2004 and 2006) popularized many of these misuses. Some of the physicists who appeared in the films later distanced themselves, saying their words had been edited to support claims they didn't endorse. Deepak Chopra has built a career mixing real quantum terms with health and consciousness claims that the underlying physics doesn't support. The pattern: borrow the word, drop the math, sell something.`,
            `This matters because real quantum mechanics is genuinely fascinating. The "quantum healing" version is a thin pseudoscientific film over much weirder, more interesting actual science. When you encounter "quantum" claims, the question to ask is: does this connect to specific quantum phenomena (superposition, entanglement, tunneling, etc.) at the appropriate scale, with citations to peer-reviewed physics? If yes, take it seriously. If no, recognize the pattern.`,
          ],
          image: `/voyager-assets/cosmos/l03-s3-stolen.webp`,
          imageCaption: `"Quantum flapdoodle" (Gell-Mann): borrow the word, drop the math, sell something.`,
          vocab: [
            {
              word: `quantum flapdoodle`,
              definition: `Term coined by Nobel laureate physicist Murray Gell-Mann to describe pseudoscientific misuse of quantum terminology. Real quantum phenomena get borrowed, stripped of their mathematical content, and applied to human-scale claims they don't support.`,
              audioPrompt: `Quantum flapdoodle is a term coined by Murray Gell-Mann, {name}. He was a Nobel Prize-winning physicist and one of the architects of modern particle physics. He used the term to describe pseudoscientific misuse of quantum terminology. The pattern: real quantum phenomena like superposition or entanglement get borrowed, stripped of their mathematical content, and applied to human-scale claims they don't actually support. "Quantum healing," "quantum manifestation," "quantum energy water" are all examples. None of them connect to actual quantum mechanics at the appropriate scale, with citations to peer-reviewed physics. Recognizing this pattern is one of the most useful skills in modern media literacy.`,
            },
            {
              word: `quantum healing`,
              definition: `A pseudoscientific claim that quantum mechanics allows healing through directed intention at cells. Named as a prime example of quantum flapdoodle by critics: it borrows quantum terminology without connecting to any actual quantum phenomenon at the appropriate scale.`,
              audioPrompt: `Quantum healing is a claim that quantum mechanics allows you to heal yourself by directing intention at your cells, {name}. It is one of the most common examples of what Murray Gell-Mann called quantum flapdoodle. Reality: quantum effects do not operate at the scale of cells or thoughts in the way these claims require. Nobel Prize-winning physicist Murray Gell-Mann coined the term quantum flapdoodle specifically to describe this kind of misuse. The pattern is consistent: a real quantum phenomenon gets borrowed, stripped of its mathematical content, and applied to human-scale claims it does not actually support. The What the Bleep Do We Know film franchise popularized many of these misuses in 2004 and 2006. Some physicists who appeared in the films later distanced themselves, saying their words had been edited to support claims they did not endorse.`,
            },
            {
              word: `Murray Gell-Mann`,
              definition: `Nobel Prize-winning physicist and architect of modern particle physics who coined the term 'quantum flapdoodle' to describe pseudoscientific misuse of quantum terminology. One of the most prominent critics of quantum pseudoscience.`,
              audioPrompt: `Murray Gell-Mann was a Nobel Prize-winning physicist and one of the architects of modern particle physics, {name}. He coined the term quantum flapdoodle to describe pseudoscientific misuse of quantum terminology. His criticism targets a consistent pattern: real quantum phenomena like superposition or entanglement get borrowed, stripped of their mathematical content, and applied to human-scale claims they do not actually support. Quantum healing, quantum manifestation, and quantum energy products are all examples. Gell-Mann's term is useful because it names the pattern precisely. The question to ask of any quantum claim is whether it connects to specific quantum phenomena at the appropriate scale, with citations to peer-reviewed physics. If it does not, the pattern is quantum flapdoodle, regardless of how the word quantum is being used.`,
            }
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Decoherence Question`,
          paragraphs: [
            `Why don't we see quantum weirdness in everyday life? Why can't I be in two places at once, even though electrons can? The answer is a phenomenon called decoherence. Quantum effects like superposition are extremely fragile. They only survive when a system is isolated from its environment. The moment a quantum system interacts with anything else (light, air molecules, a measurement device), the superposition collapses into one definite state.`,
            `Large objects (cells, people, planets) constantly interact with their environments. Trillions of air molecules and photons bombard a human body every second. Any quantum superposition you might be in would decohere instantly, before you could possibly notice it. Decoherence is why classical physics works at human scales even though quantum mechanics is the underlying theory. Quantum strangeness is real, but it's confined to systems isolated enough to preserve it.`,
            `This matters for understanding why "quantum healing" and "quantum manifestation" claims don't work as advertised. Cells and thoughts operate at scales and conditions where decoherence is essentially instant. There's no quantum coherence to manipulate. The claims rely on a misunderstanding of where quantum effects actually live in nature. Real quantum biology does exist: photosynthesis appears to use quantum coherence in specific molecules for nanoseconds at a time. But this is very different from "your thoughts shape reality through quantum effects."`,
            `Real quantum technologies (quantum computers, quantum cryptography, quantum sensors) work specifically because their builders go to extraordinary lengths to isolate quantum systems from decoherence. Quantum computers operate at temperatures colder than deep space. Quantum sensors are shielded from electromagnetic interference. Maintaining coherence is the central technical challenge. If quantum coherence were easy to maintain at human scales, building quantum computers would be trivial. It is not trivial. It is one of the hardest engineering challenges of our time.`,
          ],
          image: `/voyager-assets/cosmos/l03-s4-decoherence.webp`,
          imageCaption: `Decoherence: quantum weirdness needs isolation. At human scales, it vanishes instantly.`,
          vocab: [
            {
              word: `decoherence`,
              definition: `The process by which quantum superposition is destroyed when a quantum system interacts with its environment. Explains why quantum effects don't appear at everyday scales. The central challenge in building quantum computers.`,
              audioPrompt: `Decoherence is the process by which quantum superposition is destroyed when a quantum system interacts with its environment, {name}. The moment a quantum system interacts with anything—light, air molecules, a measurement device—the superposition collapses into one definite state. Large objects like cells and people constantly interact with their environments. Trillions of air molecules and photons bombard your body every second. Any quantum superposition you could be in would decohere instantly. This is why classical physics works at human scales even though quantum mechanics is the underlying theory. It is also why building quantum computers is so hard. The whole technical challenge is preventing decoherence long enough to compute.`,
            },
            {
              word: `quantum computers`,
              definition: `Computing devices that exploit quantum-mechanical effects like superposition and entanglement to perform certain calculations. They must be isolated to near-absolute-zero temperatures to prevent decoherence, making building them one of the hardest engineering challenges of our time.`,
              audioPrompt: `Quantum computers are computing devices that exploit quantum-mechanical effects like superposition and entanglement to perform certain calculations, {name}. They require extraordinary isolation to function. Quantum computers operate at temperatures colder than deep space to prevent decoherence. Quantum sensors are shielded from electromagnetic interference for the same reason. Maintaining coherence is the central technical challenge. If quantum coherence were easy to maintain at human scales, building quantum computers would be trivial. It is not trivial. It is one of the hardest engineering challenges of our time. Real quantum technologies work specifically because their builders go to extraordinary lengths to isolate quantum systems from decoherence. This is also why quantum manifestation claims about thoughts shaping reality do not work: human-scale systems are constantly interacting with their environments.`,
            },
            {
              word: `quantum biology`,
              definition: `A real scientific field studying quantum effects in biological systems. Photosynthesis appears to use quantum coherence in specific molecules for nanoseconds at a time. Distinct from pseudoscientific quantum healing claims, which require coherence at scales and durations where decoherence is essentially instant.`,
              audioPrompt: `Quantum biology is a real scientific field studying quantum effects in biological systems, {name}. Photosynthesis appears to use quantum coherence in specific molecules for nanoseconds at a time. This is a genuine case of quantum effects occurring in living systems. But it is very different from quantum healing or quantum manifestation claims. Real quantum biology involves isolated molecular systems, quantum coherence lasting nanoseconds, and rigorous peer-reviewed research. Pseudoscientific quantum healing claims require coherence at the scale of cells and thoughts, lasting long enough to affect health outcomes. Cells and thoughts operate at scales and conditions where decoherence is essentially instant. Trillions of air molecules and photons bombard a human body every second. Any quantum superposition would decohere before it could affect anything. The existence of quantum biology does not validate the claims of the quantum healing industry.`,
            }
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources discussing "quantum" topics. The first is peer-reviewed academic physics research. The second is a popular science book aimed at general audiences. The third is a viral social media account selling courses on "quantum manifestation." All three use the word "quantum." They are doing very different intellectual work.`,
            `As you rank them, apply the patterns from this lesson. Does the source connect to specific quantum phenomena (superposition, entanglement, tunneling, decoherence) at appropriate scales? Does it cite peer-reviewed physics or just use the vocabulary? Does it acknowledge what's settled vs disputed in actual quantum interpretation? Does it have something to sell? Does the author have relevant credentials, or are they borrowing the credibility of physics without having earned it?`,
            `One framing as you work through this: the real quantum world is far stranger and more interesting than any pseudoscientific version. The actual science of quantum mechanics involves probability amplitudes, wave-particle duality, entanglement experiments performed across hundreds of kilometers, and the foundations of every electronic device you own. There's no reason to settle for the watered-down "quantum manifestation" version when the real thing is sitting right there.`,
          ],
          image: `/voyager-assets/cosmos/l03-s5-before.webp`,
          imageCaption: `The real quantum world is stranger than any pseudoscientific version. No reason to settle.`,
          vocab: [
            {
              word: `quantum mechanics`,
              definition: `Different views on what quantum mechanics' mathematical formalism is actually describing about reality. Copenhagen, many-worlds, pilot wave theory, QBism, and others. All agree on the math and predictions. They disagree on what the math means. Active debate for nearly a century.`,
              audioPrompt: `An interpretation of quantum mechanics is a view on what the mathematical formalism is actually describing about reality, {name}. Copenhagen interpretation, many-worlds, pilot wave theory, QBism, and others. All interpretations agree on the math of quantum mechanics. All agree on the experimental predictions. They disagree on what the math is describing. Does superposition mean the particle is really in two places at once? Are there really parallel universes? Is the wave function physically real or just a calculation tool? Physicists have debated these questions for nearly a century without resolution. This active disagreement is a healthy feature of the field, not a flaw. Knowing that the math is settled but the interpretation isn't helps you evaluate claims that mix the two.`,
            },
            {
              word: `Copenhagen interpretation`,
              definition: `The oldest and most widely taught interpretation of quantum mechanics, holding that quantum systems exist in superposition until measured, at which point the wave function collapses to a definite state. All interpretations agree on the math; they disagree on what the math means.`,
              audioPrompt: `The Copenhagen interpretation is the oldest and most widely taught interpretation of quantum mechanics, {name}. It holds that quantum systems exist in superposition until measured, at which point the wave function collapses to a definite state. Copenhagen, many-worlds, pilot wave theory, and QBism all agree on the mathematical formalism of quantum mechanics. All agree on the experimental predictions. They disagree on what the math is describing about reality. Does the wave function collapse, or do all outcomes happen in branching parallel worlds? Is the wave function physically real or just a calculation tool? Physicists have debated these questions for nearly a century without consensus. This active disagreement is a healthy feature of the field. Knowing that the math is settled but the interpretation is not helps you evaluate quantum claims in media and marketing.`,
            },
            {
              word: `wave-particle duality`,
              definition: `The quantum phenomenon in which particles such as electrons and photons exhibit both wave-like and particle-like behavior depending on how they are measured. Demonstrated most clearly by the double-slit experiment and one of the foundational strangeness of quantum mechanics.`,
              audioPrompt: `Wave-particle duality is the quantum phenomenon in which particles exhibit both wave-like and particle-like behavior depending on how they are measured, {name}. It is one of the genuine strangeness of quantum mechanics. In the double-slit experiment, single particles produce interference patterns characteristic of waves. But if you measure which slit each particle goes through, the interference vanishes and the particles behave like classical particles. The real quantum world involves probability amplitudes, wave-particle duality, entanglement experiments performed across hundreds of kilometers, and the foundations of every electronic device you own. The actual science of quantum mechanics is far stranger and more interesting than any pseudoscientific version. Once you understand what wave-particle duality actually means, there is no reason to settle for quantum manifestation content in its place.`,
            }
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l03-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On "Quantum" Topics`,
          intro: `Three sources discuss "quantum" topics. Rank them from most credible to least credible based on methodology, evidence, and whether they actually connect to real quantum physics. Then see how a careful analyst would evaluate them.`,
          topic: `Which sources actually engage with real quantum mechanics, and which use the word "quantum" without the substance?`,
          sources: [
            {
              id: `source-a`,
              name: `Aspect, Dalibard, Roger (1982) — "Experimental Test of Bell's Inequalities Using Time-Varying Analyzers" (Physical Review Letters)`,
              type: `Peer-reviewed academic physics research; one of the foundational experimental tests of quantum entanglement; led to the 2022 Nobel Prize in Physics for Aspect`,
              claim: `Performed precision measurements of entangled photon pairs at the Institut d'Optique in France. Results violated Bell's inequalities at high statistical significance, confirming that quantum entanglement produces correlations that cannot be explained by any "local hidden variable" theory. The experimental setup and statistical analysis are described in detail. Findings have been replicated and extended hundreds of times since, including experiments across hundreds of kilometers and even from satellites.`,
              evidence: `Peer-reviewed in Physical Review Letters, one of the most prestigious physics journals. Detailed methodology including experimental apparatus, statistical analysis, and error bars. Replicated and extended by independent groups worldwide. Led to the 2022 Nobel Prize in Physics (Aspect, Clauser, Zeilinger). The findings have practical implications for quantum cryptography and quantum computing. The paper makes specific testable claims supported by data, with no ambiguity about what was measured.`,
            },
            {
              id: `source-b`,
              name: `Brian Greene, "The Fabric of the Cosmos" (2004) — popular science book`,
              type: `Popular science book by a working theoretical physicist at Columbia University; written for general audiences; explains quantum mechanics, relativity, and cosmology without mathematical detail`,
              claim: `Quantum mechanics describes a reality at small scales that defies everyday intuition: particles in superposition, entanglement that seems to violate locality, the measurement problem. The book walks through the famous experiments (double-slit, Bell tests, etc.), explains the major interpretations (Copenhagen, many-worlds, decoherence) without endorsing one, and is careful to mark which claims are settled physics versus active interpretive debate. Greene names specific physicists, dates, and experiments throughout.`,
              evidence: `Author is a working theoretical physicist at a major research university with real credentials and peer-reviewed publications in his field. The book has been widely praised by physicists for accurately representing the science while being accessible. Greene marks clearly what is established versus debated. The book has limitations of popular science (it can't include the math, sometimes simplifies subtle points), but Greene is careful and honest about these tradeoffs. Multiple endorsements from working physicists at top institutions.`,
            },
            {
              id: `source-c`,
              name: `@QuantumManifestationCoach — Instagram account, 1.4M followers, sells $597 "Quantum Reality Creation" course`,
              type: `Viral Instagram account run by self-described "quantum manifestation coach" who sells courses on shaping reality through "quantum" principles`,
              claim: `"Quantum physics PROVES that you create your own reality. Your thoughts are quantum energy waves that collapse the wave function of reality around you. The double-slit experiment shows that observation creates reality—and YOU are the observer of your life. My students manifested $50K, dream relationships, and perfect health using these quantum principles. Science is finally catching up to what mystics knew all along. My $597 Quantum Reality Creation course teaches the exact frequencies to align with the quantum field. Sign up by Friday for 50% off!"`,
              evidence: `Borrows quantum terminology without specifying any actual quantum phenomenon at appropriate scale. Misrepresents the double-slit experiment: "observation" in physics means physical measurement, not conscious attention; the experiment doesn't say minds create reality. Claims human-scale thoughts produce quantum effects, but cells and brains operate where decoherence is essentially instant. Cites no peer-reviewed physics. Course at the end. No credentials in physics. The pattern is classic "quantum flapdoodle" as Gell-Mann named it: borrow the word, drop the math, sell something. Real physicists have written extensively about why these claims don't follow from quantum mechanics.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? How did you weigh popular science against peer-reviewed research?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible for understanding what quantum mechanics actually shows. Peer-reviewed research at a top physics journal. Specific experimental apparatus with detailed methodology. Replicated and extended hundreds of times. Led to a Nobel Prize. The claims are precisely stated and supported by data. When you want to know what quantum mechanics is and what experiments have shown, peer-reviewed physics research is the bedrock. Aspect's 1982 experiment is one of the foundational tests of quantum reality, and it has been independently confirmed many times since.`,
              `Source B is also credible and useful. Brian Greene is a working theoretical physicist with real credentials. The book accurately represents quantum mechanics for general audiences. He marks clearly what's settled versus debated. He doesn't oversell any single interpretation. Popular science has limits (can't include the math, sometimes simplifies subtle points), but Greene is among the most careful and honest in the genre. For someone who wants to understand quantum mechanics without becoming a physicist, this is a strong source. The combination of professional credentials and careful framing produces useful content.`,
              `Source C is recognizable "quantum flapdoodle" as Gell-Mann named it. The pattern is consistent: borrow quantum terminology without specifying any actual quantum phenomenon at appropriate scale. Misrepresent specific experiments (the double-slit "observer" is a physical measurement, not a conscious mind). Make claims that contradict decoherence (human-scale quantum effects don't survive long enough to affect anything). Cite no peer-reviewed physics. Sell a course at the end. The account profits whether the manifestation claims work for students or not, because revenue comes from course sales. Real physicists have written extensively about why these claims don't follow from quantum mechanics, but the manifestation industry continues because it's profitable.`,
              `The deeper lesson: real quantum mechanics is genuinely stranger and more interesting than any pseudoscientific version. The actual science involves probability amplitudes, wave-particle duality, entanglement experiments across hundreds of kilometers, and the foundations of every electronic device you own. The "quantum manifestation" version is a thin pseudoscientific film over much weirder, more interesting actual science. Once you can tell them apart, you can engage seriously with real quantum physics without being misled by the manifestation industry that has built itself on quantum vocabulary without quantum content.`,
            ],
          },
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is quantum mechanics?`,
              options: [
                `New-age spirituality`,
                `The branch of physics describing matter and energy at the smallest scales (atoms, subatomic particles, photons); developed in the early 20th century; one of the most experimentally confirmed theories ever`,
                `Engineering for quantum computers`,
                `A type of meditation`,
              ],
              correctIndex: 1,
              explanation: `Quantum mechanics underlies essentially all modern electronics. Its predictions for the electron's magnetic moment agree with experiment to more than ten decimal places. Every time you use your phone, you're testing it.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the double-slit experiment show?`,
              options: [
                `Particles always behave classically`,
                `Single particles fired at a barrier with two slits produce an interference pattern, as if each went through both slits; if you measure which slit, the pattern vanishes; foundational quantum strangeness, performed thousands of times`,
                `Light doesn't exist`,
                `Quantum mechanics is fake`,
              ],
              correctIndex: 1,
              explanation: `The experiment has been performed thousands of times. The strangeness is real. Physicists still actively disagree about what it means for reality, but the experimental result is settled.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is decoherence, and why does it matter?`,
              options: [
                `When quantum computers break`,
                `The process by which quantum superposition is destroyed when a quantum system interacts with its environment; explains why we don't see quantum weirdness at everyday scales; the central challenge in building quantum computers`,
                `Random thoughts`,
                `Light absorption`,
              ],
              correctIndex: 1,
              explanation: `Decoherence is why classical physics works at human scales even though quantum mechanics is the underlying theory. It also explains why "quantum manifestation" claims about thoughts shaping reality don't work as advertised.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "quantum flapdoodle"?`,
              options: [
                `A quantum computer`,
                `Term coined by Nobel laureate Murray Gell-Mann to describe pseudoscientific misuse of quantum terminology; real quantum phenomena get borrowed, stripped of math, and applied to human-scale claims they don't actually support`,
                `A physics experiment`,
                `Real quantum physics`,
              ],
              correctIndex: 1,
              explanation: `Recognizing this pattern is one of the most useful skills in modern media literacy. "Quantum healing," "quantum manifestation," "quantum energy water" all follow the pattern.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why don't "quantum manifestation" claims about thoughts shaping reality actually follow from quantum mechanics?`,
              options: [
                `Because thinking isn't real`,
                `Cells and brains operate at scales and conditions where decoherence is essentially instant; there's no quantum coherence to manipulate; the claims rely on misunderstanding where quantum effects actually live in nature`,
                `Because quantum doesn't exist`,
                `Because it's illegal`,
              ],
              correctIndex: 1,
              explanation: `Decoherence is the technical reason. Quantum effects require isolation from the environment to persist. Human bodies are bombarded by trillions of air molecules and photons constantly. Any quantum superposition decoheres before it could affect anything.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did the Aspect, Dalibard, Roger experiments show?`,
              options: [
                `Light is slow`,
                `Precision tests of entangled photon pairs violated Bell's inequalities at high statistical significance, confirming quantum entanglement is real and cannot be explained by classical "hidden variable" theories; replicated hundreds of times since; led to 2022 Nobel Prize`,
                `Quantum mechanics is wrong`,
                `Particles don't entangle`,
              ],
              correctIndex: 1,
              explanation: `Aspect's 1982 experiment is foundational for understanding quantum entanglement. The 2022 Nobel Prize in Physics went to Aspect, Clauser, and Zeilinger for this line of work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is an "interpretation of quantum mechanics"?`,
              options: [
                `A new theory`,
                `Different views on what quantum mechanics' mathematical formalism is actually describing about reality; Copenhagen, many-worlds, pilot wave, QBism; all agree on math and predictions but disagree on meaning; active debate for nearly a century`,
                `A wrong version`,
                `A type of measurement`,
              ],
              correctIndex: 1,
              explanation: `The math is settled. The interpretation isn't. Knowing the difference helps you evaluate claims that mix the two. Real physicists actively defend different interpretations without consensus.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the right question to ask when evaluating any "quantum" claim?`,
              options: [
                `Is it popular?`,
                `Does it connect to specific quantum phenomena (superposition, entanglement, tunneling, decoherence) at appropriate scales, with citations to peer-reviewed physics? If yes, take it seriously. If no, recognize the pattern of borrowed vocabulary`,
                `Does it sound cool?`,
                `Is it on Instagram?`,
              ],
              correctIndex: 1,
              explanation: `Real quantum claims connect to specific phenomena at appropriate scales with peer-reviewed citations. Pseudoscientific quantum claims borrow vocabulary without substance. Knowing the test protects you from being misled.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The real quantum world is stranger and more interesting than any pseudoscientific version of it.`,
              correctAnswer: true,
              explanation: `True. Real quantum mechanics involves probability amplitudes, wave-particle duality, entanglement across hundreds of kilometers, and the foundations of every electronic device you own. The "quantum manifestation" version is a thin film over much weirder, more interesting actual science.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your relative excitedly tells you they're using "quantum frequencies" to manifest a new job. Based on this lesson, what's the most useful response?`,
              options: [
                `"Great, manifestation works"`,
                `"There's no actual quantum physics in 'quantum manifestation.' The word is borrowed without the underlying science. Decoherence makes thought-based quantum effects on cells and brains essentially impossible. Setting clear goals and taking aligned action probably does help you get a new job—but that's psychology and behavior, not quantum mechanics. Real quantum physics is genuinely fascinating; you don't have to pretend manifestation is quantum to take goal-setting seriously."`,
                `"You're being scammed"`,
                `"Quantum doesn't exist"`,
              ],
              correctIndex: 1,
              explanation: `Real applied quantum literacy. Honor the goal-setting impulse (it might genuinely help). Name the misuse of physics terminology. Distinguish what works (clear intentions, aligned action) from what doesn't (quantum-frequency claims). This is mature engagement with a hard topic in a real relationship.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you assume about "quantum" claims you've seen online or in books? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why does "quantum manifestation" content feel so appealing even when the physics doesn't support it? What psychological need is it meeting?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can tell real quantum physics from "quantum flapdoodle" automatically, what does that protect you from over a lifetime of media consumption?` },
            { id: `reflect-application`, category: `Application`, prompt: `Find one "quantum" claim online today (Instagram, TikTok, a book, a wellness brand). Apply the lesson's test. What pattern do you see?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where popular science gets quantum mechanics genuinely wrong, even when written by physicists? What kinds of errors slip through?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they ever bought a "quantum" product or course? What did they expect? What happened?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Quantum literacy protects you from a billion-dollar pseudoscience industry. Two paths.`,
          familyActivity: {
            title: `The Quantum Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned about real quantum mechanics versus "quantum" pseudoscience. Then walk through your house and find anything labeled "quantum" (products, supplements, books, apps, jewelry). Apply the lesson's test: does this connect to specific quantum phenomena at appropriate scales with peer-reviewed citations? Most "quantum" products will fail the test. Some family members may push back; that's fine. The point is for the family to have the framework, not to convert anyone. Many adults have spent money on "quantum" products that didn't deliver. The framework prevents future losses.`,
          },
          projectOption: {
            title: `Real Quantum Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~45 minutes per session, 4 sessions`,
            description: `Pick one real quantum phenomenon (superposition, entanglement, the double-slit experiment, quantum tunneling, decoherence). Spend 2 weeks learning about it deeply. Watch high-quality videos (PBS Space Time, MinutePhysics, Sean Carroll's lectures are all good). Read accessible articles. Write 1,500 words explaining the phenomenon to a younger sibling or friend in plain language. Include: what the phenomenon is, what experiments demonstrated it, what's still debated, why it's stranger than any pseudoscientific version. Real applied science literacy. Most adults can't explain real quantum mechanics. You can, after this project.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real quantum education at 12 is unusual and valuable.`,
          },
          identityQuestion: `If you become someone who knows real quantum mechanics and can spot pseudoscience instantly, what does that mean for how you engage with science claims for the rest of your life?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can spot "quantum flapdoodle" the moment I see it.`,
            `A person who knows real quantum physics is stranger than any pseudoscientific version.`,
            `Someone willing to ask "does this connect to peer-reviewed physics?" before believing any quantum claim.`,
          ],
          saveKey: `identity_responses_cs_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Third Cosmos lesson done. You can now articulate what quantum mechanics actually is, explain superposition and entanglement and the double-slit experiment, understand decoherence and why it limits where quantum effects appear, recognize "quantum flapdoodle" patterns in pseudoscience, and apply real source evaluation to "quantum" claims you encounter anywhere. Most adults have never been taught any of this systematically. Next time we go back in time, to the very beginning. The Big Bang. What we actually know, how we know it, and the alternative theories that competed with it. Sequence game format: you'll order the cosmic timeline yourself. See you among the stars. — Nova`,
          badge: `quantum-skeptic`,
          badgeName: `Quantum Skeptic`,
          xpEarned: 75,
          competencies: [
            `Articulates what quantum mechanics actually is and its experimental track record`,
            `Knows the double-slit experiment, superposition, entanglement, and the Aspect-Dalibard-Roger Bell test`,
            `Understands decoherence and why it limits quantum effects to small isolated systems`,
            `Recognizes "quantum flapdoodle" patterns (Gell-Mann) in pseudoscience`,
            `Can apply structural source evaluation to "quantum" claims in media and marketing`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: The Big Bang & Cosmic Origins`,
            hook: `13.8 billion years of cosmic history. Sequence the events yourself: from inflation to first atoms to galaxies to now.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
