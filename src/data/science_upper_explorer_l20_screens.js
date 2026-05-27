// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L20 — The Legacy of Science: What Have We Learned?  (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS — Cross-cutting concepts; engineering practices;
//            connecting science to human progress
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — the big story of human science, science as ongoing
//        work, what's still being discovered, the student's place in
//        science's future
// VERSION: v1
// CAPSTONE: 100 XP. Wraps the entire science subject. Cosmo's farewell.
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-20`,
      title: `The Legacy of Science: What Have We Learned?`,
      duration: 18,
      xpReward: 100,
      badge: `science-graduate`,
      badgeName: `Science Graduate`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. This is our LAST lesson together for Science. We've covered 19 lessons, from observation to atoms to ecosystems to engineering. Today we ZOOM ALL THE WAY OUT. The big story of human science across history. Where we are now. What we're still discovering. And how YOU are part of what comes next. Final lesson. Bring your curiosity. Let's go.`,
          headline: `The Legacy of Science`,
          subtitle: `The big story of human discovery, and your place in it`,
          visual: `/ue-assets/science/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Where Science Came From`,
          paragraphs: [
            `Humans have been doing SOMETHING LIKE science for tens of thousands of years. Ancient hunters had to predict animal behavior. Ancient farmers had to predict seasons. Ancient builders had to engineer structures that wouldn't collapse. People in cultures all over the world figured out medicines from plants, navigation from stars, and patterns from nature. The basic habit of observation, hypothesis, and testing existed long before "science" was a formal practice. We did it informally for almost all of human history.`,
            `Modern SCIENCE became a more formal discipline starting around the 1500s and 1600s, during what's called the Scientific Revolution (which you covered in History UE if you've taken that subject). Galileo, Newton, and others established that careful experiments and mathematical thinking could reveal deep patterns in nature. Since then, science has accelerated dramatically. In just 400 years, humans have gone from not knowing what stars are to landing rovers on Mars. From not understanding diseases to developing vaccines. From candle-light to splitting the atom. The pace of discovery is faster now than at any time in human history.`,
          ],
          image: `/ue-assets/science/l20-s1-history.webp`,
          imageCaption: `Ancient observers → Scientific Revolution → today. The arc of human discovery.`,
          vocab: [
            { word: `discovery`,
              definition: `Finding out something previously unknown. Scientific discoveries can be tiny details or huge breakthroughs that change how humans understand the world.`,
              audioPrompt: `Discovery is finding out something previously unknown, {name}. Scientific discoveries can be tiny details that only specialists care about, or huge breakthroughs that change how humans understand the world. The discovery that Earth orbits the Sun was a huge one. The discovery of penicillin saved millions of lives. The discovery that some viruses cause cancer changed cancer research. Discovery often comes from many years of careful work. Sometimes it comes from sudden insight. Sometimes from happy accidents. But mostly from people who paid attention to details others missed.` },
            { word: `hypothesis`,
              definition: `A testable prediction a scientist makes before running an experiment. Based on careful thinking, not random guessing. Tested against evidence and revised if results don't match.`,
              audioPrompt: `A hypothesis is a testable prediction that a scientist makes before running an experiment, {name}. It's an educated guess based on what you already know. A hypothesis isn't random. It comes from careful thinking about the question. If I add more fertilizer, the plants will grow taller is a hypothesis. Scientists then design experiments to test whether the hypothesis is correct. If the results don't match, the hypothesis is revised. If results support it repeatedly, it becomes stronger evidence for a theory.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Science Has Given Humanity`,
          paragraphs: [
            `Modern science and engineering have transformed human life in ways that would have seemed magical even 200 years ago. MEDICINE: vaccines, antibiotics, surgery, ultrasound imaging, and treatments for diseases that once killed almost everyone who caught them. Average lifespans have nearly doubled in many countries. FOOD: better understanding of nutrition, plus farming methods that feed billions more people than ever before. TECHNOLOGY: electricity, computers, the internet, phones that fit in pockets. TRANSPORTATION: cars, planes, ships, even spacecraft.`,
            `Science has also given humans tools to UNDERSTAND THE UNIVERSE we live in. We know how Earth formed (4.5 billion years ago, from a swirling cloud of dust and gas). We know how life evolved (over billions of years, from simple cells to complex animals like us). We've measured the distance to distant galaxies and figured out that the universe is BIGGER and OLDER than humans of the past could imagine. We've split atoms and mapped genomes. Nearly everything you take for granted, from clean water to refrigeration to recorded music, exists because of scientific discoveries and engineering applications over the past few centuries.`,
          ],
          image: `/ue-assets/science/l20-s2-gifts.webp`,
          imageCaption: `Medicine, food, technology, transportation, understanding. Science's gifts to humanity.`,
          vocab: [
            { word: `theory`,
              definition: `A well-tested explanation of something in nature, supported by lots of evidence. In science, "theory" means more than a guess — it means a deeply established explanation.`,
              audioPrompt: `In science, a theory is a well-tested explanation of something in nature, {name}. It's supported by lots of evidence. The theory of gravity. The germ theory of disease. The theory of evolution. These are not guesses. They're deeply established explanations backed by mountains of evidence. In everyday language, people sometimes say theory to mean a guess. But in science, theory means something much stronger. A scientific theory is the closest thing science has to certainty about how the world works.` },
            { word: `experiment`,
              definition: `A designed test scientists use to answer a question about the world. Good experiments change one variable at a time and keep everything else the same, allowing repeatable results.`,
              audioPrompt: `An experiment is a designed test that scientists use to answer a question about the world, {name}. Good experiments change one thing at a time, the variable, and keep everything else the same. That way, scientists can tell what caused any differences they observe. Experiments that can be repeated and get the same results are stronger evidence than one-time results. Not all science uses formal experiments, but the logic of testing carefully applies everywhere.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What We're Still Trying to Figure Out`,
          paragraphs: [
            `Despite huge progress, MANY ENORMOUS QUESTIONS remain unanswered. Science has only mapped about 5% of the universe. The other 95% appears to be made of "dark matter" and "dark energy," which we know exist but don't really understand. We don't know what consciousness IS, even though every human experiences it constantly. We don't know whether there's life beyond Earth. We don't fully understand how the brain creates thoughts and emotions. We don't know the deepest reason why mathematics works so well to describe the physical world.`,
            `New discoveries happen constantly. New diseases need new treatments. Climate change requires new energy solutions. Aging populations need new medical breakthroughs. Mars exploration is just beginning. AI is changing what science even looks like. The story of science isn't over. It's accelerating. And here's the cool part: the BIG QUESTIONS still need answering, and that means real scientific work for centuries to come. Every generation gets to add to what humanity knows. Every generation gets to ask questions earlier generations couldn't even formulate.`,
          ],
          image: `/ue-assets/science/l20-s3-unknown.webp`,
          imageCaption: `Dark matter, consciousness, alien life, brain mysteries. So much still unknown.`,
          vocab: [
            { word: `evidence`,
              definition: `Information from observations or experiments that supports or challenges a scientific claim. Evidence is what makes scientific knowledge trustworthy and able to be checked by other people.`,
              audioPrompt: `Evidence is information from observations or experiments, {name}. It supports or challenges a scientific claim. Evidence is what makes scientific knowledge trustworthy. Without evidence, a claim is just an opinion. With evidence, other scientists can check the work. Strong scientific theories are backed by lots of evidence from many different sources. The germ theory of disease, the theory of evolution, the laws of motion are all supported by enormous evidence. Looking for evidence and checking what evidence supports are core scientific skills.` },
            { word: `scientific method`,
              definition: `The process scientists use to investigate questions and build reliable knowledge: observe, question, hypothesize, experiment, collect data, draw conclusions, and revise.`,
              audioPrompt: `The scientific method is the process scientists use to investigate questions and build reliable knowledge, {name}. It usually follows these steps: observe something, ask a question, form a hypothesis, design and run an experiment, collect data, and draw conclusions. If the data supports the hypothesis, it adds to what science knows. If it doesn't, the hypothesis gets revised. The scientific method isn't a strict recipe. Real science is messier and more creative. But the core idea stays the same: test ideas against evidence and update based on results.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Your Place in the Story`,
          paragraphs: [
            `Every lesson in this subject covered work done by REAL HUMANS. Marie Curie spent years observing radioactivity. Charles Darwin spent years watching birds and plants. Galileo defended evidence even when it was dangerous. Engineers iterated for decades on planes, computers, and medicines. None of them did this alone or in one perfect leap. They did it through careful observation, honest thinking, and persistent work. They didn't always know how things would turn out. They worked anyway, because curiosity and the chance to understand or build something matter.`,
            `By the time you're an adult, you'll have CHOICES to make. You might become a scientist who studies an unanswered question. You might become an engineer who solves a problem nobody has solved yet. You might become a doctor, a farmer, a teacher, a parent, or something we don't have a name for yet. WHATEVER you do, you'll have learned the scientific habit of pausing, observing, checking, and updating. You'll have learned that questions matter as much as answers. You'll have learned that the world is bigger, weirder, and more interesting than humans of the past imagined. {name}, that's a gift you take forward for life. Use it well. The next chapter of human science is partly being written by you.`,
          ],
          image: `/ue-assets/science/l20-s4-your-place.webp`,
          imageCaption: `Every scientist was once a curious kid. So are you. Your turn is coming.`,
          vocab: [
            { word: `curiosity`,
              definition: `The desire to ask questions and understand things. The single most important habit any scientist (or thoughtful human) can have. Where every discovery begins.`,
              audioPrompt: `Curiosity is the desire to ask questions and understand things, {name}. It's the single most important habit any scientist or thoughtful human can have. Every scientific discovery in history started because someone was curious. Why does that happen? How does this work? What's going on here? Curiosity isn't just for school. It serves you in every area of life. People who stay curious throughout their lives tend to learn more, adapt better to change, and find more meaning in what they do.` },
            { word: `observation`,
              definition: `The careful, intentional act of noticing and recording what's happening in the world. The starting point of all science, and the first and most fundamental scientific skill.`,
              audioPrompt: `Observation is the careful, intentional act of noticing and recording what's happening in the world, {name}. It's the starting point of all science. Every scientific discovery begins with someone observing something carefully. Galileo observed the moons of Jupiter. Darwin observed birds with different beak shapes. Scientists observe temperature changes, species behavior, chemical reactions, star movements. Good observation is more than just looking. It means noticing details others miss, recording them accurately, and thinking about what they might mean. Observation is the first and most fundamental scientific skill.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Final investigation, {name}. Four scientific events or facts. For each one, decide what KIND of work it represents: ESTABLISHED SCIENCE (well-tested and broadly accepted), ONGOING RESEARCH (we're still actively trying to figure it out), or DEEP MYSTERY (we know it's there but don't really understand it yet)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `established`,    label: `Established Science`,  color: `#34D399`, description: `Well-tested. Lots of evidence. Broadly accepted by scientists.` },
            { id: `ongoing`,        label: `Ongoing Research`,      color: `#FBBF24`, description: `Scientists are actively working on it. Some answers; many open questions.` },
            { id: `mystery`,        label: `Deep Mystery`,          color: `#A78BFA`, description: `We know it exists but don't really understand it yet. A real frontier.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `Earth orbits the Sun.` },
                { text: `This has been demonstrated by countless observations, calculations, and space missions.` },
                { text: `Every scientist in the world agrees on this.` },
              ],
              correctAnswer: `established`,
              realWorldExample: `Heliocentrism is one of the most established facts in modern science.`,
              explanation: `Massive evidence. Broad agreement. No serious debate. Pure established science. Hard to remember, but the idea that Earth orbits the Sun was controversial 500 years ago. Now it's so accepted that it's basic knowledge.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Scientists are developing new treatments for Alzheimer's disease.` },
                { text: `Some treatments help slow the disease but none cure it yet.` },
                { text: `Researchers around the world are testing many different approaches.` },
              ],
              correctAnswer: `ongoing`,
              realWorldExample: `Alzheimer's research is one of the most active areas in medicine.`,
              explanation: `Active work. Some progress. Big unsolved problems. Pure ongoing research. Many of the biggest health and technology challenges of our era are in this category. There's been progress, but the final answers haven't been found yet.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `About 95% of the universe appears to be made of "dark matter" and "dark energy."` },
                { text: `Scientists can detect their gravitational effects but can't see or directly measure them.` },
                { text: `Nobody knows what they actually are.` },
              ],
              correctAnswer: `mystery`,
              realWorldExample: `Dark matter and dark energy are some of the deepest mysteries in modern physics.`,
              explanation: `We know it's there. We have no idea what it is. Pure deep mystery. This is one of the most exciting frontiers in modern science. Solving it would transform our understanding of the universe.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `Climate change is happening, mostly caused by humans burning fossil fuels.` },
                { text: `The basic mechanism (greenhouse gases trap heat) is established with high confidence.` },
                { text: `Scientists are actively researching exactly how much warming will happen, what the effects will be, and which solutions will work best.` },
              ],
              correctAnswer: `established`,
              realWorldExample: `Climate change is one of the most thoroughly studied topics in modern science.`,
              explanation: `Tricky because climate has both well-established parts AND ongoing research parts. The BASIC SCIENCE (greenhouse gases trap heat, humans are adding lots of them) is broadly accepted as established science. The specifics of what comes next and what to do are still being researched. So the most accurate answer for the basic mechanism is "established science." Lesson: in real topics, multiple categories often apply. Climate change has settled science, ongoing research, AND mysteries all at once. Smart thinkers learn to tell them apart.`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final quiz, {name}. You've earned this.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Roughly when did MODERN science become a more formal discipline?`,
              options: [
                `In the last 10 years`,
                `Starting around the 1500s and 1600s, during the Scientific Revolution`,
                `In ancient Egypt`,
                `Last century`,
              ],
              correctIndex: 1,
              explanation: `Modern science became more formal during the Scientific Revolution. Galileo, Newton, and others established that careful experiments and mathematics could reveal deep patterns. In just 400 years since then, science has accelerated dramatically.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is a scientific THEORY?`,
              options: [
                `Just a guess`,
                `A well-tested explanation of something in nature, supported by lots of evidence — not the same as a casual guess`,
                `An opinion`,
                `A simple idea`,
              ],
              correctIndex: 1,
              explanation: `In science, "theory" means a deeply established explanation backed by mountains of evidence. The theory of gravity. The theory of evolution. The germ theory of disease. These are far more than guesses. They're the closest things science has to certainty.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `What's something modern science HAS given humanity?`,
              options: [
                `Nothing useful`,
                `Medicine (vaccines, antibiotics, surgery), better food production, electricity, computers, the internet, transportation, and understanding of the universe`,
                `Only computers`,
                `Only medicine`,
              ],
              correctIndex: 1,
              explanation: `Modern science and engineering have transformed almost every aspect of human life. Vaccines and antibiotics have saved billions of lives. Modern farming feeds many more people than ever before. Communication, transportation, and energy systems all depend on science. Average lifespans have nearly doubled.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `What's an example of something science is STILL trying to figure out?`,
              options: [
                `Everything is figured out`,
                `Dark matter and dark energy (95% of the universe), consciousness, whether there's life beyond Earth, brain mysteries, climate change solutions`,
                `Why Earth orbits the Sun`,
                `Whether plants grow`,
              ],
              correctIndex: 1,
              explanation: `Despite enormous progress, huge questions remain. Most of the universe is "dark" and mysterious. Consciousness is poorly understood. Alien life is unknown. The brain still has secrets. Every generation of scientists faces real, unanswered questions.` },

            { id: `l20-q5`, format: `true-false`,
              question: `True or false: Every generation of scientists has the chance to discover things earlier generations didn't even know to look for.`,
              correctAnswer: true,
              explanation: `True. Each generation builds on past discoveries while pursuing new questions. The questions Marie Curie pursued didn't exist before her era. The questions YOUR generation will pursue might not be possible to ask yet. Science is ongoing.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `What's CURIOSITY?`,
              options: [
                `A bad trait`,
                `The desire to ask questions and understand things — the single most important habit for science and for life`,
                `Just being nosy`,
                `Only for kids`,
              ],
              correctIndex: 1,
              explanation: `Curiosity is the desire to understand. Every scientific discovery started with someone asking "why?" or "how?" People who stay curious throughout life tend to learn more, adapt better, and find more meaning. It's not just for kids — it's the foundation of a thoughtful life.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What's the most IMPORTANT thing studying SCIENCE can give you?`,
              options: [
                `A grade`,
                `The habit of observing, testing, updating beliefs based on evidence, and staying curious about the world`,
                `Just facts`,
                `Cool gadgets`,
              ],
              correctIndex: 1,
              explanation: `The biggest gift of science isn't the facts. It's the habit. Pausing, observing, testing, updating. Being honest with yourself about what you know and don't know. Staying curious. These habits serve you in every area of life, not just labs and classrooms.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `What's YOUR role in the future of science?`,
              options: [
                `Nothing — only adults do science`,
                `You'll bring your own questions, work, and curiosity. Maybe as a scientist or engineer, maybe just as someone who thinks scientifically about life.`,
                `Just memorize facts`,
                `Wait for others to figure things out`,
              ],
              correctIndex: 1,
              explanation: `Every adult who does science was once a curious kid. Whether you become a scientist, an engineer, a doctor, or just someone who thinks scientifically, you'll bring something new. The next chapter of human knowledge is partly being written by you and your generation.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Final reflection, {name}. Pick ONE question. This one matters because it's about YOU.`,
          prompts: [
            { id: `r1`, text: `Of everything you've learned in Science this year, what's ONE idea that stuck with you most? Why?` },
            { id: `r2`, text: `What's a question you've always been curious about? Whether or not it's a "science" question — what makes you wonder?` },
            { id: `r3`, text: `If you could become an expert in ONE scientific field (any field — biology, astronomy, neuroscience, engineering, anything), which would you pick?` },
            { id: `r4`, text: `What's something the WORLD needs that science could help with? Even a small thing.` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `You've now completed 20 lessons of science. From the basics of observation to engineering, ecosystems, and the universe. You know how to think scientifically. You can identify good evidence. You know how to distinguish settled science from open questions. You can handle the design process. You understand how living things work, how energy flows, how matter behaves, and how Earth fits in the cosmos. As you grow up, you'll use these skills in every field you touch. Doctors, engineers, teachers, farmers, parents, and citizens all benefit from scientific habits. Carry them forward.`,
          familyAdventure: `Family Big-Question Conversation. As a family, talk about ONE BIG QUESTION each of you has wondered about. Why do we dream? How did life start? What's at the bottom of the ocean? Is there alien life? Pick one. Talk about what you'd want to know. Talk about what kind of evidence would convince you of an answer. This is the kind of conversation real scientists have all the time. Some of the biggest questions are answered through years of work that started with conversations exactly like this.`,
          creativePrompt: {
            intro: `Write a letter to YOURSELF in 2050, when you'll be around 35-37 years old. Tell your future self what you hope you've done with the science thinking you learned.`,
            floor: `Write at least 5 sentences. Cover one thing about science you hope you've explored further, one habit you hope you've kept, and one big question you hope humans have answered by 2050.`,
            stretch: `Write 8 to 10 sentences. Cover what you've learned about science, what you hope to have done with your curiosity, what kind of thinker you hope to be, and what you hope the world looks like.`,
            open: `Write as much as you want. Build a full letter to your future self. Capture your hopes, your curiosity, your values, and your sense of what kind of life you'd want to have lived. Don't worry about being perfect. Be honest about what you wonder and what you want to do.`,
            frames: [
              `Dear future me, today is 2026 and you are reading this in 2050.`,
              `One thing I hope you've explored is ___.`,
              `One habit I hope you've kept is ___.`,
              `A question I hope humans have answered by now is ___.`,
              `Whatever you do, stay ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `Congratulations, {name}. You've completed every Science lesson in the Upper Explorer band. From scientific thinking to atoms to life cycles to engineering to the legacy of science. You can think scientifically, design experiments, understand life and the physical world, and hold honest uncertainty about the questions that remain. You've earned the Science Graduate badge AND 100 XP for the capstone. More importantly, you carry the scientific habits forward. Stay curious. Pay attention. Question your own assumptions. Test things when you can. Listen to evidence. And remember: every great scientist was once a curious kid who asked too many questions. Be that kid. — Cosmo. Always.`,
          badge: `science-graduate`,
          badgeName: `Science Graduate`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
