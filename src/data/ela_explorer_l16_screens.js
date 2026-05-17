// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L16 — Opinion Writing: Making Your Case
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.1
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
          guideText: `Hello, {name}. Today we explore a third kind of writing — OPINION writing. This is where YOU share what YOU think, and back it up with REASONS. Opinion writing is how people share their views with the world. Letters to the editor. Reviews. Persuasive essays. Even debates. Your voice matters. Today, I'll show you how to share it well.`,
          headline: `Opinion Writing: Making Your Case`,
          subtitle: `Sharing what you think — and backing it up with strong reasons`,
          visual: `/explorer-assets/ela/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Voice Matters`,
          paragraphs: [
            `An OPINION is what YOU think — your view on something.`,
            `"I think chocolate ice cream is the BEST flavor." "I think kids should have more recess." "I think reading at bedtime is wonderful." Opinions are personal. They don't have to be proven like facts. They just need to be YOURS. Opinion writing is sharing your view in a way that's clear, kind, and backed by REASONS. Your voice matters. The world needs to hear what YOU think.`,
          ],
          image: `/explorer-assets/ela/l16-s1-your-voice.webp`,
          imageCaption: `Your voice matters. An opinion = what YOU think. Personal. Yours. Worth sharing.`,
          vocab: [
            { word: `opinion`,        definition: `What you think about something. Your personal view.`,
              audioPrompt: `An opinion, {name}, is what you think about something. Your personal view. Different from a fact. Facts can be proven true. Opinions are personal — they can vary from person to person. 'It's raining' is a fact. 'Rainy days are the best' is an opinion. Both matter — but they're different.` },
            { word: `view`,           definition: `How someone sees something. Your view is your opinion.`,
              audioPrompt: `A view, {name}, is how someone sees something. Your view is your opinion. Different people have different views — that's part of being human. Sharing your view is how you contribute to conversations. Listening to others' views is how you understand the world. Both matter.` },
            { word: `personal`,       definition: `Belonging to a person. Opinions are PERSONAL — they belong to whoever has them.`,
              audioPrompt: `Personal, {name}, means belonging to a person. Opinions are personal. They belong to you. Or to whoever holds them. That's why two people can disagree and BOTH be right in some sense. Their opinions belong to them. Personal doesn't mean small — personal opinions can change the world.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Opinion vs. Fact`,
          paragraphs: [
            `Important: an OPINION is different from a FACT.`,
            `FACT: "Cats have whiskers." (Can be proven true.) OPINION: "Cats are the best pets." (What someone thinks.) Don't mix them up. In opinion writing, you start with YOUR opinion — clearly. Then you give REASONS. Facts can SUPPORT your opinion ("Cats are great pets BECAUSE they're quiet — and they really ARE quiet"). But the main thing being shared is your VIEW.`,
          ],
          image: `/explorer-assets/ela/l16-s2-opinion-vs-fact.webp`,
          imageCaption: `Fact = provable. Opinion = personal view. Both matter. Don't mix them up.`,
          vocab: [
            { word: `fact`,           definition: `Something that can be proven true. "Water is wet" is a fact.`,
              audioPrompt: `A fact, {name}, is something that can be proven true. 'Water is wet.' 'Cats have whiskers.' 'There are 24 hours in a day.' All facts. They're not personal — they're true for everyone. Different from opinions, which are personal views. The two work together, but they're not the same.` },
            { word: `proven`,         definition: `Shown to be true with evidence. Facts can be PROVEN.`,
              audioPrompt: `Proven, {name}, means shown to be true with evidence. Facts can be proven. Opinions can't. You can prove cats have whiskers (look at one!). You can't prove cats are the best pets — because some people prefer dogs. That's a personal view. Proving is for facts. Sharing is for opinions.` },
            { word: `support`,        definition: `Back up. Facts can SUPPORT opinions — but they're not the same thing.`,
              audioPrompt: `To support, {name}, is to back up. Facts can support opinions — but they're not the same thing. 'I think dogs are great pets BECAUSE they keep you active — research shows dog owners walk more.' The fact (research about walking) supports the opinion (dogs are great pets). They work together. But the opinion stays the main thing.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `State Your Opinion Clearly`,
          paragraphs: [
            `Opinion writing starts with a CLEAR STATEMENT of your opinion.`,
            `Don't make readers guess. Say it right at the start. "I think summer is the best season." "I believe kids should have a pet." "In my opinion, libraries are the best places in town." Use phrases like I THINK, I BELIEVE, IN MY OPINION, I FEEL. These make it clear — this is your view. Then you build the rest of the piece around proving why you think this.`,
          ],
          image: `/explorer-assets/ela/l16-s3-state-opinion.webp`,
          imageCaption: `State your opinion clearly. Right at the start. "I think..." "I believe..." "In my opinion..."`,
          vocab: [
            { word: `state`,          definition: `To say clearly. STATE your opinion at the start of your piece.`,
              audioPrompt: `To state, {name}, means to say clearly. State your opinion at the start of your opinion writing. Don't make readers guess. Don't bury it in the middle. Right at the beginning, tell them what you think. Once they know your view, they can follow the reasons you give.` },
            { word: `I think`,        definition: `A phrase that signals OPINION. "I think the moon is beautiful."`,
              audioPrompt: `'I think,' {name}, is a phrase that signals opinion. Whenever you start a sentence with 'I think,' you're sharing your view. 'I believe.' 'In my opinion.' 'I feel.' These are all opinion-signal phrases. They tell readers — this is what I think, not necessarily what's universally true.` },
            { word: `at the start`,   definition: `At the beginning. State your opinion AT THE START of your writing.`,
              audioPrompt: `At the start, {name}, means at the beginning. State your opinion at the start of your writing. First or second sentence. Don't make readers wait. They need to know what you think before they can evaluate your reasons. Lead with the opinion. Then back it up.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `BECAUSE: Your Reasons`,
          paragraphs: [
            `The most important word in opinion writing? BECAUSE.`,
            `"I think the library is the best place in town." Now give your reasons. "BECAUSE it has thousands of books. BECAUSE you can borrow anything for free. BECAUSE librarians help you find what you need. BECAUSE it's quiet and peaceful." Each BECAUSE = one reason. Strong opinion writing has MULTIPLE because-reasons. The more good reasons, the stronger your case.`,
          ],
          image: `/explorer-assets/ela/l16-s4-because-reasons.webp`,
          imageCaption: `BECAUSE = the magic word of opinion writing. Each BECAUSE = one reason. More reasons = stronger case.`,
          vocab: [
            { word: `because`,        definition: `The word that introduces a REASON. The most important word in opinion writing.`,
              audioPrompt: `Because, {name}, is the word that introduces a reason. The most important word in opinion writing. 'I think this BECAUSE...' That 'because' is where your reasons live. Without because-reasons, an opinion is just an empty claim. With them, it becomes a CASE — something convincing.` },
            { word: `reason`,         definition: `Why you think what you think. Reasons SUPPORT opinions.`,
              audioPrompt: `A reason, {name}, is why you think what you think. Reasons support opinions. They're the engine of opinion writing. Without reasons, an opinion is just a statement. With strong reasons, it becomes convincing. The better your reasons, the better your case. Always have multiple reasons.` },
            { word: `case`,           definition: `An argument backed by reasons. Strong opinion writing builds a CASE.`,
              audioPrompt: `A case, {name}, is an argument backed by reasons. In court, lawyers build cases. In opinion writing, you build a case too — for what you believe. Your opinion is the claim. Your reasons are the support. Together they make a case. Strong cases convince readers.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Disagreeing Respectfully`,
          paragraphs: [
            `Here's something important — when you share your opinion, OTHERS may disagree.`,
            `That's OKAY. People have different views. Different feelings. Different experiences. When you disagree with someone, do it KINDLY. Don't say "you're wrong" — say "I see it differently because..." Listen to their reasons. They might be good ones. You don't have to change your mind, but listening is respectful. Opinion writing isn't about WINNING. It's about sharing — and listening.`,
          ],
          image: `/explorer-assets/ela/l16-s5-respect-others.webp`,
          imageCaption: `Disagree respectfully. "I see it differently because..." Listen. It's not about winning — it's about sharing.`,
          vocab: [
            { word: `disagree`,       definition: `To have a different opinion. People will sometimes DISAGREE with you.`,
              audioPrompt: `To disagree, {name}, means to have a different opinion. People will sometimes disagree with you. That's normal. It doesn't mean they don't like you. It just means they see things differently. Disagreeing is one of the most human things we do. The skill is doing it kindly.` },
            { word: `respectfully`,   definition: `In a kind, polite way. Disagree RESPECTFULLY — without being mean.`,
              audioPrompt: `Respectfully, {name}, means in a kind, polite way. Disagree respectfully. Use phrases like 'I see it differently' or 'My experience is different.' Don't call people names. Don't shout. Listen first. Then share your view. That's how grown-ups have meaningful conversations about hard topics.` },
            { word: `listen`,         definition: `To pay attention to what someone says. LISTEN to others' opinions too.`,
              audioPrompt: `To listen, {name}, means to pay attention to what someone says. Listen to others' opinions. Even ones you disagree with. Sometimes the BEST conversations happen when two people with different views actually listen to each other. You might learn something. You might change your mind. Or you might just feel respected — and respect them too.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Wrap It Up Strongly`,
          paragraphs: [
            `Like every good piece of writing, opinion writing needs a strong CONCLUSION.`,
            `Wrap up by repeating your opinion in fresh words. Maybe leave readers with a thought to remember. "So the next time you walk past your local library, stop in. I think you'll see what I mean." A strong conclusion makes your opinion linger in the reader's mind. That's the power of well-built opinion writing. Now your case is made — clearly, confidently, kindly.`,
          ],
          image: `/explorer-assets/ela/l16-s6-wrap-up.webp`,
          imageCaption: `Wrap up strongly. Repeat your opinion in fresh words. Leave readers thinking.`,
          vocab: [
            { word: `wrap up`,        definition: `To finish neatly. Wrap up opinion writing with a strong conclusion.`,
              audioPrompt: `To wrap up, {name}, is to finish neatly. Wrap up opinion writing with a strong conclusion. Just like in paragraphs, the conclusion loops back to your opinion. It doesn't add new reasons — those came in the middle. It just ties everything together for the reader.` },
            { word: `linger`,         definition: `To stay or hang around. Good writing LINGERS in the reader's mind.`,
              audioPrompt: `To linger, {name}, means to stay or hang around. Good writing lingers in the reader's mind. They finish your piece and your words stay with them. They keep thinking about your opinion. Maybe even agree with it. That's the goal of opinion writing — to share something that lingers.` },
            { word: `confidently`,    definition: `With certainty. Share your opinion CONFIDENTLY — without apologizing.`,
              audioPrompt: `Confidently, {name}, means with certainty. Share your opinion confidently. Don't say 'I might sort of think maybe.' Just say what you think. 'I think X because Y.' Confidence doesn't mean being rude. It means owning your view. Your opinion is worth sharing. Share it like you mean it.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about opinion writing, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `Strong opinion writing backs up the opinion with multiple REASONS.`,
              matchPhrase: `Yes! Each "because" is a reason. The more good reasons you give, the stronger your case becomes. Reasons are the engine of opinion writing.`,
              correctMatch: `fact` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `Different people having different opinions is normal and valued.`,
              matchPhrase: `True! Diverse opinions are healthy and human. Everyone sees the world differently. Listening to other views — even ones you disagree with — makes you wiser.`,
              correctMatch: `fact` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `It's fine to just shout your opinion with no reasons to back it up.`,
              matchPhrase: `Not really! Opinions without reasons aren't convincing. The BECAUSE part is what makes opinion writing work. Always give reasons.`,
              correctMatch: `myth` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `When someone disagrees with you, the best thing to do is be mean and shout.`,
              matchPhrase: `Definitely not! Disagree respectfully. "I see it differently because..." Listen first. Sharing isn't about winning. Be kind even when you disagree.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is an OPINION?`,
              options: [`Something proven true`, `What YOU think — your personal view`, `A type of food`, `A math problem`],
              correctIndex: 1,
              explanation: `An opinion is what you think — your personal view. Different from a fact (which can be proven). Both matter, but they're different.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `What's the MAGIC WORD of opinion writing?`,
              options: [`Hello`, `Because`, `Maybe`, `Goodbye`],
              correctIndex: 1,
              explanation: `Because! Each "because" introduces a REASON. Reasons are the engine of opinion writing. More good reasons = stronger case.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `Where should you STATE your opinion in opinion writing?`,
              options: [`At the very end, as a surprise`, `Right at the start — clearly`, `Hidden in the middle`, `Don't state it at all`],
              correctIndex: 1,
              explanation: `Right at the start — clearly. Don't make readers guess. State your opinion clearly so they know what you think. Then back it up with reasons.` },
            { id: `l16-q4`, format: `true-false`,
              question: `When people disagree, the best response is to listen and disagree RESPECTFULLY.`,
              correctAnswer: true,
              explanation: `True! Disagree respectfully. Use phrases like "I see it differently because..." Listen first. Be kind. Opinion writing isn't about winning — it's about sharing and listening.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `The phrase "I ___" is a signal that an opinion is being shared.`,
              options: [`think`, `eat`, `run`, `sleep`],
              correctIndex: 0,
              explanation: `Think! "I think" signals an opinion is coming. So do "I believe," "in my opinion," and "I feel." All opinion-signal phrases.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between a fact and an opinion?`,
              options: [`There's no difference`, `Facts can be proven true. Opinions are what someone thinks.`, `Facts are longer than opinions`, `Opinions are colored`],
              correctIndex: 1,
              explanation: `Facts can be proven true. Opinions are what someone thinks. "Cats have whiskers" = fact. "Cats are the best pets" = opinion. Both matter — but they're different.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Opinion writing matters more than ever. Newspapers have opinion pages. Websites have reviews. Politicians give speeches. Movies get reviewed. Books get rated. Important issues get debated. People who can share opinions CLEARLY and back them up with REASONS — those people get heard. That's why this skill matters so much. The world listens to those who speak clearly and reason well.`,
          familyAdventure: `Have a FAMILY OPINION SHARE. Each person picks something they love or believe in. They share their opinion ("I think peanut butter is the best snack") AND three REASONS why. Other family members listen RESPECTFULLY. No teasing. Just listening. Then someone else goes. Notice how everyone's opinions are different — and that's okay.`,
          creativePrompt: `Write an opinion piece (just a paragraph). Pick something you have strong feelings about — a favorite food, a favorite season, an idea you believe in. STATE your opinion clearly at the start. Give THREE because-reasons. Wrap up at the end. Read it aloud. Did you make your case?`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to write OPINIONS — clearly, with strong reasons, and respectfully. You know the magic word BECAUSE. You know how to disagree without being mean. You know your VOICE matters. This is one of the most important writing skills in a free society — sharing what you think and listening to others. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L16] Loaded: "Opinion Writing: Making Your Case" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
