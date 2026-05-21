// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L16 — Opinion Writing: Say What You Think
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.1 · L.2-3.3 (linking/signal words)
// Rewrite spec: Grade 1 accessible · identification game · CCSS linking words
//               · two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L16 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-16`,
      title:     `Opinion Writing: Say What You Think`,
      duration:  12,
      xpReward:  50,
      badge:     `opinion-explorer`,
      badgeName: `Opinion Explorer`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hi, {name}! Today we learn a third kind of writing — OPINION writing. This is where YOU share what YOU think, and back it up with REASONS. Everybody has opinions. Today I will teach you how to write yours in a way that is clear, kind, and convincing. Your voice matters. Let's begin!`,
          headline: `Opinion Writing: Say What You Think`,
          subtitle: `Share what you think — and back it up with strong reasons`,
          visual: `/explorer-assets/ela/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is an Opinion?`,
          paragraphs: [
            `An OPINION is what YOU think about something. It is your personal view.`,
            `"I think recess should be longer." "I think dogs make the best pets." "I think reading is the best hobby." Opinions are personal — they don't have to be proven. They just need to be YOURS. Opinion writing is sharing your view in a way that is clear and backed by REASONS.`,
          ],
          image: `/explorer-assets/ela/l16-s1-your-voice.webp`,
          imageCaption: `An opinion = what YOU think. Personal. Yours. Worth sharing!`,
          vocab: [
            { word: `opinion`,
              definition: `What you think about something. Your personal view.`,
              audioPrompt: `An opinion is what you think about something. It is your personal view. "Rainy days are the best" is an opinion. Different people can have different opinions about the same thing.` },
            { word: `personal`,
              definition: `Belonging to a person. Opinions are PERSONAL — they belong to whoever has them.`,
              audioPrompt: `Personal means belonging to a person. Opinions are personal. They belong to you. Two people can disagree and both be right about their own opinion. That is what makes opinions different from facts.` },
            { word: `view`,
              definition: `How you see something. Your view is your opinion.`,
              audioPrompt: `A view is how you see something. Your view is your opinion. Sharing your view is how you join conversations. Listening to other views is how you learn.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Facts and Opinions Are Different`,
          paragraphs: [
            `A FACT is something that can be proven true. An OPINION is what someone thinks. They are different!`,
            `FACT: "Cats have whiskers." (We can check — it is true!) OPINION: "Cats are the best pets." (That is what someone thinks — not everyone agrees.) In opinion writing, you share YOUR opinion — then you give REASONS. Facts can help support your opinion. But the main thing you are sharing is YOUR VIEW.`,
          ],
          image: `/explorer-assets/ela/l16-s2-opinion-vs-fact.webp`,
          imageCaption: `Fact = can be proven. Opinion = what someone thinks. Both matter — but they are different!`,
          vocab: [
            { word: `fact`,
              definition: `Something that can be proven true. "Water is wet" is a fact.`,
              audioPrompt: `A fact is something that can be proven true. "Water is wet." "There are 7 days in a week." Facts are true for everyone — they do not change based on what someone thinks.` },
            { word: `proven`,
              definition: `Shown to be true. Facts can be PROVEN. Opinions cannot.`,
              audioPrompt: `Proven means shown to be true. Facts can be proven. You can prove cats have whiskers by looking at one! You cannot prove cats are the best pets — that is a personal opinion.` },
            { word: `support`,
              definition: `To back up. Facts can SUPPORT your opinion — but they are not the same thing.`,
              audioPrompt: `To support means to back up. Facts can support your opinion. "I think dogs are great pets because dog owners walk more — and exercise is healthy." The fact supports the opinion.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `State Your Opinion First`,
          paragraphs: [
            `Opinion writing starts with a CLEAR STATEMENT of your opinion. Say it right at the beginning!`,
            `Don't make readers guess. Start with: "I think…" "I believe…" "In my opinion…" "I feel…" These phrases tell readers — this is what I think. Then you give your reasons. Example: "I think recess should be longer. First, kids need exercise. Also, we learn better after a break." Opinion at the start — then reasons follow!`,
          ],
          image: `/explorer-assets/ela/l16-s3-state-opinion.webp`,
          imageCaption: `State your opinion at the very start. "I think…" "I believe…" "In my opinion…"`,
          vocab: [
            { word: `state`,
              definition: `To say clearly. STATE your opinion right at the beginning.`,
              audioPrompt: `To state means to say clearly. State your opinion at the very beginning of your writing. Do not make readers guess what you think. Tell them right away.` },
            { word: `I think`,
              definition: `A phrase that signals OPINION. "I think recess should be longer."`,
              audioPrompt: `"I think" is a phrase that signals an opinion is coming. Other opinion phrases are "I believe," "In my opinion," and "I feel." These phrases tell readers — this is my personal view.` },
            { word: `beginning`,
              definition: `The very start. State your opinion at the BEGINNING of your piece.`,
              audioPrompt: `Beginning means the very start. State your opinion at the beginning — in your first or second sentence. Readers need to know your view before they can follow your reasons.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Give Reasons — Use BECAUSE`,
          paragraphs: [
            `The most important word in opinion writing is BECAUSE. BECAUSE is where your REASONS live.`,
            `"I think recess should be longer BECAUSE kids need exercise. ALSO, we pay attention better after a break. ANOTHER REASON is that playing with friends makes us happy." Each BECAUSE or reason-linking word adds one more reason. The more good reasons you give, the stronger your opinion becomes!`,
          ],
          image: `/explorer-assets/ela/l16-s4-because-reasons.webp`,
          imageCaption: `BECAUSE = the magic word. Each BECAUSE adds one reason. More reasons = stronger opinion!`,
          vocab: [
            { word: `because`,
              definition: `The word that introduces a REASON. The most important word in opinion writing.`,
              audioPrompt: `Because is the word that introduces a reason. "I think this BECAUSE…" That because is where your reasons live. Without reasons, an opinion is just a statement. With reasons, it becomes convincing.` },
            { word: `reason`,
              definition: `WHY you think what you think. Reasons make opinions stronger.`,
              audioPrompt: `A reason is why you think what you think. Reasons make opinions stronger. The better your reasons, the more convincing your writing is. Always give more than one reason if you can.` },
            { word: `convincing`,
              definition: `Making others agree with you. Strong reasons make writing CONVINCING.`,
              audioPrompt: `Convincing means making others agree with you. Strong reasons make writing convincing. When your reasons are good, readers may agree with your opinion — even if they didn't before.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Linking Words: Connect Your Reasons`,
          paragraphs: [
            `Good opinion writers use LINKING WORDS to connect their reasons and make their writing flow.`,
            `Here are the big OPINION LINKING WORDS: BECAUSE… ALSO… ANOTHER REASON… FOR EXAMPLE… IN CONCLUSION. "I think dogs are great pets. BECAUSE they are loyal. ALSO, they love to play. ANOTHER REASON is they keep you active. IN CONCLUSION, dogs make wonderful companions." These words make your reasons connect — and make your writing sound polished!`,
          ],
          image: `/explorer-assets/ela/l16-s5-respect-others.webp`,
          imageCaption: `Opinion linking words: Because, Also, Another reason, For example, In conclusion.`,
          vocab: [
            { word: `also`,
              definition: `Another way to add a reason. ALSO connects your reasons together.`,
              audioPrompt: `Also adds another reason to your opinion. "I think reading is great. Also, it builds your vocabulary." Also tells the reader there is more to come. It keeps your reasons flowing.` },
            { word: `another reason`,
              definition: `Introduces one more reason. ANOTHER REASON adds strength to your opinion.`,
              audioPrompt: `Another reason introduces one more reason for your opinion. "Another reason I think recess should be longer is that fresh air helps kids focus." Another reason makes your case stronger.` },
            { word: `in conclusion`,
              definition: `Wraps up the opinion piece. IN CONCLUSION is how you end opinion writing.`,
              audioPrompt: `In conclusion wraps up your opinion piece. It signals the end. "In conclusion, I believe recess should be longer." In conclusion is a great way to finish and remind readers of your opinion.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Listen and Disagree Kindly`,
          paragraphs: [
            `When you share your opinion, others may disagree. That is OKAY! People see things differently.`,
            `When someone disagrees with you, listen to their reasons. You do not have to change your mind — but listening is respectful. When YOU disagree, say it kindly. Try "I see it differently because…" instead of "You're wrong!" Opinion writing is not about WINNING. It is about sharing your view — and listening to others.`,
          ],
          image: `/explorer-assets/ela/l16-s6-wrap-up.webp`,
          imageCaption: `Disagree kindly. "I see it differently because…" Listen first. Sharing — not winning.`,
          vocab: [
            { word: `disagree`,
              definition: `To have a different opinion. People will sometimes DISAGREE with you.`,
              audioPrompt: `To disagree means to have a different opinion. People will sometimes disagree with you. That is normal and okay. Disagreeing is one of the most human things we do. The skill is doing it kindly.` },
            { word: `respectfully`,
              definition: `In a kind, polite way. Disagree RESPECTFULLY — without being mean.`,
              audioPrompt: `Respectfully means in a kind, polite way. Disagree respectfully. Use phrases like "I see it differently" or "I think differently about this." Don't shout or call names. Listen first.` },
            { word: `listen`,
              definition: `To pay attention to what someone says. LISTEN to other people's opinions too.`,
              audioPrompt: `To listen means to pay attention to what someone says. Listen to other people's opinions — even ones you disagree with. You might learn something new. Listening is a sign of respect.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's play! Does each sentence give a REASON for its opinion — or does it need a BECAUSE? Drag it to the right bucket, {name}!`,
          buckets: [
            { id: `has-reason`, label: `✅ Has a REASON — great opinion sentence!`, color: `#34D399` },
            { id: `needs-because`, label: `❌ Needs a BECAUSE — no reason given!`,   color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`,
              label: `I think recess is important BECAUSE kids need to move their bodies.`,
              matchPhrase: `Great opinion sentence! It has a BECAUSE with a real reason. "Kids need to move their bodies" is why recess is important.`,
              correctMatch: `has-reason` },
            { id: `l16-g2`, image: `l16-game-2.webp`,
              label: `I think pizza is good.`,
              matchPhrase: `This needs a BECAUSE! Why do you think pizza is good? Try: "I think pizza is good BECAUSE it has yummy toppings and crispy crust."`,
              correctMatch: `needs-because` },
            { id: `l16-g3`, image: `l16-game-3.webp`,
              label: `I believe reading is fun BECAUSE books take you to new worlds.`,
              matchPhrase: `Great opinion sentence! It has a BECAUSE with a real reason. "Books take you to new worlds" is a strong reason.`,
              correctMatch: `has-reason` },
            { id: `l16-g4`, image: `l16-game-4.webp`,
              label: `Dogs are cool.`,
              matchPhrase: `This needs a BECAUSE! Why are dogs cool? Try: "Dogs are cool BECAUSE they are loyal and love to play."`,
              correctMatch: `needs-because` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Quiz time, {name}! Show me what you learned about opinion writing!`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is an OPINION?`,
              options: [`Something proven true`, `What YOU think — your personal view`, `A type of food`, `A math answer`],
              correctIndex: 1,
              explanation: `An opinion is what you think — your personal view. Different from a fact. Facts can be proven. Opinions are personal.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `What is the MAGIC WORD of opinion writing?`,
              options: [`Hello`, `Because`, `Maybe`, `Purple`],
              correctIndex: 1,
              explanation: `Because! Each "because" introduces a REASON. Reasons make your opinion stronger. Always back up your opinion with reasons.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `Where should you state your OPINION in opinion writing?`,
              options: [`At the very end`, `Right at the start`, `Hidden in the middle`, `Never state it`],
              correctIndex: 1,
              explanation: `Right at the start! Say your opinion clearly in your first or second sentence. Readers need to know what you think before they can follow your reasons.` },
            { id: `l16-q4`, format: `true-false`,
              question: `The words ALSO, ANOTHER REASON, and IN CONCLUSION are opinion linking words.`,
              correctAnswer: true,
              explanation: `True! Also, Another reason, Because, For example, and In conclusion are all opinion linking words. They connect your reasons and make your writing flow.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `When someone disagrees with you, the kind thing to say is "I see it ___ because…"`,
              options: [`differently`, `wrong`, `badly`, `never`],
              correctIndex: 0,
              explanation: `"I see it differently because…" Disagreeing respectfully means staying kind. Share your view — but listen to others too.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Which sentence is a strong opinion sentence?`,
              options: [`Dogs are okay.`, `I think dogs are great pets BECAUSE they are loyal and playful.`, `Dogs.`, `Some people like dogs.`],
              correctIndex: 1,
              explanation: `"I think dogs are great pets BECAUSE they are loyal and playful." It has an opinion phrase (I think), a clear opinion, and a BECAUSE with reasons. That is a strong opinion sentence!` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `{name}, here is something cool. Opinion writing matters more than you might think. Newspapers have opinion pages. Books get reviewed. Movies get ratings. Communities vote on rules. People write to their leaders to share their views. People who share opinions CLEARLY — with strong REASONS — get heard. The skill you are learning today will help you speak up your whole life. Your voice matters. Learn to use it well.`,
          familyAdventure: `Have a FAMILY OPINION SHARE tonight! Each person picks something they believe in. They share their opinion AND give two REASONS. Others listen without teasing. Then someone else goes. Notice how everyone's opinions are different — and that is okay! Try to use the linking words Because, Also, and Another reason.`,
          creativePrompt: `**Tier 1 — Sentence Frames:** Fill in the blanks to write your opinion piece:\n"I think ___ because ___. Also, ___. Another reason is ___. In conclusion, I believe ___."\n\n**Tier 2 — Write Freely:** Write an opinion piece (4–6 sentences) about something you feel strongly about — a food, a season, a school rule, an activity. State your opinion clearly at the start. Give at least THREE reasons using the linking words Because, Also, and Another reason. Wrap up with In conclusion.`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}! You know what an opinion is. You know the difference between facts and opinions. You know to state your opinion at the start. You know the magic word BECAUSE. And you know the linking words ALSO, ANOTHER REASON, and IN CONCLUSION. You also know how to disagree kindly. You are an opinion writer now — and your voice matters. I am so proud of you!`,
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
  console.log(`[LESSON-ELA-L16] Loaded: "Opinion Writing: Say What You Think" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
