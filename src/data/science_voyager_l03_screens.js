// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L03 — Biotechnology: CRISPR, GMOs, and Medical Applications
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-LS3, HS-ETS1 (Genetics, Engineering, Ethics)
// Interaction: PERSPECTIVES. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l03-v1";

const SCIENCE_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-03`,
      title: `Biotechnology: CRISPR, GMOs, and Medical Applications`,
      duration: 35,
      xpReward: 75,
      badge: `gene-editor`,
      badgeName: `Gene Editor`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, in the last lesson you learned to read the code of life. Now we reach something staggering: humanity has learned to write it. For nearly four billion years, the only thing that could change the DNA of living things was slow, blind evolution. In just the last few decades, we've developed tools to deliberately edit genes, to add, remove, or rewrite the instructions of life on purpose. This is biotechnology, and it's already transforming medicine, agriculture, and our sense of what's possible. The most revolutionary tool is called CRISPR, a precise pair of molecular scissors, adapted from a system bacteria use to fight viruses, that lets scientists cut DNA at an exact chosen spot and change it. With it, we can potentially correct the single-letter typos that cause genetic diseases, the very kind you saw in sickle cell. We've engineered crops to resist pests and survive drought (GMOs), and bacteria to manufacture medicines. But here's why this lesson is built differently, as a set of perspectives rather than a single answer: this power raises genuine, hard questions that science alone can't settle. Just because we can edit life, should we? Where are the lines? These are questions for all of us. Today you'll understand both the breathtaking science and the serious debate, and start forming your own thoughtful view. Onward.`,
          headline: `Biotechnology: CRISPR, GMOs, and Medical Applications`,
          subtitle: `The power to rewrite the code of life, and the questions it raises. Multiple Perspectives.`,
          visual: `/voyager-assets/science/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `From Reading To Writing Life`,
          paragraphs: [
            `For almost four billion years, the only force that could change the DNA of living things was evolution, slow, blind, and driven by chance mutations over countless generations. No organism could choose to edit its own genes or another's. The code was rewritten only by nature, only by accident, and only over vast stretches of time.`,
            `In just the last few decades, that changed completely. Humans developed biotechnology: tools to read, and then deliberately rewrite, the instructions of life. We can now add, remove, or alter specific genes on purpose. In a blink of geological time, one species, us, gained a power that no living thing had ever held before.`,
            `This is already reshaping the world. We engineer bacteria to make medicines, crops to resist pests and drought, and we're learning to correct the genetic typos that cause inherited disease. The science is breathtaking. But because writing the code of life is so powerful, it also raises hard questions science alone can't answer, which is why this lesson holds multiple perspectives.`,
          ],
          image: `/voyager-assets/science/l03-s1-writing.webp`,
          imageCaption: `For almost four billion years, the only force that could change the DNA of living things was EVOLUTION, slow, blind, driven by chance mutations over countless generations. No organism could choose to edit genes; the code was rewritten only by nature, by accident, over vast time. In just decades, that changed completely. Humans developed BIOTECHNOLOGY: tools to read and then deliberately REWRITE the instructions of life, adding, removing, or altering specific genes on purpose. In a blink of geological time, one species gained a power no living thing had ever held. It's reshaping the world: bacteria engineered to make medicines, crops to resist pests and drought, and the correction of disease-causing typos. The science is breathtaking, but it raises hard questions, which is why this lesson holds multiple perspectives.`,
          vocab: [
            { word: `biotechnology`,
              definition: `The use of tools to read and deliberately modify the genes of living things for purposes like medicine, agriculture, and research.`,
              audioPrompt: `Biotechnology, {name}, is the use of tools to read and deliberately modify the genes of living things, for medicine, agriculture, and research. It gives humans the power to rewrite the code of life on purpose.` },
            { word: `genetic engineering`,
              definition: `Deliberately changing an organism's DNA, adding, removing, or altering specific genes, rather than waiting for natural evolution.`,
              audioPrompt: `Genetic engineering, {name}, is deliberately changing an organism's DNA, adding, removing, or altering specific genes on purpose, instead of waiting for slow, blind evolution to do it by chance.` },
            { word: `mutation vs. editing`,
              definition: `A mutation is a random, natural change in DNA; gene editing is a deliberate, targeted change made by humans at a chosen spot.`,
              audioPrompt: `Mutation versus editing, {name}: a mutation is a random, natural change in DNA that just happens, while gene editing is a deliberate, targeted change humans make at a chosen spot. One is chance; the other is choice.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `CRISPR: Molecular Scissors`,
          paragraphs: [
            `The tool that made gene editing precise and affordable is called CRISPR. Remarkably, it wasn't invented from scratch, it was borrowed from bacteria, which use it as an immune system to recognize and chop up the DNA of invading viruses. Scientists realized this natural cut-and-target system could be redirected to edit any DNA they chose.`,
            `CRISPR works like a programmable pair of molecular scissors with a GPS. A guide molecule is designed to match a specific DNA sequence, the exact spot you want to change. The guide leads a cutting protein to that precise location, where it snips the DNA. The cell then repairs the cut, and scientists can use that repair to disable, correct, or insert a gene.`,
            `What makes CRISPR revolutionary is its precision, low cost, and ease compared to older methods. It put gene editing within reach of labs around the world. The dream is enormous: to fix the single-letter mutations behind diseases like sickle cell at their root, in a patient's own cells, rather than just treating symptoms. Early successes are already real.`,
          ],
          image: `/voyager-assets/science/l03-s2-crispr.webp`,
          imageCaption: `The tool that made gene editing precise and affordable is CRISPR. It wasn't invented from scratch, it was BORROWED from bacteria, which use it as an immune system to recognize and chop up invading virus DNA. Scientists redirected this natural cut-and-target system to edit any DNA they choose. CRISPR works like programmable molecular SCISSORS with a GPS: a guide molecule is designed to match a specific DNA sequence (the exact spot to change), leads a cutting protein there, and snips the DNA; the cell repairs the cut, and scientists use that repair to disable, correct, or insert a gene. CRISPR's revolution is its PRECISION, low cost, and ease. The dream: to fix the single-letter mutations behind diseases like sickle cell at their root. Early successes are already real.`,
          vocab: [
            { word: `CRISPR`,
              definition: `A precise, programmable gene-editing tool, adapted from a bacterial defense system, that cuts DNA at a chosen spot so it can be changed.`,
              audioPrompt: `CRISPR, {name}, is a precise, programmable gene-editing tool. It was adapted from a system bacteria use to fight viruses, and it lets scientists cut DNA at an exact chosen spot so a gene can be disabled, corrected, or inserted.` },
            { word: `guide molecule`,
              definition: `The part of CRISPR designed to match a target DNA sequence, leading the cutting protein to the precise spot to edit, like a GPS.`,
              audioPrompt: `The guide molecule, {name}, is the part of CRISPR that's designed to match a specific DNA sequence. Like a GPS, it leads the cutting protein to the exact spot in the genome that scientists want to edit.` },
            { word: `gene therapy`,
              definition: `Treating disease by correcting or replacing faulty genes in a patient's cells, aiming to fix the root cause rather than just the symptoms.`,
              audioPrompt: `Gene therapy, {name}, means treating disease by correcting or replacing faulty genes in a patient's own cells. Instead of just managing symptoms, it aims to fix the genetic root cause of an illness, like correcting a disease-causing mutation.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `GMOs And The Medical Revolution`,
          paragraphs: [
            `Biotechnology reaches far beyond the lab. Genetically modified organisms, GMOs, are living things whose DNA has been deliberately altered, most famously crops. Engineers have created plants that resist insect pests (reducing pesticide use), survive drought, ferment longer, or carry added nutrients, like "golden rice" engineered to make vitamin A to fight blindness in poor regions.`,
            `In medicine, the impact is already vast. As you saw, bacteria are programmed to mass-produce human insulin and other protein drugs. Vaccines, including newer types, are designed using genetic knowledge. And gene therapies are beginning to treat or even cure inherited diseases by fixing the faulty gene, offering hope to people with conditions that had none.`,
            `The promise is world-changing: crops that feed more people on a warming planet, medicines made cheaply at scale, and cures for diseases once thought permanent. These aren't science-fiction; many are here now. Yet every advance also carries risks and raises questions, about safety, ecology, fairness, and consent, that science alone cannot resolve.`,
          ],
          image: `/voyager-assets/science/l03-s3-gmo.webp`,
          imageCaption: `Biotechnology reaches far beyond the lab. GMOs (genetically modified organisms) are living things whose DNA was deliberately altered, most famously crops: plants engineered to resist insect pests (cutting pesticide use), survive drought, or carry added nutrients, like "golden rice" making vitamin A to fight blindness. In MEDICINE the impact is vast: bacteria programmed to mass-produce human insulin and protein drugs, vaccines designed with genetic knowledge, and GENE THERAPIES beginning to treat or cure inherited diseases by fixing the faulty gene. The promise is world-changing: crops feeding more people on a warming planet, cheap medicines at scale, cures once thought impossible. Many are here now. Yet each advance also carries risks and questions, about safety, ecology, fairness, and consent, that science alone can't resolve.`,
          vocab: [
            { word: `GMO`,
              definition: `A genetically modified organism, a living thing whose DNA has been deliberately altered by humans, such as pest-resistant or nutrient-enhanced crops.`,
              audioPrompt: `A GMO, {name}, is a genetically modified organism, a living thing whose DNA humans have deliberately altered. The most famous examples are crops engineered to resist pests, survive drought, or carry added nutrients like vitamin A.` },
            { word: `golden rice`,
              definition: `A rice engineered to produce vitamin A, designed to fight vitamin-A deficiency and childhood blindness in regions where rice is the main food.`,
              audioPrompt: `Golden rice, {name}, is rice engineered to produce vitamin A. It was designed to fight vitamin-A deficiency and childhood blindness in poorer regions where rice is the main food, a striking example of biotech aimed at helping people.` },
            { word: `protein drug`,
              definition: `A medicine that is a protein, like insulin, often manufactured by genetically engineered cells programmed to produce it in large amounts.`,
              audioPrompt: `A protein drug, {name}, is a medicine that's actually a protein, like insulin. Many are made by genetically engineered bacteria or other cells, programmed with the human gene to manufacture the protein in large, pure amounts.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Questions Science Can't Answer`,
          paragraphs: [
            `Here's the heart of why this lesson holds many views: science can tell us what we can do, but not what we should do. Whether to edit a human embryo, release an engineered species, or set limits on this power are questions of ethics and values, not just facts. The science is necessary, but it isn't sufficient to decide.`,
            `Some lines feel sharper than others. Most agree that using gene therapy to cure a child's deadly disease is good. But editing the genes of an embryo, changes that would pass to all future generations, is far more contested. So is the idea of "enhancement," choosing traits like height or intelligence, which many fear could deepen inequality or treat children as products.`,
            `There are also questions of safety (unintended edits, ecological effects), of fairness (will cures reach everyone or only the wealthy?), and of consent (future generations can't agree to edits made for them). Reasonable, informed people disagree. That's not a failure of science, it's a sign these are decisions for all of society, including you, to weigh.`,
          ],
          image: `/voyager-assets/science/l03-s4-questions.webp`,
          imageCaption: `The heart of why this lesson holds many views: science can tell us what we CAN do, but not what we SHOULD do. Whether to edit a human embryo, release an engineered species, or limit this power are questions of ETHICS and VALUES, not just facts. Some lines feel sharper: most agree curing a child's deadly disease with gene therapy is good. But editing an EMBRYO, changes passed to all future generations, is far more contested, as is "ENHANCEMENT," choosing traits like height or intelligence, which many fear deepens inequality. There are questions of SAFETY (unintended edits, ecological effects), FAIRNESS (will cures reach everyone or only the wealthy?), and CONSENT (future generations can't agree). Reasonable people disagree, a sign these are decisions for all of society, including you.`,
          vocab: [
            { word: `is vs. ought`,
              definition: `The key distinction: science establishes what is true and what is possible (the "is"), but values and ethics decide what we ought to do.`,
              audioPrompt: `Is versus ought, {name}, is a key distinction: science can tell us what is true and what's possible, but it can't tell us what we ought to do. Deciding whether we should use a power is a question of values and ethics.` },
            { word: `germline editing`,
              definition: `Editing the genes of an embryo or reproductive cells, so the changes pass to all future generations. It is far more contested than treating one patient.`,
              audioPrompt: `Germline editing, {name}, means editing the genes of an embryo or reproductive cells, so the changes pass down to all future generations. Because it's permanent and inherited, it's far more contested than editing one patient's own body.` },
            { word: `enhancement`,
              definition: `Using gene editing to add desired traits (like height or intelligence) rather than to treat disease. Many worry it could deepen inequality.`,
              audioPrompt: `Enhancement, {name}, means using gene editing to add desired traits, like height or intelligence, rather than to treat disease. Many people worry that it could deepen inequality or treat children as products to be designed.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Perspectives`,
          paragraphs: [
            `Pull it together. For billions of years only evolution could rewrite DNA; now humans can, deliberately, through biotechnology. CRISPR, borrowed from bacteria, acts as precise molecular scissors that can cut DNA at a chosen spot to disable, correct, or insert a gene, putting gene editing within reach of labs everywhere.`,
            `This is already transforming the world: GMO crops that resist pests and add nutrients, bacteria that mass-produce medicines like insulin, and gene therapies beginning to cure inherited disease at its root. The promise is immense. But the same power raises hard questions, about safety, ecology, fairness, consent, and especially editing embryos or enhancing traits, that science can describe but cannot decide.`,
            `Now the perspectives screen brings five voices to the great biotech debate: a hopeful healer, a cautious ecologist, a justice advocate, a limits voice, and a pragmatic scientist. None is simply right or wrong; each holds a real piece of the truth. Your job isn't to crown a winner, but to understand the tensions and begin forming your own view. Onward.`,
          ],
          image: `/voyager-assets/science/l03-s5-before.webp`,
          imageCaption: `Threads together. For billions of years only evolution could rewrite DNA; now humans can, deliberately, through BIOTECHNOLOGY. CRISPR, borrowed from bacteria, is precise molecular scissors that cut DNA at a chosen spot to disable, correct, or insert a gene, putting editing within reach everywhere. It's transforming the world: GMO crops, bacteria mass-producing medicines like insulin, and GENE THERAPIES curing inherited disease at its root. The promise is immense, but the same power raises hard questions, safety, ecology, fairness, consent, embryos, enhancement, that science can describe but not decide. The perspectives screen brings five voices: a hopeful healer, a cautious ecologist, a justice advocate, a limits voice, and a pragmatic scientist. Understand the tensions; form your own view.`,
          vocab: [
            { word: `precautionary principle`,
              definition: `The idea that when an action could cause serious or irreversible harm, we should be cautious and go slowly, even without full proof of danger.`,
              audioPrompt: `The precautionary principle, {name}, is the idea that when an action could cause serious or irreversible harm, we should be cautious and move slowly, even before we have full proof of the danger. Better safe than sorry, on big risks.` },
            { word: `equity`,
              definition: `Fairness in who benefits. A key biotech question is whether powerful cures and crops will reach everyone or only the wealthy.`,
              audioPrompt: `Equity, {name}, means fairness in who benefits. A central biotech question is whether expensive new cures and engineered crops will reach everyone who needs them, or only the wealthy, possibly widening the gap between rich and poor.` },
            { word: `informed debate`,
              definition: `Weighing a hard issue using both solid science and clear values, so people can disagree thoughtfully rather than from fear or hype.`,
              audioPrompt: `Informed debate, {name}, means weighing a hard issue using both solid science and clear values, so people can disagree thoughtfully instead of out of fear or hype. Biotechnology needs exactly this kind of careful, honest discussion.` },
          ],
        },

        {
          id: `l03-perspectives`,
          type: `perspectives`,
          headline: `The Great Biotech Debate`,
          intro: `{name}, should we rewrite the code of life, and where are the lines? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The hopeful healer`,
              era: `A view on biotech`,
              stance: `We have the power to end immense suffering, refusing to use it would itself be a moral failure.`,
              quote: `"If we can cure a child's fatal disease at its root, how could we choose not to?"`,
              argument: `Genetic diseases cause unbearable suffering, and biotechnology offers real cures, not just symptom management, by fixing the faulty gene itself. Gene therapy is already helping patients who had no other hope. To hold back this power out of vague fear, while children die of treatable conditions, is not caution; it's a failure to act. The clearest duty is to heal.`,
              evidence: `Real gene therapies beginning to cure inherited diseases; bacteria mass-producing life-saving insulin; CRISPR's promise to correct mutations like sickle cell at their source.`,
              strengths_and_limits: `Strength: centers real, present suffering and the genuine power to relieve it, the most direct moral case. Limit: "we can, so we must" can rush past real risks (unintended edits, long-term effects) and blur the line between curing disease and riskier uses like enhancement or embryo editing.`,
            },
            {
              id: `p2`,
              voice: `The cautious ecologist`,
              era: `A view on biotech`,
              stance: `Living systems are complex and connected, releasing engineered organisms could have effects we can't take back.`,
              quote: `"In nature, you can never do just one thing, every change ripples outward."`,
              argument: `Ecosystems are webs of relationships refined over millions of years. When we release engineered organisms, GMO crops, gene drives, modified species, we can't fully predict the ripple effects on other species, soils, and food webs. Unlike a lab experiment, an organism released into the wild can't be recalled. The precautionary principle should rule: with irreversible risks, go slow.`,
              evidence: `The interconnectedness of ecosystems (you saw energy and matter flow through food webs); concerns about engineered traits spreading to wild relatives; the irreversibility of releasing self-reproducing organisms.`,
              strengths_and_limits: `Strength: rightly respects ecological complexity and the special danger of irreversible, self-spreading changes. Limit: applied too rigidly, pure caution can block clearly beneficial advances (like nutrient-enriched crops fighting blindness) and ignores that doing nothing also carries real costs and risks.`,
            },
            {
              id: `p3`,
              voice: `The justice advocate`,
              era: `A view on biotech`,
              stance: `The deepest danger isn't the technology, it's who gets it. Biotech could heal the world or deepen its divides.`,
              quote: `"A cure only the rich can afford isn't a triumph, it's a new kind of inequality."`,
              argument: `Powerful as biotech is, the real question is equity: who benefits? If cures and enhancements go only to the wealthy, we could create a world where the rich are not just richer but biologically advantaged, healthier, even "enhanced," while the poor are left further behind. The goal must be that these tools serve everyone, like golden rice aimed at the world's poorest, not just those who can pay.`,
              evidence: `The high cost of new gene therapies; golden rice as biotech aimed at the poor; fears that enhancement could let the wealthy buy genetic advantages and widen inequality.`,
              strengths_and_limits: `Strength: spotlights the crucial, often-ignored question of fairness and the risk of biologically entrenched inequality. Limit: focusing on distribution doesn't by itself resolve whether certain uses (like embryo enhancement) should happen at all, even a perfectly fair version of some applications might still be unwise.`,
            },
            {
              id: `p4`,
              voice: `The limits-and-humility voice`,
              era: `A view on biotech`,
              stance: `Some lines shouldn't be crossed, especially editing future generations who can't consent.`,
              quote: `"To rewrite a child's genes forever is to make a permanent choice for someone who can never agree."`,
              argument: `There's a profound difference between treating a consenting patient and editing an embryo, which changes every future descendant who never agreed to it. Germline editing and enhancement risk treating human beings as products to be designed and could erode something essential about human dignity and diversity. Some powers, however dazzling, call for firm limits and deep humility, not just careful use.`,
              evidence: `The consent problem (future generations can't agree to germline edits); the contested ethics of embryo editing; worries that enhancement treats children as designed products and threatens diversity.`,
              strengths_and_limits: `Strength: names real, distinct concerns, consent, permanence, dignity, that the "just heal" view can gloss over, and rightly separates treatment from enhancement. Limit: "some lines shouldn't be crossed" can be hard to define and may, if drawn too broadly, also block deeply beneficial cures that happen to be heritable.`,
            },
            {
              id: `p5`,
              voice: `The pragmatic scientist`,
              era: `A view on biotech`,
              stance: `Neither hype nor fear, the answer is careful regulation, transparency, and going case by case.`,
              quote: `"The question isn't whether biotech is good or evil. It's which uses, with what safeguards."`,
              argument: `Treating biotech as simply good or simply dangerous is a mistake; it's a powerful tool whose value depends entirely on how it's used. The sane path is neither reckless rush nor blanket ban, but thoughtful, evidence-based regulation: rigorous safety testing, transparency, public input, and judging each application on its own merits, curing disease and enhancing embryos are not the same case and shouldn't be treated the same.`,
              evidence: `The wide range of biotech uses, from insulin and golden rice to contested embryo editing; the role of safety testing and oversight; the difference between treatment and enhancement.`,
              strengths_and_limits: `Strength: realistic and balanced, it avoids both hype and panic and rightly insists each use be judged on evidence and safeguards. Limit: "good regulation" assumes we can agree on the values behind the rules and that oversight will actually work globally, which is exactly what the other voices are arguing about.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land on rewriting the code of life? Which uses feel clearly good to you, which feel like they need firm limits, and why? Which voice spoke to you most, and which made you rethink something? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `Science gave us a power, but not the wisdom for how to use it, that's up to all of us. How does it feel to know that questions this big, about the future of life itself, aren't settled by experts alone, but are partly yours to help decide?`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `For most of life's history, what was the only thing that could change the DNA of living things?`,
              options: [
                `Deliberate editing by ancient humans using simple tools.`,
                `Evolution, through slow, random mutations over many generations.`,
                `Nothing, DNA never changed at all until modern times.`,
                `Daily choices made consciously by each individual organism.`,
              ],
              correctIndex: 1,
              explanation: `For nearly four billion years, only evolution, via slow, blind, random mutation over generations, could change DNA; deliberate editing is brand new. The distractors invent ancient editing, deny any change, or claim organisms chose their genes.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is CRISPR, and where did it originally come from?`,
              options: [
                `A precise gene-editing tool, adapted from a system bacteria use against viruses.`,
                `A type of GMO crop engineered to resist drought.`,
                `A protein drug that is manufactured specifically to treat people who have diabetes.`,
                `A microscope powerful enough to see individual genes.`,
              ],
              correctIndex: 0,
              explanation: `CRISPR is a precise, programmable gene-editing tool that scientists adapted from a bacterial defense system used to chop up invading virus DNA. The distractors confuse it with a crop, a drug, or a microscope.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `How does CRISPR achieve its precision?`,
              options: [
                `It randomly cuts DNA and hopes to hit the right spot.`,
                `It edits every gene in the cell at the same time.`,
                `A guide molecule matches a target sequence and leads the cutter to the exact spot.`,
                `It dissolves the entire DNA molecule and rebuilds it from scratch.`,
              ],
              correctIndex: 2,
              explanation: `CRISPR uses a guide molecule designed to match a specific DNA sequence, leading the cutting protein to the exact chosen spot, like scissors with a GPS. The distractors describe random cutting, editing everything, or dissolving the DNA.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a GMO?`,
              options: [
                `A naturally occurring organism that has never been altered.`,
                `A genetically modified organism whose DNA humans deliberately changed.`,
                `A medicine made entirely without any living cells.`,
                `A microscope used to study modified genes.`,
              ],
              correctIndex: 1,
              explanation: `A GMO is a genetically modified organism, a living thing whose DNA humans have deliberately altered, like pest-resistant or nutrient-enhanced crops. The distractors describe an unaltered organism, a non-living medicine, or a device.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is "golden rice" an important example of biotechnology?`,
              options: [
                `It was engineered to make vitamin A to fight blindness in poor regions.`,
                `It is rice that has been painted gold for decoration.`,
                `It is a rice that grows without needing any sunlight.`,
                `It is the only crop that has never been genetically modified.`,
              ],
              correctIndex: 0,
              explanation: `Golden rice was engineered to produce vitamin A, aiming to fight vitamin-A deficiency and childhood blindness where rice is the staple food, biotech aimed at helping the poor. The distractors misread "golden," invent sunless growth, or contradict the term.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `The lesson says science alone cannot answer certain biotech questions. Why not?`,
              options: [
                `Because scientists simply haven't done enough experiments yet.`,
                `Because the questions are about values and ethics (what we should do), not just facts.`,
                `Because the science involved is far too easy and simple for anyone to bother studying it.`,
                `Because only governments are allowed to think about science.`,
              ],
              correctIndex: 1,
              explanation: `Science establishes what is true and possible (the "is"), but whether we should do something is a question of values and ethics (the "ought") that facts alone can't settle. The distractors blame insufficient experiments, ease, or government rules.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is editing the genes of an embryo (germline editing) more contested than treating one patient?`,
              options: [
                `Because embryos are easier to edit than adult patients.`,
                `Because it is cheaper and therefore must be suspicious.`,
                `Because the changes are inherited by all future generations, who cannot consent.`,
                `Because embryos do not actually contain any DNA or genes of their own at all.`,
              ],
              correctIndex: 2,
              explanation: `Germline editing changes the genes of all future descendants, who can never consent to it, making it permanent and far more contested than treating one consenting patient. The distractors cite ease, cost, or falsely claim embryos lack DNA.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `The justice advocate's main concern about biotechnology is about what?`,
              options: [
                `Whether the equipment looks impressive in the lab.`,
                `Equity, whether cures reach everyone or only the wealthy, possibly deepening inequality.`,
                `Whether scientists are paid enough for their work.`,
                `Whether biotechnology is being taught in a sufficient number of schools today.`,
              ],
              correctIndex: 1,
              explanation: `The justice advocate focuses on equity: if cures and enhancements reach only the wealthy, biotech could deepen inequality and even create biologically advantaged classes. The distractors cite appearances, pay, or schooling.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because biotechnology like CRISPR is scientifically possible and powerful, science itself can tell us exactly which uses are right and which are wrong, so there's no real need for public debate.`,
              correctAnswer: false,
              explanation: `False, and understanding why is one of the most important ideas in this entire lesson. Science is extraordinarily good at answering a certain kind of question: what is true, and what is possible. It can tell us how CRISPR cuts DNA, whether a particular edit works, what a GMO crop does in a field, and what the measurable risks of a procedure are. This is the realm of "is." But there is a completely different kind of question that science, by itself, cannot answer: the question of what we should do, the realm of "ought." Whether we should edit a human embryo, whether enhancement is acceptable, where to draw lines, how to balance curing disease against ecological risk or fairness, these are questions of ethics and values, not just facts. Knowing that something is possible tells you nothing about whether it's wise or right. For example, science can confirm that we could edit embryos to select for height, but whether we should, given concerns about consent, inequality, dignity, and diversity, is a value judgment that data alone cannot settle. This is precisely why reasonable, well-informed people genuinely disagree about biotechnology, and why that disagreement is not a failure of science but a sign that these decisions belong to all of society. The science is necessary, you can't make a wise choice without understanding the facts, but it is not sufficient. Good decisions require combining solid science with careful ethical reflection and broad, informed public debate. That's exactly why this lesson presents multiple perspectives instead of one "scientific" answer: the science is settled in places, but the values questions are genuinely open, and they're partly yours to help decide.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Two proposals are debated: (A) use gene therapy to cure a specific deadly inherited disease in consenting patients, and (B) edit embryos to make future children taller and "smarter." Using the lesson, why might a thoughtful person support A but be far more cautious about B?`,
              options: [
                `They're identical cases, so anyone supporting A must support B equally.`,
                `A treats a real disease in people who consent, while B is heritable enhancement raising serious concerns about consent, fairness, and treating children as designed products, so the lesson stresses judging each use on its own merits, not lumping them together.`,
                `B is clearly better because taller, smarter people are more valuable.`,
                `Neither should ever be allowed, since all biotechnology is equally dangerous.`,
              ],
              correctIndex: 1,
              explanation: `The lesson stresses judging biotech uses case by case rather than as simply "good" or "bad." A is treatment of a deadly disease in consenting patients, widely supported. B is heritable enhancement, raising the very concerns the lesson highlights: consent (future generations can't agree), fairness (deepening inequality), and treating children as designed products. The distractors equate the two cases, endorse enhancement uncritically, or reject all biotech.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-power`, category: `A new power`, prompt: `For four billion years only evolution could rewrite DNA; now we can. How does it feel to be alive at the moment one species gained the power to edit the code of life itself? What responsibility comes with that?` },
            { id: `reflect-line`, category: `Where's your line`, prompt: `Curing a deadly disease feels clearly good; designing a "better" baby feels different to many people. Where would you personally draw the line, and what's the real principle behind where you'd draw it?` },
            { id: `reflect-isought`, category: `Can vs. should`, prompt: `Science tells us what we can do; it can't tell us what we should. Where else in life do you see this gap between "possible" and "right"? Why is it so important to keep the two questions separate?` },
            { id: `reflect-heritage`, category: `Conscious science`, prompt: `Caro, you're building science learning for conscious families. How would you teach a child both the wonder of biotech AND the wisdom to ask hard ethical questions about it, so they grow up neither fearful nor reckless?` },
            { id: `reflect-fairness`, category: `Who benefits`, prompt: `The same cure could heal the world or only the wealthy. When a powerful new technology arrives, why does the question "who gets it?" matter as much as "does it work?" What would fairness actually look like here?` },
            { id: `reflect-critical`, category: `The hardest case`, prompt: `Steelman the view you disagree with most, whether that's "we should freely edit embryos to reduce suffering" or "we should ban heritable editing entirely." Make its strongest case honestly. What does taking it seriously reveal?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Biotech is shaping your world right now, in your food, your medicine, your future. These help you engage it thoughtfully. Two paths.`,
          familyActivity: {
            title: `The Family Biotech Forum`,
            duration: `One evening`,
            description: `Hold a real family discussion about the biotechnology already shaping your lives, practicing thoughtful debate over a genuinely hard topic. Start with what's already here: look together at examples in your own life, GMO foods in the kitchen (check labels), medicines made by engineered cells (like insulin), or news stories about gene therapy and CRISPR. Make the science concrete and accurate first: briefly recap how CRISPR works (programmable molecular scissors), what a GMO is, and how gene therapy fixes a faulty gene. Then hold a structured discussion on one or two real questions, for example: "Should we use gene editing to cure inherited diseases?" and "Should parents be able to choose traits like height for their children?" Here's the key rule that makes it powerful: each person must first argue the side they DON'T agree with, as strongly and fairly as they can, before giving their own view. This builds the habit of understanding before judging. As you talk, keep separating the two kinds of questions: "What does the science actually say?" (facts) versus "What should we do about it?" (values), and notice how the facts inform but never fully settle the values question. There are no required conclusions; the goal is for everyone to practice reasoning carefully about a real, hard issue, to see why thoughtful people disagree, and to discover that questions about the future of life aren't just for experts, they belong to informed citizens, including kids. End by having each person share where they currently land, and one thing that made them think.`,
          },
          projectOption: {
            title: `The Biotech Briefing, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Research a real biotechnology issue and produce a balanced briefing, the kind that helps people think clearly rather than just react. Week 1, get the science right: choose one real, current biotech topic, CRISPR gene therapy for a specific disease, GMO crops, gene drives to fight malaria-carrying mosquitoes, embryo editing, or de-extinction, and research how it actually works at the level you've learned (genes, editing, expression). Explain the real science accurately and clearly, including what it can and can't currently do, and the genuine risks and benefits, sticking to credible sources. Week 2, map the debate fairly: identify the main perspectives people hold on your issue (echoing the voices you met: the hopeful healer, cautious ecologist, justice advocate, limits voice, pragmatic regulator). Present the strongest version of each view, the real ethical and practical arguments, without strawmanning any side. Crucially, keep clearly separating the "is" (what the science shows) from the "ought" (the value judgments in play). Then produce your briefing: a clear, balanced explainer, a slideshow, a short documentary-style video, or a written brief, that first teaches the real science, then fairly lays out the debate, and finally offers your own reasoned position with honest acknowledgment of its trade-offs. The aim isn't to "win" but to model exactly the kind of informed, fair-minded reasoning these issues demand. You'll come away genuinely understanding a frontier technology and, just as importantly, knowing how to think and talk about hard science-and-society questions with both rigor and humility.`,
            offerToParent: `Parent: opt your child into the Biotech Briefing project. Researching a real biotechnology accurately, mapping the genuine ethical debate fairly, and clearly separating scientific facts from value judgments develops the NGSS connections between science, engineering, and society, plus rare and vital skills: evaluating evidence, steelmanning opposing views, and reasoning about ethics with rigor. As biotech reshapes medicine and food, the ability to understand it and think clearly about its hard questions is genuinely essential. It's demanding, deeply relevant, standards-aligned work that builds both real scientific literacy and thoughtful, fair-minded citizenship.`,
          },
          identityQuestion: `If you become someone who can understand a powerful technology AND reason carefully about whether and how it should be used, who separates "can" from "should" and weighs hard questions fairly, what kind of person does that make you, a thoughtful shaper of the future, that someone who only fears new technology, or only cheers it, can never quite become?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands biotech AND asks whether we should use it.`,
            `A thinker who separates what's possible from what's right.`,
            `Someone who can weigh hard science-and-ethics questions fairly.`,
          ],
          saveKey: `identity_responses_sci_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. Three down, and you've grappled with one of the most powerful and important frontiers in all of science. You learned that for nearly four billion years only blind evolution could change DNA, and that in just decades, humanity gained the power to deliberately rewrite the code of life through biotechnology. You learned how CRISPR, borrowed from a system bacteria use against viruses, acts as precise molecular scissors that can cut DNA at a chosen spot to disable, correct, or insert a gene. You saw the breathtaking promise: GMO crops that resist pests and add nutrients like vitamin A, bacteria that mass-produce medicines, and gene therapies beginning to cure inherited disease at its root. And, crucially, you learned the idea that separates a wise thinker from a naive one: science can tell us what we can do, but only values and ethics can tell us what we should, which is why questions about embryos, enhancement, safety, and fairness call for all of us, including you. You weighed five real perspectives and began forming your own informed view, exactly the kind of thinking the future needs. Next, we explore the great unifying theory of all biology: evolution, the evidence for it, and the mechanisms that drive it. Onward, {name}. — Cosmo`,
          badge: `gene-editor`,
          badgeName: `Gene Editor`,
          xpEarned: 75,
          competencies: [
            `Understands biotechnology as the deliberate, human-directed rewriting of DNA, versus natural evolution`,
            `Knows how CRISPR works as a precise, programmable gene-editing tool adapted from bacteria`,
            `Recognizes major applications: GMO crops, protein drugs like insulin, and gene therapy`,
            `Grasps the crucial "is vs. ought" distinction: science shows what's possible, not what's right`,
            `Identifies key ethical issues: germline editing, enhancement, safety, equity, and consent`,
            `Weighs multiple thoughtful perspectives on a complex science-and-society issue`,
            `Practices forming an informed, fair-minded view that combines scientific facts with values`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Evolutionary Theory — Evidence and Mechanisms`,
            hook: `The single idea that ties all of biology together, and the evidence behind it. A Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const persp = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L03 ${VERSION}] "${l.title}" mags=${mags} perspectives=${persp} q=${quiz}`);
}
