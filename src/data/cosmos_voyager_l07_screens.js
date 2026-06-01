// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L07 — Dark Matter & Dark Energy: 95% Of The Universe
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS ESS1, Coreverse Original — Cosmological Composition
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (new particles vs modified gravity vs new physics)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l07-v1";

const COSMOS_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-07`,
      title: `Dark Matter & Dark Energy: 95% Of The Universe`,
      duration: 35,
      xpReward: 75,
      badge: `dark-detective`,
      badgeName: `Dark Detective`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a fact that should be more famous than it is. Everything you can see in the universe—every star, every planet, every galaxy, every cloud of gas, every atom in your body—makes up only about 5% of the universe's energy content. The other 95% is divided between two completely mysterious things called dark matter and dark energy. We have strong indirect evidence both exist. We have essentially no idea what either of them actually is. Today we look at the evidence that pointed astronomers toward these conclusions, and then build an argument about what's most likely going on. Three serious positions. Real disagreement among working physicists. Your call.`,
          headline: `Dark Matter & Dark Energy`,
          subtitle: `95% of the universe is something we don't understand. Three competing positions.`,
          visual: `/voyager-assets/cosmos/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The First Hint: Galaxy Rotation`,
          paragraphs: [
            `In 1933, a Swiss astronomer named Fritz Zwicky observed the Coma galaxy cluster. He measured how fast the galaxies were moving and used the laws of physics to calculate how much mass would be needed to gravitationally hold the cluster together. The answer was startling. The cluster needed about 400 times more mass than the visible galaxies could account for. Zwicky called the missing component "dunkle Materie" (dark matter). For decades, almost no one followed up on his work.`,
            `In the 1970s, American astronomer Vera Rubin and her collaborator Kent Ford studied the rotation of spiral galaxies. Their question: do galaxies rotate the way Newtonian gravity predicts based on their visible mass? The answer was no. Stars near the edges of galaxies moved much faster than they should if only the visible matter were contributing gravity. Rubin and Ford's observations of dozens of galaxies all showed the same pattern. Either galaxies contain enormous amounts of invisible matter, or the laws of gravity are different on galactic scales.`,
            `Rubin's work is now considered foundational to modern cosmology. The pattern she observed has been confirmed in thousands of galaxies. The mass required to fit the rotation curves is roughly six times the mass of all the visible matter. Whatever is producing this gravitational effect, it interacts with regular matter primarily through gravity, not through electromagnetism (which is why we can't see it directly).`,
          ],
          image: `/voyager-assets/cosmos/l07-s1-rubin.webp`,
          imageCaption: `Vera Rubin 1970s: galaxies rotate as if they contain six times more mass than what we can see.`,
          vocab: [
            {
              word: `galaxy rotation curve`,
              definition: `Graph showing how fast stars and gas orbit at various distances from a galaxy's center. Newtonian gravity predicts stars at the outer edges should move slower. Observations consistently show they move at similar speeds. The discrepancy is one of the foundational pieces of evidence for dark matter.`,
              audioPrompt: `A galaxy rotation curve is a graph showing how fast stars and gas orbit at various distances from a galaxy's center, {name}. Newtonian gravity predicts that stars at the outer edges of a galaxy should move slower than stars closer in, because there's less mass interior to their orbit. Vera Rubin and Kent Ford measured these curves carefully in the 1970s using spectroscopic techniques. The result was striking. Stars at the outer edges moved at almost the same speed as stars closer in. This pattern has now been observed in thousands of galaxies. To explain it, either galaxies contain enormous amounts of invisible matter producing extra gravity, or the laws of gravity work differently on galactic scales. Both possibilities are still being investigated.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Other Evidence: Lensing, CMB, Bullet Cluster`,
          paragraphs: [
            `Galaxy rotation curves are not the only evidence for dark matter. Gravitational lensing provides another line of evidence. According to general relativity, mass curves spacetime, and light follows curved paths through curved spacetime. So light from distant galaxies passing near a massive object should bend. We've observed this. The amount of bending around galaxy clusters consistently shows more mass than the visible matter alone can explain. The lensing data agrees with the rotation curves: there's something gravitating that we can't see.`,
            `The cosmic microwave background (from Lesson 4) provides another line. Tiny temperature variations in the CMB encode information about the density of matter in the early universe. The patterns we observe are consistent with a universe whose total matter content is about six times the visible matter. The CMB data alone, completely independent of galaxy rotation curves, points to the same conclusion: there's a lot of matter we can't see.`,
            `The Bullet Cluster, observed in detail starting in 2004, is one of the most striking pieces of evidence. Two galaxy clusters collided. The hot gas (which is most of the normal matter) got slowed down by the collision and bunched up in the middle. The galaxies and dark matter passed through largely unaffected. Gravitational lensing maps show that most of the mass is in the regions where the galaxies passed through, not where the hot gas piled up. This is hard to explain without dark matter being a real substance that doesn't interact strongly with normal matter. Simple modified-gravity theories struggle to reproduce the Bullet Cluster observations.`,
          ],
          image: `/voyager-assets/cosmos/l07-s2-bullet.webp`,
          imageCaption: `Bullet Cluster: visible matter (gas) bunched up; gravitational mass passed through. Strong evidence for dark matter as substance.`,
          vocab: [
            {
              word: `gravitational lensing`,
              definition: `Bending of light around massive objects, predicted by general relativity. Light from distant galaxies passing near a massive foreground object follows curved paths and produces distorted or multiple images. Lets us "weigh" massive objects by how much they bend light.`,
              audioPrompt: `Gravitational lensing is the bending of light around massive objects, {name}. Predicted by Einstein's general relativity in 1915 and first confirmed during a solar eclipse in 1919 by Arthur Eddington. Light from distant galaxies passing near a massive foreground object follows curved paths through curved spacetime. The result is that we see distorted or multiple images of the background galaxy. The amount of distortion tells us how much mass is in the foreground object. This lets us "weigh" galaxies and galaxy clusters by how much they bend light. The masses calculated from lensing consistently exceed the masses we can see in stars and gas. This is one of the most direct lines of evidence for dark matter.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Dark Energy: The Universe Accelerates`,
          paragraphs: [
            `Dark matter explains why galaxies and clusters hold together more tightly than visible matter predicts. Dark energy is something different. In 1998, two competing teams of astronomers were studying distant supernovae to measure how the expansion of the universe was changing over time. Both teams assumed the expansion was slowing down due to gravity. The data showed the opposite. The expansion is accelerating. Something is pushing the universe apart faster, and that something accounts for about 68% of all the energy in the universe.`,
            `The two teams were led by Saul Perlmutter at Lawrence Berkeley National Laboratory and Brian Schmidt and Adam Riess at the High-Z Supernova Search Team. Both teams arrived at the same conclusion independently, which significantly increased confidence in the result. They shared the 2011 Nobel Prize in Physics. The discovery transformed cosmology. The universe doesn't just expand. It expands faster and faster, and the trend will continue indefinitely.`,
            `Whatever is causing the acceleration is now called "dark energy." Unlike dark matter, dark energy doesn't seem to clump in galaxies. It appears to be uniformly distributed throughout space. The simplest mathematical description treats it as a "cosmological constant," a property of empty space itself with constant energy density. Einstein originally added a cosmological constant to his equations in 1917 to make the universe static, then removed it after Hubble's discovery of expansion. Modern observations suggest something like a cosmological constant is real after all.`,
            `What dark energy actually IS remains essentially mysterious. Quantum field theory predicts that empty space should contain enormous amounts of "vacuum energy," but the calculated value disagrees with the observed dark energy density by 120 orders of magnitude. This discrepancy, sometimes called the worst prediction in physics, is one of the biggest open problems in fundamental physics.`,
          ],
          image: `/voyager-assets/cosmos/l07-s3-darkenergy.webp`,
          imageCaption: `Perlmutter, Schmidt, Riess 1998: universe accelerating. Dark energy is 68% of all energy.`,
          vocab: [
            {
              word: `cosmological constant`,
              definition: `Term Einstein originally added to general relativity in 1917. Mathematically equivalent to an energy density in empty space that pushes the universe apart. Currently the simplest model for dark energy. Symbol: Λ (capital lambda). Has caused major theoretical problems because quantum theory predicts vastly different values.`,
              audioPrompt: `The cosmological constant is a term Einstein originally added to his general relativity equations in 1917, {name}. The symbol is capital lambda, Λ. Mathematically, the cosmological constant represents an energy density in empty space that pushes the universe apart. Einstein added it to make the universe static, then removed it after Hubble's 1929 discovery that the universe expands. He reportedly called it his "biggest blunder." After the 1998 discovery that the universe's expansion is accelerating, the cosmological constant returned as the simplest mathematical description of dark energy. The problem is that quantum field theory predicts a vacuum energy density vastly different from the observed value—by 120 orders of magnitude. Reconciling these is one of the biggest open problems in physics.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position Space: WIMP, MOND, And New Physics`,
          paragraphs: [
            `Three serious positions compete on what dark matter (and to some extent dark energy) actually is.`,
            `Position 1: dark matter is real new particles. The most popular candidates have been WIMPs (Weakly Interacting Massive Particles) and axions. These would be particles outside the Standard Model of physics that interact with normal matter primarily through gravity. Massive experiments have been searching for them for decades. The LUX, XENON1T, and successor experiments use enormous tanks of ultra-pure liquid xenon, buried deep underground to shield from cosmic rays, hoping to catch a rare interaction with a passing dark matter particle. So far, none of these experiments have detected anything definitive. The simplest WIMP models have been increasingly disfavored by null results. Axions remain a popular candidate that haven't been ruled out.`,
            `Position 2: gravity behaves differently than we think on large scales. The most developed alternative is MOND (Modified Newtonian Dynamics), proposed by Israeli physicist Mordehai Milgrom in 1983. MOND modifies Newton's laws to predict the observed galaxy rotation curves without needing dark matter. The theory has had surprising successes at galactic scales, including predicting features of individual galaxy rotation curves with no free parameters. MOND struggles at cluster scales and the Bullet Cluster is particularly hard for it to explain. Relativistic extensions of MOND (TeVeS, etc.) exist but haven't solved the cluster problems convincingly.`,
            `Position 3: both dark matter AND dark energy are signs we need genuinely new physics. Maybe dark matter is some combination of particles, primordial black holes, and modified gravity. Maybe dark energy isn't a cosmological constant but a dynamical field. Maybe our current frameworks (general relativity plus the Standard Model) are incomplete in ways that will require fundamentally new theories. The Hubble tension (different measurements of the expansion rate give different values) suggests something may be wrong with the standard cosmological model. New physics might be required.`,
          ],
          image: `/voyager-assets/cosmos/l07-s4-positions.webp`,
          imageCaption: `Three serious positions: WIMP/axion particles, MOND gravity, or genuinely new physics.`,
          vocab: [
            {
              word: `MOND (Modified Newtonian Dynamics)`,
              definition: `Theory proposed by Mordehai Milgrom in 1983 that modifies Newton's laws of gravity at very low accelerations. Predicts galaxy rotation curves without needing dark matter. Successful at galactic scales but struggles at cluster scales and with the Bullet Cluster.`,
              audioPrompt: `MOND stands for Modified Newtonian Dynamics, {name}. Proposed by Israeli physicist Mordehai Milgrom in 1983. The idea: instead of inventing new invisible particles to explain galaxy rotation curves, modify Newton's laws of gravity at very low accelerations. MOND predicts the rotation curves of individual galaxies remarkably well, often with no free parameters. This has impressed even some scientists who don't think MOND is the final answer. MOND has serious problems at cluster scales. The Bullet Cluster is particularly hard for MOND to explain. Relativistic extensions of MOND, called TeVeS and others, exist but haven't solved the cluster problems convincingly. MOND remains a minority position in modern cosmology, but a serious one with real successes.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice the structure of this disagreement. The evidence for "something" is overwhelming: multiple independent lines (rotation curves, lensing, CMB, Bullet Cluster, accelerating expansion) all point to phenomena that can't be explained by visible matter and standard gravity alone. The disagreement is about what's responsible. Real working physicists hold different positions, and the evidence doesn't yet uniquely select one.`,
            `One important framing: the labels "dark matter" and "dark energy" are placeholders. They mean "whatever is producing these gravitational effects." They don't yet point to specific physical entities we understand. Discovering what they are would be one of the biggest scientific breakthroughs of this century. Many physicists believe we will know within a few decades. Some think it might take much longer. A few think the labels themselves may be misleading.`,
            `As you weigh the positions, consider which kinds of evidence weigh more strongly. The Bullet Cluster strongly suggests dark matter is real substance, not modified gravity. MOND's success at galaxy scales suggests something specific is happening with gravity. The 120-orders-of-magnitude discrepancy between predicted and observed dark energy density suggests deep new physics. These pieces of evidence point in different directions. Your argument has to weigh them.`,
            `One last framing: at 12, you're not making this argument as a working cosmologist. You're learning to engage with genuinely open scientific questions where serious people disagree based on evidence. That skill applies to many other contested questions you'll encounter throughout your life. Build a coherent case; respect the alternatives; stay open to evidence that might change your mind.`,
          ],
          image: `/voyager-assets/cosmos/l07-s5-before.webp`,
          imageCaption: `Real cosmologists disagree on this. Different evidence points different directions.`,
          vocab: [
            {
              word: `Hubble tension`,
              definition: `Discrepancy between different measurements of the universe's expansion rate (Hubble constant). Measurements from the early universe (via CMB) give different values than measurements from nearby supernovae. Active research problem; may indicate genuinely new physics.`,
              audioPrompt: `The Hubble tension is a discrepancy between different measurements of the universe's expansion rate, {name}. Measurements from the early universe, derived from the cosmic microwave background, give one value for the Hubble constant. Measurements from nearby supernovae, calibrated by step ladders of distance indicators, give a different value. The two values disagree by about 5 to 10%, which is far more than the measurement uncertainties. This is called the Hubble tension. Either one of the measurements has a systematic error we don't understand, or the standard cosmological model is missing something. Both options are being actively investigated. Many cosmologists think the Hubble tension may eventually point to genuinely new physics beyond the current standard model.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l07-argument-builder`,
          type: `argument-builder`,
          headline: `What Is Dark Matter (And Maybe Dark Energy)?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real working cosmologists actively defend each of these positions based on the same evidence.`,
          positions: [
            {
              id: `new-particles`,
              label: `Dark matter is real new particles (WIMPs, axions, etc.)`,
              summary: `Dark matter is one or more new types of particles outside the Standard Model that interact with normal matter primarily through gravity. WIMPs and axions are the most studied candidates. The Bullet Cluster strongly suggests dark matter is real substance, not modified gravity. Dark energy is most likely a cosmological constant, even if we don't yet understand its quantum-mechanical origin. The mainstream position in modern cosmology; supported by the convergence of evidence from rotation curves, lensing, CMB, and clusters.`,
            },
            {
              id: `modified-gravity`,
              label: `Modified gravity (MOND and relatives) explains the data without new particles`,
              summary: `Instead of inventing invisible particles, modify Newton's laws of gravity at very low accelerations. MOND, proposed by Mordehai Milgrom in 1983, predicts galaxy rotation curves remarkably well, often with no free parameters. Some successes that dark matter struggles to explain. Yes, MOND has problems at cluster scales and with the Bullet Cluster, but those may be solved by relativistic extensions (TeVeS) or future theoretical work. Decades of failed direct detection of dark matter particles is real evidence that we may be looking in the wrong place.`,
            },
            {
              id: `new-physics`,
              label: `Both phenomena point to genuinely new physics beyond current frameworks`,
              summary: `Neither standard dark matter nor MOND will be the final answer. The 120-orders-of-magnitude vacuum energy discrepancy in quantum field theory, the Hubble tension between different expansion measurements, the failure of WIMP searches, and the partial successes of MOND together suggest our current theories (general relativity plus the Standard Model) are deeply incomplete. The right answer is probably something neither standard cold dark matter nor standard MOND has identified. Fundamental new physics is required.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Vera Rubin's 1970s observations of galaxy rotation curves showed stars at galactic edges move much faster than visible matter alone predicts; pattern confirmed in thousands of galaxies; foundational evidence for missing mass or modified gravity.`,
              source: `Rubin & Ford 1970s; subsequent confirmations`,
            },
            {
              id: `e2`,
              text: `The Bullet Cluster (observed 2004+) shows visible gas bunched up after collision while gravitational mass passed through. Hard to explain with modified gravity alone. Strong evidence that dark matter is real substance, not just modified gravity.`,
              source: `Clowe et al. 2006; subsequent Bullet Cluster analyses`,
            },
            {
              id: `e3`,
              text: `MOND, proposed by Milgrom in 1983, predicts galaxy rotation curves remarkably well, often with no free parameters. Some galactic-scale successes that cold dark matter struggles to match.`,
              source: `Milgrom 1983; subsequent MOND research`,
            },
            {
              id: `e4`,
              text: `Decades of direct dark matter detection experiments (LUX, XENON1T, successors) have not found definitive evidence. Simplest WIMP models increasingly disfavored by null results.`,
              source: `LUX, XENON, and successor collaboration papers`,
            },
            {
              id: `e5`,
              text: `Discovery in 1998 that the universe's expansion is accelerating (Perlmutter, Schmidt, Riess; 2011 Nobel Prize) implies dark energy accounts for ~68% of cosmic energy density. Simplest description is a cosmological constant.`,
              source: `Perlmutter et al. 1999; Riess et al. 1998`,
            },
            {
              id: `e6`,
              text: `Quantum field theory predicts vacuum energy density that disagrees with observed dark energy by 120 orders of magnitude. The "worst prediction in physics." Strong sign that fundamental theory is incomplete somewhere.`,
              source: `Weinberg 1989; Carroll 2001 reviews`,
            },
            {
              id: `e7`,
              text: `Hubble tension: different measurements of the expansion rate disagree by 5-10%, far beyond measurement uncertainties. May indicate the standard cosmological model is missing physics.`,
              source: `Riess et al. recent papers; Planck collaboration data`,
            },
            {
              id: `e8`,
              text: `CMB measurements (from independent observations) require a universe with about 5% normal matter, 27% dark matter, 68% dark energy. Multiple independent observations converge on these fractions.`,
              source: `Planck collaboration 2018; WMAP earlier data`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume the broad cosmological framework is roughly correct and just needs refinement. But cosmology has been wrong before, sometimes spectacularly. The pre-Hubble static universe seemed obvious to everyone. The pre-Big Bang steady-state model was defensible until evidence killed it. Maybe the dark matter / dark energy framework is itself a wrong path that history will eventually retire, and the right answer doesn't fit any of the three positions because it requires concepts we haven't even invented yet. How confident should you be in your position when cosmology has a track record of fundamental upheavals?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your position handle the possibility that the entire framework might be wrong in ways we haven't anticipated?`,
          },
          reflectionPrompt: `Looking at the positions you didn't choose, which has the strongest piece of evidence for it? What would change your mind?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What fraction of the universe's energy content is normal matter (the kind we can see)?`,
              options: [
                `About 95%`,
                `About 5%; the other 95% is divided between dark matter (~27%) and dark energy (~68%); the cosmological composition was a complete surprise as it became clear in the late 20th century`,
                `100%`,
                `About 50%`,
              ],
              correctIndex: 1,
              explanation: `Everything you can see (stars, planets, galaxies, gas, atoms in your body) is only ~5% of the universe. The other 95% is two mysterious things we have strong gravitational evidence for but don't fully understand.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Vera Rubin's 1970s observations reveal?`,
              options: [
                `Galaxies are made of glass`,
                `Stars at the outer edges of galaxies move much faster than visible matter alone predicts; pattern confirmed in thousands of galaxies; foundational evidence for dark matter or modified gravity`,
                `The universe is shrinking`,
                `Stars don't exist`,
              ],
              correctIndex: 1,
              explanation: `Rubin and Ford's observations transformed cosmology. The work was undervalued for decades but is now considered foundational to modern understanding. Rubin died in 2016; many feel she should have received the Nobel Prize.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is gravitational lensing, and what does it reveal?`,
              options: [
                `Telescope technology`,
                `Bending of light around massive objects predicted by general relativity; lets us "weigh" galaxies and clusters by how much they bend light; consistently shows more mass than visible matter alone, supporting dark matter`,
                `Just optics`,
                `Photo manipulation`,
              ],
              correctIndex: 1,
              explanation: `Lensing is an independent line of evidence from galaxy rotation curves. Both point to the same conclusion: there's gravitating matter we can't see directly.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is the Bullet Cluster significant evidence for dark matter being substance, not modified gravity?`,
              options: [
                `Because it's pretty`,
                `Two clusters collided; visible gas bunched up in the middle, but gravitational mass (measured by lensing) passed through largely unaffected; hard to explain with modified gravity alone; suggests dark matter is real substance that doesn't interact strongly with normal matter`,
                `Because it's distant`,
                `Because it's named bullet`,
              ],
              correctIndex: 1,
              explanation: `The spatial separation between visible matter (gas) and gravitational mass (where the galaxies and dark matter passed through) is hard to reproduce with MOND. The Bullet Cluster is often cited as a key challenge for modified-gravity theories.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Who discovered dark energy, and when?`,
              options: [
                `Einstein in 1917`,
                `Two competing teams led by Perlmutter, Schmidt, and Riess in 1998; both teams independently found that the universe's expansion is accelerating; shared the 2011 Nobel Prize`,
                `Vera Rubin in 1970`,
                `Hubble in 1929`,
              ],
              correctIndex: 1,
              explanation: `Both teams assumed expansion was slowing; both found it accelerating. Independent confirmation by competing teams significantly increased confidence. The discovery transformed cosmology.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is MOND, and what is its strongest argument?`,
              options: [
                `A meditation practice`,
                `Modified Newtonian Dynamics, proposed by Milgrom in 1983; modifies Newton's laws at very low accelerations; predicts galaxy rotation curves remarkably well, often with no free parameters; serious alternative to dark matter at galactic scales`,
                `A particle accelerator`,
                `A type of galaxy`,
              ],
              correctIndex: 1,
              explanation: `MOND has surprising galactic-scale successes that dark matter struggles to match. It also has serious problems at cluster scales and with the Bullet Cluster. A minority but serious position in modern cosmology.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the cosmological constant?`,
              options: [
                `A type of star`,
                `Term Einstein added to general relativity in 1917 representing an energy density of empty space; he removed it after Hubble's expansion discovery, returned as the simplest description of dark energy after 1998; symbol is Λ; theoretical and observed values disagree by 120 orders of magnitude`,
                `Universal speed limit`,
                `Hubble's constant`,
              ],
              correctIndex: 1,
              explanation: `The cosmological constant is the simplest mathematical description of dark energy. The 120-orders-of-magnitude discrepancy between predicted and observed values is one of the biggest open problems in fundamental physics.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the Hubble tension?`,
              options: [
                `Stress about astronomy`,
                `Discrepancy between different measurements of the universe's expansion rate (Hubble constant); CMB-based vs supernova-based measurements disagree by 5-10%, far beyond measurement uncertainties; may indicate new physics`,
                `A telescope problem`,
                `Distance to the Sun`,
              ],
              correctIndex: 1,
              explanation: `Either one measurement has a systematic error we don't understand, or the standard cosmological model is missing something. Many cosmologists think this tension may eventually point to new physics.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: We know exactly what dark matter and dark energy are.`,
              correctAnswer: false,
              explanation: `False. We have strong indirect evidence that something is producing these gravitational effects. We don't yet know what the "something" actually is. The labels "dark matter" and "dark energy" are placeholders for "whatever is responsible." Real working cosmologists disagree about the underlying physics.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "Dark matter is just a fudge factor that physicists invented to explain away problems with their theory." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, it's fake"`,
                `"Dark matter isn't an arbitrary fudge factor. It's the simplest explanation that fits multiple independent observations: galaxy rotation curves (Rubin 1970s), gravitational lensing, CMB patterns, and the Bullet Cluster. Each of these would independently point to missing mass. The convergence of multiple lines of evidence is the opposite of a fudge factor. Whether it's actually new particles, modified gravity, or new physics is still being investigated, but something real is producing these gravitational effects."`,
                `"All physics is fake"`,
                `"Dark matter is everywhere"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic literacy. The framing "dark matter is a fudge factor" misunderstands how evidence convergence works in science. Multiple independent lines of evidence pointing to the same conclusion is the opposite of a fudge factor. The interpretation is contested; the underlying observations are robust.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know that 95% of the universe is something we don't understand? Has that fact shifted anything about how you think of physics?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position pulled you most strongly? Was it because of the evidence, or because of some aesthetic preference about how nature should work?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can hold "we don't know yet" with curiosity instead of discomfort, what does that change about how you engage with hard questions in general?` },
            { id: `reflect-application`, category: `Application`, prompt: `When you next encounter a confidently stated explanation for some natural phenomenon, ask: how many independent lines of evidence support this? What alternatives have been considered?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the entire dark matter / dark energy framework be wrong? What would the alternative look like? Has cosmology been this wrong before?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one current dark matter or dark energy news story from this year. What's being investigated? Has anything been confirmed or ruled out recently?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Living with "we don't know yet" is one of the most underrated intellectual skills. Two paths.`,
          familyActivity: {
            title: `The "95% Mystery" Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share the fact that 95% of the universe is made of something we don't understand. Ask each adult: did they know this? How does it sit with them? Most adults have not internalized this. Some find it unsettling; others find it exciting. Walk through the evidence: galaxy rotation curves, gravitational lensing, CMB, the Bullet Cluster, the accelerating expansion. The point isn't to "explain" dark matter and dark energy (we can't fully). The point is to model what it looks like to live with genuine scientific mystery while still respecting evidence. This is one of the most underrated conversations a family can have.`,
          },
          projectOption: {
            title: `Track A Dark Matter Experiment, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Pick one currently operating dark matter experiment (LZ at the Sanford Underground Research Facility, XENONnT at Gran Sasso, ADMX for axions, others). Spend 14 days learning about it: what it's looking for, how it works, what it has and hasn't found, who runs it. Write 1,500 words explaining the experiment to a younger sibling or friend in plain language. Real applied experimental physics literacy. Most adults can't name a single dark matter experiment. You'll be able to discuss one in detail.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Tracking an actual experiment for two weeks builds real scientific engagement.`,
          },
          identityQuestion: `If you become someone who can hold cosmic mystery with curiosity instead of false certainty, what does that mean for how you engage with the rest of your life's hard questions?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows 95% of the universe is something we don't understand, and can live with that.`,
            `A person who can articulate three serious positions on dark matter when most adults can't name one.`,
            `Someone willing to engage with genuine scientific mystery instead of rushing to certainty.`,
          ],
          saveKey: `identity_responses_cs_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventh Cosmos lesson done. You can now articulate the evidence for dark matter (rotation curves, lensing, CMB, Bullet Cluster), explain dark energy and the 1998 acceleration discovery, distinguish three serious positions on what dark matter actually is (new particles, modified gravity, new physics), and recognize the Hubble tension and the cosmological constant problem as active research frontiers. Most adults don't know any of this in detail. Next time we go into one of the most contested ideas in modern cosmology: the multiverse. Many-worlds quantum mechanics, eternal inflation, the string landscape, and the question of whether multiverse theories are even scientific. Argument Builder format. See you among the stars. — Nova`,
          badge: `dark-detective`,
          badgeName: `Dark Detective`,
          xpEarned: 75,
          competencies: [
            `Articulates the evidence for dark matter from multiple independent lines (rotation curves, lensing, CMB, Bullet Cluster)`,
            `Understands dark energy's discovery (Perlmutter, Schmidt, Riess 1998) and the cosmological constant`,
            `Distinguishes three serious positions on cosmic composition (new particles, MOND, new physics)`,
            `Knows the Hubble tension and the 120-orders-of-magnitude vacuum energy problem`,
            `Can engage with genuine scientific mystery while respecting evidence convergence`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: The Multiverse`,
            hook: `Many-worlds, eternal inflation, the string landscape, and "this isn't science" skepticism. Four real positions, three to pick from.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L07 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
