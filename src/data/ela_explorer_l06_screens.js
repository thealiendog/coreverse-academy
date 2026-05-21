// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L06 — Compare and Contrast in Texts
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.9 / RI.2-3.9
// REWRITE v2 (May 2026): Grade 1 accessible, SAME/DIFFERENT identification
// game (binary skill — pedagogically correct), CCSS signal words taught
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L06 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-06`,
      title:     `Compare and Contrast in Texts`,
      duration:  12,
      xpReward:  50,
      badge:     `compare-contrast-explorer`,
      badgeName: `Compare & Contrast Explorer`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today you learn to find SIMILARITIES and DIFFERENCES between two things. That's called COMPARE AND CONTRAST. It's one of the most powerful thinking skills there is! Let's go!`,
          headline: `Compare and Contrast in Texts`,
          subtitle: `Finding similarities AND differences`,
          visual: `/explorer-assets/ela/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Things, Side by Side`,
          paragraphs: [
            `Imagine looking at two things at the SAME TIME! A dog and a cat. Two characters. Two countries.`,
            `When authors put two things side by side, they often want you to COMPARE them (find what's ALIKE) and CONTRAST them (find what's DIFFERENT). This helps you understand BOTH things more deeply! You learn things you'd miss looking at just one!`,
          ],
          image: `/explorer-assets/ela/l06-s1-two-things.webp`,
          imageCaption: `Compare and contrast — looking at two things side by side!`,
          vocab: [
            { word: `compare`,      definition: `To find what's ALIKE between two things.`,
              audioPrompt: `To compare is to find what's alike between two things. Two animals might both be mammals. Two friends might both love drawing. When you compare, you spot similarities!` },
            { word: `contrast`,     definition: `To find what's DIFFERENT between two things.`,
              audioPrompt: `To contrast is to find what's different. A dog barks; a cat meows. One friend loves sports; another loves books. When you contrast, you spot differences!` },
            { word: `side by side`, definition: `Next to each other for thinking.`,
              audioPrompt: `Side by side means next to each other for thinking. Compare and contrast puts two things side by side. You see things you'd miss looking at one!` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Finding What's ALIKE`,
          paragraphs: [
            `Start by looking for SIMILARITIES — what's alike!`,
            `Take a dog and a cat. Both are pets. Both have fur. Both eat from bowls. Both can be cuddly. Those are similarities! To find them, ask: "What do they SHARE?" "What do they have IN COMMON?" Even very different things usually share some things. Look carefully!`,
          ],
          image: `/explorer-assets/ela/l06-s2-compare-alike.webp`,
          imageCaption: `Find what's alike. Both pets. Both have fur. Similarities!`,
          vocab: [
            { word: `similarity`, definition: `Something two things SHARE.`,
              audioPrompt: `A similarity is something two things share. Two friends might share a love of music. Two animals might share the same habitat. Similarities are the building blocks of comparing!` },
            { word: `share`,      definition: `To have in common.`,
              audioPrompt: `To share means to have in common. Similarities are things two things share. Even cats and dogs share things. Finding what's shared is the heart of comparing!` },
            { word: `in common`,  definition: `Shared between things.`,
              audioPrompt: `In common means shared between things. What do they have in common? is a great question when comparing. Two characters in common: both brave. Two foods in common: both made with bread!` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Finding What's DIFFERENT`,
          paragraphs: [
            `Then look for DIFFERENCES — what's NOT alike!`,
            `Back to the dog and cat. Dogs bark; cats meow. Dogs need walks; cats don't. Dogs come when called; cats do whatever they want! Those are differences. To find them, ask: "How are they DIFFERENT?" "What does one have that the other doesn't?" Looking for differences makes your thinking sharper!`,
          ],
          image: `/explorer-assets/ela/l06-s3-contrast-different.webp`,
          imageCaption: `Find what's different. Dogs bark, cats meow. Differences!`,
          vocab: [
            { word: `difference`, definition: `A way two things are NOT alike.`,
              audioPrompt: `A difference is a way two things are NOT alike. Two friends might both love music — but one loves rock and the other loves classical. That's a difference!` },
            { word: `unique`,     definition: `One of a kind.`,
              audioPrompt: `Unique means one of a kind. Differences make each thing unique. No two things in the world are exactly the same. Even twins have differences!` },
            { word: `set apart`,  definition: `To make different.`,
              audioPrompt: `Set apart means to make different. Differences set things apart from each other. Dogs and cats are both pets, but their differences set them apart!` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Venn Diagrams: A Tool`,
          paragraphs: [
            `Want a SUPER USEFUL tool? Try a VENN DIAGRAM!`,
            `A Venn diagram is two CIRCLES that OVERLAP. One circle for one thing. Other circle for the other. The MIDDLE OVERLAP is for things they SHARE! Write differences in the outside parts. Write similarities in the middle. Suddenly you can SEE the whole comparison at once!`,
          ],
          image: `/explorer-assets/ela/l06-s4-venn-diagram.webp`,
          imageCaption: `Venn diagram = two overlapping circles. Differences outside. Similarities in the overlap!`,
          vocab: [
            { word: `Venn diagram`, definition: `Two overlapping circles used to compare.`,
              audioPrompt: `A Venn diagram is two overlapping circles used to compare. One thing in each circle. Shared things in the overlapping middle. Helps you SEE the comparison clearly!` },
            { word: `circle`,       definition: `A round shape.`,
              audioPrompt: `A circle is a round shape. Venn diagrams use two overlapping circles. Each circle holds one thing. The overlap holds what they share!` },
            { word: `overlap`,      definition: `Where two circles cross.`,
              audioPrompt: `Overlap means where two circles cross. In a Venn diagram, the overlap is where the circles share space. That overlap holds all the similarities!` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words to Spot`,
          paragraphs: [
            `Compare and contrast has SIGNAL WORDS too!`,
            `Words that signal SIMILARITIES: ALSO, TOO, BOTH, ALIKE, SIMILAR, SAME, LIKE. Words that signal DIFFERENCES: BUT, HOWEVER, UNLIKE, DIFFERENT. When you see these in a text, the author is comparing or contrasting. The signal words tell you what's coming next — same or different!`,
          ],
          image: `/explorer-assets/ela/l06-s5-signal-words.webp`,
          imageCaption: `Signal words: both, alike = similarity. But, however, unlike = difference!`,
          vocab: [
            { word: `both`,         definition: `Two things together. BOTH signals two things share something.`,
              audioPrompt: `Both signals two things share something. Both dogs and cats are mammals. Both characters faced challenges. When you see "both," the author is pointing out a similarity!` },
            { word: `however`,      definition: `Signals a difference is coming.`,
              audioPrompt: `However signals a difference is coming. "Dogs love walks. However, cats prefer to stay inside." The word "however" is a turn signal — a difference is on the way!` },
            { word: `decoder keys`, definition: `Signal words unlock the comparison.`,
              audioPrompt: `Decoder keys are signal words that unlock the comparison. Both means similarity. But means difference. Once you know the keys, you can read these texts much faster!` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why This Matters`,
          paragraphs: [
            `Compare and contrast is one of the most USEFUL thinking skills!`,
            `Scientists compare experiments to discover what works. Doctors compare symptoms. Shoppers compare products. Voters compare candidates! People who compare and contrast WELL make better decisions. You're learning a LIFE skill — not just a school skill!`,
          ],
          image: `/explorer-assets/ela/l06-s6-deeper-understanding.webp`,
          imageCaption: `Compare and contrast = life skill. Better decisions everywhere!`,
          vocab: [
            { word: `useful`,     definition: `Helpful in many situations.`,
              audioPrompt: `Useful means helpful in many situations. Compare and contrast is super useful. You use it when shopping, choosing friends, picking books, deciding what to do!` },
            { word: `decision`,   definition: `A choice.`,
              audioPrompt: `A decision is a choice. Compare and contrast helps you make better decisions. Should I choose this book or that one? Compare them — pick smarter!` },
            { word: `life skill`, definition: `A skill you use your whole LIFE.`,
              audioPrompt: `A life skill is a skill you use your whole life — not just in school. Compare and contrast is a life skill. Adults use it every day, everywhere!` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 statements about dogs and cats. Drag each one — does it show what's SAME or what's DIFFERENT?`,
          buckets: [
            { id: `same`,      label: `🤝 SAME (similarity)`,    color: `#34D399` },
            { id: `different`, label: `↔️ DIFFERENT (contrast)`, color: `#A78BFA` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `Both dogs and cats have fur.`,
              matchPhrase: `Yes! That's a SIMILARITY. The word "both" signals — they share something!`,
              correctMatch: `same` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `Dogs bark, but cats meow.`,
              matchPhrase: `Great! That's a DIFFERENCE. The word "but" signals — they're not alike here!`,
              correctMatch: `different` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Dogs and cats are alike because both are pets.`,
              matchPhrase: `Yes! That's a SIMILARITY. The words "alike" and "both" signal they share something!`,
              correctMatch: `same` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Unlike cats, dogs usually need daily walks.`,
              matchPhrase: `Perfect! That's a DIFFERENCE. The word "unlike" signals — they're not the same!`,
              correctMatch: `different` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What does COMPARE mean?`,
              options: [`Find what's DIFFERENT`, `Find what's ALIKE — the similarities`, `Erase`, `Shout`],
              correctIndex: 1,
              explanation: `Compare = find similarities, what's ALIKE between two things!` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What does CONTRAST mean?`,
              options: [`Find similarities`, `Find what's DIFFERENT between two things`, `Draw a picture`, `Make food`],
              correctIndex: 1,
              explanation: `Contrast = find differences, what's NOT alike between two things!` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is a VENN DIAGRAM?`,
              options: [`A type of book`, `Two overlapping circles for organizing compare and contrast`, `A math problem`, `A vegetable`],
              correctIndex: 1,
              explanation: `A Venn diagram is two overlapping circles. Each thing in its own circle. Shared things in the overlap!` },
            { id: `l06-q4`, format: `true-false`,
              question: `Signal words like "both" and "alike" hint at SIMILARITIES.`,
              correctAnswer: true,
              explanation: `True! Both, alike, similar, same — all signal similarities!` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Words like "but," "however," and "unlike" signal a ___ is coming.`,
              options: [`difference`, `sandwich`, `secret`, `surprise`],
              correctIndex: 0,
              explanation: `Difference! These words are decoder keys for contrast!` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why is compare and contrast IMPORTANT?`,
              options: [`It's not`, `It helps you understand things and make better decisions in real life`, `Only on tests`, `Just for fun`],
              correctIndex: 1,
              explanation: `Compare and contrast helps you understand things deeply and make better decisions. Real-life skill — used every day!` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists, doctors, shoppers, and voters ALL use compare and contrast! Scientists compare experiments. Doctors compare symptoms. Shoppers compare prices. The compare-and-contrast brain you're building today is the SAME brain that helps adults make big decisions!`,
          familyAdventure: `Pick TWO things together — two books, two pets, two seasons. Draw a VENN DIAGRAM (two overlapping circles). Label one for each thing. Write differences in the outside parts. Write similarities in the middle. Notice how much more you understand both!`,
          creativePrompt: `Pick two things you know well — two foods, two animals, two places. Write 3 SIMILARITIES and 3 DIFFERENCES. Use at least TWO signal words: "both," "alike," "but," or "however." Share with someone!`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to COMPARE (find similarities) and CONTRAST (find differences)! You know about Venn diagrams. You know the signal words. This skill works your whole life. Quill is so proud!`,
          badge: `compare-contrast-explorer`,
          badgeName: `Compare & Contrast Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L06] Loaded: "Compare and Contrast" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
