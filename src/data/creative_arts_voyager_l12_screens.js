// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L12 — Architecture and Sacred Geometry
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Architecture, Geometry, Math in Art, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: CASE STUDY (sort real architecture/math facts from mystical
// "sacred geometry is the universe's hidden code" claims). Contract matches L04/L07/L09:
// cases[] with title/type/description/questions[]/evaluation; synthesisPrompt +
// reflectionPrompt.
// SENSITIVITY (HIGH): the central honesty-tier lesson of the band. Holds a precise
// three-way split: (1) REAL math/architecture facts (Tier A: ratios, geometry,
// engineering that genuinely appear in buildings); (2) genuine cultural/spiritual
// traditions that USE geometry meaningfully (Tier C-cultural, respected); (3) the
// pseudoscientific claim that specific ratios are "the universe's hidden code" with
// mystical powers (Tier C-pseudoscience, skepticism). NEVER mocks the human awe at
// pattern; NEVER endorses the "hidden code" claim as fact.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-creative-arts-l12-v1";

const CREATIVE_ARTS_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `creative-arts`,
  guide: `muse`,

  lessons: [
    {
      id: `ca-11-12-12`,
      title: `Architecture and Sacred Geometry`,
      duration: 35,
      xpReward: 75,
      badge: `geometry-architecture-literate`,
      badgeName: `Geometry & Architecture Literate`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you saw cultures make the sacred visible. Often, they did it with geometry, with circles, triangles, spirals, and exact proportions, because pattern and proportion feel deep to humans in a way that is genuinely fascinating. This lesson is about that meeting point of math, beauty, and meaning, and it is one of the most interesting and most misunderstood topics there is. There is real, thrilling mathematics in great architecture and art. There are genuine cultural traditions that use geometry to point toward the holy. And there is a whole industry of claims that specific ratios are "the universe's secret code" with hidden powers, claims that range from poetic to flatly false. Today you learn to hold all three apart with precision: the real math, the real traditions, and the overblown mystical claims. This is the lesson where being moved by beauty and thinking clearly about facts have to work together perfectly. Onward.`,
          headline: `Architecture and Sacred Geometry`,
          subtitle: `Where real math, real traditions, and mystical claims meet. Case Study.`,
          visual: `/voyager-assets/creative-arts/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Real Math Is Genuinely Amazing`,
          paragraphs: [
            `Start with what is true and thrilling, because the real mathematics in architecture is amazing on its own, with no mysticism needed. Builders across history discovered that certain proportions, the relationships between a building's height and width and parts, simply look and feel better balanced to human eyes, and they used them deliberately. The ancient Greeks designed temples like the Parthenon using careful ratios to create a sense of harmony and balance; their architecture still looks "right" to us thousands of years later, which is a real achievement of applied mathematics.`,
            `One famous proportion is the "golden ratio," roughly 1 to 1.618, a specific relationship between two lengths that shows up in some art and architecture and that many people find pleasing. Related to it is the Fibonacci sequence, a string of numbers (1, 1, 2, 3, 5, 8, 13, and so on, each the sum of the two before) that genuinely appears in some patterns in nature, like the spiral arrangement of seeds in a sunflower or the branching of some plants. These are real mathematical patterns, and the fact that simple number rules can describe parts of nature and please the human eye is genuinely wonderful. You do not need to add anything magical to it; the real thing is already astonishing.`,
            `Geometry also does the practical, structural work that makes buildings stand up, and this is its own kind of beauty. A triangle is the strongest simple shape because it cannot be pushed out of form without changing the length of a side, which is why bridges and towers are full of them. A dome distributes weight so that a thin shell of material can span a huge space, which is how ancient builders roofed enormous halls. An arch turns the downward pull of gravity into a sideways push the stone can handle. None of this is mystical; it is geometry doing real physical work, and understanding it lets humans build cathedrals, bridges, and skyscrapers that would otherwise be impossible. The real math, both the beautiful proportions and the load-bearing geometry, is more than enough to be amazed by.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s1-realmath.webp`,
          imageCaption: `The real mathematics in architecture is thrilling with no mysticism needed. Builders found that certain proportions (relationships between height, width, and parts) feel better balanced to human eyes and used them deliberately, the ancient Greeks designed the Parthenon with careful ratios for harmony, and it still looks "right" thousands of years later. The "golden ratio" (roughly 1 to 1.618) is a specific pleasing relationship between two lengths appearing in some art and architecture; the related Fibonacci sequence (1,1,2,3,5,8,13… each the sum of the prior two) genuinely appears in some nature patterns (sunflower seed spirals, some plant branching). Real patterns, genuinely wonderful, no magic needed. Geometry also does structural work: a triangle is the strongest simple shape (bridges, towers), a dome spreads weight across a thin shell, an arch turns gravity's pull into a push stone can handle. Not mystical, geometry doing real physical work.`,
          vocab: [
            {
              word: `the real math in architecture: proportion, the golden ratio, structural geometry`,
              definition: `The real mathematics in architecture is genuinely thrilling on its own, with no mysticism needed. Builders across history discovered that certain proportions, the relationships between a building's height, width, and parts, simply look and feel better balanced to human eyes, and used them deliberately: the ancient Greeks designed temples like the Parthenon using careful ratios to create harmony and balance, and the architecture still looks "right" to us thousands of years later, a real achievement of applied mathematics. One famous proportion is the "golden ratio," roughly 1 to 1.618, a specific relationship between two lengths that appears in some art and architecture and that many people find pleasing; related to it is the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, and so on, each number the sum of the two before), which genuinely appears in some patterns in nature like the spiral arrangement of sunflower seeds or the branching of some plants. These are real mathematical patterns, and the fact that simple number rules can describe parts of nature and please the human eye is genuinely wonderful without anything magical added. Geometry also does the practical, structural work that makes buildings stand up: a triangle is the strongest simple shape because it cannot be pushed out of form without changing a side's length (which is why bridges and towers are full of them); a dome distributes weight so a thin shell can span a huge space; an arch turns gravity's downward pull into a sideways push the stone can handle. None of this is mystical; it is geometry doing real physical work, and the real math, beautiful proportions plus load-bearing geometry, is more than enough to be amazed by.`,
              audioPrompt: `Start with what is true and thrilling, {name}, because the real mathematics in architecture is amazing on its own, with no mysticism needed. Builders across history discovered that certain proportions, the relationships between a building's height and width and parts, simply look and feel better balanced to human eyes, and they used them deliberately. The ancient Greeks designed temples like the Parthenon using careful ratios to create a sense of harmony and balance; their architecture still looks right to us thousands of years later. One famous proportion is the golden ratio, roughly 1 to 1.618, a specific relationship between two lengths that shows up in some art and architecture and that many people find pleasing. Related to it is the Fibonacci sequence, a string of numbers where each is the sum of the two before, which genuinely appears in some patterns in nature, like the spiral arrangement of seeds in a sunflower. These are real mathematical patterns, and the fact that simple number rules can describe parts of nature and please the human eye is genuinely wonderful. You do not need to add anything magical to it; the real thing is already astonishing. Geometry also does the practical work that makes buildings stand up. A triangle is the strongest simple shape, which is why bridges and towers are full of them. A dome distributes weight so that a thin shell of material can span a huge space. An arch turns the downward pull of gravity into a sideways push the stone can handle. None of this is mystical; it is geometry doing real physical work.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When Geometry Carries Meaning: Real Traditions`,
          paragraphs: [
            `Now the second layer, and it is genuine and worthy of respect: many cultures have deliberately used geometry to carry meaning and point toward the sacred. This is real, and it is not the same as the false "hidden code" claims you will meet next, so keep them separate. When Islamic artists covered a mosque ceiling in interlocking geometric patterns, they were making a meaningful choice, using repetition and symmetry to suggest the infinite and the unity of all creation, within a tradition that found in geometry a way to point toward God without picturing God. The geometry carries meaning for that tradition, the way a wedding ring's circle carries meaning, by shared agreement and intention, not by a hidden physical force.`,
            `This is the Tier C-cultural idea from earlier lessons, applied to shape. A Buddhist mandala uses circles and symmetry to map a sacred order and focus meditation. Gothic cathedral builders used proportion and geometry they associated with divine order. Hindu temple plans follow geometric diagrams with sacred meaning. In each case, real people deliberately used geometry to express and approach the holy, and that use is meaningful and serious within the tradition. The right response, exactly as with sacred art last lesson, is respect: these traditions are making claims about meaning, not testable claims that the shapes emit mystical energy.`,
            `Here is the crucial distinction to hold, and it is subtle but important. "This geometric pattern means something profound in our tradition" is a meaning claim, and it is true within that tradition, the way a flag or a ring means something. "This specific ratio physically aligns your body's energy and unlocks the universe's secret code" is a different kind of claim entirely, a testable physical claim, and it is not supported. The same circle can be genuinely sacred to a tradition (a meaning claim worthy of respect) and falsely advertised as a healing-energy device (a physics claim worthy of skepticism). Telling apart "this shape carries meaning for these people" from "this shape has hidden physical powers" is the entire skill of this lesson, and it lets you honor the real traditions and the real math while staying clear about the false claims.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s2-traditions.webp`,
          imageCaption: `The second layer, genuine and worthy of respect: many cultures deliberately used geometry to carry meaning and point toward the sacred, real, and NOT the same as false "hidden code" claims. Islamic mosque patterns use repetition and symmetry to suggest the infinite and unity within a tradition that points toward God without picturing God; the geometry carries meaning by shared agreement and intention (like a wedding ring's circle), not by a hidden physical force. This is the Tier C-cultural idea applied to shape: Buddhist mandalas map a sacred order, Gothic cathedrals used proportion associated with divine order, Hindu temple plans follow sacred geometric diagrams, real people deliberately using geometry to approach the holy. The crucial distinction: "this pattern means something profound in our tradition" is a meaning claim, true within that tradition (like a flag or ring); "this ratio physically aligns your energy and unlocks the universe's secret code" is a testable physics claim, and unsupported. Same circle, two different kinds of claim.`,
          vocab: [
            {
              word: `geometry that carries meaning: real traditions (Tier C-cultural)`,
              definition: `The second layer, genuine and worthy of respect: many cultures have deliberately used geometry to carry meaning and point toward the sacred, which is real and not the same as the false "hidden code" claims, so keep them separate. When Islamic artists covered a mosque ceiling in interlocking geometric patterns, they made a meaningful choice, using repetition and symmetry to suggest the infinite and the unity of all creation within a tradition that found in geometry a way to point toward God without picturing God; the geometry carries meaning for that tradition the way a wedding ring's circle carries meaning, by shared agreement and intention, not by a hidden physical force. This is the Tier C-cultural idea applied to shape: a Buddhist mandala uses circles and symmetry to map a sacred order and focus meditation; Gothic cathedral builders used proportion and geometry they associated with divine order; Hindu temple plans follow geometric diagrams with sacred meaning. In each case real people deliberately used geometry to express and approach the holy, and that use is meaningful and serious within the tradition, so the right response is respect, because these traditions make claims about meaning, not testable claims that the shapes emit mystical energy. The crucial distinction: "this geometric pattern means something profound in our tradition" is a meaning claim, true within that tradition the way a flag or ring is meaningful; "this specific ratio physically aligns your body's energy and unlocks the universe's secret code" is a testable physical claim, and unsupported. The same circle can be genuinely sacred to a tradition (a meaning claim worthy of respect) and falsely advertised as a healing-energy device (a physics claim worthy of skepticism). Telling "this shape carries meaning for these people" apart from "this shape has hidden physical powers" is the entire skill of this lesson.`,
              audioPrompt: `Now the second layer, {name}, and it is genuine and worthy of respect: many cultures have deliberately used geometry to carry meaning and point toward the sacred. This is real, and it is not the same as the false hidden-code claims you will meet next, so keep them separate. When Islamic artists covered a mosque ceiling in interlocking geometric patterns, they were making a meaningful choice, using repetition and symmetry to suggest the infinite and the unity of all creation, within a tradition that found in geometry a way to point toward God without picturing God. The geometry carries meaning for that tradition the way a wedding ring's circle carries meaning, by shared agreement and intention, not by a hidden physical force. This is the Tier C-cultural idea applied to shape. A Buddhist mandala uses circles and symmetry to map a sacred order. Gothic cathedral builders used proportion they associated with divine order. In each case, real people deliberately used geometry to approach the holy, and the right response is respect, because these traditions are making claims about meaning, not testable claims that the shapes emit mystical energy. Here is the crucial distinction. "This pattern means something profound in our tradition" is a meaning claim, and it is true within that tradition. "This specific ratio physically aligns your body's energy and unlocks the universe's secret code" is a different kind of claim entirely, a testable physical claim, and it is not supported. Telling those two apart is the entire skill of this lesson.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Where The Overblown Claims Begin`,
          paragraphs: [
            `Now the third layer, the one that needs your clearest thinking: a whole genre of claims that specific ratios and shapes are "the universe's hidden code," with mystical powers, claims that range from poetic exaggeration to flatly false. The most common is about the golden ratio. You will hear that the golden ratio is found everywhere, in every beautiful building, in the human body, in seashells, in galaxies, and that it is the secret key to all beauty and the blueprint of the universe. It is a beautiful story. It is also, in its strong form, not true, and the truth is more interesting than the myth.`,
            `Here is what is real and what is not. The golden ratio is a genuine, interesting number that genuinely appears in some places. But the claim that it appears everywhere, and explains all beauty, falls apart when checked. Many famous buildings said to "contain the golden ratio" actually do not, the ratio is found by drawing rectangles loosely over a photo until something almost lines up, which you can do with almost any number. The nautilus seashell, the classic example, does not actually match the golden spiral closely when measured. And humans are pattern-finding creatures who will see a favorite number in noise if they look hard enough. So the honest picture is: the golden ratio is real and shows up sometimes; the claim that it is a universal magic key found in everything is mostly people drawing rectangles until they get the answer they wanted.`,
            `The deeper point is about how this kind of overclaiming works, because the pattern repeats far beyond geometry. It starts with something real and genuinely cool (a real ratio, a real pattern), then stretches it into something universal and magical (it is everywhere, it explains everything, it has hidden power), and then becomes unfalsifiable, so flexible that no evidence could ever disprove it, because any near-miss "counts" and any total miss is ignored. That is the signature of pseudoscience: a real seed, inflated past what the evidence supports, protected from being checked. The skill is to keep the real, cool seed (yes, the golden ratio is a genuine and pleasing pattern that appears in some art and nature) while refusing the inflated magical claim (no, it is not the secret code of the universe found in literally everything). Loving the real pattern and rejecting the myth about it are not in tension; they are what clear thinking looks like.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s3-overblown.webp`,
          imageCaption: `The third layer, needing your clearest thinking: claims that specific ratios are "the universe's hidden code" with mystical powers, ranging from poetic exaggeration to flatly false. The most common: the golden ratio is "found everywhere", in every beautiful building, the human body, seashells, galaxies, the secret key to all beauty. A beautiful story, but in its strong form not true. What's real: the golden ratio is a genuine, interesting number appearing in some places. What's not: "everywhere, explains all beauty" falls apart, many buildings said to "contain" it do not (you find it by drawing rectangles loosely until something almost lines up, doable with almost any number); the nautilus shell does not actually match closely when measured; humans see favorite numbers in noise. The overclaiming pattern (beyond geometry): real cool seed → stretched to universal and magical → made unfalsifiable (near-misses count, misses ignored). Keep the real seed, refuse the inflated myth, loving the pattern and rejecting the myth are both clear thinking.`,
          vocab: [
            {
              word: `the "universe's hidden code" overclaim and how it works`,
              definition: `The third layer, needing the clearest thinking: a whole genre of claims that specific ratios and shapes are "the universe's hidden code" with mystical powers, ranging from poetic exaggeration to flatly false. The most common is about the golden ratio: you will hear it is found everywhere, in every beautiful building, the human body, seashells, galaxies, and that it is the secret key to all beauty and the blueprint of the universe, a beautiful story that is, in its strong form, not true. What is real and what is not: the golden ratio is a genuine, interesting number that genuinely appears in some places, but the claim that it appears everywhere and explains all beauty falls apart when checked, because many famous buildings said to "contain the golden ratio" actually do not (the ratio is "found" by drawing rectangles loosely over a photo until something almost lines up, which you can do with almost any number), the nautilus seashell does not actually match the golden spiral closely when measured, and humans are pattern-finding creatures who will see a favorite number in noise if they look hard enough. So the honest picture: the golden ratio is real and shows up sometimes; the claim that it is a universal magic key found in everything is mostly people drawing rectangles until they get the answer they wanted. The deeper point is how this overclaiming works, because the pattern repeats far beyond geometry: it starts with something real and genuinely cool (a real ratio or pattern), stretches it into something universal and magical (it is everywhere, explains everything, has hidden power), then becomes unfalsifiable, so flexible no evidence could disprove it because any near-miss "counts" and any total miss is ignored, which is the signature of pseudoscience: a real seed inflated past the evidence and protected from being checked. The skill is to keep the real, cool seed while refusing the inflated magical claim; loving the real pattern and rejecting the myth about it are not in tension, they are what clear thinking looks like.`,
              audioPrompt: `Now the third layer, {name}, the one that needs your clearest thinking: a whole genre of claims that specific ratios and shapes are "the universe's hidden code," with mystical powers. The most common is about the golden ratio. You will hear that the golden ratio is found everywhere, in every beautiful building, in the human body, in seashells, in galaxies, and that it is the secret key to all beauty and the blueprint of the universe. It is a beautiful story. It is also, in its strong form, not true, and the truth is more interesting than the myth. Here is what is real and what is not. The golden ratio is a genuine, interesting number that genuinely appears in some places. But the claim that it appears everywhere and explains all beauty falls apart when checked. Many famous buildings said to contain the golden ratio actually do not; the ratio is found by drawing rectangles loosely over a photo until something almost lines up, which you can do with almost any number. The nautilus seashell, the classic example, does not actually match the golden spiral closely when measured. And humans are pattern-finding creatures who will see a favorite number in noise if they look hard enough. The deeper point is how this kind of overclaiming works. It starts with something real and genuinely cool, then stretches it into something universal and magical, and then becomes unfalsifiable, so flexible that no evidence could ever disprove it. That is the signature of pseudoscience: a real seed, inflated past what the evidence supports, protected from being checked. The skill is to keep the real, cool seed while refusing the inflated magical claim.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why The Myth Is So Tempting, And Why Truth Is Better`,
          paragraphs: [
            `It is worth understanding why the "hidden code of the universe" story is so tempting, because the pull is real and human, not stupid. We are pattern-finding creatures: our brains are built to spot patterns, which kept our ancestors alive (that shape might be a predator, that arrangement might mean food). That gift makes us see faces in clouds and meaning in coincidence, and it makes the idea that one beautiful number secretly orders all of reality feel thrilling and almost true. The myth also offers comfort: a hidden code means the universe is not random, that there is a secret order, that beauty has a reason. Those are deep human wishes, and wanting them is not foolish.`,
            `But here is the case for the harder, truer view, and it is genuinely the more beautiful one. The real story is not "one magic number explains everything." The real story is that simple mathematical rules can produce astonishing complexity and beauty, that the same geometry holds up a cathedral and arranges a sunflower's seeds for real physical reasons, that humans across every culture independently reached for proportion and pattern to make beauty and meaning, and that we are creatures who find certain patterns moving in ways scientists are still studying. That is not a let-down compared to the myth; it is richer, because it is true, and because it does not collapse the moment you actually measure something. The myth gives you a fake key that opens nothing; the truth gives you real keys that open real doors.`,
            `So the mature stance, the one this whole lesson is building, is to be doubly enriched rather than disenchanted. You get to keep all the genuine wonder, the real and beautiful math, the real and serious traditions that use geometry to reach for the holy, the real human awe at pattern that is part of what makes us human. And you get to set down the false weight of the magical claims that do not survive measurement. You lose nothing real and you stop being fooled, which is the best possible trade. A person who loves the genuine pattern in a sunflower, respects the meaning of a mosque's geometry, and calmly doubts the "golden ratio is the universe's secret code" video has not lost their sense of wonder. They have made it accurate, which makes it stronger.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s4-tempting.webp`,
          imageCaption: `Why the "hidden code" myth is tempting (the pull is real and human, not stupid): we are pattern-finding creatures whose brains spot patterns to survive, so we see faces in clouds and meaning in coincidence, and "one beautiful number secretly orders all reality" feels thrilling and almost true. The myth also comforts, a hidden code means the universe is not random, beauty has a reason, deep human wishes. But the harder, truer view is the more beautiful one: not "one magic number explains everything" but "simple math rules produce astonishing complexity and beauty," the same geometry holds up a cathedral and arranges sunflower seeds for real reasons, humans everywhere reached for proportion to make beauty. Truer and richer, because it does not collapse when measured. The mature stance: be doubly enriched, not disenchanted, keep the real wonder (real math, real traditions, real awe at pattern), set down the false magical claims. You lose nothing real and stop being fooled. Accurate wonder is stronger wonder.`,
          vocab: [
            {
              word: `why the myth tempts, and why the truth is more beautiful`,
              definition: `It is worth understanding why the "hidden code of the universe" story is so tempting, because the pull is real and human, not stupid. We are pattern-finding creatures: our brains are built to spot patterns, which kept our ancestors alive (that shape might be a predator, that arrangement might mean food), and that gift makes us see faces in clouds and meaning in coincidence, and makes the idea that one beautiful number secretly orders all of reality feel thrilling and almost true. The myth also offers comfort: a hidden code means the universe is not random, that there is a secret order, that beauty has a reason, deep human wishes that it is not foolish to want. But the case for the harder, truer view is genuinely the more beautiful one. The real story is not "one magic number explains everything"; it is that simple mathematical rules can produce astonishing complexity and beauty, that the same geometry holds up a cathedral and arranges a sunflower's seeds for real physical reasons, that humans across every culture independently reached for proportion and pattern to make beauty and meaning, and that we are creatures who find certain patterns moving in ways scientists are still studying. That is richer than the myth, because it is true and does not collapse the moment you measure something: the myth gives a fake key that opens nothing; the truth gives real keys that open real doors. So the mature stance is to be doubly enriched rather than disenchanted: you keep all the genuine wonder (the real beautiful math, the real serious traditions using geometry to reach for the holy, the real human awe at pattern) and set down the false weight of magical claims that do not survive measurement, losing nothing real and no longer being fooled. A person who loves the genuine pattern in a sunflower, respects the meaning of a mosque's geometry, and calmly doubts the "golden ratio is the universe's secret code" video has not lost their wonder; they have made it accurate, which makes it stronger.`,
              audioPrompt: `It is worth understanding why the "hidden code of the universe" story is so tempting, {name}, because the pull is real and human, not stupid. We are pattern-finding creatures: our brains are built to spot patterns, which kept our ancestors alive. That shape might be a predator; that arrangement might mean food. That gift makes us see faces in clouds and meaning in coincidence, and it makes the idea that one beautiful number secretly orders all of reality feel thrilling and almost true. The myth also offers comfort: a hidden code means the universe is not random, that there is a secret order, that beauty has a reason. Those are deep human wishes, and wanting them is not foolish. But here is the case for the harder, truer view, and it is genuinely the more beautiful one. The real story is not "one magic number explains everything." It is that simple mathematical rules can produce astonishing complexity and beauty, that the same geometry holds up a cathedral and arranges a sunflower's seeds for real physical reasons, and that humans across every culture independently reached for proportion to make beauty and meaning. That is not a let-down compared to the myth; it is richer, because it is true, and because it does not collapse the moment you actually measure something. So the mature stance is to be doubly enriched rather than disenchanted. You keep all the genuine wonder, and you set down the false weight of the magical claims that do not survive measurement. You lose nothing real and you stop being fooled, which is the best possible trade.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together before the case studies, because this lesson has three layers you must keep distinct. Layer one: the real math is amazing on its own, real proportions like the golden ratio that appear in some places, real structural geometry (triangles, domes, arches) that genuinely makes buildings stand, no mysticism required. Layer two: real cultural and spiritual traditions deliberately use geometry to carry meaning and point toward the sacred, which is genuine and deserves respect, a meaning claim, like a ring or a flag, not a physics claim. Layer three: the overblown "universe's hidden code" claims that inflate a real pattern into a magical universal key, which do not survive measurement and deserve skepticism.`,
            `Now the case-study screen will hand you several real or realistic examples, a true fact about structural geometry, a genuine tradition's use of sacred geometry, a "golden ratio is in everything" video, a mosque's geometric art, a product claiming a shape heals you, and ask you to sort each into the right layer and respond accordingly: amazement at the real math, respect for the real tradition, and skepticism toward the inflated mystical claim. The hard part is that they all involve beautiful shapes and the word "geometry," so you cannot sort by vibe; you have to ask what kind of claim each is actually making.`,
            `One last thing to carry, because it is the heart of the whole band. This lesson is the clearest example yet that being moved by beauty and thinking clearly about facts are not enemies, they are partners. You can be genuinely awed by a sunflower's spiral, a cathedral's proportions, and a mosque's endless pattern, and at the very same time calmly recognize when someone has inflated a real pattern into a magical claim to sell a video or a healing disk. The person who can do both does not live in a smaller world than the believer in magic; they live in a larger one, full of real wonder and free of fooling. Accurate awe is the goal. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s5-before.webp`,
          imageCaption: `Three layers to keep distinct. Layer 1: the real math is amazing alone, real proportions (golden ratio appearing in some places) and real structural geometry (triangles, domes, arches) that makes buildings stand, no mysticism needed. Layer 2: real traditions deliberately use geometry to carry meaning and point toward the sacred, genuine, deserving respect, a meaning claim (like a ring or flag), not physics. Layer 3: overblown "universe's hidden code" claims inflating a real pattern into a magical universal key, not surviving measurement, deserving skepticism. The case-study screen ahead hands you examples to sort by LAYER (you cannot sort by vibe, they all involve beautiful shapes; ask what kind of claim each makes). The heart of the band: being moved by beauty and thinking clearly about facts are partners, not enemies. Accurate awe, awed by the sunflower and the cathedral AND clear about the inflated claim, is the goal.`,
          vocab: [
            {
              word: `the three layers and accurate awe`,
              definition: `The synthesis before the case studies: this lesson has three layers you must keep distinct. Layer one, the real math is amazing on its own: real proportions like the golden ratio that genuinely appear in some places, and real structural geometry (triangles as the strongest simple shape, domes spreading weight, arches turning gravity's pull into a push) that genuinely makes buildings stand, with no mysticism required. Layer two, real cultural and spiritual traditions deliberately use geometry to carry meaning and point toward the sacred (Islamic patterns, Buddhist mandalas, Gothic and Hindu temple proportions), which is genuine and deserves respect, a meaning claim like a ring or a flag, not a testable physics claim. Layer three, the overblown "universe's hidden code" claims that inflate a real pattern into a magical universal key (the golden ratio is "in everything" and "explains all beauty"), which do not survive measurement (many cited buildings do not actually contain it; the nautilus shell does not match closely; the pattern is "found" by drawing rectangles until something lines up) and deserve skepticism. The overclaiming signature: a real cool seed, stretched to universal and magical, then made unfalsifiable. The case-study screen hands you examples to sort by layer, and you cannot sort by vibe because they all involve beautiful shapes and the word "geometry," so you must ask what kind of claim each actually makes. The heart of the whole band: being moved by beauty and thinking clearly about facts are partners, not enemies. You can be genuinely awed by a sunflower's spiral, a cathedral's proportions, and a mosque's endless pattern, and at the same time calmly recognize an inflated magical claim made to sell something. Accurate awe is the goal, and the person who can do both lives in a larger world, full of real wonder and free of fooling.`,
              audioPrompt: `Pull it together before the case studies, {name}, because this lesson has three layers you must keep distinct. Layer one: the real math is amazing on its own, real proportions like the golden ratio that appear in some places, and real structural geometry, triangles, domes, arches, that genuinely makes buildings stand, no mysticism required. Layer two: real cultural and spiritual traditions deliberately use geometry to carry meaning and point toward the sacred, which is genuine and deserves respect, a meaning claim, like a ring or a flag, not a physics claim. Layer three: the overblown "universe's hidden code" claims that inflate a real pattern into a magical universal key, which do not survive measurement and deserve skepticism. Now the case-study screen will hand you several examples and ask you to sort each into the right layer and respond accordingly: amazement at the real math, respect for the real tradition, and skepticism toward the inflated mystical claim. The hard part is that they all involve beautiful shapes and the word geometry, so you cannot sort by vibe; you have to ask what kind of claim each is actually making. One last thing to carry. This lesson is the clearest example yet that being moved by beauty and thinking clearly about facts are not enemies, they are partners. You can be genuinely awed by a sunflower's spiral and a cathedral's proportions, and at the very same time calmly recognize when someone has inflated a real pattern into a magical claim to sell something. Accurate awe is the goal.`,
            },
          ],
        },

        // ───── CASE STUDY ────────────────────────────────────────────────────
        {
          id: `l12-case-study`,
          type: `case-study`,
          headline: `Five Claims About Shape And Meaning`,
          intro: `{name}, five examples involving geometry. They all involve beautiful shapes, so you cannot sort them by how they look or feel. For each, decide which layer it belongs to, real math (amazement), real tradition (respect), or inflated mystical claim (skepticism), by asking what kind of claim it is actually making.`,
          cases: [
            {
              id: `c1`,
              title: `"A dome lets a thin shell of stone span a huge hall"`,
              type: `Real structural math (Layer 1)`,
              description: `An engineering explanation of how a dome works: its curved shape directs the weight of the structure outward and down along the curve, so a relatively thin shell of material can roof an enormous space that flat beams never could, which is how ancient and modern builders create vast open halls.`,
              questions: [
                `What kind of claim is this, and can it be checked?`,
                `Is there anything mystical here, or is it physics?`,
                `What is the right response to a true fact like this?`,
              ],
              evaluation: `This is Layer 1, real structural math, and a true, checkable claim. A dome really does direct weight along its curve so a thin shell can span a large space; you can test it with physics and engineering, and it is why domes have roofed great halls for millennia. There is nothing mystical here at all, just geometry doing real physical work, and that is its own kind of beauty. The right response is amazement at the real thing: it is genuinely wonderful that a curved shape can do what tons of flat material cannot, no magic required. This is the clean Layer-1 case, real, testable, true, and amazing on its own terms.`,
            },
            {
              id: `c2`,
              title: `Islamic geometric patterns covering a mosque ceiling`,
              type: `Real tradition / meaning (Layer 2, Tier C-cultural)`,
              description: `A mosque's ceiling is covered in intricate, interlocking geometric patterns. Within the tradition, the repeating geometry is a deliberate way to suggest the infinite and the unity of all creation, a way to point toward God without depicting God, carrying deep meaning for the people of that faith.`,
              questions: [
                `What kind of claim is the tradition making, meaning or physics?`,
                `Would "prove the pattern emits energy" be the right challenge? Why not?`,
                `What is the right response here?`,
              ],
              evaluation: `This is Layer 2, a real tradition using geometry to carry meaning, the Tier C-cultural idea applied to shape. The tradition is making a meaning claim ("this pattern points toward the infinite and the unity of creation for us"), which is true within the tradition the way a wedding ring's circle is meaningful, by shared intention, not a hidden physical force. So "prove the pattern emits energy" is the wrong challenge, a category error, because the tradition never claimed the shapes emit anything measurable; it claimed they carry meaning, which they do. The right response is respect, the same posture as sacred art in Lesson 11: honor the meaning and the craft, no demand for lab proof of a claim that was never physical. Notice this is genuinely different from a product claiming the pattern heals your body, which would be Layer 3.`,
            },
            {
              id: `c3`,
              title: `A viral video: "The golden ratio is the secret code of the universe, hidden in everything"`,
              type: `Inflated mystical claim (Layer 3, pseudoscience)`,
              description: `A slickly edited video claims the golden ratio (about 1.618) is found in every beautiful building, the human face and body, seashells, hurricanes, and galaxies, and that it is the universe's hidden code, the secret key to all beauty and the blueprint of reality, overlaying golden spirals on photos of everything.`,
              questions: [
                `Which part is real, and which part is the overclaim?`,
                `Why do the golden spirals laid over photos not prove the claim?`,
                `What is the right response, and how do you keep your wonder while rejecting the myth?`,
              ],
              evaluation: `This is Layer 3, the inflated mystical claim, and you must split it precisely. The real seed: the golden ratio is a genuine, interesting number that appears in some places and that many people find pleasing, keep that, it is true and cool. The overclaim: that it is found in "everything," explains all beauty, and is the universe's hidden code. That part does not survive checking: many famous buildings said to contain it actually do not, the nautilus shell does not match the golden spiral closely when measured, and the spirals overlaid on photos prove nothing because you can loosely fit a spiral or rectangle onto almost any image until something "almost" lines up, especially since humans see favorite patterns in noise. It has the pseudoscience signature: a real seed inflated to a universal magic key and made unfalsifiable. The right response is to keep the genuine wonder at the real pattern while calmly rejecting the magical claim, accurate awe, not disenchantment.`,
            },
            {
              id: `c4`,
              title: `A "sacred geometry crystal grid that aligns your energy"`,
              type: `Inflated mystical + product (Layer 3, pseudoscience)`,
              description: `A shop sells a "sacred geometry crystal grid," an arrangement of crystals in a geometric pattern, claiming that the specific shape "aligns your body's energy field," "amplifies your intentions," and "harmonizes your space's frequency," using sacred-geometry language to market a physical product with health-and-energy promises.`,
              questions: [
                `Which specific claims here are testable physics-and-health claims?`,
                `Does doubting this disrespect the real traditions that use geometry meaningfully?`,
                `How is this different from the mosque ceiling in case 2?`,
              ],
              evaluation: `This is Layer 3, an inflated mystical claim attached to a product. The claims, that a geometric crystal arrangement "aligns your energy field," "amplifies intentions," and "harmonizes frequency", are testable physical-and-health claims with no scientific support, dressed in borrowed "sacred geometry" language. Doubting this does not disrespect the real traditions; it is the opposite, because, exactly like the sacred-art case in Lesson 11, the product is exploiting the look and vocabulary of genuine traditions to sell a physics-style claim that fails. The difference from case 2 is the whole skill of the lesson: the mosque ceiling makes a meaning claim (respect), while this product makes a testable physics claim (skepticism), even though both involve "sacred geometry." Same words, different kind of claim. Keeping the meaning claim and the physics claim apart protects both the real tradition and the customer.`,
            },
            {
              id: `c5`,
              title: `"The Parthenon was designed with careful mathematical proportions for harmony"`,
              type: `Real math + real history (Layer 1)`,
              description: `An art-history explanation that the ancient Greeks deliberately used careful mathematical proportions and ratios in designing the Parthenon to create a sense of harmony and balance, and that this thoughtful use of proportion is part of why the building has looked "right" to viewers for over two thousand years.`,
              questions: [
                `Is this a true claim, an inflated one, or a mix? How can you tell?`,
                `How is "the Greeks used careful proportions for harmony" different from "the golden ratio is the universe's secret code"?`,
                `Where would this claim cross into Layer 3 if someone pushed it too far?`,
              ],
              evaluation: `This is Layer 1, real math and real history, and a basically true claim, though it is worth being precise. It is well-supported that the Greeks deliberately used careful proportions to create harmony and balance, and that thoughtful proportion is part of why the Parthenon still looks "right." That is genuine applied mathematics and good history. It is crucially different from "the golden ratio is the universe's secret code," because this claim is modest and checkable (the Greeks used proportion deliberately for aesthetic harmony) rather than a sweeping magical claim about all of reality. It would cross into Layer 3 if someone pushed it into "and therefore the Parthenon proves the golden ratio is the divine blueprint of the universe", that leap from "they used careful proportions" to "this proves a magical universal code" is exactly the inflation to watch for. The honest version stays amazed at real, deliberate, beautiful mathematics without inflating it into mysticism.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your actual rule for telling the three layers apart, real math, real tradition, and inflated mystical claim, when they all involve beautiful geometry? And how do you keep your genuine wonder at pattern while refusing the "hidden code" myth? In 5-6 sentences.`,
          reflectionPrompt: `Case 3 and case 5 both involved the golden ratio, but one was true and one was inflated. What exactly was the difference, and where is the line you would watch for in your own thinking, the point where amazement at a real pattern tips over into believing a magical claim about it?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is genuinely real and amazing about mathematics in architecture, with no mysticism needed?`,
              options: [
                `Random`,
                `Two real things. First, proportion: builders across history found that certain relationships between a building's height, width, and parts simply look and feel better balanced to human eyes, and used them deliberately, the ancient Greeks designed the Parthenon with careful ratios for harmony, and it still looks "right" thousands of years later. The golden ratio (roughly 1 to 1.618) is one such genuine, pleasing proportion that appears in some art and architecture, and the related Fibonacci sequence genuinely appears in some natural patterns like sunflower-seed spirals. Second, structural geometry that makes buildings stand up: a triangle is the strongest simple shape because it cannot be pushed out of form without changing a side's length (so bridges and towers are full of them), a dome distributes weight so a thin shell can span a huge space, and an arch turns gravity's downward pull into a sideways push stone can handle. None of this is mystical; it is geometry doing real physical and aesthetic work, and it is more than enough to be amazed by.`,
                `Just nice shapes`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Real proportion (the Greeks' deliberate ratios; the golden ratio appearing in some places) and real structural geometry (triangles, domes, arches doing physical work) are genuinely amazing with no mysticism, the real thing is already astonishing.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does it mean that a tradition uses geometry to carry meaning, and what kind of claim is that?`,
              options: [
                `Random`,
                `It means real people deliberately use geometric patterns to express and approach the sacred, and the geometry carries meaning for that tradition the way a wedding ring's circle or a flag carries meaning, by shared agreement and intention, not by a hidden physical force. When Islamic artists cover a mosque ceiling in interlocking geometric patterns, they use repetition and symmetry to suggest the infinite and the unity of creation, pointing toward God without depicting God; Buddhist mandalas use circles and symmetry to map a sacred order; Gothic and Hindu builders used proportions associated with divine order. This is a meaning claim (Tier C-cultural), true within the tradition, not a testable physics claim that the shapes emit energy. So the right response is respect, the same as for sacred art, and challenging it with "prove the pattern emits energy" would be a category error, because the tradition never made a physical claim, it made a claim about meaning.`,
                `Just decoration`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `A tradition's geometry carries meaning by shared intention (like a ring or flag), a meaning claim true within the tradition, not a testable physics claim. The right response is respect; demanding lab proof would be a category error.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is real and what is overblown about the claim that "the golden ratio is everywhere and explains all beauty"?`,
              options: [
                `Random`,
                `Real: the golden ratio (about 1.618) is a genuine, interesting number that appears in some art, architecture, and natural patterns, and many people find it pleasing, that part is true and worth keeping. Overblown: the claim that it is found in "everything," explains all beauty, and is the universe's hidden code falls apart when checked. Many famous buildings said to "contain the golden ratio" actually do not, the ratio is "found" by drawing rectangles loosely over a photo until something almost lines up, which you can do with nearly any number; the nautilus seashell, the classic example, does not actually match the golden spiral closely when measured; and humans are pattern-finding creatures who will see a favorite number in noise if they look hard enough. So the honest picture is that the golden ratio is real and shows up sometimes, while the claim that it is a universal magic key found in literally everything is mostly people drawing rectangles until they get the answer they wanted, the real seed inflated past the evidence.`,
                `Just all true`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Real seed: the golden ratio is a genuine number appearing in some places. Overblown: "everywhere, explains all beauty, universe's code" fails checking, cited buildings often lack it, the nautilus does not match, and you can fit spirals onto almost anything.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "signature" of how a real pattern gets inflated into pseudoscience, and where does it appear beyond geometry?`,
              options: [
                `Random`,
                `The signature has three steps. It starts with something real and genuinely cool (a real ratio, a real pattern). It stretches that into something universal and magical (it is everywhere, it explains everything, it has hidden power). And then it becomes unfalsifiable, so flexible that no evidence could ever disprove it, because any near-miss "counts" as proof and any total miss is ignored. That combination, a real seed, inflated past what the evidence supports, then protected from being checked, is the signature of pseudoscience, and recognizing it is a transferable skill. It appears far beyond geometry: the same pattern shows up in the 528 Hz and "energy frequency" claims from earlier lessons, in many wellness and conspiracy claims, and anywhere a true, small fact gets blown up into a grand unfalsifiable theory. Spotting "real seed, magical inflation, unfalsifiable shield" lets you keep the true part while rejecting the overblown claim, in any topic, not just sacred geometry.`,
                `Just lies`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The signature: a real cool seed → inflated to universal/magical → made unfalsifiable (near-misses count, misses ignored). It recurs everywhere (528 Hz claims, wellness, conspiracies), so spotting it lets you keep the true seed and reject the overblown claim on any topic.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is the true story about math and beauty actually MORE beautiful than the "hidden code" myth?`,
              options: [
                `Random`,
                `Because the true story is richer and does not collapse when you check it. The myth says "one magic number explains everything," which sounds thrilling but falls apart the moment you actually measure a building or a shell. The true story is that simple mathematical rules can produce astonishing complexity and beauty, that the same geometry holds up a cathedral and arranges a sunflower's seeds for real physical reasons, that humans across every culture independently reached for proportion and pattern to make beauty and meaning, and that we are creatures who find certain patterns moving in ways scientists are still studying. That is genuinely wonderful, and it is true, so it does not crumble under examination the way the myth does. The myth gives you a fake key that opens nothing; the truth gives you real keys that open real doors. Being moved by the real math is not a consolation prize compared to the magic story, it is the better, sturdier wonder, because accurate awe cannot be knocked down by the next person who actually measures something.`,
                `Just is`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The myth ("one magic number explains all") collapses when measured; the truth (simple rules producing real complexity and beauty, the same geometry in cathedrals and sunflowers) is richer and survives checking. A fake key opens nothing; real keys open real doors.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are the three layers this lesson asks you to keep distinct, and the right response to each?`,
              options: [
                `Random`,
                `Layer one is the real math: real proportions like the golden ratio that genuinely appear in some places, and real structural geometry (triangles, domes, arches) that genuinely makes buildings stand, the right response is amazement, because it is true and astonishing with no mysticism needed. Layer two is real cultural and spiritual traditions deliberately using geometry to carry meaning and point toward the sacred (Islamic patterns, mandalas, cathedral and temple proportions), the right response is respect, because these are meaning claims, true within their tradition like a ring or flag, not testable physics claims. Layer three is the overblown "universe's hidden code" claims that inflate a real pattern into a magical universal key (and products that claim a shape heals your body), the right response is skepticism, because these are testable physics-style claims that do not survive measurement. The hard part is that all three involve beautiful shapes and the word "geometry," so you cannot sort by how they look or feel, you have to ask what kind of claim each is actually making.`,
                `Just good and bad`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Layer 1 real math → amazement; Layer 2 real tradition's meaning → respect; Layer 3 inflated mystical/physics claim → skepticism. They all involve beautiful geometry, so you sort by what kind of claim each makes, not by vibe.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How is a mosque's sacred geometric pattern different from a "sacred geometry crystal grid that aligns your energy," even though both involve sacred geometry?`,
              options: [
                `Random`,
                `They make completely different kinds of claims, which is the whole skill of the lesson. The mosque's geometric pattern makes a meaning claim: within the tradition, the repeating geometry points toward the infinite and the unity of creation, which is true for that tradition the way a wedding ring is meaningful, by shared intention, not by a hidden physical force, so the right response is respect (Layer 2, Tier C-cultural). The "crystal grid that aligns your energy" makes a testable physical-and-health claim: that a geometric arrangement measurably alters your body's energy field, amplifies intentions, or harmonizes frequency, which has no scientific support and uses borrowed sacred-geometry language to sell a product, so the right response is skepticism (Layer 3, pseudoscience). Doubting the product does not disrespect the real tradition, it protects both the tradition (from being cheapened into merchandise) and the customer (from a false claim). Same words, "sacred geometry," but a meaning claim and a physics claim are different things, and telling them apart is exactly what this lesson trains.`,
                `Just both spiritual`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The mosque makes a meaning claim (true within the tradition, like a ring) → respect; the crystal grid makes a testable, unsupported physics-and-health claim using borrowed language → skepticism. Same words, different kind of claim, and doubting the product protects both tradition and customer.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why are humans so prone to believing the "hidden code in everything" story, and why is that pull not stupid?`,
              options: [
                `Random`,
                `Because we are pattern-finding creatures: our brains are built to spot patterns, an ability that kept our ancestors alive (that shape might be a predator, that arrangement might mean food), and that same gift makes us see faces in clouds, meaning in coincidence, and a favorite number "everywhere" if we look hard enough. So the idea that one beautiful number secretly orders all of reality feels thrilling and almost true, not because people are foolish, but because our pattern-detection is powerful and sometimes overshoots. The myth also offers real comfort: a hidden code means the universe is not random, that there is a secret order, that beauty has a reason, and those are deep, understandable human wishes. Recognizing that the pull is genuine and human, rather than sneering at people who feel it, is part of thinking clearly, because it lets you notice the same pull in yourself and stay honest, keeping the genuine wonder at real patterns while declining to inflate it into magic just because the inflation feels satisfying.`,
                `Just gullible`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Our pattern-finding brains (which kept ancestors alive) make us see patterns even in noise, so "one number orders everything" feels almost true, and the myth comforts (the universe is not random). The pull is genuine and human, not stupid; noticing it in yourself keeps you honest.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because the "golden ratio is the universe's secret code" claim is overblown, you should also dismiss the real golden ratio, the real proportions in Greek architecture, and the real traditions that use geometry as all being nonsense.`,
              correctAnswer: false,
              explanation: `False, and avoiding this overcorrection is as important as avoiding the myth. The whole skill of this lesson is keeping three layers distinct, not collapsing them. The "universe's secret code, found in everything" claim is overblown and deserves skepticism, but that does not make the real things nonsense. The golden ratio is a genuine, interesting number that really does appear in some art and nature, the ancient Greeks really did use careful mathematical proportions to make the Parthenon harmonious, structural geometry really does make domes and arches and bridges stand up, and real cultural and spiritual traditions really do use geometry meaningfully to point toward the sacred. Throwing all of that out because one inflated claim is false would be its own error, the cynical overcorrection that loses real wonder along with the myth. The mature move is precise, not sweeping: keep amazement at the real math, keep respect for the real traditions, and aim skepticism only at the specific inflated, testable claims that do not survive measurement. Loving the genuine pattern in a sunflower and respecting a mosque's geometry while doubting a "golden ratio explains everything" video are all part of the same clear thinking, accurate awe keeps the real wonder and drops only the false weight.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine you are 13 and a friend excitedly shows you a video "proving" that the golden ratio is hidden in the pyramids, famous paintings, the human face, seashells, and galaxies, and says it proves the universe was "designed by a secret mathematical code." Your friend is genuinely amazed and a little bit in love with the idea. Using this whole lesson, what do you actually think and say?`,
              options: [
                `"Just say it's fake"`,
                `Several things, held together, because the goal is to be accurate without crushing your friend's genuine sense of wonder, and those two are not in conflict if you do it well. First, share the real wonder honestly, because a lot of what excited your friend is genuinely cool and you should say so: the golden ratio really is a real, interesting number, it really does appear in some places in art and nature, simple math rules really can produce astonishing beauty, and humans across cultures really did reach for proportion to make beautiful things, so you are not the friend who sneers at everything, you actually agree the real pattern is amazing. Second, gently separate the real seed from the overblown claim, which is the core skill: "the golden ratio is a cool real pattern that shows up sometimes" is true, but "it is hidden in literally everything and proves the universe was designed by a secret code" is the part that does not hold up when you check it. Third, give your friend the actual reasons it does not hold up, kindly and specifically, not as a put-down: a lot of the famous examples do not really contain the golden ratio when you measure carefully, people "find" it by drawing rectangles or spirals loosely over a photo until something almost lines up, and you can do that with almost any number, the nautilus shell that always gets used does not actually match the golden spiral closely when measured, and because our brains are pattern-finding machines, we will see a favorite number "everywhere" if we go looking for it. Fourth, name the pull honestly and without mocking it, because the wish behind the myth is real and human: it feels amazing to think one beautiful number secretly orders all of reality, and that there is a hidden design rather than randomness, and wanting that is not stupid, it is the same pattern-loving instinct that makes us human, so you can validate the feeling while questioning the claim. Fifth, offer the genuinely more beautiful truth as a gift rather than a correction: the real story is not "one magic number explains everything," it is that simple math rules produce real complexity and beauty, that the same geometry holds up a cathedral and arranges a sunflower's seeds for real reasons, and that this is true and does not fall apart when you measure it, which makes it sturdier wonder than the myth, a fake key that opens nothing versus real keys that open real doors. Sixth, hold the relationship and the deeper lesson: the point is not to win and make your friend feel dumb for being excited, it is to share accurate awe, so you might say something like "honestly the real version is even cooler, want me to show you what's actually true about it?" That keeps your friend's wonder alive, redirects it toward what is real, and models the thing this whole lesson is about, that being moved by beauty and thinking clearly are partners, not enemies, and that the person who can do both ends up with more real wonder, not less.`,
                `"Random"`,
                `"Just maybe"`,
              ],
              correctIndex: 1,
              explanation: `Applied "accurate awe." The move is to genuinely share the real wonder (the golden ratio is a real, cool pattern), separate that real seed from the overblown "hidden in everything / proves a secret code" claim, give specific kind reasons the overclaim fails (cited examples often lack it; you can fit spirals onto anything; the nautilus does not match; our brains see patterns in noise), validate the human pull without mocking it, and offer the truer story as the more beautiful one, all without crushing the friend. Being moved by beauty and thinking clearly are partners, so the friend ends up with more real wonder, not less.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you believe any version of "the golden ratio is everywhere"? What changed when you saw how the famous examples fall apart when measured? Did losing the myth feel like a loss, or did the real story turn out to be better?` },
            { id: `reflect-unclear`, category: `What's still unclear`, prompt: `The three layers, real math, real tradition, inflated claim, all involve beautiful geometry. Which two are hardest for you to tell apart, and what question would you ask to separate them when you are not sure?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson says being moved by beauty and thinking clearly are partners. Are you more tempted to be the believer who loves the magic story, or the cynic who sneers at all wonder? What would "accurate awe" look like for you specifically?` },
            { id: `reflect-pattern`, category: `Pattern-finding`, prompt: `We are pattern-finding creatures who see meaning in noise. Where have you caught your own brain seeing a pattern that probably was not really there, a "sign," a coincidence that felt meaningful? How do you tell a real pattern from a wished-for one?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `The "real seed, inflated to magic, made unfalsifiable" signature appears far beyond geometry. Where else have you seen a true small fact blown up into a grand claim that cannot be checked? How will you spot it next time?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "you're sucking the magic out of everything; sometimes it's nicer to just believe the beautiful story." State the strongest version of that. Where is it partly right about wonder, and where does this lesson show that truth gives you more wonder, not less?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Geometry and "hidden code" claims are all around you, in buildings, online, and in marketing. Two paths.`,
          familyActivity: {
            title: `Measure The Myth`,
            duration: `45 minutes`,
            description: `Test a "golden ratio is everywhere" claim with your family, using nothing but a ruler or a phone measuring tool, and feel the difference between a real pattern and a wished-for one. Find a few images people claim "contain the golden ratio", a famous painting, a building facade, even a family photo, and actually try to measure whether the proportions really come out to about 1.618. You will usually find that you can sort of make it work if you place your lines generously, and that it does not work if you measure honestly, which is exactly the lesson: the ratio is "found" by drawing until something almost lines up. Then look at something where simple math is genuinely, checkably at work, count the spiral rows of seeds in a sunflower or pinecone, or look at the triangles in a bridge or tower, and notice the difference between a real, measurable pattern and an imposed one. Talk about how it felt to lose the "everywhere" myth and gain the real, sturdier wonder. The goal is to experience, hands-on, the difference between accurate awe and a story that does not survive a ruler.`,
          },
          projectOption: {
            title: `Design With Real Geometry, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Make something beautiful using real geometry, honestly, no mystical claims attached. Week 1: choose a path. Path A, design a small structure or model (a bridge, a tower, a dome, a shelter) and use real structural geometry, triangles for strength, an arch or dome for spanning, and notice how the geometry does actual physical work. Path B, create a piece of geometric art (a tiling pattern, a symmetric design, a mandala-inspired abstract pattern of your own) and play with proportion, symmetry, and repetition to make something that genuinely pleases the eye. Week 2: finish it, then write a short reflection on what real mathematical ideas you actually used (which shapes, which proportions, which structural principles) and, importantly, what you did NOT claim, no "this aligns your energy," no "secret code," just real, honest, beautiful geometry. The point is to feel that the real math is more than enough to make something wonderful, and to practice making beauty without reaching for a magical story to dress it up.`,
            offerToParent: `Parent: opt your child into the real-geometry design project. Making something genuinely beautiful using real structural or proportional geometry, while deliberately attaching no mystical claims, teaches both real mathematical thinking and the discipline of accurate wonder, being amazed by what is true without inflating it, which is one of the most transferable critical-thinking skills in the whole band.`,
          },
          identityQuestion: `If you become someone who can be genuinely awed by the real math in a sunflower, a cathedral, and a mosque's endless pattern, and at the same time calmly see through a "this shape is the universe's secret code" claim, what does that let you do in a world full of beautiful images paired with claims that do not survive a ruler?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can be amazed by a real pattern and still measure the claims about it.`,
            `A person who keeps the real wonder and drops the magic story that does not survive a ruler.`,
            `Someone who can tell real math from a real tradition from a "hidden code" myth.`,
          ],
          saveKey: `identity_responses_ca_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelve down. This one asked for your sharpest combination of wonder and clear thinking, and you held it. You learned that the real math in architecture is amazing on its own, real proportions like the golden ratio that appear in some places, and real structural geometry, triangles, domes, arches, that genuinely makes buildings stand, with no mysticism needed. You learned that real cultural and spiritual traditions deliberately use geometry to carry meaning and point toward the sacred, a meaning claim worthy of respect, like a ring or a flag, not a physics claim. And you learned to spot the overblown "universe's hidden code" claims, like the strong version of "the golden ratio is in everything," that do not survive measurement, and to recognize the pseudoscience signature: a real seed, inflated to a magical universal key, then made unfalsifiable. Most of all, you learned the heart of this whole band: being moved by beauty and thinking clearly about facts are not enemies but partners, and that the truth, simple rules producing real complexity and beauty, is more wonderful than the myth because it does not collapse when you measure it. Accurate awe keeps all the real wonder and drops only the false weight. Next: the neuroscience of creativity, where you turn that same clear thinking on claims about your own creative brain. Onward, {name}. — Muse`,
          badge: `geometry-architecture-literate`,
          badgeName: `Geometry & Architecture Literate`,
          xpEarned: 75,
          competencies: [
            `Recognizes the real mathematics in architecture (deliberate proportion, the golden ratio appearing in some places, structural geometry of triangles/domes/arches) as genuinely amazing without mysticism`,
            `Understands traditions that use geometry to carry meaning as making meaning claims (Tier C-cultural) deserving respect, not testable physics claims`,
            `Identifies the overblown "universe's hidden code" claims (e.g. strong-form "golden ratio is everywhere") and why they fail measurement`,
            `Names the pseudoscience signature: a real seed, inflated to a universal/magical claim, then made unfalsifiable, and finds it beyond geometry`,
            `Keeps three layers distinct (real math, real tradition, inflated claim) by asking what kind of claim each makes, not sorting by vibe`,
            `Understands why the "hidden code" myth tempts (pattern-finding brains, comfort) without mocking the pull, and why the true story is the more beautiful one`,
            `Practices "accurate awe": keeping genuine wonder at real patterns while refusing inflated magical claims, and sharing that with others without crushing their wonder`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: The Neuroscience of Creativity`,
            hook: `What actually happens in a creative brain, and why almost everything you have heard about "right-brained" people is a myth. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default CREATIVE_ARTS_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = CREATIVE_ARTS_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cases = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} cases=${cases} q=${quiz} r=${reflect}`
  );
}
