// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L06 — Compare and Contrast in Texts
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.2-3.9 / RI.2-3.9
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
          guideText: `Hello, {name}. Today's lesson teaches you to find SIMILARITIES and DIFFERENCES between two things. That's called COMPARE AND CONTRAST. It's one of the most powerful thinking skills there is. By the end of this lesson, you'll be able to look at any two things — characters, animals, ideas, places — and see how they match AND how they differ. Let's go.`,
          headline: `Compare and Contrast in Texts`,
          subtitle: `Finding similarities AND differences — one of the most powerful thinking skills`,
          visual: `/explorer-assets/ela/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Things, Side by Side`,
          paragraphs: [
            `Imagine looking at two things at the SAME TIME. A dog and a cat. Two characters in a book. Two countries.`,
            `When authors put two things side by side, they often want you to do something special — COMPARE them (find what's ALIKE) and CONTRAST them (find what's DIFFERENT). This kind of thinking helps you understand BOTH things more deeply. You learn things about each one that you'd miss if you only looked at it alone. Side-by-side thinking is a superpower.`,
          ],
          image: `/explorer-assets/ela/l06-s1-two-things.webp`,
          imageCaption: `Compare and contrast = looking at two things side by side. Find what's alike. Find what's different.`,
          vocab: [
            { word: `compare`,        definition: `To find what's ALIKE between two things.`,
              audioPrompt: `To compare, {name}, is to find what's alike between two things. Two animals might both be mammals. Two friends might both love drawing. Two stories might both have brave main characters. When you compare, you spot the similarities. That's half of compare-and-contrast thinking.` },
            { word: `contrast`,       definition: `To find what's DIFFERENT between two things.`,
              audioPrompt: `To contrast, {name}, is to find what's different between two things. A dog barks; a cat meows. One friend loves sports; another loves books. One story is funny; another is sad. When you contrast, you spot the differences. That's the other half of compare-and-contrast thinking.` },
            { word: `side by side`,   definition: `Next to each other for thinking. Compare and contrast puts things SIDE BY SIDE.`,
              audioPrompt: `Side by side, {name}, means next to each other for thinking. Compare and contrast puts two things side by side. By looking at them together, you see things about each one you'd never notice if you looked at only one. That's why this skill is so powerful — it shows you more than studying each alone would.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Finding What's ALIKE`,
          paragraphs: [
            `Start by looking for SIMILARITIES — the things that are alike.`,
            `Take a dog and a cat. Both are pets. Both have fur. Both eat from bowls. Both can be cuddly. Those are similarities. To find them, ask: "What do these two things SHARE?" "What do they have IN COMMON?" "How are they ALIKE?" Even very different things usually share some qualities. The trick is looking carefully.`,
          ],
          image: `/explorer-assets/ela/l06-s2-compare-alike.webp`,
          imageCaption: `Find what's alike. Both pets. Both have fur. Both eat from bowls. Similarities.`,
          vocab: [
            { word: `similarity`,     definition: `Something two things SHARE. Compare finds similarities.`,
              audioPrompt: `A similarity, {name}, is something two things share. Two friends might share a love of music. Two animals might share the same habitat. Two characters might share a brave personality. Similarities are the building blocks of comparison. The more you spot, the deeper your understanding.` },
            { word: `share`,          definition: `To have in common. Similarities are things two things SHARE.`,
              audioPrompt: `To share, {name}, means to have in common. Similarities are things two things share. They don't share everything — but they share SOMETHING. Even cats and dogs share things. Even very different books share things. Finding what's shared is the heart of comparing.` },
            { word: `in common`,      definition: `Shared between things. What do two things have IN COMMON?`,
              audioPrompt: `In common, {name}, means shared between things. What do they have in common? is a great question to ask when comparing. Two characters in common: both brave. Two countries in common: both have mountains. Two foods in common: both made with bread. Finding things in common is how comparison works.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Finding What's DIFFERENT`,
          paragraphs: [
            `Then look for DIFFERENCES — the things that are NOT alike.`,
            `Back to the dog and cat. Dogs bark; cats meow. Dogs usually need walks; cats don't. Dogs come when called; cats... do whatever they want. Those are differences. To find them, ask: "How are these two things DIFFERENT?" "What does one have that the other doesn't?" "What does one DO differently?" Even very similar things usually have differences. Looking for them sharpens your understanding.`,
          ],
          image: `/explorer-assets/ela/l06-s3-contrast-different.webp`,
          imageCaption: `Find what's different. Dogs bark, cats meow. Dogs walk, cats don't. Differences.`,
          vocab: [
            { word: `difference`,     definition: `A way two things are NOT alike. Contrast finds differences.`,
              audioPrompt: `A difference, {name}, is a way two things are NOT alike. Two friends might both love music — but one loves rock and the other loves classical. That's a difference. Differences make each thing unique. Even when two things share a lot, their differences are what set them apart.` },
            { word: `unique`,         definition: `One of a kind. Differences make each thing UNIQUE.`,
              audioPrompt: `Unique, {name}, means one of a kind. Differences make each thing unique. No two things in the world are exactly the same. Even identical twins have differences. By finding what makes each thing unique, you understand it more deeply. That's the power of contrasting.` },
            { word: `set apart`,      definition: `To make different. Differences SET things APART from each other.`,
              audioPrompt: `Set apart, {name}, means to make different. Differences set things apart from each other. Dogs and cats are both pets, but their differences set them apart. Stories may share a theme, but their differences set them apart. Strong readers notice both the shared parts and the set-apart parts.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Venn Diagrams: A Tool`,
          paragraphs: [
            `Want a SUPER USEFUL tool for compare and contrast? Try a VENN DIAGRAM.`,
            `A Venn diagram is two CIRCLES that overlap. One circle is for one thing. The other circle is for the other thing. The MIDDLE OVERLAP is for things they SHARE. Write differences in the outside parts. Write similarities in the middle. Suddenly, you can SEE the whole comparison at once. Teachers love Venn diagrams. So do scientists. So do thinkers everywhere.`,
          ],
          image: `/explorer-assets/ela/l06-s4-venn-diagram.webp`,
          imageCaption: `Venn diagram = two overlapping circles. Differences outside. Similarities in the overlap.`,
          vocab: [
            { word: `Venn diagram`,   definition: `Two overlapping circles used to compare. Shared things go in the overlap.`,
              audioPrompt: `A Venn diagram, {name}, is two overlapping circles used to compare. One thing in one circle. Another thing in the other circle. Shared things in the overlapping middle. Venn diagrams help you SEE the comparison clearly. They're named after a mathematician who invented them long ago.` },
            { word: `circle`,         definition: `A round shape. Venn diagrams use two overlapping CIRCLES.`,
              audioPrompt: `A circle, {name}, is a round shape. Venn diagrams use two overlapping circles. Each circle holds one thing. The overlap holds what they share. Two circles is the most common Venn diagram, but you can also have three or even four. More circles, more comparisons.` },
            { word: `overlap`,        definition: `Where two circles cross. The OVERLAP in a Venn diagram holds shared things.`,
              audioPrompt: `Overlap, {name}, means where two circles cross. In a Venn diagram, the overlap is where the two circles share space. That overlap holds the things both items share. Looking at the overlap shows you all the similarities at once. It's the heart of the Venn diagram.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Signal Words for Compare and Contrast`,
          paragraphs: [
            `Like other text structures, compare/contrast has SIGNAL WORDS to look for.`,
            `Words that signal SIMILARITIES: ALSO, TOO, BOTH, ALIKE, SIMILAR, SAME, LIKE. Words that signal DIFFERENCES: BUT, HOWEVER, UNLIKE, ON THE OTHER HAND, DIFFERENT, WHILE. When you see these words in a text, the author is probably comparing or contrasting. The signal words tell you what to expect next — a similarity or a difference. Watch for them.`,
          ],
          image: `/explorer-assets/ela/l06-s5-signal-words.webp`,
          imageCaption: `Signal words: both, alike, similar = similarity. But, however, unlike = difference. Decoder keys.`,
          vocab: [
            { word: `both`,           definition: `Two things together. BOTH signals two things share something.`,
              audioPrompt: `Both, {name}, signals two things share something. Both dogs and cats are mammals. Both characters faced challenges. Both countries have mountains. When you see both, the author is pointing out a similarity. Both is one of the clearest signal words for comparison.` },
            { word: `however`,        definition: `Signals a difference is coming. HOWEVER points to contrast.`,
              audioPrompt: `However, {name}, signals a difference is coming. Dogs love walks. However, cats prefer to stay inside. The word however is a turn signal — the author is about to point out a contrast. But works the same way. So does on the other hand. All signal differences.` },
            { word: `decoder keys`,   definition: `Signal words are DECODER KEYS to the comparison.`,
              audioPrompt: `Decoder keys, {name}, are signal words that unlock the comparison. Each signal word tells you what's coming. Both means similarity coming. But means difference coming. Once you know the decoder keys, you can read compare and contrast texts much faster. You know what to expect.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why This Skill Matters`,
          paragraphs: [
            `Compare and contrast is one of the most USEFUL thinking skills in the whole world.`,
            `When you compare two book characters, you understand both more deeply. When you compare two countries, you learn what makes each unique. When scientists compare two experiments, they discover new things. When shoppers compare two products, they make smarter choices. People who compare and contrast WELL make better decisions and understand the world better. You're learning a life skill, not just a school skill.`,
          ],
          image: `/explorer-assets/ela/l06-s6-deeper-understanding.webp`,
          imageCaption: `Compare and contrast = life skill. Better decisions. Deeper understanding. Used everywhere by everyone.`,
          vocab: [
            { word: `useful`,         definition: `Helpful in many situations. Compare and contrast is super USEFUL.`,
              audioPrompt: `Useful, {name}, means helpful in many situations. Compare and contrast is super useful. You use it when shopping. When choosing friends to play with. When deciding which book to read. When figuring out which sport you like best. Every choice involves a little compare-and-contrast. That's why this skill matters.` },
            { word: `decision`,       definition: `A choice. Compare and contrast helps you make better DECISIONS.`,
              audioPrompt: `A decision, {name}, is a choice. Compare and contrast helps you make better decisions. Should I choose this book or that one? Compare them. Should I have a peanut butter sandwich or a turkey one? Contrast them. Whenever you have to choose, compare-and-contrast thinking helps you pick smarter.` },
            { word: `life skill`,     definition: `A skill you use your whole LIFE — not just in school.`,
              audioPrompt: `A life skill, {name}, is a skill you use your whole life — not just in school. Compare and contrast is a life skill. Adults use it every single day. At work. While shopping. While voting. While planning trips. The compare-and-contrast skills you build now will serve you forever.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `Compare and contrast means finding BOTH similarities AND differences.`,
              matchPhrase: `Yes! Compare = find similarities. Contrast = find differences. Together they help you understand both things more deeply.`,
              correctMatch: `fact` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `A Venn diagram (two overlapping circles) helps organize a compare and contrast.`,
              matchPhrase: `True! Venn diagrams show differences in the outside circles and similarities in the overlap. They make comparisons visual and easy to see at a glance.`,
              correctMatch: `fact` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Compare and contrast just means finding similarities — you can ignore differences.`,
              matchPhrase: `Not at all! "Compare AND contrast" — you do BOTH. Find similarities (compare) AND differences (contrast). Skipping half means missing half the understanding.`,
              correctMatch: `myth` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Two things that are completely IDENTICAL — exactly the same — can still be compared and contrasted.`,
              matchPhrase: `Definitely not! Two identical things have nothing to contrast. Compare and contrast only works when things are similar in some ways AND different in others.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What does COMPARE mean?`,
              options: [`To find what's DIFFERENT`, `To find what's ALIKE — the similarities`, `To erase`, `To shout`],
              correctIndex: 1,
              explanation: `Compare = find similarities, what's ALIKE between two things. Contrast is the opposite — finding differences.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What does CONTRAST mean?`,
              options: [`To find similarities`, `To find what's DIFFERENT between two things`, `To draw a picture`, `To make food`],
              correctIndex: 1,
              explanation: `Contrast = find differences, what's NOT alike between two things. Compare is finding similarities. They're opposites that work together.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is a VENN DIAGRAM?`,
              options: [`A type of book`, `Two overlapping circles used to organize a compare and contrast`, `A math problem`, `A vegetable`],
              correctIndex: 1,
              explanation: `A Venn diagram is two overlapping circles. Each thing goes in its own circle. Shared things go in the overlap. Makes comparisons easy to see.` },
            { id: `l06-q4`, format: `true-false`,
              question: `Signal words like "both" and "alike" hint at SIMILARITIES.`,
              correctAnswer: true,
              explanation: `True! Both, alike, similar, same, like, too, also — these all signal similarities. When you see them, the author is comparing two things.` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Words like "but," "however," and "unlike" signal a ___ is coming.`,
              options: [`difference`, `sandwich`, `secret`, `surprise`],
              correctIndex: 0,
              explanation: `Difference! "But," "however," "unlike," and "different" all signal a difference. They're decoder keys for contrast.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why is compare and contrast such an IMPORTANT skill?`,
              options: [`It's not really important`, `It helps you understand things more deeply and make better decisions — used in real life every day`, `Only on tests`, `Just for fun`],
              correctIndex: 1,
              explanation: `Compare and contrast helps you understand things more deeply and make better decisions. Adults use it every day — shopping, voting, choosing, deciding. Real life skill.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. SCIENTISTS use compare and contrast to make discoveries — by comparing experiments, they find what works. DOCTORS use it to figure out what's wrong — comparing symptoms. SHOPPERS use it to choose better products. VOTERS use it to choose leaders. The compare-and-contrast brain you're building today is the same brain that helps adults make BIG important decisions. You're practicing for life.`,
          familyAdventure: `Pick TWO things to compare together — two favorite books, two pets, two countries, two seasons. On a paper, draw a VENN DIAGRAM (two overlapping circles). Label one circle for each thing. Write differences in the outside parts. Write similarities in the middle overlap. Notice how much more you understand both things after doing this.`,
          creativePrompt: `Pick two things you know well — two foods, two animals, two places. Write 3 SIMILARITIES (things they share) and 3 DIFFERENCES (things that set them apart). Use at least TWO signal words: "both," "alike," "but," or "however." Share your compare-and-contrast with someone.`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to COMPARE (find similarities) and CONTRAST (find differences). You know about Venn diagrams. You know the signal words. You know this skill works your whole life — at school, at home, at work someday. Compare-and-contrast thinking is one of the most powerful tools your brain has. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L06] Loaded: "Compare and Contrast in Texts" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
