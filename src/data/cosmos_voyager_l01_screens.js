// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L01 — What Is The Universe?
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Cosmology Foundations
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (materialist / idealist / simulation)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l01-v1";

const COSMOS_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-01`,
      title: `What Is The Universe?`,
      duration: 35,
      xpReward: 75,
      badge: `cosmos-questioner`,
      badgeName: `Cosmos Questioner`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}. Welcome to Cosmos. I'm Nova. I'll be your guide through what is probably the strangest, deepest, most awe-producing subject in your entire education. We're going to spend twenty lessons together exploring the universe—what it is, how it works, where it came from, and where it's going. We'll cover real physics. Einstein's relativity. Quantum mechanics. The Big Bang. Black holes. Dark matter. The fate of everything. We'll also touch questions where physics meets philosophy: what is consciousness, what is time, what does it mean that we exist in this universe at all. Today we start with the most basic question: what IS the universe? You'd think this would be settled. It isn't. Three serious answers compete, and the people who hold them include some of the smartest physicists and philosophers alive. By the end of this lesson you'll build your first cosmic argument.`,
          headline: `What Is The Universe?`,
          subtitle: `The most basic question. Three serious, competing answers.`,
          visual: `/voyager-assets/cosmos/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What We Actually Know`,
          paragraphs: [
            `Before we get to the question of what the universe IS, let's anchor on what we can actually observe. The observable universe is roughly 93 billion light-years across. It contains an estimated 200 billion to 2 trillion galaxies. Each galaxy contains tens of millions to hundreds of billions of stars. Our own Milky Way galaxy contains about 100 billion stars, one of which is our Sun, around which our Earth orbits. We are very small parts of a very large thing.`,
            `The universe is also very old. Current best measurements place its age at 13.8 billion years. We can measure this in several independent ways: the cosmic microwave background radiation (the leftover heat from the early universe), the expansion rate of distant galaxies (Hubble's law), and the ages of the oldest stars we can find. All three methods give roughly the same answer. This convergence is one of the strongest pieces of evidence we have about cosmic history.`,
            `The universe is expanding. Edwin Hubble showed this in 1929 by observing that distant galaxies appear to be moving away from us, and the further they are, the faster they're moving. The expansion isn't galaxies flying through space; it's space itself stretching, with galaxies carried along. In 1998, observations of distant supernovae showed something even stranger: the expansion is accelerating. Something we call "dark energy" appears to be pushing it faster.`,
            `These observations are the bedrock. The questions about what the universe IS, deeply, sit on top of these observed facts. Different answers must explain these observations, or they're not serious answers about our actual universe.`,
          ],
          image: `/voyager-assets/cosmos/l01-s1-observations.webp`,
          imageCaption: `93 billion light-years across. 13.8 billion years old. Expanding. Accelerating.`,
          vocab: [
            {
              word: `observable universe`,
              definition: `The part of the universe we can theoretically see, limited by the speed of light and the age of the universe. Roughly 93 billion light-years across. There may be vastly more universe beyond this we cannot observe.`,
              audioPrompt: `The observable universe is the part of the universe we can theoretically see, {name}. It is limited by two things: the speed of light, which sets how fast information can travel, and the age of the universe, which limits how long light has had to reach us. Light from beyond the observable universe simply hasn't had time to get here yet. The observable universe is roughly 93 billion light-years across. Why isn't it just 13.8 billion light-years, the universe's age times the speed of light? Because space itself has been expanding, so light that started reaching us 13 billion years ago came from points that are now much further away. There may be vastly more universe beyond what we can observe. We may never know how much.`,
            },
          ,
            {
              word: `cosmic microwave background`,
              definition: `Leftover heat radiation from the early universe, used as one of three independent methods to measure the universe's age at 13.8 billion years. All three methods give roughly the same answer.`,
              audioPrompt: `The cosmic microwave background is leftover heat from the early universe, {name}. It is one of three independent ways scientists measure the age of the universe, all of which give roughly the same answer: 13.8 billion years. The other two methods are the expansion rate of distant galaxies, described by Hubble's law, and the ages of the oldest stars we can find. The fact that three completely different measurement approaches converge on the same number is one of the strongest pieces of evidence we have about cosmic history. The cosmic microwave background itself is radiation that has been traveling through space since the universe was very young, stretched to longer wavelengths by cosmic expansion over billions of years.`,
            },
            {
              word: `dark energy`,
              definition: `A mysterious form of energy that appears to be accelerating the expansion of the universe. Discovered in 1998 through observations of distant supernovae. Its nature remains one of the biggest open questions in physics.`,
              audioPrompt: `Dark energy is the name given to whatever is accelerating the expansion of the universe, {name}. In 1998, observations of distant supernovae revealed something unexpected: the expansion of the universe is not just continuing, it is speeding up. Something appears to be pushing space apart faster and faster. Scientists call it dark energy because its nature is almost entirely unknown. It is not matter. It is not ordinary energy in any familiar form. Edwin Hubble showed in 1929 that the universe was expanding. The 1998 discovery showed that expansion is accelerating. Dark energy is the placeholder name for the cause. What it actually is remains one of the biggest open questions in all of physics.`,
            }
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Materialism`,
          paragraphs: [
            `The dominant view in modern physics and most of mainstream science is materialism (sometimes called physicalism). The universe is, fundamentally, matter and energy moving through space and time according to physical laws. Everything that exists—stars, planets, your brain, your thoughts, this lesson—is ultimately physical. Mental states are produced by physical brains. Consciousness is something that emerges from sufficiently complex arrangements of matter. Nothing exists outside of, or fundamentally different from, the physical universe.`,
            `Materialism has enormous explanatory success. The same physical laws explain why apples fall, why stars shine, why your phone works, and why GPS satellites need to account for relativity to stay accurate. The predictions of physics have been confirmed to spectacular precision. The magnetic properties of the electron, for instance, have been confirmed to more than ten decimal places. Materialism is the framework that has produced essentially all of modern technology and most scientific understanding.`,
            `Materialism's strongest challenge is sometimes called "the hard problem of consciousness." Why does there seem to be something it is like to be you? Physical descriptions can tell us how the brain processes information, but they don't seem to capture the felt quality of experience: the redness of red, the painfulness of pain. Materialists argue that consciousness is just a particular kind of physical process we don't yet fully understand. Critics argue that the gap between physical processes and felt experience is not just a gap in understanding but a fundamental category difference.`,
            `Notable materialist thinkers: Daniel Dennett (philosopher), Patricia Churchland (philosopher and neuroscientist), Sean Carroll (physicist), Richard Dawkins (biologist). Most working physicists and biologists operate within materialist assumptions even when they don't explicitly defend the position.`,
          ],
          image: `/voyager-assets/cosmos/l01-s2-materialism.webp`,
          imageCaption: `Materialism: matter and energy following physical laws. Everything else emerges from that.`,
          vocab: [
            {
              word: `materialism`,
              definition: `The philosophical position that everything that exists is fundamentally physical. Mental states emerge from physical brains. The dominant framework in modern science. Sometimes called physicalism.`,
              audioPrompt: `Materialism is the philosophical position that everything that exists is fundamentally physical, {name}. Sometimes called physicalism. Stars, planets, brains, thoughts, this lesson: all ultimately matter and energy moving through space and time according to physical laws. Mental states emerge from physical brains. Consciousness is something that emerges from sufficiently complex arrangements of matter. Materialism is the dominant framework in modern science and has produced essentially all of modern technology. Its biggest challenge is explaining consciousness: why is there something it is like to be you, when all that's happening physically is patterns of neurons firing? Materialists argue this gap will eventually be explained scientifically. Critics argue it's a deep category difference.`,
            },
          ,
            {
              word: `hard problem of consciousness`,
              definition: `The philosophical puzzle of why physical processes in the brain produce felt, subjective experience. Materialists argue it is a gap in understanding; critics argue it is a fundamental category difference between physical processes and experience.`,
              audioPrompt: `The hard problem of consciousness is the puzzle of why physical brain processes produce felt subjective experience, {name}. Physical descriptions can tell us how the brain processes information. They don't seem to capture why there is something it is like to be you: the redness of red, the painfulness of pain. Materialists argue consciousness is just a particular kind of physical process we don't yet fully understand. Critics argue the gap between physical processes and felt experience is not a gap in understanding at all, but a fundamental category difference. The problem is materialism's strongest challenge. Idealists argue their view has no equivalent difficulty: if the universe is fundamentally experiential, consciousness needs no special explanation.`,
            },
            {
              word: `physicalism`,
              definition: `Another name for materialism: the philosophical position that everything that exists is fundamentally physical. Mental states emerge from physical brains. The dominant framework in modern science, responsible for essentially all modern technology.`,
              audioPrompt: `Physicalism is another name for materialism, {name}. It is the philosophical position that everything that exists is fundamentally physical: matter and energy moving through space and time according to physical laws. Stars, planets, your brain, your thoughts, this lesson are all ultimately physical. Mental states are produced by physical brains. Consciousness emerges from sufficiently complex arrangements of matter. Physicalism is the dominant framework in modern science. Its predictions have been confirmed to spectacular precision. The magnetic properties of the electron have been confirmed to more than ten decimal places. Most working physicists and biologists operate within physicalist assumptions even when they do not explicitly defend the position.`,
            }
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Idealism`,
          paragraphs: [
            `Idealism is the much older view that the universe is fundamentally mental or experiential, and what we call "matter" is, in some deep sense, derived from or made of mind. The Western philosophical tradition includes idealists going back at least to Plato. The Eastern traditions—particularly Hindu Advaita Vedanta, certain Buddhist schools, and Taoist thought—have held versions of idealism for millennia. In the 17th and 18th centuries, Western idealist philosophers like George Berkeley, Immanuel Kant, and Georg Hegel produced detailed systems.`,
            `Modern idealism, sometimes called "analytic idealism," has been defended by contemporary philosophers like Bernardo Kastrup. The argument runs roughly: the only thing any of us ever actually encounters is our own experience. We never directly encounter "matter." We encounter perceptions, sensations, thoughts, which we interpret as being caused by matter. The simplest hypothesis, idealists argue, is that experience itself is fundamental and "matter" is a useful concept we construct from patterns in experience.`,
            `Idealism's strongest argument is its account of consciousness. If the universe is fundamentally experiential, the existence of consciousness needs no special explanation. It's the ground of everything else. Materialism has to explain how consciousness arises from non-conscious matter; idealism has to explain how the apparent solidity and lawfulness of matter arises from experience. Both face hard problems, but they're different hard problems.`,
            `Idealism's biggest challenges are scientific. How does idealism account for the spectacular predictive success of physics? Why does the universe seem so lawful, so independent of any particular observer, so consistent across people? Modern idealists have responses to these challenges, but the responses aren't yet developed enough to match physics' track record of practical success.`,
          ],
          image: `/voyager-assets/cosmos/l01-s3-idealism.webp`,
          imageCaption: `Idealism: experience is fundamental. Matter is derived. Older than science.`,
          vocab: [
            {
              word: `idealism`,
              definition: `The philosophical position that the universe is fundamentally mental or experiential, and "matter" is derived from or made of mind. Has roots in ancient Greek and Eastern philosophy. Modern version defended by philosophers like Bernardo Kastrup.`,
              audioPrompt: `Idealism is the philosophical position that the universe is fundamentally mental or experiential, {name}. What we call "matter" is, in some deep sense, derived from or made of mind. This view is older than materialism. The Western tradition includes idealists going back to Plato. Eastern traditions like Hindu Advaita Vedanta, certain Buddhist schools, and Taoist thought have held versions of idealism for millennia. Modern idealism is defended by philosophers like Bernardo Kastrup. The argument: the only thing any of us ever directly encounters is experience. Matter is a concept we construct from patterns in experience. Experience is what's fundamental.`,
            },
          ,
            {
              word: `analytic idealism`,
              definition: `A modern form of idealism defended by philosophers like Bernardo Kastrup, arguing that experience is the fundamental nature of reality and that matter is a concept constructed from patterns in experience.`,
              audioPrompt: `Analytic idealism is a modern form of idealism defended by contemporary philosophers like Bernardo Kastrup, {name}. The argument runs roughly like this: the only thing any of us ever actually encounters is our own experience. We never directly encounter matter. We encounter perceptions, sensations, and thoughts, which we interpret as being caused by matter. The simplest hypothesis, analytic idealists argue, is that experience itself is fundamental and matter is a useful concept we construct from patterns in experience. This is a contemporary development of a much older tradition. Western idealists going back to George Berkeley, Immanuel Kant, and Georg Hegel produced detailed systems. Eastern traditions held versions of idealism for millennia.`,
            },
            {
              word: `Advaita Vedanta`,
              definition: `A school of Hindu philosophy that holds a version of idealism: that the universe is fundamentally experiential or mental. One of the Eastern philosophical traditions that has maintained idealist positions for millennia.`,
              audioPrompt: `Advaita Vedanta is a school of Hindu philosophy that holds a version of idealism, {name}. It is one of the Eastern traditions that has maintained idealist positions for millennia, alongside certain Buddhist schools and Taoist thought. The Western philosophical tradition has its own idealist history going back at least to Plato. In the 17th and 18th centuries, Western idealist philosophers like George Berkeley, Immanuel Kant, and Georg Hegel produced detailed systems. What these traditions share is the view that the universe is fundamentally mental or experiential, and that what we call matter is in some deep sense derived from or made of mind. Idealism is older than materialism and has serious philosophical defenders in the present day.`,
            }
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Simulation Hypothesis`,
          paragraphs: [
            `In 2003, philosopher Nick Bostrom published an argument that goes roughly like this. If a civilization ever becomes advanced enough to run detailed simulations of conscious beings, and if such civilizations would run many such simulations (for research, entertainment, or other reasons), then the number of simulated conscious beings would vastly exceed the number of "original" conscious beings. By probability, we should expect that we're more likely simulated than original. The argument is sometimes called the "simulation hypothesis."`,
            `The argument is taken seriously by serious thinkers. Astrophysicist Neil deGrasse Tyson has said he places the odds we're in a simulation as "very high." Elon Musk has publicly endorsed similar reasoning. Physicists have explored what observable signatures a simulation might produce. Some have argued that the quantum-mechanical structure of reality, the discrete nature of spacetime at very small scales, and even the speed-of-light limit could be artifacts of an underlying computational substrate.`,
            `The simulation hypothesis isn't quite materialism (the "real" base level might not be material in the way we usually think) and isn't quite idealism (it implies an underlying computational structure, not pure mind). It's a third option that takes the materialist's commitment to following the science seriously while reaching a conclusion that sounds, from our perspective, much more like ancient mystical traditions: reality isn't what it appears to be.`,
            `Critics raise serious objections. The argument depends on assumptions about advanced civilizations we can't verify. The probability calculation may be flawed. There's no empirical evidence we're simulated rather than not. And the question may be undecidable: if the simulation is good enough, no internal experiment could distinguish simulation from base reality. The simulation hypothesis is a hypothesis worth taking seriously, but it's not established science.`,
          ],
          image: `/voyager-assets/cosmos/l01-s4-simulation.webp`,
          imageCaption: `Simulation hypothesis: reality might be computational. Modern, contested, taken seriously by serious thinkers.`,
          vocab: [
            {
              word: `simulation hypothesis`,
              definition: `Nick Bostrom's 2003 argument that we are more likely to be simulated conscious beings than "original" ones, given assumptions about advanced civilizations running many simulations. Taken seriously by some physicists and philosophers.`,
              audioPrompt: `The simulation hypothesis is Nick Bostrom's 2003 argument, {name}. The reasoning: if a civilization ever becomes advanced enough to run detailed simulations of conscious beings, and if such civilizations would run many such simulations for research or entertainment or other reasons, then the number of simulated conscious beings would vastly exceed the number of original conscious beings. By probability, we should expect that we are more likely simulated than original. The argument is taken seriously by physicists like Neil deGrasse Tyson and entrepreneurs like Elon Musk. Critics argue the assumptions are unverifiable and the probability calculation may be flawed. It is not established science. It is also not crazy. It is a hypothesis worth taking seriously while remaining uncertain.`,
            },
          ,
            {
              word: `Nick Bostrom`,
              definition: `Philosopher who published the simulation argument in 2003, reasoning that if advanced civilizations run many simulations of conscious beings, simulated beings would vastly outnumber original ones, making it statistically likely we are simulated.`,
              audioPrompt: `Nick Bostrom is the philosopher who published the simulation argument in 2003, {name}. His reasoning: if a civilization ever becomes advanced enough to run detailed simulations of conscious beings, and if such civilizations would run many such simulations for research, entertainment, or other reasons, then the number of simulated conscious beings would vastly exceed the number of original conscious beings. By probability, we should expect that we are more likely simulated than original. The argument has been published in peer-reviewed philosophy journals. It is taken seriously by astrophysicist Neil deGrasse Tyson and others. Critics argue the assumptions about advanced civilizations cannot be verified, and that the probability calculation may be flawed.`,
            },
            {
              word: `base reality`,
              definition: `In the simulation hypothesis, the underlying level of existence from which a simulation is run, as distinct from the simulated world. If the simulation is good enough, no internal experiment could distinguish simulation from base reality.`,
              audioPrompt: `Base reality is the underlying level of existence from which a simulation would be run, {name}. The simulation hypothesis, proposed by Nick Bostrom in 2003, raises the possibility that what we experience as the universe is a detailed simulation running on some computational substrate. Base reality would be whatever exists at that deeper level. The simulation hypothesis is not quite materialism, since the base level might not be material in the way we usually think, and it is not quite idealism, since it implies an underlying computational structure rather than pure mind. Critics note that if the simulation is good enough, no experiment performed inside it could distinguish simulation from base reality. The question may be inherently undecidable.`,
            }
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `These three positions aren't equal in scientific track record. Materialism has produced essentially all of modern technology and most of our predictive understanding of nature. Idealism, despite its philosophical sophistication, has not produced equivalent practical successes. The simulation hypothesis is too new and too unfalsifiable to have a track record. If you weigh positions by practical scientific success, materialism dominates.`,
            `But scientific success isn't the only consideration. Each position addresses different questions. Materialism is strongest on explaining the lawful behavior of nature and the success of physics. Idealism is strongest on explaining the existence of consciousness without needing to derive it from non-conscious matter. The simulation hypothesis is strongest on accommodating both physical regularity and the strangeness of certain physical features (the quantization of spacetime, the speed of light limit).`,
            `As you build your argument, notice that you're not picking between "true science" and "weird philosophy." You're picking between three positions that serious physicists and philosophers actively defend. The right answer isn't obvious. Reasonable, well-informed people disagree.`,
            `One more framing: the question "what IS the universe?" might be too big for any single answer. Some philosophers argue that all three positions might be capturing different aspects of a deeper reality we don't yet have the concepts to describe. Your argument can engage with this possibility. Or commit to one position fully. Both are legitimate moves.`,
          ],
          image: `/voyager-assets/cosmos/l01-s5-before.webp`,
          imageCaption: `Three positions. Different strengths. The right answer isn't obvious.`,
          vocab: [
            {
              word: `falsifiability`,
              definition: `Whether a claim can, in principle, be proven wrong by evidence. Philosopher Karl Popper argued this is what separates science from non-science. Materialism is highly falsifiable. The simulation hypothesis is questionably falsifiable.`,
              audioPrompt: `Falsifiability is whether a claim can, in principle, be proven wrong by evidence, {name}. Philosopher Karl Popper argued this is what separates science from non-science. A claim that no possible evidence could contradict is not a scientific claim. Materialism is highly falsifiable. Specific predictions about how matter behaves can be tested and proven wrong. The simulation hypothesis is questionably falsifiable. If the simulation is good enough, no internal experiment could distinguish simulation from base reality. This doesn't make the simulation hypothesis worthless. It does mean it sits outside science in a way materialism does not. Knowing the difference between falsifiable and non-falsifiable claims is one of the most important tools in cosmic thinking.`,
            },
          ,
            {
              word: `quantization of spacetime`,
              definition: `The idea that space and time may be discrete at very small scales rather than continuous. One of the physical features that the simulation hypothesis accommodates as a possible artifact of an underlying computational substrate.`,
              audioPrompt: `The quantization of spacetime is the idea that space and time may be discrete at very small scales rather than perfectly continuous, {name}. It is one of the physical features that the simulation hypothesis accommodates as a possible artifact of an underlying computational substrate. Physicists have explored what observable signatures a simulation might produce, and some have argued that the discrete nature of spacetime at very small scales, along with the speed-of-light limit, could be such signatures. The simulation hypothesis is strongest at accommodating both physical regularity and the strangeness of certain physical features. It is not established science, but it takes the materialist commitment to following the science seriously while reaching a conclusion that sounds, from our perspective, much more like ancient mystical traditions.`,
            },
            {
              word: `scientific track record`,
              definition: `The history of verified predictions a theory or framework has produced. Used in this lesson to compare the three positions: materialism dominates in practical technological success; idealism and the simulation hypothesis have not produced equivalent track records.`,
              audioPrompt: `Scientific track record refers to the history of verified predictions a framework has produced, {name}. The three positions in this lesson are not equal on this measure. Materialism has produced essentially all of modern technology and most of our predictive understanding of nature. Idealism, despite its philosophical sophistication, has not produced equivalent practical successes. The simulation hypothesis is too new and too difficult to falsify to have a track record at all. If you weigh positions by practical scientific success, materialism dominates. But scientific success is not the only consideration. Each position addresses different questions. Materialism is strongest on explaining the lawful behavior of nature. Idealism is strongest on explaining the existence of consciousness without deriving it from non-conscious matter.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `What Is The Universe, Most Fundamentally?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious physicists and philosophers actively defend each of these.`,
          positions: [
            {
              id: `materialism`,
              label: `Materialism: matter and energy following physical laws`,
              summary: `Everything that exists is fundamentally physical: matter and energy moving through space and time according to physical laws. Mental states emerge from physical brains. The dominant framework in modern science. Has produced essentially all of modern technology. Predictions confirmed to ten+ decimal places in some cases. The "hard problem of consciousness" is a gap in current understanding, not evidence against materialism.`,
            },
            {
              id: `idealism`,
              label: `Idealism: experience is fundamental, matter is derived`,
              summary: `The universe is fundamentally mental or experiential. What we call "matter" is derived from or constructed from patterns in experience. We only ever directly encounter our own experience, never matter directly. The existence of consciousness needs no special explanation under idealism; it's the ground of everything. Has ancient roots (Plato, Advaita Vedanta, Buddhist schools) and modern defenders (Bernardo Kastrup).`,
            },
            {
              id: `simulation`,
              label: `Simulation hypothesis: reality might be computational`,
              summary: `If advanced civilizations run many detailed simulations of conscious beings, simulated beings vastly outnumber original beings, so by probability we're more likely simulated. Argued seriously by Bostrom (2003), endorsed by physicists like Neil deGrasse Tyson. Accommodates both physical regularity and certain strangeness of physical features (quantum discreteness, speed-of-light limit). Sits between materialism and idealism, taking science seriously while reaching conclusions reminiscent of mystical traditions.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Modern physics has confirmed predictions to spectacular precision. The magnetic moment of the electron is confirmed to more than ten decimal places. General relativity's predictions about GPS time dilation are essential for the technology to work. The materialist framework has track record no other approach matches.`,
              source: `Standard physics validation; QED experimental confirmations`,
            },
            {
              id: `e2`,
              text: `The "hard problem of consciousness" remains unsolved. Physical descriptions of the brain don't seem to capture why there's something it is like to be conscious. Philosophers like David Chalmers argue this is a genuine theoretical problem, not just incomplete neuroscience.`,
              source: `Chalmers 1995, "Facing Up to the Problem of Consciousness"`,
            },
            {
              id: `e3`,
              text: `Quantum mechanics seems to require a role for measurement or observation in determining outcomes. The "observer problem" has generated multiple interpretations of quantum mechanics over a century without consensus. Some interpretations support idealism more naturally than materialism.`,
              source: `Physics history of quantum interpretation debates`,
            },
            {
              id: `e4`,
              text: `Nick Bostrom's 2003 simulation argument is logically rigorous given its premises. Multiple physicists including Neil deGrasse Tyson, Elon Musk, and others have endorsed similar reasoning. The argument has been published in peer-reviewed philosophy journals.`,
              source: `Bostrom 2003, "Are You Living in a Computer Simulation?"`,
            },
            {
              id: `e5`,
              text: `Eastern philosophical traditions (Hindu Advaita Vedanta, Buddhist schools, Taoist thought) have held versions of idealism for over 2,000 years. They independently developed sophisticated frameworks for consciousness as fundamental. This isn't a recent invention; it's a mature philosophical tradition with detailed arguments.`,
              source: `Comparative philosophy; texts from Upanishads through modern philosophy`,
            },
            {
              id: `e6`,
              text: `Simulation hypothesis is questionably falsifiable. If the simulation is good enough, no internal experiment could distinguish simulation from base reality. Karl Popper would argue this places it outside science. Strong materialist response.`,
              source: `Popper philosophy of science; falsifiability criterion`,
            },
            {
              id: `e7`,
              text: `Materialism has produced essentially all of modern technology: computers, vaccines, GPS, antibiotics, electricity, lasers. The framework that produces the most working technology has earned strong epistemic priority.`,
              source: `History of technology and science`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions claim to describe what reality is most fundamentally. But cosmic-scale questions about ultimate nature may simply exceed what any human mind can answer with the categories we have available. Our brains evolved to find food, avoid predators, and navigate social relationships in African savannas. The fact that those brains can do math and physics at all is surprising; the assumption that they can settle the ultimate nature of reality may be a kind of cognitive hubris. Perhaps the honest answer is 'we don't know and may not be capable of knowing'—and choosing any of the three positions is overconfidence dressed up as philosophy."`,
            promptInstruction: `In 3-4 sentences, respond. Does your position depend on humans being capable of resolving cosmic questions? Or is it defensible even granting cognitive limits?`,
          },
          reflectionPrompt: `Looking at the two positions you didn't choose, which would be hardest to be wrong about? Why does that matter?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the observable universe?`,
              options: [
                `Everything that exists`,
                `The part of the universe we can theoretically see, limited by the speed of light and the age of the universe; roughly 93 billion light-years across; there may be vastly more universe beyond it`,
                `Just our solar system`,
                `Only galaxies we can name`,
              ],
              correctIndex: 1,
              explanation: `Light from beyond the observable universe simply hasn't had time to reach us yet. Because space has been expanding, the observable universe is much larger than 13.8 billion light-years (the universe's age times light speed).`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `How old is the universe, and how do we know?`,
              options: [
                `6,000 years, from religious texts`,
                `13.8 billion years; measured by cosmic microwave background, expansion rate of galaxies (Hubble's law), and ages of oldest stars; three independent methods give roughly the same answer`,
                `1 million years`,
                `Infinite age`,
              ],
              correctIndex: 1,
              explanation: `The convergence of three independent measurement methods is one of the strongest pieces of evidence we have about cosmic history. Different physics; same answer.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does materialism (or physicalism) claim?`,
              options: [
                `Only money matters`,
                `Everything that exists is fundamentally physical: matter and energy moving through space and time; mental states emerge from physical brains; dominant framework in modern science`,
                `The universe is conscious`,
                `Nothing is physical`,
              ],
              correctIndex: 1,
              explanation: `Materialism has produced essentially all of modern technology and most predictive understanding of nature. Its biggest challenge is explaining consciousness: why there's something it is like to be you.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does idealism claim, and what's its ancient history?`,
              options: [
                `Wishes come true`,
                `The universe is fundamentally mental or experiential; matter is derived from experience; held in versions by Plato (West), Hindu Advaita Vedanta, Buddhist schools, Taoist thought (East) for over 2,000 years`,
                `Computers are real`,
                `Only humans matter`,
              ],
              correctIndex: 1,
              explanation: `Idealism is much older than materialism. Its strongest argument: we only ever directly encounter experience, never matter. The hard problem of consciousness is built into materialism but not idealism.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the simulation hypothesis?`,
              options: [
                `Video games are real`,
                `Nick Bostrom's 2003 argument: if advanced civilizations run many simulations of conscious beings, simulated beings vastly outnumber original ones, so by probability we're more likely simulated; taken seriously by some physicists`,
                `Pure fantasy`,
                `A type of materialism`,
              ],
              correctIndex: 1,
              explanation: `The argument is logically rigorous given its premises. Critics argue the premises are unverifiable. It sits between materialism and idealism in interesting ways.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "hard problem of consciousness"?`,
              options: [
                `Brain surgery is hard`,
                `Why there's something it is like to be conscious; physical descriptions of the brain don't seem to capture the felt quality of experience; argued by David Chalmers (1995) to be a genuine theoretical problem, not just incomplete neuroscience`,
                `Consciousness doesn't exist`,
                `A neurological disease`,
              ],
              correctIndex: 1,
              explanation: `Chalmers's framing of the hard problem has shaped much of consciousness research since 1995. Materialists argue it's a gap in current understanding. Idealists argue it's a fundamental category difference.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does "falsifiability" mean?`,
              options: [
                `Lies in science`,
                `Whether a claim can, in principle, be proven wrong by evidence; Karl Popper argued this separates science from non-science; materialism is highly falsifiable; simulation hypothesis is questionably falsifiable`,
                `Statistical analysis`,
                `Government regulation`,
              ],
              correctIndex: 1,
              explanation: `If a claim can't be proven wrong by any possible evidence, it's not a scientific claim. This doesn't make non-falsifiable claims worthless, but it does place them outside science.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are the three positions in this lesson considered serious rather than fringe?`,
              options: [
                `Anyone can believe anything`,
                `All three are actively defended by working physicists and academic philosophers; each has detailed arguments and addresses different aspects of cosmic questions; reasonable, well-informed people disagree`,
                `They're all true`,
                `Only materialism is serious`,
              ],
              correctIndex: 1,
              explanation: `The lesson isn't picking between "real science" and "weird philosophy." It's picking between three positions that academic professionals actively defend. The disagreement is genuine.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All three positions are equal in their scientific track record.`,
              correctAnswer: false,
              explanation: `False. Materialism has produced essentially all of modern technology and most predictive understanding of nature. Idealism, despite philosophical sophistication, has not produced equivalent practical successes. Simulation hypothesis is too new for a track record. Scientific success isn't the only consideration, but it isn't zero either.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone confidently says "Science has PROVED materialism is true." Based on this lesson, what should you notice?`,
              options: [
                `"Yes, science has settled it"`,
                `"Science has produced massive practical success within a materialist framework, which is real evidence. But it hasn't 'proved' materialism in the strong sense. The hard problem of consciousness remains genuinely unsolved. Serious philosophers and physicists still defend non-materialist positions. The honest framing is: materialism is the best-supported current framework for predicting physical phenomena; whether it's the final answer about what reality fundamentally IS remains debated."`,
                `"All science is wrong"`,
                `"Materialism is fake"`,
              ],
              correctIndex: 1,
              explanation: `Real cosmic-thinking calibration. Honor the genuine successes of materialism. Avoid the overstatement that "science has proved it" definitively. Recognize genuine ongoing debate. This is mature engagement with hard questions.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you assume about what the universe fundamentally is? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position did you find yourself emotionally drawn to vs intellectually convinced by? Were they the same? What does that reveal?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone comfortable holding cosmic questions without rushing to answers, what does that change about how you engage with hard questions in general?` },
            { id: `reflect-application`, category: `Application`, prompt: `How does your current position on what the universe is shape (or not shape) how you live? Does the answer to this question matter practically?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there positions on the nature of reality the lesson didn't cover? What's missing? Religious cosmologies? Indigenous knowledge systems? Process philosophy?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent or adult: what do they think the universe fundamentally is? Have they ever changed their view? What changed it?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Cosmic thinking shapes how you engage with every other question. Two paths.`,
          familyActivity: {
            title: `The Family Cosmic Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about the three positions. Ask each adult: what do they think the universe fundamentally is? Material? Mental? Computational? Something else? Most adults haven't been asked this question explicitly. The conversation often reveals that family members hold positions they've never named, sometimes positions that contradict their stated worldviews. There's no goal of agreement. The point is that this is a question worth asking, and your family probably never has.`,
          },
          projectOption: {
            title: `Stargazing With Philosophy, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Find a dark place near you (ideally with adult supervision and minimal light pollution). Go outside at night and look up at the sky 4-5 times across the two weeks. Each time, spend at least 30 minutes just looking. Use a star map or app (Stellarium is free) to identify what you're seeing. After the two weeks, write 1,000 words combining what you saw with reflection on this lesson's question. Looking at actual stars while thinking about cosmology connects abstract ideas to embodied experience. Most adults never do this. It changes how you hold cosmic questions.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Stargazing with reflection is genuinely transformative.`,
          },
          identityQuestion: `If you spend your life genuinely engaging with cosmic questions instead of accepting whatever framework is handed to you, who does that make you?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious positions on what the universe is, regardless of which I currently prefer.`,
            `A person who treats cosmic questions with curiosity rather than false certainty.`,
            `Someone willing to hold "I don't know" as a real answer to genuinely hard questions.`,
          ],
          saveKey: `identity_responses_cs_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. First Cosmos lesson done. You can now articulate three serious positions on what the universe fundamentally is; recognize what's actually observed vs theoretically interpreted; apply falsifiability as a tool for distinguishing science from non-science; and engage with the hard problem of consciousness. Most adults have never thought carefully about these questions. You have. Next time we get into the most surprising physics discovery of the 20th century: the speed of light isn't just fast, it's woven into the structure of spacetime. Einstein's relativity, GPS satellites, and what it means that time itself bends. Case Study format. See you among the stars. — Nova`,
          badge: `cosmos-questioner`,
          badgeName: `Cosmos Questioner`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious positions on the fundamental nature of reality (materialism, idealism, simulation)`,
            `Knows basic cosmic observations: 93B light-year observable universe, 13.8B year age, accelerating expansion`,
            `Recognizes the hard problem of consciousness as a genuine philosophical problem`,
            `Applies falsifiability as a tool for distinguishing science from non-science`,
            `Can engage with cosmic-scale questions with calibrated confidence`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: The Speed of Light & Spacetime`,
            hook: `Einstein 1905. Time isn't universal. GPS satellites have to account for it. Three real scenarios where relativity changes everything.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
