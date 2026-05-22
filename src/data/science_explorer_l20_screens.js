// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L20 — The Legacy of Science: What Have We Learned? (CAPSTONE)
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-12 cross-cutting concepts (patterns, systems, cause/effect)
// REWRITE v2 (May 2026): Grade 1 accessible CAPSTONE with elevated values
// (duration:15, xpReward:75, science-legacy-explorer badge). 3-bucket
// identification game OBSERVE / QUESTION / EXPERIMENT — callback to L01
// Thinking Like a Scientist, synthesizes whole subject. Cosmo 🦦 sign-off.
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L20 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-20`,
      title:     `The Legacy of Science: What Have We Learned?`,
      duration:  15,
      xpReward:  75,
      badge:     `science-legacy-explorer`,
      badgeName: `Science Legacy Explorer`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! THIS is our last lesson together! Look how far you've come! You started this journey not knowing what science was! Now you know about ATOMS, GALAXIES, life cycles, forces, light, sound, ecosystems, and SO MUCH MORE! Today, we celebrate ALL of it! We look at the long history of science! We look at what's still UNKNOWN! And we look at YOU — because YOU'RE part of this big story now! Let's go!`,
          headline: `The Legacy of Science: What Have We Learned?`,
          subtitle: `The big story of human discovery — and your place in it`,
          visual: `/explorer-assets/science/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Long, Long Journey`,
          paragraphs: [
            `Science isn't NEW, {name}! Humans have been curious since the very beginning!`,
            `Thousands of years ago, ancient people observed the stars and built temples that aligned with them! They figured out plants for medicine! They watched the seasons and learned when to plant crops! They asked: WHY does the sun rise? WHY do things fall? WHAT is life? Over thousands of years, generation after generation, humans built up KNOWLEDGE! They wrote it down! They taught it to their kids! The science you know today is the result of EVERYONE who came before you! Science is humanity's greatest team project!`,
          ],
          image: `/explorer-assets/science/l20-s1-long-journey.webp`,
          imageCaption: `Science is thousands of years of curious humans building knowledge together!`,
          vocab: [
            { word: `legacy`,     definition: `What people leave behind for the next generation.`,
              audioPrompt: `Legacy is what people leave behind for the next generation. Science is a legacy. Newton built on Galileo. Einstein built on Newton. You're inheriting this legacy. And someday, you can add to it too!` },
            { word: `knowledge`,  definition: `What we know.`,
              audioPrompt: `Knowledge is what we know. Knowledge builds up over generations. One scientist learns something. Writes it down. The next generation reads it and learns more. Over centuries, this builds to what we know today!` },
            { word: `generation`, definition: `One level of people in time.`,
              audioPrompt: `A generation is one level of people in time. Each generation adds to what we know about the world. Your grandparents grew up with different scientific understanding than you. Future kids will know more than you do!` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Some Great Scientists`,
          paragraphs: [
            `Throughout history, certain people made AMAZING discoveries that changed how we see the world!`,
            `GALILEO looked at the moon through the first telescope! NEWTON figured out how gravity works! MARIE CURIE discovered radiation and won two Nobel Prizes! EINSTEIN realized space and time are connected! KATHERINE JOHNSON's math sent astronauts to space! CHARLES DARWIN figured out how species change over time! JANE GOODALL studied chimpanzees and showed they think and feel! NEIL DEGRASSE TYSON shares the wonder of the universe today! These are just a few! THOUSANDS more contributed too! Scientists from EVERY country, EVERY background!`,
          ],
          image: `/explorer-assets/science/l20-s2-great-scientists.webp`,
          imageCaption: `Galileo, Newton, Curie, Einstein, Johnson, Darwin, Goodall, Tyson — and thousands more!`,
          vocab: [
            { word: `scientist`, definition: `A person who asks questions and finds answers.`,
              audioPrompt: `A scientist is a person who asks questions about how the world works and tries to find answers. Scientists come from every country, every background, every age. Anyone who observes carefully is doing science!` },
            { word: `discovery`, definition: `Finding something new.`,
              audioPrompt: `A discovery is finding something new. Scientists make discoveries. Sometimes huge ones — like Einstein realizing space and time are connected. Every discovery adds to what humanity knows. Worth celebrating!` },
            { word: `team`,      definition: `Many people working together.`,
              audioPrompt: `A team is many people working together. Science is humanity's biggest team project. Even when one scientist makes a famous discovery, they built on the work of thousands before them. Science is a TEAM SPORT!` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How We Know What We Know`,
          paragraphs: [
            `Why do we BELIEVE what science tells us? Because science has a SPECIAL METHOD!`,
            `Scientists OBSERVE carefully! They ASK questions! They MAKE GUESSES (hypotheses)! They TEST their guesses with experiments! They write down what happens! They share their work so OTHER scientists can check it! If something doesn't work consistently, scientists CHANGE what they think! This method has been refined over centuries! It's WAY more reliable than just guessing or believing something because someone said so! That's why science can predict eclipses, send rockets to other planets, and cure diseases! The METHOD works!`,
          ],
          image: `/explorer-assets/science/l20-s3-how-we-know.webp`,
          imageCaption: `Scientific method: observe → question → guess → test → check → adjust!`,
          vocab: [
            { word: `method`,     definition: `A specific way of doing something.`,
              audioPrompt: `A method is a specific way of doing something. Science has a special method for finding truth. Observe carefully. Ask questions. Make guesses. Test them. Check with others. The most reliable way to learn!` },
            { word: `hypothesis`, definition: `A smart guess scientists make before testing.`,
              audioPrompt: `A hypothesis is a smart guess scientists make before testing. Like I think this medicine will help cure colds. Then they test it. Without hypotheses, scientists wouldn't know what to test!` },
            { word: `reliable`,   definition: `You can trust it.`,
              audioPrompt: `Reliable means you can trust it. The scientific method is reliable. Different scientists in different countries using the method get similar results. Over time, the method moves us closer to truth!` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `So Much Is STILL UNKNOWN`,
          paragraphs: [
            `Here's the THRILLING part — for everything we've discovered, MUCH MORE is still UNKNOWN!`,
            `Scientists are working on amazing mysteries right now! WHAT is DARK MATTER? (Most of the universe is something we can't see — and we don't know what!) HOW does CONSCIOUSNESS work? (Why do we have thoughts and feelings?) ARE WE ALONE? (Is there life on other planets?) WHAT'S in the DEEPEST OCEANS? (We've explored less of the ocean than space!) Can we CURE all DISEASES? Science is FAR from done! Future scientists — kids being born today — will discover things WE can't even imagine yet!`,
          ],
          image: `/explorer-assets/science/l20-s4-mysteries-remain.webp`,
          imageCaption: `Many mysteries remain! Future to discover!`,
          vocab: [
            { word: `unknown`,           definition: `Things we don't know yet.`,
              audioPrompt: `Unknown means things we don't know yet. Science has many unknowns. We don't understand dark matter, consciousness, the deep oceans, alien life. The fact that so much is unknown isn't bad — it's exciting!` },
            { word: `mystery`,           definition: `Something not yet understood.`,
              audioPrompt: `A mystery is something strange that's not yet understood. Science is full of mysteries. What was the universe like before the Big Bang? How did life first start on Earth? Mysteries inspire scientists!` },
            { word: `future scientists`, definition: `Kids like you who will make discoveries.`,
              audioPrompt: `Future scientists are kids like you who will grow up to make discoveries we can't imagine yet. Every famous scientist was a kid once. They were curious. They asked questions. Maybe you'll be one someday!` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `You're a Scientist Too`,
          paragraphs: [
            `Here's the secret — YOU don't have to wait to be a scientist! YOU ARE ONE RIGHT NOW!`,
            `Every time you OBSERVE carefully — you're doing science! Every time you ASK QUESTIONS — science! Every time you TEST your guesses — science! The kid who watches an ant carry food back to its hole IS doing science! The kid who notices what makes plants grow IS doing science! The kid who wonders WHY the moon changes shape IS doing science! The only difference between you and a famous scientist is — they got to study for many years! But the CURIOSITY? Same as yours! You're a scientist already!`,
          ],
          image: `/explorer-assets/science/l20-s5-everyone-scientist.webp`,
          imageCaption: `YOU are a scientist! Already!`,
          vocab: [
            { word: `curiosity`, definition: `Wanting to know about things.`,
              audioPrompt: `Curiosity is wanting to know about things. It's the heart of being a scientist. Famous scientists were curious. You're curious. Without curiosity, science wouldn't exist. Keep being curious!` },
            { word: `practice`,  definition: `To do something regularly.`,
              audioPrompt: `To practice is to do something regularly. Practice science by observing and questioning every day. Notice the world. Ask why often. Try simple experiments. The more you practice, the better you become!` },
            { word: `you`,       definition: `Yes — even YOU can be a scientist.`,
              audioPrompt: `You. Yes — YOU. Even YOU can be a scientist. Right now. You don't need a degree. You don't need fancy equipment. You don't need to wait until you're an adult. Look around. Ask questions. Observe!` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Keep Exploring`,
          paragraphs: [
            `This is the END of OUR journey together! But your SCIENCE journey is just BEGINNING!`,
            `Keep ASKING QUESTIONS! Why does that happen? How does that work? What if I tried this? Keep OBSERVING! Notice the world around you with care! The leaf on the tree! The bug on the ground! The cloud in the sky! Keep WONDERING! Some of the biggest mysteries are right there, hidden in the everyday! Keep READING about science! Keep DOING experiments! Keep talking with people about big questions! The universe is BIG and AMAZING and full of mysteries! Some of those mysteries will be solved by YOU! Keep going!`,
          ],
          image: `/explorer-assets/science/l20-s6-keep-going.webp`,
          imageCaption: `Your science journey is just beginning!`,
          vocab: [
            { word: `keep going`, definition: `Don't stop.`,
              audioPrompt: `Keep going. Don't stop. Keep going with your curiosity for the rest of your life. Adults who stay curious have better lives. Don't stop being curious — even when you're 80 years old. Especially then!` },
            { word: `journey`,    definition: `A long trip.`,
              audioPrompt: `A journey is a long trip. Your science journey is just beginning. You learned 20 lessons here. But there are thousands MORE things to discover. A whole lifetime of exploring awaits you!` },
            { word: `wonder`,     definition: `To feel amazed and curious.`,
              audioPrompt: `To wonder is to feel amazed and curious. Wonder is the seed of all science. Every great discovery started with someone WONDERING. Why is the sky blue? Stay curious. Stay full of wonder!` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Last game, {name}! Remember L01 — we learned how scientists think? Here are 4 things scientists do. Drag each one — is it OBSERVE (look carefully!), QUESTION (ask why!), or EXPERIMENT (test ideas!)?`,
          buckets: [
            { id: `observe`,    label: `👀 OBSERVE`,    color: `#67E8F9` },
            { id: `question`,   label: `❓ QUESTION`,   color: `#FBBF24` },
            { id: `experiment`, label: `🧪 EXPERIMENT`, color: `#A78BFA` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `Watching ants for an hour to see how they carry crumbs back to their nest`,
              matchPhrase: `Yes! OBSERVE! Scientists watch carefully to see what really happens!`,
              correctMatch: `observe` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `Asking why some plants need lots of water and others very little`,
              matchPhrase: `Right! QUESTION! Scientists ask why — that's where every discovery starts!`,
              correctMatch: `question` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Putting 3 plants in 3 different soils to see which one grows tallest`,
              matchPhrase: `Yes! EXPERIMENT! Scientists test ideas with experiments to find out what's true!`,
              correctMatch: `experiment` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `Wondering how clouds can stay up in the sky if water is heavy`,
              matchPhrase: `Right! QUESTION! Great scientists ask questions about things others take for granted!`,
              correctMatch: `question` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final quiz, {name}! Let's see what you remember!`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Science is humanity's greatest ___ — generations of people building knowledge together.`,
              options: [`secret`, `team project`, `mistake`, `competition`],
              correctIndex: 1,
              explanation: `Team project! Science is built by generation after generation of curious people!` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is the SCIENTIFIC METHOD?`,
              options: [`Just guessing`, `Observe, question, hypothesize, test, check`, `Reading books only`, `Believing what others say`],
              correctIndex: 1,
              explanation: `The scientific method! Observe, ask questions, hypothesize, test, check. The most reliable way to find truth!` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `What is a HYPOTHESIS?`,
              options: [`A type of fish`, `A SMART GUESS scientists make BEFORE testing`, `An accident`, `A type of measurement`],
              correctIndex: 1,
              explanation: `A hypothesis is a smart guess scientists make before testing. Then they test it to find out!` },
            { id: `l20-q4`, format: `true-false`,
              question: `Many MYSTERIES still remain unsolved in science — dark matter, consciousness, life on other planets.`,
              correctAnswer: true,
              explanation: `True! Despite all our progress, much is still unknown. Future generations have plenty to discover!` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `___ is the heart of being a scientist — wanting to know about things.`,
              options: [`Curiosity`, `Money`, `Strength`, `Anger`],
              correctIndex: 0,
              explanation: `Curiosity! Wanting to know how things work. Without it, science wouldn't exist. With it, anyone can be a scientist!` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `What's the MOST IMPORTANT thing for being a scientist?`,
              options: [`Wearing a lab coat`, `Being CURIOUS, observing carefully, and asking questions`, `Being an adult`, `Going to a special school`],
              correctIndex: 1,
              explanation: `Be curious, observe, and ask questions. That's science. You don't need a lab coat to do it!` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}! Right NOW, while you're reading this, MILLIONS of scientists around the world are working on incredible things! Doctors are finding new treatments for diseases! Astronomers are looking deeper into space than ever! Engineers are building robots and renewable energy systems! Marine biologists are exploring the deep ocean! Brain researchers are unlocking how thoughts work! Climate scientists are figuring out how to protect Earth! Kids in classrooms — like you — are starting to be the NEXT generation of scientists! Every single one of them was once a curious kid who decided to keep asking questions!`,
          familyAdventure: `Have a SCIENCE CELEBRATION together! Get the whole family in one room! Take turns answering: 1) "ONE THING I LEARNED about science in this Coreverse journey!" 2) "ONE QUESTION I STILL HAVE about the world!" 3) "ONE thing I want to LEARN about next!" Share your answers! Celebrate the journey! Then make a plan to keep exploring together — visit a museum, go for a nature walk, do an experiment!`,
          creativePrompt: `Make a SCIENCE LEGACY PAGE! On paper, draw FOUR things: 1) Your favorite thing you LEARNED in this Coreverse journey! 2) A SCIENTIST who inspires you (or yourself!)! 3) Your favorite mystery (something you still wonder about)! 4) A picture of YOURSELF as a future scientist! For a 3-sentence floor: write a sentence about each of 3 of the four boxes. For a 5-sentence stretch: write about each of the 4 boxes, plus one final sentence about what kind of scientist you might be someday!`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}, you've DONE IT! You completed the entire SCIENCE EXPLORER journey! TWENTY lessons! TWENTY discoveries! From learning how scientists think, to exploring living things, to understanding Earth and space, to discovering matter and energy, to seeing how engineering and ecosystems work! You know more about how the universe works than 99% of humans who ever lived! You're part of the long, beautiful story of science! And here's the secret — your journey isn't ending! It's just beginning! Keep your curiosity! Keep asking questions! Keep wondering! The universe is yours to explore! Cosmo has LOVED being your guide! Now go make discoveries of your own! 🦦`,
          badge: `science-legacy-explorer`,
          badgeName: `Science Legacy Explorer`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default SCIENCE_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L20] CAPSTONE Loaded: "Legacy of Science" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
