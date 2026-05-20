// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L03 — Making Inferences: Reading Between the Lines
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.1-3.1
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L03 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-03`,
      title:     `Making Inferences: Reading Between the Lines`,
      duration:  12,
      xpReward:  50,
      badge:     `inference-explorer`,
      badgeName: `Inference Explorer`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we're learning something readers do that feels almost like MAGIC — figuring out things the book DOESN'T say outright. It's called MAKING INFERENCES. Sometimes people say "reading between the lines." The text gives you clues. Your brain adds what you already know. You figure out the hidden meaning. Let's try it.`,
          headline: `Making Inferences: Reading Between the Lines`,
          subtitle: `Figuring out what a text means even when it doesn't say it directly`,
          visual: `/explorer-assets/ela/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Reading Between the Lines`,
          paragraphs: [
            `Try this. A story says: "Maya walked in the door, threw down her backpack, and slammed her bedroom door."`,
            `The story doesn't say HOW Maya felt. But you probably already KNOW. You can tell she's upset, frustrated, or angry. How did you know? You read BETWEEN the lines. The text gave you clues — actions like throwing and slamming — and you used your own experience to figure out the feeling. That's an INFERENCE.`,
          ],
          image: `/explorer-assets/ela/l03-s1-between-lines.webp`,
          imageCaption: `Reading between the lines. The text shows. You figure out the meaning. That's inferring.`,
          vocab: [
            { word: `inference`,    definition: `A smart guess based on clues from the text plus what you already know.`,
              audioPrompt: `An inference, {name}, is a smart guess based on clues from the text plus what you already know. Authors don't say everything. They leave things for the reader to figure out.` },
            { word: `between`,      definition: `In the space between two things. Reading BETWEEN the lines means figuring out what's not said directly.`,
              audioPrompt: `Between means in the space between two things, {name}. Reading 'between the lines' is a beautiful old saying. It means figuring out what's not said directly. The text gives you what's on the page.` },
            { word: `figure out`,   definition: `To understand by thinking. Inferring is FIGURING OUT what the text doesn't say.`,
              audioPrompt: `To figure out means to understand by thinking, {name}. Inferring is figuring out what the text doesn't say. The clues are there. Your brain does the work. It's like solving a puzzle. Sometimes the answer is obvious.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Be a Reading Detective`,
          paragraphs: [
            `Detectives in books and movies are GREAT at inferences.`,
            `They notice clues. They put clues together. They figure out what happened — even when nobody tells them outright. Readers do the SAME thing. You notice clues in the text — what characters do, say, see, and think. You put it together. You make smart inferences about the story. Every reader is a kind of detective.`,
          ],
          image: `/explorer-assets/ela/l03-s2-detective.webp`,
          imageCaption: `Detectives figure things out. Readers do too. Notice clues. Put them together. Solve the meaning.`,
          vocab: [
            { word: `detective`,    definition: `A person who solves mysteries by looking at clues. Readers are like detectives.`,
              audioPrompt: `A detective is a person who solves mysteries by looking at clues, {name}. Famous detectives in stories — like Sherlock Holmes or Encyclopedia Brown — are great at noticing tiny details and putting them together. Readers do the same thing.` },
            { word: `notice`,       definition: `To pay attention to something. Good readers NOTICE small clues.`,
              audioPrompt: `To notice means to pay attention to something, {name}. Good readers NOTICE small clues that others might miss. A character's facial expression. The weather in a scene. A small object mentioned in passing.` },
            { word: `solve`,        definition: `To figure out the answer to a mystery or puzzle. Readers SOLVE the meaning of texts.`,
              audioPrompt: `To solve means to figure out the answer to a mystery or puzzle, {name}. When you read, you're constantly solving little mysteries. Why did this character act that way? What's about to happen? What does this scene really mean?` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Inference Formula`,
          paragraphs: [
            `Here's a simple way to think about it: TEXT CLUES + WHAT YOU KNOW = INFERENCE.`,
            `The text might say: "Daniel zipped up his coat, pulled on his hat, and stomped out into the snow." Text clue = coat, hat, snow. What you know = these are cold-weather things. Inference = it's WINTER and probably COLD outside. The author never said "it's winter" — but you figured it out using clues plus your knowledge.`,
          ],
          image: `/explorer-assets/ela/l03-s3-clues-plus-brain.webp`,
          imageCaption: `Text clues + what you know = inference. The author leaves clues. You bring the brain.`,
          vocab: [
            { word: `formula`,      definition: `A pattern or recipe. The inference formula = clues + knowledge.`,
              audioPrompt: `A formula is a pattern or recipe, {name}. The inference formula is: clues from the text PLUS what you already know EQUALS an inference. It's a real thinking pattern. The more you practice it, the more natural it becomes. Soon you'll be making inferences without even realizing you're doing it.` },
            { word: `clue`,         definition: `A small piece of evidence. Texts have clues all over them.`,
              audioPrompt: `A clue is a small piece of evidence, {name}. Texts have clues ALL over them. What characters say. What they do. What the setting looks like. What time of day it is. Each clue is a little hint from the author. Good readers spot the clues. Then they use them.` },
            { word: `knowledge`,    definition: `Things you already know. Your KNOWLEDGE helps you understand texts.`,
              audioPrompt: `Knowledge means things you already know, {name}. You bring your own knowledge to every book you read. You know that snow is cold. You know that people sleep at night. You know that a clenched fist often means anger.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Inferences Aren't Wild Guesses`,
          paragraphs: [
            `Here's something important — inferences are SMART guesses, NOT wild guesses.`,
            `If a story says "Sam was eating cereal," a wild guess would be "Sam is a robot from space." A SMART inference would be "Sam is probably having breakfast." See the difference? Inferences stay close to the clues. They use what's actually in the text. Wild guesses ignore the text and just make stuff up. Smart readers infer. They don't invent.`,
          ],
          image: `/explorer-assets/ela/l03-s4-not-guessing.webp`,
          imageCaption: `Inferences = smart, close to clues. Wild guesses = ignore the text. Be a careful inferrer.`,
          vocab: [
            { word: `smart`,        definition: `Thoughtful, careful, based on real evidence. Smart inferences stay close to the clues.`,
              audioPrompt: `Smart means thoughtful and careful, {name}. Smart inferences stay close to the clues in the text. They use real evidence. They make sense. The opposite would be silly or wild guesses — ones that ignore the text and just make stuff up. Always make SMART inferences. Stick with the clues.` },
            { word: `evidence`,     definition: `Proof. Facts. Things that show something is true. Inferences need evidence.`,
              audioPrompt: `Evidence is proof, {name}. Facts. Things that show something is true. Every inference needs evidence from the text. If someone asks 'how do you know? ' a good reader can point to specific words or sentences as evidence.` },
            { word: `invent`,       definition: `To make something up. Inferring is NOT inventing — it's using real clues.`,
              audioPrompt: `To invent means to make something up, {name}. Inferring is NOT inventing. Inventing means creating something from nothing. Inferring means using real clues to figure out something the author didn't directly say. Inferences stay grounded in the text. Inventions just float away on their own.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Inferring Feelings`,
          paragraphs: [
            `One of the best uses of inferences is figuring out CHARACTER FEELINGS.`,
            `Authors RARELY say "the character was sad." Instead they show it. "Her shoulders slumped. She didn't say goodbye." You read those clues. You think about how you'd feel if your shoulders slumped. INFERENCE: she's sad. Stories work this way because feelings shown are stronger than feelings told. Smart readers feel along with characters.`,
          ],
          image: `/explorer-assets/ela/l03-s5-character-feelings.webp`,
          imageCaption: `Authors SHOW feelings — slumped shoulders, soft voice. Readers INFER the feelings from the clues.`,
          vocab: [
            { word: `character`,    definition: `A person, animal, or being in a story. Characters have feelings that readers infer.`,
              audioPrompt: `A character is a person, animal, or being in a story, {name}. Characters have feelings, thoughts, and reasons for what they do. Authors RARELY say 'this character is happy' or 'this character is scared.` },
            { word: `show`,         definition: `To demonstrate through action or detail. Good writing SHOWS feelings instead of telling them.`,
              audioPrompt: `To show means to demonstrate through action or detail, {name}. There's an old writing rule: 'Show, don't tell. ' Instead of TELLING the reader 'Joe was scared,' the author SHOWS Joe's hands shaking, his eyes wide, his voice cracking.` },
            { word: `slump`,        definition: `When shoulders or body sink down. Slumped shoulders often show sadness or tiredness.`,
              audioPrompt: `To slump means when shoulders or body sink down, {name}. Slumped shoulders are a body language clue. When someone is sad, tired, or defeated, their shoulders often slump. Authors use these clues constantly.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Inferences Everywhere`,
          paragraphs: [
            `Once you start noticing inferences, you'll see them EVERYWHERE.`,
            `In stories. In movies. In real life. When your sibling slams a door, you INFER they're upset. When your friend smiles at lunch, you INFER they're happy. When you see dark clouds, you INFER rain is coming. Inferring is one of the most useful skills you'll ever learn. Reading makes you better at it. Being good at inferring helps you understand BOOKS — and people.`,
          ],
          image: `/explorer-assets/ela/l03-s6-everywhere.webp`,
          imageCaption: `Inferences are everywhere. Books, movies, real life. The more you read, the better you get.`,
          vocab: [
            { word: `everywhere`,   definition: `In every place. Inferences are EVERYWHERE in life, not just in books.`,
              audioPrompt: `Everywhere means in every place, {name}. Inferences are EVERYWHERE. Books. Movies. School. Home. Conversations. The world is full of clues, and we're constantly making inferences without even realizing it. Reading just makes the skill stronger. It's a superpower that helps in every part of life.` },
            { word: `useful`,       definition: `Helpful. Makes life easier. Inferring is one of the most USEFUL skills.`,
              audioPrompt: `Useful means helpful, {name}. Makes life easier. Inferring is one of the most useful skills you'll ever build. It helps you understand books deeply. It helps you understand people. It helps you understand situations. Useful skills are worth practicing. This is one of them.` },
            { word: `superpower`,   definition: `An amazing ability. Inferring is a kind of superpower for understanding the world.`,
              audioPrompt: `A superpower is an amazing ability, {name}. Inferring is a kind of real-life superpower. People who can infer well notice more, understand more, and connect more dots than people who can't. The good news? Everyone can build this superpower.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `Inferences = text clues + what you already know.`,
              matchPhrase: `Yes! That's the inference formula. The author gives you clues in the text. You bring what you already know. Together you figure out things the text doesn't say directly.`,
              correctMatch: `fact` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `Authors leave clues for readers throughout their books.`,
              matchPhrase: `True! Authors scatter clues all over their texts. Actions, descriptions, settings, dialogue. Smart readers notice these clues and use them to infer hidden meanings.`,
              correctMatch: `fact` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `Inferences are when you read characters' minds with magic powers.`,
              matchPhrase: `Not quite! Inferences aren't mind reading. They're SMART thinking based on clues the author gives you. No magic needed — just attention and your brain.`,
              correctMatch: `myth` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `Inferences are just wild guesses you make up without any clues.`,
              matchPhrase: `Not at all! Inferences are the OPPOSITE of wild guesses. They use real text clues plus your real knowledge. They stay grounded. Wild guessing just ignores the text.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is an INFERENCE?`,
              options: [`A wild guess about anything`, `A smart guess using clues from the text plus what you already know`, `Reading minds with magic powers`, `Copying sentences from a book`],
              correctIndex: 1,
              explanation: `An inference is a smart guess using clues from the text plus what you already know. The author leaves clues. You bring your brain. Together, you figure out what the text means.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `A story says "Tina walked in the rain without an umbrella. Her hair was dripping wet." What can you INFER?`,
              options: [`Tina is a fish`, `Tina is very dry`, `Tina probably got wet from the rain`, `Tina has no hair`],
              correctIndex: 2,
              explanation: `Tina probably got wet from the rain! The text doesn't say it directly — but the clues (walking in rain, no umbrella, wet hair) make it clear. That's an inference.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What's the inference FORMULA?`,
              options: [`Just close your eyes and guess`, `Text clues + what you already know = inference`, `Subtract pages from words`, `Multiply chapters by characters`],
              correctIndex: 1,
              explanation: `Text clues + what you already know = inference. Authors give you clues. You bring your knowledge. Together you figure out hidden meaning.` },
            { id: `l03-q4`, format: `true-false`,
              question: `Authors usually SHOW feelings through actions and details rather than TELLING you outright.`,
              correctAnswer: true,
              explanation: `True! Good authors SHOW, they don't tell. Instead of saying "she was sad," they show slumped shoulders, a quiet voice, a turned-away gaze. Readers infer the feeling. That's what makes stories come alive.` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `Readers are like ___ — they notice clues and figure out what's really happening.`,
              options: [`detectives`, `bakers`, `astronauts`, `swimmers`],
              correctIndex: 0,
              explanation: `Detectives! Readers notice clues in the text, put them together, and figure out what's REALLY going on. Every reader is a kind of detective.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `When are inferences USEFUL?`,
              options: [`Only on Tuesdays`, `Only when reading hard books`, `Everywhere — in books, movies, conversations, and real life`, `Never`],
              correctIndex: 2,
              explanation: `Everywhere! Inferences help you understand books, movies, conversations, AND real life. When a friend slams a door, you infer they're upset. When clouds darken, you infer rain. Inferring is a real-life superpower.` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's a fun fact, {name}. Scientists have studied inference and discovered something amazing — kids who read a lot are BETTER at understanding people in real life. They notice more emotions in faces. They guess more accurately what someone is feeling. Why? Because every story is practice for inferring. Books literally make you better at understanding humans. That's a superpower worth building.`,
          familyAdventure: `Play the INFERENCE GAME. Someone in your family acts out a scene — without saying what they're feeling. They might pretend to walk into a kitchen and look in an empty fridge. Other family members INFER what's happening. "You're hungry but there's no food!" Then switch roles. Notice the clues. Notice what makes the inferences work. Have fun figuring each other out.`,
          creativePrompt: `Write a SHORT story (just a few sentences) — but DON'T directly say how your character feels. Instead, SHOW it through their actions. For example: "Mia stared at her empty plate. She pushed the carrots to the side. She wouldn't look up." Let your reader INFER how Mia feels. Try drawing a picture too.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}! You now know how to make INFERENCES — to read between the lines, to use clues plus your knowledge, to figure out what authors don't say directly. You're a reading detective now. The more you practice, the sharper you'll get — in books AND in life. I'm proud of you. Thank you for journeying with me.`,
          badge: `inference-explorer`,
          badgeName: `Inference Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L03] Loaded: "Making Inferences: Reading Between the Lines" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
