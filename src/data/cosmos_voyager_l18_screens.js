// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L18 — Cosmology & Meaning
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: Coreverse Original — Philosophy, Meaning, Existential Questions
// CALIBRATED: Voyager spec v1.1 (May 2026) — Tier 3 honesty on meaning frameworks
// Interaction format: SOURCE EVALUATION (Sagan/Tyson naturalism vs religious cosmology vs philosophical nihilism)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l18-v1";

const COSMOS_VOYAGER_L18 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-18`,
      title: `Cosmology & Meaning`,
      duration: 35,
      xpReward: 75,
      badge: `meaning-cartographer`,
      badgeName: `Meaning Cartographer`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `{name}, after seventeen lessons of cosmology, we arrive at the personal question this whole subject leads to. What does it mean to be a person inside this universe? You are made of atoms forged in dead stars. You sit in a galaxy among hundreds of billions of galaxies. You exist for an instant on cosmic timescales. The universe doesn't seem to need you. And yet here you are, conscious, reading these words. How should that feel? What should it mean? Three radically different traditions have answered this question seriously, and they remain in active conversation today. Today we look at all three and you evaluate them as sources of meaning.`,
          headline: `Cosmology & Meaning`,
          subtitle: `What does it mean to be a person inside this universe? Three serious traditions disagree.`,
          visual: `/voyager-assets/cosmos/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Cosmology Asks About Meaning`,
          paragraphs: [
            `Throughout this band we've been doing science. Empirical observations, mathematical frameworks, controlled tests, peer review. The empirical method has produced spectacular results: we know the age and size of the observable universe, the composition of cosmic energy, the life cycles of stars, the basic laws of motion and gravity. None of this directly tells us what cosmic facts MEAN for human existence. That question lives in a different intellectual domain.`,
            `Some people argue science can answer the meaning question directly. Some argue it can't and shouldn't try. Some argue meaning is something humans construct regardless of cosmology. These positions aren't crazy versions of each other; they're distinct intellectual traditions with thoughtful defenders. The disagreement is real and matters.`,
            `One thing to be clear about. "Meaning" doesn't have to mean cosmic purpose imposed by some external source. It can mean "what makes a human life worth living," or "what humans should care about given everything we know," or "how to orient one's existence in a vast indifferent universe," or many other things. Different traditions interpret "meaning" differently. Part of evaluating their answers is noticing which interpretation each uses.`,
            `One more thing. This is the most personal lesson in the band. You may have intuitions, beliefs, or family traditions that pull strongly toward one of the three positions we'll examine. That's fine. The point of the lesson isn't to convert you or to dismiss what you already believe. It's to introduce three serious frameworks for thinking about cosmic meaning and let you evaluate them carefully. Many adults never give themselves permission to examine these questions seriously. You can.`,
          ],
          image: `/voyager-assets/cosmos/l18-s1-meaning.webp`,
          imageCaption: `Cosmology gives facts. Meaning is a different question. Three serious traditions for answering it.`,
          vocab: [
            {
              word: `existential question`,
              definition: `Questions about what it means to exist, what makes a life worth living, what one's relationship to existence should be. Distinct from empirical questions about facts. Different traditions (philosophical, religious, scientific) offer different frameworks for engaging with them.`,
              audioPrompt: `An existential question is a question about what it means to exist, what makes a life worth living, what one's relationship to existence should be, {name}. The word "existential" comes from "existence." These questions are distinct from empirical questions about facts. Empirical questions are answered by observation and measurement. Existential questions are engaged through reflection, lived experience, and frameworks for thinking about meaning. Different traditions offer different approaches. Philosophical traditions, religious traditions, and scientific naturalism all engage with existential questions in different ways. None of these traditions can be reduced to the others. Engaging with existential questions seriously is one of the most important intellectual activities humans can undertake. It's also one that many adults postpone or avoid.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Tradition 1: Scientific Naturalism (Sagan, Tyson, Sean Carroll)`,
          paragraphs: [
            `One major tradition argues that cosmology itself, properly understood, generates rich meaning. Carl Sagan articulated this beautifully in his 1980 series "Cosmos" and in his book "Pale Blue Dot" (1994). The core idea: we are matter that has become aware of itself. We are the way the universe knows itself. The very same atoms that formed in stellar explosions billions of years ago have, through immense improbability and time, organized themselves into beings that can reflect on their own origin. The cosmic story doesn't need to be supplemented by anything supernatural to be profoundly meaningful.`,
            `Neil deGrasse Tyson has continued this tradition. In "Astrophysics for People in a Hurry" (2017) and across his public communication, Tyson argues that cosmic facts (the scale of the universe, the chemistry of stars, the connections between cosmic events and human existence) are themselves sources of meaning. We don't need to invent purpose to find awe; the universe provides enough awe on its own.`,
            `Theoretical physicist Sean Carroll has developed a more philosophically rigorous version in "The Big Picture" (2016). He argues for what he calls "poetic naturalism": the universe is what science describes, and meaning is something humans construct on top of that description. Importantly, "constructed" doesn't mean "fake." A symphony is constructed too, but it's real and matters. Meaning, ethics, beauty, love, purpose are all real human constructions over a naturalistic foundation.`,
            `The case for this tradition: it requires no claims beyond what science has established. It treats cosmology as the source of profound wonder. It locates meaning in real features of existence: connection, beauty, consciousness, the cosmic story we are part of. Its weakness, according to critics, is that "constructed meaning" may not feel as solid as meaning grounded in something transcendent. Whether constructed meaning is enough is itself contested.`,
          ],
          image: `/voyager-assets/cosmos/l18-s2-naturalism.webp`,
          imageCaption: `Sagan, Tyson, Carroll: cosmic facts themselves generate meaning. We are the universe knowing itself.`,
          vocab: [
            {
              word: `scientific naturalism`,
              definition: `Philosophical position that reality is exhausted by what science can investigate, and meaning is something humans construct within that framework. Defenders include Carl Sagan, Neil deGrasse Tyson, Sean Carroll. "Poetic naturalism" (Carroll's term) emphasizes that constructed meaning is real meaning, not fake meaning.`,
              audioPrompt: `Scientific naturalism is the philosophical position that reality is exhausted by what science can investigate, {name}. Meaning is something humans construct within that framework. Famous defenders include Carl Sagan, Neil deGrasse Tyson, and theoretical physicist Sean Carroll. Carroll's specific term is "poetic naturalism." He argues that the universe is what science describes, and meaning, ethics, beauty, love, and purpose are all real human constructions over a naturalistic foundation. Importantly, "constructed" doesn't mean "fake." A symphony is constructed. It's still real and it still matters. The scientific naturalist tradition argues we don't need to invent supernatural sources of meaning. The cosmic story, properly understood, generates enough wonder and significance on its own.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tradition 2: Religious And Wisdom Cosmologies`,
          paragraphs: [
            `The world's religious traditions have engaged with cosmology and meaning for thousands of years. They offer rich frameworks that locate human existence within larger structures of significance, purpose, and connection to something transcendent. Christian, Jewish, Islamic, Hindu, Buddhist, indigenous, and many other traditions have developed sophisticated cosmologies. These are not naive pre-scientific frameworks; many traditions have engaged thoughtfully with contemporary cosmology and continue to develop their views.`,
            `Christian theology, for instance, has had robust engagement with Big Bang cosmology since the theory's emergence. The astronomer Georges Lemaître, who proposed the first version of what became the Big Bang theory in 1927, was a Catholic priest. Contemporary theologians and philosophers (John Polkinghorne, Alister McGrath, William Lane Craig, others) have developed detailed responses to scientific cosmology. Within Hinduism, the Vedantic tradition has engaged with quantum mechanics and cosmology through thinkers like Swami Vivekananda. Within Buddhism, the Dalai Lama has actively engaged with contemporary science.`,
            `What religious cosmologies typically offer that scientific naturalism doesn't: a sense that the universe has purpose beyond what humans construct, a relationship between human existence and some transcendent source, ethical frameworks grounded in something beyond evolutionary pragmatism, practices that connect daily life to cosmic significance, communities of shared meaning maintained across generations. These are real features of religious traditions that scientific naturalism is less equipped to provide.`,
            `Critics of religious cosmologies argue that many specific claims (about miracles, supernatural intervention, specific historical events) require evidence that hasn't been provided. Others argue that even if specific theological claims are unsupported, religious frameworks contain deep wisdom about human existence that secular traditions are still catching up to. Both views are taken seriously by working philosophers. The religious tradition is too diverse to be characterized by any single position; it includes everything from highly literal fundamentalism to deeply philosophical mystical traditions.`,
            `One caution. "Religious cosmology" doesn't mean "young-earth creationism that denies the Big Bang." Most religious traditions, including most Christian denominations and most Jewish, Muslim, Hindu, and Buddhist traditions, accept the standard cosmological timeline (13.8 billion years, evolution of matter and life). Mainstream religious cosmologies provide frameworks for interpreting the scientific facts, not for replacing them.`,
          ],
          image: `/voyager-assets/cosmos/l18-s3-religious.webp`,
          imageCaption: `Religious cosmologies: detailed frameworks engaging with science, offering meaning beyond construction.`,
          vocab: [
            {
              word: `religious cosmology`,
              definition: `Frameworks from religious and wisdom traditions for understanding the universe and human existence within it. Diverse range across Christian, Jewish, Islamic, Hindu, Buddhist, indigenous, and other traditions. Mainstream versions accept scientific cosmological facts while providing additional interpretive frameworks for meaning and purpose.`,
              audioPrompt: `Religious cosmology refers to frameworks from religious and wisdom traditions for understanding the universe and human existence within it, {name}. There is a diverse range across Christian, Jewish, Islamic, Hindu, Buddhist, indigenous, and other traditions. Each has engaged with contemporary science in serious ways. The astronomer who proposed the first version of the Big Bang theory, Georges Lemaître, was a Catholic priest. The Dalai Lama has actively engaged with contemporary science. Hindu Vedantic thinkers have engaged with quantum mechanics. Most religious traditions in their mainstream forms accept the standard cosmological timeline of 13.8 billion years and provide additional interpretive frameworks for meaning and purpose. "Religious cosmology" is not synonymous with "young-earth creationism." The category contains everything from highly literal fundamentalism to deeply philosophical mystical traditions.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tradition 3: Philosophical Nihilism (And Its Responses)`,
          paragraphs: [
            `A third serious tradition argues that cosmic facts strongly suggest the universe is meaningless in any cosmic sense, and that the meaningful response is to face this honestly. This tradition is often called nihilism, but the contemporary academic versions are more sophisticated than the cartoon version of "nothing matters and we should all give up." The serious versions are about confronting cosmic meaninglessness while still finding ways to live well.`,
            `The 20th century existentialist tradition (Albert Camus, Jean-Paul Sartre, Simone de Beauvoir) is the most famous engagement with this question. Camus, in "The Myth of Sisyphus" (1942), argued that the universe is genuinely indifferent to human existence, and that the only authentic response is to revolt by living fully despite this indifference. He used the Greek myth of Sisyphus (condemned to push a boulder up a hill forever, only to watch it roll back down) as a metaphor for human existence: meaningless in any cosmic sense, yet capable of being lived with dignity and even joy.`,
            `Contemporary philosophical nihilism (Thomas Nagel's essay "The Absurd," 1971; David Benatar's "Better Never to Have Been," 2006; and others) has developed more rigorous versions. Some are pessimistic: existence may not be worth its costs. Others are absurdist: meaning doesn't exist cosmically, but we can construct it locally. Some are existentialist: we are condemned to be free, to construct our own meaning in a universe that provides none.`,
            `The case for this tradition: it takes cosmic indifference seriously. It doesn't paper over the fact that the universe is enormous, ancient, and largely indifferent to human existence. It generates honest engagement with the gravity of cosmic facts rather than rushing to comforting frameworks. It often produces ethically serious responses (Camus's "revolt" against meaninglessness is one of the most powerful) and psychological honesty.`,
            `Critics argue this tradition overstates cosmic indifference. The universe produced consciousness; that's not nothing. Constructed meaning is real meaning, not pretend meaning (the scientific naturalists' point). And the personal lived experience of meaning may be more robust than abstract arguments about cosmic meaninglessness suggest. The disagreement between nihilism and naturalism is partly empirical (about what cosmology shows) and partly philosophical (about what counts as "real" meaning).`,
            `One important note. Philosophical nihilism is different from depression, despair, or giving up. Some of the most rigorous nihilist philosophers lived deeply engaged lives and produced enormous creative output. Camus drove an ambulance during WWII; Sartre wrote prolifically; Nagel continues to teach and write at NYU. Taking cosmic meaninglessness seriously doesn't require ceasing to live.`,
          ],
          image: `/voyager-assets/cosmos/l18-s4-nihilism.webp`,
          imageCaption: `Camus, Nagel, Benatar: confront cosmic meaninglessness honestly. Not despair; demanding engagement.`,
          vocab: [
            {
              word: `philosophical nihilism`,
              definition: `Tradition arguing the universe has no inherent meaning or purpose; serious versions don't conclude "nothing matters" but rather examine what living well means in the face of cosmic meaninglessness. Famous defenders include Camus, Nagel, Benatar. Different from popular cartoon version of "everything is pointless."`,
              audioPrompt: `Philosophical nihilism is the tradition arguing the universe has no inherent meaning or purpose, {name}. The serious versions don't conclude "nothing matters and we should all give up." That's the cartoon version. The serious versions examine what living well means in the face of cosmic meaninglessness. Famous defenders include Albert Camus ("The Myth of Sisyphus" 1942), Thomas Nagel ("The Absurd" 1971), and others. Some are pessimistic. Some are absurdist. Some are existentialist. They share the move of taking cosmic indifference seriously rather than rushing to comforting frameworks. Importantly, taking cosmic meaninglessness seriously doesn't require ceasing to live. Some of the most rigorous nihilist philosophers lived deeply engaged lives and produced enormous creative output. Camus drove an ambulance during WWII while writing his great works on absurdity.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources representing each tradition. They're not perfectly matched; you can't directly compare the rigor of a popular science book to a peer-reviewed philosophical paper to a religious text. So evaluate each source within its tradition: is this source representative of serious work in its category, or is it sloppy or unrepresentative work? The point isn't to determine which tradition is "right" overall, but to develop the framework for evaluating sources that engage with cosmic meaning.`,
            `As you work through this, notice the question that goes unaddressed by all three. None of the three traditions answer the question "what cosmic meaning should you adopt for your life?" That's a personal question that no source can answer for you. The traditions offer frameworks within which to think about the question. Your own response, over a lifetime of living, is what you'll bring to it. At 12, you're starting that lifelong engagement, not ending it.`,
            `One framing that may help. Many adults default to whatever cosmic meaning their family of origin transmitted, often without examining alternatives. The cost: they go through life with a meaning framework they never chose. The opportunity here is to engage with the alternatives seriously, while still respecting whatever you already believe. Some of you will end up with views close to where you started, having examined them more deeply. Some will move toward different positions over time. Either response is legitimate. What matters is that you actually engage with the question.`,
            `One last note. Manifestation, spiritual content, and wellness culture often offer versions of cosmic meaning that borrow vocabulary from real traditions without doing the underlying work. "The universe wants you to succeed." "You are a high vibrational being aligning with cosmic consciousness." These claims sound profound but typically don't engage with the actual content of any of the three traditions covered today. Serious scientific naturalism, serious religious cosmology, and serious philosophical nihilism all require more intellectual work than the wellness versions suggest. The reward of doing that work is engagement with cosmic meaning at full depth rather than at the marketing level.`,
          ],
          image: `/voyager-assets/cosmos/l18-s5-before.webp`,
          imageCaption: `Three traditions, three serious frameworks. Your lifetime engagement with the question starts now.`,
          vocab: [
            {
              word: `existentialism`,
              definition: `20th century philosophical tradition (Camus, Sartre, de Beauvoir, Heidegger) that examines human existence in a universe without inherent meaning. Argues humans are "condemned to be free" and must construct their own meaning through choice and action. Major influence on 20th century philosophy and literature.`,
              audioPrompt: `Existentialism is the 20th century philosophical tradition that examines human existence in a universe without inherent meaning, {name}. Major figures include Albert Camus, Jean-Paul Sartre, Simone de Beauvoir, and Martin Heidegger. The tradition argues that humans are "condemned to be free" and must construct their own meaning through choice and action. Existentialism had a major influence on 20th century philosophy, literature, and culture. Different existentialists hold different views: Camus was an absurdist who emphasized "revolt" against meaninglessness, Sartre emphasized radical freedom and responsibility, de Beauvoir applied existentialist analysis to feminist questions in "The Second Sex." Existentialism is sometimes lumped with nihilism but the relationship is complex. Most existentialists rejected pure nihilism while accepting that cosmic meaning isn't pre-given.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l18-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Cosmology And Meaning`,
          intro: `Three sources representing three traditions on what cosmology implies for meaning. Rank them from most credible to least credible based on intellectual rigor within their tradition, not on whether you agree with their conclusions. Then see how a careful analyst would evaluate them.`,
          topic: `How should we engage with cosmic meaning, and how do we evaluate serious traditions in this domain?`,
          sources: [
            {
              id: `source-a`,
              name: `Sean Carroll, "The Big Picture" (2016) — scientific naturalism with philosophical rigor`,
              type: `Popular philosophy book by Sean Carroll, theoretical physicist at Johns Hopkins/Santa Fe Institute, defending "poetic naturalism" as the most defensible framework given contemporary science`,
              claim: `The universe is what science describes: matter and energy obeying physical laws. Meaning, ethics, beauty, love, and purpose are real human constructions built on this naturalistic foundation. "Constructed" doesn't mean "fake": a symphony is constructed too, but it's real and it matters. Argues against various supernatural and idealist alternatives in detail, addressing their strongest arguments. Engages seriously with Bayesian probability frameworks, philosophical objections, and the actual state of science. Distinguishes his position from naive scientism that dismisses all non-empirical questions.`,
              evidence: `Author is a working theoretical physicist with peer-reviewed publications and broad academic credibility. The book engages seriously with alternative positions (theism, idealism, philosophical nihilism) and their strongest arguments rather than dismissing them. Uses Bayesian reasoning to weigh evidence for different views. Distinguishes between empirical claims (constrained by evidence) and value claims (constructed by humans). Acknowledges the limits of science in addressing meaning while still defending naturalism's adequacy. Strong example of contemporary scientific naturalism doing the philosophical work.`,
            },
            {
              id: `source-b`,
              name: `John Polkinghorne, "Belief in God in an Age of Science" (1998) — academic engagement of religious cosmology with contemporary science`,
              type: `Academic book by John Polkinghorne, formerly Professor of Mathematical Physics at Cambridge and ordained Anglican priest, engaging with how religious cosmology can incorporate contemporary science`,
              claim: `Religious cosmology and scientific cosmology are not in inherent conflict. The Big Bang theory, evolution, and quantum mechanics can be embraced by religious frameworks. The book engages with specific questions: the relationship between divine action and natural law, the nature of evil in a created universe, the implications of quantum mechanics for theology, the resurrection in light of physics. Polkinghorne is careful to mark which religious claims he considers empirically supported, which require faith beyond science, and which religious positions he himself rejects.`,
              evidence: `Author has formal credentials in both physics and theology, with peer-reviewed publications in both fields. Was a Cambridge professor in mathematical physics before becoming an Anglican priest. The book engages rigorously with both scientific and theological literature. Polkinghorne distinguishes his views from young-earth creationism, intelligent design, and other positions he considers untenable. Acknowledges the strongest naturalist arguments rather than strawmanning them. Has been widely respected by both religious scholars and many scientists for the seriousness of his engagement. Representative of serious religious cosmology at the level of academic theology, not popular religious apologetics.`,
            },
            {
              id: `source-c`,
              name: `@HighVibeManifest — Instagram account, 2.8M followers, sells $897 "Quantum Cosmic Alignment" mastermind`,
              type: `Viral Instagram/TikTok account claiming "cosmic alignment" through quantum-flavored manifestation, selling expensive courses on connecting with cosmic intelligence`,
              claim: `"The universe is conscious and it WANTS to give you abundance. You are a high vibrational being. The quantum field responds to your frequencies. The cosmos has been waiting for you to wake up to your divine purpose. Mainstream physics is decades behind what mystics have always known. Carl Sagan, Einstein, and Tesla all secretly knew about cosmic consciousness. Join my $897 Quantum Cosmic Alignment mastermind to learn how to align with the universe and manifest your soul's destiny. Limited spots; doors close Friday."`,
              evidence: `Borrows vocabulary from physics (quantum field, frequencies, vibrations), from naturalism (Carl Sagan), and from religious traditions (divine purpose, soul) without engaging with any of them. Misrepresents specific scientists: Sagan was an explicit naturalist who would not have endorsed the cosmic-consciousness framing; Einstein's "spiritual" comments referred to awe at natural order, not "cosmic consciousness" in the sense being marketed; Tesla didn't write about consciousness creating reality. Conflates "the universe is awe-inspiring" with "the universe is conscious and wants you specifically to succeed." No engagement with any serious tradition. Course at the end. Profit motive structural. Real scientific naturalists, real religious philosophers, and real existentialists would all decline to endorse the specific claims.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you weigh credibility WITHIN each tradition vs across them? What distinguished Source C from A and B in kind?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is highly credible as contemporary scientific naturalism. Sean Carroll is a working theoretical physicist with strong credentials and a sophisticated engagement with philosophy. "The Big Picture" doesn't dismiss alternative positions; it engages with their strongest arguments using Bayesian frameworks. The "poetic naturalism" framework is intellectually honest about the limits of science while defending naturalism's adequacy for grounding meaning. When you want to understand what serious contemporary scientific naturalism argues, this is among the best sources available.`,
              `Source B is highly credible as contemporary religious cosmology engaging with science. John Polkinghorne had formal credentials in both physics (Cambridge professor of mathematical physics) and theology (ordained Anglican priest). His work engages rigorously with both scientific and theological literatures. He distinguishes his positions from young-earth creationism and other views he considers untenable, while defending serious theistic interpretations. This is religious cosmology at the level of academic theology, not popular religious apologetics. Whether you find his theistic conclusions persuasive or not, the argument is serious philosophy.`,
              `Source C is recognizable manifestation content using vocabulary borrowed from real traditions without doing the underlying work. The claim that "Sagan, Einstein, Tesla all knew about cosmic consciousness" is specifically incorrect: Sagan was an explicit naturalist who would not have endorsed the cosmic-consciousness framing; Einstein's "spiritual" comments referred to awe at natural order, not cosmic consciousness in the sense being marketed. The conflation of "the universe is awe-inspiring" with "the universe is conscious and wants YOU to succeed" is not what serious scientific naturalism, serious religious cosmology, or serious philosophical nihilism claims. Real defenders of any of the three traditions would decline to endorse the specific claims. The financial incentive structure (high-priced courses) means revenue depends on the framing being believed, not on it being correct.`,
              `The deeper lesson is the framework itself. Three serious traditions engage with cosmic meaning at different intellectual angles. Scientific naturalism locates meaning in human construction over naturalistic foundations. Religious cosmology locates meaning partly in transcendent sources beyond what science can investigate. Philosophical nihilism locates meaning in the human response to cosmic indifference. These are different intellectual moves, and reasonable people commit to different traditions over a lifetime of engagement. The wellness-content version trades all three for marketing claims that flatter readers and sell courses. Once you can tell the difference, you can engage with cosmic meaning at the depth the question deserves.`,
            ],
          },
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why does cosmology generate questions about meaning?`,
              options: [
                `It always has`,
                `Empirical cosmic facts (scale, age, composition) don't directly tell us what they MEAN for human existence; the meaning question lives in a different intellectual domain than empirical science; multiple traditions engage with it differently`,
                `Scientists are philosophers`,
                `Cosmology is religious`,
              ],
              correctIndex: 1,
              explanation: `The meaning question is genuinely separate from the empirical question. Different intellectual moves answer it. Recognizing this distinction prevents confusion about what science can and cannot tell us.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is scientific naturalism in the sense defended by Sean Carroll?`,
              options: [
                `Believing in nature`,
                `"Poetic naturalism": the universe is what science describes; meaning is something humans construct on top of that description; "constructed" doesn't mean "fake" (a symphony is constructed and matters); defenders include Sagan, Tyson, Carroll`,
                `Hiking and outdoors`,
                `Vegetarianism`,
              ],
              correctIndex: 1,
              explanation: `Poetic naturalism is intellectually honest about what science can and can't establish. It locates meaning in real human constructions while not requiring supernatural foundations.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What did Carl Sagan emphasize about cosmic meaning?`,
              options: [
                `Nothing matters`,
                `We are matter that has become aware of itself; the cosmic story doesn't need supernatural supplementation to be profoundly meaningful; atoms forged in stars have organized into beings that can reflect on their origin; from "Cosmos" series 1980 and "Pale Blue Dot" 1994`,
                `Religion is bad`,
                `Aliens exist`,
              ],
              correctIndex: 1,
              explanation: `Sagan's framing has shaped a generation of scientific public communication. The "we are the universe knowing itself" framing locates rich meaning in real cosmological facts.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is religious cosmology, in serious academic terms?`,
              options: [
                `Religious dogma`,
                `Frameworks from religious traditions for understanding the universe and human existence; mainstream versions accept scientific cosmology (Big Bang, evolution); provide interpretive frameworks beyond what science alone offers; defenders include John Polkinghorne, Alister McGrath, others`,
                `Pre-scientific thinking`,
                `Fundamentalism`,
              ],
              correctIndex: 1,
              explanation: `Religious cosmology is too diverse to characterize by any single view. Most mainstream traditions accept scientific facts and provide additional interpretive frameworks. Not synonymous with young-earth creationism.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Who was Georges Lemaître, and why does he matter for the science/religion conversation?`,
              options: [
                `A famous atheist`,
                `Belgian astronomer who proposed the first version of what became the Big Bang theory in 1927; also an ordained Catholic priest; example of serious scientific work happening within religious traditions; the Big Bang theory has religious-tradition origins`,
                `A modern theologian`,
                `Nobel Prize winner`,
              ],
              correctIndex: 1,
              explanation: `Lemaître is a useful counterexample to the assumption that scientific cosmology and religious thinking are inherently opposed. The standard cosmological model originated partly from a Catholic priest's mathematical work.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is philosophical nihilism, in the serious academic sense?`,
              options: [
                `Believing nothing matters`,
                `Tradition examining what living well means in the face of cosmic meaninglessness; serious versions (Camus, Nagel) don't conclude "give up" but rather demand engagement with cosmic indifference; existentialism is a related tradition`,
                `Depression`,
                `Refusing to live`,
              ],
              correctIndex: 1,
              explanation: `The serious versions are very different from the cartoon "nothing matters" version. Camus drove an ambulance during WWII while writing on absurdity. Taking cosmic meaninglessness seriously doesn't require ceasing to live.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did Camus argue in "The Myth of Sisyphus" (1942)?`,
              options: [
                `Sisyphus is happy`,
                `The universe is genuinely indifferent to human existence; the only authentic response is to revolt by living fully despite this indifference; meaningless in any cosmic sense yet capable of being lived with dignity and even joy`,
                `Pushing rocks is good exercise`,
                `Greek myths are real`,
              ],
              correctIndex: 1,
              explanation: `Camus's framing is one of the most powerful in the existentialist tradition. Sisyphus, condemned to push a boulder up a hill forever, becomes a metaphor for human existence: meaningless cosmically, but capable of being lived authentically.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the typical pattern in popular "cosmic consciousness" wellness content?`,
              options: [
                `Rigorous scholarship`,
                `Borrows vocabulary from physics ("quantum"), naturalism ("Sagan"), and religious traditions ("soul") without engaging with any of them; conflates "universe is awe-inspiring" with "universe is conscious and wants YOU to succeed"; real defenders of any tradition would decline to endorse specific claims; profit motive structural`,
                `Engagement with peer review`,
                `Real philosophy`,
              ],
              correctIndex: 1,
              explanation: `The pattern is the same one we've seen throughout this band. Borrow vocabulary, drop the work, sell courses. Recognizing it across topics (quantum, consciousness, manifestation, "cosmic alignment") protects you broadly.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Carl Sagan believed the universe is conscious and rewards those who align with cosmic intelligence.`,
              correctAnswer: false,
              explanation: `False. Sagan was an explicit scientific naturalist who would not have endorsed cosmic-consciousness or manifestation framings. His "we are the universe knowing itself" was about consciousness being a natural feature of evolved matter, not about a conscious universe responding to human intentions. The misuse of Sagan in pop content is a specific misrepresentation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "I just KNOW the universe has a plan for me—I can FEEL it." Based on this lesson, what's the most useful response?`,
              options: [
                `"You're definitely right"`,
                `"That feeling is real and worth taking seriously. But you can hold the feeling in different frameworks: as a scientific naturalist would (constructed meaning that's still real), as a religious person would (genuine transcendent purpose), or as an existentialist would (your projection onto an indifferent universe that you make meaningful through engagement). Each framework treats the feeling differently. The 'universe has a plan' framing usually comes from popularized spiritual content that borrows from real traditions without doing the work. Engaging with a tradition seriously is more rewarding than the popular version."`,
                `"That's just feelings"`,
                `"The universe doesn't care"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic meaning literacy. Don't dismiss the feeling. Name the different frameworks for interpreting it. Distinguish serious engagement with cosmic meaning from popularized versions. This is mature engagement with the most personal of cosmic questions.`,
            },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved. This is the most personal cosmic question; take your time.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, which tradition (if any) was the framework you'd been using to think about cosmic meaning? Has that shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which tradition pulls you strongest right now? Was it because of the intellectual rigor, the emotional resonance, family transmission, or something else?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you engage seriously with cosmic meaning for a lifetime, what kind of person do you become at 30? At 70? Different from someone who never engaged with the question?` },
            { id: `reflect-application`, category: `Application`, prompt: `How does your current framework for cosmic meaning shape your daily decisions? Should it shape them more, less, or differently?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there a fourth serious tradition for cosmic meaning the lesson didn't cover? What might it look like? Indigenous cosmologies? Process philosophy? Posthumanism?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: what's the framework they actually use for cosmic meaning? Have they ever changed it? What changed them?` },
          ],
        },

        {
          id: `l18-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Cosmic meaning is the most personal question this entire subject leads to. Two paths.`,
          familyActivity: {
            title: `The Family Cosmic Meaning Conversation`,
            duration: `60 minutes`,
            description: `At dinner, share what you learned about the three traditions. Ask each adult: which framework do they use to think about cosmic meaning, if any? Have they ever changed their view? What changed them? This conversation often goes deeper than any family dinner usually does: faith histories, doubts, questions never asked aloud, frameworks inherited from parents that haven't been examined. There's no goal of agreement. The point is everyone in the family now has language for what's being engaged with. Many families have never had this conversation. Initiating it at 12 is unusual and valuable.`,
          },
          projectOption: {
            title: `Read One Book From Each Tradition, 8 weeks (optional)`,
            duration: `8 weeks, ~45 minutes per session`,
            description: `Read one accessible book from each of the three traditions. Scientific naturalism: Carl Sagan's "Pale Blue Dot" OR Sean Carroll's "The Big Picture." Religious cosmology: depends on tradition you're curious about—John Polkinghorne for engagement with Christianity, Krista Tippett's "Speaking of Faith" for cross-tradition perspectives, the Dalai Lama's "The Universe in a Single Atom" for Buddhist engagement with science. Existentialism/nihilism: Camus's "The Myth of Sisyphus" OR Thomas Nagel's "Mortal Questions." Read for 8 weeks. Write 3,000 words synthesizing your current best understanding of cosmic meaning across the three traditions. Real applied philosophy of religion and existentialism at a depth few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Reading across three traditions on cosmic meaning is exceptionally formative.`,
          },
          identityQuestion: `If you engage with cosmic meaning across three serious traditions over a lifetime, what does that change about how you understand your own existence?`,
        },

        {
          id: `l18-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three serious traditions on cosmic meaning and can engage with each on its merits.`,
            `A person who takes existential questions seriously instead of defaulting to whatever framework I inherited.`,
            `Someone willing to hold cosmic meaning as a lifelong engagement rather than a one-time answer.`,
          ],
          saveKey: `identity_responses_cs_11_12_18`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighteenth Cosmos lesson done. You can now articulate three serious traditions on cosmic meaning (scientific naturalism with Sagan/Tyson/Carroll, religious cosmology with Polkinghorne and others, philosophical nihilism with Camus/Nagel), recognize the difference between serious engagement and wellness-marketing simplifications, and engage with one of the most personal questions humans can ask. Most adults never engage with this question at the level you just did. Next time we look directly at one of the most useful intellectual moves available: knowing what we don't know. Three serious positions on how to hold cosmic ignorance. Argument Builder format. Then the capstone. See you among the stars. — Nova`,
          badge: `meaning-cartographer`,
          badgeName: `Meaning Cartographer`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious traditions on cosmic meaning (naturalism, religious, nihilism)`,
            `Knows major defenders: Sagan/Tyson/Carroll for naturalism; Lemaître/Polkinghorne for religious cosmology; Camus/Nagel for nihilism`,
            `Distinguishes "constructed meaning is real meaning" (poetic naturalism) from "constructed meaning is fake"`,
            `Recognizes how wellness content borrows from but misrepresents real meaning traditions`,
            `Can engage with cosmic meaning as a lifelong question, not a one-time answer`,
          ],
          nextLessonPreview: {
            title: `Lesson 19: What We Don't Know`,
            hook: `Cosmic ignorance is one of the most useful intellectual states. Three positions on how to hold what we don't know. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L18;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L18.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L18 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
