// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L13 — Cosmic Scale: From Quarks To The Observable Universe
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS PS1, ESS1, Coreverse Original — Scale and Magnitude
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SEQUENCE GAME (order objects by size from atom to observable universe)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l13-v1";

const COSMOS_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-13`,
      title: `Cosmic Scale: From Quarks To The Observable Universe`,
      duration: 35,
      xpReward: 75,
      badge: `scale-navigator`,
      badgeName: `Scale Navigator`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, you are a specific size. About 1.5 to 1.8 meters tall, give or take. That size doesn't sound particularly notable, but consider: the smallest things in the universe (quarks, the building blocks of protons and neutrons) are roughly 10⁻¹⁸ meters across, a billion-billion-billion times smaller than you. The largest thing we can observe (the observable universe) is roughly 10²⁶ meters across, a hundred-billion-trillion times larger than you. You sit, roughly speaking, in the middle of the cosmic scale on a logarithmic ruler. Today we walk through the scales of nature, then you order ten cosmic objects by size yourself. By the end you'll feel where you actually sit in cosmic geometry.`,
          headline: `Cosmic Scale`,
          subtitle: `From quarks to the observable universe. You sit roughly in the middle.`,
          visual: `/voyager-assets/cosmos/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Cosmic Scales Are Hard To Comprehend`,
          paragraphs: [
            `Human brains evolved to navigate distances roughly between centimeters and kilometers. We have direct intuition for sizes in this range. We can imagine a fingernail (centimeters) and a one-hour walk (kilometers). Outside this range, our intuition breaks down rapidly. A billion miles is conceptually no different from a trillion miles for most people. Both are just "a lot." This is a real limit of evolved cognition, not a moral failing.`,
            `Scientists handle this by working in logarithmic terms. Instead of comparing actual sizes, we compare orders of magnitude. An atom is 10⁻¹⁰ meters. A human is about 10⁰ meters (one meter). An Earth radius is 10⁷ meters. The Sun is 10⁹ meters across. The observable universe is 10²⁶ meters across. Each factor of 10 is one "order of magnitude" larger. Working in orders of magnitude lets us see structure that gets lost when we just write out giant numbers.`,
            `From atom to human is about 10 orders of magnitude. From human to observable universe is about 26 orders of magnitude. These ranges contain almost everything in the universe, and they are vast beyond intuitive grasp. The cosmic ladder we'll climb today spans the entire scale: nuclear physics at the bottom, galactic structure at the top, with everything in between.`,
          ],
          image: `/voyager-assets/cosmos/l13-s1-ladder.webp`,
          imageCaption: `The cosmic ladder spans about 44 orders of magnitude. Human evolved intuition covers a few.`,
          vocab: [
            {
              word: `order of magnitude`,
              definition: `Factor of 10 in size, mass, or other quantity. Used by scientists to compare scales that differ by many factors. Each order of magnitude is a "step" up or down the cosmic ladder. From atom to human is ~10 orders of magnitude. From human to observable universe is ~26 orders of magnitude.`,
              audioPrompt: `An order of magnitude is a factor of 10 in size, mass, or other quantity, {name}. Used by scientists to compare scales that differ by many factors. Each order of magnitude is a step up or down the cosmic ladder. If something is 10 times larger than something else, it is one order of magnitude larger. From an atom to a human is about 10 orders of magnitude. From a human to the observable universe is about 26 orders of magnitude. Working in orders of magnitude lets us see structure that gets lost when we just write out giant numbers. The total cosmic ladder, from quarks at the bottom to the observable universe at the top, spans roughly 44 orders of magnitude. Human evolved intuition covers only a few orders of magnitude near our own size.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Subatomic World`,
          paragraphs: [
            `At the smallest scales currently accessible to physics, we find the building blocks of matter. Quarks are the fundamental particles that combine to form protons and neutrons. Quarks are roughly 10⁻¹⁸ meters across, smaller than anything we can directly image. Protons and neutrons are about 10⁻¹⁵ meters across, roughly a thousand times larger than quarks. The atomic nucleus is roughly 10⁻¹⁴ meters across, depending on how many protons and neutrons it contains.`,
            `Atoms are about 10⁻¹⁰ meters across. The atom is mostly empty space; the nucleus is tens of thousands of times smaller than the atom itself. If an atom were the size of a football stadium, the nucleus would be roughly the size of a marble at the center. The electrons orbit the nucleus at very specific energies determined by quantum mechanics.`,
            `Below the quark, we hit current limits of physics. The Planck length, around 10⁻³⁵ meters, is the smallest scale where current physics meaningfully applies. Below the Planck length, quantum gravity effects would dominate, and we don't have a theory for that regime. Whether anything meaningful happens below the Planck length is an open question. Some theories suggest yes; others suggest the concept of "length" itself breaks down at that scale.`,
          ],
          image: `/voyager-assets/cosmos/l13-s2-quarks.webp`,
          imageCaption: `From quarks (10⁻¹⁸ m) up through atoms (10⁻¹⁰ m). Most of an atom is empty space.`,
          vocab: [
            {
              word: `Planck length`,
              definition: `Roughly 10⁻³⁵ meters. The smallest meaningful scale in current physics. Below it, quantum gravity effects would dominate, and we don't have a theory for that regime. Whether the concept of "length" applies below the Planck length is an open question.`,
              audioPrompt: `The Planck length is approximately 10 to the minus 35 meters, {name}. It is the smallest meaningful scale in current physics. Named after the German physicist Max Planck, who introduced quantum theory in 1900. Below the Planck length, quantum gravity effects would dominate. We don't have a theory of quantum gravity that combines general relativity with quantum mechanics. So we don't really know what happens at scales below the Planck length. Some theoretical frameworks suggest the concept of "length" itself breaks down at that scale. Some suggest space is not continuous but discrete at that level. The Planck length is roughly 10 to the 17th power times smaller than a proton. It is a frontier of current physics.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `From Cells To Mountains`,
          paragraphs: [
            `Stepping up the scale ladder past the atomic, we enter the world of chemistry and biology. Simple molecules like water are roughly 10⁻¹⁰ meters across, comparable to atoms. Complex biological molecules like proteins are 10⁻⁹ to 10⁻⁸ meters (nanometers). Viruses are 10⁻⁸ to 10⁻⁷ meters across. Bacteria are 10⁻⁶ meters (one micrometer). Human cells average about 10⁻⁵ meters across, though they range widely: red blood cells are smaller (~10⁻⁵ m) while egg cells are visible to the naked eye.`,
            `Then we enter everyday scales. A grain of sand is about 10⁻⁴ meters. A small insect is 10⁻³ meters (a millimeter). A human is about 1 meter (or to be specific, roughly 1.5-2 meters). A whale or a tall tree is 10¹ meters. A skyscraper is 10² meters. The Statue of Liberty is around 10² meters tall.`,
            `Geographical features come next. A small lake is 10³ meters across. A city is 10⁴ meters (10 kilometers). A small country is 10⁵ meters. Mount Everest is about 10⁴ meters tall but 10⁷ meters above sea level if we think about its full base. Earth's diameter is 10⁷ meters (about 12,700 kilometers). The Moon's diameter is 10⁶ meters; the Moon's orbit around Earth is about 10⁹ meters across.`,
            `Notice that we've now climbed 25 orders of magnitude from quarks to Earth's diameter. We have many orders of magnitude still to climb to reach the observable universe.`,
          ],
          image: `/voyager-assets/cosmos/l13-s3-medium.webp`,
          imageCaption: `From cells (10⁻⁵ m) through human (10⁰) up to Earth (10⁷ m). The "human range" we evolved to navigate.`,
          vocab: [
            {
              word: `nanometer / micrometer / millimeter`,
              definition: `Standard sub-millimeter scales. A nanometer is 10⁻⁹ meters (typical scale of proteins and DNA). A micrometer is 10⁻⁶ meters (typical scale of bacteria and human cells). A millimeter is 10⁻³ meters (typical scale of small insects, sand grains).`,
              audioPrompt: `Three scales are particularly important for understanding life at small scales, {name}. A nanometer is 10 to the minus 9 meters, the typical scale of proteins and DNA strands. A micrometer is 10 to the minus 6 meters, the typical scale of bacteria and most human cells. A millimeter is 10 to the minus 3 meters, the typical scale of small insects and sand grains. These three scales bridge between the atomic world and the everyday world we experience directly. Biological complexity happens primarily in the nanometer to micrometer range. Each scale up is a factor of 1000, which is huge. The total range from atom to human is roughly 10 orders of magnitude, which is why biology is so structurally rich.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Solar System And Beyond`,
          paragraphs: [
            `Beyond Earth, the scales explode. The Sun's diameter is about 10⁹ meters, roughly 100 times larger than Earth. Earth's orbit around the Sun is about 10¹¹ meters in radius, which equals 1 astronomical unit (AU). The orbit of Neptune, the outermost full-sized planet, is about 30 AU. Pluto's orbit averages about 40 AU. The outer edge of the heliosphere (where the solar wind meets interstellar space) is about 100 AU, or 10¹³ meters.`,
            `Then we hit the gap. The nearest star, Proxima Centauri, is about 4.2 light-years away. A light-year is 9.5 × 10¹⁵ meters. So Proxima Centauri is about 4 × 10¹⁶ meters from us, roughly 4000 times the size of our entire solar system. Space between stars is mostly empty. The galaxy is sparse.`,
            `The Milky Way galaxy is roughly 10⁵ light-years across, or about 10²¹ meters. It contains 100-400 billion stars distributed across a thin disk and central bulge. Our solar system sits about 26,000 light-years from the galactic center, in a relatively quiet spiral arm called the Orion Arm. The Milky Way is one of perhaps 200 billion to 2 trillion galaxies in the observable universe.`,
            `Local galactic structures: the Local Group (our small galactic neighborhood) contains the Milky Way, Andromeda Galaxy, and several dozen smaller galaxies, spanning about 10²² meters. Galaxy clusters span 10²³ meters. Superclusters span 10²⁴ meters. The cosmic web of large-scale structure extends to 10²⁵ meters.`,
            `The observable universe is about 10²⁶ meters across (93 billion light-years in diameter). This is the largest scale at which physics is currently meaningful. Beyond the observable universe may be vast amounts of additional universe we cannot see (because light from there hasn't reached us yet, given the universe's age and expansion). What exists beyond the observable universe is one of the great open questions.`,
          ],
          image: `/voyager-assets/cosmos/l13-s4-cosmic.webp`,
          imageCaption: `Sun (10⁹ m) → Solar System → nearby stars → galaxy → galactic neighborhood → observable universe (10²⁶ m).`,
          vocab: [
            {
              word: `light-year`,
              definition: `Standard astronomical distance unit: the distance light travels in one year, about 9.5 × 10¹⁵ meters. Useful because distances in astronomy are vast; light-years provide intuitive scale. The nearest star is 4.2 light-years away. The Milky Way is ~100,000 light-years across.`,
              audioPrompt: `A light-year is the standard astronomical distance unit, {name}. It is the distance light travels in one year, which is about 9.5 times 10 to the 15th power meters. Useful because distances in astronomy are vast and need a unit that fits cosmic scales. Some quick comparisons. The nearest star, Proxima Centauri, is 4.2 light-years away. The Milky Way galaxy is about 100,000 light-years across. The Andromeda galaxy is 2.5 million light-years away. The observable universe is 93 billion light-years in diameter. One important point: a light-year is a unit of distance, not time, despite "year" being in the name. The "year" refers to how long it takes light to travel that distance, not to the distance itself.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `You Sit In The Middle (Roughly)`,
          paragraphs: [
            `Step back from the cosmic ladder for a moment. The smallest meaningful scale in current physics is the Planck length (10⁻³⁵ meters). The largest observable scale is the observable universe (10²⁶ meters). The total range is about 61 orders of magnitude. You, a human, are about 10⁰ meters, which is approximately in the middle of this range. There's an interesting symmetry: roughly the same number of orders of magnitude separate you from the Planck length as separate you from the observable universe.`,
            `This is partly coincidence and partly not. It's coincidence in the sense that there's no fundamental physical reason humans had to evolve at exactly the geometric middle of the cosmic scale range. It's not coincidence in the sense that there are structural reasons complex life can only exist at certain scales. Too small and you can't have enough complexity to support intelligence. Too large and gravity becomes overwhelming, communication times are too long, individual entities can't function. The "Goldilocks zone" for complex life is roughly in the size range from insects through whales. Humans are in that range.`,
            `One way to feel cosmic scale: walk through the orders of magnitude in your head. Start with your hand, about 10⁻¹ meters. Zoom into a single cell in your skin, 10⁻⁵ meters (four orders smaller). Zoom into a single protein molecule, 10⁻⁹ meters (four more). Zoom into a single atom, 10⁻¹⁰ meters (one more). Zoom into the nucleus of the atom, 10⁻¹⁴ meters (four more). Now zoom out. Your hand. Your body, 10⁰ meters. Your house, 10² meters. Your city, 10⁵ meters. The Earth, 10⁷ meters. The orbit of the Moon, 10⁹ meters. The Sun, 10¹¹ meters from Earth. The nearest star, 10¹⁶ meters. The galaxy, 10²¹ meters. The observable universe, 10²⁶ meters.`,
            `In the sequence game that follows, you'll order ten cosmic objects by their characteristic size. After this lesson, you'll have a felt sense for where you sit in cosmic geometry. Most adults never develop this. You can.`,
          ],
          image: `/voyager-assets/cosmos/l13-s5-middle.webp`,
          imageCaption: `You sit roughly in the middle. The cosmic scale range is genuinely vast in both directions.`,
          vocab: [
            {
              word: `observable universe`,
              definition: `The portion of the universe we can in principle observe. About 93 billion light-years across (10²⁶ meters in diameter). Bounded by the distance light has had time to travel to us since the Big Bang. The actual universe may be vastly larger.`,
              audioPrompt: `The observable universe is the portion of the universe we can in principle observe, {name}. About 93 billion light-years across, which is 10 to the 26th power meters in diameter. Bounded by the distance light has had time to travel to us since the Big Bang 13.8 billion years ago. Why isn't it just 13.8 billion light-years across (twice the age times the speed of light, for diameter)? Because space itself has been expanding, so light that started reaching us 13 billion years ago came from points that are now much further away. The actual universe may be vastly larger than the observable universe; the rest just hasn't had time to send us light yet. What exists beyond the observable universe is one of the great open questions in cosmology.`,
            },
          ],
        },

        // ───── SEQUENCE GAME ──────────────────────────────────────────────────
        {
          id: `l13-sequence`,
          type: `sequence`,
          headline: `Order these cosmic objects by size, smallest to largest`,
          intro: `{name}, you've just walked through the cosmic ladder. Now order ten objects by their characteristic size, from smallest to largest. The first item is smaller than anything else in the list. The last item is larger than anything else. Get them all in the right order and you have the cosmic scale ladder under your belt.`,
          items: [
            {
              id: `seq-1`,
              label: `Hydrogen atom (about 10⁻¹⁰ meters)`,
              position: 1,
            },
            {
              id: `seq-2`,
              label: `Virus (about 10⁻⁸ to 10⁻⁷ meters)`,
              position: 2,
            },
            {
              id: `seq-3`,
              label: `Human cell (about 10⁻⁵ meters)`,
              position: 3,
            },
            {
              id: `seq-4`,
              label: `Human body (about 1 to 2 meters)`,
              position: 4,
            },
            {
              id: `seq-5`,
              label: `Mount Everest base-to-summit (about 10⁴ meters)`,
              position: 5,
            },
            {
              id: `seq-6`,
              label: `Earth diameter (about 10⁷ meters, ~12,700 km)`,
              position: 6,
            },
            {
              id: `seq-7`,
              label: `Sun diameter (about 10⁹ meters, ~1.4 million km)`,
              position: 7,
            },
            {
              id: `seq-8`,
              label: `Solar system, outer edge of heliosphere (about 10¹³ meters)`,
              position: 8,
            },
            {
              id: `seq-9`,
              label: `Milky Way galaxy diameter (about 10²¹ meters, ~100,000 light-years)`,
              position: 9,
            },
            {
              id: `seq-10`,
              label: `Observable universe diameter (about 10²⁶ meters, ~93 billion light-years)`,
              position: 10,
            },
          ],
          reflectionPrompt: `Which jumps in the scale ladder surprise you most? The gap from atoms to viruses? From cells to humans? From galaxies to observable universe?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why do scientists use "orders of magnitude" rather than raw numbers when comparing cosmic scales?`,
              options: [
                `To confuse people`,
                `Each order of magnitude is a factor of 10 in size; lets us see structure across enormous ranges (atom to observable universe is ~36 orders of magnitude); writing out raw numbers loses the relationships`,
                `For tradition`,
                `Math is fun`,
              ],
              correctIndex: 1,
              explanation: `Working in orders of magnitude lets us compare scales that differ by enormous factors without losing track of structure. Essential for cosmic thinking.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Planck length, and why does it matter?`,
              options: [
                `A type of measurement`,
                `Approximately 10⁻³⁵ meters, the smallest meaningful scale in current physics; below it, quantum gravity effects would dominate and we don't have a theory; whether "length" itself applies below the Planck length is an open question`,
                `Distance to nearest star`,
                `A small atom`,
              ],
              correctIndex: 1,
              explanation: `The Planck length is roughly 10¹⁷ times smaller than a proton. It is a frontier of current physics where our theories break down.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the structure of an atom, in scale terms?`,
              options: [
                `Solid sphere`,
                `Atoms are about 10⁻¹⁰ meters across; the nucleus (10⁻¹⁴ meters) is tens of thousands of times smaller than the atom itself; mostly empty space; if atom were stadium-sized, nucleus would be a marble at the center`,
                `Cube of matter`,
                `Liquid drop`,
              ],
              correctIndex: 1,
              explanation: `Atoms are mostly empty space. The nucleus contains essentially all the mass but very little of the volume. Electrons orbit at specific energies determined by quantum mechanics.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a light-year?`,
              options: [
                `One year in space`,
                `Standard astronomical distance unit: the distance light travels in one year (~9.5 × 10¹⁵ meters); used because distances in astronomy are vast; nearest star is 4.2 light-years away, Milky Way is ~100,000 light-years across`,
                `Time light takes`,
                `Unit of brightness`,
              ],
              correctIndex: 1,
              explanation: `A light-year is a unit of distance, not time, despite "year" being in the name. The "year" refers to how long light takes to travel that distance, not to the distance itself.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the typical scale of a virus, a bacterium, and a human cell?`,
              options: [
                `All the same`,
                `Virus: 10⁻⁸ to 10⁻⁷ meters; bacterium: 10⁻⁶ meters (micrometer); human cell: 10⁻⁵ meters; each step is about 10× larger than the previous; bacteria are roughly 100× smaller than human cells`,
                `Cells smallest`,
                `Random sizes`,
              ],
              correctIndex: 1,
              explanation: `Each step in this scale ladder is about an order of magnitude. Biology spans the range from molecular (10⁻⁹ m) through cellular (10⁻⁵ m) to macroscopic (1+ m).`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the diameter of Earth, the Sun, and the orbit of Pluto?`,
              options: [
                `All same`,
                `Earth diameter ~10⁷ meters (~12,700 km); Sun diameter ~10⁹ meters (100× Earth); Pluto orbit ~10¹³ meters; each step up is huge but smaller than the steps between galactic scales`,
                `Sun smaller than Earth`,
                `Earth bigger than Sun`,
              ],
              correctIndex: 1,
              explanation: `Even within the solar system, scales are huge. The Sun is 100× the diameter of Earth. The outer planets orbit at thousands of times Earth's distance.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How large is the Milky Way galaxy?`,
              options: [
                `100 km`,
                `Roughly 10⁵ light-years across (~10²¹ meters); contains 100-400 billion stars; our solar system sits about 26,000 light-years from the galactic center in the Orion Arm; one of perhaps 200 billion to 2 trillion galaxies in the observable universe`,
                `One mile`,
                `1000 light-years`,
              ],
              correctIndex: 1,
              explanation: `The Milky Way is one galaxy among hundreds of billions in the observable universe. Our position within it (in the Orion Arm, 26,000 light-years from center) is relatively unremarkable.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How large is the observable universe?`,
              options: [
                `Same as Milky Way`,
                `About 10²⁶ meters in diameter (~93 billion light-years); bounded by the distance light has had time to travel since the Big Bang; the actual universe may be vastly larger than the observable portion`,
                `100 galaxies`,
                `Infinite`,
              ],
              correctIndex: 1,
              explanation: `Why isn't it just 13.8 billion light-years across (twice the age × speed of light)? Because space has been expanding; light that started reaching us 13 billion years ago came from points that are now much further away.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A human sits roughly in the middle of cosmic scales on a logarithmic ruler.`,
              correctAnswer: true,
              explanation: `True. The Planck length (10⁻³⁵ m) and observable universe (10²⁶ m) span about 61 orders of magnitude. A human at ~10⁰ meters is roughly geometrically in the middle. Partly coincidence, partly structural: complex life requires sizes neither too small (no complexity) nor too large (gravity dominates).`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "The universe is so big I feel like a tiny meaningless speck." Based on this lesson, what should you notice?`,
              options: [
                `"You are meaningless"`,
                `"Cosmic scale is genuinely vast, but the 'meaningless speck' framing collapses scale into significance. You sit roughly in the geometric middle of cosmic scales; you're not at any 'extreme.' Complex life requires roughly your size range; you couldn't exist at much smaller or much larger scales. Meaning isn't a function of physical size; it's a function of complexity, structure, and what's happening within an entity. A galaxy is bigger than you but vastly simpler. You contain trillions of cells doing complex coordinated work. Cosmic scale humbles us appropriately; it doesn't reduce us to meaninglessness."`,
                `"Size doesn't matter"`,
                `"The universe is small"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic scale literacy. The "tiny meaningless speck" framing is psychologically loaded but doesn't follow from the physics. You're at the geometric middle of cosmic scales, in the size range where complex life can exist. Size doesn't determine significance.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a felt sense of how big the universe actually is? Has it changed?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which scale jump felt biggest to you? Atom to cell? Human to Earth? Galaxy to observable universe? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who has internalized cosmic scale, does that humble you, empower you, or both? In what ways?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one object in your room. Trace it up the cosmic scale ladder. What's larger than it? What's smaller? Where does it sit on the order-of-magnitude scale?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is size correlated with importance? Are bigger things more meaningful than smaller things? Defend your answer.` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Use the "Powers of Ten" video on YouTube (it's a classic from 1977 that zooms across cosmic scales). Watch it once with this lesson in mind. What changes about your felt sense?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Cosmic scale literacy is one of the most awe-producing skills available. Two paths.`,
          familyActivity: {
            title: `The Cosmic Scale Walk`,
            duration: `45 minutes`,
            description: `Take the family for a walk around the neighborhood. Ask them at each scale: what objects do they see that fit at this scale? At 10⁻⁵ meters? Hard to see individual cells without a microscope, but they're everywhere. At 1 meter? Your own body. At 10² meters? A typical city block. At 10⁴ meters? A small town. Then ask: can they imagine 10⁷ meters (Earth's diameter)? 10²¹ meters (Milky Way)? 10²⁶ meters (observable universe)? Most adults have never explicitly engaged with cosmic scale this way. After this walk, your family will have a felt sense most adults never develop.`,
          },
          projectOption: {
            title: `Build A Scaled Cosmic Ladder, 2 weeks (optional)`,
            duration: `2 weeks, ~45 minutes per session, 4-5 sessions`,
            description: `Build a physical or digital cosmic ladder representing scales from Planck length to observable universe. Each step is one order of magnitude. Identify a real object or phenomenon at each step (or as many as you can find). Hang the ladder somewhere visible. After two weeks, write 1,500 words on what changed in your felt sense of cosmic scale. Real applied science visualization at a level few adults reach. The classic "Powers of Ten" film (1977 by Charles and Ray Eames, available on YouTube) is a great reference.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Building the cosmic ladder is genuinely transformative.`,
          },
          identityQuestion: `If you internalize cosmic scale (the actual range, from quarks to observable universe), what does that change about how you experience being your specific size and your specific moment?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can place any object on the cosmic scale ladder by order of magnitude.`,
            `A person who knows I sit roughly in the geometric middle of cosmic scales.`,
            `Someone willing to feel both vastness and significance instead of collapsing one into the other.`,
          ],
          saveKey: `identity_responses_cs_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteenth Cosmos lesson done. You can now navigate the cosmic scale ladder from Planck length through observable universe, understand orders of magnitude as the way to compare vastly different scales, recognize where humans sit in cosmic geometry, and avoid the common cognitive collapse of "I'm a meaningless speck." Most adults have never internalized cosmic scale at this level. Next time we go forward in time, far forward, to the fate of the universe itself. Heat death, Big Rip, cyclic universe: three real positions on what happens at the end. Argument Builder format. See you among the stars. — Nova`,
          badge: `scale-navigator`,
          badgeName: `Scale Navigator`,
          xpEarned: 75,
          competencies: [
            `Navigates cosmic scale from Planck length through observable universe`,
            `Uses orders of magnitude effectively to compare scales`,
            `Recognizes where humans sit in cosmic geometry (roughly the middle)`,
            `Knows characteristic sizes of major objects: atoms, cells, humans, Earth, Sun, galaxy, observable universe`,
            `Avoids cognitive collapse of "tiny meaningless speck" framing`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: The Fate of the Universe`,
            hook: `What happens at the end? Heat death, Big Rip, or cyclic rebirth? Three serious positions on cosmic destiny.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sequenceScreen = l.screens.find((s) => s.type === `sequence`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L13 ${VERSION}] "${l.title}" — ${mags} magazine, sequence game w/ ${sequenceScreen?.items?.length ?? 0} items, ${quiz} quiz, ${reflect} reflection`
  );
}
