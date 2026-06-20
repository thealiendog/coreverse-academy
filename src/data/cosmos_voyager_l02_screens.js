// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L02 — The Speed of Light & Spacetime
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS PS4, Coreverse Original — Special & General Relativity
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: MATCHING GAME (relativistic effects → experimental confirmations)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l02-v1";

const COSMOS_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-02`,
      title: `The Speed of Light & Spacetime`,
      duration: 35,
      xpReward: 75,
      badge: `spacetime-detective`,
      badgeName: `Spacetime Detective`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, Einstein figured out in 1905 that the speed of light is constant for all observers — and that meant time couldn't be. Time dilation, length contraction, the relativity of simultaneity: these are real, measured, and built into every GPS device. This lesson is the actual physics, not the popular mythology.`,
          headline: `The Speed of Light & Spacetime`,
          subtitle: `One strange fact rewrote physics. Today we follow the evidence.`,
          visual: `/voyager-assets/cosmos/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Problem Before Einstein`,
          paragraphs: [
            `In the 1860s, a Scottish physicist named James Clerk Maxwell figured out the mathematical rules for electricity and magnetism. His equations predicted that light is a kind of electromagnetic wave traveling at a specific speed: about 299,792,458 meters per second. Maxwell's equations were spectacularly successful at explaining nearly everything known about electricity and magnetism. They still are. They're the basis of essentially all modern electronic technology.`,
            `But Maxwell's equations created a puzzle. If light is a wave, what is it a wave IN? Sound waves travel through air. Water waves travel through water. Physicists in the late 1800s assumed light must travel through some invisible medium filling all of space, which they called the "luminiferous ether." This sounds strange now, but at the time it was a reasonable guess. Waves seemed to need something to wave in.`,
            `In 1887, two American physicists named Albert Michelson and Edward Morley designed an experiment to detect Earth's motion through this ether. Their reasoning: as Earth orbits the Sun, it should be moving through the ether, like a ship sailing through water. Light traveling along Earth's motion should appear slightly slower than light traveling perpendicular to it. They built an extremely precise instrument and measured. The result: no difference. None. Within experimental precision, the speed of light was exactly the same in every direction. The ether, if it existed, was undetectable.`,
          ],
          image: `/voyager-assets/cosmos/l02-s1-maxwell.webp`,
          imageCaption: `Maxwell's equations predicted light's speed. Michelson-Morley couldn't find what light "waved in."`,
          vocab: [
            {
              word: `Michelson-Morley experiment`,
              definition: `1887 experiment that tried to detect Earth's motion through the supposed luminiferous ether by measuring whether light moved at different speeds in different directions. Found no difference. One of the most famous "null results" in physics.`,
              audioPrompt: `The Michelson-Morley experiment is from 1887, {name}. Albert Michelson and Edward Morley built an extremely precise instrument to test whether Earth's motion through the assumed luminiferous ether affected the speed of light. Their reasoning made sense: if light is a wave in something, and Earth moves through that something, light traveling with Earth's motion should appear slower than light traveling perpendicular to it. They measured carefully. They found no difference. None. This null result became one of the most famous in physics history. It told us either there is no ether, or our entire model of light needed rewriting. Einstein chose the second option.`,
            },
            {
              word: `luminiferous ether`,
              definition: `The hypothetical invisible medium that 19th-century physicists assumed light traveled through, by analogy with sound waves traveling through air. The Michelson-Morley experiment in 1887 found no evidence of it.`,
              audioPrompt: `The luminiferous ether was the hypothetical invisible medium that 19th-century physicists assumed light must travel through, {name}. Sound waves travel through air. Water waves travel through water. Physicists in the late 1800s reasoned that light waves must travel through something too, and they called it the luminiferous ether. It sounds strange now, but at the time it was a reasonable inference. Waves seemed to need something to wave in. In 1887, Albert Michelson and Edward Morley designed an experiment to detect Earth's motion through this ether. If it existed, light traveling along Earth's direction of motion should appear slightly slower than light traveling perpendicular to it. They found no difference. None. The ether, if it existed, was completely undetectable.`,
            },
            {
              word: `Maxwell's equations`,
              definition: `The mathematical rules for electricity and magnetism developed by James Clerk Maxwell in the 1860s. They predicted that light is an electromagnetic wave traveling at a specific speed and remain the basis of essentially all modern electronic technology.`,
              audioPrompt: `Maxwell's equations are the mathematical rules for electricity and magnetism developed by Scottish physicist James Clerk Maxwell in the 1860s, {name}. His equations predicted that light is a kind of electromagnetic wave traveling at a specific speed: about 299,792,458 meters per second. Maxwell's equations were spectacularly successful at explaining nearly everything known about electricity and magnetism. They still are. They are the basis of essentially all modern electronic technology. But they created a puzzle. If light is a wave, what is it a wave in? That question led physicists to propose the luminiferous ether, and eventually led Michelson and Morley to their famous null result in 1887, and Einstein to his revolutionary principle of 1905.`,
            }
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Einstein's 1905 Leap`,
          paragraphs: [
            `In 1905, a 26-year-old patent clerk in Switzerland named Albert Einstein published four papers. Any one of them would have been a career-defining contribution to physics. Together they became known as his "miracle year." One of them was titled "On the Electrodynamics of Moving Bodies." It contained what we now call the special theory of relativity.`,
            `Einstein's starting point was strange. Instead of trying to explain why Michelson-Morley found no ether, he simply accepted the result as a fundamental fact about the universe: the speed of light is the same for every observer, no matter how they're moving. He elevated this to a principle of nature. Then he asked what the rest of physics would have to look like if this principle were true.`,
            `The answer was that almost everything we thought we knew about time and space was wrong. If the speed of light is the same for everyone, then time itself has to be different for observers moving at different speeds. So does space. Moving clocks tick slower than stationary ones. Moving rulers contract along the direction of motion. Events that happen at the same time for one observer can happen at different times for another observer. These weren't optical illusions. They were how time and space really worked.`,
            `Einstein's framework was confirmed by experiment after experiment in the decades that followed. By the mid-20th century, special relativity was as well-tested as any theory in physics. Today, its predictions are confirmed every day by particle accelerators, GPS satellites, and the basic functioning of nuclear reactors.`,
          ],
          image: `/voyager-assets/cosmos/l02-s2-einstein.webp`,
          imageCaption: `Einstein in 1905: accept the strange fact as fundamental; rewrite physics from there.`,
          vocab: [
            {
              word: `special relativity`,
              definition: `Einstein's 1905 theory describing how time, space, mass, and energy behave for observers moving at constant velocities. Predicts time dilation, length contraction, mass-energy equivalence (E=mc²), and a universal speed limit (light speed).`,
              audioPrompt: `Special relativity is Einstein's 1905 theory, {name}. It describes how time, space, mass, and energy behave for observers moving at constant velocities relative to each other. The theory rests on two principles: the laws of physics are the same for all observers in uniform motion, and the speed of light is the same for all observers. From those two principles, Einstein derived predictions that sounded impossible: moving clocks tick slower, moving rulers contract, mass and energy are interchangeable (E=mc²), and nothing can travel faster than light. Every one of these predictions has been confirmed by experiment. Special relativity is one of the most thoroughly tested theories in all of physics.`,
            },
            {
              word: `miracle year`,
              definition: `The year 1905, in which Albert Einstein published four papers, each of which would have been a career-defining contribution to physics. One contained the special theory of relativity; others addressed the photoelectric effect, Brownian motion, and mass-energy equivalence.`,
              audioPrompt: `Miracle year refers to 1905, the year in which Albert Einstein published four papers, {name}. Any one of them would have been a career-defining contribution to physics. Together they became known as his miracle year. Einstein was 26 years old and working as a patent clerk in Switzerland. One paper was titled On the Electrodynamics of Moving Bodies and contained what we now call the special theory of relativity. Einstein's starting point was to accept the strange result of the Michelson-Morley experiment as a fundamental fact: the speed of light is the same for every observer, no matter how they are moving. From that single principle, he derived consequences that rewrote physics: moving clocks tick slower, moving rulers contract, time itself is different for observers moving at different speeds.`,
            },
            {
              word: `length contraction`,
              definition: `Special relativity's prediction that objects moving at high speeds are shorter along the direction of motion, as measured by a stationary observer. A companion effect to time dilation, derived from the same principle that the speed of light is constant for all observers.`,
              audioPrompt: `Length contraction is one of the predictions of Einstein's special relativity, {name}. Moving rulers contract along the direction of motion, as measured by a stationary observer. This is a companion effect to time dilation, and both follow from the same principle: the speed of light is the same for every observer, no matter how they are moving. At everyday speeds, the contraction is so tiny it is unmeasurable. At speeds close to light, it becomes dramatic. An object moving at 90 percent of light speed would appear, to a stationary observer, to be less than half its rest length along the direction of travel. These predictions are not optical illusions. They are how space and time really work, confirmed by experiment after experiment in the decades following Einstein's 1905 paper.`,
            }
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Time Dilation, And Why It's Real`,
          paragraphs: [
            `The most surprising prediction of special relativity is time dilation. Moving clocks really do tick more slowly than stationary ones. The effect is tiny at everyday speeds. Walking down the street, your watch runs about a trillionth of a second slower per year compared to someone sitting still. You'd never notice. At speeds close to the speed of light, the effect becomes enormous.`,
            `In 1971, physicists Joseph Hafele and Richard Keating placed atomic clocks on commercial airliners and flew them around the world in both directions. They compared the flying clocks to identical clocks that stayed at the U.S. Naval Observatory. The flying clocks showed measurable time differences from the stationary clocks. The differences matched Einstein's predictions to within experimental precision. Atomic clocks, real airline flights, real measurements: time dilation was directly confirmed.`,
            `Another confirmation comes from cosmic ray muons. Muons are subatomic particles that decay quickly. In a lab at rest, a muon survives about 2.2 microseconds before decaying. When cosmic rays hit Earth's upper atmosphere, they create muons traveling close to the speed of light. By their internal clocks, these muons should decay before reaching the ground. But Earth-based detectors regularly observe them at the surface. From Earth's frame, time runs slower for the fast-moving muons, so they survive long enough to reach us. The cosmic ray muon observations are confirmed millions of times per day by detectors around the world.`,
          ],
          image: `/voyager-assets/cosmos/l02-s3-time.webp`,
          imageCaption: `Hafele-Keating 1971: atomic clocks on planes confirmed time dilation directly.`,
          vocab: [
            {
              word: `time dilation`,
              definition: `Special relativity's prediction that moving clocks tick more slowly than stationary ones, as measured by a stationary observer. Confirmed by atomic clocks on aircraft (Hafele-Keating 1971), cosmic ray muons, and GPS satellites.`,
              audioPrompt: `Time dilation is special relativity's prediction that moving clocks tick more slowly than stationary ones, {name}. As measured by a stationary observer, a clock moving past you ticks slower than your own clock. The effect is tiny at everyday speeds. Walking around, your watch runs about a trillionth of a second slower per year than someone sitting still. At speeds close to light, the effect becomes huge. A clock on a spacecraft traveling at 90% of light speed would tick less than half as fast as our clocks on Earth. Time dilation has been confirmed directly: Hafele and Keating in 1971 flew atomic clocks on airliners and measured the predicted differences. Cosmic ray muons reach Earth's surface only because time runs slowly for them at near-light speed.`,
            },
            {
              word: `Hafele-Keating experiment`,
              definition: `1971 experiment in which physicists placed atomic clocks on commercial airliners and flew them around the world. The flying clocks showed measurable time differences from identical clocks that stayed at the U.S. Naval Observatory, matching Einstein's predictions.`,
              audioPrompt: `The Hafele-Keating experiment is from 1971, {name}. Physicists Joseph Hafele and Richard Keating placed atomic clocks on commercial airliners and flew them around the world in both directions. They then compared the flying clocks to identical clocks that had stayed at the U.S. Naval Observatory. The flying clocks showed measurable time differences from the stationary clocks. The differences matched Einstein's predictions to within experimental precision. Real airline flights, real atomic clocks, real measurements: time dilation was directly confirmed. This is one of the most direct tests of special relativity ever performed. The effect is tiny at airplane speeds but the atomic clocks were precise enough to measure it. At speeds close to light, the same effect becomes enormous.`,
            },
            {
              word: `cosmic ray muons`,
              definition: `Subatomic particles created when cosmic rays hit Earth's upper atmosphere, traveling near the speed of light. They reach Earth's surface despite decaying in 2.2 microseconds in a lab, because time runs slowly for them at near-light speed: a direct confirmation of time dilation.`,
              audioPrompt: `Cosmic ray muons are subatomic particles that confirm time dilation every day, {name}. Muons are created when cosmic rays hit Earth's upper atmosphere. They travel close to the speed of light toward the surface. In a lab at rest, a muon survives about 2.2 microseconds before decaying. By their internal clocks, cosmic ray muons should decay before reaching the ground. But Earth-based detectors regularly observe them at the surface. From Earth's frame of reference, time runs slower for the fast-moving muons, so they survive long enough to reach us. The cosmic ray muon observations are confirmed millions of times per day by detectors around the world. Nature runs this relativity experiment continuously, and the result always matches Einstein's prediction.`,
            }
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `GPS Needs Einstein To Work`,
          paragraphs: [
            `The clearest everyday proof of relativity sits in your pocket. Every GPS-enabled phone, every car navigation system, every package being tracked across the country depends on a constellation of satellites orbiting roughly 20,000 km above Earth. These satellites carry atomic clocks. GPS works by measuring tiny differences in when signals arrive from different satellites. To deliver accuracy of a few meters on the ground, the satellite clocks must be synchronized to better than 30 nanoseconds.`,
            `Two relativistic effects fight each other in the GPS system. First, special relativity: the satellites are moving fast (about 14,000 km/hour relative to Earth's surface), so their clocks tick slowly by Einstein's 1905 prediction. The effect: about 7 microseconds slower per day. Second, general relativity (Einstein's 1915 extension of his theory to include gravity): the satellites are higher up in Earth's gravitational field than we are, where time flows slightly faster. The effect: about 45 microseconds faster per day.`,
            `The combined relativistic correction is about 38 microseconds per day. If this correction weren't applied, GPS positions would drift by about 11 kilometers per day. Your phone's navigation would be useless within hours. The system works only because the engineers who designed GPS programmed Einstein's relativistic corrections directly into the satellites' clocks. Special and general relativity aren't abstractions. They're running in the technology you use to navigate your daily life.`,
          ],
          image: `/voyager-assets/cosmos/l02-s4-gps.webp`,
          imageCaption: `GPS satellites need a 38 microsecond/day relativistic correction. Without it, GPS fails in hours.`,
          vocab: [
            {
              word: `general relativity`,
              definition: `Einstein's 1915 extension of relativity to include gravity. Describes gravity not as a force but as the curvature of spacetime by mass and energy. Predicts gravitational time dilation: clocks run slower in stronger gravity. Confirmed by GPS satellites, Pound-Rebka 1959, and many other experiments.`,
              audioPrompt: `General relativity is Einstein's 1915 extension of relativity to include gravity, {name}. It is one of the most beautiful theories in physics. General relativity describes gravity not as a force pulling on objects but as the curvature of spacetime by mass and energy. A massive object like Earth curves the spacetime around it. Other objects follow the natural paths through this curved spacetime, which we experience as gravity. One of general relativity's predictions: clocks run slower in stronger gravitational fields. Pound and Rebka confirmed this in 1959 by measuring tiny frequency shifts in a Harvard tower. GPS satellites confirm it every day, because they're higher up in Earth's gravity than we are.`,
            },
            {
              word: `gravitational time dilation`,
              definition: `General relativity's prediction that clocks run slower in stronger gravitational fields. Confirmed by the Pound-Rebka experiment in 1959 and by GPS satellites, which tick faster than ground clocks because they are higher in Earth's gravitational field.`,
              audioPrompt: `Gravitational time dilation is general relativity's prediction that clocks run slower in stronger gravitational fields, {name}. The satellites in the GPS system are about 20,000 kilometers above Earth, higher up in Earth's gravitational field than we are, where time flows slightly faster. The effect adds about 45 microseconds per day to the satellite clocks. At the same time, the satellites are moving fast, which slows their clocks by about 7 microseconds per day due to special relativity. The combined correction is about 38 microseconds per day. If this correction were not applied, GPS positions would drift by about 11 kilometers per day. Your phone's navigation would be useless within hours. Gravitational time dilation was first confirmed in 1959 by Pound and Rebka, who measured tiny frequency shifts in a Harvard tower.`,
            },
            {
              word: `atomic clocks`,
              definition: `Extremely precise timekeeping instruments that use the vibrations of atoms to measure time. Used in GPS satellites and in the Hafele-Keating experiment to directly confirm the time dilation predicted by special and general relativity.`,
              audioPrompt: `Atomic clocks are the most precise timekeeping instruments humans have built, {name}. They use the vibrations of atoms to measure time with extraordinary accuracy. GPS satellites carry atomic clocks. GPS works by measuring tiny differences in when signals arrive from different satellites. To deliver accuracy of a few meters on the ground, the satellite clocks must be synchronized to better than 30 nanoseconds. Atomic clocks make this possible. They were also used in the Hafele-Keating experiment in 1971, which directly confirmed time dilation by flying clocks on commercial airliners and measuring the tiny predicted differences against clocks at the U.S. Naval Observatory. Without atomic clocks, we would not have been able to confirm Einstein's predictions as precisely as we have.`,
            }
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Spacetime: One Thing, Not Two`,
          paragraphs: [
            `In 1908, three years after Einstein's special relativity paper, a mathematician named Hermann Minkowski gave a lecture that changed how physicists thought about the universe. He pointed out that Einstein's theory implied something deeper than just "moving clocks tick slowly." It implied that space and time are not separate. They are unified into a single four-dimensional structure called spacetime.`,
            `Before relativity, physicists treated time as a universal background. Everyone everywhere shared the same time, and the universe's drama played out in three dimensions of space against this fixed temporal backdrop. After Einstein, this picture was wrong. Different observers slice spacetime into "space" and "time" differently. Two events that one observer considers simultaneous, another observer can consider as happening in sequence. There's no universal "now" stretching across the cosmos. Each observer carves up spacetime according to their own motion.`,
            `Minkowski's insight was that the things ALL observers can agree on aren't separately "spatial distances" and "time intervals." They are combined quantities in four-dimensional spacetime. The relativistic notion of spacetime feels strange because our brains evolved to navigate a slow, low-gravity environment where the differences are imperceptible. But at high speeds, near strong gravity, or with precision instruments, the unified spacetime structure of reality becomes visible. The universe is not "space, and also time." It's spacetime. One thing.`,
          ],
          image: `/voyager-assets/cosmos/l02-s5-spacetime.webp`,
          imageCaption: `Minkowski 1908: space and time are one four-dimensional structure. Spacetime.`,
          vocab: [
            {
              word: `spacetime`,
              definition: `The unified four-dimensional structure (three space dimensions plus one time dimension) that special and general relativity treat as fundamental. Different observers split spacetime into "space" and "time" differently. Universal "now" does not exist.`,
              audioPrompt: `Spacetime is the unified four-dimensional structure that relativity treats as fundamental, {name}. Three dimensions of space plus one dimension of time, woven together into a single fabric. Hermann Minkowski introduced this view in 1908, three years after Einstein's special relativity paper. The strange consequence: different observers split spacetime into space and time differently, depending on their motion. Events you consider simultaneous, another observer can consider as happening in sequence. There is no universal now stretching across the cosmos. Each observer carves up spacetime according to their own motion. Once you accept this, the universe stops being "space, and also time." It becomes one thing: spacetime.`,
            },
            {
              word: `Hermann Minkowski`,
              definition: `Mathematician who, in 1908, pointed out that Einstein's special relativity implied space and time are unified into a single four-dimensional structure he called spacetime. His framework became the standard way physicists think about relativity.`,
              audioPrompt: `Hermann Minkowski was a mathematician who gave a lecture in 1908 that changed how physicists think about the universe, {name}. Three years after Einstein's special relativity paper, Minkowski pointed out that the theory implied something deeper than moving clocks ticking slowly. It implied that space and time are not separate. They are unified into a single four-dimensional structure, which he called spacetime. Before relativity, physicists treated time as a universal background. Everyone everywhere shared the same time. After Einstein and Minkowski, this picture was wrong. Different observers slice spacetime into space and time differently, depending on their motion. Two events that one observer considers simultaneous, another observer can consider as happening in sequence. There is no universal now.`,
            },
            {
              word: `universal now`,
              definition: `The pre-relativity assumption that a single moment of time stretches across the entire cosmos and is shared by all observers. Special relativity and Minkowski's spacetime framework showed this concept does not exist: each observer carves up spacetime differently.`,
              audioPrompt: `Universal now is the intuitive idea that a single moment of time stretches across the entire cosmos and is shared by all observers everywhere, {name}. Before relativity, physicists treated time as a fixed backdrop shared by all. This seems obvious from everyday experience. But Einstein's special relativity showed it is wrong. Different observers, moving at different speeds, slice the four-dimensional structure of spacetime into space and time differently. Two events that one observer considers simultaneous, another observer can consider as happening in sequence. There is no fact of the matter about what is happening right now across the universe. Hermann Minkowski formalized this in 1908, introducing the concept of spacetime as a unified four-dimensional structure. Universal now does not exist. The universe is spacetime.`,
            }
          ],
        },

        // ───── MATCHING GAME ──────────────────────────────────────────────────
        {
          id: `l02-matching`,
          type: `matching`,
          headline: `Match each relativistic effect to the experiment that confirmed it`,
          intro: `{name}, here's where we test you on the evidence. Each effect on the left was predicted by Einstein. Each experiment on the right is a real test that confirmed it. Match them. Tap a term on the left, then tap its experimental partner on the right. Get all five right and you've matched the prediction to the proof.`,
          pairs: [
            {
              id: `pair-1`,
              left: `Speed of light is constant for all observers`,
              right: `Michelson-Morley experiment (1887): no difference in light speed regardless of Earth's motion`,
            },
            {
              id: `pair-2`,
              left: `Time dilation (moving clocks tick slower)`,
              right: `Hafele-Keating experiment (1971): atomic clocks on commercial airliners measurably out of sync with clocks on the ground`,
            },
            {
              id: `pair-3`,
              left: `Time dilation at high speeds (extreme version)`,
              right: `Cosmic ray muons reaching Earth's surface: they should decay before arriving, but time slows for them at near-light speed`,
            },
            {
              id: `pair-4`,
              left: `Mass-energy equivalence (E=mc²)`,
              right: `Nuclear reactors and the Sun's energy: small amounts of mass converting to enormous amounts of energy as Einstein predicted`,
            },
            {
              id: `pair-5`,
              left: `Combined special + general relativity time effects`,
              right: `GPS satellites: 38 microsecond per day correction required, or positions drift by 11 km per day`,
            },
          ],
          reflectionPrompt: `Which pairing surprised you most? Which one feels most concrete proof that Einstein was right?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What was the surprising result of the Michelson-Morley experiment in 1887?`,
              options: [
                `They detected the ether moving rapidly`,
                `They found no difference in the speed of light regardless of Earth's direction of motion through space; one of the most famous "null results" in physics`,
                `They proved light doesn't exist`,
                `They invented GPS`,
              ],
              correctIndex: 1,
              explanation: `The null result told physicists that either the ether didn't exist, or our entire model of light needed rewriting. Einstein chose the second option.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What did Einstein take as a fundamental principle in 1905?`,
              options: [
                `That ether exists`,
                `That the speed of light is the same for every observer, regardless of their motion; he accepted this strange result as a principle of nature and rewrote physics from there`,
                `That light doesn't exist`,
                `That time is the same everywhere`,
              ],
              correctIndex: 1,
              explanation: `Einstein's move was to elevate the strange experimental fact to a fundamental principle and then derive the consequences. The consequences rewrote physics.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is time dilation?`,
              options: [
                `Clocks running fast at speed`,
                `Moving clocks tick more slowly than stationary ones, as measured by a stationary observer; effect is tiny at everyday speeds but enormous at speeds close to light`,
                `Time stopping in deep space`,
                `Time only flowing forward`,
              ],
              correctIndex: 1,
              explanation: `At everyday speeds, your watch runs about a trillionth of a second slower per year compared to someone sitting still. At 90% of light speed, time runs less than half as fast.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How did Hafele and Keating directly confirm time dilation in 1971?`,
              options: [
                `They watched stars`,
                `They placed atomic clocks on commercial airliners and flew them around the world; the flying clocks showed measurable time differences from identical clocks that stayed at the U.S. Naval Observatory; differences matched Einstein's predictions`,
                `They used quantum computers`,
                `They split atoms`,
              ],
              correctIndex: 1,
              explanation: `Real airline flights, real atomic clocks, real measurements. The Hafele-Keating experiment is one of the most direct confirmations of special relativity.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why do cosmic ray muons confirm time dilation?`,
              options: [
                `They glow in the dark`,
                `Muons normally decay in 2.2 microseconds in a lab; cosmic ray muons travel near light speed, so by their internal clocks they should decay before reaching Earth's surface, but they do reach us because time runs slowly for them; observed millions of times per day`,
                `They have magnets`,
                `They're invisible`,
              ],
              correctIndex: 1,
              explanation: `Cosmic ray muons are nature's free relativity experiment. Their survival to Earth's surface is impossible without time dilation. They confirm Einstein every day.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does GPS need relativistic corrections?`,
              options: [
                `Because of weather`,
                `Two effects: special relativity slows satellite clocks (~7 microseconds/day slower) because they move fast; general relativity speeds them up (~45 microseconds/day faster) because they're higher in Earth's gravity; combined correction is ~38 microseconds/day or positions drift 11 km/day`,
                `Because of magnetism`,
                `Because GPS uses radio waves`,
              ],
              correctIndex: 1,
              explanation: `GPS works because engineers programmed Einstein's corrections into the satellite clocks. Without the corrections, your phone's navigation would be useless within hours. Real relativity, every day.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is general relativity?`,
              options: [
                `A loose theory of motion`,
                `Einstein's 1915 extension of relativity to include gravity; describes gravity not as a force but as the curvature of spacetime by mass and energy; predicts gravitational time dilation; confirmed by GPS and the Pound-Rebka experiment`,
                `Just another name for special relativity`,
                `A theory about magnetism`,
              ],
              correctIndex: 1,
              explanation: `General relativity is special relativity extended to include gravity. Mass and energy curve spacetime; objects follow natural paths through that curvature, which we experience as gravity. One of the most beautiful theories in physics.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What did Minkowski's 1908 insight reveal about space and time?`,
              options: [
                `That they're separate and unrelated`,
                `That they're unified into a single four-dimensional structure called spacetime; different observers split spacetime into "space" and "time" differently; there is no universal "now"`,
                `That time doesn't exist`,
                `That space is flat`,
              ],
              correctIndex: 1,
              explanation: `Minkowski showed that Einstein's special relativity implied something deeper than "moving clocks tick slowly." It implied space and time are aspects of one structure. The universe is spacetime, not "space and also time."`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All five predictions tested in this lesson have been confirmed by experiment.`,
              correctAnswer: true,
              explanation: `True. Constant speed of light (Michelson-Morley), time dilation (Hafele-Keating, muons), E=mc² (nuclear reactors), and combined relativistic effects (GPS) have all been measured directly. Special and general relativity are among the most thoroughly tested theories in physics.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Einstein's theories are just theories—maybe they're wrong about time and space." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, it's all speculation"`,
                `"In science, 'theory' doesn't mean 'guess.' Special and general relativity have been confirmed by Michelson-Morley, Hafele-Keating, cosmic ray muons, nuclear reactors, GPS satellites needing 38-microsecond/day corrections, the Pound-Rebka experiment, and many others. Every test for over a century has confirmed Einstein's predictions to high precision. That's about as solid as scientific knowledge gets. Future theories may extend or refine relativity, but they will have to reproduce all its successful predictions. The framework is real."`,
                `"Einstein was wrong"`,
                `"Theories aren't real"`,
              ],
              correctIndex: 1,
              explanation: `Real applied physics literacy. "Theory" in science means a framework that has been tested extensively, not a guess. Special and general relativity have passed every experimental test for over a century. They're as well-established as any scientific knowledge.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you assume about time and space? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the five experimental confirmations was hardest to wrap your mind around? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who reflexively asks "how do we know that?" instead of accepting claims, who does that make you over a lifetime of learning?` },
            { id: `reflect-application`, category: `Application`, prompt: `You used GPS today (probably). It worked because engineers built Einstein's predictions into the satellites. Where else in your daily life is physics quietly running that you've never noticed?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could special or general relativity be wrong? What would have to happen for physicists to reject them? What kind of evidence would do it?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one physics fact in your house right now (electronics, GPS, microwave, lightbulb) and trace it back to what physicist or theory makes it work. Most adults can't do this.` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Real relativity runs in technology you use every day. Two paths to make that visible.`,
          familyActivity: {
            title: `The Family Relativity Audit`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about Einstein's relativity. Then walk through your house. Find: anything with GPS (phones, car nav), anything with nuclear or thermal sources (microwaves, smoke detectors with americium, the Sun providing solar power), anything that depends on precise timing across distances (cell phones, the internet, satellite TV). For each, name what physics makes it work. Most adults can't name the physics inside their daily technology. After this conversation, your family can. This is one of the most empowering science conversations a family can have.`,
          },
          projectOption: {
            title: `The GPS Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Pick one specific technology that depends on relativity (GPS is the easiest). Spend 14 days researching how it actually works. Read the Wikipedia article on the Global Positioning System. Watch a few engineer-explainer videos. Then write 1,500 words explaining to a younger sibling or friend: what is GPS, how do the satellites communicate with your phone, why does it need relativity, and what would break if Einstein's corrections weren't applied. Real applied physics literacy. Most adults have never traced this back to first principles. You can, after this project.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Tracing GPS back to Einstein is one of the most satisfying physics-literacy projects available.`,
          },
          identityQuestion: `If you become someone who can see the physics behind everyday technology, what does that change about how you understand the world?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows time and space are not absolute, and can name the experiments that proved it.`,
            `A person who reflexively asks "how do we know that?" before accepting any claim about reality.`,
            `Someone willing to sit with predictions that sound impossible until the evidence settles them.`,
          ],
          saveKey: `identity_responses_cs_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Second Cosmos lesson done. You can now articulate the foundation of special relativity, explain time dilation, name multiple experimental confirmations of Einstein's predictions, understand why GPS needs relativity to function, and recognize that space and time are unified into spacetime. Most adults know "Einstein had a theory" without knowing what it predicts or how we tested it. You know both. Next time we go into the strangest territory in all of physics: the quantum world. Particles that exist in multiple states at once. Experiments that seem to depend on observation. And the difference between real quantum mechanics and the "quantum healing" content that fills the internet. Source Evaluation format. See you among the stars. — Nova`,
          badge: `spacetime-detective`,
          badgeName: `Spacetime Detective`,
          xpEarned: 75,
          competencies: [
            `Can articulate the foundation of special relativity (constant speed of light for all observers)`,
            `Knows the Michelson-Morley null result and its historical significance`,
            `Understands time dilation and can name experimental confirmations (Hafele-Keating, cosmic ray muons)`,
            `Knows why GPS needs both special and general relativistic corrections (38 microseconds/day)`,
            `Understands spacetime as a unified four-dimensional structure (Minkowski 1908)`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Quantum Weirdness — Real Physics vs Pseudoscience`,
            hook: `Particles in multiple states at once. The role of measurement. And how to tell real quantum mechanics from "quantum healing" content. Three sources, your evaluation.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matchingScreen = l.screens.find((s) => s.type === `matching`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, matching game w/ ${matchingScreen?.pairs?.length ?? 0} pairs, ${quiz} quiz, ${reflect} reflection`
  );
}
