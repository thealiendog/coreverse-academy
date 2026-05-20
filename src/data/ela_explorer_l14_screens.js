// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L14 — Narrative Writing: Telling Your Story
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.3
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L14 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-14`,
      title:     `Narrative Writing: Telling Your Story`,
      duration:  12,
      xpReward:  50,
      badge:     `narrative-explorer`,
      badgeName: `Narrative Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Last lesson, you built your first paragraph. Now you're going to build something even cooler — a STORY. Story-writing is called NARRATIVE writing. Remember the four elements we learned about — character, setting, conflict, plot? You'll use ALL of them. The difference is — now YOU'RE the author. Let's get started.`,
          headline: `Narrative Writing: Telling Your Story`,
          subtitle: `How to write your own story using the four building blocks of every great tale`,
          visual: `/explorer-assets/ela/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You as Storyteller`,
          paragraphs: [
            `For thousands of years, humans have told stories. Around campfires. In caves. Through books. In movies.`,
            `Today, YOU join that long line of storytellers. Narrative writing is just a fancy way of saying STORY WRITING. You make up characters. You put them in a world. You give them a problem. You show what happens. The story is yours. The characters are yours. The voice is yours. That's a wonderful kind of power.`,
          ],
          image: `/explorer-assets/ela/l14-s1-storyteller.webp`,
          imageCaption: `You as storyteller. Thousands of years of humans telling stories. Now it's your turn.`,
          vocab: [
            { word: `narrative`,      definition: `A story. Narrative writing means STORY writing.`,
              audioPrompt: `Narrative, {name}, is a fancy word that just means STORY. Narrative writing is story writing. Whenever a teacher asks for a 'narrative,' they're asking for a story. You're the storyteller. You make up what happens. You choose the characters.` },
            { word: `storyteller`,    definition: `A person who tells stories. You are one now.`,
              audioPrompt: `A storyteller, {name}, is a person who tells stories. Humans have been storytellers since the very beginning. Around fires. In drawings on cave walls. In songs. In books. Now in movies and videos. You join this long, beautiful tradition every time you write a story. That's a real honor.` },
            { word: `imagination`,    definition: `The picture-maker inside your mind. Writers use imagination to build stories.`,
              audioPrompt: `Imagination, {name}, is the picture-maker inside your mind. Everyone has one. Writers use their imagination to BUILD stories. To see characters they invent. To explore places that don't exist. The good news? Imagination grows with practice. The more stories you imagine, the easier it gets to imagine new ones.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Use the Four Elements`,
          paragraphs: [
            `Remember the four story elements you learned about? CHARACTER, SETTING, CONFLICT, and PLOT. Time to USE them.`,
            `Before you write, plan: WHO is your story about? (character) WHERE and WHEN does it happen? (setting) WHAT'S the problem? (conflict) WHAT HAPPENS? (plot — beginning, middle, end). You can scribble these on paper before writing one full sentence. Planning makes writing easier. Even great authors plan before they write.`,
          ],
          image: `/explorer-assets/ela/l14-s2-four-pieces.webp`,
          imageCaption: `Use the four elements. Plan WHO, WHERE/WHEN, WHAT'S WRONG, WHAT HAPPENS. Then write.`,
          vocab: [
            { word: `plan`,           definition: `To think ahead before doing something. Writers PLAN their stories before writing.`,
              audioPrompt: `To plan, {name}, is to think ahead before doing something. Writers plan their stories before they start writing. They jot down characters, settings, problems, and what happens. Even just a few notes. Planning isn't cheating. It's smart. It makes the actual writing much easier.` },
            { word: `before`,         definition: `Coming first. Plan BEFORE you start writing.`,
              audioPrompt: `Before, {name}, means coming first. Plan before you start writing. That's the order: plan first, write second. Some kids think the best stories come from just jumping in. Sometimes that works. But usually, even a quick plan makes the story way better. The plan saves you from getting stuck.` },
            { word: `scribble`,       definition: `To write quickly and roughly. Scribble your plan — it doesn't need to be neat.`,
              audioPrompt: `To scribble, {name}, is to write quickly and roughly. When you plan, you can scribble. Your plan doesn't need to be neat. It doesn't need to be in full sentences. It just needs to capture your ideas.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `BEGINNING: Set the Stage`,
          paragraphs: [
            `Every story has a BEGINNING. Your first few sentences should do three things.`,
            `One — introduce your CHARACTER. Two — show the SETTING (where and when). Three — hint at the CONFLICT (the problem coming). Example: "Lily had just turned eight. It was a sunny afternoon at the lake. She was looking for her favorite ring — and she only had until sundown to find it." That's a beginning. Character, setting, problem — all set up. Now readers want to know what happens.`,
          ],
          image: `/explorer-assets/ela/l14-s3-beginning.webp`,
          imageCaption: `Beginning — introduce character, show setting, hint at the problem coming. Hook your reader.`,
          vocab: [
            { word: `beginning`,      definition: `The start of a story. Introduces character, setting, and hints at conflict.`,
              audioPrompt: `The beginning, {name}, is the start of a story. It has a big job. It introduces the character — who the story is about. It shows the setting — where and when. It hints at the conflict — what's the problem coming.` },
            { word: `hook`,           definition: `To grab someone's attention. Story beginnings should HOOK the reader.`,
              audioPrompt: `To hook, {name}, is to grab someone's attention. Like a fishing hook catches a fish. Story beginnings should hook the reader. Make them curious. Make them want to know what happens next. Boring beginnings lose readers. Interesting beginnings keep them turning pages. The hook matters a lot.` },
            { word: `introduce`,      definition: `To bring something into the story for the first time. Beginnings INTRODUCE the character.`,
              audioPrompt: `To introduce, {name}, means to bring something into the story for the first time. Beginnings introduce the character. The setting. The problem. Just enough information so readers can get oriented. Not everything — just the basics. Authors usually introduce things gently. Drop them in like seeds.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `MIDDLE: Show What Happens`,
          paragraphs: [
            `The MIDDLE is where the ACTION happens. Your character faces the problem and tries things.`,
            `Maybe they try one thing — it fails. They try another — it almost works. They meet someone who helps. They get scared. They keep going. The middle is where readers really get to know the character. Show what they DO. Show what they FEEL. Show what they LEARN. The middle is the heart of your story — usually the longest part.`,
          ],
          image: `/explorer-assets/ela/l14-s4-middle.webp`,
          imageCaption: `Middle — the action. Character faces the problem, tries things, feels things, grows.`,
          vocab: [
            { word: `middle`,         definition: `The center of a story. Where most of the action happens.`,
              audioPrompt: `The middle, {name}, is the center of a story. Where most of the action happens. The character faces the conflict. They try things. Some things work. Some don't. They feel emotions — fear, hope, determination. They might get help.` },
            { word: `action`,         definition: `Things happening. The middle is full of ACTION.`,
              audioPrompt: `Action, {name}, means things happening. The middle is full of action. The character isn't sitting still — they're DOING things. Searching. Trying. Running. Asking. Looking. Without action, a story stops moving. With action, it pulls the reader forward.` },
            { word: `tries`,          definition: `Attempts to do something. Characters often TRY many things in the middle.`,
              audioPrompt: `To try, {name}, is to attempt to do something. Characters in stories often try many things before they succeed. They try one solution. It fails. They try another. It fails too. Then they try a third — and that works.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `ENDING: Wrap It Up`,
          paragraphs: [
            `The ENDING resolves the problem and shows how the character CHANGED.`,
            `Maybe the problem gets solved. Maybe it doesn't — but the character grows anyway. Either way, the ending should feel SATISFYING. Like the story has come to a real end, not just stopped. Example: "Lily finally found her ring buried under the picnic blanket. She held it tight as the sun set. Next time, she'd remember to keep it on her finger." Story done. Character changed. Reader satisfied.`,
          ],
          image: `/explorer-assets/ela/l14-s5-ending.webp`,
          imageCaption: `Ending — problem resolved, character changed. Feels satisfying — like the story really ended.`,
          vocab: [
            { word: `ending`,         definition: `The finish of a story. Resolves the conflict and shows growth.`,
              audioPrompt: `The ending, {name}, is the finish of a story. It resolves the conflict — the problem gets solved, or sometimes is left unsolved on purpose. It shows growth — how the character changed. It satisfies the reader. A good ending doesn't just STOP. It actually ENDS. There's a difference.` },
            { word: `resolve`,        definition: `To find an answer or solution. Endings RESOLVE the conflict.`,
              audioPrompt: `To resolve, {name}, is to find an answer or solution. Endings resolve the conflict. The problem from the beginning gets addressed. Sometimes it's solved completely. Sometimes only partly.` },
            { word: `satisfying`,     definition: `Feeling complete and right. Good endings are SATISFYING.`,
              audioPrompt: `Satisfying, {name}, means feeling complete and right. Good endings are satisfying. The reader closes the book feeling good — even if the ending is sad. They feel like the story EARNED its ending. Bad endings feel rushed or random.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Writer's Voice`,
          paragraphs: [
            `Here's something special about writing — every writer has a unique VOICE.`,
            `Your voice is the way YOUR writing sounds — different from anyone else's. Maybe you're funny. Maybe you're thoughtful. Maybe you love describing food. Maybe you love mysterious settings. Your voice comes from being yourself on the page. Don't try to write like someone else. Write like YOU. Your voice is one of the most valuable things you have as a writer.`,
          ],
          image: `/explorer-assets/ela/l14-s6-your-voice.webp`,
          imageCaption: `Your writer's voice. Unique to you. Don't try to sound like someone else. Sound like YOU.`,
          vocab: [
            { word: `voice`,          definition: `The way your writing sounds. Every writer has a unique VOICE.`,
              audioPrompt: `Voice, {name} — in writing — is the way your writing sounds. Different from anyone else's. Your sense of humor. Your favorite words. Your way of describing things. Your perspective. All of these together make your voice. Writers develop voice over time. The more you write, the more YOU comes through.` },
            { word: `unique`,         definition: `One of a kind. Your voice is UNIQUE — no one else has it.`,
              audioPrompt: `Unique, {name}, means one of a kind. Your voice is unique. No one else writes the way you write. No one else sees the world quite like you. That's what makes your stories worth telling.` },
            { word: `yourself`,       definition: `Be who you are. Writing well means being YOURSELF on the page.`,
              audioPrompt: `Yourself, {name}, means be who you are. Writing well means being YOURSELF on the page. Not pretending to be smarter or fancier. Just real. Honest. You. When writers try too hard to sound like someone else, their writing feels fake.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about narrative writing, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `Good writers SHOW feelings through actions instead of just telling.`,
              matchPhrase: `Yes! "Show, don't tell." Instead of "she was scared," write "her hands trembled and she couldn't breathe." Showing pulls readers into the story.`,
              correctMatch: `fact` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `Sensory details — what was seen, heard, smelled, felt — bring stories alive.`,
              matchPhrase: `True! Sensory details put readers in the scene. The smell of pine, the sound of wind, the cold of snow. Details make scenes vivid.`,
              correctMatch: `fact` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `It's totally fine for a story to be flat and boring.`,
              matchPhrase: `Not really! Good narrative writing engages readers. Use action, sensory details, dialogue, emotions. Make it COME ALIVE on the page.`,
              correctMatch: `myth` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `A story can be just ONE sentence with no beginning, middle, or end.`,
              matchPhrase: `Definitely not! Real stories have a beginning (set up), middle (action), and end (resolution). One sentence isn't a story — it's a sentence.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is NARRATIVE WRITING?`,
              options: [`A fancy way to say STORY writing`, `A list of facts`, `A grocery list`, `A math problem`],
              correctIndex: 0,
              explanation: `Narrative writing is story writing. The fancy word just means STORY. Whenever a teacher asks for a narrative, they're asking for a story.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What four ELEMENTS should your story include?`,
              options: [`Title, author, pages, cover`, `Character, setting, conflict, plot`, `Pencils, paper, eraser, glue`, `Math, reading, art, science`],
              correctIndex: 1,
              explanation: `Character (who), setting (where/when), conflict (problem), plot (what happens). The four building blocks of every story.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What are the THREE main parts of a story plot?`,
              options: [`Beginning, middle, end`, `Title, paragraph, picture`, `Author, character, ending`, `Cover, pages, words`],
              correctIndex: 0,
              explanation: `Beginning (set up), middle (action), end (resolution). The shape of every story. Beginnings introduce. Middles complicate. Endings resolve.` },
            { id: `l14-q4`, format: `true-false`,
              question: `Good writers PLAN their stories before they start writing.`,
              correctAnswer: true,
              explanation: `True! Even great authors plan. Jot down characters, settings, problems, what happens. Planning makes writing easier. It saves you from getting stuck.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `Every writer has a unique ___ — the way their writing sounds.`,
              options: [`voice`, `pencil`, `chair`, `lunch`],
              correctIndex: 0,
              explanation: `Voice! Your writer's voice is unique to you. Don't try to sound like someone else. Sound like YOU. That's your superpower.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What does it mean to "SHOW, don't TELL" in writing?`,
              options: [`Use pictures only`, `Show characters' feelings through their actions instead of just stating them`, `Show off`, `Tell secrets`],
              correctIndex: 1,
              explanation: `Show characters' feelings through actions. Instead of "she was scared," write "her hands trembled." Showing pulls readers into the story.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The world's most famous storytellers all started where YOU are now — writing their first stories as kids. Roald Dahl wrote his first stories at age 7. J.K. Rowling started writing stories at age 6. Many adult authors keep their childhood stories forever — they're treasures. The story you write today might be the first of many. Or it might just be a fun afternoon. Either way, you're joining the long beautiful line of storytellers.`,
          familyAdventure: `Tell a STORY together at dinner. Each person adds ONE sentence to the story. First sentence introduces a character. Second sentence shows the setting. Third hints at a problem. Then continue — taking turns — through the middle and into the ending. Notice how the story grows. Notice how every person's "voice" sounds different.`,
          creativePrompt: `Write a short story (5-10 sentences). PLAN FIRST: Who's your character? Where and when? What's the problem? Then write it: Beginning (introduce). Middle (action). End (resolution). Read it aloud. Notice your VOICE in it. This is the first of many stories you'll write.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to write a STORY. You know the four elements. You know to plan first. You know about beginnings, middles, and endings. You know that your VOICE matters. You're joining the long line of storytellers — kids and adults — who have been writing stories since humans first invented words. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L14] Loaded: "Narrative Writing: Telling Your Story" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
