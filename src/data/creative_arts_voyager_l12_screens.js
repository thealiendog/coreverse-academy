// ─────────────────────────────────────────────────────────────────────────────
// CREATIVE ARTS VOYAGER  |  L12 — Architecture and Sacred Geometry
// Age band : voyagers (11-12)   Guide: muse (Butterfly)
// Standards: Coreverse Original — Architecture, Geometry, Aesthetics, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026), age-band tightened (concrete anchors)
//
// Interaction format: SOURCE EVALUATION (sort claims about geometry in architecture
// across reliability tiers, separating real mathematics and design from mystical
// "sacred geometry" marketing). Contract matches L03/L06/L08/L11: sources[] with
// tier/title/type/context/quote/questions[]/evaluation; synthesisPrompt + reflectionPrompt.
// SENSITIVITY: respects genuine traditions that use geometry sacredly (Islamic,
// Hindu, Christian, etc.) as meaning practices, while applying clear skepticism to
// falsifiable "the golden ratio is everywhere / heals you" physics-style claims.
// Includes the documented corrections: the golden ratio is NOT actually everywhere
// in famous buildings/nature, and the nautilus shell does NOT follow the golden ratio.
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
      badge: `geometry-in-architecture-literate`,
      badgeName: `Geometry & Architecture Literate`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson you saw humans reaching for the sacred through art. Today we follow that reaching into stone and number, into architecture and the famous idea of "sacred geometry." Here is the question that will pull at you the whole way through: when a building feels deeply right, when a temple or cathedral or mosque seems to hum with order, is that because of real mathematics the builders genuinely used, or because of a mystical story someone told about it later? The honest answer is some of both, and telling them apart is the whole skill. Real geometry has shaped real buildings for thousands of years, and that is genuinely amazing. But a whole industry now claims the "golden ratio" is secretly everywhere and that certain shapes heal your body, and most of that is not true. Today you will hold both: real wonder at the mathematics builders actually used, and clear eyes about the myths bolted on afterward. Onward.`,
          headline: `Architecture and Sacred Geometry`,
          subtitle: `Where real math meets mystical claims. Source Evaluation.`,
          visual: `/voyager-assets/creative-arts/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Geometry Really Did Build The World`,
          paragraphs: [
            `Begin with what is genuinely true, because it is wonderful. For thousands of years, builders have used real geometry to make structures that stand, soar, and move us. The architect Vitruvius, writing in Rome around 30 BCE, argued that good building rests on three things: firmness, usefulness, and beauty, and that beauty came in large part from proportion, the careful relationship of parts to the whole. Renaissance architects like Andrea Palladio, in his "Four Books of Architecture" of 1570, turned proportion into a near-science, designing rooms whose width, length, and height followed clean ratios he believed produced harmony.`,
            `This is not mysticism; it is craft and mathematics doing real work. A dome stays up because of the geometry of the arch. A Gothic cathedral reaches breathtaking height because pointed arches and ribbed vaults channel weight along precise lines. Islamic architects created ceilings of interlocking geometric pattern so sophisticated that mathematicians today study them for symmetry types the builders discovered by hand, centuries before the math was formally described. The geometry in these buildings is real, deliberate, and astonishing, and you do not need any mystical story to be amazed by it.`,
            `So the first thing to hold is simple and solid: geometry genuinely shapes great architecture. Proportion, symmetry, and pattern are real tools that real builders used to make real beauty and real strength. Keep this firmly in mind, because the rest of the lesson asks you to be skeptical of certain claims, and that skepticism only works if it is aimed precisely. We are not going to say "geometry in buildings is fake." We are going to say the opposite: it is so real and so impressive that it does not need the exaggerations and myths that later got attached to it.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s1-geometry.webp`,
          imageCaption: `Start with what is genuinely true and wonderful: for thousands of years builders used real geometry to make structures that stand, soar, and move us. Vitruvius (Rome, ~30 BCE) argued good building rests on firmness, usefulness, and beauty, with beauty coming largely from proportion. Palladio's "Four Books of Architecture" (1570) turned proportion into near-science, rooms with clean ratios he believed produced harmony. This is craft and math doing real work: a dome stays up by the geometry of the arch; a Gothic cathedral soars because pointed arches and ribbed vaults channel weight along precise lines; Islamic geometric ceilings are so sophisticated mathematicians study them for symmetry types builders found by hand centuries before the math was described. The geometry is real, deliberate, astonishing, no mystical story needed. Hold this firmly: skepticism later only works if aimed precisely. Not "geometry in buildings is fake", the opposite: it is so real it needs no myths.`,
          vocab: [
            {
              word: `build world`,
              definition: `The solid, true foundation before any skepticism: for thousands of years, builders have used real geometry to make structures that stand, soar, and move people, and this is craft and mathematics, not mysticism. Vitruvius, writing in Rome around 30 BCE, argued that good building rests on firmness, usefulness, and beauty, with beauty coming largely from proportion (the careful relationship of parts to the whole); Renaissance architects like Andrea Palladio, in his "Four Books of Architecture" of 1570, turned proportion into a near-science, designing rooms whose width, length, and height followed clean ratios he believed produced harmony. The geometry does real structural and aesthetic work: a dome stays up because of the geometry of the arch, a Gothic cathedral reaches breathtaking height because pointed arches and ribbed vaults channel weight along precise lines, and Islamic architects created interlocking geometric ceilings so sophisticated that mathematicians today study them for symmetry types the builders discovered by hand, centuries before the math was formally described. The point to carry is that geometry genuinely shapes great architecture, so any later skepticism must be aimed precisely: not "geometry in buildings is fake," but the opposite, that it is so real and impressive it does not need the exaggerations and myths later attached to it.`,
              audioPrompt: `Begin with what is genuinely true, {name}, because it is wonderful. For thousands of years, builders have used real geometry to make structures that stand, soar, and move us. The architect Vitruvius, writing in Rome around 30 BCE, argued that good building rests on three things: firmness, usefulness, and beauty, and that beauty came in large part from proportion. Renaissance architects like Andrea Palladio, in his Four Books of Architecture of 1570, turned proportion into a near-science, designing rooms whose width, length, and height followed clean ratios he believed produced harmony. This is not mysticism; it is craft and mathematics doing real work. A dome stays up because of the geometry of the arch. A Gothic cathedral reaches breathtaking height because pointed arches and ribbed vaults channel weight along precise lines. Islamic architects created ceilings of interlocking geometric pattern so sophisticated that mathematicians today study them. The geometry in these buildings is real, deliberate, and astonishing, and you do not need any mystical story to be amazed by it. Keep this firmly in mind, because the rest of the lesson asks you to be skeptical of certain claims, and that skepticism only works if it is aimed precisely.`,
            },
            {
              word: `Vitruvius`,
              definition: `Ancient Roman architect writing around 30 BCE who argued that good building rests on three things: firmness, usefulness, and beauty — and that beauty came in large part from proportion, the careful relationship of parts to the whole. His thinking influenced Renaissance architects and established proportion as a central tool of architecture for centuries.`,
              audioPrompt: `Vitruvius is one of the oldest and most important names in the history of architecture, {name}. He was writing in Rome around 30 BCE, and his core argument has echoed through the centuries since. Good building, he said, rests on three things: firmness, usefulness, and beauty. Firmness means the building stays up. Usefulness means it does what it is supposed to do. And beauty — and this is the part that matters most for this lesson — comes in large part from proportion: the careful relationship of parts to the whole. The width to the height. The column to the space between columns. The room's dimensions to each other. When those relationships are well-chosen, the building feels right in a way that is hard to put into words but easy to feel. Vitruvius was not making a mystical claim. He was describing a craft practice: that proportions can be chosen deliberately to create harmony, and that this is something builders can learn and use. Renaissance architects like Andrea Palladio took that idea and turned it into a near-science, designing rooms with clean ratios he believed produced harmony. This is mathematics doing real aesthetic work, and it needs no magical overlay to be impressive.`,
            },
            {
              word: `ribbed vaults`,
              definition: `A structural element of Gothic architecture: ribbed vaults, together with pointed arches, channel weight along precise lines so that a Gothic cathedral can reach breathtaking height. This is geometry doing real structural work — not mysticism but engineering, real craft and mathematics that produced some of the most soaring and moving spaces humans have ever built.`,
              audioPrompt: `Ribbed vaults are one of the clearest examples of geometry doing real structural work in architecture, {name}. In a Gothic cathedral, the challenge was to build higher than seemed possible in stone, to reach heights that felt breathtaking and otherworldly, that made a person feel small before something vast. The solution was geometry. Pointed arches and ribbed vaults work together to channel the enormous weight of the stone roof along precise lines, directing it outward and downward in ways that keep the structure stable while allowing walls to be thinner and windows to be larger. This is not mysticism. It is engineering. It is builders understanding the geometry of forces so well that they could build structures their contemporaries thought were miraculous. And in a sense they were miraculous, not because of any hidden code but because of the depth of knowledge and craft that went into them. When you stand inside a Gothic cathedral and feel the impossible height above you, the light pouring through tall windows, the sense of being lifted, you are experiencing the result of real geometric problem-solving. The wonder is real. The mechanism is real. No magical story is needed.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Golden Ratio: Real Number, Tall Tales`,
          paragraphs: [
            `Now meet the most famous character in this story: the golden ratio, often written with the Greek letter phi, roughly 1.618. It is a real and genuinely interesting number in mathematics, where a line is divided so the whole relates to the larger part exactly as the larger part relates to the smaller. Mathematicians have studied it for centuries, it shows up in real places in math, and it is connected to the Fibonacci sequence. None of that is in dispute, and it is honestly a beautiful piece of mathematics.`,
            `The trouble starts with a much bigger claim that got attached to it: that the golden ratio is secretly everywhere, in the Parthenon, the Great Pyramid, the Mona Lisa, your face, seashells, and that it is the universe's hidden code of beauty. This is the part that mostly does not hold up. Careful researchers who actually measured have found that many famous "golden ratio" buildings and artworks do not match phi closely at all, the numbers were often stretched, cherry-picked, or drawn with thick lines that could "prove" almost any ratio. The Parthenon claim, for instance, depends heavily on where you decide to draw the rectangle.`,
            `Here is a clean example to remember: people constantly say the nautilus shell is a perfect golden spiral. It is not. The nautilus grows in a logarithmic spiral, which is real and lovely, but its growth ratio is not the golden ratio, it is noticeably different, and you can check this with measurements. The lesson is not that the golden ratio is fake; the number is real and real designers do sometimes use it on purpose. The lesson is that the claim "phi is the secret code of all beauty and it is hidden everywhere" is a myth built by repetition, not by measurement. A real number got wrapped in a tall tale, and telling the two apart is exactly the skill this lesson is building.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s2-goldenratio.webp`,
          imageCaption: `Meet the famous golden ratio (Greek phi, ~1.618): a real, genuinely interesting number where a line is divided so the whole relates to the larger part as the larger relates to the smaller, studied for centuries, connected to the Fibonacci sequence, beautiful math, none of that in dispute. The trouble is the bigger claim bolted on: that phi is secretly EVERYWHERE (Parthenon, Great Pyramid, Mona Lisa, your face, seashells) as the universe's hidden code of beauty. That mostly does not hold up: careful researchers who actually measured found many famous "golden ratio" cases don't match phi closely; numbers were stretched, cherry-picked, or drawn with thick lines that "prove" almost any ratio (the Parthenon claim depends on where you draw the rectangle). Clean example: the nautilus shell is NOT a golden spiral, it grows in a logarithmic spiral whose ratio is noticeably different, checkable by measurement. Not "phi is fake", the number is real and designers do use it on purpose; the MYTH is "phi is the hidden code of all beauty," built by repetition not measurement.`,
          vocab: [
            {
              word: `tall tale`,
              definition: `The golden ratio, often written with the Greek letter phi and roughly equal to 1.618, is a real and genuinely interesting number in mathematics: a line divided so the whole relates to the larger part exactly as the larger part relates to the smaller, studied for centuries, connected to the Fibonacci sequence, beautiful and not in dispute. The trouble starts with a much bigger claim attached to it, that the golden ratio is secretly everywhere (the Parthenon, the Great Pyramid, the Mona Lisa, your face, seashells) and is the universe's hidden code of beauty, which mostly does not hold up: careful researchers who actually measured found that many famous "golden ratio" buildings and artworks do not match phi closely, with numbers often stretched, cherry-picked, or drawn with thick lines that could "prove" almost any ratio (the Parthenon claim depends heavily on where you decide to draw the rectangle). A clean example to remember: people constantly say the nautilus shell is a perfect golden spiral, but it is not, it grows in a logarithmic spiral, which is real and lovely, but its growth ratio is noticeably different from the golden ratio and can be checked with measurements. The lesson is not that phi is fake, the number is real and real designers do sometimes use it on purpose, but that the claim "phi is the secret code of all beauty, hidden everywhere" is a myth built by repetition rather than measurement, and telling the real number apart from the tall tale is the core skill.`,
              audioPrompt: `Now meet the most famous character in this story, {name}: the golden ratio, often written with the Greek letter phi, roughly 1.618. It is a real and genuinely interesting number in mathematics, where a line is divided so the whole relates to the larger part exactly as the larger part relates to the smaller. Mathematicians have studied it for centuries, and it is connected to the Fibonacci sequence. None of that is in dispute. The trouble starts with a much bigger claim: that the golden ratio is secretly everywhere, in the Parthenon, the Great Pyramid, the Mona Lisa, your face, seashells, and that it is the universe's hidden code of beauty. This part mostly does not hold up. Careful researchers who actually measured found that many famous golden ratio buildings and artworks do not match phi closely at all; the numbers were often stretched, cherry-picked, or drawn with thick lines that could prove almost any ratio. Here is a clean example to remember: people constantly say the nautilus shell is a perfect golden spiral. It is not. The nautilus grows in a logarithmic spiral, which is real and lovely, but its growth ratio is not the golden ratio. The number is real and real designers do sometimes use it on purpose. The myth is the claim that phi is the secret code of all beauty, hidden everywhere, built by repetition, not by measurement.`,
            },
            {
              word: `golden ratio`,
              definition: `A real and genuinely interesting number in mathematics, written with the Greek letter phi, roughly 1.618: a line divided so the whole relates to the larger part exactly as the larger part relates to the smaller. Mathematicians have studied it for centuries; it is connected to the Fibonacci sequence; it is beautiful. None of that is in dispute. What fails is the bigger claim that phi is secretly everywhere as the universe's hidden code of beauty — that claim mostly does not hold up when people actually measure.`,
              audioPrompt: `The golden ratio is a real and genuinely interesting number in mathematics, {name}, and it is worth understanding clearly before you evaluate any claims about it. The number is often written with the Greek letter phi and is roughly equal to 1.618. The mathematical definition: a line is divided so that the whole line relates to the larger part exactly as the larger part relates to the smaller. That specific self-similar relationship produces the number phi. Mathematicians have studied it for centuries. It is connected to the Fibonacci sequence, that famous series where each number is the sum of the two before it, and the ratios between consecutive Fibonacci numbers approach phi. All of that is real and genuinely beautiful mathematics. None of it is in dispute. The trouble starts when someone takes this real number and wraps it in a tall tale: that phi is secretly everywhere, in the Parthenon, the Great Pyramid, the Mona Lisa, your face, seashells, and that it is the universe's hidden code of all beauty. That larger claim mostly does not hold up when people actually measure. Careful researchers found many "golden ratio" buildings and artworks do not match phi closely — the numbers were stretched, cherry-picked, or drawn with thick lines that could "prove" almost any ratio. The number is real. The myth is not.`,
            },
            {
              word: `nautilus shell`,
              definition: `The classic clean example of the golden-ratio myth: people constantly say the nautilus shell is a perfect golden spiral, but it is not. The nautilus grows in a logarithmic spiral — which is real and lovely — but its growth ratio is noticeably different from the golden ratio, and this can be checked with measurements. It is the lesson's clean example of a myth repeated until it sounded true.`,
              audioPrompt: `The nautilus shell is the clean example to remember from this lesson, {name}, because it is the most famous case of the golden-ratio myth. People constantly say the nautilus shell is a perfect golden spiral, a beautiful, self-similar spiral that follows the golden ratio as it grows. It is one of the most repeated "facts" about phi. The problem: it is not true. The nautilus does grow in a spiral, and it is a real and lovely one, a logarithmic spiral, meaning it expands by a consistent factor as it goes around. But its growth ratio is noticeably different from the golden ratio. Not close. Not close enough to round to phi. Measurably different. And you can check this yourself with a ruler and a photograph, which is exactly the kind of thing that separates a claim from a myth. Someone measured at some point, found something that looked kind of like a spiral, told the story, and then everyone repeated it, and it got into textbooks and videos and posts until it sounded like established fact. It is the lesson's cleanest example of a myth built by repetition, not by measurement. The number phi is real. The shell is real. The claim that the shell is a golden spiral is not.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Geometry Is Genuinely Sacred`,
          paragraphs: [
            `Now connect this to last lesson, carefully. Many real traditions genuinely treat geometry as sacred, and that is completely different from the golden-ratio marketing myth. In Islamic architecture, the endlessly repeating geometric patterns are a profound way of pointing toward the infinite and the unity of all creation, exactly the meaning-claim you learned to respect. Hindu temple design follows the vastu tradition, ancient texts laying out sacred proportion and orientation. Chinese traditions placed buildings according to careful principles of harmony with the landscape. In each case, geometry carries deep meaning for the people of that tradition.`,
            `The key is to apply the same tier-thinking you built in the last lesson. When a tradition says "this geometric pattern helps us contemplate the divine" or "these proportions express sacred order," that is a Tier C-cultural claim about meaning, and the right response is respect, not "prove it in a lab." The geometry is genuinely part of how that tradition reaches the sacred, the same way a mandala or a cathedral is, and it deserves to be met on its own terms. Nobody is making a testable physics claim when they say a temple's proportions honor the gods.`,
            `So watch the line carefully, because it is the heart of today. "Our tradition uses this sacred geometry to contemplate the infinite" is a meaning-claim, real, respectable, not for the lab. "This pyramid shape measurably concentrates mystical energy that sharpens razor blades and heals your body" is a falsifiable physics claim, and it fails when tested. Both might use the words "sacred geometry," but they are completely different kinds of claim, and the entire skill is refusing to lump them together. You can deeply respect the geometry in a mosque or temple and still laugh off a website selling "sacred geometry energy pyramids," with no contradiction at all.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s3-sacred.webp`,
          imageCaption: `Connect to last lesson carefully: many real traditions genuinely treat geometry as sacred, completely different from golden-ratio marketing. Islamic architecture's endlessly repeating geometric patterns point toward the infinite and the unity of creation (a meaning-claim to respect); Hindu temple design follows the vastu tradition of sacred proportion and orientation; Chinese traditions placed buildings by principles of harmony with landscape. Apply the same tier-thinking: "this geometric pattern helps us contemplate the divine" or "these proportions express sacred order" is a Tier C-cultural meaning-claim, right response is respect, not "prove it in a lab." Watch the line, it's the heart of today: "our tradition uses this sacred geometry to contemplate the infinite" (meaning-claim, respectable, not for the lab) vs. "this pyramid shape measurably concentrates energy that sharpens razors and heals your body" (falsifiable physics claim, fails testing). Both may say "sacred geometry" but they are different kinds of claim. You can deeply respect a mosque's geometry AND laugh off "sacred geometry energy pyramids," no contradiction.`,
          vocab: [
            {
              word: `genuinely sacred`,
              definition: `Many real traditions genuinely treat geometry as sacred, which is completely different from the golden-ratio marketing myth and is engaged using the same tier-thinking from the last lesson. In Islamic architecture, endlessly repeating geometric patterns are a profound way of pointing toward the infinite and the unity of all creation; Hindu temple design follows the vastu tradition of ancient texts laying out sacred proportion and orientation; Chinese traditions placed buildings according to principles of harmony with the landscape, and in each case geometry carries deep meaning for the people of that tradition. When a tradition says "this geometric pattern helps us contemplate the divine" or "these proportions express sacred order," that is a Tier C-cultural claim about meaning, and the right response is respect, not "prove it in a lab," because the geometry is genuinely part of how that tradition reaches the sacred, the way a mandala or cathedral is, and nobody is making a testable physics claim when they say a temple's proportions honor the gods. The heart of the lesson is watching the line: "our tradition uses this sacred geometry to contemplate the infinite" is a meaning-claim (real, respectable, not for the lab), while "this pyramid shape measurably concentrates mystical energy that sharpens razor blades and heals your body" is a falsifiable physics claim that fails when tested, and although both might use the words "sacred geometry," they are completely different kinds of claim. You can deeply respect the geometry in a mosque or temple and still laugh off a website selling "sacred geometry energy pyramids," with no contradiction at all.`,
              audioPrompt: `Now connect this to last lesson, carefully, {name}. Many real traditions genuinely treat geometry as sacred, and that is completely different from the golden-ratio marketing myth. In Islamic architecture, the endlessly repeating geometric patterns are a profound way of pointing toward the infinite and the unity of all creation, exactly the meaning-claim you learned to respect. Hindu temple design follows the vastu tradition, ancient texts laying out sacred proportion and orientation. The key is to apply the same tier-thinking you built last lesson. When a tradition says this geometric pattern helps us contemplate the divine, that is a Tier C-cultural claim about meaning, and the right response is respect, not prove it in a lab. So watch the line carefully, because it is the heart of today. Our tradition uses this sacred geometry to contemplate the infinite is a meaning-claim, real, respectable, not for the lab. This pyramid shape measurably concentrates mystical energy that sharpens razor blades and heals your body is a falsifiable physics claim, and it fails when tested. Both might use the words sacred geometry, but they are completely different kinds of claim. You can deeply respect the geometry in a mosque or temple and still laugh off a website selling sacred geometry energy pyramids, with no contradiction at all.`,
            },
            {
              word: `vastu tradition`,
              definition: `Hindu temple design follows the vastu tradition — ancient texts laying out sacred proportion and orientation. In this tradition, the geometry of the building carries deep meaning for the people of that tradition. This is a Tier C-cultural meaning-claim: nobody is making a testable physics claim when they say a temple's proportions honor the gods. The right response is respect, not "prove it in a lab."`,
              audioPrompt: `The vastu tradition is the Hindu approach to sacred proportion and orientation in building, {name}. Ancient texts lay out principles for how a temple should be proportioned, how it should be oriented in relation to the directions and the cosmos, how the spaces within it should relate to each other. These proportions and orientations carry deep meaning for the people of the tradition. The geometry of the building is not arbitrary. It is a way of expressing the sacred order of the world, of honoring the gods, of making the structure a reflection of something larger. This is a Tier C-cultural claim about meaning. Nobody is saying "this proportion measurably affects your body's chemistry" or "this orientation concentrates a physical force." They are saying "these proportions express sacred order and help us honor the divine." That is a completely different kind of claim. The right response is not to demand they prove it in a lab. The right response is to engage it as a serious, centuries-old meaning-practice that carries real significance for real people, which is exactly what it is. You can stand in a Hindu temple that follows vastu principles, recognize the care and meaning behind the proportions, and respect what they express, without sharing the faith and without demanding a physics experiment.`,
            },
            {
              word: `meaning claim`,
              definition: `A claim about meaning, purpose, or the sacred — not a testable claim about physical effects. When a tradition says "this geometric pattern helps us contemplate the divine" or "these proportions express sacred order," that is a meaning-claim, and the right response is respect. It is completely different from a falsifiable physics claim like "this shape measurably concentrates energy and heals your body." Both might use the phrase "sacred geometry," but they are different kinds of claim requiring different responses.`,
              audioPrompt: `A meaning claim is one of the most important distinctions in this lesson, {name}, and it is worth holding clearly. When a tradition says "this geometric pattern helps us contemplate the divine" or "these proportions express sacred order" or "this design turns the mind toward the infinite," that is a claim about meaning. It is saying: this is what this thing means to us, this is what it is for, this is how it connects us to what we hold sacred. That is not a testable physics claim. It is not saying the tiles measurably change your body's chemistry, or that the proportions concentrate a physical force you could detect with instruments. And because it is not a physics claim, "prove it in a lab" is the wrong response. The right response is respect. Engage it on its own terms. Ask: does the tradition have depth, coherence, and meaning for its practitioners? Yes, clearly, in century after century. Compare that to a company selling you a "sacred geometry energy pyramid" claiming it "measurably concentrates healing energy." That is a physics claim. It is testable. And it fails when tested. Same words, "sacred geometry," completely different kinds of claim. The entire skill is telling them apart and responding differently to each.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Buildings Actually Make You Feel`,
          paragraphs: [
            `There is a real reason buildings move us, and it is more interesting than any mystical code. Architects genuinely do shape how a space makes you feel, using tools we can actually study: scale (a soaring ceiling feels grand and humbling; a low one feels cozy or oppressive), light (how it enters, glows, or pours through colored glass), proportion (relationships of size that feel balanced or jarring), rhythm (repeating columns or arches that guide the eye), and the path your body takes as you move through. These are real, studied effects, and skilled architects wield them on purpose.`,
            `Notice that this explanation does not need any "secret universal code." A cathedral makes you feel small and uplifted because of its enormous vertical scale and the way light falls, not because its floor plan secretly encodes phi. A cozy room feels safe because of its modest proportions and warm light, not because of mystical numbers. The genuinely impressive thing architects do, controlling feeling through space, light, and proportion, is fully real and fully explainable, and it is cheapened, not honored, by pretending it depends on a hidden magic ratio.`,
            `This is the same move you have made all band: the real explanation is usually more interesting than the mystical one, and it gives you more power. If you believe a building moves you because of a secret code only initiates know, you are a passive receiver of mystery. If you understand that scale, light, proportion, and rhythm create the effect, you can start to see how it is done, notice it in spaces around you, and even use it yourself someday. Understanding the real mechanism does not kill the wonder; it lets you in on how the wonder is made.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s4-feeling.webp`,
          imageCaption: `Buildings move us for a real reason, more interesting than any mystical code. Architects shape how a space feels using studiable tools: scale (soaring ceiling = grand and humbling; low = cozy or oppressive), light (how it enters, glows, pours through colored glass), proportion (balanced or jarring size relationships), rhythm (repeating columns/arches guiding the eye), and the path your body takes moving through. Real, studied effects skilled architects wield on purpose, no "secret universal code" needed: a cathedral makes you feel small and uplifted from its vertical scale and falling light, not a floor plan secretly encoding phi. The genuinely impressive thing, controlling feeling through space, light, and proportion, is fully real and explainable, and cheapened, not honored, by pretending it needs a hidden magic ratio. Same band-long move: the real explanation is more interesting AND gives you more power, a secret code makes you a passive receiver; understanding scale/light/proportion/rhythm lets you see how it's done and someday use it. Understanding the mechanism doesn't kill wonder, it lets you in on how it's made.`,
          vocab: [
            {
              word: `you feel`,
              definition: `There is a real, studiable reason buildings move us, more interesting than any mystical code: architects genuinely shape how a space makes you feel using tools we can actually study, including scale (a soaring ceiling feels grand and humbling, a low one cozy or oppressive), light (how it enters, glows, or pours through colored glass), proportion (relationships of size that feel balanced or jarring), rhythm (repeating columns or arches that guide the eye), and the path your body takes as you move through, all real effects that skilled architects wield on purpose. This explanation needs no "secret universal code": a cathedral makes you feel small and uplifted because of its enormous vertical scale and the way light falls, not because its floor plan secretly encodes phi, and a cozy room feels safe because of modest proportions and warm light, not mystical numbers, so the genuinely impressive thing architects do, controlling feeling through space, light, and proportion, is fully real and explainable and is cheapened, not honored, by pretending it depends on a hidden magic ratio. This is the band-long move: the real explanation is usually more interesting than the mystical one and gives you more power, because believing a building moves you through a secret code only initiates know makes you a passive receiver of mystery, while understanding that scale, light, proportion, and rhythm create the effect lets you see how it is done, notice it around you, and even use it yourself someday. Understanding the real mechanism does not kill the wonder; it lets you in on how the wonder is made.`,
              audioPrompt: `There is a real reason buildings move us, {name}, and it is more interesting than any mystical code. Architects genuinely do shape how a space makes you feel, using tools we can actually study: scale, a soaring ceiling feels grand and humbling, a low one feels cozy or oppressive; light, how it enters, glows, or pours through colored glass; proportion, relationships of size that feel balanced or jarring; rhythm, repeating columns or arches that guide the eye; and the path your body takes as you move through. These are real, studied effects, and skilled architects wield them on purpose. Notice that this explanation does not need any secret universal code. A cathedral makes you feel small and uplifted because of its enormous vertical scale and the way light falls, not because its floor plan secretly encodes phi. This is the same move you have made all band: the real explanation is usually more interesting than the mystical one, and it gives you more power. If you understand that scale, light, proportion, and rhythm create the effect, you can start to see how it is done, notice it in spaces around you, and even use it yourself someday. Understanding the real mechanism does not kill the wonder; it lets you in on how the wonder is made.`,
            },
            {
              word: `scale light`,
              definition: `Two of the real tools architects use to shape how a space makes you feel: scale (a soaring ceiling feels grand and humbling; a low one feels cozy or oppressive) and light (how it enters, glows, or pours through colored glass). Together with proportion, rhythm, and the path your body takes, these are real, studiable effects that skilled architects wield on purpose — no secret universal code required.`,
              audioPrompt: `Scale and light are two of the most powerful tools an architect uses to shape how a space makes you feel, {name}, and they are worth understanding clearly because they explain so much without any mysticism. Scale is about size relationships: how big is the space relative to your body? A soaring ceiling far above your head makes you feel small and grand at the same time, lifted into something larger than yourself. A low ceiling makes a space feel intimate or cozy or, if it is too low, oppressive. The same room with different ceiling heights feels like a different kind of place. Then there is light: how it enters, how it falls, what it touches, what it leaves in shadow. A narrow shaft of light falling through a high window is different from warm diffuse glow from many directions. Light through colored glass turns the light itself into color and pattern that moves across the walls and floor. Architects control these things on purpose. They decide the height of the ceiling. They decide where the windows go, how tall they are, which direction they face. The feeling that a great building creates in you is not an accident, and it is not a mystical force. It is the result of someone making precise decisions about scale and light and proportion and rhythm with tremendous care and skill.`,
            },
            {
              word: `passive receiver`,
              definition: `What you become if you believe a building moves you through a secret code only initiates know: a passive receiver of mystery, unable to see how the wonder is made. Understanding that scale, light, proportion, and rhythm create the effect is the alternative: it lets you see how it is done, notice it in spaces around you, and even use it yourself someday. Understanding the real mechanism does not kill the wonder — it lets you in on how the wonder is made.`,
              audioPrompt: `Passive receiver is the failure mode this lesson is trying to protect you from, {name}. Here is what it means. If you believe that a building moves you because of a secret code, a hidden mathematical pattern that only initiates know, something mystical and inaccessible, then you are a passive receiver of mystery. The wonder happens to you, and you cannot see how it is done, and you have no power to do it yourself. You are just a target for whatever effect the space produces. But if you understand that scale, light, proportion, and rhythm create the feeling, something completely different happens. You can start to see how it is done. You can walk into a space and notice: the ceiling is very high, that is what is making me feel grand. The windows are tall and the light is falling at an angle, that is what is creating that feeling of being lifted. The columns repeat at a steady interval, that is the rhythm my eye is following. You become someone who can read the choices an architect made. And eventually, if you ever design a space yourself, you have real tools to work with, not a secret code you have to hope applies, but actual effects you can create. Understanding the mechanism does not kill the wonder. It changes you from a passive receiver into someone who knows how wonder is made. That is always the better position.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together before you sort the sources. You saw that geometry genuinely built the world, real proportion, symmetry, and pattern doing real structural and aesthetic work, from Vitruvius and Palladio to the soaring math of Gothic and Islamic architecture. You met the golden ratio, a real and beautiful number wrapped in a tall tale, and you learned that "phi is hidden everywhere as the code of all beauty" mostly fails when people actually measure, with the nautilus shell as your clean example of a myth repeated until it sounded true.`,
            `You saw that some traditions treat geometry as genuinely sacred, a Tier C-cultural meaning-claim that deserves respect, not lab tests, and you sharpened the crucial line between "this sacred geometry helps us contemplate the infinite" (meaning, respect it) and "this shape measurably concentrates healing energy" (physics, test it, and it fails). And you saw that buildings really do move us, through scale, light, proportion, and rhythm, effects that are real, studiable, and more wonderful than any secret code.`,
            `Now the source-evaluation screen will hand you several real or realistic sources about geometry and architecture: a careful historian, a "sacred geometry" wellness product, a respectful account of a genuine tradition, a popular but shaky "golden ratio is everywhere" claim, and a working architect describing real design. Your job is to sort them with the right criteria for each, respecting genuine math and genuine traditions while catching the mystical-marketing claims that dress numbers up as magic. Hold real wonder and clear eyes at once. Onward.`,
          ],
          image: `/voyager-assets/creative-arts/l12-s5-before.webp`,
          imageCaption: `Threads together. Geometry genuinely built the world: real proportion, symmetry, and pattern doing real structural and aesthetic work, from Vitruvius and Palladio to Gothic and Islamic architecture. The golden ratio is a real, beautiful number wrapped in a tall tale, "phi is hidden everywhere as the code of all beauty" mostly fails when people measure (nautilus shell = the clean example of a myth repeated until it sounded true). Some traditions treat geometry as genuinely sacred (Tier C-cultural meaning-claim, respect not lab tests); sharpen the line between "this sacred geometry helps us contemplate the infinite" (meaning, respect) and "this shape measurably concentrates healing energy" (physics, test, fails). Buildings really do move us through scale, light, proportion, rhythm, real, studiable, more wonderful than any secret code. The source-evaluation screen hands you sources to sort with the right criteria: respect genuine math and traditions, catch mystical-marketing dressing numbers as magic. Real wonder and clear eyes at once.`,
          vocab: [
            {
              word: `eyes together`,
              definition: `The synthesis before the source-evaluation screen. You saw that geometry genuinely built the world, with real proportion, symmetry, and pattern doing real structural and aesthetic work, from Vitruvius and Palladio to the soaring mathematics of Gothic and Islamic architecture. You met the golden ratio (phi, ~1.618) as a real and beautiful number wrapped in a tall tale, and learned that the claim "phi is hidden everywhere as the code of all beauty" mostly fails when people actually measure, with the nautilus shell, which grows in a logarithmic spiral whose ratio is not the golden ratio, as the clean example of a myth repeated until it sounded true. You saw that some traditions treat geometry as genuinely sacred, a Tier C-cultural meaning-claim that deserves respect rather than lab tests, and sharpened the crucial line between "this sacred geometry helps us contemplate the infinite" (a meaning-claim to respect) and "this shape measurably concentrates healing energy" (a physics claim to test, which fails). And you saw that buildings really do move us, through scale, light, proportion, and rhythm, effects that are real, studiable, and more wonderful than any secret code. The source-evaluation screen will hand you several real or realistic sources to sort with the right criteria for each, respecting genuine math and genuine traditions while catching the mystical-marketing claims that dress numbers up as magic, holding real wonder and clear eyes at the same time.`,
              audioPrompt: `Pull it together before you sort the sources, {name}. You saw that geometry genuinely built the world, real proportion, symmetry, and pattern doing real structural and aesthetic work, from Vitruvius and Palladio to the soaring math of Gothic and Islamic architecture. You met the golden ratio, a real and beautiful number wrapped in a tall tale, and you learned that phi is hidden everywhere as the code of all beauty mostly fails when people actually measure, with the nautilus shell as your clean example of a myth repeated until it sounded true. You saw that some traditions treat geometry as genuinely sacred, a meaning-claim that deserves respect, not lab tests, and you sharpened the line between this sacred geometry helps us contemplate the infinite, which you respect, and this shape measurably concentrates healing energy, which you test, and which fails. And you saw that buildings really do move us, through scale, light, proportion, and rhythm, effects that are real, studiable, and more wonderful than any secret code. Now the source-evaluation screen will hand you several sources about geometry and architecture, and your job is to sort them with the right criteria for each, respecting genuine math and genuine traditions while catching the mystical-marketing claims that dress numbers up as magic. Hold real wonder and clear eyes at once.`,
            },
            {
              word: `Palladio`,
              definition: `Renaissance architect Andrea Palladio, whose "Four Books of Architecture" of 1570 turned proportion into a near-science: he designed rooms whose width, length, and height followed clean ratios he believed produced harmony. This is craft and mathematics doing real work — not mysticism — and his influence on Western architecture has lasted centuries.`,
              audioPrompt: `Palladio is one of the most influential architects in Western history, {name}, and his story shows what serious, real work with proportion looks like. Andrea Palladio published his "Four Books of Architecture" in 1570, and in it he laid out a systematic approach to proportion in design. He believed that rooms whose width, length, and height follow clean ratios produce a feeling of harmony, a balance that feels right to a person moving through the space. So he designed rooms with specific, deliberate proportional relationships, not guesses, not intuition, but a careful, near-scientific approach to the relationships between dimensions. This is not mysticism. It is craft. It is a builder paying close attention to how spaces feel and trying to understand the mathematical relationships behind that feeling, then using those relationships on purpose. Palladio's influence on architecture was enormous and long-lasting. Buildings designed according to his principles were built across Europe and then across the Americas for centuries. His approach shows that proportion is a real tool with real effects on how a space feels, which is exactly the foundation you need before the lesson asks you to be skeptical about certain other claims. Real proportion work is so real and so impressive it needs no myths.`,
            },
            {
              word: `phi everywhere`,
              definition: `The claim that phi is secretly the code of all beauty hidden everywhere — in the Parthenon, the Great Pyramid, the Mona Lisa, the human face, seashells — which mostly does not hold up when people actually measure. Numbers were often stretched, cherry-picked, or drawn with thick lines that could "prove" almost any ratio. The Parthenon claim depends heavily on where you decide to draw the rectangle. This is a myth built by repetition, not by measurement.`,
              audioPrompt: `Phi everywhere is the tall tale bolted onto a real number, {name}, and learning to see it is the core skill of this section. The real story is that phi is a genuine and beautiful piece of mathematics. The tall tale is the claim that phi is secretly everywhere: in the Parthenon, the Great Pyramid, the Mona Lisa, your own face, seashells, all of them secretly following this one hidden ratio as if the universe encoded it as the formula for beauty. That claim has a few problems. When careful researchers actually measured the famous examples, many of them do not match phi closely at all. The numbers were stretched. Specific famous cases were cherry-picked. The overlaid spirals and rectangles were drawn thick and positioned to fit, and you can make almost any ratio look like phi if you draw your measurement lines vaguely enough. The Parthenon is a perfect example: whether that building's proportions match phi depends almost entirely on exactly where you decide to draw the rectangle around it, and different people draw it differently to get the answer they want. So what you have is a real number, phi, a real and beautiful number that real designers do sometimes use on purpose, wrapped in an exaggerated story that mostly fails when people actually measure. The myth was built by repetition, not by measurement. And telling the real number from the tall tale is exactly the skill this lesson is building.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l12-source-evaluation`,
          type: `source-evaluation`,
          headline: `Five Sources On Geometry And Architecture`,
          intro: `{name}, five sources about geometry in architecture. For each, decide how much to trust it and on what terms. The key skill: respect real mathematics and genuine sacred traditions, while catching the "sacred geometry" marketing that dresses falsifiable physics claims in mystical language. Keep real wonder and clear eyes at once.`,
          sources: [
            {
              id: `s1`,
              tier: `A`,
              title: `An architectural historian on proportion in real buildings`,
              type: `Scholarly source`,
              context: `An architectural historian explains, with measurements and examples, how real builders used proportion and geometry deliberately, citing Vitruvius and Palladio, and is careful to note where popular "golden ratio" claims about specific famous buildings do not actually hold up when measured.`,
              quote: `"Proportion mattered enormously to these architects, and we can document the systems they actually used. But when people claim the Parthenon was built on the golden ratio, the measurements rarely support it, the rectangle is drawn to fit the conclusion."`,
              questions: [
                `Why is this a strong, trustworthy source about geometry in architecture?`,
                `What makes the historian's caution about the golden ratio a sign of reliability, not weakness?`,
                `How does this source separate real proportion from the phi myth?`,
              ],
              evaluation: `This is a strong Tier A source. The historian makes documented claims backed by measurement, explains the proportion systems builders actually used, and is careful to mark where popular claims outrun the evidence. The caution about the golden ratio is a sign of reliability, not weakness: a trustworthy source admits what the measurements do and do not support, rather than telling a tidy magical story. It models the lesson's whole posture, real respect for the genuine geometry builders used, plus clear skepticism toward the cherry-picked "phi is everywhere" claim. Trust this source, and notice that its careful uncertainty is exactly what makes it trustworthy.`,
            },
            {
              id: `s2`,
              tier: `C-pseudoscience`,
              title: `A website selling "sacred geometry energy pyramids"`,
              type: `Wellness-industry product claim`,
              context: `A website sells small metal pyramids and "sacred geometry" disks, claiming the shapes "concentrate universal energy," "raise the vibration of any room," "sharpen razor blades," and "promote healing and balance," using spiritual-sounding language to sell a product with physical and health claims.`,
              quote: `"Our Sacred Geometry Pyramid harnesses the universe's hidden mathematical code to concentrate life-force energy, neutralize harmful frequencies, and restore your body's natural balance. Ancient wisdom, proven by sacred geometry."`,
              questions: [
                `Which specific claims here are testable physics-and-health claims?`,
                `Is being skeptical of this disrespectful to traditions that use sacred geometry?`,
                `Why does "proven by sacred geometry" mean nothing here?`,
              ],
              evaluation: `This is Tier C-pseudoscience. The claims "concentrates energy," "raises vibration," "sharpens razor blades," "neutralizes harmful frequencies," "restores your body's balance" are all testable physical and health claims, and they have no scientific support (pyramid-power claims have been tested and fail). Being skeptical of this is NOT disrespectful to traditions that genuinely use sacred geometry, it is the opposite: the company is borrowing the prestige of real traditions and real mathematics to sell a product with fake physics. "Proven by sacred geometry" means nothing, sacred geometry is not a testing method, it is a phrase doing marketing work. The right response is healthy skepticism toward the product's specific falsifiable claims, precisely because you respect both the customer and the genuine traditions being mined for imagery.`,
            },
            {
              id: `s3`,
              tier: `C-cultural`,
              title: `A scholar of Islamic art explaining geometric pattern`,
              type: `Practitioner-tradition / scholarly source`,
              context: `A scholar from within the Islamic tradition explains that the intricate geometric patterns in mosque architecture are a way of contemplating the infinite and the unity of creation, describing the meaning the patterns hold rather than making any claim that the shapes physically affect the body.`,
              quote: `"The pattern repeats without end because it points to what has no end. For us it is a way of turning the mind toward the infinite. We do not claim the tiles do something to your body; we say they help turn the heart."`,
              questions: [
                `What kind of claim is the scholar making, meaning or testable physics?`,
                `Why would "prove the pattern affects the body" be the wrong response?`,
                `How is this completely different from the energy-pyramid product?`,
              ],
              evaluation: `This is Tier C-cultural, genuine and respectable. The scholar makes a claim about meaning, that the endless pattern helps turn the mind toward the infinite, and explicitly does not claim the tiles physically affect the body. So "prove the pattern affects the body" is the wrong response, because no such claim is being made, it is a category error, like demanding a prayer pass a chemistry test. You evaluate it on its own terms, and on those terms it has depth and centuries of meaning. This is completely different from the energy-pyramid product: same words, "sacred geometry," but one is a meaning-claim engaged with respect, and the other is a falsifiable physics claim engaged with skepticism. Keeping these apart is the entire skill of the lesson.`,
            },
            {
              id: `s4`,
              tier: `C-pseudoscience`,
              title: `A viral post: "The golden ratio is hidden in everything"`,
              type: `Popular / social-media claim`,
              context: `A slick viral post overlays golden-ratio spirals on the Parthenon, the Mona Lisa, a nautilus shell, and a human face, declaring that phi is the universe's secret code of beauty and that all great art and nature secretly obey it.`,
              quote: `"From the Parthenon to your own face, everything beautiful follows the golden ratio. It's the universe's hidden blueprint, and once you see it, you can't unsee it."`,
              questions: [
                `What is the testable claim being made, and does it hold up?`,
                `How were the spirals likely made to "fit" the images?`,
                `Why is the nautilus example especially revealing here?`,
              ],
              evaluation: `This is Tier C-pseudoscience dressed as fun fact. The testable claim, that famous art and nature consistently match phi, mostly does not hold up: careful measurement finds many of these examples do not fit the golden ratio closely, and the overlaid spirals are typically drawn thick and positioned to "fit" whatever they are placed on, the Parthenon "proof" depends on where you draw the rectangle. The nautilus is especially revealing: it is the poster child of the myth, yet it grows in a logarithmic spiral whose ratio is measurably not the golden ratio. The number phi is real and beautiful and sometimes used on purpose; the claim that it is the hidden blueprint of all beauty is a myth built by repetition and cherry-picked images, not by measurement. Skepticism here is precise, aimed at the false "everywhere" claim, not at the real mathematics.`,
            },
            {
              id: `s5`,
              tier: `B`,
              title: `A working architect describing how a space is designed to feel`,
              type: `Practitioner source`,
              context: `A practicing architect explains, without mysticism, how they actually make a space feel a certain way, using scale, light, proportion, rhythm, and the path people walk, and notes they sometimes use clean ratios because they look balanced, while making no claim about secret universal codes.`,
              quote: `"I make a lobby feel calm with low warm light and steady proportions, and a hall feel grand with height and a long approach. Sometimes I use simple ratios because they read as balanced. There's no magic, just tools that shape how you feel."`,
              questions: [
                `Why is this a credible, useful account of how buildings move us?`,
                `How does using "simple ratios because they look balanced" differ from the phi myth?`,
                `What does this source add that the historian (S1) doesn't?`,
              ],
              evaluation: `This is solid Tier B: a credible practitioner explaining the real, studiable tools that shape how a space feels, scale, light, proportion, rhythm, and the path of movement, with no mystical claims. It is useful because it shows the genuine mechanism behind the wonder, and it cleanly separates two things people confuse: a designer using simple ratios because they read as balanced is real craft, while "phi is the secret code hidden everywhere" is a myth, choosing a pleasing proportion on purpose is not the same as claiming the universe encodes it everywhere. This source adds the live, working perspective the historian (S1) frames historically: not just that builders used proportion in the past, but how a designer wields feeling through space right now. Its limit is that it is one practitioner's account, but on the lesson's core point it is exactly right and trustworthy.`,
            },
          ],
          synthesisPrompt: `After sorting all five: what is your rule for telling real geometry and genuine sacred traditions apart from "sacred geometry" marketing? Specifically, how do you keep respect for real math and real faith while catching a product or post that dresses falsifiable claims in mystical language? In 5-6 sentences.`,
          reflectionPrompt: `The golden-ratio myth survives because it is repeated everywhere and feels magical. Where have you personally seen the "golden ratio is in everything" claim, or a "sacred geometry" product? And where have you seen genuine geometry, in a real building or pattern, that moved you without needing any mystical story?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Someone says "if we're skeptical of golden-ratio claims, we're saying geometry in architecture is fake." Why is that wrong?`,
              options: [
                `Because real geometry built real architecture — the skepticism targets the "phi" myth, not real structure.`,
                `Because geometry in buildings actually is fake, so the skeptic turns out to be completely correct.`,
                `Because only the golden ratio counts as real geometry in buildings.`,
                `Because architects never used any geometry until modern times.`,
              ],
              correctIndex: 0,
              explanation: `Geometry genuinely built the world: real proportion, symmetry, and pattern do real structural and aesthetic work, from Vitruvius and Palladio to Gothic and Islamic architecture. The skepticism is aimed precisely at the "phi is hidden everywhere" myth, not at real geometry — which is so impressive it needs no myths. The distractors deny real geometry, shrink it to only phi, or erase its history.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Is the golden ratio (phi, ~1.618) a real thing or a myth? What's the accurate answer?`,
              options: [
                `It's entirely a myth — phi isn't a real number at all.`,
                `It's entirely real — every claim made about it is true and measured.`,
                `The number is real and beautiful; the myth is that it's the hidden code secretly in everything.`,
                `It only ever exists in seashells and in human faces, and absolutely nowhere else in the world.`,
              ],
              correctIndex: 2,
              explanation: `Phi is a real, genuinely interesting number, studied for centuries and connected to the Fibonacci sequence. What fails is the bigger claim bolted on — that it's secretly everywhere as the universe's code of beauty — which mostly doesn't survive actual measurement. The distractors deny the real number, accept the whole myth, or repeat the very claims that fail.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `People constantly say the nautilus shell is a perfect golden spiral. Why does the lesson use it as a key example?`,
              options: [
                `Because it proves the golden ratio really is in all of nature.`,
                `Because nautilus shells have no spiral shape at all.`,
                `Because the nautilus shell is the one and only genuinely true example of the golden ratio anywhere.`,
                `Because it's a myth repeated until it sounds true — the shell's spiral ratio is measurably NOT phi.`,
              ],
              correctIndex: 3,
              explanation: `The nautilus is the poster child of the golden-ratio myth, yet it grows in a logarithmic spiral whose growth ratio is noticeably different from phi, checkable by measurement. It's the clean example of a claim repeated until it sounded true. The distractors accept the myth, deny the real spiral, or treat the shell as proof.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `A mosque's geometric patterns are described as "a way to contemplate the infinite." How should you evaluate that claim?`,
              options: [
                `Test it in a lab and reject it if the tiles don't measurably affect the body.`,
                `As a Tier C-cultural meaning-claim deserving respect — it's not a testable physics claim.`,
                `Dismiss it as the same thing as an energy-pyramid sales pitch.`,
                `Accept it only if you personally share the faith.`,
              ],
              correctIndex: 1,
              explanation: `"This pattern helps us contemplate the infinite" is a Tier C-cultural claim about meaning, deserving respect, not "prove it in a lab" — nobody is claiming the tiles physically alter the body. Respect doesn't require sharing the faith. The distractors apply the wrong (physics) test, lump it with marketing, or gate respect behind belief.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Both a mosque scholar and an "energy pyramid" seller use the phrase "sacred geometry." What makes their claims completely different?`,
              options: [
                `The scholar makes a meaning-claim (respect it); the seller makes a testable physics claim (it fails).`,
                `Nothing — both use the same words, so both deserve the same skepticism.`,
                `The seller is clearly the more trustworthy one here, simply because the product happens to be newer.`,
                `The scholar is making a physics claim and the seller a meaning-claim.`,
              ],
              correctIndex: 0,
              explanation: `Same words, completely different kinds of claim: the scholar describes meaning (contemplating the infinite) — respect it; the seller asserts a testable physical effect (concentrates energy, heals the body) — test it, and it fails. The entire skill is refusing to lump them together. The distractors collapse the difference, trust the marketing, or reverse which is which.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does a cathedral make you feel small and uplifted, according to the lesson?`,
              options: [
                `Because its floor plan secretly encodes the golden ratio.`,
                `Because only people who know the mystical code can feel it.`,
                `Because of real tools — vertical scale and the way light falls — not a hidden magic ratio.`,
                `Because old cathedrals literally contain a kind of concentrated spiritual energy inside their walls.`,
              ],
              correctIndex: 2,
              explanation: `The effect comes from real, studiable tools — scale, light, proportion, rhythm, and the path of movement — not a secret code. A cathedral lifts you through its vertical scale and falling light. The real mechanism is more interesting and more useful than the mystical one. The distractors reach for the secret-code, initiates-only, or energy explanations the lesson rejects.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `The lesson says understanding the real mechanism behind a building's power "lets you in" rather than killing the wonder. Why?`,
              options: [
                `Because the moment you know the trick behind them, buildings simply stop being impressive at all.`,
                `Because a secret code only initiates know is the only real source of wonder.`,
                `Because mystical explanations always give you more power than real ones.`,
                `Because knowing how scale, light, and proportion create the effect lets you see how it's done and use it.`,
              ],
              correctIndex: 3,
              explanation: `Believing a building moves you through a secret code only initiates know makes you a passive receiver of mystery; understanding that scale, light, proportion, and rhythm create the effect lets you see how it's done and even use it yourself. Understanding the mechanism doesn't kill wonder — it lets you in on how it's made. The distractors claim knowledge kills wonder, or that mystery and mysticism are the true sources of it.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `A designer chooses a simple, clean ratio for a room "because it reads as balanced." How is that different from the golden-ratio myth?`,
              options: [
                `It isn't different — choosing a pleasing ratio is the same as the phi myth.`,
                `Choosing a balanced proportion on purpose is real craft; claiming the universe encodes phi is the myth.`,
                `The designer is simply wrong here, since only the golden ratio phi can ever truly look balanced.`,
                `It's different only because the designer's chosen ratio must secretly turn out to be phi anyway.`,
              ],
              correctIndex: 1,
              explanation: `A designer using a clean ratio because it reads as balanced is real, deliberate craft; "phi is the secret code hidden everywhere as the blueprint of all beauty" is a myth built by repetition. Choosing a pleasing proportion isn't the same as claiming the universe encodes it. The distractors collapse the two, deny other balanced ratios exist, or smuggle phi back in.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: To be skeptical of a "sacred geometry energy pyramid" that claims to heal your body, you have to dismiss the real traditions and real mathematics that use geometry.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False, and this is the central skill of the lesson. Being skeptical of a product's specific, testable, unsupported claim — that a pyramid shape concentrates energy and heals your body — does not require dismissing anything real. Real mathematics genuinely shaped real architecture (Vitruvius, Palladio, Gothic vaults, Islamic pattern), and many genuine traditions treat geometry as sacred in a meaning sense that deserves respect, not lab tests. The energy-pyramid product is different in kind: it makes a falsifiable physical-and-health claim with no evidence, borrowing the prestige of real math and real faith to sell an object. You can hold deep respect for the geometry in a mosque, real wonder at the math of a Gothic cathedral, AND laugh off a website selling "sacred geometry energy pyramids," with no contradiction. In fact the skepticism protects both the real traditions (from being cheapened into a product) and the customer (from fake physics). Respect for genuine geometry and skepticism toward mystical marketing are not opposites; holding both at once is exactly the clear-eyed wonder this lesson builds.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 13. A friend shows you a slick video "proving" the golden ratio is hidden in the Parthenon, the Mona Lisa, and your own face, and says it shows the universe has a secret code of beauty. You think it's cool but you have this lesson's framework. What's the most honest and thoughtful response?`,
              options: [
                `Tell your friend the golden ratio is completely fake and geometry has nothing to do with beauty.`,
                `Agree the universe has a secret code, since the video looks convincing and the spirals fit.`,
                `Grant that phi is a real, beautiful number that designers do sometimes use, but point out that the "it's hidden in everything" claim mostly fails when measured — the spirals are drawn to fit, the Parthenon depends on where you draw the rectangle, and the nautilus isn't actually a golden spiral.`,
                `Refuse to discuss it, since arguing about math with friends isn't worth it.`,
              ],
              correctIndex: 2,
              explanation: `Applied source evaluation. The honest move holds both halves: phi is a real, beautiful number that real designers sometimes use on purpose (don't dismiss it), but the "hidden in everything as the universe's code of beauty" claim mostly fails when people actually measure — overlaid spirals are drawn thick and positioned to fit, the Parthenon claim depends on where you draw the rectangle, and the famous nautilus shell grows in a logarithmic spiral whose ratio isn't phi. So you keep the real wonder and drop the myth, without insulting your friend or pretending math is fake. The distractors over-dismiss (geometry is fake), over-accept (the secret code), or disengage entirely — the three failures the lesson warns against.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-surprise`, category: `What changed in your thinking`, prompt: `Before this lesson, did you believe the golden ratio was secretly everywhere in art and nature? What changed when you learned how rarely it actually holds up to measurement — and that the nautilus shell isn't even a golden spiral? What surprised you most?` },
            { id: `reflect-wonder`, category: `Real wonder`, prompt: `Think of a building or space that genuinely moved you. Now that you know about scale, light, proportion, and rhythm, can you name what the architect actually did to create that feeling? Did understanding the mechanism make it more or less wonderful?` },
            { id: `reflect-identity`, category: `Who you're becoming`, prompt: `This lesson asked you to hold real wonder and clear eyes at once. Which is harder for you — staying open to genuine beauty, or staying skeptical of a magical-sounding claim? When have you leaned too far one way?` },
            { id: `reflect-heritage`, category: `Your heritage`, prompt: `Caro, Latin American architecture is rich with real geometry and sacred meaning — colonial churches, Indigenous pyramids and astronomical alignments, ornate baroque proportion. Which built spaces from your own heritage carry geometry that is genuinely sacred to the people who made them?` },
            { id: `reflect-application`, category: `Where you'll use this`, prompt: `You'll keep meeting "sacred geometry" and "golden ratio" claims online and in products. How will you tell a genuine tradition or real design from a mystical marketing claim next time — without becoming a cynic who dismisses real beauty, or a believer who buys the energy pyramid?` },
            { id: `reflect-critical`, category: `The strongest objection`, prompt: `Someone says "you can't respect a mosque's sacred geometry and also mock a sacred-geometry healing pyramid — either geometry is spiritual or it isn't." State the strongest version of that objection. Where is it confused, and how does the meaning-claim vs. physics-claim distinction answer it?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Geometry shapes the buildings all around you, and "sacred geometry" claims fill the internet. Two ways to engage both wisely.`,
          familyActivity: {
            title: `Read The Geometry Of A Real Building`,
            duration: `45 minutes`,
            description: `As a family, visit or look closely at one building that moves people — a church or cathedral, a mosque, a grand old train station or library, a striking modern building, even a beautiful local landmark online if you can't go in person. Together, try to read its geometry the way an architect would: Where does scale make you feel small or grand? How does light enter and what does it do? What proportions and rhythms repeat — columns, arches, windows? What path does your body take as you move through, and how does that shape the experience? Talk about the feeling the space creates and try to connect it to the real tools that create it, rather than any mystical story. If the building belongs to a sacred tradition, honor that meaning too, holding both the real design craft and the genuine reverence at once. The goal is to start seeing the deliberate, studiable choices behind why some spaces move us.`,
          },
          projectOption: {
            title: `Bust A "Sacred Geometry" Claim, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a careful investigator of one popular geometry claim. Week 1: pick one widely repeated claim — "the golden ratio is in the Parthenon," "phi is in the human face," "the nautilus is a golden spiral," or a "sacred geometry" product's promise. Research it honestly: what exactly is being claimed? Is it a meaning-claim or a testable physics claim? What happens when people actually measure? Try to find both the claim and a careful debunking, and where you can, measure or check it yourself (a ruler and a photo can test a "golden ratio" overlay surprisingly well). Week 2: write up what you found in your own words — what part is real (the number, the genuine design, the sacred meaning), what part is myth (the "it's everywhere" exaggeration), and how you can tell. End with your own rule for spotting the difference between real geometry and mystical marketing. The point is to practice precise skepticism: keeping the real wonder while popping the false claim.`,
            offerToParent: `Parent: opt your child into the sacred-geometry investigation. It builds exactly the skill this lesson teaches — aiming skepticism precisely at false, testable claims while keeping respect for genuine mathematics and genuine traditions. Measuring a "golden ratio" overlay themselves and finding it doesn't fit is a memorable, empowering lesson in checking claims rather than repeating them, and it transfers to evaluating all kinds of confident-sounding myths.`,
          },
          identityQuestion: `If you become someone who can stand in awe of the real geometry in a great building, honor the genuine sacred meaning a tradition finds in it, AND still spot a "sacred geometry" product selling fake physics, what does that let you be that neither a person who buys every mystical claim nor a cynic who dismisses all beauty can be?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can feel real wonder at geometry without believing the magical exaggerations about it.`,
            `A person who respects sacred meaning and still measures the claim before believing it.`,
            `Someone who knows the difference between real proportion and a "golden ratio is everywhere" myth.`,
          ],
          saveKey: `identity_responses_ca_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelve down. This one asked you to hold real wonder and clear eyes at the same time, and you did beautifully. You saw that geometry genuinely built the world — real proportion, symmetry, and pattern doing real structural and aesthetic work, from Vitruvius and Palladio to the soaring math of Gothic and Islamic architecture. You met the golden ratio, a real and beautiful number wrapped in a tall tale, and you learned that "phi is hidden in everything" mostly fails when people actually measure, with the nautilus shell as your clean example of a myth repeated until it sounded true. You learned to respect geometry that is genuinely sacred as a meaning-claim, while applying precise skepticism to falsifiable "this shape heals you" claims, and you saw that buildings really do move us through scale, light, proportion, and rhythm, effects more wonderful than any secret code because you can actually understand and use them. Most of all, you sharpened the skill of aiming skepticism precisely: not at real math, not at real faith, but at the mystical marketing that dresses numbers up as magic. Next: the neuroscience of creativity, where we look at what is really known about the creative brain, and where the pop-science myths begin. Onward, {name}. — Muse`,
          badge: `geometry-in-architecture-literate`,
          badgeName: `Geometry & Architecture Literate`,
          xpEarned: 75,
          competencies: [
            `Recognizes that real geometry genuinely shapes architecture (proportion, symmetry, pattern, structure) from Vitruvius and Palladio to Gothic and Islamic building`,
            `Understands the golden ratio as a real number wrapped in an overstated myth, and that "phi is everywhere" mostly fails under actual measurement`,
            `Knows the nautilus shell grows in a logarithmic spiral that is not the golden ratio, as a clean case of a repeated-until-true myth`,
            `Distinguishes genuinely sacred geometry (Tier C-cultural meaning-claim, respect) from "sacred geometry" pseudoscience (falsifiable physics claim, skepticism)`,
            `Explains how buildings actually move us through scale, light, proportion, and rhythm rather than any secret code`,
            `Aims skepticism precisely at false testable claims while keeping respect for real mathematics and genuine traditions`,
            `Applies this to a real situation: enjoying a "golden ratio" video while correcting its overstated claim with evidence`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: The Neuroscience of Creativity`,
            hook: `What's really known about the creative brain — and where the pop-science myths (and one famous fabrication scandal) begin. Source Evaluation.`,
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
  const srcs = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-CA-VOYAGER-L12 ${VERSION}] "${l.title}" mags=${mags} sources=${srcs} q=${quiz} r=${reflect}`
  );
}
