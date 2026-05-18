// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L20 — The Legacy of Science: What Have We Learned? (CAPSTONE)
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-12 cross-cutting concepts (patterns, systems, cause/effect)
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
          guideText: `Hey {name}, Cosmo here. THIS is our last lesson together. Look how far you've come. You started this journey not knowing what science was. Now you know about ATOMS, GALAXIES, life cycles, forces, light, sound, ecosystems, and SO MUCH MORE. Today, we celebrate ALL of it. We look at the long history of science. We look at what's still UNKNOWN. And we look at YOU — because YOU'RE part of this big story now. Let's go!`,
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
            `Science isn't NEW. Humans have been curious since the very beginning.`,
            `Thousands of years ago, ancient people observed the stars and built temples that aligned with them. They figured out plants for medicine. They watched the seasons and learned when to plant crops. They asked: WHY does the sun rise? WHY do things fall? WHAT is life? Over thousands of years, generation after generation, humans built up KNOWLEDGE. They wrote it down. They taught it to their kids. They tested old ideas. They added new ones. The science you know today is the result of EVERYONE who came before you — adding their piece. Science is humanity's greatest team project.`,
          ],
          image: `/explorer-assets/science/l20-s1-long-journey.webp`,
          imageCaption: `Science is thousands of years of curious humans, generation after generation, building knowledge together.`,
          vocab: [
            { word: `legacy`,         definition: `What people leave behind for the next generation. Science is a LEGACY built over time.`,
              audioPrompt: `Legacy, {name}, is what people leave behind for the next generation. Science is a legacy. Every scientist's work becomes part of what others can build on. Newton built on Galileo. Einstein built on Newton. Today's scientists build on Einstein. You're inheriting this legacy. Now you have it. And someday, you can add to it too.` },
            { word: `knowledge`,      definition: `What we KNOW. Knowledge builds up over generations — passed down and added to.`,
              audioPrompt: `Knowledge, {name}, is what we know. Knowledge builds up over generations. One scientist learns something. Writes it down. The next generation reads it and learns more. They write that down. Over centuries, this builds up to what we know today. Everything in your science textbooks is the result of MANY generations of work.` },
            { word: `generation`,     definition: `One LEVEL of people in time. Each GENERATION adds to what we know.`,
              audioPrompt: `A generation, {name}, is one level of people in time. Each generation adds to what we know about the world. Your grandparents grew up with different scientific understanding than you. Your great-grandparents knew less. Your great-great-grandparents even less. With each generation, knowledge grows. Future kids will know more than you do. That's how science works.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Some Great Scientists`,
          paragraphs: [
            `Throughout history, certain people made AMAZING discoveries that changed how we see the world.`,
            `GALILEO looked at the moon through the first telescope. NEWTON figured out how gravity works. MARIE CURIE discovered radiation and won two Nobel Prizes. EINSTEIN realized space and time are connected. KATHERINE JOHNSON's math sent astronauts to space. CHARLES DARWIN figured out how species change over time. JANE GOODALL studied chimpanzees deeply and showed they think and feel. NEIL DEGRASSE TYSON shares the wonder of the universe today. These are just a few. THOUSANDS more contributed too. Scientists from EVERY country, EVERY background, asking questions and making discoveries.`,
          ],
          image: `/explorer-assets/science/l20-s2-great-scientists.webp`,
          imageCaption: `Galileo, Newton, Curie, Einstein, Johnson, Darwin, Goodall, Tyson — and thousands more. The team of science.`,
          vocab: [
            { word: `scientist`,      definition: `A person who asks questions about how the world works and tries to find answers.`,
              audioPrompt: `A scientist, {name}, is a person who asks questions about how the world works and tries to find answers. Scientists come from every country, every background, every age. They study different things — stars, animals, atoms, brains, climate, oceans. What makes someone a scientist isn't their job title — it's their curiosity and methods. Anyone who observes carefully and asks honest questions is doing science.` },
            { word: `discovery`,      definition: `Finding something NEW. Scientists make DISCOVERIES that add to human knowledge.`,
              audioPrompt: `A discovery, {name}, is finding something new. Scientists make discoveries. Sometimes huge ones — like Einstein realizing space and time are connected. Sometimes small ones — like noticing a new bug species. Every discovery, big or small, adds to what humanity knows. Discoveries take patience, hard work, and sometimes luck. They're worth celebrating.` },
            { word: `team`,           definition: `Many people WORKING TOGETHER. Science is humanity's biggest TEAM PROJECT.`,
              audioPrompt: `A team, {name}, is many people working together. Science is humanity's biggest team project. Even when one scientist makes a famous discovery, they built on the work of thousands before them. They share their findings so others can learn. They train new scientists. They cooperate across countries and centuries. Science is a TEAM SPORT — across all of time.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How We Know What We Know`,
          paragraphs: [
            `Why do we BELIEVE what science tells us? Because science has a SPECIAL METHOD.`,
            `Scientists OBSERVE carefully. They ASK questions. They MAKE GUESSES (hypotheses). They TEST their guesses with experiments. They write down what happens. They share their work so OTHER scientists can check it. If something doesn't work consistently, scientists CHANGE what they think. This method has been refined over centuries. It's WAY more reliable than just guessing or believing something because someone said so. That's why science can predict eclipses, send rockets to other planets, and cure diseases. The METHOD works.`,
          ],
          image: `/explorer-assets/science/l20-s3-how-we-know.webp`,
          imageCaption: `Scientific method: observe → question → guess → test → check → adjust. Why science is so reliable.`,
          vocab: [
            { word: `method`,         definition: `A specific WAY of doing something. Science has a special METHOD for finding truth.`,
              audioPrompt: `A method, {name}, is a specific way of doing something. Science has a special method for finding truth. Observe carefully. Ask questions. Make guesses. Test them. Check with other scientists. Adjust if needed. This method has been refined over thousands of years. It's the most reliable way humans have found to learn about reality.` },
            { word: `hypothesis`,     definition: `A SMART GUESS scientists make BEFORE testing. A HYPOTHESIS is meant to be tested.`,
              audioPrompt: `A hypothesis, {name}, is a smart guess scientists make before testing. Like 'I think this medicine will help cure colds.' Then they test it carefully. The hypothesis might be RIGHT, or WRONG, or PARTLY RIGHT. Either way, the test teaches us something. Without hypotheses, scientists wouldn't know what to test. Without testing, we wouldn't know what's true.` },
            { word: `reliable`,       definition: `You can TRUST it. The scientific method is RELIABLE — it works again and again.`,
              audioPrompt: `Reliable, {name}, means you can trust it. The scientific method is reliable. It works again and again. Different scientists in different countries using the method get similar results. This is why we trust science. It's not perfect — sometimes scientists are wrong, and corrections happen. But over time, the method moves us closer and closer to truth.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `So Much Is STILL UNKNOWN`,
          paragraphs: [
            `Here's the THRILLING part — for everything we've discovered, MUCH MORE is still UNKNOWN.`,
            `Scientists are working on amazing mysteries right now. WHAT is DARK MATTER? (Most of the universe is something we can't see — and we don't know what.) HOW does CONSCIOUSNESS work? (Why do we have thoughts and feelings?) ARE WE ALONE? (Is there life on other planets?) WHAT'S in the DEEPEST OCEANS? (We've explored less of the ocean than space!) Can we CURE all DISEASES? CAN WE SAVE ENDANGERED ANIMALS? Science is FAR from done. Future scientists — kids being born today — will discover things WE can't even imagine yet. The future of science is wide open.`,
          ],
          image: `/explorer-assets/science/l20-s4-mysteries-remain.webp`,
          imageCaption: `Many mysteries remain. Dark matter, consciousness, life on other planets, deep oceans. Future to discover.`,
          vocab: [
            { word: `unknown`,        definition: `Things we DON'T know yet. Science has MANY UNKNOWNS still to discover.`,
              audioPrompt: `Unknown, {name}, means things we don't know yet. Science has many unknowns. Despite all our progress, much of the universe remains mysterious. We don't understand dark matter, consciousness, the deep oceans, alien life, and much more. The fact that so much is unknown isn't bad — it's exciting. It means future generations have plenty of discovering to do.` },
            { word: `mystery`,        definition: `Something STRANGE that's not yet understood. Science is full of MYSTERIES.`,
              audioPrompt: `A mystery, {name}, is something strange that's not yet understood. Science is full of mysteries. What was the universe like before the Big Bang? What's at the center of black holes? How did life first start on Earth? Could we make humans live forever? Mysteries inspire scientists. Each one is an invitation to keep exploring.` },
            { word: `future scientists`, definition: `Kids like YOU who will grow up to make DISCOVERIES we can't imagine yet.`,
              audioPrompt: `Future scientists, {name}, are kids like you who will grow up to make discoveries we can't imagine yet. Every famous scientist was a kid once. They were curious. They asked questions. They observed. Maybe you'll be a famous scientist someday. Or maybe you'll just be a curious adult who looks at the world thoughtfully. Either way, you're part of science's future.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `You're a Scientist Too`,
          paragraphs: [
            `Here's the secret — YOU don't have to wait to be a scientist. YOU ARE ONE RIGHT NOW.`,
            `Every time you OBSERVE carefully — you're doing science. Every time you ASK QUESTIONS — science. Every time you TEST your guesses — science. The kid who watches an ant carry food back to its hole IS doing science. The kid who notices what makes plants grow IS doing science. The kid who wonders WHY the moon changes shape IS doing science. The only difference between you and a famous scientist is — they got to study for many years and use better tools. But the CURIOSITY? Same as yours. The METHOD? Same as yours. You're a scientist already. You just have to keep going.`,
          ],
          image: `/explorer-assets/science/l20-s5-everyone-scientist.webp`,
          imageCaption: `YOU are a scientist. Already. By observing, questioning, and testing — you're doing science right now.`,
          vocab: [
            { word: `curiosity`,      definition: `Wanting to know about things. CURIOSITY is the heart of being a scientist.`,
              audioPrompt: `Curiosity, {name}, is wanting to know about things. It's the heart of being a scientist. Famous scientists were curious. Kids in your school are curious. You're curious. Without curiosity, science wouldn't exist. With it — anyone can be a scientist. Keep being curious. Ask more questions. Notice more things. Wonder more.` },
            { word: `practice`,       definition: `To do something REGULARLY. PRACTICE science by observing and questioning every day.`,
              audioPrompt: `To practice, {name}, is to do something regularly. Practice science by observing and questioning every day. Notice the world around you. Ask 'why?' often. Try simple experiments. The more you practice, the better you become. Like any skill — playing piano, kicking a soccer ball, drawing — science gets stronger with practice.` },
            { word: `you`,            definition: `YES — YOU. Yes, even YOU can be a scientist. RIGHT NOW.`,
              audioPrompt: `You, {name}. Yes — YOU. Yes, even YOU can be a scientist. Right now. You don't need a degree. You don't need fancy equipment. You don't need to wait until you're an adult. Look around. Ask questions. Observe carefully. Notice patterns. Try things. Wonder about the world. That IS science. That IS being a scientist.` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Keep Exploring`,
          paragraphs: [
            `This is the END of OUR journey together. But your SCIENCE journey is just BEGINNING.`,
            `Keep ASKING QUESTIONS. Why does that happen? How does that work? What if I tried this? Keep OBSERVING. Notice the world around you with care. The leaf on the tree. The bug on the ground. The cloud in the sky. The sound of the wind. Keep WONDERING. Some of the biggest mysteries are right there, hidden in the everyday. Keep READING about science. Keep DOING experiments. Keep talking with people about big questions. The universe is BIG and AMAZING and full of mysteries. Some of those mysteries will be solved by YOU. The world needs curious minds like yours. Keep going.`,
          ],
          image: `/explorer-assets/science/l20-s6-keep-going.webp`,
          imageCaption: `Your science journey is just beginning. Keep asking, observing, wondering. The world needs curious minds.`,
          vocab: [
            { word: `keep going`,     definition: `Don't stop. KEEP GOING with your curiosity for the rest of your life.`,
              audioPrompt: `Keep going, {name}. Don't stop. Keep going with your curiosity for the rest of your life. Adults who stay curious have better, more interesting lives. They keep learning. They keep growing. They keep being amazed by the world. You're at the start of a long journey. Don't stop being curious — even when you're 80 years old. Especially then.` },
            { word: `journey`,        definition: `A long trip. Your SCIENCE JOURNEY is just beginning.`,
              audioPrompt: `A journey, {name}, is a long trip. Your science journey is just beginning. You learned 20 lessons here. But there are thousands MORE things to discover about plants, animals, planets, atoms, the human body, the deep ocean, far galaxies, ancient civilizations, the brain, ecosystems, AND much more. A whole lifetime of exploring awaits you. Each step opens new doors.` },
            { word: `wonder`,         definition: `To feel AMAZED and CURIOUS. WONDER is the seed of all science.`,
              audioPrompt: `Wonder, {name}, is to feel amazed and curious. Wonder is the seed of all science. Every great discovery started with someone WONDERING. Why is the sky blue? Why do birds fly? What's inside an atom? Stay curious. Stay full of wonder. The world is endlessly interesting if you keep looking with wide-open eyes.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember from our journey, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `Science BUILDS on the work of past scientists — generation by generation, knowledge grows.`,
              matchPhrase: `Yes! Every generation of scientists builds on what came before. Newton built on Galileo. Einstein built on Newton. Today's scientists build on Einstein. Science is humanity's greatest team project.`,
              correctMatch: `fact` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `ANYONE who is curious and asks questions can do science — even kids your age, right now.`,
              matchPhrase: `True! Science isn't just for adults in lab coats. Any curious person doing careful observation and asking honest questions is doing science. You're a scientist already. Keep going.`,
              correctMatch: `fact` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `Science has DISCOVERED EVERYTHING — there's NOTHING left to learn about the universe.`,
              matchPhrase: `Not at all! Much remains unknown. Dark matter, consciousness, life on other planets, deep oceans. Future generations have plenty to discover. Maybe you'll be one of them.`,
              correctMatch: `myth` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `ONLY SPECIAL people in labs can do science — ordinary curious kids cannot observe, experiment, or learn.`,
              matchPhrase: `Definitely not! ANYONE can do science. Curiosity is the only requirement. You don't need a degree or fancy equipment to observe, question, and test ideas. Be a scientist now.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Science is humanity's greatest ___ — generations of people building knowledge together.`,
              options: [`secret`, `team project`, `mistake`, `competition`],
              correctIndex: 1,
              explanation: `Team project! Science is built by generation after generation of curious people. Every scientist builds on the work of those before them. It's humanity's greatest team project — across all of time.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is the SCIENTIFIC METHOD?`,
              options: [`Just guessing`, `Observe, question, hypothesize, test, check — a reliable way to learn truth`, `Reading books only`, `Believing what others say`],
              correctIndex: 1,
              explanation: `The scientific method is: observe carefully, ask questions, make hypotheses (smart guesses), test them, check with others, adjust if needed. It's been refined over thousands of years and is the most reliable way to find truth.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `What is a HYPOTHESIS?`,
              options: [`A type of fish`, `A SMART GUESS scientists make BEFORE testing`, `An accident`, `A type of measurement`],
              correctIndex: 1,
              explanation: `A hypothesis is a smart guess scientists make before testing. Like 'this medicine might help colds.' Then they test it. The hypothesis might be right, wrong, or partly right — either way, testing teaches us something.` },
            { id: `l20-q4`, format: `true-false`,
              question: `Many MYSTERIES still remain unsolved in science — dark matter, consciousness, life on other planets.`,
              correctAnswer: true,
              explanation: `True! Despite all our progress, much is still unknown. Scientists are working on dark matter, consciousness, alien life, deep oceans, cures for diseases, and many more mysteries. The future is full of discoveries to make.` },
            { id: `l20-q5`, format: `fill-blank`,
              question: `___ is the heart of being a scientist — wanting to know about things.`,
              options: [`Curiosity`, `Money`, `Strength`, `Anger`],
              correctIndex: 0,
              explanation: `Curiosity! Wanting to know how things work. Asking why. Wondering what if. Without curiosity, science wouldn't exist. With it, anyone can be a scientist.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `What's the MOST IMPORTANT thing for being a scientist?`,
              options: [`Wearing a lab coat`, `Being CURIOUS, observing carefully, and asking questions`, `Being an adult`, `Going to a special school`],
              correctIndex: 1,
              explanation: `Be curious, observe, and ask questions. That's science. You don't need a lab coat or a degree to do science. You just need curiosity and the willingness to think carefully about the world.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. Right NOW, while you're reading this, MILLIONS of scientists around the world are working on incredible things. Doctors are finding new treatments for diseases. Astronomers are looking deeper into space than ever. Engineers are building robots and renewable energy systems. Marine biologists are exploring the deep ocean. Brain researchers are unlocking how thoughts work. Climate scientists are figuring out how to protect Earth. Kids in classrooms — like you — are starting to be the NEXT generation of scientists. Every single one of them was once a curious kid who decided to keep asking questions. That's where it starts.`,
          familyAdventure: `Have a SCIENCE CELEBRATION together. Get the whole family in one room. Take turns answering: 1) "ONE THING I LEARNED about science in this Coreverse journey." 2) "ONE QUESTION I STILL HAVE about the world." 3) "ONE thing I want to LEARN about next." Share your answers. Celebrate the journey. Then make a plan to keep exploring together — visit a museum, go for a nature walk, do an experiment. Make science part of your family life.`,
          creativePrompt: `Make a SCIENCE LEGACY PAGE. On paper, draw FOUR things: 1) Your favorite thing you LEARNED in this Coreverse journey. 2) A SCIENTIST who inspires you (or yourself!). 3) Your favorite mystery (something you still wonder about). 4) A picture of YOURSELF as a future scientist or explorer. Hang it on your wall. You're part of the story of science now.`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `{name}, you've done it. You completed the entire SCIENCE EXPLORER journey. Twenty lessons. Twenty discoveries. From learning how scientists think, to exploring living things, to understanding Earth and space, to discovering matter and energy, to seeing how engineering and ecosystems work. You know more about how the universe works than 99% of humans who ever lived. You're part of the long, beautiful story of science. And here's the secret — your journey isn't ending. It's just beginning. Keep your curiosity. Keep asking questions. Keep wondering. The universe is yours to explore. I've loved being your guide. Now go make discoveries of your own. — Cosmo 🦦`,
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
  const mags  = SCIENCE_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L20] Loaded: "Legacy of Science" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
