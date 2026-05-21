// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L01 — Thinking Like a Scientist: Observe, Question, Investigate
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS Science and Engineering Practices (SEPs 1-3)
// REWRITE v2 (May 2026): Grade 1 accessible, OBSERVE / QUESTION / TEST 3-bucket
// identification game tests recognizing scientific actions by method step
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L01 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-01`,
      title:     `Thinking Like a Scientist: Observe, Question, Investigate`,
      duration:  12,
      xpReward:  50,
      badge:     `scientist-explorer`,
      badgeName: `Scientist Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hi {name}! I'm Cosmo. I'm an otter, and I LOVE science! Splashing around. Picking things up. Asking "what's this?" and "what happens if?" That's science! You don't need a fancy lab or a white coat. You just need CURIOSITY! Let's splash in!`,
          headline: `Thinking Like a Scientist: Observe, Question, Investigate`,
          subtitle: `What scientists actually do — and how YOU can do it too`,
          visual: `/explorer-assets/science/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Science?`,
          paragraphs: [
            `Lots of people think science is just chemicals and lab coats. Nope!`,
            `SCIENCE is a way of FIGURING THINGS OUT about the world! When you look at a leaf and wonder why it's green, that's science! When you mix two colors and watch what happens, that's science! When you ask "why is the sky blue?", that's science too! Science isn't a place. It's a way of THINKING. Anyone can do it. Including you, {name}!`,
          ],
          image: `/explorer-assets/science/l01-s1-what-is-science.webp`,
          imageCaption: `Science = a way of figuring things out. A way of thinking!`,
          vocab: [
            { word: `science`,    definition: `A way of figuring out how the world works.`,
              audioPrompt: `Science is a way of figuring out how the world works. By looking. By asking. By testing. Science isn't a place. It's a way of THINKING. Anyone can do it. Even you, {name}!` },
            { word: `figure out`, definition: `To work something out by thinking and trying.`,
              audioPrompt: `Figure out means to work something out by thinking and trying. Scientists figure things out. They don't already know — they FIND OUT. Every scientist starts with not knowing!` },
            { word: `curiosity`,  definition: `Wanting to know about things.`,
              audioPrompt: `Curiosity is wanting to know about things. It's the engine of science! Every great discovery started with someone being curious. You're already curious. That makes you part scientist!` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: OBSERVE`,
          paragraphs: [
            `The FIRST thing scientists do is OBSERVE! Look REALLY closely at something!`,
            `Use all FIVE of your senses! SIGHT — what do you see? Colors. Shapes. Sizes. SOUND — what do you hear? Buzzing. Quiet. TOUCH — what does it feel like? Soft. Rough. SMELL — what does it smell like? Fresh. Sweet. TASTE — what does it taste like? (Only if it's SAFE to eat!) Good observations are full of DETAILS!`,
          ],
          image: `/explorer-assets/science/l01-s2-observe.webp`,
          imageCaption: `Step 1: Observe! Use all five senses. Get detailed!`,
          vocab: [
            { word: `observe`, definition: `To look very carefully and notice details.`,
              audioPrompt: `Observe means to look very carefully and notice details. Not a quick glance. A careful look. The more carefully you observe, the more you discover. Most people glance. Scientists really LOOK!` },
            { word: `senses`,  definition: `Your five ways of taking in the world.`,
              audioPrompt: `Your senses are your 5 ways of taking in the world. Sight, with your eyes. Sound, with your ears. Touch, with your skin. Smell, with your nose. Taste, with your tongue!` },
            { word: `detail`,  definition: `A small piece of information.`,
              audioPrompt: `A detail is a small piece of information. Good observations are full of details. Not just "a flower" — "a small purple flower with five petals." Details make observations powerful!` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: ASK QUESTIONS`,
          paragraphs: [
            `Once you've observed, your brain starts WONDERING! That's exactly what scientists want!`,
            `Ask questions like WHY! HOW! WHAT IF! "Why is this leaf green and that one yellow?" "How does water turn into ice?" "What if I drop this in water?" Questions are SUPER important in science! They're the start of every discovery! Every breakthrough began with someone asking "I wonder why?" Don't be shy. Ask LOTS of questions!`,
          ],
          image: `/explorer-assets/science/l01-s3-wonder.webp`,
          imageCaption: `Step 2: Ask questions! Why? How? What if?`,
          vocab: [
            { word: `question`,     definition: `Something you want to know.`,
              audioPrompt: `A question is something you want to know. Questions are the start of science. Every scientific discovery began with someone asking a question. Without questions, no discoveries!` },
            { word: `wonder`,       definition: `To want to know about something.`,
              audioPrompt: `To wonder is to want to know about something. When you wonder, you're already being a scientist! Why is the moon different shapes? Why do leaves fall? Wondering is the first spark!` },
            { word: `why how what if`, definition: `The three most powerful science questions.`,
              audioPrompt: `Why, how, and what if are the 3 most powerful questions in science. WHY does this happen? HOW does it work? WHAT IF I change something? These questions unlock the world!` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PREDICT`,
          paragraphs: [
            `Before you test something, scientists make a PREDICTION — a smart guess about what will happen!`,
            `If you ask "will ice float in water?" — predict! "I think it WILL float because..." or "I think it WON'T float because..." Predictions don't have to be right! Even WRONG predictions teach you things! The point isn't being right. It's THINKING before you act. Predictions make experiments more fun too!`,
          ],
          image: `/explorer-assets/science/l01-s4-predict.webp`,
          imageCaption: `Step 3: Predict! A smart guess BEFORE you test.`,
          vocab: [
            { word: `predict`,       definition: `To make a smart guess about what will happen.`,
              audioPrompt: `To predict is to make a smart guess about what will happen. Scientists predict BEFORE they test. It pushes their brain to think. Even if the prediction is wrong, the thinking helps!` },
            { word: `guess`,         definition: `An idea you're not sure about.`,
              audioPrompt: `A guess is an idea you're not sure about. Predictions are educated guesses. Not random. Based on what you already know. "I think this will sink because it's heavy" — that's smart!` },
            { word: `wrong is okay`, definition: `Wrong predictions still teach you.`,
              audioPrompt: `Wrong is okay! Wrong predictions still teach you things. Maybe the most important things. When you predict wrong, you learn something new. Don't be afraid to be wrong!` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: TEST IT`,
          paragraphs: [
            `Now the FUN part — actually TEST your prediction! This is called an EXPERIMENT!`,
            `Drop the ice in the water. See what happens! Watch carefully! Did your prediction match what really happened? If YES, great! You learned something! If NO, even better! You learned something SURPRISING! Tests aren't about winning. They're about finding the TRUTH. Sometimes the truth surprises you. That's the best part of science!`,
          ],
          image: `/explorer-assets/science/l01-s5-test.webp`,
          imageCaption: `Step 4: Test it! Run the experiment. Watch carefully!`,
          vocab: [
            { word: `experiment`, definition: `A test you do to find out what really happens.`,
              audioPrompt: `An experiment is a test you do to find out what really happens. The fun part of science. You actually DO something. Drop the ice. Mix the colors. Plant the seed. Then watch!` },
            { word: `test`,       definition: `To check something by trying it.`,
              audioPrompt: `To test means to check something by trying it. Scientists test their predictions. Not just thinking about it — actually doing it. Tests turn guesses into knowledge!` },
            { word: `surprise`,   definition: `When something happens you didn't expect.`,
              audioPrompt: `A surprise is when something happens you didn't expect. Surprises are GREAT in science! They mean you discovered something. Welcome surprises. They mean you're learning!` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Step 5: SHARE`,
          paragraphs: [
            `The LAST step is to SHARE what you learned with others!`,
            `Tell someone! Draw a picture! Write it down! Make a little experiment book! Scientists share their work so OTHERS can learn too. They write papers. They give talks. They post videos. Your science doesn't have to stay in your head! When you share it, your discovery grows. Other people learn from you. Science is BETTER when shared!`,
          ],
          image: `/explorer-assets/science/l01-s6-share.webp`,
          imageCaption: `Step 5: Share what you learned!`,
          vocab: [
            { word: `share`,     definition: `To tell others what you learned.`,
              audioPrompt: `To share is to tell others what you learned. Scientists share their work. They write articles. They give talks. Sharing science is how new ideas spread. Don't keep your science secret!` },
            { word: `record`,    definition: `To write down or draw what you discovered.`,
              audioPrompt: `To record means to write down or draw what you discovered. Scientists record their work in journals. A drawing of what they saw. A sentence about what happened. Pick up a pencil!` },
            { word: `discovery`, definition: `Something new you learned.`,
              audioPrompt: `A discovery is something new you learned. Every experiment gives you a discovery — even if it's small. "Ice floats!" That's a discovery. Big and small. You make them all the time!` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things scientists do. Drag each one — is it an OBSERVE step (looking!), a QUESTION step (asking!), or a TEST step (trying!)?`,
          buckets: [
            { id: `observe`,  label: `👀 OBSERVE`,  color: `#34D399` },
            { id: `question`, label: `❓ QUESTION`, color: `#FBBF24` },
            { id: `test`,     label: `🧪 TEST`,     color: `#A78BFA` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Looking very carefully at the tiny veins on a leaf`,
              matchPhrase: `Yes! OBSERVE! Looking carefully at details. Notice colors, shapes, patterns. The first step of science!`,
              correctMatch: `observe` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Wondering "why is the sky blue?"`,
              matchPhrase: `Right! QUESTION! Wondering "why" is asking a question. The 2nd step. Every discovery started with a why!`,
              correctMatch: `question` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Dropping a rock and a feather to see which lands first`,
              matchPhrase: `Yes! TEST! Trying something to see what happens. The 4th step. That's an experiment!`,
              correctMatch: `test` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Watching how an ant carries a crumb back to its nest`,
              matchPhrase: `Right! OBSERVE! Watching carefully is observing. Noticing how things move and act. Pure science!`,
              correctMatch: `observe` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is SCIENCE?`,
              options: [`Only experiments in labs with chemicals`, `A way of figuring out how the world works by observing, asking, and testing`, `Just memorizing facts`, `A type of math`],
              correctIndex: 1,
              explanation: `Science is a way of figuring out the world. Observe, question, predict, test, share. It's a way of THINKING!` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What's the FIRST step in being a scientist?`,
              options: [`Wear a lab coat`, `OBSERVE — look very carefully using your senses`, `Memorize facts`, `Take a nap`],
              correctIndex: 1,
              explanation: `Observe first! Look carefully. Use all 5 senses if you can. Notice DETAILS!` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `How many SENSES do scientists use to observe?`,
              options: [`Just one — sight`, `Five — sight, sound, touch, smell, taste`, `A hundred`, `None`],
              correctIndex: 1,
              explanation: `Five! Each sense gives different information. The more senses, the more you discover!` },
            { id: `l01-q4`, format: `true-false`,
              question: `Asking lots of questions (why, how, what if) is a great way to start being a scientist.`,
              correctAnswer: true,
              explanation: `True! Questions are the start of every discovery. Why? How? What if? Use these all the time!` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `Making a smart guess BEFORE you test something is called a ___.`,
              options: [`prediction`, `sandwich`, `secret`, `surprise`],
              correctIndex: 0,
              explanation: `Prediction! A smart guess about what will happen. Even wrong predictions teach you things!` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why do scientists SHARE their discoveries?`,
              options: [`To show off`, `So others can learn too — and science keeps growing`, `Because it's the law`, `They don't share`],
              correctIndex: 1,
              explanation: `So others can learn! Scientists share so discoveries spread. Science is better when shared!` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientific thinking isn't just for scientists. Doctors use it to figure out what's wrong with patients! Chefs use it to perfect recipes! Mechanics use it to fix cars! Gardeners use it to grow plants! Detectives use it to solve crimes! Anyone who OBSERVES, ASKS, PREDICTS, TESTS, and SHARES is thinking like a scientist!`,
          familyAdventure: `Be a scientist for ONE HOUR! Pick something around your house — a leaf, a bug, a kitchen sink, a houseplant. As a family, OBSERVE it carefully (use 3+ senses)! Ask 3 QUESTIONS about it. Make 1 PREDICTION. If safe, do a small TEST. Then SHARE what you learned at dinner!`,
          creativePrompt: `Start a SCIENCE JOURNAL today! Get a small notebook. On the first page, write SCIENCE JOURNAL at the top. Pick ONE thing you want to investigate (anything!). Draw it. Write 3 questions about it. For a 3-sentence floor: write what you observed, one question, and one prediction. For a 5-sentence stretch: add what test you'd do and what you'd share!`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `YES, {name}! You're officially a SCIENTIST now! You know the 5 steps: OBSERVE, ASK QUESTIONS, PREDICT, TEST, SHARE! You know science isn't just labs. It's a way of THINKING. The whole world is your laboratory! Cosmo is so splashy-proud! 🦦`,
          badge: `scientist-explorer`,
          badgeName: `Scientist Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L01] Loaded: "Thinking Like a Scientist" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
