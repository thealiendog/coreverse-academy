// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L01 — Thinking Like a Scientist: Observe, Question, Investigate
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS Science and Engineering Practices (SEPs 1-3)
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
          guideText: `Hi, {name}! I'm Cosmo. I'm an otter, and I LOVE science. Splashing around, picking things up, asking 'what's this?' and 'what happens if?' That's science. You don't need a fancy lab or a white coat. You just need CURIOSITY. Today we'll learn what scientists actually DO — and you'll start doing it too. Ready to splash in? Let's go!`,
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
            `SCIENCE is a way of FIGURING THINGS OUT about the world. When you look at a leaf and wonder why it's green — that's science. When you mix two colors and watch what happens — that's science. When you ask "why is the sky blue?" — that's science. Science isn't a place or a thing. It's a way of THINKING. And anyone can do it. Including you.`,
          ],
          image: `/explorer-assets/science/l01-s1-what-is-science.webp`,
          imageCaption: `Science = a way of figuring things out. Not just labs and chemicals. A way of thinking.`,
          vocab: [
            { word: `science`,        definition: `A way of figuring out how the world works by observing, questioning, and testing.`,
              audioPrompt: `Science, {name}, is a way of figuring out how the world works. By looking. By asking. By testing. Science isn't a place. It's not just lab coats and bubbling beakers. It's a way of THINKING. Anyone — anywhere — can do science. Kids in backyards. Adults in kitchens. Astronauts in space. Wherever there's a curious mind, science is happening.` },
            { word: `figure out`,     definition: `To work something out by thinking and trying. Science is FIGURING OUT the world.`,
              audioPrompt: `Figure out, {name}, means to work something out by thinking and trying. That's exactly what scientists do. They figure things out. They don't already know — they FIND OUT. Step by step. By looking carefully. By asking questions. By testing ideas. Every scientist starts with NOT knowing — and then figures it out.` },
            { word: `curiosity`,      definition: `Wanting to know about things. CURIOSITY is the engine of science.`,
              audioPrompt: `Curiosity, {name}, is wanting to know about things. It's the engine of science. Every great discovery started with someone being CURIOUS. Why does ice float? Why do birds fly? What's inside an atom? Curiosity. That's all you need to start. The good news? You already have it. You're already curious. That makes you already part scientist.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: OBSERVE`,
          paragraphs: [
            `The FIRST thing scientists do is OBSERVE — look REALLY closely at something.`,
            `Use all FIVE of your senses. SIGHT — what do you see? Colors, shapes, sizes. SOUND — what do you hear? Buzzing, rustling, quiet. TOUCH — what does it feel like? Soft, rough, cold. SMELL — what does it smell like? Fresh, sweet, sharp. TASTE — what does it taste like? (Only if it's safe to eat!) Good observations are DETAILED. Not just "I see a leaf" but "I see a thin green leaf with tiny veins."`,
          ],
          image: `/explorer-assets/science/l01-s2-observe.webp`,
          imageCaption: `Step 1: Observe. Use all five senses. Sight, sound, touch, smell, taste. Get detailed.`,
          vocab: [
            { word: `observe`,        definition: `To look very carefully and notice details. The first step in science.`,
              audioPrompt: `Observe, {name}, means to look very carefully and notice details. Not a quick glance — a careful look. Scientists observe before they do anything else. They want to KNOW the thing they're studying. The more carefully you observe, the more you discover. Most people just glance. Scientists really LOOK.` },
            { word: `senses`,         definition: `Your five ways of taking in the world — sight, sound, touch, smell, taste.`,
              audioPrompt: `Your senses, {name}, are your five ways of taking in the world. Sight, with your eyes. Sound, with your ears. Touch, with your skin. Smell, with your nose. Taste, with your tongue. Scientists use ALL five when they can. Each sense gives them different information. Together, they tell the whole story.` },
            { word: `detail`,         definition: `A small piece of information. Good observations are full of DETAILS.`,
              audioPrompt: `A detail, {name}, is a small piece of information. Good observations are full of details. Not just 'a flower' — 'a small purple flower with five petals and a yellow center.' Details make observations powerful. The more details you notice, the more you understand.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: ASK QUESTIONS`,
          paragraphs: [
            `Once you've observed, your brain starts WONDERING. That's exactly what scientists want!`,
            `Ask questions like — WHY? HOW? WHAT IF? "Why is this leaf green and that one yellow?" "How does water turn into ice?" "What if I drop this in water?" Questions are SUPER important in science. They're the START of every discovery. Every scientific breakthrough began with someone asking "I wonder why...?" Don't be shy. Ask LOTS of questions. The more, the better.`,
          ],
          image: `/explorer-assets/science/l01-s3-wonder.webp`,
          imageCaption: `Step 2: Ask questions. Why? How? What if? Questions are the start of every discovery.`,
          vocab: [
            { word: `question`,       definition: `Something you want to know. Questions are the START of science.`,
              audioPrompt: `A question, {name}, is something you want to know. Questions are the start of science. Every scientific discovery began with someone asking a question. Why does this happen? How does this work? What if I try this? Without questions, no discoveries. Curious kids ask LOTS of questions. So do great scientists.` },
            { word: `wonder`,         definition: `To want to know about something. To WONDER is to start being a scientist.`,
              audioPrompt: `To wonder, {name}, is to want to know about something. When you wonder, you're already being a scientist. Why is the moon different shapes? Why do leaves fall? Why are some clouds white and some gray? Wondering is the first spark. From wonder comes questioning. From questioning comes investigating. From investigating comes knowing.` },
            { word: `why how what if`, definition: `The three most powerful questions in science. Use them OFTEN.`,
              audioPrompt: `Why, how, and what if, {name} — the three most powerful questions in science. WHY does this happen? HOW does it work? WHAT IF I change something? These questions unlock the world. Use them often. Out loud. Scientists ask these all day long. So can you.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: PREDICT`,
          paragraphs: [
            `Before you test something, scientists make a PREDICTION — a smart guess about what will happen.`,
            `If you ask "will ice float in water?" — predict! "I think it WILL float because..." or "I think it WON'T float because..." Predictions don't have to be right! Even wrong predictions teach you things. The point isn't being right — it's THINKING before you act. Predictions push your brain to use what you already know. They also make experiments more fun.`,
          ],
          image: `/explorer-assets/science/l01-s4-predict.webp`,
          imageCaption: `Step 3: Predict. A smart guess BEFORE you test. Wrong predictions still teach you things.`,
          vocab: [
            { word: `predict`,        definition: `To make a smart guess about what will happen, BEFORE testing.`,
              audioPrompt: `To predict, {name}, is to make a smart guess about what will happen. Scientists predict BEFORE they test. It pushes their brain to think. Even if the prediction is wrong, the thinking still helps. Predictions are how you turn your brain on before your hands start working.` },
            { word: `guess`,          definition: `An idea you're not sure about. Predictions are educated GUESSES.`,
              audioPrompt: `A guess, {name}, is an idea you're not sure about. Predictions are educated guesses. Not random — based on what you already know. 'I think this will sink because it's heavy.' That's an educated guess. It uses your brain. Random guesses don't help science. Smart predictions do.` },
            { word: `wrong is okay`,  definition: `Wrong predictions still teach you. Don't be afraid to be WRONG.`,
              audioPrompt: `Wrong is okay, {name}. Wrong predictions still teach you things. Maybe the most important things. When you predict wrong, you learn something you didn't know before. That's HUGE for a scientist. Don't be afraid to be wrong. Being wrong is part of how scientists discover what's actually true.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: TEST IT`,
          paragraphs: [
            `Now the FUN part — actually TEST your prediction. This is called an EXPERIMENT.`,
            `Drop the ice in the water. See what happens. Watch carefully. Did your prediction match what really happened? If yes — great! You learned something. If no — even better! You learned something SURPRISING. Tests aren't about winning. They're about finding out the TRUTH. Sometimes the truth surprises you. That's the best part of science.`,
          ],
          image: `/explorer-assets/science/l01-s5-test.webp`,
          imageCaption: `Step 4: Test it! Run the experiment. Watch carefully. Sometimes the truth surprises you.`,
          vocab: [
            { word: `experiment`,     definition: `A test you do to find out what really happens. The fun part of science.`,
              audioPrompt: `An experiment, {name}, is a test you do to find out what really happens. The fun part of science. You actually DO something. Drop the ice. Mix the colors. Plant the seed. Then watch carefully. Experiments are where science gets exciting. Where guesses meet reality.` },
            { word: `test`,           definition: `To check something by trying it. Scientists TEST their predictions.`,
              audioPrompt: `To test, {name}, means to check something by trying it. Scientists test their predictions to see if they're right. Not just thinking about it — actually doing it. Tests turn guesses into knowledge. Without tests, you're just making things up. With them, you find what's really true.` },
            { word: `surprise`,       definition: `When something happens you didn't expect. SURPRISES are GREAT in science.`,
              audioPrompt: `A surprise, {name}, is when something happens you didn't expect. Surprises are GREAT in science. They mean you discovered something. Your prediction was wrong, but you learned something new. Many of the biggest scientific discoveries were surprises. Things scientists didn't expect at all. Welcome surprises. They mean you're learning.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Step 5: SHARE`,
          paragraphs: [
            `The LAST step is to SHARE what you learned with others.`,
            `Tell someone. Draw a picture. Write it down. Make a little experiment book. Scientists share their work so OTHERS can learn too. They write papers, give talks, post videos. Your science doesn't have to stay in your head. When you share it, your discovery grows. Other people learn from you. They might even ask new questions you hadn't thought of. Science is BETTER when shared.`,
          ],
          image: `/explorer-assets/science/l01-s6-share.webp`,
          imageCaption: `Step 5: Share what you learned. Tell, draw, write. Science is better when shared.`,
          vocab: [
            { word: `share`,          definition: `To tell others what you learned. Scientists SHARE their work.`,
              audioPrompt: `To share, {name}, is to tell others what you learned. Scientists share their work. They write articles. They give talks. They make videos. They teach kids in classrooms. Sharing science is how new ideas spread. How discoveries get bigger. How the world keeps learning. Don't keep your science secret. Share it.` },
            { word: `record`,         definition: `To write down or draw what you discovered. RECORD your findings.`,
              audioPrompt: `To record, {name}, means to write down or draw what you discovered. Scientists record their work in journals and notes. A drawing of what they saw. A sentence about what happened. Recording helps you remember. It also helps others understand what you did. Pick up a pencil. Become a science recorder.` },
            { word: `discovery`,      definition: `Something new you learned. Your test results are DISCOVERIES.`,
              audioPrompt: `A discovery, {name}, is something new you learned. Every experiment gives you a discovery — even if it's small. 'Ice floats!' That's a discovery. 'This rock is harder than that rock.' That's a discovery. Every scientist makes discoveries. Big and small. You make them every time you observe, question, predict, and test.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Scientists ASK QUESTIONS — why, how, what if. Curiosity is the engine of science.`,
              matchPhrase: `Yes! Asking questions is how science starts. Every discovery began with someone wondering. Why? How? What if? These are the most powerful words in science.`,
              correctMatch: `fact` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Scientists use their FIVE SENSES — sight, sound, touch, smell, taste — to observe.`,
              matchPhrase: `True! All five senses help you observe carefully. The more senses you use, the more you notice. Good scientists use them all when they can.`,
              correctMatch: `fact` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Real scientists ALREADY KNOW everything — they never have questions or get surprised.`,
              matchPhrase: `Definitely not! Scientists don't know everything — they FIND OUT. Every great scientist starts with not knowing, asks questions, and gets surprised by their discoveries.`,
              correctMatch: `myth` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Science only counts if it happens in a lab with lab coats and fancy equipment.`,
              matchPhrase: `No way! Science happens EVERYWHERE. Backyards, kitchens, parks, bathrooms, classrooms. Anywhere a curious mind asks "why?" — that's science.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is SCIENCE?`,
              options: [`Only experiments in labs with chemicals`, `A way of figuring out how the world works by observing, asking, and testing`, `Just memorizing facts`, `A type of math`],
              correctIndex: 1,
              explanation: `Science is a way of figuring out the world. Observe, question, predict, test, share. It's a way of THINKING — not a place or thing. Anyone can do it.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `What's the FIRST step in being a scientist?`,
              options: [`Wear a lab coat`, `OBSERVE — look very carefully at something using your senses`, `Memorize facts`, `Take a nap`],
              correctIndex: 1,
              explanation: `Observe first. Look carefully. Use all five senses if you can. Notice DETAILS. Good observation is the start of every discovery.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `How many SENSES do scientists use to observe?`,
              options: [`Just one — sight`, `Five — sight, sound, touch, smell, taste`, `A hundred`, `None`],
              correctIndex: 1,
              explanation: `Five! Sight, sound, touch, smell, taste. Each sense gives different information. The more senses, the more you discover.` },
            { id: `l01-q4`, format: `true-false`,
              question: `Asking lots of questions (why, how, what if) is a great way to start being a scientist.`,
              correctAnswer: true,
              explanation: `True! Questions are the start of every discovery. Why? How? What if? Use these all the time. They unlock the world.` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `Making a smart guess BEFORE you test something is called a ___.`,
              options: [`prediction`, `sandwich`, `secret`, `surprise`],
              correctIndex: 0,
              explanation: `Prediction! A smart guess about what will happen. It pushes your brain to think before you test. Even wrong predictions teach you things.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Why do scientists SHARE their discoveries?`,
              options: [`To show off`, `So others can learn too — and science keeps growing`, `Because it's the law`, `They don't share`],
              correctIndex: 1,
              explanation: `So others can learn! Scientists share so discoveries spread. Other people learn. They might ask new questions. Science is better when shared.` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientific thinking isn't just for scientists. Doctors use it to figure out what's wrong with patients. Chefs use it to perfect recipes. Mechanics use it to fix cars. Gardeners use it to grow better plants. Detectives use it to solve crimes. Anyone who OBSERVES, ASKS QUESTIONS, PREDICTS, TESTS, and SHARES is thinking like a scientist. The skills you learn here work in every part of life.`,
          familyAdventure: `Be a scientist for ONE HOUR. Pick something around your house — a leaf, a bug, a kitchen sink, a houseplant. As a family, OBSERVE it carefully (use 3+ senses). Ask 3 QUESTIONS about it. Make 1 PREDICTION. If safe, do a small TEST. Then SHARE what you learned at dinner. You did real science!`,
          creativePrompt: `Start a SCIENCE JOURNAL today. Get a small notebook. On the first page, write SCIENCE JOURNAL at the top. Pick ONE thing you want to investigate — anything! Draw it. Write 3 questions about it. Add to your journal whenever you discover something new. Real scientists keep journals their whole lives.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `YES, {name}! You're officially a SCIENTIST now! You know the five steps — OBSERVE, ASK QUESTIONS, PREDICT, TEST, SHARE. You know science isn't just labs. It's a way of THINKING. You can do science anywhere, anytime, with anything. The whole world is your laboratory. I can't wait to splash around more discoveries with you. See you in the next lesson!`,
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
  const mags  = SCIENCE_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L01] Loaded: "Thinking Like a Scientist" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
