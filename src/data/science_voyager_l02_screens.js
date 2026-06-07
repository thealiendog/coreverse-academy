// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L02 — Molecular Genetics: Gene Expression and Protein Synthesis
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-LS1, HS-LS3 (Structure/Function, Inheritance)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l02-v1";

const SCIENCE_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-02`,
      title: `Molecular Genetics: Gene Expression and Protein Synthesis`,
      duration: 35,
      xpReward: 75,
      badge: `code-reader`,
      badgeName: `Code Reader`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, inside almost every one of your cells is a molecule about two meters long, coiled so tightly it fits in a space far smaller than a speck of dust. That molecule is DNA, and written along it is the complete instruction set for building and running you. Today you learn how that code gets read — how DNA becomes protein, and how protein becomes everything your cells actually do. This is one of the deepest ideas in all of biology.`,
          headline: `Molecular Genetics: Gene Expression and Protein Synthesis`,
          subtitle: `How the code in your DNA becomes the proteins that build you. A Case Study.`,
          visual: `/voyager-assets/science/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Code Of Life`,
          paragraphs: [
            `Inside nearly every cell is DNA, a molecule that holds the complete instructions for building and running a living thing. DNA is famous for its shape, the double helix, a twisted ladder. Its information is written in a four-letter chemical alphabet: the bases A, T, C, and G. The exact order of these letters, your sequence, is the code.`,
            `The two strands of the ladder pair in a strict, beautiful way: A always bonds with T, and C always bonds with G. This base pairing is the heart of how DNA works. Because the pairing is fixed, one strand is a perfect template for the other, which is how DNA can be copied so faithfully when cells divide.`,
            `A gene is a specific stretch of this code that carries the instructions for one particular product, usually a protein. Your DNA holds tens of thousands of genes. But the DNA itself doesn't do the work of the body; it's more like a master cookbook locked in a library. The next question is how a single recipe gets read and used.`,
          ],
          image: `/voyager-assets/science/l02-s1-code.webp`,
          imageCaption: `Inside nearly every cell is DNA, holding the complete instructions for building and running a living thing. Its famous shape is the DOUBLE HELIX, a twisted ladder, and its information is written in a four-letter alphabet: the bases A, T, C, and G. The order of these letters is the code. The two strands pair in a strict way: A always bonds with T, and C always with G. This BASE PAIRING is the heart of how DNA works, because the pairing is fixed, each strand is a perfect template for the other, which lets DNA be copied faithfully when cells divide. A GENE is a stretch of code carrying instructions for one product, usually a protein. Your DNA holds tens of thousands of genes, but it's like a master cookbook locked in a library. The question is how a recipe gets read.`,
          vocab: [
            { word: `DNA`,
              definition: `Deoxyribonucleic acid, the double-helix molecule that stores genetic instructions in a four-letter code (A, T, C, G) in nearly every cell.`,
              audioPrompt: `DNA, {name}, stands for deoxyribonucleic acid. It's the double-helix molecule that stores the complete genetic instructions for a living thing, written in a four-letter chemical code of A, T, C, and G.` },
            { word: `base pairing`,
              definition: `The strict rule that A bonds with T and C bonds with G. It lets one DNA strand serve as a template to copy the other faithfully.`,
              audioPrompt: `Base pairing, {name}, is the strict rule that the base A always bonds with T, and C always bonds with G. Because the pairing is fixed, each strand of DNA is a perfect template for copying the other.` },
            { word: `gene`,
              definition: `A specific stretch of DNA that carries the instructions for one product, usually a particular protein. Your DNA holds tens of thousands of genes.`,
              audioPrompt: `A gene, {name}, is a specific stretch of DNA that carries the instructions for one product, usually a particular protein. Your genome holds tens of thousands of genes, each a recipe for something your body needs.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Proteins Run The Show`,
          paragraphs: [
            `Here's the key that unlocks everything: DNA does not build your body directly. Instead, it holds the recipes for proteins, and proteins are the molecules that actually do almost all the work of life. If DNA is the blueprint, proteins are the construction crew, the machines, and much of the building material all at once.`,
            `Proteins are astonishingly versatile. Some are enzymes that speed up chemical reactions (like digesting food). Some are structural, like the collagen in your skin or the keratin in your hair. Some carry things (hemoglobin ferries oxygen in your blood), some are messengers (many hormones), and some fight invaders (antibodies). Nearly every trait you have traces back to proteins.`,
            `A protein is a chain of smaller units called amino acids, folded into a specific 3D shape. There are twenty kinds of amino acids, and their order, dictated by the gene, determines how the chain folds, and the shape determines the job. Get the order right and you get a working machine; change it, and the shape and function can change too.`,
          ],
          image: `/voyager-assets/science/l02-s2-proteins.webp`,
          imageCaption: `The key that unlocks everything: DNA does NOT build your body directly. It holds the recipes for PROTEINS, and proteins do almost all the work of life. If DNA is the blueprint, proteins are the construction crew, the machines, and much of the building material at once. Proteins are versatile: ENZYMES speed up reactions (digesting food), STRUCTURAL ones form skin and hair (collagen, keratin), CARRIERS move things (hemoglobin ferries oxygen), MESSENGERS signal (hormones), and DEFENDERS fight invaders (antibodies). Nearly every trait traces back to proteins. A protein is a chain of AMINO ACIDS (twenty kinds) folded into a specific 3D shape. Their order, set by the gene, determines the fold, and the shape determines the job. Right order, working machine; change it, and function can change.`,
          vocab: [
            { word: `protein`,
              definition: `A molecule made of folded chains of amino acids that does most of the work in cells, as enzymes, structures, carriers, messengers, and more.`,
              audioPrompt: `A protein, {name}, is a molecule made of folded chains of amino acids, and proteins do almost all the work of life, as enzymes, structures, carriers, and messengers. DNA's main job is holding the recipes for them.` },
            { word: `amino acid`,
              definition: `One of the twenty building-block units that link in a specific order to form a protein. Their sequence determines the protein's shape and function.`,
              audioPrompt: `An amino acid, {name}, is one of the twenty building-block units that link together to form a protein. Their exact order, dictated by the gene, determines how the protein folds, and its shape determines its job.` },
            { word: `shape determines function`,
              definition: `The principle that a protein's 3D folded shape decides what it can do. Change the shape and you often change or break the function.`,
              audioPrompt: `Shape determines function, {name}, is a core principle of biology: a protein's folded 3D shape decides what it does. Change the order of amino acids and you change the shape, which can change or break the protein's job.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Transcription: Copying The Recipe`,
          paragraphs: [
            `Now the flow of information, in one famous direction: DNA to RNA to protein. The first step is transcription. The cell can't risk sending its precious master DNA out to be used, so it makes a working copy of just the one gene it needs. That copy is made of RNA, a molecule similar to DNA but single-stranded.`,
            `During transcription, the relevant stretch of DNA unzips, and the cell builds a matching RNA strand using base pairing (with one twist: in RNA, the base U replaces T). The result is a messenger RNA, or mRNA, that carries the gene's instructions out of the nucleus to where proteins are actually built. It's like photocopying one recipe to take into the kitchen.`,
            `This step is also where the cell exercises enormous control. A gene is only transcribed when its product is needed. This is gene expression, the turning of genes "on" and "off." It's why the same DNA can run a heart cell and a skin cell: different genes are expressed in each. The code is identical; which recipes get read is not.`,
          ],
          image: `/voyager-assets/science/l02-s3-transcription.webp`,
          imageCaption: `The flow of information runs in one direction: DNA to RNA to PROTEIN. The first step is TRANSCRIPTION. The cell won't risk sending out its master DNA, so it makes a working copy of just the gene it needs, made of RNA (similar to DNA but single-stranded). The DNA unzips and the cell builds a matching RNA strand by base pairing (with a twist: in RNA, U replaces T). The result is MESSENGER RNA (mRNA), carrying the gene's instructions out of the nucleus, like photocopying one recipe to take to the kitchen. This step is also where the cell controls everything: a gene is only transcribed when needed. This is GENE EXPRESSION, turning genes on and off. It's why the same DNA runs a heart cell and a skin cell, different genes are expressed in each.`,
          vocab: [
            { word: `transcription`,
              definition: `The first step of gene expression: copying a gene's DNA into a single-stranded messenger RNA (mRNA) that carries the instructions out of the nucleus.`,
              audioPrompt: `Transcription, {name}, is the first step of reading a gene: the cell copies the gene's DNA into a single-stranded messenger RNA, or mRNA. This working copy carries the instructions out of the nucleus to where proteins are built.` },
            { word: `mRNA`,
              definition: `Messenger RNA, the working copy of a gene made during transcription. It carries the genetic instructions from the DNA to the protein-building machinery.`,
              audioPrompt: `Messenger RNA, or mRNA, {name}, is the working copy of a gene made during transcription. It's like a photocopied recipe that carries the gene's instructions from the DNA out to where the cell actually builds the protein.` },
            { word: `gene expression`,
              definition: `The turning of genes "on" and "off." It's why cells with identical DNA become different types, only different genes get read in each.`,
              audioPrompt: `Gene expression, {name}, is the turning of genes on and off, deciding which recipes get read. It's why your skin cells and heart cells, with identical DNA, are so different: each expresses a different set of genes.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Translation: Building The Protein`,
          paragraphs: [
            `The mRNA travels to a ribosome, the cell's protein-building machine. Here comes translation, where the code is finally read and turned into a protein. The ribosome reads the mRNA three letters at a time. Each three-letter "word" is called a codon, and each codon specifies one particular amino acid.`,
            `As the ribosome moves along the mRNA, it reads each codon and adds the matching amino acid to a growing chain, like reading a sequence of instructions and assembling beads on a string in the exact order called for. Special transfer molecules deliver the right amino acid for each codon. Start and stop codons mark where the protein begins and ends.`,
            `When the chain is complete, it folds into its specific 3D shape and becomes a working protein. So the full journey is: a gene's code is transcribed into mRNA, the mRNA is translated codon by codon into a chain of amino acids, and that chain folds into a protein that does a job. Code has become a living machine.`,
          ],
          image: `/voyager-assets/science/l02-s4-translation.webp`,
          imageCaption: `The mRNA travels to a RIBOSOME, the cell's protein-building machine, for TRANSLATION, where the code is finally read into a protein. The ribosome reads the mRNA three letters at a time. Each three-letter word is a CODON, and each codon specifies one particular amino acid. As the ribosome moves along, it reads each codon and adds the matching amino acid to a growing chain, assembling beads on a string in the exact order called for. Transfer molecules deliver the right amino acid for each codon, and start and stop codons mark the protein's beginning and end. When complete, the chain folds into its 3D shape and becomes a working protein. The full journey: gene to mRNA (transcription) to amino-acid chain (translation) to folded protein. Code has become a living machine.`,
          vocab: [
            { word: `translation`,
              definition: `The step where a ribosome reads mRNA codons and assembles the matching amino acids into a protein chain. The code becomes a real molecule here.`,
              audioPrompt: `Translation, {name}, is the step where a ribosome reads the mRNA three letters at a time and assembles the matching amino acids into a protein chain. This is where the genetic code finally becomes a real, working molecule.` },
            { word: `codon`,
              definition: `A three-letter "word" in the mRNA code. Each codon specifies one particular amino acid (or a start/stop signal) during translation.`,
              audioPrompt: `A codon, {name}, is a three-letter word in the genetic code. The ribosome reads the mRNA codon by codon, and each codon tells it which amino acid to add next, or signals where to start and stop.` },
            { word: `ribosome`,
              definition: `The cell's protein-building machine. It reads mRNA codons and links amino acids together in order to assemble a protein.`,
              audioPrompt: `A ribosome, {name}, is the cell's protein-building machine. It reads the mRNA codon by codon and links the amino acids together in the right order, assembling the chain that folds into a finished protein.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. DNA stores life's instructions in a four-letter code, with A-T and C-G base pairing at its heart. But DNA doesn't build the body directly, it holds recipes for proteins, the versatile machines and materials that do nearly all the work, and a protein's amino-acid order sets its shape, which sets its function.`,
            `Information flows one way: DNA to RNA to protein. In transcription, a gene is copied into messenger RNA, and the cell controls which genes are expressed, which is why identical DNA can build wildly different cells. In translation, a ribosome reads the mRNA codon by codon and assembles amino acids into a protein that folds and goes to work.`,
            `Now the case-study screen makes you the molecular geneticist, with five real scenarios: a single-letter typo that causes disease, why identical-DNA cells become a brain or a skin cell, a virus that hijacks the machinery, why the genetic code is nearly universal across all life, and how this knowledge lets us make medicine. For each, reason from the code to the consequence. Onward.`,
          ],
          image: `/voyager-assets/science/l02-s5-before.webp`,
          imageCaption: `Threads together. DNA stores life's instructions in a four-letter code, with A-T and C-G BASE PAIRING at its heart. But DNA doesn't build the body directly, it holds recipes for PROTEINS, the versatile machines and materials that do nearly all the work; a protein's amino-acid order sets its shape, which sets its function. Information flows one way: DNA to RNA to PROTEIN. In TRANSCRIPTION, a gene is copied into mRNA, and the cell controls which genes are expressed (why identical DNA builds different cells). In TRANSLATION, a ribosome reads the mRNA codon by codon into a folded protein. The case-study screen makes you the molecular geneticist with five scenarios: a one-letter typo, identical-DNA cells, a hijacking virus, the universal code, and making medicine.`,
          vocab: [
            { word: `the central dogma`,
              definition: `The core flow of genetic information: DNA is transcribed to RNA, which is translated to protein. It's the bridge from code to living body.`,
              audioPrompt: `The central dogma, {name}, is the core flow of genetic information in biology: DNA is transcribed into RNA, and RNA is translated into protein. It's the bridge from the silent code to the living, working body.` },
            { word: `mutation`,
              definition: `A change in the DNA sequence. Even a single-letter change can alter a protein's shape and function, sometimes harmlessly, sometimes dramatically.`,
              audioPrompt: `A mutation, {name}, is a change in the DNA sequence. Even a single-letter change can alter which amino acid is used, changing the protein's shape and function, sometimes with no effect, sometimes a huge one.` },
            { word: `universal code`,
              definition: `The fact that nearly all living things use the same codon-to-amino-acid code, powerful evidence that all life shares a common ancestry.`,
              audioPrompt: `The universal code, {name}, is the striking fact that nearly every living thing, from bacteria to you, uses the same genetic code, the same codons for the same amino acids. It's strong evidence that all life shares a common origin.` },
          ],
        },

        {
          id: `l02-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Molecular Genetics`,
          intro: `{name}, you're the molecular geneticist now. Here are five real scenarios about how the code becomes life. For each, reason from the code to the consequence, using transcription, translation, and the principle that shape determines function.`,
          cases: [
            {
              id: `c1`,
              title: `The single-letter typo`,
              type: `Genetic disease`,
              description: `In sickle cell disease, a single DNA letter is changed in the gene for hemoglobin (the protein that carries oxygen in blood). This swaps just one amino acid out of many. The result: red blood cells warp into stiff sickle shapes, causing serious illness. Explain how one tiny change does so much.`,
              questions: [
                `How can changing a single DNA letter change a whole protein?`,
                `Why does swapping one amino acid have such a big effect?`,
                `How does this show the link between code, shape, and function?`,
              ],
              evaluation: `This case shows the power of the central dogma in miniature. A single changed DNA letter is a mutation. During transcription and translation, that one altered letter changes a codon, and since each codon specifies an amino acid, the wrong amino acid gets placed into the hemoglobin protein, just one swap out of the whole chain. The reason such a tiny change matters so much is the principle that shape determines function: the amino-acid sequence dictates how the protein folds, and even one different amino acid in a critical spot can change the folding and surface of the protein. In sickle cell, the altered hemoglobin proteins stick together and stack into stiff rods, warping the red blood cells into the rigid sickle shape that can't flow smoothly through blood vessels, causing pain, blockages, and illness. So the chain of causation runs cleanly from one DNA letter, to one wrong codon, to one swapped amino acid, to a misshapen protein, to deformed cells, to disease. It's a vivid demonstration that the order of letters in DNA isn't trivial detail, it's everything, because that order determines the proteins, and the proteins determine the organism. A typo in the code becomes a change in the body.`,
            },
            {
              id: `c2`,
              title: `Same DNA, totally different cells`,
              type: `Gene expression`,
              description: `A neuron in your brain and a cell in your skin contain the exact same DNA, every gene, identical in both. Yet one fires electrical signals and the other forms a waterproof barrier. They look and act nothing alike. How can identical instructions produce such different cells?`,
              questions: [
                `If the DNA is identical, what makes the two cells so different?`,
                `Which genes are being read in each, and how does that matter?`,
                `Why is gene expression, not just the DNA itself, so powerful?`,
              ],
              evaluation: `The answer is gene expression: although the DNA is identical in both cells, different genes are turned "on" and "off" in each, so different proteins get made. The DNA is the full cookbook, but each cell only reads, transcribes, and translates a specific subset of recipes. In the neuron, the genes for ion channels, neurotransmitter machinery, and long signal-carrying structures are expressed, building the proteins that let it fire electrical signals. In the skin cell, different genes are expressed, building proteins like keratin that form a tough, waterproof barrier. Same library, different recipes pulled off the shelf. This is why gene expression, not just the DNA sequence itself, is so powerful: it's the layer of control that decides which of your tens of thousands of genes are active in any given cell at any given time. It explains how a single fertilized egg, with one set of DNA, can develop into a body with over two hundred different cell types, all sharing identical genes but expressing them differently. The DNA provides the possibilities; gene expression chooses which ones become real. Understanding this also underpins huge areas of biology and medicine, since diseases like cancer often involve genes being expressed when or where they shouldn't be.`,
            },
            {
              id: `c3`,
              title: `The virus that hijacks the machinery`,
              type: `Microbiology`,
              description: `A virus is little more than genetic material in a protein shell. It can't build proteins or reproduce on its own. Yet once it gets inside one of your cells, it forces the cell to make thousands of new viruses. How does a virus, with no machinery of its own, manage this?`,
              questions: [
                `If a virus can't make its own proteins, how does it reproduce?`,
                `What cellular machinery is the virus exploiting?`,
                `Why does understanding the central dogma help explain viruses?`,
              ],
              evaluation: `A virus reproduces by hijacking your cell's protein-building machinery, which it cannot replicate on its own. A virus carries its own genetic instructions (DNA or RNA) but lacks ribosomes, the means to transcribe and translate. So when it invades a cell, it inserts its genetic material and effectively tricks the cell into reading the viral genes as if they were the cell's own. The cell's machinery, its ribosomes and the whole transcription-translation apparatus, then dutifully follows the central dogma on the viral instructions: it transcribes and translates the viral genes, mass-producing viral proteins and copying the viral genome. The cell becomes a factory churning out new virus particles, often until it bursts and releases them to infect more cells. This is exactly why understanding the central dogma illuminates how viruses work: they're essentially parasites of the information flow from genes to proteins, contributing instructions but stealing the machinery to execute them. It also explains why viruses are tricky to treat (you can't easily attack the virus without harming the cell's own machinery) and how some vaccines work, by safely introducing a piece of viral code so your cells make a harmless viral protein that trains your immune system, harnessing the very same machinery for defense.`,
            },
            {
              id: `c4`,
              title: `The same code in every living thing`,
              type: `Comparative genetics`,
              description: `Scientists discovered something astonishing: a human gene, inserted into a bacterium, gets read and built into the correct human protein. Bacteria, plants, fungi, and animals all use essentially the same genetic code, the same codons for the same amino acids. What does this reveal?`,
              questions: [
                `Why can a bacterium correctly read and build a human protein?`,
                `What does a nearly universal genetic code suggest about life's history?`,
                `How does this fact get used in medicine and biotechnology?`,
              ],
              evaluation: `A bacterium can correctly build a human protein because the genetic code is nearly universal: across bacteria, plants, fungi, and animals, the same three-letter codons specify the same amino acids. The cell's translation machinery reads codons the same way regardless of where the gene came from, so a human gene's codons get translated into the correct human amino-acid sequence even inside a bacterium. The profound implication is about life's history: a shared code is powerful evidence that all life on Earth descends from a common ancestor. If life had arisen many separate times, we'd expect different, incompatible codes; instead, the deep sameness suggests one origin, with the code essentially "frozen" early and inherited by everything since. This is one of the strongest pieces of evidence for the unity of life. It's also enormously useful: because the code is universal, we can insert human genes into bacteria or yeast and have them mass-produce human proteins. This is exactly how we make life-saving medicines like insulin for diabetes, bacteria are turned into tiny factories that read the human insulin gene and pump out real human insulin. The universality of the code is thus both a clue to our shared past and a tool for our present.`,
            },
            {
              id: `c5`,
              title: `Programming cells to make medicine`,
              type: `Biotechnology application`,
              description: `Before the 1980s, people with diabetes relied on insulin extracted from animal pancreases, scarce and imperfect. Today, the human insulin gene is inserted into bacteria, which then produce vast amounts of pure human insulin. Explain how scientists turned bacteria into insulin factories.`,
              questions: [
                `What exactly is inserted into the bacteria, and why does it work?`,
                `Which steps of the central dogma do the bacteria perform?`,
                `Why is this a triumph of understanding gene expression?`,
              ],
              evaluation: `Scientists insert the human gene for insulin, the specific stretch of DNA code that is the recipe for the insulin protein, into bacteria. It works precisely because the genetic code is universal: the bacteria's machinery reads the human codons the same way human cells would. Once the gene is inside, the bacteria perform the full central dogma on it: they transcribe the human insulin gene into mRNA, then translate that mRNA at their ribosomes, codon by codon, into the chain of amino acids that folds into real human insulin. The bacteria multiply rapidly, and a vast culture of them becomes a living factory producing pure human insulin in huge quantities, which is then purified for patients. This is a triumph of understanding gene expression and protein synthesis because it required knowing, in detail, how a gene's code becomes a working protein, and then deliberately harnessing that flow in another organism. We didn't just observe the central dogma; we used it as a tool, redirecting a bacterium's own machinery to read instructions we chose. It transformed diabetes treatment, replacing scarce, animal-derived insulin with an abundant, identical human version, and it opened the entire field of producing medicines, including many other proteins and even vaccines, by programming cells with chosen genes. Reading the code led to writing with it.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, how does the code in DNA actually become a living, functioning body, and why does the order of those four letters matter so much? Which case most changed how you see genetics, and what's the biggest idea you'd take away? In 5-6 sentences.`,
          reflectionPrompt: `Every protein in your body, every enzyme, every fiber, was built by your cells reading instructions written in a four-letter code you inherited. How does it feel to know you are, in a real sense, a story written in chemistry, and constantly being read aloud inside you?`,
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `In DNA's base-pairing rule, which bases pair together?`,
              options: [
                `A pairs with C, and T pairs with G.`,
                `A pairs with T, and C pairs with G.`,
                `A pairs with G, and C pairs with T.`,
                `Every base can pair with any other base freely.`,
              ],
              correctIndex: 1,
              explanation: `The strict rule is A with T and C with G, which lets each strand serve as a template to copy the other. The distractors scramble the pairings or deny that pairing is specific.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the key insight about what DNA actually does?`,
              options: [
                `DNA directly builds all the body's structures by itself.`,
                `DNA holds the recipes for proteins, which do almost all the work of life.`,
                `DNA's only job is to store energy for the cell to use.`,
                `DNA physically becomes skin, muscle, and bone without any steps.`,
              ],
              correctIndex: 1,
              explanation: `DNA doesn't build the body directly; it holds the recipes for proteins, and proteins do almost all the work (as enzymes, structures, carriers, and more). The distractors have DNA building or becoming the body directly, or storing energy.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What determines a protein's function?`,
              options: [
                `Its 3D folded shape, which comes from the order of its amino acids.`,
                `The color of the cell it happens to be located inside.`,
                `The total number of proteins in the body at that moment.`,
                `Purely random chance, with no connection to its structure.`,
              ],
              correctIndex: 0,
              explanation: `A protein's function comes from its 3D shape, which is set by the order of its amino acids (dictated by the gene), shape determines function. The distractors cite cell color, protein count, or randomness.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the correct flow of genetic information (the central dogma)?`,
              options: [
                `Protein to RNA to DNA.`,
                `RNA to DNA to protein.`,
                `DNA to RNA to protein.`,
                `DNA to protein to RNA.`,
              ],
              correctIndex: 2,
              explanation: `The central dogma runs DNA to RNA to protein: DNA is transcribed into RNA, which is translated into protein. The distractors reverse or scramble the order.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What happens during transcription?`,
              options: [
                `A ribosome links amino acids into a finished protein chain.`,
                `A gene's DNA is copied into a single-stranded messenger RNA.`,
                `Two DNA molecules fuse together into one double helix.`,
                `A protein is broken back down into individual amino acids.`,
              ],
              correctIndex: 1,
              explanation: `In transcription, a gene's DNA is copied into single-stranded mRNA, the working copy that leaves the nucleus. The distractors describe translation, an invented fusion, or protein breakdown.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `A neuron and a skin cell have identical DNA but are completely different. Why?`,
              options: [
                `The skin cell lost most of its genes during development.`,
                `Their DNA is actually different in ways too small to detect.`,
                `Different genes are expressed (turned on) in each cell type.`,
                `One cell uses DNA while the other uses no genetic material at all.`,
              ],
              correctIndex: 2,
              explanation: `Gene expression explains it: identical DNA, but different genes are turned on and off in each cell, so different proteins are made. The distractors claim lost genes, secretly different DNA, or no genetic material.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is a codon, and what does it do during translation?`,
              options: [
                `A three-letter mRNA "word" that specifies one amino acid.`,
                `The enzyme that unzips the DNA double helix.`,
                `A single DNA base, like A or G, on its own.`,
                `The waterproof protein that makes up skin cells.`,
              ],
              correctIndex: 0,
              explanation: `A codon is a three-letter word in the mRNA; the ribosome reads codons one at a time, and each specifies one amino acid (or a start/stop). The distractors describe an enzyme, a single base, or a structural protein.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why can bacteria be used to manufacture human insulin?`,
              options: [
                `Bacteria already naturally produce their own human insulin without any help at all.`,
                `The genetic code is nearly universal, so bacteria read a human gene correctly.`,
                `Bacteria are physically identical to human pancreas cells.`,
                `Insulin is not really a protein, so any cell can copy it.`,
              ],
              correctIndex: 1,
              explanation: `Because the genetic code is nearly universal, a human insulin gene inserted into bacteria is read and translated into real human insulin by the bacteria's machinery. The distractors claim natural production, identical cells, or that insulin isn't a protein.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because DNA contains the complete instructions for a body, the DNA molecule itself must directly carry out the body's jobs, digesting food, carrying oxygen, building tissues, on its own.`,
              correctAnswer: false,
              explanation: `False, and grasping why is the single most important idea in molecular genetics. DNA is the instruction set, the master cookbook, but it does not do the body's work directly. The molecules that actually carry out almost all of life's jobs are proteins. Proteins are the enzymes that digest your food, the hemoglobin that carries oxygen in your blood, the collagen and keratin that build your skin and hair, the antibodies that fight invaders, and the messengers that coordinate your body. DNA's role is to hold the recipes for these proteins, nothing more and nothing less. The crucial link between the silent code and the working body is the flow of information called the central dogma: DNA is transcribed into messenger RNA, and that mRNA is translated by ribosomes, codon by codon, into a chain of amino acids that folds into a functioning protein. So a gene doesn't reach out and digest a meal; instead, the gene's code is read and used to build a digestive enzyme, and that enzyme does the work. This distinction matters enormously, because it explains how everything in genetics actually functions. It's why a single-letter mutation can cause disease (it changes a protein, not the DNA's "activity"), why identical DNA can build a brain cell and a skin cell (different proteins are made via gene expression), and why we can insert a human gene into bacteria to mass-produce a human protein like insulin (the bacteria build the protein from the recipe). DNA is the blueprint and the cookbook; proteins are the construction crew, the machines, and the materials. Confusing the instructions with the workers misses the entire bridge from code to life.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A new drug works by blocking a specific harmful protein from being made in a person's cells, even though the gene for that protein is still present in their DNA. Using the lesson, how is this possible?`,
              options: [
                `It's impossible; if the gene is present, the protein must always be made.`,
                `The drug must physically delete the gene from every cell's DNA.`,
                `Having a gene doesn't guarantee its protein is made, expression and protein synthesis (transcription/translation) can be blocked, so the drug can interrupt the DNA-to-RNA-to-protein flow without removing the gene itself.`,
                `The drug turns the harmful protein into DNA to neutralize it.`,
              ],
              correctIndex: 2,
              explanation: `This applies gene expression and the central dogma. A gene being present in DNA doesn't mean its protein is always produced, the gene must be expressed and go through transcription and translation to become a protein. A drug can interrupt that flow (blocking transcription or translation) so the harmful protein isn't made, all without deleting the gene. The distractors deny expression control, require gene deletion, or reverse the information flow.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-story`, category: `A story in chemistry`, prompt: `You are, in a real sense, a story written in a four-letter code, constantly being read aloud inside your cells to build the proteins that are you. How does it feel to think of yourself as information being expressed, moment by moment?` },
            { id: `reflect-unity`, category: `One family of life`, prompt: `Nearly every living thing, bacteria, oak trees, whales, you, uses the same genetic code, strong evidence of shared ancestry. What does it stir in you to know you're written in the same chemical language as all life on Earth?` },
            { id: `reflect-tiny`, category: `One letter, everything`, prompt: `A single changed letter in your DNA can mean health or serious illness. What does it make you feel about both the fragility and the precision of the code that builds every living thing?` },
            { id: `reflect-heritage`, category: `Teaching the code`, prompt: `Caro, how would you help a curious child grasp the wonder here, that their body is built by reading instructions written in chemistry, inherited from generations before them, without it becoming just dry vocabulary?` },
            { id: `reflect-power`, category: `Reading and writing life`, prompt: `We've gone from reading the genetic code to writing with it, programming bacteria to make medicine. Where do you sit with humanity gaining the power to read and rewrite the code of life? What feels exciting, and what feels like it needs care?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If almost everything about a living thing traces back to which proteins its genes make, how much of "who you are" is written in your code, and how much isn't? Where might this molecular view be powerful, and where might it be incomplete?` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The code is invisible, but you can model it, decode it, and even taste its products. Two paths.`,
          familyActivity: {
            title: `Crack The Code Together`,
            duration: `One afternoon`,
            description: `Turn the central dogma into a hands-on game the whole family can play, so the abstract becomes concrete. First, build a model gene: write out a short "DNA" sequence using only the letters A, T, C, and G on a strip of paper (or color-coded beads or candy). Then act out base pairing by writing the matching complementary strand beneath it (A under T, G under C), and notice how each strand perfectly predicts the other. Next, run transcription: make an "mRNA" copy of one strand, remembering the twist that U replaces T. Then run translation: using a simple printable codon chart (easy to find), read your mRNA three letters at a time and look up which amino acid each codon calls for, writing out the resulting "protein" as a chain of amino-acid names or beads. You've just taken code all the way to a protein. For the big "aha," try the mutation experiment: go back and change a single letter in your original DNA, then run the whole process again and see how it ripples through, sometimes changing an amino acid (and therefore the protein), sometimes not. That's exactly how a one-letter typo can cause something like sickle cell disease. Finally, connect it to the kitchen: when you bake bread or make yogurt, you're harnessing organisms expressing their genes, and many medicines (like insulin) are made by bacteria reading inserted genes. The goal is for everyone to feel, viscerally, how a string of four letters becomes a living machine, and how astonishing it is that this is happening inside them right now.`,
          },
          projectOption: {
            title: `Design-A-Protein Investigation, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become a molecular detective and trace a real protein from gene to function. Week 1, pick and investigate a protein: choose one that interests you, hemoglobin (carries oxygen), insulin (controls blood sugar), keratin (builds hair and nails), an enzyme like amylase (digests starch), or a defense protein like an antibody. Research and map its full story: which gene codes for it, roughly where in the body it's expressed and why there, what its 3D shape looks like, and exactly what job that shape lets it do. Then connect it to the central dogma explicitly: describe how the gene is transcribed and translated to build this specific protein. Week 2, explore what happens when it changes: research a real mutation or variation in your protein's gene (for example, the sickle-cell change in hemoglobin, or a lactase variation affecting milk digestion) and explain, step by step, how a change in the DNA letters leads to a changed protein shape, a changed function, and a real effect on the body. Then create a clear teaching piece, an annotated diagram, a slideshow, a short video, or a "protein profile" poster, that tells your protein's complete journey: gene, expression, transcription, translation, folding, function, and what happens when the code changes. You'll come away with a deep, concrete understanding of how genotype becomes phenotype, how the code becomes a living trait, and a created resource that could teach the whole central dogma to someone else.`,
            offerToParent: `Parent: opt your child into the Design-A-Protein Investigation. Tracing a real protein from its gene through transcription, translation, folding, and function, then analyzing how a mutation changes shape and effect, directly develops the NGSS ideas of structure and function and how genetic information flows to traits. Connecting code to a real, relatable protein (and a real variation) makes molecular genetics concrete rather than abstract, and creating a teaching piece deepens mastery. It's rigorous, genuinely modern, NGSS-aligned biology that leaves your child understanding how the instructions in DNA actually become the living, working body.`,
          },
          identityQuestion: `If you become someone who understands how a four-letter code becomes a living body, who can reason from a gene to a protein to a trait to a whole organism, what kind of thinker does that make you, someone who grasps how life is actually written and read at its deepest level, that a person who thinks "DNA just is the body" can never quite become?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read the flow from gene to protein to trait.`,
            `A thinker who understands how code becomes a living body.`,
            `Someone who sees themselves as a story written in chemistry.`,
          ],
          saveKey: `identity_responses_sci_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. Two down, and you've just learned how the book of life is actually read. You learned that DNA stores instructions in a four-letter code, held together by the base-pairing rules A-T and C-G, but that DNA doesn't build the body directly. Instead, it holds the recipes for proteins, the versatile molecular machines that do nearly all the work of life, and a protein's amino-acid order sets its shape, which sets its function. You traced the central dogma, the one-way flow of information: transcription copies a gene into messenger RNA, and translation lets a ribosome read that mRNA codon by codon to build a protein. You learned that gene expression, which genes are turned on, is why identical DNA can build a brain cell and a skin cell. And as a molecular geneticist, you reasoned through real cases: how a single-letter typo causes sickle cell disease, how viruses hijack the machinery, why the code is nearly universal across all life, and how we now program bacteria to make human insulin. You understand life at its most fundamental level of information. Next, we take this power further, into biotechnology: CRISPR, GMOs, and the medical revolutions, and the deep questions they raise. Onward, {name}. — Cosmo`,
          badge: `code-reader`,
          badgeName: `Code Reader`,
          xpEarned: 75,
          competencies: [
            `Understands DNA structure, the four-letter code, and the base-pairing rules`,
            `Grasps the central insight that DNA codes for proteins, which do the work of life`,
            `Knows that a protein's amino-acid order sets its shape, which sets its function`,
            `Traces the central dogma: transcription of DNA to mRNA and translation to protein`,
            `Understands gene expression and why identical DNA produces different cell types`,
            `Explains how mutations alter proteins and can cause disease, via the code-to-function link`,
            `Connects molecular genetics to real applications: viruses, the universal code, and making medicine`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Biotechnology — CRISPR, GMOs, and Medical Applications`,
            hook: `The power to rewrite the code of life, and the questions it raises. Multiple Perspectives.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L02 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
