// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L04 — Evolutionary Theory: Evidence and Mechanisms
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-LS4 (Biological Evolution: Unity and Diversity)
// Interaction: SOURCE-EVALUATION. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l04-v1";

const SCIENCE_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-04`,
      title: `Evolutionary Theory: Evidence and Mechanisms`,
      duration: 35,
      xpReward: 75,
      badge: `evidence-weaver`,
      badgeName: `Evidence Weaver`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, there's one idea in biology so powerful that a famous scientist said nothing in biology makes sense without it: evolution by natural selection. It explains the diversity of life, the structure of your body, the behavior of pathogens, and the arms races between predators and prey. It is also one of the most misunderstood scientific ideas in public discourse. This lesson gives you the real thing.`,
          headline: `Evolutionary Theory: Evidence and Mechanisms`,
          subtitle: `The single idea that ties all of biology together, and the evidence behind it. A Source Evaluation.`,
          visual: `/voyager-assets/science/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Idea That Unifies Biology`,
          paragraphs: [
            `Life on Earth is staggeringly diverse: millions of species, from microscopic bacteria to towering redwoods to you. Evolution is the powerful idea that explains where all this variety came from. Its core claim is descent with modification: all living things are related, descended from common ancestors, changing gradually over enormous spans of time.`,
            `This single idea ties together everything in biology. It explains why all life shares the same genetic code (you saw this, evidence of common origin), why organisms fit their environments so well, and why we can sort life into a great branching tree of relationships. As one scientist famously put it, nothing in biology makes sense except in the light of evolution.`,
            `Crucially, evolution is a scientific theory, and in science that's the highest status an explanation can have. A theory isn't a hunch; it's a well-tested framework supported by huge amounts of evidence from many independent fields. The everyday use of "theory" (a guess) and the scientific use (a robust, evidence-backed explanation) are very different things.`,
          ],
          image: `/voyager-assets/science/l04-s1-unify.webp`,
          imageCaption: `Life on Earth is staggeringly DIVERSE: millions of species from microscopic bacteria to towering redwoods to you. EVOLUTION is the idea that explains where all this variety came from. Its core claim is DESCENT WITH MODIFICATION: all living things are related, descended from common ancestors, changing gradually over enormous spans of time. This single idea ties together all of biology, why life shares one genetic code, why organisms fit their environments, why we can map a branching tree of relationships. As one scientist said, nothing in biology makes sense except in the light of evolution. Crucially, evolution is a scientific THEORY, the highest status an explanation can have: not a hunch, but a well-tested framework backed by huge evidence from many independent fields.`,
          vocab: [
            { word: `evolution`,
              definition: `The process by which species change over generations and all living things descend, with modification, from common ancestors over vast time.`,
              audioPrompt: `Evolution, {name}, is the process by which species change over generations, with all living things descending from common ancestors over vast stretches of time. It's the grand idea that explains the diversity of all life.` },
            { word: `descent with modification`,
              definition: `Darwin's core idea: each generation inherits traits from ancestors but with small changes, so over time species gradually transform and diverge.`,
              audioPrompt: `Descent with modification, {name}, is Darwin's core idea: each generation inherits traits from its ancestors, but with small changes. Over vast time, those changes add up, and species gradually transform and branch apart.` },
            { word: `scientific theory`,
              definition: `A well-tested, evidence-backed explanation of how part of the world works, the highest status in science, not a mere guess or hunch.`,
              audioPrompt: `A scientific theory, {name}, is a well-tested explanation backed by mountains of evidence, the highest status an idea can reach in science. It does not mean a guess. Evolution and gravity are both scientific theories in this strong sense.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Natural Selection: The Engine`,
          paragraphs: [
            `How does evolution actually happen? The main mechanism is natural selection, Darwin's great insight. It rests on a few simple facts that, combined, drive enormous change. First, individuals in a population vary, no two are exactly alike, and much of that variation is heritable, passed to offspring through genes.`,
            `Second, more offspring are produced than can survive, so there's a struggle to live and reproduce. Third, some variations help an individual survive and reproduce better in its environment. Those individuals leave more offspring, who inherit the helpful traits. So, over generations, helpful traits become more common, and the population changes. That's natural selection.`,
            `A key phrase: selection acts on variation that already exists. Mutations (random changes in DNA) create new variation blindly, without aim. Selection is not random, it consistently favors what works in a given environment. So evolution combines random variation with non-random selection. It has no goal and no foresight; it simply keeps what survives, generation after generation.`,
          ],
          image: `/voyager-assets/science/l04-s2-selection.webp`,
          imageCaption: `How does evolution happen? The main mechanism is NATURAL SELECTION, Darwin's great insight, resting on a few simple facts. First, individuals in a population VARY, and much of that variation is HERITABLE, passed to offspring through genes. Second, more offspring are produced than can survive, so there's a struggle to live and reproduce. Third, some variations help an individual survive and reproduce better; those individuals leave more offspring who inherit the helpful traits. Over generations, helpful traits become more common and the population CHANGES. Key: selection acts on variation that already exists. MUTATIONS create new variation blindly, with no aim; SELECTION is non-random, favoring what works. Random variation plus non-random selection, no goal, no foresight, just keeping what survives.`,
          vocab: [
            { word: `natural selection`,
              definition: `The process where individuals with traits better suited to their environment survive and reproduce more, so those traits become more common over generations.`,
              audioPrompt: `Natural selection, {name}, is the engine of evolution: individuals whose traits suit their environment survive and reproduce more, passing those traits on. Over generations, the helpful traits spread through the population.` },
            { word: `heritable variation`,
              definition: `Differences among individuals that can be passed to offspring through genes. It's the raw material natural selection acts upon.`,
              audioPrompt: `Heritable variation, {name}, means the differences among individuals that can be passed on through genes. It's the raw material of evolution, because natural selection can only act on variation that already exists and can be inherited.` },
            { word: `fitness`,
              definition: `In biology, how well an individual survives and reproduces in its environment, not strength or "best," but reproductive success.`,
              audioPrompt: `Fitness, {name}, in biology, means how well an individual survives and reproduces in its environment. It's not about being the strongest or the best, just about leaving more offspring who carry your traits forward.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Evidence: Many Independent Witnesses`,
          paragraphs: [
            `What makes evolution so strongly supported is that evidence pours in from many separate fields, all pointing the same way, like independent witnesses telling the same story. No single fossil or experiment carries it alone; the power is in the convergence. Let's meet the main lines of evidence.`,
            `Fossils capture life changing across deep time, showing forms that no longer exist and transitional species linking groups (like fossils between fish and amphibians, or land mammals and whales). Anatomy reveals homologous structures: the same bone pattern appears in a human arm, a bat wing, a whale flipper, and a cat leg, just what we'd expect if all descended from a common ancestor.`,
            `Molecular biology may be the most powerful witness. DNA comparisons show that the more closely related two species are, the more similar their genes, and they build the same family tree the fossils and anatomy suggest. We even share much of our DNA with bananas. And we watch evolution happen now: bacteria evolving antibiotic resistance, insects evolving pesticide resistance, in real time.`,
          ],
          image: `/voyager-assets/science/l04-s3-evidence.webp`,
          imageCaption: `What makes evolution so strongly supported is that evidence pours in from MANY separate fields, all pointing the same way, like independent witnesses telling one story. The power is in the CONVERGENCE. FOSSILS capture life changing across deep time, showing extinct forms and transitional species (fish-to-amphibian, land-mammal-to-whale). ANATOMY reveals HOMOLOGOUS structures: the same bone pattern in a human arm, bat wing, whale flipper, and cat leg, exactly what common ancestry predicts. MOLECULAR biology is the most powerful witness: DNA comparisons show closer relatives share more genes, and build the SAME family tree the fossils and anatomy suggest. And we watch evolution NOW: bacteria evolving antibiotic resistance in real time.`,
          vocab: [
            { word: `homologous structures`,
              definition: `Body parts that share the same underlying structure due to common ancestry, like the matching bones in a human arm, bat wing, and whale flipper.`,
              audioPrompt: `Homologous structures, {name}, are body parts that share the same underlying bone pattern because of common ancestry, like a human arm, a bat's wing, and a whale's flipper. The shared blueprint points to a shared ancestor.` },
            { word: `transitional fossil`,
              definition: `A fossil showing features between two groups, capturing evolution in progress, such as fossils linking fish and amphibians or land mammals and whales.`,
              audioPrompt: `A transitional fossil, {name}, is one that shows features in between two groups, capturing evolution in the act. Fossils linking fish to amphibians, or land mammals to whales, are famous examples of change preserved in stone.` },
            { word: `convergence of evidence`,
              definition: `When many independent fields, like fossils, anatomy, and DNA, all point to the same conclusion. This agreement is what makes a theory powerful.`,
              audioPrompt: `Convergence of evidence, {name}, is when many independent fields, fossils, anatomy, DNA, geography, all point to the same conclusion. Like independent witnesses agreeing, that convergence is what makes evolution so powerfully supported.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Clearing Up The Misconceptions`,
          paragraphs: [
            `Evolution is one of the most misunderstood ideas in science, so let's clear the big confusions. It does not say humans came from monkeys; it says humans and modern apes share a common ancestor, a different thing entirely. Evolution explains how life diversified; it doesn't claim to explain how life first began (that's a separate question).`,
            `Another big one: evolution has no goal and no foresight. It isn't "trying" to make better or more complex creatures, and there's no ladder with humans on top. It simply keeps whatever survives and reproduces in a given environment. A bacterium perfectly suited to its niche is just as "evolved" as we are. There's no direction, only fit to circumstances.`,
            `And individuals don't evolve, populations do, over generations. You can't evolve in your lifetime; what changes is the makeup of a population as gene frequencies shift. Finally, "survival of the fittest" doesn't mean the strongest or most ruthless, "fittest" means best suited to reproduce in that environment, which sometimes means cooperating, hiding, or being small.`,
          ],
          image: `/voyager-assets/science/l04-s4-misconceptions.webp`,
          imageCaption: `Evolution is one of the most MISUNDERSTOOD ideas in science. It does NOT say humans came from monkeys; it says humans and modern apes share a COMMON ANCESTOR, a different thing. Evolution explains how life diversified; it doesn't claim how life first began (a separate question). Evolution has NO goal and no foresight, it isn't trying to make better or more complex creatures, and there's no ladder with humans on top. It keeps whatever survives in a given environment; a well-suited bacterium is as evolved as we are. Individuals don't evolve, POPULATIONS do, over generations as gene frequencies shift. And survival of the FITTEST doesn't mean strongest or most ruthless, fittest means best suited to reproduce, which can mean cooperating, hiding, or being small.`,
          vocab: [
            { word: `common ancestor`,
              definition: `An ancestral species from which two or more later species descend. Humans and apes share one; we did not descend from modern monkeys.`,
              audioPrompt: `A common ancestor, {name}, is an ancestral species that two or more later species both descend from. Humans didn't come from monkeys; rather, humans and modern apes share a common ancestor far back in time.` },
            { word: `populations evolve`,
              definition: `Evolution happens to populations across generations as gene frequencies shift, not to individuals within their own lifetimes.`,
              audioPrompt: `Populations evolve, {name}, not individuals. You can't evolve in your own lifetime; what changes is the makeup of a whole population over generations, as helpful gene versions become more common.` },
            { word: `no foresight`,
              definition: `Evolution has no goal, plan, or direction. It doesn't aim for "better" or "more complex," it simply preserves what survives in the current environment.`,
              audioPrompt: `No foresight, {name}, means evolution has no goal or plan. It isn't trying to build better or more complex creatures, and there's no ladder with us on top. It only keeps whatever happens to survive and reproduce right now.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Source Evaluation`,
          paragraphs: [
            `Pull it together. Evolution, descent with modification from common ancestors, is the unifying theory of biology, and in science a theory is a robust, evidence-backed explanation, not a guess. Its engine is natural selection: variation is heritable, more are born than survive, and those whose traits fit the environment reproduce more, so helpful traits spread.`,
            `Its strength comes from convergence: fossils, anatomy (homologous bones), molecular biology (DNA family trees), and directly observed cases like antibiotic resistance all independently point the same way. And we cleared the big myths: shared ancestors not "from monkeys," no goal or ladder, populations evolve not individuals, and "fittest" means best-suited, not strongest.`,
            `Now the source-evaluation screen puts you in the scientist's chair to weigh the evidence yourself. You'll examine five sources, a transitional fossil series, the homologous limb bones, DNA comparisons, observed antibiotic resistance, and an "it's just a theory" claim, judging each: How strong is it? What does it show? Where does it fit? Onward.`,
          ],
          image: `/voyager-assets/science/l04-s5-before.webp`,
          imageCaption: `Threads together. EVOLUTION, descent with modification from common ancestors, is the unifying theory of biology, and a scientific theory is robust and evidence-backed, not a guess. Its engine is NATURAL SELECTION: heritable variation exists, more offspring are born than survive, and those whose traits fit reproduce more, so helpful traits spread. Its strength is CONVERGENCE: fossils, homologous anatomy, DNA family trees, and observed cases like antibiotic resistance all point the same way. We cleared the myths: shared ancestors not from monkeys, no goal or ladder, populations evolve not individuals, fittest means best-suited. The source-evaluation screen has you weigh five sources yourself: a fossil series, homologous bones, DNA comparisons, antibiotic resistance, and an "it's just a theory" claim.`,
          vocab: [
            { word: `antibiotic resistance`,
              definition: `When bacteria evolve to survive drugs meant to kill them, a clear, observable, present-day example of natural selection in action.`,
              audioPrompt: `Antibiotic resistance, {name}, is when bacteria evolve to survive the drugs meant to kill them. It's natural selection happening right now: the few resistant bacteria survive and multiply, so the whole population becomes resistant.` },
            { word: `evaluating evidence`,
              definition: `Judging how strong a piece of evidence is, what it actually demonstrates, and how it fits with other findings, the core skill of a scientist.`,
              audioPrompt: `Evaluating evidence, {name}, means judging how strong a source is, what it actually shows, and how it fits with everything else known. It's the core skill of a scientist, and exactly what you'll practice on the next screen.` },
            { word: `consilience`,
              definition: `The agreement of evidence from completely independent sources. When unrelated fields converge on one answer, the conclusion becomes very hard to doubt.`,
              audioPrompt: `Consilience, {name}, is a fancy word for independent kinds of evidence agreeing. When fossils, DNA, and anatomy, which could have disagreed, all tell the same story, that agreement makes the conclusion very hard to doubt.` },
          ],
        },

        {
          id: `l04-source-evaluation`,
          type: `source-evaluation`,
          headline: `Weigh The Evidence Yourself`,
          intro: `{name}, you're the scientist now. Here are five sources about evolution. For each, judge it like a scientist: How strong is it? What does it actually show? Where does it fit in the larger case, and how reliable is it?`,
          sources: [
            {
              id: `s1`,
              tier: `Strong primary evidence`,
              title: `The whale fossil series`,
              type: `Fossil record / paleontology`,
              context: `Paleontologists have uncovered a remarkable series of fossils showing the transition of whales from land-dwelling mammals. The sequence includes four-legged land mammals, then forms with shrinking legs and bodies built for water, then early whales with tiny vestigial leg bones, leading to modern whales.`,
              quote: `"The fossils form a step-by-step sequence, each dated to a consistent time period, capturing the move from land to sea."`,
              questions: [
                `What makes a transitional fossil series strong evidence for evolution?`,
                `Why does the consistent dating of each fossil matter?`,
                `What would it mean if whales still had tiny, useless leg bones?`,
              ],
              evaluation: `This is strong primary evidence because it directly captures descent with modification in action, preserved in stone. A transitional fossil series shows intermediate forms linking two very different groups, here, four-legged land mammals gradually transforming into ocean-dwelling whales, exactly what evolution predicts and what a "fixed species" view cannot explain. Its strength rests on several things. First, the forms are arranged in a logical sequence of change (legs shrinking, bodies becoming streamlined, nostrils migrating toward a blowhole position). Second, and crucially, the fossils are independently dated, and the dates line up with the sequence: older rocks hold the more land-like forms, younger rocks the more whale-like ones. If the dating contradicted the sequence, the evidence would collapse, so the consistency is what makes it compelling. Third, modern whales still carry tiny vestigial hip and leg bones, useless leftovers that make no sense if whales were designed for water from scratch, but make perfect sense as remnants from four-legged ancestors. That's a powerful confirming detail. As a scientist, you'd rate this strong, though you'd note that fossils alone are incomplete (fossilization is rare) and gain their full force when combined with anatomy and DNA, which is exactly the convergence that makes the whole case so robust.`,
            },
            {
              id: `s2`,
              tier: `Strong primary evidence`,
              title: `The matching limb bones`,
              type: `Comparative anatomy`,
              context: `Examine the forelimbs of a human, a bat, a whale, a cat, and a horse. Though used for grasping, flying, swimming, walking, and running, they all contain the same set of bones in the same arrangement: one upper bone, two lower bones, then wrist bones and digits. The pattern is unmistakable.`,
              quote: `"Same bones, same order, wildly different jobs, a human hand, a bat's wing, a whale's flipper, all built on one blueprint."`,
              questions: [
                `Why is the same bone pattern in different animals evidence for evolution?`,
                `If these were designed separately from scratch, would you expect this?`,
                `How does this connect to the idea of a common ancestor?`,
              ],
              evaluation: `This is strong primary evidence because homologous structures are exactly what common ancestry predicts and are hard to explain otherwise. The key insight is the mismatch between structure and function: a human hand, a bat's wing, a whale's flipper, a horse's leg, do completely different jobs (grasping, flying, swimming, running), yet all share the same underlying skeleton, one upper bone, two lower bones, wrist bones, and digits, in the same arrangement. If each animal had been designed separately and optimally for its task from scratch, there would be no reason to expect this shared blueprint; an engineer designing a wing and a flipper independently would use whatever works best for each, not force both onto the identical bone plan. The shared pattern only makes sense if all these animals inherited it, with modification, from a common ancestor that had that limb structure, and natural selection then reshaped the same starting bones for different uses. That's descent with modification made visible in anatomy. As a scientist you'd rate this strong and, importantly, independent of the fossil evidence: anatomy and paleontology are completely separate fields, yet they point to the same conclusion. You'd also note the related evidence of vestigial structures (like the whale's leg bones) and embryonic similarities, all reinforcing common ancestry. This convergence across independent lines is what elevates evolution from one good idea to overwhelmingly supported theory.`,
            },
            {
              id: `s3`,
              tier: `Strongest modern evidence`,
              title: `The DNA family tree`,
              type: `Molecular biology / genetics`,
              context: `Scientists compare the DNA sequences of different species. They find that the more similar two species appear and the more recently they're thought to share an ancestor, the more similar their DNA. Strikingly, the family tree built purely from DNA matches the tree built independently from fossils and anatomy.`,
              quote: `"Humans and chimpanzees share around 98 to 99 percent of their DNA; the genetic tree mirrors the fossil tree almost exactly."`,
              questions: [
                `Why is it powerful that the DNA tree matches the fossil and anatomy trees?`,
                `What would falsify this, what result would NOT fit evolution?`,
                `Why might DNA be called the strongest line of evidence?`,
              ],
              evaluation: `This is arguably the strongest modern evidence, because DNA provides a completely independent test that could easily have failed, and didn't. Here's the key: fossils and anatomy were studied for over a century before we could read DNA. Evolution made a bold, riskable prediction, that if all life descends from common ancestors, then the relationships written in DNA should match the relationships worked out from fossils and body structure. There was no guarantee. DNA could have shown a completely different pattern, or no pattern at all, which would have shattered the theory. Instead, the family tree built purely from genetic sequences matches the tree built independently from fossils and anatomy with stunning consistency: species that look closely related and appear close in the fossil record also have the most similar DNA (humans and chimps share roughly 98 to 99 percent). This is consilience at its most powerful, three independent witnesses, who never compared notes, telling the same story. As for what would falsify it: finding, say, that humans were genetically closer to fish than to other primates, or that DNA trees were random relative to anatomy, would not fit evolution at all. The fact that such results never appear, across thousands of species, is why DNA is often called the strongest evidence. You'd rate this very strong: it's a successful risky prediction from an independent field, exactly what gives a theory its credibility.`,
            },
            {
              id: `s4`,
              tier: `Direct observation`,
              title: `Antibiotic resistance in real time`,
              type: `Observed / experimental evidence`,
              context: `In hospitals and laboratories, scientists directly observe bacteria evolving. When a population of bacteria is exposed to an antibiotic, most die, but a few with resistant variations survive, reproduce, and pass on resistance. Soon the whole population is resistant. This is documented, repeatable, and happening now.`,
              quote: `"Within days, a once-treatable bacterial population can become resistant, natural selection observed start to finish."`,
              questions: [
                `How does antibiotic resistance demonstrate natural selection step by step?`,
                `Why is "we can watch it happen and repeat it" so scientifically powerful?`,
                `How does this answer the claim that "no one has ever seen evolution"?`,
              ],
              evaluation: `This is exceptionally compelling because it's direct, observable, repeatable evidence, evolution caught in the act, and it lays out natural selection step by step. Trace it: a bacterial population contains heritable variation (some bacteria, by chance mutation, happen to carry resistance). When the antibiotic is applied, it acts as the selective pressure: the non-resistant bacteria die, but the few resistant ones survive (differential survival based on a trait). The survivors reproduce, passing resistance to their offspring (heritable advantage). Within days, the population is dominated by resistant bacteria, the trait's frequency has shifted dramatically. That is natural selection, observed from beginning to end: variation, selection, inheritance, change in the population. Its scientific power comes from being repeatable and directly witnessed, not inferred from the distant past. Scientists can run it again and again in controlled experiments and get the same result, which is the gold standard of evidence. It directly refutes the common claim that "no one has ever seen evolution happen", we see it constantly, in bacteria, in pesticide-resistant insects, in many fast-reproducing species. The only caveat a careful scientist notes is scale: this shows evolution within a species over short timescales (microevolution), and skeptics sometimes argue it doesn't prove the large-scale change that produces new groups. But combined with fossils, anatomy, and DNA, which document exactly that larger-scale history, it completes a seamless picture: the same process, observed directly in the small, operating over deep time in the large. You'd rate this very strong and uniquely persuasive.`,
            },
            {
              id: `s5`,
              tier: `Misleading claim, evaluate critically`,
              title: `"Evolution is just a theory"`,
              type: `Common rhetorical claim`,
              context: `A widely repeated argument states: "Evolution is only a theory, not a fact. Scientists even call it the 'theory of evolution.' Since it's just a theory, it's only a guess, and other ideas deserve equal standing as explanations."`,
              quote: `"It's just a theory, they admit it themselves by calling it one, so it hasn't been proven."`,
              questions: [
                `What's the key flaw in how this argument uses the word "theory"?`,
                `What does "theory" actually mean in science?`,
                `Why doesn't calling something a theory weaken it scientifically?`,
              ],
              evaluation: `This argument should be rated weak and misleading, because it rests entirely on a word trick, confusing two completely different meanings of "theory." In everyday speech, "theory" can mean a hunch or guess ("I have a theory about who ate the cake"). But in science, a theory is the opposite of a guess: it's a well-substantiated, repeatedly tested explanation supported by a large body of evidence from many independent fields. Gravity, atoms, germs causing disease, and plate tectonics are all "theories" in this strong sense, no one doubts them because they're called theories. So when scientists call it the "theory of evolution," they are not admitting weakness; they are giving it the highest status an explanation can have. The argument's flaw is equivocation: it swaps the everyday meaning into a scientific context to make robust science sound like a casual guess. It also misuses "proven", science doesn't deal in absolute proof (that's math); it deals in evidence, and by that standard evolution is among the best-supported theories in all of science, backed by the convergence of fossils, anatomy, DNA, and direct observation you just evaluated. As for "other ideas deserve equal standing": ideas earn standing through evidence, not fairness, and explanations that don't make testable predictions or aren't supported by evidence are not scientifically equivalent. A careful thinker recognizes this claim as rhetoric, not evidence, it doesn't engage any of the actual data, but plays on a misunderstood word. Evaluating sources means catching exactly this kind of move.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, why is the evidence for evolution considered so overwhelming, and what role does the agreement of independent fields (fossils, anatomy, DNA, observation) play? Which source did you find most convincing, and how would you respond to "it's just a theory"? In 5-6 sentences.`,
          reflectionPrompt: `You are related, through deep time, to every living thing, the tree outside, the bacteria in your gut, the whale in the ocean. All one family, all one branching tree of life. How does it feel to know you're not separate from nature, but woven into it across billions of years?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the core claim of evolution (descent with modification)?`,
              options: [
                `Each species was created separately and never changes at all.`,
                `All living things are related, descending with change from common ancestors.`,
                `Individual animals transform their own bodies during their lifetimes.`,
                `Life on Earth has stayed exactly the same since it first appeared.`,
              ],
              correctIndex: 1,
              explanation: `Evolution's core claim is descent with modification: all living things are related, descended from common ancestors and changing gradually over time. The distractors describe fixed species, lifetime transformation, or an unchanging Earth.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `In science, what does it mean to call evolution a "theory"?`,
              options: [
                `It is a wild guess that hasn't been tested at all.`,
                `It is a personal opinion that varies from scientist to scientist.`,
                `It is a well-tested explanation supported by a large body of evidence.`,
                `It is an idea that scientists secretly know to be false.`,
              ],
              correctIndex: 2,
              explanation: `In science, a theory is the highest status an explanation can have: a well-tested framework supported by mountains of evidence, not a guess. The distractors use the everyday "guess" meaning, call it opinion, or claim it's known false.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Which sequence correctly describes how natural selection works?`,
              options: [
                `Animals decide to change, then pass their choices to offspring.`,
                `Heritable variation exists; some traits aid survival/reproduction; those traits spread.`,
                `Every individual in a population evolves during its own lifetime.`,
                `The strongest and most aggressive animals always win, regardless of environment.`,
              ],
              correctIndex: 1,
              explanation: `Natural selection: populations vary, the variation is heritable, some traits help individuals survive and reproduce better, and those traits become more common over generations. The distractors invoke conscious choice, lifetime evolution, or "strongest always wins."`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the relationship between mutation and natural selection?`,
              options: [
                `Mutation creates variation randomly; selection non-randomly favors what works.`,
                `Both mutation and selection are completely random processes.`,
                `Mutation aims to create exactly the traits an animal needs.`,
                `Selection happens first, and then it causes the right mutations to appear.`,
              ],
              correctIndex: 0,
              explanation: `Mutation creates new variation blindly and randomly; natural selection is non-random, consistently favoring traits that aid survival and reproduction. The distractors call both random, give mutation a goal, or reverse the order.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why are homologous structures (like the matching bones in a human arm, bat wing, and whale flipper) evidence for evolution?`,
              options: [
                `Because all of these different animals happen to live in exactly the same kind of habitat.`,
                `Because the shared bone blueprint points to inheritance from a common ancestor.`,
                `Because all animals are physically identical to one another.`,
                `Because the bones are made of completely different materials.`,
              ],
              correctIndex: 1,
              explanation: `The same bone pattern doing wildly different jobs makes sense only if inherited from a common ancestor, then modified, which is descent with modification visible in anatomy. The distractors cite shared habitat, identical animals, or different materials.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is it powerful that the family tree built from DNA matches the tree built from fossils and anatomy?`,
              options: [
                `Because scientists forced the two trees to agree on purpose.`,
                `Because DNA, fossils, and anatomy are actually the same field of study.`,
                `Because independent lines of evidence converging on one answer is very hard to doubt.`,
                `Because it proves nothing, since matching is just a coincidence.`,
              ],
              correctIndex: 2,
              explanation: `When completely independent fields (DNA, fossils, anatomy) converge on the same family tree, the agreement is consilience, extremely hard to doubt, like independent witnesses agreeing. The distractors allege fixing, conflate the fields, or dismiss it as coincidence.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which statement about evolution is a MISCONCEPTION (not what the science says)?`,
              options: [
                `Humans and modern apes share a common ancestor.`,
                `Humans evolved directly from modern monkeys we see today.`,
                `Populations evolve over generations, not individuals in a lifetime.`,
                `Evolution has no goal, foresight, or built-in direction.`,
              ],
              correctIndex: 1,
              explanation: `The misconception is that humans came "from monkeys", actually, humans and modern apes share a common ancestor, which is different. The other three options are accurate statements of what evolution actually says.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How does antibiotic resistance in bacteria demonstrate evolution?`,
              options: [
                `It shows natural selection happening and observable in real time.`,
                `It proves bacteria consciously choose to become resistant to drugs.`,
                `It shows that bacteria never change no matter what happens to them.`,
                `It demonstrates that evolution can only happen in the distant past.`,
              ],
              correctIndex: 0,
              explanation: `Antibiotic resistance is natural selection observed directly: resistant bacteria survive the drug, reproduce, and come to dominate the population, all documented and repeatable. The distractors claim conscious choice, no change, or past-only evolution.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because scientists call it the "theory of evolution," that means evolution is only an unproven guess, no more supported than any other hunch about how life came to be.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important things to understand about how science works, because it turns on a single, frequently abused word: theory. In everyday conversation, "theory" often means a hunch or a guess, "I have a theory about why she's late." But in science, the word means almost the opposite. A scientific theory is a well-substantiated, thoroughly tested explanation of some aspect of the natural world, one supported by a large and growing body of evidence and confirmed through repeated observation and experiment. It is the highest status an explanation can achieve in science; ideas don't "graduate" from theories into facts, being a theory IS the destination. Consider the company evolution keeps: the germ theory of disease (that microorganisms cause illness), the atomic theory of matter, the theory of gravity, and the theory of plate tectonics are all "theories" in this strong sense. No one seriously doubts that germs cause disease or that atoms exist, yet these remain theories. So when scientists say "the theory of evolution," they are not confessing doubt, they are signaling that it is a robust, evidence-backed framework. And the evidence behind evolution is genuinely overwhelming, precisely because it converges from many completely independent fields: the fossil record (including transitional series), comparative anatomy (homologous structures), molecular biology (DNA family trees that match the fossil and anatomy trees), biogeography, and direct observation of evolution happening now (like antibiotic resistance). When fields that could have disagreed all tell the same story, the conclusion becomes extraordinarily hard to doubt. The "it's just a theory" argument is a rhetorical trick called equivocation: it smuggles the casual meaning of "theory" into a scientific context to make rigorously supported science sound like a casual guess. Recognizing and rejecting that move is exactly the kind of careful thinking science demands.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A skeptic says: "Sure, we've watched bacteria become resistant, but that's just small change within a species. It doesn't prove the big changes, like land mammals becoming whales." Using the lesson, what's the best response?`,
              options: [
                `The skeptic is completely right; small change has nothing to do with big change.`,
                `Tell them evolution has never actually been observed in any form at all.`,
                `Directly observed small-scale change shows the mechanism (natural selection) at work, and the fossil, anatomical, and DNA evidence independently documents exactly the large-scale changes over deep time, so the same process observed in the small operates across millions of years in the large.`,
                `Agree that whales were simply designed for water from the very start.`,
              ],
              correctIndex: 2,
              explanation: `The best response connects the lines of evidence: observed cases like antibiotic resistance directly demonstrate the mechanism (natural selection) in real time, while fossils (e.g. the whale series), anatomy, and DNA independently document the large-scale changes across deep time. The same process seen in the small operates over millions of years in the large. The distractors concede falsely, deny all observation, or invoke from-scratch design.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-family`, category: `One family of life`, prompt: `You're related, through deep time, to every living thing: the tree outside, the bacteria in your gut, the whale in the sea. All one branching tree. How does it feel to know you're not separate from nature, but woven into it?` },
            { id: `reflect-theory`, category: `What "theory" means`, prompt: `Learning that "theory" in science means a robust, evidence-backed explanation, not a guess, where else have you seen a word's everyday meaning cause confusion about what science actually claims? Why does precise language matter so much?` },
            { id: `reflect-evidence`, category: `Independent witnesses`, prompt: `The power of evolution's case is that fossils, anatomy, and DNA, which never compared notes, all tell the same story. Why is the agreement of independent sources so convincing, and where else in life should you look for it before believing something?` },
            { id: `reflect-heritage`, category: `Teaching deep time`, prompt: `Caro, you're building science for conscious families. How would you help a child feel awe at being part of life's four-billion-year story, and learn to weigh evidence, without it becoming a dry debate or a clash of beliefs?` },
            { id: `reflect-nodirection`, category: `No ladder, no top`, prompt: `Evolution has no goal and no ladder with humans on top; a bacterium suited to its niche is as "evolved" as you. Does letting go of the idea that we're the point of it all feel humbling, freeing, unsettling, or something else?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Evolution is overwhelmingly supported by evidence, yet some people reject it for reasons rooted in identity or belief. Why might strong evidence sometimes fail to change minds, and how would you talk with someone respectfully across that gap?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Evolution isn't ancient history, it's happening around you and inside you right now. These help you see it and reason about it. Two paths.`,
          familyActivity: {
            title: `Evolution Detectives`,
            duration: `One afternoon`,
            description: `Become evidence detectives and find evolution's fingerprints in the everyday world, turning the theory into something you can see and touch. Start with anatomy at home or the zoo: look closely at the limbs of different animals (your own arm, a pet's leg, bird wings, photos of a whale flipper or bat wing) and find the homologous pattern, the same bones doing different jobs, evidence of shared ancestry. Next, hunt for vestigial structures: research and discuss leftovers like the tiny leg bones in whales and snakes, or even features in humans (tailbone, goosebumps, the muscles some people can wiggle their ears with), remnants that make sense only as inheritance from ancestors. Then explore the DNA story: look up how much DNA humans share with other species (chimps, mice, bananas) and talk about why closer relatives share more, and how the DNA family tree matches the one from fossils and anatomy. For a hands-on simulation of natural selection, play the "predator" game: scatter colored toothpicks or candies (some matching the background, some standing out) on grass or carpet, give each family member 20 seconds to "hunt" as many as they can, then count survivors by color. The camouflaged ones survive more, the population shifts, you've just run natural selection in your backyard. Throughout, practice the scientist's habit: for each clue, ask "What does this actually show? How strong is it? How does it fit with the other evidence?" The goal is for everyone to see that evolution isn't a far-off abstraction or a matter of opinion, but a conclusion you can build yourself from convergent evidence all around you.`,
          },
          projectOption: {
            title: `The Evidence Case File, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Build a complete "case file" for evolution, the way a scientist or detective assembles convergent evidence, and learn to evaluate sources rigorously. Week 1, gather and assess the evidence: choose at least four independent lines of evidence (fossils/transitional forms, comparative anatomy/homologous structures, molecular biology/DNA comparisons, biogeography, and directly observed evolution like antibiotic or pesticide resistance). For each, research a specific real example, explain accurately what it shows, and crucially, rate its strength and note its limits, just as you did on the source-evaluation screen. The heart of the project is showing how these independent lines converge: make it visual, for instance, show how the family tree from DNA matches the one from anatomy and fossils. Week 2, tackle the reasoning and the misconceptions: address the most common misunderstandings (humans "from monkeys," evolution having a goal, "just a theory," individuals evolving) and explain clearly why each is mistaken, using the science. Then practice fair, evidence-based argument: write or record how you'd respond to a thoughtful skeptic, not by mocking them, but by walking through the actual evidence and the meaning of "theory." Produce your final case file as a documentary-style video, an annotated evidence board, a slide deck, or a written report that teaches both the evidence and how to reason about it. The aim is rigor and fairness: you're not just asserting evolution is true, you're demonstrating, source by source, why the evidence makes it the best-supported explanation, and modeling how to think clearly about contested science. You'll come away with deep understanding and a genuinely valuable skill: evaluating evidence and reasoning honestly about hard questions.`,
            offerToParent: `Parent: opt your child into the Evidence Case File project. Assembling multiple independent lines of evidence for evolution, rating each source's strength, showing how they converge, and clearly addressing misconceptions develops core NGSS ideas about evolution, evidence, and the nature of science, plus the rare skills of evaluating sources and reasoning fairly about contested topics. Whatever your family's beliefs, the ability to understand what the scientific evidence actually shows and to weigh sources rigorously is genuinely valuable. It's demanding, standards-aligned work that builds real scientific literacy and honest, evidence-based thinking.`,
          },
          identityQuestion: `If you become someone who can weigh evidence from many independent sources and follow it to a conclusion, who knows what "theory" really means and can reason fairly about contested questions, what kind of thinker does that make you, a person who builds beliefs from convergent evidence, that someone who just accepts or rejects ideas based on what they already feel can never quite become?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can weigh evidence from many sources and follow it.`,
            `A thinker who knows what "theory" really means in science.`,
            `Someone who sees themselves as part of life's whole family.`,
          ],
          saveKey: `identity_responses_sci_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Four down, and you've just grasped the single idea that ties all of biology together. You learned that evolution means descent with modification: all living things are related, descended from common ancestors over billions of years, and that in science, calling it a "theory" means it's the highest, best-supported kind of explanation, not a guess. You learned its engine, natural selection: heritable variation exists, more are born than survive, and those whose traits fit the environment reproduce more, so helpful traits spread, with random mutation supplying variation and non-random selection shaping it, no goal, no foresight, no ladder. And as a scientist, you weighed the evidence yourself: the whale fossil series, the homologous limb bones, the DNA family tree that matches the fossil tree, antibiotic resistance evolving in real time, and you saw through the "it's just a theory" word trick. You understand why the case for evolution is so overwhelming: independent witnesses, fossils, anatomy, DNA, observation, all telling the same story. Most of all, you practiced the deepest scientific skill of all: following evidence honestly to where it leads. Next, we explore how living things interact in populations and ecosystems, the science of ecology and how nature stays in balance. Onward, {name}. — Cosmo`,
          badge: `evidence-weaver`,
          badgeName: `Evidence Weaver`,
          xpEarned: 75,
          competencies: [
            `Understands evolution as descent with modification from common ancestors`,
            `Knows that a scientific theory is a well-tested, evidence-backed explanation, not a guess`,
            `Explains natural selection: heritable variation, differential survival, and change over generations`,
            `Distinguishes random mutation from non-random selection, and grasps that evolution has no goal`,
            `Identifies and evaluates the major lines of evidence: fossils, anatomy, DNA, and direct observation`,
            `Recognizes how convergence of independent evidence makes a theory powerful`,
            `Corrects common misconceptions and reasons fairly about contested science`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Ecology — Population Dynamics and Carrying Capacity`,
            hook: `How populations grow, crash, and balance in the web of life. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const src = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} sources=${src} q=${quiz}`);
}
