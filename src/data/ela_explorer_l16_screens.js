// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L16 — Opinion Writing: Making Your Case
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.1
// REWRITE v2 (May 2026): age 6-8 accessibility, OPINION/REASON identification
// game, CCSS linking words (because, and, also) taught explicitly,
// two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L16 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-16`,
      title:     `Opinion Writing: Making Your Case`,
      duration:  12,
      xpReward:  50,
      badge:     `opinion-explorer`,
      badgeName: `Opinion Explorer`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today we explore a third kind of writing — OPINION writing! This is where YOU share what YOU think. And back it up with REASONS. Your voice matters! Today I'll show you how to share it well. Let's go!`,
          headline: `Opinion Writing: Making Your Case`,
          subtitle: `Sharing what you think — and backing it up with reasons`,
          visual: `/explorer-assets/ela/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Voice Matters`,
          paragraphs: [
            `An OPINION is what YOU think. Your view on something.`,
            `"I think chocolate ice cream is the best." "I think kids should have more recess." "I think dogs make great pets." Opinions are PERSONAL. They don't have to be proven. They just need to be YOURS! Your voice matters. The world needs to hear what YOU think!`,
          ],
          image: `/explorer-assets/ela/l16-s1-your-voice.webp`,
          imageCaption: `Your voice matters. An opinion = what YOU think. Personal. Yours!`,
          vocab: [
            { word: `opinion`,  definition: `What YOU think about something. Your personal view.`,
              audioPrompt: `An opinion is what YOU think about something. Your personal view. Different from a fact. Facts can be proven. Opinions are what someone thinks!` },
            { word: `view`,     definition: `How someone sees something. Your view is your opinion.`,
              audioPrompt: `A view is how someone sees something. Your view is your opinion. Different people have different views — and that's okay!` },
            { word: `personal`, definition: `Belonging to you. Opinions are PERSONAL.`,
              audioPrompt: `Personal means belonging to you. Opinions are personal. They belong to whoever has them. Different people can have different opinions — both are valid!` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Opinion vs. Fact`,
          paragraphs: [
            `Important: an OPINION is different from a FACT!`,
            `FACT: "Cats have whiskers." (Can be proven true.) OPINION: "Cats are the best pets." (What someone thinks.) Don't mix them up! In opinion writing, you start with YOUR opinion. Then you give REASONS. Facts can SUPPORT your opinion — but the main thing is your VIEW!`,
          ],
          image: `/explorer-assets/ela/l16-s2-opinion-vs-fact.webp`,
          imageCaption: `Fact = can be proven. Opinion = personal view. Don't mix them up!`,
          vocab: [
            { word: `fact`,     definition: `Something that can be proven true. "Water is wet" is a fact.`,
              audioPrompt: `A fact is something that can be proven true. "Water is wet." "Cats have whiskers." Facts are true for everyone — not just for one person!` },
            { word: `proven`,   definition: `Shown to be true. Facts can be PROVEN.`,
              audioPrompt: `Proven means shown to be true. Facts can be proven. Opinions can't be proven — they're personal. That's the big difference!` },
            { word: `disagree`, definition: `To have a different opinion. People sometimes DISAGREE.`,
              audioPrompt: `To disagree means to have a different opinion. People sometimes disagree. That's okay! It just means they see things differently!` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 1: State Your Opinion`,
          paragraphs: [
            `Opinion writing starts with a CLEAR STATEMENT of your opinion!`,
            `Don't make readers guess. Say it RIGHT AT THE START! Use phrases like I THINK, I BELIEVE, IN MY OPINION, or I FEEL. Example: "I think summer is the best season!" Now readers know exactly what you think. Time to back it up!`,
          ],
          image: `/explorer-assets/ela/l16-s3-state-opinion.webp`,
          imageCaption: `State your opinion clearly. Right at the start. "I think..." "I believe..."`,
          vocab: [
            { word: `state`,        definition: `To say CLEARLY. State your opinion at the start.`,
              audioPrompt: `To state means to say clearly. State your opinion at the start of your writing. First or second sentence. Don't make readers guess!` },
            { word: `I think`,      definition: `A phrase that signals OPINION.`,
              audioPrompt: `"I think" is a phrase that signals opinion. Whenever you start a sentence with "I think," you're sharing your view. "I believe" and "I feel" do the same thing!` },
            { word: `at the start`, definition: `At the beginning. State your opinion AT THE START.`,
              audioPrompt: `At the start means at the beginning. State your opinion at the start of your writing. Readers need to know your view before they can follow your reasons!` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 2: BECAUSE — Your Reasons`,
          paragraphs: [
            `The MAGIC word in opinion writing? BECAUSE!`,
            `Use BECAUSE to give your REASONS. "I think the library is the best place BECAUSE it has thousands of books. ALSO, you can borrow them for free. AND librarians help you find what you need." Each BECAUSE, ALSO, and AND adds a reason. More good reasons = stronger case!`,
          ],
          image: `/explorer-assets/ela/l16-s4-because-reasons.webp`,
          imageCaption: `BECAUSE = magic word! ALSO and AND add more reasons. More reasons = stronger case!`,
          vocab: [
            { word: `because`,       definition: `The word that introduces a REASON. Magic word!`,
              audioPrompt: `Because is the word that introduces a reason. The magic word of opinion writing. "I think this BECAUSE..." That's where your reasons live!` },
            { word: `reason`,        definition: `Why you think what you think.`,
              audioPrompt: `A reason is why you think what you think. Reasons support opinions. Without reasons, an opinion is just a guess. With strong reasons, it becomes convincing!` },
            { word: `linking words`, definition: `Words that connect reasons. Like BECAUSE, ALSO, and AND.`,
              audioPrompt: `Linking words connect your reasons. BECAUSE, ALSO, and AND. Use them to add more reasons to your opinion. They make your writing flow!` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 3: Be Kind When You Disagree`,
          paragraphs: [
            `Important: when you share your opinion, OTHERS may disagree. That's OKAY!`,
            `People have different views. Different feelings. Different experiences. When you disagree, do it KINDLY. Don't say "you're wrong." Say "I see it differently because..." LISTEN to their reasons first. You don't have to change your mind. But listening is RESPECTFUL!`,
          ],
          image: `/explorer-assets/ela/l16-s5-respect-others.webp`,
          imageCaption: `Disagree kindly. "I see it differently because..." Listen first!`,
          vocab: [
            { word: `respect`,      definition: `Being kind and polite — even when you disagree.`,
              audioPrompt: `Respect means being kind and polite. Even when you disagree. Respect lets you share your view without hurting anyone. Be respectful always!` },
            { word: `listen`,       definition: `To pay attention to what someone says.`,
              audioPrompt: `To listen means to pay attention to what someone says. Listen to others — even when you disagree. You might learn something new!` },
            { word: `kindly`,       definition: `In a kind way. Disagree KINDLY — not meanly.`,
              audioPrompt: `Kindly means in a kind way. Disagree kindly — not meanly. Use phrases like "I see it differently." Be nice to people, even when you disagree!` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Step 4: Wrap It Up`,
          paragraphs: [
            `Like every good piece of writing, opinion writing needs a strong CONCLUSION!`,
            `Wrap up by SAYING YOUR OPINION AGAIN — in fresh words. Maybe leave readers with a thought. Example: "So the next time you walk past your local library, stop in. I think you'll see what I mean!" A strong conclusion makes your opinion LINGER in the reader's mind!`,
          ],
          image: `/explorer-assets/ela/l16-s6-wrap-up.webp`,
          imageCaption: `Wrap up strongly. Say your opinion again. Leave readers thinking!`,
          vocab: [
            { word: `conclusion`, definition: `The ending of your writing. Wraps everything up.`,
              audioPrompt: `A conclusion is the ending of your writing. In opinion writing, the conclusion says your opinion AGAIN in fresh words. It ties everything together!` },
            { word: `linger`,     definition: `To stay in someone's mind.`,
              audioPrompt: `To linger means to stay in someone's mind. Good writing lingers. Readers finish your piece and keep thinking about it. That's powerful!` },
            { word: `confident`,  definition: `Sure of yourself. Share your opinion CONFIDENTLY!`,
              audioPrompt: `Confident means sure of yourself. Share your opinion confidently. Don't say "maybe I sort of think." Just say what you think. Own your view!` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences from an opinion piece. Drag each one into OPINION or REASON!`,
          buckets: [
            { id: `opinion`, label: `💭 OPINION — what someone thinks`,        color: `#A78BFA` },
            { id: `reason`,  label: `✅ REASON — backs up the opinion`, color: `#34D399` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `I think dogs make the BEST pets!`,
              matchPhrase: `Yes! That's an OPINION. It starts with "I think" — the opinion signal!`,
              correctMatch: `opinion` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `Dogs are loyal because they stay by your side.`,
              matchPhrase: `Great! That's a REASON. It uses BECAUSE to back up the opinion that dogs are great!`,
              correctMatch: `reason` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `Also, dogs love to play, which keeps you active.`,
              matchPhrase: `Yes! Another REASON. It uses ALSO to add more support for the opinion!`,
              correctMatch: `reason` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `In my opinion, every kid should have a dog!`,
              matchPhrase: `Perfect! That's an OPINION. It uses "in my opinion" — another opinion signal!`,
              correctMatch: `opinion` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is an OPINION?`,
              options: [`Something proven true`, `What YOU think — your personal view`, `A type of food`, `A math problem`],
              correctIndex: 1,
              explanation: `An opinion is what you think — your personal view. Different from a fact. Both matter, but they're different!` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `What's the MAGIC word of opinion writing?`,
              options: [`Hello`, `Because`, `Maybe`, `Goodbye`],
              correctIndex: 1,
              explanation: `Because! Each BECAUSE introduces a REASON. Reasons are the engine of opinion writing!` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `Where should you STATE your opinion?`,
              options: [`At the very end as a surprise`, `Right at the start — clearly`, `Hidden in the middle`, `Don't state it`],
              correctIndex: 1,
              explanation: `Right at the start — clearly! Don't make readers guess. State your opinion so they know what you think!` },
            { id: `l16-q4`, format: `true-false`,
              question: `When people disagree, the best response is to listen and disagree RESPECTFULLY.`,
              correctAnswer: true,
              explanation: `True! Disagree respectfully. Use phrases like "I see it differently because..." Be kind even when you disagree!` },
            { id: `l16-q5`, format: `multiple-choice`,
              question: `Which words are LINKING WORDS that add more reasons?`,
              options: [`Red, blue, green`, `Because, also, and`, `Cat, dog, bird`, `Big, small, tall`],
              correctIndex: 1,
              explanation: `Because, also, and! Linking words add more reasons to your opinion. More good reasons = stronger case!` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between a fact and an opinion?`,
              options: [`There's no difference`, `Facts can be proven true. Opinions are what someone thinks.`, `Facts are longer`, `Opinions are colored`],
              correctIndex: 1,
              explanation: `Facts can be proven true. Opinions are what someone thinks. "Cats have whiskers" = fact. "Cats are the best" = opinion!` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Opinion writing matters EVERYWHERE! Newspapers have opinion pages. Websites have reviews. Politicians give speeches. Movies get reviewed. People who can share opinions CLEARLY and back them up with REASONS — those people get HEARD!`,
          familyAdventure: `Have a FAMILY OPINION SHARE at dinner! Each person picks something they love. They share their opinion ("I think pizza is the best") AND three REASONS why. Other family members listen RESPECTFULLY. Take turns. Notice everyone's opinions are different — and that's okay!`,
          creativePrompt: `Write an opinion piece! Pick something you have strong feelings about — a favorite food, a favorite season, a place you love.

JUST STARTING? Write 3 sentences. ONE opinion + ONE reason + ONE conclusion.

READY FOR MORE? Write 5 sentences. ONE opinion + THREE reasons + ONE conclusion. Use BECAUSE, ALSO, and AND!

Sentence starters: "I think ___ is the best because ___." "Also, ___." "And ___." "So next time, ___!"

Read it out loud. Did you make your case?`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to write OPINIONS! You know to state your opinion clearly. You know the magic word BECAUSE. You know linking words ALSO and AND. You know how to disagree kindly. You know your VOICE matters. Quill is so proud!`,
          badge: `opinion-explorer`,
          badgeName: `Opinion Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L16] Loaded: "Opinion Writing" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
