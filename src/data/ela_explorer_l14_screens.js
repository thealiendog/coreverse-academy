// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L14 — Narrative Writing: Tell a Story
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.3 · L.2-3.3 (linking/temporal words)
// Rewrite spec: Grade 1 accessible · identification game · CCSS linking words
//               · two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L14 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-14`,
      title:     `Narrative Writing: Tell a Story`,
      duration:  12,
      xpReward:  50,
      badge:     `narrative-explorer`,
      badgeName: `Narrative Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hi, {name}! Today you will WRITE A STORY. A story is called a NARRATIVE. Stories have characters, settings, and problems. You will learn how to put a story together — from the very first word to the very last. YOU are the author. Let's begin!`,
          headline: `Narrative Writing: Tell a Story`,
          subtitle: `Learn to write your own story — with a character, a setting, and a problem`,
          visual: `/explorer-assets/ela/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a Story?`,
          paragraphs: [
            `A story is a made-up piece of writing. Stories have CHARACTERS — the people or animals in the story. They have a SETTING — where and when the story happens. And they have a PROBLEM — something that goes wrong.`,
            `When you write a story, YOU make it all up! You choose the character. You pick the setting. You decide the problem. You are the AUTHOR.`,
          ],
          image: `/explorer-assets/ela/l14-s1-storyteller.webp`,
          imageCaption: `A story has characters, a setting, and a problem. You make it all up!`,
          vocab: [
            { word: `narrative`,
              definition: `A story. Narrative writing means writing a story.`,
              audioPrompt: `Narrative means story. When your teacher says "write a narrative," they mean write a story. You make up the characters, the setting, and what happens.` },
            { word: `author`,
              definition: `The person who writes a story. When you write, YOU are the author.`,
              audioPrompt: `An author is the person who writes a story. When you write your own story, you are the author. You make all the choices about what happens.` },
            { word: `character`,
              definition: `The people or animals in a story.`,
              audioPrompt: `A character is a person or animal in a story. Your character can be a child, an animal, or even a robot. You choose who your character is.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Problem — What Goes Wrong?`,
          paragraphs: [
            `Every good story has a PROBLEM. The problem is something that goes wrong for the character. It is also called the CONFLICT.`,
            `Maybe a puppy gets lost. Maybe a kid can't find her lunch. Maybe a frog wants to jump over a big rock but keeps slipping. The problem is what makes the story exciting. We keep reading because we want to know — will the character FIX it?`,
          ],
          image: `/explorer-assets/ela/l14-s2-four-pieces.webp`,
          imageCaption: `Every story needs a problem. The problem makes the story exciting!`,
          vocab: [
            { word: `problem`,
              definition: `Something that goes wrong in the story. Also called the conflict.`,
              audioPrompt: `A problem is something that goes wrong for the character. Without a problem, a story is boring. The problem is what makes us keep reading.` },
            { word: `conflict`,
              definition: `The big problem in a story. The character tries to solve it.`,
              audioPrompt: `Conflict is the big problem in a story. The character tries to fix it. Sometimes they fail at first. Then they try again. That is what makes a great story.` },
            { word: `solve`,
              definition: `To fix the problem. The character tries to SOLVE the conflict.`,
              audioPrompt: `To solve means to fix the problem. In a story, the character tries to solve the conflict. They may need a few tries before they find the answer.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Beginning, Middle, End`,
          paragraphs: [
            `Every story has three parts: BEGINNING, MIDDLE, and END.`,
            `The BEGINNING sets up the story. We meet the character and learn about the setting and problem. The MIDDLE is where the character tries to solve the problem. The END is where the problem gets fixed — and the character learns something.`,
          ],
          image: `/explorer-assets/ela/l14-s3-beginning.webp`,
          imageCaption: `Beginning — meet the character. Middle — try to fix the problem. End — solve it!`,
          vocab: [
            { word: `beginning`,
              definition: `The START of the story. We meet the character and learn the problem.`,
              audioPrompt: `The beginning is the start of the story. We meet the character and learn about the problem. It gets the reader interested in what happens next.` },
            { word: `middle`,
              definition: `The CENTER of the story. The character tries to fix the problem.`,
              audioPrompt: `The middle is the center of the story. The character tries to fix the problem. Sometimes they fail. Sometimes they get help. The middle is usually the longest part.` },
            { word: `end`,
              definition: `The FINISH of the story. The problem gets solved.`,
              audioPrompt: `The end is the finish of the story. The problem gets solved and the character often learns something. A good ending feels complete — not like it just stopped.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Show What Characters Feel`,
          paragraphs: [
            `Good writers SHOW what characters feel. They don't just TELL.`,
            `Instead of saying "she was scared," try "her hands shook and she held her breath." Instead of "he was happy," try "he jumped up and grinned so big his cheeks hurt." When you SHOW feelings, readers feel them too. That is what makes a story come alive.`,
          ],
          image: `/explorer-assets/ela/l14-s4-middle.webp`,
          imageCaption: `Show feelings through actions. "Her hands shook" is better than "she was scared."`,
          vocab: [
            { word: `show`,
              definition: `Describe feelings through actions — not just by naming them.`,
              audioPrompt: `Show means describe feelings through actions. Instead of "he was sad," write "he looked down and said nothing." Showing pulls readers right into the story.` },
            { word: `tell`,
              definition: `Just saying the feeling. "She was scared." Good writers SHOW instead of just telling.`,
              audioPrompt: `Tell means just saying the feeling directly — like "she was scared." It works, but showing is stronger. Try to show feelings through what characters do and say.` },
            { word: `feeling`,
              definition: `An emotion like happy, sad, or scared. Characters in stories have feelings.`,
              audioPrompt: `A feeling is an emotion — like happy, sad, scared, or excited. When you show a character's feelings clearly, readers connect with the story.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Linking Words: Put Events in Order`,
          paragraphs: [
            `Stories happen in ORDER. First one thing happens. Then another. Then another. Good writers use LINKING WORDS to show that order.`,
            `Here are the big STORY LINKING WORDS: FIRST… NEXT… THEN… AFTER THAT… FINALLY. "First, Mia looked under the bed. Next, she checked the closet. Finally, she found her shoes by the door." See how linking words make it easy to follow? Use them every time you write a story!`,
          ],
          image: `/explorer-assets/ela/l14-s5-ending.webp`,
          imageCaption: `Story linking words: First, Next, Then, After that, Finally. They show the ORDER of events.`,
          vocab: [
            { word: `first`,
              definition: `Happens at the very start. FIRST is a linking word that begins the events.`,
              audioPrompt: `First means at the very start. "First, the dog ran outside." First tells the reader this is where events begin. It is a story linking word.` },
            { word: `next`,
              definition: `Happens right after. NEXT connects one event to the one that follows.`,
              audioPrompt: `Next means right after the first thing. "Next, she called his name." Next connects one event to the one that follows and keeps the story moving.` },
            { word: `finally`,
              definition: `Happens at the very end. FINALLY shows the last event in the story.`,
              audioPrompt: `Finally means at the very end. "Finally, they found the puppy." Finally signals the last event. It is a great linking word for story endings.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Writing Voice`,
          paragraphs: [
            `Every writer has a VOICE. Your voice is the way YOUR writing sounds.`,
            `Maybe your writing is funny. Maybe it is quiet and thoughtful. Maybe you love describing things in detail. Whatever it is — it is YOURS. Don't try to sound like someone else. Just write the way you talk and think. The more you write, the more your own voice comes through.`,
          ],
          image: `/explorer-assets/ela/l14-s6-your-voice.webp`,
          imageCaption: `Your writing voice is yours alone. Write the way YOU think and see the world.`,
          vocab: [
            { word: `voice`,
              definition: `The way your writing sounds. Every writer's voice is different.`,
              audioPrompt: `Voice is the way your writing sounds — different from anyone else's. It comes from how you think and what you notice. The more you write, the stronger your voice gets.` },
            { word: `unique`,
              definition: `One of a kind. Your writing voice is UNIQUE — no one else has it.`,
              audioPrompt: `Unique means one of a kind. Your writing voice is unique. No one else writes exactly like you. That is what makes your stories worth reading.` },
            { word: `yourself`,
              definition: `Who you really are. Good writing means being YOURSELF on the page.`,
              audioPrompt: `Yourself means who you really are. Good writing comes from being yourself on the page. Don't pretend to be fancier. Just write honestly and your voice will shine.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's play! Look at each word. Is it a STORY LINKING WORD — or NOT? Drag it to the right bucket, {name}!`,
          buckets: [
            { id: `yes`, label: `✅ YES — Story Linking Word`, color: `#34D399` },
            { id: `no`,  label: `❌ NO — Not a Linking Word`,  color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`,
              label: `FIRST`,
              matchPhrase: `Yes! FIRST is a story linking word. It shows what happens at the very beginning of the events.`,
              correctMatch: `yes` },
            { id: `l14-g2`, image: `l14-game-2.webp`,
              label: `FINALLY`,
              matchPhrase: `Yes! FINALLY is a story linking word. It shows the very last thing that happens in a story.`,
              correctMatch: `yes` },
            { id: `l14-g3`, image: `l14-game-3.webp`,
              label: `PIZZA`,
              matchPhrase: `No! PIZZA is a food — not a linking word. Linking words like First and Next connect story events in order.`,
              correctMatch: `no` },
            { id: `l14-g4`, image: `l14-game-4.webp`,
              label: `AFTER THAT`,
              matchPhrase: `Yes! AFTER THAT is a linking word. It connects one event to the next one in a story.`,
              correctMatch: `yes` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Quiz time, {name}! Show me what you learned about story writing!`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is NARRATIVE WRITING?`,
              options: [`A list of facts`, `A story you make up`, `A math problem`, `A recipe`],
              correctIndex: 1,
              explanation: `Narrative writing is a story you make up. You choose the characters, the setting, and the problem.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What are the THREE parts of every story?`,
              options: [`Beginning, middle, end`, `Title, author, picture`, `Character, pencil, paper`, `Facts, opinions, ideas`],
              correctIndex: 0,
              explanation: `Every story has a beginning, middle, and end. The beginning sets up the story. The middle shows the character trying to solve the problem. The end wraps it up.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `Which is an example of SHOWING a feeling instead of just TELLING it?`,
              options: [`She was happy.`, `He jumped up and grinned so big his cheeks hurt.`, `The dog was tired.`, `It was a good day.`],
              correctIndex: 1,
              explanation: `"He jumped up and grinned so big his cheeks hurt" SHOWS happiness through actions. Showing pulls readers into the story.` },
            { id: `l14-q4`, format: `true-false`,
              question: `The words FIRST, NEXT, THEN, and FINALLY are called story LINKING WORDS.`,
              correctAnswer: true,
              explanation: `True! First, Next, Then, After that, and Finally are linking words. They show the order of events in a story.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `Every story needs a ___ — something that goes wrong for the character.`,
              options: [`problem`, `picture`, `title`, `color`],
              correctIndex: 0,
              explanation: `Every story needs a problem! The problem makes the story interesting. The character tries to fix it — and that is what keeps us reading.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What does a writing VOICE mean?`,
              options: [`How loud you read aloud`, `The way your writing sounds — unique to you`, `The font you use`, `How long your story is`],
              correctIndex: 1,
              explanation: `Your writing voice is the way your writing sounds — and it is unique to you. Don't try to sound like someone else. Sound like YOU.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `{name}, did you know that some of the world's most famous authors started writing stories when they were YOUR age? Roald Dahl wrote his first stories as a young child. Beverly Cleary made up stories in her head long before she learned to write. Every great author started somewhere — and that somewhere looks just like where you are right now. The story you write today is the first of many.`,
          familyAdventure: `Tell a STORY together tonight! One person says the first sentence. The next person adds a sentence. Go around until the story has a beginning, middle, and end. Try to use the linking words: First… Next… Then… Finally. Notice how every person's voice sounds a little different.`,
          creativePrompt: `**Tier 1 — Sentence Frames:** Fill in the blanks to write your story:\n"One day, ___ wanted to ___. First, ___. But then, ___. Next, ___. Finally, ___."\n\n**Tier 2 — Write Freely:** Write your own story (5–8 sentences). Plan first: Who is your character? What is the setting? What is the problem? Use the linking words First, Next, Then, and Finally to tell what happens in order.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You know what a narrative is. You know about characters, settings, and problems. You know about beginning, middle, and end. You know how to SHOW feelings instead of just telling them. And you know the linking words FIRST, NEXT, THEN, AFTER THAT, and FINALLY. You are a story writer now. I am so proud of you!`,
          badge: `narrative-explorer`,
          badgeName: `Narrative Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L14] Loaded: "Narrative Writing: Tell a Story" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
