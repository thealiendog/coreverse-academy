// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L20 — Science and Society: The Power and Responsibility of Knowledge
// Age band : voyagers (11-12)   Guide: cosmo (Otter)   *** BAND FINALE ***
// Standards: NGSS — Science & Society; Nature of Science
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l20-v1";

const SCIENCE_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-20`,
      title: `Science and Society: The Power and Responsibility of Knowledge`,
      duration: 35,
      xpReward: 75,
      badge: `future-shaper`,
      badgeName: `Future Shaper`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, this is the final lesson of your journey through science. We end where every great scientific tradition eventually arrives: power and responsibility. Science has given humanity the capacity to cure disease, feed billions, and understand the cosmos. It has also given us nuclear weapons, surveillance systems, and the tools for ecological destruction. What do scientists owe society, and what does society owe science? These questions are yours now.`,
          headline: `Science and Society: The Power and Responsibility of Knowledge`,
          subtitle: `How science shapes our world, and how we, together, must decide what to do with its power. A debate among many voices.`,
          visual: `/voyager-assets/science/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `How Science Transformed The World`,
          paragraphs: [
            `Science is not just an abstract pursuit; it has utterly transformed human life. For most of history, people died young of diseases we now cure, lived without electricity or clean water, and knew little of the universe. In just a few centuries, science and its technology have reshaped nearly every aspect of human existence, faster than anything before.`,
            `Consider the changes. Medicine, vaccines, antibiotics, surgery, doubled human lifespan and conquered diseases that once killed millions. Computing connects the planet instantly. Understanding energy lit our world. Agriculture feeds billions. Transport shrank the globe. Each rests on the patient accumulation of scientific knowledge, the same method you've now learned.`,
            `This transformation flows from a simple engine: science discovers how the world works, and technology applies that knowledge usefully. Pure curiosity about electricity, atoms, or cells, often with no obvious use at the time, later became devices and cures no one could have imagined. This is why societies invest in science: understanding reality unlocks the power to improve life.`,
          ],
          image: `/voyager-assets/science/l20-s1-transformed.webp`,
          imageCaption: `Science is not just abstract; it has utterly TRANSFORMED human life. For most of history, people died young of diseases we now cure, lived without electricity or clean water, and knew little of the universe. In a few centuries, science and its TECHNOLOGY reshaped nearly every aspect of existence, faster and more profoundly than anything before. Consider: MEDICINE (vaccines, antibiotics, surgery) doubled human lifespan; COMMUNICATION and computing connect the planet instantly; understanding ENERGY lit our world; AGRICULTURE feeds billions; TRANSPORT shrank the globe. The engine is simple: science discovers HOW the world works, and technology APPLIES that knowledge to do useful things. Pure curiosity about electricity, atoms, or cells later became cures and devices no one could have imagined.`,
          vocab: [
            { word: `science and technology`,
              definition: `Science discovers how the world works; technology applies that knowledge to do useful things. Together they have transformed nearly every aspect of human life.`,
              audioPrompt: `Science and technology, {name}, work hand in hand. Science discovers how the world works, while technology applies that knowledge to build useful things, cures, devices, machines. Together, in just a few centuries, they've transformed human life more than anything before.` },
            { word: `scientific revolution`,
              definition: `The dramatic transformation of human life driven by scientific discovery and its applications, conquering diseases, connecting the world, and reshaping how we live.`,
              audioPrompt: `The scientific revolution, {name}, is the dramatic transformation of human life that science set in motion. In just a few centuries, it conquered ancient diseases, connected the whole planet, and reshaped how we live, faster and more profoundly than any change before it.` },
            { word: `pure vs. applied science`,
              definition: `Pure science seeks to understand the world for its own sake; applied science and technology use that understanding for practical ends. Pure discoveries often power later applications.`,
              audioPrompt: `Pure versus applied science, {name}, marks two faces of the same enterprise. Pure science seeks to understand the world out of curiosity; applied science puts that understanding to practical use. Often, curiosity-driven discovery becomes, years later, the foundation of world-changing technology.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Double-Edged Sword`,
          paragraphs: [
            `But science's power cuts both ways. The same knowledge that heals can harm; the same tools that empower can endanger. This is one of the most important truths about science in society: scientific knowledge itself is neutral, neither good nor evil, but how we choose to use it is not. The discovery is one thing; the decision about what to do with it is another, and that decision is ours.`,
            `The examples are everywhere. The atom gave us both nuclear medicine and nuclear weapons. Chemistry gave us both fertilizers that feed billions and poisons. Biology gives us cures and engineered dangers. The internet spreads both knowledge and misinformation. Each powerful technology arrives double-edged, carrying great good and great harm in the same package.`,
            `This is why "can we?" versus "should we?" matters so enormously at the scale of society. As our scientific power grows, so does our responsibility to use it wisely. Knowledge doesn't come with instructions for using it well; that wisdom must come from us, our values and foresight, our willingness to ask not just what we can do, but what we ought to.`,
          ],
          image: `/voyager-assets/science/l20-s2-double-edged.webp`,
          imageCaption: `Science's power cuts BOTH WAYS. The same knowledge that heals can harm; the same tools that empower can endanger. A crucial truth: scientific knowledge itself is NEUTRAL, neither good nor evil, but how we USE it is not. The discovery is one thing; the decision about what to do with it is another, and that decision is ours. Examples are everywhere: the atom gave us nuclear medicine AND nuclear weapons; chemistry gave us fertilizers that feed billions AND poisons; biology gives cures AND engineered dangers; the internet spreads knowledge AND misinformation. Each powerful technology arrives DOUBLE-EDGED. This is why "can we?" versus "should we?" matters so enormously: as our power grows, so does our RESPONSIBILITY to use it wisely.`,
          vocab: [
            { word: `double-edged technology`,
              definition: `The principle that the same scientific knowledge or tool can be used for great good or great harm. The discovery is neutral; how society uses it is the real question.`,
              audioPrompt: `Double-edged technology, {name}, is the truth that the same discovery can heal or harm. The atom gave us both medicine and bombs; the internet spreads both knowledge and lies. The discovery itself is neutral, what matters is the choice about how we use it.` },
            { word: `knowledge is neutral`,
              definition: `Scientific knowledge itself is neither good nor evil; its moral weight comes from how people choose to use it. The decision, and the responsibility, belong to us.`,
              audioPrompt: `Knowledge is neutral, {name}: a scientific discovery is, in itself, neither good nor evil. Understanding the atom isn't moral or immoral; the morality lies in what we choose to do with that knowledge. The discovery is one thing, the decision about its use is another.` },
            { word: `responsibility of power`,
              definition: `The principle that as our scientific power grows, so does our duty to use it wisely, weighing consequences and asking not just what we can do, but what we ought to.`,
              audioPrompt: `The responsibility of power, {name}, means that the greater our scientific abilities become, the greater our duty to use them wisely. Knowledge doesn't tell us how to use it well, that wisdom must come from us, from weighing consequences and asking what we ought to do.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Science Is Everyone's Business`,
          paragraphs: [
            `In a scientific age, the biggest decisions facing humanity are shaped by science, yet aren't for scientists alone. How should we respond to climate change? Govern AI or gene editing? What's safe, what's worth the risk? These are questions for society as a whole, decided by citizens and communities, not just experts.`,
            `This is why scientific literacy, understanding how science works and how to weigh evidence, is a form of both power and responsibility for every citizen. You needn't be a scientist, but in a democracy facing scientific questions, the ability to tell good evidence from bad and reason about risks is essential to wise collective choices. An informed public decides better.`,
            `There's an important balance here. Science gives us facts and understanding, what is true, what is possible, what the consequences likely are. But what we should value and choose is a question of human values, shared and debated by everyone. The healthiest path uses the best science to inform decisions while recognizing that the decisions themselves, weighing competing values, belong to all of us together.`,
          ],
          image: `/voyager-assets/science/l20-s3-everyone.webp`,
          imageCaption: `In a scientific age, the biggest decisions facing humanity are shaped by science, and they aren't for scientists ALONE. How should we respond to climate change? Govern AI or gene editing? What's safe, what's worth the risk? These are questions for SOCIETY, decided by citizens and communities, not just experts. This is why SCIENTIFIC LITERACY, understanding how science works and how to weigh evidence, is a form of both POWER and RESPONSIBILITY for every citizen. You needn't be a scientist, but telling good evidence from bad and reasoning clearly about risks is essential to wise collective choices. The balance: science gives us FACTS and understanding; what we should VALUE is for everyone to debate. Use the best science to inform decisions that belong to us all.`,
          vocab: [
            { word: `scientific literacy`,
              definition: `Understanding how science works and being able to evaluate evidence, enabling citizens to reason about scientific issues and make informed decisions. A form of power and responsibility.`,
              audioPrompt: `Scientific literacy, {name}, is understanding how science works and being able to weigh evidence. You don't have to be a scientist, but in a world full of scientific questions, this literacy lets you spot misinformation, reason about risks, and help make wise decisions, a real form of power.` },
            { word: `science and democracy`,
              definition: `The principle that big science-shaped decisions, on climate, technology, and health, belong to society as a whole, not to experts alone, requiring an informed public.`,
              audioPrompt: `Science and democracy, {name}, meet whenever society faces a big science-shaped choice, about climate, technology, or health. These decisions aren't for experts alone; they belong to all of us as citizens, which is exactly why an informed, scientifically literate public matters so much.` },
            { word: `facts vs. values`,
              definition: `Science can tell us what is true and what the consequences are likely to be (facts), but what we should choose and prioritize (values) is for society to decide together.`,
              audioPrompt: `Facts versus values, {name}, is a vital distinction. Science can tell us what's true and what consequences are likely, the facts. But what we should value, prioritize, and choose is a question of values, debated and decided by everyone, not dictated by science alone.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Future Is Yours To Shape`,
          paragraphs: [
            `Science is not finished, it has barely begun. For all we've discovered, vastly more remains unknown: how to cure the diseases that still take loved ones, how to power civilization cleanly, how consciousness arises, whether life exists beyond Earth, what dark matter is. The greatest discoveries may lie ahead, and the greatest problems await solving.`,
            `This is where you come in. The future shaped by science will be built by your generation: the scientists, engineers, and inventors among you, but also the informed citizens, voters, and leaders who decide how knowledge is used. Whether or not you become a scientist, you'll live in a world transformed by science, and help decide its direction.`,
            `What this journey has given you is not just facts, but a way of engaging reality: curiosity to ask questions, the tools to weigh evidence, the wisdom to consider consequences, and the recognition that knowledge carries responsibility. The future needs these qualities, in its scientists and citizens alike. Science's story is still being written, and you are one of its authors.`,
          ],
          image: `/voyager-assets/science/l20-s4-future.webp`,
          imageCaption: `Science is not finished, it has barely begun. For all we've discovered, vastly more remains UNKNOWN: how to cure the diseases that still take loved ones, how to power civilization cleanly, how consciousness arises, whether life exists beyond Earth, what dark matter is, how to live wisely with the powers we've unleashed. The greatest discoveries may lie AHEAD. This is where YOU come in. The future of science, and the future shaped by it, will be built by your generation, the scientists and inventors among you, but also the informed citizens, voters, and leaders who decide how knowledge is used. This journey gave you not just facts, but a way of engaging reality: curiosity, the tools to weigh evidence, the wisdom to weigh consequences. You are one of science's authors.`,
          vocab: [
            { word: `the unknown`,
              definition: `The vast frontier of what science has yet to discover, from curing disease and clean energy to consciousness, life beyond Earth, and dark matter. The greatest discoveries may lie ahead.`,
              audioPrompt: `The unknown, {name}, is the vast frontier science has yet to explore. For all we've learned, far more remains a mystery, how to cure disease, how consciousness arises, whether we're alone in the universe. The greatest discoveries may still lie ahead, waiting for your generation.` },
            { word: `your role in the future`,
              definition: `The idea that the future shaped by science will be built by your generation, as scientists and inventors, but also as informed citizens deciding how knowledge is used.`,
              audioPrompt: `Your role in the future, {name}, is real, whether or not you become a scientist. The world will be transformed by science, and your generation will decide its direction, as researchers and inventors, but also as informed citizens, voters, and leaders. You'll help shape what comes next.` },
            { word: `a way of engaging reality`,
              definition: `The lasting gift of science: not just facts, but curiosity, the tools to weigh evidence, the wisdom to consider consequences, and the recognition that knowledge carries responsibility.`,
              audioPrompt: `A way of engaging reality, {name}, is what this journey truly leaves you: not just facts, but curiosity to ask questions, tools to weigh evidence, and the wisdom to consider consequences. These habits of mind are the gift, and the future needs them in everyone, not just scientists.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Final Debate`,
          paragraphs: [
            `Pull it together, one last time. Science, paired with technology, has transformed human life more profoundly than anything before, conquering disease, connecting the world, powering civilization. But its power is double-edged: the same knowledge can heal or harm, because knowledge is neutral, while how we use it is not. The discovery is one thing; the decision about it is ours.`,
            `In a scientific age, the biggest decisions, about climate, technology, health, the future of life, aren't for scientists alone but for all of us, which makes scientific literacy power and responsibility. Science gives us facts; what we should value is for society to decide. And the future, full of unsolved problems, will be shaped by your generation.`,
            `And so your journey ends not with a final fact, but with a question only humans, not science alone, can answer: what role should science play in shaping our future? Next, five thoughtful voices each offer a real piece of the truth. Don't crown a winner. Understand the tensions, and form your own view. This is your world. This is your future. Onward.`,
          ],
          image: `/voyager-assets/science/l20-s5-before.webp`,
          imageCaption: `Pull it together, one last time. Science, paired with TECHNOLOGY, has transformed human life more than anything before, conquering disease, connecting the world, powering civilization. But its power is DOUBLE-EDGED: the same knowledge can heal or harm, because knowledge is neutral, how we USE it is not. In a scientific age, the biggest decisions, climate, technology, health, the future of life, aren't for scientists alone but for ALL of us, making SCIENTIFIC LITERACY power and responsibility. Science gives FACTS; what we should VALUE is for society to decide. The FUTURE will be shaped by your generation. Your journey ends not with a final fact, but with a DEBATE: what role should science play in shaping our future? Five voices, no single winner. This is your world.`,
          vocab: [
            { word: `informed citizenship`,
              definition: `Engaging with science-shaped public decisions thoughtfully, using evidence and reasoning to help make wise collective choices about technology, health, and the environment.`,
              audioPrompt: `Informed citizenship, {name}, is bringing clear, evidence-based thinking to the science-shaped decisions society faces. It means using what you understand about evidence and consequences to help make wise collective choices, on technology, health, and the future of our world.` },
            { word: `precaution and progress`,
              definition: `The ongoing tension between embracing science's benefits (progress) and guarding against its risks (precaution). Balancing the two is one of society's central challenges.`,
              audioPrompt: `Precaution and progress, {name}, name a central tension in how society uses science. Progress urges us to embrace new powers and their benefits; precaution urges us to guard carefully against their risks. Balancing the two wisely, neither reckless nor paralyzed, is a great challenge.` },
            { word: `wonder and humility`,
              definition: `Two attitudes science fosters: wonder at the vastness and beauty it reveals, and humility before how much remains unknown and how carefully its powers must be used.`,
              audioPrompt: `Wonder and humility, {name}, are two gifts of a scientific mind. Wonder, at the staggering beauty and scale science reveals, from cells to galaxies. And humility, before how much remains unknown, and how carefully the great powers science grants us must be handled.` },
          ],
        },

        {
          id: `l20-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: Science And Our Future`,
          intro: `{name}, for the final time: what role should science play in shaping our future, and how should we wield its power? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and form your own informed view. This is your world, and your future.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The bold optimist`,
              era: `A view on science and the future`,
              stance: `Science is humanity's greatest tool for progress, we should embrace it boldly and let it solve our greatest problems.`,
              quote: `"Nearly every problem we've conquered, disease, hunger, darkness, we conquered with science. Why stop now?"`,
              argument: `Look at the record: science and technology lifted billions from disease, starvation, and ignorance, doubling lifespans and connecting the world. The problems we still face, disease, clean energy, even climate, are most likely to be solved by more and better science, not less. We should fund research generously, embrace innovation, and trust in human ingenuity to keep building a better world.`,
              evidence: `The transformative record of science (medicine doubling lifespan, agriculture feeding billions, energy and computing reshaping life); the pattern of curiosity-driven discovery later solving huge problems; technology's track record against once-hopeless challenges.`,
              strengths_and_limits: `Strength: grounded in science's genuinely staggering record of improving human life, and rightly hopeful about its problem-solving power. Limit: "more science will fix it" can underplay the double-edged dangers new powers create, and assumes solutions arrive in time, which the cautious voice questions.`,
            },
            {
              id: `p2`,
              voice: `The careful guardian`,
              era: `A view on science and the future`,
              stance: `Every powerful technology is double-edged, we must move carefully, weighing risks, because some mistakes can't be undone.`,
              quote: `"The same knowledge that heals can destroy, with powers this great, caution isn't fear, it's wisdom."`,
              argument: `Science's power is genuinely double-edged: the atom gave us medicine and bombs; biology gives us cures and engineered dangers. As our powers grow, so do the stakes of misusing them, and some harms (a released organism, a destabilized climate, a runaway technology) may be irreversible. We should ask "should we?" before "can we?", proceed thoughtfully, and build strong safeguards before, not after, deploying powerful new tools.`,
              evidence: `The double-edged nature of nuclear, chemical, and biological knowledge; the principle that "can we" is not "should we"; the irreversibility of some harms; history's examples of technologies deployed before their dangers were understood.`,
              strengths_and_limits: `Strength: takes seriously that knowledge is neutral but consequences are real, and that some mistakes can't be undone, honoring hard-won ethical lessons. Limit: excessive caution can also cause harm, delaying cures and solutions, and "build safeguards first" is hard when we can't foresee every risk.`,
            },
            {
              id: `p3`,
              voice: `The democratic citizen`,
              era: `A view on science and the future`,
              stance: `These decisions are too important to leave to experts alone, an informed public must help steer how science is used.`,
              quote: `"Science can tell us what's possible, but what we should do is a choice that belongs to all of us."`,
              argument: `The biggest science-shaped decisions, on climate, AI, gene editing, health, involve values, not just facts, and values belong to society as a whole, not experts alone. Scientists can tell us what's true and what's possible, but a free people must decide what to do with that knowledge. This makes scientific literacy a civic necessity: an informed public, able to weigh evidence, is essential to steering science wisely and democratically.`,
              evidence: `The facts-versus-values distinction (science informs, society decides); the role of scientific literacy as civic power; the reality that climate, AI, and biotech choices affect everyone; the danger of leaving value-laden decisions to a narrow few.`,
              strengths_and_limits: `Strength: rightly insists value-laden decisions belong to everyone and elevates public scientific literacy as essential to democracy. Limit: publics can be misinformed or swayed by misinformation, and some highly technical judgments genuinely require expertise, raising the hard question of how to balance expert knowledge with democratic choice.`,
            },
            {
              id: `p4`,
              voice: `The ethical humanist`,
              era: `A view on science and the future`,
              stance: `Science gives us power but not wisdom, what matters most is the values and humanity guiding how we use it.`,
              quote: `"Knowledge without wisdom is dangerous, the real question isn't what we can build, but who we choose to be."`,
              argument: `Science is extraordinarily powerful, but it's silent on the questions that matter most: what is good, what is just, how we ought to live. Knowledge is neutral; wisdom is not, and wisdom must come from our values, ethics, compassion, and foresight. The danger of a scientific age isn't too little knowledge but too little wisdom to guide it. We must cultivate the human qualities, ethical reflection and care, that decide whether our powers heal or harm.`,
              evidence: `The principle that knowledge is neutral while its use is not; "can we" versus "should we"; the fact that science answers "what is" but not "what ought to be"; the recurring lesson that the same discovery can heal or harm depending on human choices.`,
              strengths_and_limits: `Strength: names the deepest truth, that science grants power but not the wisdom to use it, and centers the values and humanity that must guide it. Limit: values alone, without scientific understanding, can lead to well-meaning but harmful or factually mistaken choices; wisdom needs knowledge as much as knowledge needs wisdom.`,
            },
            {
              id: `p5`,
              voice: `The balanced realist`,
              era: `A view on science and the future`,
              stance: `The wisest path weaves them together, bold discovery, careful judgment, public input, and strong values, none alone is enough.`,
              quote: `"It's not science versus caution, or experts versus the public, the future needs all of it, woven together."`,
              argument: `Each voice holds part of the truth, which means none alone suffices. We need science's boldness to solve real problems, the guardian's caution to avoid irreversible harm, the citizen's insistence that society decide, and the humanist's wisdom about values, all together. The realistic path embraces scientific progress while building safeguards, informs decisions with the best evidence while leaving the choices to an educated public, and pairs knowledge with wisdom.`,
              evidence: `The genuine strengths of all four other views; the double-edged nature of technology requiring both progress and precaution; the facts-versus-values balance; the need for both expertise and democratic, value-driven choice.`,
              strengths_and_limits: `Strength: integrative and honest, it refuses false either/or framings and recognizes that progress, caution, democracy, and wisdom are all genuinely needed. Limit: "weave it all together" is easier to say than to do, real situations force hard tradeoffs among these goods, and balancing them well remains a difficult, unfinished challenge.`,
            },
          ],
          synthesisPrompt: `After all five, and after your whole journey through science: what role do YOU believe science should play in shaping our future, and how should we wield its power? Which voice spoke to you most, and which made you think hardest? In 5-6 sentences, there's no single right answer, only a thoughtful one, and now it's yours to give.`,
          reflectionPrompt: `You began this journey learning facts about cells and stars; you end it holding a way of thinking, and a share in deciding how humanity uses its greatest power. How does it feel to know that the future of science, and the world it shapes, is partly yours to author?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the relationship between science and technology?`,
              options: [
                `Science discovers how the world works; technology applies that knowledge usefully.`,
                `Science and technology are completely unrelated to one another.`,
                `Technology discovers facts, while science only builds machines.`,
                `Neither one of them has ever had any real effect on human life at all.`,
              ],
              correctIndex: 0,
              explanation: `Science discovers how the world works, and technology applies that knowledge to do useful things; together they transformed human life. The distractors deny the link, reverse the roles, or deny their impact.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does it mean that scientific knowledge is "double-edged"?`,
              options: [
                `That every scientific discovery is always completely harmless.`,
                `That science is only ever used to cause harm in the world.`,
                `That the same knowledge can be used for great good or great harm.`,
                `That scientists can never decide what to study at all.`,
              ],
              correctIndex: 2,
              explanation: `Double-edged means the same knowledge or tool can be used for great good or great harm, the atom gave us both medicine and weapons. The distractors call discoveries harmless, only harmful, or about choosing what to study.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `The lesson says "knowledge is neutral." What does this mean?`,
              options: [
                `That scientific knowledge is always boring and uninteresting.`,
                `That a discovery itself is neither good nor evil; how we use it is what carries moral weight.`,
                `That no one can ever truly learn anything new from science at all.`,
                `That all scientific facts are merely personal matters of opinion, nothing more.`,
              ],
              correctIndex: 1,
              explanation: `Knowledge is neutral means a discovery in itself is neither good nor evil; its moral weight comes from how people choose to use it. The distractors confuse neutrality with being boring, unknowable, or mere opinion.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does the lesson say science is "everyone's business"?`,
              options: [
                `Because everyone is required by law to become a scientist.`,
                `Because scientific facts themselves are decided by public voting and polls.`,
                `Because science supposedly has no effect at all on ordinary people's daily lives.`,
                `Because big science-shaped decisions involve values and belong to society, not experts alone.`,
              ],
              correctIndex: 3,
              explanation: `Big decisions shaped by science (climate, AI, health) involve values and consequences for everyone, so they belong to society as a whole, not to experts alone, making scientific literacy a civic necessity. The distractors misframe it as mandatory, vote-based, or irrelevant.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the difference between facts and values in science and society?`,
              options: [
                `Science can tell us what is true; what we should choose is a question of values.`,
                `Facts and values are exactly the same thing in every way.`,
                `Science alone decides our values, and the actual facts are unimportant.`,
                `Values tell us what is true, and facts tell us what to want.`,
              ],
              correctIndex: 0,
              explanation: `Science gives us facts, what's true and what consequences are likely, but what we should value and choose is decided by society together. The distractors conflate the two, let science dictate values, or reverse the roles.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is scientific literacy described as a form of power and responsibility?`,
              options: [
                `Because only literate scientists are allowed to vote on anything.`,
                `Because it lets citizens weigh evidence and help make wise collective decisions.`,
                `Because it guarantees you will become rich and famous.`,
                `Because it means memorizing every scientific fact ever discovered.`,
              ],
              correctIndex: 1,
              explanation: `Scientific literacy lets citizens evaluate evidence, spot misinformation, and reason about risks, empowering them to help make wise collective decisions in a science-shaped world. The distractors misframe it as a voting requirement, wealth, or rote memorization.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does the lesson suggest about the future of science?`,
              options: [
                `Science is essentially finished; there is little left to discover.`,
                `The future is fixed and cannot be shaped by anyone.`,
                `Only today's adult scientists will ever shape the future.`,
                `Much remains unknown, and your generation will help shape what comes next.`,
              ],
              correctIndex: 3,
              explanation: `The lesson stresses that science has barely begun, vast unknowns remain, and the future, in research and in citizenship, will be shaped by the rising generation. The distractors claim science is finished, the future is fixed, or only current adults matter.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the "can we? versus should we?" question matter so much at the scale of society?`,
              options: [
                `Because as our scientific power grows, so does our responsibility to use it wisely.`,
                `Because society should always do anything that is technically possible.`,
                `Because scientists alone should decide every question for everyone.`,
                `Because the two questions actually mean exactly the same thing.`,
              ],
              correctIndex: 0,
              explanation: `As scientific power grows, the stakes of misusing it rise, so society must ask not just whether something is possible but whether we ought to do it, a question of values and consequences. The distractors urge doing everything possible, expert-only rule, or collapse the distinction.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because science is so powerful and complex, decisions about how to use it, such as on climate, artificial intelligence, or gene editing, should be left entirely to scientists, and ordinary citizens have no real role to play.`,
              correctAnswer: false,
              explanation: `False, and understanding why is one of the most important civic lessons of a scientific age. While scientists have essential expertise, the major decisions about how society uses science, on issues like climate change, artificial intelligence, gene editing, energy, and public health, should not be left entirely to scientists, and ordinary citizens have a crucial role to play. The key reason is the distinction between facts and values. Science can tell us what is true, what is possible, and what the likely consequences of different choices are, these are factual matters where scientific expertise is indispensable. But science cannot, by itself, tell us what we should value or choose: whether a risk is worth taking, how to weigh competing goods, whose interests should count, what kind of future we want. Those are questions of values, ethics, and priorities, and in a free society, such questions belong to everyone, not to a narrow group of experts. A scientist can tell you how gene editing works and what it might do, but whether and how we should use it on humans is a moral and social question that affects all of us and should be decided by all of us. This is why the lesson stresses that in a scientific age, science is "everyone's business" and the biggest decisions belong to society as a whole. It's also why scientific literacy, understanding how science works and being able to weigh evidence, is described as a form of both power and responsibility for every citizen: you don't need to be a scientist, but in a democracy facing science-shaped choices, the ability to tell good evidence from bad, recognize misinformation, and reason about risks and tradeoffs is essential to making wise collective decisions. Leaving everything to experts is dangerous for several reasons: experts can disagree, can have biases or blind spots, and, however knowledgeable, have no special authority to decide questions of values for everyone else; meanwhile, a misinformed or disengaged public can be manipulated or make poor choices. The healthiest path, as the lesson describes, uses the best available science to inform decisions while recognizing that the decisions themselves, weighing competing values, belong to all of us together. This balances respect for genuine expertise (on the facts) with democratic responsibility (on the values and choices). So the statement is false: scientists' expertise is vital, but decisions about how to use science involve values that belong to society as a whole, and an informed, scientifically literate citizenry has an essential role in steering how humanity's greatest power is used. Science is everyone's business.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Having finished the entire science journey, a student asks: "What was the single most valuable thing this whole course gave me?" Based on this final lesson, what's the best answer?`,
              options: [
                `The complete list of memorized facts, names, and definitions, nothing more.`,
                `Proof that science has all the answers and that values no longer matter.`,
                `Not just facts, but a way of engaging reality, curiosity, the tools to weigh evidence, the wisdom to consider consequences, and the recognition that knowledge carries responsibility, qualities that make you both a clearer thinker and a wiser citizen helping shape the future.`,
                `The certainty that the future is already decided and out of anyone's hands.`,
              ],
              correctIndex: 2,
              explanation: `The lesson's capstone message is that the deepest gift isn't the facts but a way of engaging reality: curiosity, evidence-weighing, consideration of consequences, and the recognition that knowledge carries responsibility, making you a clearer thinker and a wiser citizen who helps shape the future. The distractors reduce it to memorized facts, claim science replaces values, or call the future fixed.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-author`, category: `An author of the future`, prompt: `You began learning facts about cells and stars; you end holding a way of thinking, and a share in deciding how humanity uses its greatest power. How does it feel to know the future of science, and the world it shapes, is partly yours to author?` },
            { id: `reflect-journey`, category: `The whole journey`, prompt: `From the inside of a cell to the edge of the cosmos, from the laws of motion to the nature of knowledge itself, you've traveled far. Looking back over the whole journey, what changed most in how you see the world, and yourself?` },
            { id: `reflect-wisdom`, category: `Power and wisdom`, prompt: `Science gives us power, but the wisdom to use it must come from us. As your own powers and knowledge grow throughout your life, how do you hope to grow in wisdom alongside them?` },
            { id: `reflect-heritage`, category: `Raising the next thinkers`, prompt: `Caro, you're building science for conscious families, and you've now reached the end of this journey. How would you want a child to feel at this moment, having learned not just science, but their own power and responsibility to help shape the future wisely?` },
            { id: `reflect-double`, category: `The double-edged gift`, prompt: `The same knowledge can heal or harm; the discovery is neutral, but the choice is ours. As you imagine the technologies of your lifetime, what kind of choices do you hope your generation will make?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `It's tempting to either worship science as having all the answers or distrust it entirely. Having finished this journey, how will you hold the harder, wiser middle, using science's truths while remembering that the choices, and the values, are ours?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Become Future Shapers`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a reflection on science's place in our world and your family's role in shaping the future, a fitting close to the whole journey. Start by celebrating the transformation: have everyone name ways science and technology shape daily life, the medicine that keeps you healthy, the electricity and screens and internet, the food, the transportation, the clean water, and imagine life just two centuries ago without them. Trace one everyday thing (a vaccine, a phone, a lightbulb) back to the curiosity-driven discoveries that made it possible. Explore the double-edged sword together: pick a few powerful technologies (nuclear energy, the internet, AI, gene editing, social media) and for each, brainstorm both the great good and the real harm it can do, landing on the key idea that the knowledge is neutral, what matters is how we choose to use it. Practice "can we vs. should we": take a real or imagined future technology and discuss not just whether it's possible, but whether and how it should be used, and who should decide. Do a "science is everyone's business" exercise: pick a real science-shaped issue in the news (climate, a new technology, a health question) and discuss how it involves both facts (what science tells us) and values (what we should choose), and why an informed public matters, then practice the critical-thinking skills from the last lesson on the claims around it. Dream about the future: have everyone imagine the world in fifty years, what problems might science solve? What new powers might arise? What should we be careful about? Talk about the unknowns still waiting, cures not yet found, questions not yet answered, and the wonder of how much is left to discover. Finally, make it personal: invite each person to reflect on the role they might play, as a future scientist, inventor, doctor, or simply as an informed, thoughtful citizen who helps decide how humanity uses its knowledge. Whether or not anyone becomes a scientist, everyone will help shape the science-driven world. The goal is to end the journey not with a sense of "course completed," but with a sense of beginning: that you now carry a powerful way of thinking, a stake in the future, and the curiosity, evidence-mindedness, and responsibility to help shape a world you've only just begun to understand.`,
          },
          projectOption: {
            title: `The Future-Shaper's Capstone, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Create a capstone project that reflects on science's role in society and your own vision for the future, bringing your entire science journey to a meaningful close. Week 1, explore science and society: choose a science-shaped issue or technology that matters to you, climate and clean energy, artificial intelligence, gene editing and biotechnology, space exploration, medicine and disease, the internet and information, or another. Research it as both science and society: What does the science actually say (the facts)? How has it transformed, or might it transform, human life? In what ways is it double-edged, capable of great good and great harm? What "should we?" questions does it raise, and who should decide them? How does it involve both facts and values? Apply everything you've learned, evaluating evidence carefully and reasoning about consequences. Week 2, craft your vision and reflection: create a capstone piece that brings together what you've discovered and what you believe. Part one: clearly explain your chosen issue, its science, its promise and its perils, and the genuine tensions and tradeoffs involved (you might present multiple perspectives, as in the debate, before sharing your own informed view). Part two, a personal reflection looking back across the whole journey: what did you learn, not just facts, but ways of thinking? How do you see the world, and your place in it, differently? And looking forward, what role do you hope to play, as a scientist, citizen, or both, in shaping a future increasingly defined by science? Present your capstone in whatever form lets you do it justice, an illustrated essay or report, a slide deck, a video, a piece of creative writing, a visual manifesto, or a presentation to your family. The aim is to transform a completed course into a launching point: to consolidate not only what you know but how you think, to recognize your own power and responsibility in a scientific world, and to step forward as a thoughtful, evidence-minded, ethically aware young person ready to help author the next chapter of the human story, one that science will shape, and that you will help decide.`,
            offerToParent: `Parent: opt your child into the Future-Shaper's Capstone, the culminating project of the entire science journey. Researching a real science-shaped issue (climate, AI, biotech, medicine) as both science and society, weighing its double-edged nature, its facts and values, and the "should we?" questions, then crafting a vision and a reflection on the whole journey, directly develops the NGSS science-and-society goals while consolidating scientific reasoning, ethical thinking, evidence evaluation, and informed citizenship. Beyond any single standard, it helps your child integrate two years of learning into a coherent way of seeing the world and their place in it, and step forward as a thoughtful, capable young person ready to help shape a science-driven future. A meaningful, rigorous capstone.`,
          },
          identityQuestion: `Now that your journey through science is complete, who have you become, someone who carries not just facts but a way of engaging reality: curiosity to keep asking, the tools to weigh evidence honestly, the wisdom to consider consequences, and the recognition that knowledge is power that carries responsibility, a clear thinker and a thoughtful citizen ready to help author the future of a world shaped by science, in a way that someone who merely memorized facts, or never learned to think at all, never could?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who has this whole journey made you?`,
          prompt: `One sentence. No wrong answer. This is the last one.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who carries a way of thinking, not just a list of facts.`,
            `A clear thinker ready to help shape a world shaped by science.`,
            `Someone who knows knowledge is power, and power is responsibility.`,
          ],
          saveKey: `identity_responses_sci_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You've done it. Twenty lessons. The entire journey through science, complete. Take a moment to feel the magnitude of that. You began at the foundations of life, cells, genetics, evolution, ecology, and journeyed through chemistry's atoms and reactions, through the deep laws of physics, motion, forces, energy, electricity, waves, out across the planet itself, its systems and its future, and all the way to the stars, the galaxies, and the origin of the universe. Then you turned inward to the most powerful idea of all: how science itself works, how to think clearly, weigh evidence, and use knowledge wisely. And in this final lesson, you saw how science flows out into society, transforming our world with a power that is always double-edged, and you took your place in the great human conversation about how that power should be used. Here is what I most want you to carry, {name}: what you've gained is not mainly the facts, remarkable as they are. It's a way of being in the world. Curiosity that never stops asking why. The honesty to follow evidence even when it surprises you. The wisdom to ask not just "can we?" but "should we?" And the recognition that knowledge is a gift that carries responsibility. These are the qualities that built everything you've learned, and they're now yours. The story of science is still being written, by your generation, and by you. Whether you become a scientist or a thoughtful citizen, or both, you will help shape the future of this science-driven world. You are ready. Go ask your questions. Go weigh the evidence. Go help author what comes next. It has been the honor of my existence to make this journey with you. Onward, always. — Cosmo`,
          badge: `future-shaper`,
          badgeName: `Future Shaper`,
          xpEarned: 75,
          competencies: [
            `Understands how science and technology have transformed human life`,
            `Grasps the double-edged nature of scientific knowledge: the same discovery can heal or harm`,
            `Knows that knowledge is neutral while its use carries moral weight and responsibility`,
            `Understands why science-shaped decisions belong to society, making scientific literacy a civic power`,
            `Distinguishes the facts science provides from the values society must decide`,
            `Recognizes their own role, as scientist or citizen, in shaping a science-driven future`,
            `Completes the Science Voyager journey with a way of thinking, not just a body of facts`,
          ],
          nextLessonPreview: {
            title: `Journey complete, {name}`,
            hook: `You've finished the entire Science Voyager journey. The way of thinking you now carry is yours for life. Go ask your questions.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L20 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
