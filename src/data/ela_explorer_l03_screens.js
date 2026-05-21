// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L03 — Making Inferences: Reading Between the Lines
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.RL.1-3.1
// REWRITE v2 (May 2026): Grade 1 accessible, TEXT CLUE/WHAT I KNOW/INFERENCE
// identification game teaches the inference formula structure
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
          guideText: `Welcome back, {name}! Today you learn something that feels like MAGIC! It's called MAKING INFERENCES. Sometimes people call it "reading between the lines." The text gives you clues. Your brain adds what you know. You figure out the hidden meaning! Let's try it!`,
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
            `Try this! A story says: "Maya walked in, threw down her backpack, and slammed her bedroom door."`,
            `The story doesn't say HOW Maya felt. But you probably already KNOW! You can tell she's upset or angry. How? You read BETWEEN the lines! The text gave you clues — like throwing and slamming — and you used what YOU know about feelings. That's an INFERENCE!`,
          ],
          image: `/explorer-assets/ela/l03-s1-between-lines.webp`,
          imageCaption: `Reading between the lines! The text shows. You figure out the meaning!`,
          vocab: [
            { word: `inference`,  definition: `A smart guess using clues from the text plus what you already know.`,
              audioPrompt: `An inference is a smart guess using clues from the text plus what you already know. Authors don't say everything. They leave things for you to figure out!` },
            { word: `between`,    definition: `In the space between two things.`,
              audioPrompt: `Between means in the space between two things. Reading "between the lines" means figuring out what's not said directly. The clues are there — you find the meaning!` },
            { word: `figure out`, definition: `To understand by thinking.`,
              audioPrompt: `To figure out means to understand by thinking. Inferring is figuring out what the text doesn't say directly. Clues are there. Your brain does the work!` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Be a Reading Detective!`,
          paragraphs: [
            `Detectives in books and movies are GREAT at inferences!`,
            `They notice clues. They put clues together. They figure out what happened — even when nobody tells them. Readers do the SAME thing! You notice clues in the text — what characters say, do, or see. You put them together. You make smart inferences. Every reader is a kind of detective!`,
          ],
          image: `/explorer-assets/ela/l03-s2-detective.webp`,
          imageCaption: `Detectives figure things out. Readers do too! Notice clues. Solve the meaning!`,
          vocab: [
            { word: `detective`, definition: `A person who solves mysteries by looking at clues.`,
              audioPrompt: `A detective is a person who solves mysteries by looking at clues. Famous detectives are great at noticing tiny details. Readers do the same with books!` },
            { word: `notice`,    definition: `To pay attention to something.`,
              audioPrompt: `To notice means to pay attention to something. Good readers notice small clues. A character's face. The weather. A small object. Practice noticing!` },
            { word: `solve`,     definition: `To figure out an answer.`,
              audioPrompt: `To solve means to figure out an answer. When you read, you solve little mysteries — why a character acted that way, what might happen next. Each inference solves one!` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Inference Formula`,
          paragraphs: [
            `Here's a simple way to think about it: TEXT CLUES + WHAT YOU KNOW = INFERENCE!`,
            `The text might say: "Daniel zipped his coat, pulled on his hat, and went out into the snow." TEXT CLUE = coat, hat, snow. WHAT YOU KNOW = these are cold-weather things. INFERENCE = it's WINTER and COLD outside! The author never said "it's winter." You figured it out!`,
          ],
          image: `/explorer-assets/ela/l03-s3-clues-plus-brain.webp`,
          imageCaption: `Text clues + what you know = inference. The author leaves clues. You bring the brain!`,
          vocab: [
            { word: `formula`,   definition: `A pattern that works every time.`,
              audioPrompt: `A formula is a pattern that works every time. The inference formula is: clues from the text PLUS what you already know EQUALS an inference. It really works!` },
            { word: `clue`,      definition: `A small piece of evidence.`,
              audioPrompt: `A clue is a small piece of evidence. Texts have clues ALL over them. What characters say. What they do. What things look like. Spot the clues!` },
            { word: `knowledge`, definition: `Things you already know.`,
              audioPrompt: `Knowledge means things you already know. You bring your knowledge to every book. You know snow is cold. You know slamming doors means anger. Use what you know!` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Smart Guess, Not Wild Guess`,
          paragraphs: [
            `Important! Inferences are SMART guesses — NOT wild guesses!`,
            `If a story says "Sam was eating cereal," a WILD guess would be: "Sam is a robot from space." A SMART inference would be: "Sam is probably having breakfast." See the difference? Smart inferences stay close to the clues. Wild guesses ignore the text!`,
          ],
          image: `/explorer-assets/ela/l03-s4-not-guessing.webp`,
          imageCaption: `Inferences = smart, close to clues. Wild guesses ignore the text!`,
          vocab: [
            { word: `smart`,    definition: `Thoughtful and careful.`,
              audioPrompt: `Smart means thoughtful and careful. Smart inferences stay close to the clues. They use real evidence. The opposite would be wild guesses that ignore the text!` },
            { word: `evidence`, definition: `Proof. Things that show something is true.`,
              audioPrompt: `Evidence is proof. Things that show something is true. Every good inference needs evidence from the text. You should be able to point to where you got it!` },
            { word: `invent`,   definition: `To make something up.`,
              audioPrompt: `To invent means to make something up. Inferring is NOT inventing. Inferring uses real clues. Inventing makes things up from nothing. Stay with the clues!` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Inferring Feelings`,
          paragraphs: [
            `One of the BEST uses of inferences is figuring out CHARACTER FEELINGS!`,
            `Authors RARELY say "the character was sad." Instead they SHOW it! "Her shoulders slumped. She didn't say goodbye." You read those clues. You think about how YOU'd feel with slumped shoulders. INFERENCE: she's sad. Stories work this way because feelings SHOWN are stronger than feelings TOLD!`,
          ],
          image: `/explorer-assets/ela/l03-s5-character-feelings.webp`,
          imageCaption: `Authors SHOW feelings — slumped shoulders, soft voice. You INFER the feeling!`,
          vocab: [
            { word: `character`, definition: `A person or animal in a story.`,
              audioPrompt: `A character is a person or animal in a story. Characters have feelings. Authors rarely say "this character is happy." Instead they SHOW it through actions!` },
            { word: `show`,      definition: `To demonstrate through actions instead of telling.`,
              audioPrompt: `To show means to demonstrate through actions. Authors show feelings instead of telling. "Show, don't tell" is a famous writing rule. It makes stories come alive!` },
            { word: `slump`,     definition: `When shoulders sink down — often shows sadness.`,
              audioPrompt: `To slump means when shoulders or body sink down. Slumped shoulders often show sadness or tiredness. Authors use these body clues all the time!` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Inferences Everywhere`,
          paragraphs: [
            `Once you start noticing, you'll see inferences EVERYWHERE!`,
            `In stories. In movies. In real life! When your brother slams a door, you INFER he's upset. When your friend smiles at lunch, you INFER they're happy. When you see dark clouds, you INFER rain is coming! Inferring is one of the most useful skills you'll ever learn!`,
          ],
          image: `/explorer-assets/ela/l03-s6-everywhere.webp`,
          imageCaption: `Inferences are everywhere. Books, movies, real life!`,
          vocab: [
            { word: `everywhere`, definition: `In every place.`,
              audioPrompt: `Everywhere means in every place. Inferences are everywhere! Books. Movies. School. Home. The world is full of clues we infer from every day!` },
            { word: `useful`,     definition: `Helpful. Makes life easier.`,
              audioPrompt: `Useful means helpful. Inferring is one of the most useful skills! It helps you understand books, people, and situations. Worth practicing!` },
            { word: `superpower`, definition: `An amazing ability.`,
              audioPrompt: `A superpower is an amazing ability. Inferring is a real-life superpower. People who infer well notice more and understand more. The way you build it? READ!` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here's a story: "Maya walked in, dripping wet, and shivered as she dropped her umbrella." Drag each piece into TEXT CLUE, WHAT I KNOW, or INFERENCE!`,
          buckets: [
            { id: `clue`,       label: `🔍 TEXT CLUE`,  color: `#FBBF24` },
            { id: `know`,       label: `🧠 WHAT I KNOW`, color: `#A78BFA` },
            { id: `inference`,  label: `💡 INFERENCE`,  color: `#34D399` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `Maya was dripping wet.`,
              matchPhrase: `Yes! That's a TEXT CLUE — something the story actually said!`,
              correctMatch: `clue` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `People get wet when it rains outside.`,
              matchPhrase: `Great! That's WHAT YOU KNOW — knowledge from your own life!`,
              correctMatch: `know` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `It probably rained outside.`,
              matchPhrase: `Perfect! That's the INFERENCE — the smart guess using the clue plus what you know!`,
              correctMatch: `inference` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `Maya shivered.`,
              matchPhrase: `Yes! Another TEXT CLUE — something the story showed us about Maya!`,
              correctMatch: `clue` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is an INFERENCE?`,
              options: [`A wild guess`, `A smart guess using clues plus what you already know`, `Magic mind reading`, `Copying sentences`],
              correctIndex: 1,
              explanation: `An inference is a smart guess using clues from the text plus what you already know!` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `A story says "Tina walked in the rain without an umbrella. Her hair was dripping wet." What can you INFER?`,
              options: [`Tina is a fish`, `Tina is dry`, `Tina got wet from the rain`, `Tina has no hair`],
              correctIndex: 2,
              explanation: `Tina got wet from the rain! The clues (walking in rain, dripping hair) plus what you know (rain makes you wet) = inference!` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What's the inference FORMULA?`,
              options: [`Close your eyes and guess`, `Text clues + what you already know = inference`, `Subtract pages`, `Multiply chapters`],
              correctIndex: 1,
              explanation: `Text clues + what you already know = inference! That's the magic formula!` },
            { id: `l03-q4`, format: `true-false`,
              question: `Authors usually SHOW feelings through actions instead of telling them.`,
              correctAnswer: true,
              explanation: `True! "Show, don't tell." Instead of "she was sad," authors write "she slumped her shoulders." You infer the feeling!` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `Readers are like ___ — they notice clues and figure out what's really happening.`,
              options: [`detectives`, `bakers`, `astronauts`, `swimmers`],
              correctIndex: 0,
              explanation: `Detectives! Readers notice clues and put them together — just like detectives solve mysteries!` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `When are inferences USEFUL?`,
              options: [`Only on Tuesdays`, `Only in hard books`, `Everywhere — in books, movies, conversations, and real life`, `Never`],
              correctIndex: 2,
              explanation: `Everywhere! Inferences help you understand books, movies, conversations, AND real life. A real-life superpower!` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's a fun fact, {name}! Scientists found that kids who read a LOT are better at understanding people in real life! They notice more emotions in faces. Why? Because every story is practice for inferring. Books literally make you better at understanding humans!`,
          familyAdventure: `Play the INFERENCE GAME! Someone acts out a scene — without saying what they're feeling. Maybe they walk in and look in an empty fridge. Other family members INFER what's happening! "You're hungry but there's no food!" Switch turns. Use clues!`,
          creativePrompt: `Write a SHORT story (just a few sentences) — but DON'T say how your character feels. SHOW it through actions! Example: "Mia stared at her empty plate. She pushed the carrots aside. She wouldn't look up." Let your reader INFER how Mia feels!`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know how to make INFERENCES! You can read between the lines. You know the formula: clues + what you know = inference! You're a reading detective now! The more you practice, the sharper you'll get — in books AND in life! Quill is so proud!`,
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
  console.log(`[LESSON-ELA-L03] Loaded: "Making Inferences" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
