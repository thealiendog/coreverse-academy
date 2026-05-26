// ─────────────────────────────────────────────────────────────────────────────
// ELA UE  |  L02 — Author's Purpose and Perspective  (v2 — em-dashes dialed back)
// Age band : upper_explorers (9–10)   Guide: quill
// Standards: CCSS RI.4.8 / RI.5.8 — Author's reasoning and evidence
//            CCSS RI.4.6 / RI.5.6 — Compare points of view / perspective
// CALIBRATED: UE spec v1.1 — real domain terms, defined inline, reused
// SCOPE: 4 concepts — three purposes (inform/persuade/entertain), signals/tone,
//        author's perspective, omissions/bias
// STYLE NOTE: em-dashes used sparingly (max ~10 in body content)
// ─────────────────────────────────────────────────────────────────────────────

const ELA_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `ela`,
  guide: `quill`,

  lessons: [
    {
      id: `ela-9-10-02`,
      title: `Author's Purpose and Perspective`,
      duration: 18,
      xpReward: 75,
      badge: `purpose-detective`,
      badgeName: `Purpose Detective`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, it's Quill. Today's question: why does anyone write anything? Some people write to teach you something. Some write to talk you into something. Some write just to entertain you. The same kind of words on a page can be doing completely different jobs. By the end of this lesson, you'll know how to spot which job any text is doing, and how to catch what an author isn't telling you. Let's go.`,
          headline: `Author's Purpose and Perspective`,
          subtitle: `Why authors write what they write, and what they leave out`,
          visual: `/ue-assets/ela/l02-welcome.webp`,
        },

        // ── SECTION 1 — WHY AUTHORS WRITE ─────────────────────────────────────
        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Authors Write`,
          paragraphs: [
            `Every text is written for a reason. Three big ones cover almost everything you'll read. An author writes to INFORM you (teach you facts), to PERSUADE you (change your mind or get you to do something), or to ENTERTAIN you (give you a good time with a story). That reason is the author's purpose.`,
            `Some texts do more than one job at once. A documentary informs and entertains. A funny ad entertains and persuades. A great science article teaches you facts and keeps you turning the page. But almost always, one purpose is the main one, and the others are just along for the ride.`,
          ],
          image: `/ue-assets/ela/l02-s1-three-purposes.webp`,
          imageCaption: `Inform. Persuade. Entertain. Three jobs an author might be doing.`,
          vocab: [
            { word: `purpose`,
              definition: `The reason an author wrote a text, usually to inform, persuade, or entertain.`,
              audioPrompt: `Purpose is the reason an author wrote something, {name}. Most texts you'll ever read are trying to do one of three things: teach you something, change your mind about something, or entertain you. Once you know which one a text is trying to do, you can read it the right way. A textbook is for learning. An ad is for selling. A novel is for the experience. Same words, different jobs.` },
            { word: `inform`,
              definition: `One of the three main author purposes: to teach you facts, explain ideas, or share information using a neutral tone.`,
              audioPrompt: `To inform means to teach, {name}. When an author's purpose is to inform, they use facts, numbers, and neutral language with nothing pulling on your feelings, just the information. Textbooks, encyclopedias, news reports, and how-to guides are all written primarily to inform. The tone stays calm and even, and the goal is knowledge, not emotion.` },
          ],
        },

        // ── SECTION 2 — READING THE SIGNALS ──────────────────────────────────
        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Reading the Signals`,
          paragraphs: [
            `How do you figure out which purpose a text has? You watch for SIGNALS. A text that's informing uses facts, numbers, and neutral language with nothing pulling on your feelings. A text that's persuading uses emotional words, strong opinions, and often direct commands like "you should" or "buy now." A text that's entertaining uses characters, action, and vivid descriptions to pull you in.`,
            `The biggest signal is tone, the attitude or feeling of the writing. A calm, even tone usually means informing. A heated or urgent tone usually means persuading. A playful or dramatic tone usually means entertaining. Once you start listening for tone, the author's purpose almost announces itself.`,
          ],
          image: `/ue-assets/ela/l02-s2-signals.webp`,
          imageCaption: `Tone is the loudest signal. It almost always gives the purpose away.`,
          vocab: [
            { word: `tone`,
              definition: `The attitude or feeling of a piece of writing, like calm, angry, funny, urgent, or dramatic.`,
              audioPrompt: `Tone is the attitude of a piece of writing, {name}. Same as how a person's voice can be calm, angry, or excited, writing has a tone too. A textbook usually has a neutral tone, just the facts. An ad has a hyped-up tone, exciting and urgent. A poem might have a sad tone or a wondering tone. Once you start listening for tone, you'll spot the author's purpose faster.` },
            { word: `signal`,
              definition: `A clue in a text that hints at the author's purpose, like word choice, tone, commands, or emotional language.`,
              audioPrompt: `A signal is a clue in the writing, {name}. Authors don't announce their purpose directly. They show it through signals. Emotional words signal persuasion. Neutral facts and numbers signal information. Characters and vivid descriptions signal entertainment. When you train yourself to spot signals, you stop being a passive reader and start being an active one.` },
          ],
        },

        // ── SECTION 3 — AUTHOR'S PERSPECTIVE ─────────────────────────────────
        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Author's Perspective`,
          paragraphs: [
            `Every author has a perspective, the spot they're writing from. Their experiences, their job, their beliefs, even what country they grew up in all shape what they notice and what they say. Imagine three different people writing about the same thing, say video games. A doctor might focus on screen time and health. A gamer might focus on the fun and the skills. A teacher might focus on attention and homework. None of them is wrong. They're just writing from different perspectives.`,
            `Knowing the author's perspective changes how you read. It doesn't mean you should ignore what they say. It means you should think about WHO is telling you something and what they might naturally see, or naturally miss. Good readers always ask: who is this person, and what's their angle?`,
          ],
          image: `/ue-assets/ela/l02-s3-perspective.webp`,
          imageCaption: `Three writers, one topic, three different angles.`,
          vocab: [
            { word: `perspective`,
              definition: `The viewpoint an author is writing from, shaped by their experiences, beliefs, and goals.`,
              audioPrompt: `Perspective is the viewpoint an author is writing from, {name}. Every writer has one, shaped by their experiences, their job, their beliefs, even where they grew up. Two writers can cover the same topic from totally different angles and both be right. The trick isn't to dismiss what you read. It's to know WHO wrote it, and what they're naturally going to notice or miss.` },
            { word: `viewpoint`,
              definition: `Another word for perspective: the particular position or angle from which someone sees and interprets the world.`,
              audioPrompt: `A viewpoint is the angle you're looking from, {name}. Everyone who writes has a viewpoint, a particular position shaped by their life. A soldier and a journalist reporting on the same battle have different viewpoints. A parent and a kid describing the same argument have different viewpoints. Neither is automatically wrong. Knowing someone's viewpoint helps you understand why they said what they said.` },
          ],
        },

        // ── SECTION 4 — WHAT'S LEFT OUT ──────────────────────────────────────
        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What's Left Out`,
          paragraphs: [
            `Here's the move most readers miss: what an author LEAVES OUT can matter as much as what they include. If an article about a new phone only talks about how great it is and never mentions any downsides, that's a clue. The author might have a reason for staying quiet about the negative side. Maybe they're selling it, or maybe they're a big fan. When important info is missing on purpose, that's bias: a one-sided slant in the writing.`,
            `Strong readers ask three questions. What's included? What's NOT included? Whose voice is missing from this story? You don't have to throw out every text that has some bias, since almost every text has some. You just have to know it's there, so you can read smart instead of swallowing whatever you're handed.`,
          ],
          image: `/ue-assets/ela/l02-s4-whats-missing.webp`,
          imageCaption: `What's missing is a clue. Always ask: who's NOT in this story?`,
          vocab: [
            { word: `bias`,
              definition: `A one-sided slant in writing, when an author favors one view by leaving out evidence, voices, or facts that don't support their side.`,
              audioPrompt: `Bias is a one-sided slant, {name}. It shows up when an author leaves out important information that would weaken their case. An ad for a candy bar that doesn't mention sugar is showing bias. A history book that only tells one country's version of events is showing bias too. Bias doesn't always mean the writing is bad. It just means the writer had a side. Strong readers spot it and read accordingly.` },
            { word: `omission`,
              definition: `Something left out on purpose: when an author deliberately excludes information that might weaken their argument or perspective.`,
              audioPrompt: `An omission is something that's been left out, {name}. It's one of the most powerful tools a biased writer has. Not lying exactly, but just not telling you the whole story. A product review that lists ten benefits and zero drawbacks is full of omissions. A news story that quotes only one side of a debate has a critical omission. Strong readers don't just read what's there. They ask what's missing.` },
          ],
        },

        // ── INTERACTIVE GAME — Investigation: Four Texts, One Question ────────
        {
          id: `l02-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four short text samples coming up. For each one, your job is to figure out the author's purpose. Inform, persuade, or entertain? Watch the signals. Watch the tone. Watch what's included and what's not.\n\nOne of these is trickier than it looks. Stay sharp.`,
          options: [
            { id: `inform`,    label: `Inform`,    color: `#60A5FA`, description: `Author is teaching you facts. Neutral tone. Data, statistics, evidence.` },
            { id: `persuade`,  label: `Persuade`,  color: `#F87171`, description: `Author wants to change your mind or get you to do something. Emotional tone. Strong opinions.` },
            { id: `entertain`, label: `Entertain`, color: `#A78BFA`, description: `Author wants to give you an experience. Characters, action, vivid descriptions.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Text #1`,
              clues: [
                { text: `"The Pacific Ocean is the largest of Earth's five oceans. It covers about 63 million square miles."` },
                { text: `"Its average depth is 12,080 feet, but its deepest point, the Mariana Trench, drops nearly 36,000 feet below the surface."` },
                { text: `"The Pacific contains more than half of the free water on Earth."` },
              ],
              correctAnswer: `inform`,
              realWorldExample: `Reads like a textbook or encyclopedia entry. Pure information.`,
              explanation: `Neutral tone. Facts and numbers. No opinions. No emotional language. The author isn't trying to make you feel anything or do anything. They're just teaching you facts. Pure informing.`,
            },
            {
              id: `case-2`,
              caseTitle: `Text #2`,
              clues: [
                { text: `"Plastic bottles are KILLING our oceans. Every single one matters."` },
                { text: `"If you keep buying disposable plastics, you're part of the problem. Stop pretending you're not."` },
                { text: `"Switch to a reusable bottle today. Your planet is asking you to."` },
              ],
              correctAnswer: `persuade`,
              realWorldExample: `Sounds like an opinion editorial or activist campaign.`,
              explanation: `Strong emotional language ("killing," "asking you to"). Direct commands ("Stop pretending," "Switch today"). All caps for emphasis. The author isn't teaching. They're trying to change what you do. Pure persuading.`,
            },
            {
              id: `case-3`,
              caseTitle: `Text #3`,
              clues: [
                { text: `"The dragon's eye opened, slowly."` },
                { text: `"Its claws dug into the cave floor. Somewhere far below, a single drop of water fell."` },
                { text: `"The dragon had waited three hundred years. Tonight, it would not wait any longer."` },
              ],
              correctAnswer: `entertain`,
              realWorldExample: `Opening of a fantasy story or novel.`,
              explanation: `A character (the dragon). Action and atmosphere. Vivid description. Building tension. There are no facts you're meant to remember and nothing the author wants you to do. The purpose is the experience itself. Pure entertaining.`,
            },
            {
              id: `case-4`,
              caseTitle: `Text #4 — The Tricky One`,
              clues: [
                { text: `"Studies show kids who take vitamins feel more energized and focus better in school."` },
                { text: `"Many parents are now switching to PureGlow Kids, a vitamin blend with 14 essential nutrients."` },
                { text: `"Order today and get free shipping on your first bottle."` },
              ],
              correctAnswer: `persuade`,
              realWorldExample: `Looks like an information article. It's actually a product ad.`,
              explanation: `The first sentence sounds informational ("Studies show..."). But notice the rest: a specific brand name, "many parents are switching," and "Order today" with a free-shipping offer. That last line is the giveaway. Information doesn't ask you to buy. This is an ad in disguise. One of the most important skills you can learn is spotting persuasion that's pretending to be information.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What are the three main purposes an author might have for writing?`,
              options: [
                `To read, to write, and to publish`,
                `To inform, to persuade, and to entertain`,
                `To teach, to test, and to grade`,
                `To question, to answer, and to repeat`,
              ],
              correctIndex: 1,
              explanation: `Inform (teach you facts), persuade (change your mind or actions), entertain (give you an experience). Almost every text you'll ever read is trying to do one or more of these three.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `Which of these signals usually means the author is trying to PERSUADE you?`,
              options: [
                `Long lists of neutral facts and statistics`,
                `Strong opinions, emotional words, and direct commands like "you should"`,
                `Characters with names and personalities`,
                `Detailed scientific definitions`,
              ],
              correctIndex: 1,
              explanation: `Persuading uses emotion, opinions, and pressure. Informing uses neutral facts. Entertaining uses characters and action. When you spot urgency or commands, you're probably reading persuasion.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What is tone, in a piece of writing?`,
              options: [
                `The font and size of the words`,
                `Whether the writing rhymes or not`,
                `The attitude or feeling of the writing, like calm, urgent, funny, or serious`,
                `How long the sentences are`,
              ],
              correctIndex: 2,
              explanation: `Tone is the attitude of the writing, like the tone of a person's voice. It's one of the loudest signals about an author's purpose.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `Three different authors write about video games: a doctor, a gamer, and a teacher. What's most likely true?`,
              options: [
                `Only one of them is correct; the others are wrong`,
                `They all say the exact same thing because facts are facts`,
                `They each notice and emphasize different things based on their perspective`,
                `Two of them must be lying`,
              ],
              correctIndex: 2,
              explanation: `Different perspectives lead to different emphasis. The doctor sees health angles. The gamer sees fun and skill. The teacher sees attention and homework. None is wrong. They're writing from different spots. Perspective shapes what an author notices.` },

            { id: `l02-q5`, format: `true-false`,
              question: `True or false: An article that doesn't mention any downsides of a product can still be considered unbiased.`,
              correctAnswer: false,
              explanation: `False. When important information (like downsides) is left out, that's bias, a one-sided slant. The article might be true in what it says, but it's not the whole picture. Strong readers always ask what's missing.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `An ad for a candy bar quotes "studies" but never mentions sugar content or health effects. This is an example of:`,
              options: [
                `Pure information, facts only`,
                `Bias, an important side of the story has been left out on purpose`,
                `Entertainment writing`,
                `A neutral perspective`,
              ],
              correctIndex: 1,
              explanation: `Leaving out the downside on purpose IS bias. Information that supports the candy bar's side stays in. Information that would weaken its case gets left out. That's the move biased writing makes.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `You read a text that starts with "studies show..." but ends with "order today and get free shipping." What's the author's purpose?`,
              options: [
                `To inform, it cited studies`,
                `To entertain, it's a story`,
                `To persuade, it's an ad disguised as information`,
                `It has no purpose`,
              ],
              correctIndex: 2,
              explanation: `Information doesn't ask you to order anything. The "free shipping" line is the giveaway. It's selling. Persuasion can disguise itself as information, especially in ads. Spotting this disguise is one of the most useful skills a reader can build.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `Why is it useful to ask "whose voice is missing?" from a text?`,
              options: [
                `So you can ignore the text completely`,
                `Because missing voices reveal the author's perspective and possible bias`,
                `Because every text needs more authors`,
                `Because it's a required question on every test`,
              ],
              correctIndex: 1,
              explanation: `What's missing is part of what an author is telling you. A story about a war that only quotes one side has a perspective. A history book that only covers one country has a perspective. Spotting missing voices is how you read smart.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What's a text or video in your life that you thought was informing you, but might have actually been trying to persuade you?` },
            { id: `r2`, text: `If you wrote about something you love, what would be your perspective, and what would you naturally leave out?` },
            { id: `r3`, text: `Which is harder to spot in a text: the author's purpose or the author's bias? Why?` },
            { id: `r4`, text: `Why might an ad disguise itself as information instead of just being honest about being an ad?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Here's why this matters way beyond English class. Most of the content you'll see in your life (videos, ads, posts, news, articles) is trying to do something to you. It's informing, persuading, or entertaining you. A lot of the time it's mixing them on purpose, so you don't notice you're being persuaded. The earlier in life you learn to spot the signals, the harder it gets for anyone to slip something past you.`,
          familyAdventure: `Have a Purpose Hunt at dinner. Each family member finds one short piece of writing or one short video and shares it. Everyone else guesses: is the author trying to inform, persuade, or entertain? What signals gave it away? What's the author's perspective? Bonus points if someone finds a text where the purpose was sneaky and people guessed wrong.`,
          creativePrompt: {
            intro: `Pick something you've read or watched recently. An article, an ad, a video, a book chapter, a movie scene. Analyze it like a Purpose Detective. What was the author trying to do, and how did you know?`,
            floor: `Write at least 5 sentences. One sentence on what you picked. Two sentences on the author's purpose and the signals that gave it away. Two sentences on the author's perspective.`,
            stretch: `Write 8 to 10 sentences. Cover the purpose, the signals, the perspective, AND what the author left out. Use specific examples from the text or video.`,
            open: `Write as much as you want. Do a full close read of the purpose and perspective, including anything the author seems to be hiding or downplaying.`,
            frames: [
              `The text I picked is ___.`,
              `I think the author's purpose was to ___.`,
              `The signals that gave it away were ___.`,
              `The author's perspective comes from ___.`,
              `One thing the author left out (on purpose, I think) was ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now spot the three main purposes of any text, read the signals that give the purpose away, recognize an author's perspective, and catch what's been left out on purpose. Next lesson: when an author makes a claim, what counts as good evidence, and how do you tell strong evidence from weak? See you there. — Quill.`,
          badge: `purpose-detective`,
          badgeName: `Purpose Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default ELA_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = ELA_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-ELA-UE-L02 v2] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
