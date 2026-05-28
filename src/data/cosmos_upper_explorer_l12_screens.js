// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L12 — Genetics: Why You Look Like Your Family
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS3 — inheritance and variation of traits
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify inheritance scenarios)
// SCOPE: 4 concepts — what genetics is, how traits are inherited,
//        dominant and recessive, why everyone is unique
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-12`,
      title: `Genetics: Why You Look Like Your Family`,
      duration: 18,
      xpReward: 75,
      badge: `genetics-explorer`,
      badgeName: `Genetics Explorer`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Have you ever been told you have "your mom's eyes" or "your grandpa's smile"? Today we explore WHY family members look alike, and how traits pass from parents to children. This is the science of GENETICS, and it builds on what you learned about DNA. Genetics explains why you resemble your family, why you're also completely unique, and how the instructions for life get passed down through generations. By the end of today, you'll understand the fascinating rules of inheritance. Let's begin.`,
          headline: `Genetics`,
          subtitle: `Why you look like your family, and why you're still one of a kind`,
          visual: `/ue-assets/cosmos/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Genetics Is`,
          paragraphs: [
            `GENETICS is the study of HEREDITY, which means how traits are passed from parents to their children. Remember from our DNA lesson that genes are sections of DNA carrying instructions for traits like eye color, hair type, and height. Genetics is all about how those genes get passed down, combined, and expressed. It explains why children often resemble their parents, why certain traits "run in families," and why brothers and sisters can be similar yet still different from each other.`,
            `The foundations of genetics were discovered by a monk named Gregor Mendel in the 1860s, who carefully studied pea plants. By breeding thousands of pea plants and tracking their traits (like flower color and seed shape) across generations, he discovered the basic rules of how traits are inherited, long before anyone even knew about DNA. His careful, patient experiments are a beautiful example of good science: observing carefully, recording data, and finding the hidden patterns. Today, genetics is one of the most important and fast-growing fields of science, with huge effects on medicine, farming, and our understanding of life itself.`,
          ],
          image: `/ue-assets/cosmos/l12-s1-what-is.webp`,
          imageCaption: `Genetics: how traits pass from parents to children. Founded by Mendel and his peas.`,
          vocab: [
            {
              word: `genetics`,
              definition: `The study of heredity: how traits are passed from parents to children through genes. It explains family resemblances, why traits run in families, and how the instructions for life pass down through generations.`,
              audioPrompt: `Genetics is the study of heredity, {name}. Which means how traits are passed from parents to their children. Remember that genes are sections of DNA carrying instructions for traits like eye color, hair type, and height. Genetics is all about how those genes get passed down, combined, and expressed. It explains why children often resemble their parents and why certain traits run in families. The foundations of genetics were discovered by Gregor Mendel in the 1860s, by carefully studying pea plants.`,
            },
            {
              word: `gene`,
              definition: `A section of DNA that carries instructions for a specific trait, like eye color, hair type, or height. You inherit tens of thousands of genes from your parents — half from your mother, half from your father — which work together to build and run your body.`,
              audioPrompt: `A gene is a section of DNA that carries instructions for a specific trait, {name}. Like eye color, hair type, or how tall you'll grow. You have tens of thousands of genes, and you inherited them from your parents: half from your mother, half from your father. Each gene carries a set of instructions, and your cells read those instructions to build and run your body. That's why traits run in families: parents pass their genes to their children.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Traits Are Inherited`,
          paragraphs: [
            `Here's the key idea. You have two copies of most of your genes: one inherited from each parent. When a mother and father have a child, the child gets HALF of their DNA from each parent. This is why you share traits with BOTH your mom and your dad, and why you might have your mother's eye color but your father's hair type. Every child gets a unique MIX of genes from both parents, which is why you resemble your family but are not identical to either parent.`,
            `Because you get two copies of each gene (one from each parent), sometimes those two copies carry DIFFERENT instructions. For example, you might inherit a gene for brown eyes from one parent and a gene for blue eyes from the other. So which one shows up? That's where the rules of DOMINANT and RECESSIVE traits come in, which we'll explore next. The combining of genes from two parents, with two copies of each gene interacting, is what creates the endless variety we see in families and across all living things. Each new person is a brand-new genetic combination that has never existed before.`,
          ],
          image: `/ue-assets/cosmos/l12-s2-inherited.webp`,
          imageCaption: `You get half your DNA from each parent: two copies of most genes, a unique mix.`,
          vocab: [
            {
              word: `heredity`,
              definition: `The passing of traits from parents to their children through genes. Heredity is why family members resemble each other, and why traits can run in families across generations.`,
              audioPrompt: `Heredity is the passing of traits from parents to their children through genes, {name}. It's why family members resemble each other and why traits can run in families across generations. Here's the key idea. You have two copies of most of your genes, one inherited from each parent. When parents have a child, the child gets half of their DNA from each parent. This is why you share traits with both your mom and your dad. Every child gets a unique mix of genes from both parents.`,
            },
            {
              word: `trait`,
              definition: `A characteristic of a living thing, like eye color, hair texture, height, or blood type. Traits are determined by genes inherited from parents. Some traits are controlled by a single gene; others involve many genes plus the environment working together.`,
              audioPrompt: `A trait is a characteristic of a living thing, {name}. Like eye color, hair texture, height, or blood type. Traits are determined by genes you inherit from your parents. Some traits are controlled by a single gene, making them fairly predictable, like blood type. Others involve many genes working together, along with the environment, making them more complex. Your height, for example, is influenced by many genes plus factors like nutrition and sleep. Traits are what genetics is all about.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Dominant and Recessive Traits`,
          paragraphs: [
            `When you inherit two different versions of a gene (one from each parent), they don't always have equal say. Some gene versions are DOMINANT, meaning they "win" and show up even if you only have one copy. Others are RECESSIVE, meaning they only show up if you inherit TWO copies (one from each parent). Think of dominant as the "louder" instruction that gets heard, and recessive as the "quieter" one that only gets expressed when there's no dominant version present.`,
            `Here's a classic example. The gene version for brown eyes is generally dominant, while the version for blue eyes is recessive. So if you inherit a brown-eye gene from one parent and a blue-eye gene from the other, you'll usually have brown eyes, because brown is dominant. To have blue eyes, you generally need to inherit the recessive blue-eye version from BOTH parents. This is why two brown-eyed parents can sometimes have a blue-eyed child: if both parents secretly carry a hidden recessive blue-eye gene, the child can inherit both copies and have blue eyes! The hidden recessive traits can reappear in later generations. Genetics is full of these elegant patterns, which Mendel first discovered by counting pea plants. Reality is more complex than this simple model (many traits involve many genes), but dominant and recessive is the foundation.`,
          ],
          image: `/ue-assets/cosmos/l12-s3-dominant.webp`,
          imageCaption: `Dominant genes show with one copy. Recessive ones need two. Hidden traits can reappear.`,
          vocab: [
            {
              word: `dominant`,
              definition: `A gene version that "wins" and shows up even if you have only one copy of it. For example, the brown-eye gene version is generally dominant, so one copy is usually enough to give brown eyes.`,
              audioPrompt: `A dominant gene version is one that wins and shows up even if you have only one copy of it, {name}. Think of it as the louder instruction that gets heard. For example, the gene version for brown eyes is generally dominant. So if you inherit a brown-eye gene from one parent and a blue-eye gene from the other, you'll usually have brown eyes, because brown is dominant. Dominant traits only need one copy to appear. Recessive traits, by contrast, need two copies to show.`,
            },
            {
              word: `allele`,
              definition: `One version of a gene. Most genes come in multiple alleles — for example, the eye color gene has a brown allele and a blue allele. You inherit two alleles for most genes, one from each parent, and whether one is dominant or recessive determines which trait appears.`,
              audioPrompt: `An allele is one version of a gene, {name}. Most genes come in multiple alleles. For example, the eye color gene has a brown allele and a blue allele. You inherit two alleles for most genes, one from each parent. If you get a brown allele from one parent and a blue allele from the other, which one shows? That depends on whether one allele is dominant (shows with one copy) or recessive (needs two copies). Alleles explain how genetic variety works: different versions produce different traits.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Everyone Is Unique`,
          paragraphs: [
            `Given all these combining genes, the number of possible genetic combinations is almost unimaginably huge. Each parent can pass down an enormous number of different gene combinations, so the number of possible children any two parents could have is in the trillions upon trillions. This is why siblings (except identical twins) are never exactly alike, even though they share the same parents. You are a completely unique genetic combination that has never existed before in the history of life and never will again.`,
            `And remember the lesson from DNA: your genes are only PART of the story. Your experiences, choices, environment, and effort shape who you become just as much. Genetics gives you a starting point, a unique set of inherited tendencies, but YOU are far more than your genes. Nova's teaching: genetics reveals something beautiful and balanced. You are deeply CONNECTED to your family and ancestors, carrying forward traits passed down through countless generations. AND you are utterly UNIQUE, a one-of-a-kind combination that has never existed before. You belong to a long chain of life, and you are also entirely yourself. Both are true at once, and both are worth celebrating.`,
          ],
          image: `/ue-assets/cosmos/l12-s4-unique.webp`,
          imageCaption: `Trillions of possible combinations: you are connected to your family AND entirely unique.`,
          vocab: [
            {
              word: `recessive`,
              definition: `A gene version that only shows up if you inherit two copies (one from each parent). The "quieter" instruction, hidden when a dominant version is present. Blue eyes come from a recessive gene version.`,
              audioPrompt: `A recessive gene version only shows up if you inherit two copies, one from each parent, {name}. Think of it as the quieter instruction, hidden whenever a dominant version is present. Blue eyes come from a recessive gene version. To have blue eyes, you need to inherit that version from both parents. This is why two parents with brown eyes can sometimes have a child with blue eyes. If both parents carry a hidden blue-eye gene, the child can inherit both copies and have blue eyes.`,
            },
            {
              word: `Gregor Mendel`,
              definition: `A 19th-century monk and scientist who discovered the rules of heredity by carefully breeding pea plants in the 1860s. Long before DNA was known, his patient experiments revealed how traits pass from parents to children. He is called the "father of genetics."`,
              audioPrompt: `Gregor Mendel was a monk and scientist who discovered the rules of heredity, {name}. In the 1860s, he carefully bred thousands of pea plants and tracked their traits, like flower color and seed shape, across generations. By patiently recording the patterns, he discovered that traits follow predictable rules of dominant and recessive inheritance. He did this long before anyone even knew about DNA. His careful, patient science is a beautiful example of how great discoveries are made: through observation, curiosity, and counting. Mendel is called the father of genetics.`,
            },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four inheritance situations. Using what you know about dominant and recessive traits, classify each: DOMINANT TRAIT SHOWING (a "louder" gene appearing with one copy), RECESSIVE TRAIT SHOWING (a "quieter" gene needing two copies), or UNIQUE COMBINATION (the mixing that makes each person one of a kind)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `dominant`,    label: `Dominant Trait Showing`,  color: `#FBBF24`, description: `A dominant gene version appears, needing only one copy.` },
            { id: `recessive`,   label: `Recessive Trait Showing`, color: `#34D399`, description: `A recessive gene version appears, needing two copies (one from each parent).` },
            { id: `combination`, label: `Unique Combination`,      color: `#A78BFA`, description: `The mixing of genes from both parents that makes each person one of a kind.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Situation #1`,
              clues: [
                { text: `A child inherits a brown-eye gene from mom and a blue-eye gene from dad.` },
                { text: `The child has brown eyes.` },
                { text: `Only one copy of the brown-eye gene was needed for it to show.` },
              ],
              correctAnswer: `dominant`,
              realWorldExample: `Brown eyes are a classic dominant trait.`,
              explanation: `One brown-eye gene was enough to give brown eyes, because brown is dominant. Pure dominant trait showing. The "louder" brown-eye instruction won out over the recessive blue-eye one.`,
            },
            {
              id: `case-2`,
              caseTitle: `Situation #2`,
              clues: [
                { text: `Two brown-eyed parents have a child with blue eyes.` },
                { text: `Both parents secretly carried a hidden blue-eye gene.` },
                { text: `The child inherited the blue-eye version from BOTH parents.` },
              ],
              correctAnswer: `recessive`,
              realWorldExample: `Blue eyes from brown-eyed parents is a famous recessive surprise.`,
              explanation: `Blue eyes only appear with TWO copies of the recessive blue-eye gene. Both brown-eyed parents secretly carried one hidden copy, and the child inherited both. Pure recessive trait showing. Hidden recessive traits can reappear in later generations.`,
            },
            {
              id: `case-3`,
              caseTitle: `Situation #3`,
              clues: [
                { text: `Two siblings have the same parents but look quite different from each other.` },
                { text: `One got more of mom's traits, the other got more of dad's.` },
                { text: `Each inherited a different mix of genes from the same two parents.` },
              ],
              correctAnswer: `combination`,
              realWorldExample: `Siblings differing is everyday genetic combination.`,
              explanation: `Each child inherited a different unique mix of genes from the same parents. Pure unique combination. This is why siblings (except identical twins) are never exactly alike, even with the same parents. Trillions of combinations are possible.`,
            },
            {
              id: `case-4`,
              caseTitle: `Situation #4 — The Tricky One`,
              clues: [
                { text: `A child is taller than both of their parents.` },
                { text: `The child also eats a very healthy diet and gets lots of exercise and sleep.` },
                { text: `Height is influenced by many genes AND by environment, not a single dominant or recessive gene.` },
              ],
              correctAnswer: `combination`,
              realWorldExample: `Height shows genetics is often more complex than one gene.`,
              explanation: `Tricky because you might try to label height as "dominant" or "recessive." But height isn't controlled by a single gene! It's influenced by MANY genes working together, PLUS environment (like nutrition and sleep). So this child's height comes from a unique combination of many inherited genes AND a healthy environment. Pure unique combination (the best fit). Lesson: the simple dominant-recessive model (great for traits like eye color) doesn't apply to everything. Many real traits, like height, intelligence, and personality, involve many genes and the environment together. Genetics is often more complex and more interesting than one simple rule. Always remember: genes AND environment, working together.`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is GENETICS?`,
              options: [
                `The study of rocks`,
                `The study of heredity — how traits pass from parents to children through genes`,
                `The study of weather`,
                `The study of stars`,
              ],
              correctIndex: 1,
              explanation: `Genetics is the study of heredity: how traits are passed from parents to children through genes. It explains family resemblances, why traits run in families, and how the instructions for life pass through generations. It builds on what you learned about DNA.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `How much of your DNA do you get from each parent?`,
              options: [
                `All from one parent`,
                `Half from each parent — which is why you share traits with both`,
                `None from either`,
                `It varies randomly`,
              ],
              correctIndex: 1,
              explanation: `You get half of your DNA from each parent. This is why you share traits with both your mom and your dad, and why you might have one parent's eyes and the other's hair. Every child is a unique mix of genes from both parents.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `Who discovered the basic rules of genetics, and how?`,
              options: [
                `Einstein, by studying space`,
                `Gregor Mendel, by carefully studying and breeding pea plants in the 1860s`,
                `Newton, with an apple`,
                `Nobody knows`,
              ],
              correctIndex: 1,
              explanation: `Gregor Mendel, a monk, discovered the rules of inheritance in the 1860s by carefully breeding pea plants and tracking their traits across generations, long before DNA was known. His patient, careful experiments are a model of good science.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `What's the difference between DOMINANT and RECESSIVE gene versions?`,
              options: [
                `No difference`,
                `Dominant shows up with just one copy ("louder"); recessive needs two copies to show ("quieter")`,
                `Recessive is stronger`,
                `Dominant is always blue`,
              ],
              correctIndex: 1,
              explanation: `A dominant gene version shows up even with one copy (the "louder" instruction). A recessive version only shows when you have two copies, one from each parent (the "quieter" instruction, hidden when a dominant version is present).` },

            { id: `l12-q5`, format: `true-false`,
              question: `True or false: Two brown-eyed parents can have a blue-eyed child.`,
              correctAnswer: true,
              explanation: `True. If both brown-eyed parents secretly carry a hidden recessive blue-eye gene, their child can inherit the blue-eye version from both and have blue eyes. Hidden recessive traits can reappear in later generations, which is one of genetics' elegant surprises.` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why are siblings (except identical twins) never exactly alike?`,
              options: [
                `They have different parents`,
                `Each child inherits a different unique mix of genes from the same two parents`,
                `They choose their traits`,
                `It's impossible for them to differ`,
              ],
              correctIndex: 1,
              explanation: `Each child gets a different unique combination of genes from the same parents. The number of possible combinations is in the trillions upon trillions, so siblings (except identical twins) are never exactly alike. You're a one-of-a-kind combination.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `Is HEIGHT controlled by a single dominant or recessive gene?`,
              options: [
                `Yes, just one gene`,
                `No — height involves MANY genes working together, plus environment like nutrition`,
                `Yes, a recessive gene`,
                `Height isn't genetic at all`,
              ],
              correctIndex: 1,
              explanation: `Height isn't controlled by a single gene. It's influenced by many genes working together, plus environment (like nutrition and sleep). The simple dominant-recessive model works for traits like eye color, but many real traits are more complex.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `What beautiful truth does genetics reveal about you?`,
              options: [
                `You're exactly like your parents`,
                `You're deeply connected to your family AND utterly unique — a combination that has never existed before`,
                `You're completely random`,
                `Genes are all that matter`,
              ],
              correctIndex: 1,
              explanation: `Genetics reveals a balanced truth: you're deeply connected to your family and ancestors, carrying traits passed down through generations, AND you're utterly unique, a one-of-a-kind combination that has never existed before. Both are true and worth celebrating.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `You're a genetic combination that has never existed before and never will again. How does it feel to be truly one of a kind?` },
            { id: `r2`, text: `What traits do you think you inherited from your family? Are there any that seem to "run" in your family across generations?` },
            { id: `r3`, text: `Genetics shows you're both connected to your ancestors AND completely unique. Which of those two truths feels more meaningful to you, and why?` },
            { id: `r4`, text: `Mendel discovered genetics by patiently counting pea plants for years. What does that tell you about how big discoveries are sometimes made?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Genetics is one of the most powerful and fast-growing sciences of your lifetime. Doctors use it to understand and treat inherited conditions, and increasingly to personalize medicine to a person's specific genes. Farmers use genetics to grow hardier, more nutritious crops. Genetic testing helps people learn about their ancestry and health. Scientists are even learning to edit genes to potentially cure diseases, which raises important ethical questions society must thoughtfully consider. Nova's note: with the growing power to understand and even change genes comes real responsibility. The more we can do, the more carefully and kindly we must think about what we SHOULD do.`,
          familyAdventure: `Family Trait Survey. As a family, pick a few simple traits and chart who has which across family members (and grandparents if you can ask): eye color, can-roll-tongue or not, attached or detached earlobes, widow's peak hairline or straight. See if you can spot which traits seem dominant (common) and which seem recessive (rarer, sometimes "skipping" generations). You're doing real genetic observation, just like Mendel did with his peas, but with your own family.`,
          creativePrompt: {
            intro: `Imagine you could write a "thank you" note to your ancestors for the traits they passed down to you, and a note about what makes you uniquely YOU. Write it.`,
            floor: `Write at least 5 sentences. Mention a trait you think you inherited, and one thing that makes you unique beyond your genes.`,
            stretch: `Write 8 to 10 sentences. Reflect on traits passed down through your family, how you're connected to your ancestors, AND what makes you a one-of-a-kind person.`,
            open: `Write as much as you want. Write a full reflection. Thank your ancestors and family for the inherited traits you carry, reflect on the long chain of life you're part of (traits passed down through countless generations), celebrate the fact that you're a completely unique genetic combination that has never existed before, and describe how you are also shaped by your own experiences and choices, not just your genes. Honor both your connection AND your uniqueness.`,
            frames: [
              `From my family, I think I inherited ___.`,
              `I'm part of a long chain of life that ___.`,
              `But I'm also completely unique, because ___.`,
              `Beyond my genes, what makes me ME is ___.`,
              `I'm grateful to be both connected and one of a kind, because ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explain what genetics is, how traits are inherited from both parents, the rules of dominant and recessive genes, and the beautiful truth that you're both connected to your family AND completely unique. Next lesson: we turn to one of the most important issues facing your generation, explored through real science. CLIMATE CHANGE: THE SCIENCE. See you there. — Nova.`,
          badge: `genetics-explorer`,
          badgeName: `Genetics Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
