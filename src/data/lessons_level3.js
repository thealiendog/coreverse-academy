// Level 3 Lessons — Voyager Track (Ages 11-13)
// 36 lessons across 12 subjects

export const level3Lessons = [
  {
    id: "level3-inner-world-1",
    level: 3,
    subject: "Inner World",
    unit: "Unit 3: Consciousness & Identity",
    lessonNumber: 1,
    title: "Who Are You Really?",
    guide: "Nova",
    avatar: "nova",
    badge: "Identity Seeker",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name] — you've made it to Level 3. The Voyager track. At this level we don't just learn — we question, challenge, and build our own understanding of the world. Starting today with the question that philosophers have wrestled with for millennia: Who are you, really? Not your name, not your role, not your body. But you."`,
      spark: `"Philosopher Derek Parfit ran a thought experiment: If your brain was scanned perfectly and transmitted to Mars where it was reconstructed atom by atom — while your original body was destroyed in the process — would the being that arrived on Mars be you? What if both versions survived? Which one is the real you? And what does your answer reveal about what you think 'you' actually are?"`,
      learn: `"Identity is the question of what makes you the same person over time and what constitutes the 'self' that experiences your life.

The Ship of Theseus paradox: An ancient Greek ship is preserved in a museum. As planks rot, they're replaced. Eventually every single plank has been replaced. Is it still the same ship? Now apply this to your body — in 7 years, nearly every cell in your body is replaced. Are you the same person you were 7 years ago?

Major theories of personal identity:

Physical/Biological identity — you are your body. Identity persists as long as the body persists. Problem: What if your body is teleported? Cloned? Gradually replaced?

Psychological continuity — you are the continuous chain of memories, personality, beliefs, and psychological connections that link you to your past self (John Locke). This is why we hold adults responsible for their childhood crimes — there's psychological continuity. Problem: What about amnesia? Sleep? Dreams?

Narrative identity (Paul Ricoeur) — you are the story you tell about yourself. Identity is the ongoing narrative that makes your life coherent. Who you are is the story of who you've been and who you're becoming. This is why personal history matters so deeply.

The Buddhist non-self (Anatta) — there is no fixed, permanent self. The 'self' is an illusion created by the continuous stream of experience. What we call 'I' is a process, not a thing — like a river, not a rock. This is profoundly different from Western notions of self.

Neuroscience of self: Your brain constructs the feeling of being a self — there is no single 'self module.' The default mode network (DMN) activates during self-referential thinking. In deep meditation, as the DMN quiets, practitioners report experiences of 'selflessness' — not loss of consciousness but loss of the constructed self-boundary.

Multiple selves: William James distinguished the 'I' (the self that experiences) from the 'Me' (the self that is known). We also have social selves — different versions of ourselves in different contexts. Is the self you are with your parents the same as the self you are with friends?

The deepest question: If every part of you physically changes, if your memories are imperfect reconstructions, if your personality shifts over time — what, if anything, stays the same? And does it need to?"`,
      explore: `"Identity exploration:

1. Write your 'narrative identity' — the story that makes your life coherent. What are the key events, turning points, and themes that define who you are? Include one story from childhood, one more recent, and where you think the story is going.

2. The Buddhist perspective says the self is a process, not a thing — like a river. What do you think this means for how we should relate to our own identity? Does it feel liberating or unsettling?

3. Complete this sentence 5 different ways: 'I am ___.' Then examine your answers. How many are roles? How many are traits? How many are values? What does this reveal about where you locate your identity?

[Text input]"`,
      quickcheck: {
        question: "The Ship of Theseus paradox applied to human identity asks:",
        options: ["A) Whether ships can have identity", "B) If your body's cells are all replaced over time, are you the same person? ✅", "C) Whether Greek philosophy is still relevant", "D) If we should preserve old ships in museums"],
        correctIndex: 1,
        explanation: "The Ship of Theseus asks whether something remains the same when all its parts are replaced — applied to identity, it questions what makes you the same person when your body's cells are constantly replaced."
      },
      quiz: [
    {
      question: "Psychological continuity theory says personal identity persists through:",
      options: ["A) The physical body remaining intact", "B) Continuous memory, personality, and psychological connections linking you to your past self ✅", "C) DNA remaining unchanged", "D) The same brain cells surviving"],
      correctIndex: 1
    },
    {
      question: "The Buddhist concept of Anatta (non-self) proposes:",
      options: ["A) The self is permanent and unchanging", "B) Only the body is real; the self is a brain phenomenon", "C) There is no fixed, permanent self — the 'I' is a process, not a thing ✅", "D) Multiple selves exist simultaneously in different dimensions"],
      correctIndex: 2
    },
    {
      question: "Narrative identity (Ricoeur) defines identity as:",
      options: ["A) Your genetic code", "B) Your psychological memories only", "C) The ongoing story you construct about who you've been and are becoming ✅", "D) Your social roles and relationships"],
      correctIndex: 2
    },
    {
      question: "The Default Mode Network (DMN) is associated with:",
      options: ["A) Basic reflexes and survival responses", "B) Self-referential thinking — activating when we think about ourselves ✅", "C) Processing external sensory information", "D) Language processing only"],
      correctIndex: 1
    },
    {
      question: "William James distinguished 'I' from 'Me' as:",
      options: ["A) Conscious vs unconscious mind", "B) Left brain vs right brain", "C) The self that experiences vs the self that is known and reflected upon ✅", "D) The physical self vs the spiritual self"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — the fact that you're questioning who you are is itself a profound act of self-awareness. Most people never ask this question deeply. You're an Identity Seeker — and that search, done with honesty and courage, is one of the most important journeys a human being can take. The question isn't who you have been. It's who you are choosing to become."

[Badge: Identity Seeker]`
    }
  },

  {
    id: "level3-inner-world-2",
    level: 3,
    subject: "Inner World",
    unit: "Unit 3: Consciousness & Identity",
    lessonNumber: 2,
    title: "The Subconscious Mind",
    guide: "Nova",
    avatar: "nova",
    badge: "Mind Archaeologist",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we go beneath the surface — into the part of your mind you can't directly observe but which drives an enormous proportion of your behavior, decisions, and emotional responses. The subconscious. Understanding this is understanding why people — including you — do things they can't fully explain."`,
      spark: `"Research suggests that up to 95% of your daily decisions, behaviors, and emotional reactions are driven by subconscious processes — not by conscious deliberate thought. Your brain processes 11 million bits of information per second, but conscious awareness can handle only about 50 bits per second. What is your subconscious doing with all that information you're not aware of?"`,
      learn: `"The subconscious (or unconscious) mind refers to mental processes that operate below conscious awareness — influencing behavior, emotion, and perception without your direct knowledge.

History of the concept:
Sigmund Freud introduced the modern concept of the unconscious — proposing that repressed desires, fears, and memories are pushed below consciousness but continue to influence behavior. His methods (dream analysis, free association) aimed to make the unconscious conscious.

Carl Jung extended Freud's work with the collective unconscious — shared deep structures of the psyche found across cultures (archetypes like the hero, the shadow, the anima/animus).

Modern neuroscience validates the basic insight: most brain processing occurs non-consciously. The conscious mind is more like the press secretary of your brain than its CEO.

How the subconscious works:

Implicit memory — skills and habits stored below conscious recall. You don't consciously remember learning to walk, but you walk. Similarly, emotional patterns, relationship habits, and automatic reactions are stored implicitly.

Emotional conditioning — experiences (especially early ones) create emotional associations that operate automatically. If you were bitten by a dog at age 3, you might have automatic fear responses to dogs without remembering why.

Cognitive biases — systematic patterns of thought error that operate below conscious awareness. Confirmation bias (seeking information that confirms what you already believe). Availability heuristic (overestimating probability of things you can easily recall). Anchoring (being overly influenced by the first number you hear). These biases affect decisions constantly without being noticed.

Priming — being exposed to a stimulus unconsciously affects subsequent behavior. Studies show that people walking behind an actor moving slowly then walk more slowly themselves. The subconscious picks up environmental cues and adjusts behavior.

The subconscious and beliefs: Bruce Lipton's research suggests that subconscious beliefs — formed primarily in childhood — create a biological program that runs on autopilot. These beliefs about safety, worthiness, capability, and love shape what we perceive, how we respond, and what we attract. The conscious mind can override them briefly, but sustained change requires reprogramming at the subconscious level.

Methods to work with the subconscious:
Meditation — quieting the conscious mind to observe what arises from below
Dream journaling — capturing subconscious material in dreams
Journaling and free writing — allowing uncensored thought to emerge
Therapy — particularly depth-oriented approaches
Repetition and habit — gradually replacing automatic patterns with deliberate new ones
Visualization and affirmations — used consistently, these can retrain subconscious associations"`,
      explore: `"Subconscious mapping:

1. Automatic writing exercise: Set a timer for 5 minutes. Write continuously without stopping, without editing, without thinking about what you're writing. Just let it flow. When you're done, read it back. What surprised you? What themes emerged? This is subconscious material.

2. Identify one automatic reaction you have — a situation that reliably makes you feel a certain way without choosing to. Trace it backward: When did this pattern start? What experience might have created it?

3. Research and explain one cognitive bias (choose one not already covered here). Give a real-world example of how it affects decision-making.

[Text input]"`,
      quickcheck: {
        question: "Implicit memory refers to:",
        options: ["A) Memories you can consciously recall and describe", "B) Skills and habits stored below conscious recall that operate automatically ✅", "C) Memories from early childhood only", "D) Memories shared across all humans"],
        correctIndex: 1,
        explanation: "Implicit memory stores skills, habits, and emotional patterns below conscious awareness — you use them without consciously remembering learning them."
      },
      quiz: [
    {
      question: "Research suggests what proportion of daily decisions and behaviors are driven by subconscious processes?",
      options: ["A) About 20%", "B) About 50%", "C) Up to 95% ✅", "D) Exactly 75%"],
      correctIndex: 2
    },
    {
      question: "Carl Jung's collective unconscious refers to:",
      options: ["A) The shared pool of traumatic memories", "B) Deep psychological structures (archetypes) shared across cultures ✅", "C) The part of the unconscious that connects all humans through telepathy", "D) Repressed group memories from historical trauma"],
      correctIndex: 1
    },
    {
      question: "Confirmation bias is:",
      options: ["A) The tendency to trust confirmed sources", "B) Seeking information that confirms what you already believe ✅", "C) Believing things because multiple people confirm them", "D) The bias toward trusting authorities"],
      correctIndex: 1
    },
    {
      question: "Priming demonstrates that:",
      options: ["A) Conscious intentions drive all behavior", "B) Unconscious exposure to stimuli affects subsequent behavior and decisions ✅", "C) Memory improves with practice", "D) People can be hypnotized without knowing it"],
      correctIndex: 1
    },
    {
      question: "To reprogram subconscious beliefs, effective methods include: (all that apply)",
      options: ["A) Sustained meditation practice ✅", "B) Repetition of new habits ✅", "C) Depth-oriented therapy ✅", "D) Visualization and affirmations practiced consistently ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — you just shone a light on the 95% of your mind that was previously running in the dark. Understanding your subconscious doesn't give you perfect control — but it gives you something more valuable: awareness. You're a Mind Archaeologist — someone who digs beneath the surface to understand what's really driving the machine."

[Badge: Mind Archaeologist]`
    }
  },

  {
    id: "level3-inner-world-3",
    level: 3,
    subject: "Inner World",
    unit: "Unit 3: Consciousness & Identity",
    lessonNumber: 3,
    title: "Reprogramming Beliefs & Creating Reality",
    guide: "Nova",
    avatar: "nova",
    badge: "Reality Architect",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we bring together everything from the last two lessons — identity, subconscious, beliefs — and ask the most practical question: How do you actually change? How do you upgrade the programs running in your subconscious and deliberately create a life aligned with who you want to be? This is where philosophy meets neuroscience meets real life."`,
      spark: `"The placebo effect has been documented to heal real physical conditions — tumors have shrunk, pain has vanished, allergic reactions have stopped — purely through the mind's belief that healing was happening. Conversely, the nocebo effect shows that negative expectations cause measurable physical harm. If belief can physically heal or harm the body, what does this tell us about the power of the stories we tell ourselves?"`,
      learn: `"Your beliefs — especially subconscious ones — create a filter through which you perceive reality and a program that shapes your behavior. This means changing your beliefs changes your experience of reality.

The neuroscience of belief change:

Neuroplasticity — the brain's ability to reorganize and form new neural connections throughout life. Every thought you think, emotion you feel, and experience you have strengthens or weakens neural pathways. With repetition, new thoughts become automatic. With disuse, old patterns fade.

Hebbian learning: 'Neurons that fire together, wire together.' If you repeatedly think a new thought and feel a new emotion simultaneously, those patterns become linked and strengthened. This is the neurological basis of habit formation.

The role of emotion in belief change: The limbic system (emotional brain) is where beliefs are stored and encoded. Cognitive understanding alone (knowing something rationally) rarely changes deep beliefs. Emotional experiences do. This is why therapy, peak experiences, and transformative moments can change beliefs instantly — while purely intellectual arguments rarely do.

Dr. Joe Dispenza's model: To change a belief:
1. Become aware of the old program — what unconscious belief is running?
2. Interrupt the pattern — meditation, pattern-breaking
3. Install the new belief through clear intention + elevated emotion (gratitude, love, joy, not just thinking but feeling the new reality)
4. Repeat consistently — rehearse the new neural pattern until it becomes the new automatic

The gap between behavior and identity: James Clear (Atomic Habits) identifies three levels of change:
Outcome-based (most common, least effective): changing what you do. 'I'm going to exercise more.'
Process-based: changing how you do things
Identity-based (most powerful): changing who you believe you are. 'I am a person who moves my body every day.'

Every action is a vote for the kind of person you believe yourself to be. Sufficient votes eventually change the belief.

Manifest what you are, not what you want: The research on visualization in elite sports psychology shows that the brain cannot fully distinguish between vivid imagination and actual experience. Athletes who practice mentally improve nearly as much as those who practice physically. If you repeatedly feel and embody the version of yourself you're becoming — your brain builds the neural architecture for that reality.

The dark side of belief: Beliefs are also how limitations and trauma perpetuate. 'I'm not smart' is a belief. 'The world is dangerous' is a belief. 'I don't deserve good things' is a belief. All of these were learned — usually early, usually from people who themselves had limited beliefs. All of them can be unlearned."`,
      explore: `"Belief archaeology and installation:

1. Identify one limiting belief you hold about yourself. Be honest — the best ones are the ones that sting a little to admit. Write:
- The belief: 'I am not ___' or 'I can't ___' or 'Things don't work out for me because ___'
- Where did this belief come from? When did you learn it?
- Evidence against this belief — times it was proved wrong
- The new belief you'd like to install instead

2. Design a 30-day belief installation practice for your new belief using: daily repetition of the new statement, a visualization practice, and one daily ACTION that votes for the new identity.

3. The placebo effect: Research one documented case where belief or expectation produced a measurable physical change. What does it reveal about the mind-body relationship?

[Text input]"`,
      quickcheck: {
        question: "Hebbian learning in neuroscience states:",
        options: ["A) Learning requires conscious effort to stick", "B) Neurons that fire together wire together — repeated co-activation strengthens neural pathways ✅", "C) New beliefs require forgetting old ones first", "D) Emotional learning is less reliable than intellectual learning"],
        correctIndex: 1,
        explanation: "'Neurons that fire together, wire together' — Hebbian learning means repeated co-activation of neural patterns strengthens those connections, making new thoughts and beliefs increasingly automatic."
      },
      quiz: [
    {
      question: "Why does emotion matter more than intellect for belief change?",
      options: ["A) Emotions are stronger than thoughts", "B) Beliefs are stored in the emotional brain (limbic system) — emotional experiences change them; rational arguments alone rarely do ✅", "C) The intellect cannot process beliefs", "D) Emotions are faster to process than thoughts"],
      correctIndex: 1
    },
    {
      question: "Identity-based change (James Clear) is most powerful because:",
      options: ["A) It requires less effort than other approaches", "B) It focuses on changing your belief about who you are, not just what you do ✅", "C) It changes behavior first, then identity follows", "D) It works best for small habits only"],
      correctIndex: 1
    },
    {
      question: "The nocebo effect demonstrates:",
      options: ["A) That placebos don't always work", "B) Negative expectations can cause measurable physical harm ✅", "C) That belief only affects mental health", "D) The limits of placebo research"],
      correctIndex: 1
    },
    {
      question: "Dispenza's model for belief change begins with:",
      options: ["A) Immediately installing a new belief through repetition", "B) Becoming aware of the old unconscious program that is running ✅", "C) Avoiding thoughts of the old belief entirely", "D) Changing your behavior first, then your belief"],
      correctIndex: 1
    },
    {
      question: "Mental visualization in elite athletes improves performance because:",
      options: ["A) It reduces performance anxiety only", "B) The brain cannot fully distinguish between vivid imagination and real experience, building neural architecture for the new reality ✅", "C) Visualization increases physical muscle strength", "D) It helps athletes memorize plays and strategies"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you now have something most adults never receive: a real, neuroscience-backed understanding of how to actually change. Not willpower. Not motivation. Awareness + emotion + repetition + identity. You're a Reality Architect — someone who understands that the life you experience is built from the inside out. Build deliberately."

[Badge: Reality Architect]`
    }
  },

  {
    id: "level3-cosmos-science-1",
    level: 3,
    subject: "Cosmos & Science",
    unit: "Unit 3: Biology & Life Sciences",
    lessonNumber: 1,
    title: "Cell Biology — The Code of Life",
    guide: "Sage",
    avatar: "sage",
    badge: "Cell Master",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! At Level 3, science gets deep. Today we go to the fundamental unit of life — the cell. You are made of approximately 37 trillion of them. Each one is a universe of complexity — more intricate than any machine humans have built. Understanding the cell is understanding the foundation of all biology, medicine, and the future of human health."`,
      spark: `"A single human cell contains about 6 feet of DNA tightly coiled in a space smaller than a pinprick. That DNA contains 3.2 billion base pairs encoding about 20,000 genes. If you unrolled all the DNA from all your cells and laid it end to end, it would stretch 67 billion miles — about 70 times the distance from Earth to the sun. How can something so vast fit inside something invisible to the naked eye?"`,
      learn: `"A cell is the fundamental unit of life — the smallest structure that can perform all the basic functions of living things: metabolism, response, growth, reproduction.

Two major cell types:
Prokaryotic cells — no membrane-bound nucleus (bacteria, archaea). DNA floats freely in the cytoplasm. Simpler, smaller, appeared first on Earth ~3.5 billion years ago.
Eukaryotic cells — have a membrane-bound nucleus and organelles (plants, animals, fungi, protists). More complex. Appeared ~1.5-2 billion years ago — likely when one prokaryote engulfed another (endosymbiosis).

Key organelles in animal cells:

Cell membrane — the boundary of the cell. Selectively permeable phospholipid bilayer — controls what enters and exits. Studded with proteins for transport, signaling, and recognition.

Nucleus — the control center. Contains the cell's DNA organized into chromosomes. The nucleolus within produces ribosomal RNA. The nuclear envelope has pores for controlled exchange with the cytoplasm.

Mitochondria — the powerhouse. Converts glucose and oxygen into ATP (adenosine triphosphate) — the cell's energy currency. Has its own DNA — evidence it was once a free-living bacterium (endosymbiosis). Most cells have hundreds to thousands of mitochondria.

Endoplasmic reticulum (ER) — manufacturing and transport. Rough ER (studded with ribosomes) manufactures proteins. Smooth ER synthesizes lipids and detoxifies chemicals.

Golgi apparatus — the postal system. Receives proteins from the ER, modifies, packages, and ships them to their destinations.

Ribosomes — protein factories. Read mRNA instructions and assemble amino acids into proteins. Found free in cytoplasm or attached to rough ER. Cells can have millions.

Lysosomes — the recycling center. Contain digestive enzymes that break down cellular waste, damaged organelles, and foreign material.

Cell cycle and division:
Mitosis — cell division producing two genetically identical daughter cells. Used for growth and repair.
Meiosis — cell division producing four genetically unique gametes (sperm or egg) with half the chromosomes. Used for reproduction. The source of genetic diversity.

Cell communication: Cells don't work in isolation. They send and receive chemical signals (hormones, neurotransmitters) that coordinate activity across the body. Cancer often results from failures in cell communication — cells that ignore signals to stop dividing."`,
      explore: `"Cell investigation:

1. Create a detailed labeled diagram of an animal cell with all organelles covered in this lesson. For each organelle, write: its function and what would happen if it were missing.

2. Mitochondria have their own DNA — separate from the cell's nuclear DNA — and reproduce independently within the cell. Research the endosymbiotic theory: how did mitochondria come to be inside cells? What evidence supports this theory?

3. Cancer is described as a failure of cell communication. Research one type of cancer: what specific cell process fails? What treatments target that failure?

[Drawing or text input]"`,
      quickcheck: {
        question: "The mitochondria's own DNA is evidence that:",
        options: ["A) All organelles once had their own DNA", "B) Mitochondria were once free-living bacteria engulfed by a host cell (endosymbiosis) ✅", "C) Mitochondria can survive outside cells", "D) DNA is found throughout the cell, not just the nucleus"],
        correctIndex: 1,
        explanation: "Mitochondrial DNA is a relic of their independent evolutionary origin — endosymbiosis theory proposes that mitochondria were once free-living bacteria engulfed by ancestral eukaryotic cells."
      },
      quiz: [
    {
      question: "The Golgi apparatus functions like:",
      options: ["A) A power plant converting fuel to energy", "B) A recycling center breaking down waste", "C) A postal system — receiving, modifying, packaging and shipping proteins ✅", "D) A manufacturing plant building amino acids"],
      correctIndex: 2
    },
    {
      question: "Meiosis differs from mitosis because:",
      options: ["A) Meiosis produces identical copies; mitosis produces variety", "B) Meiosis produces four genetically unique cells with half the chromosomes — for reproduction ✅", "C) Only meiosis occurs in animal cells", "D) Meiosis is faster than mitosis"],
      correctIndex: 1
    },
    {
      question: "The cell membrane is described as selectively permeable, meaning:",
      options: ["A) It allows nothing to pass through", "B) It allows everything to pass freely", "C) It controls what enters and exits the cell ✅", "D) It changes permeability based on temperature only"],
      correctIndex: 2
    },
    {
      question: "Ribosomes function as:",
      options: ["A) Energy producers for the cell", "B) Waste disposal systems", "C) Protein factories — reading mRNA and assembling amino acids into proteins ✅", "D) Lipid production centers"],
      correctIndex: 2
    },
    {
      question: "Cancer is often described as:",
      options: ["A) Cells dying too quickly", "B) Foreign cells invading the body", "C) A failure of cell communication — cells ignoring signals to stop dividing ✅", "D) Organelles failing to function"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you just mastered the building block of all life on Earth. Every organism that has ever lived is made of cells following the same fundamental rules. You're a Cell Master — and that knowledge is the foundation of medicine, biology, and the future of human health. Cells are where every disease starts. And where every cure begins."

[Badge: Cell Master]`
    }
  },

  {
    id: "level3-cosmos-science-2",
    level: 3,
    subject: "Cosmos & Science",
    unit: "Unit 3: Biology & Life Sciences",
    lessonNumber: 2,
    title: "DNA, Genetics & Heredity",
    guide: "Sage",
    avatar: "sage",
    badge: "Genome Explorer",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we decode the instruction manual of life — DNA. Understanding genetics is understanding why you look the way you look, why some diseases run in families, why identical twins can develop differently, and why the future of medicine will be written in the language of genes. This is biology at its most fundamental."`,
      spark: `"The Human Genome Project — completed in 2003 after 13 years and $3 billion — sequenced all 3.2 billion base pairs of human DNA. Today you can sequence a human genome in 24 hours for about $200. CRISPR gene editing, developed in 2012, allows scientists to edit specific genes with a precision previously impossible. We can now rewrite the code of life. What questions should we be asking about this power?"`,
      learn: `"DNA (deoxyribonucleic acid) is the molecule that carries genetic information in all living organisms.

Structure of DNA:
DNA is a double helix — two strands wound around each other like a twisted ladder. The 'rungs' are made of base pairs: Adenine (A) pairs with Thymine (T), and Cytosine (C) pairs with Guanine (G). The sequence of these bases encodes genetic information.

In humans: ~3.2 billion base pairs, organized into 46 chromosomes (23 pairs) contained in the cell nucleus. One set of 23 chromosomes comes from each parent.

From DNA to protein:
1. Transcription — a gene (segment of DNA) is 'read' and copied into messenger RNA (mRNA) in the nucleus.
2. Translation — mRNA travels to a ribosome, where its sequence is read and used to assemble a chain of amino acids into a protein.
3. Every 3 bases (codon) codes for one specific amino acid. This is the genetic code — universal across nearly all life on Earth.

Genes and inheritance:
Genes are segments of DNA that encode specific proteins or functional RNAs. Alleles are different versions of the same gene.

Dominant vs recessive inheritance (Mendel):
Dominant alleles are expressed even with one copy (e.g., brown eye color)
Recessive alleles require two copies to be expressed (e.g., blue eye color)

Punnett squares predict probability of offspring traits based on parent genotypes.

Genotype vs phenotype:
Genotype — the actual genetic sequence (what alleles you have)
Phenotype — the observable trait (what you look like, how you function)
The same genotype can produce different phenotypes depending on environment (epigenetics!)

Mutation — any change in the DNA sequence:
Some are neutral (no effect), some are beneficial (drive evolution), some are harmful (cause disease).
Mutations can be: inherited (present in all cells from birth), acquired (occurring during life), or induced (by radiation, chemicals).

Modern genetics:
CRISPR-Cas9 — a molecular 'find and replace' tool that can edit specific DNA sequences with unprecedented precision. Developed from bacteria's immune system. Now being used in clinical trials to treat sickle cell disease, some cancers, and inherited blindness.

Gene therapy — introducing, altering, or silencing genes to treat disease. The first approved gene therapy was in 2017.

Personalized medicine — using an individual's genetic profile to predict disease risk and tailor treatment. The era of one-size-fits-all medicine is ending."`,
      explore: `"Genetics in action:

1. Draw a Punnett square for a genetic cross between:
- A parent with brown eyes (Bb) and a parent with blue eyes (bb)
- Predict: what percentage of their children would have brown eyes? Blue eyes?

2. CRISPR ethics debate: Scientists have already used CRISPR to edit human embryos. Research the 2018 'designer baby' case (He Jiankui, China). What did he do? Why did the scientific community respond so strongly? What ethical lines were crossed?

3. Research one genetic disease (sickle cell anemia, Huntington's disease, cystic fibrosis, or another). Explain: What goes wrong at the DNA level? What are current treatment options? Is gene therapy being developed for it?

[Text input]"`,
      quickcheck: {
        question: "In DNA base pairing, Adenine (A) pairs with:",
        options: ["A) Guanine (G)", "B) Cytosine (C)", "C) Thymine (T) ✅", "D) Another Adenine (A)"],
        correctIndex: 2,
        explanation: "DNA base pairing is specific: A always pairs with T (Adenine-Thymine), and C always pairs with G (Cytosine-Guanine). This complementary base pairing is what makes DNA replication and transcription possible."
      },
      quiz: [
    {
      question: "A codon in the genetic code is:",
      options: ["A) A single DNA base", "B) A pair of DNA bases", "C) A sequence of 3 bases that codes for one specific amino acid ✅", "D) A complete gene sequence"],
      correctIndex: 2
    },
    {
      question: "The difference between genotype and phenotype is:",
      options: ["A) Genotype is the trait; phenotype is the gene", "B) Genotype is the actual genetic sequence; phenotype is the observable trait produced ✅", "C) They are the same thing expressed differently", "D) Genotype is inherited; phenotype is entirely environmental"],
      correctIndex: 1
    },
    {
      question: "A recessive allele is expressed when:",
      options: ["A) One copy is present in the genome", "B) The dominant allele mutates", "C) Two copies of the recessive allele are present ✅", "D) The environment activates it"],
      correctIndex: 2
    },
    {
      question: "CRISPR-Cas9 was originally derived from:",
      options: ["A) Fruit fly genetics research", "B) Bacteria's immune defense system ✅", "C) Human cancer cell research", "D) Computer modeling of DNA"],
      correctIndex: 1
    },
    {
      question: "Personalized medicine uses:",
      options: ["A) Medicine customized by the patient's preferences", "B) An individual's genetic profile to predict disease risk and tailor treatment ✅", "C) Smaller doses of standard medications", "D) Alternative medicine personalized per individual"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you just decoded the language of life. Every organism on Earth — from bacteria to blue whales — uses the same genetic code you just learned. The A-T, C-G base pairs are universal. You're a Genome Explorer — and the tools being developed right now to edit, read, and harness this code will define medicine and biology for the rest of your lifetime."

[Badge: Genome Explorer]`
    }
  },

  {
    id: "level3-cosmos-science-3",
    level: 3,
    subject: "Cosmos & Science",
    unit: "Unit 3: Biology & Life Sciences",
    lessonNumber: 3,
    title: "Evolution — Life's Great Algorithm",
    guide: "Sage",
    avatar: "sage",
    badge: "Evolution Scholar",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study the most powerful explanatory theory in all of biology — and arguably one of the most important ideas in the history of human thought. Evolution. The mechanism by which all life on Earth — from the simplest bacterium to the human brain — came to be. Darwin called it 'descent with modification.' Biologists today call it the central unifying principle of biology."`,
      spark: `"Before Darwin, the most popular explanation for the diversity of life was that each species was separately and purposefully designed — and had existed essentially unchanged since creation. Then Darwin spent 5 years sailing the world on the Beagle, observed remarkable patterns, and spent 20 more years building a theory so well-supported that he was terrified to publish it. Why do you think an explanation for how life diversifies would be so controversial?"`,
      learn: `"Evolution is change in heritable characteristics of populations over successive generations.

Charles Darwin's theory of evolution by natural selection (1859) has four components:
1. Variation — individuals in a population vary in heritable traits
2. Inheritance — traits are passed from parents to offspring
3. Differential reproduction — some individuals survive and reproduce more than others
4. Selection — traits that increase survival and reproduction become more common over generations

This simple process, given enough time (billions of years), produces all the diversity of life on Earth from common ancestors.

Evidence for evolution:

The fossil record — shows progressive changes in species over geological time. Transitional fossils like Tiktaalik (between fish and land animals) show intermediate forms.

Comparative anatomy — homologous structures (same underlying bones in human arm, whale flipper, bat wing, and dog leg) reveal common ancestry. Vestigial structures (human coccyx, whale hip bones) are remnants of ancestral features no longer needed.

Molecular evidence — DNA comparison shows the degree of relatedness. Humans and chimpanzees share ~98.7% of DNA. All life uses the same genetic code. These are not coincidences — they are evidence of common ancestry.

Direct observation — evolution has been observed in real time in bacteria, insects, and other fast-reproducing organisms. Antibiotic resistance is evolution happening right now.

Key concepts:

Natural selection — survival of the fittest (more accurately: survival of the 'fit enough to reproduce'). Fitness means reproductive success, not physical strength.

Genetic drift — random changes in allele frequencies in small populations. Can drive evolution without selection.

Speciation — the emergence of new species when populations become reproductively isolated and diverge over time. Geographic isolation (like Darwin's Galapagos finches) is a common mechanism.

Common ancestry — all life on Earth shares a common ancestor. Humans are not descended from modern chimpanzees — both are descended from a common ancestor that lived ~6-7 million years ago.

Evolution and humans: Homo sapiens appeared about 300,000 years ago. We share 50% of our DNA with bananas. We are deeply related to all life on Earth. This is not a humbling thought — it is a profound one. Every living thing is our extended family."`,
      explore: `"Evolutionary thinking:

1. Antibiotic resistance is evolution in action. Research how bacteria evolve resistance to antibiotics. What does this tell us about:
a) How natural selection works in real time?
b) Why doctors warn against overusing antibiotics?
c) What the future of medicine might look like?

2. Darwin's finches in the Galapagos Islands were crucial evidence for his theory. Research how they illustrate speciation. Draw a simple diagram showing how one ancestor species gave rise to multiple species on different islands.

3. Some people argue evolution conflicts with religious belief. Research examples of scientists who are both devoutly religious and fully accept evolutionary theory. Is the conflict actually necessary? What is it really about?

[Text input]"`,
      quickcheck: {
        question: "In evolution, 'fitness' means:",
        options: ["A) Physical strength and speed", "B) Intelligence and adaptability", "C) Reproductive success — having offspring that survive to reproduce ✅", "D) Surviving the longest individual lifespan"],
        correctIndex: 2,
        explanation: "In evolutionary biology, fitness specifically means reproductive success — an organism is 'fit' if it successfully passes its genes to the next generation, regardless of physical strength or intelligence."
      },
      quiz: [
    {
      question: "Homologous structures (like human arms, whale flippers, and bat wings) provide evidence for:",
      options: ["A) Convergent evolution from different ancestors", "B) Common ancestry — the same underlying bones modified for different functions ✅", "C) Intelligent design of similar structures", "D) Parallel evolution happening simultaneously"],
      correctIndex: 1
    },
    {
      question: "Antibiotic resistance is significant to evolution because:",
      options: ["A) It shows evolution only happens in bacteria", "B) It demonstrates evolution by natural selection happening in real time ✅", "C) It proves evolution can be reversed", "D) It shows that natural selection requires millions of years"],
      correctIndex: 1
    },
    {
      question: "Speciation occurs when:",
      options: ["A) A species becomes extinct and is replaced by a new one", "B) A population becomes too large to survive together", "C) Populations become reproductively isolated and diverge over time ✅", "D) Natural selection eliminates weaker members of a species"],
      correctIndex: 2
    },
    {
      question: "Humans and chimpanzees share approximately what percentage of DNA?",
      options: ["A) 75%", "B) 88%", "C) 95%", "D) 98.7% ✅"],
      correctIndex: 3
    },
    {
      question: "Darwin's theory of natural selection requires: (all four apply)",
      options: ["A) Variation in heritable traits ✅", "B) Inheritance — passing traits to offspring ✅", "C) Differential reproduction ✅", "D) Selection — favorable traits becoming more common ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — you just understood one of humanity's most important ideas. Evolution explains the history of all life, the diversity of species, the origin of complex structures, and the relationships between all living things. You're an Evolution Scholar — and that means you can read the history of life written in every genome, fossil, and comparative anatomy. All life is family."

[Badge: Evolution Scholar]`
    }
  },

  {
    id: "level3-mathematics-1",
    level: 3,
    subject: "Mathematics",
    unit: "Unit 3: Advanced Mathematical Thinking",
    lessonNumber: 1,
    title: "Functions, Graphs & Linear Relationships",
    guide: "Byte",
    avatar: "byte",
    badge: "Function Master",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! At Level 3, mathematics becomes a language for describing relationships in the world. Today we master functions — one of the most fundamental ideas in all of mathematics. Functions describe how change in one thing causes change in another. They are the mathematical backbone of economics, physics, engineering, and data science."`,
      spark: `"The speed of a falling object, the growth of a population, the depreciation of a car, the spread of a virus, the temperature of a cooling cup of coffee — all of these relationships can be expressed as mathematical functions. When you know the function, you can predict the future. Epidemiologists used functions to predict the spread of COVID-19. Climate scientists use functions to project temperature rise. Why is being able to describe the relationship between variables so powerful?"`,
      learn: `"A function is a rule that assigns exactly one output to each input. Written f(x) = [rule], where x is the input and f(x) is the output.

Key terminology:
Domain — the set of all valid input values
Range — the set of all possible output values
Input — the independent variable (what you control or measure); typically x
Output — the dependent variable (what results); typically y or f(x)

Linear functions: f(x) = mx + b
m = slope (rate of change — how steep the line is)
b = y-intercept (where the line crosses the y-axis)

Interpreting slope:
Positive slope — as x increases, y increases
Negative slope — as x increases, y decreases
Slope = 0 — horizontal line, no change
Steeper slope = faster rate of change

Calculating slope: m = (y₂ - y₁) / (x₂ - x₁) — rise over run — the change in y divided by the change in x between any two points.

Reading graphs:
x-axis — typically represents time, quantity, or the independent variable
y-axis — typically represents value, amount, or the dependent variable
Linear graphs are straight lines
The slope tells you the rate of change
The y-intercept tells you the starting value

Real-world linear relationships:
Distance = speed × time (if speed is constant)
Cost = price per unit × quantity + fixed fee
Temperature conversion: F = 1.8C + 32

Systems of linear equations — when two lines intersect, the intersection point is the solution that satisfies both equations simultaneously. Real application: break-even analysis — at what sales volume does revenue equal costs?

Graphing tool: Any function can be visualized at Desmos.com (free graphing calculator).

Why functions matter:
Every algorithm is a function. Every physical law can be expressed as a function. Machine learning models are compositions of functions. Understanding functions is understanding the mathematical structure of the world."`,
      explore: `"Function investigation:

1. Real-world function: A phone plan charges $25 per month plus $0.10 per text message.
a) Write this as a function: C(t) = ?
b) What is the slope? What does it represent?
c) What is the y-intercept? What does it represent?
d) How much would 200 texts cost? 500 texts?
e) At what point would it be cheaper to switch to a plan that costs $50/month with unlimited texts?

2. Graph three functions on the same axes (use Desmos or draw by hand):
y = 2x + 1, y = -x + 5, y = 3
Describe what each graph looks like and what the slope tells you.

3. Break-even analysis: You want to start a business selling handmade cards. Materials cost $50 startup + $1.50 per card. You sell each card for $4. Write cost and revenue as functions. Find the break-even point.

[Math work input]"`,
      quickcheck: {
        question: "In the linear function f(x) = mx + b, what does 'm' represent?",
        options: ["A) The y-intercept — where the line starts", "B) The slope — the rate of change ✅", "C) The maximum value of the function", "D) The x-intercept — where the line crosses the x-axis"],
        correctIndex: 1,
        explanation: "In f(x) = mx + b, m is the slope — the rate of change — how much y changes for each unit increase in x. A slope of 3 means y increases by 3 for every 1-unit increase in x."
      },
      quiz: [
    {
      question: "If slope = (y₂ - y₁) / (x₂ - x₁) and you have points (2, 4) and (6, 12), the slope is:",
      options: ["A) 1", "B) 2 ✅", "C) 3", "D) 4"],
      correctIndex: 1
    },
    {
      question: "A negative slope means:",
      options: ["A) The line goes up from left to right", "B) The function has no real-world application", "C) As x increases, y decreases ✅", "D) The line is horizontal"],
      correctIndex: 2
    },
    {
      question: "The break-even point is where:",
      options: ["A) Profit is maximized", "B) Revenue equals total costs ✅", "C) The slope equals zero", "D) The y-intercept is zero"],
      correctIndex: 1
    },
    {
      question: "A domain restriction means:",
      options: ["A) The function only works for certain mathematical operations", "B) Only certain input values are valid for the function ✅", "C) The function's range is limited", "D) The graph only extends to certain axes"],
      correctIndex: 1
    },
    {
      question: "Functions are fundamental to modern technology because:",
      options: ["A) Computers use only linear functions", "B) All algorithms, physical laws, and machine learning models are built on functions ✅", "C) Functions were invented specifically for computers", "D) Only mathematicians need to understand functions"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you can now speak the language of relationships. Functions describe how the world works — from physics to finance to algorithms. You're a Function Master — and that means you can model reality mathematically, predict outcomes, and build things that work. Every data scientist, engineer, and economist works with these ideas every day."

[Badge: Function Master]`
    }
  },

  {
    id: "level3-mathematics-2",
    level: 3,
    subject: "Mathematics",
    unit: "Unit 3: Advanced Mathematical Thinking",
    lessonNumber: 2,
    title: "Probability & Statistical Reasoning",
    guide: "Byte",
    avatar: "byte",
    badge: "Stats Thinker",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we learn the mathematics of uncertainty — probability and statistics. These are the tools used by doctors to evaluate treatments, scientists to evaluate evidence, governments to make policy, casinos to ensure they always profit, and data scientists to find meaning in oceans of data. Knowing this math makes you a better reasoner in almost every domain of life."`,
      spark: `"A study published in a prestigious journal claims that eating chocolate reduces the risk of heart disease. The sample size was 15 people. Another study claims a new drug works — but 40% of the 'improvement' was seen in the placebo group. A politician claims crime has increased — but fails to mention population grew 30% while crime rose 5%. How do you evaluate these claims? What questions should you always ask?"`,
      learn: `"Probability is the mathematics of how likely events are to occur.

Basic probability: P(event) = favorable outcomes / total possible outcomes
P(rolling a 3 on a fair die) = 1/6 ≈ 0.167 = 16.7%

Probability rules:
P(event) is always between 0 (impossible) and 1 (certain)
P(A or B) = P(A) + P(B) — for mutually exclusive events
P(A and B) = P(A) × P(B) — for independent events
P(not A) = 1 - P(A)

Conditional probability: P(A|B) = probability of A given that B has occurred. Basis for Bayesian reasoning — updating beliefs based on new evidence.

Statistical measures:
Mean (average) = sum of values / count of values
Median = the middle value when sorted (resistant to outliers)
Mode = most frequently occurring value
Standard deviation — how spread out values are from the mean. Low SD = clustered tightly. High SD = widely spread.

Why mean vs. median matters:
Bill Gates walks into a bar. The mean income of everyone in the bar instantly becomes millions. But the median income barely changes. When data has extreme outliers (like income), median is more informative.

Sample size and significance:
Larger samples produce more reliable results. A poll of 10 people vs. 10,000 — both can have 60% saying yes, but they mean very different things.
Statistical significance — p-value — the probability that results this extreme would occur by chance. p < 0.05 (less than 5% chance of coincidence) is standard threshold for 'significance.' But this is widely misunderstood and misused.

Correlation vs. causation:
Correlation — two variables tend to change together. Doesn't mean one causes the other.
Classic example: Ice cream sales and drowning rates are highly correlated. They share a common cause (hot weather), not causation.
To establish causation, you need: correlation, temporal order (cause before effect), and elimination of alternative explanations (ideally a controlled experiment).

Bias in data:
Selection bias — the sample isn't representative of the population
Confirmation bias — looking for evidence that supports existing beliefs
Survivorship bias — studying successes and ignoring failures

Data literacy — the ability to read, interpret, question, and communicate with data — is one of the most important skills of the 21st century."`,
      explore: `"Statistical thinking:

1. Calculate mean, median, and mode for this dataset of test scores: 72, 85, 90, 85, 43, 92, 88, 85, 78, 95
Which measure best represents this dataset? Why? What does the outlier (43) do to the mean?

2. Evaluate a real statistical claim:
Find a statistic from a news headline this week (or use: 'Violent video games cause aggression — study shows players are 2x more likely to show aggressive behavior'). Apply the questions:
- What is the sample size?
- Is this correlation or causation?
- Could there be confounding variables?
- How representative is the sample?

3. The gambler's fallacy: A coin has landed heads 7 times in a row. Many people think tails is 'due.' What is the actual probability of tails on the next flip? Why does this fallacy occur?

[Math work input]"`,
      quickcheck: {
        question: "The median is preferred over the mean when:",
        options: ["A) The dataset has very few values", "B) All values are similar in size", "C) The data has extreme outliers that would distort the average ✅", "D) You want to find the most common value"],
        correctIndex: 2,
        explanation: "The median is resistant to outliers — extreme values don't shift it much. When a dataset has outliers (like income data including billionaires), median gives a more accurate picture of the 'typical' value than the mean."
      },
      quiz: [
    {
      question: "Ice cream sales and drowning rates are correlated because:",
      options: ["A) Ice cream makes people reckless near water", "B) They share a common cause (hot weather) — this is correlation, not causation ✅", "C) More people swim when eating ice cream", "D) The data is a coincidence with no explanation"],
      correctIndex: 1
    },
    {
      question: "A p-value of 0.05 means:",
      options: ["A) There is a 5% chance the hypothesis is true", "B) There is a 5% chance results this extreme would occur by chance if the null hypothesis is true ✅", "C) The study has 95% accuracy", "D) 5% of participants showed the effect"],
      correctIndex: 1
    },
    {
      question: "Survivorship bias refers to:",
      options: ["A) Studying only people who survived a disaster", "B) Analyzing successes while ignoring failures — skewing conclusions about what works ✅", "C) Statistical methods that survive peer review", "D) Measuring long-term survival rates in medical studies"],
      correctIndex: 1
    },
    {
      question: "For two independent events, P(A and B) equals:",
      options: ["A) P(A) + P(B)", "B) P(A) - P(B)", "C) P(A) × P(B) ✅", "D) P(A) / P(B)"],
      correctIndex: 2
    },
    {
      question: "Data literacy is described as critically important in the 21st century because:",
      options: ["A) Everyone will work in data science careers", "B) Data is used to make decisions in medicine, policy, business, and media — the ability to question it is essential ✅", "C) Statistics is required for all academic degrees", "D) Data replaces all other forms of evidence"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you now think like a scientist and a critical reasoner. You can evaluate claims, spot statistical manipulation, and understand what data actually says vs. what people claim it says. You're a Stats Thinker — and in a world drowning in data and misleading headlines, that skill is genuinely rare and valuable."

[Badge: Stats Thinker]`
    }
  },

  {
    id: "level3-mathematics-3",
    level: 3,
    subject: "Mathematics",
    unit: "Unit 3: Advanced Mathematical Thinking",
    lessonNumber: 3,
    title: "Introduction to Calculus Thinking",
    guide: "Byte",
    avatar: "byte",
    badge: "Calculus Pioneer",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we touch the edge of one of the most powerful mathematical tools ever developed — calculus. Newton and Leibniz independently invented it in the 1600s to describe motion, change, and the behavior of curves. Today calculus is behind every physics equation, every engineering design, every economic model, every animation algorithm, and every machine learning system. You don't need to master it today — but you do need to understand what it does."`,
      spark: `"How fast is a car moving at exactly one instant in time — not over a period, but at a single frozen moment? How do you find the exact area under a curve that isn't a simple shape? How did Newton describe the precise motion of planets? These questions seem impossible with ordinary algebra. Calculus was invented specifically to answer them. What would you do if you needed math that didn't exist yet?"`,
      learn: `"Calculus is the mathematics of continuous change and accumulation. It has two main branches:

Differential calculus — the study of rates of change and slopes
Integral calculus — the study of accumulation and area

The core concept: limits
A limit asks: What value does a function approach as the input gets closer and closer to a particular value?
lim(x→2) of (x² - 4)/(x - 2) = 4
This underpins everything in calculus.

The derivative — measuring instantaneous change:

Average rate of change = (f(x₂) - f(x₁)) / (x₂ - x₁) — this is slope of a line between two points

Instantaneous rate of change = the derivative — the slope of the tangent line at a single point. Found by taking the limit as the two points get infinitely close together.

Notation: f'(x) or dy/dx (Leibniz notation)

Basic derivative rules:
d/dx of xⁿ = nxⁿ⁻¹ (power rule)
d/dx of a constant = 0
d/dx of (f + g) = f' + g'

Examples:
If f(x) = x², then f'(x) = 2x (at any point x, the slope equals 2x)
If position = t², then velocity = 2t (the derivative of position is velocity)
If velocity = 2t, then acceleration = 2 (the derivative of velocity is acceleration)

The integral — measuring accumulation:
Integration is the reverse of differentiation. If the derivative of x² is 2x, then the integral of 2x is x².

Integrals measure area under curves — including curves that have no simple formula for area. This is how you calculate the total distance traveled when speed varies, total drug accumulation in the bloodstream, or the volume of a complex 3D shape.

The Fundamental Theorem of Calculus:
Differentiation and integration are inverse operations — they undo each other. This elegant connection between the two branches was one of the greatest mathematical discoveries in history.

Calculus everywhere:
Physics — F = ma (force = mass × acceleration) requires derivatives. Orbital mechanics. Electromagnetism.
Engineering — optimizing designs, stress analysis, fluid dynamics
Economics — marginal cost, marginal revenue (derivatives of cost and revenue functions)
Medicine — drug dosage modeling, epidemiological spread models
Machine learning — gradient descent (finding minimum error) uses derivatives
Animation — smooth curves, motion paths"`,
      explore: `"Calculus thinking:

1. Conceptual understanding:
a) If a car's position function is p(t) = 3t² (position in meters, t in seconds), what is the velocity function v(t)?
b) What is the velocity at t = 2 seconds? At t = 5 seconds?
c) At what time is the car moving fastest? Slowest?

2. The connection to real life: Netflix uses calculus to optimize video streaming (rates of data flow). Spotify uses it for audio compression. GPS uses it for signal processing. Choose one application of calculus in technology and explain what mathematical problem it solves.

3. Isaac Newton and Gottfried Leibniz both invented calculus independently at roughly the same time — leading to a bitter priority dispute. Research this history. What does it suggest about how mathematical and scientific ideas emerge?

[Math work input]"`,
      quickcheck: {
        question: "The derivative of a function measures:",
        options: ["A) The area under the function's curve", "B) The total accumulated value of the function", "C) The instantaneous rate of change — the slope at a single point ✅", "D) The maximum and minimum values of the function"],
        correctIndex: 2,
        explanation: "The derivative measures the instantaneous rate of change at a single point — like the exact speed of a car at one specific moment, found by looking at what the average rate of change approaches as the time interval shrinks toward zero."
      },
      quiz: [
    {
      question: "Using the power rule, the derivative of x³ is:",
      options: ["A) x²", "B) 3x ✅", "C) 3x²", "D) 3x⁴"],
      correctIndex: 1
    },
    {
      question: "In physics, if position = t², then velocity (derivative of position) =",
      options: ["A) t", "B) t²", "C) 2t ✅", "D) 2t²"],
      correctIndex: 2
    },
    {
      question: "Integration is related to differentiation because:",
      options: ["A) They are completely different branches with no connection", "B) Integration is simply faster differentiation", "C) They are inverse operations — the Fundamental Theorem of Calculus ✅", "D) Integration was invented first and differentiation followed"],
      correctIndex: 2
    },
    {
      question: "Gradient descent in machine learning uses calculus to:",
      options: ["A) Create visual gradients in images", "B) Find the minimum error by following the direction of decreasing derivative ✅", "C) Rank data in descending order", "D) Build neural network layers"],
      correctIndex: 1
    },
    {
      question: "Integrals calculate:",
      options: ["A) The rate of change at a single point", "B) The slope of a curve at any point", "C) Accumulation and area under curves — including complex shapes ✅", "D) The maximum value of a function"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you just touched the edge of mathematics that changed civilization. Newton used calculus to prove Kepler's laws of planetary motion. Engineers use it to build bridges and rockets. Machine learning researchers use it to train every AI model that exists. You're a Calculus Pioneer — and the conceptual understanding you have today is the foundation for mastery that will open extraordinary doors."

[Badge: Calculus Pioneer]`
    }
  },

  {
    id: "level3-language-arts-1",
    level: 3,
    subject: "Language Arts",
    unit: "Unit 3: Advanced Writing & Analysis",
    lessonNumber: 1,
    title: "Literary Analysis & Critical Reading",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Literary Analyst",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! At Level 3, we move from reading stories to understanding how and why they work — the craft, the meaning, the context. Literary analysis is the skill of reading actively and critically: asking not just what happened, but what it means, how it's constructed, and why the author made every choice. This is one of the most transferable thinking skills in existence."`,
      spark: `"F. Scott Fitzgerald wrote that in 'The Great Gatsby,' the green light at the end of Daisy's dock represents the American Dream — always visible, always across the water, perpetually out of reach. A single image carrying an entire cultural critique. Toni Morrison said she wrote in ways that 'assumed the intelligence of the reader.' How does a writer embed meaning in symbols, structure, and style — and how do we learn to see it?"`,
      learn: `"Literary analysis is the close examination of a text to understand how it creates meaning and achieves its effects.

Elements of fiction:

Plot — the sequence of events. Freytag's pyramid: exposition → rising action → climax → falling action → resolution. But great literature often subverts or complicates this structure.

Character — people in the story. Flat characters (one-dimensional). Round characters (complex, contradictory, surprising). Dynamic characters change. Static characters remain the same. How characters change reveals theme.

Setting — time and place. Never neutral. The setting in great literature embodies theme (the overwhelming, suffocating house in 'The Yellow Wallpaper'; the oppressive heat in 'Things Fall Apart').

Theme — the central insight or argument the work makes about human experience. NOT the topic (love, war, identity). The theme is what the work says about that topic. 'Love is selfish' is a theme. 'Love' is a topic.

Point of view (POV) — who tells the story and what they know:
First person (I) — intimate, subjective, unreliable
Third person limited — follows one character's perspective
Third person omniscient — narrator knows all
Second person (you) — rare, direct, often unsettling

Symbolism — objects, colors, or events representing larger ideas:
Green = hope, envy, or nature (context determines meaning)
Water often = change, purification, or the unconscious
Doors and thresholds = transitions and choices

Tone vs. mood — tone is the author's attitude toward the subject; mood is the emotional atmosphere the reader experiences. Both created through word choice (diction) and syntax.

Irony — three types:
Verbal irony — saying the opposite of what you mean (sarcasm)
Situational irony — what happens is opposite to what's expected
Dramatic irony — the audience knows something characters don't

The critical essay structure:
1. Claim (thesis) — your interpretive argument about the text
2. Evidence — specific textual quotes or examples
3. Reasoning — explaining how the evidence supports your claim
4. Contextualization — connecting to broader literary, historical, or cultural context

A strong literary thesis doesn't summarize the text — it makes an argument. 'In Lord of the Flies, Golding argues that civilization is a fragile construct beneath which human violence lurks' is a thesis. 'Lord of the Flies is about boys on an island' is a summary."`,
      explore: `"Literary analysis practice:

1. Choose any book, story, or film you know well. Identify:
- The central theme (not topic — what does it argue?)
- One symbol and what it represents
- The point of view and how it shapes our understanding
- One example of irony (any type)

2. Write a literary analysis paragraph using the claim-evidence-reasoning structure:
Claim: State an interpretive argument about the text
Evidence: Quote or describe a specific moment
Reasoning: Explain how this evidence proves your claim

3. The narrator of a story can be unreliable — telling us their version of events that may not be accurate. Name one famous unreliable narrator from literature or film. What makes them unreliable? How does this affect the reader's understanding?

[Text input]"`,
      quickcheck: {
        question: "The difference between theme and topic in literature is:",
        options: ["A) They mean the same thing in literary analysis", "B) Topic is what the work is about; theme is what it argues about that topic ✅", "C) Theme is the main character's goal; topic is the setting", "D) Topic is more important than theme in analysis"],
        correctIndex: 1,
        explanation: "Topic is the subject (love, war, identity). Theme is what the work says about that topic — the insight or argument it makes. 'Love destroys as often as it creates' is a theme; 'love' is just a topic."
      },
      quiz: [
    {
      question: "Dramatic irony occurs when:",
      options: ["A) The author says the opposite of what they mean", "B) What happens is opposite to what was expected", "C) The audience knows something that the characters in the story don't ✅", "D) A character acts against their own best interest"],
      correctIndex: 2
    },
    {
      question: "A dynamic character is one who:",
      options: ["A) Has a very energetic personality", "B) Changes significantly as a result of the story's events ✅", "C) Appears in multiple scenes with vivid description", "D) Is the story's protagonist"],
      correctIndex: 1
    },
    {
      question: "First-person narration is considered potentially unreliable because:",
      options: ["A) The narrator uses 'I' which is informal", "B) It is intimate and subjective — the narrator only knows their own perspective ✅", "C) It was considered a lesser literary style historically", "D) The narrator often doesn't finish the story"],
      correctIndex: 1
    },
    {
      question: "A literary thesis is different from a summary because:",
      options: ["A) It is shorter than a summary", "B) It makes an interpretive argument rather than describing what happened ✅", "C) It focuses on the author rather than the text", "D) It includes only personal opinion without evidence"],
      correctIndex: 1
    },
    {
      question: "The setting in great literature is significant because:",
      options: ["A) It provides realistic background for the plot", "B) It is legally required to establish time and place", "C) It often embodies and reflects the work's central themes and emotional atmosphere ✅", "D) Setting is less important than character or plot"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you just gained the ability to read literature the way it was meant to be read — not just for plot, but for meaning, craft, and insight into human experience. You're a Literary Analyst — and that means every book you read from now on has a second, deeper layer available to you. Great literature rewards the careful reader."

[Badge: Literary Analyst]`
    }
  },

  {
    id: "level3-language-arts-2",
    level: 3,
    subject: "Language Arts",
    unit: "Unit 3: Advanced Writing & Analysis",
    lessonNumber: 2,
    title: "Journalism, Research & Investigative Writing",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Truth Seeker",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we enter journalism — one of the most vital professions in a democratic society. Not just reporting facts, but investigating, questioning, verifying, and holding power accountable. Great journalism has exposed government corruption, corporate fraud, and social injustice that would otherwise have remained hidden. In the age of misinformation, the skills of a journalist are skills every citizen needs."`,
      spark: `"The Watergate investigation (1972-1974) by Washington Post reporters Bob Woodward and Carl Bernstein ultimately led to the resignation of US President Richard Nixon. They verified every fact through at least two independent sources before publishing. The Pentagon Papers — leaked documents about US government deception during the Vietnam War — were published despite government attempts to suppress them. What makes investigative journalism worth the risks journalists sometimes take?"`,
      learn: `"Journalism is the collection, verification, and presentation of information about events, issues, and trends for a public audience.

Core journalistic values:
Accuracy — getting the facts right, above all else. A single error undermines credibility.
Fairness — representing multiple perspectives without distortion
Independence — reporting without being controlled by government, corporations, or personal interest
Accountability — holding powerful institutions and individuals responsible
Minimize harm — considering the impact of reporting on individuals, especially vulnerable ones

The inverted pyramid structure — how news articles are organized:
Lead (most important information): Who, What, When, Where, Why, How
Supporting details — adding context and evidence
Background — least essential information at the bottom

Why inverted? Editors can cut from the bottom without losing essential information. Readers who stop early still get the key facts.

The 5 Ws and H:
Who — the people involved
What — what happened
When — timing and sequence
Where — location and context
Why — motivation and cause
How — the process or method

Source verification:
Primary sources — documents, data, eyewitnesses, officials — directly involved
Secondary sources — accounts from others, experts who analyze primary material
The 'two-source rule' — verify facts with at least two independent sources
Anonymous sources — used when information would otherwise be unavailable; used with great caution

Misinformation vs. disinformation:
Misinformation — false information spread without intent to deceive
Disinformation — false information spread with deliberate intent to mislead
Both are dangerous; disinformation is often strategic

Fact-checking tools:
Snopes.com — urban legends and viral claims
FactCheck.org — political claims
PolitiFact — political fact-checking
Reverse image search (Google Images, TinEye) — verifying images
Wayback Machine (archive.org) — seeing what websites said in the past

Types of journalism:
Hard news — breaking, immediate events
Investigative — deep, long-form research into wrongdoing or systemic issues
Feature — longer, narrative stories about people or trends
Opinion/editorial — argument and commentary (marked clearly as such)
Data journalism — using data analysis to find and tell stories

The future of journalism: Traditional media business models have collapsed. Local news deserts — communities without local journalism — are linked to more corruption, less civic participation, and worse governance. Independent, nonprofit, and digital-native journalism organizations are filling some gaps."`,
      explore: `"Investigative journalism practice:

1. Choose a local or national issue you care about. Design an investigative article:
- What is the core question you're investigating?
- Who would you interview (minimum 3 sources)?
- What documents or data would you seek?
- What might powerful interests not want published?
- Write a lead paragraph using the inverted pyramid structure

2. Media literacy exercise: Find one viral claim on social media. Apply fact-checking:
- Can you verify the original source?
- Is the image or video used in a misleading context? (Try reverse image search)
- Who benefits from this claim being believed?
- What do reputable fact-checkers say about it?

3. The First Amendment in the US protects freedom of the press. Research one example where a government tried to suppress journalism. What happened? What was at stake?

[Text input]"`,
      quickcheck: {
        question: "The inverted pyramid structure in journalism puts:",
        options: ["A) Background information first, facts last", "B) The most important information first, least essential information last ✅", "C) Opinion before facts", "D) Historical context before current events"],
        correctIndex: 1,
        explanation: "The inverted pyramid puts the most critical facts (the lead) first, then supporting details, then background. This lets readers who stop early still get the key information."
      },
      quiz: [
    {
      question: "Disinformation differs from misinformation because:",
      options: ["A) Disinformation is less harmful", "B) Misinformation is always political", "C) Disinformation is false information spread with deliberate intent to mislead ✅", "D) They are the same thing with different names"],
      correctIndex: 2
    },
    {
      question: "The 'two-source rule' in journalism means:",
      options: ["A) Articles must quote two named sources", "B) Facts should be verified through at least two independent sources ✅", "C) Stories need approval from two editors", "D) Investigative pieces require two journalists"],
      correctIndex: 1
    },
    {
      question: "Local news deserts are linked to:",
      options: ["A) Lower reading rates in communities", "B) More independent journalism startups", "C) More corruption, less civic participation, and worse governance ✅", "D) Communities that prefer social media news"],
      correctIndex: 2
    },
    {
      question: "Primary sources in journalism are:",
      options: ["A) The most important sources used in any story", "B) Documents, data, eyewitnesses, or officials directly involved in the story ✅", "C) Government press releases and official statements", "D) Sources whose identities are protected"],
      correctIndex: 1
    },
    {
      question: "The core purpose of investigative journalism is:",
      options: ["A) Breaking news as fast as possible", "B) Writing engaging feature stories", "C) Deep research into wrongdoing or systemic issues, holding power accountable ✅", "D) Providing expert commentary on current events"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — journalism is democracy's immune system. When it's healthy, corruption gets exposed, power gets checked, and citizens stay informed. You're a Truth Seeker — someone who knows how to verify, investigate, and communicate with precision and integrity. In an age of misinformation, those skills are more important than ever."

[Badge: Truth Seeker]`
    }
  },

  {
    id: "level3-language-arts-3",
    level: 3,
    subject: "Language Arts",
    unit: "Unit 3: Advanced Writing & Analysis",
    lessonNumber: 3,
    title: "Debate, Rhetoric & the Art of Argument",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Master Debater",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we learn how to argue — not fight, but argue: building logical, evidence-based cases that persuade through reason. This is rhetoric — the ancient art of effective communication. Aristotle studied it in 350 BCE. It's still taught in law schools, used in politics, applied in advertising, and forms the foundation of written and spoken persuasion in every field."`,
      spark: `"Aristotle identified three modes of persuasion used in every argument: ethos (character and credibility), pathos (emotion and imagination), and logos (logic and reason). Most modern advertising uses pathos almost exclusively. Most scientific papers use logos almost exclusively. The most powerful speeches in history typically used all three. Can you think of examples of each from things you've seen or heard recently?"`,
      learn: `"Rhetoric is the art of using language effectively and persuasively. Aristotle's three appeals:

Ethos — credibility and character. Why should the audience trust you? Expertise, experience, reputation, integrity. 'As a doctor who has treated this condition for 20 years...' 'Research from Harvard's School of Public Health shows...'

Pathos — emotional appeal. Connecting to values, fears, desires, and imagination. Stories, vivid language, examples of real impact. MLK's 'I Have a Dream' — pathos. Showing a photo of a child affected by a policy — pathos. Not manipulation but authentic connection.

Logos — logical argument. Claims supported by evidence and reasoning. Statistics, studies, expert testimony, logical structure.

The strongest arguments combine all three in appropriate proportions.

Logical fallacies — errors in reasoning that seem valid but aren't:

Ad hominem — attacking the person, not their argument. 'You can't trust his views on economics — he can't even balance his personal budget.'

Straw man — misrepresenting someone's argument to make it easier to attack. 'She wants stricter gun laws — so she wants to ban all guns.'

False dichotomy — presenting only two options when more exist. 'You're either with us or against us.'

Slippery slope — claiming one step inevitably leads to extreme consequences without evidence. 'If we allow this, society will collapse.'

Appeal to authority — citing authority as evidence without actual logical justification. 'This celebrity says it works, so it must.'

Bandwagon — something is good because many people believe it. 'Everyone is doing it.'

Post hoc — A happened before B, therefore A caused B. 'I wore my lucky socks and won the game, so the socks caused the win.'

Argument structure (Toulmin model):
Claim — what you're arguing
Grounds — evidence supporting the claim
Warrant — the logical connection between the grounds and claim
Backing — support for the warrant
Qualifier — acknowledging the limits of your claim
Rebuttal — addressing counterarguments

Debate skills:
Prepare for both sides — understanding the strongest counterargument makes your own argument stronger
Acknowledge valid points — credibility comes from intellectual honesty
Ask good questions — often more powerful than statements
Stay focused on ideas, not people"`,
      explore: `"Argument construction and analysis:

1. Identify the logical fallacy in each:
a) 'My grandfather smoked his whole life and lived to 97 — smoking can't really be that bad.'
b) 'Scientists have been wrong before, so we can't trust the scientific consensus on climate change.'
c) 'If we allow schools to teach this, next they'll be controlling what we think at home.'
d) 'The other candidate wants to raise your taxes — he hates working families.'

2. Choose one of these positions and build a full argument using the Toulmin model:
- Social media should have a minimum age of 16
- Homework should be optional in schools
- All high school students should be required to take a financial literacy course

3. Strongest counterargument exercise: Argue the OPPOSITE of the position you chose in #2. What are its three strongest points? Does this change how you'd strengthen your original argument?

[Text input]"`,
      quickcheck: {
        question: "A straw man fallacy involves:",
        options: ["A) Attacking the character of your opponent", "B) Misrepresenting someone's argument in a weaker form to make it easier to attack ✅", "C) Using emotional appeals instead of logic", "D) Presenting only two options when more exist"],
        correctIndex: 1,
        explanation: "A straw man misrepresents the opponent's argument — often by exaggerating or oversimplifying it — into a 'straw man' version that's easier to knock down, rather than addressing the actual argument made."
      },
      quiz: [
    {
      question: "Ethos in an argument refers to:",
      options: ["A) The emotional impact of your message", "B) The logical structure of your evidence", "C) Your credibility and character — why the audience should trust you ✅", "D) The style and beauty of your language"],
      correctIndex: 2
    },
    {
      question: "Post hoc reasoning is flawed because:",
      options: ["A) It relies on emotion rather than evidence", "B) It assumes that because A preceded B, A caused B — without evidence of causation ✅", "C) It attacks the person making the argument", "D) It presents only two possible outcomes"],
      correctIndex: 1
    },
    {
      question: "Acknowledging counterarguments in debate is important because:",
      options: ["A) It shows weakness in your position", "B) It is required by debate rules", "C) Intellectual honesty actually builds credibility and strengthens your argument ✅", "D) It gives opponents more material to use against you"],
      correctIndex: 2
    },
    {
      question: "The warrant in the Toulmin argument model is:",
      options: ["A) The claim you are arguing for", "B) The evidence supporting your claim", "C) The logical connection explaining how the evidence supports the claim ✅", "D) The counterargument you need to address"],
      correctIndex: 2
    },
    {
      question: "Pathos-based arguments should be used because:",
      options: ["A) They're more effective than logical arguments in all cases", "B) Authentic emotional connection to values and real impact is a legitimate and powerful form of persuasion ✅", "C) Logical arguments are too complex for most audiences", "D) Pathos replaces the need for evidence"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you can now both construct powerful arguments and dismantle bad ones. Rhetoric isn't manipulation — it's the art of communicating truth effectively. You're a Master Debater — someone who can defend a position with evidence and logic, spot when someone is misleading them, and engage in disagreement with both conviction and intellectual honesty."

[Badge: Master Debater]`
    }
  },

  {
    id: "level3-history-world-1",
    level: 3,
    subject: "History",
    unit: "Unit 3: Power, Systems & Society",
    lessonNumber: 1,
    title: "How Governments Work",
    guide: "Ace",
    avatar: "ace",
    badge: "Civic Scholar",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study the systems that organize societies and determine who gets power, how decisions are made, and how rights are protected — or violated. Understanding how governments work is understanding the rules of the game that determines the conditions of billions of lives. And understanding the rules is the beginning of knowing how to change them."`,
      spark: `"In 1215, English barons forced King John to sign the Magna Carta — establishing that even the king was subject to the law. In 1789, the French Revolution abolished the absolute power of the monarchy. In 1948, the Universal Declaration of Human Rights claimed inherent rights for all humans regardless of nation. Each was a revolutionary claim: power has limits. Where does legitimate authority come from? And who decides?"`,
      learn: `"A government is a system of organization through which a political unit makes and enforces decisions for its community.

Major types of government:

Democracy — government by the people, directly or through elected representatives.
Direct democracy — citizens vote directly on laws (ancient Athens, some Swiss cantons, ballot initiatives)
Representative democracy (republic) — citizens elect representatives who make decisions on their behalf
Requires: free and fair elections, rule of law, protection of minority rights, civil liberties, freedom of press

Autocracy — power concentrated in one person or small group:
Dictatorship — one leader with unaccountable power
Totalitarianism — government controls all aspects of public AND private life (North Korea, Nazi Germany, Soviet Union under Stalin)

Oligarchy — power held by a small, privileged group (often economic or military elite)

Theocracy — government by religious authorities or principles

Monarchy:
Absolute monarchy — the monarch holds ultimate power
Constitutional monarchy — monarch's power limited by constitution; often ceremonial (UK, Sweden)

How democratic governments are structured:

Separation of powers — dividing government into branches to prevent any one from holding too much power:
Legislative — makes laws (Congress, Parliament)
Executive — enforces laws and administers government (President, Prime Minister)
Judicial — interprets laws and ensures they align with the constitution (Supreme Court)

Checks and balances — each branch has powers to limit the others:
Presidents veto laws; Congress overrides vetoes; Courts strike down unconstitutional laws

Federalism — dividing power between central government and regional governments (states/provinces)

Constitutions — the foundational laws that define a government's powers and citizens' rights. Often include bills of rights protecting individuals from government overreach.

The social contract (Rousseau, Locke) — citizens consent to be governed in exchange for protection of their rights. Legitimacy comes from the consent of the governed.

Civil society — the organizations and institutions between the individual and the government: nonprofits, unions, religious organizations, media. Essential to democracy — it's where citizens organize outside of government control.

Current global landscape: As of 2025, approximately half of the world's population lives in some form of democratic system. Authoritarian governments have been rising — 'democratic backsliding' has occurred in countries that once had stronger democratic institutions."`,
      explore: `"Civic investigation:

1. Analyze the government of the United States OR another country you choose:
- What type of government is it?
- How are the three branches structured and what are their powers?
- What checks and balances exist?
- What is in the Bill of Rights / foundational rights document?
- What are its most significant weaknesses or tensions right now?

2. Democratic backsliding — when democracies weaken. Research one recent example (Hungary, Turkey, or another). What specific changes occurred? What warning signs were there? What enabled it to happen?

3. If you were designing a government from scratch for a new nation of 1 million people, what systems would you include and why? What would you learn from history's successes and failures?

[Text input]"`,
      quickcheck: {
        question: "Separation of powers in government means:",
        options: ["A) Different countries have different powers", "B) The military, police, and government are kept separate", "C) Government is divided into branches (legislative, executive, judicial) to prevent any one from holding too much power ✅", "D) Power is separated between the wealthy and the poor"],
        correctIndex: 2,
        explanation: "Separation of powers divides government into the legislative (makes laws), executive (enforces laws), and judicial (interprets laws) branches — so no single person or group can control all government functions."
      },
      quiz: [
    {
      question: "Totalitarianism differs from ordinary dictatorship because:",
      options: ["A) Totalitarianism has multiple leaders", "B) Totalitarianism controls all aspects of both public AND private life ✅", "C) Totalitarianism uses only economic control", "D) Dictatorships are always more violent"],
      correctIndex: 1
    },
    {
      question: "Federalism distributes power between:",
      options: ["A) Different branches of the central government", "B) Citizens and their elected representatives", "C) Central government and regional governments (states/provinces) ✅", "D) The military and civilian leadership"],
      correctIndex: 2
    },
    {
      question: "Civil society is important to democracy because:",
      options: ["A) It replaces the need for formal government", "B) It provides a space where citizens organize independently outside of government control ✅", "C) It is the third branch of democratic government", "D) It manages economic institutions"],
      correctIndex: 1
    },
    {
      question: "The social contract theory proposes that government legitimacy comes from:",
      options: ["A) Military strength and territorial control", "B) Divine right of rulers", "C) The consent of the governed — citizens agree to be governed in exchange for rights protection ✅", "D) Economic prosperity and stability"],
      correctIndex: 2
    },
    {
      question: "A constitutional monarchy differs from an absolute monarchy because:",
      options: ["A) A constitutional monarch rules for life; an absolute monarch can be removed", "B) The constitutional monarch's power is limited by constitution — often ceremonial ✅", "C) Constitutional monarchies are more common today", "D) Absolute monarchies always have elected parliaments"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — understanding how governments work is understanding the most consequential systems in human civilization. They determine whether people live in freedom or fear, prosperity or poverty. You're a Civic Scholar — someone who knows how power is organized, how it can be abused, and how citizens can hold it accountable. That knowledge is a civic superpower."

[Badge: Civic Scholar]`
    }
  },

  {
    id: "level3-history-world-2",
    level: 3,
    subject: "History",
    unit: "Unit 3: Power, Systems & Society",
    lessonNumber: 2,
    title: "Economics — How Societies Decide",
    guide: "Ace",
    avatar: "ace",
    badge: "Economic Thinker",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study economics — the science of how societies make decisions about scarce resources. Not just money and markets, but the fundamental question every society must answer: who gets what, and how is that decided? Understanding economics is understanding the system that shapes the conditions of every human life."`,
      spark: `"Every society in history has had to answer the same three questions: What will be produced? How will it be produced? For whom will it be produced? Ancient empires answered these questions through central command. Markets answer them through price signals and competition. Mixed economies blend both. Each answer produces radically different outcomes. Why is there no single 'right' answer that all societies agree on?"`,
      learn: `"Economics is the study of how individuals, businesses, and societies allocate scarce resources to satisfy unlimited wants.

Scarcity — the fundamental economic problem: resources are limited, but human wants are unlimited. Every choice involves a trade-off — choosing one thing means not choosing another.

Opportunity cost — the value of the next-best alternative foregone. When a government spends on military, the opportunity cost might be education or healthcare. Always ask: what else could this resource have done?

Economic systems — different ways societies answer the three fundamental questions:

Free market capitalism — private ownership of resources; prices coordinate supply and demand; profit motive drives production. Advantages: efficiency, innovation, consumer choice. Disadvantages: inequality, market failures (monopoly, pollution, public goods).

Command economy — government owns resources and makes economic decisions centrally. Advantages: can mobilize resources for national goals quickly; can reduce inequality. Disadvantages: inefficiency, lack of innovation, corruption, suppressed individual choice (Soviet Union).

Mixed economy — combines market mechanisms with government intervention. Most modern economies are mixed (US, Germany, Canada). Government provides public goods (defense, roads), regulates markets, and redistributes income.

Key concepts:

Supply and demand — the fundamental model of markets:
Demand: consumers want more of something as its price falls (demand curve slopes down)
Supply: producers supply more as price rises (supply curve slopes up)
Equilibrium: the price where supply equals demand — the market-clearing price
What shifts curves: income, preferences, substitutes (demand); input costs, technology, regulations (supply)

Inflation — general rise in prices; money loses purchasing power. Caused by: too much money chasing too few goods, rising production costs. The Federal Reserve manages inflation through interest rates.

GDP (Gross Domestic Product) — the total value of all goods and services produced in a country in a year. The most used measure of economic size. Not a measure of wellbeing — includes negative outputs (cigarettes, cleaning up pollution).

Inequality — the gap between the most and least wealthy. Gini coefficient measures income inequality (0 = perfectly equal; 1 = one person has everything). Inequality has been rising in many countries.

Globalization — the integration of world economies through trade, investment, and migration. Benefits: lower prices, development in poorer countries. Costs: job displacement, cultural homogenization, environmental pressure."`,
      explore: `"Economic analysis:

1. Supply and demand scenario: A new study finds that coffee causes improved cognitive function. How does this affect:
- The demand for coffee? (shift or movement along the curve?)
- The price of coffee?
- The supply of coffee over time?
Draw a simple supply-demand diagram showing these changes.

2. Opportunity cost in real life: Identify three important decisions being made in your local community, state, or country right now. For each, identify the opportunity cost — what is being given up by making this choice?

3. Research the 2008 financial crisis: What caused it? What systemic failures in markets and regulation allowed it to happen? What were the consequences? What changed afterward? (One paragraph per question)

[Text or diagram input]"`,
      quickcheck: {
        question: "Opportunity cost is defined as:",
        options: ["A) The financial cost of a business decision", "B) The hidden costs not shown in the price", "C) The value of the next-best alternative foregone when making a choice ✅", "D) The cost of missing a market opportunity"],
        correctIndex: 2,
        explanation: "Opportunity cost is what you give up by choosing one option — the value of the best alternative you didn't choose. Every choice has an opportunity cost, whether financial or not."
      },
      quiz: [
    {
      question: "The equilibrium price in a market is:",
      options: ["A) The price set by government regulation", "B) The price where supply equals demand — the market-clearing price ✅", "C) The average of the highest and lowest prices", "D) The price that maximizes producer profit"],
      correctIndex: 1
    },
    {
      question: "GDP measures:",
      options: ["A) A nation's total happiness and wellbeing", "B) Only goods, not services", "C) The total value of all goods and services produced in a country in a year ✅", "D) Per-person income distributed equally"],
      correctIndex: 2
    },
    {
      question: "A mixed economy combines:",
      options: ["A) Two different currencies", "B) Market mechanisms with government intervention ✅", "C) Both domestic and foreign ownership of resources", "D) Manufacturing and service sectors"],
      correctIndex: 1
    },
    {
      question: "Rising inflation means:",
      options: ["A) The economy is growing healthily", "B) Purchasing power of money is decreasing — prices are rising ✅", "C) More money is being saved by consumers", "D) Interest rates will automatically fall"],
      correctIndex: 1
    },
    {
      question: "The Gini coefficient measures:",
      options: ["A) GDP growth rate", "B) Inflation over time", "C) Income inequality — from 0 (perfect equality) to 1 (one person has everything) ✅", "D) Trade balance between countries"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you now understand the invisible system that shapes the material conditions of every human life on Earth. Economic systems determine whether people have enough to eat, whether they have work, and what opportunities their children will have. You're an Economic Thinker — and that means you can evaluate policy, understand trade-offs, and engage with the world's most consequential decisions."

[Badge: Economic Thinker]`
    }
  },

  {
    id: "level3-history-world-3",
    level: 3,
    subject: "History",
    unit: "Unit 3: Power, Systems & Society",
    lessonNumber: 3,
    title: "Colonialism, Its Legacy & Reparative Justice",
    guide: "Ace",
    avatar: "ace",
    badge: "Justice Scholar",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study one of the most consequential and still-unresolved episodes in human history — colonialism. Understanding it is not an exercise in blame, but in historical comprehension: how did the world come to be organized the way it is? Why is wealth distributed the way it is? And what, if anything, does justice require of those living in the present? These are questions without easy answers."`,
      spark: `"At its peak in 1920, the British Empire controlled 24% of the world's land and 23% of the world's population. Belgium's exploitation of the Congo under King Leopold II killed an estimated 10 million people in 23 years. Spain's colonization of the Americas, combined with smallpox, killed 90% of the indigenous population. These weren't ancient events — their economic, political, and cultural effects shape our world today. Why does understanding this history matter for understanding the present?"`,
      learn: `"Colonialism is the control, domination, and exploitation of one territory and its people by another power — typically accompanied by settlement, resource extraction, cultural suppression, and political control.

The age of European colonialism (roughly 1500-1960):
Beginning with Portuguese and Spanish expansion in the 15th-16th centuries, European powers — Portugal, Spain, Britain, France, Netherlands, Belgium, Germany, Italy — colonized most of Africa, the Americas, Asia, and Oceania.

The mechanisms of colonialism:

Military conquest — superior weapons (guns vs. bows and arrows) and biological weapons (inadvertent disease introduction) gave Europeans overwhelming military advantage.

Economic extraction — the primary purpose of most colonies was extracting resources (gold, silver, rubber, cotton, spices, land) to enrich the colonial power. Raw materials exported; manufactured goods sold back at profit.

Cultural suppression — indigenous languages, religions, and cultural practices were outlawed or suppressed. Western education, Christianity, and European languages imposed. 'Civilizing mission' ideology claimed colonialism benefited colonized peoples — used to justify exploitation.

The slave trade — approximately 12.5 million Africans were forcibly transported to the Americas as enslaved people between 1500-1900. The wealth generated built much of Western European and American economic infrastructure.

Impacts and legacy:

Economic legacy — colonies were structured to benefit colonizers, not colonized. Infrastructure (railroads, ports) built to extract resources, not develop local economies. Artificial borders drawn by European powers in Africa (Berlin Conference 1884-85) cut across ethnic and linguistic groups — creating conflicts that persist today.

De-colonization — most colonies achieved formal independence between 1945-1975. But formal independence didn't reverse economic dependency — many newly independent nations remained economically dominated by former colonial powers through trade relationships, debt, and multinational corporations (neocolonialism).

Cultural legacy — language, religion, legal systems, and institutions of colonial powers remain central to many formerly colonized nations. Complex relationship — simultaneously tools of oppression and tools for liberation.

Reparative justice — the ongoing debate over what justice requires:
Formal apologies by colonial powers
Financial reparations (payments to affected communities or nations)
Return of cultural artifacts held in European museums
Debt cancellation for formerly colonized nations
Structural reform of global economic institutions (World Bank, IMF) that maintain dependencies"`,
      explore: `"Historical analysis and justice reasoning:

1. Research the Berlin Conference of 1884-85. What was decided? Who attended? Who was not represented? How did the borders drawn then contribute to specific conflicts in Africa in the 20th or 21st century? (Find one specific example)

2. The reparations debate: Some argue that people alive today bear no responsibility for historical wrongs committed before they were born. Others argue that people who benefit from historical injustice have an obligation to address its ongoing effects. Evaluate both arguments. What do you think justice requires? What is your reasoning?

3. Research one country's decolonization struggle (Kenya, Algeria, India, or another). What did independence cost? What was the nature of the conflict? How did the colonial power respond?

[Text input]"`,
      quickcheck: {
        question: "The Berlin Conference of 1884-85 was significant because:",
        options: ["A) It ended World War I", "B) It established the League of Nations", "C) European powers divided Africa among themselves without African representation, drawing artificial borders ✅", "D) It created the first international trade agreements"],
        correctIndex: 2,
        explanation: "The Berlin Conference allowed European powers to partition Africa among themselves — with no African representatives present — drawing borders that cut across ethnic groups and created political instabilities that persist today."
      },
      quiz: [
    {
      question: "Neocolonialism refers to:",
      options: ["A) A new wave of physical colonization", "B) Colonial nostalgia in formerly colonizing nations", "C) Continued economic and political domination of formerly colonized nations without formal colonial control ✅", "D) When former colonies colonize others"],
      correctIndex: 2
    },
    {
      question: "The 'civilizing mission' ideology claimed:",
      options: ["A) Only military force could establish civilization", "B) Colonialism benefited colonized peoples through spreading Western civilization — used to justify exploitation ✅", "C) European civilization was naturally superior and should spread", "D) Education was more important than military control"],
      correctIndex: 1
    },
    {
      question: "Approximately how many Africans were transported as enslaved people in the Atlantic slave trade?",
      options: ["A) 2 million", "B) 5 million", "C) 12.5 million ✅", "D) 20 million"],
      correctIndex: 2
    },
    {
      question: "Economic infrastructure built by colonial powers in colonies was primarily designed to:",
      options: ["A) Develop local economies and benefit indigenous populations", "B) Extract resources efficiently for export — not develop local economies ✅", "C) Connect communities across the colonized territory equally", "D) Prepare colonies for eventual self-governance"],
      correctIndex: 1
    },
    {
      question: "The debate over colonial reparations centers on: (all that apply)",
      options: ["A) Whether formal apologies are sufficient ✅", "B) Whether financial reparations are appropriate and feasible ✅", "C) The return of cultural artifacts held in European museums ✅", "D) Reform of global economic institutions that maintain dependencies ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — you just engaged with history that is still shaping our world. The wealth of some nations and the poverty of others, the borders that create conflicts, the cultural dynamics between communities — these cannot be understood without this history. You're a Justice Scholar — someone who faces difficult history honestly and asks the harder question: what does justice require now?"

[Badge: Justice Scholar]`
    }
  },

  {
    id: "level3-future-skills-1",
    level: 3,
    subject: "Future Skills",
    unit: "Unit 3: Advanced Technology Thinking",
    lessonNumber: 1,
    title: "How the Internet Actually Works",
    guide: "Byte",
    avatar: "byte",
    badge: "Network Scholar",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! You use the internet every day, but do you know how it actually works? Today we go behind the screen — into protocols, packets, servers, and the physical infrastructure that makes the connected world possible. Understanding how the internet works is understanding one of the most important technological systems ever built. And it's not magic."`,
      spark: `"When you load a web page, your request might travel through over 30 different computer systems across multiple countries in under 200 milliseconds. An estimated 1.2 million miles of undersea fiber optic cables carry 95% of all international internet traffic across ocean floors. And the entire system was designed to route around damage — originally to survive a nuclear attack. How do you design a network that can survive having large parts of it destroyed?"`,
      learn: `"The internet is a global network of networks — billions of connected devices communicating using standardized protocols.

Key concepts:

IP addresses — every device connected to the internet has an IP address (Internet Protocol) — a unique numerical identifier. IPv4: four numbers 0-255 (e.g., 192.168.1.1) — about 4.3 billion addresses. Running out, transitioning to IPv6 with 340 undecillion addresses.

Packet switching — data is broken into small packets, each routed independently to the destination, then reassembled. If one route is damaged, packets take alternative routes. Designed for redundancy and resilience.

The TCP/IP protocol suite — the foundational communication standards:
IP (Internet Protocol) — addressing and routing; getting packets to the right address
TCP (Transmission Control Protocol) — reliable delivery; ensures all packets arrive and reassembles them correctly

DNS (Domain Name System) — the internet's phone book. Translates human-readable names (coreverseacademy.ai) into IP addresses (e.g., 104.21.43.12). Your browser first queries a DNS server, which returns the IP address, then your browser connects to that IP.

HTTP and HTTPS — the protocols for transferring web content:
HTTP: Hypertext Transfer Protocol — how browsers request and receive web pages
HTTPS: the secure version — encrypts data in transit using TLS (Transport Layer Security). The padlock in your browser means HTTPS is active.

How a web page loads (simplified):
1. You type a URL in the browser
2. Browser queries DNS to find the IP address
3. Browser sends HTTP GET request to that IP address
4. Server receives request, finds the requested content
5. Server sends back HTML, CSS, JavaScript files
6. Browser renders the content
7. Browser makes additional requests for images, fonts, etc.

Servers and cloud computing:
A server is a computer that responds to requests — can be physical hardware or virtual (cloud). Cloud computing means running servers on someone else's infrastructure (Amazon Web Services, Google Cloud, Microsoft Azure) rather than your own hardware.

Content Delivery Networks (CDNs) — distributed networks of servers storing copies of content close to users around the world. Reduces latency — instead of your request going to a server in another country, a nearby copy serves you.

The Dark Web and Tor — parts of the internet not indexed by search engines and requiring special software. Used for both legitimate privacy and illegal activity.

Internet governance — no single entity controls the internet. ICANN manages domain names. Governments regulate locally. Tech companies control their platforms. The question of who governs the internet — and how — is one of the most important policy debates of our era."`,
      explore: `"Internet investigation:

1. Trace a web request:
a) Open a browser and go to a website you use.
b) Research what a traceroute is. If possible, run one (tracert on Windows, traceroute on Mac/Linux) to that website's domain.
c) How many 'hops' did your data take? Through what locations?

2. DNS exploration:
a) Find out the IP address of a website using nslookup (command line) or an online DNS lookup tool.
b) What is the difference between an A record and a CNAME record in DNS?

3. Net neutrality — the principle that internet providers should treat all internet traffic equally, without throttling or prioritizing certain content. Research the debate: what are the arguments for and against net neutrality? What has happened to net neutrality policy in the US in the last 10 years?

[Text input]"`,
      quickcheck: {
        question: "Packet switching means:",
        options: ["A) Data is sent as a continuous stream from sender to receiver", "B) Data is broken into packets routed independently and reassembled at the destination ✅", "C) Packages of code are switched between programming languages", "D) Internet traffic is packaged at the server and unwrapped at the client"],
        correctIndex: 1,
        explanation: "Packet switching breaks data into small packets, each routed independently through the network and reassembled at the destination — allowing the network to route around damage and use multiple paths simultaneously."
      },
      quiz: [
    {
      question: "DNS translates:",
      options: ["A) Computer code into human-readable web pages", "B) HTTP into HTTPS", "C) Domain names into IP addresses ✅", "D) IPv4 addresses into IPv6 addresses"],
      correctIndex: 2
    },
    {
      question: "HTTPS is more secure than HTTP because:",
      options: ["A) It is faster to load", "B) It encrypts data in transit using TLS, preventing interception ✅", "C) It requires verification of the user's identity", "D) It uses a more reliable routing protocol"],
      correctIndex: 1
    },
    {
      question: "A Content Delivery Network (CDN) improves performance by:",
      options: ["A) Compressing web page files", "B) Caching and serving content from servers geographically close to the user ✅", "C) Increasing the speed of DNS lookups", "D) Prioritizing certain traffic types over others"],
      correctIndex: 1
    },
    {
      question: "The internet was originally designed to route around damage because:",
      options: ["A) The early internet had many technical failures", "B) It was designed to survive a nuclear attack — packets find alternative routes ✅", "C) Early computers frequently crashed and lost connections", "D) The original network had very limited bandwidth"],
      correctIndex: 1
    },
    {
      question: "Cloud computing means:",
      options: ["A) Computing in extremely cold server rooms", "B) Internet-based software that works on any device", "C) Running servers and storage on someone else's infrastructure rather than owning your own hardware ✅", "D) Processing data without using physical storage"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — the internet is the most consequential infrastructure ever built, and now you understand how it actually works — not as magic but as physics, mathematics, and engineering. You're a Network Scholar — and that means you can think critically about the system that mediates so much of modern life, including who controls it and why that matters."

[Badge: Network Scholar]`
    }
  },

  {
    id: "level3-future-skills-2",
    level: 3,
    subject: "Future Skills",
    unit: "Unit 3: Advanced Technology Thinking",
    lessonNumber: 2,
    title: "Cybersecurity — Defense in the Digital World",
    guide: "Byte",
    avatar: "byte",
    badge: "Digital Defender",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study the warfare of the digital age — cybersecurity. Nation-states steal secrets through code. Ransomware has shut down hospitals. Identity theft affects millions annually. But understanding cybersecurity isn't just about defense against attacks — it's about understanding how trust, privacy, and security work in digital systems. And it starts with understanding how attackers think."`,
      spark: `"In 2021, a ransomware attack on Colonial Pipeline — the largest fuel pipeline in the US — caused fuel shortages across the Southeast for nearly a week. The attack was launched from a single compromised password that didn't have two-factor authentication. In 2017, the WannaCry ransomware attack disabled computers in 150 countries including UK hospitals — where surgeries were canceled and patients were turned away. How vulnerable is our critical infrastructure, and what does that mean for national security?"`,
      learn: `"Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage.

The CIA triad — three core principles of information security:
Confidentiality — ensuring information is accessible only to authorized parties
Integrity — ensuring data is accurate and hasn't been tampered with
Availability — ensuring systems and data are accessible when needed

Types of attacks:

Phishing — deceptive communications (email, text, call) designed to trick users into revealing credentials or clicking malicious links. 90%+ of data breaches begin with phishing. Spear phishing — targeted phishing using personal details to appear legitimate.

Malware — malicious software:
Viruses — self-replicating code that attaches to legitimate programs
Trojan horses — malware disguised as legitimate software
Ransomware — encrypts victim's data and demands payment for decryption
Spyware — secretly monitors and transmits user activity

Man-in-the-middle (MitM) attacks — an attacker intercepts communications between two parties. Intercepting unencrypted WiFi is a classic example.

SQL injection — inserting malicious code into database queries through web forms. One of the most common ways websites are hacked.

Denial-of-service (DoS/DDoS) — overwhelming a server with traffic until it crashes, making services unavailable.

Social engineering — manipulating people rather than breaking code. The easiest way to breach most systems is to manipulate a human, not hack the software.

Defense strategies:

Passwords and authentication:
Strong passwords: long, unique, random (password managers are essential)
Two-factor authentication (2FA) — a second verification layer (SMS code, authenticator app)
Password managers — encrypted vaults for all credentials (1Password, Bitwarden)

Encryption — converting data into unreadable form without the correct key:
Symmetric encryption — same key to encrypt and decrypt
Asymmetric encryption (public key cryptography) — different keys to encrypt and decrypt; the basis of HTTPS and secure email

Network security:
Firewalls — filter incoming and outgoing network traffic
VPNs (Virtual Private Networks) — encrypt all traffic between device and VPN server
Avoid public WiFi for sensitive activities (use VPN if necessary)

Principle of least privilege — users and systems should only have access to what they need and nothing more.

The human layer is always the weakest link. No technology fully compensates for a person who clicks a malicious link, reuses passwords, or shares credentials."`,
      explore: `"Cybersecurity thinking:

1. Security audit of your own digital life:
- Do you reuse passwords? (If yes, explain why this is dangerous)
- Which of your accounts have two-factor authentication enabled?
- What would happen if your email account were hacked? What does it give access to?
- Create an action plan: what are the three most important security improvements you should make?

2. Social engineering scenario: You receive an email from 'IT Support' saying your account will be deactivated unless you click a link to verify your credentials within 24 hours. The email looks legitimate. Walk through exactly how you would evaluate whether this is phishing.

3. Research end-to-end encryption (E2E). How does it work? Which messaging apps use it? Why is it controversial — why do some governments want to ban or weaken it?

[Text input]"`,
      quickcheck: {
        question: "Social engineering attacks are effective because:",
        options: ["A) They use advanced code that bypasses technical defenses", "B) They exploit human psychology — manipulating people rather than breaking software ✅", "C) Modern software has no technical defenses against them", "D) They are too sophisticated for security systems to detect"],
        correctIndex: 1,
        explanation: "Social engineering targets people, not software. Manipulating a human into clicking a link or sharing credentials is often far easier than breaking encryption or bypassing firewalls — making humans the weakest security link."
      },
      quiz: [
    {
      question: "Ransomware is dangerous because:",
      options: ["A) It deletes all your data permanently", "B) It encrypts your data and demands payment for the decryption key ✅", "C) It allows attackers to control your device remotely", "D) It steals your identity and finances directly"],
      correctIndex: 1
    },
    {
      question: "Two-factor authentication improves security because:",
      options: ["A) It makes passwords longer", "B) It requires a second verification beyond the password — so stolen passwords alone aren't enough ✅", "C) It encrypts your password before transmission", "D) It changes your password automatically every 30 days"],
      correctIndex: 1
    },
    {
      question: "The CIA triad in cybersecurity stands for:",
      options: ["A) Cybersecurity, Intelligence, Automation", "B) Confidentiality, Integrity, Availability ✅", "C) Control, Inspect, Authenticate", "D) Central, Isolated, Authorized"],
      correctIndex: 1
    },
    {
      question: "Public key cryptography (asymmetric encryption) uses:",
      options: ["A) The same key to encrypt and decrypt", "B) A public key to encrypt and a private key to decrypt ✅", "C) No keys — it uses mathematical functions only", "D) Keys shared between all authorized users"],
      correctIndex: 1
    },
    {
      question: "The principle of least privilege means:",
      options: ["A) Giving basic users fewer features than administrators", "B) Users and systems should only have access to what they need and nothing more ✅", "C) Privileged users have fewer security requirements", "D) Executives have the least technical access in an organization"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you now understand how digital systems are attacked and defended. In a world where our critical infrastructure, personal data, and institutions operate digitally, cybersecurity literacy is a civic necessity — not just a technical skill. You're a Digital Defender — someone who understands the battlefield and knows how to protect what matters."

[Badge: Digital Defender]`
    }
  },

  {
    id: "level3-future-skills-3",
    level: 3,
    subject: "Future Skills",
    unit: "Unit 3: Advanced Technology Thinking",
    lessonNumber: 3,
    title: "UX Design & Technology Ethics",
    guide: "Byte",
    avatar: "byte",
    badge: "Ethical Builder",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we bring technology and ethics together — because every design choice is a values choice. The apps you use every day were designed to make you behave in specific ways. UX (User Experience) design shapes billions of interactions daily. Understanding it gives you both a practical skill and a critical lens: who is this designed for? Who benefits? Who might be harmed?"`,
      spark: `"The infinite scroll on social media was invented by Aza Raskin — who has since publicly apologized for it, estimating it wastes 200,000 human lifetimes per day. Variable reward schedules (unpredictable notifications) were designed using the same psychology as slot machines. The 'like' button was designed to spread positivity — but was found to amplify outrage more effectively. If you designed these features knowing these outcomes, what would you be responsible for?"`,
      learn: `"User Experience (UX) Design is the process of creating products that provide meaningful, relevant, and human-centered experiences.

Core UX principles:

User research — understanding who users are, what they need, how they behave. Methods: interviews, surveys, usability testing, analytics analysis. The fundamental UX question: who are we designing for?

Information architecture — organizing content so users can navigate intuitively. Menus, categories, search, hierarchy.

Usability — how easily and effectively users can accomplish their goals:
Learnability — can users figure it out quickly?
Efficiency — can experienced users perform tasks quickly?
Memorability — can returning users remember how to use it?
Error prevention — does the design prevent mistakes?

Accessibility — designing for users with disabilities:
Visual impairments — screen reader compatibility, sufficient color contrast, text alternatives for images
Motor impairments — keyboard navigation, large touch targets
Cognitive differences — clear language, consistent patterns

Design patterns — established solutions to common design problems (dropdown menus, breadcrumbs, search bars). Users have expectations — violating them creates friction.

Persuasive design — design that influences behavior:
Nudges — design choices that guide behavior without restricting options (default settings heavily influence behavior)
Dark patterns — design tricks that manipulate users against their own interests:
  'Roach motel' — easy to sign up, hard to cancel
  Hidden costs revealed at checkout
  Confusing opt-out language
  Fake urgency ('Only 2 left!')
  Trick questions designed to get accidental confirmation

Technology ethics — the moral dimensions of technology design and deployment:

Algorithmic bias — AI and algorithmic systems reflect the biases in their training data. Facial recognition systems with higher error rates for dark-skinned women. Hiring algorithms that penalize women. Criminal justice risk scores with racial disparities.

Privacy by design — building privacy protection into systems from the beginning, not as an afterthought.

Digital wellbeing — designing for the long-term flourishing of users, not just engagement metrics. Time well spent vs. time captured.

The designer's responsibility: Every design choice is a values choice. Scale magnifies impact — a dark pattern used by a small business affects hundreds. Used by an app with a billion users, it shapes human behavior at civilizational scale."`,
      explore: `"Design ethics practice:

1. Dark pattern audit: Choose one website or app you use regularly. Identify at least 2 dark patterns. For each:
- Describe the pattern
- Explain who benefits (the company) and who is harmed (the user)
- Redesign it ethically — what would a user-centered version look like?

2. Accessible redesign: Consider a standard web form (signup page). List 5 specific changes you would make to ensure it's accessible to:
- A user who is blind and uses a screen reader
- A user with motor impairments who cannot use a mouse
- A user with dyslexia

3. Research one case of algorithmic harm (facial recognition misidentification leading to wrongful arrest, biased hiring algorithms, discriminatory loan approval systems). What went wrong? Who was responsible? What was the fix?

[Text input]"`,
      quickcheck: {
        question: "Dark patterns in UX design are:",
        options: ["A) Dark-colored interface elements used for contrast", "B) Advanced design techniques only experienced designers use", "C) Design tricks that manipulate users against their own interests for the company's benefit ✅", "D) Privacy-protecting design patterns"],
        correctIndex: 2,
        explanation: "Dark patterns are deliberate design choices that manipulate users — making it hard to cancel subscriptions, hiding costs, using confusing language — prioritizing company interests over user wellbeing."
      },
      quiz: [
    {
      question: "Algorithmic bias occurs because:",
      options: ["A) Algorithms are intentionally programmed to discriminate", "B) AI systems reflect biases present in their training data and design choices ✅", "C) Algorithms lack the ability to process certain demographics", "D) Only biased humans can create algorithms"],
      correctIndex: 1
    },
    {
      question: "Privacy by design means:",
      options: ["A) Designing products only for privacy-conscious users", "B) Building privacy protection into systems from the beginning rather than as an afterthought ✅", "C) Making all user data private by default", "D) Limiting data collection to only demographic information"],
      correctIndex: 1
    },
    {
      question: "Variable reward schedules in app design are borrowed from:",
      options: ["A) Educational psychology research", "B) Military training protocols", "C) Slot machine psychology — unpredictable rewards are more compelling than predictable ones ✅", "D) Social psychology networking studies"],
      correctIndex: 2
    },
    {
      question: "Accessibility in UX design means:",
      options: ["A) Making apps affordable for all income levels", "B) Designing for users with various disabilities including visual, motor, and cognitive differences ✅", "C) Making apps available in multiple languages", "D) Providing free access to premium features"],
      correctIndex: 1
    },
    {
      question: "The designer's responsibility is significant because:",
      options: ["A) Designers are legally liable for all technology harms", "B) Design choices at scale shape human behavior at civilizational scale — affecting billions ✅", "C) Designers are the most important people in technology companies", "D) Design is the only thing that determines whether a product succeeds"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you now see the ethics inside every interface. Every button placement, every notification, every default setting is a values choice made by a person. You're an Ethical Builder — someone who understands that technology with a billion users is not neutral, and that the people who build it bear genuine responsibility for how it shapes human life. Build accordingly."

[Badge: Ethical Builder]`
    }
  },

  {
    id: "level3-money-business-1",
    level: 3,
    subject: "Money & Business",
    unit: "Unit 3: Business & Economics",
    lessonNumber: 1,
    title: "Supply, Demand & Market Forces",
    guide: "Ace",
    avatar: "ace",
    badge: "Market Analyst",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we go deep into the engine of the market economy — supply and demand. You've encountered these concepts before. Now we master them: the math, the mechanics, the exceptions, and the real-world applications. Understanding supply and demand is understanding why prices change, why shortages happen, why some workers earn more than others, and how government policies affect markets."`,
      spark: `"During COVID-19, the price of hand sanitizer — normally about $5 — hit $70 or more. Toilet paper disappeared from shelves. Microchips became so scarce that car manufacturers couldn't build cars. But the price of oil collapsed as travel stopped. All of these are supply and demand in action. Why do markets sometimes handle disruptions well, and sometimes fail catastrophically?"`,
      learn: `"Supply and demand is the foundational model of how prices and quantities are determined in competitive markets.

The demand curve:
Shows the relationship between price and quantity demanded, holding other factors constant.
Law of demand: as price increases, quantity demanded decreases (inverse relationship).
Movements along the curve — caused only by price changes.
Shifts of the curve — caused by changes in:
  Consumer income (more income → demand for normal goods increases)
  Prices of related goods (substitutes: if Pepsi price rises, Coke demand rises; complements: if gas prices rise, car demand falls)
  Consumer tastes and preferences
  Expectations (expected price increase → buy now)
  Number of buyers

The supply curve:
Shows the relationship between price and quantity supplied.
Law of supply: as price increases, quantity supplied increases (direct relationship).
Shifts caused by:
  Input costs (if labor costs rise, supply decreases)
  Technology (improved technology increases supply)
  Government policies (taxes decrease supply; subsidies increase supply)
  Number of sellers
  Expectations

Market equilibrium — where quantity supplied equals quantity demanded:
At equilibrium price, all goods produced are sold and all buyers willing to pay that price can buy.
Disequilibrium:
  Price above equilibrium → surplus (quantity supplied > quantity demanded) → price pressure down
  Price below equilibrium → shortage (quantity demanded > quantity supplied) → price pressure up

Elasticity — how responsive quantity is to price changes:
Elastic demand — quantity changes a lot with price (luxuries, goods with many substitutes)
Inelastic demand — quantity changes little with price (necessities, addictive goods)
Practical implication: if demand is inelastic, raising price increases revenue. If elastic, raising price reduces revenue.

Market failures — situations where markets don't produce efficient outcomes:
Externalities — costs or benefits that affect parties not in the transaction (pollution = negative externality)
Public goods — non-excludable, non-rival goods that markets underprovide (national defense, lighthouses)
Information asymmetry — one party knows more than the other (used car market, healthcare)
Market power — monopolies can set prices above competitive levels

Government interventions:
Price ceilings (below equilibrium) → shortages
Price floors (above equilibrium) → surpluses
Taxes → shift supply curve up
Subsidies → shift supply curve down"`,
      explore: `"Market analysis:

1. Case study: The 2020-2022 microchip shortage affected cars, gaming consoles, phones, and medical devices. Using supply and demand analysis:
a) What caused the demand shift? (Multiple factors — identify them)
b) What caused the supply-side problems?
c) Show these as shifts on a supply-demand diagram
d) What happened to prices and quantities?
e) How did different industries respond?

2. Elasticity in real life:
a) Why do governments often tax tobacco and alcohol heavily even though economists know the tax raises prices?
b) Why do airlines charge dramatically different prices for the same seat?
c) Why does an increase in nurse salaries lead to more nursing students? What does this say about labor supply elasticity?

3. Design a government intervention: A city has a housing shortage — not enough affordable apartments for working-class residents. Using your knowledge of supply and demand (price ceilings, subsidies, zoning laws), design a policy response. Identify the trade-offs of each approach.

[Text or diagram input]"`,
      quickcheck: {
        question: "Inelastic demand means:",
        options: ["A) Demand cannot be influenced by price at all", "B) Price and quantity move in the same direction", "C) Quantity demanded changes very little when price changes — typical of necessities ✅", "D) The demand curve is vertical due to fixed consumer income"],
        correctIndex: 2,
        explanation: "Inelastic demand means quantity demanded is not very sensitive to price changes — people buy about the same amount even when prices rise. Necessities (insulin, gasoline) tend to be inelastic; luxuries tend to be elastic."
      },
      quiz: [
    {
      question: "A price ceiling set below equilibrium will cause:",
      options: ["A) A surplus — too much supply", "B) A shortage — quantity demanded exceeds quantity supplied ✅", "C) No change in the market", "D) The equilibrium to fall to meet the ceiling"],
      correctIndex: 1
    },
    {
      question: "A negative externality occurs when:",
      options: ["A) A business produces negative profits", "B) A transaction has costs that fall on parties not involved in the transaction ✅", "C) Government intervention creates market inefficiency", "D) Competition drives prices below production cost"],
      correctIndex: 1
    },
    {
      question: "Public goods are underprovided by markets because:",
      options: ["A) People don't want public goods", "B) Markets can't set prices for them", "C) They are non-excludable and non-rival — producers can't stop non-payers from benefiting ✅", "D) Governments are always better at providing them"],
      correctIndex: 2
    },
    {
      question: "When input costs rise, the supply curve:",
      options: ["A) Shifts to the right (increases)", "B) Shifts to the left (decreases) — less is supplied at every price ✅", "C) Becomes steeper without shifting", "D) Is not affected — only demand affects supply"],
      correctIndex: 1
    },
    {
      question: "Information asymmetry in markets refers to:",
      options: ["A) Companies knowing more about competitors than customers do", "B) One party having significantly more relevant information than the other — creating market distortions ✅", "C) Consumers having more information than producers", "D) Asymmetric distribution of market data among economists"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — supply and demand is not just theory. It is the mechanism by which prices emerge, shortages happen, and policies succeed or fail. You're a Market Analyst — someone who can look at any market disruption and understand the underlying forces. That analytical tool works from microchip shortages to housing crises to global oil markets."

[Badge: Market Analyst]`
    }
  },

  {
    id: "level3-money-business-2",
    level: 3,
    subject: "Money & Business",
    unit: "Unit 3: Business & Economics",
    lessonNumber: 2,
    title: "Reading & Understanding a Business",
    guide: "Ace",
    avatar: "ace",
    badge: "Business Reader",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we learn to read a business — understanding the numbers that reveal whether a company is healthy, growing, profitable, and trustworthy. This is how investors evaluate companies, how lenders decide whether to extend credit, how employees evaluate whether a company is stable, and how entrepreneurs track whether their venture is succeeding. Financial literacy at this level is genuinely rare — and genuinely powerful."`,
      spark: `"Warren Buffett — one of the greatest investors of all time — has said his most important skill is reading financial statements. He reads dozens of annual reports per year and has done so for his entire career. He once said he could evaluate a business in 30 minutes from its annual report. What would you need to know to look at numbers and see the story of a business?"`,
      learn: `"A business can be understood through three essential financial statements:

1. The Income Statement (Profit & Loss)
Shows revenue, expenses, and profit over a period of time (month, quarter, year).

Revenue (Sales) — total income from selling goods or services
- Cost of Goods Sold (COGS) — direct costs of producing goods
= Gross Profit — revenue minus COGS
- Operating Expenses (SG&A: sales, general, administrative) — overhead costs
= Operating Income (EBIT) — earnings before interest and taxes
- Interest and taxes
= Net Income — the 'bottom line' — total profit after all expenses

Key ratios from the income statement:
Gross margin = Gross Profit / Revenue × 100% (higher is better; how efficiently the business produces)
Net profit margin = Net Income / Revenue × 100% (Apple ~25%, grocery stores ~2%)

2. The Balance Sheet
Shows a snapshot of what a company owns (assets), owes (liabilities), and is worth (equity) at a specific point in time.

Assets = Liabilities + Equity (the fundamental accounting equation, always true)

Assets — everything the company owns:
Current assets — convertible to cash within a year (cash, accounts receivable, inventory)
Fixed assets — long-term (property, equipment, patents)

Liabilities — everything the company owes:
Current liabilities — due within a year (accounts payable, short-term debt)
Long-term liabilities — due in more than a year (bonds, long-term loans)

Equity (net worth) — what's left after subtracting liabilities from assets. What belongs to owners.

Key ratios from the balance sheet:
Debt-to-equity ratio = Total Debt / Total Equity (how much debt relative to owner value — high = riskier)
Current ratio = Current Assets / Current Liabilities (above 1.5 = healthy liquidity)

3. The Cash Flow Statement
Shows cash moving in and out of the business — different from profit.
A profitable company can go bankrupt from poor cash flow (if it can't pay bills while waiting for receivables).
Operating cash flow — cash from core business operations
Investing cash flow — cash used in investments (buying equipment)
Financing cash flow — cash from borrowing or equity issuance

The most important single question: Is the company generating cash from operations consistently? Profitable companies that don't generate real cash are often fraudulent or structurally flawed."`,
      explore: `"Financial analysis:

1. Simplified income statement exercise:
A bakery has: Revenue $500,000; Flour/ingredients/packaging $150,000; Rent/utilities/wages $200,000; Interest on a loan $10,000; Taxes $35,000
Calculate: Gross Profit, Operating Income, Net Income
Calculate: Gross Margin %, Net Profit Margin %

2. Balance sheet analysis:
A company has: Cash $50K, Accounts Receivable $80K, Inventory $40K, Equipment $200K, Accounts Payable $60K, Long-term Loan $150K, Owner's Equity ?
Calculate: Total Assets, Total Liabilities, Owner's Equity (Assets - Liabilities)
Is this company financially healthy? What questions would you want answered?

3. Research and evaluate: Find the most recent annual report or 10-K filing for any public company you're interested in (SEC.gov or the company's investor relations page). Read the income statement. What do revenue, gross margin, and net profit tell you about this business?

[Math work and text input]"`,
      quickcheck: {
        question: "A company can be profitable but go bankrupt due to:",
        options: ["A) Having too many customers", "B) Poor cash flow — unable to pay bills while waiting for customers to pay ✅", "C) Paying too little in taxes", "D) Having too high a gross margin"],
        correctIndex: 1,
        explanation: "Cash flow and profit are different. A company can show accounting profits while running out of actual cash — if customers haven't paid yet, or if cash is tied up in inventory. Cash flow problems kill profitable companies regularly."
      },
      quiz: [
    {
      question: "The fundamental accounting equation is:",
      options: ["A) Revenue - Expenses = Profit", "B) Assets = Liabilities + Equity ✅", "C) Cash Flow = Net Income + Depreciation", "D) Gross Profit = Revenue - Net Income"],
      correctIndex: 1
    },
    {
      question: "Gross margin measures:",
      options: ["A) Total company profitability after all costs", "B) How efficiently a company produces its goods — gross profit as a percentage of revenue ✅", "C) The margin between a company's debt and equity", "D) Net income as a percentage of operating expenses"],
      correctIndex: 1
    },
    {
      question: "A high debt-to-equity ratio indicates:",
      options: ["A) The company is very profitable", "B) The company has strong cash flow", "C) The company carries significant debt relative to owner value — higher financial risk ✅", "D) The company is well-capitalized and stable"],
      correctIndex: 2
    },
    {
      question: "The current ratio measures:",
      options: ["A) Current year profit vs last year profit", "B) The company's ability to pay short-term obligations — current assets / current liabilities ✅", "C) Revenue growth rate over the current quarter", "D) How quickly the company generates cash"],
      correctIndex: 1
    },
    {
      question: "The cash flow statement is important because:",
      options: ["A) It shows profit more accurately than the income statement", "B) It reveals whether a company is generating real cash from operations — profit alone can be misleading ✅", "C) It is required by law to replace the income statement", "D) It shows only investing and financing activities"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — you just acquired a skill that gives you the ability to evaluate any company, any business, any investment. Warren Buffett reads financial statements for pleasure. You now understand why. You're a Business Reader — someone who can look at numbers and see the health, risk, and potential of a business hiding behind them."

[Badge: Business Reader]`
    }
  },

  {
    id: "level3-money-business-3",
    level: 3,
    subject: "Money & Business",
    unit: "Unit 3: Business & Economics",
    lessonNumber: 3,
    title: "Marketing, Branding & Consumer Psychology",
    guide: "Ace",
    avatar: "ace",
    badge: "Brand Strategist",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study one of the most powerful forces shaping human behavior — marketing and branding. You've been the subject of sophisticated marketing campaigns your entire life. Today you learn how they work: the psychology, the strategy, the design, and the ethics. Understanding this doesn't just make you a better marketer — it makes you a more conscious consumer."`,
      spark: `"Apple's 'Think Different' campaign never mentioned a single product feature. Nike's 'Just Do It' doesn't describe shoes. Red Bull's marketing positions it as an energy drink for extreme athletes — not a carbonated beverage with caffeine. Coca-Cola has spent billions ensuring that when you feel happy, you think of Coke. How do brands get us to form emotional attachments to products — and what does that reveal about how human decision-making actually works?"`,
      learn: `"Marketing is the activity of creating, communicating, delivering, and exchanging offerings that have value for customers. Branding is the creation of a distinct identity, reputation, and emotional association.

The 4 Ps of marketing (marketing mix):
Product — what you're selling (features, quality, design, packaging)
Price — the price point and pricing strategy
Place — where and how the product reaches customers (distribution channels)
Promotion — how you communicate value (advertising, PR, social media, content)

Brand identity vs brand image:
Brand identity — what the company wants to be perceived as (intentional)
Brand image — what people actually perceive (what matters)
The gap between them is the branding challenge.

Brand elements:
Name and logo — recognition
Tagline/slogan — emotional positioning
Color psychology — consistent color associations
Tone of voice — personality communicated through language
Brand story — the narrative that gives the brand meaning

Consumer psychology — how humans actually make buying decisions:

System 1 vs System 2 thinking (Daniel Kahneman):
System 1 — fast, automatic, emotional, intuitive (drives most purchases)
System 2 — slow, deliberate, logical, analytical (rarely the real driver)
Marketing primarily targets System 1 — creating emotional responses, associations, habits.

The mere exposure effect — people prefer things they've seen before. Repetition creates familiarity; familiarity creates preference. This is why large advertising budgets work.

Social proof — 'If many people like it, it must be good.' Reviews, testimonials, influencer marketing all leverage this.

Scarcity and urgency — 'Only 2 left!' 'Sale ends tonight!' Real or manufactured, scarcity activates loss aversion — we hate losing something more than we enjoy gaining something equivalent.

Anchoring — the first number seen influences all subsequent judgments. 'Was $200, now $99' — the $200 is an anchor even if it was never the real price.

Brand loyalty — once people identify with a brand, they defend it like part of their identity. Apple vs Android. Nike vs Adidas. This is tribal psychology applied to commerce.

Ethics in marketing:
The same techniques that build powerful brands can be used to manipulate. Targeting addiction. Marketing junk food to children. Creating false urgency. Using false social proof. The difference between persuasion and manipulation is whether the product genuinely serves the customer's interests."`,
      explore: `"Marketing analysis and strategy:

1. Brand deconstruction: Choose a brand you're loyal to. Identify:
- What emotions do they associate with their brand?
- What consumer psychology principles do they use in their marketing?
- What is the gap between their brand identity and your actual experience of using their product?
- What would cause you to switch to a competitor?

2. Create a brand for Coreverse (or a business you've been developing):
- Name and logo concept (describe it)
- Tagline
- Brand story (2-3 sentences on the mission and why it matters)
- Target customer profile (demographic + psychographic)
- Which of the 4 Ps is most critical for this business and why?

3. The ethics of marketing to children: Children see thousands of ads per year and research shows they cannot fully distinguish advertising from content until around age 8. What ethical limits, if any, should exist on marketing to children? What regulations exist? What should?

[Text input]"`,
      quickcheck: {
        question: "System 1 thinking drives most purchase decisions because:",
        options: ["A) People don't have time to think carefully about purchases", "B) Marketing is too sophisticated for careful analysis", "C) It is fast, automatic, and emotional — most decisions are made by intuition, not rational analysis ✅", "D) People don't value rational thinking in consumer contexts"],
        correctIndex: 2,
        explanation: "System 1 is our fast, automatic, emotional mode — it drives most of our behavior, including most purchases. Marketing primarily targets System 1 by building emotional associations and habits rather than rational arguments."
      },
      quiz: [
    {
      question: "The mere exposure effect explains why:",
      options: ["A) New products are always less trusted than established ones", "B) Repetition creates familiarity, which creates preference — a key reason advertising budgets work ✅", "C) Consumers prefer products they've tested before buying", "D) Brands must constantly create new campaigns to stay relevant"],
      correctIndex: 1
    },
    {
      question: "Brand identity differs from brand image because:",
      options: ["A) Brand identity is more important than brand image", "B) Brand identity is what the company intends to project; brand image is what consumers actually perceive ✅", "C) Only small companies distinguish between the two", "D) Brand image is the visual identity; brand identity is the mission"],
      correctIndex: 1
    },
    {
      question: "Anchoring in marketing means:",
      options: ["A) Building consistent brand presence over time", "B) The first number seen (often a higher 'was' price) anchors all subsequent price judgments ✅", "C) Creating emotional connections between the product and positive experiences", "D) Targeting customers who are already loyal to competitors"],
      correctIndex: 1
    },
    {
      question: "The 4 Ps of marketing are:",
      options: ["A) Purpose, People, Passion, Profit", "B) Product, Price, Place, Promotion ✅", "C) Planning, Positioning, Pricing, Publishing", "D) Performance, Perception, Persistence, Platform"],
      correctIndex: 1
    },
    {
      question: "The line between persuasion and manipulation in marketing is:",
      options: ["A) Whether the campaign is creative and original", "B) The amount of money spent on the campaign", "C) Whether the product genuinely serves the customer's interests ✅", "D) Whether the marketing uses images or only text"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you can now see the marketing that's invisible to most people. The psychology, the strategy, the emotion engineering that goes into every brand. You're a Brand Strategist — someone who can build brands that genuinely connect AND evaluate the brands that compete for your attention, loyalty, and money. That dual awareness is rare and valuable."

[Badge: Brand Strategist]`
    }
  },

  {
    id: "level3-creative-arts-1",
    level: 3,
    subject: "Creative Arts",
    unit: "Unit 3: Art as Communication",
    lessonNumber: 1,
    title: "Art History — Ideas That Shaped Culture",
    guide: "Muse",
    avatar: "muse",
    badge: "Art Historian",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study art history — not as a list of paintings to memorize, but as the history of ideas. Every major art movement was a response to something: a new technology, a political upheaval, a philosophical shift, a rejection of what came before. Understanding art history is understanding how cultures express themselves and how ideas move through time."`,
      spark: `"In 1863, the French Imperial Salon rejected thousands of paintings. The rejected artists — including Manet, Monet, Renoir — displayed their work in the 'Salon des Refusés' (Exhibition of the Refused). The works were mocked by critics and laughed at by the public. Within 30 years, these artists had completely revolutionized painting and become the most celebrated artists in history. What does this tell us about how new ideas are received — and how they ultimately win?"`,
      learn: `"Art history is the study of art across time and cultures — examining how and why visual expression changes and what it reveals about the societies that produce it.

Major Western art movements:

Renaissance (1300s-1600s) — rebirth of classical Greek and Roman ideals. Naturalism, perspective, anatomical accuracy. Key figures: Leonardo da Vinci, Michelangelo, Raphael. Context: humanism, growing scientific inquiry, the printing press.

Baroque (1600s-1700s) — dramatic, emotional, theatrical. Strong contrast between light and dark (chiaroscuro). Key figures: Caravaggio, Rembrandt, Bernini. Context: the Counter-Reformation; the Church used dramatic art to inspire devotion.

Neoclassicism (1750s-1800s) — return to Greek and Roman ideals; clean lines, restraint, moral virtue. Context: the Enlightenment and French Revolution; rejection of Baroque excess.

Romanticism (1800s) — emotion, nature, the sublime, the individual. Reaction against Enlightenment rationalism. Key figures: Delacroix, Turner, Caspar David Friedrich. Context: industrialization; longing for what was being lost.

Impressionism (1860s-1880s) — capturing light and momentary perception rather than detailed realism. Loose brushstrokes, outdoor painting, everyday subjects. Key figures: Monet, Renoir, Degas. Context: photography challenged traditional realism; Impressionists asked what painting could do that photography couldn't.

Expressionism (early 1900s) — depicting subjective emotional experience rather than external reality. Distortion, intense color. Edvard Munch's 'The Scream.' Context: modernization, anxiety, alienation.

Cubism (1907-1920s) — depicting objects from multiple perspectives simultaneously. Fragmented forms. Picasso, Braque. Context: Einstein's relativity challenged fixed perspective; technology was fragmenting traditional experience.

Abstract Expressionism (1940s-1950s) — pure emotional expression through abstract forms and gesture. Jackson Pollock's drip paintings. Context: post-WWII trauma; New York emerging as the world art center.

Conceptual Art (1960s-present) — the idea is the work; physical execution is secondary. Marcel Duchamp's readymades (ordinary objects exhibited as art). Challenges: what is art? Who decides?

Contemporary art — global, diverse, digital, interdisciplinary. Street art, digital art, AI-generated art, installation, performance. Questions of access, representation, and what art is for continue.

Non-Western art traditions:
Western art history is only one thread. Islamic geometric art, Japanese ukiyo-e prints, African mask traditions, Indian Mughal miniatures, Pre-Columbian American art — all represent equally rich and sophisticated traditions that have been historically underrepresented in Western art history."`,
      explore: `"Art history investigation:

1. Choose one art movement. Research:
- What was happening in the world when this movement emerged?
- What were artists reacting against?
- What new ideas about reality, perception, or human experience were they expressing?
- Find one specific work that exemplifies the movement. Describe it and explain how it embodies the movement's ideas.

2. Look at Picasso's 'Les Demoiselles d'Avignon' (1907) — one of the first Cubist works. Describe what you see. What traditional rules of painting does it break? What might Picasso have been trying to express by breaking them?

3. 'Anything can be art if someone says it is.' Evaluate this claim. Where do you draw the line? Whose definition of art should count, and why?

[Text input]"`,
      quickcheck: {
        question: "Impressionism emerged partly as a response to:",
        options: ["A) The French Revolution's political ideals", "B) The Baroque movement's excessive drama", "C) Photography — which challenged traditional realism, pushing painters to explore what painting could uniquely do ✅", "D) The Romantic movement's emotional excesses"],
        correctIndex: 2,
        explanation: "Photography's rise in the 1840s-1860s challenged the traditional purpose of painting (recording reality accurately). Impressionists responded by exploring what painting could uniquely capture that photography couldn't — light, perception, fleeting moments."
      },
      quiz: [
    {
      question: "The Baroque movement used dramatic chiaroscuro (light-dark contrast) primarily to:",
      options: ["A) Show off new oil painting techniques", "B) Create emotional drama and inspire religious devotion — sponsored by the Counter-Reformation Church ✅", "C) Respond to the Impressionist style", "D) Depict outdoor scenes more realistically"],
      correctIndex: 1
    },
    {
      question: "Cubism depicted objects from multiple perspectives simultaneously because:",
      options: ["A) Cubists had poor observational drawing skills", "B) Multiple perspectives challenged the idea of a single fixed point of view — reflecting relativity's impact on how reality was understood ✅", "C) It was easier to paint than realistic art", "D) The Cubists were influenced by African tribal masks only"],
      correctIndex: 1
    },
    {
      question: "Conceptual art prioritizes:",
      options: ["A) Technical execution above all else", "B) The idea or concept — the physical execution is secondary ✅", "C) Emotional expression over intellectual content", "D) Realistic representation of the world"],
      correctIndex: 1
    },
    {
      question: "Why has Western art history traditionally underrepresented non-Western traditions?",
      options: ["A) Non-Western artistic traditions were less sophisticated", "B) Power, institutional bias, and the centering of Western perspectives in academic and museum systems ✅", "C) Non-Western art was not documented thoroughly enough", "D) Non-Western traditions focused on crafts rather than fine art"],
      correctIndex: 1
    },
    {
      question: "Romanticism arose as a reaction to:",
      options: ["A) The Renaissance's religious focus", "B) The Baroque's theatrical excess", "C) Enlightenment rationalism and industrialization — a longing for nature, emotion, and individual experience ✅", "D) Photography's challenge to painting"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — art is never just decoration. It is the visual record of how humans have understood themselves, their world, and their place in the cosmos in every era. You're an Art Historian — someone who can look at a painting and see the ideas, the conflicts, the technology, and the humanity behind it. Art is civilization's mirror."

[Badge: Art Historian]`
    }
  },

  {
    id: "level3-creative-arts-2",
    level: 3,
    subject: "Creative Arts",
    unit: "Unit 3: Art as Communication",
    lessonNumber: 2,
    title: "Music Theory & Composition",
    guide: "Muse",
    avatar: "muse",
    badge: "Music Theorist",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we learn the language of music — the theory that underlies every piece of music ever written, from Bach to Beethoven to Kendrick Lamar. Music theory is to music what grammar is to language: it doesn't constrain expression — it gives it structure and meaning. Understanding theory makes you a better listener, a better musician, and a better creator."`,
      spark: `"Every culture in human history has independently developed music. No society has ever been discovered without it. Neurologically, music activates more parts of the brain simultaneously than any other activity. It can alter mood, trigger memory, synchronize groups of people, and communicate emotion across language barriers. Why do you think music is so universally and profoundly human?"`,
      learn: `"Music theory is the study of the structure, language, and patterns of music.

The building blocks:

Pitch — the highness or lowness of a note. Determined by frequency (vibrations per second). A4 = 440 Hz (concert standard).

Notes and the musical alphabet: A B C D E F G — then repeats. An octave is the distance from one note to the same note at double the frequency. Going from C to the next C is one octave.

Half steps and whole steps:
Half step — the smallest interval in Western music. On a piano, moving one key to the right or left.
Whole step — two half steps.

Scales — ordered sequences of notes:
Major scale: W W H W W W H (whole and half step pattern). C major: C D E F G A B C. Sounds bright, happy, resolved.
Minor scale: W H W W H W W. A minor: A B C D E F G A. Sounds darker, more emotional.
Why do major and minor sound different? The intervals between notes create different emotional qualities.

Chords — three or more notes played simultaneously:
Major chord: root + major third + perfect fifth (sounds stable, happy)
Minor chord: root + minor third + perfect fifth (sounds darker, more emotional)
Seventh chords — add a fourth note (the seventh) creating tension and color.

Key signatures — tells musicians which notes to sharpen or flatten throughout a piece. C major has no sharps or flats. G major has 1 sharp (F#). F major has 1 flat (Bb).

Rhythm:
Time signature — how beats are organized: 4/4 (four quarter beats per measure), 3/4 (waltz), 6/8 (compound).
Tempo — speed (BPM: beats per minute). Largo (~50 BPM), Andante (~80), Allegro (~130), Presto (~180+).

Dynamics — volume variations:
p (piano) = soft, f (forte) = loud, mp (mezzo-piano) = medium soft, mf (mezzo-forte) = medium loud, crescendo = gradually louder, decrescendo = gradually softer.

Harmony — the way chords and notes are combined:
Consonance — notes that sound pleasing together (perfect fifth, major third)
Dissonance — notes that sound tense together. Dissonance creates tension; resolution to consonance creates release and satisfaction — the fundamental emotional mechanism of music.

Song structure (pop/rock):
Verse → Chorus → Verse → Chorus → Bridge → Chorus
The chorus carries the emotional peak. The bridge provides contrast. Familiarity vs. novelty is managed through structure.

The mathematics of music: Music is applied mathematics. Frequency ratios (2:1 = octave, 3:2 = perfect fifth) are mathematical relationships. Bach wrote fugues of extraordinary mathematical complexity. Electronic music uses discrete mathematics (sampling rates, frequency analysis). Music and math are deeply related."`,
      explore: `"Music theory in action:

1. On a piano keyboard (or an online piano like Musicca.com or Piano.com):
a) Play the C major scale: C D E F G A B C
b) Play the A minor scale: A B C D E F G A
c) Play a C major chord (C + E + G) and an A minor chord (A + C + E)
d) Describe how each sounds and feels differently

2. Analyze the structure of a song you know well:
- Identify verses, chorus, bridge
- Is it in major or minor? How does the key affect its emotional quality?
- What is the approximate tempo (count the beats per minute)?
- Are there dynamic variations? Where and why?

3. Compose a short 8-bar melody using only the notes of C major (C D E F G A B). Write it out as note names in sequence. Describe the mood you were trying to create and how your note choices created that mood.

[Text input]"`,
      quickcheck: {
        question: "The difference between major and minor scales produces different emotional qualities because:",
        options: ["A) Major scales have more notes than minor scales", "B) The interval pattern between notes differs — minor scales have a flattened third that creates a darker quality ✅", "C) Major scales are played faster, minor scales slower", "D) Major is for happy music, minor for sad by convention only — not musical reason"],
        correctIndex: 1,
        explanation: "The emotional quality difference between major and minor comes from the actual interval pattern — specifically the distance of the third note from the root. A minor third (major scale) and a flattened minor third (minor scale) have genuinely different acoustic properties that human hearing consistently interprets as different emotional qualities."
      },
      quiz: [
    {
      question: "An octave is:",
      options: ["A) Eight consecutive notes of any scale", "B) The distance from one note to the same note at double the frequency ✅", "C) The complete chromatic scale of 12 notes", "D) Eight bars of music in 4/4 time"],
      correctIndex: 1
    },
    {
      question: "Dissonance in music creates:",
      options: ["A) Pleasant, resolved harmony", "B) Musical mistakes requiring correction", "C) Tension — which when resolved to consonance creates the fundamental emotional mechanism of music ✅", "D) The same effect as consonance in minor keys"],
      correctIndex: 2
    },
    {
      question: "A 4/4 time signature means:",
      options: ["A) The piece is played at 44 beats per minute", "B) Four quarter-note beats per measure ✅", "C) Four instruments play simultaneously", "D) The piece is divided into four sections"],
      correctIndex: 1
    },
    {
      question: "Why is music related to mathematics?",
      options: ["A) Only by coincidence", "B) Music notation is based on numbers", "C) Pitch frequencies, intervals, and rhythmic structures are all expressible as mathematical ratios and relationships ✅", "D) Music theory was invented by mathematicians"],
      correctIndex: 2
    },
    {
      question: "In pop/rock song structure, the bridge typically:",
      options: ["A) Repeats the verse with different lyrics", "B) Is the same as the chorus with louder dynamics", "C) Provides contrast and emotional variety before returning to the chorus ✅", "D) Introduces entirely new musical themes that are never revisited"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — music has a language, and now you can speak it. Every song you hear from now on, you'll hear differently — the structure, the harmony, the choices that create emotional impact. You're a Music Theorist — and whether you compose, perform, or just deeply listen, you now experience music at a level most people never reach."

[Badge: Music Theorist]`
    }
  },

  {
    id: "level3-creative-arts-3",
    level: 3,
    subject: "Creative Arts",
    unit: "Unit 3: Art as Communication",
    lessonNumber: 3,
    title: "Screenwriting & the Architecture of Story",
    guide: "Muse",
    avatar: "muse",
    badge: "Story Architect",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study the craft behind the stories that move us most — films, TV shows, and video games. Screenwriting is unique: it's writing designed to become something else — to be seen, not read. But it requires mastering story structure, character psychology, dialogue, and visual thinking in ways that transfer to every other form of storytelling. This is where craft meets art."`,
      spark: `"Every major Hollywood film follows a structure that Aristotle first described in 350 BCE: beginning, middle, end, with a protagonist who wants something, faces obstacles, and is changed by the effort. Every Pixar film follows a formula their story department developed from this: 'Once upon a time... Every day... Until one day... Because of that... Until finally... Ever since then...' Why do these structures work so reliably on human audiences across cultures and centuries?"`,
      learn: `"Screenwriting is the craft of writing scripts for film, television, and other screen media.

The three-act structure:
Act I (Setup, ~25%) — establish the world, protagonist, tone. The Inciting Incident (typically at the end of Act I) disrupts the status quo and forces the protagonist into the main story.
Act II (Confrontation, ~50%) — the protagonist pursues their goal and faces escalating obstacles. The Midpoint (at Act II's center) raises stakes. The Act II Break reveals a major setback or revelation.
Act III (Resolution, ~25%) — the climax confronts the central conflict. The protagonist is changed. Resolution.

Character in screenwriting:

External vs internal goal:
External — what the character wants (to win the competition, to survive, to get the girl)
Internal — what the character needs (to learn to accept help, to forgive themselves, to reconnect with family)
The best stories have both — and the character achieves the internal need in order to achieve (or meaningfully fail to achieve) the external want.

Flaw and arc — a great protagonist has a significant flaw that the story's events force them to confront and overcome (or fail to). This is the character arc. Without arc, there's no transformation — and without transformation, there's no story worth telling.

Antagonist — not a villain necessarily, but a force in direct opposition to the protagonist's goal. The antagonist must be strong — a weak antagonist makes a weak hero.

Dialogue — what characters say:
Dialogue reveals character — every character speaks distinctly
Dialogue is subtext — what characters DON'T say is often more important
Dialogue moves the story forward — every line serves the narrative
Dialogue is NOT real conversation — it's heightened, purposeful, compressed

Visual storytelling — film is a visual medium:
Show, don't tell — reveal character and emotion through action and image, not narration
Scene construction — every scene has a beginning, middle, and end; a character wants something; conflict arises; the scene ends differently from how it began

The Pixar storytelling framework:
'Once upon a time there was _. Every day, _. Until one day _. Because of that, _. Because of that, _. Until finally _. And ever since then _.'

Theme — the question the story is exploring and answering. 'What does it mean to truly belong?' 'Is revenge worth the cost?' Theme is what gives story meaning beyond plot."`,
      explore: `"Story construction:

1. Apply the Pixar story spine to an original story idea:
Once upon a time there was...
Every day...
Until one day...
Because of that...
Because of that...
Until finally...
And ever since then...

2. Character design:
Create a protagonist with:
- External goal (what they want)
- Internal need (what they really need to learn)
- Key flaw that makes achieving both difficult
- How the story forces them to confront that flaw

3. Write a 1-page scene (1 page of screenplay = approximately 1 minute of screen time) where a character wants something, faces resistance, and the scene ends in a different state from how it began. Focus on showing emotion through action and dialogue, not narration.

[Text input]"`,
      quickcheck: {
        question: "The difference between a character's external goal and internal need is:",
        options: ["A) External goals are physical; internal needs are emotional only", "B) External is what they want (the plot goal); internal is what they need to learn or become for genuine fulfillment ✅", "C) External goals are always achieved; internal needs are never fully met", "D) They are the same thing expressed from different perspectives"],
        correctIndex: 1,
        explanation: "External goal is what the character consciously wants to achieve — the plot-driving objective. Internal need is what they unconsciously need to learn or change in order to truly grow. The best stories resolve both."
      },
      quiz: [
    {
      question: "The Inciting Incident in three-act structure:",
      options: ["A) Happens at the story's climax", "B) Introduces a secondary character", "C) Disrupts the protagonist's normal world and forces them into the main story — typically at the end of Act I ✅", "D) Is the moment the protagonist's flaw is revealed to the audience"],
      correctIndex: 2
    },
    {
      question: "In screenwriting, subtext in dialogue means:",
      options: ["A) Lines that appear beneath the dialogue in the script", "B) What characters don't say — the underlying meaning beneath the words ✅", "C) Technical descriptions of how lines should be delivered", "D) Exposition hidden within seemingly casual conversation"],
      correctIndex: 1
    },
    {
      question: "A strong antagonist is important because:",
      options: ["A) Stories must have a clear villain", "B) Antagonists represent evil that must be overcome", "C) A strong opposing force creates worthy challenges that make the protagonist's growth meaningful ✅", "D) Audiences always need someone to dislike"],
      correctIndex: 2
    },
    {
      question: "Film is described as a visual medium, so screenwriters should:",
      options: ["A) Use as little dialogue as possible", "B) Show character and emotion through action and image rather than narration or explanation ✅", "C) Focus primarily on beautiful descriptions of settings", "D) Write exactly what actors should feel and think"],
      correctIndex: 1
    },
    {
      question: "Theme in a story provides:",
      options: ["A) The main character's backstory", "B) The moral lesson the protagonist learns", "C) The central question the story explores — giving narrative events meaning beyond plot ✅", "D) The story's genre and tone"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — story is the oldest technology humans have. It's how we make sense of experience, transmit values, and understand each other across time and culture. You now understand the architecture beneath the stories that move you. You're a Story Architect — and with these tools, you can build worlds, create characters, and tell truths that couldn't be expressed any other way."

[Badge: Story Architect]`
    }
  },

  {
    id: "level3-life-wellness-1",
    level: 3,
    subject: "Life",
    unit: "Unit 3: Advanced Wellness",
    lessonNumber: 1,
    title: "Nutrition Science & How Food Affects Your Brain",
    guide: "Terra",
    avatar: "terra",
    badge: "Nutrition Scientist",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! At Level 3, we go beyond 'eat your vegetables' and into the actual science of how food affects your brain, mood, hormones, and long-term health. The gut-brain connection is one of the most exciting frontiers in neuroscience. What you eat doesn't just affect your body — it determines how you think, how you feel, and how you perform."`,
      spark: `"Your gut contains 500 million neurons — more than the spinal cord. It produces 90% of your body's serotonin (the key mood neurotransmitter) and communicates directly with your brain through the vagus nerve. Researchers are calling the gut a 'second brain.' A 2019 study found that changing diet significantly improved depression symptoms in a clinical trial. What does it mean that what you eat might be affecting your mental health?"`,
      learn: `"Nutrition science studies how food and its components affect the body and mind.

Macronutrients — the three main energy sources:

Carbohydrates (4 cal/gram) — the body's preferred fuel. Complex carbs (oats, sweet potatoes, legumes) digest slowly, providing sustained energy. Simple carbs (sugar, white bread) digest rapidly — blood sugar spikes, then crashes, affecting mood and concentration.

Proteins (4 cal/gram) — made of amino acids. 20 amino acids total; 9 essential (must come from food). Functions: building and repairing tissue, enzymes, neurotransmitters, hormones, immune function. Sources: meat, fish, eggs, legumes, dairy.

Fats (9 cal/gram) — essential for brain function, hormones, nutrient absorption. Types:
Saturated fats (meat, dairy) — moderate consumption
Unsaturated fats (olive oil, avocado, nuts) — cardioprotective
Trans fats (partially hydrogenated oils) — harmful; eliminated in most countries
Omega-3 fatty acids (fatty fish, walnuts, flaxseed) — anti-inflammatory; critical for brain function and mental health

Micronutrients — vitamins and minerals:
Iron — oxygen transport; deficiency causes fatigue and impaired cognition
Vitamin D — immune function, mood regulation, bone health; deficiency extremely common
Magnesium — involved in 300+ biochemical reactions; stress depletes it; affects sleep and anxiety
Zinc — immune function, wound healing, testosterone production
B vitamins (especially B12, folate) — neurological function and energy

The gut-brain axis:
The enteric nervous system (gut's neural network) communicates bidirectionally with the brain via the vagus nerve.
90% of serotonin is produced in the gut — influenced by gut bacteria.
Gut microbiome — the trillions of bacteria living in the gut. Diversity correlates with mental and physical health. Fed by fiber (prebiotic foods); replenished by fermented foods (yogurt, kimchi, kefir).
Inflammation (often diet-driven) is now linked to depression, anxiety, and cognitive decline.

Food and brain performance:
Glucose — the brain's primary fuel. Stable blood sugar = stable cognition. Spikes and crashes = impaired focus, mood swings, brain fog.
Omega-3s — DHA (a type of omega-3) makes up 30% of the brain's gray matter. Deficiency associated with depression and cognitive decline.
Antioxidants (berries, dark chocolate, green tea) — protect brain cells from oxidative damage.
Hydration — even mild dehydration (1-2%) impairs cognitive performance.

Anti-inflammatory eating pattern: Mediterranean diet — olive oil, vegetables, fish, legumes, nuts, whole grains, moderate wine — consistently associated with better brain health, lower depression rates, and longevity across dozens of studies."`,
      explore: `"Nutrition audit and experiment:

1. Track everything you eat for one full day. Then evaluate:
- Did you get all three macronutrients? In what proportions?
- Which micronutrients were you likely low in?
- How many different colors of vegetables/fruits did you eat? (Color diversity = nutrient diversity)
- How did your food choices affect your energy and focus throughout the day?

2. Research the gut microbiome:
a) What are 5 specific foods that support a healthy gut microbiome?
b) What are 3 things that damage it?
c) How does gut health affect mental health specifically?

3. Design a one-day anti-inflammatory meal plan that optimizes brain performance. For each meal, explain what nutrients you're prioritizing and why.

[Text input]"`,
      quickcheck: {
        question: "The gut produces approximately what percentage of the body's serotonin?",
        options: ["A) 20%", "B) 50%", "C) 75%", "D) 90% ✅"],
        correctIndex: 3,
        explanation: "About 90% of the body's serotonin — the key mood neurotransmitter — is produced in the gut, not the brain. This is why gut health is now recognized as having profound effects on mental health and mood."
      },
      quiz: [
    {
      question: "Omega-3 fatty acids are particularly important for the brain because:",
      options: ["A) They are the only fat the brain uses for fuel", "B) DHA, a type of omega-3, makes up about 30% of the brain's gray matter ✅", "C) They cross the blood-brain barrier more easily than other fats", "D) They reduce inflammation only in the body, not the brain"],
      correctIndex: 1
    },
    {
      question: "Complex carbohydrates are preferable to simple carbs because:",
      options: ["A) They taste better and are more filling", "B) They digest slowly, providing stable blood sugar and sustained energy rather than spikes and crashes ✅", "C) They contain more calories for longer energy", "D) They have more vitamins and minerals per gram"],
      correctIndex: 1
    },
    {
      question: "A diverse gut microbiome is maintained by:",
      options: ["A) Avoiding all bacteria through hygiene", "B) Taking antibiotics preventively", "C) Eating fiber-rich prebiotic foods and fermented foods ✅", "D) Eating a consistent diet of the same foods"],
      correctIndex: 2
    },
    {
      question: "The Mediterranean diet is consistently associated with:",
      options: ["A) Rapid weight loss", "B) Better brain health, lower depression, and longevity across numerous studies ✅", "C) Highest protein consumption of any dietary pattern", "D) The easiest diet to follow for busy people"],
      correctIndex: 1
    },
    {
      question: "Even mild dehydration (1-2%) affects:",
      options: ["A) Only physical athletic performance", "B) Primarily kidney function", "C) Cognitive performance — focus, memory, and mood ✅", "D) Only thermoregulation and heart rate"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — the food you eat is information — it tells your body and brain what to do, how to feel, and how to perform. Now you understand the science behind those messages. You're a Nutrition Scientist — and that means every meal you choose is either investing in your future performance and health or drawing it down. You get to choose which."

[Badge: Nutrition Scientist]`
    }
  },

  {
    id: "level3-life-wellness-2",
    level: 3,
    subject: "Life",
    unit: "Unit 3: Advanced Wellness",
    lessonNumber: 2,
    title: "Building Sustainable Habits & Overcoming Resistance",
    guide: "Terra",
    avatar: "terra",
    badge: "Habit Engineer",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we tackle one of the most practically important topics in all of human behavior — habit formation and the psychology of resistance. Why do we know what we should do but not do it? Why do we make resolutions that fall apart? Why does motivation fade? And most importantly — how do we design systems that work even when motivation is absent?"`,
      spark: `"According to research by Duke University, about 40-45% of what people do every day is habit — not conscious decision. You don't decide to brush your teeth, take the same route to school, reach for your phone in the morning — these happen automatically. If habits govern nearly half your day, what does it mean to be intentional about which habits you build? And what would change if you designed them deliberately?"`,
      learn: `"A habit is a behavior that has been repeated enough times to become automatic — triggering with minimal conscious thought.

The Habit Loop (Charles Duhigg):
1. Cue — the trigger that starts the behavior (time, place, emotion, preceding action, other people)
2. Routine — the behavior itself
3. Reward — what the brain receives (pleasure, relief, sense of accomplishment)

The neurological basis: When a behavior is repeated consistently, the basal ganglia encodes it as a chunk — a single automatic routine triggered by the cue. This is why habits are powerful (automatic, energy-efficient) and persistent (encoded deeply, very difficult to delete).

Bad habits cannot be fully eliminated — only replaced. The cue and reward remain; only the routine changes.

Behavioral science of habit formation:

Habit stacking (BJ Fogg) — anchoring new habits to existing ones: 'After I [current habit], I will [new habit].' Makes the existing behavior the cue. 'After I pour my morning coffee, I will write 3 things I'm grateful for.'

Implementation intentions — specifying WHEN and WHERE you'll do the behavior dramatically increases follow-through. 'I will exercise' → 30% completion rate. 'I will exercise at 7am in my bedroom every Monday, Wednesday, Friday' → 91% completion rate in studies.

Identity-based habits (James Clear) — the most powerful habits are attached to identity: 'I am a person who [x].' Each action is a vote for the identity. Sufficient votes change the belief.

Making habits stick — the 4 laws (Clear):
Make it obvious — design your environment to make the cue visible and clear
Make it attractive — pair habits with things you enjoy; use temptation bundling
Make it easy — reduce friction; a 2-minute version of the habit is still a vote for the identity
Make it satisfying — create an immediate reward

The psychology of resistance (Steven Pressfield) — any important creative or growth endeavor faces 'Resistance' — an internal force of procrastination, self-doubt, fear, distraction. Resistance is strongest precisely when the action matters most.
The professional doesn't wait for motivation. They show up regardless.
Amateurs wait for inspiration. Professionals work anyway.

Overcoming resistance:
Reduce the starting barrier to almost zero — 2 minutes is enough to begin
Design your environment for success (remove friction for good habits; add friction for bad ones)
Separate the identity from the performance — 'I am a writer' even when the writing was bad
Track your habits — missing once is an accident; missing twice is starting a new habit

The compound effect — small consistent improvements compound exponentially over time. 1% better every day for a year = 37x better. The most boring habit, done consistently, beats the most intense effort done sporadically."`,
      explore: `"Habit engineering:

1. Audit your current habits:
List 3 habits you want to build. For each, apply the 4 laws:
- Make it obvious: What is the cue? How can you make it more visible?
- Make it attractive: What can you pair it with that you already enjoy?
- Make it easy: What is the 2-minute version?
- Make it satisfying: What is the immediate reward?

2. Habit stack design: Write 3 specific habit stacks using the formula: 'After I [existing habit], I will [new habit].'

3. Resistance mapping: Choose one important goal you've been avoiding or repeatedly starting and stopping. Identify:
- What is the resistance? (Fear of failure? Perfectionism? Starting is too hard?)
- What is the smallest possible first action?
- Design an environment change that reduces friction for this action.

[Text input]"`,
      quickcheck: {
        question: "Bad habits cannot be fully eliminated — only replaced because:",
        options: ["A) The brain lacks the capacity to unlearn behaviors", "B) The habit loop cue and reward remain encoded; only the routine can change ✅", "C) Willpower is always insufficient to overcome learned behaviors", "D) Habits are stored in a part of the brain inaccessible to conscious thought"],
        correctIndex: 1,
        explanation: "Neuroscience shows that habit loops are encoded in the basal ganglia and persist even when not used. You can insert a new routine between the cue and reward, but the old loop doesn't fully disappear — which is why former smokers can relapse decades later."
      },
      quiz: [
    {
      question: "Implementation intentions improve habit completion because:",
      options: ["A) They make you more motivated to do the habit", "B) Specifying when and where you'll do the behavior creates a concrete plan that bridges intention and action ✅", "C) They use accountability partners to enforce habits", "D) They reduce the time required for each habit"],
      correctIndex: 1
    },
    {
      question: "Resistance (Pressfield) is strongest when:",
      options: ["A) You've recently failed at the same task", "B) You're new to a habit and haven't yet seen results", "C) The action matters most — resistance targets important creative and growth endeavors ✅", "D) You're tired or haven't slept well"],
      correctIndex: 2
    },
    {
      question: "Temptation bundling as a habit formation tool means:",
      options: ["A) Combining multiple habits into one action", "B) Pairing a new habit with something you already enjoy — making the habit attractive ✅", "C) Creating a bundle of habits to do simultaneously", "D) Bundling rewards for completing multiple habits"],
      correctIndex: 1
    },
    {
      question: "The compound effect in habit formation means:",
      options: ["A) Compound exercises build habit faster than simple ones", "B) Doing multiple habits at once creates compound benefits", "C) Small consistent improvements compound exponentially — 1% better daily = 37x better annually ✅", "D) Habits compound stress if practiced incorrectly"],
      correctIndex: 2
    },
    {
      question: "About what percentage of daily behavior is habit rather than conscious decision?",
      options: ["A) 10-15%", "B) 25-30%", "C) 40-45% ✅", "D) 60-70%"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you just learned the engineering of behavior. Not motivation, not willpower — systems. Environments. Tiny consistent actions that compound over time. You're a Habit Engineer — and that means you have the tools to deliberately design the person you're becoming, one tiny action at a time, every single day."

[Badge: Habit Engineer]`
    }
  },

  {
    id: "level3-life-wellness-3",
    level: 3,
    subject: "Life",
    unit: "Unit 3: Advanced Wellness",
    lessonNumber: 3,
    title: "Relationships, Boundaries & Healthy Connection",
    guide: "Terra",
    avatar: "terra",
    badge: "Connection Master",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we study relationships — one of the most important determinants of your happiness, health, and wellbeing throughout your entire life. The longest study of human wellbeing in history — the Harvard Study of Adult Development, now 85+ years old — found that the quality of relationships is the single biggest predictor of health and happiness across a lifetime. This isn't soft — it's science."`,
      spark: `"The Harvard Study tracked 268 Harvard men and 456 inner-city Boston men from their teens into old age. The conclusion of their 85 years of data: 'The people who were most satisfied in their relationships at age 50 were the healthiest at age 80.' Not wealth. Not fame. Not intelligence. Relationship quality. What do you think makes a relationship truly healthy — for both people — rather than just one that lasts?"`,
      learn: `"Healthy relationships — romantic, friendship, family — share core qualities that can be learned and cultivated.

Attachment theory (John Bowlby / Mary Ainsworth):
Early relationships with caregivers create attachment styles that influence all future relationships.

Secure attachment — comfortable with closeness and independence; trusts others; can express needs; handles conflict constructively. Associated with: early caregiving that was consistently responsive and warm.

Anxious attachment — craves closeness but fears rejection; hypervigilant to signs of abandonment; tends toward clinginess or people-pleasing. Associated with: inconsistent caregiving.

Avoidant attachment — uncomfortable with closeness; highly independent; dismisses emotional needs; pulls away under stress. Associated with: emotionally unavailable caregiving.

Disorganized attachment — combination of anxious and avoidant; most common in trauma backgrounds.

Attachment styles are not fixed. Understanding yours is the first step to developing more secure patterns.

Healthy relationship characteristics:
Mutuality — both people's needs are valued and addressed
Trust — the foundation; built through consistent small actions over time
Respect — treating the other person as whole, complex, and capable
Honest communication — being able to express needs, feelings, and concerns
Conflict handled constructively — disagreements are inevitable; contempt, stonewalling, and defensiveness (Gottman's 'Four Horsemen') predict relationship failure
Individuation — two people remaining distinct individuals within the relationship

Boundaries — the limits we establish about what we will and won't accept in relationships:
Boundaries are not walls — they're the conditions under which we can be close.
Types: physical, emotional, time, energy, digital.
Boundaries communicate: what you need, what you won't accept, what you will do if the boundary is crossed.
Healthy boundary statement: 'I feel [emotion] when [specific behavior]. I need [specific change]. If that doesn't change, I will [specific consequence].'
Boundaries can only be communicated — not enforced on others. You control your response.

Red flags in relationships:
Consistent disrespect of stated boundaries
Controlling behavior
Isolation from other relationships
Humiliation (especially in public)
Inconsistency that keeps you in a state of anxiety
Normalizing mistreatment ('everyone fights like this')

Gottman's Four Horsemen (predictors of relationship failure):
Criticism — attacking character rather than addressing behavior
Contempt — treating the other as inferior (the most corrosive)
Defensiveness — making yourself the victim when given feedback
Stonewalling — withdrawing from interaction entirely

The antidotes exist for each — criticism → complaint with request; contempt → appreciation; defensiveness → accountability; stonewalling → physiological self-soothing then re-engage."`,
      explore: `"Relationship reflection:

1. Attachment style exploration:
a) Research the four attachment styles more deeply. Based on what you understand about your early relationships, which pattern do you most recognize in yourself?
b) In what types of relationships does this pattern serve you? In what types does it limit you?
c) What would more secure attachment look like for you specifically?

2. Boundary practice:
Think of a relationship where you need a boundary you haven't yet set (or set clearly). Write:
- The specific behavior that's an issue
- What you feel when it happens
- What you need instead
- What you will do if it continues
- How you would communicate this (write the actual words)

3. The Harvard Study concluded relationship quality is more predictive of health at 80 than cholesterol levels at 50. What does this say about where you should invest your time and attention? How would you evaluate the quality of your most important relationships right now?

[Text input]"`,
      quickcheck: {
        question: "In John Gottman's research, which of the Four Horsemen is most corrosive to relationships?",
        options: ["A) Criticism — attacking character", "B) Defensiveness — becoming the victim", "C) Stonewalling — withdrawing from interaction", "D) Contempt — treating the other person as inferior ✅"],
        correctIndex: 3,
        explanation: "Gottman's research found contempt — treating your partner as inferior through sarcasm, eye-rolling, mockery, or dismissiveness — is the single strongest predictor of relationship failure because it communicates fundamental disrespect for the person."
      },
      quiz: [
    {
      question: "Anxious attachment typically develops from:",
      options: ["A) Trauma and abuse in childhood", "B) Consistently warm and responsive caregiving", "C) Inconsistent caregiving — sometimes warm, sometimes unavailable ✅", "D) Growing up as an only child"],
      correctIndex: 2
    },
    {
      question: "A healthy boundary is best defined as:",
      options: ["A) A wall that protects you from others", "B) The conditions under which you can be close — what you need and won't accept ✅", "C) Rules you impose on others in a relationship", "D) Emotional distance to protect yourself from hurt"],
      correctIndex: 1
    },
    {
      question: "The Harvard Study's most important finding was that:",
      options: ["A) Intelligence is the strongest predictor of life satisfaction", "B) Wealth and career achievement predict long-term wellbeing", "C) Quality of relationships is the single biggest predictor of health and happiness over a lifetime ✅", "D) Physical health in early adulthood determines overall life quality"],
      correctIndex: 2
    },
    {
      question: "The antidote to criticism (one of Gottman's Four Horsemen) is:",
      options: ["A) Spending more positive time together", "B) A gentle complaint focused on behavior plus a request for change ✅", "C) Taking time apart when disagreements arise", "D) Agreeing to avoid criticism entirely"],
      correctIndex: 1
    },
    {
      question: "Individuation in a healthy relationship means:",
      options: ["A) Spending time apart from the relationship", "B) Putting your own needs first", "C) Both people remaining distinct individuals with their own identity within the relationship ✅", "D) Resolving disagreements individually before discussing them"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — the quality of your relationships will determine more about your wellbeing than almost anything else in your life. Now you understand what makes relationships healthy, what threatens them, and how to communicate the boundaries that allow genuine closeness. You're a Connection Master — and investing in relationship quality is one of the highest-return investments a human being can make."

[Badge: Connection Master]`
    }
  },

  {
    id: "level3-social-leadership-1",
    level: 3,
    subject: "Social",
    unit: "Unit 3: Leadership Systems",
    lessonNumber: 1,
    title: "Leadership Styles & When to Use Them",
    guide: "Valor",
    avatar: "valor",
    badge: "Adaptive Leader",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! At Level 3 leadership, we stop asking 'what makes a good leader?' and start asking 'what kind of leader does this situation need?' The most effective leaders don't have one style — they have a range and the judgment to know which to apply. This is called situational leadership — and it's what separates good leaders from great ones."`,
      spark: `"Abraham Lincoln assembled a 'team of rivals' — including his former political opponents — as his Cabinet during the Civil War, because he needed the best minds, not loyal subordinates. Steve Jobs was notoriously autocratic, demanding, and sometimes cruel — yet transformed multiple industries. Nelson Mandela led through extraordinary moral authority and reconciliation after 27 years in prison. All three were extraordinary leaders. None of them led the same way. What does this tell us about leadership?"`,
      learn: `"Leadership is the ability to influence, inspire, and guide individuals or groups toward shared goals.

Major leadership styles:

Autocratic — leader makes decisions alone, without significant input. Effective: genuine emergencies requiring fast decisions; when leader has clear superior expertise; with inexperienced teams. Ineffective: long-term with capable teams; when buy-in is critical; when creativity is needed.

Democratic/Participative — leader involves the team in decision-making. Effective: when team expertise is high; when decisions require buy-in and implementation; for building trust. Ineffective: genuine time crises; when team lacks relevant knowledge.

Transformational — leader inspires through vision and elevating team members to their highest potential. Focus on meaning, growth, and change. Effective: when significant change is needed; with capable, motivated teams. Requires authentic vision.

Servant leadership (Robert Greenleaf) — leader exists to serve the team's needs, enabling them to perform their best. Focus: removing obstacles, developing people, building community. Long-term: builds extraordinary loyalty and performance.

Coaching leadership — focused on developing individuals for the long-term. Time-intensive but builds organizational capacity. Effective with motivated people who need skill development.

Laissez-faire — minimal leadership; full autonomy to team. Effective only with highly experienced, self-directed experts. Becomes abdication (failure) in most other contexts.

Situational Leadership (Hersey-Blanchard) — the most effective style depends on the team member's readiness level:
Low competence, high enthusiasm (new to the task) → Directing (tell them what to do)
Some competence, lower confidence → Coaching (explain and support)
High competence, variable commitment → Supporting (collaborate, encourage)
High competence, high commitment → Delegating (trust and step back)

Leadership vs management:
Management: doing things right — processes, efficiency, resources, compliance
Leadership: doing the right things — vision, people, culture, change
Organizations need both. Many managers don't lead. Some leaders can't manage.

Leadership character:
Integrity — alignment between values and actions
Courage — making hard decisions, having difficult conversations
Humility — knowing what you don't know; taking feedback; giving credit
Empathy — understanding others' perspectives and needs
Resilience — persisting through failure

Power types (French and Raven):
Positional power — authority from title/role
Expert power — authority from knowledge
Referent power — authority from personality and relationships (most durable)
Coercive power — authority from ability to punish (least effective for long-term engagement)"`,
      explore: `"Leadership style analysis:

1. Case study comparison: Research three of these leaders and analyze their primary leadership style, when it worked, and when (if ever) it failed:
- Jacinda Ardern (New Zealand Prime Minister)
- Elon Musk
- Ruth Bader Ginsburg
- Malala Yousafzai
- Satya Nadella (Microsoft CEO)

2. Situational leadership application:
You lead a team of 5 for a school project. Member A is brand new and excited but has no idea what to do. Member B knows the subject well but has lost motivation. Member C is your most expert member and works independently.
For each member: What readiness level are they at? What leadership style would you use with them specifically?

3. Identify a leadership situation in your own life (a team, a group, a situation where you had or could have influence). What leadership style did you or would you use? What would have worked better?

[Text input]"`,
      quickcheck: {
        question: "Situational leadership theory proposes that effective leaders:",
        options: ["A) Develop one consistent leadership style and apply it universally", "B) Always use democratic decision-making to build team buy-in", "C) Adapt their style to match the competence and commitment level of each team member ✅", "D) Use autocratic style for important decisions only"],
        correctIndex: 2,
        explanation: "Situational leadership by Hersey and Blanchard argues that no single style is best — leaders should adapt their approach (directing, coaching, supporting, or delegating) to match each team member's readiness level."
      },
      quiz: [
    {
      question: "Referent power is the most durable form of power because:",
      options: ["A) It comes from official organizational authority", "B) It cannot be revoked by organizational decisions", "C) It comes from personality and relationships — people follow because they want to ✅", "D) It is based on expertise that grows over time"],
      correctIndex: 2
    },
    {
      question: "Servant leadership focuses on:",
      options: ["A) Leaders sacrificing their own vision for team preferences", "B) Enabling team performance by removing obstacles, developing people, and building community ✅", "C) Serving customers before serving employees", "D) Leaders doing whatever tasks team members request"],
      correctIndex: 1
    },
    {
      question: "Laissez-faire leadership is effective only when:",
      options: ["A) The leader is new and still learning the domain", "B) The team is low in experience and needs guidance", "C) The team consists of highly experienced, self-directed experts ✅", "D) Rapid organizational change is required"],
      correctIndex: 2
    },
    {
      question: "Leadership differs from management in that leadership focuses on:",
      options: ["A) Compliance, processes, and efficiency", "B) Vision, people, culture, and change — doing the right things ✅", "C) Resource allocation and task coordination", "D) Short-term results and operational stability"],
      correctIndex: 1
    },
    {
      question: "A team member with high competence but variable commitment needs:",
      options: ["A) Directing — clear instructions on what to do", "B) Coaching — explanation and support", "C) Delegating — full autonomy and trust", "D) Supporting — collaboration and encouragement to restore motivation ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — great leadership is not one thing. It's a repertoire — a range of styles applied with judgment to serve the people and goals in front of you. You're an Adaptive Leader — someone who understands that the most powerful leaders aren't those who are always strong, but those who know what each situation and each person actually needs."

[Badge: Adaptive Leader]`
    }
  },

  {
    id: "level3-social-leadership-2",
    level: 3,
    subject: "Social",
    unit: "Unit 3: Leadership Systems",
    lessonNumber: 2,
    title: "Ethics in Leadership & Decision-Making",
    guide: "Valor",
    avatar: "valor",
    badge: "Ethical Leader",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we tackle the most important dimension of leadership — ethics. Not just 'what works' but 'what is right.' Leaders make decisions that affect other people. That responsibility requires more than intelligence and effectiveness — it requires a developed moral compass. Today we explore how to reason ethically when the answers aren't obvious."`,
      spark: `"You are a doctor during a disaster with 5 injured patients and enough supplies to save only one. Do you save the youngest? The sickest? The one who might save the most other lives? The one with the best chance of survival? Or refuse to choose — and let chance decide? Different ethical frameworks give different answers. Which would you choose? What does your answer reveal about your values?"`,
      learn: `"Ethics is the branch of philosophy concerned with questions of right and wrong, good and bad, and how we should act.

Major ethical frameworks:

Consequentialism (Utilitarianism — Jeremy Bentham, John Stuart Mill):
What is right is what produces the greatest good for the greatest number.
Judge actions by their outcomes — not by rules or intentions.
Advantage: flexible, real-world focused, accounts for all affected parties.
Problem: can justify violating individual rights for greater aggregate benefit; impossible to accurately predict all consequences.

Deontology (Immanuel Kant):
Some actions are inherently right or wrong — regardless of consequences.
Kant's Categorical Imperative: 'Act only according to principles you would want to become universal laws.'
Advantage: protects individual rights absolutely; provides clear rules.
Problem: can lead to rigid, counterintuitive results ('you must not lie, even to protect an innocent person').

Virtue ethics (Aristotle):
Focus not on rules or outcomes but on character — what kind of person should I be? What would a virtuous person do?
Virtues: courage, honesty, justice, compassion, practical wisdom (phronesis).
Advantage: focuses on developing character rather than following rules.
Problem: doesn't provide clear action guidance in specific dilemmas.

Care ethics (Carol Gilligan):
Ethical decisions should center on relationships, context, and the needs of specific individuals — not abstract rules or calculations.
Advantage: accounts for particular relationships and vulnerabilities.
Problem: can seem to justify favoring those close to us over strangers.

Leadership ethics in practice:

Conflicts of interest — situations where personal interests could improperly influence professional decisions. Require disclosure and recusal.

Transparency vs confidentiality — leaders often know things they cannot share; communicating why they can't share is itself a form of ethical communication.

Whistleblowing — the ethics of exposing organizational wrongdoing. When is loyalty owed to the organization vs. the public? Most ethical frameworks agree: serious harm to others overrides organizational loyalty.

The trolley problem applied to leadership — real leaders constantly face trolley-problem decisions: how to allocate scarce resources, whose needs to prioritize, which truths to tell. No framework fully resolves these — but having one develops better decisions than having none.

Ethical decision-making process:
1. Identify the ethical dimensions (who is affected? what values conflict?)
2. Apply multiple frameworks — do they agree? If not, why not?
3. Consider the most vulnerable parties — whose needs are most easily overlooked?
4. Ask: would I be comfortable if this decision were made public?
5. Consult others with relevant expertise or perspective
6. Make a decision and take responsibility for it"`,
      explore: `"Ethical reasoning:

1. Apply each framework to this scenario:
You're a city official allocating limited flood response resources. You can help a wealthy neighborhood with 50 homes at risk, OR a poor neighborhood with 200 at risk — but not both. The wealthy neighborhood has political connections that could affect your career.
How does each framework — consequentialism, deontology, virtue ethics, care ethics — guide the decision? What would you do and why?

2. Real ethical dilemma research: Find a real corporate or political ethics scandal from the last 5 years. Analyze:
- What ethical principles were violated?
- What framework was the decision-maker apparently using?
- What should they have done differently?
- What were the consequences?

3. The newspaper test: Before making an important decision, ask 'Would I be comfortable seeing this on the front page of a newspaper?' Is this a good ethical test? What are its limitations?

[Text input]"`,
      quickcheck: {
        question: "Kant's Categorical Imperative asks you to:",
        options: ["A) Consider the greatest good for the greatest number", "B) Act only according to principles you'd want to become universal laws ✅", "C) Ask what a virtuous person would do", "D) Focus on the needs of those in your immediate relationships"],
        correctIndex: 1,
        explanation: "Kant's Categorical Imperative says: before acting, ask 'What if everyone did this?' Only act on principles you'd be willing to see universalized. This separates genuinely ethical actions from self-interested exceptions."
      },
      quiz: [
    {
      question: "Utilitarianism's main limitation is:",
      options: ["A) It provides no clear action guidance", "B) It focuses too heavily on character rather than outcomes", "C) It can justify violating individual rights for greater aggregate benefit ✅", "D) It only applies to economic decisions"],
      correctIndex: 2
    },
    {
      question: "Virtue ethics focuses on:",
      options: ["A) Calculating the best outcome", "B) Following clear moral rules", "C) Character development — what kind of person should I be? ✅", "D) Prioritizing relationships over abstract principles"],
      correctIndex: 2
    },
    {
      question: "Whistleblowing is ethically justified when:",
      options: ["A) An employee disagrees with company policy", "B) The employee has been passed over for promotion", "C) Serious harm to others overrides organizational loyalty ✅", "D) The information is already known by some employees"],
      correctIndex: 2
    },
    {
      question: "Care ethics (Gilligan) argues that ethical decisions should center on:",
      options: ["A) Abstract universal principles applied equally to all", "B) Calculating consequences for all parties affected", "C) Relationships, context, and the needs of specific individuals ✅", "D) Character traits and virtuous behavior patterns"],
      correctIndex: 2
    },
    {
      question: "Applying multiple ethical frameworks to a decision is valuable because:",
      options: ["A) It ensures you always reach the same conclusion", "B) No single framework captures all morally relevant considerations — convergence across frameworks increases confidence ✅", "C) It satisfies legal requirements for ethical decision-making", "D) It makes ethical decisions easier and faster"],
      correctIndex: 1
    }
      ],
      celebration: `"[child's name] — ethical reasoning isn't about having perfect answers. It's about having a process for thinking clearly when the answers are hard. You're an Ethical Leader — someone who takes moral responsibility seriously, applies multiple frameworks deliberately, and is willing to make hard calls while being accountable for them. That is the foundation of trustworthy leadership."

[Badge: Ethical Leader]`
    }
  },

  {
    id: "level3-social-leadership-3",
    level: 3,
    subject: "Social",
    unit: "Unit 3: Leadership Systems",
    lessonNumber: 3,
    title: "Building Organizations & Systems",
    guide: "Valor",
    avatar: "valor",
    badge: "System Builder",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we zoom out from individual leadership to organizational design — how you build structures and systems that work even when the founder isn't in the room. The most important thing a leader builds isn't a result — it's a system that produces results consistently. This is how small ideas become large institutions."`,
      spark: `"McDonald's has about 40,000 locations in 100+ countries. The founder Ray Kroc had a hamburger that wasn't particularly special. What he built wasn't a great burger — it was a system so precise that a teenager on their first day could produce a product indistinguishable from one made by a veteran chef across the world. What does it take to build a system that operates consistently without you?"`,
      learn: `"An organization is a structured group of people working toward shared goals. How it's structured determines how it functions.

Organizational structures:

Hierarchical (functional) — traditional pyramid. Clear chain of command, defined roles, centralized decision-making. Efficient at scale for stable, predictable work. Slow to adapt; reduces information flow.

Flat — few management layers; employees have significant autonomy. Faster decisions; more innovation. Harder to coordinate at large scale.

Matrix — employees report to both functional managers AND project managers. Enables cross-functional collaboration. Creates complexity and potential conflicts.

Network — loosely connected autonomous teams or organizations collaborating. Maximally adaptable. Minimal central coordination. Used by modern distributed companies and platforms.

Systems thinking:
A system is a set of interconnected elements organized to produce a specific outcome.
Systems have: elements (components), interconnections (relationships between components), and a function (what the system does).
The most important and least visible part of a system is its function/purpose — not its elements.

Leverage points — places in a system where small changes produce large effects:
Changing flows and feedback loops is more powerful than changing elements.
Changing goals and paradigms is most powerful of all.

Feedback loops:
Reinforcing (positive) feedback loop — output amplifies itself. A company that grows attracts better talent, which produces better results, which enables more growth. But also: small problems ignored grow into crises.
Balancing (negative) feedback loop — output is regulated toward a goal. A thermostat. Budget controls.

Organizational culture — the shared values, behaviors, and norms that determine how an organization actually operates (vs. officially):
'Culture eats strategy for breakfast' (Peter Drucker) — the strongest organizational design fails if the culture undermines it.
Culture is set by: what leaders pay attention to, what they reward and punish, their own behavior (most powerful).

Scaling systems:
Documentation — capturing processes so they work without the founder
Incentive structures — what gets measured and rewarded shapes behavior
Hiring and culture — organizations become what their people are
Feedback mechanisms — systems that detect and correct drift from goals

The E-Myth (Michael Gerber): Most small businesses fail because founders work IN the business (doing the work) rather than ON the business (designing the system). Entrepreneurship requires building a system that works without you — which requires a completely different skill set from doing excellent work."`,
      explore: `"Systems design:

1. Map a system you're part of (your school, a sports team, a family, a community organization):
- Identify the elements (components)
- Identify the key interconnections (who talks to whom, what affects what)
- Identify the function (what is this system trying to produce?)
- Find 2 reinforcing feedback loops and 1 balancing feedback loop
- Identify one leverage point where a small change could improve the system

2. McDonald's vs. a great local restaurant: McDonald's can replicate its product in 100 countries with minimal training. A great local restaurant can't be easily replicated. What does McDonald's have that the restaurant doesn't? Is what McDonald's has actually better? What was lost?

3. If you were building Coreverse as an organization, design:
- The core team structure (who does what)
- One key feedback mechanism that would tell you whether the product is working
- The culture you'd want to build (what 3 core values would drive everything?)

[Text input]"`,
      quickcheck: {
        question: "In systems thinking, the most important yet least visible part of a system is:",
        options: ["A) The elements — the individual components", "B) The interconnections — how components relate to each other", "C) The function or purpose — what the system produces and is designed to do ✅", "D) The leadership structure overseeing the system"],
        correctIndex: 2,
        explanation: "Donella Meadows identified the function/purpose as the most important and often least visible part of a system — because it determines what the system is actually organized to do (which may differ from what it claims to do)."
      },
      quiz: [
    {
      question: "A reinforcing (positive) feedback loop:",
      options: ["A) Regulates output toward a goal or equilibrium", "B) Amplifies outputs — growth enabling further growth (or problems growing into crises) ✅", "C) Provides positive feedback to employees", "D) Strengthens hierarchical control structures"],
      correctIndex: 1
    },
    {
      question: "Peter Drucker's 'culture eats strategy for breakfast' means:",
      options: ["A) Culture is more important than having a breakfast routine", "B) Cultural norms determine how an organization actually behaves — overwhelming formal strategic plans ✅", "C) Strategy is less important than operations in large organizations", "D) Organizational culture develops after strategy is established"],
      correctIndex: 1
    },
    {
      question: "The E-Myth concept identifies the key mistake of many entrepreneurs as:",
      options: ["A) Starting businesses in the wrong industries", "B) Hiring too quickly before establishing processes", "C) Working IN the business rather than ON the business — failing to build systems that work without them ✅", "D) Prioritizing growth over profitability"],
      correctIndex: 2
    },
    {
      question: "Leverage points in a system are:",
      options: ["A) Financial instruments used to fund organizational growth", "B) Places where small changes produce disproportionately large effects ✅", "C) Key personnel whose departure would damage the organization", "D) Technology tools that increase operational efficiency"],
      correctIndex: 1
    },
    {
      question: "A matrix organizational structure is characterized by:",
      options: ["A) No formal hierarchy — full autonomy for all employees", "B) One clear chain of command from top to bottom", "C) Employees reporting to both functional and project managers ✅", "D) Autonomous teams with minimal central coordination"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — the greatest leaders don't just lead people — they design systems that outlast their direct involvement. Ray Kroc didn't just sell hamburgers — he built a system. You're a System Builder — someone who understands that the most enduring impact comes not from what you do personally, but from what you build that continues working when you're not there."

[Badge: System Builder]`
    }
  },

  {
    id: "level3-languages-1",
    level: 3,
    subject: "Languages",
    unit: "Unit 3: Fluency Building",
    lessonNumber: 1,
    title: "Past Tense & Storytelling in Spanish",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Story Teller",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! ¡Bienvenido al Nivel 3! At this level, Spanish becomes a real storytelling tool. Today we master the past tense — so you can tell stories, describe experiences, and have real conversations about your history in Spanish. This is where the language really opens up."`,
      spark: `"The ancient Aztec language Nahuatl contributed hundreds of words to Spanish and English — chocolate, avocado, tomato, chili, coyote, and many more. Spanish itself is deeply layered — a Latin base with Arabic influence (from 700 years of Moorish presence in Spain), indigenous words from across the Americas, and now English influence. When you learn Spanish, you're learning a living record of centuries of cultural contact. What does this tell you about how languages evolve?"`,
      learn: `"The Spanish past tense — there are two main past tenses, each with distinct uses:

Preterite (Pretérito Indefinido) — completed actions with defined beginning and end:
Used for: specific, completed events in the past. 'Yesterday I ate pizza.' 'She called at 3pm.'

Regular preterite endings:
-AR verbs: -é, -aste, -ó, -amos, -asteis, -aron
hablar (to speak): hablé, hablaste, habló, hablamos, hablasteis, hablaron

-ER/-IR verbs: -í, -iste, -ió, -imos, -isteis, -ieron
comer (to eat): comí, comiste, comió, comimos, comisteis, comieron

Common irregular preterites (must memorize):
SER/IR: fui, fuiste, fue, fuimos, fuisteis, fueron
tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron
hacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron
querer: quise, quisiste, quiso, quisimos, quisisteis, quisieron

Imperfect (Pretérito Imperfecto) — ongoing, habitual, or descriptive past:
Used for: background descriptions, habits in the past, ongoing states.
'When I was young, I used to play outside every day.' 'It was raining.' 'She was tall.'

Regular imperfect endings:
-AR verbs: -aba, -abas, -aba, -ábamos, -abais, -aban
-ER/-IR verbs: -ía, -ías, -ía, -íamos, -íais, -ían

Key distinction:
Preterite: 'Ayer hablé con mi madre.' (Yesterday I spoke with my mother — specific completed event)
Imperfect: 'Cuando era niño, hablaba con mi madre todos los días.' (When I was a child, I used to speak with my mother every day — habitual past)

Time expressions for storytelling:
Ayer — yesterday
La semana pasada — last week
Hace [time] — [time] ago (Hace dos días = two days ago)
Una vez — once
De repente — suddenly
Después — after
Luego — then
Finalmente — finally
Antes — before
En ese momento — at that moment

Storytelling structure in Spanish:
Era una vez... — Once upon a time...
Hace mucho tiempo... — Long ago...
Y entonces... — And then...
Al final... — In the end..."`,
      explore: `"Spanish past tense practice:

1. Conjugate in preterite:
a) hablar (yo, tú, él)
b) comer (nosotros, ellos)
c) ir (yo, ella, ustedes)
d) hacer (tú, él, nosotros)

2. Write a 10-sentence story about a real or invented adventure you had. Use:
- At least 6 preterite verbs (completed actions)
- At least 3 imperfect verbs (background descriptions or habits)
- At least 5 different time expressions

3. Translation practice:
a) 'Yesterday we went to the beach and swam for two hours.'
b) 'When I was a child, I used to read every night before bed.'
c) 'Suddenly, she heard a noise and ran to the door.'

[Text input]"`,
      quickcheck: {
        question: "The imperfect tense is used for:",
        options: ["A) Completed, specific past events with defined beginning and end", "B) Ongoing background states, habitual past actions, and descriptions in the past ✅", "C) Future actions that were planned in the past", "D) Actions happening right now in the present"],
        correctIndex: 1,
        explanation: "The imperfect is for ongoing, habitual, or descriptive past: what used to happen, what was happening as background, or what something was like. The preterite is for specific completed events."
      },
      quiz: [
    {
      question: "The preterite form of 'ir' (to go) for 'I' is:",
      options: ["A) Iba", "B) Fui ✅", "C) Voy", "D) Ido"],
      correctIndex: 1
    },
    {
      question: "Which sentence correctly uses the imperfect?",
      options: ["A) Ayer comí pizza (Yesterday I ate pizza)", "B) Cuando era niño, comía pizza todos los viernes ✅ (When I was a child, I ate pizza every Friday)", "C) El año pasado comí mucha pizza", "D) Comí pizza en cinco minutos"],
      correctIndex: 1
    },
    {
      question: "'Hace dos años' means:",
      options: ["A) In two years", "B) For two years", "C) Two years ago ✅", "D) Since two years ago"],
      correctIndex: 2
    },
    {
      question: "The preterite ending for regular -AR verbs (tú form) is:",
      options: ["A) -aba", "B) -iste", "C) -aste ✅", "D) -é"],
      correctIndex: 2
    },
    {
      question: "'De repente' in storytelling means:",
      options: ["A) Finally", "B) After that", "C) Before", "D) Suddenly ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — ¡Increíble! You can now tell stories in Spanish. That's a whole new dimension of the language opening up to you. You're a Story Teller — and in Spanish, that means 500 million people can now hear your stories. Every great language comes alive when you can talk about the past. ¡Sigue adelante! (Keep going forward!)"

[Badge: Story Teller]`
    }
  },

  {
    id: "level3-languages-2",
    level: 3,
    subject: "Languages",
    unit: "Unit 3: Fluency Building",
    lessonNumber: 2,
    title: "Opinions, Debates & Subjunctive Introduction",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Opinionator",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! ¡Hola! Today we advance your Spanish into the realm of opinions, disagreement, and the beginning of one of Spanish's most interesting grammatical structures — the subjunctive. This is where language becomes truly expressive. You'll be able to agree, disagree, persuade, and express doubt in Spanish — real conversational power."`,
      spark: `"The subjunctive mood exists in Spanish but has nearly disappeared in English (though you use it: 'If I were you...' 'I suggest that she be there'). The subjunctive expresses what isn't factual — wishes, doubts, emotions, hypotheticals. Different languages carve up reality differently through grammar. Japanese has grammatical structures for politeness levels. Hopi has different verb forms for witnessed vs. non-witnessed events. What does it mean that grammar shapes how we think about reality?"`,
      learn: `"Expressing opinions in Spanish:

Introducing opinions:
En mi opinión... — In my opinion...
Yo creo que... — I believe that...
Yo pienso que... — I think that...
Desde mi punto de vista... — From my point of view...
Estoy convencido/a de que... — I'm convinced that...
Me parece que... — It seems to me that...

Agreeing and disagreeing:
Estoy de acuerdo — I agree
No estoy de acuerdo — I disagree
Tienes razón — You're right
No tienes razón — You're wrong
Estoy totalmente en desacuerdo — I completely disagree
Tienes un buen punto — You make a good point
Sin embargo... — However...
Por otro lado... — On the other hand...
Aunque... — Although...
A pesar de que... — Despite the fact that...

Conditional sentences (If/Then):
Si tengo tiempo, voy al gimnasio. — If I have time, I go to the gym. (factual condition)
Si tuviera más dinero, viajaría más. — If I had more money, I would travel more. (hypothetical — subjunctive!)

Introduction to the subjunctive:
The subjunctive is used when expressing:
Desires/wishes: Quiero que tú vengas. (I want you to come.)
Emotions: Me alegra que estés aquí. (I'm glad you're here.)
Doubt/uncertainty: No creo que sea verdad. (I don't think it's true.)
Recommendations: Te recomiendo que estudies. (I recommend that you study.)

Key trigger: the subjunctive almost always appears after 'que' (that) when the subject changes between the two clauses.
Quiero ir. (I want to go — same subject, no subjunctive)
Quiero que tú vayas. (I want you to go — different subject, subjunctive required)

Present subjunctive formation (regular verbs):
-AR verbs take -ER endings in subjunctive: hablar → hable, hables, hable, hablemos, habléis, hablen
-ER/-IR verbs take -AR endings: comer → coma, comas, coma, comamos, comáis, coman

Common irregular subjunctives (must memorize):
ser → sea    ir → vaya    tener → tenga    hacer → haga    estar → esté"`,
      explore: `"Opinion and subjunctive practice:

1. Opinion paragraph: Write 8-10 sentences in Spanish expressing your opinion on one of these topics:
- La tecnología y los jóvenes (Technology and young people)
- La importancia de aprender idiomas (The importance of learning languages)
- El papel de la escuela en la vida moderna (The role of school in modern life)
Use at least 4 different opinion phrases, one 'sin embargo,' and one 'por otro lado.'

2. Subjunctive practice — complete the sentences:
a) Mis padres quieren que yo ______ (estudiar) más.
b) Espero que el viaje ______ (ser) divertido.
c) No creo que ______ (haber) problemas.
d) Te recomiendo que ______ (leer) este libro.

3. Debate practice: Write a short dialogue (6-8 exchanges) between two people who disagree about whether students should have smartphones in school. Each person uses at least 2 subjunctive constructions.

[Text input]"`,
      quickcheck: {
        question: "The subjunctive mood is triggered in Spanish when:",
        options: ["A) The sentence refers to past events", "B) The verb describes definite, factual present situations", "C) Expressing wishes, emotions, doubt, or recommendations — usually after 'que' with a subject change ✅", "D) Using reflexive verbs"],
        correctIndex: 2,
        explanation: "The subjunctive in Spanish is triggered by wishes, emotions, doubts, or recommendations — especially after 'que' when the subject changes between clauses. 'Quiero que vayas' (I want you to go) requires subjunctive; 'Quiero ir' (I want to go) does not."
      },
      quiz: [
    {
      question: "The phrase for 'On the other hand' in Spanish is:",
      options: ["A) Sin embargo", "B) Por otro lado ✅", "C) A pesar de que", "D) Desde mi punto de vista"],
      correctIndex: 1
    },
    {
      question: "In the subjunctive, the -AR verb 'hablar' conjugates for 'tú' as:",
      options: ["A) Hablas", "B) Hablarías", "C) Hables ✅", "D) Hablaste"],
      correctIndex: 2
    },
    {
      question: "Which sentence requires the subjunctive?",
      options: ["A) Yo hablo español todos los días", "B) Ella quiere que nosotros hablemos español ✅", "C) Él habla español muy bien", "D) Hablo español cuando viajo"],
      correctIndex: 1
    },
    {
      question: "'No creo que sea verdad' means:",
      options: ["A) I know it's true", "B) I believe it's true", "C) I don't think it's true ✅", "D) I hope it's true"],
      correctIndex: 2
    },
    {
      question: "The subjunctive form of 'ir' (to go) is:",
      options: ["A) Va", "B) Iría", "C) Fue", "D) Vaya ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — the subjunctive is one of the hardest parts of Spanish for English speakers, and you've just taken your first real steps into it. This is Voyager-level Spanish — this is where the language becomes fully expressive. You're an Opinionator — someone who can agree, disagree, persuade, and doubt in Spanish. The conversations you can have now are real ones. ¡Muy bien!"

[Badge: Opinionator]`
    }
  },

  {
    id: "level3-languages-3",
    level: 3,
    subject: "Languages",
    unit: "Unit 3: Fluency Building",
    lessonNumber: 3,
    title: "Latin American Culture, History & Identity",
    guide: "Lyra",
    avatar: "lyra",
    badge: "Cultural Bridge",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today's lesson honors the richness of the Spanish-speaking world — specifically Latin America. 20 countries, 450+ million people, and one of the most diverse, complex, and vibrant cultural regions on Earth. Understanding Latin American culture, history, and identity isn't just cultural knowledge — it's essential context for understanding the Americas and the modern world."`,
      spark: `"Latin America produced Gabriel García Márquez (whose novel '100 Years of Solitude' sold 50 million copies and is considered one of the greatest novels ever written), Pablo Neruda (Nobel Prize in Poetry), Frida Kahlo (whose self-portraits became global symbols of identity and pain), and Simón Bolívar (who liberated much of South America from Spanish colonialism). What do these figures have in common? What does their work say about the Latin American experience?"`,
      learn: `"Latin America refers to the countries in the Americas where Spanish, Portuguese, and French (derived from Latin) are spoken — primarily from Mexico through Central America, the Caribbean, and South America.

Historical foundations:

Pre-Columbian civilizations:
The Maya — advanced civilization (250-900 CE peak) in Mexico and Central America. Developed astronomy, mathematics (including zero), a complex writing system, and elaborate cities.
The Aztec Empire (1300-1521 CE) — centered in Tenochtitlan (modern Mexico City). Military power, sophisticated agriculture (chinampas), complex religion and sacrifice culture.
The Inca Empire (1438-1533 CE) — largest empire in pre-Columbian Americas. Road network of 25,000 miles. Advanced engineering without the wheel or writing. Centered in modern Peru.

Colonial period (1492-1820s):
Spanish conquest eliminated or transformed these civilizations. Estimated 90% of indigenous population died from disease and violence within 100 years of contact.
Colonial society was highly stratified by race: Peninsulares (born in Spain) → Criollos (Spanish descent, born in Americas) → Mestizos (mixed) → Indigenous peoples → Enslaved Africans

Independence movements (1810-1826):
Simón Bolívar ('El Libertador') liberated Venezuela, Colombia, Ecuador, Peru, and Bolivia.
José de San Martín liberated Argentina, Chile, and Peru.
Miguel Hidalgo sparked Mexican independence with the 'Grito de Dolores' (1810).

Modern Latin America — key themes:
Political instability — cycles of democratic and authoritarian government. US intervention in Cold War-era Latin America (supporting dictators vs. left-wing governments) had profound effects.
Economic development — significant inequality; vast natural resources; growing middle class. Brazil is 12th largest economy; Mexico 15th.
Migration — millions migrate to the US, shaped by economic inequality, violence, and historical US intervention in the region.
Cultural richness — magical realism (García Márquez), muralism (Diego Rivera), salsa, cumbia, reggaeton, tango, flamenco, diverse cuisines.

Key cultural values widely found (with regional variation):
Familismo — strong family loyalty and collectivism
Respeto — respect for elders and authority
Personalismo — importance of personal relationships
Fatalismo — acceptance of aspects of life beyond control"`,
      explore: `"Latin American cultural exploration:

1. Choose one Latin American country (not Spain). Research and write:
- Key historical events (Pre-Columbian, colonial, independence, modern)
- Two notable cultural contributions (art, music, literature, cuisine)
- One current challenge the country faces
- One phrase or word from this country's dialect of Spanish that differs from standard Spanish

2. Research one of these cultural figures:
Frida Kahlo, Gabriel García Márquez, Pablo Neruda, Simón Bolívar, Rigoberta Menchú, or Isabel Allende.
What is their work about? What historical and personal experiences shaped it? What has been their global impact?

3. The term 'magical realism' — most associated with Gabriel García Márquez — describes fiction where magical events are treated as ordinary. Research this literary style and find one example from '100 Years of Solitude' or another magical realist work. Why does this style resonate so deeply with Latin American experience?

[Text input]"`,
      quickcheck: {
        question: "The Inca Empire was remarkable for:",
        options: ["A) Developing the most advanced writing system in the pre-Columbian Americas", "B) Its 25,000-mile road network and advanced engineering achieved without the wheel or writing ✅", "C) Its location at the center of trade routes connecting North and South America", "D) Creating the most sophisticated astronomical calendar ever developed"],
        correctIndex: 1,
        explanation: "The Inca Empire built an extraordinary 25,000-mile road network and achieved remarkable engineering feats — all without the wheel, metal tools, or a writing system (they used quipu — knotted cords — to record information)."
      },
      quiz: [
    {
      question: "The 'Grito de Dolores' (1810) was significant because:",
      options: ["A) It declared Mexican independence from France", "B) It was the speech that sparked the Mexican independence movement against Spain ✅", "C) It ended the Spanish-American War", "D) It established the first Latin American democracy"],
      correctIndex: 1
    },
    {
      question: "Magical realism as a literary style:",
      options: ["A) Describes science fiction set in Latin America", "B) Is only found in Latin American literature", "C) Treats magical events as ordinary occurrences within otherwise realistic narratives ✅", "D) Was invented by Frida Kahlo for visual art"],
      correctIndex: 2
    },
    {
      question: "The colonial social hierarchy in Spanish Latin America placed at the top:",
      options: ["A) Criollos — Spanish descent born in the Americas", "B) Mestizos — people of mixed indigenous and Spanish descent", "C) Peninsulares — people born in Spain ✅", "D) Indigenous leaders who cooperated with Spanish authorities"],
      correctIndex: 2
    },
    {
      question: "Familismo as a Latin American cultural value emphasizes:",
      options: ["A) Nuclear family over extended family", "B) Individual achievement and independence", "C) Strong family loyalty and collective identity ✅", "D) Religious observance as the central family value"],
      correctIndex: 2
    },
    {
      question: "US intervention during the Cold War in Latin America:",
      options: ["A) Consistently promoted democratic governance", "B) Had no significant lasting effects on the region", "C) Often supported authoritarian governments against left-wing movements, profoundly affecting the region's political trajectory ✅", "D) Was welcomed by most Latin American nations"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — Latin America is one of the most extraordinary regions in the world — ancient civilizations, brutal colonial history, independence struggles, incredible artistic and literary traditions, and a vibrant, diverse modernity. You're a Cultural Bridge — someone who carries knowledge and respect across cultures, which is exactly what the world needs more of. ¡Eres increíble!"

[Badge: Cultural Bridge]`
    }
  },

  {
    id: "level3-frontier-philosophy-1",
    level: 3,
    subject: "Frontier",
    unit: "Unit 3: Ethics & Society",
    lessonNumber: 1,
    title: "Bioethics — The Ethics of Life Science",
    guide: "Nova",
    avatar: "nova",
    badge: "Bioethics Thinker",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we enter bioethics — the branch of philosophy that grapples with the moral questions raised by advances in biology and medicine. CRISPR gene editing can eliminate inherited diseases — and 'designer babies.' AI diagnostics can detect cancer better than radiologists — and raise questions of liability and consent. Scientists can now extend human lifespan significantly in mice. These aren't science fiction — they're today's reality. Who decides what we should do with these powers?"`,
      spark: `"In 2018, Chinese scientist He Jiankui announced the birth of the world's first gene-edited babies — twins whose CCR5 gene was edited to provide resistance to HIV. The global scientific community was outraged. He was imprisoned. But his case forces a question: if you can prevent a child from being born with HIV or Huntington's disease or sickle cell anemia, is it wrong NOT to do so? Where is the line between treating disease and designing humans?"`,
      learn: `"Bioethics is the field of ethics examining moral questions raised by advances in biology, medicine, and related sciences.

Core bioethical principles (Beauchamp and Childress):
Autonomy — respecting individuals' right to make informed decisions about their own bodies and lives
Beneficence — acting for the benefit of patients/subjects
Non-maleficence — avoiding harm ('First, do no harm')
Justice — fair distribution of benefits and burdens in medicine and research

Key bioethical issues:

Genetic engineering and CRISPR:
Somatic editing — changing genes in non-reproductive cells (doesn't affect offspring). Used in treating disease in living patients. Relatively uncontroversial.
Germline editing — changing genes in embryos (affects all future descendants). He Jiankui's twins. Permanent, heritable changes to the human species. Extremely controversial.
Enhancement vs treatment — treating inherited disease is one thing; editing for intelligence, height, or athletic ability is quite another. Where is the line? Who draws it?

End-of-life ethics:
When should life support be withdrawn? Who decides when a patient cannot?
Physician-assisted dying — legal in some jurisdictions; deeply contested. Does respecting autonomy require allowing people to choose death? Does non-maleficence prohibit participating in death?
Palliative care vs cure-at-all-costs — quality vs. quantity of life.

Human subjects research:
Tuskegee Syphilis Study (1932-1972) — US government researchers allowed 399 Black men with syphilis to go untreated for 40 years without informed consent, to study disease progression. Result: the Belmont Report (1979) establishing informed consent, beneficence, and justice as research requirements.
Informed consent — the right to know what you're agreeing to before agreeing
Vulnerable populations — additional protections required for those who cannot fully consent (children, prisoners, people with cognitive impairment)

Psychiatric and cognitive ethics:
Is mental illness properly understood as biological (treat with medication) or psychological/social (treat with therapy, address root causes)?
Forced psychiatric treatment — when, if ever, is treating someone against their will justified?
Cognitive enhancement — Adderall, modafinil, transcranial stimulation. Fair use? Access inequality?

Organ donation and allocation:
Should organ donation be opt-in (consent required) or opt-out (assumed unless refused)? Evidence shows opt-out dramatically increases donation rates.
Who gets the scarce organ — the sickest? The youngest? The longest waiting? The most socially valuable?

The intersection of technology and biology:
Brain-computer interfaces (Neuralink) — merging human cognition with digital systems. Consent issues, security vulnerabilities, identity questions.
Artificial wombs — if external gestation is possible, what happens to abortion debates? To parental responsibility?
Life extension — if living to 150 becomes possible, what are the social and distributive justice implications?"`,
      explore: `"Bioethical reasoning:

1. The CRISPR dilemma:
You are a genetic counselor. A couple comes to you. Both carry a gene for Huntington's disease — a fatal neurological condition that strikes in middle age and has no cure. Their future child has a 75% chance of having the disease. CRISPR could eliminate the gene.
a) Should they use CRISPR? Walk through all four bioethical principles.
b) Does your answer change if the edit would also increase the child's intelligence by 10 IQ points?
c) Does your answer change if the edit is available only to wealthy families?

2. Opt-out organ donation: Countries with opt-out systems (Spain, Austria) have dramatically higher donation rates than opt-in countries. Thousands more lives saved. Research the counterarguments to opt-out systems. Do you find them compelling? What would you recommend and why?

3. Research the Tuskegee Study more deeply. What specific deceptions were involved? What reforms did it produce? What ongoing effects does it have on medical trust in African American communities today?

[Text input]"`,
      quickcheck: {
        question: "Germline gene editing is more controversial than somatic gene editing because:",
        options: ["A) It is technically more difficult and expensive", "B) It is used only for enhancement rather than treatment", "C) Changes are heritable — affecting all future descendants of the edited individual ✅", "D) It has never been successfully performed"],
        correctIndex: 2,
        explanation: "Germline editing changes genes in embryos or reproductive cells, meaning the edits are permanent and pass to all future descendants — making the decision one with irreversible multigenerational consequences, not just for the individual."
      },
      quiz: [
    {
      question: "The Belmont Report established in response to Tuskegee:",
      options: ["A) Government oversight of all medical research", "B) Three principles: informed consent, beneficence, and justice as research requirements ✅", "C) Financial compensation for research subjects", "D) A ban on all government-funded medical research"],
      correctIndex: 1
    },
    {
      question: "The principle of non-maleficence in bioethics means:",
      options: ["A) Research should never be conducted without public benefit", "B) Patients can never be harmed even inadvertently", "C) Medical professionals should avoid causing harm — 'First, do no harm' ✅", "D) All treatments must be proven effective before being used"],
      correctIndex: 2
    },
    {
      question: "Opt-out organ donation differs from opt-in because:",
      options: ["A) Opt-out requires medical examination before death", "B) In opt-out, donation is assumed unless the person has explicitly refused ✅", "C) Opt-out only applies to specific organs", "D) Opt-out systems remove family decision-making entirely"],
      correctIndex: 1
    },
    {
      question: "Cognitive enhancement ethics raises concerns about:",
      options: ["A) The legality of prescription medications", "B) Access inequality — enhancements available only to wealthy people could create unfair advantages ✅", "C) The safety of currently available enhancers", "D) Whether enhancement violates religious principles"],
      correctIndex: 1
    },
    {
      question: "The four core bioethical principles are: (all that apply)",
      options: ["A) Autonomy ✅", "B) Beneficence ✅", "C) Non-maleficence ✅", "D) Justice ✅"],
      correctIndex: 3
    }
      ],
      celebration: `"[child's name] — bioethics is where science meets humanity's deepest values. These questions don't have easy answers — but they have better and worse answers, and getting to better ones requires exactly the kind of rigorous ethical reasoning you just practiced. You're a Bioethics Thinker — and the world urgently needs people who can engage seriously with what science makes possible and what morality requires."

[Badge: Bioethics Thinker]`
    }
  },

  {
    id: "level3-frontier-philosophy-2",
    level: 3,
    subject: "Frontier",
    unit: "Unit 3: Ethics & Society",
    lessonNumber: 2,
    title: "Political Philosophy & Justice",
    guide: "Nova",
    avatar: "nova",
    badge: "Justice Philosopher",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! Today we tackle the question that has occupied political philosophers for millennia: What is justice? Not what the law says — but what is right. How should resources be distributed? What do people owe each other? What makes a society legitimate? The answers to these questions determine the structure of societies and the conditions of billions of lives."`,
      spark: `"John Rawls proposed the 'veil of ignorance' thought experiment: Imagine you're designing the rules of a society without knowing what position you'll occupy in it — your race, wealth, gender, intelligence, talent. What rules would you choose? Rawls argued that rational people behind this veil would choose a society that maximizes the position of the worst-off — because you might end up there. Do you agree? Is this how justice should be determined?"`,
      learn: `"Political philosophy examines the nature, justification, and scope of political authority and the principles that should govern society.

Libertarianism (Robert Nozick):
Individual liberty is the paramount value. People have rights (especially property rights) that cannot be violated even for good outcomes.
The minimal state — government should only protect rights (police, courts, defense), nothing more.
Distributive justice — whatever distribution arises from voluntary transactions is just, regardless of outcomes.
Critique: ignores starting point inequalities; some people cannot meet basic needs without redistribution.

Liberal Egalitarianism (John Rawls):
The difference principle: inequalities are just only if they benefit the least advantaged members of society.
The veil of ignorance: principles of justice should be those rational people would choose without knowing their place in society.
Priority: basic liberties first, then fair equality of opportunity, then the difference principle.
Critique: difficult to implement; may stifle incentive; who defines 'least advantaged'?

Utilitarianism (Bentham, Mill):
Just distribution is whatever maximizes overall welfare/happiness.
No inherent rights that trump welfare — if violating one person's rights dramatically improves aggregate welfare, utilitarianism might permit it.
Critique: can justify oppressing minorities for majority benefit; ignores distribution of welfare, only total.

Communitarianism (Alasdair MacIntyre, Michael Sandel):
The self is not the isolated individual of liberal theory — we are constituted by our communities, traditions, and relationships.
Justice cannot be determined by abstracting from community and history.
Critique of Rawls: the veil of ignorance strips away what makes us who we are.

Feminism and justice:
Liberal feminism — extend liberal rights equally to women (suffrage, equal pay, equal opportunity)
Radical feminism — the structure of society itself (not just laws) systematically disadvantages women; requires structural transformation
Care ethics — justice frameworks have been too abstract and masculine; caring relationships should be central to political theory

Global justice:
If we owe each other justice, does this apply globally or only to citizens of the same nation-state?
Peter Singer's 'drowning child' argument: if you can save a drowning child at little cost to yourself, you are obligated to do so. If that's true, and millions die of preventable poverty while wealthy nations consume excess — are wealthy nations and individuals obligated to give much more?

Reparative justice:
Historical wrongs create ongoing injustices. Does justice require rectification?
Affirmative action — compensating historical group disadvantage through current preferential policies. Controversial across political philosophies."`,
      explore: `"Justice reasoning:

1. Apply Rawls' veil of ignorance:
Behind the veil of ignorance — not knowing your race, gender, wealth, country of birth, or talent — design three rules for global society. Then remove the veil: how do your actual circumstances compare to what you designed? Does knowing your actual position change your view of the rules?

2. Singer's drowning child argument:
'If it is in our power to prevent something bad from happening, without thereby sacrificing anything of comparable moral importance, we ought to do it.' Apply this consistently: if children are dying of preventable diseases in other countries, and you could save them by donating money rather than buying luxury goods, are you obligated to donate? Where is the limit of this obligation?

3. Choose one real current policy debate (wealth taxation, affirmative action, universal basic income, or another). Analyze it through three different political philosophies. What does each one say the just policy is? Which framework's conclusion do you find most persuasive?

[Text input]"`,
      quickcheck: {
        question: "Rawls' Difference Principle states that inequalities are just only if:",
        options: ["A) They result from voluntary transactions between free individuals", "B) They maximize total welfare across all members of society", "C) They benefit the least advantaged members of society ✅", "D) They are consented to by all members through democratic process"],
        correctIndex: 2,
        explanation: "Rawls' Difference Principle says that social and economic inequalities are only justified if they make the worst-off members of society better off than they would be under a more equal arrangement."
      },
      quiz: [
    {
      question: "Libertarianism holds that the just role of government is:",
      options: ["A) Providing comprehensive welfare to all citizens", "B) Only protecting individual rights through courts, police, and defense — nothing more ✅", "C) Ensuring equal outcomes for all citizens", "D) Managing the economy to maximize aggregate welfare"],
      correctIndex: 1
    },
    {
      question: "Communitarianism criticizes liberal theories of justice for:",
      options: ["A) Being too generous in redistribution of wealth", "B) Failing to account for consequences of policy choices", "C) Abstracting the self from communities and traditions that constitute who we actually are ✅", "D) Prioritizing equality over liberty"],
      correctIndex: 2
    },
    {
      question: "Peter Singer's drowning child argument extends to a global obligation because:",
      options: ["A) All lives are equally valuable regardless of proximity", "B) If the moral principle applies to nearby drowning children, geographical distance doesn't change the moral obligation ✅", "C) International law requires wealthy nations to assist poor ones", "D) Singer believes nationalism is always unjust"],
      correctIndex: 1
    },
    {
      question: "The veil of ignorance as a device for determining justice works by:",
      options: ["A) Hiding historical injustices from view", "B) Requiring decision-makers to be literally anonymous", "C) Choosing principles without knowing your position in society — ensuring you wouldn't choose rules that only benefit your particular group ✅", "D) Delegating justice decisions to unbiased judges"],
      correctIndex: 2
    },
    {
      question: "Care ethics argues that justice frameworks have been:",
      options: ["A) Too focused on collective welfare over individual rights", "B) Insufficiently utilitarian in scope", "C) Too abstract and masculine — caring relationships should be central to political theory ✅", "D) Correct in their abstract principles but poorly implemented"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — you just engaged with questions that Plato, Aristotle, Locke, Rousseau, Kant, Rawls, and Nozick all spent their lives on. The question of what makes a society just has no final answer — but thinking rigorously about it is how societies improve. You're a Justice Philosopher — and that means you can engage with the most important questions of political life with both depth and intellectual honesty."

[Badge: Justice Philosopher]`
    }
  },

  {
    id: "level3-frontier-philosophy-3",
    level: 3,
    subject: "Frontier",
    unit: "Unit 3: Ethics & Society",
    lessonNumber: 3,
    title: "Philosophy of Technology & the Future",
    guide: "Nova",
    avatar: "nova",
    badge: "Tech Philosopher",
    duration: "18-22 min",
    sections: {
      arrival: `"[child's name]! For our final Level 3 lesson, we bring philosophy and technology together — asking not just what technology CAN do, but what it SHOULD do, what it means for human life, and what values should guide its development. These are the most important questions of our era — and the people who engage with them seriously are the ones who will shape the future."`,
      spark: `"Martin Heidegger wrote in 1954 that 'the essence of technology is nothing technological' — arguing that modern technology doesn't just give us tools but fundamentally changes how we relate to the world, to each other, and to ourselves. We begin to see everything as a resource to be optimized. Marshall McLuhan argued 'the medium is the message' — the form of technology shapes consciousness more than its content. If these thinkers are right, what is the smartphone doing to human consciousness — not what we do with it, but what it does to us?"`,
      learn: `"Philosophy of technology examines the nature, design, and implications of technological systems and their effects on human life, society, and values.

Key philosophical perspectives:

Heidegger's critique of technology:
Modern technology reveals the world as a 'standing reserve' — everything becomes a resource to be used, optimized, and ordered. Nature becomes an energy supply. People become human resources. Even leisure becomes 'recreation' — restoring capacity to work. Technology isn't neutral; it shapes how we see and relate to everything.

McLuhan's media theory:
'The medium is the message' — the form of a communication technology shapes consciousness more profoundly than its content. Television restructured how people experienced time, attention, and reality. The smartphone has restructured attention, memory, relationships, and the experience of being alone.

Langdon Winner's 'Do Artifacts Have Politics?':
Technologies embed political and social values in their design. Every technology embeds assumptions about who it serves, who it excludes, and what values matter.

The ethics of AI:
Autonomous decision-making — when algorithms make consequential decisions (loan approval, parole, medical diagnosis), who is accountable when they go wrong?
Alignment — ensuring AI systems pursue goals humans actually value. An AI optimizing for 'engagement' might maximize outrage. An AI optimizing for 'human happiness' might find shortcuts humans would find horrifying.

The attention economy:
Human attention has become the primary resource extracted by technology companies. Every feature of social media is optimized to capture and hold attention — not to serve users' long-term interests.

Technology and democracy:
Social media has simultaneously enabled unprecedented political organizing and unprecedented spread of misinformation. Filter bubbles create separate realities. Algorithmic amplification rewards outrage.

The pace problem:
Technological change moves faster than human institutions, ethics, and psychology can adapt. We build technologies whose consequences we cannot predict and deploy them at civilizational scale before we understand what they do."`,
      explore: `"Technology philosophy in practice:

1. McLuhan's lens: Choose one technology you use daily. Not 'what do I do with it?' but 'what does it do to me?' How has it changed your attention, memory, relationships, or sense of self?

2. Heidegger's standing reserve: Choose one domain of life (education, relationships, nature). How has technology transformed it from something experienced to something optimized? What has been gained? Lost?

3. Design a technology ethics framework: You are on the ethics board of a major AI company. Write 5 principles that guide what the company builds. For each: state it, explain why it matters, give one product decision it would affect.

[Text input]"`,
      quickcheck: {
        question: "Heidegger argued that modern technology fundamentally:",
        options: ["A) Makes human life easier and more convenient", "B) Reveals the world as a standing reserve — everything becomes a resource to be optimized ✅", "C) Is neutral — its effects depend entirely on how humans use it", "D) Threatens human existence through automation"],
        correctIndex: 1,
        explanation: "Heidegger's point was deeper than convenience or danger — technology changes our fundamental orientation to reality. When everything becomes a resource to be ordered and optimized, we lose other ways of relating to the world."
      },
      quiz: [
    {
      question: "McLuhan's 'the medium is the message' means:",
      options: ["A) Messages should be delivered through multiple media", "B) The content of media is more important than its form", "C) The form of a communication technology shapes consciousness more profoundly than its content ✅", "D) Media messages should be clear and direct"],
      correctIndex: 2
    },
    {
      question: "Langdon Winner's argument that 'artifacts have politics' means:",
      options: ["A) Technology companies engage in political lobbying", "B) Technologies embed social and political values in their design — determining who they serve and exclude ✅", "C) Technology should be kept separate from politics", "D) Political systems determine which technologies get developed"],
      correctIndex: 1
    },
    {
      question: "The alignment problem in AI refers to:",
      options: ["A) Getting AI systems to agree with each other", "B) Aligning AI development timelines with human needs", "C) Ensuring AI systems pursue goals humans actually value, not proxy measures that diverge from genuine human welfare ✅", "D) Making AI accessible to all demographics equally"],
      correctIndex: 2
    },
    {
      question: "The attention economy describes:",
      options: ["A) The economic value of focused work", "B) How human attention has become the primary resource extracted by technology companies — features optimized to capture it ✅", "C) Paying people for their attention to advertisements", "D) The economic benefits of mindfulness in the workplace"],
      correctIndex: 1
    },
    {
      question: "The pace problem in technology ethics refers to:",
      options: ["A) Technology being too slow to solve urgent problems", "B) Ethical review processes slowing down innovation", "C) Technological change moving faster than human institutions, ethics, and psychology can adapt ✅", "D) The pace of AI development outrunning computing power"],
      correctIndex: 2
    }
      ],
      celebration: `"[child's name] — Level 3 complete. Every lesson in this track built toward this: the ability to think clearly, ethically, and independently about the systems and technologies that shape human life. You're a Tech Philosopher — and in a world being remade by technology faster than most people can understand, that matters enormously. You're a Voyager."

[Badge: Tech Philosopher]`
    }
  }
];

export default level3Lessons;

// ── Normalizer ────────────────────────────────────────────────────────────────

const SUBJECT_SLUG = {
  'Inner World':           'inner-world',
  'Cosmos & Science':      'cosmos',
  'Money & Business':      'money',
  'Mathematics':           'math',
  'Language Arts':         'language-arts',
  'Future Skills':         'future-skills',
  'Social & Leadership':   'leadership',
  'Social':                'leadership',
  'Life & Wellness':       'wellness',
  'Life':                  'wellness',
  'Creative Arts':         'creative-arts',
  'History & World':       'history',
  'History':               'history',
  'Languages':             'languages',
  'Frontier & Philosophy': 'frontier',
  'Frontier':              'frontier',
};

function stripQuotes(str) {
  if (!str) return '';
  return str.trim().replace(/^"/, '').replace(/"$/, '').trim();
}

function replaceName(str) {
  return str.replace(/\[child's name\]/g, '{{name}}');
}

function stripAnswerMarkers(str) {
  return str ? str.replace(/\s*✅/g, '').replace(/^[A-D]\)\s*/, '').trim() : str;
}

function cleanText(str) {
  return replaceName(stripQuotes(str || ''));
}

function normalizeLesson(lesson) {
  const s = lesson.sections;

  const learnStr = cleanText(s.learn || '');
  const learn = learnStr
    .split(/\n\n+/)
    .map(p => p.replace(/\n/g, ' ').trim())
    .filter(p => p.length > 10);

  const qcRaw = s.quickcheck || s.quickCheck || {};
  const quickCheck = {
    question: qcRaw.question || '',
    options:  (qcRaw.options || []).map(stripAnswerMarkers),
    correct:  qcRaw.correctIndex ?? qcRaw.correct ?? 0,
  };

  const quiz = (s.quiz || []).map(q => ({
    question: q.question,
    options:  (q.options || []).map(stripAnswerMarkers),
    correct:  q.correctIndex ?? q.correct ?? 0,
  }));

  const celebrationText = cleanText(s.celebration || '')
    .replace(/\[Badge:[^\]]+\]/g, '')
    .trim();

  const explore = cleanText(s.explore || '')
    .replace(/\[(Text|Drawing|text|drawing)[^\]]*\]/g, '')
    .trim();

  return {
    title:           lesson.title,
    guide:           lesson.avatar,
    badge:           lesson.badge,
    arrival:         cleanText(s.arrival),
    spark:           cleanText(s.spark),
    learn,
    explore,
    quickCheck,
    quiz,
    celebrationText,
    unit:            lesson.unit,
    duration:        lesson.duration,
  };
}

const _bySubject = {};
for (const lesson of level3Lessons) {
  const slug = SUBJECT_SLUG[lesson.subject];
  if (!slug) continue;
  if (!_bySubject[slug]) _bySubject[slug] = [];
  _bySubject[slug].push(normalizeLesson(lesson));
}

export function getLevel3Lessons(subjectId) {
  return _bySubject[subjectId] || [];
}

export function getLevel3Lesson(subjectId, idx) {
  return (_bySubject[subjectId] || [])[idx] || null;
}
